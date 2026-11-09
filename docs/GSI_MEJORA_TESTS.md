# Mejora de preguntas y entrenamiento — 26 de octubre de 2026

## Estado y alcance

Base: `gsi-only-final`, commit `a32323ccdd1ec50fbfd51122e0a4fde99c302743`.
La implementación añade diagnóstico gradual, propuestas por versiones, aceptación por lote y barajado en entrenamiento. El banco activo conserva sus 959 manuales, 803 IA y 202 oficiales.

**Estado al 9 de noviembre de 2026.** Las 1.762 preguntas manuales y de IA tienen una versión aplicada en local y un recibo por lote. El propietario ratificó los 78 lotes pendientes para la publicación provisional, con sus hashes intactos. La auditoría independiente sigue pendiente. [Estado de la versión](GSI_VERSION_PROVISIONAL.md). El banco activo incorpora las seis correcciones de incidencias confirmadas durante la preparación. La dificultad sigue siendo orientativa. [Informe de cierre](GSI_CIERRE_EDITORIAL_2026-11-09.md).

La [ficha del piloto](GSI_REVISION_PILOTO_001.md) reúne las cuatro preguntas manuales citadas en la auditoría y 16 IA, incluyendo DELETE y las 15 siguientes por prioridad e ID en la cola original. Cada una conserva su concepto, clave, procedencia y los IDs de las alternativas. Las 20 propuestas incorporan explicación de los tres distractores y fuentes primarias con localizador y fecha de consulta.

## Criterio editorial del entrenamiento

La orientación para el banco de entrenamiento es aproximadamente **70 % de preguntas conceptuales exigentes y 30 % de aplicación contextualizada**. Es una referencia para el conjunto del banco, sin cuotas obligatorias por lote ni reformulaciones destinadas solo a alcanzar un porcentaje. El conjunto preparado de 1.762 versiones tiene 1.250 conceptuales (70,94 %) y 512 de aplicación (29,06 %). Las 1.762 versiones están aplicadas. [Desglose y método de recuento](GSI_DISTRIBUCION_CONCEPTUAL_APLICACION.md).

Se conservan las preguntas ya bien construidas. Se introduce un microcaso solo si obliga a aplicar el mismo conocimiento y permite distinguir confusiones próximas mejor que una pregunta directa. Los escenarios son hipotéticos, no datos de incidentes reales. Se mantiene el concepto original, con cuatro alternativas plausibles y paralelas, una única correcta y una explicación individual de cada distractor. Las referencias deben ser verificables y las condiciones del caso deben bastar para resolverlo.

Se revisan las pistas de longitud y redacción sin rellenar las alternativas. Se conservan las claves e IDs originales; no se cambia una respuesta para conseguir un reparto de letras. El barajado de entrenamiento evita asociar un concepto a una letra fija, respetando las preguntas que dependen del orden. Las oficiales permanecen intactas.

En la revisión actual del lote `GSI-EDITORIAL-001` se perfeccionan únicamente `MAN-GSI-P14-014`, `AI-GSI-B2-T06-015`, `AI-GSI-B2-T13-001` y `AI-GSI-B3-T01-004`. La constitucional sigue siendo conceptual; DELETE, SAI y cascada incorporan microcasos. Las otras 16 propuestas se conservan. Se regenera el hash del lote y los de las cuatro propuestas; las instantáneas del banco de partida no cambian.

La [ficha vigente](GSI_REVISION_PILOTO_001.md) refleja la aceptación expresa y la aplicación local de las 20 propuestas del hash `9ef7e9e1ebaf5ffb1aaed76f3213baac8779fc90a52f7d262f697ea9315f1d5b`. La propuesta original conserva sus decisiones de preparación; el recibo separado registra las 20 aceptaciones efectivas. Las versiones previas se conservan en `content/question-reviews/history/`, identificadas por el hash del lote. La preparación y el refinamiento anteriores no aplicaron preguntas. La aplicación posterior autorizada y sus comprobaciones se documentan en el [informe de aplicación](GSI_APLICACION_LOTE_001.md); no se ha publicado ni fusionado.

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

