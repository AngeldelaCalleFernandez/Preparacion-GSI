# GSI-EDITORIAL-025 — revisión propuesta

Preparado: 2026-10-27. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `2d77b1a430cab26d729682c426c7387e2fe340e4a6bd4630f7854663c92e9558`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P17-140

Decisión: pending_review · acción: revise.

Motivo: Conservar el microcaso de selección Windows/Linux y clave A; comparar criterios profesionales próximos sin reducir la decisión a un único indicador.

### Antes

Una organización debe elegir Windows o Linux para un servicio. ¿Qué criterio es más profesional?

- A. Compatibilidad, soporte, seguridad, competencias, integración, automatización, ciclo de vida y TCO. **(correcta)**
- B. Preferencia personal del administrador.
- C. Elegir siempre el sistema con más comandos conocidos.
- D. Decidir solo por coste de licencia inicial.

Explicación: La plataforma debe justificarse por requisitos y operación, no por afinidad personal.

### Propuesta

Una organización debe elegir Windows o Linux para un servicio. ¿Qué criterio es más profesional?

- A. Contrastar compatibilidad, soporte, seguridad, operación y coste del ciclo de vida. **(correcta)**
- B. Priorizar la familiaridad del equipo y posponer el análisis de las dependencias.
- C. Elegir la mayor puntuación de CPU aunque el ensayo use una carga distinta.
- D. Comparar el precio de licencia como representación del coste total del servicio.

Explicación: La elección del SO debe partir de los requisitos del servicio y su integración. Se contrastan compatibilidad, soporte, seguridad, competencias, automatización y mantenimiento, junto con costes del ciclo de vida. La experiencia del equipo y las licencias cuentan, pero no sustituyen ese análisis. Un ensayo comparable aporta evidencia de rendimiento; una preferencia o una puntuación ajena a la carga no basta para decidir entre Windows y Linux.

- Error B: La experiencia reduce esfuerzo operativo, pero omitir dependencias puede dejar sin soporte una aplicación esencial. Debe ponderarse junto al resto de requisitos.
- Error C: Un benchmark de otra carga puede medir un perfil de cálculo distinto. No acredita por sí solo que la plataforma satisfaga el servicio real.
- Error D: La licencia es un componente del coste. Operación, soporte, transición y mantenimiento impiden identificarla con el coste total.

- [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) · 3.1, pp. 3-1–3-3: requisitos del servicio, compatibilidad, coste, competencias y selección del SO · versión: Julio 2008; solo fundamentos de planificación, sin copiar protocolos, contraseñas o guía operativa histórica como configuración actual · comprobado: 2026-10-27
- [AWS Prescriptive Guidance: Detailed business case](https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/detailed-business-case.html) · Determine the scenarios needed for the case; Validate and refine the infrastructure and migration cost model · versión: Caso cloud usado para comparar escenarios y coste del ciclo de vida, sin adoptar precios, porcentajes de ahorro o superioridad automática de AWS/nube · comprobado: 2026-10-27

Partida: `dbda8cfd7793a2aeff939611bcb85ff0b3f9695a7b82fb488376d374783de89c` · propuesta: `0e0aa29bf1f4008fb18c14aa1bdb4fed29b2996b44f651f9749e56e1163f8aac`

## MAN-GSI-P17-141

Decisión: pending_review · acción: revise.

Motivo: Conservar base Linux y clave A; cuatro nombres de núcleos como alternativas, con explicación separada de kernel y plataforma.

### Antes

¿Sobre qué kernel se apoya Android?

- A. Linux. **(correcta)**
- B. Windows NT.
- C. XNU exclusivamente sin componentes Linux.
- D. Un microkernel propio sin Linux.

Explicación: Android usa el kernel Linux con una plataforma y framework propios.

### Propuesta

¿Sobre qué kernel se apoya Android?

- A. Linux. **(correcta)**
- B. Windows NT.
- C. QNX Neutrino.
- D. Zircon.

Explicación: El núcleo de Android se basa en Linux, con adaptaciones específicas documentadas por AOSP. Android incorpora además runtime, framework, servicios y capas de abstracción: identificar el kernel no equivale a describir toda la plataforma. No se exige que todos los dispositivos usen idéntica versión del núcleo ni que una aplicación Android funcione sin cambios en cualquier distribución Linux.

- Error B: Windows NT pertenece a otra familia de sistemas. La compatibilidad entre servicios o aplicaciones no lo convierte en el núcleo de Android.
- Error C: QNX Neutrino es otro núcleo asociado a sistemas embebidos. Esa proximidad de uso no lo hace la base Linux indicada por AOSP.
- Error D: Zircon es la plataforma base de Fuchsia e incluye su núcleo y servicios de usuario. No es el núcleo Linux en que se basa Android.

