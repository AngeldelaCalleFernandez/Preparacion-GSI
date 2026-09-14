# GSI A2 - PRÁCTICA ACTIVA 04

## Solucionario razonado - Operación de sistemas, backup, storage, HA y DR

**Método de corrección:** una respuesta completa debe identificar el concepto, justificarlo con el dato del caso y proponer una acción operativa. En cálculos: hipótesis → fórmula/operación → resultado → interpretación.

# PARTE A - IV.01

1 - Servicio caído

Orden razonable: 1) confirmar alcance y síntoma; 2) estado del proceso/servicio y dependencias; 3) logs; 4) puerto/listener; 5) resolución DNS/ruta/firewall; 6) identidad/permisos/cuenta de servicio; 7) certificados/secretos; 8) almacenamiento/espacio/inodos; 9) CPU, memoria, disco y red; 10) cambios recientes. El orden puede adaptarse, pero debe reducir hipótesis sin cambiar muchas variables a la vez.

2 - Proceso vs servicio

Un proceso puede existir y estar bloqueado, no escuchar el puerto, fallar health checks o no llegar a una dependencia. Comprobaría puerto/endpoint, health check funcional, logs, conexión a BD/cola/DNS y métricas de latencia/error.

3 - Disco lleno

Riesgos: imposibilidad de escribir logs, temporales, transacciones, actualizaciones y datos; servicios pueden caer o quedar inconsistentes. Primero identificar qué crece, preservar evidencia y liberar de forma controlada (rotación, temporales seguros, ampliación), no borrar logs/BD arbitrariamente. Después corregir alertas, retención y capacidad.

4 - Identidad y privilegios

Problemas: exposición de credenciales privilegiadas, falta de separación de funciones y mayor impacto ante phishing/malware. Mejor: cuenta nominal ordinaria + cuenta administrativa separada, elevación controlada, MFA/PAM, mínimo privilegio, logging y cuentas de servicio no interactivas.

5 - POSIX y ACL

Los bits rwx expresan permisos clásicos propietario/grupo/otros; una ACL puede conceder o restringir derechos adicionales a identidades concretas. Revisar solo rwx puede ocultar accesos efectivos. Debe evaluarse el permiso efectivo completo.

6 - Arranque Linux

**Firmware → cargador → kernel/initramfs → init/systemd → targets/servicios.** Fallos: firmware/hardware y boot device; cargador/configuración de arranque; kernel/drivers/root filesystem; unidades, dependencias y servicios.

7 - Patch management

Secuencia: inventariar → evaluar criticidad/compatibilidad → priorizar → probar → preparar despliegue/rollback → desplegar por anillos → verificar → documentar. Rollback/contingencia se diseña antes del cambio, no después del fallo.

8 - Parche urgente

La urgencia no elimina riesgo operativo. Proceso acelerado: valorar exposición/mitigaciones temporales, probar en entorno representativo o anillo mínimo, preparar backup/snapshot/rollback válido, desplegar progresivamente, monitorizar y documentar excepción/cambio. Si el riesgo de no parchear supera claramente el operativo, se acelera con controles proporcionales.

9 - Idempotencia

“Añadir una línea” puede duplicarse y “crear usuario” puede fallar/duplicar si no comprueba estado. Estado objetivo: usuario backup existe con atributos definidos; fichero contiene exactamente la configuración requerida; servicio está en estado deseado y solo se reinicia cuando cambia algo.

10 - Rendimiento

No necesariamente. Alta utilización puede ser eficiente si latencia, errores, throughput y SLO son correctos. Revisar tendencia, cola/run queue, throttling, tiempo de respuesta, picos, headroom, crecimiento y dependencia de otras cargas. Comparar con baseline.

# PARTE B - IV.02

11 - Base vs instancia

La base representa datos/estructuras persistentes; la instancia, procesos/memoria/endpoints que prestan servicio (terminología concreta varía). “Caída” puede significar ficheros sanos pero instancia parada, listener inaccesible, memoria agotada o storage no montado. La distinción orienta el diagnóstico.

12 - Autenticación/autorización

La autenticación ha funcionado; falla la autorización/privilegio sobre el objeto o rol.

13 - Privilegios mínimos

Crear una cuenta de aplicación sin privilegios administrativos, asignar rol funcional y conceder solo SELECT/INSERT/UPDATE/EXECUTE necesarios sobre objetos concretos. Separar cuentas de despliegue/migración y DBA. Auditar cambios y proteger secretos.

14 - Consulta lenta

Reproducir y medir; comparar plan actual/anterior; validar estadísticas/cardinalidades; revisar si faltan/han dejado de usarse índices; waits/locks y transacciones largas; CPU/I/O/memoria; conexiones y cambios de datos/configuración. Cambiar una hipótesis y medir de nuevo.

15 - Índice

