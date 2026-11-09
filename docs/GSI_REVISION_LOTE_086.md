# GSI-EDITORIAL-086 — revisión propuesta

Preparado: 2026-11-04. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `7619aeaf466bd53e475220f028ce69aa8f91d5ffeb675bd7a3341bf315ac5d83`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P19-100

Decisión: pending_review · acción: revise.

Motivo: Conservar caso de parque mixto, concepto UEM y correctaD; distractores próximos de cobertura parcial en MDM/MAM/IAM.

### Antes

Un parque mixto incluye Windows, macOS, iOS y Android. ¿Qué enfoque encaja mejor?

- A. MDM limitado a una única app sin inventario.
- B. Gestionar solo por correo manual.
- C. No aplicar políticas porque los SO son distintos.
- D. UEM con políticas por plataforma, identidad común, compliance y automatización de ciclo de vida. **(correcta)**

Explicación: UEM busca gobierno común manteniendo controles específicos por plataforma.

### Propuesta

Un parque mixto incluye Windows, macOS, iOS y Android. ¿Qué enfoque encaja mejor?

- A. MAM para las apps compatibles, tomando su estado como inventario y postura de todo el parque.
- B. IAM para cuentas comunes, tratando la autenticación como control de configuración de los equipos.
- C. MDM por plataforma, sin coordinar inventario, identidad o retirada de accesos entre herramientas.
- D. UEM con políticas por plataforma, identidad común, compliance y automatización de ciclo de vida. **(correcta)**

Explicación: UEM coordina la gestión de distintos tipos de endpoint, identidad, políticas y ciclo de vida. La flota mixta requiere controles compatibles con cada plataforma y su modo de gestión, no aplicar los mismos ajustes a todos. MDM, MAM e IAM aportan capacidades útiles, pero sus funciones aisladas no cubren por sí solas el gobierno común descrito.

- Error A: MAM protege aplicaciones y datos compatibles; su estado no representa por sí solo todo el inventario o la postura del equipo.
- Error B: IAM resuelve identidad y decisiones de acceso, pero autenticarse no configura, inventaría o mantiene el sistema operativo del terminal.
- Error C: Gestionar cada plataforma puede ser necesario; omitir coordinación deja sin resolver la visión común y la retirada coherente de accesos.

