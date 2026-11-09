# GSI-EDITORIAL-029 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `fcfce4ccdc35fdb5ccc399ad97fc93becee9e102fabc35ea06115da278086f52`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B2-T06-005

Decisión: pending_review · acción: revise.

Motivo: Conservar caso multidispositivo y clave B; alternativas cercanas de contrato, esquema y duplicación, sin prometer desacoplamiento automático.

### Antes

Clientes móviles y de escritorio requieren experiencias distintas sobre servicios comunes. ¿Qué enfoque reduce acoplamiento?

- A. Reglas duplicadas en cada cliente sin contrato común
- B. APIs con contratos estables **(correcta)**
- C. Acceso directo de cada interfaz al esquema físico
- D. Un cliente pesado único que imponga idéntica interacción a todos los dispositivos

Explicación: Los contratos permiten evolucionar interfaces y servicios con menor dependencia.

### Propuesta

Clientes móviles y de escritorio ofrecen experiencias distintas sobre los mismos servicios. ¿Qué decisión reduce su dependencia de la implementación interna?

- A. Compartir directamente las tablas físicas con cada interfaz.
- B. Exponer capacidades mediante contratos de API estables. **(correcta)**
- C. Duplicar las reglas del servicio en cada cliente de usuario.
- D. Vincular cada pantalla con las clases internas del servicio.

Explicación: Un contrato de API define lo que los clientes pueden pedir y las respuestas que pueden esperar, ocultando detalles internos. Así las experiencias móvil y escritorio pueden evolucionar sin depender del esquema físico o de clases de implementación. La estabilidad requiere gestionar compatibilidad y versiones: publicar una API no hace compatible cualquier cambio. Tampoco obliga a que todas las interfaces de usuario sean iguales.

- Error A: El acceso al esquema físico acopla a cada cliente a decisiones internas de datos. Un cambio de tablas puede obligar a modificar todas las interfaces.
- Error C: Duplicar reglas exige coordinar cambios y puede producir comportamientos divergentes. No define una frontera estable común.
- Error D: Las clases internas pueden cambiar por razones de implementación. Exponerlas como dependencia de cada pantalla reduce la independencia entre cliente y servicio.

- [Microsoft Azure Architecture Center: Best practices for RESTful web API design](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design) · Introducción: platform independence y loose coupling; contratos y evolución de cliente/servicio · versión: Solo desacoplamiento y contrato de interfaz; no se afirma compatibilidad automática de cualquier cambio o que toda API HTTP sea REST · comprobado: 2026-10-28

Partida: `540dad003974fe8ade582d50f58baf1d012d26718a24cea3f0653592d3f0d7e4` · propuesta: `960a55c2b8f92d1095c029e8661a18b4ea634214325d05651a4c0caca5ef171f`

## AI-GSI-B2-T06-006

Decisión: pending_review · acción: revise.

Motivo: Conservar coordinador central y clave C; comparar patrones de interacción próximos sin confundir centralización lógica con instancia física única.

### Antes

Un coordinador central decide los pasos entre servicios. ¿Qué patrón describe?

- A. Coreografía
- B. Multiplexación temporal
- C. Orquestación **(correcta)**
- D. Proyección relacional

Explicación: La orquestación usa un coordinador; la coreografía distribuye el protocolo entre participantes.

### Propuesta

Un coordinador decide los pasos de un proceso y ordena a cada servicio qué operación ejecutar a continuación. ¿Qué patrón de coordinación describe?

- A. Coreografía de proceso.
- B. Descubrimiento de servicios.
- C. Orquestación de proceso. **(correcta)**
- D. Mediación de mensajes.

Explicación: La orquestación asigna a un coordinador el control del flujo: decide qué paso debe ejecutar cada participante y cuándo, según el estado del proceso. La coreografía reparte esa lógica entre participantes que reaccionan a interacciones o eventos. Coordinador central describe una responsabilidad lógica; no impone una sola máquina sin redundancia ni cambia por sí solo las garantías transaccionales.

- Error A: En una coreografía los participantes siguen el protocolo sin un controlador global del proceso. El caso sí atribuye esa decisión a un coordinador.
- Error B: Descubrir servicios permite localizar o conocer sus interfaces. No define la secuencia global de operaciones que deben ejecutar.
- Error D: Mediar transforma o encamina mensajes. Puede coexistir con orquestación, pero no nombra el control de los pasos descrito.

