#!/usr/bin/env python3
"""Check that user-facing GSI documentation matches the current product data."""

from __future__ import annotations

import json
from pathlib import Path

from export_gsi_questions import DEFAULT_OUTPUT, QUESTION_FILES, build_export, is_usable


ROOT = Path(__file__).resolve().parents[1]


def read(relative_path: str) -> str:
    return (ROOT / relative_path).read_text(encoding="utf-8")


def load(path: Path) -> dict:
    with path.open(encoding="utf-8") as stream:
        return json.load(stream)


def main() -> int:
    errors: list[str] = []
    counts: dict[str, tuple[int, int]] = {}
    for bank_id, path, _ in QUESTION_FILES:
        questions = load(path).get("questions", [])
        counts[bank_id] = (len(questions), sum(is_usable(question) for question in questions))
    total = sum(count for count, _ in counts.values())
    total_usable = sum(count for _, count in counts.values())

    readme = read("README.md")
    expected_readme = (
        f"| Material curado del corpus | {counts['manual'][1]} | {counts['manual'][0] - counts['manual'][1]} |",
        f"| Preguntas generadas revisadas | {counts['ai'][1]} | {counts['ai'][0] - counts['ai'][1]} |",
        f"| Preguntas oficiales INAP | {counts['official'][1]} | {counts['official'][0] - counts['official'][1]} |",
        f"La aplicación contiene **{total_usable:,} preguntas activas**".replace(",", "."),
    )
    for snippet in expected_readme:
        if snippet not in readme:
            errors.append(f"README.md no refleja el dato actual: {snippet}")
    for stale in ("20 archivos de datos contra 18 esquemas", "88 pruebas unitarias", "288 pruebas de regresión"):
        if stale in readme:
            errors.append(f"README.md conserva una cifra obsoleta: {stale}")

    for guide_path in ("docs/GUIA_DE_ESTUDIO.md", "docs/guia-de-estudio.html"):
        guide = read(guide_path)
        if "Mi progreso de estudio" not in guide:
            errors.append(f"{guide_path} no documenta Mi progreso de estudio.")
        if "C:\\TAI-proyecto" in guide:
            errors.append(f"{guide_path} contiene una ruta local específica del autor.")
        if "22 de octubre de 2026" not in guide:
            errors.append(f"{guide_path} no identifica la revisión documental vigente.")

    vigencia = read("docs/GSI_VIGENCIA.md")
    for update_id in ("UPD-2026-001", "UPD-2026-002", "UPD-2026-003"):
        if update_id not in vigencia:
            errors.append(f"docs/GSI_VIGENCIA.md no refleja {update_id}.")

    audit = read("docs/FINAL_GSI_AUDIT.md")
    if "## Estado vigente: 23 de octubre de 2026" not in audit:
        errors.append("docs/FINAL_GSI_AUDIT.md no abre con el estado vigente de esta revisión.")
    if "Conclusión histórica, superada" not in audit:
        errors.append("docs/FINAL_GSI_AUDIT.md no distingue la conclusión histórica pendiente.")

    if not DEFAULT_OUTPUT.is_file():
        errors.append(f"Falta {DEFAULT_OUTPUT.relative_to(ROOT).as_posix()}.")
    elif DEFAULT_OUTPUT.read_text(encoding="utf-8") != build_export():
        errors.append("La exportación Markdown de preguntas no coincide con sus tres JSON fuente.")

    if errors:
        print("\n".join(f"ERROR: {error}" for error in errors))
        return 1
    print(f"OK: documentación sincronizada con {total} preguntas ({total_usable} activas y validadas).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
