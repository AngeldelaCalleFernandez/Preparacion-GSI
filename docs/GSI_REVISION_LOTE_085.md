# GSI-EDITORIAL-085 — revisión propuesta

Preparado: 2026-11-04. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `39289ed0bf82f4e575973ecdec4af06c0c7a2a945efdbcafc23df6c1aa883150`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P19-079

Decisión: pending_review · acción: revise.

Motivo: Conservar monitorización de acceso/IP/servicio y clave C; microcaso distingue señal visible de transacción real y limita telemetría.

### Antes

¿Qué debería monitorizarse en un enlace móvil empresarial crítico?

- A. Potencia y calidad de señal radio, sin relacionarlas con disponibilidad del servicio, movilidad ni rendimiento extremo a extremo.
- B. Latencia, pérdida y throughput de red, sin observar consumo, cambios de celda u operador ni estado del túnel corporativo.
- C. Señal/calidad radio, disponibilidad, latencia, pérdida, throughput, consumo, cambios de celda/operador y estado del túnel/servicio. **(correcta)**
- D. Disponibilidad de la aplicación empresarial, sin métricas del acceso radio, transporte o conectividad del dispositivo.

Explicación: La operación necesita telemetría de acceso, IP y servicio, no una única métrica visual.

### Propuesta

Un enlace móvil mantiene buena señal, pero las transacciones corporativas fallan de forma intermitente. ¿Qué enfoque de monitorización permite estudiar el servicio crítico?

- A. Seguir radio, consumo y cambios de celda como prueba de disponibilidad de la aplicación.
- B. Usar medidas IP sin relacionarlas con radio, túnel y transacciones del servicio.
- C. Correlacionar radio, conectividad y servicio: disponibilidad, retardo, pérdida, caudal y consumo. **(correcta)**
- D. Usar el estado del túnel como sustituto de las medidas del acceso y de la aplicación.

Explicación: La operación de un enlace crítico correlaciona radio y movilidad, conectividad IP y experiencia del servicio. Se observan calidad de señal, disponibilidad, retardo, pérdidas, caudal, consumo y estado del túnel según el uso, además de cambios relevantes de celda u operador. Un indicador aislado no prueba toda la cadena. La telemetría debe tener finalidad, alcance y conservación proporcionados; no exige inspeccionar comunicaciones personales.

- Error A: Los indicadores de radio y movilidad no prueban que la aplicación o el túnel corporativo responda correctamente de extremo a extremo.
- Error B: Las métricas IP ayudan, pero sin relacionarlas con acceso y servicio se pierde información para localizar el tramo que está fallando.
- Error D: Un túnel establecido no garantiza caudal útil, baja pérdida o respuesta correcta de la aplicación; hay que contrastar la experiencia real.

