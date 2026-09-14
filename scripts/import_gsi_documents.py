#!/usr/bin/env python3
"""Convert immutable native Drive snapshots to HTML and Markdown, without OCR.

Google Docs originals remain in Drive. JSON snapshots preserve text, tables,
headings and list structure. HTML is an intermediate export, not new doctrine.
Every conversion attempt is recorded. Existing different outputs are rejected.
"""
from __future__ import annotations

import hashlib
import html
import json
from pathlib import Path
from datetime import datetime, timezone
from markitdown import MarkItDown

ROOT = Path(__file__).resolve().parents[1]
ORIGINALS = ROOT / 'documents/originals/gsi'
MARKDOWN = ROOT / 'documents/markdown/gsi'
LOG = ROOT / 'logs/gsi-conversions.json'

def write_preserved(path, text):
    payload = text.encode('utf-8')
    if path.exists() and path.read_bytes() != payload:
        raise ValueError(f'Existing different output: {path.relative_to(ROOT)}')
    path.parent.mkdir(parents=True, exist_ok=True)
    if not path.exists():
        path.write_bytes(payload)

def inline(elements):
    chunks = []
    for item in elements:
        run = item.get('textRun')
        if not run:
            if item.get('inlineObjectElement'):
                raise ValueError('Inline image requires inspection; not silently discarded')
            continue
        text = html.escape(run.get('content', ''))
        style = run.get('textStyle', {})
        if style.get('bold'):
            text = '<strong>' + text + '</strong>'
        if style.get('italic'):
            text = '<em>' + text + '</em>'
        url = (style.get('link') or {}).get('url', '')
        if url.startswith(('https://', 'http://')):
            text = '<a href="' + html.escape(url, quote=True) + '">' + text + '</a>'
        chunks.append(text)
    return ''.join(chunks).strip()

def render_elements(elements):
    out = []
    open_list = None
    for item in elements:
        paragraph = item.get('paragraph')
        if paragraph:
            text = inline(paragraph.get('elements', []))
            if not text:
                continue
            bullet = paragraph.get('bullet')
            if bullet:
                # Native list identifiers and nesting remain in the snapshot.
                # Bullets preserve order without inventing letter/number values.
                if not open_list:
                    out.append('<ul>')
                    open_list = 'ul'
                out.append('<li>' + text + '</li>')
                continue
            if open_list:
                out.append('</ul>')
                open_list = None
            style = (paragraph.get('paragraphStyle') or {}).get('namedStyleType', '')
            tag = 'h' + style[-1] if style.startswith('HEADING_') else 'p'
            out.append(f'<{tag}>{text}</{tag}>')
        elif item.get('table'):
            if open_list:
                out.append('</ul>')
                open_list = None
            out.append('<table>')
            for row_index, row in enumerate(item['table']['tableRows']):
                out.append('<tr>')
                for cell in row['tableCells']:
                    tag = 'th' if row_index == 0 else 'td'
                    attrs = ' scope="col"' if row_index == 0 else ''
                    style = cell.get('tableCellStyle', {})
                    for key, attr in [('columnSpan', 'colspan'), ('rowSpan', 'rowspan')]:
                        span = style.get(key, 1) or 1
                        if span > 1:
                            attrs += f' {attr}="{span}"'
                    out.append(f'<{tag}{attrs}>' + render_elements(cell['content']) + f'</{tag}>')
                out.append('</tr>')
            out.append('</table>')
    if open_list:
        out.append('</ul>')
    return '\n'.join(out)

def main():
    LOG.parent.mkdir(exist_ok=True)
    attempts = json.loads(LOG.read_text('utf-8')) if LOG.exists() else []
    converter = MarkItDown(enable_plugins=False)
    failures = []
    for snapshot in sorted(ORIGINALS.rglob('*.json')):
        doc = json.loads(snapshot.read_text('utf-8'))
        source_html = snapshot.with_suffix('.html')
        output = MARKDOWN / snapshot.relative_to(ORIGINALS).with_suffix('.md')
        entry = {'snapshot': snapshot.relative_to(ROOT).as_posix(),
                 'output': output.relative_to(ROOT).as_posix(),
                 'drive_id': doc['documentId'], 'title': doc['title'],
                 'attempted_at': datetime.now(timezone.utc).isoformat(),
                 'converter': 'MarkItDown 0.1.7; native structural HTML; plugins disabled',
                 'ocr': False}
        try:
            tabs = doc.get('tabs') or [{'body': doc.get('body')}]
            bodies = [render_elements((tab.get('body') or {}).get('content', [])) for tab in tabs]
            markup = '<!doctype html><html lang="es"><meta charset="utf-8"><title>' + html.escape(doc['title']) + '</title><body>\n' + '\n'.join(bodies) + '\n</body></html>\n'
            write_preserved(source_html, markup)
            result = converter.convert(str(source_html)).text_content.strip() + '\n'
            if len(result.strip()) < 500:
                raise ValueError('Minimal output; possible scanned/unsupported source, OCR not run')
            write_preserved(output, result)
            entry.update(status='converted', characters=len(result),
                         sha256=hashlib.sha256(result.encode('utf-8')).hexdigest(),
                         tables=markup.count('<table>'))
        except Exception as exc:
            entry.update(status='failed', error=str(exc))
            failures.append(entry)
        attempts.append(entry)
        LOG.write_text(json.dumps(attempts, ensure_ascii=False, indent=2) + '\n', 'utf-8')
        print(f"{entry['status']}: {snapshot.parent.name}/{snapshot.stem}")
    print(f'{len(attempts)} attempts, {len(failures)} current failures; no OCR.')
    return bool(failures)

if __name__ == '__main__':
    raise SystemExit(main())
