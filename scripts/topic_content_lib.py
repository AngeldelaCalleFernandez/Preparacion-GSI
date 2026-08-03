#!/usr/bin/env python3
"""Shared deterministic compiler for the Phase 7A editorial content."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from hashlib import sha256
from html import escape
import json
from pathlib import Path, PurePosixPath
import re
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
TOPICS_DIR = "content/topics"
GENERATED_DIR = "content/generated"
INDEX_PATH = "data/topic-content.json"
REPORT_PATH = "docs/COBERTURA_TEMARIO_FASE_7.md"

STATUS_VALUES = frozenset({"pending", "partial", "complete"})
REVIEW_VALUES = frozenset({"not-reviewed", "needs-review", "reviewed"})
DIRECTIVE_VALUES = frozenset({"derivado", "resumen", "explicacion", "ejemplo", "pendiente"})
SUBSTANTIVE_DIRECTIVES = frozenset({"derivado", "resumen", "explicacion"})
SECTION_ID_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
HEADING_RE = re.compile(r"^(#{2,3})\s+(.+?)\s+\{#([a-z0-9]+(?:-[a-z0-9]+)*)\}\s*$")
CITATION_RE = re.compile(
    r"\[\[fuente:(SRC-[A-Z0-9-]+)\|localizador=([^|\]\r\n]+)"
    r"(?:\|fragmento=(https://[^|\]\s]+))?\]\]"
)
LINK_RE = re.compile(r"\[([^\]\r\n]+)\]\(([^\s)]+)\)")
STRONG_RE = re.compile(r"\*\*([^*\r\n]+)\*\*")
EM_RE = re.compile(r"(?<!\*)\*([^*\r\n]+)\*(?!\*)")
CODE_RE = re.compile(r"`([^`\r\n]+)`")
TABLE_SEPARATOR_RE = re.compile(r"^\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?$")
UNSAFE_MARKUP_RE = re.compile(r"<\s*/?\s*[a-zA-Z!]")
UNSAFE_SCHEME_RE = re.compile(r"(?:\]\(|href\s*=\s*[\"']?)(?:javascript|data|vbscript):", re.IGNORECASE)


class TopicContentError(ValueError):
    """Raised for an actionable editorial contract violation."""


@dataclass(frozen=True)
class CompiledTopic:
    topic_id: str
    metadata: dict[str, object]
    html: str
    index_entry: dict[str, object]
    pending_sections: tuple[str, ...]
    source_ids: tuple[str, ...]


@dataclass(frozen=True)
class BuildArtifacts:
    outputs: dict[str, bytes]
    topics: tuple[CompiledTopic, ...]


def _error(path: Path, message: str) -> TopicContentError:
    return TopicContentError(f"{path.relative_to(ROOT).as_posix()}: {message}")


def _read_json(path: Path) -> object:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise TopicContentError(f"{path.relative_to(ROOT).as_posix()}: JSON inválido: {error}") from error


def _json_bytes(value: object) -> bytes:
    return (json.dumps(value, ensure_ascii=False, indent=2) + "\n").encode("utf-8")


def _validate_date(value: object, label: str, path: Path) -> str:
    if not isinstance(value, str):
        raise _error(path, f"{label} debe ser una fecha ISO YYYY-MM-DD.")
    try:
        datetime.strptime(value, "%Y-%m-%d")
    except ValueError as error:
        raise _error(path, f"{label} no es una fecha ISO válida: {value!r}.") from error
    return value


def _relative_path(value: object) -> bool:
    if not isinstance(value, str) or "\\" in value:
        return False
    path = PurePosixPath(value)
    return not path.is_absolute() and ".." not in path.parts


def _topic_maps(root: Path) -> tuple[dict[str, dict[str, object]], dict[str, dict[str, object]]]:
    syllabus = _read_json(root / "data/syllabus.json")
    sources = _read_json(root / "data/sources.json")
    if not isinstance(syllabus, dict) or not isinstance(sources, dict):
        raise TopicContentError("Los datos de temario o fuentes no son objetos JSON.")
    topic_map: dict[str, dict[str, object]] = {}
    for block in syllabus.get("blocks", []):
        if not isinstance(block, dict):
            continue
        for topic in block.get("topics", []):
            if isinstance(topic, dict) and isinstance(topic.get("id"), str):
                topic_map[topic["id"]] = {**topic, "blockId": block.get("id"), "blockTitle": block.get("title")}
    source_map = {
        source["id"]: source
        for source in sources.get("sources", [])
        if isinstance(source, dict) and isinstance(source.get("id"), str)
    }
    if len(topic_map) != 33:
        raise TopicContentError(f"data/syllabus.json debe contener 33 temas; se encontraron {len(topic_map)}.")
    return topic_map, source_map


def _parse_front_matter(path: Path) -> tuple[dict[str, object], str]:
    text = path.read_text(encoding="utf-8").replace("\r\n", "\n").replace("\r", "\n")
    if not text.startswith("---\n"):
        raise _error(path, "debe comenzar con front matter JSON delimitado por ---.")
    end = text.find("\n---\n", 4)
    if end < 0:
        raise _error(path, "falta el cierre --- del front matter JSON.")
    try:
        metadata = json.loads(text[4:end])
    except json.JSONDecodeError as error:
        raise _error(path, f"front matter JSON inválido: {error.msg}.") from error
    if not isinstance(metadata, dict):
        raise _error(path, "el front matter debe ser un objeto JSON.")
    return metadata, text[end + 5 :]


def _validate_metadata(path: Path, metadata: dict[str, object], expected_topic_id: str) -> None:
    allowed = {"topicId", "status", "reviewStatus", "updatedAt", "missingSources"}
    required = {"topicId", "status", "reviewStatus", "updatedAt", "missingSources"}
    unknown = sorted(set(metadata) - allowed)
    missing = sorted(required - set(metadata))
    if unknown:
        raise _error(path, f"metadatos no admitidos: {', '.join(unknown)}.")
    if missing:
        raise _error(path, f"faltan metadatos: {', '.join(missing)}.")
    if metadata["topicId"] != expected_topic_id:
        raise _error(path, f"topicId debe ser {expected_topic_id}.")
    if metadata["status"] not in STATUS_VALUES:
        raise _error(path, "status debe ser pending, partial o complete.")
    if metadata["reviewStatus"] not in REVIEW_VALUES:
        raise _error(path, "reviewStatus no es válido.")
    _validate_date(metadata["updatedAt"], "updatedAt", path)
    missing_sources = metadata["missingSources"]
    if not isinstance(missing_sources, list) or any(not isinstance(item, str) or not item.strip() for item in missing_sources):
        raise _error(path, "missingSources debe ser una lista de textos no vacíos.")
    if metadata["status"] in {"pending", "partial"} and not missing_sources:
        raise _error(path, "un tema pending o partial debe declarar missingSources.")
    if metadata["status"] == "complete" and missing_sources:
        raise _error(path, "un tema complete no puede declarar missingSources.")


def _validate_fragment_url(value: str, path: Path) -> None:
    parsed = urlparse(value)
    if parsed.scheme != "https" or not parsed.netloc or not parsed.fragment:
        raise _error(path, "fragmento debe ser una URL HTTPS con fragmento verificado.")


def _source_refs(text: str, path: Path, source_map: dict[str, dict[str, object]]) -> list[dict[str, object]]:
    if "[[fuente:" in text and not CITATION_RE.search(text):
        raise _error(path, "contiene una cita con sintaxis no admitida.")
    refs: list[dict[str, object]] = []
    seen: set[tuple[str, str, str | None]] = set()
    for match in CITATION_RE.finditer(text):
        source_id, locator, fragment = match.groups()
        locator = locator.strip()
        if source_id not in source_map:
            raise _error(path, f"la cita usa sourceId inexistente: {source_id}.")
        if not locator:
            raise _error(path, "cada cita debe incluir un localizador humano.")
        if fragment:
            _validate_fragment_url(fragment, path)
        key = (source_id, locator, fragment)
        if key not in seen:
            refs.append({"sourceId": source_id, "locator": locator, "officialFragmentUrl": fragment})
            seen.add(key)
    return refs


def _safe_href(value: str, path: Path) -> str:
    parsed = urlparse(value)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        raise _error(path, f"enlace no seguro o no admitido: {value!r}.")
    return value


def _render_inline(text: str, path: Path, source_map: dict[str, dict[str, object]]) -> str:
    if UNSAFE_MARKUP_RE.search(text) or UNSAFE_SCHEME_RE.search(text):
        raise _error(path, "contiene HTML o un esquema de URL no admitido.")

    tokens: list[str] = []

    def protect(value: str) -> str:
        token = f"\x00TOKEN{len(tokens)}\x00"
        tokens.append(value)
        return token

    def citation(match: re.Match[str]) -> str:
        source_id, locator, fragment = match.groups()
        source = source_map[source_id]
        label = escape(str(source.get("title", source_id)))
        safe_locator = escape(locator.strip())
        pieces = [
            '<span class="topic-source-ref">',
            f'<span class="topic-source-ref__label">Fuente: {label}</span>',
            f'<span class="topic-source-ref__locator">Localizador: {safe_locator}</span>',
        ]
        source_url = source.get("url")
        if isinstance(source_url, str) and source_url:
            href = _safe_href(source_url, path)
            pieces.append(
                f'<a href="{escape(href, quote=True)}" target="_blank" rel="noopener noreferrer">Abrir fuente oficial (nueva pestaña)</a>'
            )
        if fragment:
            href = _safe_href(fragment, path)
            pieces.append(
                f'<a href="{escape(href, quote=True)}" target="_blank" rel="noopener noreferrer">Abrir fragmento oficial verificado (nueva pestaña)</a>'
            )
        pieces.append("</span>")
        return protect(" ".join(pieces))

    text = CITATION_RE.sub(citation, text)

    def link(match: re.Match[str]) -> str:
        label, href = match.groups()
        safe_href = _safe_href(href, path)
        return protect(
            f'<a href="{escape(safe_href, quote=True)}" target="_blank" rel="noopener noreferrer">{escape(label)}</a>'
        )

    text = LINK_RE.sub(link, text)
    text = escape(text)
    text = CODE_RE.sub(r"<code>\1</code>", text)
    text = STRONG_RE.sub(r"<strong>\1</strong>", text)
    text = EM_RE.sub(r"<em>\1</em>", text)
    for number, token in enumerate(tokens):
        text = text.replace(f"\x00TOKEN{number}\x00", token)
    return text


def _render_table(lines: list[str], path: Path, source_map: dict[str, dict[str, object]]) -> str:
    def cells(line: str) -> list[str]:
        return [cell.strip() for cell in line.strip().strip("|").split("|")]

    headers = cells(lines[0])
    if not headers or any(not header for header in headers):
        raise _error(path, "la tabla debe tener encabezados no vacíos.")
    rows = [cells(line) for line in lines[2:]]
    if any(len(row) != len(headers) for row in rows):
        raise _error(path, "todas las filas de una tabla deben tener el mismo número de columnas.")
    header_html = "".join(f"<th scope=\"col\">{_render_inline(value, path, source_map)}</th>" for value in headers)
    rows_html = "".join(
        "<tr>" + "".join(f"<td>{_render_inline(value, path, source_map)}</td>" for value in row) + "</tr>"
        for row in rows
    )
    return f'<div class="topic-table-wrap"><table><thead><tr>{header_html}</tr></thead><tbody>{rows_html}</tbody></table></div>'


def _render_blocks(lines: list[str], path: Path, source_map: dict[str, dict[str, object]]) -> str:
    html: list[str] = []
    index = 0
    while index < len(lines):
        line = lines[index]
        if not line.strip():
            index += 1
            continue
        if line.startswith("```"):
            language = line[3:].strip()
            if language and not re.fullmatch(r"[A-Za-z0-9_-]+", language):
                raise _error(path, "el lenguaje de un bloque de código no es válido.")
            index += 1
            code: list[str] = []
            while index < len(lines) and not lines[index].startswith("```"):
                code.append(lines[index])
                index += 1
            if index == len(lines):
                raise _error(path, "bloque de código sin cierre.")
            class_name = f' class="language-{escape(language, quote=True)}"' if language else ""
            html.append(f"<pre><code{class_name}>{escape(chr(10).join(code))}</code></pre>")
            index += 1
            continue
        if line.startswith("|") and index + 1 < len(lines) and TABLE_SEPARATOR_RE.fullmatch(lines[index + 1]):
            table = [line, lines[index + 1]]
            index += 2
            while index < len(lines) and lines[index].startswith("|"):
                table.append(lines[index])
                index += 1
            html.append(_render_table(table, path, source_map))
            continue
        if line.startswith("> "):
            quote: list[str] = []
            while index < len(lines) and lines[index].startswith("> "):
                quote.append(lines[index][2:])
                index += 1
            html.append(f"<blockquote><p>{_render_inline(' '.join(quote), path, source_map)}</p></blockquote>")
            continue
        if re.match(r"^-\s+", line):
            items: list[str] = []
            while index < len(lines) and re.match(r"^-\s+", lines[index]):
                items.append(re.sub(r"^-\s+", "", lines[index]))
                index += 1
            html.append("<ul>" + "".join(f"<li>{_render_inline(item, path, source_map)}</li>" for item in items) + "</ul>")
            continue
        if re.match(r"^\d+\.\s+", line):
            items = []
            while index < len(lines) and re.match(r"^\d+\.\s+", lines[index]):
                items.append(re.sub(r"^\d+\.\s+", "", lines[index]))
                index += 1
            html.append("<ol>" + "".join(f"<li>{_render_inline(item, path, source_map)}</li>" for item in items) + "</ol>")
            continue
        paragraph: list[str] = []
        while index < len(lines):
            candidate = lines[index]
            if not candidate.strip() or candidate.startswith(("```", "|", "> ")) or re.match(r"^(?:-|\d+\.)\s+", candidate):
                break
            paragraph.append(candidate.strip())
            index += 1
        if not paragraph:
            raise _error(path, "sintaxis Markdown no admitida.")
        html.append(f"<p>{_render_inline(' '.join(paragraph), path, source_map)}</p>")
    return "\n".join(html)


def _compile_topic(
    path: Path,
    topic: dict[str, object],
    source_map: dict[str, dict[str, object]],
) -> CompiledTopic:
    topic_id = str(topic["id"])
    metadata, body = _parse_front_matter(path)
    _validate_metadata(path, metadata, topic_id)
    lines = body.split("\n")
    while lines and not lines[0].strip():
        lines.pop(0)
    expected_title = str(topic["title"])
    if not lines or lines[0] != f"# {expected_title}":
        raise _error(path, "debe contener un único H1 idéntico al título oficial de syllabus.json.")
    lines = lines[1:]
    if any(line.startswith("# ") for line in lines):
        raise _error(path, "solo se permite un H1.")

    sections: list[dict[str, object]] = []
    rendered_sections: list[str] = []
    section_ids: set[str] = {"fuentes"}
    current: dict[str, object] | None = None
    current_directive: str | None = None
    directive_lines: list[str] = []
    current_has_h2 = False
    all_directives: list[str] = []
    pending_sections: list[str] = []

    def close_directive() -> None:
        nonlocal current_directive, directive_lines
        if current_directive is None or current is None:
            raise _error(path, "cierre de directiva sin apertura.")
        directive_text = "\n".join(directive_lines).strip()
        if not directive_text:
            raise _error(path, f"la directiva {current_directive} no puede estar vacía.")
        refs = _source_refs(directive_text, path, source_map)
        if current_directive in SUBSTANTIVE_DIRECTIVES and not refs:
            raise _error(path, f"la directiva {current_directive} debe contener al menos una cita válida.")
        if current_directive == "pendiente":
            if not directive_text.startswith("Contenido pendiente de una fuente verificable."):
                raise _error(path, "una directiva pendiente debe comenzar con el texto obligatorio.")
            pending_sections.append(str(current["title"]))
        current["sourceRefs"].extend(ref for ref in refs if ref not in current["sourceRefs"])
        class_name = f"topic-content__{current_directive}"
        label = "Ejemplo didáctico" if current_directive == "ejemplo" else current_directive.capitalize()
        rendered_sections.append(
            f'<div class="{class_name}" data-editorial-kind="{current_directive}">'
            f'<p class="topic-content__kind">{escape(label)}</p>'
            f"{_render_blocks(directive_lines, path, source_map)}</div>"
        )
        all_directives.append(current_directive)
        current_directive = None
        directive_lines = []

    for line in lines:
        heading = HEADING_RE.fullmatch(line)
        if heading:
            if current_directive is not None:
                raise _error(path, "una directiva debe cerrarse antes de un encabezado.")
            marks, title, section_id = heading.groups()
            level = len(marks)
            if level == 3 and not current_has_h2:
                raise _error(path, "un H3 debe seguir a un H2.")
            if section_id in section_ids:
                raise _error(path, f"sectionId duplicado o reservado: {section_id}.")
            section_ids.add(section_id)
            if level == 2:
                current_has_h2 = True
            current = {"sectionId": section_id, "title": title, "level": level, "sourceRefs": []}
            sections.append(current)
            rendered_sections.append(f'<h{level} id="{section_id}">{escape(title)}</h{level}>')
            continue
        if line.startswith(":::"):
            directive = line[3:].strip()
            if directive:
                if current_directive is not None:
                    raise _error(path, "no se permiten directivas anidadas.")
                if current is None:
                    raise _error(path, "una directiva debe estar dentro de una sección H2 o H3.")
                if directive not in DIRECTIVE_VALUES:
                    raise _error(path, f"directiva no admitida: {directive}.")
                current_directive = directive
                directive_lines = []
            else:
                close_directive()
            continue
        if current_directive is None:
            if line.strip():
                raise _error(path, "el texto editorial debe estar dentro de una directiva admitida.")
            continue
        directive_lines.append(line)
    if current_directive is not None:
        raise _error(path, "directiva sin cierre.")
    if not sections:
        raise _error(path, "debe contener al menos una sección H2.")
    if metadata["status"] == "pending" and any(kind != "pendiente" for kind in all_directives):
        raise _error(path, "un tema pending solo puede contener directivas pendiente.")
    if metadata["status"] == "partial":
        if not any(kind in SUBSTANTIVE_DIRECTIVES for kind in all_directives):
            raise _error(path, "un tema partial debe incluir contenido sustantivo citado.")
        if not pending_sections:
            raise _error(path, "un tema partial debe identificar al menos una sección pendiente.")

    topic_refs: list[dict[str, object]] = []
    for section in sections:
        for ref in section["sourceRefs"]:
            if ref not in topic_refs:
                topic_refs.append(ref)
    status_text = {
        "pending": "Contenido pendiente de fuentes verificables.",
        "partial": "Cobertura parcial: consulta las secciones y fuentes disponibles.",
        "complete": "Cobertura editorial completa.",
    }[str(metadata["status"])]
    toc_items = "".join(
        f'<li class="topic-content__toc-level-{section["level"]}"><a href="#temario/{topic_id}/{section["sectionId"]}">{escape(str(section["title"]))}</a></li>'
        for section in sections
    )
    sources_html = ""
    if topic_refs:
        source_ids = []
        for ref in topic_refs:
            source_id = str(ref["sourceId"])
            if source_id not in source_ids:
                source_ids.append(source_id)
        items = []
        for source_id in source_ids:
            source = source_map[source_id]
            title = escape(str(source.get("title", source_id)))
            url = source.get("url")
            if isinstance(url, str) and url:
                href = _safe_href(url, path)
                items.append(
                    f'<li><a href="{escape(href, quote=True)}" target="_blank" rel="noopener noreferrer">{title} (nueva pestaña)</a></li>'
                )
            else:
                items.append(f"<li>{title}</li>")
        sources_html = "\n".join([
            '<section class="topic-content__sources" aria-labelledby="fuentes">',
            '<h2 id="fuentes">Fuentes utilizadas</h2>',
            "<ul>",
            *items,
            "</ul>",
            "</section>",
        ])
    generated_html = "\n".join([
        f'<article class="topic-content" data-topic-id="{topic_id}" data-coverage-status="{metadata["status"]}">',
        f'<aside class="topic-content__status topic-content__status--{metadata["status"]}" role="status"><p>{escape(status_text)}</p></aside>',
        '<nav class="topic-content__toc" aria-label="Índice del tema">',
        '<h2>Contenido del tema</h2>',
        f"<ol>{toc_items}</ol>",
        "</nav>",
        *rendered_sections,
        sources_html,
        "</article>",
        "",
    ])
    html_checksum = sha256(generated_html.encode("utf-8")).hexdigest()
    index_entry = {
        "topicId": topic_id,
        "contentPath": f"{GENERATED_DIR}/{topic_id}.html",
        "status": metadata["status"],
        "reviewStatus": metadata["reviewStatus"],
        "updatedAt": metadata["updatedAt"],
        "checksum": html_checksum,
        "sections": sections,
    }
    return CompiledTopic(
        topic_id=topic_id,
        metadata=metadata,
        html=generated_html,
        index_entry=index_entry,
        pending_sections=tuple(dict.fromkeys(pending_sections)),
        source_ids=tuple(dict.fromkeys(str(ref["sourceId"]) for ref in topic_refs)),
    )


def build_artifacts(root: Path = ROOT) -> BuildArtifacts:
    topic_map, source_map = _topic_maps(root)
    expected_ids = list(topic_map)
    topics_dir = root / TOPICS_DIR
    if not topics_dir.is_dir():
        raise TopicContentError(f"Falta el directorio {TOPICS_DIR}.")
    actual_paths = {path.stem: path for path in topics_dir.glob("*.md")}
    extra_ids = sorted(set(actual_paths) - set(expected_ids))
    missing_ids = [topic_id for topic_id in expected_ids if topic_id not in actual_paths]
    if extra_ids:
        raise TopicContentError(f"Hay Markdown de temas no oficiales: {', '.join(extra_ids)}.")
    if missing_ids:
        raise TopicContentError(f"Faltan Markdown de temas: {', '.join(missing_ids)}.")
    compiled = tuple(_compile_topic(actual_paths[topic_id], topic_map[topic_id], source_map) for topic_id in expected_ids)
    generated_at = max(str(topic.metadata["updatedAt"]) for topic in compiled) + "T00:00:00Z"
    index = {"version": 1, "generatedAt": generated_at, "topics": [topic.index_entry for topic in compiled]}
    outputs: dict[str, bytes] = {
        INDEX_PATH: _json_bytes(index),
        REPORT_PATH: _coverage_report(compiled, generated_at).encode("utf-8"),
    }
    for topic in compiled:
        outputs[f"{GENERATED_DIR}/{topic.topic_id}.html"] = topic.html.encode("utf-8")
    return BuildArtifacts(outputs=outputs, topics=compiled)


def _coverage_report(topics: tuple[CompiledTopic, ...], generated_at: str) -> str:
    rows = [
        "# Cobertura del temario — Fase 7A",
        "",
        f"Generado determinísticamente: `{generated_at}`.",
        "",
        "| Tema | Cobertura | Revisión | Secciones | Referencias | Fuentes | Secciones pendientes | Advertencias |",
        "| --- | --- | --- | ---: | ---: | --- | --- | --- |",
    ]
    for topic in topics:
        entry = topic.index_entry
        references = sum(len(section["sourceRefs"]) for section in entry["sections"])
        missing = "; ".join(str(item) for item in topic.metadata["missingSources"])
        sources = ", ".join(topic.source_ids) or "—"
        pending = ", ".join(topic.pending_sections) or "—"
        rows.append(
            "| {id} | {status} | {review} | {sections} | {references} | {sources} | {pending} | {missing} |".format(
                id=topic.topic_id,
                status=entry["status"],
                review=entry["reviewStatus"],
                sections=len(entry["sections"]),
                references=references,
                sources=sources,
                pending=pending,
                missing=missing,
            )
        )
    rows.extend([
        "",
        "## Alcance pendiente",
        "",
        "Los pilotos técnicos de B2, B3 y B4 pertenecen a la Fase 7B. Requieren fuentes primarias locales verificadas y catalogadas mediante el procedimiento descrito en `PLAN_FASE_7.md`.",
        "",
    ])
    return "\n".join(rows)


def write_artifacts(artifacts: BuildArtifacts, root: Path = ROOT) -> None:
    for relative_path, payload in artifacts.outputs.items():
        if not _relative_path(relative_path):
            raise TopicContentError(f"El constructor intentó escribir una ruta no relativa: {relative_path}.")
        destination = root / relative_path
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_bytes(payload)
