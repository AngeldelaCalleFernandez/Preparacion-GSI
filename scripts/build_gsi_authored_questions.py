#!/usr/bin/env python3
"""Compile editorial question files; only a separate, matching review activates them."""
import hashlib
import json
import random
import re
from pathlib import Path
from datetime import date
from build_gsi_content import markdown_topics

ROOT = Path(__file__).resolve().parents[1]
DATE = '2026-09-14'
UPDATED = date.today().isoformat()
RIGHTS = {
    'sourceName': 'Banco GSI generado por IA y revisado',
    'sourceUrl': 'https://github.com/AngeldelaCalleFernandez/Preparacion-GSI',
    'rightsholder': 'Autor del repositorio para la selección y revisión registrada; las fuentes subyacentes conservan sus derechos',
    'reuseBasis': 'Generación propia basada en evidencias trazadas del corpus; no oficial y no atribuida a PreparaTIC.',
    'permissionStatus': 'self_authored_claimed',
    'attributionRequired': True,
    'sourceType': 'project_generated_reviewed',
}

def digest(value):
    return hashlib.sha256(value.encode('utf-8')).hexdigest()

def load(path):
    return json.loads((ROOT / path).read_text('utf-8'))

def load_length_reviews():
    """Editorial overlays on previously accepted drafts; originals stay immutable."""
    result = {}
    for path in sorted((ROOT / 'content/question-drafts').glob('ai-length-review-*.json')):
        data = json.loads(path.read_text('utf-8'))
        if data.get('version') != 1 or not isinstance(data.get('reviews'), dict):
            raise ValueError(f'{path}: invalid AI length review manifest')
        for qid, review in data['reviews'].items():
            if qid in result:
                raise ValueError(f'{path}: duplicate AI review ID {qid}')
            if not isinstance(review, dict) or not isinstance(review.get('reason'), str) or not review['reason'].strip():
                raise ValueError(f'{path}: missing editorial reason for {qid}')
            if review.get('decision') not in ('rewrite', 'keep', 'retire'):
                raise ValueError(f'{path}: invalid editorial decision for {qid}')
            result[qid] = (review, path.name, data['reviewed_at'])
    return result

def main():
    sources = {s['id']: s for s in load('data/sources.json')['sources']}
    review_path = ROOT / 'data/gsi-editorial-reviews.json'
    review_data = json.loads(review_path.read_text('utf-8')) if review_path.exists() else {}
    reviews = {r['id']: r for r in review_data.get('reviews', [])}
    length_reviews = load_length_reviews()
    questions, evidence_report, counts = [], [], {}
    historical_topics = {}
    seen_length_reviews = set()
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
            source = sources[f'SRC-GSI-{topic[:2]}-V21']
            if topic not in historical_topics:
                source_path = ROOT / source['documents'][0]['path']
                historical_topics[topic] = markdown_topics(source_path, int(topic[1]))[int(topic[-2:])]
            text = historical_topics[topic].split('## Resumen de repaso')[0]
            match = re.search(r'^## ' + re.escape(section) + r'\.? (.+?)\n(.*?)(?=^## |\Z)', text, re.M | re.S)
            if not match: raise ValueError(f'{topic} section {section} missing')
            evidence = match[2].strip()
            counts[topic] = counts.get(topic, 0) + 1
            qid = f'AI-GSI-{topic}-{counts[topic]:03}'
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
            if qid in length_reviews:
                editorial, manifest, reviewed_at = length_reviews[qid]
                seen_length_reviews.add(qid)
                if not accepted:
                    raise ValueError(f'{qid}: editorial overlay has no matching accepted base review')
                decision = editorial['decision']
                allowed = {'decision', 'reason'} if decision != 'rewrite' else {'decision', 'reason', 'distractors', 'statement', 'correct_text'}
                if set(editorial) - allowed:
                    raise ValueError(f'{qid}: unsupported AI review fields: {sorted(set(editorial) - allowed)}')
                if decision == 'rewrite':
                    replacements = editorial.get('distractors')
                    if not isinstance(replacements, list) or len(replacements) != 3 or not all(isinstance(s, str) and s.strip() for s in replacements):
                        raise ValueError(f'{qid}: rewrite requires three nonempty distractors')
                    for key in ('statement', 'correct_text'):
                        if key in editorial and (not isinstance(editorial[key], str) or not editorial[key].strip()):
                            raise ValueError(f'{qid}: invalid {key} in editorial revision')
                    wrong_options = [option for option in question['options'] if option['id'] != question['correct_option']]
                    for option, replacement in zip(wrong_options, replacements):
                        option['text'] = replacement
                    if 'correct_text' in editorial:
                        next(option for option in question['options'] if option['id'] == question['correct_option'])['text'] = editorial['correct_text']
                    if 'statement' in editorial:
                        question['statement'] = editorial['statement']
                    if len({option['text'].casefold() for option in question['options']}) != 4:
                        raise ValueError(f'{qid}: editorial revision duplicates an option')
                elif decision == 'retire':
                    question['is_active'] = False
                    question['validation_status'] = 'pending_review'
                question['source']['editorial_revision'] = {
                    'decision': decision,
                    'reason': editorial['reason'],
                    'reviewer_type': 'ai_assistant',
                    'reviewed_at': reviewed_at,
                    'manifest': 'content/question-drafts/' + manifest,
                    'base_record_sha256': record_hash,
                }
            questions.append(question)
            evidence_report.append({'id': qid, 'topic': topic, 'section': section, 'statement': statement, 'correct': correct,
                                    'record_sha256': record_hash, 'evidence_sha256': evidence_hash, 'accepted': accepted})
    if seen_length_reviews != set(length_reviews):
        raise ValueError(f'AI length review IDs absent from drafts: {sorted(set(length_reviews) - seen_length_reviews)}')
    output = {'metadata': {'dataset_type': 'ai', 'schema_version': '1.0.0', 'data_version': '2.1.1',
                           'updated_at': UPDATED, 'rights': RIGHTS}, 'questions': questions}
    (ROOT / 'data/questions-ai.json').write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', 'utf-8')
    (ROOT / 'logs/gsi-authored-evidence.json').write_text(json.dumps(evidence_report, ensure_ascii=False, indent=2) + '\n', 'utf-8')
    print(f'{len(questions)} authored questions: {sum(q["is_active"] for q in questions)} accepted against matching original human reviews; {len(length_reviews)} separately traced assistant editorial decisions.')
    print(counts)

if __name__ == '__main__': main()
