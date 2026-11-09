# GSI-EDITORIAL-035 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `39f4239fcba0b46a15ad40453adc6f83921fa46131725728585cde3bd550d1f7`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P18-072

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación de prácticas de suministro y clave A; distinguir versión fija de abandono de actualizaciones y HTTPS/SRI de revisión de contenido.

### Antes

¿Qué práctica mejora seguridad de dependencias web?

- A. Inventariarlas, fijar/versionar cuando proceda, revisar vulnerabilidades y controlar origen/integridad. **(correcta)**
- B. Referenciar siempre la versión más reciente mediante una URL flotante para recibir cambios sin revisión ni pruebas previas.
- C. Desactivar actualizaciones y auditorías después de la primera instalación para evitar incompatibilidades futuras.
- D. Confiar en cualquier CDN porque el uso de HTTPS garantiza por sí solo procedencia, revisión e integridad del script servido.

Explicación: La cadena de suministro debe tratarse como parte de la superficie de ataque.

### Propuesta

¿Qué práctica mejora seguridad de dependencias web?

- A. Inventariarlas, fijar/versionar cuando proceda, revisar vulnerabilidades y controlar origen/integridad. **(correcta)**
- B. Referenciar siempre la versión más reciente mediante una URL flotante para recibir cambios sin revisión ni pruebas previas.
- C. Desactivar actualizaciones y auditorías después de la primera instalación para evitar incompatibilidades futuras.
- D. Confiar en cualquier CDN porque el uso de HTTPS garantiza por sí solo procedencia, revisión e integridad del script servido.

Explicación: Gestionar dependencias requiere conocer origen y versión, revisar vulnerabilidades y cambios y controlar qué se integra. Fijar una versión puede dar reproducibilidad, pero debe acompañarse de un proceso de actualización y pruebas. HTTPS protege la entrega y SRI coteja bytes con una referencia esperada; ninguno acredita por sí solo que el código sea seguro. El inventario debe seguir la dependencia aunque se copie al repositorio propio o cambie su forma de distribución.

- Error B: Una URL flotante puede introducir cambios sin haberlos revisado o probado. Recibir automáticamente la versión más reciente no equivale a controlar el riesgo de suministro.
- Error C: Congelar sin seguimiento deja sin tratar vulnerabilidades y cambios de soporte. La estabilidad de una versión no elimina la necesidad de revisar y actualizar cuando proceda.
- Error D: HTTPS no demuestra que un proveedor haya auditado el código o que su contenido sea el previsto por la aplicación. Hace falta controlar confianza, versión e integridad según el contexto.

- [OWASP: Vulnerable Dependency Management](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerable_Dependency_Management_Cheat_Sheet.html) · Introduction; Context; Remark about the detection; Cases; Tools, Remediation and maintained backports · versión: Cheat Sheet Series consultada; gestión de versiones y vulnerabilidades según contexto, no garantía de riesgo cero · comprobado: 2026-10-28
- [OWASP: Third Party JavaScript Management](https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html) · Major risks; Security Defense Considerations, Subresource Integrity y Keeping JavaScript libraries updated · versión: Cheat Sheet Series consultada; procedencia, cambios y privilegios, sin atribuir revisión de seguridad a la mera entrega por HTTPS · comprobado: 2026-10-28
- [W3C: Subresource Integrity](https://www.w3.org/TR/2016/REC-SRI-20160623/) · Abstract; 3 Integrity metadata y verificación de respuesta; 4 verificación de subrecursos HTML · versión: W3C Recommendation, 23-06-2016; versión estable concreta para cotejo por hash, no auditoría de seguridad del contenido · comprobado: 2026-10-28

Partida: `b5794559d9a2801d94f9274175d9e6db2bcf1b94111009ecf7670f0bd857f38b` · propuesta: `0c6227458e170671ca813db63650089dd20700984f1b8611b3ea4d02d39a5ffc`

## MAN-GSI-P18-073

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación petición síncrona/temporizador/asíncrona/navegación, clave C; precisar trabajo de CPU y estado HTTP sin promesa de fluidez universal.

### Antes

¿Qué es una petición asíncrona desde navegador?

- A. Una llamada de red que mantiene bloqueado el hilo de la interfaz hasta recibir por completo la respuesta o producirse un error.
- B. Un temporizador que retrasa una función durante un intervalo fijado, aunque no realice ninguna comunicación con un servidor.
- C. Una operación de red que puede completarse sin bloquear de forma síncrona toda la interfaz. **(correcta)**
- D. Una navegación que sustituye el documento completo y espera una nueva página, sin coordinar la respuesta desde el código actual.

Explicación: Fetch/promesas permiten coordinar E/S asíncrona.

### Propuesta

¿Qué es una petición asíncrona desde navegador?

- A. Una llamada de red que mantiene bloqueado el hilo de la interfaz hasta recibir por completo la respuesta o producirse un error.
- B. Un temporizador que retrasa una función durante un intervalo fijado, aunque no realice ninguna comunicación con un servidor.
- C. Una operación de red que puede completarse sin bloquear de forma síncrona toda la interfaz. **(correcta)**
- D. Una navegación que sustituye el documento completo y espera una nueva página, sin coordinar la respuesta desde el código actual.

Explicación: Una petición asíncrona permite iniciar la comunicación y continuar el trabajo del contexto sin esperar mediante una llamada de red síncrona. La respuesta se coordina con mecanismos como promesas o callbacks. Esto no garantiza que todo código sea no bloqueante: un cálculo pesado o procesado de respuesta puede seguir ocupando el hilo principal. En fetch también se debe comprobar el estado HTTP, porque recibir un 404 no provoca automáticamente un rechazo de su promesa.

- Error A: Una llamada que mantiene bloqueado el hilo esperando la respuesta es el comportamiento síncrono que se está distinguiendo, no la coordinación asíncrona descrita.
- Error B: Un temporizador planifica trabajo posterior, pero no es por sí mismo una petición de red. Confunde el mecanismo de espera con la comunicación.
- Error D: Una navegación completa cambia el documento en vez de coordinar la respuesta desde el código actual. No es la operación de red programática que plantea la definición.

- [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) · Making a request; Handling the response; Checking response status: fetch, promesas y errores HTTP · versión: Documentación de Mozilla; fetch no rechaza automáticamente por un estado HTTP 404 · comprobado: 2026-10-28
- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) · Description; estados pending/fulfilled/rejected; encadenamiento y orden de handlers · versión: Documentación de Mozilla; una promesa puede estar ya resuelta, su executor es síncrono y los handlers se planifican como jobs · comprobado: 2026-10-28
- [MDN: JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) · Job queue and event loop; run-to-completion; jobs y tareas asíncronas · versión: Documentación de Mozilla; coordinación asíncrona distinta de paralelismo garantizado · comprobado: 2026-10-28

Partida: `263cbdce4f8e4736a78f1f2c6732e993efa29bafa62ac84408575d69f395882d` · propuesta: `cdda78faefd5b221f3731794140e2953fe51e2191b2fda293f1128652cc0c181`

## MAN-GSI-P18-074

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas, clave A; completar estados, executor y handlers para evitar confundir resultado futuro con hilo o plazo.

### Antes

¿Qué es una Promise en JavaScript?

- A. Una abstracción para representar el resultado futuro de una operación asíncrona. **(correcta)**
- B. Un hilo independiente creado por el motor de JavaScript para ejecutar en paralelo cualquier función que se le asigne.
- C. Un evento del DOM que se dispara cuando termina toda operación asíncrona realizada dentro de la página.
- D. Un temporizador que ejecuta una función tras un intervalo fijo y garantiza que el resultado esté disponible en ese momento.

Explicación: Promesas permiten encadenar y manejar éxito/error de operaciones asíncronas.

### Propuesta

¿Qué es una Promise en JavaScript?

- A. Una abstracción para representar el resultado futuro de una operación asíncrona. **(correcta)**
- B. Un hilo independiente creado por el motor de JavaScript para ejecutar en paralelo cualquier función que se le asigne.
- C. Un evento del DOM que se dispara cuando termina toda operación asíncrona realizada dentro de la página.
- D. Un temporizador que ejecuta una función tras un intervalo fijo y garantiza que el resultado esté disponible en ese momento.

