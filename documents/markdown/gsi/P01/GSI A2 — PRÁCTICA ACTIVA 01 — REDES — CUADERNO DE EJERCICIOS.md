# GSI A2 - PRÁCTICA ACTIVA 01

## Cuaderno de redes: subnetting, VLAN, routing, protocolos y troubleshooting

**Ámbito:** II.08 + IV.07, IV.08, IV.09, IV.10, IV.11, IV.12 e IV.13.

**Cómo usarlo:** resuelve primero sin mirar el solucionario. En subnetting escribe siempre: red, máscara/prefijo, broadcast, primer host, último host y número de hosts. En troubleshooting responde con una hipótesis priorizada, una comprobación y una acción correctiva.

**Objetivo:** convertir teoría de redes en habilidades de examen. Este cuaderno se apoya en los V2.1: II.08 desarrolla OSI/TCP-IP, IPv4/IPv6, CIDR, DNS/DHCP/ICMP y routing; el Bloque IV desarrolla LAN, administración, WAN, Wi-Fi, seguridad e Internet.

# PARTE A - Fundamentos y protocolos

Ejercicio 1 - OSI y equipos

Indica la capa OSI principal de un switch Ethernet tradicional y de un router IP. Explica por qué un equipo moderno puede trabajar en varias capas.

Ejercicio 2 - TCP frente a UDP

Da tres diferencias entre TCP y UDP y un caso de uso razonable para cada uno.

Ejercicio 3 - DNS y DHCP

Un equipo recibe 192.168.10.25/24, gateway 192.168.10.1 y DNS 192.168.10.53. ¿Qué servicio asignó normalmente estos parámetros y qué servicio resolverá nombres?

Ejercicio 4 - ICMP

¿Qué información aporta ping y qué NO demuestra por sí solo?

Ejercicio 5 - NAT

Explica por qué NAT/PAT no debe considerarse un firewall.

Ejercicio 6 - IPv6

Indica la longitud de una dirección IPv6 y dos diferencias conceptuales importantes frente a IPv4 tratadas en el temario.

Ejercicio 7 - Puertos

Relaciona: SSH, DNS, HTTP, HTTPS, NTP, SNMP con sus puertos típicos.

Ejercicio 8 - Encapsulación

Ordena de aplicación a medio físico: trama, datos, paquete IP, bits, segmento/datagrama.

Ejercicio 9 - Ruta por defecto

¿Cuándo utiliza un host/router una ruta por defecto? ¿Qué ocurre si existe una ruta más específica?

Ejercicio 10 - OSPF y BGP

Clasifica OSPF y BGP y explica la diferencia de ámbito principal.

# PARTE B - Subnetting IPv4

Ejercicio 11 - 192.168.10.34/27

Calcula red, máscara decimal, broadcast, primer host, último host y hosts útiles.

Ejercicio 12 - 10.20.35.200/26

Calcula red, máscara decimal, broadcast, primer host, último host y hosts útiles.

Ejercicio 13 - 172.16.50.77/28

Calcula red, máscara decimal, broadcast, primer host, último host y hosts útiles.

Ejercicio 14 - 192.168.1.130/25

Calcula red, máscara decimal, broadcast, primer host, último host y hosts útiles.

Ejercicio 15 - 10.0.5.15/30

Calcula red, broadcast y hosts útiles. ¿La IP 10.0.5.15 podría asignarse a un host en una subred /30 tradicional?

Ejercicio 16 - 172.20.100.200/23

Calcula red, broadcast, primer/último host y hosts útiles.

Ejercicio 17 - 192.168.200.250/29

Calcula red, broadcast y rango útil.

Ejercicio 18 - 10.10.10.10/22

Calcula red, broadcast y rango útil.

Ejercicio 19 - Necesidad de 50 hosts

Partiendo de una red /24, ¿cuál es el prefijo mínimo que permite al menos 50 hosts útiles por subred?

Ejercicio 20 - Necesidad de 12 hosts

Partiendo de una red /24, ¿qué prefijo mínimo permite al menos 12 hosts útiles?

