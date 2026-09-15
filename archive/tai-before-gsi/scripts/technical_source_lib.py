#!/usr/bin/env python3
"""Shared, side-effect-limited helpers for Phase 7B.1 technical sources."""

from __future__ import annotations

from dataclasses import dataclass
from hashlib import sha256
import json
import mimetypes
import os
from pathlib import Path, PurePosixPath
import shutil
import tempfile
from typing import Any
from urllib.parse import urlparse
from urllib.request import HTTPRedirectHandler, Request, build_opener


ROOT = Path(__file__).resolve().parents[1]
MANIFEST_PATH = ROOT / "documents" / "sources" / "technical" / "manifest.json"
STAGING_ROOT = ROOT / "tmp" / "technical-source-staging"
PUBLIC_PREFIX = "documents/sources/technical/public/"
PRIVATE_PREFIX = "documents/sources/technical/private/"


class TechnicalSourceError(ValueError):
    """A controlled validation or acquisition failure."""


@dataclass(frozen=True)
class AcquisitionReceipt:
    source_id: str
    revision_id: str
    staged_path: str
    final_path: str
    final_url: str
    host: str
    media_type: str
    size_bytes: int
    sha256: str

    def as_dict(self) -> dict[str, object]:
        return {
            "sourceId": self.source_id,
            "revisionId": self.revision_id,
            "stagedPath": self.staged_path,
            "finalPath": self.final_path,
            "finalUrl": self.final_url,
            "host": self.host,
            "mediaType": self.media_type,
            "sizeBytes": self.size_bytes,
            "sha256": self.sha256,
        }


def load_json(path: Path) -> object:
    with path.open(encoding="utf-8") as stream:
        return json.load(stream)


def write_json_atomic(path: Path, payload: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile("w", encoding="utf-8", delete=False, dir=path.parent, newline="\n") as stream:
        json.dump(payload, stream, ensure_ascii=False, indent=2)
        stream.write("\n")
        temporary = Path(stream.name)
    os.replace(temporary, path)


def load_manifest() -> dict[str, Any]:
    payload = load_json(MANIFEST_PATH)
    if not isinstance(payload, dict):
        raise TechnicalSourceError("El manifiesto técnico debe ser un objeto JSON.")
    return payload


def sha256_file(path: Path) -> str:
    digest = sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 128), b""):
            digest.update(chunk)
    return digest.hexdigest()


def is_relative_technical_path(value: object, *, availability: str | None = None) -> bool:
    if not isinstance(value, str) or "\\" in value or value.startswith("/"):
        return False
    path = PurePosixPath(value)
    if ".." in path.parts:
        return False
    allowed = (PUBLIC_PREFIX, PRIVATE_PREFIX)
    if availability == "public":
        allowed = (PUBLIC_PREFIX,)
    elif availability == "private":
        allowed = (PRIVATE_PREFIX,)
    return value.startswith(allowed)


def resolve_technical_path(relative_path: str, *, availability: str | None = None) -> Path:
    if not is_relative_technical_path(relative_path, availability=availability):
        raise TechnicalSourceError(f"Ruta técnica no relativa o fuera de su área permitida: {relative_path}")
    candidate = (ROOT / PurePosixPath(relative_path)).resolve()
    technical_root = (ROOT / "documents" / "sources" / "technical").resolve()
    if technical_root not in candidate.parents:
        raise TechnicalSourceError(f"Ruta técnica fuera del repositorio: {relative_path}")
    return candidate


def source_by_id(manifest: dict[str, Any], source_id: str) -> dict[str, Any]:
    for source in manifest.get("sources", []):
        if isinstance(source, dict) and source.get("sourceId") == source_id:
            return source
    raise TechnicalSourceError(f"Fuente técnica inexistente: {source_id}")


def allowed_hosts(source: dict[str, Any]) -> set[str]:
    hosts: set[str] = set()
    for key in ("canonicalUrl", "metadataUrl"):
        value = source.get(key)
        if isinstance(value, str):
            host = urlparse(value).hostname
            if host:
                hosts.add(host.lower())
    planned = source.get("plannedRevision")
    if isinstance(planned, dict):
        host = urlparse(str(planned.get("downloadUrl", ""))).hostname
        if host:
            hosts.add(host.lower())
    return hosts


