# GSI-EDITORIAL-084 — revisión propuesta

Preparado: 2026-11-04. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `05c6f0c1caeaebef2f022a55f810911cc5c7d7170fcbd4fedf526777dc7bf5e6`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P19-056

Decisión: pending_review · acción: revise.

Motivo: Conservar diferencia de aprovisionamiento y clave B; evitar confundir eSIM con IP fija, cuenta de usuario o cambio de antena.

### Antes

¿Qué diferencia principal introduce eSIM frente a SIM física?

- A. Integra el módem y la antena en el terminal para cambiar automáticamente entre tecnologías de acceso radio.
- B. Permite aprovisionar perfiles de suscripción de forma embebida/remota según ecosistema, sin eliminar los mecanismos de autenticación. **(correcta)**
- C. Sustituye el identificador de la suscripción por una dirección IP permanente configurada en el dispositivo.
- D. Prescinde de la autenticación del operador porque la identidad se valida únicamente con credenciales del sistema operativo.

Explicación: La diferencia está en formato/aprovisionamiento, no en prescindir de credenciales.

### Propuesta

¿Qué diferencia principal introduce eSIM frente a SIM física?

- A. Requiere intercambiar una tarjeta extraíble al descargar un perfil de otro operador.
- B. Permite aprovisionar perfiles a distancia manteniendo identidad y autenticación de la suscripción. **(correcta)**
- C. Identifica la suscripción mediante una IP fija que sustituye las credenciales del perfil.
- D. Adopta la cuenta del sistema operativo como identidad de acceso en lugar de la del operador.

Explicación: La eSIM permite descargar y gestionar perfiles de suscripción mediante el ecosistema de aprovisionamiento correspondiente. Cada perfil contiene datos y credenciales que siguen cumpliendo funciones de identidad y autenticación. Cambia el modo de provisión respecto al intercambio de una tarjeta, no la necesidad de autenticar la suscripción. El factor de forma, el soporte de perfiles y sus operaciones dependen del dispositivo y del ecosistema.

- Error A: El aprovisionamiento remoto permite instalar un perfil sin que cada descarga requiera sustituir una tarjeta extraíble del operador.
- Error C: Una dirección IP no sustituye la identidad y las credenciales de suscripción que contiene el perfil para autenticación.
- Error D: La cuenta del sistema operativo puede intervenir en la experiencia de usuario, pero no reemplaza las credenciales de autenticación móvil del perfil.

