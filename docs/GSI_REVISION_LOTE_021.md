# GSI-EDITORIAL-021 — revisión propuesta

Preparado: 2026-10-27. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `1087093d0b855d8f44d921e35805fe89f564136a786136cc7763603375e1d165`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P17-062

Decisión: pending_review · acción: revise.

Motivo: Conservar acceso de red amplio y clave D; comparar Internet obligatorio, compatibilidad ilimitada y ausencia de autorización como confusiones próximas.

### Antes

Según NIST, ¿qué significa broad network access?

- A. Restringir el servicio a una LAN privada y excluir mecanismos estándar que permiten acceder desde plataformas cliente heterogéneas.
- B. Exigir que toda conexión utilice una red inalámbrica, aunque el servicio sea accesible mediante enlaces fijos y protocolos convencionales.
- C. Hacer que todos los clientes compartan una única contraseña para garantizar que reciben por red exactamente las mismas capacidades.
- D. Las capacidades están disponibles por red mediante mecanismos estándar para distintos tipos de clientes. **(correcta)**

Explicación: El acceso de red amplio favorece clientes heterogéneos.

### Propuesta

Según NIST, ¿qué significa broad network access?

- A. Acceso únicamente por Internet público, sin posibilidad de usar redes privadas.
- B. Acceso con cualquier cliente, sin mecanismos comunes ni requisitos de compatibilidad.
- C. Acceso para todos los usuarios sin controles de identidad o autorización.
- D. Capacidades por red con mecanismos estándar para clientes heterogéneos. **(correcta)**

Explicación: Broad network access significa que las capacidades se ofrecen por red mediante mecanismos estándar utilizables desde distintos tipos de cliente. No impone Internet público, conexión inalámbrica o una aplicación universal compatible con todo dispositivo. Puede existir acceso por red privada y controles de identidad y autorización. El alcance amplio de clientes no significa que los datos sean de acceso público ni que desaparezcan las condiciones técnicas del servicio.

- Error A: La definición NIST exige disponibilidad por red y mecanismos estándar, no que todo acceso atraviese Internet público. Una nube privada puede cumplirla.
- Error B: Clientes heterogéneos no significa cualquier cliente sin compatibilidad. Los mecanismos estándar son parte expresa de la característica.
- Error C: Accesibilidad por red no elimina autenticación ni permisos. Identidades y acceso siguen siendo responsabilidades que deben gestionarse.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) · Introducción IaaS/PaaS/SaaS; Division of responsibility, Responsibility matrix y Responsibilities you always retain: SO, runtime, aplicaciones, datos, configuración e identidades · versión: Actualización 24-08-2026; matriz ilustrativa de gobierno y operación, no conclusión jurídica ni modificación de contratos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `9897c042d726ceafe03b0e4142763b3de90f1c17e6870cfe6fe628db5c60e54f` · propuesta: `d5838c16b3225a5dc1ce73e8087bb5efd95a527ee98386205d7b7e1b3067b2e6`

## MAN-GSI-P17-063

Decisión: pending_review · acción: revise.

Motivo: Conservar agrupación dinámica y clave B; precisar multitenencia, aislamiento y ubicación sin confundir organización única con consumidor único.

### Antes

¿Qué significa resource pooling en cloud?

- A. Cada cliente debe comprar físicamente todos los servidores.
- B. Los recursos del proveedor se agrupan para servir a múltiples consumidores con asignación dinámica. **(correcta)**
- C. El proveedor no puede reasignar recursos.
- D. Se elimina la multitenencia por definición.

Explicación: NIST asocia resource pooling con un modelo multi-tenant y asignación dinámica.

### Propuesta

¿Qué significa resource pooling en cloud?

- A. Reserva inmutable de un servidor físico por consumidor durante todo el contrato.
- B. Recursos agrupados para varios consumidores, asignados y reasignados según demanda. **(correcta)**
- C. Acceso de cada consumidor a los datos y procesos de los demás usuarios del pool.
- D. Ubicación física exacta elegida y controlada por cada consumidor en toda solicitud.

Explicación: Resource pooling agrupa recursos físicos y virtuales para servir a varios consumidores con asignación dinámica, según NIST. El modelo multi-tenant no autoriza compartir datos o permisos entre clientes. La independencia de ubicación suele permitir elegir un nivel de abstracción como país o centro, sin controlar siempre el servidor exacto. Una nube privada puede tener varios consumidores internos de la misma organización.

- Error A: Una reserva física fija e inmutable no expresa la reasignación dinámica característica del pool. Los recursos dedicados y el modelo de consumo deben analizarse sin identificar toda reserva con pooling.
- Error C: Compartir infraestructura no concede acceso cruzado a información o procesos. El aislamiento lógico y los permisos siguen siendo necesarios.
- Error D: NIST diferencia controlar ubicación exacta de especificar una ubicación a un nivel más alto. Elegir servidor físico en toda solicitud no define resource pooling.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) · Introducción IaaS/PaaS/SaaS; Division of responsibility, Responsibility matrix y Responsibilities you always retain: SO, runtime, aplicaciones, datos, configuración e identidades · versión: Actualización 24-08-2026; matriz ilustrativa de gobierno y operación, no conclusión jurídica ni modificación de contratos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `3edfbab9b01f907ee2d7d7b083de7d9be9720ba13e895603139ccc7ed95df59f` · propuesta: `948a50e0eb59cb5c6495354bd08acb1f8c0984b8cff708892035b62591ff88c2`

## MAN-GSI-P17-064

Decisión: pending_review · acción: revise.

Motivo: Conservar servicio medido y clave C; distinguir consumo, disponibilidad y facturación sin convertir pay-per-use en requisito universal.

### Antes

¿Qué significa measured service?

- A. Cloud no registra consumo.
- B. La facturación debe ser siempre una tarifa plana.
- C. El uso de recursos puede medirse, controlarse y reportarse de forma apropiada al servicio. **(correcta)**
- D. Solo se mide el espacio en disco.

Explicación: La medición de uso es una de las características esenciales NIST.

### Propuesta

¿Qué significa measured service?

- A. Facturación final obligatoriamente por uso en todos los contratos y servicios.
- B. Medición limitada al tiempo durante el que el servicio ha estado disponible.
- C. Uso medido, controlado e informado mediante magnitudes adecuadas al servicio. **(correcta)**
- D. Medición de todas las aplicaciones y recursos con una única unidad común.

Explicación: Measured service utiliza medición en un nivel de abstracción adecuado para controlar y optimizar recursos, con posibilidad de monitorizar y reportar su uso. Almacenamiento, procesamiento, ancho de banda o cuentas activas son ejemplos NIST. La unidad depende del servicio. La medición puede apoyar facturación, pero la nota NIST dice que el pago por uso es típico, no una tarifa obligatoria única para todos los contratos.

