# GSI-EDITORIAL-081 — revisión propuesta

Preparado: 2026-11-04. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `f32c0921733db58f00b2cf06e204785347426ba4c0bb7a73baf8779801f3c319`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T13-019

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de deuda de seguridad y clave A; caso con dispositivo no actualizable y soporte agotado.

### Antes

¿Qué riesgo tiene un dispositivo IoT sin capacidad de actualización?

- A. Mantener deuda de seguridad durante su vida útil **(correcta)**
- B. No necesitar inventario
- C. Garantizar estabilidad y seguridad absolutas
- D. Eliminar vulnerabilidades futuras

Explicación: El ciclo de soporte y actualización es parte esencial de la seguridad.

### Propuesta

Un dispositivo IoT seguirá en uso varios años, pero no admite actualización de firmware. ¿Qué riesgo debe contemplar su responsable?

- A. Puede conservar vulnerabilidades sin una vía normal de parcheo. **(correcta)**
- B. Reduce el riesgo porque mantiene intacta la versión de fábrica.
- C. Permite sustituir el soporte del fabricante por un inventario.
- D. Hace que segmentar la red corrija los defectos del firmware.

Explicación: Sin una vía de actualización, una vulnerabilidad descubierta puede seguir presente durante la vida útil. Deben evaluarse soporte, exposición, medidas compensatorias y sustitución o retirada. No demuestra que el equipo ya esté explotado; tampoco un inventario o una red segmentada reparan por sí mismos el software defectuoso.

- Error B: Conservar la versión original no elimina defectos que se descubran después ni incorpora sus correcciones.
- Error C: El inventario ayuda a gestionar riesgo y sustitución, pero no proporciona parches ni mantenimiento del software.
- Error D: La segmentación puede limitar alcance de ataques, pero no modifica el firmware para corregir una vulnerabilidad.

