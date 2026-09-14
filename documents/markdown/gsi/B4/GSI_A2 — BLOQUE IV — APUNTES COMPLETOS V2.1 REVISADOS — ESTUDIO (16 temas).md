# GSI A2 — BLOQUE IV

## APUNTES COMPLETOS V2.1 REVISADOS — Sistemas y comunicaciones (16 temas)

Edición de estudio: agosto de 2026.

**Método de elaboración:** programa oficial vigente de GSI A2 → selección del material PreparaTIC/A1 útil → eliminación de profundidad A1 ajena al epígrafe → actualización de tecnología y normativa → cobertura de huecos → teoría desarrollada → datos de test → aplicación al supuesto → resumen.

Este documento es el **material principal de estudio** del Bloque IV. El «Resumen maestro de repaso» se conserva separado para segundas vueltas y memoria activa. Ante discrepancias prevalecen el BOE vigente, la normativa consolidada, los estándares y la documentación oficial actual.

**Límite de fuentes:** se utilizan únicamente las fuentes originales del proyecto de estudio (PUBLICADOS/RELEASE/P30) y fuentes oficiales actuales para completar o actualizar. No se emplean como fuente los materiales del proyecto independiente GSI\_B1.

## 0. Control de fuentes y criterio de depuración

| **Tema** | **Base A1 / apoyo** | **Estado observado** | **Criterio V2.1** |
| --- | --- | --- | --- |
| IV.01 | A1 059 + 060/061 | A1 059 v31.1, 10/03/2026 | Aprovechar fundamentos y administración; completar operación Windows/Linux y software base. |
| IV.02 | A1 063 + apoyo operativo | A1 063, 01/02/2022 | Usar SGBD como base conceptual y redactar administración DBA específica: instancia, seguridad, backup, HA, rendimiento. |
| IV.03 | A1 056 + 101/105 | 056 v31.1, 11/03/2026 | Profundizar mantenimiento, incidentes, política de copias, restauración, RPO/RTO y ejercicios. |
| IV.04 | A1 100/102 + operación | Cobertura A1 parcial | Construcción específica GSI: configuración, cambio, automatización, observabilidad, rendimiento y capacidad. |
| IV.05 | A1 056 + 057 | 056 muy actual; 057 histórico | 056 como columna vertebral; modernizar protocolos, virtualización y administración. |
| IV.06 | A1 053/056/057/128/132 + RELEASE | Fuentes heterogéneas | Redacción propia de CPD: física, energía, climatización, HA, balanceo, virtualización y DR. |
| IV.07 | A1 108 + 110 + 112 | Base conceptual amplia | Conservar física/cableado estable y actualizar velocidades, PoE y diseño. |
| IV.08 | A1 118 + 119 | 118 actualizado 12/09/2020 | Mantener Ethernet/VLAN/STP; actualizar seguridad, agregación y diseño LAN. |
| IV.09 | A1 118 + 119 | Cobertura directa pero antigua | Administración operativa: FCAPS, SNMPv3, syslog, flujos/telemetría y troubleshooting. |
| IV.10 | A1 113 + 108 + 120 | Compuesto | WDM/MPLS/routing clásicos + SD-WAN actualizado; evitar catálogos de operador. |
| IV.11 | A1 114 | v30.1, 05/09/2024 | Fuente sólida; actualizar Wi-Fi 7/802.11be y conservar fundamentos RF/seguridad. |
| IV.12 | A1 125 + 079/080/131 + ENS | 125 v30.1, 09/09/2024 | Tema crítico: redes, AAA, PKI, protocolos seguros, VPN, endpoint y ENS. |
| IV.13 | A1 109 + 115 + 117 | Compuesto | Arquitectura Internet estable + HTTP/3/QUIC e IoT como actualización. |
| IV.14 | A1 116 | 24/09/2024, 16 págs. tema | Aprovechar NGN/IMS/SIP/RTP/QoS y orientar a arquitectura y supuesto. |
| IV.15 | A1 123 + 054/124 | 123 v31.1, 15/02/2026 | Fuente móvil muy actual; completar MDM/EMM/UEM y 5G-Advanced. |
| IV.16 | A1 130 + 129 | 130 06/09/2024, 11 págs. resumen | Aprovechar protocolos, QoS y sala; añadir WebRTC/NAT traversal y cálculo. |

Fecha de control de actualidad: 21/08/2026. Los números de versión de productos se evitan salvo cuando aclaran un estándar o ciclo de soporte; se priorizan conceptos estables de examen.

# IV.01 — Administración del sistema operativo y software de base

**Cobertura oficial que debe quedar dominada:** Administración del Sistema operativo y software de base.

## 1. Alcance y objetivos de la administración

Administrar un sistema operativo no es solo instalarlo: significa mantener durante todo su ciclo una plataforma **disponible, segura, reproducible, monitorizada y recuperable**. Las actividades nucleares son instalación y arranque, configuración, identidad y permisos, procesos y servicios, almacenamiento, red, actualización, logging, automatización, rendimiento, hardening y recuperación.

El **software de base** comprende los componentes que soportan la ejecución de aplicaciones: kernel y servicios de sistema, controladores, runtimes, shells, utilidades, bibliotecas, agentes, servidores de infraestructura y middleware básico. La frontera con “aplicación” depende de la arquitectura, pero operativamente interesa quién lo parchea, configura, monitoriza y respalda.

## 2. Instalación, arranque y configuración

Una instalación administrable parte de una imagen o baseline conocida, particionado/volúmenes planificados, configuración de red, repositorios de software confiables, sincronización horaria y registro central. En producción conviene separar configuración del binario y documentar dependencias.

En Linux el arranque moderno suele pasar por firmware → cargador → kernel/initramfs → sistema de init (habitualmente systemd) → targets/servicios. En Windows, el gestor de arranque carga el kernel y los componentes del sistema; la operación se apoya en servicios, registro, políticas y administración remota. El examen debe centrarse en función y secuencia, no en memorizar comandos de una distribución concreta.

## 3. Usuarios, grupos, permisos y privilegios

Principios: identidad individual, mínimo privilegio, separación de funciones, trazabilidad y cuentas administrativas diferenciadas. En Unix/Linux son básicos UID/GID, propietario-grupo-otros, bits rwx, permisos especiales y ACL. En Windows predominan SIDs, grupos, ACL de NTFS y directivas; en dominio, Active Directory puede centralizar identidades y políticas.

Debe evitarse operar de forma habitual como root/Administrator. La elevación controlada, MFA para privilegios, cuentas de servicio no interactivas y rotación/gestión de secretos reducen superficie de ataque.

## 4. Procesos, servicios y tareas

El administrador gestiona procesos, hilos, prioridades, límites, dependencias y servicios. Un servicio debe tener propietario, cuenta, método de arranque, puertos, logs, health checks y procedimiento de recuperación. Las tareas programadas permiten mantenimiento periódico, pero deben registrar resultado y evitar credenciales embebidas.

Una incidencia de “servicio caído” exige distinguir proceso no ejecutándose, dependencia fallida, puerto ocupado, DNS/red, permisos, certificado, almacenamiento lleno o saturación. Esa lógica de diagnóstico es más valiosa que un comando aislado.

## 5. Almacenamiento, ficheros y cuotas

La administración incluye particiones/volúmenes, montaje, sistemas de ficheros, espacio libre, inodos o metadatos equivalentes, permisos, cuotas, snapshots cuando existan y políticas de limpieza. El sistema debe alertar antes de agotar capacidad; quedarse sin espacio puede impedir escribir logs, bases de datos o actualizaciones.

## 6. Parches, paquetes y ciclo de actualización

Patch management: inventariar → evaluar criticidad/compatibilidad → priorizar → probar → desplegar por anillos → verificar → documentar → disponer de rollback/contingencia. No todos los parches requieren el mismo tratamiento, pero la excepción debe justificarse. Mantener software fuera de soporte aumenta riesgo técnico y operativo.

## 7. Logs, monitorización, hardening y automatización

Los logs de sistema, seguridad y aplicaciones deben sincronizarse temporalmente, protegerse y, en entornos relevantes, centralizarse. Hardening elimina servicios innecesarios, restringe puertos, configura firewall, políticas de contraseña/MFA, cifrado, permisos, arranque, auditoría y actualización.

La automatización mediante PowerShell, shell, Python, herramientas de configuración o IaC reduce deriva. La propiedad deseable es la **idempotencia**: repetir la automatización deja el sistema en el mismo estado objetivo.

## 8. Rendimiento y resolución de problemas

Ante degradación se observa CPU, memoria, paging/swap, disco (latencia/IOPS/cola), red, procesos, errores y dependencias. Alta utilización no siempre es problema: hay que correlacionarla con latencia, throughput y saturación. El diagnóstico se apoya en una baseline de comportamiento normal.

Datos y trampas de test

* Administración ≠ fundamentos del SO: aquí se pregunta operación y control.
* Proceso ≠ servicio; un servicio puede lanzar uno o varios procesos.
* Permiso POSIX rwx ≠ ACL; pueden coexistir.
* Patch management incluye prueba y verificación, no solo instalar.
* Root/Administrator no debe ser la cuenta ordinaria.
* Log local ≠ trazabilidad suficiente si el equipo puede verse comprometido.
* Idempotencia significa que repetir la operación mantiene el estado objetivo.

Aplicación al supuesto práctico

En un supuesto de plataforma corporativa: define imagen/baseline, directorio/IAM, cuentas privilegiadas, segmentación, parcheo por anillos, EDR, logs/SIEM, monitorización, automatización, backup, recuperación, ventanas de mantenimiento y procedimiento de emergencia. Justifica Windows/Linux por requisitos, soporte e integración, no por preferencia personal.

## Resumen

El objetivo es operar el SO como una plataforma controlada: identidad, configuración, servicios, almacenamiento, actualización, seguridad, observabilidad, automatización y recuperación.

**Fuentes base:** A1 059 v31.1 (10/03/2026) + A1 060/061; complemento operativo GSI.

# IV.02 — Administración de sistemas de gestión de bases de datos

**Cobertura oficial que debe quedar dominada:** Administración de sistemas de gestión de bases de datos.

## 1. Funciones del DBA y arquitectura operativa

