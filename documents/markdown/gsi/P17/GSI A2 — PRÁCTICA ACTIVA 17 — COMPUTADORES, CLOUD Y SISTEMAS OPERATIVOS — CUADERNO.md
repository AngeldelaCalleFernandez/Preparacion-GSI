GSI A2 — PRÁCTICA ACTIVA 17

**COMPUTADORES · ESCALABILIDAD · CLOUD · SISTEMAS OPERATIVOS**

160 preguntas · 4 opciones · refuerzo directo de II.01 e II.02

**CUADERNO DE TRABAJO**

# Cómo usar esta práctica

Objetivo: convertir II.01 e II.02 de cobertura parcial a entrenamiento fuerte, cubriendo el extremo completo del epígrafe: arquitectura de computadores, HPC, escalabilidad/cloud y fundamentos comparados de Windows, Linux/Unix y sistemas móviles.

Método: responde sin consultar apuntes. Marca además cada fallo como arquitectura/hardware, paralelismo/HPC, cloud/continuidad, procesos/concurrencia, memoria/E/S, plataforma o movilidad.

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

**1. ¿Qué describe mejor la función de la CPU?**

A) Ejecuta instrucciones y coordina operaciones sobre datos mediante unidades de control y ejecución.

B) Almacena de forma persistente todos los datos del sistema.

C) Sustituye al sistema operativo en la gestión de procesos.

D) Actúa únicamente como controlador de red.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**2. En terminología de hardware, ¿qué diferencia correctamente socket, núcleo e hilo hardware?**

A) Un socket aloja un procesador físico; un núcleo es una unidad de ejecución dentro de él y un hilo hardware es un contexto lógico de ejecución expuesto por el núcleo.

B) Socket y núcleo son sinónimos; hilo es un proceso del SO.

C) Un núcleo contiene siempre varios sockets.

D) Un hilo hardware es una partición de disco usada por la CPU.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**3. ¿Cuál es el orden habitual de la jerarquía de memoria desde menor latencia a mayor capacidad?**

A) RAM -> registros -> SSD -> caché.

B) Registros -> cachés -> RAM -> almacenamiento persistente.

C) SSD -> RAM -> caché -> registros.

D) Caché -> almacenamiento -> registros -> RAM.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**4. ¿Qué principio explotan principalmente las memorias caché?**

A) La independencia lógica de datos.

B) La compresión obligatoria de instrucciones.

C) La redundancia geográfica del almacenamiento.

D) La localidad temporal y espacial de los accesos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**5. ¿Qué afirmación sobre la caché L1 es la más adecuada en términos generales?**

A) Es el almacenamiento persistente principal del equipo.

B) Siempre es compartida por todos los servidores de un clúster.

C) Tiene más capacidad que la RAM del sistema.

D) Suele ser muy rápida y pequeña, próxima al núcleo de ejecución.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**6. ¿Qué papel tiene la MMU en un sistema moderno?**

A) Planifica rutas IP entre redes.

B) Convierte un HDD en un SSD.

C) Sustituye al compilador en tiempo de ejecución.

D) Participa en la traducción y protección de direcciones de memoria.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**7. ¿Qué describe mejor la RAM?**

A) Memoria persistente que conserva datos sin alimentación.

B) Memoria principal volátil usada por programas y sistema operativo durante la ejecución.

C) Memoria exclusiva de la tarjeta de red.

D) Sinónimo de caché L1.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**8. ¿Qué ventaja típica aporta un SSD/NVMe frente a un HDD mecánico?**

A) Mayor latencia por ausencia de partes móviles.

B) Necesidad de desfragmentación mecánica para arrancar.

C) Menor latencia de acceso y mayor rendimiento en muchas cargas de E/S.

D) Ejecución directa de instrucciones de CPU.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**9. ¿Para qué resulta especialmente apropiada una GPU?**

A) Para sustituir siempre al SGBD.

B) Para almacenar copias de seguridad de larga duración.

C) Para cargas con alto paralelismo de datos y muchas operaciones similares.

D) Para proporcionar direccionamiento IP al sistema.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**10. ¿Qué caracteriza a una FPGA?**

A) Permite configurar lógica hardware reprogramable para acelerar funciones específicas.

B) Es obligatoriamente un procesador general x86.

C) Es un tipo de memoria RAM no volátil.

D) Es un hipervisor de tipo 2.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**11. ¿Qué caracteriza a un ASIC?**

A) Es una máquina virtual gestionada por software.

B) Es un protocolo de almacenamiento distribuido.

C) Es un circuito diseñado para una función o familia de funciones específicas.

D) Es un sistema operativo móvil.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**12. ¿Qué métrica expresa mejor la cantidad total de trabajo procesado por unidad de tiempo?**

A) Latencia.

B) RPO.

C) Throughput o rendimiento agregado.

D) Tiempo de seek lógico de una página web.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**13. ¿Qué significa que un sistema tenga menor latencia?**

A) Que almacena necesariamente más datos.

B) Que una operación o petición tarda menos en completarse o responder.

C) Que usa más núcleos obligatoriamente.

D) Que siempre tiene mayor disponibilidad anual.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**14. ¿Cuál es la función principal de un bus o interconexión del sistema?**

A) Permitir el intercambio de datos, direcciones y señales entre componentes.

B) Ejecutar el código de usuario en modo privilegiado.

C) Reemplazar el sistema de archivos.

D) Resolver nombres DNS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**15. ¿Qué permite DMA en operaciones de E/S?**

A) Transferir datos entre dispositivo y memoria con menor intervención continuada de la CPU.

B) Convertir cualquier proceso en hilo.

C) Eliminar la necesidad de memoria RAM.

D) Asignar direcciones IP mediante DHCP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**16. ¿Qué diferencia conceptual existe entre arquitectura de 32 y 64 bits?**

A) La de 64 bits obliga a usar cloud.

B) Entre otros aspectos, cambia el tamaño natural de registros/direcciones y la capacidad de direccionamiento de memoria.

C) La de 32 bits no puede ejecutar ningún sistema operativo.

D) La de 64 bits elimina las cachés.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**17. ¿Qué afirmación es correcta sobre RISC y CISC como conceptos arquitectónicos?**

A) RISC significa que no existe memoria caché.

