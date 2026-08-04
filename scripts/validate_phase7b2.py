#!/usr/bin/env python3
"""Read-only validation gate for Phase 7B.2 technical editorial pilots."""

from __future__ import annotations

from hashlib import sha256
from html import unescape
import json
from pathlib import Path
import re
import subprocess
import sys

from topic_content_lib import ROOT, TopicContentError, build_artifacts


BASE_TAG = "fase-7b1-completada"
PILOTS = ("B2-T04", "B3-T07", "B4-T08")
ALLOWED_SOURCES = {
    "B2-T04": {"SRC-TECH-MICROSOFT-WINDOWS-HAL-LIBRARY", "SRC-TECH-LINUX-KERNEL-ADMIN-GUIDE"},
    "B3-T07": {"SRC-TECH-WHATWG-HTML-LS", "SRC-TECH-W3C-XML-1-0-5E", "SRC-TECH-ECMA-262-2026"},
    "B4-T08": {"SRC-TECH-IETF-RFC-9110", "SRC-TECH-IETF-RFC-9846"},
}
PROTECTED = (
    "data/syllabus.json", "data/sources.json", "data/questions-official.json",
    "data/questions-ai.json", "data/questions-manual.json", "data/updates.json",
    "documents/sources/technical/manifest.json",
    "documents/sources/technical/coverage-matrix.json",
    "schemas/source.schema.json", "schemas/technical-source-manifest.schema.json",
    "schemas/technical-coverage.schema.json",
    "documents/sources/technical/public/B3-T07/whatwg-html-living-standard-introduction.html",
    "documents/sources/technical/public/B3-T07/w3c-xml-1-0-fifth-edition.html",
    "documents/sources/technical/public/B3-T07/ecma-262-17th-edition.html",
    "documents/sources/technical/public/B4-T08/rfc9110.txt",
    "documents/sources/technical/public/B4-T08/rfc9846.txt",
)
REQUIRED = (
    "PLAN_FASE_7B_2.md", "scripts/validate_phase7b2.py",
    "tests/phase7b2-runner.html", "tests/phase7b2-tests.js",
    "docs/REVISION_EDITORIAL_FASE_7B_2.md",
    "docs/PRUEBAS_MANUALES_FASE_7B_2.md",
)
CITATION_RE = re.compile(r"\[\[fuente:(SRC-[A-Z0-9-]+)\|localizador=([^|\]\r\n]+)(?:\|fragmento=([^|\]\s]+))?\]\]")
SUBSTANTIVE_RE = re.compile(r":::(?:derivado|resumen|explicacion)\n([\s\S]*?)\n:::")
FORBIDDEN_RE = re.compile(r"<\s*(?:script|iframe|object|embed|form)\b|\bon[a-z]+\s*=|javascript:|documents/sources/technical/private", re.IGNORECASE)


