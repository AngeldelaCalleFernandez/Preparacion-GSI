# GSI-EDITORIAL-089 — revisión propuesta

Preparado: 2026-11-04. Preguntas: 2.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `3de7ab3fbcf75d00066b8281ef26ae33a9d557bd84ac0901ae5b363df6ec932c`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P19-159

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa de diagnóstico y claveA; explicar correlación temporal y alcance parcial de cada fuente, sin imponerSBC en toda arquitectura.

### Antes

¿Qué conjunto de señales permite diagnosticar una mala experiencia de comunicación extremo a extremo?

- A. Métricas de endpoint, RTP/RTCP/WebRTC, LAN/WLAN, WAN/Internet, SBC/plataforma y servicio, correlacionadas temporalmente. **(correcta)**
- B. Uso de CPU, memoria y dispositivos del endpoint, sin relacionarlo con transporte, acceso, plataforma ni servicio.
- C. Latencia de un ping al gateway local, sin métricas RTP, pérdida, jitter, WAN o estado de los participantes remotos.
- D. Logs de registro de la plataforma y número de usuarios conectados, sin evidencia temporal de endpoints o red.

Explicación: Un problema de voz/vídeo puede originarse en múltiples capas; la correlación reduce diagnósticos por intuición.

### Propuesta

¿Qué conjunto de señales permite diagnosticar una mala experiencia de comunicación extremo a extremo?

- A. Métricas de endpoint, RTP/RTCP/WebRTC, LAN/WLAN, WAN/Internet, SBC/plataforma y servicio, correlacionadas temporalmente. **(correcta)**
- B. Uso de CPU, memoria y dispositivos del endpoint, sin relacionarlo con transporte, acceso, plataforma ni servicio.
- C. Latencia de un ping al gateway local, sin métricas RTP, pérdida, jitter, WAN o estado de los participantes remotos.
- D. Logs de registro de la plataforma y número de usuarios conectados, sin evidencia temporal de endpoints o red.

Explicación: Una experiencia de comunicación puede degradarse en captura y procesamiento del terminal, en acceso local, en la ruta de red o en plataformas y servicios. Correlacionar tiempos de fallo con métricas de esos tramos permite contrastar hipótesis y localizar mejor la causa. Las estadísticas de medios complementan logs y medidas de red. Deben usarse los componentes que realmente existan: no toda llamada atraviesa un SBC y una medida aislada de CPU o ping no describe toda la experiencia.

- Error B: Los recursos del endpoint ayudan al diagnóstico, pero sin relacionarlos con medios, acceso y plataforma no se distinguen bien causas externas o compartidas.
- Error C: El ping al gateway local solo observa parte del trayecto y un tipo de intercambio; no representa necesariamente transporte de medios o experiencia de participantes remotos.
- Error D: Registro y número de conexiones informan sobre la plataforma, pero sin contexto temporal de red y terminales no explican la entrega y reproducción de medios.

