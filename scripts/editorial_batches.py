#!/usr/bin/env python3
"""Review exact versions in batches. No command manufactures human approval."""
from __future__ import annotations

import argparse
import copy
import hashlib
import json
from datetime import date
from pathlib import Path
from urllib.parse import urlsplit
from jsonschema import Draft202012Validator, FormatChecker

ROOT = Path(__file__).resolve().parents[1]
LEDGER = 'data/gsi-editorial-revisions.json'
PROPOSALS = 'content/question-reviews'
RUBRIC = ('unique_answer', 'plausible_distractors', 'parallel_options', 'complete_feedback', 'primary_evidence', 'current_context')


def load(path):
    return json.loads(Path(path).read_text('utf-8'))


def digest(value):
    return hashlib.sha256(json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(',', ':')).encode('utf-8')).hexdigest()


def write(path, value):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', 'utf-8')


def banks(root=ROOT):
    return {name: load(root / f'data/questions-{name}.json') for name in ('manual', 'ai', 'official')}


def require(condition, message):
    if not condition:
        raise ValueError(message)


def valid_date(value):
    require(isinstance(value, str) and len(value) == 10, 'Fecha requerida en formato YYYY-MM-DD.')
    date.fromisoformat(value)


def validate_contract(value, schema):
    errors = list(Draft202012Validator(schema, format_checker=FormatChecker()).iter_errors(value))
    if errors:
        error = errors[0]
        raise ValueError(f"Contrato JSON {'.'.join(map(str, error.path)) or 'raíz'}: {error.message}")


def validate_batch(batch):
    contract = load(ROOT / 'schemas/editorial-batch.schema.json')
    validate_contract(batch, contract)
    require(batch.get('version') == 1 and isinstance(batch.get('id'), str), 'Versión o ID de lote inválidos.')
    valid_date(batch.get('prepared_at'))
    items = batch.get('items', [])
    require(1 <= len(items) <= 20, 'Cada lote debe contener entre 1 y 20 preguntas.')
    require(len({i['id'] for i in items}) == len(items), 'IDs duplicados en el lote.')
    require(len({i['after']['id'] for i in items}) == len(items), 'IDs de salida duplicados en el lote.')
    for item in items:
        before, after = item['before'], item['after']
        schema = load(ROOT / 'schemas/question.schema.json')
        validate_contract(after, {'$ref': '#/$defs/question', '$defs': schema['$defs']})
        label = item['id']
        require(item.get('bank') in ('manual', 'ai') and before.get('origin') != 'official' and after.get('origin') != 'official', f'{label}: las oficiales son inmutables.')
        require(before['id'] == label and item['base_sha256'] == digest(before), f'{label}: hash de partida incorrecto.')
        require(item['content_sha256'] == digest(after), f'{label}: hash de propuesta incorrecto.')
        require(item.get('decision') in ('pending_review', 'accepted', 'rejected'), f'{label}: decisión inválida.')
        action = item.get('action')
        require(action in ('revise', 'retain', 'withdraw', 'replace'), f'{label}: acción inválida.')
        require(bool(item.get('reasons')), f'{label}: falta motivo de revisión.')
        require(before['origin'] == after['origin'] == item['bank'] and before['provenance'] == after['provenance'], f'{label}: no se puede alterar el origen ni la procedencia histórica.')
        historical_source = lambda q: {k: v for k, v in q['source'].items() if k not in ('editorial_references', 'editorial_revision_id', 'replaces_question_id')}
        require(historical_source(before) == historical_source(after), f'{label}: conserve la fuente histórica y añada referencias editoriales separadas.')
        require(after.get('opposition_id') == 'OPP-GSI' and after.get('block_id') == str(after.get('topic_id', '')).split('-')[0], f'{label}: identidad o bloque inválidos.')
        require(before['topic_id'] == after['topic_id'], f'{label}: un cambio de tema requiere una revisión separada.')
        require(before['difficulty'] == after['difficulty'], f'{label}: la dificultad continúa siendo orientativa.')
        if action != 'replace':
            require(after['id'] == label and after['correct_option'] == before['correct_option'], f'{label}: cambiar clave requiere reemplazo con ID nuevo.')
            if action == 'retain':
                require(all(before[k] == after[k] for k in ('statement', 'options', 'correct_option', 'feedback')), f'{label}: conservar exige mantener el contenido.')
        else:
            require(after['id'] != label and after.get('source', {}).get('replaces_question_id') == label, f'{label}: falta enlace al reemplazo.')
        opts = after.get('options', [])
        require(len(opts) == 4 and {o['id'] for o in opts} == set('ABCD') and len({o['text'].strip().casefold() for o in opts}) == 4, f'{label}: cuatro alternativas distintas requeridas.')
        require(after['correct_option'] in set('ABCD'), f'{label}: clave inválida.')
        if action == 'withdraw':
            require(not after['is_active'] and after['validation_status'] in ('needs_revision', 'retired'), f'{label}: retirada incoherente.')
        else:
            require(all(item.get('rubric', {}).get(k) is True for k in RUBRIC), f'{label}: rúbrica pendiente de completar.')
            feedback = after.get('feedback', {})
            wrong = {o['id'] for o in opts if o['id'] != after['correct_option']}
            require(bool(feedback.get('correct', '').strip()) and set(feedback.get('incorrect_options', {})) == wrong and all(str(v).strip() for v in feedback['incorrect_options'].values()), f'{label}: explicar la correcta y los tres distractores.')
            require(after['is_active'] and after['validation_status'] == 'validated', f'{label}: propuesta aceptable debe declarar su estado final.')
        refs = item.get('references', [])
        require(bool(refs), f'{label}: falta fuente primaria o evidencia para la retirada.')
        for ref in refs:
            require(urlsplit(ref.get('url', '')).scheme == 'https' and bool(urlsplit(ref['url']).hostname) and bool(ref.get('locator')) and bool(ref.get('title')), f'{label}: referencia incompleta.')
            valid_date(ref.get('checked_at'))
        require(after.get('source', {}).get('editorial_references') == refs, f'{label}: referencias no sincronizadas con la propuesta.')
        valid_date(after.get('updated_at'))
        require(after.get('source', {}).get('editorial_revision_id') == batch['id'], f'{label}: falta el identificador de la revisión efectiva.')
    return batch


