# Sincronización de apuntes GSI A2 — revisión cerrada 23/09/2026

## Alcance y procedencia

Rama de trabajo: `sync-apuntes-2026-09-23`, creada desde `gsi-only-final` (`fab41f61adf9860bcfd60b77e15ea26b5b9e2f6f`). Sin merge a la rama publicada. Se compararon los 57 temas activos con los cuatro Google Docs facilitados por el propietario, sin usar búsquedas web ni conocimiento externo como fuente editorial:

| Bloque | Documento revisado | Temas comparados y modificados | Derivados regenerados |
| --- | --- | ---: | ---: |
| I | [Documento I](https://docs.google.com/document/d/1J0-5Ab3M7Xom8Af_mpCzGFX5S4ynSyLLYa5YOTzd_qo/edit) | 10/10 (`B1-T01`–`B1-T10`) | 10 HTML |
| II | [Documento II](https://docs.google.com/document/d/1_-6JFktfHXhth_n3KeUfRPjPeFxp3Mgkl2HlZzab7c4/edit) | 16/16 (`B2-T01`–`B2-T16`) | 16 HTML |
| III | [Documento III](https://docs.google.com/document/d/1T28bNfTrftG0eCG2sX336DKKir-8ruVKnkhKMS0w7N0/edit) | 15/15 (`B3-T01`–`B3-T15`) | 15 HTML |
| IV | [Documento IV](https://docs.google.com/document/d/1MwEk2ye_u4RRHO3HP38gKX2yXjqAjzodtESKAOxDuv0/edit) | 16/16 (`B4-T01`–`B4-T16`) | 16 HTML |
| **Total** | **4 documentos** | **57/57** | **57 HTML** |

Los originales completos de la lectura se conservaron localmente en `documents/originals/gsi/revised-2026-09-23/` (directorio ignorado por Git). Los cuatro Markdown convertidos mediante MarkItDown, sin OCR, están en `documents/markdown/gsi/revised-2026-09-23/B1/` a `B4/`. Las cuatro instantáneas nativas de la parte de estudio, necesarias para reconstruir un clon limpio, están versionadas en `content/source-snapshots/reviewed-2026-09-23/`. Los anexos internos de registro de ajustes y auditoría se conservaron en la conversión completa, pero no se publicaron como materia visible de los temas; los anexos didácticos existentes sí se mantienen.

## Cambios editoriales por bloque

La generación reutilizó la estructura pedagógica existente y aplicó los cambios de cada fuente por tema, sin sustituir los temas a ciegas. Los 57 Markdown de `content/topics/` y sus 57 pares de `content/generated/` cambiaron (en algunos temas, la diferencia sustantiva es únicamente la procedencia/fecha, porque el texto previo ya coincidía).

- **Bloque I:** se incorporaron los matices del artículo 18.4 CE, regencia y declaración de guerra/paz en `B1-T01`; datos de igualdad, violencia de género, rectificación registral y dependencia en `B1-T05`; Plan de Digitalización, eIDAS, nodos y STORK en `B1-T06`. Se corrigieron puntuación y jerarquía de algunos párrafos añadidos, manteniendo la ampliación pedagógica eIDAS 2 ya existente.
- **Bloque II:** aparecen microkernel clásico (`B2-T02`), Kotlin/JVM e importación dinámica con `importlib.import_module()` (`B2-T03`), Cassandra wide-column (`B2-T05`), VLAN estática, rangos IANA, SNMP polling/trap e IETF/RFC (`B2-T08`), ISO/IEC 27005:2022 y NIST SP 800-30 Rev.1 (`B2-T10`), C&C/C2 y smishing (`B2-T13`). Se eliminó del contenido visible una previsión de Kubernetes ya desactualizada y se ajustó la explicación EUPL/ENI al documento revisado.
- **Bloque III:** se añadieron precisiones sobre Kanban, Planning Poker, Sprint Goal, Gantt/PERT (`B3-T02`), técnicas y herramientas de prueba (`B3-T07`) y terminología .NET (`B3-T11`). Se retiró del texto de estudio la fecha próxima de fin de soporte de .NET 8/9; la elección de versión remite a consultar la política vigente. Se sincronizó la corrección previa sobre ISTQB tanto en Markdown como en HTML.
- **Bloque IV:** se integraron microdatos examinables de AppLocker, Shadow IT, DNF, Round Robin, dirty bit y LDIF (`B4-T01`); Git, Ansible, benchmarks, ELK e ITIL 4 SVS (`B4-T04`); y Wi-Fi, WPA3, NFC, Bluetooth y 802.11be (`B4-T11`), además de las actualizaciones de los restantes temas.

Se conservaron como contenido complementario compatible los diagramas SVG, leyendas, navegación por secciones, apartados de Test y aplicación al supuesto, resúmenes de repaso, anexos didácticos ya visibles y la ampliación editorial eIDAS 2. No se detectó un párrafo activo huérfano cuya contradicción exigiera eliminarlo o una discrepancia sustantiva irresuelta entre los cuatro documentos y los apuntes. Los anexos de auditoría no se incorporaron al temario visible.

## Trazabilidad y límites

`data/sources.json`, `data/gsi-source-manifest.json`, `data/gsi-drive-inventory.json`, `data/topic-content.json`, `data/syllabus.json` y `data/gsi-coverage-report.json` registran los nuevos documentos, fecha de revisión, rutas y hashes. Las fuentes V2.1 anteriores permanecen en el catálogo: sirven de trazabilidad histórica y sustentan la evidencia original de las preguntas IA. No se modificó ningún banco de preguntas, ni estadísticas/progreso, modo examen, diseño general o `archive/`. Tampoco se editó contenido TAI.

Las 803 evidencias de preguntas IA se cotejaron con el corpus histórico declarado por cada pregunta; las 803 coincidieron. Algunas secciones de los apuntes han cambiado respecto de la evidencia histórica. Se recomienda revisión editorial manual de la **alineación semántica** de esas preguntas antes de cambiar su procedencia o estado; no se han validado automáticamente ni se ha reescrito el banco.

La lectura del directorio de Drive padre de los cuatro documentos no se verificó como propiedad de cada archivo: el inventario conserva `parent_id: null`, sin inventarlo. El registro `logs/gsi-conversions.json` documenta 4 conversiones nuevas correctas y 8 intentos sobre salidas históricas que el conversor rechazó sobrescribir por diferir de sus instantáneas antiguas. El comando general de conversión salió con código 1 por esos ocho conflictos **históricos**; no quedó pendiente ninguna de las cuatro fuentes nuevas. No se aplicó OCR.

## Comprobaciones y reproducción

Comandos principales ejecutados desde la raíz, con el Python del entorno del proyecto:

```powershell
.\.venv\Scripts\python.exe scripts\import_gsi_documents.py
.\.venv\Scripts\python.exe scripts\build_gsi_content.py
.\.venv\Scripts\python.exe scripts\verify_gsi_sync.py
.\.venv\Scripts\python.exe scripts\validate_gsi_final.py
.\.venv\Scripts\python.exe scripts\run_gsi_suite.py
node tests/b1-visual-smoke.mjs
node tests/b2-visual-smoke.mjs
node tests/b3-visual-smoke.mjs
node tests/b4-visual-smoke.mjs
```

La segunda pasada automática contrastó párrafos sustantivos de las cuatro instantáneas nativas con el texto visible, comprobó exclusión de anexos internos y rutas de imágenes: **B1 10/10, B2 16/16, B3 15/15, B4 16/16; total 57/57, 0 fallos**. El validador de integridad terminó sin errores ni bloqueos. Las pruebas visuales terminaron B1 20/20, B2 32/32, B3 30/30 y B4 32/32, sin desbordamientos a 1365 ni 390 px. La suite oficial `scripts/run_gsi_suite.py`, ejecutada con `.venv`, terminó con **código 0**; el detalle está en `logs/gsi-suite.json`. Incluye validación de 20 JSON contra 18 esquemas, 1964 preguntas, 88 pruebas unitarias, regresión de navegador y recorrido funcional HTTP de los 57 temas.

Para probar la web manualmente, servir la raíz con HTTP local (por ejemplo `python -m http.server 8000`) y abrir `http://localhost:8000/#temario`. El siguiente paso recomendado es revisar el diff y las preguntas IA señaladas, y solo después decidir el merge a `gsi-only-final`.
