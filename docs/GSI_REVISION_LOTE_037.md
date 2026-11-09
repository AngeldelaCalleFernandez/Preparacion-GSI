# GSI-EDITORIAL-037 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `b481040a05282da9d8aaa65133dcb63155d805520a9ea8e2079fb5464a2bf32f`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B2-T11-014

Decisión: pending_review · acción: revise.

Motivo: Mantener límites de la certificación y clave D; caso de uso del certificado frente a criterios ENS/RGPD distintos.

### Antes

Una certificación ISO 27001 implica…

- A. Cumplimiento automático de cualquier obligación jurídica
- B. Imposibilidad de incidentes
- C. Exención permanente de auditorías
- D. Que no debe presumirse cumplimiento automático de ENS o RGPD **(correcta)**

Explicación: La certificación de SGSI tiene un alcance; no sustituye otros criterios o obligaciones.

### Propuesta

Un proveedor presenta un certificado ISO/IEC 27001 vigente para acreditar también ENS y RGPD. ¿Qué conclusión es defendible?

- A. La certificación del SGSI equivale a la certificación ENS del sistema.
- B. Las medidas auditadas acreditan también las bases jurídicas de cada tratamiento.
- C. El certificado cubre los sistemas de la organización fuera del alcance declarado.
- D. El alcance certificado no acredita por sí solo el cumplimiento ENS o RGPD. **(correcta)**

Explicación: El certificado ISO/IEC 27001 se refiere al SGSI dentro de su alcance. ENS tiene criterios y procedimientos propios, y la protección de datos añade obligaciones de licitud, derechos y responsabilidad. Puede haber evidencias compartidas sin equivalencia automática de certificaciones.

- Error A: Los criterios y procedimientos de conformidad ENS no se sustituyen por un certificado de SGSI; una auditoría combinada debe evaluar cada marco.
- Error B: La seguridad contribuye a proteger datos, pero no demuestra por sí sola base jurídica, información o atención de derechos de cada tratamiento.
- Error C: La delimitación del certificado importa: no cabe extender su conclusión a sistemas excluidos del alcance.

