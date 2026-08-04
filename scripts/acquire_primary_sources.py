#!/usr/bin/env python3
"""Acquire only a source explicitly declared in the Phase 7B.1 manifest."""

from __future__ import annotations

import argparse
import json

from technical_source_lib import (
    TechnicalSourceError,
    apply_staged_source,
    download_to_staging,
    load_manifest,
    load_staged_receipt,
    planned_summary,
    source_by_id,
)


def main() -> int:
    parser = argparse.ArgumentParser(description="Adquisición controlada de fuentes técnicas primarias.")
    parser.add_argument("--source-id", help="ID de fuente declarado en el manifiesto.")
    actions = parser.add_mutually_exclusive_group(required=True)
    actions.add_argument("--dry-run", action="store_true", help="Muestra la operación sin escribir archivos.")
    actions.add_argument("--check", action="store_true", help="Comprueba el staging existente sin escribir archivos.")
    actions.add_argument("--download", action="store_true", help="Descarga solo al staging temporal.")
    actions.add_argument("--apply", action="store_true", help="Promueve explícitamente staging y actualiza el manifiesto.")
    actions.add_argument("--require-private-local", action="store_true", help="Delega la comprobación privada al validador técnico.")
    args = parser.parse_args()
    try:
        if args.require_private_local:
            from validate_technical_sources import main as validate_main
            return validate_main(["--require-private-local"])
        if not args.source_id:
            parser.error("--source-id es obligatorio para esta operación.")
        manifest = load_manifest()
        source = source_by_id(manifest, args.source_id)
        if args.dry_run:
            print(json.dumps(planned_summary(source), ensure_ascii=False, indent=2))
            return 0
        if args.check:
            print(json.dumps(load_staged_receipt(args.source_id).as_dict(), ensure_ascii=False, indent=2))
            return 0
        if args.download:
            print(json.dumps(download_to_staging(source).as_dict(), ensure_ascii=False, indent=2))
            return 0
        print(json.dumps(apply_staged_source(manifest, args.source_id).as_dict(), ensure_ascii=False, indent=2))
        return 0
    except TechnicalSourceError as error:
        print(f"ERROR: {error}")
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
