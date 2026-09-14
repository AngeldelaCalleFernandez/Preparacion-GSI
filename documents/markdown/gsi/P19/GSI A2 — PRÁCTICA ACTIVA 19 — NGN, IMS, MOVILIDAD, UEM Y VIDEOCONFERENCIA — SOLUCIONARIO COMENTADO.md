GSI A2 — PRÁCTICA ACTIVA 19

**NGN · IMS · MOVILIDAD · UEM · VIDEOCONFERENCIA · QoS**

160 preguntas · 4 opciones · cierre directo de IV.14, IV.15 e IV.16

**SOLUCIONARIO COMENTADO**

# Cómo usar esta práctica

Este solucionario fija arquitectura, protocolos, movilidad y cálculos básicos. Repite sin mirar las preguntas falladas y clasifica el error: IMS/SIP, móvil/UEM, WebRTC/protocolos, QoS/dimensionamiento o sala/seguridad.

Base nuclear: GSI A2 — Bloque IV — Apuntes completos V2.1 revisados. Contraste oficial: 3GPP IMS/Release 18; IETF SIP/RTP/ICE/STUN/TURN; W3C WebRTC; ITU-T H.323.

## Distribución

| **Preguntas** | **Bloque** | **Función** |
| --- | --- | --- |
| 1–20 | NGN e IMS: arquitectura y funciones | NGN, capas IMS, CSCF, HSS, separación acceso/control/servicio. |
| 21–40 | SIP, RTP, VoIP, UC, QoS y convergencia | SIP/SDP, RTP/RTCP, SBC, VoIP/ToIP, UC, seguridad, QoS. |
| 41–60 | Generaciones móviles: de 2G a 5G-Advanced | 2G/3G/4G/5G, casos de uso, 5G-Advanced, UE/SIM/handover. |
| 61–80 | LTE/5G: radio, core, movilidad y slicing | E-UTRAN/EPC, NR/5GC, SA/NSA, slicing, roaming, operación. |
| 81–100 | MDM, EMM y UEM: gobierno del endpoint móvil | MDM/MAM/MCM/EMM/UEM, BYOD/COPE/COBO/CYOD, compliance y privacidad. |
| 101–120 | Videoconferencia: SIP/H.323, WebRTC y medios | SIP/H.323/WebRTC, ICE/STUN/TURN, codecs, MCU/SFU, simulcast/SVC. |
| 121–140 | Dimensionamiento, QoS y acondicionamiento de salas | Cálculo de ancho de banda, latencia/jitter/pérdida, QoS, sala, seguridad/accesibilidad. |
| 141–160 | Casos integradores de comunicaciones convergentes | Supuestos mixtos: continuidad, interoperabilidad, UEM, WebRTC, cálculo y observabilidad. |

## Fuentes oficiales de contraste

* 3GPP — IMS TS 23.228 / control SIP-SDP TS 24.229
* 3GPP — Release 18, primera release de 5G-Advanced
* RFC 3261 — SIP; RFC 3550 — RTP/RTCP
* W3C — WebRTC: Real-Time Communication in Browsers
* RFC 8445 — ICE; RFC 8489 — STUN; RFC 8656 — TURN
* ITU-T H.323 (V8, 03/2022) — multimedia sobre redes de paquetes

Control de actualidad: 25/08/2026. Se priorizan arquitectura y estándares estables; no se memorizan cifras comerciales de velocidad ni catálogos de fabricante.

# 1. NGN e IMS: arquitectura y funciones

**1. B —** NGN busca convergencia de servicios sobre infraestructura de paquetes y desacoplamiento entre transporte y lógica de servicio.

**2. A —** El valor conceptual de NGN es converger voz, datos y multimedia sobre una infraestructura común.

**3. B —** IMS significa IP Multimedia Subsystem y organiza control de sesión, abonado y servicios multimedia IP.

**4. A —** IMS permite que la lógica multimedia IP no quede atada a una única red de acceso.

**5. C —** P-CSCF es el Proxy-CSCF y constituye el punto inicial de señalización IMS para el UE.

**6. A —** I-CSCF participa en entrada y consulta/routing hacia el S-CSCF correspondiente.

**7. B —** S-CSCF es la función central de control de sesión SIP en la arquitectura IMS clásica.

**8. B —** HSS almacena información de suscripción/perfil; en 5G aparecen evoluciones de funciones/datos, pero la idea sigue siendo útil.

**9. D —** 3GPP sigue manteniendo especificaciones IMS para LTE/5G y generaciones posteriores.

**10. A —** 3GPP TS 24.229 define control IMS basado en SIP/SDP.

