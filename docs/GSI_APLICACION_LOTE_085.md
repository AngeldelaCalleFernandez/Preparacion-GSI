# Aplicación del lote GSI-EDITORIAL-085

El 7 de noviembre de 2026 se aplicaron localmente las 20 propuestas manuales aprobadas por el propietario. El SHA-256 canónico del lote coincide con el aprobado, `39289ed0bf82f4e575973ecdec4af06c0c7a2a945efdbcafc23df6c1aa883150`. El historial conserva las versiones de partida y el contenido aceptado por ID. [Ficha antes/después](GSI_REVISION_LOTE_085.md) · [Recibo](../content/question-reviews/approvals/GSI-EDITORIAL-085.json) · [Historial](../data/gsi-editorial-revisions.json).

La comparación confirmó 20 cambios, todos en el banco manual y con los mismos identificadores, IDs de alternativas y claves. Los 1.944 registros restantes coinciden con sus versiones anteriores. Se verificaron los hashes de 434 archivos protegidos, entre ellos las 202 preguntas oficiales, el banco IA y los JSON de los demás lotes.

## Corrección de privacidad en BYOD

`MAN-GSI-P19-098` conserva la clave B. La pregunta anterior pedía identificar un riesgo y las cuatro alternativas describían riesgos plausibles. La versión aplicada pide elegir una medida protectora para un móvil personal con gestión remota. La opción B propone informar del alcance, limitar la recogida y el borrado a lo necesario y separar los ámbitos personal y corporativo. La retirada selectiva del perfil de trabajo es un ejemplo técnico sujeto al modo de gestión y a la plataforma. [RGPD, artículos 5, 13 y 25](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · [Android Enterprise, perfil de trabajo y borrado](https://developers.google.com/android/work/requirements/work-profile).

Se comprobó la correspondencia con las 16 fuentes de la verificación previa. El día de la aprobación se consultaron de nuevo el texto del RGPD y la documentación de Android Enterprise. También se verificó el hash de la copia conservada del documento NIST. [Verificación previa y revisión por alternativa](../logs/gsi-editorial-085-preapproval-2026-11-05.json).

| Comprobación | Resultado |
| --- | --- |
| Suite completa | Código 0 y 19.251 controles de integridad superados |
| Datos | 111 archivos JSON, 21 esquemas y 1.964 preguntas validadas |
| Pruebas unitarias, regresión y HTTP | 101, 289 y 82 comprobaciones superadas |
| Circuito editorial, analizador y jerarquía | 19, 8 y 5 pruebas superadas |
| Recorrido específico en Chrome a 390 px | 20 respuestas correctas y 60 explicaciones de distractores con barajado. 80 intentos en cuatro sesiones y los 20 IDs en Refuerzo |
| Funciones del producto | Entrenamiento, Simulacros, estadísticas, Refuerzo, exportación e importación bajo la subruta HTTP de prueba |

Las explicaciones correctas breves pasan de 20 a 0 y se añaden 60 explicaciones de distractores. La regla de escoger la primera alternativa más larga acierta 9 de 20 antes y después. La alerta de ratio entre 1,5 y menos de 2 baja de una a cero. La dificultad sigue siendo orientativa. [Registro de resultados](../logs/gsi-editorial-085-application-2026-11-07.json).

## Archivos y reproducción

Se crearon el recibo, este informe y el registro de pruebas. Se actualizaron el banco manual, el historial, la documentación de estado y los derivados de calidad, progreso, exportación e integridad. No hubo conversiones documentales ni quedan conversiones nuevas pendientes.

Desde la raíz del proyecto, con Chrome y las dependencias disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-085.json
.\.venv\Scripts\python.exe -X utf8 -B scripts/export_gsi_questions.py --check
.\.venv\Scripts\python.exe -X utf8 -B scripts/run_gsi_suite.py
```

Hay 100 preguntas aprobadas y aplicadas. Quedan 1.662 propuestas en 84 lotes y dos incidencias activas con corrección propuesta. La siguiente prioridad es el lote 086, sobre continuidad de un servicio con un único acceso 5G. [Progreso editorial](../logs/gsi-editorial-progress.json) · [Ficha del lote 086](GSI_REVISION_LOTE_086.md).