- [Microsoft Learn: What is Microsoft Intune?](https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune) · What Intune does; How Intune is used: MDM,MAM or both; How Intune works with Microsoft Entra · versión: HTML público comprobado el04-11-2026. Ejemplo primario de gestión dispositivo/aplicaciones e identidad; admite plataformas de escritorio. No se prescribe cloud, producto, licencias o un modo de control idéntico para toda inscripción. · comprobado: 2026-11-04
- [IBM: What is enterprise mobility management?](https://www.ibm.com/think/topics/enterprise-mobility-management) · Core components: MDM/MAM/MCM/IAM; Enterprise mobility management vs unified endpoint management · versión: HTML del proveedor comprobado el04-11-2026. Clasificación conceptual de capacidades, no fronteras normativas exclusivas; se excluye la afirmación comercial de invisibilidad absoluta de datos personales en cualquier contenedor. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04

Partida: `d648d6f8bcea6e9f6ae23045e9a367c826f7461f387f99deccfc40bb31c772b4` · propuesta: `2302d0af458bcb77f89b90e7b59229f1d1b8d51b64dcbfab24e702198db72cba`

## MAN-GSI-P19-145

Decisión: pending_review · acción: revise.

Motivo: Conservar prueba de redundancia y claveC; comprobar conmutación/aplicación y dependencias sin imponer diferente operador como regla absoluta.

### Antes

Un organismo quiere usar 5G como respaldo de fibra. ¿Qué prueba es imprescindible antes de declararlo redundante?

- A. Medir una vez el throughput del enlace 5G desde la misma sede, sin analizar dependencias compartidas con la fibra.
- B. Comprobar la configuración de failover en el router sin provocar la caída del primario ni validar las aplicaciones críticas.
- C. Verificar cobertura/capacidad real y que no comparta el mismo operador, obra, energía o dependencia crítica que el primario según objetivo de continuidad. **(correcta)**
- D. Comparar los SLA contractuales de ambos accesos, sin realizar una prueba de campo de cobertura, capacidad y recuperación.

Explicación: Redundancia efectiva requiere diversidad de dominio de fallo y pruebas de conmutación.

### Propuesta

Un organismo quiere usar 5G como respaldo de fibra. ¿Qué prueba es imprescindible antes de declararlo redundante?

- A. Medir el caudal 5G en condiciones favorables y usar esa cifra como evidencia de continuidad del servicio.
- B. Revisar la regla de failover sin interrumpir el primario ni observar las transacciones de las aplicaciones.
- C. Medir acceso 5G, analizar dependencias comunes y probar conmutación y servicio ante fallos del primario. **(correcta)**
- D. Comparar los SLA de ambos contratos y dar por demostrada la independencia de sus dominios de fallo.

Explicación: Antes de aceptar el respaldo se contrastan cobertura y capacidad en las condiciones previstas, dependencias compartidas y conmutación con aplicaciones críticas. El diseño debe satisfacer el objetivo de continuidad, incluidos fallos comunes de energía, acceso o proveedor. Cambiar de operador puede aportar diversidad, pero dos contratos o dos medios no prueban independencia; tampoco se exige por principio un operador distinto si el análisis demuestra el objetivo requerido.

- Error A: Una medida puntual de caudal no prueba comportamiento bajo carga, indisponibilidad o fallo común ni la recuperación de la aplicación.
- Error B: La configuración expresa una intención de conmutar; sin provocar y observar fallos relevantes no acredita que el servicio se recupere.
- Error D: UnSLA describe compromisos contractuales; no demuestra separación de infraestructura ni recuperación efectiva de las transacciones críticas.

- [NCSC CAF B5: Resilient networks and systems](https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems) · Guidance: Capacity; Diversity and dependencies; Physical Resilience: capacidad, dependencias y alternativas útiles · versión: HTML comprobado el04-11-2026. Guía británica aplicada como criterio técnico, sin fuerza normativa AGE o garantía de continuidad por contratar dos operadores. · comprobado: 2026-11-04
- [AT&amp;T Developer: Long Term Evolution, LTE Architecture](https://developer.att.com/technical-library/network-technologies/long-term-evolution) · LTE Architecture: E-UTRAN/eNB, EPC, interfaces S1/X2, MME/S-GW/P-GW; LTE Performance: caudal real depende de usuarios, radio y backhaul · versión: Página histórica del operador, HTML comprobado el04-11-2026. Solo estructura funcional y dependencia del rendimiento. Se excluyen proyecciones comerciales, cobertura, tasas y situación de mercado anteriores al despliegueLTE. · comprobado: 2026-11-04

Partida: `3fa0460831a14c6b713e22946fcd6ec7ba82be1b3f1af851f6679ad03f20d8de` · propuesta: `b8b78d88837255bc25d71f3be857f08c460d6fceea5c050046da9f88e3292879`

## MAN-GSI-P19-146

Decisión: pending_review · acción: revise.

Motivo: Conservar caso completo BYOD y correctaD; desarrollar ámbito, información y límites por plataforma sin añadir supuesto artificial.

### Antes

Una flota BYOD necesita acceso a correo y expedientes sin invadir privacidad. ¿Qué enfoque es más adecuado?

- A. Inscribir el dispositivo completo y permitir borrado total e inspección personal sin separar datos ni explicar el alcance al usuario.
- B. Excluir todo control corporativo por tratarse de propiedad personal, permitiendo acceso directo sin postura ni protección de datos.
- C. Enviar todo el tráfico y contenido personal por un túnel corporativo permanente, aunque la aplicación no necesite ese acceso.
- D. UEM/EMM con perfil de trabajo, acceso condicional, apps gestionadas, borrado selectivo y política transparente de privacidad. **(correcta)**

Explicación: BYOD exige equilibrio entre protección corporativa y minimización de datos personales.

### Propuesta

Una flota BYOD necesita acceso a correo y expedientes sin invadir privacidad. ¿Qué enfoque es más adecuado?

- A. Inscribir el dispositivo completo y permitir borrado total e inspección personal sin separar datos ni explicar el alcance al usuario.
- B. Excluir todo control corporativo por tratarse de propiedad personal, permitiendo acceso directo sin postura ni protección de datos.
- C. Enviar todo el tráfico y contenido personal por un túnel corporativo permanente, aunque la aplicación no necesite ese acceso.
- D. UEM/EMM con perfil de trabajo, acceso condicional, apps gestionadas, borrado selectivo y política transparente de privacidad. **(correcta)**

Explicación: La protección corporativa en BYOD debe ajustarse al ámbito laboral: aplicaciones gestionadas, separación de datos, acceso condicionado a requisitos y retirada selectiva cuando el modo lo permite. El propietario debe conocer finalidad y alcance de la gestión. Un perfil no concede inspección general de su vida personal ni garantiza privacidad por sí solo; plataforma, aplicación y política determinan las capacidades reales.

- Error A: Inscribir todo el dispositivo no justifica inspección personal indiscriminada o borrado total; faltan separación, información y proporcionalidad del control.
- Error B: La propiedad personal no elimina las obligaciones de proteger expedientes y correo; pueden aplicarse controles compatibles sobre acceso, apps y datos laborales.
- Error C: Enviar contenido personal por un túnel permanente excede el ámbito necesario descrito y no sustituye separar ni proteger las aplicaciones corporativas.

- [Microsoft Learn: What is Intune app management?](https://learn.microsoft.com/en-us/intune/app-management/overview) · Mobile Application Management basics: apps/datos, MDM+MAM y MAM en dispositivos no inscritos · versión: HTML público comprobado el04-11-2026. Capacidades y compatibilidad dependen de apps/plataforma; no gestión universal de cualquier app ni acceso a todo el dispositivo por proteger una aplicación. · comprobado: 2026-11-04
- [Android Enterprise: Work profile on personally-owned devices](https://developers.google.com/android/work/requirements/work-profile) · Introducción; Device security:2.2 Work security challenge y2.5 Wipe and lock · versión: Requisitos HTML comprobados el04-11-2026. Perfil laboral en dispositivo personal, distinto de modo corporativo; no se universalizan versiones, matriz de soporte o facultades de una plataforma a todo contenedor. · comprobado: 2026-11-04
- [BOE/DOUE: Reglamento(UE)2016/679, RGPD](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos5.1a–c/e: transparencia,finalidad,minimización y conservación;13.1: información;25.1–2: diseño y defecto · versión: Texto original DOUE04-05-2016, apartados comprobados el04-11-2026. Principios generales, no dictamen sobre un tratamiento concreto o afirmación de que toda monitorización sea ilícita. No se equipara conformidadMDM con cumplimientoRGPD. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04

Partida: `1ddb403c3d8f068ea054c36700efeeb48e479b6840a847135679b131562408b9` · propuesta: `cd7336cbd19585bc31bd0728353beed1a225283bbabd26bdc65a2f7c1c2c6524`

## MAN-GSI-P19-148

Decisión: pending_review · acción: revise.

Motivo: Conservar incumplimiento y correctaA; sustituir velocidad por reinscripción como error próximo, distinguiendo identidad, túnel y postura.

### Antes

Un dispositivo no cumple versión mínima y está rooteado. ¿Qué combinación es más coherente?

- A. Marcarlo no conforme y bloquear o limitar acceso mediante acceso condicional hasta remediación. **(correcta)**
- B. Permitir acceso completo siempre que el usuario supere MFA, dejando la postura del dispositivo para una revisión posterior.
- C. Considerarlo conforme después de instalar una VPN, aunque permanezcan el rooteo y la versión mínima incumplida.
- D. Conceder acceso según la velocidad de la conexión móvil, sin utilizar señales de integridad o cumplimiento del terminal.

Explicación: MFA no compensa necesariamente un endpoint comprometido/no conforme.

### Propuesta

La política de acceso exige versión mínima y ausencia de root. Un móvil incumple ambas condiciones. ¿Qué combinación es coherente?

- A. Marcarlo no conforme y bloquear o limitar acceso mediante acceso condicional hasta remediación. **(correcta)**
- B. Aceptar MFA como sustituto de la postura y mantener acceso completo mientras se revisa el terminal.
- C. Dar por resuelto el incumplimiento tras instalar VPN, aunque persistan root y versión no admitida.
- D. Restablecer acceso al reinscribirlo en MDM, sin verificar que desaparezcan las causas de incumplimiento.

Explicación: Si la política exige versión mínima y ausencia de root, el terminal no cumple esas condiciones. La evaluación de postura puede alimentar una decisión de acceso condicional que bloquee o limite recursos hasta remediar y volver a comprobar. MFA acredita factores de autenticación; no repara la integridad del dispositivo. La medida concreta debe seguir política y capacidades disponibles, sin presuponer borrado automático.

- Error B: Superar MFA no cambia la versión o el estado de integridad del terminal; no sustituye los requisitos de postura definidos para ese acceso.
- Error C: Una VPN protege un trayecto según su configuración; no deshace el root ni instala la versión mínima exigida por la política.
- Error D: La inscripción habilita gestión, pero no demuestra remediación; hay que comprobar de nuevo las condiciones que originaron la falta de conformidad.

- [Microsoft Learn: Device compliance policies in Intune](https://learn.microsoft.com/en-us/intune/device-security/compliance/overview) · Device compliance policies: evaluación de reglas, ausencia de root/jailbreak, acciones por incumplimiento y acceso condicional · versión: HTML público comprobado el04-11-2026. Postura conforme a una política y momento de evaluación, no certificación de cumplimiento legal, integridad perfecta o remediación instantánea; se excluye extrapolar tablas de plataformas antiguas. · comprobado: 2026-11-04
- [Microsoft Learn: What is Conditional Access?](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview) · Overview; Common signals; Common decisions: identidad,dispositivo,aplicación y riesgo para decidir acceso · versión: HTML público comprobado el04-11-2026. Ejemplo de motor de política; después de primer factor en este producto, sin igualarlo a cortafuegos universal o prometer prevención de todo ataque. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04

Partida: `afbbe18624d48c1ed43a15a6e7933ed58b06099b75eeb78163cc2d570f37473c` · propuesta: `f63154a5066a593670251a052926a3b3d2ed82467a556b6645f4718aac497f26`

## MAN-GSI-P19-047

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa URLLC y claveC; explicar diferencias de escenarios y evitar garantía universal extremo a extremo.

### Antes

¿Qué significa URLLC?

- A. Enhanced Mobile Broadband, orientado a altas tasas de datos y capacidad para servicios de banda ancha móvil.
- B. Massive Machine Type Communications, orientado a gran densidad de dispositivos con tráfico reducido y eficiente.
- C. Ultra-Reliable Low-Latency Communications, orientado a escenarios que requieren alta fiabilidad y baja latencia. **(correcta)**
- D. Una técnica de partición lógica que crea slices con funciones y políticas adaptadas a distintos servicios.

Explicación: URLLC expresa requisitos estrictos, aunque el resultado extremo a extremo depende de toda la arquitectura.

### Propuesta

¿Qué significa URLLC?

- A. Enhanced Mobile Broadband, orientado a altas tasas de datos y capacidad para servicios de banda ancha móvil.
- B. Massive Machine Type Communications, orientado a gran densidad de dispositivos con tráfico reducido y eficiente.
- C. Ultra-Reliable Low-Latency Communications, orientado a escenarios que requieren alta fiabilidad y baja latencia. **(correcta)**
- D. Una técnica de partición lógica que crea slices con funciones y políticas adaptadas a distintos servicios.

Explicación: URLLC desarrolla Ultra-Reliable Low-Latency Communications y expresa escenarios con exigencias altas de fiabilidad y retardo reducido. En el marco IMT se distingue del foco de banda ancha eMBB y de la densidad de dispositivos mMTC. Slicing es una posibilidad de organización de red, no el significado del acrónimo. El resultado de un servicio depende del diseño y de toda su cadena, no solo de la etiqueta URLLC.

- Error A: Enhanced Mobile Broadband corresponde a eMBB y enfatiza banda ancha móvil; no desarrolla el acrónimo URLLC ni su foco en fiabilidad y retardo.
- Error B: Massive Machine Type Communications corresponde a mMTC; la gran densidad y el tráfico reducido no definen por sí solos URLLC.
- Error D: Crear porciones lógicas de red describe networkslicing; puede apoyar servicios con distintos requisitos, pero no desarrolla el nombre URLLC.

- [ITU-R Recommendation M.2083: IMT vision](https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.2083-0-201509-I!!PDF-E.pdf) · §4 Usage scenarios: eMBB,URLLC y mMTC; figura2. PDF13–14, impresas11–12. · versión: M.2083-0(09/2015), apartados comprobados04-11-2026 en083 y reutilizados. Marco de requisitos, no garantía universal extremo a extremo o despliegue efectivo de cada capacidad. · comprobado: 2026-11-04

Partida: `d0a5541684852f28aa8cca20401a4d28f3f5f5bcb964e39eded133243269fff6` · propuesta: `1a4d3dcca77d62e051aa7962a0972a041bcc1f22c84098466c7e14a8931434f6`

## MAN-GSI-P19-060

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación conceptual de generaciones y correctaD; sustituir consejo de examen por criterio técnico sin introducir cronologías comerciales.

### Antes

Un examen pregunta por la evolución 2G→3G→4G→5G. ¿Qué eje es más útil?

- A. Comparar solo la velocidad máxima anunciada, porque arquitectura, latencia, servicios y eficiencia no distinguen las generaciones.
- B. Memorizar sus nombres comerciales suponiendo que cada generación utiliza una arquitectura única e incompatible con toda evolución anterior.
- C. Estudiar únicamente la interfaz radio, ya que el núcleo, la conmutación y los servicios permanecen iguales desde 2G hasta 5G.
- D. Relacionar voz/datos, acceso radio y evolución del core, en vez de memorizar solo velocidades máximas. **(correcta)**

Explicación: La evolución de generaciones se entiende mejor por arquitectura y servicios que por marketing de Mbps.

### Propuesta

Al comparar la evolución2G→3G→4G→5G, ¿qué criterio permite comprender mejor sus diferencias técnicas?

- A. Ordenar las tasas máximas anunciadas y deducir de ellas el modelo de núcleo y de servicios de cada generación.
- B. Asignar a cada generación una arquitectura cerrada, sin evoluciones intermedias ni mecanismos de coexistencia.
- C. Comparar la interfaz radio suponiendo que el núcleo y el tratamiento de voz y datos apenas cambian.
- D. Relacionar voz/datos, acceso radio y evolución del core, en vez de memorizar solo velocidades máximas. **(correcta)**

Explicación: La evolución móvil se comprende relacionando servicios y sus necesidades con acceso radio y núcleo de red. Incluye cambios en tratamiento de voz y datos, mayor orientación a paquetes y formas de coexistencia o transición. Las tasas máximas aisladas no describen esas diferencias. Una generación tiene evoluciones y opciones de despliegue; no equivale siempre a una única arquitectura incompatible con lo anterior.

- Error A: Una tasa comercial máxima no determina arquitectura del núcleo, servicios disponibles o comportamiento real bajo cobertura y carga concretas.
- Error B: Existen evoluciones e interfuncionamiento entre generaciones; tratarlas como arquitecturas cerradas oculta opciones y transiciones que explican su funcionamiento.
- Error C: El núcleo y el tratamiento de servicios también evolucionan; estudiar solo radio deja fuera diferencias esenciales de conmutación y control.

- [Ericsson Technology Review: The history of mobile internet](https://www.ericsson.com/en/reports-and-papers/ericsson-technology-review/articles/mobile-miracles) · 2G: the arrival of SMS and limited data services; 3G: the concept of mobile internet is born; 4G LTE: completing the shift · versión: Artículo de participantes en desarrollo/normalización, 09-02-2024, HTML comprobado el04-11-2026. Síntesis histórica, sin universalizar fechas comerciales, tasas o afirmar que3G inventó paquetes o carecía de dominio de paquetes. · comprobado: 2026-11-04
- [AT&amp;T Developer: Long Term Evolution, LTE Architecture](https://developer.att.com/technical-library/network-technologies/long-term-evolution) · LTE Architecture: E-UTRAN/eNB, EPC, interfaces S1/X2, MME/S-GW/P-GW; LTE Performance: caudal real depende de usuarios, radio y backhaul · versión: Página histórica del operador, HTML comprobado el04-11-2026. Solo estructura funcional y dependencia del rendimiento. Se excluyen proyecciones comerciales, cobertura, tasas y situación de mercado anteriores al despliegueLTE. · comprobado: 2026-11-04
- [Ericsson: Voice and communication services in4G and5G networks](https://www.ericsson.com/en/reports-and-papers/white-papers/voice-and-communication-services-in-4g-and-5g-networks) · VoLTE – A foundation for a global communication services ecosystem; Voice in5G networks: figuras1–3, EPC/IMS/CSFB y SA/NSA · versión: White paper julio2022, HTML comprobado el04-11-2026. Alcance arquitectónico y perfiles; sin garantías comerciales, despliegue real o afirmaciones de cobertura universal. CSFB cambia al dominio de circuitos; VoLTE usa IMS sobre LTE/EPC. · comprobado: 2026-11-04

Partida: `2fd40e37d130eac958b899c6d907c5dbb769d53a80f6979197e42d5c6609a524` · propuesta: `c62c122fc7a1b93bf0c3042df9fbc0040b0995ff606e91f3016ccd9c8f3f811a`

## MAN-GSI-P19-075

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa CGNAT y claveA; matizar conectividad entrante y VPN sin afirmar imposibilidad universal.

### Antes

¿Qué problema puede introducir CGNAT para ciertos servicios empresariales móviles?

- A. Dificultar conectividad entrante directa y algunos escenarios de direccionamiento extremo a extremo. **(correcta)**
- B. Asignar una dirección pública exclusiva a cada terminal y facilitar la publicación directa de servicios desde el móvil.
- C. Proporcionar direccionamiento estable extremo a extremo aunque el terminal cambie de celda, red u operador.
- D. Sustituir las funciones de firewall y control de acceso porque las conexiones entrantes quedan autenticadas por el NAT.

Explicación: Las redes móviles pueden usar NAT a gran escala; hay que validar requisitos de IP, VPN y entrada.

### Propuesta

¿Qué problema puede introducir CGNAT para ciertos servicios empresariales móviles?

- A. Dificultar conectividad entrante directa y algunos escenarios de direccionamiento extremo a extremo. **(correcta)**
- B. Asignar una dirección pública exclusiva a cada terminal y facilitar la publicación directa de servicios desde el móvil.
- C. Proporcionar direccionamiento estable extremo a extremo aunque el terminal cambie de celda, red u operador.
- D. Sustituir las funciones de firewall y control de acceso porque las conexiones entrantes quedan autenticadas por el NAT.

Explicación: CGNAT comparte direccionesIPv4 públicas entre abonados y traduce conexiones en la red del operador. Publicar un servicio entrante puede requerir coordinación de mapeos y puertos fuera del control del cliente; algunos protocolos también asumen conectividad extremo a extremo que debe comprobarse. No implica que toda VPN falle: acceso contratado, direccionamiento, mecanismos de traversal y política condicionan el resultado.

- Error B: La compartición de una dirección pública es precisamente una característica de CGN; no asigna por sí sola unaIPv4 pública exclusiva a cada terminal.
- Error C: La traducción y sus mapeos no garantizan una dirección estable al cambiar de acceso u operador; persistencia de sesión requiere mecanismos adicionales.
- Error D: NAT traduce direcciones y puertos; no autentica por sí mismo las conexiones ni sustituye cortafuegos, autorización o controles de acceso.

- [IETF RFC6269: Issues with IP Address Sharing](https://www.rfc-editor.org/rfc/rfc6269.html) · §5 Port Allocation; §5.2 Incoming Ports; §5.2.1 Port Negotiation · versión: Informational, junio2011, HTML comprobado04-11-2026. Dependencias de puertos/operador para entrada bajoCGN; no afirmar que todoVPN falla o queNAT autentica conexiones. No se adoptan sus previsiones de despliegue. · comprobado: 2026-11-04

Partida: `ffc4a4139950a44c77be168bbadf9e04ab0daf60a58e5ead9d1beda8fc2645c3` · propuesta: `af9a26cd352d3fad63b59922755d28a1ca28293dbc266af50f3c625d5463b435`

## MAN-GSI-P19-076

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa APN/DNN y claveD; localizar equivalencia en§5.9.6 y distinguir slice/QFI de conectividad.

### Antes

¿Qué es un APN/DNN conceptualmente?

- A. La identidad pública utilizada para registrar al abonado y direccionar servicios dentro de una arquitectura IMS.
- B. El identificador de una porción lógica de red 5G que combina tipo de servicio y diferenciador de slice.
- C. El identificador que distingue un flujo de QoS dentro de una sesión de datos y lo asocia a su tratamiento.
- D. Un identificador/configuración que selecciona conectividad/servicio de datos del abonado hacia redes de datos, según generación. **(correcta)**

Explicación: APN es habitual en EPC; DNN cumple un papel análogo en 5G para selección de red de datos.

### Propuesta

¿Qué es un APN/DNN conceptualmente?

- A. La identidad pública utilizada para registrar al abonado y direccionar servicios dentro de una arquitectura IMS.
- B. El identificador de una porción lógica de red 5G que combina tipo de servicio y diferenciador de slice.
- C. El identificador que distingue un flujo de QoS dentro de una sesión de datos y lo asocia a su tratamiento.
- D. Un identificador/configuración que selecciona conectividad/servicio de datos del abonado hacia redes de datos, según generación. **(correcta)**

Explicación: APN y DNN identifican la red de datos o conectividad solicitada según la generación; TS23.501 declara equivalentes sus significados e información. El DNN participa en selección de funciones y políticas de una sesión PDU. No es la identidad públicaIMS, el identificador de sliceS-NSSAI ni el de flujoQoSQFI. Un DNN no implica necesariamente salida aInternet ni una garantía de capacidad; requiere suscripción, configuración y políticas correspondientes.

- Error A: Una identidad pública del abonado para serviciosIMS identifica al usuario en ese ámbito; no nombra la red de datos seleccionada por APN/DNN.
- Error B: S-NSSAI identifica una slice mediante tipo y, cuando procede, diferenciador; varias instancias pueden utilizar el mismo DNN sin que sean el mismo identificador.
- Error C: QFI identifica un flujo QoS dentro de una sesión PDU; no selecciona por sí mismo la red de datos ni equivale a DNN.

- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §5.6.1 PDU/DNN, §5.7.1.1 QFI, §5.9.6 DNN/APN y §5.15.1–2 S-NSSAI/recursos compartidos. PDF141/177/244–245/252–254, impresas140/176/243–244/251–253. · versión: V18.12.0(2026-01), Release18, comprobado04-11-2026. Se reutiliza el original723 páginas de084 y se leen cuatro páginas adicionales para086; no lectura íntegra ni afirmación de última versión. DNN no equivale a identidadIMS, slice o flujoQoS. · comprobado: 2026-11-04

Partida: `9ce353f4d3ffc6d7862533c995dbb4271ba0a3a3cc0962b494a2227e3235ee77` · propuesta: `173c7633e3f2081d51430f6eaf597c6283acbc1022378276d55a7eabe8be8ea8`

## MAN-GSI-P19-080

Decisión: pending_review · acción: revise.

Motivo: Resolver ambigüedad confirmada de riesgos múltiples; conservar dependencia/dominio de fallo y claveB mediante elección de valoración de continuidad.

### Antes

Una sede usa 5G como único acceso para un servicio esencial. ¿Qué riesgo debe evaluarse especialmente?

- A. Contratar dos perfiles del mismo operador y asumir que son independientes sin revisar emplazamientos, energía ni core compartido.
- B. Dependencia de cobertura/capacidad y de un único operador/dominio de fallo; considerar redundancia real. **(correcta)**
- C. Medir capacidad en una prueba puntual de buena cobertura sin analizar congestión, variación temporal ni indisponibilidad.
- D. Dar por garantizada la continuidad porque existe network slicing, sin comprobar acceso alternativo ni dependencias comunes.

Explicación: Un enlace rápido sigue siendo un SPOF si no existe diversidad de operador/medio cuando el servicio lo exige.

### Propuesta

Una sede presta un servicio esencial mediante un único acceso 5G. ¿Qué valoración permite evaluar su continuidad?

- A. La capacidad anunciada del acceso basta para considerar tolerable la caída del único enlace de la sede.
- B. Persisten dependencias de cobertura, capacidad y dominio de fallo; hay que contrastarlas con la continuidad exigida. **(correcta)**
- C. Dos perfiles del mismo operador acreditan diversidad aunque no se conozcan infraestructura y alimentación compartidas.
- D. Una slice contratada acredita un acceso alternativo independiente aunque se conserve la misma conexión física.

Explicación: Un único acceso puede ser un punto único de fallo aunque entregue buen caudal. Hay que contrastar cobertura y capacidad en las condiciones previstas y dependencias de operador, infraestructura o energía con el objetivo de continuidad. La redundancia exige diversidad efectiva y pruebas: dos perfiles o una slice no acreditan por sí solos otro dominio de fallo. Las slices pueden compartir funciones y recursos de red.

- Error A: El caudal medido o anunciado no demuestra tolerancia a la pérdida del acceso; disponibilidad y capacidad son requisitos distintos del servicio.
- Error C: Dos perfiles pueden seguir compartiendo radio, núcleo, energía u otras dependencias; el número de perfiles no demuestra independencia efectiva.
- Error D: Slicing organiza lógicamente capacidades y recursos que pueden compartirse; no acredita otro enlace físico ni elimina un fallo común del acceso.

- [NCSC CAF B5: Resilient networks and systems](https://www.ncsc.gov.uk/collection/cyber-assessment-framework/caf-objective-b/principle-b5-resilient-networks-and-systems) · Guidance: Capacity; Diversity and dependencies; Physical Resilience: capacidad, dependencias y alternativas útiles · versión: HTML comprobado el04-11-2026. Guía británica aplicada como criterio técnico, sin fuerza normativa AGE o garantía de continuidad por contratar dos operadores. · comprobado: 2026-11-04
- [AT&amp;T Developer: Long Term Evolution, LTE Architecture](https://developer.att.com/technical-library/network-technologies/long-term-evolution) · LTE Architecture: E-UTRAN/eNB, EPC, interfaces S1/X2, MME/S-GW/P-GW; LTE Performance: caudal real depende de usuarios, radio y backhaul · versión: Página histórica del operador, HTML comprobado el04-11-2026. Solo estructura funcional y dependencia del rendimiento. Se excluyen proyecciones comerciales, cobertura, tasas y situación de mercado anteriores al despliegueLTE. · comprobado: 2026-11-04
- [ETSI TS123501: System architecture for the5G System](https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/18.12.00_60/ts_123501v181200p.pdf) · TS23.501 §5.6.1 PDU/DNN, §5.7.1.1 QFI, §5.9.6 DNN/APN y §5.15.1–2 S-NSSAI/recursos compartidos. PDF141/177/244–245/252–254, impresas140/176/243–244/251–253. · versión: V18.12.0(2026-01), Release18, comprobado04-11-2026. Se reutiliza el original723 páginas de084 y se leen cuatro páginas adicionales para086; no lectura íntegra ni afirmación de última versión. DNN no equivale a identidadIMS, slice o flujoQoS. · comprobado: 2026-11-04

Partida: `0ff771400e363376f81ef942da8bd6505092e9e0ac1427b49c5e2a186ac16fc6` · propuesta: `7224b209b77f502604fe48f09df78ac7296ec419e8ed2813eeb7a730126260b2`

## MAN-GSI-P19-147

Decisión: pending_review · acción: revise.

Motivo: Conservar caso de pérdida COBO y correctaB; comparar respuestas parciales plausibles y verificar ejecución/revocación sin promesa inmediata.

### Antes

Se pierde un móvil COBO con datos sensibles. ¿Qué respuesta inicial encaja mejor?

- A. Mantener el dispositivo activo y esperar su devolución antes de revocar sesiones para conservar opciones de localización.
- B. Revocar acceso/tokens, localizar si la política lo permite, bloquear o borrar remotamente y registrar/gestionar el incidente. **(correcta)**
- C. Cambiar la contraseña del usuario sin revocar tokens, bloquear el terminal, proteger datos ni registrar el incidente.
- D. Desactivar la plataforma UEM para impedir nuevas órdenes, manteniendo operativas las credenciales ya emitidas al móvil.

Explicación: En COBO la organización tiene alto control y debe actuar sobre identidad, dispositivo y datos.

### Propuesta

Se pierde un móvil COBO con datos sensibles. ¿Qué respuesta inicial encaja mejor?

- A. Cambiar la contraseña y cerrar el incidente, dando por eliminadas las sesiones y las copias locales existentes.
- B. Revocar acceso/tokens, localizar si la política lo permite, bloquear o borrar remotamente y registrar/gestionar el incidente. **(correcta)**
- C. Enviar borrado remoto y mantener las credenciales hasta que el terminal confirme la orden para conservar su gestión.
- D. Eliminar el registro UEM y considerar retirados por esa acción los certificados, sesiones y datos del equipo.

Explicación: La pérdida requiere actuar sobre identidad, terminal y datos y gestionar el incidente. Se revocan accesos y credenciales pertinentes y se ordenan bloqueo, localización autorizada o borrado según política y plataforma. En COBO la propiedad y el uso son corporativos, pero no se presume que una orden remota se ejecute sin conexión ni que todas las sesiones se invaliden al instante. Hay que verificar efectos y conservar evidencia necesaria.

- Error A: Cambiar contraseña no demuestra por sí solo revocación de tokens o sesiones ni eliminación de datos ya descargados al dispositivo perdido.
- Error C: Esperar confirmación de borrado manteniendo accesos expuestos no contiene adecuadamente el incidente; identidad y dispositivo deben tratarse coordinadamente según la plataforma.
- Error D: Eliminar un registro de gestión no prueba revocación en los servicios que aceptan credenciales ni retirada efectiva de las copias locales.

- [Microsoft Learn: Revoke user access in EntraID](https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access) · Overview; Microsoft Entra environment; When access is revoked; Best practices: baja, tokens, sesiones y datos locales · versión: HTML público actualizado19-06-2026, comprobado04-11-2026. Sin ejecutar cmdlets, copiar ejemplos de contraseña o prometer revocación inmediata en toda app. Datos locales pueden persistir sin conexión; la baja no se limita al registroMDM. · comprobado: 2026-11-04
- [Microsoft Learn: Device actions in Intune](https://learn.microsoft.com/en-us/intune/device-management/actions/) · Retire frente a Wipe; Check the status of the action: estado de servidor y ejecución en cliente · versión: HTML público comprobado el04-11-2026. Se comprueban definiciones y necesidad de verificar ejecución, no cuotas, interfaz o disponibilidad uniforme entre plataformas. El borrado selectivo conserva ámbito personal cuando el modo lo permite. · comprobado: 2026-11-04
- [Canadian Centre for Cyber Security: Security considerations for mobile device deployments](https://www.cyber.gc.ca/en/guidance/security-considerations-mobile-device-deployments-itsap70002) · Mobile device deployment models: COBO,COPE,BYOD; Unified endpoint management · versión: ITSAP70.002, HTML modificado22-10-2024 y comprobado04-11-2026. Solo definiciones propiedad/uso y alcance UEM; no norma española. Se excluyen generalizaciones de riesgo cero en COBO y de ausencia de controles viables en BYOD. · comprobado: 2026-11-04
- [NIST SP800-124r2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · §3.2.3–3.2.4; §4.1.1–4.1.5; §4.2.1/4.2.2/4.2.7; §4.3.1/4.3.3/4.3.12; §5.1.3/5.4.2 y comienzo5.5. PDF25–33/35–36/42/44–46/54–56; impresas15–23/25–26/32/34–36/44–46. · versión: Final mayo2023, apartados seleccionados comprobados el04-11-2026; original61 páginas y tres renders conservados. No lectura íntegra ni traslación de mandatos federales estadounidenses. EMM/UEM pueden solaparse; MCM no se desarrolla en esta guía. Borrado remoto no es control infalible. · comprobado: 2026-11-04

Partida: `8ed25fe5ded40ff88d6a8d578a21a5352f04231295ff5ad0b208312c606d5e81` · propuesta: `59915be91a69af829cbb54408d5b3944913098b80eca504667133ed726f3731a`

## MAN-GSI-P19-101

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa de arquitectura y claveC; distinguir cadena completa, partes y función multipunto opcional.

### Antes

¿Qué describe mejor una arquitectura de videoconferencia?

- A. El subsistema de captura que obtiene audio y vídeo, los digitaliza y aplica el codec seleccionado antes de enviarlos.
- B. La señalización que localiza participantes, negocia capacidades y establece o termina la sesión de comunicación.
- C. Captura y codificación, señalización/negociación, transporte de medios, función multipunto si existe y decodificación/presentación. **(correcta)**
- D. El servicio de grabación que almacena la reunión y publica posteriormente el archivo para consulta de los participantes.

Explicación: Separar señalización, medios y procesamiento multipunto ayuda a diseñar e interoperar.

### Propuesta

¿Qué describe mejor una arquitectura de videoconferencia?

- A. El subsistema de captura que obtiene audio y vídeo, los digitaliza y aplica el codec seleccionado antes de enviarlos.
- B. La señalización que localiza participantes, negocia capacidades y establece o termina la sesión de comunicación.
- C. Captura y codificación, señalización/negociación, transporte de medios, función multipunto si existe y decodificación/presentación. **(correcta)**
- D. El servicio de grabación que almacena la reunión y publica posteriormente el archivo para consulta de los participantes.

Explicación: La arquitectura cubre la cadena de capturar y codificar, establecer y negociar la comunicación, transportar medios y reconstruirlos para presentar audio y vídeo. Una conferencia con varios participantes puede añadir funciones de distribución o procesamiento multipunto según su diseño. Señalización y medios tienen recorridos y funciones distintos; grabar es una función posible, no la definición de la arquitectura completa.

- Error A: La captura y codificación produce el flujo, pero faltan establecimiento, transporte, recepción y presentación para describir toda la comunicación.
- Error B: La señalización controla participantes y parámetros; no realiza por sí sola captura, codificación, transmisión de medios y reproducción.
- Error D: La grabación conserva una reunión para usos posteriores; no sustituye las funciones necesarias para mantener la comunicación interactiva de sus participantes.

- [IETF RFC8825: Overview, Real-Time Protocols for Browser-Based Applications](https://www.rfc-editor.org/rfc/rfc8825.html) · §2.2 relaciónAPI/protocolo y endpoints; §3 Architecture and Functionality Groups, figuras1–2; §4–7 transporte, protección, formatos y gestión · versión: Enero2021, HTML comprobado04-11-2026. SeparaAPI, señalización de aplicación, transporte, formatos y presentación; servidor/función multipunto depende del diseño. No exige un codec o servicio de mezcla único. · comprobado: 2026-11-04
- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04

Partida: `0b74907aab20bec623d43ed4932313ae99dc118c3d396c004a7afcc9f8c05720` · propuesta: `8d260d6dc2c7c954cac4fec709dce8fce3a30f129a5dbf723bc297f2b5d5e6cb`

## MAN-GSI-P19-103

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa de relación SIP/H.323 y claveD; matizar familiaH.323, interworking y transcodificación independiente.

### Antes

¿Qué relación hay entre SIP y H.323?

- A. SIP es el protocolo de transporte multimedia de H.323 y reemplaza a RTP en el envío de audio y vídeo.
- B. H.323 es un codec audiovisual que SIP negocia dentro de SDP para seleccionar la compresión.
- C. SIP y H.323 son perfiles del mismo estándar de señalización y utilizan una estructura de mensajes común.
- D. Son familias de señalización/control diferentes que pueden encontrarse en videoconferencia y requerir interoperabilidad/gateway. **(correcta)**

Explicación: Ambos resuelven control de sesiones con arquitecturas diferentes.

### Propuesta

¿Qué relación hay entre SIP y H.323?

- A. SIP es el protocolo de transporte multimedia de H.323 y reemplaza a RTP en el envío de audio y vídeo.
- B. H.323 es un codec audiovisual que SIP negocia dentro de SDP para seleccionar la compresión.
- C. SIP y H.323 son perfiles del mismo estándar de señalización y utilizan una estructura de mensajes común.
- D. Son familias de señalización/control diferentes que pueden encontrarse en videoconferencia y requerir interoperabilidad/gateway. **(correcta)**

Explicación: SIP yH.323 pertenecen a arquitecturas diferentes para establecer y controlar comunicaciones multimedia. H.323 abarca una familia de componentes y protocolos; no es un codec. Para comunicar ambos entornos puede necesitarse una función de interworking que traduzca señalización, estados y capacidades. Compartir transporte RTP o codecs no convierte sus mensajes de control en un mismo protocolo ni obliga siempre a transcodificar medios.

- Error A: SIP establece y controla sesiones; no es el transporte de muestras audiovisuales ni reemplaza a RTP dentro de H.323.
- Error B: H.323 es un marco para comunicaciones multimedia, con señalización y componentes; no un formato de compresión que SDP seleccione como codec.
- Error C: Tienen modelos y mensajes de control diferentes; una función de interworking traduce entre ellos en lugar de tratarlos como perfiles idénticos.

- [RFC4123: SIP-H.323 Interworking Requirements](https://www.rfc-editor.org/rfc/rfc4123.html) · §1 Introduction; §2 Definitions; §3 Functionality within the SIP-H.323 IWF · versión: Informational, julio2005, HTML comprobado04-11-2026. Documento histórico con notaIESG de cautela, usado para funciones de interworking, no receta actual de despliegue/seguridad; transcodificación es distinta de conversión de señalización. · comprobado: 2026-11-04
- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04

Partida: `e05440dd461f4375ab42a2fdbe008fe7327aff0f95ecdd2dd9d39e333403b9c1` · propuesta: `ae5e6731966a17f4946bc30d4f67f1522c23cdd9385714af05e4e25ebb34d51a`

## MAN-GSI-P19-104

Decisión: pending_review · acción: revise.

Motivo: Conservar medios RTP/control RTCP y claveC; cuatro pares técnicos cercanos de longitud comparable, sin distractoresDNS/SNMP ajenos.

### Antes

¿Qué transporta normalmente audio/vídeo en una solución SIP o H.323?

- A. SIP INVITE como flujo de vídeo.
- B. DNS.
- C. RTP, acompañado por RTCP para control/estadísticas. **(correcta)**
- D. SNMP traps.

Explicación: Señalización y medios se separan: RTP lleva el contenido en tiempo real.

### Propuesta

En videoconferencia IP, ¿qué pareja corresponde al transporte de audio/vídeo y a sus informes de control y estadísticas?

- A. SIP y SDP.
- B. ICE y STUN.
- C. RTP y RTCP. **(correcta)**
- D. DTLS y SRTP.

Explicación: RTP transporta medios en tiempo real y RTCP aporta informes de recepción, participantes y estadísticas asociados. La separación permite observar distribución y adaptar la aplicación; los informes no reservan capacidad ni garantizan entrega. SIP/SDP, ICE/STUN y DTLS/SRTP atienden establecimiento/descripción, conectividad y protección con funciones diferentes.

- Error A: SIP controla sesiones y SDP describe parámetros; esa pareja no transporta las muestras audiovisuales junto con los informes de recepción RTCP.
- Error B: ICE comprueba pares de conectividad usando STUN; descubrir una ruta no equivale al transporte de muestras e informes de distribución de RTP/RTCP.
- Error D: DTLS puede intervenir en establecimiento de claves y SRTP protege medios; no forman la pareja de transporte RTP e informes RTCP solicitada.

- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04
- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04
- [IETF: RFC8866, Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866.html) · §1 descripción sin protocolo de transporte; §3.1 SIP y offer/answer; §2 Media Description · versión: Enero de 2021, HTML comprobado el 04-11-2026. Sustituye RFC4566. Describir parámetros no es transportar audio ni negociar de forma autónoma sin procedimientos de oferta/respuesta. · comprobado: 2026-11-04
- [IETF RFC8445: Interactive Connectivity Establishment](https://www.rfc-editor.org/rfc/rfc8445.html) · §1 Introduction; §2 Overview of ICE, candidatos y comprobaciones de pares; §4 Terminology · versión: Julio2018, sustituyeRFC5245, HTML comprobado04-11-2026. ICE utilizaSTUN yTURN; se contrastan candidatos host/server-reflexive/relayed sin prometer conectividad bajo cualquier política de red. · comprobado: 2026-11-04
- [IETF RFC8489: Session Traversal Utilities for NAT](https://www.rfc-editor.org/rfc/rfc8489.html) · Abstract; §1 Introduction; §2 Overview of Operation, Binding y dirección reflejada · versión: Febrero2020, sustituyeRFC5389, HTML comprobado04-11-2026. Herramienta para mapeos, comprobaciones y mantenimiento; no solución completa por sí sola ni relay de medios básico. Dirección observada respecto del servidor, no siempreIP pública única. · comprobado: 2026-11-04
- [IETF: RFC3711, The Secure Real-time Transport Protocol](https://www.rfc-editor.org/rfc/rfc3711.html) · §1 Introduction y §2 Goals and Features: protección RTP/RTCP; §7 gestión de claves · versión: Marzo de 2004, apartados HTML comprobados el 04-11-2026. Alcance y dependencia de perfil/claves; no recomendación de algoritmos históricos ni cifrado automático de señalización o de todo IP. · comprobado: 2026-11-04
- [IETF RFC5764: DTLS Extension to Establish Keys for SRTP](https://datatracker.ietf.org/doc/html/rfc5764) · Abstract y §1 Introduction: uso deDTLS para establecer clavesSRTP · versión: Mayo2010, abstract HTML comprobado04-11-2026. Solo distinción funcional entre establecimiento de claves y medios protegidos; no receta criptográfica actual ni lectura íntegra de extensiones. · comprobado: 2026-11-04

Partida: `b95f644da35e5cf32eba40c9d05c49410d7390a91e282d4165ee1b807fbc9791` · propuesta: `d79dd4355319ab0bdaf46d5642a47ec5ebdebbeb3e1e04681c88e620594d6981`

## MAN-GSI-P19-105

Decisión: pending_review · acción: revise.

Motivo: Conservar definición completa WebRTC y claveB; explicar coordinación W3C/IETF, endpoints y señalización elegida por la aplicación.

### Antes

¿Qué es WebRTC?

- A. Especificación de señalización que establece llamadas mediante mensajes de control y negociación de sesión.
- B. Un conjunto de APIs y protocolos para comunicaciones de audio/vídeo/datos en tiempo real entre navegadores o aplicaciones compatibles. **(correcta)**
- C. Servicio centralizado que retransmite el tráfico multimedia cuando no existe conectividad directa.
- D. Formato de encapsulación para distribuir exclusivamente vídeo mediante streaming HTTP adaptativo.

Explicación: W3C define las APIs; IETF define protocolos de transporte/conectividad relacionados.

### Propuesta

¿Qué es WebRTC?

- A. Especificación de señalización que establece llamadas mediante mensajes de control y negociación de sesión.
- B. Un conjunto de APIs y protocolos para comunicaciones de audio/vídeo/datos en tiempo real entre navegadores o aplicaciones compatibles. **(correcta)**
- C. Servicio centralizado que retransmite el tráfico multimedia cuando no existe conectividad directa.
- D. Formato de encapsulación para distribuir exclusivamente vídeo mediante streaming HTTP adaptativo.

Explicación: WebRTC combina APIs y una suite de protocolos para comunicación interactiva de medios y datos. W3C especifica las APIs y IETF los protocolos correspondientes; existen endpoints de navegador y aplicaciones nativas. La aplicación elige cómo intercambiar señalización según su diseño. WebRTC no equivale a un codec, a un relay concreto ni a distribución exclusiva de vídeo mediante streamingHTTP.

- Error A: La señalización para establecer la comunicación es necesaria, pero su mecanismo de intercambio pertenece al diseño de aplicación; no define por sí sola WebRTC.
- Error C: Un relay como TURN puede ayudar a atravesar restricciones de conectividad; es una función de apoyo y no el conjunto de APIs y protocolos WebRTC.
- Error D: WebRTC admite comunicación interactiva de audio, vídeo y datos; no es un formato limitado a distribución de vídeo porHTTP adaptativo.

- [W3C: WebRTC, Real-Time Communication in Browsers](https://www.w3.org/TR/webrtc/) · Abstract; definición y alcance de APIs ECMAScript/WebIDL para medios y datos · versión: Recommendation13-03-2025, HTML público comprobado04-11-2026. DefineAPI en coordinación conIETF; no se afirma que todos los dispositivos implementen cadaAPI o que imponga protocolo de señalización de la aplicación. · comprobado: 2026-11-04
- [IETF RFC8825: Overview, Real-Time Protocols for Browser-Based Applications](https://www.rfc-editor.org/rfc/rfc8825.html) · §2.2 relaciónAPI/protocolo y endpoints; §3 Architecture and Functionality Groups, figuras1–2; §4–7 transporte, protección, formatos y gestión · versión: Enero2021, HTML comprobado04-11-2026. SeparaAPI, señalización de aplicación, transporte, formatos y presentación; servidor/función multipunto depende del diseño. No exige un codec o servicio de mezcla único. · comprobado: 2026-11-04

Partida: `a7868b047184e784a7bc3ace7c0b2d2c2e7048ee6c92ee642095a9a13ef85f1d` · propuesta: `b1cc42d1ffa144f180125b94882388c4f643c45220f5a12469a0743f662e7054`

## MAN-GSI-P19-106

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción WebRTC/codec y claveA; cuatro clasificaciones afirmativas plausibles, sin pista de estructuraSí/No.

### Antes

¿WebRTC es un codec?

- A. No; utiliza codecs y protocolos, pero WebRTC es una plataforma/conjunto de APIs y mecanismos de comunicación en tiempo real. **(correcta)**
- B. Sí; define un formato de compresión audiovisual único que sustituye a Opus, VP8, VP9 y H.264.
- C. No; es únicamente un protocolo de señalización que establece sesiones sin transportar medios.
- D. No; es un servicio centralizado de videoconferencia que mezcla siempre los flujos en un servidor.

Explicación: No confundir plataforma de comunicaciones con formato de codificación.

### Propuesta

¿Cómo se clasifica WebRTC respecto de un codec?

- A. Un conjunto de APIs y protocolos de tiempo real que utiliza codecs para representar medios. **(correcta)**
- B. Un formato de compresión audiovisual que define el mismo bitstream para toda sesión compatible.
- C. Un protocolo de señalización que negocia sesiones, dejando fuera el transporte de los medios.
- D. Un servicio de conferencia centralizado que mezcla todos los flujos antes de distribuirlos.

Explicación: WebRTC aporta mecanismos de comunicación interactiva y APIs que utilizan formatos de medios. Un codec define cómo representar y reconstruir audio o vídeo; es una pieza que WebRTC utiliza, no su clasificación. La suite incluye transporte, conectividad y protección, y no impone una única topología de conferencia, un bitstream audiovisual universal o un servidor de mezcla obligatorio.

- Error B: Los formatos de compresión son codecs que pueden negociarse;WebRTC no define un único bitstream audiovisual que sustituya todos esos formatos.
- Error C: Reducir WebRTC a señalización omite transporte, conectividad, seguridad y APIs; además, la aplicación decide el intercambio de su señalización.
- Error D: El diseño puede incluir servidores de conferencia, pero WebRTC no es un servicio centralizado que obligue a mezclar todo el tráfico.

- [W3C: WebRTC, Real-Time Communication in Browsers](https://www.w3.org/TR/webrtc/) · Abstract; definición y alcance de APIs ECMAScript/WebIDL para medios y datos · versión: Recommendation13-03-2025, HTML público comprobado04-11-2026. DefineAPI en coordinación conIETF; no se afirma que todos los dispositivos implementen cadaAPI o que imponga protocolo de señalización de la aplicación. · comprobado: 2026-11-04
- [IETF RFC8825: Overview, Real-Time Protocols for Browser-Based Applications](https://www.rfc-editor.org/rfc/rfc8825.html) · §2.2 relaciónAPI/protocolo y endpoints; §3 Architecture and Functionality Groups, figuras1–2; §4–7 transporte, protección, formatos y gestión · versión: Enero2021, HTML comprobado04-11-2026. SeparaAPI, señalización de aplicación, transporte, formatos y presentación; servidor/función multipunto depende del diseño. No exige un codec o servicio de mezcla único. · comprobado: 2026-11-04
- [IETF RFC7742: WebRTC Video Processing and Codec Requirements](https://www.rfc-editor.org/rfc/rfc7742.html) · §5 Mandatory-to-Implement Video Codec; §6.1 VP8 y §6.2 H.264, parámetros de codificación/recepción · versión: Marzo2016, HTML comprobado04-11-2026. Ejemplos de formatos y compatibilidad; implementar no es usar ambos en cada sesión. No se atribuyen cuotas universales de calidad,bitrate o ausencia de pérdidas. · comprobado: 2026-11-04
- [IETF RFC7874: WebRTC Audio Codec and Processing Requirements](https://www.rfc-editor.org/rfc/rfc7874.html) · §3 Codec Requirements: implementación de Opus yG.711PCMA/PCMU, otros codecs y oferta · versión: Mayo2016, HTML comprobado04-11-2026; un acceso transitorio falló y la repetición permitió leer§3 completo. La obligación de implementación no impone elegirOpus en toda llamada ni prohíbe otros codecs negociados. · comprobado: 2026-11-04

Partida: `cfb5c0b822e1588a97e5151e811e56179c9d501f82b52a2a0049d69481aa8e27` · propuesta: `9939a35fcc9c9aca3a3489fe61adcc5ebd7a6fa0e7bae4dea387fe1974154bfa`

## MAN-GSI-P19-107

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa ICE y claveB; explicar candidatos y comprobaciones, sin confundir herramienta,relay y marco de conectividad.

### Antes

¿Qué es ICE?

- A. Protocolo de señalización que crea, modifica y finaliza sesiones multimedia entre extremos.
- B. Un marco/protocolo para descubrir y comprobar pares de candidatos de conectividad y atravesar NAT en comunicaciones interactivas. **(correcta)**
- C. Servicio de retransmisión que transporta tráfico cuando no puede establecerse conectividad directa.
- D. Protocolo que permite conocer la dirección pública observada de un cliente y comprobar conectividad básica.

Explicación: RFC 8445 define ICE y su uso de candidatos host, server-reflexive y relayed.

### Propuesta

¿Qué es ICE?

- A. Protocolo de señalización que crea, modifica y finaliza sesiones multimedia entre extremos.
- B. Un marco/protocolo para descubrir y comprobar pares de candidatos de conectividad y atravesar NAT en comunicaciones interactivas. **(correcta)**
- C. Servicio de retransmisión que transporta tráfico cuando no puede establecerse conectividad directa.
- D. Protocolo que permite conocer la dirección pública observada de un cliente y comprobar conectividad básica.

Explicación: ICE reúne candidatos de conectividad, forma pares y comprueba cuáles permiten comunicar los extremos. Utiliza mecanismos STUN y, cuando corresponde, candidatos relayed obtenidos mediante TURN; también existen candidatos locales y reflejados. No sustituye señalización o protección de los medios. Las comprobaciones y políticas seleccionan una ruta viable entre las disponibles, sin garantizar atravesar cualquier NAT o cortafuegos.

- Error A: Crear, modificar o finalizar la sesión es función de señalización como SIP; ICE se centra en comprobar y seleccionar conectividad.
- Error C: Proporcionar un relay de paquetes caracteriza TURN; ICE puede utilizar ese candidato además de probar otras rutas entre los extremos.
- Error D: Conocer dirección reflejada o ejecutar comprobaciones describe herramientas STUN; ICE organiza candidatos, pares y selección usando esas herramientas.

- [IETF RFC8445: Interactive Connectivity Establishment](https://www.rfc-editor.org/rfc/rfc8445.html) · §1 Introduction; §2 Overview of ICE, candidatos y comprobaciones de pares; §4 Terminology · versión: Julio2018, sustituyeRFC5245, HTML comprobado04-11-2026. ICE utilizaSTUN yTURN; se contrastan candidatos host/server-reflexive/relayed sin prometer conectividad bajo cualquier política de red. · comprobado: 2026-11-04
- [IETF RFC8489: Session Traversal Utilities for NAT](https://www.rfc-editor.org/rfc/rfc8489.html) · Abstract; §1 Introduction; §2 Overview of Operation, Binding y dirección reflejada · versión: Febrero2020, sustituyeRFC5389, HTML comprobado04-11-2026. Herramienta para mapeos, comprobaciones y mantenimiento; no solución completa por sí sola ni relay de medios básico. Dirección observada respecto del servidor, no siempreIP pública única. · comprobado: 2026-11-04
- [IETF RFC8656: Traversal Using Relays around NAT](https://www.rfc-editor.org/rfc/rfc8656.html) · Abstract y §1 Introduction: servidor intermediario, dirección relayed y relación con ICE · versión: Febrero2020, sustituyeRFC5766/6156, HTML comprobado04-11-2026. Relay útil por restricciones de conectividad o política/privacidad; no garantía universal de paso o cifrado extremo a extremo por usar elrelay. · comprobado: 2026-11-04

Partida: `ae989dc2a9f7bff605accb2f92904fa5fafb11defd3f72ed7b35229ec803a45a` · propuesta: `8031b4b71050f31b059690a515c31aff6fcd0e990d8db76295da62f0397f488f`

## MAN-GSI-P19-110

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción STUN/TURN y correctaD; reemplazar distractores redundantes por confusiones de función próximas, con longitudes comparables.

### Antes

¿Cuál es la distinción correcta entre STUN y TURN?

- A. STUN retransmite todos los medios como relay y TURN se limita a informar al cliente de su dirección pública observada.
- B. TURN solo comprueba pares de conectividad sin transportar tráfico, mientras STUN mantiene el relay durante toda la sesión.
- C. Ambos cifran los medios extremo a extremo; la diferencia consiste únicamente en el algoritmo criptográfico utilizado.
- D. STUN ayuda a descubrir/comprobar mapeos/conectividad; TURN relaya tráfico cuando es necesario. **(correcta)**

Explicación: Es una trampa clásica de WebRTC/NAT traversal.

### Propuesta

¿Cuál es la distinción correcta entre STUN y TURN?

- A. STUN proporciona el relay de medios;TURN informa de la dirección y el puerto observados desde el servidor.
- B. STUN cifra los medios extremo a extremo;TURN negocia los codecs compatibles para enviar ese flujo.
- C. STUN sustituye la negociación de sesión;TURN determina las rutas de todos los paquetes de la redIP.
- D. STUN ayuda a descubrir/comprobar mapeos/conectividad; TURN relaya tráfico cuando es necesario. **(correcta)**

Explicación: STUN permite obtener la dirección y puerto observados y sirve para comprobaciones y mantenimiento de mapeos en usos definidos. TURN permite asignar una dirección en un servidor que retransmite paquetes entre cliente y pares. Se complementan con ICE y otras funciones de la sesión. STUN solo no resuelve cualquier NAT y usar TURN no implica por sí mismo cifrado extremo a extremo de los medios.

- Error A: Intercambia los papeles: el servicio de retransmisión corresponde a TURN; STUN básico permite descubrir el mapeo observado y realizar comprobaciones.
- Error B: Estas funciones de conectividad no definen por sí solas protección de medios o negociación de codecs; cifrado y descripción de sesión tienen mecanismos distintos.
- Error C: STUN no sustituye la señalización de sesión y TURN es un relay controlado por cliente, no el sistema de encaminamiento general de la red.

- [IETF RFC8489: Session Traversal Utilities for NAT](https://www.rfc-editor.org/rfc/rfc8489.html) · Abstract; §1 Introduction; §2 Overview of Operation, Binding y dirección reflejada · versión: Febrero2020, sustituyeRFC5389, HTML comprobado04-11-2026. Herramienta para mapeos, comprobaciones y mantenimiento; no solución completa por sí sola ni relay de medios básico. Dirección observada respecto del servidor, no siempreIP pública única. · comprobado: 2026-11-04
- [IETF RFC8656: Traversal Using Relays around NAT](https://www.rfc-editor.org/rfc/rfc8656.html) · Abstract y §1 Introduction: servidor intermediario, dirección relayed y relación con ICE · versión: Febrero2020, sustituyeRFC5766/6156, HTML comprobado04-11-2026. Relay útil por restricciones de conectividad o política/privacidad; no garantía universal de paso o cifrado extremo a extremo por usar elrelay. · comprobado: 2026-11-04
- [IETF RFC8445: Interactive Connectivity Establishment](https://www.rfc-editor.org/rfc/rfc8445.html) · §1 Introduction; §2 Overview of ICE, candidatos y comprobaciones de pares; §4 Terminology · versión: Julio2018, sustituyeRFC5245, HTML comprobado04-11-2026. ICE utilizaSTUN yTURN; se contrastan candidatos host/server-reflexive/relayed sin prometer conectividad bajo cualquier política de red. · comprobado: 2026-11-04

Partida: `878bc0543bfa60ddb2984f593b06b3cf23965c0052a8cfbd401bbb8a828d5228` · propuesta: `b425f5ab2d6c246461687b8acfac0e4bd4b6bf7089527b6008e2f0265ea141bd`

## MAN-GSI-P19-111

Decisión: pending_review · acción: revise.

Motivo: Conservar función SDP y correctaB; acortar distractores sin relleno y separar formato de modelo oferta/respuesta.

### Antes

¿Qué papel cumple SDP en WebRTC/SIP?

- A. Transportar paquetes de audio y vídeo en tiempo real utilizando números de secuencia y marcas temporales mediante RTP.
- B. Describir capacidades y parámetros de medios que se negocian entre extremos. **(correcta)**
- C. Descubrir candidatos y comprobar pares de conectividad para seleccionar una ruta entre los extremos mediante ICE.
- D. Proteger la confidencialidad, integridad y autenticación de los paquetes multimedia mediante el perfil SRTP.

Explicación: SDP expresa codecs, direcciones/puertos y otros parámetros de sesión.

### Propuesta

¿Qué papel cumple SDP en WebRTC/SIP?

- A. Transportar muestras audiovisuales con secuencia y temporización dentro del flujo de medios.
- B. Describir capacidades y parámetros de medios que se negocian entre extremos. **(correcta)**
- C. Probar pares de direcciones candidatos para seleccionar la ruta entre los extremos.
- D. Proteger confidencialidad e integridad de los paquetes del flujo multimedia.

Explicación: SDP es un formato de descripción de sesiones: permite expresar medios, codecs, direcciones, puertos y otros parámetros. Un modelo como oferta/respuesta utiliza esas descripciones para acordar la comunicación; SDP no completa la negociación por existir como texto. Transportar muestras, comprobar conectividad y proteger paquetes son funciones distintas, aunque se combinen en SIP o WebRTC.

- Error A: Los números de secuencia y marcas temporales del flujo de medios corresponden a RTP; SDP describe parámetros, sin transportar las muestras audiovisuales.
- Error C: Comprobar pares de candidatos caracteriza ICE; SDP puede describir información utilizada por otros mecanismos, pero no ejecuta esas pruebas.
- Error D: La protección de los paquetes requiere mecanismos como SRTP con sus claves; una descripción SDP no cifra ni autentica el flujo por sí sola.

- [IETF: RFC8866, Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866.html) · §1 descripción sin protocolo de transporte; §3.1 SIP y offer/answer; §2 Media Description · versión: Enero de 2021, HTML comprobado el 04-11-2026. Sustituye RFC4566. Describir parámetros no es transportar audio ni negociar de forma autónoma sin procedimientos de oferta/respuesta. · comprobado: 2026-11-04
- [IETF RFC3264: An Offer/Answer Model with SDP](https://www.rfc-editor.org/rfc/rfc3264.html) · Abstract y §1 Introduction: modelo de oferta/respuesta utilizando descripcionesSDP · versión: Junio2002, apartados HTML comprobados04-11-2026 en081 y reutilizados. Modelo de negociación separado del formatoSDP y del transporte de medios; no se ejecutan intercambios reales. · comprobado: 2026-11-04
- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04
- [IETF RFC8445: Interactive Connectivity Establishment](https://www.rfc-editor.org/rfc/rfc8445.html) · §1 Introduction; §2 Overview of ICE, candidatos y comprobaciones de pares; §4 Terminology · versión: Julio2018, sustituyeRFC5245, HTML comprobado04-11-2026. ICE utilizaSTUN yTURN; se contrastan candidatos host/server-reflexive/relayed sin prometer conectividad bajo cualquier política de red. · comprobado: 2026-11-04
- [IETF: RFC3711, The Secure Real-time Transport Protocol](https://www.rfc-editor.org/rfc/rfc3711.html) · §1 Introduction y §2 Goals and Features: protección RTP/RTCP; §7 gestión de claves · versión: Marzo de 2004, apartados HTML comprobados el 04-11-2026. Alcance y dependencia de perfil/claves; no recomendación de algoritmos históricos ni cifrado automático de señalización o de todo IP. · comprobado: 2026-11-04

Partida: `f66108ada726cd9ab5ff68e9ecea09cdcf475c0de98d2d3f6e2b5a2b2bc37f65` · propuesta: `eca9caea9c26116acdd72fab6af98e837dcb87fc113fb51043a3008cab53c3bc`

## MAN-GSI-P19-112

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa de codec y claveB; distinguir formato, contenedor, transporte y control con ejemplos primarios.

### Antes

¿Qué es un codec de vídeo?

- A. Un formato contenedor que organiza pistas de audio, vídeo, subtítulos y metadatos dentro de un mismo archivo.
- B. Un mecanismo para codificar/decodificar vídeo, equilibrando bitrate, calidad, complejidad y compatibilidad. **(correcta)**
- C. Un protocolo de transporte que numera y temporiza paquetes multimedia para su entrega en tiempo real.
- D. Un protocolo de señalización utilizado para establecer, modificar y finalizar sesiones de comunicación.

Explicación: H.264, H.265, VP8/VP9 y AV1 son ejemplos de codecs, según ecosistema.

### Propuesta

¿Qué es un codec de vídeo?

- A. Un formato contenedor que organiza pistas de audio, vídeo, subtítulos y metadatos dentro de un mismo archivo.
- B. Un mecanismo para codificar/decodificar vídeo, equilibrando bitrate, calidad, complejidad y compatibilidad. **(correcta)**
- C. Un protocolo de transporte que numera y temporiza paquetes multimedia para su entrega en tiempo real.
- D. Un protocolo de señalización utilizado para establecer, modificar y finalizar sesiones de comunicación.

Explicación: Un codec de vídeo transforma la representación de imágenes para codificar y reconstruir el flujo en el receptor. La elección y configuración afectan tasa de datos, calidad, coste de procesamiento y compatibilidad entre extremos. No es el contenedor que organiza pistas, ni el protocolo que transporta paquetes o establece la sesión. VP8 y H.264 son ejemplos; sus perfiles y parámetros también importan para interoperar.

- Error A: Un contenedor organiza pistas y metadatos y puede alojar vídeo codificado con distintos codecs; no es por sí mismo el mecanismo de compresión y reconstrucción.
- Error C: Numerar y temporizar paquetes caracteriza el transporte de medios como RTP; esa función no define el formato de codificación de las imágenes.
- Error D: Establecer, modificar y finalizar sesiones corresponde a señalización como SIP; no comprime ni reconstruye por sí misma el contenido de vídeo.

- [RFC6386: VP8 Data Format and Decoding Guide](https://www.rfc-editor.org/rfc/rfc6386.html) · Abstract y §1 Introduction: datos comprimidos, reconstrucción y reducción de tasa/calidad · versión: Informational, contribución independiente de autoresGoogle, noviembre2011. Introducción HTML comprobada04-11-2026; no lectura completa del decodificador o recomendación exclusiva deVP8. · comprobado: 2026-11-04
- [IETF RFC7742: WebRTC Video Processing and Codec Requirements](https://www.rfc-editor.org/rfc/rfc7742.html) · §5 Mandatory-to-Implement Video Codec; §6.1 VP8 y §6.2 H.264, parámetros de codificación/recepción · versión: Marzo2016, HTML comprobado04-11-2026. Ejemplos de formatos y compatibilidad; implementar no es usar ambos en cada sesión. No se atribuyen cuotas universales de calidad,bitrate o ausencia de pérdidas. · comprobado: 2026-11-04
- [IETF RFC8825: Overview, Real-Time Protocols for Browser-Based Applications](https://www.rfc-editor.org/rfc/rfc8825.html) · §2.2 relaciónAPI/protocolo y endpoints; §3 Architecture and Functionality Groups, figuras1–2; §4–7 transporte, protección, formatos y gestión · versión: Enero2021, HTML comprobado04-11-2026. SeparaAPI, señalización de aplicación, transporte, formatos y presentación; servidor/función multipunto depende del diseño. No exige un codec o servicio de mezcla único. · comprobado: 2026-11-04
- [IETF: RFC3550, RTP](https://www.rfc-editor.org/rfc/rfc3550.html) · §1 Introduction: secuencia, tiempo y falta de garantía QoS; §6 RTCP, feedback de distribución · versión: Julio de 2003, HTML comprobado el 04-11-2026. RTP transporta datos en tiempo real sin garantía por sí mismo de entrega, retardo o cifrado; RTCP informa, no transporta las muestras. · comprobado: 2026-11-04
- [IETF: RFC3261, Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261.html) · §1–3 control y ejemplo de llamada; §9 CANCEL; §10 registro; §11 OPTIONS; §13 INVITE; §15.1 BYE · versión: Junio de 2002, apartados HTML comprobados el 04-11-2026. Métodos base y papeles lógicos; no catálogo completo de extensiones ni recomendación de mecanismos criptográficos históricos. · comprobado: 2026-11-04

Partida: `6041be00be73e01e2169bc21b356bb026f34ca45799549de70861dfd37cc201d` · propuesta: `a73afc0c76347d2aeea18b31d6aabdcc1ae0d7e8699bb0dfd4b691efc9b5883d`

## MAN-GSI-P19-113

Decisión: pending_review · acción: revise.

Motivo: Conservar reconocimiento de Opus en WebRTC y correctaA; sustituirBGP/XSD/MPLS por codecs y precisar implementación obligatoria frente a uso en toda llamada.

### Antes

¿Qué codec de audio es especialmente habitual en WebRTC moderno?

- A. Opus. **(correcta)**
- B. BGP.
- C. XSD.
- D. MPLS.

Explicación: Opus está ampliamente adoptado para audio interactivo por calidad y adaptación a distintos bitrates.

### Propuesta

Según RFC 7874, ¿qué codec de audio es de implementación obligatoria en WebRTC junto con G.711?

- A. Opus. **(correcta)**
- B. AAC-LC.
- C. MP3.
- D. FLAC.

Explicación: RFC 7874 exige que los endpoints WebRTC implementen Opus y las variantesPCMA/PCMU de G.711 para una base común de interoperabilidad. Implementar significa tener esa capacidad, no elegir Opus en cada llamada. Pueden ofrecerse otros codecs adecuados según soporte y negociación. Entre las cuatro alternativas, solo Opus pertenece al conjunto obligatorio indicado; las demás son codecs de audio, no protocolos de red ajenos.

- Error B: AAC-LC es un codec de audio, pero no forma parte del conjunto obligatorio de implementación que§3 de RFC 7874 enumera para WebRTC.
- Error C: MP3 pertenece al ámbito de codificación de audio; su uso extendido en otros contextos no lo incluye en el mínimo obligatorio de RFC 7874.
- Error D: FLAC es una alternativa de codificación de audio, pero no integra la lista obligatoria de codecs WebRTC indicada enRFC7874; soporte opcional es otra cuestión.

- [IETF RFC7874: WebRTC Audio Codec and Processing Requirements](https://www.rfc-editor.org/rfc/rfc7874.html) · §3 Codec Requirements: implementación de Opus yG.711PCMA/PCMU, otros codecs y oferta · versión: Mayo2016, HTML comprobado04-11-2026; un acceso transitorio falló y la repetición permitió leer§3 completo. La obligación de implementación no impone elegirOpus en toda llamada ni prohíbe otros codecs negociados. · comprobado: 2026-11-04

Partida: `29c85a2cfaa4a8c7c3f5dc4aceaf9fcffe94f49d147ba259590acff075254c06` · propuesta: `60279732507e819c2bbe2c0173c2d3864559c3cbfc5d1d9dc22f18d74df65979`
