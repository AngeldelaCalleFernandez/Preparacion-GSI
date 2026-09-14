# GSI A2 - PRACTICA ACTIVA 12

## Supuestos integradores de infraestructura, redes, seguridad y operacion - SOLUCIONARIO Y GUIA DE CORRECCION

**Base principal:** II.08, II.10, II.13 y IV.01-IV.13 de los apuntes V2.1. La practica integra conocimientos; no sustituye esos temas.

**Formato de entrenamiento:** 10 supuestos de 5 preguntas. Los supuestos 9 y 10 deben hacerse como simulacro completo. El objetivo no es nombrar mas tecnologias, sino construir una arquitectura coherente y operable que responda a requisitos, dominios de fallo, riesgo y SLO/RPO/RTO.

**Como corregirte:** 1) parte de requisitos y criticidad; 2) identifica dominios de fallo; 3) conecta red, seguridad, operacion y recuperacion; 4) justifica cada tecnologia; 5) separa HA, backup y DR; 6) conserva evidencia en diagnostico/incidentes; 7) evita contradicciones entre failover, datos y rollback.

# Mapa de cobertura

| Supuesto | Foco | Tipo |
| --- | --- | --- |
| 1. Red multisede con servicios criticos | II.08 + IV.09 + IV.10 + IV.12 | Entrenamiento integrador |
| 2. Nuevo CPD con alta disponibilidad y DR | IV.03 + IV.05 + IV.06 + IV.04 | Entrenamiento integrador |
| 3. Ransomware en infraestructura corporativa | II.10 + II.13 + IV.03 + IV.12 | Entrenamiento integrador |
| 4. Degradacion de rendimiento de un servicio critico | IV.01 + IV.02 + IV.04 + IV.05 | Entrenamiento integrador |
| 5. Nueva sede: LAN, Wi-Fi y acceso seguro | IV.07 + IV.08 + IV.09 + IV.11 + IV.12 | Entrenamiento integrador |
| 6. Migracion de almacenamiento y plataforma virtual | IV.02 + IV.05 + IV.06 | Entrenamiento integrador |
| 7. Servicio publico en Internet y DMZ | II.13 + IV.04 + IV.12 + IV.13 | Entrenamiento integrador |
| 8. Red IoT para edificio inteligente | IV.08 + IV.12 + IV.13 | Entrenamiento integrador |
| 9. SIMULACRO A - Perdida total del CPD principal | SIMULACRO integral IV.01-06 + IV.09-13 | Simulacro completo |
| 10. SIMULACRO B - Arquitectura multisede segura y operable | SIMULACRO integral II.08/10/13 + IV.01-13 | Simulacro completo |

# SUPUESTO 1 - Red multisede con servicios criticos

**Enunciado:** Un organismo tiene una sede central, un CPD y 18 delegaciones. Cada delegacion utiliza aplicaciones corporativas, telefonia IP y videollamadas. Actualmente existe un unico enlace de operador por sede. Se producen cortes esporadicos y la direccion quiere mejorar disponibilidad sin multiplicar innecesariamente el coste. Algunos servicios viajan por Internet y otros por red privada del operador.

Pregunta 1

Defina los requisitos tecnicos y de servicio que debe conocer antes de redisenar la WAN.

**Respuesta modelo / puntos que deben aparecer:**

Partir de sedes, usuarios, aplicaciones, flujos, anchos de banda y perfil horario; latencia/jitter/perdida tolerables; SLA/SLO, disponibilidad, tiempos de reparacion, cifrado y requisitos de seguridad; crecimiento; servicios cloud; dependencia de DNS; direccionamiento; criticidad y coste. Identificar RTO de la conectividad y que servicios deben sobrevivir a la perdida de un carrier. La decision se toma por requisito, no por tecnologia.

Pregunta 2

Compare MPLS, doble acceso a Internet con VPN y SD-WAN para este escenario, indicando ventajas, limites y criterios de eleccion.

**Respuesta modelo / puntos que deben aparecer:**

MPLS aporta red gestionada, QoS y VPN de operador, pero no cifra por si mismo y puede tener mayor coste/plazo. Doble Internet + VPN puede ser economico y flexible, pero la calidad depende de underlays y de la operacion de VPN/routing. SD-WAN permite overlay, politica central y seleccion dinamica de camino sobre varios underlays segun SLA de aplicacion; introduce dependencia de plataforma/control plane. Puede combinarse MPLS + Internet o dos Internet. Elegir por SLA, diversidad, cifrado, operacion y TCO.

Pregunta 3

Proponga una arquitectura de redundancia de enlaces y routing que evite una falsa redundancia.

**Respuesta modelo / puntos que deben aparecer:**

Dos enlaces solo son redundantes si reducen el fallo comun: operadores, acometidas y rutas fisicas diversas cuando sea posible, CPE/alimentacion redundante donde la criticidad lo justifique. Routing dinamico o mecanismo de failover con convergencia probada; rutas por defecto/estaticas pueden ser suficientes en sedes pequenas. Evitar redistribuciones innecesarias. Para Internet multihomed a gran escala, BGP puede aplicar politica; dentro de la organizacion, OSPF u otro IGP segun diseno. Probar perdida real de un enlace y retorno.

Pregunta 4

Explique como trataria QoS para voz/video y como verificaria que la politica funciona extremo a extremo.

**Respuesta modelo / puntos que deben aparecer:**