- Error A: La característica describe medición y control, no impone una modalidad contractual universal. NIST presenta pago por uso como forma típica.
- Error B: Disponibilidad es una medida importante, pero no agota la medición del consumo de almacenamiento, cálculo, red u otros recursos.
- Error D: El nivel de abstracción y la unidad deben ser adecuados al servicio. Medir bytes, CPU o cuentas activas no obliga a reducirlos a una única unidad técnica.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `9f0ec073d2cb5c5e977cdec02d00517e014a4e68bad5e0d35239f16ac1cfdc94` · propuesta: `064019e3d77eba8bbb8fef462fccb54c6cce9d7c2249bf808d252f4309cf315a`

## MAN-GSI-P17-065

Decisión: pending_review · acción: revise.

Motivo: Conservar elasticidad rápida y clave A; comparar crecimiento fijo, failover y backup sin automatización obligatoria o recursos infinitos.

### Antes

¿Qué significa rapid elasticity?

- A. Los recursos pueden aprovisionarse y liberarse rápidamente para ajustarse a la demanda. **(correcta)**
- B. Los servidores nunca cambian de tamaño.
- C. El cliente debe esperar una compra física manual por cada pico.
- D. Es sinónimo de copia de seguridad.

Explicación: Elasticidad rápida permite crecer y decrecer según demanda.

### Propuesta

¿Qué significa rapid elasticity?

- A. Aprovisionar y liberar capacidad con rapidez para ajustarla a las variaciones de demanda. **(correcta)**
- B. Aumentar capacidad de forma permanente para un crecimiento planificado del servicio.
- C. Conmutar a una réplica saludable cuando la instancia principal deja de funcionar.
- D. Conservar copias históricas para recuperar información anterior a un incidente.

Explicación: Rapid elasticity permite expandir y reducir capacidad conforme a la demanda, con rapidez y en algunos casos automáticamente. No implica recursos físicamente infinitos ni ajuste sin latencia o límites. Un aumento permanente, una conmutación y un backup cumplen objetivos diferentes. Para aprovechar elasticidad deben acompañar aplicación, dependencias, métricas y reglas de provisión y retirada de recursos.

- Error B: El crecimiento permanente puede mostrar escalabilidad, pero no acredita liberar capacidad cuando baja la demanda.
- Error C: La conmutación corresponde a continuidad o disponibilidad. Puede coexistir con elasticidad, sin definir el ajuste de recursos a demanda.
- Error D: Conservar estados anteriores es protección y recuperación de datos. No es expansión y reducción de capacidad operativa.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Introducción y lista de escalado vertical/horizontal; Autoscaling components y Application design considerations: ajuste, instrumentación, límites y retirada segura · versión: Actualización 11-10-2026 indicada por la página; sin garantizar continuidad por el mero hecho de añadir instancias; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `07e1e80ddeb8fb31674a1048216a20d609852875e5d7a272a5edceaa6a49132a` · propuesta: `5eb243335420947d1d64d5182d36722c46c4119391d42f51ad03ae652cdbd37b`

## MAN-GSI-P17-066

Decisión: pending_review · acción: revise.

Motivo: Conservar recursos y control IaaS y clave D; evitar virtualización obligatoria y comparar SaaS, PaaS y compra local con ofertas plausibles.

### Antes

En IaaS, ¿qué recibe típicamente el cliente?

- A. Una aplicación final completa cuya operación corresponde íntegramente al proveedor.
- B. Un entorno de programación gestionado sin recursos de infraestructura configurables.
- C. Un servicio de correo electrónico listo para usar por el usuario final.
- D. Cómputo, red y almacenamiento virtualizados, gestionando normalmente SO y aplicaciones. **(correcta)**

Explicación: IaaS deja al cliente más responsabilidad sobre SO, middleware y aplicaciones.

### Propuesta

En IaaS, ¿qué recibe típicamente el cliente?

- A. Una aplicación terminada, accesible para el usuario con configuración funcional limitada.
- B. Una plataforma gestionada para desplegar aplicaciones sin administrar el SO de base.
- C. Equipos adquiridos en propiedad para operarlos en las instalaciones del cliente.
- D. Cómputo, red y almacenamiento, con control habitual sobre el SO y las aplicaciones. **(correcta)**

Explicación: IaaS ofrece recursos fundamentales de cómputo, almacenamiento y red para ejecutar software, incluido normalmente el sistema operativo y las aplicaciones controlados por el cliente. El proveedor administra la infraestructura subyacente. No se define por comprar equipos en propiedad ni exige que toda oferta utilice la misma forma de virtualización. Servicios adicionales gestionados pueden modificar tareas concretas, por lo que se revisa el alcance contratado.

- Error A: Describe consumo de aplicación SaaS. No el control del sistema operativo y software desplegado sobre recursos de infraestructura de IaaS.
- Error B: Describe la abstracción de plataforma PaaS. En el modelo IaaS convencional el cliente conserva más control operativo sobre el SO.
- Error C: Comprar y operar equipos propios describe una provisión local tradicional. IaaS ofrece capacidad como servicio sin transferir por definición la propiedad física.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) · Introducción IaaS/PaaS/SaaS; Division of responsibility, Responsibility matrix y Responsibilities you always retain: SO, runtime, aplicaciones, datos, configuración e identidades · versión: Actualización 24-08-2026; matriz ilustrativa de gobierno y operación, no conclusión jurídica ni modificación de contratos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `c2488d2b7a291849d0f0649604d506a6a1f03f0187096e921384a005cae67309` · propuesta: `d776126efd609c034152e1c1d221e1df2d58efbdec745750f791572384f88c58`

## MAN-GSI-P17-067

Decisión: pending_review · acción: revise.

Motivo: Conservar plataforma/runtime y clave C; comparar capas técnicas y decisiones de cliente sin atribuir al proveedor todo dato o código.

### Antes

En PaaS, ¿qué gestiona normalmente el proveedor además de la infraestructura?

- A. El código de negocio del cliente obligatoriamente.
- B. Todos los datos del cliente en nombre de éste.
- C. La plataforma/runtime y servicios de soporte para desplegar aplicaciones. **(correcta)**
- D. La estrategia de producto de la organización.

Explicación: PaaS abstrae infraestructura y parte de la plataforma.

### Propuesta

En PaaS, ¿qué gestiona normalmente el proveedor además de la infraestructura?

- A. La lógica de negocio y el desarrollo del código que aporta el cliente.
- B. Las identidades del cliente y la decisión de a quién conceder acceso a sus datos.
- C. La plataforma de ejecución y los servicios de soporte para desplegar aplicaciones. **(correcta)**
- D. Los objetivos de servicio y las prioridades de negocio de la organización cliente.

Explicación: En PaaS el proveedor opera infraestructura y plataforma, incluidos habitualmente SO, runtime y componentes de soporte. El cliente despliega y controla su aplicación y configuraciones permitidas, además de gobernar sus datos e identidades. Esto reduce administración de base sin trasladar automáticamente lógica de negocio o política de acceso. El reparto preciso depende del servicio y acuerdos, no solo de una etiqueta comercial.

