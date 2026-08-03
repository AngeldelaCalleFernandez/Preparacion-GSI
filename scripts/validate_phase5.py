"""Validate Phase 5 without modifying application data or local storage."""

from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REQUIRED = (
    "PLAN_FASE_5.md",
    "assets/js/reinforcement-engine.js",
    "assets/js/reinforcement-storage.js",
    "assets/js/reinforcement-migration.js",
    "assets/js/reinforcement.js",
    "tests/phase5-runner.html",
    "tests/phase5-tests.js",
    "docs/PRUEBAS_MANUALES_FASE_5.md",
)
FORBIDDEN = ("react", "vue", "angular", "express", "cdn", "unpkg", "jsdelivr")
VALID_MANUAL_STATUSES = frozenset({"APROBADA", "FALLIDA", "NO EJECUTADA"})
MANUAL_CASE_PATTERN = re.compile(r"^\|\s*(R-\d+)\s*\|\s*([^|]*)\|", re.MULTILINE)
REAL_DATA_PATHS = (
    "data/questions-official.json",
    "data/questions-ai.json",
    "data/questions-manual.json",
    "data/updates.json",
    "schemas",
)


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def validate_manual_cases(document: str) -> list[str]:
    """Validate the manual-test register without changing the document."""
    errors: list[str] = []
    section = re.search(r"^## Casos\s*$([\s\S]*?)(?=^## |\Z)", document, flags=re.MULTILINE)
    if not section:
        return ["ERROR: falta la sección de casos de pruebas manuales."]
    cases = [(case_id, status.strip()) for case_id, status in MANUAL_CASE_PATTERN.findall(section.group(1))]
    if len(cases) < 20:
        errors.append("ERROR: deben existir al menos 20 casos de prueba manual.")
    case_ids = [case_id for case_id, _ in cases]
    duplicate_ids = sorted({case_id for case_id in case_ids if case_ids.count(case_id) > 1})
    if duplicate_ids:
        errors.append(f"ERROR: hay IDs de pruebas manuales duplicados: {', '.join(duplicate_ids)}.")
    for case_id, status in cases:
        if status not in VALID_MANUAL_STATUSES:
            shown_status = status or "vacío"
            errors.append(f"ERROR: {case_id} tiene un estado manual no válido: {shown_status}.")
    if "## Registro de ejecución" not in document:
        errors.append("ERROR: falta la sección de registro de ejecución de pruebas manuales.")
    if not re.search(r"24\s+pruebas\s+aprobadas\s*;\s*0\s+fallidas", document, flags=re.IGNORECASE):
        errors.append("ERROR: falta documentar el resultado del runner (24 aprobadas; 0 fallidas).")
    return errors


def manual_validation_regressions() -> list[str]:
    """Ensure initial and final manual-test registers are both accepted."""
    def fixture(status: str) -> str:
        rows = "\n".join(
            f"| R-{number:02d} | {status} | Paso | Resultado |" for number in range(1, 22)
        )
        return f"## Casos\n\n{rows}\n\n## Registro de ejecución\n\n24 pruebas aprobadas; 0 fallidas.\n"

    errors: list[str] = []
    for name, status in (("inicial", "NO EJECUTADA"), ("final", "APROBADA")):
        fixture_errors = validate_manual_cases(fixture(status))
        if fixture_errors:
            errors.append(
                f"ERROR: la regresión del registro manual {name} no es válida: "
                + " ".join(fixture_errors)
            )
    return errors


