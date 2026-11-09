# GSI-EDITORIAL-076 — revisión propuesta

Preparado: 2026-11-03. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `75c5d9524abe6c60533b816fbb0d77de025eed695b89c0aa58f1b8ca00d5e712`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T08-002

Decisión: pending_review · acción: revise.

Motivo: Conservar contraste de capas y clave B; evitar MAC como identidad absoluta y comparar funciones próximas.

### Antes

¿Qué diferencia MAC e IP en la trama y la pila?

- A. IP solo existe en capa física
- B. MAC identifica en enlace; IP pertenece a red **(correcta)**
- C. MAC identifica una sesión jurídica
- D. MAC e IP son siempre la misma dirección

Explicación: Son identificadores de niveles distintos de comunicación.

### Propuesta

¿Qué diferencia el papel de las direcciones MAC e IP al enviar un paquete por Ethernet?

- A. MAC pertenece a red; IP identifica interfaces en enlace.
- B. MAC identifica en enlace; IP proporciona direccionamiento de red. **(correcta)**
- C. MAC identifica procesos; IP selecciona puertos de transporte.
- D. MAC identifica el destino remoto; IP el siguiente salto local.

Explicación: MAC e IP cumplen funciones de capas distintas: enlace Ethernet y red IP. En una ruta con routers, la trama se dirige al siguiente salto del enlace, mientras el paquete conserva su destino IP salvo mecanismos que lo modifiquen. Una MAC no demuestra identidad del usuario ni tiene que ser inmutable.

- Error A: Invierte las funciones de enlace y red.
- Error C: La selección de procesos mediante puertos corresponde al transporte, no a la función de MAC o IP.
- Error D: Invierte el alcance típico: la MAC usada en ese enlace corresponde al siguiente salto, no necesariamente al equipo remoto.

