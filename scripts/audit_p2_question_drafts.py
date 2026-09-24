#!/usr/bin/env python3
"""Validate the reviewed P2 drafts against the active bank and its quality audit."""

from __future__ import annotations

from collections import Counter
import hashlib
import json
from pathlib import Path
import sys

import audit_question_quality as quality


ROOT = Path(__file__).resolve().parents[1]
DRAFT_PATH = ROOT / "content/question-drafts/p2-questions-2026-09-24.json"
REPORT_PATH = ROOT / "logs/gsi-p2-draft-quality-audit.json"
LETTERS = "ABCD"


def load_and_validate_drafts(bank: list[dict]) -> list[dict]:
    draft_file = json.loads(DRAFT_PATH.read_text(encoding="utf-8"))
    assert draft_file["version"] == 1
    assert draft_file["authored_at"] == "2026-09-24"
    bank_by_id = {question["id"]: question for question in bank}
    seen: set[str] = set()
    converted: list[dict] = []
    for draft in draft_file["questions"]:
        qid = draft["id"]
        topic_id = draft["topic_id"]
        assert qid not in seen and qid in bank_by_id, f"ID P2 duplicado o sin activar: {qid}"
        seen.add(qid)
        assert topic_id in {
            "B2-T01", "B2-T13", "B2-T16", "B3-T01", "B3-T02",
            "B3-T09", "B3-T13", "B3-T14", "B4-T05", "B4-T07", "B4-T10",
        }, f"Tema fuera de alcance: {qid}"
        assert draft["origin"] == "ai" and draft["official_status"] == "not_official", qid
        assert draft["validation_status"] == "validated" and draft["is_active"] is True, qid
        assert draft["subtopic"].strip() and draft["statement"].strip(), qid
        assert len(draft["options"]) == 4 and all(option.strip() for option in draft["options"]), qid
        assert draft["correct_option"] in LETTERS, qid
        assert draft["feedback"]["correct"].strip() and draft["feedback"]["incorrect"].strip(), qid

        block = topic_id[:2].lower()
        source = json.loads((ROOT / f"content/enhancements/{block}-visuals.json").read_text(encoding="utf-8"))
        supplements = source["topics"][topic_id]["supplements"]
        titles = [part.strip() for part in draft["source_supplement_title"].split(";")]
        paragraph_index = draft["evidence_paragraph"]
        matched = [
            supplement["paragraphs"][paragraph_index]
            for supplement in supplements
            if supplement["title"] in titles and paragraph_index < len(supplement["paragraphs"])
        ]
        assert len(matched) == len(titles), f"Referencia doctrinal ausente: {qid}"
        topic_text = (ROOT / f"content/topics/{topic_id}.md").read_text(encoding="utf-8")
        assert all(paragraph in topic_text for paragraph in matched), f"Parche no presente en tema: {qid}"
        converted_question = {
            **draft,
            "block_id": topic_id[:2],
            "options": [
                {"id": letter, "text": option}
                for letter, option in zip(LETTERS, draft["options"])
            ],
        }
        active = bank_by_id[qid]
        for field in ("origin", "official_status", "validation_status", "is_active",
                      "topic_id", "block_id", "statement", "options", "correct_option", "feedback"):
            assert active[field] == converted_question[field], f"Borrador y banco difieren en {field}: {qid}"
        evidence = "\n\n".join(matched)
        record_hash = hashlib.sha256(json.dumps(draft, ensure_ascii=False, sort_keys=True).encode("utf-8")).hexdigest()
        evidence_hash = hashlib.sha256(evidence.encode("utf-8")).hexdigest()
        assert active["source"]["record_sha256"] == record_hash, qid
        assert active["source"]["evidence_sha256"] == evidence_hash, qid
        assert active["source"]["review_manifest"] == "data/gsi-p2-editorial-reviews.json", qid
        converted.append(converted_question)
    assert len(converted) == 16, f"Recuento inesperado de borradores: {len(converted)}"
    return converted


def main() -> int:
    bank = quality.load_questions()
    drafts = load_and_validate_drafts(bank)
    quality.REPORT_PATH = REPORT_PATH
    result = quality.main()

    report = json.loads(REPORT_PATH.read_text(encoding="utf-8"))
    draft_ids = {question["id"] for question in drafts}
    draft_near_duplicates = [
        pair for pair in report["heuristics"]["near_duplicate_candidates"]
        if pair["left"] in draft_ids or pair["right"] in draft_ids
    ]
    draft_length = [
        item for item in report["heuristics"]["severe_correct_length_clues"]["candidates"]
        if item["id"] in draft_ids
    ]
    draft_inverse = []
    for draft in drafts:
        lengths = {item["id"]: len(item["text"].strip()) for item in draft["options"]}
        correct = lengths[draft["correct_option"]]
        shortest_wrong = min(value for key, value in lengths.items() if key != draft["correct_option"])
        if correct < shortest_wrong and shortest_wrong / correct >= 1.5:
            draft_inverse.append(draft["id"])
    draft_positions = Counter(question["correct_option"] for question in drafts)
    print(
        f"P2 activas y cotejadas: {len(drafts)}; errores objetivos globales: {len(report['objective_errors'])}; "
        f"similitudes P2: {len(draft_near_duplicates)}; pistas fuertes directas/inversas P2: "
        f"{len(draft_length)}/{len(draft_inverse)}; claves: {dict(sorted(draft_positions.items()))}."
    )
    if result or draft_near_duplicates or draft_length or draft_inverse:
        for issue in [*draft_near_duplicates, *draft_length, *draft_inverse]:
            print(f"Revisar: {issue}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
