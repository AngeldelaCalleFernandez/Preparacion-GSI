GSI A2 — PRÁCTICA ACTIVA 17

**COMPUTADORES · ESCALABILIDAD · CLOUD · SISTEMAS OPERATIVOS**

160 preguntas · 4 opciones · refuerzo directo de II.01 e II.02

**SOLUCIONARIO COMENTADO**

# Cómo usar esta práctica

Este solucionario explica la regla que discrimina cada respuesta. No memorices la letra: memoriza la distinción técnica y vuelve al cuaderno para reintentar los fallos.

Base nuclear: GSI A2 — Bloque II — Apuntes completos V2.1 revisados. Contraste oficial: NIST SP 800-145; Microsoft Learn (procesos/memoria Windows); Android Open Source Project (Application Sandbox); Apple Platform Security (App Security).

## Distribución

| **Preguntas** | **Bloque** | **Función** |
| --- | --- | --- |
| 1–20 | Computadores: arquitectura, CPU, memoria y E/S | CPU, memoria, E/S, almacenamiento, aceleradores y métricas. |
| 21–40 | Paralelismo, HPC, mainframe, clúster y grid | Flynn, UMA/NUMA, mainframe, supercomputación, clúster/grid y paralelismo. |
| 41–60 | Escalabilidad, disponibilidad y virtualización | Scale up/out, elasticidad, HA, RTO/RPO, virtualización y dimensionamiento. |
| 61–80 | Cloud: modelos, responsabilidades y decisión arquitectónica | NIST cloud, IaaS/PaaS/SaaS, despliegue, IAM, TCO y reversibilidad. |
| 81–100 | Sistemas operativos: procesos, hilos, planificación y concurrencia | Procesos/hilos, estados, scheduling, sincronización, deadlock y syscalls. |
| 101–120 | Memoria, E/S, ficheros y estructuras de kernel | Memoria virtual, paginación, TLB, E/S, sistemas de archivos y kernels. |
| 121–140 | Windows, Linux y Unix: administración y seguridad | Windows NT, Linux/Unix, servicios, logs, permisos, hardening y administración. |
| 141–160 | Sistemas móviles y casos integradores de plataforma | Android/iOS, sandbox, permisos, MDM/UEM y casos integradores. |

## Fuentes oficiales de contraste

* NIST SP 800-145 — The NIST Definition of Cloud Computing
* Microsoft Learn — Processes, Threads and Virtual Address Space
* Android Open Source Project — Application Sandbox
* Apple Platform Security — App security overview

Control de actualidad: 25/08/2026. Se priorizan conceptos y arquitectura estable frente a números de versión efímeros.

# 1. Computadores: arquitectura, CPU, memoria y E/S

**1. A —** La CPU interpreta y ejecuta instrucciones; almacenamiento, SO y red son subsistemas distintos.

**2. A —** No deben confundirse procesador físico, núcleo y contexto de ejecución hardware.

**3. B —** La jerarquía busca equilibrar latencia, capacidad y coste.

**4. D —** Los datos e instrucciones usados recientemente o cercanos tienden a reutilizarse.

**5. D —** L1 prioriza latencia frente a capacidad.

**6. D —** La Memory Management Unit soporta traducción de direcciones y protección de memoria.

**7. B —** La RAM es memoria principal y normalmente volátil.

**8. C —** La ausencia de movimiento mecánico reduce latencias; NVMe además usa una interfaz/protocolo optimizado para flash.

**9. C —** Las GPU explotan paralelismo masivo; no son un reemplazo universal de CPU.

**10. A —** Una FPGA permite implementar circuitos lógicos reconfigurables.

**11. C —** ASIC significa circuito integrado de aplicación específica.

**12. C —** Throughput mide volumen de trabajo; latencia mide el tiempo de una operación.

**13. B —** Latencia y capacidad/HA son dimensiones distintas.

**14. A —** La interconexión comunica CPU, memoria y dispositivos/controladores.

**15. A —** DMA reduce la carga de CPU durante determinadas transferencias de E/S.

**16. B —** El ancho de palabra/direcciones afecta capacidad y ABI, no determina por sí solo cloud ni SO.

