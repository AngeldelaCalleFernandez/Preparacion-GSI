GSI A2 — PRÁCTICA ACTIVA 19

**NGN · IMS · MOVILIDAD · UEM · VIDEOCONFERENCIA · QoS**

160 preguntas · 4 opciones · cierre directo de IV.14, IV.15 e IV.16

**CUADERNO DE TRABAJO**

# Cómo usar esta práctica

Objetivo: convertir los tres últimos temas parciales del mapa en cobertura directa: IV.14 NGN/IMS/VoIP/UC, IV.15 comunicaciones móviles y MDM/EMM/UEM, e IV.16 videoconferencia, protocolos, QoS y salas.

Método: responde sin apuntes. Marca seguridad alta/media/baja. En cálculos escribe la operación. Registra cada fallo con una regla breve y repítelo 24–72 horas después.

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

**1. ¿Qué describe mejor una NGN (Next Generation Network)?**

A) Una red exclusiva de voz analógica.

B) Una red convergente basada en paquetes/IP que separa transporte de control/servicios y soporta múltiples servicios con QoS y movilidad.

C) Un estándar de cableado estructurado.

D) Un protocolo de cifrado de extremo a extremo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**2. ¿Qué problema arquitectónico intenta superar el enfoque NGN?**

A) La existencia de redes verticales separadas para cada servicio, sustituyéndolas por una plataforma convergente.

B) La falta de direcciones MAC en Ethernet.

C) La imposibilidad de usar fibra óptica.

D) La necesidad de eliminar todo control de calidad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**3. ¿Qué es IMS?**

A) Un codec de audio.

B) Una arquitectura 3GPP para control de sesiones y prestación de servicios multimedia IP.

C) Un protocolo de routing interior.

D) Una tecnología de almacenamiento SAN.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**4. ¿Cuál es una idea central de IMS?**

A) Separar acceso, control de sesión y servicios para facilitar convergencia e independencia del acceso.

B) Obligar a transportar voz por circuitos dedicados.

C) Eliminar la autenticación del abonado.

D) Usar únicamente Wi-Fi como acceso.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**5. ¿Qué función clásica desempeña P-CSCF en IMS?**

A) Almacenar vídeo grabado.

B) Codificar audio G.711.

C) Actuar como primer punto de contacto SIP del terminal con IMS.

D) Asignar direcciones MAC.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**6. ¿Qué función clásica desempeña I-CSCF?**

A) Servir como punto de entrada/interrogación hacia un dominio IMS y ayudar a localizar la función de servicio adecuada.

B) Transportar RTP de todos los usuarios obligatoriamente.

C) Gestionar el switch de acceso Ethernet.

D) Realizar mezcla de vídeo como MCU.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**7. ¿Qué función clásica desempeña S-CSCF?**

A) Ser un relay TURN.

B) Controlar la sesión/registro del abonado y aplicar lógica de servicio IMS asociada.

C) Actuar como servidor DHCP.

D) Convertir fibra en cobre.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**8. ¿Qué representa HSS en la arquitectura IMS tradicional?**

A) Un protocolo de señalización de vídeo.

B) Un repositorio de datos de abonado, identidad y perfil utilizado por funciones IMS.

C) Un switch de voz físico.

D) Un codec de alta eficiencia.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**9. ¿Qué afirmación es correcta sobre IMS y 5G?**

A) 5G prohíbe IMS.

B) IMS es exactamente el 5G Core.

C) IMS solo puede funcionar en 2G.

D) IMS continúa siendo relevante para servicios multimedia/voz; la arquitectura móvil evoluciona, pero no convierte IMS en un concepto obsoleto.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**10. ¿Qué relación hay entre IMS y SIP?**

A) IMS usa SIP como base de control de sesiones, con perfiles y procedimientos definidos por 3GPP.

B) IMS sustituye SIP por SNMP.

C) SIP transporta únicamente el audio de IMS.

D) No existe relación normativa entre ambos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**11. ¿Qué relación hay entre IMS y SDP?**

A) SDP cifra medios.

B) SDP es un codec.

C) SDP reemplaza a RTP.

D) SDP describe parámetros de medios/sesión que se intercambian dentro de la señalización, mientras IMS/SIP controla la sesión.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**12. ¿VoIP necesita obligatoriamente IMS?**

A) Sí, toda voz IP es IMS.

B) Solo si usa UDP.

C) Solo si existe un SBC.

D) No. Puede existir VoIP basada en SIP u otras arquitecturas sin desplegar IMS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**13. ¿Cuál es la relación más correcta entre NGN e IMS?**

A) NGN es un concepto amplio de red convergente; IMS es una arquitectura concreta de control/servicios multimedia IP dentro de ese contexto.

B) Son dos nombres del mismo codec.

C) NGN es un protocolo de aplicación y IMS una VLAN.

D) IMS es el cableado físico de una NGN.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**14. ¿Qué objetivo tiene desacoplar acceso y servicios en IMS/NGN?**

A) Eliminar toda política de seguridad.

B) Forzar que cada servicio tenga su red física.

C) Permitir que servicios e identidad se mantengan de forma más independiente de la tecnología de acceso.

D) Evitar movilidad entre accesos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**15. ¿Qué debe dominarse para GSI sobre P-CSCF/I-CSCF/S-CSCF?**

A) Las direcciones IP reales de operadores.

B) Todos los códigos de fabricante.

C) La función conceptual de cada entidad y el flujo de control, no memorizar cada interfaz de cada release.

D) Los números de serie de equipos IMS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**16. ¿Qué aporta el control de políticas/QoS en una arquitectura convergente?**

A) Crear ancho de banda físico nuevo.

B) Eliminar la congestión sin capacidad.

C) Sustituir la autenticación.

D) Permitir tratamiento diferenciado y coherente para servicios sensibles como voz y vídeo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**17. ¿Qué significa convergencia de servicios en este contexto?**

A) Convertir todos los datos en audio.

B) Usar un único cable sin redundancia.

C) Integrar voz, vídeo, mensajería, presencia y otros servicios sobre plataformas e identidades comunes.

D) Eliminar protocolos de señalización.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**18. ¿Qué riesgo tendría interpretar IMS como “un único servidor”?**

A) Ninguno; IMS es siempre un appliance único.

