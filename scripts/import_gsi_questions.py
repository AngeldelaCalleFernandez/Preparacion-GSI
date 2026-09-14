#!/usr/bin/env python3
"""Import six existing 160-question packs with supplied, traceable answer keys."""
from __future__ import annotations
import json
import re
from collections import Counter
from build_gsi_content import ROOT, DATE, VERSION, save, text_of

def paragraphs(path):
    doc = json.loads(path.read_text('utf-8'))
    return doc, [(e.get('startIndex'), text_of(e), bool(e.get('paragraph', {}).get('bullet')))
                 for tab in doc['tabs'] for e in tab['body']['content'] if e.get('paragraph') and text_of(e)]

def pack_source(pack, path, topic_ids):
    doc, _ = paragraphs(path)
    suffix = 'SOL' if 'SOLUCIONARIO' in path.stem else 'CUADERNO'
    code = f'GSI-P{pack:02}-{suffix}'
    return {'id': 'SRC-' + code, 'sourceKind': 'corpus-source', 'title': doc['title'], 'publisher': 'Corpus de práctica activa GSI A2 del propietario',
            'official_status': 'reference', 'url': f'https://docs.google.com/document/d/{doc["documentId"]}/edit', 'drive_id': doc['documentId'],
            'version': 'Práctica activa, agosto 2026', 'reviewed_at': '2026-08-24' if pack <= 16 else '2026-08-25',
            'block_ids': sorted({t.split('-')[0] for t in topic_ids}), 'topic_ids': sorted(topic_ids),
            'documents': [{'id': 'DOC-' + code, 'path': 'documents/markdown/gsi/' + path.relative_to(ROOT / 'documents/originals/gsi').with_suffix('.md').as_posix(), 'kind': 'questions', 'conversion_status': 'converted'}]}

def mapped_topic(pack, number, base=''):
    if pack == 14:
        match = re.search(r'I\.(\d{2})', base)
        if not match and (121 <= number <= 140 or number == 158): return 'B1-T10'
        if not match: raise ValueError(f'Pack 14 question {number} has no source topic: {base}')
        return f'B1-T{int(match[1]):02}'
    if pack == 15: return 'B3-T10' if 121 <= number <= 140 else 'B3-T11'
    if pack == 16: return 'B2-T14'
    if pack == 17: return 'B2-T01' if number <= 80 else 'B2-T02'
    if pack == 18: return 'B2-T09' if number <= 80 else 'B2-T16'
    if pack == 19:
        return 'B4-T14' if number <= 40 or 141 <= number <= 144 else 'B4-T15' if number <= 100 or 145 <= number <= 148 else 'B4-T16'
    raise ValueError(pack)