**17. D —** Son categorías de arquitectura de instrucciones, no de almacenamiento o red.

**18. C —** En NUMA la localidad importa: memoria local suele ser más rápida que memoria asociada a otro nodo NUMA.

**19. D —** Capacidad, throughput y latencia deben evaluarse por separado.

**20. B —** La selección de aceleradores debe ligarse al perfil de cálculo y a su ecosistema.

# 2. Paralelismo, HPC, mainframe, clúster y grid

**21. C —** SISD representa el modelo secuencial clásico.

**22. D —** SIMD es típico de procesamiento vectorial y muchas cargas GPU.

**23. A —** MIMD es común en multiprocesadores y sistemas distribuidos.

**24. B —** MISD aparece mucho menos como arquitectura general que SISD/SIMD/MIMD.

**25. C —** La diferencia central es la topología/latencia de acceso a memoria.

**26. D —** Afinidad y localidad reducen accesos remotos costosos.

**27. A —** Mainframe y supercomputador optimizan perfiles de carga distintos.

**28. A —** La supercomputación se orienta a cálculo intensivo y paralelismo masivo.

**29. A —** El clúster coordina varios nodos mediante red y software.

**30. C —** Los clústeres se diseñan según objetivo: HPC, HA, balanceo, etc.

**31. D —** Grid coordina recursos distribuidos y autónomos; no es lo mismo que cloud.

**32. A —** Cada modelo resuelve organización y provisión de recursos de forma distinta.

**33. D —** Estado compartido introduce carreras y coherencia/sincronización.

**34. C —** Los nodos no comparten necesariamente un espacio físico de memoria.

**35. D —** El trabajo serial limita la aceleración total; por eso el escalado no es infinito.

**36. B —** FLOPS mide operaciones de coma flotante por segundo, aunque no sustituye benchmarks representativos.

**37. C —** La comparabilidad exige metodología y carga representativa.

**38. B —** HPC combina nodos, interconexión y middleware/software paralelo.

**39. B —** El perfil transaccional y de continuidad es típico de mainframe.

**40. B —** El overhead de comunicación/sincronización puede anular el beneficio del paralelismo.

# 3. Escalabilidad, disponibilidad y virtualización

**41. A —** Scale up aumenta capacidad dentro de una máquina o instancia.

**42. C —** Scale out incrementa el número de unidades de cómputo.

**43. C —** Un sistema puede escalar y, sin embargo, no ajustar recursos elásticamente.

**44. D —** Son conceptos próximos, pero no equivalentes.

**45. C —** HA busca continuidad de servicio, no sustituye backup ni DR.

**46. B —** La tolerancia a fallos suele implicar continuidad más inmediata que un esquema de failover tradicional.

**47. B —** Eliminar SPOF requiere redundancia y diseño de dependencias.

**48. C —** RTO es tiempo; RPO se refiere a pérdida de datos tolerable.

**49. B —** RPO guía frecuencia/estrategia de replicación y copias.

**50. D —** Tipo 1 se asocia a bare metal; tipo 2 se ejecuta sobre un SO host.

**51. B —** Tipo 2 usa servicios del SO host.

**52. A —** La VM presenta hardware virtual y ejecuta un SO invitado.

**53. D —** Contenedores virtualizan a nivel de sistema operativo; VM a nivel de hardware.

**54. B —** Dimensionar debe basarse en demanda, picos y margen razonable.

**55. C —** CPU, RAM, E/S, red o dependencias pueden convertirse en cuellos de botella.

**56. D —** El estado local rígido dificulta repartir usuarios entre réplicas.

**57. D —** El balanceo ayuda a rendimiento y disponibilidad, pero no resuelve por sí solo todos los SPOF.

**58. A —** La redundancia no sirve si la conmutación no está probada o el estado no es coherente.

**59. A —** Replicación/HA puede propagar errores; backup ofrece puntos de recuperación.

**60. A —** La continuidad requiere capas: HA, protección de datos y DR.

# 4. Cloud: modelos, responsabilidades y decisión arquitectónica

**61. D —** NIST define cinco características esenciales, entre ellas on-demand self-service.

**62. D —** El acceso de red amplio favorece clientes heterogéneos.

