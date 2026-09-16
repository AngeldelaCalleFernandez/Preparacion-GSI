#!/usr/bin/env python3
"""Validate Phase 2 JSON files against their JSON Schema contracts."""

from __future__ import annotations

import json
import sys
from pathlib import Path

try:
    from jsonschema import Draft202012Validator, FormatChecker
except ImportError:
    print(
        "ERROR: falta jsonschema. Instale la dependencia de validación con: "
        ".\\.venv\\Scripts\\python -m pip install -r scripts\\requirements-validation.txt"
    )
    raise SystemExit(2)


ROOT = Path(__file__).resolve().parents[1]
SCHEMAS = {
    "data/gsi-official-exams.json": "schemas/gsi-official-exams.schema.json",
    "data/gsi-coverage-report.json": "schemas/gsi-coverage-report.schema.json",
    "data/gsi-drive-inventory.json": "schemas/gsi-drive-inventory.schema.json",
    "data/gsi-map-review.json": "schemas/gsi-map-review.schema.json",
    "data/gsi-source-manifest.json": "schemas/gsi-source-manifest.schema.json",
    "data/gsi-document-register.json": "schemas/gsi-document-register.schema.json",
    "data/gsi-editorial-reviews.json": "schemas/gsi-editorial-reviews.schema.json",
    "data/gsi-practice.json": "schemas/gsi-practice.schema.json",
    "data/topic-content.json": "schemas/topic-content.schema.json",
    "data/syllabi-catalog.json": "schemas/syllabi-catalog.schema.json",
    "data/oppositions.json": "schemas/oppositions.schema.json",
    "data/syllabus.json": "schemas/syllabus.schema.json",
    "data/sources.json": "schemas/source.schema.json",
    "data/questions-official.json": "schemas/question.schema.json",
    "data/questions-ai.json": "schemas/question.schema.json",
    "data/questions-manual.json": "schemas/question.schema.json",
    "data/updates.json": "schemas/update.schema.json",
    "documents/sources/technical/manifest.json": "schemas/technical-source-manifest.schema.json",
    "documents/sources/technical/coverage-matrix.json": "schemas/technical-coverage.schema.json",
}


def load_json(relative_path: str) -> object:
    with (ROOT / relative_path).open(encoding="utf-8") as stream:
        return json.load(stream)


def main() -> int:
    errors: list[str] = []
    validators: dict[str, Draft202012Validator] = {}

    for schema_path in sorted(set(SCHEMAS.values())):
        try:
            schema = load_json(schema_path)
            Draft202012Validator.check_schema(schema)
            validators[schema_path] = Draft202012Validator(
                schema, format_checker=FormatChecker()
            )
        except (OSError, json.JSONDecodeError, ValueError) as error:
            errors.append(f"ERROR: esquema inválido {schema_path}: {error}")

    for data_path, schema_path in SCHEMAS.items():
        try:
            data = load_json(data_path)
        except (OSError, json.JSONDecodeError) as error:
            errors.append(f"ERROR: JSON inválido {data_path}: {error}")
            continue
        validator = validators.get(schema_path)
        if validator is None:
            continue
        for error in sorted(validator.iter_errors(data), key=lambda item: list(item.path)):
            location = ".".join(str(part) for part in error.absolute_path) or "raíz"
            errors.append(f"ERROR: {data_path}:{location}: {error.message}")

    for template in sorted((ROOT / "templates").glob("*.json")):
        try:
            with template.open(encoding="utf-8") as stream:
                json.load(stream)
        except (OSError, json.JSONDecodeError) as error:
            errors.append(f"ERROR: plantilla JSON inválida {template.relative_to(ROOT)}: {error}")

    if errors:
        print("\n".join(errors))
        return 1
    print(f"OK: {len(SCHEMAS)} archivos de datos y {len(validators)} esquemas validados.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
