#!/usr/bin/env python3
"""Unit and regression checks for Phase 7B.1 acquisition controls."""

from __future__ import annotations

from copy import deepcopy
from hashlib import sha256
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

import technical_source_lib as lib
from jsonschema import Draft202012Validator


def source() -> dict[str, object]:
    return {
        "sourceId": "SRC-TECH-EXAMPLE", "documentId": "DOC-TECH-EXAMPLE", "title": "Example", "publisher": "Example",
        "sourceType": "rfc", "authorityStatus": "official-primary", "canonicalUrl": "https://example.test/file.txt",
        "metadataUrl": "https://example.test/info", "version": "RFC 9999", "normativeFormat": "text/plain",
        "publicationStage": "rfc", "publicationStatus": "candidate", "supersededBy": None, "primary": True,
        "acquisitionMode": "automated", "license": {"status": "public-permitted", "evidenceUrl": "https://example.test/license", "notes": "test"},
        "redistributionStatus": "public", "localAvailability": "public", "blockIds": ["B4"], "topicIds": ["B4-T08"],
        "verifiedLocators": [{"label": "intro", "locator": "Section 1"}], "revisions": [],
        "plannedRevision": {"revisionId": "SRC-TECH-EXAMPLE@2026-08-04", "retrievedAt": "2026-08-04", "downloadUrl": "https://example.test/file.txt", "targetPath": "documents/sources/technical/public/B4-T08/example.txt", "expectedMediaTypes": ["text/plain"], "maxBytes": 16, "titleObserved": "Example", "updatedAtObserved": None}, "notes": "test"
    }


class Headers(dict):
    def get(self, key, default=None):  # type: ignore[no-untyped-def]
        return super().get(key, default)


class Response:
    def __init__(self, data: bytes, url: str = "https://example.test/file.txt", media: str = "text/plain") -> None:
        self.data, self.offset, self.url = data, 0, url
        self.headers = Headers({"Content-Type": media, "Content-Length": str(len(data))})

    def read(self, size: int) -> bytes:
        part = self.data[self.offset:self.offset + size]
        self.offset += len(part)
        return part

    def geturl(self) -> str:
        return self.url

    def close(self) -> None:
        pass


class Opener:
    def __init__(self, result) -> None:  # type: ignore[no-untyped-def]
        self.result = result

    def open(self, request, timeout):  # type: ignore[no-untyped-def]
        if isinstance(self.result, Exception):
            raise self.result
        return self.result


