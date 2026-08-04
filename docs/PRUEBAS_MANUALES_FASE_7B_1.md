# Pruebas manuales — Fase 7B.1

Ningún caso ha sido ejecutado todavía. Solo una ejecución real puede cambiar
su estado a `APROBADA` o `FALLIDA`.

| Caso | Estado | Instrucciones exactas |
| --- | --- | --- |
| M-01 | NO EJECUTADA | Ejecutar `python scripts/acquire_primary_sources.py --source-id SRC-TECH-IETF-RFC-9846 --dry-run` y comprobar que Git no cambia. |
| M-02 | NO EJECUTADA | Ejecutar `--download` para un RFC y revisar URL final, host, tamaño, media type, SHA-256 y staging. |
| M-03 | NO EJECUTADA | Confirmar que `--apply` sin localizadores falla sin cambiar el manifiesto. |
| M-04 | NO EJECUTADA | Confirmar que POSIX devuelve `manual-acquisition-required`. |
| M-05 | NO EJECUTADA | Confirmar que los archivos de `private/` no aparecen en `git status --short`. |
| M-06 | NO EJECUTADA | En un clon sin `private/`, ejecutar `python scripts/validate_phase7b1.py`. |
| M-07 | NO EJECUTADA | En la máquina responsable, ejecutar `python scripts/validate_technical_sources.py --require-private-local`. |
| M-08 | NO EJECUTADA | Comprobar que `data/sources.json` no contiene rutas bajo `private/`. |
| M-09 | NO EJECUTADA | Confirmar que B2-T04, B3-T07 y B4-T08 siguen mostrando contenido pendiente. |
| M-10 | NO EJECUTADA | Revisar la matriz de cobertura contra los localizadores de cada copia adquirida. |
