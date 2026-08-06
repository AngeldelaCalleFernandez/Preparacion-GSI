#!/usr/bin/env python3
"""Deterministic, read-only validator for the protected TAI M0 baseline."""

from __future__ import annotations

from hashlib import sha256
import json
from pathlib import Path
import re
import subprocess
import sys
from typing import Any

from jsonschema import Draft202012Validator, FormatChecker
from jsonschema.exceptions import SchemaError


ROOT = Path(__file__).resolve().parents[1]
MANIFEST_PATH = ROOT / "data" / "protected-artifacts.json"
SCHEMA_PATH = ROOT / "schemas" / "protected-artifacts.schema.json"
KNOWN_CONTENT_HASHES = {
    "content/topics/B1-T01.md": "348ed0d52adb85336f84f099cebdd0a18412eb0195c9d1d8a8135df94f71fafa",
    "content/generated/B1-T01.html": "91785a3886b9f93c686f482ad1844d41429fcc88785c68a8f9f132c1f3a84804",
    "content/topics/B1-T02.md": "71cf20faea8a714c10aa7324999d6616d4d7a37af0ddefa3379baf28005dc511",
    "content/generated/B1-T02.html": "0cca4a4dab18f552612f56026bcf28dbd9c9fa898237a376ef2083391b0fbf2c",
}
REQUIRED_ARTIFACTS = {
    "TAI_B1_T01": "B1-T01",
    "TAI_B1_T02": "B1-T02",
}
SOURCE_REFERENCE_RE = re.compile(r"\[\[fuente:(SRC-[A-Z0-9-]+)\|")


def read_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def display_json_path(parts: Any) -> str:
    path = "$"
    for part in parts:
        path += f"[{part}]" if isinstance(part, int) else f".{part}"
    return path


def resolve_registered_path(relative_path: str, errors: list[str]) -> Path | None:
    candidate = (ROOT / relative_path).resolve()
    try:
        candidate.relative_to(ROOT.resolve())
    except ValueError:
        errors.append(f"Ruta fuera del repositorio: {relative_path}.")
        return None
    return candidate


def parse_front_matter(path: Path) -> dict[str, Any]:
    lines = path.read_text(encoding="utf-8").splitlines()
    if not lines or lines[0] != "---":
        raise ValueError("no comienza con un delimitador de front matter")
    try:
        end = lines.index("---", 1)
    except ValueError as error:
        raise ValueError("no cierra el front matter") from error
    parsed = json.loads("\n".join(lines[1:end]))
    if not isinstance(parsed, dict):
        raise ValueError("el front matter no es un objeto JSON")
    return parsed


def run_git(arguments: list[str]) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["git", *arguments],
        cwd=ROOT,
        capture_output=True,
        check=False,
        text=True,
        encoding="utf-8",
    )


def validate_schema(manifest: Any, schema: Any, errors: list[str]) -> None:
    try:
        Draft202012Validator.check_schema(schema)
    except SchemaError as error:
        errors.append(f"Esquema JSON inválido: {error.message}.")
        return
    validator = Draft202012Validator(schema, format_checker=FormatChecker())
    for error in sorted(validator.iter_errors(manifest), key=lambda item: list(item.absolute_path)):
        errors.append(f"Esquema {display_json_path(error.absolute_path)}: {error.message}.")


def validate_git_origin(manifest: dict[str, Any], errors: list[str]) -> None:
    origin = manifest["origin"]
    tag = origin["baseline_tag"]

    object_type = run_git(["cat-file", "-t", tag])
    if object_type.returncode != 0:
        errors.append(f"No existe la etiqueta base {tag}.")
        return
    if object_type.stdout.strip() != "tag":
        errors.append(f"La etiqueta base {tag} no es anotada.")

    tag_object = run_git(["rev-parse", tag])
    if tag_object.returncode != 0 or tag_object.stdout.strip() != origin["tag_object"]:
        errors.append(f"El objeto de la etiqueta {tag} no coincide con el manifiesto.")

    target = run_git(["rev-parse", f"{tag}^{{}}"])
    if target.returncode != 0 or target.stdout.strip() != origin["tag_target_commit"]:
        errors.append(f"El destino de la etiqueta {tag} no coincide con el manifiesto.")
    if origin["tag_target_commit"] != origin["baseline_commit"]:
        errors.append("El destino de la etiqueta base no coincide con baseline_commit.")

    commit = run_git(["cat-file", "-e", f"{origin['baseline_commit']}^{{commit}}"])
    if commit.returncode != 0:
        errors.append(f"No existe el commit base {origin['baseline_commit']}.")


