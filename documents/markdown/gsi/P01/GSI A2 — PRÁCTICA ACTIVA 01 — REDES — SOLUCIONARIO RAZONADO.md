# GSI A2 - PRÁCTICA ACTIVA 01

## Solucionario razonado de redes

No memorices las respuestas como frases. Comprueba el razonamiento. En troubleshooting puede haber más de una causa válida: se valora priorizar hipótesis y verificar por capas.

# PARTE A - Fundamentos y protocolos

Ejercicio 1 - OSI y equipos

**Switch tradicional:** capa 2 (enlace), decide por MAC. **Router:** capa 3 (red), decide por IP/prefijos. Equipos modernos pueden integrar routing, firewall, inspección L7 u otras funciones, por eso la asociación es principal, no absoluta.

Ejercicio 2 - TCP frente a UDP

TCP es orientado a conexión, fiable/ordenado y con control de flujo/congestión. UDP es no orientado, no garantiza entrega/orden y tiene menor overhead. TCP: SSH/HTTP clásico/SMTP. UDP: NTP, DNS frecuente, tiempo real y QUIC como protocolo superior sobre UDP.

Ejercicio 3 - DNS y DHCP

**DHCP** asigna normalmente dirección, prefijo, gateway y DNS. **DNS** resuelve nombres. Que el equipo tenga IP no garantiza que DNS funcione.

Ejercicio 4 - ICMP

Ping verifica que llegan/responden mensajes ICMP Echo entre extremos y permite observar RTT/pérdida. No demuestra que un puerto TCP concreto esté abierto, que DNS funcione, que una aplicación esté sana ni que no exista filtrado selectivo.

Ejercicio 5 - NAT

NAT/PAT traduce direcciones/puertos. Un firewall aplica una política de seguridad sobre flujos. NAT puede dificultar conexiones entrantes no solicitadas, pero no reemplaza filtrado, inspección ni control de política.

Ejercicio 6 - IPv6

IPv6 usa **128 bits**. No existe broadcast IPv6; usa multicast/anycast. NDP reemplaza funciones que en IPv4 realiza ARP. Además, el espacio de direcciones reduce la necesidad estructural de NAT por escasez.

Ejercicio 7 - Puertos

SSH 22/TCP; DNS 53 UDP/TCP; HTTP 80/TCP; HTTPS 443/TCP y HTTP/3 sobre QUIC/UDP 443; NTP 123/UDP; SNMP 161/162 UDP típicamente.

Ejercicio 8 - Encapsulación

**Datos → segmento/datagrama → paquete IP → trama → bits/señales.**

###

Ejercicio 9 - Ruta por defecto

Se usa cuando no hay una coincidencia más específica. El routing aplica la coincidencia de prefijo más larga/específica antes que la ruta por defecto.

Ejercicio 10 - OSPF y BGP

OSPF es un **IGP** de estado de enlace, usado dentro de un dominio/sistema autónomo. BGP es el protocolo interdominio de Internet y selecciona rutas por políticas/atributos, no solo distancia.

# PARTE B - Subnetting IPv4

Ejercicio 11 - 192.168.10.34/27

Red **192.168.10.32/27**; máscara 255.255.255.224; broadcast 192.168.10.63; hosts 192.168.10.33-62; **30 hosts útiles**.

Ejercicio 12 - 10.20.35.200/26

Red **10.20.35.192/26**; máscara 255.255.255.192; broadcast 10.20.35.255; hosts 10.20.35.193-254; **62 útiles**.

Ejercicio 13 - 172.16.50.77/28

Red **172.16.50.64/28**; máscara 255.255.255.240; broadcast 172.16.50.79; hosts 172.16.50.65-78; **14 útiles**.

Ejercicio 14 - 192.168.1.130/25

Red **192.168.1.128/25**; máscara 255.255.255.128; broadcast 192.168.1.255; hosts 192.168.1.129-254; **126 útiles**.

Ejercicio 15 - 10.0.5.15/30

Red **10.0.5.12/30**; broadcast **10.0.5.15**; hosts 10.0.5.13 y 10.0.5.14. Por tanto 10.0.5.15 es broadcast y **no** se asigna a host en el uso tradicional.

Ejercicio 16 - 172.20.100.200/23