def main() -> int:
    errors: list[str] = []
    for validator in ("validate_phase2.py", "validate_phase3.py", "validate_phase4.py"):
        result = subprocess.run([sys.executable, str(ROOT / "scripts" / validator)], cwd=ROOT, check=False)
        if result.returncode != 0:
            errors.append(f"ERROR: {validator} ha fallado; no se puede validar la Fase 5.")
    for path in REQUIRED:
        if not (ROOT / path).is_file():
            errors.append(f"ERROR: falta el entregable de Fase 5: {path}")
    if errors:
        print("\n".join(errors))
        return 1
    try:
        index = read("index.html").lower()
        router = read("assets/js/router.js").lower()
        engine = read("assets/js/reinforcement-engine.js").lower()
        storage = read("assets/js/reinforcement-storage.js").lower()
        training = read("assets/js/training.js").lower()
        exam = read("assets/js/exam.js").lower()
        tests = read("tests/phase5-tests.js").lower()
        manual = read("docs/PRUEBAS_MANUALES_FASE_5.md")
    except OSError as error:
        print(f"ERROR: no se pudieron leer archivos de Fase 5: {error}")
        return 1

    if 'data-route="refuerzo"' not in index or 'data-view="refuerzo"' not in index or '"refuerzo"' not in router:
        errors.append("ERROR: falta la ruta hash #refuerzo.")
    for route in ("inicio", "temario", "entrenamiento", "examen"):
        if f'"{route}"' not in router:
            errors.append(f"ERROR: se ha perdido la ruta existente #{route}.")
    for key in ("tai.reinforcement.real.v1", "tai.reinforcement.demo.v1"):
        if key not in storage:
            errors.append(f"ERROR: falta la clave separada de refuerzo {key}.")
    if "[1, 3, 7, 14, 30, 60]" not in engine:
        errors.append("ERROR: faltan los intervalos 1, 3, 7, 14, 30 y 60.")
    for status in ('"scheduled"', '"paused"', '"completed"', '"defective"'):
        if status not in engine:
            errors.append(f"ERROR: falta el estado estructural {status}.")
    if 'status = "due"' in engine or 'status = "overdue"' in engine:
        errors.append("ERROR: due u overdue se están persistiendo como estados.")
    for term in ("gettemporalstate", "processedeventids", "slice(-max_processed_event_ids)", "max_history"):
        if term not in engine:
            errors.append(f"ERROR: falta el mecanismo obligatorio de Fase 5: {term}.")
    if 'item.outcome === "incorrect"' not in exam:
        errors.append("ERROR: el examen no limita la incorporación automática a errores.")
    if "training:${response.responseid}:response" not in training:
        errors.append("ERROR: el entrenamiento no produce IDs estables de evento.")
    if "window.confirm" not in read("assets/js/reinforcement.js"):
        errors.append("ERROR: faltan confirmaciones explícitas de borrado.")
    if "quotaexceedederror" not in storage:
        errors.append("ERROR: no se controla el error de cuota de localStorage.")
    for required_test in (
        "no cambió automáticamente a pendiente",
        "respuesta y valoración no duplican attempts",
        "alta manual queda disponible",
        "nivel 5 no quedó programado",
        "historial y processedeventids respetan",
        "fallo de cuota",
    ):
        if required_test not in tests:
            errors.append(f"ERROR: falta la prueba automática: {required_test}.")
    errors.extend(validate_manual_cases(manual))
    errors.extend(manual_validation_regressions())
    application = "\n".join([
        read("index.html"),
        *[path.read_text(encoding="utf-8") for path in (ROOT / "assets").rglob("*.js")],
    ]).lower()
    for term in FORBIDDEN:
        if term in application:
            errors.append(f"ERROR: se ha detectado una dependencia o tecnología no permitida: {term}.")
    if re.search(r"(?:api[_-]?key|secret|token|password)\s*[:=]\s*['\"]?[a-z0-9_-]{12,}", application, flags=re.IGNORECASE):
        errors.append("ERROR: se ha detectado un posible secreto en el código de la aplicación.")
    if re.search(r"(?:src|href)=['\"]/", index):
        errors.append("ERROR: index.html contiene una ruta absoluta no compatible con GitHub Pages.")
    changed_data = subprocess.run(["git", "diff", "--quiet", "--", *REAL_DATA_PATHS], cwd=ROOT, check=False)
    if changed_data.returncode != 0:
        errors.append("ERROR: no se pueden modificar los bancos reales, actualizaciones ni esquemas.")
    if errors:
        print("\n".join(errors))
        return 1
    print("OK: refuerzo de Fase 5, separación local e idempotencia validados.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
