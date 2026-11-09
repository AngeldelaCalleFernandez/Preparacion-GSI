# Aplicación del lote GSI-EDITORIAL-086

El 9 de noviembre de 2026 se aplicaron localmente las 20 propuestas manuales aprobadas por el propietario. El SHA-256 canónico coincide con el aprobado, `7619aeaf466bd53e475220f028ce69aa8f91d5ffeb675bd7a3341bf315ac5d83`. Se conservaron los IDs de pregunta y alternativa, las claves, la procedencia y las versiones de partida. [Ficha antes/después](GSI_REVISION_LOTE_086.md) · [Recibo](../content/question-reviews/approvals/GSI-EDITORIAL-086.json) · [Historial](../data/gsi-editorial-revisions.json).

Solo cambiaron los 20 registros manuales aprobados. Los otros 1.944 permanecen iguales, incluidas las 202 preguntas oficiales, cuyo archivo es idéntico al auditado. La comparación de 441 archivos protegidos incluye el banco IA, los borradores, las propuestas de otros lotes, los recibos anteriores y los tres originales de fuentes en PDF.

## Continuidad de un servicio con un único acceso 5G

`MAN-GSI-P19-080` conserva la clave B. La pregunta anterior permitía elegir entre varios riesgos defendibles. La versión aplicada pide valorar la cobertura, la capacidad y las dependencias de fallo frente a la continuidad que exige el servicio. Dos perfiles del mismo operador o una slice no demuestran por sí solos que exista otro camino de acceso independiente. [NCSC CAF B5, Capacity y Diversity and dependencies](https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems) · [ETSI TS 123 501 V18.12.0, §§ 5.15.1–5.15.2](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf).

El contraste final cotejó los localizadores de las 33 fuentes con el registro de revisión del mismo hash. El día de aplicación se reabrieron NCSC CAF B5, W3C WebRTC y RFC 7874 § 3. RFC Editor devolvió 429 para este último y se leyó la publicación del IETF Datatracker. Se verificaron los hashes de los tres PDF conservados. [Verificación previa por pregunta](../logs/gsi-editorial-086-preapproval-2026-11-05.json) · [IETF RFC 7874, § 3](https://datatracker.ietf.org/doc/html/rfc7874#section-3).

| Comprobación | Resultado |
| --- | --- |
| Suite completa | Código 0, con 19.251 controles de integridad superados |
| Datos | 111 JSON, 21 esquemas y 1.964 preguntas validadas. Exportación sincronizada |
| Pruebas unitarias, regresión y HTTP | 101, 289 y 82 comprobaciones superadas |
| Circuito editorial, analizador y jerarquía | 19, 8 y 5 pruebas superadas |
| Entrenamiento del lote en Chrome a 390 × 844 | 20 respuestas correctas y 60 distractores con feedback literal y letras coherentes con el barajado. Reanudación tras un fallo, 80 intentos en cuatro sesiones y los 20 IDs en Refuerzo |
| Recorridos de producto | Entrenamiento, Simulacros, estadísticas, Refuerzo, exportación e importación en escritorio y móvil con la subruta HTTP de prueba |

Las explicaciones correctas breves bajaron de 14 a 0 y se incorporaron 60 explicaciones de distractores. Escoger la primera alternativa más larga acertaba 11 de 20 y ahora acierta 6 de 20. Las correctas únicas más largas bajaron de 10 a 6 y los ratios entre 1,5 y menos de 2 pasaron de 2 a 0. La dificultad sigue siendo orientativa. [Registro de aplicación y pruebas](../logs/gsi-editorial-086-application-2026-11-09.json).

## Archivos y reproducción

Se crearon el recibo, este informe y el registro de aplicación. Se actualizaron el banco manual, el historial, el estado del plan y los derivados de calidad, progreso, exportación e integridad. El registro enumera los archivos exactos. No hubo conversiones ni quedan conversiones nuevas pendientes.

Desde la raíz del proyecto, con Chrome y las dependencias disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-086.json
.\.venv\Scripts\python.exe -X utf8 -B scripts/export_gsi_questions.py --check
.\.venv\Scripts\python.exe -X utf8 -B scripts/run_gsi_suite.py
```

Hay 120 preguntas aprobadas y aplicadas. Quedan 1.642 propuestas en 83 lotes. La última incidencia confirmada que sigue activa es `MAN-GSI-P19-157`, sobre la política de grabación de reuniones. Su corrección está en el lote 088, pendiente de decisión editorial. [Progreso editorial](../logs/gsi-editorial-progress.json) · [Ficha del lote 088](GSI_REVISION_LOTE_088.md).
