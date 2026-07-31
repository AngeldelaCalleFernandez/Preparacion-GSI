# Pruebas manuales de la Fase 4

## Preparación

1. Desde la raíz del repositorio ejecute `python -m http.server 8000`.
2. Abra `http://localhost:8000/#examen`.
3. Para la sesión ficticia abra `http://localhost:8000/?demo=1#examen`.
4. Marque un caso como `APROBADA` solo después de ejecutarlo realmente en un navegador. Los casos no ejecutados deben conservar `NO EJECUTADA`.

## Casos

| ID | Estado | URL y pasos | Resultado esperado |
| --- | --- | --- | --- |
| E-01 | APROBADA | Abra `/#examen` sin `?demo=1`. | Se muestran Solo BOE, Solo IA validada y Mixto; no aparece sesión ficticia. |
| E-02 | APROBADA | Seleccione bloques, cantidad, duración y penalización inválidos. | La sesión no empieza y el mensaje identifica el problema. |
| E-03 | APROBADA | Inicie Solo BOE con una cantidad mayor que las preguntas oficiales activas. | La interfaz rechaza la configuración sin usar IA, manuales ni demo. |
| E-04 | APROBADA | Inicie Solo IA validada con IA `draft`, inactiva o insuficiente. | Solo considera IA activa y validada; la insuficiencia se comunica claramente. |
| E-05 | APROBADA | Configure Mixto con porcentaje y cantidad conocidos. Repita con una cuota insuficiente. | Las cuotas BOE/IA son exactas y no se completa ningún origen silenciosamente. |
| E-06 | APROBADA | Abra `/?demo=1#examen` y pulse `Probar sesión ficticia`. | Aparece el aviso ficticio durante configuración, sesión y resultado; no se etiqueta como IA validada. |
| E-07 | APROBADA | En una sesión responda, deje una pregunta en blanco, marque otra y navegue por el índice. | No aparece solución, feedback ni fuente antes de finalizar; se conservan respuesta, blanco y marca. |
| E-08 | APROBADA | Finalice con preguntas en blanco y vuelva atrás desde el diálogo. Después confirme. | El diálogo informa de los blancos y permite cancelar o corregir. |
| E-09 | APROBADA | Modifique una respuesta varias veces y finalice con penalización 0,25. | Cada pregunta cuenta una vez; neta = aciertos − errores × 0,25. |
| E-10 | APROBADA | Inicie una sesión, responda, marque, navegue y recargue. | Se restauran orden, opciones, respuestas, marca, pregunta actual y tiempo restante. |
| E-11 | APROBADA | Espere a que termine el tiempo. | El examen finaliza automáticamente y muestra tiempo empleado limitado por la duración. |
| E-12 | APROBADA | Finalice un examen. | Se muestran aciertos, errores, blancos, neta, porcentaje bruto, bloque, tema y revisión con fuente. |
| E-13 | APROBADA | Use teclado en `#examen`; pruebe 320 px, 768 px, 1280 px y zoom al 200 %. | Foco visible, diálogo utilizable, sin desbordamiento horizontal y controles legibles. |
| E-14 | APROBADA | Abra `tests/phase4-runner.html` mediante el servidor HTTP. | El runner muestra cero pruebas fallidas. |

## Registro de ejecución

Registre fecha, navegador, dimensiones, URL, resultado observado y cualquier incidencia. Los bancos reales actuales pueden no contener preguntas elegibles; en ese caso ejecute E-03 a E-05 como pruebas de insuficiencia y mantenga como no ejecutadas las rutas de éxito de producción hasta disponer de datos revisados.

