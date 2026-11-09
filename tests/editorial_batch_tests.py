"""Exercise editorial writes only in temporary directories with fictional receipts."""
import copy
import contextlib
import io
import sys
import tempfile
import unittest
from unittest.mock import patch
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
from editorial_batches import RUBRIC, LEDGER, apply_batch, banks, digest, guard_regeneration, load, materialize, validate_approval, validate_batch, verify_ledger, write
from prepare_editorial_pilot import PROPOSALS, REFINED_IDS, refresh_pending_proposal, render_batch
from editorial_batches import main as editorial_main, render_batch as render_editorial_batch


def fixture(bank='manual'):
    before = load(ROOT / f'data/questions-{bank}.json')['questions'][0]
    after = copy.deepcopy(before)
    refs = [{'title': 'Test-only evidence', 'url': 'https://example.org/evidence', 'locator': 'Test fixture', 'version': None, 'checked_at': '2026-10-26'}]
    after['feedback']['incorrect_options'] = {o['id']: 'Fictional test explanation.' for o in after['options'] if o['id'] != after['correct_option']}
    after['source']['editorial_references'] = refs
    after['source']['editorial_revision_id'] = 'GSI-EDITORIAL-001'
    after['updated_at'] = '2026-10-26'
    item = {'id': before['id'], 'bank': bank, 'action': 'revise', 'decision': 'accepted', 'base_sha256': digest(before), 'content_sha256': digest(after), 'before': before, 'after': after, 'references': refs, 'reasons': ['Test-only reason.'], 'rubric': dict.fromkeys(RUBRIC, True)}
    batch = {'version': 1, 'id': 'GSI-EDITORIAL-001', 'prepared_at': '2026-10-26', 'baseline_commit': 'a32323c', 'items': [item]}
    approval = {'reviewer': 'FICTIONAL TEST FIXTURE', 'reviewer_type': 'human', 'reviewed_at': '2026-10-26', 'method': 'Automated test, not a real approval.', 'statement': 'FICTIONAL TEST RECEIPT', 'batch_sha256': digest(batch)}
    return batch, approval


