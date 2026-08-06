#!/usr/bin/env python3
"""Deterministic, read-only validator for the additive M1 catalogs."""

from __future__ import annotations

from hashlib import sha256
import json
import os
from pathlib import Path
import re
import subprocess
import sys
from typing import Any

from jsonschema import Draft202012Validator, FormatChecker
from jsonschema.exceptions import SchemaError


ROOT = Path(__file__).resolve().parents[1]
M0_COMMIT = "04bfac4281759044d6f7ce73006e964702fe83ee"
M0_TAG = "m0-linea-base-tai"
CANONICAL_TOPIC_RE = re.compile(r"^TAI-B[1-9][0-9]*-T[0-9]{2}$")
CANONICAL_IN_TEXT_RE = re.compile(r"\b(?:TAI|GSI)-B[1-9][0-9]*-T[0-9]{2}\b")
ROMAN_BLOCKS = {1: "I", 2: "II", 3: "III", 4: "IV"}
M1_PATHS = {
    "data/oppositions.json",
    "data/syllabi-catalog.json",
    "schemas/oppositions.schema.json",
    "schemas/syllabi-catalog.schema.json",
    "scripts/validate_m1_catalog.py",
    "docs/CATALOGO_MULTI_OPOSICION_M1.md",
}


def read_json(relative_path: str) -> Any:
    return json.loads((ROOT / relative_path).read_text(encoding="utf-8"))


def json_path(parts: Any) -> str:
    result = "$"
    for part in parts:
        result += f"[{part}]" if isinstance(part, int) else f".{part}"
    return result


def validate_schema(instance_path: str, schema_path: str, errors: list[str]) -> None:
    try:
        instance = read_json(instance_path)
        schema = read_json(schema_path)
        Draft202012Validator.check_schema(schema)
    except FileNotFoundError as error:
        errors.append(f"no existe {error.filename}")
        return
    except json.JSONDecodeError as error:
        errors.append(f"JSON inválido en {instance_path} o {schema_path}: {error.msg}")
        return
    except SchemaError as error:
        errors.append(f"esquema inválido {schema_path}: {error.message}")
        return
    validator = Draft202012Validator(schema, format_checker=FormatChecker())
    schema_errors = sorted(validator.iter_errors(instance), key=lambda item: json_path(item.absolute_path))
    for error in schema_errors:
        errors.append(f"{instance_path} {json_path(error.absolute_path)}: {error.message}")


def unique(values: list[str], label: str, errors: list[str]) -> None:
    duplicates = sorted({value for value in values if values.count(value) > 1})
    if duplicates:
        errors.append(f"{label} duplicados: {duplicates}")


def run_git(arguments: list[str]) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["git", *arguments], cwd=ROOT, capture_output=True, check=False,
        text=True, encoding="utf-8"
    )


def validate_m0_tag(errors: list[str]) -> None:
    object_type = run_git(["cat-file", "-t", M0_TAG])
    if object_type.returncode != 0:
        errors.append(f"no existe la etiqueta {M0_TAG}")
        return
    if object_type.stdout.strip() != "tag":
        errors.append(f"{M0_TAG} no es una etiqueta anotada")
    target = run_git(["rev-parse", f"{M0_TAG}^{{}}"])
    if target.returncode != 0 or target.stdout.strip() != M0_COMMIT:
        errors.append(f"{M0_TAG} no apunta al commit M0 {M0_COMMIT}")


def validate_references(
    oppositions: dict[str, Any], syllabi_catalog: dict[str, Any], errors: list[str]
) -> tuple[dict[str, Any], dict[str, Any]]:
    opposition_list = oppositions["oppositions"]
    syllabus_list = syllabi_catalog["syllabi"]
    unique([item["id"] for item in opposition_list], "IDs de oposición", errors)
    unique([item["short_code"] for item in opposition_list], "códigos de oposición", errors)
    unique([item["id"] for item in syllabus_list], "IDs de syllabus", errors)

    by_opposition = {item["id"]: item for item in opposition_list}
    by_syllabus = {item["id"]: item for item in syllabus_list}
    for opposition in opposition_list:
        referenced = set(opposition["syllabus_ids"])
        actual = {item["id"] for item in syllabus_list if item["opposition_id"] == opposition["id"]}
        if referenced != actual:
            errors.append(f"{opposition['id']}: referencias de syllabus no bidireccionales")
        for syllabus_id in referenced:
            if syllabus_id not in by_syllabus:
                errors.append(f"{opposition['id']}: syllabus inexistente {syllabus_id}")
    for syllabus in syllabus_list:
        if syllabus["opposition_id"] not in by_opposition:
            errors.append(f"{syllabus['id']}: oposición inexistente {syllabus['opposition_id']}")
    return by_opposition, by_syllabus