Ejercicio 21 - Dividir /24 en cuatro

Divide 192.168.40.0/24 en cuatro subredes iguales. Indica prefijo y direcciones de red.

Ejercicio 22 - Dividir /24 en ocho

Divide 10.1.1.0/24 en ocho subredes iguales. Indica el nuevo prefijo, tamaño de bloque y redes resultantes.

# PARTE C - VLSM y diseño de direccionamiento

Ejercicio 23 - VLSM oficina

Tienes 192.168.50.0/24 y necesitas: Usuarios 100 hosts, VoIP 50, Servidores 25 y Gestión 10. Diseña VLSM sin solapamientos, de mayor a menor.

Ejercicio 24 - VLSM sedes

Tienes 10.10.0.0/22. Necesitas Sede A 300 hosts, Sede B 120, Sede C 60 y un enlace punto a punto de 2 hosts. Asigna subredes.

Ejercicio 25 - Crecimiento

Una VLAN tiene hoy 55 dispositivos y se prevé crecer a 90. ¿Es razonable asignar /26? Propón prefijo y justifica.

Ejercicio 26 - Reserva de direcciones

Diseña una política sencilla para reservar gateways, infraestructura y DHCP dentro de una subred corporativa sin crear conflictos.

# PARTE D - Ethernet, VLAN y switching

Ejercicio 27 - VLAN de usuarios y servidores

Explica por qué separar usuarios y servidores en VLAN distintas puede mejorar operación y seguridad. ¿Qué hace falta para que se comuniquen?

Ejercicio 28 - 802.1Q

¿Qué problema resuelve un enlace trunk 802.1Q entre switches?

Ejercicio 29 - Puerto access vs trunk

Un PC está conectado a un puerto configurado como trunk cuando debía ser access. Describe un fallo posible y la corrección conceptual.

Ejercicio 30 - STP

Tienes dos switches unidos por dos enlaces físicos sin agregación. ¿Qué problema evita STP/RSTP?

Ejercicio 31 - LACP

¿Qué aporta LACP frente a dejar varios enlaces paralelos independientes?

Ejercicio 32 - Broadcast excesivo

Una VLAN /22 con cientos de puestos presenta mucho broadcast. Da dos líneas de análisis y una posible mejora de diseño.

Ejercicio 33 - Inter-VLAN

Usuarios VLAN 10 pueden salir a Internet pero no acceder a servidores VLAN 20. Indica al menos cuatro puntos a comprobar.

Ejercicio 34 - NAC/802.1X

Explica la función de 802.1X/NAC en una LAN corporativa sin confundirlo con cifrado de tráfico.

# PARTE E - Routing, WAN e Internet

Ejercicio 35 - Longest prefix match

Una tabla contiene 10.0.0.0/8, 10.20.0.0/16 y 10.20.30.0/24. ¿Qué ruta usa un paquete a 10.20.30.55? ¿Y a 10.20.40.1?

Ejercicio 36 - Ruta estática o dinámica

Para dos sedes pequeñas unidas por un único enlace estable, compara ruta estática con routing dinámico.

Ejercicio 37 - OSPF

¿Por qué OSPF se considera un IGP de estado de enlace y qué ventaja conceptual tiene frente a un protocolo puramente por saltos?

Ejercicio 38 - BGP

¿Por qué no debe explicarse BGP como “elige simplemente el camino más corto”?

Ejercicio 39 - MPLS

Describe de forma conceptual qué aporta MPLS en una WAN de operador y qué NO implica por sí solo respecto a cifrado.

Ejercicio 40 - SD-WAN

Da tres razones por las que una organización podría usar SD-WAN sobre varios accesos WAN.

Ejercicio 41 - MTU

Una VPN permite ping pequeño pero fallan transferencias o ciertas páginas. Explica por qué MTU/PMTUD puede ser una hipótesis.

Ejercicio 42 - DNS público vs interno

Una aplicación interna resuelve app.intra.local dentro de la sede pero no desde VPN. Propón un orden de diagnóstico.

# PARTE F - Troubleshooting