def validate_approval(batch, approval):
    require(approval.get('reviewer_type') == 'human' and all(str(approval.get(k, '')).strip() for k in ('reviewer', 'method', 'statement')), 'Falta aceptación humana identificada: revisor, método y declaración reales.')
    valid_date(approval.get('reviewed_at'))
    require(approval['reviewed_at'] >= batch['prepared_at'], 'La aceptación es anterior a la propuesta.')
    require(approval.get('batch_sha256') == digest(batch), 'La aceptación no corresponde al contenido exacto de este lote.')
    decisions = approval.get('decisions')
    if decisions is None:
        require(all(i['decision'] == 'accepted' for i in batch['items']), 'Hay preguntas sin aceptar; falta una decisión humana explícita para cada ID.')
    else:
        # A human may approve the exact pending proposal hash. Keep that snapshot
        # immutable and record acceptance alongside it, rather than fabricate a
        # different "approved" hash by rewriting the proposal's decision fields.
        require(isinstance(decisions, dict) and set(decisions) == {i['id'] for i in batch['items']}, 'La aceptación debe cubrir exactamente los IDs del lote aprobado.')
        require(all(value == 'accepted' for value in decisions.values()) and not any(i['decision'] == 'rejected' for i in batch['items']), 'El recibo no puede aplicar preguntas rechazadas ni decisiones pendientes.')


def materialize(batch, collections):
    """Validate everything in memory before touching any output."""
    validate_batch(batch)
    result = copy.deepcopy(collections)
    all_ids = {q['id'] for c in result.values() for q in c['questions']}
    for item in batch['items']:
        questions = result[item['bank']]['questions']
        matches = [n for n, q in enumerate(questions) if q['id'] == item['id']]
        require(len(matches) == 1, f"{item['id']}: ID ausente o duplicado en el banco.")
        index = matches[0]
        require(digest(questions[index]) == item['base_sha256'], f"{item['id']}: lote desactualizado; revise contra el banco actual.")
        if item['action'] == 'replace':
            require(item['after']['id'] not in all_ids, 'El ID del reemplazo ya existe.')
            retired = copy.deepcopy(questions[index])
            retired.update(is_active=False, validation_status='retired', updated_at=batch['prepared_at'])
            questions[index] = retired
            questions.append(copy.deepcopy(item['after']))
            all_ids.add(item['after']['id'])
        else:
            questions[index] = copy.deepcopy(item['after'])
    return result