**11. D —** SDP describe medios, codecs y direcciones/puertos; no transporta audio/vídeo.

**12. D —** IMS es una arquitectura específica; VoIP es un concepto más amplio.

**13. A —** NGN expresa principios de convergencia; IMS materializa control multimedia IP en el ecosistema 3GPP.

**14. C —** El desacoplamiento facilita convergencia fijo-móvil y reutilización de servicios.

**15. C —** El temario prioriza arquitectura estable sobre catálogos o releases concretas.

**16. D —** QoS administra recursos/congestión y debe integrarse con la política de servicio.

**17. C —** La convergencia es funcional y arquitectónica, no solo física.

**18. B —** IMS define funciones lógicas y relaciones, no un producto monolítico obligatorio.

**19. D —** Separar capas ayuda a razonar arquitectura, seguridad y dependencias.

**20. C —** La convergencia busca continuidad de identidad y servicios entre accesos.

# 2. SIP, RTP, VoIP, UC, QoS y convergencia

**21. B —** RFC 3261 define SIP como protocolo de control/señalización de sesiones.

**22. A —** INVITE solicita establecer una sesión y suele incluir o negociar descripción de medios.

**23. C —** BYE termina una sesión SIP establecida.

**24. A —** REGISTER permite asociar una identidad SIP con contactos/localizaciones actuales.

**25. B —** Las familias SIP agrupan respuestas: 1xx provisionales, 2xx éxito, 3xx redirección, 4xx cliente, 5xx servidor, 6xx globales.

**26. A —** Es una de las distinciones más rentables del tema.

**27. A —** RFC 3550 define RTP para medios y RTCP para control/monitorización relacionada.

**28. C —** El RFC de RTP declara expresamente que RTP no garantiza QoS.

**29. B —** SDP describe la sesión; no transporta el medio.

**30. C —** Session Border Controller protege y controla los límites de dominios de voz/UC.

**31. D —** Pueden coexistir o integrarse en productos, pero sus funciones conceptuales son distintas.

**32. C —** SRTP protege audio/vídeo RTP; TLS puede proteger señalización SIP en despliegues adecuados.

**33. B —** La protección debe contemplar ambos planos, sin asumir que cifrar uno protege automáticamente el otro.

**34. A —** VoIP describe el transporte/servicio de voz sobre IP de forma amplia.

**35. D —** ToIP tiene un alcance de solución de telefonía más amplio que el concepto puro de VoIP.

**36. D —** UC busca experiencia y servicios de comunicación integrados.

**37. B —** La voz interactiva es sensible a retardo, variación de retardo y pérdidas.

**38. C —** Hay un compromiso entre suavizar jitter y añadir latencia.

**39. D —** QoS necesita diseño extremo a extremo y capacidad suficiente.

**40. D —** La solución debe cubrir arquitectura, frontera, calidad, seguridad y operación.

# 3. Generaciones móviles: de 2G a 5G-Advanced

**41. B —** 2G marca el paso a voz digital; GPRS/EDGE ampliaron capacidades de datos.

**42. A —** 3G amplió significativamente servicios de datos móviles, manteniendo todavía herencia de dominios previos.

**43. B —** LTE/EPC simplifica hacia paquetes IP y soporta voz mediante VoLTE/IMS.

**44. A —** VoLTE integra voz en LTE usando IMS para control multimedia.

**45. A —** 5G implica evolución de radio y core, no solo mayor velocidad pico.

**46. B —** eMBB es una de las familias de casos de uso clásicas de 5G.

**47. C —** URLLC expresa requisitos estrictos, aunque el resultado extremo a extremo depende de toda la arquitectura.

**48. A —** mMTC se asocia a conectividad masiva de dispositivos con perfiles de consumo/carga específicos.

**49. D —** 3GPP identifica Release 18 como la primera release de 5G-Advanced.

**50. D —** No debe confundirse evolución avanzada de 5G con una generación 6G.

**51. C —** Separar RAN y core ayuda a entender evolución de generaciones y troubleshooting.

**52. D —** UE es User Equipment, concepto básico de arquitectura celular.

**53. D —** Las redes celulares organizan cobertura/capacidad mediante celdas y recursos radio.

**54. C —** La movilidad requiere transferir la conexión sin interrumpir innecesariamente el servicio.

**55. C —** eSIM cambia el modelo de aprovisionamiento, no elimina identidad ni autenticación de red.

**56. B —** La diferencia está en formato/aprovisionamiento, no en prescindir de credenciales.

**57. B —** Evita confundir capacidad de acceso con experiencia completa.

**58. C —** La tecnología nominal no sustituye pruebas de cobertura y diseño de continuidad.

