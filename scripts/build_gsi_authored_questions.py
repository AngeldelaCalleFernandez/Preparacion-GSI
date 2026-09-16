#!/usr/bin/env python3
"""Compile editorial question files; only a separate, matching review activates them."""
import hashlib
import json
import random
import re
from pathlib import Path
from datetime import date

ROOT = Path(__file__).resolve().parents[1]
DATE = '2026-09-14'
UPDATED = date.today().isoformat()

def digest(value):
    return hashlib.sha256(value.encode('utf-8')).hexdigest()

def load(path):
    return json.loads((ROOT / path).read_text('utf-8'))

def main():
    sources = {s['id']: s for s in load('data/sources.json')['sources']}
    review_path = ROOT / 'data/gsi-editorial-reviews.json'
    review_data = json.loads(review_path.read_text('utf-8')) if review_path.exists() else {}
    reviews = {r['id']: r for r in review_data.get('reviews', [])}
    questions, evidence_report, counts = [], [], {}
    for path in sorted((ROOT / 'content/question-drafts').glob('*.txt')):
        topic = None
        for line_no, line in enumerate(path.read_text('utf-8').splitlines(), 1):
            if not line.strip() or line.startswith('#'): continue
            if line.startswith('@'):
                topic = line[1:]; continue
            fields = [f.strip() for f in line.split('|')]
            if len(fields) != 7: raise ValueError(f'{path}:{line_no}: expected 7 columns, got {len(fields)}')
            section, statement, correct, *rest = fields
            wrong, explanation = rest[:3], rest[3]
            text = (ROOT / f'content/topics/{topic}.md').read_text('utf-8').split('## Resumen de repaso')[0]
            match = re.search(r'^## ' + re.escape(section) + r'\.? (.+?)\n(.*?)(?=^## |\Z)', text, re.M | re.S)
            if not match: raise ValueError(f'{topic} section {section} missing')
            evidence = match[2].strip()
            counts[topic] = counts.get(topic, 0) + 1
            qid = f'AI-GSI-{topic}-{counts[topic]:03}'
            source = sources[f'SRC-GSI-{topic[:2]}-V21']
            locator = f'{["I", "II", "III", "IV"][int(topic[1])-1]}.{topic[-2:]}; sección {section}. {match[1]}'
            record_hash = digest(topic + '\n' + line)
            evidence_hash = digest(evidence)
            review = reviews.get(qid, {})
            accepted = (review_data.get('reviewer_type') == 'human' and review_data.get('status') == 'reviewed'
                        and review.get('decision') == 'accepted' and review.get('record_sha256') == record_hash
                        and review.get('evidence_sha256') == evidence_hash)
            options = [correct, *wrong]
            if len(set(s.casefold() for s in options)) != 4: raise ValueError(f'{qid}: duplicate alternatives')
            random.Random(qid).shuffle(options)
            provenance = {'type': 'generated', 'source_id': source['id'], 'document_id': source['documents'][0]['id'],
                          'drive_id': source['drive_id'], 'url': source['url'], 'locator': locator,
                          'version': source['version'], 'reviewed_at': source['reviewed_at']}
            question = {'id': qid, 'opposition_id': 'OPP-GSI', 'origin': 'ai', 'official_status': 'not_official',
                        'validation_status': 'validated' if accepted else 'pending_review', 'block_id': topic[:2], 'topic_id': topic,
                        'subtopic': match[1], 'exam': None, 'statement': statement,
                        'options': [{'id': key, 'text': value} for key, value in zip('ABCD', options)], 'correct_option': 'ABCD'[options.index(correct)],
                        'feedback': {'correct': explanation, 'incorrect': explanation}, 'source': {**provenance, 'title': source['title'],
                        'evidence': evidence, 'evidence_sha256': evidence_hash, 'record_sha256': record_hash,
                        'review_id': qid if accepted else None, 'review_method': review.get('method') if accepted else 'Pendiente de revisión editorial; el compilador no valida contenido.'},
                        'provenance': provenance, 'difficulty': 'medium', 'tags': ['fuente-v21', 'dificultad-orientativa'],
                        'is_active': accepted, 'created_at': DATE, 'updated_at': UPDATED}
            questions.append(question)
            evidence_report.append({'id': qid, 'topic': topic, 'section': section, 'statement': statement, 'correct': correct,
                                    'record_sha256': record_hash, 'evidence_sha256': evidence_hash, 'accepted': accepted})
    output = {'metadata': {'dataset_type': 'ai', 'schema_version': '1.0.0', 'data_version': '2.1.0', 'updated_at': UPDATED}, 'questions': questions}
    (ROOT / 'data/questions-ai.json').write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', 'utf-8')
    (ROOT / 'logs/gsi-authored-evidence.json').write_text(json.dumps(evidence_report, ensure_ascii=False, indent=2) + '\n', 'utf-8')
    print(f'{len(questions)} authored questions: {sum(q["is_active"] for q in questions)} accepted with matching editorial records.')
    print(counts)

if __name__ == '__main__': main()