def verify_ledger(root=ROOT, collections=None):
    """Verify the complete chain and return original snapshots for lineage checks."""
    ledger = load(root / LEDGER)
    require(ledger.get('version') == 1, 'Versión del historial editorial inválida.')
    collections = collections or banks(root)
    expected, original, ids = {}, {}, set()
    for entry in ledger['batches']:
        batch, approval = entry['batch'], entry['approval']
        validate_batch(batch)
        validate_approval(batch, approval)
        require(batch['id'] not in ids, 'Lote aplicado más de una vez.')
        ids.add(batch['id'])
        for item in batch['items']:
            key = item['id']
            if key in expected:
                require(digest(expected[key]) == item['base_sha256'], f'{key}: historial editorial discontinuo.')
            original.setdefault(key, item['before'])
            if item['action'] == 'replace':
                retired = copy.deepcopy(item['before'])
                retired.update(is_active=False, validation_status='retired', updated_at=batch['prepared_at'])
                require(item['after']['id'] not in expected, 'ID de reemplazo duplicado en historial.')
                expected[key] = retired
                expected[item['after']['id']] = item['after']
                original[item['after']['id']] = None
            else:
                expected[key] = item['after']
    current = {q['id']: q for c in collections.values() for q in c['questions']}
    for key, question in expected.items():
        require(key in current and digest(current[key]) == digest(question), f'{key}: banco distinto de la versión aceptada; no regenerar ni activar silenciosamente.')
    return original


def guard_regeneration(root=ROOT, target=None):
    """Importers must never erase a later accepted version or legacy manual edits."""
    if (root / LEDGER).is_file() and load(root / LEDGER)['batches']:
        raise ValueError('Hay revisiones editoriales aplicadas. No regenere el banco completo; use editorial_batches.py con versiones concretas.')
    if target and (root / target).exists():
        raise ValueError(f'{target} ya existe. No se sobrescribe un banco publicado; use propuestas versionadas con editorial_batches.py.')


def check_pilot_gate(root, batch, ledger):
    if batch['id'] == 'GSI-EDITORIAL-001':
        return
    require(any(b['batch']['id'] == 'GSI-EDITORIAL-001' for b in ledger['batches']), 'Debe revisar y aceptar el piloto antes de ampliar los lotes.')
    baseline = root / PROPOSALS / 'baseline.json'
    if baseline.is_file():
        pilot = set(load(baseline)['pilot_ids'])
        reviewed = {i['id'] for b in ledger['batches'] for i in b['batch']['items']}
        require(pilot.issubset(reviewed) or all(i['id'] in pilot - reviewed for i in batch['items']), 'Complete las decisiones del piloto antes de revisar el resto del banco.')


def apply_batch(root, batch, approval):
    validate_batch(batch)
    validate_approval(batch, approval)
    collections = banks(root)
    verify_ledger(root, collections)
    ledger = load(root / LEDGER)
    require(batch['id'] not in {b['batch']['id'] for b in ledger['batches']}, 'Este lote ya está aplicado.')
    check_pilot_gate(root, batch, ledger)
    updated = materialize(batch, collections)
    for bank in ('manual', 'ai'):
        if updated[bank] != collections[bank] and 'metadata' in updated[bank]:
            metadata = updated[bank]['metadata']
            major, minor, patch = map(int, metadata['data_version'].split('.'))
            metadata['data_version'] = f'{major}.{minor}.{patch + 1}'
            metadata['updated_at'] = approval['reviewed_at']
            validate_contract(updated[bank], load(ROOT / 'schemas/question.schema.json'))
    ledger['batches'].append({'batch': batch, 'approval': approval})
    paths = {root / f'data/questions-{bank}.json': updated[bank] for bank in ('manual', 'ai') if updated[bank] != collections[bank]}
    paths[root / LEDGER] = ledger
    # Roll back all files if any write fails; all preconditions were checked above.
    previous = {p: p.read_bytes() for p in paths}
    try:
        for p, value in paths.items():
            write(p, value)
    except OSError:
        for p, value in previous.items():
            p.write_bytes(value)
        raise