**59. A —** Frecuencia y ancho de banda son variables físicas centrales de cualquier acceso radio.

**60. D —** La evolución de generaciones se entiende mejor por arquitectura y servicios que por marketing de Mbps.

# 4. LTE/5G: radio, core, movilidad y slicing

**61. A —** LTE separa E-UTRAN como RAN y EPC como core de paquetes.

**62. C —** EPC proporciona funciones de movilidad, sesión y conectividad de paquetes en LTE.

**63. C —** NR es la interfaz/acceso radio; no debe confundirse con el core.

**64. A —** Standalone permite explotar de forma nativa funciones del 5GC.

**65. B —** NSA permitió desplegar NR apoyándose en la infraestructura 4G existente.

**66. C —** La distinción es de arquitectura móvil, no de marca o cobertura visual del terminal.

**67. D —** Slicing busca adaptar recursos/servicios a distintos perfiles sin requerir redes físicas totalmente separadas.

**68. A —** Pueden coexistir técnicas de segmentación, pero operan con alcance distinto.

**69. C —** 5GC evoluciona hacia funciones de red más desacopladas y orientadas a servicios.

**70. B —** La movilidad es función esencial de RAN/core y debe diferenciarse de roaming entre operadores.

**71. B —** Roaming implica relación entre red doméstica y visitada; no es simplemente handover local.

**72. B —** Distinguir movilidad radio de itinerancia comercial/técnica evita errores de examen.

**73. D —** La RAN conecta por radio; el core orquesta conectividad y servicio de red.

**74. A —** La cobertura indoor depende de propagación, carga y despliegue local.

**75. A —** Las redes móviles pueden usar NAT a gran escala; hay que validar requisitos de IP, VPN y entrada.

**76. D —** APN es habitual en EPC; DNN cumple un papel análogo en 5G para selección de red de datos.

**77. D —** La voz de 4G se integra como servicio IP multimedia mediante IMS.

**78. D —** La latencia extremo a extremo depende también de dónde se ejecuta la aplicación.

**79. C —** La operación necesita telemetría de acceso, IP y servicio, no una única métrica visual.

**80. B —** Un enlace rápido sigue siendo un SPOF si no existe diversidad de operador/medio cuando el servicio lo exige.

# 5. MDM, EMM y UEM: gobierno del endpoint móvil

**81. A —** MDM controla el dispositivo y su configuración de forma centralizada.

**82. D —** MAM centra el control en aplicaciones y datos asociados, pudiendo complementar MDM.

**83. B —** MCM se ocupa de contenido, mientras MDM gestiona dispositivo y MAM aplicaciones.

**84. C —** EMM amplía la gestión desde dispositivo hacia aplicaciones, contenido e identidad.

**85. B —** UEM extiende el alcance de EMM para abarcar más tipos de endpoint.

**86. C —** Las fronteras de producto varían, pero la evolución conceptual es examinable.

**87. A —** Bring Your Own Device plantea retos de privacidad, soporte y borrado selectivo.

**88. B —** COPE mantiene propiedad corporativa y permite uso personal según política.

**89. C —** COBO maximiza control corporativo a costa de menor uso personal.

**90. C —** CYOD equilibra elección con estandarización/soporte.

**91. C —** El enrolment establece la relación de gestión y suele determinar el modo de propiedad/control.

**92. D —** El estado de cumplimiento puede alimentar acceso condicional y remediación.

**93. A —** Integra IAM y postura de endpoint para aplicar confianza adaptativa.

**94. D —** En BYOD es especialmente importante separar datos personales y corporativos.

**95. D —** La separación facilita privacidad y borrado selectivo.

**96. A —** Root/jailbreak puede romper supuestos de aislamiento y debe tratarse mediante postura/compliance.

**97. A —** La distribución controlada de certificados reduce contraseñas compartidas y automatiza identidad de dispositivo/usuario.

**98. B —** La organización debe comunicar alcance de la gestión y aplicar minimización/separación.

**99. B —** El ciclo de vida de identidad y dispositivo debe cerrarse de forma coordinada.

**100. D —** UEM busca gobierno común manteniendo controles específicos por plataforma.

# 6. Videoconferencia: SIP/H.323, WebRTC y medios

**101. C —** Separar señalización, medios y procesamiento multipunto ayuda a diseñar e interoperar.

**102. A —** H.323 define arquitectura y protocolos para multimedia de paquetes; sigue siendo relevante como tecnología/interoperabilidad heredada.

**103. D —** Ambos resuelven control de sesiones con arquitecturas diferentes.

**104. C —** Señalización y medios se separan: RTP lleva el contenido en tiempo real.

