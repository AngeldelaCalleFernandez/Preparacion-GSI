# GSI-EDITORIAL-022 — revisión propuesta

Preparado: 2026-10-27. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `bd9206bdd1057b8968b6e21830e10ecb84a0ce258cee19693726ab8c86596475`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P17-016

Decisión: pending_review · acción: revise.

Motivo: Conservar anchura y direccionamiento, clave B; acotar al ejemplo x86/x64 y distinguir límites efectivos, tipos y rendimiento.

### Antes

¿Qué diferencia conceptual existe entre arquitectura de 32 y 64 bits?

- A. La arquitectura de 64 bits obliga a ejecutar las aplicaciones en cloud porque ningún equipo local puede direccionar su espacio de memoria.
- B. Entre otros aspectos, cambia el tamaño natural de registros/direcciones y la capacidad de direccionamiento de memoria. **(correcta)**
- C. Un procesador de 32 bits no puede ejecutar ningún sistema operativo ni utilizar memoria virtual, protección o multitarea preventiva.
- D. La arquitectura de 64 bits elimina todos los niveles de caché al poder direccionar directamente una cantidad mayor de memoria principal.

Explicación: El ancho de palabra/direcciones afecta capacidad y ABI, no determina por sí solo cloud ni SO.

### Propuesta

Al comparar x86 de 32 bits con su extensión x64, ¿qué diferencia arquitectónica es correcta?

- A. El paso a 64 bits duplica por sí mismo la velocidad de cualquier programa.
- B. Se amplían registros y capacidad de direccionamiento; los límites efectivos dependen del diseño. **(correcta)**
- C. La etiqueta de 64 bits fija también en 64 bits el tamaño de todo dato del programa.
- D. El cambio afecta al bus externo, conservando registros y direcciones de 32 bits.

Explicación: En la extensión x86 a x64 se amplían registros generales y capacidades de direccionamiento, con efectos en ABI y punteros. La etiqueta de 64 bits no significa usar los 64 bits para todas las direcciones físicas o virtuales, ni que todo entero mida 64 bits. El hardware, el modo de ejecución y el SO imponen límites efectivos; tampoco garantizan duplicar el rendimiento.

- Error A: El rendimiento depende de carga, código, memoria y plataforma. La anchura de registros no acredita una aceleración universal de dos veces.
- Error C: La ABI distingue tipos, registros y punteros. Ampliar el modelo no transforma cada dato, por ejemplo un byte, en un objeto de 64 bits.
- Error D: x64 amplía registros generales y capacidad de direccionamiento, no solo una conexión externa que dejase ambos elementos sin cambios.