- [AOSP: Kernel overview](https://source.android.com/docs/core/architecture/kernel) · Introducción: Linux LTS, Android Common Kernels y parches específicos; separación del núcleo genérico y módulos de fabricante · versión: Solo base Linux y adaptación Android, sin exigir una versión de kernel idéntica en todos los dispositivos · comprobado: 2026-10-27
- [AOSP: Architecture overview](https://source.android.com/docs/core/architecture) · Android framework, System services, Android runtime (ART), Hardware abstraction layer y Kernel · versión: Actualización 09-10-2026; distinción entre núcleo y plataforma, sin exigir servicios propietarios de Google · comprobado: 2026-10-27
- [QNX: The QNX Neutrino Microkernel](https://www.qnx.com/developers/docs/7.1/com.qnx.doc.neutrino.sys_arch/topic/kernel.html) · The QNX Neutrino Microkernel: microkernel y servicios básicos de mensajería; contexto de sistemas de tiempo real embebidos · versión: Documentación QNX SDP/Neutrino 7.1, página actualizada 12-03-2026; solo identidad de la alternativa, no recomendación de versión ni hardware · comprobado: 2026-10-27
- [Fuchsia: Zircon](https://fuchsia.dev/fuchsia-src/concepts/kernel) · Introducción: plataforma base de Fuchsia, núcleo y servicios de usuario; funciones del Zircon Kernel · versión: Actualización 29-07-2026; se distingue plataforma Zircon y su núcleo, sin adoptar números de syscalls o notas temporales de ABI · comprobado: 2026-10-27

Partida: `deac43afb14f0a35639b07bee2b16d864d6f23d46932c69140b73029c67c8b0a` · propuesta: `8cd190bd0b2bbfdbf302659fd8d1a7ec1f4982527735fefc68b76353db47f1e0`

## MAN-GSI-P17-142

Decisión: pending_review · acción: revise.

Motivo: Conservar sandbox Android y clave D; acotar modelo por defecto y distinguir aislamiento de runtime, declaraciones y virtualización de hardware.

### Antes

¿Cómo aísla Android las aplicaciones de forma básica?

- A. Ejecuta todas las apps con el mismo usuario root.
- B. Comparte por defecto todos los datos entre apps.
- C. Desactiva la separación de procesos.
- D. Asigna UID y procesos separados, aplicando sandbox a nivel del kernel y permisos. **(correcta)**

Explicación: AOSP documenta un sandbox basado en UID y mecanismos de seguridad Linux.

### Propuesta

¿Qué mecanismo sustenta el aislamiento básico de las aplicaciones ordinarias en Android por defecto?

- A. Ejecutar el bytecode en ART, sin identidades de aplicación diferenciadas.
- B. Restringir las apps mediante el manifiesto, sin controles en el kernel.
- C. Usar una máquina virtual de hardware independiente para cada aplicación.
- D. Separar identidades y procesos, con sandbox y controles del kernel. **(correcta)**

Explicación: En el modelo básico por defecto, Android emplea UID y separación de procesos para aplicar el sandbox mediante controles del kernel. El aislamiento abarca también código nativo; no depende únicamente del lenguaje o de ART. Los permisos y mecanismos de intercambio autorizados permiten accesos concretos. Es una capa de protección, no una garantía de que una vulnerabilidad nunca pueda romper el aislamiento.

- Error A: ART ejecuta código de aplicaciones, pero no sustituye la separación y los controles del sistema. El código nativo también queda sujeto al sandbox.
- Error B: Declarar capacidades no basta para imponerlas. El sistema debe comprobar accesos y hacer cumplir la separación mediante controles efectivos.
- Error C: La separación básica se implementa con mecanismos del SO. No requiere asignar una máquina virtual de hardware completa a cada aplicación.

- [AOSP: Application Sandbox](https://source.android.com/docs/security/app-sandbox) · Introducción y Protections: UID, procesos, aislamiento aplicado por el kernel y defensa en profundidad · versión: Modelo básico por defecto de apps ordinarias; no se afirma invulnerabilidad o ausencia de mecanismos autorizados de intercambio · comprobado: 2026-10-27

Partida: `56af4f5f489f15316df9822d2fc007b6c2c9d588ac6cbd42b4a07566dcb28fc7` · propuesta: `1cc03bbcad8336338d9128051c307463bdb7691285e5d7a707d183366dd56d35`

## MAN-GSI-P17-143

Decisión: pending_review · acción: revise.

Motivo: Conservar mínimo privilegio y clave D; distractores sobre anticipación, grupos y confianza, sin equiparar todos los permisos con runtime.

### Antes

¿Qué principio debe aplicarse a los permisos de una app móvil?

- A. Pedir todos los permisos al instalar por comodidad.
- B. Usar siempre permisos de administrador.
- C. Conceder acceso completo a otras apps.
- D. Solicitar solo capacidades necesarias y de forma proporcional a la función. **(correcta)**

Explicación: Mínimo privilegio y transparencia reducen exposición de datos y sensores.

### Propuesta

¿Qué principio debe aplicarse a los permisos de una app móvil?

- A. Solicitar capacidades previstas para ampliaciones futuras antes de necesitarlas.
- B. Solicitar las capacidades del grupo aunque la función utilice solo una de ellas.
- C. Ajustar los accesos a la reputación del editor antes que a la función concreta.
- D. Limitar las capacidades solicitadas a las necesarias para la función concreta. **(correcta)**

Explicación: El mínimo privilegio exige justificar cada capacidad por la función que la necesita y evitar permisos innecesarios. La forma de declaración, concesión y solicitud depende de la plataforma y del tipo de permiso; no todos muestran un diálogo en ejecución. Cuando procede pedirlo al usuario, conviene hacerlo en contexto y tratar su denegación o revocación sin bloquear funciones independientes.

- Error A: Una posible ampliación no justifica exponer datos o recursos desde ahora. Debe evaluarse si la función actual necesita realmente esa capacidad.
- Error B: La agrupación facilita presentación o gestión, pero no prueba necesidad funcional de cada acceso. No debe solicitarse un conjunto por esa sola razón.
- Error C: Confiar en un editor no elimina el límite de finalidad. Los recursos accesibles deben corresponder a la función que se pretende ejecutar.

- [Android Developers: App permissions overview](https://developer.android.com/guide/topics/permissions/overview) · Workflow for using permissions y Types of permissions: necesidad, alternativas, permisos de instalación, ejecución y especiales · versión: El procedimiento depende del permiso y plataforma; no todo permiso exige un diálogo en ejecución · comprobado: 2026-10-27
- [Android Developers: Request runtime permissions](https://developer.android.com/training/permissions/requesting) · Basic principles y Workflow for requesting permissions: necesidad, solicitud contextual, denegación/revocación y degradación funcional · versión: Permisos runtime en Android 6.0/API 23 o superior; el microcaso presupone acceso directo a cámara que requiere permiso, no captura delegada o selector sin ese acceso · comprobado: 2026-10-27

Partida: `64ee1eaf5fac5d96f16c5ba6391d28b83b90f52e3a63a1b6bde9120721d5e73b` · propuesta: `2ce75054328c5b2a838a1a8978bccb22928b42d08646c2871b4ea3be16e1021c`

## MAN-GSI-P17-144

Decisión: pending_review · acción: revise.

Motivo: Conservar base Darwin/XNU y clave C; sustituir DOS por confusión plausible entre componentes FreeBSD y núcleo completo.

### Antes

¿En qué se basa iOS a nivel de sistema?

- A. En Windows NT.
- B. En un kernel Linux estándar sin cambios.
- C. En Darwin/XNU y componentes de plataforma Apple. **(correcta)**
- D. En DOS.

Explicación: iOS deriva de Darwin y usa el kernel XNU.

### Propuesta

¿En qué se basa iOS a nivel de sistema?

- A. En Windows NT y las interfaces Win32.
- B. En Linux y el framework de Android.
- C. En Darwin/XNU y la plataforma Apple. **(correcta)**
- D. En FreeBSD como núcleo, sin XNU.

Explicación: iOS utiliza XNU como núcleo dentro de la base Darwin y los componentes de plataforma Apple. El README de XNU lo identifica como parte de Darwin usado en macOS e iOS, con combinación de Mach y componentes de FreeBSD. Esa relación con FreeBSD no significa que el núcleo sea simplemente FreeBSD ni que iOS sea una distribución Linux.

- Error A: NT y Win32 corresponden a la familia Windows. No describen la base de sistema identificada por los autores de XNU para iOS.
- Error B: Linux y el framework Android describen otra plataforma móvil. Compartir tipos de dispositivos o servicios no implica compartir esa base.
- Error D: XNU incorpora componentes de FreeBSD, pero también otros elementos. Sustituir su identidad por un núcleo FreeBSD sin XNU confunde componente y conjunto.

- [Apple Open Source: XNU README](https://github.com/apple-oss-distributions/xnu/blob/main/README.md) · What is XNU?, líneas 1–5: núcleo híbrido que combina Mach, componentes FreeBSD e IOKit · versión: Leído con conector GitHub; blob Git 99c8db7e568ee00d37557598bd0e73414611e45b. Solo ejemplo de combinación de diseños, sin adoptar compatibilidad de hardware o instrucciones de compilación · comprobado: 2026-10-27

Partida: `50e88cd85c3eca2ab5f92d5d647b8a7a9df37c37bf08067616c00b4ddb951b32` · propuesta: `6c15e392aac48aa8be7ab85c81a310b2153b3a6609c01f76178b75bbccfed87c`

## MAN-GSI-P17-145

Decisión: pending_review · acción: revise.

Motivo: Conservar controles por capas y clave B; distinguir firma, distribución y aislamiento sin afirmar exclusividad universal de App Store.

### Antes

¿Qué controles caracterizan la seguridad de apps en iPhone/iPad?

- A. Ejecución de cualquier binario sin firma por defecto.
- B. Firma de código, distribución controlada y sandboxing, entre otras capas. **(correcta)**
- C. Todas las apps con acceso directo al kernel.
- D. Ausencia de aislamiento entre aplicaciones.

Explicación: Apple Platform Security destaca firma, validación e aislamiento de apps.

### Propuesta

¿Qué controles caracterizan la seguridad de apps en iPhone/iPad?

- A. Firma de código que sustituye el aislamiento entre aplicaciones instaladas.
- B. Firma de código, reglas de distribución y sandbox con capacidades controladas. **(correcta)**
- C. Sandbox que sustituye la comprobación de integridad del código instalado.
- D. Control en la distribución que concede iguales capacidades a todas las apps.

Explicación: La seguridad de apps en iPhone/iPad combina verificación de código firmado, reglas para distribuir e instalar y aislamiento durante la ejecución, con capacidades controladas mediante entitlements y servicios autorizados. Son capas complementarias. Una firma no demuestra ausencia de fallos o comportamiento dañino, y distribución controlada no significa que solo pueda existir un canal de distribución en cualquier región y situación.

- Error A: La firma ayuda a verificar procedencia e integridad, pero no limita por sí misma los recursos de una app. No sustituye el sandbox.
- Error C: El sandbox restringe efectos de ejecución; no hace innecesaria la validación del código. Ambas capas atienden problemas distintos.
- Error D: Controlar la entrada de apps no asigna capacidades idénticas. Los accesos de ejecución dependen de mecanismos y permisos específicos.

- [Apple Platform Security: App code signing process](https://support.apple.com/guide/security/app-code-signing-process-sec7c917bf14/web) · Mandatory code signing y How developers sign their apps: validación de código y relación con distribución · versión: No se equipara firma con ausencia de vulnerabilidades ni distribución controlada con exclusividad universal de App Store · comprobado: 2026-10-27
- [Apple Platform Security: Security of runtime process in iOS, iPadOS, and visionOS](https://support.apple.com/guide/security/security-of-runtime-process-sec15bfe098e/web) · Sandboxing y Use of entitlements: aislamiento de apps de terceros y capacidades declaradas y firmadas · versión: Solo capas de ejecución; no se adopta invulnerabilidad ni ausencia de intercambio mediante servicios autorizados · comprobado: 2026-10-27

Partida: `bff861844fee6da66c61015d30c5ea013ab3ba3f5d57914cc54362bfde332eb7` · propuesta: `67503674e2e9f9ea58dbdfacfdc183c6de3b596dcbbeb212deacf235fd2510e8`

## MAN-GSI-P17-146

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y cuatro alternativas ya plausibles y clave B; completar límites por inscripción y explicaciones MAM/IAM/NAC.

### Antes

¿Qué función tiene MDM?

- A. Gestionar únicamente datos y aplicaciones corporativas sin aplicar configuración o cumplimiento al dispositivo completo.
- B. Administrar dispositivos, configuración, políticas, aplicaciones y cumplimiento de forma centralizada. **(correcta)**
- C. Federar identidades y proporcionar inicio de sesión único entre aplicaciones, directorios y proveedores de servicio.
- D. Autorizar conexiones a la red según identidad y postura del equipo, sin administrar su configuración o aplicaciones.

Explicación: Mobile Device Management centraliza control de flotas corporativas.

### Propuesta

¿Qué función tiene MDM?

- A. Gestionar únicamente datos y aplicaciones corporativas sin aplicar configuración o cumplimiento al dispositivo completo.
- B. Administrar dispositivos, configuración, políticas, aplicaciones y cumplimiento de forma centralizada. **(correcta)**
- C. Federar identidades y proporcionar inicio de sesión único entre aplicaciones, directorios y proveedores de servicio.
- D. Autorizar conexiones a la red según identidad y postura del equipo, sin administrar su configuración o aplicaciones.

Explicación: MDM administra de forma centralizada dispositivos inscritos mediante las capacidades de gestión de la plataforma: configuración, políticas, aplicaciones y comprobaciones de cumplimiento. Se distingue del foco de MAM en apps y datos, de IAM en identidades y de NAC en acceso a red. El alcance efectivo depende de propiedad, inscripción, SO y producto; no implica control ilimitado de todo dispositivo ni cumplimiento garantizado por instalar un agente.

- Error A: El foco exclusivo en apps y datos corresponde a MAM. Puede integrarse con MDM, pero no define toda la gestión del dispositivo.
- Error C: Federación e inicio de sesión único son funciones de identidad. Pueden integrarse en una solución de movilidad, pero no sustituyen la administración del dispositivo.
- Error D: Controlar la admisión a red describe NAC. Evaluar postura no equivale a distribuir configuraciones, aplicaciones y políticas del dispositivo.

- [NIST SP 800-124 Rev. 2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · 4.1.3, p. 17; 4.2.1, pp. 18–20; 4.2.2, pp. 20–21: APIs de gestión, EMM/MDM y gestión de aplicaciones · versión: Mayo 2023; capacidades condicionadas por plataforma, inscripción y producto; sin obligaciones federales estadounidenses para España · comprobado: 2026-10-27
- [IBM: What is Enterprise Mobility Management (EMM)?](https://www.ibm.com/think/topics/enterprise-mobility-management) · Mobile device management, Mobile application management y Enterprise mobility management vs. unified endpoint management · versión: Terminología y alcance habitual; no se adoptan promesas comerciales, ausencia de riesgos o jerarquía formal obligatoria entre productos · comprobado: 2026-10-27

Partida: `7543cfbc6d30ae667568e0e308d4c611e8e2bed210725b638193101a13019360` · propuesta: `8b5e60eccfd721a311b1abe7999de1446015517898215d96de43065a15e38dcc`

## MAN-GSI-P17-147

Decisión: pending_review · acción: revise.

Motivo: Conservar relación de alcances solapados y clave C; evitar jerarquía rígida o universalidad comercial de funcionalidades.

### Antes

¿Qué relación existe entre MDM, EMM y UEM?

- A. Son sinónimos exactos y cualquier producto que gestione un móvil cubre necesariamente aplicaciones, contenido, identidad y todos los endpoints.
- B. MDM es la categoría de mayor alcance; EMM y UEM son subconjuntos limitados exclusivamente a teléfonos y tabletas.
- C. Son familias de gestión con alcance creciente/solapado; UEM busca unificar múltiples tipos de endpoint. **(correcta)**
- D. UEM se especializa solo en impresoras y periféricos, mientras EMM reemplaza la gestión de cualquier ordenador corporativo.

Explicación: La terminología evoluciona, pero UEM extiende gestión más allá del móvil.

### Propuesta

¿Qué relación existe entre MDM, EMM y UEM?

- A. MDM, EMM y UEM designan prestaciones idénticas en cualquier producto.
- B. MDM integra ordenadores y móviles; UEM se limita a aplicaciones móviles.
- C. MDM centra el dispositivo; EMM amplía movilidad y UEM integra endpoints diversos. **(correcta)**
- D. EMM gestiona ordenadores; UEM se limita a los dispositivos móviles.

Explicación: Las etiquetas describen enfoques de gestión con solapamientos: MDM se centra en el dispositivo, EMM agrupa capacidades de movilidad y UEM busca unificar móviles, ordenadores y otros endpoints compatibles. No forman una jerarquía formal con prestaciones universales; incluso se emplean términos de forma intercambiable. Hay que comprobar el alcance real de cada producto, plataforma e inscripción en vez de deducirlo solo de la etiqueta.

- Error A: El uso solapado de nombres no garantiza prestaciones idénticas. Deben comprobarse capacidades concretas y compatibilidad del producto.
- Error B: Invierte el alcance habitual: UEM busca reunir gestión de endpoints diversos, mientras MDM identifica principalmente gestión del dispositivo.
- Error D: EMM se asocia a movilidad, y UEM amplía la unificación a otros tipos de endpoint. Reducir UEM a móviles invierte esa orientación.

- [IBM: What is Unified Endpoint Management (UEM)?](https://www.ibm.com/think/topics/uem) · What is UEM? y The evolution of UEM: gestión conjunta de móviles y ordenadores; MDM y MAM · versión: Descripción del proveedor, no norma universal ni garantía de soporte de todo endpoint o de control total de un dispositivo · comprobado: 2026-10-27
- [IBM: What is Enterprise Mobility Management (EMM)?](https://www.ibm.com/think/topics/enterprise-mobility-management) · Mobile device management, Mobile application management y Enterprise mobility management vs. unified endpoint management · versión: Terminología y alcance habitual; no se adoptan promesas comerciales, ausencia de riesgos o jerarquía formal obligatoria entre productos · comprobado: 2026-10-27
- [NIST SP 800-124 Rev. 2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) · 4.1.3, p. 17; 4.2.1, pp. 18–20; 4.2.2, pp. 20–21: APIs de gestión, EMM/MDM y gestión de aplicaciones · versión: Mayo 2023; capacidades condicionadas por plataforma, inscripción y producto; sin obligaciones federales estadounidenses para España · comprobado: 2026-10-27

Partida: `4a5f9b505a1dc98ca08cb78fb6a756a17f33031b4bade0c59144b4c5903cfffc` · propuesta: `7308325150913a282df5dff4dddcb452e1ed2a746da72e58b9497b382ad4dc32`

## MAN-GSI-P17-148

Decisión: pending_review · acción: revise.

Motivo: Conservar cifrado en reposo y clave B; cuatro efectos de controles próximos, con límites de sesión, claves y recuperación.

### Antes

¿Qué aporta el cifrado de dispositivo?

- A. Protección absoluta aunque el dispositivo esté desbloqueado y comprometido.
- B. Protección de datos en reposo, especialmente si se combina con autenticación y gestión adecuada de claves. **(correcta)**
- C. Eliminación de cualquier riesgo de phishing.
- D. Sustitución de las copias de seguridad.

Explicación: Cifrado es una capa importante, pero no resuelve todos los riesgos.

### Propuesta

¿Qué aporta el cifrado de dispositivo?

- A. Ocultar por sí mismo el tráfico de las aplicaciones cuando atraviesa la red.
- B. Dificultar el acceso a datos en reposo sin las claves y credenciales adecuadas. **(correcta)**
- C. Impedir la lectura por cualquier proceso autorizado en una sesión desbloqueada.
- D. Recuperar el contenido borrado sin conservar una copia o versión recuperable.

Explicación: El cifrado de dispositivo protege la confidencialidad de datos en reposo, sujeto a la protección de claves, credenciales y estado del dispositivo. Data Protection de Apple muestra cómo claves y clases de archivo condicionan el acceso. Si una sesión o proceso ya dispone de acceso autorizado, el cifrado no garantiza impedir su lectura. Tampoco sustituye protección del tráfico, controles contra phishing o copias recuperables.

- Error A: El almacenamiento cifrado y el canal de comunicación son capas distintas. Proteger el tráfico exige mecanismos adecuados para ese canal.
- Error C: El sistema debe descifrar datos para usos autorizados. Una sesión desbloqueada o comprometida puede exponerlos según sus permisos y estado de claves.
- Error D: Cifrar no conserva una versión anterior ni reconstruye datos eliminados. La recuperación requiere copias u otros mecanismos independientes.

- [Apple Platform Security: Data Protection overview](https://support.apple.com/en-my/guide/security/secf6276da8a/web) · Introducción: protección de datos de almacenamiento flash, claves jerárquicas y clases de protección por archivo · versión: Publicación 19-12-2024; ejemplo de datos en reposo y gestión de claves, sin generalizar hardware, algoritmos o todas las clases a todo móvil · comprobado: 2026-10-27

Partida: `4d70e60eb367a9cb377caa333431fda7a2c39fdf024f5cc175b2f8a1e7e71c6e` · propuesta: `6df2bf25c511f6fe93b986c8b3938ff40f32c550d9265b409fc0eeb8efd504f5`

## MAN-GSI-P17-150

Decisión: pending_review · acción: revise.

Motivo: Conservar autenticación frente a autorización y clave B; reconocer flujos integrados sin equiparar desbloqueo local con permiso remoto.

### Antes

¿Qué diferencia hay entre autenticación biométrica y autorización?

- A. Son exactamente lo mismo.
- B. La biometría puede ayudar a autenticar al usuario; la autorización decide qué acciones puede realizar. **(correcta)**
- C. La autorización identifica huellas dactilares.
- D. La autenticación asigna permisos de aplicación sin identidad.

Explicación: Identidad y permisos son controles diferentes.

### Propuesta

¿Qué diferencia hay entre autenticación biométrica y autorización?

- A. La biometría asigna privilegios y la autorización comprueba identidad.
- B. La biometría ayuda a verificar identidad y la autorización delimita acciones. **(correcta)**
- C. La biometría cifra los datos y la autorización identifica la huella utilizada.
- D. La biometría desbloquea el equipo y concede privilegios sobre cualquier servicio.

Explicación: La biometría puede intervenir en autenticación, por ejemplo al verificar al usuario para una operación local. La autorización aplica una política para decidir a qué recursos o acciones accede esa entidad. Pueden formar parte del mismo flujo, incluso con una política que acepte a cualquier usuario autenticado, pero siguen siendo decisiones distintas. Desbloquear un dispositivo no concede automáticamente permisos administrativos en un servicio remoto.

- Error A: Invierte las funciones: comprobar identidad corresponde a autenticación y decidir privilegios a autorización. La característica biométrica no asigna roles por sí sola.
- Error C: Comparar una característica biométrica no es cifrar el contenido. La autorización evalúa acceso, no el reconocimiento de la huella.
- Error D: El desbloqueo local no decide todos los permisos de otros servicios. Esos recursos conservan sus propias políticas y comprobaciones de acceso.

- [Android Developers: Show a biometric authentication dialog](https://developer.android.com/identity/sign-in/biometric-auth) · Introducción y Declare the types of authentication that your app supports: verificación biométrica y credencial del dispositivo · versión: Solo función de autenticación; no se recomienda API obsoleta FingerprintManager ni se confunde desbloqueo local con concesión de permisos del servicio · comprobado: 2026-10-27
- [Microsoft identity platform: Authorization basics](https://learn.microsoft.com/en-us/entra/identity-platform/authorization-basics) · Introducción, Authentication as authorization y Role-based access control: identidad frente a acceso y acciones permitidas · versión: Actualización 25-08-2024; se admite una política basada en autenticación, manteniendo distintos los conceptos · comprobado: 2026-10-27

Partida: `83e604178cd37ae054bc5a23dc3410f19eb4b4c81ebc9e727df476c503a71fcb` · propuesta: `023b78167a16b1ff23f5c4aa46f530da4071f82ece1eda35bf37b519e9579e2f`

## MAN-GSI-P17-151

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgos BYOD y clave C; sustituir desaparición del malware por errores de alcance de política, soporte y acceso.

### Antes

¿Qué riesgo aumenta con dispositivos BYOD sin una política clara?

- A. La desaparición automática del malware porque un dispositivo personal no puede ejecutar código malicioso dentro del entorno corporativo.
- B. El cumplimiento garantizado por ser propiedad del usuario, sin necesidad de requisitos mínimos, inventario, separación o respuesta ante incidentes.
- C. Mezcla de datos personales/corporativos, falta de control de parcheo y dificultad de borrado/retirada selectiva. **(correcta)**
- D. Una menor necesidad de gestionar identidad y acceso, ya que la posesión del dispositivo personal autentica por sí sola a su propietario.

Explicación: BYOD requiere segmentación de datos, condiciones y controles de gestión adecuados.

### Propuesta

¿Qué riesgo aumenta con dispositivos BYOD sin una política clara?

- A. Que la propiedad personal convierta la flota en un entorno homogéneo y controlado.
- B. Que el soporte de TI se limite al hardware y deje de afectar a la información.
- C. Que se mezclen datos y falten controles de parcheo y retirada corporativa. **(correcta)**
- D. Que la titularidad del dispositivo sustituya las comprobaciones de acceso.

Explicación: BYOD permite usar equipos personales para trabajo. Sin política clara puede faltar separación entre datos, requisitos de actualización y un procedimiento para retirar recursos corporativos respetando los personales. La heterogeneidad exige decidir qué dispositivos se admiten y cómo se gestionan. Un perfil de trabajo aporta separación técnica y una retirada compatible puede limitarse al ámbito gestionado; la propiedad personal no crea esos controles automáticamente.

- Error A: Ser personal no homogeneiza versiones, configuraciones o soporte. Precisamente deben fijarse requisitos y un modelo de gestión para esa diversidad.
- Error B: Los dispositivos siguen tratando información de trabajo. Reducir el soporte a reparar hardware omite apps, actualizaciones, acceso y respuesta ante incidentes.
- Error D: La propiedad no es una prueba suficiente de identidad ni una autorización. Deben mantenerse controles de acceso a los recursos corporativos.

- [Android Developers: Work profiles](https://developer.android.com/work/managed-profiles) · Overview e introducción: perfil gestionado separado del principal, almacenamiento e intercambio entre perfiles · versión: Perfil de trabajo Android; separación con intercambios sujetos a política, no aislamiento absoluto ni control idéntico en toda plataforma · comprobado: 2026-10-27
- [Microsoft Intune: Device action: retire](https://learn.microsoft.com/en-us/intune/device-management/actions/retire) · Introducción; User experience; Android Enterprise personally owned devices with a work profile; nota de contactos exportados · versión: Ejemplo de retirada selectiva: inscripción y plataforma compatibles, efecto al comunicar con el servicio; no borra toda copia exportada ni equivale a factory reset · comprobado: 2026-10-27
- [Microsoft identity platform: Authorization basics](https://learn.microsoft.com/en-us/entra/identity-platform/authorization-basics) · Introducción, Authentication as authorization y Role-based access control: identidad frente a acceso y acciones permitidas · versión: Actualización 25-08-2024; se admite una política basada en autenticación, manteniendo distintos los conceptos · comprobado: 2026-10-27

Partida: `42b41bfdbb830f93d498f33af11e9fc42bb24f16c0991e318cba233b51db3ce1` · propuesta: `3e22475e3d5609f07cd44528117fb6680d949d9c0a3ffe3353e60daa2fb55efb`

## MAN-GSI-P17-152

Decisión: pending_review · acción: revise.

Motivo: Conservar separación por perfil/contenedor y clave B; matizar intercambio autorizado y privacidad, sin prometer aislamiento absoluto.

### Antes

¿Qué ventaja aporta un perfil de trabajo o contenedor corporativo móvil?

- A. Dar acceso root a todas las apps.
- B. Separar datos y aplicaciones corporativas de la parte personal con políticas diferenciadas. **(correcta)**
- C. Eliminar toda privacidad del usuario.
- D. Compartir automáticamente credenciales entre perfiles.

Explicación: La separación facilita mínimo privilegio, borrado selectivo y gobierno.

### Propuesta

¿Qué ventaja aporta un perfil de trabajo o contenedor corporativo móvil?

- A. Unificar las credenciales de las apps personales y corporativas en una cuenta común.
- B. Separar apps y datos de trabajo del ámbito personal con políticas diferenciadas. **(correcta)**
- C. Replicar los documentos entre ambos ámbitos sin distinguir su propiedad o gestión.
- D. Ejecutar las apps de ambos ámbitos bajo una misma cuenta privilegiada.

Explicación: Un perfil de trabajo o contenedor gestionado delimita apps y datos corporativos y permite aplicarles políticas diferentes de las personales. Android documenta esa separación y mecanismos de intercambio entre perfiles sujetos a configuración. No significa ausencia de toda comunicación ni acceso irrestricto de TI a los datos personales. Su utilidad depende de las políticas, de las funciones de la plataforma y de mantener la información en el ámbito previsto.

- Error A: Compartir una identidad común no establece separación y puede perjudicar la atribución y retirada de accesos. Las políticas distinguen los ámbitos.
- Error C: Copiar sin distinguir gestión propaga datos fuera de su ámbito. No equivale a separar y controlar la información corporativa.
- Error D: Una cuenta privilegiada común amplía exposición y mezcla ámbitos. No es el mecanismo que aporta separación de trabajo y uso personal.

- [Android Developers: Work profiles](https://developer.android.com/work/managed-profiles) · Overview e introducción: perfil gestionado separado del principal, almacenamiento e intercambio entre perfiles · versión: Perfil de trabajo Android; separación con intercambios sujetos a política, no aislamiento absoluto ni control idéntico en toda plataforma · comprobado: 2026-10-27

Partida: `55b5ca7d64d78039ef761dc949c5e8972ab5f1c44edcad31b27d0494d4cadee2` · propuesta: `f7810e323cabefd6fef8a5da8134dea93de05053a6dcdc4ff0893c93abd103c4`

## MAN-GSI-P17-153

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso de permiso contextual y clave A; precisar acceso directo/runtime y distinguir captura delegada para evitar ambigüedad.

### Antes

Una app corporativa necesita cámara solo al escanear documentos. ¿Qué enfoque es más adecuado?

- A. Solicitar el permiso de cámara de forma contextual y limitarlo a la función necesaria. **(correcta)**
- B. Exigir cámara, micrófono, contactos y ubicación desde el primer arranque sin motivo.
- C. Ejecutar la app como root.
- D. Desactivar el sandbox.

Explicación: Los permisos deben ser proporcionales y comprensibles.

### Propuesta

Una app Android necesita acceso directo a cámara, sujeto a permiso en ejecución, solo para escanear documentos. ¿Qué enfoque es más adecuado?

- A. Solicitar cámara al iniciar el escaneo y tratar la denegación en esa función. **(correcta)**
- B. Solicitar cámara en el primer arranque y bloquear todas las funciones si se deniega.
- C. Solicitar también micrófono porque cámara y audio deben concederse conjuntamente.
- D. Dar por válido el permiso concedido al instalar, sin comprobar su revocación.

Explicación: Para este acceso directo sujeto a permiso runtime, la solicitud se vincula a la acción de escanear. Se comprueba la concesión y se trata denegación o revocación en la función afectada, manteniendo las independientes. No se justifican otros permisos sin necesidad. El caso excluye alternativas de captura delegada que pueden evitar acceso directo a cámara; antes de pedir un permiso se evalúa si realmente hace falta.

- Error B: Pedirlo antes del uso dificulta comprender la finalidad. Bloquear funciones que no necesitan cámara amplía innecesariamente el efecto de la denegación.
- Error C: Escanear imagen no necesita por sí mismo grabar audio. La necesidad de cada recurso debe justificarse, sin suponer concesión conjunta.
- Error D: La concesión no es inmutable: el usuario o el sistema pueden revocarla. Debe verificarse cuando se realiza la operación que requiere acceso.

- [Android Developers: Request runtime permissions](https://developer.android.com/training/permissions/requesting) · Basic principles y Workflow for requesting permissions: necesidad, solicitud contextual, denegación/revocación y degradación funcional · versión: Permisos runtime en Android 6.0/API 23 o superior; el microcaso presupone acceso directo a cámara que requiere permiso, no captura delegada o selector sin ese acceso · comprobado: 2026-10-27
- [Android Developers: App permissions overview](https://developer.android.com/guide/topics/permissions/overview) · Workflow for using permissions y Types of permissions: necesidad, alternativas, permisos de instalación, ejecución y especiales · versión: El procedimiento depende del permiso y plataforma; no todo permiso exige un diálogo en ejecución · comprobado: 2026-10-27

Partida: `56b0cb5181904edfdf13f5ca13cd2c2a60e74d9e7164e5fbbd39aa9e43d00785` · propuesta: `fe31de87ea8ed1a3e8477826c6228b3650727511578c87e9ea6cc37ba16124f8`

## MAN-GSI-P17-154

Decisión: pending_review · acción: revise.

Motivo: Conservar caso de contratos multiplataforma y clave A; sustituir memoria física por Internet por acoplamientos reales a SO, datos y despliegue.

### Antes

Un servicio web corporativo se ejecutará en varias plataformas. ¿Qué capa debería mantener contratos estables para reducir dependencia del SO?

- A. APIs/servicios y formatos bien definidos, separando lógica de negocio de detalles de plataforma. **(correcta)**
- B. Llamadas directas a drivers desde cada cliente.
- C. Acceso a memoria física compartida por Internet.
- D. Una única ruta absoluta local codificada en todos los clientes.

Explicación: La abstracción por contratos facilita portabilidad e interoperabilidad.

### Propuesta

Un servicio web corporativo se ejecutará en varias plataformas. ¿Qué capa debería mantener contratos estables para reducir dependencia del SO?

- A. Definir contratos de API y formatos, separando negocio y detalles de plataforma. **(correcta)**
- B. Exponer llamadas nativas del SO y reproducir sus estructuras internas en clientes.
- C. Acoplar clientes al esquema interno de datos y tratarlo como contrato del servicio.
- D. Exigir un binario y rutas locales idénticos en todas las plataformas de cliente.

Explicación: Un contrato de servicio con operaciones, mensajes y formatos definidos reduce el conocimiento que necesita el cliente sobre el SO del servidor. Separar negocio de detalles de plataforma ayuda a cambiar implementaciones sin romper ese contrato. Los principios de independencia de plataforma y bajo acoplamiento de APIs REST ilustran la idea; no garantizan por sí solos portabilidad de binarios, compatibilidad de cambios o seguridad de toda implementación.

- Error B: Exponer estructuras nativas obliga a los clientes a conocer detalles del SO. Aumenta el acoplamiento que se pretende reducir.
- Error C: El esquema interno puede cambiar por decisiones de almacenamiento. Usarlo directamente como contrato vincula clientes a esas decisiones de implementación.
- Error D: Un binario o ruta idénticos no abstraen diferencias de plataforma. Un contrato interoperable evita exigir esa identidad de implementación.

- [Microsoft: Best practices for RESTful web API design](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design) · Introducción, principios Platform independence y Loose coupling; RESTful web API design concepts · versión: Solo contratos, protocolos y representaciones interoperables; no se deduce portabilidad automática de binarios o garantía de seguridad por usar HTTP/JSON · comprobado: 2026-10-27

Partida: `1444167ce22db57b519a336416f0f7cb9d8020646179d2daf08b7149ee8c1f99` · propuesta: `111ef07f55c6197ed4ca48e72dc84d2e3206103a78a33fd0d706bece7841e951`

## MAN-GSI-P17-155

Decisión: pending_review · acción: revise.

Motivo: Conservar capacidad/estado/continuidad y clave D; tres mejoras parciales plausibles y una que atiende conjuntamente los requisitos.

### Antes

Una aplicación crítica presenta picos de CPU, muchas sesiones y dependencia de una única instancia. ¿Qué mejora es más completa?

- A. Aumentar disco sin medir CPU.
- B. Mantener sesiones únicamente en RAM local de una instancia.
- C. Desactivar logs.
- D. Diseñar escalado horizontal, externalizar estado, balancear, monitorizar y eliminar SPOF. **(correcta)**

Explicación: El caso combina escalabilidad, estado, balanceo y disponibilidad.

### Propuesta

Una aplicación crítica agota CPU en picos, guarda sesiones en una única instancia y debe seguir atendiendo si esta falla. ¿Qué mejora aborda conjuntamente capacidad y continuidad?

- A. Aumentar CPU en la misma instancia, manteniendo el estado y la dependencia únicos.
- B. Añadir réplicas dejando las sesiones solo en RAM local de la instancia inicial.
- C. Balancear entre réplicas con un almacén de sesiones único y sin recuperación.
- D. Distribuir carga y estado recuperable entre instancias, medir y tratar puntos únicos. **(correcta)**

Explicación: El caso combina capacidad y continuidad. Una mejora conjunta permite añadir instancias, distribuir tráfico y conservar o recuperar el estado necesario al perder una de ellas, con métricas y pruebas. Hay que revisar también balanceo, datos y demás dependencias para no trasladar el punto único de fallo. Escalar horizontalmente no garantiza rendimiento ilimitado ni disponibilidad automática: importa el diseño del estado, los límites y la capacidad restante ante fallos.

- Error A: Más CPU puede aliviar capacidad, pero mantiene la dependencia de una sola instancia. No cubre la continuidad que también exige el caso.
- Error B: Si la instancia inicial conserva en exclusiva las sesiones, su caída sigue afectando al servicio. Las réplicas no resuelven esa dependencia de estado.
- Error C: Mover las sesiones ayuda a repartir trabajo, pero un almacén único sin recuperación conserva otro punto único de fallo. Debe tratarse su resiliencia.

- [Microsoft: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Introducción, Autoscaling components y diseño para escalado horizontal: métricas, estado, dependencias y pruebas · versión: Actualización previamente contrastada 11-10-2026; cuerpo releído en este lote, sin asumir escalado infinito, inmediato o continuidad automática · comprobado: 2026-10-27
- [Microsoft Well-Architected: Architecture strategies for designing for redundancy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy) · RE:05, introducción y Key design strategies: redundancia por capas y capacidad para absorber fallos · versión: Se usa el principio de dominios de fallo y objetivos de fiabilidad, sin prometer disponibilidad absoluta ni exigir multirregión a toda carga · comprobado: 2026-10-27

Partida: `8ca97268652b40361287db2ace44391f806016b82d0d29faae098ccffdd19b24` · propuesta: `d09e0209896dd7a69d9e0ceb9df5b2189f856e2959ce3c3de29dc371e82c6957`

## MAN-GSI-P17-156

Decisión: pending_review · acción: revise.

Motivo: Conservar retirada corporativa selectiva y clave D; precisar soporte/inscripción, comunicación y límites frente a copias exportadas.

### Antes

Una organización móvil necesita poder retirar solo los datos corporativos de un empleado que deja la entidad. ¿Qué capacidad es especialmente útil?

- A. Formatear siempre el dispositivo personal completo sin política.
- B. Compartir la cuenta del empleado con el sustituto.
- C. Eliminar la autenticación.
- D. Gestión MDM/UEM con separación de datos y borrado selectivo cuando la plataforma lo soporte. **(correcta)**

Explicación: La gestión corporativa debe contemplar alta, operación y retirada segura.

### Propuesta

Una organización móvil necesita poder retirar solo los datos corporativos de un empleado que deja la entidad. ¿Qué capacidad es especialmente útil?

- A. Restablecer el dispositivo personal a fábrica como sustituto de la retirada selectiva.
- B. Desactivar la cuenta sin retirar la información ya almacenada en el dispositivo.
- C. Eliminar el dispositivo del inventario sin enviar ni comprobar la retirada de datos.
- D. Retirar el ámbito corporativo con gestión y borrado selectivo compatibles y verificados. **(correcta)**

Explicación: Se necesita separar previamente el ámbito corporativo y disponer de una retirada selectiva compatible con plataforma, inscripción y apps. Intune Retire ilustra esa capacidad, incluida la retirada del perfil de trabajo Android personal; su ejecución requiere que el dispositivo comunique con el servicio. Debe verificarse el resultado y revocar accesos. No garantiza recuperar o borrar toda copia exportada fuera del ámbito gestionado, ni equivale a restablecer el móvil completo.

- Error A: Un restablecimiento completo puede eliminar también datos personales. No satisface la condición de retirar solo el ámbito corporativo.
- Error B: Revocar identidad limita accesos futuros, pero no garantiza eliminar datos locales ya guardados. Es una medida complementaria a la retirada.
- Error C: Borrar un registro administrativo no acredita que el dispositivo haya recibido o ejecutado una retirada. Hay que distinguir inventario, orden y resultado.

- [Microsoft Intune: Device action: retire](https://learn.microsoft.com/en-us/intune/device-management/actions/retire) · Introducción; User experience; Android Enterprise personally owned devices with a work profile; nota de contactos exportados · versión: Ejemplo de retirada selectiva: inscripción y plataforma compatibles, efecto al comunicar con el servicio; no borra toda copia exportada ni equivale a factory reset · comprobado: 2026-10-27

Partida: `e6dd3abad36174610d5d5c428897e2cec7f55a375c14a0891a25bae871190e0a` · propuesta: `15a0b3bc56c3e5f42d27971ee4dec1bca957caa8d2e3be10d8f10a537e4457bc`

## MAN-GSI-P17-157

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso de salud Windows/Linux y clave A; distractores de comparación defectuosa y matiz de equivalencia semántica.

### Antes

Un servidor Windows y otro Linux ofrecen el mismo servicio. ¿Qué control transversal permite comparar su salud operativa?

- A. Métricas y logs homogéneos de CPU, memoria, E/S, red, disponibilidad y errores. **(correcta)**
- B. El color del escritorio.
- C. El nombre del sistema de archivos por sí solo.
- D. La cantidad de comandos disponibles.

Explicación: Observabilidad comparable permite operar plataformas heterogéneas con criterios comunes.

### Propuesta

Un servidor Windows y otro Linux ofrecen el mismo servicio. ¿Qué control transversal permite comparar su salud operativa?

- A. Comparar métricas y sucesos equivalentes del servicio y recursos bajo carga comparable. **(correcta)**
- B. Comparar los nombres de los contadores aunque tengan unidades y ventanas distintas.
- C. Comparar solo CPU media sin observar errores, latencia ni disponibilidad del servicio.
- D. Comparar tiempos desde relojes sin sincronizar como si describieran la misma secuencia.

Explicación: Una comparación útil recoge medidas y sucesos equivalentes del servicio y sus recursos, con unidades, intervalos, carga y contexto comparables. CPU, memoria, E/S y red ayudan a interpretar disponibilidad, latencia y errores; ningún valor aislado resume toda la salud. Los nombres de contadores pueden variar entre Windows y Linux. Métricas y logs aportan perspectivas complementarias, y correlacionar sucesos requiere referencias temporales coherentes. Para relacionar eventos de máquinas distintas se añade contexto o identificadores; los timestamps por sí solos no bastan.

- Error B: El mismo nombre no garantiza igual semántica. Mezclar unidades o ventanas distintas puede producir diferencias aparentes sin significado operativo.
- Error C: CPU media puede ocultar picos o esperas y no demuestra que las respuestas sean correctas o disponibles. Faltan señales del resultado del servicio.
- Error D: Marcas de tiempo no alineadas pueden invertir el orden aparente de eventos. La correlación necesita una referencia temporal y ventanas coherentes.

- [OpenTelemetry: Signals](https://opentelemetry.io/docs/concepts/signals/) · Signals, Metrics y Logs: salidas de SO/aplicaciones, medidas en ejecución y sucesos · versión: Última modificación indicada 10-03-2026; no se introduce esta dependencia ni se presupone igualdad de nombres/unidades entre contadores de sistemas distintos · comprobado: 2026-10-27
- [Microsoft: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Introducción, Autoscaling components y diseño para escalado horizontal: métricas, estado, dependencias y pruebas · versión: Actualización previamente contrastada 11-10-2026; cuerpo releído en este lote, sin asumir escalado infinito, inmediato o continuidad automática · comprobado: 2026-10-27
- [Microsoft: Best practices for monitoring and diagnostics](https://learn.microsoft.com/en-us/azure/architecture/best-practices/monitoring) · Health monitoring, Collect health data; Instrument an application → Information for correlating data: contexto, identificadores, UTC y nota sobre relojes no sincronizados · versión: Solo monitorización y correlación; UTC no sincroniza relojes ni basta por sí solo para relacionar eventos de máquinas distintas · comprobado: 2026-10-27

Partida: `f2f468f61fc468fc424167b6f30e9ec946efd5d37b059122adb94372198d08f8` · propuesta: `7e7b15f744a628ba7e9a129a845d23e29a330073a1429003c9912f124c921f4f`

## MAN-GSI-P17-158

Decisión: pending_review · acción: revise.

Motivo: Conservar caso de portal HA y backend HPC y clave D; separación lógica y dimensionamiento por perfil, sin exigir cloud o hardware concreto.

### Antes

Una carga científica requiere gran paralelismo; el portal de acceso requiere alta disponibilidad. ¿Qué diseño es más razonable?

- A. Usar un único componente para todo sin redundancia.
- B. Convertir el portal en un supercomputador monolítico.
- C. Eliminar colas y monitorización.
- D. Separar el front de servicio resiliente del backend HPC, dimensionando cada capa según su perfil. **(correcta)**

Explicación: No todas las capas tienen el mismo patrón de rendimiento o continuidad.

### Propuesta

Una carga científica requiere gran paralelismo; el portal de acceso requiere alta disponibilidad. ¿Qué diseño es más razonable?

- A. Dimensionar un único nodo por cálculo máximo y alojar el portal sin redundancia.
- B. Replicar el portal y ejecutar cada cálculo largo dentro de la petición HTTP.
- C. Asignar recursos de cómputo y quitar la planificación de trabajos y sus métricas.
- D. Separar acceso resiliente y ejecución HPC, dimensionando y observando cada capa. **(correcta)**

Explicación: El portal y los trabajos paralelos tienen requisitos distintos. Separar sus responsabilidades permite dimensionar el acceso para continuidad y el backend HPC para cálculo, memoria, interconexión, datos y planificación según la carga. El patrón HPC documentado distingue acceso, envío, planificación, cómputo y monitorización. La separación es arquitectónica y no obliga a una nube o equipos físicos concretos; también deben revisarse dependencias y dominios de fallo del portal.

- Error A: Un nodo potente puede atender cálculo, pero sigue dejando acceso y ejecución bajo un fallo único. La potencia no equivale a alta disponibilidad.
- Error B: Replicar ayuda al acceso, pero acoplar cada cálculo largo a la petición limita su gestión y continuidad. Debe desacoplarse la ejecución del trabajo.
- Error C: Disponer de cómputo no resuelve prioridades, asignación y diagnóstico. Eliminar planificación y métricas perjudica la operación de trabajos paralelos.

- [Microsoft Well-Architected: Architecture Pattern for HPC Workloads on Azure](https://learn.microsoft.com/en-us/azure/well-architected/hpc/hpc-architecture-pattern) · Design Considerations; Architecture Flow; User Access and Job Submission; Orchestration and Scheduling · versión: Ejemplo de separación de acceso, planificación y cómputo; dimensionamiento por perfil, sin exigir nube, hardware concreto o separación física universal · comprobado: 2026-10-27
- [Microsoft Well-Architected: Architecture strategies for designing for redundancy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy) · RE:05, introducción y Key design strategies: redundancia por capas y capacidad para absorber fallos · versión: Se usa el principio de dominios de fallo y objetivos de fiabilidad, sin prometer disponibilidad absoluta ni exigir multirregión a toda carga · comprobado: 2026-10-27

Partida: `d7dbc3e37af066a6777f60a1912be75561775a532f7312ae3105026d770f1b53` · propuesta: `7989b1012d45fd784cf7d063c3b66f9bc4054820fb7cdf4a5ca82a2e86a68633`

## MAN-GSI-P17-159

Decisión: pending_review · acción: revise.

Motivo: Conservar selección tecnológica por requisitos y clave C; evitar opciones artificialmente largas y distinguir homogeneidad útil de imposición.

### Antes

¿Qué criterio resume mejor una selección tecnológica madura entre móvil, servidor, cloud y HPC?

- A. Elegir siempre la tecnología más nueva, porque la fecha de lanzamiento garantiza mejor adecuación, estabilidad y operación para cualquier carga.
- B. Utilizar una única plataforma para móvil, servidor, cloud y HPC, aunque sus requisitos de rendimiento, seguridad y soporte sean diferentes.
- C. Alinear arquitectura, rendimiento, seguridad, soporte, operación, coste y reversibilidad con los requisitos reales. **(correcta)**
- D. Decidir exclusivamente por la frecuencia nominal de CPU, sin valorar arquitectura, memoria, red, coste, ecosistema ni reversibilidad.

Explicación: La elección de plataforma es multicriterio y debe justificar trade-offs.

### Propuesta

¿Qué criterio resume mejor una selección tecnológica madura entre móvil, servidor, cloud y HPC?

- A. Priorizar novedad y resultados de demostración antes de clasificar cargas y riesgos.
- B. Unificar toda carga en una plataforma aunque no cumpla compatibilidad o soporte.
- C. Contrastar requisitos, arquitectura, operación, seguridad, coste y opciones de salida. **(correcta)**
- D. Tomar frecuencia de CPU y licencia como sustitutos del análisis del ciclo de vida.

Explicación: La selección madura contrasta requisitos y evidencias: adecuación de arquitectura y rendimiento, seguridad, soporte, operación, coste del ciclo de vida y posibilidad de cambio. Móvil, servidor, cloud y HPC plantean perfiles distintos. No se exige una plataforma diferente para cada uno ni evitar toda dependencia; se justifican las decisiones y sus compensaciones, incluida una salida proporcionada al riesgo y al valor del servicio.

- Error A: Novedad y una demostración aportan información parcial. Sin requisitos y riesgos no prueban adecuación, sostenibilidad operativa o compatibilidad.
- Error B: La uniformidad puede reducir trabajo, pero deja de ser una buena selección si incumple requisitos esenciales. Debe justificarse con compatibilidad y soporte.
- Error D: La frecuencia y la licencia son datos parciales. No resumen memoria, red, operación, transición, mantenimiento o costes de cambiar de solución.

- [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) · 3.1, pp. 3-1–3-3: requisitos del servicio, compatibilidad, coste, competencias y selección del SO · versión: Julio 2008; solo fundamentos de planificación, sin copiar protocolos, contraseñas o guía operativa histórica como configuración actual · comprobado: 2026-10-27
- [AWS Prescriptive Guidance: Detailed business case](https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/detailed-business-case.html) · Determine the scenarios needed for the case; Validate and refine the infrastructure and migration cost model · versión: Caso cloud usado para comparar escenarios y coste del ciclo de vida, sin adoptar precios, porcentajes de ahorro o superioridad automática de AWS/nube · comprobado: 2026-10-27
- [GOV.UK: Managing technical lock-in in the cloud](https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud) · Understand your technical lock-in y Manage your technical lock-in: dependencias, alternativas, costes de salida y pruebas proporcionadas · versión: Publicación 17-12-2019, actualización 03-09-2026; principios técnicos, sin atribuir reglas británicas de contratación al organismo español · comprobado: 2026-10-27

Partida: `f9a986ffa113909b8368e07a38d0525a54ebb3b5d257a828fcc7731e5b71f92d` · propuesta: `cb7d9e3435b3c3bc65d7912d5488cafe8815e7a3a5cc0ca789b7954e0d4fc085`

## MAN-GSI-P17-160

Decisión: pending_review · acción: revise.

Motivo: Conservar caso integrador y clave C; alternativas paralelas de proceso, sin convertir on-prem/cloud en obligación ni abreviar fuera del feedback los requisitos.

### Antes

Caso final: un organismo necesita renovar infraestructura, mantener aplicaciones Windows/Linux, gestionar móviles y absorber picos. ¿Qué enfoque es más completo?

- A. Migrar todas las cargas a una única nube y sistema operativo antes de inventariar compatibilidades y dependencias.
- B. Mantener todo on-premise comprando capacidad para el pico máximo y retirar monitorización y escalado dinámico.
- C. Inventariar cargas y dependencias, clasificar requisitos, combinar capacidad adecuada/on-prem-cloud, diseñar HA/escalado, gobernar identidades y UEM, y probar recuperación/reversibilidad. **(correcta)**
- D. Delegar la gestión de móviles a los usuarios y separar identidades, recuperación y continuidad del proyecto de infraestructura.

Explicación: La solución integra II.01 y II.02: hardware, cloud, SO, seguridad, operación y continuidad.

### Propuesta

Caso final: un organismo necesita renovar infraestructura, mantener aplicaciones Windows/Linux, gestionar móviles y absorber picos. ¿Qué enfoque es más completo?

- A. Migrar al mismo SO y nube antes del inventario, adaptando después las incompatibilidades.
- B. Comprar capacidad para el pico, dejando identidad, móviles y recuperación fuera del análisis.
- C. Clasificar cargas y dependencias; validar compatibilidad, escalado, gestión y recuperación. **(correcta)**
- D. Aprobar la infraestructura por pruebas de CPU, aplazando operación y salida del proveedor.

Explicación: La renovación exige inventariar aplicaciones y dependencias y contrastar requisitos de servicio. Se elige capacidad y ubicación adecuadas, se prueban compatibilidad Windows/Linux, escalado, continuidad, identidad, gestión de móviles y recuperación. También se evalúa una salida viable. No se impone nube híbrida ni un proveedor: la combinación on-prem/cloud se justifica si conviene. Las pruebas deben abarcar el conjunto y sus dependencias, no solo rendimiento de CPU.

- Error A: Migrar antes de conocer dependencias puede imponer incompatibilidades o cambios innecesarios. El inventario y los requisitos orientan la elección.
- Error B: Dimensionar un pico atiende capacidad, pero excluye controles y recuperación que necesita el conjunto. La compra no resuelve esos requisitos.
- Error D: La CPU no demuestra operabilidad, continuidad o viabilidad de salida. Posponer esas pruebas deja decisiones esenciales sin respaldo.

- [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) · 3.1, pp. 3-1–3-3: requisitos del servicio, compatibilidad, coste, competencias y selección del SO · versión: Julio 2008; solo fundamentos de planificación, sin copiar protocolos, contraseñas o guía operativa histórica como configuración actual · comprobado: 2026-10-27
- [Microsoft: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Introducción, Autoscaling components y diseño para escalado horizontal: métricas, estado, dependencias y pruebas · versión: Actualización previamente contrastada 11-10-2026; cuerpo releído en este lote, sin asumir escalado infinito, inmediato o continuidad automática · comprobado: 2026-10-27
- [IBM: What is Unified Endpoint Management (UEM)?](https://www.ibm.com/think/topics/uem) · What is UEM? y The evolution of UEM: gestión conjunta de móviles y ordenadores; MDM y MAM · versión: Descripción del proveedor, no norma universal ni garantía de soporte de todo endpoint o de control total de un dispositivo · comprobado: 2026-10-27
- [Microsoft identity platform: Authorization basics](https://learn.microsoft.com/en-us/entra/identity-platform/authorization-basics) · Introducción, Authentication as authorization y Role-based access control: identidad frente a acceso y acciones permitidas · versión: Actualización 25-08-2024; se admite una política basada en autenticación, manteniendo distintos los conceptos · comprobado: 2026-10-27
- [Microsoft Well-Architected: Architecture strategies for disaster recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) · RE:09; Prioritize by business impact; Design recovery-aware architecture; Practice with regular drills · versión: Solo objetivos, dependencias y pruebas de recuperación; no se impone un despliegue multirregión o pérdida cero universal · comprobado: 2026-10-27
- [GOV.UK: Managing technical lock-in in the cloud](https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud) · Understand your technical lock-in y Manage your technical lock-in: dependencias, alternativas, costes de salida y pruebas proporcionadas · versión: Publicación 17-12-2019, actualización 03-09-2026; principios técnicos, sin atribuir reglas británicas de contratación al organismo español · comprobado: 2026-10-27

Partida: `3940ebb4a8559bcc7aad7ef3a7fcfd26d74f66fe8baca4a38bc2611942509b7d` · propuesta: `4605dfb863864387c2ada06af47b34fdb1321360a14d4d2e7a4e28b88bd05e9a`
