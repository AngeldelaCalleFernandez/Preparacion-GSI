#!/usr/bin/env python3
"""Validate heading hierarchy in the 57 generated topic Markdown and HTML files."""

from __future__ import annotations

import re
from html.parser import HTMLParser
from pathlib import Path

from topic_heading_policy import HEADING, FENCE, is_probable_body_text


ROOT = Path(__file__).resolve().parents[1]


class HeadingParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.current: str | None = None
        self.buffer: list[str] = []
        self.headings: list[tuple[str, str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if re.fullmatch(r"h[1-6]", tag):
            self.current = tag
            self.buffer = []

    def handle_data(self, data: str) -> None:
        if self.current:
            self.buffer.append(data)

    def handle_endtag(self, tag: str) -> None:
        if self.current == tag:
            self.headings.append((tag, " ".join("".join(self.buffer).split())))
            self.current = None
            self.buffer = []


def markdown_headings(path: Path) -> list[tuple[int, int, str]]:
    headings = []
    in_fence = False
    fence_marker = ""
    for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
        fence = FENCE.match(line)
        if fence:
            marker = fence.group(1)[0]
            if not in_fence:
                in_fence = True
                fence_marker = marker
            elif marker == fence_marker:
                in_fence = False
                fence_marker = ""
            continue
        match = None if in_fence else HEADING.match(line)
        if match:
            headings.append((number, len(match.group("marks")), match.group("text")))
    return headings


def main() -> int:
    errors: list[str] = []
    markdown_files = sorted((ROOT / "content/topics").glob("B[1-4]-T??.md"))
    html_files = sorted((ROOT / "content/generated").glob("B[1-4]-T??.html"))
    if len(markdown_files) != 57 or len(html_files) != 57:
        errors.append(f"se esperaban 57 Markdown y 57 HTML; hay {len(markdown_files)} y {len(html_files)}")
    for path in markdown_files:
        headings = markdown_headings(path)
        h1 = [heading for heading in headings if heading[1] == 1]
        if len(h1) != 1 or h1[0][0] != 1:
            errors.append(f"{path.relative_to(ROOT)} debe contener un único H1 en la primera línea")
        for line, level, text in headings:
            if level > 1 and is_probable_body_text(text):
                errors.append(f"{path.relative_to(ROOT)}:{line} contiene prosa extensa como H{level}")
        previous = 0
        for line, level, _ in headings:
            if previous and level > previous + 1:
                errors.append(f"{path.relative_to(ROOT)}:{line} salta de H{previous} a H{level}")
            previous = level

    for path in html_files:
        parser = HeadingParser()
        parser.feed(path.read_text(encoding="utf-8"))
        if any(tag == "h1" for tag, _ in parser.headings):
            errors.append(f"{path.relative_to(ROOT)} incluye un H1 dentro del fragmento")
        for tag, text in parser.headings:
            if tag in {"h2", "h3"} and is_probable_body_text(text):
                errors.append(f"{path.relative_to(ROOT)} contiene prosa extensa como {tag.upper()}")

    if errors:
        print("\n".join(f"ERROR: {error}" for error in errors))
        return 1
    print("OK: 57 Markdown con un único H1 y 57 HTML sin encabezados-frase ni saltos de jerarquía.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
