#!/usr/bin/env python3
"""Public, reproducible validation gate for Phase 7B.1."""

from __future__ import annotations

from hashlib import sha256
from pathlib import Path
import subprocess
import sys


ROOT = Path(__file__).resolve().parents[1]
BASE_TAG = "fase-7a-completada"
TARGETS = ("content/topics/B2-T04.md", "content/topics/B3-T07.md", "content/topics/B4-T08.md")
REQUIRED = ("PLAN_FASE_7B_1.md", "documents/sources/technical/manifest.json", "documents/sources/technical/coverage-matrix.json", "schemas/technical-source-manifest.schema.json", "schemas/technical-coverage.schema.json", "scripts/technical_source_lib.py", "scripts/acquire_primary_sources.py", "scripts/validate_technical_sources.py", "scripts/test_technical_sources.py", "docs/FUENTES_TECNICAS_FASE_7B.md", "docs/PRUEBAS_MANUALES_FASE_7B_1.md")


def unchanged(path: str) -> bool:
    baseline = subprocess.run(["git", "show", f"{BASE_TAG}:{path}"], cwd=ROOT, capture_output=True, check=False)
    current = ROOT / path
    return baseline.returncode == 0 and current.is_file() and sha256(baseline.stdout).digest() == sha256(current.read_bytes()).digest()


def main() -> int:
    errors: list[str] = []
    for name in ("validate_json.py", "validate_questions.py", "validate_references.py", "validate_phase2.py", "validate_phase3.py", "validate_phase4.py", "validate_phase5.py", "validate_phase6.py", "validate_phase7.py"):
        if subprocess.run([sys.executable, str(ROOT / "scripts" / name)], cwd=ROOT, check=False).returncode:
            errors.append(f"ERROR: {name} ha fallado.")
    for path in REQUIRED:
        if not (ROOT / path).is_file():
            errors.append(f"ERROR: falta el entregable 7B.1 {path}.")
    for path in TARGETS:
        if not unchanged(path):
            errors.append(f"ERROR: 7B.1 no puede modificar contenido doctrinal: {path}.")
    if subprocess.run([sys.executable, str(ROOT / "scripts" / "validate_technical_sources.py"), "--check-catalog"], cwd=ROOT, check=False).returncode:
        errors.append("ERROR: la validación pública de fuentes técnicas ha fallado.")
    if errors:
        print("\n".join(errors))
        return 1
    print("OK: catálogo técnico público, compatibilidad histórica y límites de Fase 7B.1 validados.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
