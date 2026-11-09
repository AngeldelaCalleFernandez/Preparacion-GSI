# GSI-EDITORIAL-083 — revisión propuesta

Preparado: 2026-11-04. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `5955c0a12125ef13a19b63d2998fa382151bf12d8c0d1f64a17692bbfbaf6cb6`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P19-005

Decisión: pending_review · acción: revise.

Motivo: Conservar primer contacto SIP y clave C; microcaso de señalización inicial y distractores de funciones IMS próximas.

### Antes

¿Qué función clásica desempeña P-CSCF en IMS?

- A. Consultar el HSS y seleccionar el S-CSCF de un usuario durante el registro o la señalización entrante.
- B. Mantener el registro y control central de sesiones, aplicando la lógica de servicio correspondiente al abonado.
- C. Actuar como primer punto de contacto SIP del terminal con IMS. **(correcta)**
- D. Almacenar perfiles, credenciales y datos de suscripción consultados por las funciones de control IMS.

Explicación: P-CSCF es el Proxy-CSCF y constituye el punto inicial de señalización IMS para el UE.

### Propuesta

Un terminal inicia señalización SIP hacia IMS. ¿Qué función corresponde al P-CSCF en ese recorrido lógico?

- A. Consultar el HSS para localizar o asignar el S-CSCF correspondiente.
- B. Registrar al abonado y aplicar su control de sesión y servicios.
- C. Actuar como primer punto de contacto SIP del terminal con IMS. **(correcta)**
- D. Conservar los perfiles y datos de suscripción utilizados por IMS.

Explicación: El P-CSCF es el primer punto lógico de contacto SIP del equipo de usuario con IMS. Reenvía señalización y puede participar en seguridad y políticas según arquitectura. No debe confundirse con el primer router físico del acceso: localizar el servidor de servicio, controlar las sesiones y conservar la suscripción son responsabilidades diferenciadas.

- Error A: Consultar los datos de suscripción para localizar o seleccionar el S-CSCF caracteriza al I-CSCF en esta comparación funcional.
- Error B: El registro y control de servicio del abonado corresponden al S-CSCF; no definen la función proxy de entrada.
- Error D: El repositorio de suscripción es el HSS en IMS tradicional; el P-CSCF no lo sustituye como almacén de perfiles.

- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · TS23.228 §4.0/figura4.0 y §4.6.1–4.6.3: P/I/S-CSCF; anexoY.0: HSS, perfil IMS y acceso5GS. Páginas PDF28–29/50–52/328, impresas27–28/49–51/327. · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `c1b5c21e68d646b2b3607a312e203ca7b2b0b207084eb37f207acba511ace7b2` · propuesta: `44188411d454e378ea5b9feca3e124eedf0354627fc51fda7b7bc71a9ce5e693`

## MAN-GSI-P19-007

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, correcta B y control de sesión; abreviar distractores cercanos sin relleno.

### Antes

¿Qué función clásica desempeña S-CSCF?

- A. Actuar como primer punto de contacto del terminal IMS, aplicando políticas de acceso y reenviando señalización hacia la red.
- B. Controlar la sesión/registro del abonado y aplicar lógica de servicio IMS asociada. **(correcta)**
- C. Localizar el S-CSCF correspondiente y encaminar hacia él las peticiones que llegan desde otras redes o dominios.
- D. Mantener perfiles de abonado, credenciales y datos de localización utilizados por las funciones de control IMS.

Explicación: S-CSCF es la función central de control de sesión SIP en la arquitectura IMS clásica.

### Propuesta

¿Qué función clásica desempeña S-CSCF?

- A. Ser el proxy de entrada SIP del terminal hacia la red IMS.
- B. Controlar la sesión/registro del abonado y aplicar lógica de servicio IMS asociada. **(correcta)**
- C. Consultar el HSS y localizar el S-CSCF de destino de la señalización.
- D. Almacenar los perfiles, identidades y datos de suscripción de IMS.

Explicación: El S-CSCF mantiene el registro y controla las sesiones SIP del abonado, aplicando el tratamiento de servicio asociado y relacionándose con servidores de aplicaciones. Se trata de una responsabilidad lógica: distintas funciones IMS pueden compartir una plataforma sin perder su papel. La entrada proxy, la interrogación y el repositorio de suscripción no definen por sí solos al S-CSCF.

- Error A: El primer contacto proxy del terminal con IMS caracteriza al P-CSCF, aunque después la petición alcance otras funciones.
- Error C: La interrogación del HSS para localizar o asignar el servidor de servicio corresponde al I-CSCF en la arquitectura descrita.
- Error D: Conservar la información de suscripción es responsabilidad del HSS; el S-CSCF utiliza datos y perfiles para prestar su servicio.

- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · TS23.228 §4.0/figura4.0 y §4.6.1–4.6.3: P/I/S-CSCF; anexoY.0: HSS, perfil IMS y acceso5GS. Páginas PDF28–29/50–52/328, impresas27–28/49–51/327. · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `6de31826a6a533100e8eafc6fc6c5762ca96e9f067b0b99218805954d1a687eb` · propuesta: `2cf29f32ccc569874f25f5e0e2aac87ab53faaf8cc007731be9d8fda4e7c8c89`

## MAN-GSI-P19-008

Decisión: pending_review · acción: revise.

Motivo: Conservar correcta B y repositorio IMS; sustituir distractores ajenos por P/S/I-CSCF, sin equiparar HSS y UDM.

### Antes

¿Qué representa HSS en la arquitectura IMS tradicional?

- A. Un protocolo específico que transporta la señalización de vídeo entre terminales y negocia directamente la codificación de cada flujo.
- B. Un repositorio de datos de abonado, identidad y perfil utilizado por funciones IMS. **(correcta)**
- C. Un conmutador físico de voz que establece circuitos dedicados entre los usuarios antes de que intervenga cualquier función IMS.
- D. Un códec de alta eficiencia que comprime simultáneamente audio y vídeo y almacena los perfiles multimedia de los abonados.

Explicación: HSS almacena información de suscripción/perfil; en 5G aparecen evoluciones de funciones/datos, pero la idea sigue siendo útil.

### Propuesta

¿Qué representa HSS en la arquitectura IMS tradicional?

- A. Un proxy que recibe la señalización SIP inicial del equipo de usuario.
- B. Un repositorio de datos de abonado, identidad y perfil utilizado por funciones IMS. **(correcta)**
- C. Un control de sesión que registra al abonado y ejecuta su lógica de servicio.
- D. Una función de interrogación que localiza el servidor de sesión del abonado.

Explicación: En IMS tradicional, el HSS conserva información de identidad, suscripción y perfil que consultan las funciones de control. No es un códec ni un conmutador de circuitos. La presencia de acceso 5G no permite concluir que desaparezca toda función HSS de IMS: el anexo Y contempla esa función lógica incluso cuando se integra o comparte despliegue con funciones de datos 5G.

- Error A: El proxy de contacto inicial del terminal es el P-CSCF; recibir señalización no equivale a almacenar la suscripción.
- Error C: Registrar y controlar sesiones caracteriza al S-CSCF, que puede utilizar el perfil sin ser el repositorio HSS.
- Error D: La interrogación para localizar el servidor de servicio caracteriza al I-CSCF y requiere consultar datos del abonado.

- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · TS23.228 §4.0/figura4.0 y §4.6.1–4.6.3: P/I/S-CSCF; anexoY.0: HSS, perfil IMS y acceso5GS. Páginas PDF28–29/50–52/328, impresas27–28/49–51/327. · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `c6029fb0e997cdd75a15ac991e1dc29635f7d2be554405fa353e4e54b3f0f9d9` · propuesta: `3b34c502ef221de1ad71812adfc38e8651e7d5c6268d41c2162c11e8eae3a5c1`

## MAN-GSI-P19-025

Decisión: pending_review · acción: revise.

Motivo: Conservar familia1xx y clave B; interpretar un180 en una traza sin deducir respuesta final o medios.

### Antes

¿Qué indica una respuesta SIP 1xx?

- A. Éxito definitivo siempre.
- B. Una respuesta provisional/informativa. **(correcta)**
- C. Error global exclusivamente.
- D. Un paquete RTP.

Explicación: Las familias SIP agrupan respuestas: 1xx provisionales, 2xx éxito, 3xx redirección, 4xx cliente, 5xx servidor, 6xx globales.

### Propuesta

En una traza SIP aparece 180 Ringing tras un INVITE. ¿Cómo debe interpretarse esa respuesta por pertenecer a la familia 1xx?

- A. Una aceptación final de la solicitud que concluye su procesamiento.
- B. Una respuesta provisional mientras se tramita la solicitud SIP. **(correcta)**
- C. Una redirección final que proporciona destinos alternativos.
- D. Un fallo global que impide satisfacer la solicitud en cualquier servidor.

Explicación: Una respuesta SIP de familia 1xx comunica un estado provisional; todavía no aporta la respuesta final a la solicitud. En particular, 180 Ringing indica que el destino está intentando avisar al usuario. No acredita que este haya contestado ni que exista un flujo RTP. Las familias 2xx, 3xx y 6xx expresan resultados de otra naturaleza.

- Error A: La aceptación final pertenece a la familia 2xx; Ringing no demuestra que el usuario haya aceptado la llamada.
- Error C: La redirección corresponde a respuestas 3xx; una respuesta provisional no es por ello un resultado final de redirección.
- Error D: La familia 6xx expresa fallo global; un estado provisional informa de progreso y no declara ese fracaso definitivo.

- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · RFC3261 §7.2: familias de respuesta; §21.1/21.1.2: respuestas provisionales y180 Ringing; §26.2.1: TLS entre elementos SIP · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04

Partida: `770da5a76945a8b2794b43bc92fb9763fa979c161bc46e173df3da538ea433e9` · propuesta: `13195d73bfbcab06c54c072a23e406ec09a309aaf621e8daf02b84afa662d266`

## MAN-GSI-P19-033

Decisión: pending_review · acción: revise.

Motivo: Conservar solución TLS más SRTP y clave B; contrastar dos planos sin distractores de protocolos ajenos.

### Antes

¿Qué combinación es coherente para proteger señalización y medios?

- A. HTTP sin TLS y RTP abierto como única medida.
- B. SIP sobre TLS cuando aplique y SRTP para medios. **(correcta)**
- C. SNMPv1 y FTP.
- D. ARP y STP.

Explicación: La protección debe contemplar ambos planos, sin asumir que cifrar uno protege automáticamente el otro.

### Propuesta

Un despliegue debe proteger los canales SIP y los medios RTP; no se presupone una VPN u otra capa cifrada. ¿Qué propuesta contempla ambos planos?

- A. SIP sobre TLS y RTP sin protección criptográfica.
- B. SIP sobre TLS y SRTP, con perfiles y claves adecuados. **(correcta)**
- C. SIP sin protección TLS y medios mediante SRTP.
- D. SIP sin protección TLS y RTP sin protección criptográfica.

Explicación: La propuesta trata por separado los dos planos: TLS protege los canales de señalización SIP correspondientes y SRTP protege los medios de acuerdo con el perfil y las claves utilizados. Es necesario verificar extremos, confianza y todos los tramos requeridos. Proteger un plano no cifra automáticamente el otro, y TLS entre elementos SIP no implica por sí mismo confidencialidad extremo a extremo de toda la llamada.

- Error A: El canal SIP protegido no cifra las muestras RTP sin protección; queda sin cubrir el plano de medios del caso.
- Error C: SRTP protege los medios, pero deja sin aportar el canal TLS requerido para la señalización del caso planteado.
- Error D: Sin mecanismos de protección en ambos planos, ninguna de las dos comunicaciones recibe la protección criptográfica solicitada.

- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · RFC3261 §7.2: familias de respuesta; §21.1/21.1.2: respuestas provisionales y180 Ringing; §26.2.1: TLS entre elementos SIP · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [IETF: RFC3711, The Secure Real-time Transport Protocol](https://www.rfc-editor.org/rfc/rfc3711.html) · §1 Introduction y §2 Goals and Features: protección RTP/RTCP; §7 gestión de claves · versión: Marzo de 2004, apartados HTML comprobados el 04-11-2026. Alcance y dependencia de perfil/claves; no recomendación de algoritmos históricos ni cifrado automático de señalización o de todo IP. · comprobado: 2026-11-04
- [Microsoft Learn: Plan Direct Routing](https://learn.microsoft.com/en-us/microsoftteams/direct-routing-plan) · SIP signaling ports/failover; Media traffic/ports: SIP/TLS y UDP/SRTP separados, SBC y puntos alternativos · versión: HTML comprobado el 04-11-2026. Ejemplo de despliegue, sin ejecutar configuración, copiar rangos/puertos como universales o prometer conservación de toda llamada durante fallo. · comprobado: 2026-11-04

Partida: `24a37c6b624492620ce50beb8f8530d2586a35008624dd108413aea551732305` · propuesta: `903815ce1476be5322d464a33182c6fa4c601e596d6d1b633bf06700428408ed`

## MAN-GSI-P19-035

Decisión: pending_review · acción: revise.

Motivo: Conservar las cuatro alternativas y correcta D; delimitar alcance corporativo de ToIP sin definición universal frente a VoIP.

### Antes

¿Qué suele expresar ToIP en un entorno corporativo?

- A. El transporte de audio de una llamada individual mediante paquetes IP y protocolos multimedia como RTP.
- B. Una interconexión SIP que enlaza la telefonía de una organización con un operador o plataforma externa.
- C. La central telefónica IP que gestiona extensiones, rutas y funciones de llamada dentro de la organización.
- D. El sistema completo de telefonía sobre IP: terminales, PBX, numeración, servicios e interconexión. **(correcta)**

Explicación: ToIP tiene un alcance de solución de telefonía más amplio que el concepto puro de VoIP.

### Propuesta

Usando ToIP en el sentido de solución corporativa completa de telefonía sobre IP, ¿qué descripción corresponde a ese alcance?

- A. El transporte de audio de una llamada individual mediante paquetes IP y protocolos multimedia como RTP.
- B. Una interconexión SIP que enlaza la telefonía de una organización con un operador o plataforma externa.
- C. La central telefónica IP que gestiona extensiones, rutas y funciones de llamada dentro de la organización.
- D. El sistema completo de telefonía sobre IP: terminales, PBX, numeración, servicios e interconexión. **(correcta)**

Explicación: Aquí ToIP se usa en el sentido de solución completa de telefonía sobre IP: terminales, control de llamadas, numeración, servicios y conexión con otros sistemas. VoIP describe el transporte de voz por IP y puede usarse también en sentido amplio según el autor. La distinción de alcance se explicita en el enunciado; no es una frontera terminológica universal impuesta por un estándar.

- Error A: Transportar la voz de una llamada es una parte de la solución; no abarca el conjunto corporativo definido en el enunciado.
- Error B: La troncal o interconexión SIP enlaza sistemas y operadores, pero no constituye por sí sola terminales, control y servicios internos.
- Error C: La PBX presta control de telefonía, pero es un componente del sistema completo que también incluye terminales e interconexión.

- [Cisco: IP Telephony Overview](https://www.cisco.com/cisco/web/docs/iam/unified/ipt601/IP_Telephony_Overview.html) · IP Telephony Overview: procesamiento de llamadas, terminales, aplicaciones, infraestructura y pasarelas PSTN · versión: Guía histórica de producto, ruta ipt601, HTML comprobado el04-11-2026. Ejemplo funcional de solución completa, sin terminología universal ToIP/VoIP, recomendaciones de compra o trasladar configuración obsoleta. · comprobado: 2026-11-04

Partida: `85f2d875bf368b58693efbf61e74edb18d3efce36fff13d26df0083e80ee855b` · propuesta: `ad6bb81c55e2fd27ee1f732c76ae5065417c86d454c96df61228e208a4ca5fa2`

## MAN-GSI-P19-041

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la pregunta sólida y clave B; precisar que GPRS/EDGE son ampliaciones y no el origen de todo dato móvil.

### Antes

¿Qué caracteriza de forma general a 2G?

- A. Telefonía móvil analógica orientada a voz, con escasa protección y sin servicios digitales de datos.
- B. Digitalización de la voz y servicios como SMS, con GSM como referencia y datos añadidos posteriormente mediante GPRS/EDGE. **(correcta)**
- C. Acceso móvil de banda ancha basado en UMTS y HSPA, con evolución de datos por paquetes y videollamada.
- D. Red móvil de paquetes basada en LTE, arquitectura all-IP y separación entre acceso radio y núcleo evolucionado.

Explicación: 2G marca el paso a voz digital; GPRS/EDGE ampliaron capacidades de datos.

### Propuesta

¿Qué caracteriza de forma general a 2G?

- A. Telefonía móvil analógica orientada a voz, con escasa protección y sin servicios digitales de datos.
- B. Digitalización de la voz y servicios como SMS, con GSM como referencia y datos añadidos posteriormente mediante GPRS/EDGE. **(correcta)**
- C. Acceso móvil de banda ancha basado en UMTS y HSPA, con evolución de datos por paquetes y videollamada.
- D. Red móvil de paquetes basada en LTE, arquitectura all-IP y separación entre acceso radio y núcleo evolucionado.

Explicación: En la evolución representada por GSM, 2G consolida voz digital y servicios como SMS. GPRS incorpora servicios de paquetes y EDGE amplía la capacidad de datos de esa familia. No significa que antes no existieran datos móviles ni que toda red 2G tuviera desde su primera versión todas esas ampliaciones. UMTS/HSPA y LTE/EPC pertenecen a etapas posteriores de esa evolución.

- Error A: La voz analógica caracteriza a las primeras generaciones celulares; el cambio de GSM incluye el tratamiento digital de la voz.
- Error C: UMTS y HSPA se asocian a la evolución 3G, con capacidades de banda ancha posteriores a la referencia GSM de segunda generación.
- Error D: LTE y EPC corresponden a la evolución de banda ancha 4G sobre paquetes, no al rasgo que define el paso inicial a 2G.

- [Ericsson Technology Review: The history of mobile internet](https://www.ericsson.com/en/reports-and-papers/ericsson-technology-review/articles/mobile-miracles) · 2G: the arrival of SMS and limited data services; 3G: the concept of mobile internet is born; 4G LTE: completing the shift · versión: Artículo de participantes en desarrollo/normalización, 09-02-2024, HTML comprobado el04-11-2026. Síntesis histórica, sin universalizar fechas comerciales, tasas o afirmar que3G inventó paquetes o carecía de dominio de paquetes. · comprobado: 2026-11-04

Partida: `f0c0d5d2ea35bc93dfc44b96331263efaeabaf5ea5504af4d7f5717de627dd52` · propuesta: `397a74f9f1723a02b6915076029b3e6e2e0aafc5558ea260336df1e3f85f5e7b`

## MAN-GSI-P19-042

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta A; distractores de etapas contiguas sin negar paquetes previos o diversidad3G.

### Antes

¿Qué aportó 3G de forma característica?

- A. Generalización de datos móviles con UMTS/HSPA y mayor capacidad que 2G. **(correcta)**
- B. La introducción inicial de datos por paquetes mediante GPRS/EDGE sobre redes principalmente asociadas a la segunda generación.
- C. El acceso LTE y una arquitectura orientada a paquetes IP con velocidades y eficiencia superiores a las generaciones anteriores.
- D. El uso de NR, núcleos 5G y capacidades como slicing para nuevos perfiles de servicio y despliegue.

Explicación: 3G amplió significativamente servicios de datos móviles, manteniendo todavía herencia de dominios previos.

### Propuesta

¿Qué aportó 3G de forma característica?

- A. Generalización de datos móviles con UMTS/HSPA y mayor capacidad que 2G. **(correcta)**
- B. Extensión de GSM con GPRS y EDGE para incorporar y mejorar datos por paquetes.
- C. Acceso LTE y núcleo EPC diseñados para una plataforma de banda ancha por paquetes.
- D. Acceso NR y núcleo 5G con evolución de capacidad y perfiles de servicio.

Explicación: La evolución 3G representada por UMTS y sus mejoras HSPA aumenta la capacidad de datos y facilita servicios de banda ancha móvil. GPRS ya había introducido paquetes en la familia GSM, por lo que 3G no es el nacimiento de todo dato móvil. Tampoco se debe confundir UMTS/HSPA con LTE/EPC o NR/5GC, ni reducir todas las tecnologías 3G a una sola familia.

- Error B: GPRS y EDGE amplían las redes GSM de la etapa 2G; no son la aportación específica de UMTS/HSPA de la pregunta.
- Error C: LTE con EPC corresponde a la etapa posterior de banda ancha por paquetes, habitualmente identificada como 4G/LTE.
- Error D: NR y 5G Core pertenecen a la evolución 5G; no identifican la ampliación 3G representada por UMTS/HSPA.

- [Ericsson Technology Review: The history of mobile internet](https://www.ericsson.com/en/reports-and-papers/ericsson-technology-review/articles/mobile-miracles) · 2G: the arrival of SMS and limited data services; 3G: the concept of mobile internet is born; 4G LTE: completing the shift · versión: Artículo de participantes en desarrollo/normalización, 09-02-2024, HTML comprobado el04-11-2026. Síntesis histórica, sin universalizar fechas comerciales, tasas o afirmar que3G inventó paquetes o carecía de dominio de paquetes. · comprobado: 2026-11-04

Partida: `2e86a3a323a99f5df5ac8d6f217dc8d9e1692dc643cce3229a35b7b8681a762e` · propuesta: `eb52ba77597950b2e3190089f91ac65a0dea8e5f7586b21c500a170ecbe949f9`

## MAN-GSI-P19-043

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, correcta B y arquitectura por paquetes; distractores de arquitecturas móviles reales.

### Antes

¿Qué rasgo arquitectónico es característico de 4G/LTE?

- A. Uso obligatorio de circuitos TDM para datos.
- B. Una plataforma de banda ancha móvil all-IP apoyada en LTE/EPC. **(correcta)**
- C. Ausencia de autenticación SIM.
- D. Sustitución de IP por ATM en el usuario.

Explicación: LTE/EPC simplifica hacia paquetes IP y soporta voz mediante VoLTE/IMS.

### Propuesta

¿Qué rasgo arquitectónico es característico de 4G/LTE?

- A. Un acceso UMTS/HSPA con dominios de circuitos y paquetes en el núcleo.
- B. Una plataforma de banda ancha móvil all-IP apoyada en LTE/EPC. **(correcta)**
- C. Un acceso NR con funciones AMF, SMF y UPF conectadas a 5G Core.
- D. Un acceso GSM cuyo núcleo de paquetes se amplía mediante GPRS y EDGE.

Explicación: LTE/EPC se concibe como una plataforma de banda ancha móvil por paquetes IP. El acceso y el núcleo evolucionado no incorporan un dominio de voz por circuitos propio: VoLTE utiliza IMS para prestar telefonía sobre esa conectividad. La etiqueta 4G/LTE se emplea en su sentido habitual y no pretende afirmar que toda versión inicial de LTE cumpliera todos los requisitos de LTE-Advanced.

- Error A: UMTS/HSPA y la coexistencia de dominios heredados corresponden a la familia 3G, no a la arquitectura LTE/EPC descrita.
- Error C: NR con AMF, SMF y UPF caracteriza una arquitectura de acceso y núcleo 5G, distinta de LTE con EPC.
- Error D: GPRS y EDGE evolucionan la familia GSM y su soporte de datos; no identifican la plataforma LTE/EPC.

- [Ericsson Technology Review: The history of mobile internet](https://www.ericsson.com/en/reports-and-papers/ericsson-technology-review/articles/mobile-miracles) · 2G: the arrival of SMS and limited data services; 3G: the concept of mobile internet is born; 4G LTE: completing the shift · versión: Artículo de participantes en desarrollo/normalización, 09-02-2024, HTML comprobado el04-11-2026. Síntesis histórica, sin universalizar fechas comerciales, tasas o afirmar que3G inventó paquetes o carecía de dominio de paquetes. · comprobado: 2026-11-04
- [Ericsson: Voice and communication services in4G and5G networks](https://www.ericsson.com/en/reports-and-papers/white-papers/voice-and-communication-services-in-4g-and-5g-networks) · VoLTE – A foundation for a global communication services ecosystem; Voice in5G networks: figuras1–3, EPC/IMS/CSFB y SA/NSA · versión: White paper julio2022, HTML comprobado el04-11-2026. Alcance arquitectónico y perfiles; sin garantías comerciales, despliegue real o afirmaciones de cobertura universal. CSFB cambia al dominio de circuitos; VoLTE usa IMS sobre LTE/EPC. · comprobado: 2026-11-04
- [ETSI TS138300: NR and NG-RAN Overall description, Stage2](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.08.00_60/ts_138300v180800p.pdf) · TS38.300 §4.1/4.2/4.4, figura4.1-1; §8.2 identidades; §9.2.1 reselección y §9.2.3.2 handover, figura9.2.3.2.1-1. PDF25–27/31/75/77–78/89–91. · versión: V18.8.0 (2026-02), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026 y figuras inspeccionadas en renders. No lectura íntegra de274 páginas ni última edición atribuida; UE extremo, RAN y5GC funciones separadas. · comprobado: 2026-11-04

Partida: `70c4ed4885811536711145dfc99b831e3722b81ee7d48ef4830f531aad4c065a` · propuesta: `77ccd3555a69c3545dd761502e3378a77d0c89b1adfd73c3458b83556af99b6a`

## MAN-GSI-P19-044

Decisión: pending_review · acción: revise.

Motivo: Conservar correcta A y voz LTE mediante IMS; caso discrimina VoLTE frente a CSFB sin afirmar voz automática.

### Antes

¿Cómo se presta típicamente voz sobre LTE?

- A. Mediante VoLTE apoyado en IMS. **(correcta)**
- B. Mediante H.323 obligatorio en cada terminal.
- C. Solo por circuitos 2G sin alternativas.
- D. Mediante SNMP.

Explicación: VoLTE integra voz en LTE usando IMS para control multimedia.

### Propuesta

Un terminal mantiene LTE como acceso radio durante una llamada del operador. ¿Qué solución de voz corresponde a ese funcionamiento?

- A. Mediante VoLTE apoyado en IMS. **(correcta)**
- B. Mediante CSFB a circuitos 2G/3G.
- C. Mediante VoNR sobre NR y 5GC.
- D. Mediante VoWiFi sobre Wi-Fi.

Explicación: VoLTE presta telefonía mediante IMS utilizando la conectividad de paquetes de LTE/EPC. Mantener el acceso LTE para la llamada lo distingue del Circuit-Switched Fallback, que recurre al dominio de circuitos de otra generación. VoNR y voz sobre Wi-Fi emplean otros accesos. Tener LTE para datos no demuestra que estén configurados y disponibles todos los elementos de VoLTE.

- Error B: CSFB cambia al dominio de circuitos para prestar voz; no describe una llamada que conserva LTE como acceso radio.
- Error C: VoNR utiliza acceso NR en el sistema 5G; no es el nombre de la telefonía que permanece sobre LTE/EPC.
- Error D: VoWiFi utiliza acceso Wi-Fi, aunque pueda compartir servicios IMS; no mantiene LTE como el acceso del caso.

- [Ericsson: Voice and communication services in4G and5G networks](https://www.ericsson.com/en/reports-and-papers/white-papers/voice-and-communication-services-in-4g-and-5g-networks) · VoLTE – A foundation for a global communication services ecosystem; Voice in5G networks: figuras1–3, EPC/IMS/CSFB y SA/NSA · versión: White paper julio2022, HTML comprobado el04-11-2026. Alcance arquitectónico y perfiles; sin garantías comerciales, despliegue real o afirmaciones de cobertura universal. CSFB cambia al dominio de circuitos; VoLTE usa IMS sobre LTE/EPC. · comprobado: 2026-11-04
- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · TS23.228 §4.0/figura4.0 y §4.6.1–4.6.3: P/I/S-CSCF; anexoY.0: HSS, perfil IMS y acceso5GS. Páginas PDF28–29/50–52/328, impresas27–28/49–51/327. · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `54fbd836f099f76c12131c2985218569e59e45f341e2d08c75ef6f5aa1499c00` · propuesta: `243a39399473d03781c31e8643b1170af2a241f0eb3439808f0b402d180213e2`

## MAN-GSI-P19-045

Decisión: pending_review · acción: revise.

Motivo: Conservar concepto radio/core5G y clave A; explicitar SA para no excluir indebidamente los despliegues NSA con EPC.

### Antes

¿Qué elementos generales definen 5G?

- A. 5G NR como acceso radio y 5G Core, con mejoras de capacidad, latencia y densidad según servicio/despliegue. **(correcta)**
- B. El uso de 5G NR sobre un núcleo LTE/EPC, considerando que un núcleo 5G no interviene en la definición ni en los despliegues 5G.
- C. La implantación de 5G Core manteniendo acceso radio 4G, sin incorporar NR ni otras evoluciones de la interfaz radio.
- D. Una variante de Wi-Fi para redes locales que comparte espectro, arquitectura y mecanismos de acceso con IEEE 802.11.

Explicación: 5G implica evolución de radio y core, no solo mayor velocidad pico.

### Propuesta

En un despliegue 5G Standalone (SA) basado en acceso NR, ¿qué combinación de radio y núcleo corresponde a esa arquitectura?

- A. Acceso NR conectado a 5G Core, con funciones y prestaciones según despliegue. **(correcta)**
- B. Acceso NR combinado con LTE y anclado en EPC mediante arquitectura NSA.
- C. Acceso LTE con EPC y telefonía IMS sin incorporar acceso radio NR.
- D. Acceso UMTS con núcleo de circuitos y paquetes y evolución mediante HSPA.

Explicación: En el despliegue 5G Standalone de la pregunta, NR se conecta a 5G Core sin depender del anclaje LTE/EPC propio de la opción NSA descrita. La distinción no niega que existan redes 5G NSA con NR y EPC. Capacidad, latencia y densidad son dimensiones de evolución cuyos resultados dependen de cobertura, recursos, funciones y servicio; no cifras garantizadas por la etiqueta.

- Error B: La combinación NR/LTE con anclaje en EPC es el despliegue NSA descrito; no la arquitectura SA solicitada.
- Error C: LTE/EPC con IMS puede prestar VoLTE, pero esa combinación sin NR no identifica el despliegue NR/5GC planteado.
- Error D: UMTS/HSPA pertenece a la familia 3G y no define una arquitectura 5G Standalone de acceso y núcleo.

- [ETSI TS138300: NR and NG-RAN Overall description, Stage2](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.08.00_60/ts_138300v180800p.pdf) · TS38.300 §4.1/4.2/4.4, figura4.1-1; §8.2 identidades; §9.2.1 reselección y §9.2.3.2 handover, figura9.2.3.2.1-1. PDF25–27/31/75/77–78/89–91. · versión: V18.8.0 (2026-02), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026 y figuras inspeccionadas en renders. No lectura íntegra de274 páginas ni última edición atribuida; UE extremo, RAN y5GC funciones separadas. · comprobado: 2026-11-04
- [Ericsson: Voice and communication services in4G and5G networks](https://www.ericsson.com/en/reports-and-papers/white-papers/voice-and-communication-services-in-4g-and-5g-networks) · VoLTE – A foundation for a global communication services ecosystem; Voice in5G networks: figuras1–3, EPC/IMS/CSFB y SA/NSA · versión: White paper julio2022, HTML comprobado el04-11-2026. Alcance arquitectónico y perfiles; sin garantías comerciales, despliegue real o afirmaciones de cobertura universal. CSFB cambia al dominio de circuitos; VoLTE usa IMS sobre LTE/EPC. · comprobado: 2026-11-04

Partida: `b4d7be68dfca5c9feba9eefaba73678a3406c8adc7482960cd70a8237f5e1a04` · propuesta: `0c19dc58717cea3d43dffadcc2e7d9e3f8aa7e8eef4435a3a4e9f0a010d5f924`

## MAN-GSI-P19-046

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta y cuatro alternativas plausibles, clave B; aclarar familias de escenario frente a arquitectura de cómputo.

### Antes

¿Qué significa eMBB en 5G?

- A. Ultra-Reliable Low-Latency Communications, orientado a comunicaciones críticas con baja latencia y alta fiabilidad.
- B. Enhanced Mobile Broadband, orientado a banda ancha móvil de alta capacidad. **(correcta)**
- C. Massive Machine Type Communications, concebido para una gran densidad de dispositivos con tráfico reducido.
- D. Una plataforma de edge computing que ejecuta aplicaciones cerca del usuario, no una familia de servicio radio 5G.

Explicación: eMBB es una de las familias de casos de uso clásicas de 5G.

### Propuesta

¿Qué significa eMBB en 5G?

- A. Ultra-Reliable Low-Latency Communications, orientado a comunicaciones críticas con baja latencia y alta fiabilidad.
- B. Enhanced Mobile Broadband, orientado a banda ancha móvil de alta capacidad. **(correcta)**
- C. Massive Machine Type Communications, concebido para una gran densidad de dispositivos con tráfico reducido.
- D. Una plataforma de edge computing que ejecuta aplicaciones cerca del usuario, no una familia de servicio radio 5G.

Explicación: eMBB significa Enhanced Mobile Broadband y agrupa escenarios de banda ancha móvil mejorada, como acceso a contenidos multimedia y servicios con elevada demanda de capacidad. URLLC y mMTC destacan otras necesidades, mientras MEC acerca procesamiento al borde. Las familias orientan requisitos: no garantizan una tasa o latencia concreta en cualquier red y pueden coexistir en una solución.

- Error A: Las comunicaciones críticas de gran fiabilidad y baja latencia corresponden a URLLC, no al significado de eMBB.
- Error C: La conectividad masiva de máquinas con pequeños volúmenes de datos caracteriza mMTC, una familia distinta de banda ancha mejorada.
- Error D: MEC trata ubicación y acceso a capacidad de proceso en el borde; puede apoyar servicios, pero no desarrolla el acrónimo eMBB.

- [ITU-R M.2083-0: IMT Vision – Framework and overall objectives](https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.2083-0-201509-I!!PDF-E.pdf) · Anexo §4 Usage scenarios, páginas impresas11–12/PDF13–14 y figura2: eMBB, URLLC, mMTC; modularidad y diversidad de requisitos · versión: 09/2015, apartados seleccionados comprobados el04-11-2026. Marco de escenarios IMT-2020, no garantía de prestaciones de cualquier red5G; fuente histórica de clasificación, sin confundir con IMT-2030. · comprobado: 2026-11-04

Partida: `13172ee41ea152c3440447ba14f8e36a5e1e1e02261f5dc70b9877991f7a62de` · propuesta: `b26e7dd75ceb75010d455287362dfea520c2b09ba15d5ac29ec75be339e55f78`

## MAN-GSI-P19-048

Decisión: pending_review · acción: revise.

Motivo: Conservar significado mMTC y clave A; caso de muchos sensores con poco tráfico, sin garantizar batería o capacidad por etiqueta.

### Antes

¿Qué significa mMTC?

- A. Massive Machine-Type Communications, orientado a gran densidad de dispositivos/IoT. **(correcta)**
- B. Enhanced Mobile Broadband, orientado a proporcionar banda ancha móvil de gran capacidad y altas tasas de datos.
- C. Ultra-Reliable Low-Latency Communications, destinado a comunicaciones críticas con baja latencia y alta fiabilidad.
- D. Multi-access Edge Computing, que acerca capacidad de proceso y servicios al borde de la red para reducir latencia.

Explicación: mMTC se asocia a conectividad masiva de dispositivos con perfiles de consumo/carga específicos.

### Propuesta

Muchos sensores envían pequeños mensajes periódicos y no exigen latencia crítica. ¿Qué significa mMTC, el escenario que mejor refleja esa necesidad predominante?

- A. Massive Machine-Type Communications: conexión masiva de dispositivos de tráfico reducido. **(correcta)**
- B. Enhanced Mobile Broadband: banda ancha con elevado caudal por usuario.
- C. Ultra-Reliable Low-Latency Communications: tráfico crítico de muy baja latencia.
- D. Multi-access Edge Computing: ejecución de aplicaciones cerca del acceso.

Explicación: mMTC identifica Massive Machine-Type Communications. En el caso destacan muchos dispositivos con mensajes pequeños y sin plazos críticos, perfil característico de conectividad masiva de máquinas. eMBB prioriza banda ancha y URLLC requisitos exigentes de fiabilidad y latencia. MEC describe dónde acercar procesamiento; no es otra expansión del acrónimo mMTC ni garantiza por sí solo la conectividad radio.

- Error B: La banda ancha de alto caudal caracteriza eMBB; no es el requisito dominante de los pequeños mensajes periódicos descritos.
- Error C: URLLC se orienta a requisitos estrictos de fiabilidad y latencia; el caso excluye ese plazo crítico como necesidad principal.
- Error D: MEC acerca ejecución y servicios al borde, pero no denomina el escenario radio de conexión masiva de máquinas.

- [ITU-R M.2083-0: IMT Vision – Framework and overall objectives](https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.2083-0-201509-I!!PDF-E.pdf) · Anexo §4 Usage scenarios, páginas impresas11–12/PDF13–14 y figura2: eMBB, URLLC, mMTC; modularidad y diversidad de requisitos · versión: 09/2015, apartados seleccionados comprobados el04-11-2026. Marco de escenarios IMT-2020, no garantía de prestaciones de cualquier red5G; fuente histórica de clasificación, sin confundir con IMT-2030. · comprobado: 2026-11-04

Partida: `0b0d76946d2951baf1d581054a292357e1ebb9d1fbf69cf3d0dc65e08e56f40e` · propuesta: `0a3bbdac164c34cbbaff6432e800bb22d08fcdb4f004dbd1f1fbb4ee7104215d`

## MAN-GSI-P19-049

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, correcta D e inicioRelease18; distractores cercanos de releases en lugar de Wi-Fi o incompatibilidad6G.

### Antes

¿Qué es 5G-Advanced?

- A. La primera especificación oficial de 6G, incompatible con NR y separada de la evolución de las releases de 5G.
- B. El despliegue 5G NSA que combina NR con LTE/EPC, con independencia de las funciones incorporadas por Release 18.
- C. Una evolución del estándar Wi-Fi para redes locales que utiliza numeración de releases coordinada con 3GPP.
- D. La evolución de 5G cuya primera release 3GPP es Release 18. **(correcta)**

Explicación: 3GPP identifica Release 18 como la primera release de 5G-Advanced.

### Propuesta

¿Qué es 5G-Advanced?

- A. La etapa inicial de NR de Release 15, previa a posteriores ampliaciones 5G.
- B. La ampliación de usos 5G de Release 17, anterior al comienzo de 5G-Advanced.
- C. La evolución de 5G cuyo inicio se sitúa por primera vez en Release 19.
- D. La evolución de 5G cuya primera release 3GPP es Release 18. **(correcta)**

Explicación: 5G-Advanced designa una evolución dentro de 5G cuyo primer conjunto de especificaciones 3GPP corresponde a Release 18. No es una nueva interfaz Wi-Fi ni equivale a 6G. Releases anteriores ya desarrollaban 5G y las posteriores pueden continuar su evolución; no debe confundirse el comienzo de esta etapa con toda la trayectoria de NR o con la existencia de un despliegue comercial concreto.

- Error A: Release 15 marca la etapa inicial de especificaciones 5G; no el comienzo posterior de la denominación 5G-Advanced.
- Error B: Release 17 amplía 5G, pero precede al primer conjunto identificado como 5G-Advanced, que es Release 18.
- Error C: Release 19 continúa el desarrollo de 5G-Advanced; no es la primera release que inaugura esa denominación.

- [Nokia:5G-Advanced standards](https://www.nokia.com/standardization/technology-standards/5G-advanced/) · What is5G-Advanced?: Release18 primera release de5G-Advanced; The stepping stone to6G · versión: HTML comprobado el04-11-2026, fuente de participante en normalización. Solo clasificación histórica estable; se excluyen previsiones antiguas sobre Release19, últimas releases y calendario comercial6G. · comprobado: 2026-11-04
- [ETSI/3GPP Organizational Partners:3GPP Commits to Develop6G Specifications](https://www.etsi.org/newsroom/news/2307-3gpp-commits-to-develop-6g-specifications/?highlight=WyJ0aGU1ZyJd) · Comunicado conjunto04-12-2023: Release18/19 relacionadas con5G-Advanced, planificación separada de6G · versión: Comunicado histórico HTML comprobado el04-11-2026. Distingue evolución5G y nueva generación; sus planes de2023 no describen el estado actual o fecha garantizada de6G. · comprobado: 2026-11-04

Partida: `3c33983343f15c59800e25c5759fd397862d8203ab958813ac299000fc02eb98` · propuesta: `df4a0c7df417ad0c6f4c303d2735a63dbf937ee7467631a2b4096a4a4824440b`

## MAN-GSI-P19-050

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción5G-Advanced/6G y clave D; cuatro clasificaciones comparables sin patrón Sí/Sí/No/No.

### Antes

¿Release 18 equivale a 6G?

- A. Sí; constituye la primera especificación completa de 6G y deja de formar parte de la evolución normativa de 5G.
- B. Sí; sustituye New Radio por una interfaz radio incompatible concebida exclusivamente para la siguiente generación.
- C. No pertenece a 5G porque Release 18 es una versión del estándar Wi-Fi destinada a redes locales inalámbricas.
- D. No; es la primera release de 5G-Advanced, una evolución de 5G. **(correcta)**

Explicación: No debe confundirse evolución avanzada de 5G con una generación 6G.

### Propuesta

¿Cómo se clasifica Release 18 de 3GPP respecto a 5G-Advanced y a la generación 6G?

- A. Es la primera release de 6G y sustituye las especificaciones de NR.
- B. Es la etapa inicial de 5G previa a la aparición de NR y 5G Core.
- C. Es la evolución 5G que precede al inicio de la etapa 5G-Advanced.
- D. Es la primera release de 5G-Advanced, una evolución dentro de 5G. **(correcta)**

Explicación: Release 18 pertenece a 5G y abre la etapa 5G-Advanced; no constituye por esa denominación una generación 6G. El número de release indica evolución del conjunto de especificaciones y no se traduce directamente a un número de generación móvil. Distinguir ambas clasificaciones evita deducir una nueva generación de un cambio de release o de una etiqueta comercial.

- Error A: La primera release de 5G-Advanced continúa 5G; no es una especificación inicial de 6G que sustituya NR.
- Error B: NR y las primeras especificaciones del sistema 5G son anteriores a Release 18; esta no inaugura la etapa inicial de 5G.
- Error C: Release 18 inicia la denominación 5G-Advanced; situarla antes de su comienzo confunde la frontera entre etapas.

- [Nokia:5G-Advanced standards](https://www.nokia.com/standardization/technology-standards/5G-advanced/) · What is5G-Advanced?: Release18 primera release de5G-Advanced; The stepping stone to6G · versión: HTML comprobado el04-11-2026, fuente de participante en normalización. Solo clasificación histórica estable; se excluyen previsiones antiguas sobre Release19, últimas releases y calendario comercial6G. · comprobado: 2026-11-04
- [ETSI/3GPP Organizational Partners:3GPP Commits to Develop6G Specifications](https://www.etsi.org/newsroom/news/2307-3gpp-commits-to-develop-6g-specifications/?highlight=WyJ0aGU1ZyJd) · Comunicado conjunto04-12-2023: Release18/19 relacionadas con5G-Advanced, planificación separada de6G · versión: Comunicado histórico HTML comprobado el04-11-2026. Distingue evolución5G y nueva generación; sus planes de2023 no describen el estado actual o fecha garantizada de6G. · comprobado: 2026-11-04

Partida: `6a64f4a15f998e89f0056fa7b1ee07db5e4ff335bad2f193d506d32b2c56fdb7` · propuesta: `ad91ce96a487103fbf7f92b97269b27ce95d631c0de07733e092d12c6f2eb96d`

## MAN-GSI-P19-051

Decisión: pending_review · acción: revise.

Motivo: Conservar separación RAN/core y clave C; retirar inclusión informal del UE dentro de la RAN y evitar reparto absoluto de movilidad.

### Antes

¿Qué separación conceptual existe en una red móvil?

- A. El acceso radio conserva perfiles de abonado y políticas, mientras el core programa recursos físicos de las celdas.
- B. El terminal y las estaciones forman parte del core, mientras autenticación y movilidad se delegan en Internet.
- C. Acceso radio (UE/celdas/estaciones) y core, que gestiona movilidad, sesión, autenticación y salida a servicios/datos. **(correcta)**
- D. Acceso y core son una única función lógica y la separación existente se limita a enlaces de subida y bajada.

Explicación: Separar RAN y core ayuda a entender evolución de generaciones y troubleshooting.

### Propuesta

¿Qué separación funcional distingue la red de acceso radio (RAN) del núcleo en una red móvil?

- A. La RAN conserva la suscripción y el núcleo programa los recursos físicos de cada celda.
- B. El terminal integra el núcleo y la estación delega autenticación y movilidad en Internet.
- C. La RAN gestiona el acceso radio y el núcleo funciones de movilidad, sesión y datos. **(correcta)**
- D. La RAN y el núcleo se distinguen por transportar subida y bajada, respectivamente.

Explicación: La RAN aporta el acceso radio y trata sus recursos; el núcleo incorpora funciones de autenticación, movilidad, sesiones y conexión con redes de datos. El UE es el extremo que accede por radio, no una estación de la RAN. Ambos dominios cooperan en movilidad y servicio: la separación funcional no significa que toda decisión de movilidad se tome exclusivamente en un único lado.

- Error A: Invierte responsabilidades: programar recursos radio corresponde a la RAN, mientras las funciones de suscripción y núcleo apoyan el servicio del abonado.
- Error B: El UE es un equipo de usuario, no el núcleo del operador; sus funciones de control no se delegan sin más en Internet.
- Error D: Tanto acceso como núcleo intervienen en comunicaciones de subida y bajada; la distinción es funcional, no una división por sentido.

- [ETSI TS138300: NR and NG-RAN Overall description, Stage2](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.08.00_60/ts_138300v180800p.pdf) · TS38.300 §4.1/4.2/4.4, figura4.1-1; §8.2 identidades; §9.2.1 reselección y §9.2.3.2 handover, figura9.2.3.2.1-1. PDF25–27/31/75/77–78/89–91. · versión: V18.8.0 (2026-02), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026 y figuras inspeccionadas en renders. No lectura íntegra de274 páginas ni última edición atribuida; UE extremo, RAN y5GC funciones separadas. · comprobado: 2026-11-04

Partida: `6f8e1e09a7a8406eeb78aa679317764243ce3f1ed9851f7b0ce2a85140ad6e46` · propuesta: `b0e92757123571e97311e22e7d8d49b9c01602390863e360a1755b0933c0e3cb`

## MAN-GSI-P19-052

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta D; distractores de estación, núcleo y módulo de identidad próximos a la arquitectura.

### Antes

¿Qué es el UE?

- A. El servidor de correo del operador.
- B. Una VLAN de voz.
- C. El controlador de una MCU.
- D. El equipo de usuario que se conecta a la red móvil. **(correcta)**

Explicación: UE es User Equipment, concepto básico de arquitectura celular.

### Propuesta

¿Qué es el UE?

- A. El nodo de acceso radio que atiende a los terminales de una celda.
- B. La función del núcleo que conecta las sesiones con redes de datos.
- C. El módulo de suscripción que conserva identidad y credenciales de acceso.
- D. El equipo de usuario que se conecta a la red móvil. **(correcta)**

Explicación: UE significa User Equipment y designa el equipo de usuario que accede a la red móvil, por ejemplo un teléfono o un equipo de datos celular. No se limita al teléfono de una persona: también puede ser un dispositivo conectado. Debe distinguirse de la estación radio, de las funciones del núcleo y del módulo de identidad que puede integrar el equipo.

- Error A: La estación de acceso es un nodo de la RAN que atiende al UE; ambos extremos de la interfaz radio no son el mismo papel.
- Error B: La conexión desde el núcleo hacia redes de datos es una función de red; no define el equipo que utiliza el servicio.
- Error C: El módulo de suscripción aporta identidad y credenciales al equipo, pero por sí solo no equivale al UE completo.

- [ETSI TS138300: NR and NG-RAN Overall description, Stage2](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.08.00_60/ts_138300v180800p.pdf) · TS38.300 §4.1/4.2/4.4, figura4.1-1; §8.2 identidades; §9.2.1 reselección y §9.2.3.2 handover, figura9.2.3.2.1-1. PDF25–27/31/75/77–78/89–91. · versión: V18.8.0 (2026-02), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026 y figuras inspeccionadas en renders. No lectura íntegra de274 páginas ni última edición atribuida; UE extremo, RAN y5GC funciones separadas. · comprobado: 2026-11-04
- [Samsung Research: eSIM and the Latest eSIM V3.0 Release](https://research.samsung.com/blog/eSIM-and-the-Latest-eSIM-V3-0-Release) · What is eSIM?: almacenamiento seguro de datos de suscripción y credenciales; perfil descargable mediante SM-DP+; gestión de perfiles · versión: Explicación técnica del fabricante y participante, HTML comprobado el04-11-2026. Solo función y perfil de eSIM de consumo, sin declarar v3.0 la última versión actual, universalizar factor de forma o confundir SM-DP+ con SM-SR de M2M. · comprobado: 2026-11-04

Partida: `36cb2225e214b2d3e89fba24b871e99d919326af2a0ea42ab16d551e9cffe896` · propuesta: `bd9cb9794574b8a0158035d8b2732fbeb25c6cb2108471c7383f2ad0ed1b54e7`

## MAN-GSI-P19-053

Decisión: pending_review · acción: revise.

Motivo: Conservar celda como unidad de cobertura/acceso y clave D; eliminar distractor sector potencialmente solapado y evitar equivalencia sitio/celda.

### Antes

¿Qué es una celda en comunicaciones móviles?

- A. Una agrupación de celdas utilizada para gestionar movilidad, localización y paging sin actualizar cada cambio individual.
- B. Una porción direccional de cobertura asociada a una antena o panel dentro de un emplazamiento radio.
- C. Una frecuencia portadora o canal radio sobre el que se transmiten señales dentro del espectro asignado.
- D. Un área/recursos de cobertura radio servidos por infraestructura de acceso, con reutilización y planificación de radio. **(correcta)**

Explicación: Las redes celulares organizan cobertura/capacidad mediante celdas y recursos radio.

### Propuesta

¿Qué es una celda en comunicaciones móviles?

- A. Una agrupación de zonas radio administrada como unidad de seguimiento y paging.
- B. El conjunto físico de mástiles, antenas y equipos instalado en un emplazamiento.
- C. Una banda de frecuencias licenciada al operador para desplegar su red móvil.
- D. Una unidad de acceso radio con identidad y recursos que presta cobertura a los UE. **(correcta)**

Explicación: Una celda es una unidad de acceso radio con identidad y recursos asociados que permite prestar cobertura y servicio a los equipos de usuario. No equivale necesariamente a todo un emplazamiento, a un sector de antena o a la banda licenciada. Varias celdas pueden coexistir o solaparse; sus identidades y la agrupación para seguimiento se distinguen en la arquitectura y gestión de movilidad.

- Error A: La agrupación para seguimiento y paging es una unidad de gestión de movilidad de ámbito distinto; no define una celda individual.
- Error B: Un emplazamiento es infraestructura física y puede atender varias celdas; no hay equivalencia obligatoria entre sitio y celda.
- Error C: La banda licenciada es un recurso espectral utilizable por muchas celdas y no identifica una unidad concreta de acceso.

- [ETSI TS138300: NR and NG-RAN Overall description, Stage2](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.08.00_60/ts_138300v180800p.pdf) · TS38.300 §4.1/4.2/4.4, figura4.1-1; §8.2 identidades; §9.2.1 reselección y §9.2.3.2 handover, figura9.2.3.2.1-1. PDF25–27/31/75/77–78/89–91. · versión: V18.8.0 (2026-02), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026 y figuras inspeccionadas en renders. No lectura íntegra de274 páginas ni última edición atribuida; UE extremo, RAN y5GC funciones separadas. · comprobado: 2026-11-04

Partida: `e3cfc781761b8e645af6c57826b79308abc0c13f30bee6e40a715cc958bfa3b3` · propuesta: `9a00f39f6fd2d7e21aa5816fec6b24b12551c62a7d50f18f452fdd06c5172397`

## MAN-GSI-P19-054

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa bien construida y clave C; explicar continuidad como objetivo sin prometer interrupción cero.

### Antes

¿Qué es handover?

- A. El registro inicial del terminal en la red para autenticar al abonado y establecer su contexto de movilidad.
- B. La selección o reselección de una celda por un terminal en reposo, sin continuidad de una sesión conectada.
- C. El procedimiento para mantener continuidad de servicio/sesión al pasar entre celdas o accesos según tecnología. **(correcta)**
- D. La reasignación de una sesión de datos a otra función del core manteniendo el mismo acceso radio.

Explicación: La movilidad requiere transferir la conexión sin interrumpir innecesariamente el servicio.

### Propuesta

¿Qué es handover?

- A. El registro inicial del terminal en la red para autenticar al abonado y establecer su contexto de movilidad.
- B. La selección o reselección de una celda por un terminal en reposo, sin continuidad de una sesión conectada.
- C. El procedimiento para mantener continuidad de servicio/sesión al pasar entre celdas o accesos según tecnología. **(correcta)**
- D. La reasignación de una sesión de datos a otra función del core manteniendo el mismo acceso radio.

Explicación: El handover transfiere una conexión en servicio entre celdas o accesos para sostener su continuidad según la tecnología y el procedimiento admitidos. Se distingue de la selección o reselección autónoma en reposo y del registro inicial. Su objetivo no garantiza ausencia absoluta de interrupción: pueden existir retardo, fallos o recuperación, y el núcleo puede permanecer igual durante un cambio de celda.

- Error A: El registro inicial crea o actualiza el contexto de acceso y suscripción; no es por sí mismo la transferencia de una conexión en curso.
- Error B: Seleccionar o reseleccionar celda en reposo no es el procedimiento de transferencia de la conexión activa descrito como handover.
- Error D: Cambiar únicamente una función de datos del núcleo no define handover si no se transfiere la conexión entre celdas o accesos.

- [ETSI TS138300: NR and NG-RAN Overall description, Stage2](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.08.00_60/ts_138300v180800p.pdf) · TS38.300 §4.1/4.2/4.4, figura4.1-1; §8.2 identidades; §9.2.1 reselección y §9.2.3.2 handover, figura9.2.3.2.1-1. PDF25–27/31/75/77–78/89–91. · versión: V18.8.0 (2026-02), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026 y figuras inspeccionadas en renders. No lectura íntegra de274 páginas ni última edición atribuida; UE extremo, RAN y5GC funciones separadas. · comprobado: 2026-11-04

Partida: `dadba4d6c10d9fd09da55f3b79108f532b7f53ee6d7b4f8ab355b7729321c30a` · propuesta: `595e92f790c96394ffbfce7f287d75591a5e2b2db224cb49bea081dba0d93948`

## MAN-GSI-P19-055

Decisión: pending_review · acción: revise.

Motivo: Conservar correcta C y función SIM/eSIM; caso de aprovisionamiento mantiene identidad y credenciales sin convertirlo en arquitectura M2M.

### Antes

¿Qué función cumple SIM/eSIM?

- A. Sustituir el cifrado del sistema operativo y proteger por sí sola todos los datos, aplicaciones y archivos almacenados en el dispositivo.
- B. Mejorar físicamente la ganancia y la cobertura de la antena al adaptar de forma dinámica sus elementos radiantes a la red disponible.
- C. Alojar/gestionar identidad y credenciales de suscripción para autenticación y acceso a la red. **(correcta)**
- D. Actuar como servidor TURN para retransmitir el tráfico multimedia cuando los participantes no pueden establecer conectividad directa.

Explicación: eSIM cambia el modelo de aprovisionamiento, no elimina identidad ni autenticación de red.

### Propuesta

Un usuario activa un perfil eSIM descargado en lugar de insertar una tarjeta SIM. ¿Qué función de suscripción conserva ese perfil?

- A. Alojar las muestras de voz RTP y decidir el codec utilizado en cada llamada.
- B. Asignar recursos físicos de antena a cada terminal durante su transmisión.
- C. Alojar/gestionar identidad y credenciales de suscripción para autenticación y acceso a la red. **(correcta)**
- D. Encaminar los paquetes de datos del abonado desde el núcleo hacia Internet.

Explicación: SIM y los perfiles habilitados en eSIM aportan datos de identidad y credenciales de suscripción utilizados para autenticación y acceso móvil. La descarga del perfil modifica el aprovisionamiento, no elimina esa función de seguridad. No debe confundirse el módulo o perfil con todo el terminal ni con las funciones radio o de encaminamiento del operador. Su protección tampoco cifra por sí sola todos los datos del dispositivo.

- Error A: Las muestras de voz y su codificación se tratan en la comunicación multimedia; no son la finalidad del perfil de suscripción.
- Error B: Programar recursos físicos radio corresponde a la infraestructura de acceso, no al módulo que aloja credenciales del abonado.
- Error D: Encaminar tráfico entre núcleo y redes de datos corresponde a funciones de red; el perfil no actúa como pasarela de paquetes.

- [Samsung Research: eSIM and the Latest eSIM V3.0 Release](https://research.samsung.com/blog/eSIM-and-the-Latest-eSIM-V3-0-Release) · What is eSIM?: almacenamiento seguro de datos de suscripción y credenciales; perfil descargable mediante SM-DP+; gestión de perfiles · versión: Explicación técnica del fabricante y participante, HTML comprobado el04-11-2026. Solo función y perfil de eSIM de consumo, sin declarar v3.0 la última versión actual, universalizar factor de forma o confundir SM-DP+ con SM-SR de M2M. · comprobado: 2026-11-04
- [ETSI TS138300: NR and NG-RAN Overall description, Stage2](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.08.00_60/ts_138300v180800p.pdf) · TS38.300 §4.1/4.2/4.4, figura4.1-1; §8.2 identidades; §9.2.1 reselección y §9.2.3.2 handover, figura9.2.3.2.1-1. PDF25–27/31/75/77–78/89–91. · versión: V18.8.0 (2026-02), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026 y figuras inspeccionadas en renders. No lectura íntegra de274 páginas ni última edición atribuida; UE extremo, RAN y5GC funciones separadas. · comprobado: 2026-11-04

Partida: `6f5bd41c1e263f1e82a69e2adc9fe43c0ce846a44f840aa36fb15680af699da4` · propuesta: `d34b490f5e92b464200f842cef49e42a7442bc894b53f4263dd16f641616ab7b`