Explicación: Una Promise representa la eventual finalización de una operación y su valor o motivo de rechazo, permitiendo encadenar continuaciones. Al observarla puede estar pendiente, cumplida o rechazada: el resultado futuro es el modelo de coordinación, no una obligación de que siempre permanezca pendiente durante cierto tiempo. No crea un hilo ni fija una duración. Su executor se invoca de forma síncrona y los handlers se ejecutan mediante la cola de jobs, incluso si el resultado ya está disponible.

- Error B: Una promesa no crea por definición un hilo del sistema operativo ni convierte cualquier función en trabajo paralelo. Representa resultado y coordinación.
- Error C: No es un evento DOM global de finalización de toda la página. Cada promesa tiene su propio estado y continuaciones.
- Error D: No garantiza un plazo de finalización. Un temporizador y una promesa tienen papeles distintos, aunque puedan usarse juntos.

- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) · Description; estados pending/fulfilled/rejected; encadenamiento y orden de handlers · versión: Documentación de Mozilla; una promesa puede estar ya resuelta, su executor es síncrono y los handlers se planifican como jobs · comprobado: 2026-10-28
- [MDN: JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) · Job queue and event loop; run-to-completion; jobs y tareas asíncronas · versión: Documentación de Mozilla; coordinación asíncrona distinta de paralelismo garantizado · comprobado: 2026-10-28

Partida: `516b902553a241df43f172e0b9c1dde442b511856e7a540c1ba0e4260f0ed969` · propuesta: `5b92529b2a6caf6091cf3df0aa215b00d47a7ee40552b87809bff5639dbafb00`

## MAN-GSI-P18-075

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra distinción async/await y clave B; completar propagación de error, suspensión de continuación y trabajo síncrono.

### Antes

¿Qué aporta async/await?