- [Samsung Research: eSIM and the Latest eSIM V3.0 Release](https://research.samsung.com/blog/eSIM-and-the-Latest-eSIM-V3-0-Release) · What is eSIM?: almacenamiento seguro de datos de suscripción y credenciales; perfil descargable mediante SM-DP+; gestión de perfiles · versión: Explicación técnica del fabricante y participante, HTML comprobado el04-11-2026. Solo función y perfil de eSIM de consumo, sin declarar v3.0 la última versión actual, universalizar factor de forma o confundir SM-DP+ con SM-SR de M2M. · comprobado: 2026-11-04

Partida: `8cce97fb91f56c05d66a2a8e29f90240c0bae9c1f2ece33ef1449526eed5be47` · propuesta: `19fbb858ad1136b2959c44fc190f0ea8397d7c4465191d769321ec55a240bdfd`

## MAN-GSI-P19-057

Decisión: pending_review · acción: revise.

Motivo: Conservar latencia extremo a extremo y clave B; microcaso con5G y aplicación remota, sin prometer un resultado por generación.

### Antes

¿Más “G” garantiza siempre menor latencia de aplicación extremo a extremo?

- A. Garantizar latencia nula en cualquier aplicación porque una generación de acceso radio posterior elimina todos los retardos del recorrido.
- B. No; radio es solo una parte y también influyen core, transporte, Internet/cloud, servidor y aplicación. **(correcta)**
- C. Hacer que la latencia dependa únicamente de la frecuencia de refresco de la pantalla, sin influencia del transporte ni del servidor remoto.
- D. Asegurar la misma latencia aunque el servicio se aloje en otro continente, ya que la red de acceso compensa automáticamente la distancia.

Explicación: Evita confundir capacidad de acceso con experiencia completa.

### Propuesta

Una sede pasa de 4G a 5G, pero una aplicación alojada lejos responde igual de lenta. ¿Qué interpretación es técnicamente correcta?

- A. La generación del acceso determina por sí sola el retardo hasta el servidor.
- B. El retardo depende también de núcleo, transporte, servidor y aplicación. **(correcta)**
- C. La mejora de radio elimina la espera de procesamiento en el servidor remoto.
- D. El ancho de banda anunciado permite deducir el retardo sin medir el trayecto.

Explicación: La latencia de aplicación incluye el recorrido por radio, transporte y núcleo, el acceso al servicio y el procesamiento en servidor y cliente. Una generación posterior puede mejorar componentes del acceso sin dominar el tiempo total. Hay que medir el servicio y separar sus tramos: un RTT de red y el tiempo de respuesta de una aplicación no son la misma métrica, ni un caudal máximo demuestra baja latencia.

- Error A: La generación caracteriza parte del acceso; la distancia, los demás tramos y el procesamiento siguen contribuyendo al tiempo total.
- Error C: Mejorar la radio no elimina las colas o el tiempo de cómputo del servidor donde se ejecuta la aplicación.
- Error D: El caudal expresa volumen por tiempo y no permite conocer por sí solo retardos de propagación, colas o procesamiento del servicio.

- [Microsoft Learn: Azure network round-trip latency statistics](https://learn.microsoft.com/en-us/azure/networking/azure-network-latency) · What is round-trip latency?; How is latency measured?: trayecto de ida/vuelta y mediciones; selección de región según usuarios · versión: HTML público comprobado el04-11-2026. Define RTT de red y ejemplo de medición; no se usan valores P50 entre regiones como SLA, latencia de aplicación, percentiles de cola o medida de radio móvil. Aviso de autorización visible, pero estos apartados se leen públicamente. · comprobado: 2026-11-04
- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04
- [AT&amp;T Developer: Long Term Evolution, LTE Architecture](https://developer.att.com/technical-library/network-technologies/long-term-evolution) · LTE Architecture: E-UTRAN/eNB, EPC, interfaces S1/X2, MME/S-GW/P-GW; LTE Performance: caudal real depende de usuarios, radio y backhaul · versión: Página histórica del operador, HTML comprobado el04-11-2026. Solo estructura funcional y dependencia del rendimiento. Se excluyen proyecciones comerciales, cobertura, tasas y situación de mercado anteriores al despliegueLTE. · comprobado: 2026-11-04

Partida: `26ae6859b154a51033cce072aed20b7487997de24db75ad4e380db7cc9ddbd5d` · propuesta: `567546bec91144fd13df1d4d9e0bb5cf2600c02bfca912ab19ace47935b499f8`

## MAN-GSI-P19-058

Decisión: pending_review · acción: revise.

Motivo: Conservar evaluación técnica del respaldo y clave C; caso de caída del enlace principal con distractores de decisiones incompletas plausibles.

### Antes

¿Qué debe compararse al elegir 4G/5G como respaldo WAN?

- A. La generación 4G o 5G anunciada por el operador, sin medir cobertura, congestión ni arquitectura disponible en la sede.
- B. La velocidad máxima teórica del plan comercial, sin comprobar subida, latencia, CGNAT o comportamiento en hora punta.
- C. Cobertura real, capacidad, latencia, operador, CGNAT/IP, redundancia física, antena y SLA/uso previsto. **(correcta)**
- D. El coste y las prestaciones del router, sin analizar operador, antena, dominio de fallo, SLA o consumo previsto.

Explicación: La tecnología nominal no sustituye pruebas de cobertura y diseño de continuidad.

### Propuesta

Una oficina necesita que el enlace 4G/5G sostenga su trabajo si cae la conexión fija. ¿Qué evaluación aporta mejor evidencia para elegir el respaldo?

- A. Comparar el pico de descarga en exterior y elegir el plan de mayor velocidad comercial.
- B. Comparar señal en la sede y reutilizar el operador del enlace fijo para simplificar la gestión.
- C. Probar servicio y cobertura bajo carga, direccionamiento y dependencias de fallo del respaldo. **(correcta)**
- D. Comparar routers y antenas por su tasa nominal y estimar continuidad por la categoría radio.

Explicación: Un respaldo móvil debe sostener los servicios necesarios cuando falle el enlace principal. Se comprueban cobertura y capacidad en la ubicación real, subida, retardo, direccionamiento, consumo y condiciones del servicio, además de dependencias compartidas de energía o transporte. CGN y la política del operador pueden afectar al diseño de conectividad; se prueba el servicio requerido sin inferir su comportamiento únicamente de la etiqueta 4G o 5G.

- Error A: El pico de descarga fuera del edificio no demuestra subida, retardo, cobertura interior o continuidad en las condiciones de fallo previstas.
- Error B: La señal y la facilidad administrativa no acreditan independencia de fallo; dos accesos pueden compartir infraestructuras o recursos críticos.
- Error D: Las tasas nominales del equipo y la generación radio no prueban que los servicios funcionen con carga, direccionamiento y dependencias reales.

- [NCSC CAF B5: Resilient networks and systems](https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems) · Guidance: Capacity; Diversity and dependencies; Physical Resilience: capacidad, dependencias y alternativas útiles · versión: HTML comprobado el04-11-2026. Guía británica aplicada como criterio técnico, sin fuerza normativa AGE o garantía de continuidad por contratar dos operadores. · comprobado: 2026-11-04
- [IETF RFC6598: IANA-Reserved IPv4 Prefix for Shared Address Space](https://www.rfc-editor.org/rfc/rfc6598.html) · §1 Introduction; §4 Use of Shared CGN Space: uso del operador, traducción y ámbito no globalmente enrutable · versión: BCP153, abril2012, HTML comprobado el04-11-2026. Motiva comprobar direccionamiento y conectividad del respaldo; no permite deducir soporte de toda VPN, imposibilidad universal de entrada o causa concreta de fallo. · comprobado: 2026-11-04
- [AT&amp;T Developer: Long Term Evolution, LTE Architecture](https://developer.att.com/technical-library/network-technologies/long-term-evolution) · LTE Architecture: E-UTRAN/eNB, EPC, interfaces S1/X2, MME/S-GW/P-GW; LTE Performance: caudal real depende de usuarios, radio y backhaul · versión: Página histórica del operador, HTML comprobado el04-11-2026. Solo estructura funcional y dependencia del rendimiento. Se excluyen proyecciones comerciales, cobertura, tasas y situación de mercado anteriores al despliegueLTE. · comprobado: 2026-11-04
- [Ofcom: Improving your indoor coverage](https://www.ofcom.org.uk/phones-and-broadband/coverage-and-speeds/improving-indoor-coverage) · Introducción: materiales; Check which provider offers the best signal in your area: mapas predictivos y diferencias entre operadores · versión: Publicado02-06-2023, HTML comprobado el04-11-2026. Solo propagación interior y carácter predictivo del mapa; se excluyen reglas británicas sobre repetidores y su extrapolación a España. No se instala ningún equipo. · comprobado: 2026-11-04

Partida: `c79e2f4834b68235dcb839f75c1a4139cb2def87d7e133a11d075c00ec91feeb` · propuesta: `cbb0cbf962917d68e81196049a083e7dcad8644ace60e91398fb093daa9bd0c8`

## MAN-GSI-P19-059

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, correcta A y recurso regulado; distinguir anchura de frecuencia y regulación, sin exigir licencia individual a todo uso.

### Antes

¿Qué papel tiene el espectro radioeléctrico en redes móviles?

- A. Es un recurso regulado y limitado cuya banda/ancho condicionan cobertura, capacidad y propagación. **(correcta)**
- B. Es un recurso virtual ilimitado que el software puede ampliar sin restricciones físicas, interferencias ni autorización administrativa.
- C. Determina únicamente la tarifa del operador y no condiciona propagación, cobertura o capacidad del acceso radio.
- D. Utiliza las mismas bandas y potencias en cualquier país porque su asignación no depende de regulación ni planificación nacional.

Explicación: Frecuencia y ancho de banda son variables físicas centrales de cualquier acceso radio.

### Propuesta

¿Qué papel tiene el espectro radioeléctrico en redes móviles?

- A. Es un recurso regulado y limitado cuya banda/ancho condicionan cobertura, capacidad y propagación. **(correcta)**
- B. La virtualización amplía las frecuencias disponibles sin cambiar las bandas atribuidas al servicio.
- C. Dos bandas de igual anchura ofrecen la misma cobertura aunque utilicen frecuencias diferentes.
- D. Elegir una generación móvil fija las mismas bandas y condiciones de utilización en cualquier país.

Explicación: El espectro es un recurso físico sujeto a planificación y regulación. En España es dominio público conforme a la Ley General de Telecomunicaciones; sus usos tienen condiciones, con regímenes diferentes, incluido el uso común. La frecuencia, la anchura disponible y el diseño radio condicionan propagación y capacidad junto con otros factores. Virtualizar funciones no crea nuevas frecuencias ni garantiza igual cobertura por tener bandas de la misma anchura.

- Error B: La virtualización cambia cómo se despliegan funciones de red, pero no añade físicamente frecuencias ni elimina las condiciones de uso del espectro.
- Error C: La anchura de banda no determina por sí sola propagación y cobertura; también importan frecuencia, entorno, potencia y diseño de red.
- Error D: Los estándares pueden admitir varias bandas, pero su atribución y condiciones de uso dependen de planificación y regulación aplicables.

- [BOE: Ley11/2022 General de Telecomunicaciones](https://www.boe.es/buscar/act.php?id=BOE-A-2022-10757#a8-7) · Artículo85.1/85.2: dominio público, administración y uso eficiente; artículo88.1: usos común, especial y privativo · versión: Texto consolidado informativo con última actualización indicada27-12-2025, comprobado el04-11-2026. No se exige título individual para todo uso: el uso común tiene condiciones técnicas. No se atribuyen competencias ministeriales o bandas actuales a partir de una denominación histórica. · comprobado: 2026-11-04
- [Gobierno británico: Code of practice for wireless network development in England](https://www.gov.uk/government/publications/code-of-practice-for-wireless-network-development-in-england/code-of-practice-for-wireless-network-development-in-england) · Introduction and scope, párrafo16: frecuencias, densidad de emplazamientos, cobertura y capacidad · versión: Publicado07-03-2022, HTML comprobado el04-11-2026. Solo explicación física, no normativa de instalación aplicable en España, bandas concretas, promesas de5G o consejos de compra. · comprobado: 2026-11-04

Partida: `171fb1be5e1357449cdc030407dac148e031ec2d797a15691ccd473cc1edd769` · propuesta: `de02e7cfcf226e2879560762b1748ff0e702e4a0ea622672bb4ce835bf0adc66`

## MAN-GSI-P19-061

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta A; alternativas comparables de acceso y núcleo de generaciones próximas.

### Antes

¿Qué es E-UTRAN?

- A. La red de acceso radio de LTE. **(correcta)**
- B. El core 5G completo.
- C. Un sistema MDM.
- D. Un codec de vídeo.

Explicación: LTE separa E-UTRAN como RAN y EPC como core de paquetes.

### Propuesta

¿Qué es E-UTRAN?

- A. La red de acceso radio de LTE. **(correcta)**
- B. El núcleo de paquetes de LTE.
- C. La red de acceso radio de UMTS.
- D. El núcleo de red del sistema 5G.

Explicación: E-UTRAN es la red de acceso radio de LTE, formada por nodos eNodeB que atienden a los equipos de usuario y se conectan con EPC. EPC es el núcleo de paquetes, no otra denominación del acceso. UTRAN pertenece a UMTS y 5G Core define funciones del núcleo 5G; mantener separadas las familias y sus dominios evita confundir radio con control de conectividad.

- Error B: El núcleo de paquetes asociado a LTE se denomina EPC; E-UTRAN identifica el dominio de acceso radio.
- Error C: UTRAN corresponde a UMTS; la denominación E-UTRAN identifica el acceso evolucionado utilizado por LTE.
- Error D: 5G Core es un núcleo de otra arquitectura; no designa la red de estaciones eNodeB del acceso LTE.

- [AT&amp;T Developer: Long Term Evolution, LTE Architecture](https://developer.att.com/technical-library/network-technologies/long-term-evolution) · LTE Architecture: E-UTRAN/eNB, EPC, interfaces S1/X2, MME/S-GW/P-GW; LTE Performance: caudal real depende de usuarios, radio y backhaul · versión: Página histórica del operador, HTML comprobado el04-11-2026. Solo estructura funcional y dependencia del rendimiento. Se excluyen proyecciones comerciales, cobertura, tasas y situación de mercado anteriores al despliegueLTE. · comprobado: 2026-11-04

Partida: `3840f7c3b08da1e14b9dfb01101b2dc15b04e7e06a4d1ce8be88ec082ace06fa` · propuesta: `e1e91b312f77e864f9d1ec86f0620006f3ca81a4fc1eb681409002614c730361`

## MAN-GSI-P19-062

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta C; distractores reales E-UTRAN, IMS y5GC en vez de correo, compresión o videoconferencia.

### Antes

¿Qué es EPC?

- A. Un protocolo de correo.
- B. Una plataforma de videoconferencia.
- C. Evolved Packet Core, el core asociado a LTE/4G. **(correcta)**
- D. Una técnica de compresión.

Explicación: EPC proporciona funciones de movilidad, sesión y conectividad de paquetes en LTE.

### Propuesta

¿Qué es EPC?

- A. La red de acceso radio LTE formada por nodos eNodeB.
- B. El subsistema IMS que controla sesiones multimedia.
- C. Evolved Packet Core, el core asociado a LTE/4G. **(correcta)**
- D. El núcleo 5G con funciones AMF, SMF y UPF.

Explicación: EPC significa Evolved Packet Core y aporta el núcleo de paquetes de la arquitectura LTE, con funciones de control, movilidad y conectividad mediante elementos como MME y pasarelas. Se distingue de E-UTRAN, que proporciona acceso radio, y de IMS, que puede prestar servicios multimedia sobre esa conectividad. Las funciones AMF, SMF y UPF corresponden al núcleo 5G, aunque puedan existir mecanismos de interfuncionamiento.

- Error A: Los eNodeB forman el acceso E-UTRAN; conectarse con EPC no convierte la red radio en el núcleo de paquetes.
- Error B: IMS es la plataforma de servicios multimedia, por ejemplo para VoLTE; no es el desarrollo del acrónimo EPC.
- Error D: AMF, SMF y UPF identifican funciones de 5G Core, que no deben confundirse con la arquitectura EPC de LTE.

- [Cisco: Mobility Management Entity Overview](https://www.cisco.com/c/en/us/td/docs/wireless/asr_5000/21-1/MME/b_21_1_MME_Admin/b_21_1_MME_Admin_chapter_01.html) · Mobility Management Entity Overview; Product Description; Network Deployment and Interfaces: MME en plano de control EPC y E-UTRAN · versión: StarOS Release21.1, guía histórica HTML comprobada el04-11-2026. Solo separación funcional acceso/núcleo y control; no trasladar configuración, mecanismos criptográficos o limitaciones de un producto a toda red actual. · comprobado: 2026-11-04
- [AT&amp;T Developer: Long Term Evolution, LTE Architecture](https://developer.att.com/technical-library/network-technologies/long-term-evolution) · LTE Architecture: E-UTRAN/eNB, EPC, interfaces S1/X2, MME/S-GW/P-GW; LTE Performance: caudal real depende de usuarios, radio y backhaul · versión: Página histórica del operador, HTML comprobado el04-11-2026. Solo estructura funcional y dependencia del rendimiento. Se excluyen proyecciones comerciales, cobertura, tasas y situación de mercado anteriores al despliegueLTE. · comprobado: 2026-11-04
- [Ericsson: Voice and communication services in4G and5G networks](https://www.ericsson.com/en/reports-and-papers/white-papers/voice-and-communication-services-in-4g-and-5g-networks) · VoLTE – A foundation for a global communication services ecosystem; Voice in5G networks: figuras1–3, EPC/IMS/CSFB y SA/NSA · versión: White paper julio2022, HTML comprobado el04-11-2026. Alcance arquitectónico y perfiles; sin garantías comerciales, despliegue real o afirmaciones de cobertura universal. CSFB cambia al dominio de circuitos; VoLTE usa IMS sobre LTE/EPC. · comprobado: 2026-11-04
- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04

Partida: `698db64130ba5b2f5e9a72d2a010c38a073996bea0e14f857a771e07bfb755d9` · propuesta: `39bdc44441fd5867696c2c1091dae3e034afbb54f25feccb2fa07831fc70a5d0`

## MAN-GSI-P19-063

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta C; distinguir radio de núcleo, servicio IMS y slicing con alternativas próximas.

### Antes

¿Qué es 5G NR?

- A. El 5G Core.
- B. Un sistema de gestión documental.
- C. La tecnología de acceso radio New Radio de 5G. **(correcta)**
- D. Una VLAN.

Explicación: NR es la interfaz/acceso radio; no debe confundirse con el core.

### Propuesta

¿Qué es 5G NR?

- A. El núcleo de red que gestiona las sesiones del sistema 5G.
- B. La plataforma IMS de control de sesiones multimedia.
- C. La tecnología de acceso radio New Radio de 5G. **(correcta)**
- D. El mecanismo de partición lógica de la red en slices.

Explicación: NR significa New Radio y designa la tecnología de acceso radio de 5G. No es un sinónimo de 5G Core, de IMS o de network slicing. La misma radio puede formar parte de arquitecturas de despliegue distintas, como la combinación EN-DC con LTE/EPC o el acceso NR de un despliegue SA con 5G Core. La presencia de NR por sí sola no identifica todo el núcleo y servicios utilizados.

- Error A: El núcleo 5G incorpora funciones de autenticación, movilidad y sesiones, pero no es la interfaz de acceso radio NR.
- Error B: IMS controla servicios multimedia sobre conectividad IP; esa función no desarrolla New Radio ni define su interfaz radio.
- Error D: Slicing organiza redes lógicas y sus capacidades; es un concepto arquitectónico distinto de la tecnología de acceso NR.

- [ETSI TS138300: NR and NG-RAN Overall description, Stage2](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.08.00_60/ts_138300v180800p.pdf) · TS38.300 §4.1/4.2/4.4, figura4.1-1; §8.2 identidades; §9.2.1 reselección y §9.2.3.2 handover, figura9.2.3.2.1-1. PDF25–27/31/75/77–78/89–91. · versión: V18.8.0 (2026-02), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026 y figuras inspeccionadas en renders. No lectura íntegra de274 páginas ni última edición atribuida; UE extremo, RAN y5GC funciones separadas. · comprobado: 2026-11-04
- [Ericsson: Voice and communication services in4G and5G networks](https://www.ericsson.com/en/reports-and-papers/white-papers/voice-and-communication-services-in-4g-and-5g-networks) · VoLTE – A foundation for a global communication services ecosystem; Voice in5G networks: figuras1–3, EPC/IMS/CSFB y SA/NSA · versión: White paper julio2022, HTML comprobado el04-11-2026. Alcance arquitectónico y perfiles; sin garantías comerciales, despliegue real o afirmaciones de cobertura universal. CSFB cambia al dominio de circuitos; VoLTE usa IMS sobre LTE/EPC. · comprobado: 2026-11-04
- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04

Partida: `bb51b87ebd646cff8fc846948abe7e12b1d5eb04ea5f00b03035b654a9a49d74` · propuesta: `8b6bc105abd1b9adc9b84e489cc55e1feca6557d5c00d721b0a93eb696fd1d26`

## MAN-GSI-P19-064

Decisión: pending_review · acción: revise.

Motivo: Conservar correcta A y autonomía NR/5GC; precisar acceso NR sin excluir interfuncionamiento o fallback con redes previas.

### Antes

¿Qué caracteriza una arquitectura 5G SA?

- A. Usa 5G NR con 5G Core de forma autónoma respecto al EPC para la arquitectura principal. **(correcta)**
- B. Depender obligatoriamente del EPC como núcleo principal y utilizar 5G NR solo como una ampliación radio de la arquitectura 4G existente.
- C. Funcionar únicamente sobre acceso radio 2G, porque el 5G Core traduce después todas las sesiones a servicios y capacidades de quinta generación.
- D. Ser una modalidad de Wi-Fi administrada por el operador que no utiliza 5G NR ni funciones específicas del núcleo de red móvil.

Explicación: Standalone permite explotar de forma nativa funciones del 5GC.

### Propuesta

¿Qué caracteriza un despliegue 5G SA con acceso NR frente al NSA EN-DC anclado en LTE/EPC?

- A. Usa 5G NR con 5G Core de forma autónoma respecto al EPC para la arquitectura principal. **(correcta)**
- B. Usa NR junto con LTE como ancla de control y EPC como núcleo de la conexión.
- C. Usa acceso LTE con EPC e IMS para prestar datos y telefonía sin incorporar NR.
- D. Usa NR como nodo secundario de LTE y denomina SA a ese anclaje de control.

Explicación: La arquitectura SA con acceso NR se apoya en 5G Core y no requiere el anclaje de control LTE/EPC de la modalidad NSA EN-DC comparada. Esto describe la arquitectura principal, no la inexistencia de redes 4G vecinas, interfuncionamiento o mecanismos de fallback. La autonomía arquitectónica tampoco garantiza por sí sola todas las funciones, cobertura o prestaciones anunciadas de 5G.

- Error B: NR combinado con ancla LTE y EPC corresponde a la modalidad NSA EN-DC de la comparación, no al acceso NR autónomo con 5GC.
- Error C: LTE/EPC con IMS puede proporcionar VoLTE, pero no identifica un despliegue SA basado en NR y 5G Core.
- Error D: Usar NR como secundario con ancla LTE describe dependencia de otro acceso; llamarlo SA no cambia esa arquitectura.

- [Ericsson: Voice and communication services in4G and5G networks](https://www.ericsson.com/en/reports-and-papers/white-papers/voice-and-communication-services-in-4g-and-5g-networks) · VoLTE – A foundation for a global communication services ecosystem; Voice in5G networks: figuras1–3, EPC/IMS/CSFB y SA/NSA · versión: White paper julio2022, HTML comprobado el04-11-2026. Alcance arquitectónico y perfiles; sin garantías comerciales, despliegue real o afirmaciones de cobertura universal. CSFB cambia al dominio de circuitos; VoLTE usa IMS sobre LTE/EPC. · comprobado: 2026-11-04
- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04
- [ETSI TS138300: NR and NG-RAN Overall description, Stage2](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.08.00_60/ts_138300v180800p.pdf) · TS38.300 §4.1/4.2/4.4, figura4.1-1; §8.2 identidades; §9.2.1 reselección y §9.2.3.2 handover, figura9.2.3.2.1-1. PDF25–27/31/75/77–78/89–91. · versión: V18.8.0 (2026-02), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026 y figuras inspeccionadas en renders. No lectura íntegra de274 páginas ni última edición atribuida; UE extremo, RAN y5GC funciones separadas. · comprobado: 2026-11-04

Partida: `b08d60830ffe297437b7a5ea2f7d300dc0fe1f179e4947918cc52c08320bcc34` · propuesta: `44ddc213581a227eac274365d08c5bbad76e6f45be074a7ea616a40280567c99`

## MAN-GSI-P19-065

Decisión: pending_review · acción: revise.

Motivo: Conservar correcta B y despliegue combinado; delimitar NSA al caso EN-DC para no generalizar dependencia EPC a toda opción3GPP.

### Antes

¿Qué caracteriza una arquitectura 5G NSA en términos generales?

- A. Utiliza NR con un núcleo 5G independiente y prescinde de toda infraestructura LTE/EPC para control y anclaje.
- B. Combina NR con infraestructura LTE/EPC en un despliegue no autónomo. **(correcta)**
- C. Mantiene únicamente acceso LTE y cambia su denominación comercial, sin incorporar portadora ni acceso radio NR.
- D. Es equivalente a 5G-Advanced y exige funciones introducidas únicamente a partir de Release 18 de 3GPP.

Explicación: NSA permitió desplegar NR apoyándose en la infraestructura 4G existente.

### Propuesta

¿Qué caracteriza la modalidad 5G NSA EN-DC anclada en EPC, que aprovecha infraestructura LTE existente?

- A. Conecta NR directamente a 5G Core sin usar LTE como ancla de control.
- B. Combina NR con infraestructura LTE/EPC en un despliegue no autónomo. **(correcta)**
- C. Mantiene acceso LTE con EPC e IMS sin añadir una portadora de NR.
- D. Conecta LTE y NR a 5G Core y prescinde del núcleo EPC en la combinación.

Explicación: En la modalidad NSA EN-DC de la pregunta, LTE actúa como acceso maestro y NR aporta acceso adicional, manteniendo el apoyo en EPC. Esa descripción corresponde a un tipo concreto de despliegue no autónomo; no debe extenderse sin matices a todas las combinaciones de conectividad dual especificadas por 3GPP. Añadir NR no equivale a sustituir automáticamente el núcleo por 5G Core ni a iniciar 5G-Advanced.

- Error A: El acceso NR sin anclaje LTE y con 5G Core corresponde al despliegue SA de la comparación, no al NSA EN-DC sobre EPC.
- Error C: Mantener solo LTE no incorpora la segunda tecnología de acceso NR que forma parte de la modalidad EN-DC.
- Error D: Una combinación que utiliza 5G Core no es el despliegue EN-DC anclado en EPC descrito en el enunciado.

- [Ericsson: Voice and communication services in4G and5G networks](https://www.ericsson.com/en/reports-and-papers/white-papers/voice-and-communication-services-in-4g-and-5g-networks) · VoLTE – A foundation for a global communication services ecosystem; Voice in5G networks: figuras1–3, EPC/IMS/CSFB y SA/NSA · versión: White paper julio2022, HTML comprobado el04-11-2026. Alcance arquitectónico y perfiles; sin garantías comerciales, despliegue real o afirmaciones de cobertura universal. CSFB cambia al dominio de circuitos; VoLTE usa IMS sobre LTE/EPC. · comprobado: 2026-11-04
- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04

Partida: `4bd9905db1e653a9d64224f7b8448d04046ae0733990c6ce21f15ba74c749dab` · propuesta: `615d87e01dbba06ecf631863e6889b44ab50bfdecbe093fa900a233ffb44ccb5`

## MAN-GSI-P19-066

Decisión: pending_review · acción: revise.

Motivo: Conservar diferencia SA/NSA y clave C; sustituir importancia de examen no respaldada por identificación de dos despliegues concretos.

### Antes

¿Cuál es la diferencia de examen más importante entre 5G SA y NSA?

- A. SA utiliza LTE como ancla de señalización y NSA funciona de forma independiente con 5G Core y acceso NR.
- B. Ambas arquitecturas utilizan EPC y se diferencian únicamente por las bandas de frecuencia asignadas al acceso radio.
- C. SA se apoya en 5G Core; NSA mantiene dependencia de LTE/EPC en la arquitectura combinada. **(correcta)**
- D. NSA requiere 5G Core nativo, mientras SA combina NR con el núcleo LTE para conservar compatibilidad.

Explicación: La distinción es de arquitectura móvil, no de marca o cobertura visual del terminal.

### Propuesta

Un proveedor propone NR apoyado en LTE/EPC y otro NR conectado a 5G Core sin ancla LTE. ¿Qué diferencia arquitectónica reflejan estas propuestas?

- A. La primera es SA y la segunda NSA porque la autonomía se obtiene conservando EPC.
- B. Ambas son NSA y la diferencia depende de la banda de frecuencia que use el terminal.
- C. La segunda usa 5G Core autónomo; la primera conserva anclaje LTE/EPC en NSA. **(correcta)**
- D. Ambas son SA y solo se diferencian en la marca comercial de la estación radio.

Explicación: La diferencia planteada es arquitectónica: NR apoyado en LTE/EPC corresponde al NSA EN-DC del caso, mientras NR conectado a 5G Core sin ancla LTE corresponde al despliegue SA comparado. El icono del teléfono, la banda o la marca no bastan para identificar el núcleo y el control utilizados. Se mantiene esta comparación concreta, sin equiparar toda opción de conectividad dual con EPC.

- Error A: Invierte los papeles de la comparación: el anclaje LTE/EPC es la dependencia de la primera solución y no la autonomía de la segunda.
- Error B: La segunda solución prescinde del ancla LTE y usa 5GC; elegir una banda distinta no convierte ambas arquitecturas en NSA.
- Error D: El tipo de núcleo y el anclaje de control son diferencias funcionales, no una denominación determinada por fabricante o marca.

- [Ericsson: Voice and communication services in4G and5G networks](https://www.ericsson.com/en/reports-and-papers/white-papers/voice-and-communication-services-in-4g-and-5g-networks) · VoLTE – A foundation for a global communication services ecosystem; Voice in5G networks: figuras1–3, EPC/IMS/CSFB y SA/NSA · versión: White paper julio2022, HTML comprobado el04-11-2026. Alcance arquitectónico y perfiles; sin garantías comerciales, despliegue real o afirmaciones de cobertura universal. CSFB cambia al dominio de circuitos; VoLTE usa IMS sobre LTE/EPC. · comprobado: 2026-11-04
- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04

Partida: `99c9bba26f942e22c3cc54ea2844ffa1ebde832bd5d37f9f94a82a66c7b1febf` · propuesta: `87727a1ae98e4e5850a56561cebb7e064fe4f1a9966677ab18dfe3ca8e8fede2`

## MAN-GSI-P19-067

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa bien construida y clave D; explicar sharing, diferencia con DNN y alcance más amplio que VLAN.

### Antes

¿Qué es network slicing?

- A. Separar físicamente bandas, antenas y tarjetas SIM para dedicar cada conjunto de hardware a un único servicio.
- B. Seleccionar mediante APN o DNN la red de datos y el servicio al que se conecta una sesión del abonado.
- C. Dividir una red local en dominios de difusión mediante etiquetas VLAN configuradas en switches y enlaces troncales.
- D. Creación de redes lógicas con características/políticas diferenciadas sobre infraestructura común, según capacidades de la plataforma. **(correcta)**

Explicación: Slicing busca adaptar recursos/servicios a distintos perfiles sin requerir redes físicas totalmente separadas.

### Propuesta

¿Qué es network slicing?

- A. Separar físicamente bandas, antenas y tarjetas SIM para dedicar cada conjunto de hardware a un único servicio.
- B. Seleccionar mediante APN o DNN la red de datos y el servicio al que se conecta una sesión del abonado.
- C. Dividir una red local en dominios de difusión mediante etiquetas VLAN configuradas en switches y enlaces troncales.
- D. Creación de redes lógicas con características/políticas diferenciadas sobre infraestructura común, según capacidades de la plataforma. **(correcta)**

Explicación: Network slicing permite construir redes lógicas con capacidades y características específicas. Una instancia incluye funciones y recursos del núcleo y los componentes de acceso aplicables; puede compartir funciones e infraestructura con otras instancias. No exige una antena o SIM física exclusiva por servicio. El aislamiento, las políticas y los objetivos requieren diseño y operación: la etiqueta slice no garantiza rendimiento o separación física completa.

- Error A: Una partición lógica no requiere dedicar de forma exclusiva bandas, antenas y tarjetas a cada servicio; pueden compartirse recursos físicos.
- Error B: APN o DNN identifica una red de datos para la conectividad de la sesión; distintas slices pueden utilizar el mismo DNN.
- Error C: Una VLAN separa dominios de difusión Ethernet en capa dos; no representa por sí sola la construcción móvil de funciones y recursos de una slice.

- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04
- [Cisco: VLAN Configuration Guide, Configure VLAN](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan.html) · Configure VLAN; Restrictions/Benefits of VLANs; Logical Networks: dominios de difusión y segmentaciónL2 · versión: IOS XE17, capítulo actualizado17-07-2026, HTML comprobado el04-11-2026. Solo concepto de VLAN; no se universalizan límites de ID, configuración de plataforma, seguridad absoluta o la necesidad de routing en casos especiales de bridging. · comprobado: 2026-11-04

Partida: `4903001d7f0b773b00b7c77167e0d93903df992391394d37f21546a7ecaee3e7` · propuesta: `38a2458521d693bc8204d13bcfd2a80d159672ac40d835c4694cee627e7b8a89`

## MAN-GSI-P19-068

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción VLAN/slicing y clave A; cuatro comparaciones paralelas sin patrón de respuesta Sí/No.

### Antes

¿Network slicing equivale a una VLAN?

- A. No; una VLAN es segmentación L2, mientras slicing abarca una construcción lógica de servicio/red móvil más amplia. **(correcta)**
- B. Sí; ambos mecanismos se limitan a insertar una etiqueta VLAN en tramas Ethernet y ofrecen idéntico aislamiento extremo a extremo.
- C. Network slicing solo separa tráfico en capa 2, mientras una VLAN define funciones de radio, núcleo móvil y nivel de servicio.
- D. Una VLAN crea por sí misma un servicio móvil completo con recursos de acceso, core, políticas y objetivos de rendimiento.

Explicación: Pueden coexistir técnicas de segmentación, pero operan con alcance distinto.

### Propuesta

¿Qué diferencia de alcance distingue una VLAN de network slicing en una red móvil?

- A. Una VLAN segmenta en capa 2; slicing construye redes móviles lógicas de alcance más amplio. **(correcta)**
- B. Una VLAN selecciona la red móvil mediante S-NSSAI; slicing etiqueta las tramas Ethernet.
- C. Una VLAN fija los objetivos del servicio móvil; slicing separa dominios de difusión.
- D. Una VLAN y una slice definen la misma unidad de red y usan el mismo identificador Ethernet.

Explicación: Una VLAN es un mecanismo de segmentación de red de capa dos. Una network slice proporciona capacidades y características de una red lógica móvil e involucra funciones y recursos de alcance más amplio. Ambas técnicas pueden coexistir en el transporte o despliegue sin ser equivalentes. Compartir infraestructura o utilizar VLAN dentro de una solución no demuestra que la VLAN implemente por sí sola la slice y sus objetivos.

- Error B: Intercambia identificadores y funciones: S-NSSAI identifica una slice en 5GS y no una VLAN; etiquetar tramas no define slicing.
- Error C: Invierte el alcance: la VLAN trata segmentación de capa dos y la slice no se limita al dominio de difusión Ethernet.
- Error D: VLAN y slice no comparten una definición ni un identificador único equivalente; son mecanismos de dominios y alcance diferentes.

- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04
- [Cisco: VLAN Configuration Guide, Configure VLAN](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan.html) · Configure VLAN; Restrictions/Benefits of VLANs; Logical Networks: dominios de difusión y segmentaciónL2 · versión: IOS XE17, capítulo actualizado17-07-2026, HTML comprobado el04-11-2026. Solo concepto de VLAN; no se universalizan límites de ID, configuración de plataforma, seguridad absoluta o la necesidad de routing en casos especiales de bridging. · comprobado: 2026-11-04

Partida: `ab22dc3b97e282a817039db67a73b33930ffd5a9c39e6c5a8d3d1f15d7f6965d` · propuesta: `5e9cfea66ef3b2338589ecc93d670764ead2f8658da57b222f3baad44268fe77`

## MAN-GSI-P19-069

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta C; limitar SBA al alcance de interacciones de control y evitar prometer autorreparación.

### Antes

¿Qué ventaja puede aportar un core 5G con arquitectura basada en servicios?

- A. Eliminar todas las funciones de autenticación porque las interfaces entre servicios identifican por sí solas a cada abonado de la red.
- B. Obligar a transportar señalización y tráfico mediante TDM, sustituyendo las interfaces de servicio por circuitos físicos dedicados.
- C. Mayor modularidad e interacción entre funciones mediante servicios/interfaces definidos. **(correcta)**
- D. Hacer innecesaria la observabilidad, ya que cada función resuelve automáticamente cualquier fallo de las demás sin métricas ni trazas.

Explicación: 5GC evoluciona hacia funciones de red más desacopladas y orientadas a servicios.

### Propuesta

¿Qué ventaja puede aportar un core 5G con arquitectura basada en servicios?

- A. Integrar las funciones en un proceso monolítico para eliminar interfaces entre ellas.
- B. Sustituir las interfaces de red por acceso directo a la memoria de un único equipo.
- C. Mayor modularidad e interacción entre funciones mediante servicios/interfaces definidos. **(correcta)**
- D. Permitir a cualquier cliente consumir funciones de control sin autorización de la red.

Explicación: La arquitectura basada en servicios favorece diseño modular y reutilización de interacciones entre funciones del plano de control mediante interfaces definidas. La especificación admite comunicación directa o mediada según despliegue. No convierte todo tráfico de usuario en invocaciones de servicio, no exige un único equipo y no elimina autenticación, autorización u observabilidad. Modularidad no significa que los fallos se resuelvan sin supervisión.

- Error A: Un proceso monolítico que elimina interfaces no expresa la modularización y exposición de servicios entre funciones de red descritas.
- Error B: El modelo se define por servicios e interfaces entre funciones, no por memoria compartida obligatoria dentro de una máquina.
- Error D: Las interacciones se destinan a consumidores autorizados; exponer una interfaz de servicio no abre el control de red a cualquier cliente.

- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04

Partida: `b0461ba6ff3427d1cc8ee4afcce622e40a8d47194fe41d418fc997c0ef203da7` · propuesta: `ab34bce7a6c5a97ae0a72abaa9b100137d523bd358998648aa2b7469e8da28e7`

## MAN-GSI-P19-070

Decisión: pending_review · acción: revise.

Motivo: Conservar movilidad/handover y clave B; microcaso de conexión activa con alternativas de procedimientos móviles cercanos.

### Antes

¿Qué proceso mantiene una sesión cuando el usuario cambia de celda?

- A. Backup incremental.
- B. Handover/mecanismos de movilidad. **(correcta)**
- C. BGP entre navegadores.
- D. XSLT.

Explicación: La movilidad es función esencial de RAN/core y debe diferenciarse de roaming entre operadores.

### Propuesta

Durante una llamada, un terminal transfiere su conexión a otra celda de la misma red. ¿Qué procedimiento de movilidad describe ese cambio?

- A. Registro inicial del terminal en la red.
- B. Handover de la conexión en curso. **(correcta)**
- C. Reselección de celda estando en reposo.
- D. Portabilidad del número del abonado.

Explicación: El handover transfiere la conexión en servicio a otra celda o acceso para favorecer continuidad según la tecnología. No es selección o reselección en reposo ni el registro inicial de la suscripción. Cambiar de celda dentro de la misma red no constituye por sí solo roaming. El objetivo de continuidad tampoco excluye interrupciones breves, fallos o recuperación durante el procedimiento.

- Error A: El registro inicial establece el contexto de acceso; no denomina la transferencia de una conexión ya activa entre celdas.
- Error C: La reselección en reposo permite decidir en qué celda permanecer acampado y se distingue del cambio de una conexión activa.
- Error D: La portabilidad cambia de proveedor conservando numeración; no es el mecanismo radio de transferencia de la llamada entre celdas.

- [ETSI TS138300: NR and NG-RAN Overall description, Stage2](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.08.00_60/ts_138300v180800p.pdf) · TS38.300 §4.1/4.2/4.4, figura4.1-1; §8.2 identidades; §9.2.1 reselección y §9.2.3.2 handover, figura9.2.3.2.1-1. PDF25–27/31/75/77–78/89–91. · versión: V18.8.0 (2026-02), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026 y figuras inspeccionadas en renders. No lectura íntegra de274 páginas ni última edición atribuida; UE extremo, RAN y5GC funciones separadas. · comprobado: 2026-11-04
- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04
- [BOE: Ley11/2022, conservación de numeración al cambiar de operador](https://www.boe.es/buscar/act.php?id=BOE-A-2022-10757#a3-5) · Artículo33.1: conservación, previa solicitud, de números asignados con independencia del operador que preste el servicio · versión: Texto consolidado informativo con actualización indicada27-12-2025, artículo comprobado el04-11-2026. Respalda la distinción conceptual portabilidad/movilidad radio; sin afirmar que toda numeración o todo servicio se someta a idénticas condiciones, ni prescribir plazos de portabilidad. · comprobado: 2026-11-04

Partida: `2a8868daee8e770a96dcd0184dfa86e7368584992a7aa6d86c8f23f64f26faf1` · propuesta: `ddd7fab44aba14aebe6cd5be21537acb9c422b8312da3bc4f76555d6c0a267df`

## MAN-GSI-P19-071

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa bien construida y clave B; no exigir cambio de país ni confundir roaming con portabilidad.

### Antes

¿Qué es roaming?

- A. Cambio de una celda a otra durante una sesión dentro de la misma red, sin intervención de una red visitada distinta.
- B. Prestación de servicio móvil mediante una red visitada distinta de la red doméstica del abonado, con acuerdos y autenticación correspondientes. **(correcta)**
- C. Selección automática de un punto de acceso Wi-Fi cercano, aunque no exista relación entre operadores ni red doméstica móvil.
- D. Traslado permanente del número a otro operador, que sustituye la red doméstica y elimina la relación con la anterior.

Explicación: Roaming implica relación entre red doméstica y visitada; no es simplemente handover local.

### Propuesta

¿Qué es roaming?

- A. Cambio de una celda a otra durante una sesión dentro de la misma red, sin intervención de una red visitada distinta.
- B. Prestación de servicio móvil mediante una red visitada distinta de la red doméstica del abonado, con acuerdos y autenticación correspondientes. **(correcta)**
- C. Selección automática de un punto de acceso Wi-Fi cercano, aunque no exista relación entre operadores ni red doméstica móvil.
- D. Traslado permanente del número a otro operador, que sustituye la red doméstica y elimina la relación con la anterior.

Explicación: Roaming es la prestación de servicio mediante una red visitada distinta de la red doméstica de la suscripción, con la relación técnica y los acuerdos correspondientes. No requiere que cada cambio de celda cambie de operador, ni implica necesariamente cruzar una frontera nacional. La arquitectura diferencia funciones y responsabilidades de red doméstica y visitada; seleccionar una celda, conectarse a Wi-Fi o portar el número son conceptos diferentes.

- Error A: Cambiar de celda en la misma red describe movilidad radio y no demuestra uso de una red visitada distinta de la doméstica.
- Error C: Elegir un punto Wi-Fi por proximidad no basta para establecer una relación de itinerancia entre red doméstica y visitada.
- Error D: La portabilidad cambia la relación con el proveedor conservando numeración; no es prestar temporalmente servicio mediante una red visitada.

- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04
- [BOE: Ley11/2022, conservación de numeración al cambiar de operador](https://www.boe.es/buscar/act.php?id=BOE-A-2022-10757#a3-5) · Artículo33.1: conservación, previa solicitud, de números asignados con independencia del operador que preste el servicio · versión: Texto consolidado informativo con actualización indicada27-12-2025, artículo comprobado el04-11-2026. Respalda la distinción conceptual portabilidad/movilidad radio; sin afirmar que toda numeración o todo servicio se someta a idénticas condiciones, ni prescribir plazos de portabilidad. · comprobado: 2026-11-04

Partida: `737922e18a76b01dc8df9c59b54d7cc3d36312f3ed336855526127f83f58c547` · propuesta: `7373e221200b9ef56c87586088530d698a7018d6bf000f4d0ebd18c572fefae7`

## MAN-GSI-P19-072

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa y clave B; explicar coexistencia de handover dentro de una red visitada, sin equiparar ambos términos.

### Antes

¿Handover y roaming son sinónimos?

- A. Ambos términos describen el cambio de celda durante una sesión y no implican diferencias de red, operador o dominio.
- B. No; handover mantiene movilidad entre celdas/accesos, mientras roaming implica uso de otra red/operador o dominio visitado. **(correcta)**
- C. Handover implica registrarse en un operador visitado, mientras roaming mueve una sesión entre celdas del mismo acceso.
- D. Roaming es una técnica de continuidad radio y handover se limita a acuerdos comerciales entre operadores móviles.

Explicación: Distinguir movilidad radio de itinerancia comercial/técnica evita errores de examen.

### Propuesta

¿Handover y roaming son sinónimos?

- A. Ambos términos describen el cambio de celda durante una sesión y no implican diferencias de red, operador o dominio.
- B. No; handover mantiene movilidad entre celdas/accesos, mientras roaming implica uso de otra red/operador o dominio visitado. **(correcta)**
- C. Handover implica registrarse en un operador visitado, mientras roaming mueve una sesión entre celdas del mismo acceso.
- D. Roaming es una técnica de continuidad radio y handover se limita a acuerdos comerciales entre operadores móviles.

Explicación: Handover y roaming describen aspectos diferentes. El primero trata transferencia de la conexión entre celdas o accesos para mantener servicio; el segundo, uso de una red visitada respecto a la doméstica de la suscripción. Pueden coexistir: un usuario en roaming puede hacer handover dentro de la red visitada. Ninguno implica por definición que cada cambio de celda deba cambiar de operador o de relación de suscripción.

- Error A: La transferencia de celda no agota el significado de roaming, que requiere distinguir red doméstica y red visitada.
- Error C: Invierte las definiciones: el uso de la red visitada corresponde a roaming y la movilidad de conexión corresponde al handover.
- Error D: Handover no se limita a acuerdos comerciales; roaming incluye aspectos técnicos y de servicio entre redes, no solo transferencia radio.

- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04
- [ETSI TS138300: NR and NG-RAN Overall description, Stage2](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.08.00_60/ts_138300v180800p.pdf) · TS38.300 §4.1/4.2/4.4, figura4.1-1; §8.2 identidades; §9.2.1 reselección y §9.2.3.2 handover, figura9.2.3.2.1-1. PDF25–27/31/75/77–78/89–91. · versión: V18.8.0 (2026-02), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026 y figuras inspeccionadas en renders. No lectura íntegra de274 páginas ni última edición atribuida; UE extremo, RAN y5GC funciones separadas. · comprobado: 2026-11-04

Partida: `93f3187a5ac60d310a7df19217456de99b4409d7a70d0293b22077015a38a812` · propuesta: `0986caaafda8f0df47b3b5b570bfac7dbc55f256e1efcbb48237aea875e435a7`

## MAN-GSI-P19-073

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa y clave D; explicar cooperación RAN/core sin asignar toda movilidad exclusivamente al núcleo.

### Antes

¿Qué función cumple el core móvil respecto al acceso radio?

- A. Gestiona la modulación, codificación y recursos radio de cada celda de acceso.
- B. Transporta tráfico entre estaciones base y el núcleo sin gestionar identidad, sesiones ni movilidad.
- C. Aloja aplicaciones y contenidos consumidos por el abonado sin proporcionar conectividad de red.
- D. Gestiona identidad/autenticación, movilidad, sesiones, políticas y conectividad hacia redes/servicios, entre otras funciones. **(correcta)**

Explicación: La RAN conecta por radio; el core orquesta conectividad y servicio de red.

### Propuesta

¿Qué función cumple el core móvil respecto al acceso radio?

- A. Gestiona la modulación, codificación y recursos radio de cada celda de acceso.
- B. Transporta tráfico entre estaciones base y el núcleo sin gestionar identidad, sesiones ni movilidad.
- C. Aloja aplicaciones y contenidos consumidos por el abonado sin proporcionar conectividad de red.
- D. Gestiona identidad/autenticación, movilidad, sesiones, políticas y conectividad hacia redes/servicios, entre otras funciones. **(correcta)**

Explicación: El núcleo móvil incorpora funciones de identidad, autenticación, movilidad, sesiones, políticas y conectividad con redes de datos. La RAN atiende el acceso radio y sus recursos, y el transporte enlaza dominios. Son responsabilidades lógicas que cooperan: el núcleo no reemplaza la planificación física de cada celda ni es simplemente un servidor de contenidos. La movilidad también implica procedimientos y decisiones en la RAN.

- Error A: La modulación, codificación y asignación de recursos de acceso son responsabilidades radio características de la RAN, no la definición del núcleo.
- Error B: Transportar tráfico entre estaciones y núcleo caracteriza la red de transporte; no abarca las funciones de control y conectividad del core.
- Error C: Alojar el contenido de una aplicación es una función de servicio, distinta de gestionar acceso, sesiones y conectividad de abonados.

- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04
- [ETSI TS138300: NR and NG-RAN Overall description, Stage2](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.08.00_60/ts_138300v180800p.pdf) · TS38.300 §4.1/4.2/4.4, figura4.1-1; §8.2 identidades; §9.2.1 reselección y §9.2.3.2 handover, figura9.2.3.2.1-1. PDF25–27/31/75/77–78/89–91. · versión: V18.8.0 (2026-02), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026 y figuras inspeccionadas en renders. No lectura íntegra de274 páginas ni última edición atribuida; UE extremo, RAN y5GC funciones separadas. · comprobado: 2026-11-04
- [Cisco: Mobility Management Entity Overview](https://www.cisco.com/c/en/us/td/docs/wireless/asr_5000/21-1/MME/b_21_1_MME_Admin/b_21_1_MME_Admin_chapter_01.html) · Mobility Management Entity Overview; Product Description; Network Deployment and Interfaces: MME en plano de control EPC y E-UTRAN · versión: StarOS Release21.1, guía histórica HTML comprobada el04-11-2026. Solo separación funcional acceso/núcleo y control; no trasladar configuración, mecanismos criptográficos o limitaciones de un producto a toda red actual. · comprobado: 2026-11-04

Partida: `ba8edd37ea4d60f742dd29905fdc0feeba5c70abcef42fa0d4e5e8bd460ff200` · propuesta: `ce1ffec653ac7eb1124e67533644e78a735fcca6a27719c94c9e313eec164d50`

## MAN-GSI-P19-074

Decisión: pending_review · acción: revise.

Motivo: Conservar diseño de cobertura y clave A; caso interior con métodos de comprobación alternativos, sin importar reglas británicas sobre repetidores.

### Antes

¿Qué criterio es correcto al diseñar cobertura móvil en un edificio?

- A. Medir cobertura/capacidad real y considerar bandas, materiales, densidad, operador y soluciones indoor si son necesarias. **(correcta)**
- B. Dar por válida la cobertura porque el operador muestre 5G en su mapa nacional, sin medir señal, carga o bandas dentro del edificio.
- C. Instalar un repetidor elegido por potencia y precio sin coordinación, autorización, estudio radio ni comprobación de interferencias.
- D. Medir junto a una ventana en un único momento y extrapolar el resultado a plantas, salas, operadores y horas de máxima ocupación.

Explicación: La cobertura indoor depende de propagación, carga y despliegue local.

### Propuesta

El mapa del operador muestra 5G en un edificio, pero varias salas tienen mal servicio al ocuparse. ¿Qué criterio debe guiar el diseño de cobertura interior?

- A. Medir servicio en zonas y horas representativas considerando bandas, materiales, ocupación y operador. **(correcta)**
- B. Tomar como prueba interior el mapa predictivo del operador y comprobar la tasa nominal del terminal.
- C. Medir señal junto a una ventana y dimensionar todas las salas según esa mejor ubicación del edificio.
- D. Comparar descargas nocturnas en una sala y escoger equipo por la mayor generación radio soportada.

Explicación: La cobertura y capacidad interiores requieren comprobar condiciones de uso representativas: distribución del edificio, materiales, bandas, posición de equipos, ocupación y operador. Un mapa es una predicción, no la medida de todas las salas, horas y servicios. Una señal recibida suficiente tampoco demuestra capacidad con muchos usuarios. Las soluciones indoor se valoran tras el estudio y las condiciones técnicas aplicables; no se propone instalar repetidores sin comprobarlas.

- Error B: El mapa predictivo y la ficha del terminal no miden penetración interior, capacidad bajo carga ni experiencia del servicio en las salas afectadas.
- Error C: La mejor señal junto a una ventana no representa espacios interiores con distintas barreras, plantas, orientaciones o densidad de uso.
- Error D: Una descarga nocturna aislada no demuestra el servicio en horas de ocupación; la generación del equipo no sustituye esas mediciones.

- [Ofcom: Improving your indoor coverage](https://www.ofcom.org.uk/phones-and-broadband/coverage-and-speeds/improving-indoor-coverage) · Introducción: materiales; Check which provider offers the best signal in your area: mapas predictivos y diferencias entre operadores · versión: Publicado02-06-2023, HTML comprobado el04-11-2026. Solo propagación interior y carácter predictivo del mapa; se excluyen reglas británicas sobre repetidores y su extrapolación a España. No se instala ningún equipo. · comprobado: 2026-11-04
- [Gobierno británico: Code of practice for wireless network development in England](https://www.gov.uk/government/publications/code-of-practice-for-wireless-network-development-in-england/code-of-practice-for-wireless-network-development-in-england) · Introduction and scope, párrafo16: frecuencias, densidad de emplazamientos, cobertura y capacidad · versión: Publicado07-03-2022, HTML comprobado el04-11-2026. Solo explicación física, no normativa de instalación aplicable en España, bandas concretas, promesas de5G o consejos de compra. · comprobado: 2026-11-04
- [NCSC CAF B5: Resilient networks and systems](https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems) · Guidance: Capacity; Diversity and dependencies; Physical Resilience: capacidad, dependencias y alternativas útiles · versión: HTML comprobado el04-11-2026. Guía británica aplicada como criterio técnico, sin fuerza normativa AGE o garantía de continuidad por contratar dos operadores. · comprobado: 2026-11-04
- [AT&amp;T Developer: Long Term Evolution, LTE Architecture](https://developer.att.com/technical-library/network-technologies/long-term-evolution) · LTE Architecture: E-UTRAN/eNB, EPC, interfaces S1/X2, MME/S-GW/P-GW; LTE Performance: caudal real depende de usuarios, radio y backhaul · versión: Página histórica del operador, HTML comprobado el04-11-2026. Solo estructura funcional y dependencia del rendimiento. Se excluyen proyecciones comerciales, cobertura, tasas y situación de mercado anteriores al despliegueLTE. · comprobado: 2026-11-04

Partida: `05caa67d6de6fc571dc97fda8a727f84a80071fe1a91c9d3be24b2ba7bdb8324` · propuesta: `067de15cb44a3a6aa415246692f2be0ec96a8f5b2b00d808a6f281b932e0f0fb`

## MAN-GSI-P19-077

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta D; distinguir plataforma de voz, núcleo, radio y codificación con distractores próximos.

### Antes

¿Qué relación hay entre VoLTE e IMS?

- A. VoLTE sustituye IMS por STP.
- B. IMS solo sirve para SMS 2G.
- C. VoLTE es un codec de vídeo.
- D. VoLTE usa IMS para prestar telefonía de voz sobre LTE. **(correcta)**

Explicación: La voz de 4G se integra como servicio IP multimedia mediante IMS.

### Propuesta

¿Qué relación hay entre VoLTE e IMS?

- A. VoLTE utiliza el control de llamadas de EPC en lugar de IMS.
- B. IMS aporta la interfaz radio LTE que utilizan las llamadas.
- C. VoLTE es el codec que IMS aplica a las muestras de voz.
- D. VoLTE usa IMS para prestar telefonía de voz sobre LTE. **(correcta)**

Explicación: VoLTE utiliza servicios de telefonía multimedia basados en IMS sobre el acceso y la conectividad de paquetes LTE/EPC. IMS aporta control de sesiones y servicios, mientras la red de acceso y el núcleo soportan la conectividad y sus recursos. VoLTE no es un códec ni otra denominación de la interfaz radio. Una sesión de datos LTE por sí sola no demuestra que estén configurados y disponibles los servicios de voz IMS.

- Error A: Las funciones de conectividad de EPC no sustituyen el control y los servicios IMS utilizados por la solución VoLTE.
- Error B: La interfaz radio pertenece a LTE/E-UTRA; IMS es una arquitectura de servicios sobre conectividad IP, no el acceso radio.
- Error C: Un códec representa audio en un formato; VoLTE es una solución de telefonía basada en IMS y conectividad LTE.

- [Ericsson: Voice and communication services in4G and5G networks](https://www.ericsson.com/en/reports-and-papers/white-papers/voice-and-communication-services-in-4g-and-5g-networks) · VoLTE – A foundation for a global communication services ecosystem; Voice in5G networks: figuras1–3, EPC/IMS/CSFB y SA/NSA · versión: White paper julio2022, HTML comprobado el04-11-2026. Alcance arquitectónico y perfiles; sin garantías comerciales, despliegue real o afirmaciones de cobertura universal. CSFB cambia al dominio de circuitos; VoLTE usa IMS sobre LTE/EPC. · comprobado: 2026-11-04
- [AT&amp;T Developer: Long Term Evolution, LTE Architecture](https://developer.att.com/technical-library/network-technologies/long-term-evolution) · LTE Architecture: E-UTRAN/eNB, EPC, interfaces S1/X2, MME/S-GW/P-GW; LTE Performance: caudal real depende de usuarios, radio y backhaul · versión: Página histórica del operador, HTML comprobado el04-11-2026. Solo estructura funcional y dependencia del rendimiento. Se excluyen proyecciones comerciales, cobertura, tasas y situación de mercado anteriores al despliegueLTE. · comprobado: 2026-11-04

Partida: `c7e81644746f5b945f77777d7d1213b5d2d9d9348fcc54c6bb071c3fa3d49a69` · propuesta: `6788f77d5ad662eceef85fcf4beac5d96f1bc2ff81173d9027cc962433c84b4c`

## MAN-GSI-P19-078

Decisión: pending_review · acción: revise.

Motivo: Conservar beneficio potencial de edge y clave D; caso de análisis de imágenes sin prometer retardo cero o eliminar core.

### Antes

¿Qué relación puede existir entre 5G y edge computing?

- A. Edge garantiza latencia cero.
- B. 5G obliga a que todas las aplicaciones residan en la antena.
- C. Edge sustituye al core móvil.
- D. Acercar procesamiento a la red/usuario puede reducir latencia y tráfico hacia centros remotos en casos adecuados. **(correcta)**

Explicación: La latencia extremo a extremo depende también de dónde se ejecuta la aplicación.

### Propuesta

Un servicio 5G envía imágenes para analizarlas y devuelve una respuesta al usuario. ¿Qué relación con edge computing puede mejorar ese recorrido?

- A. El acceso 5G elimina el retardo de proceso aunque las imágenes se analicen en un centro remoto.
- B. La ubicación del análisis deja de influir cuando el terminal utiliza la misma interfaz NR.
- C. El servidor de análisis sustituye las funciones de movilidad del núcleo al desplegarse cerca.
- D. Acercar el análisis puede reducir recorrido y tráfico remoto si el diseño del servicio lo permite. **(correcta)**

Explicación: Acercar procesamiento al punto de acceso puede reducir transporte hacia centros remotos y parte de la latencia del servicio. El resultado depende de ruta, carga, recursos, aplicación y continuidad cuando el usuario se mueve; se contrasta con medidas. 5G Core contempla acceso local y selección de funciones de plano de usuario para apoyar edge. No obliga a alojar aplicaciones en cada antena ni elimina el núcleo o todos los retardos.

- Error A: La generación de acceso no elimina propagación, colas o procesamiento de un análisis que continúa ejecutándose en una ubicación remota.
- Error B: La ruta hasta el servidor y su carga pueden cambiar el tiempo total aunque se conserve la misma tecnología de acceso radio.
- Error C: Un servidor de aplicación cercano no sustituye las funciones de autenticación, movilidad y sesión que presta el núcleo de red.

- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §3.1 Network Function/Network Slice; §4.1/4.2.1–4.2.4/4.2.6, figuras4.2.3-1/4.2.3-2/4.2.4-1/4.2.4-3; §5.13 edge y §5.15.1–5.15.2 slicing. PDF34/42–45/47–48/53/251–254. · versión: V18.12.0 (2026-01), 3GPP Release18. Apartados seleccionados comprobados el04-11-2026, original y tres renders conservados. No lectura íntegra de723 páginas ni edición más reciente atribuida. SBA se refiere especialmente a interacciones del plano de control; slices pueden compartir funciones y recursos. · comprobado: 2026-11-04
- [ETSI ISG MEC: Multi-access Edge Computing](https://www.etsi.org/technical-groups/mec/?id=1700) · Introducción: capacidades cloud al borde; múltiples ubicaciones, de on-premise a network edge; accesos móviles, fijos y WLAN · versión: HTML comprobado el04-11-2026. Posibilidad arquitectónica de proximidad, no garantía de retardo nulo, ubicación obligatoria en antena o sustitución de funciones del núcleo. · comprobado: 2026-11-04
- [Microsoft Learn: Azure network round-trip latency statistics](https://learn.microsoft.com/en-us/azure/networking/azure-network-latency) · What is round-trip latency?; How is latency measured?: trayecto de ida/vuelta y mediciones; selección de región según usuarios · versión: HTML público comprobado el04-11-2026. Define RTT de red y ejemplo de medición; no se usan valores P50 entre regiones como SLA, latencia de aplicación, percentiles de cola o medida de radio móvil. Aviso de autorización visible, pero estos apartados se leen públicamente. · comprobado: 2026-11-04

Partida: `e676585258053007ed430f78187846f9bcfc54fe0b08d5ff5cea6f43d88293be` · propuesta: `388b9987ae75019f62840dc768d9fb4b53950026c432dc3b526d8071d6519f46`