- [ISO: ISO/IEC 27001:2022](https://www.iso.org/standard/27001) · Título Requirements; What is ISO/IEC 27001; Certification; General information y enmienda · versión: Edición 3, octubre de 2022, con Amd 1:2024 listada; catálogo público, sin afirmar lectura del clausulado de pago · comprobado: 2026-10-28
- [BOE: Real Decreto 311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · Artículos 31 y 38 y anexo III: auditoría y procedimientos propios de conformidad ENS · versión: Texto consolidado consultado, última actualización publicada 06-11-2024; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [CCN-STIC 802: auditorías concurrentes](https://www.ccn-cert.cni.es/es/800-guia-esquema-nacional-de-seguridad/502-ccn-stic-802-auditoria-del-ens/file.html) · 6.2 Tiempos de auditoría, p. 9 impresa: auditorías concurrentes o combinadas; 12 Anexo E, glosario, auditoría combinada, p. 34 · versión: Abril de 2026; coincidencias de evaluación no equivalen a identidad de criterios o certificados · comprobado: 2026-10-28
- [BOE/DOUE: Reglamento (UE) 2016/679](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos 24 y 42.4: responsabilidad del tratamiento y límites de la certificación RGPD; no identifica una certificación ISO con la del artículo 42 · versión: Publicación DOUE L 119 de 04-05-2016 y texto español mostrado por BOE, con correcciones enlazadas; artículos concretos cotejados, sin atribuir acceso al visor EUR-Lex bloqueado · comprobado: 2026-10-28

Partida: `43830134c5ef103f840a187117fb654acfb24f33e2d4e86a5176db7a4f7afa32` · propuesta: `a0510fd7e196ffa7a87d535d08f91d7a9f6f51e76e421d08744e8cd50a36d2a7`

## AI-GSI-B2-T11-017

Decisión: pending_review · acción: revise.

Motivo: Mantener enfoque integral de auditoría de datos y clave A; retirar referencia opaca «del tema» y comparar controles parciales plausibles.

### Antes

¿Qué enfoque centra la auditoría de protección de datos del tema?

- A. Demostrar licitud, derechos, medidas y responsabilidad proactiva **(correcta)**
- B. Solo comprobar que exista un cartel de consentimiento
- C. Suponer que cifrar elimina toda obligación
- D. Excluir contratos de encargados

Explicación: La revisión abarca bases, transparencia, medidas, derechos y relaciones con terceros.

### Propuesta

¿Qué enfoque fundamenta una auditoría del cumplimiento de protección de datos personales?

- A. Verificar licitud, derechos, medidas y evidencias de responsabilidad proactiva. **(correcta)**
- B. Tomar el registro de actividades como acreditación suficiente de cumplimiento.
- C. Sustituir el examen de la base jurídica por comprobar que los datos estén cifrados.
- D. Evaluar los contratos de encargados sin revisar las obligaciones del responsable.

Explicación: La auditoría debe contrastar el tratamiento con sus obligaciones: principios y base jurídica, información, derechos, medidas, relaciones con encargados y capacidad de demostrar cumplimiento. El alcance se adapta al caso; cifrado, inventarios o contratos aislados no agotan la revisión.

- Error B: El registro ayuda a conocer tratamientos, pero no prueba que cada uno sea lícito o atienda correctamente los derechos.
- Error C: Cifrar es una medida de seguridad, no una base jurídica ni una sustitución de transparencia y derechos.
- Error D: Las garantías del encargado son relevantes, pero el responsable conserva sus obligaciones y debe poder demostrar su cumplimiento.

- [BOE/DOUE: Reglamento (UE) 2016/679](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos 5.1 y 5.2, 6, 12–22, 24, 28 y 32: principios, licitud, derechos, responsabilidad, encargados y seguridad · versión: Publicación DOUE L 119 de 04-05-2016 y texto español mostrado por BOE, con correcciones enlazadas; artículos concretos cotejados, sin atribuir acceso al visor EUR-Lex bloqueado · comprobado: 2026-10-28

Partida: `04263ad44a5d3c3f64f40ee2e697ccfee045ccd38271befa6f5ae7db6bd14c58` · propuesta: `fdaba76ab0461a7a9a8e31be6b46e96860458feaf5791649884c348b68d01a81`

## AI-GSI-B2-T11-019

Decisión: pending_review · acción: revise.

Motivo: Mantener estructura y solidez del hallazgo, clave B; matizar causas comprobadas frente a hipótesis y evitar requisito universal de causa conocida.

### Antes

¿Qué hace sólido un hallazgo?

- A. Usar un calificativo alarmante sin prueba
- B. Relacionar criterio, condición observada, causa e impacto **(correcta)**
- C. Confundir opinión y evidencia
- D. Omitir el criterio para evitar discusión

Explicación: El hallazgo debe conectar lo observado con el requisito y sus consecuencias.

### Propuesta

¿Qué enfoque fundamenta mejor un hallazgo de auditoría y su explicación?

- A. Proponer la solución preferida y usarla como prueba de la deficiencia.
- B. Relacionar criterio y condición con evidencia, causas y efectos sustentados. **(correcta)**
- C. Asignar gravedad según el número de capturas adjuntas al informe.
- D. Usar una explicación no contrastada del responsable como prueba de la causa.

Explicación: Un hallazgo sólido conecta el criterio aplicable con la condición observada y su evidencia. Se investigan causas cuando sea posible y se sustentan efectos y relevancia. Una causa no demostrada debe quedar como hipótesis o pendiente, sin inventarla para completar el esquema.

- Error A: Recomendar una solución no demuestra la desviación: antes hay que establecer criterio, condición y evidencia.
- Error C: La cantidad de capturas no determina por sí sola fiabilidad, gravedad o consecuencias del hallazgo.
- Error D: La explicación del responsable es una entrada a contrastar; no se convierte automáticamente en una causa acreditada.

- [IIA: correspondencia de estándares 2017 y 2024](https://www.theiia.org/globalassets/site/standards/editable-versions/two-way-mapping-2017-ippf-mandatory-elements-to-2024-global-internal-audit-standards-and-back.pdf) · Columna Standards (2024), 14.2 Analyses and Potential Engagement Findings y 14.3 Evaluation of Findings; 14.3, p. 161 impresa · versión: Documento oficial publicado 06-02-2024. Texto de estándares 2024 reproducido por su autor; no se atribuye obligatoriedad universal a toda auditoría · comprobado: 2026-10-28

Partida: `e34a9cbad066157247303a32765072bdb5c38032e28a11817582d2002d2fdb60` · propuesta: `139a6ef89ddf908cd6eadb8f0f139452e01a53383629fc6a898103173ca3a6f4`

## AI-GSI-B2-T11-016

Decisión: pending_review · acción: revise.

Motivo: Mantener identificación de la guía 802 y clave B; cuatro guías reales próximas, edición comprobada directamente y sin depender de «los apuntes».

### Antes

¿Qué guía se asocia a auditoría ENS en los apuntes?

- A. RFC1918
- B. CCN-STIC 802 **(correcta)**
- C. WSDL
- D. ANSI/SPARC

Explicación: La guía 802 se dedica a auditoría ENS; los otros identificadores corresponden a materias distintas.

### Propuesta

¿Qué guía CCN-STIC desarrolla las auditorías de cumplimiento del ENS?

- A. CCN-STIC 801.
- B. CCN-STIC 802. **(correcta)**
- C. CCN-STIC 803.
- D. CCN-STIC 805.

Explicación: La CCN-STIC 802 está dedicada a las auditorías de cumplimiento del ENS. La edición leída es abril de 2026 y desarrolla objeto, fases y evidencias de auditoría. Las otras guías tratan funciones relacionadas, pero distintas.

- Error A: La 801 aborda responsabilidades y funciones en el ENS; no es la guía dedicada al proceso de auditoría de cumplimiento.
- Error C: La 803 trata valoración de sistemas en el ENS, materia diferente del proceso auditor.
- Error D: La 805 trata política de seguridad de la información; no es la guía de auditorías de cumplimiento.

- [CCN-STIC 802: ENS. Guía de auditorías de cumplimiento](https://www.ccn-cert.cni.es/es/800-guia-esquema-nacional-de-seguridad/502-ccn-stic-802-auditoria-del-ens/file.html) · Portada y edición; 1 Introducción, p. 1; 2 Objeto de las auditorías de cumplimiento, pp. 2–4; 6 Metodología y desarrollo, 6.3 Fases relevantes, p. 10 · versión: Abril de 2026, 41 páginas PDF; edición comprobada por lectura directa, distinta de junio de 2025 aún indexada por el buscador · comprobado: 2026-10-28
- [CCN: Actualización de cinco guías de la serie 800](https://www.ccn.cni.es/es/actualidad-ccn/1282-actualizacion-de-cinco-guias-ccn-stic-de-la-serie-800-conforme-al-real-decreto-311-2022-y-a-los-nuevos-retos-de-la-ciberseguridad) · Relación de funciones de 801, 802, 803, 805 y 808 · versión: Noticia de 17-06-2025; solo distingue materias. La edición de 802 se verifica separadamente en el PDF de abril de 2026 · comprobado: 2026-10-28

Partida: `cd2a0ebda2a95439c65023b277b0437c62cba4a892074358d9c4378d5d395cf1` · propuesta: `c3c1c861123387d30408ac7ee231a9e121dbea173fa5c8efc7c143742663f1d3`

## AI-GSI-B2-T11-020

Decisión: pending_review · acción: revise.

Motivo: Mantener clasificación proporcional al riesgo y clave B; distinguir gravedad, documentación y facilidad de ejecución.

### Antes

¿Cómo debe asignarse criticidad a los hallazgos?

- A. Por dramatismo del título
- B. Con criterios definidos de riesgo e impacto **(correcta)**
- C. Por la preferencia estética del auditor
- D. Por orden de llegada de correos

Explicación: La clasificación debe ser consistente y proporcional al riesgo, no a la forma de presentación.

### Propuesta

¿Cómo debe asignarse criticidad a los hallazgos de una auditoría?

- A. Dar mayor gravedad al hallazgo que adjunte más evidencias gráficas.
- B. Aplicar criterios definidos sobre probabilidad e impacto del riesgo. **(correcta)**
- C. Usar el coste de la medida como indicador único de la criticidad.
- D. Asignar mayor criticidad al hallazgo que pueda cerrarse más pronto.

Explicación: La criticidad debe apoyarse en una metodología consistente y en la relevancia del riesgo, considerando probabilidad e impacto. El esfuerzo y plazo de corrección pueden influir en el plan de trabajo, pero no son por sí solos la gravedad del hallazgo.

- Error A: Más imágenes no equivalen a mayor riesgo. Deben evaluarse la evidencia y las consecuencias conforme a criterios.
- Error C: El coste de corregir no mide por sí solo el daño o la probabilidad del riesgo.
- Error D: La facilidad de cierre ayuda a organizar acciones, pero no determina la criticidad del problema.

- [IIA: evaluación de hallazgos](https://www.theiia.org/globalassets/site/standards/editable-versions/two-way-mapping-2017-ippf-mandatory-elements-to-2024-global-internal-audit-standards-and-back.pdf) · Standards (2024), 14.3: significación, probabilidad, impacto y priorización por metodología establecida, p. 161 impresa · versión: Correspondencia oficial publicada 06-02-2024; gravedad del hallazgo distinta del coste o facilidad de corregirlo · comprobado: 2026-10-28

Partida: `54619af45b78760a15d137e33f2a1f26469eea11183ff3bc4fc2b86dea38e281` · propuesta: `7ac8bb89ed3e663cd548f395bcd42053bec944083282a575039437d7f870564a`

## AI-GSI-B2-T12-001

Decisión: pending_review · acción: revise.

Motivo: Mantener distinción contact/call center y clave B; comparar alcance de canales con despliegue y telefonía.

### Antes

¿Qué distingue principalmente un contact center de un call center?

- A. Se limita necesariamente a voz
- B. Integra varios canales de interacción **(correcta)**
- C. No necesita enrutamiento
- D. Prescinde de historial

Explicación: El contact center incorpora voz y otros canales con contexto y gestión común.

### Propuesta

¿Qué distingue principalmente un contact center de un call center?

- A. Centraliza las llamadas de voz en una única ubicación física.
- B. Gestiona interacciones de voz y de otros canales de atención. **(correcta)**
- C. Transporta las llamadas de voz sobre IP en vez de red analógica.
- D. Mantiene una centralita con extensiones para cada departamento.

Explicación: El centro de contacto incorpora canales como voz, chat o correo a la gestión de atención. La distinción no depende de ubicación física, telefonía IP o tener extensiones. Añadir canales tampoco garantiza por sí solo continuidad omnicanal.

- Error A: La centralización física puede darse en distintas organizaciones; no define la ampliación de canales.
- Error C: La voz IP es una tecnología de telefonía que puede usarse en ambos modelos.
- Error D: Una centralita organiza extensiones y llamadas, pero no define la atención por distintos canales.

- [Cisco: What is a contact center?](https://www.cisco.com/site/us/en/learn/topics/collaboration/what-is-a-contact-center.html) · Call center v. contact center; Interactive voice response; Automatic call distributor; Workforce management · versión: Página del fabricante consultada; funciones generales, sin exigir despliegue cloud, IA o una marca concreta · comprobado: 2026-10-28
- [Genesys: Omnichannel customer experience](https://www.genesys.com/definitions/what-is-omnichannel-customer-experience) · Definición y Delivering consistent engagement across channels: continuidad de contexto al cambiar de canal · versión: Definición pública del fabricante consultada; no convierte cualquier presencia multicanal en integración omnicanal · comprobado: 2026-10-28

Partida: `794caedfe941078bd5cb64ea9e34c0a20278cce309624f411689bd815b53af39` · propuesta: `2eb3850ad37a6e68718a1395e22574492c2c0fc640031def42b9614efd1bc90d`

## AI-GSI-B2-T12-002

Decisión: pending_review · acción: revise.

Motivo: Conservar el microcaso existente y clave B; alternativas próximas de canales y automatización sin exigir plataforma concreta.

### Antes

Un usuario pasa de chat a teléfono conservando caso e historial. ¿Qué enfoque ilustra?

- A. Telefonía analógica exclusivamente
- B. Omnicanal **(correcta)**
- C. Almacenamiento sin relación entre canales
- D. Multicanal en silos

Explicación: La omnicanalidad busca continuidad de contexto e identidad entre canales.

### Propuesta

Un usuario pasa de chat a teléfono conservando caso e historial. ¿Qué enfoque ilustra?

- A. Atención unicanal centrada en las llamadas telefónicas.
- B. Atención omnicanal con continuidad de contexto y caso. **(correcta)**
- C. Atención multicanal con historiales separados por canal.
- D. Atención automática que prescinde de la intervención humana.

Explicación: Conservar caso e historial al pasar de chat a teléfono ilustra continuidad omnicanal. Tener varios canales es necesario para ese recorrido, pero no basta si se mantienen aislados. Tampoco se deduce que toda la atención esté automatizada.

- Error A: El caso utiliza chat y teléfono, por lo que no se limita a un único canal telefónico.
- Error C: Los historiales separados obligarían a reconstruir el contexto; aquí el caso y su historial se conservan.
- Error D: El enunciado no afirma que la atención prescinda de agentes; automatización y continuidad entre canales son dimensiones distintas.

- [Genesys: Omnichannel customer experience](https://www.genesys.com/definitions/what-is-omnichannel-customer-experience) · Definición y Delivering consistent engagement across channels: continuidad de contexto al cambiar de canal · versión: Definición pública del fabricante consultada; no convierte cualquier presencia multicanal en integración omnicanal · comprobado: 2026-10-28

Partida: `eec435f4011be62f9440a980a9a968d637a763d4d2f8d3fe258cd300fdb876d2` · propuesta: `4dade6b37bd76eaa720dbfeffb00c7a01991a6974234b70856e472be432703fc`

## AI-GSI-B2-T12-003

Decisión: pending_review · acción: revise.

Motivo: Mantener función ACD y clave C; cuatro componentes reales, siglas comparables y función principal explícita.

### Antes

¿Qué componente distribuye llamadas a colas y agentes?

- A. CTI como distribuidor exclusivo
- B. CRM como protocolo de señalización
- C. ACD **(correcta)**
- D. TTS

Explicación: ACD enruta llamadas; CTI integra telefonía y aplicaciones.

### Propuesta

¿Qué componente asume la distribución automática de llamadas hacia colas y agentes según reglas y disponibilidad?

- A. CTI.
- B. CRM.
- C. ACD. **(correcta)**
- D. IVR.

Explicación: El distribuidor automático de llamadas, ACD, asigna contactos a colas o agentes conforme a reglas y disponibilidad. CTI integra telefonía y aplicaciones; CRM gestiona información y relaciones; IVR obtiene entradas y guía diálogos. Pueden colaborar sin ser intercambiables.

- Error A: CTI es integración entre telefonía y aplicaciones, como presentar contexto o controlar llamadas desde una aplicación.
- Error B: CRM organiza información e interacciones de clientes; no es por definición el distribuidor automático.
- Error D: El IVR puede recoger la opción que alimenta el enrutamiento, pero su función de diálogo no equivale al ACD.

- [Cisco: What is a contact center?](https://www.cisco.com/site/us/en/learn/topics/collaboration/what-is-a-contact-center.html) · Call center v. contact center; Interactive voice response; Automatic call distributor; Workforce management · versión: Página del fabricante consultada; funciones generales, sin exigir despliegue cloud, IA o una marca concreta · comprobado: 2026-10-28
- [Cisco: Transitioning from Unified CCX to Webex CC](https://www.cisco.com/c/dam/en/us/td/docs/solutions/PA/mcp/DEPLOYMENT_CONTACT_CENTER_UnifiedCCX_to_WebexCC.pdf) · 6 Integrate with CRMs using CRM connectors, p. 68 impresa; integración CTI, screen-pop por ANI o variables de llamada · versión: Deployment Guide de 21-09-2021; ejemplo documental para distinguir funciones, sin atribuir a esa versión soporte actual de una instalación · comprobado: 2026-10-28
- [W3C: VoiceXML 2.0](https://www.w3.org/TR/voicexml20/) · Abstract; 1.1 Introduction; 1.2.3 Scope of VoiceXML; 1.3 Concepts; 3 User Input; 4.1 Prompt; 5.2 Event Handling · versión: W3C Recommendation de 16-03-2004, versión concreta para concepto y vocabulario; no se afirma que sea la versión más reciente · comprobado: 2026-10-28

Partida: `ca0c32d99580af435d0cac809cf337cde8f2f6d988105f5f49dd9015dcc41680` · propuesta: `a3bdc1a24f3f49ea6b98467ca583c32077de39596d8f77df1ca8d83a39e210d7`

## AI-GSI-B2-T12-004

Decisión: pending_review · acción: revise.

Motivo: Mantener papel del SBC y clave C; distractores del mismo entorno y matiz de funciones según despliegue.

### Antes

¿Qué función corresponde al SBC?

- A. Convertir texto a voz exclusivamente
- B. Definir tablas relacionales
- C. Controlar y proteger el borde de sesiones VoIP **(correcta)**
- D. Calcular el tiempo medio de atención

Explicación: El Session Border Controller actúa en el borde de las sesiones de voz IP.

### Propuesta

¿Qué función corresponde al SBC?

- A. Distribuir las llamadas entre colas y agentes disponibles.
- B. Gestionar los registros de clientes y sus casos abiertos.
- C. Controlar y proteger sesiones VoIP en el borde de la red. **(correcta)**
- D. Prever la carga y planificar los turnos de los agentes.

Explicación: El SBC actúa en límites de red para controlar sesiones VoIP, con funciones como control de acceso o tratamiento de señalización y medios según el despliegue. Sus capacidades y configuración varían; no reemplaza la seguridad del conjunto del servicio.

- Error A: Describe la función de distribución del ACD, aunque otros componentes le proporcionen información.
- Error B: Describe gestión de información y casos, propia del CRM.
- Error D: Describe planificación de personal frente a demanda, función de WFM.

- [RFC Editor: RFC 5853, SBC Deployments](https://www.rfc-editor.org/rfc/rfc5853) · 2 Background on SBCs; 3 Functions of SBCs, 3.1 Topology Hiding, 3.2 Media Traffic Management y 3.5 Access Control · versión: Informational, abril de 2010; funciones y compromisos arquitectónicos, no garantiza que todo SBC implemente todas las funciones · comprobado: 2026-10-28
- [Cisco: What is a contact center?](https://www.cisco.com/site/us/en/learn/topics/collaboration/what-is-a-contact-center.html) · Call center v. contact center; Interactive voice response; Automatic call distributor; Workforce management · versión: Página del fabricante consultada; funciones generales, sin exigir despliegue cloud, IA o una marca concreta · comprobado: 2026-10-28
- [Amazon Connect/Connect Customer: Forecasting](https://docs.aws.amazon.com/connect/latest/adminguide/forecasting.html) · Forecasting: previsión de volumen y tiempo de atención como entrada de programación y capacidad · versión: Documentación pública consultada; concepto de WFM, sin usar límites de un producto como regla universal · comprobado: 2026-10-28

Partida: `9e7049d1342efd9b2ed5e84304891bbd72c6e955b755385a1d3d05ea9f0135f9` · propuesta: `52ec0c057d7a2141532e633dcd14cf531943a5b056c62922757e89c9cb3dffe9`

## AI-GSI-B2-T12-005

Decisión: pending_review · acción: revise.

Motivo: Mantener identificación de señalización SIP y clave C; comparar protocolos cercanos de medios, control y descripción.

### Antes

¿Qué protocolo se asocia a señalización VoIP?

- A. SQL
- B. FTP exclusivamente
- C. SIP **(correcta)**
- D. SNMP como señalización de llamada

Explicación: SIP señaliza sesiones; los otros protocolos cumplen funciones diferentes.

### Propuesta

¿Qué protocolo de señalización permite establecer, modificar y terminar sesiones de comunicación IP?

- A. RTP.
- B. RTCP.
- C. SIP. **(correcta)**
- D. SDP.

Explicación: SIP sirve para establecer, modificar y terminar sesiones. El audio suele circular por protocolos de medios como RTP; RTCP aporta control relacionado con RTP. SDP describe características de la sesión y puede viajar en mensajes SIP, sin sustituir su señalización.

- Error A: RTP transporta datos de medios en tiempo real; no es el protocolo de señalización descrito.
- Error B: RTCP intercambia información de control y calidad de la sesión RTP, no el diálogo de establecimiento SIP.
- Error D: SDP describe parámetros de sesión; necesita mecanismos que transporten y negocien esa descripción.

- [RFC Editor: RFC 3261, SIP](https://www.rfc-editor.org/rfc/rfc3261) · 1 Introduction; 2 Overview of SIP Functionality: creación, modificación y terminación de sesiones · versión: Junio de 2002; especificación base con actualizaciones indicadas por el catálogo. No describe por sí sola transporte de audio · comprobado: 2026-10-28
- [RFC Editor: RFC 3550, RTP/RTCP](https://www.rfc-editor.org/rfc/rfc3550) · Abstract; 2 RTP Use Scenarios; 5 RTP Data Transfer Protocol; 6 RTP Control Protocol · versión: RFC 3550, especificación base de RTP/RTCP, con actualizaciones; distinción de transporte y control respecto a señalización de sesión · comprobado: 2026-10-28
- [RFC Editor: RFC 8866, SDP](https://www.rfc-editor.org/rfc/rfc8866) · Abstract; 3 Glossary of Terms; 4 SDP Usage; 5 SDP Specification · versión: RFC 8866, sustituye RFC 4566; descripción de sesiones, no protocolo para establecerlas por sí mismo · comprobado: 2026-10-28

Partida: `60cfd122096cef02d14bcbf7132a4edc0b743561ecf8e0b5dc1415dfe2afd61a` · propuesta: `cd8d508989dd7ab83ddb2bb81f09bd9fe2ab12debad34bbaefafb9332ca1b04d`

## AI-GSI-B2-T12-006

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas de WFM, clave C: los distractores ya son próximos y comparables; completar explicación individual.

### Antes

¿Qué función cumple WFM en un centro de contacto?

- A. Guiar al usuario por menús de voz como función de IVR
- B. Distribuir llamadas entrantes a colas según reglas de ACD
- C. Predecir carga y planificar agentes **(correcta)**
- D. Integrar telefonía y CRM como función principal de CTI

Explicación: Workforce Management apoya planificación de personal frente a carga prevista.

### Propuesta

¿Qué función cumple WFM en un centro de contacto?

- A. Guiar al usuario por menús de voz como función de IVR
- B. Distribuir llamadas entrantes a colas según reglas de ACD
- C. Predecir carga y planificar agentes **(correcta)**
- D. Integrar telefonía y CRM como función principal de CTI

Explicación: WFM utiliza previsiones de volumen y duración de contactos para planificar capacidad, dotación y turnos. Sus resultados necesitan datos y seguimiento; no garantizan que toda llamada se atienda sin espera. El IVR, ACD y CTI cumplen las funciones distintas que describen las otras alternativas.

- Error A: Guiar mediante menús es función de IVR; no es previsión y planificación de personal.
- Error B: Asignar llamadas de la cola según reglas es distribución ACD, distinta de dimensionar y programar agentes.
- Error D: CTI integra telefonía con aplicaciones, incluido CRM; no sustituye la previsión de demanda y turnos.

- [Amazon Connect/Connect Customer: Forecasting](https://docs.aws.amazon.com/connect/latest/adminguide/forecasting.html) · Forecasting: previsión de volumen y tiempo de atención como entrada de programación y capacidad · versión: Documentación pública consultada; concepto de WFM, sin usar límites de un producto como regla universal · comprobado: 2026-10-28
- [Cisco: What is a contact center?](https://www.cisco.com/site/us/en/learn/topics/collaboration/what-is-a-contact-center.html) · Call center v. contact center; Interactive voice response; Automatic call distributor; Workforce management · versión: Página del fabricante consultada; funciones generales, sin exigir despliegue cloud, IA o una marca concreta · comprobado: 2026-10-28
- [Cisco: Transitioning from Unified CCX to Webex CC](https://www.cisco.com/c/dam/en/us/td/docs/solutions/PA/mcp/DEPLOYMENT_CONTACT_CENTER_UnifiedCCX_to_WebexCC.pdf) · 6 Integrate with CRMs using CRM connectors, p. 68 impresa; integración CTI, screen-pop por ANI o variables de llamada · versión: Deployment Guide de 21-09-2021; ejemplo documental para distinguir funciones, sin atribuir a esa versión soporte actual de una instalación · comprobado: 2026-10-28
- [W3C: VoiceXML 2.0](https://www.w3.org/TR/voicexml20/) · Abstract; 1.1 Introduction; 1.2.3 Scope of VoiceXML; 1.3 Concepts; 3 User Input; 4.1 Prompt; 5.2 Event Handling · versión: W3C Recommendation de 16-03-2004, versión concreta para concepto y vocabulario; no se afirma que sea la versión más reciente · comprobado: 2026-10-28

Partida: `fff070119beeb4edf4ebd6919712786125c96c6a0d1134ef67259e26c679ed9d` · propuesta: `9798b2d8773957ec864452cf969fd220cd104fac959e438c824593018f3acb9b`

## AI-GSI-B2-T12-007

Decisión: pending_review · acción: revise.

Motivo: Conservar caso existente de idioma y materia, clave D; comparar estrategias reales de reparto.

### Antes

Una llamada se dirige a un agente que domina su idioma y materia. ¿Qué estrategia es?

- A. Ordenación de tablas
- B. Conmutación de discos
- C. Reparto aleatorio sin atributos
- D. Skills-based routing **(correcta)**

Explicación: El enrutamiento por capacidades utiliza habilidades requeridas, como idioma o especialidad.

### Propuesta

Una llamada se dirige a un agente que domina su idioma y materia. ¿Qué estrategia es?

- A. Reparto circular entre agentes (round-robin).
- B. Asignación por mayor tiempo de inactividad.
- C. Asignación aleatoria sin valorar habilidades.
- D. Enrutamiento por capacidades (skills-based). **(correcta)**

Explicación: El enrutamiento por capacidades usa habilidades pertinentes, como idioma y especialidad, para buscar correspondencia entre necesidad y agentes elegibles. Puede combinar disponibilidad y reglas de cola; no significa elegir atributos sin relación con el contacto.

- Error A: Un reparto circular puro rota entre agentes, sin seleccionar por idioma o materia.
- Error B: El tiempo sin atender mide disponibilidad relativa, pero no acredita que el agente domine las capacidades requeridas.
- Error C: La aleatoriedad sin atributos no explica la selección por idioma y especialidad.

- [Amazon Connect: routing based on agent proficiencies](https://docs.aws.amazon.com/connect/latest/adminguide/proficiency-routing.html) · Overview; Example of how to use agent proficiencies for routing; FAQ sobre colas · versión: Documentación pública consultada; idioma y conocimientos como criterios de correspondencia, conservando reglas de cola y disponibilidad · comprobado: 2026-10-28

Partida: `f6d62d32f86aedd0c2298a72695a570e481297f261089178be42c5a7c9a185ae` · propuesta: `23920cdefb98ce12f0aed8632297816a9a2733919b2f46015160cbca577a9373`

## AI-GSI-B2-T12-008

Decisión: pending_review · acción: revise.

Motivo: Mantener callback y clave C; alternativas de gestión de espera próximas, sin prometer turno o respuesta garantizados.

### Antes

¿Qué mecanismo ayuda a gestionar una cola sin obligar a esperar conectado?

- A. Compresión de audio exclusivamente
- B. Eliminar toda prioridad
- C. Callback **(correcta)**
- D. Desactivar mensajes

Explicación: El callback permite devolución de llamada como parte de la gestión de espera.

### Propuesta

¿Qué mecanismo de gestión de cola permite dejar de esperar conectado y recibir después una llamada del servicio?

- A. Mantener la llamada en espera con mensajes de posición.
- B. Derivar al usuario a un menú de autoservicio durante la espera.
- C. Ofrecer una devolución de llamada cuando pueda atenderse. **(correcta)**
- D. Priorizar la llamada dentro de la cola mientras sigue conectada.

Explicación: El callback permite finalizar la conexión y recibir una devolución de llamada según la política del servicio. Deben definirse número, intentos y condiciones; no garantiza por sí mismo una hora exacta, conservar cualquier prioridad o completar el contacto.

- Error A: Los mensajes pueden informar y reducir incertidumbre, pero la persona continúa conectada.
- Error B: El autoservicio puede resolver una necesidad, pero no describe una devolución posterior por un agente.
- Error D: Cambiar prioridad no elimina la necesidad de permanecer conectado en esa espera.

- [Amazon Connect: Transfer to queue](https://docs.aws.amazon.com/en_en/connect/latest/adminguide/transfer-to-queue.html) · How to configure this block; Transfer to Callback (scheduling callbacks): delay, retries y tiempo entre intentos · versión: Documentación pública consultada; devolución de llamada, sin garantía universal de turno, plazo o éxito del contacto · comprobado: 2026-10-28

Partida: `00654fafca9df8f58c6d240b0752e452b6c66aca1c2db513cb394d601e0b201c` · propuesta: `d3100e8761a6fa8c83064d162114e269a8ff2944277ebaffb0ebd5fc08217e41`

## AI-GSI-B2-T12-010

Decisión: pending_review · acción: revise.

Motivo: Mantener función de screen-pop y clave C; distinguir presentación, autenticación, enrutamiento y planificación.

### Antes

¿Qué hace un screen-pop?

- A. Autentica con alta garantía por sí solo
- B. Cifra automáticamente todas las grabaciones
- C. Muestra contexto al agente al enlazar llamada y aplicación **(correcta)**
- D. Sustituye la necesidad de permisos

Explicación: El contexto facilita atención, pero no acredita identidad ni justifica acceso a datos innecesarios.

### Propuesta

¿Qué hace un screen-pop?

- A. Comparar la voz con una plantilla biométrica del titular.
- B. Asignar una llamada a una cola según prioridad e idioma.
- C. Mostrar al agente datos del caso al recibir la interacción. **(correcta)**
- D. Calcular agentes necesarios según la carga prevista.

Explicación: Un screen-pop presenta información relacionada con la llamada o interacción mediante la integración con aplicaciones. Facilita contexto al agente, pero no autentica al interlocutor ni amplía permisos. Los datos mostrados deben ser pertinentes y accesibles solo para funciones autorizadas.

- Error A: Una comprobación biométrica de identidad es otra función; mostrar una ficha no la realiza por sí mismo.
- Error B: La asignación pertenece al enrutamiento, no a la presentación de contexto en pantalla.
- Error D: La previsión y dotación forman parte de WFM, no del screen-pop.

- [Cisco: Transitioning from Unified CCX to Webex CC](https://www.cisco.com/c/dam/en/us/td/docs/solutions/PA/mcp/DEPLOYMENT_CONTACT_CENTER_UnifiedCCX_to_WebexCC.pdf) · 6 Integrate with CRMs using CRM connectors, p. 68 impresa; integración CTI, screen-pop por ANI o variables de llamada · versión: Deployment Guide de 21-09-2021; ejemplo documental para distinguir funciones, sin atribuir a esa versión soporte actual de una instalación · comprobado: 2026-10-28
- [BOE/DOUE: Reglamento (UE) 2016/679](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos 5.1(c), 5.1(f) y 32: minimización y control de seguridad · versión: Publicación DOUE L 119 de 04-05-2016 y texto español mostrado por BOE, con correcciones enlazadas; artículos concretos cotejados, sin atribuir acceso al visor EUR-Lex bloqueado · comprobado: 2026-10-28
- [FTC: Scammers can fake caller ID info](https://consumer.ftc.gov/consumer-alerts/2016/05/scammers-can-fake-caller-id-info) · Explicación inicial de caller ID spoofing; Don’t rely on caller ID to verify who’s calling · versión: Aviso público de mayo de 2016, cotejado en su URL oficial; riesgo de suplantación, sin extrapolar obligaciones jurídicas estadounidenses · comprobado: 2026-10-28

Partida: `579493e32653dea6e02f1e6f7bf35f5943be4fc97fd96c78ee79c41998174bd4` · propuesta: `554b6634c2663012caa5f9770000f1941140d0d7fa6e295122db3edfe67e9096`

## AI-GSI-B2-T12-012

Decisión: pending_review · acción: revise.

Motivo: Mantener distinción ASR/TTS y clave B; procesos de voz próximos sin llamarlos opuestos ni garantía biométrica.

### Antes

¿Qué diferencia ASR y TTS?

- A. TTS transcribe y ASR lee texto
- B. ASR reconoce voz; TTS sintetiza voz desde texto **(correcta)**
- C. ASR cifra; TTS autentica
- D. Ambos asignan llamadas a agentes

Explicación: Reconocimiento y síntesis son procesos opuestos que pueden integrarse en un IVR.

### Propuesta

¿Qué diferencia ASR y TTS?

- A. ASR genera voz desde texto; TTS reconoce la entrada hablada.
- B. ASR reconoce la entrada hablada; TTS genera voz desde texto. **(correcta)**
- C. ASR comprime audio para transporte; TTS descomprime ese audio.
- D. ASR compara la voz con una identidad; TTS verifica esa identidad.

Explicación: ASR reconoce el habla para obtener una entrada utilizable por la aplicación; TTS sintetiza voz a partir de texto. No son compresión de audio ni identificación biométrica del hablante. Pueden integrarse en un IVR que también admita tonos DTMF.

- Error A: Invierte reconocimiento y síntesis: reconocer corresponde a ASR y generar voz desde texto a TTS.
- Error C: Describe codificación y descodificación de medios, distinta de reconocer habla y sintetizar texto.
- Error D: La biometría de hablante trata identidad; reconocer lo dicho no equivale a verificar quién lo pronuncia, y TTS no hace esa verificación.

- [W3C: VoiceXML 2.0](https://www.w3.org/TR/voicexml20/) · Abstract; 1.1 Introduction; 1.2.3 Scope of VoiceXML; 1.3 Concepts; 3 User Input; 4.1 Prompt; 5.2 Event Handling · versión: W3C Recommendation de 16-03-2004, versión concreta para concepto y vocabulario; no se afirma que sea la versión más reciente · comprobado: 2026-10-28
- [W3C: SSML 1.1](https://www.w3.org/TR/speech-synthesis11/) · Abstract; 1.1 Introduction y elementos para controlar síntesis del habla · versión: W3C Recommendation de 07-09-2010; pronunciación y presentación de voz desde texto, distinta del flujo del diálogo · comprobado: 2026-10-28
- [W3C: Speech Recognition Grammar Specification 1.0](https://www.w3.org/TR/speech-grammar/) · Abstract; 1 Introduction; formatos XML y ABNF de gramáticas de reconocimiento · versión: SRGS 1.0, especificación pública consultada; gramáticas de entrada, no lenguaje completo de diálogos · comprobado: 2026-10-28

Partida: `43112c03d573e6ae375d12de453166619ea90b76766d5237ce522f522de40bcb` · propuesta: `496433e79c8aa30cd12afaca1c0613b6b96e966227b1840ff919719ceb40547f`

## AI-GSI-B2-T12-013

Decisión: pending_review · acción: revise.

Motivo: Mantener buenas prácticas IVR y clave A; microcaso de recuperación de errores donde el contexto aporta valor.

### Antes

¿Qué práctica mejora el diseño de un IVR?

- A. Menús cortos, repetición y salida a agente **(correcta)**
- B. Ausencia de tratamiento de errores
- C. Opciones largas sin repetición
- D. Bucles sin salida

Explicación: El diálogo debe ser comprensible, recuperable y accesible.

### Propuesta

En un IVR, una persona se equivoca y vuelve repetidamente al inicio sin saber cómo continuar. ¿Qué cambio mejora el diseño del diálogo?

- A. Ofrecer menús breves, repetición y una salida clara a un agente. **(correcta)**
- B. Acumular las opciones en una locución antes de admitir entrada.
- C. Enviar cada error al menú inicial sin explicar cómo recuperarse.
- D. Acortar el plazo de respuesta para que la llamada ocupe menos.

Explicación: Un diálogo recuperable permite entender opciones, repetir, corregir errores y pedir ayuda humana. Debe dar tiempo suficiente y evitar bucles frustrantes. La salida a agente y los menús breves ayudan, pero no certifican por sí solos accesibilidad completa.

- Error B: Una locución extensa aumenta la carga de memoria y dificulta llegar a la opción necesaria.
- Error C: Volver al inicio sin orientación no explica cómo corregir el error y puede generar un bucle.
- Error D: Reducir el tiempo por motivos de ocupación puede impedir responder a quien necesite más tiempo.

- [W3C WAI: Let Users Avoid Navigating Voice Menus](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o6p04-voice-menus/) · What to Do; More Details; User settings; Considerations for Speech Recognition; Examples · versión: Orientación suplementaria de accesibilidad cognitiva; no es requisito normativo WCAG ni certificación de accesibilidad completa · comprobado: 2026-10-28
- [W3C: VoiceXML 2.0](https://www.w3.org/TR/voicexml20/) · Abstract; 1.1 Introduction; 1.2.3 Scope of VoiceXML; 1.3 Concepts; 3 User Input; 4.1 Prompt; 5.2 Event Handling · versión: W3C Recommendation de 16-03-2004, versión concreta para concepto y vocabulario; no se afirma que sea la versión más reciente · comprobado: 2026-10-28

Partida: `709a4f3b9c0349350eb769e2722e60d084adff8b64c9b292dc5b7a18c076ccc8` · propuesta: `7b9dfb9eccc71406dd10107e9bc67184bc46c586a6d96dc628f975970c7e8c13`

## AI-GSI-B2-T12-014

Decisión: pending_review · acción: revise.

Motivo: Mantener naturaleza XML de VoiceXML y clave C; comparar vocabularios de voz próximos, sin pedir sintaxis extensa.

### Antes

¿Qué es VoiceXML?

- A. Un protocolo de encaminamiento IP
- B. Una base de datos de clientes
- C. Un lenguaje XML para describir diálogos de voz **(correcta)**
- D. Un algoritmo de cifrado de grabaciones

Explicación: VoiceXML describe prompts, captura y flujo mediante una plataforma o intérprete de voz.

### Propuesta

¿Qué función caracteriza principalmente a VoiceXML frente a otros lenguajes XML del entorno de voz?

- A. Un lenguaje XML que controla pronunciación y prosodia de la síntesis.
- B. Un lenguaje XML que define gramáticas de entrada para reconocimiento.
- C. Un lenguaje XML que describe diálogos de voz, sus entradas y flujo. **(correcta)**
- D. Un lenguaje XML para gestionar conexiones y conferencias telefónicas.

Explicación: VoiceXML describe diálogos con prompts, recogida de entradas, eventos y flujo de interacción en una plataforma de voz. Puede usar reconocimiento, DTMF o síntesis. SSML, SRGS y CCXML cubren funciones relacionadas, pero no sustituyen esa descripción del diálogo.

- Error A: Describe SSML, que orienta cómo sintetizar voz, por ejemplo pronunciación y prosodia.
- Error B: Describe el papel de gramáticas como SRGS para entradas reconocibles, no el conjunto del diálogo.
- Error D: Describe control de llamadas y conexiones, función de CCXML, que puede coordinarse con diálogos VoiceXML.

- [W3C: VoiceXML 2.0](https://www.w3.org/TR/voicexml20/) · Abstract; 1.1 Introduction; 1.2.3 Scope of VoiceXML; 1.3 Concepts; 3 User Input; 4.1 Prompt; 5.2 Event Handling · versión: W3C Recommendation de 16-03-2004, versión concreta para concepto y vocabulario; no se afirma que sea la versión más reciente · comprobado: 2026-10-28
- [W3C: SSML 1.1](https://www.w3.org/TR/speech-synthesis11/) · Abstract; 1.1 Introduction y elementos para controlar síntesis del habla · versión: W3C Recommendation de 07-09-2010; pronunciación y presentación de voz desde texto, distinta del flujo del diálogo · comprobado: 2026-10-28
- [W3C: Speech Recognition Grammar Specification 1.0](https://www.w3.org/TR/speech-grammar/) · Abstract; 1 Introduction; formatos XML y ABNF de gramáticas de reconocimiento · versión: SRGS 1.0, especificación pública consultada; gramáticas de entrada, no lenguaje completo de diálogos · comprobado: 2026-10-28
- [W3C: Voice Browser Call Control, CCXML 1.0](https://www.w3.org/TR/ccxml/) · Abstract; 1 Introduction; relación entre control de llamadas y diálogos VoiceXML · versión: CCXML 1.0, W3C Recommendation de 05-07-2011; control de llamadas y eventos, distinto de descripción del diálogo · comprobado: 2026-10-28

Partida: `1ef4d092d1668d6631ccb85fc4829bd0cbc5557e2786725b2a45ea86786a989b` · propuesta: `f3e7243c797367f54546dcb60e711c5acc354a78c63f71abaf2374928f4dd3b6`

## AI-GSI-B2-T12-015

Decisión: pending_review · acción: revise.

Motivo: Mantener identificación contextual frente a autenticación, clave D; microcaso de número y ficha sin convertir ANI en garantía.

### Antes

Identificar a quien llama por su número equivale a…

- A. Autenticar siempre con máxima garantía
- B. Confirmar automáticamente representación legal
- C. Autorizar cualquier trámite sensible
- D. Obtener contexto que puede requerir autenticación adicional **(correcta)**

Explicación: Contexto e identidad con garantía son distintos; el riesgo puede exigir factores adicionales.

### Propuesta

Una llamada muestra un número asociado a un expediente y abre su ficha al agente. ¿Cómo debe interpretarse ese dato antes de un trámite sensible?

- A. Dar por autenticada a la persona titular del expediente asociado.
- B. Considerar acreditado que puede representar a otra persona.
- C. Autorizar el acceso a datos sensibles por la coincidencia del número.
- D. Usarlo como contexto y comprobar identidad según el riesgo del trámite. **(correcta)**

Explicación: El número mostrado o asociado a una ficha aporta una pista de contexto, no garantía suficiente de identidad de la persona. Puede suplantarse o corresponder a una línea compartida. La comprobación debe ser adecuada al trámite; identidad, representación y autorización son decisiones distintas.

- Error A: La coincidencia de número no demuestra quién está hablando ni que sea titular del expediente.
- Error B: La representación requiere su propia acreditación; no se deduce del número de una línea.
- Error C: Vincular un número a un registro no concede permiso para revelar sus datos sensibles.

- [FTC: Scammers can fake caller ID info](https://consumer.ftc.gov/consumer-alerts/2016/05/scammers-can-fake-caller-id-info) · Explicación inicial de caller ID spoofing; Don’t rely on caller ID to verify who’s calling · versión: Aviso público de mayo de 2016, cotejado en su URL oficial; riesgo de suplantación, sin extrapolar obligaciones jurídicas estadounidenses · comprobado: 2026-10-28
- [BOE/DOUE: Reglamento (UE) 2016/679](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos 5.1 y 5.2, 6, 12–22, 24, 28 y 32: principios, licitud, derechos, responsabilidad, encargados y seguridad · versión: Publicación DOUE L 119 de 04-05-2016 y texto español mostrado por BOE, con correcciones enlazadas; artículos concretos cotejados, sin atribuir acceso al visor EUR-Lex bloqueado · comprobado: 2026-10-28

Partida: `0079688696082dc0fedcc28ab01dc4cd6bb74fd569ac44058d4ab36aec3a2aaf` · propuesta: `1159a66c4521e7c4fc80d7e6bb3558c03fcc342cada26d0fd1a6705051b58c35`

## AI-GSI-B2-T12-016

Decisión: pending_review · acción: revise.

Motivo: Mantener gobernanza de grabaciones y clave B; añadir información y distinguir bases jurídicas sin imponer consentimiento universal.

### Antes

¿Qué debe definirse antes de conservar grabaciones?

- A. Acceso universal de todos los agentes
- B. Finalidad, base, acceso, retención y seguridad **(correcta)**
- C. Solo el formato de audio
- D. Conservación ilimitada por defecto

Explicación: La grabación requiere controles y finalidad; no basta con capacidad técnica de almacenar.

### Propuesta

¿Qué debe definirse antes de grabar y conservar llamadas con datos personales?

- A. Conservarlas mientras haya espacio y permitir búsquedas por cualquier agente.
- B. Definir finalidad, base jurídica, información, acceso, retención y seguridad. **(correcta)**
- C. Fijar retención por uso comercial sin analizar finalidad ni derechos.
- D. Autorizar exportaciones por comodidad operativa sin limitar el acceso.

Explicación: Antes de grabar y conservar datos personales deben definirse finalidad y base jurídica, información, acceso, plazo o criterios de conservación y medidas de seguridad. También se han de atender derechos y responsabilidades. El consentimiento no es la única base posible ni debe suponerse una retención ilimitada.

- Error A: La capacidad de almacenamiento no justifica retención ni acceso indiscriminado a datos personales.
- Error C: Un uso comercial previsto no sustituye analizar licitud, compatibilidad de finalidad, necesidad de conservación y derechos.
- Error D: Las exportaciones siguen siendo tratamiento de datos y necesitan permisos y medidas adecuadas; la comodidad no los reemplaza.

- [BOE/DOUE: Reglamento (UE) 2016/679](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos 5.1(b), (c), (e) y (f), 6, 13, 24 y 32: finalidad, minimización, conservación, información y seguridad · versión: Publicación DOUE L 119 de 04-05-2016 y texto español mostrado por BOE, con correcciones enlazadas; artículos concretos cotejados, sin atribuir acceso al visor EUR-Lex bloqueado · comprobado: 2026-10-28

Partida: `8afdc08cf0f9506e587614d5238a6479896d682a12be835d32e65526a7cc68d2` · propuesta: `87ce7633cb5adcc4cb3f7a9db58078f758686a46ba8c46a4729e05f0e5d0c998`

## AI-GSI-B2-T12-017

Decisión: pending_review · acción: revise.

Motivo: Mantener accesibilidad mediante alternativas y adaptación, clave A; caso con barreras explícitas y sin afirmar conformidad legal por una medida aislada.

### Antes

¿Qué mejora la accesibilidad del servicio?

- A. Canales alternativos y diseño adaptado a distintas necesidades **(correcta)**
- B. Obligar a todas las personas a usar voz
- C. Considerar que añadir cualquier web corrige todo IVR
- D. Reducir todos los tiempos de respuesta al mínimo absoluto

Explicación: La accesibilidad exige alternativas y condiciones de uso, no solo multiplicar canales nominalmente.

### Propuesta

Un servicio depende de voz automática y plazos breves; algunas personas no oyen la locución o necesitan más tiempo. ¿Qué mejora debe priorizarse?

- A. Ofrecer alternativas accesibles y adaptar interacción y tiempos a necesidades. **(correcta)**
- B. Mantener una única vía de voz para dar idéntico proceso a todas las personas.
- C. Dar por accesible el servicio al añadir una web sin evaluar su uso real.
- D. Acortar los tiempos de respuesta para que toda interacción termine antes.

Explicación: Un servicio debe considerar personas que no oyen, no hablan o necesitan más tiempo y apoyos. Alternativas utilizables y ajustes del diálogo y tiempos mejoran el acceso. La mera existencia de una web o de varios canales no prueba que permitan completar la misma necesidad.

- Error B: Dar la misma interacción a todos puede excluir a quien no puede usar voz o requiere apoyos.
- Error C: Un canal adicional también puede tener barreras; debe evaluarse si las personas pueden utilizarlo para la finalidad del servicio.
- Error D: Plazos más breves pueden excluir a quien procesa o introduce información con más lentitud.

- [W3C WAI: Let Users Avoid Navigating Voice Menus](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o6p04-voice-menus/) · What to Do; More Details; User settings; Considerations for Speech Recognition; Examples · versión: Orientación suplementaria de accesibilidad cognitiva; no es requisito normativo WCAG ni certificación de accesibilidad completa · comprobado: 2026-10-28
- [Cisco: What is a contact center?](https://www.cisco.com/site/us/en/learn/topics/collaboration/what-is-a-contact-center.html) · Call center v. contact center; Interactive voice response; Automatic call distributor; Workforce management · versión: Página del fabricante consultada; funciones generales, sin exigir despliegue cloud, IA o una marca concreta · comprobado: 2026-10-28

Partida: `4edea01c519cfabfe1de1348b8fc247bc66f898881c70cad64d12352d87ab981` · propuesta: `b574762203a60b9f35e11a61bebdae321aa35ff7bd16b7f563cfa453bd09b5eb`
