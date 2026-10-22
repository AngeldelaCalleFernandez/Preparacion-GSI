#!/usr/bin/env python3
"""Export the three active GSI question banks to deterministic Markdown."""

from __future__ import annotations

import argparse
import hashlib
import json
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "docs/GSI_PREGUNTAS_TEST_COMPLETAS_2026.md"
SCRIPT_VERSION = "1.0.0"
QUESTION_FILES = (
    ("official", ROOT / "data/questions-official.json", "Oficiales INAP"),
    ("manual", ROOT / "data/questions-manual.json", "Manuales/curadas"),
    ("ai", ROOT / "data/questions-ai.json", "IA no oficial"),
)
ORIGIN_LABELS = {
    "official": "oficial INAP",
    "manual": "manual/curada",
    "adapted": "adaptada/curada",
    "ai": "IA no oficial",
}


def load_json(path: Path) -> dict:
    with path.open(encoding="utf-8") as stream:
        return json.load(stream)


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def one_line(value: object) -> str:
    return str(value or "").strip().replace("\r\n", "\n").replace("\r", "\n").replace("\n", "<br>")


def is_usable(question: dict) -> bool:
    return question.get("is_active") is True and question.get("validation_status") == "validated"


def build_export() -> str:
    syllabus_path = ROOT / "data/syllabus.json"
    syllabus = load_json(syllabus_path)
    topics = [topic for block in syllabus["blocks"] for topic in block["topics"]]
    topics_by_id = {topic["id"]: topic for topic in topics}
    topic_order = {topic["id"]: index for index, topic in enumerate(topics)}
    blocks = {block["id"]: block for block in syllabus["blocks"]}

    records: list[tuple[int, int, int, dict]] = []
    bank_rows: list[dict] = []
    seen_ids: set[str] = set()
    for bank_order, (bank_id, path, label) in enumerate(QUESTION_FILES):
        collection = load_json(path)
        questions = collection.get("questions", [])
        usable = sum(is_usable(question) for question in questions)
        bank_rows.append(
            {
                "id": bank_id,
                "label": label,
                "path": path,
                "count": len(questions),
                "usable": usable,
                "version": collection.get("metadata", {}).get("data_version", "sin versión"),
                "updated_at": collection.get("metadata", {}).get("updated_at", "sin fecha"),
                "sha256": sha256(path),
            }
        )
        for source_order, question in enumerate(questions):
            question_id = question.get("id")
            topic_id = question.get("topic_id")
            if not isinstance(question_id, str) or not question_id:
                raise ValueError(f"{path.relative_to(ROOT)} contiene una pregunta sin ID.")
            if question_id in seen_ids:
                raise ValueError(f"ID duplicado entre bancos: {question_id}.")
            if topic_id not in topics_by_id:
                raise ValueError(f"{question_id} referencia el tema inexistente {topic_id!r}.")
            options = question.get("options", [])
            option_ids = {option.get("id") for option in options if isinstance(option, dict)}
            if len(options) != 4 or option_ids != {"A", "B", "C", "D"}:
                raise ValueError(f"{question_id} no contiene exactamente las opciones A, B, C y D.")
            if question.get("correct_option") not in option_ids:
                raise ValueError(f"{question_id} no tiene una respuesta correcta válida.")
            seen_ids.add(question_id)
            records.append((topic_order[topic_id], bank_order, source_order, question))

    records.sort(key=lambda item: item[:3])
    questions = [item[3] for item in records]
    total = len(questions)
    total_usable = sum(is_usable(question) for question in questions)
    counts_by_topic = Counter(question["topic_id"] for question in questions)
    usable_by_topic = Counter(question["topic_id"] for question in questions if is_usable(question))

    lines = [
        "# Banco completo de preguntas tipo test — GSI A2",
        "",
        "Exportación reproducible de los tres bancos del producto. Los JSON son la fuente de verdad; este documento no modifica el estado editorial ni convierte contenido generado en contenido oficial.",
        "",
        f"**Versión del exportador:** {SCRIPT_VERSION}. **Temario:** {syllabus['metadata'].get('data_version', 'sin versión')} (actualizado el {syllabus['metadata'].get('updated_at', 'sin fecha')}).",
        "",
        "| Banco | Registros | Activas y validadas | Versión de datos | Actualización declarada |",
        "| --- | ---: | ---: | --- | --- |",
    ]
    for row in bank_rows:
        lines.append(
            f"| {row['label']} | {row['count']} | {row['usable']} | {row['version']} | {row['updated_at']} |"
        )
    lines.extend(
        [
            f"| **Total** | **{total}** | **{total_usable}** | — | — |",
            "",
            f"**Estado:** {total_usable} activas y validadas; {total - total_usable} excluidas del uso normal. La dificultad declarada en los JSON es orientativa y no equivale a una calibración psicométrica.",
            "",
            "## Integridad de las fuentes",
            "",
            "| Archivo | SHA-256 |",
            "| --- | --- |",
        ]
    )
    for row in bank_rows:
        lines.append(f"| `{row['path'].relative_to(ROOT).as_posix()}` | `{row['sha256']}` |")
    lines.append(f"| `data/syllabus.json` | `{sha256(syllabus_path)}` |")
    lines.extend(["", "Para regenerar: `python scripts/export_gsi_questions.py --force`. Para comprobar que el documento está sincronizado: `python scripts/export_gsi_questions.py --check`.", "", "## Índice de temas", ""])

    for block_id, block in blocks.items():
        lines.append(f"- [Bloque {block_id} — {block['title']}](#bloque-{block_id.lower()})")
        for topic in block["topics"]:
            topic_id = topic["id"]
            lines.append(
                f"  - [{topic_id} ({counts_by_topic[topic_id]}; {usable_by_topic[topic_id]} activas)](#tema-{topic_id.lower()})"
            )

    questions_by_topic: dict[str, list[dict]] = {topic["id"]: [] for topic in topics}
    for question in questions:
        questions_by_topic[question["topic_id"]].append(question)

    for block_id, block in blocks.items():
        lines.extend(["", f'<a id="bloque-{block_id.lower()}"></a>', f"## Bloque {block_id} — {block['title']}", ""])
        for topic in block["topics"]:
            topic_id = topic["id"]
            topic_questions = questions_by_topic[topic_id]
            lines.extend(
                [
                    f'<a id="tema-{topic_id.lower()}"></a>',
                    f"### {topic_id} — {topic['title']} ({len(topic_questions)} preguntas; {usable_by_topic[topic_id]} activas)",
                    "",
                ]
            )
            for number, question in enumerate(topic_questions, start=1):
                question_id = question["id"]
                origin = ORIGIN_LABELS.get(question.get("origin"), str(question.get("origin", "sin origen")))
                state = "activa y validada" if is_usable(question) else "excluida del uso normal"
                difficulty = question.get("difficulty", "no declarada")
                lines.extend(
                    [
                        f"#### {number}. {question_id}",
                        "",
                        f"**Procedencia:** {origin}. **Estado de uso:** {state}. **Validación:** `{question.get('validation_status', 'sin estado')}`. **Dificultad declarada:** `{difficulty}`.",
                        "",
                        f"**Enunciado:** {one_line(question.get('statement'))}",
                        "",
                    ]
                )
                options_by_id = {option["id"]: option for option in question["options"]}
                for option_id in ("A", "B", "C", "D"):
                    lines.extend([f"- **{option_id}.** {one_line(options_by_id[option_id].get('text'))}", ""])
                correct_id = question["correct_option"]
                lines.extend(
                    [
                        f"**Respuesta correcta:** **{correct_id}.** {one_line(options_by_id[correct_id].get('text'))}",
                        "",
                    ]
                )
                feedback = question.get("feedback", {})
                correct_feedback = one_line(feedback.get("correct"))
                incorrect_feedback = one_line(feedback.get("incorrect"))
                if correct_feedback:
                    lines.extend([f"**Explicación:** {correct_feedback}", ""])
                if incorrect_feedback and incorrect_feedback != correct_feedback:
                    lines.extend([f"**Feedback tras error:** {incorrect_feedback}", ""])

                source = question.get("source", {})
                source_title = one_line(source.get("title") or source.get("source_id") or "Fuente no titulada")
                source_url = str(source.get("url") or "").strip()
                if source_url.startswith(("https://", "http://")):
                    lines.append(f"**Fuente:** [{source_title}](<{source_url}>).")
                else:
                    lines.append(f"**Fuente:** {source_title}.")
                trace = []
                for label, field in (
                    ("source_id", "source_id"),
                    ("documento", "document_id"),
                    ("localizador", "locator"),
                    ("versión", "version"),
                    ("revisión", "reviewed_at"),
                ):
                    if source.get(field) not in (None, ""):
                        trace.append(f"{label}: {one_line(source[field])}")
                if trace:
                    lines.extend(["", "**Trazabilidad:** " + "; ".join(trace) + "."])
                record_hash = source.get("record_sha256")
                if record_hash:
                    lines.extend(["", f"**Hash editorial del registro:** `{record_hash}`."])
                lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT, help="Ruta de salida Markdown.")
    parser.add_argument("--check", action="store_true", help="No escribe; falla si la salida no coincide.")
    parser.add_argument("--force", action="store_true", help="Permite reemplazar una salida existente.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    output = args.output if args.output.is_absolute() else ROOT / args.output
    expected = build_export()
    if args.check:
        if not output.is_file():
            print(f"ERROR: falta la exportación {output.relative_to(ROOT)}.")
            return 1
        current = output.read_text(encoding="utf-8")
        if current != expected:
            print(f"ERROR: {output.relative_to(ROOT)} no coincide con los bancos actuales. Regenera con --force.")
            return 1
        print(f"OK: exportación sincronizada ({expected.count('#### ')} preguntas).")
        return 0
    if output.exists() and not args.force:
        print(f"ERROR: {output} ya existe. Usa --check o confirma el reemplazo con --force.")
        return 1
    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("w", encoding="utf-8", newline="\n") as stream:
        stream.write(expected)
    print(f"OK: exportadas {expected.count('#### ')} preguntas a {output.relative_to(ROOT)}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