class RestrictedRedirectHandler(HTTPRedirectHandler):
    """Reject redirects that escape the declared official hosts."""

    def __init__(self, hosts: set[str]):
        super().__init__()
        self.hosts = hosts

    def redirect_request(self, req, fp, code, msg, headers, newurl):  # type: ignore[no-untyped-def]
        parsed = urlparse(newurl)
        if parsed.scheme != "https" or not parsed.hostname or parsed.hostname.lower() not in self.hosts:
            raise TechnicalSourceError(f"Redirección no permitida a {newurl}")
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def media_type_from_response(response: Any) -> str:
    headers = getattr(response, "headers", None)
    raw = headers.get("Content-Type", "") if headers is not None else ""
    return raw.split(";", 1)[0].strip().lower()


def staging_paths(source_id: str) -> tuple[Path, Path]:
    safe_id = source_id.replace("/", "-").replace("\\", "-")
    parent = STAGING_ROOT / safe_id
    return parent / "payload", parent / "receipt.json"


def planned_summary(source: dict[str, Any]) -> dict[str, object]:
    planned = source.get("plannedRevision")
    if not isinstance(planned, dict):
        if source.get("acquisitionMode") == "manual":
            raise TechnicalSourceError(f"manual-acquisition-required: {source.get('sourceId')}")
        raise TechnicalSourceError(f"{source.get('sourceId')} no tiene una revisión planificada.")
    return {
        "sourceId": source["sourceId"],
        "revisionId": planned["revisionId"],
        "url": planned["downloadUrl"],
        "targetPath": planned["targetPath"],
        "licenseStatus": source["license"]["status"],
        "redistributionStatus": source["redistributionStatus"],
        "localAvailability": source["localAvailability"],
    }


def download_to_staging(source: dict[str, Any], *, timeout: int = 20, opener: Any | None = None) -> AcquisitionReceipt:
    """Download one declared automatic source to staging, never to its final path."""
    if source.get("acquisitionMode") != "automated":
        raise TechnicalSourceError(f"manual-acquisition-required: {source.get('sourceId')}")
    planned = source.get("plannedRevision")
    if not isinstance(planned, dict):
        raise TechnicalSourceError(f"{source.get('sourceId')} no tiene revisión planificada para descargar.")
    download_url = planned.get("downloadUrl")
    parsed = urlparse(str(download_url))
    hosts = allowed_hosts(source)
    if parsed.scheme != "https" or not parsed.hostname or parsed.hostname.lower() not in hosts:
        raise TechnicalSourceError(f"URL de adquisición no permitida: {download_url}")
    if opener is None:
        opener = build_opener(RestrictedRedirectHandler(hosts))
    request = Request(str(download_url), headers={"User-Agent": "TAI-source-verifier/1.0"})
    try:
        response = opener.open(request, timeout=timeout)
    except TechnicalSourceError:
        raise
    except Exception as error:  # urllib errors are intentionally reported without retry loops.
        raise TechnicalSourceError(f"No se pudo descargar {source.get('sourceId')}: {error}") from error
    try:
        final_url = str(response.geturl())
        final = urlparse(final_url)
        if final.scheme != "https" or not final.hostname or final.hostname.lower() not in hosts:
            raise TechnicalSourceError(f"URL final no permitida: {final_url}")
        media_type = media_type_from_response(response)
        expected = {str(item).lower() for item in planned.get("expectedMediaTypes", [])}
        if media_type not in expected:
            raise TechnicalSourceError(
                f"Tipo de medio inesperado para {source.get('sourceId')}: {media_type or '<ausente>'}; esperado: {', '.join(sorted(expected))}"
            )
        max_bytes = int(planned["maxBytes"])
        headers = getattr(response, "headers", None)
        length = headers.get("Content-Length") if headers is not None else None
        if length and int(length) > max_bytes:
            raise TechnicalSourceError(f"La descarga supera el límite de {max_bytes} bytes: {length}")
        staged, receipt_path = staging_paths(str(source["sourceId"]))
        staged.parent.mkdir(parents=True, exist_ok=True)
        with tempfile.NamedTemporaryFile("wb", delete=False, dir=staged.parent) as temporary:
            size = 0
            digest = sha256()
            while True:
                chunk = response.read(1024 * 128)
                if not chunk:
                    break
                size += len(chunk)
                if size > max_bytes:
                    raise TechnicalSourceError(f"La descarga supera el límite de {max_bytes} bytes durante la lectura.")
                digest.update(chunk)
                temporary.write(chunk)
            temporary_path = Path(temporary.name)
        os.replace(temporary_path, staged)
        try:
            staged_display_path = staged.relative_to(ROOT).as_posix()
        except ValueError:
            # Los tests pueden inyectar un staging temporal fuera del repositorio.
            staged_display_path = str(staged)
        receipt = AcquisitionReceipt(
            source_id=str(source["sourceId"]),
            revision_id=str(planned["revisionId"]),
            staged_path=staged_display_path,
            final_path=str(planned["targetPath"]),
            final_url=final_url,
            host=final.hostname.lower(),
            media_type=media_type,
            size_bytes=size,
            sha256=digest.hexdigest(),
        )
        write_json_atomic(receipt_path, receipt.as_dict())
        return receipt
    finally:
        close = getattr(response, "close", None)
        if callable(close):
            close()