**63. B —** NIST asocia resource pooling con un modelo multi-tenant y asignación dinámica.

**64. C —** La medición de uso es una de las características esenciales NIST.

**65. A —** Elasticidad rápida permite crecer y decrecer según demanda.

**66. D —** IaaS deja al cliente más responsabilidad sobre SO, middleware y aplicaciones.

**67. C —** PaaS abstrae infraestructura y parte de la plataforma.

**68. D —** SaaS entrega funcionalidad de aplicación.

**69. A —** Pública se distingue de privada por ámbito de provisión, no por ausencia de seguridad.

**70. A —** Privada describe dedicación organizativa, no necesariamente ubicación on-premise.

**71. B —** Híbrida combina modelos de despliegue; multicloud se refiere a varios proveedores.

**72. A —** Multicloud no implica por sí mismo integración transparente ni parte privada.

**73. B —** La separación de zonas permite diseñar tolerancia a fallos locales.

**74. B —** Identidad y permisos son controles críticos en cloud.

**75. D —** El reparto cambia entre IaaS/PaaS/SaaS, pero el cliente nunca queda sin responsabilidades.

**76. A —** La reversibilidad debe considerarse antes de adoptar servicios propietarios.

**77. C —** TCO compara coste total, no una tarifa aislada.

**78. C —** La abstracción cambia responsabilidades; no elimina gestión.

**79. C —** La elasticidad permite adaptar coste/capacidad a la carga.

**80. B —** La reversibilidad debe diseñarse y probarse, no asumirse.

# 5. Sistemas operativos: procesos, hilos, planificación y concurrencia

**81. D —** El SO gestiona procesos, memoria, E/S, ficheros, usuarios, protección y comunicaciones.

**82. B —** El proceso es una instancia de ejecución gestionada por el SO.

**83. C —** Los hilos comparten espacio de direcciones y otros recursos del proceso.

**84. C —** Compartir memoria hace los hilos ligeros pero exige sincronización.

**85. A —** Estados clásicos incluyen nuevo, preparado, ejecución, bloqueado/espera y terminado.

**86. D —** La planificación distribuye tiempo de CPU.

**87. C —** FCFS es simple, pero puede producir efecto convoy.

**88. A —** Round Robin es típico de tiempo compartido y usa quantum.

**89. B —** Starvation ocurre cuando una tarea espera indefinidamente por preferencia continua de otras.

**90. D —** SJF depende de estimar duración y puede perjudicar trabajos largos.

**91. B —** Context switching tiene coste y es parte de la multitarea.

**92. C —** Puede haber concurrencia en un solo núcleo mediante intercalado.

**93. A —** Las carreras se evitan con diseño y sincronización adecuados.

**94. D —** El mutex protege secciones críticas frente a acceso simultáneo incompatible.

**95. B —** Su contador representa unidades disponibles o eventos según diseño.

**96. C —** Monitor es un concepto de sincronización, no un dispositivo de visualización.

**97. D —** Las condiciones de Coffman incluyen exclusión mutua, retención y espera, no apropiación y espera circular.

**98. B —** Las aplicaciones usan syscalls para operaciones privilegiadas gestionadas por el SO.

**99. A —** La separación protege el sistema frente a fallos o acciones no autorizadas de aplicaciones.

**100. A —** Primero se debe identificar el recurso limitante: CPU, disco, red, bloqueo, etc.

# 6. Memoria, E/S, ficheros y estructuras de kernel

**101. D —** Cada proceso trabaja con direcciones virtuales que el sistema traduce y protege.

**102. D —** La traducción permite aislamiento y gestión flexible de memoria.

**103. A —** Paginación usa unidades de tamaño fijo para mapear memoria virtual y física.

**104. A —** Paginación y segmentación son técnicas distintas de gestión de memoria.

**105. C —** La TLB es una caché de traducciones de memoria.

**106. B —** Muchos page faults son parte normal de la memoria virtual; algunos implican traer datos desde almacenamiento.

**107. B —** Thrashing ocurre cuando la presión de memoria provoca paginación intensa.

**108. A —** FIFO, LRU/aproximaciones y otros algoritmos gestionan sustitución de páginas.

**109. C —** LRU se basa en la hipótesis de que uso reciente predice reutilización.