La administración de un SGBD convierte el motor de base de datos en un servicio fiable. Incluye instalación y parametrización, instancias, catálogos/esquemas, almacenamiento, memoria, conexiones, seguridad, transacciones, rendimiento, copias, recuperación, replicación, alta disponibilidad, auditoría, parcheo y capacidad.

Conviene distinguir **base de datos** (datos/estructuras) de **instancia** (procesos y memoria que prestan servicio, según motor). Algunos productos usan terminología distinta; el concepto operativo es identificar procesos, memoria, ficheros y listeners/endpoints.

## 2. Almacenamiento y memoria

El motor utiliza ficheros/volúmenes para datos, índices, temporales y logs de transacciones. Algunos SGBD agrupan espacio mediante tablespaces/filegroups o conceptos equivalentes. La administración debe vigilar crecimiento, espacio libre, IOPS, latencia y distribución.

Memoria: caché/buffer pool, estructuras de ejecución y caches de planes. Dar más memoria sin medir puede desplazar el problema. El objetivo es minimizar E/S innecesaria manteniendo equilibrio con el SO y otras cargas.

## 3. Usuarios, roles y seguridad

Separar autenticación de autorización. Conceder privilegios mediante roles; aplicar mínimo privilegio y segregación de funciones. Diferenciar privilegios sobre objetos de privilegios administrativos/sistema. Las cuentas de aplicación deben tener solo lo necesario.

Controles: TLS para conexiones, cifrado en reposo si procede, protección de claves, rotación de credenciales, auditoría de accesos/cambios, red restringida, bastión/PAM para administración y parcheo. No almacenar secretos en código.

## 4. Transacciones, bloqueos y concurrencia

El DBA debe comprender ACID, aislamiento, bloqueos/MVCC, deadlocks y transacciones largas. Un deadlock suele resolverse abortando una transacción víctima; la aplicación debe poder reintentar de forma segura. Los bloqueos excesivos pueden revelar consultas lentas, índices insuficientes o transacciones demasiado amplias.

## 5. Rendimiento: planes, índices y estadísticas

El ajuste comienza por medir: top queries, latencia, CPU, I/O, waits, locks, conexiones y cache hit según motor. El **plan de ejecución** muestra estrategia de acceso/join; las estadísticas ayudan al optimizador a estimar cardinalidades. Un índice puede acelerar lectura pero encarece escritura, ocupa espacio y exige mantenimiento.

Orden razonable: reproducir → medir → identificar cuello → cambiar una hipótesis → comparar. Evitar “tuning por recetas”.

## 6. Backup, logs y recuperación

Una estrategia puede combinar copia física y lógica. Las copias físicas permiten restaurar estructuras del motor; las lógicas exportan objetos/datos y son útiles para portabilidad o recuperaciones granulares. Los logs de transacciones/WAL permiten **point-in-time recovery (PITR)** cuando el motor y la política lo soportan.

La cadena correcta es backup + retención + copia fuera del fallo común + pruebas de restore + runbook. Una réplica no sustituye al backup: puede replicar borrado, corrupción o error lógico.

## 7. Replicación, HA y DR

Replicación síncrona reduce posible pérdida a costa de latencia; asíncrona admite retraso. Topologías primario-réplica, multi-primary o cluster varían por producto. Hay que diferenciar **HA local** de **DR** entre dominios de fallo. RPO/RTO determinan cuánto dato y tiempo puede perderse.

## 8. Mantenimiento y capacidad

Tareas: actualizar motor, renovar certificados, revisar jobs, estadísticas, fragmentación/bloat cuando aplique, crecimiento de logs, capacidad, backups, restauraciones y alertas. Planificar upgrades mayores con compatibilidad, pruebas, réplica/piloto, rollback y ventana.

Datos y trampas de test

* Índice acelera ciertas lecturas pero penaliza escrituras y consume espacio.
* Replicación ≠ backup.
* Snapshot ≠ copia independiente necesariamente.
* RPO = pérdida máxima de datos tolerable; RTO = tiempo objetivo de recuperación.
* Autenticación ≠ autorización.
* Privilegio de sistema/administrativo ≠ privilegio sobre objeto.
* Un plan de ejecución debe analizarse con cardinalidad y métricas, no solo con coste estimado.

Aplicación al supuesto práctico

Diseña una plataforma de datos con nodos primarios/réplicas, balanceo o endpoint de failover cuando proceda, roles, cifrado, red, auditoría, backups/PITR, pruebas de restore, monitorización y capacidad. Explica RPO/RTO, dominio de fallo y procedimiento de conmutación/retorno.

## Resumen

Administrar SGBD es gobernar datos y servicio: configuración, seguridad, concurrencia, rendimiento, copia/recuperación, HA, parcheo y capacidad.

**Fuentes base:** A1 063 (01/02/2022) como base + documentación operativa específica; apoyo de conceptos de II.05/III.04.

# IV.03 — Mantenimiento de equipos e instalaciones. Incidencias. Backup y recuperación

**Cobertura oficial que debe quedar dominada:** Mantenimiento de equipos e instalaciones. Tipos de mantenimiento. Gestión de incidencias. Procedimientos de backup y recuperación.

## 1. Tipos de mantenimiento

**Preventivo**: actuaciones periódicas para evitar fallo (limpieza, inspección, cambio programado, pruebas). **Correctivo**: reparar tras fallo. **Predictivo**: usa mediciones/tendencias para anticipar degradación. En software también se habla de correctivo, adaptativo, perfectivo/evolutivo y preventivo.

En instalaciones críticas se mantienen UPS, climatización, baterías, grupos electrógenos, detección/extinción, cableado y sensores, con calendario y evidencia.

## 2. Incidente, problema, petición y cambio

Un **incidente** es una interrupción o degradación no planificada; su objetivo es restaurar servicio. Un **problema** busca causa raíz y prevenir recurrencia. Una petición de servicio es demanda estándar; un cambio modifica de forma controlada un CI/servicio.

Prioridad suele combinar impacto y urgencia. El flujo: detectar/registrar → categorizar/priorizar → diagnóstico inicial → escalar → resolver/recuperar → validar → cerrar. Incidentes mayores requieren canal de mando, comunicaciones periódicas y revisión posterior.

## 3. SLA, escalado y postmortem

Un SLA expresa compromisos de servicio. Las métricas deben poder medirse. Escalado funcional busca más conocimiento; jerárquico moviliza autoridad/recursos. Un postmortem útil registra línea temporal, impacto, causas/contribuyentes y acciones con responsables; no debe convertirse en búsqueda de culpables.

## 4. Tipos de copia

**Completa**: copia todo el conjunto. **Incremental**: cambios desde la última copia de cualquier tipo de la cadena. **Diferencial**: cambios desde la última completa. **Sintética completa**: reconstruye una completa en el repositorio combinando copias previas sin releer todo el origen.

La elección equilibra ventana de copia, almacenamiento, tráfico y tiempo de restauración. Las bases de datos requieren mecanismos consistentes con transacciones.

## 5. Política 3-2-1-1-0 y ransomware

Como buena práctica moderna puede estudiarse 3-2-1 y su extensión 3-2-1-1-0: varias copias, medios/ubicaciones diferentes, una fuera del sitio, una offline/inmutable y cero errores tras verificaciones. No es una ley universal: debe adaptarse a riesgo y criticidad.

Protecciones: credenciales separadas para backup, repositorio inmutable, MFA/PAM, cifrado, aislamiento de red, retención y borrado protegidos. Si el ransomware compromete el dominio administrativo del backup, la copia puede dejar de ser recuperable.

## 6. Retención, rotación y restauración

Definir frecuencia, retención diaria/semanal/mensual según necesidad legal y operativa, versionado y expiración. Restaurar puede requerir infraestructura, SO, aplicación, configuración, datos y dependencias. La prueba debe comprobar integridad funcional, no solo que el fichero se lee.

## 7. RPO, RTO y ejercicios

RPO responde “¿cuánto dato puedo perder?”; RTO, “¿cuánto tiempo puedo estar sin servicio?”. Un RPO muy bajo exige copias/log shipping/replicación frecuentes; un RTO bajo exige automatización, capacidad reservada y runbooks ensayados. Los objetivos se fijan por proceso de negocio, no por deseo técnico.

Datos y trampas de test

* Incidente ≠ problema.
* Incremental: desde última copia de la cadena; diferencial: desde última completa.
* Backup ≠ archivo histórico; los objetivos y retenciones pueden diferir.
* Réplica ≠ backup.
* RPO mide pérdida de datos; RTO tiempo de recuperación.
* Una copia no verificada no demuestra recuperabilidad.
* Offline/inmutable protege frente a ciertos ataques, pero no sustituye pruebas.

Aplicación al supuesto práctico

Propón clasificación P1-P4 o equivalente por impacto/urgencia, on-call/escalado, NMS→ticket→diagnóstico→recuperación→RCA, y una política de copias vinculada a RPO/RTO. Incluye repositorio fuera del dominio de fallo, inmutabilidad, cifrado y simulacros periódicos de restauración.

## Resumen

Mantener es prevenir, detectar, reparar y aprender. La estrategia de backup solo es válida si permite restaurar dentro del RTO y con pérdida ≤ RPO.

**Fuentes base:** A1 056 v31.1 (11/03/2026) + A1 101/105 y materiales de continuidad.

# IV.04 — Gestión de configuración, cambios y versiones. Automatización, rendimiento y capacidad

**Cobertura oficial que debe quedar dominada:** Gestión de la configuración. Control de cambios y de versiones. Técnicas y herramientas de operación automática. Evaluación y monitorización del rendimiento de sistemas, infraestructuras y servicios. Gestión de la capacidad. Herramientas y técnicas utilizables.

## 1. Gestión de configuración

Un **Configuration Item (CI)** es un elemento que se controla para prestar un servicio: servidor, VM, switch, aplicación, versión, certificado, base de datos, documento o servicio externo. La gestión de configuración mantiene identidad, atributos, relaciones y estado. Una CMDB puede soportar el proceso, pero una CMDB desactualizada es peor que un inventario más pequeño y fiable.

Una **baseline** fija una configuración aprobada. Configuration drift es la desviación respecto del estado esperado. Discovery automatizado, config-as-code e inventario ayudan a reducirlo.

## 2. Gestión de cambios