B) CISC es un tipo de sistema de archivos.

C) RISC y CISC clasifican redes por número de saltos.

D) Son enfoques de diseño del repertorio y ejecución de instrucciones; los procesadores modernos pueden combinar técnicas internas de ambos enfoques.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**18. En un servidor con varios sockets, ¿qué problema puede aparecer si una tarea accede constantemente a memoria remota en una topología NUMA?**

A) Pérdida automática de la licencia del sistema operativo.

B) Conversión del sistema en una arquitectura SISD.

C) Mayor latencia y menor rendimiento por mala localidad de memoria.

D) Eliminación de la caché de CPU.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**19. ¿Por qué no debe confundirse capacidad con rendimiento?**

A) Porque son exactamente la misma métrica.

B) Porque la capacidad solo existe en sistemas móviles.

C) Porque el rendimiento solo depende del tamaño del disco.

D) Un sistema puede almacenar o admitir mucho volumen y, sin embargo, responder lentamente bajo carga.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**20. Para una carga de IA con gran cantidad de operaciones matriciales paralelas, ¿qué decisión es más razonable evaluar?**

A) Sustituir toda la RAM por almacenamiento en cinta.

B) Usar aceleradores como GPU, comparando coste, memoria, software y rendimiento real de la carga.

C) Eliminar el sistema operativo.

D) Forzar un único hilo para maximizar paralelismo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 2. Paralelismo, HPC, mainframe, clúster y grid

**21. Según Flynn, ¿qué caracteriza a SISD?**

A) Una instrucción y múltiples flujos de datos.

B) Múltiples instrucciones y múltiples datos.

C) Un flujo de instrucciones y un flujo de datos.

D) Múltiples instrucciones sobre un único flujo de datos como caso típico general.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**22. Según Flynn, ¿qué caracteriza a SIMD?**

A) Un único dato controla múltiples sistemas operativos.

B) Múltiples instrucciones actúan siempre sobre un único dato.

C) No existe paralelismo de datos.

D) Una misma instrucción actúa sobre múltiples datos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**23. Según Flynn, ¿qué caracteriza a MIMD?**

A) Múltiples flujos de instrucciones operan sobre múltiples flujos de datos.

B) Una única instrucción sobre un único dato.

C) Una instrucción sobre múltiples datos.

D) Un modelo exclusivo de tarjetas de red.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**24. ¿Qué categoría de Flynn es poco habitual como arquitectura general de propósito común?**

A) SISD.

B) MISD.

C) SIMD.

D) MIMD.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**25. ¿Qué diferencia esencial hay entre UMA y NUMA?**

A) UMA usa solo discos y NUMA solo RAM.

B) NUMA elimina la necesidad de sincronización.

C) En UMA el tiempo de acceso a memoria es aproximadamente uniforme; en NUMA depende de la localidad del nodo de memoria.

D) UMA es un protocolo de red y NUMA una base de datos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**26. ¿Qué práctica favorece el rendimiento en NUMA?**

A) Mover aleatoriamente los datos entre nodos en cada acceso.

B) Desactivar todas las cachés.

C) Usar siempre un único proceso sin medir.

D) Mantener hilos y datos con buena afinidad/localidad cuando sea posible.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**27. ¿Qué caracteriza principalmente a un mainframe?**

A) Gran capacidad transaccional, E/S, disponibilidad y aislamiento de cargas.

B) Maximizar exclusivamente FLOPS científicos.

C) Ser necesariamente un ordenador portátil.

D) No admitir virtualización.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**28. ¿Qué caracteriza principalmente a un supercomputador?**

A) Maximizar capacidad de cálculo para cargas científicas o técnicas de gran escala.

B) Servir únicamente páginas HTML estáticas.

C) Ser siempre un servidor monoprocesador.

D) Priorizar exclusivamente impresión de documentos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**29. ¿Qué es un clúster de computación?**

A) Un conjunto de nodos independientes conectados y coordinados para prestar capacidad conjunta.

B) Una única CPU con varios registros.

C) Un sistema de archivos local sin red.

D) Un modelo de licencia de software.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**30. ¿Qué objetivo puede perseguir un clúster?**

A) Únicamente reducir el tamaño del código fuente.

B) Solo sustituir DNS.

C) Alto rendimiento, alta disponibilidad, balanceo o una combinación.

D) Eliminar todo punto de fallo sin redundancia.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**31. ¿Qué distingue conceptualmente a grid computing?**

A) Es sinónimo exacto de una única máquina virtual.

B) Obliga a que todos los nodos estén en la misma placa base.

C) Es un sistema de permisos POSIX.

D) Agrega recursos autónomos y potencialmente distribuidos entre distintos dominios para compartir capacidad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**32. ¿Qué afirmación es correcta sobre clúster, grid y cloud?**

A) Son conceptos relacionados con computación distribuida/recursos, pero no son sinónimos.

B) Son tres nombres para el mismo producto.

C) Cloud es siempre un clúster físico de un solo nodo.

D) Grid implica necesariamente SaaS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**33. En memoria compartida, ¿qué problema exige mecanismos de sincronización?**

A) La imposibilidad absoluta de compartir datos.

B) La ausencia de cualquier caché.

C) El hecho de que cada proceso tenga su propio disco físico.

D) Varias tareas pueden acceder y modificar estado compartido de forma concurrente.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**34. En memoria distribuida, ¿cómo se intercambian típicamente datos entre nodos?**

A) Leyendo todos la misma dirección física de RAM local.

B) Usando exclusivamente interrupciones de teclado.

C) Mediante comunicación/mensajes a través de una interconexión.

D) Mediante el registro de Windows.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**35. ¿Qué expresa la ley de Amdahl de forma cualitativa?**

A) El rendimiento siempre crece linealmente sin límite.

B) Duplicar nodos reduce siempre el rendimiento a la mitad.

C) La latencia de red desaparece con más procesadores.

D) La parte no paralelizable limita el speedup máximo aunque se añadan más recursos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**36. ¿Qué métrica se usa habitualmente para expresar capacidad de cálculo en HPC de coma flotante?**

A) RPO.

B) FLOPS y sus múltiplos, interpretados siempre junto con la carga/benchmark.

C) Número de usuarios de Active Directory.