- Error A: PaaS permite desplegar código del cliente; no implica que el proveedor deba escribir o decidir su lógica de negocio.
- Error B: El servicio puede dar herramientas de identidad, pero el cliente conserva decisiones de usuarios, acceso y datos bajo su control.
- Error D: Objetivos y prioridades de negocio deben establecerse por el cliente. La plataforma gestionada no asume esas decisiones por ofrecer un runtime.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) · Introducción IaaS/PaaS/SaaS; Division of responsibility, Responsibility matrix y Responsibilities you always retain: SO, runtime, aplicaciones, datos, configuración e identidades · versión: Actualización 24-08-2026; matriz ilustrativa de gobierno y operación, no conclusión jurídica ni modificación de contratos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `ed003119d5f6447be5ae7cf1068db907a21fc2017037a46358d50b1174b489b8` · propuesta: `9bb5f35f31c1f9a0d76982b3363e37da7ddcdbdbbd34d8aa150c59e518a31d40`

## MAN-GSI-P17-068

Decisión: pending_review · acción: revise.

Motivo: Conservar aplicación SaaS y clave D; comparar infraestructura, plataforma y software local en vez de CPU aislada o hipervisor.

### Antes

En SaaS, ¿qué consume el usuario?

- A. Solo servidores físicos sin sistema operativo.
- B. Una CPU sin almacenamiento.
- C. Un hipervisor local de tipo 1.
- D. Una aplicación completa operada principalmente por el proveedor. **(correcta)**

Explicación: SaaS entrega funcionalidad de aplicación.

### Propuesta

En SaaS, ¿qué consume el usuario?

- A. Infraestructura para instalar y administrar el sistema operativo elegido por el cliente.
- B. Una plataforma de ejecución para desplegar el código de aplicación del cliente.
- C. Una licencia de software instalada y operada localmente en equipos del cliente.
- D. Una aplicación completa operada principalmente por el proveedor. **(correcta)**

Explicación: SaaS entrega funcionalidad de aplicación sobre infraestructura cloud operada por el proveedor. El usuario utiliza la aplicación por una interfaz o API y puede disponer de configuraciones permitidas. Esto no elimina responsabilidades del cliente sobre identidades, accesos, datos o uso. No se confunde con administrar un sistema operativo IaaS, desplegar código en PaaS o adquirir software para ejecutarlo por cuenta propia.

- Error A: Describe la capacidad típica IaaS de controlar SO y software. SaaS entrega una aplicación, con un nivel de control diferente.
- Error B: Describe la propuesta PaaS de desplegar aplicaciones del cliente en una plataforma gestionada.
- Error C: Una licencia instalada y operada localmente no constituye por sí sola un servicio SaaS. Licenciamiento y modelo de prestación no son equivalentes.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) · Introducción IaaS/PaaS/SaaS; Division of responsibility, Responsibility matrix y Responsibilities you always retain: SO, runtime, aplicaciones, datos, configuración e identidades · versión: Actualización 24-08-2026; matriz ilustrativa de gobierno y operación, no conclusión jurídica ni modificación de contratos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `9243e787a92805af05a6dd31d456b4e4c686ae46a6efedabd6f69edda2ebd17e` · propuesta: `5bd890e0ee67611a4e559dd67016aae4525d2b8c2cf877664b4ae2215b0efdd8`

## MAN-GSI-P17-069

Decisión: pending_review · acción: revise.

Motivo: Conservar concepto público y clave A; precisar uso abierto general para no confundir cualquier servicio multicliente con nube pública.

### Antes

¿Qué es una nube pública?

- A. Infraestructura/servicios ofrecidos por un proveedor para múltiples clientes conforme a su modelo. **(correcta)**
- B. Una nube exclusiva para una sola organización por definición.
- C. Un CPD sin virtualización.
- D. Un sinónimo de multicloud.

Explicación: Pública se distingue de privada por ámbito de provisión, no por ausencia de seguridad.

### Propuesta

¿Qué es una nube pública?

- A. Infraestructura cloud aprovisionada para uso abierto al público en general. **(correcta)**
- B. Infraestructura cloud para uso exclusivo de una organización y sus consumidores.
- C. Infraestructura cloud para una comunidad de organizaciones con intereses compartidos.
- D. Composición de infraestructuras cloud distintas unidas para facilitar portabilidad.

Explicación: NIST define nube pública por aprovisionarse para uso abierto al público en general. Puede ser operada por entidades empresariales, académicas o gubernamentales, o combinaciones. Pública no significa datos visibles sin autorización, servicio gratuito ni ausencia de aislamiento. El ámbito de provisión la distingue de privada y comunitaria; la composición integrada de varias infraestructuras corresponde a híbrida.

- Error B: El uso exclusivo de una organización caracteriza nube privada, aunque tenga varios consumidores internos o alojamiento externo.
- Error C: La comunidad de organizaciones con necesidades compartidas caracteriza nube comunitaria. No es uso abierto general.
- Error D: Describe composición híbrida según NIST. Una nube pública puede formar parte de ella sin que ambos conceptos sean sinónimos.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) · Introducción IaaS/PaaS/SaaS; Division of responsibility, Responsibility matrix y Responsibilities you always retain: SO, runtime, aplicaciones, datos, configuración e identidades · versión: Actualización 24-08-2026; matriz ilustrativa de gobierno y operación, no conclusión jurídica ni modificación de contratos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `2ac0d7d183692a9f4718451ae7ac0736892ef96229d718b0a8a3d82566c0d444` · propuesta: `7dbcec899ec2c04b98d6d1be654c9f54e5347341f3967044cd27901f0bd99d43`

## MAN-GSI-P17-070

Decisión: pending_review · acción: revise.

Motivo: Conservar dedicación organizativa y clave A; separar privacidad de ubicación física y comparar modelos reales de despliegue.

### Antes

¿Qué es una nube privada?

- A. Una infraestructura cloud dedicada a una organización, alojada interna o externamente. **(correcta)**
- B. Cualquier servidor físico sin automatización.
- C. Un servicio SaaS usado por millones de clientes.
- D. Una red social corporativa.

Explicación: Privada describe dedicación organizativa, no necesariamente ubicación on-premise.

### Propuesta

¿Qué es una nube privada?

- A. Infraestructura cloud para una organización, con alojamiento interno o externo. **(correcta)**
- B. Infraestructura cloud abierta al público en general bajo las condiciones del servicio.
- C. Infraestructura compartida por organizaciones de una comunidad con necesidades comunes.
- D. Composición integrada de varias nubes distintas que conserva su identidad individual.

