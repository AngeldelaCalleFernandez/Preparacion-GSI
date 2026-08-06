# Catálogo multioposición aditivo — M1

## 1. Qué añade M1

M1 añade dos catálogos machine-readable, sus esquemas estrictos y un validador
de solo lectura. `data/oppositions.json` registra las identidades estables de
TAI y GSI. `data/syllabi-catalog.json` registra por separado los programas que
pertenecen a cada oposición. El cambio es aditivo: no conecta todavía estos
catálogos con la aplicación.

## 2. Qué sigue siendo legacy

`data/syllabus.json` continúa siendo la única fuente operativa del temario. Sus
IDs `B1` a `B4` y `B1-T01` a `B4-T10`, sus rutas, los HTML generados y el runtime
actual no cambian. El catálogo nuevo describe esa realidad, pero no la sustituye.

## 3. Oposición y syllabus

Una oposición es la identidad estable del cuerpo o proceso formativo, por
ejemplo `OPP-TAI`. Un syllabus es una versión concreta y fechable de su programa,
por ejemplo `SYL-TAI-2025`. Esta separación permite que una oposición tenga
varios programas a lo largo del tiempo sin incorporar el año a su identidad.

## 4. TAI y GSI tienen programas distintos

TAI y GSI son cuerpos diferentes y sus programas oficiales no son
intercambiables. Que aparezcan en una misma convocatoria convertida no los
convierte en un único syllabus. Cada oposición conserva sus propios metadatos,
estructura, versionado e incorporación futura.

## 5. Política de IDs y aliases

- Oposición: `OPP-TAI` y `OPP-GSI`, estables y sin año.
- Syllabus: `SYL-TAI-2025` y `SYL-GSI-2025`, ligados a la convocatoria.
- Bloque TAI: `B1` sigue operativo; `TAI-B1` es una reserva informativa.
- Tema TAI: `B1-T01` sigue operativo; `TAI-B1-T01` es una reserva informativa.
- Alias histórico: cada ID legacy se registra para impedir su pérdida durante
  una migración, pero no se instala ningún resolvedor de aliases en runtime.

Los IDs canónicos deben ser únicos dentro del syllabus. Su presencia en el
catálogo no autoriza renombrados de archivos, claves de persistencia ni rutas.

## 6. Conservación de B1-T01

`B1-T01` está usado por el temario, el contenido Markdown, el HTML, el índice,
las pruebas y la línea base M0. Cambiarlo en M1 rompería relaciones existentes y
contradiría la protección previa. Por ello queda registrado como `legacy_id` y
alias histórico.

## 7. TAI-B1-T01 todavía no es operativo

`TAI-B1-T01` solo expresa la identidad canónica que podría adoptarse en una fase
autorizada posterior. La aplicación no lo lee, no existe en los archivos
operativos actuales y no reemplaza a `B1-T01`. M2 deberá definir explícitamente
cómo resolver ambas identidades sin romper compatibilidad.

## 8. Estado exacto de GSI en M1

GSI se registra como oposición `planned` y no disponible en runtime. Su programa
oficial está localizado en el documento convertido de la convocatoria, Anexo IX.
La ficha `SYL-GSI-2025` solo declara 4 bloques, 55 temas y distribución
10/16/15/14. `topics_extracted` y `runtime_available` son `false`; no se han
copiado títulos, creado bloques, asignado IDs de temas ni añadido contenido GSI.

## 9. Incorporación de los 55 temas en M4

M4 deberá extraer los títulos desde la fuente oficial localizada, conservar su
orden y distribución, documentar localizadores, asignar IDs bajo una política
autorizada y validar la estructura antes de hacerla consumible. M1 no anticipa
esa extracción ni inventa datos ausentes.

## 10. Cambio necesario en M2

Para usar el catálogo en runtime, M2 deberá adaptar la carga de datos para
seleccionar oposición y syllabus, resolver compatibilidad con IDs legacy y
mantener `data/syllabus.json` durante la transición. También deberá definir la
compatibilidad de persistencia. Ninguno de esos cambios forma parte de M1.

## 11. Relación con M0

M1 se apoya en la etiqueta anotada `m0-linea-base-tai` y conserva los hashes y
relaciones protegidos. En particular, B1-T01 y B1-T02 mantienen las rutas y las
reservas canónicas documentadas en M0. El validador M1 ejecuta el validador M0
de forma segura y no exige que HEAD permanezca en el commit histórico.

## 12. Contenido, interfaz y persistencia sin cambios

M1 no modifica temario, fuentes, índice, Markdown, HTML generado, JavaScript,
CSS, interfaz, preguntas ni `localStorage`. No regenera contenido y no hace que
GSI aparezca en la aplicación. Los nuevos catálogos son contratos documentales
y machine-readable previos a la adaptación del runtime.
