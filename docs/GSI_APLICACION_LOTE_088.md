# Aplicación del lote GSI-EDITORIAL-088

El 9 de noviembre de 2026 se aplicaron localmente las 20 propuestas manuales aprobadas por el propietario. El SHA-256 canónico coincide con el aprobado, `fe7b494b919a4cc0465b430d0391449f945dfb8e4fb0217d6942e8667abc03c8`. Se conservaron los IDs de pregunta y alternativa, las claves, la procedencia y las versiones de partida. [Ficha antes/después](GSI_REVISION_LOTE_088.md) · [Recibo](../content/question-reviews/approvals/GSI-EDITORIAL-088.json) · [Historial](../data/gsi-editorial-revisions.json).

Solo cambiaron los 20 registros manuales aprobados. Los otros 1.944 permanecen iguales, incluidas las 202 preguntas oficiales, cuyo archivo es idéntico al auditado. La comparación de 444 archivos protegidos incluye el banco IA, los borradores, las propuestas de otros lotes, los recibos anteriores y los originales de fuentes conservados.

## Política de grabación de reuniones

`MAN-GSI-P19-157` conserva la clave C. La pregunta anterior permitía elegir entre varios problemas de grabación. La versión aplicada pide una conclusión sobre el gobierno de las grabaciones y exige justificar la finalidad, el acceso, la protección y la retención. El coste de almacenamiento y el cifrado en tránsito, por sí solos, no determinan el acceso ni el plazo del archivo. [RGPD, artículos 5, 13, 25 y 32](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · [NCSC, Secure communications principles](https://www.ncsc.gov.uk/guidance/secure-communication-principles).

Se cotejaron los localizadores de las 24 fuentes con los registros de verificación. El día de aplicación se reabrieron el RGPD, los principios de NCSC y la guía de Microsoft. Para `MAN-GSI-P19-136`, la cobertura, el campo de visión y el encuadre se comprobaron en *Technology considerations > Video*. La distancia al asiento más lejano y la legibilidad se comprobaron en *Technology Guidance > Display*. Solo cambió la referencia de esa pregunta entre los dos hashes de revisión. El JSON y la ficha anteriores se conservan en el historial. [Microsoft Learn, Video](https://learn.microsoft.com/en-us/microsoftteams/rooms/room-planning-guidance#video) · [Microsoft Learn, Display](https://learn.microsoft.com/en-us/microsoftteams/rooms/room-planning-guidance#display) · [Verificación previa](../logs/gsi-editorial-088-preapproval-2026-11-05.json) · [Revisión del localizador](../logs/gsi-editorial-088-locator-revision-2026-11-05.json).

| Comprobación | Resultado |
| --- | --- |
| Suite completa | Código 0, con 19.251 controles de integridad superados |
| Datos | 111 JSON, 21 esquemas y 1.964 preguntas validadas. Exportación sincronizada |
| Pruebas unitarias, regresión y HTTP | 101, 289 y 82 comprobaciones superadas |
| Circuito editorial, analizador y jerarquía | 19, 8 y 5 pruebas superadas |
| Entrenamiento del lote en Chrome a 390 × 844 | 20 respuestas correctas y 60 distractores con feedback literal y letras coherentes con el barajado. Reanudación tras un fallo, 80 intentos en cuatro sesiones y los 20 IDs en Refuerzo |
| Recorridos de producto | Entrenamiento, Simulacros, estadísticas, Refuerzo, exportación e importación en escritorio y móvil con la subruta HTTP de prueba |
| Cálculo por sentido | 30 salas × 2,5 Mb/s dan 75 Mb/s. El 20 % adicional sobre esa base da 90 Mb/s |

Las explicaciones correctas breves bajaron de 14 a 0 y se incorporaron 60 explicaciones de distractores. Escoger la primera alternativa más larga acertaba 5 de 20 y ahora acierta 3 de 20. Las alertas de longitud pasaron de 2 a 0 en el intervalo de 1,5 a menos de 2 y de 1 a 0 en el intervalo de 2 o más. La dificultad sigue siendo orientativa. [Registro de aplicación y pruebas](../logs/gsi-editorial-088-application-2026-11-09.json).

## Archivos y reproducción

Se crearon el recibo, este informe y el registro de aplicación. Se actualizaron el banco manual, el historial, el estado del plan y los derivados de calidad, progreso, exportación e integridad. El registro enumera los archivos exactos. No hubo conversiones ni quedan conversiones nuevas pendientes.

Desde la raíz del proyecto, con Chrome y las dependencias disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-088.json
.\.venv\Scripts\python.exe -X utf8 -B scripts/export_gsi_questions.py --check
.\.venv\Scripts\python.exe -X utf8 -B scripts/run_gsi_suite.py
```

Hay 140 preguntas aprobadas y aplicadas. Se han resuelto las seis incidencias confirmadas durante la preparación. Quedan 1.622 propuestas en 82 lotes, con el 002 primero en la cola original de incidencias IA. El cierre editorial y la calibración estadística siguen pendientes. [Progreso editorial](../logs/gsi-editorial-progress.json) · [Ficha del lote 002](GSI_REVISION_LOTE_002.md).