Clasificar/marcar cerca del origen, preservar marcado y aplicar colas/prioridad coherentes en todos los dominios que lo soporten. Voz/video son sensibles a latencia, jitter y perdida; shaping/policing se usan con criterio. QoS no crea ancho de banda. Verificar con mediciones de RTT, jitter, perdida, colas/drops, utilizacion, pruebas simultaneas de carga y calidad percibida. Si el operador remarca o no respeta DSCP, debe conocerse contractualmente.

Pregunta 5

Disene la monitorizacion y el procedimiento de diagnostico cuando una delegacion comunica 'Internet funciona, pero la aplicacion corporativa va muy lenta'.

**Respuesta modelo / puntos que deben aparecer:**

Comparar por capas y por alcance: fisico/enlace y errores; underlay; IP/gateway; rutas; DNS; VPN/overlay; puertos; aplicacion. Recoger SNMPv3/telemetria, syslog y flows para interfaces, perdida, latencia, utilizacion y cambios de ruta. Comparar si otras sedes sufren igual; medir al destino corporativo y al Internet publico. Una WAN sana con una aplicacion lenta puede indicar DNS, dependencia, saturacion del CPD o servidor, no el enlace. Cambiar una hipotesis cada vez y conservar evidencia.

**Autocorreccion:** ¿He identificado el fallo comun? ¿He distinguido redundancia, HA, backup y DR? ¿Las reglas de red y seguridad permiten solo los flujos necesarios? ¿Mi monitorizacion demostraría el SLO? ¿El plan de recuperacion es practicable y tiene evidencia?

# SUPUESTO 2 - Nuevo CPD con alta disponibilidad y DR

**Enunciado:** Se construira un CPD para servicios administrativos criticos. La direccion exige tolerar el fallo de un host, un switch y una UPS sin parada completa. Para dos servicios se ha fijado RTO de 60 minutos y RPO de 15 minutos ante perdida total del CPD. Se dispone de una segunda sede a 80 km con conectividad independiente.

Pregunta 1

Proponga el diseno fisico y electrico minimo del CPD y explique N, N+1 y 2N en el contexto del caso.

**Respuesta modelo / puntos que deben aparecer:**

Inventariar racks/RU, potencia TI y crecimiento, disipacion, cableado, puertos y peso. Cadena electrica con cuadros/ATS, UPS, PDU y grupo electrogeno segun autonomia; climatizacion redundante y contencion; proteccion frente a incendio, agua e intrusiones. N cubre solo la carga; N+1 añade un componente de reserva; 2N duplica la capacidad completa del subsistema diseñado. Para tolerar una UPS, N+1 o mejor segun topologia y mantenimiento. PUE sirve para eficiencia energetica, no demuestra disponibilidad.

Pregunta 2

Disene la plataforma de virtualizacion, red, balanceo y almacenamiento eliminando puntos unicos de fallo.

**Respuesta modelo / puntos que deben aparecer:**

Cluster de hipervisores con capacidad para perder al menos un nodo sin incumplir SLO, anti-affinity para replicas criticas y overcommit controlado. Red con switches/caminos redundantes y LACP/multipath segun capa. Storage con controladoras/caminos redundantes, RAID adecuado y capacidad/IOPS calculados. Balanceadores redundantes con health checks; servicios stateless cuando sea posible. Eliminar SPOF tambien en DNS, identidad, certificados y gestion.

Pregunta 3

Explique por que alta disponibilidad local no cumple por si sola el requisito de desastre y proponga la arquitectura DR.

**Respuesta modelo / puntos que deben aparecer:**

HA cubre fallos dentro del dominio local; incendio o perdida de sitio afecta ambos nodos si estan en el mismo CPD. DR requiere segundo dominio de fallo: sede secundaria, conectividad/routing independientes, identidad/certificados/dependencias disponibles, capacidad reservada y datos replicados o recuperables. Elegir warm/hot segun RTO. RPO 15 min condiciona frecuencia/replicacion; RTO 60 min exige automatizacion y runbook probado.

Pregunta 4

Defina una estrategia de datos y backup compatible con RPO 15 min y RTO 60 min, distinguiendo replica de backup.

**Respuesta modelo / puntos que deben aparecer:**

Para datos transaccionales: backups consistentes + logs/WAL o tecnologia equivalente que permita PITR, mas replicacion a segunda sede si se necesita RPO bajo. La replicacion reduce perdida/facilita failover, pero puede replicar borrado o corrupcion; no es backup. Mantener copias con retencion, fuera del fallo comun y alguna proteccion offline/inmutable segun riesgo. Restauraciones periodicas deben demostrar recuperabilidad. El plan debe probar que punto recuperado no supera 15 min y servicio vuelve antes de 60 min.

Pregunta 5

Describa un ejercicio completo de DR, incluyendo conmutacion, validacion y failback.

**Respuesta modelo / puntos que deben aparecer:**

Declarar desastre; activar mando/comunicacion; congelar cambios; comprobar estado del sitio secundario; promover/recuperar datos en punto valido; activar servicios/dependencias; cambiar DNS/routing/balanceadores; smoke tests y validacion funcional; medir RTO/RPO reales. Operar un periodo controlado. Para failback: reconciliar datos, reponer primario, planificar ventana, replicar/sincronizar, conmutar, validar y documentar. Registrar tiempos, fallos del runbook y acciones correctivas.

