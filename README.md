# GSI · Plataforma de estudio para Gestión de Sistemas e Informática A2

Aplicación web estática y repositorio de contenidos para preparar el **Cuerpo de Gestión de Sistemas e Informática de la Administración del Estado, ingreso libre, subgrupo A2**.

El proyecto está dedicado exclusivamente a GSI A2. Incluye los **57 temas** del Anexo IX de BOE-A-2025-26262, distribuidos en **10 / 16 / 15 / 16**.

## Acceso directo

**[Abrir la aplicación GSI A2](https://angeldelacallefernandez.github.io/TAI-GSI/)**

No hay que instalar nada para estudiar desde la versión publicada. Funciona en ordenador, tableta y móvil con un navegador moderno.

Para empezar, consulta la [guía paso a paso](https://angeldelacallefernandez.github.io/TAI-GSI/docs/guia-de-estudio.html). Incluye un primer ejercicio, instrucciones de uso y una rutina de 45 minutos. También está disponible [en formato Markdown](docs/GUIA_DE_ESTUDIO.md).

## Estado actual

La aplicación funciona y los 57 temas tienen apuntes completos, resumen y procedencia. El banco contiene:

| Origen | Activas | Pendientes |
| --- | ---: | ---: |
| Material curado del corpus | 959 | 0 |
| Preguntas generadas | 0 | 803 |
| Preguntas oficiales identificadas | 0 | 0 |

Las 803 preguntas generadas continúan pendientes de validación y quedan excluidas de entrenamientos y exámenes. Las 959 activas están repartidas en 17 temas; 40 temas todavía no tienen test activo y B1-T03 tiene 17 preguntas.

Consulta la [auditoría completa](docs/FINAL_GSI_AUDIT.md), la [cobertura por tema](data/gsi-coverage-report.json) y el [resultado de la suite](logs/gsi-suite.json).

## Funcionalidades

- Temario navegable con los 57 temas completos.
- Búsqueda y filtros por bloque, cobertura y estado editorial.
- Entrenamiento por tema, bloque, preguntas no vistas y últimos errores.
- Corrección inmediata con explicación y procedencia.
- Simulacro GSI de 100 preguntas y 90 minutos, con penalización de un tercio por error.
- Test configurable con selección de bloques, cantidad y duración.
- Práctica escrita: elección entre dos supuestos, cinco respuestas y 180 minutos.
- Refuerzo programado de errores y dudas.
- Estadísticas de actividad, evolución y temas débiles.
- Guardado local, exportación e importación del progreso.
- Avisos de vigencia separados de los apuntes originales.
- Diseño adaptable y navegación mediante teclado.

## Cómo está construido

La aplicación utiliza HTML5, CSS3 y JavaScript moderno sin frameworks. Los catálogos y bancos se almacenan en JSON y los temas se sirven como HTML estático. No necesita backend, base de datos, cuenta de usuario ni proceso de compilación.

Los datos, el contenido y la lógica se mantienen separados. Las preguntas oficiales, curadas y generadas se guardan en bancos diferentes. Una pregunta generada no entra en entrenamientos o exámenes hasta que esté activa y validada.

## Progreso y varios dispositivos

El progreso se guarda en el navegador y dispositivo donde estudias. No se sincroniza automáticamente.

Para trasladarlo:

1. Pulsa **Exportar progreso** en el primer dispositivo.
2. Guarda el archivo JSON descargado.
3. Abre la aplicación en el otro dispositivo.
4. Pulsa **Importar copia GSI** y selecciona el archivo.

Si ya estudiabas desde `http://127.0.0.1:8765/`, exporta allí el progreso e impórtalo una vez en la versión publicada. El navegador considera ambas direcciones sitios diferentes.

## Ejecutar una copia local

Clona el repositorio y entra en su carpeta:

```bash
git clone --branch gsi-only-final https://github.com/AngeldelaCalleFernandez/TAI-GSI.git
cd TAI-GSI
```

Inicia un servidor HTTP:

```bash
python -m http.server 8765 --bind 127.0.0.1
```

Abre `http://127.0.0.1:8765/`. No abras directamente `index.html` mediante `file://`, porque la aplicación utiliza `fetch()` para cargar sus datos.

## Publicación

GitHub Pages sirve los archivos estáticos directamente desde la raíz `/` de la rama `gsi-only-final`. El archivo `.nojekyll` evita el procesamiento con Jekyll. Cada actualización de esa rama vuelve a desplegar el sitio.

La publicación no modifica el estado editorial del banco: la aplicación sigue seleccionando únicamente preguntas activas y validadas.

## Estructura del repositorio

```text
TAI-GSI/
├── index.html                 # Entrada de la aplicación
├── review.html                # Consulta del lote editorial pendiente
├── assets/
│   ├── css/                   # Estilos
│   └── js/                    # Módulos de la aplicación
├── content/
│   ├── topics/                # 57 temas en Markdown
│   ├── generated/             # 57 temas transformados a HTML
│   └── question-drafts/       # Autoría del banco generado
├── data/                      # Catálogos, fuentes, preguntas y práctica
├── documents/markdown/gsi/    # Conversiones documentales utilizadas
├── schemas/                   # Contratos JSON
├── scripts/                   # Importadores, compiladores y validadores
├── tests/                     # Pruebas JavaScript y de navegador
├── docs/                      # Guías, vigencia y auditoría
├── logs/                      # Evidencias de validación
└── archive/                   # Historia excluida del producto activo
```

La identidad activa es `OPP-GSI / SYL-GSI-2025`. El contenido y progreso históricos de TAI permanecen excluidos de la aplicación GSI.

## Validación

Para ejecutar las pruebas necesitas Python 3.10 o posterior, Node.js 20 o posterior, `rg` (ripgrep) y Google Chrome instalados. Son herramientas de desarrollo; no hacen falta para estudiar desde la web.

Instala las dependencias de validación y de navegador:

```bash
python -m pip install -r scripts/requirements-validation.txt
npm install --no-save --package-lock=false playwright
```

Ejecuta la suite desde la raíz del repositorio:

```bash
python scripts/run_gsi_suite.py
```

Si Playwright está instalado fuera del repositorio, puedes indicar su archivo `index.mjs` mediante la variable de entorno `PLAYWRIGHT_MODULE`. El runner también detecta el módulo del entorno local preparado. Las pruebas usan el canal `chrome`: instalar solo Chromium no sustituye a Google Chrome.

| Código | Significado |
| ---: | --- |
| 0 | Pruebas técnicas y cobertura editorial superadas |
| 1 | Fallo técnico o dependencia ausente |
| 2 | Sin fallos técnicos, pero cierre editorial pendiente |

El estado actual esperado es **2** por las 803 preguntas pendientes. Un JSON válido no concede validación editorial.

La última ejecución aprobó:

- 18 archivos contra 16 esquemas JSON;
- 57 temas y sus referencias;
- 1762 preguntas con estructura válida;
- 76 pruebas unitarias;
- 288 pruebas de regresión;
- 72 comprobaciones funcionales en navegador;
- funcionamiento en escritorio, móvil y una subruta de GitHub Pages.

También se comprueban puntuación, temporizadores, persistencia, exportación e importación, rutas relativas, procedencia, exclusión de preguntas pendientes y ausencia de referencias TAI en el producto activo.

## Fuentes, trazabilidad y vigencia

Los apuntes completos y los resúmenes proceden del corpus Drive V2.1 autorizado por el propietario. Cada tema conserva documento, enlace, localizador, versión y fecha de revisión. El BOE se utiliza para comprobar el alcance oficial del programa; el contenido didáctico procede del corpus autorizado.

Las **actualizaciones catalogadas** son avisos revisados que se muestran al principio del tema afectado cuando una norma o tecnología cambia después de redactarse los apuntes. La aplicación muestra los avisos registrados, pero no busca ni incorpora cambios de Internet automáticamente. El texto original permanece intacto.

Consulta el [control de vigencia](docs/GSI_VIGENCIA.md) y el [procedimiento de revisión editorial](docs/GSI_REVISION_EDITORIAL.md).

## Principios del proyecto

- Mantener una solución estática, sencilla y comprensible.
- Conservar la procedencia de cada contenido.
- No presentar material editorial como oficial.
- No activar automáticamente preguntas generadas.
- No mezclar progreso o contenido de otras oposiciones.
- Preservar documentos originales e historial de migración.
- Validar los datos y el funcionamiento antes de publicar cambios.

Las reglas completas de mantenimiento están en [AGENTS.md](AGENTS.md).

## Aviso

Este es un proyecto personal de apoyo al estudio. No es una publicación oficial de la Administración General del Estado y no sustituye al BOE, las convocatorias, la normativa vigente ni las fuentes oficiales enlazadas.

Antes de preparar una convocatoria concreta debe comprobarse que el programa y las normas aplicables siguen vigentes.

## Licencia

El repositorio no declara actualmente una licencia específica. Su publicación en GitHub no concede por sí sola permisos adicionales de reutilización, modificación o redistribución.
