# Revisión editorial del banco GSI

Estado a 15 de septiembre de 2026: **959 preguntas curadas activas; 803 preguntas generadas pendientes**. Las primeras conservan las claves y explicaciones del corpus revisado; no son preguntas oficiales. Las segundas no se incorporan al entrenamiento ni al examen mientras permanezcan pendientes.

## Evidencia disponible

La vista `review.html`, abierta por HTTP desde la raíz del sitio, permite filtrar por tema e identificador y leer cada pregunta, la respuesta propuesta, la explicación, la sección completa de respaldo y el enlace al documento. Es una vista de lectura: no escribe progreso ni cambia estados.

La autoría está en los archivos `.txt` de `content/question-drafts/`. Cada fila contiene siete campos separados por `|`: sección, enunciado, respuesta correcta, tres distractores y explicación. Los encabezados `@B1-T01` identifican el tema. No se debe reordenar un lote publicado sin gestionar expresamente sus identificadores.

`data/gsi-editorial-reviews.json` contiene registros ligados al SHA-256 de la fila y de su sección de respaldo. Una modificación invalida la correspondencia con la revisión anterior. El compilador genera alternativas barajadas de forma reproducible y conserva `origin: ai`, `official_status: not_official` y la procedencia.

## Trabajo editorial realizado

Se cotejó una muestra estratificada de 58 preguntas: 41 generadas, una por cada tema completado con borradores, y 17 curadas, una por tema disponible. Los identificadores están en `sample_ids`. Hubo 120 correcciones individualizadas de distractores, redundancias, formulaciones y respaldo explícito. El historial anterior/nuevo está en `logs/gsi-editorial-corrections.json`; no es un certificado de revisión humana.

Se comprobó automáticamente la coincidencia de las 959 claves importadas con sus solucionarios y la de las 803 preguntas generadas con su fila y sección. Esa comprobación detecta divergencias e integridad, pero no demuestra por sí sola que una pregunta sea inequívoca o esté bien redactada.

Los candidatos a duplicados y sus decisiones editoriales se documentan en `logs/gsi-semantic-review.json`. La búsqueda semántica es heurística y no garantiza detectar todas las paráfrasis del banco.

## Pendiente para la activación

La revisión automática de permisos rechazó activar masivamente las 803 preguntas sin validación humana independiente. Se conserva `reviewer_type: ai`, `status: pending_human_review` y `decision: pending_review`. Se ha solicitado al propietario una decisión expresa sobre si admite la revisión editorial asistida por IA como suficiente, sin atribuirle validación humana. No se ha recibido ni registrado esa autorización.

Para una revisión humana, quien revise debe contrastar enunciado, cuatro alternativas, unicidad de la correcta, explicación, localizador y vigencia. Los registros aceptados deben identificar al revisor real, el método, la fecha y los hashes exactos. No basta con cambiar todas las decisiones mediante un script.

Después de una revisión y autorización suficientes, el compilador `scripts/build_gsi_authored_questions.py` materializa únicamente aceptaciones con hashes coincidentes. La validación final exige actualmente revisor humano para una pregunta generada activa. No se debe modificar esa condición para simular una revisión; una eventual autorización del propietario debe documentar con veracidad el método admitido antes de cambiar la política.

Tras cualquier actualización se ejecuta `python scripts/run_gsi_suite.py`. Solo un código 0 permite declarar superadas las pruebas técnicas y la cobertura. El estado presente produce código 2 y mantiene el bloqueo visible.