- [Microsoft: x64 architecture](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/x64-architecture) · Introducción, Registers y Addressing modes: extensión x86, registros y direccionamiento · versión: Página consultada; ejemplo x86/x64, sin generalizar anchos efectivos o ABI a toda arquitectura · comprobado: 2026-10-27
- [Microsoft: Virtual Address Space (Programming Guide for 64-bit Windows)](https://learn.microsoft.com/en-us/windows/win32/winprog64/virtual-address-space) · Párrafos iniciales: espacio virtual, punteros de 64 bits y limitación opcional de asignaciones · versión: Actualización 10-12-2020; ejemplo Windows, sin fijar límites actuales de RAM física · comprobado: 2026-10-27

Partida: `a8ca1dd986d2ab4700111ad53dca963c4ed4dcedc5f22ec0ac69df0effe53dfd` · propuesta: `eef4cc057193837ecb7713fe067b940269ed12f6924853003742f0d59d23dcc5`

## MAN-GSI-P17-018

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso NUMA y clave C; sustituir distractores ajenos por caché, paginación y acceso uniforme.

### Antes

En un servidor con varios sockets, ¿qué problema puede aparecer si una tarea accede constantemente a memoria remota en una topología NUMA?

- A. Pérdida automática de la licencia del sistema operativo.
- B. Conversión del sistema en una arquitectura SISD.
- C. Mayor latencia y menor rendimiento por mala localidad de memoria. **(correcta)**
- D. Eliminación de la caché de CPU.

Explicación: En NUMA la localidad importa: memoria local suele ser más rápida que memoria asociada a otro nodo NUMA.

### Propuesta

En un servidor con varios sockets, ¿qué problema puede aparecer si una tarea accede constantemente a memoria remota en una topología NUMA?

- A. Disminución de latencia al convertirse la memoria remota en una caché del procesador.
- B. Fallo de página a disco en cada acceso, aunque los datos residan en RAM remota.
- C. Mayor latencia y posible pérdida de rendimiento por mala localidad de memoria. **(correcta)**
- D. Latencia uniforme, pues todas las regiones de RAM están a la misma distancia.

Explicación: En NUMA el coste de acceso depende de la relación entre CPU y nodo de memoria. Acceder repetidamente a RAM de otro nodo puede aumentar latencia y tráfico de interconexión frente a memoria local. No implica por sí mismo un fallo de página a disco. La magnitud depende de la topología y carga; conviene medir localidad y colocación, sin imponer afinidad fija como solución universal.

- Error A: La memoria de otro nodo sigue siendo RAM, no se convierte por estar remota en caché local ni obtiene automáticamente menor latencia.
- Error B: Distancia NUMA y paginación a disco son fenómenos distintos. El caso plantea datos residentes en RAM, accesibles por la interconexión.
- Error D: La no uniformidad del acceso es precisamente la característica de NUMA. Coherencia de caché no equivale a igual distancia o latencia.

- [Microsoft: NUMA Architecture](https://learn.microsoft.com/en-us/windows/win32/procthread/numa-support) · Introducción, primeros cuatro párrafos: nodos, memoria próxima/remota y localidad de planificación/asignación · versión: Solo fundamento de localidad; no se prescribe afinidad fija ni configuración de grupos o registro · comprobado: 2026-10-27

Partida: `3660bb0043b5faaaad5cdd37cf613c09bc5ea19d4131e561b5393ee7e0f4ff34` · propuesta: `1c47b40ff66bbeee38c51584dd2f96348848c98b05d9b744b954076a2081f497`

## MAN-GSI-P17-046

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación HA/tolerancia y clave B; hacer explícitos alcance y solapamiento, sin una separación absoluta de etiquetas.

### Antes

¿Qué diferencia conceptual hay entre alta disponibilidad y tolerancia a fallos?

- A. Son siempre exactamente lo mismo.
- B. La tolerancia a fallos busca seguir funcionando pese al fallo; HA puede aceptar una conmutación o interrupción mínima. **(correcta)**
- C. HA solo se aplica a desarrollo y tolerancia a fallos a redes.
- D. Tolerancia a fallos exige una sola copia de cada componente.

Explicación: La tolerancia a fallos suele implicar continuidad más inmediata que un esquema de failover tradicional.

### Propuesta

Para un conjunto definido de fallos, ¿qué comparación describe mejor alta disponibilidad (HA) y tolerancia a fallos?

- A. HA y tolerancia a fallos son categorías incompatibles que no pueden coexistir.
- B. La tolerancia busca continuidad ante fallos previstos; HA puede admitir una breve recuperación. **(correcta)**
- C. La tolerancia se acredita con copias históricas, sin capacidad operativa alternativa.
- D. HA se define por duplicar equipos, sin considerar interrupciones del servicio.

Explicación: La tolerancia a fallos persigue mantener la operación ante un conjunto definido de fallos, con la continuidad especificada. Alta disponibilidad busca reducir indisponibilidad y puede incluir conmutación o recuperación con una interrupción breve. Son objetivos y técnicas relacionados, con terminología y garantías dependientes del contexto; no categorías excluyentes ni garantía ante cualquier fallo. La redundancia debe funcionar a nivel de servicio.

- Error A: Una solución puede combinar objetivos de disponibilidad y técnicas tolerantes a fallos. No hay una incompatibilidad técnica entre ambos.
- Error C: Las copias permiten recuperar estados históricos, pero no acreditan por sí mismas seguir prestando el servicio durante un fallo.
- Error D: Duplicar equipos es un medio posible. La disponibilidad se evalúa sobre el servicio y su indisponibilidad, no por contar componentes.

- [AWS: Fault tolerance and fault isolation](https://docs.aws.amazon.com/whitepapers/latest/availability-and-beyond-improving-resilience/fault-tolerance-and-fault-isolation.html) · Primeros párrafos de Fault tolerance and fault isolation; Static stability: continuidad, capacidad redundante y alcance del fallo · versión: Whitepaper latest consultado; no se adopta una separación terminológica universal HA/FT · comprobado: 2026-10-27
- [Microsoft Learn: Business continuity, high availability, and disaster recovery](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery) · High availability, Fault tolerance, Scalability and elasticity; Disaster recovery plans, Backups y Testing and drills: objetivos, reservas de capacidad, recuperación y pruebas · versión: Actualización 01-06-2026; clasificación HA/DR según riesgos y carga, sin umbral universal de disponibilidad; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `f5594df0a3b3fb697fcc41d3d72a283f93189b43dfbd9d07a0eba5d13f856ec9` · propuesta: `0669b17ccd5b7e338268126a51ed44c40a4585a7654d270904a0f37790df309d`

## MAN-GSI-P17-050

Decisión: pending_review · acción: revise.

Motivo: Conservar tipo 1 y clave D; comparar capas y matizar partición de gestión, sin confundir interfaz Windows con tipo 2.

### Antes

¿Qué es un hipervisor de tipo 1?

- A. Una aplicación que siempre necesita un SO anfitrión de escritorio.
- B. Un contenedor OCI.
- C. Un controlador de dominio.
- D. Un hipervisor que se ejecuta directamente sobre el hardware o con una capa mínima especializada. **(correcta)**

Explicación: Tipo 1 se asocia a bare metal; tipo 2 se ejecuta sobre un SO host.

### Propuesta

¿Qué caracteriza a un hipervisor de tipo 1 en la clasificación bare metal/alojado?

- A. Un hipervisor alojado como aplicación sobre un sistema operativo anfitrión generalista.
- B. Un entorno de procesos aislados que comparte el núcleo del sistema anfitrión.
- C. Un programa que emula una CPU para ejecutar una aplicación sin virtualizar un SO.
- D. Una capa de virtualización que controla el hardware bajo los sistemas operativos invitados. **(correcta)**

Explicación: El tipo 1 o bare metal sitúa el hipervisor sobre el hardware, bajo los sistemas operativos invitados. Puede apoyarse en una partición o entorno de gestión con controladores, como muestra Hyper-V; su existencia no lo convierte por sí sola en tipo 2. La clasificación describe la posición de la capa, no que toda gestión y E/S deban residir dentro de un único componente mínimo.

- Error A: Describe el esquema alojado tipo 2. El hipervisor depende de un SO anfitrión generalista bajo esa capa.
- Error B: Describe aislamiento mediante contenedores de procesos. Compartir el núcleo no es la definición de hipervisor bare metal.
- Error C: La emulación para una aplicación no caracteriza la ubicación de un hipervisor que proporciona hardware virtual a sistemas invitados.

- [Oracle VirtualBox User Guide: About Oracle VirtualBox](https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/Introduction.html) · Oracle VirtualBox Components y Features, Portability y Virtual Hardware: host, guest OS, VM y hosted/type 2 frente a bare metal/type 1 · versión: Guía rama 7.2 consultada; fundamentos, no recomendación de instalación ni compatibilidades o límites operativos; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft: Hyper-V Architecture](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/architecture) · Introducción; Root and child partitions; Glossary, Hypervisor: capa sobre hardware y partición de gestión · versión: Actualización 21-01-2026; URL final tras redirección; no se equipara partición raíz con hipervisor alojado tipo 2 · comprobado: 2026-10-27

Partida: `bb0fbcd46d1ad8ea35891a8e25ea10476171072f9cabe67708d9082b86c8f766` · propuesta: `7f4220b3bf37c566739a3d48c5fd838a8450c2845cc599db9bfd0f5621afdeb1`

## MAN-GSI-P17-057

Decisión: pending_review · acción: revise.

Motivo: Conservar balanceo y clave D; comparar escalado, replicación y observabilidad, sin distractores ajenos.

### Antes

¿Qué función tiene un balanceador de carga?

- A. Hacer copias de seguridad del código fuente.
- B. Sustituir el sistema operativo invitado.
- C. Convertir automáticamente una app en microservicios.
- D. Distribuir peticiones o conexiones entre varias instancias según una política. **(correcta)**

Explicación: El balanceo ayuda a rendimiento y disponibilidad, pero no resuelve por sí solo todos los SPOF.

### Propuesta

¿Qué función tiene un balanceador de carga?

- A. Aumentar o reducir el número de instancias según la demanda medida.
- B. Replicar los cambios de datos entre las instancias del servicio.
- C. Recoger métricas del servicio y notificar si superan umbrales.
- D. Distribuir peticiones o conexiones entre destinos según una política. **(correcta)**

Explicación: El balanceador decide a qué destino enviar tráfico según la política y capacidades configuradas. Los controles de salud pueden ayudar a evitar destinos no disponibles. Crear instancias corresponde a escalado y replicar estado a otros mecanismos. Balancear no asegura por sí mismo consistencia, capacidad suficiente o eliminación de todos los puntos únicos de fallo; también deben revisarse sus dependencias y diseño.

- Error A: Describe escalado de capacidad. Un balanceador puede integrarse con él, pero distribuir tráfico y crear o retirar instancias son funciones diferentes.
- Error B: La replicación mantiene copias o estado de datos. El reparto de peticiones no sincroniza automáticamente la información entre destinos.
- Error C: Monitorizar y alertar aporta observación. Sin seleccionar un destino para el tráfico no realiza la función de balanceo.

- [AWS: What is Elastic Load Balancing?](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html) · Introducción, Load balancer benefits y Related services: reparto de tráfico, health checks y distinción de Auto Scaling · versión: Guía latest; ejemplo ELB, sin universalizar políticas, garantías o comportamiento cuando todos los destinos fallan · comprobado: 2026-10-27

Partida: `51891fdcf8ec885d8daf0169dd3e4d0c1ca90db082b9d2f867bf758965e73a3e` · propuesta: `695ab6b508fe63387800c22fc25e058bcda3c0d89af615d0b3ead4eb031b02c7`

## MAN-GSI-P17-058

Decisión: pending_review · acción: revise.

Motivo: Conservar estrategia fiable de failover y clave A; contextualizar servicio con estado y distinguir requisitos completos de medios parciales.

### Antes

¿Qué debe acompañar a una estrategia de failover para que sea confiable?

- A. Detección de fallo, estado replicado o recuperable, pruebas y procedimiento de retorno/operación. **(correcta)**
- B. Disponer solo de un diagrama del componente alternativo, sin realizar pruebas de conmutación ni definir cómo recuperar el servicio principal.
- C. Mantener una única copia del componente crítico y confiar en que pueda reconstruirse después del fallo sin estado replicado ni respaldo.
- D. Desactivar la monitorización para reducir alertas y efectuar el cambio manualmente cuando los usuarios comuniquen la indisponibilidad.

Explicación: La redundancia no sirve si la conmutación no está probada o el estado no es coherente.

### Propuesta

Un servicio con estado dispone de un entorno alternativo para conmutar ante fallo. ¿Qué conjunto permite comprobar que la estrategia es operativa?

- A. Detección y activación, estado recuperable coherente, pruebas y operación posterior definida. **(correcta)**
- B. Ampliación del servidor alternativo sin comprobar datos ni ruta de acceso al servicio.
- C. Replicación de datos sin ensayar arranque, dependencias o criterios de conmutación.
- D. Medición continua de carga sin definir quién activa el alternativo ni cómo hacerlo.

Explicación: Una conmutación de un servicio con estado debe poder activarse ante criterios conocidos, disponer de estado coherente o recuperable y restaurar también dependencias y acceso. Las pruebas contrastan el servicio y sus objetivos, no solo el encendido de una máquina. Después se verifica la operación y se prepara el retorno si procede; no se exige volver inmediatamente a un entorno que sigue fallando.

- Error B: Tener capacidad de cómputo no demuestra que datos y conectividad permitan reanudar el servicio en condiciones correctas.
- Error C: La réplica cubre una parte. Arranque, identidades, red, dependencias y activación también pueden impedir que el servicio funcione.
- Error D: Medir carga no establece por sí solo un procedimiento de recuperación ni responsables o condiciones para ejecutarlo.

- [Microsoft: Architecture strategies for disaster recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) · RE:09; Define disaster thresholds; Design recovery-aware architecture; Prepare infrastructure and recovery procedures; Practice with regular drills: activación, estado, dependencias, pruebas y failback · versión: Guía en línea; se aprovechan principios operativos, sin equiparar todo failover con desastre regional ni imponer retorno inmediato · comprobado: 2026-10-27
- [AWS: Fault tolerance and fault isolation](https://docs.aws.amazon.com/whitepapers/latest/availability-and-beyond-improving-resilience/fault-tolerance-and-fault-isolation.html) · Primeros párrafos de Fault tolerance and fault isolation; Static stability: continuidad, capacidad redundante y alcance del fallo · versión: Whitepaper latest consultado; no se adopta una separación terminológica universal HA/FT · comprobado: 2026-10-27

Partida: `2f15a5f220bfad728671d272e8adebf534e502344c1a73688d923fccd2d1f05d` · propuesta: `d531cfe85d5a56a81b60072706f872bbc5a8c8fca9701945179001d66211fb6b`

## MAN-GSI-P17-081

Decisión: pending_review · acción: revise.

Motivo: Conservar función general y clave D; comparar responsabilidades de software reales y evitar firewall como único papel.

### Antes

¿Cuál es la función general de un sistema operativo?

- A. Compilar obligatoriamente todo el código fuente.
- B. Sustituir todas las aplicaciones de negocio.
- C. Actuar únicamente como firewall.
- D. Gestionar hardware y ofrecer abstracciones/servicios a aplicaciones y usuarios. **(correcta)**

Explicación: El SO gestiona procesos, memoria, E/S, ficheros, usuarios, protección y comunicaciones.

### Propuesta

¿Cuál es la función general de un sistema operativo?

- A. Transformar programas fuente en ejecutables mediante reglas de compilación.
- B. Coordinar funcionalidades de negocio y los datos propios de una aplicación.
- C. Ofrecer herramientas interactivas de edición y construcción de programas.
- D. Gestionar recursos y ofrecer abstracciones y servicios a programas y usuarios. **(correcta)**

Explicación: El SO arbitra recursos como CPU, memoria, dispositivos y almacenamiento, y ofrece abstracciones e interfaces para utilizarlos. Procesos, memoria virtual, archivos y mecanismos de protección facilitan ejecutar aplicaciones compartiendo la máquina. Un compilador, una aplicación de negocio o un entorno de desarrollo utilizan esos servicios y tienen responsabilidades diferentes, aunque puedan distribuirse junto al sistema.

- Error A: La compilación es función de un compilador. No define la gestión general de recursos e interfaces del SO.
- Error B: La lógica funcional de una aplicación utiliza los servicios del sistema, pero no sustituye su responsabilidad general sobre recursos.
- Error C: Describe un entorno de desarrollo. Edición y construcción de software no son la función general que define al SO.

- [Arpaci-Dusseau: OSTEP, Introduction to Operating Systems](https://pages.cs.wisc.edu/~remzi/OSTEP/intro.pdf) · Capítulo 2, introducción pp. 1–2 y 2.5 Design Goals, p. 11: gestión, abstracciones e interfaces · versión: PDF de autores, versión 1.10 impresa; no se infiere fecha de publicación de copyright · comprobado: 2026-10-27

Partida: `1a33f54a396f3358762b857f165ef2f89ee2eeb088fc62fd818514bb6a03144f` · propuesta: `e9450d9e8256e700550e407a85b72f587e8dca4fdeca1a47eafc62c2310bd4d0`

## MAN-GSI-P17-082

Decisión: pending_review · acción: revise.

Motivo: Conservar proceso y clave B; contrastar programa, hilo y CPU lógica, distinguiendo instancia activa de estado running.

### Antes

¿Qué es un proceso?

- A. Una dirección IP.
- B. Un programa en ejecución con espacio de direcciones, estado y recursos asociados. **(correcta)**
- C. Un archivo de configuración sin ejecutar.
- D. Un núcleo físico de CPU.

Explicación: El proceso es una instancia de ejecución gestionada por el SO.

### Propuesta

¿Qué es un proceso?

- A. Un archivo ejecutable que contiene instrucciones guardadas antes de iniciarse.
- B. Una instancia de programa en ejecución, con estado y recursos administrados. **(correcta)**
- C. Una secuencia de ejecución que comparte los recursos de su proceso contenedor.
- D. Un procesador lógico que el hardware presenta al planificador del sistema.

Explicación: Un proceso es una instancia de ejecución con estado y recursos gestionados por el SO. Incluye un espacio de direcciones y estructuras de control; puede contener varios hilos. El mismo ejecutable puede originar distintos procesos. Estar en ejecución en este sentido no exige ocupar CPU en todo momento: el proceso puede estar preparado o bloqueado y seguir existiendo como instancia.

- Error A: Describe el programa almacenado. Sin la instancia y su estado de ejecución no constituye por ese hecho un proceso.
- Error C: Describe un hilo dentro de un proceso. No el contenedor de recursos y espacio de direcciones que se pregunta.
- Error D: Un procesador lógico es un recurso de ejecución presentado por hardware. El proceso es una entidad software gestionada.

- [Arpaci-Dusseau: OSTEP, The Abstraction: The Process](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) · Capítulo 4: 4.1 The Abstraction: A Process, pp. 2–3; 4.4 Process States, pp. 5–7; separación de política/mecanismo p. 3 · versión: PDF de autores, versión 1.10 impresa; modelo didáctico simplificado · comprobado: 2026-10-27
- [Microsoft: About Processes and Threads](https://learn.microsoft.com/en-us/windows/win32/procthread/about-processes-and-threads) · Primeros cuatro párrafos: recursos del proceso, hilo planificable, contexto propio, memoria compartida y multitarea · versión: Actualización 14-07-2025; se usan fundamentos, sin generalizar detalles de UMS o fibras · comprobado: 2026-10-27

Partida: `b3a54e5053fe35ec825da7f8a0062256b6eddf5904cbaa892fb3eacf215b30f3` · propuesta: `ab35b8ce0e960ef3ff4d20d9586c91bd95b8b55c58cbf15021d9fd06eecd9fba`

## MAN-GSI-P17-083

Decisión: pending_review · acción: revise.

Motivo: Conservar hilo y clave C; precisar software, contexto propio y pila en espacio compartido.

### Antes

¿Qué es un hilo?

- A. Un proceso aislado que dispone siempre de su propio kernel, espacio de direcciones y copia privada de todos los recursos del sistema.
- B. Un dispositivo de bloque lógico que almacena el contexto de ejecución y conserva las instrucciones pendientes de cada proceso.
- C. Una unidad de ejecución dentro de un proceso que comparte gran parte de sus recursos con otros hilos del mismo proceso. **(correcta)**
- D. Un socket físico de CPU reservado de forma exclusiva para ejecutar una única secuencia de instrucciones durante toda su vida.

Explicación: Los hilos comparten espacio de direcciones y otros recursos del proceso.

### Propuesta

¿Qué describe un hilo software dentro de un proceso?

- A. Una instancia con espacio de direcciones separado del proceso que la contiene.
- B. Un conjunto de instrucciones almacenadas que aún carece de contexto de ejecución.
- C. Una secuencia con contexto propio que comparte recursos de su proceso. **(correcta)**
- D. Una unidad física de CPU dedicada a contener instrucciones y registros.

Explicación: Un hilo software es una secuencia de ejecución dentro de un proceso. Mantiene contexto propio, como contador de programa, registros y pila, y comparte el espacio de direcciones y otros recursos del proceso. Las pilas son lógicamente de cada hilo, pero se sitúan en ese espacio compartido; no implican aislamiento de memoria entre hilos. Un hilo software tampoco se identifica con una unidad física de CPU.

- Error A: Un hilo del proceso comparte su espacio de direcciones. Un espacio separado corresponde al aislamiento habitual entre procesos.
- Error B: Las instrucciones almacenadas describen código. El hilo necesita además una secuencia y estado de ejecución.
- Error D: Confunde entidad software con hardware. Un hilo puede ser desplanificado o ejecutar en distintos procesadores según la política.

- [Arpaci-Dusseau: OSTEP, Concurrency: An Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf) · Capítulo 26, introducción pp. 1–2 y 26.1 Why Use Threads?, pp. 2–3; 26.4, pp. 9–10: registros, pilas, dirección compartida e intercalado · versión: PDF de autores, versión 1.10 impresa; pilas lógicamente propias dentro del mismo espacio de direcciones · comprobado: 2026-10-27
- [Microsoft: About Processes and Threads](https://learn.microsoft.com/en-us/windows/win32/procthread/about-processes-and-threads) · Primeros cuatro párrafos: recursos del proceso, hilo planificable, contexto propio, memoria compartida y multitarea · versión: Actualización 14-07-2025; se usan fundamentos, sin generalizar detalles de UMS o fibras · comprobado: 2026-10-27

Partida: `89ad9b176a9ab3bc14c0943887ab53963484132feb68c6a39f62e9ebde55dae2` · propuesta: `35875705c38b49f8701c9b4a317ff3178c3a12613bbbf96486b0ce6493b41aa0`

## MAN-GSI-P17-084

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación proceso/hilo y clave C; distinguir aislamiento por defecto, IPC y contexto propio.

### Antes

¿Qué diferencia básica hay entre proceso e hilo?

- A. No existe ninguna diferencia.
- B. Los hilos siempre tienen su propio sistema operativo.
- C. Los procesos están más aislados; los hilos del mismo proceso comparten memoria y recursos. **(correcta)**
- D. Un proceso es hardware y un hilo es almacenamiento.

Explicación: Compartir memoria hace los hilos ligeros pero exige sincronización.

### Propuesta

¿Qué diferencia básica hay entre proceso e hilo?

- A. Los procesos comparten por defecto todo el espacio virtual; los hilos lo tienen separado.
- B. Los procesos reúnen recursos, mientras los hilos de un mismo proceso comparten un único contexto de registros.
- C. Los procesos tienen espacios virtuales normalmente separados; sus hilos comparten el del proceso. **(correcta)**
- D. Los procesos no pueden compartir memoria, aunque se solicite un mecanismo explícito al SO.

Explicación: La separación habitual de espacios virtuales entre procesos ofrece aislamiento, aunque pueden establecer memoria compartida y otros canales IPC. Los hilos de un mismo proceso comparten ese espacio y recursos, conservando sus contextos de ejecución. Compartir facilita comunicación pero exige coordinar accesos al estado mutable. No debe confundirse espacio compartido con un único conjunto de registros o pila para todos los hilos.

- Error A: Invierte el modelo habitual. Los hilos comparten el espacio del proceso; los procesos distintos suelen tener espacios separados.
- Error B: Compartir recursos no fusiona los contextos de ejecución. Cada hilo mantiene su estado de registros y su secuencia.
- Error D: El aislamiento por defecto no impide compartir memoria de forma explícita. El SO ofrece mecanismos IPC para cooperación entre procesos.

- [Oracle: Processes and Threads](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html) · Introducción, Processes y Threads: concurrencia con un núcleo, aislamiento habitual e intercambio de recursos · versión: Tutorial escrito para JDK 8, advertencia expresa de antigüedad; solo conceptos de ejecución, no recomendación de versión o API actual · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Concurrency: An Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf) · Capítulo 26, introducción pp. 1–2 y 26.1 Why Use Threads?, pp. 2–3; 26.4, pp. 9–10: registros, pilas, dirección compartida e intercalado · versión: PDF de autores, versión 1.10 impresa; pilas lógicamente propias dentro del mismo espacio de direcciones · comprobado: 2026-10-27
- [Microsoft: About Processes and Threads](https://learn.microsoft.com/en-us/windows/win32/procthread/about-processes-and-threads) · Primeros cuatro párrafos: recursos del proceso, hilo planificable, contexto propio, memoria compartida y multitarea · versión: Actualización 14-07-2025; se usan fundamentos, sin generalizar detalles de UMS o fibras · comprobado: 2026-10-27

Partida: `f25c5311e622430e01605d5439cfc2da616c61d369a574823ec2ddf29dec511e` · propuesta: `bbcec2e064e8d600528e752e5cee4b6ee74f8744e9b62e451edf6214f0e9e53b`

## MAN-GSI-P17-085

Decisión: pending_review · acción: revise.

Motivo: Conservar estado ready y clave A; microcaso que distingue esperar CPU de esperar un evento.

### Antes

¿Cuál es un estado clásico de proceso?

- A. Preparado (ready), esperando CPU. **(correcta)**
- B. Encriptado.
- C. Montado.
- D. Indexado.

Explicación: Estados clásicos incluyen nuevo, preparado, ejecución, bloqueado/espera y terminado.

### Propuesta

En el modelo clásico de estados, un proceso ha terminado su E/S y puede continuar, pero espera que le asignen CPU. ¿En qué estado está?

- A. Preparado: puede continuar cuando el planificador le asigne CPU. **(correcta)**
- B. Bloqueado: aún necesita que finalice la operación de entrada/salida.
- C. En ejecución: ya está realizando instrucciones en un procesador.
- D. Terminado: ha completado su trabajo y no puede volver a ejecutarse.

Explicación: En el modelo clásico simplificado, preparado significa que puede ejecutarse pero aún no ha recibido CPU. Al finalizar la espera de E/S pasa de bloqueado a preparado; no tiene por qué empezar inmediatamente. En ejecución ocupa un procesador y terminado ya no continúa la instancia. Los nombres y estados adicionales varían entre sistemas, por lo que el caso explicita el modelo.

- Error B: La operación de E/S ya ha finalizado en el caso. No queda ese evento pendiente que justifique mantenerlo bloqueado.
- Error C: Poder ejecutar no equivale a estar ejecutando. El enunciado dice que todavía espera asignación de CPU.
- Error D: Finalizar una E/S no significa finalizar todo el proceso. La instancia tiene trabajo que puede continuar.

- [Arpaci-Dusseau: OSTEP, The Abstraction: The Process](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) · Capítulo 4: 4.1 The Abstraction: A Process, pp. 2–3; 4.4 Process States, pp. 5–7; separación de política/mecanismo p. 3 · versión: PDF de autores, versión 1.10 impresa; modelo didáctico simplificado · comprobado: 2026-10-27
- [Microsoft: Context Switches](https://learn.microsoft.com/en-us/windows/win32/procthread/context-switches) · Introducción y lista de pasos: guardar contexto, colas preparadas, restaurar y reanudar; tareas bloqueadas · versión: Ejemplo de Windows, sin generalizar orden de colas a todo SO · comprobado: 2026-10-27

Partida: `288e12df050275f11d1f0f8c974239ae2db3c6cbd9923834bb0df9afa9ae38a7` · propuesta: `18916c145831ba17ca67b923a6f55df6c79c1a78e37ea92193d9071fd23e9325`

## MAN-GSI-P17-086

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas ya próximas al concepto; completar política frente a mecanismo y claves sin reescritura innecesaria.

### Antes

¿Qué hace el planificador de CPU?

- A. Realizar el cambio de contexto una vez elegida la tarea, cargando sus registros y transfiriéndole el control del procesador.
- B. Gestionar las peticiones de entrada/salida y decidir el orden físico en que el dispositivo atiende sus operaciones pendientes.
- C. Asignar marcos de memoria a cada proceso y traducir sus direcciones virtuales antes de permitir que utilice CPU.
- D. Selecciona qué tarea/hilo ejecutará el procesador según la política del SO. **(correcta)**

Explicación: La planificación distribuye tiempo de CPU.

### Propuesta

¿Qué hace el planificador de CPU?

- A. Realizar el cambio de contexto una vez elegida la tarea, cargando sus registros y transfiriéndole el control del procesador.
- B. Gestionar las peticiones de entrada/salida y decidir el orden físico en que el dispositivo atiende sus operaciones pendientes.
- C. Asignar marcos de memoria a cada proceso y traducir sus direcciones virtuales antes de permitir que utilice CPU.
- D. Selecciona qué tarea/hilo ejecutará el procesador según la política del SO. **(correcta)**

Explicación: El planificador elige la tarea preparada que recibirá CPU de acuerdo con una política. Se distingue conceptualmente de los mecanismos que guardan y restauran contexto para ejecutar la decisión. También existen decisiones de planificación de E/S o gestión de memoria, pero no son la selección de CPU preguntada. En un sistema real esos mecanismos cooperan y pueden estar próximos en la implementación.

- Error A: Describe el mecanismo de despacho y cambio de contexto posterior a elegir una tarea. No el criterio de selección del planificador.
- Error B: Describe planificación de E/S. Decide sobre solicitudes de un dispositivo, no qué tarea preparada recibe procesador.
- Error C: Describe gestión y traducción de memoria. Puede condicionar ejecución, pero no define la selección de tarea según la política de CPU.

- [Arpaci-Dusseau: OSTEP, The Abstraction: The Process](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) · Capítulo 4: 4.1 The Abstraction: A Process, pp. 2–3; 4.4 Process States, pp. 5–7; separación de política/mecanismo p. 3 · versión: PDF de autores, versión 1.10 impresa; modelo didáctico simplificado · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Mechanism: Limited Direct Execution](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf) · Capítulo 6: 6.2 Problem #1: Restricted Operations, pp. 2–7; 6.3 Problem #2: Switching Between Processes, Saving and Restoring Context, pp. 7–10: trap, decisión y cambio de contexto · versión: PDF de autores, versión 1.10; no toda entrada al núcleo cambia de tarea · comprobado: 2026-10-27

Partida: `f0ab2c351994bab564f9aa6301cd40f8f709a78e429a10a776f07a7a0df36490` · propuesta: `ffb028fa401e7991d452ab809c344d9391ef2e37129e643569e4d7aa63e987e6`

## MAN-GSI-P17-087

Decisión: pending_review · acción: revise.

Motivo: Conservar FCFS y clave C; precisar cola y variante clásica, con políticas vecinas como distractores.

### Antes

¿Qué caracteriza a FCFS/FIFO?

- A. Da siempre prioridad al proceso más corto conocido.
- B. Usa obligatoriamente quantum.
- C. Atiende trabajos aproximadamente en orden de llegada. **(correcta)**
- D. Es un algoritmo de cifrado.

Explicación: FCFS es simple, pero puede producir efecto convoy.

### Propuesta

En el modelo clásico de planificación de CPU, ¿qué criterio caracteriza a FCFS/FIFO?

- A. Elegir la tarea cuya próxima ráfaga de CPU se estima más breve.
- B. Alternar las tareas preparadas mediante turnos de duración limitada.
- C. Atender las tareas por orden de entrada a la cola de preparados. **(correcta)**
- D. Seleccionar según el nivel de prioridad asignado a cada tarea.

Explicación: FCFS o FIFO atiende según el orden de llegada a la cola. En su forma clásica no expropiativa, una tarea mantiene CPU hasta terminar su ráfaga o bloquearse. Puede producir efecto convoy: trabajos cortos esperan detrás de uno largo. No utiliza como criterio básico ni duración estimada, ni prioridad diferenciada, ni turnos periódicos de quantum.

- Error A: Describe la preferencia de SJF por duración estimada. FIFO no reordena la cola según esa estimación.
- Error B: Describe Round Robin. El turno limitado permite retirar CPU a una tarea y continuar con otra.
- Error D: Describe planificación por prioridad. FIFO emplea el orden de llegada, sin que prioridad sea el criterio básico.

- [Arpaci-Dusseau: OSTEP, Scheduling: Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf) · Capítulo 7: 7.1 Workload Assumptions, pp. 1–2; 7.3 FIFO, pp. 2–4; 7.4 SJF, pp. 4–5; 7.5 STCF, pp. 5–6; 7.7 Round Robin, pp. 7–8 · versión: PDF de autores, versión 1.10; modelos y supuestos explícitos, no política vigente de un SO concreto · comprobado: 2026-10-27

Partida: `46b0a65abb962347c0d96d119a1a814c501f5b95a1395aa04156d369a70f07a6` · propuesta: `c125882be691abc07f2e65d41384ec7f231924ba27440b3645aa8d611c2fa9ad`

## MAN-GSI-P17-088

Decisión: pending_review · acción: revise.

Motivo: Conservar RR y clave A; matizar límite de turno y bloqueo anticipado, sin exigir consumir siempre todo el quantum.

### Antes

¿Qué caracteriza a Round Robin?

- A. Reparte CPU mediante quantums de tiempo entre tareas preparadas. **(correcta)**
- B. Ejecuta siempre un proceso hasta terminar.
- C. Selecciona por número de archivos abiertos.
- D. No permite preempción.

Explicación: Round Robin es típico de tiempo compartido y usa quantum.

### Propuesta

¿Qué caracteriza a Round Robin?

- A. Alternar tareas preparadas, con un quantum como límite de cada turno. **(correcta)**
- B. Elegir la tarea de menor ráfaga estimada y dejar que la complete.
- C. Mantener CPU hasta completar la ráfaga, siguiendo el orden de llegada.
- D. Elegir la tarea con mayor prioridad, sin rotación entre iguales.

Explicación: Round Robin recorre la cola de preparados por turnos. Una tarea puede ceder CPU antes por terminar o bloquearse; si agota el quantum sin hacerlo y hay otras preparadas, vuelve a la cola. El tamaño del quantum equilibra respuesta y coste de cambios de contexto. No se deduce que cada tarea consuma siempre el turno completo ni que la política optimice toda métrica.

- Error B: Describe SJF no expropiativo. Round Robin no elige el siguiente turno por duración estimada.
- Error C: Describe FCFS clásico. El límite de quantum permite alternar antes de terminar una ráfaga larga.
- Error D: Una prioridad puede combinarse con otras políticas, pero eliminar rotación entre iguales no define Round Robin.

- [Arpaci-Dusseau: OSTEP, Scheduling: Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf) · Capítulo 7: 7.1 Workload Assumptions, pp. 1–2; 7.3 FIFO, pp. 2–4; 7.4 SJF, pp. 4–5; 7.5 STCF, pp. 5–6; 7.7 Round Robin, pp. 7–8 · versión: PDF de autores, versión 1.10; modelos y supuestos explícitos, no política vigente de un SO concreto · comprobado: 2026-10-27
- [Microsoft: Scheduling Priorities](https://learn.microsoft.com/en-us/windows/win32/procthread/scheduling-priorities) · Introducción, tres primeros párrafos y Priority Class: reparto por turnos entre iguales y riesgo de monopolio por prioridad alta · versión: Ejemplo Windows; no se universalizan niveles numéricos, clases o política a otros SO · comprobado: 2026-10-27

Partida: `0cb72e1bc250f6998cbec234fe59574277c2c3d06c4b23d3cfdf930e2461ee58` · propuesta: `016800de083dbba9d1fd9e35055b4e1d6314a6b10a613485ce3b119d1867bb7a`

## MAN-GSI-P17-089

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de prioridades y clave B; microcaso de tarea preparada con contraste entre cuatro problemas de progreso.

### Antes

¿Qué riesgo tienen las prioridades si no existe mecanismo de envejecimiento u otra compensación?

- A. Desaparición de la memoria virtual.
- B. Inanición de tareas de baja prioridad. **(correcta)**
- C. Duplicación de sockets físicos.
- D. Conversión automática en deadlock.

Explicación: Starvation ocurre cuando una tarea espera indefinidamente por preferencia continua de otras.

### Propuesta

En una planificación por prioridad sin envejecimiento ni compensación, siempre hay tareas de prioridad alta preparadas. Otra de prioridad baja no recibe CPU. ¿Qué riesgo ilustra?

- A. Bloqueo mutuo por una espera circular de recursos retenidos.
- B. Inanición por postergación reiterada de la tarea menos prioritaria. **(correcta)**
- C. Inversión de prioridad por un recurso retenido por una tarea inferior.
- D. Livelock por reacciones continuas de tareas que impiden su avance.

Explicación: Una tarea preparada puede sufrir inanición si siempre se eligen otras y no hay compensación que le asegure progreso. No necesita estar bloqueada esperando un recurso. Aging o mecanismos de aumento de prioridad pueden mitigar el problema según la política. La inversión de prioridad requiere una dependencia respecto de una tarea inferior; deadlock y livelock describen otros problemas de progreso.

- Error A: El caso no presenta recursos retenidos en una espera circular. La tarea pierde la selección de CPU frente a otras.
- Error C: Falta la dependencia respecto de un recurso retenido por una tarea de prioridad inferior que caracteriza la inversión de prioridad.
- Error D: No se describe una secuencia de reacciones activas sin progreso. Se describe falta de servicio por la selección reiterada de otras tareas.

- [Arpaci-Dusseau: OSTEP, Scheduling: The Multi-Level Feedback Queue](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-mlfq.pdf) · Capítulo 8: final de 8.2 y 8.3 Attempt #2: The Priority Boost, pp. 5–7: inanición y compensación · versión: PDF de autores, versión 1.10; boost periódico es un ejemplo, no idéntico a toda implementación de aging · comprobado: 2026-10-27
- [Microsoft: Scheduling Priorities](https://learn.microsoft.com/en-us/windows/win32/procthread/scheduling-priorities) · Introducción, tres primeros párrafos y Priority Class: reparto por turnos entre iguales y riesgo de monopolio por prioridad alta · versión: Ejemplo Windows; no se universalizan niveles numéricos, clases o política a otros SO · comprobado: 2026-10-27
- [Oracle: Starvation and Livelock](https://docs.oracle.com/javase/tutorial/essential/concurrency/starvelive.html) · Starvation y Livelock: falta de acceso regular frente a actividad reactiva sin progreso · versión: Tutorial JDK 8, con advertencia de antigüedad; conceptos, sin utilizar disponibilidad de API o versión actual · comprobado: 2026-10-27

Partida: `dd8fcee5dae570e8045f92627e8b715f44155fbc01a322b2a61058c3bedfca42` · propuesta: `600b3e0040c8091b2351249c07692623108f8da1b0f8d3235e32063d9012b244`

## MAN-GSI-P17-090

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente formulación y comparación de cuatro políticas; completar supuestos, estimación y diferencia con la variante expropiativa.

### Antes

¿Qué objetivo tiene SJF?

- A. Asignar a cada tarea un quantum y alternarlas en una cola circular para repartir periódicamente el procesador.
- B. Ejecutar primero la tarea con mayor prioridad y aplicar reglas adicionales cuando varias comparten el mismo nivel.
- C. Atender las tareas según su orden de llegada, sin utilizar una estimación de duración para decidir cuál continúa.
- D. Favorecer trabajos con menor duración estimada para reducir espera media en condiciones ideales. **(correcta)**

Explicación: SJF depende de estimar duración y puede perjudicar trabajos largos.

### Propuesta

¿Qué objetivo tiene SJF?

- A. Asignar a cada tarea un quantum y alternarlas en una cola circular para repartir periódicamente el procesador.
- B. Ejecutar primero la tarea con mayor prioridad y aplicar reglas adicionales cuando varias comparten el mismo nivel.
- C. Atender las tareas según su orden de llegada, sin utilizar una estimación de duración para decidir cuál continúa.
- D. Favorecer trabajos con menor duración estimada para reducir espera media en condiciones ideales. **(correcta)**

Explicación: SJF da preferencia a la duración más corta estimada. En el modelo ideal de trabajos disponibles a la vez, duraciones conocidas y solo CPU, ordenar así reduce espera media y tiempo medio de retorno. En sistemas reales se estiman ráfagas y las llegadas alteran el resultado. No garantiza equidad para trabajos largos; su variante con expropiación por tiempo restante se distingue como SRTF o STCF.

- Error A: Describe reparto por turnos Round Robin, orientado a respuesta y alternancia. No ordena por duración estimada como SJF.
- Error B: Describe prioridad asignada, que puede obedecer a criterios distintos de duración. No es el criterio específico de SJF.
- Error C: Describe FCFS/FIFO. Mantiene orden de llegada en vez de favorecer el trabajo estimado más breve.

- [Arpaci-Dusseau: OSTEP, Scheduling: Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf) · Capítulo 7: 7.1 Workload Assumptions, pp. 1–2; 7.3 FIFO, pp. 2–4; 7.4 SJF, pp. 4–5; 7.5 STCF, pp. 5–6; 7.7 Round Robin, pp. 7–8 · versión: PDF de autores, versión 1.10; modelos y supuestos explícitos, no política vigente de un SO concreto · comprobado: 2026-10-27

Partida: `00ae64643bd9c506c461fa5f0630639fcfc12c3f28eb4698165696ac0a4ab07b` · propuesta: `aec67820be392aee3566282662233f98def2a4dd415a25393eaaebd9d8c8da78`

## MAN-GSI-P17-091

Decisión: pending_review · acción: revise.

Motivo: Conservar cambio de contexto y clave B; separar cambio de modo, creación de proceso y traducción de memoria.

### Antes

¿Qué es un cambio de contexto?

- A. Cambiar el sistema de archivos de NTFS a ext4.
- B. Guardar/restaurar estado para cambiar la CPU de una tarea a otra. **(correcta)**
- C. Mover una VM a otra región cloud por definición.
- D. Renombrar un proceso.

Explicación: Context switching tiene coste y es parte de la multitarea.

### Propuesta

¿Qué es un cambio de contexto?

- A. Entrar en modo núcleo para atender una llamada y volver a la misma tarea.
- B. Guardar y restaurar estado para pasar de una tarea ejecutable a otra. **(correcta)**
- C. Cargar código y recursos para crear una nueva instancia de proceso.
- D. Cambiar correspondencias de direcciones virtuales mediante una tabla de páginas.

Explicación: Un cambio de contexto guarda estado de la tarea saliente y restaura el de otra para continuar su ejecución. Puede ocurrir entre hilos del mismo proceso sin cambiar el espacio de direcciones. Entrar al núcleo no obliga a seleccionar otra tarea: puede atenderse la llamada y volver a la misma. La conmutación tiene coste, cuyo detalle depende de la arquitectura y el SO.

- Error A: Describe un cambio de modo con retorno a la misma tarea. No implica por sí solo la conmutación de tareas que se pregunta.
- Error C: Describe creación o carga de una instancia. Cambiar contexto puede reanudar una ya existente sin crear un proceso nuevo.
- Error D: La traducción de memoria es otro mecanismo. Puede relacionarse con conmutar procesos, pero entre hilos del mismo proceso el espacio puede mantenerse.

- [Microsoft: Context Switches](https://learn.microsoft.com/en-us/windows/win32/procthread/context-switches) · Introducción y lista de pasos: guardar contexto, colas preparadas, restaurar y reanudar; tareas bloqueadas · versión: Ejemplo de Windows, sin generalizar orden de colas a todo SO · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Mechanism: Limited Direct Execution](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf) · Capítulo 6: 6.2 Problem #1: Restricted Operations, pp. 2–7; 6.3 Problem #2: Switching Between Processes, Saving and Restoring Context, pp. 7–10: trap, decisión y cambio de contexto · versión: PDF de autores, versión 1.10; no toda entrada al núcleo cambia de tarea · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Concurrency: An Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf) · Capítulo 26, introducción pp. 1–2 y 26.1 Why Use Threads?, pp. 2–3; 26.4, pp. 9–10: registros, pilas, dirección compartida e intercalado · versión: PDF de autores, versión 1.10 impresa; pilas lógicamente propias dentro del mismo espacio de direcciones · comprobado: 2026-10-27

Partida: `c9aa27e627aaa3ae05f067ec241796719a535ca02adb6491f884d2a945cdb630` · propuesta: `eddb3c85eeb4ab29ecf7eed76d531cdad92d7f1b010b3f331ffb0899b34bb56f`

## MAN-GSI-P17-092

Decisión: pending_review · acción: revise.

Motivo: Conservar concurrencia/paralelismo y clave C; alternativas breves comparables, sin exigir distribución ni múltiples núcleos para toda concurrencia.

### Antes

¿Qué diferencia hay entre concurrencia y paralelismo?

- A. Son términos equivalentes que describen siempre la ejecución simultánea de varias instrucciones en procesadores físicos diferentes.
- B. El paralelismo solo puede producirse en un único núcleo, mientras la concurrencia requiere necesariamente varios procesadores.
- C. Concurrencia permite progreso solapado de tareas; paralelismo implica ejecución simultánea real. **(correcta)**
- D. La concurrencia exige distribuir cada tarea entre máquinas físicas distintas y no puede existir dentro de un solo sistema operativo.

Explicación: Puede haber concurrencia en un solo núcleo mediante intercalado.

### Propuesta

¿Qué diferencia hay entre concurrencia y paralelismo?

- A. Concurrencia y paralelismo designan por igual la ejecución física simultánea.
- B. Concurrencia exige varios procesadores; paralelismo puede obtenerse solo intercalando tareas.
- C. Concurrencia admite progreso intercalado; paralelismo requiere ejecución simultánea. **(correcta)**
- D. Concurrencia describe el número de procesos; paralelismo, la cantidad de memoria que comparten.

Explicación: La concurrencia permite estructurar y coordinar varias tareas cuyo progreso se solapa en el tiempo. Puede realizarse por intercalado en un único recurso de ejecución. El paralelismo añade ejecución simultánea aprovechando varios recursos. Tener varios hilos permite esa posibilidad, pero no garantiza que ejecuten a la vez: influyen hardware, planificación y dependencias. Compartir memoria no define por sí mismo ninguno de los dos.

- Error A: Identifica ambos conceptos y excluye la concurrencia por intercalado. La simultaneidad física caracteriza al paralelismo.
- Error B: Invierte la distinción. Intercalar puede dar concurrencia sin ejecución física simultánea.
- Error D: Ni el recuento de procesos ni la cantidad de memoria compartida definen el solapamiento y la simultaneidad. También hay concurrencia entre hilos.

- [Oracle: Processes and Threads](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html) · Introducción, Processes y Threads: concurrencia con un núcleo, aislamiento habitual e intercambio de recursos · versión: Tutorial escrito para JDK 8, advertencia expresa de antigüedad; solo conceptos de ejecución, no recomendación de versión o API actual · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Concurrency: An Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf) · Capítulo 26, introducción pp. 1–2 y 26.1 Why Use Threads?, pp. 2–3; 26.4, pp. 9–10: registros, pilas, dirección compartida e intercalado · versión: PDF de autores, versión 1.10 impresa; pilas lógicamente propias dentro del mismo espacio de direcciones · comprobado: 2026-10-27

Partida: `312d4e001c78f270a02c70f57f8361e6e8acb1150756ac8bc98985e05add5f36` · propuesta: `61caa9fd3b7c37dfb692e4867fa2cf0f282eb575d54cd1601d946c671180abe9`

## MAN-GSI-P17-093

Decisión: pending_review · acción: revise.

Motivo: Conservar carrera y clave A; microcaso con intercalado explícito y sin suposiciones ocultas sobre atomicidad del lenguaje.

### Antes

¿Qué es una condición de carrera?

- A. Un resultado dependiente del orden/timing de accesos concurrentes a estado compartido. **(correcta)**
- B. Un bloqueo mutuo en el que varias tareas esperan recursos retenidos entre sí y ninguna puede continuar su ejecución.
- C. Una situación en la que las tareas cambian de estado y reaccionan continuamente, pero no consiguen realizar trabajo útil.
- D. La espera indefinida de una tarea porque otras reciben repetidamente el recurso o tiempo de CPU que necesita para avanzar.

Explicación: Las carreras se evitan con diseño y sincronización adecuados.

### Propuesta

Dos hilos incrementan el mismo contador mediante lectura y escritura separadas, sin sincronización. Ambos leen 10 y ambos escriben 11. ¿Qué problema muestra este intercalado?

- A. Condición de carrera con actualización perdida por intercalado de accesos. **(correcta)**
- B. Bloqueo mutuo por esperar recursos que cada hilo retiene para el otro.
- C. Livelock porque ambos hilos siguen reaccionando sin realizar trabajo útil.
- D. Inanición porque uno de los hilos no llega a obtener tiempo de ejecución.

Explicación: Ambos hilos calculan su incremento desde el mismo valor antiguo y la última escritura sustituye a la anterior. El resultado depende del intercalado: es una condición de carrera con actualización perdida. El caso explicita lectura y escritura separadas y no atómicas; no se presupone que cualquier operación de un lenguaje tenga esa semántica. Los dos hilos progresan, pero la actualización conjunta es incorrecta.

- Error B: Los hilos terminan sus operaciones; no hay una espera circular de recursos que les impida continuar.
- Error C: No se describe actividad reactiva indefinida. Existe trabajo terminado con un resultado incorrecto por acceso al mismo estado.
- Error D: Los dos leen y escriben. Ninguno queda privado de ejecución como en la inanición planteada.

- [Oracle: Thread Interference](https://docs.oracle.com/javase/tutorial/essential/concurrency/interfere.html) · Counter; descomposición de incremento en lectura/modificación/escritura y ejemplo de intercalado con actualización perdida · versión: Tutorial JDK 8, con advertencia de antigüedad; no se deduce atomicidad de todas las instrucciones o lenguajes · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Concurrency: An Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf) · Capítulo 26, introducción pp. 1–2 y 26.1 Why Use Threads?, pp. 2–3; 26.4, pp. 9–10: registros, pilas, dirección compartida e intercalado · versión: PDF de autores, versión 1.10 impresa; pilas lógicamente propias dentro del mismo espacio de direcciones · comprobado: 2026-10-27
- [Oracle: Starvation and Livelock](https://docs.oracle.com/javase/tutorial/essential/concurrency/starvelive.html) · Starvation y Livelock: falta de acceso regular frente a actividad reactiva sin progreso · versión: Tutorial JDK 8, con advertencia de antigüedad; conceptos, sin utilizar disponibilidad de API o versión actual · comprobado: 2026-10-27

Partida: `4f0c758997c5c16e6fabddcb7b776d73029fd8e2a58c0af2a8055f151c444521` · propuesta: `eccd1bff6a3517b2d698560565312be3b80316e1c44df2b8249a7b3a8ae65065`

## MAN-GSI-P17-094

Decisión: pending_review · acción: revise.

Motivo: Conservar exclusión mutua y clave D; precisar capacidad tres para no confundir el distractor con un semáforo binario utilizable como exclusión.

### Antes

¿Para qué se usa un mutex?

- A. Mantener un contador de permisos para admitir hasta un número determinado de accesos simultáneos a un recurso.
- B. Permitir que una tarea espere una condición y sea notificada cuando otro hilo modifica el estado asociado.
- C. Elegir qué proceso recibe CPU y durante cuánto tiempo según prioridad, quantum u otra política de planificación.
- D. Para proporcionar exclusión mutua sobre una sección o recurso compartido. **(correcta)**

Explicación: El mutex protege secciones críticas frente a acceso simultáneo incompatible.

### Propuesta

¿Para qué se usa un mutex?

- A. Admitir hasta tres accesos simultáneos mediante un contador de permisos.
- B. Suspender tareas hasta una notificación de que una condición puede haber cambiado.
- C. Asignar tiempo de CPU a tareas preparadas según una política de planificación.
- D. Proporcionar exclusión mutua al acceder a una sección o recurso compartido. **(correcta)**

Explicación: Un mutex permite que un único propietario acceda a la sección o recurso protegido cada vez. La protección requiere que los accesos incompatibles respeten el mismo protocolo de bloqueo. No garantiza por sí solo ausencia de deadlock, equidad FIFO o corrección de todos los datos. El conteo de varios permisos y la notificación de condiciones cumplen otras funciones; sus semánticas dependen de la API.

- Error A: Describe un semáforo contador con capacidad tres. Permitir varios accesos simultáneos no expresa la exclusión de un mutex; un semáforo binario puede usarse de otra forma.
- Error B: Describe la espera y notificación de una condición. Una notificación no concede por sí misma propiedad exclusiva sobre el recurso.
- Error C: Describe planificación de CPU. Un mutex coordina acceso entre tareas y no decide por sí solo la política general de ejecución.

- [Arpaci-Dusseau: OSTEP, Locks](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf) · Capítulo 28: 28.1 Locks: The Basic Idea y 28.2 Pthread Locks, pp. 1–2; 28.4 Evaluating Locks, p. 3: exclusión y equidad son propiedades distintas · versión: PDF de autores, versión 1.10; no se generalizan reglas de recursión o desbloqueo a todas las API · comprobado: 2026-10-27
- [Microsoft: Mutex Objects](https://learn.microsoft.com/en-us/windows/win32/sync/mutex-objects) · Primeros párrafos, propiedad por un hilo y coordinación; párrafo de ausencia de garantía FIFO; mutex entre procesos · versión: Actualización 07-01-2021; solo exclusión y alcance, sin trasladar semántica recursiva de Windows a POSIX · comprobado: 2026-10-27

Partida: `4f316a013c4345fe042c9c903be52c49ac189ee50887748571a29fc57cb341f5` · propuesta: `f8db7f78e4a115af237ff865b582d783c4dfe29e3cbb11993a6d15701b59653e`
