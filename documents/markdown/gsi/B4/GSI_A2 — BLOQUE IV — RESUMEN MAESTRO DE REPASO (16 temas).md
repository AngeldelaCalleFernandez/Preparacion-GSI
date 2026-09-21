# GSI A2 — BLOQUE IV — Resumen maestro de repaso

Manual de sistemas y comunicaciones para GSI A2. Combina fundamentos, operación y diseño de soluciones, con énfasis en disponibilidad, seguridad, monitorización y capacidad.

**Procedencia y derechos:** PreparaTIC/A1 se cita como fuente secundaria consultada; la redacción y organización de este documento son propias y las fuentes primarias prevalecen. Este proyecto no está afiliado, patrocinado ni respaldado por PreparaTIC. Véanse los [avisos de terceros](../../../../THIRD_PARTY_NOTICES.md).

**Estructura de cada tema:** núcleo de estudio → claves de test → enfoque de supuesto → actualización cuando sea necesaria → fuentes base. El BOE vigente prevalece sobre cualquier apunte o mapeo antiguo.

## IV.01 — Administración del sistema operativo y software de base

### Núcleo de estudio

Administrar un SO implica instalación, configuración, usuarios/grupos, permisos, servicios, almacenamiento, red, actualizaciones, logs, automatización, rendimiento, seguridad y recuperación. Software de base incluye drivers, runtimes, servicios de sistema, shells, utilidades y middleware básico. En Linux domina systemd/servicios, permisos/ACL, paquetes, logs, procesos, recursos y SSH; en Windows, servicios, Event Log, PowerShell, políticas, Active Directory cuando aplique y gestión de actualizaciones. Principios: mínimo privilegio, hardening, configuración estándar, parcheo, inventario y automatización. Usa baselines y gestión de configuración para reducir drift.

### Claves de test

Administración ≠ fundamentos: aquí importan operación y controles. Patch management incluye evaluación, pruebas, despliegue y rollback. Root/Administrator no debe usarse para tareas ordinarias. Logs locales sin centralización son insuficientes para sistemas críticos.

### Enfoque para supuesto práctico

En supuesto define golden images/baselines, IAM, parcheo, EDR, logging/SIEM, automatización, monitorización, backup y recuperación. Incluye ventanas de mantenimiento y procedimiento de emergencia.

### Fuentes base del material

A1 059 + 060 + 061, pero exige complemento operativo. Tema COMPLEMENTAR.

## IV.02 — Administración de SGBD

### Núcleo de estudio

Administrar un SGBD incluye instalación/configuración, instancias, esquemas, usuarios/roles, privilegios, almacenamiento, memoria, conexiones, índices, estadísticas, ejecución de consultas, transacciones, replicación, HA, backup/recovery, auditoría y parcheo. Optimización parte de métricas y planes de ejecución; índices y estadísticas deben mantenerse. Seguridad: mínimo privilegio, cuentas de servicio, cifrado en tránsito/reposo, gestión de claves, auditoría y segregación de funciones. Backup lógico/físico, completo/incremental y point-in-time recovery según motor. Replicación no sustituye al backup.

### Claves de test

DBA ≠ desarrollador de SQL; índice puede perjudicar escrituras; réplica puede copiar corrupción/borrado; RPO/RTO condicionan estrategia. Diferencia backup consistente, snapshot y replicación. Privilegio de sistema y de objeto son conceptos distintos.

### Enfoque para supuesto práctico

En supuesto define topología primaria/réplicas, HA, backups con pruebas de restauración, monitorización, capacidad, cifrado, roles, mantenimiento y DR. Justifica RPO/RTO y ventanas.

### Fuentes base del material

A1 063 como base + documentación operativa de SGBD. Tema COMPLEMENTAR.

## IV.03 — Mantenimiento, incidencias, backup y recuperación

### Núcleo de estudio