D) TTL de DNS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**37. ¿Qué es un benchmark útil?**

A) Cualquier número de marketing sin metodología.

B) Solo la frecuencia nominal de la CPU.

C) Una prueba reproducible y representativa del tipo de carga que se quiere comparar.

D) Una prueba que cambia condiciones entre alternativas.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**38. Para una simulación científica que escala bien entre nodos, ¿qué infraestructura es razonable valorar?**

A) Un único móvil sin aceleradores por definición.

B) Un clúster HPC con interconexión adecuada y software paralelo.

C) Un servidor DNS como motor de cálculo.

D) Una impresora de red con almacenamiento.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**39. Para un core bancario con enorme volumen transaccional, continuidad y E/S, ¿qué familia histórica de sistemas encaja mejor conceptualmente?**

A) Supercomputador orientado exclusivamente a simulación científica.

B) Mainframe.

C) Microcontrolador de muy bajo consumo.

D) Sistema de archivos distribuido sin CPU.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**40. ¿Qué error de diseño puede degradar un algoritmo paralelo?**

A) Reducir contención.

B) Crear demasiada sincronización y comunicación respecto al trabajo útil.

C) Aumentar localidad de datos.

D) Equilibrar la carga entre trabajadores.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 3. Escalabilidad, disponibilidad y virtualización

**41. ¿Qué significa escalado vertical o scale up?**

A) Aumentar recursos de un nodo, por ejemplo CPU o RAM.

B) Añadir más nodos a la plataforma.

C) Reducir el número de réplicas.

D) Distribuir usuarios por DNS sin cambiar recursos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**42. ¿Qué significa escalado horizontal o scale out?**

A) Aumentar exclusivamente la frecuencia de una CPU.

B) Mover la aplicación a un disco más pequeño.

C) Añadir nodos o instancias para repartir la carga.

D) Desactivar balanceo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**43. ¿Qué es elasticidad?**

A) Sinónimo exacto de alta disponibilidad.

B) Copiar datos una vez al año.

C) Capacidad de ajustar recursos a la demanda, idealmente de forma rápida o automática.

D) Usar siempre la máxima capacidad contratada.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**44. ¿Qué diferencia hay entre escalabilidad y elasticidad?**

A) No existe diferencia.

B) Elasticidad solo se aplica a impresoras.

C) Escalabilidad implica obligatoriamente apagar servicios.

D) Escalabilidad es poder crecer; elasticidad añade adaptación dinámica a la demanda.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**45. ¿Qué objetivo tiene la alta disponibilidad?**

A) Eliminar la necesidad de copias de seguridad.

B) Garantizar que nunca exista ningún fallo físico.

C) Reducir interrupciones mediante redundancia, detección y failover.

D) Maximizar exclusivamente capacidad de disco.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**46. ¿Qué diferencia conceptual hay entre alta disponibilidad y tolerancia a fallos?**

A) Son siempre exactamente lo mismo.

B) La tolerancia a fallos busca seguir funcionando pese al fallo; HA puede aceptar una conmutación o interrupción mínima.

C) HA solo se aplica a desarrollo y tolerancia a fallos a redes.

D) Tolerancia a fallos exige una sola copia de cada componente.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**47. ¿Qué es un punto único de fallo (SPOF)?**

A) Un componente redundante que nunca participa en servicio.

B) Un componente cuyo fallo puede interrumpir por sí solo el servicio.

C) Un nodo de caché sin datos.

D) Un requisito de licencia.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**48. ¿Qué mide RTO?**

A) La pérdida máxima de datos expresada temporalmente.

B) La latencia de una consulta SQL.

C) El tiempo objetivo para recuperar un servicio tras una interrupción.

D) El número de réplicas de un clúster.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**49. ¿Qué mide RPO?**

A) El tiempo máximo de reparación física de una CPU.

B) La pérdida máxima de datos tolerable, expresada normalmente como ventana temporal.

C) El número de hilos por núcleo.

D) La disponibilidad mensual medida en porcentaje.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**50. ¿Qué es un hipervisor de tipo 1?**

A) Una aplicación que siempre necesita un SO anfitrión de escritorio.

B) Un contenedor OCI.

C) Un controlador de dominio.

D) Un hipervisor que se ejecuta directamente sobre el hardware o con una capa mínima especializada.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**51. ¿Qué es un hipervisor de tipo 2?**

A) Un firmware de red.

B) Un hipervisor que se ejecuta sobre un sistema operativo anfitrión.

C) Una CPU sin virtualización.

D) Un clúster de base de datos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**52. ¿Qué incluye normalmente una máquina virtual?**

A) Hardware virtual, un sistema operativo invitado y sus aplicaciones.

B) Solo una imagen de datos sin sistema operativo.

C) Exclusivamente un proceso que comparte siempre el kernel del host.

D) Una VLAN sin recursos de cómputo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**53. ¿Qué diferencia básica hay entre una VM y un contenedor?**

A) El contenedor siempre pesa más que una VM.

B) La VM no puede tener red.

C) El contenedor es un hipervisor de tipo 1.

D) La VM suele incluir un SO invitado; el contenedor comparte el kernel del host.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**54. ¿Qué riesgo operativo tiene sobredimensionar de forma permanente?**

A) Reducir siempre el coste total.

B) Aumentar coste e infrautilización sin aportar valor proporcional.

C) Eliminar la necesidad de monitorización.

D) Impedir cualquier escalado futuro.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**55. ¿Qué riesgo tiene infradimensionar una plataforma?**

A) Disponibilidad infinita.

B) Menor latencia garantizada.

C) Saturación, colas, latencia elevada y posible incumplimiento de servicio.

D) Eliminación del coste operativo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**56. Para escalar horizontalmente una aplicación web, ¿qué propiedad suele ayudar?**

A) Guardar toda sesión solo en el primer servidor.

B) Usar una dirección IP distinta por usuario sin balanceador.

C) Desactivar persistencia de datos.

D) Evitar estado exclusivo en memoria local de una única instancia o externalizarlo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**57. ¿Qué función tiene un balanceador de carga?**

A) Hacer copias de seguridad del código fuente.

B) Sustituir el sistema operativo invitado.

C) Convertir automáticamente una app en microservicios.