Flujo: solicitud/RFC → impacto, riesgo, dependencias y plan → autorización → calendario → ejecución → validación → cierre/revisión. Cambios estándar/preautorizados son repetitivos y de bajo riesgo; normales pasan evaluación ordinaria; emergencias aceleran controles, pero requieren trazabilidad y revisión posterior.

Todo cambio relevante necesita ventana, responsable, plan de prueba, comunicaciones y rollback/backout. El CAB es un mecanismo de asesoramiento/decisión en ciertos modelos, no una reunión obligatoria para cualquier cambio trivial.

## 3. Control de versiones

Versionar código, configuración, IaC, scripts, esquemas, documentación y artefactos permite reproducir un estado. Tags/releases identifican puntos desplegables. El control de versiones no sustituye a gestión de configuración: uno registra cambios de artefactos; la otra gobierna el estado completo del servicio y sus relaciones.

## 4. Automatización de operaciones

Niveles: scripts → jobs/schedulers → gestión de configuración → orquestación → IaC → pipelines. Imperativo describe pasos; declarativo describe estado objetivo. Idempotencia, manejo de errores, logs, secretos externos, versionado, pruebas y límites de privilegio son requisitos de automatización segura.

Ejemplos de categorías: PowerShell/shell/Python, Ansible o equivalentes para configuración, Terraform/OpenTofu o equivalentes para infraestructura declarativa, plataformas de orquestación y CI/CD. En examen interesa el patrón, no el producto.

## 5. Monitorización y observabilidad

**Monitorización** comprueba estados y métricas conocidas; **observabilidad** persigue inferir el estado interno a partir de señales. Tres señales clásicas: métricas, logs y trazas; además perfiles y eventos. APM combina instrumentación y correlación del rendimiento de aplicaciones.

SLI = indicador medido; SLO = objetivo interno/operativo; SLA = compromiso formal con consecuencias definidas. Alertar sobre síntomas de usuario suele ser más útil que sobre cualquier métrica interna aislada.

## 6. Rendimiento y cuellos de botella

Métricas: latencia, throughput, tasa de errores, utilización y saturación. Recursos: CPU, memoria, paging, disco/IOPS/latencia/colas, red/ancho de banda/pérdida, locks, pool de conexiones y dependencias. La ley práctica es medir antes y después; correlación no implica causa.

Un sistema puede tener CPU 90% y cumplir SLO; otro con 30% puede ir lento por almacenamiento o dependencia externa. La **cola** suele crecer al acercarse a saturación.

## 7. Gestión de capacidad

Capacidad traduce demanda futura en recursos y decisiones. Se parte de demanda, perfil horario, crecimiento, estacionalidad, headroom, límites y SLO. Técnicas: tendencias, percentiles, modelos de carga, benchmarks y pruebas. Diferenciar capacity management de autoscaling: el segundo reacciona/ajusta, pero sigue necesitando límites y planificación.

## 8. Arquitectura de observabilidad

Agentes/exporters → colectores → almacenes de métricas/logs/trazas → correlación → dashboards/alertas → tickets/on-call. Debe proteger datos sensibles, controlar retención y evitar una plataforma de observabilidad que se convierta en SPOF o coste descontrolado.

Datos y trampas de test

* CI = elemento de configuración; CMDB = repositorio/relaciones, no sinónimo de inventario total.
* Cambio estándar ≠ emergencia.
* Monitorización ≠ observabilidad.
* SLI ≠ SLO ≠ SLA.
* Alta CPU no implica necesariamente cuello de botella.
* Idempotencia es clave para automatización repetible.
* Control de versiones ≠ gestión de configuración.
* Capacity planning ≠ sobredimensionar siempre.

Aplicación al supuesto práctico

Para un servicio crítico: inventario/CMDB y baselines, config-as-code, pipeline de cambio con aprobación proporcional al riesgo, rollback, métricas/logs/trazas, SLI/SLO, dashboards, alertas, on-call y capacity plan. Añade pruebas de carga y forecast de crecimiento; evita alertas sin acción asociada.

## Resumen

La operación madura controla estado y cambio, automatiza lo repetible, observa el servicio extremo a extremo y planifica capacidad antes de saturarse.

**Fuentes base:** A1 100/102 + material ITIL/operación; tema complementario construido específicamente para GSI.

# IV.05 — Almacenamiento de datos: arquitectura, protocolos, gestión y virtualización

**Cobertura oficial que debe quedar dominada:** Almacenamiento de datos: arquitectura, tipos, componentes, protocolos, gestión y administración. Virtualización del almacenamiento.

## 1. Medios y jerarquía

HDD ofrece gran capacidad/coste favorable con latencia mecánica; SSD reduce latencia; NVMe usa PCIe y colas/paralelismo adaptados a memoria no volátil. La cinta conserva valor en archivo/copia por coste y aislamiento. El almacenamiento cloud/objeto cambia modelo operativo y de coste, pero no elimina requisitos de durabilidad, acceso y salida.

## 2. DAS, NAS, SAN y objeto

| **Modelo** | **Unidad expuesta** | **Protocolos típicos** | **Uso** |
| --- | --- | --- | --- |
| DAS | bloques/dispositivo local | SATA, SAS, NVMe | servidor individual, baja complejidad |
| NAS | ficheros | NFS, SMB | ficheros compartidos |
| SAN | bloques remotos | Fibre Channel, iSCSI, NVMe-oF | BD, virtualización, cargas de bloque |
| Objeto | objeto + metadatos/API | HTTP/S3-compatible conceptualmente | backup, datos masivos, contenido |

NAS y SAN no se diferencian por “estar en red” —ambas lo están— sino por la abstracción: fichero frente a bloque.

## 3. RAID y protección local

RAID 0: striping sin redundancia. RAID 1: espejo. RAID 5: paridad distribuida, tolera normalmente un disco. RAID 6: doble paridad, normalmente dos. RAID 10: stripe sobre espejos; buen rendimiento y reconstrucción a cambio de capacidad.

RAID mejora disponibilidad frente a fallo de disco, pero **no es backup**: no protege de borrado lógico, ransomware, incendio, error administrativo o corrupción replicada.

## 4. Cabinas, controladoras, caché y LUN

Una cabina integra controladoras, puertos front-end/back-end, caché y discos/flash. Presenta volúmenes/LUN a hosts. En Fibre Channel, zoning controla qué iniciadores y targets se ven; LUN masking limita volúmenes. Multipathing ofrece varios caminos y failover/balanceo según pila.

## 5. Protocolos

Fibre Channel transporta bloques sobre red especializada; iSCSI transporta comandos SCSI sobre TCP/IP; NFS y SMB comparten ficheros; NVMe-oF extiende semántica NVMe sobre fabric. Cada elección implica latencia, coste, habilidades, multipath y aislamiento distintos.

## 6. Virtualización y eficiencia

Virtualizar almacenamiento agrupa/abstrae recursos físicos en pools y volúmenes lógicos. Técnicas: **thin provisioning**, snapshots, clones, deduplicación, compresión, tiering y replicación. Thin provisioning permite asignar capacidad lógica superior a la física, lo que exige alertas para evitar agotamiento.

Snapshot guarda un punto lógico, frecuentemente mediante copy-on-write/redirección; puede depender del mismo sistema y no ser copia independiente.

## 7. Rendimiento y dimensionamiento

Medir IOPS, throughput (MB/s o GB/s), latencia, tamaño de bloque, ratio lectura/escritura, secuencial/aleatorio y concurrencia. Una base OLTP exige perfil distinto de backup secuencial. La capacidad útil debe descontar RAID, snapshots, reservas y crecimiento.

## 8. Administración y seguridad

Inventario, firmware, salud de discos, pools, capacidad, latencia, rutas, snapshots, replicación y alertas. Seguridad: segmentación de redes de storage, autenticación, cifrado en tránsito/reposo cuando proceda, control de administración y borrado seguro. Para backup, valorar inmutabilidad/WORM.

Datos y trampas de test

* RAID ≠ backup.
* NAS = ficheros; SAN = bloques.
* iSCSI = SCSI sobre TCP/IP.
* Thin provisioning puede sobreaprovisionar; necesita control de capacidad.
* Snapshot ≠ copia independiente necesariamente.
* IOPS ≠ throughput; una carga puede estar limitada por uno u otro.
* RAID 5 tolera típicamente un fallo; RAID 6 dos.
* Zoning y LUN masking actúan en capas diferentes de visibilidad/acceso.

Aplicación al supuesto práctico

Clasifica cargas (BD, VM, ficheros, objeto, backup); estima capacidad útil y crecimiento; define rendimiento (IOPS/throughput/latencia); elige DAS/NAS/SAN/objeto; añade RAID, multipath, snapshots/replicación, cifrado, monitorización y backup independiente. Justifica coste y dominio de fallo.

## Resumen

El diseño de almacenamiento se basa en abstracción (bloque/fichero/objeto), rendimiento, disponibilidad, capacidad y recuperabilidad; la virtualización mejora flexibilidad pero exige vigilancia del pool físico.

**Fuentes base:** A1 056 v31.1 (11/03/2026) como fuente principal + A1 057 como apoyo histórico.

# IV.06 — CPD: planificación física, virtualización, alta disponibilidad, balanceo y recuperación ante desastres

**Cobertura oficial que debe quedar dominada:** Planificación física y dimensionamiento de un centro de procesamiento de datos. Virtualización y consolidación de servidores y recursos. Vulnerabilidades, riesgo y protección. Sistemas de alta disponibilidad y balanceo de carga. Recuperación ante desastres.

## 1. Dimensionamiento físico

Planificar un CPD exige inventariar equipos y crecimiento, RU/racks, potencia eléctrica, refrigeración, peso, cableado de datos/energía, conectividad externa y espacios de operación. No se dimensiona solo por número de servidores: importan kW, disipación térmica, puertos, almacenamiento y redundancia.

## 2. Energía y climatización

Cadena típica: red eléctrica → cuadros/ATS → UPS → PDU → equipo, con grupo electrógeno para autonomía prolongada. Redundancia N cubre solo carga; N+1 añade un componente; 2N duplica capacidad completa en la parte diseñada. La topología real puede combinar niveles.

