#!/usr/bin/env python3
"""Materialize GSI-only catalogs and 57 full topics from internally approved snapshots.

No model-authored study text: native paragraphs/tables and MarkItDown outputs
are split at source topic headings. BOE is used only for scope and exam rules.
"""
from __future__ import annotations

import hashlib
import html
import json
import re
import shutil
import xml.etree.ElementTree as ET
from pathlib import Path
from import_gsi_documents import render_elements, inline

ROOT = Path(__file__).resolve().parents[1]
DATE = '2026-09-14'
VERSION = '2.0.0'
ROMAN = ['I', 'II', 'III', 'IV']
COUNTS = [10, 16, 15, 16]
DRIVE_ROOT = 'https://drive.google.com/drive/folders/1bmBgrybIUDyT1owpnooU8Oq5FH4wLrp2'
BOE_URL = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262'
TOPIC = re.compile(r'^(I|II|III|IV)\.(\d{1,2})\s*[—–-]\s*(.+)')

def save(path, value):
    path = ROOT / path
    path.parent.mkdir(parents=True, exist_ok=True)
    text = json.dumps(value, ensure_ascii=False, indent=2) + '\n' if not isinstance(value, str) else value
    path.write_text(text, encoding='utf-8', newline='\n')

def metadata(title):
    return {'title': title, 'schema_version': '1.0.0', 'data_version': VERSION, 'updated_at': DATE}

def archive_previous():
    old = json.loads((ROOT / 'data/syllabus.json').read_text('utf-8'))
    if 'GSI' in old['metadata']['title']:
        return
    archive = ROOT / 'archive/tai-before-gsi'
    for directory in ['data', 'content']:
        for path in (ROOT / directory).rglob('*'):
            if path.is_file():
                target = archive / path.relative_to(ROOT)
                if target.exists() and target.read_bytes() != path.read_bytes():
                    raise ValueError(f'Archive collision: {target}')
                target.parent.mkdir(parents=True, exist_ok=True)
                if not target.exists():
                    shutil.copy2(path, target)
    save('archive/tai-before-gsi/README.md', '# Archivo histórico anterior a GSI\n\nCopia inmutable de datos y contenidos de la aplicación anterior. No se carga desde la aplicación GSI. Los identificadores locales coincidentes pertenecen a otra oposición y nunca deben importarse como progreso GSI.\n')

def official_program():
    xml = ET.parse(ROOT / 'documents/sources/gsi/BOE-A-2025-26262.xml')
    items = [' '.join(''.join(e.itertext()).split()) for e in xml.find('texto')]
    start = next(i for i, text in enumerate(items) if text == 'ANEXO IX')
    end = next(i for i in range(start + 1, len(items)) if items[i] == 'ANEXO X')
    annex = items[start:end]
    program = annex[next(i for i, t in enumerate(annex) if t == '4. Programa.') + 1:]
    blocks = []
    for text in program:
        heading = re.match(r'^(I|II|III|IV)\.\s+(.+)', text)
        if heading:
            blocks.append({'id': f'B{len(blocks)+1}', 'number': len(blocks)+1,
                           'title': heading[2], 'status': 'active', 'topics': []})
        elif blocks and (topic := re.match(r'^(\d+)\.\s+(.+)', text)):
            block = blocks[-1]
            number = int(topic[1])
            if number != len(block['topics']) + 1:
                raise ValueError('BOE topic numbering is discontinuous')
            block['topics'].append({'id': f"{block['id']}-T{number:02}", 'number': number,
                                    'title': topic[2], 'status': 'active'})
    if [len(b['topics']) for b in blocks] != COUNTS:
        raise ValueError(f'Unexpected official distribution: {[len(b["topics"]) for b in blocks]}')
    save('documents/markdown/gsi/BOE-A-2025-26262-Anexo-IX.md', '# BOE-A-2025-26262 — Anexo IX\n\nFuente: ' + BOE_URL + '\n\n' + '\n\n'.join(annex[1:]) + '\n')
    return blocks