B) Ignorar que es una arquitectura distribuida con varias funciones de control, datos de abonado y servicios.

C) Solo afectaría al cableado.

D) Únicamente cambiaría el codec.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**19. En un diagrama de IMS, ¿qué capa conviene separar visualmente?**

A) Solo cables y racks.

B) HTML, CSS y JavaScript.

C) RAID, SAN y NAS.

D) Acceso/transporte, control de sesión y servicios/datos de abonado.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**20. Un organismo quiere conservar identidad y servicios de comunicaciones al cambiar entre accesos fijo y móvil. ¿Qué principio es más relevante?**

A) Usar exclusivamente telefonía analógica.

B) Desactivar movilidad.

C) Convergencia fijo-móvil con servicios desacoplados del acceso y control de sesión/identidad coherente.

D) Asignar una VLAN diferente a cada llamada como única medida.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 2. SIP, RTP, VoIP, UC, QoS y convergencia

**21. ¿Cuál es la función principal de SIP?**

A) Transportar el audio codificado.

B) Señalizar y controlar el establecimiento, modificación y terminación de sesiones multimedia.

C) Reservar espacio en disco.

D) Asignar direcciones IP por DHCP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**22. ¿Qué método SIP se asocia típicamente al inicio de una sesión?**

A) INVITE.

B) GET.

C) PUBLISH de SNMP.

D) MOUNT.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**23. ¿Qué método SIP se usa para terminar normalmente un diálogo/sesión establecida?**

A) ARP.

B) COMMIT.

C) BYE.

D) PING como método SIP estándar de cierre.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**24. ¿Qué método SIP se relaciona con el registro de la ubicación/contacto de un usuario?**

A) REGISTER.

B) DELETE.

C) TRACE de IP.

D) SUBNET.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**25. ¿Qué indica una respuesta SIP 1xx?**

A) Éxito definitivo siempre.

B) Una respuesta provisional/informativa.

C) Error global exclusivamente.

D) Un paquete RTP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**26. ¿Qué diferencia esencial existe entre SIP y RTP?**

A) SIP señaliza/controla sesiones; RTP transporta medios en tiempo real.

B) Ambos son codecs.

C) RTP registra usuarios y SIP lleva audio.

D) SIP es un protocolo de almacenamiento.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**27. ¿Qué función cumple RTCP?**

A) Aportar información de control, participantes y calidad asociada a una sesión RTP.

B) Transportar exclusivamente señalización SIP.

C) Cifrar automáticamente todo RTP.

D) Asignar números telefónicos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**28. ¿RTP garantiza por sí solo QoS?**

A) Sí, siempre garantiza latencia cero.

B) Solo si usa IPv6.

C) No. Transporta medios y aporta secuencias/timestamps, pero no reserva recursos ni garantiza QoS.

D) Sí, porque RTP sustituye a la red IP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**29. ¿Qué es SDP en una llamada SIP?**

A) Un codec de audio.

B) Una descripción de los medios y parámetros de sesión, como codecs y puertos/direcciones.

C) Un algoritmo de cifrado.

D) Un sistema de directorio.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**30. ¿Qué es un SBC?**

A) Una PBX que obligatoriamente almacena buzones.

B) Un switch L2 de acceso.

C) Un elemento de frontera que intermedia señalización/medios, aplica políticas, seguridad, normalización y ayuda con NAT/interconexión.

D) Un protocolo de compresión de vídeo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**31. ¿Qué diferencia conceptual hay entre PBX y SBC?**

A) Son siempre el mismo equipo y función.

B) El SBC solo sirve como codec.

C) La PBX es un protocolo de routing.

D) La PBX presta lógica de telefonía; el SBC controla/protege la frontera de sesiones e interconexión.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**32. ¿Qué protege SRTP principalmente?**

A) El registro DNS.

B) El almacenamiento de la PBX.

C) Los medios RTP, aportando confidencialidad/integridad según perfil.

D) La alimentación PoE.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**33. ¿Qué combinación es coherente para proteger señalización y medios?**

A) HTTP sin TLS y RTP abierto como única medida.

B) SIP sobre TLS cuando aplique y SRTP para medios.

C) SNMPv1 y FTP.

D) ARP y STP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**34. ¿Qué es VoIP?**

A) Transmisión de voz utilizando redes/protocolos IP.

B) La gestión completa de cualquier endpoint corporativo.

C) Un único fabricante de PBX.

D) Una tecnología de radio 5G exclusiva.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**35. ¿Qué suele expresar ToIP en un entorno corporativo?**

A) Solo paquetes RTP individuales.

B) Una licencia de software.

C) Un algoritmo de routing.

D) El sistema completo de telefonía sobre IP: terminales, PBX, numeración, servicios e interconexión.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**36. ¿Qué integra una plataforma de comunicaciones unificadas (UC)?**

A) Solo almacenamiento SAN.

B) Únicamente correo SMTP.

C) Solo Wi-Fi de invitados.

D) Voz, vídeo/reuniones, mensajería, presencia y colaboración alrededor de identidad/directorio.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**37. ¿Qué variables de red perjudican especialmente voz en tiempo real?**

A) Capacidad de disco, inodos y RAID.

B) Latencia, jitter y pérdida de paquetes.

C) Tamaño del código fuente.

D) Número de usuarios de Active Directory sin tráfico.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**38. ¿Qué hace un jitter buffer?**

A) Aumenta el ancho de banda físico.

B) Elimina cualquier pérdida pasada.

C) Absorbe variación de llegada almacenando temporalmente paquetes, a costa de añadir algo de retardo.

D) Sustituye a un SBC.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**39. ¿Qué afirmación es correcta sobre QoS?**

A) Duplica automáticamente la capacidad.

B) Hace innecesario dimensionar.

C) Garantiza calidad aunque Internet ignore las marcas.

D) Clasifica/marca y prioriza tráfico en congestión, pero no crea ancho de banda ni arregla una ruta insuficiente.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**40. Un organismo migra a SIP trunk y UC. ¿Qué conjunto es más completo?**

A) Un único enlace sin SBC ni logs.

B) Solo comprar teléfonos de mayor resolución.

C) Deshabilitar cifrado para reducir complejidad.