def load_staged_receipt(source_id: str) -> AcquisitionReceipt:
    staged, receipt_path = staging_paths(source_id)
    if not staged.is_file() or not receipt_path.is_file():
        raise TechnicalSourceError(f"No hay descarga temporal aplicable para {source_id}.")
    payload = load_json(receipt_path)
    if not isinstance(payload, dict):
        raise TechnicalSourceError(f"Recibo temporal inválido para {source_id}.")
    try:
        receipt = AcquisitionReceipt(
            source_id=str(payload["sourceId"]), revision_id=str(payload["revisionId"]),
            staged_path=str(payload["stagedPath"]), final_path=str(payload["finalPath"]),
            final_url=str(payload["finalUrl"]), host=str(payload["host"]), media_type=str(payload["mediaType"]),
            size_bytes=int(payload["sizeBytes"]), sha256=str(payload["sha256"]),
        )
    except (KeyError, TypeError, ValueError) as error:
        raise TechnicalSourceError(f"Recibo temporal incompleto para {source_id}: {error}") from error
    if receipt.source_id != source_id or staged.relative_to(ROOT).as_posix() != receipt.staged_path:
        raise TechnicalSourceError(f"El recibo temporal no corresponde a {source_id}.")
    if sha256_file(staged) != receipt.sha256:
        raise TechnicalSourceError(f"El checksum de staging no coincide para {source_id}.")
    return receipt


