# GSI-EDITORIAL-078 — revisión propuesta

Preparado: 2026-11-03. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `bb25cb933fc6f03adaae5ef7c130949a2e4264cc876a2628d0e8bd2d9b51125b`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T10-009

Decisión: pending_review · acción: revise.

Motivo: Conservar camino por etiquetas y clave A; distinguir recorrido, asociación, sesión y circuito físico.

### Antes

¿Qué representa un LSP?

- A. Camino de etiquetas **(correcta)**
- B. Un bloque de disco
- C. Una clave de cifrado
- D. Una dirección de correo

Explicación: Label Switched Path describe el camino seguido mediante etiquetas.

### Propuesta

¿Qué representa un LSP?

- A. Un recorrido direccional seguido por paquetes mediante etiquetas. **(correcta)**
- B. Una asociación global entre direcciones IP y valores de etiquetas.
- C. Una sesión de control que intercambia las etiquetas entre vecinos.
- D. Un circuito físico bidireccional reservado a una única aplicación.

Explicación: Un LSP es un camino de reenvío mediante etiquetas entre un ingreso y una salida, referido al nivel de pila correspondiente. Es direccional: no obliga a que la vuelta use el mismo recorrido. No es la sesión que distribuye etiquetas ni un circuito físico dedicado; los valores de etiqueta pueden cambiar a lo largo del trayecto.

- Error B: La asociación de una etiqueta no es un valor global de dirección; el LSP describe el camino seguido.
- Error C: Los protocolos de distribución establecen información de control; la sesión de control no es el recorrido de los paquetes.
- Error D: Un LSP no exige un medio físico exclusivo ni define por sí mismo ambos sentidos de comunicación.