Explicación: Nube privada significa uso exclusivo de una organización, que puede incluir varios consumidores internos. Según NIST, puede gestionarla la propia organización, un tercero o ambos, y alojarse dentro o fuera de sus instalaciones. La ubicación on-premises no basta para llamar cloud a cualquier servidor: siguen importando las características del modelo. La dedicación organizativa tampoco elimina automáticamente necesidades de seguridad o gobierno.

- Error B: El uso abierto al público general corresponde al modelo público. No es la dedicación a una organización que define privada.
- Error C: El uso por una comunidad de organizaciones define el modelo comunitario, diferente de una única organización con consumidores internos.
- Error D: Describe nube híbrida por composición e integración de infraestructuras distintas. Una nube privada puede ser uno de sus componentes.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `ed5f20a043809c47b212ffbbf6ceb03c4b6d67109756d9ca722684b8145b87b1` · propuesta: `c74f827df256d294a72f6f043ca6f8f925960ffce7fd984b9e6e332210be2695`

## MAN-GSI-P17-071

Decisión: pending_review · acción: revise.

Motivo: Conservar integración privada/pública y clave B; acotar ese escenario sin reducir toda definición NIST de híbrida a una única combinación.

### Antes

¿Qué caracteriza a una nube híbrida?

- A. Utilizar dos proveedores públicos sin integración, conectividad común ni mecanismos coordinados de identidad, gestión o portabilidad.
- B. Integra entornos privados y públicos con mecanismos de interoperabilidad/operación conjunta. **(correcta)**
- C. Mantener todas las cargas exclusivamente en infraestructura local, sin recursos públicos ni relación operativa con servicios de nube.
- D. Ejecutar una única máquina virtual local y denominar pública la red utilizada para administrarla desde otro equipo de la organización.

Explicación: Híbrida combina modelos de despliegue; multicloud se refiere a varios proveedores.

### Propuesta

En una solución que combina nube privada y pública, ¿qué permite caracterizarla como híbrida?

- A. Contratar dos proveedores públicos manteniendo sus servicios independientes.
- B. Integrar entornos privados y públicos con mecanismos de interoperabilidad y operación conjunta. **(correcta)**
- C. Conservar la nube privada sin conexión ni intercambio con los servicios públicos contratados.
- D. Ubicar recursos públicos y privados en un mismo edificio sin integrarlos.

Explicación: En el escenario privada/pública indicado, la integración mediante tecnología que permita relación y portabilidad distingue la composición híbrida de la mera coexistencia. NIST define híbrida de forma más amplia como combinación de infraestructuras cloud distintas, privadas, comunitarias o públicas, que siguen siendo entidades propias y se vinculan. No exige un único proveedor, un edificio común ni portabilidad automática sin diseño. Multicloud describe otro eje: proveedores utilizados.

