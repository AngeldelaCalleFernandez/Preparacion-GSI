#!/usr/bin/env python3
"""Validate Phase 7A without regenerating or changing repository files."""

from __future__ import annotations

from hashlib import sha256
from copy import deepcopy
import json
from pathlib import Path
import re
import subprocess
import sys

try:
    from jsonschema import Draft202012Validator, FormatChecker
except ImportError:
    print("ERROR: falta jsonschema. Instale scripts/requirements-validation.txt.")
    raise SystemExit(2)

from topic_content_lib import (
    GENERATED_DIR,
    INDEX_PATH,
    REPORT_PATH,
    ROOT,
    TOPICS_DIR,
    TopicContentError,
    build_artifacts,
)


BASE_TAG = "fase-6-completada"
SOURCE_BASE_TAG = "fase-7a-completada"
REQUIRED = (
    "PLAN_FASE_7.md",
    "assets/js/topic-content-service.js",
    "assets/js/syllabus-view.js",
    "assets/js/router.js",
    "assets/js/app.js",
    "schemas/topic-content.schema.json",
    "data/topic-content.json",
    "scripts/topic_content_lib.py",
    "scripts/build_topic_content.py",
    "tests/phase7-runner.html",
    "tests/phase7-tests.js",
    "docs/COBERTURA_TEMARIO_FASE_7.md",
    "docs/PRUEBAS_MANUALES_FASE_7.md",
)
PROTECTED = (
    "data/syllabus.json",
    "data/questions-official.json",
    "data/questions-ai.json",
    "data/questions-manual.json",
    "data/updates.json",
    "schemas/question.schema.json",
    "schemas/syllabus.schema.json",
    "schemas/update.schema.json",
)
FORBIDDEN_HTML_RE = re.compile(r"<\s*(?:script|style|iframe|object|embed|form)\b|\bon[a-z]+\s*=|(?:javascript|data|vbscript):", re.IGNORECASE)
ABSOLUTE_PATH_RE = re.compile(r"(?:[A-Za-z]:\\|C:/TAI-proyecto)", re.IGNORECASE)
POSSIBLE_SECRET_RE = re.compile(r"(?:api[_-]?key|secret|token|password)\s*[:=]\s*['\"]?[A-Za-z0-9_-]{12,}", re.IGNORECASE)


def read_bytes(relative_path: str) -> bytes:
    return (ROOT / relative_path).read_bytes()


def read_text(relative_path: str) -> str:
    return (ROOT / relative_path).read_text(encoding="utf-8")


def run_validator(name: str, errors: list[str]) -> None:
    result = subprocess.run([sys.executable, str(ROOT / "scripts" / name)], cwd=ROOT, check=False)
    if result.returncode:
        errors.append(f"ERROR: {name} ha fallado; no se puede validar la Fase 7A.")


def baseline_paths(errors: list[str]) -> list[str]:
    command = ["git", "ls-tree", "-r", "--name-only", BASE_TAG, "--", "data/demo"]
    result = subprocess.run(command, cwd=ROOT, text=True, encoding="utf-8", capture_output=True, check=False)
    if result.returncode:
        errors.append(f"ERROR: no se pudo leer la etiqueta base {BASE_TAG} para proteger archivos previos.")
        return list(PROTECTED)
    demo_paths = [line.strip() for line in result.stdout.splitlines() if line.strip().endswith(".json")]
    return [*PROTECTED, *demo_paths]


def validate_protected_files(errors: list[str]) -> None:
    for relative_path in baseline_paths(errors):
        baseline = subprocess.run(
            ["git", "show", f"{BASE_TAG}:{relative_path}"],
            cwd=ROOT,
            capture_output=True,
            check=False,
        )
        current_path = ROOT / relative_path
        if baseline.returncode or not current_path.is_file():
            errors.append(f"ERROR: no se pudo comprobar el archivo protegido {relative_path}.")
            continue
        if sha256(baseline.stdout).digest() != sha256(current_path.read_bytes()).digest():
            errors.append(f"ERROR: se modificó un archivo protegido de fases anteriores: {relative_path}.")


