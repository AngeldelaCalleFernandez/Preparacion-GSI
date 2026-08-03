# Pruebas manuales · Fase 6

## Alcance

Estas comprobaciones cubren exclusivamente la ruta `#estadisticas`, su
integración con entrenamiento, examen y refuerzo, y el almacenamiento local
analítico. Los casos solo pasan a **APROBADA** cuando se han ejecutado en un
navegador; el runner automático se registra separadamente cuando se ejecuta de
verdad.

## Preparación

1. Desde la raíz del repositorio, ejecuta `python -m http.server 8000`.
2. Abre `http://localhost:8000/` y, para datos ficticios aislados,
   `http://localhost:8000/?demo=1`.
3. Abre las herramientas de desarrollo solo para verificar que no aparezcan
   errores; no copies secretos ni datos personales.

## Casos

| ID | Estado | Pasos | Resultado esperado |
| --- | --- | --- | --- |
| E-01 | APROBADA | Abrir `#estadisticas` sin uso previo. | Se muestra el estado sin datos, sin `NaN` ni errores. |
| E-02 | APROBADA | Completar un entrenamiento y visitar estadísticas. | Aparece un intento y una sesión de entrenamiento. |
| E-03 | APROBADA | Completar un examen y visitar estadísticas. | Aparecen sus intentos, blancos y un único resumen de examen. |
| E-04 | APROBADA | Completar una sesión de refuerzo. | Aparece un único resumen de refuerzo y sus intentos. |
| E-05 | APROBADA | Recargar durante y después de cada modalidad. | No se duplican intentos ni resúmenes. |
| E-06 | APROBADA | Comparar `/` con `/?demo=1`. | Los datos reales y demo no se mezclan. |
| E-07 | APROBADA | Registrar acierto, error y blanco. | El resumen diferencia respondidas, errores y blancos. |
| E-08 | APROBADA | Consultar Rendimiento por bloque. | Las filas muestran métricas y nombres de bloque. |
| E-09 | APROBADA | Consultar Rendimiento por tema. | Las filas resuelven los temas de `syllabus.json`. |
| E-10 | APROBADA | Cambiar el filtro de origen. | Se muestran solo oficial, IA, manual o adaptada seleccionados. |
| E-11 | APROBADA | Cambiar el filtro de modalidad. | Se muestran intentos de entrenamiento, examen o refuerzo seleccionados. |
| E-12 | APROBADA | Seleccionar 7, 30, 90 días y todo el historial. | El resumen y evolución se actualizan sin recargar. |
| E-13 | APROBADA | Seleccionar rango personalizado inclusivo. | Se incluyen solo fechas válidas dentro del rango. |
| E-14 | APROBADA | Crear actividad en varios días. | La evolución muestra barras con texto alternativo y valores. |
| E-15 | APROBADA | Consultar un tema con menos de cinco respondidas. | Muestra `muestra insuficiente`, sin conclusión. |
| E-16 | APROBADA | Generar errores y dudas repetidas en un tema. | Se explica su necesidad con conteos verificables. |
| E-17 | APROBADA | Fallar dos veces una pregunta. | Aparece en errores recurrentes sin duplicar enunciados. |
| E-18 | APROBADA | Retirar una pregunta existente tras guardar historial (solo entorno de prueba). | Se muestra `Pregunta no disponible` y la vista no falla. |
| E-19 | APROBADA | Abrir sesiones recientes y cada detalle. | Cada fila ofrece un detalle sencillo, sin edición ni reproducción. |
| E-20 | APROBADA | Consultar Estado de almacenamiento. | Indica datos recientes, archivo y posibles límites temporales. |
| E-21 | APROBADA | Pulsar Borrar estadísticas demo y cancelar. | No se borra nada. |
| E-22 | APROBADA | Confirmar Borrar estadísticas demo. | Solo se elimina la clave demo; real y refuerzo permanecen. |
| E-23 | APROBADA | Pulsar Borrar todas las estadísticas y cancelar. | No se borra nada. |
| E-24 | APROBADA | Confirmar Borrar todas las estadísticas. | No se modifican temario, preguntas, refuerzo ni historiales originales. |
| E-25 | APROBADA | Usar Reconstruir estadísticas dos veces. | Recupera solo fuentes compatibles y no duplica eventos. |
| E-26 | APROBADA | Recorrer navegación y filtros con teclado. | Foco visible, orden lógico, tablas y detalles accesibles. |
| E-27 | APROBADA | Ver la interfaz a 320, 768 y 1280 px. | Contenido legible, tablas desplazables y controles operables. |
| E-28 | APROBADA | Aplicar zoom real al 200 %. | No se pierde contenido ni control esencial. |
| E-29 | APROBADA | Repetir las rutas y acciones principales con consola abierta. | No aparecen errores de JavaScript. |
| E-30 | APROBADA | Abrir `/tests/phase6-runner.html` desde el servidor local. | El runner terminó con 64 pruebas aprobadas y 0 fallidas el 03/08/2026. |
| E-31 | APROBADA | Abrir directamente `/#estadisticas` y `/?demo=1#estadisticas`; recargar y volver/avanzar entre Inicio y Estadísticas. | En ambos almacenes se mantiene Estadísticas visible y su enlace queda activo. |

## Incidencias y correcciones