class Tests(unittest.TestCase):
    def semantic(self, mutate):  # type: ignore[no-untyped-def]
        item = source(); mutate(item)
        return lib.validate_manifest_semantics({"sources": [item]})

    def test_01_public_path(self): self.assertTrue(lib.is_relative_technical_path("documents/sources/technical/public/B4-T08/a.txt", availability="public"))
    def test_02_private_path(self): self.assertTrue(lib.is_relative_technical_path("documents/sources/technical/private/B2-T04/a.html", availability="private"))
    def test_03_windows_path_rejected(self): self.assertFalse(lib.is_relative_technical_path("C:\\a.txt"))
    def test_04_parent_path_rejected(self): self.assertFalse(lib.is_relative_technical_path("documents/sources/technical/public/../a.txt"))
    def test_05_absolute_path_rejected(self): self.assertFalse(lib.is_relative_technical_path("/documents/sources/technical/public/a.txt"))
    def test_06_dry_summary(self): self.assertEqual(lib.planned_summary(source())["sourceId"], "SRC-TECH-EXAMPLE")
    def test_07_manual_is_not_automated(self):
        item = source(); item["acquisitionMode"] = "manual"
        with self.assertRaisesRegex(lib.TechnicalSourceError, "manual-acquisition-required"): lib.download_to_staging(item, opener=Opener(Response(b"x")))
    def test_08_download_stages_only(self):
        with tempfile.TemporaryDirectory() as temp, patch.object(lib, "STAGING_ROOT", Path(temp)):
            receipt = lib.download_to_staging(source(), opener=Opener(Response(b"hello")))
            self.assertEqual(receipt.sha256, sha256(b"hello").hexdigest())
            self.assertTrue((Path(temp) / "SRC-TECH-EXAMPLE" / "payload").is_file())
    def test_09_final_host_rejected(self):
        with self.assertRaisesRegex(lib.TechnicalSourceError, "URL final no permitida"): lib.download_to_staging(source(), opener=Opener(Response(b"x", "https://evil.test/x")))
    def test_10_network_error(self):
        with self.assertRaisesRegex(lib.TechnicalSourceError, "No se pudo descargar"): lib.download_to_staging(source(), opener=Opener(OSError("offline")))
    def test_11_media_error(self):
        with self.assertRaisesRegex(lib.TechnicalSourceError, "Tipo de medio inesperado"): lib.download_to_staging(source(), opener=Opener(Response(b"x", media="text/html")))
    def test_12_size_error(self):
        with self.assertRaisesRegex(lib.TechnicalSourceError, "supera el límite"): lib.download_to_staging(source(), opener=Opener(Response(b"012345678901234567")))
    def test_13_obsolete_requires_successor(self):
        self.assertTrue(any("supersededBy" in x for x in self.semantic(lambda x: x.update(publicationStatus="obsolete", primary=False))))
    def test_14_obsolete_not_primary(self):
        self.assertTrue(any("obsoleta" in x for x in self.semantic(lambda x: x.update(publicationStatus="obsolete", supersededBy="SRC-TECH-X"))))
    def test_15_draft_not_current(self):
        self.assertTrue(any("Internet-Draft" in x for x in self.semantic(lambda x: x.update(publicationStage="internet-draft", publicationStatus="current"))))
    def test_16_duplicate_ids(self): self.assertTrue(any("duplicado" in x for x in lib.validate_manifest_semantics({"sources": [source(), deepcopy(source())]})))
    def test_17_block_topic(self): self.assertTrue(any("bloque distinto" in x for x in self.semantic(lambda x: x.update(topicIds=["B3-T07"]))))
    def test_18_current_needs_revision(self): self.assertTrue(any("no tiene una revisión" in x for x in self.semantic(lambda x: x.update(publicationStatus="current"))))
    def test_19_ecma_html(self): self.assertTrue(any("ECMA-262" in x for x in self.semantic(lambda x: x.update(sourceId="SRC-TECH-ECMA-262-2026", normativeFormat="application/pdf"))))
    def test_20_private_is_not_required_publicly(self):
        errors = self.semantic(lambda x: x.update(localAvailability="private", redistributionStatus="private"))
        self.assertFalse(any("falta el activo private" in x for x in errors))
    def test_21_checksum(self):
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "x"; path.write_bytes(b"same")
            self.assertEqual(lib.sha256_file(path), sha256(b"same").hexdigest())
    def test_22_rfc_8446_not_primary(self):
        self.assertTrue(any("RFC 8446" in x for x in self.semantic(lambda x: x.update(sourceId="SRC-TECH-IETF-RFC-8446"))))
    def test_23_receipt_path_is_relative(self):
        self.assertTrue(lib.is_relative_technical_path(source()["plannedRevision"]["targetPath"]))
    def test_24_historical_source_schema_is_accepted(self):
        schema = json.loads((lib.ROOT / "schemas/source.schema.json").read_text(encoding="utf-8"))
        catalog = json.loads((lib.ROOT / "data/sources.json").read_text(encoding="utf-8"))
        historic = next(item for item in catalog["sources"] if "documents" in item)
        self.assertFalse(list(Draft202012Validator(schema).iter_errors({"metadata": catalog["metadata"], "sources": [historic]})))
    def test_25_historical_source_cannot_claim_technical_kind(self):
        schema = json.loads((lib.ROOT / "schemas/source.schema.json").read_text(encoding="utf-8"))
        catalog = json.loads((lib.ROOT / "data/sources.json").read_text(encoding="utf-8"))
        historic = deepcopy(next(item for item in catalog["sources"] if "documents" in item)); historic["sourceKind"] = "technical-primary-source"
        self.assertTrue(list(Draft202012Validator(schema).iter_errors({"metadata": catalog["metadata"], "sources": [historic]})))
    def test_26_technical_source_cannot_pose_as_markdown(self):
        schema = json.loads((lib.ROOT / "schemas/source.schema.json").read_text(encoding="utf-8"))
        catalog = json.loads((lib.ROOT / "data/sources.json").read_text(encoding="utf-8"))
        technical = deepcopy(next(item for item in catalog["sources"] if item.get("sourceKind"))); technical["documents"] = []
        self.assertTrue(list(Draft202012Validator(schema).iter_errors({"metadata": catalog["metadata"], "sources": [technical]})))
    def test_27_schema_keeps_additional_properties_closed(self):
        schema = json.loads((lib.ROOT / "schemas/source.schema.json").read_text(encoding="utf-8"))
        catalog = json.loads((lib.ROOT / "data/sources.json").read_text(encoding="utf-8"))
        technical = deepcopy(next(item for item in catalog["sources"] if item.get("sourceKind"))); technical["unexpected"] = True
        self.assertTrue(list(Draft202012Validator(schema).iter_errors({"metadata": catalog["metadata"], "sources": [technical]})))


if __name__ == "__main__": unittest.main(verbosity=2)
