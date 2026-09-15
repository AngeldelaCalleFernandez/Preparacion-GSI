"""Validate Phase 6 without changing application data or local storage."""

from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REQUIRED = (
    "PLAN_FASE_6.md",
    "assets/js/analytics-engine.js",
    "assets/js/analytics-storage.js",
    "assets/js/analytics-events.js",
    "assets/js/analytics-migration.js",
    "assets/js/statistics.js",
    "tests/phase6-runner.html",
    "tests/phase6-tests.js",
    "docs/PRUEBAS_MANUALES_FASE_6.md",
)
FORBIDDEN_PATTERNS = (
    r"\breact\b",
    r"\bvue\b",
    r"\bangular\b",
    r"\bexpress\b",
    r"\bnode_modules\b",
    r"\brequire\s*\(",
    r"\bnpm\b",
    r"\bpackage\.json\b",
    r"(?:unpkg|jsdelivr|cdnjs)\.",
    r"https?://",
)
MANUAL_PATTERN = re.compile(r"^\|\s*(E-\d+)\s*\|\s*([^|]*)\|", re.MULTILINE)
VALID_MANUAL_STATUSES = frozenset({"APROBADA", "FALLIDA", "NO EJECUTADA"})
DEMO_PATH = "data/demo/questions-ai-demo.json"
REAL_DATA_PATHS = (
    "data/questions-official.json",
    "data/questions-ai.json",
    "data/questions-manual.json",
    "data/updates.json",
)


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def command_has_changes(*paths: str) -> bool:
    for command in (("git", "diff", "--quiet", "--", *paths), ("git", "diff", "--cached", "--quiet", "--", *paths)):
        result = subprocess.run(command, cwd=ROOT, check=False)
        if result.returncode != 0:
            return True
    return False


def validate_manual(document: str) -> list[str]:
    errors: list[str] = []
    cases = [(case_id, status.strip()) for case_id, status in MANUAL_PATTERN.findall(document)]
    if len(cases) < 30:
        errors.append("ERROR: deben documentarse al menos 30 pruebas manuales de Fase 6.")
    ids = [case_id for case_id, _ in cases]
    duplicate_ids = sorted({case_id for case_id in ids if ids.count(case_id) > 1})
    if duplicate_ids:
        errors.append(f"ERROR: hay casos manuales duplicados: {', '.join(duplicate_ids)}.")
    for case_id, status in cases:
        if status not in VALID_MANUAL_STATUSES:
            errors.append(f"ERROR: {case_id} tiene estado manual no válido: {status or 'vacío'}.")
    if "I-01" not in document or "E-31" not in ids:
        errors.append("ERROR: debe documentarse la incidencia de #estadisticas y su caso de regresión E-31.")
    if not re.search(r"E-30:.*\*\*\d+ pruebas aprobadas y 0 fallidas\*\*", document):
        errors.append("ERROR: el registro manual debe reflejar el resultado real y actual del runner de Fase 6.")
    return errors


def validate_demo_data() -> list[str]:
    errors: list[str] = []
    try:
        payload = read(DEMO_PATH)
        collection = json.loads(payload)
    except (OSError, ValueError) as error:
        return [f"ERROR: el banco demo no es JSON válido: {error}"]
    questions = collection.get("questions") if isinstance(collection, dict) else None
    if not isinstance(questions, list) or len(questions) < 32:
        return ["ERROR: el banco demo debe contener al menos 32 preguntas."]
    if collection.get("metadata", {}).get("dataset_type") != "ai":
        errors.append("ERROR: el banco demo debe conservar el contenedor compatible dataset_type=ai.")
    ids = [question.get("id") for question in questions if isinstance(question, dict)]
    if len(ids) != len(set(ids)) or any(not isinstance(question_id, str) or not question_id for question_id in ids):
        errors.append("ERROR: el banco demo contiene identificadores ausentes o repetidos.")
    blocks = {f"B{number}": 0 for number in range(1, 5)}
    origins = set()
    syllabus = json.loads(read("data/syllabus.json"))
    topic_ids = {topic["id"] for block in syllabus["blocks"] for topic in block["topics"]}
    for question in questions:
        if not isinstance(question, dict):
            errors.append("ERROR: el banco demo contiene una pregunta inválida.")
            continue
        block_id = question.get("block_id")
        if block_id in blocks:
            blocks[block_id] += 1
        else:
            errors.append(f"ERROR: {question.get('id', '<sin id>')} usa un bloque demo inválido.")
        origins.add(question.get("origin"))
        question_id = question.get("id", "<sin id>")
        if question.get("topic_id") not in topic_ids or not str(question.get("topic_id", "")).startswith(f"{block_id}-"):
            errors.append(f"ERROR: {question_id} referencia un tema demo inexistente o de otro bloque.")
        options = question.get("options")
        option_ids = [option.get("id") for option in options if isinstance(option, dict)] if isinstance(options, list) else []
        if len(options or []) != 4 or set(option_ids) != {"A", "B", "C", "D"} or question.get("correct_option") not in option_ids:
            errors.append(f"ERROR: {question_id} no tiene cuatro opciones y respuesta correcta válidas.")
        if not isinstance(question.get("feedback", {}).get("correct"), str) or not question["feedback"]["correct"].strip():
            errors.append(f"ERROR: {question_id} no contiene feedback demo suficiente.")
        source = question.get("source")
        if not isinstance(source, dict) or not isinstance(source.get("title"), str) or not isinstance(source.get("locator"), str):
            errors.append(f"ERROR: {question_id} no identifica una fuente demo y localizador.")
        if question.get("official_status") == "official":
            errors.append(f"ERROR: {question_id} puede confundirse con contenido oficial.")
    for block_id, count in blocks.items():
        if count < 8:
            errors.append(f"ERROR: el banco demo necesita al menos 8 preguntas de {block_id}; hay {count}.")
    if origins != {"official", "ai", "manual", "adapted"}:
        errors.append("ERROR: el banco demo debe incluir exactamente los orígenes oficial, IA, manual y adaptada simulados.")
    return errors