def validate_program_locations(
    by_opposition: dict[str, Any], by_syllabus: dict[str, Any], errors: list[str]
) -> None:
    sources = read_json("data/sources.json")
    sources_by_id = {item["id"]: item for item in sources["sources"]}
    records = [item["program_location"] for item in by_opposition.values()]
    records.extend(item["provenance"] for item in by_syllabus.values())
    for record in records:
        source = sources_by_id.get(record["source_id"])
        if source is None:
            errors.append(f"fuente inexistente {record['source_id']}")
            continue
        documents = {item["id"]: item for item in source.get("documents", [])}
        document = documents.get(record["document_id"])
        if document is None:
            errors.append(f"documento inexistente {record['document_id']}")
            continue
        if document.get("path") != record["document_path"]:
            errors.append(f"ruta incorrecta para {record['document_id']}")
        if not (ROOT / record["document_path"]).is_file():
            errors.append(f"no existe {record['document_path']}")


def validate_tai(
    by_opposition: dict[str, Any], by_syllabus: dict[str, Any], errors: list[str]
) -> None:
    tai_opposition = by_opposition.get("OPP-TAI")
    tai = by_syllabus.get("SYL-TAI-2025")
    if tai_opposition is None or tai is None:
        errors.append("faltan OPP-TAI o SYL-TAI-2025")
        return
    if tai_opposition["short_code"] != "TAI" or tai_opposition["status"] != "active":
        errors.append("OPP-TAI no conserva su identidad activa")
    if not tai_opposition["runtime_available"] or tai_opposition["runtime_status"] != "legacy-operational":
        errors.append("OPP-TAI no declara correctamente el runtime legacy")
    if tai["status"] != "legacy-operational" or not tai["runtime_available"]:
        errors.append("SYL-TAI-2025 no es legacy-operational")
    if tai["identifier_policy"] != {
        "operational_id_kind": "legacy", "canonical_ids_status": "informational"
    }:
        errors.append("la política de IDs TAI no conserva legacy como operativo")
    if tai["legacy_source_path"] != "data/syllabus.json":
        errors.append("SYL-TAI-2025 no referencia data/syllabus.json")

    legacy = read_json("data/syllabus.json")
    metadata = legacy["metadata"]
    if tai["name"] != metadata["title"]:
        errors.append("el nombre de SYL-TAI-2025 no coincide con syllabus.json")
    if tai["program_version"]["legacy_data_version"] != metadata["data_version"]:
        errors.append("la versión legacy TAI no coincide")
    if tai["program_version"]["official_program_date"] != metadata["official_program_date"]:
        errors.append("la fecha del programa TAI no coincide")
    if tai["provenance"]["source_id"] != metadata["official_program_source_id"]:
        errors.append("la fuente oficial TAI no coincide")
    if tai["provenance"]["document_id"] != metadata["official_program_document_id"]:
        errors.append("el documento oficial TAI no coincide")

    blocks = tai["blocks"]
    expected_distribution = [len(block["topics"]) for block in legacy["blocks"]]
    if len(blocks) != 4 or sum(len(block["topics"]) for block in blocks) != 33:
        errors.append("SYL-TAI-2025 no contiene 4 bloques y 33 temas")
    if expected_distribution != [9, 5, 9, 10]:
        errors.append("data/syllabus.json ya no conserva la distribución 9/5/9/10")
    structure = tai["declared_structure"]
    if structure != {
        "block_count": 4, "topic_count": 33,
        "distribution": [9, 5, 9, 10], "topics_extracted": True
    }:
        errors.append("los metadatos estructurales TAI son incorrectos")
    if [len(block["topics"]) for block in blocks] != [9, 5, 9, 10]:
        errors.append("la distribución materializada TAI es incorrecta")

    canonical_ids: list[str] = []
    canonical_topic_ids: list[str] = []
    legacy_ids: list[str] = []
    aliases: list[str] = []
    if len(blocks) != len(legacy["blocks"]):
        return
    for block, legacy_block in zip(blocks, legacy["blocks"]):
        expected_block = {
            "legacy_id": legacy_block["id"],
            "canonical_id": f"TAI-{legacy_block['id']}",
            "local_official_code": ROMAN_BLOCKS[legacy_block["number"]],
            "order": legacy_block["number"],
            "title": legacy_block["title"],
            "legacy_status": legacy_block["status"],
        }
        for key, expected in expected_block.items():
            if block[key] != expected:
                errors.append(f"{legacy_block['id']}: {key} no coincide")
        if legacy_block["id"] not in block["historical_aliases"]:
            errors.append(f"{legacy_block['id']}: falta el alias histórico")
        canonical_ids.append(block["canonical_id"])
        legacy_ids.append(block["legacy_id"])
        aliases.extend(block["historical_aliases"])
        if len(block["topics"]) != len(legacy_block["topics"]):
            errors.append(f"{legacy_block['id']}: número de temas incorrecto")
            continue
        for topic, legacy_topic in zip(block["topics"], legacy_block["topics"]):
            topic_id = legacy_topic["id"]
            expected_topic = {
                "legacy_id": topic_id,
                "canonical_id": f"TAI-{topic_id}",
                "local_official_code": f"{ROMAN_BLOCKS[legacy_block['number']]}.{legacy_topic['number']}",
                "order": legacy_topic["number"],
                "title": legacy_topic["title"],
                "legacy_status": legacy_topic["status"],
                "legacy_content_path": f"content/topics/{topic_id}.md",
                "legacy_generated_path": f"content/generated/{topic_id}.html",
            }
            for key, expected in expected_topic.items():
                if topic[key] != expected:
                    errors.append(f"{topic_id}: {key} no coincide")
            if topic_id not in topic["historical_aliases"]:
                errors.append(f"{topic_id}: falta el alias histórico")
            for path_key in ("legacy_content_path", "legacy_generated_path"):
                if not (ROOT / topic[path_key]).is_file():
                    errors.append(f"{topic_id}: no existe {topic[path_key]}")
            canonical_ids.append(topic["canonical_id"])
            canonical_topic_ids.append(topic["canonical_id"])
            legacy_ids.append(topic["legacy_id"])
            aliases.extend(topic["historical_aliases"])

    unique(canonical_ids, "IDs canónicos TAI", errors)
    unique(legacy_ids, "IDs legacy TAI", errors)
    unique(aliases, "aliases históricos TAI", errors)
    for canonical_id in canonical_topic_ids:
        if not CANONICAL_TOPIC_RE.fullmatch(canonical_id):
            errors.append(f"ID canónico TAI inválido: {canonical_id}")


