#!/usr/bin/env python3
"""Validate M2 runtime compatibility without modifying repository files."""

from __future__ import annotations

from hashlib import sha256
import json
from pathlib import Path
import re
import subprocess
import sys


ROOT = Path(__file__).resolve().parents[1]
BASE_TAG = "m1-catalogo-multioposicion"
M0_TAG = "m0-linea-base-tai"
M1_TARGET = "2f2761d2ef2b70faba09a590d3d7d99786d9337b"
M0_TARGET = "04bfac4281759044d6f7ce73006e964702fe83ee"
ALLOWED_MODIFIED = {
    "assets/js/data-service.js",
    "assets/js/router.js",
    "assets/js/syllabus-view.js",
    "assets/js/app.js",
}
ALLOWED_NEW = {
    "assets/js/catalog-service.js",
    "scripts/validate_m2_runtime.py",
    "tests/m2-runner.html",
    "tests/m2-tests.js",
    "docs/CARGADOR_RUTAS_MULTI_OPOSICION_M2.md",
    "docs/PRUEBAS_MANUALES_M2.md",
}
M1_PROTECTED = {
    "data/oppositions.json",
    "data/syllabi-catalog.json",
    "schemas/oppositions.schema.json",
    "schemas/syllabi-catalog.schema.json",
}
DATA_PROTECTED = {
    "data/syllabus.json",
    "data/sources.json",
    "data/topic-content.json",
    "data/questions-official.json",
    "data/questions-ai.json",
    "data/questions-manual.json",
    "data/demo/questions-ai-demo.json",
}
REQUIRED_V1_KEYS = {
    "tai.phase3.training.v1",
    "tai.phase4.exam.active.real.v1",
    "tai.phase4.exam.active.demo.v1",
    "tai.reinforcement.real.v1",
    "tai.reinforcement.demo.v1",
    "tai.analytics.real.v1",
    "tai.analytics.demo.v1",
}
CANONICAL_ID_RE = re.compile(r"\b(?:TAI|GSI)-B[0-9]+(?:-T[0-9]{2})?\b")
SECRET_RE = re.compile(r"(?:api[_-]?key|secret|access[_-]?token|password)\s*[:=]", re.IGNORECASE)
SYSTEM_PATH_RE = re.compile(r"(?:[A-Za-z]:\\|file://|C:/)", re.IGNORECASE)