Las fichas con etiquetas o fragmentos HTML pueden generarse con `--literal-content`: los campos se muestran como texto y los enlaces permanecen utilizables. El formato predeterminado se conserva para reproducir el historial; para una variante literal de una ficha existente se debe elegir otro nombre de salida. El lote [031](GSI_PREPARACION_LOTE_031.md) usa este modo.

Las acciones admitidas son `revise`, `retain`, `withdraw` y `replace`. `retain` exige conservar el contenido y justificar la alerta. `withdraw` conserva el ID con estado inactivo. Un cambio de clave requiere `replace`: ID nuevo, enlace al anterior y retirada del original. Los IDs históricos permanecen disponibles para importar progreso. Las comprobaciones vigentes de cobertura siguen impidiendo cerrar una publicación si faltan preguntas activas suficientes.

Las 202 oficiales se verifican contra el hash del banco auditado. Se conservan literalmente, incluido su feedback. Sus señales se informan sin generar propuestas de reescritura.

## Entrenamiento y comprobaciones

«Barajar alternativas» está activado inicialmente para manuales e IA. La preferencia se guarda localmente y afecta a sesiones nuevas. Las oficiales y las preguntas que remiten al orden o a letras concretas conservan su orden.

La sesión guarda `shuffleOptions`, `optionOrderByQuestionKey` y una huella de versión por pregunta. Las letras visibles corresponden a posiciones; los intentos conservan el ID original. Se mantiene la correspondencia en corrección, resumen de falladas y exportación/importación. Repetir falladas crea una sesión nueva. Las sesiones antiguas recuperan su orden original; una versión cambiada obliga a iniciar otro entrenamiento sin borrar el historial.

El código 0 de la suite acredita los controles técnicos y de activación vigentes. La nueva revisión completa se informa aparte mediante `editorial_review_complete` y `editorial_pending`: un resultado técnico correcto no certifica calidad L3 ni calibración L4.