D) Redundancia de trunk/PBX o servicio, SBC, QoS, seguridad de señalización/medios, monitorización y plan de continuidad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 3. Generaciones móviles: de 2G a 5G-Advanced

**41. ¿Qué caracteriza de forma general a 2G?**

A) Ser una red 5G SA.

B) Digitalización de la voz y servicios como SMS, con GSM como referencia y datos añadidos posteriormente mediante GPRS/EDGE.

C) Usar exclusivamente voz sobre IMS.

D) Introducir network slicing.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**42. ¿Qué aportó 3G de forma característica?**

A) Generalización de datos móviles con UMTS/HSPA y mayor capacidad que 2G.

B) Eliminar el core móvil.

C) Introducir Wi-Fi 7.

D) Convertir toda voz en WebRTC.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**43. ¿Qué rasgo arquitectónico es característico de 4G/LTE?**

A) Uso obligatorio de circuitos TDM para datos.

B) Una plataforma de banda ancha móvil all-IP apoyada en LTE/EPC.

C) Ausencia de autenticación SIM.

D) Sustitución de IP por ATM en el usuario.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**44. ¿Cómo se presta típicamente voz sobre LTE?**

A) Mediante VoLTE apoyado en IMS.

B) Mediante H.323 obligatorio en cada terminal.

C) Solo por circuitos 2G sin alternativas.

D) Mediante SNMP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**45. ¿Qué elementos generales definen 5G?**

A) 5G NR como acceso radio y 5G Core, con mejoras de capacidad, latencia y densidad según servicio/despliegue.

B) Solo una nueva tarjeta SIM sin cambios de red.

C) Una versión de Wi-Fi.

D) Un protocolo de correo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**46. ¿Qué significa eMBB en 5G?**

A) Emergency Mobile Backup Bus.

B) Enhanced Mobile Broadband, orientado a banda ancha móvil de alta capacidad.

C) Un sistema de gestión MDM.

D) Un codec de voz.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**47. ¿Qué significa URLLC?**

A) Una red social móvil.

B) Un protocolo de cifrado de disco.

C) Ultra-Reliable Low-Latency Communications, orientado a escenarios que requieren alta fiabilidad y baja latencia.

D) Una versión de LTE solo para voz.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**48. ¿Qué significa mMTC?**

A) Massive Machine-Type Communications, orientado a gran densidad de dispositivos/IoT.

B) Multimedia Mobile Telephony Codec.

C) Mobile Managed TLS Certificate.

D) Un método de SIP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**49. ¿Qué es 5G-Advanced?**

A) El nombre oficial de 6G.

B) Una variante de 3G.

C) Un protocolo Wi-Fi.

D) La evolución de 5G cuya primera release 3GPP es Release 18.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**50. ¿Release 18 equivale a 6G?**

A) Sí, siempre.

B) Solo en redes Wi-Fi.

C) Sí, porque abandona NR.

D) No; es la primera release de 5G-Advanced, una evolución de 5G.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**51. ¿Qué separación conceptual existe en una red móvil?**

A) HTML y CSS.

B) Disco y filesystem exclusivamente.

C) Acceso radio (UE/celdas/estaciones) y core, que gestiona movilidad, sesión, autenticación y salida a servicios/datos.

D) DMS y CMS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**52. ¿Qué es el UE?**

A) El servidor de correo del operador.

B) Una VLAN de voz.

C) El controlador de una MCU.

D) El equipo de usuario que se conecta a la red móvil.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**53. ¿Qué es una celda en comunicaciones móviles?**

A) Una tabla de una hoja de cálculo.

B) Un paquete SIP.

C) Un LUN de almacenamiento.

D) Un área/recursos de cobertura radio servidos por infraestructura de acceso, con reutilización y planificación de radio.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**54. ¿Qué es handover?**

A) Una copia de seguridad del móvil.

B) Un cambio de contraseña de UEM.

C) El procedimiento para mantener continuidad de servicio/sesión al pasar entre celdas o accesos según tecnología.

D) Una compresión de vídeo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**55. ¿Qué función cumple SIM/eSIM?**

A) Sustituir el cifrado del sistema operativo.

B) Mejorar físicamente la antena.

C) Alojar/gestionar identidad y credenciales de suscripción para autenticación y acceso a la red.

D) Actuar como servidor TURN.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**56. ¿Qué diferencia principal introduce eSIM frente a SIM física?**

A) Convierte 4G automáticamente en 5G.

B) Permite aprovisionar perfiles de suscripción de forma embebida/remota según ecosistema, sin eliminar los mecanismos de autenticación.

C) Elimina al operador.

D) Desactiva la identidad del abonado.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**57. ¿Más “G” garantiza siempre menor latencia de aplicación extremo a extremo?**

A) Sí, la latencia siempre es cero en 5G.

B) No; radio es solo una parte y también influyen core, transporte, Internet/cloud, servidor y aplicación.

C) Solo depende de la pantalla.

D) Sí, aunque el servicio esté en otro continente.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**58. ¿Qué debe compararse al elegir 4G/5G como respaldo WAN?**

A) Solo el nombre comercial del plan.

B) Únicamente el color del router.

C) Cobertura real, capacidad, latencia, operador, CGNAT/IP, redundancia física, antena y SLA/uso previsto.

D) Solo la generación sin medir señal.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**59. ¿Qué papel tiene el espectro radioeléctrico en redes móviles?**

A) Es un recurso regulado y limitado cuya banda/ancho condicionan cobertura, capacidad y propagación.

B) No influye en cobertura.

C) Es equivalente a almacenamiento SSD.

D) Solo se usa en telefonía fija.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**60. Un examen pregunta por la evolución 2G→3G→4G→5G. ¿Qué eje es más útil?**

A) Memorizar únicamente marcas de móviles.

B) Aprender solo precios de tarifas.

C) Ignorar arquitectura y servicios.

D) Relacionar voz/datos, acceso radio y evolución del core, en vez de memorizar solo velocidades máximas.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 4. LTE/5G: radio, core, movilidad y slicing

**61. ¿Qué es E-UTRAN?**

A) La red de acceso radio de LTE.

B) El core 5G completo.

C) Un sistema MDM.

D) Un codec de vídeo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**62. ¿Qué es EPC?**

