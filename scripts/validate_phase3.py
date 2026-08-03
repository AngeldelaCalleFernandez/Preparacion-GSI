#!/usr/bin/env python3
"""Validate the static Phase 3 application without modifying project data."""

from __future__ import annotations

import json
import re
import subprocess
import sys
from html.parser import HTMLParser
from pathlib import Path

try:
    from jsonschema import Draft202012Validator, FormatChecker
except ImportError:
    print(
        "ERROR: falta jsonschema. Instale la dependencia de validación con: "
        ".\\.venv\\Scripts\\python -m pip install -r scripts\\requirements-validation.txt"
    )
    raise SystemExit(2)


ROOT = Path(__file__).resolve().parents[1]
REQUIRED_FILES = (
    "index.html",
    "assets/css/styles.css",
    "assets/js/app.js",
    "assets/js/data-service.js",
    "assets/js/router.js",
    "assets/js/syllabus-view.js",
    "assets/js/training.js",
    "assets/js/storage.js",
    "assets/js/ui.js",
    "data/demo/questions-ai-demo.json",
    "docs/PRUEBAS_MANUALES_FASE_3.md",
)
REAL_QUESTION_FILES = (
    "data/questions-official.json",
    "data/questions-ai.json",
    "data/questions-manual.json",
)
REAL_DATA_FILES = (
    "data/syllabus.json",
    "data/sources.json",
    *REAL_QUESTION_FILES,
    "data/updates.json",
)
REQUIRED_DATA_LOADS = (
    "./data/syllabus.json",
    "./data/sources.json",
    "./data/questions-official.json",
    "./data/questions-ai.json",
    "./data/questions-manual.json",
    "./data/updates.json",
)
FORBIDDEN_FRAMEWORKS = re.compile(r"\b(?:React|Vue|Angular|node_modules|npm|express)\b", re.IGNORECASE)
SECRET_PATTERN = re.compile(r"(?:api[_-]?key|secret|access[_-]?token|password)\s*[:=]", re.IGNORECASE)
DEMO_PREFIXES = {"official": "OFF-DEMO-", "ai": "AI-DEMO-", "manual": "MAN-DEMO-", "adapted": "MAN-DEMO-"}


class AppHtmlParser(HTMLParser):
    """Collect just the resource and structural attributes needed by this validator."""

    def __init__(self) -> None:
        super().__init__()
        self.resources: list[tuple[str, dict[str, str]]] = []
        self.view_ids: set[str] = set()
        self.route_ids: set[str] = set()
        self.main_ids: set[str] = set()

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = {name: value or "" for name, value in attrs}
        if tag in {"link", "script"}:
            self.resources.append((tag, attributes))
        if "data-view" in attributes:
            self.view_ids.add(attributes["data-view"])
        if "data-route" in attributes:
            self.route_ids.add(attributes["data-route"])
        if tag == "main" and "id" in attributes:
            self.main_ids.add(attributes["id"])


def load_json(relative_path: str) -> object:
    with (ROOT / relative_path).open(encoding="utf-8") as stream:
        return json.load(stream)


def relative_asset(path: str) -> bool:
    return bool(path) and not path.startswith(("/", "http:", "https:", "file:")) and ".." not in Path(path).parts


def validate_demo(schema_validator: Draft202012Validator, errors: list[str]) -> None:
    relative_path = "data/demo/questions-ai-demo.json"
    try:
        demo = load_json(relative_path)
    except (OSError, json.JSONDecodeError) as error:
        errors.append(f"ERROR: JSON demo inválido {relative_path}: {error}")
        return
    for error in sorted(schema_validator.iter_errors(demo), key=lambda item: list(item.path)):
        location = ".".join(str(part) for part in error.absolute_path) or "raíz"
        errors.append(f"ERROR: {relative_path}:{location}: {error.message}")
    for question in demo.get("questions", []):
        question_id = question.get("id", "<sin id>")
        origin = question.get("origin")
        expected_prefix = DEMO_PREFIXES.get(origin)
        if expected_prefix is None or not question_id.startswith(expected_prefix):
            errors.append(f"ERROR: pregunta demo {question_id} no usa un prefijo estable compatible con su origen simulado.")
        if origin not in DEMO_PREFIXES:
            errors.append(f"ERROR: pregunta demo {question_id} tiene un origen simulado no permitido.")
        if question.get("official_status") != "not_official":
            errors.append(f"ERROR: pregunta demo {question_id} no está marcada como no oficial.")
        if question.get("validation_status") != "draft":
            errors.append(f"ERROR: pregunta demo {question_id} debe permanecer en estado draft.")
        if not question.get("is_active"):
            errors.append(f"ERROR: pregunta demo {question_id} debe estar activa para probar la interfaz.")
        if {"demo", "ficticia"} - set(question.get("tags", [])):
            errors.append(f"ERROR: pregunta demo {question_id} no lleva ambas etiquetas demo y ficticia.")
        if len(question.get("options", [])) != 4 or question.get("correct_option") not in {option.get("id") for option in question.get("options", [])}:
            errors.append(f"ERROR: pregunta demo {question_id} no tiene cuatro opciones y una respuesta correcta válida.")
        if not question.get("feedback", {}).get("correct", "").strip():
            errors.append(f"ERROR: pregunta demo {question_id} no tiene feedback correcto suficiente.")
        if question.get("source", {}).get("source_id"):
            errors.append(f"ERROR: pregunta demo {question_id} no debe atribuir una fuente catalogada u oficial.")


