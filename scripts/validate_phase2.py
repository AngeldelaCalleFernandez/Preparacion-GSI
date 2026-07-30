#!/usr/bin/env python3
"""Run every Phase 2 validation without modifying project data."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
COMMANDS = (
    ("validate_json.py",),
    ("validate_questions.py",),
    ("validate_references.py",),
    ("build_catalog.py", "--check"),
)


def main() -> int:
    failed = False
    for arguments in COMMANDS:
        command = [sys.executable, str(ROOT / "scripts" / arguments[0]), *arguments[1:]]
        print(f"==> {' '.join(command)}")
        result = subprocess.run(command, cwd=ROOT, check=False)
        failed = failed or result.returncode != 0
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
