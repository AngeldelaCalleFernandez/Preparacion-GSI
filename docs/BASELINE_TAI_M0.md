# Línea base protegida TAI — Fase M0

## Propósito y alcance

M0 fija una línea base documental y verificable de TAI antes de cualquier
migración multioposición. La captura procede de la rama `main`, del commit
`56f6d4fc7c330a33d9a6c0a9bf4860b634cb11d4` y de la etiqueta anotada
`fase-7b2-completada`. El manifiesto de la captura es
`data/protected-artifacts.json` y su contrato es
`schemas/protected-artifacts.schema.json`.

La protección cubre dos artefactos lógicos ya existentes, `TAI_B1_T01` y
`TAI_B1_T02`, junto con sus relaciones reales con el temario, el Markdown, el
HTML, el índice de contenidos, las fuentes, los documentos fuente y las pruebas
registradas. Sus hashes SHA-256 permiten detectar cambios de contenido,
renombrados encubiertos o regeneraciones no autorizadas.

## Qué significa la protección

Un artefacto protegido no puede modificarse, renombrarse, sustituirse ni
regenerarse sin autorización explícita y sin actualizar de forma trazable el
manifiesto. Deben preservarse los identificadores históricos y las relaciones
registradas. El validador `scripts/validate_m0_baseline.py` comprueba el esquema,
las rutas, los hashes, los catálogos, las fuentes, las pruebas y la identidad de
la etiqueta Git de origen; no escribe ni regenera archivos.

La protección no significa que el contenido sea doctrinalmente completo, que
haya sido revisado editorialmente, que el HTML deba convertirse en fuente
canónica ni que los estados actuales sean permanentes. Tampoco convierte las
reservas informativas de identificadores futuros en aliases de ejecución, rutas
operativas o campos del modelo de datos.

## Capas de estado que no deben confundirse

- **Técnica:** la Fase 7B.2 y sus validadores pasan en el commit base; describe
  integridad y funcionamiento del repositorio.
- **Editorial observada:** reproduce literalmente `status`, `reviewStatus` y la
  presencia o ausencia de `contentVersion` en los archivos actuales.
- **Gobierno externo:** recoge decisiones comunicadas por la dirección del
  proyecto, aunque no estén materializadas como estado editorial o etiqueta
  Git.
- **Doctrinal:** expresa la suficiencia y revisión humana del contenido. M0 no
  la completa ni la presume a partir de la estabilidad técnica o de una decisión
  de gobierno.

## Reconciliación de TAI_B1_T01

La dirección del proyecto declara `TAI_B1_T01` terminado y aprobado como
versión `1.0.0`. Esa versión se registra como declaración de gobierno externa,
no como evidencia obtenida del repositorio: en la captura no existe una etiqueta
Git `1.0.0`, el front matter no contiene `contentVersion` y tanto el Markdown
como `data/topic-content.json` mantienen `partial` y `needs-review`.

M0 conserva simultáneamente ambas capas. No modifica el front matter, no marca
el tema `complete` o `reviewed` y prohíbe que una migración futura use la
declaración externa para promover esos estados automáticamente. Quedan
protegidos su vínculo con `B1-T01` en el temario, el Markdown, el HTML, la
entrada del índice, las fuentes del programa y del código normativo, sus
documentos locales y las pruebas de Fase 7 y 7B.2.

## Reconciliación de TAI_B1_T02

La dirección del proyecto declara `TAI_B1_T02` iniciado, no aprobado. El
repositorio confirma que existe una cadena previa que no debe reiniciarse ni
reemplazarse: entrada `B1-T02` en el temario, Markdown, HTML, entrada del índice,
relación con el programa oficial y una relación de prueba existente. El estado
editorial observado sigue siendo `pending` y `not-reviewed`, sin versión
aprobada.

Una migración posterior debe conservar esa continuidad. El carácter pendiente
no autoriza a tratar el tema como inexistente, a generar un sustituto desde cero
ni a perder sus identificadores y relaciones históricas.

## Autorización para cambios futuros

Cualquier cambio de contenido, estado, identificador, ruta, hash, relación,
política o versión requiere autorización explícita que identifique los
artefactos afectados y el alcance. Una autorización para migrar estructura no
autoriza por sí sola cambios doctrinales o editoriales; una autorización
editorial tampoco autoriza renombrados, regeneraciones o cambios del modelo de
datos.

Los valores `TAI-B1-T01` y `TAI-B1-T02` son únicamente reservas documentales de
posibles IDs canónicos. `TAI_B1_T01`, `TAI_B1_T02`, `B1-T01` y `B1-T02` se
registran como identificadores históricos que deben preservarse, pero M0 no
crea aliases operativos.

## Procedimiento para actualizar el manifiesto

1. Obtener autorización explícita y acotada para el artefacto y el tipo de
   cambio.
2. Conservar la línea base y verificar antes del cambio el manifiesto vigente.
3. Aplicar únicamente el cambio autorizado y ejecutar los validadores de solo
   lectura pertinentes, sin regenerar contenido salvo autorización expresa.
4. Recalcular SHA-256 de todas las rutas afectadas y revisar las relaciones con
   temario, índice, fuentes, documentos y pruebas.
5. Actualizar el manifiesto y su nota de reconciliación sin ocultar la
   procedencia de decisiones de gobierno ni promover estados editoriales.
6. Ejecutar dos veces `python scripts/validate_m0_baseline.py`, registrar los
   resultados y versionar conjuntamente el cambio autorizado y la nueva línea
   base.

Si la ampliación exige cambiar el contrato del manifiesto, el esquema solo debe
modificarse bajo esa misma autorización explícita y manteniendo campos
obligatorios, estados controlados, rutas relativas, hashes SHA-256 y separación
entre gobierno y estado editorial.

## Exclusión de GSI y de la migración

M0 no contiene datos, temario, catálogos ni contenido de GSI. No introduce
`opposition_id`, `syllabus_id`, cambios de `localStorage`, aliases operativos ni
una arquitectura multioposición. El código `TAI` del manifiesto es metadato
documental de la captura. La creación de una rama de migración y cualquier fase
posterior quedan fuera de este cierre.
