#!/usr/bin/env python3
"""Audit objective and heuristic quality signals in the complete GSI question bank.

Objective defects return exit code 1. Heuristic findings are written for human
review and never change a question's editorial status automatically.
"""

from __future__ import annotations

from collections import Counter, defaultdict
from build_gsi_authored_questions import load_length_reviews
from datetime import datetime, timezone
from difflib import SequenceMatcher
import json
from pathlib import Path
import re
import statistics
import unicodedata


ROOT = Path(__file__).resolve().parents[1]
QUESTION_FILES = (
    "data/questions-official.json",
    "data/questions-manual.json",
    "data/questions-ai.json",
)
REPORT_PATH = ROOT / "logs/gsi-question-quality-audit.json"
WORD_RE = re.compile(r"[a-z0-9]+", re.IGNORECASE)
REVIEWED_NEAR_DUPLICATES = {
    frozenset(("MAN-GSI-P14-093", "MAN-GSI-P14-094")): "Contraste paralelo LPAC/LRJSP.",
    frozenset(("MAN-GSI-P17-132", "MAN-GSI-P17-133")): "Contraste paralelo /proc y /sys.",
    frozenset(("AI-GSI-B2-T06-008", "AI-GSI-B2-T06-013")): "Distingue SOA y REST.",
    frozenset(("AI-GSI-B2-T06-008", "AI-GSI-B2-T06-016")): "Distingue SOA y PATCH.",
    frozenset(("AI-GSI-B2-T06-013", "AI-GSI-B2-T06-016")): "Distingue REST y PATCH.",
    frozenset(("MAN-GSI-P19-006", "MAN-GSI-P19-007")): "Contraste paralelo I-CSCF/S-CSCF.",
}
SHORT_FEEDBACK_EXCEPTIONS = {
    "AI-GSI-B3-T13-009": "La sustitución numérica muestra la fórmula y el resultado sin omitir ningún paso.",
    "AI-GSI-B4-T06-005": "El cociente del PUE muestra directamente los datos y el resultado.",
}


def reviewed_manual_length_ids() -> set[str]:
    paths = [ROOT / "content/question-drafts/manual-question-quality-review.json"]
    paths.extend(sorted((ROOT / "content/question-drafts").glob("manual-question-revisions-p*.json")))
    reviewed: set[str] = set()
    for path in paths:
        with path.open(encoding="utf-8") as stream:
            revisions = json.load(stream)["revisions"]
        reviewed.update(
            question_id
            for question_id, revision in revisions.items()
            if "statement" in revision or "options" in revision
        )
    return reviewed


def normalize(value: str) -> str:
    folded = unicodedata.normalize("NFKD", value.casefold())
    plain = "".join(char for char in folded if not unicodedata.combining(char))
    return " ".join(WORD_RE.findall(plain))


def load_questions() -> list[dict]:
    questions: list[dict] = []
    for relative_path in QUESTION_FILES:
        with (ROOT / relative_path).open(encoding="utf-8") as stream:
            collection = json.load(stream)
        questions.extend(collection["questions"])
    return questions


def percentile(values: list[int], fraction: float) -> float:
    if not values:
        return 0.0
    ordered = sorted(values)
    position = (len(ordered) - 1) * fraction
    lower = int(position)
    upper = min(lower + 1, len(ordered) - 1)
    weight = position - lower
    return round(ordered[lower] * (1 - weight) + ordered[upper] * weight, 2)


def metric_summary(questions: list[dict]) -> dict:
    statement_lengths = [len(question["statement"].strip()) for question in questions]
    feedback_lengths = [len(question.get("feedback", {}).get("correct", "").strip()) for question in questions]
    correct_positions = Counter(question["correct_option"] for question in questions)
    correct_is_longest = 0
    correct_is_unique_longest = 0
    for question in questions:
        lengths = {option["id"]: len(option["text"].strip()) for option in question["options"]}
        maximum = max(lengths.values())
        if lengths[question["correct_option"]] == maximum:
            correct_is_longest += 1
            if list(lengths.values()).count(maximum) == 1:
                correct_is_unique_longest += 1
    return {
        "count": len(questions),
        "statement_length": {
            "median": round(statistics.median(statement_lengths), 2),
            "p10": percentile(statement_lengths, 0.10),
            "p90": percentile(statement_lengths, 0.90),
        },
        "feedback_length": {
            "median": round(statistics.median(feedback_lengths), 2),
            "p10": percentile(feedback_lengths, 0.10),
            "p90": percentile(feedback_lengths, 0.90),
        },
        "correct_position": dict(sorted(correct_positions.items())),
        "correct_is_longest_percent": round(100 * correct_is_longest / len(questions), 2),
        "correct_is_unique_longest_percent": round(100 * correct_is_unique_longest / len(questions), 2),
    }