Puede reducir scans y latencia de consultas, pero consume espacio, aumenta trabajo de INSERT/UPDATE/DELETE, mantenimiento y puede ser inútil si baja selectividad/orden de columnas no ayuda. “Más índices” no equivale a “más rendimiento”.

16 - Deadlock

El motor detecta/prevenir según implementación y suele abortar una víctima. La aplicación debe tratar el error y reintentar de forma segura. Revisar orden de acceso a recursos, duración de transacciones, índices/consultas lentas y granularidad de bloqueos.

17 - Réplica no es backup

Puede replicar borrado accidental, UPDATE erróneo, corrupción lógica, ransomware/credenciales comprometidas y, según arquitectura, errores de aplicación. Además puede compartir dominio de fallo. Se necesitan copias independientes, retención y pruebas de restore.

18 - PITR

Restaurar una copia base válida y reproducir logs/WAL hasta un instante anterior al borrado (por ejemplo 10:16:xx), según capacidades del motor. Permite recuperar más cerca del incidente que una full diaria.

19 - Sync vs async

Síncrona confirma con réplica y puede reducir RPO pero añade latencia/dependencia del enlace. Asíncrona desacopla latencia pero admite lag y pérdida potencial. En enlace remoto de alta latencia suele ser razonable async si el RPO lo permite; si no, hay que rediseñar o aceptar coste/latencia. La decisión la manda RPO/RTO y negocio.

20 - Upgrade mayor

Compatibilidad de aplicación/drivers/extensiones → backup/restauración probada → entorno de prueba → réplica/piloto → plan de migración y ventana → rollback/fallback → monitorización de errores/rendimiento → validación funcional y de datos → cierre/documentación.

# PARTE C - IV.03

21 - Mantenimiento

a) Predictivo (medición anticipa fallo). b) Correctivo. c) Preventivo. d) Adaptativo en software.

22 - Clasificación

a) Incidente. b) Problema. c) Petición de servicio. d) Cambio.

23 - Prioridad

A tiene mayor prioridad por impacto masivo y urgencia temporal; B tiene impacto limitado. La prioridad combina impacto y urgencia, no solo número de tickets.

24 - Escalado

Funcional: se necesita conocimiento/especialización superior (storage). Jerárquico: se necesita autoridad, recursos, coordinación o gestionar riesgo de incumplimiento/SLA. Pueden coexistir.

25 - Incidente mayor

Activar mando y canal único; confirmar alcance; comunicar estado periódico; preservar cambios/evidencia; diagnosticar por dominios; aplicar contención/recuperación con riesgo controlado; validar servicio; cerrar comunicaciones; postmortem/RCA con acciones y responsables.

26 - Tipos de copia

Full copia todo. Incremental copia cambios desde la última copia de la cadena; restore suele necesitar full + todos los incrementales posteriores. Diferencial copia cambios desde la última full; restore suele necesitar full + último diferencial. Incremental reduce normalmente volumen diario; diferencial simplifica la cadena de restore.

27 - Incremental

Necesitas **full del domingo + incremental lunes + martes + miércoles**, en orden, salvo mecanismos sintéticos/específicos del producto.

28 - Diferencial

Necesitas **full del domingo + diferencial del miércoles**, porque el diferencial del miércoles incluye los cambios acumulados desde la full.

29 - 3-2-1-1-0

Varias copias, medios/ubicaciones diferentes, una fuera del sitio, una offline/inmutable y cero errores tras verificación. “Job verde” solo indica que una tarea finalizó; hay que comprobar integridad y restauración funcional.

30 - Ransomware

Credenciales separadas, repositorio inmutable/offline, MFA/PAM, aislamiento de red y dominio administrativo, cifrado, retención protegida, borrado protegido y pruebas. Una copia accesible con las mismas credenciales puede caer con producción.

31 - RPO 15 min

No es coherente una única copia diaria si se exige perder como máximo 15 min. Se necesitaría mecanismo más frecuente: logs/WAL shipping, snapshots consistentes, replicación o backups incrementales muy frecuentes, según sistema y riesgo.

32 - RTO

RTO 30 min exige infraestructura preparada, automatización, runbooks, capacidad disponible y pruebas; 24 h admite procesos más manuales y restauración desde medios más lentos. Backup idéntico no implica tiempo de recuperación idéntico.

33 - Restore

La prueba debe recuperar **servicio**, no solo bytes: SO/infra, aplicación, configuración, certificados/secretos, datos, dependencias y validación funcional. El fallo revela que la copia no cubría todos los componentes del runbook.

# PARTE D - IV.04

34 - CI y CMDB

Ejemplos: servidor, VM, switch, aplicación, certificado, BD, versión, servicio externo. La CMDB conserva atributos, relaciones y estado; no es solo inventario. Su valor está en saber qué depende de qué y cuál es la baseline.

35 - Drift