def apply_staged_source(manifest: dict[str, Any], source_id: str) -> AcquisitionReceipt:
    """Explicitly promote a verified staging file and append an immutable revision."""
    source = source_by_id(manifest, source_id)
    planned = source.get("plannedRevision")
    if not isinstance(planned, dict):
        raise TechnicalSourceError(f"{source_id} no tiene una revisión pendiente de aplicar.")
    receipt = load_staged_receipt(source_id)
    if receipt.revision_id != planned.get("revisionId") or receipt.final_path != planned.get("targetPath"):
        raise TechnicalSourceError(f"El recibo temporal no coincide con la revisión planificada de {source_id}.")
    if not source.get("verifiedLocators"):
        raise TechnicalSourceError(f"{source_id} no tiene localizadores verificados; no se puede aplicar la revisión.")
    availability = source.get("localAvailability")
    target = resolve_technical_path(receipt.final_path, availability=availability)
    staged, _ = staging_paths(source_id)
    print(json.dumps(receipt.as_dict() | {"licenseStatus": source["license"]["status"], "localAvailability": availability}, ensure_ascii=False))
    if target.exists():
        if sha256_file(target) != receipt.sha256:
            raise TechnicalSourceError(f"No se sobrescribe {receipt.final_path}: el checksum existente es distinto.")
    else:
        target.parent.mkdir(parents=True, exist_ok=True)
        with tempfile.NamedTemporaryFile("wb", delete=False, dir=target.parent) as temporary:
            with staged.open("rb") as stream:
                shutil.copyfileobj(stream, temporary)
            temporary_path = Path(temporary.name)
        os.replace(temporary_path, target)
    revisions = source.setdefault("revisions", [])
    if any(item.get("revisionId") == receipt.revision_id for item in revisions if isinstance(item, dict)):
        raise TechnicalSourceError(f"La revisión {receipt.revision_id} ya existe; cree una revisión nueva explícita.")
    prior = revisions[-1].get("revisionId") if revisions else None
    representation_id = "REP-TECH-" + source_id.removeprefix("SRC-TECH-")
    revision = {
        "revisionId": receipt.revision_id,
        "retrievedAt": planned["retrievedAt"],
        "titleObserved": planned["titleObserved"],
        "updatedAtObserved": planned["updatedAtObserved"],
        "localPath": receipt.final_path,
        "sha256": receipt.sha256,
        "mediaType": receipt.media_type,
        "sizeBytes": receipt.size_bytes,
        "previousRevisionId": prior,
        "representations": [{
            "representationId": representation_id,
            "format": source["normativeFormat"],
            "normative": True,
            "localPath": receipt.final_path,
            "sha256": receipt.sha256,
            "mediaType": receipt.media_type,
            "sizeBytes": receipt.size_bytes,
            "representationOf": None,
        }],
    }
    revisions.append(revision)
    source["plannedRevision"] = None
    source["publicationStatus"] = "current"
    write_json_atomic(MANIFEST_PATH, manifest)
    return receipt


def guessed_media_type(path: Path) -> str:
    guessed, _ = mimetypes.guess_type(path.name)
    return guessed or "application/octet-stream"


