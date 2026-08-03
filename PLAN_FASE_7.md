# Plan de la Fase 7A — Capa editorial del temario

## Alcance aprobado

La Fase 7A crea una capa editorial estática y trazable para el temario. Su
alcance comprende el contrato Markdown, el constructor determinista, el índice
de contenido, los fragmentos HTML seguros, la vista Temario, el piloto B1-T01,
las 32 plantillas pendientes, validadores, runner y pruebas manuales.

La Fase 7B no forma parte de esta entrega. Su objetivo futuro será ampliar la
documentación técnica con un piloto de los bloques B2, B3 y B4 cuando haya
fuentes primarias locales verificadas.

## Fuentes y cobertura inicial

La evidencia local permite desarrollar B1-T01 con la convocatoria y el código
normativo BOE catalogados. Se mantendrá `partial` y `needs-review` hasta una
revisión humana. Los otros 32 temas tendrán `pending`, `not-reviewed`, una
carencia de fuente concreta y ningún texto doctrinal inventado.

Los cuestionarios, plantillas de respuestas, índices y enlaces de descubrimiento
no se usarán como fuentes doctrinales. Los tres documentos pendientes de OCR
tampoco se usarán en esta fase.

## Formato editorial

Cada archivo de `content/topics/` comienza con front matter JSON delimitado por
líneas `---`, seguido de un único H1 idéntico al título oficial. El H1 se usa
solo para validación: el fragmento HTML no contiene H1 y la vista de detalle
genera el único H1 visible desde `data/syllabus.json`.

Las secciones editoriales comienzan en H2 y pueden incluir H3. Deben declarar
un identificador estable con `{#section-id}`. Se permiten las directivas
`derivado`, `resumen`, `explicacion`, `ejemplo` y `pendiente`. Las tres primeras
requieren una cita; los ejemplos se etiquetan como didácticos. Una carencia debe
iniciar con `Contenido pendiente de una fuente verificable.`.

La única sintaxis de cita es:

```text
[[fuente:SOURCE-ID|localizador=localizador humano]]
[[fuente:SOURCE-ID|localizador=localizador humano|fragmento=https://...#verificado]]
```

El constructor nunca crea un fragmento externo: solo conserva uno escrito y
verificado manualmente. Las URL generales se resuelven desde `sources.json`.

## Entregables

- `content/topics/`: 33 Markdown, uno por identificador oficial.
- `content/generated/`: 33 fragmentos HTML derivados.
- `data/topic-content.json` y `schemas/topic-content.schema.json`.
- Constructor, servicio de contenido, validador y runner de Fase 7.
- Informe de cobertura y pruebas manuales.

## Protección de archivos previos

Durante 7A no se modifican `data/syllabus.json`, `data/sources.json`, los tres
bancos reales, `data/updates.json`, ningún `data/demo/*.json` ni los cuatro
esquemas anteriores. El validador calcula SHA-256 de esos archivos en la etiqueta
`fase-6-completada` y exige que coincidan con la copia de trabajo. Solo se
permiten el nuevo índice y el nuevo esquema.

## Puerta formal para incorporar fuentes (Fase 7B)

1. Incorporar una copia local del documento primario.
2. Registrar URL oficial, fecha de consulta y tipo de fuente.
3. Calcular su checksum.
4. Asignar un `sourceId` único y estable.
5. Añadirlo a `data/sources.json` en un cambio y commit independientes,
   expresamente justificados.
6. Verificar que cada localizador citado existe en la copia local.
7. Verificar manualmente cualquier `officialFragmentUrl`.
8. Solo entonces citarlo desde `content/topics/`.

## Rutas y seguridad

Se conservan las rutas existentes y se añaden `#temario/TOPIC-ID` y
`#temario/TOPIC-ID/SECTION-ID`. El servicio acepta únicamente rutas presentes
en el índice bajo `content/generated/`, analiza el HTML con `DOMParser` y
rechaza elementos, atributos y URL peligrosos antes de importar nodos mediante
`DocumentFragment`. No usa `eval` ni `localStorage`.

## Validación y cierre

El constructor escribe artefactos. El validador reconstruye el resultado en
memoria y compara bytes sin modificar el repositorio. Ejecutará los validadores
de las fases 2 a 6, verificará el contenido y protegerá los archivos previos.

La Fase 7A termina cuando existen los 33 Markdown y HTML, B1-T01 es trazable,
los otros temas son honestamente pendientes, las rutas funcionan, el constructor
es determinista, los validadores y el runner pasan y las pruebas manuales quedan
documentadas sin iniciar las fases 7B u 8.