D) Distribuir peticiones o conexiones entre varias instancias según una política.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**58. ¿Qué debe acompañar a una estrategia de failover para que sea confiable?**

A) Detección de fallo, estado replicado o recuperable, pruebas y procedimiento de retorno/operación.

B) Solo un diagrama sin pruebas.

C) Una única copia del componente crítico.

D) Desactivar monitorización para evitar alertas.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**59. ¿Qué afirmación es correcta sobre backup y alta disponibilidad?**

A) Son controles distintos: HA reduce caída; backup permite recuperar datos/estado perdido.

B) Un clúster HA elimina cualquier necesidad de backup.

C) Backup garantiza continuidad sin tiempo de recuperación.

D) Ambos son exactamente el mismo mecanismo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**60. En una plataforma crítica, ¿qué diseño es más completo?**

A) Redundancia sin SPOF, monitorización, failover probado, backups y plan de recuperación ante desastres.

B) Solo duplicar CPU dentro del mismo servidor.

C) Confiar en que el hardware no falle.

D) Mantener una única copia sin pruebas.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 4. Cloud: modelos, responsabilidades y decisión arquitectónica

**61. Según NIST SP 800-145, ¿cuál es una característica esencial de cloud computing?**

A) Uso obligatorio de una marca concreta.

B) Un único centro de datos físico.

C) Ausencia total de medición de consumo.

D) Autoservicio bajo demanda.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**62. Según NIST, ¿qué significa broad network access?**

A) El servicio solo puede usarse desde una LAN privada.

B) La red debe ser siempre inalámbrica.

C) Todos los clientes comparten una única contraseña.

D) Las capacidades están disponibles por red mediante mecanismos estándar para distintos tipos de clientes.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**63. ¿Qué significa resource pooling en cloud?**

A) Cada cliente debe comprar físicamente todos los servidores.

B) Los recursos del proveedor se agrupan para servir a múltiples consumidores con asignación dinámica.

C) El proveedor no puede reasignar recursos.

D) Se elimina la multitenencia por definición.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**64. ¿Qué significa measured service?**

A) Cloud no registra consumo.

B) La facturación debe ser siempre una tarifa plana.

C) El uso de recursos puede medirse, controlarse y reportarse de forma apropiada al servicio.

D) Solo se mide el espacio en disco.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**65. ¿Qué significa rapid elasticity?**

A) Los recursos pueden aprovisionarse y liberarse rápidamente para ajustarse a la demanda.

B) Los servidores nunca cambian de tamaño.

C) El cliente debe esperar una compra física manual por cada pico.

D) Es sinónimo de copia de seguridad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**66. En IaaS, ¿qué recibe típicamente el cliente?**

A) Una aplicación final completa sin gestionar nada.

B) Solo un lenguaje de programación sin infraestructura.

C) Únicamente correo electrónico como SaaS.

D) Cómputo, red y almacenamiento virtualizados, gestionando normalmente SO y aplicaciones.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**67. En PaaS, ¿qué gestiona normalmente el proveedor además de la infraestructura?**

A) El código de negocio del cliente obligatoriamente.

B) Todos los datos del cliente en nombre de éste.

C) La plataforma/runtime y servicios de soporte para desplegar aplicaciones.

D) La estrategia de producto de la organización.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**68. En SaaS, ¿qué consume el usuario?**

A) Solo servidores físicos sin sistema operativo.

B) Una CPU sin almacenamiento.

C) Un hipervisor local de tipo 1.

D) Una aplicación completa operada principalmente por el proveedor.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**69. ¿Qué es una nube pública?**

A) Infraestructura/servicios ofrecidos por un proveedor para múltiples clientes conforme a su modelo.

B) Una nube exclusiva para una sola organización por definición.

C) Un CPD sin virtualización.

D) Un sinónimo de multicloud.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**70. ¿Qué es una nube privada?**

A) Una infraestructura cloud dedicada a una organización, alojada interna o externamente.

B) Cualquier servidor físico sin automatización.

C) Un servicio SaaS usado por millones de clientes.

D) Una red social corporativa.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**71. ¿Qué caracteriza a una nube híbrida?**

A) Usar dos proveedores públicos sin integración.

B) Integra entornos privados y públicos con mecanismos de interoperabilidad/operación conjunta.

C) Mantener todo exclusivamente on-premise.

D) Ejecutar una única VM local.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**72. ¿Qué es multicloud?**

A) Uso de servicios de más de un proveedor cloud.

B) Sinónimo obligatorio de nube híbrida.

C) Uso de varias zonas del mismo centro de datos físico.

D) Una licencia de virtualización.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**73. ¿Qué diferencia hay entre región y zona de disponibilidad en muchas nubes?**

A) Una zona siempre contiene varias regiones.

B) Una región agrupa ubicaciones geográficas; las zonas buscan aislar fallos dentro de la región.

C) Son términos de licenciamiento de software.

D) No tienen relación con diseño de resiliencia.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**74. ¿Qué principio debe aplicarse al IAM cloud?**

A) Compartir una cuenta administradora entre todos.

B) Mínimo privilegio y separación de responsabilidades.

C) Dar permisos globales por comodidad.

D) Desactivar trazabilidad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**75. ¿Qué significa responsabilidad compartida en cloud?**

A) El proveedor asume absolutamente toda la seguridad en cualquier modelo.

B) El cliente administra físicamente los centros de datos del proveedor.

C) No existen obligaciones del cliente en SaaS.

D) Proveedor y cliente conservan responsabilidades diferentes según el modelo de servicio.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**76. ¿Qué riesgo describe vendor lock-in?**

A) Dependencia de servicios, APIs o formatos que hacen costosa la migración a otra solución.

B) Capacidad de salir fácilmente sin coste.

C) Redundancia automática entre proveedores.

D) Una técnica de cifrado.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**77. ¿Qué debe incluir una evaluación TCO cloud frente a on-premise?**

A) Solo el precio mensual de una VM.

B) Solo el coste de compra del servidor local.

C) Cómputo, almacenamiento, red, licencias, operación, personal, migración, seguridad y salida, entre otros.

D) Ignorar tráfico y soporte.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**78. ¿Qué afirmación es correcta sobre cloud y administración?**