Ejercicio 43 - Sin dirección válida

Un portátil muestra 169.254.x.x y no accede a la red corporativa. Prioriza hipótesis y comprobaciones.

Ejercicio 44 - Hay IP pero no DNS

El equipo puede hacer ping a 8.8.8.8 pero no abrir nombres. ¿Qué subsistema revisarías primero?

Ejercicio 45 - DNS sí, servicio no

El nombre resuelve a la IP correcta, pero HTTPS no conecta. Da un árbol de diagnóstico de al menos cinco pasos.

Ejercicio 46 - Solo una VLAN falla

VLAN 30 no tiene conectividad; VLAN 10 y 20 funcionan. ¿Qué revisas antes de tocar el router principal?

Ejercicio 47 - Pérdida intermitente

Usuarios reportan microcortes. Los enlaces muestran errores y descartes crecientes. ¿Qué métricas y capas investigarías?

Ejercicio 48 - Latencia alta sin pérdida

La conectividad existe pero la latencia crece en horas punta. Distingue saturación, cola, routing y aplicación.

Ejercicio 49 - Duplicidad IP

Dos equipos muestran conectividad intermitente y alertas ARP. ¿Qué hipótesis planteas y cómo la validas?

Ejercicio 50 - DHCP agotado

La mitad de los nuevos dispositivos no obtiene dirección y el scope DHCP está al 100 %. Propón solución inmediata y corrección estructural.

Ejercicio 51 - STP inestable

Se observan cambios frecuentes de topología y picos de tráfico broadcast. ¿Qué revisarías?

Ejercicio 52 - Wi-Fi con señal alta pero mal rendimiento

Da cinco causas posibles distintas de “falta de cobertura”.

Ejercicio 53 - VPN conecta pero no llega a recurso

La VPN autentica correctamente, pero el usuario no accede a 10.50.20.0/24. Da un orden de análisis.

Ejercicio 54 - SNMP sin datos

El NMS ve el equipo por ping pero no recibe métricas SNMP. Diferencia conectividad IP de configuración/seguridad SNMP.

# PARTE G - Mini-supuestos integradores

Ejercicio 55 - Nueva sede de 180 empleados

Diseña a alto nivel la red de una sede con 180 usuarios, 40 teléfonos IP, 25 dispositivos IoT, Wi-Fi corporativo e invitados, 12 servidores locales y enlace redundante con CPD. Incluye VLAN/subredes, routing, seguridad, monitorización y continuidad.

Ejercicio 56 - Migración a dos CPD

Una aplicación pública debe operar desde dos CPD conectados. Propón segmentación, direccionamiento, balanceo, routing y observabilidad. Señala qué decisiones dependen de RTO/RPO.

Ejercicio 57 - Incidencia masiva de red

A las 10:05 varios servicios internos se vuelven inaccesibles. DNS responde, pero traceroute muestra pérdida a partir del core. Explica el proceso de diagnóstico, comunicación, contención y recuperación.

Ejercicio 58 - Red de Administración con invitados

Diseña una arquitectura para puestos corporativos, administración privilegiada, servidores, impresoras, VoIP e invitados. Justifica controles de acceso entre segmentos.

Ejercicio 59 - Servicio con HTTP/3

Una web pública usa CDN y HTTP/3. Explica qué papel tienen DNS, QUIC/UDP, TLS, CDN y firewall, y qué revisarías si HTTP/2 funciona pero HTTP/3 no.

# Registro de progreso

| Bloque | Intento 1 | Intento 2 | Errores recurrentes |
| --- | --- | --- | --- |
| A Fundamentos |  |  |  |
| B Subnetting |  |  |  |
| C VLSM |  |  |  |
| D VLAN |  |  |  |
| E Routing |  |  |  |
| F Troubleshooting |  |  |  |
| G Supuestos |  |  |  |

Fuentes de estudio: GSI A2 Bloque II V2.1, tema II.08; GSI A2 Bloque IV V2.1, temas IV.07-IV.13. El cuaderno no sustituye los apuntes: los transforma en práctica activa.