| ID | Estado inicial | Defecto confirmado | Corrección y regresión |
| --- | --- | --- | --- |
| I-01 | FALLIDA | La URL `/?demo=1#estadisticas` podía conservar el hash mientras la vista y enlace quedaban en Inicio. | El enrutador ahora resuelve el hash mediante una única función idempotente y se resincroniza tras las inicializaciones asíncronas; E-31 y cuatro regresiones del runner cubren carga, demo, recarga y navegación simulada. |

## Correctivo aplicado

- Causa: la resolución de ruta no tenía una resincronización explícita al
  acabar la carga asíncrona ni un evento de entrada para refrescar Estadísticas.
- Archivos modificados: `assets/js/router.js`, `assets/js/app.js`,
  `assets/js/statistics.js`, `assets/js/training.js`,
  `assets/js/data-service.js`, `assets/js/exam-engine.js`,
  `assets/js/exam.js`, `data/demo/questions-ai-demo.json`,
  `scripts/validate_phase3.py`, `scripts/validate_phase5.py`,
  `scripts/validate_phase6.py` y `tests/phase6-tests.js`.
- Regresiones añadidas: resolución de rutas (incluidos demo, recarga y
  navegación simulada), persistencia inmediata e idempotente de entrenamiento,
  duda/alta/error automático, refresco de estadísticas y examen demo de 20
  preguntas equilibradas.

## Registro de ejecución

- Fecha: 2026-08-03. Navegador: navegador integrado de Codex.
- URLs: `/#estadisticas`, `/?demo=1#estadisticas`, `/?demo=1#entrenamiento`,
  `/?demo=1#examen`, `/?demo=1#refuerzo` y `/tests/phase6-runner.html`.
- E-01: la vista inicial mostró todos los contadores a cero y «Sin datos
  suficientes», sin `NaN` ni error visible.
- E-02: se completó un entrenamiento demo de una pregunta; al seleccionar
  datos demo apareció una sesión de entrenamiento.
- E-06: los datos reales permanecieron a cero mientras el selector demo mostró
  la actividad demo, confirmando separación estricta.
- E-08, E-09, E-12, E-15 y E-20: se observaron las tablas de bloque y tema,
  los filtros temporales 7/30/90/todo, la muestra insuficiente (4 respondidas)
  y el estado del almacén.
- E-03, E-04, E-05 y E-07: se completó un examen demo con un acierto, un
  error y un blanco, y una sesión de refuerzo con error y duda. Estadísticas
  mostró 3 sesiones, 8 respondidas, 3 aciertos, 5 errores, 1 blanco, 37,5 % de
  precisión y 33,3 % sobre evaluadas; tras recargar, los valores no cambiaron.
- E-10 y E-11: se recorrieron los cuatro orígenes y las modalidades
  entrenamiento, examen y refuerzo. Solo IA produjo filas y cada modalidad
  mostró una sesión; el total volvió a tres al quitar el filtro.
- E-13: el rango personalizado 2026-08-03/2026-08-03 incluyó las 3 sesiones;
  2026-08-04/2026-08-04 mostró 0, confirmando límites inclusivos.
- E-14, E-16, E-17 y E-18: con datos demo temporales se observaron dos periodos
  en Evolución, una prioridad de 57/100 explicada por 8 intentos, 75 % de
  errores y 2 dudas, un error recurrente único y «Pregunta no disponible» sin
  bloqueo. Estos datos artificiales se eliminaron al terminar.
- E-19: se abrieron los cuatro detalles de sesiones recientes; mostraron tipo,
  bloques, orígenes y número de preguntas, sin edición ni reproducción.
- E-21 a E-25: se cancelaron ambos borrados sin cambios; al confirmar el
  borrado demo se conservó real y refuerzo, y al confirmar el borrado total se
  eliminaron ambos almacenes analíticos manteniendo refuerzo. Dos
  reconstrucciones consecutivas devolvieron 5 intentos, 0 sesiones y métricas
  idénticas, junto con las limitaciones históricas documentadas.
- E-27: a 320 × 900, 768 × 900 y 1280 × 900 no hubo desbordamiento horizontal;
  la vista y tablas permanecieron presentes y operables.
- E-26 — **Comprobación manual del usuario:** se recorrieron la navegación,
  los filtros, tablas, detalles y controles utilizando únicamente el teclado.
  El foco fue visible, siguió un orden utilizable y los controles pudieron
  activarse mediante teclado.
- E-28 — **Comprobación manual del usuario:** se aplicó zoom real del
  navegador al 200 %. El contenido, los controles, tablas y diálogos
  permanecieron legibles y utilizables, sin pérdida de acciones esenciales.
- E-29: consola sin errores en Estadísticas, Examen, Refuerzo y runner.
- E-30: el runner mostró realmente **64 pruebas aprobadas y 0 fallidas**.
- E-31: se abrieron directamente `/#estadisticas` y
  `/?demo=1#estadisticas`; ambas mantuvieron Estadísticas visible, el enlace
  activo y el aviso ficticio en demo. La recarga y la secuencia
  Inicio/Estadísticas también conservaron la correspondencia.

## Resumen final

- 31 pruebas manuales APROBADAS.
- 0 pruebas FALLIDAS.
- 0 pruebas NO EJECUTADAS.
- Runner: 64 aprobadas y 0 fallidas.
- Consola: sin errores observados.
- Validadores de Fases 2 a 6: correctos.
- Datos analíticos temporales eliminados.
- Refuerzo conservado.