A) Cloud elimina cualquier necesidad de arquitectura.

B) No hace falta monitorización.

C) Cloud cambia y automatiza parte de la administración, pero no elimina gobierno, seguridad ni operación.

D) El cliente deja de ser responsable de sus datos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**79. Para una aplicación con picos impredecibles y periodos de baja demanda, ¿qué propiedad cloud aporta valor directo?**

A) Fijar para siempre la capacidad máxima.

B) Eliminar métricas de consumo.

C) Elasticidad y aprovisionamiento bajo demanda.

D) Usar un único nodo sin posibilidad de cambio.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**80. Una Administración quiere migrar a cloud sin quedar atrapada. ¿Qué requisito es más maduro?**

A) Confiar en una promesa comercial sin plan de salida.

B) Definir portabilidad, formatos, exportación, documentación, costes de salida y pruebas de reversibilidad.

C) Prohibir cualquier copia de datos.

D) No documentar dependencias para simplificar.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 5. Sistemas operativos: procesos, hilos, planificación y concurrencia

**81. ¿Cuál es la función general de un sistema operativo?**

A) Compilar obligatoriamente todo el código fuente.

B) Sustituir todas las aplicaciones de negocio.

C) Actuar únicamente como firewall.

D) Gestionar hardware y ofrecer abstracciones/servicios a aplicaciones y usuarios.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**82. ¿Qué es un proceso?**

A) Una dirección IP.

B) Un programa en ejecución con espacio de direcciones, estado y recursos asociados.

C) Un archivo de configuración sin ejecutar.

D) Un núcleo físico de CPU.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**83. ¿Qué es un hilo?**

A) Un proceso completamente aislado con su propio kernel.

B) Un dispositivo de bloque.

C) Una unidad de ejecución dentro de un proceso que comparte gran parte de sus recursos con otros hilos del mismo proceso.

D) Un socket físico de CPU.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**84. ¿Qué diferencia básica hay entre proceso e hilo?**

A) No existe ninguna diferencia.

B) Los hilos siempre tienen su propio sistema operativo.

C) Los procesos están más aislados; los hilos del mismo proceso comparten memoria y recursos.

D) Un proceso es hardware y un hilo es almacenamiento.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**85. ¿Cuál es un estado clásico de proceso?**

A) Preparado (ready), esperando CPU.

B) Encriptado.

C) Montado.

D) Indexado.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**86. ¿Qué hace el planificador de CPU?**

A) Selecciona rutas BGP.

B) Asigna licencias de software.

C) Formatea discos automáticamente.

D) Selecciona qué tarea/hilo ejecutará el procesador según la política del SO.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**87. ¿Qué caracteriza a FCFS/FIFO?**

A) Da siempre prioridad al proceso más corto conocido.

B) Usa obligatoriamente quantum.

C) Atiende trabajos aproximadamente en orden de llegada.

D) Es un algoritmo de cifrado.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**88. ¿Qué caracteriza a Round Robin?**

A) Reparte CPU mediante quantums de tiempo entre tareas preparadas.

B) Ejecuta siempre un proceso hasta terminar.

C) Selecciona por número de archivos abiertos.

D) No permite preempción.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**89. ¿Qué riesgo tienen las prioridades si no existe mecanismo de envejecimiento u otra compensación?**

A) Desaparición de la memoria virtual.

B) Inanición de tareas de baja prioridad.

C) Duplicación de sockets físicos.

D) Conversión automática en deadlock.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**90. ¿Qué objetivo tiene SJF?**

A) Maximizar siempre el quantum.

B) Seleccionar la tarea con más memoria.

C) Evitar cualquier estimación de duración.

D) Favorecer trabajos con menor duración estimada para reducir espera media en condiciones ideales.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**91. ¿Qué es un cambio de contexto?**

A) Cambiar el sistema de archivos de NTFS a ext4.

B) Guardar/restaurar estado para cambiar la CPU de una tarea a otra.

C) Mover una VM a otra región cloud por definición.

D) Renombrar un proceso.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**92. ¿Qué diferencia hay entre concurrencia y paralelismo?**

A) Son exactamente sinónimos.

B) Paralelismo solo existe con un único núcleo.

C) Concurrencia permite progreso solapado de tareas; paralelismo implica ejecución simultánea real.

D) Concurrencia exige varias máquinas físicas.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**93. ¿Qué es una condición de carrera?**

A) Un resultado dependiente del orden/timing de accesos concurrentes a estado compartido.

B) Una ruta de red más corta.

C) Un error de licencia de software.

D) Un algoritmo de compresión.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**94. ¿Para qué se usa un mutex?**

A) Para resolver DNS.

B) Para paginar memoria al disco.

C) Para cifrar un volumen.

D) Para proporcionar exclusión mutua sobre una sección o recurso compartido.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**95. ¿Qué permite un semáforo de conteo?**

A) Ejecutar siempre un único hilo por sistema.

B) Controlar acceso concurrente a un número limitado de recursos o señalizar disponibilidad.

C) Sustituir la MMU.

D) Crear usuarios del SO.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**96. ¿Qué es un monitor en concurrencia?**

A) Una pantalla física obligatoria.

B) Un router de capa 3.

C) Una abstracción que encapsula estado y sincronización, normalmente con exclusión mutua y condiciones.

D) Un formato de disco.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**97. ¿Cuál es una condición clásica necesaria para deadlock?**

A) Cifrado de memoria.

B) Alta disponibilidad.

C) Multitenencia cloud.

D) Espera circular.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**98. ¿Qué es una llamada al sistema (system call)?**

A) Una llamada HTTP a un SaaS necesariamente.

B) Un mecanismo por el que un programa solicita un servicio al kernel.

C) Una interrupción eléctrica.

D) Un cambio de licencia.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**99. ¿Qué diferencia hay entre modo usuario y modo kernel?**

A) El modo kernel tiene privilegios superiores; el modo usuario restringe operaciones directas sobre recursos críticos.

B) Modo usuario siempre ejecuta más rápido por definición.

C) Modo kernel es una cuenta de Active Directory.

D) No existe separación de privilegios en sistemas modernos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**100. Si un servicio tiene muchos hilos bloqueados esperando E/S, ¿qué conclusión es más razonable?**