- [NIST: IoT Device Cybersecurity Requirement Catalog, Software Update](https://pages.nist.gov/IoT-Device-Cybersecurity-Requirement-Catalogs/technical/update/) · Update Capabilities y Update Application Support: instalación autorizada y verificación del origen · versión: Catálogo público HTML comprobado el 04-11-2026. No se interpreta un checksum sin autenticación como prueba suficiente de origen; se distingue actualización verificada de actualización infalible. · comprobado: 2026-11-04
- [NIST: Information Dissemination, Manufacturer/Supporting Entity](https://pages.nist.gov/IoT-Device-Cybersecurity-Requirement-Catalogs/nontechnical/manufacturer/information/) · §2 Support lifecycle: vulnerabilidades, mitigaciones, cambios de componentes y decisiones de fin de vida · versión: HTML comprobado el 04-11-2026. Necesidad de información y soporte durante vida útil; sin imponer periodos universales o obligaciones normativas AGE. · comprobado: 2026-11-04
- [NCSC: Provide updates, securely](https://www.ncsc.gov.uk/collection/device-security-principles-for-manufacturers/provide-updates-securely) · Introducción; Guideline1.1, publicación de periodo mínimo de actualizaciones y riesgos fuera de soporte · versión: HTML comprobado el 04-11-2026. Actualizaciones y procedencia verificadas; un dispositivo no actualizable requiere evaluación y controles compensatorios, no declaración automática de explotación. · comprobado: 2026-11-04

Partida: `9bfeb0347f7bd47cf25634f9159b9231ebd4fba430cd3329ef18ab20fce48d84` · propuesta: `1c6184f5f27a9401002f1e53e2bc4a5cc1456e2c2dd1258729f9e497a9ca0405`

## AI-GSI-B4-T13-020

Decisión: pending_review · acción: revise.

Motivo: Conservar controles durante vida útil y clave C; paquetes plausibles con una carencia concreta cada uno.

### Antes

¿Qué controles pertenecen al ciclo de vida seguro de IoT?

- A. Servicios innecesarios abiertos
- B. Credenciales por defecto compartidas
- C. Identidad única, firmware firmado, segmentación y gestión de soporte **(correcta)**
- D. Ausencia de inventario

Explicación: Seguridad exige identidad, actualización, mínimos servicios y fin de vida planificado.

### Propuesta

¿Qué controles pertenecen al ciclo de vida seguro de IoT?

- A. Identidad propia, firmware remoto sin verificar y soporte activo.
- B. Inventario y contraseña común en toda la familia de dispositivos.
- C. Identidad propia, firmware verificado, segmentación y soporte. **(correcta)**
- D. Cifrado de tráfico y continuidad con firmware fuera de soporte.

Explicación: Un ciclo seguro combina identidad gestionable por dispositivo, verificación y autorización de actualizaciones, límites de comunicación y soporte planificado hasta la retirada. La firma permite comprobar origen e integridad del firmware cuando se valida correctamente, sin garantizar que carezca de fallos. La identidad única tampoco sustituye credenciales y permisos adecuados.

- Error A: El origen y la integridad de una actualización deben comprobarse; recibirla de forma remota no basta para confiar en ella.
- Error B: Inventariar no compensa una credencial compartida que amplía el impacto de exposición y dificulta control individual.
- Error D: Cifrar el canal no corrige las vulnerabilidades del firmware ni elimina la necesidad de gestionar el fin del soporte.

- [NIST: Device Identification](https://pages.nist.gov/IoT-Device-Cybersecurity-Requirement-Catalogs/technical/identity/) · Identifier Management Support y Actions Based on Device Identity · versión: HTML comprobado el 04-11-2026. Identificador único facilita inventario y políticas, pero no acredita por sí solo autenticación criptográfica. · comprobado: 2026-11-04
- [NIST: IoT Device Cybersecurity Requirement Catalog, Software Update](https://pages.nist.gov/IoT-Device-Cybersecurity-Requirement-Catalogs/technical/update/) · Update Capabilities y Update Application Support: instalación autorizada y verificación del origen · versión: Catálogo público HTML comprobado el 04-11-2026. No se interpreta un checksum sin autenticación como prueba suficiente de origen; se distingue actualización verificada de actualización infalible. · comprobado: 2026-11-04
- [NIST: Information Dissemination, Manufacturer/Supporting Entity](https://pages.nist.gov/IoT-Device-Cybersecurity-Requirement-Catalogs/nontechnical/manufacturer/information/) · §2 Support lifecycle: vulnerabilidades, mitigaciones, cambios de componentes y decisiones de fin de vida · versión: HTML comprobado el 04-11-2026. Necesidad de información y soporte durante vida útil; sin imponer periodos universales o obligaciones normativas AGE. · comprobado: 2026-11-04
- [NCSC: Preventing Lateral Movement](https://www.ncsc.gov.uk/guidance/preventing-lateral-movement) · §6 Segregate networks as sets: separar sistemas y limitar flujos necesarios · versión: HTML comprobado el 04-11-2026. Segmentación efectiva reduce alcance; no sanea firmware ni garantiza ausencia de ataques. · comprobado: 2026-11-04

Partida: `0e3cd6828ab7160e654bf765d5e471120a19d09943e30c95b9f5fd10b04d6d1d` · propuesta: `2a17e2755b9260bb41d418555c30eeb9e006f0e61ae05b19e79fe2ee78f6e6c0`

## MAN-GSI-P19-006

Decisión: pending_review · acción: revise.

Motivo: Conservar entrada/interrogación y clave A; papeles IMS próximos y nota de control de borde.

### Antes

¿Qué función clásica desempeña I-CSCF?

- A. Servir como punto de entrada/interrogación hacia un dominio IMS y ayudar a localizar la función de servicio adecuada. **(correcta)**
- B. Transportar obligatoriamente todos los paquetes RTP de los usuarios y transcodificar los medios antes de entregarlos al dominio de destino.
- C. Gestionar el conmutador Ethernet de acceso, asignando puertos físicos y VLAN a cada terminal que intenta registrarse en el núcleo IMS.
- D. Mezclar los flujos de audio y vídeo como una MCU y generar una composición audiovisual única para todos los participantes de la sesión.

Explicación: I-CSCF participa en entrada y consulta/routing hacia el S-CSCF correspondiente.

### Propuesta

¿Qué función clásica desempeña I-CSCF?

- A. Interrogar datos del dominio y encaminar hacia el S-CSCF adecuado. **(correcta)**
- B. Ser el primer proxy con el que contacta el terminal en el acceso.
- C. Mantener el control de servicio y de sesión del abonado registrado.
- D. Procesar y mezclar los flujos de medios recibidos por el dominio.

Explicación: El I-CSCF desempeña un papel de interrogación y encaminamiento: consulta información del dominio para seleccionar o localizar el S-CSCF adecuado y reenviarle señalización. Es una función lógica de control. Puede haber varias instancias y funciones de borde adicionales; no se afirma que sea el primer equipo físico atravesado por todo paquete.

- Error B: El primer punto de contacto IMS del terminal corresponde al P-CSCF; no identifica el papel del I-CSCF.
- Error C: El control de sesión y la interacción con servicios del usuario son funciones del S-CSCF.
- Error D: Mezclar medios corresponde a funciones de recursos multimedia, no a interrogar y encaminar señalización hacia un S-CSCF.

- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04
- [IETF: RFC 4457, SIP P-User-Database Header](https://www.rfc-editor.org/rfc/rfc4457.html) · §1 IMS usa SIP; §2.1 REGISTER por P-CSCF, I-CSCF/HSS y S-CSCF · versión: Informational, abril de 2006, HTML comprobado el 04-11-2026. Ejemplo clásico de funciones y encaminamiento; no se universaliza ausencia de control de borde o una única HSS. · comprobado: 2026-11-04

Partida: `bcf2d743354923bcba18d380a71aae249a6d67102f51b32cadd3c0dd1f5ff344` · propuesta: `eaa00973bb586878733942fc2e6489411dec2f83a65da8dd8d5aa0ae6f9370f0`

## MAN-GSI-P19-009

Decisión: pending_review · acción: revise.

Motivo: Conservar relevancia de IMS con 5G y clave D; evolución de acceso sin confundir funciones de control y transporte.

### Antes

¿Qué afirmación es correcta sobre IMS y 5G?

- A. IMS queda limitado a redes LTE y se elimina por completo al desplegar 5G Standalone.
- B. IMS forma parte del plano de usuario del 5G Core y sustituye a UPF en el transporte de paquetes.
- C. IMS es el mecanismo de acceso radio que negocia recursos entre el terminal y la gNodeB.
- D. IMS continúa siendo relevante para servicios multimedia/voz; la arquitectura móvil evoluciona, pero no convierte IMS en un concepto obsoleto. **(correcta)**

Explicación: 3GPP sigue manteniendo especificaciones IMS para LTE/5G y generaciones posteriores.

### Propuesta

Un operador evoluciona el acceso de una oferta de voz multimedia IMS hacia 5GS. ¿Qué relación entre ambas arquitecturas es correcta?

- A. El acceso 5GS reemplaza la señalización IMS por reenvío en la UPF.
- B. El P-CSCF pasa a ser la función de gestión de las sesiones PDU.
- C. IMS asume la planificación de recursos radio del terminal en la gNB.
- D. El acceso 5GS puede proporcionar conectividad para los servicios IMS. **(correcta)**

Explicación: IMS sigue siendo una arquitectura para control y servicios multimedia sobre conectividad IP, que puede aportar 5GS. El anexo Y de la edición consultada describe expresamente ese acceso. No reemplaza funciones del núcleo 5G o de la radio, ni implica que toda red 5G ofrezca todos los servicios IMS o los active sin configuración.

- Error A: La UPF proporciona tratamiento del plano de usuario; reenviar paquetes no sustituye el control de servicios IMS.
- Error B: P-CSCF es una función de control IMS, distinta de la gestión de sesiones PDU del 5G Core.
- Error C: La planificación radio pertenece al acceso; IMS utiliza conectividad y no se convierte en el planificador de la gNB.

- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `b679af4ac3cb7632cf17d92302a660fabf16e5aa0e68010b9c42c615fad49420` · propuesta: `4a1afa746ee28c40bda75a671252e8ac1b50a80056e99563f3b039ceae2c0467`

## MAN-GSI-P19-010

Decisión: pending_review · acción: revise.

Motivo: Conservar SIP como control IMS y clave A; diferenciar control, descripción, transporte y datos de abonado.

### Antes

¿Qué relación hay entre IMS y SIP?

- A. IMS usa SIP como base de control de sesiones, con perfiles y procedimientos definidos por 3GPP. **(correcta)**
- B. SIP transporta las muestras de audio y vídeo de IMS después del establecimiento, sustituyendo a RTP en el plano de medios.
- C. IMS elimina SIP y utiliza exclusivamente SNMP para registrar abonados, negociar sesiones y ejecutar servicios multimedia.
- D. SIP solo se utiliza en PBX empresariales y no forma parte de los perfiles o procedimientos normalizados por 3GPP para IMS.

Explicación: 3GPP TS 24.229 define control IMS basado en SIP/SDP.

### Propuesta

¿Qué relación hay entre IMS y SIP?

- A. SIP aporta control de sesión dentro de los perfiles y procedimientos IMS. **(correcta)**
- B. SIP transporta las muestras multimedia generadas durante una sesión IMS.
- C. SIP describe codecs y puertos como formato del cuerpo de cada sesión.
- D. SIP almacena los perfiles permanentes de abonado del dominio del operador.

Explicación: IMS adopta SIP para señalización y control de sesiones, integrándolo con sus funciones y procedimientos. Las descripciones de medios pueden expresarse en SDP y el transporte multimedia emplea mecanismos como RTP. Usar SIP no convierte por sí mismo una instalación en IMS: SIP también se utiliza en otras arquitecturas.

- Error B: Las muestras de audio o vídeo se transportan por protocolos de medios, como RTP; no son la función de señalización SIP.
- Error C: SDP es el formato descriptivo de parámetros de medios; SIP puede transportarlo, pero no se identifica con él.
- Error D: El repositorio de datos de abonado es otra función de arquitectura; SIP no es una base de datos permanente de perfiles.

- [IETF: RFC 4457, SIP P-User-Database Header](https://www.rfc-editor.org/rfc/rfc4457.html) · §1 IMS usa SIP; §2.1 REGISTER por P-CSCF, I-CSCF/HSS y S-CSCF · versión: Informational, abril de 2006, HTML comprobado el 04-11-2026. Ejemplo clásico de funciones y encaminamiento; no se universaliza ausencia de control de borde o una única HSS. · comprobado: 2026-11-04
- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [IETF: RFC8866, Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866.html) · §1 descripción sin protocolo de transporte; §3.1 SIP y offer/answer; §2 Media Description · versión: Enero de 2021, HTML comprobado el 04-11-2026. Sustituye RFC4566. Describir parámetros no es transportar audio ni negociar de forma autónoma sin procedimientos de oferta/respuesta. · comprobado: 2026-11-04
- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `f82056858eb2ea2ea6e6b7e5a4a055fbe6c6df996edbd347729981972c66d23b` · propuesta: `9d1014896211f68199a43d90b3227b7c7adf83bb32fbb4d74c8c4231fcf3efee`

## MAN-GSI-P19-011

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y tres distractores próximos; ajustar correcta D y explicar oferta/respuesta frente a formato.

### Antes

¿Qué relación hay entre IMS y SDP?

- A. SDP gestiona el registro y la autenticación de abonados dentro del núcleo IMS.
- B. SDP transporta los flujos de audio y vídeo entre los extremos de una sesión IMS.
- C. SDP sustituye a SIP para establecer, modificar y terminar sesiones multimedia.
- D. SDP describe parámetros de medios/sesión que se intercambian dentro de la señalización, mientras IMS/SIP controla la sesión. **(correcta)**

Explicación: SDP describe medios, codecs y direcciones/puertos; no transporta audio/vídeo.

### Propuesta

¿Qué relación hay entre IMS y SDP?

- A. SDP gestiona el registro y la autenticación de abonados dentro del núcleo IMS.
- B. SDP transporta los flujos de audio y vídeo entre los extremos de una sesión IMS.
- C. SDP sustituye a SIP para establecer, modificar y terminar sesiones multimedia.
- D. SDP describe parámetros de medios intercambiados dentro de la señalización. **(correcta)**

Explicación: SDP expresa información de sesión y medios, como tipos, formatos, direcciones y puertos. En SIP puede formar parte del cuerpo de mensajes utilizados por un procedimiento de oferta y respuesta. El formato no transporta las muestras ni gestiona por sí solo registro, autenticación o ciclo de control de una sesión.

- Error A: Registro y autenticación requieren los procedimientos y funciones de control correspondientes; no los ejecuta el formato descriptivo SDP.
- Error B: Las descripciones indican cómo participar en los medios, pero sus líneas de texto no son el flujo de audio o vídeo.
- Error C: SIP controla la sesión y puede llevar SDP; el formato SDP no reemplaza los métodos y procedimientos SIP.

- [IETF: RFC8866, Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866.html) · §1 descripción sin protocolo de transporte; §3.1 SIP y offer/answer; §2 Media Description · versión: Enero de 2021, HTML comprobado el 04-11-2026. Sustituye RFC4566. Describir parámetros no es transportar audio ni negociar de forma autónoma sin procedimientos de oferta/respuesta. · comprobado: 2026-11-04
- [IETF: RFC3264, An Offer/Answer Model with SDP](https://www.rfc-editor.org/rfc/rfc3264.html) · Abstract y §1: modelo de oferta/respuesta usando descripciones SDP · versión: Junio de 2002, HTML comprobado el 04-11-2026. Marco de negociación, distinto del formato descriptivo y de los paquetes de medios. · comprobado: 2026-11-04
- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04

Partida: `c3cf0813c39e1859e1917268f1ffcbcdb9cf659d7e9baf982fbfbd47cbdaeedd` · propuesta: `fbd704251cca830bc10a7d3d1367a1901f16d654e480fa523bf22e96d6330c77`

## MAN-GSI-P19-012

Decisión: pending_review · acción: revise.

Motivo: Conservar VoIP más amplio que IMS y clave D; caso de centralita SIP sin subsistema móvil.

### Antes

¿VoIP necesita obligatoriamente IMS?

- A. La voz IP requiere IMS cuando utiliza SIP, porque SIP solo puede desplegarse dentro de esa arquitectura móvil.
- B. Cualquier servicio de voz sobre una red IP forma parte del 5G Core aunque se preste desde una plataforma independiente.
- C. WebRTC necesita registrar cada navegador en IMS antes de establecer audio entre participantes mediante Internet.
- D. No. Puede existir VoIP basada en SIP u otras arquitecturas sin desplegar IMS. **(correcta)**

Explicación: IMS es una arquitectura específica; VoIP es un concepto más amplio.

### Propuesta

Una entidad presta voz sobre IP con una centralita y terminales SIP, sin desplegar funciones IMS. ¿Cómo se clasifica esa solución?

- A. Es IMS porque cualquier llamada que utiliza SIP pertenece a esa arquitectura.
- B. Es telefonía del 5G Core porque toda voz sobre IP requiere funciones móviles.
- C. Es IMS si la centralita y los terminales utilizan el mismo formato SDP.
- D. Es VoIP aunque no incorpore la arquitectura de control y servicios IMS. **(correcta)**

Explicación: VoIP designa voz transportada mediante redes IP, y puede implementarse mediante una centralita y terminales SIP sin un subsistema IMS. IMS es una arquitectura específica que puede proporcionar servicios de vozIP. Compartir protocolos o usar SDP no demuestra que estén presentes sus funciones lógicas y procedimientos.

- Error A: SIP es un protocolo general de señalización y puede emplearse fuera de IMS; no determina por sí solo la arquitectura completa.
- Error B: La vozIP puede funcionar sobre redes y plataformas ajenas al núcleo móvil5G; no requiere todas sus funciones.
- Error C: SDP también se utiliza en otros entornos; un formato de descripción común no implica desplegar IMS.

- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [IETF: RFC8866, Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866.html) · §1 descripción sin protocolo de transporte; §3.1 SIP y offer/answer; §2 Media Description · versión: Enero de 2021, HTML comprobado el 04-11-2026. Sustituye RFC4566. Describir parámetros no es transportar audio ni negociar de forma autónoma sin procedimientos de oferta/respuesta. · comprobado: 2026-11-04
- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `9b4fe0055cfa946b0e4585c9c6ca05c66aef02c07fd9ea6313162c7a3fbd263b` · propuesta: `d139ca29c3a33e2ba832bd786f82115254c241b753c34a27cf2c2a2cf3363644`

## MAN-GSI-P19-013

Decisión: pending_review · acción: revise.

Motivo: Conservar relación marco/arquitectura y clave A; evitar distractores sobre codecs o exclusión mutua.

### Antes

¿Cuál es la relación más correcta entre NGN e IMS?

- A. NGN es un concepto amplio de red convergente; IMS es una arquitectura concreta de control/servicios multimedia IP dentro de ese contexto. **(correcta)**
- B. IMS es el concepto general de cualquier red convergente y NGN es un codec concreto utilizado para comprimir multimedia.
- C. NGN designa la base de datos de abonados de 3GPP, mientras IMS identifica exclusivamente la red física de acceso.
- D. Son arquitecturas mutuamente excluyentes: desplegar control IMS impide aplicar principios o servicios propios de NGN.

Explicación: NGN expresa principios de convergencia; IMS materializa control multimedia IP en el ecosistema 3GPP.

### Propuesta

¿Cuál es la relación más correcta entre NGN e IMS?

- A. NGN es el marco amplio de convergencia; IMS concreta control multimedia IP. **(correcta)**
- B. NGN es la red física de acceso; IMS define la tecnología de ese enlace.
- C. NGN equivale al núcleo 5G; IMS es el mecanismo de selección de sus UPF.
- D. NGN transporta señalización SIP; IMS transporta exclusivamente los medios.

Explicación: NGN expresa principios de redes por paquetes, separación de servicios y transporte y convergencia. IMS concreta una arquitectura de control y servicios multimedia IP en ese contexto. No son sinónimos ni se distinguen como señalización frente a medios: sus ámbitos y niveles de descripción son diferentes.

- Error B: NGN no se reduce a un enlace físico ni IMS define una única tecnología de acceso.
- Error C: El concepto NGN no equivale al5G Core y seleccionar funciones de plano de usuario no define IMS.
- Error D: La relación no consiste en repartir protocolos de señalización y medios entre dos redes con esos nombres.

- [ITU: Next Generation Networks, WTPF2009](https://www.itu.int/osg/csd/wtpf/wtpf2009/ngn.html) · A few words on NGN: definición Y.2001 y características de separación, convergencia y movilidad · versión: Página histórica actualizada 30-07-2008, HTML comprobado el 04-11-2026. Principios estables, sin adoptar predicciones de despliegue, interpretar acceso independiente como ausencia de políticas o garantizar continuidad automática. · comprobado: 2026-11-04
- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `3fc7ee460bf59794ee438bcc5debe3fffb92a469b57a78ccc8363dfc60b73cf0` · propuesta: `4bb1b0ed9152f2734f796bf92958c0b7dfe1c533e439e36887ab24ce53ab883e`

## MAN-GSI-P19-014

Decisión: pending_review · acción: revise.

Motivo: Conservar independencia funcional y clave C; precisar condiciones sin prometer movilidad automática.

### Antes

¿Qué objetivo tiene desacoplar acceso y servicios en IMS/NGN?

- A. Vincular cada servicio a una tecnología de acceso concreta para que no pueda utilizarse desde otras redes o dispositivos.
- B. Eliminar autenticación, autorización y políticas porque separar acceso y servicio hace innecesario identificar al abonado.
- C. Permitir que servicios e identidad se mantengan de forma más independiente de la tecnología de acceso. **(correcta)**
- D. Impedir la movilidad entre accesos, manteniendo la sesión únicamente mientras el terminal permanezca en la red inicial.

Explicación: El desacoplamiento facilita convergencia fijo-móvil y reutilización de servicios.

### Propuesta

¿Qué objetivo tiene desacoplar acceso y servicios en IMS/NGN?

- A. Recrear una identidad de servicio por cada tecnología de acceso utilizada.
- B. Hacer que la tecnología radio determine directamente todos los servicios.
- C. Permitir que servicios e identidad dependan menos de la tecnología de acceso. **(correcta)**
- D. Sustituir el control de sesión por la conectividad que ofrece el transporte.

Explicación: Desacoplar acceso y servicios favorece reutilizar funciones de servicio e identidad sobre distintas conectividades, facilitando convergencia fijo-móvil. Es independencia funcional relativa: siguen siendo necesarias conectividad, autenticación, autorización, políticas y mecanismos de continuidad adecuados. La separación no garantiza por sí sola una llamada ininterrumpida al cambiar de red.

- Error A: Vincular una identidad de servicio nueva a cada acceso mantiene el acoplamiento que se pretende reducir.
- Error B: Que la radio determine íntegramente el servicio contradice separar funciones de servicio y tecnología de transporte.
- Error D: Disponer de un transporte no reemplaza señalización, identidad o control necesarios para prestar servicios multimedia.

- [ITU: Next Generation Networks, WTPF2009](https://www.itu.int/osg/csd/wtpf/wtpf2009/ngn.html) · A few words on NGN: definición Y.2001 y características de separación, convergencia y movilidad · versión: Página histórica actualizada 30-07-2008, HTML comprobado el 04-11-2026. Principios estables, sin adoptar predicciones de despliegue, interpretar acceso independiente como ausencia de políticas o garantizar continuidad automática. · comprobado: 2026-11-04
- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `57f7427de7801623a2d3599b151512e58c83ab71ab40b782dbef67a29113f304` · propuesta: `00274e39cac851026158b901b92cc3e9d72d8ff565e59d4a2cc2661a254f55ae`

## MAN-GSI-P19-015

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción conceptual P/I/S y clave C; eliminar afirmación no respaldada sobre qué interfaces no estudiar para GSI.

### Antes

¿Qué debe dominarse para GSI sobre P-CSCF/I-CSCF/S-CSCF?

- A. Las direcciones, versiones y códigos de fabricante de cada nodo desplegado por los operadores en sus redes comerciales.
- B. Que P-CSCF, I-CSCF y S-CSCF son nombres intercambiables para un mismo proxy sin responsabilidades diferenciadas.
- C. La función conceptual de cada entidad y el flujo de control, no memorizar cada interfaz de cada release. **(correcta)**
- D. Los algoritmos de compresión de audio y vídeo de cada entidad, aunque estas funciones pertenezcan al plano de control IMS.

Explicación: El temario prioriza arquitectura estable sobre catálogos o releases concretas.

### Propuesta

¿Qué enfoque permite interpretar correctamente P-CSCF, I-CSCF y S-CSCF en un flujo de señalización IMS?

- A. Deducir su papel lógico a partir del fabricante que los comercializa.
- B. Tratar sus nombres como equivalentes porque todos manejan mensajes SIP.
- C. Distinguir sus funciones lógicas y el recorrido de la señalización. **(correcta)**
- D. Clasificarlos por el codec de los medios que transporta cada uno.

Explicación: P-CSCF, I-CSCF y S-CSCF tienen responsabilidades diferenciadas dentro del control IMS: contacto del terminal, interrogación/encaminamiento y servicio de sesión, respectivamente. Entender esas funciones permite interpretar un flujo sin confundirlas con transporte de medios o productos. Su despliegue físico puede variar; el programa no autoriza a deducir qué detalle aparecerá en un examen.

- Error A: El fabricante no determina el papel lógico normalizado; distintos productos pueden implementar la misma función.
- Error B: Compartir el uso de SIP no hace intercambiables sus responsabilidades de contacto, interrogación y servicio.
- Error D: Estas funciones se distinguen por control de señalización, no por un catálogo de codecs que cada una deba transportar.

- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04
- [IETF: RFC 4457, SIP P-User-Database Header](https://www.rfc-editor.org/rfc/rfc4457.html) · §1 IMS usa SIP; §2.1 REGISTER por P-CSCF, I-CSCF/HSS y S-CSCF · versión: Informational, abril de 2006, HTML comprobado el 04-11-2026. Ejemplo clásico de funciones y encaminamiento; no se universaliza ausencia de control de borde o una única HSS. · comprobado: 2026-11-04
- [BOE: Resolución 18-12-2025, convocatoria GSI](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262) · Anexo IX, programa ingreso libre, bloque IV, tema 14: NGN/IMS, VoIP/ToIP, comunicaciones unificadas y convergencia fijo-móvil · versión: Texto original publicado 22-12-2025, apartado HTML comprobado el 04-11-2026. Solo delimita materia: no respalda predicciones sobre frecuencia de examen o qué interfaces no estudiar. · comprobado: 2026-11-04

Partida: `e7dc218ea60832a1916bdadae1912100b3f2502210b2edc16b34d015be244d70` · propuesta: `e87c63be1ac2181cbf53c2f74ddda80c84978d790f3a1bb547a0e67a417672a4`

## MAN-GSI-P19-016

Decisión: pending_review · acción: revise.

Motivo: Conservar tratamiento diferenciado y clave D; distinguir recursos, autorización y señalización.

### Antes

¿Qué aporta el control de políticas/QoS en una arquitectura convergente?

- A. Crear capacidad física adicional en cada enlace con solo marcar o clasificar paquetes, sin ampliar ni gestionar los recursos existentes.
- B. Eliminar toda congestión aunque la demanda supere de forma sostenida la capacidad disponible en los enlaces atravesados.
- C. Sustituir identidad y autorización porque la prioridad asignada a un flujo demuestra que el usuario está legitimado para generarlo.
- D. Permitir tratamiento diferenciado y coherente para servicios sensibles como voz y vídeo. **(correcta)**

Explicación: QoS administra recursos/congestión y debe integrarse con la política de servicio.

### Propuesta

¿Qué aporta el control de políticas/QoS en una arquitectura convergente?

- A. Aumentar el ancho de banda físico disponible mediante marcado de paquetes.
- B. Hacer equivalentes la prioridad del flujo y los permisos de su identidad.
- C. Obtener calidad de servicio por el hecho de negociar medios mediante SIP.
- D. Permitir tratamiento diferenciado coherente con la política de cada servicio. **(correcta)**

Explicación: La política y la QoS permiten clasificar flujos y gestionar su tratamiento conforme a los requisitos del servicio y los recursos disponibles. La voz y el vídeo pueden necesitar control de retardo, pérdida o variación temporal. Ni marcar paquetes ni señalizar una sesión crea capacidad física o garantiza calidad en todos los tramos.

- Error A: El marcado clasifica para un tratamiento; no amplía por sí mismo la capacidad de enlaces y equipos.
- Error B: Asignar prioridad no prueba que el usuario tenga permiso: identidad y autorización siguen siendo necesarias.
- Error C: Negociar una sesión no acredita que la red haya admitido y aplicado un tratamiento adecuado a sus medios.

- [IETF: RFC2475, Architecture for Differentiated Services](https://www.rfc-editor.org/rfc/rfc2475.html) · §1.1 Overview; §2.5 Network Resource Allocation: clasificación, acondicionamiento y reparto de recursos · versión: Informational, diciembre de 1998, HTML comprobado el 04-11-2026. Ejemplo de QoS; no se equipara todo control IMS a DiffServ ni se crea capacidad física mediante marcado. · comprobado: 2026-11-04
- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `48b6855ff3b15fd01e8c6eb7cde379a29a06648d08cd5f27e6a521c16fdf340a` · propuesta: `62a2dc3d57dac8a84a3cf65265549b73d1091d277466c9845f8de0a6a1dcc032`

## MAN-GSI-P19-017

Decisión: pending_review · acción: revise.

Motivo: Conservar integración funcional y clave C; diferenciar convergencia de servicios, física y de numeración.

### Antes

¿Qué significa convergencia de servicios en este contexto?

- A. Mantener voz, vídeo y mensajería en infraestructuras independientes, con directorios e identidades separados para cada servicio.
- B. Concentrar enlaces sobre el mismo cableado sin integrar funciones, control, presencia ni experiencia de usuario.
- C. Integrar voz, vídeo, mensajería, presencia y otros servicios sobre plataformas e identidades comunes. **(correcta)**
- D. Sustituir todos los protocolos de señalización por un único codec que transporte indistintamente cualquier servicio.

Explicación: La convergencia es funcional y arquitectónica, no solo física.

### Propuesta

¿Qué significa convergencia de servicios en este contexto?

- A. Separar las identidades y las plataformas que prestan voz, vídeo y mensajería.
- B. Compartir cableado y enlaces manteniendo independientes control y aplicaciones.
- C. Integrar voz, vídeo, mensajería y presencia sobre plataformas e identidades comunes. **(correcta)**
- D. Unificar la numeración de terminales manteniendo aisladas las aplicaciones.

Explicación: La convergencia de servicios integra funciones y experiencia de comunicación, por ejemplo identidad, presencia, voz y vídeo, sobre componentes comunes. Compartir soportes físicos o un esquema de numeración puede ayudar, pero no constituye por sí solo esa integración. El diseño debe resolver interoperabilidad, políticas y disponibilidad de los servicios implicados.

- Error A: Mantener plataformas e identidades separadas no aporta la integración funcional que caracteriza esta convergencia.
- Error B: Compartir el soporte físico sin integrar servicios y control es convergencia de infraestructura, no la integración funcional preguntada.
- Error D: Una numeración común no hace cooperar automáticamente mensajería, presencia, voz y vídeo entre aplicaciones aisladas.

- [ITU: Next Generation Networks, WTPF2009](https://www.itu.int/osg/csd/wtpf/wtpf2009/ngn.html) · A few words on NGN: definición Y.2001 y características de separación, convergencia y movilidad · versión: Página histórica actualizada 30-07-2008, HTML comprobado el 04-11-2026. Principios estables, sin adoptar predicciones de despliegue, interpretar acceso independiente como ausencia de políticas o garantizar continuidad automática. · comprobado: 2026-11-04
- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `5e922fd180882731b4e60377f89f3417fdc3d6fa3d611322f249738caa08115a` · propuesta: `102c5c107fd189c1ae58ca7a26c940de16a62463267c47b215845bc48a6fa3a4`

## MAN-GSI-P19-018

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de visión monolítica y clave B; caso de inventario que omite funciones lógicas.

### Antes

¿Qué riesgo tendría interpretar IMS como “un único servidor”?

- A. No existiría riesgo, porque las funciones IMS se ejecutarían en un único appliance indivisible definido así por 3GPP.
- B. Ignorar que es una arquitectura distribuida con varias funciones de control, datos de abonado y servicios. **(correcta)**
- C. El riesgo se limitaría a la capacidad, sin consecuencias para redundancia, seguridad, encaminamiento o interoperabilidad entre funciones.
- D. Permitiría sustituir todas las entidades IMS por una PBX, ya que ambas arquitecturas definen exactamente las mismas funciones.

Explicación: IMS define funciones lógicas y relaciones, no un producto monolítico obligatorio.

### Propuesta

Un inventario representa IMS como «un servidor» y no identifica sus funciones internas. ¿Qué riesgo introduce en el análisis de arquitectura?

- A. El inventario demuestra que las funciones comparten el mismo fallo físico.
- B. Se pueden omitir dependencias entre funciones y sus necesidades de resiliencia. **(correcta)**
- C. El número de servidores basta para deducir la arquitectura de señalización.
- D. Se puede evaluar interoperabilidad a partir de la marca del equipo inventariado.

Explicación: IMS se describe mediante funciones lógicas y relaciones, que pueden distribuirse, agruparse o replicarse en el despliegue. Reducir su inventario a un servidor sin identificar esas funciones puede ocultar dependencias, puntos de fallo y límites de seguridad. Tampoco se debe inferir que cada función exige obligatoriamente una máquina física independiente.

- Error A: Una etiqueta de inventario no demuestra dónde se ejecuta cada función ni qué componentes físicos o fallos comparten.
- Error C: Contar servidores no identifica el recorrido de mensajes ni las funciones de control y datos que intervienen.
- Error D: La marca no basta para conocer interfaces, perfiles o comportamiento interoperable entre funciones y dominios.

- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `44b283eb9b2f11030852fb524d1732d2fcd8e7fc34db8cc834d98038b9a8d96d` · propuesta: `011cbb259eb2285fa4c954bf3c7bb30b08d628d7fef6e8992b89a0949240e412`

## MAN-GSI-P19-019

Decisión: pending_review · acción: revise.

Motivo: Conservar separación de ámbitos y clave D; formular en plural y distinguir vista funcional de emplazamiento físico.

### Antes

En un diagrama de IMS, ¿qué capa conviene separar visualmente?

- A. Agrupar los elementos únicamente por fabricante y tecnología de acceso, sin mostrar control de sesión ni datos de abonado.
- B. Unir señalización y medios en una única capa y situar las funciones de abonado dentro de la red de acceso radio.
- C. Representar solo racks, enlaces físicos y subredes IP, aunque se pierdan las funciones y dependencias propias de IMS.
- D. Acceso/transporte, control de sesión y servicios/datos de abonado. **(correcta)**

Explicación: Separar capas ayuda a razonar arquitectura, seguridad y dependencias.

### Propuesta

En un diagrama IMS, ¿qué ámbitos funcionales conviene diferenciar para analizar sus dependencias?

- A. Acceso con los perfiles de abonado y señalización con todos los medios.
- B. Funciones agrupadas por fabricante aunque mezclen transporte y control.
- C. Control de sesión con el encaminamiento IP, omitiendo el plano de servicios.
- D. Acceso/transporte, control de sesión y servicios/datos de abonado. **(correcta)**

Explicación: Separar esos ámbitos ayuda a identificar conectividad, señalización, lógica de servicio y datos de abonado, y a analizar sus dependencias. Es una vista funcional útil, no una obligación de dibujar exactamente tres cajas físicas. El diagrama debe conservar relaciones entre funciones y distinguir señalización del tratamiento de medios.

- Error A: Agrupar perfiles de abonado con acceso y unir señalización a todos los medios mezcla responsabilidades distintas.
- Error B: El fabricante puede ser un dato de despliegue, pero agrupar solo por marca oculta límites y relaciones funcionales.
- Error C: Omitir servicios y confundir routingIP con control de sesión impide representar responsabilidades importantes de IMS.

- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04
- [ITU: Next Generation Networks, WTPF2009](https://www.itu.int/osg/csd/wtpf/wtpf2009/ngn.html) · A few words on NGN: definición Y.2001 y características de separación, convergencia y movilidad · versión: Página histórica actualizada 30-07-2008, HTML comprobado el 04-11-2026. Principios estables, sin adoptar predicciones de despliegue, interpretar acceso independiente como ausencia de políticas o garantizar continuidad automática. · comprobado: 2026-11-04

Partida: `3520d6821403bf68997492f1aa3a1fd851ff1263015278e09197d6317f5a49e2` · propuesta: `3d8c857f9bff97c833bf3424d9674913e506e2372825b001d5ed124001556e12`

## MAN-GSI-P19-020

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso original y clave C; independencia de servicios con condiciones reales de continuidad.

### Antes

Un organismo quiere conservar identidad y servicios de comunicaciones al cambiar entre accesos fijo y móvil. ¿Qué principio es más relevante?

- A. Usar exclusivamente telefonía analógica.
- B. Desactivar movilidad.
- C. Convergencia fijo-móvil con servicios desacoplados del acceso y control de sesión/identidad coherente. **(correcta)**
- D. Asignar una VLAN diferente a cada llamada como única medida.

Explicación: La convergencia busca continuidad de identidad y servicios entre accesos.

### Propuesta

Un organismo quiere conservar identidad y servicios de comunicaciones al cambiar entre accesos fijo y móvil. ¿Qué principio es más relevante?

- A. Anclar la identidad de servicio al puerto físico de cada red de acceso.
- B. Crear un perfil de comunicaciones independiente para cada tecnología radio.
- C. Desacoplar servicios del acceso y mantener control e identidad coherentes. **(correcta)**
- D. Resolver el cambio de acceso asignando otra VLAN a cada sesión de voz.

Explicación: La convergencia fijo-móvil busca conservar una experiencia e identidad de servicio coherentes sobre distintas conectividades. Desacoplar servicios y acceso favorece ese objetivo, pero hacen falta mecanismos de movilidad, autenticación y continuidad compatibles. No se garantiza ausencia de cortes por declarar convergencia ni por cambiar una configuración de red local.

- Error A: Vincular la identidad al puerto concreto dificulta conservarla al cambiar de red o tecnología de acceso.
- Error B: Perfiles independientes por tecnología mantienen una fragmentación que el objetivo de servicio intenta reducir.
- Error D: Una VLAN organiza conectividad local; no resuelve por sí sola continuidad de identidad y control entre accesos fijo y móvil.

- [ITU: Next Generation Networks, WTPF2009](https://www.itu.int/osg/csd/wtpf/wtpf2009/ngn.html) · A few words on NGN: definición Y.2001 y características de separación, convergencia y movilidad · versión: Página histórica actualizada 30-07-2008, HTML comprobado el 04-11-2026. Principios estables, sin adoptar predicciones de despliegue, interpretar acceso independiente como ausencia de políticas o garantizar continuidad automática. · comprobado: 2026-11-04
- [ETSI/3GPP: TS 123 228, IP Multimedia Subsystem, Stage2](https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/18.11.00_60/ts_123228v181100p.pdf) · §4.0/figura 4.0 y4.1, pp.27–28; §4.6.1–4.6.3, pp.49–51; anexo Y.0/figura Y.0-1, p.327; PDF28–29/50–52/328 · versión: V18.11.0, enero de 2026, Release 18, apartados comprobados el 04-11-2026. No lectura íntegra de 390 páginas ni afirmación de ser la última edición. Figuras y notas sobre control de borde y colocación de funciones revisadas visualmente. · comprobado: 2026-11-04

Partida: `c1b173dacc0deb7073d06054701e14db9cd9d7fd1db334217bdf59fa1f0ea2ca` · propuesta: `7d6e726bd3cf05615d4cf7a7964ca89f6959b6f45c76dc015b78b50728c80cba`

## MAN-GSI-P19-021

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y cuatro alternativas bien construidas, clave B; completar explicación y feedback individual.

### Antes

¿Cuál es la función principal de SIP?

- A. Transportar muestras de audio y vídeo en tiempo real con números de secuencia y marcas temporales mediante RTP.
- B. Señalizar y controlar el establecimiento, modificación y terminación de sesiones multimedia. **(correcta)**
- C. Describir codecs, direcciones, puertos y otros parámetros de una sesión multimedia mediante un cuerpo SDP.
- D. Informar sobre pérdida, jitter y estadísticas de recepción de los flujos multimedia mediante mensajes RTCP.

Explicación: RFC 3261 define SIP como protocolo de control/señalización de sesiones.

### Propuesta

¿Cuál es la función principal de SIP?

- A. Transportar muestras de audio y vídeo en tiempo real con números de secuencia y marcas temporales mediante RTP.
- B. Señalizar y controlar el establecimiento, modificación y terminación de sesiones multimedia. **(correcta)**
- C. Describir codecs, direcciones, puertos y otros parámetros de una sesión multimedia mediante un cuerpo SDP.
- D. Informar sobre pérdida, jitter y estadísticas de recepción de los flujos multimedia mediante mensajes RTCP.

Explicación: SIP señaliza y controla creación, modificación y terminación de sesiones. Puede llevar descripciones SDP, mientras protocolos de medios como RTP transportan las muestras y RTCP aporta información de recepción. Diferenciar esas funciones ayuda a diagnosticar una llamada: señalización correcta no demuestra que los medios lleguen o tengan calidad adecuada.

- Error A: Transportar muestras con secuencias y marcas temporales describe RTP; no es la función principal del protocolo SIP.
- Error C: Describir codecs y destinos de medios es el papel del formato SDP, aunque esa descripción viaje en un mensaje SIP.
- Error D: Los informes de recepción sobre pérdida y variación temporal corresponden a RTCP, no al control de establecimiento de SIP.

- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [IETF: RFC8866, Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866.html) · §1 descripción sin protocolo de transporte; §3.1 SIP y offer/answer; §2 Media Description · versión: Enero de 2021, HTML comprobado el 04-11-2026. Sustituye RFC4566. Describir parámetros no es transportar audio ni negociar de forma autónoma sin procedimientos de oferta/respuesta. · comprobado: 2026-11-04
- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04

Partida: `bf8c5d78bf1635e16ed597aad208e55ebe884ba0d6c633807533da011c91f70f` · propuesta: `45945627e85fd26e72032a4ee5a70d82b037360a10ec0a7d354aa5a877bab4ad`

## MAN-GSI-P19-022

Decisión: pending_review · acción: revise.

Motivo: Conservar inicio mediante INVITE y clave A; distractores que sí son métodos SIP y explicación de reinvitación.

### Antes

¿Qué método SIP se asocia típicamente al inicio de una sesión?

- A. INVITE. **(correcta)**
- B. GET.
- C. PUBLISH de SNMP.
- D. MOUNT.

Explicación: INVITE solicita establecer una sesión y suele incluir o negociar descripción de medios.

### Propuesta

¿Qué método SIP se asocia típicamente al inicio de una sesión?

- A. INVITE **(correcta)**
- B. REGISTER
- C. OPTIONS
- D. ACK

Explicación: INVITE solicita establecer una sesión entre participantes y puede intervenir en el intercambio de descripciones de medios. Un INVITE dentro de un diálogo también puede modificar una sesión ya existente. No se debe confundir iniciar la sesión con registrar contactos, consultar capacidades o confirmar una respuesta a una invitación.

- Error B: REGISTER gestiona asociaciones de una identidad SIP con contactos; no es el método para iniciar la sesión multimedia.
- Error C: OPTIONS consulta capacidades sin establecer la sesión multimedia con el interlocutor al que consulta.
- Error D: ACK confirma la respuesta final de una transacción INVITE según sus reglas; no sustituye la solicitud inicial de establecimiento.

- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04

Partida: `0be75933acf27f7f45cb10d8139b6dad292f0d36cf655d85a2ea266eca041877` · propuesta: `72cb751efdcd2b87108cd5ba7592b8f26ba2fbfcffa55203c3e94a27c8897ed2`

## MAN-GSI-P19-023

Decisión: pending_review · acción: revise.

Motivo: Conservar terminación normal BYE y clave C; acotar INVITE/200OK/ACK completos para distinguir CANCEL.

### Antes

¿Qué método SIP se usa para terminar normalmente un diálogo/sesión establecida?

- A. ARP.
- B. COMMIT.
- C. BYE. **(correcta)**
- D. PING como método SIP estándar de cierre.

Explicación: BYE termina una sesión SIP establecida.

### Propuesta

Una llamada SIP ya ha completado INVITE, 200OK y ACK. Un extremo quiere terminar normalmente la sesión. ¿Qué método utiliza?

- A. ACK
- B. CANCEL
- C. BYE **(correcta)**
- D. REGISTER

Explicación: En una sesión establecida, BYE solicita su terminación dentro del diálogo correspondiente. CANCEL sirve para cancelar una solicitud todavía pendiente y no deshace un INVITE al que ya se ha enviado respuesta final. ACK confirma el resultado de INVITE y REGISTER gestiona contactos; ninguna de esas funciones sustituye el cierre normal planteado.

- Error A: ACK confirma la respuesta final del INVITE; enviar otra confirmación no solicita terminar la sesión establecida.
- Error B: CANCEL no tiene efecto sobre un INVITE que ya recibió respuesta final; el caso plantea la sesión completada.
- Error D: REGISTER modifica o consulta contactos de una identidad; no termina por ello la sesión que ya está establecida.

- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04

Partida: `f7d9bc0611f6d6e5a56b7770a930aa29fc9e705f6bde2c766f623f5cbc652edc` · propuesta: `b2288b458c876633df481b4552c1e9d224257c46c79c15b9979ddb8e48d641ca`

## MAN-GSI-P19-024

Decisión: pending_review · acción: revise.

Motivo: Conservar registro de contactos y clave A; cuatro métodos válidos, sin confundir dirección de registro y contacto.

### Antes

¿Qué método SIP se relaciona con el registro de la ubicación/contacto de un usuario?

- A. REGISTER. **(correcta)**
- B. DELETE.
- C. TRACE de IP.
- D. SUBNET.

Explicación: REGISTER permite asociar una identidad SIP con contactos/localizaciones actuales.

### Propuesta

¿Qué método SIP se relaciona con el registro de la ubicación/contacto de un usuario?

- A. REGISTER **(correcta)**
- B. INVITE
- C. OPTIONS
- D. ACK

Explicación: REGISTER permite gestionar asociaciones entre una identidad SIP de registro y sus contactos, que ayudan a localizar al usuario para encaminar solicitudes. Las asociaciones tienen vigencia y pueden renovarse, consultarse o retirarse según el mensaje. Registrar contactos no equivale a iniciar una llamada ni a transportar sus medios.

- Error B: INVITE solicita establecer o modificar una sesión; no es el método de gestión de asociaciones de registro.
- Error C: OPTIONS consulta capacidades de un destino o servidor, sin crear por ello las asociaciones de contactos de registro.
- Error D: ACK pertenece a la confirmación de una transacción INVITE y no publica la localización actual de la identidad.

- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04

Partida: `9cb557330e20644e1e5956d2a5db78daf465881c4b42351bcc025cb89c34cbab` · propuesta: `4ab990c3a54399f3f773cb85f2544bb32ab772a95efcc8b16e94497a76190e2e`

## MAN-GSI-P19-026

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, alternativa correcta precisa y clave A; completar distinciones y sustituir feedback de estrategia de examen.

### Antes

¿Qué diferencia esencial existe entre SIP y RTP?

- A. SIP señaliza/controla sesiones; RTP transporta medios en tiempo real. **(correcta)**
- B. Ambos son codecs.
- C. RTP registra usuarios y SIP lleva audio.
- D. SIP es un protocolo de almacenamiento.

Explicación: Es una de las distinciones más rentables del tema.

### Propuesta

¿Qué diferencia esencial existe entre SIP y RTP?

- A. SIP señaliza/controla sesiones; RTP transporta medios en tiempo real. **(correcta)**
- B. SIP describe codecs; RTP registra los contactos actuales de usuarios.
- C. SIP y RTP transportan muestras y se distinguen por el puerto usado.
- D. SIP transporta muestras; RTP establece y termina la sesión multimedia.

Explicación: SIP controla el ciclo de una sesión, mientras RTP transporta datos de medios con información como secuencia y tiempo. SDP describe parámetros que pueden intercambiarse en la señalización y RTCP ofrece feedback de recepción. Son papeles complementarios: usar RTP no garantiza entrega, calidad de servicio o cifrado por sí mismo.

- Error B: El formato SDP describe codecs, y el registro de contactos usa mecanismos de señalización; no es la función de RTP.
- Error C: La diferencia es funcional y de formato, no una mera selección de puerto entre dos protocolos que hagan lo mismo.
- Error D: Invierte los papeles: SIP controla la sesión y RTP lleva los medios, no el establecimiento o cierre de la llamada.

- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04
- [IETF: RFC8866, Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866.html) · §1 descripción sin protocolo de transporte; §3.1 SIP y offer/answer; §2 Media Description · versión: Enero de 2021, HTML comprobado el 04-11-2026. Sustituye RFC4566. Describir parámetros no es transportar audio ni negociar de forma autónoma sin procedimientos de oferta/respuesta. · comprobado: 2026-11-04

Partida: `97f33f1e18d6d00778907eafd0797d2890e0cb4666c49550aa4b9d8575740a9f` · propuesta: `ab2456d10050ff6107174676210471960a7abed032d78e76f7288e19dbe37ca6`
