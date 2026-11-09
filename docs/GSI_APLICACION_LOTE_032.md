# Aplicación del lote GSI-EDITORIAL-032

El 5 de noviembre de 2026 se aplicaron al banco manual las 20 propuestas aprobadas por el propietario. El SHA-256 canónico es `4fd57501ffc398617045ff4bbe62394cfa57af2f214ae566916d9f749c87bfb6`. El historial conserva el contenido exacto aceptado, las versiones anteriores, sus hashes y la decisión individual. [Propuesta](../content/question-reviews/lote-032.json) · [Recibo de aprobación](../content/question-reviews/approvals/GSI-EDITORIAL-032.json) · [Historial](../data/gsi-editorial-revisions.json).

La simulación comprobó el hash canónico, los 20 hashes de partida y los 20 hashes de contenido propuesto antes de escribir. La comparación posterior confirmó que solo cambiaron los 20 registros manuales previstos y que cada registro activo coincide con la propuesta aprobada. Se conservaron los IDs de preguntas, los IDs de sus cuatro alternativas y las claves correctas. Las 202 oficiales conservan los bytes de la auditoría. El banco IA, las demás propuestas y los expedientes previos se verificaron por hash.

## Verificación técnica por pregunta

Las 28 URLs y sus localizadores se contrastaron el 5 de noviembre. Cada fila indica la clave conservada y el fundamento de la solución. El [registro de validación](../logs/gsi-editorial-032-application-2026-11-05.json) recoge los localizadores originales y las precisiones de consulta.

