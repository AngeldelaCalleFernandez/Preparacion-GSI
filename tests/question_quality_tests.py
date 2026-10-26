#!/usr/bin/env python3
"""Focused tests for the non-mutating question quality analyzer."""

from __future__ import annotations

import copy
import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from analyze_question_quality import analyze_question, build_report, normalize_text, quality_metrics  # noqa: E402


def fixture() -> dict:
    return {
        "id": "MAN-GSI-TEST-001",
        "topic_id": "B1-T01",
        "statement": "¿Qué opción describe correctamente el concepto?",
        "correct_option": "A",
        "options": [
            {"id": "A", "text": "Respuesta correcta plausible y paralela."},
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

    def test_report_separates_structure_and_editorial_assurance(self):
        report = build_report()
        self.assertEqual(report["summary"]["questions"], sum(b['questions'] for b in report['summary']['by_bank'].values()))
        self.assertEqual(report['topic_distribution']['topics'], 57)
        self.assertEqual(report['summary']['difficulty_calibration'], 'not_available')
        self.assertEqual(report["ai_editorial_assurance"]["independent_item_review"], "not_recorded")

    def test_gradual_boundaries_and_legacy_minimum(self):
        for ratio, rule in [(1.49, None), (1.5, 'length-ratio-moderate'), (1.99, 'length-ratio-moderate'), (2, 'length-ratio-high')]:
            q = fixture()
            for o in q['options']: o['text'] = o['id'] * (int(ratio * 100) if o['id'] == 'A' else 100)
            rules = {f['rule'] for f in (analyze_question(q, 'manual') or {}).get('findings', [])}
            self.assertEqual(any(r.startswith('length-ratio-') for r in rules), rule is not None)
            if rule: self.assertIn(rule, rules)
        q['options'][0]['text'] = 'a' * 20
        for o in q['options'][1:]: o['text'] = o['id'] * 10
        rules = {f['rule'] for f in analyze_question(q, 'manual')['findings']}
        self.assertIn('length-ratio-high', rules)
        self.assertNotIn('correct-length-dominance', rules)

    def test_metrics_tie_and_feedback_are_not_acceptance(self):
        q = fixture()
        for o in q['options']: o['text'] = o['id'] * 10
        q['feedback'] = {'correct': 'Explicación breve.', 'incorrect': 'Explicación breve.'}
        metrics = quality_metrics([q])
        self.assertEqual(metrics['correct_unique_longest'], 0)
        self.assertEqual(metrics['first_longest_correct'], 1)
        self.assertEqual(metrics['longest_ties'], 1)
        self.assertEqual(metrics['short_correct_feedback'], 1)
        self.assertEqual(metrics['identical_feedback'], 1)


if __name__ == "__main__":
    result = unittest.main(verbosity=0, exit=False).result
    passed = result.testsRun - len(result.failures) - len(result.errors)
    print(f"Question quality: {passed} passed, {len(result.failures) + len(result.errors)} failed.")
    raise SystemExit(0 if result.wasSuccessful() else 1)