A) Un protocolo de correo.

B) Una plataforma de videoconferencia.

C) Evolved Packet Core, el core asociado a LTE/4G.

D) Una técnica de compresión.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**63. ¿Qué es 5G NR?**

A) El 5G Core.

B) Un sistema de gestión documental.

C) La tecnología de acceso radio New Radio de 5G.

D) Una VLAN.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**64. ¿Qué caracteriza una arquitectura 5G SA?**

A) Usa 5G NR con 5G Core de forma autónoma respecto al EPC para la arquitectura principal.

B) Depende obligatoriamente de EPC como core.

C) Solo puede usar 2G radio.

D) Es una modalidad de Wi-Fi.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**65. ¿Qué caracteriza una arquitectura 5G NSA en términos generales?**

A) Elimina LTE por completo.

B) Combina NR con infraestructura LTE/EPC en un despliegue no autónomo.

C) No usa radio 5G.

D) Es sinónimo de 5G-Advanced.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**66. ¿Cuál es la diferencia de examen más importante entre 5G SA y NSA?**

A) SA usa cobre y NSA fibra.

B) NSA es un sistema operativo.

C) SA se apoya en 5G Core; NSA mantiene dependencia de LTE/EPC en la arquitectura combinada.

D) SA significa acceso Wi-Fi.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**67. ¿Qué es network slicing?**

A) Particionar físicamente una SIM con tijeras.

B) Un método de compresión de audio.

C) Un tipo de DNS.

D) Creación de redes lógicas con características/políticas diferenciadas sobre infraestructura común, según capacidades de la plataforma.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**68. ¿Network slicing equivale a una VLAN?**

A) No; una VLAN es segmentación L2, mientras slicing abarca una construcción lógica de servicio/red móvil más amplia.

B) Sí, son idénticos.

C) Una VLAN contiene siempre un 5G Core.

D) Slicing solo se usa en Ethernet cableada.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**69. ¿Qué ventaja puede aportar un core 5G con arquitectura basada en servicios?**

A) Eliminar cualquier función de autenticación.

B) Obligar a usar TDM.

C) Mayor modularidad e interacción entre funciones mediante servicios/interfaces definidos.

D) No necesitar observabilidad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**70. ¿Qué proceso mantiene una sesión cuando el usuario cambia de celda?**

A) Backup incremental.

B) Handover/mecanismos de movilidad.

C) BGP entre navegadores.

D) XSLT.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**71. ¿Qué es roaming?**

A) Cambio entre dos AP de la misma WLAN exclusivamente.

B) Prestación de servicio móvil mediante una red visitada distinta de la red doméstica del abonado, con acuerdos y autenticación correspondientes.

C) Un codec de baja latencia.

D) Un modo de UEM.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**72. ¿Handover y roaming son sinónimos?**

A) Sí, siempre.

B) No; handover mantiene movilidad entre celdas/accesos, mientras roaming implica uso de otra red/operador o dominio visitado.

C) Roaming solo significa reiniciar el móvil.

D) Handover es una licencia de operador.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**73. ¿Qué función cumple el core móvil respecto al acceso radio?**

A) Solo amplifica señal RF.

B) Solo alimenta antenas.

C) Únicamente almacena vídeos.

D) Gestiona identidad/autenticación, movilidad, sesiones, políticas y conectividad hacia redes/servicios, entre otras funciones.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**74. ¿Qué criterio es correcto al diseñar cobertura móvil en un edificio?**

A) Medir cobertura/capacidad real y considerar bandas, materiales, densidad, operador y soluciones indoor si son necesarias.

B) Confiar solo en que exista 5G en el mapa nacional.

C) Instalar un repetidor no autorizado sin estudio.

D) Medir únicamente junto a una ventana.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**75. ¿Qué problema puede introducir CGNAT para ciertos servicios empresariales móviles?**

A) Dificultar conectividad entrante directa y algunos escenarios de direccionamiento extremo a extremo.

B) Aumentar físicamente la batería.

C) Convertir UDP en fibra.

D) Eliminar necesidad de firewall.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**76. ¿Qué es un APN/DNN conceptualmente?**

A) Un codec de voz.

B) Un protocolo de videoconferencia.

C) Un algoritmo de compresión.

D) Un identificador/configuración que selecciona conectividad/servicio de datos del abonado hacia redes de datos, según generación.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**77. ¿Qué relación hay entre VoLTE e IMS?**

A) VoLTE sustituye IMS por STP.

B) IMS solo sirve para SMS 2G.

C) VoLTE es un codec de vídeo.

D) VoLTE usa IMS para prestar telefonía de voz sobre LTE.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**78. ¿Qué relación puede existir entre 5G y edge computing?**

A) Edge garantiza latencia cero.

B) 5G obliga a que todas las aplicaciones residan en la antena.

C) Edge sustituye al core móvil.

D) Acercar procesamiento a la red/usuario puede reducir latencia y tráfico hacia centros remotos en casos adecuados.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**79. ¿Qué debería monitorizarse en un enlace móvil empresarial crítico?**

A) Solo el icono de barras del teléfono.

B) Solo la versión del navegador.

C) Señal/calidad radio, disponibilidad, latencia, pérdida, throughput, consumo, cambios de celda/operador y estado del túnel/servicio.

D) Solo espacio libre en disco.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**80. Una sede usa 5G como único acceso para un servicio esencial. ¿Qué riesgo debe evaluarse especialmente?**

A) Que 5G no usa IP.

B) Dependencia de cobertura/capacidad y de un único operador/dominio de fallo; considerar redundancia real.

C) Que no existe autenticación.

D) Que no puede transportar datos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 5. MDM, EMM y UEM: gobierno del endpoint móvil

**81. ¿Qué es MDM?**

A) Gestión de dispositivos móviles: enrolment, configuración, inventario, cumplimiento y acciones de seguridad sobre el dispositivo.

B) Un protocolo de radio 5G.

C) Un codec de vídeo.

D) Un tipo de IMS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**82. ¿Qué es MAM?**

A) Gestión del espectro.

B) Un mecanismo RTP.

C) Una topología de red.

D) Mobile Application Management: gestión y políticas sobre aplicaciones móviles corporativas.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**83. ¿Qué es MCM en movilidad empresarial?**