def extract_pack(pack):
    directory = ROOT / f'documents/originals/gsi/P{pack:02}'
    question_path = next(directory.glob('*CUADERNO*.json'))
    solution_path = next(directory.glob('*SOLUCIONARIO*.json'))
    question_doc, prompts = paragraphs(question_path)
    solution_doc, solutions = paragraphs(solution_path)
    answers = {}
    if pack == 14:
        for i, (position, text, bullet) in enumerate(solutions):
            match = re.match(r'^(\d+)\.\s+(.+)', text)
            if not match or i+6 >= len(solutions): continue
            opts = solutions[i+1:i+5]
            answer = re.match(r'^Respuesta:\s*([A-D])\.\s*(.+)', solutions[i+5][1])
            if all(p[2] for p in opts) and answer:
                answers[int(match[1])] = (answer[1], answer[2], solutions[i+6][1], position)
    else:
        for position, text, _ in solutions:
            match = re.match(r'^(\d+)\.\s*([A-D])\s*[—–-]\s*(.+)', text)
            if match:
                number = int(match[1])
                if number in answers: raise ValueError(f'Duplicate answer: {pack}/{number}')
                answers[number] = (match[2], match[3], '', position)
    found = []
    for i, (position, text, _) in enumerate(prompts):
        match = re.match(r'^(\d+)\.\s+(.+)', text)
        if not match or i+4 >= len(prompts): continue
        number = int(match[1])
        options = prompts[i+1:i+5]
        if pack == 14:
            if not all(p[2] for p in options): continue
            texts = [p[1] for p in options]
        else:
            labels = [re.match(r'^([A-D])[.)]\s*(.+)', p[1]) for p in options]
            if not all(labels) or [m[1] for m in labels] != list('ABCD'): continue
            texts = [m[2] for m in labels]
        if number not in answers: raise ValueError(f'No answer for {pack}/{number}')
        correct, explanation, base, answer_position = answers[number]
        found.append({'number': number, 'statement': match[2], 'options': texts, 'correct': correct, 'explanation': explanation,
                      'base': base, 'question_position': position, 'answer_position': answer_position, 'topic_id': mapped_topic(pack, number, base)})
    if sorted(q['number'] for q in found) != list(range(1, 161)) or sorted(answers) != list(range(1, 161)):
        raise ValueError(f'Incomplete pack {pack}: {len(found)} questions / {len(answers)} answers')
    topics = {q['topic_id'] for q in found}
    qsource, source = pack_source(pack, question_path, topics), pack_source(pack, solution_path, topics)
    result = []
    for q in found:
        locator = f'Pregunta {q["number"]}; índice nativo {q["answer_position"]}' + ('; ' + q['base'] if q['base'] else '')
        provenance = {'type': 'curated', 'source_id': source['id'], 'document_id': source['documents'][0]['id'], 'drive_id': source['drive_id'],
                      'url': source['url'], 'locator': locator, 'version': source['version'], 'reviewed_at': source['reviewed_at']}
        result.append({'id': f'MAN-GSI-P{pack:02}-{q["number"]:03}', 'opposition_id': 'OPP-GSI', 'origin': 'manual', 'official_status': 'not_official',
                       'validation_status': 'validated', 'block_id': q['topic_id'].split('-')[0], 'topic_id': q['topic_id'], 'subtopic': q['base'], 'exam': None,
                       'statement': q['statement'], 'options': [{'id': label, 'text': text} for label, text in zip('ABCD', q['options'])], 'correct_option': q['correct'],
                       'feedback': {'correct': q['explanation'], 'incorrect': 'Según el solucionario: ' + q['explanation']},
                       'source': {'source_id': source['id'], 'document_id': source['documents'][0]['id'], 'title': source['title'], 'url': source['url'], 'locator': locator,
                                  'question_source_id': qsource['id'], 'question_document_id': qsource['documents'][0]['id'], 'question_locator': f'Pregunta {q["number"]}; índice nativo {q["question_position"]}',
                                  'review_method': 'Cotejo de cuatro alternativas y clave comentada existente; dificultad orientativa asignada en la importación.'},
                       'provenance': provenance, 'difficulty': 'medium', 'tags': [f'practica-{pack:02}', 'dificultad-orientativa'], 'is_active': True,
                       'created_at': DATE, 'updated_at': DATE})
    return result, [qsource, source]

def main():
    data = json.loads((ROOT / 'data/sources.json').read_text('utf-8'))
    data['sources'] = [s for s in data['sources'] if not re.match(r'SRC-GSI-P\d+-', s['id'])]
    questions = []
    for pack in range(14, 20):
        imported, sources = extract_pack(pack)
        questions.extend(imported); data['sources'].extend(sources)
    seen, included, duplicates = {}, [], []
    for q in questions:
        key = re.sub(r'\W+', ' ', q['statement'].casefold()).strip()
        if key in seen:
            duplicates.append({'excluded_id': q['id'], 'retained_id': seen[key], 'statement': q['statement']})
        else:
            seen[key] = q['id']; included.append(q)
    save('data/sources.json', data)
    save('data/questions-manual.json', {'metadata': {'dataset_type': 'manual', 'schema_version': '1.0.0', 'data_version': VERSION, 'updated_at': DATE}, 'questions': included})
    save('logs/gsi-question-import.json', {'date': DATE, 'source_count': 12, 'source_questions': len(questions), 'imported': len(included), 'exact_duplicates': duplicates,
                                         'per_topic': dict(sorted(Counter(q['topic_id'] for q in included).items())),
                                         'review': 'Claves y explicaciones conservadas del corpus. No son preguntas oficiales.'})
    print(f'{len(included)} curated questions imported; {len(duplicates)} exact duplicate prompts excluded.')
    print(dict(sorted(Counter(q['topic_id'] for q in included).items())))

if __name__ == '__main__': main()
