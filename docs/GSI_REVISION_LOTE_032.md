# GSI-EDITORIAL-032 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `4fd57501ffc398617045ff4bbe62394cfa57af2f214ae566916d9f749c87bfb6`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P18-010

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas ya contextualizados, con clave B; completar función, contexto, redundancia y alt vacío.

### Antes

¿Qué función tiene el atributo alt de una imagen cuando corresponde?

- A. Mostrar un tooltip visual al pasar el puntero, siendo obligatorio describir en él cada detalle decorativo de la imagen.
- B. Proporcionar una alternativa textual útil para accesibilidad y contextos donde la imagen no se presenta. **(correcta)**
- C. Repetir el nombre del archivo para que el navegador pueda descargarlo, aunque ese texto no comunique su función o contenido.
- D. Utilizar la misma descripción genérica en todas las imágenes, sin distinguir entre imágenes informativas, funcionales y decorativas.

Explicación: alt aporta equivalencia textual; su contenido depende de la función de la imagen.

### Propuesta

¿Qué función tiene el atributo alt de una imagen cuando corresponde?

- A. Mostrar un tooltip visual al pasar el puntero, siendo obligatorio describir en él cada detalle decorativo de la imagen.
- B. Proporcionar una alternativa textual útil para accesibilidad y contextos donde la imagen no se presenta. **(correcta)**
- C. Repetir el nombre del archivo para que el navegador pueda descargarlo, aunque ese texto no comunique su función o contenido.
- D. Utilizar la misma descripción genérica en todas las imágenes, sin distinguir entre imágenes informativas, funcionales y decorativas.

Explicación: Alt proporciona una alternativa textual cuyo contenido depende de la función de la imagen y de su contexto. Una imagen informativa necesita comunicar la información relevante; una imagen funcional puede necesitar expresar la acción o destino; una puramente decorativa suele llevar alt vacío. No es un inventario de todos los detalles ni un tooltip obligatorio. La equivalencia textual debe evitar redundancias y no garantiza por sí sola accesibilidad de toda la página.

- Error A: Alt no define un tooltip de puntero ni exige describir todos los detalles decorativos. Confunde alternativa funcional con información visual complementaria.
- Error C: El nombre del archivo no suele comunicar el significado o función. La descarga se determina por el recurso, no por repetir ese nombre en alt.
- Error D: Una descripción genérica común pierde las diferencias entre contenido, acción y decoración. La alternativa debe responder al propósito y contexto de cada imagen.

