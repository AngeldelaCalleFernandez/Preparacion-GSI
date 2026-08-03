# Pruebas manuales de la Fase 5

## Preparación

1. Desde la raíz del proyecto ejecute `python -m http.server 8000`.
2. Abra `http://localhost:8000/#refuerzo`.
3. Para datos ficticios use `http://localhost:8000/?demo=1#refuerzo`.
4. Registre fecha, navegador, dimensiones, URL, resultado e incidencias.
5. No cambie un caso a `APROBADA` hasta haberlo ejecutado realmente en navegador.

## Casos

| ID | Estado | Pasos | Resultado esperado |
| --- | --- | --- | --- |
| R-01 | APROBADA | Falla una pregunta de entrenamiento. | Se crea una entrada de refuerzo una sola vez. |
| R-02 | APROBADA | Finaliza un examen con un error y vuelve a abrir la revisión. | El error se integra una sola vez. |
| R-03 | APROBADA | Deja una pregunta de examen en blanco y finaliza. | No se añade automáticamente. |
| R-04 | APROBADA | Acierta en entrenamiento y pulsa `Dudé`. | Se registra un acierto y una duda, sin dos intentos. |
| R-05 | APROBADA | Pulsa `Añadir a refuerzo` en una respuesta correcta. | La entrada queda pendiente hoy sin alterar resultados. |
| R-06 | APROBADA | Inicia una sesión con preguntas vencidas. | Se muestran solo preguntas debidas o atrasadas. |
| R-07 | APROBADA | Responde una pregunta de refuerzo. | Aparece corrección, feedback, fuente y localizador. |
| R-08 | APROBADA | Prueba `La sabía`, `Dudé` y `No la sabía`. | Se programan las fechas y prioridades correspondientes. |
| R-09 | APROBADA | Lleva una pregunta de nivel 4 a nivel 5. | Se programa a 60 días y sigue programada. |
| R-10 | APROBADA | Responde correctamente en nivel 5 y elige `La sabía`. | El ciclo pasa a completado. |
| R-11 | APROBADA | Marca una pregunta como potencialmente defectuosa. | Queda aislada y no aparece en nuevas sesiones. |
| R-12 | APROBADA | Restaura una incidencia. | Vuelve a estar disponible para refuerzo. |
| R-13 | APROBADA | Responde y recarga antes de valorar. | Se recuperan sesión, respuesta y valoración pendiente. |
| R-14 | APROBADA | Compara modo normal y `?demo=1`. | Real y demo permanecen separados. |
| R-15 | APROBADA | Pulse `Borrar refuerzo demo` y cancele; después confirme. | Pide confirmación y solo borra demo al confirmar. |
| R-16 | APROBADA | Pulse `Borrar todo el refuerzo` y cancele; después confirme. | Pide confirmación y borra ambos almacenes solo al confirmar. |
| R-17 | APROBADA | Use toda la ruta `#refuerzo` con teclado. | Foco visible, controles y sesión utilizables. |
| R-18 | APROBADA | Pruebe 320, 768 y 1280 px. | No hay desbordamiento y el contenido sigue legible. |
| R-19 | APROBADA | Pruebe zoom real al 200 %. | Controles, diálogo y texto siguen utilizables. |
| R-20 | APROBADA | Revise la consola mientras navega y complete una sesión. | No hay errores de JavaScript. |
| R-21 | APROBADA | Abra `tests/phase5-runner.html` a través del servidor. | El runner termina con cero fallos. |

## Registro de ejecución

- Fecha: 2026-07-31.
- Navegador: navegador integrado de Codex (Chromium con acceso CDP).
- Servidor: `python -m http.server 8000` desde la raíz del repositorio.
- URLs ejercitadas: `http://localhost:8000/?demo=1#entrenamiento`,
  `http://localhost:8000/?demo=1#examen`,
  `http://localhost:8000/?demo=1#refuerzo`,
  `http://localhost:8000/#refuerzo` y
  `http://localhost:8000/tests/phase5-runner.html`.

