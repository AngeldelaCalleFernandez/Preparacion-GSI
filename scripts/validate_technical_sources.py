#!/usr/bin/env python3
"""Validate Phase 7B.1 technical-source metadata and optional local assets."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
import subprocess

try:
    from jsonschema import Draft202012Validator, FormatChecker
except ImportError:
    print("ERROR: falta jsonschema. Instale scripts/requirements-validation.txt.")
    raise SystemExit(2)

from technical_source_lib import MANIFEST_PATH, ROOT, load_json, private_paths, validate_manifest_semantics


MANIFEST_SCHEMA = ROOT / "schemas" / "technical-source-manifest.schema.json"
COVERAGE_PATH = ROOT / "documents" / "sources" / "technical" / "coverage-matrix.json"
COVERAGE_SCHEMA = ROOT / "schemas" / "technical-coverage.schema.json"


def schema_errors(data_path: Path, schema_path: Path) -> list[str]:
    try:
        data, schema = load_json(data_path), load_json(schema_path)
        Draft202012Validator.check_schema(schema)
        validator = Draft202012Validator(schema, format_checker=FormatChecker())
    except (OSError, ValueError, json.JSONDecodeError) as error:
        return [f"ERROR: esquema o JSON técnico inválido ({data_path.relative_to(ROOT)}): {error}"]
    return [f"ERROR: {data_path.relative_to(ROOT)}:{'.'.join(map(str, error.absolute_path)) or 'raíz'}: {error.message}" for error in sorted(validator.iter_errors(data), key=lambda item: list(item.path))]


def coverage_errors(manifest: dict[str, object], coverage: object) -> list[str]:
    if not isinstance(coverage, dict):
        return ["ERROR: la matriz de cobertura no es un objeto."]
    by_id = {item.get("sourceId"): item for item in manifest.get("sources", []) if isinstance(item, dict)}
    known = set(by_id)
    errors: list[str] = []
    topic_ids: list[object] = []
    for topic in coverage.get("topics", []):
        if not isinstance(topic, dict):
            continue
        topic_ids.append(topic.get("topicId"))
        traced = []
        for section in topic.get("subsections", []):
            if not isinstance(section, dict):
                continue
            if section.get("status") in {"covered", "partially-covered"}:
                traced.append(section)
                if not section.get("sourceIds") or not section.get("locators"):
                    errors.append(f"ERROR: {topic.get('topicId')}:{section.get('id')} cubierto requiere fuente y localizador.")
            for source_id in section.get("sourceIds", []):
                if source_id not in known:
                    errors.append(f"ERROR: {topic.get('topicId')}:{section.get('id')} usa fuente inexistente {source_id}.")
                elif section.get("status") in {"covered", "partially-covered"}:
                    source = by_id[source_id]
                    if source.get("authorityStatus") != "official-primary" or source.get("publicationStatus") != "current":
                        errors.append(f"ERROR: {topic.get('topicId')}:{section.get('id')} no puede contar una fuente no vigente o no primaria.")
        if topic.get("assessment") == "sufficient-for-partial-pilot":
            if not any(section.get("status") == "covered" for section in traced):
                errors.append(f"ERROR: {topic.get('topicId')} requiere una sección central covered.")
            if len(traced) < 2:
                errors.append(f"ERROR: {topic.get('topicId')} requiere varias secciones trazables.")
            if not topic.get("gaps"):
                errors.append(f"ERROR: {topic.get('topicId')} requiere lagunas documentadas.")
            if topic.get("manualReview") != "reviewed":
                errors.append(f"ERROR: {topic.get('topicId')} sufficient-for-partial-pilot requiere revisión manual.")
    if topic_ids != ["B2-T04", "B3-T07", "B4-T08"]:
        errors.append("ERROR: la matriz debe contener B2-T04, B3-T07 y B4-T08 en ese orden.")
    return errors


def ignored_private_errors(manifest: dict[str, object]) -> list[str]:
    errors: list[str] = []
    for path in private_paths(manifest):
        if subprocess.run(["git", "check-ignore", "-q", "--", path], cwd=ROOT, check=False).returncode:
            errors.append(f"ERROR: la ruta privada no está ignorada por Git: {path}.")
    return errors


def catalog_errors(manifest: dict[str, object]) -> list[str]:
    """Require source-catalog entries only after the second commit migration."""
    catalog = load_json(ROOT / "data" / "sources.json")
    technical = {item.get("manifestSourceId"): item for item in catalog.get("sources", []) if isinstance(item, dict) and item.get("sourceKind") == "technical-primary-source"}
    errors: list[str] = []
    for source in manifest.get("sources", []):
        if not isinstance(source, dict) or source.get("publicationStatus") != "current":
            continue
        entry = technical.get(source.get("sourceId"))
        if not isinstance(entry, dict):
            errors.append(f"ERROR: falta en sources.json la fuente técnica vigente {source.get('sourceId')}.")
            continue
        if entry.get("id") != source.get("sourceId") or entry.get("canonicalUrl") != source.get("canonicalUrl"):
            errors.append(f"ERROR: sources.json no corresponde con el manifiesto para {source.get('sourceId')}.")
        if entry.get("localAvailability") == "private" and entry.get("publicLocalPath") is not None:
            errors.append(f"ERROR: {source.get('sourceId')} expone una ruta privada como pública.")
        if entry.get("localAvailability") == "public" and not entry.get("publicLocalPath"):
            errors.append(f"ERROR: {source.get('sourceId')} público no declara publicLocalPath.")
    declared = {item.get("sourceId") for item in manifest.get("sources", []) if isinstance(item, dict)}
    extras = sorted(str(key) for key in set(technical) - declared)
    if extras:
        errors.append(f"ERROR: fuentes técnicas sin manifiesto: {', '.join(extras)}.")
    return errors


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Valida manifiesto y activos técnicos de la Fase 7B.1.")
    parser.add_argument("--require-private-local", action="store_true")
    parser.add_argument("--check-catalog", action="store_true")
    args = parser.parse_args(argv)
    errors = schema_errors(MANIFEST_PATH, MANIFEST_SCHEMA) + schema_errors(COVERAGE_PATH, COVERAGE_SCHEMA)
    try:
        manifest, coverage = load_json(MANIFEST_PATH), load_json(COVERAGE_PATH)
    except (OSError, ValueError) as error:
        print(f"ERROR: no se pudo cargar el manifiesto técnico: {error}")
        return 1
    if isinstance(manifest, dict):
        errors += validate_manifest_semantics(manifest, require_local="private" if args.require_private_local else "public")
        errors += coverage_errors(manifest, coverage)
        errors += ignored_private_errors(manifest)
        if args.check_catalog:
            errors += catalog_errors(manifest)
    if errors:
        print("\n".join(errors))
        return 1
    print("OK: manifiesto, matriz y activos técnicos validados.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