Red **172.20.100.0/23**; máscara 255.255.254.0; broadcast 172.20.101.255; hosts 172.20.100.1-172.20.101.254; **510 útiles**.

Ejercicio 17 - 192.168.200.250/29

Red **192.168.200.248/29**; broadcast 192.168.200.255; hosts 192.168.200.249-254; **6 útiles**.

Ejercicio 18 - 10.10.10.10/22

Red **10.10.8.0/22**; máscara 255.255.252.0; broadcast 10.10.11.255; hosts 10.10.8.1-10.10.11.254; **1022 útiles**.

Ejercicio 19 - Necesidad de 50 hosts

Se requieren al menos 52 direcciones contando red/broadcast. El siguiente bloque potencia de 2 es 64 → **/26**, 62 hosts útiles.

Ejercicio 20 - Necesidad de 12 hosts

Se requieren 14 o más direcciones totales; bloque 16 → **/28**, 14 hosts útiles.

Ejercicio 21 - Dividir /24 en cuatro

Tomamos 2 bits → **/26**. Redes: 192.168.40.0/26, .64/26, .128/26 y .192/26.

Ejercicio 22 - Dividir /24 en ocho

Tomamos 3 bits → **/27**, bloques de 32: 10.1.1.0, .32, .64, .96, .128, .160, .192 y .224 /27.

# PARTE C - VLSM y diseño

Ejercicio 23 - VLSM oficina

| Segmento | Subred | Hosts útiles | Rango |
| --- | --- | --- | --- |
| Usuarios 100 | 192.168.50.0/25 | 126 | .1-.126 |
| VoIP 50 | 192.168.50.128/26 | 62 | .129-.190 |
| Servidores 25 | 192.168.50.192/27 | 30 | .193-.222 |
| Gestión 10 | 192.168.50.224/28 | 14 | .225-.238 |

Asignar de mayor a menor evita fragmentar el espacio.

Ejercicio 24 - VLSM sedes

| Segmento | Subred |
| --- | --- |
| Sede A 300 | 10.10.0.0/23 |
| Sede B 120 | 10.10.2.0/25 |
| Sede C 60 | 10.10.2.128/26 |
| Enlace 2 | 10.10.2.192/30 |

Queda espacio libre dentro del /22 para crecimiento.

Ejercicio 25 - Crecimiento

/26 ofrece 62 hosts útiles: sirve hoy para 55, pero **no** para 90. /25 ofrece 126 y deja margen razonable.

Ejercicio 26 - Reserva de direcciones

Ejemplo: gateway primera dirección útil; infraestructura fija en un rango bajo; DHCP en rango central; reservas/servidores fuera del pool; documentar exclusiones. Lo importante es coherencia, IPAM y evitar solapamientos.

# PARTE D - Ethernet, VLAN y switching

Ejercicio 27 - VLAN de usuarios y servidores

Reduce dominio de broadcast y permite políticas distintas. Para comunicarse se necesita **routing inter-VLAN** mediante router o switch L3, y ACL/firewall según política.

Ejercicio 28 - 802.1Q

Permite transportar varias VLAN por un mismo enlace etiquetando tramas con VLAN ID. Es típico entre switches y hacia equipos que entienden trunking.

Ejercicio 29 - Puerto access vs trunk

Un host normal puede recibir/emitir tráfico inesperado etiquetado o quedar en VLAN incorrecta. La corrección es configurar puerto access en la VLAN prevista, salvo que el endpoint necesite trunk explícitamente.

Ejercicio 30 - STP

Evita bucles L2 que provocarían tormentas broadcast, duplicados y tablas MAC inestables. Bloquea lógicamente caminos redundantes y converge ante fallos.

Ejercicio 31 - LACP

Agrupa enlaces en un enlace lógico para redundancia y reparto según algoritmo, evitando tratar paralelos como bucles independientes.

Ejercicio 32 - Broadcast excesivo

Medir broadcast/multicast, tamaño real del dominio y fuentes anómalas. Puede convenir segmentar en VLAN/subredes menores, además de corregir loops o dispositivos ruidosos.

Ejercicio 33 - Inter-VLAN

