# Ajuste conceptual del lote GSI-EDITORIAL-001

Fecha: 26 de octubre de 2026. Estado: **propuestas pendientes de aprobación expresa**.

## Cambio realizado

Se actualiza el criterio del [plan editorial](GSI_MEJORA_TESTS.md): orientación global aproximada 70 % conceptual exigente y 30 % aplicación contextualizada, sin cuotas por lote. Se incorporan microcasos cuando mejoran la evaluación del mismo concepto y se conservan las preguntas ya bien construidas.

La [ficha vigente de las 20 propuestas](GSI_REVISION_PILOTO_001.md) cambia únicamente estas cuatro:

| ID | Enfoque | Refinamiento |
| --- | --- | --- |
| `MAN-GSI-P14-014` | Conceptual | Derechos y garantías del artículo 55.2 mediante alternativas paralelas; la correcta comparte extensión y estructura con los distractores. |
| `AI-GSI-B2-T06-015` | Microcaso | DELETE con 204 y posterior 404; distinguir efecto solicitado, respuesta, seguridad y registros auxiliares. |
| `AI-GSI-B2-T13-001` | Microcaso | Continuidad durante el arranque del grupo electrógeno; distinguir SAI, regulación de tensión, redundancia de fuentes y conmutación. |
| `AI-GSI-B3-T01-004` | Microcaso | Primera prueba de usuarios al final de una cascada rígida; identificar retrabajo tardío frente a otros riesgos de proyecto. |

Las otras 16 propuestas son idénticas a la versión anterior. Se conservan todos los IDs, claves correctas y las 20 instantáneas del banco de partida. No se alteran las claves para equilibrar letras. La distribución global conceptual/contextualizada todavía no está medida; estos microcasos no fijan una cuota para otros lotes.

Cada propuesta mantiene cuatro alternativas, explicación de la correcta, tres justificaciones individuales y referencias verificables. Para el SAI se añade la guía HTML de Eaton sobre autonomía según carga y respaldo inmediato con UPS/generador; el ENS conserva su papel de referencia normativa. La consulta al PDF del fabricante superó el límite de lectura de la herramienta y se resolvió usando esa fuente HTML primaria, sin convertir documentos ni utilizar OCR.

## Versiones y hashes

- Hash canónico anterior: `3fb64a9bcf0bf4eb94bce38014a2584f485655f9539f74f45aa22d1c59938966`.
- Hash canónico vigente: `9ef7e9e1ebaf5ffb1aaed76f3213baac8779fc90a52f7d262f697ea9315f1d5b`.
- Los hashes de contenido de las cuatro propuestas están regenerados; los de partida y los de las otras 16 se conservan.
- La versión anterior del [JSON](../content/question-reviews/history/3fb64a9bcf0bf4eb94bce38014a2584f485655f9539f74f45aa22d1c59938966/lote-001.json) y de la [ficha](../content/question-reviews/history/3fb64a9bcf0bf4eb94bce38014a2584f485655f9539f74f45aa22d1c59938966/GSI_REVISION_PILOTO_001.md) se conservan íntegramente.

Los hashes incluyen las decisiones. Cambiar una propuesta o registrar una aceptación exige vincular la declaración humana al hash del lote decidido, no reutilizar el de una versión anterior.

## Validación y entrega

El [informe de comprobaciones](../logs/gsi-editorial-pilot-refinement.json) registra los hashes, los cuatro IDs modificados, las longitudes de opciones y los archivos protegidos. Sus métricas no certifican automáticamente unicidad semántica ni plausibilidad; la revisión humana sigue pendiente.

Comprobaciones ejecutadas:

- 15 pruebas del circuito editorial, incluidas conservación de la versión anterior, repetición idempotente y rechazo de cambios en las otras 16 propuestas.
- 23 archivos JSON contra 21 esquemas; validación de las 20 propuestas y simulación sin escribir bancos.
- Progreso editorial y documentación sincronizados; sintaxis Python y `git diff --check`.
- Comparación por SHA-256: los bancos oficial, manual e IA, los registros de aceptación y la cola de partida permanecen idénticos a sus valores al comenzar este ajuste.
- El código de la aplicación y los bancos activos no se modifican en este ajuste; las pruebas funcionales de la entrega técnica anterior se conservan sin atribuirles una ejecución nueva.

Para comprobar esta propuesta:

```powershell
.\.venv\Scripts\python.exe -B scripts/editorial_batches.py --batch content/question-reviews/lote-001.json
.\.venv\Scripts\python.exe -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -B scripts/validate_json.py
```

Archivos modificados: el generador `scripts/prepare_editorial_pilot.py`, las pruebas `tests/editorial_batch_tests.py`, `content/question-reviews/lote-001.json` y las fichas y guías `docs/GSI_REVISION_PILOTO_001.md`, `docs/GSI_MEJORA_TESTS.md` y `docs/GSI_REVISION_EDITORIAL.md`.

Archivos creados: las dos instantáneas históricas enlazadas, `logs/gsi-editorial-pilot-refinement.json` y este informe. No se han convertido documentos ni hay conversiones nuevas pendientes.

Hito completado: refinamiento y regeneración de las propuestas. Permanecen **20 pendientes de aprobación, cero aceptaciones nuevas y cero aplicaciones o publicaciones**. El siguiente paso es tu revisión expresa del lote vigente antes de aplicar cualquier cambio o avanzar al resto del banco.