Mantenimiento preventivo reduce fallos; correctivo repara; predictivo usa señales/medidas; evolutivo/adaptativo aplica especialmente a software. Gestión de incidencias restaura servicio lo antes posible y se diferencia de gestión de problemas, que busca causa raíz. Prioridad combina impacto y urgencia; define SLA, escalado, comunicación y postmortem. Backup: regla 3-2-1 como buena práctica, copias completas/incrementales/diferenciales, inmutabilidad/offline frente a ransomware y pruebas de restauración. RPO indica pérdida máxima de datos tolerable; RTO tiempo máximo objetivo de recuperación.

### Claves de test

Incidente ≠ problema; backup ≠ archivo; réplica ≠ backup; incremental copia cambios desde última copia de cualquier tipo, diferencial desde última completa. Un backup no probado no garantiza recuperación.

### Enfoque para supuesto práctico

En supuesto presenta matriz severidad, flujo ITSM, monitorización-alerta-ticket-escalado-cierre y plan backup/restore alineado con RPO/RTO. Incluye ejercicios de recuperación.

### Fuentes base del material

A1 101 + 056 + 105 y materiales de continuidad.

## IV.04 — Configuración, cambios, versiones, automatización, rendimiento y capacidad

### Núcleo de estudio

Gestión de configuración identifica y controla elementos de configuración (CI), relaciones, versiones y estado; una CMDB puede soportarla. Gestión de cambios evalúa riesgo, impacto, aprobación, planificación, ejecución y revisión. Control de versiones preserva historia y reproducibilidad. Automatización: scripting, orquestadores, IaC, configuración declarativa y jobs; debe ser idempotente cuando sea posible. Observabilidad combina métricas, logs y trazas. Rendimiento se analiza con latencia, throughput, utilización, colas, error rate y saturación; capacidad proyecta demanda y recursos para cumplir SLO con margen. Baselines y tendencias evitan reaccionar solo a picos.

### Claves de test

Monitorización dice qué ocurre; observabilidad ayuda a explicar por qué. Alta CPU no implica siempre cuello de botella. Configuración ≠ inventario simple. Cambio estándar, normal y emergencia tienen controles distintos en marcos ITSM.

### Enfoque para supuesto práctico

En supuesto define CMDB/config-as-code, pipeline de cambios, aprobaciones, mantenimiento, métricas/SLO, alertas, dashboards, capacity plan y autoescalado. Incluye rollback y segregación.

### Fuentes base del material

A1 102 + 100 y material ITIL/operación. Tema COMPLEMENTAR.

## IV.05 — Almacenamiento: arquitecturas, tipos, protocolos y virtualización

### Núcleo de estudio

Distingue almacenamiento local DAS, NAS por ficheros y SAN por bloques; almacenamiento objeto expone objetos vía API y escala masivamente. Medios: HDD, SSD/NVMe, cinta y cloud según coste/rendimiento/durabilidad. RAID combina discos: RAID 0 rendimiento sin redundancia; 1 espejo; 5 paridad simple; 6 doble; 10 espejo+striping. Protocolos: SATA/SAS/NVMe local; NFS/SMB ficheros; Fibre Channel/iSCSI bloques; S3-compatible objetos a nivel conceptual. Virtualización agrupa recursos físicos en pools/lógicos, thin provisioning, snapshots y replicación. Capacidad debe considerar IOPS, throughput, latencia y crecimiento.

### Claves de test

RAID no es backup; snapshot no siempre es copia independiente; NAS ≠ SAN; iSCSI transporta SCSI sobre IP. RAID 5 tolera normalmente un disco; RAID 6 dos. Thin provisioning puede sobreaprovisionar y requiere control.

### Enfoque para supuesto práctico

En supuesto clasifica cargas (BD, ficheros, objetos, backup), calcula capacidad útil, rendimiento, redundancia, replicación y tiering. Incluye cifrado, inmutabilidad y monitorización.

### Fuentes base del material

A1 056 + 057 y material de almacenamiento/virtualización.