- [Google SRE: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) · Definitions; Black-box versus white-box; The Four Golden Signals: latencia,tráfico,errores,saturación y experiencia de servicio · versión: Capítulo6 del libroSRE, HTML comprobado el04-11-2026. Principios de monitorización, no lista normativa de contadores celulares o prueba de disponibilidad de una sede. Se complementa con arquitectura/rendimientoLTE y privacidad de telemetría. · comprobado: 2026-11-04
- [AT&amp;T Developer: Long Term Evolution, LTE Architecture](https://developer.att.com/technical-library/network-technologies/long-term-evolution) · LTE Architecture: E-UTRAN/eNB, EPC, interfaces S1/X2, MME/S-GW/P-GW; LTE Performance: caudal real depende de usuarios, radio y backhaul · versión: Página histórica del operador, HTML comprobado el04-11-2026. Solo estructura funcional y dependencia del rendimiento. Se excluyen proyecciones comerciales, cobertura, tasas y situación de mercado anteriores al despliegueLTE. · comprobado: 2026-11-04
- [NCSC CAF B5: Resilient networks and systems](https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems) · Guidance: Capacity; Diversity and dependencies; Physical Resilience: capacidad, dependencias y alternativas útiles · versión: HTML comprobado el04-11-2026. Guía británica aplicada como criterio técnico, sin fuerza normativa AGE o garantía de continuidad por contratar dos operadores. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [BOE/DOUE: Reglamento(UE)2016/679, RGPD](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos5.1a–c/e: transparencia,finalidad,minimización y conservación;13.1: información;25.1–2: diseño y defecto · versión: Texto original DOUE04-05-2016, apartados comprobados el04-11-2026. Principios generales, no dictamen sobre un tratamiento concreto o afirmación de que toda monitorización sea ilícita. No se equipara conformidadMDM con cumplimientoRGPD. · comprobado: 2026-11-04

Partida: `f48ce2c071bbb552891b02f4d92812927ff9ebfd84b87908617960050b34befb` · propuesta: `278271de7747af7edff2ea50612d447a181e78acfad1bb01cc0a9512b348561f`

## MAN-GSI-P19-081

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa bien construida y clave A; matizar límites de control y soporteMDM de escritorio.

### Antes

¿Qué es MDM?

- A. Gestión de dispositivos móviles: enrolment, configuración, inventario, cumplimiento y acciones de seguridad sobre el dispositivo. **(correcta)**
- B. Gestión de aplicaciones móviles y de sus datos corporativos, sin administrar necesariamente todo el dispositivo.
- C. Gestión de identidades y permisos para autenticar usuarios y autorizar su acceso a recursos.
- D. Gestión unificada de móviles, ordenadores y otros endpoints mediante políticas comunes.

Explicación: MDM controla el dispositivo y su configuración de forma centralizada.

### Propuesta

¿Qué es MDM?

- A. Gestión de dispositivos móviles: enrolment, configuración, inventario, cumplimiento y acciones de seguridad sobre el dispositivo. **(correcta)**
- B. Gestión de aplicaciones móviles y de sus datos corporativos, sin administrar necesariamente todo el dispositivo.
- C. Gestión de identidades y permisos para autenticar usuarios y autorizar su acceso a recursos.
- D. Gestión unificada de móviles, ordenadores y otros endpoints mediante políticas comunes.

Explicación: MDM gestiona el dispositivo mediante capacidades como inscripción, configuración, inventario y políticas de seguridad. El alcance depende de plataforma, propiedad y modo de gestión; no implica acceso irrestricto a datos personales. Aunque el nombre mencione movilidad, tecnologías MDM también pueden gestionar ordenadores. MAM se centra en aplicaciones e IAM en identidades; una suite UEM puede integrar estas capacidades con un alcance operativo más amplio.

- Error B: Administrar aplicaciones y sus datos caracteriza MAM; puede complementar al MDM sin que ambos conceptos tengan el mismo alcance.
- Error C: Autenticar identidades y autorizar recursos corresponde a IAM; no sustituye la gestión de configuración e inventario del dispositivo.
- Error D: La administración unificada de distintos tipos de endpoint caracteriza UEM; MDM es una capacidad de gestión que puede formar parte de esa solución.

- [Microsoft Learn: What is Microsoft Intune?](https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune) · What Intune does; How Intune is used: MDM,MAM or both; How Intune works with Microsoft Entra · versión: HTML público comprobado el04-11-2026. Ejemplo primario de gestión dispositivo/aplicaciones e identidad; admite plataformas de escritorio. No se prescribe cloud, producto, licencias o un modo de control idéntico para toda inscripción. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [IBM: What is enterprise mobility management?](https://www.ibm.com/think/topics/enterprise-mobility-management) · Core components: MDM/MAM/MCM/IAM; Enterprise mobility management vs unified endpoint management · versión: HTML del proveedor comprobado el04-11-2026. Clasificación conceptual de capacidades, no fronteras normativas exclusivas; se excluye la afirmación comercial de invisibilidad absoluta de datos personales en cualquier contenedor. · comprobado: 2026-11-04

Partida: `c882e4bccba2f843f112e4685e61123eb73d0d8509c70d7b5f958f9991b3c30c` · propuesta: `aa987f6f54d707c6898354515dc36751f7ceef5312789234baf04e4092b52854`

## MAN-GSI-P19-082

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa y clave D; explicar MAM con y sin inscripciónMDM, sujeto a compatibilidad real.

### Antes

¿Qué es MAM?

- A. Gestión de configuración, seguridad e inventario aplicada al dispositivo móvil como conjunto.
- B. Marco empresarial que integra gestión de dispositivos, aplicaciones, contenido e identidad móvil.
- C. Gestión del acceso, distribución y protección de documentos corporativos en terminales móviles.
- D. Mobile Application Management: gestión y políticas sobre aplicaciones móviles corporativas. **(correcta)**

Explicación: MAM centra el control en aplicaciones y datos asociados, pudiendo complementar MDM.

### Propuesta

¿Qué es MAM?

- A. Gestión de configuración, seguridad e inventario aplicada al dispositivo móvil como conjunto.
- B. Marco empresarial que integra gestión de dispositivos, aplicaciones, contenido e identidad móvil.
- C. Gestión del acceso, distribución y protección de documentos corporativos en terminales móviles.
- D. Mobile Application Management: gestión y políticas sobre aplicaciones móviles corporativas. **(correcta)**

Explicación: MAM administra aplicaciones móviles y protege los datos corporativos que utilizan, por ejemplo mediante distribución, configuración o políticas de uso. Puede combinarse con MDM o aplicarse a apps compatibles en un dispositivo que no esté inscrito en gestión completa. No convierte cualquier app en administrable ni otorga por sí solo control sobre todo el terminal: las capacidades dependen de aplicación, plataforma y solución.

- Error A: Configurar y administrar el dispositivo como conjunto corresponde a MDM; el foco de MAM está en aplicaciones y datos asociados.
- Error B: Integrar dispositivos, aplicaciones, contenido e identidad describe el paraguas EMM, del que MAM puede ser una capacidad.
- Error C: Controlar distribución y acceso a documentos caracteriza el foco MCM; puede relacionarse con apps sin ser la definición de MAM.

- [Microsoft Learn: What is Intune app management?](https://learn.microsoft.com/en-us/intune/app-management/overview) · Mobile Application Management basics: apps/datos, MDM+MAM y MAM en dispositivos no inscritos · versión: HTML público comprobado el04-11-2026. Capacidades y compatibilidad dependen de apps/plataforma; no gestión universal de cualquier app ni acceso a todo el dispositivo por proteger una aplicación. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [IBM: What is enterprise mobility management?](https://www.ibm.com/think/topics/enterprise-mobility-management) · Core components: MDM/MAM/MCM/IAM; Enterprise mobility management vs unified endpoint management · versión: HTML del proveedor comprobado el04-11-2026. Clasificación conceptual de capacidades, no fronteras normativas exclusivas; se excluye la afirmación comercial de invisibilidad absoluta de datos personales en cualquier contenedor. · comprobado: 2026-11-04

Partida: `8e3ee171c2601d0838a64082db7f7ae182dcb471c678ace63f13b60d0ceb5f24` · propuesta: `ce53a5746a9d604ca92fea6608ee0e99e3748da19f4da8bf25cf41037431d139`

## MAN-GSI-P19-083

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa y clave B; precisar foco de contenido con fuente que sí lo desarrolla.

### Antes

¿Qué es MCM en movilidad empresarial?

- A. Mobile Device Management: gestión de configuración, seguridad e inventario del dispositivo móvil.
- B. Mobile Content Management: control/distribución de contenido corporativo en móviles. **(correcta)**
- C. Mobile Application Management: distribución y políticas aplicadas a aplicaciones y sus datos corporativos.
- D. Enterprise Mobility Management: marco que integra dispositivos, aplicaciones, contenido e identidad móvil.

Explicación: MCM se ocupa de contenido, mientras MDM gestiona dispositivo y MAM aplicaciones.

### Propuesta

¿Qué es MCM en movilidad empresarial?

- A. Mobile Device Management: gestión de configuración, seguridad e inventario del dispositivo móvil.
- B. Mobile Content Management: control/distribución de contenido corporativo en móviles. **(correcta)**
- C. Mobile Application Management: distribución y políticas aplicadas a aplicaciones y sus datos corporativos.
- D. Enterprise Mobility Management: marco que integra dispositivos, aplicaciones, contenido e identidad móvil.

Explicación: Mobile Content Management se centra en distribuir y controlar acceso a contenido corporativo desde dispositivos móviles. Puede incluir repositorios, permisos y restricciones de uso de documentos. MDM, MAM y MCM tienen focos diferentes que pueden integrarse o solaparse en una solución EMM; no son compartimentos técnicos necesariamente independientes ni una clasificación normativa única para todos los productos.

- Error A: MDM se centra en administrar el dispositivo y sus ajustes; no desarrolla el acrónimo MCM ni identifica su foco en contenido.
- Error C: MAM trata administración y políticas de aplicaciones, aunque pueda proteger los documentos que estas usan; el foco MCM es el contenido.
- Error D: EMM integra capacidades de movilidad, entre ellas gestión de dispositivo, apps y contenido; no es la expansión del término MCM.

- [IBM: What is enterprise mobility management?](https://www.ibm.com/think/topics/enterprise-mobility-management) · Core components: MDM/MAM/MCM/IAM; Enterprise mobility management vs unified endpoint management · versión: HTML del proveedor comprobado el04-11-2026. Clasificación conceptual de capacidades, no fronteras normativas exclusivas; se excluye la afirmación comercial de invisibilidad absoluta de datos personales en cualquier contenedor. · comprobado: 2026-11-04

Partida: `f679d571e3fa75faf9db6da893e50befe374a5c9f8aa55d53482a209e32d8062` · propuesta: `3b853d17a8d939eadbd2d92e1199b3e3ee68394d2fa7427f16a55aeabba5ec09`

## MAN-GSI-P19-084

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa y clave C; evitar una jerarquía normativa rígida entre etiquetasEMM/UEM.

### Antes

¿Qué es EMM?

- A. Gestión centrada en la configuración, seguridad e inventario del propio dispositivo móvil.
- B. Gestión de políticas y datos aplicada específicamente a las aplicaciones móviles corporativas.
- C. Enterprise Mobility Management, un paraguas que integra capacidades como MDM, MAM y gestión de contenido/identidad móvil. **(correcta)**
- D. Gestión unificada de móviles, ordenadores y otros endpoints corporativos desde una plataforma común.

Explicación: EMM amplía la gestión desde dispositivo hacia aplicaciones, contenido e identidad.

### Propuesta

¿Qué es EMM?

- A. Gestión centrada en la configuración, seguridad e inventario del propio dispositivo móvil.
- B. Gestión de políticas y datos aplicada específicamente a las aplicaciones móviles corporativas.
- C. Enterprise Mobility Management, un paraguas que integra capacidades como MDM, MAM y gestión de contenido/identidad móvil. **(correcta)**
- D. Gestión unificada de móviles, ordenadores y otros endpoints corporativos desde una plataforma común.

Explicación: EMM es una solución de gestión de movilidad empresarial que integra capacidades de dispositivo, aplicaciones y otras funciones de protección, contenido o identidad según producto. MDM y MAM describen capacidades más específicas. UEM suele ampliar la gestión integrada hacia distintos tipos de endpoint; los términos comerciales se solapan y algunas guías usan EMM y UEM de forma cercana, por lo que no se deduce una frontera técnica universal.

- Error A: La configuración e inventario del dispositivo describen MDM, una capacidad más específica dentro de una solución de movilidad integrada.
- Error B: Las políticas de aplicaciones y datos corresponden al foco MAM; no describen por sí solas todo el paraguas EMM.
- Error D: La administración unificada de móviles y equipos tradicionales caracteriza la denominación UEM; la pregunta solicita la expansión y foco de EMM.

- [IBM: What is enterprise mobility management?](https://www.ibm.com/think/topics/enterprise-mobility-management) · Core components: MDM/MAM/MCM/IAM; Enterprise mobility management vs unified endpoint management · versión: HTML del proveedor comprobado el04-11-2026. Clasificación conceptual de capacidades, no fronteras normativas exclusivas; se excluye la afirmación comercial de invisibilidad absoluta de datos personales en cualquier contenedor. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [Canadian Centre for Cyber Security: Security considerations for mobile device deployments](https://www.cyber.gc.ca/en/guidance/security-considerations-mobile-device-deployments-itsap70002) · Mobile device deployment models: COBO,COPE,BYOD; Unified endpoint management · versión: ITSAP70.002, HTML modificado22-10-2024 y comprobado04-11-2026. Solo definiciones propiedad/uso y alcance UEM; no norma española. Se excluyen generalizaciones de riesgo cero en COBO y de ausencia de controles viables en BYOD. · comprobado: 2026-11-04

Partida: `16416c2dfc8a1b945bffd522dfaf19d9b00ce80a9e2e7754111bb24ee270811c` · propuesta: `492a7841912c9912bf0d1f13ab2c0aa73d020e40a358f243bb9cc2eb150f326c`

## MAN-GSI-P19-085

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta B; alternativas próximas con acrónimos y alcance, sin equiparar etiqueta con cobertura universal.

### Antes

¿Qué es UEM?

- A. Gestión del ciclo de vida y las políticas aplicadas a aplicaciones móviles corporativas.
- B. Unified Endpoint Management, gestión unificada de endpoints móviles y tradicionales desde una plataforma/política común. **(correcta)**
- C. Gestión de identidades, autenticación y autorización para acceder a recursos corporativos.
- D. Monitorización de equipos y tráfico de red mediante métricas de disponibilidad y rendimiento.

Explicación: UEM extiende el alcance de EMM para abarcar más tipos de endpoint.

### Propuesta

¿Qué es UEM?

- A. Enterprise Mobility Management: plataforma centrada en integrar dispositivos y aplicaciones móviles.
- B. Unified Endpoint Management, gestión unificada de endpoints móviles y tradicionales desde una plataforma/política común. **(correcta)**
- C. Mobile Application Management: políticas sobre las aplicaciones y sus datos sin gestionar todo el dispositivo.
- D. Mobile Device Management: gestión de configuración, inventario y cumplimiento del dispositivo inscrito.

Explicación: UEM significa Unified Endpoint Management y propone administrar de forma integrada distintos tipos de endpoint, incluidos móviles y equipos tradicionales. La amplitud efectiva depende de la plataforma y de las capacidades soportadas, no de una etiqueta comercial. Puede integrar funciones MDM, MAM y de seguridad o identidad sin que todas se implementen de la misma manera en cada sistema operativo.

- Error A: EMM identifica el foco de gestión de movilidad empresarial; UEM destaca la administración conjunta de tipos de endpoint móviles y tradicionales.
- Error C: MAM administra aplicaciones y sus datos corporativos; esa capacidad no equivale a toda la gestión unificada de endpoints.
- Error D: MDM se centra en gestionar el dispositivo inscrito; puede formar parte de UEM sin agotar su integración de capacidades y plataformas.

- [Canadian Centre for Cyber Security: Security considerations for mobile device deployments](https://www.cyber.gc.ca/en/guidance/security-considerations-mobile-device-deployments-itsap70002) · Mobile device deployment models: COBO,COPE,BYOD; Unified endpoint management · versión: ITSAP70.002, HTML modificado22-10-2024 y comprobado04-11-2026. Solo definiciones propiedad/uso y alcance UEM; no norma española. Se excluyen generalizaciones de riesgo cero en COBO y de ausencia de controles viables en BYOD. · comprobado: 2026-11-04
- [IBM: What is enterprise mobility management?](https://www.ibm.com/think/topics/enterprise-mobility-management) · Core components: MDM/MAM/MCM/IAM; Enterprise mobility management vs unified endpoint management · versión: HTML del proveedor comprobado el04-11-2026. Clasificación conceptual de capacidades, no fronteras normativas exclusivas; se excluye la afirmación comercial de invisibilidad absoluta de datos personales en cualquier contenedor. · comprobado: 2026-11-04
- [Microsoft Learn: What is Microsoft Intune?](https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune) · What Intune does; How Intune is used: MDM,MAM or both; How Intune works with Microsoft Entra · versión: HTML público comprobado el04-11-2026. Ejemplo primario de gestión dispositivo/aplicaciones e identidad; admite plataformas de escritorio. No se prescribe cloud, producto, licencias o un modo de control idéntico para toda inscripción. · comprobado: 2026-11-04

Partida: `e495b473fd056b9acee8e40dca24bb66533b8a0e004ea81e553c43a6191e5c0e` · propuesta: `175680970d52bad3f6256c149cc3e305ab1d15c190c2672e5f4a69e47b4fc560`

## MAN-GSI-P19-086

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación de alcances y clave C; evitar distractores de telefonía y límites universales por nombre comercial.

### Antes

¿Qué relación conceptual es más correcta?

- A. MDM administra necesariamente móviles, PCs, servidores, identidades, red y cualquier otro endpoint con idéntico alcance.
- B. UEM es únicamente un antivirus centralizado y no incluye configuración, aplicaciones, cumplimiento o ciclo de vida del dispositivo.
- C. MDM es una capacidad más acotada; EMM/UEM amplían el gobierno hacia apps, contenido, identidad y otros endpoints. **(correcta)**
- D. EMM es un protocolo de telefonía móvil utilizado para negociar codecs y establecer sesiones multimedia empresariales.

Explicación: Las fronteras de producto varían, pero la evolución conceptual es examinable.

### Propuesta

¿Qué relación conceptual es más correcta?

- A. MDM gestiona las aplicaciones y MAM configura el dispositivo completo y su inventario.
- B. UEM administra identidades y credenciales, mientras IAM unifica la gestión de endpoints.
- C. MDM aporta gestión del dispositivo; EMM/UEM integran más capacidades y ámbitos según solución. **(correcta)**
- D. EMM determina quién posee el terminal y BYOD define los servicios de gestión de aplicaciones.

Explicación: MDM aporta gestión del dispositivo y puede integrarse con aplicaciones, contenido, identidad y otras capacidades en soluciones EMM o UEM. La evolución conceptual ayuda a distinguir focos sin imponer fronteras exclusivas: hay MDM de escritorio y guías que aproximan EMM y UEM. La propiedad del equipo y el alcance técnico de la gestión son dimensiones diferentes que deben concretarse en el despliegue.

- Error A: Invierte los focos de MDM y MAM: el primero administra el dispositivo y el segundo se centra en aplicaciones y datos.
- Error B: IAM administra identidades y acceso; UEM se refiere a gestión unificada de endpoints, aunque pueda integrarse con servicios de identidad.
- Error D: La propiedad y usos permitidos pertenecen a modelos como BYOD o COPE, mientras EMM denomina una solución de gestión de movilidad.

- [IBM: What is enterprise mobility management?](https://www.ibm.com/think/topics/enterprise-mobility-management) · Core components: MDM/MAM/MCM/IAM; Enterprise mobility management vs unified endpoint management · versión: HTML del proveedor comprobado el04-11-2026. Clasificación conceptual de capacidades, no fronteras normativas exclusivas; se excluye la afirmación comercial de invisibilidad absoluta de datos personales en cualquier contenedor. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [Microsoft Learn: What is Microsoft Intune?](https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune) · What Intune does; How Intune is used: MDM,MAM or both; How Intune works with Microsoft Entra · versión: HTML público comprobado el04-11-2026. Ejemplo primario de gestión dispositivo/aplicaciones e identidad; admite plataformas de escritorio. No se prescribe cloud, producto, licencias o un modo de control idéntico para toda inscripción. · comprobado: 2026-11-04
- [Canadian Centre for Cyber Security: Security considerations for mobile device deployments](https://www.cyber.gc.ca/en/guidance/security-considerations-mobile-device-deployments-itsap70002) · Mobile device deployment models: COBO,COPE,BYOD; Unified endpoint management · versión: ITSAP70.002, HTML modificado22-10-2024 y comprobado04-11-2026. Solo definiciones propiedad/uso y alcance UEM; no norma española. Se excluyen generalizaciones de riesgo cero en COBO y de ausencia de controles viables en BYOD. · comprobado: 2026-11-04

Partida: `0c411c51e22839db2844227e8daf83e580327c3f57742daaef2cbb9335cc41a0` · propuesta: `743932051d149df9be49d9695284259000cf11af08b62167abd8eddc51cb7146`

## MAN-GSI-P19-087

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa y clave A; separar propiedad de alcance de gestión, privacidad y soporte.

### Antes

¿Qué significa BYOD?

- A. El usuario aporta un dispositivo personal que se usa para fines corporativos bajo políticas definidas. **(correcta)**
- B. La organización proporciona un dispositivo restringido exclusivamente al trabajo y conserva todo su control administrativo.
- C. La organización posee el dispositivo, pero permite un uso personal definido además de las aplicaciones y datos corporativos.
- D. El usuario elige un modelo dentro de un catálogo aprobado, que la organización financia o entrega bajo sus políticas.

Explicación: Bring Your Own Device plantea retos de privacidad, soporte y borrado selectivo.

### Propuesta

¿Qué significa BYOD?

- A. El usuario aporta un dispositivo personal que se usa para fines corporativos bajo políticas definidas. **(correcta)**
- B. La organización proporciona un dispositivo restringido exclusivamente al trabajo y conserva todo su control administrativo.
- C. La organización posee el dispositivo, pero permite un uso personal definido además de las aplicaciones y datos corporativos.
- D. El usuario elige un modelo dentro de un catálogo aprobado, que la organización financia o entrega bajo sus políticas.

Explicación: BYOD significa Bring Your Own Device: se permite usar un equipo personal para acceder a actividades o recursos corporativos conforme a las políticas definidas. Que sea personal no significa ausencia de protección ni control ilimitado del empleador. Deben precisarse gestión, soporte, información al usuario y separación de datos. COPE y COBO se distinguen por propiedad corporativa y usos permitidos; CYOD destaca elección desde un catálogo.

- Error B: Un dispositivo proporcionado por la organización solo para trabajo corresponde al modelo corporativo de uso profesional, no al equipo personal BYOD.
- Error C: La propiedad corporativa con uso personal permitido caracteriza COPE; BYOD conserva la propiedad personal del equipo.
- Error D: Elegir desde un catálogo aprobado caracteriza CYOD; no es el rasgo definitorio de aportar un dispositivo personal que evalúa BYOD.

- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [Canadian Centre for Cyber Security: Security considerations for mobile device deployments](https://www.cyber.gc.ca/en/guidance/security-considerations-mobile-device-deployments-itsap70002) · Mobile device deployment models: COBO,COPE,BYOD; Unified endpoint management · versión: ITSAP70.002, HTML modificado22-10-2024 y comprobado04-11-2026. Solo definiciones propiedad/uso y alcance UEM; no norma española. Se excluyen generalizaciones de riesgo cero en COBO y de ausencia de controles viables en BYOD. · comprobado: 2026-11-04
- [BOE/DOUE: Reglamento(UE)2016/679, RGPD](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos5.1a–c/e: transparencia,finalidad,minimización y conservación;13.1: información;25.1–2: diseño y defecto · versión: Texto original DOUE04-05-2016, apartados comprobados el04-11-2026. Principios generales, no dictamen sobre un tratamiento concreto o afirmación de que toda monitorización sea ilícita. No se equipara conformidadMDM con cumplimientoRGPD. · comprobado: 2026-11-04

Partida: `be46fd5d23b1807362dafab3d0cfcaa517767ab1cd80df3b180f90189d07255a` · propuesta: `fd38ffaaf365b6f7dae46f271ff4d8f29aa2504898bdfd6cbf33b8604c835979`

## MAN-GSI-P19-088

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta B; cuatro modelos próximos en vez de alternativas ajenas o indeterminadas.

### Antes

¿Qué significa COPE?

- A. Dispositivo personal sin gestión.
- B. Corporate Owned, Personally Enabled: dispositivo corporativo con cierto uso personal permitido. **(correcta)**
- C. Corporativo solo para negocio.
- D. Elección libre sin catálogo ni propiedad corporativa.

Explicación: COPE mantiene propiedad corporativa y permite uso personal según política.

### Propuesta

¿Qué significa COPE?

- A. Bring Your Own Device: equipo personal usado para actividades corporativas bajo políticas.
- B. Corporate Owned, Personally Enabled: dispositivo corporativo con cierto uso personal permitido. **(correcta)**
- C. Corporate Owned, Business Only: equipo de la organización limitado al uso de trabajo.
- D. Choose Your Own Device: elección de un modelo dentro de un catálogo aprobado por la organización.

Explicación: COPE combina propiedad corporativa con un uso personal permitido y regulado por la política aplicable. No es el equipo personal del modelo BYOD ni la restricción al uso profesional de COBO. Las funciones de gestión y separación dependen del modo de inscripción y del sistema operativo; permitir uso personal no elimina la necesidad de proteger privacidad o comunicar el alcance de los controles.

- Error A: BYOD se basa en la propiedad personal del equipo; en COPE el dispositivo pertenece o es proporcionado por la organización.
- Error C: La restricción al uso profesional corresponde a COBO; COPE permite cierto uso personal conforme a las condiciones definidas.
- Error D: CYOD describe selección desde un catálogo aprobado y no determina por sí solo el régimen de propiedad y uso personal de COPE.

- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [Canadian Centre for Cyber Security: Security considerations for mobile device deployments](https://www.cyber.gc.ca/en/guidance/security-considerations-mobile-device-deployments-itsap70002) · Mobile device deployment models: COBO,COPE,BYOD; Unified endpoint management · versión: ITSAP70.002, HTML modificado22-10-2024 y comprobado04-11-2026. Solo definiciones propiedad/uso y alcance UEM; no norma española. Se excluyen generalizaciones de riesgo cero en COBO y de ausencia de controles viables en BYOD. · comprobado: 2026-11-04
- [Microsoft Learn: Step5 – Enroll devices in Intune](https://learn.microsoft.com/en-us/intune/device-enrollment/enroll-devices) · Introducción; Getting started; Android enrollment methods: identidad, inscripciónMDM y modos de gestión · versión: HTML público comprobado el04-11-2026. Registro de identidad e inscripciónMDM son relacionados pero distintos. El método y la propiedad condicionan el control; no instrucciones de instalación ejecutadas. · comprobado: 2026-11-04

Partida: `f17a20b7771314176a0b9f69d3f618753719bf053f44c6b06141b5ddeb458445` · propuesta: `b67aad00894a2ab404bc7011b0104e1a455885d845b11801c33766a1092662bf`

## MAN-GSI-P19-089

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa y clave C; sustituir máximo control por descripción de propiedad/uso sin garantizar seguridad.

### Antes

¿Qué significa COBO?

- A. Bring Your Own Device: el usuario aporta un equipo personal autorizado para determinadas actividades corporativas.
- B. Corporate Owned, Personally Enabled: la organización posee el equipo y admite también un uso personal regulado.
- C. Corporate Owned, Business Only: dispositivo corporativo destinado exclusivamente al trabajo. **(correcta)**
- D. Choose Your Own Device: el usuario selecciona un modelo de un catálogo corporativo permitido y administrado.

Explicación: COBO maximiza control corporativo a costa de menor uso personal.

### Propuesta

¿Qué significa COBO?

- A. Bring Your Own Device: el usuario aporta un equipo personal autorizado para determinadas actividades corporativas.
- B. Corporate Owned, Personally Enabled: la organización posee el equipo y admite también un uso personal regulado.
- C. Corporate Owned, Business Only: dispositivo corporativo destinado exclusivamente al trabajo. **(correcta)**
- D. Choose Your Own Device: el usuario selecciona un modelo de un catálogo corporativo permitido y administrado.

Explicación: COBO identifica propiedad corporativa y uso exclusivamente profesional del dispositivo. Esa restricción facilita un modelo de administración y soporte controlado, pero no significa ausencia de vulnerabilidades o seguridad máxima garantizada. COPE permite uso personal; BYOD se basa en propiedad personal; CYOD describe la elección de equipo desde un catálogo aprobado y necesita concretar sus condiciones.

- Error A: BYOD utiliza un equipo personal para fines corporativos; no define la propiedad corporativa y uso solo profesional de COBO.
- Error B: COPE mantiene propiedad corporativa pero permite cierto uso personal; esa segunda dimensión lo distingue del modelo COBO.
- Error D: CYOD se refiere a escoger desde un catálogo; no es la expansión ni el régimen de uso exclusivamente laboral definido por COBO.

- [Canadian Centre for Cyber Security: Security considerations for mobile device deployments](https://www.cyber.gc.ca/en/guidance/security-considerations-mobile-device-deployments-itsap70002) · Mobile device deployment models: COBO,COPE,BYOD; Unified endpoint management · versión: ITSAP70.002, HTML modificado22-10-2024 y comprobado04-11-2026. Solo definiciones propiedad/uso y alcance UEM; no norma española. Se excluyen generalizaciones de riesgo cero en COBO y de ausencia de controles viables en BYOD. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04

Partida: `6dce3e555480ac3f3f63fe26f1166022931e2691dc432a28701f8fd71aac7ba0` · propuesta: `420c5b3c0ab786eb42b2d766f6bceaca05422489885818f609f9f7f266c39508`

## MAN-GSI-P19-090

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa y clave C; explicar que catálogo no prueba por sí mismo propiedad corporativa.

### Antes

¿Qué significa CYOD?

- A. Bring Your Own Device: el usuario aporta un dispositivo de su propiedad sujeto a las políticas corporativas aplicables.
- B. Corporate-Owned, Personally Enabled: la organización posee el equipo y permite un uso personal controlado.
- C. Choose Your Own Device: el usuario elige entre un catálogo aprobado, normalmente bajo condiciones corporativas definidas. **(correcta)**
- D. Corporate-Owned, Business Only: la organización suministra el equipo para uso exclusivamente profesional.

Explicación: CYOD equilibra elección con estandarización/soporte.

### Propuesta

¿Qué significa CYOD?

- A. Bring Your Own Device: el usuario aporta un dispositivo de su propiedad sujeto a las políticas corporativas aplicables.
- B. Corporate-Owned, Personally Enabled: la organización posee el equipo y permite un uso personal controlado.
- C. Choose Your Own Device: el usuario elige entre un catálogo aprobado, normalmente bajo condiciones corporativas definidas. **(correcta)**
- D. Corporate-Owned, Business Only: la organización suministra el equipo para uso exclusivamente profesional.

Explicación: CYOD significa Choose Your Own Device: la persona escoge un equipo dentro de un catálogo aprobado para facilitar compatibilidad y soporte bajo condiciones definidas. La etiqueta no determina universalmente la propiedad: NIST describe una variante comprada por el empleado, mientras otros programas pueden ser corporativos. Deben precisarse financiación, propiedad, uso personal y gestión en la política; elegir desde catálogo es el rasgo común.

- Error A: BYOD destaca que el usuario aporta un dispositivo personal; CYOD exige que la elección se haga dentro de un catálogo aprobado.
- Error B: COPE define propiedad corporativa y uso personal permitido; esas condiciones no son la definición de selección desde catálogo.
- Error D: COBO define equipo corporativo destinado al trabajo; CYOD describe cómo se selecciona el modelo, con otras condiciones que deben concretarse.

- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [Canadian Centre for Cyber Security: Security considerations for mobile device deployments](https://www.cyber.gc.ca/en/guidance/security-considerations-mobile-device-deployments-itsap70002) · Mobile device deployment models: COBO,COPE,BYOD; Unified endpoint management · versión: ITSAP70.002, HTML modificado22-10-2024 y comprobado04-11-2026. Solo definiciones propiedad/uso y alcance UEM; no norma española. Se excluyen generalizaciones de riesgo cero en COBO y de ausencia de controles viables en BYOD. · comprobado: 2026-11-04

Partida: `fae3fb374601fa55719041ea097bc637dc32a2f01ad49dabee32fdc07fa18b40` · propuesta: `c12f48180ed332e95c48b2bc0ee53e99cdeeba930257f0064c7f9deba61de519`

## MAN-GSI-P19-091

Decisión: pending_review · acción: revise.

Motivo: Conservar inscripción y clave C; caso distingue gestión, inventario, evaluación y retirada sin confundir registro de identidad con inscripciónMDM.

### Antes

¿Qué es enrolment en UEM/MDM?

- A. Instalación inicial de aplicaciones y ajustes antes de entregar un dispositivo al usuario.
- B. Comprobación de que el dispositivo cumple los requisitos de seguridad definidos por la organización.
- C. El proceso de registrar/vincular un dispositivo a la gestión corporativa y aplicar identidad/perfiles. **(correcta)**
- D. Eliminación remota, total o selectiva, de los datos administrados en un dispositivo.

Explicación: El enrolment establece la relación de gestión y suele determinar el modo de propiedad/control.

### Propuesta

Una organización va a administrar por primera vez un móvil mediante MDM. ¿Qué operación corresponde al enrolment del dispositivo?

- A. Actualizar el inventario con modelo y versión del sistema.
- B. Evaluar si la configuración cumple la política de seguridad.
- C. Inscribir y vincular el dispositivo a la gestión y sus perfiles. **(correcta)**
- D. Eliminar las aplicaciones y datos del espacio corporativo.

Explicación: El enrolment o inscripción establece la relación de administración entre el dispositivo y la plataforma MDM/UEM, con identidad, certificados o perfiles según el mecanismo. Se distingue de inventariar sus características y de evaluar posteriormente la conformidad. En una solución concreta puede haber pasos separados de registro de identidad, inscripción y aprovisionamiento; instalar una app o iniciar sesión no demuestra por sí solo inscripción completa.

- Error A: Registrar características en un inventario aporta información del activo, pero no establece necesariamente una relación de administración MDM.
- Error B: La evaluación de requisitos corresponde a compliance; puede realizarse después de inscribir el dispositivo sin ser la inscripción misma.
- Error D: Retirar apps o datos corporativos es una acción de salida o protección; no crea la relación inicial de gestión.

- [Microsoft Learn: Step5 – Enroll devices in Intune](https://learn.microsoft.com/en-us/intune/device-enrollment/enroll-devices) · Introducción; Getting started; Android enrollment methods: identidad, inscripciónMDM y modos de gestión · versión: HTML público comprobado el04-11-2026. Registro de identidad e inscripciónMDM son relacionados pero distintos. El método y la propiedad condicionan el control; no instrucciones de instalación ejecutadas. · comprobado: 2026-11-04
- [Microsoft Learn: What is Microsoft Intune?](https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune) · What Intune does; How Intune is used: MDM,MAM or both; How Intune works with Microsoft Entra · versión: HTML público comprobado el04-11-2026. Ejemplo primario de gestión dispositivo/aplicaciones e identidad; admite plataformas de escritorio. No se prescribe cloud, producto, licencias o un modo de control idéntico para toda inscripción. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04

Partida: `47b310390c0e5ed8a489ff4b873ad1bd590ae14f6b2e9c4cf64baf345df90aef` · propuesta: `7dd72f83f5d9b83e3460fb792f19cb538f463893c0bd1b2ec55f2a1207f7ad1f`

## MAN-GSI-P19-092

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y clave D; cuatro procesos de gestión distintos, sin confundir postura con certificación legal.

### Antes

¿Qué es compliance de dispositivo?

- A. Registro del dispositivo en la plataforma de gestión para asociarlo con una identidad y aplicar políticas.
- B. Entrega al dispositivo de perfiles, certificados, aplicaciones y parámetros necesarios para su uso corporativo.
- C. Recopilación del modelo, sistema operativo, aplicaciones instaladas y otros datos de inventario del endpoint.
- D. Evaluación de si el endpoint cumple requisitos como versión, cifrado, bloqueo, ausencia de root/jailbreak y configuración exigida. **(correcta)**

Explicación: El estado de cumplimiento puede alimentar acceso condicional y remediación.

### Propuesta

¿Qué es compliance de dispositivo?

- A. Inscribir el endpoint para establecer su relación con la plataforma de administración.
- B. Distribuir perfiles, certificados y aplicaciones para configurar el endpoint de trabajo.
- C. Recopilar características de hardware y software para actualizar el inventario del equipo.
- D. Evaluar el endpoint frente a los requisitos de seguridad y configuración de una política. **(correcta)**

Explicación: Compliance de dispositivo evalúa la postura del endpoint respecto a requisitos de una política, por ejemplo versión, bloqueo, cifrado o ausencia de root según plataforma. El resultado puede alimentar remediación o acceso condicional cuando se integran esos mecanismos. Estar inscrito o disponer de inventario no acredita conformidad; tampoco una marca de conforme certifica cumplimiento legal o ausencia de vulnerabilidades, y su vigencia depende de la evaluación.

- Error A: La inscripción establece la relación de gestión; un equipo inscrito puede incumplir posteriormente uno o varios requisitos de la política.
- Error B: Entregar configuración es aprovisionamiento; la evaluación comprueba si el estado resultante satisface las condiciones exigidas.
- Error C: El inventario reúne datos del activo, pero se necesitan reglas y evaluación para decidir su conformidad con la política.

- [Microsoft Learn: Device compliance policies in Intune](https://learn.microsoft.com/en-us/intune/device-security/compliance/overview) · Device compliance policies: evaluación de reglas, ausencia de root/jailbreak, acciones por incumplimiento y acceso condicional · versión: HTML público comprobado el04-11-2026. Postura conforme a una política y momento de evaluación, no certificación de cumplimiento legal, integridad perfecta o remediación instantánea; se excluye extrapolar tablas de plataformas antiguas. · comprobado: 2026-11-04
- [Microsoft Learn: Step5 – Enroll devices in Intune](https://learn.microsoft.com/en-us/intune/device-enrollment/enroll-devices) · Introducción; Getting started; Android enrollment methods: identidad, inscripciónMDM y modos de gestión · versión: HTML público comprobado el04-11-2026. Registro de identidad e inscripciónMDM son relacionados pero distintos. El método y la propiedad condicionan el control; no instrucciones de instalación ejecutadas. · comprobado: 2026-11-04
- [Microsoft Learn: What is Conditional Access?](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview) · Overview; Common signals; Common decisions: identidad,dispositivo,aplicación y riesgo para decidir acceso · versión: HTML público comprobado el04-11-2026. Ejemplo de motor de política; después de primer factor en este producto, sin igualarlo a cortafuegos universal o prometer prevención de todo ataque. · comprobado: 2026-11-04

Partida: `846a6b32204954205d44099085ccae621a515f25a1a966ebb32858cf218b0b3a` · propuesta: `bdc6c889bbff4ff194fe4afebda9123842877ecdc69a3359a8165a39b9c5bf84`

## MAN-GSI-P19-093

Decisión: pending_review · acción: revise.

Motivo: Conservar decisión adaptada a señales y clave A; caso de contraseña válida con requisito explícito de cifrado.

### Antes

¿Qué es acceso condicional en este contexto?

- A. Permitir o denegar acceso a recursos según identidad, dispositivo, cumplimiento, riesgo y otras señales. **(correcta)**
- B. Autorizar de forma permanente por pertenecer a una red corporativa, sin reevaluar identidad, riesgo o estado del dispositivo.
- C. Comprobar únicamente la contraseña al inicio de sesión y mantener el acceso aunque cambien ubicación, cumplimiento o riesgo.
- D. Conceder acceso completo a todo terminal inscrito en MDM, con independencia del usuario, recurso y señales de seguridad.

Explicación: Integra IAM y postura de endpoint para aplicar confianza adaptativa.

### Propuesta

Una aplicación exige identidad válida y dispositivo conforme con cifrado. La contraseña es correcta, pero el equipo no está conforme. ¿Qué función describe el acceso condicional?

- A. Decidir acceso según identidad, recurso y señales de riesgo y postura del dispositivo. **(correcta)**
- B. Permitir acceso por conocer la contraseña aunque el equipo incumpla la política requerida.
- C. Permitir acceso por estar inscrito aunque no cumpla la condición de cifrado del recurso.
- D. Permitir acceso por la dirección IP corporativa aunque la identidad esté deshabilitada.

Explicación: El acceso condicional combina señales de identidad, recurso, dispositivo, conformidad o riesgo para aplicar decisiones definidas en una política. Conocer la contraseña o estar inscrito no reemplaza un requisito de postura que la política exija. El mecanismo debe recibir y evaluar señales válidas; no equivale a confiar indefinidamente en una red o garantizar que se evita cualquier ataque.

- Error B: Un primer factor válido no satisface automáticamente el requisito de postura; la política puede exigir controles adicionales antes de autorizar el recurso.
- Error C: Inscripción y conformidad son diferentes: un dispositivo administrado puede incumplir la condición de cifrado que protege el recurso.
- Error D: La ubicación de red no legitima por sí sola una identidad deshabilitada ni sustituye las demás condiciones de autorización.

- [Microsoft Learn: What is Conditional Access?](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview) · Overview; Common signals; Common decisions: identidad,dispositivo,aplicación y riesgo para decidir acceso · versión: HTML público comprobado el04-11-2026. Ejemplo de motor de política; después de primer factor en este producto, sin igualarlo a cortafuegos universal o prometer prevención de todo ataque. · comprobado: 2026-11-04
- [Microsoft Learn: Device compliance policies in Intune](https://learn.microsoft.com/en-us/intune/device-security/compliance/overview) · Device compliance policies: evaluación de reglas, ausencia de root/jailbreak, acciones por incumplimiento y acceso condicional · versión: HTML público comprobado el04-11-2026. Postura conforme a una política y momento de evaluación, no certificación de cumplimiento legal, integridad perfecta o remediación instantánea; se excluye extrapolar tablas de plataformas antiguas. · comprobado: 2026-11-04
- [Microsoft Learn: What is Microsoft Intune?](https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune) · What Intune does; How Intune is used: MDM,MAM or both; How Intune works with Microsoft Entra · versión: HTML público comprobado el04-11-2026. Ejemplo primario de gestión dispositivo/aplicaciones e identidad; admite plataformas de escritorio. No se prescribe cloud, producto, licencias o un modo de control idéntico para toda inscripción. · comprobado: 2026-11-04

Partida: `edd710f50fa218f82c76dc1ea8662d8bb5542cc678d323914ba62bb7347c0304` · propuesta: `a2fa4d92c0994d0a47a72737a042438972f7350fe98dce51d3a13e515ad68fa4`

## MAN-GSI-P19-094

Decisión: pending_review · acción: revise.

Motivo: Conservar alcance completo/selectivo y clave D; aclarar datos, no eliminación física del dispositivo, con ejecución y propiedad delimitadas.

### Antes

¿Qué diferencia hay entre remote wipe completo y borrado selectivo?

- A. El borrado completo bloquea temporalmente el terminal, mientras el selectivo restablece todos sus datos de fábrica.
- B. El borrado selectivo elimina físicamente la SIM, mientras el completo retira únicamente el perfil corporativo.
- C. Ambos eliminan el mismo conjunto de datos; se diferencian solo por iniciarse desde el dispositivo o desde la consola.
- D. El completo intenta eliminar el dispositivo gestionado; el selectivo retira datos/perfil corporativo conservando lo personal cuando procede. **(correcta)**

Explicación: En BYOD es especialmente importante separar datos personales y corporativos.

### Propuesta

La consola ofrece borrado completo y retirada selectiva en un móvil con ámbito personal y corporativo separados. ¿Qué diferencia de alcance debe entenderse antes de elegir?

- A. El completo conserva los datos personales y el selectivo elimina también todo el ámbito personal.
- B. El completo solo bloquea el acceso y el selectivo restablece todo el equipo a valores de fábrica.
- C. Ambos borran el mismo ámbito y solo se distinguen por quién pulsa la orden en la consola.
- D. El completo abarca datos del terminal; el selectivo retira el ámbito corporativo según plataforma. **(correcta)**

Explicación: Un borrado completo pretende restablecer o eliminar los datos del terminal según la plataforma. El selectivo dirige la retirada al ámbito corporativo compatible, conservando el personal cuando el modo de gestión lo permite. La diferencia es de alcance, no de quién inicia la orden. No se garantiza ejecución inmediata, borrado de toda copia externa o eficacia por el mero envío: hay que verificar estado, conectividad y resultado.

- Error A: Invierte los alcances: conservar el ámbito personal es el objetivo del selectivo compatible, no del restablecimiento completo del terminal.
- Error B: Bloquear no equivale a borrar; el restablecimiento total describe una acción de alcance completo, no la retirada selectiva de trabajo.
- Error C: El ámbito de datos afectado sí cambia entre completo y selectivo; no es solo una diferencia de iniciador en la consola.

- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [Microsoft Learn: Device actions in Intune](https://learn.microsoft.com/en-us/intune/device-management/actions/) · Retire frente a Wipe; Check the status of the action: estado de servidor y ejecución en cliente · versión: HTML público comprobado el04-11-2026. Se comprueban definiciones y necesidad de verificar ejecución, no cuotas, interfaz o disponibilidad uniforme entre plataformas. El borrado selectivo conserva ámbito personal cuando el modo lo permite. · comprobado: 2026-11-04
- [Android Enterprise: Work profile on personally-owned devices](https://developers.google.com/android/work/requirements/work-profile) · Introducción; Device security:2.2 Work security challenge y2.5 Wipe and lock · versión: Requisitos HTML comprobados el04-11-2026. Perfil laboral en dispositivo personal, distinto de modo corporativo; no se universalizan versiones, matriz de soporte o facultades de una plataforma a todo contenedor. · comprobado: 2026-11-04
- [BOE/DOUE: Reglamento(UE)2016/679, RGPD](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos5.1a–c/e: transparencia,finalidad,minimización y conservación;13.1: información;25.1–2: diseño y defecto · versión: Texto original DOUE04-05-2016, apartados comprobados el04-11-2026. Principios generales, no dictamen sobre un tratamiento concreto o afirmación de que toda monitorización sea ilícita. No se equipara conformidadMDM con cumplimientoRGPD. · comprobado: 2026-11-04

Partida: `377b8072d8d3eeb4ff02dbdfb60166b2095c89a753c243c19bd02a3f7a442d45` · propuesta: `2d0c5755282cec32d5a231bb7a69c6c9173e3439e60153a889c6dae24368bd6b`

## MAN-GSI-P19-095

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa y clave D; usar Android como ejemplo sin universalizarlo a todo contenedor.

### Antes

¿Qué es un perfil/contenedor de trabajo en móviles?

- A. La administración del dispositivo completo mediante políticas de configuración, inventario, cumplimiento y borrado remoto.
- B. La gestión de aplicaciones corporativas y de sus datos mediante distribución, configuración y controles de uso.
- C. El cifrado del almacenamiento del terminal para proteger los datos en reposo si el dispositivo se pierde o sustrae.
- D. Un mecanismo para separar aplicaciones/datos corporativos del ámbito personal con políticas diferenciadas. **(correcta)**

Explicación: La separación facilita privacidad y borrado selectivo.

### Propuesta

¿Qué es un perfil/contenedor de trabajo en móviles?

- A. La administración del dispositivo completo mediante políticas de configuración, inventario, cumplimiento y borrado remoto.
- B. La gestión de aplicaciones corporativas y de sus datos mediante distribución, configuración y controles de uso.
- C. El cifrado del almacenamiento del terminal para proteger los datos en reposo si el dispositivo se pierde o sustrae.
- D. Un mecanismo para separar aplicaciones/datos corporativos del ámbito personal con políticas diferenciadas. **(correcta)**

Explicación: Un perfil o contenedor de trabajo separa aplicaciones y datos corporativos del ámbito personal y permite políticas diferenciadas, según la arquitectura. Android Work Profile es un ejemplo concreto; otros contenedores pueden funcionar a nivel de aplicación o sistema. Separar ámbitos favorece privacidad y retirada selectiva, pero no vuelve invulnerable el equipo ni equivale a administrar todo el dispositivo o simplemente cifrar su almacenamiento.

- Error A: Administrar todo el dispositivo es un alcance de gestión distinto; no describe por sí solo separación entre espacio personal y laboral.
- Error B: MAM gestiona aplicaciones y datos corporativos, pero la definición de perfil o contenedor destaca el mecanismo de separación de ámbitos.
- Error C: El cifrado en reposo protege datos según claves y acceso; no crea por sí mismo dos ámbitos de aplicaciones con políticas diferenciadas.

- [Android Enterprise: Work profile on personally-owned devices](https://developers.google.com/android/work/requirements/work-profile) · Introducción; Device security:2.2 Work security challenge y2.5 Wipe and lock · versión: Requisitos HTML comprobados el04-11-2026. Perfil laboral en dispositivo personal, distinto de modo corporativo; no se universalizan versiones, matriz de soporte o facultades de una plataforma a todo contenedor. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [Microsoft Learn: What is Intune app management?](https://learn.microsoft.com/en-us/intune/app-management/overview) · Mobile Application Management basics: apps/datos, MDM+MAM y MAM en dispositivos no inscritos · versión: HTML público comprobado el04-11-2026. Capacidades y compatibilidad dependen de apps/plataforma; no gestión universal de cualquier app ni acceso a todo el dispositivo por proteger una aplicación. · comprobado: 2026-11-04

Partida: `4c747db4f56ce61118d0df20eb55a88574e127545ca6613179ce6dc4b8ca3346` · propuesta: `b396d789b3414d2036ea3d438393f1463975f0ee02a7ffea1bc7cfa3f3f20e60`

## MAN-GSI-P19-096

Decisión: pending_review · acción: revise.

Motivo: Conservar correcta A y respuesta según política; caso de root confirmado sin opciones ajenas como bitrate o manipular registros.

### Antes

¿Qué debería hacer UEM ante un dispositivo con root/jailbreak detectado si la política lo considera no conforme?

- A. Marcar incumplimiento y restringir/remediar acceso según riesgo y política. **(correcta)**
- B. Ignorar siempre la detección para no afectar al usuario, aunque el dispositivo incumpla una condición explícita de acceso corporativo.
- C. Desactivar los registros del agente UEM para ocultar el evento y mantener el terminal como conforme sin evaluar el riesgo asociado.
- D. Aumentar el bitrate de videollamada para compensar la alteración del sistema operativo y recuperar la integridad del dispositivo.

Explicación: Root/jailbreak puede romper supuestos de aislamiento y debe tratarse mediante postura/compliance.

### Propuesta

Se confirma root en un móvil y la política exige ausencia de root para acceder a datos corporativos. ¿Cómo debe tratarlo la gestión UEM integrada con acceso?

- A. Marcar incumplimiento y restringir/remediar acceso según riesgo y política. **(correcta)**
- B. Enviar una advertencia manteniendo el equipo conforme pese al incumplimiento confirmado.
- C. Actualizar el inventario y conservar el acceso sin aplicar el requisito de integridad.
- D. Considerar suficiente la contraseña válida para ignorar el estado alterado del sistema.

Explicación: Una detección confirmada que incumple una condición explícita debe reflejarse en la postura del dispositivo y en las decisiones previstas por la política. Pueden incluir restricción del acceso, aviso y remediación proporcionada, con comprobación posterior. El estado no debe mantenerse como conforme por haber instalado el agente o presentado una contraseña. Las respuestas dependen de integración y plataforma; no se ordena borrado automático indiscriminado.

- Error B: Avisar puede acompañar la respuesta, pero no justifica declarar conforme un dispositivo que incumple la condición confirmada de la política.
- Error C: Actualizar inventario no aplica el control de postura exigido; la evaluación y su integración con acceso necesitan una acción coherente.
- Error D: Autenticar al usuario no corrige el estado del sistema ni sustituye un requisito de integridad del endpoint establecido para el recurso.

- [Microsoft Learn: Device compliance policies in Intune](https://learn.microsoft.com/en-us/intune/device-security/compliance/overview) · Device compliance policies: evaluación de reglas, ausencia de root/jailbreak, acciones por incumplimiento y acceso condicional · versión: HTML público comprobado el04-11-2026. Postura conforme a una política y momento de evaluación, no certificación de cumplimiento legal, integridad perfecta o remediación instantánea; se excluye extrapolar tablas de plataformas antiguas. · comprobado: 2026-11-04
- [Microsoft Learn: What is Conditional Access?](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview) · Overview; Common signals; Common decisions: identidad,dispositivo,aplicación y riesgo para decidir acceso · versión: HTML público comprobado el04-11-2026. Ejemplo de motor de política; después de primer factor en este producto, sin igualarlo a cortafuegos universal o prometer prevención de todo ataque. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04

Partida: `88c2d7602195ed33e37cc617e15c2d1f8ad1a5005bf584f754759851b821abe4` · propuesta: `d7561746f8c9ffd87c79a345fcdc79c71c7a3a350810a98c0e002afd3ded132c`

## MAN-GSI-P19-097

Decisión: pending_review · acción: revise.

Motivo: Conservar correcta A y autenticación gestionada; delimitar certificados cliente para evitar confundir credencial con conformidad o cifrado de disco.

### Antes

¿Qué papel tienen certificados gestionados por UEM?

- A. Facilitar autenticación fuerte y configuración segura de Wi-Fi, VPN o servicios corporativos. **(correcta)**
- B. Aumentar la cobertura radio del dispositivo al modificar mediante software la potencia, la ganancia y la orientación física de sus antenas.
- C. Sustituir el cifrado de disco, ya que un certificado de cliente protege automáticamente todos los datos almacenados en el terminal.
- D. Crear copias de seguridad completas de cualquier aplicación, aunque el sistema operativo o la política corporativa impidan acceder a sus datos.

Explicación: La distribución controlada de certificados reduce contraseñas compartidas y automatiza identidad de dispositivo/usuario.

### Propuesta

¿Qué papel pueden tener los certificados de cliente gestionados por UEM en conexiones corporativas Wi-Fi o VPN?

- A. Facilitar autenticación fuerte y configuración segura de Wi-Fi, VPN o servicios corporativos. **(correcta)**
- B. Certificar que el endpoint cumple todas las políticas sin realizar otra evaluación de postura.
- C. Sustituir la gestión del cifrado de disco y de sus claves de recuperación en el terminal.
- D. Renovar las reglas de autorización de todas las aplicaciones por el hecho de emitir el certificado.

Explicación: Los certificados de cliente pueden autenticar usuarios o equipos ante Wi-Fi, VPN u otros servicios, junto con la clave privada y una cadena de confianza y configuración adecuadas. UEM puede distribuir perfiles y apoyar su ciclo de vida. Un certificado no prueba por sí mismo conformidad del endpoint, no cifra todos los datos del disco ni sustituye reglas de autorización. Emisión, renovación y revocación deben coordinarse con la infraestructura correspondiente.

- Error B: La autenticación mediante certificado y la evaluación de cumplimiento son controles distintos; poseer el certificado no acredita toda la postura del equipo.
- Error C: El cifrado de almacenamiento y la recuperación de sus claves son mecanismos diferentes de presentar un certificado cliente para autenticar una conexión.
- Error D: Emitir una credencial no modifica automáticamente permisos de negocio en cada aplicación; identidad y autorización necesitan reglas y gestión propias.

- [Microsoft Learn: Configure and use PKCS certificates with Intune](https://learn.microsoft.com/en-us/intune/device-configuration/certificates/pkcs-profiles) · Introducción: certificados para acceso/autenticación a Wi-Fi yVPN; perfiles de configuración · versión: HTML público comprobado el04-11-2026. Ejemplo de certificado cliente y provisión; sin ejecutar configuración o universalizar PKCS, infraestructuraAD o soporte de plataforma. Requiere confianza, clave privada y gestión del ciclo de vida. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [Microsoft Learn: Device compliance policies in Intune](https://learn.microsoft.com/en-us/intune/device-security/compliance/overview) · Device compliance policies: evaluación de reglas, ausencia de root/jailbreak, acciones por incumplimiento y acceso condicional · versión: HTML público comprobado el04-11-2026. Postura conforme a una política y momento de evaluación, no certificación de cumplimiento legal, integridad perfecta o remediación instantánea; se excluye extrapolar tablas de plataformas antiguas. · comprobado: 2026-11-04

Partida: `7261b796015154c23d261090cfedca61505ce030ed99cd1247a20567e385b0e2` · propuesta: `a80bdb8e28508106dff4e36b774f05729fb231611978303195040101d4433d16`

## MAN-GSI-P19-098

Decisión: pending_review · acción: revise.

Motivo: Resolver ambigüedad confirmada: las cuatro alternativas anteriores describían riesgos. Conservar minimizaciónBYOD y clave B mediante elección de criterio protector con tres medidas excesivas.

### Antes

¿Qué riesgo de privacidad debe controlarse en BYOD?

- A. Inspeccionar por defecto aplicaciones, mensajes y fotografías personales para comprobar que el dispositivo es seguro.
- B. Recoger o inspeccionar más datos personales de los necesarios y realizar borrados excesivos. **(correcta)**
- C. Borrar todo el terminal ante cualquier incidencia, aunque exista separación del espacio corporativo y no se haya informado.
- D. Conservar indefinidamente ubicación y actividad personal porque el equipo se haya utilizado alguna vez para acceder al trabajo.

Explicación: La organización debe comunicar alcance de la gestión y aplicar minimización/separación.

### Propuesta

Una organización va a habilitar gestión remota en móviles personales BYOD. ¿Qué criterio debe adoptar para controlar el riesgo de privacidad del propietario?

- A. Habilitar inspección habitual de mensajes y fotos personales por el hecho de usar el equipo para trabajar.
- B. Limitar recogida y borrado al alcance necesario e informado, separando datos personales y corporativos. **(correcta)**
- C. Conservar indefinidamente ubicación y actividad personal para facilitar futuras investigaciones internas.
- D. Aplicar restablecimiento completo a cualquier incidencia aunque baste retirar el perfil de trabajo.

Explicación: En BYOD deben definirse una finalidad y alcance proporcionados de recogida, supervisión y retirada de datos, informar a la persona y separar el ámbito personal del corporativo. Minimizar y limitar conservación son principios de protección de datos; la inscripción no autoriza inspección general o borrados excesivos. La medida concreta depende de contexto y base aplicable: ni seguridad ni propiedad corporativa eliminan por sí solas las garantías de privacidad.

- Error A: El uso laboral de un equipo personal no justifica por sí solo inspeccionar habitualmente comunicaciones y fotografías ajenas a la finalidad necesaria.
- Error C: Conservar actividad personal sin un límite vinculado a finalidades justificadas no satisface el principio de limitación del plazo de conservación.
- Error D: Si la retirada selectiva suficiente y compatible resuelve la necesidad, el borrado total indiscriminado puede afectar datos personales fuera del alcance necesario.

- [BOE/DOUE: Reglamento(UE)2016/679, RGPD](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos5.1a–c/e: transparencia,finalidad,minimización y conservación;13.1: información;25.1–2: diseño y defecto · versión: Texto original DOUE04-05-2016, apartados comprobados el04-11-2026. Principios generales, no dictamen sobre un tratamiento concreto o afirmación de que toda monitorización sea ilícita. No se equipara conformidadMDM con cumplimientoRGPD. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [Android Enterprise: Work profile on personally-owned devices](https://developers.google.com/android/work/requirements/work-profile) · Introducción; Device security:2.2 Work security challenge y2.5 Wipe and lock · versión: Requisitos HTML comprobados el04-11-2026. Perfil laboral en dispositivo personal, distinto de modo corporativo; no se universalizan versiones, matriz de soporte o facultades de una plataforma a todo contenedor. · comprobado: 2026-11-04
- [Microsoft Learn: Device actions in Intune](https://learn.microsoft.com/en-us/intune/device-management/actions/) · Retire frente a Wipe; Check the status of the action: estado de servidor y ejecución en cliente · versión: HTML público comprobado el04-11-2026. Se comprueban definiciones y necesidad de verificar ejecución, no cuotas, interfaz o disponibilidad uniforme entre plataformas. El borrado selectivo conserva ámbito personal cuando el modo lo permite. · comprobado: 2026-11-04

Partida: `c18539ab86f5d5c714acb6902ab66031ce9816cce2868c9b68f9a89829217876` · propuesta: `3aee7ae6958e0e1b78054ccbac9fb234f217e1c22a01137dd122eebd3e2caf3f`

## MAN-GSI-P19-099

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta B; distractores de cierres parciales plausibles, con datosoffline y revocación no inmediata.

### Antes

¿Qué debe ocurrir en el offboarding de un empleado con dispositivo gestionado?

- A. Mantener tokens, certificados y perfiles activos por si el empleado regresa, aunque conserve acceso a recursos corporativos.
- B. Revocar tokens/certificados y accesos, retirar apps/datos corporativos según propiedad y conservar evidencias necesarias. **(correcta)**
- C. Ejecutar siempre un borrado total del dispositivo personal, aunque exista contenedor corporativo y sea suficiente el borrado selectivo.
- D. Transferir la cuenta, credenciales y certificados al sustituto para conservar la configuración y evitar un nuevo alta de identidad.

Explicación: El ciclo de vida de identidad y dispositivo debe cerrarse de forma coordinada.

### Propuesta

¿Qué debe ocurrir en el offboarding de un empleado con dispositivo gestionado?

- A. Eliminar el registro del terminal de la consola y dar por revocados sus accesos a todos los servicios.
- B. Revocar tokens/certificados y accesos, retirar apps/datos corporativos según propiedad y conservar evidencias necesarias. **(correcta)**
- C. Deshabilitar la cuenta central y considerar eliminadas por ello las copias corporativas guardadas sin conexión.
- D. Retirar el perfil de gestión y asumir que los certificados de acceso ya no son válidos en ningún sistema.

Explicación: La salida coordina identidad y dispositivos: retirar permisos y credenciales, tratar tokens y sesiones, retirar datos o aplicaciones de trabajo según propiedad y política y conservar la evidencia necesaria durante el plazo justificado. Borrar un registro MDM o deshabilitar una cuenta no garantiza por sí solo invalidar todas las credenciales o eliminar datos offline. Deben verificarse efectos, aplicaciones, revocación y ejecución de acciones de retirada.

- Error A: Eliminar el registro de administración no revoca automáticamente identidad, sesiones, certificados o accesos que mantienen otros sistemas.
- Error C: Deshabilitar una cuenta afecta acceso según su integración, pero no demuestra que desaparezcan los datos corporativos ya descargados al equipo.
- Error D: Retirar un perfil no prueba revocación global de certificados o sesiones; hay que coordinar las autoridades y servicios que aceptan esas credenciales.

- [Microsoft Learn: Revoke user access in EntraID](https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access) · Overview; Microsoft Entra environment; When access is revoked; Best practices: baja, tokens, sesiones y datos locales · versión: HTML público actualizado19-06-2026, comprobado04-11-2026. Sin ejecutar cmdlets, copiar ejemplos de contraseña o prometer revocación inmediata en toda app. Datos locales pueden persistir sin conexión; la baja no se limita al registroMDM. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04
- [Microsoft Learn: Device actions in Intune](https://learn.microsoft.com/en-us/intune/device-management/actions/) · Retire frente a Wipe; Check the status of the action: estado de servidor y ejecución en cliente · versión: HTML público comprobado el04-11-2026. Se comprueban definiciones y necesidad de verificar ejecución, no cuotas, interfaz o disponibilidad uniforme entre plataformas. El borrado selectivo conserva ámbito personal cuando el modo lo permite. · comprobado: 2026-11-04
- [Microsoft Learn: Configure and use PKCS certificates with Intune](https://learn.microsoft.com/en-us/intune/device-configuration/certificates/pkcs-profiles) · Introducción: certificados para acceso/autenticación a Wi-Fi yVPN; perfiles de configuración · versión: HTML público comprobado el04-11-2026. Ejemplo de certificado cliente y provisión; sin ejecutar configuración o universalizar PKCS, infraestructuraAD o soporte de plataforma. Requiere confianza, clave privada y gestión del ciclo de vida. · comprobado: 2026-11-04
- [BOE/DOUE: Reglamento(UE)2016/679, RGPD](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos5.1a–c/e: transparencia,finalidad,minimización y conservación;13.1: información;25.1–2: diseño y defecto · versión: Texto original DOUE04-05-2016, apartados comprobados el04-11-2026. Principios generales, no dictamen sobre un tratamiento concreto o afirmación de que toda monitorización sea ilícita. No se equipara conformidadMDM con cumplimientoRGPD. · comprobado: 2026-11-04

Partida: `30e1f89cadf94224e3565040a6721a219a2869cc860ac6ef4efb655776d1932f` · propuesta: `3b60c77018bc60ee25b81969bfed076d4600e5064d17790d531f6ee6d8211a5f`