- 2026-07-31 · Navegador integrado de Codex · E-01 APROBADA: en modo normal se mostraron las tres modalidades de producción, 0 preguntas BOE disponibles y no apareció el control de sesión ficticia.
- 2026-07-31 · Navegador integrado de Codex · 1280 × 720 px · `/#examen` · E-02 APROBADA: se desmarcaron los cuatro bloques y se introdujeron 0 preguntas, 0 minutos y penalización 2. La sesión no comenzó y el estado enumeró los cuatro errores: bloque obligatorio, número entero positivo, duración mínima de un minuto y penalización entre 0 y 1.
- 2026-07-31 · Navegador integrado de Codex · 1280 × 720 px · `/#examen` · E-03 APROBADA: Solo BOE con 1 pregunta fue rechazado porque había 0 oficiales activas; no se inició sesión ni se usó contenido de otro origen.
- 2026-07-31 · Navegador integrado de Codex · 1280 × 720 px · `/#examen` · E-04 APROBADA en la ruta de insuficiencia: Solo IA validada con 1 pregunta informó de 0 disponibles y no inició sesión. Los bancos reales estaban vacíos, por lo que no se pudo contrastar manualmente una mezcla de IA validada, `draft` e inactiva.
- 2026-07-31 · Navegador integrado de Codex · 1280 × 720 px · `/#examen` · E-05 APROBADA en la ruta de insuficiencia: con 10 preguntas y 60 % BOE, la interfaz calculó 6 BOE y 4 IA validada; al haber 0 y 0, rechazó exactamente esas cuotas sin completar silenciosamente con otro origen.
- 2026-07-31 · Navegador integrado de Codex · E-06 APROBADA: con `?demo=1`, el aviso ficticio permaneció visible antes, durante y después de una sesión de tres preguntas; la modalidad se mostró como sesión ficticia, no como IA validada.
- 2026-07-31 · Navegador integrado de Codex · 1280 × 720 px · `/?demo=1#examen` · E-07 APROBADA: se respondió la pregunta 1, se dejó la 2 en blanco y marcada, y se navegó a la 3 mediante el índice. El índice conservó los tres estados y antes de finalizar no aparecieron solución, feedback ni fuente.
- 2026-07-31 · Navegador integrado de Codex · 1280 × 720 px · `/?demo=1#examen` · E-08 APROBADA: al finalizar con 1 pregunta en blanco y 1 marcada, el diálogo informó de ambas; `Volver al examen` cerró el diálogo y mantuvo la sesión, y una segunda apertura permitió confirmar la corrección.
- 2026-07-31 · Navegador integrado de Codex · 1280 × 720 px · `/?demo=1#examen` · E-09 APROBADA: la respuesta de la pregunta 1 se cambió de A a B, de B a A y de A a B. Con penalización 0,25, el resultado final contó 1 acierto, 1 error y 1 blanco una sola vez cada uno, con puntuación neta 0,75.
- 2026-07-31 · Navegador integrado de Codex · 1280 × 720 px · `/?demo=1#examen` · E-10 APROBADA: tras responder la 1, marcar la 2, navegar a la 3 y recargar, apareció la recuperación de sesión. Al reanudar se restauraron la pregunta 3, la respuesta de la 1, el blanco y la marca de la 2, el orden A-B-C-D y el tiempo restante, reducido de 47 a 36 segundos.
- 2026-07-31 · Navegador integrado de Codex · 1280 × 720 px · `/?demo=1#examen` · E-11 APROBADA: una sesión de 1 pregunta y 1 minuto se dejó expirar realmente. Finalizó automáticamente con el mensaje `Tiempo agotado`, mostró el resultado y limitó `Tiempo empleado` a 1 min.
- 2026-07-31 · Navegador integrado de Codex · E-12 APROBADA: el resultado demo mostró aciertos, errores, blancos, puntuación neta, porcentaje bruto, tiempo, desgloses por bloque y tema, y revisión con feedback y fuente.
- 2026-07-31 · Navegador integrado de Codex · `/#examen` · E-13 APROBADA: se completó la navegación íntegra mediante teclado, con foco siempre visible y diálogo utilizable. Se comprobó a 320 px, 768 px y 1280 px, y con zoom real al 200 %. En todas las comprobaciones no hubo desplazamiento horizontal y los controles y textos permanecieron legibles.
- 2026-07-31 · Navegador integrado de Codex · E-14 APROBADA: `tests/phase4-runner.html` mostró 9 pruebas aprobadas y 0 fallidas.
- 2026-07-31 · Navegador integrado de Codex · Red y consola: con caché desactivada mediante CDP, HTML, CSS, módulos JavaScript y siete JSON cargaron con HTTP 200; `favicon.ico` respondió 404 sin afectar la aplicación. No se observaron mensajes `warning` ni `error` durante los casos ejecutados. La primera carga reutilizó HTML antiguo de caché y mostró `Cannot read properties of null (reading 'append')`; una recarga ignorando caché cargó la versión coherente y el fallo no volvió a reproducirse.