## IV.06 — CPD: dimensionamiento, virtualización, HA, balanceo y recuperación ante desastres

### Núcleo de estudio

Un CPD requiere espacio/racks, energía, UPS/grupos, climatización, cableado, incendios, control físico, comunicaciones, monitorización y redundancia. Dimensiona por potencia, calor, RU, red, almacenamiento y crecimiento. Virtualización consolida servidores y habilita movilidad/HA, pero concentra riesgos. Alta disponibilidad reduce indisponibilidad mediante redundancia, clúster, balanceo y eliminación de SPOF. Balanceo puede operar L4/L7 y usar health checks/algoritmos. DR define sitio alternativo, replicación, backups, runbooks y pruebas; RPO/RTO determinan solución. Diferencia activo-activo, activo-pasivo y cold/warm/hot site.

### Claves de test

HA no equivale a DR; dos servidores en mismo CPD no cubren desastre del sitio. N+1 y 2N son esquemas de redundancia distintos. Balanceo no sustituye persistencia/consistencia. Virtualización no elimina necesidad de capacidad física.

### Enfoque para supuesto práctico

En supuesto dibuja dos zonas/sedes, redundancia de red/energía, cluster, balanceo, almacenamiento y backup. Justifica RPO/RTO, coste y pruebas de conmutación.

### Fuentes base del material

A1 057 + 053 + 128 + 132 y RELEASE arquitectura física.

## IV.07 — Medios de transmisión y cableado estructurado

### Núcleo de estudio

Medios guiados: par trenzado, coaxial y fibra óptica; no guiados: radio, microondas, infrarrojos/satélite según caso. Parámetros: ancho de banda, atenuación, interferencias, relación señal/ruido, distancia, latencia y tasa de error. Fibra monomodo cubre largas distancias y altas capacidades; multimodo distancias menores en LAN/CPD. Cableado estructurado organiza subsistemas horizontal, backbone, áreas de trabajo, cuartos y distribuidores; usa categorías de cobre y clases/estándares. PoE suministra energía sobre Ethernet bajo estándares IEEE 802.3 correspondientes.

### Claves de test

UTP no es inmune a interferencias; fibra es inmune a EMI. dB es escala logarítmica. Longitud máxima típica de canal Ethernet sobre cobre estructurado es 100 m (90 m permanente + latiguillos, según diseño estándar). No confundir categoría de cable con versión Ethernet.

### Enfoque para supuesto práctico

En supuesto selecciona cobre/fibra por distancia, velocidad, EMI y coste; diseña redundancia, racks, patch panels, etiquetado, certificación y crecimiento.

### Fuentes base del material

A1 108 + 110 + 112.

## IV.08 — Redes LAN: topologías, protocolos, acceso, interconexión, seguridad y normativa

### Núcleo de estudio

Ethernet (IEEE 802.3) domina LAN cableada. Topologías físicas/lógicas, dominios de colisión/difusión, switching MAC, VLAN IEEE 802.1Q, enlaces troncales, STP/RSTP para bucles y agregación de enlaces son conceptos clave. Dispositivos: repetidor/hub L1, bridge/switch L2, router L3, firewall según funciones. Métodos de acceso históricos incluyen CSMA/CD; en Ethernet conmutada full-duplex ya no hay colisiones normales. Seguridad: segmentación VLAN, 802.1X/NAC, DHCP snooping, port security, gestión segura, ACL y monitorización.

### Claves de test

Switch aprende MAC; router decide por IP; VLAN separa dominios broadcast pero necesita routing entre VLAN. STP evita bucles L2. CSMA/CD es histórico en half-duplex. 802.1Q etiqueta VLAN.

### Enfoque para supuesto práctico

En supuesto crea VLAN por zonas/roles, core/distribución/acceso según tamaño, redundancia, routing, NAC, gestión, QoS y monitorización. Evita VLAN como única barrera de seguridad.

### Fuentes base del material