- [IETF: RFC 3031, MPLS Architecture](https://www.rfc-editor.org/rfc/rfc3031.html) · §3.15 Label Switched Path, LSP Ingress y LSP Egress; §3.16 PHP · versión: Enero de 2001; apartados HTML comprobados de nuevo el 03-11-2026. LSP direccional y por nivel de pila, sin camino simétrico o valor de etiqueta global garantizados. · comprobado: 2026-11-03

Partida: `e78aabcd899c2c8a064b7d7f26ffc72dfd27fb34d3cca51d89cadbbeadd465b0` · propuesta: `1d505c0b502d492892db3ae74d56602db817f9c7199bc8c91de5e1dfc46d9fea`

## AI-GSI-B4-T10-010

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción aislamiento/cifrado y clave A; caso de contratación sin documentación criptográfica adicional.

### Antes

Contratar una VPN MPLS significa que el tráfico está cifrado por MPLS…

- A. No, MPLS no cifra por sí mismo **(correcta)**
- B. Sí, siempre con AES
- C. Sí, siempre con TLS
- D. Sí, sin necesidad de claves

Explicación: Aislamiento del servicio y cifrado son propiedades distintas.

### Propuesta

Se contrata una VPN MPLS sin especificar cifrado adicional. ¿Qué afirmación sobre su confidencialidad es correcta?

- A. El cifrado requiere un mecanismo adicional al aislamiento del servicio. **(correcta)**
- B. Las etiquetas cifran el contenido de los paquetes dentro del dominio.
- C. Separar tablas de rutas protege criptográficamente la carga útil.
- D. El transporte privado MPLS incluye cifrado de extremo a extremo.

Explicación: Una VPN MPLS puede aislar rutas y tráfico de clientes sin proporcionar confidencialidad criptográfica. Si se necesita proteger el contenido, hay que acordar y verificar un mecanismo adicional, por ejemplo IPsec o TLS según su alcance. Un servicio comercial puede incluirlo, pero no es consecuencia automática del forwarding MPLS.

- Error B: Las etiquetas identifican tratamiento de reenvío; no transforman el contenido mediante una clave criptográfica.
- Error C: Separar información de rutas no cifra los datos que recorren la red.
- Error D: El nombre privado no demuestra cifrado de extremo a extremo; hay que verificar las garantías del servicio.

- [IETF: RFC 4364, BGP/MPLS IP VPNs](https://www.rfc-editor.org/rfc/rfc4364.html) · §1.6 Security; §13 Security Considerations: ausencia de privacidad criptográfica intrínseca · versión: Febrero de 2006, HTML comprobado el 03-11-2026. Aislamiento y cifrado son propiedades distintas. Sustituye el candidato RFC4381 que respondió429; no se atribuye lectura de ese candidato. · comprobado: 2026-11-03

Partida: `5fbf4c083e5a357a64c00ffb1c575d187ff57173b564187383e15420b8e4ab39` · propuesta: `f7a22383dc792ed6f2ec93b2b9e401dd69c63214a6aa2e58f9704ee6065af15c`

## AI-GSI-B4-T10-011

Decisión: pending_review · acción: revise.

Motivo: Conservar relación subyacente/túneles y clave B; caso sobre transportes MPLS e Internet, sin igualar underlay a capa física.

### Antes

¿Qué diferencia underlay y overlay en SD-WAN?

- A. Datos de usuario frente a contraseñas exclusivamente
- B. Conectividad subyacente frente a red lógica de túneles **(correcta)**
- C. Son sinónimos
- D. Capa física frente a energía únicamente

Explicación: La política usa una red lógica sobre uno o varios transportes.

### Propuesta

Una SD-WAN establece túneles sobre un servicio MPLS y acceso a Internet. ¿Cómo se relacionan underlay y overlay?

- A. El underlay contiene las políticas; el overlay es el cableado contratado.
- B. El underlay aporta transporte; el overlay forma la red lógica sobre él. **(correcta)**
- C. El underlay es el tráfico del cliente; el overlay es su autenticación.
- D. El underlay es la red de gestión; el overlay es su configuración guardada.

Explicación: Los enlaces y la conectividad de transporte sostienen los túneles y la topología lógica del overlay. La política opera sobre esa abstracción, pero sigue dependiendo de alcance, capacidad y calidad del underlay. Distinguirlos no implica que el underlay sea solo cable físico o que el overlay elimine sus fallos.

- Error A: Invierte el papel de transporte y abstracción lógica; las políticas no definen por sí solas el underlay.
- Error C: Clasificar como datos o autenticación no describe la relación entre red subyacente y superpuesta.
- Error D: Gestión y configuración son funciones distintas de la distinción transporte/overlay.

- [Cisco: Catalyst SD-WAN Solution Overview](https://www.cisco.com/c/en/us/td/docs/routers/sdwan/26x-later/solution/cisco-catalyst-sd-wan-solution-overview/solution.html) · Transport side/service side; Overlay and underlay; Network planes y relación control/data plane · versión: Documentación 26.x y posteriores comprobada el 03-11-2026. Se usa arquitectura y dependencia de transportes. Se excluye la errata de una frase que atribuye user traffic al control plane, contradicha por el resto del cuerpo. · comprobado: 2026-11-03

Partida: `11ec21e4fb7ef51592f6d8f7e1e182006e116c99b8d495dc96826a5e89190733` · propuesta: `b3165807d4bd2d484169900232af27db27a4c56b20b9712c5e772e1f1008afd6`

## AI-GSI-B4-T10-013

Decisión: pending_review · acción: revise.

Motivo: Conservar coordinación/distribución de políticas y clave B; precisar control central sin equiparar todos los orquestadores a controladores de rutas.

### Antes

¿Qué función cumple el controlador u orquestador SD-WAN?

- A. Garantizar que ningún underlay falle
- B. Distribuir políticas **(correcta)**
- C. Crear capacidad física infinita
- D. Sustituir todo cifrado de aplicaciones

Explicación: La centralización de política sigue dependiendo de transportes y seguridad del sistema.

### Propuesta

¿Qué función caracteriza al control central de políticas en SD-WAN?

- A. Reenviar cada paquete de usuario por el controlador central.
- B. Coordinar políticas y distribuir información para su aplicación. **(correcta)**
- C. Garantizar la capacidad física de los enlaces de transporte.
- D. Cifrar el contenido de todas las aplicaciones de extremo a extremo.

Explicación: El control central puede coordinar políticas y distribuir información o sus resultados para que los bordes apliquen el comportamiento previsto. No tiene que transportar cada paquete de usuario. Gestión, control y orquestación pueden corresponder a componentes diferentes; por ejemplo, incorporación inicial y validación no son lo mismo que distribuir rutas.

- Error A: La centralización de control no exige que todo tráfico de usuario atraviese físicamente el controlador.
- Error C: El controlador depende de la capacidad de los transportes; no la crea ni la garantiza por gestionar políticas.
- Error D: La protección de túneles y de aplicaciones tiene alcances específicos; el control central no sustituye por sí solo el cifrado extremo a extremo.

- [Cisco: Catalyst SD-WAN Design Guide](https://www.cisco.com/c/en/us/td/docs/solutions/CVD/SDWAN/cisco-sdwan-design-guide.html) · Componentes Manager/Controller/Validator/WAN Edge; distribución de rutas y políticas; diseño de control · versión: Guía HTML comprobada el 03-11-2026. Ejemplo de producto con nombres actuales y previos; no son papeles idénticos ni obligación universal de topología o dependencia de un único nodo. · comprobado: 2026-11-03
- [Cisco: SD-WAN Policy Overview](https://www.cisco.com/c/en/us/td/docs/routers/sdwan/configuration/policies/vedge-20-x/policies-book/m-cisco-sd-wan-policy-framework-basics.html) · Centralized/Localized Policy; Centralized Control Policy Architecture, anuncios resultantes y política de datos · versión: Guía vEdge Release20, HTML comprobada el 03-11-2026. La política de control puede permanecer en controlador y distribuirse su resultado; no se afirma que toda política se copie literalmente al borde. · comprobado: 2026-11-03

Partida: `48b99b48aa81fe12a3813dc0f21d0e12b3b811ef3e423df02beb6d85e4a1a278` · propuesta: `dfa8e6785f36c336ebf4dd621da27ec6b15839a33f18cd3413724dec8980369d`

## AI-GSI-B4-T10-014

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de plataforma/control y clave B; precisar efectos sin afirmar caída universal de datos o dependencia obligatoria de operador único.

### Antes

¿Qué riesgo debe evaluarse al adoptar SD-WAN?

- A. Ausencia total de componentes críticos
- B. Dependencia de plataforma y del plano de control **(correcta)**
- C. Imposibilidad de usar varios enlaces
- D. Eliminación de variabilidad del underlay

Explicación: La abstracción no elimina riesgos operativos ni dependencia tecnológica.

### Propuesta

¿Qué riesgo debe evaluarse al adoptar SD-WAN?

- A. La desaparición de rutas locales al utilizar una consola central.
- B. La dependencia de plataforma, control y compatibilidad operativa. **(correcta)**
- C. La obligación de contratar enlaces físicos de un único operador.
- D. La eliminación de mecanismos de encaminamiento en los bordes.

Explicación: La adopción exige evaluar disponibilidad y seguridad de los componentes de control, versiones compatibles, gestión de claves, soporte y operación de la plataforma. La abstracción del transporte no elimina esas dependencias. Su impacto ante un fallo depende de arquitectura y configuración; no implica que caiga automáticamente todo el plano de datos.

- Error A: Gestionar centralmente no supone que desaparezca toda información o función local de rutas.
- Error C: SD-WAN puede integrar transportes de distintos operadores; un único proveedor físico no es una obligación inherente.
- Error D: Los bordes siguen reenviando y pueden ejecutar protocolos y políticas de routing; no desaparecen por usar SD-WAN.

- [Cisco: Catalyst SD-WAN Design Guide](https://www.cisco.com/c/en/us/td/docs/solutions/CVD/SDWAN/cisco-sdwan-design-guide.html) · Componentes Manager/Controller/Validator/WAN Edge; distribución de rutas y políticas; diseño de control · versión: Guía HTML comprobada el 03-11-2026. Ejemplo de producto con nombres actuales y previos; no son papeles idénticos ni obligación universal de topología o dependencia de un único nodo. · comprobado: 2026-11-03
- [Cisco: Catalyst SD-WAN Solution Overview](https://www.cisco.com/c/en/us/td/docs/routers/sdwan/26x-later/solution/cisco-catalyst-sd-wan-solution-overview/solution.html) · Transport side/service side; Overlay and underlay; Network planes y relación control/data plane · versión: Documentación 26.x y posteriores comprobada el 03-11-2026. Se usa arquitectura y dependencia de transportes. Se excluye la errata de una frase que atribuye user traffic al control plane, contradicha por el resto del cuerpo. · comprobado: 2026-11-03

Partida: `0855f9fcbb626a116a973a6cd1bad081bd6a06aaf92410aec107ddccd82af8ec` · propuesta: `8180685946ffdf81a6493f8c211b4cd199668e464c94000316212ae569526a14`

## AI-GSI-B4-T10-016

Decisión: pending_review · acción: revise.

Motivo: Conservar intercambio/convergencia y clave A; cuatro funciones de operación próximas y sin recuperación garantizada.

### Antes

¿Qué aportan protocolos de routing dinámico?

- A. Intercambio de información y convergencia tras cambios **(correcta)**
- B. Ausencia de toda configuración
- C. Cifrado automático del payload
- D. Capacidad óptica adicional

Explicación: El routing dinámico aprende y adapta rutas según protocolo y políticas.

### Propuesta

¿Qué aportan protocolos de routing dinámico?

- A. Intercambiar información de rutas y adaptarlas tras cambios. **(correcta)**
- B. Conservar rutas introducidas manualmente sin intercambio.
- C. Priorizar paquetes en cola sin modificar rutas aprendidas.
- D. Asignar direcciones IP a los terminales que se incorporan.

Explicación: Los protocolos dinámicos intercambian información para aprender rutas y ajustarlas cuando cambia lo que conocen de la red. La convergencia requiere detección, propagación y cálculo según protocolo y políticas. No es instantánea ni garantiza una ruta alternativa utilizable; la configuración y los límites siguen siendo necesarios.

- Error B: Describe rutas estáticas mantenidas por configuración, no aprendizaje mediante intercambio de protocolo.
- Error C: La planificación de colas es una función de tratamiento del tráfico, distinta del aprendizaje de rutas.
- Error D: Asignar parámetros a terminales es una función como DHCP, no el objetivo del routing dinámico.

- [IETF: RFC 2328, OSPF Version2](https://www.rfc-editor.org/rfc/rfc2328.html) · §1 Introduction: IGP, link-state/SPF y adaptación a cambios de topología · versión: Abril de 1998, apartado HTML comprobado el 03-11-2026. Identificación de OSPFv2; no se atribuye soporte IPv6 a esta versión ni se recomiendan autenticaciones históricas. · comprobado: 2026-11-03
- [IETF: RFC 4271, BGP-4](https://www.rfc-editor.org/rfc/rfc4271.html) · §3 Summary of Operation; §5.1.2 AS\_PATH; §9.1 Decision Process y políticas locales · versión: Enero de 2006, apartados HTML comprobados el 03-11-2026. Intercambio de alcance y atributos, políticas; ni menor distancia geográfica ni AS\_PATH mínimo constituyen una regla universal de elección. · comprobado: 2026-11-03

Partida: `fa8a7b1e57dda648bf201e6faeaf60cab516378c31eae7ab3ccd1feea97b6b60` · propuesta: `63240382ed0e50825321908f818c62d72fb5fce8a2470015ce700d486c5bc67b`

## AI-GSI-B4-T10-017

Decisión: pending_review · acción: revise.

Motivo: Conservar clasificación OSPF y clave D; cuatro familias de control de red, sin distractores ajenos.

### Antes

¿Qué tipo de protocolo es OSPF?

- A. Interfaz de almacenamiento
- B. Protocolo de aplicación de voz
- C. EGP de vector de camino
- D. IGP de estado de enlace **(correcta)**

Explicación: OSPF utiliza áreas, costes y cálculo SPF dentro de un dominio.

### Propuesta

¿Qué tipo de protocolo es OSPF?

- A. Un IGP basado en vector de distancias.
- B. Un EGP basado en vector de camino.
- C. Un protocolo de distribución de etiquetas.
- D. Un IGP basado en estado de enlace. **(correcta)**

Explicación: OSPF es un IGP de estado de enlace: distribuye información de topología y calcula caminos SPF dentro del dominio. Emplea costes y áreas, según diseño. La referencia OSPFv2 trata IPv4; no se deduce soporte IPv6 de ese texto. Ser dinámico no significa que toda decisión se tome contando saltos.

- Error A: Vector de distancias describe otra familia, como RIP; no la base de OSPF.
- Error B: Vector de camino y políticas caracteriza BGP, no OSPF como IGP.
- Error C: Distribuir asociaciones de etiquetas es otra función de control, no la clasificación del protocolo OSPF.

- [IETF: RFC 2328, OSPF Version2](https://www.rfc-editor.org/rfc/rfc2328.html) · §1 Introduction: IGP, link-state/SPF y adaptación a cambios de topología · versión: Abril de 1998, apartado HTML comprobado el 03-11-2026. Identificación de OSPFv2; no se atribuye soporte IPv6 a esta versión ni se recomiendan autenticaciones históricas. · comprobado: 2026-11-03

Partida: `164249f315d0b8b86b11770df57a8292a5507ba5ec4e660da4bb85e322682beb` · propuesta: `f160beabaa26e67a7457ac5660c9adcadbac12ba9ee9aebf7517a697733e2314`

## AI-GSI-B4-T10-018

Decisión: pending_review · acción: revise.

Motivo: Conservar vector de camino/políticas y clave B; acotar AS\_PATH y permitir iBGP sin regla mínima universal.

### Antes

¿Qué tipo de protocolo es BGP?

- A. Resolución de direcciones MAC
- B. Vector de camino orientado a políticas **(correcta)**
- C. Estado de enlace idéntico a OSPF
- D. Distribuidor de llamadas

Explicación: BGP utiliza atributos y AS-PATH, no una simple distancia mínima universal.

### Propuesta

¿Qué tipo de protocolo es BGP?

- A. Vector de distancias con elección basada en saltos de router.
- B. Vector de camino con atributos y políticas de selección. **(correcta)**
- C. Estado de enlace con una base topológica común y SPF.
- D. Asignación de etiquetas basada en la longitud del enlace físico.

Explicación: BGP intercambia alcance y atributos de camino entre speakers. AS\_PATH y las políticas permiten decidir qué rutas se aceptan, anuncian o prefieren. No se limita a minimizar saltos, distancia o latencia, y también existen sesiones internas iBGP. Su clasificación no equivale a la de un IGP de estado de enlace.

- Error A: Confunde BGP con el comportamiento clásico de vector-distancia y métrica de saltos de RIP.
- Error C: Una base de estado de enlace y cálculo SPF describe OSPF, no el mecanismo de BGP.
- Error D: El alcance BGP y sus atributos no se definen por medir un enlace físico para asignar etiquetas.

- [IETF: RFC 4271, BGP-4](https://www.rfc-editor.org/rfc/rfc4271.html) · §3 Summary of Operation; §5.1.2 AS\_PATH; §9.1 Decision Process y políticas locales · versión: Enero de 2006, apartados HTML comprobados el 03-11-2026. Intercambio de alcance y atributos, políticas; ni menor distancia geográfica ni AS\_PATH mínimo constituyen una regla universal de elección. · comprobado: 2026-11-03

Partida: `519314fc99476e7af278547cabd77a2dcf81c0d8adfb907e6f852a0286bd6c86` · propuesta: `6b13b8d64fafb843380480388be3a461ad6400d1d380d4230e680587065fcd9a`

## AI-GSI-B4-T10-019

Decisión: pending_review · acción: revise.

Motivo: Conservar métrica clásica de saltos y clave D; alternativas reales de métricas de ruta, sin asumir costes invariables.

### Antes

¿Qué métrica clásica utiliza RIP?

- A. Coste de licencia
- B. Temperatura del router
- C. Tamaño de disco
- D. Saltos **(correcta)**

Explicación: RIP es un protocolo vector-distancia con métrica de saltos.

### Propuesta

¿Qué métrica clásica utiliza RIP?

- A. Coste acumulado de ancho de banda.
- B. Retardo medido del trayecto completo.
- C. Utilización instantánea de cada interfaz.
- D. Número de saltos hasta el destino. **(correcta)**

Explicación: La métrica clásica de RIP cuenta saltos cuando se utiliza el coste habitual de una unidad por enlace. Selecciona rutas en ese modelo de vector-distancia, con límites de alcance y convergencia. No mide directamente velocidad, demora o utilización. Pueden existir costes configurados, por lo que se conserva el calificativo clásica.

- Error A: El ancho de banda no determina directamente la métrica clásica de RIP.
- Error B: Un número de saltos no equivale a medir el retardo del recorrido.
- Error C: La métrica clásica no se recalcula a partir de la carga instantánea de cada interfaz.

- [IETF: RFC 2453, RIP Version2](https://www.rfc-editor.org/rfc/rfc2453.html) · §3 Basic RIP: vector-distancia; §3.6 y entradas de tabla, coste habitual 1 y hop-count · versión: Noviembre de 1998, HTML comprobado el 03-11-2026. Métrica clásica de saltos con coste habitual 1; no se afirma que no admita costes configurados ni convergencia instantánea. · comprobado: 2026-11-03

Partida: `aef6ca312ab84a801b52928b21ec6197aa23f1225187b3995d3c3172107d2ac4` · propuesta: `e90483fe90c88d0dc51543f50d680bd549424bc66d4757fa7020890c570a5285`

## AI-GSI-B4-T10-020

Decisión: pending_review · acción: revise.

Motivo: Conservar el caso y clave B; cuatro conclusiones de independencia/riesgo con distinción SRLG.

### Antes

Dos enlaces lógicos comparten la misma fibra física. ¿Qué limitación existe?

- A. Son necesariamente independientes por tener distintas IP
- B. Un corte común puede afectar a ambos **(correcta)**
- C. Eliminan todo punto único de fallo
- D. Garantizan diversidad física

Explicación: La redundancia lógica debe contrastarse con recorridos y dominios de fallo físicos.

### Propuesta

Dos enlaces lógicos comparten la misma fibra física. ¿Qué limitación existe?

- A. La separación de direcciones impide un fallo común del soporte.
- B. Un fallo de la fibra puede interrumpir los dos enlaces lógicos. **(correcta)**
- C. La diversidad lógica añade un recorrido físico de protección.
- D. El riesgo común se limita a la configuración de los extremos.

Explicación: Los enlaces comparten un recurso físico cuyo fallo puede afectar a ambos. La redundancia lógica no acredita diversidad de fibra, conducto, alimentación o punto de entrada. Deben revisarse los dominios comunes de fallo; incluso fibras distintas pueden compartir riesgo si recorren el mismo conducto.

- Error A: Direcciones distintas identifican conexiones lógicas, sin independizar el recurso físico compartido.
- Error C: Crear otro enlace lógico no instala un recorrido físico alternativo.
- Error D: La fibra del caso ya es un recurso común además de los equipos o configuraciones que puedan compartirse.

- [IETF: RFC 4202, Routing Extensions for GMPLS](https://www.rfc-editor.org/rfc/rfc4202.html) · §2.3 Shared Risk Link Group Information: recurso compartido cuyo fallo afecta varios enlaces · versión: Octubre de 2005, apartado HTML comprobado el 03-11-2026. Ejemplo de fibras en un conducto; se aplica el concepto de riesgo común, sin implementar extensiones GMPLS. · comprobado: 2026-11-03

Partida: `ecd84102a30887b1318d8c008c57d31384df63bc723015c9a62589bc82d91665` · propuesta: `6550f6979348b44513afd4616bf04aca7037bfa1f160eed03a2c66cd50b103cb`

## AI-GSI-B4-T11-002

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta y clave B; cuatro enmiendas WLAN comparables, con edición/publicación diferenciadas.

### Antes

¿Qué estándar corresponde a Wi-Fi 7?

- A. IEEE 802.1Q
- B. IEEE 802.11be **(correcta)**
- C. IEEE 802.11ac
- D. IEEE 802.11n

Explicación: 802.11be incorpora mejoras de capacidad y flexibilidad de enlace.

### Propuesta

¿Qué estándar corresponde a Wi-Fi 7?

- A. IEEE 802.11ax.
- B. IEEE 802.11be. **(correcta)**
- C. IEEE 802.11ac.
- D. IEEE 802.11n.

Explicación: Wi-Fi 7 se asocia a IEEE 802.11be, la enmienda de rendimiento extremadamente alto. El documento se denomina 802.11be-2024 y fue publicado en julio de 2025. La denominación de generación y la certificación de producto pertenecen al ámbito industrial; no demuestran todas las prestaciones opcionales en cualquier equipo.

- Error A: 802.11ax corresponde a la generación Wi-Fi 6, incluida su evolución hacia uso de 6 GHz, no a Wi-Fi 7.
- Error C: 802.11ac se asocia a Wi-Fi 5; no identifica la enmienda Wi-Fi 7.
- Error D: 802.11n se asocia a Wi-Fi 4, una generación anterior.

- [IEEE: 802.11 Working Group](https://www.ieee802.org/11/) · Recent standards approvals y referencia a IEEE 802.11be-2024 como Wi-Fi 7 · versión: Página pública comprobada el 03-11-2026. Publicación de802.11be-2024 el22-07-2025; nombre de edición no es fecha de publicación. No lectura del texto normativo completo. · comprobado: 2026-11-03
- [IEEE: Overview of 802.11 Working Group](https://ieee802.org/11/overview.html) · Tabla de tareas: MAC/PHY, TGn/TGac/TGax/TGbe y revisiones integradas · versión: HTML comprobado el 03-11-2026. Identificación del alcance y generaciones, no lectura completa de cada norma. Las previsiones antiguas de TGbf/TGbk no se usan como estado actual. · comprobado: 2026-11-03

Partida: `2b1539f20cbfa41e59abadcd42fb6248e015f857f5778327ee1aede271a0cccc` · propuesta: `d5760297ed4ca391bdb870b1ed33d782d88c4311a2dc83bda996dacc909a3eb8`

## AI-GSI-B4-T11-003

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción industria/estándar y clave D; alternativas que confunden roles próximos sin atribuir regulación a IEEE/WFA.

### Antes

¿Qué diferencia denominación Wi-Fi y estándar IEEE?

- A. IEEE define únicamente denominaciones comerciales
- B. Wi-Fi define por sí solo toda regulación de espectro
- C. Ambos identifican al fabricante del punto de acceso
- D. La primera es de industria o certificación; IEEE define PHY/MAC **(correcta)**

Explicación: Debe distinguirse denominación comercial y especificación técnica.

### Propuesta

¿Qué diferencia denominación Wi-Fi y estándar IEEE?

- A. Wi-Fi es la norma PHY/MAC; IEEE acredita cada equipo comercial.
- B. Wi-Fi asigna el espectro mundial; IEEE elige el país de operación.
- C. Wi-Fi identifica al fabricante; IEEE identifica al operador de red.
- D. Wi-Fi es denominación/certificación industrial; IEEE especifica PHY/MAC. **(correcta)**

Explicación: IEEE 802.11 especifica mecanismos PHY/MAC de WLAN; Wi-Fi Alliance utiliza denominaciones industriales y programas de certificación de interoperabilidad. Son funciones relacionadas pero distintas. El nombre de una generación no equivale a demostrar certificación o soporte de toda opción, ni concede permiso regulatorio para usar cualquier frecuencia.

- Error A: Invierte la especificación técnica y el papel del programa de certificación de equipos.
- Error B: La regulación del espectro depende de las autoridades competentes, no se asigna mundialmente por esas dos funciones.
- Error C: Las denominaciones no son los nombres del fabricante u operador de un despliegue concreto.

- [IEEE: Overview of 802.11 Working Group](https://ieee802.org/11/overview.html) · Tabla de tareas: MAC/PHY, TGn/TGac/TGax/TGbe y revisiones integradas · versión: HTML comprobado el 03-11-2026. Identificación del alcance y generaciones, no lectura completa de cada norma. Las previsiones antiguas de TGbf/TGbk no se usan como estado actual. · comprobado: 2026-11-03
- [Wi-Fi Alliance: introduces Wi-Fi CERTIFIED7](https://www.globenewswire.com/news-release/2024/01/08/2805409/0/en/wi-fi-alliance-introduces-wi-fi-certified-7.html) · Comunicado del emisor Wi-Fi Alliance: Advanced features, Multi-Link Operation y programa de certificación · versión: Comunicado primario de08-01-2024 alojado en su distribuidor, comprobado el 03-11-2026. Certificación industrial distinta del estándar IEEE; no se adoptan pronósticos comerciales o promesas de caudal como garantías. · comprobado: 2026-11-03

Partida: `f91f83804ab1d62b332566fbe8804ad477ea8ef65422237e3fb8413100888ae6` · propuesta: `dcc13dfbba4cba0ab74d8056ecf085bb8734c8a8353922532af1047a42074a92`

## AI-GSI-B4-T11-004

Decisión: pending_review · acción: revise.

Motivo: Conservar compromiso de 2,4 GHz y clave D; condiciones comparables, sin prometer alcance o interferencia universal.

### Antes

¿Qué compromiso habitual presenta 2,4 GHz?

- A. Uso exclusivo por fibra
- B. Menor propagación siempre que 6 GHz
- C. Capacidad infinita sin interferencias
- D. Mayor propagación, con menos espectro y más interferencia **(correcta)**

Explicación: La banda puede cubrir más, pero limita reutilización y capacidad.

### Propuesta

¿Qué compromiso habitual presenta 2,4 GHz?

- A. Menor alcance potencial y más canales sin solapamiento.
- B. Menor alcance potencial y menos interferentes de otros equipos.
- C. Mayor alcance potencial y más espectro para canales anchos.
- D. Mayor alcance potencial y más contención en espectro limitado. **(correcta)**

Explicación: En condiciones comparables, 2,4 GHz suele ofrecer mayor alcance de propagación que bandas más altas. Ese alcance comparte un espacio con menos espectro utilizable y muchos posibles interferentes, lo que puede limitar capacidad y reutilización. Potencias, antenas, obstáculos y regulación condicionan el resultado; no es una cobertura garantizada.

- Error A: Invierte el compromiso típico de propagación y disponibilidad de canales de 2,4 GHz.
- Error B: No es el comportamiento típico de esta banda, utilizada por numerosos dispositivos y tecnologías.
- Error C: El alcance potencial no viene acompañado de mayor espectro para canales anchos; esa es precisamente una limitación.

- [Cisco: Wireless High Client Density Design Guide](https://www.cisco.com/c/en/us/td/docs/wireless/controller/technotes/8-7/b_wireless_high_client_density_design_guide.html) · 2.4GHz radio y Cell Size: propagación, espectro limitado e interferentes; tasas/SNR · versión: Guía8.7 histórica, HTML comprobada el 03-11-2026. Se usan compromisos físicos; no se impone desactivar2.4GHz, tipos de seguridad antiguos o cifras de canales como regla de todas las regiones. · comprobado: 2026-11-03

Partida: `1a6c4a8091ebf482945115476fdb4c0074740cb60987fc746230abc3d42f3216` · propuesta: `44bf3785fd60c05f2a96c21658f360b79f7b40152e0c0ee1a6dfd28fd9410c81`

## AI-GSI-B4-T11-006

Decisión: pending_review · acción: revise.

Motivo: Conservar compromiso anchura/reutilización y clave C; caso de alta densidad sin imponer20MHz a todo despliegue.

### Antes

¿Por qué un canal más ancho no siempre mejora alta densidad?

- A. Porque impide todo roaming
- B. Porque elimina interferencia automáticamente
- C. Consume espectro y puede perjudicar reutilización **(correcta)**
- D. Porque reduce siempre la velocidad física a cero

Explicación: La capacidad agregada depende de planificación, no solo del pico de un enlace.

### Propuesta

En un recinto con muchos AP cercanos se plantea ensanchar todos los canales. ¿Por qué puede empeorar la capacidad agregada?

- A. Porque disminuye el número de flujos espaciales admitidos.
- B. Porque reduce las subportadoras de datos de cada transmisión.
- C. Porque ocupa más espectro y deja menos canales reutilizables. **(correcta)**
- D. Porque hace que la tasa PHY dependa solo de la señal recibida.

Explicación: Un canal más ancho puede aumentar la tasa de un enlace, pero consume más espectro y reduce la reutilización entre celdas próximas. En alta densidad debe evaluarse la capacidad agregada, la contención y la demanda, no solo el pico de un cliente. El ancho óptimo depende de entorno, banda, equipos y disponibilidad de canales.

- Error A: El ancho de canal no determina por sí solo el número de flujos espaciales; intervienen capacidades y condiciones de MIMO.
- Error B: Al ensanchar un canal se dispone de más subportadoras, no de menos; su organización depende del modo PHY.
- Error D: La tasa PHY depende también de anchura, modulación, codificación y flujos; no pasa a depender solo de la señal por ensanchar el canal.

- [Cisco: Wireless for Large Public Networks](https://www.cisco.com/c/en/us/support/docs/wireless/catalyst-9800-series-wireless-controllers/222000-design-guide-cx-wireless-for-large-pub.html) · Apartados2.4/5/6GHz: anchura y reutilización; Data rates y SNR · versión: Revisión8.0 de03-03-2026, HTML comprobada el 03-11-2026. Se usa compromiso de anchura/reutilización; no se universalizan20MHz, prohibiciones de canales grandes, cifras regionales o necesidad de otro radio para todo6GHz. · comprobado: 2026-11-03

Partida: `f16c51dc0f77c859aa277c366f06c3a6eb1c0e4bdff4ce704efbb7037944e7d2` · propuesta: `09d96529bad1cbb982c37c97b9327c34a0151fcd66bac83155ecca4579943aca`

## AI-GSI-B4-T11-007

Decisión: pending_review · acción: revise.

Motivo: Conservar reparto eficiente y clave D; cuatro mecanismos de asignación WLAN, delimitando RU frente a espacio/enlace.

### Antes

¿Qué hace OFDMA?

- A. Sustituye todas las antenas por una
- B. Oculta SSID
- C. Cifra contraseñas
- D. Divide recursos entre estaciones para uso más eficiente **(correcta)**

Explicación: La asignación de recursos ayuda a atender múltiples estaciones.

### Propuesta

¿Qué hace OFDMA?

- A. Asignar canales completos a cada estación durante toda su asociación.
- B. Repartir flujos espaciales entre clientes usando las mismas frecuencias.
- C. Seleccionar un trayecto entre bandas mediante enlaces de una asociación.
- D. Asignar grupos de subportadoras a estaciones en una transmisión. **(correcta)**

Explicación: OFDMA permite repartir grupos de subportadoras como unidades de recursos entre estaciones por transmisión. Añade una dimensión de asignación en frecuencia al uso temporal del medio. Puede mejorar eficiencia con varias estaciones compatibles, pero no elimina toda contención ni garantiza un caudal fijo; no equivale a MU-MIMO o MLO.

- Error A: La asignación por transmisión no reserva un canal completo a una estación durante toda su asociación.
- Error B: Separar señales en el espacio es la dimensión de MU-MIMO, distinta de las unidades de frecuencia OFDMA.
- Error C: Coordinar varios enlaces se asocia a MLO; no define el reparto de subportadoras dentro de una transmisión.

- [Cisco: IEEE 802.11ax, Sixth Generation of Wi-Fi](https://www.cisco.com/c/en/us/products/collateral/wireless/white-paper-c11-740788.html) · §3.3.1 OFDMA: resource units, separación frecuencia/tiempo y comparación espacial · versión: White paper HTML comprobado el 03-11-2026. Grupos de subportadoras asignados por transmisión; no se promete eliminar contención, colisiones o garantizar QoS por OFDMA. · comprobado: 2026-11-03

Partida: `8f89100b39c4bbdce05a6e6a9d6b976e03cce41d3d20ecadf6ae841b4dd82c9f` · propuesta: `86e640c50daeee66d466cb4029f5f055104a98a2031da28051fe9222ff1621b0`

## AI-GSI-B4-T11-008

Decisión: pending_review · acción: revise.

Motivo: Conservar múltiples antenas/flujos y clave D; distinguir dimensiones de frecuencia, enlace, tiempo y espacio.

### Antes

¿Qué aporta MIMO?

- A. Una copia de configuración
- B. Un servidor DHCP
- C. Autenticación jurídica
- D. Múltiples antenas y flujos **(correcta)**

Explicación: MIMO explota varias antenas o streams según el sistema.

### Propuesta

¿Qué aporta MIMO?

- A. Dividir un canal en grupos de subportadoras para cada estación.
- B. Distribuir tráfico entre varios enlaces o bandas de una asociación.
- C. Reducir la ventana de contención para priorizar una categoría.
- D. Procesar señales con varias antenas y posibles flujos espaciales. **(correcta)**

Explicación: MIMO utiliza múltiples entradas y salidas de radio para procesar señales espacialmente. Puede explotar diversidad o multiplexación de flujos según capacidades y condiciones. El número de antenas no garantiza igual número de flujos ni multiplica por sí solo el caudal: intervienen cliente, canal, señal y modo utilizado.

- Error A: Describe una asignación de frecuencia tipo OFDMA, no el procesamiento espacial propio de MIMO.
- Error B: El uso coordinado de varios enlaces caracteriza MLO; varias antenas no implican esas asociaciones.
- Error C: Ajustar contención por categoría es un mecanismo de acceso/QoS, distinto de MIMO.

- [Cisco: Wireless RF Reference Guide](https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/technical-reference/wireless-rf-reference-guide.html) · Brief overview of MIMO, multipath and MU-MIMO; spatial streams y nomenclatura Tx/Rx/streams · versión: HTML comprobado el 03-11-2026. Múltiples antenas y procesamiento espacial; no se iguala siempre número de antenas, flujos negociados y multiplicación de caudal. · comprobado: 2026-11-03

Partida: `5afe1d810ab3c0110cefdc40e1ac4376e9cbb139f3da583c3e48d9ef3fb719e9` · propuesta: `d8077921b3e512c72ea0b9ff0c8c9a13ae3f2b149c3e888580ef08482822df09`

## AI-GSI-B4-T11-009

Decisión: pending_review · acción: revise.

Motivo: Conservar mayor SNR y clave D; caso de más bits por símbolo con tasa de error comparable, sin umbral universal.

### Antes

Una modulación más densa suele requerir…

- A. Solo un nombre de red más corto
- B. Ausencia de señal
- C. Menos calidad de enlace siempre
- D. Mayor relación señal/ruido **(correcta)**

Explicación: Más bits por símbolo exige condiciones de señal adecuadas.

### Propuesta

Se quiere aumentar la densidad de modulación manteniendo un objetivo de error comparable. ¿Qué condición suele requerirse?

- A. Aumentar el tiempo de escucha sin cambiar la señal recibida.
- B. Disminuir la relación señal/ruido para separar los símbolos.
- C. Mantener la misma calidad exigida al usar más bits por símbolo.
- D. Disponer de mayor calidad de señal para distinguir los símbolos. **(correcta)**

Explicación: Una constelación más densa sitúa más símbolos en el espacio de señal. A condiciones comparables y objetivo de error similar suele necesitar mayor relación señal/ruido para distinguirlos. Cambiar codificación, canal u otros parámetros modifica el requisito; no existe un único umbral que garantice toda modulación en cualquier equipo.

- Error A: La espera de acceso no compensa por sí sola la calidad necesaria para distinguir una constelación más densa.
- Error B: Menor SNR dificulta distinguir los puntos próximos, en lugar de facilitarlo.
- Error C: Más bits por símbolo pueden exigir mejor señal para un error comparable; no mantiene necesariamente el requisito anterior.

- [Cisco Meraki: Wi-Fi 7 Technical Guide](https://documentation.meraki.com/Wireless/Design_and_Configure/Architecture_and_Best_Practices/Wi-Fi_7_%28802.11be%29_Technical_Guide) · 4K QAM, exigencia de SNR; Multi-link Operation y compatibilidad AP/cliente · versión: HTML comprobado el 03-11-2026. Se usan más bits por símbolo y enlaces compatibles; no umbral universal42dB, radio fijo, simultaneidad obligatoria, ganancias4X o prestaciones idénticas en todo cliente. · comprobado: 2026-11-03
- [Cisco: Wireless for Large Public Networks](https://www.cisco.com/c/en/us/support/docs/wireless/catalyst-9800-series-wireless-controllers/222000-design-guide-cx-wireless-for-large-pub.html) · Apartados2.4/5/6GHz: anchura y reutilización; Data rates y SNR · versión: Revisión8.0 de03-03-2026, HTML comprobada el 03-11-2026. Se usa compromiso de anchura/reutilización; no se universalizan20MHz, prohibiciones de canales grandes, cifras regionales o necesidad de otro radio para todo6GHz. · comprobado: 2026-11-03

Partida: `0c7324c963c0522cb5798bf6d8628dec681d80bdd93a74836b6b1a12c135c7ba` · propuesta: `b0fa44e8d569b51b93f147a469b4176f0b3a23a403caf73f4713df97777a5732`

## AI-GSI-B4-T11-010

Decisión: pending_review · acción: revise.

Motivo: Conservar operación multienlace y clave B; evitar simultaneidad o compatibilidad universal de todo equipo Wi-Fi 7.

### Antes

¿Qué mejora se asocia a MLO en Wi-Fi 7?

- A. Uso exclusivo de Ethernet
- B. Operación mediante múltiples enlaces **(correcta)**
- C. Supresión de autenticación
- D. Desactivación obligatoria de todos los enlaces salvo uno

Explicación: Multi-Link Operation aporta flexibilidad de conexión entre enlaces compatibles.

### Propuesta

¿Qué mejora se asocia a MLO en Wi-Fi 7?

- A. Agregar flujos espaciales dentro de un único canal de radio.
- B. Coordinar la operación mediante varios enlaces compatibles. **(correcta)**
- C. Asignar grupos de subportadoras en una sola transmisión.
- D. Fijar una ruta IP entre los clientes de la misma red inalámbrica.

Explicación: MLO permite que dispositivos compatibles coordinen una asociación con varios enlaces. Según modo, hardware y condiciones pueden repartirse transmisiones o aprovecharse enlaces de forma simultánea. No obliga a que cualquier cliente use todas las bandas a la vez ni sustituye autenticación. Su alcance es distinto de sumar antenas o asignar RU.

- Error A: Multiplexar flujos en el espacio dentro de un canal describe MIMO, no la coordinación de enlaces MLO.
- Error C: Asignar unidades de subportadoras es OFDMA, aunque pueda coexistir con MLO.
- Error D: Elegir rutas IP no define el mecanismo de operación multienlace de la asociación Wi-Fi.

- [Wi-Fi Alliance: introduces Wi-Fi CERTIFIED7](https://www.globenewswire.com/news-release/2024/01/08/2805409/0/en/wi-fi-alliance-introduces-wi-fi-certified-7.html) · Comunicado del emisor Wi-Fi Alliance: Advanced features, Multi-Link Operation y programa de certificación · versión: Comunicado primario de08-01-2024 alojado en su distribuidor, comprobado el 03-11-2026. Certificación industrial distinta del estándar IEEE; no se adoptan pronósticos comerciales o promesas de caudal como garantías. · comprobado: 2026-11-03
- [Cisco Meraki: Wi-Fi 7 Technical Guide](https://documentation.meraki.com/Wireless/Design_and_Configure/Architecture_and_Best_Practices/Wi-Fi_7_%28802.11be%29_Technical_Guide) · 4K QAM, exigencia de SNR; Multi-link Operation y compatibilidad AP/cliente · versión: HTML comprobado el 03-11-2026. Se usan más bits por símbolo y enlaces compatibles; no umbral universal42dB, radio fijo, simultaneidad obligatoria, ganancias4X o prestaciones idénticas en todo cliente. · comprobado: 2026-11-03

Partida: `929cf0a2f1ef938997d4ed7934f9c0c62b95a5450b7a700b1eb62716da9ea7a0` · propuesta: `c1b00389c1d4cdbd65e5b92d03ade0f071f6aa8ecdfe00acc48a36bbaee78933`

## AI-GSI-B4-T11-011

Decisión: pending_review · acción: revise.

Motivo: Conservar CSMA/CA y clave B; delimitar modelo de contención frente a accesos coordinados de WLAN modernas.

### Antes

¿Qué método de acceso usa Wi-Fi en el modelo descrito?

- A. Token Ring obligatorio
- B. CSMA/CA **(correcta)**
- C. CSMA/CD como Ethernet compartida
- D. Acceso sin contención ni coordinación

Explicación: Wi-Fi evita colisiones mediante escucha y contención, no su detección como Ethernet half-duplex.

### Propuesta

¿Qué método utiliza el acceso distribuido por contención en una WLAN Wi-Fi?

- A. Paso de testigo entre estaciones.
- B. CSMA/CA con contención del medio. **(correcta)**
- C. CSMA/CD con detección al transmitir.
- D. Reserva de un canal físico por cliente.

Explicación: En el acceso distribuido por contención de Wi-Fi se utiliza CSMA/CA: escucha y espera regulan intentos para reducir colisiones. No las elimina ni las detecta como Ethernet half-duplex mientras transmite. Existen accesos coordinados y otros mecanismos; se pregunta por la contención distribuida, no por toda transmisión Wi-Fi posible.

- Error A: El reparto mediante testigo pertenece a otro modelo de acceso y no describe la contención Wi-Fi.
- Error C: CSMA/CD detecta colisiones del Ethernet compartido; no es el mecanismo de contención WLAN descrito.
- Error D: La asociación a un AP no reserva un canal físico independiente para cada cliente.

- [Cisco: QoS over Wireless9800, Quick Reference](https://www.cisco.com/c/en/us/support/docs/wireless/catalyst-9800-series-wireless-controllers/221906-understand-troubleshoot-qos-over-wirel.html) · WMM Queues and EDCA: CSMA/CA, escucha y backoff de contención · versión: Actualizado06-04-2025, ejemplo IOS XE17.12; HTML comprobado el 03-11-2026. Se usa método de contención; se excluyen simplificaciones de detección de colisiones o ACK para toda clase de trama, y no se generaliza QoS de producto. · comprobado: 2026-11-03
- [Cisco: IEEE 802.11ax, Sixth Generation of Wi-Fi](https://www.cisco.com/c/en/us/products/collateral/wireless/white-paper-c11-740788.html) · §3.3.1 OFDMA: resource units, separación frecuencia/tiempo y comparación espacial · versión: White paper HTML comprobado el 03-11-2026. Grupos de subportadoras asignados por transmisión; no se promete eliminar contención, colisiones o garantizar QoS por OFDMA. · comprobado: 2026-11-03

Partida: `b0784dc3eb57e70cb9a84a19f1ca4580d84974420a27133e83a3bc8b3362a120` · propuesta: `d85e57c63fc75fb5b4ec3d26845ce6116010c0b69d5454cf3137dc4d236f50ac`

## AI-GSI-B4-T11-012

Decisión: pending_review · acción: revise.

Motivo: Conservar mitigación de nodos ocultos y clave C; caso de dos estaciones que oyen al AP pero no entre sí.

### Antes

¿Qué problema puede mitigar RTS/CTS?

- A. Fallo de disco
- B. Duplicación de claves de base de datos
- C. Nodos ocultos **(correcta)**
- D. Borrado lógico de datos

Explicación: El intercambio ayuda a coordinar acceso cuando estaciones no se oyen mutuamente.

### Propuesta

Dos estaciones oyen al AP pero no se oyen entre sí. ¿Qué efecto puede mitigar RTS/CTS en ese caso?

- A. La ocupación causada por una fuente de ruido no cooperante.
- B. La degradación por pérdida de señal al cruzar un obstáculo.
- C. Las colisiones entre emisores que no se oyen mutuamente. **(correcta)**
- D. La ausencia de direcciones IP asignadas a los terminales.

Explicación: Cuando dos emisores oyen al receptor pero no se oyen entre sí, pueden transmitir simultáneamente y colisionar en él. RTS/CTS puede reservar el medio para quienes reciben las tramas de control y reducir ese efecto. Añade sobrecarga y no resuelve todo escenario de nodos ocultos, ruido o cobertura deficiente.

- Error A: Una fuente ajena que no interpreta la reserva no queda obligada a detenerse por RTS/CTS.
- Error B: El intercambio no recupera potencia perdida ni elimina la atenuación del obstáculo.
- Error D: La configuración IP es independiente de reservar el medio radio frente a emisores ocultos.

- [Huawei: Checking RTS-CTS Parameters](https://info.support.huawei.com/network/ptmngsys/Web/tsrev_wlan/en/content/wlan/19_edesk_wlan_wds_rate_is_slow/edesk_wlan_wds_rate_is_slow_edesk005.html) · Context: RTS/CTS frente a nodos ocultos; coste de control y umbral dependiente del sitio · versión: Guía V200R005/V200R006 y posteriores, HTML comprobada el 03-11-2026. Se usa mitigación y coste, sin ejecutar comandos. Se excluye la frase que llama IP al direccionamiento del CTS y garantías de eliminar todo conflicto. · comprobado: 2026-11-03
- [INET Framework: Hidden Node Problem](https://inet.omnetpp.org/docs/showcases/wireless/hiddennode/doc/index.html) · Goals; Description of hidden node problem: nodos que oyen un tercero pero no entre sí; limitaciones RTS/CTS · versión: Documentación primaria del modelo, verificada para INET4.6, HTML leída el 03-11-2026. Ejemplo explicativo, sin ejecutar la simulación ni presentar sus resultados como medición de nuestra aplicación o red. · comprobado: 2026-11-03

Partida: `e73373d2c5ac82b680e7dc5a2bf645df4d5cf11b0354e5aad35b35669c515776` · propuesta: `fced0144a1d7483bb023bbbf4ab2f6f8501abd6cd18c78800b2a5e1e875a2250`