def syllabus_topics(syllabus: dict[str, Any]) -> dict[str, dict[str, Any]]:
    topics: dict[str, dict[str, Any]] = {}
    for block in syllabus.get("blocks", []):
        for topic in block.get("topics", []):
            topic_id = topic.get("id")
            if isinstance(topic_id, str):
                topics[topic_id] = topic
    return topics


def content_source_ids(entry: dict[str, Any]) -> set[str]:
    return {
        reference["sourceId"]
        for section in entry.get("sections", [])
        for reference in section.get("sourceRefs", [])
        if isinstance(reference.get("sourceId"), str)
    }


def validate_artifact(
    artifact: dict[str, Any],
    syllabus_by_id: dict[str, dict[str, Any]],
    content_by_id: dict[str, dict[str, Any]],
    sources_by_id: dict[str, dict[str, Any]],
    errors: list[str],
) -> tuple[int, set[str]]:
    logical_id = artifact["logical_id"]
    historic_id = artifact["historic_id"]
    files = artifact["files"]
    file_by_path = {item["path"]: item for item in files}
    if len(file_by_path) != len(files):
        errors.append(f"{logical_id}: hay rutas de archivo duplicadas.")

    for item in files:
        relative_path = item["path"]
        path = resolve_registered_path(relative_path, errors)
        if path is None:
            continue
        if not path.is_file():
            errors.append(f"{logical_id}: no existe {relative_path}.")
            continue
        actual_hash = sha256(path.read_bytes()).hexdigest()
        if actual_hash != item["sha256"]:
            errors.append(
                f"{logical_id}: hash incorrecto para {relative_path}; "
                f"esperado {item['sha256']}, obtenido {actual_hash}."
            )

    relationships = artifact["relationships"]
    syllabus_relation = relationships["syllabus"]
    content_relation = relationships["topic_content"]
    required_paths = {
        syllabus_relation["catalog_path"],
        content_relation["index_path"],
        content_relation["markdown_path"],
        content_relation["html_path"],
    }
    missing_registrations = sorted(required_paths - set(file_by_path))
    if missing_registrations:
        errors.append(f"{logical_id}: faltan rutas de relación en files: {missing_registrations}.")

    if syllabus_relation["topic_id"] != historic_id:
        errors.append(f"{logical_id}: el ID de la relación con syllabus no coincide.")
    if content_relation["topic_id"] != historic_id:
        errors.append(f"{logical_id}: el ID de la relación con topic-content no coincide.")

    syllabus_topic = syllabus_by_id.get(historic_id)
    if syllabus_topic is None:
        errors.append(f"{logical_id}: {historic_id} no existe en data/syllabus.json.")
        return len(files), set(file_by_path)
    actual_syllabus_sources = set(syllabus_topic.get("source_ids", []))
    if set(syllabus_relation["source_ids"]) != actual_syllabus_sources:
        errors.append(f"{logical_id}: source_ids de syllabus no coinciden con el catálogo.")

    content_entry = content_by_id.get(historic_id)
    if content_entry is None:
        errors.append(f"{logical_id}: {historic_id} no existe en data/topic-content.json.")
        return len(files), set(file_by_path)
    if content_entry.get("contentPath") != content_relation["html_path"]:
        errors.append(f"{logical_id}: contentPath no coincide con el HTML protegido.")

    markdown_path = ROOT / content_relation["markdown_path"]
    html_path = ROOT / content_relation["html_path"]
    try:
        metadata = parse_front_matter(markdown_path)
    except (OSError, ValueError, json.JSONDecodeError) as error:
        errors.append(f"{logical_id}: front matter inválido en {content_relation['markdown_path']}: {error}.")
        metadata = {}

    editorial = artifact["repository_editorial_status"]
    if metadata.get("topicId") != historic_id:
        errors.append(f"{logical_id}: topicId del Markdown no coincide.")
    if metadata.get("status") != editorial["content_status"]:
        errors.append(f"{logical_id}: status del Markdown no coincide con el manifiesto.")
    if metadata.get("reviewStatus") != editorial["review_status"]:
        errors.append(f"{logical_id}: reviewStatus del Markdown no coincide con el manifiesto.")
    if ("contentVersion" in metadata) != editorial["content_version_present"]:
        errors.append(f"{logical_id}: presencia de contentVersion no coincide con el manifiesto.")
    if content_entry.get("status") != editorial["content_status"]:
        errors.append(f"{logical_id}: status del índice no coincide con el manifiesto.")
    if content_entry.get("reviewStatus") != editorial["review_status"]:
        errors.append(f"{logical_id}: reviewStatus del índice no coincide con el manifiesto.")
    if html_path.is_file() and content_entry.get("checksum") != sha256(html_path.read_bytes()).hexdigest():
        errors.append(f"{logical_id}: checksum del índice no coincide con el HTML.")

    index_citations = content_source_ids(content_entry)
    markdown_citations = set(SOURCE_REFERENCE_RE.findall(markdown_path.read_text(encoding="utf-8")))
    if index_citations != markdown_citations:
        errors.append(f"{logical_id}: las fuentes del Markdown y del índice no coinciden.")

    source_relations = relationships["sources"]
    relation_by_id = {item["source_id"]: item for item in source_relations}
    if len(relation_by_id) != len(source_relations):
        errors.append(f"{logical_id}: hay relaciones de fuente duplicadas.")
    expected_sources = actual_syllabus_sources | index_citations
    if set(relation_by_id) != expected_sources:
        errors.append(
            f"{logical_id}: fuentes declaradas {sorted(relation_by_id)}; "
            f"fuentes observadas {sorted(expected_sources)}."
        )

    raw_records = syllabus_topic.get("content", {}).get("raw", [])
    raw_documents_by_source: dict[str, set[str]] = {}
    for record in raw_records:
        raw_documents_by_source.setdefault(record.get("source_id", ""), set()).add(record.get("document_id", ""))

    for source_id, relation in relation_by_id.items():
        source = sources_by_id.get(source_id)
        if source is None:
            errors.append(f"{logical_id}: la fuente {source_id} no existe en data/sources.json.")
            continue
        expected_types: set[str] = set()
        if source_id in actual_syllabus_sources:
            expected_types.add("syllabus-source")
            if historic_id not in source.get("topic_ids", []):
                errors.append(f"{logical_id}: {source_id} no mapea {historic_id} en sources.json.")
        if source_id in index_citations:
            expected_types.add("content-citation")
        if set(relation["relation_types"]) != expected_types:
            errors.append(f"{logical_id}: tipos de relación incorrectos para {source_id}.")

        documents = {document["id"]: document for document in source.get("documents", [])}
        declared_documents = set(relation["document_ids"])
        unknown_documents = sorted(declared_documents - set(documents))
        if unknown_documents:
            errors.append(f"{logical_id}: documentos desconocidos para {source_id}: {unknown_documents}.")
        missing_raw = sorted(raw_documents_by_source.get(source_id, set()) - declared_documents)
        if missing_raw:
            errors.append(f"{logical_id}: documentos de syllabus no declarados para {source_id}: {missing_raw}.")
        for document_id in declared_documents & set(documents):
            document_path = documents[document_id].get("path")
            if document_path not in file_by_path:
                errors.append(f"{logical_id}: el documento {document_id} no está protegido en files.")

    for test in relationships["tests"]:
        test_path = test["path"]
        if test_path not in file_by_path:
            errors.append(f"{logical_id}: la prueba {test_path} no está protegida en files.")
            continue
        path = ROOT / test_path
        if path.is_file() and historic_id not in path.read_text(encoding="utf-8"):
            errors.append(f"{logical_id}: la prueba {test_path} no contiene {historic_id}.")

    return len(files), set(file_by_path)


