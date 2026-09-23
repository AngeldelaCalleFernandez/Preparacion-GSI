#!/usr/bin/env python3
"""Run every maintained GSI check. Exit 0 ready, 1 technical failure, 2 editorial gate."""
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import time
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parents[1]


def validation_python():
    candidates = [
        Path(sys.executable),
        ROOT / '.venv/Scripts/python.exe',
        ROOT / '.venv/bin/python',
    ]
    for candidate in candidates:
        if not candidate.is_file():
            continue
        probe = subprocess.run(
            [str(candidate), '-c', 'import jsonschema'],
            cwd=ROOT,
            capture_output=True,
            timeout=20,
        )
        if probe.returncode == 0:
            return str(candidate)
    return sys.executable


def main():
    env = os.environ.copy()
    env['PYTHONIOENCODING'] = 'utf-8'
    node = shutil.which('node')
    bundled = Path.home() / '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'
    if not env.get('PLAYWRIGHT_MODULE') and bundled.is_file():
        env['PLAYWRIGHT_MODULE'] = str(bundled)
    python = validation_python()
    if Path(python).resolve() != Path(sys.executable).resolve():
        print(f'Python de validación: {Path(python).relative_to(ROOT)}', flush=True)
    stages = [
        ('Integridad y cobertura GSI', [python, 'scripts/validate_gsi_final.py']),
        ('JSON y esquemas', [python, 'scripts/validate_json.py']),
        ('Referencias', [python, 'scripts/validate_references.py']),
        ('Preguntas', [python, 'scripts/validate_questions.py']),
        ('Calidad objetiva de preguntas', [python, 'scripts/audit_question_quality.py']),
    ]
    results = []
    if node:
        js_files = sorted(set((ROOT / 'assets/js').glob('*.js')) | set((ROOT / 'tests').glob('*.js')) | set((ROOT / 'tests').glob('*.mjs')))
        stages.extend((f'Sintaxis {p.relative_to(ROOT).as_posix()}', [node, '--check', str(p)]) for p in js_files)
        stages.extend((name, [node, script]) for name, script in [
            ('Unitarias GSI', 'tests/gsi-unit.mjs'),
            ('Regresión en navegador', 'tests/gsi-regression.mjs'),
            ('Recorrido funcional HTTP', 'tests/gsi-smoke.mjs'),
        ])
    else:
        results.append({'name': 'Node.js', 'exit_code': 1, 'output': 'Instala Node.js y vuelve a ejecutar la suite; las pruebas JavaScript no se han ejecutado.'})
    for name, command in stages:
        started = time.monotonic()
        try:
            result = subprocess.run(command, cwd=ROOT, env=env, capture_output=True, text=True, encoding='utf-8', errors='replace', timeout=240)
            code, output = result.returncode, (result.stdout + result.stderr).strip()
        except (OSError, subprocess.TimeoutExpired) as error:
            code, output = 1, str(error)
        results.append({'name': name, 'command': command, 'exit_code': code, 'seconds': round(time.monotonic() - started, 2), 'output': output})
        if not name.startswith('Sintaxis') or code:
            print(f'{name}: código {code}', flush=True)
            if output:
                print(output, flush=True)
    technical = any(r['exit_code'] != 0 and not (r['name'] == 'Integridad y cobertura GSI' and r['exit_code'] == 2) for r in results)
    pending = any(r['name'] == 'Integridad y cobertura GSI' and r['exit_code'] == 2 for r in results)
    code = 1 if technical else 2 if pending else 0
    report = {'date': datetime.now(timezone.utc).isoformat(), 'exit_code': code, 'technical_pass': not technical, 'release_ready': code == 0, 'stages': results}
    (ROOT / 'logs').mkdir(exist_ok=True)
    (ROOT / 'logs/gsi-suite.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'Suite completa: código {code}. Informe: logs/gsi-suite.json', flush=True)
    return code


if __name__ == '__main__':
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    raise SystemExit(main())
