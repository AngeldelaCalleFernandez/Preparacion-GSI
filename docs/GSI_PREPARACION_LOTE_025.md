# Preparación del lote GSI-EDITORIAL-025

Fecha: **27-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico:

`2d77b1a430cab26d729682c426c7387e2fe340e4a6bd4630f7854663c92e9558`

La [ficha antes/después](GSI_REVISION_LOTE_025.md) contiene las 20 propuestas y sus explicaciones. El [JSON](../content/question-reviews/lote-025.json) conserva instantáneas, hashes, motivos, fuentes y rúbrica del preparador. El [registro técnico](../logs/gsi-editorial-025-preparation.json) distingue preparación, revisión humana y aplicación. La aprobación del piloto no autoriza este lote.

## Alcance y decisiones individuales

Posiciones **481–500** de `review_order`: **20 manuales B2-T02**, sobre plataformas móviles y selección/operación de infraestructuras. No incluye IA ni oficiales. Se mantienen conceptos, IDs, claves, procedencia, campos de fuente histórica y dificultad orientativa. Las decisiones nuevas permanecen `pending_review`.

Se conservan íntegramente enunciado y alternativas de **MAN-GSI-P17-146**, cuya distinción MDM/MAM/IAM/NAC ya era pertinente. Hay **12 conceptuales y ocho aplicaciones**: se mantienen los ocho microcasos existentes (140, 153–158 y 160), precisándolos cuando es necesario. El criterio aproximado 70/30 se aplica al banco, sin imponer cuotas artificiales a cada lote.

| ID | Modalidad | Motivo individual |
| --- | --- | --- |
| MAN-GSI-P17-140 | Aplicación | Conservar el microcaso de selección Windows/Linux y clave A; comparar criterios profesionales próximos sin reducir la decisión a un único indicador. |
| MAN-GSI-P17-141 | Conceptual | Conservar base Linux y clave A; cuatro nombres de núcleos como alternativas, con explicación separada de kernel y plataforma. |
| MAN-GSI-P17-142 | Conceptual | Conservar sandbox Android y clave D; acotar modelo por defecto y distinguir aislamiento de runtime, declaraciones y virtualización de hardware. |
| MAN-GSI-P17-143 | Conceptual | Conservar mínimo privilegio y clave D; distractores sobre anticipación, grupos y confianza, sin equiparar todos los permisos con runtime. |
| MAN-GSI-P17-144 | Conceptual | Conservar base Darwin/XNU y clave C; sustituir DOS por confusión plausible entre componentes FreeBSD y núcleo completo. |
| MAN-GSI-P17-145 | Conceptual | Conservar controles por capas y clave B; distinguir firma, distribución y aislamiento sin afirmar exclusividad universal de App Store. |
| MAN-GSI-P17-146 | Conceptual | Conservar literalmente enunciado y cuatro alternativas ya plausibles y clave B; completar límites por inscripción y explicaciones MAM/IAM/NAC. |
| MAN-GSI-P17-147 | Conceptual | Conservar relación de alcances solapados y clave C; evitar jerarquía rígida o universalidad comercial de funcionalidades. |
| MAN-GSI-P17-148 | Conceptual | Conservar cifrado en reposo y clave B; cuatro efectos de controles próximos, con límites de sesión, claves y recuperación. |
| MAN-GSI-P17-150 | Conceptual | Conservar autenticación frente a autorización y clave B; reconocer flujos integrados sin equiparar desbloqueo local con permiso remoto. |
| MAN-GSI-P17-151 | Conceptual | Conservar riesgos BYOD y clave C; sustituir desaparición del malware por errores de alcance de política, soporte y acceso. |
| MAN-GSI-P17-152 | Conceptual | Conservar separación por perfil/contenedor y clave B; matizar intercambio autorizado y privacidad, sin prometer aislamiento absoluto. |
| MAN-GSI-P17-153 | Aplicación | Conservar microcaso de permiso contextual y clave A; precisar acceso directo/runtime y distinguir captura delegada para evitar ambigüedad. |
| MAN-GSI-P17-154 | Aplicación | Conservar caso de contratos multiplataforma y clave A; sustituir memoria física por Internet por acoplamientos reales a SO, datos y despliegue. |
| MAN-GSI-P17-155 | Aplicación | Conservar capacidad/estado/continuidad y clave D; tres mejoras parciales plausibles y una que atiende conjuntamente los requisitos. |
| MAN-GSI-P17-156 | Aplicación | Conservar retirada corporativa selectiva y clave D; precisar soporte/inscripción, comunicación y límites frente a copias exportadas. |
| MAN-GSI-P17-157 | Aplicación | Conservar microcaso de salud Windows/Linux y clave A; distractores de comparación defectuosa y matiz de equivalencia semántica. |
| MAN-GSI-P17-158 | Aplicación | Conservar caso de portal HA y backend HPC y clave D; separación lógica y dimensionamiento por perfil, sin exigir cloud o hardware concreto. |
| MAN-GSI-P17-159 | Conceptual | Conservar selección tecnológica por requisitos y clave C; evitar opciones artificialmente largas y distinguir homogeneidad útil de imposición. |
| MAN-GSI-P17-160 | Aplicación | Conservar caso integrador y clave C; alternativas paralelas de proceso, sin convertir on-prem/cloud en obligación ni abreviar fuera del feedback los requisitos. |

