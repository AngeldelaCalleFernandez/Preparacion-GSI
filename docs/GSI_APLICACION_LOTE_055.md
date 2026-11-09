# Aplicación del lote GSI-EDITORIAL-055

El 6 de noviembre de 2026 se aplicaron localmente las 20 propuestas de IA aprobadas por el propietario. La aceptación corresponde al SHA-256 canónico `f04d5383ed71916eb4da48c8fd224bc1ac541b4b8fddef0e3ed5449d1a603673`. El historial conserva los 20 registros de partida y su contenido aprobado. [Ficha vigente](GSI_REVISION_LOTE_055.md) · [Recibo](../content/question-reviews/approvals/GSI-EDITORIAL-055.json) · [Historial](../data/gsi-editorial-revisions.json).

La comparación del banco antes y después confirmó 20 cambios, todos en el banco IA, con los mismos IDs y claves. Los 1.944 registros restantes coinciden con su versión anterior. Se verificaron los hashes de 431 archivos protegidos, entre ellos las 202 preguntas oficiales, el banco manual, la aceptación IA histórica y los JSON de las propuestas de los demás lotes.

## Corrección de O(n) y fuentes

`AI-GSI-B3-T05-002` conserva la clave C. La explicación indica que O(n) expresa una cota superior asintótica lineal. Por ejemplo, para todo entero `n ≥ 1`, el coste constante `T(n) = 1` cumple `1 ≤ n` y, por tanto, pertenece a O(n). Para pertenecer a Θ(n) haría falta también una cota inferior lineal positiva a partir de cierto tamaño, que un coste constante no satisface. [Definición formal de NIST](https://xlinux.nist.gov/dads/HTML/bigOnotation.html).

Se confirmó la correspondencia entre las 22 fuentes verificadas durante la preparación y el lote aprobado. El día de la aplicación se volvieron a consultar la definición formal de O(n) y el apartado `Definition` de la entrada sobre colisiones. El localizador de `AI-GSI-B3-T05-007` se precisó antes de pedir la aceptación, con el hash anterior archivado. Se repitieron los 12 ejercicios semánticos en memoria contra las versiones aprobadas. [Verificación de fuentes](../logs/gsi-editorial-055-preapproval-2026-11-05.json) · [Definición de colisión](https://xlinux.nist.gov/dads/HTML/collision.html) · [Historial del localizador](../logs/gsi-editorial-055-locator-revision-2026-11-05.json).

| Comprobación | Resultado |
| --- | --- |
| Suite completa | Código 0 y 19.251 controles de integridad superados |
| Datos | 111 archivos JSON, 21 esquemas y 1.964 preguntas validadas |
| Pruebas unitarias, regresión y HTTP | 101, 289 y 82 comprobaciones superadas |
| Circuito editorial, analizador y jerarquía | 19, 8 y 5 pruebas superadas |
| Recorrido específico en Chrome a 390 px | 20 respuestas correctas, 60 explicaciones de distractores y 80 intentos en cuatro sesiones. Se comprobó reanudación y Refuerzo para los 20 IDs |
| Funciones del producto | Entrenamiento, Simulacros, estadísticas, Refuerzo, exportación e importación bajo la subruta HTTP de prueba |

En el lote, las correctas que eran las únicas más largas pasan de 4 a 3. Escoger la primera alternativa de longitud máxima pasa de acertar el 20 % al 15 %. Las explicaciones correctas breves pasan de 18 a 0 y se incorporan 60 explicaciones de distractores. La dificultad sigue siendo orientativa. [Registro de resultados](../logs/gsi-editorial-055-application-2026-11-06.json).

## Archivos y reproducción

Se crearon el recibo, este informe y el registro de pruebas. Se actualizaron el banco IA, el historial, la documentación de estado y los derivados de calidad, progreso, exportación e integridad. No hubo conversiones documentales ni quedan conversiones nuevas pendientes.

Desde la raíz del proyecto, con Chrome y las dependencias disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-055.json
.\.venv\Scripts\python.exe -X utf8 -B scripts/export_gsi_questions.py --check
.\.venv\Scripts\python.exe -X utf8 -B scripts/run_gsi_suite.py
```

Hay 80 preguntas aprobadas y aplicadas, 1.682 propuestas en 85 lotes pendientes y tres incidencias activas con corrección propuesta. La siguiente prioridad es el lote 085, que resuelve la ambigüedad de la pregunta sobre privacidad en BYOD. [Progreso actual](../logs/gsi-editorial-progress.json) · [Ficha del lote 085](GSI_REVISION_LOTE_085.md).