Comprobar: pertenencia VLAN/puertos; SVI/gateway; rutas; ACL/firewall; estado de enlaces/trunks; ARP/NDP; política de servidor; DNS solo si el síntoma es por nombre.

Ejercicio 34 - NAC/802.1X

Controla quién/qué accede a la red mediante autenticación y política de acceso. Puede asignar VLAN/política dinámica. No cifra por sí mismo el tráfico Ethernet de usuario.

# PARTE E - Routing, WAN e Internet

Ejercicio 35 - Longest prefix match

10.20.30.55 usa **10.20.30.0/24**. 10.20.40.1 usa **10.20.0.0/16**. La ruta más específica gana.

Ejercicio 36 - Ruta estática o dinámica

La estática es simple, predecible y con poca sobrecarga, adecuada si topología es mínima. El routing dinámico aporta adaptación y escala, pero añade protocolo, convergencia y operación. Con un único camino estable, la estática suele ser suficiente.

Ejercicio 37 - OSPF

Distribuye información de estado de enlace y cada router calcula rutas sobre una visión de topología/área. No se limita a contar saltos; usa coste y converge de forma más adecuada en redes complejas.

Ejercicio 38 - BGP

BGP aplica atributos y políticas entre sistemas autónomos; una ruta puede preferirse por política aunque tenga más saltos AS. Es routing político/administrativo además de técnico.

Ejercicio 39 - MPLS

Conmuta tráfico usando etiquetas dentro de la red del operador y facilita VPN de operador/ingeniería de tráfico según servicio. **No implica cifrado**; para confidencialidad puede requerirse IPsec/TLS u otra capa.

Ejercicio 40 - SD-WAN

Uso simultáneo de enlaces heterogéneos, selección dinámica por SLA/aplicación, gestión centralizada, mejor resiliencia y políticas. No elimina por sí sola necesidad de seguridad ni conectividad subyacente.

Ejercicio 41 - MTU

Encapsular VPN reduce MTU efectiva. Paquetes pequeños pasan pero grandes pueden fragmentarse o descartarse si PMTUD está roto/ICMP filtrado. Revisar MTU/MSS y mensajes ICMP pertinentes.

Ejercicio 42 - DNS público vs interno

1) confirmar VPN/rutas; 2) comprobar DNS asignado por VPN; 3) consultar nombre contra DNS interno; 4) revisar split-DNS/zona; 5) firewall UDP/TCP 53; 6) caché y sufijos de búsqueda; 7) política del recurso.

# PARTE F - Troubleshooting

Ejercicio 43 - Sin dirección válida

169.254/16 sugiere autoconfiguración al no obtener DHCP. Revisar enlace/Wi-Fi, VLAN, reachability al servidor/relay DHCP, scope, ACL y servicio. Acción: restaurar DHCP o asignación válida; no “arreglar” con IP manual sin causa.

Ejercicio 44 - Hay IP pero no DNS

Si 8.8.8.8 responde pero nombres no, priorizar DNS: servidor configurado, reachability 53, servicio, zona/cache. La capa IP básica parece operativa.

Ejercicio 45 - DNS sí, servicio no

1) resolver IP; 2) ping/traceroute si permitido; 3) probar TCP 443; 4) firewall/ACL/NAT; 5) proceso escuchando; 6) balanceador/reverse proxy; 7) TLS/certificado/SNI; 8) logs de aplicación.

Ejercicio 46 - Solo una VLAN falla

Puerto/VLAN access, trunk allowed list, SVI/gateway, DHCP scope/relay, STP, ACL específica, direccionamiento. Si otras VLAN funcionan, empezar por lo específico de VLAN 30.

Ejercicio 47 - Pérdida intermitente

Revisar capa física (CRC, duplex, óptica, potencia), congestión/colas/discards, loops/STP, errores de interfaz, CPU de equipos, flaps, routing. Correlacionar tiempo y topología.

Ejercicio 48 - Latencia alta sin pérdida

Medir RTT por saltos, utilización/colas, jitter, CPU, enlaces WAN, cambios de ruta y latencia de aplicación. Alta latencia puede ser congestión sin pérdida visible o procesamiento superior.

Ejercicio 49 - Duplicidad IP

Hipótesis: dos MAC responden por la misma IP. Validar tabla ARP/MAC, logs DHCP, ping/ARP desde varios puntos, IPAM. Corregir reserva/estática y evitar pool solapado.