def validate_gsi(
    by_opposition: dict[str, Any], by_syllabus: dict[str, Any], errors: list[str]
) -> None:
    gsi_opposition = by_opposition.get("OPP-GSI")
    gsi = by_syllabus.get("SYL-GSI-2025")
    if gsi_opposition is None or gsi is None:
        errors.append("faltan OPP-GSI o SYL-GSI-2025")
        return
    if set(by_opposition) != {"OPP-TAI", "OPP-GSI"}:
        errors.append("oppositions.json debe registrar exactamente TAI y GSI en M1")
    if gsi_opposition["short_code"] != "GSI" or gsi_opposition["status"] != "planned":
        errors.append("OPP-GSI no está planificada")
    if gsi_opposition["runtime_available"] or gsi_opposition["runtime_status"] != "planned":
        errors.append("OPP-GSI aparece disponible en runtime")
    if gsi_opposition["program_location"]["status"] != "located-not-extracted":
        errors.append("el programa GSI no figura como localizado y no extraído")
    if gsi["status"] != "planned" or gsi["runtime_available"]:
        errors.append("SYL-GSI-2025 aparece operativo")
    if gsi["identifier_policy"] != {
        "operational_id_kind": "none", "canonical_ids_status": "not-assigned"
    }:
        errors.append("GSI no debe tener IDs operativos ni canónicos asignados en M1")
    if gsi["legacy_source_path"] is not None or gsi["blocks"]:
        errors.append("GSI contiene bloques, temas o una fuente runtime legacy")
    if gsi["declared_structure"] != {
        "block_count": 4, "topic_count": 55,
        "distribution": [10, 16, 15, 14], "topics_extracted": False
    }:
        errors.append("los metadatos planificados GSI no son 4/55 y 10/16/15/14")


