# GSI-EDITORIAL-024 — revisión propuesta

Preparado: 2026-10-27. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `eb837fa4518e6621e59d5c8ef05aa54c6a76ce5eb5cf392ee72f962b294bab6c`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P17-119

Decisión: pending_review · acción: revise.

Motivo: Conservar combinación arquitectónica y clave A; sustituir hardware/alternancia absurdos por confusiones con módulos, virtualización y distribución de servicios.

### Antes

¿Qué significa que un kernel sea híbrido?

- A. Combina decisiones de diseño de varias familias, sin encajar de forma pura en un único modelo. **(correcta)**
- B. Alternar automáticamente entre Windows y Linux cada segundo y trasladar los procesos activos de un sistema al otro sin interrupción.
- C. Necesitar dos CPU de fabricantes distintos para repartir entre ellas las funciones propias de un microkernel y de un kernel monolítico.
- D. Carecer de gestión de memoria y delegar todas las decisiones de paginación, protección y asignación directamente a las aplicaciones.

Explicación: Los SO reales mezclan ideas monolíticas, microkernel y módulos.

### Propuesta

En la clasificación de arquitecturas de sistemas operativos, ¿qué expresa la etiqueta kernel híbrido?

- A. Integrar rasgos de varias familias de diseño en la organización del núcleo. **(correcta)**
- B. Cargar módulos manteniendo todas sus funciones en un único espacio privilegiado.
- C. Presentar dos núcleos invitados de un hipervisor como si fueran un único núcleo.
- D. Delegar toda función privilegiada en aplicaciones sin mantener un núcleo protector.

Explicación: Híbrido describe una combinación de decisiones procedentes de varios modelos, sin una frontera única y universal de clasificación. XNU es un ejemplo declarado por sus autores: combina Mach, componentes de FreeBSD e IOKit. No significa arrancar dos sistemas alternadamente ni exigir hardware de fabricantes distintos. Tener módulos cargables tampoco basta para demostrar que una arquitectura sea híbrida; importa dónde y cómo se organizan los servicios.

- Error B: La carga de módulos puede existir en diseños distintos, incluido el monolítico modular. Por sí sola no define una mezcla de familias arquitectónicas.
- Error C: Dos sistemas invitados siguen siendo núcleos separados bajo virtualización. Esa coexistencia no constituye por sí misma un núcleo híbrido.
- Error D: La combinación de diseños no elimina las funciones privilegiadas ni su protección. Repartir todo sin ese núcleo no describe la categoría.