- A. Convierte la operación en síncrona y bloquea el hilo hasta obtener el valor que aparece después de cada \`await\`.
- B. Sintaxis para trabajar con promesas de forma más legible, sin convertir la operación en síncrona real. **(correcta)**
- C. Crea un hilo del sistema operativo por cada espera para ejecutar en paralelo la promesa hasta que finalice.
- D. Captura y descarta automáticamente cualquier rechazo, por lo que el código llamador no necesita gestionar errores.

Explicación: async/await es azúcar sintáctico sobre mecanismos asíncronos.

### Propuesta

¿Qué aporta async/await?

- A. Convierte la operación en síncrona y bloquea el hilo hasta obtener el valor que aparece después de cada \`await\`.
- B. Sintaxis para trabajar con promesas de forma más legible, sin convertir la operación en síncrona real. **(correcta)**
- C. Crea un hilo del sistema operativo por cada espera para ejecutar en paralelo la promesa hasta que finalice.
- D. Captura y descarta automáticamente cualquier rechazo, por lo que el código llamador no necesita gestionar errores.

Explicación: async/await permite expresar continuaciones sobre promesas de forma secuencial en el código. Una función async devuelve una promesa y await suspende su continuación mientras cede el control, sin bloquear de forma síncrona el hilo esperando el resultado. Un rechazo puede propagarse como excepción en ese punto y requiere el manejo que corresponda, por ejemplo try/catch o el llamador. El código síncrono antes de la espera puede seguir bloqueando y no se crea automáticamente un hilo por await.

- Error A: Confunde la apariencia secuencial con una espera síncrona del hilo. await suspende la continuación, no convierte la operación en una llamada bloqueante.
- Error C: No existe una regla que cree un hilo por cada await. La ejecución depende del motor y del tipo de trabajo, no de esa equivalencia.
- Error D: Los rechazos no se descartan por usar async. Pueden propagarse y deben manejarse de forma explícita en el lugar adecuado.

- [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) · Description; promesa devuelta, suspensión en await y manejo de rechazo · versión: Documentación de Mozilla; async no crea por definición hilos ni vuelve no bloqueante cualquier trabajo de CPU · comprobado: 2026-10-28
- [MDN: await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) · Description; conversión a promesa, rechazo y suspensión del contexto de ejecución · versión: Documentación de Mozilla; pausa de la continuación, no bloqueo síncrono del hilo ni descarte automático de errores · comprobado: 2026-10-28
- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) · Description; estados pending/fulfilled/rejected; encadenamiento y orden de handlers · versión: Documentación de Mozilla; una promesa puede estar ya resuelta, su executor es síncrono y los handlers se planifican como jobs · comprobado: 2026-10-28
- [MDN: JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) · Job queue and event loop; run-to-completion; jobs y tareas asíncronas · versión: Documentación de Mozilla; coordinación asíncrona distinta de paralelismo garantizado · comprobado: 2026-10-28

Partida: `1e121331513b9ea4c05569879e0eab438be52f8d13d640a2aee4171b4c81bd8d` · propuesta: `b96dabc990893fa7413ac751ed73b8be30de930780465dfff14a508df3175d74`

## MAN-GSI-P18-076

Decisión: pending_review · acción: revise.

Motivo: Mantener validación cliente/servidor y clave B; caso de controles de formulario eludibles frente a validación de entrada y autorización.

### Antes

¿Qué diferencia hay entre validación en cliente y servidor?

- A. La validación del cliente basta como control de seguridad porque el servidor recibe únicamente datos que el navegador ya ha aprobado.
- B. La de cliente mejora UX, pero la de servidor sigue siendo necesaria como frontera de confianza. **(correcta)**
- C. La validación del servidor solo se utiliza con documentos XML y no resulta necesaria para formularios HTML, JSON ni llamadas de API.
- D. Ambas validaciones son incompatibles y deben excluirse mutuamente para evitar que apliquen reglas distintas sobre una misma entrada.

Explicación: El cliente puede manipularse; la validación autoritativa debe realizarse en servidor.

### Propuesta

Un formulario usa required y controles de formato, pero su backend recibe también peticiones enviadas sin ese formulario. ¿Qué enfoque es correcto?

- A. La validación del navegador permite omitir la comprobación de entrada en el backend.
- B. La validación local mejora la experiencia; la autoritativa se realiza en el backend. **(correcta)**
- C. La validación del servidor sustituye la autorización del usuario que envía los datos.
- D. Las validaciones de cliente y servidor son incompatibles si comparten las mismas reglas.

Explicación: Si un backend acepta datos del navegador o de otros clientes, debe comprobarlos en su frontera de confianza con sus reglas autoritativas. Las restricciones del formulario ayudan a la persona y permiten detectar errores antes, pero pueden omitirse al construir otra petición. Validar estructura o valores tampoco sustituye comprobar permisos y reglas de negocio. Esta explicación se refiere al servicio descrito, no propone añadir un backend a una aplicación estática que no lo necesita.

- Error A: El navegador no es una frontera de confianza para quien recibe la petición. Un cliente puede modificar u omitir esos controles y enviar datos por otra vía.
- Error C: La autorización decide si una identidad puede realizar la operación. Una entrada con formato válido no demuestra ese permiso.
- Error D: Ambas validaciones pueden complementar la misma regla: una da respuesta inmediata y la otra decide qué acepta el servicio. No son incompatibles por compartir criterios.

- [OWASP: Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) · Introduction; validación sintáctica/semántica; Common mistakes, Client-only checks y fronteras de confianza · versión: Cheat Sheet Series consultada; validación autoritativa al recibir datos, distinta de autorización o escape de salida · comprobado: 2026-10-28

Partida: `dea37538a002049b98f21ee13164da1474ef05d45516c6ca445d9f71019b841b` · propuesta: `7bfc6692315da1d96d686ce5c81fa075321c3f9f1a9073cbf383c6443b1987c8`

## MAN-GSI-P18-077

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación sanitizar/validar/escapar/normalizar, clave D; fijar contexto y evitar un filtro universal o librería nueva en el producto.

### Antes

¿Qué es sanitización en contexto de contenido?

- A. Comprobar que los datos cumplen el formato, tipo y restricciones esperados antes de procesarlos.
- B. Representar caracteres especiales para que se interpreten como texto en un contexto de salida concreto.
- C. Convertir representaciones equivalentes a una forma canónica antes de compararlas o procesarlas.
- D. Transformar o filtrar contenido para eliminar construcciones peligrosas permitiendo solo un subconjunto seguro. **(correcta)**

Explicación: Sanitizar es distinto de validar o escapar y depende del contexto.

### Propuesta

¿Qué es sanitización en contexto de contenido?

- A. Comprobar que los datos cumplen el formato, tipo y restricciones esperados antes de procesarlos.
- B. Representar caracteres especiales para que se interpreten como texto en un contexto de salida concreto.
- C. Convertir representaciones equivalentes a una forma canónica antes de compararlas o procesarlas.
- D. Transformar o filtrar contenido para eliminar construcciones peligrosas permitiendo solo un subconjunto seguro. **(correcta)**

Explicación: Sanitizar contenido consiste en retirar o transformar construcciones no permitidas para conservar un subconjunto admitido en un contexto concreto, por ejemplo HTML enriquecido. Es distinto de validar si un dato cumple reglas, de codificar para mostrarlo como texto o de normalizar representaciones equivalentes. No existe un filtro universal seguro para todos los destinos. Si solo se requiere texto, una API de texto puede evitar interpretar HTML; si se permite marcado, se necesita un saneamiento adecuado y mantenido.

- Error A: Describe validación de entrada: comprobar restricciones de formato, tipo o valor. Esa comprobación no implica por sí sola retirar construcciones HTML activas.
- Error B: Describe codificación o escape de salida para un contexto. Sanitizar puede conservar marcado permitido, mientras codificarlo como texto cumple otra finalidad.
- Error C: Describe normalización o canonicalización, que reduce representaciones equivalentes a formas acordadas. No elimina automáticamente construcciones peligrosas.

- [OWASP: Cross Site Scripting Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) · Output Encoding por contexto; HTML Sanitization; Safe Sinks; límites de filtros y CSP aislada · versión: Cheat Sheet Series consultada; sanitización para contenido permitido y codificación contextual no son operaciones intercambiables · comprobado: 2026-10-28
- [OWASP: Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) · Introduction; validación sintáctica/semántica; Common mistakes, Client-only checks y fronteras de confianza · versión: Cheat Sheet Series consultada; validación autoritativa al recibir datos, distinta de autorización o escape de salida · comprobado: 2026-10-28
- [Unicode: UAX 15, Unicode Normalization Forms](https://www.unicode.org/reports/tr15/) · 1 Introduction; Normalization Forms: equivalencia y formas normalizadas · versión: Versión observada Unicode 18.0.0, revisión 58, 12-08-2026; solo diferencia conceptual de normalización frente a saneamiento, sin asumir esa versión en motores instalados · comprobado: 2026-10-28

Partida: `11a373cbc50a0056471e81e9e0587d745c39f68d0143c66902e894ab189dc91a` · propuesta: `83753f893fb9367eed99b39327e9639ea12aaa50219fb5709903e13022386f8c`

## MAN-GSI-P18-078

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegro caso de XML externo y clave A; precisar versión, entidades y límites sin atribuir a XSD, extensión o no\_network protección total.

### Antes

Una aplicación web recibe XML externo. ¿Qué riesgo adicional debe considerarse?

- A. Procesamiento seguro del parser, evitando configuraciones peligrosas como resolución no controlada de entidades externas. **(correcta)**
- B. Confiar en el documento cuando su extensión sea \`.xml\` y el servidor declare un tipo MIME de XML, sin limitar el parser.
- C. Activar la resolución de entidades externas para que el documento sea completo, permitiendo al parser acceder a cualquier URI indicada.
- D. Validar únicamente contra un XSD, porque el esquema impide por sí mismo toda expansión de entidades o acceso a recursos externos.

Explicación: Los parsers deben configurarse de forma segura frente a XXE y otros abusos.

### Propuesta

Una aplicación web recibe XML externo. ¿Qué riesgo adicional debe considerarse?

- A. Procesamiento seguro del parser, evitando configuraciones peligrosas como resolución no controlada de entidades externas. **(correcta)**
- B. Confiar en el documento cuando su extensión sea \`.xml\` y el servidor declare un tipo MIME de XML, sin limitar el parser.
- C. Activar la resolución de entidades externas para que el documento sea completo, permitiendo al parser acceder a cualquier URI indicada.
- D. Validar únicamente contra un XSD, porque el esquema impide por sí mismo toda expansión de entidades o acceso a recursos externos.

Explicación: Un XML externo debe procesarse con una configuración y límites adecuados al parser y a su versión. Resolver entidades externas o cargar recursos sin control puede exponer archivos, provocar solicitudes desde el servidor o consumir recursos. La buena formación o una validación XSD no sustituyen esos controles y el problema puede surgir antes de validar. Las opciones tienen alcances distintos: impedir red no equivale necesariamente a impedir lectura local, y desactivar una función no acredita seguridad general del procesador.

- Error B: La extensión y el tipo MIME no hacen confiable el contenido ni limitan las capacidades del parser. Identificar el formato no sustituye configurar su tratamiento.
- Error C: Permitir cualquier recurso indicado por la entrada cede decisiones de acceso al documento no confiable. La necesidad de completar un documento no justifica resolución sin restricciones.
- Error D: Un XSD contrasta restricciones de instancia, pero no configura por sí mismo todas las fases del análisis o acceso a entidades externas. La evaluación puede ocurrir después de una resolución peligrosa.

- [OWASP: XML External Entity Prevention](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html) · Introduction; General Guidance; controles específicos de parser; External resources for transformations and validation · versión: Cheat Sheet Series consultada; configuración según biblioteca/versión, entidades, red/recursos y límites de procesamiento; XSD no sustituye controles del parser · comprobado: 2026-10-28
- [W3C: XML 1.0, Fifth Edition](https://www.w3.org/TR/REC-xml/) · 1.1 Origin and Goals; 2.1 Well-Formed XML Documents; 2.4 Character Data and Markup; 4.3.3 Character Encoding · versión: W3C Recommendation, 26-11-2008; buena formación sintáctica frente a validez DTD, evaluación XSD y significado de negocio · comprobado: 2026-10-28
- [W3C: XSD 1.1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; schema-validity assessment · versión: W3C Recommendation, 05-04-2012; restricciones de instancia respecto al esquema aplicable, sin garantizar semántica de negocio o configuración segura del parser · comprobado: 2026-10-28

Partida: `15f766fb2ce83d9da6e3b42ed36d077020214d7804f48d181836a615068831f0` · propuesta: `7b882c07b6c730503217aa551c7dbe767d9bba968c999c358b29f0f41045e315`

## MAN-GSI-P18-079

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación accesibilidad/responsive/SEO/identidad, clave C; completar robustez y no convertir un control aislado en certificación.

### Antes

¿Qué es accesibilidad web en este contexto?

- A. Adaptar la cuadrícula y los componentes visuales para que la interfaz responda a distintos tamaños de pantalla.
- B. Optimizar estructura, metadatos y contenido para facilitar el rastreo y posicionamiento en motores de búsqueda.
- C. Diseñar contenido y controles para que puedan ser percibidos, operados y comprendidos por usuarios con distintas capacidades. **(correcta)**
- D. Mantener coherencia de color, tipografía y estilo visual para reforzar la identidad gráfica del sitio.

Explicación: Semántica, teclado, alternativas textuales, contraste y mensajes claros forman parte del diseño accesible.

### Propuesta

¿Qué es accesibilidad web en este contexto?

- A. Adaptar la cuadrícula y los componentes visuales para que la interfaz responda a distintos tamaños de pantalla.
- B. Optimizar estructura, metadatos y contenido para facilitar el rastreo y posicionamiento en motores de búsqueda.
- C. Diseñar contenido y controles para que puedan ser percibidos, operados y comprendidos por usuarios con distintas capacidades. **(correcta)**
- D. Mantener coherencia de color, tipografía y estilo visual para reforzar la identidad gráfica del sitio.

Explicación: La accesibilidad web busca que las personas con discapacidades y distintas capacidades puedan percibir, operar y comprender el contenido y los controles, con compatibilidad suficiente para sus tecnologías de apoyo. WCAG añade el principio de robustez a esa organización conceptual. Semántica, teclado, alternativas, contraste y mensajes claros son piezas de un conjunto; no basta adaptar la cuadrícula a pantallas o usar una tecnología concreta. Una prueba aislada tampoco acredita conformidad completa.

- Error A: El diseño adaptable mejora el uso en distintos tamaños y puede ayudar a la accesibilidad, pero no cubre por sí solo teclado, percepción, comprensión o compatibilidad.
- Error B: SEO se orienta a rastreo, comprensión e indexación por buscadores. Puede compartir buenas prácticas, pero no sustituye el acceso de personas con discapacidades.
- Error D: La coherencia gráfica favorece la experiencia y la identidad, pero no demuestra contraste suficiente, uso por teclado o alternativas accesibles.

- [W3C WAI: Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/) · What is Web Accessibility; Making the Web Accessible; Evaluating Accessibility · versión: Introducción WAI consultada; acceso por personas con discapacidades y diversidad de capacidades, no solo adaptación visual a pantallas · comprobado: 2026-10-28
- [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/) · WCAG 2 Layers of Guidance; principios 1 Perceivable, 2 Operable, 3 Understandable y 4 Robust · versión: W3C Recommendation, 12-12-2024; estándar técnico citado como tal, no se deduce por esta cita la versión legal exigible a toda AAPP · comprobado: 2026-10-28
- [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) · Introducción, límites de las prácticas SEO y comprensión/rastreo del contenido · versión: Documentación primaria del buscador consultada; no hay garantía automática de primera posición por usar elementos semánticos · comprobado: 2026-10-28

Partida: `0a63f24e1eaaf4e877df5371b983fe7c8a0a1a4f4e0c90194b17524e6d8b1ca5` · propuesta: `9026f35cb167e18c1275a21f14cfbcc77dc835952c90cb4958d4bb0d05f9ab9e`

## MAN-GSI-P18-080

Decisión: pending_review · acción: revise.

Motivo: Mantener caso de interfaz AAPP e integración y clave D; comparar soluciones parciales plausibles, retirando distractores manifiestamente ajenos o inseguros.

### Antes

Caso final II.09: una AAPP publica formularios HTML y además intercambia expedientes XML. ¿Qué enfoque es más completo?

- A. Sustituir toda interfaz web por XML sin esquema, semántica HTML ni controles de accesibilidad para que un único formato cubra ambos usos.
- B. Incluir secretos en JavaScript y aceptar cualquier XML sin restricciones porque el navegador y el parser neutralizan automáticamente las entradas.
- C. Eliminar toda validación para mejorar la compatibilidad, aunque se reciban estructuras imprevistas, contenido malicioso o versiones incompatibles.
- D. Usar HTML semántico/accesible para interfaz, scripts seguros, y XML con namespaces/esquemas/versionado para integración. **(correcta)**

Explicación: La solución diferencia interfaz web, scripting y contrato de intercambio XML.

### Propuesta

Una AAPP publica formularios HTML e intercambia expedientes XML con otros organismos. ¿Qué enfoque distingue las necesidades de interfaz y de integración?

- A. HTML semántico para formularios y buena formación XML como única comprobación del intercambio.
- B. Esquemas XML para integrar datos y para acreditar también la accesibilidad de los formularios.
- C. Validación del navegador para el usuario y confianza en ella para las entradas del receptor.
- D. HTML accesible, scripts seguros y contratos XML con namespaces, esquemas y evolución controlada. **(correcta)**

Explicación: La interfaz y el intercambio tienen necesidades distintas: HTML semántico y controles accesibles para las personas, ejecución segura de scripts y contratos XML que identifiquen vocabularios, restricciones y evolución. La buena formación no demuestra todo el contrato; un XSD no certifica accesibilidad ni reemplaza configuración segura del parser. La validación del receptor no puede depender solo del navegador. La combinación propuesta orienta el diseño, sin garantizar seguridad o interoperabilidad por enumerar tecnologías.

- Error A: La buena formación es una condición sintáctica. Si el intercambio tiene un contrato, faltan sus restricciones y reglas de versión; HTML semántico no resuelve esa parte.
- Error B: Un esquema del intercambio no evalúa cómo una persona percibe u opera el formulario. Confunde conformidad documental con accesibilidad de la interfaz.
- Error C: La validación del cliente puede eludirse. El receptor necesita sus propias comprobaciones y tratamiento seguro de las entradas.

- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · 1.3 Background; 1.5 Scope; 1.8 HTML vs XML syntax · versión: Living Standard consultado; cabecera 26-10-2026, significado documental y sintaxis frente a procesamiento o estilo · comprobado: 2026-10-28
- [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/) · WCAG 2 Layers of Guidance; principios 1 Perceivable, 2 Operable, 3 Understandable y 4 Robust · versión: W3C Recommendation, 12-12-2024; estándar técnico citado como tal, no se deduce por esta cita la versión legal exigible a toda AAPP · comprobado: 2026-10-28
- [OWASP: Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) · Introduction; validación sintáctica/semántica; Common mistakes, Client-only checks y fronteras de confianza · versión: Cheat Sheet Series consultada; validación autoritativa al recibir datos, distinta de autorización o escape de salida · comprobado: 2026-10-28
- [OWASP: Cross Site Scripting Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) · Output Encoding por contexto; HTML Sanitization; Safe Sinks; límites de filtros y CSP aislada · versión: Cheat Sheet Series consultada; sanitización para contenido permitido y codificación contextual no son operaciones intercambiables · comprobado: 2026-10-28
- [OWASP: XML External Entity Prevention](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html) · Introduction; General Guidance; controles específicos de parser; External resources for transformations and validation · versión: Cheat Sheet Series consultada; configuración según biblioteca/versión, entidades, red/recursos y límites de procesamiento; XSD no sustituye controles del parser · comprobado: 2026-10-28
- [W3C: Namespaces in XML 1.0](https://www.w3.org/TR/xml-names/) · 1 Motivation and Summary; 2.1 Basic Concepts; 3 Declaring Namespaces; 4 y 5 Qualified Names · versión: Third Edition, W3C Recommendation, 08-12-2009; nombre expandido por URI y nombre local; prefijo local, sin descarga de esquema obligatoria · comprobado: 2026-10-28
- [W3C: XSD 1.1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; schema-validity assessment · versión: W3C Recommendation, 05-04-2012; restricciones de instancia respecto al esquema aplicable, sin garantizar semántica de negocio o configuración segura del parser · comprobado: 2026-10-28

Partida: `0b0d062d58328aa3d945f451e26f52722853b57fe26560189dfebdee8516e253` · propuesta: `543c1196959173bb151175964f1ae1236946163dcd6974c30008bb640581e00f`

## MAN-GSI-P18-001

Decisión: pending_review · acción: revise.

Motivo: Mantener lenguaje de marcas y clave A; distractores próximos de instrucción, transformación y codificación sin afirmar que una notación de marcado nunca pueda programar.

### Antes

¿Qué es un lenguaje de marcas?

- A. Un sistema que incorpora etiquetas o metadatos al contenido para representar estructura, semántica o presentación. **(correcta)**
- B. Un lenguaje destinado únicamente a ejecutar cálculos numéricos y que no puede describir estructura, semántica ni presentación de contenido.
- C. Un protocolo de transporte que entrega paquetes entre nodos de una red y utiliza etiquetas para seleccionar la ruta física de cada conexión.
- D. Un sistema operativo de propósito general que administra procesos, memoria y dispositivos mediante documentos etiquetados por el usuario.

Explicación: Los lenguajes de marcas describen estructura o significado; no son por ello lenguajes de programación.

### Propuesta

¿Qué es un lenguaje de marcas?

- A. Un sistema de marcas para representar estructura, significado o presentación. **(correcta)**
- B. El conjunto de instrucciones que el procesador ejecuta como operaciones nativas.
- C. Una transformación que convierte un documento de un vocabulario a otro.
- D. Una codificación que representa caracteres del texto mediante secuencias de bytes.

Explicación: Un lenguaje de marcas aporta anotaciones al contenido para expresar su estructura o significado, y en algunos casos información de presentación. HTML y XML ilustran usos diferentes de ese marcado. No debe confundirse la anotación con una codificación de caracteres o con la transformación de un documento. Que una notación use marcas no determina por sí solo todas sus capacidades computacionales: existen vocabularios que describen programas o transformaciones.

- Error B: Describe instrucciones de ejecución del procesador. El marcado identifica partes y significado del contenido; no se define por ser código máquina.
- Error C: Convertir entre vocabularios es una transformación, como la que puede describir XSLT. No es la definición general de lenguaje de marcas.
- Error D: Una codificación relaciona caracteres y bytes para representar el texto. Es una capa distinta del significado de las marcas dentro de ese texto.

- [W3C: XML 1.0, Fifth Edition](https://www.w3.org/TR/REC-xml/) · 1.1 Origin and Goals; 2.1 Well-Formed XML Documents; 2.4 Character Data and Markup; 4.3.3 Character Encoding · versión: W3C Recommendation, 26-11-2008; buena formación sintáctica frente a validez DTD, evaluación XSD y significado de negocio · comprobado: 2026-10-28
- [W3C HTML 4.01: On SGML and HTML](https://www.w3.org/TR/html401/intro/sgmltut.html) · 3.1 Introduction to SGML; 3.2 SGML constructs used in HTML · versión: HTML 4.01, 24-12-1999; definición y relación histórica del marcado, no parser del HTML moderno · comprobado: 2026-10-28
- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · 1.3 Background; 1.5 Scope; 1.8 HTML vs XML syntax · versión: Living Standard consultado; cabecera 26-10-2026, significado documental y sintaxis frente a procesamiento o estilo · comprobado: 2026-10-28
- [W3C: XSLT 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) · 1 Introduction; 5 Template Rules; 7 Creating the Result Tree · versión: W3C Recommendation, 16-11-1999; función de transformación para distinguirla de marcado o codificación; no última versión · comprobado: 2026-10-28

Partida: `dbdb6aafe2682d5270bd2f9ea3933441b1a7e3325d8fdf75eaaa35543e3c41d4` · propuesta: `c4d87303cf479086a6545ebca3a415d24d8ea63482799fe1dca206f7fdd43f4e`

## MAN-GSI-P18-009

Decisión: pending_review · acción: revise.

Motivo: Mantener ventaja de semántica HTML y clave D; comparar significado con estilo, análisis y ranking, con matiz de landmarks según contexto.

### Antes

¿Qué ventaja aporta usar elementos semánticos como nav, article o footer?

- A. Eliminan la necesidad de CSS.
- B. Convierten HTML en XML.
- C. Garantizan por sí solos posicionamiento SEO máximo.
- D. Mejoran estructura, accesibilidad, mantenimiento e interpretación por herramientas. **(correcta)**

Explicación: La semántica ayuda a usuarios, tecnologías de apoyo y procesamiento, pero no sustituye calidad o CSS.

### Propuesta

¿Qué ventaja aporta usar elementos semánticos como nav, article o footer?

- A. Asignan estilos visuales fijos que sustituyen las reglas de una hoja CSS.
- B. Seleccionan el parser XML aunque el documento se entregue como text/html.
- C. Fijan la posición de la página en el ranking sin depender de su contenido.
- D. Expresan estructura y significado que pueden aprovechar personas y herramientas. **(correcta)**

Explicación: Elementos como nav, article o footer expresan el papel del contenido y pueden ayudar a la navegación, a tecnologías de apoyo y al mantenimiento. Sus efectos dependen del uso y del contexto: no todo footer constituye el landmark global de la página. Esa semántica no reemplaza CSS, no elige por sí sola el parser XML y no garantiza posiciones en buscadores. Hace falta comprobar el conjunto de la interfaz y de su contenido, no solo la presencia de etiquetas.

- Error A: Las reglas de presentación pueden definir el aspecto de esos elementos. Su significado no sustituye una hoja CSS ni fija por completo la apariencia.
- Error B: Usar esos nombres no cambia el tipo MIME ni hace que text/html se analice como XML. Sintaxis y semántica son dimensiones distintas.
- Error C: Los buscadores consideran múltiples aspectos y no garantizan una posición por usar ciertas etiquetas. La semántica no es un mecanismo de ranking fijo.

- [WHATWG HTML: Semantics](https://html.spec.whatwg.org/multipage/dom.html#semantics-2) · 3.2.1 Semantics: significado de elementos/atributos y representación de contenido · versión: Living Standard consultado; significado no equivalente a aspecto fijo o garantía de ranking · comprobado: 2026-10-28
- [WHATWG HTML: Sections](https://html.spec.whatwg.org/multipage/sections.html) · 4.3 Sections: article, nav y footer; significado y contextos de uso · versión: Living Standard consultado; no se asigna el mismo rol de landmark a todo footer en cualquier contexto · comprobado: 2026-10-28
- [W3C WAI APG: Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) · Introduction; HTML Sectioning Elements; General Principles of Landmark Design; Landmark Roles · versión: Guía APG consultada; estructura y navegación accesible, no certificación global de accesibilidad · comprobado: 2026-10-28
- [W3C CSS 2.1: Introduction](https://www.w3.org/TR/CSS2/intro.html) · 2.1 y 2.2 tutoriales HTML/XML; 2.3 Processing model: reglas de presentación · versión: CSS 2.1; solo distinción de presentación respecto a semántica y análisis, no catálogo completo de CSS moderno · comprobado: 2026-10-28
- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · 1.3 Background; 1.5 Scope; 1.8 HTML vs XML syntax · versión: Living Standard consultado; cabecera 26-10-2026, significado documental y sintaxis frente a procesamiento o estilo · comprobado: 2026-10-28
- [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) · Introducción, límites de las prácticas SEO y comprensión/rastreo del contenido · versión: Documentación primaria del buscador consultada; no hay garantía automática de primera posición por usar elementos semánticos · comprobado: 2026-10-28

Partida: `6c6446b45a4480877bcb68e800039c93b124150a99bea4b67330aac86fb6f942` · propuesta: `1de30007ae56bf16c1608645f9a9e1bab39daf1229772db0aca121ad00725929`

## MAN-GSI-P18-022

Decisión: pending_review · acción: revise.

Motivo: Mantener buena formación sintáctica y clave A; cuatro criterios distintos y precisión sobre DTD/XSD frente a reglas de negocio o recuperación HTML.

### Antes

¿Qué significa que un documento XML esté bien formado?

- A. Que cumple las reglas sintácticas fundamentales de XML. **(correcta)**
- B. Que cumple necesariamente un XSD.
- C. Que su contenido es correcto desde el punto de vista del negocio.
- D. Que utiliza HTML válido.

Explicación: Bien formado es requisito sintáctico; válido implica además conformidad con un esquema/DTD si se declara.

### Propuesta

¿Qué significa que un documento XML esté bien formado?

- A. Que satisface las reglas sintácticas de XML para un documento. **(correcta)**
- B. Que satisface las restricciones del XSD aplicable a su vocabulario.
- C. Que satisface las reglas de negocio definidas para la operación.
- D. Que puede recuperarse con las reglas de análisis de HTML.

Explicación: Un documento XML bien formado cumple las reglas sintácticas correspondientes, como una única raíz, anidamiento correcto y delimitación de atributos. Eso no demuestra conformidad con un XSD ni la verdad o suficiencia de sus datos para el negocio. La validez DTD definida por XML y la evaluación XSD añaden comprobaciones específicas respecto a sus declaraciones o esquemas. La mera presencia de una referencia tampoco acredita haberlas satisfecho.

- Error B: La evaluación respecto a un XSD impone restricciones adicionales. Un documento puede ser bien formado y no satisfacer ese esquema.
- Error C: Una estructura sintáctica correcta puede contener datos falsos o incumplir reglas de negocio. XML no deduce esa corrección a partir del marcado.
- Error D: La recuperación del parser HTML sigue otro régimen. No convierte los errores sintácticos de un documento XML en buena formación.

- [W3C: XML 1.0, Fifth Edition](https://www.w3.org/TR/REC-xml/) · 1.1 Origin and Goals; 2.1 Well-Formed XML Documents; 2.4 Character Data and Markup; 4.3.3 Character Encoding · versión: W3C Recommendation, 26-11-2008; buena formación sintáctica frente a validez DTD, evaluación XSD y significado de negocio · comprobado: 2026-10-28
- [W3C: XSD 1.1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; schema-validity assessment · versión: W3C Recommendation, 05-04-2012; restricciones de instancia respecto al esquema aplicable, sin garantizar semántica de negocio o configuración segura del parser · comprobado: 2026-10-28
- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · 1.3 Background; 1.5 Scope; 1.8 HTML vs XML syntax · versión: Living Standard consultado; cabecera 26-10-2026, significado documental y sintaxis frente a procesamiento o estilo · comprobado: 2026-10-28

Partida: `009bf660e27e711674609a352648cfd131c4d2bb6ac10344852c9cf93eef76d5` · propuesta: `807b2414a3b92b4192d2b48c1eb4cbbb1a0f9cea221410a60036ded248d9702e`

## MAN-GSI-P18-034

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas cercanas, clave B; explicar nombre expandido frente a validación, referencias y XPath.

### Antes

¿Qué problema resuelven principalmente los namespaces?

- A. Comprobar que un documento cumple los elementos, tipos y restricciones declarados en su esquema XML.
- B. Colisiones de nombres al mezclar elementos o atributos de vocabularios distintos. **(correcta)**
- C. Representar caracteres reservados mediante referencias de entidad para evitar que se interpreten como marcas.
- D. Seleccionar nodos y valores de un documento mediante expresiones de ruta evaluadas sobre su árbol XML.

Explicación: Dos vocabularios pueden usar el mismo nombre local sin confundirse si pertenecen a namespaces distintos.

### Propuesta

¿Qué problema resuelven principalmente los namespaces?

- A. Comprobar que un documento cumple los elementos, tipos y restricciones declarados en su esquema XML.
- B. Colisiones de nombres al mezclar elementos o atributos de vocabularios distintos. **(correcta)**
- C. Representar caracteres reservados mediante referencias de entidad para evitar que se interpreten como marcas.
- D. Seleccionar nodos y valores de un documento mediante expresiones de ruta evaluadas sobre su árbol XML.

Explicación: Los namespaces cualifican nombres para distinguir vocabularios que comparten un mismo nombre local. El nombre expandido depende de la URI del espacio y de ese nombre local; el prefijo es una abreviatura vinculada en un ámbito. El mecanismo no valida por sí solo estructura o valores ni obliga a descargar la URI como esquema. El contrato debe documentar el significado de cada vocabulario, además de evitar la colisión de sus nombres.

- Error A: Comprobar estructura, tipos y restricciones corresponde a validación con el esquema aplicable. El namespace identifica nombres, no realiza esa evaluación.
- Error C: Las referencias de entidad o de carácter representan contenido reservado. No distinguen vocabularios mediante la cualificación de nombres.
- Error D: Las rutas para seleccionar nodos describen XPath. Esa selección usa el modelo de nombres, pero no es el problema que resuelve el mecanismo de namespaces.

- [W3C: Namespaces in XML 1.0](https://www.w3.org/TR/xml-names/) · 1 Motivation and Summary; 2.1 Basic Concepts; 3 Declaring Namespaces; 4 y 5 Qualified Names · versión: Third Edition, W3C Recommendation, 08-12-2009; nombre expandido por URI y nombre local; prefijo local, sin descarga de esquema obligatoria · comprobado: 2026-10-28
- [W3C: XML 1.0, Fifth Edition](https://www.w3.org/TR/REC-xml/) · 1.1 Origin and Goals; 2.1 Well-Formed XML Documents; 2.4 Character Data and Markup; 4.3.3 Character Encoding · versión: W3C Recommendation, 26-11-2008; buena formación sintáctica frente a validez DTD, evaluación XSD y significado de negocio · comprobado: 2026-10-28
- [W3C: XSD 1.1, Structures](https://www.w3.org/TR/xmlschema11-1/) · Abstract; 2 Conceptual Framework; 3 Schema Components; schema-validity assessment · versión: W3C Recommendation, 05-04-2012; restricciones de instancia respecto al esquema aplicable, sin garantizar semántica de negocio o configuración segura del parser · comprobado: 2026-10-28

Partida: `4ebae9501e3ef9fc47b2573b88519f962915d38884743bdc4d214203a71ab0b1` · propuesta: `75d3a03aa76761e9f9ceb5531eb8ca6c8abc3f34d95c3d24376a1343e25c04cd`

## AI-GSI-B2-T10-001

Decisión: pending_review · acción: revise.

Motivo: Mantener vulnerabilidad y clave D; precisar fallo conocido con parche no instalado, sin inferir explotación o valorar riesgo por la sola ausencia de actualización.

### Antes

Un servidor sin parche presenta una…

- A. Aceptación formal
- B. Transferencia de riesgo
- C. Salvaguarda
- D. Vulnerabilidad **(correcta)**

Explicación: La debilidad es vulnerabilidad; una amenaza puede aprovecharla para causar daño.

### Propuesta

Una versión de servidor contiene un fallo conocido cuyo parche aún no se ha instalado. ¿Cómo se clasifica esa debilidad presente?

- A. Una amenaza que puede aprovechar un fallo.
- B. Un impacto que resulta de una interrupción.
- C. Un riesgo valorado después de las salvaguardas.
- D. Una vulnerabilidad susceptible de ser explotada. **(correcta)**

Explicación: El fallo conocido aún presente es una vulnerabilidad: una debilidad que una amenaza podría aprovechar. Que exista un parche ayuda a precisar el ejemplo, pero no demuestra que ya haya ocurrido un ataque, cuál sería su consecuencia o qué nivel de riesgo tiene el sistema. El riesgo requiere valorar escenarios y efectos en el contexto de los activos y controles. No se clasifica cualquier actualización pendiente como incidente confirmado.

- Error A: La amenaza es el origen o acontecimiento potencial que podría aprovechar la debilidad. No es el propio fallo que permanece en la versión.
- Error B: El impacto describe consecuencias de un suceso. El enunciado informa de una debilidad, no de una interrupción o daño ya producido.
- Error C: El riesgo residual se obtiene considerando el escenario y las salvaguardas. La existencia del fallo no basta para esa valoración.

- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 3.1.5 Paso 3, Salvaguardas y Vulnerabilidades, pp. 31–35 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas del libro. Método conceptual, sin usar sus referencias ENS antiguas como normativa vigente · comprobado: 2026-10-28
- [NIST SP 800-30 Revision 1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf) · 2.3.1 Risk Models; 3.1 Prepare for the Assessment, tareas 1-1 a 1-5; 3.2 tareas 2-3 Vulnerabilities, 2-4 Likelihood y 2-5 Impact; apéndices F/G/H · versión: Septiembre de 2012; guía de valoración de riesgos de información, sin convertir escalas o modelos de ejemplo en medición empírica del banco · comprobado: 2026-10-28

Partida: `1215936a4326a94dde27dcc7a46ecc326cbf26cb7fc69b3b1204ecb8d1f2a6f6` · propuesta: `d4d2262c4a31e19a86c227cff03a95af2bb97c9381d845fa6086e74a348daa4f`

## AI-GSI-B2-T10-002

Decisión: pending_review · acción: revise.

Motivo: Mantener distinción impacto/probabilidad y clave D; cuatro pares paralelos y escalas no limitadas a euros ni a una fórmula universal.

### Antes

¿Qué distingue impacto y probabilidad?

- A. Impacto equivale a la lista de controles
- B. Probabilidad es el tiempo objetivo de recuperación
- C. Ambos son siempre importes en euros
- D. Impacto es consecuencia; probabilidad es posibilidad de ocurrencia **(correcta)**

Explicación: Consecuencias y ocurrencia son dimensiones distintas de la valoración del riesgo.

### Propuesta

¿Qué distingue impacto y probabilidad?

- A. Impacto mide frecuencia; probabilidad, severidad de consecuencias.
- B. Impacto mide coste de controles; probabilidad, coste de recuperación.
- C. Impacto mide exposición del activo; probabilidad, valor del servicio.
- D. Impacto mide consecuencias; probabilidad, posibilidad de ocurrencia. **(correcta)**

Explicación: El impacto expresa la magnitud de las consecuencias sobre objetivos, servicios, información u otros intereses si se materializa un escenario. La probabilidad o posibilidad de ocurrencia describe otra dimensión de la valoración. Pueden utilizarse escalas cualitativas o cuantitativas según el método; no se reducen ambos a dinero ni se confunden con coste de medidas o recuperación. Una estimación debe declarar contexto, supuestos y criterios, no solo producir un número.

- Error A: Intercambia dimensiones: la severidad de consecuencias corresponde al impacto, mientras la frecuencia puede informar la posibilidad de ocurrencia en el modelo.
- Error B: El coste de una medida o de una recuperación no define la probabilidad de un escenario. Son datos que pueden ayudar a decisiones, pero no sustituyen ambas dimensiones.
- Error C: Exposición y valor del servicio pueden informar el análisis, pero no son las definiciones de impacto y probabilidad. Faltan consecuencias y ocurrencia.

- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 3.1.2 Amenazas, p. 27; 3.1.3 Impacto potencial, pp. 28–29; 3.1.4 Riesgo potencial, pp. 29–31 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas del libro. Método conceptual, sin usar sus referencias ENS antiguas como normativa vigente · comprobado: 2026-10-28
- [NIST SP 800-30 Revision 1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf) · 2.3.1 Risk Models; 3.1 Prepare for the Assessment, tareas 1-1 a 1-5; 3.2 tareas 2-3 Vulnerabilities, 2-4 Likelihood y 2-5 Impact; apéndices F/G/H · versión: Septiembre de 2012; guía de valoración de riesgos de información, sin convertir escalas o modelos de ejemplo en medición empírica del banco · comprobado: 2026-10-28

Partida: `00017c9308c00f95ddd61a9ec7b2eb5e054ae19097307460dbd095e0fcb6d1dc` · propuesta: `a0079c34751e49055dfdfa2ecafeb04388f4db6ac22a14bd64f4e8d511d26cd2`

## AI-GSI-B2-T10-003

Decisión: pending_review · acción: revise.

Motivo: Mantener residual tras salvaguardas y clave C; distinguir inherente, objetivo y aceptado, con eficacia y estado real frente a mera enumeración de controles.

### Antes

¿Qué es riesgo residual?

- A. Un sinónimo de vulnerabilidad
- B. La lista de activos sin valorar
- C. El que permanece tras considerar salvaguardas **(correcta)**
- D. El existente antes de cualquier control

Explicación: Los controles reducen riesgo, pero puede permanecer un residual que deba tratarse o aceptarse.

### Propuesta

¿Qué es riesgo residual?

- A. El riesgo inherente estimado antes de considerar las salvaguardas.
- B. El riesgo objetivo definido como nivel que se pretende alcanzar.
- C. El riesgo que queda al considerar las salvaguardas y su eficacia. **(correcta)**
- D. El riesgo cuya aceptación ya ha autorizado la autoridad competente.

Explicación: El riesgo residual es el que permanece al considerar las salvaguardas y su eficacia real o estimada en el contexto. No se identifica automáticamente con el nivel objetivo ni con una aceptación formal: puede necesitar más tratamiento, seguimiento o una decisión de aceptación dentro de los límites aplicables. Registrar un control no demuestra su efectividad y calcular una cifra no transfiere autoridad para aceptarla. Las hipótesis sobre controles futuros deben distinguirse de medidas realmente desplegadas.

- Error A: Describe el riesgo previo a considerar las salvaguardas en la distinción planteada. El residual incorpora su efecto y eficacia.
- Error B: El nivel objetivo indica una meta o criterio. El resultado residual puede quedar por encima o por debajo y debe contrastarse con ese criterio.
- Error D: Aceptado describe una decisión formal. Puede haber riesgo residual todavía no aceptado o que deba reducirse mediante otro tratamiento.

- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 3.1.6 Impacto residual y 3.1.7 Riesgo residual, p. 35; 4.1.1 Evaluación y 4.1.2 Aceptación, pp. 48–49 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas del libro. Método conceptual, sin usar sus referencias ENS antiguas como normativa vigente · comprobado: 2026-10-28
- [NIST SP 800-39](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf) · 3.1 Framing Risk, supuestos, restricciones y autoridad; 3.3 Responding to Risk; Appendix H Risk Response Strategies · versión: Marzo de 2011; gobernanza y decisiones dentro de tolerancias y restricciones legales. No asigna automáticamente un cargo español por nombre · comprobado: 2026-10-28

Partida: `54e1038483294bba9fe3f848939061b3abeaa8a8c4c580448e0c3d5eba7b45dc` · propuesta: `bcba7b7122e909d7ef4ddd11332d5d453738419bba938a563a83de05d5c247e3`

## AI-GSI-B2-T10-004

Decisión: pending_review · acción: revise.

Motivo: Mantener reducción de probabilidad/impacto y clave B; comparar efecto real con autoridad, objetivo y transferencia automática de responsabilidad.

### Antes

¿Qué puede hacer una salvaguarda?

- A. Sustituir automáticamente al responsable
- B. Reducir probabilidad o impacto, o mejorar prevención, detección y respuesta **(correcta)**
- C. Garantizar siempre riesgo cero
- D. Convertir cualquier amenaza en activo

Explicación: Los controles reducen riesgo de distintas formas; su eficacia debe valorarse.

### Propuesta

¿Qué puede hacer una salvaguarda?

- A. Determinar quién puede aceptar el riesgo sin una asignación de gobierno adicional.
- B. Reducir probabilidad o impacto, con eficacia que debe verificarse en contexto. **(correcta)**
- C. Equiparar el riesgo residual al objetivo por el hecho de estar implantada.
- D. Transferir la responsabilidad final del riesgo al fabricante del control.

Explicación: Una salvaguarda puede reducir la probabilidad o las consecuencias de un escenario, apoyando prevención, detección, respuesta o recuperación según su función. El efecto depende del diseño, implantación y operación y debe evaluarse; no basta con que figure en un inventario. Adoptarla no fija por sí sola la autoridad de aceptación ni demuestra haber alcanzado el objetivo. Puede cambiar la exposición y requerir revisar supuestos o dependencias.

- Error A: La autoridad para aceptar riesgos procede de la gobernanza y de las reglas aplicables, no del mero uso de una medida técnica.
- Error C: Implantación y objetivo son cosas distintas. Hay que valorar eficacia y riesgo que permanece para saber si se ha alcanzado el nivel previsto.
- Error D: El fabricante puede tener obligaciones contractuales, pero instalar su producto no transfiere automáticamente la decisión y responsabilidad organizativa sobre el riesgo.

- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 3.1.5 Salvaguardas, pp. 31–35; MAR.32 Valoración de las salvaguardas, p. 43; 4.1.8 Mitigación, p. 53 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas del libro. Método conceptual, sin usar sus referencias ENS antiguas como normativa vigente · comprobado: 2026-10-28
- [NIST SP 800-39](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf) · 3.1 Framing Risk, supuestos, restricciones y autoridad; 3.3 Responding to Risk; Appendix H Risk Response Strategies · versión: Marzo de 2011; gobernanza y decisiones dentro de tolerancias y restricciones legales. No asigna automáticamente un cargo español por nombre · comprobado: 2026-10-28
- [BOE: Real Decreto 311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · Artículos 7, 11, 12, 13 y 14; anexo II, op.pl.1 Análisis de riesgos · versión: Texto consolidado consultado, última actualización publicada 06-11-2024. Para efectos jurídicos se distinguen publicación oficial y consolidación informativa; no impone MAGERIT como única metodología · comprobado: 2026-10-28

Partida: `a7f60f6ae73e78abbc8d796a024b4bb7bfe697da871604c8aa76075dc8306850` · propuesta: `834696bbda76baacc045d88bd83283412d07ade9b59a5e1423b81a75a65256af`

## AI-GSI-B2-T10-005

Decisión: pending_review · acción: revise.

Motivo: Mantener preparación del análisis y clave B; distinguir marco y responsables de soluciones, aceptación prematura o inventario aislado.

### Antes

¿Qué debe fijarse al inicio del análisis de riesgos?

- A. Fijar una puntuación final sin valorar activos
- B. Contexto, alcance, criterios y responsables **(correcta)**
- C. Elegir controles antes de definir qué se protege
- D. Aceptar todos los riesgos antes de inventariar

Explicación: El alcance y los criterios dan sentido a la valoración posterior.

### Propuesta

¿Qué debe fijarse al inicio del análisis de riesgos?

- A. El plan detallado de controles antes de acordar qué se protege.
- B. El contexto, alcance, criterios y responsables que guían la valoración. **(correcta)**
- C. La aceptación del riesgo residual antes de identificar escenarios y consecuencias.
- D. La lista de vulnerabilidades en lugar del contexto y del inventario de activos.

Explicación: Antes de valorar escenarios hay que acordar para qué se analiza, qué abarca el sistema, con qué criterios y quién interviene o decide. El contexto, las restricciones y las fuentes de información permiten interpretar después activos, amenazas, impactos y respuestas. Es un marco revisable cuando cambian los supuestos, no una formalidad que autorice fijar el resultado de antemano. Elegir controles o aceptar riesgos requiere información que esta preparación organiza.

- Error A: Detallar la solución antes de acordar alcance y objetivos adelanta la respuesta sin haber definido el problema que debe tratarse.
- Error C: La aceptación necesita conocer el riesgo y compararlo con criterios y límites. No sustituye preparar el análisis o identificar consecuencias.
- Error D: Un listado de vulnerabilidades es una entrada parcial. Sin activos y contexto no permite relacionar esos fallos con el servicio y sus objetivos.

- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 4.2.1 Roles y funciones, pp. 55–57; 4.2.2 Contexto y 4.2.3 Criterios, pp. 57–58; 5.2 Actividades preliminares, pp. 64–69 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas del libro. Método conceptual, sin usar sus referencias ENS antiguas como normativa vigente · comprobado: 2026-10-28
- [NIST SP 800-30 Revision 1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf) · 2.3.1 Risk Models; 3.1 Prepare for the Assessment, tareas 1-1 a 1-5; 3.2 tareas 2-3 Vulnerabilities, 2-4 Likelihood y 2-5 Impact; apéndices F/G/H · versión: Septiembre de 2012; guía de valoración de riesgos de información, sin convertir escalas o modelos de ejemplo en medición empírica del banco · comprobado: 2026-10-28
- [NIST SP 800-39](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf) · 3.1 Framing Risk, supuestos, restricciones y autoridad; 3.3 Responding to Risk; Appendix H Risk Response Strategies · versión: Marzo de 2011; gobernanza y decisiones dentro de tolerancias y restricciones legales. No asigna automáticamente un cargo español por nombre · comprobado: 2026-10-28

Partida: `5e0abbf1b424c7dd3769d9c9a9f108d6af63584e32e7dc66fe561a1f1f2e5554` · propuesta: `289ccf37627d878970d1934fb54810421394096618647a83e1342440673524c4`

## AI-GSI-B2-T10-006

Decisión: pending_review · acción: revise.

Motivo: Mantener dependencia entre activos y clave B; microcaso de servicio/base de datos/almacenamiento que distingue propagación de inventario o identidad de valor.

### Antes

¿Por qué se modelan dependencias entre activos?

- A. Para eliminar toda responsabilidad
- B. Porque el daño en un activo puede afectar servicios dependientes **(correcta)**
- C. Para evitar valorar impactos
- D. Para sustituir el análisis de amenazas

Explicación: Las dependencias permiten relacionar fallos técnicos con objetivos y servicios.

### Propuesta

Un servicio depende de una base de datos y esta del almacenamiento. ¿Para qué se modelan esas dependencias en el análisis de riesgos?

- A. Para tratar el riesgo del servicio como independiente de sus soportes.
- B. Para relacionar daños en activos de soporte con impacto en el servicio. **(correcta)**
- C. Para sustituir los escenarios de amenaza por un inventario de componentes.
- D. Para concluir que servicio y componentes deben tener un valor idéntico.

Explicación: Las dependencias permiten relacionar lo que ocurre en activos de soporte con las consecuencias para la información y los servicios que dependen de ellos. Una pérdida de almacenamiento puede afectar a la base de datos y al servicio, según arquitectura, redundancias y otras salvaguardas. El modelo no obliga a que todo fallo produzca el mismo daño ni a asignar valores idénticos a cada componente. Sigue siendo necesario analizar amenazas, dimensiones y eficacia de controles.

- Error A: Ignora precisamente la relación que hace posible propagar consecuencias. El servicio no puede valorarse como aislado de sus soportes sin justificarlo.
- Error C: Un inventario identifica elementos, pero no reemplaza los escenarios que pueden dañarlos ni sus efectos. La dependencia conecta esos análisis.
- Error D: Relacionar activos no impone un valor idéntico. La importancia y la repercusión dependen de funciones, grado de dependencia y dimensiones valoradas.

- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 3.1.1 Activos, Dependencias y Valoración, pp. 23–26; 3.1.3 Impacto potencial, pp. 28–29 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas del libro. Método conceptual, sin usar sus referencias ENS antiguas como normativa vigente · comprobado: 2026-10-28
- [NIST SP 800-30 Revision 1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf) · 2.3.1 Risk Models; 3.1 Prepare for the Assessment, tareas 1-1 a 1-5; 3.2 tareas 2-3 Vulnerabilities, 2-4 Likelihood y 2-5 Impact; apéndices F/G/H · versión: Septiembre de 2012; guía de valoración de riesgos de información, sin convertir escalas o modelos de ejemplo en medición empírica del banco · comprobado: 2026-10-28

Partida: `a28db6d27cfa0dc3f4e9331ae9c802e02656f7e1ebac1036c750376ed91ea5be` · propuesta: `b4cffa34b494ab31602a79a6781e0356790ac2779cce361393dd53dd910bacd1`

## AI-GSI-B2-T10-007

Decisión: pending_review · acción: revise.

Motivo: Mantener aprobación por responsable competente y clave B; autoridad formal y límites, sin atribuir a todo proveedor/auditor o herramienta una decisión de gobierno.

### Antes

¿Quién debe aprobar el riesgo residual según la gobernanza?

- A. Cualquier proveedor sin mandato
- B. El responsable competente **(correcta)**
- C. La herramienta por sí sola
- D. El escáner de vulnerabilidades

Explicación: La aceptación es una decisión de responsabilidad; una herramienta aporta información, no autoridad.

### Propuesta

¿A quién corresponde decidir la aceptación del riesgo residual en un sistema de información?

- A. Al proveedor del control por su conocimiento técnico del producto.
- B. A quien tenga autoridad formal asignada para aceptar ese riesgo. **(correcta)**
- C. A la herramienta de análisis al superar un umbral configurado.
- D. Al auditor externo como sustituto del responsable del servicio.

Explicación: La aceptación corresponde a quien tenga competencia y autoridad formal dentro de la gobernanza y de la normativa aplicable, con información suficiente sobre el riesgo y sus consecuencias. El análisis y las herramientas aportan evidencia; el proveedor o auditor no adquieren ese poder por su función técnica. La decisión debe documentarse y respetar límites y obligaciones: aceptar riesgo no habilita a incumplir requisitos obligatorios. El nombre del cargo concreto depende del marco organizativo, no de una regla universal de esta pregunta.

- Error A: El conocimiento del producto aporta información sobre su eficacia o límites, pero no asigna por sí mismo autoridad para aceptar el riesgo de la organización.
- Error C: Un umbral puede señalar una situación o apoyar una regla de decisión, pero la herramienta no se convierte por ello en el órgano competente.
- Error D: La auditoría evalúa y aporta evidencia. No reemplaza automáticamente a la autoridad responsable de decidir la aceptación.

- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 4.1.2 Aceptación del riesgo, p. 49; 4.2.1 Roles y funciones, pp. 55–57; 4.2.5 Decisión de tratamiento, pp. 58–59 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas del libro. Método conceptual, sin usar sus referencias ENS antiguas como normativa vigente · comprobado: 2026-10-28
- [NIST SP 800-39](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf) · 3.1 Framing Risk, supuestos, restricciones y autoridad; 3.3 Responding to Risk; Appendix H Risk Response Strategies · versión: Marzo de 2011; gobernanza y decisiones dentro de tolerancias y restricciones legales. No asigna automáticamente un cargo español por nombre · comprobado: 2026-10-28
- [BOE: Real Decreto 311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · Artículos 7, 11, 12, 13 y 14; anexo II, op.pl.1 Análisis de riesgos · versión: Texto consolidado consultado, última actualización publicada 06-11-2024. Para efectos jurídicos se distinguen publicación oficial y consolidación informativa; no impone MAGERIT como única metodología · comprobado: 2026-10-28

Partida: `543b04e36c043ec611b68a1d4b35cfc56a3c86588136991c68a5d8693feae9ab` · propuesta: `77b6ab9f180f1a56948c7bd293071af2bb47359445405a5ccc8df8c6f856d48b`