**Autocorreccion:** ¿He identificado el fallo comun? ¿He distinguido redundancia, HA, backup y DR? ¿Las reglas de red y seguridad permiten solo los flujos necesarios? ¿Mi monitorizacion demostraría el SLO? ¿El plan de recuperacion es practicable y tiene evidencia?

# SUPUESTO 3 - Ransomware en infraestructura corporativa

**Enunciado:** A las 07:20 varios usuarios informan de ficheros cifrados. El EDR detecta actividad maliciosa en varios equipos y el servidor de ficheros comienza a mostrar extensiones anormales. Las copias de seguridad estan accesibles desde el mismo dominio administrativo. No se conoce aun el alcance ni si hubo exfiltracion.

Pregunta 1

Defina las primeras actuaciones de gestion del incidente sin destruir evidencia.

**Respuesta modelo / puntos que deben aparecer:**

Declarar incidente mayor, registrar hora/alcance inicial, activar responsables/CSIRT, preservar comunicaciones y cadena de decisiones. Aislar los equipos afectados de forma controlada, bloquear credenciales/IOCs cuando la evidencia lo aconseje y proteger backups. No apagar indiscriminadamente todos los sistemas: puede perderse evidencia volatil; decidir adquisicion de memoria/estado segun riesgo. Mantener un canal de mando y comunicaciones periodicas.

Pregunta 2

Proponga una estrategia de contencion y explique como priorizaria continuidad frente a preservacion forense.

**Respuesta modelo / puntos que deben aparecer:**

Contener para frenar propagacion: segmentar/aislar endpoints y servidores, bloquear cuentas/credenciales comprometidas, reglas EDR/firewall y suspender accesos remotos sospechosos. Priorizacion por criticidad y riesgo: si un sistema sigue cifrando o exfiltrando, detenerlo puede prevalecer; si es estable y aporta evidencia, adquirir primero datos volatiles. Preservacion y continuidad no son absolutos: documentar cada decision.

Pregunta 3

Indique que evidencias y fuentes analizaria para determinar vector inicial, alcance y posible exfiltracion.

**Respuesta modelo / puntos que deben aparecer:**

EDR, autenticacion/IAM, VPN, correo, proxy, firewall/WAF, DNS, SIEM/syslog, NetFlow/IPFIX, servidores, tareas programadas y herramientas de administracion. Hash de imagenes, timeline, procesos/conexiones, cambios de cuentas, accesos a repositorios y volumen/destinos de trafico. Orden de volatilidad cuando proceda. Cadena de custodia acredita quien/como custodio; el hash ayuda a demostrar integridad, no sustituye esa cadena.

Pregunta 4

Redisene la estrategia de backup para reducir el impacto de un ransomware futuro.

**Respuesta modelo / puntos que deben aparecer:**

Separar credenciales y dominio de administracion de backup, MFA/PAM, repositorios inmutables/offline, segmentacion y borrado/retencion protegidos. Aplicar una politica tipo 3-2-1-1-0 adaptada al riesgo, con varias copias, ubicaciones/medios distintos y verificacion. Backups de configuracion tambien. Probar restauraciones de servicio completo, no solo lectura de fichero. Replicas y snapshots del mismo dominio no sustituyen copia independiente.

Pregunta 5

Explique las condiciones para recuperar el servicio y las acciones posteriores de problema/mejora.

**Respuesta modelo / puntos que deben aparecer:**

Erradicar persistencia/vector, rotar credenciales y corregir vulnerabilidad antes de restaurar. Seleccionar punto de recuperacion limpio, reconstruir desde baseline conocida, restaurar datos y validar integridad/funcion, seguridad y monitorizacion. Reintroducir por fases. Luego RCA/postmortem sin buscar culpables, acciones con responsables: parcheo, segmentacion, privilegios, MFA, logging, EDR, backup, concienciacion y pruebas. Si hubo datos personales/obligaciones, activar procedimientos de notificacion aplicables.

**Autocorreccion:** ¿He identificado el fallo comun? ¿He distinguido redundancia, HA, backup y DR? ¿Las reglas de red y seguridad permiten solo los flujos necesarios? ¿Mi monitorizacion demostraría el SLO? ¿El plan de recuperacion es practicable y tiene evidencia?

# SUPUESTO 4 - Degradacion de rendimiento de un servicio critico

**Enunciado:** Un portal corporativo pasa de responder en 500 ms a superar 8 segundos. CPU de los servidores web esta al 35%, la red WAN no muestra perdida apreciable y la base de datos tiene picos de I/O. La incidencia aparece tras una actualizacion nocturna. Se han abierto varios tickets y un administrador propone aumentar CPU inmediatamente.

Pregunta 1

Describa un metodo de diagnostico ordenado y explique por que no aumentaria CPU como primera medida.

**Respuesta modelo / puntos que deben aparecer:**

Confirmar impacto y periodo; comparar con baseline y cambio reciente; reproducir/medir; descomponer latencia por dependencias. CPU 35% no prueba ausencia/presencia de cuello. Revisar errores, colas, pool de conexiones, disk latency/IOPS, waits/locks, top queries, red y dependencia externa. Una sola hipotesis cada vez. Aumentar CPU puede no afectar un cuello de almacenamiento o bloqueo y destruir evidencia.

Pregunta 2

Indique que señales de observabilidad correlacionaria entre aplicacion, sistema, red, almacenamiento y base de datos.

