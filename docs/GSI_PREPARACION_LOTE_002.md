# Preparación de GSI-EDITORIAL-002

Fecha de preparación y consulta de fuentes: 26 de octubre de 2026. Base de trabajo: `e3e20ab879518c899806a70575eead28b3b35e6f`.

## Entrega para revisión

Se preparan las **20 siguientes preguntas IA** de la cola inmutable, posiciones 21–40 de `review_order`. Todas pertenecen a las 128 incidencias IA originales. La aplicación y la suite completa del piloto constan en el [informe del lote 001](GSI_APLICACION_LOTE_001.md).

La [ficha antes/después](GSI_REVISION_LOTE_002.md) contiene enunciados, opciones, correcta, explicación de cada distractor, motivo, fuentes primarias y hashes individuales. La [propuesta JSON](../content/question-reviews/lote-002.json) conserva las instantáneas de partida y la procedencia original.

Hash canónico del lote: `b50edfbce2d3510a105aebb4304f1ef485e329686605d0e88c3e8201aedfcf1d`.

**Estado: 20 propuestas pendientes de revisión humana; 0 aceptadas, 0 aplicadas y 0 retiradas en este lote.** Los estados finales que aparecen dentro de `after` describen lo propuesto; no modifican la versión activa ni acreditan aprobación. No se ha creado ningún recibo de aceptación del lote 002.

## Criterios y decisiones del preparador

Se mantienen los conceptos y las claves originales de las 20 preguntas. La prioridad es sustituir distractores ajenos al concepto por confusiones cercanas: mantenimiento correctivo/adaptativo/perfectivo, hitos del Proceso Unificado, gobierno frente a operación de datos, inventario frente a configuración y errores al interpretar métricas.

Hay 14 preguntas conceptuales y 6 aplicaciones breves: prevención de fallos, frecuencia de despliegue, bloqueo transaccional, estadísticas del optimizador, réplica local y postura de un dispositivo. Esta clasificación describe el resultado de las decisiones individuales; no impone una cuota. Los casos son hipotéticos. La distribución del conjunto de las 1.762 preguntas todavía no está clasificada.

Las preguntas sobre Constitución y RGPD sustituyen la referencia genérica a los apuntes por preceptos exactos. Se precisan el inicio del plazo de mociones alternativas, el campo de clave pública de X.509, las bases de licitud para funciones públicas, el contenido y la forma del encargo y el criterio general de EIPD. No se ha identificado un cambio necesario de clave ni de concepto que requiera reemplazar IDs.

La comprobación asistida de fuentes y la rúbrica son la evaluación del preparador. La revisión y aceptación del propietario aún no se han producido. La dificultad sigue siendo orientativa y no se ha calibrado estadísticamente.

## Fuentes y excepciones

Cada propuesta conserva título, URL HTTPS, apartado exacto, versión o edición cuando procede y fecha real de comprobación. Las referencias y localizadores están en la ficha; no se han convertido ni descargado documentos originales.

- Mantenimiento: NASA SWEHB Ver D, SWE-195 y SWE-075; se distingue reducción del riesgo de su eliminación garantizada.
- Análisis y diseño OO: capítulo del autor Doug Lea, con continuidad entre modelos. Proceso Unificado: IBM Redbooks SG24-7362-00, §§2.4.2 y 4.3.3; fuente histórica utilizada para el modelo clásico, no como versión vigente de una herramienta.
- Despliegue y gobierno de datos: DORA e IBM Think. La página IBM Docs explorada devolvió 403; se eligió el artículo primario de IBM que sí pudo abrirse y contrastarse.
- Bloqueos y estadísticas: PostgreSQL 18, §§13.3 y 14.2.1. No se garantiza un plan óptimo después de actualizar estadísticas ni se confunde una espera con un interbloqueo.
- Réplica: Microsoft Azure, separación de dominios de fallo y diferencia entre réplica y recuperación histórica.
- Configuración: NIST SP 800-128, actualización de 2019, y Pro Git. Un estado del repositorio no prueba por sí mismo el despliegue.
- NAC, Web y certificados: Cisco, W3C y RFC 5280. HTTP/3: RFC 9114 y RFC 9000; se excluyen del supuesto dependencias de aplicación y QPACK para precisar el bloqueo de transporte, conservando fiabilidad, orden dentro del stream y congestión compartida.
- Constitución, discapacidad y datos personales: BOE, CEPD y AEPD. La pregunta de EIPD pide el criterio general del art.35.1; no pretende sustituir los supuestos específicos ni las excepciones del resto del artículo.