El cierre de esta mejora requerirá una decisión humana individual para los 1.762 IDs y que las preguntas que sigan activas cumplan la rúbrica. El piloto se ha aceptado y aplicado. Los [lotes 002](GSI_REVISION_LOTE_002.md), [003](GSI_REVISION_LOTE_003.md), [004](GSI_REVISION_LOTE_004.md), [005](GSI_REVISION_LOTE_005.md), [006](GSI_REVISION_LOTE_006.md), [007](GSI_REVISION_LOTE_007.md), [008](GSI_REVISION_LOTE_008.md), [009](GSI_REVISION_LOTE_009.md), [010](GSI_REVISION_LOTE_010.md), [011](GSI_REVISION_LOTE_011.md), [012](GSI_REVISION_LOTE_012.md), [013](GSI_REVISION_LOTE_013.md), [014](GSI_REVISION_LOTE_014.md), [015](GSI_REVISION_LOTE_015.md), [016](GSI_REVISION_LOTE_016.md), [017](GSI_REVISION_LOTE_017.md), [018](GSI_REVISION_LOTE_018.md), [019](GSI_REVISION_LOTE_019.md), [020](GSI_REVISION_LOTE_020.md), [021](GSI_REVISION_LOTE_021.md), [022](GSI_REVISION_LOTE_022.md), [023](GSI_REVISION_LOTE_023.md), [024](GSI_REVISION_LOTE_024.md), [025](GSI_REVISION_LOTE_025.md), [026](GSI_REVISION_LOTE_026.md), [027](GSI_REVISION_LOTE_027.md), [028](GSI_REVISION_LOTE_028.md), [029](GSI_REVISION_LOTE_029.md), [030](GSI_REVISION_LOTE_030.md), [031](GSI_REVISION_LOTE_031.md), [032](GSI_REVISION_LOTE_032.md), [033](GSI_REVISION_LOTE_033.md), [034](GSI_REVISION_LOTE_034.md), [035](GSI_REVISION_LOTE_035.md), [036](GSI_REVISION_LOTE_036.md), [037](GSI_REVISION_LOTE_037.md), [038](GSI_REVISION_LOTE_038.md), [039](GSI_REVISION_LOTE_039.md), [040](GSI_REVISION_LOTE_040.md), [041](GSI_REVISION_LOTE_041.md), [042](GSI_REVISION_LOTE_042.md), [043](GSI_REVISION_LOTE_043.md), [044](GSI_REVISION_LOTE_044.md), [045](GSI_REVISION_LOTE_045.md), [046](GSI_REVISION_LOTE_046.md), [047](GSI_REVISION_LOTE_047.md), [048](GSI_REVISION_LOTE_048.md), [049](GSI_REVISION_LOTE_049.md), [050](GSI_REVISION_LOTE_050.md), [051](GSI_REVISION_LOTE_051.md), [052](GSI_REVISION_LOTE_052.md), [053](GSI_REVISION_LOTE_053.md), [054](GSI_REVISION_LOTE_054.md), [055](GSI_REVISION_LOTE_055.md), [056](GSI_REVISION_LOTE_056.md), [057](GSI_REVISION_LOTE_057.md), [058](GSI_REVISION_LOTE_058.md), [059](GSI_REVISION_LOTE_059.md), [060](GSI_REVISION_LOTE_060.md), [061](GSI_REVISION_LOTE_061.md), [062](GSI_REVISION_LOTE_062.md), [063](GSI_REVISION_LOTE_063.md), [064](GSI_REVISION_LOTE_064.md), [065](GSI_REVISION_LOTE_065.md), [066](GSI_REVISION_LOTE_066.md), [067](GSI_REVISION_LOTE_067.md), [068](GSI_REVISION_LOTE_068.md), [069](GSI_REVISION_LOTE_069.md), [070](GSI_REVISION_LOTE_070.md), [071](GSI_REVISION_LOTE_071.md), [072](GSI_REVISION_LOTE_072.md), [073](GSI_REVISION_LOTE_073.md), [074](GSI_REVISION_LOTE_074.md), [075](GSI_REVISION_LOTE_075.md), [076](GSI_REVISION_LOTE_076.md), [077](GSI_REVISION_LOTE_077.md), [078](GSI_REVISION_LOTE_078.md), [079](GSI_REVISION_LOTE_079.md), [080](GSI_REVISION_LOTE_080.md), [081](GSI_REVISION_LOTE_081.md), [082](GSI_REVISION_LOTE_082.md), [083](GSI_REVISION_LOTE_083.md), [084](GSI_REVISION_LOTE_084.md), [085](GSI_REVISION_LOTE_085.md), [086](GSI_REVISION_LOTE_086.md), [087](GSI_REVISION_LOTE_087.md), [088](GSI_REVISION_LOTE_088.md) y [089](GSI_REVISION_LOTE_089.md) preparan las posiciones 21–1762 de la cola: 113 incidencias IA originales, otras 674 IA y 955 manuales. Sus informes de preparación ([002](GSI_PREPARACION_LOTE_002.md), [003](GSI_PREPARACION_LOTE_003.md), [004](GSI_PREPARACION_LOTE_004.md), [005](GSI_PREPARACION_LOTE_005.md), [006](GSI_PREPARACION_LOTE_006.md), [007](GSI_PREPARACION_LOTE_007.md), [008](GSI_PREPARACION_LOTE_008.md), [009](GSI_PREPARACION_LOTE_009.md), [010](GSI_PREPARACION_LOTE_010.md), [011](GSI_PREPARACION_LOTE_011.md), [012](GSI_PREPARACION_LOTE_012.md), [013](GSI_PREPARACION_LOTE_013.md), [014](GSI_PREPARACION_LOTE_014.md), [015](GSI_PREPARACION_LOTE_015.md), [016](GSI_PREPARACION_LOTE_016.md), [017](GSI_PREPARACION_LOTE_017.md), [018](GSI_PREPARACION_LOTE_018.md), [019](GSI_PREPARACION_LOTE_019.md), [020](GSI_PREPARACION_LOTE_020.md), [021](GSI_PREPARACION_LOTE_021.md), [022](GSI_PREPARACION_LOTE_022.md), [023](GSI_PREPARACION_LOTE_023.md), [024](GSI_PREPARACION_LOTE_024.md), [025](GSI_PREPARACION_LOTE_025.md), [026](GSI_PREPARACION_LOTE_026.md), [027](GSI_PREPARACION_LOTE_027.md), [028](GSI_PREPARACION_LOTE_028.md), [029](GSI_PREPARACION_LOTE_029.md), [030](GSI_PREPARACION_LOTE_030.md), [031](GSI_PREPARACION_LOTE_031.md), [032](GSI_PREPARACION_LOTE_032.md), [033](GSI_PREPARACION_LOTE_033.md), [034](GSI_PREPARACION_LOTE_034.md), [035](GSI_PREPARACION_LOTE_035.md), [036](GSI_PREPARACION_LOTE_036.md), [037](GSI_PREPARACION_LOTE_037.md), [038](GSI_PREPARACION_LOTE_038.md), [039](GSI_PREPARACION_LOTE_039.md), [040](GSI_PREPARACION_LOTE_040.md), [041](GSI_PREPARACION_LOTE_041.md), [042](GSI_PREPARACION_LOTE_042.md), [043](GSI_PREPARACION_LOTE_043.md), [044](GSI_PREPARACION_LOTE_044.md), [045](GSI_PREPARACION_LOTE_045.md), [046](GSI_PREPARACION_LOTE_046.md), [047](GSI_PREPARACION_LOTE_047.md), [048](GSI_PREPARACION_LOTE_048.md), [049](GSI_PREPARACION_LOTE_049.md), [050](GSI_PREPARACION_LOTE_050.md), [051](GSI_PREPARACION_LOTE_051.md), [052](GSI_PREPARACION_LOTE_052.md), [053](GSI_PREPARACION_LOTE_053.md), [054](GSI_PREPARACION_LOTE_054.md), [055](GSI_PREPARACION_LOTE_055.md), [056](GSI_PREPARACION_LOTE_056.md), [057](GSI_PREPARACION_LOTE_057.md), [058](GSI_PREPARACION_LOTE_058.md), [059](GSI_PREPARACION_LOTE_059.md), [060](GSI_PREPARACION_LOTE_060.md), [061](GSI_PREPARACION_LOTE_061.md), [062](GSI_PREPARACION_LOTE_062.md), [063](GSI_PREPARACION_LOTE_063.md), [064](GSI_PREPARACION_LOTE_064.md), [065](GSI_PREPARACION_LOTE_065.md), [066](GSI_PREPARACION_LOTE_066.md), [067](GSI_PREPARACION_LOTE_067.md), [068](GSI_PREPARACION_LOTE_068.md), [069](GSI_PREPARACION_LOTE_069.md), [070](GSI_PREPARACION_LOTE_070.md), [071](GSI_PREPARACION_LOTE_071.md), [072](GSI_PREPARACION_LOTE_072.md), [073](GSI_PREPARACION_LOTE_073.md), [074](GSI_PREPARACION_LOTE_074.md), [075](GSI_PREPARACION_LOTE_075.md), [076](GSI_PREPARACION_LOTE_076.md), [077](GSI_PREPARACION_LOTE_077.md), [078](GSI_PREPARACION_LOTE_078.md), [079](GSI_PREPARACION_LOTE_079.md), [080](GSI_PREPARACION_LOTE_080.md), [081](GSI_PREPARACION_LOTE_081.md), [082](GSI_PREPARACION_LOTE_082.md), [083](GSI_PREPARACION_LOTE_083.md), [084](GSI_PREPARACION_LOTE_084.md), [085](GSI_PREPARACION_LOTE_085.md), [086](GSI_PREPARACION_LOTE_086.md), [087](GSI_PREPARACION_LOTE_087.md), [088](GSI_PREPARACION_LOTE_088.md) y [089](GSI_PREPARACION_LOTE_089.md)) recogen criterios, métricas, fuentes y validaciones. Al finalizar la preparación, las 1.742 propuestas posteriores al piloto estaban pendientes. Las 128 incidencias IA del diagnóstico original quedaron cubiertas por el piloto (15) y las propuestas posteriores (113). El [registro de progreso](../logs/gsi-editorial-progress.json) refleja las decisiones vigentes por ID.