**Respuesta modelo / puntos que deben aparecer:**

Metricas/logs/trazas: p95/p99 y error rate de la aplicacion, tiempos de cada dependencia; SO CPU/memoria/paging; almacenamiento IOPS, throughput, latencia y cola; red RTT/perdida/retransmisiones; BD conexiones, waits, locks, deadlocks, planes, cardinalidades y top queries. Correlacion por timestamp/correlation-id. SLI de usuario primero; metrica interna aislada no basta.

Pregunta 3

Proponga como investigar la base de datos y el almacenamiento sin aplicar 'tuning por recetas'.

**Respuesta modelo / puntos que deben aparecer:**

Identificar consultas cuyo tiempo/volumen cambio; comparar plan anterior/actual, estadisticas y cardinalidades; revisar indices y coste de escritura; waits/locks y transacciones largas. En storage, comprobar latencia, saturacion, caminos/multipath, cache, errores y crecimiento. Cambiar una variable con prueba A/B o entorno controlado y medir antes/despues. No crear indices ni ampliar memoria sin evidencia.

Pregunta 4

Explique el papel de gestion de cambios, baseline y rollback ante la actualizacion nocturna.

**Respuesta modelo / puntos que deben aparecer:**

Verificar RFC/cambio: alcance, componentes, dependencias, pruebas realizadas y resultado. Comparar baseline/configuracion/versiones. Si el cambio es probable causa y existe backout seguro, evaluar rollback; si la BD cambio de forma incompatible, puede requerir roll-forward. Un cambio de emergencia sigue necesitando trazabilidad y revision posterior. Actualizar CMDB/baseline al estado aceptado.

Pregunta 5

Defina acciones de capacity management para evitar repetir una degradacion similar.

**Respuesta modelo / puntos que deben aparecer:**

Forecast de demanda, perfil horario, crecimiento, percentiles y headroom; limites de DB/storage/conexiones y SLO. Pruebas de carga antes de releases relevantes; alertas por saturacion/colas y no solo utilizacion. Planificar capacidad de IOPS/latencia/espacio ademas de CPU/RAM. Autoscaling puede reaccionar a compute pero no sustituye capacity planning del almacenamiento/BD.

**Autocorreccion:** ¿He identificado el fallo comun? ¿He distinguido redundancia, HA, backup y DR? ¿Las reglas de red y seguridad permiten solo los flujos necesarios? ¿Mi monitorizacion demostraría el SLO? ¿El plan de recuperacion es practicable y tiene evidencia?

# SUPUESTO 5 - Nueva sede: LAN, Wi-Fi y acceso seguro

**Enunciado:** Se abre una sede de 240 puestos, 45 telefonos IP, 32 puntos de acceso Wi-Fi, impresoras y 60 dispositivos IoT. Habra usuarios corporativos, invitados y personal tecnico. El edificio tiene tres plantas y un CPD local pequeno. Se desea redundancia, administracion central y crecimiento del 25%.

Pregunta 1

Proponga el esquema de cableado estructurado y los criterios para elegir cobre o fibra entre zonas.

**Respuesta modelo / puntos que deben aparecer:**

MDF/IDF por plantas segun distancias, backbone vertical redundante y horizontal certificado. Cobre estructurado para puestos/telefonos/AP donde distancia y PoE encajan; fibra para backbone, mayor distancia/capacidad o EMI. Patch panels, etiquetado, documentacion y reserva de fibras/puertos. Calcular presupuesto PoE por AP/telefono y total de switches, no solo numero de puertos.

Pregunta 2

Disene la segmentacion LAN/VLAN y el routing inter-VLAN, indicando controles de seguridad.

**Respuesta modelo / puntos que deben aparecer:**

VLAN/subredes por funcion y riesgo: usuarios, voz, servidores/gestion, invitados, IoT, impresoras si procede. Trunks 802.1Q entre switches; acceso sin etiqueta hacia terminal. Routing L3 central/distribuido con ACL/firewall interzona, minimo acceso. 802.1X/NAC para corporativo, red de gestion separada, AAA y logs. VLAN por si sola no es firewall.

Pregunta 3

Explique el diseno de switching redundante, STP/RSTP, LACP y el riesgo de extender L2 innecesariamente.

**Respuesta modelo / puntos que deben aparecer:**

Enlaces/nodos redundantes con topologia clara. RSTP/STP bloquea bucles si se mantiene L2; LACP agrega capacidad/redundancia, pero un flujo no suma necesariamente todos los enlaces. En campus moderno puede convenir llevar L3 mas cerca y reducir dominios L2 para evitar tormentas/impacto. Probar fallo de uplink/switch y convergencia.

Pregunta 4

Proponga la WLAN corporativa, invitados e IoT, incluyendo planificacion RF y seguridad.

**Respuesta modelo / puntos que deben aparecer:**

Site survey predictivo + validacion: canales, potencia, densidad, interferencias, capacidad y roaming; no diseñar solo por cobertura. Corporativo con WPA2/WPA3-Enterprise, 802.1X/EAP/RADIUS; invitados aislados y con acceso limitado; IoT separado. Wi-Fi usa CSMA/CA. Canales mas anchos no siempre son mejores en densidad. Monitorizar SNR, utilizacion de canal, retransmisiones, roaming y clientes.

Pregunta 5