def render_batch(batch, approval=None):
    if approval is not None:
        validate_approval(batch, approval)
    status = 'revisión aplicada' if approval else 'revisión propuesta'
    notice = (f"**Aceptación humana registrada: {approval['reviewer']} · {approval['reviewed_at']}. Lote aplicado localmente.**" if approval else '**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**')
    hash_notice = ('Se conserva el hash de la propuesta aprobada; las decisiones efectivas están en el recibo de aceptación.' if approval else 'Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.')
    lines = [f"# {batch['id']} — {status}", '', f"Preparado: {batch['prepared_at']}. Preguntas: {len(batch['items'])}.", '',
             notice, '', f"Hash del lote: `{digest(batch)}`. {hash_notice}", '']
    for item in batch['items']:
        decision = approval.get('decisions', {}).get(item['id'], item['decision']) if approval else item['decision']
        lines += [f"## {item['id']}", '', f"Decisión: {decision} · acción: {item['action']}.", '', 'Motivo: ' + ' '.join(item['reasons']), '']
        for name in ('before', 'after'):
            q = item[name]
            lines += ['### ' + ('Antes' if name == 'before' else 'Propuesta'), '', q['statement'], '']
            lines += [f"- {o['id']}. {o['text']}" + (' **(correcta)**' if o['id'] == q['correct_option'] else '') for o in q['options']]
            lines += ['', 'Explicación: ' + q['feedback']['correct'], '']
            if name == 'after':
                lines += [f"- Error {key}: {value}" for key, value in q['feedback'].get('incorrect_options', {}).items()]
                lines += ['']
        lines += [f"- [{r['title']}]({r['url']}) · {r['locator']} · versión: {r.get('version', 'no declarada')} · comprobado: {r['checked_at']}" for r in item['references']]
        lines += ['', f"Partida: `{item['base_sha256']}` · propuesta: `{item['content_sha256']}`", '']
    return '\n'.join(lines)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--batch', type=Path)
    parser.add_argument('--approval', type=Path, help='Aceptación humana real ligada al hash del lote decidido.')
    parser.add_argument('--apply', action='store_true')
    parser.add_argument('--render', type=Path, help='Ficha Markdown del lote; rechaza una salida distinta existente.')
    args = parser.parse_args()
    try:
        verify_ledger()
        if args.batch:
            batch = validate_batch(load(args.batch))
            materialize(batch, banks())
            if args.render:
                receipt = next((entry for entry in load(ROOT / LEDGER)['batches'] if entry['batch']['id'] == batch['id']), None)
                text = render_batch(batch, receipt['approval'] if receipt else None)
                require(not args.render.exists() or args.render.read_text('utf-8') == text, 'La ficha de salida ya existe con contenido distinto; use otro nombre.')
                args.render.parent.mkdir(parents=True, exist_ok=True)
                args.render.write_text(text, 'utf-8')
            if args.apply:
                require(args.approval is not None, 'Aplique únicamente tras recibir aceptación humana del lote concreto; falta --approval.')
                apply_batch(ROOT, batch, load(args.approval))
                print('Lote aplicado. Regenere informes/exportación y ejecute run_gsi_suite.py antes de entregar.')
            else:
                print(f"OK: simulación de {len(batch['items'])} preguntas; cero cambios en bancos. SHA-256 {digest(batch)}")
        else:
            require(not args.apply and not args.approval and not args.render, 'Falta --batch.')
            for path in sorted((ROOT / PROPOSALS).glob('lote-*.json')):
                batch = validate_batch(load(path))
                applied = {b['batch']['id'] for b in load(ROOT / LEDGER)['batches']}
                if batch['id'] not in applied:
                    check_pilot_gate(ROOT, batch, load(ROOT / LEDGER))
                    materialize(batch, banks())
                else:
                    receipt = next(b for b in load(ROOT / LEDGER)['batches'] if b['batch']['id'] == batch['id'])
                    require(digest(receipt['batch']) == digest(batch), 'La propuesta aplicada difiere del historial aceptado.')
            print('OK: historial y propuestas editoriales íntegros. La aceptación editorial pendiente se informa por separado.')
        return 0
    except (ValueError, KeyError, TypeError, OSError) as error:
        print(f'ERROR editorial: {error}')
        return 1


if __name__ == '__main__':
    raise SystemExit(main())