def validate_html_and_assets(errors: list[str]) -> None:
    index_path = ROOT / "index.html"
    try:
        index_text = index_path.read_text(encoding="utf-8")
    except OSError as error:
        errors.append(f"ERROR: no se puede leer index.html: {error}")
        return
    parser = AppHtmlParser()
    parser.feed(index_text)
    base_routes = {"inicio", "temario", "entrenamiento"}
    if not base_routes.issubset(parser.view_ids):
        errors.append("ERROR: index.html debe conservar las vistas inicio, temario y entrenamiento.")
    if not base_routes.issubset(parser.route_ids):
        errors.append("ERROR: index.html debe conservar las rutas inicio, temario y entrenamiento.")
    if "main-content" not in parser.main_ids:
        errors.append("ERROR: index.html debe incluir el landmark main-content.")
    stylesheet_paths = [attributes.get("href", "") for tag, attributes in parser.resources if tag == "link" and attributes.get("rel") == "stylesheet"]
    module_paths = [attributes.get("src", "") for tag, attributes in parser.resources if tag == "script" and attributes.get("type") == "module"]
    if stylesheet_paths != ["assets/css/styles.css"]:
        errors.append("ERROR: index.html debe cargar exactamente assets/css/styles.css mediante una ruta relativa.")
    if module_paths != ["assets/js/app.js"]:
        errors.append("ERROR: index.html debe cargar exactamente assets/js/app.js como módulo relativo.")
    for path in [*stylesheet_paths, *module_paths]:
        if not relative_asset(path) or not (ROOT / path).is_file():
            errors.append(f"ERROR: recurso HTML no relativo, inexistente o no permitido: {path}")

    app_sources = [index_text]
    for path in (ROOT / "assets").rglob("*"):
        if path.is_file() and path.suffix in {".js", ".css"}:
            app_sources.append(path.read_text(encoding="utf-8"))
    joined_sources = "\n".join(app_sources)
    forbidden = FORBIDDEN_FRAMEWORKS.search(joined_sources)
    if forbidden:
        errors.append(f"ERROR: se ha encontrado una dependencia o framework no permitido: {forbidden.group(0)}.")
    secret = SECRET_PATTERN.search(joined_sources)
    if secret:
        errors.append("ERROR: se ha encontrado un posible secreto o credencial en los archivos de interfaz.")
    for expected_path in REQUIRED_DATA_LOADS:
        if expected_path not in joined_sources:
            errors.append(f"ERROR: data-service.js no carga el JSON real requerido {expected_path}.")
    if 'const demoEnabled = isDemoMode();' not in joined_sources or 'document.querySelector("#demo-banner").hidden = false;' not in joined_sources:
        errors.append("ERROR: ?demo=1 debe activar el aviso de contenido ficticio antes de cargar los datos.")
    if 'isDemo: Boolean(question.isDemo)' not in joined_sources:
        errors.append("ERROR: las respuestas locales no se identifican explícitamente con isDemo.")
    if 'tai.phase3.training.v1' not in joined_sources:
        errors.append("ERROR: falta una clave versionada de localStorage para las respuestas.")


def validate_data_separation(errors: list[str]) -> None:
    try:
        syllabus = load_json("data/syllabus.json")
    except (OSError, json.JSONDecodeError) as error:
        errors.append(f"ERROR: no se puede comprobar el temario: {error}")
        return
    topic_count = sum(len(block.get("topics", [])) for block in syllabus.get("blocks", []))
    if len(syllabus.get("blocks", [])) != 4 or topic_count != 33:
        errors.append("ERROR: la interfaz requiere un temario de 4 bloques y 33 temas.")
    for relative_path in REAL_QUESTION_FILES:
        try:
            collection = load_json(relative_path)
        except (OSError, json.JSONDecodeError) as error:
            errors.append(f"ERROR: no se puede comprobar {relative_path}: {error}")
            continue
        for question in collection.get("questions", []):
            if str(question.get("id", "")).startswith("AI-DEMO-"):
                errors.append(f"ERROR: {relative_path} contiene una pregunta demo {question.get('id')}.")


def main() -> int:
    errors: list[str] = []
    phase2 = subprocess.run([sys.executable, str(ROOT / "scripts" / "validate_phase2.py")], cwd=ROOT, check=False)
    if phase2.returncode != 0:
        errors.append("ERROR: la validación de Fase 2 ha fallado; no se puede validar la Fase 3.")
    for relative_path in REQUIRED_FILES:
        if not (ROOT / relative_path).is_file():
            errors.append(f"ERROR: falta el archivo obligatorio de Fase 3: {relative_path}")
    for relative_path in REAL_DATA_FILES:
        if not (ROOT / relative_path).is_file():
            errors.append(f"ERROR: falta el JSON real requerido: {relative_path}")
    try:
        schema = load_json("schemas/question.schema.json")
        Draft202012Validator.check_schema(schema)
        schema_validator = Draft202012Validator(schema, format_checker=FormatChecker())
    except (OSError, json.JSONDecodeError, ValueError) as error:
        errors.append(f"ERROR: esquema de preguntas inválido: {error}")
    else:
        validate_demo(schema_validator, errors)
    validate_html_and_assets(errors)
    validate_data_separation(errors)
    if errors:
        print("\n".join(errors))
        return 1
    print("OK: aplicación estática de Fase 3, seis JSON reales y fixture demo validados.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