La climatización controla temperatura/humedad y flujo de aire; pasillos frío/caliente y contención mejoran eficiencia. PUE = energía total del CPD / energía TI; cuanto más próximo a 1, menor overhead, pero no mide disponibilidad ni calidad de servicio.

## 3. Protección física y ambiental

Control de acceso por zonas, CCTV cuando proceda, detección de incendio/humo, extinción compatible con equipos y personas, agua/fugas, sensores ambientales y procedimientos. Los riesgos incluyen incendio, inundación, energía, fallo HVAC, intrusión, obras, dependencia de proveedor y errores humanos.

## 4. Virtualización y consolidación

Un hipervisor abstrae CPU/memoria/red/storage para VMs. Consolidar aumenta utilización y flexibilidad, pero concentra cargas: un host o storage mal dimensionado puede afectar a muchas VMs. Se requieren reservas/overcommit controlado, anti-affinity, HA y capacidad de evacuar hosts.

La movilidad en vivo ayuda a mantenimiento, pero no equivale a DR. Contenedores son otra capa de virtualización de SO y no sustituyen por sí solos a la infraestructura física.

## 5. Alta disponibilidad

HA reduce indisponibilidad eliminando SPOF mediante redundancia de compute, red, alimentación, storage, DNS/balanceadores y dependencias. Activo-activo permite servir desde varios nodos; activo-pasivo mantiene reserva. Quorum/fencing evitan split-brain en clusters según tecnología.

## 6. Balanceo de carga

L4 decide principalmente por IP/puerto/conexión; L7 comprende protocolo de aplicación (p. ej. HTTP) y puede enrutar por host/path/cabeceras. Algoritmos: round-robin, least connections, ponderados o hashing. Health checks retiran nodos no sanos. La persistencia de sesión debe justificarse; preferir servicios stateless cuando sea posible.

## 7. Recuperación ante desastres

DR cubre pérdida de sitio/dominio de fallo. Sitio **cold**: infraestructura mínima, más RTO; **warm**: parte preinstalada; **hot**: alta preparación/replicación, mayor coste. Diseñar datos, DNS/routing, identidades, certificados, dependencias externas, backups y runbooks.

La prueba de DR debe incluir conmutación y **failback**, no solo verificar una copia. RPO/RTO de cada servicio guían replicación y automatización.

Datos y trampas de test

* HA ≠ DR.
* Dos servidores en el mismo CPD no cubren desastre de sitio.
* N+1 ≠ 2N.
* PUE mide eficiencia energética, no disponibilidad.
* Balanceo L4 ≠ L7.
* Virtualización mejora consolidación pero no crea capacidad física.
* Live migration ≠ backup ni DR.
* Activo-activo exige resolver consistencia/estado.

Aplicación al supuesto práctico

Dibuja al menos dos dominios de fallo: energía/red/hosts/storage redundantes, cluster y balanceadores; si el caso exige continuidad ante desastre, añade segunda sede/zona, replicación, backups, DNS/routing y runbook. Justifica N+1/2N, capacidad de fallo, RPO/RTO y pruebas de conmutación.

## Resumen

Un CPD fiable combina ingeniería física, eliminación de SPOF, virtualización bien dimensionada, HA local y una estrategia DR probada para fallos de sitio.

**Fuentes base:** A1 053/056/057/128/132 + RELEASE arquitectura; depuración fuerte de material histórico.

# IV.07 — Medios de transmisión y cableado estructurado

**Cobertura oficial que debe quedar dominada:** Medios de transmisión guiados y no guiados (inalámbricos): tipos y parámetros significativos. Elementos de cableado estructurado.

## 1. Parámetros de transmisión

Ancho de banda/capacidad, frecuencia, atenuación, ruido, relación señal/ruido, BER, latencia, dispersión y diafonía condicionan un enlace. El decibelio expresa relaciones logarítmicas. Mayor ancho de banda físico no garantiza rendimiento útil si protocolo, errores o equipo limitan.

## 2. Par trenzado y coaxial

Par trenzado de cobre puede ser UTP o apantallado. Categorías superiores soportan mayores frecuencias y aplicaciones, siempre respetando conectores, instalación y certificación. Ethernet estructurado sobre cobre utiliza habitualmente hasta 100 m de canal (90 m enlace permanente + latiguillos, diseño típico estándar).

Coaxial tiene conductor central y blindaje; hoy es menos habitual en LAN Ethernet, pero sigue presente en radiofrecuencia, acceso y vídeo.

## 3. Fibra óptica

Fibra **monomodo** usa núcleo menor y soporta mayores distancias/capacidades; **multimodo** se usa en distancias menores, especialmente edificio/CPD. Parámetros: longitud de onda, presupuesto óptico, atenuación, dispersión, conectores y transceptores. La fibra es inmune a interferencia electromagnética, pero requiere cuidado mecánico y limpieza de conectores.

## 4. No guiados

Radio, microondas terrestres, satélite e infrarrojo presentan propagación, interferencia, espectro, línea de vista y regulación distintas. El satélite añade latencia de propagación dependiente de órbita. En microondas y radio importan antena, potencia, zona Fresnel y obstáculos.

## 5. Cableado estructurado

Organiza entrada de servicios, sala/equipamiento, backbone/vertical, distribuidores, horizontal, área de trabajo, patch panels y latiguillos. Debe separarse de potencia según norma/práctica, etiquetarse, documentarse y certificarse. Diseñar rutas y fibras de reserva facilita crecimiento y redundancia.

## 6. PoE

Power over Ethernet alimenta terminales como AP, cámaras o teléfonos sobre el cable de datos mediante familias IEEE 802.3. En diseño importan potencia por puerto, presupuesto total del switch, categoría/temperatura del mazo y redundancia eléctrica. No memorizar marketing; sí distinguir que PoE añade energía sin cambiar el hecho de que Ethernet transporta datos.

## 7. Selección del medio

| **Criterio** | **Cobre** | **Fibra** |
| --- | --- | --- |
| Distancia | corta/media edificio | media/larga, campus/CPD |
| EMI | sensible según apantallado | inmune electromagnéticamente |
| Capacidad | alta en LAN moderna | muy alta y escalable |
| Alimentación PoE | sí | no de forma equivalente |
| Coste/terminación | habitualmente menor | óptica/transceptores más especializados |

Datos y trampas de test

* Fibra ≠ “sin pérdidas”: tiene atenuación/dispersión.
* Monomodo ≠ multimodo.
* dB es logarítmico.
* Categoría de cable ≠ versión Ethernet.
* 100 m es referencia típica de canal de cobre estructurado, no una ley para cualquier tecnología.
* PoE requiere presupuesto de potencia además de puertos.
* Ancho de banda físico ≠ throughput útil.

Aplicación al supuesto práctico

Elige cobre o fibra por distancia, capacidad, EMI, PoE, redundancia y coste. Dibuja MDF/IDF, backbone y horizontal; incluye patch panels, etiquetado, certificación, rutas redundantes y reserva de crecimiento. Para AP/cámaras calcula además presupuesto PoE.

## Resumen

El medio se selecciona por física y operación: capacidad, distancia, ruido, coste y mantenimiento. El cableado estructurado convierte enlaces en una infraestructura documentada y certificable.

**Fuentes base:** A1 108 + 110 + 112; conceptos físicos estables con actualización selectiva.

# IV.08 — Redes locales: topología, protocolos, acceso, interconexión, seguridad y normativa

**Cobertura oficial que debe quedar dominada:** Redes locales. Tipología, protocolos y técnicas de transmisión. Métodos de acceso. Dispositivos de interconexión. Seguridad. Normativa Reguladora.

## 1. Arquitectura Ethernet

Ethernet IEEE 802.3 es la familia dominante en LAN cableadas. Opera a nivel físico y enlace; la trama contiene direcciones MAC origen/destino, tipo/longitud según formato, datos y FCS. La MAC es identificación de enlace; IP pertenece a capa de red.

En Ethernet conmutada full-duplex no hay colisiones normales y CSMA/CD queda como concepto histórico asociado a medio compartido/half-duplex.

## 2. Topologías y dominios

Físicamente predomina estrella alrededor de switches, aunque la topología lógica puede incluir enlaces redundantes. Un hub/repetidor no separa colisiones; un switch crea dominios de colisión por puerto; una VLAN delimita broadcast L2. Router/L3 separa dominios de broadcast y enruta entre subredes.

## 3. Switching y tabla MAC

El switch aprende MAC observando dirección origen y puerto. Si conoce destino, reenvía por puerto asociado; si es desconocido o broadcast, inunda dentro de la VLAN. Entradas envejecen. Bucles L2 generan tormentas y aprendizaje inestable, de ahí STP.

## 4. VLAN e inter-VLAN

VLAN separa redes lógicas sobre switches. IEEE 802.1Q etiqueta tramas en enlaces trunk; puertos de acceso pertenecen normalmente a una VLAN sin etiqueta hacia el terminal. Comunicación entre VLAN requiere función L3 (router o switch multicapa) y políticas de filtrado.

## 5. STP, RSTP/MSTP y agregación

STP crea una topología libre de bucles bloqueando caminos redundantes; RSTP acelera convergencia; MSTP permite mapear VLAN a instancias. LACP negocia agregación de enlaces para capacidad y redundancia, pero un flujo concreto puede quedar limitado a un miembro según hashing.

## 6. Dispositivos

Repetidor/hub L1, bridge/switch L2, router L3, firewall con control de seguridad, punto de acceso puentea inalámbrico/cableado según diseño. Un switch L3 combina switching y routing; el nombre del dispositivo no sustituye analizar su función.

## 7. Seguridad LAN

Segmentación por VLAN/subred, ACL/firewall interzona, 802.1X/NAC, port security, DHCP snooping, Dynamic ARP Inspection donde exista, BPDU guard, control de puertos no usados, administración por SSH/HTTPS, AAA central y logs. La VLAN por sí sola no es frontera de seguridad suficiente.

## 8. Diseño jerárquico

Acceso-distribución-core es un modelo útil en redes medianas/grandes; en campus modernos puede colapsarse core/distribución. Redundancia, rutas, QoS y capacidad se diseñan según tamaño. Evitar extender L2 sin necesidad reduce dominios de fallo.

Datos y trampas de test