A1 118 + 119. Correspondencia DIRECTA.

## IV.09 — Administración LAN: usuarios, dispositivos, tráfico y SNMP

### Núcleo de estudio

Administrar LAN incluye inventario, configuración, autenticación, direccionamiento, DHCP/DNS, VLAN, Wi-Fi si integrado, firmware, backups de configuración, monitorización y troubleshooting. Gestión de usuarios se apoya en directorio/IAM y NAC/802.1X; dispositivos pueden administrarse por SSH, APIs y plataformas centralizadas. Monitoriza disponibilidad, interfaces, errores, utilización, latencia, pérdida, top talkers y eventos. SNMP usa manager, agents, MIB y OID; SNMPv3 añade autenticación y privacidad frente a versiones anteriores. Syslog y telemetry complementan SNMP.

### Claves de test

SNMP trap/inform son notificaciones; polling consulta. MIB describe objetos, OID los identifica. SNMPv1/v2c usan community strings y no ofrecen seguridad equivalente a v3. Saturación de enlace no se resuelve solo cambiando umbral.

### Enfoque para supuesto práctico

En supuesto define NMS, SNMPv3, syslog central, NetFlow/IPFIX/telemetría, backups, RBAC, alertas, inventario y procedimientos de cambio/incidente.

### Fuentes base del material

A1 118 + 119 y administración de redes.

## IV.10 — WAN: WDM, MPLS, SD-WAN y encaminamiento

### Núcleo de estudio

WAN conecta sedes a larga distancia mediante servicios de operador, Internet/VPN y tecnologías privadas. WDM multiplexa múltiples longitudes de onda sobre fibra (CWDM/DWDM). MPLS conmuta etiquetas y permite VPN, ingeniería de tráfico y clases de servicio en redes de operador. SD-WAN crea overlay gestionado por software sobre múltiples transportes, seleccionando caminos según políticas/rendimiento y facilitando centralización. Routing: estático y dinámico; OSPF/IS-IS como IGP; BGP entre sistemas autónomos y también en grandes redes. Conceptos: convergencia, métrica, prefijo, next hop, redundancia y QoS.

### Claves de test

MPLS no cifra por sí mismo; SD-WAN no es necesariamente Internet-only; BGP es path-vector; OSPF es link-state. WDM opera en capa óptica y aumenta capacidad por fibra.

### Enfoque para supuesto práctico

En supuesto compara MPLS, Internet+VPN y SD-WAN; diseña doble operador/enlace, BGP/OSPF, QoS, cifrado, monitorización y failover. Incluye latencia a cloud/CPD.

### Fuentes base del material

A1 113 + 108 + 120.

## IV.11 — Redes inalámbricas: protocolos, espectro, acceso, operación y seguridad

### Núcleo de estudio

Wi-Fi se basa en IEEE 802.11. Conceptos: bandas 2,4/5/6 GHz, canales, ancho de canal, modulación, MIMO/OFDMA en generaciones modernas, potencia, roaming y planificación RF. 802.11ax corresponde a Wi-Fi 6/6E; 802.11be a Wi-Fi 7. Modos infraestructura y ad hoc; enterprise usa controladores/cloud según diseño. Seguridad actual: WPA2/WPA3, 802.1X/EAP y RADIUS para empresa; evita WEP y WPA antiguos. Planifica cobertura y capacidad, no solo señal; interferencia co-canal/adyacente y densidad importan.

### Claves de test

2,4 GHz suele dar mayor alcance pero menos canales/capacidad; 5/6 GHz más espectro. SSID no es mecanismo de seguridad. Ocultar SSID no protege. WPA3-Enterprise y 802.1X son preferibles en entornos corporativos.

### Enfoque para supuesto práctico

En supuesto separa SSID corporativo/invitados/IoT, usa 802.1X/NAC, segmentación, survey RF, redundancia de control, gestión y monitorización. Considera cableado/PoE de AP.

### Actualización 2026

