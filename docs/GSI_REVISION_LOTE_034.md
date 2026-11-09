# GSI-EDITORIAL-034 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `7fd400d2b9878cef2708b238ebbf5ccd62013de517c18f735413c0c59c5bc436`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P18-052

Decisión: pending_review · acción: revise.

Motivo: Conservar scripting de shell y clave A; acotar interpretación nativa de Bash y comparar otros lenguajes realmente usados en automatización.

### Antes

¿Qué lenguaje de script es típico en shells Unix/Linux?

- A. Shell/Bash y otros shells compatibles. **(correcta)**
- B. XSD.
- C. CSS.
- D. SGML.

Explicación: Los shells se usan ampliamente para automatización de sistemas Unix/Linux.

### Propuesta

En Unix/Linux, ¿qué lenguaje interpreta Bash de forma nativa en sus scripts?

- A. Lenguaje de shell de tipo sh, con extensiones propias de Bash. **(correcta)**
- B. JavaScript interpretado por un motor de ECMAScript.
- C. Lenguaje Python con acceso a sus bibliotecas de automatización.
- D. Lenguaje PowerShell basado en cmdlets y objetos.

Explicación: Bash interpreta un lenguaje de shell de tipo sh y añade extensiones propias. Puede leer órdenes de un archivo de script o de la entrada y ejecutar programas externos. Invocar Python u otro intérprete desde un script no cambia el lenguaje que Bash analiza de forma nativa. Tampoco toda shell Unix es Bash ni toda extensión de Bash es portable a cualquier intérprete sh; la compatibilidad depende de la construcción y del modo utilizados.

- Error B: Bash no interpreta de forma nativa el lenguaje ECMAScript. Puede lanzar otro programa que ejecute JavaScript, lo cual no lo convierte en el lenguaje de su script.
- Error C: Python es útil para automatización, pero su sintaxis la procesa su propio intérprete. Bash puede invocarlo como programa externo; son niveles distintos.
- Error D: PowerShell tiene su lenguaje y modelo de objetos. Que también exista fuera de Windows no lo convierte en la sintaxis nativa de Bash.