- [Microsoft Azure Architecture Center: Saga distributed transactions pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/saga) · Saga implementation approaches: Choreography y Orchestration; Issues and considerations: fallos e idempotencia · versión: Se usa la distinción del control de proceso y las transacciones locales. No se traslada a toda transacción la simplificación de aislamiento ni se exige saga a toda SOA · comprobado: 2026-10-28
- [IBM: What is an enterprise service bus (ESB)?](https://www.ibm.com/think/topics/esb) · Introducción: mediación, transformación de modelos, encaminamiento y conversión de protocolos · versión: Solo funciones del patrón de integración; no se adopta la valoración comercial de SOA sin ESB ni se afirma que el bus sea obligatorio · comprobado: 2026-10-28

Partida: `a2b0d278972af353dfc96e9266eaa4f7cb1a38cb232ee117c9040b1eb4a0b478` · propuesta: `8d2a607bff3a14a7fc8e85795b2b1060fed08943a484ae22f9184fdaab195492`

## AI-GSI-B2-T06-007

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y clave A; reemplazar distractores ajenos por funciones de integración y separar control de proceso de transporte centralizado.

### Antes

Los servicios reaccionan siguiendo un protocolo distribuido sin controlador global único. ¿Qué patrón es?

- A. Coreografía **(correcta)**
- B. Orquestación centralizada
- C. Cliente pesado monolítico
- D. Normalización de tablas

Explicación: La coreografía coordina interacciones de forma distribuida, a diferencia del coordinador de una orquestación.

### Propuesta

Los servicios reaccionan siguiendo un protocolo distribuido sin controlador global único. ¿Qué patrón es?

- A. Coreografía. **(correcta)**
- B. Orquestación centralizada.
- C. Descubrimiento de servicios.
- D. Mediación de mensajes.

Explicación: La coreografía distribuye las reglas de interacción entre los participantes, que siguen el protocolo sin un controlador global único. Por ejemplo, un participante puede reaccionar al evento de otro. No significa ausencia de coordinación o contrato: hay que definir mensajes, estados, errores y dependencias. Un broker central de transporte no convierte por sí solo el proceso en una orquestación.

- Error B: La orquestación centralizada da a un coordinador la responsabilidad del flujo global. El enunciado excluye precisamente ese controlador.
- Error C: El descubrimiento permite conocer o localizar servicios. No explica quién decide la evolución del protocolo entre ellos.
- Error D: La mediación adapta o encamina mensajes. El patrón preguntado clasifica cómo se reparte el control del proceso.

- [Microsoft Azure Architecture Center: Saga distributed transactions pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/saga) · Saga implementation approaches: Choreography y Orchestration; Issues and considerations: fallos e idempotencia · versión: Se usa la distinción del control de proceso y las transacciones locales. No se traslada a toda transacción la simplificación de aislamiento ni se exige saga a toda SOA · comprobado: 2026-10-28
- [IBM: What is an enterprise service bus (ESB)?](https://www.ibm.com/think/topics/esb) · Introducción: mediación, transformación de modelos, encaminamiento y conversión de protocolos · versión: Solo funciones del patrón de integración; no se adopta la valoración comercial de SOA sin ESB ni se afirma que el bus sea obligatorio · comprobado: 2026-10-28

Partida: `efc9b209eedba246017074f82f35b5578cbcba9702659dc230936a531548fd83` · propuesta: `60f361e651603556951b05b0ddef5df9a82f49dc42a9bd95d5fe93596df5b2fc`

## AI-GSI-B2-T06-008

Decisión: pending_review · acción: revise.

Motivo: Conservar arquitectura independiente de tecnología y clave B; eliminar la confusión de SOAP como transporte y evitar prescribir ESB u orquestación.

### Antes

¿Qué afirmación sobre SOA es correcta?

- A. Exige siempre SOAP como único transporte
- B. Organiza capacidades como servicios con contrato y puede usar distintas tecnologías **(correcta)**
- C. Prohíbe composición de servicios
- D. Equivale a una base de datos compartida sin interfaces

Explicación: SOA es un enfoque arquitectónico; SOAP es una tecnología posible de mensajería.

### Propuesta

¿Qué caracteriza a SOA como enfoque arquitectónico, con independencia de la tecnología concreta?

- A. Uniformar la mensajería de toda integración mediante SOAP.
- B. Organizar capacidades como servicios con contrato definido. **(correcta)**
- C. Usar una base compartida como interfaz de todos los clientes.
- D. Hacer que un ESB controle los pasos de cada proceso de negocio.

Explicación: SOA organiza capacidades mediante servicios con descripciones y condiciones de interacción, incluso entre distintos dominios de propiedad. El enfoque arquitectónico no se identifica con un protocolo de mensajería o una tecnología concreta. Puede utilizar SOAP u otras tecnologías y puede componer servicios. Un ESB u orquestador es una decisión posible, no la definición de SOA.

- Error A: SOAP es una tecnología de mensajería posible. Adoptarla no define por sí solo orientación a servicios ni es requisito universal del modelo.
- Error C: Compartir tablas directamente expone la implementación de datos. No sustituye la descripción de capacidades y condiciones del servicio.
- Error D: Mediación y control central del proceso son decisiones específicas y distintas. SOA no exige que todos los procesos estén orquestados por un bus.

- [OASIS: Reference Model for Service Oriented Architecture 1.0](https://docs.oasis-open.org/soa-rm/v1.0/soa-rm.html) · Abstract; 2.1 Service Oriented Architecture; 3.3.1 Service description; 3.3.2 Policies and contracts · versión: OASIS Standard, 12-10-2006; modelo independiente de tecnologías concretas, no prescribe SOAP, HTTP o un ESB · comprobado: 2026-10-28
- [W3C: SOAP Version 1.2 Part 1: Messaging Framework, second edition](https://www.w3.org/TR/soap12-part1/) · Abstract; 1 Introduction; 4 SOAP Protocol Binding Framework; 5 SOAP Message Construct · versión: W3C Recommendation, 27-04-2007; XML y marco de bindings, sin reducir SOAP a HTTP o confundirlo con SOA · comprobado: 2026-10-28

Partida: `caf1d0872df39c1412c1342e38dfb4921902bddd2d8486a218f63de9548be1a4` · propuesta: `cd2188f351d765ec6fbb732e5fe0e2d477bd07e47fad9c49b0e5118cd8af4639`

## AI-GSI-B2-T06-010

Decisión: pending_review · acción: revise.

Motivo: Conservar contrato de servicio y clave D; fijar WSDL 1.1 y comparar esquema, mensaje y proceso con fuentes de versión exacta.

### Antes

¿Qué describe WSDL en servicios web clásicos?

- A. El plan de pruebas de carga
- B. La categoría ENS del sistema
- C. El formato de una base de datos física
- D. El contrato del servicio **(correcta)**

Explicación: WSDL describe servicios; XSD define estructuras y tipos XML.

### Propuesta

En los servicios web clásicos, ¿qué describe WSDL 1.1?

- A. La sintaxis de los tipos XML, sin describir operaciones.
- B. La instancia de mensaje que contiene una petición concreta.
- C. La secuencia de negocio que coordina varios servicios.
- D. El contrato con operaciones, mensajes y enlaces del servicio. **(correcta)**

Explicación: WSDL 1.1 describe el servicio mediante elementos como tipos, mensajes, operaciones agrupadas en portType, bindings y puntos de acceso. Relaciona una descripción abstracta con mecanismos concretos de intercambio. Puede usar XSD para los tipos, pero no se limita al esquema de datos ni contiene por eso una ejecución del proceso de negocio. Un contrato WSDL tampoco demuestra que la implementación lo cumpla.

- Error A: XSD puede describir estructuras y tipos de los mensajes. Esa parte no cubre el conjunto de operaciones, bindings y endpoints descritos por WSDL.
- Error B: Una petición concreta es una instancia de mensaje. WSDL describe cómo es la interfaz que permite intercambiar esos mensajes.
- Error C: El flujo que coordina servicios pertenece a la definición del proceso u orquestación. No es la función de WSDL como contrato de interfaz.

- [W3C: Web Services Description Language (WSDL) 1.1](https://www.w3.org/TR/2001/NOTE-wsdl-20010315) · Abstract; 2 Service Definition: Types, Messages, Port Types, Bindings, Ports y Services · versión: W3C Note, 15-03-2001, versión 1.1; no se presenta como Recommendation. La ruta genérica /TR/wsdl/ mostró WSDL 2.0; se usa la URL fechada de 1.1 para el contexto clásico · comprobado: 2026-10-28

Partida: `c56604df3bbfeb07478c222a74916bd2db4c8a8448a3516af466a5b5862bbaef` · propuesta: `600f7014b05a2393cebae16ed359e20510c34076b57f1996fbc007eb3d34b867`

## AI-GSI-B2-T06-013

Decisión: pending_review · acción: revise.

Motivo: Conservar REST como estilo y clave C; comparar formato, protocolo y estilo, sin equiparar cualquier API HTTP/JSON con REST.

### Antes

¿Qué afirmación sobre REST es correcta?

- A. Es un formato binario de documentos
- B. Exige siempre SOAP
- C. Es un estilo arquitectónico y no toda API HTTP lo cumple **(correcta)**
- D. Prohíbe identificadores de recursos

Explicación: REST establece restricciones arquitectónicas; utilizar HTTP por sí solo no asegura cumplirlas.

### Propuesta

¿Qué afirmación sobre REST es correcta?

- A. Es el formato JSON usado para representar recursos.
- B. Es el protocolo de sobres XML de los servicios web.
- C. Es un estilo definido por restricciones de interacción. **(correcta)**
- D. Es la clasificación de cualquier servicio accesible por HTTP.

Explicación: REST es un estilo arquitectónico definido por restricciones como cliente-servidor, comunicación sin estado de sesión en el servidor, caché e interfaz uniforme. Esta interfaz incluye identificación de recursos, representaciones, mensajes autodescriptivos e hipermedia. Usar HTTP o devolver JSON no basta para cumplir el conjunto de restricciones. El estado de los recursos puede existir en el servidor: stateless no prohíbe almacenar datos de negocio.

- Error A: JSON es un formato de representación. Elegirlo no define el estilo ni garantiza sus restricciones de interacción.
- Error B: Un marco de sobres XML describe mensajería, como SOAP. No es la definición del estilo REST.
- Error D: HTTP permite muchas formas de interacción. La accesibilidad mediante ese protocolo no acredita por sí sola conformidad con REST.

- [Roy T. Fielding: Architectural Styles and the Design of Network-based Software Architectures, Chapter 5](https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) · 5.1.2 Client-Server; 5.1.3 Stateless; 5.1.4 Cache; 5.1.5 Uniform Interface, cuatro restricciones; 5.1.6 Layered System · versión: Tesis doctoral, 2000, capítulo original de REST; se distingue estilo, formato de representación y protocolo · comprobado: 2026-10-28

Partida: `98a90dcfe4d336ae59288628ed867b1138553e06d2913a5d8e182b280e4fbe45` · propuesta: `f231a88064ca9b3b8168f75d766d5a34291c1719cc9b0021dcd15d6e557027fb`

## AI-GSI-B2-T06-016

Decisión: pending_review · acción: revise.

Motivo: Conservar idempotencia no universal y clave D; distinguir parcialidad, formato y precondición sin presentar PATCH como seguro.

### Antes

¿Qué afirmación sobre PATCH es correcta?

- A. Es siempre idempotente por cualquier contenido
- B. Es siempre seguro como GET
- C. Solo permite reemplazar documentos completos
- D. Su idempotencia depende de la operación y del formato **(correcta)**

Explicación: PATCH modifica parcialmente y su idempotencia no es universal.

### Propuesta

¿Qué afirmación sobre la idempotencia y seguridad semántica de PATCH es correcta?

- A. Modificar solo una parte hace idempotente cualquier parche.
- B. Enviar un documento JSON hace seguro el método PATCH.
- C. Usar If-Match convierte PATCH en un método de solo lectura.
- D. La operación y el formato pueden permitir un uso idempotente. **(correcta)**

Explicación: PATCH aplica un documento de cambios. El método no garantiza idempotencia en general, aunque una petición pueda diseñarse para ser idempotente según las operaciones, el formato y sus condiciones de aplicación. Un cambio que fija un valor puede tener propiedades distintas de otro que añade un elemento o incrementa un valor. If-Match ayuda a evitar aplicar cambios sobre una versión no esperada; no convierte una modificación en lectura segura.

- Error A: Parcial describe el alcance del cambio, no el efecto de repetirlo. Repetir una adición o un incremento puede volver a modificar el estado.
- Error B: JSON es un formato de datos. No implica semántica de lectura ni garantiza que la operación no solicite cambios.
- Error C: La precondición comprueba la versión antes de modificar. Una modificación condicional sigue siendo una modificación.

- [IETF RFC 5789: PATCH Method for HTTP](https://www.rfc-editor.org/rfc/rfc5789.html) · 2 The PATCH Method: documento de cambios, método no seguro ni idempotente en general, uso idempotente y peticiones condicionales · versión: Standards Track, marzo de 2010; su referencia histórica RFC 2616 se complementa con RFC 9110 para propiedades HTTP · comprobado: 2026-10-28
- [IETF RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · 9.2.1 Safe Methods; 9.2.2 Idempotent Methods; 9.3.1 GET; 9.3.2 HEAD; 9.3.3 POST; 9.3.4 PUT · versión: STD 97, junio de 2022; seguridad semántica no equivale a cifrado ni a ausencia de efectos incidentales; idempotencia no exige respuesta idéntica · comprobado: 2026-10-28

Partida: `f9b62aedcecee0b33ba9f26e5c6c20e889bb8c0c890e3f54b0d72f0f923b5f0d` · propuesta: `6350f30599335c5ee4cd0592c1faa7d10b8e298188f0fbe73dbffc4af0ab17b6`

## AI-GSI-B2-T06-017

Decisión: pending_review · acción: revise.

Motivo: Conservar amortiguación de picos y clave B; precisar disponibilidad de la cola y límites de retención, sin prometer efecto exactamente una vez.

### Antes

Una cola permite absorber picos aunque el consumidor esté temporalmente caído. ¿Qué ventaja aporta?

- A. Consistencia fuerte automática entre todos los sistemas
- B. Desacoplamiento temporal **(correcta)**
- C. Ausencia de necesidad de reintentos
- D. Eliminación garantizada de duplicados

Explicación: La asincronía desacopla disponibilidad, pero requiere atender reintentos, duplicados y consistencia.

### Propuesta

Una cola disponible conserva los mensajes aceptados durante una caída temporal del consumidor, dentro de su capacidad y retención. ¿Qué ventaja describe?

- A. Atomicidad distribuida entre productor y consumidor.
- B. Desacoplamiento temporal del procesamiento. **(correcta)**
- C. Ejecución paralela de todos los mensajes pendientes.
- D. Deduplicación del efecto de cada operación aceptada.

Explicación: La cola permite que productor y consumidor no deban estar disponibles al mismo tiempo: conserva trabajo aceptado para procesarlo después. El buffer amortigua picos, pero su capacidad, persistencia y retención son finitas y deben dimensionarse. No aumenta por sí solo la velocidad del consumidor ni define atomicidad entre sus efectos y la publicación. La política de entrega y el tratamiento de duplicados siguen siendo decisiones necesarias.

- Error A: Guardar un mensaje no constituye una transacción distribuida que haga atómicos el productor y el consumidor. Son garantías diferentes.
- Error C: La cola puede permitir concurrencia, pero no ejecuta por sí misma todos los mensajes en paralelo. El caso trata de procesarlos después.
- Error D: El buffer no impide repetir una entrega o un efecto. La deduplicación depende de las garantías y del diseño del consumidor.

- [Microsoft Azure Architecture Center: Queue-Based Load Leveling pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling) · Solution: cola como buffer y productores/consumidores asíncronos; Issues and considerations: capacidad, persistencia y ritmo de consumo · versión: Patrón conceptual con límites de capacidad y retención; no garantiza escalabilidad infinita, consistencia fuerte o efecto exactamente una vez · comprobado: 2026-10-28
- [Amazon SQS Developer Guide: at-least-once delivery](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html) · Explicación inicial de copias redundantes y reentrega; recomendación de procesamiento idempotente · versión: Colas estándar SQS, documentación latest; ejemplo primario de entrega al menos una vez, sin extender garantías de FIFO a todos los brokers · comprobado: 2026-10-28

Partida: `c0fd73dc0419b8ae09c863857da63f49929b381a7229ba6a03bb90be9a2a0407` · propuesta: `b3dd5156b1511a3d2b97978671bffc4569399432f56a2c172c40bc4243f83408`

## AI-GSI-B2-T06-018

Decisión: pending_review · acción: revise.

Motivo: Conservar tratamiento idempotente/deduplicación y clave A; microcaso de cobro tras pérdida de confirmación que separa entrega y efecto.

### Antes

Con entrega al menos una vez, ¿qué conviene prever en el consumidor?

- A. Deduplicación o tratamiento idempotente **(correcta)**
- B. Desactivar todo registro de procesamiento
- C. Suponer que jamás se repite un mensaje
- D. Exigir que cada mensaje produzca siempre un cargo nuevo

Explicación: At-least-once puede duplicar entregas; el consumidor debe controlar efectos repetidos.

### Propuesta

Un consumidor ya aplicó un cobro, pierde la confirmación y recibe el mismo mensaje bajo entrega al menos una vez. ¿Qué medida debe prever para evitar otro cargo?

- A. Deduplicar o hacer idempotente el efecto del mensaje. **(correcta)**
- B. Confirmar cada entrega antes de iniciar el procesamiento.
- C. Asignar una identidad distinta a cada mensaje reentregado.
- D. Procesar las reentregas por el mismo orden de llegada.

Explicación: La entrega al menos una vez permite reentregas. El consumidor debe reconocer la misma operación mediante una identidad estable o hacer que repetirla no multiplique su efecto. Para un cobro, repetir el procesamiento no debe volver a cobrar. El registro de deduplicación y el efecto necesitan coordinación adecuada frente a fallos y concurrencia; guardar una marca sin más no acredita exactamente una vez. La confirmación de transporte no es por sí sola una garantía de efecto de negocio único.

- Error B: Confirmar antes puede perder el trabajo si hay un fallo antes del efecto. No es una solución general para reconocer un cobro ya realizado y conservar procesamiento fiable.
- Error C: Cambiar la identidad de la misma operación impide reconocerla como repetida. Una identidad estable permite correlacionar sus reentregas.
- Error D: El orden puede ser necesario para otras reglas, pero una repetición ordenada todavía puede ejecutar un segundo cargo. No controla por sí solo efectos duplicados.

- [Amazon SQS Developer Guide: at-least-once delivery](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html) · Explicación inicial de copias redundantes y reentrega; recomendación de procesamiento idempotente · versión: Colas estándar SQS, documentación latest; ejemplo primario de entrega al menos una vez, sin extender garantías de FIFO a todos los brokers · comprobado: 2026-10-28

Partida: `2348ab51ef5d48e5018311853170bfb98966667f2c89d39b3635330ee77b69ee` · propuesta: `71947b2419a753fee42f754c18870cf00d9f65b5c9fed8b1c6b821728045351a`

## AI-GSI-B2-T06-020

Decisión: pending_review · acción: revise.

Motivo: Conservar sesión local y clave B; distractores sobre replicación y localización, explicando límites de afinidad sin prescribir una tecnología.

### Antes

Una sesión reside solo en memoria de una instancia. ¿Qué problema plantea al escalar horizontalmente?

- A. Toda petición se vuelve automáticamente idempotente
- B. Otras instancias pueden no disponer de ese estado **(correcta)**
- C. Se garantiza recuperación aunque esa instancia falle
- D. HTTP deja de existir como protocolo

Explicación: Debe decidirse entre estado compartido, tokens, afinidad con límites u otros diseños de sesión.

### Propuesta

Una sesión reside solo en memoria de una instancia. ¿Qué problema plantea al escalar horizontalmente?

- A. Replicación de la sesión por repartir las peticiones.
- B. Falta de ese estado en otra instancia que atienda después. **(correcta)**
- C. Borrado de la memoria inicial al arrancar otra instancia.
- D. Transferencia de la sesión al cliente al añadir servidores.

Explicación: Si el estado está solo en memoria de una instancia, otra no lo recibe por el mero hecho de atender la siguiente petición. Es necesario decidir cómo localizarlo, compartirlo o evitar depender de esa sesión. La afinidad puede mantener las peticiones en una instancia, pero no replica el estado ni garantiza recuperarlo si esa instancia falla. Una cookie que solo identifica la sesión no contiene necesariamente sus datos.

- Error A: El balanceo distribuye tráfico. No copia automáticamente el contenido de las memorias de las instancias.
- Error C: Arrancar otra instancia no borra por sí mismo la memoria de la inicial. El problema es que el estado no está disponible en la otra.
- Error D: Añadir servidores no cambia automáticamente dónde se almacena la sesión. Un identificador enviado al cliente no equivale a transferirle todos sus datos.

- [Microsoft ASP.NET Core: Session and state management](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/app-state?view=aspnetcore-10.0) · Session state: proveedor en memoria, escenario de granja y sticky sessions; diferencia cookie de ID y estado en servidor · versión: Rama solicitada aspnetcore-10.0; solo localización del estado y límites de afinidad. No se añaden backend, cachés externas ni framework al proyecto · comprobado: 2026-10-28

Partida: `9808bb815bc39c24fe4692d77840e79cf3a90346ce5576ebee4e0b94957f9273` · propuesta: `d6d8a920d77b4464e9b29acc17efef912d3fd3430a7c95c227c289ef87d66ccb`

## AI-GSI-B2-T06-009

Decisión: pending_review · acción: revise.

Motivo: Conservar mediación ESB y clave B; comparar integración, contrato, artefactos y planificación, sin adoptar la valoración comercial de SOA sin bus.

### Antes

¿Qué función es propia de un ESB?

- A. Reemplazar cualquier modelo de datos
- B. Enrutado, transformación y mediación de mensajes **(correcta)**
- C. Definir exclusivamente la apariencia móvil
- D. Compilar código nativo obligatoriamente

Explicación: El ESB integra mediante mediación, transformación y políticas; puede concentrar complejidad si se diseña mal.

### Propuesta

¿Qué función es propia de un ESB?

- A. Almacenar imágenes y publicarlas para los despliegues.
- B. Enrutado, transformación y mediación entre aplicaciones. **(correcta)**
- C. Elegir en qué nodo ejecutar cada réplica de un proceso.
- D. Definir tipos y operaciones del contrato de un servicio.

Explicación: El ESB media integraciones: puede enrutar mensajes, transformar formatos y adaptar protocolos entre aplicaciones. Esa función permite desacoplar parte de sus diferencias de comunicación. No sustituye todos los modelos de datos ni es un componente obligatorio de SOA. La mediación puede añadir complejidad y dependencias, por lo que el nombre del patrón no garantiza por sí mismo un buen diseño.

- Error A: El almacenamiento y distribución de imágenes corresponde a un registry. No es la función de mediación del ESB.
- Error C: Asignar réplicas a nodos es una función de planificación de ejecución. No equivale al encaminamiento y adaptación de mensajes.
- Error D: La descripción de la interfaz corresponde a un contrato como WSDL en su contexto. El bus puede usar ese contrato, pero mediar mensajes es otra función.

- [IBM: What is an enterprise service bus (ESB)?](https://www.ibm.com/think/topics/esb) · Introducción: mediación, transformación de modelos, encaminamiento y conversión de protocolos · versión: Solo funciones del patrón de integración; no se adopta la valoración comercial de SOA sin ESB ni se afirma que el bus sea obligatorio · comprobado: 2026-10-28

Partida: `2e59da3812adff4cbae8b7885703170d6e6c46c2fdbaa6df64ef28822582ed9a` · propuesta: `e243c06dbc764d36565cc3f79bb1412c50181c45b778babc0035dece7b60dbf4`

## AI-GSI-B2-T06-011

Decisión: pending_review · acción: revise.

Motivo: Conservar mensajería XML y clave A; alternativas de WSDL, REST y esquema como conceptos próximos, con SOAP 1.2 identificado.

### Antes

¿Qué caracteriza a SOAP?

- A. Mensajería XML estructurada que puede usar distintos transportes **(correcta)**
- B. Un estilo arquitectónico idéntico a REST
- C. Una técnica de cifrado simétrico
- D. Un protocolo limitado exclusivamente a JSON

Explicación: SOAP define mensajería y no se reduce a HTTP con XML ni equivale a REST.

### Propuesta

¿Qué caracteriza a SOAP 1.2?

- A. Un marco XML de mensajes con enlaces a otros protocolos. **(correcta)**
- B. Un lenguaje de contratos con operaciones y puntos de acceso.
- C. Un estilo de interacción definido por una interfaz uniforme.
- D. Un esquema de tipos XML que valida el contenido de documentos.

Explicación: SOAP define un marco extensible de mensajería estructurada mediante tecnologías XML y un modelo de procesamiento. Los bindings permiten intercambiar sus mensajes mediante protocolos subyacentes; no se reduce a HTTP con XML. El sobre puede incluir cabeceras y cuerpo según sus reglas. Usar SOAP no determina por sí solo la arquitectura SOA, la seguridad de extremo a extremo o una transacción distribuida.

- Error B: La descripción de operaciones y endpoints corresponde a un lenguaje de contrato como WSDL. No es el marco de mensajes SOAP.
- Error C: La interfaz uniforme es una restricción de REST. No describe la identidad de SOAP como protocolo de mensajería.
- Error D: Un esquema XSD define estructuras y tipos y puede emplearse con mensajes. No sustituye el sobre, procesamiento y bindings de SOAP.

- [W3C: SOAP Version 1.2 Part 1: Messaging Framework, second edition](https://www.w3.org/TR/soap12-part1/) · Abstract; 1 Introduction; 4 SOAP Protocol Binding Framework; 5 SOAP Message Construct · versión: W3C Recommendation, 27-04-2007; XML y marco de bindings, sin reducir SOAP a HTTP o confundirlo con SOA · comprobado: 2026-10-28
- [W3C: Web Services Description Language (WSDL) 1.1](https://www.w3.org/TR/2001/NOTE-wsdl-20010315) · Abstract; 2 Service Definition: Types, Messages, Port Types, Bindings, Ports y Services · versión: W3C Note, 15-03-2001, versión 1.1; no se presenta como Recommendation. La ruta genérica /TR/wsdl/ mostró WSDL 2.0; se usa la URL fechada de 1.1 para el contexto clásico · comprobado: 2026-10-28
- [Roy T. Fielding: Architectural Styles and the Design of Network-based Software Architectures, Chapter 5](https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) · 5.1.2 Client-Server; 5.1.3 Stateless; 5.1.4 Cache; 5.1.5 Uniform Interface, cuatro restricciones; 5.1.6 Layered System · versión: Tesis doctoral, 2000, capítulo original de REST; se distingue estilo, formato de representación y protocolo · comprobado: 2026-10-28

Partida: `4fbf08a59660aeff54c1ee346b706cd0f8f270b01525ab63e671cc9c8f36362c` · propuesta: `5c82330ea76065b9be6413b1a08e711b6bd36aecfb2eed1131947554caf7869d`

## AI-GSI-B2-T06-014

Decisión: pending_review · acción: revise.

Motivo: Conservar GET seguro/idempotente y clave D; incluir HEAD como distractor próximo y pedir expresamente contenido para que la respuesta sea única.

### Antes

¿Qué método HTTP es conceptualmente seguro e idempotente para recuperar recursos?

- A. POST necesariamente
- B. PATCH necesariamente
- C. CONNECT como recuperación de representación
- D. GET **(correcta)**

Explicación: GET recupera recursos con esa semántica; POST y PATCH no garantizan esas propiedades en general.

### Propuesta

Según la semántica HTTP, ¿qué método seguro e idempotente solicita recuperar una representación del recurso con su contenido, en lugar de solo metadatos?

- A. POST.
- B. PUT.
- C. HEAD.
- D. GET. **(correcta)**

Explicación: GET solicita transferir una representación del recurso y está definido como seguro e idempotente. Seguro se refiere al efecto solicitado, esencialmente de lectura; no significa cifrado ni ausencia de logs u otros efectos incidentales. Idempotente compara el efecto pretendido de repetir la petición, no exige cuerpos idénticos si el recurso cambia. El caso pide el contenido de la representación, lo que distingue GET de HEAD.

- Error A: POST pide procesar el contenido según la semántica del recurso. No tiene una garantía general de seguridad e idempotencia como recuperación de representación.
- Error B: PUT crea o reemplaza el estado del recurso. Es idempotente, pero no seguro como operación de lectura.
- Error C: HEAD comparte semántica de recuperación y es seguro e idempotente, pero la respuesta no debe enviar contenido. El caso sí quiere la representación con su contenido.

- [IETF RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · 9.2.1 Safe Methods; 9.2.2 Idempotent Methods; 9.3.1 GET; 9.3.2 HEAD; 9.3.3 POST; 9.3.4 PUT · versión: STD 97, junio de 2022; seguridad semántica no equivale a cifrado ni a ausencia de efectos incidentales; idempotencia no exige respuesta idéntica · comprobado: 2026-10-28

Partida: `cb48e30581eb531039f5f966094bbd787e6569737f07de25ae9526083951a563` · propuesta: `6fe5ec6b2fbde00f2c8f85d82ecb12e804a4cc2d3aa8619246f85c70a7bb5787`

## AI-GSI-B2-T06-019

Decisión: pending_review · acción: revise.

Motivo: Conservar funciones de gateway y clave C; alternativas de infraestructura próximas, sin confundir catálogo con ejecución de políticas.

### Antes

¿Qué componente puede centralizar límites de tasa, autenticación y routing de APIs?

- A. Vista materializada
- B. Tabla de hechos
- C. API Gateway **(correcta)**
- D. Compilador JIT

Explicación: El gateway aplica políticas de acceso y encaminamiento; no equivale a un objeto de almacenamiento.

### Propuesta

¿Qué componente puede centralizar límites de tasa, autenticación y encaminamiento de solicitudes de APIs?

- A. Container registry.
- B. ReplicaSet.
- C. API Gateway. **(correcta)**
- D. Service registry.

Explicación: Un API Gateway puede proporcionar un punto de entrada que encamina solicitudes y aplica políticas transversales como autenticación y límites de tasa. Es una función arquitectónica que puede implementarse mediante distintos productos o proxies. Centralizar el papel no exige una sola instancia física ni sustituye la autorización y los controles que deben mantenerse en los servicios.

- Error A: Un registry distribuye artefactos de despliegue. No es la frontera que procesa las solicitudes de los consumidores de las APIs.
- Error B: Un controlador de réplicas ajusta instancias o Pods al estado deseado. No define la política de acceso por petición.
- Error D: Un catálogo describe o permite descubrir contratos. Publicar esa información no aplica por sí solo autenticación o límites al tráfico.

- [Microsoft Azure Architecture Center: API gateways](https://learn.microsoft.com/en-us/azure/architecture/microservices/design/gateway) · What is an API gateway?; Cross-cutting concerns: authentication, routing y client rate limiting · versión: Funciones de frontera y políticas; un proxy puede implementar el papel de gateway y no se exige un producto específico o una única instancia física · comprobado: 2026-10-28

Partida: `991ad0cab8535c95a2b6fac5b7634ac46ce1c1d9f61929237c37eada68576244` · propuesta: `d27a7f4fd7e5e3c09f23ebcd7b6fdaa022c6e795e38152a8188a3632b5875afe`

## AI-GSI-B2-T07-001

Decisión: pending_review · acción: revise.

Motivo: Conservar plantilla frente a instancia y clave C; precisar que la instancia puede estar detenida, con alternativas comparables y sin universalizar aislamiento de VM.

### Antes

¿Qué distingue una imagen de un contenedor?

- A. La imagen es siempre un sistema operativo invitado completo
- B. Son siempre el mismo objeto inmutable
- C. La imagen es una plantilla; el contenedor es una instancia en ejecución **(correcta)**
- D. El contenedor es solo el repositorio de imágenes

Explicación: La imagen sirve de plantilla; una instancia ejecuta procesos con aislamiento del sistema operativo.

### Propuesta

¿Qué relación existe entre una imagen Docker y un contenedor creado a partir de ella?

- A. Imagen: proceso aislado; contenedor: plantilla de archivos.
- B. Imagen: servicio de distribución; contenedor: repositorio de capas.
- C. Imagen: plantilla de archivos; contenedor: instancia creada. **(correcta)**
- D. Imagen: máquina virtual; contenedor: sistema operativo invitado.

Explicación: La imagen proporciona archivos, dependencias y configuración que sirven de base para crear contenedores. Cada contenedor es una instancia con identidad y estado de ejecución propios; puede estar creado, ejecutándose o detenido. Detenerlo no lo convierte en una imagen. La imagen permanece inmutable y las modificaciones de la instancia no la reescriben automáticamente. El modelo usual aísla procesos y comparte el kernel del host; no equivale a un sistema invitado completo.

- Error A: Invierte plantilla e instancia. El proceso pertenece a la ejecución de un contenedor, no a una imagen almacenada.
- Error B: Un servicio de distribución es un registry, y un repositorio agrupa imágenes. No son las definiciones de imagen y contenedor.
- Error D: Confunde contenedores de procesos con virtualización de máquinas. Una imagen no es por definición una VM ni el contenedor un sistema invitado con kernel propio.

- [Docker Docs: What is an image?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/) · Definición inicial y principios: paquete de archivos y configuración, capas e inmutabilidad · versión: Documentación conceptual; se distingue contenido de imagen de etiquetas que pueden apuntar a otra versión · comprobado: 2026-10-28
- [Docker Docs: What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/) · Definición inicial y Containers versus virtual machines: procesos aislados y kernel compartido · versión: Se describe el modelo usual de contenedores de procesos; no se promete aislamiento idéntico a una VM ni ausencia de VM en Docker Desktop · comprobado: 2026-10-28
- [Docker CLI reference: docker container run](https://docs.docker.com/reference/cli/docker/container/run/) · Description: crear y ejecutar desde imagen; reiniciar contenedor parado y listar también contenedores detenidos · versión: Referencia CLI web consultada; no se ejecutan comandos Docker o descargas de imágenes. Una instancia parada no se convierte en imagen · comprobado: 2026-10-28

Partida: `4b16868aa48f30361f324beeb81ea2e892407e8224a02186c24d76fbb57de422` · propuesta: `58c8fa8ce3cde74773c317716556f419541774bb78c43e8e28f6ad0536434610`

## AI-GSI-B2-T07-002

Decisión: pending_review · acción: revise.

Motivo: Conservar distribución de imágenes y clave A; comparar las funciones del mismo ciclo de contenedores y distinguir registry de repositorio.

### Antes

¿Qué función cumple un registry?

- A. Almacenar y distribuir imágenes **(correcta)**
- B. Sustituir todos los secretos
- C. Programar exclusivamente tareas del kernel
- D. Medir solo latencia de red

Explicación: El registry distribuye artefactos; no es el planificador ni el almacén universal de credenciales.

### Propuesta

¿Qué función cumple un registry?

- A. Almacenar y distribuir imágenes de contenedor. **(correcta)**
- B. Ejecutar procesos aislados a partir de imágenes.
- C. Construir imágenes desde instrucciones y archivos.
- D. Asignar réplicas a los nodos disponibles del clúster.

Explicación: Un registry almacena y distribuye imágenes para que otros sistemas puedan obtenerlas. Puede ser público o privado. Un repositorio agrupa imágenes relacionadas dentro del registry; no es el mismo nivel de organización. La ejecución, construcción y planificación son funciones diferentes. El registro puede requerir autenticación, pero no es por ello un almacén universal de secretos ni la instancia que ejecuta la aplicación.

- Error B: Ejecutar contenedores corresponde al entorno de ejecución. Descargar una imagen de un registry no significa que el registry ejecute sus procesos.
- Error C: Construir transforma instrucciones y archivos en una imagen. Publicarla después en un registry es otra fase.
- Error D: Asignar cargas a nodos es una función del planificador del clúster. El registry conserva y distribuye sus artefactos.

- [Docker Docs: What is a registry?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry/) · Definición inicial; Registry vs. repository: almacenamiento, distribución y colecciones de imágenes · versión: Solo conceptos; no se adoptan precios, planes o el catálogo comercial de servicios como recomendaciones actuales · comprobado: 2026-10-28

Partida: `92042f1b09249979f1180a7c42abe24bd4c146ce0f27356ff2407ca4b1c98457` · propuesta: `4283a7cb81c010fa59b0fa503cf8aa13ac5819734fdfd17078517041bdba5855`

## AI-GSI-B2-T07-004

Decisión: pending_review · acción: revise.

Motivo: Conservar promoción del artefacto y clave D; escenario de pipeline que distingue identidad de código y de imagen y permite configuración externa.

### Antes

¿Qué expresa build once, deploy many?

- A. Desactivar pruebas después de construir
- B. Reconstruir siempre con dependencias distintas en producción
- C. Crear una imagen única para cada petición
- D. Promover el mismo artefacto validado entre entornos **(correcta)**

Explicación: Promover el mismo artefacto reduce diferencias entre lo validado y lo desplegado.

### Propuesta

Una pipeline construye y valida una imagen antes de llevarla a otros entornos. ¿Qué decisión respeta build once, deploy many?

- A. Reconstruir en producción desde el mismo commit de código.
- B. Usar por entorno una imagen recompilada con sus dependencias.
- C. Editar dentro de cada imagen la configuración de su destino.
- D. Promover la misma imagen con configuración externa. **(correcta)**

Explicación: Build once, deploy many mantiene la identidad del artefacto validado al promoverlo entre entornos. Reconstruir desde el mismo commit puede resolver dependencias o incorporar condiciones diferentes y producir otro resultado. La configuración de despliegue puede variar sin reconstruir o editar el artefacto, con gestión separada y trazabilidad. Mantener el artefacto no elimina pruebas de integración, validaciones de configuración o controles del entorno.

- Error A: El commit identifica código fuente, no garantiza la identidad del binario o imagen reconstruidos. El principio promueve el artefacto ya construido.
- Error B: Recompilar con dependencias por entorno genera artefactos distintos. No conserva lo que fue validado anteriormente.
- Error C: Editar el contenido de la imagen produce otra versión del artefacto. El principio separa configuración del contenido que se promueve.

- [AWS Well-Architected DevOps Guidance: Anti-patterns for continuous delivery](https://docs.aws.amazon.com/wellarchitected/latest/devops-guidance/anti-patterns-for-continuous-delivery.html) · Building more than once: build once, deploy many y artefactos de repositorios de confianza · versión: Documentación latest; solo identidad del artefacto y riesgo de reconstrucción por entorno, sin imponer microservicios u otras recomendaciones del artículo · comprobado: 2026-10-28
- [Adam Wiggins: The Twelve-Factor App, V Build, release, run](https://12factor.net/build-release-run) · Tres fases: build, release y run; composición de build y configuración del despliegue; identidad de releases · versión: Última actualización declarada 2017; se usa separación de configuración, sin copiar herramientas históricas o imponer build a este sitio estático · comprobado: 2026-10-28

Partida: `d57329d6a0dd982d1711d4124ff7a444315c32abf0d3357de046b58d05d101b5` · propuesta: `5545ae25b9b944bad25b2e236d0601c2853856a702d1112e4c43396e0d927060`

## AI-GSI-B2-T07-009

Decisión: pending_review · acción: revise.

Motivo: Conservar estados intermedios/compensación y clave B; caso con proyecciones retrasadas y compensaciones condicionadas, no obligatorias para toda consistencia eventual.

### Antes

¿Qué debe diseñarse al adoptar consistencia eventual?

- A. Una transacción local universal para todos los nodos
- B. Estados intermedios y compensaciones **(correcta)**
- C. La eliminación de la experiencia de usuario
- D. La inexistencia de cualquier estado transitorio

Explicación: La consistencia eventual requiere tratar estados transitorios y operaciones compensatorias cuando proceda.

### Propuesta

Un sistema acepta una operación y algunas vistas tardan en reflejarla. Al adoptar consistencia eventual, ¿qué debe planificarse?

- A. Tratar todos los pasos como una única transacción local.
- B. Gestionar estados transitorios y compensar si procede. **(correcta)**
- C. Dar por actualizadas todas las lecturas al aceptar la escritura.
- D. Restaurar todo el proceso con el rollback local del último paso.

Explicación: La consistencia eventual permite una ventana en la que distintas vistas todavía no reflejan el mismo estado. Deben definirse estados intermedios, qué ve el usuario y cómo se recuperan fallos o conflictos. En procesos de varios pasos, puede proceder compensar según reglas de negocio; no es obligatorio en toda replicación eventual ni equivale a restaurar físicamente el pasado. La convergencia se entiende bajo las condiciones del modelo, no como un plazo fijo universal o éxito inevitable ante fallos permanentes.

- Error A: Una transacción local cubre su propio ámbito. No convierte automáticamente los pasos de servicios independientes en una unidad atómica global.
- Error C: Aceptar una escritura no prueba que todas las réplicas o proyecciones la hayan incorporado. El diseño debe considerar esa ventana.
- Error D: El rollback del último paso no deshace los efectos confirmados en otros ámbitos. Puede ser necesario recuperarlos o compensarlos con operaciones de negocio.

- [Werner Vogels: Eventually Consistent - Revisited](https://www.allthingsdistributed.com/2008/12/eventually_consistent.html) · Consistency—Client Side: weak consistency, inconsistency window y eventual consistency; variaciones read-your-writes y session consistency · versión: Publicado en diciembre de 2008; texto primario del autor. Convergencia bajo condiciones del modelo, sin plazo universal o compensación obligatoria en toda réplica · comprobado: 2026-10-28
- [Microsoft Azure Architecture Center: Compensating Transaction pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction) · Context and problem; Solution: estados intermedios, cambios concurrentes y compensación según reglas del negocio · versión: Solo manejo de pasos distribuidos y compensaciones cuando correspondan. No se adopta una preferencia universal por eventual frente a fuerte ni compensación como rollback físico exacto · comprobado: 2026-10-28

Partida: `e7787c13f81947b6182b1b8498bb3bfd12bb976c051841e131fd8fa7aa31958a` · propuesta: `cb97836b7d617a839f51a799e673307f0fcd91614e0fc452feb33a7801ed28fc`

## AI-GSI-B2-T07-010

Decisión: pending_review · acción: revise.

Motivo: Conservar agente de nodo y clave B; comparar cuatro componentes reales sin distractores ajenos ni atribuir scheduling a kubelet.

### Antes

¿Qué componente de Kubernetes ejecuta funciones de agente en el nodo?

- A. WSDL
- B. Kubelet **(correcta)**
- C. Tabla de hechos
- D. Scheduler como agente de cada aplicación

Explicación: Kubelet opera en nodos; scheduler y API Server pertenecen al plano de control.

### Propuesta

¿Qué componente de Kubernetes cumple el papel de agente del nodo para mantener la ejecución de sus Pods?

- A. kube-scheduler.
- B. kubelet. **(correcta)**
- C. kube-controller-manager.
- D. kube-apiserver.

Explicación: Kubelet cumple el papel de agente del nodo y trabaja para que los Pods y sus contenedores se ejecuten según sus especificaciones. Se coordina con el runtime para ejecutar contenedores; no debe confundirse con el planificador que asigna Pods a nodos. Los otros componentes citados pertenecen al plano de control. El runtime concreto puede variar y no tiene que ser Docker.

- Error A: kube-scheduler selecciona nodos adecuados para Pods pendientes de asignación. No es el agente que mantiene su ejecución en cada nodo.
- Error C: kube-controller-manager ejecuta controladores del plano de control para reconciliar recursos. No identifica al agente local de ejecución de Pods.
- Error D: kube-apiserver expone la API HTTP de Kubernetes. No es el agente del nodo que coordina la ejecución de sus contenedores.

- [Kubernetes: Kubernetes Components](https://kubernetes.io/docs/concepts/overview/components/) · Control Plane Components: kube-apiserver, kube-scheduler y kube-controller-manager; Node Components: kubelet y runtime · versión: Documentación web consultada; funciones básicas del clúster, sin deducir la versión instalada de un despliegue o imponer Docker como runtime · comprobado: 2026-10-28

Partida: `2196211a7d2b14db26c7bbedd087860646a2d910c7de60bd9bcba6d75f2ea8e3` · propuesta: `0c73feaebeb2b9e4397f39558a749a24f3884ba490480ad1817e6f590fbd06ba`

## AI-GSI-B2-T07-012

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y cuatro alternativas bien delimitadas; completar reconciliación, relación con Deployment y límites de disponibilidad sin cambiar clave D.

### Antes

¿Qué recurso mantiene el número deseado de réplicas?

- A. ConfigMap
- B. Secret
- C. Namespace
- D. ReplicaSet **(correcta)**

Explicación: ReplicaSet mantiene réplicas; los otros objetos gestionan configuración, datos sensibles o ámbitos lógicos.

### Propuesta

¿Qué recurso mantiene el número deseado de réplicas?

- A. ConfigMap
- B. Secret
- C. Namespace
- D. ReplicaSet **(correcta)**

Explicación: ReplicaSet reconcilia el conjunto de Pods seleccionado con el número de réplicas deseado, creando o eliminando Pods cuando corresponde. Habitualmente un Deployment gestiona los ReplicaSets y sus actualizaciones. Mantener el objetivo no garantiza que haya recursos disponibles ni que toda réplica esté lista de forma instantánea. ConfigMap, Secret y Namespace tienen responsabilidades distintas y no son los controladores de ese número.

- Error A: ConfigMap contiene configuración no confidencial que pueden consumir las cargas. No crea o elimina Pods para ajustar un número deseado.
- Error B: Secret está destinado a datos sensibles y requiere controles adecuados de acceso y protección. No es un controlador de réplicas.
- Error C: Namespace proporciona ámbito de nombres y agrupación de recursos namespaced. No reconcilia por sí mismo el número de Pods ni supone aislamiento de seguridad completo.

- [Kubernetes: ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/) · Introducción; How a ReplicaSet works; When to use a ReplicaSet: selector, plantilla, réplicas y relación con Deployment · versión: Documentación web consultada; reconciliación hacia el estado deseado, sin prometer disponibilidad instantánea ante falta de recursos o nodos · comprobado: 2026-10-28
- [Kubernetes: ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/) · Introducción y ConfigMaps and Pods: configuración no confidencial y separación respecto a imágenes · versión: Documentación web consultada; no se atribuye secreto o cifrado a ConfigMap · comprobado: 2026-10-28
- [Kubernetes: Secrets](https://kubernetes.io/docs/concepts/configuration/secret/) · Introducción y caution: datos sensibles; controles de acceso y cifrado adicionales · versión: Documentación web consultada; el objeto no garantiza por sí solo cifrado en reposo o acceso autorizado · comprobado: 2026-10-28
- [Kubernetes: Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) · Introducción; When to Use Multiple Namespaces; Not all objects are in a namespace · versión: Documentación web consultada; ámbito de nombres y recursos, no aislamiento de seguridad completo o controlador de réplicas · comprobado: 2026-10-28

Partida: `d3e3234609506f9c5a8e19752a994b1a1188e26799b022a4b8aed927270b9c6a` · propuesta: `e4032999b56fdc8c7a51ed1d368ce7bb12fbd49385bd6381428167588835df8d`