def text_of(element):
    return ''.join(e.get('textRun', {}).get('content', '') for e in element.get('paragraph', {}).get('elements', [])).strip()

def native_topics(doc, block_number):
    sections = {}
    current = None
    for tab in doc.get('tabs', []):
        for element in (tab.get('body') or {}).get('content', []):
            match = TOPIC.match(text_of(element))
            if match and match[1] == ROMAN[block_number - 1]:
                current = int(match[2])
                if current in sections:
                    raise ValueError(f'Duplicate native topic: {doc["title"]} {current}')
                sections[current] = []
            elif current is not None:
                sections[current].append(element)
    if sorted(sections) != list(range(1, COUNTS[block_number - 1]+1)):
        raise ValueError(f'Incomplete native topic split: {doc["title"]}: {sorted(sections)}')
    return sections

def markdown_topics(path, block_number):
    sections = {}
    current = None
    for line in path.read_text('utf-8').splitlines():
        match = TOPIC.match(re.sub(r'^#+\s*', '', line))
        if match and match[1] == ROMAN[block_number - 1]:
            current = int(match[2])
            if current in sections:
                raise ValueError(f'Duplicate Markdown topic: {path} {current}')
            sections[current] = []
        elif current is not None:
            sections[current].append(line)
    if sorted(sections) != list(range(1, COUNTS[block_number - 1]+1)):
        raise ValueError(f'Incomplete Markdown split: {path}: {sorted(sections)}')
    return {k: '\n'.join(v).strip() for k, v in sections.items()}

def corpus_source(path, block, kind):
    doc = json.loads(path.read_text('utf-8'))
    is_notes = kind == 'study_notes'
    tag = f'GSI-B{block}-' + ('V21' if is_notes else 'REPASO')
    reviewed = '2026-08-24' if block == 1 and is_notes else '2026-08-21'
    source = {'id': 'SRC-' + tag, 'sourceKind': 'corpus-source', 'title': doc['title'],
              'publisher': 'Corpus de estudio GSI A2 del propietario', 'official_status': 'reference',
              'url': f'https://docs.google.com/document/d/{doc["documentId"]}/edit',
              'drive_id': doc['documentId'], 'version': 'V2.1' if is_notes else 'Resumen maestro, agosto 2026',
              'reviewed_at': reviewed, 'block_ids': [f'B{block}'],
              'topic_ids': [f'B{block}-T{n:02}' for n in range(1, COUNTS[block-1]+1)],
              'documents': [{'id': 'DOC-' + tag, 'path': 'documents/markdown/gsi/' + path.relative_to(ROOT / 'documents/originals/gsi').with_suffix('.md').as_posix(),
                             'kind': kind, 'conversion_status': 'converted'}]}
    return source, doc

def render_topic(topic_id, native, summary, source, review_source, locator):
    sections = []
    body = []
    for label, elements, ref, prefix in [('Apuntes de estudio', native, source, 'estudio'), ('Resumen de repaso', summary, review_source, 'repaso')]:
        body.append(f'<h2 id="{prefix}">{label}</h2>')
        sections.append({'sectionId': prefix, 'title': label, 'level': 2,
                         'sourceRefs': [{'sourceId': ref['id'], 'locator': locator, 'officialFragmentUrl': None}]})
        pending = []
        ordinal = 0
        for element in elements:
            p = element.get('paragraph', {})
            style = (p.get('paragraphStyle') or {}).get('namedStyleType', '')
            text = text_of(element)
            if style.startswith('HEADING_') and text:
                if pending:
                    body.append(render_elements(pending)); pending = []
                ordinal += 1
                anchor = f'{prefix}-{ordinal:02}'
                sections.append({'sectionId': anchor, 'title': text, 'level': 3,
                                 'sourceRefs': [{'sourceId': ref['id'], 'locator': locator + ' / ' + text, 'officialFragmentUrl': None}]})
                body.append(f'<h3 id="{anchor}">{inline(p["elements"])}</h3>')
            else:
                pending.append(element)
        if pending:
            body.append(render_elements(pending))
    toc = ''.join(f'<li><a href="#temario/{topic_id}/{s["sectionId"]}">{html.escape(s["title"])}</a></li>' for s in sections)
    citations = ''.join(f'<li><a href="{html.escape(s["url"], quote=True)}" target="_blank" rel="noopener noreferrer">{html.escape(s["title"])}</a> · {html.escape(locator)} · {s["reviewed_at"]}</li>' for s in [source, review_source])
    markup = f'<article class="topic-content" data-topic-id="{topic_id}" data-coverage-status="complete">\n<p>Material curado del corpus GSI A2 · apuntes V2.1 revisados. Procedencia editorial, no documento oficial.</p>\n<nav class="topic-content__toc" aria-label="Índice del tema"><h2>Contenido del tema</h2><ol>{toc}</ol></nav>\n' + '\n'.join(body) + f'\n<section class="topic-content__sources"><h2 id="fuentes">Fuentes y localizadores</h2><ul>{citations}</ul></section>\n</article>\n'
    return markup, sections