def read_text(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def unchanged(path: str) -> bool:
    baseline = subprocess.run(["git", "show", f"{BASE_TAG}:{path}"], cwd=ROOT, capture_output=True, check=False)
    current = ROOT / path
    return baseline.returncode == 0 and current.is_file() and sha256(baseline.stdout).digest() == sha256(current.read_bytes()).digest()


def run_prerequisites(errors: list[str]) -> None:
    names = (
        "validate_json.py", "validate_questions.py", "validate_references.py",
        "validate_phase2.py", "validate_phase3.py", "validate_phase4.py",
        "validate_phase5.py", "validate_phase6.py", "validate_phase7.py",
        "validate_phase7b1.py",
    )
    for name in names:
        result = subprocess.run([sys.executable, str(ROOT / "scripts" / name)], cwd=ROOT, check=False)
        if result.returncode:
            errors.append(f"ERROR: {name} ha fallado antes de validar 7B.2.")


def verified_locators() -> dict[str, set[str]]:
    manifest = json.loads(read_text("documents/sources/technical/manifest.json"))
    return {
        source["sourceId"]: {item["locator"] for item in source.get("verifiedLocators", [])}
        for source in manifest["sources"]
    }


def validate_markdown(errors: list[str]) -> None:
    allowed_locators = verified_locators()
    for topic_id in PILOTS:
        text = read_text(f"content/topics/{topic_id}.md")
        if '"status": "partial"' not in text or '"reviewStatus": "needs-review"' not in text:
            errors.append(f"ERROR: {topic_id} no conserva partial y needs-review.")
        blocks = SUBSTANTIVE_RE.findall(text)
        if len(blocks) < 5:
            errors.append(f"ERROR: {topic_id} necesita varias secciones sustantivas; solo hay {len(blocks)}.")
        if any(not CITATION_RE.search(block) for block in blocks):
            errors.append(f"ERROR: {topic_id} contiene un bloque sustantivo sin referencia.")
        citations = CITATION_RE.findall(text)
        cited_sources = {source_id for source_id, _, _ in citations}
        if not cited_sources or not cited_sources <= ALLOWED_SOURCES[topic_id]:
            errors.append(f"ERROR: {topic_id} usa fuentes no aprobadas: {sorted(cited_sources - ALLOWED_SOURCES[topic_id])}.")
        for source_id, locator, fragment in citations:
            if locator.strip() not in allowed_locators.get(source_id, set()):
                errors.append(f"ERROR: {topic_id} usa un localizador no verificado para {source_id}: {locator.strip()}.")
            if fragment:
                errors.append(f"ERROR: {topic_id} fabrica un fragmento externo no catalogado.")
        if "documents/sources/technical/private" in text or "C:\\" in text:
            errors.append(f"ERROR: {topic_id} expone una ruta privada o absoluta.")
        if "Contenido pendiente de una fuente verificable." not in text:
            errors.append(f"ERROR: {topic_id} no hace visible su cobertura pendiente.")
    b4 = read_text("content/topics/B4-T08.md")
    if "SRC-TECH-IETF-RFC-9846" not in b4 or re.search(r"\[\[fuente:[^\]]*8446", b4):
        errors.append("ERROR: B4-T08 debe usar RFC 9846 y no citar RFC 8446 como fuente vigente.")
    b3 = read_text("content/topics/B3-T07.md")
    if set(re.findall(r"\[\[fuente:(SRC-TECH-ECMA-[A-Z0-9-]+)", b3)) != {"SRC-TECH-ECMA-262-2026"}:
        errors.append("ERROR: B3-T07 debe usar una sola identidad lógica normativa para ECMA-262.")


def validate_artifacts(errors: list[str]) -> None:
    try:
        first = build_artifacts(ROOT)
        second = build_artifacts(ROOT)
    except TopicContentError as error:
        errors.append(f"ERROR: el constructor no puede compilar 7B.2: {error}")
        return
    if first.outputs != second.outputs:
        errors.append("ERROR: el constructor no es determinista.")
    for path, payload in first.outputs.items():
        if not (ROOT / path).is_file() or (ROOT / path).read_bytes() != payload:
            errors.append(f"ERROR: artefacto desactualizado: {path}.")
    by_id = {topic.topic_id: topic for topic in first.topics}
    partial = [topic for topic in first.topics if topic.metadata["status"] == "partial"]
    pending = [topic for topic in first.topics if topic.metadata["status"] == "pending"]
    if len(partial) != 4 or len(pending) != 29:
        errors.append(f"ERROR: se esperaban 4 partial y 29 pending; hay {len(partial)} y {len(pending)}.")
    if any(topic.metadata["status"] == "complete" or topic.metadata["reviewStatus"] == "reviewed" for topic in first.topics):
        errors.append("ERROR: 7B.2 no puede marcar temas complete o reviewed.")
    for topic_id in PILOTS:
        topic = by_id[topic_id]
        if topic.metadata["status"] != "partial" or topic.metadata["reviewStatus"] != "needs-review":
            errors.append(f"ERROR: {topic_id} no es partial y needs-review en los artefactos.")
        html = topic.html
        if "Cobertura parcial" not in html or "topic-content__toc" not in html:
            errors.append(f"ERROR: {topic_id} no muestra aviso parcial o tabla de contenidos.")
        if FORBIDDEN_RE.search(html) or "<h1" in html.lower():
            errors.append(f"ERROR: {topic_id} contiene HTML ejecutable, privado o un H1 generado.")
        if topic_id == "B3-T07":
            if html.count("ECMAScript 2026 Language Specification (nueva pestaña)") != 1:
                errors.append("ERROR: ECMA-262 no aparece una sola vez en la lista lógica de fuentes.")
            if "&lt;article&gt;" not in html or "&lt;aviso prioridad=" not in html:
                errors.append("ERROR: los ejemplos HTML/XML no quedaron escapados.")
        for section in topic.index_entry["sections"]:
            if f'id="{section["sectionId"]}"' not in html:
                errors.append(f"ERROR: {topic_id}:{section['sectionId']} no resuelve en el HTML.")
    report = read_text("docs/COBERTURA_TEMARIO_FASE_7.md")
    for expected in ("4 temas `partial`", "29 `pending`", "0 `complete`", "0 `reviewed`", "B2-T04", "B3-T07", "B4-T08"):
        if expected not in report:
            errors.append(f"ERROR: el informe de cobertura no contiene {expected!r}.")


def validate_protection(errors: list[str]) -> None:
    for path in PROTECTED:
        if not unchanged(path):
            errors.append(f"ERROR: 7B.2 modificó un archivo protegido: {path}.")
    for path in REQUIRED:
        if not (ROOT / path).is_file():
            errors.append(f"ERROR: falta el entregable 7B.2 {path}.")
    forbidden_paths = ("PLAN_FASE_7B_3.md", "PLAN_FASE_8.md", "scripts/validate_phase8.py", "tests/phase8-runner.html")
    if any((ROOT / path).exists() for path in forbidden_paths):
        errors.append("ERROR: se detectaron entregables de 7B.3 o Fase 8.")


def main() -> int:
    errors: list[str] = []
    run_prerequisites(errors)
    validate_protection(errors)
    validate_markdown(errors)
    validate_artifacts(errors)
    if errors:
        print("\n".join(errors))
        return 1
    print("OK: pilotos técnicos parciales, trazabilidad, seguridad y límites de Fase 7B.2 validados.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