| Casos | Pasos ejecutados y resultado observado |
| --- | --- |
| R-01, R-04 y R-05 | En entrenamiento demo se falló `AI-DEMO-003`: se creó un único registro con un único evento de respuesta. Tras acertarla y pulsar `Dudé`, el registro conservó un solo intento nuevo, con un acierto y una duda. Al pulsar `Añadir a refuerzo`, se creó el evento manual y `attempts` no aumentó. |
| R-02 y R-03 | En examen demo se respondió incorrectamente una pregunta y se finalizaron dos restantes en blanco. El error produjo un único evento `exam:…:response`; al pulsar `Dudé` en la revisión, el intento siguió siendo uno. Después de borrar el almacén demo, se finalizó otro examen con las tres preguntas en blanco: se mostró la confirmación y la revisión, y no se creó almacén de refuerzo demo. |
| R-06 y R-07 | Con solo vencidas se inició una sesión de una pregunta debida y se mostró exclusivamente `AI-DEMO-003`. Al responder, aparecieron la corrección, el feedback, la fuente y el localizador `No aplica`. Sin preguntas elegibles, el botón no inició sesión y mostró «No hay preguntas de refuerzo disponibles para iniciar la sesión». |
| R-08, R-09 y R-10 | Se ejercitaron las tres valoraciones. `La sabía` programó 3 días desde nivel 0; `Dudé` y `No la sabía`, 1 día. Las transiciones sucesivas de `La sabía` verificaron 7, 14 y 30 días; de nivel 4 a 5 programó 60 días (2026-09-29) y, en nivel 5, dejó la pregunta como completada sin próxima revisión. |
| R-11 y R-12 | Se marcó una pregunta como potencialmente defectuosa: quedó en estado `defective` y fue excluida de la sesión. Un error posterior de entrenamiento mantuvo dicho estado. `Restaurar pregunta` la devolvió a `scheduled`; al incluir futuras volvió a estar disponible. También se pulsó `Retirar de refuerzo`, que la dejó en estado `paused`. |
| R-13 | Se respondió una pregunta de refuerzo sin valorarla, se recargó la página y se pulsó `Reanudar sesión demo`. Se recuperaron la respuesta corregida y los controles `La sabía`, `Dudé` y `No la sabía`. |
| R-14 | Se comprobó `#refuerzo` normal con un registro real y `?demo=1#refuerzo` con registros demo: el resumen informó de almacenes separados y cada modo conservó su propio contenido. |
| R-15 y R-16 | En ambos botones de borrado se mostró un diálogo de confirmación. Al cancelar no cambió ningún almacén; al confirmar «Borrar refuerzo demo» solo desapareció demo y real permaneció. Al confirmar «Borrar todo el refuerzo» desaparecieron ambos. Los datos temporales de prueba quedaron eliminados al finalizar. |
| R-17 | **Comprobación manual del usuario.** Se completó el flujo de `#refuerzo` usando únicamente teclado, con foco visible y controles utilizables. |
| R-18 | Mediante CDP se verificaron anchos de 320 × 900, 768 × 900 y 1280 × 900 px. En los tres, `scrollWidth` fue igual a `clientWidth` (sin desplazamiento horizontal) y el contenido de Refuerzo siguió presente y legible. |
| R-19 | **Comprobación manual del usuario.** Con zoom real del navegador al 200 %, los textos, controles y diálogos permanecieron legibles y utilizables, sin desplazamiento horizontal indebido. |
| R-20 | Se inspeccionó la consola de entrenamiento, examen y refuerzo (normal y demo) después de las operaciones: 0 errores. En red se cargaron los módulos y los JSON de datos, incluido `data/syllabus.json`, sin error observado. |
| R-21 | El runner servido en `tests/phase5-runner.html` mostró «24 pruebas aprobadas; 0 fallidas». |

## Limitaciones conocidas

- La migración solo puede importar errores históricos de entrenamiento con la
  estructura completa. Las respuestas correctas antiguas no permiten inferir
  una duda.
- Los exámenes terminados antes de la Fase 5 no tienen historial persistido que
  pueda importarse. Los exámenes en curso se integrarán al finalizar.
- Cada historial conserva 25 eventos y cada pregunta retiene 250 IDs de evento
  procesados. La migración completada no vuelve a recorrer el histórico.
- Si el navegador no dispone de espacio local, se muestra un error y la
  aplicación permanece utilizable, aunque no pueda persistir el cambio.