Defina la administracion/monitorizacion de red y como diagnosticaria que 'en la planta 3 el Wi-Fi tiene buena señal pero va lento'.

**Respuesta modelo / puntos que deben aparecer:**

NMS con SNMPv3, syslog central, flows/telemetria, backups de configuracion, inventario/baseline y AAA/RBAC. Para 'señal buena pero lento': comprobar utilizacion de canal/interferencias, retransmisiones, numero de clientes, ancho de canal, uplink/PoE, DHCP/DNS, VLAN/routing y salida WAN. Señal fuerte no equivale a capacidad libre. Comparar AP vecinos y horarios.

**Autocorreccion:** ¿He identificado el fallo comun? ¿He distinguido redundancia, HA, backup y DR? ¿Las reglas de red y seguridad permiten solo los flujos necesarios? ¿Mi monitorizacion demostraría el SLO? ¿El plan de recuperacion es practicable y tiene evidencia?

# SUPUESTO 6 - Migracion de almacenamiento y plataforma virtual

**Enunciado:** El CPD actual utiliza almacenamiento heterogeneo. Las bases de datos estan en discos locales de varios servidores, los ficheros compartidos en un NAS y las maquinas virtuales en una SAN antigua. La organizacion quiere consolidar, mejorar capacidad y simplificar operaciones sin convertir el nuevo almacenamiento en un punto unico de fallo.

Pregunta 1

Clasifique las cargas y explique cuando elegiria DAS, NAS, SAN u objeto.

**Respuesta modelo / puntos que deben aparecer:**

Clasificar por abstraccion y patron: ficheros compartidos -> NAS/NFS/SMB; cargas de bloque/VM/BD -> SAN o almacenamiento de bloque equivalente si sus SLA lo justifican; DAS para baja complejidad/local cuando HA compartida no sea necesaria; objeto para backup/contenido/datos masivos via API. La tecnologia se elige por IOPS, throughput, latencia, disponibilidad, crecimiento, operacion y coste.

Pregunta 2

Proponga el diseno de almacenamiento para VMs y bases de datos, incluyendo RAID, multipath y dominios de fallo.

**Respuesta modelo / puntos que deben aparecer:**

Cabina/cluster con controladoras y caminos redundantes; zoning y LUN masking donde FC; multipathing en hosts. RAID segun tolerancia/rendimiento/capacidad: 10 para cargas de baja latencia/escritura cuando compense; 6/otros segun perfil y tecnologia. Evitar fallo comun de una sola controladora/fabric. Para BD, separar necesidades de datos/logs/temporales segun motor y medir. RAID mejora disponibilidad de disco, no es backup.

Pregunta 3

Explique thin provisioning, snapshots y replicacion y los riesgos de confundirlos con capacidad fisica o backup.

**Respuesta modelo / puntos que deben aparecer:**

Thin provision asigna logico > fisico y exige alertas/forecast para no agotar pool. Snapshot es punto logico y puede depender del mismo storage; no es necesariamente copia independiente. Replicacion ayuda HA/DR pero replica ciertos errores/borrados. Backup debe tener retencion, dominio separado e integridad verificada. Todas consumen capacidad/IO y deben gobernarse.

Pregunta 4

Defina las metricas y pruebas de rendimiento/capacidad que realizaria antes y despues de la migracion.

**Respuesta modelo / puntos que deben aparecer:**

IOPS, throughput, latencia, block size, read/write, secuencial/aleatorio, concurrencia, cache y colas. Baseline por carga, p95/p99 donde tenga sentido, pruebas con picos y fallo de camino/controladora. Capacidad util descontando RAID, reservas, snapshots y crecimiento. Medir antes/despues con la misma carga; no comparar solo MB/s maximo de fabricante.

Pregunta 5

Describa la estrategia de migracion y rollback manteniendo servicio e integridad.

**Respuesta modelo / puntos que deben aparecer:**

Inventario/dependencias, piloto, compatibilidad de hosts/hypervisor/BD, replica/copia inicial, sincronizacion delta, ventana y quiesce consistente cuando aplique, validacion de datos y rendimiento, cambio de paths/datastores, smoke tests y observacion. Mantener origen protegido hasta criterio de aceptacion. Rollback definido: retorno de caminos/datos o restauracion coherente; no improvisarlo despues de modificar ambos lados.

**Autocorreccion:** ¿He identificado el fallo comun? ¿He distinguido redundancia, HA, backup y DR? ¿Las reglas de red y seguridad permiten solo los flujos necesarios? ¿Mi monitorizacion demostraría el SLO? ¿El plan de recuperacion es practicable y tiene evidencia?

# SUPUESTO 7 - Servicio publico en Internet y DMZ

**Enunciado:** Un portal publico recibe millones de consultas mensuales y tiene una API para terceros. Actualmente todo entra por un unico proveedor de Internet y el frontal web comparte red con servicios internos. Se han sufrido intentos de DDoS, ataques web y una expiracion de certificado que causo indisponibilidad.

Pregunta 1

Proponga una arquitectura de Internet y DMZ eliminando los principales puntos unicos de fallo.

**Respuesta modelo / puntos que deben aparecer:**

Doble conectividad Internet con diversidad fisica/proveedor cuando la criticidad lo exija; routing/failover probado; DNS autoritativo redundante; balanceadores redundantes; servicios expuestos en DMZ, separados de aplicaciones/datos internos mediante zonas y reglas explicitas. CDN puede acercar estaticos/absorber carga si procede. Evitar que el portal tenga acceso amplio a red interna. Diseñar IPv4/IPv6 coherente, sin asumir NAT como control de seguridad.