* Switch aprende MAC origen.
* Router decide por IP/prefijo.
* VLAN separa broadcast; inter-VLAN requiere L3.
* 802.1Q = etiquetado VLAN.
* STP evita bucles L2; RSTP converge más rápido.
* CSMA/CD es esencialmente histórico en Ethernet full-duplex conmutada.
* LACP agrega enlaces; no significa que un único flujo use suma de todos siempre.
* VLAN ≠ firewall.

Aplicación al supuesto práctico

Diseña acceso/distribución/core o arquitectura equivalente, VLAN/subred por función, routing inter-VLAN controlado, redundancia, STP/RSTP o diseño L3, LACP, QoS y NAC/802.1X. Incluye administración segura y monitorización; justifica dominios de fallo.

## Resumen

LAN moderna = Ethernet conmutada + segmentación VLAN/L3 + control de bucles/agregación + seguridad de acceso + redundancia y operación.

**Fuentes base:** A1 118 (12/09/2020) + 119; actualización de seguridad y diseño posterior.

# IV.09 — Administración de redes locales. Usuarios, dispositivos, tráfico y SNMP

**Cobertura oficial que debe quedar dominada:** Administración de redes locales. Gestión de usuarios y dispositivos. Monitorización y control de tráfico. Gestión SNMP.

## 1. Modelo FCAPS

FCAPS resume áreas de gestión: Fault, Configuration, Accounting, Performance y Security. No es una herramienta concreta; sirve para estructurar operación: detectar fallos, controlar configuración, contabilizar/uso, medir rendimiento y proteger administración.

## 2. Inventario y configuración

Mantener modelo, serie/activo, ubicación, versión, interfaces, IP de gestión, dependencias, garantía/soporte y baseline. Respaldar configuraciones, controlar cambios, actualizar firmware y sustituir equipos fuera de soporte. Administración debe usar red/VRF de gestión cuando proceda y AAA central.

## 3. Usuarios y acceso a red

Directorio/IAM identifica usuarios; 802.1X autentica acceso a puerto/WLAN con supplicant–authenticator–servidor AAA, normalmente RADIUS. NAC añade postura/compliance y políticas. Separar identidad del usuario de cuenta administrativa del dispositivo.

## 4. SNMP: arquitectura

**Manager/NMS** consulta o recibe eventos; **agent** expone objetos; **MIB** describe estructura; **OID** identifica cada objeto. Operaciones: GET, GETNEXT, GETBULK (v2+), SET; TRAP envía notificación sin confirmación de aplicación y INFORM permite confirmación entre entidades según versión.

SNMPv1/v2c se apoyan en community strings; SNMPv3 añade modelo de seguridad con autenticación e integridad y, opcionalmente, privacidad/cifrado. En producción sensible preferir v3.

## 5. Syslog, flows y telemetría

Syslog centraliza eventos; NetFlow/IPFIX o tecnologías equivalentes resumen flujos para saber quién habla con quién, cuánto y cuándo; streaming telemetry publica métricas de forma más frecuente/estructurada que polling tradicional. Se complementan, no sustituyen totalmente.

## 6. Monitorización

Disponibilidad, estado de interfaces, errores/discards, utilización, latencia, pérdida, CPU/memoria, vecinos, rutas, PoE, temperatura y cambios. Usar percentiles/tendencias y umbrales con histéresis. Alertas deben mapearse a una acción y evitar tormentas.

## 7. Control de tráfico y QoS

Clasificación/marcado, policing, shaping, colas y prioridad. QoS no crea ancho de banda: administra congestión. El control puede detectar top talkers, aplicaciones anómalas y enlaces saturados; primero se corrige causa y luego se amplía capacidad si procede.

## 8. Troubleshooting por capas

Secuencia útil: físico (enlace, errores) → VLAN/L2 → IP/gateway → routing → DNS/DHCP → transporte/puertos → aplicación. Comparar alcance, rutas, ARP/NDP, latencia/pérdida y logs. Cambiar muchas variables a la vez destruye evidencia.

Datos y trampas de test

* MIB describe objetos; OID identifica un objeto.
* Polling ≠ trap/inform.
* SNMPv3 ofrece seguridad superior a community strings de v1/v2c.
* SNMP GETBULK aparece desde v2.
* Syslog ≠ SNMP; son complementarios.
* NetFlow/IPFIX describe flujos, no captura necesariamente payload.
* QoS no crea ancho de banda.
* FCAPS es un marco de áreas de gestión.

Aplicación al supuesto práctico

Propón NMS redundante, SNMPv3, syslog central, flows/telemetría, inventario y backups de configuración, AAA/RBAC, red de gestión, alertas y dashboards. Describe un flujo de incidencia desde alarma hasta diagnóstico por capas y cierre con actualización de baseline/documentación.

## Resumen

Administrar LAN significa conocer y controlar identidad, configuración, estado y tráfico; SNMP es una pieza de una plataforma más amplia de observabilidad y gestión.

**Fuentes base:** A1 118/119 + administración de redes; modernización hacia SNMPv3, flows y telemetría.

# IV.10 — Redes de área extensa: WDM, MPLS, SD-WAN y encaminamiento

**Cobertura oficial que debe quedar dominada:** Redes de área extensa. Tecnologías WDM y MPLS SD-WAN. Protocolos de encaminamiento.

## 1. WAN y transportes

WAN conecta sedes/CPD/cloud a través de operadores, Internet o infraestructuras propias. Los criterios son capacidad, latencia, disponibilidad, QoS, cifrado, cobertura, coste, diversidad física y tiempo de provisión. Una arquitectura puede combinar varios underlays.

## 2. WDM

Wavelength Division Multiplexing transporta múltiples canales ópticos en diferentes longitudes de onda sobre una fibra. **CWDM** usa espaciado más amplio y menor complejidad; **DWDM** mayor densidad/capacidad y alcance con sistemas ópticos más sofisticados. WDM es tecnología de capa óptica; no realiza routing IP.

## 3. MPLS

MPLS reenvía paquetes usando etiquetas. Conceptos: FEC agrupa tráfico con mismo tratamiento; LER inserta/retira etiquetas en borde; LSR conmuta etiquetas; LSP es camino de etiquetas. Permite VPN L3/L2, ingeniería de tráfico y QoS en redes de operador. **MPLS no cifra por sí mismo**.

## 4. SD-WAN

SD-WAN desacopla política/control de la elección de múltiples transportes. Underlay = conectividad subyacente (Internet, MPLS, 4G/5G...); overlay = túneles/red lógica. Un controlador/orquestador distribuye políticas; el edge mide SLA de caminos y selecciona según aplicación, pérdida, jitter/latencia y coste.

Beneficios: gestión central, uso activo de varios enlaces y aprovisionamiento; riesgos: dependencia de plataforma, control plane, seguridad de edges y calidad variable del underlay.

## 5. Routing estático y dinámico

Routing estático es predecible pero escala mal. Protocolos dinámicos intercambian información y convergen tras cambios. Métricas y atributos determinan selección; debe evitarse redistribución indiscriminada.

## 6. RIP, OSPF, IS-IS y BGP

| **Protocolo** | **Tipo** | **Ámbito/idea clave** |
| --- | --- | --- |
| RIP | distance-vector | métrica de saltos; simple/legado |
| OSPF | link-state IGP | áreas, coste, SPF; interior de organización |
| IS-IS | link-state IGP | niveles/áreas; común en grandes operadores |
| BGP | path-vector EGP | políticas y AS-PATH entre AS; también DC/enterprise a gran escala |

Datos y trampas de test

* WDM multiplexa longitudes de onda, no paquetes IP.
* MPLS usa etiquetas y no cifra por sí mismo.
* Underlay ≠ overlay en SD-WAN.
* OSPF es link-state; BGP path-vector.
* BGP utiliza políticas/atributos, no una “ruta más corta” simple.
* Routing estático puede ser adecuado en topologías sencillas.
* Redundancia lógica sin diversidad física puede compartir el mismo fallo de fibra.

Aplicación al supuesto práctico

Compara MPLS, doble Internet+VPN y SD-WAN con criterios de SLA, cifrado y coste. Diseña dos operadores/rutas físicamente diversas, routing interior y exterior, QoS, monitorización y failover. Si hay cloud, contempla latencia y conectividad directa o VPN según criticidad.

## Resumen

WAN moderna combina transportes físicos/operador, routing y overlays. WDM aumenta capacidad óptica; MPLS ofrece forwarding/VPN/QoS; SD-WAN centraliza política sobre varios underlays.

**Fuentes base:** A1 113 + 108 + 120; SD-WAN actualizado como complemento.

# IV.11 — Redes inalámbricas: protocolos, espectro, acceso, operación y seguridad

**Cobertura oficial que debe quedar dominada:** Redes inalámbricas. Protocolos. Características funcionales y técnicas. Sistemas de expansión del espectro. Sistemas de acceso. Modos de operación. Seguridad. Normativa reguladora.

## 1. IEEE 802.11 y generaciones

802.11 define WLAN. Mapa útil: 802.11n → Wi-Fi 4; 802.11ac → Wi-Fi 5; 802.11ax → Wi-Fi 6 (6E al usar 6 GHz donde está permitido); 802.11be → Wi-Fi 7. Las denominaciones Wi-Fi son de industria/certificación; el estándar IEEE define PHY/MAC.

## 2. Bandas y canales

2,4 GHz: mayor propagación pero poco espectro y más interferencia. 5 GHz: más canales/capacidad y menor alcance típico. 6 GHz: espectro adicional donde regulación lo permite, con equipos compatibles. Anchos de 20/40/80/160 MHz y, con Wi‑Fi 7, hasta 320 MHz en 6 GHz según disponibilidad. Canales más anchos elevan pico pero consumen espectro y pueden empeorar reutilización.

## 3. Técnicas PHY

Históricamente DSSS/FHSS; OFDM en generaciones posteriores; OFDMA divide recursos entre estaciones, útil en densidad. MIMO usa múltiples antenas/streams; MU‑MIMO atiende varios clientes. Modulación más densa exige mayor SNR.

Wi-Fi 7/802.11be incorpora 320 MHz, 4096-QAM, Multi-Link Operation (MLO) y asignación más flexible de recursos; el examen debe entender beneficio, no memorizar tasas máximas de marketing.

