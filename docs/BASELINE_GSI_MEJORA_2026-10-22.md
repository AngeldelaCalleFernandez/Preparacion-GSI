# Línea base del plan de mejora GSI

Fecha de captura: **22 de octubre de 2026**.

## Estado de partida

- Rama de origen: `gsi-only-final`.
- Commit de origen: `6d082b126fa8014a9b340217be7bcfcd93f19a94`.
- Diferencia con el upstream al iniciar: 0 commits por delante y 0 por detrás.
- Rama de trabajo creada: `codex/mejora-aplicacion`.
- Cambio previo del usuario detectado: `docs/GSI_PREGUNTAS_TEST_COMPLETAS_2026.md`, no versionado.
- Huella del export previo: SHA-256 `33e14e23f5c9d506eb31842c8953203f7edec19b417afd151d40ee576259ce2a`, 1.582.525 bytes.
- Copia local de seguridad: `tmp/gsi/backups/GSI_PREGUNTAS_TEST_COMPLETAS_2026-legacy-33e14e23.md` (excluida de Git).

No se detectaron otros cambios de trabajo al iniciar. La copia previa del export se conserva para comparación y recuperación, pero no forma parte del producto activo.

## Producto observado

| Elemento | Estado de partida |
| --- | ---: |
| Temas | 57 |
| HTML de temas generados | 57 |
| Preguntas manuales/curadas | 959 |
| Preguntas generadas por IA | 803 |
| Preguntas oficiales | 202 |
| Preguntas activas y validadas | 1.964 |

La suite guardada el 22 de octubre terminó con código 0, `technical_pass=true` y `release_ready=true`. Registró 19.284 controles de integridad, 21 archivos de datos contra 19 esquemas, 93 pruebas unitarias, 289 de regresión y 77 comprobaciones funcionales. El detalle autoritativo está en [`logs/gsi-suite.json`](../logs/gsi-suite.json).

## Mapa de fuentes y derivados

| Fuente de verdad | Proceso | Derivado |
| --- | --- | --- |
| `data/questions-official.json`, `data/questions-manual.json`, `data/questions-ai.json`, `data/syllabus.json` | `scripts/export_gsi_questions.py` | `docs/GSI_PREGUNTAS_TEST_COMPLETAS_2026.md` |
| `content/topics/*.md` y datos de contenido | `scripts/build_gsi_content.py` | `content/generated/*.html`, `data/topic-content.json` y manifiestos relacionados |
| `data/updates.json` | Renderizado de avisos en la aplicación | Avisos de vigencia dentro de los temas afectados |
| Los tres bancos de preguntas y el registro editorial | `scripts/analyze_question_quality.py` | `logs/gsi-question-quality.json` y `docs/GSI_CALIDAD_PREGUNTAS.md` |
| `docs/GUIA_DE_ESTUDIO.md` | Sin generador; sincronización protegida por validación documental | `docs/guia-de-estudio.html` |
| Datos, esquemas, código y pruebas | `scripts/run_gsi_suite.py` | `logs/gsi-suite.json` y logs auxiliares |

## Reglas para continuar

1. No modificar manualmente el export completo: regenerarlo desde los JSON y comprobarlo con `--check`.
2. No atribuir una revisión humana independiente a las preguntas IA sin evidencia nueva.
3. Mantener separadas las cifras de producto de las cifras históricas de auditorías anteriores.
4. Ejecutar la validación documental junto con el resto de la suite antes de cerrar una fase.
5. Preservar el export previo hasta comprobar y aceptar la nueva salida reproducible.