def validate_m0_protection(by_syllabus: dict[str, Any], errors: list[str]) -> None:
    protected = read_json("data/protected-artifacts.json")
    artifacts = {item["historic_id"]: item for item in protected["protected_artifacts"]}
    tai = by_syllabus.get("SYL-TAI-2025")
    if tai is None:
        return
    topics = {
        topic["legacy_id"]: topic
        for block in tai["blocks"]
        for topic in block["topics"]
    }
    for topic_id in ("B1-T01", "B1-T02"):
        artifact = artifacts.get(topic_id)
        topic = topics.get(topic_id)
        if artifact is None or topic is None:
            errors.append(f"M0 o M1 no contiene {topic_id}")
            continue
        relation = artifact["relationships"]["topic_content"]
        if topic["legacy_content_path"] != relation["markdown_path"]:
            errors.append(f"{topic_id}: ruta Markdown distinta del manifiesto M0")
        if topic["legacy_generated_path"] != relation["html_path"]:
            errors.append(f"{topic_id}: ruta HTML distinta del manifiesto M0")
        if topic["canonical_id"] != artifact["proposed_future_canonical_id"]["value"]:
            errors.append(f"{topic_id}: reserva canónica distinta de M0")

    expected_hashes: dict[str, str] = {}
    for artifact in protected["protected_artifacts"]:
        for record in artifact["files"]:
            if record["path"] in {
                "data/syllabus.json", "data/sources.json", "data/topic-content.json"
            }:
                expected_hashes[record["path"]] = record["sha256"]
    for relative_path in ("data/syllabus.json", "data/sources.json", "data/topic-content.json"):
        actual = sha256((ROOT / relative_path).read_bytes()).hexdigest()
        if expected_hashes.get(relative_path) != actual:
            errors.append(f"{relative_path} no coincide con su hash M0")


def operational_paths() -> list[Path]:
    paths = [ROOT / "index.html", ROOT / "data" / "syllabus.json", ROOT / "data" / "sources.json", ROOT / "data" / "topic-content.json"]
    for directory, pattern in ((ROOT / "assets", "*"), (ROOT / "content" / "topics", "*.md"), (ROOT / "content" / "generated", "*.html")):
        if directory.is_dir():
            paths.extend(
                path for path in directory.rglob(pattern)
                if path.is_file() and path.suffix.lower() in {".css", ".html", ".js", ".json", ".md"}
            )
    return sorted(set(paths))


def validate_no_runtime_canonical_ids(errors: list[str]) -> None:
    for path in operational_paths():
        text = path.read_text(encoding="utf-8")
        match = CANONICAL_IN_TEXT_RE.search(text)
        if match:
            errors.append(f"ID canónico {match.group(0)} introducido en archivo operativo {path.relative_to(ROOT).as_posix()}")


def run_m0_validator(errors: list[str]) -> None:
    environment = os.environ.copy()
    environment["PYTHONDONTWRITEBYTECODE"] = "1"
    result = subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "validate_m0_baseline.py")],
        cwd=ROOT, capture_output=True, check=False, env=environment
    )
    if result.returncode != 0:
        errors.append("validate_m0_baseline.py ha fallado")


def main() -> int:
    errors: list[str] = []
    validate_schema("data/oppositions.json", "schemas/oppositions.schema.json", errors)
    validate_schema("data/syllabi-catalog.json", "schemas/syllabi-catalog.schema.json", errors)
    if errors:
        for error in sorted(set(errors)):
            print(f"ERROR: {error}.")
        return 1

    oppositions = read_json("data/oppositions.json")
    syllabi_catalog = read_json("data/syllabi-catalog.json")
    if oppositions["syllabi_catalog_path"] != "data/syllabi-catalog.json":
        errors.append("oppositions.json no referencia el catálogo de syllabi")
    if syllabi_catalog["runtime_source"] != {
        "path": "data/syllabus.json", "status": "legacy-operational",
        "catalog_is_runtime_source": False
    }:
        errors.append("data/syllabus.json debe seguir siendo la fuente operativa legacy")

    by_opposition, by_syllabus = validate_references(oppositions, syllabi_catalog, errors)
    validate_program_locations(by_opposition, by_syllabus, errors)
    validate_tai(by_opposition, by_syllabus, errors)
    validate_gsi(by_opposition, by_syllabus, errors)
    validate_m0_protection(by_syllabus, errors)
    validate_no_runtime_canonical_ids(errors)
    validate_m0_tag(errors)
    run_m0_validator(errors)

    if errors:
        for error in sorted(set(errors)):
            print(f"ERROR: {error}.")
        return 1

    print("OK: los dos catálogos M1 cumplen sus esquemas estrictos.")
    print("OK: IDs de oposición, syllabus, bloques, temas y aliases son únicos en su ámbito.")
    print("OK: referencias oposición-syllabus y procedencias oficiales son coherentes.")
    print("OK: TAI reproduce exactamente 4 bloques, 33 temas y la distribución 9/5/9/10.")
    print("OK: títulos, orden, IDs legacy, reservas canónicas y rutas TAI coinciden.")
    print("OK: B1-T01, B1-T02 y los catálogos protegidos conservan la línea base M0.")
    print("OK: GSI permanece planned, sin temas extraídos y no disponible en runtime.")
    print("OK: no hay IDs canónicos M1 en archivos operativos existentes.")
    print("OK: la etiqueta M0 apunta al commit esperado y su validador pasa.")
    print("OK: catálogo multioposición M1 validado en modo de solo lectura.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