A) Mobile Core Modulation.

B) Mobile Content Management: control/distribución de contenido corporativo en móviles.

C) Un método de SIP.

D) Un tipo de SIM.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**84. ¿Qué es EMM?**

A) Una generación de telefonía.

B) Un codec de audio.

C) Enterprise Mobility Management, un paraguas que integra capacidades como MDM, MAM y gestión de contenido/identidad móvil.

D) Una versión de WebRTC.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**85. ¿Qué es UEM?**

A) Un estándar de radio.

B) Unified Endpoint Management, gestión unificada de endpoints móviles y tradicionales desde una plataforma/política común.

C) Una entidad IMS.

D) Un protocolo de QoS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**86. ¿Qué relación conceptual es más correcta?**

A) UEM es solo un antivirus.

B) MDM siempre incluye todos los PCs y servidores.

C) MDM es una capacidad más acotada; EMM/UEM amplían el gobierno hacia apps, contenido, identidad y otros endpoints.

D) EMM es un codec.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**87. ¿Qué significa BYOD?**

A) El usuario aporta un dispositivo personal que se usa para fines corporativos bajo políticas definidas.

B) Dispositivo corporativo solo negocio.

C) Dispositivo corporativo con uso personal.

D) Catálogo corporativo obligatorio.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**88. ¿Qué significa COPE?**

A) Dispositivo personal sin gestión.

B) Corporate Owned, Personally Enabled: dispositivo corporativo con cierto uso personal permitido.

C) Corporativo solo para negocio.

D) Elección libre sin catálogo ni propiedad corporativa.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**89. ¿Qué significa COBO?**

A) Dispositivo personal.

B) Corporativo con uso personal abierto.

C) Corporate Owned, Business Only: dispositivo corporativo destinado exclusivamente al trabajo.

D) Una red de invitados.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**90. ¿Qué significa CYOD?**

A) Cualquier equipo sin restricciones.

B) Un protocolo de VPN.

C) Choose Your Own Device: el usuario elige entre un catálogo aprobado, normalmente bajo condiciones corporativas definidas.

D) Un modo de 5G SA.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**91. ¿Qué es enrolment en UEM/MDM?**

A) Cambiar de celda 5G.

B) Codificar vídeo.

C) El proceso de registrar/vincular un dispositivo a la gestión corporativa y aplicar identidad/perfiles.

D) Crear un registro DNS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**92. ¿Qué es compliance de dispositivo?**

A) Medición del bitrate RTP.

B) Una prueba de cobertura radio.

C) Una licencia de software.

D) Evaluación de si el endpoint cumple requisitos como versión, cifrado, bloqueo, ausencia de root/jailbreak y configuración exigida.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**93. ¿Qué es acceso condicional en este contexto?**

A) Permitir o denegar acceso a recursos según identidad, dispositivo, cumplimiento, riesgo y otras señales.

B) Abrir siempre desde cualquier terminal.

C) Un tipo de NAT.

D) Un codec móvil.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**94. ¿Qué diferencia hay entre remote wipe completo y borrado selectivo?**

A) Son idénticos siempre.

B) El selectivo borra la SIM físicamente.

C) El completo solo cierra una aplicación.

D) El completo intenta eliminar el dispositivo gestionado; el selectivo retira datos/perfil corporativo conservando lo personal cuando procede.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**95. ¿Qué es un perfil/contenedor de trabajo en móviles?**

A) Un nuevo core 5G.

B) Una VLAN física dentro de la SIM.

C) Un codec.

D) Un mecanismo para separar aplicaciones/datos corporativos del ámbito personal con políticas diferenciadas.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**96. ¿Qué debería hacer UEM ante un dispositivo con root/jailbreak detectado si la política lo considera no conforme?**

A) Marcar incumplimiento y restringir/remediar acceso según riesgo y política.

B) Ignorarlo siempre.

C) Desactivar logs.

D) Aumentar el bitrate de videollamada.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**97. ¿Qué papel tienen certificados gestionados por UEM?**

A) Facilitar autenticación fuerte y configuración segura de Wi-Fi, VPN o servicios corporativos.

B) Aumentar cobertura radio.

C) Sustituir el cifrado de disco.

D) Crear backups automáticos de cualquier app.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**98. ¿Qué riesgo de privacidad debe controlarse en BYOD?**

A) Que el dispositivo tenga batería.

B) Recoger o inspeccionar más datos personales de los necesarios y realizar borrados excesivos.

C) Que use IPv6.

D) Que soporte cámaras.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**99. ¿Qué debe ocurrir en el offboarding de un empleado con dispositivo gestionado?**

A) Mantener acceso indefinido.

B) Revocar tokens/certificados y accesos, retirar apps/datos corporativos según propiedad y conservar evidencias necesarias.

C) Borrar siempre todos los datos personales.

D) Dejar certificados activos para facilitar retorno.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**100. Un parque mixto incluye Windows, macOS, iOS y Android. ¿Qué enfoque encaja mejor?**

A) MDM limitado a una única app sin inventario.

B) Gestionar solo por correo manual.

C) No aplicar políticas porque los SO son distintos.

D) UEM con políticas por plataforma, identidad común, compliance y automatización de ciclo de vida.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 6. Videoconferencia: SIP/H.323, WebRTC y medios

**101. ¿Qué describe mejor una arquitectura de videoconferencia?**

A) Solo una cámara conectada a HDMI.

B) Únicamente una aplicación de chat.

C) Captura y codificación, señalización/negociación, transporte de medios, función multipunto si existe y decodificación/presentación.

D) Un sistema de almacenamiento sin red.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**102. ¿Qué es H.323?**

A) Una recomendación/suite ITU-T para comunicaciones multimedia sobre redes basadas en paquetes.

B) Un codec único de vídeo.

C) Un protocolo de almacenamiento.

D) Una generación móvil.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**103. ¿Qué relación hay entre SIP y H.323?**

A) Son el mismo protocolo.

B) H.323 transporta siempre HTML.

C) SIP es un codec de H.323.

D) Son familias de señalización/control diferentes que pueden encontrarse en videoconferencia y requerir interoperabilidad/gateway.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**104. ¿Qué transporta normalmente audio/vídeo en una solución SIP o H.323?**