## 4. Acceso al medio

Wi‑Fi usa CSMA/CA, no CSMA/CD: escucha, contención aleatoria y acknowledgements; RTS/CTS puede mitigar nodos ocultos. QoS 802.11e/WMM prioriza categorías. OFDMA añade programación más eficiente en ax/be.

## 5. Modos y arquitectura

BSS = conjunto básico alrededor de AP; ESS agrupa BSS con misma red/roaming. Ad-hoc/IBSS carece de AP central (histórico/limitado); mesh interconecta nodos inalámbricamente. En enterprise, control puede ser local, controlador o cloud; la función importa más que el formato.

## 6. Roaming y planificación RF

El cliente decide gran parte del roaming. 802.11k/v/r pueden ayudar con vecinos, steering y transición rápida. Diseño requiere site survey, potencia, canales, solapamiento, densidad, capacidad y fuentes de interferencia. “Señal fuerte” no equivale a buena WLAN si todos comparten aire saturado.

## 7. Seguridad

WEP y WPA antiguos son obsoletos/inseguros. WPA2 usa AES-CCMP en configuraciones modernas; WPA3 mejora autenticación y protección. En empresa: 802.1X/EAP con RADIUS, certificados cuando proceda, segmentación y NAC. Redes de invitados aisladas; IoT separado. Ocultar SSID o filtrar MAC no constituye seguridad robusta.

Datos y trampas de test

* Wi-Fi usa CSMA/CA, no CSMA/CD.
* SSID oculto ≠ seguridad.
* 2,4 GHz suele tener más alcance, pero menos espectro.
* Wi-Fi 6 = 802.11ax; Wi-Fi 7 = 802.11be.
* 6 GHz depende de regulación y equipo.
* Canal más ancho ≠ siempre mejor en alta densidad.
* WPA3/802.1X son preferibles en empresa; WEP está obsoleto.
* MLO es rasgo clave de Wi-Fi 7.

Aplicación al supuesto práctico

Diseña cobertura y capacidad mediante survey: número/ubicación de AP, canales/potencia, PoE y uplinks. Separa SSID corporativo, invitados e IoT; usa 802.1X/RADIUS, NAC, VLAN/VRF y políticas. Incluye redundancia del plano de control y monitorización de SNR, utilización, retransmisiones y roaming.

## Resumen

WLAN se diseña como un medio compartido de radio: bandas/canales, PHY/MAC, acceso, roaming, densidad y seguridad. Wi‑Fi 7 amplía capacidad y flexibilidad, pero no cambia los fundamentos de planificación RF.

**Fuentes base:** A1 114 v30.1 (05/09/2024) + actualización Wi‑Fi 7/IEEE 802.11be.

# IV.12 — Seguridad en redes: perímetro, accesos, criptografía, protocolos seguros, VPN y puesto

**Cobertura oficial que debe quedar dominada:** La seguridad en redes. Seguridad perimetral. Control de accesos. Técnicas criptográficas y protocolos seguros. Mecanismos de firma digital. Redes privadas virtuales. Seguridad en el puesto del usuario.

## 1. Arquitectura por capas y Zero Trust

Seguridad en red aplica defensa en profundidad: segmentación, control de identidad, filtrado, cifrado, detección, endpoint, registro y respuesta. Zero Trust no significa “sin red interna”: significa no conceder confianza implícita por ubicación y verificar identidad, dispositivo, contexto y mínimo privilegio de forma continua.

## 2. Perímetro, DMZ y segmentación

DMZ aloja servicios expuestos separándolos de redes internas. Firewall **stateless** filtra por reglas de paquete; **stateful** sigue estado de conexión; NGFW añade identificación de aplicaciones/usuarios y otras funciones. Proxy intermedia tráfico; WAF protege aplicaciones web HTTP; IDS detecta, IPS puede bloquear. La segmentación limita movimiento lateral.

## 3. AAA, NAC y administración

AAA = Authentication, Authorization, Accounting. RADIUS se usa ampliamente para acceso de red/802.1X; TACACS+ es frecuente en administración de dispositivos. 802.1X separa supplicant, authenticator y servidor AAA. NAC aplica identidad/postura y políticas.

La administración debe usar MFA, RBAC, cuentas nominativas, bastión/PAM, protocolos seguros, red de gestión y logs. Deshabilitar Telnet/HTTP inseguros cuando existan alternativas.

## 4. Criptografía

Simétrica (AES): misma clave, eficiente para volumen. Asimétrica (RSA/ECC): par pública/privada, útil para firma/intercambio/autenticación. Hash (SHA-2/SHA-3): huella unidireccional, no cifra. HMAC combina hash y secreto para autenticidad/integridad.

La seguridad depende de algoritmos, tamaños, modos, generación/almacenamiento de claves y protocolo. “Usar criptografía” sin gestión de claves no resuelve el riesgo.

## 5. PKI, certificados y firma digital

Una PKI gestiona CA, certificados, claves, políticas, revocación/estado (CRL/OCSP) y ciclo de vida. En firma digital, el firmante genera una firma con su clave privada sobre el hash/estructura definida; se verifica con la pública/certificado. Aporta autenticidad e integridad y puede sustentar no repudio en el marco jurídico/procedimental adecuado.

## 6. TLS, SSH e IPsec

TLS protege protocolos de aplicación. En julio de 2026, RFC 9846 volvió a especificar TLS 1.3 y **obsoletó RFC 8446**; para examen importa TLS 1.3 y sus propiedades modernas (AEAD, handshake y eliminación de algoritmos legados), no memorizar cada cambio editorial.

SSH protege administración remota; IPsec protege tráfico IP mediante arquitectura de seguridad con AH/ESP (en la práctica ESP es central) y modos transporte/túnel. No confundir TLS con IPsec: operan en capas y escenarios diferentes.

## 7. VPN

VPN site-to-site conecta redes; acceso remoto conecta usuario/dispositivo. Puede basarse en IPsec o TLS/tecnologías asociadas. Debe autenticar fuerte, limitar rutas/recursos, registrar y evaluar endpoint. Split tunneling reduce carga pero cambia riesgo; decidir por política.

## 8. Puesto de usuario

Hardening, parcheo, EDR/antimalware, cifrado de disco, firewall local, control de aplicaciones, mínimo privilegio, navegador seguro, bloqueo, MFA, protección de credenciales, MDM/UEM en móviles y copias de datos cuando corresponda. Una VPN no protege un endpoint ya comprometido.

## 9. ENS

En sector público español, el RD 311/2022 regula el ENS. Su texto consolidado vigente a esta revisión mantiene principios como seguridad integral, gestión basada en riesgos, prevención/detección/respuesta/conservación, líneas de defensa, vigilancia continua y diferenciación de responsabilidades. Las medidas se agrupan en marco organizativo, operacional y protección.

Datos y trampas de test

* Hash ≠ cifrado.
* Firma se genera con clave privada y se verifica con pública.
* Cifrado no implica por sí solo autenticación.
* Firewall stateful ≠ WAF.
* IDS detecta; IPS puede actuar/bloquear.
* RADIUS es típico en acceso 802.1X; TACACS+ en administración de dispositivos.
* MPLS ≠ VPN cifrada por sí misma.
* TLS 1.3 sigue siendo versión moderna; RFC 9846 (julio 2026) obsoleta RFC 8446.
* VPN ≠ endpoint seguro.

Aplicación al supuesto práctico

Parte de datos/servicios y riesgo: zonas/DMZ, firewalls, WAF/IDS/IPS, NAC/802.1X, AAA, MFA/PAM, cifrado y PKI, VPN/Zero Trust, EDR y SIEM. Mapea controles al ENS cuando aplique. Dibuja flujos permitidos y evita “allow any”; incluye gestión de certificados, logs y respuesta.

## Resumen

La seguridad en red no es un producto: es arquitectura de confianza mínima, control de accesos, criptografía correcta, segmentación, detección y endpoint endurecido, alineados con riesgo y ENS.

**Fuentes base:** A1 125 v30.1 (09/09/2024) + A1 079/080/131 + RD 311/2022 ENS/CCN.

# IV.13 — Internet: arquitectura, servicios, evolución e Internet de las Cosas

**Cobertura oficial que debe quedar dominada:** La red Internet: arquitectura de red. Principios de funcionamiento. Servicios: evolución, estado actual y perspectivas de futuro. Internet de las Cosas (IoT).

## 1. Internet como red de redes

Internet interconecta sistemas autónomos (AS) mediante IP. Un AS aplica política de routing común y se identifica con ASN. Operadores ofrecen tránsito; redes pueden hacer peering en IXP. BGP distribuye prefijos entre AS. La resiliencia depende de diversidad de rutas, DNS, proveedores y servicios, no de un único “backbone central”.

## 2. Direccionamiento, NAT e IPv6

IPv4 usa espacio limitado y NAT se ha extendido para conservar direcciones; IPv6 aporta 128 bits y autoconfiguración/ND, entre otras capacidades. Dual stack permite transición. NAT no es un control de seguridad equivalente a firewall y puede complicar extremo-a-extremo.

## 3. DNS, CDN y servicios

DNS es jerárquico/distribuido: resolvers consultan servidores autoritativos siguiendo delegaciones y caché. CDN acerca contenido/servicios a usuarios y reduce latencia/carga del origen. Servicios clásicos: HTTP(S), SMTP/IMAP, DNS, SSH, NTP, transferencia y APIs.

## 4. HTTP/2, HTTP/3 y QUIC

HTTP/2 multiplexa flujos sobre una conexión TCP con framing binario. HTTP/3 (RFC 9114) transporta semántica HTTP sobre QUIC. QUIC v1 (RFC 9000) usa UDP como sustrato, integra seguridad mediante TLS y ofrece streams, control de flujo y establecimiento de baja latencia. HTTP/3 reduce bloqueo entre streams causado por pérdidas a nivel TCP, aunque no elimina congestión ni pérdida física.

## 5. Servicios y perspectivas

Evolución: cifrado por defecto, CDN/edge, cloud, APIs, IPv6, automatización de red, HTTP/3/QUIC y mayor observabilidad. Las tendencias deben estudiarse como arquitectura, no como predicción comercial. La soberanía, resiliencia y dependencia de terceros importan en servicios públicos.

