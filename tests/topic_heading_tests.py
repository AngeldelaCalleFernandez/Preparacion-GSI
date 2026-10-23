#!/usr/bin/env python3
"""Focused tests for topic heading normalization."""

from __future__ import annotations

import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from topic_heading_policy import is_probable_body_text, normalize_markdown_headings  # noqa: E402


class TopicHeadingTests(unittest.TestCase):
    def test_short_heading_is_preserved(self):
        source = "## 3. Arquitectura de referencia"
        self.assertEqual(normalize_markdown_headings(source)[0], source)

    def test_internal_h1_is_demoted(self):
        output, stats = normalize_markdown_headings("# ANEXO A — Memorización rápida")
        self.assertEqual(output, "## ANEXO A — Memorización rápida")
        self.assertEqual(stats["h1_to_h2"], 1)

    def test_sentence_heading_becomes_paragraph_without_text_changes(self):
        sentence = "Esta frase contiene suficiente contenido explicativo para ser un párrafo y no un encabezado dentro del tema."
        output, stats = normalize_markdown_headings(f"## {sentence}")
        self.assertEqual(output, sentence)
        self.assertEqual(stats["heading_to_paragraph"], 1)

    def test_code_fence_is_not_rewritten(self):
        source = "```markdown\n# Encabezado de ejemplo dentro de código\n```"
        self.assertEqual(normalize_markdown_headings(source)[0], source)

    def test_policy_distinguishes_label_from_prose(self):
        self.assertFalse(is_probable_body_text("ANEXO B — Estrategia de estudio"))
        self.assertTrue(is_probable_body_text("Una dependencia puede aparecer cuando una clase usa a otra de forma no estructural, por ejemplo como tipo de parámetro."))


if __name__ == "__main__":
    result = unittest.main(verbosity=0, exit=False).result
    passed = result.testsRun - len(result.failures) - len(result.errors)
    print(f"Topic headings: {passed} passed, {len(result.failures) + len(result.errors)} failed.")
    raise SystemExit(0 if result.wasSuccessful() else 1)
