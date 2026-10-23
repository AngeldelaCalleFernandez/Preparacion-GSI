#!/usr/bin/env python3
"""Create a deterministic, non-mutating editorial quality report for GSI questions."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import statistics
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
JSON_OUTPUT = ROOT / "logs/gsi-question-quality.json"
MARKDOWN_OUTPUT = ROOT / "docs/GSI_CALIDAD_PREGUNTAS.md"
ANALYSIS_VERSION = "1.0.0"
QUESTION_FILES = (
    ("official", ROOT / "data/questions-official.json", "Oficiales INAP"),
    ("manual", ROOT / "data/questions-manual.json", "Manuales/curadas"),
    ("ai", ROOT / "data/questions-ai.json", "Generadas por IA"),
)
ABSOLUTE_START = re.compile(
    r"^(solo|sólo|únicamente|exclusivamente|siempre|nunca|ningún|ninguna|ninguno|nada)\b",
    re.IGNORECASE,
)
META_SOURCE = re.compile(
    r"\bsegún (?:los apuntes|el solucionario|el texto|la fuente)\b",
    re.IGNORECASE,
)


def load_json(path: Path) -> dict:
    with path.open(encoding="utf-8") as stream:
        return json.load(stream)


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def normalize_text(value: object) -> str:
    text = unicodedata.normalize("NFKC", str(value or ""))
    return re.sub(r"\s+", " ", text).strip().casefold()


def starts_with_absolute(value: object) -> bool:
    return bool(ABSOLUTE_START.search(str(value or "").strip()))


def analyze_question(question: dict, bank: str) -> dict | None:
    options = question.get("options", [])
    options_by_id = {option.get("id"): option for option in options if isinstance(option, dict)}
    correct_id = question.get("correct_option")
    if correct_id not in options_by_id:
        return {
            "id": question.get("id", "<sin id>"),
            "bank": bank,
            "topic_id": question.get("topic_id"),
            "priority": "P1",
            "score": 10,
            "findings": [
                {
                    "rule": "invalid-correct-option",
                    "severity": "error",
                    "message": "La respuesta correcta no coincide con una alternativa existente.",
                }
            ],
        }

    option_texts = {option_id: str(option.get("text") or "").strip() for option_id, option in options_by_id.items()}
    normalized_options = [normalize_text(text) for text in option_texts.values()]
    correct_text = option_texts[correct_id]
    distractors = [text for option_id, text in option_texts.items() if option_id != correct_id]
    correct_length = len(correct_text)
    distractor_lengths = [len(text) for text in distractors]
    max_distractor_length = max(distractor_lengths, default=0)
    findings: list[dict] = []
    score = 0

    if len(normalized_options) != len(set(normalized_options)):
        findings.append(
            {
                "rule": "duplicate-option",
                "severity": "error",
                "message": "Dos o más alternativas tienen el mismo texto normalizado.",
            }
        )
        score += 10

    if correct_length >= 40 and max_distractor_length and correct_length >= 2 * max_distractor_length:
        ratio = round(correct_length / max_distractor_length, 2)
        findings.append(
            {
                "rule": "correct-length-dominance",
                "severity": "warning",
                "message": "La respuesta correcta es al menos el doble de larga que el distractor más extenso.",
                "evidence": {
                    "correct_length": correct_length,
                    "max_distractor_length": max_distractor_length,
                    "ratio": ratio,
                },
            }
        )
        score += 4

    absolute_distractors = sum(starts_with_absolute(text) for text in distractors)
    if absolute_distractors >= 2 and not starts_with_absolute(correct_text):
        findings.append(
            {
                "rule": "absolute-wording-cluster",
                "severity": "warning",
                "message": "Al menos dos distractores empiezan con términos absolutos; pueden resultar descartables sin dominar el contenido.",
                "evidence": {"absolute_distractors": absolute_distractors},
            }
        )
        score += 2

    if META_SOURCE.search(str(question.get("statement") or "")):
        findings.append(
            {
                "rule": "meta-source-wording",
                "severity": "info",
                "message": "El enunciado remite al material de estudio en vez de formular directamente el conocimiento evaluado.",
            }
        )
        score += 1

    if not findings:
        return None
    priority = "P1" if score >= 10 else "P2" if score >= 4 else "P3"
    return {
        "id": question.get("id"),
        "bank": bank,
        "topic_id": question.get("topic_id"),
        "priority": priority,
        "score": score,
        "correct_option": correct_id,
        "findings": findings,
    }


def build_report() -> dict:
    all_questions: list[dict] = []
    bank_labels: dict[str, str] = {}
    source_files: list[dict] = []
    bank_summaries: dict[str, dict] = {}
    for bank, path, label in QUESTION_FILES:
        collection = load_json(path)
        bank_labels[bank] = label
        source_files.append(
            {
                "path": path.relative_to(ROOT).as_posix(),
                "sha256": sha256(path),
                "data_version": collection.get("metadata", {}).get("data_version"),
                "updated_at": collection.get("metadata", {}).get("updated_at"),
            }
        )
        questions = collection.get("questions", [])
        for question in questions:
            all_questions.append({"bank": bank, "question": question})
        bank_summaries[bank] = {
            "label": label,
            "questions": len(questions),
            "active_validated": sum(
                question.get("is_active") is True and question.get("validation_status") == "validated"
                for question in questions
            ),
            "difficulty": dict(sorted(Counter(question.get("difficulty", "missing") for question in questions).items())),
            "correct_positions": dict(
                sorted(Counter(question.get("correct_option", "missing") for question in questions).items())
            ),
        }

    findings: list[dict] = []
    question_by_id: dict[str, dict] = {}
    statements: dict[str, list[str]] = defaultdict(list)
    topic_counts: Counter[str] = Counter()
    for item in all_questions:
        bank = item["bank"]
        question = item["question"]
        question_by_id[question["id"]] = question
        statements[normalize_text(question.get("statement"))].append(question["id"])
        topic_counts[question.get("topic_id", "<sin tema>")] += 1
        result = analyze_question(question, bank)
        if result:
            findings.append(result)

    priority_rank = {"P1": 0, "P2": 1, "P3": 2}
    findings.sort(key=lambda item: (priority_rank[item["priority"]], -item["score"], item["bank"], item["id"]))
    rule_counts_by_bank: dict[str, Counter[str]] = {bank: Counter() for bank, _, _ in QUESTION_FILES}
    priority_counts_by_bank: dict[str, Counter[str]] = {bank: Counter() for bank, _, _ in QUESTION_FILES}
    for item in findings:
        priority_counts_by_bank[item["bank"]][item["priority"]] += 1
        for finding in item["findings"]:
            rule_counts_by_bank[item["bank"]][finding["rule"]] += 1
    for bank in bank_summaries:
        bank_summaries[bank]["questions_with_findings"] = sum(item["bank"] == bank for item in findings)
        bank_summaries[bank]["priority_counts"] = dict(sorted(priority_counts_by_bank[bank].items()))
        bank_summaries[bank]["rule_counts"] = dict(sorted(rule_counts_by_bank[bank].items()))

    manual_queue = []
    for item in findings:
        if item["bank"] != "manual":
            continue
        length_finding = next(
            (finding for finding in item["findings"] if finding["rule"] == "correct-length-dominance"),
            None,
        )
        if length_finding:
            evidence = length_finding["evidence"]
            manual_queue.append(
                {
                    "id": item["id"],
                    "topic_id": item["topic_id"],
                    "priority": item["priority"],
                    "correct_option": item["correct_option"],
                    **evidence,
                }
            )
    manual_queue.sort(key=lambda item: (-item["ratio"], -item["correct_length"], item["id"]))

    duplicate_statement_groups = []
    for normalized_statement, ids in statements.items():
        if len(ids) < 2:
            continue
        duplicate_statement_groups.append(
            {
                "normalized_statement": normalized_statement,
                "question_ids": sorted(ids),
                "correct_answers": {
                    question_id: next(
                        option["text"]
                        for option in question_by_id[question_id]["options"]
                        if option["id"] == question_by_id[question_id]["correct_option"]
                    )
                    for question_id in sorted(ids)
                },
                "interpretation": "Candidato de revisión, no duplicado confirmado; puede proceder de exámenes oficiales distintos.",
            }
        )
    duplicate_statement_groups.sort(key=lambda item: item["question_ids"])

    reviews = load_json(ROOT / "data/gsi-editorial-reviews.json")
    confirmation = reviews.get("confirmation", {})
    ai_assurance = {
        "registered_status": reviews.get("status"),
        "reviewer_type": reviews.get("reviewer_type"),
        "reviewed_at": reviews.get("reviewed_at"),
        "confirmation_received_at": confirmation.get("received_at"),
        "confirmation_record_count": confirmation.get("record_count"),
        "registered_scope": confirmation.get("scope"),
        "independent_item_review": "not_recorded",
        "interpretation": "La confirmación del propietario y los hashes están registrados; este análisis no los presenta como revisión editorial independiente pregunta por pregunta.",
    }

    counts = list(topic_counts.values())
    return {
        "analysis_version": ANALYSIS_VERSION,
        "scope": "Heurística no mutante. Los hallazgos son candidatos de revisión, no errores confirmados ni decisiones editoriales.",
        "source_files": source_files,
        "summary": {
            "questions": len(all_questions),
            "questions_with_findings": len(findings),
            "by_bank": bank_summaries,
            "manual_primary_queue": len(manual_queue),
            "duplicate_statement_groups": len(duplicate_statement_groups),
            "difficulty_calibration": "not_available",
        },
        "topic_distribution": {
            "topics": len(topic_counts),
            "minimum": min(counts),
            "maximum": max(counts),
            "median": statistics.median(counts),
            "minimum_topics": sorted(topic_id for topic_id, count in topic_counts.items() if count == min(counts)),
            "maximum_topics": sorted(topic_id for topic_id, count in topic_counts.items() if count == max(counts)),
            "counts": dict(sorted(topic_counts.items())),
        },
        "ai_editorial_assurance": ai_assurance,
        "duplicate_statement_groups": duplicate_statement_groups,
        "manual_primary_queue": manual_queue,
        "findings": findings,
    }


def render_json(report: dict) -> str:
    return json.dumps(report, ensure_ascii=False, indent=2) + "\n"


def render_markdown(report: dict) -> str:
    summary = report["summary"]
    by_bank = summary["by_bank"]
    lines = [
        "# Calidad editorial del banco de preguntas GSI",
        "",
        "Este informe se genera de forma determinista desde los tres bancos JSON. Es una **criba heurística no mutante**: señala preguntas que merecen revisión, pero no declara errores, no cambia respuestas y no modifica estados editoriales.",
        "",
        f"Versión del análisis: `{report['analysis_version']}`. Preguntas examinadas: **{summary['questions']}**.",
        "",
        "## Resultado",
        "",
        "| Banco | Preguntas | Con algún indicio | Respuesta correcta ≥2× distractor más largo | Distractores absolutos | Redacción dependiente de la fuente |",
        "| --- | ---: | ---: | ---: | ---: | ---: |",
    ]
    for bank in ("official", "manual", "ai"):
        item = by_bank[bank]
        rules = item["rule_counts"]
        lines.append(
            f"| {item['label']} | {item['questions']} | {item['questions_with_findings']} | {rules.get('correct-length-dominance', 0)} | {rules.get('absolute-wording-cluster', 0)} | {rules.get('meta-source-wording', 0)} |"
        )
    lines.extend(
        [
            "",
            f"La primera cola editorial contiene **{summary['manual_primary_queue']} preguntas manuales/curadas** en las que la respuesta correcta tiene al menos 40 caracteres y duplica la longitud del distractor más extenso. Es una señal de posible pista formal, no una prueba de incorrección.",
            "",
            "El detalle completo y ordenado está en [`logs/gsi-question-quality.json`](../logs/gsi-question-quality.json).",
            "",
            "## Prioridad inicial",
            "",
            "Las primeras candidatas de la cola manual, ordenadas por la relación de longitudes, son:",
            "",
            "| ID | Tema | Longitud correcta | Máximo distractor | Relación |",
            "| --- | --- | ---: | ---: | ---: |",
        ]
    )
    for item in report["manual_primary_queue"][:20]:
        lines.append(
            f"| `{item['id']}` | {item['topic_id']} | {item['correct_length']} | {item['max_distractor_length']} | {item['ratio']:.2f}× |"
        )

    distribution = report["topic_distribution"]
    lines.extend(
        [
            "",
            "## Rúbrica de revisión",
            "",
            "| Nivel | Qué acredita | Estado actual |",
            "| --- | --- | --- |",
            "| L1 · Estructura | ID único, cuatro opciones, una clave y campos obligatorios. | Automatizado por esquemas y validadores. |",
            "| L2 · Trazabilidad | Fuente, localizador, explicación, versión y hashes coherentes. | Automatizado; las oficiales y las generadas tienen controles adicionales. |",
            "| L3 · Calidad editorial | Enunciado inequívoco, distractores plausibles y paralelos, ausencia de pistas formales y explicación suficiente. | Requiere revisión humana; este informe solo prioriza candidatos. |",
            "| L4 · Calibración | Dificultad y poder discriminativo respaldados por resultados reales. | No disponible: los tres bancos declaran actualmente dificultad `medium`. |",
            "",
            "Una pregunta no debe presentarse como L3 o L4 únicamente porque supere comprobaciones automáticas.",
            "",
            "## Garantía editorial del lote IA",
            "",
            "El registro conserva la confirmación del propietario, las decisiones aceptadas y los hashes exactos de 803 preguntas. No consta en los datos un método de revisión independiente pregunta por pregunta; por eso el informe deriva `independent_item_review: not_recorded` sin alterar `validation_status` ni `is_active`.",
            "",
            "## Equilibrio del banco",
            "",
            f"Los temas contienen entre **{distribution['minimum']}** y **{distribution['maximum']}** preguntas, con mediana **{distribution['median']}**. El máximo corresponde a {', '.join(distribution['maximum_topics'])}; los mínimos, a {', '.join(distribution['minimum_topics'])}. Este desequilibrio se debe considerar al definir una selección general de entrenamiento.",
            "",
            "## Procedimiento de revisión",
            "",
            "1. Abrir `review.html` mediante servidor HTTP y localizar el ID de la cola.",
            "2. Contrastar enunciado, cuatro alternativas, explicación, fuente, localizador y vigencia.",
            "3. Corregir solo con evidencia y registrar la decisión y el motivo; una sugerencia automática no es aprobación.",
            "4. Regenerar los derivados y ejecutar `python scripts/analyze_question_quality.py --write`.",
            "5. Ejecutar `python scripts/run_gsi_suite.py`; solo un código 0 permite cerrar el cambio.",
            "",
            "## Reglas automáticas",
            "",
            "- `correct-length-dominance`: correcta de 40 o más caracteres y al menos dos veces más larga que el distractor más extenso.",
            "- `absolute-wording-cluster`: dos o más distractores empiezan por términos absolutos como «solo», «siempre» o «nunca», mientras la correcta no.",
            "- `meta-source-wording`: el enunciado depende de expresiones como «según los apuntes».",
            "- `duplicate-option`: alternativas textualmente duplicadas tras normalización; tendría prioridad P1.",
            "- Los enunciados idénticos se agrupan como candidatos, no como duplicados confirmados, porque pueden proceder de convocatorias oficiales diferentes.",
            "",
            "Para comprobar que el informe coincide con los bancos actuales: `python scripts/analyze_question_quality.py --check`.",
        ]
    )
    return "\n".join(lines).rstrip() + "\n"


def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8", newline="\n") as stream:
        stream.write(text)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--write", action="store_true", help="Regenera los informes JSON y Markdown.")
    mode.add_argument("--check", action="store_true", help="Comprueba los informes sin escribirlos (modo predeterminado).")
    args = parser.parse_args()

    report = build_report()
    expected = {JSON_OUTPUT: render_json(report), MARKDOWN_OUTPUT: render_markdown(report)}
    if args.write:
        for path, content in expected.items():
            write_text(path, content)
        print(
            "OK: informe editorial regenerado; "
            f"{report['summary']['manual_primary_queue']} preguntas manuales en la cola principal."
        )
        return 0

    errors = []
    for path, content in expected.items():
        if not path.is_file():
            errors.append(f"falta {path.relative_to(ROOT).as_posix()}")
        elif path.read_text(encoding="utf-8") != content:
            errors.append(f"{path.relative_to(ROOT).as_posix()} no coincide con los bancos actuales")
    if errors:
        print("ERROR: " + "; ".join(errors) + ". Regenera con --write.")
        return 1
    print(
        "OK: informe editorial sincronizado; "
        f"{report['summary']['manual_primary_queue']} preguntas manuales en la cola principal."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
