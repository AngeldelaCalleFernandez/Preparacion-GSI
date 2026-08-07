# Cargador y rutas multioposición M2

## Alcance de M2

M2 incorpora una capa de catálogo al cargador del runtime. No migra preguntas,
contenido editorial ni persistencia: conserva TAI como el único contexto que la
aplicación puede operar.

## Catálogos consumidos

Al iniciar, `data-service.js` carga `data/oppositions.json` y
`data/syllabi-catalog.json`. `catalog-service.js` valida su forma mínima,
unicidad de oposiciones, códigos cortos y syllabi, y la coherencia de sus
referencias cruzadas. El servicio no escribe catálogo ni usa `localStorage`.

## Selección de contexto runtime

La selección automática filtra oposiciones y syllabi que estén disponibles en
runtime, no estén planificados, tengan política de ID legacy y declaren una
materialización legacy con temas extraídos. Debe quedar exactamente un
candidato; cero o más de uno producen un error controlado. También existe una
selección pura y explícita por `oppositionId` y `syllabusId` para fases futuras.

Con los catálogos de M1, el único resultado es `OPP-TAI` con
`SYL-TAI-2025`. TAI continúa siendo el contexto actual porque es el único que
cumple esas condiciones; no se elige por posición dentro de un array.

## Materialización legacy

`data/syllabus.json` sigue existiendo porque es la materialización operativa de
TAI. La ruta se obtiene de `legacy_source_path` del contexto elegido y se
comprueba contra `runtime_source` del catálogo. Antes de construir índices, M2
contrasta bloques, temas, distribución, orden, títulos, estados e IDs legacy
con el catálogo seleccionado.

Los módulos de entrenamiento, examen, refuerzo y estadísticas siguen recibiendo
los mismos objetos y los mismos IDs legacy. No hay copia de ese temario ni una
materialización nueva.

## Identidades y navegación

Cada bloque y tema del catálogo aporta `legacy_id`, `canonical_id` y
`historical_aliases`. Los índices resuelven cualquier referencia registrada de
forma determinista a su ID legacy. Una colisión entre entradas distintas se
rechaza explícitamente.

La referencia de entrada puede ser canónica; el ID operativo es el legacy. La
normalización sucede en `syllabus-view.js` antes de consultar índices del
temario, índice editorial o fragmentos de contenido. Por ello los enlaces de
la aplicación, las preguntas, el contenido generado y los registros locales
continúan usando IDs legacy.

Se preservan `#inicio`, `#temario`, las rutas de tema legacy, las rutas de
sección, `#entrenamiento`, `#examen`, `#refuerzo` y `#estadisticas`. Se acepta
además una forma cualificada genérica de tema y de sección bajo `#temario/`.
La ruta no se redirige: un hash cualificado válido conserva su forma de entrada
aunque se use su ID legacy internamente.

## GSI y límites de fase

El syllabus GSI permanece `planned`, con `runtime_available: false`, sin
bloques extraídos ni mapa de temas. Por tanto no puede seleccionarse, no aparece
en la interfaz y no se crean IDs ni contenido GSI.

M2 no ha tocado preguntas, bancos, fuentes, `topic-content.json`, Markdown ni
HTML editorial. Tampoco modifica módulos de almacenamiento o migración.

Los registros v1 se siguen interpretando como TAI por compatibilidad histórica.
Su copia/migración namespaced a v2 se realizará exclusivamente en M3.

M0 sigue siendo la línea base de datos y contenido TAI protegido; M1 aporta los
catálogos y reservas de identidad que M2 consume sin volverlos IDs operativos.
Cuando M4 incorpore un syllabus GSI materializado, deberá aportar estructura,
contenido y contratos propios antes de habilitar su contexto runtime.
