# Pruebas manuales — Fase 7B.1

Solo cambian de estado los casos realmente comprobados.

| Caso | Estado | Instrucciones exactas |
| --- | --- | --- |
| M-01 | APROBADA | Ejecutada: no hubo cambios en Git; RFC 9846 informó correctamente que no tiene revisión planificada, pues ya está catalogado. |
| M-02 | NO EJECUTADA | Limitación: RFC 9846 ya no tiene revisión planificada, por lo que no es posible repetir una descarga a staging sin alterar el catálogo. |
| M-03 | NO EJECUTADA | Limitación: `--apply` falla antes, al no existir una revisión pendiente; no permite aislar el supuesto concreto de localizadores ausentes. |
| M-04 | APROBADA | Ejecutada: POSIX devolvió `manual-acquisition-required`; no se automatizó aceptación alguna de condiciones. |
| M-05 | APROBADA | Ejecutada: `private/` está ignorado, no contiene archivos rastreados y no aparece como cambio ordinario en Git. |
| M-06 | APROBADA | Ejecutada en clon limpio sin `private/` y con `core.autocrlf=true`: validación pública, runner y estado Git correctos. |
| M-07 | APROBADA | Ejecutada en esta máquina: `validate_technical_sources.py --require-private-local --check-catalog` finalizó correctamente. |
| M-08 | APROBADA | Ejecutada: `data/sources.json` no contiene rutas bajo `documents/sources/technical/private/`. |
| M-09 | APROBADA | Ejecutada: B2-T04, B3-T07 y B4-T08 continúan con estado `pending`, sin contenido doctrinal nuevo. |
| M-10 | APROBADA | Ejecutada: revisión manual de matriz, manifiesto, localizadores y checksums de las cinco copias públicas y dos privadas. |

## Registro de ejecución

- Fecha: 2026-08-04. Se abrieron las URLs canónicas oficiales de POSIX,
  Microsoft, Linux Kernel, WHATWG, W3C y Ecma; coincidieron con los editores,
  versiones o ediciones catalogadas. Las dos URL TXT de RFC fueron bloqueadas
  por el navegador integrado (`ERR_BLOCKED_BY_CLIENT`), pero sus copias locales,
  hosts canónicos, estado vigente y checksums fueron validados por el
  validador técnico y el runner Python.
- RFC 9110 y RFC 9846 figuran como vigentes; RFC 8446 no aparece como fuente
  principal. ECMA-262 usa HTML normativo. WHATWG conserva una revisión fechada
  e inmutable. Los localizadores declarados se corresponden con la matriz.
- Los checksums de las cinco copias públicas y dos privadas coincidieron con
  el manifiesto. `public/` y `private/` permanecen separados; `private/` está
  ignorado por Git y no hay archivos privados rastreados.
- La correspondencia entre `sources.json`, `manifest.json` y
  `coverage-matrix.json`, los 31 Markdown históricos y la ausencia de cambios
  en bancos, interfaz y contenido generado fueron validadas por los
  validadores de Fase 2 a 7B.1. La matriz mantiene revisión manual `reviewed`.
- `test_technical_sources.py` terminó con 27 pruebas aprobadas y 0 fallidas.
- M-06 — Comprobación realizada en un clon limpio sin
  `documents/sources/technical/private/`, creado con `core.autocrlf=true`.
  La versión clonada ya incluía la nueva `.gitattributes`; el checkout no
  modificó los bytes protegidos. `validate_phase7b1.py` terminó correctamente,
  `test_technical_sources.py` terminó con 27 pruebas aprobadas y 0 fallidas, y
  `git status` permaneció limpio.
- M-02 y M-03 permanecen **NO EJECUTADA**: son escenarios de adquisición
  anteriores a la revisión ya aplicada y no se repetirán alterando el catálogo
  definitivo.

## Resumen final

- APROBADAS: M-01 y M-04 a M-10.
- NO EJECUTADAS: M-02 y M-03.
- FALLIDAS: ninguna.
- Runner Python: 27 aprobadas y 0 fallidas.
- Validación pública correcta en clon sin `private/`.
- Validación privada correcta en la máquina responsable.
- No se inició Fase 7B.2 ni Fase 8.