A) La carga puede estar limitada por E/S; añadir CPU no garantiza resolver el cuello de botella.

B) La solución es siempre duplicar la frecuencia de CPU.

C) La espera de E/S demuestra que no hay concurrencia.

D) Hay que desactivar interrupciones.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 6. Memoria, E/S, ficheros y estructuras de kernel

**101. ¿Qué proporciona la memoria virtual a un proceso?**

A) Acceso directo a toda la RAM de otros procesos.

B) Persistencia garantizada tras apagar el equipo.

C) Una copia de seguridad automática de archivos.

D) Un espacio de direcciones lógico protegido y abstraído de la memoria física concreta.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**102. ¿Qué diferencia básica hay entre dirección virtual y física?**

A) Son siempre idénticas.

B) La física solo existe en cloud.

C) La virtual se almacena únicamente en DNS.

D) La virtual pertenece al espacio lógico del proceso y se traduce a una ubicación física mediante hardware/SO.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**103. ¿Qué es paginación?**

A) Dividir memoria virtual y física en unidades de tamaño fijo llamadas páginas/marcos.

B) Dividir una red en VLAN.

C) Dividir procesos en usuarios.

D) Cifrar bloques de disco.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**104. ¿Qué caracteriza a la segmentación clásica?**

A) Usa unidades lógicas de tamaño variable asociadas a partes del programa/datos.

B) Siempre usa páginas de tamaño fijo.

C) Es un sistema de archivos.

D) Es un algoritmo de routing.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**105. ¿Qué almacena conceptualmente una TLB?**

A) Contraseñas de usuarios.

B) Rutas BGP.

C) Traducciones recientes de direcciones virtuales a físicas para acelerar acceso.

D) Copias de seguridad de disco.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**106. ¿Qué es un page fault?**

A) Un fallo físico obligatorio de la RAM.

B) Un evento cuando una página necesaria no está actualmente mapeada/residente de la forma requerida y el SO debe atenderlo.

C) Una pérdida de red.

D) Un error de licencia.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**107. ¿Qué es thrashing?**

A) Uso eficiente de caché.

B) Exceso de fallos de página y movimiento de memoria que deja poco tiempo para trabajo útil.

C) Compresión de disco sin impacto.

D) Un algoritmo de planificación de red.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**108. ¿Qué intenta un algoritmo de reemplazo de páginas?**

A) Elegir qué página retirar de memoria cuando se necesita liberar un marco.

B) Seleccionar el siguiente router.

C) Elegir qué usuario inicia sesión.

D) Decidir qué licencia instalar.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**109. ¿Qué ventaja conceptual busca LRU?**

A) Eliminar cualquier page fault futuro.

B) Evitar el uso de memoria virtual.

C) Retirar páginas no usadas recientemente, aprovechando localidad temporal.

D) Ordenar procesos por prioridad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**110. ¿Qué es una interrupción de hardware?**

A) Una petición DNS.

B) Una licencia de uso.

C) Un fichero ejecutable.

D) Una señal que notifica a la CPU un evento que requiere atención.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**111. ¿Qué diferencia hay entre interrupción y polling?**

A) Son exactamente lo mismo.

B) Polling siempre consume cero CPU.

C) La interrupción notifica eventos; polling consulta repetidamente el estado.

D) Las interrupciones solo existen en almacenamiento cloud.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**112. ¿Qué es un driver?**

A) Firmware grabado necesariamente en la placa.

B) Una aplicación SaaS.

C) Un algoritmo de scheduling.

D) Software que permite al SO controlar un dispositivo concreto mediante una interfaz apropiada.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**113. ¿Qué diferencia conceptual hay entre dispositivo de bloque y de carácter?**

A) El de bloque siempre es una GPU y el de carácter una CPU.

B) No existe ninguna diferencia en sistemas operativos.

C) El de bloque trabaja con unidades direccionables de datos; el de carácter expone típicamente un flujo secuencial.

D) El de carácter solo se usa en cloud.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**114. ¿Qué aporta journaling a un sistema de archivos?**

A) Cifrar obligatoriamente todo el disco.

B) Eliminar la necesidad de copias.

C) Registrar cambios/operaciones para facilitar recuperación de consistencia tras fallos.

D) Convertir cualquier archivo en ejecutable.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**115. ¿Qué es una ACL de fichero?**

A) Un índice de base de datos.

B) Una lista de control de acceso que asigna permisos a identidades o grupos.

C) Una tabla de páginas de memoria.

D) Un protocolo de correo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**116. En Unix/Linux, ¿qué representan rwx?**

A) Permisos de lectura, escritura y ejecución.

B) Reinicio, warning y XML.

C) Ruta, web y extensión.

D) RAM, workspace y XFS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**117. ¿Qué caracteriza a un kernel monolítico?**

A) Todo servicio se ejecuta obligatoriamente fuera del kernel.

B) Muchos servicios del sistema se ejecutan en espacio privilegiado del kernel.

C) No puede cargar drivers.

D) No soporta multitarea.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**118. ¿Qué idea busca un microkernel?**

A) Ejecutar todas las aplicaciones en modo kernel.

B) Mantener en el núcleo mínimo funciones esenciales y mover más servicios a espacios separados.

C) Eliminar comunicación entre componentes.

D) Usar una sola tarea para todo el sistema.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**119. ¿Qué significa que un kernel sea híbrido?**

A) Combina decisiones de diseño de varias familias, sin encajar de forma pura en un único modelo.

B) Que alterna entre Windows y Linux cada segundo.

C) Que necesita dos CPUs de fabricantes distintos.

D) Que carece de gestión de memoria.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**120. Un servidor sufre alta latencia de disco y CPU baja. ¿Qué acción es más razonable antes de ampliar CPU?**

A) Duplicar CPU sin medir.

B) Desactivar la caché.

C) Reducir memoria para forzar más paginación.

D) Medir cola, IOPS, throughput y patrón de acceso del almacenamiento y optimizar ese cuello de botella.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 7. Windows, Linux y Unix: administración y seguridad

**121. ¿De qué familia tecnológica deriva Windows moderno?**

A) De MS-DOS exclusivamente sin arquitectura NT.

B) De un kernel Linux.

C) De la familia Windows NT.