Pregunta 2

Defina los controles perimetrales y de aplicacion y distinga firewall, WAF, IDS e IPS.

**Respuesta modelo / puntos que deben aparecer:**

Firewall controla trafico por red/estado/politica; WAF entiende HTTP y mitiga ataques de aplicacion; IDS detecta; IPS puede bloquear. NGFW/proxy pueden aportar otras funciones. Usar segmentacion, allowlist de flujos necesarios, rate limiting y hardening. Ningun control sustituye validacion/autorizacion en la aplicacion.

Pregunta 3

Explique el papel de DNS, CDN, TLS/PKI y proteccion DDoS en disponibilidad y seguridad.

**Respuesta modelo / puntos que deben aparecer:**

DNS es dependencia critica: redundancia, TTL y proteccion de cambios. CDN reduce latencia/carga y puede aportar mitigacion perimetral segun servicio. TLS protege en transito; PKI exige inventario, renovacion y alertas de expiracion/revocacion, no solo instalar certificado. Proteccion DDoS puede incluir capacidad upstream/scrubbing/rate controls. Probar conmutacion y renovacion antes de caducar.

Pregunta 4

Disene el acceso administrativo y la segmentacion interna bajo principios de minimo privilegio/Zero Trust.

**Respuesta modelo / puntos que deben aparecer:**

Administracion por red de gestion/bastion o acceso controlado, MFA, cuentas nominativas, PAM/RBAC, protocolos seguros y logs. Zero Trust: no confiar por estar 'dentro'; verificar identidad, dispositivo/contexto y privilegio minimo. Micro/segmentacion entre frontal, aplicacion, BD y administracion; API/servicios solo por puertos y identidades necesarios.

Pregunta 5

Defina monitorizacion, gestion de certificados e incident response para este servicio.

**Respuesta modelo / puntos que deben aparecer:**

SLI/SLO de disponibilidad, latencia, error rate, saturacion; logs web/WAF/firewall/IAM, metricas y trazas; SIEM con alertas accionables; monitor de certificados con margen suficiente. Runbooks para DDoS, ataque web, perdida de ISP/DNS/certificado. En incidente: detectar/analizar, contener, erradicar, recuperar, preservar evidencia y postmortem. Gestion de cambio para reglas/certificados.

**Autocorreccion:** ¿He identificado el fallo comun? ¿He distinguido redundancia, HA, backup y DR? ¿Las reglas de red y seguridad permiten solo los flujos necesarios? ¿Mi monitorizacion demostraría el SLO? ¿El plan de recuperacion es practicable y tiene evidencia?

# SUPUESTO 8 - Red IoT para edificio inteligente

**Enunciado:** Un edificio publico instalara 2.000 sensores y actuadores para energia, climatizacion, acceso y mantenimiento. Algunos dispositivos tienen recursos limitados y permaneceran en servicio durante mas de diez anos. La plataforma central recibira telemetria y enviara ordenes. La organizacion teme credenciales por defecto y dispositivos sin soporte.

Pregunta 1

Proponga una arquitectura IoT por capas e indique cuando situaria funciones en gateway/edge.

**Respuesta modelo / puntos que deben aparecer:**

Dispositivo/sensor-actuador -> conectividad -> gateway/edge -> plataforma/broker -> almacenamiento/procesamiento -> aplicacion. Edge puede filtrar/agregar, traducir protocolos y mantener funciones locales ante perdida de conectividad, reduciendo latencia/trafico. No debe convertirse en una caja opaca: gestionar identidad, actualizaciones, logs y disponibilidad.

Pregunta 2

Compare MQTT, CoAP y HTTP para el escenario sin afirmar que uno es universalmente mejor.

**Respuesta modelo / puntos que deben aparecer:**

MQTT: pub/sub ligero mediante broker, adecuado para telemetria/eventos. CoAP: REST ligero sobre UDP para equipos restringidos. HTTP puede encajar en dispositivos/gateways mas capaces e integracion web. Elegir por patron, consumo, fiabilidad, seguridad, interoperabilidad y operacion; considerar retransmisiones/idempotencia segun protocolo/aplicacion.

Pregunta 3

Disene la segmentacion de red e identidad de los dispositivos.

**Respuesta modelo / puntos que deben aparecer:**

Red IoT separada de usuarios/servidores, VLAN/VRF/firewall y flujos minimos hacia broker/gateways; sin acceso lateral libre. Identidad unica por dispositivo, certificados/credenciales no compartidas, NAC/puertos donde sea viable. Gestion administrativa desde zona controlada. No confiar en ocultar SSID/MAC ni en NAT.

Pregunta 4

Defina el ciclo de vida de seguridad: aprovisionamiento, firmware, inventario, certificados/credenciales y fin de soporte.

**Respuesta modelo / puntos que deben aparecer:**

Alta segura/enrolment, credencial unica, secure boot cuando aplique, firmware firmado y OTA, politica de versiones, inventario y propietario, rotacion/revocacion de credenciales/certificados, hardening/minimos servicios y fecha de fin de soporte. Plan de sustitucion para dispositivos que ya no reciben parches; retencion/privacidad de telemetria segun finalidad.

