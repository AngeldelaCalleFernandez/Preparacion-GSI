# GSI A2 · Programa de estudio

Aplicación personal estática para Gestión de Sistemas e Informática de la Administración del Estado, ingreso libre A2. El programa tiene **57 temas** del Anexo IX de BOE-A-2025-26262, distribuidos en **10 / 16 / 15 / 16**.

Los apuntes completos y los resúmenes proceden del corpus Drive V2.1 del propietario. Cada tema conserva documento, enlace, sección y revisión. No necesita backend, cuenta de usuario, framework ni compilación.

## Estado de esta entrega

**La aplicación funciona; la cobertura del banco aún impide cerrar la versión estable.** Hay 959 preguntas curadas activas y 803 generadas pendientes de validación. Los 57 temas tienen apuntes y fuente, pero 40 todavía no tienen preguntas activas y otro tiene 17. Las pendientes quedan excluidas del entrenamiento y los exámenes.

El detalle reproducible está en [la auditoría](docs/FINAL_GSI_AUDIT.md), [la cobertura por tema](data/gsi-coverage-report.json) y [el resultado completo de pruebas](logs/gsi-suite.json). El lote pendiente puede consultarse en [la vista de revisión editorial](review.html).

## Abrir la aplicación

Desde la raíz del repositorio:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Abre `http://127.0.0.1:8765/`. No abras `index.html` con `file://`: el navegador necesita HTTP para cargar los JSON. Si utilizas el entorno local ya preparado, el intérprete es `.\.venv\Scripts\python.exe`.

Para GitHub Pages basta servir los archivos del repositorio. Las rutas son relativas; se ha probado también desde una subruta de proyecto. Esta entrega no se ha publicado ni enviado a una PR porque el control de cobertura no está superado.

## Estudiar

- **Temario:** apuntes completos y repaso, con procedencia y avisos de vigencia separados del original.
- **Entrenamiento:** tema, bloque, mixto, preguntas no vistas o falladas; corrección y explicación inmediata.
- **Examen GSI:** 100 preguntas, 90 minutos, acierto +1, error −1/3, blanco 0. Es puntuación directa de práctica; no reproduce la transformación ni el corte del tribunal. No se implementan reservas.
- **Práctica escrita:** cuatro simulacros, elección A/B, cinco preguntas y 180 minutos. Incluye esquema, respuestas guardadas, soluciones y autoevaluación 30/10/5/5. La biblioteca contiene 38 cuadernos/solucionarios locales y cuatro carpetas de apoyo A1, identificadas como apoyo.
- **Refuerzo y estadísticas:** historial de respuestas, errores, progreso por tema y bloque, sesiones y repaso.

El progreso queda en este navegador. En Estadísticas puedes exportarlo, importarlo o reiniciarlo. Exporta antes de cambiar de navegador o sustituir una práctica escrita: solo se conserva una sesión escrita actual. No se escriben datos en los JSON del sitio ni se sincronizan entre dispositivos.

## Ejecutar todas las pruebas

Requisitos de desarrollo: Python, `jsonschema`, Node.js, `rg` (ripgrep), Playwright y Google Chrome. No son dependencias de la aplicación publicada.

```powershell
python -m pip install -r scripts/requirements-validation.txt
python scripts/run_gsi_suite.py
```

Si Playwright no está disponible en el entorno, puedes instalarlo fuera del repositorio:

```powershell
npm install --prefix "$env:TEMP/gsi-test-tools" playwright
$env:PLAYWRIGHT_MODULE = "$env:TEMP/gsi-test-tools/node_modules/playwright/index.mjs"
python scripts/run_gsi_suite.py
```

El ejecutor detecta también la instalación de Playwright incluida en el entorno de trabajo. Los navegadores de prueba se sirven por HTTP local con puertos libres. No dependen del servidor abierto para estudiar.

| Código de salida | Significado |
| --- | --- |
| 0 | Pruebas técnicas y criterio de cobertura superados |
| 1 | Fallo técnico o dependencia ausente; consultar el log |
| 2 | Sin fallos técnicos, pero cierre editorial pendiente |

El estado actual esperado es **2**. Un JSON válido no concede validación editorial a sus preguntas.

## Datos y mantenimiento

- `data/`: catálogos GSI, fuentes, manifiestos y bancos físicamente separados (`official`, `manual`, `ai`). No hay preguntas oficiales identificadas en el material importado.
- `content/topics/` y `content/generated/`: 57 temas Markdown y sus HTML listos para servir.
- `documents/markdown/gsi/`: 50 conversiones del corpus; los originales permanecen en Drive y las capturas nativas locales se conservan en `documents/originals/gsi/`, fuera de Git.
- `content/question-drafts/`: texto de autoría de preguntas; [procedimiento editorial](docs/GSI_REVISION_EDITORIAL.md).
- `scripts/`: importadores, compiladores opcionales y validadores actuales. Los archivos publicados ya están generados: no hay que ejecutar importadores para estudiar.
- `archive/`, `PLAN_*`, los informes antiguos de `docs/`, `data/protected-artifacts.json`, `data/conversion_report.json` y los documentos ajenos a `documents/markdown/gsi/`: historia del proyecto TAI, sin carga desde el producto GSI. Los scripts archivados son evidencia de migración y no deben ejecutarse desde su nueva ubicación.

La identidad activa es `OPP-GSI / SYL-GSI-2025`. El historial TAI permanece intacto y se excluye de cualquier importación o atribución automática de progreso a GSI.

Consulta también el [control de vigencia](docs/GSI_VIGENCIA.md). Las fechas de revisión originales se conservan; ejecutar un validador no actualiza automáticamente la vigencia del contenido.