El lote 032 corrigió el feedback de `MAN-GSI-P18-026`. El banco activo distingue `Dato` y `dato` como nombres XML diferentes. [Aplicación y pruebas](GSI_APLICACION_LOTE_032.md).

El lote 054 documentó la generalización del feedback anterior de `AI-GSI-B3-T04-004`. La versión aprobada y aplicada mantiene el concepto y la clave B y explica que una descomposición en BCNF puede ser sin pérdida y no preservar todas las dependencias para comprobación local. [Evidencia y contraejemplo](GSI_PREPARACION_LOTE_054.md) · [Aplicación y pruebas](GSI_APLICACION_LOTE_054.md).

El lote 055 corrige la imprecisión formal de `AI-GSI-B3-T05-002`. La versión aplicada conserva la clave C y explica que O(n) expresa una cota superior lineal que puede no ser ajustada. Antes de solicitar la aprobación se precisó el localizador de `AI-GSI-B3-T05-007` y se archivó el hash anterior. [Aplicación y pruebas](GSI_APLICACION_LOTE_055.md) · [Evidencia inicial](GSI_PREPARACION_LOTE_055.md) · [Revisión del localizador](../logs/gsi-editorial-055-locator-revision-2026-11-05.json).

El lote 085 corrigió la pregunta `MAN-GSI-P19-098`. La versión activa plantea elegir una medida de protección en BYOD y conserva la clave B. [Aplicación y pruebas](GSI_APLICACION_LOTE_085.md).