**105. B —** W3C define las APIs; IETF define protocolos de transporte/conectividad relacionados.

**106. A —** No confundir plataforma de comunicaciones con formato de codificación.

**107. B —** RFC 8445 define ICE y su uso de candidatos host, server-reflexive y relayed.

**108. D —** STUN es una herramienta usada por ICE; no es por sí sola una solución completa de NAT traversal.

**109. D —** TURN consume recursos de servidor/ancho de banda y normalmente se usa como fallback mediante ICE.

**110. D —** Es una trampa clásica de WebRTC/NAT traversal.

**111. B —** SDP expresa codecs, direcciones/puertos y otros parámetros de sesión.

**112. B —** H.264, H.265, VP8/VP9 y AV1 son ejemplos de codecs, según ecosistema.

**113. A —** Opus está ampliamente adoptado para audio interactivo por calidad y adaptación a distintos bitrates.

**114. D —** No existe codec “mejor” universalmente; la plataforma y terminales importan.

**115. A —** MCU centraliza composición y puede simplificar clientes a costa de recursos/latencia de servidor.

**116. C —** SFU escala bien en muchas arquitecturas WebRTC y desplaza composición hacia clientes.

**117. A —** La elección afecta CPU servidor, ancho de banda, terminales, layouts y escala.

**118. C —** Simulcast puede ayudar a SFU a seleccionar calidad adecuada por receptor.

**119. C —** SVC y simulcast son técnicas distintas para adaptación de medios.

**120. B —** ICE intenta rutas directas y TURN permite comunicación relayed cuando fallan.

# 7. Dimensionamiento, QoS y acondicionamiento de salas

**121. D —** Dimensionar por sesiones simultáneas evita tanto infradimensionar como multiplicar por usuarios que nunca coinciden.

**122. C —** 20 × 3 Mb/s = 60 Mb/s de subida, antes de overhead y margen.

**123. A —** 60 × 1,30 = 78 Mb/s.

**124. A —** Un enlace asimétrico puede saturarse en el sentido menos capaz aunque el otro tenga margen.

**125. A —** Latencia incluye procesamiento, colas, transmisión y propagación.

**126. D —** El jitter obliga a buffers y puede afectar audio/vídeo interactivo.

**127. D —** La pérdida es distinta de latencia y jitter aunque pueden aparecer juntas por congestión.

**128. D —** Existe un compromiso entre suavidad y retardo interactivo.

**129. C —** QoS es útil donde se controla la red; en Internet público no hay garantía extremo a extremo de las mismas políticas.

**130. B —** Marcado sin políticas de cola/condicionamiento no garantiza calidad.

**131. C —** La calidad debe observarse desde red y medios, no por una única señal.

**132. A —** Para salas fijas se suele preferir red cableada, manteniendo redundancia/diseño adecuado.

**133. B —** Una reunión con audio deficiente resulta casi inutilizable aunque el vídeo sea nítido.

**134. D —** Materiales, geometría y ruido de HVAC afectan a la calidad de audio.

**135. C —** La iluminación física influye en calidad de imagen y carga de compresión.

**136. B —** El equipamiento debe adaptarse a geometría y uso real de la sala.

**137. B —** La plataforma de colaboración debe tratar identidad, invitados, grabación y administración como activos de seguridad.

**138. C —** La grabación genera un nuevo activo de información con ciclo de vida propio.

**139. B —** Accesibilidad debe considerarse en plataforma, contenido y experiencia de sala/remoto.

**140. A —** Calidad en tiempo real depende de continuidad de entrega, no solo del Mbps contratado.

# 8. Casos integradores de comunicaciones convergentes

**141. D —** La migración debe cubrir servicio, frontera, red, seguridad y operación.

**142. B —** La separación de planos es fundamental para firewall, SBC, troubleshooting y QoS.

**143. D —** La convergencia busca continuidad de identidad/servicio entre dispositivos y accesos.

**144. C —** QoS prioriza; si la capacidad es insuficiente de forma sostenida, hay que dimensionar.

**145. C —** Redundancia efectiva requiere diversidad de dominio de fallo y pruebas de conmutación.

**146. D —** BYOD exige equilibrio entre protección corporativa y minimización de datos personales.

**147. B —** En COBO la organización tiene alto control y debe actuar sobre identidad, dispositivo y datos.

**148. A —** MFA no compensa necesariamente un endpoint comprometido/no conforme.

**149. D —** NAT traversal es una causa típica de fallos selectivos de WebRTC.

**150. D —** TURN es robusto pero costoso; ICE intenta preferir caminos directos cuando funcionan.

