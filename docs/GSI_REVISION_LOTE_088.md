# GSI-EDITORIAL-088 — revisión propuesta

Preparado: 2026-11-04. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `fe7b494b919a4cc0465b430d0391449f945dfb8e4fb0217d6942e8667abc03c8`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P19-136

Decisión: pending_review · acción: revise.

Motivo: Conservar selección según uso/geometría y correctaB; comparar criterios parciales próximos, sin precio, marca o HDMI como distractores ajenos.

### Antes

¿Qué debe considerar la selección de pantalla/cámara en una sala?

- A. Escoger exclusivamente la mayor resolución disponible, sin relacionarla con distancia, tamaño, ancho de banda o legibilidad real.
- B. Tamaño/distancia, campo de visión, número de participantes, encuadre y legibilidad de contenido. **(correcta)**
- C. Mantener una única marca para todos los espacios, aunque cambien geometría, participantes, integración y condiciones de luz.
- D. Seleccionar por precio y versión del cable HDMI, tratándolo como criterio principal para encuadre, visión y experiencia remota.

Explicación: El equipamiento debe adaptarse a geometría y uso real de la sala.

### Propuesta

¿Qué debe considerar la selección de pantalla/cámara en una sala?

- A. Resolución del sensor y del panel, sin contrastar tamaño aparente o distancia de lectura.
- B. Tamaño/distancia, campo de visión, número de participantes, encuadre y legibilidad de contenido. **(correcta)**
- C. Campo de visión nominal, sin comprobar encuadre de participantes ni legibilidad del contenido.
- D. Diagonal y brillo de pantalla, sin evaluar geometría o capacidad de la cámara para la sala.

Explicación: Pantalla y cámara se seleccionan según el uso y la geometría de la sala: distancia y tamaño aparente, legibilidad del contenido, campo de visión y encuadre de las personas. Una cifra de resolución o una diagonal aislada no demuestra que todos vean y sean vistos con suficiente detalle. Deben contrastarse también condiciones físicas e integración; no hay una marca, tamaño o número de cámaras universal para cualquier sala.

- Error A: La resolución limita detalle, pero no determina por sí sola tamaño aparente o distancia adecuada para leer contenido en la pantalla.
- Error C: El campo de visión nominal ayuda a seleccionar cámara, pero sin comprobar encuadre y legibilidad no cubre la experiencia completa de participantes locales y remotos.
- Error D: Diagonal y brillo son características relevantes, pero no sustituyen comprobar relación con distancias, geometría y capacidad de captura de la cámara.