Actualización 2026: incluir conceptualmente Wi-Fi 7/802.11be sin desplazar los fundamentos 802.11.

### Fuentes base del material

A1 114. Correspondencia DIRECTA.

## IV.12 — Seguridad de redes, perímetro, acceso, criptografía, firma, VPN y puesto

### Núcleo de estudio

Arquitectura segura aplica segmentación, DMZ, firewalls stateful/NGFW, proxies/WAF, IDS/IPS, NAC, DNS seguro, VPN y Zero Trust como enfoque de verificación continua. IAM: identidad, autenticación, MFA, autorización RBAC/ABAC y mínimo privilegio. Criptografía simétrica (AES) para datos; asimétrica (RSA/ECC) para intercambio/firma; hash (SHA-2/3) para integridad; PKI gestiona certificados, CA, revocación OCSP/CRL. TLS protege transporte; IPsec protege capa IP; VPN puede ser site-to-site o acceso remoto. Firma digital combina hash y clave privada y aporta autenticidad/integridad/no repudio en el contexto adecuado. Puesto: hardening, EDR, cifrado, parcheo, control de aplicaciones y privilegios.

### Claves de test

Cifrar no autentica automáticamente; hash no cifra; firma se crea con clave privada y se verifica con pública. TLS 1.3 es la versión moderna estandarizada. VPN no hace seguro un endpoint comprometido.

### Enfoque para supuesto práctico

En supuesto diseña zonas, reglas de mínimo acceso, MFA, bastión/PAM, WAF, SIEM, EDR, VPN/Zero Trust, PKI y respuesta. Relaciona medidas con ENS y riesgo.

### Fuentes base del material

A1 125 + 079 + 080 + 131, ENS/CCN-STIC.

## IV.13 — Internet: arquitectura, servicios, evolución e IoT

### Núcleo de estudio

Internet es una red de redes basada en IP y sistemas autónomos interconectados mediante BGP. Arquitectura distribuida con DNS, operadores/ISP, IXPs, CDNs, centros de datos y redes de acceso. Servicios/protocolos: web HTTP/HTTPS, correo SMTP/IMAP, DNS, SSH, transferencia, NTP y APIs. Evolución incluye IPv6, CDN/edge, HTTP/2 y HTTP/3 sobre QUIC, cloud y cifrado generalizado. IoT conecta sensores/actuadores con gateways, plataformas y servicios; protocolos posibles MQTT, CoAP, HTTP y redes específicas. Riesgos: credenciales débiles, firmware, exposición, privacidad, escalabilidad y vida útil.

### Claves de test

Internet ≠ Web; DNS es jerárquico/distribuido; BGP conecta sistemas autónomos; HTTP/3 usa QUIC sobre UDP. IoT necesita identidad, actualización y segmentación, no solo conectividad.

### Enfoque para supuesto práctico

En supuesto usa DNS/CDN/WAF, doble conectividad, IPv6 planificado, TLS, observabilidad y protección DDoS. Para IoT separa red, gestiona certificados/dispositivos, firmware OTA, broker y ciclo de vida.

### Fuentes base del material

A1 109 + 115 + 117.

## IV.14 — NGN/IMS, VoIP/ToIP y comunicaciones unificadas

### Núcleo de estudio

NGN integra servicios sobre redes IP con separación entre transporte y control/servicio. IMS (IP Multimedia Subsystem) proporciona arquitectura de control de sesiones multimedia basada en SIP y componentes de núcleo. VoIP transporta voz sobre IP; ToIP suele referirse a telefonía corporativa basada en IP, terminales y PBX/IP. SIP establece/modifica/termina sesiones; RTP transporta medios y RTCP aporta control; codecs convierten voz y condicionan ancho de banda/calidad. Comunicaciones unificadas integran voz, vídeo, mensajería, presencia y colaboración. QoS usa priorización, colas, marcado y control de congestión; latencia, jitter y pérdida afectan voz.