Es **configuration drift** frente a baseline. Ayudan discovery, config-as-code/IaC, control de cambios, escaneo de configuración y reconciliación automática. Antes de cerrar el puerto debe investigarse si hubo un cambio legítimo no documentado.

36 - Tipos de cambio

a) Estándar/preautorizado si realmente es repetitivo y bajo riesgo. b) Normal. c) Emergencia. La emergencia acelera controles, no elimina registro, validación y revisión posterior.

37 - RFC

Descripción/objetivo, CIs afectados, dependencias, impacto, riesgo, ventana, responsable, plan de implementación, pruebas, métricas de éxito, comunicaciones, backup/rollback y autorización.

38 - Versiones/configuración

Git registra artefactos/versiones; gestión de configuración gobierna estado real del servicio, CIs, relaciones, parámetros efectivos, certificados, dependencias y drift. Puede haber repositorio perfecto y producción desviada.

39 - Imperativo/declarativo

Imperativo prescribe pasos; declarativo expresa estado objetivo. Con reconciliador, el sistema compara real vs deseado y converge, reduciendo drift y facilitando repetibilidad, siempre que existan controles y pruebas.

40 - Idempotencia

La propiedad es **idempotencia**: repetir la automatización mantiene el mismo estado objetivo, sin efectos acumulativos no deseados.

41 - Observabilidad

Añadir logs estructurados y correlacionados, métricas de servicio y recursos, trazas distribuidas/trace IDs y eventos/cambios. La meta es poder inferir dónde y por qué se degrada la petición extremo a extremo.

42 - SLI/SLO/SLA

99,93 % medido = **SLI**. Objetivo interno 99,95 % = **SLO**. Contrato 99,9 % con penalización = **SLA**.

43 - CPU

El segundo puede sufrir latencia de almacenamiento, red, locks, pool de conexiones o dependencia externa. El primero puede usar CPU eficientemente. Diagnóstico: latencia, throughput, errores, saturación/colas y dependencias; correlacionar con SLO.

44 - Bottleneck

Hipótesis: storage/I/O se ha convertido en cuello. Validar con latencia por volumen/LUN, cola, errores, paths, cabina, cambios recientes, IOPS/throughput, vecinos de carga y comparación con baseline. No basta con una métrica aislada.

45 - Crecimiento

Demanda a 3 años = 12 × 1,25³ = 23,4375 TB. Con 20 % de headroom: 23,4375 × 1,20 = **28,125 TB** aproximadamente.

46 - Autoscaling

Autoscaling ajusta recursos dentro de límites; capacity planning anticipa demanda, límites físicos, cuotas, storage, red, BD, presupuesto y headroom. Si el cluster o una dependencia alcanza techo, escalar pods no resuelve el cuello.

# PARTE E - IV.05

47 - Modelos

a) NAS. b) SAN. c) DAS. d) Objeto.

48 - NAS/SAN

Ambas pueden estar en red. NAS expone **ficheros** (NFS/SMB); SAN expone **bloques remotos** (FC/iSCSI/NVMe-oF). La diferencia central es la abstracción.

49 - RAID

RAID 0 = striping sin redundancia; RAID 1 = espejo; RAID 5 = paridad distribuida (1 fallo típico); RAID 6 = doble paridad (2); RAID 10 = stripe sobre espejos.

50 - Capacidad RAID

Hipótesis simplificada, discos iguales y sin overhead: RAID 5 ≈ (8−1)×4 = **28 TB**; RAID 6 ≈ (8−2)×4 = **24 TB**; RAID 10 ≈ 8/2×4 = **16 TB**. La capacidad real puede ser menor por unidades, metadatos, spare, formato y reservas.

51 - RAID ≠ backup

RAID protege principalmente disponibilidad ante fallo físico de discos según nivel. Borrados, corrupción lógica, ransomware, error administrativo o pérdida del sitio pueden afectar a todo el array. Backup necesita independencia/retención/recuperación.

52 - Zoning/LUN masking

Zoning controla visibilidad/conectividad entre iniciadores y targets en la fabric FC. LUN masking controla qué volúmenes/LUN presenta la cabina a cada host. Son capas complementarias.

53 - Multipath

Gestiona múltiples caminos hacia storage para failover y, según pila, balanceo. No garantiza que la propia cabina, red completa o aplicación sean HA; si todos los caminos comparten un switch/array siguen existiendo fallos comunes.

54 - Protocolos

iSCSI = bloques/SCSI sobre TCP/IP. Fibre Channel = bloques en fabric especializada. NFS = ficheros (habitual Unix/Linux). SMB = ficheros (habitual Windows/multiplataforma). NVMe-oF = bloques con semántica NVMe sobre fabric.

55 - Thin provisioning

