# GSI-EDITORIAL-077 — revisión propuesta

Preparado: 2026-11-03. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `71ded9a0507381df08d413d2e5ca9c590cbfd7ad2e73a223a76749e19ae85e6f`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T09-005

Decisión: pending_review · acción: revise.

Motivo: Conservar los tres roles y clave D; microcaso terminal/switch/servidor y cuatro permutaciones próximas.

### Antes

¿Qué roles distingue 802.1X?

- A. Primario, espejo y paridad
- B. Root, usuario y visitante como únicos roles
- C. Cliente, impresora y escáner
- D. Supplicant, authenticator y servidor AAA **(correcta)**

Explicación: El acceso de red separa cliente, punto de control y servidor de autenticación.

### Propuesta

En 802.1X, un terminal solicita acceso por un switch que consulta un servidor de autenticación. ¿Qué roles tienen, respectivamente?

- A. Autenticador, supplicant, servidor de autenticación.
- B. Supplicant, servidor de autenticación, autenticador.
- C. Servidor de autenticación, autenticador, supplicant.
- D. Supplicant, autenticador, servidor de autenticación. **(correcta)**

Explicación: El terminal que solicita acceso es el supplicant. El switch controla el puerto como autenticador y transmite el intercambio al servidor que realiza la autenticación, normalmente mediante RADIUS. Son papeles lógicos diferenciados: controlar la admisión al enlace no equivale a ser el servidor que valida la identidad.

- Error A: Intercambia los papeles del terminal solicitante y del switch que controla el acceso.
- Error B: Asigna al switch el papel de servidor y al servidor el de punto de control de acceso.
- Error C: Intercambia el extremo que solicita acceso con el servidor que autentica.