**110. D —** Las interrupciones permiten reaccionar a dispositivos sin sondeo constante.

**111. C —** Cada técnica tiene costes; muchos dispositivos usan interrupciones para evitar sondeo continuo.

**112. D —** Driver y firmware no son sinónimos: el driver corre en el sistema y controla el dispositivo.

**113. C —** Es una clasificación clásica de interfaces de E/S.

**114. C —** Journaling mejora recuperación del sistema de archivos, pero no sustituye backup.

**115. B —** ACL permite permisos más expresivos que modelos simples propietario/grupo/otros.

**116. A —** El modelo clásico usa r/w/x para propietario, grupo y otros.

**117. B —** Linux suele describirse como monolítico modular; los diseños reales pueden combinar técnicas.

**118. B —** El microkernel reduce funciones privilegiadas, a costa de más comunicación entre componentes.

**119. A —** Los SO reales mezclan ideas monolíticas, microkernel y módulos.

**120. D —** La mejora debe dirigirse al recurso saturado, no al componente más visible.

# 7. Windows, Linux y Unix: administración y seguridad

**121. C —** Windows moderno se basa en la línea NT.

**122. B —** Los servicios proporcionan funciones persistentes sin interfaz interactiva obligatoria.

**123. A —** El Registro es un almacén de configuración, no un sistema de archivos completo.

**124. D —** Los logs son esenciales para diagnóstico, seguridad y trazabilidad.

**125. D —** PowerShell permite administrar y automatizar Windows y otros entornos.

**126. A —** AD centraliza identidades, autenticación y políticas, pero es distinto del SO cliente/servidor.

**127. B —** NTFS es el sistema de archivos corporativo habitual de Windows.

**128. C —** Linux es el kernel; Ubuntu, Debian, RHEL y otras son distribuciones.

**129. D —** Las distribuciones empaquetan componentes y ciclo de vida.

**130. B —** Daemon es funcionalmente comparable a muchos servicios de Windows, aunque la implementación difiere.

**131. A —** systemd actúa como init y gestor de servicios en muchas distribuciones.

**132. B —** /proc expone información dinámica del kernel/procesos.

**133. C —** /sys expone objetos del kernel y dispositivos.

**134. D —** sudo facilita elevación controlada y auditable, preferible a compartir credenciales root.

**135. B —** Hardening básico es transversal a plataformas.

**136. D —** Hardening busca disminuir exposición y privilegios.

**137. C —** Los gestores de paquetes resuelven instalación y dependencias a partir de repositorios.

**138. A —** Linux sigue principios Unix, aunque no es simplemente “Unix comercial”.

**139. C —** APFS es el sistema de archivos moderno principal de Apple para macOS y otros dispositivos.

**140. A —** La plataforma debe justificarse por requisitos y operación, no por afinidad personal.

# 8. Sistemas móviles y casos integradores de plataforma

**141. A —** Android usa el kernel Linux con una plataforma y framework propios.

**142. D —** AOSP documenta un sandbox basado en UID y mecanismos de seguridad Linux.

**143. D —** Mínimo privilegio y transparencia reducen exposición de datos y sensores.

**144. C —** iOS deriva de Darwin y usa el kernel XNU.

**145. B —** Apple Platform Security destaca firma, validación e aislamiento de apps.

**146. B —** Mobile Device Management centraliza control de flotas corporativas.

**147. C —** La terminología evoluciona, pero UEM extiende gestión más allá del móvil.

**148. B —** Cifrado es una capa importante, pero no resuelve todos los riesgos.

**149. A —** La capacidad de parcheo y ciclo de soporte es un criterio de gestión de flota.

**150. B —** Identidad y permisos son controles diferentes.

**151. C —** BYOD requiere segmentación de datos, condiciones y controles de gestión adecuados.

**152. B —** La separación facilita mínimo privilegio, borrado selectivo y gobierno.

**153. A —** Los permisos deben ser proporcionales y comprensibles.

**154. A —** La abstracción por contratos facilita portabilidad e interoperabilidad.

**155. D —** El caso combina escalabilidad, estado, balanceo y disponibilidad.

**156. D —** La gestión corporativa debe contemplar alta, operación y retirada segura.

