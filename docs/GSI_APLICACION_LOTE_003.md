# Aplicación del lote GSI-EDITORIAL-003

El 9 de noviembre de 2026 se aplicaron localmente las 20 propuestas IA aprobadas por el propietario. El SHA-256 canónico coincide con el aprobado, `d8fc3bac73b45bf032b9a1e8ff100150a85693098124876f8731ef578d216991`. Se conservaron los IDs de pregunta y alternativa, las claves, la procedencia y las versiones de partida. [Ficha antes/después](GSI_REVISION_LOTE_003.md) · [Recibo](../content/question-reviews/approvals/GSI-EDITORIAL-003.json) · [Historial](../data/gsi-editorial-revisions.json).

Solo cambiaron los 20 registros IA aprobados. Los otros 1.944 permanecen iguales, incluidas las 202 preguntas oficiales. Se comprobaron 450 archivos protegidos, entre ellos el banco manual, los otros lotes, los borradores originales y las aceptaciones históricas. La cadena de revisiones vincula cada borrador con su versión de partida y cada texto activo con su recibo exacto. El bloqueo de regeneración integral impide volver a activar los textos históricos.

## Contraste de claves y fuentes

Se cotejaron 21 referencias de 18 fuentes primarias. La copia electrónica con cambio de formato conserva la clave C y se contrasta con el artículo 27 de la Ley 39/2015. La auditoría ENS de categoría MEDIA conserva B y exige revisar también roles, riesgos y evidencias. La pregunta sobre una prueba de recuperación conserva B y distingue los registros de ejecución de una copia de la evidencia de una restauración comprobada. [Ley 39/2015, artículo 27](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565#a27) · [Real Decreto 311/2022, anexo III](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · [Guía conjunta #StopRansomware, p. 5](https://www.ic3.gov/CSA/2023/231019.pdf).

La ruta estática principal del manual de SWI-Prolog devolvió HTTP 502. Se comprobaron los mismos apartados §§ 2.1.1–2.1.3 en el espejo oficial europeo y en la vista de documentación del proyecto. Se mantuvo el contenido exacto aprobado. [Manual oficial, espejo europeo](https://eu.swi-prolog.org/man/quickstart.html) · [Vista oficial de documentación](https://www.swi-prolog.org/pldoc/man?section=quickstart) · [Registro de preparación](../logs/gsi-editorial-003-preparation.json).

| Comprobación | Resultado |
| --- | --- |
| Suite completa | Código 0, con 19.251 controles de integridad superados |
| Datos | 111 JSON, 21 esquemas y 1.964 preguntas validadas. Exportación sincronizada |
| Pruebas unitarias, regresión y HTTP | 101, 289 y 82 comprobaciones superadas |
| Circuito editorial, analizador y jerarquía | 19, 8 y 5 pruebas superadas |
| Entrenamiento del lote en Chrome a 390 × 844 | 20 respuestas correctas y 60 distractores con feedback literal y letras coherentes con el barajado. Reanudación tras un fallo, 80 intentos en cuatro sesiones y los 20 IDs en Refuerzo |
| Recorridos de producto | Entrenamiento, Simulacros, estadísticas, Refuerzo, exportación e importación en escritorio y móvil con la subruta HTTP de prueba |

Las explicaciones correctas breves bajaron de 16 a 0 y se incorporaron 60 explicaciones de distractores. Escoger la primera alternativa más larga acertaba 13 de 20 y ahora acierta 5 de 20. Las correctas únicas más largas bajaron de 12 a 4. La dificultad sigue siendo orientativa. [Registro de aplicación y pruebas](../logs/gsi-editorial-003-application-2026-11-09.json).

## Archivos y reproducción

Se crearon el recibo, este informe y el registro de aplicación. Se actualizaron el banco IA, el historial, el estado del plan y los derivados de calidad, progreso, exportación e integridad. El registro enumera los archivos exactos. No hubo conversiones ni quedan conversiones nuevas pendientes.

Desde la raíz del proyecto, con Chrome y las dependencias disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-003.json
.\.venv\Scripts\python.exe -X utf8 -B scripts/export_gsi_questions.py --check
.\.venv\Scripts\python.exe -X utf8 -B scripts/run_gsi_suite.py
```

Hay 180 preguntas aprobadas y aplicadas. Quedan 1.582 propuestas en 80 lotes. De las 128 preguntas IA señaladas en la auditoría, 55 están aplicadas y 73 esperan decisión editorial. El lote 004 reúne las 20 siguientes. [Progreso editorial](../logs/gsi-editorial-progress.json) · [Ficha del lote 004](GSI_REVISION_LOTE_004.md).