A) SIP INVITE como flujo de vídeo.

B) DNS.

C) RTP, acompañado por RTCP para control/estadísticas.

D) SNMP traps.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**105. ¿Qué es WebRTC?**

A) Un codec de vídeo.

B) Un conjunto de APIs y protocolos para comunicaciones de audio/vídeo/datos en tiempo real entre navegadores o aplicaciones compatibles.

C) Una PBX física.

D) Un protocolo de routing.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**106. ¿WebRTC es un codec?**

A) No; utiliza codecs y protocolos, pero WebRTC es una plataforma/conjunto de APIs y mecanismos de comunicación en tiempo real.

B) Sí, es exactamente AV1.

C) Sí, es Opus.

D) Sí, es H.264.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**107. ¿Qué es ICE?**

A) Un codec de audio.

B) Un marco/protocolo para descubrir y comprobar pares de candidatos de conectividad y atravesar NAT en comunicaciones interactivas.

C) Un sistema de ficheros.

D) Un algoritmo de SEO.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**108. ¿Qué función cumple STUN?**

A) Relay obligatorio de todo tráfico.

B) Cifrar vídeo.

C) Señalizar sesiones SIP.

D) Ayudar a un endpoint a conocer su dirección/puerto mapeado por NAT y comprobar conectividad como herramienta de traversal.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**109. ¿Qué función cumple TURN?**

A) Descubrir únicamente la IP local sin relay.

B) Comprimir vídeo.

C) Actuar como PBX.

D) Proporcionar un relay cuando no es posible establecer conectividad directa adecuada entre peers.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**110. ¿Cuál es la distinción correcta entre STUN y TURN?**

A) Son nombres del mismo codec.

B) TURN solo sirve para DNS.

C) STUN siempre transporta todo el vídeo.

D) STUN ayuda a descubrir/comprobar mapeos/conectividad; TURN relaya tráfico cuando es necesario.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**111. ¿Qué papel cumple SDP en WebRTC/SIP?**

A) Ser el canal de vídeo.

B) Describir capacidades y parámetros de medios que se negocian entre extremos.

C) Crear usuarios del directorio.

D) Administrar dispositivos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**112. ¿Qué es un codec de vídeo?**

A) Un protocolo de señalización.

B) Un mecanismo para codificar/decodificar vídeo, equilibrando bitrate, calidad, complejidad y compatibilidad.

C) Un servidor TURN.

D) Una política UEM.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**113. ¿Qué codec de audio es especialmente habitual en WebRTC moderno?**

A) Opus.

B) BGP.

C) XSD.

D) MPLS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**114. ¿Qué compromiso suele existir al usar mayor compresión de vídeo?**

A) Siempre reduce CPU.

B) Elimina necesidad de red.

C) Hace innecesaria negociación de codecs.

D) Puede reducir bitrate a costa de más complejidad/CPU, latencia potencial y requisitos de compatibilidad/licencia.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**115. ¿Qué es una MCU en videoconferencia?**

A) Una unidad multipunto que puede recibir, decodificar/mezclar/componer y volver a codificar medios.

B) Un relay IP que nunca procesa medios.

C) Un sistema MDM.

D) Una estación base 5G.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**116. ¿Qué es una SFU?**

A) Un codec de audio.

B) Una función IMS de registro.

C) Una unidad de reenvío selectivo que distribuye streams/capas sin mezclar y recodificar todo como una MCU clásica.

D) Un servidor DHCP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**117. ¿Qué diferencia esencial hay entre MCU y SFU?**

A) MCU mezcla/transcodifica más en servidor; SFU reenvía selectivamente streams y deja más composición al cliente.

B) Son idénticas.

C) SFU es un codec y MCU una VLAN.

D) MCU solo funciona en 2G.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**118. ¿Qué es simulcast en videoconferencia?**

A) Un único stream sin variantes.

B) Un método SIP de cierre.

C) Enviar varias versiones simultáneas del mismo vídeo a distintas resoluciones/bitrates para selección adaptativa.

D) Un modo de 5G Core.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**119. ¿Qué es SVC conceptualmente?**

A) Un servidor de correo.

B) Una VLAN de voz.

C) Codificación escalable en capas que permite adaptar calidad/bitrate seleccionando capas del stream.

D) Un tipo de SIM.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**120. Un navegador no logra conexión P2P porque ambos extremos están tras NAT restrictivo. ¿Qué recurso es el fallback típico?**

A) Un sitemap.

B) Un servidor TURN como relay, coordinado normalmente mediante ICE.

C) Un S-CSCF como relay obligatorio de WebRTC.

D) Un servidor NTP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 7. Dimensionamiento, QoS y acondicionamiento de salas

**121. ¿Qué variables deben incluirse al dimensionar ancho de banda de videoconferencia?**

A) Solo usuarios registrados.

B) Solo tamaño del edificio.

C) Únicamente resolución máxima de una cámara sin concurrencia.

D) Bitrate por flujo, concurrencia real, direcciones subida/bajada, overhead, presentaciones y margen.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**122. Si 20 salas simultáneas envían 3 Mb/s cada una hacia cloud, ¿qué subida agregada aproximada requieren antes de margen?**

A) 6 Mb/s.

B) 23 Mb/s.

C) 60 Mb/s.

D) 600 Mb/s.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**123. Si a 60 Mb/s de tráfico estimado se añade un 30% de margen, ¿qué capacidad resulta aproximadamente?**

A) 78 Mb/s.

B) 63 Mb/s.

C) 90 Mb/s.

D) 180 Mb/s.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**124. ¿Por qué deben dimensionarse subida y bajada por separado?**

A) Porque reuniones cloud y topologías multipunto pueden generar cargas asimétricas y el enlace puede tener capacidades distintas en cada sentido.

B) Porque IP solo funciona en subida.

C) Porque RTP no usa bajada.

D) Porque el vídeo no consume ancho de banda.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**125. ¿Qué es latencia extremo a extremo?**

A) El tiempo total que tarda la información desde captura/origen hasta presentación/destino a través de toda la cadena.

B) La variación entre paquetes exclusivamente.

C) La pérdida de paquetes.

D) El bitrate del codec.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**126. ¿Qué es jitter?**

