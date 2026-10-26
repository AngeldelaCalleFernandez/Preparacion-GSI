# Mejora de preguntas y entrenamiento — 26 de octubre de 2026

## Estado y alcance

Base: `gsi-only-final`, commit `a32323ccdd1ec50fbfd51122e0a4fde99c302743`.
La implementación añade diagnóstico gradual, propuestas por versiones, aceptación por lote y barajado en entrenamiento. El banco activo conserva sus 959 manuales, 803 IA y 202 oficiales.

**La revisión editorial completa sigue pendiente. Hay 20 propuestas preparadas y cero aceptaciones nuevas.** No se presenta la preparación asistida por IA como revisión humana ni independiente. La dificultad sigue siendo orientativa y no está calibrada.

La [ficha del piloto](GSI_REVISION_PILOTO_001.md) reúne las cuatro preguntas manuales citadas en la auditoría y 16 IA, incluyendo DELETE y las 15 siguientes por prioridad e ID en la cola original. Cada una conserva su concepto, clave, procedencia y los IDs de las alternativas. Las 20 propuestas incorporan explicación de los tres distractores y fuentes primarias con localizador y fecha de consulta.

## Criterio editorial del entrenamiento

La orientación para el banco de entrenamiento es aproximadamente **70 % de preguntas conceptuales exigentes y 30 % de aplicación contextualizada**. Es una referencia para el conjunto del banco, sin cuotas obligatorias por lote ni reformulaciones destinadas solo a alcanzar un porcentaje. La distribución global todavía no está clasificada ni medida.

Se conservan las preguntas ya bien construidas. Se introduce un microcaso solo si obliga a aplicar el mismo conocimiento y permite distinguir confusiones próximas mejor que una pregunta directa. Los escenarios son hipotéticos, no datos de incidentes reales. Se mantiene el concepto original, con cuatro alternativas plausibles y paralelas, una única correcta y una explicación individual de cada distractor. Las referencias deben ser verificables y las condiciones del caso deben bastar para resolverlo.

Se revisan las pistas de longitud y redacción sin rellenar las alternativas. Se conservan las claves e IDs originales; no se cambia una respuesta para conseguir un reparto de letras. El barajado de entrenamiento evita asociar un concepto a una letra fija, respetando las preguntas que dependen del orden. Las oficiales permanecen intactas.

En la revisión actual del lote `GSI-EDITORIAL-001` se perfeccionan únicamente `MAN-GSI-P14-014`, `AI-GSI-B2-T06-015`, `AI-GSI-B2-T13-001` y `AI-GSI-B3-T01-004`. La constitucional sigue siendo conceptual; DELETE, SAI y cascada incorporan microcasos. Las otras 16 propuestas se conservan. Se regenera el hash del lote y los de las cuatro propuestas; las instantáneas del banco de partida no cambian.

La [ficha vigente](GSI_REVISION_PILOTO_001.md) sigue pendiente de aprobación expresa. Las versiones previas se conservan en `content/question-reviews/history/`, identificadas por el hash del lote. Esta actualización de propuestas no aplica ni activa preguntas y no publica cambios.

## Diagnóstico y cola completa

El [informe de calidad](GSI_CALIDAD_PREGUNTAS.md) y su JSON distinguen la regla histórica (correcta ≥40 caracteres y ratio ≥2) de las nuevas señales: ratio de 1,5 a menos de 2 y ratio ≥2 sin mínimo de caracteres. Se incluyen empates, acierto por primera alternativa de longitud máxima, feedback breve o idéntico, duplicados y redacción absoluta, por banco y tema.

Los recuentos comparables de partida son 474/959 aciertos por longitud en manuales y 378/803 en IA. Una relación de longitud se puede justificar si el contenido lo exige: no se debe rellenar un distractor para silenciar una alerta. La cantidad de palabras tampoco certifica una explicación.

La cola inmutable de [baseline.json](../content/question-reviews/baseline.json) contiene los 1.762 IDs, las 128 incidencias IA originales, los hashes de los bancos auditados y el orden previsto. El [progreso derivado](../logs/gsi-editorial-progress.json) distingue pendiente, propuesta y revisión aceptada. Los números de lote son orientativos para organizar la cola: el primer lote debe aceptarse y validarse antes de ampliarla.

## Revisar y aplicar un lote