Pregunta 5

Explique como monitorizaria la plataforma y como responderia ante un dispositivo comprometido.

**Respuesta modelo / puntos que deben aparecer:**

Metricas de disponibilidad, tasa de mensajes, latencia, bateria/estado cuando exista, errores, versiones y dispositivos fuera de politica; logs de broker/gateway/red y anomalias de trafico. Ante compromiso: aislar segmento/dispositivo, revocar identidad, conservar evidencia/logs, evaluar movimiento lateral, reaprovisionar desde firmware confiable o sustituir, y corregir causa. Mantener capacidad de operar de forma segura si un sensor falla.

**Autocorreccion:** ¿He identificado el fallo comun? ¿He distinguido redundancia, HA, backup y DR? ¿Las reglas de red y seguridad permiten solo los flujos necesarios? ¿Mi monitorizacion demostraría el SLO? ¿El plan de recuperacion es practicable y tiene evidencia?

# SUPUESTO 9 - SIMULACRO A - Perdida total del CPD principal

**Enunciado:** A las 11:05 un incendio obliga a evacuar el CPD principal. La alimentacion se corta y todos los servicios locales quedan inaccesibles. Existe un CPD secundario con replicas asincronas de las bases de datos, copias de seguridad y capacidad para ejecutar los servicios criticos, pero la ultima prueba integral de DR fue hace 14 meses. El portal publico, el correo y el sistema de expedientes deben recuperarse con prioridades diferentes.

Pregunta 1

Organice la respuesta inicial al desastre: gobierno, comunicaciones, clasificacion de servicios y decisiones de activacion.

**Respuesta modelo / puntos que deben aparecer:**

Activar plan DR y mando unico; priorizar seguridad de personas; registrar timeline; congelar cambios no esenciales; clasificar servicios por impacto y RTO/RPO; confirmar disponibilidad del secundario, conectividad, personal y dependencias. Comunicar a usuarios/direccion/terceros con cadencia. Decidir formalmente declaracion de desastre y orden de recuperacion: no restaurar todo a la vez sin prioridades.

Pregunta 2

Describa la conmutacion tecnica al CPD secundario para red, identidad, aplicaciones y bases de datos.

**Respuesta modelo / puntos que deben aparecer:**

Red/routing/DNS deben redirigir hacia la sede secundaria mediante procedimientos probados; comprobar conectividad de operadores/VPN. Identidad, certificados, secretos y dependencias externas deben estar disponibles. Promover replicas validando punto de consistencia, evitando split-brain/fencing segun tecnologia. Levantar compute/balanceadores/aplicaciones desde configuracion versionada/baseline y ejecutar smoke tests. Para BD, registrar ultimo punto confirmado y lag.

Pregunta 3

Explique como determinaria y demostraria RPO/RTO reales de cada servicio durante el incidente.

**Respuesta modelo / puntos que deben aparecer:**

RPO real = diferencia entre ultimo dato confirmado en origen y punto recuperado; medir por datos/logs de transaccion, no por frecuencia teorica. RTO real = tiempo desde interrupcion/declaracion segun definicion acordada hasta recuperacion validada del servicio. Registrar hitos por servicio y comparar con objetivo. Una replica asincrona puede tener lag variable; no asumir RPO cero.

Pregunta 4

Defina la estrategia para recuperar servicios que no pueden arrancarse directamente desde replica y para garantizar que los datos son validos.

**Respuesta modelo / puntos que deben aparecer:**

Usar backups consistentes y logs/PITR cuando sea necesario, verificar hashes/consistencia/logica y reconciliar con sistemas externos. Restaurar infraestructura, SO, aplicacion, configuracion y datos, no solo ficheros. Ejecutar pruebas funcionales y de integridad antes de abrir trafico. Si los backups/replicas comparten fallo o estan corruptos, escalar al siguiente punto recuperable dentro de la retencion.

Pregunta 5

Planifique el failback al CPD principal y la revision postincidente.

**Respuesta modelo / puntos que deben aparecer:**

No volver por urgencia. Reponer y certificar infraestructura primaria; corregir causa; sincronizar datos desde DR; planificar ventana y punto de corte; proteger contra doble escritura; cambiar routing/DNS; validar y mantener rollback. Postmortem: tiempos vs RTO/RPO, fallos de runbook, dependencias olvidadas, comunicaciones y capacidad. Acciones con responsables; aumentar frecuencia de ejercicios, incluida conmutacion y failback.

**Autocorreccion:** ¿He identificado el fallo comun? ¿He distinguido redundancia, HA, backup y DR? ¿Las reglas de red y seguridad permiten solo los flujos necesarios? ¿Mi monitorizacion demostraría el SLO? ¿El plan de recuperacion es practicable y tiene evidencia?

# SUPUESTO 10 - SIMULACRO B - Arquitectura multisede segura y operable

**Enunciado:** Una Administracion con sede central, 20 oficinas, dos CPD y teletrabajo quiere renovar toda su infraestructura. Hay 2.500 usuarios, aplicaciones internas, un portal publico, telefonia, Wi-Fi corporativo/invitados, sensores IoT y varios servicios SaaS. El objetivo es mejorar disponibilidad, seguridad y capacidad de evolucion sin elevar la complejidad operativa mas de lo necesario.

Pregunta 1

Defina la arquitectura de LAN/WAN y conectividad a Internet, incluyendo segmentacion, routing, redundancia y acceso remoto.

