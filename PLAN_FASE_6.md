# Plan de la Fase 6 — Estadísticas y progreso

## Alcance aprobado

La Fase 6 añade la ruta estática #estadisticas, historial analítico local,
métricas, recomendaciones deterministas y un resumen pequeño en Inicio. No
añade cuentas, sincronización, backend, dependencias externas, edición o
importación de preguntas, aprendizaje automático, predicciones, copias de
seguridad completas ni trabajo de la Fase 7.

Se mantiene HTML5, CSS3, módulos JavaScript nativos, JSON de solo lectura,
localStorage, GitHub Pages y servidor HTTP local. No se modificarán data/*.json
ni schemas/*.json.

## Diagnóstico de las claves anteriores

| Fase | Clave | Datos verificables | Límite de migración |
| --- | --- | --- | --- |
| 3 | tai.phase3.training.v1 | responses con responseId, pregunta, opción, resultado, fecha, origen, bloque, tema e isDemo | No conserva sesiones ni duración; real y demo comparten clave, pero se separan por isDemo. |
| 4 real | tai.phase4.exam.active.real.v1 | Solo examen in_progress recuperable | Se elimina al terminar; no hay exámenes finalizados históricos. |
| 4 demo | tai.phase4.exam.active.demo.v1 | Solo examen demo in_progress recuperable | Se elimina al terminar; no hay exámenes finalizados históricos. |
| 5 real/demo | tai.reinforcement.{real,demo}.v1 | Estado por pregunta, últimos 25 eventos y sesión activa | No hay historial de sesiones finalizadas; los contadores no identifican modalidad ni fecha de cada intento. |

La migración importará intentos verificables de entrenamiento y, de refuerzo,
solo respuestas explícitas reinforcement: aún presentes. Ignorará los eventos
exam: y training: almacenados en refuerzo: los primeros no describen el examen
completo y los segundos ya se obtienen íntegros de Fase 3. No se inventarán
sesiones, blancos, duraciones, opciones ausentes, dudas desde marcas de
navegación ni resultados de exámenes anteriores a Fase 6.

## Entregables

Se crearán:

- assets/js/analytics-engine.js
- assets/js/analytics-storage.js
- assets/js/analytics-events.js
- assets/js/analytics-migration.js
- assets/js/statistics.js
- tests/phase6-runner.html
- tests/phase6-tests.js
- scripts/validate_phase6.py
- docs/PRUEBAS_MANUALES_FASE_6.md
- PLAN_FASE_6.md

Se modificarán solo para integrar Fase 6:

- assets/js/app.js
- assets/js/router.js
- assets/js/training.js
- assets/js/exam.js
- assets/js/reinforcement.js
- assets/js/reinforcement-storage.js
- index.html
- assets/css/styles.css

No se prevé modificar assets/js/exam-engine.js, assets/js/data-service.js,
bancos, esquemas ni documentos convertidos.

## Almacenamiento y contratos

Las claves separadas serán:

    tai.analytics.real.v1
    tai.analytics.demo.v1

Cada clave tendrá una estructura versionada similar a:

    {
      version: 1,
      isDemo: false,
      createdAt: "",
      updatedAt: "",
      migrations: { phase3Training: {}, phase5Reinforcement: {} },
      activeTrainingSession: null,
      sessions: [],
      attempts: [],
      processedEventIds: [],
      archive: {
        attemptBuckets: [],
        sessionBuckets: [],
        eventFingerprints: {},
        sessionFingerprints: {},
        temporalPrecisionLimitedBefore: null
      },
      diagnostics: {},
      settings: {}
    }

No se guardarán enunciados, opciones completas, feedback, fuentes, secretos ni
credenciales. Las opciones se guardarán solo por su identificador.

Sesiones terminadas:

    sessionId
    sessionType: training | exam | reinforcement
    isDemo
    startedAt
    finishedAt
    durationSeconds
    configuredQuestions
    answeredQuestions
    correctAnswers
    incorrectAnswers
    blankAnswers
    grossPercentage
    responseAccuracy
    penalty
    netScore
    netPercentage
    blockIds
    origins
    questionIds
    timedOut

netPercentage será netScore / configuredQuestions × 100 únicamente para
exámenes válidos con al menos una pregunta configurada. Para entrenamiento,
refuerzo o denominador nulo será null.

Intentos:

    eventId
    sessionId
    questionId
    collection
    origin
    blockId
    topicId
    isDemo
    selectedOption
    correct
    blank
    doubted
    addedToReinforcement
    answeredAt
    durationSeconds
    penaltyApplied
    netContribution

Para un blanco, blank será true y correct y selectedOption serán null. Para un
intento histórico verificable sin sesión, sessionId será null; no se fabricará
una sesión de una pregunta.

## Eventos e idempotencia

analytics-events.js construirá tres clases de eventos:

    attempt.recorded
    attempt.annotated
    session.completed

Identificadores estables:

    training:{responseId}:analytics
    training:{trainingSessionId}:summary
    exam:{examId}:summary
    exam:{examId}:{collection}:{questionId}:analytics
    exam:{examId}:{collection}:{questionId}:annotation:{action}
    reinforcement:{sessionId}:summary
    reinforcement:{sessionId}:{collection}:{questionId}:analytics
    reinforcement:{sessionId}:{collection}:{questionId}:annotation:{assessment}

Antes de aplicar un lote se validarán estructura, fechas ISO, isDemo y los IDs
de bloque, tema, origen y colección. Las anotaciones solo cambian de false a
true; nunca crean un segundo intento ni incrementan contadores una segunda vez.

La deduplicación será duradera y no dependerá únicamente de los 2.000 IDs
recientes:

1. Los intentos recientes se localizan por eventId y las sesiones recientes por
   sessionId.
2. processedEventIds conserva los últimos 2.000 eventos para operaciones
   inmediatas.
3. Las migraciones usan cursores por fuente y no recorren de nuevo el tramo
   confirmado.
4. Al archivar, cada evento y sesión recibe una huella canónica compacta,
   almacenada con la referencia de su bloque archivado.
5. Si un ID expulsado de processedEventIds reaparece, su huella archivada lo
   identifica como duplicado y no se vuelven a sumar sus datos.

Las huellas se derivarán de forma determinista del identificador estable y del
tipo de entidad. No representan contenido de preguntas y se conservan mientras
el evento o sesión esté representado en archive.

## Compactación sin solapamientos

Límites:

    sesiones recientes:          1.000
    intentos recientes:         10.000
    processedEventIds:           2.000
    detalle diario archivado:  1.825 días
    detalle mensual archivado:   240 meses

Reglas estrictas:

1. Una sesión o intento está en almacenamiento reciente o archivado, nunca en
   ambos.
2. Se ordena por la tupla estable (fecha ISO, ID) y se mueve solo el prefijo
   antiguo que supera el límite.
3. Cada bloque archivado conserva kind, from, to, count, agregados y la tupla
   de corte exacta. Sus periodos son cerrados y no se solapan.
4. La transacción persiste el bloque y elimina los elementos recientes movidos
   antes de confirmar el nuevo almacén.
5. Una segunda compactación sin exceso no altera los totales ni los bloques.
6. Las consultas combinan únicamente registros recientes y bloques archivados
   de periodos distintos; no suman un total global de archivo con sus
   subbloques.

Los bloques archivados conservarán agregados por bloque, tema, origen,
modalidad, pregunta con incidencia y periodo. Los datos diarios muy antiguos se
consolidarán únicamente en meses completos. Si un rango personalizado atraviesa
un mes consolidado parcialmente, la interfaz mostrará Sin datos suficientes en
vez de una precisión falsa. Los totales de todo el historial seguirán siendo
exactos y temporalPrecisionLimitedBefore será visible.

Un fallo de cuota no borrará información existente ni bloqueará la aplicación.
Se avisará de que el evento concreto no pudo guardarse.

## Integración de sesiones

### Entrenamiento

La Fase 3 no conserva sesiones. No se crearán resúmenes históricos. Para
sesiones iniciadas después de Fase 6:

- Al iniciar el formulario se genera trainingSessionId y se persiste un
  activeTrainingSession con inicio, configuración, referencias y última
  actividad.
- Todas sus respuestas usan el mismo ID; nunca se crea una sesión por
  respuesta.
- La respuesta se guarda primero en la clave original de Fase 3 y después se
  registra como intento analítico con responseId estable.
- La duración se mide desde que se muestra la pregunta hasta su respuesta; si
  no es verificable, se guarda null.
- Al completar la última pregunta se emite un único resumen
  training:{trainingSessionId}:summary y se limpia el contexto activo solo si
  el guardado fue correcto.
- Al recargar, cambiar configuración o iniciar otra sesión sin que pueda
  recuperarse la selección existente, el contexto se marca abandonado y se
  elimina sin crear resumen terminado. Los intentos ya guardados se conservan.
- Finalizar o recargar no puede duplicar resumen: los IDs y el contexto son
  estables.

### Examen

Al finalizar se genera, antes de limpiar el examen activo, un lote atómico con
una sesión exam y un intento por pregunta. Los blancos se registran como blanco,
no como error. El examId existente impide duplicación por finalización,
reapertura visual o recuperación. La duración global es fiable; no se
atribuirán tiempos por pregunta de examen si la navegación no los permite
calcular de forma fiable.

### Refuerzo

Cada respuesta emite un intento con el sessionId existente. Una valoración
posterior emite una anotación estable de duda o incidencia. Al finalizar se
reemiten idempotentemente los intentos y se registra un único resumen. Se
añadirá la hora de presentación a la sesión activa para calcular duración
cuando sea fiable. Las preguntas respondidas en refuerzo no cuentan como
añadidas a refuerzo: esa métrica se reserva para acciones explícitas desde
entrenamiento o revisión de examen.

## Migración y reconstrucción

analytics-migration.js separará siempre real y demo:

- Fase 3: filtrará responses por isDemo, resolverá cada pregunta contra los
  bancos y migrará el sufijo nuevo posterior a su cursor. Si el historial fue
  reducido, reordenado o corrupto, no lo reimportará a ciegas y registrará la
  incidencia.
- Fase 4: no reconstruirá exámenes terminados, pues no hay historial. Un examen
  activo no se convertirá en terminado.
- Fase 5: importará solo respuestas reinforcement: con fecha y referencia
  válidas. Una valoración doubt explícita podrá anotarlas. Los huecos derivados
  del límite de 25 eventos se informarán como precisión parcial.

La reconstrucción se ejecutará por almacén real o demo y conservará todas las
claves de origen. Mostrará:

    intentos importados
    intentos ignorados
    duplicados detectados
    sesiones reconstruidas
    datos no recuperables
    precisión temporal disponible
    incidencias de datos corruptos

Ejecutarla sobre una migración completada no duplicará eventos. Tras borrar la
clave analítica recuperará solo historiales compatibles todavía existentes.
Antes de confirmar Borrar todas las estadísticas se advertirá expresamente que
los exámenes finalizados antes de Fase 6 no podrán recuperarse. No se borrarán
las claves de entrenamiento, examen, refuerzo, temario ni preguntas.

## Métricas y muestras mínimas

Se mantendrán dos denominadores:

    respondidas = aciertos + errores
    evaluadas = aciertos + errores + blancos
    precisión sobre respondidas = aciertos / respondidas × 100
    porcentaje sobre evaluadas = aciertos / evaluadas × 100

Los blancos cuentan en el total de examen, no son errores y no clasifican
necesidad temática. La interfaz nunca llamará igual a ambas métricas.

La puntuación neta directa se mostrará por examen. La media comparable será el
netPercentage medio de los exámenes válidos. Una media de netScore solo se
mostrará si todos los exámenes comparados tienen el mismo número de preguntas;
en otro caso se mostrará el porcentaje neto normalizado y el aviso de que la
puntuación directa no es comparable.

El mínimo de comparación será cinco intentos respondidos y se aplicará a mejor
bloque, bloque con mayor necesidad, mejor tema, tema prioritario y comparaciones
por origen y modalidad. Bajo ese mínimo se mostrará Sin datos suficientes. Las
filas conservarán conteos históricos, pero no emitirán rankings o conclusiones.

No habrá NaN ni Infinity. El tiempo total y medio usarán solamente duraciones y
denominadores verificables.

## Algoritmo de necesidad por tema

Solo se evalúan intentos respondidos. Con menos de cinco el resultado es muestra
insuficiente; con cero, sin datos.

    errorRate = errores / respondidas
    doubtRate = dudas / respondidas
    recurrentRate = preguntas con dos o más errores / preguntas distintas respondidas
    overdueRate = repasos scheduled vencidos / preguntas distintas respondidas
    recentErrorRate = errores recientes / respondidas recientes
    sampleFactor = min(1, 0,5 + respondidas / 20)

recentErrorRate solo existe si hay intentos respondidos en los últimos 30 días.
La ausencia de actividad reciente no se interpreta como cero: se elimina ese
componente y sus 15 puntos se redistribuyen proporcionalmente.

    Con actividad reciente:
    error 45, duda 15, reciente 15, reincidencia 15, vencidos 10

    Sin actividad reciente:
    error 45/85 × 100
    duda 15/85 × 100
    reincidencia 15/85 × 100
    vencidos 10/85 × 100

    needScore = redondear(sampleFactor × suma(componente × peso normalizado))

Clasificación:

    sin datos
    muestra insuficiente
    bien:         0–24
    vigilar:     25–44
    reforzar:    45–64
    prioritario: 65–100

La explicación expondrá los componentes verificables. No será una predicción
de aprobado.

## Incidencias y preguntas no disponibles

Los intentos históricos de preguntas defective o paused se conservan en
totales, sesiones y errores recurrentes. Se marcarán visualmente y podrán
excluirse, mediante filtro explícito, de análisis pedagógicos y recomendaciones
actuales. Por defecto no se recomendarán para nuevas sesiones.

Una pregunta eliminada de los bancos se mostrará como Pregunta no disponible y
conservará bloque, tema, origen, error histórico y última actividad. No
bloqueará la interfaz ni entrará en sesiones nuevas.

## Interfaz y accesibilidad

La ruta #estadisticas se integrará con:

    #inicio
    #temario
    #entrenamiento
    #examen
    #refuerzo
    #estadisticas

La vista tendrá resumen, filtros por periodo/bloque/tema/origen/modalidad,
evolución, rendimiento por dimensión, debilidades, errores recurrentes,
sesiones recientes, estado de almacenamiento, reconstrucción y controles de
borrado. Los filtros serán 7, 30 y 90 días, todo el historial y rango
personalizado inclusivo con fechas ISO; fechas futuras o inválidas no contarán.

Las visualizaciones usarán tablas accesibles como alternativa primaria y barras
CSS con título, valor, texto equivalente, contraste y significado no
dependiente del color. La evolución será diaria hasta 90 días y semanal para
periodos mayores. Estados: cargando, sin datos, datos insuficientes, datos
corruptos parcialmente ignorados, error de almacenamiento y precisión temporal
limitada.

Inicio mostrará solo respondidas, precisión reciente, refuerzos vencidos, tema
prioritario y enlace a estadísticas. En ?demo=1 todo dato demo seguirá
etiquetado como ficticio y aislado; el selector demo no estará disponible en
modo normal.

Borrar estadísticas demo y Borrar todas las estadísticas exigirán confirmación
explícita. La segunda advertirá antes de confirmar la pérdida no recuperable de
exámenes históricos anteriores a Fase 6. Ningún borrado tocará refuerzo ni
claves originales.

## Tareas de implementación

| Tarea | Archivos | Dependencia | Validación y criterio de finalización |
| --- | --- | --- | --- |
| 6.1 Contrato | PLAN_FASE_6.md | Plan aprobado | Contrato, límites y exclusiones documentados. |
| 6.2 Motor puro | analytics-engine.js | Contratos | Calcula métricas, muestras, debilidad, huellas, consultas y compactación sin DOM. |
| 6.3 Persistencia | analytics-storage.js | Motor | Claves aisladas, transacciones, cuota, límites y archivo sin solapamientos. |
| 6.4 Eventos | analytics-events.js | Motor y persistencia | Lotes estables de los tres modos y anotaciones idempotentes. |
| 6.5 Migración | analytics-migration.js, app.js | Claves Fases 3–5 | Importa solo datos verificables, usa cursores e informe. |
| 6.6 Entrenamiento | training.js | Eventos y Fase 3 | Un ID por sesión nueva; intentos conservados; sin resúmenes históricos inventados. |
| 6.7 Examen | exam.js | Resultado Fase 4 | Una sesión y todos los intentos, incluidos blancos, antes de limpiar estado activo. |
| 6.8 Refuerzo | reinforcement.js, reinforcement-storage.js | Fase 5 | Respuesta, valoración y resumen aislados y sin duplicar. |
| 6.9 Presentación | statistics.js, app.js, router.js, index.html | Datos y analytics | Ruta, filtros, tablas, estados, reconstrucción e Inicio accesibles. |
| 6.10 Estilos | styles.css | Marcado | Diseño responsive, contraste y alternativa textual. |
| 6.11 Runner | phase6-runner.html, phase6-tests.js | Módulos puros | Runner sin Node ni dependencias, con servidor HTTP. |
| 6.12 Validación y manuales | validate_phase6.py, PRUEBAS_MANUALES_FASE_6.md | Fases 2–5 | Validación completa y manuales inicialmente NO EJECUTADA. |

## Pruebas automáticas

El runner verificará como mínimo:

1. intento de entrenamiento único;
2. examen terminado con única sesión;
3. reapertura sin duplicar resumen;
4. blanco como blanco, no error;
5. separación real/demo;
6. sesión de refuerzo única;
7. porcentajes correctos;
8. penalización real de examen;
9. totales por bloque;
10. totales por tema;
11. totales por origen;
12. filtros temporales;
13. fechas inválidas ignoradas;
14. muestra insuficiente temática;
15. explicación de debilidad;
16. pregunta inexistente tolerada;
17. sesiones duplicadas excluidas;
18. migración idempotente;
19. demo aislado;
20. borrar demo sin borrar real;
21. borrar analytics sin borrar refuerzo;
22. compactación conserva totales;
23. límite de sesiones;
24. límite de intentos;
25. cuota no bloqueante;
26. sesión sin datos sin NaN;
27. división entre cero controlada;
28. ranking respeta muestra;
29. preguntas defectuosas identificadas;
30. reconstrucción no duplica eventos;
31. compactación sin doble conteo;
32. segunda compactación idempotente;
33. consulta que combina periodo reciente y archivado;
34. reenvío de evento archivado tras expulsarlo de processedEventIds;
35. netPercentage normalizado;
36. examen con cero configuradas sin división inválida;
37. bloque con muestra insuficiente;
38. ausencia de actividad reciente sin bonificación artificial;
39. precisión sobre respondidas distinta del porcentaje sobre evaluadas;
40. reconstrucción tras borrar analytics;
41. intento histórico de pregunta defectuosa conservado pero excluible;
42. intento histórico de entrenamiento sin sessionId verificable.

## Validación y pruebas manuales

validate_phase6.py ejecutará primero los validadores de Fases 2 a 5 y
comprobará ruta, rutas previas, claves, separación, límites, huellas de
archivo, compactación idempotente, ausencia de solapamientos, fechas, estados
sin datos, accesibilidad mínima de tablas y barras, ausencia de dependencias,
backend, Node, npm, CDN, frameworks y secretos, rutas relativas GitHub Pages e
inmutabilidad de data y schemas.

El documento de pruebas manuales contendrá, todos como NO EJECUTADA, vista
vacía, las tres clases de sesión, recarga, separación real/demo, métricas,
dimensiones, filtros 7/30/90/rango, evolución, muestra, prioridad, incidencias,
sesiones, almacenamiento, los dos borrados con confirmación, reconstrucción,
teclado, 320/768/1280 px, zoom 200 %, consola y runner.

Comandos de cierre:

    .\.venv\Scripts\python.exe scripts\validate_phase2.py
    .\.venv\Scripts\python.exe scripts\validate_phase3.py
    .\.venv\Scripts\python.exe scripts\validate_phase4.py
    .\.venv\Scripts\python.exe scripts\validate_phase5.py
    .\.venv\Scripts\python.exe scripts\validate_phase6.py
    git diff --check

El runner se comprobará realmente con python -m http.server 8000. La Fase 6
solo se declarará terminada si validadores y runner pasan, las pruebas manuales
permanecen honestas y no se ha iniciado la Fase 7.