def run_git(*args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(["git", *args], cwd=ROOT, text=True, encoding="utf-8", capture_output=True, check=False)


def read_text(relative_path: str) -> str:
    return (ROOT / relative_path).read_text(encoding="utf-8")


def read_json(relative_path: str) -> object:
    with (ROOT / relative_path).open(encoding="utf-8") as stream:
        return json.load(stream)


def add_error(errors: list[str], message: str) -> None:
    errors.append(f"ERROR: {message}")


def check_tag(tag: str, expected_target: str, errors: list[str]) -> None:
    tag_type = run_git("cat-file", "-t", f"refs/tags/{tag}")
    if tag_type.returncode or tag_type.stdout.strip() != "tag":
        add_error(errors, f"la etiqueta {tag} no existe o no es anotada.")
        return
    target = run_git("rev-parse", f"{tag}^{{}}")
    if target.returncode or target.stdout.strip() != expected_target:
        add_error(errors, f"la etiqueta {tag} no apunta a {expected_target}.")


def tracked_paths_at_base(errors: list[str]) -> set[str]:
    result = run_git("ls-tree", "-r", "--name-only", BASE_TAG)
    if result.returncode:
        add_error(errors, f"no se pudo leer la base {BASE_TAG}.")
        return set()
    return {line.strip() for line in result.stdout.splitlines() if line.strip()}


def changed_paths(errors: list[str]) -> set[str]:
    diff = run_git("diff", "--name-only", BASE_TAG)
    if diff.returncode:
        add_error(errors, f"no se pudo comparar el árbol con {BASE_TAG}.")
        return set()
    untracked = run_git("ls-files", "--others", "--exclude-standard")
    if untracked.returncode:
        add_error(errors, "no se pudieron leer archivos sin seguimiento.")
        return set()
    return {
        *[line.strip() for line in diff.stdout.splitlines() if line.strip()],
        *[line.strip() for line in untracked.stdout.splitlines() if line.strip()],
    }


def unchanged_from_base(relative_path: str, errors: list[str]) -> None:
    baseline = run_git("show", f"{BASE_TAG}:{relative_path}")
    current = ROOT / relative_path
    if baseline.returncode or not current.is_file():
        add_error(errors, f"no se pudo comprobar el archivo protegido {relative_path}.")
        return
    if sha256(baseline.stdout.encode("utf-8")).digest() != sha256(current.read_bytes()).digest():
        add_error(errors, f"se modificó el archivo protegido {relative_path}.")


def validate_git_and_scope(errors: list[str]) -> None:
    branch = run_git("branch", "--show-current")
    if branch.returncode or branch.stdout.strip() != "main":
        add_error(errors, "la rama actual debe ser main.")
    check_tag(M1_TAG := BASE_TAG, M1_TARGET, errors)
    check_tag(M0_TAG, M0_TARGET, errors)

    base_paths = tracked_paths_at_base(errors)
    changed = changed_paths(errors)
    allowed = ALLOWED_MODIFIED | ALLOWED_NEW
    unexpected = sorted(changed - allowed)
    if unexpected:
        add_error(errors, f"hay cambios fuera del alcance M2: {', '.join(unexpected)}.")
    for path in sorted(changed & ALLOWED_MODIFIED):
        if path not in base_paths:
            add_error(errors, f"{path} debe ser un archivo existente modificado, no un archivo nuevo.")
    for path in sorted(changed & ALLOWED_NEW):
        if path in base_paths:
            add_error(errors, f"{path} debe ser un archivo nuevo, no una modificación de M1.")

    protected = set(M1_PROTECTED) | set(DATA_PROTECTED) | {"index.html"}
    protected.update(path.relative_to(ROOT).as_posix() for path in (ROOT / "assets" / "css").rglob("*.css"))
    protected.update(path.relative_to(ROOT).as_posix() for path in (ROOT / "content").rglob("*.md"))
    protected.update(path.relative_to(ROOT).as_posix() for path in (ROOT / "content").rglob("*.html"))
    protected.update(path.relative_to(ROOT).as_posix() for path in (ROOT / "assets" / "js").glob("*storage.js"))
    protected.update(path.relative_to(ROOT).as_posix() for path in (ROOT / "assets" / "js").glob("*migration*.js"))
    for path in sorted(protected):
        unchanged_from_base(path, errors)


def validate_catalog_equivalence(errors: list[str]) -> None:
    try:
        oppositions = read_json("data/oppositions.json")
        catalog = read_json("data/syllabi-catalog.json")
        legacy = read_json("data/syllabus.json")
    except (OSError, ValueError, json.JSONDecodeError) as error:
        add_error(errors, f"no se pudieron leer los catálogos M1: {error}")
        return
    if not isinstance(oppositions, dict) or not isinstance(catalog, dict) or not isinstance(legacy, dict):
        add_error(errors, "los catálogos M1 o el temario legacy no son objetos JSON.")
        return
    syllabi = catalog.get("syllabi", [])
    runtime = [item for item in syllabi if isinstance(item, dict) and item.get("runtime_available") is True and item.get("status") != "planned"]
    if len(runtime) != 1:
        add_error(errors, "los catálogos M1 no contienen exactamente un runtime disponible.")
        return
    syllabus = runtime[0]
    opposition_by_id = {item.get("id"): item for item in oppositions.get("oppositions", []) if isinstance(item, dict)}
    opposition = opposition_by_id.get(syllabus.get("opposition_id"))
    if not isinstance(opposition, dict) or opposition.get("runtime_available") is not True:
        add_error(errors, "el syllabus runtime no tiene una oposición disponible coherente.")
    source = catalog.get("runtime_source")
    if not isinstance(source, dict) or syllabus.get("legacy_source_path") != source.get("path") or source.get("path") != "data/syllabus.json":
        add_error(errors, "data/syllabus.json no se conserva como materialización legacy seleccionada.")
    blocks = syllabus.get("blocks")
    legacy_blocks = legacy.get("blocks")
    if not isinstance(blocks, list) or not isinstance(legacy_blocks, list):
        add_error(errors, "no se puede comparar la estructura TAI con su materialización legacy.")
        return
    distribution: list[int] = []
    topic_count = 0
    if len(blocks) != len(legacy_blocks):
        add_error(errors, "el catálogo y data/syllabus.json difieren en número de bloques.")
        return
    for position, (block, legacy_block) in enumerate(zip(blocks, legacy_blocks), start=1):
        if not isinstance(block, dict) or not isinstance(legacy_block, dict):
            add_error(errors, f"el bloque {position} no es válido.")
            continue
        if (block.get("legacy_id"), block.get("order"), block.get("title"), block.get("legacy_status")) != (legacy_block.get("id"), legacy_block.get("number"), legacy_block.get("title"), legacy_block.get("status")):
            add_error(errors, f"el bloque {position} no coincide con su materialización legacy.")
        topics = block.get("topics")
        legacy_topics = legacy_block.get("topics")
        if not isinstance(topics, list) or not isinstance(legacy_topics, list) or len(topics) != len(legacy_topics):
            add_error(errors, f"el bloque {position} no conserva su distribución legacy.")
            continue
        distribution.append(len(topics))
        topic_count += len(topics)
        for topic_position, (topic, legacy_topic) in enumerate(zip(topics, legacy_topics), start=1):
            if not isinstance(topic, dict) or not isinstance(legacy_topic, dict):
                add_error(errors, f"el tema {position}.{topic_position} no es válido.")
                continue
            expected = (legacy_topic.get("id"), legacy_topic.get("number"), legacy_topic.get("title"), legacy_topic.get("status"))
            actual = (topic.get("legacy_id"), topic.get("order"), topic.get("title"), topic.get("legacy_status"))
            if actual != expected:
                add_error(errors, f"el tema {position}.{topic_position} no coincide con su materialización legacy.")
    declared = syllabus.get("declared_structure", {})
    if declared.get("block_count") != len(legacy_blocks) or declared.get("topic_count") != topic_count or declared.get("distribution") != distribution:
        add_error(errors, "la estructura declarada no coincide con data/syllabus.json.")
    planned = [item for item in syllabi if isinstance(item, dict) and (item.get("status") == "planned" or item.get("runtime_available") is False)]
    if any(item.get("blocks") or item.get("runtime_available") is not False for item in planned):
        add_error(errors, "un syllabus no operativo declara temas runtime o disponibilidad.")


def validate_runtime_contract(errors: list[str]) -> None:
    try:
        catalog_service = read_text("assets/js/catalog-service.js")
        data_service = read_text("assets/js/data-service.js")
        router = read_text("assets/js/router.js")
        syllabus_view = read_text("assets/js/syllabus-view.js")
        app = read_text("assets/js/app.js")
    except OSError as error:
        add_error(errors, f"no se pudo leer el runtime M2: {error}")
        return
    for required in ("selectRuntimeContext", "buildIdentityIndexes", "resolveTopicReference", "validateLegacySyllabusCompatibility"):
        if required not in catalog_service:
            add_error(errors, f"catalog-service.js no expone {required}.")
    for required in ("./data/oppositions.json", "./data/syllabi-catalog.json", "selectRuntimeContext", "validateLegacySyllabusCompatibility", "legacySourcePath"):
        if required not in data_service:
            add_error(errors, f"data-service.js no integra {required}.")
    if "candidates.length === 1" not in catalog_service or ".filter(" not in catalog_service or "syllabiCatalog.syllabi[0]" in catalog_service:
        add_error(errors, "la selección automática no demuestra unicidad independiente del orden.")
    for field in ("legacy_id", "canonical_id", "historical_aliases"):
        if field not in catalog_service:
            add_error(errors, f"la resolución no usa el campo de catálogo {field}.")
    if "runtime_available === true" not in catalog_service or 'status !== "planned"' not in catalog_service:
        add_error(errors, "un syllabus planned podría convertirse en runtime.")
    if "resolveTopicReference(viewState.data.runtimeContext, routeState.topicId)" not in syllabus_view or "loadTopicFragment(viewState.index, operationalTopicId)" not in syllabus_view:
        add_error(errors, "syllabus-view.js no normaliza la ruta antes de cargar contenido legacy.")
    for query in ("data-service.js?m2", "router.js?m2", "syllabus-view.js?m2"):
        if query not in app:
            add_error(errors, f"app.js no invalida caché para {query}.")
    if "TOPIC_ID_RE" not in router or "QUALIFIED_TOPIC_ID_RE" not in router or "SECTION_ID_RE" not in router:
        add_error(errors, "router.js no conserva las validaciones de tema y sección.")
    if not all(route in router for route in ('"inicio"', '"temario"', '"entrenamiento"', '"examen"', '"refuerzo"', '"estadisticas"')):
        add_error(errors, "router.js no conserva todas las rutas anteriores.")
    if "oposicion/" in router or "syllabus/" in router:
        add_error(errors, "router.js introduce familias de rutas fuera de M2.")
    operational_sources = "\n".join(
        path.read_text(encoding="utf-8") for path in sorted((ROOT / "assets" / "js").glob("*.js"))
    )
    if CANONICAL_ID_RE.search(operational_sources):
        add_error(errors, "hay IDs canónicos concretos hardcodeados en módulos operativos.")
    if "localStorage" in catalog_service or "fetch(" in catalog_service:
        add_error(errors, "catalog-service.js tiene efectos secundarios prohibidos.")


def validate_persistence_and_security(errors: list[str]) -> None:
    source_paths = sorted((ROOT / "assets" / "js").glob("*.js"))
    application = "\n".join(path.read_text(encoding="utf-8") for path in source_paths)
    changed = changed_paths(errors)
    changed_text = "\n".join(read_text(path) for path in sorted(changed & ALLOWED_MODIFIED) if (ROOT / path).is_file())
    for key in REQUIRED_V1_KEYS:
        if key not in application:
            add_error(errors, f"falta la clave v1 conservada {key}.")
    if ".v2" in changed_text or re.search(r"opposition(?:Id|_id)|syllabus(?:Id|_id)", changed_text, flags=re.IGNORECASE):
        add_error(errors, "M2 introduce persistencia v2 o campos de oposición/syllabus en módulos modificados.")
    if any("storage" in path or "migration" in path for path in changed):
        add_error(errors, "M2 modifica módulos de persistencia o migración.")
    if SYSTEM_PATH_RE.search(application):
        add_error(errors, "la aplicación contiene una ruta absoluta de sistema.")
    if SECRET_RE.search(application):
        add_error(errors, "la aplicación contiene un posible secreto.")
    if re.search(r"\b(?:React|Vue|Angular|express|node_modules)\b", application, flags=re.IGNORECASE):
        add_error(errors, "la aplicación introduce un framework o dependencia prohibida.")
    for package in ("package.json", "package-lock.json", "npm-shrinkwrap.json"):
        if (ROOT / package).exists():
            add_error(errors, f"existe la dependencia no permitida {package}.")
    if "build_topic_content" in changed_text or "build_catalog" in changed_text:
        add_error(errors, "M2 importa o ejecuta un constructor de contenido.")


def validate_deliverables(errors: list[str]) -> None:
    for path in sorted(ALLOWED_NEW):
        if not (ROOT / path).is_file():
            add_error(errors, f"falta el entregable M2 {path}.")
    try:
        tests = read_text("tests/m2-tests.js")
        technical = read_text("docs/CARGADOR_RUTAS_MULTI_OPOSICION_M2.md")
        manual = read_text("docs/PRUEBAS_MANUALES_M2.md")
    except OSError:
        return
    if tests.count("await test(") < 30:
        add_error(errors, "el runner M2 debe cubrir al menos 30 pruebas.")
    for phrase in ("legacy_id", "canonical_id", "GSI", "M3", "M4"):
        if phrase not in technical:
            add_error(errors, f"la documentación técnica no explica {phrase}.")
    if "Los registros v1 se siguen interpretando como TAI por compatibilidad histórica." not in technical:
        add_error(errors, "la documentación no declara la frontera de persistencia con M3.")
    manual_lower = manual.lower()
    for required in ("#inicio", "4 bloques y 33 temas", "modo demo", "gsi", "tests/m2-runner.html"):
        if required not in manual_lower:
            add_error(errors, f"faltan pruebas manuales para {required}.")
    statuses = re.findall(r"\|\s*(?:APROBADA|FALLIDA|NO EJECUTADA)\s*\|", manual)
    if len(statuses) < 16:
        add_error(errors, "el registro manual M2 no contiene estados verificables para todos los casos.")


def run_previous_validators(errors: list[str]) -> None:
    for name in ("validate_m1_catalog.py", "validate_m0_baseline.py", "validate_phase7b2.py"):
        result = subprocess.run([sys.executable, str(ROOT / "scripts" / name)], cwd=ROOT, capture_output=True, check=False)
        if result.returncode:
            detail = (result.stdout + result.stderr).decode("utf-8", errors="replace").strip().replace("\n", " | ")
            add_error(errors, f"{name} ha fallado antes de validar M2: {detail}")


def main() -> int:
    errors: list[str] = []
    validate_git_and_scope(errors)
    validate_catalog_equivalence(errors)
    validate_runtime_contract(errors)
    validate_persistence_and_security(errors)
    validate_deliverables(errors)
    run_previous_validators(errors)
    if errors:
        print("\n".join(errors))
        return 1
    print("OK: Git, etiquetas y alcance M2 validados contra M1.")
    print("OK: catálogo runtime, compatibilidad legacy e identidades validados.")
    print("OK: rutas compatibles, persistencia v1 y seguridad M2 validadas.")
    print("OK: M0, M1 y Fase 7B.2 siguen pasando en modo de solo lectura.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
