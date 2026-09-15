#!/usr/bin/env python3
"""Validate question collections without importing or generating questions."""

from __future__ import annotations

import json
from datetime import date
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
QUESTION_FILES = {
    "data/questions-official.json": {"official"},
    "data/questions-ai.json": {"ai"},
    "data/questions-manual.json": {"manual", "adapted"},
}
ID_PREFIXES = {"official": "OFF-", "ai": "AI-", "manual": "MAN-", "adapted": "MAN-"}
OFFICIAL_SOURCE_STATUSES = {"official", "official_provisional", "official_archive"}


def load_json(relative_path: str) -> object:
    with (ROOT / relative_path).open(encoding="utf-8") as stream:
        return json.load(stream)


def valid_date(value: object) -> bool:
    if not isinstance(value, str):
        return False
    try:
        date.fromisoformat(value)
    except ValueError:
        return False
    return True


def main() -> int:
    syllabus = load_json("data/syllabus.json")
    sources = load_json("data/sources.json")
    topic_ids = {topic["id"] for block in syllabus["blocks"] for topic in block["topics"]}
    sources_by_id = {source["id"]: source for source in sources["sources"]}
    documents_by_id = {
        document["id"]: document
        for source in sources["sources"]
        for document in source.get("documents", [])
    }
    document_to_source = {
        document["id"]: source["id"]
        for source in sources["sources"]
        for document in source.get("documents", [])
    }
    errors: list[str] = []
    all_ids: set[str] = set()
    total = 0

    for relative_path, allowed_origins in QUESTION_FILES.items():
        collection = load_json(relative_path)
        expected_dataset = relative_path.removeprefix("data/questions-").removesuffix(".json")
        if collection["metadata"]["dataset_type"] != expected_dataset:
            errors.append(f"ERROR: {relative_path} declara un dataset_type incorrecto.")
        for question in collection["questions"]:
            total += 1
            question_id = question.get("id", "<sin id>")
            if question_id in all_ids:
                errors.append(f"ERROR: {question_id} está repetida entre colecciones.")
            all_ids.add(question_id)
            if question.get("origin") not in allowed_origins:
                errors.append(f"ERROR: {question_id} tiene un origen incompatible con {relative_path}.")
            expected_prefix = ID_PREFIXES.get(question.get("origin"))
            if expected_prefix and not question_id.startswith(expected_prefix):
                errors.append(f"ERROR: {question_id} no usa el prefijo estable para su origen.")
            if question.get("topic_id") not in topic_ids:
                errors.append(f"ERROR: {question_id} referencia un tema inexistente.")
            if question.get("block_id") != str(question.get("topic_id", "")).split("-", 1)[0]:
                errors.append(f"ERROR: {question_id} no pertenece al bloque indicado.")
            options = question.get("options", [])
            option_ids = [option.get("id") for option in options if isinstance(option, dict)]
            if len(options) != 4 or set(option_ids) != {"A", "B", "C", "D"}:
                errors.append(f"ERROR: {question_id} no contiene cuatro opciones A, B, C y D.")
            if question.get("correct_option") not in option_ids:
                errors.append(f"ERROR: {question_id} no tiene una respuesta correcta válida.")
            if question.get("is_active") and not question.get("feedback", {}).get("correct", "").strip():
                errors.append(f"ERROR: {question_id} activa no incluye feedback correcto.")
            question_source = question.get("source", {})
            source_id = question_source.get("source_id")
            document_id = question_source.get("document_id")
            if question.get("origin") == "official":
                if question.get("official_status") != "official":
                    errors.append(f"ERROR: {question_id} oficial no declara official_status=official.")
                source = sources_by_id.get(source_id)
                if source is None:
                    errors.append(f"ERROR: {question_id} oficial referencia una fuente inexistente: {source_id}.")
                elif source.get("official_status") not in OFFICIAL_SOURCE_STATUSES:
                    errors.append(f"ERROR: {question_id} oficial referencia una fuente sin carácter oficial: {source_id}.")
                if document_id:
                    document = documents_by_id.get(document_id)
                    if document is None:
                        errors.append(f"ERROR: {question_id} oficial referencia un documento inexistente: {document_id}.")
                    elif document_to_source[document_id] != source_id:
                        errors.append(
                            f"ERROR: {question_id} oficial referencia {document_id}, que no pertenece a {source_id}."
                        )
                    else:
                        document_status = document.get("official_status")
                        if document_status is not None and document_status not in OFFICIAL_SOURCE_STATUSES:
                            errors.append(f"ERROR: {question_id} oficial referencia un documento sin carácter oficial: {document_id}.")
                        if "is_official" in document and document["is_official"] is not True:
                            errors.append(f"ERROR: {question_id} oficial referencia un documento no oficial: {document_id}.")
            for field in ("created_at", "updated_at"):
                if not valid_date(question.get(field)):
                    errors.append(f"ERROR: {question_id} tiene {field} con formato de fecha inválido.")

    if errors:
        print("\n".join(errors))
        return 1
    print(f"OK: {total} preguntas con estructura válida; no se modifica su estado de revisión editorial.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
