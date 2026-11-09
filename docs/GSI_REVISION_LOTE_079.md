# GSI-EDITORIAL-079 — revisión propuesta

Preparado: 2026-11-04. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `a9e2f298425090788b837bee9393d2965dc638c3d6186131dfc10670137cc0ae`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T11-013

Decisión: pending_review · acción: revise.

Motivo: Conservar priorización WMM y clave D; distinguirla de reserva, equidad temporal y separación física.

### Antes

¿Qué aporta WMM/802.11e?

- A. Cifrado del firmware
- B. Almacenamiento de documentos
- C. Asignación de direcciones públicas
- D. Priorización por categorías de tráfico **(correcta)**

Explicación: La calidad de servicio diferencia categorías de acceso al medio.

### Propuesta

¿Qué aporta WMM/802.11e?

- A. Reserva un caudal fijo para cada categoría de acceso.
- B. Reparte el tiempo de transmisión por igual entre categorías.
- C. Asigna a cada categoría un canal radio físico independiente.
- D. Diferencia la prioridad de acceso al medio según categorías. **(correcta)**

Explicación: WMM emplea cuatro categorías de acceso: voz, vídeo, mejor esfuerzo y fondo. EDCA diferencia sus parámetros de contención para favorecer tráfico prioritario. Ese trato es relativo: no reserva por sí solo un caudal fijo ni elimina la competencia por el canal.

- Error A: Priorizar la contención no es reservar capacidad fija: el resultado depende también de carga y condiciones radio.
- Error B: La diferenciación modifica las oportunidades de acceso, no establece un reparto igual entre categorías.
- Error C: Las categorías son colas de acceso al medio compartido, no canales de frecuencia separados.