### Claves de test

SIP no transporta normalmente audio; RTP sí. Codec ≠ protocolo de señalización. VoIP puede existir sin IMS. MOS es medida de calidad percibida. QoS no crea ancho de banda, gestiona prioridades.

### Enfoque para supuesto práctico

En supuesto dimensiona llamadas simultáneas, codecs, SBC, SIP trunk, redundancia, QoS, VLAN voz, seguridad, grabación/retención si aplica y continuidad.

### Fuentes base del material

A1 116. Correspondencia DIRECTA.

## IV.15 — Comunicaciones móviles y MDM/EMM/UEM

### Núcleo de estudio

Generaciones: 2G digital voz/SMS; 3G datos móviles; 4G/LTE all-IP y banda ancha; 5G NR mejora capacidad, latencia, densidad y habilita eMBB, URLLC/mMTC conceptualmente. 5G-Advanced se asocia a evolución de Releases 18 en adelante. Arquitectura móvil incluye acceso radio, core, SIM/eSIM, handover y mecanismos de autenticación. MDM gestiona dispositivos; EMM amplía a apps/contenido/identidad; UEM unifica gestión de endpoints móviles y tradicionales. Capacidades: enrolment, políticas, cifrado, certificados, inventario, compliance, remote lock/wipe, separación de datos corporativos y gestión de aplicaciones.

### Claves de test

MDM ≠ antivirus; BYOD/COPE/COBO son modelos de propiedad/uso; eSIM no elimina autenticación de red. 5G no significa siempre baja latencia extremo a extremo. UEM es evolución más amplia que MDM.

### Enfoque para supuesto práctico

En supuesto define modelo corporativo/BYOD, UEM, MFA/certificados, compliance, VPN/Zero Trust, container corporativo, borrado selectivo, actualización y privacidad del empleado.

### Actualización 2026

Actualización 2026: tratar 5G-Advanced como evolución de 5G; evitar memorizar releases salvo concepto.

### Fuentes base del material

A1 123 + 054 + 124.

## IV.16 — Videoconferencia: protocolos, dimensionamiento, QoS, salas y equipos

### Núcleo de estudio

Videoconferencia combina captura/codificación de audio-vídeo, señalización, transporte, conferencia multipunto y presentación de contenidos. Estándares históricos H.323 y SIP; medios con RTP/RTCP; WebRTC habilita comunicaciones en navegador con protocolos seguros y negociación propia. Códecs frecuentes incluyen familias H.264/H.265/VP8/VP9/AV1 según plataforma. Dimensiona por resolución, fps, codec, llamadas simultáneas, overhead y margen; QoS debe controlar latencia, jitter y pérdida. Salas requieren cámara, micrófonos, altavoces, pantalla, acústica, iluminación, red y ergonomía. MCU/SFU son enfoques de conferencia multipunto con características distintas.

### Claves de test

Ancho de banda se calcula por flujos concurrentes, no por número total de usuarios. Jitter es variación de retardo. WebRTC no es un codec. SIP/H.323 son señalización/control, RTP medios. QoS debe aplicarse extremo a extremo para ser eficaz.

### Enfoque para supuesto práctico

En supuesto calcula concurrencia y capacidad con margen, segmenta/red prioriza tráfico, define redundancia, seguridad, interoperabilidad, salas y monitorización de calidad. Añade accesibilidad como subtitulado cuando proceda.

### Fuentes base del material

A1 130 + 129. Correspondencia DIRECTA.

## Fuentes oficiales de actualización

* [Programa oficial GSI A2 — BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262)
* [ENS — Real Decreto 311/2022](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191)
* [RFC Editor — estándares Internet](https://www.rfc-editor.org/)
* [IEEE 802 — familias Ethernet/WLAN (referencia de estudio)](https://standards.ieee.org/)

Edición de trabajo GSI A2. Los materiales del otro proyecto GSI\_B1 no se han utilizado como fuente.