- [Google SRE: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) · Definitions; Black-box versus white-box; The Four Golden Signals: latencia,tráfico,errores,saturación y experiencia de servicio · versión: Capítulo6 del libroSRE, HTML comprobado el04-11-2026. Principios de monitorización, no lista normativa de contadores celulares o prueba de disponibilidad de una sede. Se complementa con arquitectura/rendimientoLTE y privacidad de telemetría. · comprobado: 2026-11-04
- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04
- [W3C: Identifiers for WebRTC Statistics API](https://www.w3.org/TR/webrtc-stats/) · §1 Introduction; §8.4 RTCReceivedRtpStreamStats; §8.5 RTCInboundRtpStreamStats: packetsLost,jitter,frames,bytes y descarte de buffer · versión: Candidate Recommendation Draft25-09-2025, trabajo en curso, comprobado04-11-2026. Ejemplo primario de métricas y unidades, no norma final, soporte uniforme o API deMOS. Se distingue paquetes perdidos de descartados para reproducción. · comprobado: 2026-11-04
- [IETF RFC5481: Packet Delay Variation Applicability Statement](https://www.rfc-editor.org/rfc/rfc5481.html) · §1 Introduction y §1.2: delay variation,IPDV/PDV, retardo y umbral de pérdida · versión: Informational, marzo2009, HTML comprobado04-11-2026. Distingue familia de métricas, no una fórmula universal dejitter ni equivalencia exacta conRTT o intervalo bruto de recepción. · comprobado: 2026-11-04
- [IETF: RFC7005, RTCP XR Report Block for De-Jitter Buffer Metric Reporting](https://www.rfc-editor.org/rfc/rfc7005.html) · §3 De-Jitter Buffer Operation; §3.2 fixed y §3.3 adaptive: retención, reproducción y descartes · versión: Septiembre de 2013, HTML comprobado el 04-11-2026. Compromiso de variación/retardo; no corrige pérdidas físicas ni autoriza aumentar buffer sin límite. · comprobado: 2026-11-04
- [IETF: RFC 5853, Requirements from SIP Session Border Controller Deployments](https://www.rfc-editor.org/rfc/rfc5853.html) · §2 Background; §3.1 topology hiding; §3.2 media management; §3.3 capability mismatches · versión: Informational, abril de 2010, HTML comprobado el 04-11-2026. Funciones observadas y problemas arquitectónicos, no paquete obligatorio de prestaciones o receta de seguridad. Puede intermediar medios según diseño; no todos los SBC hacen lo mismo. · comprobado: 2026-11-04

Partida: `cf6ba7290588256705e9b9c8a33e4a79c2bf6f38a296853c0484e31b0b0146bb` · propuesta: `5339a4dd711be68b8d0d50a25adec8009e81dfbad612958d0ddd6de98d243b75`

## MAN-GSI-P19-160

Decisión: pending_review · acción: revise.

Motivo: Conservar integración de arquitectura, movilidad, conferencia y operación y claveB; caso de diseño corporativo con cuatro planes plausibles de alcance comparable, sin producto único o obligatoriedad de toda tecnología.

### Antes

Caso final: se quiere cerrar IV.14–IV.16 con una arquitectura corporativa moderna. ¿Qué enfoque es más completo?

- A. Elegir un producto único de comunicaciones y asumir que reemplaza diseño WAN/LAN, seguridad, UEM, capacidad, continuidad y operación.
- B. Diseñar UC/IMS-SIP donde aplique, UEM y conectividad móvil, videoconferencia WebRTC/SIP, QoS/capacidad, salas, seguridad, monitorización, redundancia y casos de interoperabilidad. **(correcta)**
- C. Estudiar definiciones de IMS, 5G y WebRTC sin dimensionamiento, flujos, controles de endpoint ni pruebas de interoperabilidad reales.
- D. Sustituir toda conectividad fija por 5G y considerar innecesarios QoS, SBC, gestión de terminales, monitorización y redundancia.

Explicación: La respuesta integra arquitectura, movilidad, medios, calidad, endpoint, seguridad y operación de los tres epígrafes.

### Propuesta

Un organismo integra telefonía, móviles gestionados y salas con usuarios remotos. ¿Qué enfoque cubre mejor el diseño y su operación?

- A. Centralizar telefonía y codecs, dando por cubiertos con ello movilidad, salas, permisos y operación de los demás servicios.
- B. Coordinar flujos y plataformas, endpoints e identidad, acceso y capacidad, salas, seguridad, continuidad e interoperabilidad probada. **(correcta)**
- C. Desplegar movilidad y UEM, aceptando red fija y conferencia sin contrastar flujos, recursos o compatibilidad entre sus componentes.
- D. Contratar conferencia cloud, considerando suficiente su SLA para capacidad de acceso, endpoints y continuidad de la sede.

Explicación: El diseño integrado relaciona flujos y servicios con identidad, endpoints, conectividad, capacidad, condiciones de sala y operación segura. Deben contrastarse continuidad e interoperabilidad en los escenarios relevantes, además de gestionar cambios y bajas. UC, SIP/IMS, UEM o WebRTC pueden encajar según requisitos; ninguna etiqueta o compra sustituye validar dependencias. Integrar no exige una única marca, todas esas tecnologías en cualquier sede o idénticos controles en cada recurso.

- Error A: Centralizar telefonía y formatos puede simplificar una parte, pero no demuestra por sí solo gestión de móviles, salas, accesos o ciclo de vida del resto.
- Error C: Movilidad y UEM son piezas útiles; dar por válidos sin contraste los flujos y recursos de red y conferencia deja dependencias e interoperabilidad sin verificar.
- Error D: El SLA del servicio cloud no demuestra capacidad del acceso, postura de equipos o continuidad local; esas dependencias también forman parte del diseño.

- [NCSC: Secure communications principles](https://www.ncsc.gov.uk/guidance/secure-communication-principles) · Principios1: tránsito/participantes;3: autenticación/dispositivo;4: auditoría;5: administración/ciclo de vida;6:metadatos;7:proveedor/datos · versión: HTML público comprobado04-11-2026. Guía británica para evaluar servicios, no obligación normativa española o garantía por una función. Auditoría/retención y permisos tienen alcance necesario,administración restringida y justificación. · comprobado: 2026-11-04
- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04
- [Microsoft Learn: What is Microsoft Intune?](https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune) · What Intune does; How Intune is used: MDM,MAM or both; How Intune works with Microsoft Entra · versión: HTML público comprobado el04-11-2026. Ejemplo primario de gestión dispositivo/aplicaciones e identidad; admite plataformas de escritorio. No se prescribe cloud, producto, licencias o un modo de control idéntico para toda inscripción. · comprobado: 2026-11-04
- [NCSC CAF B5: Resilient networks and systems](https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems) · Guidance: Capacity; Diversity and dependencies; Physical Resilience: capacidad, dependencias y alternativas útiles · versión: HTML comprobado el04-11-2026. Guía británica aplicada como criterio técnico, sin fuerza normativa AGE o garantía de continuidad por contratar dos operadores. · comprobado: 2026-11-04
- [IETF RFC7667: RTP Topologies](https://www.rfc-editor.org/rfc/rfc7667.html) · §3.6.1 Media-Mixing Mixer; §3.7 Selective Forwarding Middlebox, especialmente distribución y composición en cliente · versión: Informational, noviembre2015, HTML comprobado04-11-2026. MCU clásica de composición frente a reenvío selectivoSFU/SFM; no todas lasMCU son mezcladores ni todo productoSFU excluye módulos adicionales. Coste,retardo y escala dependen del diseño. · comprobado: 2026-11-04
- [RFC4123: SIP-H.323 Interworking Requirements](https://www.rfc-editor.org/rfc/rfc4123.html) · §1 Introduction; §2 Definitions; §3 Functionality within the SIP-H.323 IWF · versión: Informational, julio2005, HTML comprobado04-11-2026. Documento histórico con notaIESG de cautela, usado para funciones de interworking, no receta actual de despliegue/seguridad; transcodificación es distinta de conversión de señalización. · comprobado: 2026-11-04
- [Microsoft Learn: What is Conditional Access?](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview) · Overview; Common signals; Common decisions: identidad,dispositivo,aplicación y riesgo para decidir acceso · versión: HTML público comprobado el04-11-2026. Ejemplo de motor de política; después de primer factor en este producto, sin igualarlo a cortafuegos universal o prometer prevención de todo ataque. · comprobado: 2026-11-04

Partida: `d1bc531d28034f518b49ee6a9fb75acb9e793da9aeddaa5bc4ea4b16448885b5` · propuesta: `db87fd7453e98c77a73d35db76e8d4411f7f3f92cb54afb72acbf30efa33e308`
