#!/usr/bin/env python3
"""Safe, repeatable document conversion for the TAI project.

The script preserves the input directory structure, copies source files to
documents/originals without overwriting different files, diagnoses MarkItDown
before conversion, and writes both machine-readable and human-readable reports.
OCR is never started automatically.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import shutil
import subprocess
import sys
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Iterable


SUPPORTED_EXTENSIONS = {
    ".csv",
    ".docx",
    ".epub",
    ".htm",
    ".html",
    ".jpeg",
    ".jpg",
    ".pdf",
    ".png",
    ".pptx",
    ".rtf",
    ".tif",
    ".tiff",
    ".txt",
    ".xls",
    ".xlsx",
}
MIN_REASONABLE_TEXT_LENGTH = 200
MARKITDOWN_INSTALL_COMMAND = (
    'python -m venv .venv; '
    '.\\.venv\\Scripts\\python -m pip install "markitdown[pdf]"'
)
AZURE_OCR_INSTALL_COMMAND = (
    '.\\.venv\\Scripts\\python -m pip install "markitdown[az-doc-intel]"'
)
OCR_ENVIRONMENT_VARIABLES = (
    "AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT",
    "AZURE_DOCUMENT_INTELLIGENCE_KEY",
)


@dataclass(frozen=True)
class Diagnostic:
    available: bool
    executable: str | None
    output: str
    plugins: dict[str, bool]
    azure_client_available: bool
    environment_variables: dict[str, bool]


def iso_now() -> str:
    return datetime.now().astimezone().isoformat(timespec="seconds")


def project_path(path: Path, project_root: Path) -> str:
    try:
        return path.resolve().relative_to(project_root.resolve()).as_posix()
    except ValueError:
        return path.resolve().as_posix()


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def copy_without_overwrite(source: Path, destination: Path) -> tuple[bool, str | None]:
    destination.parent.mkdir(parents=True, exist_ok=True)
    if not destination.exists():
        shutil.copy2(source, destination)
        return True, None
    if destination.is_file() and sha256(source) == sha256(destination):
        return True, None
    return False, f"El destino ya existe con contenido diferente: {destination}"


def python_module_available(module_name: str) -> bool:
    try:
        __import__(module_name)
    except (ImportError, ModuleNotFoundError):
        return False
    return True


def diagnose_markitdown(log_path: Path) -> Diagnostic:
    local_executable = Path.cwd() / ".venv" / "Scripts" / "markitdown.exe"
    executable = (
        str(local_executable)
        if local_executable.is_file()
        else shutil.which("markitdown")
    )
    output_lines = [
        f"Diagnóstico generado: {iso_now()}",
        "Comando requerido: markitdown --list-plugins",
    ]
    command_output = ""
    available = executable is not None

    if executable:
        process = subprocess.run(
            [executable, "--list-plugins"],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            check=False,
        )
        command_output = "\n".join(
            part.strip() for part in (process.stdout, process.stderr) if part.strip()
        )
        output_lines.extend(
            (
                f"Ejecutable: {executable}",
                f"Código de salida: {process.returncode}",
                "",
                command_output or "(sin salida)",
            )
        )
        available = process.returncode == 0
    else:
        output_lines.extend(
            (
                "Ejecutable: NO ENCONTRADO",
                "Código de salida: no ejecutado",
                f"Acción: {MARKITDOWN_INSTALL_COMMAND}",
            )
        )

    searchable_output = command_output.casefold()
    plugins = {
        "pdf": "pdf" in searchable_output,
        "images": any(word in searchable_output for word in ("image", "imagen")),
        "ocr": "ocr" in searchable_output,
        "azure_document_intelligence": any(
            word in searchable_output
            for word in ("azure document intelligence", "documentintelligence")
        ),
        "external_services": any(
            word in searchable_output for word in ("azure", "api", "external", "service")
        ),
    }
    azure_client_available = python_module_available("azure.ai.documentintelligence")
    environment_variables = {
        variable: bool(os.environ.get(variable))
        for variable in OCR_ENVIRONMENT_VARIABLES
    }

    output_lines.extend(("", "Comprobaciones OCR (sin mostrar valores):"))
    output_lines.extend(
        f"- complemento {name}: {'sí' if present else 'no detectado'}"
        for name, present in plugins.items()
    )
    output_lines.append(
        "- cliente azure.ai.documentintelligence: "
        + ("instalado" if azure_client_available else "no instalado")
    )
    output_lines.append(
        "- convertidor PDF (pdfplumber): "
        + ("instalado" if python_module_available("pdfplumber") else "no instalado")
    )
    output_lines.extend(
        f"- variable {name}: {'existe' if present else 'no existe'}"
        for name, present in environment_variables.items()
    )
    output_lines.extend(
        (
            "",
            "Nota: no se han leído ni registrado valores de variables de entorno.",
            "OCR no se ejecuta automáticamente.",
        )
    )
    log_path.parent.mkdir(parents=True, exist_ok=True)
    log_path.write_text("\n".join(output_lines) + "\n", encoding="utf-8")

    return Diagnostic(
        available=available,
        executable=executable,
        output=command_output,
        plugins=plugins,
        azure_client_available=azure_client_available,
        environment_variables=environment_variables,
    )


def discover_documents(input_root: Path) -> Iterable[Path]:
    return sorted(
        (
            path
            for path in input_root.rglob("*")
            if path.is_file() and path.suffix.casefold() in SUPPORTED_EXTENSIONS
        ),
        key=lambda path: path.as_posix().casefold(),
    )


def markdown_text_length(path: Path) -> int:
    text = path.read_text(encoding="utf-8", errors="replace")
    return len("".join(text.split()))


def record(
    source: Path,
    output: Path,
    project_root: Path,
    *,
    status: str,
    method: str,
    requires_ocr: bool,
    error: str | None,
) -> dict[str, object]:
    return {
        "source_file": project_path(source, project_root),
        "output_file": project_path(output, project_root),
        "status": status,
        "method": method,
        "requires_ocr": requires_ocr,
        "error": error,
        "converted_at": iso_now(),
    }


def convert_one(
    source: Path,
    output: Path,
    project_root: Path,
    diagnostic: Diagnostic,
) -> dict[str, object]:
    if output.is_file() and markdown_text_length(output) > 0:
        return record(
            source,
            output,
            project_root,
            status="converted",
            method="markitdown",
            requires_ocr=False,
            error=None,
        )

    if not diagnostic.available or not diagnostic.executable:
        return record(
            source,
            output,
            project_root,
            status="failed",
            method="markitdown",
            requires_ocr=False,
            error=(
                "MarkItDown no está instalado o no es accesible. "
                f"Instálelo con: {MARKITDOWN_INSTALL_COMMAND}"
            ),
        )

    output.parent.mkdir(parents=True, exist_ok=True)
    temporary_output = output.with_suffix(output.suffix + ".tmp")
    if temporary_output.exists():
        temporary_output.unlink()

    process = subprocess.run(
        [diagnostic.executable, str(source), "-o", str(temporary_output)],
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        check=False,
    )
    if process.returncode != 0:
        temporary_output.unlink(missing_ok=True)
        detail = (process.stderr or process.stdout or "error sin detalle").strip()
        return record(
            source,
            output,
            project_root,
            status="failed",
            method="markitdown",
            requires_ocr=False,
            error=f"MarkItDown devolvió un error: {detail}",
        )

    if not temporary_output.exists():
        return record(
            source,
            output,
            project_root,
            status="failed",
            method="markitdown",
            requires_ocr=False,
            error="MarkItDown no creó el archivo de salida.",
        )

    text_length = markdown_text_length(temporary_output)
    if text_length == 0:
        temporary_output.unlink(missing_ok=True)
        requires_ocr = source.suffix.casefold() in {".pdf", ".png", ".jpg", ".jpeg", ".tif", ".tiff"}
        missing_variables = [
            name
            for name, present in diagnostic.environment_variables.items()
            if not present
        ]
        ocr_detail = (
            "Posible documento escaneado. OCR no ejecutado. "
            "Falta el plugin OCR de terceros; "
            + (
                "falta el cliente azure.ai.documentintelligence; "
                if not diagnostic.azure_client_available
                else ""
            )
            + (
                "faltan las variables "
                + ", ".join(missing_variables)
                + "; "
                if missing_variables
                else ""
            )
            + f"instalación opcional de Azure: {AZURE_OCR_INSTALL_COMMAND}. "
            "Después debe configurarse el endpoint y la credencial fuera del repositorio."
        )
        return record(
            source,
            output,
            project_root,
            status="pending_ocr" if requires_ocr else "failed",
            method="markitdown",
            requires_ocr=requires_ocr,
            error=(
                "La conversión no produjo texto. " + ocr_detail
                if requires_ocr
                else "La conversión no produjo texto."
            ),
        )

    if (
        text_length < MIN_REASONABLE_TEXT_LENGTH
        and source.suffix.casefold() == ".pdf"
    ):
        temporary_output.unlink(missing_ok=True)
        missing_variables = [
            name
            for name, present in diagnostic.environment_variables.items()
            if not present
        ]
        return record(
            source,
            output,
            project_root,
            status="pending_ocr",
            method="markitdown",
            requires_ocr=True,
            error=(
                f"Solo se extrajeron {text_length} caracteres no blancos; "
                "posible PDF escaneado. OCR no ejecutado automáticamente. "
                "Falta el plugin OCR de terceros; "
                + (
                    "falta el cliente azure.ai.documentintelligence; "
                    if not diagnostic.azure_client_available
                    else ""
                )
                + (
                    "faltan las variables "
                    + ", ".join(missing_variables)
                    + "; "
                    if missing_variables
                    else ""
                )
                + f"instalación opcional de Azure: {AZURE_OCR_INSTALL_COMMAND}."
            ),
        )

    if output.exists():
        if sha256(temporary_output) == sha256(output):
            temporary_output.unlink()
            return record(
                source,
                output,
                project_root,
                status="converted",
                method="markitdown",
                requires_ocr=False,
                error=None,
            )
        temporary_output.unlink()
        return record(
            source,
            output,
            project_root,
            status="skipped",
            method="markitdown",
            requires_ocr=False,
            error=f"No se sobrescribió un Markdown existente diferente: {output}",
        )

    temporary_output.replace(output)
    return record(
        source,
        output,
        project_root,
        status="converted",
        method="markitdown",
        requires_ocr=False,
        error=None,
    )


def write_reports(
    records: list[dict[str, object]],
    json_path: Path,
    markdown_path: Path,
    diagnostic: Diagnostic,
) -> None:
    json_path.parent.mkdir(parents=True, exist_ok=True)
    json_path.write_text(
        json.dumps(records, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    counts = {
        status: sum(item["status"] == status for item in records)
        for status in ("converted", "converted_with_ocr", "skipped", "pending_ocr", "failed")
    }
    lines = [
        "# Informe de conversión",
        "",
        f"- Generado: {iso_now()}",
        f"- Documentos detectados: {len(records)}",
        f"- MarkItDown disponible: {'sí' if diagnostic.available else 'no'}",
        f"- Convertidos: {counts['converted']}",
        f"- Convertidos con OCR: {counts['converted_with_ocr']}",
        f"- Omitidos: {counts['skipped']}",
        f"- Pendientes de OCR: {counts['pending_ocr']}",
        f"- Fallidos: {counts['failed']}",
        "",
    ]
    if not diagnostic.available:
        lines.extend(
            (
                "## Bloqueo detectado",
                "",
                "MarkItDown no está instalado o no se encuentra en `PATH`.",
                "",
                "```powershell",
                MARKITDOWN_INSTALL_COMMAND,
                "```",
                "",
                "Después, vuelva a ejecutar:",
                "",
                "```powershell",
                "python scripts/convert_documents.py",
                "```",
                "",
            )
        )
    lines.extend(("## Resultado por documento", ""))
    for item in records:
        lines.extend(
            (
                f"### `{item['source_file']}`",
                "",
                f"- Estado: `{item['status']}`",
                f"- Salida: `{item['output_file']}`",
                f"- Método: `{item['method']}`",
                f"- Requiere OCR: {'sí' if item['requires_ocr'] else 'no'}",
                f"- Error: {item['error'] or 'ninguno'}",
                "",
            )
        )
    markdown_path.parent.mkdir(parents=True, exist_ok=True)
    markdown_path.write_text("\n".join(lines), encoding="utf-8")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Copia originales y convierte documentos a Markdown de forma segura."
    )
    parser.add_argument(
        "--input",
        type=Path,
        default=Path("TAI_documentacion_inicial_2026-07-30"),
        help="Carpeta de entrada (por defecto: TAI_documentacion_inicial_2026-07-30).",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    project_root = Path.cwd().resolve()
    input_root = args.input.resolve()
    originals_root = project_root / "documents" / "originals"
    markdown_root = project_root / "documents" / "markdown"
    plugin_log = project_root / "logs" / "markitdown_plugins.txt"
    json_report = project_root / "data" / "conversion_report.json"
    markdown_report = project_root / "logs" / "conversion_report.md"

    if not input_root.is_dir():
        print(f"ERROR: no existe la carpeta de entrada: {input_root}", file=sys.stderr)
        return 2

    documents = list(discover_documents(input_root))
    diagnostic = diagnose_markitdown(plugin_log)
    records: list[dict[str, object]] = []

    for source in documents:
        relative_path = source.relative_to(input_root)
        copied_source = originals_root / relative_path
        output = markdown_root / relative_path.with_suffix(".md")
        copied, copy_error = copy_without_overwrite(source, copied_source)
        if not copied:
            records.append(
                record(
                    source,
                    output,
                    project_root,
                    status="failed",
                    method="copy",
                    requires_ocr=False,
                    error=copy_error,
                )
            )
            continue
        records.append(
            convert_one(copied_source, output, project_root, diagnostic)
        )

    write_reports(records, json_report, markdown_report, diagnostic)
    print(f"Documentos detectados: {len(records)}")
    for status in ("converted", "converted_with_ocr", "skipped", "pending_ocr", "failed"):
        count = sum(item["status"] == status for item in records)
        print(f"{status}: {count}")
    print(f"Informe JSON: {project_path(json_report, project_root)}")
    print(f"Informe Markdown: {project_path(markdown_report, project_root)}")
    return 0 if all(item["status"] != "failed" for item in records) else 1


if __name__ == "__main__":
    raise SystemExit(main())