- [GNU Bash manual, publicado por Debian](https://manpages.debian.org/trixie/bash/bash.1.en.html) · NAME; DESCRIPTION; Shell Grammar; POSIX Mode: intérprete de comandos de tipo sh con extensiones · versión: Manual GNU Bash 5.2, 19-09-2022, paquete Debian trixie 5.2.37-2+b10; publicación del distribuidor con copyright FSF. Respaldo leído tras fallar GNU y Savannah; no se presenta como última versión de Bash · comprobado: 2026-10-28
- [Microsoft: What is PowerShell?](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.5) · Command-line Shell; Scripting language: automatización, objetos .NET, Windows/Linux/macOS · versión: Documentación PowerShell 7.5; lenguaje y plataforma, sin afirmar exclusividad de Windows o equivalencia de todos los shells · comprobado: 2026-10-28
- [MDN: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) · Introducción: lenguaje interpretado o compilado JIT, funciones de primera clase y hosts fuera del navegador · versión: Documentación de Mozilla consultada; modos de implementación y usos, no clasificación absoluta por tipado · comprobado: 2026-10-28
- [Python: Glossary](https://docs.python.org/3/glossary.html#term-interpreted) · interpreted; bytecode; native code: compilación de bytecode y ejecución mediante intérprete · versión: Documentación observada Python 3.15.2; definición y ejemplo de implementación, sin afirmar que todo lenguaje de script exija interpretación pura · comprobado: 2026-10-28

Partida: `f84c7a0715e31e5c2b7743fef6167e8ee743430cc6541dc6a92c9d982150d03f` · propuesta: `56c3da92b806eb689fd44e3220fac40e35b3c881b615e2f08fd69d667a779c78`

## MAN-GSI-P18-053

Decisión: pending_review · acción: revise.

Motivo: Conservar automatización administrativa PowerShell y clave D; quitar referencia a la pregunta anterior y precisar cmdlets/objetos sin exclusividad de plataforma.

### Antes

¿Qué herramienta cumple un papel similar de automatización administrativa en Windows?

- A. XPath.
- B. RSS.
- C. XSLT exclusivamente.
- D. PowerShell. **(correcta)**

Explicación: PowerShell es un shell/lenguaje de automatización moderno.

### Propuesta

¿Qué entorno de automatización combina cmdlets y un pipeline de objetos, también en Windows?

- A. cmd.exe.
- B. GNU Bash.
- C. Python.
- D. PowerShell. **(correcta)**

Explicación: PowerShell combina una shell y un lenguaje de automatización con cmdlets y un pipeline que puede transportar objetos .NET. Se usa en Windows, Linux y macOS. La característica preguntada es ese modelo nativo de comandos y objetos, no la posibilidad genérica de automatizar, que también ofrecen otras herramientas. La salida de un programa externo puede seguir siendo texto y no se transforma por ello en un objeto de negocio completamente interpretado.

- Error A: cmd.exe permite archivos por lotes de Windows, pero no aporta el modelo nativo de cmdlets y pipeline de objetos de PowerShell.
- Error B: Bash es una shell con sintaxis y utilidades propias. Sus pipelines de comandos no son el modelo de cmdlets .NET que se describe.
- Error C: Python puede automatizar sistemas y trabajar con objetos, pero no es el entorno identificado por cmdlets y ese pipeline nativo.

- [Microsoft: What is PowerShell?](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.5) · Command-line Shell; Scripting language: automatización, objetos .NET, Windows/Linux/macOS · versión: Documentación PowerShell 7.5; lenguaje y plataforma, sin afirmar exclusividad de Windows o equivalencia de todos los shells · comprobado: 2026-10-28
- [Microsoft: about\_Pipelines](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_pipelines?view=powershell-7.5) · Long description; How pipelines work: operadores de pipeline y objetos entre comandos · versión: Documentación PowerShell 7.5; distinción de objetos y texto, sin atribuir conversión automática de toda salida de programas externos a objetos estructurados · comprobado: 2026-10-28
- [GNU Bash manual, publicado por Debian](https://manpages.debian.org/trixie/bash/bash.1.en.html) · NAME; DESCRIPTION; Shell Grammar; POSIX Mode: intérprete de comandos de tipo sh con extensiones · versión: Manual GNU Bash 5.2, 19-09-2022, paquete Debian trixie 5.2.37-2+b10; publicación del distribuidor con copyright FSF. Respaldo leído tras fallar GNU y Savannah; no se presenta como última versión de Bash · comprobado: 2026-10-28
- [Python: Glossary](https://docs.python.org/3/glossary.html#term-interpreted) · interpreted; bytecode; native code: compilación de bytecode y ejecución mediante intérprete · versión: Documentación observada Python 3.15.2; definición y ejemplo de implementación, sin afirmar que todo lenguaje de script exija interpretación pura · comprobado: 2026-10-28

Partida: `2fb8249295a13e752a1e43aa47f0b9cbd1f81c731542de2c58116a0bf7b2104c` · propuesta: `8e96cfbdbc9b122ad16f1c10ce55d8e9b66c627a3542c15b199d73f41942893d`

## MAN-GSI-P18-054

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas, clave C; explicar bytecode/JIT y que runtime aislado no define toda ejecución interpretada.

### Antes

¿Qué significa que un lenguaje sea “interpretado” en un entorno concreto?

- A. Que el lenguaje no puede compilarse en ninguna implementación ni utilizar técnicas JIT o generación previa de código.
- B. Que carece necesariamente de tipos y comprobaciones, porque todo intérprete solo puede operar con valores dinámicos.
- C. Que una implementación ejecuta el programa mediante un intérprete o runtime sin generar necesariamente un binario nativo previo completo. **(correcta)**
- D. Que solo puede ejecutarse dentro de un navegador y no admite runtimes de servidor, escritorio o línea de comandos.

Explicación: Compilado/interpretado no son categorías absolutas del lenguaje.

### Propuesta

¿Qué significa que un lenguaje sea “interpretado” en un entorno concreto?

- A. Que el lenguaje no puede compilarse en ninguna implementación ni utilizar técnicas JIT o generación previa de código.
- B. Que carece necesariamente de tipos y comprobaciones, porque todo intérprete solo puede operar con valores dinámicos.
- C. Que una implementación ejecuta el programa mediante un intérprete o runtime sin generar necesariamente un binario nativo previo completo. **(correcta)**
- D. Que solo puede ejecutarse dentro de un navegador y no admite runtimes de servidor, escritorio o línea de comandos.

Explicación: En el entorno descrito, un intérprete ejecuta el programa, directamente o mediante una representación intermedia, sin exigir al usuario un ejecutable nativo completo previo. Eso no prohíbe compilación a bytecode, JIT o comprobaciones de tipos. La presencia de un runtime por sí sola no basta para clasificar toda implementación como interpretada: el término depende del mecanismo concreto. JavaScript y Python ilustran que la frontera con compilación puede ser mixta.

- Error A: Una implementación puede combinar interpretación y compilación. El modo de ejecución observado no prohíbe otros motores ni el uso de JIT o bytecode.
- Error B: Interpretación y sistema de tipos son dimensiones distintas. Un intérprete puede ejecutar comprobaciones; no implica ausencia de tipos.
- Error D: Hay intérpretes en servidores, escritorio y línea de comandos. Interpretado no es sinónimo de ejecutado exclusivamente en un navegador.

- [Python: Glossary](https://docs.python.org/3/glossary.html#term-interpreted) · interpreted; bytecode; native code: compilación de bytecode y ejecución mediante intérprete · versión: Documentación observada Python 3.15.2; definición y ejemplo de implementación, sin afirmar que todo lenguaje de script exija interpretación pura · comprobado: 2026-10-28
- [MDN: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) · Introducción: lenguaje interpretado o compilado JIT, funciones de primera clase y hosts fuera del navegador · versión: Documentación de Mozilla consultada; modos de implementación y usos, no clasificación absoluta por tipado · comprobado: 2026-10-28

Partida: `6124ff4896086751d2d3ed00122fa9b092697d112fdfa37f80f5674022feee92` · propuesta: `3877f355f43b7a58a2bd4f56f2bfa4b1f4f0958c8a2e41d6357bbe39002bcb85`

## MAN-GSI-P18-055

Decisión: pending_review · acción: revise.

Motivo: Mantener closure y clave D; microcaso de acceso tras terminar la función exterior y distractores próximos de ámbito, currificación y generación.

### Antes

¿Qué es una closure en scripting/programación funcional?

- A. Un cierre obligatorio de etiqueta XML.
- B. Una conexión TCP terminada.
- C. Un permiso del sistema de archivos.
- D. Una función que conserva acceso a variables de su entorno léxico. **(correcta)**

Explicación: Las closures aparecen en JavaScript y otros lenguajes modernos.

### Propuesta

En JavaScript, crear() devuelve una función que sigue usando la variable local n después de terminar crear(). ¿Qué caracteriza a esa closure?

- A. Una función que busca sus variables según la pila de llamadas activa.
- B. Una función que divide sus argumentos en llamadas sucesivas de un argumento.
- C. Una función que suspende su ejecución y puede reanudarse con valores sucesivos.
- D. Una función que conserva acceso a las variables de su entorno léxico. **(correcta)**

Explicación: La closure conserva referencias al entorno léxico en el que se creó la función, de modo que la variable capturada puede seguir siendo accesible al terminar la llamada exterior. En JavaScript no se trata necesariamente de una fotografía inmutable del valor: si la vinculación cambia, una lectura posterior puede observarlo. No exige que la función se ejecute de forma asíncrona ni equivale a currificar argumentos o suspender una función generadora.

- Error A: Describe una resolución ligada a la pila de llamadas, no la conservación del entorno léxico de creación. La closure no depende de que la llamada exterior siga en la pila.
- Error B: Repartir argumentos entre funciones sucesivas describe currificación. Puede implementarse con closures, pero no es la propiedad que explica conservar acceso a n.
- Error C: Suspender y reanudar para producir valores describe una función generadora. No explica por sí mismo el acceso persistente al entorno léxico.

- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures) · Introducción; Lexical scoping; Closure; Practical closures: función y referencias al entorno léxico · versión: Documentación de Mozilla sobre JavaScript; enlaces a variables, no una copia inmutable universal de sus valores · comprobado: 2026-10-28
- [MDN: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) · Introducción: lenguaje interpretado o compilado JIT, funciones de primera clase y hosts fuera del navegador · versión: Documentación de Mozilla consultada; modos de implementación y usos, no clasificación absoluta por tipado · comprobado: 2026-10-28
- [MDN: Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) · Generator functions: function\*, next y yield; ejecución suspendida y reanudación · versión: Documentación de Mozilla consultada; distingue un generador del acceso a entorno léxico que define una closure · comprobado: 2026-10-28
- [Haskell 2010 Report: Standard Prelude](https://www.haskell.org/onlinereport/haskell2010/haskellch9.html) · Chapter 9 Standard Prelude, definición de curry y uncurry · versión: Haskell 2010; ejemplo primario de conversión a aplicación por argumentos sucesivos, sin introducir Haskell ni trasladar su evaluación a JavaScript · comprobado: 2026-10-28

Partida: `47b224756a808f7c3aee49e4fad397e1c24fceb6ff194c87db0dba96b32d8999` · propuesta: `ccd00c014ab196fa8efd6a0da61db816e2d2c4e91c1b9726235dbd97488febd9`

## MAN-GSI-P18-056

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra distinción evento/nodo/listener/callback y clave C; añadir eventos sintéticos y no inferir interacción real o asincronía universal.

### Antes

¿Qué es un evento en programación web?

- A. Un nodo de la interfaz representado en el DOM sobre el que pueden producirse interacciones o cambios.
- B. Una función registrada para recibir determinadas notificaciones y ejecutar código cuando se producen.
- C. Una notificación de que ocurrió una interacción o cambio que puede ser manejado por código. **(correcta)**
- D. Una función pasada a otra operación para que pueda invocarse posteriormente al cumplirse una condición.

Explicación: Clicks, cambios, carga o mensajes generan eventos manejables.

### Propuesta

¿Qué es un evento en programación web?

- A. Un nodo de la interfaz representado en el DOM sobre el que pueden producirse interacciones o cambios.
- B. Una función registrada para recibir determinadas notificaciones y ejecutar código cuando se producen.
- C. Una notificación de que ocurrió una interacción o cambio que puede ser manejado por código. **(correcta)**
- D. Una función pasada a otra operación para que pueda invocarse posteriormente al cumplirse una condición.

Explicación: Un evento es una notificación representada por un objeto que puede despacharse a un destino y ser atendida por listeners. Puede corresponder a una interacción, un cambio o un acontecimiento del sistema; también puede crearse programáticamente. El nodo que recibe el evento y la función que lo maneja son entidades distintas de la notificación. Un evento sintético no acredita por sí solo una interacción real del usuario ni tiene siempre el mismo comportamiento que uno generado por el navegador.

- Error A: El nodo puede actuar como destino de un evento, pero no es la notificación. Confunde la estructura del documento con el acontecimiento comunicado.
- Error B: La función registrada es el listener o manejador. El evento es el objeto/notificación que recibe, no esa función.
- Error D: Una función callback puede utilizarse como manejador, pero no es el evento. Además existen callbacks síncronos ajenos a eventos web.

- [WHATWG: DOM Standard](https://dom.spec.whatwg.org/) · 2.1 Introduction to DOM Events; 2.2 Event; 2.7 EventTarget; 4 Nodes, Node tree y mutación; textContent · versión: Living Standard consultado, cabecera 19-10-2026; evento, listener, nodo y contenido textual diferenciados · comprobado: 2026-10-28
- [MDN: Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) · Definición; Synchronous y Asynchronous callbacks, ejemplos de map y temporización · versión: Glosario de Mozilla; callback no implica asincronía o evento del navegador · comprobado: 2026-10-28

Partida: `2095a852a9a877362cc1fb8597856db2396a39d1532ddf6278acff4a3928ffba` · propuesta: `fd637ba3f93b8706cef4b84f34cfea8412bf35bf3b6817e4f92730092034ee38`

## MAN-GSI-P18-057

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas próximas, clave D; explicar callbacks síncronos/asíncronos y no atribuirles hilos o concurrencia automática.

### Antes

¿Qué es un callback?

- A. Un objeto que representa un resultado disponible en el futuro y permite encadenar operaciones de éxito o error.
- B. Un componente que publica eventos y notifica a los listeners suscritos cuando recibe una emisión identificada.
- C. Un bucle que consulta periódicamente el estado de un recurso para detectar si se ha producido algún cambio.
- D. Una función pasada o registrada para ejecutarse cuando ocurre una condición o evento. **(correcta)**

Explicación: Callbacks son un mecanismo clásico de asincronía/eventos.

### Propuesta

¿Qué es un callback?

- A. Un objeto que representa un resultado disponible en el futuro y permite encadenar operaciones de éxito o error.
- B. Un componente que publica eventos y notifica a los listeners suscritos cuando recibe una emisión identificada.
- C. Un bucle que consulta periódicamente el estado de un recurso para detectar si se ha producido algún cambio.
- D. Una función pasada o registrada para ejecutarse cuando ocurre una condición o evento. **(correcta)**

Explicación: Un callback es una función que se pasa a otra operación o se registra para que esa operación la invoque. Puede ejecutarse de forma síncrona, como una función aplicada a elementos de un array, o más tarde, como un manejador. No es en sí una promesa, un emisor de eventos o un bucle de sondeo. Usar un callback no garantiza concurrencia ni implica que se haya creado un hilo nuevo.

- Error A: Un objeto que representa y encadena un resultado futuro describe una promesa. Una función puede ser callback de una promesa sin ser esa promesa.
- Error B: El componente que publica notificaciones es un emisor o destino de eventos. El callback es una función que podría registrarse en él.
- Error C: Consultar periódicamente un estado es sondeo. Puede usar callbacks, pero no define qué es la función callback.

- [MDN: Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) · Definición; Synchronous y Asynchronous callbacks, ejemplos de map y temporización · versión: Glosario de Mozilla; callback no implica asincronía o evento del navegador · comprobado: 2026-10-28
- [WHATWG: DOM Standard](https://dom.spec.whatwg.org/) · 2.1 Introduction to DOM Events; 2.2 Event; 2.7 EventTarget; 4 Nodes, Node tree y mutación; textContent · versión: Living Standard consultado, cabecera 19-10-2026; evento, listener, nodo y contenido textual diferenciados · comprobado: 2026-10-28

Partida: `ca86a67475cf81c99281c80afdbfe2cfe8147af108e68f5e8999f1d9f2e6d023` · propuesta: `57fc79d1eb1a71999d08eac143824edd11338bb56f14150556c7ed94b1b191cc`

## MAN-GSI-P18-058

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de acoplamiento y clave B; cuatro dependencias técnicas comparables, sin beneficios universales o distractores ajenos como XML válido.

### Antes

¿Qué riesgo tiene mezclar lógica de negocio compleja directamente en plantillas de presentación?

- A. Mejora siempre seguridad.
- B. Aumenta acoplamiento y dificulta pruebas, mantenimiento y reutilización. **(correcta)**
- C. Elimina la necesidad de arquitectura.
- D. Convierte la aplicación en XML válida.

Explicación: Separar responsabilidades facilita evolución del sistema.

### Propuesta

¿Qué dependencia introduce mezclar lógica de negocio compleja directamente en plantillas de presentación?

- A. Dependencia del modelo de negocio respecto al motor de base de datos elegido.
- B. Dependencia de las reglas respecto al contexto y al ciclo de presentación. **(correcta)**
- C. Dependencia de la salida respecto al juego de caracteres del protocolo.
- D. Dependencia de los estilos respecto al tamaño del viewport del navegador.

Explicación: Mezclar reglas de negocio complejas con la plantilla las liga al contexto de presentación y hace más difícil probarlas y reutilizarlas por separado. Cambiar una vista puede obligar a preparar datos y contexto que esas reglas no deberían necesitar. Separar responsabilidades no prohíbe condiciones sencillas de presentación ni obliga a adoptar un framework o una arquitectura grande. El riesgo es el acoplamiento de esas responsabilidades, no un cambio automático del transporte, la persistencia o las media queries.

- Error A: El motor de base de datos puede crear otro tipo de dependencia, pero no es el efecto específico de mezclar reglas con una plantilla de presentación.
- Error C: El juego de caracteres afecta a la representación y codificación de la salida. No explica el acoplamiento entre reglas de negocio y presentación.
- Error D: La adaptación visual al viewport corresponde al diseño de estilos. No identifica la dependencia introducida en las reglas de negocio.

- [Django: Design philosophies](https://docs.djangoproject.com/en/5.2/misc/design-philosophies/#template-system) · Overall, Loose coupling; Template system, Separate logic from presentation · versión: Documentación Django 5.2; ejemplo primario de separación entre presentación y lógica, sin introducir Django o una arquitectura obligatoria en la aplicación · comprobado: 2026-10-28

Partida: `f4aa2df4f85c5dfe6c733f688aab93566cd96b3066f6a1129a10a2de3439866e` · propuesta: `f634ad0226c900967322f87b716eb6572f4db9638dd7262131f4dee02c6972d0`

## MAN-GSI-P18-059

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas, clave D; precisar métodos de salida y alcance de versión sin confundir transformación y conformidad.

### Antes

¿Qué afirmación es correcta sobre XSLT como transformación?

- A. Solo puede generar otro documento XML con el mismo vocabulario y no admite salida HTML, texto ni estructuras diferentes.
- B. Comprueba exclusivamente la validez del documento contra un esquema, pero no crea un árbol de resultado transformado.
- C. Es un lenguaje de estilos visuales equivalente a CSS que modifica la presentación sin procesar la estructura XML.
- D. Puede producir XML, HTML, texto u otros resultados según la transformación. **(correcta)**

Explicación: XSLT está diseñado para transformar árboles XML.

### Propuesta

¿Qué afirmación es correcta sobre XSLT como transformación?

- A. Solo puede generar otro documento XML con el mismo vocabulario y no admite salida HTML, texto ni estructuras diferentes.
- B. Comprueba exclusivamente la validez del documento contra un esquema, pero no crea un árbol de resultado transformado.
- C. Es un lenguaje de estilos visuales equivalente a CSS que modifica la presentación sin procesar la estructura XML.
- D. Puede producir XML, HTML, texto u otros resultados según la transformación. **(correcta)**

Explicación: Una transformación XSLT construye un resultado a partir de los datos de entrada y las reglas aplicables. La versión 1.0 citada ya define métodos de salida XML, HTML y texto; versiones o extensiones posteriores tienen otras capacidades. No obliga a conservar el vocabulario inicial ni sustituye una validación XSD o una hoja CSS. La posibilidad de producir una salida no demuestra que esta cumpla el contrato de destino: el mapeo y la conformidad deben comprobarse.

- Error A: XSLT puede construir otra estructura y la versión citada contempla salida HTML y texto. No está limitada a copiar el mismo vocabulario XML.
- Error B: Evaluar validez frente a un esquema describe validación XSD. XSLT tiene como tarea construir un resultado transformado.
- Error C: CSS controla presentación mediante reglas de estilo. XSLT procesa datos y puede construir otro árbol o una salida textual.

- [W3C: XSLT 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction; 4 Expressions; 5 Template Rules; 7 Creating the Result Tree; 16 Output, XML/HTML/text · versión: W3C Recommendation, 16-11-1999; versión fijada para conceptos compartidos y ejemplos, no última versión ni límite de versiones posteriores · comprobado: 2026-10-28
- [W3C: XSD 1.1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; schema-validity assessment · versión: W3C Recommendation, 05-04-2012; conformidad con esquema frente a transformación, sin exigir motor XSD 1.1 en los ejemplos · comprobado: 2026-10-28
- [W3C: CSS Object Model](https://www.w3.org/TR/cssom-1/) · Abstract; CSSStyleSheet; CSSRule: APIs de estilos, distintas del árbol de nodos del documento · versión: Working Draft, 26-08-2021; trabajo en curso, citado solo para la responsabilidad de esas APIs · comprobado: 2026-10-28

Partida: `3664e93d9085247ad811996d982fc705697c394efd4c09b568c7a79d4498ba64` · propuesta: `dc0094f26674d0eb9d1f6f0b319cd5d264be4774af0ec8534476148fb9b5a01e`

## MAN-GSI-P18-060

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegro el caso ya bien construido y clave A; completar mapeo, pérdidas y comprobación de contratos sin presentar XSLT como opción exclusiva.

### Antes

Una integración recibe XML de una versión antigua y debe producir el nuevo formato. ¿Qué herramienta encaja conceptualmente?

- A. Una transformación XSLT bien controlada, si las reglas de mapeo se expresan adecuadamente. **(correcta)**
- B. Validar el documento de entrada y el de salida con XML Schema, sin definir reglas de conversión entre ambos.
- C. Usar expresiones XPath para seleccionar nodos del documento antiguo sin generar la nueva estructura.
- D. Analizar y serializar el XML con un parser manteniendo los mismos elementos y la misma organización del documento.

Explicación: XSLT es una opción natural para transformación estructurada entre vocabularios XML.

### Propuesta

Una integración recibe XML de una versión antigua y debe producir el nuevo formato. ¿Qué herramienta encaja conceptualmente?

- A. Una transformación XSLT bien controlada, si las reglas de mapeo se expresan adecuadamente. **(correcta)**
- B. Validar el documento de entrada y el de salida con XML Schema, sin definir reglas de conversión entre ambos.
- C. Usar expresiones XPath para seleccionar nodos del documento antiguo sin generar la nueva estructura.
- D. Analizar y serializar el XML con un parser manteniendo los mismos elementos y la misma organización del documento.

Explicación: XSLT encaja cuando las reglas de mapeo entre vocabularios XML pueden expresarse como una transformación controlada. Puede seleccionar datos y construir nombres, estructura y valores de salida. Conviene comprobar el contrato de entrada y el de salida y cómo se trata la información que no tiene correspondencia. Es una opción conceptual adecuada, no la única tecnología posible ni una garantía de conversión correcta por el mero uso de XSLT.

- Error B: Validar cada versión permite detectar incumplimientos, pero no define cómo convertir una en otra. Faltan las reglas de mapeo y construcción.
- Error C: Seleccionar nodos con XPath no basta para crear la nueva organización descrita. Hace falta expresar la transformación del resultado.
- Error D: Parsear y serializar sin cambiar organización conserva la estructura antigua. No aplica las reglas necesarias para producir el nuevo formato.

- [W3C: XSLT 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction; 4 Expressions; 5 Template Rules; 7 Creating the Result Tree; 16 Output, XML/HTML/text · versión: W3C Recommendation, 16-11-1999; versión fijada para conceptos compartidos y ejemplos, no última versión ni límite de versiones posteriores · comprobado: 2026-10-28
- [W3C: XPath 3.1](https://www.w3.org/TR/xpath-31/) · 1 Introduction; 3.3 Path Expressions; selección y valores en el modelo de datos · versión: W3C Recommendation, 21-03-2017; finalidad del lenguaje, sin atribuir soporte 3.1 completo al motor XPath 1.0 de ejemplos · comprobado: 2026-10-28
- [W3C: XSD 1.1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; schema-validity assessment · versión: W3C Recommendation, 05-04-2012; conformidad con esquema frente a transformación, sin exigir motor XSD 1.1 en los ejemplos · comprobado: 2026-10-28

Partida: `ef09855a133a8cc6856eefb9607df6ab1672f6f0e4457b7d5fd952a230f916d1` · propuesta: `e8d2f65d6c118c49ee84351db46531ec5af9d00428581892ef2ed6092289bbd5`

## MAN-GSI-P18-061

Decisión: pending_review · acción: revise.

Motivo: Mantener DOM accesible desde JavaScript y clave B; distractores próximos de fuente, representación virtual y CSSOM, con longitudes comparables.

### Antes

¿Qué es el DOM desde JavaScript?

- A. El texto HTML original recibido del servidor, que permanece inmutable aunque el navegador modifique la página en memoria.
- B. La API/modelo que permite acceder y modificar la estructura del documento. **(correcta)**
- C. Una base de almacenamiento persistente del navegador equivalente a una base relacional accesible mediante consultas SQL.
- D. El modelo CSSOM que representa exclusivamente reglas y hojas de estilo, sin incluir nodos, atributos o contenido del documento.

Explicación: JavaScript puede manipular el DOM y responder a eventos.

### Propuesta

¿Qué es el DOM desde JavaScript?

- A. El texto HTML original usado como fuente al recibir el documento.
- B. El modelo y API de nodos con que se consulta y modifica el documento. **(correcta)**
- C. Una representación virtual que una biblioteca usa para calcular cambios.
- D. El modelo y API de hojas y reglas de estilo para describir la presentación.

Explicación: El DOM representa el documento mediante nodos y ofrece interfaces para consultarlos, modificarlos y manejar eventos. JavaScript puede usar esas APIs, pero el DOM no es parte exclusiva del lenguaje ni es el texto de la respuesta original. El árbol vivo puede cambiar sin reescribir aquel recurso. Tampoco se identifica con el CSSOM o con representaciones intermedias que una biblioteca use antes de actualizar el DOM.

- Error A: La fuente textual y el árbol del documento son representaciones distintas. El DOM puede reflejar cambios posteriores que no aparecen en el texto recibido originalmente.
- Error C: Una representación virtual de biblioteca puede servir para calcular una actualización. No es el árbol DOM sobre el que finalmente se aplican los cambios.
- Error D: El CSSOM expone hojas y reglas de estilo. Está relacionado con la página, pero no sustituye el modelo de nodos del documento.

- [WHATWG: DOM Standard](https://dom.spec.whatwg.org/) · 2.1 Introduction to DOM Events; 2.2 Event; 2.7 EventTarget; 4 Nodes, Node tree y mutación; textContent · versión: Living Standard consultado, cabecera 19-10-2026; evento, listener, nodo y contenido textual diferenciados · comprobado: 2026-10-28
- [W3C: CSS Object Model](https://www.w3.org/TR/cssom-1/) · Abstract; CSSStyleSheet; CSSRule: APIs de estilos, distintas del árbol de nodos del documento · versión: Working Draft, 26-08-2021; trabajo en curso, citado solo para la responsabilidad de esas APIs · comprobado: 2026-10-28
- [React: Render and Commit](https://react.dev/learn/render-and-commit) · Step 2, React renders your components; Step 3, React commits changes to the DOM · versión: Documentación observada v19.3; ejemplo de cálculo intermediario distinto del DOM. No se añade biblioteca ni se universaliza su implementación · comprobado: 2026-10-28

Partida: `5025555752fc40c8cf5609d91d35890758c07405b107f624cb9f4fa8ce4174f7` · propuesta: `9b98e97e5c2e741133e796fd2a95613228a1e9c3fd5e6af9ddf678a25fce27e2`

## MAN-GSI-P18-062

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación de cuatro riesgos, clave B; explicar contexto y defensa en profundidad sin atribuir prevención total a CSP o HTTPS.

### Antes

¿Qué es XSS?

- A. Un ataque que induce al navegador autenticado a enviar una acción no deseada aprovechando sus credenciales existentes.
- B. Una vulnerabilidad en la que contenido no confiable termina ejecutándose como script en el contexto de una página. **(correcta)**
- C. Una manipulación de consultas al insertar entrada no confiable en sentencias dirigidas a una base de datos.
- D. Una técnica que superpone o disfraza elementos de interfaz para que el usuario pulse sobre una acción diferente de la visible.

Explicación: XSS se previene con codificación/escape contextual, APIs seguras y políticas como CSP.

### Propuesta

¿Qué es XSS?

- A. Un ataque que induce al navegador autenticado a enviar una acción no deseada aprovechando sus credenciales existentes.
- B. Una vulnerabilidad en la que contenido no confiable termina ejecutándose como script en el contexto de una página. **(correcta)**
- C. Una manipulación de consultas al insertar entrada no confiable en sentencias dirigidas a una base de datos.
- D. Una técnica que superpone o disfraza elementos de interfaz para que el usuario pulse sobre una acción diferente de la visible.

Explicación: XSS aparece cuando datos no confiables se interpretan de forma que permiten ejecutar script en el contexto de una página. La causa y el contexto de salida determinan la defensa: para texto literal se usan APIs de texto; en otros contextos se necesita codificación adecuada o saneamiento cuando se admite HTML. Una CSP bien aplicada puede añadir protección, pero no sustituye corregir las inserciones inseguras. El mecanismo es distinto de CSRF, SQL injection y clickjacking.

- Error A: Describe CSRF: inducir una acción autenticada sin intención válida. No requiere insertar y ejecutar script dentro del contexto de la página víctima.
- Error C: Describe inyección SQL, que altera la interpretación de una consulta de base de datos. El contexto de ejecución y las defensas son distintos de XSS.
- Error D: Describe clickjacking o engaño de interfaz para desviar una pulsación. No es la ejecución de script que caracteriza XSS.

- [OWASP: Cross Site Scripting Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) · Introduction; Output Encoding por contexto; HTML Sanitization; Safe Sinks; Sole Reliance on CSP Headers · versión: Cheat Sheet Series consultada el 28-10-2026; guía mantenida, no norma legal o prueba de seguridad exhaustiva · comprobado: 2026-10-28
- [OWASP: Cross-Site Request Forgery Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) · Introduction; Synchronizer Token Pattern; Signed Double-Submit; SameSite y Limitations; Origin/Referer verification · versión: Cheat Sheet Series consultada; controles dependientes del flujo, sitio frente a origen y defensa en profundidad · comprobado: 2026-10-28
- [OWASP: SQL Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html) · Introduction; Primary Defenses: separación de datos y sentencias/consultas · versión: Cheat Sheet Series consultada; solo distinción del mecanismo frente a XSS, sin ejecutar ataques a bases de datos · comprobado: 2026-10-28
- [OWASP: Clickjacking Defense](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) · Introduction, UI redress attacks; frame-ancestors y X-Frame-Options · versión: Cheat Sheet Series consultada; distinción de interfaz engañosa frente a ejecución de script o petición forjada · comprobado: 2026-10-28
- [W3C: Content Security Policy Level 3](https://www.w3.org/TR/CSP3/) · Abstract; 3.1 Content-Security-Policy; 3.2 Report-Only; 3.3 meta; 6 Directives, script-src · versión: Working Draft, 27-10-2026; estado explícito de trabajo en curso, solo controles básicos consolidados, sin garantizar cobertura universal o prevención total de XSS · comprobado: 2026-10-28

Partida: `5b8f59b61c1c7f3dc009c7f2d674a79025928c0580ce98ba8585fc422514c505` · propuesta: `9d8a710ea8a176d01ed5d04120a71502f4f490f80794abd3c13ab436c4e28f50`

## MAN-GSI-P18-063

Decisión: pending_review · acción: revise.

Motivo: Mantener reducción de XSS por APIs seguras y clave B; fijar caso de texto literal y comparar sinks reales sin dar por seguro un filtro parcial.

### Antes

¿Qué medida reduce riesgo de XSS al insertar texto no confiable?

- A. Desactivar HTTPS para que el navegador pueda identificar el texto no confiable antes de incorporarlo al documento que representa la página.
- B. Usar APIs seguras de texto/DOM y escape contextual en lugar de concatenar HTML sin control. **(correcta)**
- C. Guardar el contenido recibido en \`robots.txt\` para que los rastreadores impidan al navegador interpretar cualquier etiqueta incluida.
- D. Codificar siempre el valor en Base64 y ejecutarlo después en el navegador, confiando en que la codificación elimina su capacidad activa.

Explicación: La regla es no interpretar datos no confiables como código/markup activo.

### Propuesta

Un comentario no confiable debe mostrarse literalmente dentro de un div, sin admitir HTML. ¿Qué inserción reduce el riesgo de XSS en ese contexto?

- A. Asignarlo a innerHTML tras eliminar únicamente las etiquetas &lt;script&gt;.
- B. Asignarlo a textContent, manteniendo el valor como contenido textual. **(correcta)**
- C. Asignarlo a innerHTML tras comprobar que su longitud sea aceptable.
- D. Pasarlo a insertAdjacentHTML tras decodificarlo desde Base64.

Explicación: Para mostrar literalmente un comentario dentro de un div, textContent trata el valor como texto y no lo interpreta como marcado. Es la API adecuada al contexto descrito: no se quiere admitir HTML enriquecido. Una codificación genérica, una validación de longitud o quitar una etiqueta concreta no convierten una inserción HTML en segura. La misma elección no debe extrapolarse a introducir valores dentro de scripts, estilos o URLs, que tienen condiciones diferentes.

- Error A: Eliminar solo etiquetas script no cubre otras formas de contenido activo o atributos de evento. innerHTML sigue interpretando marcado, contrario al requisito de texto literal.
- Error C: Un límite de longitud puede ser útil para el contenido, pero no distingue texto de marcado activo. La asignación sigue pasando por un parser HTML.
- Error D: Base64 es una codificación reversible. Tras decodificar, el valor original vuelve a interpretarse como HTML; no es un saneamiento ni mantiene el comentario como texto literal.

- [OWASP: Cross Site Scripting Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) · Introduction; Output Encoding por contexto; HTML Sanitization; Safe Sinks; Sole Reliance on CSP Headers · versión: Cheat Sheet Series consultada el 28-10-2026; guía mantenida, no norma legal o prueba de seguridad exhaustiva · comprobado: 2026-10-28
- [OWASP: Web Frontend Security](https://cheatsheetseries.owasp.org/cheatsheets/Web_Frontend_Security_Cheat_Sheet.html) · Use of textContent or innerText for text-only DOM updates; Never transmit secrets to the client; Choose encryption for the threat model · versión: Cheat Sheet Series consultada; documento actual al que redirige AJAX Security; el usuario controla el cliente y TLS protege transporte, no secreto frente al destinatario · comprobado: 2026-10-28
- [WHATWG: DOM Standard](https://dom.spec.whatwg.org/) · 2.1 Introduction to DOM Events; 2.2 Event; 2.7 EventTarget; 4 Nodes, Node tree y mutación; textContent · versión: Living Standard consultado, cabecera 19-10-2026; evento, listener, nodo y contenido textual diferenciados · comprobado: 2026-10-28

Partida: `4b86d40d9d49d97dfe2ec994b65783e1bb7699fa8548b6b420d7ca64316744cc` · propuesta: `2300b20498c8e29d3ce141a0a13978f5c4aad195999afb22d69569abf940d601`

## MAN-GSI-P18-064

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación XSS/clickjacking/SSRF/CSRF y clave D; completar credenciales ambientales e intención, sin exigir lectura de respuesta.

### Antes

¿Qué es CSRF?

- A. Inyectar contenido activo no confiable para que se ejecute como script dentro del contexto de una página visitada.
- B. Superponer elementos transparentes o engañosos para inducir al usuario a pulsar sobre una acción distinta de la mostrada.
- C. Hacer que un servidor solicite recursos internos o externos elegidos por el atacante aprovechando una función de backend.
- D. Un ataque que induce al navegador autenticado de un usuario a realizar una acción no deseada contra un sitio. **(correcta)**

Explicación: CSRF explota credenciales/sesión implícita del navegador.

### Propuesta

¿Qué es CSRF?

- A. Inyectar contenido activo no confiable para que se ejecute como script dentro del contexto de una página visitada.
- B. Superponer elementos transparentes o engañosos para inducir al usuario a pulsar sobre una acción distinta de la mostrada.
- C. Hacer que un servidor solicite recursos internos o externos elegidos por el atacante aprovechando una función de backend.
- D. Un ataque que induce al navegador autenticado de un usuario a realizar una acción no deseada contra un sitio. **(correcta)**

Explicación: En el caso habitual de autenticación con cookies, CSRF induce al navegador de la víctima a enviar una acción que el sitio acepta con sus credenciales, aunque la persona no la haya querido. El atacante no necesita leer la respuesta ni ejecutar script dentro del sitio objetivo. Se debe distinguir esa acción forjada de XSS, engaño visual y solicitudes realizadas desde un servidor. La presencia de una cookie válida no acredita por sí sola intención legítima.

- Error A: La ejecución de contenido activo dentro de la página describe XSS. CSRF se basa en inducir una petición que aprovecha el contexto autenticado.
- Error B: El engaño mediante superposición de interfaz describe clickjacking. Puede causar acciones no deseadas, pero es un mecanismo distinto de petición forjada.
- Error C: Inducir solicitudes desde el backend describe SSRF. En el supuesto clásico de CSRF actúa el navegador de la víctima con sus credenciales.

- [OWASP: Cross-Site Request Forgery Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) · Introduction; Synchronizer Token Pattern; Signed Double-Submit; SameSite y Limitations; Origin/Referer verification · versión: Cheat Sheet Series consultada; controles dependientes del flujo, sitio frente a origen y defensa en profundidad · comprobado: 2026-10-28
- [OWASP: Cross Site Scripting Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) · Introduction; Output Encoding por contexto; HTML Sanitization; Safe Sinks; Sole Reliance on CSP Headers · versión: Cheat Sheet Series consultada el 28-10-2026; guía mantenida, no norma legal o prueba de seguridad exhaustiva · comprobado: 2026-10-28
- [OWASP: Clickjacking Defense](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) · Introduction, UI redress attacks; frame-ancestors y X-Frame-Options · versión: Cheat Sheet Series consultada; distinción de interfaz engañosa frente a ejecución de script o petición forjada · comprobado: 2026-10-28
- [OWASP: Server Side Request Forgery Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html) · Context; Overview of a SSRF common flow: solicitudes inducidas desde la aplicación servidora · versión: Cheat Sheet Series consultada; mecanismo no limitado a HTTP, sin pruebas sobre redes internas o servicios reales · comprobado: 2026-10-28

Partida: `8364175085079f25c401891cf6bf951c060518338c19bf4722714f36d1e6c08c` · propuesta: `327d854b16834f9f6f0185c2976fcfe8bc2119e0d39eb405b1cd1e4ab80e656d`

## MAN-GSI-P18-065

Decisión: pending_review · acción: revise.

Motivo: Mantener combinación de defensas CSRF y clave A; fijar autenticación por cookie y distinguir intención, transporte, CORS y semántica segura de GET.

### Antes

¿Qué controles ayudan contra CSRF?

- A. Tokens anti-CSRF cuando proceda, SameSite y validación apropiada del origen/contexto. **(correcta)**
- B. Desactivar toda autenticación.
- C. Usar únicamente GET para acciones con efectos.
- D. Eliminar HTTPS.

Explicación: Las acciones sensibles deben verificar intención/origen y no depender solo de cookies automáticas.

### Propuesta

Una operación con efectos se autentica mediante cookies enviadas por el navegador. ¿Qué combinación ayuda a mitigar CSRF?

- A. Tokens ligados a la sesión, SameSite y comprobación del origen/contexto. **(correcta)**
- B. CORS abierto a los clientes y cookies Secure para todas las operaciones.
- C. Métodos GET para las acciones sensibles y validación del dato recibido.
- D. Cifrado HTTPS y comprobación del formato de los campos del formulario.

Explicación: Con autenticación basada en cookies que el navegador adjunta, conviene verificar un mecanismo anti-CSRF ligado a la sesión o equivalente y añadir controles adecuados de origen/contexto y SameSite. Deben comprobarse en el receptor; una cookie de sesión válida no demuestra intención. SameSite distingue sitios y no equivale al origen, por lo que se elige según el flujo y no se considera una defensa universal aislada. HTTPS, Secure y validación de datos protegen otras propiedades, pero no sustituyen esa comprobación.

- Error B: CORS regula principalmente acceso entre orígenes y preflight según el caso; abrirlo no acredita intención. Secure limita transporte de la cookie y no valida la acción solicitada.
- Error C: GET debe tener semántica segura, no usarse para acciones sensibles con efectos. Comprobar datos tampoco demuestra que el usuario quisiera realizar la acción.
- Error D: HTTPS protege el canal y la validación de formato comprueba valores. Una petición forjada puede usar un canal cifrado y datos bien formados.

- [OWASP: Cross-Site Request Forgery Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) · Introduction; Synchronizer Token Pattern; Signed Double-Submit; SameSite y Limitations; Origin/Referer verification · versión: Cheat Sheet Series consultada; controles dependientes del flujo, sitio frente a origen y defensa en profundidad · comprobado: 2026-10-28
- [MDN: Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie) · Attributes: Domain, HttpOnly, SameSite, Secure; cookie prefixes y ejemplos · versión: Documentación de Mozilla consultada; HttpOnly no impide envío por fetch, Secure no oculta al usuario, SameSite según flujo y navegador · comprobado: 2026-10-28
- [MDN: Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) · Functional overview; Simple requests; Preflighted requests; Requests with credentials · versión: Documentación de Mozilla; lectura entre orígenes y preflight según petición, no autenticación de clientes o protección universal CSRF · comprobado: 2026-10-28
- [IETF: RFC 9110, HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · 1 Introduction; 3.3 Connections, semántica aislada por petición; 3.4 Messages; 9.2.1 Safe Methods · versión: RFC 9110, STD 97, junio de 2022; stateless no prohíbe sesiones de aplicación o reutilización de conexiones · comprobado: 2026-10-28

Partida: `5ad84f82f2aa7e924923a54053f0b613fdae461cdeca73f8abdaa00d2b7ae2cc` · propuesta: `ae2bc9b6fb6d216a44d1cd5724ac6600f615c60c87ddd70207bf962582462ea9`

## MAN-GSI-P18-066

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación CSP/CORS/SRI/Permissions Policy y clave D; distinguir aplicación de Report-Only y protección adicional de corrección de XSS.

### Antes

¿Qué es CSP?

- A. Un mecanismo HTTP que indica qué orígenes externos pueden leer respuestas desde código ejecutado en el navegador.
- B. Una comprobación de integridad que verifica mediante un hash que un recurso externo no haya sido alterado.
- C. Una política que habilita o limita capacidades del navegador como cámara, micrófono o geolocalización.
- D. Content Security Policy, un mecanismo del navegador para restringir orígenes y tipos de contenido ejecutable/cargable. **(correcta)**

Explicación: CSP reduce impacto de ciertas inyecciones y controla recursos, aunque no sustituye desarrollo seguro.

### Propuesta

¿Qué es CSP?

- A. Un mecanismo HTTP que indica qué orígenes externos pueden leer respuestas desde código ejecutado en el navegador.
- B. Una comprobación de integridad que verifica mediante un hash que un recurso externo no haya sido alterado.
- C. Una política que habilita o limita capacidades del navegador como cámara, micrófono o geolocalización.
- D. Content Security Policy, un mecanismo del navegador para restringir orígenes y tipos de contenido ejecutable/cargable. **(correcta)**

Explicación: CSP expresa restricciones que el navegador aplica a recursos y ejecución según las directivas de una política. Puede limitar fuentes de scripts y usar mecanismos como nonces o hashes. La política en modo Report-Only observa sin bloquear, de modo que no debe confundirse con una política aplicada. CSP añade protección frente a ciertas inyecciones, pero no sanea automáticamente entradas ni sustituye APIs seguras. CORS, integridad por hash y Permissions Policy tienen funciones distintas.

- Error A: El acceso de scripts a respuestas entre orígenes caracteriza CORS. No define la política general de cargas y ejecución que se pregunta.
- Error B: Verificar un recurso contra metadatos de hash describe Subresource Integrity. Es complementario, pero no es la definición de CSP.
- Error C: Limitar capacidades como cámara o geolocalización describe Permissions Policy. No equivale a la política CSP de recursos y ejecución.

- [W3C: Content Security Policy Level 3](https://www.w3.org/TR/CSP3/) · Abstract; 3.1 Content-Security-Policy; 3.2 Report-Only; 3.3 meta; 6 Directives, script-src · versión: Working Draft, 27-10-2026; estado explícito de trabajo en curso, solo controles básicos consolidados, sin garantizar cobertura universal o prevención total de XSS · comprobado: 2026-10-28
- [MDN: Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) · Functional overview; Simple requests; Preflighted requests; Requests with credentials · versión: Documentación de Mozilla; lectura entre orígenes y preflight según petición, no autenticación de clientes o protección universal CSRF · comprobado: 2026-10-28
- [W3C: Subresource Integrity](https://www.w3.org/TR/2016/REC-SRI-20160623/) · Abstract; 3 Integrity metadata y Response verification; 4 Verification of HTML document subresources · versión: W3C Recommendation, 23-06-2016; versión estable específica para comparación por hash, no se confunde con WD SRI de 20-03-2026 · comprobado: 2026-10-28
- [MDN: Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Permissions_Policy) · Concepts and usage; Relationship with the Permissions API; Allowlist: capacidades como cámara y geolocalización · versión: Documentación de Mozilla consultada; disponibilidad limitada y experimental según ficha observada, sin prometer compatibilidad completa · comprobado: 2026-10-28
- [OWASP: Cross Site Scripting Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) · Introduction; Output Encoding por contexto; HTML Sanitization; Safe Sinks; Sole Reliance on CSP Headers · versión: Cheat Sheet Series consultada el 28-10-2026; guía mantenida, no norma legal o prueba de seguridad exhaustiva · comprobado: 2026-10-28

Partida: `1b5e31aee0d3661c925218275c98f5310cb42b2cbabe4b28c5bca5a3a57e1c8d` · propuesta: `731409629957966aadc18cfca1b2ef485a248d3859737feb985ec489c36f0ec7`

## MAN-GSI-P18-067

Decisión: pending_review · acción: revise.

Motivo: Mantener atributos protectores de cookie y clave C; fijar ausencia de lectura legítima desde JavaScript y dejar SameSite condicionado al flujo.

### Antes

¿Qué propiedad debe tener una cookie de sesión sensible al usar HTTPS?

- A. Debe ser accesible a cualquier dominio.
- B. Debe almacenarse siempre en una URL pública.
- C. Secure y, cuando proceda, HttpOnly/SameSite según el caso. **(correcta)**
- D. Debe desactivar caducidad por definición.

Explicación: Los atributos de cookie reducen exposición a red, script y CSRF según contexto.

### Propuesta

Una cookie de sesión sensible se usa con HTTPS y no necesita ser leída por JavaScript. ¿Qué configuración reduce su exposición?

- A. HttpOnly y SameSite, omitiendo Secure porque el sitio utiliza HTTPS.
- B. Secure y Domain amplio para compartirla con cualquier subdominio.
- C. Secure y HttpOnly, con SameSite elegido según el flujo legítimo. **(correcta)**
- D. Secure y SameSite=None, sin HttpOnly para simplificar su renovación.

Explicación: Una cookie de sesión sensible que no necesita ser leída por JavaScript debe restringir su transporte con Secure y su acceso desde script con HttpOnly. SameSite se selecciona según los flujos legítimos y las defensas CSRF, sin imponer siempre Strict o None. Conviene además limitar su ámbito al necesario. HttpOnly no impide que el navegador envíe la cookie en fetch ni garantiza que un XSS no pueda actuar con la sesión; los atributos cubren riesgos diferentes.

- Error A: Que las páginas se visiten con HTTPS no sustituye la restricción explícita Secure en la cookie. Los otros atributos no cumplen por sí mismos ese papel de transporte.
- Error B: Un Domain amplio extiende el ámbito de la cookie y no añade confidencialidad. Además falta HttpOnly aunque el caso no requiere lectura desde JavaScript.
- Error D: None amplía los contextos cross-site y debe justificarse por el flujo. Omitir HttpOnly expone la lectura a scripts sin necesidad en el caso descrito.

- [MDN: Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie) · Attributes: Domain, HttpOnly, SameSite, Secure; cookie prefixes y ejemplos · versión: Documentación de Mozilla consultada; HttpOnly no impide envío por fetch, Secure no oculta al usuario, SameSite según flujo y navegador · comprobado: 2026-10-28
- [IETF: RFC 6265](https://www.rfc-editor.org/rfc/rfc6265.html) · Abstract; 4.1.2.5 Secure y 4.1.2.6 HttpOnly; 8 Security Considerations · versión: RFC 6265, abril de 2011; mecanismo histórico de estado y atributos. No se atribuye SameSite a este RFC; ese atributo se respalda por MDN y OWASP · comprobado: 2026-10-28
- [OWASP: Cross-Site Request Forgery Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) · Introduction; Synchronizer Token Pattern; Signed Double-Submit; SameSite y Limitations; Origin/Referer verification · versión: Cheat Sheet Series consultada; controles dependientes del flujo, sitio frente a origen y defensa en profundidad · comprobado: 2026-10-28

Partida: `d58764e5e5474894d4f9746a03d7cddfb7ce3d06aeebcc8b4256e32d96ef5d21` · propuesta: `003ff721e762004b9111e3228cf5918832caad920bb9ec0dd8d042dc1fc478e9`

## MAN-GSI-P18-068

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación formato/protocolo y clave D; completar representaciones distintas de HTML y no atribuir a HTTP solo el cifrado de HTTPS.

### Antes

¿Qué diferencia hay entre HTML y HTTP?

- A. HTML define la presentación visual y HTTP cifra el contenido intercambiado entre navegador y servidor.
- B. Ambos son formatos documentales: HTML representa páginas y HTTP representa cabeceras y respuestas guardadas.
- C. HTTP es el lenguaje de marcado de la Web y HTML es el protocolo utilizado para solicitar sus recursos.
- D. HTML es un formato/lenguaje de documentos; HTTP es un protocolo de aplicación para intercambio de recursos. **(correcta)**

Explicación: Formato y protocolo no deben confundirse.

### Propuesta

¿Qué diferencia hay entre HTML y HTTP?

- A. HTML define la presentación visual y HTTP cifra el contenido intercambiado entre navegador y servidor.
- B. Ambos son formatos documentales: HTML representa páginas y HTTP representa cabeceras y respuestas guardadas.
- C. HTTP es el lenguaje de marcado de la Web y HTML es el protocolo utilizado para solicitar sus recursos.
- D. HTML es un formato/lenguaje de documentos; HTTP es un protocolo de aplicación para intercambio de recursos. **(correcta)**

Explicación: HTML expresa estructura y semántica de documentos, mientras HTTP define un protocolo de aplicación para intercambiar mensajes y representaciones de recursos. Un mensaje HTTP puede transportar HTML, JSON, imágenes u otros contenidos. La presentación se apoya en CSS y la protección del canal HTTPS se obtiene con mecanismos criptográficos de transporte, no por el marcado HTML. La diferencia entre formato y protocolo no desaparece porque ambos formen parte de una misma página web.

- Error A: Confunde HTML con reglas de presentación y atribuye cifrado a HTTP sin distinguir el canal HTTPS. No describe la separación entre documento y protocolo.
- Error B: Que una respuesta pueda guardarse como archivo no convierte HTTP en otro lenguaje documental equivalente a HTML. HTTP define intercambio y semántica de mensajes.
- Error C: Intercambia los papeles. HTML es el lenguaje de marcado del documento y HTTP es el protocolo de aplicación para sus intercambios.

- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · 1.3 Background; 1.5 Scope; 1.8 HTML vs XML syntax: lenguaje de marcado y representación documental · versión: Living Standard consultado, cabecera 26-10-2026; HTML distinto del protocolo HTTP o de una hoja CSS · comprobado: 2026-10-28
- [IETF: RFC 9110, HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · 1 Introduction; 3.3 Connections, semántica aislada por petición; 3.4 Messages; 9.2.1 Safe Methods · versión: RFC 9110, STD 97, junio de 2022; stateless no prohíbe sesiones de aplicación o reutilización de conexiones · comprobado: 2026-10-28

Partida: `8cdcce15569ce5fb1d9c7cc54a77fd0022879a2e8d863171124680c137c3b424` · propuesta: `ee1deb73655be53127d764157949bc8cb502b5e66d3dfd0e69dd4c9f33b2f1c4`

## MAN-GSI-P18-069

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas, clave A; separar semántica por petición, sesión de aplicación y estado de conexión sin asumir solo TCP.

### Antes

¿Qué significa que HTTP sea stateless a nivel de protocolo?

- A. Cada petición se procesa sin requerir que el protocolo mantenga por sí mismo estado de aplicación entre peticiones. **(correcta)**
- B. El servidor no puede relacionar peticiones mediante cookies, tokens o almacenamiento propio porque toda sesión está prohibida.
- C. La conexión TCP debe cerrarse después de cada respuesta y nunca puede reutilizarse para varias peticiones HTTP.
- D. El navegador no puede conservar cookies, caché o almacenamiento local mientras utilice un protocolo considerado stateless.

Explicación: Las aplicaciones pueden mantener estado mediante cookies, tokens o servidor aunque HTTP sea stateless.

### Propuesta

¿Qué significa que HTTP sea stateless a nivel de protocolo?

- A. Cada petición se procesa sin requerir que el protocolo mantenga por sí mismo estado de aplicación entre peticiones. **(correcta)**
- B. El servidor no puede relacionar peticiones mediante cookies, tokens o almacenamiento propio porque toda sesión está prohibida.
- C. La conexión TCP debe cerrarse después de cada respuesta y nunca puede reutilizarse para varias peticiones HTTP.
- D. El navegador no puede conservar cookies, caché o almacenamiento local mientras utilice un protocolo considerado stateless.

Explicación: Stateless significa que la semántica de cada petición HTTP puede entenderse de forma aislada, sin que el protocolo exija una conversación de aplicación acumulada. No prohíbe que una aplicación relacione peticiones mediante cookies, tokens o estado del servidor. Tampoco impide reutilizar conexiones: el estado de transporte y el de aplicación son niveles diferentes. El servidor no debe inferir sin más la identidad de dos peticiones por compartir conexión.

- Error B: Las sesiones de aplicación son compatibles con HTTP. Cookies, tokens o almacenamiento propio pueden asociar peticiones sin cambiar la semántica stateless del protocolo.
- Error C: Stateless no obliga a cerrar una conexión después de cada respuesta. La reutilización de transporte no equivale a mantener el estado de una sesión de aplicación.
- Error D: El navegador puede conservar cookies, caché y almacenamiento local. La característica del protocolo no elimina esas funciones del cliente.

- [IETF: RFC 9110, HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · 1 Introduction; 3.3 Connections, semántica aislada por petición; 3.4 Messages; 9.2.1 Safe Methods · versión: RFC 9110, STD 97, junio de 2022; stateless no prohíbe sesiones de aplicación o reutilización de conexiones · comprobado: 2026-10-28
- [IETF: RFC 6265](https://www.rfc-editor.org/rfc/rfc6265.html) · Abstract; 4.1.2.5 Secure y 4.1.2.6 HttpOnly; 8 Security Considerations · versión: RFC 6265, abril de 2011; mecanismo histórico de estado y atributos. No se atribuye SameSite a este RFC; ese atributo se respalda por MDN y OWASP · comprobado: 2026-10-28

Partida: `8986ce773bd8749f11cf3fa4c35ba3d0219724fdca45abd4a253cfd8d5dadd86` · propuesta: `b87baca3d514985e528f40da34bcde668480dfd51257b0eb5f1390436520a812`

## MAN-GSI-P18-070

Decisión: pending_review · acción: revise.

Motivo: Mantener exposición de secretos en cliente y clave C; microcaso de bundle con credencial privada, distinguiendo minificación, TLS, CORS e identificadores públicos.

### Antes

¿Qué riesgo tiene insertar secretos directamente en JavaScript entregado al navegador?

- A. El navegador los cifra automáticamente de forma segura.
- B. El DOM los oculta del usuario.
- C. El código del cliente es visible/inspeccionable y no debe contener secretos de servidor. **(correcta)**
- D. robots.txt impide que se vean.

Explicación: Las credenciales y claves secretas deben mantenerse en componentes de confianza.

### Propuesta

Una aplicación estática incluye en su bundle JavaScript una credencial privada de un servicio. ¿Qué conclusión es correcta?

- A. La minificación protege la credencial al impedir recuperar sus caracteres.
- B. HTTPS oculta la credencial frente a la persona que ejecuta la página.
- C. El cliente puede inspeccionarla; una credencial privada no debe entregarse así. **(correcta)**
- D. CORS impide reutilizar la credencial a quien descarga el bundle de la página.

Explicación: El código entregado al navegador puede inspeccionarse y una credencial privada incluida en él deja de ser confidencial frente a quien recibe la página. Minificar u ofuscar no crea una frontera de confianza y HTTPS protege el transporte, no oculta el contenido al destinatario. Una aplicación pública debe usar mecanismos adecuados a su condición sin depender de un secreto incrustado. No todo identificador o clave pública es un secreto: el caso especifica una credencial privada.

- Error A: La minificación cambia la representación, pero no impide recuperar el contenido que debe ejecutar el navegador. No aporta confidencialidad de una credencial entregada.
- Error B: El destinatario obtiene el contenido tras el transporte cifrado. HTTPS no lo oculta a la persona o entorno que ejecuta la página.
- Error D: CORS controla el acceso de código web entre orígenes en determinados contextos. No vuelve secreto el bundle ni autentica a quien posea la credencial.

- [OWASP: Web Frontend Security](https://cheatsheetseries.owasp.org/cheatsheets/Web_Frontend_Security_Cheat_Sheet.html) · Use of textContent or innerText for text-only DOM updates; Never transmit secrets to the client; Choose encryption for the threat model · versión: Cheat Sheet Series consultada; documento actual al que redirige AJAX Security; el usuario controla el cliente y TLS protege transporte, no secreto frente al destinatario · comprobado: 2026-10-28
- [IETF: RFC 6749](https://www.rfc-editor.org/rfc/rfc6749.html) · 2.1 Client Types, user-agent-based public client; 2.2 Client Identifier, identificador no secreto · versión: RFC 6749, octubre de 2012; solo clasificación de cliente y confidencialidad. No se recomiendan flujos antiguos ni se implementa OAuth · comprobado: 2026-10-28
- [MDN: Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) · Functional overview; Simple requests; Preflighted requests; Requests with credentials · versión: Documentación de Mozilla; lectura entre orígenes y preflight según petición, no autenticación de clientes o protección universal CSRF · comprobado: 2026-10-28

Partida: `10f35413a97c6bbb8b02e738c71c3d8359f6c2d1e8413607c921ea13841cb07d` · propuesta: `9fe6632e79e9a2c851e9decdce9d5bb45d6eb9d6812bf935332dc4cf5d97b64f`

## MAN-GSI-P18-071

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación de dependencia externa/API/módulo/CDN y clave C; precisar autoría frente a hosting, versiones y límites de integridad.

### Antes

¿Qué es una dependencia de terceros en frontend?

- A. Una API estandarizada implementada por el navegador y disponible sin descargar código de un proveedor externo.
- B. Un módulo desarrollado y mantenido por el propio equipo dentro del mismo repositorio y ciclo de publicación.
- C. Una biblioteca o recurso externo que forma parte de la cadena de suministro y debe gobernarse. **(correcta)**
- D. Un archivo estático creado por la organización y distribuido desde su CDN sin incorporar código de terceros.

Explicación: Las dependencias pueden introducir vulnerabilidades o cambios no controlados.

### Propuesta

¿Qué es una dependencia de terceros en frontend?

- A. Una API estandarizada implementada por el navegador y disponible sin descargar código de un proveedor externo.
- B. Un módulo desarrollado y mantenido por el propio equipo dentro del mismo repositorio y ciclo de publicación.
- C. Una biblioteca o recurso externo que forma parte de la cadena de suministro y debe gobernarse. **(correcta)**
- D. Un archivo estático creado por la organización y distribuido desde su CDN sin incorporar código de terceros.

Explicación: Una dependencia de terceros incorpora código o recursos cuyo mantenimiento y origen quedan fuera del control exclusivo del equipo. Puede descargarse de un proveedor o estar copiada y servida desde el propio repositorio: alojarla localmente no cambia su autoría. Conviene conocer versión, procedencia y cambios y tratar sus riesgos de cadena de suministro. Un script ejecutado en la página puede acceder a su contexto, mientras recursos aislados pueden tener otras restricciones. Fijar versión o usar integridad no demuestra ausencia de vulnerabilidades.

- Error A: Una API implementada por el navegador no es, en la distinción planteada, una biblioteca de proveedor descargada e incorporada al frontend. Su compatibilidad y seguridad se gestionan a otro nivel.
- Error B: Un módulo propio mantenido por el equipo no es una dependencia de tercero por estar dividido en otro archivo. El origen y mantenimiento son la diferencia relevante.
- Error D: Distribuir un archivo propio desde una CDN no le da autoría de terceros. A la inversa, servir localmente una biblioteca ajena no la convierte en código propio.

- [OWASP: Third Party JavaScript Management](https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html) · Introduction; Major risks, Risk 1 Loss of control over changes y Risk 2 Execution of arbitrary code; Third-party JavaScript Deployment Architectures; Security Defense Considerations · versión: Cheat Sheet Series consultada; dependencia de proveedor y ejecución en página, sin equiparar todo recurso externo a código con idénticos privilegios · comprobado: 2026-10-28
- [OWASP: Vulnerable Dependency Management](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerable_Dependency_Management_Cheat_Sheet.html) · Introduction; Context; Remark about the detection; Remark about the security issue handling decision; Cases; Tools, Remediation and maintained backports · versión: Cheat Sheet Series consultada; gestión del riesgo y versiones, no garantía de ausencia de vulnerabilidades por usar SRI o fijar versión · comprobado: 2026-10-28
- [W3C: Subresource Integrity](https://www.w3.org/TR/2016/REC-SRI-20160623/) · Abstract; 3 Integrity metadata y Response verification; 4 Verification of HTML document subresources · versión: W3C Recommendation, 23-06-2016; versión estable específica para comparación por hash, no se confunde con WD SRI de 20-03-2026 · comprobado: 2026-10-28

Partida: `2b7d860f1d97135eb6ab0653b61d0ad625822102dc3db0efd23059d384014f35` · propuesta: `96e9d9e9853a42e7f5998d15dc3ed9c837606932fe46cbe7c40d4ee16c0b4aa5`