def main():
    archive_previous()
    blocks = official_program()
    source_boe = {'id': 'SRC-BOE-GSI-2025', 'title': 'BOE-A-2025-26262, Anexo IX — GSI ingreso libre',
                  'publisher': 'Boletín Oficial del Estado', 'official_status': 'official', 'url': BOE_URL,
                  'published_at': '2025-12-22', 'reviewed_at': DATE, 'block_ids': [b['id'] for b in blocks],
                  'topic_ids': [t['id'] for b in blocks for t in b['topics']], 'mapping_status': 'mapped',
                  'documents': [{'id': 'DOC-BOE-GSI-2025', 'path': 'documents/markdown/gsi/BOE-A-2025-26262-Anexo-IX.md', 'kind': 'program', 'conversion_status': 'converted'}]}
    existing_sources = json.loads((ROOT / 'data/sources.json').read_text('utf-8'))['sources']
    sources = [source_boe] + [s for s in existing_sources if s['id'] != source_boe['id'] and not re.fullmatch(r'SRC-GSI-B[1-4]-(V21|REPASO)', s['id'])]
    index = {'version': 1, 'generatedAt': DATE + 'T00:00:00Z', 'topics': []}
    manifest = {'version': VERSION, 'retrieved_at': DATE, 'authorized_root': DRIVE_ROOT,
                'authorized_root_meaning': 'Raíz aprobada internamente para lectura e inventario. No acredita permiso, licencia ni autorización de titulares de derechos externos.',
                'official_control': BOE_URL,
                'source_rights': [
                    {'sourceName': 'PreparaTIC', 'sourceUrl': 'https://www.preparatic.org/',
                     'rightsholder': 'Autores y titulares indicados por PreparaTIC en cada material; no verificados por este repositorio',
                     'reuseBasis': 'Consulta como fuente secundaria y atribución. Los originales no se redistribuyen desde este repositorio.',
                     'permissionStatus': 'not_verified', 'attributionRequired': True, 'sourceType': 'third_party_secondary'},
                    {'sourceName': 'Boletín Oficial del Estado', 'sourceUrl': 'https://www.boe.es/',
                     'rightsholder': 'Fuente oficial; el régimen aplicable depende del documento',
                     'reuseBasis': 'Fuente primaria normativa. Aplicación por documento del régimen de textos oficiales, incluido el artículo 13 TRLPI cuando corresponda.',
                     'permissionStatus': 'statutory_basis_reviewed_per_item', 'attributionRequired': True, 'sourceType': 'official_primary'},
                    {'sourceName': 'Instituto Nacional de Administración Pública', 'sourceUrl': 'https://sede.inap.gob.es/',
                     'rightsholder': 'No atribuido por este proyecto; fuente oficial INAP',
                     'reuseBasis': 'Cuestionarios y plantillas identificados por convocatoria y URL oficial, separados del banco propio.',
                     'permissionStatus': 'not_verified', 'attributionRequired': True, 'sourceType': 'official_primary'}],
                'canonical_documents': [], 'topics': [], 'discrepancies': ['El catálogo anterior declaraba GSI 55 temas (10/16/15/14); el Anexo IX descargado confirma 57 (10/16/15/16).'],
                'policy': 'Originales en Drive preservados; snapshots nativos locales; conversión MarkItDown sin OCR. El corpus está aprobado internamente para publicación, lo que no implica permiso de terceros. Las fuentes secundarias se atribuyen y las fuentes primarias prevalecen.'}
    for b, block in enumerate(blocks, 1):
        directory = ROOT / f'documents/originals/gsi/B{b}'
        notes_path = next(directory.glob('*V2.1*.json'))
        review_path = next(directory.glob('*RESUMEN*.json'))
        source, notes = corpus_source(notes_path, b, 'study_notes')
        review_source, review = corpus_source(review_path, b, 'review_summary')
        sources.extend([source, review_source])
        manifest['canonical_documents'].extend([source, review_source])
        native = native_topics(notes, b)
        summaries = native_topics(review, b)
        md = markdown_topics(ROOT / source['documents'][0]['path'], b)
        summary_md = markdown_topics(ROOT / review_source['documents'][0]['path'], b)
        for topic in block['topics']:
            number, tid = topic['number'], topic['id']
            locator = f'{ROMAN[b-1]}.{number:02}'
            topic['source_ids'] = [source_boe['id'], source['id'], review_source['id']]
            topic['content'] = {'raw': [{'source_id': source['id'], 'document_id': source['documents'][0]['id'], 'locator': locator, 'reviewed_at': source['reviewed_at']}],
                                'summaries': [{'source_id': review_source['id'], 'document_id': review_source['documents'][0]['id'], 'locator': locator}],
                                'flashcards': [], 'updates': [], 'official_tests': [], 'ai_tests': []}
            if len(md[number]) < 1500:
                raise ValueError(f'Source study content too short: {tid}: {len(md[number])}')
            topic_text = f'# {topic["title"]}\n\n{tid} · Bloque {b} · Tema {number}\n\nFuente: [{source["title"]}]({source["url"]}) · {locator} · {source["version"]} · {source["reviewed_at"]}\n\n' + md[number] + f'\n\n## Resumen de repaso\n\nFuente: [{review_source["title"]}]({review_source["url"]}) · {locator}\n\n' + summary_md[number] + '\n'
            save(f'content/topics/{tid}.md', topic_text)
            markup, sections = render_topic(tid, native[number], summaries[number], source, review_source, locator)
            save(f'content/generated/{tid}.html', markup)
            index['topics'].append({'topicId': tid, 'contentPath': f'content/generated/{tid}.html', 'status': 'complete', 'reviewStatus': 'reviewed', 'updatedAt': source['reviewed_at'],
                                    'checksum': hashlib.sha256(markup.encode('utf-8')).hexdigest(), 'sections': sections})
            manifest['topics'].append({'topic_id': tid, 'title': topic['title'], 'source_id': source['id'], 'document_id': source['documents'][0]['id'], 'drive_id': source['drive_id'],
                                      'url': source['url'], 'locator': locator, 'version': source['version'], 'reviewed_at': source['reviewed_at'], 'source_type': 'curated',
                                      'study_characters': len(md[number]), 'summary_characters': len(summary_md[number]),
                                      'markdown_path': f'content/topics/{tid}.md', 'html_path': f'content/generated/{tid}.html',
                                      'study_sha256': hashlib.sha256(md[number].encode('utf-8')).hexdigest(), 'review_source_id': review_source['id']})
    syllabus_meta = metadata('Gestión de Sistemas e Informática de la Administración del Estado — GSI A2, ingreso libre')
    syllabus_meta.update(official_program_source_id=source_boe['id'], official_program_document_id='DOC-BOE-GSI-2025', official_program_date='2025-12-22')
    save('data/syllabus.json', {'metadata': syllabus_meta, 'blocks': blocks})
    save('data/sources.json', {'metadata': metadata('Fuentes GSI A2'), 'sources': sources})
    save('data/topic-content.json', index)
    save('data/gsi-source-manifest.json', manifest)
    opposition = {'id': 'OPP-GSI', 'short_code': 'GSI', 'official_name': syllabus_meta['title'], 'status': 'active', 'runtime_status': 'legacy-operational', 'runtime_available': True,
                  'has_legacy_operational_syllabus': True, 'syllabus_ids': ['SYL-GSI-2025'], 'program_location': {'status': 'cataloged', 'source_id': source_boe['id'],
                  'document_id': 'DOC-BOE-GSI-2025', 'document_path': source_boe['documents'][0]['path'], 'locator': 'Anexo IX'}}
    save('data/oppositions.json', {'schema_version': '1.0.0', 'catalog_version': VERSION, 'syllabi_catalog_path': 'data/syllabi-catalog.json', 'oppositions': [opposition]})
    catalog_blocks = []
    for block in blocks:
        entry = {'legacy_id': block['id'], 'canonical_id': 'GSI-' + block['id'], 'local_official_code': ROMAN[block['number']-1], 'order': block['number'], 'title': block['title'], 'legacy_status': 'active', 'historical_aliases': [], 'topics': []}
        for t in block['topics']:
            entry['topics'].append({'legacy_id': t['id'], 'canonical_id': 'GSI-' + t['id'], 'local_official_code': ROMAN[block['number']-1] + '.' + str(t['number']), 'order': t['number'], 'title': t['title'], 'legacy_status': 'active',
                                    'legacy_content_path': f'content/topics/{t["id"]}.md', 'legacy_generated_path': f'content/generated/{t["id"]}.html', 'historical_aliases': []})
        catalog_blocks.append(entry)
    catalog = {'id': 'SYL-GSI-2025', 'opposition_id': 'OPP-GSI', 'name': syllabus_meta['title'], 'status': 'legacy-operational', 'runtime_available': True,
               'identifier_policy': {'operational_id_kind': 'legacy', 'canonical_ids_status': 'informational'},
               'program_version': {'convocation': 'BOE-A-2025-26262', 'official_program_date': '2025-12-22', 'legacy_data_version': VERSION},
               'provenance': {'official': True, 'source_id': source_boe['id'], 'document_id': 'DOC-BOE-GSI-2025', 'document_path': source_boe['documents'][0]['path'], 'locator': 'Anexo IX'},
               'declared_structure': {'block_count': 4, 'topic_count': 57, 'distribution': COUNTS, 'topics_extracted': True}, 'legacy_source_path': 'data/syllabus.json', 'blocks': catalog_blocks}
    save('data/syllabi-catalog.json', {'schema_version': '1.0.0', 'catalog_version': VERSION, 'runtime_source': {'path': 'data/syllabus.json', 'status': 'legacy-operational', 'catalog_is_runtime_source': False}, 'syllabi': [catalog]})
    for origin in ['official', 'ai', 'manual']:
        target = ROOT / f'data/questions-{origin}.json'
        current = json.loads(target.read_text('utf-8'))
        if current.get('metadata', {}).get('data_version') != VERSION:
            save(target, {'metadata': {'dataset_type': origin, 'schema_version': '1.0.0', 'data_version': VERSION, 'updated_at': DATE}, 'questions': []})
    if not (ROOT / 'data/updates.json').exists():
        save('data/updates.json', {'metadata': {k: v for k, v in metadata('Actualizaciones GSI A2').items() if k != 'title'}, 'updates': []})
    previous_inventory = json.loads((ROOT / 'data/gsi-drive-inventory.json').read_text('utf-8'))
    main_inv = previous_inventory['main']
    aux_inv = previous_inventory['auxiliary']
    save('data/gsi-drive-inventory.json', {'root': DRIVE_ROOT, 'inspected_at': DATE, 'main': main_inv, 'auxiliary': aux_inv})
    print('GSI: 57 topics, distribution 10/16/15/16, 8 canonical documents, full notes and summaries.')

if __name__ == '__main__':
    main()