- [HPE Aruba: 802.1X Authentication Components](https://arubanetworking.hpe.com/techdocs/ClearPass/6.11/PolicyManager/Content/Deploy/802.1X%20Authentication/8021X_About.htm) · 802.1X Authentication Components: supplicant, authenticator y authentication server · versión: ClearPass 6.11, HTML comprobado 03-11-2026. Roles lógicos; el servidor suele usar RADIUS. No se universaliza su ejemplo de controlador inalámbrico ni la glosa que restringe EAP a wireless. · comprobado: 2026-11-03

Partida: `0235efe75b0d2e7591185d8692ce7ad1b8a298cc0a331d709589bef0ff9b2bb6` · propuesta: `c3bb67d2609fc258cfcb70c9b0ee762db0f7fa6d81b2cc44719cc2eb7141cb33`

## AI-GSI-B4-T09-007

Decisión: pending_review · acción: revise.

Motivo: Conservar acceso a objetos gestionables y clave B; caso de lectura de contador que diferencia agente, gestor, MIB y colector.

### Antes

¿Qué función cumple un agente SNMP?

- A. Crear direcciones MAC
- B. Exponer objetos gestionables **(correcta)**
- C. Sustituir el sistema operativo
- D. Decidir siempre toda política WAN

Explicación: El agente proporciona acceso a información de gestión consultada por el manager.

### Propuesta

Un gestor consulta por SNMP un contador de una interfaz. ¿Qué papel cumple el agente del dispositivo en esa consulta?

- A. Generar solicitudes de lectura hacia todos los dispositivos.
- B. Atender solicitudes sobre objetos de gestión del dispositivo. **(correcta)**
- C. Definir el esquema de los objetos en un módulo documental.
- D. Centralizar los registros de eventos enviados por los equipos.

Explicación: El agente SNMP proporciona acceso a información de gestión del dispositivo a través de las aplicaciones que responden a comandos. Puede también originar notificaciones. El gestor solicita la consulta; el módulo MIB define los objetos y un colector de eventos cumple otro papel. La información accesible depende de implementación y permisos.

- Error A: Generar solicitudes a equipos gestionados corresponde al papel de gestor, no a atender la consulta descrita.
- Error C: La definición del esquema pertenece al módulo MIB; no es el componente que responde con la información disponible.
- Error D: Recoger eventos, por ejemplo syslog, no describe al respondedor SNMP de esa consulta.

- [IETF: RFC 3411, Architecture for SNMP Management Frameworks](https://www.rfc-editor.org/rfc/rfc3411.html) · §3.1.3.2 SNMP Agent; §3.3.1 contexto; §3.4.3 securityLevel · versión: Diciembre2002, apartados HTML comprobados 03-11-2026. Agente como entidad con aplicaciones responder/originator; niveles noAuthNoPriv, authNoPriv y authPriv. No toda versión 3 cifra o exige el mismo modelo de seguridad. · comprobado: 2026-11-03

Partida: `37e2c35ca926d65d3bfd220c35bee948846db6ca7a15c7642784ca152d7c06e6` · propuesta: `a19c503b4dfe21233616c641c4f5f445a47e3106741e244ed31971138c3eb1fb`

## AI-GSI-B4-T09-008

Decisión: pending_review · acción: revise.

Motivo: Conservar MIB como estructura de gestión y clave C; distinguir definición, valor, tráfico y políticas.

### Antes

¿Qué describe una MIB?

- A. Un único valor secreto
- B. El plan físico de cableado exclusivamente
- C. La estructura de objetos de gestión **(correcta)**
- D. Una captura completa del tráfico

Explicación: La MIB describe objetos; los OID los identifican.

### Propuesta

¿Qué describe una MIB?

- A. La secuencia de solicitudes que debe emitir cada gestor.
- B. La lista de valores obtenidos en la última captura de paquetes.
- C. Los objetos de gestión y su organización, sintaxis y significado. **(correcta)**
- D. Las credenciales y los permisos efectivos del usuario remoto.

Explicación: Los módulos MIB describen objetos de gestión mediante nombres, tipos y significado. La MIB se entiende como el almacén virtual de esa información gestionable; la definición del objeto no es su valor observado en un instante. Un OID identifica dentro de esa estructura, mientras acceso y seguridad requieren políticas aparte.

- Error A: El esquema no fija una secuencia obligatoria de consultas para todos los gestores.
- Error B: Una captura contiene tráfico observado; no define la sintaxis y semántica de los objetos gestionados.
- Error D: La definición de acceso máximo de un objeto no equivale a credenciales ni autorización efectiva del usuario.

- [IETF: RFC 2578, Structure of Management Information Version2](https://www.rfc-editor.org/rfc/rfc2578.html) · §1 MIB y módulos; §2.2 Object Names and Syntaxes; §§3.5–3.6 OID; §7.7 INDEX · versión: Abril1999, apartados HTML comprobados 03-11-2026. Se distingue modelo/módulo MIB, nombre OID, instancia y valor. No se confunde MAX-ACCESS con autorización administrativa. · comprobado: 2026-11-03

Partida: `8a6fd8c2f19e843df15ddd8989bc853badd6bb4af0f49a803cd7ebb69fb5555d` · propuesta: `c8b46486a9133a6e49db08b7a4645088434a74a3058ca500086aa3e80d421867`

## AI-GSI-B4-T09-009

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación de objeto y clave A; precisar nombre/instancia/contexto sin tratar OID como valor o credencial.

### Antes

¿Qué identifica un OID?

- A. Un objeto de gestión **(correcta)**
- B. Una contraseña de administrador
- C. Un archivo de copia completo
- D. La ubicación física de todo el CPD

Explicación: El identificador permite referirse a objetos dentro de la estructura de gestión.

### Propuesta

Dentro del modelo de objetos SNMP, ¿qué papel cumple un OID?

- A. Nombrar jerárquicamente objetos y sus instancias identificadas. **(correcta)**
- B. Codificar el valor actual de la métrica solicitada al agente.
- C. Identificar al usuario y autorizar la lectura del objeto.
- D. Indicar la dirección de transporte del gestor que consulta.

Explicación: Un OID es un identificador jerárquico formado por subidentificadores. En SNMP nombra objetos; para acceder a un valor concreto se usa el nombre de su instancia, con el sufijo o índice que corresponda. El nombre no es el valor, la credencial ni la dirección del gestor; el contexto también delimita la información accesible.

- Error B: El valor se devuelve asociado al nombre; la numeración OID no es en general la medición solicitada.
- Error C: Nombrar el objeto no autentica ni autoriza al solicitante.
- Error D: El destino de transporte se determina aparte; el OID identifica información de gestión.

- [IETF: RFC 2578, Structure of Management Information Version2](https://www.rfc-editor.org/rfc/rfc2578.html) · §1 MIB y módulos; §2.2 Object Names and Syntaxes; §§3.5–3.6 OID; §7.7 INDEX · versión: Abril1999, apartados HTML comprobados 03-11-2026. Se distingue modelo/módulo MIB, nombre OID, instancia y valor. No se confunde MAX-ACCESS con autorización administrativa. · comprobado: 2026-11-03
- [IETF: RFC 3411, Architecture for SNMP Management Frameworks](https://www.rfc-editor.org/rfc/rfc3411.html) · §3.1.3.2 SNMP Agent; §3.3.1 contexto; §3.4.3 securityLevel · versión: Diciembre2002, apartados HTML comprobados 03-11-2026. Agente como entidad con aplicaciones responder/originator; niveles noAuthNoPriv, authNoPriv y authPriv. No toda versión 3 cifra o exige el mismo modelo de seguridad. · comprobado: 2026-11-03

Partida: `d77af4e448463c7432121e1701f8a047950d154ef9af8592730eef8d1ace84ed` · propuesta: `de039aef48fca8e26a3d2d4999984c15feeeef33ca826c69eda25496db20c752`

## AI-GSI-B4-T09-010

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas, cuatro operaciones reales y clave C. Añadir condiciones de escritura y explicaciones individuales.

### Antes

¿Qué operación SNMP solicita modificar un valor cuando está permitido?

- A. TRAP
- B. GETNEXT
- C. SET **(correcta)**
- D. GET

Explicación: SET escribe; GET y sus variantes consultan y TRAP notifica.

### Propuesta

¿Qué operación SNMP solicita modificar un valor cuando está permitido?

- A. TRAP
- B. GETNEXT
- C. SET **(correcta)**
- D. GET

Explicación: SET solicita asignar valores a las instancias indicadas. Su éxito exige que el objeto permita la operación, la solicitud sea válida y el usuario esté autorizado. Una petición puede devolver error: la existencia de SET no garantiza modificación. GET y GETNEXT son consultas; TRAP es una notificación.

- Error A: TRAP informa de un evento; no solicita al agente modificar el valor indicado.
- Error B: GETNEXT obtiene el sucesor lexicográfico accesible; no escribe el valor del objeto.
- Error D: GET solicita el valor de las instancias nombradas, sin ordenar su modificación.

- [IETF: RFC 3416, Protocol Operations for SNMP](https://www.rfc-editor.org/rfc/rfc3416.html) · §4.2.5 SetRequest; §§4.2.6–4.2.7 SNMPv2-Trap/InformRequest; §2.2 retransmisiones · versión: Diciembre2002, HTML comprobado 03-11-2026. INFORM tiene Response de aplicación, sin garantía de entrega o reparación. SET solicita modificación bajo permisos y validez del objeto, no escritura garantizada. · comprobado: 2026-11-03
- [IETF: RFC 1157, SNMP](https://www.rfc-editor.org/rfc/rfc1157.html) · §§4.1.2–4.1.3 Get/GetNext y §4.1.5 SetRequest · versión: Mayo1990, texto histórico HTML comprobado 03-11-2026. Acredita que GET/GETNEXT/SET ya existían antes de v2/v3; no se recomienda seguridad de community strings o algoritmos antiguos. · comprobado: 2026-11-03

Partida: `ece934456035007d3001d1975e19730f34d36ec8d85a959162958853ff8ff2ea` · propuesta: `08b0cfee01bf1e2d5c4627cf06da93a287509fea41f14c6e4a8429b93e8e3557`

## AI-GSI-B4-T09-011

Decisión: pending_review · acción: revise.

Motivo: Conservar GETBULK desde v2 y clave C; cuatro operaciones reales, sin v3 como falsa procedencia de SET.

### Antes

¿Qué operación de recuperación aparece desde SNMPv2?

- A. PING
- B. GET como novedad exclusiva de v2
- C. GETBULK **(correcta)**
- D. SET como novedad exclusiva de v3

Explicación: GETBULK permite recuperación agrupada desde v2.

### Propuesta

¿Qué operación de recuperación aparece desde SNMPv2?

- A. GetRequest.
- B. GetNextRequest.
- C. GetBulkRequest. **(correcta)**
- D. SetRequest.

Explicación: GETBULK aparece en las operaciones de SNMPv2 para recuperar más información con menos intercambios, especialmente al recorrer tablas. Usa parámetros de repetición y está limitado por acceso, tamaño y procesamiento. No implica una descarga ilimitada. GET, GETNEXT y SET ya formaban parte de SNMPv1.

- Error A: GET consulta instancias concretas y ya estaba en SNMPv1; no es la novedad pedida.
- Error B: GETNEXT recorre sucesores y también existía en v1, aunque pueda emplearse para tablas.
- Error D: SET solicita modificar instancias y ya existía en v1; no es recuperación agrupada.

- [IETF: RFC 1905, Protocol Operations for SNMPv2](https://www.rfc-editor.org/rfc/rfc1905.html) · Overview: recuperación agrupada; §4.2.3 GetBulkRequest, repeticiones y límites de mensaje · versión: Enero1996, HTML histórico comprobado 03-11-2026. Obsoleto por RFC3416, se utiliza como evidencia histórica de GETBULK en v2, no como especificación operativa más reciente. · comprobado: 2026-11-03
- [IETF: RFC 1157, SNMP](https://www.rfc-editor.org/rfc/rfc1157.html) · §§4.1.2–4.1.3 Get/GetNext y §4.1.5 SetRequest · versión: Mayo1990, texto histórico HTML comprobado 03-11-2026. Acredita que GET/GETNEXT/SET ya existían antes de v2/v3; no se recomienda seguridad de community strings o algoritmos antiguos. · comprobado: 2026-11-03

Partida: `722f7236611f8647a052de45cd593f3790115e0a63415129a4f26ae967c908b5` · propuesta: `4f39bc80fcfcf678d45292745b8426c82d47054d88c300c5b5101f24321d2a58`

## AI-GSI-B4-T09-012

Decisión: pending_review · acción: revise.

Motivo: Conservar confirmación INFORM/TRAP y clave C; caso de notificación que distingue ACK de entrega o resolución garantizada.

### Antes

¿Qué diferencia INFORM de TRAP en el aspecto indicado?

- A. INFORM solo sirve para copiar discos
- B. TRAP siempre se confirma e INFORM nunca
- C. INFORM permite confirmación; TRAP no recibe esa confirmación de aplicación **(correcta)**
- D. Ambos son protocolos de routing

Explicación: Notificación confirmable y no confirmada tienen comportamientos operativos distintos.

### Propuesta

Un equipo debe emitir una notificación SNMP con respuesta de aplicación del receptor. ¿Qué distingue INFORM de TRAP?

- A. TRAP recibe Response; INFORM no recibe Response de aplicación.
- B. Ambas reciben Response; INFORM además cifra el aviso enviado.
- C. INFORM recibe Response; TRAP no usa esa confirmación de aplicación. **(correcta)**
- D. Ninguna recibe Response; INFORM solo aumenta el detalle del aviso.

Explicación: INFORM es un mecanismo de notificación confirmada mediante una Response-PDU. TRAP no usa esa confirmación de aplicación. La respuesta permite conocer recepción, pero no asegura entrega en toda circunstancia ni demuestra que alguien haya resuelto el evento. Las políticas de reintento y los fallos de red siguen siendo relevantes.

- Error A: Invierte el comportamiento: INFORM es la notificación confirmada, no TRAP.
- Error B: TRAP no recibe esa Response y usar INFORM no introduce cifrado automáticamente.
- Error D: INFORM sí incorpora respuesta de aplicación; su diferencia no consiste solo en el detalle del contenido.

- [IETF: RFC 3416, Protocol Operations for SNMP](https://www.rfc-editor.org/rfc/rfc3416.html) · §4.2.5 SetRequest; §§4.2.6–4.2.7 SNMPv2-Trap/InformRequest; §2.2 retransmisiones · versión: Diciembre2002, HTML comprobado 03-11-2026. INFORM tiene Response de aplicación, sin garantía de entrega o reparación. SET solicita modificación bajo permisos y validez del objeto, no escritura garantizada. · comprobado: 2026-11-03

Partida: `bd33d40e7f8bb0ee728f88209be5b0d1c22f2488806eeec7ff3754dcda94ff50` · propuesta: `82bc792f6ce044d442b85d8dd5eb950d2545e44f2265238ff6195db1a0a8ca39`

## AI-GSI-B4-T09-013

Decisión: pending_review · acción: revise.

Motivo: Conservar servicios opcionales y clave B; distinguir nivel, modelo y autorización, sin recomendar algoritmos históricos.

### Antes

¿Qué mejora ofrece SNMPv3 frente a community strings de v1/v2c?

- A. Ausencia de credenciales
- B. Autenticación, integridad y privacidad opcional **(correcta)**
- C. Eliminación del agente
- D. Cifrado obligatorio en cualquier configuración

Explicación: Debe configurarse el nivel de seguridad adecuado; v3 no significa cifrado obligatorio siempre.

### Propuesta

¿Qué mejora ofrece SNMPv3 frente a community strings de v1/v2c?

- A. Cifrado de todos los mensajes por utilizar la versión 3.
- B. Servicios de autenticación e integridad, con privacidad configurable. **(correcta)**
- C. Autorización para escribir cualquier objeto al autenticarse.
- D. Privacidad de mensajes independiente de la autenticación en USM.

Explicación: SNMPv3 permite seleccionar servicios y niveles de seguridad. En USM, authNoPriv aporta autenticación e integridad sin privacidad; authPriv incorpora también protección frente a divulgación. Existe noAuthNoPriv: usar la versión 3 no basta para asegurar el canal. Autenticación y autorización sobre objetos son decisiones distintas.

- Error A: El nivel noAuthNoPriv o authNoPriv no proporciona el cifrado de authPriv; no es obligatorio en toda configuración.
- Error C: Autenticar un emisor no le concede permiso de escritura sobre todos los objetos.
- Error D: En USM la privacidad requiere autenticación; no se define un nivel noAuthPriv.

- [IETF: RFC 3411, Architecture for SNMP Management Frameworks](https://www.rfc-editor.org/rfc/rfc3411.html) · §3.1.3.2 SNMP Agent; §3.3.1 contexto; §3.4.3 securityLevel · versión: Diciembre2002, apartados HTML comprobados 03-11-2026. Agente como entidad con aplicaciones responder/originator; niveles noAuthNoPriv, authNoPriv y authPriv. No toda versión 3 cifra o exige el mismo modelo de seguridad. · comprobado: 2026-11-03
- [IETF: RFC 3414, User-based Security Model for SNMPv3](https://www.rfc-editor.org/rfc/rfc3414.html) · §1.4 servicios; §1.4.3 Privacy Protocol: protección de scopedPDU y autenticación cuando hay privacidad · versión: Diciembre2002, apartados HTML comprobados 03-11-2026. Se usa separación de servicios y nivel; no se recomiendan MD5/DES/SHA históricos ni se afirma que USM sea el único modelo de SNMPv3. · comprobado: 2026-11-03

Partida: `f4a07aaa81e4801cd42ad079927b2e5a64602b01f7ef1271b40439a938911cb3` · propuesta: `a244ce97ba76edfa4bd79a8017dfdb01ceda89eba3f8a4302cc1fa65b7ad8181`

## AI-GSI-B4-T09-014

Decisión: pending_review · acción: revise.

Motivo: Conservar flujo frente a eventos/objetos/captura y clave D; opciones paralelas y límites de plantilla/muestreo.

### Antes

¿Qué información proporcionan NetFlow/IPFIX habitualmente?

- A. Eventos de aplicación equivalentes a un servidor Syslog
- B. Objetos de gestión de una MIB consultados mediante SNMP
- C. Registros completos de cada paquete equivalentes a una captura sin muestreo
- D. Resúmenes de quién comunica, cuánto y cuándo **(correcta)**

Explicación: Los flujos describen tráfico sin ser necesariamente una captura completa de contenido.

### Propuesta

¿Qué información proporcionan NetFlow/IPFIX habitualmente?

- A. Eventos de aplicación con texto, severidad y origen.
- B. Valores de objetos consultados al agente de gestión.
- C. Paquetes íntegros en secuencia con su contenido completo.
- D. Registros de flujos con extremos, volumen y tiempos. **(correcta)**

Explicación: Los registros de flujo resumen tráfico agrupado según propiedades observadas. Pueden incluir extremos, contadores y tiempos según la plantilla y el exportador. No son necesariamente una captura de contenido completo; el muestreo o la pérdida de registros limitan lo observado. Direcciones de red tampoco prueban por sí solas identidad humana.

- Error A: Esa descripción corresponde a eventos tipo syslog, no al propósito habitual del registro de flujo.
- Error B: Describe consultas de objetos, como SNMP, una fuente distinta de telemetría.
- Error C: Una captura íntegra conserva los paquetes; un registro de flujo no proporciona necesariamente ese detalle o cobertura.

- [IETF: RFC 7011, IPFIX Protocol Specification](https://www.rfc-editor.org/rfc/rfc7011.html) · §2: Traffic Flow/Flow, Flow Keys y Data Records; introducción sobre Templates y Exporting/Collecting Processes · versión: Septiembre2013, HTML comprobado 03-11-2026. Flujos definidos por propiedades y observación temporal; pueden proceder de muestreo. No equivalen necesariamente a captura completa o identidad humana. · comprobado: 2026-11-03
- [IANA: IPFIX Information Elements](https://www.iana.org/assignments/ipfix) · IPFIX Information Elements:1 octetDeltaCount; direcciones/puertos;152 flowStartMilliseconds y153 flowEndMilliseconds · versión: Registro público actualizado11-09-2026, comprobado 03-11-2026. Elementos posibles según plantilla/exportador; no todos tienen que estar presentes en cada registro. · comprobado: 2026-11-03

Partida: `d196ba9f89a3ff97225b101ca51848c8ef2a4ca7d413ae9772f35231515a0842` · propuesta: `eb7851f063fa375ae52aa9d636597acac26a916a0e9057eec518e9f4e5978733`

## AI-GSI-B4-T09-015

Decisión: pending_review · acción: revise.

Motivo: Conservar centralización complementaria y clave B; contrastar eventos, métricas, flujos y control de colas.

### Antes

¿Qué papel tiene syslog en la gestión de red?

- A. Sustituir todo SNMP y toda métrica
- B. Centralizar eventos complementando otras fuentes **(correcta)**
- C. Asignar VLAN
- D. Negociar enlaces agregados

Explicación: Eventos, métricas y flujos ofrecen perspectivas complementarias.

### Propuesta

¿Qué papel tiene syslog en la gestión de red?

- A. Consultar por petición los contadores de una tabla MIB.
- B. Recoger eventos de equipos para correlación y diagnóstico. **(correcta)**
- C. Resumir paquetes en registros agrupados por flujo de tráfico.
- D. Asignar recursos de cola a las clases de servicio del enlace.

Explicación: Syslog define mensajes de eventos que pueden enviarse desde originadores, a través de relays, hasta colectores. Recogerlos facilita correlación y diagnóstico, complementando métricas y flujos. La centralización requiere despliegue y configuración; el protocolo por sí solo no garantiza recepción, retención, orden o protección del canal.

- Error A: Consultar contadores de una MIB es una función de gestión como SNMP, no la operación característica de syslog.
- Error C: Agrupar paquetes en flujos corresponde a telemetría de tráfico, no a mensajes de eventos syslog.
- Error D: Planificar colas es una función de QoS; registrar eventos no asigna esa capacidad.

- [IETF: RFC 5424, The Syslog Protocol](https://www.rfc-editor.org/rfc/rfc5424.html) · §4 arquitectura; §4.1 originator/relay/collector; §5 transporte independiente · versión: Marzo2009, HTML comprobado 03-11-2026. Formato y roles de eventos; no se garantiza recepción, orden, cifrado, integridad o retención por el mero uso de syslog. · comprobado: 2026-11-03

Partida: `39d5322ecaa9eb2160f815a826fd35bb73d038059b8068a3a43df2958f74e445` · propuesta: `a89a09718763cb51eba2167c5ff55ab75357cd2c9cc8cf201811347960529fcc`

## AI-GSI-B4-T09-016

Decisión: pending_review · acción: revise.

Motivo: Conservar histéresis para evitar oscilación y clave A; caso de muestras cerca de un único umbral, sin recomendar porcentajes universales.

### Antes

¿Qué conviene usar al definir umbrales para evitar oscilaciones de alerta?

- A. Histéresis y tendencias **(correcta)**
- B. Un umbral aleatorio cada minuto
- C. Borrar mediciones anteriores
- D. Alertar ante cualquier variación mínima sin contexto

Explicación: La histéresis ayuda a evitar cambios repetidos de estado cerca del límite.

### Propuesta

Una alerta se activa y recupera repetidamente al oscilar la carga alrededor de un único umbral. ¿Qué cambio reduce esa oscilación?

- A. Separar el umbral de activación del de recuperación. **(correcta)**
- B. Aplicar un mismo umbral a los dos cambios de estado.
- C. Calcular el umbral solo con la última muestra recibida.
- D. Notificar cada cruce y conservar el mismo criterio actual.

Explicación: La histéresis usa criterios diferentes para activar y recuperar: tras una subida no se rearma el mismo evento hasta alcanzar el umbral inferior previsto. Así reduce alternancias cerca del límite. Debe elegirse con el comportamiento y la gravedad del servicio; no elimina la necesidad de observar tendencias o detectar una degradación sostenida.

- Error B: Un único límite mantiene la alternancia cuando las mediciones oscilan a su alrededor.
- Error C: Recalcular con una sola muestra no establece la separación estable entre activación y recuperación.
- Error D: Notificar todos los cruces sin cambiar el criterio conserva el ruido que se quiere reducir.

- [IETF: RFC 2819, Remote Network Monitoring MIB](https://www.rfc-editor.org/rfc/rfc2819.html) · alarmRisingThreshold y alarmFallingThreshold, cláusulas DESCRIPTION del grupo Alarm · versión: Mayo2000, HTML comprobado 03-11-2026. Umbrales de subida/bajada con rearme, ejemplo pertinente de histéresis. No se configura un agente ni se presenta un porcentaje de ejemplo como umbral recomendado universal. · comprobado: 2026-11-03

Partida: `f98c016cc2f926a4833090cd226c7a999889d1746750e5b38470a06786a700fe` · propuesta: `78da24f052c54b8d9301dc07a5218a392585141e650b8b02c982e82e5cf8b74b`

## AI-GSI-B4-T09-018

Decisión: pending_review · acción: revise.

Motivo: Conservar gestión de capacidad existente y clave B; cuatro afirmaciones próximas sobre congestión con límites claros.

### Antes

¿Qué hace QoS frente a congestión?

- A. Elimina toda pérdida siempre
- B. Clasifica y prioriza uso de capacidad existente **(correcta)**
- C. Crea ancho de banda físico ilimitado
- D. Sustituye dimensionamiento

Explicación: QoS administra congestión, pero no crea capacidad.

### Propuesta

¿Qué hace QoS frente a congestión?

- A. Incrementa la velocidad física del enlace al acumularse tráfico.
- B. Clasifica y prioriza el reparto de los recursos disponibles. **(correcta)**
- C. Evita que se formen colas ajustando la capacidad a la demanda.
- D. Garantiza igual retardo a todas las clases durante la saturación.

Explicación: QoS permite clasificar tráfico y decidir su tratamiento mediante colas, planificación y otras políticas. Bajo congestión puede proteger ciertas clases a costa de compromisos para otras. No crea capacidad física ni elimina toda pérdida o demora; dimensionamiento, carga y configuración siguen condicionando el servicio.

- Error A: La clasificación y planificación no incrementan la velocidad física negociada del enlace.
- Error C: Gestionar colas no implica que desaparezcan ni que la capacidad aumente automáticamente con la demanda.
- Error D: Priorizar clases no garantiza igualdad de demora, especialmente cuando compiten por recursos insuficientes.

- [Cisco: Troubleshoot Output Drops on Catalyst9000 Switches](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-9300-switch/216236-troubleshoot-output-drops-on-catalyst-90.html) · Alternative Methods to Manage Congestion: priorización, scheduler y límites; Components Used · versión: Ejemplo Catalyst9300/IOS XE16.12.3, HTML comprobado 03-11-2026. QoS gestiona recursos y compromiso entre clases; no se ejecutan ajustes de buffers ni se convierten en receta universal. · comprobado: 2026-11-03

Partida: `6998691e753c4f1a215307e61db791b8e10b42e5c2501e381748b5488e5483df` · propuesta: `e7f9ce75b4286b09c9ab312e2206b1549d08f24af4a57b2941bfe6905ae4cd96`

## AI-GSI-B4-T09-019

Decisión: pending_review · acción: revise.

Motivo: Conservar análisis previo a ampliar y clave C; caso de saturación con descartes, sin asumir causa o impedir una ampliación justificada.

### Antes

¿Qué conviene hacer antes de ampliar un enlace saturado?

- A. Reiniciar todos los equipos sin medir
- B. Desactivar QoS y registros sin análisis
- C. Identificar tráfico dominante y corregir causas cuando proceda **(correcta)**
- D. Ampliar sin identificar la carga

Explicación: El análisis puede revelar anomalías o ineficiencias además de demanda legítima.

### Propuesta

Un enlace muestra saturación recurrente y descartes, sin conocer aún su tráfico dominante. ¿Qué análisis orienta mejor una posible ampliación?

- A. Ampliar el enlace tomando solo la media diaria de uso.
- B. Aumentar los buffers hasta dejar de observar descartes.
- C. Identificar la carga y contrastar demanda legítima y anomalías. **(correcta)**
- D. Marcar todo el tráfico de salida como prioridad elevada.

Explicación: Antes de dimensionar una ampliación conviene identificar qué tráfico domina, cuándo lo hace y con qué efecto en colas y servicio. Eso permite distinguir crecimiento legítimo de anomalías o patrones corregibles. El análisis puede justificar ampliar; no obliga a posponerlo si la demanda y los requisitos lo requieren.

- Error A: Una media puede ocultar picos, distribución por clase y causas; no describe por sí sola el problema.
- Error B: Más buffer puede cambiar pérdida por demora y no elimina un déficit sostenido de capacidad.
- Error D: Si todo recibe prioridad elevada no se distingue qué necesita protección ni se explica la carga dominante.

- [IETF: RFC 7011, IPFIX Protocol Specification](https://www.rfc-editor.org/rfc/rfc7011.html) · §2: Traffic Flow/Flow, Flow Keys y Data Records; introducción sobre Templates y Exporting/Collecting Processes · versión: Septiembre2013, HTML comprobado 03-11-2026. Flujos definidos por propiedades y observación temporal; pueden proceder de muestreo. No equivalen necesariamente a captura completa o identidad humana. · comprobado: 2026-11-03
- [Cisco: Troubleshoot Output Drops on Catalyst9000 Switches](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-9300-switch/216236-troubleshoot-output-drops-on-catalyst-90.html) · Alternative Methods to Manage Congestion: priorización, scheduler y límites; Components Used · versión: Ejemplo Catalyst9300/IOS XE16.12.3, HTML comprobado 03-11-2026. QoS gestiona recursos y compromiso entre clases; no se ejecutan ajustes de buffers ni se convierten en receta universal. · comprobado: 2026-11-03
- [Cisco: Troubleshooting Overview](https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1901.html) · General Problem-Solving Model, pasos2–8; Preparing for Network Failure, baseline y cambios registrados · versión: Guía histórica HTML comprobada 03-11-2026. Reunir evidencia, acotar y probar cambios controlados; no se impone inspección rígida desde capa1 para todo síntoma ni se ejecutan comandos de diagnóstico. · comprobado: 2026-11-03

Partida: `05f9df4f063cc11fc3ac0922a740c4064a646141ca72fd06d35bf8fe9485fd4e` · propuesta: `35c32584604c68aed1858738c6c42070f8523a6622043e516e5452bebd5791b5`

## AI-GSI-B4-T09-020

Decisión: pending_review · acción: revise.

Motivo: Conservar comprobación por capas y cambio controlado, clave A; microcaso que evita culpar a DNS o al enlace sin evidencia.

### Antes

¿Qué enfoque favorece troubleshooting de red?

- A. Comprobar por capas y cambiar variables de forma controlada **(correcta)**
- B. Modificar todo simultáneamente
- C. Asumir siempre que DNS es culpable
- D. Empezar borrando logs

Explicación: El diagnóstico preserva evidencia y acota el nivel donde falla la comunicación.

### Propuesta

Un equipo no abre una aplicación por su nombre, mientras otro sí. ¿Qué enfoque permite acotar la causa y atribuir el efecto de los cambios?

- A. Contrastar nombre, conectividad y servicio, probando cambios por separado. **(correcta)**
- B. Cambiar DNS, gateway y firewall juntos y comprobar el resultado final.
- C. Repetir ping hasta atribuir el fallo al enlace que tarde más en responder.
- D. Reiniciar el equipo afectado y descartar las observaciones anteriores.

Explicación: Un diagnóstico controlado reúne evidencia y contrasta hipótesis en los niveles relacionados con el síntoma: resolución, conectividad y servicio, entre otros. Cambiar una variable y registrar el resultado ayuda a atribuir causa y revertir. Que otro equipo funcione o responda un ping aporta información, sin probar todo el recorrido ni la aplicación.

- Error B: Cambiar varias funciones juntas impide saber cuál explica el resultado y complica la reversión.
- Error C: El tiempo de respuesta a ICMP no identifica por sí solo la causa de un fallo de aplicación.
- Error D: Un reinicio puede ocultar evidencia; descartar observaciones elimina la base para comprobar hipótesis.

- [Cisco: Troubleshooting Overview](https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1901.html) · General Problem-Solving Model, pasos2–8; Preparing for Network Failure, baseline y cambios registrados · versión: Guía histórica HTML comprobada 03-11-2026. Reunir evidencia, acotar y probar cambios controlados; no se impone inspección rígida desde capa1 para todo síntoma ni se ejecutan comandos de diagnóstico. · comprobado: 2026-11-03
- [Cisco: What is Network Troubleshooting?](https://www.cisco.com/site/us/en/learn/topics/networking/what-is-network-troubleshooting.html) · Network events; Troubleshooting processes: IP checks, ping/tracert, DNS checks; recopilación de datos · versión: HTML público comprobado 03-11-2026. Perspectivas y evidencia, sin afirmar que un ping correcto prueba toda la aplicación, que cambiar una IP siempre resuelve o que DNS sea causa por defecto. · comprobado: 2026-11-03

Partida: `72c6c6da11ef3c473eaac9b543ab0793ea19aeb8e51dfda183f88f4213144241` · propuesta: `ed693eb715538b727fc8f99bd9149b2cc5e58286e43f5833ef0cc617fbdba3c7`

## AI-GSI-B4-T10-003

Decisión: pending_review · acción: revise.

Motivo: Conservar multiplexación por longitud de onda y clave C; cuatro criterios reales de separación/identificación de canales.

### Antes

¿Qué multiplexa WDM?

- A. Direcciones IP en tablas
- B. Puertos TCP exclusivamente
- C. Canales en diferentes longitudes de onda **(correcta)**
- D. Procesos de CPU

Explicación: WDM aumenta aprovechamiento de la fibra en la capa óptica.

### Propuesta

¿Qué multiplexa WDM?

- A. Canales mediante turnos en distintas ranuras de tiempo.
- B. Canales mediante códigos de expansión de la señal.
- C. Canales mediante distintas longitudes de onda ópticas. **(correcta)**
- D. Canales mediante etiquetas de reenvío de paquetes.

Explicación: WDM combina canales ópticos diferenciados por longitud de onda sobre una fibra y los separa en recepción. Permite aprovechar el medio para varias señales simultáneas, con requisitos de ópticas, filtrado y presupuesto. No equivale a asignar turnos, códigos de expansión o etiquetas de forwarding.

- Error A: Dividir el acceso en ranuras temporales describe TDM, no la separación óptica por longitud de onda.
- Error B: La separación mediante códigos corresponde a otra técnica de acceso o multiplexación, no a WDM.
- Error D: Las etiquetas identifican tratamiento de paquetes en MPLS; no son longitudes de onda del canal óptico.

- [IEEE: Wavelength division multiplexing](https://technav.ieee.org/topic/wavelength-division-multiplexing/) · Introducción: canales ópticos simultáneos por longitud de onda; Multiplexing and Demultiplexing Components · versión: Resumen técnico público HTML comprobado 03-11-2026. Se usan multiplexación y separación de canales; no se universalizan cifras de capacidad, distancia, costes o rendimiento de sistemas concretos. · comprobado: 2026-11-03

Partida: `7672251c5c3387c87b0fc8a2a7bc3021e28330dcaf6e7a54afd9718c236de0b1` · propuesta: `06b93b5d5c7f3d7c2c3471eab4a9d6be265e550f6e59781adcbbba9dfe547413`

## AI-GSI-B4-T10-004

Decisión: pending_review · acción: revise.

Motivo: Conservar espaciado/densidad y clave A; eliminar referencia vaga al tema y evitar máximos universales de canales.

### Antes

¿Qué diferencia CWDM y DWDM según el tema?

- A. CWDM usa espaciado más amplio; DWDM mayor densidad **(correcta)**
- B. DWDM no usa fibra
- C. Ambos son protocolos de acceso Wi-Fi
- D. CWDM hace routing IP y DWDM DNS

Explicación: La densidad y complejidad óptica distinguen ambas tecnologías.

### Propuesta

¿Qué diferencia básica hay entre las rejillas de canales CWDM y DWDM?

- A. CWDM emplea separaciones más amplias; DWDM admite mayor densidad. **(correcta)**
- B. CWDM emplea separaciones más estrechas; DWDM admite menor densidad.
- C. Ambas emplean la misma rejilla; cambia la tasa binaria del canal.
- D. Ambas separan por tiempos; cambia el número de ranuras asignadas.

Explicación: CWDM y DWDM diferencian la organización espectral de canales ópticos: la separación más estrecha de DWDM permite mayor densidad en un rango dado. Hay rejillas fijas y flexibles; no se deduce un número único de canales, alcance o coste. Las magnitudes de frecuencia y longitud de onda requieren conversión para compararlas numéricamente.

- Error B: Invierte la diferencia básica de densidad espectral entre coarse y dense WDM.
- Error C: La distinción trata la rejilla espectral, no únicamente la tasa de datos que transporta cada canal.
- Error D: Separar por ranuras de tiempo describe multiplexación temporal, no la rejilla óptica de CWDM/DWDM.

- [Cisco: What is Optical Networking?](https://www.cisco.com/site/us/en/learn/topics/networking/optical-networking.html) · How do I manage capacity on an optical network?: WDM, CWDM y DWDM · versión: HTML público comprobado 03-11-2026. Diferencia de densidad; se excluyen máximos4X, distancias y costes generales que dependen del sistema. WDM no toma por sí solo decisiones sobre rutas IP. · comprobado: 2026-11-03
- [UIT-T: G.694.1 (10/2020)](https://www.itu.int/itu-t/recommendations/rec.aspx?lang=en&rec=14498) · Descripción pública: DWDM frequency grid, distintas separaciones y flexible grid; Status In force · versión: Edición3.0 aprobada29-10-2020, ficha/resumen HTML comprobados 03-11-2026. No lectura íntegra del PDF; no se comparan números en GHz con nm sin conversión. · comprobado: 2026-11-03
- [UIT-T: G.694.2 (12/2003), resumen](https://www.itu.int/dms_pubrec/itu-t/rec/g/T-REC-G.694.2-200312-I!!SUM-HTM-E.htm) · Resumen público: rejilla de longitudes de onda para CWDM; aplicación y revisión del espaciado · versión: Resumen HTML y ficha de edición12/2003 comprobados 03-11-2026. Se usa familia CWDM, no se atribuye lectura completa del PDF o una garantía de número de canales/distancia. · comprobado: 2026-11-03

Partida: `bc19d640d352fed4d7973529228c2ea5e1c3f2f80bcfc260e8a50e1c014984c0` · propuesta: `bf99a191f960529337c3567331c5c1f7b27bd2a27098a3bedea1cc48f982cd64`

## AI-GSI-B4-T10-005

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave C: tres funciones ópticas frente al routing IP. Añadir límites y feedback por distractor.

### Antes

¿Qué función no realiza WDM por sí mismo?

- A. Transporte de canales ópticos
- B. Multiplexación óptica
- C. Encaminamiento IP **(correcta)**
- D. Uso de varias longitudes de onda

Explicación: Multiplexar luz no equivale a decidir rutas de paquetes IP.

### Propuesta

¿Qué función no realiza WDM por sí mismo?

- A. Transporte de canales ópticos
- B. Multiplexación óptica
- C. Encaminamiento IP **(correcta)**
- D. Uso de varias longitudes de onda

Explicación: WDM realiza multiplexación de canales por longitud de onda, sin examinar por sí mismo destinos IP para escoger el siguiente salto. Un equipo puede integrar funciones ópticas y de routing, pero son decisiones de capas distintas. Cambiar una ruta óptica no equivale a ejecutar el encaminamiento de paquetes IP.

- Error A: Transportar canales ópticos forma parte del uso de WDM; no es la función ajena que se busca.
- Error B: La multiplexación óptica es precisamente su función de combinación de canales.
- Error D: Emplear varias longitudes de onda es el criterio que caracteriza WDM.

- [IEEE: Wavelength division multiplexing](https://technav.ieee.org/topic/wavelength-division-multiplexing/) · Introducción: canales ópticos simultáneos por longitud de onda; Multiplexing and Demultiplexing Components · versión: Resumen técnico público HTML comprobado 03-11-2026. Se usan multiplexación y separación de canales; no se universalizan cifras de capacidad, distancia, costes o rendimiento de sistemas concretos. · comprobado: 2026-11-03
- [Cisco: What is Optical Networking?](https://www.cisco.com/site/us/en/learn/topics/networking/optical-networking.html) · How do I manage capacity on an optical network?: WDM, CWDM y DWDM · versión: HTML público comprobado 03-11-2026. Diferencia de densidad; se excluyen máximos4X, distancias y costes generales que dependen del sistema. WDM no toma por sí solo decisiones sobre rutas IP. · comprobado: 2026-11-03

Partida: `4ab29476fb27d8fbd5b2d8b07cf54d2611125f6039996b2b0603b85f935c994f` · propuesta: `da8ce3f4bc5317cc8bd41409e90611f14f5adde637dd9bac08b0a0b9d9fb73ec`

## AI-GSI-B4-T10-006

Decisión: pending_review · acción: revise.

Motivo: Conservar reenvío mediante etiquetas y clave C; alternativas de campos de enlace/red/transporte, sin equiparar valor local a dirección global.

### Antes

¿Qué utiliza MPLS para reenviar tráfico?

- A. Identificadores de documentos
- B. Claves públicas del usuario
- C. Etiquetas **(correcta)**
- D. Solo nombres DNS

Explicación: MPLS conmuta etiquetas y puede soportar servicios VPN y QoS.

### Propuesta

¿Qué utiliza MPLS para reenviar tráfico?

- A. Direcciones MAC de la trama usadas como clave de conmutación.
- B. Prefijos IP buscados de nuevo en cada salto como forwarding nativo.
- C. Etiquetas de la pila usadas para elegir tratamiento y siguiente salto. **(correcta)**
- D. Puertos de transporte usados como identificador del camino completo.

Explicación: En forwarding MPLS de un paquete etiquetado se consulta la etiqueta superior en el contexto adecuado para obtener siguiente salto y operación sobre la pila. Puede intercambiarse, añadirse o retirarse una etiqueta. Su significado suele ser local; no es una dirección global ni garantiza cifrado, ancho de banda o mayor velocidad por sí sola.

- Error A: La MAC pertenece al enlace y su conmutación no es la clave que define el forwarding MPLS etiquetado.
- Error B: El routing IP contribuye al control y a decisiones de borde, pero no describe la consulta de etiqueta del caso MPLS.
- Error D: Los puertos pueden servir para clasificar o repartir tráfico; no son por sí mismos la etiqueta de un camino MPLS.

- [IETF: RFC 3032, MPLS Label Stack Encoding](https://www.rfc-editor.org/rfc/rfc3032.html) · §2.1: pila de etiquetas, valor superior y búsqueda de siguiente salto/operación · versión: Enero2001, HTML comprobado 03-11-2026. Se usa forwarding por etiqueta y pila, no se recomienda el nombre histórico EXP para el campo hoy Traffic Class ni se prometen ventajas temporales universales. · comprobado: 2026-11-03

Partida: `f79fa9d8f9b61cae58f9d08f31ed46015b94901e28778ce1ad8ce2aad8238131` · propuesta: `319684c49a4dfe9d000c1a201e548ae25f6ae5a6b57d3634c2268a1ba2e17e32`

## AI-GSI-B4-T10-007

Decisión: pending_review · acción: revise.

Motivo: Conservar equivalencia de tratamiento y clave B; contrastar clase, valor de etiqueta, enlace y distribución.

### Antes

¿Qué representa una FEC en MPLS?

- A. Una contraseña de operador
- B. Tráfico agrupado para recibir el mismo tratamiento **(correcta)**
- C. Un tipo de antena
- D. Un fichero de eventos

Explicación: La clase de equivalencia agrupa paquetes según tratamiento de reenvío.

### Propuesta

¿Qué representa una FEC en MPLS?

- A. Un valor de etiqueta compartido por todos los routers del dominio.
- B. Una clase de paquetes con el mismo tratamiento de reenvío. **(correcta)**
- C. Una conexión física entre los dos extremos de cada enlace.
- D. Un protocolo que distribuye etiquetas a los routers vecinos.

Explicación: Una FEC agrupa paquetes que reciben un tratamiento de reenvío equivalente. La clasificación puede considerar destino y otros criterios; una etiqueta representa esa clase en un contexto. No hace que el mismo valor numérico sea universal en todo el dominio ni convierte la clase en el enlace físico o en el protocolo que distribuye etiquetas.

- Error A: Confunde la clase con un valor numérico de etiqueta y supone alcance global para una asociación habitualmente local.
- Error C: El medio o enlace físico transporta tráfico; no es la clase de equivalencia de los paquetes.
- Error D: Distribuir asociaciones de etiquetas corresponde a protocolos de control, no a la FEC como agrupación.

- [IETF: RFC 3031, MPLS Architecture](https://www.rfc-editor.org/rfc/rfc3031.html) · §2.2 Terminology: FEC e ingress/egress; §3.1 Labels; §3.15 LSP Ingress/Egress; §3.16 Penultimate Hop Popping · versión: Enero2001, apartados HTML comprobados 03-11-2026. FEC como tratamiento común y significado local de etiquetas; PHP evita afirmar que solo el borde puede retirar una etiqueta. · comprobado: 2026-11-03

Partida: `b103c41d89fc75342f48724500f7ef4464bde47e458f0f3279620078c754e563` · propuesta: `c4d021e4d2890e15bf0cd118a500ed2545134bed57c2f9d99733f7c474c4081d`

## AI-GSI-B4-T10-008

Decisión: pending_review · acción: revise.

Motivo: Conservar inserción/retirada en el borde y clave C; precisar rol LER y excepción PHP sin atribuir exclusividad al pop.

### Antes

¿Qué función se asocia a un LER?

- A. Resolver nombres DNS
- B. Solo amplificar luz
- C. Insertar o retirar etiquetas en el borde **(correcta)**
- D. Guardar copias de base de datos

Explicación: El LER actúa en borde; el LSR conmuta etiquetas en el trayecto.

### Propuesta

¿Qué función caracteriza al LER como router de borde de un dominio MPLS?

- A. Mantener la sincronización del reloj en el transporte óptico.
- B. Definir la rejilla de longitudes de onda del canal de fibra.
- C. Gestionar etiquetas al entrar o salir del dominio de reenvío. **(correcta)**
- D. Recoger las notificaciones de gestión emitidas por los routers.

Explicación: El LER es un router de borde: en el ingreso clasifica y aplica las etiquetas pertinentes; en la salida realiza el tratamiento para continuar fuera de ese dominio. La retirada de una etiqueta puede adelantarse al penúltimo salto mediante PHP. Por tanto, pop no es exclusivo del borde ni debe exigirse siempre al router de salida.

- Error A: La sincronización del transporte puede ser necesaria en una red, pero no define la función de borde MPLS del LER.
- Error B: La rejilla óptica pertenece a WDM; no caracteriza la imposición o tratamiento de etiquetas de un LER.
- Error D: Recoger eventos es una función de gestión, distinta del papel de borde en el plano de reenvío.

- [Cisco: MPLS Overview](https://www.cisco.com/c/en/us/td/docs/switches/datacenter/sw/nx-os/mpls/configuration/guide/mpls_cg/mp_mpls_overview.html) · LER/PE; Label Imposition; Label Disposition y Penultimate Hop Popping · versión: Guía NX-OS histórica HTML comprobada 03-11-2026. Se usan roles/operaciones, no restricciones de plataforma, ejemplos de etiquetas o garantías de cifrado/velocidad. Se excluyen simplificaciones de que el último pop implique siempre salir del dominio. · comprobado: 2026-11-03
- [IETF: RFC 3031, MPLS Architecture](https://www.rfc-editor.org/rfc/rfc3031.html) · §2.2 Terminology: FEC e ingress/egress; §3.1 Labels; §3.15 LSP Ingress/Egress; §3.16 Penultimate Hop Popping · versión: Enero2001, apartados HTML comprobados 03-11-2026. FEC como tratamiento común y significado local de etiquetas; PHP evita afirmar que solo el borde puede retirar una etiqueta. · comprobado: 2026-11-03

Partida: `ef034ed7d50cff308d79b1fea1eb92a26c1fb2b1b5749d8f1bd4294df7b96a73` · propuesta: `7e043026e6f2c34486dd6d371761705cfb7738e4fcb21a4d6192f91cbe741211`
