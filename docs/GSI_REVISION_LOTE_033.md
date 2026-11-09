# GSI-EDITORIAL-033 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `517d71cfd0787eb77602a1d4bca6f7f71e65caf2b4fee335254893600aec35ef`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P18-031

Decisión: pending_review · acción: revise.

Motivo: Mantener la ventaja de tipos y sintaxis XML y la clave A; comparar con DTD, XPath y XSLT mediante alternativas breves.

### Antes

¿Qué ventaja típica ofrece XSD frente a DTD?

- A. Un sistema de tipos y restricciones más expresivo y una sintaxis XML. **(correcta)**
- B. XSD no permite validar estructuras.
- C. DTD tiene tipos de datos más ricos que XSD.
- D. XSD solo sirve para HTML.

Explicación: XSD fue diseñado para expresar restricciones más ricas que DTD.

### Propuesta

¿Qué ventaja típica ofrece XSD frente a DTD?

- A. Más tipos de datos y facetas, expresados en una sintaxis XML. **(correcta)**
- B. Un esquema con sintaxis propia, ajena a los documentos XML.
- C. Un sistema de rutas que selecciona nodos de la instancia XML.
- D. Un conjunto de plantillas que genera documentos de salida.

Explicación: XSD combina una representación XML del esquema con un sistema de tipos de datos y facetas más rico que el de una DTD. Puede limitar valores y describir estructura, sin que eso convierta el documento en verdadero o correcto para toda regla de negocio. Las DTD sí tienen tipos y restricciones propios; la diferencia no consiste en que carezcan de cualquier validación. Seleccionar nodos o producir otro documento son funciones distintas.

- Error B: La sintaxis específica ajena al marcado XML caracteriza una DTD. No es la ventaja de XSD, cuyo esquema se representa con un vocabulario XML.
- Error C: Las rutas para seleccionar nodos corresponden a expresiones XPath. No sustituyen las declaraciones y restricciones de un esquema XSD.
- Error D: Las plantillas que construyen un resultado describen XSLT. La validación XSD contrasta restricciones; no es una transformación de salida.

- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; Particles, Model Groups y Identity-constraint Definitions · versión: W3C Recommendation, 05-04-2012; estructura y restricciones, sin equiparar validación XSD con verdad de negocio · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 2, Datatypes](https://www.w3.org/TR/xmlschema11-2/) · 3 Built-in Datatypes, integer; 4 Datatype Components, constraining facets · versión: W3C Recommendation, 05-04-2012; tipos y facetas, no soporte completo de XSD 1.1 por el motor de ejemplos · comprobado: 2026-10-28
- [W3C: XML 1.0](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology; 2.1 Well-Formed XML Documents; 2.3 Common Syntactic Constructs; 2.8 Prolog and Document Type Declaration; 3 Logical Structures · versión: Fifth Edition, W3C Recommendation, 26-11-2008; buena formación y validez DTD diferenciadas de evaluación XSD · comprobado: 2026-10-28
- [W3C: XPath 3.1](https://www.w3.org/TR/xpath-31/) · 1 Introduction; 3.3 Path Expressions, 3.3.2 Steps y 3.3.3 Predicates within Steps · versión: W3C Recommendation, 21-03-2017; finalidad y expresiones, no se atribuye al motor XPath 1.0 soporte íntegro de 3.1 · comprobado: 2026-10-28
- [W3C: XSLT 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction; 4 Expressions; 5 Template Rules; 7 Creating the Result Tree; 16 Output · versión: W3C Recommendation, 16-11-1999; versión explícita para conceptos compartidos y ejemplos de transformación. No es la última versión ni limita capacidades de versiones posteriores · comprobado: 2026-10-28

Partida: `5f14c4abdd8f31135cf5f8f442a43f8e4816cc8f3b635839e55a67c06657391c` · propuesta: `430f7635c3378221c22ddea7bb6c66bad008a5fed0488fb8743f8f25b475f5d0`

## MAN-GSI-P18-032

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas bien diferenciadas, clave B; precisar nombre expandido, identificación y ausencia de descarga obligatoria.

### Antes

¿Qué es un namespace XML?

- A. Un directorio del sistema de archivos donde deben almacenarse físicamente todos los documentos de un vocabulario XML.
- B. Un mecanismo para distinguir nombres de distintos vocabularios mediante identificadores URI. **(correcta)**
- C. Un esquema XSD que define por sí mismo tipos, cardinalidades y estructura válida para cualquier documento que use el prefijo.
- D. Una dirección que el procesador debe descargar para obtener las etiquetas permitidas antes de interpretar el documento.

Explicación: Namespaces evitan colisiones al combinar vocabularios XML.

### Propuesta

¿Qué es un namespace XML?

- A. Un directorio del sistema de archivos donde deben almacenarse físicamente todos los documentos de un vocabulario XML.
- B. Un mecanismo para distinguir nombres de distintos vocabularios mediante identificadores URI. **(correcta)**
- C. Un esquema XSD que define por sí mismo tipos, cardinalidades y estructura válida para cualquier documento que use el prefijo.
- D. Una dirección que el procesador debe descargar para obtener las etiquetas permitidas antes de interpretar el documento.

Explicación: Los namespaces cualifican nombres de elementos y atributos para distinguir vocabularios por un identificador URI. El nombre expandido combina ese identificador con el nombre local; el prefijo es una abreviatura vinculada dentro de un ámbito. La URI no tiene que entregar un XSD al acceder a ella y no define por sí sola las reglas del vocabulario. Separar nombres evita colisiones, pero su significado y contrato deben documentarse.

- Error A: Un espacio de nombres no es una carpeta ni exige almacenar juntos los documentos. Su identificación se basa en una URI, no en ubicación física de archivos.
- Error C: La declaración de namespace identifica nombres; no declara automáticamente tipos o cardinalidades. Esas restricciones pertenecen al esquema aplicable.
- Error D: La especificación no exige descargar la URI para interpretar nombres cualificados. Identificar un vocabulario y localizar un recurso de esquema son operaciones distintas.

- [W3C: Namespaces in XML 1.0](https://www.w3.org/TR/xml-names/) · 2.1 Basic Concepts, expanded names; 2.3 Comparing URI References; 3 Declaring Namespaces; 4 y 5 Qualified Names; 6.1 Scoping y 6.2 Defaulting · versión: Third Edition, W3C Recommendation, 08-12-2009; URI identifica, no obliga a recuperar un esquema; prefijo y nombre expandido diferenciados · comprobado: 2026-10-28
- [W3C: XML Schema Part 0, Primer](https://www.w3.org/TR/xmlschema-0/) · 2 Basic Concepts; 2.2.1 Occurrence Constraints; 3 Namespaces, Schemas and Qualification; 5.6 schemaLocation y 5.7 Conformance · versión: Second Edition, W3C Recommendation, 28-10-2004; texto introductorio no normativo de XSD 1.0, con conceptos comunes usados en los ejemplos · comprobado: 2026-10-28

Partida: `35f63be911d6dc8f235844d2dbf06c5d8927e6060dc7a3ec3c76967f5a64102b` · propuesta: `3d36df947123d09438cce7738da3eb016772f4d30879abf63e279dd0534bd44e`

## MAN-GSI-P18-033

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas, clave D; explicar alias, ámbito y pareja URI/nombre local sin confundir identidad y prefijo.

### Antes

¿Qué papel tiene el prefijo en un namespace XML?

- A. Es la propia URI del namespace y debe ser una dirección de red accesible que entregue su esquema al procesador XML.
- B. Forma parte permanente de la identidad del namespace, por lo que todos los documentos deben usar exactamente el mismo texto.
- C. Solo puede asociarse un prefijo a cada URI y dos prefijos distintos representan necesariamente namespaces diferentes.
- D. Es una abreviatura local asociada a una URI de namespace; el prefijo concreto no define por sí solo la identidad. **(correcta)**

Explicación: La identidad semántica se asocia al namespace URI, no al texto del prefijo.

### Propuesta

¿Qué papel tiene el prefijo en un namespace XML?

- A. Es la propia URI del namespace y debe ser una dirección de red accesible que entregue su esquema al procesador XML.
- B. Forma parte permanente de la identidad del namespace, por lo que todos los documentos deben usar exactamente el mismo texto.
- C. Solo puede asociarse un prefijo a cada URI y dos prefijos distintos representan necesariamente namespaces diferentes.
- D. Es una abreviatura local asociada a una URI de namespace; el prefijo concreto no define por sí solo la identidad. **(correcta)**

Explicación: El prefijo es una abreviatura local ligada a una URI dentro de su ámbito. Cambiarlo sin cambiar la URI ni el nombre local conserva el nombre expandido; también pueden declararse varios prefijos para la misma URI. En sentido inverso, el mismo texto de prefijo puede tener distintas vinculaciones en ámbitos diferentes. Esta regla no hace irrelevante el namespace ni permite comparar solo la apariencia del nombre escrito.

- Error A: La URI es el valor de la declaración de namespace, no el prefijo. Tampoco necesita ser una dirección accesible que devuelva un esquema.
- Error B: El texto del prefijo no fija permanentemente la identidad. Dos documentos pueden usar abreviaturas diferentes para la misma URI y el mismo nombre local.
- Error C: Dos prefijos pueden vincularse a la misma URI. La diferencia de abreviatura no demuestra que los nombres expandidos pertenezcan a espacios distintos.

- [W3C: Namespaces in XML 1.0](https://www.w3.org/TR/xml-names/) · 2.1 Basic Concepts, expanded names; 2.3 Comparing URI References; 3 Declaring Namespaces; 4 y 5 Qualified Names; 6.1 Scoping y 6.2 Defaulting · versión: Third Edition, W3C Recommendation, 08-12-2009; URI identifica, no obliga a recuperar un esquema; prefijo y nombre expandido diferenciados · comprobado: 2026-10-28

Partida: `fb49e673f59c94a56cfbfbbf9234dbcc9aadca6b7bcd215d4ecc0851650b2b8a` · propuesta: `352f96ac80012bb3635a75ba3d6288865d8343230a33b60718396667b13e2f42`

## MAN-GSI-P18-035

Decisión: pending_review · acción: revise.

Motivo: Conservar separación entre reglas e instancia y clave C; evitar la confusión de que ambos sean XML o de que esquema e instancia sean identidades absolutas.

### Antes

¿Qué diferencia hay entre esquema y documento de instancia?

- A. Son exactamente lo mismo.
- B. El esquema siempre contiene datos de producción.
- C. El esquema define reglas; el documento de instancia contiene datos que deben cumplirlas. **(correcta)**
- D. La instancia define el lenguaje XSD.

Explicación: XSD describe estructura y restricciones de documentos XML concretos.

### Propuesta

¿Qué diferencia hay entre esquema y documento de instancia?

- A. El esquema contiene datos; la instancia declara los tipos admitidos.
- B. El esquema selecciona nodos; la instancia aplica transformaciones.
- C. El esquema fija reglas; la instancia aporta datos sujetos a ellas. **(correcta)**
- D. El esquema presenta datos; la instancia declara reglas de estilo.

Explicación: En la relación de validación XSD, el esquema declara componentes y restricciones, mientras la instancia contiene el documento cuyos datos se evalúan. Estar bien formada no basta para que esa instancia cumpla el esquema. Aunque el propio esquema se escriba en XML, esa coincidencia de formato no intercambia sus funciones. Un documento puede además ser instancia de otro esquema en un contexto diferente; aquí se pregunta por su papel en esta validación.

- Error A: Invierte las funciones en la relación planteada: las reglas de tipos están en el esquema y los datos que se contrastan, en la instancia.
- Error B: Seleccionar nodos y aplicar transformaciones describe una combinación de XPath y XSLT. No caracteriza la relación esquema/instancia.
- Error D: La presentación y las reglas de estilo pertenecen a otra responsabilidad. XSD establece restricciones de conformidad, no la apariencia de los datos.

- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; Particles, Model Groups y Identity-constraint Definitions · versión: W3C Recommendation, 05-04-2012; estructura y restricciones, sin equiparar validación XSD con verdad de negocio · comprobado: 2026-10-28
- [W3C: XML Schema Part 0, Primer](https://www.w3.org/TR/xmlschema-0/) · 2 Basic Concepts; 2.2.1 Occurrence Constraints; 3 Namespaces, Schemas and Qualification; 5.6 schemaLocation y 5.7 Conformance · versión: Second Edition, W3C Recommendation, 28-10-2004; texto introductorio no normativo de XSD 1.0, con conceptos comunes usados en los ejemplos · comprobado: 2026-10-28
- [W3C: XPath 3.1](https://www.w3.org/TR/xpath-31/) · 1 Introduction; 3.3 Path Expressions, 3.3.2 Steps y 3.3.3 Predicates within Steps · versión: W3C Recommendation, 21-03-2017; finalidad y expresiones, no se atribuye al motor XPath 1.0 soporte íntegro de 3.1 · comprobado: 2026-10-28
- [W3C: XSLT 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction; 4 Expressions; 5 Template Rules; 7 Creating the Result Tree; 16 Output · versión: W3C Recommendation, 16-11-1999; versión explícita para conceptos compartidos y ejemplos de transformación. No es la última versión ni limita capacidades de versiones posteriores · comprobado: 2026-10-28
- [W3C CSS 2.1: Introduction](https://www.w3.org/TR/CSS2/intro.html) · 2.1 y 2.2 tutoriales HTML/XML; 2.3 Processing model: aplicación de reglas de presentación · versión: CSS 2.1; solo finalidad de hojas de estilo, no catálogo de capacidades CSS actuales · comprobado: 2026-10-28

Partida: `489ced3330d8782311ae40bfde68a89ecebd76d62149dae36b9316f4578c82ad` · propuesta: `c83ee6bf75bcb1d118cd9ca1aa2d93b13f7cd3ccde9ce53ac72ff811a4b773e0`

## MAN-GSI-P18-036

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y distractores de tipos, composición e identidad, clave A; precisar ocurrencias, valores predeterminados y ámbito.

### Antes

¿Qué es una cardinalidad en XSD?

- A. Una restricción sobre cuántas veces puede aparecer un elemento, por ejemplo mínimo/máximo. **(correcta)**
- B. Una restricción que define el tipo de dato, patrón, rango o conjunto de valores admitidos para un elemento o atributo.
- C. Un compositor que establece si varios elementos deben aparecer en secuencia, como alternativas o en cualquier orden.
- D. Una restricción de identidad que exige valores únicos o referencias válidas entre elementos del documento.

Explicación: minOccurs y maxOccurs son ejemplos de cardinalidad.

### Propuesta

¿Qué es una cardinalidad en XSD?

- A. Una restricción sobre cuántas veces puede aparecer un elemento, por ejemplo mínimo/máximo. **(correcta)**
- B. Una restricción que define el tipo de dato, patrón, rango o conjunto de valores admitidos para un elemento o atributo.
- C. Un compositor que establece si varios elementos deben aparecer en secuencia, como alternativas o en cualquier orden.
- D. Una restricción de identidad que exige valores únicos o referencias válidas entre elementos del documento.

Explicación: La cardinalidad restringe el número de ocurrencias admitidas por una partícula del modelo de contenido. Para un elemento local, minOccurs y maxOccurs expresan límites mínimo y máximo, con valor predeterminado uno y posibilidad de máximo unbounded. No son el rango numérico del contenido ni una condición de unicidad. En atributos se usa otro mecanismo, como use; no se trasladan sin más esas dos propiedades a cualquier declaración global o atributo.

- Error B: Los tipos y sus facetas limitan el contenido o los valores. La cardinalidad cuenta ocurrencias, no fija por sí misma si un valor es entero, pertenece a un rango o cumple un patrón.
- Error C: Un compositor organiza el modelo de contenido, por ejemplo mediante sequence o choice. Su forma de combinar elementos no equivale a los límites de ocurrencia.
- Error D: Las restricciones de identidad, como unique, key y keyref, relacionan valores. No indican cuántas veces puede aparecer el elemento.

- [W3C: XML Schema Part 0, Primer](https://www.w3.org/TR/xmlschema-0/) · 2 Basic Concepts; 2.2.1 Occurrence Constraints; 3 Namespaces, Schemas and Qualification; 5.6 schemaLocation y 5.7 Conformance · versión: Second Edition, W3C Recommendation, 28-10-2004; texto introductorio no normativo de XSD 1.0, con conceptos comunes usados en los ejemplos · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; Particles, Model Groups y Identity-constraint Definitions · versión: W3C Recommendation, 05-04-2012; estructura y restricciones, sin equiparar validación XSD con verdad de negocio · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 2, Datatypes](https://www.w3.org/TR/xmlschema11-2/) · 3 Built-in Datatypes, integer; 4 Datatype Components, constraining facets · versión: W3C Recommendation, 05-04-2012; tipos y facetas, no soporte completo de XSD 1.1 por el motor de ejemplos · comprobado: 2026-10-28

Partida: `e349ff673aa9bf99cb42f9f31034cdccf39e1cb432c4a17d73e56c0a1a62f129` · propuesta: `d456c0b9369d7a0cbfd3e2c3383d8c95e71f8d609305704578bb852b0e418d31`

## MAN-GSI-P18-037

Decisión: pending_review · acción: revise.

Motivo: Mantener la posibilidad de XML bien formado e inválido y clave D; comprobarla con una instancia breve y un tipo declarado explícitamente.

### Antes

¿Qué afirmación es correcta sobre un XML bien formado pero inválido?

- A. Es imposible.
- B. Implica necesariamente que falta el elemento raíz.
- C. Siempre significa que el archivo está cifrado.
- D. Puede cumplir la sintaxis XML y, sin embargo, incumplir el XSD o DTD esperado. **(correcta)**

Explicación: Bien formado e inválido es una combinación perfectamente posible.

### Propuesta

Un XSD sin targetNamespace declara el elemento edad con tipo xs:integer. ¿Cómo se clasifica &lt;edad&gt;texto&lt;/edad&gt;?

- A. Mal formado: el texto contenido necesita comillas delimitadoras.
- B. Válido: el cierre de la etiqueta acredita el tipo de su contenido.
- C. Mal formado: la raíz necesita un prefijo de namespace explícito.
- D. Bien formado, pero inválido respecto al tipo entero del esquema. **(correcta)**

Explicación: El documento tiene una única raíz y las etiquetas están correctamente cerradas, por lo que es XML bien formado. El texto texto no pertenece al espacio léxico de xs:integer y falla la evaluación con el XSD descrito. Son comprobaciones distintas: parsear sin error no demuestra conformidad con un esquema. Un elemento sin namespace es admisible en este contexto; no se necesita inventar un prefijo para corregir el tipo.

- Error A: Las comillas delimitan valores de atributos, no todo contenido textual de un elemento. La cadena del ejemplo no incumple por ese motivo la sintaxis XML.
- Error B: El cierre correcto acredita una condición sintáctica, no el tipo del contenido. El esquema exige un entero y el texto indicado no lo representa.
- Error C: El contrato se ha descrito sin targetNamespace. La falta de prefijo no vuelve mal formado el documento ni resuelve el error de tipo.

- [W3C: XML 1.0](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology; 2.1 Well-Formed XML Documents; 2.3 Common Syntactic Constructs; 2.8 Prolog and Document Type Declaration; 3 Logical Structures · versión: Fifth Edition, W3C Recommendation, 26-11-2008; buena formación y validez DTD diferenciadas de evaluación XSD · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; Particles, Model Groups y Identity-constraint Definitions · versión: W3C Recommendation, 05-04-2012; estructura y restricciones, sin equiparar validación XSD con verdad de negocio · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 2, Datatypes](https://www.w3.org/TR/xmlschema11-2/) · 3 Built-in Datatypes, integer; 4 Datatype Components, constraining facets · versión: W3C Recommendation, 05-04-2012; tipos y facetas, no soporte completo de XSD 1.1 por el motor de ejemplos · comprobado: 2026-10-28
- [W3C: XML Schema Part 0, Primer](https://www.w3.org/TR/xmlschema-0/) · 2 Basic Concepts; 2.2.1 Occurrence Constraints; 3 Namespaces, Schemas and Qualification; 5.6 schemaLocation y 5.7 Conformance · versión: Second Edition, W3C Recommendation, 28-10-2004; texto introductorio no normativo de XSD 1.0, con conceptos comunes usados en los ejemplos · comprobado: 2026-10-28

Partida: `25053cdb156a788879706097f3cb8c64a5bae2f538c8df3bf460a1569ad49faa` · propuesta: `0aa3cf509a40dd49eaa5604bd3932c3adfa721d8b3ba10fb1840503cea41b450`

## MAN-GSI-P18-038

Decisión: pending_review · acción: revise.

Motivo: Conservar mejora de interoperabilidad y clave A; comparar políticas de contrato y evitar imponer un namespace nuevo en cada revisión.

### Antes

¿Qué práctica mejora interoperabilidad en intercambio XML?

- A. Versionar y publicar esquemas, namespaces y reglas de compatibilidad de forma controlada. **(correcta)**
- B. Cambiar nombres de elementos sin avisar.
- C. Eliminar validación para aceptar cualquier cosa.
- D. Usar prefijos aleatorios como contrato semántico.

Explicación: La interoperabilidad depende de contratos estables y evolución compatible.

### Propuesta

¿Qué práctica mejora interoperabilidad en intercambio XML?

- A. Versionar y publicar esquemas, namespaces y reglas de compatibilidad de forma controlada. **(correcta)**
- B. Versionar el esquema localmente sin comunicar a emisores y receptores sus cambios.
- C. Tratar el namespace como versión del esquema sin acordar reglas de compatibilidad.
- D. Aceptar una instancia al reconocer sus etiquetas, sin contrastar las restricciones pactadas.

Explicación: Un intercambio interoperable necesita un contrato compartido que permita identificar los vocabularios, esquemas aplicables y reglas de evolución. Publicar y controlar sus versiones facilita que emisores y receptores sepan qué aceptar. Esto no impone cambiar la URI de namespace en toda revisión: hay estrategias distintas y una política debe indicar qué cambios considera compatibles. El namespace no es por sí solo una versión completa del esquema ni una garantía de conformidad.

- Error B: Una versión conocida solo localmente no permite al otro extremo saber qué restricciones han cambiado. Falta coordinar la evolución del contrato compartido.
- Error C: La URI identifica un namespace y puede participar en una estrategia de versiones, pero no sustituye una política acordada de compatibilidad o la identificación del esquema.
- Error D: Reconocer etiquetas no contrasta tipos, estructura o reglas pactadas. La coincidencia de nombres no demuestra conformidad de la instancia.

- [W3C TAG: Extending and Versioning Languages, XML Languages](https://www.w3.org/2001/tag/doc/versioning-xml) · 2 XML Language Requirements; 3 Version Identification technologies; 4 y 7 estrategias de identificación y compatibilidad · versión: Editorial Draft, Draft TAG Finding, 04-07-2007; no consenso TAG ni recomendación W3C. Apoyo de discusión para una práctica de contrato, no mandato universal de cambiar namespace · comprobado: 2026-10-28
- [W3C: Namespaces in XML 1.0](https://www.w3.org/TR/xml-names/) · 2.1 Basic Concepts, expanded names; 2.3 Comparing URI References; 3 Declaring Namespaces; 4 y 5 Qualified Names; 6.1 Scoping y 6.2 Defaulting · versión: Third Edition, W3C Recommendation, 08-12-2009; URI identifica, no obliga a recuperar un esquema; prefijo y nombre expandido diferenciados · comprobado: 2026-10-28
- [W3C: XML Schema Part 0, Primer](https://www.w3.org/TR/xmlschema-0/) · 2 Basic Concepts; 2.2.1 Occurrence Constraints; 3 Namespaces, Schemas and Qualification; 5.6 schemaLocation y 5.7 Conformance · versión: Second Edition, W3C Recommendation, 28-10-2004; texto introductorio no normativo de XSD 1.0, con conceptos comunes usados en los ejemplos · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; Particles, Model Groups y Identity-constraint Definitions · versión: W3C Recommendation, 05-04-2012; estructura y restricciones, sin equiparar validación XSD con verdad de negocio · comprobado: 2026-10-28

Partida: `03b155a8c6c50173ad70c2ce05bf14bab9182e8cd058c0cec4415e704e6ff35b` · propuesta: `00ce60e50889535cae5359a8c7c67fbbb728d00e656d3cac9c9ac8dfb2308f47`

## MAN-GSI-P18-039

Decisión: pending_review · acción: revise.

Motivo: Mantener validación contractual y clave C; caso explícito de admisión frente a buena formación, relajación del esquema y confianza en una pista de ubicación.

### Antes

¿Qué debe hacer un receptor si un contrato exige XSD concreto?

- A. Aceptar siempre cualquier XML bien formado.
- B. Transformar cualquier error en HTML.
- C. Validar contra el esquema aplicable y gestionar errores de forma explícita. **(correcta)**
- D. Ignorar namespaces.

Explicación: La validación asegura conformidad estructural y de tipos del intercambio.

### Propuesta

Un receptor recibe XML bien formado; el contrato exige una versión concreta de XSD antes de admitir el intercambio. ¿Qué actuación cumple ese contrato?

- A. Dar por suficiente la buena formación y procesar el mensaje como conforme.
- B. Cambiar los tipos del esquema para ajustarlos a los valores del mensaje.
- C. Validar contra el esquema acordado y gestionar explícitamente los errores. **(correcta)**
- D. Validar contra el primer XSD enlazado por la instancia, sin contrastar su versión.

Explicación: Si el contrato exige validar contra un XSD concreto antes de admitir el intercambio, el receptor debe evaluar la instancia con ese esquema y tratar los incumplimientos de forma explícita. La buena formación es necesaria, pero no sustituye la evaluación estructural y de tipos. La ubicación sugerida por la instancia no decide por sí sola la versión contractual. Una validación correcta tampoco demuestra toda condición de negocio o autoriza a cambiar las reglas para que un mensaje pase.

- Error A: La buena formación comprueba sintaxis XML. El contrato exige además conformidad con una versión concreta de esquema, que no se obtiene solo al parsear.
- Error B: Adaptar las restricciones al mensaje altera el contrato usado para decidir conformidad. No equivale a validar frente al esquema previamente acordado.
- Error D: schemaLocation aporta una pista de ubicación, no una garantía de que el recurso sea el esquema contractual. Debe comprobarse cuál es la versión aplicable.

- [W3C: XML Schema Part 0, Primer](https://www.w3.org/TR/xmlschema-0/) · 2 Basic Concepts; 2.2.1 Occurrence Constraints; 3 Namespaces, Schemas and Qualification; 5.6 schemaLocation y 5.7 Conformance · versión: Second Edition, W3C Recommendation, 28-10-2004; texto introductorio no normativo de XSD 1.0, con conceptos comunes usados en los ejemplos · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; Particles, Model Groups y Identity-constraint Definitions · versión: W3C Recommendation, 05-04-2012; estructura y restricciones, sin equiparar validación XSD con verdad de negocio · comprobado: 2026-10-28
- [W3C: XML 1.0](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology; 2.1 Well-Formed XML Documents; 2.3 Common Syntactic Constructs; 2.8 Prolog and Document Type Declaration; 3 Logical Structures · versión: Fifth Edition, W3C Recommendation, 26-11-2008; buena formación y validez DTD diferenciadas de evaluación XSD · comprobado: 2026-10-28

Partida: `239a7ba1bd0fda15efd9a3bf7f9e190bea70f43e8125ad7e8a3a4467585b696f` · propuesta: `b86ca2a9406018dec8bb99775da9779af3ea5db5d60de23bdc4610ea0c472685`

## MAN-GSI-P18-040

Decisión: pending_review · acción: revise.

Motivo: Conservar el microcaso de organismos y clave C; sustituir distractores débiles por errores de nombre expandido, orden implícito e inferencia semántica.

### Antes

En una integración administrativa, dos organismos usan elementos &lt;id&gt; con significados distintos. ¿Qué solución es más correcta?

- A. Confiar solo en el prefijo visual sin URI.
- B. Eliminar todos los identificadores.
- C. Definir vocabularios/namespaces claros y contratos de esquema que desambigüen cada identificador. **(correcta)**
- D. Usar el mismo namespace para conceptos incompatibles sin documentación.

Explicación: Namespaces y esquemas ayudan a evitar colisiones y ambigüedad contractual.

### Propuesta

En una integración administrativa, dos organismos usan elementos &lt;id&gt; con significados distintos. ¿Qué solución es más correcta?

- A. Asignar prefijos distintos y conservar el mismo URI y nombre local para ambos.
- B. Distinguirlos por el orden de aparición, sin especificar esa regla en el contrato.
- C. Definir namespaces y contratos que identifiquen el significado de cada id. **(correcta)**
- D. Usar valores de texto para que el parser infiera el significado.

Explicación: Dos vocabularios pueden usar el mismo nombre local id para conceptos distintos y cualificarlo con URIs de namespace diferentes. El contrato debe documentar el significado y las restricciones de cada identificador, apoyándose en esquemas donde proceda. Los prefijos visibles no bastan si ambos se vinculan a la misma URI; tampoco la conversión del valor a texto informa al parser del significado de negocio. Namespaces y XSD ayudan a desambiguar, pero no inventan esa semántica.

- Error A: Con el mismo URI y nombre local, los dos nombres expandidos coinciden aunque los prefijos sean distintos. La abreviatura no separa por sí sola vocabularios.
- Error B: El orden puede formar parte de un contrato explícito, pero no se ha acordado tal regla. Usarlo implícitamente no documenta qué representa cada identificador.
- Error D: Que el valor sea texto no codifica por sí mismo el organismo ni el significado. El parser no deduce esa información de negocio por cambiar su representación.

- [W3C: Namespaces in XML 1.0](https://www.w3.org/TR/xml-names/) · 2.1 Basic Concepts, expanded names; 2.3 Comparing URI References; 3 Declaring Namespaces; 4 y 5 Qualified Names; 6.1 Scoping y 6.2 Defaulting · versión: Third Edition, W3C Recommendation, 08-12-2009; URI identifica, no obliga a recuperar un esquema; prefijo y nombre expandido diferenciados · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; Particles, Model Groups y Identity-constraint Definitions · versión: W3C Recommendation, 05-04-2012; estructura y restricciones, sin equiparar validación XSD con verdad de negocio · comprobado: 2026-10-28
- [W3C: XML Schema Part 0, Primer](https://www.w3.org/TR/xmlschema-0/) · 2 Basic Concepts; 2.2.1 Occurrence Constraints; 3 Namespaces, Schemas and Qualification; 5.6 schemaLocation y 5.7 Conformance · versión: Second Edition, W3C Recommendation, 28-10-2004; texto introductorio no normativo de XSD 1.0, con conceptos comunes usados en los ejemplos · comprobado: 2026-10-28

Partida: `78e9470518371c7fcf340ccbb35a69b71ecf8c58f0c87e1ed8e3744e5eadc620` · propuesta: `91da49dcaa1bbec452fb98053d61b33dcd22a1d2308a8251a8be385646d108bf`

## MAN-GSI-P18-041

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas próximas, clave B; añadir cálculo y funciones sin reducir XPath a selección literal o atribuirle mutación DOM.

### Antes

¿Para qué sirve XPath?

- A. Declarar elementos, atributos, tipos y restricciones que debe satisfacer un vocabulario o documento XML.
- B. Para seleccionar y navegar nodos/valores de documentos XML mediante expresiones. **(correcta)**
- C. Transformar un árbol XML en otro documento aplicando plantillas y reglas declarativas de salida.
- D. Acceder y modificar programáticamente nodos de un documento mediante una API de objetos en memoria.

Explicación: XPath es un lenguaje de selección/expresión sobre modelos XML.

### Propuesta

¿Para qué sirve XPath?

- A. Declarar elementos, atributos, tipos y restricciones que debe satisfacer un vocabulario o documento XML.
- B. Para seleccionar y navegar nodos/valores de documentos XML mediante expresiones. **(correcta)**
- C. Transformar un árbol XML en otro documento aplicando plantillas y reglas declarativas de salida.
- D. Acceder y modificar programáticamente nodos de un documento mediante una API de objetos en memoria.

Explicación: XPath permite expresar navegación, selección y cálculos sobre un modelo de datos, incluidas rutas a nodos y valores de documentos XML. No se reduce a cadenas de rutas literales: sus expresiones pueden usar condiciones y funciones. La selección no constituye por sí sola una transformación completa, una declaración XSD o una mutación del DOM. Se conserva la finalidad general de la pregunta sin afirmar que todas las versiones tengan exactamente los mismos tipos y funciones.

- Error A: Declarar estructura y restricciones de un vocabulario es la finalidad de un esquema, como XSD. No es lo que define una expresión XPath de selección.
- Error C: La generación de resultados mediante plantillas caracteriza XSLT. Puede usar XPath, pero el lenguaje de expresión no reemplaza toda la transformación.
- Error D: La API de objetos DOM permite acceder y modificar nodos mediante operaciones programáticas. XPath aporta expresiones sobre el modelo, no esa API de mutación.

- [W3C: XPath 3.1](https://www.w3.org/TR/xpath-31/) · 1 Introduction; 3.3 Path Expressions, 3.3.2 Steps y 3.3.3 Predicates within Steps · versión: W3C Recommendation, 21-03-2017; finalidad y expresiones, no se atribuye al motor XPath 1.0 soporte íntegro de 3.1 · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; Particles, Model Groups y Identity-constraint Definitions · versión: W3C Recommendation, 05-04-2012; estructura y restricciones, sin equiparar validación XSD con verdad de negocio · comprobado: 2026-10-28
- [W3C: XSLT 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction; 4 Expressions; 5 Template Rules; 7 Creating the Result Tree; 16 Output · versión: W3C Recommendation, 16-11-1999; versión explícita para conceptos compartidos y ejemplos de transformación. No es la última versión ni limita capacidades de versiones posteriores · comprobado: 2026-10-28
- [WHATWG: DOM Standard](https://dom.spec.whatwg.org/) · 1.1 Trees; 4.2 Node tree; 4.4 Node; 4.9 Element y algoritmos de mutación · versión: Living Standard consultado; cabecera observada 19-10-2026. API de objetos y mutación distinta de un lenguaje de expresiones XPath · comprobado: 2026-10-28

Partida: `f5e9d25b860e874a304d6ed68064b63537244fd0014556b1a885b743313ebc1f` · propuesta: `fb22c4ef508f712c7a27420eb2ed6e0ce95e19bf11e2b72e36d4c09a32cae6dc`

## MAN-GSI-P18-042

Decisión: pending_review · acción: revise.

Motivo: Conservar transformación, plantillas, XPath y clave A; reemplazar distractores de SO/red por validación, selección y presentación documental.

### Antes

¿Para qué sirve XSLT?

- A. Para transformar documentos XML en otros resultados usando reglas/plantillas y XPath. **(correcta)**
- B. Para validar tipos como XSD exclusivamente.
- C. Para gestionar procesos del SO.
- D. Para definir rutas IP.

Explicación: XSLT transforma; XPath selecciona.

### Propuesta

¿Para qué sirve XSLT?

- A. Para transformar documentos XML en otros resultados usando reglas/plantillas y XPath. **(correcta)**
- B. Para declarar tipos y restricciones que debe satisfacer una instancia XML.
- C. Para localizar nodos mediante rutas, sin describir la construcción del resultado.
- D. Para aplicar presentación visual al árbol existente mediante reglas de estilo.

Explicación: XSLT describe transformaciones que producen un resultado a partir de datos de entrada mediante reglas e instrucciones. Las plantillas y expresiones XPath permiten decidir qué procesar y cómo construir la salida; los resultados no tienen que ser una copia del XML original. Transformar no sustituye la validación de un esquema ni equivale a aplicar una hoja CSS al árbol existente. La versión 1.0 citada respalda esos conceptos compartidos sin presentarse como la más reciente.

- Error B: Declarar tipos y restricciones de conformidad corresponde a XSD. No describe el propósito principal de una transformación XSLT.
- Error C: Localizar o calcular mediante expresiones XPath es parte de la transformación, pero falta definir cómo se construye el resultado, tarea que aporta XSLT.
- Error D: Aplicar reglas de presentación al documento describe CSS. XSLT puede generar otro árbol o formato de salida, con un papel diferente.

- [W3C: XSLT 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction; 4 Expressions; 5 Template Rules; 7 Creating the Result Tree; 16 Output · versión: W3C Recommendation, 16-11-1999; versión explícita para conceptos compartidos y ejemplos de transformación. No es la última versión ni limita capacidades de versiones posteriores · comprobado: 2026-10-28
- [W3C: XPath 3.1](https://www.w3.org/TR/xpath-31/) · 1 Introduction; 3.3 Path Expressions, 3.3.2 Steps y 3.3.3 Predicates within Steps · versión: W3C Recommendation, 21-03-2017; finalidad y expresiones, no se atribuye al motor XPath 1.0 soporte íntegro de 3.1 · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; Particles, Model Groups y Identity-constraint Definitions · versión: W3C Recommendation, 05-04-2012; estructura y restricciones, sin equiparar validación XSD con verdad de negocio · comprobado: 2026-10-28
- [W3C CSS 2.1: Introduction](https://www.w3.org/TR/CSS2/intro.html) · 2.1 y 2.2 tutoriales HTML/XML; 2.3 Processing model: aplicación de reglas de presentación · versión: CSS 2.1; solo finalidad de hojas de estilo, no catálogo de capacidades CSS actuales · comprobado: 2026-10-28

Partida: `df17bdc6f09864715b4201cbb15e26b411eb2ba08cc5e593b1099b2c2087f92c` · propuesta: `7589b1b86ecd8830018ae80936cf71b40d2b4e054043292b2c279e26db574e35`

## MAN-GSI-P18-043

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación bien construida y clave B; explicar selección, condiciones y valores, sin limitar XPath a rutas o confundir versiones.

### Antes

¿Qué relación hay entre XPath y XSLT?

- A. XPath ejecuta las transformaciones completas y XSLT se limita a expresar rutas para localizar nodos del documento.
- B. XSLT utiliza XPath para seleccionar partes del documento sobre las que aplicar transformaciones. **(correcta)**
- C. Ambos son lenguajes de esquema cuyo cometido principal es validar tipos, cardinalidades y restricciones de un XML.
- D. XSLT es un protocolo de transporte que encapsula consultas XPath para enviarlas entre cliente y servidor.

Explicación: La separación selección/transformación es una distinción clásica de examen.

### Propuesta

¿Qué relación hay entre XPath y XSLT?

- A. XPath ejecuta las transformaciones completas y XSLT se limita a expresar rutas para localizar nodos del documento.
- B. XSLT utiliza XPath para seleccionar partes del documento sobre las que aplicar transformaciones. **(correcta)**
- C. Ambos son lenguajes de esquema cuyo cometido principal es validar tipos, cardinalidades y restricciones de un XML.
- D. XSLT es un protocolo de transporte que encapsula consultas XPath para enviarlas entre cliente y servidor.

Explicación: XSLT utiliza XPath como lenguaje de expresión para seleccionar datos y evaluar condiciones o valores durante la transformación. XSLT aporta las reglas e instrucciones que construyen el resultado. La separación es de responsabilidad, no una prohibición de cálculo en XPath ni una garantía de que todos los procesadores soporten la misma versión. La combinación transforma datos; no se convierte por ello en un esquema o protocolo de transporte.

- Error A: Invierte las responsabilidades. XPath aporta expresiones, mientras XSLT describe la transformación y construcción de la salida.
- Error C: La función principal de ambos no es declarar tipos o cardinalidades. XSD es un lenguaje de esquema; XPath y XSLT tienen responsabilidades de expresión y transformación.
- Error D: XSLT no define un transporte entre cliente y servidor. Que una transformación pueda obtener o producir datos no lo convierte en un protocolo de red.

- [W3C: XSLT 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction; 4 Expressions; 5 Template Rules; 7 Creating the Result Tree; 16 Output · versión: W3C Recommendation, 16-11-1999; versión explícita para conceptos compartidos y ejemplos de transformación. No es la última versión ni limita capacidades de versiones posteriores · comprobado: 2026-10-28
- [W3C: XPath 3.1](https://www.w3.org/TR/xpath-31/) · 1 Introduction; 3.3 Path Expressions, 3.3.2 Steps y 3.3.3 Predicates within Steps · versión: W3C Recommendation, 21-03-2017; finalidad y expresiones, no se atribuye al motor XPath 1.0 soporte íntegro de 3.1 · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; Particles, Model Groups y Identity-constraint Definitions · versión: W3C Recommendation, 05-04-2012; estructura y restricciones, sin equiparar validación XSD con verdad de negocio · comprobado: 2026-10-28
- [IETF: RFC 9110, HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · 1 Introduction; 6 Message Abstraction; 9 Methods; 15 Status Codes · versión: RFC 9110, STD 97, junio de 2022; distingue protocolo y representaciones como JSON/XML · comprobado: 2026-10-28

Partida: `456561a2e27f44df7346a03e8daee4e607ee43fe942962ad2f18689020ae9293` · propuesta: `26e7a35379778460f4d1390f86399296de1b3f88a33a3e247c3cdb23b8a8d24f`

## MAN-GSI-P18-044

Decisión: pending_review · acción: revise.

Motivo: Conservar concepto XHTML y clave B; aproximar distractores a SGML, XSD y XSLT y registrar la terminología y recomendación actuales.

### Antes

¿Qué es XHTML?

- A. Un nuevo protocolo HTTP.
- B. El vocabulario HTML expresado bajo reglas de sintaxis XML. **(correcta)**
- C. Una hoja de estilos.
- D. Una base de datos XML obligatoria.

Explicación: XHTML aplica reglas de documento XML bien formado al vocabulario HTML.

### Propuesta

¿Qué es XHTML?

- A. HTML descrito mediante una DTD de SGML, con su sintaxis histórica.
- B. El vocabulario HTML expresado bajo reglas de sintaxis XML. **(correcta)**
- C. Un esquema XML que define el vocabulario HTML.
- D. Una transformación XML que genera páginas HTML.

Explicación: XHTML es la denominación histórica del vocabulario HTML expresado con sintaxis XML, que debe respetar sus reglas de buena formación y namespaces. El estándar HTML actual habla de sintaxis XML para HTML y distingue su procesamiento del de text/html. No es un lenguaje de esquema ni una transformación. El estándar no recomienda esa sintaxis para la autoría general y la considera esencialmente sin mantenimiento; conocerla no obliga a usarla en HTML moderno.

- Error A: Describe la relación histórica de HTML 4 con SGML. No identifica la serialización XML del vocabulario HTML conocida como XHTML.
- Error C: Un lenguaje de esquema declara restricciones sobre documentos. XHTML se refiere al uso del vocabulario HTML bajo sintaxis XML, no a un esquema nuevo.
- Error D: Una hoja XSLT puede generar una página HTML, pero transformar documentos es una función distinta de la sintaxis con que se expresa ese vocabulario.

- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · 1.8 HTML vs XML syntax: text/html, XML MIME types, application/xhtml+xml y tratamiento distinto · versión: Living Standard consultado el 28-10-2026, cabecera 26-10-2026; XHTML es denominación histórica de la sintaxis XML para HTML · comprobado: 2026-10-28
- [WHATWG HTML: The XML syntax](https://html.spec.whatwg.org/multipage/xhtml.html) · 14 The XML syntax; 14.1 Writing documents in the XML syntax y 14.2 Parsing XML documents · versión: Living Standard consultado; uso de sintaxis XML no recomendado por el estándar actual y esencialmente sin mantenimiento, sin convertirlo en requisito para HTML · comprobado: 2026-10-28
- [W3C: XML 1.0](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology; 2.1 Well-Formed XML Documents; 2.3 Common Syntactic Constructs; 2.8 Prolog and Document Type Declaration; 3 Logical Structures · versión: Fifth Edition, W3C Recommendation, 26-11-2008; buena formación y validez DTD diferenciadas de evaluación XSD · comprobado: 2026-10-28
- [W3C: Namespaces in XML 1.0](https://www.w3.org/TR/xml-names/) · 2.1 Basic Concepts, expanded names; 2.3 Comparing URI References; 3 Declaring Namespaces; 4 y 5 Qualified Names; 6.1 Scoping y 6.2 Defaulting · versión: Third Edition, W3C Recommendation, 08-12-2009; URI identifica, no obliga a recuperar un esquema; prefijo y nombre expandido diferenciados · comprobado: 2026-10-28
- [W3C HTML 4.01: On SGML and HTML](https://www.w3.org/TR/html401/intro/sgmltut.html) · 3.1 Introduction to SGML y 3.2 SGML constructs used in HTML · versión: HTML 4.01, 24-12-1999; relación histórica con SGML, no reglas de análisis del HTML moderno · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; Particles, Model Groups y Identity-constraint Definitions · versión: W3C Recommendation, 05-04-2012; estructura y restricciones, sin equiparar validación XSD con verdad de negocio · comprobado: 2026-10-28
- [W3C: XSLT 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction; 4 Expressions; 5 Template Rules; 7 Creating the Result Tree; 16 Output · versión: W3C Recommendation, 16-11-1999; versión explícita para conceptos compartidos y ejemplos de transformación. No es la última versión ni limita capacidades de versiones posteriores · comprobado: 2026-10-28

Partida: `375dfa67cee17d5e2256492f81f0d4259255e775ca166972e4e7405ccf8613c8` · propuesta: `672cb858e120f1071e03a45f9666036c4421ea37afb1b6e88d85d49a73c87420`

## MAN-GSI-P18-045

Decisión: pending_review · acción: revise.

Motivo: Conservar requisito de buena formación y clave C; contrastar recuperación HTML, caso y atributos sin comillas, sin equiparar buena formación con validez.

### Antes

¿Qué requisito caracteriza a XHTML servido como XML?

- A. Puede omitir cierres de forma arbitraria como HTML tolerante.
- B. No distingue mayúsculas/minúsculas.
- C. Debe respetar las reglas de XML bien formado. **(correcta)**
- D. No usa atributos.

Explicación: La sintaxis XML es estricta en cierre y anidamiento.

### Propuesta

¿Qué requisito caracteriza a XHTML servido como XML?

- A. Procesarse con recuperación de errores de la sintaxis text/html.
- B. Ignorar el caso de los nombres al comprobar los cierres.
- C. Respetar las reglas de XML bien formado durante el análisis. **(correcta)**
- D. Aceptar atributos sin comillas si no contienen espacios.

Explicación: Cuando el recurso se sirve y procesa como XML, su buena formación exige, entre otras reglas, cierres concordantes, anidamiento correcto y valores de atributo delimitados por comillas. Los nombres distinguen mayúsculas y minúsculas. No se aplica la recuperación propia del análisis HTML para convertir errores XML en una instancia conforme. Buena formación no significa automáticamente validez frente a un esquema ni accesibilidad; el tipo MIME y las reglas de análisis siguen siendo relevantes.

- Error A: La recuperación del parser de text/html no es el régimen de análisis de un recurso tratado como XML. El enunciado fija este segundo contexto.
- Error B: XML compara los nombres respetando el caso. Un cierre con diferente capitalización no se corrige simplemente normalizando a minúsculas.
- Error D: XML exige comillas para valores de atributos, aunque no contengan espacios. La posibilidad de ciertos atributos HTML sin comillas no se traslada a XML.

- [W3C: XML 1.0](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology; 2.1 Well-Formed XML Documents; 2.3 Common Syntactic Constructs; 2.8 Prolog and Document Type Declaration; 3 Logical Structures · versión: Fifth Edition, W3C Recommendation, 26-11-2008; buena formación y validez DTD diferenciadas de evaluación XSD · comprobado: 2026-10-28
- [WHATWG HTML: The XML syntax](https://html.spec.whatwg.org/multipage/xhtml.html) · 14 The XML syntax; 14.1 Writing documents in the XML syntax y 14.2 Parsing XML documents · versión: Living Standard consultado; uso de sintaxis XML no recomendado por el estándar actual y esencialmente sin mantenimiento, sin convertirlo en requisito para HTML · comprobado: 2026-10-28
- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · 1.8 HTML vs XML syntax: text/html, XML MIME types, application/xhtml+xml y tratamiento distinto · versión: Living Standard consultado el 28-10-2026, cabecera 26-10-2026; XHTML es denominación histórica de la sintaxis XML para HTML · comprobado: 2026-10-28

Partida: `3603437129a60fc8346d11a8ce99318a4cec195a1bb94950813443dbca014d4e` · propuesta: `bc8fbc5b6dc95e022372b4f23affea2fa73e3deaa88ae630e9f1224d2c5cbd70`

## MAN-GSI-P18-046

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción HTML/XML y clave D; comparar efectos de tipo MIME, escritura y extensión, con alcance explícito de respuesta web.

### Antes

¿Qué afirmación es correcta sobre HTML moderno y XHTML?

- A. Todo HTML5 es XHTML.
- B. XHTML es un lenguaje de programación.
- C. HTML solo puede servirse como application/xhtml+xml.
- D. HTML puede usar sintaxis HTML; XHTML usa sintaxis XML y no deben confundirse. **(correcta)**

Explicación: WHATWG separa claramente ambas sintaxis.

### Propuesta

En una respuesta web con tipo MIME declarado, ¿qué afirmación es correcta sobre HTML y su sintaxis XML?

- A. El tipo MIME no afecta a que se aplique el análisis HTML o XML.
- B. Un cierre /&gt; basta para que text/html se procese como XML.
- C. La extensión .xhtml obliga a tratar la respuesta como XML.
- D. HTML y XML tienen reglas de análisis distintas según el tipo MIME. **(correcta)**

Explicación: El estándar distingue la sintaxis HTML y la sintaxis XML para el vocabulario HTML. En el contexto de una respuesta web con tipo MIME declarado, text/html lleva al procesamiento HTML, mientras application/xhtml+xml corresponde a XML. Escribir cierres con /&gt; o elegir una extensión de fichero no cambia por sí solo ese tipo ni convierte un documento HTML en XML bien formado. La explicación se refiere a ese contexto, sin universalizar reglas de detección de recursos sin un tipo adecuado.

- Error A: El tipo de la representación interviene en la elección del procesamiento. El estándar separa expresamente text/html de los tipos XML.
- Error B: La apariencia de un cierre no modifica el tipo MIME declarado ni selecciona por sí sola un parser XML. En HTML tiene reglas propias según el elemento.
- Error C: La extensión del nombre no sustituye el tipo MIME de una respuesta web. Un recurso con ese nombre puede seguir entregándose como text/html.

- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · 1.8 HTML vs XML syntax: text/html, XML MIME types, application/xhtml+xml y tratamiento distinto · versión: Living Standard consultado el 28-10-2026, cabecera 26-10-2026; XHTML es denominación histórica de la sintaxis XML para HTML · comprobado: 2026-10-28
- [WHATWG HTML: The XML syntax](https://html.spec.whatwg.org/multipage/xhtml.html) · 14 The XML syntax; 14.1 Writing documents in the XML syntax y 14.2 Parsing XML documents · versión: Living Standard consultado; uso de sintaxis XML no recomendado por el estándar actual y esencialmente sin mantenimiento, sin convertirlo en requisito para HTML · comprobado: 2026-10-28
- [IETF: RFC 9110, HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · 1 Introduction; 6 Message Abstraction; 9 Methods; 15 Status Codes · versión: RFC 9110, STD 97, junio de 2022; distingue protocolo y representaciones como JSON/XML · comprobado: 2026-10-28

Partida: `3fedfa19a58f73dcf422d17af93aff0ba7960ff785a2d3bb8ffcd48f6be932e1` · propuesta: `28ff6fea6f211454f1960ad04138acd006be59daebacd856ec3e7420b653a5a0`

## MAN-GSI-P18-047

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación JSON/YAML/XML/HTTP y clave A; completar valores simples en nivel superior e independencia respecto a JavaScript.

### Antes

¿Qué es JSON?

- A. Un formato textual de intercambio basado en objetos, arrays y valores simples. **(correcta)**
- B. Un formato de serialización basado en indentación, secuencias y mapeos que admite comentarios y múltiples documentos.
- C. Un lenguaje de marcado con etiquetas, atributos, namespaces y reglas de documento bien formado.
- D. Un protocolo de aplicación que define métodos, cabeceras, códigos de estado y transferencia de representaciones.

Explicación: JSON es un formato de datos muy usado en APIs, distinto de XML.

### Propuesta

¿Qué es JSON?

- A. Un formato textual de intercambio basado en objetos, arrays y valores simples. **(correcta)**
- B. Un formato de serialización basado en indentación, secuencias y mapeos que admite comentarios y múltiples documentos.
- C. Un lenguaje de marcado con etiquetas, atributos, namespaces y reglas de documento bien formado.
- D. Un protocolo de aplicación que define métodos, cabeceras, códigos de estado y transferencia de representaciones.

Explicación: JSON es un formato textual de intercambio independiente del lenguaje, con objetos, arrays, cadenas, números, booleanos y null. También admite un valor simple en el nivel superior; no se limita a objetos o arrays ni equivale a un programa JavaScript. Su gramática no incluye comentarios o etiquetas XML. El formato representa datos, mientras las reglas de contrato y su transporte requieren mecanismos adicionales.

- Error B: La descripción de secuencias, mapeos, comentarios y varios documentos corresponde a YAML. JSON tiene una gramática distinta y no incorpora comentarios estándar.
- Error C: Las etiquetas, atributos y namespaces describen XML. JSON organiza sus valores mediante otra sintaxis, sin ese mecanismo de marcado.
- Error D: Los métodos, cabeceras y estados son elementos de un protocolo como HTTP. JSON puede viajar en sus mensajes, pero es una representación de datos.

- [IETF: RFC 8259, JSON](https://www.rfc-editor.org/rfc/rfc8259.html) · 1 Introduction; 2 JSON Grammar; 3 Values; 4 Objects; 5 Arrays; 6 Numbers; 7 Strings · versión: RFC 8259, STD 90, diciembre de 2017; formato textual independiente de lenguaje, también valores simples en el nivel superior · comprobado: 2026-10-28
- [YAML: Specification 1.2.2](https://yaml.org/spec/1.2.2/) · 2 Preview; 2.1 Collections, 2.2 Structures; 3.2 Information Models: secuencias, mapeos y comentarios · versión: Revisión 1.2.2, 01-10-2021; no exige usar indentación en toda construcción YAML, que también admite estilo flow · comprobado: 2026-10-28
- [W3C: XML 1.0](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology; 2.1 Well-Formed XML Documents; 2.3 Common Syntactic Constructs; 2.8 Prolog and Document Type Declaration; 3 Logical Structures · versión: Fifth Edition, W3C Recommendation, 26-11-2008; buena formación y validez DTD diferenciadas de evaluación XSD · comprobado: 2026-10-28
- [W3C: Namespaces in XML 1.0](https://www.w3.org/TR/xml-names/) · 2.1 Basic Concepts, expanded names; 2.3 Comparing URI References; 3 Declaring Namespaces; 4 y 5 Qualified Names; 6.1 Scoping y 6.2 Defaulting · versión: Third Edition, W3C Recommendation, 08-12-2009; URI identifica, no obliga a recuperar un esquema; prefijo y nombre expandido diferenciados · comprobado: 2026-10-28
- [IETF: RFC 9110, HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · 1 Introduction; 6 Message Abstraction; 9 Methods; 15 Status Codes · versión: RFC 9110, STD 97, junio de 2022; distingue protocolo y representaciones como JSON/XML · comprobado: 2026-10-28
- [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) · Description; JavaScript and JSON differences; JSON.parse y JSON.stringify · versión: Documentación de Mozilla consultada: diferencias de sintaxis y APIs del motor; JSON no equivale a código JavaScript general · comprobado: 2026-10-28

Partida: `3b7073539cb39162e9fe17063e13d28c3576b46660140a0ddea272f50012f7b1` · propuesta: `45d9f836a74a5bed1049917de2ca280810e880ec299fd89b5d35ed9fc70f8cc3`

## MAN-GSI-P18-048

Decisión: pending_review · acción: revise.

Motivo: Mantener adecuación de XML a contratos documentales y clave A; microcaso con contenido mixto y reutilización real, sin negar esquemas o firma en JSON.

### Antes

¿Qué ventaja puede ofrecer XML frente a JSON en ciertos contratos documentales?

- A. Namespaces, esquemas maduros y ecosistema de transformación/firma para documentos complejos. **(correcta)**
- B. JSON ofrece siempre validación de contenido mixto, espacios de nombres y firma documental con mayor madurez que XML.
- C. XML produce en todos los casos documentos más pequeños y un análisis más rápido, con independencia del contrato usado.
- D. JSON no permite representar texto Unicode ni estructuras jerárquicas, por lo que XML es obligatorio para esos datos.

Explicación: La elección depende del contrato; XML destaca en documentos y vocabularios extensibles.

### Propuesta

Un contrato combina vocabularios y contenido mixto y reutiliza herramientas XML de transformación y firma. ¿Qué ventaja puede aportar XML en este escenario?

- A. Integrar namespaces, esquema y herramientas de transformación y firma. **(correcta)**
- B. Evitar acordar el contrato mediante la inferencia de tipos de los datos.
- C. Sustituir la validación del esquema por comprobar la buena formación.
- D. Obtener el significado de cada campo a partir del nombre de su etiqueta.

Explicación: En un contrato documental con vocabularios combinados, contenido mixto y herramientas XML ya existentes, XML permite aprovechar namespaces, esquemas y mecanismos de transformación y firma de ese ecosistema. Es una adecuación al caso, no una superioridad universal en tamaño, velocidad o seguridad. JSON también tiene mecanismos de esquema y firma. Ni la sintaxis XML ni un nombre de etiqueta acuerdan por sí solos el significado de negocio o demuestran conformidad.

- Error B: Inferir tipos de una muestra no reemplaza el contrato compartido. El escenario requiere acordar vocabularios, estructura y significado, aunque una herramienta ayude a generar un esquema.
- Error C: La buena formación comprueba sintaxis, no todas las restricciones del esquema. El contrato documental sigue necesitando la validación que haya exigido.
- Error D: Un nombre puede ser descriptivo, pero no proporciona automáticamente una definición de negocio inequívoca. Esa semántica debe formar parte de la documentación contractual.

- [W3C: Namespaces in XML 1.0](https://www.w3.org/TR/xml-names/) · 2.1 Basic Concepts, expanded names; 2.3 Comparing URI References; 3 Declaring Namespaces; 4 y 5 Qualified Names; 6.1 Scoping y 6.2 Defaulting · versión: Third Edition, W3C Recommendation, 08-12-2009; URI identifica, no obliga a recuperar un esquema; prefijo y nombre expandido diferenciados · comprobado: 2026-10-28
- [W3C: XML Schema Part 0, Primer](https://www.w3.org/TR/xmlschema-0/) · 2 Basic Concepts; 2.2.1 Occurrence Constraints; 3 Namespaces, Schemas and Qualification; 5.6 schemaLocation y 5.7 Conformance · versión: Second Edition, W3C Recommendation, 28-10-2004; texto introductorio no normativo de XSD 1.0, con conceptos comunes usados en los ejemplos · comprobado: 2026-10-28
- [W3C: XSLT 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction; 4 Expressions; 5 Template Rules; 7 Creating the Result Tree; 16 Output · versión: W3C Recommendation, 16-11-1999; versión explícita para conceptos compartidos y ejemplos de transformación. No es la última versión ni limita capacidades de versiones posteriores · comprobado: 2026-10-28
- [W3C: XML Signature Syntax and Processing 1.1](https://www.w3.org/TR/xmldsig-core1/) · 1 Introduction; 2 Signature Overview and Examples; 3 Processing Rules; 8 Security Considerations · versión: W3C Recommendation, 11-04-2013; solo existencia del ecosistema de firma y separación entre firma, significado y validez XSD, sin recomendar algoritmos · comprobado: 2026-10-28
- [IETF: RFC 8259, JSON](https://www.rfc-editor.org/rfc/rfc8259.html) · 1 Introduction; 2 JSON Grammar; 3 Values; 4 Objects; 5 Arrays; 6 Numbers; 7 Strings · versión: RFC 8259, STD 90, diciembre de 2017; formato textual independiente de lenguaje, también valores simples en el nivel superior · comprobado: 2026-10-28
- [JSON Schema: What is JSON Schema?](https://json-schema.org/overview/what-is-jsonschema) · What is JSON Schema?; How does JSON Schema work?: esquema, instancia y validador · versión: Introducción oficial del proyecto; no implica validación automática por analizar JSON ni incorpora XSD al formato · comprobado: 2026-10-28
- [IETF: RFC 7515, JSON Web Signature](https://www.rfc-editor.org/rfc/rfc7515.html) · 1 Introduction; 3 JSON Web Signature Overview: protección de integridad de contenido mediante firma o MAC · versión: RFC 7515, mayo de 2015; demuestra que la firma no es exclusiva de XML, sin revisión de algoritmos o recomendación criptográfica · comprobado: 2026-10-28

Partida: `ae14ad2a6eb931efd56dd2f5f0bddc4c68230d24ecae9f645585cafe9520c15f` · propuesta: `514f91c415f8375b89ca943eaebf74ba064df56398473c62bb6b558d2eeb675b`

## MAN-GSI-P18-049

Decisión: pending_review · acción: revise.

Motivo: Mantener sencillez e integración web y clave B; distractores próximos de validación, vocabularios e identidad de objetos sin falsas ventajas de transporte.

### Antes

¿Qué ventaja puede ofrecer JSON en muchas APIs?

- A. Proporcionar soporte nativo y obligatorio para XSD, incluida la validación de cualquier documento JSON con esquemas XML sin conversión.
- B. Modelo sencillo y buena integración con ecosistemas web y objetos/arrays. **(correcta)**
- C. Incorporar espacios de nombres XML que evitan colisiones entre propiedades procedentes de vocabularios definidos por organizaciones distintas.
- D. Actuar como protocolo de transporte sobre HTTP y establecer por sí mismo sesiones, reintentos y códigos de estado entre cliente y servidor.

Explicación: JSON suele ser cómodo para datos estructurados de APIs, aunque no es universalmente mejor.

### Propuesta

¿Qué ventaja puede ofrecer JSON en muchas APIs?

- A. Derivar las reglas del contrato de los nombres de sus propiedades.
- B. Usar objetos y arrays con parsers extendidos en el ecosistema web. **(correcta)**
- C. Distinguir vocabularios mediante prefijos de namespace declarados.
- D. Conservar referencias e identidad de objetos como parte del formato.

Explicación: JSON ofrece un modelo de datos pequeño con objetos y arrays y dispone de parsers muy extendidos, lo que facilita numerosos intercambios de APIs. Esa comodidad no incorpora validación automática de un contrato, namespaces XML o preservación de identidad de objetos. Las propiedades pueden acordarse por convenio y un esquema puede validar restricciones, pero son capas adicionales. JSON.parse y JSON.stringify ayudan en JavaScript; no convierten cualquier objeto o grafo en una representación equivalente sin pérdidas.

- Error A: Los nombres de propiedades no definen por sí solos un contrato ni todas sus restricciones. JSON Schema y un validador son mecanismos adicionales para esa función.
- Error C: Los nombres de propiedades JSON son cadenas y no declaran automáticamente namespaces XML. Un prefijo textual solo tendría el significado acordado por la aplicación.
- Error D: El formato no codifica de forma nativa identidad y referencias arbitrarias del grafo de objetos. En particular, JSON.stringify no serializa una referencia circular sin tratamiento adicional.

- [IETF: RFC 8259, JSON](https://www.rfc-editor.org/rfc/rfc8259.html) · 1 Introduction; 2 JSON Grammar; 3 Values; 4 Objects; 5 Arrays; 6 Numbers; 7 Strings · versión: RFC 8259, STD 90, diciembre de 2017; formato textual independiente de lenguaje, también valores simples en el nivel superior · comprobado: 2026-10-28
- [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) · Description; JavaScript and JSON differences; JSON.parse y JSON.stringify · versión: Documentación de Mozilla consultada: diferencias de sintaxis y APIs del motor; JSON no equivale a código JavaScript general · comprobado: 2026-10-28
- [JSON Schema: What is JSON Schema?](https://json-schema.org/overview/what-is-jsonschema) · What is JSON Schema?; How does JSON Schema work?: esquema, instancia y validador · versión: Introducción oficial del proyecto; no implica validación automática por analizar JSON ni incorpora XSD al formato · comprobado: 2026-10-28
- [W3C: Namespaces in XML 1.0](https://www.w3.org/TR/xml-names/) · 2.1 Basic Concepts, expanded names; 2.3 Comparing URI References; 3 Declaring Namespaces; 4 y 5 Qualified Names; 6.1 Scoping y 6.2 Defaulting · versión: Third Edition, W3C Recommendation, 08-12-2009; URI identifica, no obliga a recuperar un esquema; prefijo y nombre expandido diferenciados · comprobado: 2026-10-28
- [MDN: JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) · Description; Exceptions; Issue with serializing circular references · versión: Documentación de Mozilla; referencias circulares y pérdida de identidad no son preservación nativa del formato JSON · comprobado: 2026-10-28

Partida: `042be0228e98d6b97a4a07932a79a02e864dcc4526f48105b4e45c7c62fa64d2` · propuesta: `3fc31d514100acf0cd5ffee9d31993b3c9590bcd593ce83eb72e83de1cfc7b6e`

## MAN-GSI-P18-050

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas, clave C; precisar uso y host, sin convertir script en una clasificación formal por tipado o compilación.

### Antes

¿Qué es un lenguaje de script?

- A. Un lenguaje necesariamente interpretado y de tipado dinámico que nunca puede compilarse o someterse a comprobaciones estáticas.
- B. Un lenguaje exclusivo de shell para encadenar órdenes del sistema operativo, sin uso posible dentro de aplicaciones.
- C. Un lenguaje usado frecuentemente para automatización o comportamiento con un ciclo de ejecución/desarrollo ligero. **(correcta)**
- D. Un lenguaje de marcado que describe estructura documental mediante etiquetas, pero no expresa automatización o comportamiento.

Explicación: “Script” describe uso/entorno, no impone necesariamente interpretación pura o tipado dinámico.

### Propuesta

¿Qué es un lenguaje de script?

- A. Un lenguaje necesariamente interpretado y de tipado dinámico que nunca puede compilarse o someterse a comprobaciones estáticas.
- B. Un lenguaje exclusivo de shell para encadenar órdenes del sistema operativo, sin uso posible dentro de aplicaciones.
- C. Un lenguaje usado frecuentemente para automatización o comportamiento con un ciclo de ejecución/desarrollo ligero. **(correcta)**
- D. Un lenguaje de marcado que describe estructura documental mediante etiquetas, pero no expresa automatización o comportamiento.

Explicación: Script suele describir el uso de un lenguaje para automatizar tareas o aportar comportamiento dentro de un entorno anfitrión con un ciclo de desarrollo directo. No constituye una frontera formal que imponga interpretación pura, tipado dinámico o ejecución exclusiva en una shell. JavaScript y Python ilustran usos de scripting en contextos distintos. Un motor puede compilar internamente; eso no cambia por sí solo el propósito del programa ni convierte el lenguaje en marcado documental.

- Error A: El uso como script no prohíbe compilación o comprobaciones estáticas. Confunde una práctica de uso con requisitos universales de implementación y tipado.
- Error B: Las shells son un contexto posible, no el único. Hay scripting en navegadores, aplicaciones y otros entornos anfitriones.
- Error D: El marcado describe estructuras; un lenguaje de script expresa operaciones y comportamiento. La automatización no se obtiene solo por definir etiquetas.

- [MDN: JavaScript Guide, Introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction) · What is JavaScript?; JavaScript and Java; JavaScript and the ECMAScript specification · versión: Documentación de Mozilla; modificación observada 08-07-2026. Lenguajes distintos y entornos; no interpretación pura obligatoria · comprobado: 2026-10-28
- [TC39: ECMAScript, Overview](https://tc39.es/ecma262/multipage/overview.html) · 4 Overview; 4.1 Web Scripting; 4.2 Hosts and Implementations; 4.3 ECMAScript Overview · versión: Edición de trabajo observada titulada ECMAScript 2027, no presentada como edición final aprobada; solo conceptos establecidos de lenguaje y host · comprobado: 2026-10-28
- [Python documentation: Whetting Your Appetite](https://docs.python.org/3/tutorial/appetite.html) · 1 Whetting Your Appetite: automatización, extensión de aplicaciones, ciclo de desarrollo e intérprete · versión: Documentación observada Python 3.15.2; ejemplo de uso de scripting, no definición normativa universal de todos los lenguajes de script · comprobado: 2026-10-28
- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · 1.8 HTML vs XML syntax: text/html, XML MIME types, application/xhtml+xml y tratamiento distinto · versión: Living Standard consultado el 28-10-2026, cabecera 26-10-2026; XHTML es denominación histórica de la sintaxis XML para HTML · comprobado: 2026-10-28

Partida: `6b5db4deb891a5de93387524a3f81ba2795d94a4c5f82809a20697208a0f789b` · propuesta: `5f3fc8e170ac13d8255e09cdf5ad80bd486835cfbfa04091a1e064e190327027`

## MAN-GSI-P18-051

Decisión: pending_review · acción: revise.

Motivo: Mantener distinción Java/JavaScript y clave C; alternativas paralelas sobre variantes, compilación y host, sin pista de longitud o necesidad universal de JVM.

### Antes

¿JavaScript es lo mismo que Java?

- A. Sí, JavaScript es una edición reducida de Java.
- B. Solo se diferencian por la extensión del fichero.
- C. No; son lenguajes distintos con modelos, runtimes y ecosistemas diferentes. **(correcta)**
- D. JavaScript necesita JVM obligatoriamente.

Explicación: La similitud del nombre es una trampa clásica.

### Propuesta

¿JavaScript es lo mismo que Java?

- A. Son variantes del mismo lenguaje con bibliotecas estándar diferentes.
- B. Son el mismo lenguaje con distinto formato de código compilado.
- C. Son lenguajes distintos con modelos y entornos de ejecución propios. **(correcta)**
- D. Son el mismo lenguaje adaptado al navegador y al servidor.

Explicación: JavaScript y Java son lenguajes distintos aunque compartan parte de su apariencia sintáctica y un nombre parecido. Sus especificaciones, sistemas de tipos y modelos de objetos o clases no son intercambiables. JavaScript se relaciona con ECMAScript y puede ejecutarse en distintos hosts, sin una obligación general de usar la JVM. Que ambos existan en entornos de servidor o puedan combinarse mediante herramientas no los convierte en dos ediciones del mismo lenguaje.

- Error A: Las diferencias no se limitan a bibliotecas estándar de un lenguaje común. Las especificaciones y modelos del propio lenguaje son distintos.
- Error B: Cambiar el formato del código compilado no explica la diferencia de semántica y tipado entre Java y JavaScript. No se trata de dos salidas del mismo lenguaje.
- Error D: JavaScript también se usa fuera del navegador y la distinción no es una partición navegador/servidor de un lenguaje común. Son lenguajes diferentes.

- [MDN: JavaScript Guide, Introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction) · What is JavaScript?; JavaScript and Java; JavaScript and the ECMAScript specification · versión: Documentación de Mozilla; modificación observada 08-07-2026. Lenguajes distintos y entornos; no interpretación pura obligatoria · comprobado: 2026-10-28
- [TC39: ECMAScript, Overview](https://tc39.es/ecma262/multipage/overview.html) · 4 Overview; 4.1 Web Scripting; 4.2 Hosts and Implementations; 4.3 ECMAScript Overview · versión: Edición de trabajo observada titulada ECMAScript 2027, no presentada como edición final aprobada; solo conceptos establecidos de lenguaje y host · comprobado: 2026-10-28
- [Oracle: Java Language Specification, Introduction](https://docs.oracle.com/javase/specs/jls/se21/html/jls-1.html) · Chapter 1 Introduction, párrafos sobre tipado, clases, traducción y ejecución · versión: Java SE 21; versión concreta para distinguir el modelo del lenguaje, sin presentarla como última edición · comprobado: 2026-10-28

Partida: `b274a672cbc0b84a9b85dc9f5b2bee14def24da4a431ec30ce34a5cb56f22d22` · propuesta: `345dcb7911acd17a489298aae55b4212f2d378c0a54ad297413025532dc5f251`
