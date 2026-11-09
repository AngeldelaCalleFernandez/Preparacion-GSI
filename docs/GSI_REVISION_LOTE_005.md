# GSI-EDITORIAL-005 — revisión propuesta

Preparado: 2026-10-26. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `5586497edf4f0c0f267c04fbdf70b80ffff8941d66690f1568d41e2f5fedc18c`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T09-002

Decisión: pending_review · acción: revise.

Motivo: Conservar SOLID como orientación contextual y sustituir opciones ajenas al diseño por interpretaciones rígidas o confusiones reales sobre clases, interfaces y pruebas.

### Antes

¿Cómo deben entenderse SOLID según los apuntes?

- A. Un estándar de cableado
- B. Heurísticas de diseño, no obligación de multiplicar clases **(correcta)**
- C. Leyes matemáticas de ejecución
- D. Un compilador

Explicación: Los principios orientan decisiones según contexto, sin imponer complejidad artificial.

### Propuesta

¿Cómo deben utilizarse los principios SOLID al tomar decisiones de diseño?

- A. Como una regla para crear una clase distinta por cada operación del programa.
- B. Como criterios para valorar responsabilidades, dependencias y cambios en su contexto. **(correcta)**
- C. Como una receta para añadir una interfaz por clase aunque no exista variación.
- D. Como una garantía de corrección del comportamiento que permite prescindir de pruebas.

Explicación: SOLID orienta cómo separar responsabilidades y gestionar dependencias y cambios. Aplicarlo requiere juicio sobre el problema: añadir clases o interfaces sin una separación útil puede introducir complejidad, y ningún principio reemplaza comprobar el comportamiento.

- Error A: Separar razones de cambio no equivale a asignar una clase a cada operación. Operaciones que responden a una misma responsabilidad pueden permanecer juntas.
- Error C: Depender de abstracciones útiles no exige una interfaz por clase. Una abstracción sin necesidad de separación o variación puede añadir coste sin mejorar el diseño.
- Error D: SOLID trata estructura y dependencias. Un diseño que siga esos criterios puede contener errores funcionales y necesita verificación.

- [Robert C. Martin: Solid Relevance](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html) · SRP, OCP, LSP, ISP y DIP: razones de cambio, separación, abstracciones y dependencias · versión: 18-10-2020; texto conceptual, no especificación obligatoria · comprobado: 2026-10-26

Partida: `78cb1e0040d680afc98da3ef11fa6baa68528b1e88c2ae6c287b6ed125ba8342` · propuesta: `64ab7ada8792b13b722d4cc39b6a4c863de52c461f2012a8531e4bc8e1de0b3d`

## AI-GSI-B3-T09-012

Decisión: pending_review · acción: revise.

Motivo: Conservar el concepto de entrega a usuarios y comparar con objetivos auténticos de las otras fases, sin presentar UP como una cascada de disciplinas exclusivas.

### Antes

¿Qué actividades destacan en Transición de UP?

- A. Solo visión inicial del negocio
- B. Eliminar todo soporte
- C. Despliegue, formación, correcciones y aceptación **(correcta)**
- D. Únicamente identificar riesgos sin construir

Explicación: Transición lleva el producto a sus usuarios y operación.

### Propuesta

¿Qué actividades destacan en la fase de Transición del Proceso Unificado (UP)?

- A. Definir la visión inicial, justificar la inversión y delimitar el alcance del producto.
- B. Resolver los principales riesgos arquitectónicos y establecer la arquitectura base.
- C. Desplegar, formar a los usuarios, corregir incidencias y obtener aceptación. **(correcta)**
- D. Construir e integrar la funcionalidad principal hasta disponer de una versión desplegable.

Explicación: Transición busca llevar una versión utilizable a sus usuarios: despliegue, formación, aceptación y ajustes a partir del uso. Puede incluir iteraciones de corrección; las disciplinas no quedan confinadas de forma absoluta a una sola fase.

- Error A: Visión, viabilidad y alcance son focos propios del inicio. Pueden revisarse después, pero no describen el propósito distintivo de Transición.
- Error B: Reducir los riesgos principales y estabilizar la arquitectura caracteriza Elaboración. Transición parte de una versión suficientemente madura para desplegar.
- Error D: Completar e integrar la funcionalidad principal caracteriza Construcción. Transición se centra en su puesta a disposición y aceptación por los usuarios.

