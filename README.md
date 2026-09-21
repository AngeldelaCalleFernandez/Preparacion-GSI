# Preparación GSI

Aplicación web estática y repositorio de contenidos para preparar el **Cuerpo de Gestión de Sistemas e Informática de la Administración del Estado, ingreso libre, subgrupo A2**.

El proyecto está dedicado exclusivamente a GSI A2. Incluye los **57 temas** del Anexo IX de BOE-A-2025-26262, distribuidos en **10 / 16 / 15 / 16**.

## Acceso directo

**[Abrir Preparación GSI](https://angeldelacallefernandez.github.io/Preparacion-GSI/)**

No hay que instalar nada para estudiar desde la versión publicada. Funciona en ordenador, tableta y móvil con un navegador moderno.

Para empezar, consulta la [guía paso a paso](https://angeldelacallefernandez.github.io/Preparacion-GSI/docs/guia-de-estudio.html). Incluye un primer ejercicio, instrucciones de uso y una rutina de 45 minutos. También está disponible [en formato Markdown](docs/GUIA_DE_ESTUDIO.md).

## Estado actual

La aplicación funciona y los 57 temas tienen apuntes completos, resumen y procedencia. El banco contiene:

| Origen | Activas | Pendientes |
| --- | ---: | ---: |
| Material curado del corpus | 959 | 0 |
| Preguntas generadas revisadas | 803 | 0 |
| Preguntas oficiales INAP | 202 | 0 |

La aplicación contiene **1.964 preguntas activas** y los **57 temas tienen al menos 20 preguntas revisadas**. Las 803 generadas se activaron tras la confirmación del propietario de que los test estaban revisados; conservan su origen IA y la aceptación asociada a sus hashes. La confirmación no se presenta como una revisión humana realizada por el agente.

En **Examen → Exámenes oficiales INAP**, abre **2022** o **2024**, pulsa **Preparar este examen** y después **Iniciar examen**. Cada convocatoria ofrece 100 preguntas evaluables en 90 minutos, con plantilla definitiva y sustitución de anuladas por reservas. Hay 12 enlaces oficiales a cuestionarios, plantillas, supuestos escritos y criterios de 2022, 2024 y 2025. La plantilla consultada de **2025 es provisional**: se ofrece para lectura, sin activar su corrección automática. [Detalle de la importación](docs/GSI_EXAMENES_OFICIALES.md).

La publicación de esta revisión, incluidas las auditorías, fue autorizada expresamente por el propietario el 17 de septiembre de 2026.

Consulta la [auditoría completa](docs/FINAL_GSI_AUDIT.md), la [cobertura por tema](data/gsi-coverage-report.json) y el [resultado de la suite](logs/gsi-suite.json).

## Funcionalidades

- Temario navegable con los 57 temas completos.
- Búsqueda y filtros por bloque, cobertura y estado editorial.
- Entrenamiento por uno o varios bloques y temas, preguntas no vistas y últimos errores.
- Corrección inmediata con explicación y procedencia.
- Resumen final con aciertos, fallos, porcentaje, temas que reforzar y repetición de las falladas.
- Simulacro GSI de 100 preguntas y 90 minutos, con penalización de un tercio por error.
- Test configurable con selección de bloques, cantidad y duración.
- Exámenes oficiales de 2022 y 2024, y biblioteca de PDF del INAP de tres convocatorias.
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
git clone https://github.com/AngeldelaCalleFernandez/Preparacion-GSI.git
cd Preparacion-GSI
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
Preparacion-GSI/
├── index.html                 # Entrada de la aplicación
├── review.html                # Consulta de preguntas y revisión editorial
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

El estado actual esperado es **0**: las comprobaciones técnicas y el cierre editorial están superados. Las 803 preguntas generadas permanecen identificadas como de origen IA y su revisión corresponde a la versión y hashes registrados.

La última ejecución aprobó:

- 19 archivos contra 17 esquemas JSON;
- 57 temas y sus referencias;
- 1964 preguntas con estructura válida;
- 83 pruebas unitarias;
- 288 pruebas de regresión;
- 75 comprobaciones funcionales en navegador;
- funcionamiento en escritorio, móvil y una subruta de GitHub Pages.

También se comprueban puntuación, temporizadores, persistencia, exportación e importación, rutas relativas, procedencia, exclusión de preguntas pendientes y ausencia de referencias TAI en el producto activo.

## Fuentes, trazabilidad y vigencia

Los apuntes completos y los resúmenes proceden del corpus Drive V2.1 **aprobado internamente para publicación por el propietario del proyecto**. Esta aprobación solo identifica el conjunto de trabajo y no acredita permiso o licencia de titulares externos. Cada tema conserva documento, enlace, localizador, versión y fecha de revisión. El BOE y la documentación oficial se utilizan como fuentes primarias; PreparaTIC/A1 figura, cuando corresponde, como fuente secundaria consultada.

Consulta [Fuentes y materiales de terceros](THIRD_PARTY_NOTICES.md) para conocer la atribución a PreparaTIC, la separación de fuentes oficiales y el alcance de los derechos. El proyecto es independiente y no está afiliado, patrocinado ni respaldado por PreparaTIC.

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

**Creado por [AngeldelaCalleFernandez](https://github.com/AngeldelaCalleFernandez).**

Preparación GSI se ofrece bajo una **licencia propia de uso gratuito, no comercial y con atribución obligatoria**. Puedes usar, copiar, modificar y compartir los elementos cubiertos gratuitamente, manteniendo el crédito al creador, el enlace al proyecto y la licencia. Las adaptaciones deben identificar sus cambios y conservar estas condiciones. No se permite la venta, el acceso de pago ni la explotación comercial sin permiso expreso.

Consulta el [texto completo](LICENSE), la [página de licencia y autoría](https://angeldelacallefernandez.github.io/Preparacion-GSI/licencia.html) y los [avisos de terceros](THIRD_PARTY_NOTICES.md). Los documentos oficiales y materiales de terceros mantienen sus propios derechos y condiciones; esta licencia solo cubre las aportaciones sobre las que el creador puede conceder permisos.

La restricción comercial fue elegida expresamente por el propietario. Es una licencia específica, no MIT. Creative Commons desaconseja aplicar sus licencias al software como tal ([FAQ oficial](https://creativecommons.org/faq/#can-i-apply-a-creative-commons-license-to-software)); por eso no se etiqueta el código de la aplicación con una licencia CC.