def validate_source_migration(errors: list[str]) -> None:
    """Allow only manifest-verified technical additions after Fase 7A."""
    baseline = subprocess.run(
        ["git", "show", f"{SOURCE_BASE_TAG}:data/sources.json"], cwd=ROOT,
        capture_output=True, text=True, encoding="utf-8", check=False,
    )
    if baseline.returncode:
        errors.append(f"ERROR: no se pudo leer {SOURCE_BASE_TAG} para proteger el catálogo histórico.")
        return
    try:
        old_catalog = json.loads(baseline.stdout)
        current_catalog = json.loads(read_text("data/sources.json"))
        manifest = json.loads(read_text("documents/sources/technical/manifest.json"))
        source_schema = json.loads(read_text("schemas/source.schema.json"))
        validator = Draft202012Validator(source_schema, format_checker=FormatChecker())
    except (OSError, ValueError, json.JSONDecodeError) as error:
        errors.append(f"ERROR: no se pudo comprobar la migración de fuentes: {error}")
        return
    old_by_id = {item["id"]: item for item in old_catalog["sources"]}
    current_by_id = {item.get("id"): item for item in current_catalog.get("sources", []) if isinstance(item, dict)}
    for source_id, old_source in old_by_id.items():
        if current_by_id.get(source_id) != old_source:
            errors.append(f"ERROR: el registro histórico {source_id} fue eliminado o modificado tras Fase 7A.")
    verified = {
        item.get("sourceId") for item in manifest.get("sources", [])
        if isinstance(item, dict) and item.get("publicationStatus") == "current" and item.get("revisions")
    }
    for source_id, source in current_by_id.items():
        if source_id in old_by_id:
            continue
        if source.get("sourceKind") != "technical-primary-source":
            errors.append(f"ERROR: la fuente nueva {source_id} no usa la rama técnica estricta.")
        elif source.get("manifestSourceId") != source_id or source_id not in verified:
            errors.append(f"ERROR: la fuente nueva {source_id} no está verificada en el manifiesto técnico.")
    if list(validator.iter_errors(old_catalog)):
        errors.append("ERROR: el esquema ampliado ya no admite datos históricos.")
    sample = deepcopy(next(iter(old_by_id.values())))
    sample["documents"][0]["path"] = "documents/sources/technical/public/B3-T07/falso.html"
    if not list(validator.iter_errors({"metadata": old_catalog["metadata"], "sources": [sample]})):
        errors.append("ERROR: el esquema ampliado relajó la ruta de un documento convertido.")
    sample = deepcopy(next(iter(old_by_id.values())))
    sample["sourceKind"] = "technical-primary-source"
    if not list(validator.iter_errors({"metadata": old_catalog["metadata"], "sources": [sample]})):
        errors.append("ERROR: un registro histórico puede declararse técnico para eludir restricciones.")


def validate_schema(index: object, errors: list[str]) -> None:
    try:
        schema = json.loads(read_text("schemas/topic-content.schema.json"))
        Draft202012Validator.check_schema(schema)
        validator = Draft202012Validator(schema, format_checker=FormatChecker())
        for error in sorted(validator.iter_errors(index), key=lambda item: list(item.path)):
            location = ".".join(str(part) for part in error.absolute_path) or "raíz"
            errors.append(f"ERROR: data/topic-content.json:{location}: {error.message}")
    except (OSError, json.JSONDecodeError, ValueError) as error:
        errors.append(f"ERROR: esquema o índice editorial inválido: {error}")