- [WHATWG HTML: Images](https://html.spec.whatwg.org/multipage/images.html) · 4.8.4.4 Requirements for providing text to act as an alternative for images: función de alt según contexto · versión: Living Standard; texto alternativo no equivale a tooltip ni obliga a describir imágenes puramente decorativas · comprobado: 2026-10-28
- [W3C WAI: An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) · Árbol de decisión: imágenes funcionales, informativas, redundantes y decorativas · versión: Tutorial WAI; equivalencia según función, con alt vacío donde corresponda, sin acreditar accesibilidad completa de la página · comprobado: 2026-10-28

Partida: `78a93504c0bd38549d5bd5df7a825ebb519d2057071440a6b813456e4f883f4e` · propuesta: `49a46d4b481612a24153aab2ba6d0f85e7e920af1ff47448dad0a2447d138f8b`

## MAN-GSI-P18-011

Decisión: pending_review · acción: revise.

Motivo: Conservar separación de responsabilidades y clave B; cuatro permutaciones comparables, sin presentar roles como capacidades excluyentes.

### Antes

¿Qué relación correcta existe entre HTML, CSS y JavaScript?

- A. CSS estructura datos y HTML ejecuta procesos del servidor.
- B. HTML estructura, CSS presenta y JavaScript añade comportamiento/programación. **(correcta)**
- C. JavaScript es una hoja de estilos y CSS un lenguaje de marcas.
- D. Los tres son protocolos de transporte.

Explicación: Separar responsabilidades es una regla básica de arquitectura web.

### Propuesta

¿Qué relación correcta existe entre HTML, CSS y JavaScript?

- A. HTML presenta; CSS programa; JavaScript estructura.
- B. HTML estructura; CSS presenta; JavaScript programa. **(correcta)**
- C. HTML programa; CSS estructura; JavaScript presenta.
- D. HTML estructura; CSS programa; JavaScript presenta.

Explicación: La división habitual asigna estructura y semántica del documento a HTML, presentación a CSS y programación a JavaScript. Son responsabilidades predominantes, no compartimentos sin interacción: CSS puede animar o adaptar una interfaz, HTML tiene controles e interacción declarativa y JavaScript puede modificar DOM y estilos. Separar responsabilidades ayuda a mantenerlas, pero no significa que cada cambio visual requiera JavaScript o que este solo se ejecute en navegadores.

- Error A: Invierte las funciones predominantes de los tres lenguajes. HTML no sustituye una hoja de estilo ni CSS el lenguaje de programación general del ejemplo.
- Error C: Asigna programación a HTML y estructura documental a CSS. Confunde las responsabilidades principales aunque los tres puedan intervenir en la interfaz final.
- Error D: Conserva el papel de HTML, pero intercambia CSS y JavaScript: una hoja de estilo presenta, mientras JavaScript permite programar comportamiento.

- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · Introducción; 1.8 HTML vs XML syntax: lenguaje, semántica y sintaxis de serialización · versión: Living Standard; se distingue HTML de XML, estilos y programación sin afirmar separación absoluta de capacidades · comprobado: 2026-10-28
- [W3C CSS 2.1: Introduction](https://www.w3.org/TR/CSS2/intro.html) · 2.1 y 2.2 tutoriales HTML/XML; 2.3 CSS processing model: presentación de documentos · versión: CSS 2.1, solo identidad y separación de responsabilidades; no catálogo de propiedades modernas · comprobado: 2026-10-28
- [MDN: What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript) · Introducción, comparación HTML/CSS/JavaScript y papel de las APIs del navegador · versión: Documentación educativa de Mozilla; roles predominantes, no afirmación de que toda interacción requiera JavaScript o que este solo exista en navegadores · comprobado: 2026-10-28

Partida: `9c95f422dd73a96f76803d47def1b2c81a869eb5debbd6718725db8ff324cc38` · propuesta: `8b1c1f72af52e2bd0bbb91de042d83af82ee2fc4266d6ee77335fba510e71321`

## MAN-GSI-P18-012

Decisión: pending_review · acción: revise.

Motivo: Conservar lenguaje de estilos y clave A; distractores próximos de marcado, XPath y XSLT sin relleno de gestión documental o correo.

### Antes

¿Qué es CSS?

- A. Un lenguaje de hojas de estilo para describir presentación de documentos. **(correcta)**
- B. Un lenguaje de consulta diseñado para seleccionar y transformar nodos XML mediante expresiones que recorren la estructura documental.
- C. Un sistema de gestión documental que almacena versiones, aplica permisos y controla el ciclo de vida completo de los contenidos.
- D. Un protocolo de correo que transporta mensajes y adjuntos entre servidores y define cómo se presenta visualmente cada documento recibido.

Explicación: CSS controla presentación y layout; no sustituye la estructura semántica HTML.

### Propuesta

¿Qué es CSS?

- A. Un lenguaje de hojas de estilo para presentar documentos. **(correcta)**
- B. Un lenguaje de marcado que define estructura y contenido.
- C. Un lenguaje de rutas para seleccionar nodos de documentos.
- D. Un lenguaje de transformación de árboles de documentos.

Explicación: CSS es un lenguaje de hojas de estilo que describe cómo presentar documentos estructurados, incluido su diseño visual. No sustituye la semántica de HTML o XML ni es un lenguaje de consulta XPath o de transformación XSLT. Sus selectores identifican elementos para aplicar reglas; esa selección al servicio de los estilos no convierte CSS en el mismo lenguaje que XPath. Cambiar el aspecto no cambia automáticamente el significado de un elemento.

- Error B: El marcado define elementos y estructura del contenido. CSS se aplica sobre esa estructura para describir presentación.
- Error C: La navegación y selección de nodos mediante expresiones de ruta caracteriza XPath. Los selectores de estilo tienen otra finalidad y sintaxis.
- Error D: Transformar árboles para producir otro resultado corresponde a un lenguaje como XSLT. Una hoja CSS no equivale a esa transformación del documento.

- [W3C CSS 2.1: Introduction](https://www.w3.org/TR/CSS2/intro.html) · 2.1 y 2.2 tutoriales HTML/XML; 2.3 CSS processing model: presentación de documentos · versión: CSS 2.1, solo identidad y separación de responsabilidades; no catálogo de propiedades modernas · comprobado: 2026-10-28
- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · Introducción; 1.8 HTML vs XML syntax: lenguaje, semántica y sintaxis de serialización · versión: Living Standard; se distingue HTML de XML, estilos y programación sin afirmar separación absoluta de capacidades · comprobado: 2026-10-28
- [W3C: XML Path Language (XPath) 3.1](https://www.w3.org/TR/xpath-31/) · Introducción y Path Expressions: expresiones sobre datos y navegación de nodos · versión: W3C Recommendation, 21-03-2017; finalidad de consulta/expresiones, no definición de esquema o transformación XSLT · comprobado: 2026-10-28
- [W3C: XSL Transformations (XSLT) 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction: transformación de documentos XML y árboles de resultado · versión: W3C Recommendation, 16-11-1999; solo función de transformación para distinguirla de DTD/XSD/XPath. No se presenta 1.0 como última versión o límite de versiones posteriores · comprobado: 2026-10-28

Partida: `469a414b2acc821311372f627ffb771706bab43dac64ee5f54272238403950a2` · propuesta: `e3b8baff6fcef2051871832cb0feb0f3f2471663463dff3df58619c6f12501a5`

## MAN-GSI-P18-013

Decisión: pending_review · acción: revise.

Motivo: Conservar adaptación responsive y clave C; caso de reordenación del mismo documento sin identificar modelos, comparando estrategias plausibles.

### Antes

¿Qué significa responsive design?

- A. Servir siempre una página distinta para cada modelo de móvil.
- B. Convertir HTML en XML.
- C. Adaptar la presentación al espacio, dispositivo y capacidades mediante técnicas como media queries y layouts flexibles. **(correcta)**
- D. Impedir el zoom del usuario.

Explicación: Responsive busca adaptación del layout y contenido sin depender de un dispositivo fijo.

### Propuesta

Un mismo documento debe reordenar columnas al estrecharse el viewport, sin identificar modelos concretos de dispositivo. ¿Qué enfoque ilustra responsive design?

- A. Generar un HTML diferente para cada modelo de dispositivo detectado.
- B. Reducir por zoom un lienzo fijo hasta que quepa en la pantalla.
- C. Combinar un layout flexible con media queries sobre el espacio. **(correcta)**
- D. Bloquear el zoom y la orientación para conservar el mismo lienzo.

Explicación: Responsive design adapta la presentación mediante disposiciones flexibles y condiciones sobre el espacio o capacidades del medio, en lugar de depender de una lista cerrada de modelos. Media queries son una de sus técnicas; no obligan a diseñar solo por tamaños comerciales de móvil. Ajustar no consiste en encoger un lienzo rígido ni impedir el zoom del usuario. La adaptación debe comprobarse con contenido real y no acredita por sí sola accesibilidad.

- Error A: Detectar modelos y generar páginas distintas no es la adaptación de un mismo documento al espacio descrita. Además acopla el diseño a una clasificación cambiante de dispositivos.
- Error B: Escalar un lienzo conserva sus relaciones rígidas y puede hacer el texto pequeño. No reordena el layout en función del espacio disponible.
- Error D: Bloquear ajustes del usuario no resuelve la adaptación de la presentación. Mantiene el problema del lienzo fijo en lugar de reorganizarlo.

- [MDN: Responsive web design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) · Introducción; Flexible layout; Media queries: adaptación al viewport y capacidades · versión: Documentación educativa; no identificación exhaustiva de modelos de dispositivo ni garantía de accesibilidad por usar media queries · comprobado: 2026-10-28
- [W3C: Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/) · Introducción; Media Features, width y height: condiciones sobre el medio y el viewport · versión: Candidate Recommendation Draft, 19-02-2026; se registra su estado de borrador y se usan conceptos básicos, no respaldo definitivo a todas sus características · comprobado: 2026-10-28

Partida: `dc79cfb2ecb51cd53dfcde05d358894fc469500df67bfec95ea0c73f72863111` · propuesta: `65eaa90393580fbc5f57fe0e24e4ab95ad8dcf45e5f88fdca3503e265d34dba5`

## MAN-GSI-P18-014

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación accesible del control y clave D; precisar nombre frente a descripción y comparar placeholder, validación y estilo.

### Antes

¿Qué objetivo tiene una etiqueta &lt;label&gt; asociada a un control de formulario?

- A. Mostrar un texto provisional dentro del control que sustituye permanentemente su nombre accesible y desaparece al escribir.
- B. Ejecutar la validación de los datos introducidos y bloquear el envío cuando el valor no cumple el formato requerido.
- C. Aplicar color, tipografía y posición visual al control sin establecer ninguna asociación semántica con su descripción.
- D. Dar una descripción accesible y facilitar interacción con el control. **(correcta)**

Explicación: La asociación label-control mejora accesibilidad y usabilidad.

### Propuesta

¿Qué objetivo tiene una etiqueta &lt;label&gt; asociada a un control de formulario?

- A. Mostrar un texto provisional dentro del campo mientras está vacío.
- B. Comprobar el formato antes de permitir el envío del formulario.
- C. Definir la apariencia visual sin asociar el texto con el control.
- D. Proporcionar un nombre al control mediante una etiqueta asociada. **(correcta)**

Explicación: Un label asociado correctamente proporciona una etiqueta que permite identificar el control y contribuye a su nombre accesible. Puede vincularse mediante for al ID del control o por anidamiento admitido. No es lo mismo que una descripción adicional ni que un placeholder que desaparece al escribir. La asociación también puede facilitar activación o enfoque conforme al control y la plataforma, sin convertir label en un validador o una regla CSS.

- Error A: Describe un placeholder. Un ejemplo provisional no sustituye la etiqueta visible y su asociación programática con el control.
- Error B: Las restricciones de entrada y validación pertenecen a otros atributos o lógica. Una etiqueta no comprueba el valor ni decide por sí sola el envío.
- Error C: Una coincidencia de color o posición no crea una relación de etiquetado. Label aporta semántica, no solo apariencia.

- [WHATWG HTML: The label element](https://html.spec.whatwg.org/multipage/forms.html#the-label-element) · The label element: caption, labeled control, for, asociación por ID o anidamiento y activation behavior · versión: Living Standard; se distingue nombre asociado de descripción adicional, placeholder y validación · comprobado: 2026-10-28
- [W3C WAI: Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/) · Associating labels explicitly y Associating labels implicitly; etiquetas para controles de formulario · versión: Tutorial WAI; etiqueta visible y vínculo programático, sin equiparar proximidad visual a asociación · comprobado: 2026-10-28
- [W3C WAI APG: Providing Accessible Names and Descriptions](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/) · What ARE Accessible Names and Descriptions?; How Are Name and Description Strings Derived? · versión: Guía APG; nombre identifica el control y descripción aporta información adicional, con mecanismos dependientes del rol · comprobado: 2026-10-28

Partida: `29fcaf315794f7aea62f4b08b97c4e2f448f1c782e01017d686fae62da78c94d` · propuesta: `a9f7035f57edfe50d7fda61dfdd1d02cd7d6f9256b578a52ec2cea62360cd319`

## MAN-GSI-P18-015

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y opciones bien comparables, con clave A; completar elementos vacíos y pertenencia de atributos.

### Antes

¿Qué diferencia conceptual hay entre elemento y atributo HTML?

- A. El elemento representa una unidad estructural; el atributo aporta propiedades o configuración al elemento. **(correcta)**
- B. El atributo encierra contenido y crea la estructura del documento; el elemento solo modifica una propiedad de ese atributo.
- C. Los atributos son unidades independientes que pueden existir fuera de una etiqueta y contener otros elementos como hijos.
- D. Los elementos solo aportan apariencia visual, mientras los atributos definen por sí solos toda la semántica del documento.

Explicación: Los atributos complementan la información del elemento.

### Propuesta

¿Qué diferencia conceptual hay entre elemento y atributo HTML?

- A. El elemento representa una unidad estructural; el atributo aporta propiedades o configuración al elemento. **(correcta)**
- B. El atributo encierra contenido y crea la estructura del documento; el elemento solo modifica una propiedad de ese atributo.
- C. Los atributos son unidades independientes que pueden existir fuera de una etiqueta y contener otros elementos como hijos.
- D. Los elementos solo aportan apariencia visual, mientras los atributos definen por sí solos toda la semántica del documento.

Explicación: Un elemento representa una unidad con significado dentro de la estructura del documento; un atributo del elemento aporta información o configuración mediante nombre y valor según sus reglas. No todos los elementos contienen hijos o texto: hay elementos vacíos. Un atributo no es un contenedor independiente de elementos hijos. La semántica de un elemento tampoco se reduce a la apariencia que tenga por CSS.

- Error B: Invierte la relación: los atributos pertenecen a elementos. No son los contenedores de contenido a los que se añade un elemento como propiedad.
- Error C: Un atributo no es una unidad autónoma con hijos de marcado. Se expresa como información del elemento en su sintaxis correspondiente.
- Error D: Los elementos aportan significado estructural o funcional. Los atributos pueden precisarlo, pero no reemplazan por sí solos toda esa semántica.

- [WHATWG HTML: Elements in the DOM](https://html.spec.whatwg.org/multipage/dom.html) · 3.2.1 Semantics; Elements in the DOM: significado de elementos y atributos · versión: Living Standard; semántica no inferida exclusivamente del aspecto visual · comprobado: 2026-10-28
- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · Introducción; 1.8 HTML vs XML syntax: lenguaje, semántica y sintaxis de serialización · versión: Living Standard; se distingue HTML de XML, estilos y programación sin afirmar separación absoluta de capacidades · comprobado: 2026-10-28

Partida: `f9f1428457d55657217fcc76582b67619dfc4cf30713434b2d861e629af72343` · propuesta: `59c0ff5cf109545e52dd97b24bc792a45ffd0fa53541e88e08efd76d6eb91963`

## MAN-GSI-P18-016

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la pregunta y cuatro conceptos próximos, con clave A; distinguir fuente, DOM, CSSOM y representación intermediaria sin adoptar un framework.

### Antes

¿Qué es el DOM en contexto web?

- A. Una representación programática en forma de árbol de un documento que scripts pueden consultar y modificar. **(correcta)**
- B. El texto fuente HTML recibido o escrito antes de que el navegador lo analice y construya su representación en memoria.
- C. La representación de estilos y reglas CSS que permite consultar y modificar hojas de estilo desde scripts.
- D. Una estructura mantenida por una biblioteca de interfaz para calcular cambios antes de aplicarlos al documento real.

Explicación: El DOM conecta documentos y APIs de programación.

### Propuesta

¿Qué es el DOM en contexto web?

- A. Una representación programática en forma de árbol de un documento que scripts pueden consultar y modificar. **(correcta)**
- B. El texto fuente HTML recibido o escrito antes de que el navegador lo analice y construya su representación en memoria.
- C. La representación de estilos y reglas CSS que permite consultar y modificar hojas de estilo desde scripts.
- D. Una estructura mantenida por una biblioteca de interfaz para calcular cambios antes de aplicarlos al documento real.

Explicación: DOM define un modelo e interfaces para representar y manipular documentos como árboles de nodos. El árbol puede resultar del análisis del texto fuente y cambiar después por programación; no tiene por qué coincidir literalmente con el HTML recibido. CSSOM representa hojas y reglas de estilo. Una biblioteca puede calcular cambios con una representación intermedia, pero esa representación no es por ello el árbol DOM del documento del navegador.

- Error B: El texto fuente es la entrada que se analiza. El árbol puede incorporar la recuperación del parser y cambios posteriores, por lo que no son el mismo objeto.
- Error C: La representación programática de hojas y reglas CSS corresponde a CSSOM. Puede relacionarse con elementos, pero no define el árbol DOM del documento.
- Error D: Una biblioteca puede usar un árbol intermediario para decidir actualizaciones. El documento real y sus APIs DOM son una representación distinta.

- [WHATWG: DOM Standard](https://dom.spec.whatwg.org/) · Trees; Nodes, node tree y document tree; Interface Node y Element · versión: Living Standard; modelo e interfaces programáticas del documento, distinto del texto fuente o árbol intermediario de biblioteca · comprobado: 2026-10-28
- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · Introducción; 1.8 HTML vs XML syntax: lenguaje, semántica y sintaxis de serialización · versión: Living Standard; se distingue HTML de XML, estilos y programación sin afirmar separación absoluta de capacidades · comprobado: 2026-10-28
- [W3C: CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1/) · Introducción; CSSStyleSheet y CSSRule: APIs para hojas y reglas de estilo · versión: Documento web consultado; solo diferencia de responsabilidad respecto al árbol DOM, sin garantizar implementación de todas sus APIs · comprobado: 2026-10-28
- [React documentation: Render and Commit](https://react.dev/learn/render-and-commit) · Render y Commit: cálculo de la actualización y cambios sobre el DOM · versión: Solo ejemplo de representación/cálculo intermediario de una biblioteca; no se introduce React ni se universaliza su implementación a todo framework · comprobado: 2026-10-28

Partida: `cda5242ba514d2477b73564c55174c2a1e749937c2fae733e66ec6a98707b883` · propuesta: `b49f96472c4b6f1b324d75579ced7ac49af9c28e8ef5eba67bb25f40fab4a7c6`

## MAN-GSI-P18-017

Decisión: pending_review · acción: revise.

Motivo: Conservar actualización continua y clave C; comparar mantenimiento, sintaxis y alcance sin atribuir soporte inmediato universal.

### Antes

¿Qué afirmación sobre HTML Living Standard es correcta?

- A. HTML quedó congelado definitivamente en 2014.
- B. Solo W3C XML define hoy HTML.
- C. HTML se mantiene como estándar vivo, con actualización continua de la especificación. **(correcta)**
- D. HTML moderno exige siempre XHTML.

Explicación: WHATWG mantiene el HTML Living Standard.

### Propuesta

¿Qué afirmación sobre HTML Living Standard es correcta?

- A. La norma está fijada a una edición cerrada publicada en 2014.
- B. La norma prescribe XML como única sintaxis de los documentos.
- C. La especificación se mantiene con actualización continua. **(correcta)**
- D. La especificación copia el comportamiento de un solo navegador.

Explicación: WHATWG mantiene HTML como Living Standard: la especificación evoluciona de forma continua. Eso no significa que todas las funciones estén implementadas inmediatamente en todos los navegadores o que no existan revisiones y snapshots para referencia. La norma define lenguaje, modelos de procesamiento y APIs; no es simplemente la documentación de un único producto. HTML tampoco exige usar su sintaxis XML.

- Error A: Confunde una referencia histórica de HTML5 con la evolución del Living Standard. La especificación actual no quedó congelada en esa edición.
- Error B: El estándar distingue sintaxis HTML y XML. El mantenimiento vivo no impone que todos los documentos se serialicen como XML.
- Error D: Los motores pueden tener diferencias de implementación. La especificación mantenida no se identifica con una copia del comportamiento de un solo navegador.

- [WHATWG HTML: History of the Living Standard](https://html.spec.whatwg.org/multipage/introduction.html) · 1.6 History, párrafo de 2011 sobre mantenimiento continuo y acuerdo de 2019; 1.8 sintaxis · versión: Living Standard consultado el 28-10-2026; cabecera observada con última actualización 26-10-2026. No se infiere disponibilidad inmediata de cada función · comprobado: 2026-10-28
- [WHATWG: Working Mode](https://whatwg.org/working-mode) · Standard; Normative issues: comunidad, editores, cambios y pruebas · versión: Procedimiento oficial consultado; complementa el mantenimiento continuo descrito en HTML 1.6, sin atribuirlo a un apartado ausente del FAQ · comprobado: 2026-10-28

Partida: `6d6ae0c1f1dea0eabd044509c65071d0423405c8609471cd52ffb663ccd9ce00` · propuesta: `d7d46489f8e5f7cfdc277f34a648c68e1b123683f9bc7bb0737a21799bba370c`

## MAN-GSI-P18-018

Decisión: pending_review · acción: revise.

Motivo: Conservar significado frente a apariencia y clave A; sustituir distractores ajenos por confusiones de equivalencia visual, clases y jerarquía.

### Antes

¿Qué diferencia hay entre contenido semántico y presentación?

- A. La semántica expresa significado/estructura; la presentación define apariencia. **(correcta)**
- B. No existe diferencia.
- C. La semántica solo se usa en CSS.
- D. La presentación debe codificarse siempre con tablas HTML.

Explicación: Separar contenido/semántica y estilo favorece mantenimiento y accesibilidad.

### Propuesta

¿Qué diferencia hay entre contenido semántico y presentación?

- A. La semántica expresa significado; la presentación determina apariencia. **(correcta)**
- B. La igualdad de apariencia implica igualdad de significado y estructura.
- C. Las clases de estilo sustituyen la función semántica de los elementos.
- D. El tamaño de fuente establece el nivel de encabezado del documento.

Explicación: La semántica expresa qué representa un elemento y cómo se relaciona con el contenido; la presentación decide su aspecto. Un encabezado puede cambiar de tamaño sin dejar de ser del nivel que expresa HTML, y dos bloques idénticos visualmente pueden tener funciones distintas. Las clases de CSS ayudan a aplicar estilos, pero su nombre no sustituye la semántica nativa que el navegador y otras herramientas pueden interpretar.

- Error B: El mismo aspecto no prueba el mismo significado. Un botón y un bloque de texto pueden parecer similares sin ofrecer la misma semántica o interacción.
- Error C: Una clase permite seleccionar elementos para estilos. No convierte por su nombre un div en encabezado, botón o región principal.
- Error D: El nivel de encabezado procede del elemento y su contexto semántico. Cambiar font-size no cambia un h2 en h1 o viceversa.

- [WHATWG HTML: Elements in the DOM](https://html.spec.whatwg.org/multipage/dom.html) · 3.2.1 Semantics; Elements in the DOM: significado de elementos y atributos · versión: Living Standard; semántica no inferida exclusivamente del aspecto visual · comprobado: 2026-10-28
- [W3C CSS 2.1: Introduction](https://www.w3.org/TR/CSS2/intro.html) · 2.1 y 2.2 tutoriales HTML/XML; 2.3 CSS processing model: presentación de documentos · versión: CSS 2.1, solo identidad y separación de responsabilidades; no catálogo de propiedades modernas · comprobado: 2026-10-28

Partida: `f6c38e932616eb9b7b14ba26b6342f4fbabde55347617725252ba4c417500a15` · propuesta: `78018e5877b8f245f4cdbcdb6657a8297b3d12e4c4e92bd20eda3a76f78a9bfe`

## MAN-GSI-P18-019

Decisión: pending_review · acción: revise.

Motivo: Conservar estructura tabular y clave C; cuatro prácticas cercanas de representación, con cabeceras según complejidad y no como simple decoración.

### Antes

¿Qué práctica es más adecuada al crear una tabla HTML de datos?

- A. Usar tablas para cualquier layout aunque no haya datos tabulares.
- B. Sustituir todos los textos por imágenes.
- C. Usar estructura de tabla real y encabezados adecuados cuando los datos son tabulares. **(correcta)**
- D. Eliminar encabezados para simplificar.

Explicación: La estructura semántica de tabla ayuda a interpretar relaciones entre datos.

### Propuesta

¿Qué práctica es más adecuada al crear una tabla HTML de datos?

- A. Distribuir valores en una cuadrícula de divs sin asociar cabeceras.
- B. Usar solo celdas td y destacar la primera fila mediante negrita.
- C. Usar table con th adecuados y relaciones de cabecera identificables. **(correcta)**
- D. Convertir cada fila en una imagen con el mismo texto alternativo.

Explicación: Una tabla de datos debe expresar las relaciones entre valores y cabeceras mediante estructura de tabla y encabezados adecuados. En tablas simples pueden bastar th y asociaciones de fila o columna; en otras conviene precisar scope o headers/ID según su complejidad. Caption puede identificar el tema cuando sea útil. El estilo visual por sí solo no crea esas relaciones y la técnica no justifica usar tablas para todo layout.

- Error A: Una cuadrícula sin asociaciones no comunica la estructura tabular a las herramientas del mismo modo que una tabla de datos adecuada. La colocación visual no sustituye las relaciones.
- Error B: Negrita solo cambia presentación. No identifica las celdas como encabezados ni define a qué datos se aplican.
- Error D: Las imágenes y un texto alternativo genérico pierden los valores y relaciones de cada fila. No preservan la semántica tabular.

- [WHATWG HTML: Tabular data](https://html.spec.whatwg.org/multipage/tables.html) · The table element; The th element; The td element; scope y headers: relaciones entre cabeceras y celdas · versión: Living Standard; tablas de datos, sin imponer una tabla HTML a cualquier layout visual · comprobado: 2026-10-28
- [W3C WAI: Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/) · Introducción y subapartados de encabezados, asociaciones, caption y tablas complejas · versión: Guía WAI; estructura según complejidad, sin prometer que negrita o color creen relaciones accesibles · comprobado: 2026-10-28
- [W3C WAI: An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) · Árbol de decisión: imágenes funcionales, informativas, redundantes y decorativas · versión: Tutorial WAI; equivalencia según función, con alt vacío donde corresponda, sin acreditar accesibilidad completa de la página · comprobado: 2026-10-28

Partida: `8f572549f2513013af6d1acb278abc1f2ba36a6be175ceb8260dfa09000c80f0` · propuesta: `fd23a71218fb804824dcacd540c58c1931a095daebd0db212f7c83f4ed01dbf8`

## MAN-GSI-P18-020

Decisión: pending_review · acción: revise.

Motivo: Conservar caso y cuatro alternativas bien delimitadas, con clave B; completar preferencia por semántica nativa, límites de ARIA y necesidad de comprobar interacción.

### Antes

Una página es visualmente correcta pero usa divs genéricos para todo y carece de títulos/landmarks. ¿Qué mejora es más apropiada?

- A. Mantener los \`div\` y añadir roles ARIA a todos ellos, aunque existan elementos nativos con semántica y comportamiento adecuados.
- B. Reestructurar con HTML semántico, jerarquía de encabezados y controles accesibles antes de depender de estilos. **(correcta)**
- C. Representar la jerarquía solo mediante tamaños y clases CSS, dejando el documento sin encabezados o landmarks identificables.
- D. Convertir el HTML a XML genérico, suponiendo que estar bien formado proporciona automáticamente semántica y accesibilidad web.

Explicación: La semántica debe estar en el documento, no inferirse solo por apariencia.

### Propuesta

Una página es visualmente correcta pero usa divs genéricos para todo y carece de títulos/landmarks. ¿Qué mejora es más apropiada?

- A. Mantener los \`div\` y añadir roles ARIA a todos ellos, aunque existan elementos nativos con semántica y comportamiento adecuados.
- B. Reestructurar con HTML semántico, jerarquía de encabezados y controles accesibles antes de depender de estilos. **(correcta)**
- C. Representar la jerarquía solo mediante tamaños y clases CSS, dejando el documento sin encabezados o landmarks identificables.
- D. Convertir el HTML a XML genérico, suponiendo que estar bien formado proporciona automáticamente semántica y accesibilidad web.

Explicación: La estructura semántica debe expresar encabezados, regiones y controles adecuados, en lugar de depender de la apariencia de divs genéricos. Conviene usar HTML nativo apropiado y añadir ARIA cuando sea necesario y correcto; un rol no implementa por sí solo teclado, foco o comportamiento. La mejora debe revisarse también con interacción y tecnologías de apoyo: semántica nativa no es una certificación automática de accesibilidad.

- Error A: Añadir roles indiscriminadamente puede ocultar o contradecir semántica y no proporciona todo el comportamiento de un control. No es mejor que usar el elemento nativo adecuado.
- Error C: Tamaño y clases CSS no convierten por sí mismos un bloque en encabezado o landmark. La estructura debe ser interpretable sin deducirla solo de su aspecto.
- Error D: Buena formación XML no asigna automáticamente significado, nombres accesibles, foco o comportamiento de controles web. Cambiar sintaxis no resuelve el problema descrito.

- [WHATWG HTML: Elements in the DOM](https://html.spec.whatwg.org/multipage/dom.html) · 3.2.1 Semantics; Elements in the DOM: significado de elementos y atributos · versión: Living Standard; semántica no inferida exclusivamente del aspecto visual · comprobado: 2026-10-28
- [W3C WAI APG: Read Me First](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/) · No ARIA is better than Bad ARIA: promesas y riesgos de roles sin comportamiento completo · versión: Guía APG; preferencia por semántica adecuada, sin prohibir ARIA en componentes que realmente lo necesiten · comprobado: 2026-10-28
- [W3C WAI APG: Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) · Introducción y HTML landmark role mappings: regiones semánticas y navegación por estructura · versión: Guía APG; roles de regiones, no certificación de accesibilidad global · comprobado: 2026-10-28
- [W3C: XML 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology, match y ausencia de case folding; 2.1 Well-Formed XML Documents; 2.3 AttValue; 2.8 DTD; 3 Logical Structures; 4.6 Predefined Entities · versión: W3C Recommendation, 26-11-2008; documentos completos frente a fragmentos, sintaxis y validez DTD diferenciadas · comprobado: 2026-10-28

Partida: `f23dabc7a608f3b54bef5e76d49cf5fb302aa9da7f11ef62eb3a62968bd9d781` · propuesta: `034e60ae7572ac28683800dba373975a86856a0fa5511ffeaa3965da5a152605`

## MAN-GSI-P18-021

Decisión: pending_review · acción: revise.

Motivo: Conservar marcado extensible y clave D; acotar el distractor SGML para que metalenguaje no sea una segunda definición defendible de XML.

### Antes

¿Qué es XML?

- A. Un lenguaje de marcado con un conjunto predefinido de elementos y semántica orientada a documentos web.
- B. Un formato ligero de intercambio que representa objetos y arrays mediante pares clave-valor y sintaxis textual.
- C. Un metalenguaje del que proceden otros lenguajes de marcado y cuya sintaxis es más amplia y compleja.
- D. Un lenguaje/sintaxis extensible para representar documentos y datos estructurados con etiquetas definidas por la aplicación. **(correcta)**

Explicación: XML permite definir vocabularios y estructuras, no una lista fija de etiquetas de negocio.

### Propuesta

¿Qué es XML?

- A. Un vocabulario fijo de etiquetas para documentos web.
- B. Una sintaxis de objetos y listas sin etiquetas de marcado.
- C. Un marco de marcado más general del que XML es una restricción.
- D. Una sintaxis de marcado extensible para datos y documentos. **(correcta)**

Explicación: XML ofrece una sintaxis de marcado extensible para representar documentos y datos estructurados. Las aplicaciones definen sus vocabularios, en vez de recibir una lista fija de etiquetas de negocio. La buena formación establece reglas básicas, y un mecanismo de esquema puede añadir restricciones del vocabulario. No es lo mismo que HTML, JSON o el marco más general SGML del que XML se diseñó como perfil restringido.

- Error A: Describe un vocabulario concreto de marcado, como el que HTML define para documentos web. XML no fija ese catálogo de etiquetas de negocio.
- Error B: Objetos y listas sin etiquetas remiten a una sintaxis como JSON. XML organiza su representación con elementos y atributos.
- Error C: El marco más general del que XML es una restricción es SGML. No se caracteriza XML como más amplio que sí mismo.

- [W3C: XML 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology, match y ausencia de case folding; 2.1 Well-Formed XML Documents; 2.3 AttValue; 2.8 DTD; 3 Logical Structures; 4.6 Predefined Entities · versión: W3C Recommendation, 26-11-2008; documentos completos frente a fragmentos, sintaxis y validez DTD diferenciadas · comprobado: 2026-10-28
- [W3C HTML 4.01: On SGML and HTML](https://www.w3.org/TR/html401/intro/sgmltut.html) · 3.1 Introduction to SGML: metalenguaje y aplicaciones de marcado · versión: HTML 4.01, 24-12-1999; solo relación histórica con SGML, no procesamiento del HTML moderno · comprobado: 2026-10-28
- [IETF RFC 8259: The JavaScript Object Notation (JSON) Data Interchange Format](https://www.rfc-editor.org/rfc/rfc8259.html) · 1 Introduction; 4 Objects y 5 Arrays: sintaxis de intercambio distinta de XML · versión: STD 90, diciembre de 2017; solo distinción de formatos, sin comparar superioridad universal · comprobado: 2026-10-28
- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · Introducción; 1.8 HTML vs XML syntax: lenguaje, semántica y sintaxis de serialización · versión: Living Standard; se distingue HTML de XML, estilos y programación sin afirmar separación absoluta de capacidades · comprobado: 2026-10-28

Partida: `8bffe7ed5d3e31fd7647fd0f3f25a7270e716b836b2e5d6f5573662213f8a755` · propuesta: `261ac55e561263cc913c643ae14267426fceb2e77e53ac86759052c2117d2eff`

## MAN-GSI-P18-023

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta y alternativas ya precisas, con clave D; distinguir buena formación, conformidad y mecanismo DTD/XSD sin equiparar declaración a validez.

### Antes

¿Qué significa que un XML sea válido respecto a un esquema?

- A. Que utiliza etiquetas cerradas, un único elemento raíz y anidamiento correcto, aunque incumpla tipos o estructura del esquema declarado.
- B. Que cualquier navegador puede mostrarlo sin errores visuales, independientemente de su sintaxis y del vocabulario aplicable.
- C. Que declara un DTD o XSD, aunque el contenido no haya sido validado o contradiga las restricciones incluidas en él.
- D. Que además de estar bien formado cumple las restricciones del vocabulario/esquema aplicable. **(correcta)**

Explicación: Validez añade conformidad estructural y de tipos según el mecanismo de validación.

### Propuesta

¿Qué significa que un XML sea válido respecto a un esquema?

- A. Que utiliza etiquetas cerradas, un único elemento raíz y anidamiento correcto, aunque incumpla tipos o estructura del esquema declarado.
- B. Que cualquier navegador puede mostrarlo sin errores visuales, independientemente de su sintaxis y del vocabulario aplicable.
- C. Que declara un DTD o XSD, aunque el contenido no haya sido validado o contradiga las restricciones incluidas en él.
- D. Que además de estar bien formado cumple las restricciones del vocabulario/esquema aplicable. **(correcta)**

Explicación: Estar bien formado satisface las reglas sintácticas básicas de XML. Ser válido respecto a un esquema añade el cumplimiento de sus restricciones concretas, como estructura, ocurrencias o tipos cuando el mecanismo los defina. XML 1.0 define validez DTD; XSD ofrece otro sistema de validación más rico. La propiedad de conformidad no nace de que una aplicación muestre el documento o de que se escriba una referencia al esquema. Debe especificarse el mecanismo y vocabulario de referencia.

- Error A: Describe buena formación sin garantizar las restricciones del esquema. Un texto puede estar correctamente anidado y contener un valor o estructura no permitido.
- Error B: El resultado visual de un navegador no demuestra conformidad con un esquema. Presentación y validación son procesos distintos.
- Error C: Declarar una ubicación o mecanismo no garantiza que el contenido lo cumpla. La existencia de esa referencia no sustituye verificar sus restricciones.

- [W3C: XML 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology, match y ausencia de case folding; 2.1 Well-Formed XML Documents; 2.3 AttValue; 2.8 DTD; 3 Logical Structures; 4.6 Predefined Entities · versión: W3C Recommendation, 26-11-2008; documentos completos frente a fragmentos, sintaxis y validez DTD diferenciadas · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Introducción; Element Declaration; schema-validity assessment y restricciones de estructura y ocurrencia · versión: W3C Recommendation, 05-04-2012; validez respecto al esquema concreto, distinta de mera buena formación o declaración de ubicación · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 2, Datatypes](https://www.w3.org/TR/xmlschema11-2/) · Built-in Datatypes, integer; constraining facets y tipos derivados · versión: W3C Recommendation, 05-04-2012; sistema de tipos de XSD, sin atribuirlo completo a una DTD · comprobado: 2026-10-28
- [W3C: XML Schema Part 0, Primer, second edition](https://www.w3.org/TR/xmlschema-0/) · 2 Basic Concepts: tipos, elementos, atributos y ocurrencias; ejemplos de documentos y esquema · versión: W3C Recommendation, 28-10-2004, introducción informativa a XSD 1.0; ejemplos locales se limitan a funciones comunes, no prueban soporte completo de XSD 1.1 · comprobado: 2026-10-28

Partida: `917af92b87276ddd3f59fd4d84b271714e1f4b7a3599e83301a2c17f7b5ed931` · propuesta: `323d9eb821c642e8fc8e6c1e4fd866d6b98e44639686978b8af3009f7e901597`

## MAN-GSI-P18-024

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y cuatro reglas comparables, con clave C; precisar documento completo frente a fragmento y nodos que no son elementos raíz.

### Antes

¿Qué regla de XML es correcta?

- A. Puede haber varios elementos raíz hermanos.
- B. Las etiquetas no necesitan cerrarse.
- C. Debe existir un único elemento raíz del documento. **(correcta)**
- D. XML no distingue mayúsculas y minúsculas.

Explicación: Un documento XML bien formado tiene exactamente un elemento raíz.

### Propuesta

¿Qué regla de XML es correcta?

- A. Puede haber varios elementos raíz hermanos.
- B. Las etiquetas no necesitan cerrarse.
- C. Debe existir un único elemento raíz del documento. **(correcta)**
- D. XML no distingue mayúsculas y minúsculas.

Explicación: Un documento XML bien formado tiene exactamente un elemento documento o raíz. Puede contener otros elementos dentro de él, además de comentarios o instrucciones de procesamiento en los lugares permitidos. Esos nodos no son raíces adicionales. No se confunde un documento completo con ciertos fragmentos o entidades externas analizadas, que tienen reglas de contexto distintas.

- Error A: Dos elementos raíz hermanos no forman un documento XML completo bien formado. Pueden ser contenido de otro elemento o tratarse como fragmento en otro contexto.
- Error B: Los elementos no vacíos necesitan un cierre correspondiente; un elemento vacío puede usar la forma autocerrada. No se omiten cierres libremente.
- Error D: La comparación de nombres XML no realiza normalización general de mayúsculas. Nombres que difieren en caso son distintos.

- [W3C: XML 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology, match y ausencia de case folding; 2.1 Well-Formed XML Documents; 2.3 AttValue; 2.8 DTD; 3 Logical Structures; 4.6 Predefined Entities · versión: W3C Recommendation, 26-11-2008; documentos completos frente a fragmentos, sintaxis y validez DTD diferenciadas · comprobado: 2026-10-28

Partida: `c2d87c91f33cb84e1ecf18f580cd610a43c8e41391bac612c7ad8f3f0c4d464a` · propuesta: `ee4aff315ea855197abcb4aa7c8e3a713d318b76a13c947787e0b91413b49e45`

## MAN-GSI-P18-025

Decisión: pending_review · acción: revise.

Motivo: Conservar regla de anidamiento y clave B; microcaso con cuatro documentos de una raíz que discrimina cruces, cierres ausentes y cierres sin apertura.

### Antes

¿Qué regla de anidamiento exige XML?

- A. Los elementos pueden cruzarse libremente.
- B. Los elementos deben cerrarse y anidarse correctamente, sin solapamiento. **(correcta)**
- C. Solo el elemento raíz necesita cierre.
- D. Las etiquetas se interpretan sin orden.

Explicación: El anidamiento correcto es una regla sintáctica esencial de XML.

### Propuesta

¿Qué fragmento respeta los cierres y el anidamiento de elementos de XML?

- A. &lt;raiz&gt;&lt;a&gt;&lt;b&gt;&lt;/a&gt;&lt;/b&gt;&lt;/raiz&gt;
- B. &lt;raiz&gt;&lt;a&gt;&lt;b/&gt;&lt;/a&gt;&lt;/raiz&gt; **(correcta)**
- C. &lt;raiz&gt;&lt;a&gt;&lt;b/&gt;&lt;/raiz&gt;
- D. &lt;raiz&gt;&lt;a&gt;&lt;/b&gt;&lt;/a&gt;&lt;/raiz&gt;

Explicación: El fragmento con b autocerrado dentro de a cierra después a y finalmente raiz. Sus delimitaciones no se cruzan. En XML, el cierre debe corresponder al elemento abierto que se está terminando y respetar el anidamiento; un elemento vacío puede cerrarse en su propia etiqueta. No se aplica la recuperación de errores propia del análisis HTML para convertir marcado XML mal anidado en un documento bien formado.

- Error A: Cierra a mientras b sigue abierto y después intenta cerrar b. Los límites de los dos elementos se cruzan.
- Error C: Tras b autocerrado queda a abierto. Cerrar directamente raiz no proporciona el cierre correspondiente de a.
- Error D: Aparece un cierre de b sin un inicio de b correspondiente. Que después se cierre a no corrige ese desajuste.

- [W3C: XML 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology, match y ausencia de case folding; 2.1 Well-Formed XML Documents; 2.3 AttValue; 2.8 DTD; 3 Logical Structures; 4.6 Predefined Entities · versión: W3C Recommendation, 26-11-2008; documentos completos frente a fragmentos, sintaxis y validez DTD diferenciadas · comprobado: 2026-10-28

Partida: `576e3938331a071c5cf77c807755354b143f64c6b253de6874513c8c4ef63620` · propuesta: `5ae94a1cd68bcdfce108c25433b7e53f14f88597ed704e255c6ab6fd99daa3cd`

## MAN-GSI-P18-026

Decisión: pending_review · acción: revise.

Motivo: Corregir la errata confirmada Elemento/Elemento y conservar concepto y clave B; usar Dato/dato y un namespace común para excluir confusiones de ámbito.

### Antes

¿XML distingue mayúsculas y minúsculas en nombres?

- A. No, todos los nombres se normalizan a minúsculas.
- B. Sí, es sensible a mayúsculas/minúsculas. **(correcta)**
- C. Solo en atributos numéricos.
- D. Depende del navegador y no del estándar.

Explicación: Elemento y Elemento son nombres distintos en XML.

### Propuesta

En XML, dos elementos del mismo namespace se llaman Dato y dato. ¿Qué relación hay entre esos nombres?

- A. Identifican el mismo nombre tras normalizarlo a minúsculas.
- B. Son nombres distintos por la diferencia de mayúsculas. **(correcta)**
- C. Solo se distinguen si llevan atributos de tipo numérico.
- D. Son equivalentes al declararse en el mismo namespace.

Explicación: Dato y dato son nombres distintos en XML: la comparación no elimina diferencias de mayúsculas y minúsculas. Si comparten el mismo espacio de nombres, su nombre local sigue siendo diferente. La regla no depende del navegador o de que haya atributos numéricos. Se corrige la errata del feedback anterior, que repetía dos veces Elemento al afirmar que eran nombres distintos.

- Error A: XML no realiza ese case folding general al comparar nombres. Convertir ambos a minúsculas cambiaría la regla y perdería la distinción.
- Error C: La comparación de los nombres no depende del tipo o presencia de atributos. El caso del nombre local ya los diferencia.
- Error D: Compartir un URI de namespace no iguala nombres locales diferentes. Un nombre expandido incluye ambos componentes.

- [W3C: XML 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology, match y ausencia de case folding; 2.1 Well-Formed XML Documents; 2.3 AttValue; 2.8 DTD; 3 Logical Structures; 4.6 Predefined Entities · versión: W3C Recommendation, 26-11-2008; documentos completos frente a fragmentos, sintaxis y validez DTD diferenciadas · comprobado: 2026-10-28
- [W3C: Namespaces in XML 1.0, third edition](https://www.w3.org/TR/xml-names/) · Declaring Namespaces; Using Qualified Names; expanded names: URI de namespace y nombre local · versión: W3C Recommendation, 08-12-2009; una vinculación de namespace no elimina diferencias de mayúsculas del nombre local · comprobado: 2026-10-28

Partida: `d4631765fee53f790756947ec5fba5a7a6294ce89b3276622dfc0e496f32e2c3` · propuesta: `c1c2a4199199fd430b5776f4ef4bb1e6b7e0c10eb0ba683ce62c40ee61cd1509`

## MAN-GSI-P18-027

Decisión: pending_review · acción: revise.

Motivo: Conservar valores citados y clave A; opciones breves comparables, comillas emparejadas y distinción con atributos HTML sin comillas.

### Antes

¿Cómo deben escribirse los valores de atributos XML?

- A. Entre comillas simples o dobles conforme a la sintaxis XML. **(correcta)**
- B. Obligatoriamente entre comillas dobles; las comillas simples no son válidas para delimitar atributos XML.
- C. Sin comillas cuando el valor no contiene espacios, caracteres reservados ni referencias a entidades.
- D. Entre paréntesis después del nombre del atributo, siguiendo la misma sintaxis que una llamada a función.

Explicación: Los valores de atributos deben ir citados.

### Propuesta

¿Cómo deben escribirse los valores de atributos XML?

- A. Entre comillas simples o dobles, con el cierre correspondiente. **(correcta)**
- B. Entre comillas dobles; las simples no delimitan atributos.
- C. Sin comillas si el valor no contiene espacios.
- D. Entre paréntesis después del nombre del atributo.

Explicación: Los valores de atributos XML deben delimitarse con comillas simples o dobles emparejadas. El delimitador elegido no puede aparecer sin tratamiento adecuado dentro de ese mismo valor; el otro tipo puede usarse como carácter normal cuando corresponda. La gramática también regula caracteres como menor que y ampersand. No se transfieren a XML las reglas de HTML que permiten algunos valores sin comillas.

- Error B: La gramática AttValue admite ambas clases de comilla, con apertura y cierre correspondientes. No reserva la delimitación a las dobles.
- Error C: Aunque el valor no tenga espacios, XML exige delimitadores de comillas. Esa abreviación de ciertos atributos HTML no es una regla XML.
- Error D: Los paréntesis no son los delimitadores de valor de atributo de la sintaxis XML. No se usa la notación de una llamada a función.

- [W3C: XML 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology, match y ausencia de case folding; 2.1 Well-Formed XML Documents; 2.3 AttValue; 2.8 DTD; 3 Logical Structures; 4.6 Predefined Entities · versión: W3C Recommendation, 26-11-2008; documentos completos frente a fragmentos, sintaxis y validez DTD diferenciadas · comprobado: 2026-10-28

Partida: `24d9cb96c951d57e097c8a32a15c9a994f34b9d97fa0c43902e0cac100acb779` · propuesta: `6d08ac8df45b0bf094f34e146ccbf71c6febb4cd07713439b2a58a4690b493bc`

## MAN-GSI-P18-028

Decisión: pending_review · acción: revise.

Motivo: Conservar representación de caracteres y clave D; precisar referencia frente a entidad, código numérico, CDATA y namespace.

### Antes

¿Qué es una entidad XML predefinida como &amp;lt;?

- A. Un prefijo declarado para identificar de forma abreviada el URI de un espacio de nombres XML.
- B. Una sección CDATA que permite incluir texto sin interpretar sus caracteres como marcas del documento.
- C. Una referencia numérica que identifica un carácter mediante su código decimal o hexadecimal.
- D. Una forma de representar ciertos caracteres con significado especial en la sintaxis. **(correcta)**

Explicación: Las referencias de entidad permiten representar caracteres reservados.

### Propuesta

¿Qué es &amp;lt; cuando aparece en el contenido de un documento XML?

- A. Un prefijo para identificar un espacio de nombres XML.
- B. Una sección CDATA que conserva texto sin analizar marcas.
- C. Una referencia numérica de carácter en notación decimal.
- D. Una referencia con nombre a la entidad predefinida lt. **(correcta)**

Explicación: En contenido XML, &amp;lt; es una referencia con nombre a la entidad predefinida lt y permite representar el carácter menor que sin que se interprete como inicio de marcado. No es la entidad en abstracto ni una sección CDATA. Una referencia numérica como &amp;\#60; puede representar el mismo carácter mediante otra notación. Las reglas sobre cuándo escapar un carácter dependen del contexto; no se afirma que todos los signos deban reemplazarse siempre.

- Error A: Un prefijo se vincula con un espacio de nombres y participa en nombres cualificados. &amp;lt; es una referencia de entidad, no ese prefijo.
- Error B: CDATA usa sus propios delimitadores para una sección de texto. Una referencia con nombre es otro mecanismo y no abre una sección CDATA.
- Error C: La notación numérica empieza con &amp;\# y expresa un código. &amp;lt; usa un nombre predefinido, aunque pueda dar el mismo carácter que &amp;\#60;.

- [W3C: XML 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology, match y ausencia de case folding; 2.1 Well-Formed XML Documents; 2.3 AttValue; 2.8 DTD; 3 Logical Structures; 4.6 Predefined Entities · versión: W3C Recommendation, 26-11-2008; documentos completos frente a fragmentos, sintaxis y validez DTD diferenciadas · comprobado: 2026-10-28
- [W3C: Namespaces in XML 1.0, third edition](https://www.w3.org/TR/xml-names/) · Declaring Namespaces; Using Qualified Names; expanded names: URI de namespace y nombre local · versión: W3C Recommendation, 08-12-2009; una vinculación de namespace no elimina diferencias de mayúsculas del nombre local · comprobado: 2026-10-28

Partida: `c4f9ddd40ffd85839e3a0ce9a214216233d633e9ad837ce8cc934c464303c080` · propuesta: `0056042bee69c6b0dbe8044a57a8242f2e8a48d302c0d9fcd57570fb16a4a187`

## MAN-GSI-P18-029

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y cuatro mecanismos próximos, con clave C; completar subconjuntos y límites de tipos sin decir que DTD carezca de ellos.

### Antes

¿Qué es una DTD?

- A. Un esquema XML escrito en XML que define tipos simples y complejos, elementos y restricciones.
- B. Un lenguaje de consulta que selecciona nodos de un documento XML mediante expresiones de ruta.
- C. Un mecanismo clásico para declarar estructura y restricciones de un vocabulario XML mediante sintaxis propia heredada de SGML. **(correcta)**
- D. Un lenguaje de transformación que genera otros documentos a partir de un árbol XML.

Explicación: DTD valida estructura, pero su sistema de tipos es más limitado que XSD.

### Propuesta

¿Qué es una DTD?

- A. Un esquema XML escrito en XML que define tipos simples y complejos, elementos y restricciones.
- B. Un lenguaje de consulta que selecciona nodos de un documento XML mediante expresiones de ruta.
- C. Un mecanismo clásico para declarar estructura y restricciones de un vocabulario XML mediante sintaxis propia heredada de SGML. **(correcta)**
- D. Un lenguaje de transformación que genera otros documentos a partir de un árbol XML.

Explicación: Una DTD declara elementos, modelos de contenido, atributos y otras reglas del vocabulario mediante la sintaxis definida para este mecanismo de XML y heredada de SGML. Puede estar en un subconjunto interno o externo. Tiene tipos y restricciones propios, pero no el sistema de tipos de datos de XSD. No es un programa de consulta XPath o transformación XSLT. Declarar una DTD no demuestra por sí mismo que el documento la cumpla.

- Error A: Describe un esquema XSD basado en XML con tipos simples y complejos. Una DTD emplea otra sintaxis y otro conjunto de restricciones.
- Error B: La selección de nodos por expresiones de ruta corresponde a XPath. No define por sí sola las declaraciones de un vocabulario DTD.
- Error D: La generación de resultados mediante transformaciones corresponde a XSLT. Una DTD declara restricciones, no instrucciones de transformación.

- [W3C: XML 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology, match y ausencia de case folding; 2.1 Well-Formed XML Documents; 2.3 AttValue; 2.8 DTD; 3 Logical Structures; 4.6 Predefined Entities · versión: W3C Recommendation, 26-11-2008; documentos completos frente a fragmentos, sintaxis y validez DTD diferenciadas · comprobado: 2026-10-28
- [W3C HTML 4.01: On SGML and HTML](https://www.w3.org/TR/html401/intro/sgmltut.html) · 3.1 Introduction to SGML: metalenguaje y aplicaciones de marcado · versión: HTML 4.01, 24-12-1999; solo relación histórica con SGML, no procesamiento del HTML moderno · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Introducción; Element Declaration; schema-validity assessment y restricciones de estructura y ocurrencia · versión: W3C Recommendation, 05-04-2012; validez respecto al esquema concreto, distinta de mera buena formación o declaración de ubicación · comprobado: 2026-10-28
- [W3C: XML Path Language (XPath) 3.1](https://www.w3.org/TR/xpath-31/) · Introducción y Path Expressions: expresiones sobre datos y navegación de nodos · versión: W3C Recommendation, 21-03-2017; finalidad de consulta/expresiones, no definición de esquema o transformación XSLT · comprobado: 2026-10-28
- [W3C: XSL Transformations (XSLT) 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction: transformación de documentos XML y árboles de resultado · versión: W3C Recommendation, 16-11-1999; solo función de transformación para distinguirla de DTD/XSD/XPath. No se presenta 1.0 como última versión o límite de versiones posteriores · comprobado: 2026-10-28

Partida: `c10e24a418cb54d9df361e401da4952d9ac9e858f640b298549337e3080a0f84` · propuesta: `561d0c20790e4c9cec8543ad75ea4da252e10166e0118d314fc46cc14d9dbda3`

## MAN-GSI-P18-030

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas bien diferenciadas, con clave B; completar conformidad respecto al esquema y relación con otras tecnologías.

### Antes

¿Qué es XSD?

- A. Una declaración de estructura XML con sintaxis heredada de SGML y un sistema de tipos más limitado.
- B. XML Schema Definition, un lenguaje de esquema basado en XML con tipos y restricciones ricas. **(correcta)**
- C. Un lenguaje de expresiones que selecciona nodos y valores dentro de un árbol XML.
- D. Un lenguaje declarativo que transforma documentos XML en otros documentos o formatos de salida.

Explicación: XSD permite definir estructuras, tipos, cardinalidades y restricciones.

### Propuesta

¿Qué es XSD?

- A. Una declaración de estructura XML con sintaxis heredada de SGML y un sistema de tipos más limitado.
- B. XML Schema Definition, un lenguaje de esquema basado en XML con tipos y restricciones ricas. **(correcta)**
- C. Un lenguaje de expresiones que selecciona nodos y valores dentro de un árbol XML.
- D. Un lenguaje declarativo que transforma documentos XML en otros documentos o formatos de salida.

Explicación: XSD es un lenguaje de esquema basado en XML que permite definir estructuras y tipos, además de restricciones como ocurrencias o valores admitidos. La validación se realiza respecto a un esquema concreto; no se obtiene solo por enlazarlo o por estar bien formado. Sus conceptos son distintos de una DTD, de las expresiones XPath y de las transformaciones XSLT, aunque esas tecnologías puedan combinarse en una solución.

- Error A: Corresponde al mecanismo DTD y su sintaxis propia. XSD tiene una representación XML y un sistema de tipos diferente.
- Error C: La selección y cálculo mediante expresiones sobre nodos describe XPath. No es la finalidad del lenguaje de esquema XSD.
- Error D: Transformar un documento en otro resultado describe XSLT. Un esquema XSD declara condiciones de conformidad.

- [W3C: XSD 1.1 Part 1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Introducción; Element Declaration; schema-validity assessment y restricciones de estructura y ocurrencia · versión: W3C Recommendation, 05-04-2012; validez respecto al esquema concreto, distinta de mera buena formación o declaración de ubicación · comprobado: 2026-10-28
- [W3C: XSD 1.1 Part 2, Datatypes](https://www.w3.org/TR/xmlschema11-2/) · Built-in Datatypes, integer; constraining facets y tipos derivados · versión: W3C Recommendation, 05-04-2012; sistema de tipos de XSD, sin atribuirlo completo a una DTD · comprobado: 2026-10-28
- [W3C: XML Schema Part 0, Primer, second edition](https://www.w3.org/TR/xmlschema-0/) · 2 Basic Concepts: tipos, elementos, atributos y ocurrencias; ejemplos de documentos y esquema · versión: W3C Recommendation, 28-10-2004, introducción informativa a XSD 1.0; ejemplos locales se limitan a funciones comunes, no prueban soporte completo de XSD 1.1 · comprobado: 2026-10-28
- [W3C: XML 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1.2 Terminology, match y ausencia de case folding; 2.1 Well-Formed XML Documents; 2.3 AttValue; 2.8 DTD; 3 Logical Structures; 4.6 Predefined Entities · versión: W3C Recommendation, 26-11-2008; documentos completos frente a fragmentos, sintaxis y validez DTD diferenciadas · comprobado: 2026-10-28
- [W3C: XML Path Language (XPath) 3.1](https://www.w3.org/TR/xpath-31/) · Introducción y Path Expressions: expresiones sobre datos y navegación de nodos · versión: W3C Recommendation, 21-03-2017; finalidad de consulta/expresiones, no definición de esquema o transformación XSLT · comprobado: 2026-10-28
- [W3C: XSL Transformations (XSLT) 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction: transformación de documentos XML y árboles de resultado · versión: W3C Recommendation, 16-11-1999; solo función de transformación para distinguirla de DTD/XSD/XPath. No se presenta 1.0 como última versión o límite de versiones posteriores · comprobado: 2026-10-28

Partida: `0958a4c5f9e8d1ff65cf84a2364d9f2cc7eb072f926d53e6956e4c4460d97973` · propuesta: `e838ffd5061bb4bcde51c5a4a3982372e7c0fc5eb6887d06e5b8afc137b90397`
