# Bloque III — mejora pedagógica y visual

Fecha de revisión: 22/09/2026

Rama: `gsi-only-final`

Alcance: `B3-T01` a `B3-T15`

## Resultado

Se ha revisado íntegramente el Bloque III. El corpus técnico se conserva y la intervención se concentra en retirar notas internas de preparación, mejorar la jerarquía del cierre transversal de T15, actualizar formulaciones temporales y añadir una visual original por tema. No se han modificado preguntas ni documentos originales.

## Arquitectura de la mejora

- Las fuentes originales de `documents/originals/gsi/` permanecen intactas.
- El manifiesto `content/enhancements/b3-visuals.json` declara reemplazos y ubicaciones de forma comprobable.
- `scripts/build_gsi_content.py` integra esa capa en Markdown y HTML y falla si un anclaje deja de existir.
- Los 15 SVG accesibles están en `assets/diagrams/b3/`.
- La regla responsive añadida a `#syllabus-title` permite partir títulos oficiales largos sin alterar su texto.

## Clasificación y visuales

| Tema | Intervención | Visual principal |
| --- | --- | --- |
| B3-T01 | SELECTIVA | Cascada, V, incremental/iterativo y espiral. |
| B3-T02 | SELECTIVA | Planificación, métricas, previsión y cambio. |
| B3-T03 | SELECTIVA | Elicitación, SRS y trazabilidad bidireccional. |
| B3-T04 | SELECTIVA | Diseño conceptual/lógico/físico y concurrencia. |
| B3-T05 | SELECTIVA | Estructuras, estrategias algorítmicas e IA. |
| B3-T06 | SELECTIVA | Pipeline, artefacto, despliegue, documentación y formación. |
| B3-T07 | SELECTIVA | Matriz de estrategia de pruebas basada en riesgo. |
| B3-T08 | SELECTIVA | Cutover y estrategias de sustitución. |
| B3-T09 | SELECTIVA | Diferencias entre UP, UML y patrones. |
| B3-T10 | SELECTIVA | Perfiles y especificaciones Jakarta EE 11. |
| B3-T11 | SELECTIVA | SDK, IL/CLR, ASP.NET Core, datos y despliegue. |
| B3-T12 | SELECTIVA | Flujo HTTP y controles de seguridad por capa. |
| B3-T13 | SELECTIVA | ISO/IEC 25010:2023, métricas, gates y mejora. |
| B3-T14 | SELECTIVA | Accesibilidad, usabilidad y UX en el ciclo. |
| B3-T15 | REESTRUCTURAR | Plataforma de datos de ingesta a consumo y gobierno. |

Los archivos siguen el patrón `assets/diagrams/b3/b3-tNN-*.svg`. Todos contienen `<title>` y `<desc>`, usan texto y formas además del color e incluyen alternativa, explicación y clave de memoria en la página.

## Cambios pedagógicos relevantes

- Las notas «Base A1», «Complemento GSI», «hueco» o «fuente infrautilizada» se sustituyen por entradas directas que explican el concepto estudiable.
- En T15, los anexos globales dejan de ser encabezados de primer nivel incrustados y pasan a ser secciones numeradas del cierre del bloque.
- En T03 se enfatiza que una restricción heredada no se convierte automáticamente en requisito futuro.
- En T07 se separan objeto, nivel, tipo y técnica de prueba.
- En T09 se distingue proceso de desarrollo, lenguaje de modelado y patrón de diseño.
- En T12 se sitúan TLS, CORS, CSP, identidad, validación y observabilidad en su frontera correspondiente.

## Actualidad y fuentes primarias

- [Jakarta EE 11](https://jakarta.ee/specifications/platform/11/) continúa como versión final y exige Java SE 17 o superior; [Jakarta EE 12](https://jakarta.ee/release/12/) sigue en desarrollo a 22/09/2026.
- [.NET releases and support](https://learn.microsoft.com/dotnet/core/releases-and-support) confirma .NET 10 LTS hasta noviembre de 2028 y soporte de .NET 8 y 9 hasta noviembre de 2026.
- [ISO/IEC 25010:2023](https://committee.iso.org/standard/78176.html) define el modelo de calidad de producto con nueve características.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) es recomendación W3C y no deroga por sí sola 2.1; la [Decisión de Ejecución (UE) 2021/1339](https://eur-lex.europa.eu/eli/dec_impl/2021/1339) publica EN 301 549 v3.2.1 como norma armonizada, y el [RD 1112/2018](https://www.boe.es/buscar/act.php?id=BOE-A-2018-12699) vincula la presunción de conformidad a las referencias publicadas.

## Accesibilidad y responsive

- La prueba abre los 15 temas en 1365×900 y 390×844.
- Comprueba número y carga de SVG, `alt` mínimo, recorte, overflow de página, consola y rutas HTTP.
- En móvil el diagrama conserva anchura legible dentro de un contenedor desplazable local.
- La primera ejecución detectó overflow en el título oficial largo de T12; se corrigió con partición segura de palabra y la segunda ejecución pasó 30/30.

## Archivos

### Creados

- `content/enhancements/b3-visuals.json`.
- 15 SVG en `assets/diagrams/b3/`.
- `tests/b3-visual-smoke.mjs`.
- `logs/b3-visual-smoke.json`.
- `docs/BLOQUE_III_MEJORA_VISUAL.md`.

### Modificados

- `assets/css/styles.css`.
- `content/topics/B3-T01.md` a `content/topics/B3-T15.md`.
- `content/generated/B3-T01.html` a `content/generated/B3-T15.html`.
- `data/topic-content.json`, por los checksums de los derivados.
- Logs mantenidos por la suite.

### Conversión y OCR

No se han convertido documentos ni usado OCR. No hay pendientes de conversión en esta intervención.

## Validaciones

| Comprobación | Resultado |
| --- | --- |
| XML de 15 SVG, JSON y `py_compile` | Correcto |
| Regeneración | 57 temas; distribución 10/16/15/16 |
| `scripts/validate_gsi_final.py` | 19.135 controles correctos; 0 errores; 0 bloqueos |
| `tests/b3-visual-smoke.mjs` | 30/30 tema/viewport; sin overflow, consola ni rutas rotas |
| Preguntas | 202 oficiales + 803 IA + 959 manuales = 1.964; sin cambios |
| `scripts/run_gsi_suite.py` | Código 0; `technical_pass = true`; `release_ready = true` |

## Cómo probar

1. `.\.venv\Scripts\python.exe scripts/build_gsi_content.py`.
2. `.\.venv\Scripts\python.exe scripts/run_gsi_suite.py`.
3. Ejecutar `node tests/b3-visual-smoke.mjs` con `PLAYWRIGHT_MODULE` si no existe Playwright local.
4. Servir el repositorio por HTTP y abrir `index.html#temario/B3-T01` hasta `B3-T15`.

## Limitaciones y siguiente fase

La automatización integrada de navegador siguió indisponible por el error del helper sandbox; la comprobación se realizó con Chrome headless y Playwright, con capturas en `tmp/gsi-b3/`. No quedan bloqueos del Bloque III. La siguiente fase es el Bloque IV, que debe comenzar con lectura completa y mantenerse en un commit independiente.