- [Cisco: Unified Wireless QoS Tech Note](https://www.cisco.com/c/en/us/support/docs/wireless-mobility/voice-over-wireless-lan-vowlan/116056-technote-qos-00.html) · WMM: cuatro Access Classes y EDCA, prioridad mediante contención diferenciada · versión: Guía histórica HTML comprobada el 04-11-2026. WMM es un subconjunto de 802.11e. No se generalizan parámetros numéricos, máximos PHY ni la frase de que DSCP siempre sobrevive al trayecto. · comprobado: 2026-11-04

Partida: `7c76ec8acf9bba826ff381f5d08b75a52e1b97c7a31837cf7bcd88f87907d9f7` · propuesta: `a859638299f73e84cf891a394a1621cc3ae9b902ff93df89fd76295fde12e83f`

## AI-GSI-B4-T11-014

Decisión: pending_review · acción: revise.

Motivo: Conservar BSS de infraestructura y clave A; contrastar BSS/ESS/IBSS/nombre sin equiparar BSS a toda una carcasa física.

### Antes

¿Qué representa un BSS en infraestructura?

- A. Conjunto básico alrededor de un AP **(correcta)**
- B. Una única cuenta administrativa
- C. Un dispositivo de almacenamiento
- D. Todos los sistemas autónomos de Internet

Explicación: ESS agrupa varios BSS para una red más amplia.

### Propuesta

¿Qué representa un BSS en infraestructura?

- A. Un AP y las estaciones asociadas a ese servicio básico. **(correcta)**
- B. Los BSS conectados mediante el sistema de distribución.
- C. Las estaciones ad-hoc que se comunican sin un AP central.
- D. Las redes que anuncian el mismo nombre aunque estén aisladas.

Explicación: En infraestructura, un BSS comprende el AP que presta ese servicio básico y las estaciones asociadas. Varios BSS conectados por un sistema de distribución pueden formar un ESS. Un mismo equipo físico puede ofrecer varios BSS; compartir un nombre SSID no demuestra pertenecer al mismo ESS.

- Error B: La agregación de varios BSS mediante distribución describe un ESS, no cada conjunto básico individual.
- Error C: La organización sin AP corresponde a un IBSS ad-hoc; el enunciado especifica infraestructura.
- Error D: El nombre anunciado no prueba una infraestructura común: redes aisladas pueden usar el mismo SSID.

- [Cisco: What Is a Wi-Fi Network?](https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-wi-fi-network.html) · Elements of Wi-Fi network architecture: BSS, Distribution system y Access point · versión: HTML comprobado el 04-11-2026. Solo arquitectura BSS/ESS/IBSS; se excluyen afirmaciones anticuadas sobre seguridad WPA2, prestaciones y recomendaciones comerciales de otros apartados. · comprobado: 2026-11-04

Partida: `9574dca7b69f26dfc633de765743a5cb80d696b2e881f5a43e5cb14307c3c22c` · propuesta: `f1b366fea3c9cb69393c42d893c570dd08a502027da779d6646e015e835e6f60`

## AI-GSI-B4-T11-015

Decisión: pending_review · acción: revise.

Motivo: Conservar ausencia de AP y clave D; distractores de topologías próximas, sin igualar ad-hoc a todo enlace entre pares.

### Antes

¿Qué caracteriza al modo ad-hoc/IBSS?

- A. Control obligatorio por un único AP
- B. Necesidad de MPLS
- C. Uso exclusivo de cable
- D. Ausencia de AP central **(correcta)**

Explicación: El modo ad-hoc es una organización sin punto de acceso central.

### Propuesta

¿Qué caracteriza al modo ad-hoc/IBSS?

- A. Los clientes se asocian a un AP que coordina el servicio.
- B. Varios BSS se unen mediante un sistema de distribución.
- C. Un AP raíz conecta por radio a otros AP de la misma red.
- D. Las estaciones forman un BSS independiente sin AP central. **(correcta)**

Explicación: Un IBSS es un conjunto básico independiente en modo ad-hoc: sus estaciones se comunican sin asociarse a un punto de acceso central. No debe confundirse con un ESS, con un enlace entre AP o con cualquier solución entre dispositivos; Wi-Fi Direct tiene una organización diferente.

- Error A: La asociación de clientes a un AP describe infraestructura, no la organización independiente del IBSS.
- Error B: Conectar conjuntos básicos mediante distribución caracteriza un ESS, no el IBSS sin AP.
- Error C: Un enlace radio entre AP sigue siendo una organización con puntos de acceso; no define un IBSS.

- [Cisco: What Is a Wi-Fi Network?](https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-wi-fi-network.html) · Elements of Wi-Fi network architecture: BSS, Distribution system y Access point · versión: HTML comprobado el 04-11-2026. Solo arquitectura BSS/ESS/IBSS; se excluyen afirmaciones anticuadas sobre seguridad WPA2, prestaciones y recomendaciones comerciales de otros apartados. · comprobado: 2026-11-04

Partida: `184e5b7b6708ebc07d72bd77672059d12e6a4b0e0a4e206905886afe4fad3eb2` · propuesta: `0951bc5b0f1a12a8d0d5b7014b3cd559a3c72fa66248c9e32b39b1b901a49748`

## AI-GSI-B4-T11-016

Decisión: pending_review · acción: revise.

Motivo: Conservar decisión del cliente y clave A; precisar funciones k/v/r y evitar exclusividad absoluta.

### Antes

¿Quién decide gran parte del roaming Wi-Fi?

- A. El cliente, con ayudas de la red **(correcta)**
- B. El switch de alimentación
- C. La autoridad de certificación
- D. Siempre exclusivamente el servidor DNS

Explicación: 802.11k/v/r pueden ayudar, pero el cliente tiene un papel importante.

### Propuesta

¿Quién decide gran parte del roaming Wi-Fi?

- A. El cliente elige el BSS de destino con ayudas de la red. **(correcta)**
- B. El controlador sustituye la elección del cliente en 802.11v.
- C. El servidor AAA selecciona el AP al validar credenciales.
- D. El informe 802.11k ordena asociarse a un vecino concreto.

Explicación: La decisión de buscar y seleccionar otro BSS recae en gran medida en el cliente. La red puede ayudar: 802.11k informa de vecinos, 802.11v sugiere transiciones y 802.11r agiliza el cambio de contexto de seguridad. La compatibilidad y las políticas influyen; la ayuda no garantiza roaming sin interrupción.

- Error B: 802.11v aporta recomendaciones de transición; no sustituye universalmente la lógica de selección del cliente.
- Error C: AAA autentica y autoriza según el despliegue; validar credenciales no es escoger el AP radio de destino.
- Error D: Un informe de vecinos informa de candidatos; no es una orden de asociación obligatoria a uno de ellos.

- [Cisco: Enterprise Best Practices for iOS, iPadOS, and MacOS Devices on Cisco Wireless LAN](https://www.cisco.com/c/en/us/products/collateral/wireless/access-points/enterprise-best-practices-ios-ipados-wp.html) · Roaming optimization: 802.11k neighbor reports, 802.11r Fast Transition y 802.11v network-assisted roaming · versión: HTML comprobado el 04-11-2026. Ayudas compatibles con cliente e infraestructura; sugerencia de BSS no equivale a decisión impuesta ni garantiza continuidad. No se aplican recetas o umbrales de producto. · comprobado: 2026-11-04

Partida: `bfeaea6a3b6ed83d4404111db7bbb5cdb6683a126e3036b4354a2eeea02ddbf0` · propuesta: `8071c5b43c0578bffcc2ac3eb64f69aa63f9c68c259b098012fb85e5482f5a18`

## AI-GSI-B4-T11-017

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso original y clave A; separar cobertura, capacidad e hipótesis de causa.

### Antes

Se recibe señal intensa pero hay muchos usuarios y retransmisiones. ¿Qué conclusión es razonable?

- A. La WLAN puede estar saturada pese a buena señal **(correcta)**
- B. Solo puede fallar el navegador
- C. No hace falta estudiar utilización de aire
- D. La señal fuerte garantiza calidad completa

Explicación: Cobertura y capacidad son dimensiones distintas del diseño radio.

### Propuesta

Se recibe señal intensa pero hay muchos usuarios y retransmisiones. ¿Qué conclusión es razonable?

- A. La WLAN puede estar saturada pese a recibir buena señal. **(correcta)**
- B. La intensidad recibida permite descartar contención radio.
- C. Las retransmisiones prueban que falta cobertura del AP.
- D. Aumentar potencia basta para resolver la carga del canal.

Explicación: Una señal intensa no demuestra que haya tiempo de aire disponible para todos los usuarios. La contención, las interferencias y las retransmisiones pueden reducir capacidad útil aun con buena cobertura. Se deben medir utilización, ruido y tráfico; estos indicios permiten sospechar saturación, pero no confirmar una causa única.

- Error B: La intensidad describe señal recibida, no la cantidad de estaciones que compiten por el tiempo de aire.
- Error C: Las retransmisiones tienen varias causas; con estos datos no se demuestra que el problema sea falta de cobertura.
- Error D: Elevar potencia no crea tiempo de aire y puede ampliar interferencias; hace falta diagnosticar la causa de la carga.

- [Cisco: Wireless High Client Density Design Guide](https://www.cisco.com/c/en/us/td/docs/wireless/controller/technotes/8-7/b_wireless_high_client_density_design_guide.html) · Data Rates and Cell Size: SNR, sensibilidad y consumo de airtime; distribución de clientes · versión: Guía 8.7 histórica HTML comprobada el 04-11-2026. Cobertura y capacidad distintas; no se deduce una causa única de retransmisiones ni se universalizan cifras de sensibilidad o densidad. · comprobado: 2026-11-04

Partida: `a949a4050381956fc079b2af1e093901371f7af9a6ea9c373304d6e60b91a352` · propuesta: `9f384b1e447a9ce32a7c745ca274a1a4584e5a8a33aefc9bff4b2f51f8c09570`

## AI-GSI-B4-T11-019

Decisión: pending_review · acción: revise.

Motivo: Conservar autenticación y políticas, clave B; explicitar configuración y no atribuir robustez automática a cualquier EAP.

### Antes

¿Qué control aporta seguridad robusta frente a ocultar SSID?

- A. Cambiar el nombre de red cada día
- B. Autenticación adecuada, como 802.1X/EAP, y políticas **(correcta)**
- C. Solo filtrar MAC como garantía total
- D. Bajar brillo de los AP

Explicación: Ocultar SSID o filtrar MAC no constituye por sí solo seguridad sólida.

### Propuesta

¿Qué control permite autenticar el acceso a una WLAN empresarial más allá de ocultar el SSID?

- A. Ocultar el SSID y permitir únicamente las MAC registradas.
- B. Usar 802.1X/EAP bien configurado con políticas de acceso. **(correcta)**
- C. Separar nombres SSID sin autenticar a usuarios o equipos.
- D. Restringir la cobertura reduciendo la potencia de los AP.

Explicación: Un despliegue empresarial de 802.1X/EAP permite autenticar mediante un método adecuado y aplicar autorización. Necesita configuración coherente de clientes, autenticador y servidor, incluida la comprobación de identidad del servidor cuando corresponda. Ocultar el nombre o confiar solo en una MAC no ofrece esa prueba criptográfica de identidad.

- Error A: El nombre oculto y una MAC permitida no aportan autenticación criptográfica; las direcciones pueden suplantarse.
- Error C: Los nombres distinguen servicios anunciados; por sí solos no autentican a quien solicita acceso.
- Error D: Limitar cobertura puede reducir exposición física, pero no comprueba la identidad de quien logra recibir la señal.

- [HPE Aruba: About 802.1X Authentication](https://arubanetworking.hpe.com/techdocs/ClearPass/6.11/PolicyManager/Content/Deploy/802.1X%20Authentication/8021X_About.htm) · 802.1X Authentication Components: supplicant, authenticator, authentication server y métodos EAP · versión: ClearPass 6.11, HTML comprobado el 04-11-2026. Marco de autenticación y autorización; no garantiza seguridad de cualquier método/configuración ni prescribe un producto. · comprobado: 2026-11-04
- [Cisco: What Is a Wi-Fi Network?](https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-wi-fi-network.html) · Elements of Wi-Fi network architecture: BSS, Distribution system y Access point · versión: HTML comprobado el 04-11-2026. Solo arquitectura BSS/ESS/IBSS; se excluyen afirmaciones anticuadas sobre seguridad WPA2, prestaciones y recomendaciones comerciales de otros apartados. · comprobado: 2026-11-04

Partida: `36cd61f81c065f1d2444a11fc64885db47d10dd4c3912d8b59612add1f31c262` · propuesta: `175ee44852bfc342700a6e96cf6db226b6fc1202723c0506cb0a03a130a12380`

## AI-GSI-B4-T11-020

Decisión: pending_review · acción: revise.

Motivo: Conservar segmentación por necesidad y clave D; contextualizar invitados y sensores con necesidades distintas.

### Antes

¿Cómo conviene tratar invitados e IoT en una WLAN corporativa?

- A. Desactivar registro
- B. Compartir credenciales administrativas
- C. Darles todos los accesos internos por defecto
- D. Separarlos y aplicar políticas según necesidad **(correcta)**

Explicación: Segmentación e identidad reducen exposición entre perfiles de uso.

### Propuesta

Una oficina incorpora Wi-Fi para visitantes y sensores IoT. ¿Qué diseño limita su exposición a los recursos corporativos?

- A. Crear SSID distintos y mantener entre ellos acceso interno abierto.
- B. Compartir la identidad corporativa para simplificar sus permisos.
- C. Situarlos en la red de gestión para centralizar su supervisión.
- D. Separar sus segmentos y permitir solo los flujos que necesitan. **(correcta)**

Explicación: Los perfiles de invitados e IoT requieren segmentos y reglas acordes con sus necesidades, evitando acceso interno indiscriminado. El aislamiento debe hacerse efectivo en los flujos y acompañarse de controles de identidad compatibles. Un SSID distinto no basta si los segmentos siguen comunicándose sin restricciones.

- Error A: Distinguir nombres no limita alcance si se conserva comunicación interna abierta entre esos perfiles y los recursos.
- Error B: Compartir identidad dificulta atribución y aplica privilegios corporativos a perfiles con necesidades diferentes.
- Error C: La red de gestión contiene funciones sensibles; supervisar un equipo no justifica darle acceso a ese plano.

- [NCSC: Preventing Lateral Movement](https://www.ncsc.gov.uk/guidance/preventing-lateral-movement) · §6 Segregate networks as sets: separar sistemas sin necesidad de comunicación y limitar acceso · versión: Guía HTML comprobada el 04-11-2026. Reducción del alcance de compromiso, no eliminación de vulnerabilidades; aplicación conceptual, sin carácter normativo para AGE. · comprobado: 2026-11-04

Partida: `26eb1cf63457bf684b219d736012a91a162265f636eb54dea845550602daaac0` · propuesta: `3edcc28afe4c260d5ffde4b53c0d10e6d6a93dcdc0b070af31d3a10e99859e07`

## AI-GSI-B4-T11-001

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado generacional y clave A; sustituir distractor Ethernet por otra generación Wi-Fi y mantener formas compactas.

### Antes

¿Qué estándar corresponde a Wi-Fi 6?

- A. IEEE 802.11ax **(correcta)**
- B. IEEE 802.11ac
- C. IEEE 802.3
- D. IEEE 802.11n

Explicación: El mapa del tema relaciona ax con Wi-Fi 6, ac con 5 y n con 4.

### Propuesta

¿Qué estándar corresponde a Wi-Fi 6?

- A. IEEE 802.11ax **(correcta)**
- B. IEEE 802.11ac
- C. IEEE 802.11be
- D. IEEE 802.11n

Explicación: Wi-Fi 6 identifica la generación basada en IEEE 802.11ax. Wi-Fi 5 se asocia a 802.11ac, Wi-Fi 4 a 802.11n y Wi-Fi 7 a 802.11be. El nombre generacional facilita reconocer capacidades; no garantiza que todos los equipos incorporen cada función opcional.

- Error B: 802.11ac corresponde a Wi-Fi 5, la generación anterior a la basada en 802.11ax.
- Error C: 802.11be corresponde a Wi-Fi 7; no es la enmienda asociada a Wi-Fi 6.
- Error D: 802.11n se identifica como Wi-Fi 4, anterior a 802.11ac y 802.11ax.

- [Cisco: What Is 802.11ac?](https://www.cisco.com/site/us/en/learn/topics/networking/what-is-802-11ac.html) · Introducción: Wi-Fi 5 corresponde a 802.11ac; Wi-Fi 6 a 802.11ax; What is 802.11n? · versión: HTML comprobado el 04-11-2026. Solo correspondencia de generaciones; no se usan cifras de throughput, fórmulas de QAM o afirmación de conmutación de bandas de otros apartados. · comprobado: 2026-11-04
- [IEEE: 802.11 Working Group](https://www.ieee802.org/11/) · Recent standards approvals: IEEE802.11be-2024, Wi-Fi7 · versión: Página pública comprobada el 04-11-2026. Identificación de generación; no lectura del texto completo ni confusión entre edición y fecha de publicación. · comprobado: 2026-11-04

Partida: `5fd20b794a3643fda4abf17cee2fd676515a9ab05709ca7d7a02b8146f0ddc78` · propuesta: `65bf1001a6f5ccdbe3c80869fcbf5455ae486ba5d002875f6097d268c5e2bdae`

## AI-GSI-B4-T12-003

Decisión: pending_review · acción: revise.

Motivo: Conservar finalidad de DMZ y clave B; caso de publicación sin asumir dos firewalls físicos.

### Antes

¿Para qué se utiliza una DMZ?

- A. Evitar todo filtrado
- B. Alojar servicios expuestos separados de redes internas **(correcta)**
- C. Eliminar la necesidad de routing
- D. Guardar todas las contraseñas públicas

Explicación: La DMZ delimita exposición y flujos hacia zonas internas.

### Propuesta

Una organización publica una aplicación web y quiere limitar el impacto sobre su LAN si el servidor resulta comprometido. ¿Qué aporta una DMZ?

- A. Colocar el servicio en la LAN interna y redirigir su puerto público.
- B. Alojar el servicio en un segmento separado con flujos controlados. **(correcta)**
- C. Publicarlo en la red de gestión para heredar sus accesos internos.
- D. Situarlo en una VLAN separada con encaminamiento interno abierto.

Explicación: Una DMZ permite exponer el servicio en una zona diferenciada y aplicar reglas a sus comunicaciones con Internet y con la red interna. Su utilidad depende de controlar esos flujos. Separar una VLAN sin restricciones, redirigir un puerto o usar la red de gestión no proporciona la misma contención.

- Error A: La redirección de puertos permite llegar al servicio, pero no separa el servidor del segmento interno que podría comprometer.
- Error C: La red de gestión es un ámbito sensible; publicar allí el servicio amplía exposición en lugar de crear una zona perimetral.
- Error D: La separación lógica pierde capacidad de contención si se deja acceso interno abierto por routing.

- [NIST CSRC: demilitarized zone (DMZ)](https://csrc.nist.gov/glossary/term/demilitarized_zone) · Definitions: SP800-41 Rev.1/SP800-82r3, segmento perimetral y filtrado entre DMZ y zona protegida · versión: Glosario HTML comprobado el 04-11-2026. Definiciones con documentos identificados; no lectura íntegra de esos documentos ni obligación de dos equipos físicos. · comprobado: 2026-11-04

Partida: `44f339a091e8a159f02279f295920e0a1a1d6ead115d4a7192bd0a444637a75c` · propuesta: `d22a0018c424e0b76950f0624f2339134a6ac005f7afda66f5924d6f5a81699f`

## AI-GSI-B4-T12-004

Decisión: pending_review · acción: revise.

Motivo: Conservar seguimiento de estado y clave C; contrastar filtrado estático, NAT y validación de aplicación.

### Antes

¿Qué diferencia un firewall stateful?

- A. Solo observa nombres de archivos
- B. Cifra siempre todas las aplicaciones
- C. Sigue el estado de conexiones **(correcta)**
- D. Carece de reglas

Explicación: El seguimiento de estado complementa condiciones de filtrado de paquetes.

### Propuesta

¿Qué diferencia un firewall stateful?

- A. Decide el paso de cada paquete sin contexto de conexión.
- B. Autoriza el tráfico por la traducción de direcciones usada.
- C. Contrasta paquetes con el estado de conexiones seguido. **(correcta)**
- D. Valida la lógica de negocio de cada solicitud recibida.

Explicación: Un firewall con inspección de estado mantiene contexto de conexiones y lo usa junto a sus reglas para evaluar paquetes. Así puede detectar tráfico que no encaja con el estado esperado. No se reduce a NAT ni implica conocer toda lógica de aplicación o descifrar automáticamente las comunicaciones protegidas.

- Error A: Evaluar paquetes sin contexto de conexión caracteriza filtrado sin estado, frente al seguimiento descrito.
- Error B: NAT transforma direccionamiento; la existencia de una traducción no define el mecanismo de inspección de estado.
- Error D: Validar operaciones de negocio requiere controles de aplicación; no se deriva del seguimiento de conexiones.

- [NIST CSRC: Stateful Inspection](https://csrc.nist.gov/glossary/term/stateful_inspection) · Definitions, definición atribuida a SP800-41 Rev.1: seguimiento de estado y tráfico que se desvía del esperado · versión: Glosario HTML comprobado el 04-11-2026. Estado de conexiones complementa reglas; no inspección completa automática de contenido cifrado. · comprobado: 2026-11-04

Partida: `0cab73118e4ff6a0e1cbfa4c5250dd52a83d768155e1733090c45e05d8721a82` · propuesta: `e724f9707c78e43d8c848ae58e2d661a19ec1436d999f41d9306d4d1432b0690`

## AI-GSI-B4-T12-005

Decisión: pending_review · acción: revise.

Motivo: Conservar reducción de movimiento lateral y clave A; caso de compromiso inicial sin promesa de invulnerabilidad.

### Antes

¿Qué efecto busca la segmentación sobre un compromiso?

- A. Limitar movimiento lateral **(correcta)**
- B. Garantizar que no habrá vulnerabilidades
- C. Crear ancho de banda infinito
- D. Eliminar autenticación

Explicación: Separar zonas y flujos reduce propagación y alcance de accesos.

### Propuesta

Un atacante controla un puesto de trabajo. ¿Qué efecto busca una segmentación que restringe sus flujos hacia servidores de otros segmentos?

- A. Dificulta que el acceso inicial alcance otros segmentos. **(correcta)**
- B. Elimina las vulnerabilidades presentes en el equipo afectado.
- C. Hace innecesaria la autorización de usuarios internos.
- D. Permite confiar en todo tráfico tras cruzar el perímetro.

Explicación: La segmentación con reglas limita las comunicaciones que un equipo comprometido puede iniciar hacia otras zonas, reduciendo oportunidades de movimiento lateral. No elimina el fallo inicial ni garantiza contención absoluta: importa que los flujos necesarios estén definidos y que identidad, actualización y supervisión sigan funcionando.

- Error B: Separar redes no corrige el software vulnerable ni expulsa al atacante del equipo que ya controla.
- Error C: El acceso a un segmento no sustituye comprobar qué acciones puede realizar cada identidad sobre los recursos.
- Error D: Un origen interno puede estar comprometido; atravesar el perímetro no convierte el tráfico en fiable.

- [NCSC: Preventing Lateral Movement](https://www.ncsc.gov.uk/guidance/preventing-lateral-movement) · §6 Segregate networks as sets: separar sistemas sin necesidad de comunicación y limitar acceso · versión: Guía HTML comprobada el 04-11-2026. Reducción del alcance de compromiso, no eliminación de vulnerabilidades; aplicación conceptual, sin carácter normativo para AGE. · comprobado: 2026-11-04

Partida: `9467ce1196d1421607b4cd2ce24c26581ffbb5ae7506414213164b8ddc62684b` · propuesta: `40ced4b2fbade9486dbd0c189c7aa2647297f4eaa56b31b8c9832922d3e20cad`

## AI-GSI-B4-T12-006

Decisión: pending_review · acción: revise.

Motivo: Conservar intermediación y clave C; precisar proxy HTTP explícito y distractores de funciones próximas de red.

### Antes

¿Qué función cumple un proxy?

- A. Reemplazar toda base de datos
- B. Solo suministrar energía
- C. Intermediar tráfico **(correcta)**
- D. Crear una identidad legal automáticamente

Explicación: La intermediación permite políticas según tipo y diseño del proxy.

### Propuesta

¿Qué función caracteriza a un proxy HTTP explícito utilizado por un cliente?

- A. Anunciar al cliente la ruta IP preferida hacia el servidor.
- B. Traducir direcciones IP sin procesar solicitudes HTTP.
- C. Recibir solicitudes del cliente y reenviarlas al servicio. **(correcta)**
- D. Resolver el nombre del servidor antes de cada conexión.

Explicación: Un proxy HTTP explícito actúa como intermediario elegido por el cliente: recibe solicitudes e intenta atenderlas o reenviarlas hacia el servicio. Puede aplicar políticas o usar caché según diseño. Esa función es distinta de resolver nombres, anunciar rutas o traducir direcciones; tampoco supone descifrar siempre TLS.

- Error A: Anunciar caminos es una función de routing; no describe recibir y reenviar mensajes HTTP como intermediario.
- Error B: Traducir direcciones es NAT; un proxy HTTP interviene en el intercambio de solicitudes y respuestas.
- Error D: DNS resuelve nombres a información de destino; no es el intermediario que procesa las solicitudes HTTP.

- [IETF: RFC9110, HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · §3.7 Intermediaries: proxy, gateway/reverse proxy y tunnel; §7.6 Message Forwarding · versión: Junio de 2022, HTML comprobado el 04-11-2026. El caso conceptual se limita a proxy HTTP explícito elegido por cliente; no todo intermediario descifra TLS o almacena caché. · comprobado: 2026-11-04

Partida: `4e24166af0dce1841274460a26ed7d853a1ab4e22c25a6039600411379cbbb4b` · propuesta: `a3049128d95e91271b70879220c13a406e8ad4cd511f516a1867cd036f1cac7b`

## AI-GSI-B4-T12-007

Decisión: pending_review · acción: revise.

Motivo: Conservar significado de AAA y clave D; alternativas paralelas y distinción de identidad, permisos y registro.

### Antes

¿Qué significa AAA?

- A. Aplicación, algoritmo y array
- B. Archivo, agregación y análisis exclusivamente
- C. Antena, amplificación y ancho de banda
- D. Autenticación, autorización y contabilidad o registro **(correcta)**

Explicación: AAA distingue identidad, permisos y trazabilidad o contabilización.

### Propuesta

¿Qué significa AAA?

- A. Autenticación, autorización y asignación de direcciones.
- B. Autenticación, auditoría y actualización de credenciales.
- C. Autorización, análisis y anonimización de conexiones.
- D. Autenticación, autorización y registro de la actividad. **(correcta)**

Explicación: AAA separa comprobar identidad, decidir acciones permitidas y registrar actividad o consumo: authentication, authorization y accounting. El detalle del registro depende del despliegue. Autenticar no concede por sí solo todos los permisos; contabilizar no equivale a capturar íntegramente una sesión ni garantiza no repudio.

- Error A: Asignar direcciones es una función como DHCP; accounting se refiere a actividad o consumo, no a direccionamiento.
- Error B: Actualizar credenciales es una tarea de gestión; además esta lista omite la autorización de acciones.
- Error C: Analizar o anonimizar conexiones no sustituye la autenticación y el accounting que forman parte de AAA.

- [IETF: RFC8907, TACACS+](https://www.rfc-editor.org/rfc/rfc8907.html) · §1 Introduction: AAA, Device Administration y separación de autenticación/autorización/accounting; §10 limitaciones de seguridad · versión: Informational, septiembre de 2020, HTML comprobado el 04-11-2026. No se atribuye exclusividad de administración a TACACS+ ni cifrado moderno a su ofuscación histórica. · comprobado: 2026-11-04

Partida: `fffdec6cf643f86bedd22d55a5c3b5aa73d44d83a090c1ecd9ddd677adb01479` · propuesta: `522fe866e7cf3a3b724977eed74a87ab4ec3921db61e68f55e4b23378398d144`

## AI-GSI-B4-T12-008

Decisión: pending_review · acción: revise.

Motivo: Conservar protocolo de AAA administrativo y clave C; eliminar ambigüedad de uso frecuente frente a RADIUS/SSH.

### Antes

¿Qué protocolo se asocia frecuentemente a administración de dispositivos?

- A. HDFS
- B. CoAP
- C. TACACS+ **(correcta)**
- D. SMTP

Explicación: TACACS+ es frecuente en administración; RADIUS se utiliza ampliamente en acceso de red.

### Propuesta

¿Qué protocolo AAA dispone de intercambios propios y separados de autenticación, autorización y accounting para administrar dispositivos?

- A. SSH
- B. RADIUS
- C. TACACS+ **(correcta)**
- D. SNMP

Explicación: TACACS+ separa autenticación, autorización y accounting en intercambios propios; ese diseño resulta útil para administrar dispositivos y autorizar o registrar comandos. RADIUS también puede usarse en administración, por lo que el uso frecuente no bastaría para distinguirlos. La especificación citada es informativa y advierte limitaciones de seguridad.

- Error A: SSH protege sesiones y puede transportar administración interactiva, pero no es la suite AAA separada descrita en RFC8907.
- Error B: RADIUS puede prestar AAA y acceso administrativo, pero no es el protocolo de intercambios separados definido en RFC8907.
- Error D: SNMP gestiona y supervisa información de dispositivos; no es la suite AAA de autenticación, autorización y accounting indicada.

- [IETF: RFC8907, TACACS+](https://www.rfc-editor.org/rfc/rfc8907.html) · §1 Introduction: AAA, Device Administration y separación de autenticación/autorización/accounting; §10 limitaciones de seguridad · versión: Informational, septiembre de 2020, HTML comprobado el 04-11-2026. No se atribuye exclusividad de administración a TACACS+ ni cifrado moderno a su ofuscación histórica. · comprobado: 2026-11-04

Partida: `74957cf1d4a6cc6c469e94bd180c4a12fba5fc97e680da8748483c78e99732d2` · propuesta: `1265941963fda93b5bd9c80ea27d48f5797fb36fa43c395b3e6faace8d9482a5`

## AI-GSI-B4-T12-009

Decisión: pending_review · acción: revise.

Motivo: Conservar identidad/MFA/PAM y clave B; escenario de atribución y control sin tratar un producto como garantía.

### Antes

¿Qué práctica protege accesos administrativos privilegiados?

- A. Una cuenta compartida pública
- B. Cuentas nominativas, MFA y bastión o PAM **(correcta)**
- C. Desactivar logs
- D. Telnet sin protección como opción preferida

Explicación: La administración requiere identidad, límites de privilegio y canales seguros.

### Propuesta

Un equipo debe administrar servidores sensibles y atribuir cada actuación a una persona. ¿Qué práctica refuerza ese control?

- A. Compartir una cuenta privilegiada y registrar su contraseña de uso.
- B. Usar cuentas individuales, MFA y acceso controlado mediante PAM. **(correcta)**
- C. Usar cuentas individuales con privilegios globales permanentes.
- D. Centralizar una contraseña común detrás de un bastión de acceso.

Explicación: Las cuentas individuales permiten atribuir acciones, MFA refuerza la autenticación y un PAM o bastión bien configurado controla y audita accesos privilegiados. Deben limitarse los permisos y su duración según la tarea. Ninguna herramienta garantiza seguridad por su nombre: importan configuración, custodia de credenciales y revisión de registros.

- Error A: Con una identidad compartida se dificulta atribuir cada acción; registrar la contraseña no demuestra quién realizó una operación.
- Error C: La identidad individual ayuda, pero el privilegio global permanente amplía el impacto de un compromiso y no respeta la necesidad de la tarea.
- Error D: El bastión aporta un punto de control, pero una credencial común no resuelve por sí sola atribución ni autenticación reforzada.

- [GSA: Privileged Identity Playbook](https://www.idmanagement.gov/playbooks/pam/) · Privileged Credential Management: identidad individual, MFA y estaciones dedicadas/bastion; Tools: control granular y auditoría · versión: Versión1.2 de 29-12-2022, HTML comprobado el 04-11-2026. Principios de control; no se trasladan obligaciones estadounidenses, AAL3 universal ni referencias normativas antiguas como vigentes en AGE. · comprobado: 2026-11-04

Partida: `9761d00782a0179ee2a89bbced1fbbab6f25e301f36c97c632c1c0e16a7c52e5` · propuesta: `c5c31841666e63067dbf79768b3feaf6aff34cc60b67e142e06083c855b48322`

## AI-GSI-B4-T12-010

Decisión: pending_review · acción: revise.

Motivo: Conservar eficiencia con secreto compartido y clave B; evitar equivalencia entre eficiencia y ausencia de gestión.

### Antes

¿Qué propiedad del cifrado simétrico favorece grandes volúmenes?

- A. Publicar la clave para descifrar
- B. Eficiencia usando una clave compartida **(correcta)**
- C. Ausencia de gestión de claves
- D. Necesidad de un certificado por cada byte

Explicación: La eficiencia no elimina necesidad de proteger y distribuir adecuadamente claves.

### Propuesta

¿Qué propiedad del cifrado simétrico favorece grandes volúmenes?

- A. Verifica firmas usando una clave pública distinta por bloque.
- B. Procesa los datos con eficiencia mediante una clave secreta. **(correcta)**
- C. Evita distribuir material de clave entre los interlocutores.
- D. Separa claves públicas de cifrado y privadas de descifrado.

Explicación: El cifrado simétrico resulta eficiente para proteger volúmenes grandes usando material secreto compartido entre partes autorizadas. Es habitual combinarlo con mecanismos de establecimiento o transporte de claves. Esa eficiencia no elimina la necesidad de custodiar, distribuir y renovar claves, ni permite deducir un rendimiento fijo sin medir la implementación.

- Error A: Verificar firmas con clave pública es una operación asimétrica distinta del cifrado simétrico de datos.
- Error C: El secreto compartido debe establecerse de forma segura; el cifrado simétrico no elimina esa necesidad.
- Error D: La pareja pública/privada describe criptografía asimétrica; en cifrado simétrico las operaciones usan la clave secreta compartida.

- [NIST CSRC: symmetric key algorithm](https://csrc.nist.gov/glossary/term/symmetric_key_algorithm) · Definitions: material secreto compartido y misma clave para operaciones complementarias · versión: Glosario HTML comprobado el 04-11-2026. Definición de cifrado simétrico, sin equiparar a firma o distribución de clave pública. · comprobado: 2026-11-04
- [Microsoft Learn: Cryptographic keys](https://learn.microsoft.com/en-us/windows/apps/develop/security/cryptographic-keys) · Symmetric keys; Asymmetric keys: coste comparativo y ejemplo de cifrado híbrido de mensaje y clave · versión: Documentación Windows Apps, HTML comprobado el 04-11-2026, cuerpo accesible pese al aviso de autorización de plantilla. No se recomiendan RC4/ECB ni todos los algoritmos históricos enumerados. · comprobado: 2026-11-04

Partida: `00d43440be65fa6ac72728e9f982097cfd703ea16e60f3ba48d70150fecc59c8` · propuesta: `ae8236c355dd3c27460de29b5376d1e7de9f601c96174098177112cc12a32efe`

## AI-GSI-B4-T12-011

Decisión: pending_review · acción: revise.

Motivo: Conservar evaluación integral de criptografía y clave D; precisar propiedades sin recomendaciones de algoritmos antiguos.

### Antes

¿Por qué no basta con afirmar que un sistema usa criptografía?

- A. Porque cifrar nunca es útil
- B. Porque criptografía sustituye configuración
- C. Porque toda clave es pública
- D. Importan algoritmos, modos, claves y protocolo **(correcta)**

Explicación: La seguridad depende de implementación y ciclo de vida de claves.

### Propuesta

¿Por qué no basta con afirmar que un sistema usa criptografía?

- A. Porque el tamaño de clave basta para comparar su seguridad.
- B. Porque el nombre del algoritmo acredita su uso correcto.
- C. Porque cifrar datos acredita también su integridad y origen.
- D. Porque importan diseño, parámetros, claves y protocolo usado. **(correcta)**

Explicación: La seguridad depende de cómo se integran algoritmos, modos, parámetros y claves en un protocolo y una implementación. Una clave expuesta o una configuración inadecuada puede anular la protección esperada. Se revisa todo el ciclo de vida; la mera presencia de cifrado no demuestra autenticación, integridad o resistencia del sistema completo.

- Error A: La longitud de clave es un factor, pero no resuelve exposición del secreto, errores de protocolo o modos inseguros.
- Error B: Elegir un algoritmo reconocido no demuestra que se hayan empleado bien parámetros, claves y controles de implementación.
- Error C: Confidencialidad no implica automáticamente integridad y origen autenticado; hay que comprobar las propiedades del mecanismo concreto.

- [NIST: Key Management FAQs](https://csrc.nist.gov/Projects/key-management/faqs) · Cryptographic Key Management: What is CKM? y Why is CKM important? · versión: HTML comprobado el 04-11-2026. Ciclo de generación, almacenamiento, distribución, uso y destrucción, algoritmos y protocolos. No se atribuye vigencia a todas las ediciones enlazadas. · comprobado: 2026-11-04

Partida: `145ce453ce3aa058ad73876c62d0c5125c56865beff4c51ec904d3c9477d5a0b` · propuesta: `f2c305a5573fe9ad1c3e588030e73c452da6722408df39bebaaadbffaf4fd07f`

## AI-GSI-B4-T12-013

Decisión: pending_review · acción: revise.

Motivo: Conservar verificación con pública del firmante y clave B; contextualizar validación del documento frente al certificado.

### Antes

¿Con qué se verifica una firma digital del firmante?

- A. La clave privada del destinatario
- B. Su clave pública o certificado **(correcta)**
- C. Una dirección MAC
- D. Su contraseña de inicio de sesión obligatoriamente

Explicación: Generar usa la privada del firmante; verificar usa su pública y controles de confianza.

### Propuesta

Se recibe un documento firmado y el certificado del firmante. ¿Con qué clave se comprueba la firma del documento, además de validar la identidad y confianza?

- A. Con la clave pública del receptor del documento.
- B. Con la clave pública vinculada al firmante esperado. **(correcta)**
- C. Con la clave privada que conserva el firmante.
- D. Con la clave pública de la autoridad emisora.

Explicación: La firma del documento se verifica con la clave pública correspondiente a la clave privada del firmante. Además hay que comprobar su vinculación con la identidad esperada. Si se usa un certificado, se revisan cadena de confianza, usos y vigencia aplicables; la clave de la autoridad verifica el certificado, no directamente esa firma del documento.

- Error A: La firma se corresponde con la clave privada del firmante, no con una pareja de claves del receptor.
- Error C: La clave privada se utiliza para generar la firma y debe mantenerse secreta; no se entrega al verificador.
- Error D: La autoridad firma el certificado; su clave pública verifica esa emisión, mientras la firma del documento se comprueba con la del firmante.

- [IETF: RFC5280, Internet X.509 Public Key Infrastructure Certificate and CRL Profile](https://www.rfc-editor.org/rfc/rfc5280.html) · §4.1.2.7 Subject Public Key Info; §4.2.1.3 Key Usage/digitalSignature; §6 Certification Path Validation · versión: Mayo de 2008, apartados HTML comprobados el 04-11-2026. Clave pública del sujeto para verificar; cadena vincula identidad/clave. No valoración legal eIDAS o recomendación de algoritmos históricos. · comprobado: 2026-11-04

Partida: `32cebc335aebc2a4ae4897eb08899ea3c83ce6c8c103ce1c739ecce772b5b75d` · propuesta: `7f94952e04e4cafa1de3428b89e52c653ab5166ed61d4557311622ebb9bad337`

## AI-GSI-B4-T12-014

Decisión: pending_review · acción: revise.

Motivo: Conservar SSH y clave A; acotar consola de shell para distinguir otros protocolos de administración seguros.

### Antes

¿Qué protocolo protege administración remota en el tema?

- A. SSH **(correcta)**
- B. HTTP sin TLS
- C. ARP
- D. Telnet sin protección

Explicación: SSH proporciona canal seguro para administración, frente a alternativas sin protección.

### Propuesta

¿Qué protocolo está diseñado para una consola de shell remota con canal protegido y autenticación?

- A. SSH **(correcta)**
- B. Telnet
- C. SNMP
- D. RADIUS

Explicación: SSH está diseñado para acceso remoto seguro y otros servicios sobre una red no confiable. Distingue protección del transporte, autenticación del usuario y canales de conexión. Para administrar hay que comprobar la identidad del servidor y aplicar autenticación y permisos adecuados; no basta con aceptar cualquier clave de host sin verificarla.

- Error B: Telnet básico no proporciona por sí mismo el canal cifrado y autenticado que se busca para la consola remota.
- Error C: SNMP permite gestión y supervisión, pero no es el protocolo de sesión de shell interactiva solicitado.
- Error D: RADIUS proporciona servicios de autenticación, autorización y accounting; no transporta una consola interactiva como SSH.

- [IETF: RFC4251, SSH Protocol Architecture](https://www.rfc-editor.org/rfc/rfc4251.html) · §1 Introduction: secure remote login, servidor/canal, autenticación de usuario y canales; §4.1 Host Keys · versión: Enero de 2006, HTML comprobado el 04-11-2026. Arquitectura SSH, no recomendación de cifrados antiguos. Autenticación del servidor y del usuario con políticas adecuadas. · comprobado: 2026-11-04

Partida: `c67e7b494f812a30b3b15b505ee63638bae0c466221d943cd6f8f1f622d9884a` · propuesta: `657129bb26857609aa00ac78299c262df26db0406723847d11a3c6e208fd71cf`

## AI-GSI-B4-T12-016

Decisión: pending_review · acción: revise.

Motivo: Conservar capas y escenarios distintos y clave D; precisar límites sin prometer cifrado universal.

### Antes

¿Qué distinción es correcta entre TLS e IPsec?

- A. IPsec es un formato de firma PDF
- B. Son sinónimos exactos
- C. TLS solo gestiona discos
- D. Actúan en capas y escenarios distintos **(correcta)**

Explicación: Ambos protegen comunicaciones, pero con arquitecturas diferentes.

### Propuesta

¿Qué distinción es correcta entre TLS e IPsec?

- A. TLS protege toda la capa IP; IPsec solo los mensajes HTTP.
- B. TLS e IPsec cubren el mismo tráfico con los mismos extremos.
- C. TLS requiere un túnel entre redes; IPsec una sesión de navegador.
- D. TLS protege un canal entre pares; IPsec actúa en la capa IP. **(correcta)**

Explicación: TLS protege un canal para protocolos superiores entre los pares que lo terminan, mientras IPsec aplica protección en la capa IP según extremos y políticas. Pueden usarse en escenarios distintos o combinarse. No todo TLS es web ni toda configuración IPsec aporta cifrado; hay que identificar qué tráfico y qué extremos quedan protegidos.

- Error A: Invierte los alcances: IPsec opera en IP y TLS puede servir a diversos protocolos superiores, no a toda la capa IP.
- Error B: Los límites de protección y los extremos dependen del despliegue; usar uno no hace idéntica su cobertura a la del otro.
- Error C: TLS no exige un túnel entre redes e IPsec no depende de una sesión de navegador; son restricciones inventadas.

- [IETF: RFC8446, TLS1.3](https://www.rfc-editor.org/rfc/rfc8446.html) · §1 Introduction: canal entre pares sobre flujo fiable ordenado, handshake/record y protocolos superiores · versión: Agosto de 2018, HTML comprobado el 04-11-2026. TLS no se limita a HTTP ni exige siempre certificados: admite PSK. Se usa alcance del canal, no equivalencia con protección de toda la red. · comprobado: 2026-11-04
- [IETF: RFC4301, Security Architecture for IP](https://www.rfc-editor.org/rfc/rfc4301.html) · §2.1 Goals/Objectives: servicios en capa IP; AH/ESP y selección por política · versión: Diciembre de 2005, HTML comprobado el 04-11-2026. Alcance de IPsec según extremos y política. No se afirma que todo uso cifre ni que sustituya seguridad de aplicación. · comprobado: 2026-11-04

Partida: `538a2c5ea333c0139a39197ae475dc581b917cc790723a81a9333e99959f2532` · propuesta: `833d073bd31bb9cc7cdd871c677fe31189e40528b083ddc052c27f720ac46512`
