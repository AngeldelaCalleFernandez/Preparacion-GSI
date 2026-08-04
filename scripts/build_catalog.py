#!/usr/bin/env python3
"""Check that every converted Markdown has a manual catalog entry.

This script deliberately does not create questions, infer themes or extract
answers. It is a read-only catalogue coverage check.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def main() -> int:
    parser = argparse.ArgumentParser(description="Comprueba la cobertura del catálogo Markdown.")
    parser.add_argument("--check", action="store_true", help="Verifica el catálogo sin modificar archivos.")
    args = parser.parse_args()
    if not args.check:
        parser.error("use --check; la generación automática no está permitida en la Fase 2")
    with (ROOT / "data" / "sources.json").open(encoding="utf-8") as stream:
        catalog = json.load(stream)
    catalog_paths = {
        document["path"]
        for source in catalog["sources"]
        for document in source.get("documents", [])
    }
    markdown_paths = {
        path.relative_to(ROOT).as_posix()
        for path in (ROOT / "documents" / "markdown").rglob("*.md")
    }
    missing = sorted(markdown_paths - catalog_paths)
    stale = sorted(catalog_paths - markdown_paths)
    if missing or stale:
        for path in missing:
            print(f"ERROR: Markdown sin catalogar: {path}")
        for path in stale:
            print(f"ERROR: catálogo con ruta inexistente: {path}")
        return 1
    print(f"OK: los {len(markdown_paths)} Markdown convertidos están catalogados.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
