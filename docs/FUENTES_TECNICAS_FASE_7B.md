# Fuentes técnicas verificadas — Fase 7B.1

Revisado el 4 de agosto de 2026. Este informe cataloga evidencia y cobertura;
no añade redacción doctrinal a los temas editoriales.

## Resultado de adquisición

| Fuente | Tema | Tipo y estado | Copia | Verificación |
| --- | --- | --- | --- | --- |
| POSIX.1-2024 | B2-T04 | Estándar; `manual-acquisition-required` | No adquirida | URL canónica conservada; se requiere comprobación manual de condiciones antes de una copia privada. |
| Windows Kernel-Mode HAL Library | B2-T04 | Documentación primaria concreta; vigente | Privada | SHA-256 `8fa924be049a234b12bee5f42b3789cfaddac43006ef88c82dcbdb42a0359d18`; localizadores comprobados. |
| Linux kernel user's and administrator's guide | B2-T04 | Manual oficial concreto; vigente | Privada | SHA-256 `0170b557d493241b281ac19586039fb3b5fbf26e547f96cedb686ccdb1ca8cd1`; localizadores comprobados. |
| HTML Living Standard | B3-T07 | Estándar vivo; revisión `@2026-08-04` | Pública | SHA-256 `60120c77b82daed42ad810ba653fc95b63ca500b2990641e107b250ced30644b`. |
| XML 1.0 Fifth Edition | B3-T07 | Recomendación W3C | Pública | SHA-256 `f58a4b9e1e5b8bac13fb55c4e5c7c8c5e2c176aa45ee68e2f1ab2498511927ec`. |
| ECMA-262 17th edition | B3-T07 | Estándar; HTML normativa | Pública | SHA-256 `5df49e088c2b5c7a3dfd4a330414b92897fb4535cb62fc5936cad101a6c2304a`. |
| RFC 9110 | B4-T08 | RFC vigente de semántica HTTP | Pública, TXT | SHA-256 `21c1cdce6ab0e5509b04d84a28000836c7a087cf786efe6f04877ebfff47232a`. |
| RFC 9846 | B4-T08 | RFC vigente de TLS 1.3 | Pública, TXT | SHA-256 `b1bee06a814f92ca4677c85b97519be53869b2bf8edc79ade955fb51c0402b17`. |

RFC 9846 sustituye a RFC 8446. Por ello RFC 8446 no está catalogado ni se
usará como fuente principal del piloto B4-T08. Una eventual alta histórica
deberá declarar `obsolete` y `supersededBy: SRC-TECH-IETF-RFC-9846`.

ECMA-262 mantiene una única identidad doctrinal. La copia HTML es la
representación normativa; un PDF futuro solo podrá enlazarse como
representación auxiliar y no aumentará la suficiencia documental.

## Privacidad, licencias y reproducibilidad

Las copias de Microsoft Learn y Linux se mantienen bajo `private/` por la
política conservadora de licencia declarada en el manifiesto. No se incluyen en
Git, en GitHub Pages ni en la aplicación. La validación pública no las exige.

Se ejecutó la verificación privada del responsable el 4 de agosto de 2026:

```powershell
.\.venv\Scripts\python.exe scripts\validate_technical_sources.py --require-private-local
```

El resultado fue correcto para las dos copias privadas presentes. POSIX no se
incluye en esa comprobación porque aún no existe una copia local autorizada.

## Matriz de suficiencia

La matriz estructurada está en
`documents/sources/technical/coverage-matrix.json`. B2-T04, B3-T07 y B4-T08
han quedado marcados como `sufficient-for-partial-pilot` solo por disponer de
secciones centrales trazables, localizadores revisados, varias secciones con
cobertura y lagunas explícitas. No significa cobertura completa ni autoriza
redacción automática.

Principales lagunas: POSIX y sistemas móviles en B2-T04; servidor,
multiplataforma y navegador concreto en B3-T07; arquitectura histórica y
servicios generales de Internet en B4-T08.

## Límites de la fase

Los archivos `content/topics/B2-T04.md`, `content/topics/B3-T07.md` y
`content/topics/B4-T08.md` no cambian en esta entrega. Tampoco se modifican
preguntas, interfaz, HTML, CSS ni JavaScript de la aplicación. La incorporación
editorial de contenido queda reservada a Fase 7B.2.