Las rutas exploradas que no respondieron no se utilizan como respaldo único. El [registro de preparación](../logs/gsi-editorial-002-preparation.json) identifica las notas y decisiones individuales.

## Métricas del lote

Son señales automáticas sobre estas 20 preguntas, calculadas con el analizador 2.0.0. La columna de propuesta representa una simulación en memoria, no cambios publicados.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 18 | 9 |
| Acierto al escoger la primera alternativa de longitud máxima | 18/20 (90 %) | 10/20 (50 %) |
| Ratio entre correcta y distractor máximo de 1,5–<2 | 0 | 0 |
| Ratio ≥2 | 15 | 0 |
| Feedback correcto menor de 15 palabras | 14 | 0 |
| Feedback idéntico para acierto y error | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de formulaciones absolutas en distractores | 5 | 0 |
| Explicaciones individuales de los tres distractores | 0/20 | 20/20 |

No se alargan alternativas para cumplir umbrales ni se cambian claves para repartir letras. Una alternativa correcta puede seguir siendo la más larga por su contenido. El 50 % no es una medida de discriminación pedagógica; el barajado conserva los IDs y cambia sus letras visibles en sesiones nuevas.

## Validación y reproducción

Se ejecutan la simulación completa, las 17 pruebas del circuito editorial, la validación de 24 JSON y 21 esquemas, el validador de las 1.964 preguntas y los 19.251 controles de integridad. Se comprueban también hashes, orden de cola, claves, tres explicaciones por pregunta y correspondencia entre ficha y JSON.

La auditoría de preparación confirma que los tres bancos, los borradores IA, los originales documentales y las aceptaciones del piloto permanecen iguales respecto a `e3e20ab`. No hay cambios de aplicación. La suite HTTP completa con 82 comprobaciones de navegador sigue siendo la del piloto aplicado; no se presenta como ejecución sobre las propuestas pendientes.

```powershell
.\.venv\Scripts\python.exe -B scripts/editorial_batches.py --batch content/question-reviews/lote-002.json --render docs/GSI_REVISION_LOTE_002.md
.\.venv\Scripts\python.exe -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -B scripts/validate_json.py
.\.venv\Scripts\python.exe -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -B scripts/validate_references.py
git diff --check
```

Para probar la propuesta, abrir la ficha y ejecutar la simulación; esta no escribe en los bancos. Para contrastar el producto activo, servir el repositorio por HTTP y abrir Entrenamiento o Simulacros: siguen usando los bancos del piloto, no las versiones propuestas en este lote.

## Archivos y siguiente paso

Creados: `content/question-reviews/lote-002.json`, `docs/GSI_REVISION_LOTE_002.md`, este informe y `logs/gsi-editorial-002-preparation.json`.

Modificados: `docs/GSI_MEJORA_TESTS.md`, para enlazar el nuevo lote, y `logs/gsi-editorial-progress.json`, que ahora distingue 20 revisadas, 20 propuestas y 1.742 pendientes de aceptación, de las cuales 1.722 aún no tienen propuesta.

No hay documentos convertidos ni conversiones nuevas pendientes. No se publica, fusiona ni aplica este lote. El siguiente paso es la revisión del propietario y su decisión sobre el hash exacto; cualquier corrección posterior exigirá regenerar los hashes antes de solicitar la aceptación.