Cada propuesta incorpora explicación de la correcta y tres justificaciones individuales de distractores, vinculadas a los IDs originales y referidas al contenido. En 146 la acción `revise` corresponde al nuevo feedback y respaldo: la nueva versión necesita aceptación propia. No se proponen cambios de clave, retiradas ni reemplazos.

## Fuentes y alcance de la comprobación

Se registran **28 URLs primarias distintas**: **27 abiertas en web durante esta preparación** y el README de XNU, cuya lectura por conector GitHub se reutiliza del lote 024 del mismo día. Se identifica su blob y no se atribuye una nueva apertura. Las referencias incluyen localizador, versión o alcance y fecha real **27-10-2026**. La comprobación del preparador no equivale a revisión humana independiente.

| Fuente primaria | Localizador y versión o alcance |
| --- | --- |
| [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) | 3.1, pp. 3-1–3-3: requisitos del servicio, compatibilidad, coste, competencias y selección del SO. Julio 2008; solo fundamentos de planificación, sin copiar protocolos, contraseñas o guía operativa histórica como configuración actual. |
| [AWS Prescriptive Guidance: Detailed business case](https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/detailed-business-case.html) | Determine the scenarios needed for the case; Validate and refine the infrastructure and migration cost model. Caso cloud usado para comparar escenarios y coste del ciclo de vida, sin adoptar precios, porcentajes de ahorro o superioridad automática de AWS/nube. |
| [AOSP: Kernel overview](https://source.android.com/docs/core/architecture/kernel) | Introducción: Linux LTS, Android Common Kernels y parches específicos; separación del núcleo genérico y módulos de fabricante. Solo base Linux y adaptación Android, sin exigir una versión de kernel idéntica en todos los dispositivos. |
| [AOSP: Architecture overview](https://source.android.com/docs/core/architecture) | Android framework, System services, Android runtime (ART), Hardware abstraction layer y Kernel. Actualización 09-10-2026; distinción entre núcleo y plataforma, sin exigir servicios propietarios de Google. |
| [QNX: The QNX Neutrino Microkernel](https://www.qnx.com/developers/docs/7.1/com.qnx.doc.neutrino.sys_arch/topic/kernel.html) | The QNX Neutrino Microkernel: microkernel y servicios básicos de mensajería; contexto de sistemas de tiempo real embebidos. Documentación QNX SDP/Neutrino 7.1, página actualizada 12-03-2026; solo identidad de la alternativa, no recomendación de versión ni hardware. |
| [Fuchsia: Zircon](https://fuchsia.dev/fuchsia-src/concepts/kernel) | Introducción: plataforma base de Fuchsia, núcleo y servicios de usuario; funciones del Zircon Kernel. Actualización 29-07-2026; se distingue plataforma Zircon y su núcleo, sin adoptar números de syscalls o notas temporales de ABI. |
| [AOSP: Application Sandbox](https://source.android.com/docs/security/app-sandbox) | Introducción y Protections: UID, procesos, aislamiento aplicado por el kernel y defensa en profundidad. Modelo básico por defecto de apps ordinarias; no se afirma invulnerabilidad o ausencia de mecanismos autorizados de intercambio. |
| [Android Developers: App permissions overview](https://developer.android.com/guide/topics/permissions/overview) | Workflow for using permissions y Types of permissions: necesidad, alternativas, permisos de instalación, ejecución y especiales. El procedimiento depende del permiso y plataforma; no todo permiso exige un diálogo en ejecución. |
| [Android Developers: Request runtime permissions](https://developer.android.com/training/permissions/requesting) | Basic principles y Workflow for requesting permissions: necesidad, solicitud contextual, denegación/revocación y degradación funcional. Permisos runtime en Android 6.0/API 23 o superior; el microcaso presupone acceso directo a cámara que requiere permiso, no captura delegada o selector sin ese acceso. |
| [Apple Open Source: XNU README](https://github.com/apple-oss-distributions/xnu/blob/main/README.md) | What is XNU?, líneas 1–5: núcleo híbrido que combina Mach, componentes FreeBSD e IOKit. Leído con conector GitHub; blob Git 99c8db7e568ee00d37557598bd0e73414611e45b. Solo ejemplo de combinación de diseños, sin adoptar compatibilidad de hardware o instrucciones de compilación. |
| [Apple Platform Security: App code signing process](https://support.apple.com/guide/security/app-code-signing-process-sec7c917bf14/web) | Mandatory code signing y How developers sign their apps: validación de código y relación con distribución. No se equipara firma con ausencia de vulnerabilidades ni distribución controlada con exclusividad universal de App Store. |
| [Apple Platform Security: Security of runtime process in iOS, iPadOS, and visionOS](https://support.apple.com/guide/security/security-of-runtime-process-sec15bfe098e/web) | Sandboxing y Use of entitlements: aislamiento de apps de terceros y capacidades declaradas y firmadas. Solo capas de ejecución; no se adopta invulnerabilidad ni ausencia de intercambio mediante servicios autorizados. |
| [NIST SP 800-124 Rev. 2: Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf) | 4.1.3, p. 17; 4.2.1, pp. 18–20; 4.2.2, pp. 20–21: APIs de gestión, EMM/MDM y gestión de aplicaciones. Mayo 2023; capacidades condicionadas por plataforma, inscripción y producto; sin obligaciones federales estadounidenses para España. |
| [IBM: What is Enterprise Mobility Management (EMM)?](https://www.ibm.com/think/topics/enterprise-mobility-management) | Mobile device management, Mobile application management y Enterprise mobility management vs. unified endpoint management. Terminología y alcance habitual; no se adoptan promesas comerciales, ausencia de riesgos o jerarquía formal obligatoria entre productos. |
| [IBM: What is Unified Endpoint Management (UEM)?](https://www.ibm.com/think/topics/uem) | What is UEM? y The evolution of UEM: gestión conjunta de móviles y ordenadores; MDM y MAM. Descripción del proveedor, no norma universal ni garantía de soporte de todo endpoint o de control total de un dispositivo. |
| [Apple Platform Security: Data Protection overview](https://support.apple.com/en-my/guide/security/secf6276da8a/web) | Introducción: protección de datos de almacenamiento flash, claves jerárquicas y clases de protección por archivo. Publicación 19-12-2024; ejemplo de datos en reposo y gestión de claves, sin generalizar hardware, algoritmos o todas las clases a todo móvil. |
| [Android Developers: Show a biometric authentication dialog](https://developer.android.com/identity/sign-in/biometric-auth) | Introducción y Declare the types of authentication that your app supports: verificación biométrica y credencial del dispositivo. Solo función de autenticación; no se recomienda API obsoleta FingerprintManager ni se confunde desbloqueo local con concesión de permisos del servicio. |
| [Microsoft identity platform: Authorization basics](https://learn.microsoft.com/en-us/entra/identity-platform/authorization-basics) | Introducción, Authentication as authorization y Role-based access control: identidad frente a acceso y acciones permitidas. Actualización 25-08-2024; se admite una política basada en autenticación, manteniendo distintos los conceptos. |
| [Android Developers: Work profiles](https://developer.android.com/work/managed-profiles) | Overview e introducción: perfil gestionado separado del principal, almacenamiento e intercambio entre perfiles. Perfil de trabajo Android; separación con intercambios sujetos a política, no aislamiento absoluto ni control idéntico en toda plataforma. |
| [Microsoft Intune: Device action: retire](https://learn.microsoft.com/en-us/intune/device-management/actions/retire) | Introducción; User experience; Android Enterprise personally owned devices with a work profile; nota de contactos exportados. Ejemplo de retirada selectiva: inscripción y plataforma compatibles, efecto al comunicar con el servicio; no borra toda copia exportada ni equivale a factory reset. |
| [Microsoft: Best practices for RESTful web API design](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design) | Introducción, principios Platform independence y Loose coupling; RESTful web API design concepts. Solo contratos, protocolos y representaciones interoperables; no se deduce portabilidad automática de binarios o garantía de seguridad por usar HTTP/JSON. |
| [Microsoft: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) | Introducción, Autoscaling components y diseño para escalado horizontal: métricas, estado, dependencias y pruebas. Actualización previamente contrastada 11-10-2026; cuerpo releído en este lote, sin asumir escalado infinito, inmediato o continuidad automática. |
| [Microsoft Well-Architected: Architecture strategies for designing for redundancy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy) | RE:05, introducción y Key design strategies: redundancia por capas y capacidad para absorber fallos. Se usa el principio de dominios de fallo y objetivos de fiabilidad, sin prometer disponibilidad absoluta ni exigir multirregión a toda carga. |
| [OpenTelemetry: Signals](https://opentelemetry.io/docs/concepts/signals/) | Signals, Metrics y Logs: salidas de SO/aplicaciones, medidas en ejecución y sucesos. Última modificación indicada 10-03-2026; no se introduce esta dependencia ni se presupone igualdad de nombres/unidades entre contadores de sistemas distintos. |
| [Microsoft: Best practices for monitoring and diagnostics](https://learn.microsoft.com/en-us/azure/architecture/best-practices/monitoring) | Health monitoring, Collect health data; Instrument an application → Information for correlating data: contexto, identificadores, UTC y nota sobre relojes no sincronizados. Solo monitorización y correlación; UTC no sincroniza relojes ni basta por sí solo para relacionar eventos de máquinas distintas. |
| [Microsoft Well-Architected: Architecture Pattern for HPC Workloads on Azure](https://learn.microsoft.com/en-us/azure/well-architected/hpc/hpc-architecture-pattern) | Design Considerations; Architecture Flow; User Access and Job Submission; Orchestration and Scheduling. Ejemplo de separación de acceso, planificación y cómputo; dimensionamiento por perfil, sin exigir nube, hardware concreto o separación física universal. |
| [GOV.UK: Managing technical lock-in in the cloud](https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud) | Understand your technical lock-in y Manage your technical lock-in: dependencias, alternativas, costes de salida y pruebas proporcionadas. Publicación 17-12-2019, actualización 03-09-2026; principios técnicos, sin atribuir reglas británicas de contratación al organismo español. |
| [Microsoft Well-Architected: Architecture strategies for disaster recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) | RE:09; Prioritize by business impact; Design recovery-aware architecture; Practice with regular drills. Solo objetivos, dependencias y pruebas de recuperación; no se impone un despliegue multirregión o pérdida cero universal. |

Matices y decisiones de fuente:

- Consulta real del 27-10-2026: 27 URLs primarias abiertas en web durante esta preparación y un README de XNU con contraste directo del mismo día en el lote 024, reutilizado sin nueva lectura. No se fabrica aceptación humana.
- Android: Linux con adaptaciones específicas, no identidad con toda distribución Linux. Sandbox básico por defecto mediante UID/procesos/kernel; también código nativo, con intercambios autorizados y sin promesa de invulnerabilidad.
- Permisos: se distingue necesidad, declaración y concesión. No todos son runtime ni el mismo procedimiento en todas las plataformas. El caso de cámara explicita acceso directo que necesita permiso; captura delegada puede evitarlo.
- Apple: XNU/Darwin según README primario identificado por blob Git. Firma, reglas de distribución y sandbox se complementan; firma no garantiza inocuidad ni se afirma exclusividad universal de App Store. Data Protection es ejemplo de datos en reposo con claves y clases, no protección absoluta de una sesión comprometida.
- MDM/EMM/UEM: terminología solapada, no jerarquía normativa universal. NIST admite EMM a veces denominado UEM; IBM explica el alcance habitual de móviles frente a endpoints diversos. Las capacidades se comprueban por plataforma, inscripción y producto, sin adoptar promesas comerciales de control total.
- Autenticación biométrica y autorización: pueden integrarse en un flujo y una política puede basarse en estar autenticado, pero identidad y acciones permitidas siguen siendo conceptos distintos. Desbloqueo local no concede permisos remotos universales.
- BYOD/perfil: separación de trabajo y personal con intercambios sujetos a política. La propiedad personal no garantiza cumplimiento, actualizaciones ni identidad. No se atribuyen obligaciones legales españolas a guías de otros países.
- Retirada selectiva: Intune es ejemplo compatible, no receta universal. Se requiere ámbito gestionado, capacidades e inscripción pertinentes y comunicación efectiva; borrar inventario o desactivar cuenta no acredita retirada local. Las copias exportadas pueden quedar fuera. No se ejecuta ninguna acción real de dispositivos.
- API: independencia de plataforma y bajo acoplamiento por contratos y representaciones. No se deducen seguridad automática, portabilidad de binarios o compatibilidad de cualquier cambio.
- Escalado y continuidad: recursos, estado, balanceo y dependencias deben diseñarse y probarse; externalizar estado sin resiliencia puede trasladar el punto único. No se promete disponibilidad absoluta o capacidad infinita.
- Comparación operativa: equivalencia de señales, unidades, ventanas, carga y tiempo; no identidad de nombres de contadores Windows/Linux. OpenTelemetry respalda categorías, no se instala dependencia ni se universaliza un umbral.
- HPC: patrón de acceso, planificación y ejecución dimensionado por perfil. Separación de responsabilidades no exige separación física, nube ni hardware concretos; la continuidad del portal tiene sus propias dependencias.
- Selección y caso integrador: requisitos y evidencias antes de plataforma; TCO y alternativas de salida proporcionadas. NIST 800-123 es julio 2008 y solo se usan fundamentos de planificación, no configuración operativa actual o protocolos antiguos. AWS no prueba ahorro universal; GOV.UK no se aplica como regla de contratación española.
- Se conserva íntegramente la formulación de MDM 146 y los ocho microcasos existentes (140, 153–158 y 160), precisándolos cuando procede. Doce conceptuales y ocho aplicaciones se justifican por contenido, sin imponer cuotas por lote. La acción revise de 146 corresponde a nuevo feedback y respaldo, con aceptación propia necesaria.
- Refinamiento de respaldo: documentación primaria QNX Neutrino 7.1 y Fuchsia Zircon para las alternativas de 141; se precisa que Zircon es plataforma con núcleo y servicios. Monitoring and diagnostics respalda 157: tiempos coherentes y contexto de correlación, sin tratar UTC como sincronización ni timestamps como prueba suficiente. La página de convenciones de métricas de OpenTelemetry solo mostró inicialmente navegación y no se incorpora como lectura de sus detalles.

Límites externos y fuentes descartadas:

- Android: ruta privacy-and-security/permissions inaccesible; se leyeron guide/topics/permissions/overview y training/permissions/requesting.
- Apple: ruta de introducción MDM en deployment inaccesible; no usada. Se contrastaron NIST 800-124r2 y páginas primarias de IBM para el alcance de gestión.
- IBM: ruta unified-endpoint-management inaccesible; se abrió think/topics/uem y enterprise-mobility-management.
- Microsoft: hpc-saas inaccesible; se leyó Well-Architected hpc/hpc-architecture-pattern. Variante antigua remote-actions/device-retire con pivote Android inaccesible; se abrió device-management/actions/retire.
- Microsoft muestra aviso genérico de autorización junto al cuerpo público legible. No se inició sesión ni se accedió a documentación privada.
- XNU: se reutiliza la lectura GitHub documentada el mismo día en lote 024, blob 99c8db7e568ee00d37557598bd0e73414611e45b; no se presenta como nueva apertura web.

La revisión final registra los hashes de dos refinamientos de 141 y 157: respaldo de QNX/Zircon y correlación temporal; después, cabecera exacta y fecha visible de las fuentes. No cambian sus enunciados, alternativas o claves. No se ha ejecutado conversión ni modificado ningún documento original.

## Métricas antes y propuesta

Análisis 2.0.0 de las 20 preguntas en simulación, sin modificar bancos activos.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 15 | 6 |
| Aciertos por primera alternativa de longitud máxima | 15 | 8 |
| Ratio correcta/distractor máximo de 1,5–<2 | 8 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 20 | 0 |
| Feedback correcto e incorrecto idénticos | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 0 | 3 |
| Explicación individual de tres distractores | 0 | 20 |

La heurística de primera alternativa de longitud máxima pasa de **15/20 (75 %) a 8/20 (40 %)**. La de longitud mínima acierta **7/20 (35 %)** en la propuesta. Seis correctas siguen siendo únicas más largas, con extensión ajustada al concepto y distractores comparables. Se completan veinte feedback breves y desaparecen las ocho alertas graduales de longitud. No se cambian claves ni se añade relleno para ajustar métricas. Estas señales no acreditan calidad pedagógica, aceptación o calibración.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-025.json --render docs/GSI_REVISION_LOTE_025.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

Resultados ejecutados, todos con código 0:

- Simulación CLI de las 20 propuestas y reproducción exacta de la ficha; cero escritura en bancos activos.
- **17 pruebas editoriales**, **47 JSON**, **21 esquemas** y estructura de **1.964 preguntas** correctos.
- **19.251 controles de integridad**, sin errores técnicos; documentación y catálogo de referencias correctos (4 bloques, 57 temas, 37 Markdown del catálogo).
- Comprobación adicional de **57 enlaces locales** de ficha, informe y plan, además del catálogo general.
- Hash canónico, hashes de cada antes/después, procedencia, campos históricos y 60 explicaciones de distractores coherentes. Una formulación completa conservada: 146.
- Simulación: únicamente 20 manuales modificadas; cero IA y cero oficiales. Todos los IDs y claves del banco se conservan.
- **100 archivos protegidos** idénticos a la toma de partida: bancos, registros y entregas 001–024. El banco oficial coincide byte a byte con HEAD y con la auditoría; manual e IA coinciden en contenido con HEAD, respetando sus finales de línea existentes.
- El recibo vacío y el del piloto se rechazan para 025. No hay recibos de aceptación 002–025; el historial de aplicaciones mantiene únicamente el lote 001.
- Cola sin duplicados: 500 IDs preparados, 20 aceptados y 480 propuestos; progreso reproducible. Las 128 incidencias IA originales mantienen 15 aceptadas y 113 pendientes.
- Informes derivados regenerados: sin cambios semánticos frente a esta preparación; respecto a HEAD solo conservan la fecha de validación ya existente del 27-10-2026. `git diff --check` y espacios de los archivos nuevos correctos.

Una comprobación auxiliar falló inicialmente porque buscaba «copias exportadas» y el feedback decía «toda copia exportada». Se corrigió la aserción literal y pasó; no se modificaron preguntas para acomodarlas a la prueba. Los fallos de acceso a fuentes se documentan arriba con las alternativas utilizadas.

No cambian código ni bancos activos. No se repite la suite HTTP completa para propuestas inactivas, ni se atribuye al lote una nueva ejecución del piloto. Entrenamiento, Simulacros, estadísticas y Refuerzo siguen consumiendo las versiones activas. Para revisar este hito, abrir la ficha y contrastar las 20 alternativas correctas y sus distractores con las fuentes antes de aprobar expresamente el hash.

## Entrega y continuidad

Creados: `content/question-reviews/lote-025.json`, `docs/GSI_REVISION_LOTE_025.md`, este informe y `logs/gsi-editorial-025-preparation.json`. Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los informes derivados de cobertura, validación final y revisión histórica se regeneran contrastando su contenido y la fecha existente del 27-10-2026.

El lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 480 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, de las que **1.262** todavía no tienen propuesta. Los lotes 002–025 reúnen 113 incidencias IA originales, otras 54 IA y 313 manuales. Las 128 incidencias originales conservan 15 aplicadas y 113 propuestas pendientes; preparar no equivale a resolver editorialmente.

Sin conversiones documentales ni conversiones nuevas pendientes. Originales, oficiales y entregas anteriores permanecen protegidos. No se crea commit, publicación o fusión de propuestas pendientes. El siguiente lote continúa por bloque y tema. El cierre exige decisión individual del propietario sobre los 1.762 IDs y comprobación de versiones activas, distinguiendo preparación, aceptación humana y calibración todavía no realizada.