A) Ancho de banda reservado.

B) Porcentaje de paquetes perdidos.

C) Resolución de vídeo.

D) Variación del retardo de llegada entre paquetes.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**127. ¿Qué es packet loss?**

A) Variación de retardo.

B) Un codec.

C) Un método SIP.

D) Pérdida de paquetes durante el transporte, que puede degradar audio/vídeo y disparar mecanismos de recuperación/adaptación.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**128. ¿Qué relación tiene el jitter buffer con la latencia?**

A) Reduce siempre la latencia a cero.

B) Aumenta capacidad física.

C) Elimina la necesidad de codec.

D) Más buffer puede tolerar mayor variación, pero incrementa el retardo de reproducción.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**129. ¿Qué debe hacer QoS en una red corporativa para voz/vídeo?**

A) Crear capacidad ilimitada.

B) Confiar en que Internet respete siempre las marcas.

C) Clasificar y marcar adecuadamente, aplicar colas/prioridades y mantener política coherente en los saltos gestionados.

D) Eliminar monitorización.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**130. ¿Qué afirmación sobre DSCP es correcta?**

A) Reserva ancho de banda por sí solo.

B) Es un marcado IP que puede expresar clase/tratamiento deseado, pero la red debe estar configurada para interpretarlo.

C) Cifra el paquete.

D) Sustituye a RTP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**131. ¿Qué métricas son útiles para monitorizar calidad de una reunión?**

A) Solo temperatura de la sala.

B) Solo número de usuarios del directorio.

C) Latencia/RTT, jitter, pérdida, bitrate, frame rate y métricas/MOS estimadas según plataforma.

D) Solo espacio libre en disco.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**132. ¿Qué riesgo tiene usar Wi-Fi congestionado para una sala fija crítica cuando hay cableado disponible?**

A) Variabilidad de medio compartido, interferencia y competencia por aire; cable suele ofrecer mayor previsibilidad.

B) Wi-Fi no puede transportar vídeo.

C) Ethernet carece de QoS.

D) El cableado elimina todo fallo posible.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**133. ¿Qué factor de sala suele ser más crítico para la inteligibilidad que aumentar resolución de cámara?**

A) Añadir más fondos animados.

B) Buena captación de audio, acústica y cancelación de eco.

C) Aumentar brillo sin controlar reflejos.

D) Usar un monitor más pequeño.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**134. ¿Qué objetivo tiene el tratamiento acústico de una sala?**

A) Aumentar el ancho de banda WAN.

B) Cifrar RTP.

C) Gestionar la SIM.

D) Reducir reverberación/ruido y mejorar captación y reproducción de voz.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**135. ¿Cómo debería plantearse la iluminación para videoconferencia?**

A) Solo desde atrás del participante.

B) Oscuridad total.

C) Uniforme y preferentemente frontal/adecuada a rostros, evitando contraluces y extremos de exposición.

D) Depender exclusivamente de la compensación digital.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**136. ¿Qué debe considerar la selección de pantalla/cámara en una sala?**

A) Solo la marca.

B) Tamaño/distancia, campo de visión, número de participantes, encuadre y legibilidad de contenido.

C) Únicamente el precio del cable HDMI.

D) El protocolo SNMP como criterio principal.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**137. ¿Qué controles de seguridad son apropiados para reuniones sensibles?**

A) Enlace público permanente sin control.

B) Identidad/SSO/MFA donde proceda, lobby/invitados, cifrado en tránsito, permisos de grabación y logs.

C) Desactivar actualizaciones.

D) Compartir credenciales de anfitrión.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**138. ¿Qué debe definirse para grabaciones de reuniones?**

A) Guardar para siempre por defecto.

B) Publicar automáticamente.

C) Finalidad, permisos, ubicación, acceso, retención, protección y eliminación conforme a política/normativa.

D) No aplicar control de acceso porque ya estaban en una reunión.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**139. ¿Qué medidas mejoran accesibilidad en videoconferencia?**

A) Eliminar chat y teclado.

B) Subtitulado/transcripción, compatibilidad con ayudas, interfaces accesibles y alternativas de participación.

C) Bloquear subtítulos.

D) Usar solo audio sin alternativa.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**140. Un servicio tiene capacidad suficiente pero usuarios reportan cortes breves y audio robotizado. ¿Qué conviene revisar primero?**

A) Pérdida, jitter, colas/congestión, Wi-Fi/radio y estadísticas RTP/RTCP, además de CPU del endpoint.

B) Aumentar retención documental.

C) Cambiar el nombre DNS sin medir.

D) Comprar más almacenamiento SAN.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 8. Casos integradores de comunicaciones convergentes

**141. Una Administración quiere sustituir PBX TDM por UC IP con sedes y teletrabajo. ¿Qué diseño es más completo?**

A) Un único trunk sin SBC ni plan de caída.

B) Solo cambiar teléfonos manteniendo red sin evaluar.

C) Usar Internet abierto sin autenticación ni logs.

D) PBX/UC redundante o servicio resiliente, SIP trunks diversos, SBC, QoS, TLS/SRTP cuando aplique, monitorización y continuidad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**142. Un diagrama de voz muestra SIP y RTP por la misma flecha sin distinguirlos. ¿Qué corrección aporta más claridad?**

A) Eliminar RTP.

B) Separar señalización/control SIP/SDP del plano de medios RTP/RTCP.

C) Convertir SIP en codec.

D) Sustituir todo por SNMP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**143. Una organización desea continuidad de número, presencia y comunicaciones entre portátil y móvil. ¿Qué enfoque encaja mejor?**

A) Una PBX analógica aislada por dispositivo.

B) No usar directorio.

C) Crear cuentas independientes sin federación para cada terminal.

D) UC con identidad común y convergencia fijo-móvil, integrando políticas, clientes y telefonía/IMS o servicios equivalentes según arquitectura.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**144. Una sede tiene voz IP correcta en LAN pero mala al salir por WAN saturada. ¿Qué acción es más razonable?**

A) Aumentar jitter buffer indefinidamente.

B) Cambiar todos los teléfonos sin medir la WAN.

C) Medir capacidad/congestión, aplicar QoS extremo a extremo donde se controle y ampliar/corregir enlace si el tráfico supera capacidad.