def validate_known_baselines(manifest: dict[str, Any], errors: list[str]) -> None:
    by_logical_id = {item["logical_id"]: item for item in manifest["protected_artifacts"]}
    if len(by_logical_id) != len(manifest["protected_artifacts"]):
        errors.append("Hay logical_id duplicados en protected_artifacts.")

    by_historic_id = {item["historic_id"]: item for item in manifest["protected_artifacts"]}
    if len(by_historic_id) != len(manifest["protected_artifacts"]):
        errors.append("Hay historic_id duplicados en protected_artifacts.")

    for logical_id, historic_id in REQUIRED_ARTIFACTS.items():
        artifact = by_logical_id.get(logical_id)
        if artifact is None:
            errors.append(f"Falta el artefacto obligatorio {logical_id}.")
        elif artifact["historic_id"] != historic_id:
            errors.append(f"{logical_id} no conserva el ID histórico {historic_id}.")

    t01 = by_logical_id.get("TAI_B1_T01")
    if t01 is not None:
        if t01["governance_status"]["state"] != "approved":
            errors.append("TAI_B1_T01 no conserva el estado de gobierno approved.")
        if t01["baseline_version"] != {"value": "1.0.0", "status": "externally-declared"}:
            errors.append("TAI_B1_T01 no conserva la declaración externa 1.0.0.")
        if t01["repository_editorial_status"] != {
            "content_status": "partial",
            "review_status": "needs-review",
            "content_version_present": False,
        }:
            errors.append("TAI_B1_T01 altera la observación editorial del repositorio.")

    t02 = by_logical_id.get("TAI_B1_T02")
    if t02 is not None:
        if t02["governance_status"]["state"] != "initiated":
            errors.append("TAI_B1_T02 no conserva el estado de gobierno initiated.")
        if t02["baseline_version"] != {"value": None, "status": "not-declared"}:
            errors.append("TAI_B1_T02 no debe declarar una versión aprobada.")
        if t02["repository_editorial_status"] != {
            "content_status": "pending",
            "review_status": "not-reviewed",
            "content_version_present": False,
        }:
            errors.append("TAI_B1_T02 altera la observación editorial del repositorio.")

    registered_hashes = {
        file_record["path"]: file_record["sha256"]
        for artifact in manifest["protected_artifacts"]
        for file_record in artifact["files"]
    }
    for path, expected_hash in KNOWN_CONTENT_HASHES.items():
        if registered_hashes.get(path) != expected_hash:
            errors.append(f"El manifiesto no conserva el hash conocido de {path}.")