- [Apple Open Source: XNU README](https://github.com/apple-oss-distributions/xnu/blob/main/README.md) · What is XNU?, líneas 1–5: núcleo híbrido que combina Mach, componentes FreeBSD e IOKit · versión: Leído con conector GitHub; blob Git 99c8db7e568ee00d37557598bd0e73414611e45b. Solo ejemplo de combinación de diseños, sin adoptar compatibilidad de hardware o instrucciones de compilación · comprobado: 2026-10-27

Partida: `70a093e176aa7255ae6f05af396df2160601c71f531c30887899b1e5335a778c` · propuesta: `b74648f4ca66370368cf7be7ab8339e5973b93e9084282573224bdd0792762dc`

## MAN-GSI-P17-120

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso de CPU baja/E/S lenta y clave D; medir antes de prescribir compra o alteraciones que distorsionen la línea base.

### Antes

Un servidor sufre alta latencia de disco y CPU baja. ¿Qué acción es más razonable antes de ampliar CPU?

- A. Duplicar los núcleos de CPU de inmediato aunque las métricas indiquen baja utilización y espera asociada al almacenamiento.
- B. Reducir la memoria disponible para generar más paginación y forzar al sistema a utilizar con mayor frecuencia el disco lento.
- C. Desactivar cachés del sistema y de la aplicación antes de medir, aumentando accesos físicos para observar mejor el problema.
- D. Medir cola, IOPS, throughput y patrón de acceso del almacenamiento y optimizar ese cuello de botella. **(correcta)**

Explicación: La mejora debe dirigirse al recurso saturado, no al componente más visible.

### Propuesta

Un servidor sufre alta latencia de disco y CPU baja. ¿Qué acción es más razonable antes de ampliar CPU?

- A. Aumentar núcleos tomando el número de peticiones pendientes como medida de uso de CPU.
- B. Priorizar frecuencia de CPU porque la latencia de disco mide tiempo de cálculo.
- C. Desactivar cachés antes de recoger una línea base del comportamiento del servicio.
- D. Medir latencia, colas, IOPS, throughput y patrón de acceso para localizar la limitación. **(correcta)**

Explicación: La CPU baja y la latencia de almacenamiento justifican investigar E/S antes de comprar más cómputo. Conviene correlacionar latencia, colas, operaciones por segundo, volumen transferido y patrón de acceso con la carga y la capacidad esperada. Eso no demuestra por sí solo que el disco físico sea defectuoso: filtros, aplicación, red de almacenamiento o configuración pueden intervenir. La mejora se decide a partir del diagnóstico, sin umbral universal de milisegundos.

- Error A: Peticiones esperando almacenamiento no equivalen a CPU ocupada. Añadir núcleos sin identificar el límite puede dejar intacta la espera.
- Error B: Latencia de una operación de E/S no es una medida de trabajo aritmético de CPU. Su origen debe aislarse por capas.
- Error C: Eliminar cachés altera la carga y puede aumentar el tráfico. Primero se obtiene una línea base y se prueban hipótesis controladas.

- [Microsoft: Troubleshoot slow SQL Server performance caused by I/O issues](https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/performance/troubleshoot-sql-io-performance) · Define slow I/O performance; Methodology to isolate I/O bottlenecks, Step 3: Is the I/O subsystem overwhelmed beyond capacity?: latencia, Disk Bytes/sec, carga y diagnóstico · versión: Actualización 05-08-2026; ejemplo SQL Server/Windows. Solo principios de medida y aislamiento, sin universalizar umbral 10–15 ms, máximos de hardware, recomendaciones de consultas o tiempos de otros servicios. · comprobado: 2026-10-27

Partida: `1c1b6efa85c377cdb1820eef2be11011fa17eb7d5d43cf84dc076f3973ebe21d` · propuesta: `c4fb529ae81c7ef605b207e4379f6c51135d97f29f605da6b9906a8963004872`

## MAN-GSI-P17-121

Decisión: pending_review · acción: revise.

Motivo: Conservar familia NT y clave C; acotar Windows 10/11 y separar linaje, compatibilidad y número de versión.

### Antes

¿De qué familia tecnológica deriva Windows moderno?

- A. De MS-DOS exclusivamente sin arquitectura NT.
- B. De un kernel Linux.
- C. De la familia Windows NT. **(correcta)**
- D. De BSD sin componentes propios.

Explicación: Windows moderno se basa en la línea NT.

### Propuesta

¿A qué familia tecnológica pertenecen Windows 10 y Windows 11?

- A. La línea Windows 9x, basada en el entorno de MS-DOS.
- B. La línea Linux, con sus distribuciones de usuario.
- C. La línea Windows NT, que constituye su base arquitectónica. **(correcta)**
- D. La línea BSD, manteniendo su núcleo como base directa.

Explicación: Windows 10 y Windows 11 pertenecen a la línea basada en Windows NT. La documentación de destinos de controladores identifica NT y los incluye en sus tablas. No se debe confundir nombre comercial con número interno de versión, ni compatibilidad con aplicaciones o presencia de un subsistema con la familia del núcleo. La pregunta se acota a estas versiones para evitar un moderno indefinido y afirmaciones sobre todas las ramas históricas de Windows.

- Error A: La línea Windows 9x ligada a MS-DOS es distinta de la base NT de las versiones indicadas. Compatibilidad no implica esa filiación.
- Error B: Usar herramientas o subsistemas relacionados con Linux no convierte la arquitectura base de Windows 10/11 en un núcleo Linux.
- Error D: La familia BSD no es la base directa del núcleo de las versiones indicadas. Compartir interfaces o ideas no prueba ese origen.

- [Microsoft: INF Manufacturer section](https://learn.microsoft.com/en-us/windows-hardware/drivers/install/inf-manufacturer-section) · Remarks, campos NT y OSMajorVersion/OSMinorVersion: destinos basados en NT y tablas para Windows 10/11 · versión: Actualización 21-05-2025; se acota a Windows 10/11, sin extender la frase cronológica Windows 2000 y posteriores a Windows Me ni confundir versión interna con nombre comercial · comprobado: 2026-10-27

Partida: `652371fb5011c0ea79e19121b9003b72a63d55959b835ec6114c85d1f1d201a5` · propuesta: `ab90b65205016e907667640e0d7cd19c58c06e0e7076f61b50e56e2af3c6b24e`

## MAN-GSI-P17-122

Decisión: pending_review · acción: revise.

Motivo: Conservar cuatro alternativas y clave B; acotar servicio de aplicación ante la ambigüedad potencial de driver services también administrados por SCM.

### Antes

¿Qué es un servicio de Windows?

- A. Una tarea configurada para iniciar un programa a una hora o ante un evento mediante el Programador de tareas.
- B. Un proceso o componente gestionado para ejecutar funciones en segundo plano bajo el Service Control Manager. **(correcta)**
- C. Una aplicación interactiva lanzada al iniciar sesión y vinculada al escritorio y al perfil del usuario conectado.
- D. Un controlador cargado por el kernel para comunicar el sistema operativo con hardware o funciones de bajo nivel.

Explicación: Los servicios proporcionan funciones persistentes sin interfaz interactiva obligatoria.

### Propuesta

En el modelo de servicios de aplicación de Windows, ¿qué describe un servicio gestionado por el Service Control Manager?

- A. Una tarea configurada para iniciar un programa a una hora o ante un evento mediante el Programador de tareas.
- B. Un proceso o componente gestionado para ejecutar funciones en segundo plano bajo el Service Control Manager. **(correcta)**
- C. Una aplicación interactiva lanzada al iniciar sesión y vinculada al escritorio y al perfil del usuario conectado.
- D. Un controlador cargado por el kernel para comunicar el sistema operativo con hardware o funciones de bajo nivel.

Explicación: Una aplicación de servicio cumple el contrato del Service Control Manager para inicio, control y comunicación de estado. Puede iniciarse al arrancar, bajo demanda o por desencadenadores, y ejecutar sin usuario conectado. No necesita ser una aplicación interactiva ligada al escritorio. SCM también mantiene e inicia servicios de controlador; por eso se acota la pregunta al servicio de aplicación, sin negar esa otra clase ni equiparar todo proceso de fondo a un servicio.

- Error A: La programación de una tarea permite lanzar programas por horarios o eventos, pero no establece por sí misma el contrato de aplicación de servicio con SCM.
- Error C: Una aplicación de inicio de sesión depende de ese contexto interactivo. Un servicio de aplicación puede ejecutar aunque nadie haya iniciado sesión.
- Error D: Describe un controlador y su protocolo de bajo nivel. Aunque SCM también administre driver services, no es la aplicación de servicio expresamente preguntada.

- [Microsoft: Services (Services)](https://learn.microsoft.com/en-us/windows/win32/services/services) · Introducción: contrato de la aplicación de servicio con SCM, modalidades de inicio y ejecución sin usuario conectado; distinción de driver service · versión: Actualización 07-01-2021; término service de la página acotado a aplicación de servicio · comprobado: 2026-10-27
- [Microsoft: Service control manager](https://learn.microsoft.com/en-us/windows/win32/services/service-control-manager) · Introducción y lista de tareas: base de servicios, inicio/enumeración/estado de servicios y driver services, solicitudes de control · versión: Actualización 08-02-2022; no se afirma que SCM excluya los servicios de controlador · comprobado: 2026-10-27

Partida: `79e8d26dd81d50c307729b724e01bf36abb939ebb2e4220a9225ded25e928005` · propuesta: `b776122cccf47d31f09868ce05fb3a0b7c492880d89fa016e84d768b9012c568`

## MAN-GSI-P17-123

Decisión: pending_review · acción: revise.

Motivo: Conservar función de configuración y clave A; microcaso mínimo que compara herramientas administrativas próximas.

### Antes

¿Qué función cumple el Registro de Windows?

- A. Almacenar configuración estructurada del sistema y muchas aplicaciones. **(correcta)**
- B. Ser el único sistema de archivos de Windows.
- C. Sustituir todos los logs.
- D. Actuar como hipervisor.

Explicación: El Registro es un almacén de configuración, no un sistema de archivos completo.

### Propuesta

Una aplicación Windows necesita guardar y recuperar ajustes mediante el almacén de configuración definido por el sistema. ¿Qué componente corresponde a esa finalidad?

- A. Registro de Windows: almacén de configuración del sistema y aplicaciones. **(correcta)**
- B. Windows Event Log: registros de sucesos para operación y auditoría.
- C. Programador de tareas: definición de ejecuciones según condiciones.
- D. Almacén de credenciales: conservación protegida de datos de autenticación.

Explicación: El Registro es un almacén definido por el sistema para guardar y recuperar configuración de componentes y aplicaciones. No contiene por definición toda configuración: algunas aplicaciones usan archivos u otros mecanismos. Se distingue de sucesos, tareas y credenciales aunque esos componentes también utilicen configuración interna. La finalidad indicada en el caso, guardar un ajuste, es la que identifica el Registro; no se modifica ningún sistema real.

- Error B: Los registros de eventos guardan sucesos para consulta y análisis. No son el almacén de configuración descrito por el caso.
- Error C: El Programador organiza cuándo y bajo qué condiciones se ejecutan tareas. No define el propósito general del Registro.
- Error D: Un almacén de credenciales protege material de autenticación. Un ajuste de configuración general no se identifica por ello con una credencial.

- [Microsoft: Registry](https://learn.microsoft.com/en-us/windows/win32/sysinfo/registry) · Párrafos iniciales: almacén definido por el sistema para datos de configuración de aplicaciones y componentes · versión: Actualización 07-01-2021; solo finalidad conceptual, sin editar configuración real · comprobado: 2026-10-27
- [Microsoft: Windows Event Log](https://learn.microsoft.com/en-us/windows/win32/wes/windows-event-log) · Purpose y Run-time requirements: proveedores, manifiestos, escritura y lectura/representación de eventos; API que sucede a Event Logging desde Vista · versión: Actualización 19-08-2020; no se recomienda API histórica sustituida ni se presupone que toda acción o auditoría se registre automáticamente · comprobado: 2026-10-27

Partida: `77c00f65ffbdfe6f0af627f63ff3543bdc9a9a8812354d8fa99113309ddc9945` · propuesta: `4fb9c2949e1de8c276e46ea57de26e5ffd7dd6c630945fa252eb8975e87bfc4d`

## MAN-GSI-P17-124

Decisión: pending_review · acción: revise.

Motivo: Conservar registro de eventos y clave D; caso de diagnóstico que distingue sucesos, contadores, tareas y mantenimiento.

### Antes

¿Para qué sirve Windows Event Log?

- A. Programar la ejecución periódica o condicionada de aplicaciones, scripts y tareas de mantenimiento del sistema.
- B. Recopilar contadores de rendimiento de procesador, memoria, disco y red para analizar carga y tendencias.
- C. Buscar, descargar e instalar actualizaciones del sistema operativo y otros productos administrados de Microsoft.
- D. Registrar eventos de sistema, seguridad y aplicaciones para operación y auditoría. **(correcta)**

Explicación: Los logs son esenciales para diagnóstico, seguridad y trazabilidad.

### Propuesta

Tras una incidencia, un administrador necesita revisar sucesos registrados por Windows y sus aplicaciones durante un intervalo. ¿Para qué utilizaría Windows Event Log?

- A. Programar una tarea para ejecutar una comprobación en cada inicio.
- B. Recoger contadores de rendimiento para analizar utilización de recursos.
- C. Aplicar las actualizaciones del sistema que hayan sido autorizadas.
- D. Consultar eventos de proveedores y registros del sistema y aplicaciones. **(correcta)**

Explicación: Windows Event Log permite escribir, almacenar y consultar eventos de proveedores para operación, diagnóstico y auditoría. La información disponible depende de proveedores, configuración, políticas de auditoría y conservación; no acredita que toda acción haya quedado registrada. Se distingue de ejecutar tareas, medir contadores o instalar actualizaciones. Los registros requieren revisión y protección para ser útiles en una investigación.

- Error A: Una tarea puede ejecutar diagnósticos, pero programarla no consulta por sí mismo los sucesos ya registrados del intervalo.
- Error B: Los contadores describen medidas de rendimiento y ayudan al análisis, pero no sustituyen la secuencia de eventos que se pide revisar.
- Error C: Aplicar parches es una acción de mantenimiento. No es la consulta de sucesos históricos de servicio o aplicación.

- [Microsoft: Windows Event Log](https://learn.microsoft.com/en-us/windows/win32/wes/windows-event-log) · Purpose y Run-time requirements: proveedores, manifiestos, escritura y lectura/representación de eventos; API que sucede a Event Logging desde Vista · versión: Actualización 19-08-2020; no se recomienda API histórica sustituida ni se presupone que toda acción o auditoría se registre automáticamente · comprobado: 2026-10-27
- [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) · 2.4, p. 2-4; 4.1, pp. 4-1–4-2; 4.2.1–4.2.3, pp. 4-2–4-6; 6.1, pp. 6-1–6-3; Appendix A, p. A-1: mínimo privilegio, cuentas, parches, funciones necesarias, logs y hardening · versión: Julio 2008; se usan fundamentos y alcance, no guía operativa completa de 2026, algoritmos/passwords/protocolos históricos o obligaciones federales estadounidenses para España · comprobado: 2026-10-27

Partida: `1cf53983407bc6530bd77aa249b8efcba4ee63c38b83aa0e93de47853d95342a` · propuesta: `c9e11ddc9ce5a8c9654df62b7c043c01c38cc5b1d9f5e09404f51c0624ef050b`

## MAN-GSI-P17-125

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente formulación y alternativas ya diferenciadas; completar pipeline, objetos y alcance multiplataforma sin generalizar salidas externas.

### Antes

¿Qué es PowerShell?

- A. El intérprete de comandos clásico de Windows orientado a órdenes y scripts de texto por lotes.
- B. La aplicación de terminal que aloja pestañas y sesiones de distintas shells sin definir su lenguaje de automatización.
- C. La herramienta que inicia programas y scripts según horarios, eventos o condiciones configuradas previamente.
- D. Un entorno de shell y automatización orientado a objetos y administración. **(correcta)**

Explicación: PowerShell permite administrar y automatizar Windows y otros entornos.

### Propuesta

¿Qué es PowerShell?

- A. El intérprete de comandos clásico de Windows orientado a órdenes y scripts de texto por lotes.
- B. La aplicación de terminal que aloja pestañas y sesiones de distintas shells sin definir su lenguaje de automatización.
- C. La herramienta que inicia programas y scripts según horarios, eventos o condiciones configuradas previamente.
- D. Un entorno de shell y automatización orientado a objetos y administración. **(correcta)**

Explicación: PowerShell combina shell, lenguaje de scripting y capacidades de automatización. Sus cmdlets trabajan con objetos .NET y el pipeline puede pasar esos objetos a comandos que acepten la entrada correspondiente. También interactúa con programas externos, cuyas salidas no se convierten por ello en objetos estructurados de su dominio. PowerShell 7 es multiplataforma; no es simplemente la ventana del terminal, el intérprete cmd.exe o un programador de tareas.

- Error A: Describe el intérprete clásico cmd.exe y scripts por lotes. PowerShell dispone de su propio lenguaje y modelo de objetos.
- Error B: Describe una aplicación de terminal que aloja shells. El contenedor de la sesión no define el lenguaje y la semántica de PowerShell.
- Error C: Describe el Programador de tareas. Puede iniciar un script PowerShell, pero no es el entorno que interpreta ese script.

- [Microsoft: What is PowerShell?](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.5) · Introducción, Command-line Shell y Scripting language: shell, lenguaje, automatización y objetos .NET · versión: Rama documental PowerShell 7.5; actualización 12-08-2026; no se equipara toda instalación con Windows PowerShell 5.1 · comprobado: 2026-10-27
- [Microsoft: about_Pipelines](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_pipelines?view=powershell-7.5) · Long description, Using pipelines y How pipelines work: objetos y enlace a parámetros; ejemplo de salida de comandos nativos · versión: Rama documental PowerShell 7.5; no se promete que toda herramienta externa produzca objetos estructurados del dominio ni que todo parámetro acepte pipeline · comprobado: 2026-10-27

Partida: `9fee5cf17de3d6cbbc999053d521369f0482e4c8f6b5542f42cdd7896be4993d` · propuesta: `1a7a01d05f5f132bc3d8b347ba7cb5e2160961d87fc0c185b870f8164d17014a`

## MAN-GSI-P17-126

Decisión: pending_review · acción: revise.

Motivo: Conservar directorio e identidad y clave A; precisar AD DS para distinguir cuentas locales, DNS e identidad cloud.

### Antes

¿Qué es Active Directory en relación con Windows?

- A. Un servicio de directorio e identidad usado en entornos corporativos; no es el sistema operativo en sí. **(correcta)**
- B. La base local de cuentas y grupos que autentica usuarios de un equipo no unido a un dominio corporativo.
- C. El servicio que resuelve nombres de dominio en direcciones y publica registros necesarios para localizar recursos.
- D. El servicio de identidad en la nube utilizado para aplicaciones SaaS, dispositivos y acceso condicional.

Explicación: AD centraliza identidades, autenticación y políticas, pero es distinto del SO cliente/servidor.

### Propuesta

¿Qué es Active Directory Domain Services (AD DS) en un entorno Windows de dominio?

- A. Un directorio de dominios con identidades, autenticación y administración centralizada. **(correcta)**
- B. Una base local de cuentas y grupos para autenticar usuarios de un único equipo.
- C. Un servicio que resuelve nombres y publica registros para localizar recursos de red.
- D. Un servicio de identidad cloud para aplicaciones, dispositivos y acceso condicional.

Explicación: AD DS almacena objetos de directorio, como cuentas, grupos y equipos, y permite autenticación, acceso y administración basada en políticas en dominios. No es el sistema operativo Windows ni una base local aislada. DNS contribuye a localizar servicios, sin sustituir el directorio. Microsoft Entra ID es otra oferta de identidad con un modelo cloud distinto; integración o sincronización no hacen equivalentes ambos servicios.

- Error B: Describe cuentas locales de un equipo. No el directorio de dominio compartido y administrado mediante AD DS.
- Error C: Describe DNS. Sus registros ayudan a localizar recursos y servicios, pero no representan por sí mismos la gestión de objetos e identidades del directorio.
- Error D: Describe Microsoft Entra ID. Puede integrarse con AD DS, pero no es el servicio de dominio de Windows Server que se pregunta.

- [Microsoft: Active Directory Domain Services overview](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview) · Introducción y lista de componentes: objetos, directorio jerárquico, cuentas, autenticación, control y administración basada en políticas · versión: Actualización 11-03-2025; AD DS, no cualquier producto con marca Active Directory ni formato de almacenamiento de contraseñas · comprobado: 2026-10-27
- [Microsoft: Compare Active Directory to Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/compare) · Introducción y tabla: directorio de Windows Server frente a identidad cloud, administración, aplicaciones y dispositivos · versión: Actualización 08-03-2024; distinción conceptual, sin adoptar promesas comerciales de ahorro o mejor seguridad universal ni equivalencia con Entra Domain Services · comprobado: 2026-10-27

Partida: `ff5fb7d41c6b3f127ba02cc613f3bd466ae9b0f4e7223bed47585bf0152ed091` · propuesta: `b315472ff52b9e206b1295a96ffd1e502005baed8caa1ca37c4bd81619e4ddb3`

## MAN-GSI-P17-127

Decisión: pending_review · acción: revise.

Motivo: Conservar ACL/journaling de NTFS y clave B; sustituir falsas clasificaciones FAT/NFS/SMB por confusiones sobre funciones y garantías.

### Antes

¿Qué características se asocian a NTFS?

- A. FAT32, caracterizado por ACL detalladas, journaling transaccional y cifrado integrado por archivo en Windows.
- B. ACL, journaling y capacidades avanzadas de sistema de archivos. **(correcta)**
- C. NFS, un formato local de disco exclusivo de Windows que no proporciona acceso remoto a sistemas de archivos.
- D. SMB, un sistema de archivos grabado directamente en la partición que sustituye al protocolo de compartición en red.

Explicación: NTFS es el sistema de archivos corporativo habitual de Windows.

### Propuesta

¿Qué asociación de funciones es correcta respecto a NTFS?

- A. Autorización basada en el journal y recuperación de consistencia decidida por las ACL.
- B. Control de acceso mediante ACL y registro de transacciones para recuperar consistencia. **(correcta)**
- C. Persistencia de todo buffer de aplicación por el simple hecho de autorizar su escritura.
- D. Historial completo de versiones y borrados conservado indefinidamente en el journal.

Explicación: NTFS ofrece permisos detallados mediante ACL y un registro basado en transacciones que contribuye a recuperar consistencia del sistema de archivos tras un fallo. Autorización y recuperación son funciones distintas. Esa capacidad no garantiza persistir todo buffer de una aplicación, recuperar cualquier dato o conservar indefinidamente todas las versiones. Journaling no sustituye un backup ni equivale al antiguo servicio Transactional NTFS para aplicaciones.

- Error A: Invierte las funciones. Las ACL regulan acceso; el registro y sus protocolos ayudan a recuperar consistencia tras fallos.
- Error C: Un permiso autoriza una operación, pero no determina si datos que aún conserva la aplicación han llegado a almacenamiento persistente.
- Error D: El journal de recuperación no es por definición un repositorio ilimitado de versiones o borrados. Para protección histórica hacen falta otros mecanismos.

- [Microsoft: NTFS overview](https://learn.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview) · Increased reliability e Increased security: registro basado en transacciones, restauración de consistencia y permisos detallados mediante ACL · versión: Actualización 18-06-2025; no se usan tamaños máximos, garantías absolutas de conservación de datos, disponibilidad continua o recuperación de toda corrupción · comprobado: 2026-10-27

Partida: `bc89c03d9d237b4ff0e4e7dcfe0684df004211e0c1828708aebd591da13bdb21` · propuesta: `14f7d894c545a612aa61b13f3413e0d30f0f0179feabef04b96d9cfae1f5494a`

## MAN-GSI-P17-128

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente distinción ya bien construida y clave C; completar variabilidad del userland sin convertir GNU o un escritorio en requisito universal.

### Antes

¿Qué es Linux estrictamente?

- A. Una distribución completa y única que incluye siempre las mismas bibliotecas, escritorio, instalador y gestor de paquetes.
- B. El estándar POSIX que define interfaces de sistemas operativos y que todas las distribuciones implementan de forma idéntica.
- C. El kernel; las distribuciones añaden userland, gestor de paquetes y otras herramientas. **(correcta)**
- D. El conjunto de utilidades y bibliotecas del proyecto GNU, con independencia del kernel sobre el que se ejecuten.

Explicación: Linux es el kernel; Ubuntu, Debian, RHEL y otras son distribuciones.

### Propuesta

¿Qué es Linux estrictamente?

- A. Una distribución completa y única que incluye siempre las mismas bibliotecas, escritorio, instalador y gestor de paquetes.
- B. El estándar POSIX que define interfaces de sistemas operativos y que todas las distribuciones implementan de forma idéntica.
- C. El kernel; las distribuciones añaden userland, gestor de paquetes y otras herramientas. **(correcta)**
- D. El conjunto de utilidades y bibliotecas del proyecto GNU, con independencia del kernel sobre el que se ejecuten.

Explicación: En sentido estricto, Linux es el núcleo que gestiona recursos y ofrece interfaces para el resto del sistema. Una distribución integra ese núcleo con software de usuario, bibliotecas y herramientas seleccionadas, con sus decisiones de organización y mantenimiento. No es una distribución única ni el estándar POSIX. Tampoco coincide con las herramientas GNU: son componentes de otro proyecto y las combinaciones pueden variar entre distribuciones.

- Error A: Confunde el núcleo con una distribución completa e invariable. Las distribuciones pueden seleccionar componentes y entornos distintos.
- Error B: POSIX especifica interfaces y comportamientos. Linux es software que implementa funciones de núcleo, no el documento normativo.
- Error D: GNU aporta herramientas y bibliotecas utilizadas en muchos sistemas, pero no es el nombre del núcleo Linux ni todo userland debe ser idéntico.

- [Linux Kernel Organization: About Linux Kernel](https://www.kernel.org/linux.html) · What is Linux? y New to Linux?: origen tipo Unix, objetivos POSIX/SUS y kernel como componente de una distribución · versión: Página fechada 06-08-2024; solo distinción conceptual, sin adoptar recomendaciones históricas de CD-ROM, recuentos o estado de archivos de correo · comprobado: 2026-10-27
- [Debian: About Debian](https://www.debian.org/intro/about) · WHAT is Debian?: kernel en el núcleo del sistema, herramientas, paquetes y organización conjunta de componentes · versión: Página del proyecto consultada; ejemplo de integración, sin inferir soporte actual de puertos/kernel, números de paquetes o herramientas GNU obligatorias en toda distribución · comprobado: 2026-10-27

Partida: `1d357ed235176645392badc63ac73f24cbb1cb87a2ccf1958bf94609b3928826` · propuesta: `cfe747d468eb03b3dcef816e614ceab575109278289f94b4a01aace1222accdb`

## MAN-GSI-P17-129

Decisión: pending_review · acción: revise.

Motivo: Conservar integración y clave D; mantener alternativas próximas y precisar que instalador interactivo o escritorio no son requisitos universales.

### Antes

¿Qué es una distribución Linux?

- A. El núcleo que gestiona procesos, memoria, dispositivos y llamadas al sistema, sin incluir el resto del entorno de usuario.
- B. La herramienta que instala, actualiza y elimina paquetes resolviendo versiones y dependencias desde repositorios.
- C. Una imagen preparada para ejecutar una aplicación y sus dependencias dentro de un runtime de contenedores.
- D. Un sistema que integra kernel, herramientas, bibliotecas, paquetes, instalador y políticas de mantenimiento. **(correcta)**

Explicación: Las distribuciones empaquetan componentes y ciclo de vida.

### Propuesta

¿Qué es una distribución Linux?

- A. El núcleo que gestiona procesos, memoria, dispositivos y llamadas al sistema, sin incluir el resto del entorno de usuario.
- B. La herramienta que instala, actualiza y elimina paquetes resolviendo versiones y dependencias desde repositorios.
- C. Una imagen preparada para ejecutar una aplicación y sus dependencias dentro de un runtime de contenedores.
- D. Un sistema que integra núcleo, software de usuario y criterios de empaquetado y mantenimiento. **(correcta)**

Explicación: Una distribución integra el núcleo con un conjunto seleccionado de componentes de usuario y criterios de empaquetado y mantenimiento. Puede ofrecer distintos medios de instalación o despliegue, sin requerir por definición un instalador interactivo o escritorio. El gestor de paquetes es una herramienta dentro del sistema, no el sistema completo. Una imagen de aplicación en contenedor utiliza un kernel anfitrión en el modelo habitual y no define por sí sola una distribución.

- Error A: Describe el kernel como componente central. Una distribución incorpora además un entorno de usuario y decisiones de integración.
- Error B: Describe el gestor de paquetes. La herramienta administra software, pero no equivale al conjunto integrado de una distribución.
- Error C: Describe una imagen de contenedor de aplicación. Puede contener software de una distribución, sin constituir necesariamente el sistema completo definido.

- [Linux Kernel Organization: About Linux Kernel](https://www.kernel.org/linux.html) · What is Linux? y New to Linux?: origen tipo Unix, objetivos POSIX/SUS y kernel como componente de una distribución · versión: Página fechada 06-08-2024; solo distinción conceptual, sin adoptar recomendaciones históricas de CD-ROM, recuentos o estado de archivos de correo · comprobado: 2026-10-27
- [Debian: About Debian](https://www.debian.org/intro/about) · WHAT is Debian?: kernel en el núcleo del sistema, herramientas, paquetes y organización conjunta de componentes · versión: Página del proyecto consultada; ejemplo de integración, sin inferir soporte actual de puertos/kernel, números de paquetes o herramientas GNU obligatorias en toda distribución · comprobado: 2026-10-27

Partida: `91e98205dff9da37ce89057c5b72ab1487f45833820ad5f2b7f865aab4d0d705` · propuesta: `29287e76fafbbb12fddeae3aaeb8f2e5aabb36847fbcadc6f3973abc0429429f`

## MAN-GSI-P17-130

Decisión: pending_review · acción: revise.

Motivo: Conservar daemon y clave B; evitar que el gestor de servicios, que también puede ser un proceso, sea distractor ambiguo; comparar módulo, unidad e identidad.

### Antes

¿Qué es un daemon en Unix/Linux?

- A. Un módulo cargado dentro del kernel para ampliar soporte de hardware o funciones privilegiadas del sistema operativo.
- B. Un proceso de servicio que se ejecuta normalmente en segundo plano. **(correcta)**
- C. El gestor que inicia, detiene y supervisa unidades de servicio, pero no cada proceso de servicio ejecutado bajo su control.
- D. Una cuenta de superusuario necesaria para iniciar sesión y ejecutar cualquier tarea administrativa en primer plano.

Explicación: Daemon es funcionalmente comparable a muchos servicios de Windows, aunque la implementación difiere.

### Propuesta

¿Qué es un daemon en Unix/Linux?

- A. Un módulo que incorpora funciones al espacio privilegiado del núcleo.
- B. Un proceso de servicio que se ejecuta normalmente en segundo plano. **(correcta)**
- C. Un fichero declarativo con dependencias y opciones de arranque de un servicio.
- D. Una identidad de superusuario que autoriza operaciones de administración.

Explicación: Un daemon es un proceso que presta un servicio, habitualmente sin depender de una interacción de terminal. Puede supervisar funciones o atender a otros procesos. No requiere por definición ejecutarse como root ni realizar siempre double-fork: los servicios modernos bajo un supervisor pueden permanecer en primer plano respecto al gestor. La unidad de configuración y el proceso de servicio son entidades distintas, y no todo programa enviado al fondo es un daemon.

- Error A: Un módulo de núcleo ejecuta funciones dentro del kernel. El daemon es un proceso de servicio en el modelo de usuario descrito.
- Error C: Describe la definición declarativa de una unidad o servicio. El fichero organiza su lanzamiento, pero no es el proceso ejecutándose.
- Error D: Una cuenta determina identidad y permisos. Un daemon puede usar una identidad apropiada sin ser una cuenta ni requerir superusuario.

- [systemd: daemon(7)](https://www.freedesktop.org/software/systemd/man/latest/daemon.html) · Description, SysV Daemons y New-Style Daemons: proceso de servicio y diferencia entre daemonización clásica y supervisión moderna · versión: Cabecera systemd 262; no se prescribe double-fork o proceso root como requisito universal de daemon · comprobado: 2026-10-27
- [systemd(1): system and service manager](https://www.freedesktop.org/software/systemd/man/latest/systemd.html) · Description y Units: PID 1 de sistema, instancias de usuario, unidades y gestión de servicios/dependencias · versión: Cabecera systemd 262; no se presupone presente en toda distribución, unidad igual a proceso o todo servicio residente permanentemente · comprobado: 2026-10-27

Partida: `108a1806e4a8f970cabba28e5a10c96ef752da3278e92a6a14e4eaef7881b23b` · propuesta: `913fd796d4d3919d7719dec6ecebd4006a64433170fb5d7de4e502be9c2fea35`

## MAN-GSI-P17-131

Decisión: pending_review · acción: revise.

Motivo: Conservar gestor de sistema/servicios y clave A; comparar responsabilidades reales y matizar instancias y tipos de unidad.

### Antes

¿Qué papel tiene systemd en muchas distribuciones Linux?

- A. Gestionar unidades y servicios, arranque y otras funciones de sistema. **(correcta)**
- B. Ser el propio kernel Linux y gestionar directamente memoria virtual, interrupciones, procesos, dispositivos y llamadas al sistema.
- C. Sustituir el sistema de archivos mediante una base de datos de unidades que almacena por sí misma todo el contenido persistente.
- D. Actuar como compilador de C integrado en el arranque y reconstruir todos los servicios desde su código fuente cada vez que se inician.

Explicación: systemd actúa como init y gestor de servicios en muchas distribuciones.

### Propuesta

¿Qué papel tiene systemd en muchas distribuciones Linux?

- A. Gestionar unidades, dependencias de arranque y servicios del espacio de usuario. **(correcta)**
- B. Traducir direcciones virtuales y resolver interrupciones como núcleo del sistema.
- C. Instalar y actualizar paquetes de software a partir de índices de repositorios.
- D. Interpretar comandos interactivos y ejecutar el lenguaje de una shell de usuario.

Explicación: systemd es un gestor del sistema y de servicios. Como instancia de sistema y PID 1 participa en el arranque y mantiene servicios; también existen instancias de usuario. Sus unidades representan servicios, sockets, montajes y otras entidades con dependencias. No es el kernel, un gestor de paquetes o una shell. Muchas distribuciones lo emplean, pero no es obligatorio en toda distribución Linux ni cada unidad equivale a un proceso siempre residente.

- Error B: Describe funciones de núcleo y hardware. systemd actúa en el espacio de usuario sobre interfaces del kernel.
- Error C: Describe gestión de paquetes mediante herramientas como APT. Administrar servicios instalados no es distribuir e instalar sus paquetes.
- Error D: Describe una shell. Un servicio puede lanzar comandos, pero el gestor no sustituye el lenguaje del intérprete elegido.

- [systemd(1): system and service manager](https://www.freedesktop.org/software/systemd/man/latest/systemd.html) · Description y Units: PID 1 de sistema, instancias de usuario, unidades y gestión de servicios/dependencias · versión: Cabecera systemd 262; no se presupone presente en toda distribución, unidad igual a proceso o todo servicio residente permanentemente · comprobado: 2026-10-27
- [Debian Reference, Chapter 2: Debian package management](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html) · 2.1.1 Debian package management system; 2.1.5 Debian archive basics; 2.5.1–2.5.4 sobre metadatos, Release e índices · versión: Referencia en línea consultada, ejemplos trixie; solo paquetes, repositorios y metadatos, sin adoptar recomendación de versión, número de paquetes o política para otras distribuciones · comprobado: 2026-10-27

Partida: `2c5aed609b62c796df915634a06aaa97abebc848435282cca99914e610130158` · propuesta: `9cfb01d9577d48c32aaeab9ab0b1628fb82d5cb69ab6dbea81c1e4dce120bb6c`

## MAN-GSI-P17-132

Decisión: pending_review · acción: revise.

Motivo: Conservar procfs y clave B; comparar jerarquías reales y no presentar todo /proc como exclusivamente informativo o escribible sin permisos.

### Antes

¿Qué contiene /proc en Linux de forma conceptual?

- A. Archivos de usuario permanentes exclusivamente.
- B. Una interfaz de sistema de archivos virtual con información de procesos y kernel. **(correcta)**
- C. El firmware de la BIOS.
- D. Copias de seguridad externas.

Explicación: /proc expone información dinámica del kernel/procesos.

### Propuesta

¿Qué contiene /proc en Linux de forma conceptual?

- A. Configuración persistente de servicios y sistema, organizada de forma habitual bajo /etc.
- B. Información de procesos y kernel, con algunas interfaces de control, en un sistema virtual. **(correcta)**
- C. Objetos y atributos del modelo de dispositivos, expuestos principalmente mediante sysfs.
- D. Nodos especiales de dispositivos para acceder a sus interfaces, como en /dev.

Explicación: /proc es un sistema de archivos virtual que expone información de procesos y estructuras del kernel. Incluye directorios por PID y otras interfaces; ciertos parámetros bajo /proc/sys permiten control con permisos adecuados. No es un almacén general de documentos persistentes ni se reduce a solo lectura. /sys, /dev y /etc cumplen papeles relacionados pero diferentes; el acceso concreto depende de permisos, opciones y entorno.

- Error A: Describe la finalidad habitual de /etc. /proc representa información e interfaces del sistema en ejecución, no configuración persistente general.
- Error C: Describe sysfs y el modelo de objetos o dispositivos que se expone usualmente bajo /sys.
- Error D: Describe nodos de dispositivo habituales en /dev. No la jerarquía de información de procesos y kernel de procfs.

- [Linux Kernel: The /proc Filesystem](https://docs.kernel.org/filesystems/proc.html) · Chapter 1, introducción; 1.1 Process-Specific Subdirectories; introducción a /proc/sys: interfaz a estructuras internas e información/control · versión: Documentación del kernel consultada; solo conceptos, sin adoptar restricciones de permisos o entradas históricas como invariantes actuales · comprobado: 2026-10-27
- [Linux Kernel: sysfs - The filesystem for exporting kernel objects](https://docs.kernel.org/filesystems/sysfs.html) · What it is; Using sysfs; Directory Creation y Attributes: objetos, jerarquía, atributos y acceso desde usuario · versión: Revisión indicada 16-08-2011, original 10-01-2003; documento mantenido en kernel docs, sin usar firmas o detalles internos como API vigente · comprobado: 2026-10-27

Partida: `3bc9523258bca8d92a4e1710eaa1ac581660bda7a0351c72e44155384ba3c88a` · propuesta: `fd54615bff2440ed13d4df255390af8e1eae93721295f17a566cf02e5d419b71`

## MAN-GSI-P17-133

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas ya próximas y clave C; precisar objetos, atributos y permisos sin prescribir APIs internas.

### Antes

¿Qué contiene /sys en Linux de forma conceptual?

- A. Un sistema virtual que expone información de procesos, memoria y parámetros del kernel mediante archivos dinámicos.
- B. El directorio que contiene nodos especiales utilizados para representar dispositivos y acceder a sus controladores.
- C. Una interfaz de sistema de archivos virtual relacionada con dispositivos, kernel y modelo del sistema. **(correcta)**
- D. La jerarquía de ficheros de configuración del sistema y de los servicios instalados en el equipo.

Explicación: /sys expone objetos del kernel y dispositivos.

### Propuesta

¿Qué contiene /sys en Linux de forma conceptual?

- A. Un sistema virtual que expone información de procesos, memoria y parámetros del kernel mediante archivos dinámicos.
- B. El directorio que contiene nodos especiales utilizados para representar dispositivos y acceder a sus controladores.
- C. Una interfaz de sistema de archivos virtual relacionada con dispositivos, kernel y modelo del sistema. **(correcta)**
- D. La jerarquía de ficheros de configuración del sistema y de los servicios instalados en el equipo.

Explicación: sysfs, montado habitualmente en /sys, exporta objetos y atributos del kernel y relaciones entre ellos, especialmente el modelo de dispositivos y subsistemas. Sus archivos proporcionan interfaces de lectura y, en ciertos casos, escritura según permisos y semántica del atributo. No es el directorio de nodos especiales /dev ni la configuración persistente de /etc. Tampoco deben confundirse los datos de procesos de /proc con la organización por objetos de sysfs.

- Error A: Describe procfs como fuente habitual de información de procesos y parámetros del kernel. No el modelo de objetos y atributos característico de sysfs.
- Error B: Describe /dev y sus nodos especiales. Un atributo de dispositivo en sysfs no es por ello un nodo de dispositivo.
- Error D: Describe /etc como jerarquía habitual de configuración persistente. Los atributos de sysfs reflejan interfaces del kernel en ejecución.

- [Linux Kernel: sysfs - The filesystem for exporting kernel objects](https://docs.kernel.org/filesystems/sysfs.html) · What it is; Using sysfs; Directory Creation y Attributes: objetos, jerarquía, atributos y acceso desde usuario · versión: Revisión indicada 16-08-2011, original 10-01-2003; documento mantenido en kernel docs, sin usar firmas o detalles internos como API vigente · comprobado: 2026-10-27
- [Linux Kernel: The /proc Filesystem](https://docs.kernel.org/filesystems/proc.html) · Chapter 1, introducción; 1.1 Process-Specific Subdirectories; introducción a /proc/sys: interfaz a estructuras internas e información/control · versión: Documentación del kernel consultada; solo conceptos, sin adoptar restricciones de permisos o entradas históricas como invariantes actuales · comprobado: 2026-10-27

Partida: `22835fedc3a35487e74faeb1f38d746638ea24e4f9969d0e274a63aef62e5fbe` · propuesta: `555eaae856efb7e6f346fab6fec8c00af4660b2f4fc5cb40aa841a34f9434a66`

## MAN-GSI-P17-134

Decisión: pending_review · acción: revise.

Motivo: Conservar uso controlado de sudo y clave D; microcaso de autorización limitada, con autenticación condicional y usuario de destino no necesariamente root.

### Antes

¿Para qué se usa sudo?

- A. Para desactivar permisos del sistema.
- B. Para reemplazar el kernel.
- C. Para convertir un usuario en root permanentemente sin control.
- D. Para ejecutar acciones con privilegios elevados conforme a política y autenticación. **(correcta)**

Explicación: sudo facilita elevación controlada y auditable, preferible a compartir credenciales root.

### Propuesta

Un técnico necesita ejecutar ciertas tareas administrativas desde su cuenta habitual. ¿Qué uso de sudo responde a esa necesidad sin convertir su cuenta en superusuario permanente?

- A. Convertir de forma permanente la cuenta del técnico en superusuario.
- B. Eliminar las comprobaciones de permisos de los ficheros implicados.
- C. Compartir la contraseña de la cuenta administrativa entre técnicos.
- D. Autorizar comandos concretos como la identidad adecuada mediante una política de sudo. **(correcta)**

Explicación: sudo permite a un usuario autorizado ejecutar comandos como superusuario u otra identidad conforme a una política. El caso pide autorizar operaciones concretas sin transformar la cuenta diaria en root. La autenticación y el registro dependen de política, caché y plugins; no se exige introducir una contraseña en cada invocación ni el destino tiene que ser siempre root. Un permiso demasiado amplio puede seguir permitiendo acciones no deseadas.

- Error A: La necesidad temporal y acotada no requiere convertir la identidad diaria en superusuario permanente. Eso ampliaría el alcance concedido.
- Error B: sudo consulta una política y cambia el contexto de ejecución autorizado; no necesita eliminar controles de acceso del sistema.
- Error C: Compartir la credencial administrativa dificulta atribución y no expresa autorización individual de comandos mediante una política.

- [Proyecto Sudo: sudo(8)](https://man7.org/linux/man-pages/man8/sudo.8.html) · NAME y DESCRIPTION: ejecución como superusuario u otro usuario conforme a política, autenticación condicional y plugins de auditoría · versión: Manual primario Sudo 1.9.18, fecha de página 07-06-2025; copia upstream identificada por colofón. sudo.ws bloqueó rastreo, se leyó el espejo man7; sin alterar sudoers ni pedir credenciales · comprobado: 2026-10-27
- [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) · 2.4, p. 2-4; 4.1, pp. 4-1–4-2; 4.2.1–4.2.3, pp. 4-2–4-6; 6.1, pp. 6-1–6-3; Appendix A, p. A-1: mínimo privilegio, cuentas, parches, funciones necesarias, logs y hardening · versión: Julio 2008; se usan fundamentos y alcance, no guía operativa completa de 2026, algoritmos/passwords/protocolos históricos o obligaciones federales estadounidenses para España · comprobado: 2026-10-27

Partida: `c8e15d44e8928a0d5a38b0415cea96c1d582889f126c7b966f357e13affb9d3a` · propuesta: `06cb6fe463e8ab4156f8e9456f8b20184d8c2bb9dd9c16a8d121a94bd4cd3627`

## MAN-GSI-P17-135

Decisión: pending_review · acción: revise.

Motivo: Conservar práctica transversal y clave B; comparar estrategias administrativas plausibles sin recetas destructivas o garantías de seguridad absoluta.

### Antes

¿Qué buena práctica aplica tanto a Windows como a Linux?

- A. Usar siempre una cuenta administradora para tareas diarias.
- B. Separar cuentas administrativas, aplicar mínimo privilegio, parchear y registrar eventos. **(correcta)**
- C. Desactivar logs para ahorrar espacio.
- D. Compartir contraseñas entre técnicos.

Explicación: Hardening básico es transversal a plataformas.

### Propuesta

¿Qué buena práctica aplica tanto a Windows como a Linux?

- A. Usar cuentas individuales con privilegios globales y revisar accesos solo después de incidentes.
- B. Separar administración, limitar permisos, mantener parches y revisar registros. **(correcta)**
- C. Centralizar la administración en una cuenta técnica compartida y atribuir acciones al equipo.
- D. Mantener servicios por defecto y basar la protección principalmente en el perímetro de red.

Explicación: Separar el uso administrativo del cotidiano, limitar permisos y mantener parches y registros son principios aplicables a ambas plataformas. Su implementación depende de funciones, riesgos y herramientas concretas. Los logs necesitan selección, protección, conservación y revisión; los parches requieren un proceso de despliegue adecuado. Ningún conjunto de buenas prácticas garantiza inmunidad y la protección de red no sustituye el control de identidades y configuración del equipo.

- Error A: Identidades individuales no compensan privilegios globales innecesarios. Revisar solo después de incidentes deja exposición sin seguimiento oportuno.
- Error C: Una cuenta compartida reduce atribución individual y dificulta gestionar autorizaciones por persona. No es el criterio de mínimo privilegio y separación planteado.
- Error D: El perímetro es una capa, pero no justifica conservar funciones innecesarias ni omitir controles del propio sistema.

- [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) · 2.4, p. 2-4; 4.1, pp. 4-1–4-2; 4.2.1–4.2.3, pp. 4-2–4-6; 6.1, pp. 6-1–6-3; Appendix A, p. A-1: mínimo privilegio, cuentas, parches, funciones necesarias, logs y hardening · versión: Julio 2008; se usan fundamentos y alcance, no guía operativa completa de 2026, algoritmos/passwords/protocolos históricos o obligaciones federales estadounidenses para España · comprobado: 2026-10-27
- [CIS Control 4: Secure Configuration of Enterprise Assets and Software](https://www.cisecurity.org/controls/secure-configuration-of-enterprise-assets-and-software) · Overview: establecer y mantener configuración segura de activos, sistemas operativos y aplicaciones · versión: Página enlazada a CIS Controls v8.1; solo overview público leído, sin atribuir comprobación del PDF completo o todos sus salvaguardas · comprobado: 2026-10-27

Partida: `84f3618ec525ae488a1e21283d1d7324ab0f5684cf1ff3d51b219db17a7fe758` · propuesta: `a1cd0d08a410d91e2af16e7c9f7f1edbda8efb9d3ef7533707d4d692e0b09ce9`

## MAN-GSI-P17-136

Decisión: pending_review · acción: revise.

Motivo: Conservar reducción de superficie y clave D; microcaso que diferencia prevención por configuración, evaluación, observación y recuperación.

### Antes

¿Qué es hardening?

- A. Aumentar el número de aplicaciones instaladas sin revisión.
- B. Desactivar autenticación.
- C. Eliminar actualizaciones.
- D. Reducir superficie de ataque mediante configuración segura, servicios mínimos, parches y controles. **(correcta)**

Explicación: Hardening busca disminuir exposición y privilegios.

### Propuesta

Un equipo retira servicios innecesarios, ajusta permisos y mantiene parches según su procedimiento. ¿Qué concepto describe el objetivo conjunto de esas medidas?

- A. Recuperación: restaurar servicio y datos después de una interrupción.
- B. Evaluación: detectar y priorizar vulnerabilidades mediante comprobaciones.
- C. Monitorización: observar eventos y métricas para identificar incidencias.
- D. Hardening: reducir exposición mediante configuración y funciones necesarias. **(correcta)**

Explicación: Hardening es reducir debilidades y superficie de ataque mediante configuración adecuada del SO y aplicaciones. Incluye retirar o desactivar funciones innecesarias, limitar accesos y mantener controles y parches pertinentes. No significa eliminar servicios necesarios sin análisis ni realizar una acción única que garantice seguridad permanente. Evaluar, monitorizar y recuperar son actividades complementarias con otros objetivos inmediatos.

- Error A: Restaurar capacidad después de una interrupción es recuperación. El caso describe reducir exposición antes de que se produzca un incidente.
- Error B: Detectar vulnerabilidades informa decisiones, pero no equivale a aplicar la configuración y reducción de funciones descritas.
- Error C: Observar estado y eventos aporta detección. Las medidas del caso cambian configuración y exposición, no solo la observan.

- [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) · 2.4, p. 2-4; 4.1, pp. 4-1–4-2; 4.2.1–4.2.3, pp. 4-2–4-6; 6.1, pp. 6-1–6-3; Appendix A, p. A-1: mínimo privilegio, cuentas, parches, funciones necesarias, logs y hardening · versión: Julio 2008; se usan fundamentos y alcance, no guía operativa completa de 2026, algoritmos/passwords/protocolos históricos o obligaciones federales estadounidenses para España · comprobado: 2026-10-27
- [CIS Control 4: Secure Configuration of Enterprise Assets and Software](https://www.cisecurity.org/controls/secure-configuration-of-enterprise-assets-and-software) · Overview: establecer y mantener configuración segura de activos, sistemas operativos y aplicaciones · versión: Página enlazada a CIS Controls v8.1; solo overview público leído, sin atribuir comprobación del PDF completo o todos sus salvaguardas · comprobado: 2026-10-27

Partida: `3a604ecaa0869f33da478181a988a3e2e63c916baa877179e849df93b07ac829` · propuesta: `740642d17059b7290079fb8175ed2c879897a091d7459e51e7ab1bfa1419d247`

## MAN-GSI-P17-137

Decisión: pending_review · acción: revise.

Motivo: Conservar paquete/repositorio y clave C; comparar artefacto, índice, gestor y firma sin exigir binarios o fuentes exclusivos.

### Antes

¿Qué diferencia hay entre paquete y repositorio de paquetes?

- A. Son términos equivalentes para el mismo archivo instalable y ambos incluyen necesariamente el catálogo completo de versiones disponibles.
- B. El repositorio solo puede almacenar código fuente y no admite binarios, metadatos, firmas ni índices para resolver dependencias.
- C. El paquete contiene software/metadatos; el repositorio organiza y distribuye paquetes y actualizaciones. **(correcta)**
- D. Un paquete contiene siempre un kernel completo y reemplaza el sistema operativo antes de instalar cualquier aplicación o biblioteca.

Explicación: Los gestores de paquetes resuelven instalación y dependencias a partir de repositorios.

### Propuesta

¿Qué diferencia hay entre paquete y repositorio de paquetes?

- A. El paquete es el catálogo de versiones y el repositorio el archivo que se instala.
- B. El paquete es un proceso del gestor y el repositorio su historial de operaciones.
- C. El paquete reúne software y metadatos; el repositorio organiza colecciones e índices. **(correcta)**
- D. El paquete es la firma del índice y el repositorio el gestor que instala los archivos.

Explicación: Un paquete agrupa software y metadatos para su gestión; puede ser binario o de fuentes según formato y finalidad. Un repositorio organiza y ofrece paquetes e índices que el gestor consulta para localizar versiones y dependencias. El repositorio puede ser remoto o local. No es el proceso del gestor ni únicamente una firma, y organizar paquetes no significa que cualquier mezcla de orígenes sea compatible o confiable.

- Error A: Invierte los papeles: catálogo e índices corresponden al repositorio; el artefacto distribuido se identifica como paquete.
- Error B: Paquete es una unidad de software y metadatos, no el proceso gestor. El repositorio distribuye contenido, no solo historial local de operaciones.
- Error D: Firmas ayudan a verificar procedencia o integridad, pero no son el paquete completo. Repositorio y gestor que instala son entidades distintas.

- [Debian Reference, Chapter 2: Debian package management](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html) · 2.1.1 Debian package management system; 2.1.5 Debian archive basics; 2.5.1–2.5.4 sobre metadatos, Release e índices · versión: Referencia en línea consultada, ejemplos trixie; solo paquetes, repositorios y metadatos, sin adoptar recomendación de versión, número de paquetes o política para otras distribuciones · comprobado: 2026-10-27

Partida: `8e2ecf2a04fcd4ad7cbb58729b6e345ee1323331f9ada0d15bbc63b628569f18` · propuesta: `8dbfbb4303b4efe557521a11a4faeeb5b39825e147c73a8150cfe53d0a785c24`

## MAN-GSI-P17-138

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción conceptual y clave A; separar familia, núcleo, especificación y certificación sin afirmar listados actuales ni imposibilidad de certificar productos Linux.

### Antes

¿Qué diferencia conceptual hay entre Unix y Linux?

- A. Unix es una familia/tradición y conjunto de sistemas/especificaciones; Linux es un kernel tipo Unix usado en múltiples distribuciones. **(correcta)**
- B. Linux es una implementación certificada de la marca UNIX en todas sus distribuciones y mantiene una única especificación de producto.
- C. Unix es el kernel abierto que utilizan sin modificaciones todas las distribuciones Linux disponibles.
- D. Unix y Linux carecen de relación conceptual: uno describe hardware y el otro un formato de aplicaciones.

Explicación: Linux sigue principios Unix, aunque no es simplemente “Unix comercial”.

### Propuesta

¿Qué diferencia conceptual hay entre Unix y Linux?

- A. Unix designa una tradición y sistemas/especificaciones; Linux es un núcleo de tipo Unix. **(correcta)**
- B. Linux es una certificación UNIX que impone idéntico entorno en todas sus distribuciones.
- C. Unix es el mismo núcleo de Linux, distribuido con otro nombre según el proveedor.
- D. Linux sustituye las interfaces de Unix por un estándar sin relación conceptual con ellas.

Explicación: Unix tiene un sentido histórico de familia y tradición de sistemas, y UNIX identifica también una marca asociada a especificaciones y certificación de productos concretos. Linux es un kernel desarrollado como sistema de tipo Unix y usado en diversas distribuciones. Parecido de interfaces o aspiración de compatibilidad POSIX/SUS no acredita por sí solo certificación, ni hace idéntico el software. No se afirma que cualquier distribución esté certificada o que ninguna pueda estarlo.

- Error B: Linux nombra software de núcleo, no una certificación. La conformidad y certificación se verifican para productos y versiones, no se atribuyen automáticamente a todas las distribuciones.
- Error C: Comparten influencias y conceptos, pero Unix no es simplemente otro nombre comercial del mismo núcleo Linux.
- Error D: Linux mantiene una relación de diseño e interfaces de tipo Unix. Negar toda relación confunde tradición técnica con identidad de implementación.

- [Linux Kernel Organization: About Linux Kernel](https://www.kernel.org/linux.html) · What is Linux? y New to Linux?: origen tipo Unix, objetivos POSIX/SUS y kernel como componente de una distribución · versión: Página fechada 06-08-2024; solo distinción conceptual, sin adoptar recomendaciones históricas de CD-ROM, recuentos o estado de archivos de correo · comprobado: 2026-10-27
- [The Open Group: The UNIX Brand and Certification](https://www.unix.org/the_brand.html) · The Three Pillars of Certification y Evolution of the Brand: especificaciones, productos y verificación, con versión de especificación · versión: Página primaria de The Open Group; no se afirma qué productos están actualmente certificados ni garantía comercial universal; opengroup.org/certifications/unix devolvió 403 y se leyó unix.org · comprobado: 2026-10-27

Partida: `592237e847f9a38bceaf0478db9f5371c51ab9a41d9bc64335f8aabc225c0fb1` · propuesta: `334e31b28f0572a4f7887965a301ecc97d191e5eb111bd487b4104dab3a92fab`