class BatchTests(unittest.TestCase):
    def setUp(self):
        (ROOT / 'tmp').mkdir(exist_ok=True)
        self.tmp = tempfile.TemporaryDirectory(dir=ROOT / 'tmp')
        self.root = Path(self.tmp.name)
        self.batch, self.approval = fixture()
        for bank in ('manual', 'ai', 'official'):
            write(self.root / f'data/questions-{bank}.json', {'questions': [self.batch['items'][0]['before']] if bank == 'manual' else []})
        write(self.root / LEDGER, {'version': 1, 'batches': []})

    def tearDown(self):
        assert self.root.resolve().is_relative_to((ROOT / 'tmp').resolve())
        self.tmp.cleanup()

    def snapshot(self):
        return {p.name: p.read_bytes() for p in (self.root / 'data').glob('*.json')}

    def test_simulation_and_validation_do_not_write(self):
        before = self.snapshot()
        materialize(self.batch, banks(self.root))
        self.assertEqual(before, self.snapshot())

    def test_literal_render_preserves_question_text_and_source_links(self):
        item = self.batch['items'][0]
        item['after']['statement'] = '<p>Uno<br>Dos</p> con `meta charset` & datos.'
        item['after']['options'][0]['text'] = '<head>.'
        item['after']['feedback']['correct'] = 'Texto literal: **énfasis** y [referencia].'
        item['references'][0]['url'] += '?first=1&second=2'
        before = digest(self.batch)
        legacy = render_editorial_batch(self.batch)
        literal = render_editorial_batch(self.batch, literal_content=True)
        self.assertIn('<p>Uno<br>Dos</p>', legacy)
        self.assertIn('&lt;p&gt;Uno&lt;br&gt;Dos&lt;/p&gt; con \\`meta charset\\` &amp; datos.', literal)
        self.assertIn('&lt;head&gt;.', literal)
        self.assertIn('\\*\\*énfasis\\*\\* y \\[referencia\\].', literal)
        self.assertIn('[Test-only evidence](https://example.org/evidence?first=1&second=2)', literal)
        self.assertEqual(before, digest(self.batch))
        self.assertEqual(legacy, render_editorial_batch(self.batch, literal_content=False))

    def test_literal_cli_requires_render_target(self):
        with patch('sys.argv', ['editorial_batches.py', '--literal-content']):
            with contextlib.redirect_stderr(io.StringIO()) as stderr:
                with self.assertRaises(SystemExit) as error:
                    editorial_main()
        self.assertEqual(error.exception.code, 2)
        self.assertIn('--literal-content requiere --render', stderr.getvalue())

    def test_human_receipt_and_exact_decisions_required(self):
        for change in ({'reviewer_type': 'ai'}, {'reviewer': ''}, {'batch_sha256': '0' * 64}, {'reviewed_at': '2026-10-25'}):
            with self.subTest(change=change), self.assertRaises(ValueError):
                validate_approval(self.batch, {**self.approval, **change})
        self.batch['items'][0]['decision'] = 'pending_review'
        self.approval['batch_sha256'] = digest(self.batch)
        with self.assertRaises(ValueError): validate_approval(self.batch, self.approval)

    def test_changed_text_invalidates_content_and_approval(self):
        self.batch['items'][0]['after']['statement'] += ' Changed.'
        with self.assertRaises(ValueError): validate_batch(self.batch)
        self.batch['items'][0]['content_sha256'] = digest(self.batch['items'][0]['after'])
        with self.assertRaises(ValueError): validate_approval(self.batch, self.approval)

    def test_explicit_receipt_accepts_exact_pending_snapshot_without_rehashing(self):
        item = self.batch['items'][0]
        item['decision'] = 'pending_review'
        approved_hash = digest(self.batch)
        self.approval.update(batch_sha256=approved_hash, decisions={item['id']: 'accepted'})
        apply_batch(self.root, self.batch, self.approval)
        receipt = load(self.root / LEDGER)['batches'][0]
        self.assertEqual(digest(receipt['batch']), approved_hash)
        self.assertEqual(receipt['batch']['items'][0]['decision'], 'pending_review')
        self.assertEqual(receipt['approval']['decisions'], {item['id']: 'accepted'})
        self.assertEqual(banks(self.root)['manual']['questions'][0], item['after'])

    def test_receipt_cannot_accept_other_ids_rejections_or_changed_content(self):
        item = self.batch['items'][0]
        item['decision'] = 'pending_review'
        self.approval['batch_sha256'] = digest(self.batch)
        for decisions in ({}, {'OTHER-ID': 'accepted'}, {item['id']: 'pending_review'}, {item['id']: 'rejected'}):
            with self.subTest(decisions=decisions), self.assertRaises(ValueError):
                validate_approval(self.batch, {**self.approval, 'decisions': decisions})
        self.approval['decisions'] = {item['id']: 'accepted'}
        item['after']['statement'] += ' Unauthorized change.'
        item['content_sha256'] = digest(item['after'])
        with self.assertRaises(ValueError): validate_approval(self.batch, self.approval)

    def test_stale_bank_rejected_without_partial_writes(self):
        current = banks(self.root)['manual']
        current['questions'][0]['statement'] += ' New version.'
        write(self.root / 'data/questions-manual.json', current)
        before = self.snapshot()
        with self.assertRaises(ValueError): apply_batch(self.root, self.batch, self.approval)
        self.assertEqual(before, self.snapshot())

    def test_apply_is_exact_and_official_bank_unchanged(self):
        official = (self.root / 'data/questions-official.json').read_bytes()
        apply_batch(self.root, self.batch, self.approval)
        self.assertEqual(banks(self.root)['manual']['questions'][0], self.batch['items'][0]['after'])
        self.assertEqual((self.root / 'data/questions-official.json').read_bytes(), official)
        self.assertEqual(verify_ledger(self.root)[self.batch['items'][0]['id']], self.batch['items'][0]['before'])
        with self.assertRaises(ValueError): apply_batch(self.root, self.batch, self.approval)
        with self.assertRaises(ValueError): guard_regeneration(self.root)

    def test_later_edit_cannot_reuse_accepted_receipt(self):
        apply_batch(self.root, self.batch, self.approval)
        current = banks(self.root)['manual']
        current['questions'][0]['feedback']['correct'] += ' Changed.'
        write(self.root / 'data/questions-manual.json', current)
        with self.assertRaises(ValueError): verify_ledger(self.root)

    def test_replacement_retires_old_id_and_preserves_snapshot(self):
        item = self.batch['items'][0]
        item['action'] = 'replace'
        item['after']['id'] += '-REV2'
        item['after']['source']['replaces_question_id'] = item['id']
        item['content_sha256'] = digest(item['after'])
        self.approval['batch_sha256'] = digest(self.batch)
        apply_batch(self.root, self.batch, self.approval)
        qs = banks(self.root)['manual']['questions']
        self.assertEqual(len(qs), 2)
        self.assertEqual(qs[0]['validation_status'], 'retired')
        self.assertFalse(qs[0]['is_active'])
        self.assertIsNone(verify_ledger(self.root)[item['after']['id']])

    def test_bad_distractor_feedback_and_key_change_are_rejected(self):
        item = self.batch['items'][0]
        item['after']['feedback']['incorrect_options'] = {}
        item['content_sha256'] = digest(item['after'])
        with self.assertRaises(ValueError): validate_batch(self.batch)
        self.batch, _ = fixture()
        item = self.batch['items'][0]
        item['after']['correct_option'] = next(o['id'] for o in item['after']['options'] if o['id'] != item['after']['correct_option'])
        item['content_sha256'] = digest(item['after'])
        with self.assertRaises(ValueError): validate_batch(self.batch)

    def test_original_source_cannot_be_relabelled(self):
        item = self.batch['items'][0]
        item['after']['source']['locator'] = 'Invented location'
        item['content_sha256'] = digest(item['after'])
        with self.assertRaises(ValueError): validate_batch(self.batch)

    def test_ai_version_keeps_original_draft_and_acceptance_as_history(self):
        self.batch, self.approval = fixture('ai')
        before = self.batch['items'][0]['before']
        write(self.root / 'data/questions-manual.json', {'questions': []})
        write(self.root / 'data/questions-ai.json', {'questions': [before]})
        apply_batch(self.root, self.batch, self.approval)
        after = banks(self.root)['ai']['questions'][0]
        self.assertEqual(after['source']['record_sha256'], before['source']['record_sha256'])
        self.assertEqual(after['source']['evidence_sha256'], before['source']['evidence_sha256'])
        self.assertEqual(verify_ledger(self.root)[before['id']], before)
        self.assertNotEqual(digest(after), digest(before))

    def test_write_failure_rolls_back_entire_batch(self):
        before = self.snapshot()
        original_write = write
        count = 0
        def failing_write(path, value):
            nonlocal count
            count += 1
            if count == 2: raise OSError('Test-only disk failure')
            original_write(path, value)
        with patch('editorial_batches.write', side_effect=failing_write), self.assertRaises(OSError):
            apply_batch(self.root, self.batch, self.approval)
        self.assertEqual(before, self.snapshot())

    def test_batch_larger_than_twenty_is_rejected(self):
        self.batch['items'] *= 21
        with self.assertRaises(ValueError): validate_batch(self.batch)

    def test_application_increments_a_schema_compatible_dataset_version(self):
        current = banks(self.root)['manual']
        metadata = copy.deepcopy(load(ROOT / 'data/questions-manual.json')['metadata'])
        metadata['data_version'] = '2.1.9'
        current['metadata'] = metadata
        write(self.root / 'data/questions-manual.json', current)
        apply_batch(self.root, self.batch, self.approval)
        updated = banks(self.root)['manual']['metadata']
        self.assertEqual(updated['data_version'], '2.1.10')
        self.assertEqual(updated['updated_at'], self.approval['reviewed_at'])

    def prepare_refresh_fixture(self):
        batch = load(ROOT / PROPOSALS / 'lote-001.json')
        old = copy.deepcopy(batch)
        item = next(i for i in old['items'] if i['id'] in REFINED_IDS)
        item['after']['feedback']['correct'] += ' Test-only previous proposal.'
        item['content_sha256'] = digest(item['after'])
        for bank in ('manual', 'ai', 'official'):
            write(self.root / f'data/questions-{bank}.json', {'questions': [i['before'] for i in batch['items'] if i['bank'] == bank]})
        write(self.root / PROPOSALS / 'lote-001.json', old)
        (self.root / 'docs').mkdir(exist_ok=True)
        (self.root / 'docs/GSI_REVISION_PILOTO_001.md').write_text(render_batch(old), 'utf-8')
        return old, batch

    def test_refresh_archives_previous_proposal_without_touching_banks(self):
        old, batch = self.prepare_refresh_fixture()
        before = self.snapshot()
        old_bytes = (self.root / PROPOSALS / 'lote-001.json').read_bytes()
        refresh_pending_proposal(self.root, batch)
        self.assertEqual(load(self.root / PROPOSALS / 'lote-001.json'), batch)
        self.assertEqual((self.root / PROPOSALS / 'history' / digest(old) / 'lote-001.json').read_bytes(), old_bytes)
        self.assertEqual(self.snapshot(), before)
        refresh_pending_proposal(self.root, batch)  # A repeated refresh is idempotent.
        self.assertEqual(self.snapshot(), before)

    def test_refresh_refuses_changes_outside_the_four_authorized_ids(self):
        old, batch = self.prepare_refresh_fixture()
        item = next(i for i in batch['items'] if i['id'] not in REFINED_IDS)
        item['after']['feedback']['correct'] += ' Test-only unauthorized change.'
        item['content_sha256'] = digest(item['after'])
        before = (self.root / PROPOSALS / 'lote-001.json').read_bytes()
        with self.assertRaises(ValueError): refresh_pending_proposal(self.root, batch)
        self.assertEqual((self.root / PROPOSALS / 'lote-001.json').read_bytes(), before)
        self.assertFalse((self.root / PROPOSALS / 'history').exists())


if __name__ == '__main__':
    unittest.main()
