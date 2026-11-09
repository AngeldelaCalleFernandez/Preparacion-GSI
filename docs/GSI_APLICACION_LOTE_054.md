# Aplicación del lote GSI-EDITORIAL-054

El 5 de noviembre de 2026 se aplicaron localmente las 20 propuestas de IA aprobadas por el propietario. El SHA-256 canónico `6fe38eadb1b10b25e57a639122d14ac0d5743f49a31c093275297ae0ea28ccb5` coincide con el contenido aprobado. El historial registra las decisiones por ID y conserva las versiones anterior y posterior de cada pregunta. [Propuesta](../content/question-reviews/lote-054.json) · [Recibo de aprobación](../content/question-reviews/approvals/GSI-EDITORIAL-054.json) · [Historial](../data/gsi-editorial-revisions.json).

La comparación con la copia previa confirmó 20 cambios en el banco IA y la conservación de los identificadores, las opciones A–D y las claves. Se verificaron por hash las 202 oficiales, el banco manual, las aceptaciones IA históricas y los JSON de los demás lotes. Las versiones anteriores de las 20 preguntas siguen disponibles en el historial y respaldan la revisión histórica de IA.

## Corrección de normalización y verificación técnica

`AI-GSI-B3-T04-004` conserva la clave B. La explicación distingue la reunión sin pérdida de la preservación de dependencias. En `R(A,B,C)` con `AB→C` y `C→B`, la descomposición en `CB` y `AC` está en BCNF y es sin pérdida. Las dependencias proyectadas sobre esas tablas no implican `AB→C`. Se comprobó que dos tablas localmente válidas pueden unirse en dos filas con el mismo `AB` y distinto `C`. La síntesis a 3FN es una construcción diferente que puede conservar ambas propiedades bajo dependencias funcionales. [Database System Concepts, diapositivas 7.27 y 7.69](https://db-book.com/slides-dir/PDF-dir/ch7.pdf) · [Contraejemplo y revisión individual](GSI_PREPARACION_LOTE_054.md).

Antes de aplicar se contrastaron el lote y sus versiones de partida con la verificación del mismo día. Se confirmaron las 14 fuentes registradas, incluida la integridad de las copias PDF consultadas, y se repitieron los ocho ejercicios semánticos en memoria. Las pruebas de restricciones usan SQLite y los ejemplos de dependencias y concurrencia son modelos. El alcance de PostgreSQL 18 se contrastó con su documentación. [Verificación previa](../logs/gsi-editorial-054-preapproval-2026-11-05.json) · [Ficha antes/después](GSI_REVISION_LOTE_054.md).

| Comprobación | Resultado |
| --- | --- |
| Suite mantenida | Código 0 y 19.251 controles de integridad superados |
| Datos | 111 JSON, 21 esquemas y 1.964 preguntas validadas |
| Pruebas en JavaScript y Chrome | 101 unitarias, 289 de regresión y 82 comprobaciones HTTP |
| Circuito editorial, analizador y jerarquía | 19, 8 y 5 pruebas superadas |
| Recorrido específico del lote en Chrome a 390 px | 20 respuestas correctas, 60 explicaciones de distractores, 80 intentos en cuatro sesiones y los 20 IDs disponibles en Refuerzo |
| Funciones del producto | Entrenamiento, barajado, reanudación, Simulacros, estadísticas, Refuerzo, exportación e importación bajo una subruta HTTP local |

Dentro del lote, las respuestas correctas que eran las únicas más largas pasan de 9 a 3. Escoger la primera alternativa de longitud máxima pasa de acertar el 45 % al 20 %. Las explicaciones correctas de menos de 15 palabras pasan de 19 a 0 y las 20 preguntas tienen explicación individual para sus tres distractores. La dificultad sigue siendo orientativa. [Registro de resultados](../logs/gsi-editorial-054-application-2026-11-05.json).

## Archivos, reproducción y continuidad

Se crearon el recibo, este informe y el registro de pruebas. Se actualizaron el banco IA, el historial de revisiones, el estado editorial documentado y los informes derivados de calidad, progreso, exportación e integridad. No hubo conversiones documentales ni quedan conversiones nuevas pendientes.

Desde la raíz del proyecto, con las dependencias y Chrome disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-054.json
.\.venv\Scripts\python.exe -X utf8 -B scripts/export_gsi_questions.py --check
.\.venv\Scripts\python.exe -X utf8 -B scripts/run_gsi_suite.py
```

El banco local suma 60 preguntas aprobadas y aplicadas. Quedan 1.702 propuestas en 86 lotes y cuatro incidencias activas con corrección propuesta. La siguiente prioridad es el lote 055, que precisa el significado de `O(n)` y requiere su propia decisión editorial. [Progreso actual](../logs/gsi-editorial-progress.json) · [Ficha del lote 055](GSI_REVISION_LOTE_055.md).