D) De BSD sin componentes propios.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**122. ¿Qué es un servicio de Windows?**

A) Una partición NTFS.

B) Un proceso o componente gestionado para ejecutar funciones en segundo plano bajo el Service Control Manager.

C) Una cuenta de Active Directory.

D) Un paquete RPM.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**123. ¿Qué función cumple el Registro de Windows?**

A) Almacenar configuración estructurada del sistema y muchas aplicaciones.

B) Ser el único sistema de archivos de Windows.

C) Sustituir todos los logs.

D) Actuar como hipervisor.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**124. ¿Para qué sirve Windows Event Log?**

A) Compilar controladores.

B) Asignar memoria física.

C) Gestionar paquetes DEB.

D) Registrar eventos de sistema, seguridad y aplicaciones para operación y auditoría.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**125. ¿Qué es PowerShell?**

A) Un sistema de archivos.

B) Un hipervisor bare metal.

C) Un protocolo de routing.

D) Un entorno de shell y automatización orientado a objetos y administración.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**126. ¿Qué es Active Directory en relación con Windows?**

A) Un servicio de directorio e identidad usado en entornos corporativos; no es el sistema operativo en sí.

B) El kernel de Windows.

C) El sistema de archivos por defecto.

D) Una GPU virtual.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**127. ¿Qué características se asocian a NTFS?**

A) Ausencia de permisos.

B) ACL, journaling y capacidades avanzadas de sistema de archivos.

C) Uso exclusivo en Linux.

D) Ser un protocolo de red.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**128. ¿Qué es Linux estrictamente?**

A) Una única distribución concreta.

B) Un lenguaje de programación.

C) El kernel; las distribuciones añaden userland, gestor de paquetes y otras herramientas.

D) Un protocolo web.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**129. ¿Qué es una distribución Linux?**

A) Una única llamada al sistema.

B) Una CPU virtual.

C) Un algoritmo de caché.

D) Un sistema que integra kernel, herramientas, bibliotecas, paquetes, instalador y políticas de mantenimiento.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**130. ¿Qué es un daemon en Unix/Linux?**

A) Un bloque de memoria.

B) Un proceso de servicio que se ejecuta normalmente en segundo plano.

C) Un usuario root obligatorio.

D) Una VLAN.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**131. ¿Qué papel tiene systemd en muchas distribuciones Linux?**

A) Gestionar unidades y servicios, arranque y otras funciones de sistema.

B) Ser el kernel Linux.

C) Sustituir el sistema de archivos.

D) Ser un compilador C.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**132. ¿Qué contiene /proc en Linux de forma conceptual?**

A) Archivos de usuario permanentes exclusivamente.

B) Una interfaz de sistema de archivos virtual con información de procesos y kernel.

C) El firmware de la BIOS.

D) Copias de seguridad externas.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**133. ¿Qué contiene /sys en Linux de forma conceptual?**

A) Solo documentos ofimáticos.

B) El registro de Windows.

C) Una interfaz de sistema de archivos virtual relacionada con dispositivos, kernel y modelo del sistema.

D) Un repositorio Git obligatorio.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**134. ¿Para qué se usa sudo?**

A) Para desactivar permisos del sistema.

B) Para reemplazar el kernel.

C) Para convertir un usuario en root permanentemente sin control.

D) Para ejecutar acciones con privilegios elevados conforme a política y autenticación.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**135. ¿Qué buena práctica aplica tanto a Windows como a Linux?**

A) Usar siempre una cuenta administradora para tareas diarias.

B) Separar cuentas administrativas, aplicar mínimo privilegio, parchear y registrar eventos.

C) Desactivar logs para ahorrar espacio.

D) Compartir contraseñas entre técnicos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**136. ¿Qué es hardening?**

A) Aumentar el número de aplicaciones instaladas sin revisión.

B) Desactivar autenticación.

C) Eliminar actualizaciones.

D) Reducir superficie de ataque mediante configuración segura, servicios mínimos, parches y controles.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**137. ¿Qué diferencia hay entre paquete y repositorio de paquetes?**

A) Son sinónimos exactos.

B) El repositorio solo puede contener código fuente.

C) El paquete contiene software/metadatos; el repositorio organiza y distribuye paquetes y actualizaciones.

D) Un paquete es siempre un kernel completo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**138. ¿Qué diferencia conceptual hay entre Unix y Linux?**

A) Unix es una familia/tradición y conjunto de sistemas/especificaciones; Linux es un kernel tipo Unix usado en múltiples distribuciones.

B) Linux es una edición de Windows.

C) Unix es exclusivamente un sistema móvil.

D) No existe relación histórica o conceptual.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**139. ¿Qué sistema de archivos moderno usa macOS principalmente?**

A) NTFS como formato nativo principal.

B) ext4 como formato nativo principal.

C) APFS.

D) FAT12 como formato moderno principal.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**140. Una organización debe elegir Windows o Linux para un servicio. ¿Qué criterio es más profesional?**

A) Compatibilidad, soporte, seguridad, competencias, integración, automatización, ciclo de vida y TCO.

B) Preferencia personal del administrador.

C) Elegir siempre el sistema con más comandos conocidos.

D) Decidir solo por coste de licencia inicial.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 8. Sistemas móviles y casos integradores de plataforma

**141. ¿Sobre qué kernel se apoya Android?**

A) Linux.

B) Windows NT.

C) XNU exclusivamente sin componentes Linux.

D) Un microkernel propio sin Linux.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**142. ¿Cómo aísla Android las aplicaciones de forma básica?**

A) Ejecuta todas las apps con el mismo usuario root.

B) Comparte por defecto todos los datos entre apps.

C) Desactiva la separación de procesos.

D) Asigna UID y procesos separados, aplicando sandbox a nivel del kernel y permisos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**143. ¿Qué principio debe aplicarse a los permisos de una app móvil?**

A) Pedir todos los permisos al instalar por comodidad.

B) Usar siempre permisos de administrador.

C) Conceder acceso completo a otras apps.

D) Solicitar solo capacidades necesarias y de forma proporcional a la función.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**144. ¿En qué se basa iOS a nivel de sistema?**

A) En Windows NT.

B) En un kernel Linux estándar sin cambios.