**157. A —** Observabilidad comparable permite operar plataformas heterogéneas con criterios comunes.

**158. D —** No todas las capas tienen el mismo patrón de rendimiento o continuidad.

**159. C —** La elección de plataforma es multicriterio y debe justificar trade-offs.

**160. C —** La solución integra II.01 y II.02: hardware, cloud, SO, seguridad, operación y continuidad.

# Mapa mental de alto rendimiento

* Computador: CPU + memoria + E/S + almacenamiento + interconexión. Socket ≠ núcleo ≠ hilo hardware.
* Memoria: registros/caché/RAM/almacenamiento. Localidad y latencia importan; capacidad ≠ rendimiento.
* Flynn: SISD / SIMD / MISD / MIMD. UMA ≠ NUMA. Mainframe ≠ supercomputador. Clúster ≠ grid ≠ cloud.
* Escalado: scale up = más recursos por nodo; scale out = más nodos. Escalabilidad ≠ elasticidad ≠ HA.
* Continuidad: SPOF, failover, RTO, RPO, backups y DR son piezas distintas y complementarias.
* Virtualización: hipervisor tipo 1 vs tipo 2; VM incluye SO invitado; contenedor comparte kernel del host.
* NIST cloud: autoservicio, acceso de red, pooling, elasticidad rápida y servicio medido; IaaS/PaaS/SaaS y despliegues.
* SO: proceso ≠ hilo; concurrencia ≠ paralelismo; user mode ≠ kernel mode; syscall = petición al kernel.
* Concurrencia: mutex/semaphore/monitor; carrera ≠ deadlock; Coffman incluye espera circular.
* Memoria: virtual ≠ física; paginación ≠ segmentación; MMU/TLB; page fault; thrashing.
* E/S: driver ≠ firmware; interrupción ≠ polling; DMA reduce intervención de CPU; block ≠ character device.
* Windows: NT, servicios, Registro, Event Log, NTFS, PowerShell, AD como directorio. Linux: kernel + distribución, daemon/systemd, /proc, /sys, rwx/sudo.
* Móvil: Android usa kernel Linux y sandbox por UID; iOS usa Darwin/XNU con firma y sandbox; MDM/UEM gobierna flotas.

# Trampas que deben quedar eliminadas

* CPU ≠ socket ≠ núcleo ≠ hilo.
* Throughput ≠ latencia.
* SIMD ≠ MIMD.
* UMA ≠ NUMA.
* Mainframe ≠ supercomputador.
* Clúster ≠ grid ≠ cloud.
* Scale up ≠ scale out.
* Escalabilidad ≠ elasticidad.
* HA ≠ backup ≠ DR.
* RTO ≠ RPO.
* Tipo 1 ≠ tipo 2.
* VM ≠ contenedor.
* IaaS ≠ PaaS ≠ SaaS.
* Nube híbrida ≠ multicloud.
* Proceso ≠ hilo.
* Concurrencia ≠ paralelismo.
* Mutex ≠ semáforo.
* Carrera ≠ deadlock.
* Modo usuario ≠ kernel.
* Memoria virtual ≠ RAM.
* Paginación ≠ segmentación.
* Driver ≠ firmware.
* Journaling ≠ backup.
* Windows ≠ Active Directory.
* Linux kernel ≠ distribución.
* Servicio Windows ≈ daemon en función, no en implementación.
* MDM/EMM/UEM ≠ sistema operativo móvil.

# Checklist de decisión en supuesto

* 1) Caracteriza carga: CPU, memoria, E/S, red, latencia, picos, datos y usuarios.
* 2) Elige arquitectura: nodo único, escala vertical/horizontal, HPC/aceleradores o cloud según perfil.
* 3) Elimina SPOF y define HA, backup, RTO/RPO y DR.
* 4) Justifica SO/plataforma por compatibilidad, soporte, hardening, automatización y competencias.
* 5) Diseña identidad, mínimo privilegio, logging, parcheo y observabilidad.
* 6) Para móviles, añade UEM/MDM, separación de datos, permisos, cifrado y ciclo de vida.
* 7) Compara TCO y reversibilidad: migración, operación, dependencia y salida.
