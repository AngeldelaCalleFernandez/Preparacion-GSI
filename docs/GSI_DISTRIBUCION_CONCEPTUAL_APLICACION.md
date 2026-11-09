# Distribución editorial del banco de entrenamiento

El conjunto preparado de 1.762 preguntas manuales y de IA reúne **1.250 conceptuales (70,94 %) y 512 de aplicación contextualizada (29,06 %)**. Al 9 de noviembre de 2026, las 1.762 versiones están aplicadas localmente. Su estado editorial se recoge en la [versión provisional de estudio](GSI_VERSION_PROVISIONAL.md). Las 202 preguntas oficiales quedan fuera de esta medición.

| Conjunto | Total | Conceptuales | De aplicación |
| --- | ---: | ---: | ---: |
| Manuales | 959 | 708 (73,83 %) | 251 (26,17 %) |
| IA | 803 | 542 (67,50 %) | 261 (32,50 %) |
| Aplicadas localmente, 89 lotes | 1.762 | 1.250 (70,94 %) | 512 (29,06 %) |

Las dos primeras filas agrupan por origen y la última presenta el total aplicado. La cercanía a la orientación 70/30 se obtuvo con los enunciados preparados. El recuento de tipos es una clasificación editorial y la dificultad sigue siendo orientativa.

## Procedencia del recuento

Para los lotes 002–089 se tomó `questions[].mode` de cada registro `logs/gsi-editorial-<número>-preparation.json`. Se contrastaron los 88 hashes con los JSON canónicos y se comprobó que los IDs de cada registro coincidieran con su lote. Los 89 lotes cubren una vez cada ID de la cola inicial y de los bancos manual e IA. Se separaron las versiones aprobadas con el historial de revisiones y se compararon las propuestas pendientes con la versión de partida del banco activo. [Cola de partida](../content/question-reviews/baseline.json) · [Historial de revisiones](../data/gsi-editorial-revisions.json) · [Progreso editorial](../logs/gsi-editorial-progress.json).

Los ajustes posteriores de los lotes 055 y 088 afectan solo a los localizadores de dos fuentes. Sus registros enlazan los hashes de preparación con las versiones vigentes y conservan la clasificación del recuento. [Revisión del 055](../logs/gsi-editorial-055-locator-revision-2026-11-05.json) · [Revisión del 088](../logs/gsi-editorial-088-locator-revision-2026-11-05.json).

En el piloto se clasificaron las 20 versiones aceptadas leyendo sus enunciados. Se contó como aplicación una pregunta que requiere interpretar una situación o tomar una decisión bajo las condiciones del caso. Una pregunta que pide reconocer una definición, una distinción o una regla se contó como conceptual. Estas son las seis aplicaciones del piloto. [Ficha del piloto](GSI_REVISION_PILOTO_001.md).

| ID | Decisión o interpretación que exige el caso |
| --- | --- |
| `MAN-GSI-P16-155` | Elegir cómo analizar las obligaciones cuando una aplicación combina licencias distintas. |
| `AI-GSI-B2-T06-015` | Determinar si dos peticiones DELETE son idempotentes pese a recibir códigos de respuesta distintos. |
| `AI-GSI-B2-T13-001` | Seleccionar una medida de continuidad durante el intervalo hasta la entrada del grupo electrógeno. |
| `AI-GSI-B2-T15-001` | Valorar el precio de una oferta que incumple una prescripción obligatoria. |
| `AI-GSI-B3-T01-004` | Identificar el riesgo al recibir por primera vez feedback sobre el ejecutable en una cascada rígida. |
| `AI-GSI-B3-T03-005` | Escoger un criterio de aceptación verificable para el tiempo de respuesta bajo una carga de prueba. |

Los 14 IDs restantes del piloto se clasificaron como conceptuales. Los recuentos describen la versión propuesta o aprobada de cada pregunta. Queda por decidir la aplicación de las propuestas pendientes y, en una etapa posterior, calibrar la dificultad con resultados de uso.