C) En Darwin/XNU y componentes de plataforma Apple.

D) En DOS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**145. ¿Qué controles caracterizan la seguridad de apps en iPhone/iPad?**

A) Ejecución de cualquier binario sin firma por defecto.

B) Firma de código, distribución controlada y sandboxing, entre otras capas.

C) Todas las apps con acceso directo al kernel.

D) Ausencia de aislamiento entre aplicaciones.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**146. ¿Qué función tiene MDM?**

A) Sustituir la red móvil del operador.

B) Administrar dispositivos, configuración, políticas, aplicaciones y cumplimiento de forma centralizada.

C) Actuar como CPU del dispositivo.

D) Convertir Android en iOS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**147. ¿Qué relación existe entre MDM, EMM y UEM?**

A) Son tres protocolos de routing.

B) MDM es un sistema de archivos y EMM una CPU.

C) Son familias de gestión con alcance creciente/solapado; UEM busca unificar múltiples tipos de endpoint.

D) UEM solo gestiona impresoras.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**148. ¿Qué aporta el cifrado de dispositivo?**

A) Protección absoluta aunque el dispositivo esté desbloqueado y comprometido.

B) Protección de datos en reposo, especialmente si se combina con autenticación y gestión adecuada de claves.

C) Eliminación de cualquier riesgo de phishing.

D) Sustitución de las copias de seguridad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**149. ¿Por qué son importantes las actualizaciones del sistema móvil?**

A) Corrigen vulnerabilidades y mejoran seguridad/compatibilidad; la gestión debe controlar ciclo de soporte.

B) Porque borran siempre los datos.

C) Porque sustituyen la necesidad de autenticación.

D) Porque eliminan cualquier dependencia de aplicaciones.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**150. ¿Qué diferencia hay entre autenticación biométrica y autorización?**

A) Son exactamente lo mismo.

B) La biometría puede ayudar a autenticar al usuario; la autorización decide qué acciones puede realizar.

C) La autorización identifica huellas dactilares.

D) La autenticación asigna permisos de aplicación sin identidad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**151. ¿Qué riesgo aumenta con dispositivos BYOD sin una política clara?**

A) Desaparición automática de malware.

B) Cumplimiento garantizado por ser dispositivo personal.

C) Mezcla de datos personales/corporativos, falta de control de parcheo y dificultad de borrado/retirada selectiva.

D) Menor necesidad de identidad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**152. ¿Qué ventaja aporta un perfil de trabajo o contenedor corporativo móvil?**

A) Dar acceso root a todas las apps.

B) Separar datos y aplicaciones corporativas de la parte personal con políticas diferenciadas.

C) Eliminar toda privacidad del usuario.

D) Compartir automáticamente credenciales entre perfiles.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**153. Una app corporativa necesita cámara solo al escanear documentos. ¿Qué enfoque es más adecuado?**

A) Solicitar el permiso de cámara de forma contextual y limitarlo a la función necesaria.

B) Exigir cámara, micrófono, contactos y ubicación desde el primer arranque sin motivo.

C) Ejecutar la app como root.

D) Desactivar el sandbox.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**154. Un servicio web corporativo se ejecutará en varias plataformas. ¿Qué capa debería mantener contratos estables para reducir dependencia del SO?**

A) APIs/servicios y formatos bien definidos, separando lógica de negocio de detalles de plataforma.

B) Llamadas directas a drivers desde cada cliente.

C) Acceso a memoria física compartida por Internet.

D) Una única ruta absoluta local codificada en todos los clientes.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**155. Una aplicación crítica presenta picos de CPU, muchas sesiones y dependencia de una única instancia. ¿Qué mejora es más completa?**

A) Aumentar disco sin medir CPU.

B) Mantener sesiones únicamente en RAM local de una instancia.

C) Desactivar logs.

D) Diseñar escalado horizontal, externalizar estado, balancear, monitorizar y eliminar SPOF.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**156. Una organización móvil necesita poder retirar solo los datos corporativos de un empleado que deja la entidad. ¿Qué capacidad es especialmente útil?**

A) Formatear siempre el dispositivo personal completo sin política.

B) Compartir la cuenta del empleado con el sustituto.

C) Eliminar la autenticación.

D) Gestión MDM/UEM con separación de datos y borrado selectivo cuando la plataforma lo soporte.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**157. Un servidor Windows y otro Linux ofrecen el mismo servicio. ¿Qué control transversal permite comparar su salud operativa?**

A) Métricas y logs homogéneos de CPU, memoria, E/S, red, disponibilidad y errores.

B) El color del escritorio.

C) El nombre del sistema de archivos por sí solo.

D) La cantidad de comandos disponibles.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**158. Una carga científica requiere gran paralelismo; el portal de acceso requiere alta disponibilidad. ¿Qué diseño es más razonable?**

A) Usar un único componente para todo sin redundancia.

B) Convertir el portal en un supercomputador monolítico.

C) Eliminar colas y monitorización.

D) Separar el front de servicio resiliente del backend HPC, dimensionando cada capa según su perfil.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**159. ¿Qué criterio resume mejor una selección tecnológica madura entre móvil, servidor, cloud y HPC?**

A) Elegir la tecnología más nueva sin analizar requisitos.

B) Usar siempre la misma plataforma para cualquier carga.

C) Alinear arquitectura, rendimiento, seguridad, soporte, operación, coste y reversibilidad con los requisitos reales.

D) Decidir solo por frecuencia de CPU.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**160. Caso final: un organismo necesita renovar infraestructura, mantener aplicaciones Windows/Linux, gestionar móviles y absorber picos. ¿Qué enfoque es más completo?**

A) Migrar todo a una única tecnología sin inventario.

B) Comprar el servidor más grande y eliminar monitorización.

C) Inventariar cargas y dependencias, clasificar requisitos, combinar capacidad adecuada/on-prem-cloud, diseñar HA/escalado, gobernar identidades y UEM, y probar recuperación/reversibilidad.

D) Permitir móviles sin gestión para reducir costes.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# Registro de errores

Revisa los fallos a las 24–72 h. Escribe la regla correcta en una frase y vuelve a resolver la pregunta sin mirar.

| **N.º** | **Tema** | **Tipo de error** | **Regla correcta** | **Revisión** |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
