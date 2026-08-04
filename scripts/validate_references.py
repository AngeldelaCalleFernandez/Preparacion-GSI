#!/usr/bin/env python3
"""Validate cross-file IDs, relative paths and Markdown catalog coverage."""

from __future__ import annotations

import json
from pathlib import Path, PurePosixPath


ROOT = Path(__file__).resolve().parents[1]
QUESTION_FILES = (
    "data/questions-official.json",
    "data/questions-ai.json",
    "data/questions-manual.json",
)


def load_json(relative_path: str) -> object:
    with (ROOT / relative_path).open(encoding="utf-8") as stream:
        return json.load(stream)


def is_relative_markdown_path(value: object) -> bool:
    if not isinstance(value, str) or "\\" in value:
        return False
    path = PurePosixPath(value)
    return not path.is_absolute() and ".." not in path.parts and value.startswith("documents/markdown/") and value.endswith(".md")


def main() -> int:
    syllabus = load_json("data/syllabus.json")
    catalog = load_json("data/sources.json")
    updates = load_json("data/updates.json")
    errors: list[str] = []

    blocks = syllabus["blocks"]
    block_id_list = [block["id"] for block in blocks]
    block_ids = set(block_id_list)
    topics = [topic for block in blocks for topic in block["topics"]]
    topic_to_block = {
        topic["id"]: block["id"]
        for block in blocks
        for topic in block["topics"]
    }
    topic_id_list = [topic["id"] for topic in topics]
    topic_ids = set(topic_id_list)
    if len(blocks) != 4 or len(topics) != 33:
        errors.append(f"ERROR: el temario debe contener 4 bloques y 33 temas; contiene {len(blocks)} y {len(topics)}.")
    expected_counts = {"B1": 9, "B2": 5, "B3": 9, "B4": 10}
    if block_id_list != list(expected_counts):
        errors.append("ERROR: los bloques deben ser B1, B2, B3 y B4 en ese orden.")
    if len(block_ids) != len(block_id_list):
        errors.append("ERROR: hay identificadores de bloque duplicados.")
    if len(topic_ids) != len(topic_id_list):
        errors.append("ERROR: hay identificadores de tema duplicados.")
    for block in blocks:
        block_id = block["id"]
        expected_count = expected_counts.get(block_id, 0)
        if len(block["topics"]) != expected_count:
            errors.append(f"ERROR: {block['id']} no tiene el número oficial de temas.")
        expected_topic_ids = [f"{block_id}-T{number:02d}" for number in range(1, expected_count + 1)]
        if [topic["id"] for topic in block["topics"]] != expected_topic_ids:
            errors.append(f"ERROR: {block_id} no usa la secuencia oficial de IDs de tema.")
        if [topic["number"] for topic in block["topics"]] != list(range(1, expected_count + 1)):
            errors.append(f"ERROR: {block_id} no usa la secuencia oficial de números de tema.")
        for topic in block["topics"]:
            if not topic["id"].startswith(f"{block_id}-"):
                errors.append(f"ERROR: {topic['id']} no pertenece a {block['id']}.")

    source_ids: set[str] = set()
    document_ids: set[str] = set()
    catalog_paths: set[str] = set()
    document_to_source: dict[str, str] = {}
    for source in catalog["sources"]:
        source_id = source["id"]
        if source_id in source_ids:
            errors.append(f"ERROR: fuente duplicada {source_id}.")
        source_ids.add(source_id)
        block_values = source.get("block_ids", source.get("blockIds", []))
        topic_values = source.get("topic_ids", source.get("topicIds", []))
        for block_id in block_values:
            if block_id not in block_ids:
                errors.append(f"ERROR: {source_id} referencia un bloque inexistente {block_id}.")
        if len(set(block_values)) != len(block_values):
            errors.append(f"ERROR: {source_id} repite identificadores de bloque.")
        for topic_id in topic_values:
            if topic_id not in topic_ids:
                errors.append(f"ERROR: {source_id} referencia un tema inexistente {topic_id}.")
        if len(set(topic_values)) != len(topic_values):
            errors.append(f"ERROR: {source_id} repite identificadores de tema.")
        if source.get("sourceKind") == "technical-primary-source":
            document_id = source["documentId"]
            if document_id in document_ids:
                errors.append(f"ERROR: documento duplicado {document_id}.")
            document_ids.add(document_id)
            document_to_source[document_id] = source_id
            continue
        for document in source.get("documents", []):
            document_id = document["id"]
            path = document["path"]
            if document_id in document_ids:
                errors.append(f"ERROR: documento duplicado {document_id}.")
            document_ids.add(document_id)
            document_to_source[document_id] = source_id
            if not is_relative_markdown_path(path):
                errors.append(f"ERROR: {document_id} usa una ruta no relativa o inválida: {path}")
            elif not (ROOT / path).is_file():
                errors.append(f"ERROR: falta el Markdown catalogado: {path}")
            if path in catalog_paths:
                errors.append(f"ERROR: ruta Markdown duplicada en catálogo: {path}")
            catalog_paths.add(path)

    markdown_paths = {
        path.relative_to(ROOT).as_posix()
        for path in (ROOT / "documents" / "markdown").rglob("*.md")
    }
    for path in sorted(markdown_paths - catalog_paths):
        errors.append(f"ERROR: Markdown sin catalogar: {path}")
    for path in sorted(catalog_paths - markdown_paths):
        errors.append(f"ERROR: catálogo sin Markdown existente: {path}")

    for topic in topics:
        for source_id in topic["source_ids"]:
            if source_id not in source_ids:
                errors.append(f"ERROR: {topic['id']} referencia una fuente inexistente {source_id}.")
        for raw in topic["content"]["raw"]:
            if raw["source_id"] not in source_ids:
                errors.append(f"ERROR: {topic['id']} usa una fuente cruda inexistente.")
            if raw["document_id"] not in document_ids:
                errors.append(f"ERROR: {topic['id']} usa un documento crudo inexistente.")
            elif document_to_source[raw["document_id"]] != raw["source_id"]:
                errors.append(f"ERROR: {topic['id']} mezcla fuente y documento incompatibles.")

    for relative_path in QUESTION_FILES:
        for question in load_json(relative_path)["questions"]:
            question_id = question["id"]
            if question["topic_id"] not in topic_ids:
                errors.append(f"ERROR: {question_id} referencia un tema inexistente.")
            question_source = question["source"]
            source_id = question_source.get("source_id")
            document_id = question_source.get("document_id")
            if source_id and source_id not in source_ids:
                errors.append(f"ERROR: {question_id} referencia una fuente inexistente: {source_id}.")
            if document_id:
                if document_id not in document_ids:
                    errors.append(f"ERROR: {question_id} referencia un documento inexistente: {document_id}.")
                elif not source_id:
                    errors.append(f"ERROR: {question_id} referencia {document_id} sin indicar source_id.")
                elif document_to_source[document_id] != source_id:
                    errors.append(f"ERROR: {question_id} referencia {document_id}, que no pertenece a {source_id}.")
    for update in updates["updates"]:
        if update["block_id"] not in block_ids or any(topic not in topic_ids for topic in update["topic_ids"]):
            errors.append(f"ERROR: {update['id']} referencia bloque o tema inexistente.")
        for topic_id in update["topic_ids"]:
            if topic_id in topic_to_block and topic_to_block[topic_id] != update["block_id"]:
                errors.append(
                    f"ERROR: {update['id']} referencia {topic_id}, que no pertenece a {update['block_id']}."
                )
        if update["source_id"] not in source_ids:
            errors.append(f"ERROR: {update['id']} referencia una fuente inexistente.")

    if errors:
        print("\n".join(errors))
        return 1
    print(f"OK: 4 bloques, 33 temas y {len(catalog_paths)} Markdown con rutas y referencias válidas.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