80 % de 24 TB = 19,2 TB. Faltan 1,2 TB; a 1,5 TB/mes → **0,8 meses** para el 80 %. Para agotamiento: (24−18)/1,5 = **4 meses**. La sobreasignación lógica exige alertas mucho antes del 100 %.

56 - Snapshot

Puede depender de los mismos controladores, discos/pool y dominio administrativo. Si se pierde/corrompe la cabina o se borran snapshots con credenciales comprometidas, desaparece la protección. Es útil, pero no reemplaza copia independiente.

57 - IOPS/throughput

20.000 × 8 KiB = 160.000 KiB/s = **156,25 MiB/s** aproximadamente. Con bloques mayores, mismos IOPS generan más throughput; por eso se necesitan ambas métricas y latencia.

58 - Perfil

OLTP: latencia, IOPS aleatorias, colas, ratio lectura/escritura y concurrencia. Backup secuencial: throughput sostenido, ventana, ancho de banda y escritura secuencial. Un diseño optimizado para uno puede no serlo para otro.

59 - Capacidad útil

Descontar/parar espacio por protección RAID/erasure equivalente, snapshots/clones, metadatos, spare/reservas, thin real consumido, crecimiento, replicación y márgenes operativos. “Raw” no es “usable”.

60 - Seguridad storage

Red/segmentación de administración y datos; autenticación/RBAC/PAM; cifrado en tránsito/reposo cuando proceda; firmware soportado; logging/alertas; control de zoning/masking; backups de configuración; inmutabilidad/WORM para copias; borrado seguro y pruebas de recuperación.

# PARTE F - IV.06

61 - N/N+1/2N

600/200 = 3 módulos para N. N+1 = **4**. 2N = **6**. Es un modelo simplificado; la topología real puede combinar niveles y reservas.

62 - PUE

PUE = energía total / energía TI = 420/280 = **1,50**. Significa que por cada unidad de energía TI hay aproximadamente 0,5 adicional de overhead de infraestructura en ese punto de medida.

63 - PUE/disponibilidad

No. PUE mide eficiencia energética, no redundancia, mantenibilidad, RTO ni disponibilidad. Un CPD más eficiente puede tener peor arquitectura de continuidad.

64 - Consolidación

Mejora utilización, gestión y flexibilidad, pero aumenta blast radius: falla un host/storage y caen muchas VMs. Controles: N+1 de hosts/capacidad de evacuación, anti-affinity para réplicas, HA, multipath/storage redundante, reservas/overcommit controlado y pruebas.

65 - Live migration

Permite mantenimiento y redistribución sin parada significativa entre hosts accesibles, pero no crea copia histórica ni protege ante pérdida de sitio/storage compartido. DR requiere otro dominio de fallo, datos/identidades/routing y runbooks.

66 - SPOF

Switch único de storage y balanceador único son SPOF. Añadir pares/redundancia real, caminos físicamente independientes, multipath, balanceadores HA y evitar que ambos redundantes compartan el mismo fallo de alimentación/red.

67 - Activo-activo/pasivo

Activo-activo usa capacidad simultánea y puede reducir impacto de fallo, pero exige resolver estado, consistencia, sesiones, balanceo y capacidad durante degradación. Activo-pasivo simplifica algunos escenarios a costa de capacidad ociosa y tiempo de failover. La elección depende de requisitos.

68 - Balanceo y DR

a) Routing por path requiere funcionalidad **L7** (HTTP). b) Pesos 2:1:1 suman 4: nodo A = 900×2/4 = **450 req/s**; B = **225**; C = **225**. c) Health checks y nodos múltiples eliminan fallos locales, pero si todo está en el mismo CPD no cubre desastre de sitio. DR exige otro dominio de fallo, replicación/backups, DNS/routing y failover/failback probado.

# Checklist de corrección para mini-supuestos de operación

* **Alcance y síntoma:** qué falla, a quién, desde cuándo y qué cambió.
* **Hipótesis por dominios:** proceso/servicio, identidad, red, storage, BD, dependencia, capacidad.
* **Evidencia:** logs, métricas, trazas, configuración, alertas y baseline.
* **Recuperación:** contención, failover/restore, validación funcional y comunicación.
* **Prevención:** parcheo, automatización, capacidad, redundancia, backup, pruebas y cambios.
* **RPO/RTO y dominios de fallo:** justificar cada mecanismo de HA/DR.

**Trampas que debes detectar sin pensar:** réplica ≠ backup; snapshot ≠ copia independiente; RAID ≠ backup; HA ≠ DR; PUE ≠ disponibilidad; monitorización ≠ observabilidad; control de versiones ≠ gestión de configuración; autoscaling ≠ capacity planning; proceso vivo ≠ servicio sano.

Solucionario construido sobre el material V2.1 IV.01-IV.06. Los cálculos “derivados” declaran hipótesis y no sustituyen especificaciones reales de fabricante/arquitectura.
