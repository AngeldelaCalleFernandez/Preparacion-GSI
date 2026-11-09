# GSI-EDITORIAL-082 — revisión propuesta

Preparado: 2026-11-04. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `84b8e24994700d7b305c2dc4ff8f4c2a3d4d7df8b53ce2cc9d0ab6b59db1f1cf`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P19-027

Decisión: pending_review · acción: revise.

Motivo: Conservar control/monitorización RTCP y clave A; distinguirlo de señalización, protección y reserva.

### Antes

¿Qué función cumple RTCP?

- A. Aportar información de control, participantes y calidad asociada a una sesión RTP. **(correcta)**
- B. Transportar exclusivamente señalización SIP.
- C. Cifrar automáticamente todo RTP.
- D. Asignar números telefónicos.

Explicación: RFC 3550 define RTP para medios y RTCP para control/monitorización relacionada.

### Propuesta

¿Qué función cumple RTCP?

- A. Informar sobre participantes y calidad de distribución de una sesión RTP. **(correcta)**
- B. Establecer las sesiones multimedia mediante peticiones y respuestas SIP.
- C. Cifrar las muestras RTP y gestionar por sí solo las claves entre extremos.
- D. Reservar capacidad en los enlaces antes de permitir reproducir el flujo.

Explicación: RTCP acompaña a RTP con informes sobre recepción, participantes y distribución de los datos. Esa información permite supervisión y adaptación por las aplicaciones. Informar de calidad no equivale a reservar recursos, garantizar entrega o cifrar los medios; el control de establecimiento SIP y la protección SRTP tienen funciones diferentes.

- Error B: Crear o terminar sesiones corresponde a señalización como SIP; RTCP informa sobre la comunicación de medios asociada a RTP.
- Error C: La protección criptográfica corresponde a mecanismos como SRTP/SRTCP con gestión de claves adecuada; RTCP básico no cifra automáticamente las muestras.
- Error D: Los informes RTCP no son un protocolo de reserva de capacidad ni garantizan los recursos del trayecto.

- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04
- [IETF: RFC3711, The Secure Real-time Transport Protocol](https://www.rfc-editor.org/rfc/rfc3711.html) · §1 Introduction y §2 Goals and Features: protección RTP/RTCP; §7 gestión de claves · versión: Marzo de 2004, apartados HTML comprobados el 04-11-2026. Alcance y dependencia de perfil/claves; no recomendación de algoritmos históricos ni cifrado automático de señalización o de todo IP. · comprobado: 2026-11-04
- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04

Partida: `2ce3456d06de3a872d66b69c8ea14fddb232c8e41f5e0cbcb3ba8b978f6be42c` · propuesta: `f8f334bebeb49c89197cb097f557bec8ee69f67b3f66839cb470be804425874d`

## MAN-GSI-P19-028

Decisión: pending_review · acción: revise.

Motivo: Conservar alcance limitado de RTP y clave C; cuatro afirmaciones sin patrón Sí/Sí/No/Sí.

### Antes

¿RTP garantiza por sí solo QoS?

- A. Sí; negocia y reserva ancho de banda extremo a extremo antes de enviar medios, rechazando la sesión si no hay recursos.
- B. Sí; sus marcas temporales obligan a todos los routers a priorizar paquetes y eliminar automáticamente jitter y pérdida.
- C. No. Transporta medios y aporta secuencias/timestamps, pero no reserva recursos ni garantiza QoS. **(correcta)**
- D. Sí; retransmite cada paquete perdido hasta confirmar su entrega, garantizando latencia y continuidad del flujo en tiempo real.

Explicación: El RFC de RTP declara expresamente que RTP no garantiza QoS.

### Propuesta

¿Qué alcance tiene RTP por sí mismo respecto a los recursos y la calidad de servicio?

- A. Reserva ancho de banda antes de emitir cada flujo de audio o vídeo.
- B. Usa marcas temporales para imponer prioridad en los routers del camino.
- C. Aporta secuencias y tiempos, pero no reserva recursos ni garantiza QoS. **(correcta)**
- D. Recupera cada pérdida con retransmisiones que mantienen latencia fija.

Explicación: RTP aporta información como secuencia y tiempo para tratar medios en tiempo real, pero el protocolo base no garantiza entrega, orden o calidad de servicio. La aplicación y la red necesitan mecanismos y recursos adecuados. Los timestamps ayudan al receptor a interpretar el flujo; no obligan a los routers a priorizarlo.

- Error A: La reserva o admisión de recursos necesita mecanismos adicionales; no es una operación automática del protocolo RTP.
- Error B: Los timestamps pertenecen al tratamiento temporal del medio y no son instrucciones de prioridad para todos los routers.
- Error D: RTP base no retransmite obligatoriamente cada paquete ni asegura un retardo fijo; recuperación y plazos dependen de mecanismos adicionales.

- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04
- [IETF: RFC4594, Guidelines for DiffServ Service Classes](https://www.rfc-editor.org/rfc/rfc4594.html) · §1.5.5 Admission Control; §4.1 Telephony Service Class: retardo, variación, pérdida y recursos dimensionados · versión: Informational, agosto de 2006, HTML comprobado el 04-11-2026. Ejemplo de ingeniería de voz, sin umbrales numéricos universales, EF automático en cualquier red o garantía por marcar paquetes. · comprobado: 2026-11-04

Partida: `88c1e5575eada3d168d90a2962a73fe793b5d768f9d6bdad5dd89123ba29e7ff` · propuesta: `d70d817eb2093fc18ad8e775be4c796809f2034d05f329414320fb6b39e8b2a5`

## MAN-GSI-P19-029

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y cuatro alternativas bien construidas, clave B; ampliar explicaciones por concepto.

### Antes

¿Qué es SDP en una llamada SIP?

- A. El protocolo de señalización que intercambia peticiones y respuestas para crear, modificar o finalizar una llamada.
- B. Una descripción de los medios y parámetros de sesión, como codecs y puertos/direcciones. **(correcta)**
- C. El protocolo de transporte en tiempo real que lleva muestras multimedia con numeración y marcas temporales.
- D. El perfil seguro que cifra y autentica paquetes RTP para proteger la confidencialidad e integridad de los medios.

Explicación: SDP describe la sesión; no transporta el medio.

### Propuesta

¿Qué es SDP en una llamada SIP?

- A. El protocolo de señalización que intercambia peticiones y respuestas para crear, modificar o finalizar una llamada.
- B. Una descripción de los medios y parámetros de sesión, como codecs y puertos/direcciones. **(correcta)**
- C. El protocolo de transporte en tiempo real que lleva muestras multimedia con numeración y marcas temporales.
- D. El perfil seguro que cifra y autentica paquetes RTP para proteger la confidencialidad e integridad de los medios.

Explicación: SDP expresa tipos de medios, formatos y destinos, entre otros parámetros. Puede viajar en mensajes SIP y utilizarse dentro de un procedimiento de oferta y respuesta. Es una descripción de sesión, no el transporte de muestras ni un perfil de cifrado; señalización, negociación y flujo de medios deben distinguirse.

- Error A: Las peticiones y respuestas para controlar la sesión son propias de SIP; sus cuerpos pueden contener SDP sin que ambos se identifiquen.
- Error C: La numeración y las marcas temporales de paquetes de medios corresponden a RTP, no al texto descriptivo SDP.
- Error D: Proteger RTP corresponde a SRTP; describir codecs y puertos en SDP no cifra ni autentica por sí mismo los medios.

- [IETF: RFC8866, Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866.html) · §1 descripción sin protocolo de transporte; §3.1 SIP y offer/answer; §2 Media Description · versión: Enero de 2021, HTML comprobado el 04-11-2026. Sustituye RFC4566. Describir parámetros no es transportar audio ni negociar de forma autónoma sin procedimientos de oferta/respuesta. · comprobado: 2026-11-04
- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04
- [IETF: RFC3711, The Secure Real-time Transport Protocol](https://www.rfc-editor.org/rfc/rfc3711.html) · §1 Introduction y §2 Goals and Features: protección RTP/RTCP; §7 gestión de claves · versión: Marzo de 2004, apartados HTML comprobados el 04-11-2026. Alcance y dependencia de perfil/claves; no recomendación de algoritmos históricos ni cifrado automático de señalización o de todo IP. · comprobado: 2026-11-04

Partida: `4be193d04a755e2ee7b7dd99d5dd6830c7bb55e6e26bb3b9cdaa8fe33af45a2c` · propuesta: `42f63e712695fa690a67a889dfae85f48dfcb130b16a54ca632f2f404d2f2782`

## MAN-GSI-P19-030

Decisión: pending_review · acción: revise.

Motivo: Conservar SBC de frontera y clave C; distinguirlo de registrador, pasarela y filtrado genérico.

### Antes

¿Qué es un SBC?

- A. Un servidor que conserva exclusivamente asociaciones entre usuarios SIP y direcciones de contacto para localizar terminales.
- B. Una pasarela dedicada solo a convertir canales de telefonía de circuitos en flujos RTP, sin aplicar políticas de frontera.
- C. Un elemento de frontera que intermedia señalización/medios, aplica políticas, seguridad, normalización y ayuda con NAT/interconexión. **(correcta)**
- D. Un cortafuegos genérico de capas 3 y 4 que filtra IP y puertos sin comprender ni normalizar señalización SIP o medios.

Explicación: Session Border Controller protege y controla los límites de dominios de voz/UC.

### Propuesta

¿Qué es un SBC?

- A. Un registrador que mantiene asociaciones de identidad y contactos SIP.
- B. Una pasarela cuyo papel es convertir circuitos telefónicos a paquetes.
- C. Un control de frontera de sesiones, políticas e interconexión SIP. **(correcta)**
- D. Un filtro IP de puertos que no interpreta los protocolos de sesión.

Explicación: Un SBC se sitúa en fronteras de comunicación y puede aplicar políticas, adaptar señalización y tratar medios para facilitar seguridad e interconexión. Su repertorio depende del producto y despliegue: no es una lista universal de funciones obligatorias. Deben evaluarse también sus efectos sobre transparencia, capacidad e interoperabilidad.

- Error A: El registrador mantiene asociaciones de localización; esa función aislada no define control de frontera de sesiones.
- Error B: Interconectar circuitos y paquetes es el papel de una pasarela de medios; no describe por sí mismo las funciones de un SBC.
- Error D: Filtrar únicamente IP y puertos no equivale a comprender, adaptar y controlar sesiones y sus medios en una frontera.

- [IETF: RFC 5853, Requirements from SIP Session Border Controller Deployments](https://www.rfc-editor.org/rfc/rfc5853.html) · §2 Background; §3.1 topology hiding; §3.2 media management; §3.3 capability mismatches · versión: Informational, abril de 2010, HTML comprobado el 04-11-2026. Funciones observadas y problemas arquitectónicos, no paquete obligatorio de prestaciones o receta de seguridad. Puede intermediar medios según diseño; no todos los SBC hacen lo mismo. · comprobado: 2026-11-04
- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04

Partida: `04c1c655b8f57b757bd3daf830176c6f8934ca4e6a89b256b75e0e1a686f8e2e` · propuesta: `0ae9e240c899319e128d75cd2c05affd02625e510e3d7cbd6149992d68540ee4`

## MAN-GSI-P19-031

Decisión: pending_review · acción: revise.

Motivo: Conservar diferencia PBX/SBC y clave D; evitar confundir integración de producto con equivalencia de función.

### Antes

¿Qué diferencia conceptual hay entre PBX y SBC?

- A. La PBX protege exclusivamente fronteras SIP y la SBC administra extensiones, planes de numeración y funciones de centralita.
- B. La SBC es solo un codec de audio utilizado por la PBX para comprimir llamadas antes de enviarlas a la interconexión.
- C. Son conceptos idénticos siempre que se implementen como software, porque la virtualización elimina sus diferencias funcionales.
- D. La PBX presta lógica de telefonía; el SBC controla/protege la frontera de sesiones e interconexión. **(correcta)**

Explicación: Pueden coexistir o integrarse en productos, pero sus funciones conceptuales son distintas.

### Propuesta

¿Qué diferencia conceptual hay entre PBX y SBC?

- A. La PBX protege la frontera y el SBC administra extensiones y servicios.
- B. La PBX lleva señalización y el SBC es el codec usado por sus terminales.
- C. La PBX y el SBC son equivalentes cuando comparten una máquina virtual.
- D. La PBX presta telefonía; el SBC controla fronteras e interconexión. **(correcta)**

Explicación: La PBX aporta lógica de telefonía, como extensiones y tratamiento de llamadas; el SBC controla sesiones en límites entre redes o dominios. Pueden coexistir e incluso integrarse en un producto. Compartir hardware o virtualización no elimina esa distinción funcional ni demuestra que una función sustituya las responsabilidades de la otra.

- Error A: Invierte los papeles característicos de centralita y control de frontera; las extensiones no definen el SBC.
- Error B: Un SBC no es un algoritmo de codificación; puede actuar sobre protocolos y medios en interconexión.
- Error C: La colocación física o virtual es un detalle de despliegue y no vuelve idénticas las responsabilidades lógicas.

- [Twilio: What is a Private Branch Exchange?](https://www.twilio.com/docs/glossary/what-is-pbx-private-branch-exchange) · PBX Basics; Many Functions; IP-PBX: llamadas internas, entrantes/salientes y conmutación · versión: Glosario del proveedor, HTML comprobado el 04-11-2026. Función de telefonía, sin recomendar contratación ni universalizar que el acceso de datos y voz use una única línea física. · comprobado: 2026-11-04
- [IETF: RFC 5853, Requirements from SIP Session Border Controller Deployments](https://www.rfc-editor.org/rfc/rfc5853.html) · §2 Background; §3.1 topology hiding; §3.2 media management; §3.3 capability mismatches · versión: Informational, abril de 2010, HTML comprobado el 04-11-2026. Funciones observadas y problemas arquitectónicos, no paquete obligatorio de prestaciones o receta de seguridad. Puede intermediar medios según diseño; no todos los SBC hacen lo mismo. · comprobado: 2026-11-04

Partida: `4bdb93f765df2e5a88897586aae2c600e36af6ffaf978a465df887cf30412878` · propuesta: `a0405ee2c3b7d0c9221db6ce90331673e1fed55c808705b25c3fc072e63e285e`

## MAN-GSI-P19-032

Decisión: pending_review · acción: revise.

Motivo: Conservar correcta C precisa y matiz según perfil; diferenciar señalización, contenido SIP, medios y capa IP.

### Antes

¿Qué protege SRTP principalmente?

- A. La señalización SIP mediante TLS entre saltos, sin proporcionar por sí mismo protección a los paquetes de audio o vídeo RTP.
- B. El contenido de determinados mensajes SIP mediante S/MIME, no el flujo continuo de medios transportado por RTP.
- C. Los medios RTP, aportando confidencialidad/integridad según perfil. **(correcta)**
- D. Todo el tráfico IP entre extremos o gateways mediante IPsec, sin ser el perfil específico diseñado para proteger RTP.

Explicación: SRTP protege audio/vídeo RTP; TLS puede proteger señalización SIP en despliegues adecuados.

### Propuesta

¿Qué protege SRTP principalmente?

- A. La señalización SIP en los saltos protegidos mediante canales TLS.
- B. Los cuerpos de mensajes SIP protegidos mediante contenido S/MIME.
- C. Los medios RTP, aportando confidencialidad/integridad según perfil. **(correcta)**
- D. El conjunto de paquetes IP entre extremos que establece una VPN.

Explicación: SRTP define protección para tráfico RTP y, mediante SRTCP, el control asociado: puede aportar confidencialidad, autenticación de mensajes y protección frente a repetición. Hay que verificar perfil, claves y extremos de protección. No cifra por su nombre todos los mensajes SIP, todo IP o todos los tramos de una llamada.

- Error A: TLS puede proteger canales de señalización SIP, mientras SRTP se aplica al tráfico de medios y su control asociado.
- Error B: La protección del contenido SIP mediante S/MIME tiene un ámbito distinto del perfil que protege los paquetes RTP.
- Error D: La protección general de paquetes IP en una VPN, por ejemplo con IPsec, no es el alcance específico de SRTP.

- [IETF: RFC3711, The Secure Real-time Transport Protocol](https://www.rfc-editor.org/rfc/rfc3711.html) · §1 Introduction y §2 Goals and Features: protección RTP/RTCP; §7 gestión de claves · versión: Marzo de 2004, apartados HTML comprobados el 04-11-2026. Alcance y dependencia de perfil/claves; no recomendación de algoritmos históricos ni cifrado automático de señalización o de todo IP. · comprobado: 2026-11-04
- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE; §23 S/MIME: protección de cuerpos MIME de SIP, distinta de medios RTP · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [Microsoft Learn: Plan Direct Routing](https://learn.microsoft.com/en-us/microsoftteams/direct-routing-plan) · SIP signaling ports/failover; Media traffic/ports: SIP/TLS y UDP/SRTP separados, SBC y puntos alternativos · versión: HTML comprobado el 04-11-2026. Ejemplo de despliegue, sin ejecutar configuración, copiar rangos/puertos como universales o prometer conservación de toda llamada durante fallo. · comprobado: 2026-11-04

Partida: `79ce63eecd3720470a2061f287c7743b8caa197b50a14ba6b5c808aea4203d72` · propuesta: `a62192d401762fea2c2dc90bc084a31340b93347bc4113eb6a0565663bde370a`

## MAN-GSI-P19-034

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta A, con distractores de circuitos, codificación y control próximos al concepto.

### Antes

¿Qué es VoIP?

- A. Transmisión de voz utilizando redes/protocolos IP. **(correcta)**
- B. La gestión completa de cualquier endpoint corporativo.
- C. Un único fabricante de PBX.
- D. Una tecnología de radio 5G exclusiva.

Explicación: VoIP describe el transporte/servicio de voz sobre IP de forma amplia.

### Propuesta

¿Qué es VoIP?

- A. Transmisión de voz utilizando redes/protocolos IP. **(correcta)**
- B. Control de llamadas sobre una red de circuitos TDM.
- C. Codificación de muestras de audio a un formato digital.
- D. Negociación de sesiones sin considerar el medio usado.

Explicación: VoIP es la transmisión de voz mediante redes y protocolos IP. El concepto no exige una marca, una radio concreta o una arquitectura IMS. Digitalizar o comprimir audio es parte del tratamiento del medio, pero no determina que se transporte por IP; señalizar una sesión y transportar su voz son funciones complementarias.

- Error B: La telefonía sobre circuitos dedicados puede transportar voz digital, pero eso no la convierte en voz sobre IP.
- Error C: Codificar audio produce una representación del sonido que puede viajar por distintos medios y arquitecturas, no necesariamente IP.
- Error D: Negociar o controlar sesiones no basta para identificar la transmisión de voz mediante una red IP.

- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [Twilio: What is a Private Branch Exchange?](https://www.twilio.com/docs/glossary/what-is-pbx-private-branch-exchange) · PBX Basics; Many Functions; IP-PBX: llamadas internas, entrantes/salientes y conmutación · versión: Glosario del proveedor, HTML comprobado el 04-11-2026. Función de telefonía, sin recomendar contratación ni universalizar que el acceso de datos y voz use una única línea física. · comprobado: 2026-11-04

Partida: `7130bfffe576ee38b1d90ae2a5a60b91ab96929738a8fd66f3a90e43978a84d0` · propuesta: `6e0843524793be2e469dbb7dba1197eee60a7a026a4137de29e401572501a185`

## MAN-GSI-P19-036

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y alternativas completas, clave D; explicar el alcance de las soluciones parciales.

### Antes

¿Qué integra una plataforma de comunicaciones unificadas (UC)?

- A. Una plataforma de telefonía empresarial centrada en extensiones, troncales, colas y control de llamadas.
- B. Un servicio corporativo de correo, agenda y calendario compartido orientado a comunicación asíncrona.
- C. Un sistema de salas de videoconferencia dedicado a gestionar cámaras, pantallas y reuniones programadas.
- D. Voz, vídeo/reuniones, mensajería, presencia y colaboración alrededor de identidad/directorio. **(correcta)**

Explicación: UC busca experiencia y servicios de comunicación integrados.

### Propuesta

¿Qué integra una plataforma de comunicaciones unificadas (UC)?

- A. Una plataforma de telefonía empresarial centrada en extensiones, troncales, colas y control de llamadas.
- B. Un servicio corporativo de correo, agenda y calendario compartido orientado a comunicación asíncrona.
- C. Un sistema de salas de videoconferencia dedicado a gestionar cámaras, pantallas y reuniones programadas.
- D. Voz, vídeo/reuniones, mensajería, presencia y colaboración alrededor de identidad/directorio. **(correcta)**

Explicación: Las comunicaciones unificadas integran canales como voz, vídeo, mensajería y presencia alrededor de identidad y servicios coherentes. No se reducen a una centralita, correo o equipamiento de sala por separado. La integración funcional necesita interoperabilidad y políticas; una denominación comercial no demuestra por sí sola continuidad entre todos los clientes.

- Error A: Extensiones y control de llamadas cubren telefonía, pero no describen por sí solos integración de presencia, mensajería y colaboración.
- Error B: Correo y agenda aportan comunicación asíncrona, sin cubrir necesariamente voz, vídeo y presencia integrados.
- Error C: Administrar cámaras y reuniones de sala es una parte posible de colaboración, pero no la integración completa descrita para UC.

- [Cisco: Unified Communications Applications](https://www.cisco.com/c/en/us/products/unified-communications/unified-communications-applications/index.html) · Stay connected; Access your team from any device: mensajería, conferencia, presencia y voz integrada · versión: Página de producto HTML comprobada el 04-11-2026. Ejemplo primario de integración funcional y experiencia multidispositivo; sin garantía de seguridad, disponibilidad o continuidad automática. · comprobado: 2026-11-04

Partida: `0d2bcba1d1853ebaf934baac1cce0770a4d49285f2b49495aef9e44203ed965f` · propuesta: `36b67ea94b066d2e55aa6aef07521bc065ffd4ff89e403a89aad29f49f68b250`

## MAN-GSI-P19-037

Decisión: pending_review · acción: revise.

Motivo: Conservar métricas de voz y clave B; caso con caudal esperado y llamadas establecidas degradadas.

### Antes

¿Qué variables de red perjudican especialmente voz en tiempo real?

- A. Capacidad de disco, inodos y RAID.
- B. Latencia, jitter y pérdida de paquetes. **(correcta)**
- C. Tamaño del código fuente.
- D. Número de usuarios de Active Directory sin tráfico.

Explicación: La voz interactiva es sensible a retardo, variación de retardo y pérdidas.

### Propuesta

Las descargas de una sede alcanzan el caudal esperado, pero las llamadas establecidas se entrecortan. ¿Qué métricas del flujo de voz conviene priorizar?

- A. Caudal medio y volumen total transferido.
- B. Latencia, jitter y pérdida de paquetes. **(correcta)**
- C. TTL de DNS y duración del registro SIP.
- D. Saltos IP y cantidad de prefijos de rutas.

Explicación: La voz interactiva depende del retardo, de su variación y de las pérdidas de medios. Alcanzar un caudal medio suficiente no demuestra buen comportamiento en esas dimensiones. Deben medirse sobre el recorrido y periodo afectados, junto con carga y colas, antes de atribuir una causa concreta o modificar la configuración.

- Error A: El promedio de caudal y el volumen no muestran necesariamente retardos variables o pérdidas que degradan el audio.
- Error C: La resolución de nombres y el registro afectan localización o acceso, pero no describen directamente la entrega de medios de la llamada establecida.
- Error D: Los saltos y el tamaño de tablas ayudan a estudiar rutas, pero no miden por sí mismos variación temporal o pérdidas de audio.

- [IETF: RFC4594, Guidelines for DiffServ Service Classes](https://www.rfc-editor.org/rfc/rfc4594.html) · §1.5.5 Admission Control; §4.1 Telephony Service Class: retardo, variación, pérdida y recursos dimensionados · versión: Informational, agosto de 2006, HTML comprobado el 04-11-2026. Ejemplo de ingeniería de voz, sin umbrales numéricos universales, EF automático en cualquier red o garantía por marcar paquetes. · comprobado: 2026-11-04
- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04

Partida: `2bd6ffbd84428b29e89953c8b518a5993ba6967b06a125e821bcdd5f4961530c` · propuesta: `0504d7788b0fdf3305daabc44ec84cf6132f310e9dd22d84a171b2594920fe82`

## MAN-GSI-P19-038

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y cuatro alternativas plausibles, clave C; precisar compromiso temporal y descartes.

### Antes

¿Qué hace un jitter buffer?

- A. Estimar y sustraer del audio la señal que retorna por altavoces para reducir eco durante una conversación.
- B. Generar audio o vídeo sustitutivo cuando faltan paquetes, utilizando información anterior o técnicas del codec.
- C. Absorbe variación de llegada almacenando temporalmente paquetes, a costa de añadir algo de retardo. **(correcta)**
- D. Añadir datos redundantes que permitan recuperar determinadas pérdidas sin retransmitir los paquetes originales.

Explicación: Hay un compromiso entre suavizar jitter y añadir latencia.

### Propuesta

¿Qué hace un jitter buffer?

- A. Estimar y sustraer del audio la señal que retorna por altavoces para reducir eco durante una conversación.
- B. Generar audio o vídeo sustitutivo cuando faltan paquetes, utilizando información anterior o técnicas del codec.
- C. Absorbe variación de llegada almacenando temporalmente paquetes, a costa de añadir algo de retardo. **(correcta)**
- D. Añadir datos redundantes que permitan recuperar determinadas pérdidas sin retransmitir los paquetes originales.

Explicación: Un jitter buffer retiene temporalmente datos recibidos para reproducirlos con una temporización más regular, absorbiendo parte de la variación de llegada. Esto añade retardo y tiene límites: pueden descartarse paquetes tardíos o demasiado adelantados. No genera por sí mismo datos redundantes ni repara toda pérdida o congestión de la red.

- Error A: Estimar y sustraer la señal que retorna describe cancelación de eco, no retención de paquetes para regular su reproducción.
- Error B: Generar muestras sustitutivas describe ocultación de pérdidas; no es la función de almacenar para absorber variación de llegada.
- Error D: Añadir redundancia para recuperar determinadas pérdidas corresponde a técnicas de corrección, distintas del almacenamiento temporal del receptor.

- [IETF: RFC7005, RTCP XR Report Block for De-Jitter Buffer Metric Reporting](https://www.rfc-editor.org/rfc/rfc7005.html) · §3 De-Jitter Buffer Operation; §3.2 fixed y §3.3 adaptive: retención, reproducción y descartes · versión: Septiembre de 2013, HTML comprobado el 04-11-2026. Compromiso de variación/retardo; no corrige pérdidas físicas ni autoriza aumentar buffer sin límite. · comprobado: 2026-11-04

Partida: `1b2508a87c21cad38ee78bde166ce0d72a40e484d222593c26316ba2f0bbff56` · propuesta: `8fe6e444bcb2c8511903235d69410a29cdad1cb891fc3a6bbf031c84df7ec570`

## MAN-GSI-P19-039

Decisión: pending_review · acción: revise.

Motivo: Conservar límites de QoS y clave D; distractores de DSCP, prioridad y buffering sin promesas físicas.

### Antes

¿Qué afirmación es correcta sobre QoS?

- A. Duplicar automáticamente la capacidad física de cada enlace en cuanto se detecta congestión, sin ampliar ni reconfigurar la infraestructura.
- B. Hacer innecesario dimensionar enlaces y colas porque la priorización evita por completo la saturación, con independencia de la carga ofrecida.
- C. Garantizar la calidad extremo a extremo aunque redes intermedias de Internet ignoren las marcas y no apliquen la misma política de servicio.
- D. Clasifica/marca y prioriza tráfico en congestión, pero no crea ancho de banda ni arregla una ruta insuficiente. **(correcta)**

Explicación: QoS necesita diseño extremo a extremo y capacidad suficiente.

### Propuesta

¿Qué afirmación es correcta sobre QoS?

- A. El marcado DSCP aporta la misma garantía en todo dominio atravesado.
- B. Priorizar un flujo hace innecesario comprobar la capacidad disponible.
- C. El buffer de voz sustituye el dimensionamiento del enlace congestionado.
- D. Clasificar y priorizar reparte recursos, pero no crea capacidad física. **(correcta)**

Explicación: La QoS diferencia tratamiento y administra recursos, incluidas colas y acondicionamiento, conforme al diseño. Depende de capacidad, carga, políticas y acuerdos entre dominios. Un marcado no garantiza que toda red lo respete; si la demanda supera de forma sostenida los recursos, hay que dimensionar o controlar admisión y tráfico.

- Error A: Cada dominio aplica sus políticas y compromisos; el valor marcado no obliga a todas las redes a proporcionar la misma calidad.
- Error B: La prioridad distribuye recursos entre flujos y puede desplazar a otros, pero no elimina la necesidad de capacidad y control de carga.
- Error C: Almacenar más en el receptor no aumenta el caudal del enlace ni resuelve por sí mismo saturación sostenida.

- [IETF: RFC2475, Architecture for Differentiated Services](https://www.rfc-editor.org/rfc/rfc2475.html) · §1.1 Overview; §2.5 Network Resource Allocation: clasificación, acondicionamiento y reparto de recursos · versión: Informational, diciembre de 1998, HTML comprobado el 04-11-2026. Ejemplo de QoS; no se equipara todo control IMS a DiffServ ni se crea capacidad física mediante marcado. · comprobado: 2026-11-04
- [IETF: RFC4594, Guidelines for DiffServ Service Classes](https://www.rfc-editor.org/rfc/rfc4594.html) · §1.5.5 Admission Control; §4.1 Telephony Service Class: retardo, variación, pérdida y recursos dimensionados · versión: Informational, agosto de 2006, HTML comprobado el 04-11-2026. Ejemplo de ingeniería de voz, sin umbrales numéricos universales, EF automático en cualquier red o garantía por marcar paquetes. · comprobado: 2026-11-04
- [IETF: RFC7005, RTCP XR Report Block for De-Jitter Buffer Metric Reporting](https://www.rfc-editor.org/rfc/rfc7005.html) · §3 De-Jitter Buffer Operation; §3.2 fixed y §3.3 adaptive: retención, reproducción y descartes · versión: Septiembre de 2013, HTML comprobado el 04-11-2026. Compromiso de variación/retardo; no corrige pérdidas físicas ni autoriza aumentar buffer sin límite. · comprobado: 2026-11-04

Partida: `cf107de20800b4317ca84e665933f0e9ccb30bcc59ce8ebfd80c07904516a754` · propuesta: `3c7f57832ee52331ae4ef1f39845e209191f00b68bcf82be9130c3105f2760e0`

## MAN-GSI-P19-040

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso y texto correcto D; propuestas plausibles con confusiones concretas de alcance.

### Antes

Un organismo migra a SIP trunk y UC. ¿Qué conjunto es más completo?

- A. Contratar un único SIP trunk sin redundancia, SBC ni registros, confiando en que el proveedor absorba cualquier fallo o abuso.
- B. Priorizar paquetes en la LAN y omitir capacidad WAN, seguridad de frontera, monitorización y continuidad del servicio de telefonía.
- C. Activar TLS en señalización y considerar cubiertos medios, fraude, disponibilidad, QoS y operación sin controles adicionales.
- D. Redundancia de trunk/PBX o servicio, SBC, QoS, seguridad de señalización/medios, monitorización y plan de continuidad. **(correcta)**

Explicación: La solución debe cubrir arquitectura, frontera, calidad, seguridad y operación.

### Propuesta

Un organismo migra a SIP trunk y UC. ¿Qué conjunto es más completo?

- A. Redundancia de centralita y trunk, TLS como protección de todos los medios y registro de llamadas.
- B. SBC y QoS en la LAN, suponiendo que sus marcas garantizan también el tratamiento de la WAN.
- C. TLS y SRTP en los terminales, considerando resuelta la continuidad cuando falle el proveedor.
- D. Redundancia de trunk/PBX o servicio, SBC, QoS, seguridad de señalización/medios, monitorización y plan de continuidad. **(correcta)**

Explicación: Una migración debe cubrir arquitectura, frontera, calidad, protección de señalización y medios y operación ante fallos. Cada medida tiene un ámbito: TLS no cifra por sí solo RTP y el marcado local no obliga a redes externas. La redundancia necesita independencia y pruebas de recuperación; el conjunto no garantiza continuidad absoluta por su mera enumeración.

- Error A: Redundancia y registro no convierten TLS de señalización en protección de los medios; hay que revisar ambos planos y sus extremos.
- Error B: Un SBC y marcas locales no aseguran recursos o políticas equivalentes en la WAN; el recorrido debe evaluarse y acordarse.
- Error C: Cifrar señalización y medios no proporciona por sí mismo rutas alternativas, capacidad o procedimientos de recuperación del proveedor.

- [IETF: RFC 5853, Requirements from SIP Session Border Controller Deployments](https://www.rfc-editor.org/rfc/rfc5853.html) · §2 Background; §3.1 topology hiding; §3.2 media management; §3.3 capability mismatches · versión: Informational, abril de 2010, HTML comprobado el 04-11-2026. Funciones observadas y problemas arquitectónicos, no paquete obligatorio de prestaciones o receta de seguridad. Puede intermediar medios según diseño; no todos los SBC hacen lo mismo. · comprobado: 2026-11-04
- [Microsoft Learn: Plan Direct Routing](https://learn.microsoft.com/en-us/microsoftteams/direct-routing-plan) · SIP signaling ports/failover; Media traffic/ports: SIP/TLS y UDP/SRTP separados, SBC y puntos alternativos · versión: HTML comprobado el 04-11-2026. Ejemplo de despliegue, sin ejecutar configuración, copiar rangos/puertos como universales o prometer conservación de toda llamada durante fallo. · comprobado: 2026-11-04
- [IETF: RFC2475, Architecture for Differentiated Services](https://www.rfc-editor.org/rfc/rfc2475.html) · §1.1 Overview; §2.5 Network Resource Allocation: clasificación, acondicionamiento y reparto de recursos · versión: Informational, diciembre de 1998, HTML comprobado el 04-11-2026. Ejemplo de QoS; no se equipara todo control IMS a DiffServ ni se crea capacidad física mediante marcado. · comprobado: 2026-11-04
- [IETF: RFC3711, The Secure Real-time Transport Protocol](https://www.rfc-editor.org/rfc/rfc3711.html) · §1 Introduction y §2 Goals and Features: protección RTP/RTCP; §7 gestión de claves · versión: Marzo de 2004, apartados HTML comprobados el 04-11-2026. Alcance y dependencia de perfil/claves; no recomendación de algoritmos históricos ni cifrado automático de señalización o de todo IP. · comprobado: 2026-11-04
- [NCSC: CAF PrincipleB5 Resilient networks and systems](https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems) · B5.b Design for resilience: dependencias, caminos y proveedores alternativos · versión: HTML comprobado el 04-11-2026. Diversidad efectiva y recuperación; guía británica sin carácter normativo AGE o garantía por dos contratos. · comprobado: 2026-11-04

Partida: `081eb88c92c5ff869802661f660cff1cb7f49324ef5d7e59d2daf8dfef85e8bc` · propuesta: `35084297acd501a36d37b966cb292d9db084effdd42eadb19a720d041138fa16`

## MAN-GSI-P19-141

Decisión: pending_review · acción: revise.

Motivo: Conservar escenario y correcta D; distinguir duplicación nominal, calidad observada y continuidad.

### Antes

Una Administración quiere sustituir PBX TDM por UC IP con sedes y teletrabajo. ¿Qué diseño es más completo?

- A. Contratar un único SIP trunk y confiar en el proveedor, sin SBC, redundancia, monitorización ni procedimiento de caída.
- B. Sustituir los teléfonos y mantener la red sin medir capacidad, pérdida, jitter o priorización del tráfico multimedia.
- C. Activar TLS en señalización y considerar cubiertos medios, fraude, continuidad, sedes remotas y operación diaria.
- D. PBX/UC redundante o servicio resiliente, SIP trunks diversos, SBC, QoS, TLS/SRTP cuando aplique, monitorización y continuidad. **(correcta)**

Explicación: La migración debe cubrir servicio, frontera, red, seguridad y operación.

### Propuesta

Una Administración quiere sustituir PBX TDM por UC IP con sedes y teletrabajo. ¿Qué diseño es más completo?

- A. PBX redundante y dos troncales por el mismo acceso, tratándolas como independencia física comprobada.
- B. Nuevos teléfonos y clientes UC, dimensionando la WAN por caudal medio sin medir pérdidas o jitter.
- C. TLS en señalización y copia de configuración, dando por cubierto el acceso remoto y la continuidad.
- D. PBX/UC redundante o servicio resiliente, SIP trunks diversos, SBC, QoS, TLS/SRTP cuando aplique, monitorización y continuidad. **(correcta)**

Explicación: La sustitución de telefonía TDM por UC IP requiere estudiar sedes, usuarios remotos, interconexión, capacidad y seguridad, además de recuperación. Los trunks diversos deben comprobarse frente a fallos comunes de acceso, proveedor o servicio. TLS/SRTP se aplican según arquitectura y claves; la operación requiere monitorización y procedimientos probados, no solo instalar clientes nuevos.

- Error A: Dos troncales sobre un acceso compartido pueden fallar juntas; la duplicación comercial no demuestra diversidad física o de dependencias.
- Error B: El caudal medio no caracteriza por sí solo pérdida, retardo variable o picos relevantes para la voz y las sedes remotas.
- Error C: TLS y una copia ayudan en ámbitos concretos, pero no cubren por sí solos seguridad del acceso remoto o recuperación completa del servicio.

- [Twilio: What is a Private Branch Exchange?](https://www.twilio.com/docs/glossary/what-is-pbx-private-branch-exchange) · PBX Basics; Many Functions; IP-PBX: llamadas internas, entrantes/salientes y conmutación · versión: Glosario del proveedor, HTML comprobado el 04-11-2026. Función de telefonía, sin recomendar contratación ni universalizar que el acceso de datos y voz use una única línea física. · comprobado: 2026-11-04
- [Cisco: Unified Communications Applications](https://www.cisco.com/c/en/us/products/unified-communications/unified-communications-applications/index.html) · Stay connected; Access your team from any device: mensajería, conferencia, presencia y voz integrada · versión: Página de producto HTML comprobada el 04-11-2026. Ejemplo primario de integración funcional y experiencia multidispositivo; sin garantía de seguridad, disponibilidad o continuidad automática. · comprobado: 2026-11-04
- [IETF: RFC 5853, Requirements from SIP Session Border Controller Deployments](https://www.rfc-editor.org/rfc/rfc5853.html) · §2 Background; §3.1 topology hiding; §3.2 media management; §3.3 capability mismatches · versión: Informational, abril de 2010, HTML comprobado el 04-11-2026. Funciones observadas y problemas arquitectónicos, no paquete obligatorio de prestaciones o receta de seguridad. Puede intermediar medios según diseño; no todos los SBC hacen lo mismo. · comprobado: 2026-11-04
- [Microsoft Learn: Plan Direct Routing](https://learn.microsoft.com/en-us/microsoftteams/direct-routing-plan) · SIP signaling ports/failover; Media traffic/ports: SIP/TLS y UDP/SRTP separados, SBC y puntos alternativos · versión: HTML comprobado el 04-11-2026. Ejemplo de despliegue, sin ejecutar configuración, copiar rangos/puertos como universales o prometer conservación de toda llamada durante fallo. · comprobado: 2026-11-04
- [IETF: RFC4594, Guidelines for DiffServ Service Classes](https://www.rfc-editor.org/rfc/rfc4594.html) · §1.5.5 Admission Control; §4.1 Telephony Service Class: retardo, variación, pérdida y recursos dimensionados · versión: Informational, agosto de 2006, HTML comprobado el 04-11-2026. Ejemplo de ingeniería de voz, sin umbrales numéricos universales, EF automático en cualquier red o garantía por marcar paquetes. · comprobado: 2026-11-04
- [NCSC: CAF PrincipleB5 Resilient networks and systems](https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems) · B5.b Design for resilience: dependencias, caminos y proveedores alternativos · versión: HTML comprobado el 04-11-2026. Diversidad efectiva y recuperación; guía británica sin carácter normativo AGE o garantía por dos contratos. · comprobado: 2026-11-04

Partida: `13c636259de3c643d5dbe44016f6e36c75845e8d86412a4db2de1b4654dc2164` · propuesta: `ed9da2f4cf113e2306311b268c1ae9535cb033d38a9b1eb6de5dfccfd77007f5`

## MAN-GSI-P19-142

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso y correcta B precisa; distinguir control RTCP de control de sesión SIP.

### Antes

Un diagrama de voz muestra SIP y RTP por la misma flecha sin distinguirlos. ¿Qué corrección aporta más claridad?

- A. Unificar ambos bajo SIP porque, después del establecimiento, este protocolo transporta también las muestras de audio y vídeo.
- B. Separar señalización/control SIP/SDP del plano de medios RTP/RTCP. **(correcta)**
- C. Etiquetar RTP/RTCP como plano de señalización y SIP/SDP como plano de medios para reflejar el sentido de los paquetes.
- D. Sustituir SIP y RTP por SNMP, utilizando sus operaciones de gestión tanto para negociar como para transportar la sesión.

Explicación: La separación de planos es fundamental para firewall, SBC, troubleshooting y QoS.

### Propuesta

Un diagrama de voz muestra SIP y RTP por la misma flecha sin distinguirlos. ¿Qué corrección aporta más claridad?

- A. Unirlos en un flujo SIP porque la señalización transporta también las muestras multimedia.
- B. Separar señalización/control SIP/SDP del plano de medios RTP/RTCP. **(correcta)**
- C. Situar RTP/RTCP como control de llamada y SIP/SDP como el transporte de los medios.
- D. Clasificarlos únicamente por sentido entrante o saliente, sin distinguir funciones.

Explicación: La representación debe diferenciar control de sesión y descripción de medios frente al transporte y feedback del flujo multimedia. RTCP contiene control asociado a RTP, distinto del establecimiento SIP. Separar esos ámbitos ayuda a analizar puertos, rutas, frontera y problemas de audio sin asumir que una llamada señalizada correctamente entrega bien los medios.

- Error A: SIP puede transportar una descripción SDP, pero eso no significa que lleve las muestras de audio o vídeo de RTP.
- Error C: Invierte los papeles: el control de sesión corresponde a SIP y los medios y su feedback a RTP/RTCP.
- Error D: El sentido de tráfico puede añadirse al diagrama, pero no sustituye distinguir la función de cada protocolo.

- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [IETF: RFC8866, Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866.html) · §1 descripción sin protocolo de transporte; §3.1 SIP y offer/answer; §2 Media Description · versión: Enero de 2021, HTML comprobado el 04-11-2026. Sustituye RFC4566. Describir parámetros no es transportar audio ni negociar de forma autónoma sin procedimientos de oferta/respuesta. · comprobado: 2026-11-04
- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04

Partida: `412dbe50cd3a0eb9f5f53312dc2454dd5e749d183e97dfb172b0164650d1a33a` · propuesta: `a708716277883fc99f5448b190d9f39db6e0f60d3421782be2e381060c93be11`

## MAN-GSI-P19-143

Decisión: pending_review · acción: revise.

Motivo: Conservar continuidad de servicio y clave D; precisar identidad por persona frente a cuenta colectiva y simple desvío.

### Antes

Una organización desea continuidad de número, presencia y comunicaciones entre portátil y móvil. ¿Qué enfoque encaja mejor?

- A. Compartir una misma cuenta entre portátil y móvil para conservar el número, evitando identidad individual, trazabilidad y políticas por usuario.
- B. Crear identidades y numeraciones independientes en cada terminal, sin federación de presencia, llamadas o directorio corporativo.
- C. Mantener una PBX analógica aislada para cada dispositivo y sede, sin clientes UC ni convergencia entre acceso fijo y móvil.
- D. UC con identidad común y convergencia fijo-móvil, integrando políticas, clientes y telefonía/IMS o servicios equivalentes según arquitectura. **(correcta)**

Explicación: La convergencia busca continuidad de identidad/servicio entre dispositivos y accesos.

### Propuesta

Una organización desea que cada persona conserve número, presencia y comunicaciones al pasar entre portátil y móvil. ¿Qué enfoque encaja mejor?

- A. Una cuenta colectiva para empleados, con el mismo número en todos sus terminales.
- B. Perfiles por terminal, cada uno con número, presencia y directorio independientes.
- C. Un número común con desvíos, suponiendo integradas aplicaciones y presencia.
- D. UC con identidad individual y convergencia fijo-móvil, coordinando servicios y clientes. **(correcta)**

Explicación: La continuidad entre dispositivos necesita identidad individual de servicio, clientes y políticas coordinados, junto con integración de telefonía y otros canales según arquitectura. Compartir identidad entre dispositivos de una persona no significa compartir credenciales entre todos los empleados. Convergencia o número único no garantizan por sí solos transferencia de toda llamada sin interrupción.

- Error A: Una identidad colectiva dificulta atribución, permisos y preferencias de cada persona; no es la continuidad individual entre dispositivos buscada.
- Error B: Separar perfiles sin coordinación mantiene fragmentados número, presencia y experiencia entre terminales de la misma persona.
- Error C: Los desvíos pueden ayudar a recibir llamadas, pero no integran por sí solos identidad, presencia, mensajería y colaboración.

- [Cisco: Unified Communications Applications](https://www.cisco.com/c/en/us/products/unified-communications/unified-communications-applications/index.html) · Stay connected; Access your team from any device: mensajería, conferencia, presencia y voz integrada · versión: Página de producto HTML comprobada el 04-11-2026. Ejemplo primario de integración funcional y experiencia multidispositivo; sin garantía de seguridad, disponibilidad o continuidad automática. · comprobado: 2026-11-04
- [ITU: Next Generation Networks, WTPF2009](https://www.itu.int/osg/csd/wtpf/wtpf2009/ngn.html) · A few words on NGN: definición Y.2001 y características de separación, convergencia y movilidad · versión: Página histórica actualizada 30-07-2008, HTML comprobado el 04-11-2026. Principios estables, sin adoptar predicciones de despliegue, interpretar acceso independiente como ausencia de políticas o garantizar continuidad automática. · comprobado: 2026-11-04
- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `552688563bc2521bf5bb5f561e04386ee73e56561ff38e34d5db702c8a796cac` · propuesta: `3d3916f40ea6da2882497b7d644864add4ef3e30038d39f3dccd2a2ff63d2f6a`

## MAN-GSI-P19-144

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros escenario y cuatro alternativas plausibles, clave C; ampliar razonamiento de medidas y capacidad.

### Antes

Una sede tiene voz IP correcta en LAN pero mala al salir por WAN saturada. ¿Qué acción es más razonable?

- A. Aumentar el jitter buffer hasta ocultar cualquier corte, aunque crezca el retardo y la causa sea congestión sostenida.
- B. Sustituir terminales y codecs sin revisar utilización, pérdida, colas o capacidad disponible en el enlace WAN.
- C. Medir capacidad/congestión, aplicar QoS extremo a extremo donde se controle y ampliar/corregir enlace si el tráfico supera capacidad. **(correcta)**
- D. Cambiar la señalización SIP manteniendo el mismo transporte saturado y sin medir la calidad de los flujos RTP.

Explicación: QoS prioriza; si la capacidad es insuficiente de forma sostenida, hay que dimensionar.

### Propuesta

Una sede tiene voz IP correcta en LAN pero mala al salir por WAN saturada. ¿Qué acción es más razonable?

- A. Aumentar el jitter buffer hasta ocultar cualquier corte, aunque crezca el retardo y la causa sea congestión sostenida.
- B. Sustituir terminales y codecs sin revisar utilización, pérdida, colas o capacidad disponible en el enlace WAN.
- C. Medir capacidad/congestión, aplicar QoS extremo a extremo donde se controle y ampliar/corregir enlace si el tráfico supera capacidad. **(correcta)**
- D. Cambiar la señalización SIP manteniendo el mismo transporte saturado y sin medir la calidad de los flujos RTP.

Explicación: La degradación aparece al cruzar una WAN saturada, por lo que conviene medir carga, capacidad, colas y calidad del flujo en ese recorrido. QoS puede priorizar dentro de ámbitos controlados, pero una insuficiencia sostenida exige ajustar admisión, tráfico o capacidad. El buffer y los codecs pueden influir; no sustituyen diagnosticar y corregir la causa.

- Error A: Un buffer mayor puede añadir retardo y solo absorber cierta variación; no elimina pérdidas o sobrecarga sostenida del enlace.
- Error B: Cambiar equipos o codecs sin medir puede no resolver el cuello de botella identificado al cruzar la WAN.
- Error D: Modificar señalización no amplía los recursos del transporte congestionado ni demuestra mejora en la entrega de los medios.

- [IETF: RFC2475, Architecture for Differentiated Services](https://www.rfc-editor.org/rfc/rfc2475.html) · §1.1 Overview; §2.5 Network Resource Allocation: clasificación, acondicionamiento y reparto de recursos · versión: Informational, diciembre de 1998, HTML comprobado el 04-11-2026. Ejemplo de QoS; no se equipara todo control IMS a DiffServ ni se crea capacidad física mediante marcado. · comprobado: 2026-11-04
- [IETF: RFC4594, Guidelines for DiffServ Service Classes](https://www.rfc-editor.org/rfc/rfc4594.html) · §1.5.5 Admission Control; §4.1 Telephony Service Class: retardo, variación, pérdida y recursos dimensionados · versión: Informational, agosto de 2006, HTML comprobado el 04-11-2026. Ejemplo de ingeniería de voz, sin umbrales numéricos universales, EF automático en cualquier red o garantía por marcar paquetes. · comprobado: 2026-11-04
- [IETF: RFC7005, RTCP XR Report Block for De-Jitter Buffer Metric Reporting](https://www.rfc-editor.org/rfc/rfc7005.html) · §3 De-Jitter Buffer Operation; §3.2 fixed y §3.3 adaptive: retención, reproducción y descartes · versión: Septiembre de 2013, HTML comprobado el 04-11-2026. Compromiso de variación/retardo; no corrige pérdidas físicas ni autoriza aumentar buffer sin límite. · comprobado: 2026-11-04

Partida: `9cae7aeee4bdaf78c49fcf33a0e6c32c451683c8e58d6dc939add7530ead9cae` · propuesta: `8156daeaac1c76fc53c8f77d049d7335c045fc40c8399cb2d0279aad0745c897`

## MAN-GSI-P19-001

Decisión: pending_review · acción: revise.

Motivo: Conservar NGN como marco de paquetes y separación, clave B; comparar niveles de arquitectura próximos.

### Antes

¿Qué describe mejor una NGN (Next Generation Network)?

- A. Una red telefónica de conmutación de circuitos dedicada a voz y organizada alrededor de centrales y enlaces tradicionales.
- B. Una red convergente basada en paquetes/IP que separa transporte de control/servicios y soporta múltiples servicios con QoS y movilidad. **(correcta)**
- C. Una red local Ethernet que conecta equipos dentro de una sede mediante switches, VLAN y cableado estructurado.
- D. Un túnel cifrado que extiende conectividad privada sobre una red pública autenticando sus extremos.

Explicación: NGN busca convergencia de servicios sobre infraestructura de paquetes y desacoplamiento entre transporte y lógica de servicio.

### Propuesta

¿Qué describe mejor una NGN (Next Generation Network)?

- A. Una red de circuitos dedicada a voz con transporte y servicios ligados.
- B. Una red por paquetes que separa transporte y servicios convergentes. **(correcta)**
- C. Una red de acceso Ethernet que define por sí sola los servicios finales.
- D. Un servicio de túnel que cifra todo el tráfico entre dos redes privadas.

Explicación: NGN describe un enfoque de red por paquetes con servicios y control desacoplados del transporte, soporte de diversos servicios y objetivos de QoS y movilidad. No es una única tecnología de acceso ni sinónimo de VPN. Sus principios permiten convergencia; la calidad y la continuidad concretas dependen del diseño y los recursos del despliegue.

- Error A: El vínculo vertical entre un servicio y su transporte es precisamente lo que busca reducir la separación funcional del enfoque NGN.
- Error C: Ethernet puede ser una tecnología de acceso o transporte, pero no define por sí sola la arquitectura de servicios NGN.
- Error D: Un túnel privado resuelve un ámbito de conectividad o protección, no el conjunto de principios de una red convergente.

- [ITU: Next Generation Networks, WTPF2009](https://www.itu.int/osg/csd/wtpf/wtpf2009/ngn.html) · A few words on NGN: definición Y.2001 y características de separación, convergencia y movilidad · versión: Página histórica actualizada 30-07-2008, HTML comprobado el 04-11-2026. Principios estables, sin adoptar predicciones de despliegue, interpretar acceso independiente como ausencia de políticas o garantizar continuidad automática. · comprobado: 2026-11-04

Partida: `8f8063cc4bfeef4a1e4a0929bd2b5583f902d929625bec12893f58a0d53e26bb` · propuesta: `d2bf5941ebabdbab7567497bca9fa9ee55bb0279af850b401aa52b2c94700007`

## MAN-GSI-P19-002

Decisión: pending_review · acción: revise.

Motivo: Conservar superación de silos y clave A; alternativas de arquitectura en lugar de MAC o fibra.

### Antes

¿Qué problema arquitectónico intenta superar el enfoque NGN?

- A. La existencia de redes verticales separadas para cada servicio, sustituyéndolas por una plataforma convergente. **(correcta)**
- B. La ausencia de direcciones MAC en Ethernet, incorporándolas mediante una capa común para todos los servicios IP.
- C. La imposibilidad de transportar datos por fibra óptica, sustituyendo ese medio por enlaces radio en toda la red.
- D. La existencia de políticas de calidad, eliminándolas para que voz, vídeo y datos reciban siempre tratamiento idéntico.

Explicación: El valor conceptual de NGN es converger voz, datos y multimedia sobre una infraestructura común.

### Propuesta

¿Qué problema arquitectónico intenta superar el enfoque NGN?

- A. Los silos de red por servicio, favoreciendo una plataforma convergente. **(correcta)**
- B. La separación lógica entre señalización, medios y servicios compartidos.
- C. La reutilización de funciones comunes entre telefonía y otras aplicaciones.
- D. La posibilidad de usar tecnologías distintas para el acceso de los usuarios.

Explicación: El enfoque NGN intenta superar redes verticales separadas para cada servicio, compartiendo infraestructura y funciones donde conviene y desacoplando servicios de transporte. No pretende eliminar la separación lógica o la diversidad de accesos. Converger tampoco exige que toda función se ejecute en un solo equipo o con un único protocolo.

- Error B: Distinguir control, medios y servicios ayuda a estructurar la arquitectura; no es el silo vertical que se intenta superar.
- Error C: Reutilizar funciones comunes es una oportunidad de convergencia, no el problema arquitectónico al que se refiere la pregunta.
- Error D: La diversidad de accesos es compatible con separar servicios del transporte y no tiene que eliminarse.

- [ITU: Next Generation Networks, WTPF2009](https://www.itu.int/osg/csd/wtpf/wtpf2009/ngn.html) · A few words on NGN: definición Y.2001 y características de separación, convergencia y movilidad · versión: Página histórica actualizada 30-07-2008, HTML comprobado el 04-11-2026. Principios estables, sin adoptar predicciones de despliegue, interpretar acceso independiente como ausencia de políticas o garantizar continuidad automática. · comprobado: 2026-11-04
- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `2cf7e6d5b4600d762ee3713a7b276ae2495c568162b19c5a9c7142e678b4d76a` · propuesta: `017f2b45089af6bef156dcef1e74ad89bf234e471106003da590dcebeffc34f4`

## MAN-GSI-P19-003

Decisión: pending_review · acción: revise.

Motivo: Conservar IMS como arquitectura y clave B; distinguir arquitectura, protocolo, descripción y protección.

### Antes

¿Qué es IMS?

- A. El protocolo SIP utilizado para crear, modificar y terminar sesiones, considerado por sí solo toda la arquitectura de servicios.
- B. Una arquitectura 3GPP para control de sesiones y prestación de servicios multimedia IP. **(correcta)**
- C. Un codec que comprime audio y vídeo para transportarlo por IP sin funciones de abonado, control o prestación de servicios.
- D. Un producto PBX concreto que administra extensiones y llamadas, obligatorio y equivalente en cualquier despliegue IMS.

Explicación: IMS significa IP Multimedia Subsystem y organiza control de sesión, abonado y servicios multimedia IP.

### Propuesta

¿Qué es IMS?

- A. El protocolo SIP considerado equivalente a la arquitectura completa.
- B. Una arquitectura 3GPP para control y servicios multimedia IP. **(correcta)**
- C. Un formato descriptivo de medios empleado en señalización de sesiones.
- D. Un perfil de transporte seguro específico para paquetes RTP.

Explicación: IMS es una arquitectura de funciones y relaciones para control de sesiones y prestación de servicios multimedia IP en el ecosistema 3GPP. Puede utilizar SIP, SDP, RTP y mecanismos de protección, pero no se reduce a ninguno de esos protocolos o formatos. Sus funciones lógicas pueden desplegarse de maneras diferentes.

- Error A: SIP es un protocolo de señalización usado por IMS, no la totalidad de sus funciones de abonado, control y servicios.
- Error C: SDP describe parámetros de medios; no es una arquitectura completa de prestación y control de servicios.
- Error D: Un perfil como SRTP protege medios; no define por sí solo el subsistema de control y servicios IMS.

- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04
- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [IETF: RFC8866, Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866.html) · §1 descripción sin protocolo de transporte; §3.1 SIP y offer/answer; §2 Media Description · versión: Enero de 2021, HTML comprobado el 04-11-2026. Sustituye RFC4566. Describir parámetros no es transportar audio ni negociar de forma autónoma sin procedimientos de oferta/respuesta. · comprobado: 2026-11-04
- [IETF: RFC3711, The Secure Real-time Transport Protocol](https://www.rfc-editor.org/rfc/rfc3711.html) · §1 Introduction y §2 Goals and Features: protección RTP/RTCP; §7 gestión de claves · versión: Marzo de 2004, apartados HTML comprobados el 04-11-2026. Alcance y dependencia de perfil/claves; no recomendación de algoritmos históricos ni cifrado automático de señalización o de todo IP. · comprobado: 2026-11-04

Partida: `3a5ac2628781c09567e9d78e0ad1f526a614128bd33603ece13cb9278ae8814a` · propuesta: `eb317917211e86ded2d720dcca838d803db45223079982ed8390d500500cd8f6`

## MAN-GSI-P19-004

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta A bien formulada; sustituir distractores demasiado ajenos por acoplamientos arquitectónicos.

### Antes

¿Cuál es una idea central de IMS?

- A. Separar acceso, control de sesión y servicios para facilitar convergencia e independencia del acceso. **(correcta)**
- B. Obligar a transportar todas las llamadas mediante circuitos dedicados y excluir los servicios multimedia basados en paquetes IP.
- C. Eliminar la autenticación del abonado porque la dirección de red identifica de forma suficiente al usuario y su perfil de servicios.
- D. Utilizar exclusivamente Wi-Fi como tecnología de acceso y rechazar conexiones procedentes de redes móviles o accesos fijos.

Explicación: IMS permite que la lógica multimedia IP no quede atada a una única red de acceso.

### Propuesta

¿Cuál es una idea central de IMS?

- A. Separar acceso, control de sesión y servicios para facilitar convergencia e independencia del acceso. **(correcta)**
- B. Vincular la identidad de servicio al equipo de acceso físico asignado a cada usuario.
- C. Concentrar señalización y medios en un único protocolo para eliminar funciones de abonado.
- D. Hacer que la tecnología radio determine las prestaciones de cada servicio multimedia.

Explicación: La separación entre conectividad, control y servicios favorece ofrecer multimedia con menor dependencia de una tecnología de acceso concreta. IMS conserva funciones de identidad, abonado y política; no las elimina por usar IP. La independencia es funcional y necesita conectividad y procedimientos compatibles, sin garantía automática de movilidad o continuidad.

- Error B: Atar la identidad al acceso físico reduce la independencia entre servicio y conectividad que se busca con esa separación.
- Error C: Usar un único protocolo no sustituye las funciones de abonado o los papeles distintos de señalización y medios.
- Error D: La tecnología de acceso condiciona recursos, pero no debe identificarse con la lógica completa que presta cada servicio.

- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04
- [ITU: Next Generation Networks, WTPF2009](https://www.itu.int/osg/csd/wtpf/wtpf2009/ngn.html) · A few words on NGN: definición Y.2001 y características de separación, convergencia y movilidad · versión: Página histórica actualizada 30-07-2008, HTML comprobado el 04-11-2026. Principios estables, sin adoptar predicciones de despliegue, interpretar acceso independiente como ausencia de políticas o garantizar continuidad automática. · comprobado: 2026-11-04

Partida: `6e5c7ea37e4ddf2479d508f480f873c77557629458ddb0e177c3d5ca75f0b416` · propuesta: `643c19f92eabe317d94c9cf35749de26e7baec3f69529cdcc939d200283c8f26`
