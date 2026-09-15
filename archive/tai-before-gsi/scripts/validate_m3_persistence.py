"""Validador determinista y de solo lectura para el alcance M3."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
M2_TAG = "m2-cargador-rutas-compatibles"
EXPECTED_TAGS = {
    "m2-cargador-rutas-compatibles": "8df4ff47a6cb7c7083ad71bc7e506e247506ec7c",
    "m1-catalogo-multioposicion": "2f2761d2ef2b70faba09a590d3d7d99786d9337b",
    "m0-linea-base-tai": "04bfac4281759044d6f7ce73006e964702fe83ee",
}
ALLOWED_EXISTING = {
    "assets/js/app.js",
    "assets/js/storage.js",
    "assets/js/exam-storage.js",
    "assets/js/reinforcement-storage.js",
    "assets/js/analytics-storage.js",
    "assets/js/reinforcement-migration.js",
    "assets/js/analytics-migration.js",
    "assets/js/training.js",
    "assets/js/exam.js",
    "assets/js/reinforcement.js",
    "assets/js/statistics.js",
}
ALLOWED_NEW = {
    "assets/js/persistence-v2.js",
    "assets/js/persistence-migration-v2.js",
    "scripts/validate_m3_persistence.py",
    "tests/m3-runner.html",
    "tests/m3-tests.js",
    "docs/PERSISTENCIA_MULTI_OPOSICION_M3.md",
    "docs/PRUEBAS_MANUALES_M3.md",
}
ALLOWED_PATHS = ALLOWED_EXISTING | ALLOWED_NEW
M2_PROTECTED = {
    "assets/js/catalog-service.js",
    "assets/js/data-service.js",
    "assets/js/router.js",
    "assets/js/syllabus-view.js",
    "assets/js/topic-content-service.js",
    "scripts/validate_m2_runtime.py",
    "tests/m2-runner.html",
    "tests/m2-tests.js",
    "docs/CARGADOR_RUTAS_MULTI_OPOSICION_M2.md",
    "docs/PRUEBAS_MANUALES_M2.md",
}
DOMAIN_STORAGE = [
    "assets/js/storage.js",
    "assets/js/exam-storage.js",
    "assets/js/reinforcement-storage.js",
    "assets/js/analytics-storage.js",
]
LOGICAL_KEYS = [
    "tai.phase3.training.v1",
    "tai.phase4.exam.active.real.v1",
    "tai.phase4.exam.active.demo.v1",
    "tai.reinforcement.real.v1",
    "tai.reinforcement.demo.v1",
    "tai.analytics.real.v1",
    "tai.analytics.demo.v1",
]


class ValidationError(RuntimeError):
    pass


def run(*args: str) -> str:
    completed = subprocess.run(args, cwd=ROOT, text=True, capture_output=True)
    if completed.returncode:
        raise ValidationError(f"Fallo al ejecutar {' '.join(args)}: {completed.stderr.strip() or completed.stdout.strip()}")
    return completed.stdout.strip()


def require(condition: bool, message: str) -> None:
    if not condition:
        raise ValidationError(message)


def git(*args: str) -> str:
    return run("git", *args)


def git_has_diff(path: str) -> bool:
    completed = subprocess.run(("git", "diff", "--quiet", M2_TAG, "--", path), cwd=ROOT, text=True, capture_output=True)
    if completed.returncode not in (0, 1):
        raise ValidationError(f"No se pudo comprobar la protección de {path}: {completed.stderr.strip()}")
    return completed.returncode == 1


def git_status_porcelain() -> str:
    completed = subprocess.run(("git", "status", "--porcelain", "--untracked-files=all"), cwd=ROOT, text=True, capture_output=True)
    if completed.returncode:
        raise ValidationError(f"No se pudo leer el estado Git: {completed.stderr.strip()}")
    return completed.stdout


def changed_paths() -> set[str]:
    paths = set(filter(None, git("diff", "--name-only", f"{M2_TAG}...HEAD").splitlines()))
    for line in git_status_porcelain().splitlines():
        if len(line) >= 4:
            paths.add(line[3:])
    return paths


def file_text(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def require_contains(text: str, fragment: str, label: str) -> None:
    require(fragment in text, f"Falta {label}: {fragment}")


def check_git() -> None:
    require(git("branch", "--show-current") == "main", "La rama debe ser main.")
    for tag, target in EXPECTED_TAGS.items():
        require(git("rev-parse", f"{tag}^{{}}") == target, f"El tag {tag} no apunta al commit protegido.")
    require(git("cat-file", "-t", f"refs/tags/{M2_TAG}") == "tag", "El tag M2 debe ser anotado.")


def check_scope_and_protection() -> None:
    paths = changed_paths()
    unauthorized = sorted(paths - ALLOWED_PATHS)
    require(not unauthorized, f"Fuera del alcance M3: {', '.join(unauthorized)}")
    for path in M2_PROTECTED:
        require(not git_has_diff(path), f"Protección M2 vulnerada: {path}")
    protected_prefixes = ("data/", "schemas/", "assets/css/", "content/")
    for path in paths:
        require(path != "index.html" and not path.startswith(protected_prefixes), f"Protección general vulnerada: {path}")


def check_static_contract() -> None:
    adapter = file_text("assets/js/persistence-v2.js")
    migration = file_text("assets/js/persistence-migration-v2.js")
    app = file_text("assets/js/app.js")
    runner = file_text("tests/m3-tests.js")

    for key in LOGICAL_KEYS:
        require_contains(adapter, key, "contrato lógico v1")
    for fragment, label in [
        ("oposiciones.", "prefijo físico"),
        ("persistenceVersion", "envelope v2"),
        ("oppositionId", "contexto de oposición"),
        ("syllabusId", "contexto de syllabus"),
        ("payload === null", "lectura de tombstone"),
        ("createPersistenceEnvelope(runtime, null)", "escritura de tombstone"),
        ("parsePersistenceEnvelope", "validación de envelope"),
        ("getConfiguredPersistenceAdapter", "adaptador configurado"),
    ]:
        require_contains(adapter, fragment, label)
    for fragment, label in [
        ("planV1ToV2Migration", "fase de planificación"),
        ("plan = planV1ToV2Migration", "planificación antes de escritura"),
        ("const created = []", "tracking de escrituras"),
        ("rawStorage.removeItem(physicalKey)", "rollback físico"),
        ("validateActiveExamState", "validador de examen"),
        ("validateReinforcementStore", "validador de refuerzo"),
        ("normaliseAnalyticsStore", "validador de analítica"),
    ]:
        require_contains(migration, fragment, label)
    require("localStorage.clear" not in "\n".join(file_text(str(path.relative_to(ROOT))) for path in ROOT.glob("assets/js/**/*.js")), "No se permite localStorage.clear().")
    require("localStorage" not in runner, "El runner M3 no puede usar almacenamiento real del navegador.")
    for forbidden in ("OPP-TAI", "SYL-TAI-2025", "OPP-GSI", "SYL-GSI-2025"):
        for path in ["assets/js/persistence-v2.js", "assets/js/persistence-migration-v2.js", *ALLOWED_EXISTING]:
            require(forbidden not in file_text(path), f"ID concreto prohibido en JS operativo: {forbidden} ({path})")
    for path in DOMAIN_STORAGE:
        source = file_text(path)
        require("getConfiguredPersistenceAdapter" in source, f"{path} no usa el adaptador configurado.")
        require("window.localStorage" not in source, f"{path} accede directamente al almacenamiento del navegador.")
    for path, functions in {
        "assets/js/storage.js": ["getStoredResponses", "saveResponse", "getProgressSummary", "clearDemoResponses", "clearAllResponses"],
        "assets/js/exam-storage.js": ["getExamStorageKey", "validateActiveExamState", "createActiveExamState", "saveActiveExamState", "loadActiveExamState", "clearActiveExamState"],
        "assets/js/reinforcement-storage.js": ["loadReinforcementStore", "saveReinforcementStore", "clearAllReinforcement"],
        "assets/js/analytics-storage.js": ["loadAnalyticsStore", "saveAnalyticsStore", "clearAllAnalyticsStores"],
    }.items():
        source = file_text(path)
        for function in functions:
            require_contains(source, f"export function {function}", f"API pública en {path}")
    configure_at = app.index("configurePersistenceV2(data.runtimeContext")
    central_at = app.index("migrateV1ToV2(data.runtimeContext")
    reinforcement_at = app.index("migratePhase3Training(data, false)")
    analytics_at = app.index("migrateAnalytics(data, false)")
    init_at = app.index("initTraining(data)")
    require(configure_at < central_at < reinforcement_at < analytics_at < init_at, "El orden de arranque de persistencia M3 no es válido.")
    for path in ALLOWED_EXISTING:
        source = file_text(path)
        if path.endswith(("training.js", "exam.js", "reinforcement.js", "statistics.js", "app.js", "reinforcement-migration.js", "analytics-migration.js")):
            require("?m3" in source, f"Falta cache busting M3 coherente en {path}.")


def check_historical_validators() -> None:
    for script in ("scripts/validate_m1_catalog.py", "scripts/validate_m0_baseline.py", "scripts/validate_phase7b2.py"):
        run(sys.executable, script)


def main() -> int:
    try:
        check_git()
        check_scope_and_protection()
        check_static_contract()
        check_historical_validators()
    except (ValidationError, OSError, ValueError) as error:
        print(f"M3 validation: FAIL — {error}")
        return 1
    print("M3 validation: OK")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