- [IBM: The IBM Rational Unified Process for System z](https://www.redbooks.ibm.com/redbooks/pdfs/sg247362.pdf) · §2.4.4 Transition Phase, pp.24–26; §4.5.1 Transition objectives, p.47 · versión: Primera edición, julio de 2007, SG24-7362-00; descripción histórica de RUP · comprobado: 2026-10-26

Partida: `418076afeb46ad244266086383df4bfca1ace2b9c6a43e0eb4f829a555792f49` · propuesta: `45f44ed12f3aa083191e19bc4fdc6692f3aff4254200e487422676faab239d4c`

## AI-GSI-B3-T12-019

Decisión: pending_review · acción: revise.

Motivo: Precisar el perfil que exige iss, aud y exp y distinguir validación criptográfica y semántica; no afirmar que todos los claims registrados sean obligatorios en cualquier JWT.

### Antes

¿Qué debe validarse al aceptar un JWT firmado?

- A. Firma, emisor, audiencia, expiración y claims pertinentes **(correcta)**
- B. Solo que tenga tres fragmentos
- C. Que pueda decodificarse como texto
- D. Solo su longitud

Explicación: Decodificar no valida confianza ni destinatario o vigencia del token.

### Propuesta

Una API exige JWT firmados con emisor, audiencia y caducidad definidos por su perfil. ¿Qué debe comprobar antes de aceptar uno?

- A. Firma con clave y algoritmo admitidos, emisor, audiencia, vigencia y claims exigidos. **(correcta)**
- B. Firma con el algoritmo indicado por el propio token, dando por confiables sus claims.
- C. Firma con una clave del emisor, aceptando cualquier audiencia mientras no haya caducado.
- D. Emisor y audiencia del contenido decodificado, sin verificar su autenticidad criptográfica.

Explicación: La API debe verificar la firma usando algoritmos y claves admitidos y validar el emisor, el destinatario, la vigencia y los requisitos de su perfil. Decodificar no autentica; una firma válida tampoco hace válido un token destinado a otra API.

- Error B: El algoritmo recibido no establece por sí mismo la política de confianza. Además de verificar criptografía con parámetros permitidos, deben validarse los claims requeridos.
- Error C: Una firma correcta y la caducidad no sustituyen comprobar la audiencia. Un token auténtico para otro destinatario no autoriza esta API.
- Error D: Decodificar permite leer un contenido que cualquiera puede construir. Sin verificar autenticidad, emisor y audiencia declarados no son fiables.

- [IETF RFC 8725: JSON Web Token Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725.html) · §§3.1–3.3: algoritmos y operaciones criptográficas; §3.8: emisor; §3.9: audiencia; §3.12: reglas de validación según perfil · versión: BCP 225, febrero de 2020 · comprobado: 2026-10-26
- [IETF RFC 7519: JSON Web Token](https://www.rfc-editor.org/rfc/rfc7519.html) · §4.1: obligatoriedad de claims dependiente de la aplicación; §§4.1.1, 4.1.3 y 4.1.4: iss, aud y exp · versión: Mayo de 2015; actualizado en buenas prácticas por RFC 8725 · comprobado: 2026-10-26

Partida: `791ae15dcb4249279f29da356f8a466448ad60e2183e975c672a67b896a15ed7` · propuesta: `4220aefe824915cdcdf41a72c694b44346800032ed98403616b1921ab5452b73`

## AI-GSI-B3-T12-020

Decisión: pending_review · acción: revise.

Motivo: Conservar el microcaso de cita futura y explicitar la intención de hora local, distinguiendo zona, offset, abreviatura y configuración del cliente.

### Antes

Una cita futura depende de la hora local y sus reglas. ¿Qué conviene conservar además del instante cuando corresponda?

- A. Solo un desplazamiento fijo como representación universal de zona
- B. La zona horaria y su contexto de reglas **(correcta)**
- C. Solo la fecha sin hora ni zona
- D. Únicamente el formato visual de presentación

Explicación: Las reglas locales pueden cambiar; un offset no representa toda la zona.

### Propuesta

Una cita futura debe seguir celebrándose a las 09:00 de una localidad aunque cambien sus reglas de horario estacional. Además del instante calculado, ¿qué conviene conservar para recalcularlo?

- A. La fecha y hora local y un desplazamiento UTC fijo para todas las fechas.
- B. La fecha y hora local previstas, la zona identificada y el contexto de reglas usado. **(correcta)**
- C. El instante UTC y la abreviatura de zona, usada como identificador inequívoco.
- D. Fecha y hora local y la zona que tenga el navegador al consultar la agenda.

Explicación: La intención es conservar una hora civil en una zona concreta. Su identificador y las reglas pertinentes permiten revisar el instante si cambian las normas; el desplazamiento usado inicialmente no describe la evolución de esa zona. También deben resolverse horas ambiguas o inexistentes.

- Error A: Un desplazamiento indica una diferencia respecto a UTC en un momento, pero no incorpora las reglas futuras. Fijarlo puede desplazar la cita respecto a las 09:00 deseadas.
- Error C: Las abreviaturas pueden ser ambiguas y el instante fija un momento, no la intención de mantener la hora civil si cambian las reglas.
- Error D: La zona del navegador puede pertenecer a otro lugar o cambiar durante un viaje. No identifica de forma estable la localidad de la cita.

- [W3C: Working with Time and Timezones](https://www.w3.org/TR/timezone/) · §3.3.2 What defines a time zone?; §4.2.2 Past and Future Events · versión: Group Draft Note, 26-07-2025; guía en borrador, no Recomendación W3C · comprobado: 2026-10-26

Partida: `8c3829abf83023b2373fd2288e952c9cbb7cd9690a5e371308eb8266833f66c0` · propuesta: `39ed503b94633ec9b078026bf0edfecbb3a0c94f8f9a0f5091ec1bd4cca273a4`

## AI-GSI-B3-T13-013

Decisión: pending_review · acción: revise.

Motivo: Conservar la identificación conceptual de SQuaRE y confrontarla con ámbitos próximos de servicio, seguridad y gestión de proyectos.

### Antes

¿Qué organiza la familia SQuaRE?

- A. Requisitos y evaluación de calidad **(correcta)**
- B. Una jerarquía de permisos de red
- C. Únicamente programación gráfica
- D. Solo transporte de mensajes

Explicación: SQuaRE relaciona modelos, requisitos, medidas y evaluación de calidad.

### Propuesta

¿Qué organiza la familia de normas SQuaRE?

- A. Requisitos, modelos, medidas y evaluación de calidad de sistemas y software. **(correcta)**
- B. Procesos de gestión de servicios, como incidentes, niveles de servicio y peticiones.
- C. Controles y requisitos para gestionar la seguridad de la información de la organización.
- D. Prácticas para establecer el cronograma, el presupuesto y los contratos de un proyecto.

Explicación: SQuaRE agrupa normas sobre requisitos y evaluación de calidad de sistemas y software y relaciona sus modelos, medidas y documentos. Puede apoyar la gestión del proyecto o la seguridad del producto, pero su objeto no es sustituir sus marcos de gestión.

- Error B: Los procesos de gestión del servicio responden a otro ámbito. Pueden usar medidas de calidad, pero no definen el propósito de la familia SQuaRE.
- Error C: Gestionar la seguridad organizativa es el objeto de marcos específicos de seguridad. Que la calidad considere seguridad no convierte SQuaRE en ese sistema de gestión.
- Error D: Cronograma, presupuesto y contratación son decisiones de dirección del proyecto. SQuaRE estructura la calidad del sistema o software que se especifica y evalúa.

- [ISO/IEC 25000: Systems and software Quality Requirements and Evaluation — Guide to SQuaRE](https://www.iso.org/standard/64764.html) · Abstract: finalidad, contenido, modelos de referencia y relación de documentos de la familia SQuaRE · versión: ISO/IEC 25000:2014, edición 2; ficha confirma revisión en 2026 · comprobado: 2026-10-26
- [ISO/IEC 25020: Systems and software Quality Requirements and Evaluation — Quality measurement framework](https://www.iso.org/standard/72117.html) · Abstract: modelo de referencia, tipos de medidas y selección, construcción, planificación y uso de medidas de calidad · versión: ISO/IEC 25020:2019, edición 2; ficha confirma revisión en 2025 · comprobado: 2026-10-26

Partida: `abaa7dcd810827d55bb87c19baeb0854337e96ff88a2e514768534a838bc8555` · propuesta: `bcd68b0acc3ec88edf77cc5f2fb17bef4e29d7ff7929e1077d3b624ec5313984`

## AI-GSI-B3-T14-001

Decisión: pending_review · acción: revise.

Motivo: Conservar el enunciado directo y el inicio temprano, con alternativas que representan momentos reales pero insuficientes de incorporación.

### Antes

¿Cuándo debe incorporarse accesibilidad?

- A. Solo tras el primer despliegue
- B. Solo durante una auditoría externa
- C. Desde la concepción y requisitos **(correcta)**
- D. Únicamente después de una queja

Explicación: La accesibilidad es parte del diseño, no una adaptación final aislada.

### Propuesta

¿Cuándo debe incorporarse la accesibilidad al desarrollo de un servicio digital?

- A. Al estabilizar la interfaz, para evitar que las pruebas accesibles condicionen el diseño inicial.
- B. Al cerrar la construcción, tratando los criterios accesibles como comprobaciones finales.
- C. Desde la concepción y los requisitos, y de forma continua durante diseño, pruebas y evolución. **(correcta)**
- D. Tras publicar una versión, utilizando las incidencias de usuarios como entrada inicial al diseño.

Explicación: La accesibilidad debe orientar requisitos y decisiones desde el comienzo y evaluarse durante la evolución del servicio, incluyendo a usuarios con discapacidad. Así pueden detectarse barreras en tareas y diseño antes de consolidarlas; una auditoría final complementa ese trabajo.

- Error A: Esperar a una interfaz estable puede consolidar barreras de interacción o estructura. La evaluación temprana debe poder influir en el diseño.
- Error B: Una comprobación final llega tarde para decisiones de requisitos, arquitectura o componentes que afectan a la accesibilidad.
- Error D: Las incidencias aportan información después del lanzamiento, pero no justifican omitir planificación y validación accesibles antes de publicar.

- [W3C WAI: Involving Users in Web Projects for Better, Easier Accessibility](https://www.w3.org/WAI/planning/involving-users/) · How to Involve Users throughout Your Project; Including Users to Understand the Issues; Including Users in Implementation · versión: Guía web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `02766b2a7f7496bf0df4c4953720a957bc8f4d3dcd54c1a79f1817084f77d306` · propuesta: `3702d92400b2879f963ee04fdeb9ecca29a5e02e54a344eca9bbccba35ebe3e3`

## AI-GSI-B3-T14-009

Decisión: pending_review · acción: revise.

Motivo: Conservar las tres dimensiones y explicitar el contexto requerido, comparándolas con otros atributos de calidad y diseño sin caricaturizarlos.

### Antes

¿Qué dimensiones definen usabilidad en contexto?

- A. Únicamente satisfacción sin eficacia de tareas
- B. Solo rapidez de carga
- C. Solo conformidad técnica WCAG
- D. Eficacia, eficiencia y satisfacción **(correcta)**

Explicación: La usabilidad valora conseguir tareas, recursos necesarios y satisfacción en un contexto.

### Propuesta

¿Qué dimensiones definen la usabilidad para usuarios, objetivos y contexto de uso especificados?

- A. Disponibilidad, fiabilidad y capacidad de recuperación.
- B. Aprendizaje, atractivo visual y uniformidad gráfica.
- C. Tiempo de respuesta, rendimiento y escalabilidad.
- D. Eficacia, eficiencia y satisfacción. **(correcta)**

Explicación: La usabilidad considera si los usuarios logran sus objetivos, qué recursos emplean y cómo valoran la experiencia de uso en el contexto definido. Conseguir la tarea, hacerlo con poco esfuerzo y quedar satisfecho son dimensiones relacionadas, pero no equivalentes.

- Error A: Son cualidades relacionadas con continuidad y recuperación del servicio. No forman la definición de usabilidad aunque puedan afectar al uso.
- Error B: Aprendizaje y apariencia pueden influir en la interacción, pero ese conjunto omite la definición basada en resultados, recursos y satisfacción.
- Error C: Son aspectos de rendimiento y capacidad técnica. Un sistema rápido puede seguir impidiendo que el usuario complete correctamente la tarea.

- [ISO 9241-115: Guidance on conceptual design, user-system interaction design, user interface design and navigation design](https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso%3A9241%3A-115%3Aed-1%3Av1%3Aen) · §3.3.1 Context of use; §3.4.3 Usability, que reproduce ISO 9241-11:2018 §3.1.1 · versión: ISO 9241-115:2024; vista pública de términos · comprobado: 2026-10-26

Partida: `ddcf28ec982420fa0aa881e9af6fd930a9c92b2a36a4b7e292fcc064c98ca33c` · propuesta: `4e654af32a942137ee0fe363d7f165eb61e15c29cf6499ab71d9e41349025119`

## AI-GSI-B3-T14-010

Decisión: pending_review · acción: revise.

Motivo: Conservar el alcance global y temporal de UX y evitar reducir usabilidad a apariencia; contrastar métricas de tareas y sistema visual con experiencia completa.

### Antes

¿Qué abarca UX más allá de la estética?

- A. Únicamente tipografía y color
- B. Experiencia antes, durante y después, incluida confianza y utilidad **(correcta)**
- C. Solo diseño visual de pantallas
- D. Solo organización estética de componentes

Explicación: UX incluye percepción y experiencia global, no solo apariencia de la interfaz.

### Propuesta

¿Qué abarca la experiencia de usuario (UX) más allá de la estética de una interfaz?

- A. La composición gráfica, la tipografía y los colores empleados en cada pantalla.
- B. Percepciones y respuestas antes, durante y después del uso, incluidas utilidad y confianza. **(correcta)**
- C. Éxito y duración de las tareas como descripción completa de la experiencia.
- D. Coherencia de menús y componentes como descripción completa de la experiencia.

Explicación: La UX incluye percepciones y respuestas asociadas al uso y a su anticipación, influidas por funcionalidad, expectativas, contexto y experiencias previas. La utilidad percibida y la confianza pueden formar parte de ella; una interfaz atractiva no las garantiza.

- Error A: La composición visual influye en la experiencia, pero no cubre expectativas, comportamiento del servicio, ayuda ni valoración posterior.
- Error C: Completar tareas y medir tiempo informa sobre eficacia y eficiencia. Esos datos no describen por sí solos todas las percepciones y respuestas de la UX.
- Error D: La coherencia de componentes es una decisión de interfaz que puede ayudar al uso. No engloba la experiencia anticipada ni sus factores funcionales y contextuales.

- [ISO 9241-115: Guidance on conceptual design, user-system interaction design, user interface design and navigation design](https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso%3A9241%3A-115%3Aed-1%3Av1%3Aen) · §3.4.4 User experience, notas 1 y 2: percepciones, respuestas, antes/durante/después y factores del sistema y del usuario · versión: ISO 9241-115:2024; vista pública de términos · comprobado: 2026-10-26

Partida: `6611f08e518464b8ea406e68f694c22ed8d138da492e72b5fb5f816cc8dd6b5a` · propuesta: `6182ad007cd9af877afe36d7d48009ca1c91a8bd9b7f6119f55120e3bbf22d22`

## AI-GSI-B4-T01-001

Decisión: pending_review · acción: revise.

Motivo: Conservar operación segura, disponible y recuperable como objetivo e introducir errores plausibles de visión limitada a instalación, utilización o imagen inicial.

### Antes

¿Qué objetivo resume la administración del sistema operativo?

- A. Solo adquirir licencias
- B. Solo completar la instalación inicial
- C. Cambiar hardware en cada incidencia
- D. Mantener una plataforma segura, disponible y recuperable durante su ciclo **(correcta)**

Explicación: Administrar comprende operación, control y recuperación continuados.

### Propuesta

¿Qué objetivo resume la administración de un sistema operativo durante su vida en servicio?

- A. Completar la instalación y entregar la configuración inicial como estado definitivo.
- B. Maximizar la utilización de recursos dando prioridad a ocupación frente a continuidad.
- C. Restablecer la imagen inicial ante incidencias, sin gestionar los cambios acumulados.
- D. Mantener una plataforma segura, disponible y recuperable durante su ciclo operativo. **(correcta)**

Explicación: La administración incluye operación, actualizaciones, configuración, vigilancia y recuperación a lo largo del servicio. Instalación y respuesta a incidencias son partes de ese trabajo; la configuración debe seguir respondiendo a requisitos y cambios, sin perder capacidad de restauración.

- Error A: Una instalación correcta no elimina vulnerabilidades, cambios ni necesidades de mantenimiento que aparecen durante la operación.
- Error B: Ocupar recursos no es el fin del servicio. Saturarlos puede reducir disponibilidad y margen para fallos o picos de demanda.
- Error C: Una imagen inicial puede quedar desactualizada o perder configuración y datos necesarios. Recuperar exige gestionar versiones, copias y cambios válidos.

- [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) · §4 Securing the Server Operating System; §6 Maintaining the Security of the Server; §§6.1 Logging y 6.2 Server Backup Procedures · versión: Julio de 2008; guía histórica de principios operativos, no catálogo actual de mecanismos · comprobado: 2026-10-26

Partida: `b079a9363a557224d91d5e93ac68e325b0079a35587c5267ecffc5cf5eb63902` · propuesta: `a24e9743e3be42869a8d009af6826b5d820fb6750c3c75c09a3f711d88290dde`

## AI-GSI-B4-T01-010

Decisión: pending_review · acción: revise.

Motivo: Conservar los datos operativos y añadir dependencias, distinguiendo documentación de desarrollo y procedimientos de servicio; systemd es un ejemplo, no un formato universal.

### Antes

¿Qué información operativa necesita un servicio?

- A. Solo la cuenta propietaria sin observabilidad ni recuperación
- B. Propietario, cuenta, arranque, puertos, logs y recuperación **(correcta)**
- C. Solo nombre y versión del binario
- D. Únicamente el comando de arranque sin dependencias

Explicación: La administración requiere contexto para arrancar, observar y recuperar el servicio.

### Propuesta

¿Qué información operativa debe documentarse para poder arrancar, supervisar y recuperar un servicio?

- A. Cuenta, nombre del binario y fecha de alta, remitiendo el diagnóstico a sus creadores.
- B. Responsable, cuenta, arranque, dependencias, puertos, registros y procedimiento de recuperación. **(correcta)**
- C. Repositorio, historial de cambios y lista de entregas, como descripción operativa.
- D. Comando de inicio y configuración de red, dando por demostrada la recuperación al arrancar.

Explicación: La operación necesita saber quién responde por el servicio, con qué identidad y dependencias se ejecuta, cómo observarlo y cómo recuperarlo. Los campos concretos dependen de la plataforma; iniciar un proceso no demuestra que el servicio esté sano ni que pueda restaurarse.

- Error A: Identidad y binario son necesarios, pero remitir el diagnóstico a sus creadores deja sin procedimientos reproducibles al personal de operación.
- Error C: La trazabilidad del código no documenta necesariamente cuentas, dependencias, registros o recuperación del servicio desplegado.
- Error D: Arrancar y configurar red no prueban funcionamiento ni restauración. Faltan observación, responsabilidades y respuesta a fallos.

- [systemd: systemd.service](https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html) · Description; Automatic Dependencies; ExecStart=; Restart= y RestartSec= · versión: Manual web systemd 262 consultado el 26-10-2026 · comprobado: 2026-10-26
- [systemd: systemd.exec](https://www.freedesktop.org/software/systemd/man/latest/systemd.exec.html) · User=; StandardOutput=; StandardError=; Process Exit Codes, tablas 8–10; advertencia sobre secretos en Environment= · versión: Manual web systemd 262 consultado el 26-10-2026 · comprobado: 2026-10-26
- [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) · §4 Securing the Server Operating System; §6 Maintaining the Security of the Server; §§6.1 Logging y 6.2 Server Backup Procedures · versión: Julio de 2008; guía histórica de principios operativos, no catálogo actual de mecanismos · comprobado: 2026-10-26

Partida: `edd8c97ed2b9f951a3248eebc59a087c38c71c59b14feedfd0b6829e41c4339c` · propuesta: `502715744e09e1c3b9ec4e32e12fd3089372dc4234703d1c3a848fb70f3a5dc1`

## AI-GSI-B4-T01-012

Decisión: pending_review · acción: revise.

Motivo: Conservar observabilidad y protección de secretos y distinguir disparo del planificador, salida textual y resultado; no atribuir registro completo automático a todo planificador.

### Antes

¿Qué deben registrar las tareas programadas?

- A. Credenciales en claro
- B. Nada, porque siempre funcionan
- C. Solo su nombre sin estado
- D. Resultado de ejecución y errores relevantes **(correcta)**

Explicación: Los jobs deben ser observables y evitar secretos embebidos.

### Propuesta

¿Qué debe registrar una tarea programada para poder comprobar su ejecución y diagnosticar fallos?

- A. La hora prevista y el nombre de la tarea, dando el vencimiento por prueba de ejecución.
- B. El último mensaje emitido, tomando su existencia como confirmación de éxito del trabajo.
- C. Los parámetros y las credenciales utilizadas, para repetir la ejecución desde el registro.
- D. Inicio y fin, estado o código de salida y errores relevantes, sin exponer secretos. **(correcta)**

Explicación: El registro debe permitir distinguir planificación, inicio, finalización y resultado, conservando errores útiles para investigar. La salida de la aplicación puede requerir comprobaciones adicionales: un mensaje o un código cero no garantizan por sí solos que el objetivo funcional se haya cumplido.

- Error A: Una fecha planificada no acredita que el planificador lanzara la tarea ni que esta terminara. Se necesita evidencia de ejecución y resultado.
- Error B: Emitir un mensaje no equivale a completar el trabajo. También deben registrarse estado final y errores, interpretándolos según el contrato de la tarea.
- Error C: Los secretos no deben volcarse en registros. La repetición debe usar mecanismos de credenciales protegidos y registrar contexto sin exponerlos.

- [systemd: systemd.exec](https://www.freedesktop.org/software/systemd/man/latest/systemd.exec.html) · User=; StandardOutput=; StandardError=; Process Exit Codes, tablas 8–10; advertencia sobre secretos en Environment= · versión: Manual web systemd 262 consultado el 26-10-2026 · comprobado: 2026-10-26
- [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) · §4 Securing the Server Operating System; §6 Maintaining the Security of the Server; §§6.1 Logging y 6.2 Server Backup Procedures · versión: Julio de 2008; guía histórica de principios operativos, no catálogo actual de mecanismos · comprobado: 2026-10-26

Partida: `5a68969de0298fcf56b69af1d36c9cfb13caf945eff6ff28bdfb5a816e719c42` · propuesta: `51ff53a08eac206188acc014fa5fe9ee5dc56991ad2c5e0a3bc1b43ae5ec238f`

## AI-GSI-B4-T01-014

Decisión: pending_review · acción: revise.

Motivo: Concretar ext4 y muchos archivos pequeños para evaluar la diferencia entre bloques e inodos sin presentar el diagnóstico como exclusivo ni extenderlo a todos los sistemas de archivos.

### Antes

¿Qué debe vigilarse además del espacio en ciertos sistemas de archivos?

- A. Únicamente ancho de banda de red
- B. Solo número de sesiones activas
- C. Inodos o metadatos equivalentes **(correcta)**
- D. Solo porcentaje de CPU

Explicación: Puede agotarse capacidad de metadatos aunque queden bytes disponibles.

### Propuesta

En un volumen ext4 quedan bloques libres, pero no se pueden crear nuevos archivos tras generar millones de ficheros pequeños. ¿Qué capacidad conviene comprobar además de los bytes disponibles?

- A. La tasa de transferencia del dispositivo.
- B. El porcentaje de páginas de memoria caché.
- C. El número de inodos libres del volumen. **(correcta)**
- D. El límite de procesos del usuario.

Explicación: Cada archivo necesita un inodo y la reserva de inodos puede agotarse antes que los bloques de datos. En ext4 debe vigilarse también esa capacidad; df -i permite consultarla. El síntoma orienta la comprobación, sin excluir por sí solo cuotas, permisos u otras causas.

- Error A: La tasa de transferencia describe rendimiento, no la disponibilidad de entradas de metadatos para crear archivos nuevos.
- Error B: La caché de memoria afecta al acceso y al rendimiento, pero no crea nuevos inodos disponibles en el volumen.
- Error D: El límite de procesos controla ejecución concurrente. No mide la capacidad de metadatos que puede agotarse al crear muchos archivos.

- [The Linux Kernel: ext4, Index Nodes](https://www.kernel.org/doc/html/latest/filesystems/ext4/inodes.html) · §4.1 Index Nodes: inodos por archivo y tabla dimensionada mediante s_inodes_per_group · versión: Documentación web ext4 consultada el 26-10-2026 · comprobado: 2026-10-26
- [GNU Coreutils: df invocation](https://www.gnu.org/s/coreutils/manual/html_node/df-invocation.html) · §14.1, opción -i / --inodes: uso de inodos frente a bloques; campos itotal, iused e iavail · versión: Manual web GNU Coreutils 9.11; contenido primario indexado contrastado el 26-10-2026 · comprobado: 2026-10-26

Partida: `6d18c10bb646af3d74d640bfa5595a52273a2e52c8a32473b1da9babd5e9e5d2` · propuesta: `47e051a620b6c0e9d6b1f30b4f3c656a5371e230a117a90f4f0ed3606d54d207`

## AI-GSI-B4-T02-002

Decisión: pending_review · acción: revise.

Motivo: Conservar el alcance operativo del DBA y contraponer subconjuntos reales de su trabajo; no atribuir toda la seguridad organizativa a una única persona.

### Antes

¿Qué responsabilidad corresponde al DBA además de instalar?

- A. Solo administrar privilegios e ignorar recuperación
- B. Delegar toda capacidad en la configuración por defecto
- C. Capacidad, seguridad, rendimiento y recuperación **(correcta)**
- D. Únicamente instalar la versión inicial

Explicación: El DBA convierte el motor en un servicio mantenido y fiable.

### Propuesta

¿Qué responsabilidad corresponde a la administración de bases de datos además de instalar el SGBD?

- A. Administrar permisos, confiando en los valores iniciales para capacidad y recuperación.
- B. Optimizar consultas, tomando su rendimiento por prueba de seguridad y recuperabilidad.
- C. Gestionar capacidad, seguridad, rendimiento y recuperación durante la operación del servicio. **(correcta)**
- D. Actualizar el motor, delegando en el soporte la verificación de copias y restauraciones.

Explicación: Administrar el SGBD exige mantener un servicio seguro y recuperable con capacidad y rendimiento suficientes. Son responsabilidades complementarias: instalar, actualizar u optimizar consultas no sustituye gestionar privilegios, crecimiento y procedimientos de copia y restauración.

- Error A: Gestionar accesos no garantiza espacio suficiente ni copias recuperables. Los valores iniciales no acreditan adecuación continuada a la carga.
- Error B: Una consulta rápida puede ejecutarse sobre un sistema mal protegido o sin recuperación probada. El rendimiento no acredita esos otros objetivos.
- Error D: El soporte y las actualizaciones son útiles, pero no verifican que las copias del entorno concreto puedan restaurarse.

- [PostgreSQL: Server Administration](https://www.postgresql.org/docs/18/admin.html) · Introducción; capítulos 19 Server Configuration, 21 Database Roles, 24 Routine Database Maintenance Tasks, 25 Backup and Restore y 27 Monitoring Database Activity · versión: PostgreSQL 18; documentación consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `53aa45894113e76efa03b640fc7c4529b62701b20ae16eeb8b2e0a2ca0e362f3` · propuesta: `98f5e67453e3fe242925cb5e9cb1af1ac70a53a43a9e016f0e1f9250f8e53819`

## AI-GSI-B4-T02-003

Decisión: pending_review · acción: revise.

Motivo: Conservar las cuatro áreas operativas y usar distracciones basadas en observación incompleta del espacio; distinguir WAL transaccional de logs de diagnóstico.

### Antes

¿Qué espacios deben vigilarse en un SGBD?

- A. Datos, índices, temporales y logs **(correcta)**
- B. Solo las copias del manual
- C. Solo el ejecutable
- D. Únicamente perfiles del navegador

Explicación: Crecimiento y latencia de distintos espacios afectan al servicio.

### Propuesta

¿Qué espacios deben vigilarse al administrar un SGBD para evitar agotamiento durante su operación?

- A. Los ocupados por datos, índices, temporales y registros de transacciones. **(correcta)**
- B. Los ocupados por tablas de usuario, tomando su tamaño como el consumo total del servicio.
- C. Los ocupados por el catálogo y los binarios, tomando la instalación como tamaño estable.
- D. Los ocupados por copias históricas, suponiendo constante el espacio del motor en ejecución.

Explicación: Datos, índices, temporales y registros transaccionales tienen patrones de crecimiento distintos y pueden agotar sus volúmenes. También deben vigilarse las copias y otros registros según el despliegue; la lista no impone un disco separado por cada tipo ni autoriza borrar archivos internos.

- Error B: El tamaño de las tablas no incluye necesariamente índices, temporales ni WAL. Una operación puede llenar otro espacio aunque las tablas apenas crezcan.
- Error C: Catálogo y binarios no representan el crecimiento de datos ni el espacio que necesitan consultas, índices y registro transaccional.
- Error D: Vigilar retención de copias es necesario, pero el motor activo también consume espacio variable y puede detenerse si lo agota.

- [PostgreSQL: Monitoring Disk Usage](https://www.postgresql.org/docs/18/diskusage.html) · §27.6.1 Determining Disk Usage; §27.6.2 Disk Full Failure, incluida falta de espacio para WAL · versión: PostgreSQL 18 · comprobado: 2026-10-26
- [PostgreSQL: Database File Layout](https://www.postgresql.org/docs/18/storage-file-layout.html) · §66.1: archivos de tablas e índices, pg_wal y temporales pgsql_tmp · versión: PostgreSQL 18 · comprobado: 2026-10-26

Partida: `9bbcdef5c25be48a955394df9ff9837585bd2f489d5b4a4f99157270d4a48bfd` · propuesta: `9ca3f742e660eba5f6645f0ef5e10621bb6f4e7e81b06fa21f3c2591fd837cfe`

## AI-GSI-B4-T02-015

Decisión: pending_review · acción: revise.

Motivo: Mantener logs/WAL y política compatible como concepto, explicitando copia base y continuidad para que no parezca que WAL aislado permite recuperar cualquier estado.

### Antes

¿Qué mecanismo puede permitir PITR?

- A. Únicamente una exportación sin historial de cambios
- B. Una captura de estructura sin datos
- C. Logs de transacciones o WAL con una política compatible **(correcta)**
- D. Solo la última réplica sin puntos anteriores

Explicación: La recuperación a un punto requiere copias y logs adecuados al motor.

### Propuesta

Tras borrar datos por error en PostgreSQL, se quiere recuperar el estado inmediatamente anterior. ¿Qué preparación permite realizar PITR mediante archivado continuo?

- A. Un volcado lógico y el último WAL, aunque falten segmentos intermedios.
- B. Una réplica que ya reprodujo el borrado, sin conservar un estado anterior.
- C. Una copia base válida y la secuencia continua de WAL necesaria hasta el punto elegido. **(correcta)**
- D. Un volcado del esquema y los WAL, sin una copia física inicial de los datos.

Explicación: PITR restaura una copia base válida y reproduce los WAL archivados hasta el objetivo elegido antes del borrado. Hace falta una secuencia continua desde el inicio requerido por la copia; disponer de registros aislados o de una réplica ya afectada no proporciona ese estado anterior.

- Error A: Un volcado lógico de pg_dump no es una copia base para reproducir WAL. Además, los huecos en la secuencia impiden la recuperación continua hasta el objetivo.
- Error B: La réplica descrita ya contiene el borrado. La replicación del estado actual no sustituye conservar una base y un historial recuperable.
- Error D: El esquema define estructura, pero no aporta los archivos físicos de datos requeridos por este mecanismo de reproducción de WAL.

- [PostgreSQL: Continuous Archiving and Point-in-Time Recovery](https://www.postgresql.org/docs/18/continuous-archiving.html) · §25.3: copia base y secuencia continua de WAL; §25.3.5 Recovering Using a Continuous Archive Backup; nota sobre pg_dump · versión: PostgreSQL 18 · comprobado: 2026-10-26

Partida: `220152f3c3ea38fe744de43e4de70475f77a00bfb902b2a6091356b8c82a955a` · propuesta: `12f79a59b49b3a7c2c93a17be8d84222f08b5f08a638003bae6cd2f1086a52fa`

## AI-GSI-B4-T03-006

Decisión: pending_review · acción: revise.

Motivo: Conservar impacto y urgencia y comparar con criterios de asignación, escalado y esfuerzo que pueden confundirse con prioridad; no imponer una matriz universal.

### Antes

¿Qué factores suelen combinarse para priorizar incidentes?

- A. Solo cantidad de palabras del ticket
- B. Solo orden de llegada
- C. Impacto y urgencia **(correcta)**
- D. Solo antigüedad del usuario

Explicación: La prioridad debe reflejar efecto y necesidad temporal de actuación.

### Propuesta

¿Qué factores suelen combinarse para asignar prioridad a un incidente de servicio?

- A. Antigüedad del aviso y posición del solicitante en el organigrama.
- B. Complejidad técnica prevista y disponibilidad del especialista asignado.
- C. Impacto sobre el servicio y urgencia temporal de la actuación. **(correcta)**
- D. Número de mensajes recibidos y duración estimada de la reparación.

Explicación: El impacto expresa el efecto sobre el servicio o negocio y la urgencia, la necesidad temporal de actuar. La política acordada suele combinarlos para priorizar; el esfuerzo de reparación, la presión del solicitante o la disponibilidad condicionan la gestión, pero no sustituyen esa valoración.

- Error A: Antigüedad y jerarquía pueden influir en comunicación o escalado, pero no describen el efecto del incidente y el tiempo disponible para evitar sus consecuencias.
- Error B: La complejidad y los recursos ayudan a organizar la resolución. Un incidente fácil o con especialista disponible no es necesariamente el más prioritario.
- Error D: Muchos mensajes no garantizan mayor impacto y el tiempo de reparación no mide por sí mismo la urgencia del servicio afectado.

- [Atlassian: How impact and urgency are used to calculate priority](https://support.atlassian.com/jira-service-management-cloud/docs/how-impact-and-urgency-are-used-to-calculate-priority/) · Definiciones Impact, Urgency y Priority; relación con la matriz de prioridad · versión: Jira Service Management Cloud; guía web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `47fd292a473c4407f20dda5f40f1e255e166e5268140de9eed9c1b8279bd4f3b` · propuesta: `9b3b3eb0feb508031d583a951086afebf6383f74e719ba3f05b8c51c7ab0d294`

## AI-GSI-B4-T03-014

Decisión: pending_review · acción: revise.

Motivo: Conservar el equilibrio copia/restauración e introducir errores reales de optimización de una sola variable; evitar recomendar un tipo universal.

### Antes

¿Qué condiciona elegir tipos de copia?

- A. Solo el espacio libre actual sin prever retención
- B. Solo el tamaño del backup sin considerar restore
- C. Únicamente velocidad de copia
- D. Ventana, almacenamiento, tráfico y tiempo de restauración **(correcta)**

Explicación: La política debe equilibrar operación de copia y recuperación.

### Propuesta

¿Qué debe equilibrarse al elegir una política de copias completas, incrementales o diferenciales?

- A. La menor duración de copia, dando por equivalente el trabajo posterior de restauración.
- B. El menor volumen almacenado, dando por independiente la recuperación de la cadena conservada.
- C. La mayor frecuencia posible, dando por garantizados así los objetivos de recuperación.
- D. Ventana de copia, almacenamiento, tráfico y tiempo y condiciones de restauración. **(correcta)**

Explicación: La política debe considerar el coste de producir y conservar las copias y el de restaurarlas con sus dependencias. Una copia más pequeña o rápida puede exigir más pasos al recuperar; la elección debe contrastarse con pérdida de datos y tiempo de recuperación admisibles, y probarse.

- Error A: Reducir la duración de copia no asegura una restauración igual de rápida. La combinación elegida puede requerir aplicar varios conjuntos y registros.
- Error B: Ahorrar almacenamiento puede aumentar dependencias de la cadena. Si falta una pieza necesaria, el ahorro no garantiza recuperar el punto previsto.
- Error C: La frecuencia mejora la disponibilidad de puntos de copia si estos son válidos, pero no demuestra restauración correcta ni cumplimiento del tiempo objetivo.

- [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) · §6.2.1 Server Data Backup Policies; §6.2.2 Server Backup Types: completas, incrementales y diferenciales; §6.2.3 Maintain a Test Server · versión: Julio de 2008; principios de compromiso entre copia y restauración · comprobado: 2026-10-26

Partida: `614dd4a5d7d2bfbc36bd6c329c8125493f3900cd48ea893386527015292d52a7` · propuesta: `63d24bfc0796f5ab24259d3b4f39dd667b3f3c692a5a641eeebb8d5f2bc58bdd`

## AI-GSI-B4-T03-017

Decisión: pending_review · acción: revise.

Motivo: Aplicar la distinción entre restaurar archivos y recuperar servicio a una aceptación concreta con integridad ya verificada; no confundir arranque con salud funcional.

### Antes

¿Qué debe verificar una restauración además de lectura de ficheros?

- A. Solo éxito del trabajo de backup
- B. Solo existencia de archivos
- C. Únicamente tamaño de la copia
- D. Integridad funcional del servicio y sus dependencias **(correcta)**

Explicación: Recuperar archivos no demuestra que aplicación, configuración y datos funcionen juntos.

### Propuesta

En una prueba de restauración se han recuperado todos los archivos y sus hashes coinciden. ¿Qué falta comprobar antes de dar por recuperado el servicio?

- A. Que el catálogo de copias conserve el estado de éxito del trabajo que las generó.
- B. Que el tamaño restaurado coincida con el registrado, usando ese dato como aceptación final.
- C. Que el proceso principal pueda iniciarse, dando su presencia por prueba de todas las funciones.
- D. Que las funciones del servicio y sus dependencias operen con datos y configuración coherentes. **(correcta)**

Explicación: La integridad de archivos es necesaria, pero no acredita que funcionen aplicación, datos, configuración y dependencias. Deben ejecutarse comprobaciones funcionales representativas y contrastar objetivos de recuperación; un proceso iniciado puede seguir sin prestar el servicio esperado.

- Error A: El éxito del trabajo de copia es evidencia de una etapa previa. No prueba que la restauración produzca un servicio utilizable.
- Error B: Coincidir en tamaño aporta menos que la integridad ya comprobada y no demuestra acceso a datos, configuración correcta ni transacciones de negocio.
- Error C: Un proceso puede estar vivo y fallar al acceder a una base de datos, autenticación u otra dependencia. Hace falta validar funciones de servicio.

- [AWS: Recovery strategies to meet data residency requirements](https://aws.amazon.com/blogs/architecture/recovery-strategies-to-meet-data-residency-requirements/) · Testing: prueba de extremo a extremo, integridad, arranque de cómputo/base de datos y tráfico sintético · versión: Artículo web consultado el 26-10-2026; se usa el principio de validación funcional, no una estrategia territorial concreta · comprobado: 2026-10-26

Partida: `77f0b8afe7f76e09880ca7973047aeb2dcc6e1c302804fe225b66c3808991f4d` · propuesta: `222222953ef9b53815ff66b4458ab3ab7114cf7d750c70e95790167127dabe4c`

## AI-GSI-B4-T04-006

Decisión: pending_review · acción: revise.

Motivo: Conservar impacto, riesgo y dependencias y relacionarlos con validación y recuperación; no imponer aprobación manual por comité a todos los cambios.

### Antes

¿Qué debe examinarse antes de autorizar un cambio relevante?

- A. Solo duración prevista sin dependencias
- B. Únicamente urgencia declarada sin impacto
- C. Impacto, riesgo y dependencias **(correcta)**
- D. Solo facilidad de ejecutar el comando

Explicación: La decisión necesita comprender efectos sobre el servicio y su recuperación.

### Propuesta

¿Qué debe examinarse antes de autorizar un cambio relevante sobre un servicio?

- A. Duración y destreza del ejecutor, tomadas como medida del riesgo del servicio.
- B. Urgencia y fecha comprometida, dejando las dependencias para después de autorizar.
- C. Impacto, riesgos, dependencias y condiciones para verificar o recuperar el servicio. **(correcta)**
- D. Facilidad de revertir el comando, como garantía de recuperar los datos y servicios.

Explicación: Autorizar requiere valorar los efectos previstos sobre servicio, seguridad y componentes relacionados, los riesgos y cómo comprobar o recuperar el estado esperado. La profundidad del análisis y la vía de autorización deben ajustarse al cambio; urgencia o facilidad técnica no eliminan esas necesidades.

- Error A: Duración y experiencia influyen en la ejecución, pero no revelan por sí mismas efectos sobre usuarios, datos o componentes dependientes.
- Error B: La urgencia puede exigir un cauce de emergencia, pero no hace desaparecer el impacto ni las dependencias que deben gestionarse.
- Error D: Invertir un comando no garantiza deshacer efectos sobre datos o consumidores. La recuperación necesita condiciones y procedimientos comprobables.

- [NIST SP 800-128: Guide for Security-Focused Configuration Management of Information Systems](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-128.pdf) · §3.3.2 Implement Configuration Change Control Process, pp.36–37; §3.3.3 Conduct Security Impact Analysis, pp.38–39 · versión: Agosto de 2011, actualizaciones del 10-10-2019 · comprobado: 2026-10-26

Partida: `95f8be6322ecd4007647b39cb161724dfe3de3ca32fcb9cffb5e7f03bb4f288c` · propuesta: `b1832ab9c754f26caa3557e402f04464124afe1088b360b810c33f45ecda84de`

## AI-GSI-B4-T04-018

Decisión: pending_review · acción: revise.

Motivo: Conservar crecimiento, estacionalidad, perfiles y SLO y aplicar el plan a picos ocultos por la media; usar pruebas para traducir recursos en capacidad.

### Antes

¿Qué datos alimentan un plan de capacidad?

- A. Crecimiento, estacionalidad, perfiles horarios y SLO **(correcta)**
- B. Solo utilización media actual
- C. Únicamente inventario de CPU sin demanda
- D. Un margen fijo universal para cualquier carga

Explicación: La capacidad traduce demanda prevista en recursos y margen.

### Propuesta

Un servicio mantiene su consumo medio mensual, pero espera picos mayores en campaña y debe cumplir sus SLO. ¿Qué datos deben alimentar el plan de capacidad?

- A. Previsión de crecimiento y estacionalidad, perfiles por franja, SLO y capacidad probada. **(correcta)**
- B. Promedio mensual y recurso actualmente más ocupado, extrapolando una demanda uniforme.
- C. Inventario de CPU y memoria y capacidad nominal, sin contrastarlos con la mezcla de peticiones.
- D. Máximo histórico y margen porcentual fijo, suponiendo que bastan para cualquier carga futura.

Explicación: La capacidad debe responder a demanda prevista y distribución temporal, objetivos de servicio y rendimiento observado bajo cargas representativas. Los promedios pueden ocultar picos; pruebas y observación permiten revisar supuestos, cuellos de botella y margen ante fallos, sin una reserva universal.

- Error B: Un promedio igual puede ocultar una campaña mucho más concentrada. La extrapolación uniforme ignora el cambio que plantea el caso.
- Error C: Los recursos instalados no indican cuántas peticiones se atienden cumpliendo SLO. La mezcla de trabajo y sus cuellos de botella deben medirse.
- Error D: El máximo pasado no incorpora necesariamente crecimiento ni cambios de carga. Un porcentaje fijo no demuestra cumplimiento de los SLO futuros.

- [Google SRE: A Collection of Best Practices for Production Services](https://sre.google/sre-book/service-best-practices/) · Capacity Planning: previsión frente a demanda real, pruebas de carga, picos y capacidad ante indisponibilidad · versión: SRE Book, apéndice B, edición web consultada el 26-10-2026; ejemplos de Google no son márgenes universales · comprobado: 2026-10-26

Partida: `59935f49d56f96d263bd07541c9da85004b15eacf625ac302f0de7eb20e96384` · propuesta: `33f253a12779d151c2b7b652fb8e30591b7d10e36e2aece15ec8bd9d6f35ba99`
