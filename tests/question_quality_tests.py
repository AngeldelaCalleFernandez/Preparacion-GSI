#!/usr/bin/env python3
"""Focused tests for the non-mutating question quality analyzer."""

from __future__ import annotations

import copy
import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from analyze_question_quality import analyze_question, build_report, normalize_text  # noqa: E402


def fixture() -> dict:
    return {
        "id": "MAN-GSI-TEST-001",
        "topic_id": "B1-T01",
        "statement": "¿Qué opción describe correctamente el concepto?",
        "correct_option": "A",
        "options": [
            {"id": "A", "text": "La respuesta correcta mantiene una extensión proporcionada."},
            {"id": "B", "text": "Primera alternativa plausible y paralela."},
            {"id": "C", "text": "Segunda alternativa plausible y paralela."},
            {"id": "D", "text": "Tercera alternativa plausible y paralela."},
        ],
    }


class QuestionQualityTests(unittest.TestCase):
    def test_normalization_is_case_and_whitespace_insensitive(self):
        self.assertEqual(normalize_text("  ÁRBOL\n azul "), normalize_text("árbol azul"))

    def test_balanced_question_has_no_finding(self):
        self.assertIsNone(analyze_question(fixture(), "manual"))

    def test_length_dominance_is_detected(self):
        question = fixture()
        question["options"][0]["text"] = "Una respuesta correcta deliberadamente extensa que contiene bastante más información que todas las demás opciones."
        for option, text in zip(question["options"][1:], ("No procede", "No corresponde", "No se aplica")):
            option["text"] = text
        result = analyze_question(question, "manual")
        self.assertEqual(result["priority"], "P2")
        self.assertIn("correct-length-dominance", {item["rule"] for item in result["findings"]})

    def test_absolute_distractors_are_detected_without_mutation(self):
        question = fixture()
        question["options"][1]["text"] = "Siempre se aplica"
        question["options"][2]["text"] = "Nunca se aplica"
        original = copy.deepcopy(question)
        result = analyze_question(question, "manual")
        self.assertIn("absolute-wording-cluster", {item["rule"] for item in result["findings"]})
        self.assertEqual(question, original)

    def test_duplicate_options_have_priority_one(self):
        question = fixture()
        question["options"][2]["text"] = question["options"][1]["text"].upper()
        result = analyze_question(question, "manual")
        self.assertEqual(result["priority"], "P1")
        self.assertIn("duplicate-option", {item["rule"] for item in result["findings"]})

    def test_current_report_preserves_expected_primary_queue(self):
        report = build_report()
        self.assertEqual(report["summary"]["questions"], 1964)
        self.assertEqual(report["summary"]["manual_primary_queue"], 496)
        self.assertEqual(report["ai_editorial_assurance"]["independent_item_review"], "not_recorded")


if __name__ == "__main__":
    result = unittest.main(verbosity=0, exit=False).result
    passed = result.testsRun - len(result.failures) - len(result.errors)
    print(f"Question quality: {passed} passed, {len(result.failures) + len(result.errors)} failed.")
    raise SystemExit(0 if result.wasSuccessful() else 1)