def main() -> int:
    errors: list[str] = []
    for phase in (2, 3, 4, 5):
        validator = ROOT / "scripts" / f"validate_phase{phase}.py"
        result = subprocess.run([sys.executable, str(validator)], cwd=ROOT, check=False)
        if result.returncode != 0:
            errors.append(f"ERROR: validate_phase{phase}.py ha fallado; no se puede validar Fase 6.")
    for path in REQUIRED:
        if not (ROOT / path).is_file():
            errors.append(f"ERROR: falta el entregable de Fase 6: {path}")
    if errors:
        print("\n".join(errors))
        return 1
    try:
        index = read("index.html")
        router = read("assets/js/router.js")
        engine = read("assets/js/analytics-engine.js")
        storage = read("assets/js/analytics-storage.js")
        events = read("assets/js/analytics-events.js")
        migration = read("assets/js/analytics-migration.js")
        statistics = read("assets/js/statistics.js")
        tests = read("tests/phase6-tests.js")
        manual = read("docs/PRUEBAS_MANUALES_FASE_6.md")
    except OSError as error:
        print(f"ERROR: no se pudieron leer los archivos de Fase 6: {error}")
        return 1

    if 'data-route="estadisticas"' not in index or 'data-view="estadisticas"' not in index or '"estadisticas"' not in router:
        errors.append("ERROR: falta la ruta hash #estadisticas.")
    for route in ("inicio", "temario", "entrenamiento", "examen", "refuerzo"):
        if f'"{route}"' not in router:
            errors.append(f"ERROR: se ha perdido la ruta existente #{route}.")
    for key in ("tai.analytics.real.v1", "tai.analytics.demo.v1"):
        if key not in storage:
            errors.append(f"ERROR: falta la clave separada de estadísticas {key}.")
    for required in ("sessions: 1000", "attempts: 10000", "processedEvents: 2000", "archiveFingerprint", "compactAnalyticsStore", "temporalPrecisionLimitedBefore"):
        if required not in engine:
            errors.append(f"ERROR: falta el contrato de límites o compactación: {required}.")
    for event_type in ("attempt.recorded", "attempt.annotated", "session.completed"):
        if event_type not in events:
            errors.append(f"ERROR: falta el evento analítico {event_type}.")
    for required in ("migratePhase3", "migratePhase5", "rebuildAnalytics", "lastResponseId", "cursorsByQuestion"):
        if required not in migration:
            errors.append(f"ERROR: falta el mecanismo de migración: {required}.")
    for required in ("analytics-summary", "analytics-timeline", "analytics-block-table", "analytics-topic-table", "analytics-origin-table", "analytics-mode-table", "analytics-weaknesses", "analytics-recurrent", "analytics-sessions", "analytics-storage"):
        if required not in index:
            errors.append(f"ERROR: falta el panel de estadísticas: {required}.")
    if "window.confirm" not in statistics:
        errors.append("ERROR: faltan confirmaciones explícitas para los borrados analíticos.")
    for required_test in (
        "un intento de entrenamiento se registra una sola vez",
        "un examen terminado genera una sola sesión",
        "una pregunta en blanco cuenta como blanco",
        "datos reales y demo permanecen separados",
        "la compactación no produce doble conteo",
        "una segunda compactación es idempotente",
        "un evento archivado no se reinserta",
        "netPercentage está normalizado",
        "un intento histórico sin sessionId",
    ):
        if required_test not in tests:
            errors.append(f"ERROR: falta la prueba automática: {required_test}.")
    errors.extend(validate_manual(manual))
    errors.extend(validate_demo_data())

    application = "\n".join([
        index,
        *[path.read_text(encoding="utf-8") for path in (ROOT / "assets").rglob("*.js")],
    ])
    for pattern in FORBIDDEN_PATTERNS:
        if re.search(pattern, application, flags=re.IGNORECASE):
            errors.append(f"ERROR: se ha detectado tecnología o dependencia no permitida: {pattern}.")
    if re.search(r"(?:api[_-]?key|secret|token|password)\s*[:=]\s*['\"]?[a-z0-9_-]{12,}", application, flags=re.IGNORECASE):
        errors.append("ERROR: se ha detectado un posible secreto en el código de la aplicación.")
    if re.search(r"(?:src|href)=['\"]/", index):
        errors.append("ERROR: index.html contiene una ruta absoluta no compatible con GitHub Pages.")
    if command_has_changes(*REAL_DATA_PATHS):
        errors.append("ERROR: no se pueden modificar los bancos reales ni las actualizaciones durante este correctivo de Fase 6.")
    if "fase 7" in application.lower() or "phase 7" in application.lower():
        errors.append("ERROR: se ha detectado alcance de Fase 7 en la aplicación.")
    if errors:
        print("\n".join(errors))
        return 1
    print("OK: estadísticas, migración, límites e interfaz de Fase 6 validados.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
