#!/usr/bin/env python3
"""Second-pass coverage check for the four reviewed GSI study documents."""
from __future__ import annotations

import json
import re
from html.parser import HTMLParser
from pathlib import Path

from build_gsi_content import (
    COUNTS,
    HTML_OUTPUT_REPLACEMENTS,
    ROOT,
    load_enhancements,
    markdown_topics,
    native_topics,
    replace_paragraph_text,
    text_of,
)

SNAPSHOT_DIR = ROOT / 'content/source-snapshots/reviewed-2026-09-23'
MARKDOWN_DIR = ROOT / 'documents/markdown/gsi/revised-2026-09-23'
AUDIT = re.compile(r'ANEXO [A-Z]\s*[—–-].*(?:Registro de ajustes|Control de cambios|Auditoría|Evidencias)', re.I)


class VisibleText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts = []
        self.images = []

    def handle_starttag(self, tag, attrs):
        if tag in {'p', 'h2', 'h3', 'h4', 'h5', 'li', 'td', 'th'}:
            self.parts.append(' ')
        if tag == 'img':
            self.images.append(dict(attrs).get('src', ''))

    def handle_data(self, data):
        self.parts.append(data)

    def handle_endtag(self, tag):
        if tag in {'p', 'h2', 'h3', 'h4', 'h5', 'li', 'td', 'th'}:
            self.parts.append(' ')


def normalized(text):
    return ' '.join(text.split()).casefold()


def paragraphs(element):
    if element.get('paragraph'):
        value = text_of(element)
        if value:
            yield value
    elif element.get('table'):
        for row in element['table'].get('tableRows', []):
            for cell in row.get('tableCells', []):
                for child in cell.get('content', []):
                    yield from paragraphs(child)


def main():
    enhancements = load_enhancements()
    results = []
    failures = []
    romans = ('I', 'II', 'III', 'IV')
    for block, count in enumerate(COUNTS, 1):
        source = json.loads((SNAPSHOT_DIR / f'B{block}-full.json').read_text('utf-8'))
        native = native_topics(source, block, stop_audit=True)
        converted = markdown_topics(
            MARKDOWN_DIR / f'B{block}/reviewed-block-{romans[block-1]}.md',
            block, stop_audit=True
        )
        for number in range(1, count + 1):
            topic = f'B{block}-T{number:02}'
            markdown = (ROOT / f'content/topics/{topic}.md').read_text('utf-8')
            html = (ROOT / f'content/generated/{topic}.html').read_text('utf-8')
            rendered = VisibleText()
            rendered.feed(html)
            visible = normalized(''.join(rendered.parts))
            enhancement = enhancements.get(topic, {})
            expected_elements = replace_paragraph_text(native[number], enhancement.get('replacements', []), topic)
            missing = []
            checked = 0
            for element in expected_elements:
                for paragraph in paragraphs(element):
                    value = normalized(paragraph)
                    if len(value) < 25:
                        continue
                    checked += 1
                    if value in visible:
                        continue
                    historical_html_edit = False
                    for previous, revised in HTML_OUTPUT_REPLACEMENTS.get(topic, []):
                        before = VisibleText()
                        after = VisibleText()
                        before.feed(previous)
                        after.feed(revised)
                        if value == normalized(''.join(before.parts)) and normalized(''.join(after.parts)) in visible:
                            historical_html_edit = True
                            break
                    if not historical_html_edit:
                        missing.append(paragraph[:110])
            expected_visuals = {visual['src'] for visual in enhancement.get('visuals', [])}
            actual_visuals = set(rendered.images)
            if not converted[number] or AUDIT.search(markdown) or AUDIT.search(html):
                missing.append('Fuente vacía o anexo de auditoría visible')
            if not expected_visuals.issubset(actual_visuals):
                missing.append('Visual ausente')
            if missing:
                failures.append({'topic': topic, 'missing': missing})
            results.append({'topic': topic, 'source_paragraphs_checked': checked,
                            'visuals': len(expected_visuals), 'passed': not missing})
    by_block = {f'B{block}': f'{sum(item["passed"] for item in results if item["topic"].startswith(f"B{block}-"))}/{count}'
                for block, count in enumerate(COUNTS, 1)}
    print('Cobertura de apuntes revisados:', ', '.join(f'{name} {value}' for name, value in by_block.items()))
    print(f'Total: {sum(item["passed"] for item in results)}/57; fallos: {len(failures)}')
    for failure in failures:
        print(f'{failure["topic"]}: {failure["missing"]}')
    return bool(failures)


if __name__ == '__main__':
    raise SystemExit(main())
