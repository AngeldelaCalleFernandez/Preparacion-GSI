#!/usr/bin/env python3
"""Build Phase 7 topic fragments, index and coverage report."""

from __future__ import annotations

from topic_content_lib import ROOT, TopicContentError, build_artifacts, write_artifacts


def main() -> int:
    try:
        artifacts = build_artifacts(ROOT)
        write_artifacts(artifacts, ROOT)
    except TopicContentError as error:
        print(f"ERROR: {error}")
        return 1
    print(f"OK: generados {len(artifacts.topics)} fragmentos, índice e informe de cobertura de Fase 7B.2.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