**Respuesta modelo / puntos que deben aparecer:**

LAN jerarquica o equivalente con VLAN/subred por funcion y routing L3 controlado; 802.1X/NAC; corporativo/invitados/IoT separados. WAN con dos transportes en sedes criticas y diversidad fisica, SD-WAN/MPLS/VPN solo donde sus ventajas se justifiquen; routing simple donde baste y dinamico donde aporte convergencia. Internet redundante, DNS y DMZ para portal. Teletrabajo mediante acceso remoto fuerte y recursos limitados por identidad/politica.

Pregunta 2

Proponga la arquitectura de CPD, compute, almacenamiento, HA y DR, relacionandola con RPO/RTO.

**Respuesta modelo / puntos que deben aparecer:**

Dos dominios de fallo reales. Cluster de virtualizacion dimensionado para fallo, red/storage redundantes y balanceadores. Storage por carga: bloque para BD/VM si procede, NAS para ficheros y objeto para determinados usos; RAID/multipath no sustituyen backup. HA local para fallos de componente; DR entre CPD, datos replicados/backup y runbooks. RPO/RTO por servicio determinan sync/async, capacidad warm/hot y automatizacion.

Pregunta 3

Disene la arquitectura de seguridad de red y puesto de usuario, incluyendo identidad, acceso privilegiado, VPN/Zero Trust, deteccion y ENS cuando aplique.

**Respuesta modelo / puntos que deben aparecer:**

Defensa en profundidad: zonas/DMZ, firewall/WAF/IDS/IPS segun riesgo, minimo privilegio y Zero Trust sin confianza implicita por ubicacion. IAM/MFA, PAM/bastion para privilegios, RADIUS/802.1X/NAC, cifrado/PKI, VPN/controles de acceso remoto, EDR/UEM en endpoints, logs/SIEM y gestion de vulnerabilidades/incidentes. Mapear medidas al riesgo y ENS si el sistema esta en su alcance, evitando 'allow any'.

Pregunta 4

Defina la operacion: configuracion/cambios, monitorizacion/observabilidad, SNMP/telemetria, incidentes, backup y capacity management.

**Respuesta modelo / puntos que deben aparecer:**

Inventario/CMDB fiable, baseline y config-as-code; cambios estandar/normal/emergencia con rollback y revision; versionar configuracion/IaC. NMS redundante, SNMPv3, syslog, flows/telemetria, metricas/logs/trazas y SLI/SLO. On-call/escalado y postmortem. Backup con retencion, separacion/inmutabilidad y restore tests. Capacity plan con crecimiento, picos, IOPS/latencia, ancho de banda, PoE y headroom. Alertas deben tener accion.

Pregunta 5

Presente un plan de implantacion por fases con pruebas, criterios de aceptacion y mecanismos para controlar la complejidad y el coste.

**Respuesta modelo / puntos que deben aparecer:**

Fases: inventario/baseline -> piloto sede/servicio -> LAN/WAN -> CPD/storage -> seguridad/acceso -> servicios publicos/IoT, con dependencias claras. Pruebas de failover, rendimiento, restore/DR, NAC/Wi-Fi, seguridad y operacion. Criterios de aceptacion por SLO/RPO/RTO, defectos y runbooks. Reducir complejidad con estandares, pocos patrones repetibles, automatizacion idempotente y documentacion; evitar herramientas superpuestas sin propietario. Medir TCO, soporte y skills, no solo coste de compra.

**Autocorreccion:** ¿He identificado el fallo comun? ¿He distinguido redundancia, HA, backup y DR? ¿Las reglas de red y seguridad permiten solo los flujos necesarios? ¿Mi monitorizacion demostraría el SLO? ¿El plan de recuperacion es practicable y tiene evidencia?

# Patron de respuesta que puntua

* Requisitos antes que productos: usuarios, sedes, carga, latencia, disponibilidad, RPO/RTO, crecimiento y normativa.
* Dibuja dominios de fallo: energia, red, host, storage, operador y sitio; dos equipos en el mismo dominio pueden no ser redundancia real.
* LAN/WAN: segmentacion, routing, diversidad, QoS y administracion; VLAN no es firewall y MPLS no cifra por si mismo.
* Seguridad: identidad/minimo privilegio, zonas/DMZ, controles preventivos-detectivos-correctivos y endpoint; Zero Trust no es una marca.
* Operacion: baseline, cambios, automatizacion idempotente, metricas/logs/trazas, SNMPv3/telemetria y alertas accionables.
* Almacenamiento: IOPS, throughput, latencia y capacidad util; RAID, snapshot y replica no son backup.
* Continuidad: HA local != DR; backup valido solo si restore probado cumple RPO/RTO.
* Troubleshooting: fisico -> L2/VLAN -> IP/routing -> DNS/transporte -> aplicacion/dependencias; cambia una hipotesis cada vez.
* Incidente de seguridad: contener sin destruir evidencia, erradicar, recuperar desde estado confiable y aprender mediante RCA/postmortem.
* Una solucion mas sencilla bien justificada puntua mejor que una sopa de siglas.

Contenido construido exclusivamente a partir del alcance y terminologia de los apuntes GSI A2 V2.1 indicados. Los escenarios anaden contexto para practicar aplicacion, pero no introducen como materia nuclear productos concretos fuera de esos apuntes.