1. Leer la ficha antes/después y contrastar cada pregunta con las referencias. La rúbrica marcada en la propuesta es la evaluación del preparador, todavía pendiente de tu revisión.
2. Comunicar las decisiones por ID o aceptar expresamente el lote concreto. Corregir primero las propuestas devueltas. Una aceptación parcial requiere separar las preguntas aceptadas en un lote propio de hasta 20; las demás continúan pendientes.
3. Si la aprobación identifica el hash exacto de una propuesta pendiente, conservar esa propuesta y registrar las decisiones por ID en `approval.decisions`, con valor `accepted`. Así la aceptación queda ligada al hash que el usuario revisó. Para el formato anterior de lotes con decisiones ya aceptadas, el recibo debe corresponder a su hash decidido. Generar una ficha nueva con otro nombre si la anterior tiene contenido distinto.
4. Conservar una aceptación humana con revisor identificado, fecha real, método comunicado, declaración real y `batch_sha256` del lote decidido. No reutilizar una declaración histórica ni inventar un método de revisión.
5. Simular y aplicar mediante la herramienta; después regenerar los derivados y ejecutar la suite completa. No ampliar el piloto si falla una comprobación crítica.

Simulación, sin modificar bancos:

```powershell
.\.venv\Scripts\python.exe -B scripts/editorial_batches.py --batch content/question-reviews/lote-001.json
```

Aplicación, únicamente después de registrar la aceptación real:

```powershell
.\.venv\Scripts\python.exe -B scripts/editorial_batches.py --batch content/question-reviews/lote-001.json --approval ruta/al/registro-de-aceptacion.json --apply
.\.venv\Scripts\python.exe -B scripts/analyze_question_quality.py --write
.\.venv\Scripts\python.exe -B scripts/editorial_progress.py --write
.\.venv\Scripts\python.exe -B scripts/export_gsi_questions.py --force
.\.venv\Scripts\python.exe -B scripts/run_gsi_suite.py
```

El registro de aceptación tiene estos campos: `reviewer`, `reviewer_type: human`, `reviewed_at`, `method`, `statement` y `batch_sha256`; puede añadir `decisions` para registrar la aceptación de cada ID sin cambiar el hash de la propuesta pendiente. Se archiva dentro de `data/gsi-editorial-revisions.json` junto al lote exacto; la herramienta no genera una aceptación. Las declaraciones y el método deben corresponder a lo que realmente haya comunicado el revisor.

`before`, `after` y sus hashes están incluidos en cada elemento. La simulación verifica esquemas, referencias, feedback y correspondencia con el banco actual. La aplicación comprueba primero el lote completo en memoria, escribe los bancos afectados y el historial, y restaura las salidas si hay un error de escritura. Un cierre forzado del proceso durante esas escrituras requiere restaurar los archivos desde Git y revisar el historial antes de reintentar.

## Procedencia, sincronización e historial

Los borradores `.txt` de IA y su aceptación original permanecen como instantáneas históricas. Una revisión nueva se representa por la capa versionada antes/después y su aceptación exacta; el validador comprueba ambas capas y exige que el JSON publicado coincida con la última versión aceptada. La aceptación antigua no se atribuye al texto nuevo.

Los importadores manual e IA rechazan sobrescribir bancos existentes. No deben ejecutarse para aplicar revisiones: borrar y regenerar un banco completo podría perder cambios ya aceptados y recolocar respuestas históricas. El compilador no activa propuestas por el hecho de que sean técnicamente válidas.

Las acciones admitidas son `revise`, `retain`, `withdraw` y `replace`. `retain` exige conservar el contenido y justificar la alerta. `withdraw` conserva el ID con estado inactivo. Un cambio de clave requiere `replace`: ID nuevo, enlace al anterior y retirada del original. Los IDs históricos permanecen disponibles para importar progreso. Las comprobaciones vigentes de cobertura siguen impidiendo cerrar una publicación si faltan preguntas activas suficientes.

Las 202 oficiales se verifican contra el hash del banco auditado. Se conservan literalmente, incluido su feedback. Sus señales se informan sin generar propuestas de reescritura.

## Entrenamiento y comprobaciones

«Barajar alternativas» está activado inicialmente para manuales e IA. La preferencia se guarda localmente y afecta a sesiones nuevas. Las oficiales y las preguntas que remiten al orden o a letras concretas conservan su orden.

La sesión guarda `shuffleOptions`, `optionOrderByQuestionKey` y una huella de versión por pregunta. Las letras visibles corresponden a posiciones; los intentos conservan el ID original. Se mantiene la correspondencia en corrección, resumen de falladas y exportación/importación. Repetir falladas crea una sesión nueva. Las sesiones antiguas recuperan su orden original; una versión cambiada obliga a iniciar otro entrenamiento sin borrar el historial.

El código 0 de la suite acredita los controles técnicos y de activación vigentes. La nueva revisión completa se informa aparte mediante `editorial_review_complete` y `editorial_pending`: un resultado técnico correcto no certifica calidad L3 ni calibración L4.

El cierre de esta mejora requerirá una decisión humana individual para los 1.762 IDs y que las preguntas que sigan activas cumplan la rúbrica. Hasta entonces, el siguiente hito es revisar el piloto, aplicar únicamente las decisiones aceptadas y validar antes de abordar las restantes incidencias IA.

No se han convertido documentos en este hito y no hay conversiones nuevas pendientes. Los originales documentales permanecen intactos.
