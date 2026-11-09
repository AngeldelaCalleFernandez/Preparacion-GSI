# GSI-EDITORIAL-080 — revisión propuesta

Preparado: 2026-11-04. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `5972a8be63c534c7bba2711bc737613c339ebfb0d0e796c595f0fc8c451e1f74`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T12-017

Decisión: pending_review · acción: revise.

Motivo: Conservar redes frente a cliente remoto y clave D; separar topología de tecnología y políticas.

### Antes

¿Qué diferencia VPN site-to-site y acceso remoto?

- A. Ambas solo conectan impresoras locales
- B. Acceso remoto prohíbe autenticación
- C. Site-to-site elimina políticas
- D. La primera conecta redes; la segunda usuarios o dispositivos **(correcta)**

Explicación: El tipo de conexión condiciona identidad, rutas y recursos autorizados.

### Propuesta

¿Qué diferencia VPN site-to-site y acceso remoto?

- A. Site-to-site identifica usuarios; acceso remoto une redes.
- B. Site-to-site exige TLS; acceso remoto exige usar IPsec.
- C. Site-to-site conecta equipos de una misma red de área local.
- D. Site-to-site enlaza redes; acceso remoto incorpora clientes. **(correcta)**

Explicación: Una VPN entre sedes enlaza redes mediante pasarelas; el acceso remoto establece acceso de un cliente, usuario o dispositivo a recursos autorizados. Es una distinción del despliegue, no una regla que asigne obligatoriamente un protocolo a cada tipo. Ambos necesitan autenticación, permisos y rutas adecuados.

- Error A: Invierte el criterio habitual: las pasarelas enlazan redes y el cliente remoto obtiene acceso según su identidad y políticas.
- Error B: El tipo de VPN no impone esa pareja de protocolos; hay accesos remotos basados en TLS o IPsec.
- Error C: Conectar equipos dentro de una LAN no define el enlace VPN entre redes que caracteriza site-to-site.

