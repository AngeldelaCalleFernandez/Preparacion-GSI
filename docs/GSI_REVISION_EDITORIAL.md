# Revisión editorial del banco GSI

Estado a 16 de septiembre de 2026: **959 preguntas curadas, 803 generadas y 202 oficiales activas**. Las curadas conservan las claves y explicaciones del corpus revisado. Las generadas conservan su origen IA; las oficiales se importan de cuestionarios y plantillas definitivas del INAP.

## Evidencia disponible

La vista `review.html`, abierta por HTTP desde la raíz del sitio, permite filtrar por tema e identificador y leer cada pregunta, la respuesta propuesta, la explicación, la sección completa de respaldo y el enlace al documento. Es una vista de lectura: no escribe progreso ni cambia estados.

La autoría está en los archivos `.txt` de `content/question-drafts/`. Cada fila contiene siete campos separados por `|`: sección, enunciado, respuesta correcta, tres distractores y explicación. Los encabezados `@B1-T01` identifican el tema. No se debe reordenar un lote publicado sin gestionar expresamente sus identificadores.

`data/gsi-editorial-reviews.json` contiene registros ligados al SHA-256 de la fila y de su sección de respaldo. Una modificación invalida la correspondencia con la revisión anterior. El compilador genera alternativas barajadas de forma reproducible y conserva `origin: ai`, `official_status: not_official` y la procedencia.

## Trabajo editorial realizado

Se cotejó una muestra estratificada de 58 preguntas: 41 generadas, una por cada tema completado con borradores, y 17 curadas, una por tema disponible. Los identificadores están en `sample_ids`. Hubo 120 correcciones individualizadas de distractores, redundancias, formulaciones y respaldo explícito. El historial anterior/nuevo está en `logs/gsi-editorial-corrections.json`; no es un certificado de revisión humana.

Se comprobó automáticamente la coincidencia de las 959 claves importadas con sus solucionarios y la de las 803 preguntas generadas con su fila y sección. Esa comprobación detecta divergencias e integridad, pero no demuestra por sí sola que una pregunta sea inequívoca o esté bien redactada.

Los candidatos a duplicados y sus decisiones editoriales se documentan en `logs/gsi-semantic-review.json`. La búsqueda semántica es heurística y no garantiza detectar todas las paráfrasis del banco.

## Confirmación del propietario y activación

Tras el bloqueo inicial, el propietario declaró el 15 de septiembre: «los test estan revisados». Se registra esa declaración de revisión existente para el lote exacto de 803 preguntas, con su identidad de propietario, fecha, hashes de pregunta y evidencia y huella agregada del lote. No se atribuye al agente una revisión humana ni se inventa el método que utilizó el propietario. El registro identifica `reviewer_type: human`, `status: reviewed` y decisiones aceptadas por esa confirmación.

Para una revisión humana, quien revise debe contrastar enunciado, cuatro alternativas, unicidad de la correcta, explicación, localizador y vigencia. Los registros aceptados deben identificar al revisor real, el método, la fecha y los hashes exactos. No basta con cambiar todas las decisiones mediante un script.

El compilador `scripts/build_gsi_authored_questions.py` materializa únicamente aceptaciones con hashes coincidentes y revisión global confirmada. La validación final exige revisor humano para una pregunta generada activa y verifica la huella del lote declarado. Si cambia una fila o su evidencia, debe renovarse la revisión afectada.

Tras cualquier actualización se ejecuta `python scripts/run_gsi_suite.py`. Solo un código 0 permite declarar superadas las pruebas técnicas y la cobertura. El resultado vigente está en `logs/gsi-suite.json`.