**151. A —** SFU evita transcodificación/mezcla total y es común en WebRTC a gran escala.

**152. B —** Interoperar implica señalización, medios, codecs, seguridad y funciones de llamada.

**153. C —** 30 × 2,5 = 75 Mb/s; después se añade overhead, otros servicios y margen.

**154. C —** 75 × 1,20 = 90 Mb/s.

**155. A —** Audio claro es crítico para inteligibilidad y fatiga de reunión.

**156. B —** La QoS extremo a extremo requiere control/acuerdos de los dominios atravesados.

**157. C —** La grabación es información gestionada y debe justificarse/protegerse.

**158. A —** La convergencia técnica funciona mejor con gobierno transversal de identidad, seguridad y operación.

**159. A —** Un problema de voz/vídeo puede originarse en múltiples capas; la correlación reduce diagnósticos por intuición.

**160. B —** La respuesta integra arquitectura, movilidad, medios, calidad, endpoint, seguridad y operación de los tres epígrafes.

# Mapa mental de alto rendimiento

* NGN = convergencia sobre paquetes/IP y separación transporte–control–servicios. IMS = arquitectura 3GPP de sesiones multimedia.
* P-CSCF = primer contacto; I-CSCF = entrada/interrogación; S-CSCF = control/registro; HSS = datos de abonado en arquitectura clásica.
* SIP señaliza; SDP describe medios; RTP transporta; RTCP monitoriza/controla. SBC protege la frontera.
* VoIP ≠ ToIP ≠ UC. QoS no crea ancho de banda; jitter buffer reduce variación a costa de retardo.
* 2G voz digital/SMS → 3G datos → 4G LTE/EPC all-IP → 5G NR/5GC. Release 18 = inicio de 5G-Advanced.
* 5G NSA depende de LTE/EPC; SA usa 5G Core. Handover ≠ roaming. eSIM cambia aprovisionamiento, no elimina autenticación.
* MDM dispositivo; MAM apps; MCM contenido; EMM integra movilidad; UEM unifica endpoints. BYOD/COPE/COBO/CYOD cambian control/privacidad.
* H.323 y SIP son señalización/control. WebRTC ≠ codec. ICE coordina traversal; STUN descubre/comprueba; TURN relaya.
* MCU mezcla/transcodifica; SFU reenvía selectivamente. Simulcast ≠ SVC.
* Dimensionamiento = bitrate × concurrencia × sentido + overhead + margen. Medir subida y bajada.
* Calidad = latencia + jitter + pérdida + capacidad. QoS necesita política extremo a extremo en dominios controlados.
* Sala: primero audio/acústica, después cámara, iluminación, pantalla, red, seguridad, accesibilidad y operación.

# Trampas que deben quedar eliminadas

* IMS ≠ VoIP.
* P-CSCF ≠ I-CSCF ≠ S-CSCF.
* SIP ≠ RTP.
* SDP ≠ codec.
* SBC ≠ PBX.
* VoIP ≠ ToIP.
* QoS ≠ ancho de banda nuevo.
* 5G SA ≠ NSA.
* 5G-Advanced ≠ 6G.
* Handover ≠ roaming.
* eSIM ≠ ausencia de autenticación.
* MDM ≠ UEM.
* BYOD ≠ COPE ≠ COBO ≠ CYOD.
* WebRTC ≠ codec.
* ICE ≠ STUN ≠ TURN.
* MCU ≠ SFU.
* Jitter ≠ latencia ≠ pérdida.
* Dimensionar por concurrencia ≠ usuarios totales.
* DSCP ≠ garantía de QoS Internet.
* Grabación ≠ retención indefinida.

# Checklist de decisión en supuesto

* 1) Separa acceso, control/señalización, medios y servicios.
* 2) Para voz/UC: PBX/servicio, SIP trunks, SBC, QoS, seguridad y continuidad.
* 3) Para móvil: cobertura, operador, 4G/5G, SA/NSA si importa, redundancia y direccionamiento/VPN.
* 4) Define modelo BYOD/COPE/COBO/CYOD y UEM con enrolment, compliance, certificados y acceso condicional.
* 5) Para vídeo: SIP/H.323/WebRTC, ICE/STUN/TURN, codecs e interoperabilidad.
* 6) Calcula bitrate por concurrencia, subida/bajada, overhead y margen.
* 7) Controla latencia, jitter y pérdida con QoS/monitorización donde se gestione la ruta.
* 8) Diseña sala: audio/acústica, cámara, iluminación, pantalla, red, seguridad, grabación y accesibilidad.
* 9) Añade HA, doble operador/trunk cuando proceda, monitorización, logs y procedimientos de fallo/failback.