| ID | Clave | Fundamento comprobado |
| --- | --- | --- |
| MAN-GSI-P18-010 | B | `alt` aporta un sustituto textual según la función de la imagen. Una imagen puramente decorativa puede llevar `alt` vacío. [HTML §4.8.4.4](https://html.spec.whatwg.org/multipage/images.html) · [Árbol WAI](https://www.w3.org/WAI/tutorials/images/decision-tree/) |
| MAN-GSI-P18-011 | B | Las funciones predominantes son estructura y semántica, presentación y programación, respectivamente. [HTML §1.8](https://html.spec.whatwg.org/multipage/introduction.html) · [CSS 2.1 §2](https://www.w3.org/TR/CSS2/intro.html) · [Mozilla](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript) |
| MAN-GSI-P18-012 | A | CSS describe la presentación de documentos. XPath navega por nodos y XSLT transforma árboles. [CSS 2.1 §2](https://www.w3.org/TR/CSS2/intro.html) · [XPath §3.3](https://www.w3.org/TR/xpath-31/) · [XSLT §1](https://www.w3.org/TR/1999/REC-xslt-19991116) |
| MAN-GSI-P18-013 | C | Un diseño flexible puede reorganizar columnas según el ancho del viewport mediante consultas de medios. [Media Queries §4](https://www.w3.org/TR/mediaqueries-4/) · [Mozilla, Responsive layout technologies](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) |
| MAN-GSI-P18-014 | D | Una etiqueta asociada identifica al control mediante `for` o anidamiento. Su texto contribuye al nombre accesible. [HTML, label](https://html.spec.whatwg.org/multipage/forms.html#the-label-element) · [WAI, Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/) |
| MAN-GSI-P18-015 | A | El elemento es una unidad con semántica y el atributo aporta propiedades o configuración a esa unidad. [HTML §3.2.1](https://html.spec.whatwg.org/multipage/dom.html) |
| MAN-GSI-P18-016 | A | El DOM modela el documento como un árbol de nodos accesible desde código. CSSOM expone las hojas de estilo. [DOM §§4.1–4.2](https://dom.spec.whatwg.org/#nodes) · [CSSOM](https://www.w3.org/TR/cssom-1/) |
| MAN-GSI-P18-017 | C | El Living Standard se mantiene de forma continua. WHATWG también ofrece instantáneas para referencias históricas. [HTML §1.6](https://html.spec.whatwg.org/multipage/introduction.html) · [WHATWG Working Mode](https://whatwg.org/working-mode) |
| MAN-GSI-P18-018 | A | HTML define el significado de los elementos. CSS permite cambiar su apariencia. [HTML §3.2.1](https://html.spec.whatwg.org/multipage/dom.html) · [CSS 2.1 §2](https://www.w3.org/TR/CSS2/intro.html) |
| MAN-GSI-P18-019 | C | `table` y `th` expresan las relaciones entre datos y encabezados. Las tablas complejas pueden requerir asociaciones explícitas. [HTML, tablas](https://html.spec.whatwg.org/multipage/tables.html) · [Tutorial WAI](https://www.w3.org/WAI/tutorials/tables/) |
| MAN-GSI-P18-020 | B | Los elementos HTML apropiados aportan encabezados, regiones y semántica de control. Añadir un rol requiere implementar el comportamiento que ese rol promete. [APG, Read Me First](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/) · [APG, Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) |
| MAN-GSI-P18-021 | D | XML define una sintaxis extensible y se diseñó como perfil restringido de SGML. JSON usa otra sintaxis. [XML 1.0 §1](https://www.w3.org/TR/REC-xml/) · [RFC 8259 §§1, 4 y 5](https://www.rfc-editor.org/rfc/rfc8259.html) |
| MAN-GSI-P18-023 | D | La conformidad con un esquema exige cumplir sus restricciones además de la buena formación XML. [XML 1.0 §§2.1 y 2.8](https://www.w3.org/TR/REC-xml/) · [XSD 1.1 §3.3.4.6](https://www.w3.org/TR/xmlschema11-1/) |
| MAN-GSI-P18-024 | C | Un documento completo bien formado tiene exactamente un elemento raíz. [XML 1.0 §2.1](https://www.w3.org/TR/REC-xml/) |
| MAN-GSI-P18-025 | B | El fragmento B tiene un elemento vacío `b` y los cierres de `a` y `raiz` respetan el anidamiento. El analizador XML rechazó A, C y D. [XML 1.0 §§2.1, 3 y 3.1](https://www.w3.org/TR/REC-xml/) |
| MAN-GSI-P18-026 | B | `Dato` y `dato` son nombres locales distintos en el mismo espacio de nombres. La comparación de nombres distingue mayúsculas y minúsculas. [XML 1.0 §1.2](https://www.w3.org/TR/REC-xml/#sec-terminology) · [Namespaces in XML §2.1](https://www.w3.org/TR/xml-names/#dt-expname) |
| MAN-GSI-P18-027 | A | La producción `AttValue` admite valores entre comillas simples o dobles emparejadas. [XML 1.0 §2.3](https://www.w3.org/TR/REC-xml/) |
| MAN-GSI-P18-028 | D | `&lt;` es una referencia con nombre en texto analizado. Dentro de una sección CDATA, la misma secuencia se conserva como texto literal. [XML 1.0 §§2.7 y 4.6](https://www.w3.org/TR/REC-xml/) |
| MAN-GSI-P18-029 | C | La DTD describe la gramática y las restricciones de un vocabulario mediante declaraciones de elementos, atributos y otros componentes. [XML 1.0 §§2.8 y 3](https://www.w3.org/TR/REC-xml/) |
| MAN-GSI-P18-030 | B | XSD emplea sintaxis XML y permite declarar elementos, tipos, ocurrencias y restricciones de valores. [XSD 1.1, Structures](https://www.w3.org/TR/xmlschema11-1/) · [XSD 1.1, Datatypes](https://www.w3.org/TR/xmlschema11-2/) |

## Pruebas y métricas

La primera ejecución falló en un único control de integridad. La normalización de texto eliminaba los delimitadores de los fragmentos de `MAN-GSI-P18-025` y confundía dos alternativas. El validador compara ahora los fragmentos de marcado como texto literal y mantiene la normalización previa para la prosa. El registro conserva el fallo inicial y la ejecución final.

| Comprobación | Resultado final |
| --- | --- |
| Suite mantenida | Código 0 y 19.251 controles de integridad |
| Datos | 111 JSON, 21 esquemas y 1.964 preguntas |
| Pruebas JavaScript | 101 unitarias, 289 de regresión y 82 comprobaciones HTTP en Chrome |
| Circuito editorial, analizador y jerarquía | 19, 8 y 5 pruebas aprobadas |
| Recorrido específico de 032 en Chrome a 390 px | 20 correcciones acertadas y 60 explicaciones individuales correctas. 80 intentos registrados, con persistencia tras recarga y los 20 IDs en Refuerzo |
| Rutas del producto | Entrenamiento, Simulacros, estadísticas, Refuerzo, exportación e importación bajo una subruta HTTP local |

En las 20 preguntas del lote, las correctas que eran las únicas más largas pasan de 9 a 4. La regla de escoger la primera alternativa de longitud máxima pasa de acertar el 45 % al 25 %. Las explicaciones correctas de menos de 15 palabras pasan de 20 a 0 y se incorporan 60 explicaciones para distractores. Son señales de construcción. La calibración de dificultad sigue pendiente para una etapa posterior.

## Archivos y reproducción

Se crearon el recibo y los dos informes de esta aplicación. Se actualizaron el banco manual, el historial versionado, el validador final, el README, el plan editorial y los derivados de calidad, progreso, exportación e integridad. El detalle de salidas y pruebas figura en el registro de validación. No hubo conversiones documentales ni quedan conversiones nuevas pendientes.

Desde la raíz del proyecto, con las dependencias y Chrome disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-032.json
.\.venv\Scripts\python.exe -X utf8 -B scripts/export_gsi_questions.py --check
.\.venv\Scripts\python.exe -X utf8 -B scripts/run_gsi_suite.py
```

El banco local suma 40 preguntas aprobadas y aplicadas. Quedan 1.722 propuestas pendientes en 87 lotes y cinco incidencias activas con corrección propuesta. La siguiente corrección prioritaria documentada es la del lote 054 sobre preservación de dependencias en BCNF, que requiere su propia decisión editorial. [Progreso actual](../logs/gsi-editorial-progress.json) · [Ficha del lote 054](GSI_REVISION_LOTE_054.md).
