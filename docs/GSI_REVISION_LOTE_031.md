# GSI-EDITORIAL-031 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `c903aafa3b17125effe750222ebb6dedc88731eb4c395bec3d1157deacbac4b6`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B2-T08-009

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente pregunta y alternativas numéricas, con clave C; distinguir total y asignable y acotar excepciones de prefijos pequeños.

### Antes

¿Cuántos hosts asignables ofrece normalmente una subred IPv4 /27 tradicional?

- A. 64
- B. 32
- C. 30 **(correcta)**
- D. 14

Explicación: Hay 32 direcciones y se reservan red y broadcast en el supuesto tradicional.

### Propuesta

¿Cuántos hosts asignables ofrece normalmente una subred IPv4 /27 tradicional?

- A. 64
- B. 32
- C. 30 **(correcta)**
- D. 14

Explicación: Un prefijo /27 deja 32 − 27 = 5 bits fuera del prefijo: 2⁵ = 32 direcciones totales. En la subred IPv4 tradicional descrita se excluyen la dirección de red y la de broadcast, por lo que quedan 30 asignables a hosts. No se confunde total con asignable ni se aplica la resta de dos como regla universal a /31 punto a punto o /32.

- Error A: 64 es el total de direcciones de un bloque /26. Un /27 contiene la mitad de ese total y además el caso descuenta red y broadcast.
- Error B: 32 es el total de direcciones del /27. Incluye las dos que el supuesto tradicional no asigna a hosts.
- Error D: 14 es el número tradicional de hosts de un /28: 16 direcciones menos dos. Se ha dejado un bit menos de host del que tiene /27.