- Error A: Pluralidad de proveedores públicos describe multicloud. La independencia indicada no acredita la integración privada/pública del caso.
- Error C: Coexistir sin conexión o intercambio no realiza la integración que caracteriza el escenario híbrido preguntado.
- Error D: La proximidad física no une por sí sola aplicaciones, datos u operación. El vínculo tecnológico y su alcance deben definirse.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Google Cloud: What is multicloud?](https://cloud.google.com/learn/what-is-multicloud) · Párrafo inicial: uso de servicios de al menos dos proveedores; Multicloud versus hybrid cloud: criterio de proveedores e integración; se evitan equivalencias de conjuntos o exclusión de otros usos del término · versión: Fecha textual de página Last updated: 10/09/2026; se conserva sin reinterpretar formato; no se adoptan promesas comerciales de portabilidad automática; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `7279d5c115153e9bed2da5ee889f58a2a2809746da72146d5646b9401c66dbeb` · propuesta: `707847ab08dc1a1c07a22c943dbce241a6688b4219ad4e38a9dfbfe7a3ff81df`

## MAN-GSI-P17-072

Decisión: pending_review · acción: revise.

Motivo: Conservar pluralidad de proveedores y clave A; distinguirla de híbrida, multirregión y catálogo con cuatro alternativas próximas.

### Antes

¿Qué es multicloud?

- A. Uso de servicios de más de un proveedor cloud. **(correcta)**
- B. Sinónimo obligatorio de nube híbrida.
- C. Uso de varias zonas del mismo centro de datos físico.
- D. Una licencia de virtualización.

Explicación: Multicloud no implica por sí mismo integración transparente ni parte privada.

### Propuesta

Según el criterio de pluralidad de proveedores, ¿qué describe multicloud?

- A. Uso de servicios cloud de varios proveedores distintos. **(correcta)**
- B. Uso de nube privada y pública de un mismo proveedor.
- C. Uso de varias regiones ofrecidas por un único proveedor.
- D. Uso de varios servicios dentro del catálogo de un proveedor.

Explicación: El rasgo de multicloud preguntado es utilizar servicios de más de un proveedor. No exige por sí mismo integración transparente, una parte privada, réplica automática o que cada aplicación pueda trasladarse sin cambios. Puede coexistir con una arquitectura híbrida, pero no son términos equivalentes. Múltiples regiones o productos de un solo proveedor no aportan pluralidad de proveedores.

- Error B: Combinar privada y pública puede ser un diseño híbrido. Si se mantiene un único proveedor no demuestra el criterio de pluralidad que pregunta el enunciado.
- Error C: Varias regiones pueden mejorar distribución geográfica o resiliencia, pero siguen perteneciendo a un único proveedor.
- Error D: Un catálogo con varios servicios permite combinar capacidades de ese proveedor. La cantidad de productos no equivale a cantidad de proveedores.

- [Google Cloud: What is multicloud?](https://cloud.google.com/learn/what-is-multicloud) · Párrafo inicial: uso de servicios de al menos dos proveedores; Multicloud versus hybrid cloud: criterio de proveedores e integración; se evitan equivalencias de conjuntos o exclusión de otros usos del término · versión: Fecha textual de página Last updated: 10/09/2026; se conserva sin reinterpretar formato; no se adoptan promesas comerciales de portabilidad automática; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `8d408e9408540e90c73f3211afccc599fadbb72db643b89e66a02cb922983bc2` · propuesta: `a6e3581831ac58951a2a23f9bef14346e69b1b53aa7841ae5dd6e8966499cc72`

## MAN-GSI-P17-073

Decisión: pending_review · acción: revise.

Motivo: Conservar relación región/zona y clave B; usar ejemplos primarios sin universalizar número de zonas, edificio único o replicación automática.

### Antes

¿Qué diferencia hay entre región y zona de disponibilidad en muchas nubes?

- A. Una zona contiene necesariamente varias regiones completas y cada una replica todos sus recursos en el mismo dominio de fallo físico.
- B. Una región agrupa ubicaciones geográficas; las zonas buscan aislar fallos dentro de la región. **(correcta)**
- C. Son categorías de licenciamiento que determinan dónde puede ejecutarse el software, pero no describen la organización geográfica de la nube.
- D. No influyen en el diseño de resiliencia porque los fallos de infraestructura afectan siempre por igual a todas las ubicaciones del proveedor.

Explicación: La separación de zonas permite diseñar tolerancia a fallos locales.

### Propuesta

¿Qué diferencia hay entre región y zona de disponibilidad en muchas nubes?

- A. Una zona abarca varias regiones geográficas que comparten un mismo centro de datos.
- B. Una región es un área geográfica; sus zonas buscan aislar fallos dentro de ella. **(correcta)**
- C. Región y zona son niveles equivalentes con distinta denominación comercial.
- D. Las regiones separan fallos físicos; las zonas clasifican cargas según su consumo.

Explicación: En ejemplos como AWS, región identifica un área geográfica y las zonas son ubicaciones aisladas dentro de ella. Una zona puede contener uno o varios centros; no debe equipararse universalmente con un único edificio. Azure también distingue región y zonas, con opciones que varían entre regiones. Desplegar en varias zonas ayuda frente a fallos locales solo si recursos, dependencias y distribución de carga están diseñados para aprovecharlo; no replica todo automáticamente.

- Error A: Invierte la jerarquía habitual. Las zonas se organizan dentro de una región, no contienen regiones geográficas completas.
- Error C: Los nombres describen niveles de ubicación y resiliencia diferentes en los proveedores citados. No son simples etiquetas comerciales equivalentes.
- Error D: Las zonas también delimitan separación física y dominios de fallo. No se definen como categorías de consumo o facturación de cargas.

- [AWS Regions and Availability Zones](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions-availability-zones.html) · Introducción, Regions y Availability Zones: área geográfica, ubicaciones aisladas dentro de región y uno o más centros por zona; no se usan recuentos actuales · versión: Documentación latest consultada; ejemplo AWS, sin universalizar características a todo proveedor; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: What are Azure regions?](https://learn.microsoft.com/en-us/azure/reliability/regions-overview) · Introducción y Understand Azure regions and geographies: instalaciones y datacenters, región, geografía y disponibilidad variable de zonas · versión: Documentación en línea; no se generaliza que toda región disponga de zonas o de pareja regional; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `1a2d14c63b42147de051479865e24afa02b657f17ba75af1e913a7894bf68989` · propuesta: `9bd94bd876c332515f9a7670c785185c3c707ce7841c8215d4f7847069cfab02`

## MAN-GSI-P17-074

Decisión: pending_review · acción: revise.

Motivo: Conservar mínimo privilegio y separación de responsabilidades y clave B; caso de lectura de datos que permite evaluar alcance, identidad y permisos de escritura anticipados.

### Antes

¿Qué principio debe aplicarse al IAM cloud?

- A. Compartir una cuenta administradora entre todos.
- B. Mínimo privilegio y separación de responsabilidades. **(correcta)**
- C. Dar permisos globales por comodidad.
- D. Desactivar trazabilidad.

Explicación: Identidad y permisos son controles críticos en cloud.

### Propuesta

Un servicio solo necesita leer un conjunto de datos. ¿Qué criterio debe guiar su identidad y permisos en cloud?

- A. Reutilizar la cuenta administradora del operador para simplificar la autenticación.
- B. Asignar los permisos mínimos necesarios y separar la identidad del servicio de funciones administrativas. **(correcta)**
- C. Conceder lectura de todos los datos para evitar futuras faltas de permisos.
- D. Asignar escritura y borrado para facilitar ampliaciones futuras de la aplicación.

Explicación: El servicio debe autenticarse con una identidad adecuada y disponer del mínimo acceso necesario para su función, separado de privilegios administrativos. Leer un conjunto no justifica leer todos ni añadir escritura o borrado por anticipación. Políticas, alcance y condiciones permiten ajustar permisos y revisarlos. La separación de identidades y funciones facilita trazabilidad y limita el impacto de una credencial comprometida, sin sustituir el resto de controles de seguridad.

- Error A: Reutilizar una identidad administrativa concede capacidad ajena a la tarea y dificulta distinguir acciones del operador y de la carga.
- Error C: Que el permiso sea solo de lectura no lo vuelve mínimo si incluye datos fuera de la función del servicio. El alcance también debe limitarse.
- Error D: Añade operaciones que el caso no necesita. Las ampliaciones deben justificarse y concederse cuando proceda, no anticiparse como permiso permanente.

- [AWS IAM: Security best practices in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) · Require workloads to use temporary credentials with IAM roles; Apply least-privilege permissions; revisión de permisos y condiciones: identidades de carga y acceso necesario · versión: Documentación latest consultada, sin fijar versión de implementación; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Well-Architected: Architecture strategies for identity and access management](https://learn.microsoft.com/en-us/azure/well-architected/security/identity-access) · Determine all identities for authentication; Provide role-based authorization, Role assignment y Protect critical impact accounts: mínimo privilegio, identidad/rol/alcance y roles administrativos separados · versión: Documentación en línea; no se prescribe rol personalizado o granularidad única para todo servicio; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) · Introducción IaaS/PaaS/SaaS; Division of responsibility, Responsibility matrix y Responsibilities you always retain: SO, runtime, aplicaciones, datos, configuración e identidades · versión: Actualización 24-08-2026; matriz ilustrativa de gobierno y operación, no conclusión jurídica ni modificación de contratos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `a7e2afa3b70c30a33c86f2cc504d1f4351c90da7b5051391021fa5c8ebf8cc8b` · propuesta: `3c24016aeb108a5b013bad1cd0b933ac6eca6836faeae3ff81140cfeb9c5b863`

## MAN-GSI-P17-075

Decisión: pending_review · acción: revise.

Motivo: Conservar reparto variable y clave D; comparar límites operativos por modelo sin cliente libre de obligaciones ni mantenimiento físico del CPD ajeno.

### Antes

¿Qué significa responsabilidad compartida en cloud?

- A. El proveedor asume absolutamente toda la seguridad en cualquier modelo.
- B. El cliente administra físicamente los centros de datos del proveedor.
- C. No existen obligaciones del cliente en SaaS.
- D. Proveedor y cliente conservan responsabilidades diferentes según el modelo de servicio. **(correcta)**

Explicación: El reparto cambia entre IaaS/PaaS/SaaS, pero el cliente nunca queda sin responsabilidades.

### Propuesta

¿Qué significa responsabilidad compartida en cloud?

- A. En IaaS, el proveedor actualiza normalmente el SO invitado y el cliente solo su código.
- B. En PaaS, el cliente mantiene SO y runtime mientras el proveedor mantiene la red física.
- C. En SaaS, el proveedor decide qué usuarios del cliente deben acceder según su negocio.
- D. Proveedor y cliente conservan tareas diferentes según el modelo y el alcance del servicio. **(correcta)**

Explicación: El reparto de responsabilidades cambia entre infraestructura, plataforma y aplicación como servicio. En el modelo convencional, el cliente administra SO y aplicaciones IaaS; el proveedor opera SO y runtime PaaS, y la aplicación SaaS, con configuraciones y responsabilidades del cliente. Datos, identidades y accesos bajo su control no desaparecen. Deben verificarse servicio y acuerdos: una matriz ilustrativa no sustituye el alcance operativo o jurídico concreto.

- Error A: Invierte el reparto convencional del SO invitado en IaaS, que queda bajo administración del cliente. Servicios gestionados adicionales deben identificarse, no presumirse por la etiqueta.
- Error B: Atribuye al cliente tareas de SO/runtime que PaaS abstrae habitualmente. La infraestructura física no es la única capa gestionada por el proveedor.
- Error C: El proveedor ofrece funciones de administración de usuarios, pero no sustituye por defecto la decisión del cliente sobre quién debe acceder a sus datos y aplicaciones.

- [Microsoft Learn: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) · Introducción IaaS/PaaS/SaaS; Division of responsibility, Responsibility matrix y Responsibilities you always retain: SO, runtime, aplicaciones, datos, configuración e identidades · versión: Actualización 24-08-2026; matriz ilustrativa de gobierno y operación, no conclusión jurídica ni modificación de contratos; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `d23dede34d04cd34e5462409707cf54e2028495bce932b03ae3127ee0e8c676c` · propuesta: `46110b5a1113aa1b6d6ffcd88faa1bbbe2d24d64f547ceac918475fc269c3494`

## MAN-GSI-P17-076

Decisión: pending_review · acción: revise.

Motivo: Conservar dependencia y clave A; comparar riesgos cloud reales y evitar promesas de migración sin coste o definición criptográfica ajena.

### Antes

¿Qué riesgo describe vendor lock-in?

- A. Dependencia de servicios, APIs o formatos que hacen costosa la migración a otra solución. **(correcta)**
- B. La posibilidad garantizada de trasladar cargas, datos y configuraciones a otro proveedor sin adaptación, coste ni interrupción del servicio.
- C. La replicación automática y transparente de todos los recursos entre proveedores independientes sin diseñar mecanismos de portabilidad.
- D. Una técnica criptográfica que vincula los datos a la clave del proveedor para impedir que terceros puedan descifrarlos durante el tránsito.

Explicación: La reversibilidad debe considerarse antes de adoptar servicios propietarios.

### Propuesta

¿Qué riesgo describe vendor lock-in?

- A. Dependencia de APIs, servicios o formatos que hace costosa la migración a otra solución. **(correcta)**
- B. Interrupción del acceso al servicio cuando falla la conexión de red con el proveedor.
- C. Coste de mantener capacidad reservada que queda sin uso después de un pico.
- D. Inconsistencia temporal entre réplicas mientras se propagan cambios de datos.

Explicación: Vendor lock-in describe una dependencia que dificulta cambiar de tecnología o proveedor por esfuerzo, tiempo o coste. Puede proceder de APIs, formatos, arquitectura, operación o conocimientos del equipo, además de condiciones comerciales. No obliga a rechazar todo servicio propietario: sus ventajas pueden justificar una dependencia evaluada. La reversibilidad y las estimaciones de salida deben revisarse; usar varios proveedores no elimina por sí solo lock-in de cada componente.

- Error B: Describe un riesgo de disponibilidad o conectividad. Puede existir incluso con una solución portable y no define el coste de cambiar de proveedor.
- Error C: Describe infrautilización o aprovisionamiento inadecuado. No implica por sí mismo que la carga sea difícil de migrar.
- Error D: Describe consistencia de datos replicados. Es un problema distinto de la dependencia de una tecnología o proveedor para operar o salir.

- [GOV.UK: Managing technical lock-in in the cloud](https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud) · Definición, Understand your technical lock-in y Manage your technical lock-in: coste/tiempo de salida, dependencia técnica, formatos, exportación, componentes desacoplados y pruebas de cambio · versión: Publicado 17-12-2019, actualizado 03-09-2026; orientación técnica del GDS/CDDO, sin trasladar normas de contratación del Reino Unido a España; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Introducción y lista de escalado vertical/horizontal; Autoscaling components y Application design considerations: ajuste, instrumentación, límites y retirada segura · versión: Actualización 11-10-2026 indicada por la página; sin garantizar continuidad por el mero hecho de añadir instancias; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `dc8bdeb2917b33bc02518ca67e4f630d0bc3fcc7d2a95e6b01ddd07cc3bdf0fe` · propuesta: `6fc58c7fa7f6f656fcc38db3b6dca95bd0eeb5885f3f2228c4cf545aa915364d`

## MAN-GSI-P17-077

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y cuatro planteamientos ya comparables; completar horizonte, supuestos y costes aplicables sin inventar cifras de ahorro.

### Antes

¿Qué debe incluir una evaluación TCO cloud frente a on-premise?

- A. Comparar únicamente la tarifa mensual de una máquina virtual con el precio de compra inicial de un servidor físico.
- B. Clasificar costes como CapEx u OpEx y asumir que esa diferencia determina por sí sola la alternativa más económica.
- C. Cómputo, almacenamiento, red, licencias, operación, personal, migración, seguridad y salida, entre otros. **(correcta)**
- D. Excluir migración, soporte, transferencia de datos y salida futura porque no forman parte del funcionamiento ordinario.

Explicación: TCO compara coste total, no una tarifa aislada.

### Propuesta

¿Qué debe incluir una evaluación TCO cloud frente a on-premise?

- A. Comparar únicamente la tarifa mensual de una máquina virtual con el precio de compra inicial de un servidor físico.
- B. Clasificar costes como CapEx u OpEx y asumir que esa diferencia determina por sí sola la alternativa más económica.
- C. Cómputo, almacenamiento, red, licencias, operación, personal, migración, seguridad y salida, entre otros. **(correcta)**
- D. Excluir migración, soporte, transferencia de datos y salida futura porque no forman parte del funcionamiento ordinario.

Explicación: TCO compara costes totales aplicables a alternativas de alcance y horizonte temporal coherentes. Incluye recursos, licencias, operación y personas, seguridad, transición y los costes de salida o desmantelamiento pertinentes al caso. Deben explicitarse demanda, escenarios, condiciones y supuestos; una lista no demuestra que cloud sea siempre más barato. La distinción CapEx/OpEx no sustituye cuantificar costes ni comparar periodos y niveles de servicio equivalentes.

- Error A: Compara una tarifa periódica parcial con una compra inicial y omite operación, horizonte y otros costes. No es una comparación total homogénea.
- Error B: CapEx y OpEx clasifican costes, pero no determinan por sí solos importe total, uso, riesgo o conveniencia de una alternativa.
- Error D: Transición, soporte, transferencia y salida pueden ser relevantes para el coste total del escenario. No deben excluirse simplemente por no ser una factura ordinaria recurrente.

- [AWS Prescriptive Guidance: Detailed business case](https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/detailed-business-case.html) · Validate and refine the infrastructure and migration cost model; Refine the IT productivity and IT operations and support efficiency value model: infraestructura, instalaciones, red, licencias, transición, personal y desmantelamiento · versión: Guía latest consultada, sin versión documental indicada; solo componentes y escenarios, no porcentajes de ahorro, precios ni asesoramiento de inversión; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [GOV.UK: Managing technical lock-in in the cloud](https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud) · Definición, Understand your technical lock-in y Manage your technical lock-in: coste/tiempo de salida, dependencia técnica, formatos, exportación, componentes desacoplados y pruebas de cambio · versión: Publicado 17-12-2019, actualizado 03-09-2026; orientación técnica del GDS/CDDO, sin trasladar normas de contratación del Reino Unido a España; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `28c44613dde80b771119ca43e3608eb7f8f29b64852819136cc2ec3bf2cb2661` · propuesta: `0bc35444aad1edd77a668bc0af8e809306e0158022f6a7daa3e9f31923d3cf1b`

## MAN-GSI-P17-078

Decisión: pending_review · acción: revise.

Motivo: Conservar administración transformada y clave C; comparar reducción excesiva y continuidad literal de tareas sin promesas de solución automática de toda incidencia.

### Antes

¿Qué afirmación es correcta sobre cloud y administración?

- A. Eliminar cualquier necesidad de diseñar arquitectura porque el proveedor decide automáticamente topología, resiliencia y dependencias del cliente.
- B. Hacer innecesaria la monitorización, ya que los servicios gestionados detectan y resuelven todas las degradaciones posibles de la aplicación.
- C. Cloud cambia y automatiza parte de la administración, pero no elimina gobierno, seguridad ni operación. **(correcta)**
- D. Transferir al proveedor toda responsabilidad sobre los datos, identidades, configuraciones y decisiones de acceso del cliente.

Explicación: La abstracción cambia responsabilidades; no elimina gestión.

### Propuesta

¿Qué afirmación es correcta sobre cloud y administración?

- A. La gestión interna se limita a facturar; el proveedor decide la política de identidades.
- B. Externalizar infraestructura equivale a delegar el gobierno de los datos de negocio.
- C. Cloud cambia y automatiza parte de la administración, manteniendo gobierno, seguridad y operación. **(correcta)**
- D. Los servicios gestionados conservan todas las tareas del CPD sin cambiar procesos ni responsabilidades.

Explicación: Cloud desplaza y automatiza tareas según el servicio, pero sigue requiriendo gobierno, decisiones de arquitectura, seguridad y operación de lo que el cliente controla. El equipo conserva datos, acceso, configuración y seguimiento del servicio en el alcance que corresponda. Tampoco se trata de ejecutar exactamente las mismas tareas que en un CPD: los procesos deben adaptarse al nuevo reparto, a la automatización y a las dependencias.

- Error A: La factura no agota la gestión del cliente. Identidades, accesos y configuración requieren decisiones y control propios.
- Error B: El proveedor puede operar infraestructura y herramientas, pero el gobierno de los datos no se transfiere automáticamente por ese hecho.
- Error D: El cambio de abstracción sí modifica tareas y responsabilidades. Mantener procesos sin adaptarlos puede dejar controles omitidos o duplicados.

- [Microsoft Learn: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) · Introducción IaaS/PaaS/SaaS; Division of responsibility, Responsibility matrix y Responsibilities you always retain: SO, runtime, aplicaciones, datos, configuración e identidades · versión: Actualización 24-08-2026; matriz ilustrativa de gobierno y operación, no conclusión jurídica ni modificación de contratos; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [AWS Prescriptive Guidance: Detailed business case](https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/detailed-business-case.html) · Validate and refine the infrastructure and migration cost model; Refine the IT productivity and IT operations and support efficiency value model: infraestructura, instalaciones, red, licencias, transición, personal y desmantelamiento · versión: Guía latest consultada, sin versión documental indicada; solo componentes y escenarios, no porcentajes de ahorro, precios ni asesoramiento de inversión; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `e7692eb22ae64fe72a49ce7b1aa28d88f9380baff0525ae7d50a07de1cf1570f` · propuesta: `40f294241a641b77aa5e4701da322f2cb35411be262c4704334670b8b7d23b28`

## MAN-GSI-P17-079

Decisión: pending_review · acción: revise.

Motivo: Conservar caso de demanda variable y clave C; precisar ajuste de capacidad y comparar disponibilidad, medición y reserva fija como capacidades próximas.

### Antes

Para una aplicación con picos impredecibles y periodos de baja demanda, ¿qué propiedad cloud aporta valor directo?

- A. Fijar para siempre la capacidad máxima.
- B. Eliminar métricas de consumo.
- C. Elasticidad y aprovisionamiento bajo demanda. **(correcta)**
- D. Usar un único nodo sin posibilidad de cambio.

Explicación: La elasticidad permite adaptar coste/capacidad a la carga.

### Propuesta

Una aplicación presenta picos impredecibles y periodos de baja demanda. ¿Qué propiedad permite ajustar los recursos a esas variaciones?

- A. Conmutación a réplicas sanas manteniendo fija la capacidad total disponible.
- B. Medición de disponibilidad sin mecanismos para variar los recursos asignados.
- C. Elasticidad y provisión bajo demanda para aumentar y liberar capacidad. **(correcta)**
- D. Reserva fija dimensionada para el máximo esperado en todos los periodos.

Explicación: La elasticidad permite ajustar capacidad al variar la demanda, y el aprovisionamiento bajo demanda facilita obtener recursos cuando hacen falta. Con periodos de baja carga también importa liberarlos, si el diseño y objetivos lo permiten. Métricas, límites, dependencias y tiempos de arranque condicionan el ajuste real. No es una garantía de ahorro o de respuesta instantánea ante cualquier pico ni sustituye alta disponibilidad.

- Error A: Conmutar ayuda ante fallos, pero con capacidad total fija no adapta la oferta de recursos al ritmo de la demanda descrita.
- Error B: Medir ayuda a decidir, pero sin un mecanismo de cambio no se aumenta o reduce capacidad por esa sola observación.
- Error D: Una reserva máxima puede absorber carga con capacidad fija, pero no realiza el ajuste entre picos y periodos de baja demanda que pide el caso.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Introducción y lista de escalado vertical/horizontal; Autoscaling components y Application design considerations: ajuste, instrumentación, límites y retirada segura · versión: Actualización 11-10-2026 indicada por la página; sin garantizar continuidad por el mero hecho de añadir instancias; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `bfa23c9c8db1b1582315aa6d5a0ae386dbb6cd880be4fc8f4ca5b82577350814` · propuesta: `2d6b5692d5cc08d62d25c9878929108fc6d4060df051f78f56f6febfa7b392c6`

## MAN-GSI-P17-080

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente caso y alternativas ya construidos; completar salida verificable, proporcionalidad y actualización sin imponer normas británicas a la Administración española.

### Antes

Una Administración quiere migrar a cloud sin quedar atrapada. ¿Qué requisito es más maduro?

- A. Confiar únicamente en una promesa comercial de portabilidad, sin definir formatos, responsables, plazos, costes ni pruebas de salida.
- B. Definir portabilidad, formatos, exportación, documentación, costes de salida y pruebas de reversibilidad. **(correcta)**
- C. Prohibir cualquier copia o exportación de datos para asegurar su consistencia, aunque esa restricción impida migrarlos a otra solución.
- D. No documentar dependencias para simplificar la operación y reconstruirlas solo cuando se decida abandonar al proveedor actual.

Explicación: La reversibilidad debe diseñarse y probarse, no asumirse.

### Propuesta

Una Administración quiere migrar a cloud sin quedar atrapada. ¿Qué requisito es más maduro?

- A. Confiar únicamente en una promesa comercial de portabilidad, sin definir formatos, responsables, plazos, costes ni pruebas de salida.
- B. Definir portabilidad, formatos, exportación, documentación, costes de salida y pruebas de reversibilidad. **(correcta)**
- C. Prohibir cualquier copia o exportación de datos para asegurar su consistencia, aunque esa restricción impida migrarlos a otra solución.
- D. No documentar dependencias para simplificar la operación y reconstruirlas solo cuando se decida abandonar al proveedor actual.

Explicación: La reversibilidad requiere preparar datos, formatos, exportaciones, documentación y dependencias, con responsables, plazos y costes de salida conocidos y pruebas de migración. Una promesa no demuestra que el servicio pueda trasladarse ni que su funcionalidad o datos sean recuperables. El esfuerzo debe proporcionarse al riesgo y valor de la solución, y revisarse cuando cambien tecnología o acuerdos. Se usa orientación técnica, sin deducir obligaciones de contratación españolas de una guía extranjera.

- Error A: La promesa sin criterios verificables no acredita portabilidad. Faltan alcance, formatos, responsabilidad, tiempos, costes y prueba de salida.
- Error C: Prohibir copia o exportación puede impedir disponer de datos para migrar. Consistencia y protección deben gestionarse sin confundirlas con bloquear toda salida.
- Error D: Sin inventario de dependencias es difícil estimar esfuerzo y reconstruir la solución. Documentar solo al abandonar traslada el descubrimiento al momento de mayor presión.

- [GOV.UK: Managing technical lock-in in the cloud](https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud) · Definición, Understand your technical lock-in y Manage your technical lock-in: coste/tiempo de salida, dependencia técnica, formatos, exportación, componentes desacoplados y pruebas de cambio · versión: Publicado 17-12-2019, actualizado 03-09-2026; orientación técnica del GDS/CDDO, sin trasladar normas de contratación del Reino Unido a España; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [AWS Prescriptive Guidance: Detailed business case](https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/detailed-business-case.html) · Validate and refine the infrastructure and migration cost model; Refine the IT productivity and IT operations and support efficiency value model: infraestructura, instalaciones, red, licencias, transición, personal y desmantelamiento · versión: Guía latest consultada, sin versión documental indicada; solo componentes y escenarios, no porcentajes de ahorro, precios ni asesoramiento de inversión; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `e0896a037f91379194bb5c7585cb57859309287dde80b36535ea4af41466748a` · propuesta: `892fa5ef7cc6dd6f185019aa0590ddcbe534fb6049c3878b78bfc32a020b4773`

## MAN-GSI-P17-008

Decisión: pending_review · acción: revise.

Motivo: Conservar ventaja típica y clave C; separar dispositivo SSD y protocolo NVMe, sin optimización exclusiva para flash ni cifras comerciales universales.

### Antes

¿Qué ventaja típica aporta un SSD/NVMe frente a un HDD mecánico?

- A. Mayor latencia por ausencia de partes móviles.
- B. Necesidad de desfragmentación mecánica para arrancar.
- C. Menor latencia de acceso y mayor rendimiento en muchas cargas de E/S. **(correcta)**
- D. Ejecución directa de instrucciones de CPU.

Explicación: La ausencia de movimiento mecánico reduce latencias; NVMe además usa una interfaz/protocolo optimizado para flash.

### Propuesta

¿Qué ventaja típica aporta un SSD que utiliza NVMe frente a un HDD mecánico?

- A. Mayor velocidad de giro y menor desplazamiento de cabezales al buscar datos.
- B. Uso obligatorio de SATA en las unidades SSD que implementan NVMe.
- C. Menor latencia de acceso y mayor rendimiento en muchas cargas de E/S. **(correcta)**
- D. Supresión de colas para ejecutar las peticiones de almacenamiento una a una.

Explicación: El SSD evita el movimiento de platos y cabezales del HDD, lo que suele reducir latencia y favorecer muchas cargas de E/S. NVMe es una interfaz/protocolo para memoria no volátil con colas y paralelismo, no una tecnología de memoria ni sinónimo de SATA. No se limita conceptualmente a NAND flash y no garantiza ventaja idéntica en toda carga: influyen controlador, memoria, patrón de acceso y plataforma.

- Error A: Describe mecanismos de un HDD. Un SSD no obtiene su ventaja por girar más rápido o mover un cabezal, porque no utiliza esos mecanismos.
- Error B: Un SSD puede usar distintas interfaces, y NVMe no obliga a utilizar SATA. El documento primario describe PCIe y extensión a fabrics.
- Error D: El modelo NVMe utiliza colas y permite explotar paralelismo. No se caracteriza por suprimirlas o imponer ejecución secuencial de todas las peticiones.

- [Kingston: FAQs for SATA and M.2 SSDs](https://www.kingston.com/en/ssd/ssd-faq) · Preguntas What is an SSD?, How much faster is an SSD? y What is the difference?: ausencia de mecanismos móviles, cabezales/platos HDD y factores que condicionan rendimiento · versión: FAQ en línea sin versión documental declarada; no se adoptan porcentajes de velocidad, precio, capacidad, vida útil o rendimiento uniforme; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [NVM Express: NVMe Overview](https://nvmexpress.org/wp-content/uploads/NVMe_Overview.pdf) · Introduction, p. PDF 1; NVMe Protocol Advantages, p. PDF 3: memoria no volátil, latencia, PCIe/fabrics y múltiples colas; no solo flash ni SATA obligatorio · versión: Documento histórico sin fecha o revisión impresa identificada; History menciona trabajos y especificaciones de 2016. Solo fundamentos, no especificación o límites vigentes; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `e6d42da5bcd56a6d44e18d8cb89f93b8fe191fe63313bd7713263478a2ea3653` · propuesta: `24e6362f87eee990b1b7ab236d62111c5e5754f7318992a686d653cb7ebebd9b`