- [Cisco Security Cloud Control: VPN types](https://docs.manage.security.cisco.com/cdfmc/c_vpn-types.html) · Supported VPN connection types: Remote Access VPNs y Site-to-site VPNs · versión: HTML comprobado el 04-11-2026. Distinción entre cliente remoto y pasarelas entre redes; restricciones de producto, clientes y protocolos enumerados no se generalizan. · comprobado: 2026-11-04

Partida: `055a0a92960ec6a00aa8f0ba909b1964290d1dbb24275839846b227ae7d68fa3` · propuesta: `499694dda8bb8f786c2aa4d8dc4fa15c4ebaf5be67268b035fdb460ac784c412`

## AI-GSI-B4-T12-018

Decisión: pending_review · acción: revise.

Motivo: Conservar evaluación carga/riesgo y clave B; caso con rutas corporativas por VPN y resto por salida local.

### Antes

¿Qué decisión requiere split tunneling?

- A. Suponer que cifra todo tráfico automáticamente
- B. Evaluar carga y cambios de riesgo según política **(correcta)**
- C. Aceptarlo siempre sin análisis
- D. Eliminar controles del endpoint

Explicación: Dividir rutas puede aliviar carga y modificar exposición.

### Propuesta

Se propone enviar la intranet por VPN y el resto por la conexión local. ¿Cómo debe valorarse ese split tunneling?

- A. Considerar que la VPN inspecciona también las salidas directas.
- B. Evaluar capacidad, rutas y riesgo antes de aprobar la política. **(correcta)**
- C. Decidir el reparto a partir de la longitud de la clave VPN.
- D. Equiparar la salida directa a pasar por el filtro corporativo.

Explicación: En split tunneling, parte del tráfico utiliza la VPN y otra parte sale por la conexión local según las rutas o reglas aplicables. Puede aliviar carga del concentrador, pero cambia visibilidad y controles del tráfico directo. La política debe valorar capacidad, destino, estado del equipo y riesgos; no basta con tener un túnel cifrado.

- Error A: El tráfico que sale directamente no atraviesa por ello los controles del concentrador VPN; necesita protección y supervisión adecuadas.
- Error C: La longitud de clave afecta al mecanismo criptográfico, pero no determina qué rutas deben usar la VPN o qué riesgo tiene la salida directa.
- Error D: Salir por la conexión local puede evitar controles corporativos de red; no equivale a haber pasado por ellos.

- [Microsoft Learn: VPN routing decisions](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/vpn/vpn-routing) · Introducción; Split tunnel configuration y Force tunnel configuration · versión: Actualización 28-01-2025, HTML comprobado el 04-11-2026. Rutas, capacidad y expectativas de seguridad; no se usa la frase simplificada de que toda ruta pasa siempre por VPN en force tunnel: existen rutas específicas. · comprobado: 2026-11-04

Partida: `c2fdbd5935cc6c3b1f92b4ac4af598ac6143070f465fbefa944e63d107713939` · propuesta: `5675f692e4607b4770057a38161bea550aaf5567257ec1fbd6ff9629714f6057`

## AI-GSI-B4-T12-019

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso original y clave A; distinguir protección del canal y estado del extremo.

### Antes

Un endpoint ya comprometido entra por VPN. ¿Qué conclusión es correcta?

- A. La VPN no lo convierte en un puesto seguro **(correcta)**
- B. Ya no necesita EDR
- C. La VPN elimina automáticamente el malware
- D. Se le deben dar todos los permisos

Explicación: El canal protegido no corrige el estado de seguridad del dispositivo.

### Propuesta

Un endpoint ya comprometido entra por VPN. ¿Qué conclusión es correcta?

- A. El malware puede actuar desde el equipo pese al canal protegido. **(correcta)**
- B. La autenticación VPN acredita que el equipo carece de malware.
- C. El cifrado del túnel aísla el proceso malicioso de los recursos.
- D. La pasarela VPN sanea el equipo al aceptar sus credenciales.

Explicación: La VPN protege el canal según su configuración, pero no elimina malware ni demuestra la integridad del dispositivo que la usa. Un proceso malicioso puede aprovechar credenciales o accesos disponibles en ese equipo. Deben evaluarse su estado, controles de endpoint y permisos; una autenticación correcta no es una prueba de equipo sano.

- Error B: Autenticar una identidad o dispositivo no certifica que sus procesos y archivos estén libres de compromiso.
- Error C: El cifrado protege datos en tránsito; no separa por sí mismo el malware local de los recursos que puede alcanzar.
- Error D: Aceptar credenciales establece acceso, no ejecuta automáticamente una limpieza o reconstrucción del puesto.

- [Cisco Security Cloud Control: VPN types](https://docs.manage.security.cisco.com/cdfmc/c_vpn-types.html) · Supported VPN connection types: Remote Access VPNs y Site-to-site VPNs · versión: HTML comprobado el 04-11-2026. Distinción entre cliente remoto y pasarelas entre redes; restricciones de producto, clientes y protocolos enumerados no se generalizan. · comprobado: 2026-11-04
- [NCSC: Preventing Lateral Movement](https://www.ncsc.gov.uk/guidance/preventing-lateral-movement) · §3 Protect high privilege accounts; §4 Least privilege; §5 Lock down devices y §6 segmentación · versión: HTML comprobado el 04-11-2026. Controles sobre equipo e identidad independientes de proteger el canal; sin garantía de saneamiento por acceso VPN o cumplimiento normativo español. · comprobado: 2026-11-04
- [Microsoft Learn: Microsoft Defender for Endpoint](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint) · Defender for Endpoint capabilities: detección/respuesta, reducción de superficie y gestión de vulnerabilidades · versión: Documentación HTML comprobada el 04-11-2026. Ejemplo de alcance del EDR, sin exigir producto concreto ni asumir detección infalible. · comprobado: 2026-11-04

Partida: `ae0077663dbe51b9cce76da677725f2933b831e161807508eb2415ceec7e3162` · propuesta: `bd3b3c73dc0950044da4a06799465dc24627e57afe5333a64b4ee42402c00e2d`

## AI-GSI-B4-T12-020

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, alternativa correcta bien formulada y clave B; mejorar las tres combinaciones distractoras.

### Antes

¿Qué combinación protege el puesto de usuario?

- A. Desactivar firewall local
- B. Parcheo, EDR, cifrado de disco y mínimo privilegio **(correcta)**
- C. Compartir credenciales
- D. Solo acceso permanente como administrador

Explicación: Endpoint, identidad y red deben protegerse de forma coordinada.

### Propuesta

¿Qué combinación protege el puesto de usuario?

- A. VPN, cifrado de disco y uso diario de administrador
- B. Parcheo, EDR, cifrado de disco y mínimo privilegio **(correcta)**
- C. MFA, copias de seguridad y aplazamiento de parches
- D. Firewall perimetral, proxy y retirada del EDR local

Explicación: El parcheo reduce exposición a fallos conocidos, el EDR aporta detección y respuesta, el cifrado de disco protege datos almacenados y el mínimo privilegio limita acciones e impacto. Son controles complementarios. Ninguno garantiza ausencia de compromiso, y proteger el perímetro o el inicio de sesión no sustituye mantener y supervisar el propio puesto.

- Error A: La VPN y el cifrado de disco son útiles, pero trabajar habitualmente como administrador amplía el impacto del malware y de errores.
- Error C: MFA y copias aportan protección y recuperación, pero no corrigen las vulnerabilidades que permanecen al aplazar parches.
- Error D: Los controles de red pueden no observar actividad local o fuera del perímetro; retirar el EDR elimina esa capacidad de detección y respuesta.

- [NCSC: Preventing Lateral Movement](https://www.ncsc.gov.uk/guidance/preventing-lateral-movement) · §3 Protect high privilege accounts; §4 Least privilege; §5 Lock down devices y §6 segmentación · versión: HTML comprobado el 04-11-2026. Controles sobre equipo e identidad independientes de proteger el canal; sin garantía de saneamiento por acceso VPN o cumplimiento normativo español. · comprobado: 2026-11-04
- [Microsoft Learn: Microsoft Defender for Endpoint](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint) · Defender for Endpoint capabilities: detección/respuesta, reducción de superficie y gestión de vulnerabilidades · versión: Documentación HTML comprobada el 04-11-2026. Ejemplo de alcance del EDR, sin exigir producto concreto ni asumir detección infalible. · comprobado: 2026-11-04
- [Microsoft Learn: BitLocker overview](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/) · Introducción: cifrado de volúmenes ante pérdida, robo o retirada; BitLocker and TPM · versión: HTML comprobado el 04-11-2026. Protección de datos almacenados, no saneamiento de malware en una sesión ya desbloqueada; no se trasladan requisitos de plataforma a todo cifrado de disco. · comprobado: 2026-11-04

Partida: `08e4701e9d74a156d9378150bf6fcbeef2edb3d76773091d3b08bc225e05df53` · propuesta: `1127c99f49b7b1204261607e62ef4b1529c01cca1de3c53ceacc81d14a3fc0a1`

## AI-GSI-B4-T13-001

Decisión: pending_review · acción: revise.

Motivo: Conservar AS/política/ASN y clave D; contrastar prefijo local, dominio de nombres y sesión.

### Antes

¿Qué define un sistema autónomo en Internet?

- A. Un navegador sin conexión
- B. Una cuenta de usuario
- C. Un único servidor web obligatoriamente
- D. Una red o conjunto con política de routing común e identificada por ASN **(correcta)**

Explicación: Los AS se interconectan y aplican políticas de encaminamiento.

### Propuesta

¿Qué define un sistema autónomo en Internet?

- A. Un conjunto de hosts que comparte prefijo dentro de una VLAN.
- B. El conjunto de dominios atendidos por un servidor DNS común.
- C. Una sesión BGP que intercambia rutas entre dos encaminadores.
- D. Un conjunto de redes con política de routing definida y ASN. **(correcta)**

Explicación: Un sistema autónomo es una unidad de política de encaminamiento, formada por uno o más prefijos IP bajo una política definida, e identificada mediante un ASN. No se deduce de una subred, un dominio DNS o una sesión BGP individual. Un operador puede gestionar varios AS y un AS puede integrar múltiples redes.

- Error A: Compartir un prefijo y una VLAN describe un ámbito local; no define la unidad de política de encaminamiento entre AS.
- Error B: La administración de nombres DNS es independiente de la agrupación de redes bajo una política de routing.
- Error C: Una sesión BGP es una relación de intercambio entre pares; un AS puede tener muchas sesiones y rutas.

- [IETF: RFC1930, Guidelines for creation, selection, and registration of an Autonomous System](https://www.rfc-editor.org/rfc/rfc1930.html) · §3 Definitions: conjunto de prefijos con política de encaminamiento definida y ASN; §4 errores comunes · versión: BCP6, marzo de 1996, apartados HTML comprobados el 04-11-2026. Solo definición y unidad de política; se excluyen predicciones IDRP, limitación histórica a ASN16 bits y recetas antiguas de asignación. · comprobado: 2026-11-04

Partida: `1f8eec39b258cf0a28026c8ca29fb4006b4957dbc55688332abc72c07422553e` · propuesta: `30b3bd426d75a55c0bced9134dc00a7e2b4acaca0c81d5813a3f39f7a50e2bdb`

## AI-GSI-B4-T13-002

Decisión: pending_review · acción: revise.

Motivo: Conservar IXP/interconexión y clave C; diferenciar infraestructura, peering, tránsito y política.

### Antes

¿Qué papel tiene un IXP?

- A. Sustituir todos los DNS
- B. Emitir documentos de identidad
- C. Facilitar interconexión o peering entre redes **(correcta)**
- D. Almacenar todas las páginas de Internet

Explicación: Los puntos de intercambio facilitan acuerdos de interconexión.

### Propuesta

¿Qué papel tiene un IXP?

- A. Prestar tránsito completo en cada relación de peering establecida.
- B. Elegir de forma central las rutas de todos los miembros conectados.
- C. Ofrecer infraestructura para intercambiar tráfico entre redes. **(correcta)**
- D. Reemplazar los acuerdos entre redes por una única tabla de rutas.

Explicación: Un IXP aporta infraestructura de interconexión para que redes participantes intercambien tráfico, por ejemplo mediante peering. La conectividad física no garantiza acuerdos con todos los miembros ni tránsito completo hacia Internet. Las redes conservan sus políticas; los servicios de ayuda al intercambio de rutas no convierten al IXP en un controlador universal.

- Error A: Peering y tránsito son relaciones diferentes: conectarse a un punto de intercambio no concede alcance completo por cada red vecina.
- Error B: Cada red conserva decisiones y políticas de routing; la infraestructura compartida no impone centralmente sus rutas.
- Error D: El medio de intercambio no sustituye acuerdos y políticas por una tabla universal aplicable a todos los participantes.

- [AMS-IX: What is the Internet and how peering relates to that?](https://www.ams-ix.net/ams/stories/what-is-the-internet-and-how-peering-relates-to-that) · Peering y formas de peering: intercambio voluntario entre redes e internet exchanges · versión: Artículo del operador, HTML comprobado el 04-11-2026. Infraestructura compartida no implica tránsito universal, gratuidad universal o control central de todas las rutas; cifras comerciales no usadas. · comprobado: 2026-11-04

Partida: `142f4db8d9d1ca91df378fd20f7a186d96874c1d7f817f37df2a3465c3de3977` · propuesta: `51a84600fec86ddebbd7f2d4372bf904d0eadb72ade79b07f817b26d56805b59`

## AI-GSI-B4-T13-003

Decisión: pending_review · acción: revise.

Motivo: Conservar diversidad de rutas/servicios y clave D; caso con dos accesos y un único servicio DNS.

### Antes

¿Qué afirmación describe la resiliencia de Internet?

- A. Depende de un único backbone central universal
- B. Elimina toda dependencia de proveedores
- C. La garantiza cualquier conexión individual
- D. Depende de diversidad de rutas y servicios distribuidos **(correcta)**

Explicación: Internet es una red de redes, con riesgos y dependencias distribuidos.

### Propuesta

Un portal dispone de dos accesos a Internet, pero depende de un único servicio DNS. ¿Qué enfoque mejora su resiliencia?

- A. Aumentar la velocidad contratada de los dos accesos existentes.
- B. Usar dos contratos manteniendo todas las dependencias actuales.
- C. Confiar en que BGP resuelva también la caída del servicio DNS.
- D. Diversificar rutas y dependencias críticas para prestar el servicio. **(correcta)**

Explicación: La continuidad depende del conjunto de recursos necesarios, no solo de tener varios enlaces. Si la resolución DNS conserva un punto de fallo, puede impedir llegar al servicio aunque sus rutas sigan disponibles. Se deben identificar dependencias y fallos comunes, diversificar lo necesario y probar recuperación; redundancia nominal no garantiza resiliencia.

- Error A: Más capacidad no elimina la dependencia del DNS ni crea alternativas ante su indisponibilidad.
- Error B: Dos contratos no prueban independencia técnica; conservar el mismo punto de fallo mantiene la exposición descrita.
- Error C: BGP distribuye alcance de rutas; no sustituye el servicio de resolución de nombres que ha fallado.

- [NCSC: CAF, Principle B5 Resilient networks and systems](https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems) · B5.b Design for resilience: dependencias, recursos y limitaciones geográficas; caminos físicos y proveedores alternativos · versión: Guía HTML comprobada el 04-11-2026. Aplicación conceptual a dependencias de servicio; no obligación normativa AGE ni garantía de disponibilidad por contratar dos enlaces. · comprobado: 2026-11-04

Partida: `de311dbb02bf05f5bc925a58b2aa32ec1c53e1683e8a6443e39e0d056a46276b` · propuesta: `a54ff5e22f2489595ea1cb03112ba8f6b56fc66a69d862e5fe1175940908bdf0`

## AI-GSI-B4-T13-004

Decisión: pending_review · acción: revise.

Motivo: Conservar coexistencia IPv4/IPv6 y clave B; distractores de mecanismos de transición próximos.

### Antes

¿Qué significa dual stack en transición IP?

- A. Dos contraseñas para un usuario
- B. Coexistencia de IPv4 e IPv6 **(correcta)**
- C. Dos discos en espejo
- D. Un único protocolo sin IPv4

Explicación: La coexistencia permite operar con ambas familias durante transición.

### Propuesta

¿Qué significa dual stack en transición IP?

- A. Encapsular paquetes IPv6 dentro de un transporte IPv4.
- B. Mantener implementaciones IPv4 e IPv6 en el mismo nodo. **(correcta)**
- C. Traducir entre direcciones y cabeceras IPv4 e IPv6.
- D. Usar dos prefijos IPv6 sin disponer de pila IPv4.

Explicación: Dual stack permite al nodo enviar y recibir paquetes de IPv4 e IPv6 mediante las dos implementaciones. La comunicación concreta depende de direcciones, DNS, rutas y disponibilidad de cada familia. No implica por sí mismo traducir entre ellas o encapsular una dentro de otra; esos son mecanismos de transición distintos.

- Error A: Transportar paquetes de una familia dentro de otra es un túnel; no define tener operativas ambas pilas en el nodo.
- Error C: La traducción adapta entre familias; dual stack implementa ambas sin requerir esa transformación para cada comunicación.
- Error D: Disponer de varios prefijos de la misma familia sigue siendo solo IPv6, no coexistencia de las dos pilas.

- [IETF: RFC4213, Basic Transition Mechanisms for IPv6 Hosts and Routers](https://www.rfc-editor.org/rfc/rfc4213.html) · §2 Dual IP Layer Operation: implementaciones IPv4 e IPv6; §2.1/2.2 direccionamiento y DNS; distinción con túneles §3 · versión: Octubre de 2005, HTML comprobado el 04-11-2026. Coexistencia no equivale a traducción, encapsulado o conectividad garantizada con cualquier familia. · comprobado: 2026-11-04

Partida: `e45cb68f23c60884b93841d81835d15c78e7c935e1b15f9fe5027a94a85f1766` · propuesta: `743ae28ead6f78b1a3db761d83cd26fac0ca17fa5fc85b0aac1ae14983ac343a`

## AI-GSI-B4-T13-005

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta precisa, clave B; contextualizar NAT/NAPT sin garantías de seguridad.

### Antes

¿Qué limitación puede introducir NAT?

- A. Sustituir las políticas de filtrado de un firewall
- B. Complicar comunicación extremo a extremo **(correcta)**
- C. Aportar por sí solo autenticación criptográfica de los extremos
- D. Mantener todas las direcciones de los extremos sin traducción

Explicación: Traducir direcciones conserva espacio, pero cambia conectividad y no es seguridad completa.

### Propuesta

¿Qué limitación puede introducir NAT?

- A. Autenticar criptográficamente a los extremos.
- B. Complicar comunicación extremo a extremo **(correcta)**
- C. Reemplazar políticas de filtrado de tráfico.
- D. Conservar el direccionamiento sin traducción.

Explicación: NAT modifica direccionamiento y, en NAPT, puertos. Esto puede dificultar iniciar comunicaciones hacia el interior, incorporar direcciones en aplicaciones o mantener transparencia entre extremos, y requerir mecanismos adicionales. La traducción no es autenticación criptográfica ni una política de seguridad completa; sus efectos dependen del tipo de NAT y del tráfico.

- Error A: Cambiar una dirección no demuestra criptográficamente quién es el interlocutor ni protege por sí mismo el contenido.
- Error C: La traducción y el control de acceso son funciones distintas; siguen siendo necesarias reglas acordes con los servicios permitidos.
- Error D: La función de NAT es precisamente traducir campos de direccionamiento; conservarlos todos intactos no describe ese mecanismo.

- [IETF: RFC4864, Local Network Protection for IPv6](https://www.rfc-editor.org/rfc/rfc4864.html) · §1 Introduction; §2.2 Simple Gateway: restricciones en aplicaciones, pares y servidores internos; §4.2 transparencia · versión: Informational, mayo de 2007, HTML comprobado el 04-11-2026. Separar traducción, estado y política. No se usa la afirmación histórica de IPsec obligatorio como requisito actual universal ni garantías de trazabilidad. · comprobado: 2026-11-04
- [IETF: RFC3022, Traditional NAT](https://www.rfc-editor.org/rfc/rfc3022.html) · §1 introducción y alcance Basic NAT/NAPT; §6.0/6.1 limitaciones, privacidad y diagnóstico · versión: Informational, enero de 2001, HTML comprobado el 04-11-2026. Una consulta devolvió UnexpectedStatusCode y otra lectura posterior mostró cuerpo §6. Se usan conceptos, no limitaciones históricas de implementación como universales actuales. · comprobado: 2026-11-04

Partida: `36856df6bdbd7f8b86885b931276bc378a313ed7c3fc14e46016ec6db3ac9612` · propuesta: `c4d604e5f8e24ba9a2941aa0dff270f01a17182db7a54859503a32aa57a61082`

## AI-GSI-B4-T13-006

Decisión: pending_review · acción: revise.

Motivo: Conservar organización jerárquica y clave D; distinguir autoridad, caché y recorrido de resolución.

### Antes

¿Cómo se organiza DNS?

- A. Como una tabla única universal sin réplicas
- B. Solo dentro de un navegador
- C. Mediante rutas BGP como registros de nombres
- D. Jerárquicamente, con delegaciones y caché **(correcta)**

Explicación: Resolvers y servidores autoritativos cooperan con información cacheada.

### Propuesta

¿Cómo se organiza DNS?

- A. Como una tabla completa replicada en cada servidor de nombres.
- B. Como una consulta que debe recorrer siempre todos los niveles.
- C. Como una relación plana entre direcciones y nombres de dominio.
- D. Como un espacio jerárquico con zonas, delegaciones y caché. **(correcta)**

Explicación: DNS distribuye un espacio jerárquico de nombres en zonas con autoridad delegada. Los resolvers pueden reutilizar información almacenada en caché conforme a su vigencia, por lo que no toda consulta recorre desde la raíz. La caché reduce consultas, pero no transforma al resolver en autoridad del espacio completo ni garantiza actualización instantánea.

- Error A: Cada servidor mantiene los datos y funciones que le corresponden; no necesita replicar íntegramente toda la base DNS.
- Error B: La información local o cacheada válida puede resolver una consulta sin repetir un recorrido completo por la jerarquía.
- Error C: La jerarquía, las zonas y las delegaciones son esenciales; una relación plana de nombres y direcciones no describe su organización.

- [IETF: RFC1034, Domain Names, Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034.html) · §3.6 Resource Records/TTL; §4.2 división en zonas y delegación; §5.3.1/5.3.3 resolvers y consulta de información local · versión: Noviembre de 1987, HTML comprobado el 04-11-2026. Arquitectura y caché; no se generalizan reglas antiguas de caché negativa, reemplazadas por especificaciones posteriores. · comprobado: 2026-11-04

Partida: `ee197ed31b68061953adcc0e0435a274ed8f25905d330eb33be5d7704e26fa01` · propuesta: `f5e21c608da9c1f782a0584ec4a4bc1c9d3bb6d5222afef4b01990777b2a674b`

## AI-GSI-B4-T13-007

Decisión: pending_review · acción: revise.

Motivo: Conservar proximidad y descarga del origen, clave C; caso de recursos públicos estáticos ante pico de lecturas.

### Antes

¿Qué beneficio ofrece una CDN?

- A. Garantizar latencia nula
- B. Sustituir toda base de datos
- C. Acercar contenido y reducir carga del origen **(correcta)**
- D. Eliminar toda autenticación del origen

Explicación: La distribución aproxima recursos sin resolver por sí sola toda la arquitectura.

### Propuesta

Un portal publica imágenes y hojas de estilo cacheables y sufre un pico de lecturas. ¿Qué beneficio puede aportar una CDN?

- A. Procesar las consultas de base de datos en cada caché de la red.
- B. Enviar cada lectura estática al origen para mantener todas las copias.
- C. Servir copias próximas y reducir peticiones al servidor de origen. **(correcta)**
- D. Repartir sesiones del origen sin almacenar contenido en los bordes.

Explicación: Una CDN puede mantener copias de recursos cacheables en ubicaciones próximas a usuarios, reduciendo tráfico y trabajo del origen cuando hay aciertos de caché. Hay que gestionar vigencia, invalidación y acceso al contenido. Una ausencia o caducidad puede requerir consultar al origen; la distribución no equivale a replicar toda lógica o datos privados.

- Error A: Una caché de distribución no ejecuta por ello la lógica de consultas y transacciones de la base de datos de la aplicación.
- Error B: Si cada lectura necesita volver al origen se pierde el ahorro de atender recursos desde una copia válida próxima.
- Error D: Balancear sesiones entre servidores es otra función; no describe el beneficio de almacenar y servir copias distribuidas.

- [Cloudflare: Cache documentation](https://developers.cloudflare.com/cache/) · Overview: copias de contenido en centros distribuidos, proximidad al usuario y reducción de carga del origen · versión: Actualización 16-04-2026, HTML comprobado el 04-11-2026. Ejemplo del proveedor, sin promesas de latencia nula, caché de todo contenido o recomendación de contratación. · comprobado: 2026-11-04

Partida: `06473d69b549b5c22a3dcb4772e6958415805a8662f6ff348bdb18f5c67b98f5` · propuesta: `37922f61b00949301040055344f130f42851672af3873518ec6e2f2bdc47f6d0`

## AI-GSI-B4-T13-009

Decisión: pending_review · acción: revise.

Motivo: Conservar transporte TCP y clave B; alternativas de transporte comparables y sin frases que delaten la clave.

### Antes

¿Sobre qué transporte multiplexa flujos HTTP/2 según el tema?

- A. ICMP
- B. TCP **(correcta)**
- C. ARP
- D. UDP sin QUIC

Explicación: HTTP/2 utiliza framing binario y multiplexación sobre TCP.

### Propuesta

¿Sobre qué transporte multiplexa flujos HTTP/2?

- A. UDP
- B. TCP **(correcta)**
- C. SCTP
- D. DCCP

Explicación: HTTP/2 multiplexa intercambios HTTP mediante tramas y flujos sobre una conexión TCP. La multiplexación de aplicación no elimina que TCP entregue un flujo de bytes ordenado: una pérdida puede retrasar datos de varios flujos HTTP. No debe confundirse con HTTP/3 sobre QUIC, cuyo sustrato es UDP.

- Error A: UDP es el sustrato de QUIC usado por HTTP/3; no es el transporte definido para HTTP/2 en RFC9113.
- Error C: SCTP es otro protocolo de transporte con soporte de flujos, pero HTTP/2 se especifica sobre TCP.
- Error D: DCCP no es el transporte definido para HTTP/2; su multiplexación HTTP se construye sobre la conexión TCP.

- [IETF: RFC9113, HTTP/2](https://www.rfc-editor.org/rfc/rfc9113.html) · §2 HTTP/2 Protocol Overview: conexión TCP y múltiples intercambios; §1 motivación · versión: Junio de 2022, HTML comprobado el 04-11-2026. Sustituye RFC7540/8740; multiplexación HTTP no elimina ordenación y bloqueo de entrega del transporte TCP. · comprobado: 2026-11-04

Partida: `84d226c7e8da05942fec3ebfb5bf341281bd275c78a0ba7e9ca5c2fd212ee737` · propuesta: `6641a4a5568e6cb99f94db0fd337ffb505b221a626027c5a1bc4d925a9138851`

## AI-GSI-B4-T13-010

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y QUIC, clave B; distinguir capas próximas de la pila.

### Antes

¿Sobre qué protocolo transporta HTTP/3 la semántica HTTP?

- A. SNMP
- B. QUIC **(correcta)**
- C. SMTP
- D. FTP

Explicación: HTTP/3 se apoya en QUIC, que utiliza UDP como sustrato.

### Propuesta

¿Sobre qué protocolo transporta HTTP/3 la semántica HTTP?

- A. TLS
- B. QUIC **(correcta)**
- C. TCP
- D. UDP

Explicación: HTTP/3 define la correspondencia de la semántica HTTP sobre QUIC, que proporciona conexiones y flujos. QUICv1 se encapsula en UDP e integra seguridad con TLS. Estas funciones pertenecen a capas diferentes: ni enviar HTTP directamente en UDP ni añadir TLS a TCP constituye por sí solo HTTP/3.

- Error A: TLS participa en la seguridad de QUIC, pero no es el protocolo de flujos sobre el que HTTP/3 define su correspondencia.
- Error C: TCP es el transporte empleado por HTTP/2; HTTP/3 usa los flujos de QUIC.
- Error D: UDP transporta los paquetes QUIC; omitir QUIC confunde el sustrato de datagramas con el protocolo que usa HTTP/3.

- [IETF: RFC9114, HTTP/3](https://www.rfc-editor.org/rfc/rfc9114.html) · Abstract; §1.2 Delegation to QUIC; §2 Protocol Overview: semántica HTTP sobre QUIC · versión: Junio de 2022, HTML comprobado el 04-11-2026. QUIC es la capa usada por HTTP/3; UDP es su sustrato y TLS aporta seguridad integrada. No se afirma desaparición de toda espera entre flujos. · comprobado: 2026-11-04
- [IETF: RFC9000, QUIC, A UDP-Based Multiplexed and Secure Transport](https://www.rfc-editor.org/rfc/rfc9000.html) · Abstract; §1.2 Terms and Definitions: paquetes QUIC encapsulados en datagramas UDP y paquetes IP, streams · versión: Mayo de 2021, HTML comprobado el 04-11-2026. QUICv1; la fiabilidad de flujos no deriva de UDP, sino del protocolo superior. Sin ejecutar conexiones o medir rendimiento. · comprobado: 2026-11-04

Partida: `71883eed43f4d1f7dff6b71b784930720b49bdf9f657a6116a275f901295c553` · propuesta: `0f007fc9ed9de327b7c3762f32aeabee806617d3ef919ed751068ae7fa47a353`

## AI-GSI-B4-T13-011

Decisión: pending_review · acción: revise.

Motivo: Conservar sustrato UDP y clave B; otros transportes de Internet como distractores, sin calificadores absolutos.

### Antes

¿Qué utiliza QUIC v1 como sustrato de transporte?

- A. ARP
- B. UDP **(correcta)**
- C. TCP obligatoriamente
- D. Ethernet sin IP

Explicación: QUIC añade streams y mecanismos de seguridad y control sobre UDP.

### Propuesta

¿Qué utiliza QUIC v1 como sustrato de transporte?

- A. TCP
- B. UDP **(correcta)**
- C. SCTP
- D. DCCP

Explicación: QUICv1 encapsula sus paquetes en datagramas UDP, que a su vez viajan sobre IP. QUIC añade conexiones, control de flujo, recuperación de pérdidas y flujos ordenados; UDP no aporta por sí solo esas garantías. Uno o varios paquetes QUIC pueden compartir un datagrama UDP según las reglas del protocolo.

- Error A: QUICv1 no necesita una conexión TCP subyacente; implementa sus propios mecanismos sobre datagramas UDP.
- Error C: Aunque SCTP ofrece otras funciones de transporte, no es el sustrato especificado para QUICv1 en RFC9000.
- Error D: DCCP es otro protocolo de transporte, pero la encapsulación definida para QUICv1 utiliza UDP.

- [IETF: RFC9000, QUIC, A UDP-Based Multiplexed and Secure Transport](https://www.rfc-editor.org/rfc/rfc9000.html) · Abstract; §1.2 Terms and Definitions: paquetes QUIC encapsulados en datagramas UDP y paquetes IP, streams · versión: Mayo de 2021, HTML comprobado el 04-11-2026. QUICv1; la fiabilidad de flujos no deriva de UDP, sino del protocolo superior. Sin ejecutar conexiones o medir rendimiento. · comprobado: 2026-11-04

Partida: `32290ccc167a2044bffca8e5a8d21dd7866099c413142b02babfe699ebcb689c` · propuesta: `40fbceaa3f5a6eb70e738e75678a45d860caed2d949440c8cda9b560c9cc09bf`

## AI-GSI-B4-T13-013

Decisión: pending_review · acción: revise.

Motivo: Conservar evaluación arquitectónica y clave B; ponderar valor, dependencia y operación sin convertir una guía británica en norma AGE.

### Antes

¿Cómo deben estudiarse tendencias de Internet para un servicio público?

- A. Como predicciones comerciales seguras
- B. Como decisiones arquitectónicas con resiliencia y dependencia de terceros **(correcta)**
- C. Ignorando soberanía y operación
- D. Como obligación de usar toda novedad

Explicación: Las tendencias se valoran por necesidades y riesgos del servicio.

### Propuesta

¿Cómo deben estudiarse tendencias de Internet para un servicio público?

- A. Priorizar adopción y novedades sobre operación probada.
- B. Contrastar requisitos, resiliencia y dependencias externas. **(correcta)**
- C. Tomar el ahorro inicial como medida de madurez técnica.
- D. Usar la cuota de mercado para inferir portabilidad futura.

Explicación: Las tendencias se evalúan por lo que aportan a los requisitos del servicio, su operación, resiliencia y dependencia de proveedores. Conviene conocer costes y opciones de salida, sin asumir que toda dependencia sea inaceptable. Popularidad o ahorro inicial no demuestran madurez, sostenibilidad o portabilidad; hacen falta evidencias y un análisis del ciclo de vida.

- Error A: La adopción amplia no demuestra que una novedad cubra necesidades operativas o riesgos concretos del servicio.
- Error C: Un coste inicial reducido no mide por sí mismo madurez ni incluye mantenimiento, recuperación o cambio de proveedor.
- Error D: El éxito comercial no acredita formatos portables, interfaces compatibles ni una salida practicable del proveedor.

- [GDS/CDDO: Managing technical lock-in in the cloud](https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud) · Understand your technical lock-in; Balancing risk and opportunity in the cloud; Manage your technical lock-in · versión: Actualización 03-09-2026, HTML comprobado el 04-11-2026. Valor, dependencia y costes de cambio se ponderan; orientación británica, sin trasladar Cloud First u obligaciones de contratación a AGE. · comprobado: 2026-11-04
- [NCSC: CAF, Principle B5 Resilient networks and systems](https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems) · B5.b Design for resilience: dependencias, recursos y limitaciones geográficas; caminos físicos y proveedores alternativos · versión: Guía HTML comprobada el 04-11-2026. Aplicación conceptual a dependencias de servicio; no obligación normativa AGE ni garantía de disponibilidad por contratar dos enlaces. · comprobado: 2026-11-04

Partida: `6b5d9bea72a1b6ee7d62f52f1d942d915ee6f6189e25b13d55a9d4c1d7cd4ab0` · propuesta: `086471b5d4a91f7c07fdd3318eb147b3235c8b162b5638cb7fe88ea74dbaf1a3`

## AI-GSI-B4-T13-014

Decisión: pending_review · acción: revise.

Motivo: Conservar capas de arquitectura IoT y clave D; acotar flujo de telemetría con edge explícito, sin arquitectura universal.

### Antes

¿Qué secuencia refleja una arquitectura IoT?

- A. Sensor conectado directamente a cualquier aplicación sin capas ni plataforma
- B. Dispositivo y almacenamiento como arquitectura completa obligatoria
- C. Solo conectividad, excluyendo procesamiento y consumo
- D. Dispositivo, conectividad, edge, plataforma y aplicación **(correcta)**

Explicación: IoT conecta sensores o actuadores con procesamiento y consumo de información.

### Propuesta

¿Qué secuencia funcional representa el envío de telemetría en una arquitectura IoT con pasarela edge y una aplicación central que consume los datos de la plataforma?

- A. Dispositivo, plataforma, conectividad, edge y aplicación.
- B. Dispositivo, conectividad, plataforma, aplicación y edge.
- C. Dispositivo, edge, aplicación, conectividad y plataforma.
- D. Dispositivo, conectividad, edge, plataforma y aplicación. **(correcta)**

Explicación: En el modelo descrito, la telemetría nace en el dispositivo, atraviesa conectividad hacia el edge y llega a servicios de plataforma que la ponen a disposición de la aplicación. Es una vista funcional de ese flujo, no una cadena obligatoria para todo IoT: puede haber conexión directa a servicios centrales y flujos inversos de órdenes.

- Error A: Sitúa la plataforma antes de la conectividad que lleva la telemetría desde el dispositivo en el modelo descrito.
- Error B: Desplaza el edge detrás de plataforma y aplicación; aquí se ha definido procesamiento intermedio antes de los servicios centrales.
- Error C: Coloca el consumo de aplicación antes de la conectividad y la plataforma del flujo de telemetría planteado.

- [Microsoft Learn: IoT device development](https://learn.microsoft.com/en-us/azure/iot/iot-overview-device-development) · Introducción: dispositivos, pasarelas, soluciones cloud-connected y edge-connected; conectores y telemetría · versión: HTML comprobado el 04-11-2026. Arquitecturas de referencia, no cadena universal ni obligación de usar cada componente o un proveedor determinado. · comprobado: 2026-11-04

Partida: `4b26d708bace3226eae1003b7904edcbcdb102cab392d1a68f955048571c8739` · propuesta: `7b54829de3dd5472ae8b146d4e4cd8ed1f16b8be425f2459d006b8e473703e94`

## AI-GSI-B4-T13-015

Decisión: pending_review · acción: revise.

Motivo: Conservar reducción de latencia/tráfico y posibilidad offline, clave A; caso donde control local y cola toleran cortes.

### Antes

¿Qué ventaja puede aportar procesamiento edge?

- A. Reducir latencia o tráfico y operar ante desconexión **(correcta)**
- B. Eliminar toda necesidad de seguridad
- C. Sustituir toda plataforma central siempre
- D. Crear conectividad física donde no existe

Explicación: El edge acerca funciones al dispositivo según requisitos.

### Propuesta

Un sensor debe reaccionar localmente y conservar lecturas durante cortes de Internet. ¿Qué ventaja puede aportar un diseño edge?

- A. Procesar cerca del sensor y almacenar datos para envío posterior. **(correcta)**
- B. Trasladar cada decisión al servicio central para su validación.
- C. Aumentar la frecuencia de envío directo hacia el servicio remoto.
- D. Mantener cada lectura pendiente de confirmación desde la nube.

Explicación: El procesamiento edge puede tomar decisiones locales, filtrar datos y mantener una cola para enviarlos al recuperar conectividad. Requiere diseño previo: recursos, estado local, almacenamiento, caducidad y reconciliación. No crea una conexión física ni asegura conservar toda lectura indefinidamente; las capacidades offline dependen de la implementación y de sus límites.

- Error B: Si cada decisión exige validación central, la desconexión mantiene esa dependencia y no permite la autonomía local buscada.
- Error C: Enviar más a menudo no garantiza llegar al servicio cuando el enlace está caído y puede aumentar consumo sin utilidad.
- Error D: Exigir confirmación remota para cada lectura impide continuar por sí mismo durante la interrupción de conectividad.

- [Microsoft Learn: IoT device development](https://learn.microsoft.com/en-us/azure/iot/iot-overview-device-development) · Introducción: dispositivos, pasarelas, soluciones cloud-connected y edge-connected; conectores y telemetría · versión: HTML comprobado el 04-11-2026. Arquitecturas de referencia, no cadena universal ni obligación de usar cada componente o un proveedor determinado. · comprobado: 2026-11-04
- [Microsoft Learn: Operate Azure IoT Edge devices offline](https://learn.microsoft.com/en-us/azure/iot-edge/offline-capabilities) · How it works; Restrictions and limits; Optional offline settings y Time to live · versión: Documentación aplicable a IoT Edge1.6, HTML comprobado el 04-11-2026. Ejemplo condicionado por sincronización inicial, almacenamiento y TTL; no operación offline automática de todo despliegue edge. · comprobado: 2026-11-04

Partida: `0c5a3829f1d529d03de359705e7c81650ab6f7d69b31db7176dfc50b48bac799` · propuesta: `f48acccba2e11913d9f99ad9d22c226c0c34cea8c3ab0b014ab00548b59ac5a0`

## AI-GSI-B4-T13-016

Decisión: pending_review · acción: revise.

Motivo: Conservar pub/sub con broker y clave C; distinguirlo de RPC directo, cola global y difusión sin negar funciones de MQTT5.

### Antes

¿Qué patrón utiliza habitualmente MQTT?

- A. Encaminamiento por estado de enlace
- B. Transferencia de discos físicos
- C. Publicación y suscripción mediante broker **(correcta)**
- D. Solo consultas SQL

Explicación: MQTT es ligero y frecuente en telemetría basada en pub/sub.

### Propuesta

¿Qué patrón utiliza habitualmente MQTT?

- A. Petición directa a cada receptor sin servidor intermediario.
- B. Una cola global que entrega cada mensaje a un solo receptor.
- C. Publicación y suscripción mediante un servidor broker. **(correcta)**
- D. Difusión IP a todos los dispositivos de la misma subred.

Explicación: MQTT usa publicación y suscripción: los clientes publican mensajes con un topic y el servidor broker los distribuye conforme a las suscripciones. Esto desacopla emisores y receptores. No obliga a difusión IP ni a una única cola global; las suscripciones compartidas o las funciones request/response no cambian esa base de intercambio.

- Error A: El servidor MQTT intermedia el intercambio; una petición directa a cada receptor sin él no describe el patrón base.
- Error B: La distribución depende de topics y suscripciones; no de una cola global que entregue todos los mensajes a un único consumidor.
- Error D: El broker envía según suscripciones de clientes; no equivale a difundir paquetes a todos los hosts de una subred.

- [OASIS: MQTT Version5.0](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html) · Abstract; §1.2 Terminology: Client, Server, Subscription; servidor intermediario de publicaciones y suscripciones · versión: OASIS Standard de 07-03-2019, HTML comprobado el 04-11-2026. Se usa texto HTML público, sin abrir DOCX/PDF; request/response y suscripciones compartidas no se niegan como funciones posibles. · comprobado: 2026-11-04

Partida: `772b965fce8753f49725b85dd868c1eed796fe8d73811c5bf1831f55628e78dc` · propuesta: `5ae2b0773c1aee28c5b8f4a157b46465df1eac1190a28f50bda93ee07b1c8cef`

## AI-GSI-B4-T13-017

Decisión: pending_review · acción: revise.

Motivo: Conservar CoAP restringido/recursos/UDP y clave D; delimitar especificación base y evitar exclusividad universal de transporte.

### Antes

¿Qué caracteriza a CoAP en el tema?

- A. Un compilador de firmware
- B. Un servidor de correo
- C. Un sistema de archivos distribuido
- D. Protocolo RESTful ligero sobre UDP para dispositivos restringidos **(correcta)**

Explicación: CoAP adapta interacción de recursos a dispositivos y redes limitadas.

### Propuesta

¿Qué caracteriza al modelo base de CoAP descrito en RFC7252?

- A. Mensajería por topics y suscripciones gestionadas por un broker.
- B. Entrega de peticiones web mediante flujos HTTP sobre QUIC.
- C. Invocaciones de objetos distribuidos mediante un registro remoto.
- D. Interacción con recursos para nodos limitados mediante UDP. **(correcta)**

Explicación: El modelo base de CoAP en RFC7252 adapta peticiones y respuestas sobre recursos a nodos y redes limitados, usando mensajes UDP. Incluye mecanismos propios, como mensajes confirmables, y no hereda fiabilidad de UDP. Hay especificaciones para otros transportes y extensiones; el alcance de esta pregunta es el modelo base citado.

- Error A: Describe el patrón base de MQTT con broker; no el modelo de peticiones y respuestas sobre recursos de CoAP.
- Error B: Los flujos HTTP sobre QUIC corresponden a HTTP/3; no a los mensajes CoAP definidos en RFC7252.
- Error C: La invocación de objetos mediante registro remoto no es el modelo de recursos, métodos y mensajes definido para CoAP.

- [IETF: RFC7252, The Constrained Application Protocol](https://www.rfc-editor.org/rfc/rfc7252.html) · Abstract; §2.1 Messaging Model sobre UDP; §4 Message Specifications: datagramas y otros transportes fuera de alcance · versión: Junio de 2014, HTML comprobado el 04-11-2026. Modelo base de recursos y peticiones/respuestas; no se afirma que toda variante CoAP use UDP ni se recomiendan suites históricas de seguridad. · comprobado: 2026-11-04

Partida: `c80f45965d2843cce44f4f9f46b49edff3e7c26f49e9bbcc6aa66bcc9e293f67` · propuesta: `1562c5a72e6db1df3bfc67ce307aa38913149ba63c1c7eb32af44f8ab7bb25f8`

## AI-GSI-B4-T13-018

Decisión: pending_review · acción: revise.

Motivo: Conservar selección por requisitos y clave A; caso de lecturas pequeñas con batería en emplazamientos dispersos.

### Antes

¿Qué debe guiar la elección de conectividad IoT?

- A. Alcance, energía, coste y requisitos **(correcta)**
- B. Una radio única obligatoria para cualquier entorno
- C. Excluir enlaces cableados por definición de IoT
- D. Solo ancho de banda máximo

Explicación: Wi-Fi, celular, LPWAN o cable responden a compromisos distintos.

### Propuesta

Se despliegan sensores a batería que envían lecturas pequeñas desde ubicaciones dispersas. ¿Qué debe guiar la elección de conectividad IoT?

- A. Cobertura, consumo, coste y requisitos de las comunicaciones. **(correcta)**
- B. La tasa máxima anunciada, aunque el consumo reduzca autonomía.
- C. La menor cuota de datos, aunque no haya cobertura en el lugar.
- D. La radio ya instalada, aunque no cumpla alcance o disponibilidad.

Explicación: La conectividad se elige contrastando requisitos de alcance, energía, volumen, latencia, fiabilidad y coste total. Un sensor de batería no tiene las mismas necesidades que una cámara con alimentación. Deben verificarse cobertura y condiciones reales; no hay una tecnología ganadora para todos los casos y el cable también puede formar parte de IoT.

- Error B: La mayor tasa nominal puede ser innecesaria para lecturas pequeñas y consumir una energía incompatible con la autonomía requerida.
- Error C: Una tarifa baja no permite prestar el servicio donde la tecnología carece de cobertura utilizable.
- Error D: Reutilizar infraestructura puede ahorrar costes, pero no compensa incumplir requisitos de alcance o disponibilidad.

- [SUSE: Understanding IoT Connectivity, Types, Challenges and Use Cases](https://www.suse.com/blog/iot-connectivity/) · Factors that affect IoT connectivity: Bandwidth, Power consumption, Range/coverage y Reliability; Considerations: Cost y Energy efficiency · versión: Artículo explicativo del proveedor, HTML comprobado el 04-11-2026. Solo criterios de decisión; se excluyen tabla comparativa simplificada y promesas de Ethernet sin interferencia, ancho ilimitado o seguridad automática. No norma técnica. · comprobado: 2026-11-04
- [Microsoft Learn: IoT device development](https://learn.microsoft.com/en-us/azure/iot/iot-overview-device-development) · Introducción: dispositivos, pasarelas, soluciones cloud-connected y edge-connected; conectores y telemetría · versión: HTML comprobado el 04-11-2026. Arquitecturas de referencia, no cadena universal ni obligación de usar cada componente o un proveedor determinado. · comprobado: 2026-11-04

Partida: `cb98ec4f0c51e367127a9452099b5f2f79f447f615b5476060f92b78900f3d11` · propuesta: `c245e658ac494a94b1c30672af2e9e8a1aec81a3b96a8fe0fa0e411133264d56`
