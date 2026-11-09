# Aplicación del lote GSI-EDITORIAL-004

El 9 de noviembre de 2026 se aplicaron localmente las 20 propuestas IA aprobadas por el propietario. El SHA-256 canónico coincide con el aprobado, `2ae24b1ba96244feefd3de39ea500c7a7222563468b009e9b9dfea2936556b2b`. Se conservaron los IDs de pregunta y alternativa, las claves, la procedencia y las versiones de partida. [Ficha antes/después](GSI_REVISION_LOTE_004.md) · [Recibo](../content/question-reviews/approvals/GSI-EDITORIAL-004.json) · [Historial](../data/gsi-editorial-revisions.json).

Solo cambiaron los 20 registros IA aprobados. Los otros 1.944 permanecen iguales, incluidas las 202 preguntas oficiales. Se comprobaron 453 archivos protegidos, entre ellos el banco manual, las propuestas de otros lotes, los borradores originales y las aceptaciones históricas. La cadena de revisiones vincula cada borrador con su versión de partida y cada texto activo con su recibo exacto. El bloqueo de regeneración integral impide volver a activar los textos históricos.

## Contraste de claves y fuentes

Se cotejaron las 23 referencias del lote, correspondientes a 22 fuentes. La pregunta sobre CVSS conserva B y distingue gravedad intrínseca de riesgo contextual. La de Kanban conserva A como conjunto de métricas útiles y la explicación la distingue del mínimo que enumera la guía de mayo de 2025. [FIRST, CVSS v4.0](https://www.first.org/cvss/v4.0/user-guide) · [The Kanban Guide, Flow Metrics](https://kanbanguides.org/the-kanban-guide/2025.5/).

Se consultaron directamente 20 fuentes. En las otras dos se cotejó el contenido primario indexado. IBM Docs devolvió HTTP 403 para la tabla del caso de uso. El PDF de IIBA superó el límite de tamaño de la herramienta. Se contrastaron sus apartados sobre requisitos normativos y prerrequisitos y se abrió el artículo complementario sobre secuenciación. [IBM Docs, tabla 1](https://www.ibm.com/docs/en/engineering-lifecycle-management-suite/doors-next/7.1.0?topic=cases-use-case-specification-outline) · [IIBA, Backlog Management](https://www.iiba.org/contentassets/e0c3e1bdcc624d90ba58ec7a45e0db1d/analyze-to-determine-what-is-valuable-insight.pdf) · [IIBA, Prioritization vs. Sequencing](https://www.iiba.org/business-analysis-blogs/moscow-or-bust-myths-about-prioritization/) · [Registro de preparación](../logs/gsi-editorial-004-preparation.json).

| Comprobación | Resultado |
| --- | --- |
| Suite completa | Código 0, con 19.251 controles de integridad superados |
| Datos | 111 JSON, 21 esquemas y 1.964 preguntas validadas. Exportación sincronizada |
| Pruebas unitarias, regresión y HTTP | 101, 289 y 82 comprobaciones superadas |
| Circuito editorial, analizador y jerarquía | 19, 8 y 5 pruebas superadas |
| Entrenamiento del lote en Chrome a 390 × 844 | 20 respuestas correctas y 60 distractores con feedback literal y letras coherentes con el barajado. Reanudación tras un fallo, 80 intentos en cuatro sesiones y los 20 IDs en Refuerzo |
| Recorridos de producto | Entrenamiento, Simulacros, estadísticas, Refuerzo, exportación e importación en escritorio y móvil con la subruta HTTP de prueba |

Las explicaciones correctas breves bajaron de 19 a 0 y se incorporaron 60 explicaciones de distractores. Escoger la primera alternativa más larga acertaba 14 de 20 y ahora acierta 3 de 20. Las alertas de longitud entre 1,5 y menos de 2 pasaron de 5 a 0. La dificultad sigue siendo orientativa. [Registro de aplicación y pruebas](../logs/gsi-editorial-004-application-2026-11-09.json).

## Archivos y reproducción

Se crearon el recibo, este informe y el registro de aplicación. Se actualizaron el banco IA, el historial, el estado del plan y los derivados de calidad, progreso, exportación e integridad. El registro enumera los archivos exactos. No hubo conversiones ni quedan conversiones nuevas pendientes.

Desde la raíz del proyecto, con Chrome y las dependencias disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-004.json
.\.venv\Scripts\python.exe -X utf8 -B scripts/export_gsi_questions.py --check
.\.venv\Scripts\python.exe -X utf8 -B scripts/run_gsi_suite.py
```

Hay 200 preguntas aprobadas y aplicadas. Quedan 1.562 propuestas en 79 lotes. De las 128 preguntas IA señaladas en la auditoría, 75 están aplicadas y 53 esperan decisión editorial. El lote 005 reúne las 20 siguientes. [Progreso editorial](../logs/gsi-editorial-progress.json) · [Ficha del lote 005](GSI_REVISION_LOTE_005.md).