Ejercicio 50 - DHCP agotado

Mitigación: ampliar scope si hay espacio, reducir lease de forma razonable o liberar asignaciones inválidas. Estructural: redimensionar subred/VLAN, revisar crecimiento, rogue clients y capacidad.

Ejercicio 51 - STP inestable

Buscar enlaces que flapean, loops físicos, root bridge inesperado, cambios de topología, EtherChannel/LACP mal configurado y puertos de usuario sin protecciones apropiadas.

Ejercicio 52 - Wi-Fi con señal alta pero mal rendimiento

Interferencia/co-channel, alta densidad de clientes, canal ancho mal elegido, backhaul saturado, roaming, airtime consumido por clientes lentos, autenticación, QoS, drivers, capacidad del AP.

Ejercicio 53 - VPN conecta pero no llega a recurso

Autenticación no implica routing. Revisar rutas empujadas/split tunnel, subredes solapadas, firewall/ACL, retorno desde 10.50.20.0/24, NAT, DNS si se usa nombre y permisos de aplicación.

Ejercicio 54 - SNMP sin datos

Ping valida IP/ICMP, no SNMP. Revisar UDP 161/162, versión SNMP, credenciales/usuario y seguridad de SNMPv3, ACL, origen permitido, agente SNMP, views/OIDs y configuración del NMS.

# PARTE G - Mini-supuestos integradores

Ejercicio 55 - Nueva sede de 180 empleados

Una respuesta fuerte: VLAN Usuarios, VoIP, IoT, servidores, gestión y Wi-Fi invitados; subredes dimensionadas con margen; gateways redundantes si criticidad; routing inter-VLAN controlado por ACL/firewall; invitados solo Internet; QoS para voz; 802.1X/NAC para corporativo; dos enlaces WAN con política/failover; DHCP/DNS/NTP; SNMPv3/syslog/telemetría; Wi-Fi con estudio de capacidad; documentación/IPAM. Justificar cada separación por riesgo/operación.

Ejercicio 56 - Migración a dos CPD

Separar front, aplicación, datos y gestión; direccionamiento no solapado; routing redundante; balanceo global/local según diseño; firewall; replicación/estado según RPO; health checks; DNS/balanceo; monitorización. RTO define tiempo aceptable de recuperación; RPO condiciona replicación y pérdida de datos.

Ejercicio 57 - Incidencia masiva de red

Declarar incidente mayor; confirmar alcance; seguir ruta y métricas del core; revisar interfaces, CPU, routing, cambios y logs; contener/revertir último cambio si correlaciona; restaurar ruta/enlace; validar servicios; comunicar; registrar timeline y postmortem. DNS funcional permite descartar parcialmente resolución como causa principal.

Ejercicio 58 - Red de Administración con invitados

Segmentos separados: corporativo, privilegiado/gestión, servidores, impresión/IoT, VoIP e invitados. Intersegmentación mediante firewall/ACL de mínimo privilegio. Invitados sin acceso interno; administración privilegiada desde bastión/segmento dedicado; 802.1X/NAC; logs y monitorización.

Ejercicio 59 - Servicio con HTTP/3

DNS dirige al CDN/servicio. HTTP/3 usa QUIC sobre UDP 443 y TLS integrado en QUIC. Si HTTP/2 por TCP 443 funciona pero HTTP/3 no, revisar soporte cliente/CDN, UDP 443 en firewalls/NAT, middleboxes, políticas del CDN, MTU/QUIC y fallback. La aplicación puede seguir disponible por HTTP/2.

# Patrón de respuesta para troubleshooting

* **Delimita alcance:** uno/todos, una VLAN/todas, una sede/todas.
* **Empieza por la capa más probable:** físico/enlace → IP/routing → transporte → aplicación.
* **Compara con algo que funciona.**
* **Mide antes de cambiar.**
* **Haz un cambio controlado y valida.**
* **Documenta causa, restauración y prevención.**

Soluciones elaboradas a partir de los conceptos de II.08 y IV.07-IV.13 de los apuntes V2.1. En escenarios puede existir más de una arquitectura válida si se justifica con requisitos y riesgo.
