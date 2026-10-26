# Entrega de mejora de tests — 26 de octubre de 2026

## Hito completado y trabajo pendiente

Implementado el hito técnico: diagnóstico gradual, contratos y circuito de lotes versionados, feedback por distractor y barajado de entrenamiento con persistencia. Base: `gsi-only-final` / `a32323c`; rama de trabajo: `codex/calidad-preguntas-entrenamiento`.

La revisión editorial completa no está terminada: 0 de 1.762 preguntas tienen una aceptación nueva; 20 están propuestas en el [piloto](GSI_REVISION_PILOTO_001.md). El plan acordado exige tu revisión de estos textos antes de aplicarlos. La siguiente etapa será aplicar solo las decisiones aceptadas y validar el piloto antes de continuar con el resto de las 128 incidencias IA originales.

Los tres bancos activos conservan exactamente sus hashes de la auditoría. También permanecen intactos los borradores IA, las aceptaciones históricas y los documentos originales. No se han realizado conversiones ni hay conversiones nuevas pendientes.

## Validación ejecutada

- Suite completa: código **0**; `technical_pass: true`. El cierre de esta revisión editorial es **false**, con **1.762** decisiones pendientes.
- 101 pruebas unitarias JavaScript, 289 pruebas de regresión de navegador, 81 comprobaciones funcionales HTTP en Chrome.
- 13 pruebas del circuito editorial, 8 del analizador y 5 de jerarquía del temario.
- 23 archivos de datos contra 21 esquemas; 19.251 controles de integridad; 57 temas comprobados.
- Escritorio, móvil, teclado y subruta de GitHub Pages; corrección, reanudación, repetición de falladas, preferencia e importación/exportación.
- Simulación del piloto con 20 preguntas; aplicación sin aceptación rechazada sin modificar bancos.
- Aplicación, reemplazo, retirada de versiones y restauración ante errores se comprueban con recibos ficticios solo en carpetas temporales; no hay aceptación humana real registrada para el piloto.
- `git diff --check`, comprobación de hashes y búsqueda de patrones de secretos en los 45 archivos creados o modificados; cero coincidencias.
- El registro histórico de revisiones conserva su JSON; su comparación con Git normaliza los finales de línea mixtos ya presentes en el checkout. Los tres bancos son idénticos byte a byte.

Evidencia: [suite completa](../logs/gsi-suite.json), [progreso editorial](../logs/gsi-editorial-progress.json), [calidad](GSI_CALIDAD_PREGUNTAS.md) e [incidencias iniciales resueltas](../logs/gsi-test-incidents.json). Las primeras ejecuciones fallaron por permisos temporales, bloqueo del servidor local y una espera ausente en la prueba nueva de recarga; se documentan los fallos y su resolución.

## Cómo probar y revisar

Desde la raíz del proyecto, en PowerShell:

```powershell
.\.venv\Scripts\python.exe -B scripts/run_gsi_suite.py
.\.venv\Scripts\python.exe -B scripts/editorial_batches.py --batch content/question-reviews/lote-001.json
.\.venv\Scripts\python.exe -m http.server 8765 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8765/#entrenamiento`, iniciar un entrenamiento manual o IA, comprobar las letras, responder y recargar. El orden y la corrección se conservan. Desactivar el barajado afecta a las nuevas sesiones. Las preguntas oficiales conservan sus alternativas originales.

Para la revisión editorial, leer el [piloto antes/después](GSI_REVISION_PILOTO_001.md) y comunicar las decisiones por ID o la aceptación del lote concreto. El [procedimiento](GSI_MEJORA_TESTS.md) explica los hashes, el registro real de aceptación y la aplicación.

## Archivos creados

- `assets/js/question-feedback.js`
- `assets/js/training-options.js`
- `content/question-reviews/baseline.json`
- `content/question-reviews/lote-001.json`
- `data/gsi-editorial-revisions.json`
- `docs/GSI_ENTREGA_MEJORA_TESTS_2026-10-26.md`
- `docs/GSI_MEJORA_TESTS.md`
- `docs/GSI_REVISION_PILOTO_001.md`
- `logs/gsi-editorial-progress.json`
- `logs/gsi-test-incidents.json`
- `schemas/editorial-batch.schema.json`
- `schemas/gsi-editorial-revisions.schema.json`
- `scripts/editorial_batches.py`
- `scripts/editorial_progress.py`
- `scripts/prepare_editorial_pilot.py`
- `tests/editorial_batch_tests.py`

## Archivos modificados

- `README.md`
- `assets/js/analytics-storage.js`
- `assets/js/app.js`
- `assets/js/editorial-review.js`
- `assets/js/exam.js`
- `assets/js/progress-backup.js`
- `assets/js/reinforcement.js`
- `assets/js/training.js`
- `assets/js/ui.js`
- `docs/GSI_CALIDAD_PREGUNTAS.md`
- `docs/GSI_REVISION_EDITORIAL.md`
- `index.html`
- `logs/gsi-browser-smoke.json`
- `logs/gsi-final-validation.json`
- `logs/gsi-legacy-review.json`
- `logs/gsi-question-quality.json`
- `logs/gsi-regression.json`
- `logs/gsi-suite.json`
- `logs/gsi-unit.json`
- `review.html`
- `scripts/analyze_question_quality.py`
- `scripts/build_gsi_authored_questions.py`
- `scripts/import_gsi_questions.py`
- `scripts/run_gsi_suite.py`
- `scripts/validate_gsi_final.py`
- `scripts/validate_json.py`
- `tests/gsi-smoke.mjs`
- `tests/gsi-unit.mjs`
- `tests/question_quality_tests.py`

## Límites de esta entrega

El barajado y el circuito están probados en Chrome; este hito no acredita una nueva validación en otros navegadores. Las propuestas son una revisión asistida con fuentes, pendiente de aceptación del propietario. No se atribuye revisión humana independiente ni calibración estadística. La publicación de estas modificaciones no forma parte de la entrega local.
