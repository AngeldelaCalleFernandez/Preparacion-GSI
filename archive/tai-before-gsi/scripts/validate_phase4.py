#!/usr/bin/env python3
"""Validate the static Phase 4 exam mode without modifying project data."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REQUIRED_FILES = (
    "assets/js/exam-engine.js",
    "assets/js/exam-storage.js",
    "assets/js/exam.js",
    "scripts/validate_phase4.py",
    "tests/phase4-runner.html",
    "tests/phase4-tests.js",
    "docs/PRUEBAS_MANUALES_FASE_4.md",
)
FORBIDDEN = ("react", "vue", "angular", "node_modules", "npm", "express", "repetición espaciada", "spaced repetition")


def read(relative_path: str) -> str:
    return (ROOT / relative_path).read_text(encoding="utf-8").lower()


def main() -> int:
    errors: list[str] = []
    for script in ("validate_phase2.py", "validate_phase3.py"):
        result = subprocess.run([sys.executable, str(ROOT / "scripts" / script)], cwd=ROOT, check=False)
        if result.returncode != 0:
            errors.append(f"ERROR: {script} ha fallado; no se puede validar Fase 4.")
    for relative_path in REQUIRED_FILES:
        if not (ROOT / relative_path).is_file():
            errors.append(f"ERROR: falta el archivo obligatorio de Fase 4: {relative_path}")
    try:
        index = read("index.html")
        router = read("assets/js/router.js")
        engine = read("assets/js/exam-engine.js")
        storage = read("assets/js/exam-storage.js")
        exam = read("assets/js/exam.js")
        tests = read("tests/phase4-tests.js")
        manual = read("docs/pruebas_manuales_fase_4.md")
    except OSError as error:
        errors.append(f"ERROR: no se pudo leer un archivo de Fase 4: {error}")
    else:
        if 'data-route="examen"' not in index or 'data-view="examen"' not in index or '"examen"' not in router:
            errors.append("ERROR: falta la ruta estática #examen.")
        for required in ('collection === "official"', 'collection === "ai"', 'validation_status === "validated"', "is_active"):
            if required not in engine:
                errors.append(f"ERROR: exam-engine.js no aplica el filtro obligatorio: {required}.")
        if 'collection === "manual"' in engine:
            errors.append("ERROR: las preguntas manuales no pueden participar en el modo examen.")
        for required in ("boecount", "aicount", "availability.boe.length < quotas.boecount", "mixto"):
            if required not in engine:
                errors.append(f"ERROR: falta la comprobación mixta requerida: {required}.")
        if 'demoenabled === true' not in engine or 'exam_modes.demo' not in exam:
            errors.append("ERROR: las preguntas demo no están correctamente limitadas a ?demo=1.")
        for required in ("tai.phase4.exam.active.real.v1", "tai.phase4.exam.active.demo.v1", "deadlineat", "answersbyquestionid"):
            if required not in storage:
                errors.append(f"ERROR: falta el campo o clave de recuperación: {required}.")
        if 'correct_option' in storage or 'feedback' in storage or 'source' in storage:
            errors.append("ERROR: exam-storage.js guarda información correctiva o de fuente no necesaria.")
        if 'calculateexamresults' not in engine or 'penaltypererror' not in engine or 'bytopic' not in engine:
            errors.append("ERROR: faltan cálculo, penalización o desglose de resultados.")
        if 'modo examen' not in index or 'tiempo restante' not in exam or 'marcar para revisión' not in exam:
            errors.append("ERROR: falta interfaz obligatoria de examen.")
        if 'aprobada:' not in tests or 'mixto' not in tests or 'sesión ficticia' not in manual:
            errors.append("ERROR: faltan pruebas automáticas o manuales de Fase 4.")
        app_sources = "\n".join([read("index.html"), *(path.read_text(encoding="utf-8").lower() for path in (ROOT / "assets").rglob("*.js"))])
        for term in FORBIDDEN:
            if term in app_sources:
                errors.append(f"ERROR: se ha encontrado tecnología o alcance no permitido: {term}.")
        for package in ("package.json", "package-lock.json", "npm-shrinkwrap.json"):
            if (ROOT / package).exists():
                errors.append(f"ERROR: no se permite {package} en la aplicación estática.")
    if errors:
        print("\n".join(errors))
        return 1
    print("OK: modo examen de Fase 4, persistencia aislada y pruebas estáticas validadas.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
