#!/usr/bin/env python3
"""Shared policy for separating topic headings from paragraphs styled as headings."""

from __future__ import annotations

import re


HEADING = re.compile(r"^(?P<marks>#{1,6})\s+(?P<text>.+?)\s*$")
FENCE = re.compile(r"^\s*(`{3,}|~{3,})")


def plain_heading_text(value: str) -> str:
    text = re.sub(r"!\[([^]]*)\]\([^)]+\)", r"\1", value)
    text = re.sub(r"\[([^]]+)\]\([^)]+\)", r"\1", text)
    text = re.sub(r"[*_`~]+", "", text)
    return re.sub(r"\s+", " ", text).strip()


def is_probable_body_text(value: str) -> bool:
    """Detect prose accidentally carrying a heading style; never rewrites its words."""
    text = plain_heading_text(value)
    words = re.findall(r"[0-9A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:[./+-][0-9A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*", text)
    return len(text) >= 100 or len(words) >= 14


def normalize_markdown_headings(markdown: str) -> tuple[str, dict[str, int]]:
    """Keep one document H1 external to this fragment and demote prose to paragraphs."""
    lines: list[str] = []
    in_fence = False
    stats = {"h1_to_h2": 0, "heading_to_paragraph": 0}
    fence_marker = ""
    for line in markdown.splitlines():
        fence = FENCE.match(line)
        if fence:
            marker = fence.group(1)[0]
            if not in_fence:
                in_fence = True
                fence_marker = marker
            elif marker == fence_marker:
                in_fence = False
                fence_marker = ""
            lines.append(line)
            continue
        match = None if in_fence else HEADING.match(line)
        if not match:
            lines.append(line)
            continue
        level = len(match.group("marks"))
        text = match.group("text")
        if is_probable_body_text(text):
            lines.append(text)
            stats["heading_to_paragraph"] += 1
        elif level == 1:
            lines.append(f"## {text}")
            stats["h1_to_h2"] += 1
        else:
            lines.append(line)
    return "\n".join(lines), stats