## 6. Arquitectura IoT

Capas prácticas: dispositivo/sensor-actuador → conectividad → gateway/edge → plataforma/broker → almacenamiento/procesamiento → aplicación. El edge reduce latencia/tráfico y puede funcionar ante desconexión; cloud aporta escala y servicios centrales.

## 7. Protocolos IoT

MQTT usa patrón publish/subscribe mediante broker, ligero y común en telemetría. CoAP es protocolo RESTful ligero sobre UDP para dispositivos restringidos. HTTP sigue siendo viable en dispositivos más capaces. Redes de acceso pueden incluir Wi-Fi, Ethernet, celular, LPWAN u otras según alcance/energía/coste.

## 8. Seguridad y ciclo de vida IoT

Identidad única, credenciales no por defecto, secure boot cuando aplique, firmware firmado/OTA, segmentación, mínimos servicios, inventario, logs, cifrado, privacidad y fin de soporte. Dispositivo que no puede actualizarse es una deuda de seguridad durante años.

Datos y trampas de test

* Internet ≠ Web.
* BGP conecta/intercambia rutas entre AS; DNS resuelve nombres.
* NAT ≠ firewall.
* HTTP/3 usa QUIC; QUIC v1 se define en RFC 9000.
* HTTP/3 = RFC 9114.
* DNS es jerárquico y cacheado.
* MQTT suele usar broker y pub/sub; CoAP es REST ligero sobre UDP.
* IoT requiere actualización e identidad, no solo conectividad.

Aplicación al supuesto práctico

Diseña Internet de un servicio público con doble conectividad, DNS autoritativo/resolución, CDN/WAF si procede, protección DDoS, IPv6 planificado, TLS, monitorización y rutas. Para IoT: red separada, identidad/certificados, broker, OTA firmado, inventario, gateway/edge y ciclo de vida.

## Resumen

Internet funciona mediante interconexión de AS, routing BGP y servicios distribuidos como DNS/CDN. Su evolución actual incluye QUIC/HTTP3 e IoT, donde seguridad y ciclo de vida son tan importantes como conectividad.

**Fuentes base:** A1 109/115/117 + RFC 9000 (QUIC) y RFC 9114 (HTTP/3) como actualización.

# IV.14 — NGN/IMS, VoIP, ToIP, comunicaciones unificadas y convergencia fijo-móvil

**Cobertura oficial que debe quedar dominada:** Redes de nueva generación y servicios convergentes (NGN/IMS). VoIP, ToIP y comunicaciones unificadas. Convergencia telefonía fija-telefonía móvil.

## 1. NGN

Next Generation Network busca ofrecer múltiples servicios sobre una infraestructura IP con separación entre transporte y control/servicios, QoS y movilidad. Sustituye la idea de redes verticales independientes por una plataforma convergente.

## 2. IMS

IP Multimedia Subsystem es una arquitectura 3GPP para controlar sesiones multimedia IP. Conceptualmente separa acceso de control de sesión y servicios. Entidades clásicas: P-CSCF (primer punto de contacto), I-CSCF (entrada/consulta) y S-CSCF (control de sesión/registro), junto con repositorios de abonado como HSS en arquitecturas tradicionales. En 5G hay evolución de funciones/datos, pero GSI debe dominar la lógica IMS, no memorizar cada release.

## 3. SIP y SDP

SIP señaliza: registra usuarios, inicia, modifica y termina sesiones. Métodos típicos INVITE, ACK, BYE, REGISTER, OPTIONS; respuestas siguen familias 1xx–6xx. SDP describe medios/códecs/puertos dentro de señalización; no transporta audio.

## 4. RTP/RTCP y códecs

RTP transporta medios en tiempo real sobre UDP habitualmente; RTCP aporta estadísticas/control. Códecs como G.711 o compresores modernos determinan bitrate, calidad, CPU y robustez. El ancho real añade overhead IP/UDP/RTP y, según red, Ethernet/VPN.

## 5. SBC, NAT y seguridad

Session Border Controller protege/intermedia fronteras SIP/medios, normaliza señalización, oculta topología, aplica políticas y ayuda con NAT. Seguridad: TLS para SIP cuando se usa, SRTP para medios, autenticación, límites anti-fraude, segmentación y logs. Exponer PBX/SIP sin controles facilita abuso.

## 6. ToIP y comunicaciones unificadas

VoIP = voz sobre IP; ToIP suele referirse al sistema de telefonía corporativa completo sobre IP (terminales, PBX, numeración, servicios). UC integra voz, vídeo, mensajería, presencia, reuniones y colaboración con identidad/directorio.

## 7. QoS

Voz es sensible a latencia, jitter y pérdida. QoS clasifica/marca (p. ej. DSCP), prioriza colas y evita congestión. Un jitter buffer absorbe variación a costa de latencia. QoS debe ser coherente extremo a extremo; no crea ancho de banda.

## 8. Convergencia fijo-móvil

Busca continuidad de identidad/servicios entre acceso fijo y móvil: número/usuario, presencia, llamada, mensajería y políticas. IMS es una pieza histórica/arquitectónica clave. En diseño actual puede integrarse UC cloud/on-prem, móvil y SIP trunks manteniendo seguridad y continuidad.

Datos y trampas de test

* SIP señaliza; RTP transporta medios.
* SDP describe sesión/medios; no es codec.
* VoIP puede existir sin IMS.
* VoIP ≠ ToIP como alcance conceptual.
* QoS no crea ancho de banda.
* SBC ≠ PBX; tiene función de frontera/política.
* RTCP complementa RTP con control/estadísticas.
* P-CSCF/I-CSCF/S-CSCF son funciones IMS clásicas.

Aplicación al supuesto práctico

Calcula llamadas simultáneas y bitrate con overhead/margen; diseña PBX/UC redundante, SIP trunk dual, SBC, VLAN voz, QoS extremo a extremo, directorio/MFA de administración, TLS/SRTP cuando aplique, grabación/retención legal si se solicita y continuidad. Separa señalización de medios en el diagrama.

## Resumen

NGN/IMS explican la convergencia de servicios IP; SIP/SDP controlan sesiones y RTP/RTCP los medios. Una ToIP empresarial necesita QoS, SBC, seguridad, redundancia y operación.

**Fuentes base:** A1 116 (24/09/2024, tema 16 págs.) como fuente principal.

# IV.15 — Comunicaciones móviles y gestión MDM/EMM/UEM

**Cobertura oficial que debe quedar dominada:** Sistemas de comunicaciones móviles. Generaciones de tecnologías de telefonía móvil. Soluciones de gestión de dispositivos móviles (MDM, EMM, UEM).

## 1. Evolución de generaciones

| **Generación** | **Idea dominante** | **Arquitectura/servicio** |
| --- | --- | --- |
| 2G | voz digital + SMS | GSM; datos limitados con GPRS/EDGE como evolución |
| 3G | datos móviles generalizados | UMTS/HSPA; voz aún con dominio tradicional |
| 4G | banda ancha all-IP | LTE + EPC; VoLTE/IMS para voz |
| 5G | NR, mayor capacidad/latencia/densidad | 5GC, SA/NSA, eMBB/URLLC/mMTC como familias de servicio |

## 2. Acceso radio y core

Una red móvil separa acceso radio (estaciones/celdas y UE) y core (movilidad, sesión, autenticación, salida a datos y servicios). Handover mantiene sesión al cambiar de celda. SIM/eSIM almacena identidad/credenciales; eSIM cambia aprovisionamiento, no elimina autenticación.

## 3. LTE y 5G

LTE se apoya en E-UTRAN y EPC. 5G introduce NR y 5G Core con arquitectura más basada en servicios. **NSA** combina NR con infraestructura LTE/EPC en despliegues; **SA** usa 5G Core. Network slicing permite redes lógicas con características diferenciadas sobre infraestructura común, sujeto a implementación.

## 4. 5G-Advanced

3GPP considera Release 18 la primera release de **5G-Advanced**. Aporta mejoras sobre 5G en radio, posicionamiento, RedCap, XR, energía y otros ámbitos. Para GSI basta entender que es evolución de 5G, no “6G”, y evitar memorizar largas listas de features/releases.

## 5. Modelos de propiedad

BYOD: dispositivo del empleado; COPE: corporativo con uso personal permitido; COBO: corporativo solo negocio; CYOD: usuario elige de catálogo corporativo. Cada modelo cambia privacidad, soporte, borrado y controles.

## 6. MDM, MAM, MCM, EMM y UEM

MDM administra dispositivo (enrolment, perfiles, cifrado, bloqueo/borrado, inventario). MAM gestiona aplicaciones; MCM contenido; EMM integra capacidades móviles; UEM amplía gestión unificada a endpoints móviles y tradicionales. Los límites varían por proveedor, pero la evolución conceptual es examinable.

## 7. Controles de UEM

Inscripción corporativa, cumplimiento (versión, cifrado, root/jailbreak), certificados/Wi-Fi/VPN, distribución de apps, configuración de correo, inventario, restricciones, remote lock/wipe, borrado selectivo, contenedor/perfil de trabajo y acceso condicional ligado a identidad.

## 8. Seguridad y privacidad

MFA, certificados, attestation/postura, cifrado, actualización, protección antiphishing, tienda controlada y separación personal/corporativa. En BYOD debe limitarse la recogida de datos y comunicar qué puede ver/borrar la organización.

Datos y trampas de test

* 2G ≠ 3G ≠ LTE/4G; estudia evolución de voz/datos/core.
* 5G NSA ≠ SA.
* Release 18 = primera release 5G-Advanced.
* MDM ≠ antivirus.
* MDM ⊂ concepto más amplio EMM/UEM en la evolución habitual.
* BYOD/COPE/COBO/CYOD son modelos de propiedad/uso.
* eSIM no elimina autenticación de red.
* 5G no garantiza por sí solo baja latencia extremo a extremo.

Aplicación al supuesto práctico

Define si el parque es COPE/COBO/BYOD, UEM, enrolment, certificados, MFA, acceso condicional, perfiles Wi-Fi/VPN, apps, compliance, cifrado, borrado selectivo y privacidad. Para conectividad crítica explica 4G/5G, cobertura, redundancia, roaming y dependencia de operador.

## Resumen