- [IETF: RFC 1122, Requirements for Internet Hosts](https://www.rfc-editor.org/rfc/rfc1122.html) · §1.1.3 Internet Protocol Suite; §2.3.3 Ethernet and IEEE 802 Encapsulation; §2.4 Link/Internet Layer Interface · versión: RFC 1122, octubre1989, HTML comprobado 03-11-2026. Se usa separación enlace/IP y traducción de direcciones IPv4; no se extrapolan sus valores históricos de MTU, framing o ARP a IPv6. · comprobado: 2026-11-03
- [Cisco: Configure MAC](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/cdp-lldp-mac-udld/cdp-lldp-mac-udld-configuration-guide/c-configure-mac.html) · MAC Address Table Management: MAC address learning y Frame forwarding; MAC address table creation · versión: Guía HTML comprobada 03-11-2026. Historial menciona IOS XE26.2.1; se usa aprendizaje origen/puerto/VLAN sin imponer versión o límites de tabla. No se asume MAC siempre universal, fija o prueba de identidad. · comprobado: 2026-11-03

Partida: `71353eb6625408a163e2607d62a33b27536984bb11c6e089733855baf52476cb` · propuesta: `7d118b08fbd765964d4c8f93a8361f30aa549184c1a9f6c3e024e3389dbdab14`

## AI-GSI-B4-T08-003

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y clave B; cuatro mecanismos LAN relacionados y alcance full-duplex bien establecido.

### Antes

En Ethernet conmutada full-duplex, ¿qué papel tiene CSMA/CD?

- A. Detecta colisiones normales en cada transmisión full-duplex
- B. Queda como concepto asociado al medio compartido o half-duplex **(correcta)**
- C. Es obligatorio para routing IP
- D. Sustituye a STP

Explicación: La conmutación full-duplex evita las colisiones propias del medio compartido.

### Propuesta

En Ethernet conmutada full-duplex, ¿qué papel tiene CSMA/CD?

- A. Arbitra el acceso de las transmisiones simultáneas del enlace.
- B. Se asocia al funcionamiento compartido o half-duplex anterior. **(correcta)**
- C. Selecciona el puerto de salida según la dirección MAC destino.
- D. Evita bucles al bloquear los caminos redundantes de la VLAN.

Explicación: En un enlace Ethernet full-duplex correctamente establecido no se utiliza CSMA/CD: ambos extremos pueden transmitir simultáneamente. La detección y recuperación de colisiones pertenece al funcionamiento half-duplex de Ethernet compartida. No debe confundirse una colisión con congestión, errores físicos o un desajuste de dúplex.

- Error A: La operación full-duplex no necesita arbitraje del acceso al medio mediante CSMA/CD.
- Error C: Seleccionar salida mediante MAC corresponde a conmutación, no al control de acceso CSMA/CD.
- Error D: Controlar bucles de la topología es función de spanning tree, distinta de tratar colisiones.

- [Cisco: Troubleshooting Ethernet](https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1904.html) · Ethernet Operations: CSMA/CD en half-duplex y ausencia de uso en full-duplex; Collision Domains · versión: Guía histórica HTML comprobada 03-11-2026. La relación de colisiones es conceptual; no se presentan velocidades, distancias o recomendaciones antiguas como límites actuales. · comprobado: 2026-11-03

Partida: `f0176bc7e7f8891e9b474a4f072761a9416e9f9e60872acd4aa674c094820865` · propuesta: `5da7c1af2af58be5f632434f19dc53fb1bd7bbb27d473bcac8c12e861bd3f30e`

## AI-GSI-B4-T08-004

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave D: cuatro equipos comparables. Añadir explicación física y distinción full-duplex.

### Antes

¿Qué equipo no separa dominios de colisión entre sus puertos?

- A. Router
- B. Switch
- C. Switch multicapa
- D. Hub **(correcta)**

Explicación: El hub repite señales; el switch separa colisiones por puerto.

### Propuesta

¿Qué equipo no separa dominios de colisión entre sus puertos?

- A. Router
- B. Switch
- C. Switch multicapa
- D. Hub **(correcta)**

Explicación: El hub es un repetidor de capa física: propaga señales entre sus puertos y mantiene un medio compartido. Un switch o bridge separa los segmentos al conmutar tramas; un router también delimita enlaces. En enlaces full-duplex no se producen las colisiones del Ethernet compartido, aunque siga siendo útil distinguir los equipos.

- Error A: El router delimita enlaces al reenviar paquetes entre interfaces, en lugar de repetir señales en un medio compartido.
- Error B: El switch separa segmentos por puerto mediante conmutación; no se comporta como un repetidor multipuerto.
- Error C: La capacidad multicapa añade funciones de red al switch, sin convertir sus puertos en un medio físico compartido.

- [Cisco: Troubleshoot LAN Switching Environments](https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/12006-chapter22.html) · LAN Switching Introduction: Hubs and Switches; Transparent Bridging, aprendizaje y bucles de tramas inundadas · versión: HTML comprobado 03-11-2026. Repetidor físico frente a conmutación y circulación de tramas; ejemplos de equipos, enlaces y comandos históricos no se trasladan al proyecto. · comprobado: 2026-11-03
- [Cisco: Troubleshooting Ethernet](https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1904.html) · Ethernet Operations: CSMA/CD en half-duplex y ausencia de uso en full-duplex; Collision Domains · versión: Guía histórica HTML comprobada 03-11-2026. La relación de colisiones es conceptual; no se presentan velocidades, distancias o recomendaciones antiguas como límites actuales. · comprobado: 2026-11-03

Partida: `c0c96d5b4a0c34205a4e7deb04ddd2cb6e974e1a688f77f158252f2097860ac3` · propuesta: `b754d1f1c4babc2d49bd5db2d2d633f6dcb9973a5715f043418e4aef86e235e6`

## AI-GSI-B4-T08-005

Decisión: pending_review · acción: revise.

Motivo: Conservar función L3 y clave A; contrastar forwarding, repetición y agregación, sin distractores ajenos.

### Antes

¿Qué función permite comunicar subredes y separar broadcast?

- A. Routing de capa 3 **(correcta)**
- B. Un hub pasivo
- C. Amplificación eléctrica exclusivamente
- D. Repetición de capa 1

Explicación: Un router o switch L3 encamina entre redes.

### Propuesta

¿Qué función comunica subredes IP distintas sin extender entre ellas el broadcast Ethernet?

- A. Encaminar paquetes entre interfaces de distintas subredes. **(correcta)**
- B. Conmutar tramas por sus MAC dentro de una misma VLAN.
- C. Repetir señales entre los puertos de un medio compartido.
- D. Agregar enlaces físicos compatibles en un canal lógico.

Explicación: El routing de capa 3 reenvía paquetes entre subredes mediante sus interfaces y tabla de rutas. Delimita los dominios de broadcast de enlace: un broadcast Ethernet no se propaga entre ellos como una trama conmutada. Puede realizarlo un router o un switch con función L3; comunicar no equivale a autorizar todo tráfico.

- Error B: Conmutar dentro de una VLAN conserva el mismo dominio lógico de enlace y no resuelve por sí solo el encaminamiento entre subredes.
- Error C: Un repetidor extiende el medio físico; no toma decisiones de routing o separa sus dominios de broadcast.
- Error D: La agregación aporta un enlace lógico con varios miembros, sin sustituir las decisiones entre subredes.

- [Cisco: Configure Inter-VLAN Routing with Catalyst Switches](https://www.cisco.com/c/en/us/support/docs/lan-switching/inter-vlan-routing/41260-189.html) · Background Information: comunicación entre VLAN mediante dispositivo L3; Configure, SVI y routing · versión: Ejemplo IOS XE16.12.7/IOS03.09.00E, HTML comprobado 03-11-2026. Se usa necesidad de routing entre subredes. Se excluye la frase imprecisa que llama collision domains a VLAN: se separan dominios de broadcast. Sin ejecutar configuración. · comprobado: 2026-11-03

Partida: `bbf8a7d33eaeff482550b8201940f05ed90599eb451a35db11b6bb4a77d81a24` · propuesta: `3db6049278eb32386d9ce507270c6d3b3af5a2d3ab7f7b121c5eaf3b75e14072`

## AI-GSI-B4-T08-006

Decisión: pending_review · acción: revise.

Motivo: Conservar aprendizaje por origen y clave C; microcaso y cuatro pares dirección/puerto con errores cercanos.

### Antes

¿Qué dirección observa el switch para aprender una asociación de puerto?

- A. Puerto TCP de aplicación
- B. MAC destino exclusivamente
- C. MAC origen **(correcta)**
- D. IP pública del servidor DNS

Explicación: El aprendizaje usa dirección origen y puerto de entrada.

### Propuesta

Un switch recibe una trama válida por un puerto en estado de aprendizaje. ¿Qué asociación aprende de esa recepción en su VLAN?

- A. La MAC destino, asociada al puerto de entrada.
- B. La MAC origen, asociada al puerto de salida.
- C. La MAC origen, asociada al puerto de entrada. **(correcta)**
- D. La MAC destino, asociada al puerto de salida.

Explicación: El aprendizaje dinámico tradicional toma la MAC origen de la trama recibida y la relaciona con su puerto de entrada y VLAN. Esa asociación permitirá reenviar futuras tramas dirigidas a ese origen. La búsqueda de la MAC destino decide el reenvío, pero no es el dato que se aprende de esa recepción.

- Error A: El destino no prueba que ese equipo esté detrás del puerto por el que llegó la trama.
- Error B: Reconoce la dirección correcta, pero invierte el puerto observado: se aprende dónde entró la trama.
- Error D: Combina la búsqueda de destino con el resultado de forwarding, sin describir el aprendizaje por recepción.

- [Cisco: Configure MAC](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/cdp-lldp-mac-udld/cdp-lldp-mac-udld-configuration-guide/c-configure-mac.html) · MAC Address Table Management: MAC address learning y Frame forwarding; MAC address table creation · versión: Guía HTML comprobada 03-11-2026. Historial menciona IOS XE26.2.1; se usa aprendizaje origen/puerto/VLAN sin imponer versión o límites de tabla. No se asume MAC siempre universal, fija o prueba de identidad. · comprobado: 2026-11-03

Partida: `f84fae0df4703c76f8564435f37eb72a54ca3e06a4934df61c31f1361a3fe70a` · propuesta: `1134d1cdc75a818052a1fdeb0afa7aa5d734e31c33da630acdb9fd5841a1b180`

## AI-GSI-B4-T08-007

Decisión: pending_review · acción: revise.

Motivo: Conservar flooding por VLAN y clave A; explicitar unicast desconocido, forwarding, entrada y ausencia de supresión.

### Antes

El destino MAC es desconocido para un switch. ¿Qué hace normalmente?

- A. Inunda dentro de la VLAN correspondiente **(correcta)**
- B. Envía necesariamente a todas las VLAN
- C. Descarta siempre sin aprender
- D. Consulta obligatoriamente BGP

Explicación: El flooding queda limitado al dominio lógico de enlace.

### Propuesta

Llega por VLAN 10 una trama unicast cuya MAC destino no está aprendida. Con flooding permitido, ¿por dónde la reenvía el switch?

- A. Por los demás puertos habilitados para reenvío en VLAN 10. **(correcta)**
- B. Por todos los puertos habilitados, también los de VLAN 20.
- C. Por el puerto de entrada hasta recibir respuesta del destino.
- D. Por el puerto cuya MAC propia coincida con la MAC origen.

Explicación: Si el destino unicast no figura en la tabla de esa VLAN y se permite flooding, el switch replica la trama hacia los demás puertos de reenvío de VLAN 10. Excluye la entrada y no cruza a VLAN 20. Políticas de seguridad o supresión pueden cambiar este comportamiento; desconocido no significa broadcast de destino.

- Error B: La inundación ordinaria se mantiene en la VLAN de recepción; no se extiende a otro dominio de broadcast.
- Error C: Reenviar por la entrada no ayuda a alcanzar un destino desconocido y está excluido de la inundación normal.
- Error D: La MAC propia del switch no sirve para inferir dónde está el destino desconocido a partir de la MAC origen.

- [Cisco: Unicast Flooding in Switched Campus Networks](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6000-series-switches/23563-143.html?referring_site=smartnavRD) · Problem Definition; Causes of Flooding: puertos forwarding de la VLAN, excepto entrada; controles de flooding · versión: Actualización indicada08-02-2016, HTML comprobado 03-11-2026. Caso con flooding ordinario permitido; no se universaliza a puertos bloqueados, políticas de seguridad, EVPN o supresión configurada. · comprobado: 2026-11-03

Partida: `bc706470444aa6f536bf98635435ede71e5c3fce7c3d41d330417941905bc792` · propuesta: `a364e315b3bb046a2e5d25976c4d4255067f908950f8b8ae46b90fe9de3c5ccc`

## AI-GSI-B4-T08-008

Decisión: pending_review · acción: revise.

Motivo: Conservar bucles/tormentas/aprendizaje y clave C; cuatro consecuencias plausibles con mecanismos diferenciados.

### Antes

¿Qué efecto tienen bucles L2 sin control?

- A. Reducción automática de broadcast
- B. Aumento garantizado de capacidad útil
- C. Tormentas y aprendizaje MAC inestable **(correcta)**
- D. Cifrado del tráfico

Explicación: Los bucles pueden replicar tramas y desestabilizar tablas.

### Propuesta

¿Qué efecto tienen bucles L2 sin control?

- A. Descartes por colisiones del medio en los enlaces full-duplex.
- B. Bloqueo de puertos al agotarse el TTL de las tramas de enlace.
- C. Replicación de tramas y cambios inestables de aprendizaje MAC. **(correcta)**
- D. Creación de rutas IP alternativas mediante las tablas de enlace.

Explicación: Un bucle de reenvío L2 puede recircular y multiplicar tramas inundadas. La misma MAC origen puede reaparecer por diferentes puertos y desestabilizar el aprendizaje. El resultado puede saturar enlaces y equipos; Ethernet no dispone del TTL de IP para detener esa circulación. No toda fluctuación de MAC demuestra por sí sola un bucle.

- Error A: Un bucle puede congestionar enlaces full-duplex, pero no crea las colisiones propias de un medio half-duplex compartido.
- Error B: Las tramas Ethernet no tienen un TTL de enlace que agote el bucle y bloquee automáticamente sus puertos.
- Error D: La circulación de tramas no calcula rutas IP ni convierte la tabla MAC en una tabla de routing.

- [Cisco: Troubleshoot LAN Switching Environments](https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/12006-chapter22.html) · LAN Switching Introduction: Hubs and Switches; Transparent Bridging, aprendizaje y bucles de tramas inundadas · versión: HTML comprobado 03-11-2026. Repetidor físico frente a conmutación y circulación de tramas; ejemplos de equipos, enlaces y comandos históricos no se trasladan al proyecto. · comprobado: 2026-11-03
- [Cisco: Configure MAC](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/cdp-lldp-mac-udld/cdp-lldp-mac-udld-configuration-guide/c-configure-mac.html) · MAC Address Table Management: MAC address learning y Frame forwarding; MAC address table creation · versión: Guía HTML comprobada 03-11-2026. Historial menciona IOS XE26.2.1; se usa aprendizaje origen/puerto/VLAN sin imponer versión o límites de tabla. No se asume MAC siempre universal, fija o prueba de identidad. · comprobado: 2026-11-03

Partida: `232e782b21c9605478d1453d70c4fb92aa006988c250d445e5cb7da2d4aa6797` · propuesta: `25e447ec4e0659bcfe1b4b57814d911c88496f9b9f241e6c6dfbb16d5027d58f`

## AI-GSI-B4-T08-009

Decisión: pending_review · acción: revise.

Motivo: Conservar familia802.1Q y clave D; cuatro estándares de la familia802.1, sin confundir tagging con cifrado o agregación.

### Antes

¿Qué estándar etiqueta VLAN en trunks?

- A. TLS
- B. DNS
- C. IEEE 802.3 como etiqueta VLAN específica
- D. IEEE 802.1Q **(correcta)**

Explicación: 802.1Q permite transportar identificación VLAN en enlaces trunk.

### Propuesta

¿Qué familia IEEE define el etiquetado VLAN utilizado en trunks Ethernet?

- A. IEEE 802.1X.
- B. IEEE 802.1AE.
- C. IEEE 802.1AX.
- D. IEEE 802.1Q. **(correcta)**

Explicación: IEEE 802.1Q es la familia de bridges y VLAN que define el etiquetado VLAN empleado en trunks Ethernet. El etiquetado identifica el dominio lógico de la trama; no cifra su contenido ni autoriza al emisor. Un trunk puede incluir tráfico de VLAN nativa sin etiqueta según su configuración.

- Error A: IEEE 802.1X trata control de acceso basado en puertos, no es el formato de etiqueta VLAN del trunk.
- Error B: IEEE 802.1AE corresponde a MAC Security; proteger tramas no es la identificación VLAN802.1Q.
- Error C: IEEE 802.1AX trata agregación de enlaces; agrupar miembros no es etiquetar una VLAN.

- [IEEE 802.1: 802.1Q-2022, Bridges and Bridged Networks](https://1.ieee802.org/maintenance/p802-1q-rev/) · Descripción del alcance y Current Status: Published as IEEE Std802.1Q-2022 · versión: Página primaria de revisión publicada2022, comprobada 03-11-2026. Se identifica familia de bridges/VLAN; no se declara lectura íntegra de la norma o que no haya enmiendas/proyectos posteriores. · comprobado: 2026-11-03
- [Cisco: Configure VLAN](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan.html) · Types of VLAN; VLAN Port Membership Modes, tabla Static-access/Trunk/Voice VLAN; IEEE 802.1Q trunking encapsulation · versión: Guía IOS XE17 HTML comprobada 03-11-2026. Caso de acceso de datos sin voice VLAN; hay excepciones de voz y VLAN nativa sin etiqueta en trunks. Una VLAN de gestión no asegura disponibilidad o cifrado por sí misma. · comprobado: 2026-11-03
- [IEEE 802.1: 802.1AX-2020, Link Aggregation](https://1.ieee802.org/tsn/802-1ax-rev/) · Descripción: enlaces full-duplex punto a punto como un LAG tratado como enlace único; Current Status · versión: Página primaria de revisión2020 comprobada 03-11-2026. Se lee alcance HTML, no texto íntegro del estándar. No garantiza suma de capacidad a un flujo ni ausencia de fallos comunes. · comprobado: 2026-11-03

Partida: `9ccdcb90752e5225775076ecaa2f960b19aa0e2d1beea7fd55863cca723fdd01` · propuesta: `c7b614f6c124c8e1d16a820e122a7caac1b9c5cac1624b5151d98127aabeb3d2`

## AI-GSI-B4-T08-010

Decisión: pending_review · acción: revise.

Motivo: Conservar acceso sin etiqueta y clave D; caso de PC sin etiquetado ni voice VLAN para excluir excepciones reales.

### Antes

¿Qué caracteriza normalmente a un puerto de acceso?

- A. Una VPN intercontinental siempre
- B. Solo tráfico óptico
- C. Todas las VLAN etiquetadas obligatoriamente
- D. Una VLAN hacia el terminal sin etiquetado **(correcta)**

Explicación: El acceso difiere del trunk, que transporta varias VLAN etiquetadas según configuración.

### Propuesta

Un PC sin etiquetado VLAN debe conectarse a una única VLAN de datos, sin voice VLAN. ¿Qué configuración corresponde?

- A. Un trunk que presenta al PC varias VLAN con etiqueta.
- B. Un enlace agregado que reparte las tramas entre miembros.
- C. Un puerto enrutado que termina un enlace IP de capa 3.
- D. Un acceso que asocia las tramas sin etiqueta a una VLAN. **(correcta)**

Explicación: Un puerto de acceso de datos asigna el tráfico sin etiqueta del PC a la VLAN configurada y entrega normalmente esas tramas al terminal sin etiqueta. El caso excluye voice VLAN y otras extensiones. El comportamiento de un trunk con VLAN nativa no convierte en equivalentes los modos de acceso y trunk.

- Error A: El terminal descrito no usa etiquetas ni varias VLAN; ese modo corresponde a un trunk hacia un equipo compatible.
- Error B: La agregación agrupa miembros físicos y es una función distinta de la pertenencia de acceso a una VLAN.
- Error C: Un puerto enrutado tiene función L3 propia; no es el puerto de acceso de datos descrito.

- [Cisco: Configure VLAN](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan.html) · Types of VLAN; VLAN Port Membership Modes, tabla Static-access/Trunk/Voice VLAN; IEEE 802.1Q trunking encapsulation · versión: Guía IOS XE17 HTML comprobada 03-11-2026. Caso de acceso de datos sin voice VLAN; hay excepciones de voz y VLAN nativa sin etiqueta en trunks. Una VLAN de gestión no asegura disponibilidad o cifrado por sí misma. · comprobado: 2026-11-03

Partida: `d4187699bf0af7e31e0dc9d4ea7399e3fac0d6e86289c50b9cd02dee02486f3e` · propuesta: `fe1ea7abcbb549b9262121ce1fc2903381dfae9de44d86d9825b84029c9310f5`

## AI-GSI-B4-T08-011

Decisión: pending_review · acción: revise.

Motivo: Conservar routing/política inter-VLAN y clave B; caso con separación que debe mantenerse, sin implicar ACL explícita obligatoria en todo dispositivo.

### Antes

¿Qué necesita comunicación inter-VLAN?

- A. Cambiar las etiquetas sin routing
- B. Función L3 y políticas de filtrado **(correcta)**
- C. Solo un trunk sin función de red
- D. Unir ambas VLAN mediante un hub

Explicación: Separar VLAN no crea por sí solo routing ni autorización entre ellas.

### Propuesta

Dos subredes en VLAN distintas deben comunicarse manteniendo su separación. El trunk ya transporta ambas. ¿Qué función falta y qué debe revisarse?

- A. Ampliar la lista de VLAN permitidas en el trunk entre switches.
- B. Configurar routing L3 y autorizar el tráfico según la política. **(correcta)**
- C. Asignar a las dos VLAN la misma instancia de spanning tree.
- D. Aprender las MAC de ambas VLAN por un único puerto físico.

Explicación: Mantener dos subredes en VLAN distintas y comunicar sus equipos exige una función de routing y direccionamiento adecuados. Además, el tráfico debe estar permitido por las políticas aplicables. Un trunk transporta VLAN, pero no encamina entre ellas; la mera existencia de rutas tampoco acredita que todo acceso deba estar autorizado.

- Error A: El trunk conserva separados los dominios que transporta; permitir sus etiquetas no crea encaminamiento entre subredes.
- Error C: Compartir instancia MST puede compartir topología L2, sin fusionar VLAN o habilitar routing entre ellas.
- Error D: El aprendizaje MAC se interpreta por VLAN; compartir puerto de llegada no crea conectividad L3 entre subredes.

- [Cisco: Configure Inter-VLAN Routing with Catalyst Switches](https://www.cisco.com/c/en/us/support/docs/lan-switching/inter-vlan-routing/41260-189.html) · Background Information: comunicación entre VLAN mediante dispositivo L3; Configure, SVI y routing · versión: Ejemplo IOS XE16.12.7/IOS03.09.00E, HTML comprobado 03-11-2026. Se usa necesidad de routing entre subredes. Se excluye la frase imprecisa que llama collision domains a VLAN: se separan dominios de broadcast. Sin ejecutar configuración. · comprobado: 2026-11-03
- [Cisco: VLAN Best Practices and Security Tips](https://www.cisco.com/c/en/us/support/docs/smb/routers/cisco-rv-series-small-business-routers/1778-tz-VLAN-Best-Practices-and-Security-Tips-for-Cisco-Business-Routers.html) · Best Practice5: Inter-VLAN Routing, aplicar ACL al acceso a servidores; consideraciones de VLAN hopping · versión: Guía Cisco Business HTML comprobada 03-11-2026. Se usa filtrado complementario a segmentación; no se adopta como regla universal la recomendación de evitar routing inter-VLAN o topologías/productos concretos. · comprobado: 2026-11-03

Partida: `b80d32fb290c08a71887dc6d503cfb968a0040cde50692cbf97b1a4e4268f0ba` · propuesta: `b18078f560270a1624e7e4769c52892bd4dfb9bfb66ce3b5296d0eb27b810e2e`

## AI-GSI-B4-T08-012

Decisión: pending_review · acción: revise.

Motivo: Conservar árbol sin bucles y clave A; alternativas de selección/reparto de caminos y bloqueo lógico preciso.

### Antes

¿Qué hace STP frente a caminos redundantes?

- A. Bloquea caminos para una topología sin bucles **(correcta)**
- B. Asigna direcciones IP
- C. Agrega siempre todos los enlaces activos
- D. Cifra todas las tramas

Explicación: STP mantiene redundancia utilizable evitando bucles de enlace.

### Propuesta

¿Qué hace STP frente a caminos redundantes?

- A. Selecciona una topología de reenvío y bloquea caminos de datos. **(correcta)**
- B. Agrupa los enlaces redundantes como un único puerto lógico.
- C. Distribuye cada flujo por un miembro mediante una función hash.
- D. Reenvía cada trama por las rutas disponibles de menor coste IP.

Explicación: STP obtiene una topología lógica de enlace sin bucles deshabilitando el reenvío de datos por determinados caminos redundantes. No elimina necesariamente el enlace físico: un puerto bloqueado puede seguir recibiendo BPDUs. Si cambia la topología, un camino de reserva puede pasar a utilizarse tras la convergencia.

- Error B: Agrupar enlaces en un puerto lógico corresponde a link aggregation, no al árbol de expansión.
- Error C: El hashing distribuye tráfico en un agregado; STP elige qué caminos reenvían dentro de su topología.
- Error D: STP actúa sobre bridges y costes de enlace, no calcula rutas IP para cada trama.

- [Cisco: Spanning Tree Protocol](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/stp/stp-configuration-guide/m-stp.html) · Spanning tree topology and bridge protocol data units; Blocking state functions · versión: Guía IOS XE17 HTML comprobada 03-11-2026. Bloqueo lógico de datos, no desconexión física. Se excluyen generalizaciones históricas sobre una única instancia802.1Q y valores por defecto de producto. · comprobado: 2026-11-03

Partida: `0455a0322987783cf5dc09868d85469e2bda89a1bed64f1b8b7ddecd98f006c3` · propuesta: `fdf87b7c770814b653fd1ac3c8dcef139b754a82832590558529b00aa0ece9a4`

## AI-GSI-B4-T08-013

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y clave B; mejorar distractores LAN y acotar la mejora sin tiempos garantizados.

### Antes

¿Qué mejora RSTP respecto a STP clásico?

- A. Direccionamiento IPv6 automático
- B. Convergencia más rápida **(correcta)**
- C. Mayor tamaño de MAC
- D. Cifrado obligatorio

Explicación: RSTP acelera recuperación de la topología libre de bucles.

### Propuesta

¿Qué mejora RSTP respecto a STP clásico?

- A. Mayor número de VLAN identificables con el mismo etiquetado.
- B. Convergencia más rápida de la topología libre de bucles. **(correcta)**
- C. Mayor capacidad agregada al repartir cada flujo entre enlaces.
- D. Cifrado de las BPDUs para autenticar los switches vecinos.

Explicación: RSTP acelera la transición a una topología de reenvío sin bucles mediante roles y mecanismos de confirmación entre bridges, especialmente en enlaces punto a punto. El beneficio depende de configuración e interoperabilidad; puede recurrir a mecanismos más lentos con equipos antiguos. No garantiza tiempo cero o una duración universal.

- Error A: El espacio de identificadores VLAN depende del etiquetado, no de la rapidez de spanning tree.
- Error C: El reparto dentro de un agregado es otro mecanismo; RSTP no suma enlaces para cada flujo.
- Error D: La transición rápida no introduce por sí misma cifrado o autenticación criptográfica de las BPDUs.

- [Cisco: Understand Rapid Spanning Tree Protocol](https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html) · Rapid Transition to Forwarding State; Link Type; Proposal/Agreement Sequence; Compatibility with802.1D · versión: HTML comprobado 03-11-2026. Mejora condicionada por enlaces, configuración e interoperabilidad; no convergencia instantánea o tiempo fijo garantizado. · comprobado: 2026-11-03

Partida: `83663d59aedd3a74f0509082116d3c3104e7839251f157e507ad04014bcbad37` · propuesta: `63b7cf60bafecf448126f84528c8802a627cfd394c79529747b4da4051a57a9d`

## AI-GSI-B4-T08-014

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y clave B; cuatro asociaciones de red próximas y aclarar que compartir árbol no fusiona VLAN.

### Antes

¿Qué permite MSTP?

- A. Sustituir todos los routers
- B. Mapear VLAN a instancias de árbol **(correcta)**
- C. Autenticar mediante huella
- D. Resolver nombres públicos

Explicación: MSTP organiza varias VLAN en instancias de spanning tree.

### Propuesta

¿Qué permite MSTP?

- A. Asignar cada puerto físico a varias direcciones de gateway IP.
- B. Agrupar VLAN en instancias con una topología de árbol común. **(correcta)**
- C. Agregar enlaces físicos como un único miembro de una VLAN.
- D. Mapear cada dirección MAC a una instancia de encaminamiento.

Explicación: MSTP permite asociar varias VLAN a una instancia de spanning tree y compartir su topología de reenvío dentro de la región. No fusiona esas VLAN ni habilita comunicación entre ellas. Pueden planificarse distintas instancias para usar caminos diferentes; pertenecer a una instancia sigue siendo una decisión de topología L2.

- Error A: Asignar gateways es una configuración de capa 3; no describe la relación VLAN/instancia de árbol.
- Error C: La agregación trata enlaces físicos, mientras MSTP asocia VLAN con árboles lógicos.
- Error D: MSTP no crea una instancia de routing por MAC; el aprendizaje de direcciones y el árbol son funciones distintas.

- [Cisco: Understand the Multiple Spanning Tree Protocol](https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24248-147.html) · MST Case; MST Region; Two VLANs Mapped to the Same Instance Block the Same Ports · versión: HTML comprobado 03-11-2026. Varias VLAN por instancia y topología compartida; referencias802.1s/802.1w históricas integradas en evolución802.1Q. No se generaliza una instancia por VLAN ni el texto CST a todas las revisiones actuales. · comprobado: 2026-11-03

Partida: `71621f1a0219a632502644b2cae8f4baf76c9528ed5af5b4f753f98e15471a96` · propuesta: `1f80ac39276fa54aef6f52b18d1ca95c7cb299ddcc5bcd759f774e7e69934d1b`

## AI-GSI-B4-T08-015

Decisión: pending_review · acción: revise.

Motivo: Conservar negociación de agregación y clave C; contrastar protocolos de control y separar LACP del hashing.

### Antes

¿Qué negocia LACP?

- A. Certificados web
- B. Claves primarias
- C. Agregación de enlaces **(correcta)**
- D. Direcciones DHCP

Explicación: LACP coordina enlaces agregados para redundancia y capacidad.

### Propuesta

¿Qué negocia LACP?

- A. La topología sin bucles mediante intercambio de BPDUs.
- B. La pertenencia de terminales a VLAN mediante autenticación.
- C. La agrupación de enlaces compatibles en un canal lógico. **(correcta)**
- D. La elección de rutas IP mediante anuncios entre vecinos.

Explicación: LACP intercambia información con el extremo vecino para coordinar qué enlaces compatibles participan en una agregación lógica. La agregación puede aportar capacidad conjunta y redundancia bajo sus condiciones de diseño. La negociación no determina por sí sola el algoritmo de reparto ni garantiza que un flujo use la suma de todos los miembros.

- Error A: Intercambiar BPDUs para una topología sin bucles es función de spanning tree.
- Error B: El control de acceso del terminal puede usar 802.1X y políticas, no la negociación de miembros LACP.
- Error D: Los protocolos de routing intercambian información de red, distinta de la selección de enlaces del agregado.

- [Cisco: EtherChannel](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/etherchannel/etherchannel-configuration-guide/m_ethernetchannel.html) · Link Aggregation Control Protocol; LACP modes active/passive; EtherChannel logical link · versión: Guía IOS XE17 con historial17.18.1, HTML comprobada 03-11-2026. Intercambio y compatibilidad de miembros;802.3ad es procedencia histórica, familia actual802.1AX. No se confunde negociación LACP con el algoritmo de reparto. · comprobado: 2026-11-03
- [IEEE 802.1: 802.1AX-2020, Link Aggregation](https://1.ieee802.org/tsn/802-1ax-rev/) · Descripción: enlaces full-duplex punto a punto como un LAG tratado como enlace único; Current Status · versión: Página primaria de revisión2020 comprobada 03-11-2026. Se lee alcance HTML, no texto íntegro del estándar. No garantiza suma de capacidad a un flujo ni ausencia de fallos comunes. · comprobado: 2026-11-03

Partida: `6d89bd93b65b72173345e733170aa06778f0d8f44c8f8761c0668d304f7e47dc` · propuesta: `5e4c5e7f0515195dfdc2bc1a91d89701cfa6a7b8848972e46ac721fb52cbfe6d`

## AI-GSI-B4-T08-016

Decisión: pending_review · acción: revise.

Motivo: Conservar límite por hashing y clave D; caso con cuatro miembros de 1 Gb/s, sin afirmar rendimiento medido o garantizado.

### Antes

Un agregado tiene varios enlaces. ¿Qué puede limitar un flujo individual?

- A. No poder transportar datos nunca
- B. Usar siempre la suma total garantizada
- C. Necesitar broadcast para cada paquete
- D. Quedar asignado a un miembro según hashing **(correcta)**

Explicación: La distribución de flujos no garantiza sumar todos los enlaces para uno solo.

### Propuesta

Un agregado tiene cuatro miembros de 1 Gb/s y usa hashing por flujo. ¿Qué límite puede afectar a una única conversación persistente?

- A. El límite de 4 Gb/s que cada flujo negocia a través de LACP.
- B. La reserva de tres miembros para retransmitir ese flujo.
- C. El reparto cíclico de cada paquete entre los cuatro enlaces.
- D. La capacidad del miembro al que el hash asigna ese flujo. **(correcta)**

Explicación: Con hashing por flujo, los campos que identifican la conversación seleccionan un miembro. Ese flujo no dispone por ello de los 4 Gb/s nominales conjuntos: queda sujeto al miembro de 1 Gb/s y a otros límites y sobrecargas. Flujos distintos pueden distribuirse entre miembros; LACP coordina la agregación, no negocia un caudal por conversación.

- Error A: LACP no negocia un límite agregado de 4 Gb/s para cada flujo; la capacidad conjunta no implica esa velocidad individual.
- Error B: La asignación de un flujo no obliga a dejar el resto en reserva para sus retransmisiones.
- Error C: El supuesto especifica hashing por flujo, no reparto paquete a paquete; este último podría reordenar la conversación.

- [Cisco: Understand EtherChannel Load Balance and Redundancy](https://www.cisco.com/c/en/us/support/docs/lan-switching/etherchannel/12023-4.html?referring_site=bodynav) · Determine the Link Across Which to Send Traffic: hashing determinista, conservación de orden y selección de miembro · versión: HTML comprobado 03-11-2026. Caso con reparto por flujo; rangos0–7, ocho miembros y tablas son específicos de plataformas antiguas, no límites universales. LACP y hashing cumplen funciones distintas. · comprobado: 2026-11-03

Partida: `0f55fb5629ede3196803d8df9cca1029150b521957fee0d95482537f967dbe5c` · propuesta: `c28c7275ee1038dffc065a8c9337447e1ee31f394bfa236e03c071434656bd0f`

## AI-GSI-B4-T08-018

Decisión: pending_review · acción: revise.

Motivo: Conservar defensa complementaria y clave D; evitar negar la separación real de VLAN o exigir un producto concreto.

### Antes

¿Por qué una VLAN sola no basta como frontera de seguridad?

- A. Porque cifra automáticamente
- B. Porque no separa broadcast nunca
- C. Porque sustituye toda autenticación
- D. Necesita políticas de acceso y controles entre zonas **(correcta)**

Explicación: La segmentación organiza dominios; el acceso permitido requiere controles adicionales.

### Propuesta

¿Por qué una VLAN, por sí sola, no define una frontera completa de seguridad?

- A. Porque debe habilitarse un trunk para convertir separación en cifrado.
- B. Porque la separación deja de existir si las VLAN comparten un switch.
- C. Porque la pertenencia a VLAN determina la identidad del administrador.
- D. Porque el acceso entre zonas requiere políticas y controles propios. **(correcta)**

Explicación: Una VLAN delimita un dominio lógico de enlace, pero no define por sí sola quién puede acceder a cada servicio. Al comunicar zonas hay que aplicar y verificar la política prevista, por ejemplo mediante ACL o firewall, y proteger pertenencia y puertos. La eficacia depende de la configuración y controles, no del nombre o número de VLAN.

- Error A: Transportar VLAN en un trunk no cifra el tráfico ni sustituye los controles de acceso.
- Error B: Un switch puede mantener varias VLAN separadas; compartir chasis no elimina automáticamente esa separación lógica.
- Error C: La VLAN no acredita identidad administrativa o permisos sobre el equipo; hacen falta mecanismos específicos.

- [Cisco: VLAN Best Practices and Security Tips](https://www.cisco.com/c/en/us/support/docs/smb/routers/cisco-rv-series-small-business-routers/1778-tz-VLAN-Best-Practices-and-Security-Tips-for-Cisco-Business-Routers.html) · Best Practice5: Inter-VLAN Routing, aplicar ACL al acceso a servidores; consideraciones de VLAN hopping · versión: Guía Cisco Business HTML comprobada 03-11-2026. Se usa filtrado complementario a segmentación; no se adopta como regla universal la recomendación de evitar routing inter-VLAN o topologías/productos concretos. · comprobado: 2026-11-03

Partida: `040948e1b3875938d3f56221ef1b94427d398e000649e430b247de94d7201d6e` · propuesta: `522e15a92f1f711b89987ae513a3a05d00e5f09508b3e49384df37bf064b5cf9`

## AI-GSI-B4-T08-019

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y clave C; cuatro combinaciones de controles reales, sin AAA central como requisito universal.

### Antes

¿Qué práctica protege la administración LAN?

- A. Administración anónima
- B. Telnet con credenciales compartidas
- C. SSH/HTTPS, AAA central y logs **(correcta)**
- D. Puertos no usados abiertos sin control

Explicación: Protocolos seguros e identidad permiten limitar y auditar acciones.

### Propuesta

¿Qué práctica protege la administración LAN?

- A. SSH/HTTPS con cuenta compartida y registro de acceso deshabilitado.
- B. Telnet/HTTP con cuentas individuales y autorización centralizada.
- C. SSH/HTTPS con cuentas individuales, autorización y registro de acciones. **(correcta)**
- D. SSH/HTTPS con cuentas individuales y el mismo privilegio máximo.

Explicación: La administración necesita confidencialidad de sesión, identidad individual, permisos adecuados y trazabilidad. SSH y HTTPS donde esté soportado el servicio protegen el canal; AAA puede centralizar autenticación, autorización y registro. El cifrado por sí solo no restringe privilegios ni permite atribuir acciones si se comparte una cuenta.

- Error A: El canal cifrado no resuelve la atribución individual ni compensa deshabilitar los registros.
- Error B: Las cuentas y autorización son útiles, pero Telnet/HTTP exponen la sesión sin cifrado de esos protocolos.
- Error D: Una identidad individual no justifica asignar a todos privilegio máximo; deben limitarse según sus funciones.

- [Cisco: IOS XR Software Hardening Guide](https://sec.cloudapps.cisco.com/security/center/resources/Cisco-IOS-XR-HardeningGuide) · Secure Interactive Management Session; Authentication, Authorization and Accounting; Redundant AAA Servers; logging · versión: Guía HTML comprobada 03-11-2026. Cifrado, identidad, autorización y registro. HTTPS solo donde exista gestión web compatible; el texto indica HTTP web server deprecado en IOS XR. Sin copiar comandos o imponer versión de producto. · comprobado: 2026-11-03
- [Cisco: Campus LAN and Wireless LAN Solution Design Guide](https://www.cisco.com/c/en/us/td/docs/solutions/CVD/Campus/cisco-campus-lan-wlan-design-guide.html) · Campus Wired LAN Design Fundamentals: Access/Distribution/Core; Two-tier design; Administrative Access Control · versión: Guía HTML comprobada 03-11-2026. Jerarquía de funciones y posible core colapsado; acceso individual, protocolos cifrados y logs. Cifras de equipos, productos o reglas de contraseña no se presentan como obligaciones universales. · comprobado: 2026-11-03

Partida: `06af595642711d9e79c53210316e4775ab9c228c0ce24efc08c5913193d8125b` · propuesta: `71acb569abb53b5358f4058ff662bcbf306d7b514a8f1731f30a4138d96d9b14`

## AI-GSI-B4-T08-020

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y clave C; contrastar jerarquía, capas y zonas, permitiendo core colapsado.

### Antes

¿Qué modelo jerárquico se cita para redes medianas o grandes?

- A. Primario, réplica y archivo
- B. Físico, enlace y transporte como jerarquía de campus
- C. Acceso, distribución y core **(correcta)**
- D. Cliente, servidor y base de datos

Explicación: La jerarquía estructura funciones y puede adaptarse o colapsarse según tamaño.

### Propuesta

¿Qué modelo jerárquico se cita para redes medianas o grandes?

- A. Acceso, agregación y presentación de aplicaciones.
- B. Enlace, red y transporte de la pila de protocolos.
- C. Acceso, distribución y núcleo de la red de campus. **(correcta)**
- D. Perímetro, zona desmilitarizada y red de servidores.

Explicación: El modelo jerárquico de campus organiza funciones en acceso, distribución y núcleo o core. Acceso conecta terminales, distribución agrega y aplica políticas, y el núcleo interconecta bloques. Según tamaño y requisitos pueden colapsarse distribución y core. Son funciones de diseño, no las capas de protocolo ni una obligación de tres equipos físicos.

- Error A: Mezcla funciones de conectividad con presentación de aplicaciones; no identifica la jerarquía de campus citada.
- Error B: Son capas de protocolos, una clasificación diferente de las funciones de acceso/distribución/núcleo.
- Error D: Son zonas o posiciones de seguridad, que pueden coexistir con la jerarquía pero no la sustituyen.

- [Cisco: Campus LAN and Wireless LAN Solution Design Guide](https://www.cisco.com/c/en/us/td/docs/solutions/CVD/Campus/cisco-campus-lan-wlan-design-guide.html) · Campus Wired LAN Design Fundamentals: Access/Distribution/Core; Two-tier design; Administrative Access Control · versión: Guía HTML comprobada 03-11-2026. Jerarquía de funciones y posible core colapsado; acceso individual, protocolos cifrados y logs. Cifras de equipos, productos o reglas de contraseña no se presentan como obligaciones universales. · comprobado: 2026-11-03

Partida: `55c8b15058cd5354610bfcc108fbfade0378cef61fad3418b1e8228543128498` · propuesta: `58649ccc9a7bac07e13de202c547c7be68e274cddbba94a34aa977eee8b0c100`

## AI-GSI-B4-T09-001

Decisión: pending_review · acción: revise.

Motivo: Conservar cinco áreas y clave C; sustituciones cercanas de una sola área, con accounting bien diferenciado.

### Antes

¿Qué áreas reúne FCAPS?

- A. Fuentes, columnas, filas, páginas y estilos
- B. Solo filtrado y cifrado
- C. Fallos, configuración, contabilidad, rendimiento y seguridad **(correcta)**
- D. Formato, compilación, archivo, pruebas y despliegue

Explicación: FCAPS estructura áreas de gestión de red, no una herramienta concreta.

### Propuesta

¿Qué áreas reúne FCAPS?

- A. Fallos, configuración, autenticación, rendimiento y seguridad.
- B. Fallos, configuración, contabilidad, replicación y seguridad.
- C. Fallos, configuración, contabilidad, rendimiento y seguridad. **(correcta)**
- D. Flujos, configuración, contabilidad, rendimiento y seguridad.

Explicación: FCAPS agrupa cinco áreas funcionales de gestión: fallos, configuración, contabilidad, rendimiento y seguridad. Accounting contempla el uso de recursos y su contabilización; no significa autenticación. Las áreas ayudan a organizar funciones y pueden apoyarse en diferentes protocolos o herramientas; no son cinco capas de una pila de comunicaciones.

- Error A: Sustituye contabilidad por autenticación; esta es una función de seguridad, no el significado de la A.
- Error B: La P corresponde a performance o rendimiento, no a replicación.
- Error D: La F corresponde a fault o fallos, no a flujos; estos pueden ser datos útiles para otras áreas.

- [UIT-T: M.3400 (02/2000), ficha de recomendación](https://www.itu.int/rec/T-REC-M.3400-200002-I/es) · Cabecera: Funciones de gestión de la red de gestión de las telecomunicaciones; aprobación04-02-2000 y Estado En vigor · versión: Ficha pública comprobada 03-11-2026. Metadatos de recomendación; no se atribuye lectura íntegra del PDF gratuito o de documentos TIES. · comprobado: 2026-11-03
- [UIT-T: M.3400 (02/2000), índice español](https://www.itu.int/dms_pubrec/itu-t/rec/m/T-REC-M.3400-200002-I!!TOC-HTM-S.htm) · Apartados5 Calidad de funcionamiento;6 Averías;7 Configuración;8 Contabilidad;9 Seguridad; §8.1 medición de utilización · versión: Índice HTML oficial comprobado 03-11-2026. Se usa para enumerar cinco áreas y distinguir contabilidad/accounting de autenticación; no es lectura del cuerpo completo de la recomendación. · comprobado: 2026-11-03

Partida: `440db57cfc2761623767624893092f02a6c439f7108ca461ff4e6887d3906f88` · propuesta: `53cb43f7c39efc3be3bbaf892121fb3fc5ee3489a8255929a2117521629e2228`

## AI-GSI-B4-T09-004

Decisión: pending_review · acción: revise.

Motivo: Conservar separación de gestión y clave B; caso VRF con infraestructura compartida para distinguir aislamiento lógico y OOB.

### Antes

¿Qué aporta una red o VRF de gestión cuando procede?

- A. Aumentar ilimitadamente capacidad
- B. Separar el plano administrativo del tráfico ordinario **(correcta)**
- C. Eliminar toda autenticación
- D. Sustituir actualizaciones

Explicación: La separación reduce exposición y debe complementarse con AAA y políticas.

### Propuesta

La gestión usa una VRF propia sobre los mismos equipos y enlaces de producción. ¿Qué aporta directamente esa VRF?

- A. Garantizar capacidad reservada para cada sesión administrativa.
- B. Separar el tráfico administrativo mediante un dominio de routing. **(correcta)**
- C. Autenticar al administrador mediante el identificador de la VRF.
- D. Proporcionar un acceso físico independiente de los enlaces de datos.

Explicación: Una VRF permite separar tablas y dominios de routing para el tráfico de gestión. Puede reducir exposición si se controlan rutas y accesos, pero necesita identidad, autorización y registro. Si comparte equipos y enlaces con producción, esa separación lógica no proporciona por sí sola una red física fuera de banda o capacidad reservada.

- Error A: Separar tablas de routing no reserva ancho de banda; esa capacidad requiere mecanismos y recursos adicionales.
- Error C: El identificador de la VRF no es una credencial ni prueba la identidad o permisos del administrador.
- Error D: La VRF del caso comparte infraestructura; la independencia física exige otro diseño y recursos.

- [Cisco: Out of band best practices](https://www.cisco.com/c/en/us/solutions/collateral/service-provider/out-of-band-best-practices-wp.html) · Managed Network Devices: Isolation of Management Traffic; Jumpservers: Access Control y Auditing · versión: Guía HTML comprobada 03-11-2026. Separación lógica por VRF y controles; una VRF compartiendo infraestructura no equivale a red física fuera de banda ni garantiza recuperación ante caída de producción. · comprobado: 2026-11-03

Partida: `5a9948cd94f80bca9713d24b4d26fe07f6ef6a7a59267bc837b4112704730c48` · propuesta: `65ae093d78c7dc49b23b678f83b823333b0e09d09b24b2b2d290b5b8e4b50771`