- [Microsoft Learn: Meeting room guidance for Teams](https://learn.microsoft.com/en-us/microsoftteams/rooms/room-planning-guidance) · Technology considerations &gt; Video: cobertura, campo de visión y encuadre; Display: distancia al asiento más lejano y legibilidad del contenido. · versión: Página actualizada el 05-03-2026. Se emplean criterios de selección y legibilidad; las dimensiones y configuraciones del fabricante son ejemplos. · comprobado: 2026-11-05

Partida: `9e12c113c791238cabfb70face3629df68a0a905f373874e8cee2699e274e359` · propuesta: `acaf173ab68f85c64f01fbb7a5ca0b19cc6dc07c937f5997ba4617d0169db602`

## MAN-GSI-P19-138

Decisión: pending_review · acción: revise.

Motivo: Conservar gobernanza de grabaciones y correctaC; tres controles parciales plausibles frente a ciclo de vida completo, sin exigir siempre consentimiento o plazo fijo.

### Antes

¿Qué debe definirse para grabaciones de reuniones?

- A. Guardar para siempre por defecto.
- B. Publicar automáticamente.
- C. Finalidad, permisos, ubicación, acceso, retención, protección y eliminación conforme a política/normativa. **(correcta)**
- D. No aplicar control de acceso porque ya estaban en una reunión.

Explicación: La grabación genera un nuevo activo de información con ciclo de vida propio.

### Propuesta

¿Qué debe definirse para grabaciones de reuniones?

- A. Cifrar durante la llamada y tratar esa protección como criterio suficiente para conservar toda la grabación.
- B. Fijar una cuota de almacenamiento sin establecer quién accede o para qué se conserva cada reunión.
- C. Finalidad, permisos, ubicación, acceso, retención, protección y eliminación conforme a política/normativa. **(correcta)**
- D. Dar por autorizados a ver el archivo a todos los invitados, sin revisar acceso ni plazo de conservación.

Explicación: La grabación genera información con su propio ciclo de vida. Hay que justificar su finalidad y tratamiento, informar cuando corresponda y definir permisos, ubicación, protección, plazos y retirada según contexto y normativa aplicable. Participar en la reunión no equivale a permiso ilimitado sobre el archivo. Cifrar el tránsito no determina por sí solo acceso posterior o conservación. No existe un plazo de borrado o una base jurídica única para todas las reuniones.

- Error A: El cifrado del transporte protege un trayecto; no define la necesidad de grabar, los permisos de reproducción o cuánto se conserva el archivo.
- Error B: Controlar volumen ayuda a operar almacenamiento, pero no sustituye finalidad, autorización, retención y protección de la información grabada.
- Error D: La invitación y la autorización de acceso al archivo tienen ámbitos distintos; deben definirse destinatarios, permisos y conservación según la finalidad.

- [BOE/DOUE: Reglamento(UE)2016/679, RGPD](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · RGPD artículos5.1a–c/e,13.1 y25.1–2 consultados en085;32.1–4 leído para088: seguridad proporcional al riesgo y verificación · versión: Texto originalDOUE04-05-2016 enBOE; consultas del04-11-2026 reutilizadas y ampliadas alart32. Sin revisión jurídica integral o dictamen sobre tratamiento concreto. No se exige siempre consentimiento,plazo único de borrado o grabar todas las sesiones; las excepciones de conservación necesitan finalidad y garantías aplicables. · comprobado: 2026-11-04
- [NCSC: Secure communications principles](https://www.ncsc.gov.uk/guidance/secure-communication-principles) · Principios1: tránsito/participantes;3: autenticación/dispositivo;4: auditoría;5: administración/ciclo de vida;6:metadatos;7:proveedor/datos · versión: HTML público comprobado04-11-2026. Guía británica para evaluar servicios, no obligación normativa española o garantía por una función. Auditoría/retención y permisos tienen alcance necesario,administración restringida y justificación. · comprobado: 2026-11-04

Partida: `a724e47687d6d9bf1cd4e2ad9637bc2d205c6fc0edd206dd94334f16ad8fb4ff` · propuesta: `8ccd6d694bf2ed1f559afe9df5d8b4f039e5723e388da16b50e6d29b7890349f`

## MAN-GSI-P19-139

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa de accesibilidad y claveB; distinguir experiencia en directo, documentos y plataforma sin certificar conformidad por una función.

### Antes

¿Qué medidas mejoran accesibilidad en videoconferencia?

- A. Aumentar resolución y bitrate de vídeo para mejorar la imagen, sin proporcionar subtítulos ni alternativas de participación.
- B. Subtitulado/transcripción, compatibilidad con ayudas, interfaces accesibles y alternativas de participación. **(correcta)**
- C. Exigir cámara y ratón para intervenir en la reunión, aunque la interfaz no pueda operarse mediante teclado o ayudas técnicas.
- D. Publicar la grabación después de la sesión sin transcripción, audiodescripción ni formato alternativo accesible.

Explicación: Accesibilidad debe considerarse en plataforma, contenido y experiencia de sala/remoto.

### Propuesta

¿Qué medidas mejoran accesibilidad en videoconferencia?

- A. Aumentar resolución y bitrate de vídeo para mejorar la imagen, sin proporcionar subtítulos ni alternativas de participación.
- B. Subtitulado/transcripción, compatibilidad con ayudas, interfaces accesibles y alternativas de participación. **(correcta)**
- C. Exigir cámara y ratón para intervenir en la reunión, aunque la interfaz no pueda operarse mediante teclado o ayudas técnicas.
- D. Publicar la grabación después de la sesión sin transcripción, audiodescripción ni formato alternativo accesible.

Explicación: La accesibilidad combina plataforma, contenidos y organización de la reunión. Incluye operación con teclado y ayudas técnicas, subtítulos o transcripción según el uso, materiales accesibles y vías alternativas de participación cuando se necesitan. Una transcripción posterior no sustituye toda intervención en directo, y el subtitulado automático puede requerir corrección. Aumentar calidad de imagen no resuelve por sí solo barreras auditivas, motoras o de interfaz.

- Error A: Más resolución o bitrate puede ayudar al detalle visual, pero no proporciona por sí solo subtítulos, compatibilidad con ayudas o formas accesibles de intervenir.
- Error C: Exigir cámara y ratón excluye a quienes utilizan teclado u otras ayudas; deben poder manejarse las funciones esenciales y ofrecerse alternativas adecuadas.
- Error D: Una grabación posterior sin alternativas accesibles no resuelve barreras durante la participación en directo ni garantiza acceso al contenido grabado.

- [W3C: Accessibility of Remote Meetings](https://www.w3.org/TR/remote-meetings/) · §3.1–3.3 selección/plataforma; §5.1 Organizing accessible remote meetings: captions,teclado,ayudas y métodos de conexión · versión: Group Note22-07-2022, trabajo en curso, HTML comprobado04-11-2026. Guía de organización/plataforma, no norma de conformidad o dictamen legal. Subtítulos automáticos requieren comprobar calidad; una transcripción posterior no sustituye toda participación en directo. · comprobado: 2026-11-04

Partida: `b0ccaab9b4aab7376704d9cf0f0c899459ea775680f0ad4c639f6b273445c1d7` · propuesta: `ed8911b45676da75eb767f69cc828c5dc030d8fbf37ad04123fcf86870f21468`

## MAN-GSI-P19-140

Decisión: pending_review · acción: revise.

Motivo: Conservar caso completo de cortes y correctaA; correlación red/medios/terminal sin diagnosticar una única causa desde el síntoma.

### Antes

Un servicio tiene capacidad suficiente pero usuarios reportan cortes breves y audio robotizado. ¿Qué conviene revisar primero?

- A. Pérdida, jitter, colas/congestión, Wi-Fi/radio y estadísticas RTP/RTCP, además de CPU del endpoint. **(correcta)**
- B. Utilización de CPU y memoria del endpoint, sin observar pérdida, jitter, radio, colas ni estadísticas de medios.
- C. Capacidad nominal del acceso y resultado de un test de velocidad, sin medir variación temporal ni congestión en la ruta.
- D. Lista de codecs negociados por la llamada, sin correlacionarla con transporte, Wi-Fi, plataforma o recursos del terminal.

Explicación: Calidad en tiempo real depende de continuidad de entrega, no solo del Mbps contratado.

### Propuesta

Un servicio tiene capacidad suficiente pero usuarios reportan cortes breves y audio robotizado. ¿Qué conviene revisar primero?

- A. Pérdida, jitter, colas/congestión, Wi-Fi/radio y estadísticas RTP/RTCP, además de CPU del endpoint. **(correcta)**
- B. Utilización de CPU y memoria del endpoint, sin observar pérdida, jitter, radio, colas ni estadísticas de medios.
- C. Capacidad nominal del acceso y resultado de un test de velocidad, sin medir variación temporal ni congestión en la ruta.
- D. Lista de codecs negociados por la llamada, sin correlacionarla con transporte, Wi-Fi, plataforma o recursos del terminal.

Explicación: La capacidad nominal suficiente no demuestra entrega regular. Pérdida, variación de retardo, colas, condiciones radio y recursos del terminal pueden producir cortes o audio degradado. Conviene correlacionar estadísticas de red y medios con el momento del fallo y CPU del endpoint. Son hipótesis de diagnóstico, no una causa única ya confirmada; el codec o la aplicación también pueden requerir revisión según la evidencia.

- Error B: Los recursos del terminal son útiles, pero el diagnóstico queda parcial si no se observan pérdidas, variación de retardo y recepción efectiva de medios.
- Error C: Una tasa nominal o un test aislado no muestra necesariamente interrupciones, colas o variación temporal que afecta a una conversación interactiva.
- Error D: Conocer codecs negociados ayuda a estudiar la sesión, pero no explica por sí solo cómo llegan los paquetes o si el terminal procesa los medios a tiempo.

- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04
- [W3C: Identifiers for WebRTC Statistics API](https://www.w3.org/TR/webrtc-stats/) · §1 Introduction; §8.4 RTCReceivedRtpStreamStats; §8.5 RTCInboundRtpStreamStats: packetsLost,jitter,frames,bytes y descarte de buffer · versión: Candidate Recommendation Draft25-09-2025, trabajo en curso, comprobado04-11-2026. Ejemplo primario de métricas y unidades, no norma final, soporte uniforme o API deMOS. Se distingue paquetes perdidos de descartados para reproducción. · comprobado: 2026-11-04
- [IETF RFC5481: Packet Delay Variation Applicability Statement](https://www.rfc-editor.org/rfc/rfc5481.html) · §1 Introduction y §1.2: delay variation,IPDV/PDV, retardo y umbral de pérdida · versión: Informational, marzo2009, HTML comprobado04-11-2026. Distingue familia de métricas, no una fórmula universal dejitter ni equivalencia exacta conRTT o intervalo bruto de recepción. · comprobado: 2026-11-04
- [IETF: RFC7005, RTCP XR Report Block for De-Jitter Buffer Metric Reporting](https://www.rfc-editor.org/rfc/rfc7005.html) · §3 De-Jitter Buffer Operation; §3.2 fixed y §3.3 adaptive: retención, reproducción y descartes · versión: Septiembre de 2013, HTML comprobado el 04-11-2026. Compromiso de variación/retardo; no corrige pérdidas físicas ni autoriza aumentar buffer sin límite. · comprobado: 2026-11-04

Partida: `7e16535b45575784838b4f9da9ed4b44bff5e0862d51aa4fe0b4b86331572618` · propuesta: `3d3995dde00c393ae50cd2a5b6f1a60c5342f9d087cf9b3d4e0025c3890d324d`

## MAN-GSI-P19-149

Decisión: pending_review · acción: revise.

Motivo: Conservar caso NAT y correctaD; distractores próximos de diagnóstico parcial, sinXML/BGP/MDM ajenos o causa única automática.

### Antes

Una sala usa WebRTC y falla solo desde ciertas redes con NAT restrictivo. ¿Qué arquitectura debe revisarse?

- A. XSD y namespaces.
- B. BGP del proveedor como única causa posible.
- C. MDM de la cámara exclusivamente.
- D. ICE y disponibilidad/configuración de STUN/TURN y reglas de firewall. **(correcta)**

Explicación: NAT traversal es una causa típica de fallos selectivos de WebRTC.

### Propuesta

Una sala usa WebRTC y falla solo desde ciertas redes con NAT restrictivo. ¿Qué arquitectura debe revisarse?

- A. El SDP y los codecs, sin examinar candidatos ni reachability.
- B. El servidor STUN, dando por hecho que nunca puede necesitarse un relay.
- C. El servidor SIP, como transporte obligatorio de medios WebRTC.
- D. ICE y disponibilidad/configuración de STUN/TURN y reglas de firewall. **(correcta)**

Explicación: Si falla solo en determinados accesos, conviene examinar candidatos y comprobaciones ICE, servidores STUN/TURN, credenciales, alcance de las reglas y política de conectividad. STUN ayuda a conocer mapeos y TURN aporta relay cuando se necesita una ruta de ese tipo. No se concluye que toda incidencia selectiva sea NAT: los registros y pares seleccionados deben contrastar la hipótesis antes de cambiar controles.

- Error A: La descripción y los formatos importan, pero omitir candidatos y conectividad deja sin estudiar la diferencia de acceso que caracteriza el caso.
- Error B: STUN no proporciona por sí solo relay de medios; algunas combinaciones de NAT o políticas requieren un candidato retransmitido accesible y autorizado.
- Error C: WebRTC no obliga a transportar medios mediante SIP; revisar solo ese servidor puede ignorar rutas ICE, relay y reglas efectivamente utilizadas.

- [IETF RFC8445: Interactive Connectivity Establishment](https://www.rfc-editor.org/rfc/rfc8445.html) · §1 Introduction; §2 Overview of ICE, candidatos y comprobaciones de pares; §4 Terminology · versión: Julio2018, sustituyeRFC5245, HTML comprobado04-11-2026. ICE utilizaSTUN yTURN; se contrastan candidatos host/server-reflexive/relayed sin prometer conectividad bajo cualquier política de red. · comprobado: 2026-11-04
- [IETF RFC8489: Session Traversal Utilities for NAT](https://www.rfc-editor.org/rfc/rfc8489.html) · Abstract; §1 Introduction; §2 Overview of Operation, Binding y dirección reflejada · versión: Febrero2020, sustituyeRFC5389, HTML comprobado04-11-2026. Herramienta para mapeos, comprobaciones y mantenimiento; no solución completa por sí sola ni relay de medios básico. Dirección observada respecto del servidor, no siempreIP pública única. · comprobado: 2026-11-04
- [IETF RFC8656: Traversal Using Relays around NAT](https://www.rfc-editor.org/rfc/rfc8656.html) · Abstract y §1 Introduction: servidor intermediario, dirección relayed y relación con ICE · versión: Febrero2020, sustituyeRFC5766/6156, HTML comprobado04-11-2026. Relay útil por restricciones de conectividad o política/privacidad; no garantía universal de paso o cifrado extremo a extremo por usar elrelay. · comprobado: 2026-11-04
- [W3C: WebRTC, Real-Time Communication in Browsers](https://www.w3.org/TR/webrtc/) · §4.2.2 RTCIceServer: URI/credenciales; §4.2.3 RTCIceTransportPolicy: relay/all y privacidad de direcciones · versión: Recommendation13-03-2025, consulta de086 ampliada el04-11-2026 a§4.2.2–3. relay permite solo candidatos relay yall permite tipos sujetos a política. No implica desactivar restricciones sin analizar finalidad o queTURN siempre tenga mayor retardo. · comprobado: 2026-11-04
- [IETF: RFC8866, Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866.html) · §1 descripción sin protocolo de transporte; §3.1 SIP y offer/answer; §2 Media Description · versión: Enero de 2021, HTML comprobado el 04-11-2026. Sustituye RFC4566. Describir parámetros no es transportar audio ni negociar de forma autónoma sin procedimientos de oferta/respuesta. · comprobado: 2026-11-04

Partida: `68d2524968490b08a9ab245ae580cee11e8ff9539922e25efc67742825024cbf` · propuesta: `b426a65fe531da8da6bc751586c2a7ce04d7c436c8bc98178c04072e4f2eb633`

## MAN-GSI-P19-150

Decisión: pending_review · acción: revise.

Motivo: Conservar coste/dependencia de TURN y correctaD; revisar selección respetando política relay y privacidad, sin afirmar orden universal o mayor latencia necesaria.

### Antes

Una plataforma WebRTC envía siempre todo por TURN aunque hay conectividad directa. ¿Qué consecuencia esperable tiene?

- A. Menor consumo en servidores porque TURN envía los medios directamente entre pares y no procesa el tráfico de la sesión.
- B. Selección automática de un camino entre pares, ya que el uso de TURN obliga a ICE a evitar cualquier relay disponible.
- C. Conversión del plano de medios RTP en señalización SIP, reduciendo así el número de flujos que atraviesan la plataforma.
- D. Mayor consumo de ancho de banda/coste y dependencia del relay; conviene revisar selección ICE. **(correcta)**

Explicación: TURN es robusto pero costoso; ICE intenta preferir caminos directos cuando funcionan.

### Propuesta

Una plataforma WebRTC envía siempre todo por TURN aunque hay conectividad directa. ¿Qué consecuencia esperable tiene?

- A. Menos tráfico en relay, porque TURN transforma automáticamente el par elegido en una ruta directa.
- B. La política de candidatos deja de importar, porque TURN impide a ICE considerar caminos directos.
- C. Los medios se recodifican en TURN, porque retransmitir paquetes exige cambiar antes su codec.
- D. Mayor consumo de ancho de banda/coste y dependencia del relay; conviene revisar selección ICE. **(correcta)**

Explicación: Enviar medios a través de un relay consume su capacidad y añade dependencia de ese servicio; puede aumentar costes respecto de una ruta directa comparable. Conviene revisar configuración y par seleccionado, pero el uso de TURN puede ser intencionado por privacidad o política: WebRTC admiteiceTransportPolicy relay. No debe desactivarse esa decisión solo porque exista conectividad directa, ni se afirma que todo camino retransmitido tenga mayor latencia.

- Error A: Si el par seleccionado usa TURN, los paquetes atraviesan el relay; no se convierten automáticamente en tráfico directo que elimine sus recursos de transporte.
- Error B: La política ICE condiciona candidatos permitidos;TURN aporta una ruta retransmitida, sin prohibir por sí mismo todos los demás tipos que la aplicación autorice.
- Error C: Retransmitir paquetes no requiere decodificar y recodificar el contenido audiovisual; transcodificación y relay son funciones distintas.

- [IETF RFC8656: Traversal Using Relays around NAT](https://www.rfc-editor.org/rfc/rfc8656.html) · Abstract y §1 Introduction: servidor intermediario, dirección relayed y relación con ICE · versión: Febrero2020, sustituyeRFC5766/6156, HTML comprobado04-11-2026. Relay útil por restricciones de conectividad o política/privacidad; no garantía universal de paso o cifrado extremo a extremo por usar elrelay. · comprobado: 2026-11-04
- [IETF RFC8445: Interactive Connectivity Establishment](https://www.rfc-editor.org/rfc/rfc8445.html) · §1 Introduction; §2 Overview of ICE, candidatos y comprobaciones de pares; §4 Terminology · versión: Julio2018, sustituyeRFC5245, HTML comprobado04-11-2026. ICE utilizaSTUN yTURN; se contrastan candidatos host/server-reflexive/relayed sin prometer conectividad bajo cualquier política de red. · comprobado: 2026-11-04
- [W3C: WebRTC, Real-Time Communication in Browsers](https://www.w3.org/TR/webrtc/) · §4.2.2 RTCIceServer: URI/credenciales; §4.2.3 RTCIceTransportPolicy: relay/all y privacidad de direcciones · versión: Recommendation13-03-2025, consulta de086 ampliada el04-11-2026 a§4.2.2–3. relay permite solo candidatos relay yall permite tipos sujetos a política. No implica desactivar restricciones sin analizar finalidad o queTURN siempre tenga mayor retardo. · comprobado: 2026-11-04

Partida: `f776bef540632bb0f8a5dd3a1d0453ded2d776562e1202ad643de1c0afe3828e` · propuesta: `10c937dbf8ad2554be218005df95af423723d03a1826db7e0aa0978de5a968a1`

## MAN-GSI-P19-151

Decisión: pending_review · acción: revise.

Motivo: Conservar caso de escalado y correctaA; comparar funciones cercanas de longitud similar, sin prometer que toda SFU soporte cien participantes.

### Antes

En una reunión de 100 participantes se quiere escalar sin mezclar todos los vídeos en servidor. ¿Qué arquitectura es candidata natural?

- A. SFU con selección/adaptación de streams, si terminales y producto lo soportan. **(correcta)**
- B. Una MCU que decodifique, mezcle y vuelva a codificar todos los vídeos para producir una composición común en el servidor.
- C. Una malla completa en la que cada uno de los cien clientes envíe un flujo independiente a todos los demás participantes.
- D. Un servidor TURN que retransmita paquetes por problemas de conectividad, tratándolo como solución de escalado y selección de vídeos.

Explicación: SFU evita transcodificación/mezcla total y es común en WebRTC a gran escala.

### Propuesta

En una reunión de 100 participantes se quiere escalar sin mezclar todos los vídeos en servidor. ¿Qué arquitectura es candidata natural?

- A. SFU con selección/adaptación de streams, si terminales y producto lo soportan. **(correcta)**
- B. MCU que mezcla todos los vídeos en servidor y recodifica una composición por receptor.
- C. Malla completa: cada participante envía su vídeo directamente a todos los demás.
- D. TURN usado como distribuidor de conferencia, sin selección de fuentes o capas.

Explicación: Una SFU es candidata para distribuir selectivamente fuentes o representaciones sin producir una mezcla completa de todos los vídeos en servidor. Eso desplaza recepción, decodificación y composición hacia clientes y requiere dimensionar red y procesamiento. El número cien es el escenario dado, no una frontera de escala garantizada. Soporte de terminales, selección, disposición de vídeos y producto condicionan la viabilidad.

- Error B: La MCU descrita realiza precisamente la mezcla y recodificación en servidor que el requisito quiere evitar, por lo que no encaja con ese objetivo.
- Error C: Una malla completa multiplica las conexiones y envíos entre cien participantes; puede exigir mucha subida y procesamiento y no es la candidata natural de distribución selectiva central.
- Error D: TURN aporta conectividad retransmitida, no selección de fuentes o capas por receptor; por sí solo no resuelve la arquitectura de escalado pedida.

- [IETF RFC7667: RTP Topologies](https://www.rfc-editor.org/rfc/rfc7667.html) · §3.6.1 Media-Mixing Mixer; §3.7 Selective Forwarding Middlebox, especialmente distribución y composición en cliente · versión: Informational, noviembre2015, HTML comprobado04-11-2026. MCU clásica de composición frente a reenvío selectivoSFU/SFM; no todas lasMCU son mezcladores ni todo productoSFU excluye módulos adicionales. Coste,retardo y escala dependen del diseño. · comprobado: 2026-11-04
- [IETF RFC8656: Traversal Using Relays around NAT](https://www.rfc-editor.org/rfc/rfc8656.html) · Abstract y §1 Introduction: servidor intermediario, dirección relayed y relación con ICE · versión: Febrero2020, sustituyeRFC5766/6156, HTML comprobado04-11-2026. Relay útil por restricciones de conectividad o política/privacidad; no garantía universal de paso o cifrado extremo a extremo por usar elrelay. · comprobado: 2026-11-04

Partida: `2c0416267c4713748452d0f5e738340f4d901fd384a409b5a54e264ebc7f31df` · propuesta: `7f38117dcce57a7129acd45dcbdd22967f2b78d147752054a4a32c4cbac67e06`

## MAN-GSI-P19-152

Decisión: pending_review · acción: revise.

Motivo: Conservar caso completo deinterop y claveB; distinguir traducción de señalización y transcodificación no siempre necesaria.

### Antes

Una plataforma debe soportar terminales antiguos H.323 y clientes modernos SIP/WebRTC. ¿Qué elemento/capacidad es clave?

- A. Un SBC que aplique políticas SIP en el borde, aunque no convierta la señalización H.323 ni resuelva diferencias de medios.
- B. Gateway/interworking adecuado entre protocolos y codecs, con pruebas de interoperabilidad. **(correcta)**
- C. Un transcodificador que adapte exclusivamente codecs de audio y vídeo, sin traducir protocolos ni funciones de llamada.
- D. Un reverse proxy HTTP para los clientes WebRTC, sin capacidad de interworking con terminales y señalización H.323.

Explicación: Interoperar implica señalización, medios, codecs, seguridad y funciones de llamada.

### Propuesta

Una plataforma debe soportar terminales antiguos H.323 y clientes modernos SIP/WebRTC. ¿Qué elemento/capacidad es clave?

- A. Un SBC que aplique políticas SIP en el borde, aunque no convierta la señalización H.323 ni resuelva diferencias de medios.
- B. Gateway/interworking adecuado entre protocolos y codecs, con pruebas de interoperabilidad. **(correcta)**
- C. Un transcodificador que adapte exclusivamente codecs de audio y vídeo, sin traducir protocolos ni funciones de llamada.
- D. Un reverse proxy HTTP para los clientes WebRTC, sin capacidad de interworking con terminales y señalización H.323.

Explicación: La interoperabilidad exige relacionar señalización y funciones de llamada, y comprobar negociación de medios, codecs y seguridad entre los extremos reales. Puede requerirgateway o función deinterworking, y transcodificación si no hay formato común. No siempre hay que recodificar: compartir codec no elimina por sí solo diferencias de señalización. Deben probarse escenarios y funciones relevantes en los terminales y productos utilizados.

- Error A: Aplicar políticas SIP en el borde no demuestra conversión deH.323 ni compatibilidad de medios; unSBC solo cubriría el caso si incorpora las funciones necesarias.
- Error C: Adaptar solo formatos de medios no traduce por sí mismo señalización, estados o funciones de llamada entre las arquitecturas descritas.
- Error D: Un proxy HTTP puede servir contenido o intermediar acceso web, pero no aporta por sí mismo interworking de señalizaciónH.323 y medios con los demás terminales.

- [RFC4123: SIP-H.323 Interworking Requirements](https://www.rfc-editor.org/rfc/rfc4123.html) · §1 Introduction; §2 Definitions; §3 Functionality within the SIP-H.323 IWF · versión: Informational, julio2005, HTML comprobado04-11-2026. Documento histórico con notaIESG de cautela, usado para funciones de interworking, no receta actual de despliegue/seguridad; transcodificación es distinta de conversión de señalización. · comprobado: 2026-11-04
- [ITU-T Recommendation H.323: Summary](https://www.itu.int/dms_pubrec/itu-t/rec/h/T-REC-H.323-202203-I!!SUM-HTM-E.htm) · Summary,párrafos1–3: entidades,multimedia sobre paquetes,ámbitos de red,configuraciones e interworking · versión: H.323(03/2022), resumenHTML comprobado04-11-2026; audio obligatorio y vídeo/datos opcionales en ese resumen. No lectura íntegra delPDF ni afirmar que la recomendación esté retirada por su presencia en terminales heredados. · comprobado: 2026-11-04
- [IETF RFC8825: Overview, Real-Time Protocols for Browser-Based Applications](https://www.rfc-editor.org/rfc/rfc8825.html) · §2.2 relaciónAPI/protocolo y endpoints; §3 Architecture and Functionality Groups, figuras1–2; §4–7 transporte, protección, formatos y gestión · versión: Enero2021, HTML comprobado04-11-2026. SeparaAPI, señalización de aplicación, transporte, formatos y presentación; servidor/función multipunto depende del diseño. No exige un codec o servicio de mezcla único. · comprobado: 2026-11-04

Partida: `5266da0d858fd92dbbbf22d5909c96474620db464e74165932c170507d5f9298` · propuesta: `fadb72c3438b4a089f36c0bafefc1ec55e4cfa29f0dd6f050b3883a03a8fa291`

## MAN-GSI-P19-153

Decisión: pending_review · acción: revise.

Motivo: Conservar cálculo completo30×2,5 y claveC; justificar todos los valores y distinguir tasa por sentido de suma de sentidos.

### Antes

Una sede tendrá 30 salas simultáneas a 2,5 Mb/s por sentido. ¿Qué carga base por sentido debe contemplar antes de margen?

- A. 12 Mb/s.
- B. 32,5 Mb/s.
- C. 75 Mb/s. **(correcta)**
- D. 750 Mb/s.

Explicación: 30 × 2,5 = 75 Mb/s; después se añade overhead, otros servicios y margen.

### Propuesta

Una sede tendrá 30 salas simultáneas a 2,5 Mb/s por sentido. ¿Qué carga base por sentido debe contemplar antes de margen?

- A. 12 Mb/s.
- B. 32,5 Mb/s.
- C. 75 Mb/s. **(correcta)**
- D. 750 Mb/s.

Explicación: Cada sentido agrega treinta salas simultáneas a2,5 Mb/s:30×2,5=75 Mb/s en ese sentido. Si ambos sentidos tienen esa carga, se dimensionan cada uno por 75 Mb/s antes de sobrecargas y margen, no se atribuyen150 Mb/s a cada sentido. Los datos son los del ejercicio, no una tasa universal de videoconferencia. Deben añadirse otros tráficos o sobrecargas solo cuando el escenario de dimensionamiento los requiera.

- Error A: Doce resulta de dividir treinta entre2,5; para agregar treinta flujos se multiplica el número de salas por la tasa de cada una.
- Error B: Treinta y dos coma cinco suma salas y megabits por segundo; la agregación correcta multiplica esas magnitudes con papeles distintos.
- Error D: Setecientos cincuenta es diez veces la carga base pedida; no existe en el enunciado un factor adicional de diez para cada sentido.

- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04
- [Microsoft Learn: Use the Network planner for Teams](https://learn.microsoft.com/en-us/microsoftteams/network-planner) · Introducción; Build your plan; Create a report: ubicaciones,actividad/perfiles y capacidad de red · versión: HTML actualizado26-05-2026, comprobado04-11-2026. Respalda modelar uso y topología; no se ejecuta herramienta, crea plan externo o extrapolan porcentajes/personas de ejemplo. Los números de122/123 son datos del enunciado, no tasas prescritas porMicrosoft. · comprobado: 2026-11-04

Partida: `4e2126800c1601b3362f803936953b4408994d25be0605d06faf24544f597e78` · propuesta: `963fe6b40d7c608f03c32904782b429d6bf91ac8eb422304d08ad8d049504032`

## MAN-GSI-P19-154

Decisión: pending_review · acción: revise.

Motivo: Conservar cálculo de margen y claveC; precisar capacidad total por sentido y retirar de la correcta la coletilla que daba una pista de longitud.

### Antes

Si a 75 Mb/s se añade un margen del 20%, ¿qué reserva aproximada resulta?

- A. 80 Mb/s.
- B. 95 Mb/s.
- C. 90 Mb/s por sentido. **(correcta)**
- D. 150 Mb/s.

Explicación: 75 × 1,20 = 90 Mb/s.

### Propuesta

Si a una carga de 75 Mb/s por sentido se añade un 20% sobre esa base, ¿qué capacidad total por sentido resulta?

- A. 80 Mb/s.
- B. 95 Mb/s.
- C. 90 Mb/s. **(correcta)**
- D. 150 Mb/s.

Explicación: Añadir un veinte por ciento sobre 75 Mb/s significa aumentar15 Mb/s y obtener90 Mb/s en el sentido dimensionado. La operación es75×1,20, no sumar veinte como una cantidad fija de tráfico. Se calcula la capacidad total con el margen dado, no solo el incremento ni una capacidad final que deba tener veinte por ciento libre. El porcentaje procede del enunciado, no una recomendación universal de diseño.

- Error A: Ochenta añade cinco megabits por segundo; el veinte por ciento de setenta y cinco son quince, no cinco.
- Error B: Noventa y cinco suma veinte megabits por segundo a la base; el porcentaje debe aplicarse a setenta y cinco antes de sumarlo.
- Error D: Ciento cincuenta duplica la base y equivale a un aumento del cien por ciento; no al veinte por ciento solicitado.

- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04
- [Microsoft Learn: Use the Network planner for Teams](https://learn.microsoft.com/en-us/microsoftteams/network-planner) · Introducción; Build your plan; Create a report: ubicaciones,actividad/perfiles y capacidad de red · versión: HTML actualizado26-05-2026, comprobado04-11-2026. Respalda modelar uso y topología; no se ejecuta herramienta, crea plan externo o extrapolan porcentajes/personas de ejemplo. Los números de122/123 son datos del enunciado, no tasas prescritas porMicrosoft. · comprobado: 2026-11-04

Partida: `d95abbde0b741d9f971ed52398c3bcd002b287424c268f5d0a192764f305e36c` · propuesta: `d37b64176a9f62544b8b9c5b83fcf8f1d98fb9df278ea7dfd7e0e1453243a4d2`

## MAN-GSI-P19-155

Decisión: pending_review · acción: revise.

Motivo: Conservar caso completo de audio y correctaA; distinguir captación, acondicionamiento y AEC sin convertir el ejercicio en recomendación de compra.

### Antes

Una sala tiene vídeo perfecto pero eco y reverberación. ¿Qué inversión suele aportar más valor inmediato?

- A. Mejorar acústica, microfonía, colocación y cancelación de eco antes de aumentar resolución de cámara. **(correcta)**
- B. Sustituir la cámara por un modelo 4K y aumentar la tasa de vídeo aunque la imagen actual ya sea correcta.
- C. Ampliar el ancho de banda y reservar más QoS aunque la red no muestre pérdida, latencia ni jitter relevantes.
- D. Instalar una pantalla de mayor tamaño y renovar la iluminación sin intervenir sobre la captura de audio.

Explicación: Audio claro es crítico para inteligibilidad y fatiga de reunión.

### Propuesta

Una sala tiene vídeo perfecto pero eco y reverberación. ¿Qué inversión suele aportar más valor inmediato?

- A. Mejorar acústica, microfonía, colocación y cancelación de eco antes de aumentar resolución de cámara. **(correcta)**
- B. Sustituir la cámara por un modelo 4K y aumentar la tasa de vídeo aunque la imagen actual ya sea correcta.
- C. Ampliar el ancho de banda y reservar más QoS aunque la red no muestre pérdida, latencia ni jitter relevantes.
- D. Instalar una pantalla de mayor tamaño y renovar la iluminación sin intervenir sobre la captura de audio.

Explicación: Si la imagen ya cumple y hay eco o reverberación, conviene estudiar captación, colocación, niveles, condiciones acústicas y control de eco. Son funciones relacionadas pero diferentes: la AEC atiende retorno acústico y no sustituye necesariamente controlar reflexiones persistentes o ruido. Una cámara con más resolución no repara la señal de voz. La intervención concreta requiere diagnóstico y prueba de resultado, sin prescribir una compra o material único.

- Error B: La imagen ya es adecuada; más resolución o tasa de vídeo no corrige el retorno acústico o las reflexiones que degradan la voz.
- Error C: Si no hay evidencias relevantes de problema de red, ampliar caudal no trata por sí mismo eco o reverberación física de la sala.
- Error D: Pantalla e iluminación pueden mejorar experiencia visual, pero no sustituyen intervenir sobre captación, reproducción y condiciones que originan el problema de audio.

- [Microsoft Learn: Meeting room guidance for Teams](https://learn.microsoft.com/en-us/microsoftteams/rooms/room-planning-guidance) · Infrastructure: Acoustic wall/floor treatments y Lighting; Signature Teams Boardroom: Room Acoustics y Lighting · versión: HTML público comprobado04-11-2026 pese a aviso genérico de autorización. Se usan principios de captación,inteligibilidad,reverberación,iluminación equilibrada y evitar contraluz; no productos,dimensiones,número de paneles o exigencias comerciales como regla universal. · comprobado: 2026-11-04
- [IETF RFC7874: WebRTC Audio Codec and Processing Requirements](https://www.rfc-editor.org/rfc/rfc7874.html) · RFC7874 §5 Acoustic Echo Cancellation: control de eco,algoritmos y usos donde conviene desactivarlo; §3 codecs para contexto previo · versión: Mayo2016, consulta§3 de086 reutilizada y lectura adicional§5 el04-11-2026. Recomendación de control de eco, no algoritmo obligatorio o sustituto universal de tratamiento acústico. Sin cifras de nivel/ganancia prescritas para una sala. · comprobado: 2026-11-04

Partida: `fc8271e9f5311b1d29ea3843eba83a4ba7b84bfc8d5a932b70b9d395f9a6b860` · propuesta: `8a6cb27c5604cf1f5b314f3a52b636d527e1c14725b58426fec93d2ae58cc165`

## MAN-GSI-P19-156

Decisión: pending_review · acción: revise.

Motivo: Conservar caso completoDSCP/Internet y claveB; matizar garantía frente a tratamiento posible en determinados dominios.

### Antes

Un pliego de videoconferencia pide “QoS garantizada por Internet” solo mediante marcar DSCP. ¿Qué observación es correcta?

- A. Marcar DSCP obliga técnicamente a todos los proveedores y redes intermedias de Internet a reservar la misma prioridad extremo a extremo.
- B. DSCP puede servir en dominios gestionados, pero no garantiza que todos los tránsitos de Internet respeten el tratamiento. **(correcta)**
- C. DSCP cifra y autentica el vídeo antes de asignarle una clase, evitando que terceros inspeccionen o modifiquen el flujo.
- D. El marcado reserva ancho de banda en cada salto y elimina la necesidad de dimensionar capacidad o acordar políticas entre dominios.

Explicación: La QoS extremo a extremo requiere control/acuerdos de los dominios atravesados.

### Propuesta

Un pliego de videoconferencia pide “QoS garantizada por Internet” solo mediante marcar DSCP. ¿Qué observación es correcta?

- A. Marcar DSCP obliga técnicamente a todos los proveedores y redes intermedias de Internet a reservar la misma prioridad extremo a extremo.
- B. DSCP puede servir en dominios gestionados, pero no garantiza que todos los tránsitos de Internet respeten el tratamiento. **(correcta)**
- C. DSCP cifra y autentica el vídeo antes de asignarle una clase, evitando que terceros inspeccionen o modifiquen el flujo.
- D. El marcado reserva ancho de banda en cada salto y elimina la necesidad de dimensionar capacidad o acordar políticas entre dominios.

Explicación: DSCP permite identificar tratamiento de paquetes en dominios que aplican políticas apropiadas. El marcado por sí solo no obliga a todos los tránsitos deInternet a preservar un comportamiento o reservar recursos. Para sostener una garantía concreta se necesitan capacidad, políticas y acuerdos con alcance verificable. Esto no significa que toda red pública ignoreDSCP, sino que su mera presencia no demuestra una garantía extremo a extremo.

- Error A: Cada dominio tiene políticas y puede remarcar o tratar códigos de forma diferente; el campo no obliga técnicamente a todos los proveedores a reservar una prioridad idéntica.
- Error C: DSCP no cifra ni autentica medios; seleccionar clase de tratamiento y proteger criptográficamente el flujo son funciones distintas.
- Error D: Marcar no instala por sí solo reservas en todos los saltos ni elimina la necesidad de dimensionar recursos y coordinar políticas entre dominios.

- [IETF RFC2474: Definition of the DS Field in IPv4 and IPv6](https://www.rfc-editor.org/rfc/rfc2474.html) · Abstract y §3: DSCP seleccionaPHB, clasificación,políticas y remarcado entre dominios · versión: Diciembre1998, HTML comprobado04-11-2026. Seis bitsDSCP y política de tratamiento, sin reserva/cifrado o garantía extremo a extremo por marcar. Se excluye la descripción histórica de los otros dos bits como actualmente sin uso. · comprobado: 2026-11-04
- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04

Partida: `2da02034288ced16c7b22285f41d88ed95dd7858c72817dc7b831920b30e82a7` · propuesta: `38f4c83531f4565766e483fc80f8db5457b60f02fd71193cf0f8deab6ff7752e`

## MAN-GSI-P19-157

Decisión: pending_review · acción: revise.

Motivo: Resolver ambigüedad activa confirmada: varias alternativas describían problemas. Conservar gobernanza de grabaciones y claveC mediante conclusiones, sin imponer plazo fijo o prohibir toda conservación prolongada.

### Antes

Una plataforma graba todas las reuniones de forma indefinida por defecto. ¿Qué problema principal existe?

- A. Conservar cada grabación sin fecha de eliminación porque el almacenamiento sea económico y pueda resultar útil en el futuro.
- B. Considerar suficiente cifrar el codec durante la llamada, sin controlar posteriormente acceso, copia, finalidad o retención del archivo.
- C. Falta de gobernanza de finalidad, acceso, retención, privacidad y coste; debe definirse un ciclo de vida. **(correcta)**
- D. Atribuir la grabación exclusivamente al anfitrión y excluirla de políticas corporativas de privacidad, seguridad y ciclo de vida.

Explicación: La grabación es información gestionada y debe justificarse/protegerse.

### Propuesta

Una plataforma graba todas las reuniones y conserva los archivos indefinidamente por defecto. ¿Qué conclusión sobre su gobierno es defendible?

- A. La conservación indefinida queda justificada si el almacenamiento es barato, sin concretar la finalidad del archivo.
- B. El cifrado de la llamada resuelve acceso y retención posterior del archivo, aunque no se definan esos controles.
- C. Falta de gobernanza de finalidad, acceso, retención, privacidad y coste; debe definirse un ciclo de vida. **(correcta)**
- D. Las grabaciones quedan fuera de las políticas corporativas si el anfitrión asume toda su administración.

Explicación: Grabar por defecto y conservar sin justificar finalidad o plazo exige revisar el gobierno de la información: necesidad, acceso, retención, protección y eliminación o archivo conforme al contexto. El coste de almacenar no justifica por sí mismo la conservación y el cifrado del transporte no decide permisos posteriores. No se afirma que toda conservación prolongada sea ilícita: las finalidades y excepciones aplicables necesitan justificación y garantías.

- Error A: La disponibilidad o el precio del almacenamiento no aporta por sí sola una finalidad ni un criterio de conservación proporcionado para datos personales.
- Error B: Proteger el tránsito durante la llamada no define quién reproduce, copia o conserva el archivo después; siguen haciendo falta reglas de acceso y ciclo de vida.
- Error D: Encargar la operación al anfitrión no excluye responsabilidad, seguridad o políticas corporativas sobre información y privacidad; administración y gobierno tienen ámbitos distintos.

- [BOE/DOUE: Reglamento(UE)2016/679, RGPD](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · RGPD artículos5.1a–c/e,13.1 y25.1–2 consultados en085;32.1–4 leído para088: seguridad proporcional al riesgo y verificación · versión: Texto originalDOUE04-05-2016 enBOE; consultas del04-11-2026 reutilizadas y ampliadas alart32. Sin revisión jurídica integral o dictamen sobre tratamiento concreto. No se exige siempre consentimiento,plazo único de borrado o grabar todas las sesiones; las excepciones de conservación necesitan finalidad y garantías aplicables. · comprobado: 2026-11-04
- [NCSC: Secure communications principles](https://www.ncsc.gov.uk/guidance/secure-communication-principles) · Principios1: tránsito/participantes;3: autenticación/dispositivo;4: auditoría;5: administración/ciclo de vida;6:metadatos;7:proveedor/datos · versión: HTML público comprobado04-11-2026. Guía británica para evaluar servicios, no obligación normativa española o garantía por una función. Auditoría/retención y permisos tienen alcance necesario,administración restringida y justificación. · comprobado: 2026-11-04

Partida: `e097c092c6e7dee74bce03b4ce52133c106d79fb63a74ee3860993a9a36f8c54` · propuesta: `cfbeebdf9c2c40a9217cd379609d122ae5914c41ab73626666cb0204bd93853f`

## MAN-GSI-P19-158

Decisión: pending_review · acción: revise.

Motivo: Conservar integración transversal y correctaA; formular funciones en plural y distinguir gobierno de uniformidad de codec, red o producto.

### Antes

Un organismo combina UC, móviles gestionados y salas. ¿Qué servicio transversal debe integrarse en los tres?

- A. Identidad/IAM, políticas de acceso, logs/monitorización y gestión de ciclo de vida. **(correcta)**
- B. Imponer un único codec en UC, móviles y salas, aunque cada entorno mantenga identidades, registros y políticas independientes.
- C. Situar todos los equipos en una VLAN plana compartida para que la conectividad sustituya al control de acceso y ciclo de vida.
- D. Crear cuentas y permisos separados para cada canal, sin federación, correlación de logs ni administración común de bajas.

Explicación: La convergencia técnica funciona mejor con gobierno transversal de identidad, seguridad y operación.

### Propuesta

Un organismo combinaUC, móviles gestionados y salas. ¿Qué funciones transversales conviene integrar en los tres ámbitos?

- A. Identidad/IAM, políticas de acceso, logs/monitorización y gestión de ciclo de vida. **(correcta)**
- B. Un catálogo único de codecs, dejando permisos y bajas separados en cada canal.
- C. Una red compartida, usando conectividad como sustituto de autenticación y registro.
- D. Cuentas independientes por canal, con bajas y permisos sin coordinación entre servicios.

Explicación: Convergencia de comunicaciones, móviles y salas requiere coordinar identidad, autorización, registro y ciclo de vida de cuentas y equipos. La política debe ajustarse a cada recurso y modo de acceso; integrar no exige una única marca, una VLAN común o idénticos controles técnicos. También se limita recogida y acceso a registros a lo necesario, con administración autorizada y gestión coherente de altas, cambios y bajas.

- Error B: Un catálogo de codecs puede apoyar interoperabilidad de medios, pero no coordina por sí solo identidades, permisos, bajas o evidencias de operación.
- Error C: Conectividad compartida permite comunicación, no sustituye autenticación, autorización o trazabilidad; una red plana tampoco acredita gobierno común.
- Error D: Pueden existir componentes de identidad distintos, pero omitir coordinación de altas, bajas y permisos deja accesos incoherentes entre los canales integrados.

- [NCSC: Secure communications principles](https://www.ncsc.gov.uk/guidance/secure-communication-principles) · Principios1: tránsito/participantes;3: autenticación/dispositivo;4: auditoría;5: administración/ciclo de vida;6:metadatos;7:proveedor/datos · versión: HTML público comprobado04-11-2026. Guía británica para evaluar servicios, no obligación normativa española o garantía por una función. Auditoría/retención y permisos tienen alcance necesario,administración restringida y justificación. · comprobado: 2026-11-04
- [Microsoft Learn: What is Conditional Access?](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview) · Overview; Common signals; Common decisions: identidad,dispositivo,aplicación y riesgo para decidir acceso · versión: HTML público comprobado el04-11-2026. Ejemplo de motor de política; después de primer factor en este producto, sin igualarlo a cortafuegos universal o prometer prevención de todo ataque. · comprobado: 2026-11-04

Partida: `bbad8de9e633e689327ee11e61868a2668d05d45ca2b78bad7cd7522676a1460` · propuesta: `7ab2f190456becae8b47b1fc7faacab2b434233b405d3ca47448cd29f4b31160`

## MAN-GSI-P19-102

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completaH.323 y claveA; contrastar resumen03/2022 y estado en vigor sin confundir heredado con retirado o afirmar lectura íntegra delPDF.

### Antes

¿Qué es H.323?

- A. Una recomendación/suite ITU-T para comunicaciones multimedia sobre redes basadas en paquetes. **(correcta)**
- B. Un protocolo de señalización basado en mensajes de texto utilizado para iniciar, modificar y finalizar sesiones.
- C. Un protocolo de transporte en tiempo real que lleva muestras multimedia con secuencia y marcas temporales.
- D. Un estándar de compresión de vídeo utilizado para reducir bitrate manteniendo una calidad adecuada.

Explicación: H.323 define arquitectura y protocolos para multimedia de paquetes; sigue siendo relevante como tecnología/interoperabilidad heredada.

### Propuesta

¿Qué es H.323?

- A. Una recomendación/suite ITU-T para comunicaciones multimedia sobre redes basadas en paquetes. **(correcta)**
- B. Un protocolo de señalización basado en mensajes de texto utilizado para iniciar, modificar y finalizar sesiones.
- C. Un protocolo de transporte en tiempo real que lleva muestras multimedia con secuencia y marcas temporales.
- D. Un estándar de compresión de vídeo utilizado para reducir bitrate manteniendo una calidad adecuada.

Explicación: H.323 es una recomendaciónITU-T que describe entidades y funcionamiento para comunicaciones multimedia sobre redes de paquetes. Abarca más que un codec o un único método de señalización. El resumen de la edición03/2022 contempla audio y vídeo o datos según capacidades; su ficha la presenta en vigor. Que se encuentre en terminales heredados no permite declarar retirada la recomendación ni asumir interoperabilidad automática con SIP o WebRTC.

- Error B: La descripción corresponde al enfoque de señalización de SIP, no a toda la recomendación o suite H.323 para comunicaciones multimedia de paquetes.
- Error C: Secuencia y marcas temporales de las muestras corresponden al transporte como RTP; H.323 tiene un alcance de arquitectura y control más amplio.
- Error D: Un formato de compresión de vídeo define representación del medio; H.323 describe sistemas y protocolos multimedia, no un codec de vídeo concreto.

- [ITU-T Recommendation H.323: Summary](https://www.itu.int/dms_pubrec/itu-t/rec/h/T-REC-H.323-202203-I!!SUM-HTM-E.htm) · Summary,párrafos1–3: entidades,multimedia sobre paquetes,ámbitos de red,configuraciones e interworking · versión: H.323(03/2022), resumenHTML comprobado04-11-2026; audio obligatorio y vídeo/datos opcionales en ese resumen. No lectura íntegra delPDF ni afirmar que la recomendación esté retirada por su presencia en terminales heredados. · comprobado: 2026-11-04
- [ITU-T H.323(03/2022): ficha de recomendación](https://www.itu.int/rec/T-REC-H.323-202203-I/en) · Título,fecha de aprobación16-03-2022,Status In force y enlaceSummary · versión: FichaHTML comprobada04-11-2026. Identifica edición/estado y disponibilidad,no acredita lectura delPDF o todas sus capacidades. La ficha general lista2009 como sustituida y2022 en vigor. · comprobado: 2026-11-04
- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04

Partida: `5b2a9ce1bdadc9ff0b96206b22cc791074269738b260defa76a7156a8e530ef1` · propuesta: `e52418c49adea3ca22bb99cea8810a378b4548ff3fa0bfed4b943ab40ec3ff86`

## MAN-GSI-P19-108

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa STUN y claveD; explicar dirección observada y uso en ICE, sin convertirlo en solución completa oIPv4 pública exclusiva.

### Antes

¿Qué función cumple STUN?

- A. Proporcionar un relay que recibe y reenvía los paquetes cuando no puede establecerse un camino directo entre extremos.
- B. Coordinar candidatos y comprobaciones de conectividad para seleccionar el par de rutas viable de una sesión multimedia.
- C. Establecer, modificar y finalizar sesiones mediante mensajes de señalización intercambiados entre agentes SIP.
- D. Ayudar a un endpoint a conocer su dirección/puerto mapeado por NAT y comprobar conectividad como herramienta de traversal. **(correcta)**

Explicación: STUN es una herramienta usada por ICE; no es por sí sola una solución completa de NAT traversal.

### Propuesta

¿Qué función cumple STUN?

- A. Proporcionar un relay que recibe y reenvía los paquetes cuando no puede establecerse un camino directo entre extremos.
- B. Coordinar candidatos y comprobaciones de conectividad para seleccionar el par de rutas viable de una sesión multimedia.
- C. Establecer, modificar y finalizar sesiones mediante mensajes de señalización intercambiados entre agentes SIP.
- D. Ayudar a un endpoint a conocer su dirección/puerto mapeado por NAT y comprobar conectividad como herramienta de traversal. **(correcta)**

Explicación: STUN sirve para conocer dirección y puerto observados desde otro extremo y para comprobaciones o mantenimiento de mapeos en usos definidos. ICE utiliza estas herramientas al comprobar conectividad. STUN básico no presta por sí solo relay de medios ni resuelve cualquier NAT o política. La dirección reflejada depende del punto de observación; no equivale siempre a una dirección pública exclusiva del usuario.

- Error A: El servicio de retransmisión de paquetes caracteriza TURN; STUN básico informa mapeos y permite comprobaciones, sin actuar como ese relay de medios.
- Error B: Coordinar candidatos, pares y selección corresponde a ICE, que puede utilizar STUN y TURN; es un alcance distinto del de una herramienta STUN.
- Error C: Establecer, modificar o finalizar sesiones con mensajes SIP pertenece a señalización de llamada; no define el papel de STUN en conectividad.

- [IETF RFC8489: Session Traversal Utilities for NAT](https://www.rfc-editor.org/rfc/rfc8489.html) · Abstract; §1 Introduction; §2 Overview of Operation, Binding y dirección reflejada · versión: Febrero2020, sustituyeRFC5389, HTML comprobado04-11-2026. Herramienta para mapeos, comprobaciones y mantenimiento; no solución completa por sí sola ni relay de medios básico. Dirección observada respecto del servidor, no siempreIP pública única. · comprobado: 2026-11-04
- [IETF RFC8445: Interactive Connectivity Establishment](https://www.rfc-editor.org/rfc/rfc8445.html) · §1 Introduction; §2 Overview of ICE, candidatos y comprobaciones de pares; §4 Terminology · versión: Julio2018, sustituyeRFC5245, HTML comprobado04-11-2026. ICE utilizaSTUN yTURN; se contrastan candidatos host/server-reflexive/relayed sin prometer conectividad bajo cualquier política de red. · comprobado: 2026-11-04
- [IETF RFC8656: Traversal Using Relays around NAT](https://www.rfc-editor.org/rfc/rfc8656.html) · Abstract y §1 Introduction: servidor intermediario, dirección relayed y relación con ICE · versión: Febrero2020, sustituyeRFC5766/6156, HTML comprobado04-11-2026. Relay útil por restricciones de conectividad o política/privacidad; no garantía universal de paso o cifrado extremo a extremo por usar elrelay. · comprobado: 2026-11-04
- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04

Partida: `4c40a23fa1e53ad6f89eb22234ec7a6da3326850fffcfec454ba31288c1da750` · propuesta: `ec3b50429fca5d8e91133974d87ff309a10047bcbc6f512460dfaed9c75844ff`

## MAN-GSI-P19-109

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa TURN y claveD; añadir usos de privacidad/política y distinguir relay, mixer y frontera SIP.

### Antes

¿Qué función cumple TURN?

- A. Informar al cliente de su dirección pública observada y ayudar a comprobar conectividad, sin retransmitir los medios como relay.
- B. Mezclar, componer y transcodificar todos los flujos de una reunión para entregar una salida audiovisual común a los participantes.
- C. Controlar y proteger la frontera SIP, normalizando señalización y aplicando políticas de interconexión entre dominios.
- D. Proporcionar un relay cuando no es posible establecer conectividad directa adecuada entre peers. **(correcta)**

Explicación: TURN consume recursos de servidor/ancho de banda y normalmente se usa como fallback mediante ICE.

### Propuesta

¿Qué función cumple TURN?

- A. Informar al cliente de su dirección pública observada y ayudar a comprobar conectividad, sin retransmitir los medios como relay.
- B. Mezclar, componer y transcodificar todos los flujos de una reunión para entregar una salida audiovisual común a los participantes.
- C. Controlar y proteger la frontera SIP, normalizando señalización y aplicando políticas de interconexión entre dominios.
- D. Proporcionar un relay cuando no es posible establecer conectividad directa adecuada entre peers. **(correcta)**

Explicación: TURN permite utilizar una dirección de un servidor que retransmite paquetes entre cliente y pares. Es útil cuando no hay ruta directa adecuada, y también puede seleccionarse por política o privacidad aunque exista conectividad directa. El relay debe ser accesible y autorizado, y consume recursos de transporte. No mezcla o recodifica medios por definición ni obliga a agotar antes todos los candidatos directos de ICE.

- Error A: Conocer el mapeo y comprobar conectividad corresponde a herramientas STUN; no describe la función de retransmitir paquetes que aporta TURN.
- Error B: Mezclar, componer y recodificar una salida describe una MCU clásica de composición; TURN reenvía paquetes sin requerir ese procesamiento de medios.
- Error C: Controlar una frontera SIP caracteriza funciones deSBC; un producto puede combinar capacidades, pero ese control no es la definición de TURN.

- [IETF RFC8656: Traversal Using Relays around NAT](https://www.rfc-editor.org/rfc/rfc8656.html) · Abstract y §1 Introduction: servidor intermediario, dirección relayed y relación con ICE · versión: Febrero2020, sustituyeRFC5766/6156, HTML comprobado04-11-2026. Relay útil por restricciones de conectividad o política/privacidad; no garantía universal de paso o cifrado extremo a extremo por usar elrelay. · comprobado: 2026-11-04
- [IETF RFC8445: Interactive Connectivity Establishment](https://www.rfc-editor.org/rfc/rfc8445.html) · §1 Introduction; §2 Overview of ICE, candidatos y comprobaciones de pares; §4 Terminology · versión: Julio2018, sustituyeRFC5245, HTML comprobado04-11-2026. ICE utilizaSTUN yTURN; se contrastan candidatos host/server-reflexive/relayed sin prometer conectividad bajo cualquier política de red. · comprobado: 2026-11-04
- [W3C: WebRTC, Real-Time Communication in Browsers](https://www.w3.org/TR/webrtc/) · §4.2.2 RTCIceServer: URI/credenciales; §4.2.3 RTCIceTransportPolicy: relay/all y privacidad de direcciones · versión: Recommendation13-03-2025, consulta de086 ampliada el04-11-2026 a§4.2.2–3. relay permite solo candidatos relay yall permite tipos sujetos a política. No implica desactivar restricciones sin analizar finalidad o queTURN siempre tenga mayor retardo. · comprobado: 2026-11-04
- [IETF RFC7667: RTP Topologies](https://www.rfc-editor.org/rfc/rfc7667.html) · §3.6.1 Media-Mixing Mixer; §3.7 Selective Forwarding Middlebox, especialmente distribución y composición en cliente · versión: Informational, noviembre2015, HTML comprobado04-11-2026. MCU clásica de composición frente a reenvío selectivoSFU/SFM; no todas lasMCU son mezcladores ni todo productoSFU excluye módulos adicionales. Coste,retardo y escala dependen del diseño. · comprobado: 2026-11-04

Partida: `7b5b8e9391078f37a1811509e6d856dbb81cf15e52617c091792de0b4819c24b` · propuesta: `846ab10269a7038e4d12f61ee92d008c6277a6b385ed83248d0cbfe6247f1b2e`

## MAN-GSI-P19-124

Decisión: pending_review · acción: revise.

Motivo: Conservar dimensionamiento por sentido y claveA; alternativas paralelas comparan carga/capacidad, codec, transporte y política sin alargar solo la correcta.

### Antes

¿Por qué deben dimensionarse subida y bajada por separado?

- A. Porque reuniones cloud y topologías multipunto pueden generar cargas asimétricas y el enlace puede tener capacidades distintas en cada sentido. **(correcta)**
- B. Porque los codecs transmiten vídeo por la subida y reservan la bajada exclusivamente para el audio recibido.
- C. Porque RTP utiliza protocolos diferentes en cada sentido y cada protocolo requiere una capacidad fija independiente.
- D. Porque la reserva de QoS convierte cualquier enlace en simétrico y debe comprobarse cuánto ancho de banda queda sin utilizar.

Explicación: Un enlace asimétrico puede saturarse en el sentido menos capaz aunque el otro tenga margen.

### Propuesta

¿Por qué deben dimensionarse subida y bajada por separado?

- A. Las cargas y la capacidad pueden ser asimétricas, de modo que un sentido se satura aunque el otro tenga margen. **(correcta)**
- B. Cada codec fija la capacidad del enlace en cada sentido, al margen del número de flujos concurrentes.
- C. RTP reserva una tasa fija por sentido, aunque cambien los flujos que envían y reciben los participantes.
- D. QoS hace simétrico el enlace contratado y basta medir cuánto ancho de banda deja libre la prioridad.

Explicación: Se modelan por separado los medios enviados y recibidos y la capacidad disponible en cada sentido. Una sala puede enviar una fuente y recibir varias, y una conexión puede ofrecer tasas distintas de subida y bajada. Uno de esos sentidos puede saturarse aunque el otro conserve margen. Ni RTP reserva una tasa física fija por definición ni QoS cambia por sí misma la capacidad contratada a una conexión simétrica.

- Error B: El codec y sus parámetros influyen en tráfico de medios, no fijan por sí mismos la capacidad física o contratada de cada sentido del enlace.
- Error C: RTP transporta medios y puede combinarse con mecanismos de control, pero no reserva por sí solo una tasa fija independiente del tráfico real.
- Error D: QoS organiza tratamiento sobre recursos disponibles; no convierte automáticamente un enlace asimétrico en simétrico ni sustituye dimensionar ambos sentidos.

- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04
- [Microsoft Learn: Use the Network planner for Teams](https://learn.microsoft.com/en-us/microsoftteams/network-planner) · Introducción; Build your plan; Create a report: ubicaciones,actividad/perfiles y capacidad de red · versión: HTML actualizado26-05-2026, comprobado04-11-2026. Respalda modelar uso y topología; no se ejecuta herramienta, crea plan externo o extrapolan porcentajes/personas de ejemplo. Los números de122/123 son datos del enunciado, no tasas prescritas porMicrosoft. · comprobado: 2026-11-04
- [IETF RFC7667: RTP Topologies](https://www.rfc-editor.org/rfc/rfc7667.html) · §3.6.1 Media-Mixing Mixer; §3.7 Selective Forwarding Middlebox, especialmente distribución y composición en cliente · versión: Informational, noviembre2015, HTML comprobado04-11-2026. MCU clásica de composición frente a reenvío selectivoSFU/SFM; no todas lasMCU son mezcladores ni todo productoSFU excluye módulos adicionales. Coste,retardo y escala dependen del diseño. · comprobado: 2026-11-04
- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04
- [IETF RFC2474: Definition of the DS Field in IPv4 and IPv6](https://www.rfc-editor.org/rfc/rfc2474.html) · Abstract y §3: DSCP seleccionaPHB, clasificación,políticas y remarcado entre dominios · versión: Diciembre1998, HTML comprobado04-11-2026. Seis bitsDSCP y política de tratamiento, sin reserva/cifrado o garantía extremo a extremo por marcar. Se excluye la descripción histórica de los otros dos bits como actualmente sin uso. · comprobado: 2026-11-04

Partida: `8486906e4b72854f0d2e2b085df6e19c3a1c0d432278f86e9ac5634b9858c27a` · propuesta: `7d1d09fc546a8fd7dbef31482df5a06037b3d354349c11e1490f698a76ec1692`

## MAN-GSI-P19-129

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa QoS y claveC; distinguir política aplicada, marca aislada, capacidad y alcance administrativo.

### Antes

¿Qué debe hacer QoS en una red corporativa para voz/vídeo?

- A. Crear capacidad ilimitada con clasificación y marcas, aunque los enlaces permanezcan saturados por demanda sostenida.
- B. Marcar DSCP y asumir que todos los tránsitos de Internet conservarán la prioridad sin acuerdos ni dominio administrativo común.
- C. Clasificar y marcar adecuadamente, aplicar colas/prioridades y mantener política coherente en los saltos gestionados. **(correcta)**
- D. Aplicar una marca en origen sin configurar colas, prioridades, policing ni tratamiento coherente en los demás saltos gestionados.

Explicación: QoS es útil donde se controla la red; en Internet público no hay garantía extremo a extremo de las mismas políticas.

### Propuesta

¿Qué debe hacer QoS en una red corporativa para voz/vídeo?

- A. Crear capacidad ilimitada con clasificación y marcas, aunque los enlaces permanezcan saturados por demanda sostenida.
- B. Marcar DSCP y asumir que todos los tránsitos de Internet conservarán la prioridad sin acuerdos ni dominio administrativo común.
- C. Clasificar y marcar adecuadamente, aplicar colas/prioridades y mantener política coherente en los saltos gestionados. **(correcta)**
- D. Aplicar una marca en origen sin configurar colas, prioridades, policing ni tratamiento coherente en los demás saltos gestionados.

Explicación: La QoS corporativa combina clasificación y marcado con tratamiento efectivo de colas, prioridades y acondicionamiento coherente en los saltos administrados. Debe dimensionarse la capacidad y contrastarse el efecto bajo carga: priorizar no crea recursos ilimitados. En una ruta fuera del dominio, continuidad de tratamiento requiere conocer políticas o acuerdos; la marca de origen no demuestra por sí sola una garantía universal.

- Error A: Clasificar o marcar no aumenta ilimitadamente el caudal físico; demanda sostenida superior a capacidad exige dimensionamiento y gestión de tráfico.
- Error B: Un código DSCP puede remarcarse o tratarse de otra forma en dominios externos; sin control o acuerdos no se acredita prioridad idéntica en todaInternet.
- Error D: Una marca sin tratamiento coherente no implementa por sí misma la política; colas, prioridades y acondicionamiento deben responder a la clasificación.

- [IETF RFC2474: Definition of the DS Field in IPv4 and IPv6](https://www.rfc-editor.org/rfc/rfc2474.html) · Abstract y §3: DSCP seleccionaPHB, clasificación,políticas y remarcado entre dominios · versión: Diciembre1998, HTML comprobado04-11-2026. Seis bitsDSCP y política de tratamiento, sin reserva/cifrado o garantía extremo a extremo por marcar. Se excluye la descripción histórica de los otros dos bits como actualmente sin uso. · comprobado: 2026-11-04
- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04

Partida: `89d18c7f871cc6601ba75ec484ac901f7942c4f669906d80ae0486cfe139d6ec` · propuesta: `68396f226092057f78da3618083392fc48fdf1b3abed2f06b40afd23b5d68360`

## MAN-GSI-P19-137

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa de seguridad y claveB; permisos ylogs proporcionados, sin confundir cifrado de tránsito conE2 EE o imponer grabación.

### Antes

¿Qué controles de seguridad son apropiados para reuniones sensibles?

- A. Un enlace público permanente protegido por una contraseña común que se reutiliza en todas las reuniones de la organización.
- B. Identidad/SSO/MFA donde proceda, lobby/invitados, cifrado en tránsito, permisos de grabación y logs. **(correcta)**
- C. Permiso de grabación y administración para cualquier participante, evitando controles distintos entre anfitriones e invitados.
- D. Desactivar logs y registros de acceso para aumentar la privacidad, aunque se pierda capacidad de investigar incidentes.

Explicación: La plataforma de colaboración debe tratar identidad, invitados, grabación y administración como activos de seguridad.

### Propuesta

¿Qué controles de seguridad son apropiados para reuniones sensibles?

- A. Un enlace público permanente protegido por una contraseña común que se reutiliza en todas las reuniones de la organización.
- B. Identidad/SSO/MFA donde proceda, lobby/invitados, cifrado en tránsito, permisos de grabación y logs. **(correcta)**
- C. Permiso de grabación y administración para cualquier participante, evitando controles distintos entre anfitriones e invitados.
- D. Desactivar logs y registros de acceso para aumentar la privacidad, aunque se pierda capacidad de investigar incidentes.

Explicación: En reuniones sensibles se coordinan identidad y decisiones de acceso, admisión de invitados, protección de medios, privilegios sobre grabación y evidencias de seguridad. MFA o SSO se integran cuando proceda según riesgo y capacidades. Cifrado en tránsito no equivale automáticamente aE2 EE, y grabar o registrar todo no es una obligación universal. Deben verificarse permisos, necesidad, retención y acceso a los registros, de modo proporcionado.

- Error A: Un enlace permanente y una contraseña compartida reutilizada dificultan delimitar acceso y revocación por reunión o persona; no sustituyen identidad y admisión adecuadas.
- Error C: Dar privilegios de grabación y administración a cualquier asistente ignora funciones y mínimo privilegio, y puede exponer contenido sensible.
- Error D: Eliminar toda evidencia de acceso impide investigar usos indebidos; privacidad exige finalidad, protección y conservación proporcionadas, no ausencia automática de registros.

- [NCSC: Secure communications principles](https://www.ncsc.gov.uk/guidance/secure-communication-principles) · Principios1: tránsito/participantes;3: autenticación/dispositivo;4: auditoría;5: administración/ciclo de vida;6:metadatos;7:proveedor/datos · versión: HTML público comprobado04-11-2026. Guía británica para evaluar servicios, no obligación normativa española o garantía por una función. Auditoría/retención y permisos tienen alcance necesario,administración restringida y justificación. · comprobado: 2026-11-04
- [Microsoft Learn: What is Conditional Access?](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview) · Overview; Common signals; Common decisions: identidad,dispositivo,aplicación y riesgo para decidir acceso · versión: HTML público comprobado el04-11-2026. Ejemplo de motor de política; después de primer factor en este producto, sin igualarlo a cortafuegos universal o prometer prevención de todo ataque. · comprobado: 2026-11-04
- [BOE/DOUE: Reglamento(UE)2016/679, RGPD](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · RGPD artículos5.1a–c/e,13.1 y25.1–2 consultados en085;32.1–4 leído para088: seguridad proporcional al riesgo y verificación · versión: Texto originalDOUE04-05-2016 enBOE; consultas del04-11-2026 reutilizadas y ampliadas alart32. Sin revisión jurídica integral o dictamen sobre tratamiento concreto. No se exige siempre consentimiento,plazo único de borrado o grabar todas las sesiones; las excepciones de conservación necesitan finalidad y garantías aplicables. · comprobado: 2026-11-04

Partida: `dae4fb21f7b2a10412c7fc86834c74c0b36d97c68eb8ac32ac65220be19dc0fa` · propuesta: `458bf0ee3ed094b381b230b1e8ad6211f75965a650df3f3d1b44dba17fd7d633`
