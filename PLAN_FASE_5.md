# Plan de la Fase 5 — Refuerzo

## Alcance aprobado

La Fase 5 añade una cola local de refuerzo basada en respuestas de
entrenamiento, examen y sesiones de refuerzo. Mantiene la aplicación estática,
los JSON de solo lectura, los bancos separados y la compatibilidad con GitHub
Pages. No incluye gráficos, usuarios, sincronización, backend, generación de
preguntas ni trabajo de la Fase 6.

## Entregables

- Ruta `#refuerzo`, navegación y estilos accesibles.
- Motor, almacenamiento y migración de refuerzo en módulos JavaScript nativos.
- Integración idempotente con entrenamiento y examen.
- Runner sin dependencias, validador y pruebas manuales.

## Almacenamiento y separación

Se usarán exclusivamente `tai.reinforcement.real.v1` y
`tai.reinforcement.demo.v1`. Cada registro conserva la referencia de pregunta,
contadores, nivel, prioridad, historial limitado a 25 entradas y hasta 250 IDs
de eventos procesados. Las preguntas demo solo se resuelven con `?demo=1` y
nunca se mezclan con registros reales.

Los únicos estados persistidos son `scheduled`, `paused`, `completed` y
`defective`. Los estados temporales `due`, `overdue` y `future` se calculan en
cada lectura a partir de `nextReviewAt` y del día local actual.

## Eventos e idempotencia

Los eventos tienen IDs estables derivados de `responseId`, `examId` o
`sessionId`. Un evento de respuesta incrementa una sola vez intento y resultado.
Una valoración solo incrementa `knownCount`, `doubtCount` o `unknownCount`.
El alta manual no altera contadores y queda disponible el mismo día. La
migración marca su versión al completar un recorrido correcto, por lo que no
vuelve a procesar el histórico.

## Intervalos

Los niveles 0 a 5 programan respectivamente 1, 3, 7, 14, 30 y 60 días. Un
error o «No la sabía» reinicia al nivel 0. «Dudé» no avanza y programa como
máximo tres días. «La sabía» avanza un nivel: el paso de 4 a 5 queda programado
a 60 días; solo una respuesta correcta posterior en nivel 5 con «La sabía»
completa el ciclo. Un fallo reactiva un registro completado.

## Migración

Solo se importan respuestas incorrectas válidas de
`tai.phase3.training.v1`. Las respuestas correctas antiguas no permiten inferir
dudas y no se importan. La Fase 4 no guarda exámenes finalizados: los exámenes
en curso se integran únicamente al finalizar. La migración nunca borra claves
anteriores, ignora registros inválidos y trata los errores de cuota sin impedir
usar la aplicación.

## Validación

La entrega exige los validadores de fases 2 a 5, el runner de fase 5 sin fallos,
`git diff --check` y la documentación honesta de pruebas manuales. No se
modifican JSON ni esquemas.