def validate_manifest_semantics(manifest: dict[str, Any], *, require_local: str = "public") -> list[str]:
    """Validate cross-field contracts; public mode never requires private files."""
    errors: list[str] = []
    sources = manifest.get("sources", [])
    if not isinstance(sources, list):
        return ["ERROR: sources del manifiesto no es una lista."]
    source_ids = [source.get("sourceId") for source in sources if isinstance(source, dict)]
    document_ids = [source.get("documentId") for source in sources if isinstance(source, dict)]
    for label, values in (("sourceId", source_ids), ("documentId", document_ids)):
        duplicates = sorted({value for value in values if values.count(value) > 1})
        if duplicates:
            errors.append(f"ERROR: {label} técnico duplicado: {', '.join(str(item) for item in duplicates)}.")
    by_id = {source.get("sourceId"): source for source in sources if isinstance(source, dict)}
    revision_ids: set[str] = set()
    for source in sources:
        if not isinstance(source, dict):
            continue
        source_id = str(source.get("sourceId", "<sin sourceId>"))
        source_topics = source.get("topicIds", [])
        source_blocks = set(source.get("blockIds", []))
        for topic_id in source_topics:
            if not isinstance(topic_id, str) or topic_id.split("-", 1)[0] not in source_blocks:
                errors.append(f"ERROR: {source_id} asigna {topic_id} a un bloque distinto.")
        status = source.get("publicationStatus")
        stage = source.get("publicationStage")
        if status == "current" and stage == "internet-draft":
            errors.append(f"ERROR: {source_id} no puede declarar current un Internet-Draft.")
        if status == "obsolete":
            replacement = source.get("supersededBy")
            target = by_id.get(replacement)
            if not replacement or not isinstance(target, dict) or target.get("publicationStatus") != "current":
                errors.append(f"ERROR: {source_id} obsolete debe declarar supersededBy a una fuente current.")
        elif source.get("supersededBy") is not None:
            errors.append(f"ERROR: {source_id} solo puede usar supersededBy si es obsolete.")
        if source.get("primary") and status == "obsolete":
            errors.append(f"ERROR: {source_id} obsoleta no puede ser fuente primaria.")
        if source.get("sourceType") == "rfc" and status == "current" and stage != "rfc":
            errors.append(f"ERROR: {source_id} current debe tener publicationStage=rfc.")
        if source_id == "SRC-TECH-IETF-RFC-8446" and source.get("primary"):
            errors.append("ERROR: RFC 8446 no puede ser fuente primaria de TLS 1.3.")
        if source_id == "SRC-TECH-IETF-RFC-9846" and status == "current" and stage != "rfc":
            errors.append("ERROR: RFC 9846 debe aceptarse como RFC vigente de TLS 1.3.")
        if source_id == "SRC-TECH-ECMA-262-2026" and source.get("normativeFormat") != "text/html":
            errors.append("ERROR: ECMA-262 debe declarar text/html como formato normativo.")
        availability = source.get("localAvailability")
        revisions = source.get("revisions", [])
        if status == "current" and not revisions:
            errors.append(f"ERROR: {source_id} current no tiene una revisión adquirida.")
        for revision in revisions:
            if not isinstance(revision, dict):
                continue
            revision_id = revision.get("revisionId")
            if revision_id in revision_ids:
                errors.append(f"ERROR: revisionId técnico duplicado: {revision_id}.")
            revision_ids.add(str(revision_id))
            if not isinstance(revision_id, str) or not revision_id.startswith(f"{source_id}@"):
                errors.append(f"ERROR: {source_id} tiene una revisión ajena: {revision_id}.")
            previous = revision.get("previousRevisionId")
            local_revision_ids = {item.get("revisionId") for item in revisions if isinstance(item, dict)}
            if previous is not None and previous not in local_revision_ids:
                errors.append(f"ERROR: {source_id} referencia una revisión previa inexistente: {previous}.")
            local_path = revision.get("localPath")
            if not is_relative_technical_path(local_path, availability=availability):
                errors.append(f"ERROR: {source_id} usa una ruta local inválida: {local_path}.")
                continue
            should_check = availability == "public" or (availability == "private" and require_local == "private")
            if should_check:
                path = resolve_technical_path(str(local_path), availability=availability)
                if not path.is_file():
                    errors.append(f"ERROR: falta el activo {availability} de {source_id}: {local_path}.")
                else:
                    if sha256_file(path) != revision.get("sha256"):
                        errors.append(f"ERROR: checksum divergente para {source_id}: {local_path}.")
                    if path.stat().st_size != revision.get("sizeBytes"):
                        errors.append(f"ERROR: tamaño divergente para {source_id}: {local_path}.")
                    if guessed_media_type(path) != revision.get("mediaType"):
                        errors.append(f"ERROR: tipo de medio divergente para {source_id}: {local_path}.")
            representations = revision.get("representations", [])
            normative = [item for item in representations if isinstance(item, dict) and item.get("normative")]
            if len(normative) != 1:
                errors.append(f"ERROR: {source_id}:{revision_id} debe tener exactamente una representación normativa.")
            for representation in representations:
                if not isinstance(representation, dict):
                    continue
                if representation.get("normative") and representation.get("format") != source.get("normativeFormat"):
                    errors.append(f"ERROR: {source_id}:{revision_id} no respeta normativeFormat.")
                if representation.get("representationOf") not in (None, source_id):
                    errors.append(f"ERROR: {source_id}:{revision_id} enlaza una representación a otra fuente.")
        if availability == "private" and require_local == "private" and not revisions:
            errors.append(f"ERROR: {source_id} declara disponibilidad privada sin revisión local comprobable.")
        if availability == "public" and source.get("redistributionStatus") != "public":
            errors.append(f"ERROR: {source_id} expone un activo público sin autorización de redistribución.")
        if availability == "private" and source.get("redistributionStatus") != "private":
            errors.append(f"ERROR: {source_id} declara ruta privada sin redistribución private.")
    return errors


def private_paths(manifest: dict[str, Any]) -> list[str]:
    paths: list[str] = []
    for source in manifest.get("sources", []):
        if isinstance(source, dict) and source.get("localAvailability") == "private":
            for revision in source.get("revisions", []):
                if isinstance(revision, dict) and isinstance(revision.get("localPath"), str):
                    paths.append(revision["localPath"])
    return paths