def validate_artifacts(errors: list[str]) -> None:
    try:
        artifacts = build_artifacts(ROOT)
    except TopicContentError as error:
        errors.append(f"ERROR: no se pudo reconstruir el contenido editorial: {error}")
        return
    expected_paths = set(artifacts.outputs)
    actual_generated = {
        path.relative_to(ROOT).as_posix()
        for path in (ROOT / GENERATED_DIR).glob("*.html")
    } if (ROOT / GENERATED_DIR).is_dir() else set()
    expected_generated = {path for path in expected_paths if path.startswith(f"{GENERATED_DIR}/")}
    if actual_generated != expected_generated:
        errors.append("ERROR: los fragmentos generados no son exactamente los 33 esperados.")
    actual_markdown = {
        path.stem for path in (ROOT / TOPICS_DIR).glob("*.md")
    } if (ROOT / TOPICS_DIR).is_dir() else set()
    expected_topics = {topic.topic_id for topic in artifacts.topics}
    if actual_markdown != expected_topics or len(actual_markdown) != 33:
        errors.append("ERROR: deben existir exactamente 33 Markdown, uno por tema oficial.")
    for relative_path, expected in artifacts.outputs.items():
        target = ROOT / relative_path
        if not target.is_file():
            errors.append(f"ERROR: falta artefacto generado: {relative_path}.")
        elif target.read_bytes() != expected:
            errors.append(
                f"ERROR: {relative_path} está desactualizado o fue editado manualmente. Ejecute .\\.venv\\Scripts\\python.exe scripts\\build_topic_content.py"
            )
    for topic in artifacts.topics:
        if "<h1" in topic.html.lower():
            errors.append(f"ERROR: {topic.topic_id} genera un H1 no permitido en el fragmento.")
        if FORBIDDEN_HTML_RE.search(topic.html):
            errors.append(f"ERROR: {topic.topic_id} genera HTML peligroso.")
        if ABSOLUTE_PATH_RE.search(topic.html):
            errors.append(f"ERROR: {topic.topic_id} genera una ruta absoluta.")
    pilot = next((topic for topic in artifacts.topics if topic.topic_id == "B1-T01"), None)
    if not pilot or pilot.metadata["status"] != "partial" or pilot.metadata["reviewStatus"] != "needs-review":
        errors.append("ERROR: B1-T01 debe ser el piloto partial con revisión pendiente.")
    elif not pilot.source_ids or not pilot.pending_sections:
        errors.append("ERROR: B1-T01 debe contener referencias trazables y una cobertura pendiente explícita.")
    for topic in artifacts.topics:
        if topic.topic_id == "B1-T01":
            continue
        if topic.metadata["status"] != "pending" or topic.metadata["reviewStatus"] != "not-reviewed":
            errors.append(f"ERROR: {topic.topic_id} debe permanecer pending y not-reviewed durante la Fase 7A.")
        if topic.source_ids:
            errors.append(f"ERROR: {topic.topic_id} no puede incorporar texto doctrinal o fuentes durante la Fase 7A.")