D) Eliminar RTP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**145. Un organismo quiere usar 5G como respaldo de fibra. ¿Qué prueba es imprescindible antes de declararlo redundante?**

A) Comprobar solo que el router enciende.

B) Mirar únicamente el icono 5G de un teléfono.

C) Verificar cobertura/capacidad real y que no comparta el mismo operador, obra, energía o dependencia crítica que el primario según objetivo de continuidad.

D) Deshabilitar failover para evitar cambios.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**146. Una flota BYOD necesita acceso a correo y expedientes sin invadir privacidad. ¿Qué enfoque es más adecuado?**

A) Wipe total obligatorio ante cualquier incidencia.

B) Sin gestión ni control porque son personales.

C) Recoger todos los datos personales del teléfono.

D) UEM/EMM con perfil de trabajo, acceso condicional, apps gestionadas, borrado selectivo y política transparente de privacidad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**147. Se pierde un móvil COBO con datos sensibles. ¿Qué respuesta inicial encaja mejor?**

A) Esperar a que aparezca sin revocar nada.

B) Revocar acceso/tokens, localizar si la política lo permite, bloquear o borrar remotamente y registrar/gestionar el incidente.

C) Publicar las credenciales.

D) Desactivar el UEM.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**148. Un dispositivo no cumple versión mínima y está rooteado. ¿Qué combinación es más coherente?**

A) Marcarlo no conforme y bloquear o limitar acceso mediante acceso condicional hasta remediación.

B) Conceder más privilegios.

C) Ignorar postura porque tiene MFA.

D) Aumentar ancho de banda móvil.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**149. Una sala usa WebRTC y falla solo desde ciertas redes con NAT restrictivo. ¿Qué arquitectura debe revisarse?**

A) XSD y namespaces.

B) BGP del proveedor como única causa posible.

C) MDM de la cámara exclusivamente.

D) ICE y disponibilidad/configuración de STUN/TURN y reglas de firewall.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**150. Una plataforma WebRTC envía siempre todo por TURN aunque hay conectividad directa. ¿Qué consecuencia esperable tiene?**

A) Menor tráfico en servidor siempre.

B) TURN deja de ser relay.

C) RTP se convierte en SIP.

D) Mayor consumo de ancho de banda/coste y dependencia del relay; conviene revisar selección ICE.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**151. En una reunión de 100 participantes se quiere escalar sin mezclar todos los vídeos en servidor. ¿Qué arquitectura es candidata natural?**

A) SFU con selección/adaptación de streams, si terminales y producto lo soportan.

B) MCU obligatoria siempre.

C) Una PBX TDM.

D) Un servidor DHCP como mezclador.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**152. Una plataforma debe soportar terminales antiguos H.323 y clientes modernos SIP/WebRTC. ¿Qué elemento/capacidad es clave?**

A) Forzar a H.323 a usar HTML.

B) Gateway/interworking adecuado entre protocolos y codecs, con pruebas de interoperabilidad.

C) Desactivar negociación de codecs.

D) Usar solo una VLAN sin gateway.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**153. Una sede tendrá 30 salas simultáneas a 2,5 Mb/s por sentido. ¿Qué carga base por sentido debe contemplar antes de margen?**

A) 12 Mb/s.

B) 32,5 Mb/s.

C) 75 Mb/s.

D) 750 Mb/s.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**154. Si a 75 Mb/s se añade un margen del 20%, ¿qué reserva aproximada resulta?**

A) 80 Mb/s.

B) 95 Mb/s.

C) 90 Mb/s por sentido.

D) 150 Mb/s.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**155. Una sala tiene vídeo perfecto pero eco y reverberación. ¿Qué inversión suele aportar más valor inmediato?**

A) Mejorar acústica, microfonía, colocación y cancelación de eco antes de aumentar resolución de cámara.

B) Cambiar a 5G-Advanced.

C) Aumentar almacenamiento.

D) Añadir otro sitemap.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**156. Un pliego de videoconferencia pide “QoS garantizada por Internet” solo mediante marcar DSCP. ¿Qué observación es correcta?**

A) DSCP obliga legalmente a todos los ISP a priorizar.

B) DSCP puede servir en dominios gestionados, pero no garantiza que todos los tránsitos de Internet respeten el tratamiento.

C) DSCP cifra el vídeo.

D) Marcado elimina necesidad de capacidad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**157. Una plataforma graba todas las reuniones de forma indefinida por defecto. ¿Qué problema principal existe?**

A) Ninguno, más retención siempre es mejor.

B) Solo afecta al codec.

C) Falta de gobernanza de finalidad, acceso, retención, privacidad y coste; debe definirse un ciclo de vida.

D) Únicamente reduce jitter.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**158. Un organismo combina UC, móviles gestionados y salas. ¿Qué servicio transversal debe integrarse en los tres?**

A) Identidad/IAM, políticas de acceso, logs/monitorización y gestión de ciclo de vida.

B) Solo un codec común.

C) Una única VLAN plana.

D) Desactivar MFA para simplificar.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**159. ¿Qué conjunto de señales permite diagnosticar una mala experiencia de comunicación extremo a extremo?**

A) Métricas de endpoint, RTP/RTCP/WebRTC, LAN/WLAN, WAN/Internet, SBC/plataforma y servicio, correlacionadas temporalmente.

B) Solo ping al gateway.

C) Solo espacio libre del portátil.

D) Solo número de usuarios registrados.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**160. Caso final: se quiere cerrar IV.14–IV.16 con una arquitectura corporativa moderna. ¿Qué enfoque es más completo?**

A) Elegir un único producto y asumir que cubre red, seguridad y continuidad.

B) Diseñar UC/IMS-SIP donde aplique, UEM y conectividad móvil, videoconferencia WebRTC/SIP, QoS/capacidad, salas, seguridad, monitorización, redundancia y casos de interoperabilidad.

C) Estudiar solo definiciones sin cálculos ni casos.

D) Usar 5G como sustituto universal de LAN/WAN y gestión.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# Registro de errores

Revisa los fallos a las 24–72 h. Escribe la regla correcta en una frase y vuelve a resolver la pregunta sin mirar.

| **N.º** | **Tema** | **Tipo de error** | **Regla correcta** | **Revisión** |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
