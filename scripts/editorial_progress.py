#!/usr/bin/env python3
"""Deterministic review queue and progress, separate from technical release readiness."""
import argparse
import hashlib
from collections import Counter
from pathlib import Path
from editorial_batches import ROOT, LEDGER, PROPOSALS, banks, load, require, verify_ledger, write


def build_progress(root=ROOT):
    collections = banks(root)
    verify_ledger(root, collections)
    baseline = load(root / PROPOSALS / 'baseline.json')
    require(hashlib.sha256((root / 'data/questions-official.json').read_bytes()).hexdigest() == baseline['banks_sha256']['official'], 'El banco oficial debe permanecer idéntico al auditado.')
    questions = {q['id']: q for bank in ('manual', 'ai') for q in collections[bank]['questions']}
    order = baseline['review_order']
    require(len(order) == len(set(order)) == 1762 and set(order).issubset(questions), 'Cola incompleta, duplicada o con IDs inexistentes.')
    require(len(set(baseline['original_ai_findings'])) == 128 and len(set(baseline['pilot_ids'])) == 20 and order[:20] == baseline['pilot_ids'], 'El piloto o la cola IA original no coinciden con la base auditada.')
    proposals = {item['id'] for path in (root / PROPOSALS).glob('lote-*.json') for item in load(path)['items']}
    decisions = {item['id']: {'action': item['action'], 'batch': entry['batch']['id'], 'reviewer': entry['approval']['reviewer'], 'reviewed_at': entry['approval']['reviewed_at']} for entry in load(root / LEDGER)['batches'] for item in entry['batch']['items']}
    rows = []
    for index, id in enumerate(baseline['review_order']):
        q = questions[id]
        decision = decisions.get(id)
        rows.append({'id': id, 'bank': q['origin'], 'topic_id': q['topic_id'], 'planned_batch': index // 20 + 1,
                     'status': 'reviewed' if decision else 'proposed' if id in proposals else 'pending', 'decision': decision})
    counts = Counter(r['status'] for r in rows)
    return {'version': 1, 'baseline_commit': baseline['commit'], 'total': len(rows), 'reviewed': counts['reviewed'],
            'proposed': counts['proposed'], 'pending': len(rows) - counts['reviewed'], 'editorial_complete': counts['reviewed'] == len(rows),
            'calibration': 'not_available', 'independent_review': 'not_recorded', 'questions': rows}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--write', action='store_true')
    args = parser.parse_args()
    report = build_progress()
    target = ROOT / 'logs/gsi-editorial-progress.json'
    if args.write:
        write(target, report)
    elif not target.is_file() or load(target) != report:
        print('ERROR: progreso editorial desactualizado; ejecute scripts/editorial_progress.py --write.')
        return 1
    print(f"Editorial: {report['reviewed']}/{report['total']} revisadas; {report['proposed']} propuestas; {report['pending']} pendientes de aceptación. Cierre editorial: {report['editorial_complete']}.")
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