def validate_static_files(errors: list[str]) -> None:
    try:
        index = json.loads(read_text(INDEX_PATH))
    except (OSError, json.JSONDecodeError) as error:
        errors.append(f"ERROR: data/topic-content.json no es JSON válido: {error}")
        return
    validate_schema(index, errors)
    topics = index.get("topics", []) if isinstance(index, dict) else []
    ids = [item.get("topicId") for item in topics if isinstance(item, dict)]
    if len(ids) != 33 or len(ids) != len(set(ids)):
        errors.append("ERROR: el índice debe contener los 33 topicId una sola vez.")
    for item in topics:
        if not isinstance(item, dict):
            continue
        path = item.get("contentPath")
        if not isinstance(path, str) or path.startswith(("/", "./")) or "\\" in path or ".." in path:
            errors.append(f"ERROR: {item.get('topicId', '<sin id>')} usa contentPath no relativo.")
        if any(not ref.get("locator") for section in item.get("sections", []) for ref in section.get("sourceRefs", [])):
            errors.append(f"ERROR: {item.get('topicId', '<sin id>')} contiene una referencia sin localizador.")
    index_html = read_text("index.html")
    temario_section = re.search(r'<section data-view="temario"[\s\S]*?</section>\s*\n\s*<section data-view="entrenamiento"', index_html)
    if not temario_section or len(re.findall(r"<h1\b", temario_section.group(0), flags=re.IGNORECASE)) != 1:
        errors.append("ERROR: la vista completa de Temario debe contener exactamente un H1.")
    service = read_text("assets/js/topic-content-service.js")
    required_service = ("DOMParser", "DocumentFragment", "FORBIDDEN_ELEMENTS", "allowedPaths")
    for required in required_service:
        if required not in service:
            errors.append(f"ERROR: falta la defensa o contrato de contenido {required}.")
    if "localStorage" in service:
        errors.append("ERROR: el servicio de contenido no debe usar localStorage.")
    router = read_text("assets/js/router.js")
    for required in ("parseRoute", "TOPIC_ID_RE", "SECTION_ID_RE", "tai:routechange"):
        if required not in router:
            errors.append(f"ERROR: falta soporte de ruta editorial: {required}.")
    application = "\n".join([
        index_html,
        *(path.read_text(encoding="utf-8") for path in (ROOT / "assets").rglob("*.js")),
    ])
    for pattern in (r"\breact\b", r"\bvue\b", r"\bangular\b", r"\bnpm\b", r"\bnode_modules\b", r"\brequire\s*\(", r"(?:unpkg|jsdelivr|cdnjs)\."):
        if re.search(pattern, application, flags=re.IGNORECASE):
            errors.append(f"ERROR: se detectó tecnología o dependencia no permitida: {pattern}.")
    if POSSIBLE_SECRET_RE.search(application) or ABSOLUTE_PATH_RE.search(application):
        errors.append("ERROR: se detectó un posible secreto o una ruta absoluta en la aplicación.")


def validate_manual_and_tests(errors: list[str]) -> None:
    try:
        manual = read_text("docs/PRUEBAS_MANUALES_FASE_7.md")
        tests = read_text("tests/phase7-tests.js")
    except OSError as error:
        errors.append(f"ERROR: no se pudieron leer pruebas de Fase 7A: {error}")
        return
    cases = re.findall(r"^\|\s*(M-\d+)\s*\|\s*([^|]+)\|", manual, flags=re.MULTILINE)
    allowed_statuses = {"NO EJECUTADA", "APROBADA", "FALLIDA"}
    if len(cases) < 30 or any(status.strip() not in allowed_statuses for _, status in cases):
        errors.append("ERROR: las pruebas manuales deben documentar al menos 30 casos con estado válido.")
    automated = re.findall(r"\btest\(", tests)
    if len(automated) < 40:
        errors.append("ERROR: el runner de Fase 7A debe incluir al menos 40 pruebas automáticas.")
    for required in (
        "H1 del Markdown coincide", "fragmento generado no contiene H1", "vista final contiene un único H1",
        "apertura directa", "recarga conserva", "atrás y adelante", "constructor es determinista",
        "B1-T01 contiene referencias verificables", "archivos protegidos no cambian",
    ):
        if required not in tests:
            errors.append(f"ERROR: falta la prueba automática: {required}.")


def main() -> int:
    errors: list[str] = []
    for validator in (
        "validate_json.py", "validate_questions.py", "validate_references.py", "validate_phase2.py",
        "validate_phase3.py", "validate_phase4.py", "validate_phase5.py", "validate_phase6.py",
    ):
        run_validator(validator, errors)
    for relative_path in REQUIRED:
        if not (ROOT / relative_path).is_file():
            errors.append(f"ERROR: falta el entregable de Fase 7A: {relative_path}.")
    if not errors:
        validate_protected_files(errors)
        validate_source_migration(errors)
        validate_artifacts(errors)
        validate_static_files(errors)
        validate_manual_and_tests(errors)
    if errors:
        print("\n".join(errors))
        return 1
    print("OK: contenido editorial, rutas, seguridad y protección de Fase 7A validados.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
