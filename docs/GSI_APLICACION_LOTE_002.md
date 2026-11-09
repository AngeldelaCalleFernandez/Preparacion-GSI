# Aplicación del lote GSI-EDITORIAL-002

El 9 de noviembre de 2026 se aplicaron localmente las 20 propuestas IA aprobadas por el propietario. El SHA-256 canónico coincide con el aprobado, `b50edfbce2d3510a105aebb4304f1ef485e329686605d0e88c3e8201aedfcf1d`. Se conservaron los IDs de pregunta y alternativa, las claves, la procedencia y las versiones de partida. [Ficha antes/después](GSI_REVISION_LOTE_002.md) · [Recibo](../content/question-reviews/approvals/GSI-EDITORIAL-002.json) · [Historial](../data/gsi-editorial-revisions.json).

Solo cambiaron los 20 registros IA aprobados. Los otros 1.944 permanecen iguales, incluidas las 202 preguntas oficiales, cuyo archivo es idéntico al auditado. La comparación de 447 archivos protegidos incluye el banco manual, las propuestas de otros lotes, los borradores IA y sus aceptaciones históricas. La cadena de revisiones vincula cada borrador con su versión original y cada texto activo con su recibo exacto. El bloqueo de regeneración integral impide volver a activar los textos históricos.

## Contraste de claves y fuentes

Se cotejaron las 24 referencias del lote y se reconsultaron sus 21 fuentes. Las 20 claves originales siguen siendo defendibles y cada distractor tiene explicación individual. La pregunta de mociones alternativas conserva D y sitúa su presentación en los dos primeros días del plazo constitucional. La de HTTP/3 conserva C y delimita el bloqueo por orden al flujo de transporte, excluyendo dependencias de aplicación y compresión de cabeceras. [Constitución Española, art. 113.3](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229#a113) · [RFC 9114, §§ 1.1, 1.2 y 4.2.1](https://www.rfc-editor.org/rfc/rfc9114.html) · [Registro de preparación](../logs/gsi-editorial-002-preparation.json).

| Comprobación | Resultado |
| --- | --- |
| Suite completa | Código 0, con 19.251 controles de integridad superados |
| Datos | 111 JSON, 21 esquemas y 1.964 preguntas validadas. Exportación sincronizada |
| Pruebas unitarias, regresión y HTTP | 101, 289 y 82 comprobaciones superadas |
| Circuito editorial, analizador y jerarquía | 19, 8 y 5 pruebas superadas |
| Entrenamiento del lote en Chrome a 390 × 844 | 20 respuestas correctas y 60 distractores con feedback literal y letras coherentes con el barajado. Reanudación tras un fallo, 80 intentos en cuatro sesiones y los 20 IDs en Refuerzo |
| Recorridos de producto | Entrenamiento, Simulacros, estadísticas, Refuerzo, exportación e importación en escritorio y móvil con la subruta HTTP de prueba |

Las explicaciones correctas breves bajaron de 14 a 0 y se incorporaron 60 explicaciones de distractores. Escoger la primera alternativa más larga acertaba 18 de 20 y ahora acierta 10 de 20. Los ratios de 2 o más pasaron de 15 a 0. La dificultad sigue siendo orientativa. [Registro de aplicación y pruebas](../logs/gsi-editorial-002-application-2026-11-09.json).

## Archivos y reproducción

Se crearon el recibo, este informe y el registro de aplicación. Se actualizaron el banco IA, el historial, el estado del plan y los derivados de calidad, progreso, exportación e integridad. El registro enumera los archivos exactos. No hubo conversiones ni quedan conversiones nuevas pendientes.

Desde la raíz del proyecto, con Chrome y las dependencias disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-002.json
.\.venv\Scripts\python.exe -X utf8 -B scripts/export_gsi_questions.py --check
.\.venv\Scripts\python.exe -X utf8 -B scripts/run_gsi_suite.py
```

Hay 160 preguntas aprobadas y aplicadas y quedan 1.602 propuestas en 81 lotes. De las 128 preguntas IA señaladas en el diagnóstico original se han aplicado 35, con 93 pendientes de decisión editorial. El lote 003 reúne las 20 siguientes de esa cola. [Progreso editorial](../logs/gsi-editorial-progress.json) · [Ficha del lote 003](GSI_REVISION_LOTE_003.md).