Las generaciones móviles evolucionan acceso radio y core hasta 5G/5G-Advanced. La gestión empresarial se desplaza de MDM a UEM, integrando identidad, configuración, aplicaciones, cumplimiento y ciclo de vida.

**Fuentes base:** A1 123 v31.1 (15/02/2026) + A1 054/124; 3GPP Release 18 como actualización.

# IV.16 — Videoconferencia: protocolos, dimensionamiento, QoS, salas y equipos

**Cobertura oficial que debe quedar dominada:** Sistemas de videoconferencia. Protocolos. Dimensionamiento y calidad de servicio en las comunicaciones y acondicionamiento de salas y equipos.

## 1. Arquitectura

Cadena: captura de audio/vídeo → codificación → señalización/negociación → transporte de medios → mezcla/reenviado multipunto → decodificación/presentación. Una solución puede ser punto a punto, MCU/SFU on-prem o servicio cloud. La arquitectura condiciona ancho de banda y resiliencia.

## 2. SIP, H.323 y WebRTC

H.323 es suite histórica ITU-T para multimedia sobre redes de paquetes; SIP es señalización IETF ampliamente usada. Ambos pueden negociar sesiones; RTP/RTCP transporta/controla medios. WebRTC permite comunicación en navegador/app con APIs y un conjunto de protocolos seguros; **WebRTC no es un codec**.

## 3. SDP, RTP/RTCP y NAT traversal

SDP describe codecs, direcciones/puertos y parámetros. RTP transporta audio/vídeo; RTCP aporta calidad/estadísticas. Para atravesar NAT/firewall en WebRTC se usan ICE como marco de candidatos, STUN para descubrir mapeos y TURN como relay cuando la conectividad directa falla.

## 4. Códecs

Vídeo: H.264/AVC, H.265/HEVC, VP8/VP9, AV1 según plataforma/licencia/capacidad. Audio: Opus y familias tradicionales. Más compresión reduce bitrate a costa de CPU/latencia/compatibilidad. La interoperabilidad exige negociar un conjunto común.

## 5. MCU y SFU

MCU recibe, decodifica/compone y vuelve a codificar una mezcla; reduce streams al cliente pero consume servidor y puede añadir latencia. SFU reenvía streams/capas seleccionadas sin mezcla completa; desplaza más trabajo al cliente/red y escala bien en WebRTC. La elección depende de terminales, grabación, layouts y escala.

## 6. Dimensionamiento

Capacidad aproximada = bitrate de cada flujo × concurrencia × direcciones + overhead + margen. En una sede con N reuniones, no se multiplica por usuarios totales si no son simultáneos. Considerar subida y bajada, presentaciones, simulcast/SVC y tráfico a cloud.

**Ejemplo:** 20 salas simultáneas a 3 Mb/s de vídeo+audio por sentido hacia cloud ≈ 60 Mb/s de subida y 60 Mb/s de bajada antes de overhead/margen. Con 30% de margen, reservar ~78 Mb/s por sentido, además de otros servicios.

## 7. QoS y calidad

Latencia extremo a extremo, jitter, pérdida y bitrate afectan calidad. Jitter buffer suaviza variación a costa de retardo. QoS clasifica/marca y prioriza; la medición puede incluir RTT, packet loss, jitter, frame rate y MOS/estimaciones. QoS solo funciona si la ruta respeta políticas.

## 8. Sala

Cámara con encuadre adecuado, micrófonos y altavoces con cancelación de eco, pantalla proporcional, iluminación frontal uniforme, tratamiento acústico, posición de participantes, red cableada preferente, alimentación y control. La experiencia depende más de audio claro que de resolución extrema.

## 9. Seguridad y accesibilidad

Identidad/SSO/MFA para administración y reuniones sensibles, cifrado en tránsito, controles de invitados/lobby, actualización, permisos de grabación, retención, privacidad y logs. Accesibilidad: subtitulado, transcripción, compatibilidad con ayudas y alternativas cuando proceda.

Datos y trampas de test

* SIP/H.323 = señalización/control; RTP = medios.
* WebRTC ≠ codec.
* Jitter = variación de retardo.
* MCU ≠ SFU.
* STUN ≠ TURN; TURN relaya tráfico cuando es necesario.
* QoS no crea ancho de banda.
* Dimensionar por concurrencia real, no por usuarios totales.
* Audio deficiente suele arruinar más una reunión que vídeo de menor resolución.

Aplicación al supuesto práctico

Calcula concurrencia y bitrate con overhead/margen; define WAN/Internet y QoS, redundancia, SBC/gateway si interopera con SIP, plataforma cloud/on-prem, seguridad, grabación, monitorización y diseño de salas. Incluye STUN/TURN/ICE si WebRTC y requisitos de accesibilidad.

## Resumen

Videoconferencia combina protocolos, codecs, red y sala. Para un supuesto, el valor está en calcular concurrencia, controlar latencia/jitter/pérdida, garantizar interoperabilidad y diseñar una experiencia operable y segura.

**Fuentes base:** A1 130 (06/09/2024, resumen 11 págs.) + A1 129; actualización WebRTC/NAT traversal.

# ANEXO A — Puertos, protocolos y siglas de alta rentabilidad

Los puertos indicados son valores bien conocidos por defecto; pueden cambiarse y algunos protocolos usan rangos/datos dinámicos. Memorizar el servicio y la función es más importante que creer que el puerto identifica siempre una aplicación.

| **Servicio / protocolo** | **Puerto habitual** | **Transporte / nota** |
| --- | --- | --- |
| SSH | 22 | TCP |
| DNS | 53 | UDP/TCP; DNS moderno puede usar transportes cifrados adicionales |
| DHCPv4 servidor/cliente | 67/68 | UDP |
| HTTP | 80 | TCP |
| HTTPS | 443 | TCP; HTTP/3 usa QUIC sobre UDP 443 habitualmente |
| NTP | 123 | UDP |
| SNMP | 161 | UDP consultas/agente |
| SNMP traps | 162 | UDP habitual |
| LDAP | 389 | TCP/UDP según uso; STARTTLS posible |
| LDAPS | 636 | TCP TLS directo |
| SMB | 445 | TCP |
| RADIUS auth/accounting | 1812/1813 | UDP habitual |
| SIP | 5060 | UDP/TCP habitual sin TLS |
| SIP TLS | 5061 | TCP/TLS habitual |
| Syslog | 514 | UDP tradicional; despliegues seguros pueden usar TLS/otros puertos |

## Siglas que deben salir sin pensar

| **Sigla** | **Significado / función** |
| --- | --- |
| RPO | Recovery Point Objective: pérdida máxima de datos objetivo |
| RTO | Recovery Time Objective: tiempo objetivo de recuperación |
| SLI/SLO/SLA | indicador / objetivo / acuerdo |
| IOPS | operaciones de E/S por segundo |
| HA/DR | alta disponibilidad / recuperación ante desastres |
| MIB/OID | base de información de gestión / identificador de objeto SNMP |
| AAA | autenticación, autorización y accounting |
| NAC | Network Access Control |
| PKI | infraestructura de clave pública |
| MPLS | Multiprotocol Label Switching |
| WDM | Wavelength Division Multiplexing |
| MLO | Multi-Link Operation de Wi-Fi 7 |
| IMS | IP Multimedia Subsystem |
| SBC | Session Border Controller |
| UEM | Unified Endpoint Management |
| MCU/SFU | dos arquitecturas de multipunto en vídeo |

# ANEXO B — Checklist para el segundo ejercicio

Cuando un supuesto pida infraestructura o comunicaciones, responde en capas para no olvidar requisitos:

* **Requisitos:** usuarios, sedes, carga, concurrencia, datos, latencia, disponibilidad, RPO/RTO, crecimiento, normativa.
* **Arquitectura:** zonas, compute, storage, red, acceso, Internet/WAN, servicios de infraestructura.
* **Disponibilidad:** dominios de fallo, N+1/2N donde proceda, cluster, balanceo, doble operador, HA vs DR.
* **Seguridad:** segmentación, IAM/MFA/PAM, firewall/WAF/NAC, cifrado/PKI/VPN, EDR, ENS.
* **Operación:** configuración/versiones, parcheo, logs, métricas/trazas, SNMP/telemetría, backups, cambios e incidentes.
* **Capacidad:** CPU/RAM/IOPS/throughput/latencia, ancho de banda, PoE, almacenamiento útil y crecimiento.
* **Recuperación:** backup probado, RPO/RTO, runbook, DR, failover/failback.
* **Gobierno:** documentación, SLA/SLO, responsables, pruebas, aceptación, formación y reversibilidad.

**Regla de redacción:** cada tecnología nombrada debe resolver un requisito o un riesgo. “Pondría Kubernetes, SD-WAN, Zero Trust y cloud” sin relación causal puntúa peor que una arquitectura más sencilla bien justificada.

# ANEXO C — Estrategia de estudio del Bloque IV

| **Prioridad** | **Temas** | **Cómo estudiarlos** |
| --- | --- | --- |
| Crítica | IV.01, IV.02, IV.04, IV.05, IV.08, IV.09, IV.12 | Teoría + preguntas cerradas + mini-supuestos de administración/red/seguridad. |
| Alta | IV.03, IV.06, IV.07, IV.10, IV.11, IV.13, IV.14, IV.15 | Teoría + tablas comparativas + diagramas y cálculos básicos. |
| Media-alta | IV.16 | Protocolos + cálculo de ancho de banda + diseño de sala/QoS. |

Primera vuelta: comprender arquitectura y diferencias. Segunda: memoria activa de siglas/puertos/estándares. Tercera: test y ejercicios (RAID, capacidad, RPO/RTO, ancho de banda, troubleshooting). Cuarta: mini-supuestos de 20–30 minutos y corrección con checklist.

## Fuentes oficiales de actualización utilizadas

* Programa oficial GSI A2 — BOE-A-2025-26262.
* Real Decreto 311/2022, ENS, texto consolidado (última actualización publicada 06/11/2024).
* RFC 9846 (julio 2026) — TLS 1.3; obsoleta RFC 8446.
* RFC 9000 — QUIC v1; RFC 9114 — HTTP/3.
* 3GPP Release 18 — inicio de 5G-Advanced.
* IEEE 802.11be — Wi-Fi 7.
