# Cierre editorial del banco GSI

> **Estado de publicación.** Los 78 lotes quedaron ratificados para la versión provisional de estudio. La revisión editorial independiente sigue pendiente. [Alcance y límites](GSI_VERSION_PROVISIONAL.md).

El 9 de noviembre de 2026 se completó la aplicación local de las **1.762 preguntas manuales y de IA**. Las 959 manuales y las 803 de IA conservan sus IDs, claves, procedencia y versiones anteriores. Las 202 oficiales son idénticas en bytes al banco auditado en `a32323c`. [Historial de revisiones](../data/gsi-editorial-revisions.json) · [Progreso por ID](../logs/gsi-editorial-progress.json).

## Aprobación y alcance

La última ratificación del propietario cubre, para esta publicación provisional, los 78 lotes cuyo alcance exacto estaba pendiente. Los 89 recibos y sus versiones se conservan. Este informe recoge la aplicación local de las últimas 1.562 preguntas (875 manuales y 687 de IA). Las 128 preguntas IA del diagnóstico original están cubiertas. [Ratificación por lote](../content/question-reviews/ratification-provisional-2026-11-09.json) · [Resultados por lote](../logs/gsi-editorial-cierre-2026-11-09.json).

Se comparó cada aplicación con el estado inmediatamente anterior. Solo cambiaron los registros previstos. La auditoría de cierre verificó 455 archivos protegidos, incluidos el banco oficial, los borradores de IA, las aceptaciones históricas, las fichas y los JSON propuestos. También comprobó que las seis incidencias editoriales confirmadas durante la preparación tienen su versión corregida activa. No hubo conversiones de documentos ni quedan nuevas conversiones pendientes.

## Fuentes y revisión

Cada ficha registra la revisión individual del preparador, los motivos y las fuentes con localizador y fecha de comprobación. El cierre cotejó los hashes, las fichas y los registros de preparación de las 1.562 propuestas de esta entrega. Se reconsultaron fuentes sensibles y casos de acceso limitado, entre ellos el ENS, eIDAS, los servicios comunes de la Administración y la documentación de PostgreSQL. La preparación registró uso de contenido primario indexado en alguna fuente de 28 preguntas de la última entrega. Se conserva esa distinción por ID, junto con las fechas originales de consulta. [ENS, texto consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · [eIDAS, reforma](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80608) · [GEISER, ficha oficial](https://administracionelectronica.gob.es/ctt/geiser) · [PostgreSQL 18, recuperación PITR](https://www.postgresql.org/docs/18/continuous-archiving.html).

La revisión individual de preparación y la aceptación del propietario están registradas por separado. La ratificación de alcance se concedió para la publicación provisional. La revisión humana independiente está pendiente. La dificultad sigue siendo orientativa y su calibración estadística queda para una etapa posterior. La distribución final es de **1.250 preguntas conceptuales y 512 de aplicación**. [Desglose por origen](GSI_DISTRIBUCION_CONCEPTUAL_APLICACION.md).

## Métricas

| Señal | 1.562 antes | 1.562 aplicadas | 1.762 auditadas | 1.762 activas |
| --- | ---: | ---: | ---: | ---: |
| Correcta única más larga | 722 | 380 | 830 | 432 |
| Aciertos al escoger la primera alternativa más larga | 742 | 448 | 852 | 504 |
| Ratio de 1,5 a menos de 2 | 277 | 0 | 298 | 0 |
| Ratio de 2 o más | 4 | 0 | 35 | 0 |
| Explicación correcta de menos de 15 palabras | 1.264 | 0 | 1.435 | 0 |
| Feedback de acierto y error idéntico | 687 | 0 | 803 | 0 |
| Alternativas duplicadas según el analizador | 0 | 0 | 0 | 0 |
| Agrupación de formulaciones absolutas | 52 | 0 | 99 | 0 |

En el banco completo, escoger la primera alternativa de longitud máxima pasa del 48,35 % al 28,60 %. Las preguntas activas incorporan 5.286 explicaciones individuales de distractores. El registro de cierre incluye las métricas separadas por origen y lote. Las señales automáticas indican qué inspeccionar y la rúbrica editorial se documenta por pregunta. [Análisis por banco y tema](GSI_CALIDAD_PREGUNTAS.md) · [Resultados por lote](../logs/gsi-editorial-cierre-2026-11-09.json).

## Validación y reproducción

| Comprobación | Resultado |
| --- | --- |
| Suite mantenida | Código 0. 19.251 comprobaciones de integridad, 111 JSON, 21 esquemas y 1.964 preguntas validadas |
| Pruebas de aplicación | 101 unitarias, 289 de regresión en navegador y 82 comprobaciones HTTP |
| Pruebas de datos editoriales | 19 del circuito editorial, 8 del analizador y 5 de jerarquía |
| Recorrido ampliado en Chrome | 170 comprobaciones. Los 89 lotes pasan la comparación de texto, letras visibles, claves, feedback y registro de intentos |
| Respuestas del banco revisado | 1.762 correctas y 5.286 distractores comprobados con barajado, con 7.048 intentos en sesiones aisladas |
| Correspondencia con barajado activo y desactivado | 1.762 preguntas, 14.096 comprobaciones de feedback y 202 órdenes oficiales conservados |
| Recorridos del producto | Entrenamiento, Simulacros, estadísticas, Refuerzo y exportación e importación en escritorio y móvil bajo la subruta HTTP de prueba |

La primera suite encontró una prueba unitaria que usaba una pregunta del banco activo como si careciera de revisión editorial. El dato de prueba representa ahora explícitamente la versión antigua y conserva la comprobación de rechazo al detectar una revisión. La suite repetida pasó con código 0.

El recorrido ampliado comprueba reanudación después de un fallo en cada lote, los recuentos de intentos y los IDs en Refuerzo. La suite ordinaria cubre también repetir falladas, la preferencia de barajado, el orden de las oficiales y la exclusión de IA pendiente mediante casos de prueba. [Suite mantenida](../logs/gsi-suite.json) · [Recorrido ampliado](../logs/gsi-browser-smoke-editorial.json).

Desde la raíz del proyecto, con Chrome y Playwright disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/export_gsi_questions.py --check
.\.venv\Scripts\python.exe -X utf8 -B scripts/run_gsi_suite.py
$env:GSI_SMOKE_ALL_EDITORIAL = "1"
node tests/gsi-smoke.mjs
Remove-Item Env:GSI_SMOKE_ALL_EDITORIAL
```

Se crearon el inventario de alcance, los 79 recibos, este informe y los registros de cierre y del recorrido ampliado. Se actualizaron los bancos IA y manual, el historial, los derivados de calidad y progreso, la exportación, la documentación de estado y las pruebas de sesiones antiguas y del recorrido HTTP de todos los lotes. El trabajo quedó en el repositorio local. [Inventario de archivos y resultados](../logs/gsi-editorial-cierre-2026-11-09.json).