def main() -> int:
    errors: list[str] = []
    try:
        schema = read_json(SCHEMA_PATH)
        manifest = read_json(MANIFEST_PATH)
    except FileNotFoundError as error:
        print(f"ERROR: no existe {error.filename}.")
        return 1
    except json.JSONDecodeError as error:
        print(f"ERROR: JSON inválido en línea {error.lineno}, columna {error.colno}: {error.msg}.")
        return 1

    validate_schema(manifest, schema, errors)
    if errors:
        for error in sorted(errors):
            print(f"ERROR: {error}")
        return 1

    validate_git_origin(manifest, errors)
    validate_known_baselines(manifest, errors)

    try:
        syllabus = read_json(ROOT / "data" / "syllabus.json")
        topic_content = read_json(ROOT / "data" / "topic-content.json")
        sources = read_json(ROOT / "data" / "sources.json")
    except (FileNotFoundError, json.JSONDecodeError) as error:
        errors.append(f"No se pudieron leer los catálogos relacionados: {error}.")
        syllabus = {"blocks": []}
        topic_content = {"topics": []}
        sources = {"sources": []}

    syllabus_by_id = syllabus_topics(syllabus)
    content_by_id = {item["topicId"]: item for item in topic_content.get("topics", [])}
    sources_by_id = {item["id"]: item for item in sources.get("sources", [])}

    file_registrations = 0
    unique_files: set[str] = set()
    for artifact in manifest["protected_artifacts"]:
        count, paths = validate_artifact(
            artifact,
            syllabus_by_id,
            content_by_id,
            sources_by_id,
            errors,
        )
        file_registrations += count
        unique_files.update(paths)

    if errors:
        for error in sorted(set(errors)):
            print(f"ERROR: {error}")
        return 1

    print("OK: data/protected-artifacts.json cumple protected-artifacts.schema.json.")
    print("OK: la etiqueta anotada de origen existe y apunta al commit base registrado.")
    print(f"OK: {len(manifest['protected_artifacts'])} artefactos protegidos conservan sus IDs históricos.")
    print(f"OK: {file_registrations} registros de archivo ({len(unique_files)} rutas únicas) existen y conservan SHA-256.")
    print("OK: B1-T01 y B1-T02 mantienen sus estados editoriales observados sin promoción automática.")
    print("OK: las relaciones con syllabus, topic-content, fuentes, documentos y pruebas son coherentes.")
    print("OK: los cuatro hashes de contenido conocidos coinciden.")
    print("OK: línea base TAI M0 validada en modo de solo lectura.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