- [IETF RFC 4632: Classless Inter-domain Routing (CIDR): The Internet Address Assignment and Aggregation Plan](https://www.rfc-editor.org/rfc/rfc4632.html) · 3.1 IP Addressing y tabla de tamaños de bloques según longitud de prefijo · versión: BCP 122, agosto de 2006; solo aritmética y notación de prefijos, sin trasladar políticas históricas de asignación a recomendaciones actuales · comprobado: 2026-10-28
- [IETF RFC 3021: Using 31-Bit Prefixes on IPv4 Point-to-Point Links](https://www.rfc-editor.org/rfc/rfc3021.html) · 2 y 2.1: las dos direcciones de /31 en enlaces punto a punto y excepción al descuento tradicional · versión: Standards Track, diciembre de 2000; no se aplica la excepción /31 a la pregunta tradicional /27 · comprobado: 2026-10-28

Partida: `1c6c8962388a243685b7b46998710ec87051b494e47c1a33a391a2a38dc76d22` · propuesta: `7af6979cb78acc7d18b4fce0177d004e3a2d6166cef44938602f12764865a4aa`

## AI-GSI-B2-T08-011

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación RFC 1918 y clave A; cuatro prefijos comparables y distinción entre privado, compartido y documentación.

### Antes

¿Cuál de estos rangos es privado RFC1918?

- A. 172.16.0.0/12 **(correcta)**
- B. 192.0.0.0/8 completo
- C. 172.0.0.0/8 completo
- D. 8.0.0.0/8

Explicación: El rango privado es 172.16.0.0/12; no todo el bloque 172/8 es privado.

### Propuesta

¿Cuál de estos bloques está reservado para uso privado por RFC 1918?

- A. 172.16.0.0/12. **(correcta)**
- B. 172.32.0.0/12.
- C. 100.64.0.0/10.
- D. 192.0.2.0/24.

Explicación: RFC 1918 reserva 172.16.0.0/12, desde 172.16.0.0 hasta 172.31.255.255, junto con 10.0.0.0/8 y 192.168.0.0/16. No todo 172/8 es privado. Los otros bloques tienen límites o finalidades distintas. La reserva para uso privado no ofrece por sí misma cifrado o una política de seguridad suficiente.

- Error B: 172.32.0.0 comienza fuera del intervalo 172.16 a 172.31 reservado por RFC 1918. Compartir el primer octeto no lo hace privado bajo esa norma.
- Error C: 100.64.0.0/10 es Shared Address Space de RFC 6598, usado en escenarios como CGN. No es uno de los bloques privados RFC 1918.
- Error D: 192.0.2.0/24 es TEST-NET-1 de RFC 5737, reservado para documentación. Su condición especial no lo convierte en espacio privado RFC 1918.

- [IETF RFC 1918: Address Allocation for Private Internets](https://www.rfc-editor.org/rfc/rfc1918.html) · 3 Private Address Space: 10/8, 172.16/12 y 192.168/16 · versión: BCP 5, febrero de 1996; reservado privado no equivale a protección, cifrado o una garantía de filtrado · comprobado: 2026-10-28
- [IETF RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space](https://www.rfc-editor.org/rfc/rfc6598.html) · 1 Introduction y 7 IANA Considerations: 100.64.0.0/10, distinto de RFC 1918 · versión: BCP 153, abril de 2012; espacio compartido para casos como CGN, no bloque privado RFC 1918 · comprobado: 2026-10-28
- [IETF RFC 5737: IPv4 Address Blocks Reserved for Documentation](https://www.rfc-editor.org/rfc/rfc5737.html) · 3 Documentation Address Blocks: TEST-NET-1, 192.0.2.0/24 · versión: Enero de 2010; reservado para ejemplos, no rango privado de RFC 1918 · comprobado: 2026-10-28

Partida: `c4258028016af456c81d981a3ffd705392df79df71e085bc7e62fec46e72d036` · propuesta: `8ef859a32b95078669c935f9a3684b03f18a80a7aaea91445c01627279210973`

## AI-GSI-B2-T08-012

Decisión: pending_review · acción: revise.

Motivo: Conservar traducción frente a seguridad y clave A; caso de red con NAT que distingue funciones coexistentes sin negar efectos incidentales de topología.

### Antes

¿Qué afirmación sobre NAT es correcta?

- A. Traduce direcciones y no sustituye por sí solo un firewall **(correcta)**
- B. Equivale a cifrado de extremo a extremo
- C. Elimina toda necesidad de política de acceso
- D. Garantiza protección frente a toda aplicación vulnerable

Explicación: NAT/PAT traduce direcciones o puertos; la política de seguridad requiere controles adicionales.

### Propuesta

Una red traduce direcciones IPv4 para salir a Internet. ¿Qué puede concluirse del mero uso de NAT?

- A. Traduce direcciones sin sustituir una política de filtrado. **(correcta)**
- B. Cifra el contenido entre los extremos de las conexiones.
- C. Autoriza operaciones según la identidad de cada usuario.
- D. Corrige fallos de seguridad de las aplicaciones expuestas.

Explicación: NAT traduce direcciones y NAPT añade la traducción de identificadores como puertos. De ello no se deduce cifrado de extremo a extremo, autorización de usuarios o corrección de vulnerabilidades. Un equipo que realiza NAT puede incorporar filtrado y otras funciones, pero son controles que deben diseñarse y configurarse. Algunos efectos de ocultación o estado no equivalen a una garantía general de protección.

- Error B: La traducción de cabeceras no cifra el contenido. La confidencialidad requiere un mecanismo criptográfico adicional.
- Error C: Una correspondencia de direcciones o puertos no demuestra identidad ni permisos de cada usuario sobre operaciones de aplicación.
- Error D: Cambiar direcciones no repara código vulnerable ni valida automáticamente lo que una aplicación procesa. Esa protección necesita controles específicos.

- [IETF RFC 3022: Traditional IP Network Address Translator (Traditional NAT)](https://www.rfc-editor.org/rfc/rfc3022.html) · 2 Overview: Basic NAT y NAPT; 6 Security Considerations · versión: Enero de 2001; traducción de direcciones y puertos, sin inferir cifrado, autorización de usuario o reparación de aplicaciones · comprobado: 2026-10-28
- [IETF RFC 4864: Local Network Protection for IPv6](https://www.rfc-editor.org/rfc/rfc4864.html) · 2 Local Network Protection with IPv4: traducción, ocultación y filtrado son aspectos distintos; protección sin depender de NAT · versión: Mayo de 2007; solo diferencia de funciones, sin afirmar que NAT carezca de efectos de topología o filtrado en productos concretos · comprobado: 2026-10-28

Partida: `db073ce76a25ba2f4dee53bf12c5f01ef9041a92990c0bdf477f387a2ba51788` · propuesta: `b9955217082f3200b49f961242bc614d11a070efe097cd7edfb34b2d80f87b64`

## AI-GSI-B2-T08-013

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la pregunta y sus cuatro categorías, con clave B; precisar capa IPv6 frente a posibles tramas de difusión del enlace.

### Antes

¿Qué tipo de envío no existe en IPv6?

- A. Anycast
- B. Broadcast **(correcta)**
- C. Multicast
- D. Unicast

Explicación: IPv6 utiliza unicast, multicast y anycast; no broadcast.

### Propuesta

¿Qué tipo de envío no existe en IPv6?

- A. Anycast
- B. Broadcast **(correcta)**
- C. Multicast
- D. Unicast

Explicación: La arquitectura de direcciones IPv6 no define broadcast; utiliza unicast, anycast y multicast. Algunas funciones de difusión se realizan mediante grupos multicast, como los de alcance de enlace. Se habla de la capa IPv6: que la tecnología de enlace subyacente admita tramas broadcast no crea direcciones broadcast IPv6.

- Error A: Anycast sí existe en IPv6: una dirección identifica un conjunto de interfaces y el encaminamiento entrega a una de ellas según su noción de proximidad.
- Error C: Multicast sí existe: identifica un grupo de interfaces y permite entrega al grupo según alcance y pertenencia.
- Error D: Unicast sí existe: identifica una interfaz para comunicación dirigida a ese destino, dentro de las reglas de su ámbito.

- [IETF RFC 4291: IP Version 6 Addressing Architecture](https://www.rfc-editor.org/rfc/rfc4291.html) · 2 tipos sin broadcast; 2.2 representación textual y uso único de ::; 2.4 prefijos; 2.5.6 link-local; 2.7 multicast · versión: Febrero de 2006; clasificación FE80::/10 y formato link-local con bits reservados, sin equiparar clasificación del rango y longitud de subred · comprobado: 2026-10-28

Partida: `0f6bae9db9e509bf58a6624430fa75613c5b4cbe3135d292ead1cb96a28e048f` · propuesta: `68294f056ab0fa06c5d39c3a3b29f2147a41f1eff321fa66decb8bbdfa54244c`

## AI-GSI-B2-T08-014

Decisión: pending_review · acción: revise.

Motivo: Conservar clasificación link-local y clave A; cuatro prefijos reales sin sufijos de pista y distinguir clasificación /10 de formato de dirección.

### Antes

¿Qué prefijo corresponde a direcciones IPv6 link-local?

- A. FE80::/10 **(correcta)**
- B. FF00::/8 como link-local
- C. 2000::/3 como link-local
- D. ::/0 como link-local

Explicación: FE80::/10 identifica el rango link-local; multicast y ruta por defecto son conceptos diferentes.

### Propuesta

¿Qué prefijo identifica el rango unicast IPv6 link-local?

- A. FE80::/10. **(correcta)**
- B. FF00::/8.
- C. 2000::/3.
- D. FC00::/7.

Explicación: FE80::/10 identifica el rango unicast link-local. Su uso es el enlace local y los routers no deben reenviar esos paquetes a otro enlace. RFC 4291 detalla además el formato con bits reservados antes del identificador de interfaz: reconocer el rango /10 no significa que cualquier combinación de sus bits sea una dirección link-local correctamente formada ni confundirlo con la longitud habitual del formato de interfaz.

- Error B: FF00::/8 identifica multicast. Un grupo multicast puede tener alcance de enlace, pero eso no es el rango unicast link-local preguntado.
- Error C: 2000::/3 se asocia al espacio de unicast global asignable, no al prefijo link-local. Global no garantiza que toda dirección concreta sea alcanzable.
- Error D: FC00::/7 corresponde a direcciones locales únicas, con una finalidad y ámbito diferentes del enlace local. No sustituye a FE80::/10.

- [IETF RFC 4291: IP Version 6 Addressing Architecture](https://www.rfc-editor.org/rfc/rfc4291.html) · 2 tipos sin broadcast; 2.2 representación textual y uso único de ::; 2.4 prefijos; 2.5.6 link-local; 2.7 multicast · versión: Febrero de 2006; clasificación FE80::/10 y formato link-local con bits reservados, sin equiparar clasificación del rango y longitud de subred · comprobado: 2026-10-28
- [IANA: IPv6 Address Space](https://www.iana.org/assignments/ipv6-address-space) · Tabla IPv6 Prefix / Allocation: 2000::/3, FC00::/7, FE80::/10 y FF00::/8 · versión: Registro con última actualización visible 23-10-2025, consultado el 28-10-2026; clasificación de bloques, no garantía de alcance de cada dirección · comprobado: 2026-10-28

Partida: `5d3dbe6864b3a431cf1c50cd6ce56292c8fc8725450ff3088d062951fc4a6f63` · propuesta: `959b63f1b612ea6f7ad243c7eb631998b08b8947cd28e60e95071044893d0ba9`

## AI-GSI-B2-T08-015

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y opciones, con clave D; explicar máximo de una aparición frente a número de grupos y representación canónica.

### Antes

¿Cuántas veces puede usarse :: en una dirección IPv6 abreviada?

- A. Sin límite
- B. Dos
- C. Cuatro
- D. Una **(correcta)**

Explicación: Solo una secuencia continua de grupos cero puede comprimirse con :: para evitar ambigüedad.

### Propuesta

¿Cuántas veces puede usarse :: en una dirección IPv6 abreviada?

- A. Sin límite
- B. Dos
- C. Cuatro
- D. Una **(correcta)**

Explicación: La compresión con :: puede aparecer como máximo una vez, porque permite reconstruir cuántos grupos cero faltan para completar los 128 bits. No es obligatorio usarla en toda dirección. Una única aparición puede reemplazar varios grupos cero consecutivos. La representación canónica añade reglas, como no usar :: para abreviar un único campo cero; validez y forma recomendada no son lo mismo.

- Error A: Varias apariciones dejarían indeterminado cuántos grupos corresponden a cada hueco. La sintaxis no permite un número ilimitado.
- Error B: Dos huecos de tamaño no explícito producen la ambigüedad que la regla evita. La cantidad de grupos cero no autoriza un segundo ::.
- Error C: Pueden comprimirse cuatro grupos consecutivos mediante una sola aparición. Número de grupos omitidos y número de apariciones son cantidades distintas.

- [IETF RFC 4291: IP Version 6 Addressing Architecture](https://www.rfc-editor.org/rfc/rfc4291.html) · 2 tipos sin broadcast; 2.2 representación textual y uso único de ::; 2.4 prefijos; 2.5.6 link-local; 2.7 multicast · versión: Febrero de 2006; clasificación FE80::/10 y formato link-local con bits reservados, sin equiparar clasificación del rango y longitud de subred · comprobado: 2026-10-28
- [IETF RFC 5952: A Recommendation for IPv6 Address Text Representation](https://www.rfc-editor.org/rfc/rfc5952.html) · 4.2 Zero Compression: uso de :: y recomendaciones para representación canónica · versión: Agosto de 2010; se distingue sintaxis válida RFC 4291 de recomendaciones canónicas, incluida no comprimir un solo campo cero · comprobado: 2026-10-28

Partida: `f4c37a9a9784b1261a885c41b722a5e1788f93779bbebf90ebc2d6f3773270c7` · propuesta: `d5e1c0e95df0f10e40cc0369b4ad9a77b6371f658a72986050131d688ada9fde`

## AI-GSI-B2-T08-016

Decisión: pending_review · acción: revise.

Motivo: Conservar fiabilidad/orden de TCP y clave A; alternativas de garantías de transporte plausibles y alcance de flujo de bytes, no mensajes o cifrado.

### Antes

¿Qué aporta TCP que UDP no garantiza por sí mismo?

- A. Orden, confirmaciones y retransmisiones **(correcta)**
- B. Inmunidad frente a pérdida de red
- C. Cifrado obligatorio de toda carga
- D. Ausencia total de cabeceras

Explicación: TCP implementa fiabilidad y orden; UDP permite a capas superiores gestionar necesidades adicionales.

### Propuesta

¿Qué aporta TCP que UDP no garantiza por sí mismo?

- A. Entrega ordenada de bytes con confirmación y retransmisión. **(correcta)**
- B. Conservación de los límites de cada mensaje de aplicación.
- C. Cifrado nativo del contenido entre emisor y receptor.
- D. Entrega en un plazo máximo independiente de la red.

Explicación: TCP ofrece a la aplicación un flujo fiable y ordenado de bytes, usando secuencias, confirmaciones y retransmisiones. UDP no proporciona por sí mismo esas garantías, aunque un protocolo superior puede añadirlas. Fiabilidad no significa que la red nunca falle: una conexión puede terminar con error. TCP no conserva límites de mensajes de aplicación, no cifra por sí mismo y un ACK de transporte no acredita que el negocio haya procesado la operación.

- Error B: TCP entrega un flujo de bytes. La aplicación debe definir su encuadre si necesita reconocer mensajes; una escritura no corresponde necesariamente a una lectura.
- Error C: El cifrado no es una propiedad nativa de TCP. Puede usarse una capa adicional, como TLS, sin confundir ambas funciones.
- Error D: La retransmisión y el orden no crean una garantía temporal independiente de pérdida, congestión o fallo de los extremos. No se promete latencia máxima universal.

- [IETF RFC 9293: Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293.html) · 2.2 Key TCP Concepts y 3: flujo fiable ordenado de bytes, secuencias, confirmaciones y retransmisión · versión: STD 7, agosto de 2022; no proporciona límites de mensajes, cifrado nativo, plazo garantizado o confirmación de procesamiento de negocio · comprobado: 2026-10-28
- [IETF RFC 768: User Datagram Protocol](https://www.rfc-editor.org/rfc/rfc768.html) · Introducción y Format: servicio de datagramas y garantías que no proporciona · versión: STD 6, agosto de 1980; un protocolo superior puede añadir recuperación, sin atribuirla a UDP por sí mismo · comprobado: 2026-10-28

Partida: `ba69a6ebacc5e1a348a661c43f3215d8caa60c383e5f75a3db6ae347ff3672f0` · propuesta: `4d1b1ec85a4e90beb2483907c6aca62786af2f9a84b52f86907a82cdb74d025a`

## AI-GSI-B2-T08-017

Decisión: pending_review · acción: revise.

Motivo: Conservar DORA y clave C; comparar permutaciones de mensajes reales y acotar adquisición inicial frente a renovación.

### Antes

¿Qué secuencia describe DORA de DHCPv4?

- A. Delete, Open, Read, Append
- B. Discover, Order, Reply, Authenticate
- C. Discover, Offer, Request, Acknowledge **(correcta)**
- D. Domain, Origin, Route, Address

Explicación: DORA resume descubrimiento, oferta, solicitud y confirmación de parámetros DHCPv4.

### Propuesta

En la adquisición inicial habitual de una concesión DHCPv4, ¿qué orden resume DORA?

- A. DISCOVER → REQUEST → OFFER → ACK.
- B. REQUEST → OFFER → DISCOVER → ACK.
- C. DISCOVER → OFFER → REQUEST → ACK. **(correcta)**
- D. DISCOVER → OFFER → ACK → REQUEST.

Explicación: En la adquisición inicial habitual y satisfactoria, el cliente descubre servidores, recibe ofertas, solicita la configuración elegida y obtiene la confirmación: DHCPDISCOVER, DHCPOFFER, DHCPREQUEST y DHCPACK. DORA resume esa secuencia. No es el único flujo de DHCPv4: renovación o INIT-REBOOT pueden empezar con DHCPREQUEST, y un fallo puede producir otros mensajes como DHCPNAK.

- Error A: Sitúa DHCPREQUEST antes de la oferta que el cliente selecciona en el flujo inicial descrito. Confunde solicitar con recibir propuestas de configuración.
- Error B: Comienza con DHCPREQUEST y deja el descubrimiento después de la oferta. No es el orden DORA de adquisición inicial; otros estados no validan esa secuencia completa.
- Error D: Coloca DHCPACK antes de la solicitud de la configuración elegida. En el flujo descrito el servidor confirma después de DHCPREQUEST.

- [IETF RFC 2131: Dynamic Host Configuration Protocol](https://www.rfc-editor.org/rfc/rfc2131.html) · 3.1 Client-server interaction — allocating a network address, figura 3; 4.4 estados y renovación · versión: Marzo de 1997; secuencia inicial habitual satisfactoria, no obligación de cuatro mensajes en renovación o INIT-REBOOT · comprobado: 2026-10-28

Partida: `2b2f1d5bd73977f7807b3e86299be077b22cf26e520c20ae6ac249bb8e490231` · propuesta: `f415161711b5886180df995d9010a5d2e146497bcf855edb84ff5c1640b61a05`

## AI-GSI-B2-T08-019

Decisión: pending_review · acción: revise.

Motivo: Conservar BGP y clave B; cuatro protocolos de routing reales y matiz eBGP/iBGP, evitando describir OSPF como interdominio.

### Antes

¿Qué protocolo se asocia al encaminamiento entre sistemas autónomos?

- A. ARP
- B. BGP **(correcta)**
- C. OSPF como protocolo interdominio
- D. DHCP

Explicación: BGP es interdominio y utiliza políticas y atributos; OSPF es un IGP.

### Propuesta

¿Qué protocolo se asocia al encaminamiento entre sistemas autónomos?

- A. RIP.
- B. BGP. **(correcta)**
- C. OSPF.
- D. IS-IS.

Explicación: BGP se diseñó para intercambio de información de alcance entre sistemas autónomos, con atributos y decisiones de política. Las sesiones eBGP conectan pares de distintos AS; iBGP también distribuye información BGP dentro de un mismo AS. Por eso decir que su finalidad es interdominio no significa que toda sesión BGP sea externa. Los otros protocolos citados son de encaminamiento interior.

- Error A: RIP es un protocolo interior basado en vector de distancias. No desempeña el rol inter-AS de BGP.
- Error C: OSPF es un IGP; sus áreas organizan el encaminamiento dentro del sistema autónomo. No convierten el protocolo en BGP interdominio.
- Error D: IS-IS integrado se utiliza como protocolo interior, con niveles y áreas. Esa jerarquía no es el intercambio de rutas entre AS que pregunta el enunciado.

- [IETF RFC 4271: A Border Gateway Protocol 4 (BGP-4)](https://www.rfc-editor.org/rfc/rfc4271.html) · 1 Introduction; 3 Summary of Operation: inter-AS, peers internos/externos y atributos · versión: Enero de 2006; BGP-4 con actualizaciones posteriores, solo finalidad y distinción eBGP/iBGP; no se afirma selección exclusiva por camino más corto · comprobado: 2026-10-28
- [IETF RFC 2453: RIP Version 2](https://www.rfc-editor.org/rfc/rfc2453.html) · 1 y 1.1: protocolo de encaminamiento interior basado en vector de distancias · versión: STD 56, noviembre de 1998; no recomendación de RIP para un despliegue actual · comprobado: 2026-10-28
- [IETF RFC 2328: OSPF Version 2](https://www.rfc-editor.org/rfc/rfc2328.html) · 1 Introduction: protocolo interno de un sistema autónomo y áreas · versión: STD 54, abril de 1998; solo clasificación de OSPFv2 como IGP · comprobado: 2026-10-28
- [IETF RFC 1195: Use of OSI IS-IS for Routing in TCP/IP and Dual Environments](https://www.rfc-editor.org/rfc/rfc1195.html) · 1 Introduction y 2: IS-IS integrado como protocolo interior y niveles · versión: Diciembre de 1990; niveles/áreas internas no equivalen al rol inter-AS de BGP · comprobado: 2026-10-28

Partida: `be5266d599ed0ff1387652847d7a4639b1c1d9a216657ba0cd575e7b72683aa1` · propuesta: `0224f0327e064af7c1f5a2402dfb97f618358c42925e76add8d59d08cefea4fa`

## AI-GSI-B2-T08-020

Decisión: pending_review · acción: revise.

Motivo: Conservar ausencia de fragmentación en routers y clave B; microcaso de MTU que distingue descarte/aviso de adaptación por el origen.

### Antes

¿Qué ocurre con fragmentación en routers IPv6 en tránsito?

- A. Fragmentan si el paquete supera la MTU del enlace de salida
- B. No fragmentan los paquetes **(correcta)**
- C. Fragmentan después de traducir la cabecera a su formato mínimo
- D. Fragmentan únicamente cuando el siguiente salto es IPv6

Explicación: En IPv6 los routers no fragmentan; conocer la MTU del camino resulta importante.

### Propuesta

Un router IPv6 en tránsito recibe un paquete unicast de 1.500 octetos y debe sacarlo por un enlace con MTU de 1.280. ¿Qué tratamiento corresponde?

- A. Fragmenta el paquete ajustándolo a la MTU de salida.
- B. Descarta y notifica con ICMPv6 Packet Too Big. **(correcta)**
- C. Reenvía el paquete completo ignorando la MTU de salida.
- D. Divide y hace que el siguiente router reensamble el paquete.

Explicación: Un router IPv6 en tránsito no fragmenta. Si el paquete no cabe en la MTU del siguiente enlace, lo descarta y genera Packet Too Big conforme a las reglas y límites de ICMPv6. La información permite al origen adaptar su tamaño al camino; la fragmentación IPv6, si procede, corresponde al origen y el reensamblado al destino. No se garantiza que cada notificación llegue o que no haga falta otra técnica de descubrimiento de MTU.

- Error A: Atribuye al router de tránsito una fragmentación IPv6 que la especificación reserva al origen. No se soluciona creando fragmentos IP en ese salto.
- Error C: El router no puede ignorar la capacidad de tamaño del enlace de salida. El paquete debe descartarse y tratarse según el protocolo.
- Error D: Ni fragmentar en ese router ni reensamblar en el siguiente es el procedimiento IPv6. El reensamblado de fragmentos se realiza en el destino.

- [IETF RFC 8200: Internet Protocol, Version 6 (IPv6) Specification](https://www.rfc-editor.org/rfc/rfc8200.html) · 4.5 Fragment Header: solo origen; 5 Packet Size Issues: MTU y Packet Too Big · versión: STD 86, julio de 2017; routers en tránsito no fragmentan paquetes IPv6 · comprobado: 2026-10-28
- [IETF RFC 4443: Internet Control Message Protocol (ICMPv6) for the Internet Protocol Version 6 (IPv6) Specification](https://www.rfc-editor.org/rfc/rfc4443.html) · 2.4 reglas de mensajes de error y límites; 3.2 Packet Too Big Message · versión: STD 89, marzo de 2006; descarte y notificación sujetos a las reglas de ICMPv6, sin prometer entrega de cada aviso · comprobado: 2026-10-28

Partida: `cc05d9500cb73e117d617d49cf92c374b552a0fa5a184da80c2cc8e3ceb91c48` · propuesta: `e5086ad2eaf2813224eaf5f8a5daf748afede93201f3bd6e008ec6a37f6ec98d`

## AI-GSI-B2-T08-001

Decisión: pending_review · acción: revise.

Motivo: Conservar pares frente a capas adyacentes y clave B; cuatro combinaciones paralelas sin una correcta mucho más detallada.

### Antes

¿Qué diferencia protocolo e interfaz en un modelo por capas?

- A. Interfaz: reglas exclusivamente entre países
- B. Protocolo: reglas entre pares; interfaz: servicios entre capas adyacentes **(correcta)**
- C. Protocolo: solo un conector físico
- D. Ambos significan dirección IP

Explicación: El protocolo rige comunicación entre entidades del mismo nivel; la interfaz delimita servicios entre niveles.

### Propuesta

En un modelo por capas, ¿qué relaciones distinguen protocolo e interfaz de servicio?

- A. Protocolo: capas adyacentes; interfaz: entidades pares.
- B. Protocolo: entidades pares; interfaz: capas adyacentes. **(correcta)**
- C. Protocolo: entidades pares; interfaz: entidades pares.
- D. Protocolo: capas adyacentes; interfaz: capas adyacentes.

Explicación: Un protocolo establece reglas y formatos de cooperación entre entidades pares de un mismo nivel. La interfaz de servicio delimita cómo una capa utiliza capacidades de la adyacente, mediante puntos de acceso al servicio. Es la distinción entre la relación lógica entre pares y el acceso vertical al servicio. No se está usando interfaz como sinónimo de conector físico o dirección de red.

- Error A: Invierte las relaciones: el protocolo coordina pares del nivel y la interfaz descrita permite acceso al servicio adyacente.
- Error C: Solo la primera relación corresponde a pares. La interfaz de servicio no es otro intercambio horizontal entre entidades del mismo nivel.
- Error D: Solo la segunda relación corresponde al acceso entre capas. El protocolo no se define como acceso vertical al servicio inferior.

- [ITU-T X.200 / ISO/IEC 7498-1: Basic Reference Model, The basic model](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I!!PDF-E&lang=e&type=items) · 5.2.1.5 (N)-service; 5.2.1.8 (N)-SAP; 5.2.1.9 (N)-protocol; 5.2.2 layering y cooperación entre pares · versión: Julio de 1994, PDF público de la ficha ITU; relación entre entidades pares y acceso a servicios de capas adyacentes, no un conector físico · comprobado: 2026-10-28

Partida: `ccabfdd2d0fbeed5f49d74302ecd1f52276365ab4783eec1dbf19b18f77cc75f` · propuesta: `bf83b6271db6433edcf6c2044b6a7fe114bbe575f44c51705059219bae8535b8`

## AI-GSI-B2-T08-008

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegro cálculo y alternativas, con clave C; explicar total frente a asignables y tamaño de los prefijos vecinos.

### Antes

¿Cuántas direcciones totales tiene una subred IPv4 /26?

- A. 256
- B. 62
- C. 64 **(correcta)**
- D. 128

Explicación: Quedan seis bits de host: 2^6=64 direcciones totales; en el caso tradicional son 62 asignables.

### Propuesta

¿Cuántas direcciones totales tiene una subred IPv4 /26?

- A. 256
- B. 62
- C. 64 **(correcta)**
- D. 128

Explicación: IPv4 usa 32 bits. Un prefijo /26 deja 6 bits fuera del prefijo y contiene 2⁶ = 64 direcciones totales. La pregunta pide todas las direcciones, por lo que no se restan red y broadcast. Si se pidieran hosts asignables en una subred tradicional /26, el resultado sería 62. Tamaño total y número de hosts son magnitudes distintas.

- Error A: 256 es el total de direcciones de un /24, que deja 8 bits de host. El prefijo /26 es más largo y su bloque es menor.
- Error B: 62 es el resultado tradicional para hosts asignables en /26. Aquí se pide el total, que incluye las direcciones de red y broadcast.
- Error D: 128 corresponde al total de un /25, con 7 bits fuera del prefijo. /26 deja uno menos y contiene la mitad.

- [IETF RFC 4632: Classless Inter-domain Routing (CIDR): The Internet Address Assignment and Aggregation Plan](https://www.rfc-editor.org/rfc/rfc4632.html) · 3.1 IP Addressing y tabla de tamaños de bloques según longitud de prefijo · versión: BCP 122, agosto de 2006; solo aritmética y notación de prefijos, sin trasladar políticas históricas de asignación a recomendaciones actuales · comprobado: 2026-10-28

Partida: `fb9f2009c3c2ffffa7953f1707b404957d25a08c1f856451854c6db90ed88a3e` · propuesta: `51e2ec16f1da17faa60687ffa8a81e792c9a4c3550ae70d2e26c45aa709d27d8`

## AI-GSI-B2-T08-010

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra máscara y opciones, con clave A; completar conversión binaria y errores de prefijos vecinos.

### Antes

¿Qué máscara corresponde a /25?

- A. 255.255.255.128 **(correcta)**
- B. 255.255.255.192
- C. 255.255.255.0
- D. 255.255.255.224

Explicación: Un prefijo /25 deja siete bits de host y utiliza 128 en el último octeto de la máscara.

### Propuesta

¿Qué máscara corresponde a /25?

- A. 255.255.255.128 **(correcta)**
- B. 255.255.255.192
- C. 255.255.255.0
- D. 255.255.255.224

Explicación: La máscara /25 tiene 25 unos seguidos de 7 ceros: tres octetos completos a 255 y un cuarto 10000000₂, que vale 128. Por tanto es 255.255.255.128. Los bits de una máscara de prefijo son contiguos; el último octeto no se elige por el número de equipos sin convertir antes la longitud de prefijo.

- Error B: 192 en el último octeto es 11000000₂: añade dos unos a los primeros 24 y representa /26, no /25.
- Error C: 255.255.255.0 contiene 24 unos. Es /24 y deja 8 bits fuera del prefijo.
- Error D: 224 es 11100000₂: tres unos más en el cuarto octeto. Corresponde a /27 y no a los 25 bits solicitados.

- [IETF RFC 4632: Classless Inter-domain Routing (CIDR): The Internet Address Assignment and Aggregation Plan](https://www.rfc-editor.org/rfc/rfc4632.html) · 3.1 IP Addressing y tabla de tamaños de bloques según longitud de prefijo · versión: BCP 122, agosto de 2006; solo aritmética y notación de prefijos, sin trasladar políticas históricas de asignación a recomendaciones actuales · comprobado: 2026-10-28

Partida: `020857a2bf6a170abbae6df45efbac483362bcff7af47989bf71748dc71fa896` · propuesta: `e5b26e9b547056436cce83d90dd253aea6836a49134687c70b4a762af0c0b6b3`

## MAN-GSI-P18-002

Decisión: pending_review · acción: revise.

Motivo: Conservar metalenguaje SGML y clave D; cuatro responsabilidades próximas de documentos web sin distractores largos o ajenos.

### Antes

¿Qué es SGML?

- A. Una versión moderna de JavaScript orientada a generar de forma dinámica etiquetas HTML y estilos en aplicaciones web interactivas.
- B. Un protocolo de sindicación que distribuye titulares y resúmenes mediante canales actualizados periódicamente por los publicadores.
- C. Un sistema gestor de bases de datos documentales que almacena registros jerárquicos y ejecuta consultas sobre sus elementos.
- D. Un metalenguaje histórico estandarizado para definir lenguajes de marcado. **(correcta)**

Explicación: SGML influyó en HTML y XML y se estudia como antecedente conceptual.

### Propuesta

¿Qué es SGML?

- A. Un vocabulario fijo de elementos para páginas web.
- B. Una notación de reglas visuales para presentar documentos.
- C. Un protocolo de intercambio de documentos en la web.
- D. Un metalenguaje para definir lenguajes de marcado. **(correcta)**

Explicación: SGML, normalizado como ISO 8879, permite definir lenguajes de marcado y sus reglas. Un vocabulario concreto construido conforme a él es una aplicación SGML, no el metalenguaje mismo. HTML 4.01 es un ejemplo histórico del contexto de esa fuente y XML se diseñó como una forma restringida de SGML. No se deduce que el HTML moderno se procese como SGML o que SGML sea un lenguaje de estilos o un protocolo de red.

- Error A: Un vocabulario concreto de elementos describe un lenguaje de marcado específico. SGML proporciona el marco para definirlo, no un conjunto fijo de etiquetas web.
- Error B: Las reglas de presentación corresponden a una hoja de estilo, como CSS. SGML define marcado, no sustituye esas reglas visuales.
- Error C: Un protocolo como HTTP regula intercambios de solicitudes y respuestas. No es un metalenguaje para definir la estructura de los documentos.

- [W3C HTML 4.01: On SGML and HTML](https://www.w3.org/TR/html401/intro/sgmltut.html) · 3.1 Introduction to SGML: sistema para definir lenguajes de marcado y aplicaciones SGML · versión: HTML 4.01, 24-12-1999; solo descripción histórica de SGML. No se traslada el procesamiento de HTML 4.01 a HTML moderno · comprobado: 2026-10-28
- [W3C: Extensible Markup Language (XML) 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1 Introduction: perfil/restricción de SGML; 1.1 objetivos; 1.2 fatal error; 2.1 Well-Formed XML Documents y 3 Logical Structures · versión: W3C Recommendation, 26-11-2008; reglas de XML 1.0 y procesamiento normal tras error fatal, sin afirmar identidad de HTML y XML · comprobado: 2026-10-28
- [W3C CSS 2.1: Introduction](https://www.w3.org/TR/CSS2/intro.html) · 2.1 A brief CSS 2.1 tutorial for HTML y 2.2: reglas de presentación y relación con lenguajes de marcado · versión: CSS 2.1, solo identidad de las hojas de estilo; no catálogo de funciones CSS modernas · comprobado: 2026-10-28
- [IETF RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · 1 y 3: protocolo de aplicación, solicitudes y respuestas, distinto de un lenguaje de marcado · versión: STD 97, junio de 2022; no se clasifica HTTP como capa de transporte OSI · comprobado: 2026-10-28

Partida: `e0bfd80125f361724943e5427801fb29f0d6f7c24d239c585b8808ff73e886a3` · propuesta: `dbd0f1629f749dfcaff1d20b384a2f3fddafc22898a117bd92f6cd7e840747ca`

## MAN-GSI-P18-003

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente la relación y las cuatro alternativas bien comparables, con clave C; completar objetivos y alcance de XML 1.0.

### Antes

¿Qué relación conceptual existe entre SGML y XML?

- A. SGML se diseñó como un perfil simplificado de XML después de su adopción en la web para añadir reglas más estrictas.
- B. XML es un superconjunto de SGML que incorpora toda su flexibilidad y permite cualquier construcción válida del estándar original.
- C. XML fue diseñado como una forma restringida/perfil de SGML orientada a facilidad de uso e interoperabilidad web. **(correcta)**
- D. No comparten origen ni conceptos de marcado; la semejanza de etiquetas es únicamente visual y no existe relación técnica.

Explicación: La recomendación XML 1.0 se presenta como subconjunto/restricción de SGML.

### Propuesta

¿Qué relación conceptual existe entre SGML y XML?

- A. SGML se diseñó como un perfil simplificado de XML después de su adopción en la web para añadir reglas más estrictas.
- B. XML es un superconjunto de SGML que incorpora toda su flexibilidad y permite cualquier construcción válida del estándar original.
- C. XML fue diseñado como una forma restringida/perfil de SGML orientada a facilidad de uso e interoperabilidad web. **(correcta)**
- D. No comparten origen ni conceptos de marcado; la semejanza de etiquetas es únicamente visual y no existe relación técnica.

Explicación: XML 1.0 se define en su recomendación como un perfil o forma restringida de SGML. Sus objetivos incluyen uso sencillo en Internet, compatibilidad con SGML y facilidad de procesamiento. No se creó SGML a partir de XML ni se trasladó toda la flexibilidad de SGML sin restricciones. La relación histórica y técnica no significa que todos los detalles de cualquier versión o parser sean intercambiables.

- Error A: Invierte la relación temporal y de diseño: SGML precede a XML. La recomendación presenta XML como perfil o restricción de SGML.
- Error B: El objetivo es restringir la flexibilidad, no admitir toda construcción de SGML. Llamarlo superconjunto contradice esa relación.
- Error D: Comparten origen técnico y conceptos de marcado. La propia especificación XML declara su relación con SGML, más allá de una semejanza visual.

- [W3C: Extensible Markup Language (XML) 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1 Introduction: perfil/restricción de SGML; 1.1 objetivos; 1.2 fatal error; 2.1 Well-Formed XML Documents y 3 Logical Structures · versión: W3C Recommendation, 26-11-2008; reglas de XML 1.0 y procesamiento normal tras error fatal, sin afirmar identidad de HTML y XML · comprobado: 2026-10-28
- [W3C HTML 4.01: On SGML and HTML](https://www.w3.org/TR/html401/intro/sgmltut.html) · 3.1 Introduction to SGML: sistema para definir lenguajes de marcado y aplicaciones SGML · versión: HTML 4.01, 24-12-1999; solo descripción histórica de SGML. No se traslada el procesamiento de HTML 4.01 a HTML moderno · comprobado: 2026-10-28

Partida: `884611fd78c56da2025fa9c5b244d89cbdd5fb3c6d1fa0cc3d7dd5aa2e217af6` · propuesta: `dad8b7d04f8a95a9a752f4c6c03a310b6efefe6292778022a8e130363817c6de`

## MAN-GSI-P18-004

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y alternativas ya defendibles, con clave C; precisar las dos sintaxis de HTML y distinguir marcado, HTTP y scripts.

### Antes

¿Qué describe mejor HTML moderno?

- A. Una sintaxis XML obligatoria con etiquetas siempre cerradas, sensibilidad a mayúsculas y documento estrictamente bien formado.
- B. El protocolo de transporte de aplicaciones web que define métodos, cabeceras, respuestas y códigos de estado.
- C. Un lenguaje de marcado para estructura y semántica de documentos y aplicaciones web. **(correcta)**
- D. Un lenguaje de programación que ejecuta lógica, manipula APIs y responde a eventos dentro o fuera del navegador.

Explicación: HTML tiene su propia sintaxis; XHTML es la variante basada en XML.

### Propuesta

¿Qué describe mejor HTML moderno?

- A. Una sintaxis XML obligatoria con etiquetas siempre cerradas, sensibilidad a mayúsculas y documento estrictamente bien formado.
- B. El protocolo de transporte de aplicaciones web que define métodos, cabeceras, respuestas y códigos de estado.
- C. Un lenguaje de marcado para estructura y semántica de documentos y aplicaciones web. **(correcta)**
- D. Un lenguaje de programación que ejecuta lógica, manipula APIs y responde a eventos dentro o fuera del navegador.

Explicación: HTML define estructura y semántica de documentos y aplicaciones web mediante elementos y atributos. No es HTTP, que regula intercambios, ni el lenguaje que ejecuta por sí mismo lógica de scripts. El estándar distingue una sintaxis HTML y una serialización XML; la primera no exige todas las reglas de XML. Que un documento incluya scripts o estilos no cambia la función del lenguaje de marcado.

- Error A: La sintaxis HTML no obliga a que todo documento sea XML bien formado. También existe serialización XML, pero no es la única sintaxis permitida.
- Error B: Métodos, cabeceras y códigos de respuesta pertenecen a HTTP. HTML es el contenido de marcado que puede intercambiarse mediante ese protocolo.
- Error D: Ejecutar lógica y atender eventos corresponde a un lenguaje de scripts como JavaScript. HTML puede integrar scripts sin convertirse en ese lenguaje.

- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · 1.8 HTML vs XML syntax: lenguaje, dos sintaxis concretas y selección de análisis por tipo MIME · versión: Living Standard consultado el 28-10-2026; no se infiere que todo HTML sea XML o que un doctype elija el parser · comprobado: 2026-10-28
- [WHATWG HTML: The HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html) · 13.1.1 The DOCTYPE; 13.1.2 Elements y Void elements, incluido br · versión: Living Standard consultado el 28-10-2026; se distingue sintaxis HTML de la serialización XML · comprobado: 2026-10-28
- [IETF RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · 1 y 3: protocolo de aplicación, solicitudes y respuestas, distinto de un lenguaje de marcado · versión: STD 97, junio de 2022; no se clasifica HTTP como capa de transporte OSI · comprobado: 2026-10-28

Partida: `418b6bde471a39a8372c7a5d409b7a179e66d083d71043cc7198678385892128` · propuesta: `7bf6b449cff762dcd3ca61aac9475b3ad7badbc49dedd4499409c78e4156923d`

## MAN-GSI-P18-005

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción HTML/XML y clave B; microcaso de br sin cierre que evalúa procesamiento, no solo una etiqueta de clasificación.

### Antes

¿Qué afirmación es correcta sobre HTML y XML?

- A. HTML moderno es un subconjunto estricto de XML y todo documento válido debe estar bien formado conforme a sus reglas.
- B. HTML moderno no debe describirse simplemente como “XML”; son sintaxis y modelos de procesamiento distintos. **(correcta)**
- C. XML es el lenguaje de estilos utilizado para presentar elementos HTML, con la misma función que las hojas CSS.
- D. Ambos utilizan obligatoriamente el mismo parser y producen idénticos errores, DOM y recuperación ante sintaxis incorrecta.

Explicación: WHATWG distingue explícitamente la sintaxis HTML de la sintaxis XML.

### Propuesta

El fragmento &lt;p&gt;Uno&lt;br&gt;Dos&lt;/p&gt; se admite al analizarlo como HTML, pero no está bien formado como XML. ¿Qué conclusión lo explica?

- A. HTML exige cierre XML para todos sus elementos vacíos.
- B. Las reglas de análisis HTML y XML son distintas. **(correcta)**
- C. Un error XML se recupera con las reglas del parser HTML.
- D. Cambiar el doctype convierte la sintaxis HTML en XML.

Explicación: En sintaxis HTML, br es un elemento vacío y no necesita una etiqueta de cierre. El mismo texto interpretado como XML exige respetar su buena formación; un br abierto sin cerrar rompe esa condición. El tipo MIME, por ejemplo text/html frente a application/xhtml+xml, determina la vía de procesamiento en un navegador. El doctype no convierte el parser HTML en XML. Recuperación de errores HTML y tratamiento de error fatal XML son contratos diferentes.

- Error A: Los elementos vacíos de la sintaxis HTML, como br, no siguen una obligación general de cierre XML. Confunde las dos formas de serialización.
- Error C: Un procesador XML debe comunicar el error fatal y no continuar el procesamiento normal como si fuera HTML. No hereda su recuperación de árbol.
- Error D: El doctype afecta a compatibilidad dentro del análisis HTML. La elección entre HTML y XML depende del tipo de contenido y su contexto de procesamiento.

- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · 1.8 HTML vs XML syntax: lenguaje, dos sintaxis concretas y selección de análisis por tipo MIME · versión: Living Standard consultado el 28-10-2026; no se infiere que todo HTML sea XML o que un doctype elija el parser · comprobado: 2026-10-28
- [WHATWG HTML: The HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html) · 13.1.1 The DOCTYPE; 13.1.2 Elements y Void elements, incluido br · versión: Living Standard consultado el 28-10-2026; se distingue sintaxis HTML de la serialización XML · comprobado: 2026-10-28
- [WHATWG HTML: Parsing HTML documents](https://html.spec.whatwg.org/multipage/parsing.html) · 13.2 Parsing HTML documents; 13.2.6.4.1 The initial insertion mode: DOCTYPE y quirks/no-quirks · versión: Living Standard consultado el 28-10-2026; recuperación de errores definida para HTML, no un validador XSD o regla aplicable al parser XML · comprobado: 2026-10-28
- [W3C: Extensible Markup Language (XML) 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) · 1 Introduction: perfil/restricción de SGML; 1.1 objetivos; 1.2 fatal error; 2.1 Well-Formed XML Documents y 3 Logical Structures · versión: W3C Recommendation, 26-11-2008; reglas de XML 1.0 y procesamiento normal tras error fatal, sin afirmar identidad de HTML y XML · comprobado: 2026-10-28

Partida: `58e574cfcaf6b271b3641bca7793470c527b100cb535f7af51d4a67b95017e1b` · propuesta: `fd6bee37c9add60aec9c8a652e0f8e0c20e40c75b483eca465c52794c4ebe730`

## MAN-GSI-P18-006

Decisión: pending_review · acción: revise.

Motivo: Conservar función de doctype y clave D; acotar text/html y separar compatibilidad de esquema, namespace y codificación.

### Antes

¿Cuál es la función principal de &lt;\!doctype html&gt; en HTML moderno?

- A. Declarar el esquema XSD que valida elementos, atributos, tipos y cardinalidades permitidos en todo documento HTML.
- B. Asociar el documento a un namespace XML obligatorio que determina la identidad de cada elemento y atributo HTML.
- C. Establecer la codificación de caracteres utilizada para interpretar los bytes, sustituyendo a la declaración \`meta charset\`.
- D. Indicar el modo de documento esperado y favorecer el procesamiento estándar del navegador. **(correcta)**

Explicación: El doctype moderno es simple y evita modos de compatibilidad heredados.

### Propuesta

Una página se sirve como text/html. ¿Para qué se coloca &lt;\!doctype html&gt; al comienzo del documento?

- A. Validar el documento contra un esquema XSD incluido.
- B. Seleccionar el espacio de nombres XML de sus elementos.
- C. Fijar la codificación de bytes como sustituto de meta charset.
- D. Evitar el modo quirks heredado durante el análisis HTML. **(correcta)**

Explicación: En un documento text/html, el doctype moderno colocado correctamente es el preámbulo que evita el modo quirks heredado y favorece el modo de estándares. No referencia una DTD o un XSD externo, no establece el namespace y no sustituye la determinación de codificación. Tampoco valida que el resto del documento sea conforme: modo de compatibilidad y validez del marcado son propiedades distintas.

- Error A: El doctype corto de HTML no declara un esquema XSD ni hace validar sus reglas. No se confunde con mecanismos de validación XML.
- Error B: Los espacios de nombres no se seleccionan por ese preámbulo. La sintaxis y las reglas del parser determinan el tratamiento de los elementos.
- Error C: La codificación se determina por los mecanismos aplicables de transporte y documento. El doctype no reemplaza meta charset ni el tratamiento de bytes.

- [WHATWG HTML: The HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html) · 13.1.1 The DOCTYPE; 13.1.2 Elements y Void elements, incluido br · versión: Living Standard consultado el 28-10-2026; se distingue sintaxis HTML de la serialización XML · comprobado: 2026-10-28
- [WHATWG HTML: Parsing HTML documents](https://html.spec.whatwg.org/multipage/parsing.html) · 13.2 Parsing HTML documents; 13.2.6.4.1 The initial insertion mode: DOCTYPE y quirks/no-quirks · versión: Living Standard consultado el 28-10-2026; recuperación de errores definida para HTML, no un validador XSD o regla aplicable al parser XML · comprobado: 2026-10-28
- [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) · 1.8 HTML vs XML syntax: lenguaje, dos sintaxis concretas y selección de análisis por tipo MIME · versión: Living Standard consultado el 28-10-2026; no se infiere que todo HTML sea XML o que un doctype elija el parser · comprobado: 2026-10-28

Partida: `f361c7b105eb48f51d0cc9ef7f53b27ed1e0a4b6b3add438636b0bd1232d1600` · propuesta: `5b0be3d316c5154a0e33b86c6c467a729156c7633650771988c6881cb7057674`

## MAN-GSI-P18-007

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegro enunciado y opciones, con clave D; aclarar metadatos frente a contenido y sus posibles efectos visibles.

### Antes

¿Qué elemento HTML contiene normalmente metadatos y recursos no visibles como contenido principal?

- A. &lt;body&gt;.
- B. &lt;main&gt;.
- C. &lt;footer&gt;.
- D. &lt;head&gt;. **(correcta)**

Explicación: head contiene título, metadatos y referencias; body contiene el contenido representado.

### Propuesta

¿Qué elemento HTML contiene normalmente metadatos y recursos no visibles como contenido principal?

- A. &lt;body&gt;.
- B. &lt;main&gt;.
- C. &lt;footer&gt;.
- D. &lt;head&gt;. **(correcta)**

Explicación: Head representa una colección de metadatos del documento, como título, enlaces a recursos y declaraciones meta. Body contiene el contenido del documento representado en su contexto de página. No ser contenido principal no significa no tener efectos visibles: el título puede mostrarse en la pestaña y una hoja de estilos enlazada cambia la presentación. La elección se basa en semántica, no en ocultar visualmente cualquier elemento.

- Error A: Body contiene el contenido del documento. Puede contener sus regiones principales, pero no es el contenedor semántico de metadatos de cabecera preguntado.
- Error B: Main identifica el contenido dominante del documento. No sustituye a head como colección de metadatos.
- Error C: Footer representa un pie de su sección o documento. Puede tener información relacionada, pero no es la cabecera de metadatos de la página.

- [WHATWG HTML: The document element and document metadata](https://html.spec.whatwg.org/multipage/semantics.html) · 4.2.1 The head element; title, link y meta: colección de metadatos del documento · versión: Living Standard consultado el 28-10-2026; que no sean contenido principal no significa que sus metadatos o recursos no produzcan efectos visibles · comprobado: 2026-10-28
- [WHATWG HTML: Sections](https://html.spec.whatwg.org/multipage/sections.html) · The body element; The article element; The nav element; The header element; The footer element · versión: Living Standard consultado el 28-10-2026; responsabilidades de cuerpo y regiones semánticas, sin basarse en estilo visual · comprobado: 2026-10-28
- [WHATWG HTML: Grouping content](https://html.spec.whatwg.org/multipage/grouping-content.html) · The main element: contenido dominante, contenido específico del documento y máximo de un main sin hidden · versión: Living Standard consultado el 28-10-2026; se distinguen contenido principal, contenedor de artículo y posibilidad de main ocultos · comprobado: 2026-10-28

Partida: `746a714586fedd7989f8c0b55a1871130aa2f743b15292cb246b077d0cfa2095` · propuesta: `36a91eb45fac35497dc1cc1d0c89f7fe5930b4057f0fd540326abd52c4f4da44`

## MAN-GSI-P18-008

Decisión: pending_review · acción: revise.

Motivo: Conservar semántica de main y clave B; caso de cabecera/menú/artículo con cuatro elementos plausibles y matiz de main ocultos.

### Antes

¿Qué elemento HTML representa el contenido principal único de la página?

- A. &lt;meta&gt;.
- B. &lt;main&gt;. **(correcta)**
- C. &lt;link&gt;.
- D. &lt;script&gt; exclusivamente.

Explicación: main ayuda a expresar semántica de la región principal del documento.

### Propuesta

Una página tiene cabecera y menú repetidos, y un artículo específico de esa URL. ¿Qué elemento identifica la región de contenido principal del documento?

- A. &lt;header&gt;.
- B. &lt;main&gt;. **(correcta)**
- C. &lt;nav&gt;.
- D. &lt;article&gt;.

Explicación: Main representa el contenido dominante del documento, específico de esta página frente a cabeceras, navegación u otros elementos repetidos. Un artículo independiente puede estar dentro de main, pero article expresa otra función. No debe haber más de un main sin el atributo hidden; pueden existir varios main ocultos para gestionar vistas. La semántica no depende de que el bloque se dibuje en el centro o tenga un estilo concreto.

- Error A: Header agrupa contenido introductorio o ayudas de navegación de su ámbito. La cabecera repetida no es el contenido dominante específico que se quiere identificar.
- Error C: Nav marca un bloque de navegación. No denomina al contenido principal situado después del menú.
- Error D: Article identifica contenido autónomo o reutilizable. Puede ser el artículo de esta página dentro de main, pero no reemplaza la función de región principal del documento.

- [WHATWG HTML: Grouping content](https://html.spec.whatwg.org/multipage/grouping-content.html) · The main element: contenido dominante, contenido específico del documento y máximo de un main sin hidden · versión: Living Standard consultado el 28-10-2026; se distinguen contenido principal, contenedor de artículo y posibilidad de main ocultos · comprobado: 2026-10-28
- [WHATWG HTML: Sections](https://html.spec.whatwg.org/multipage/sections.html) · The body element; The article element; The nav element; The header element; The footer element · versión: Living Standard consultado el 28-10-2026; responsabilidades de cuerpo y regiones semánticas, sin basarse en estilo visual · comprobado: 2026-10-28

Partida: `f33655aa01fc3e11f94edeef3984438cf74b8dfd5bbbdb9f3776d142eb5f60d7` · propuesta: `2e554b9da52840411bea3bea9d62cb3782f29e2dd52d23fad98828dbd2eb1ba1`