def main() -> int:
    questions = load_questions()
    revised_manual_ids = reviewed_manual_length_ids()
    reviewed_ai_decisions = {qid: review['decision'] for qid, (review, _, _) in load_length_reviews().items()}
    objective_errors: list[dict] = []
    short_feedback: list[dict] = []
    repeated_feedback: list[str] = []
    repeated_feedback_by_origin: Counter[str] = Counter()
    severe_length_clues: list[dict] = []
    reviewed_ai_unique_shortest: list[str] = []
    reviewed_ai_unique_longest: list[str] = []
    reviewed_ai_reverse_clues: list[dict] = []
    topic_positions: list[dict] = []
    prefix_counts: Counter[tuple[str, ...]] = Counter()
    by_topic: dict[str, list[dict]] = defaultdict(list)
    by_origin: dict[str, list[dict]] = defaultdict(list)
    signature_groups: dict[tuple, list[str]] = defaultdict(list)

    for question in questions:
        question_id = question["id"]
        statement = normalize(question["statement"])
        normalized_options = [normalize(option["text"]) for option in question["options"]]
        if not statement:
            objective_errors.append({"id": question_id, "reason": "empty_normalized_statement"})
        if any(not option for option in normalized_options):
            objective_errors.append({"id": question_id, "reason": "empty_normalized_option"})
        if len(set(normalized_options)) != 4:
            objective_errors.append({"id": question_id, "reason": "duplicate_normalized_options"})
        feedback = question.get("feedback", {})
        correct_feedback = feedback.get("correct", "").strip()
        incorrect_feedback = feedback.get("incorrect", "").strip()
        if question.get("is_active") and not incorrect_feedback:
            objective_errors.append({"id": question_id, "reason": "missing_incorrect_feedback"})
        if len(correct_feedback) < 40:
            short_feedback.append({
                "id": question_id,
                "characters": len(correct_feedback),
                "review_status": "reviewed_keep" if question_id in SHORT_FEEDBACK_EXCEPTIONS else "pending_review",
                **({"reason": SHORT_FEEDBACK_EXCEPTIONS[question_id]} if question_id in SHORT_FEEDBACK_EXCEPTIONS else {}),
            })
        if correct_feedback and normalize(correct_feedback) == normalize(incorrect_feedback):
            repeated_feedback.append(question_id)
            repeated_feedback_by_origin[question["origin"]] += 1
        lengths = {option["id"]: len(option["text"].strip()) for option in question["options"]}
        correct_length = lengths[question["correct_option"]]
        longest_distractor = max(length for option_id, length in lengths.items() if option_id != question["correct_option"])
        if question["origin"] == "ai" and question_id in reviewed_ai_decisions:
            shortest_distractor = min(length for option_id, length in lengths.items() if option_id != question["correct_option"])
            if correct_length < shortest_distractor:
                reviewed_ai_unique_shortest.append(question_id)
                if shortest_distractor / max(correct_length, 1) >= 1.5:
                    reviewed_ai_reverse_clues.append({
                        "id": question_id,
                        "correct_characters": correct_length,
                        "shortest_distractor_characters": shortest_distractor,
                        "ratio": round(shortest_distractor / max(correct_length, 1), 2),
                    })
            if correct_length > longest_distractor:
                reviewed_ai_unique_longest.append(question_id)
        if correct_length > longest_distractor and correct_length / max(longest_distractor, 1) >= 1.5:
            if question["origin"] == "official":
                review_status = "official_immutable_exception"
            elif question["origin"] == "manual" and question_id in revised_manual_ids:
                review_status = "editorially_revised_still_flagged"
            elif question["origin"] == "ai" and question_id in reviewed_ai_decisions:
                review_status = "editorially_revised_still_flagged" if reviewed_ai_decisions[question_id] == "rewrite" else "editorially_reviewed_keep"
            else:
                review_status = "pending_review"
            severe_length_clues.append(
                {
                    "id": question_id,
                    "origin": question["origin"],
                    "block_id": question["block_id"],
                    "topic_id": question["topic_id"],
                    "correct_characters": correct_length,
                    "longest_distractor_characters": longest_distractor,
                    "ratio": round(correct_length / max(longest_distractor, 1), 2),
                    "review_status": review_status,
                }
            )
        words = tuple(statement.split()[:5])
        if words:
            prefix_counts[words] += 1
        by_topic[question["topic_id"]].append(question)
        by_origin[question["origin"]].append(question)
        signature_groups[(statement, tuple(sorted(normalized_options)))].append(question_id)

    exact_duplicates = [ids for ids in signature_groups.values() if len(ids) > 1]
    if exact_duplicates:
        for ids in exact_duplicates:
            objective_errors.append({"ids": ids, "reason": "exact_normalized_duplicate"})

    near_duplicates: list[dict] = []
    reviewed_near_duplicates: list[dict] = []
    for topic_id, topic_questions in sorted(by_topic.items()):
        non_official = [question for question in topic_questions if question["origin"] != "official"]
        normalized = [(question["id"], normalize(question["statement"])) for question in non_official]
        for index, (left_id, left) in enumerate(normalized):
            for right_id, right in normalized[index + 1 :]:
                shorter = min(len(left), len(right))
                longer = max(len(left), len(right))
                if shorter < 35 or shorter / longer < 0.72:
                    continue
                ratio = SequenceMatcher(None, left, right).ratio()
                if ratio >= 0.90:
                    item = {"topic_id": topic_id, "left": left_id, "right": right_id, "similarity": round(ratio, 3)}
                    rationale = REVIEWED_NEAR_DUPLICATES.get(frozenset((left_id, right_id)))
                    if rationale:
                        reviewed_near_duplicates.append({**item, "decision": "keep", "rationale": rationale})
                    else:
                        near_duplicates.append(item)

        positions = Counter(question["correct_option"] for question in topic_questions)
        if len(topic_questions) >= 20 and max(positions.values()) - min(positions.values()) >= 8:
            topic_positions.append(
                {"topic_id": topic_id, "count": len(topic_questions), "correct_position": dict(sorted(positions.items()))}
            )

    repeated_prefixes = [
        {"prefix": " ".join(prefix), "count": count}
        for prefix, count in prefix_counts.most_common()
        if count >= 12
    ]
    report = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "scope": {
            "question_files": list(QUESTION_FILES),
            "questions": len(questions),
            "method": "Deterministic structural checks plus heuristic candidates for human review; no editorial state is changed.",
        },
        "objective_errors": objective_errors,
        "heuristics": {
            "near_duplicate_candidates": near_duplicates,
            "reviewed_near_duplicates": reviewed_near_duplicates,
            "short_feedback_candidates": short_feedback,
            "same_correct_and_incorrect_feedback": {
                "count": len(repeated_feedback),
                "by_origin": dict(sorted(repeated_feedback_by_origin.items())),
                "note": "Identical messages are not treated as a defect when the same explanation is intentionally shown after either outcome.",
            },
            "severe_correct_length_clues": {
                "count": len(severe_length_clues),
                "by_origin": dict(sorted(Counter(item["origin"] for item in severe_length_clues).items())),
                "by_review_status": dict(sorted(Counter(item["review_status"] for item in severe_length_clues).items())),
                "pending_by_origin": dict(sorted(Counter(item["origin"] for item in severe_length_clues if item["review_status"] == "pending_review").items())),
                "candidates": sorted(severe_length_clues, key=lambda item: item["id"]),
                "official_exceptions": sorted(item["id"] for item in severe_length_clues if item["origin"] == "official"),
                "top_candidates": sorted(severe_length_clues, key=lambda item: (-item["ratio"], item["id"]))[:50],
                "note": "Heuristic only: the correct option is at least 1.5 times as long as every distractor. Editorial review does not suppress a raw candidate; official items remain unchanged.",
            },
            "reviewed_ai_length_balance": {
                "count": len(reviewed_ai_decisions),
                "correct_unique_shortest": len(reviewed_ai_unique_shortest),
                "correct_unique_longest": len(reviewed_ai_unique_longest),
                "severe_reverse_candidates": reviewed_ai_reverse_clues,
                "note": "Additional check restricted to the 129 AI items reviewed in this pass; the original longest-answer detector remains unchanged.",
            },
            "repeated_statement_prefixes": repeated_prefixes,
            "topic_position_imbalances": topic_positions,
        },
        "metrics": {
            "all": metric_summary(questions),
            "by_origin": {origin: metric_summary(items) for origin, items in sorted(by_origin.items())},
        },
    }
    REPORT_PATH.parent.mkdir(exist_ok=True)
    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(
        "Auditoría de calidad de preguntas: "
        f"{len(questions)} preguntas; {len(objective_errors)} errores objetivos; "
        f"{len(near_duplicates)} pares similares sin revisar; {len(short_feedback)} explicaciones breves; "
        f"{len(topic_positions)} distribuciones temáticas a revisar."
    )
    print(f"Informe: {REPORT_PATH.relative_to(ROOT).as_posix()}")
    return 1 if objective_errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