El lote 086 corrigió la ambigüedad de `MAN-GSI-P19-080`. La versión activa pide evaluar cobertura, capacidad y dependencias de fallo en una sede con un único acceso 5G. Conserva la clave B. [Aplicación y pruebas](GSI_APLICACION_LOTE_086.md).

El lote 089 completó la preparación de las 1.762 preguntas no oficiales. Las cifras de aceptaciones de su informe corresponden a ese hito. [Validación final de preparación](GSI_PREPARACION_LOTE_089.md).

## Incidencias confirmadas y cobertura

El lote 088 corrigió la ambigüedad de `MAN-GSI-P19-157`. La pregunta activa pide valorar el gobierno de las grabaciones y conserva la clave C. Con este lote quedaron resueltas las seis incidencias confirmadas durante la preparación. [Aplicación y pruebas](GSI_APLICACION_LOTE_088.md).

El hash aplicado del lote 088 incorpora el localizador de cámara y pantalla de `MAN-GSI-P19-136`. [Revisión del localizador](../logs/gsi-editorial-088-locator-revision-2026-11-05.json).

Las 128 preguntas IA señaladas en la auditoría tienen versión aplicada y recibo trazable. Los 89 lotes del historial conservan sus decisiones por ID. [Ratificación provisional](../content/question-reviews/ratification-provisional-2026-11-09.json) · [Progreso editorial](../logs/gsi-editorial-progress.json).

El inventario de cobertura del 4 de noviembre conserva los hashes y el estado de los lotes antes de la aprobación de 032. El registro de progreso refleja las decisiones posteriores. [Inventario histórico](GSI_COBERTURA_EDITORIAL_2026-11-04.md) · [Progreso actual](../logs/gsi-editorial-progress.json).

No se han convertido documentos en este hito y no hay conversiones nuevas pendientes. Los originales documentales permanecen intactos.
