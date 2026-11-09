# GSI-EDITORIAL-007 — revisión propuesta

Preparado: 2026-10-26. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `5d1b4794a830cb8d15a910659fce5352509222fa045d74dd46ecb0b5594c250d`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T09-002

Decisión: pending_review · acción: revise.

Motivo: Conservar información operativa, ubicación, versión, interfaces y dependencias, diferenciándola de inventario económico o identificación basada solo en IP.

### Antes

¿Qué debe conservar el inventario de un dispositivo de red?

- A. Solo número de puertos, sin versión ni soporte
- B. Ubicación, versión, interfaces, gestión y dependencias **(correcta)**
- C. Únicamente IP sin interfaces ni ubicación
- D. Solo fabricante y fecha de compra

Explicación: El inventario apoya operación, soporte, cambios y recuperación.

### Propuesta

¿Qué información debe conservar un inventario operativo de dispositivos de red para apoyar cambios y recuperación?

- A. Precio, proveedor y fecha de compra como descripción completa del dispositivo.
- B. Identidad, ubicación, versión, interfaces, gestión, dependencias y soporte. **(correcta)**
- C. Dirección IP y acceso actual como sustitutos de identidad física e historial.
- D. Marca y número de puertos como evidencia de versión y configuración vigentes.

Explicación: El inventario debe identificar el activo y relacionarlo con su ubicación, versión, interfaces, administración, dependencias y soporte. Esto permite saber qué se cambia o recupera y qué servicios pueden verse afectados; una dirección IP o una ficha de compra no describe por sí sola su estado operativo.

- Error A: Los datos de compra apoyan gestión económica, pero no acreditan versión instalada, conexiones, dependencias ni cómo administrar o recuperar el equipo.
- Error C: Una IP puede cambiar o reutilizarse. No sustituye identidad del activo, ubicación, versión ni historial de configuración.
- Error D: Marca y puertos describen parte del hardware; no demuestran qué versión o configuración está instalada ni qué depende del dispositivo.

- [NIST SP 800-128: Guide for Security-Focused Configuration Management of Information Systems](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-128.pdf) · §3.1.2 Planning at the System Level, Create or Update System Component Inventory, pp.24–26: identificación, asociación, atributos y seguimiento del componente · versión: Agosto de 2011, actualizaciones del 10-10-2019 · comprobado: 2026-10-26

Partida: `54f0dcefe1b2e08a585edab03c1372e3650ad879b3d4ea87b7f8e51877a705e1` · propuesta: `c2d11008194dc69e86c9ff3d86bf10a98a6e7838b6e09ebc1d04947203da89ad`

## AI-GSI-B4-T09-003

Decisión: pending_review · acción: revise.

Motivo: Aplicar copias y control de cambios a una recuperación concreta; distinguir firmware, telemetría y valores de fábrica de la configuración aprobada.

### Antes

¿Qué práctica facilita recuperar configuración de equipos?

- A. Solo fotografías externas de equipos
- B. Backups de configuración y control de cambios **(correcta)**
- C. Memoria del técnico sin documentación
- D. Únicamente inventario de modelos sin configuración

Explicación: Las copias y versiones permiten restaurar un estado conocido.

### Propuesta

Un cambio en un switch provoca pérdida de conectividad. ¿Qué preparación facilita volver a una configuración conocida y aprobada?

- A. Conservar la imagen del firmware y darla por copia de toda la configuración.
- B. Guardar copias versionadas del estado aprobado y probar su restauración. **(correcta)**
- C. Exportar logs y estadísticas, tomándolos como estado completo para restaurar.
- D. Anotar el modelo y reconstruir el servicio a partir de los valores por defecto.

Explicación: Las copias versionadas y asociadas al equipo permiten identificar y restaurar un estado aprobado anterior. Deben mantenerse actualizadas, protegidas y contrastadas con la versión y dependencias del equipo; probar la restauración evita dar por recuperable un archivo que no se ha validado.

- Error A: La imagen del firmware contiene el software del equipo, pero no necesariamente sus VLAN, interfaces, rutas, políticas y demás configuración particular.
- Error C: Los registros y estadísticas aportan evidencia de funcionamiento y fallos, pero no constituyen el conjunto completo de parámetros requerido para restaurar el estado.
- Error D: Los valores de fábrica no reconstruyen la configuración del servicio. Modelo e inventario no sustituyen conservar las versiones aprobadas.

- [NIST SP 800-128: Guide for Security-Focused Configuration Management of Information Systems](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-128.pdf) · §3.2 Identifying and Implementing Configurations; §3.3 Controlling Configuration Changes: baseline aprobada, versiones y control del estado · versión: Agosto de 2011, actualizaciones del 10-10-2019 · comprobado: 2026-10-26
- [IETF RFC 6241: Network Configuration Protocol (NETCONF)](https://www.rfc-editor.org/rfc/rfc6241.html) · §7.3 copy-config: copia de almacenes completos de configuración; §8.7 Distinct Startup Capability · versión: Junio de 2011; ejemplo de mecanismo de configuración, sin exigir NETCONF en todos los equipos · comprobado: 2026-10-26

Partida: `20bbb1198febf13a697427bde1b6e7b03c9be7da0cf96d8647725d4f6b860130` · propuesta: `a5f0a9a4c211ed13c828da990920a55d28a2937649bb6c652d5718dddc353c33`

## AI-GSI-B4-T09-017

Decisión: pending_review · acción: revise.

Motivo: Aplicar monitorización de interfaces a un puerto activo con degradación, distinguiendo contadores y estado de configuración e inventario, sin confirmar una causa no medida.

### Antes

¿Qué parámetros deben vigilarse en interfaces?

- A. Únicamente número de puertos físicos
- B. Solo velocidad nominal configurada
- C. Errores, descartes, utilización y estado **(correcta)**
- D. Solo direccionamiento, sin errores ni carga

Explicación: Estas medidas ayudan a detectar degradación y saturación.

### Propuesta

Un puerto figura activo, pero se observa degradación del tráfico. Además de revisar su configuración, ¿qué medidas de la interfaz deben seguirse en el tiempo?

- A. CPU, memoria, procesos activos y temperatura del chasis.
- B. Velocidad nominal, dúplex configurado, MTU y descripción del puerto.
- C. Errores, descartes, utilización y estado operativo del puerto. **(correcta)**
- D. Modelo, serie, firmware y cobertura del contrato de soporte.

Explicación: Errores, descartes, tráfico/utilización y cambios de estado permiten observar comportamiento de la interfaz y tendencias. Muchos contadores son acumulativos: deben compararse por intervalos y considerar reinicios o discontinuidades. Un puerto activo no garantiza ausencia de degradación ni identifica por sí solo su causa.

- Error A: Son medidas generales del dispositivo que pueden complementar el diagnóstico, pero no sustituyen observar errores, descartes y tráfico del puerto concreto.
- Error B: Son parámetros de configuración y capacidad. Revisarlos es útil, pero no mide cómo evoluciona el tráfico ni los errores que plantea el caso.
- Error D: Son datos de inventario y soporte. Identifican el activo, pero no describen la degradación operativa de la interfaz durante el intervalo.

- [IETF RFC 8343: A YANG Data Model for Interface Management](https://www.rfc-editor.org/rfc/rfc8343.html) · §3 Interfaces Data Model; §5 Interfaces YANG Module: oper-status, speed, statistics, in/out-errors, in/out-discards y discontinuity-time · versión: Marzo de 2018 · comprobado: 2026-10-26

Partida: `29436cbda85feed3391fd191fde0af1b7bfc3b50fc96cbef1729672f268a8910` · propuesta: `e50c04af7ad79d47c81bd44e07033b9f9220d610896a9fcafc8fff3cab4958c0`

## AI-GSI-B4-T10-001

Decisión: pending_review · acción: revise.

Motivo: Aplicar criterios WAN a ofertas de igual velocidad y distinguir diversidad comercial de independencia física y operativa.

### Antes

¿Qué criterios deben compararse al elegir conectividad WAN?

- A. Solo cantidad de direcciones públicas
- B. Capacidad, latencia, disponibilidad, cifrado, diversidad y coste **(correcta)**
- C. Solo velocidad nominal
- D. Únicamente coste mensual

Explicación: La WAN debe satisfacer requisitos operativos y dominios de fallo.

### Propuesta

Dos ofertas WAN anuncian la misma velocidad para una sede con servicio crítico. ¿Qué evaluación permite comparar su adecuación y continuidad?

- A. Elegir la oferta con más IP públicas, tomando ese dato por garantía de continuidad.
- B. Comparar capacidad efectiva, latencia, disponibilidad, cifrado, diversidad física y coste. **(correcta)**
- C. Elegir la velocidad anunciada sin comprobar pérdidas ni acuerdos de servicio.
- D. Elegir la menor cuota mensual, suponiendo equivalente el riesgo de fallo común.

Explicación: La selección debe partir de requisitos medibles del servicio y contrastar capacidad, calidad, disponibilidad, protección y costes. La diversidad debe examinar rutas y dependencias reales: contratar marcas distintas no demuestra independencia física ni elimina fallos comunes.

- Error A: Disponer de más direcciones públicas no demuestra redundancia, calidad ni recuperación. Es un requisito posible, pero no una garantía de continuidad.
- Error C: La velocidad anunciada no describe pérdida, latencia, capacidad efectiva ni compromisos de disponibilidad, que pueden diferir entre las ofertas.
- Error D: La cuota no mide exposición a fallos comunes. Un menor precio puede corresponder a rutas o dependencias compartidas incompatibles con los objetivos del servicio.

- [AWS: Hybrid Networking Lens — AWS Well-Architected Framework](https://docs.aws.amazon.com/pdfs/wellarchitected/latest/hybrid-networking-lens/hybrid-networking-lens.pdf) · HNPERF01, Architecture selection, pp.61–63; HNREL04-BP01/BP02, pp.55–56; Deploy secure connectivity: requisitos, costes, redundancia y cifrado · versión: Edición web/PDF consultada el 26-10-2026; copyright 2026, sin número de versión adicional comprobado · comprobado: 2026-10-26

Partida: `4750475540efbe357abe9fd83dca9dce97278c4d39e802d62b08daeb8c7447bb` · propuesta: `9d535ec8c0ce161393ed7155eddc9c719828906d2160300f5744a3a746dae318`

## AI-GSI-B4-T10-002

Decisión: pending_review · acción: revise.

Motivo: Conservar combinación de underlays según requisitos y política, con alternativas sobre restricciones falsas y sin prometer agregación automática por flujo.

### Antes

¿Puede una arquitectura WAN combinar varios transportes subyacentes?

- A. Solo si todos son fibra propia
- B. Solo si no utiliza IP
- C. No, debe usar siempre uno solo
- D. Sí, según requisitos y política **(correcta)**

Explicación: La arquitectura puede combinar underlays de distinto tipo.

### Propuesta

¿Puede una arquitectura WAN combinar transportes subyacentes de distintos tipos?

- A. Sí; la arquitectura exige que todos tengan el mismo operador y tecnología.
- B. No; cifrar el overlay obliga a mantener un único transporte físico.
- C. No; una red lógica no puede construirse sobre transportes heterogéneos.
- D. Sí; puede combinar MPLS, Internet o móvil según requisitos y política. **(correcta)**

Explicación: Una WAN puede combinar transportes diferentes como MPLS, Internet y redes móviles, con selección, reparto o respaldo según diseño y política. El overlay lógico puede apoyarse en ellos; combinarlos no implica sumar automáticamente toda su capacidad en un único flujo ni garantizar independencia de fallos.

- Error A: No hay una exigencia general de compartir operador y tecnología. Precisamente pueden combinarse transportes heterogéneos, valorando su compatibilidad y riesgos comunes.
- Error B: El cifrado de túneles no impone un único medio subyacente. La política puede proteger y utilizar conexiones sobre distintos transportes.
- Error C: El desacoplamiento lógico permite construir un overlay sobre varias redes subyacentes. Heterogeneidad no lo impide por definición.

- [Cisco Catalyst SD-WAN Design Guide](https://www.cisco.com/c/en/us/td/docs/solutions/CVD/SDWAN/cisco-sdwan-design-guide.html) · Transport Choices: combinaciones MPLS/Internet/LTE; Routing: límites de gestión de rutas estáticas con muchas sedes · versión: Actualizado el 21-08-2024; principios de selección, sin trasladar sus configuraciones a toda WAN · comprobado: 2026-10-26

Partida: `7ffd90eb8d7e85a390fa3697d26ef29d7039163d95e7509df9e15a672f94f287` · propuesta: `06d04c7d8645a4057a2390ebd6e99b3f5c312a71fac5eaa14780e5b056dea54e`

## AI-GSI-B4-T10-012

Decisión: pending_review · acción: revise.

Motivo: Aplicar selección SD-WAN por aplicación, medidas y política a un caso numérico cerrado; separar restricciones SLA y criterio de coste, sin atribuir esos valores a un producto real.

### Antes

¿Qué información puede usar el edge SD-WAN para seleccionar camino?

- A. Un orden fijo de operadores ignorando política
- B. Aplicación, pérdida, jitter, latencia y coste **(correcta)**
- C. Solo disponibilidad binaria del enlace sin calidad
- D. Solo capacidad nominal sin medir pérdida ni latencia

Explicación: La selección responde a medidas y políticas por aplicación.

### Propuesta

Una política SD-WAN de voz admite caminos con latencia ≤50 ms, jitter ≤10 ms y pérdida ≤1 %. A mide 20 ms, 25 ms y 0,1 %; B, 40 ms, 5 ms y 0,5 %, respectivamente. El coste desempata entre caminos admisibles y A es más barato. ¿Cuál cumple la política?

- A. A: su menor pérdida compensa superar el jitter máximo.
- B. B: cumple los tres límites; el coste no permite admitir A. **(correcta)**
- C. Cualquiera: ambos están activos y su pérdida es inferior al 1 %.
- D. A: su menor coste tiene prioridad sobre los límites de voz.

Explicación: El camino B cumple latencia, jitter y pérdida. A supera el máximo de jitter, aunque tenga menor coste y pérdida. La decisión utiliza requisitos de la aplicación y medidas de calidad conforme a la política; en este supuesto el coste solo compara caminos ya admisibles.

- Error A: La política exige cumplir los tres límites; una pérdida menor no compensa un jitter de 25 ms cuando el máximo permitido es 10 ms.
- Error C: Estar activo y cumplir pérdida no basta. También deben satisfacerse los límites de latencia y jitter definidos para voz.
- Error D: El coste se usa para desempatar entre caminos admisibles. A no lo es por su jitter, por lo que ser más barato no le da prioridad.

- [Cisco Catalyst SD-WAN Policies Configuration Guide: SLA, Application-Aware Routing](https://www.cisco.com/c/en/us/td/docs/routers/sdwan/26x-later/policies/policies-configuration-guide/AAR/sla-aar.html) · Configure SLA: clases con máximos de Loss, Latency y Jitter; Fallback Best Tunnel y criterios de política · versión: Releases 26.x and later; guía web consultada el 26-10-2026 · comprobado: 2026-10-26
- [Cisco Catalyst SD-WAN Design Guide](https://www.cisco.com/c/en/us/td/docs/solutions/CVD/SDWAN/cisco-sdwan-design-guide.html) · Transport Choices: combinaciones MPLS/Internet/LTE; Routing: límites de gestión de rutas estáticas con muchas sedes · versión: Actualizado el 21-08-2024; principios de selección, sin trasladar sus configuraciones a toda WAN · comprobado: 2026-10-26

Partida: `7432b700f78184710db3c649031aaefa327db28ba3d4e488a08ca06e0ff9db1a` · propuesta: `55195f802797bc9b7e3a546868f73c3ce840c818e4e88c9d252761fe141f2dae`

## AI-GSI-B4-T10-015

Decisión: pending_review · acción: revise.

Motivo: Conservar predictibilidad y coste de mantenimiento, evitando afirmar que ninguna ruta estática puede retirarse o conmutar automáticamente cuando existe tracking o automatización.

### Antes

¿Qué ventaja y límite tiene routing estático?

- A. Predecible, pero escala peor en topologías complejas **(correcta)**
- B. Siempre converge automáticamente ante cualquier cambio
- C. Solo funciona con IPv6
- D. No requiere configuración

Explicación: Puede ser adecuado en redes sencillas; necesita gestión explícita al crecer.

### Propuesta

¿Qué ventaja y limitación caracteriza el uso de rutas estáticas al crecer una topología?

- A. Control explícito de caminos, con mayor carga de mantenimiento al crecer la red. **(correcta)**
- B. Intercambio automático de cambios con vecinos, sin configurar un protocolo de routing.
- C. Cálculo automático de caminos alternativos a partir de la topología completa aprendida.
- D. Crecimiento sin revisar rutas, porque el siguiente salto descubre los nuevos destinos.

Explicación: Las rutas estáticas permiten definir caminos de forma explícita y pueden ser apropiadas en redes sencillas o destinos concretos. Gestionarlas se complica al crecer y cambiar la topología. Pueden combinarse con automatización o seguimiento de disponibilidad, sin convertirse por ello en aprendizaje dinámico de rutas.

- Error B: Una ruta estática no intercambia automáticamente anuncios de topología. Ese aprendizaje requiere mecanismos adicionales, como protocolos de routing dinámico.
- Error C: Calcular alternativas sobre una topología aprendida corresponde a mecanismos de routing dinámico; no es una propiedad que aparezca por definir rutas estáticas.
- Error D: El siguiente salto configurado no descubre por sí mismo todos los nuevos destinos. Deben revisarse rutas, resúmenes y condiciones de alcance según el diseño.

- [Cisco: IP Routing Configuration Guide, Protocol-Independent Features](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9600/software/release/17-15/configuration_guide/rtng/b_1715_rtng_9600_cg/protocol_independent_features.html) · Static Unicast Routes: rutas definidas por el usuario, distancia administrativa y retirada si no se resuelve siguiente salto/interfaz · versión: Cisco IOS XE 17.15.x, Catalyst 9600 · comprobado: 2026-10-26
- [Cisco: IP Addressing Services Configuration Guide](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9200/software/release/17-15/configuration_guide/ip/b_1715_ip_9200_cg.pdf) · Configuring Enhanced Object Tracking: asociación de ip route con track; Monitoring Enhanced Object Tracking · versión: Cisco IOS XE 17.15.x, Catalyst 9200; primera publicación 14-08-2024 · comprobado: 2026-10-26
- [Cisco Catalyst SD-WAN Design Guide](https://www.cisco.com/c/en/us/td/docs/solutions/CVD/SDWAN/cisco-sdwan-design-guide.html) · Transport Choices: combinaciones MPLS/Internet/LTE; Routing: límites de gestión de rutas estáticas con muchas sedes · versión: Actualizado el 21-08-2024; principios de selección, sin trasladar sus configuraciones a toda WAN · comprobado: 2026-10-26

Partida: `cdecdd2f940ed9b5688101aae1a5e465de42532f3175266474c31fa229be74df` · propuesta: `709e2fb2f242d6a4d68ff40b9e6b7ddad65170021caf21af75943dcaf45766c9`

## AI-GSI-B4-T11-005

Decisión: pending_review · acción: revise.

Motivo: Conservar regulación y compatibilidad como comprobaciones conjuntas e incorporar la modificación europea de 2025; no presentar toda la banda mundial de 6 GHz como habilitada en España.

### Antes

¿Qué debe verificarse antes de usar 6 GHz?

- A. Regulación aplicable y compatibilidad de equipos **(correcta)**
- B. Solo potencia del AP sin compatibilidad ni regulación
- C. Solo que el SSID sea visible
- D. Únicamente la velocidad del uplink

Explicación: Disponibilidad de espectro y soporte del dispositivo condicionan uso.

### Propuesta

¿Qué debe verificarse antes de activar una WLAN en 6 GHz en el país donde va a desplegarse?

- A. Condiciones regulatorias de uso y compatibilidad de AP, clientes y configuración. **(correcta)**
- B. La etiqueta Wi-Fi 6 de los equipos, dándola por garantía de soporte de 6 GHz.
- C. La visibilidad del SSID en otra banda, dándola por autorización para transmitir en 6 GHz.
- D. La disponibilidad de un canal en la interfaz, dándola por autorización en cualquier lugar.

Explicación: Deben comprobarse la regulación del lugar de despliegue y el soporte efectivo de la banda y sus requisitos por AP y clientes. Espectro, potencia y condiciones de instalación pueden variar. Wi-Fi 6 no implica por sí solo 6 GHz, y que el software permita seleccionar un canal no acredita un uso autorizado.

- Error B: Wi-Fi 6 identifica prestaciones basadas en 802.11ax, pero la extensión a 6 GHz necesita soporte específico, conocido como Wi-Fi 6E en esa generación.
- Error C: Un mismo nombre de red puede anunciarse en otras bandas. Verlo no prueba que los equipos soporten 6 GHz ni que su uso esté permitido en esa ubicación.
- Error D: La interfaz de configuración no sustituye la regulación aplicable ni la comprobación del dominio y las condiciones de instalación.

- [Decisión de Ejecución (UE) 2021/1067: utilización de 5945–6425 MHz para WAS/RLAN](https://www.boe.es/buscar/doc.php?id=DOUE-L-2021-80888) · Artículos 2–3: equipos y condiciones de uso armonizado; anexo; análisis con modificaciones 2024/3157 y 2025/913 · versión: Texto original de 17-06-2021 leído junto con la modificación de 20-05-2025; no se presenta el anexo original como vigente sin cambios · comprobado: 2026-10-26
- [Decisión de Ejecución (UE) 2025/913: actualización de condiciones técnicas de 5945–6425 MHz](https://www.boe.es/buscar/doc.php?id=DOUE-L-2025-80745) · Artículo 1 y anexo: sustitución del artículo 4 y del anexo de la Decisión 2021/1067 · versión: 20-05-2025, publicada el 22-05-2025; modificación posterior a 2024/3157 · comprobado: 2026-10-26
- [Cisco Catalyst CW9166D1 Access Point Deployment Guide](https://www.cisco.com/c/en/us/products/collateral/wireless/catalyst-9164-series-access-points/catalyst-9166i-9164i-dg.html) · Wi-Fi 6E migration and deployment tips; 6-GHz spectrum considerations; Wi-Fi 6E client devices; Regulatory domain · versión: Actualizado el 10-11-2023; se usa compatibilidad de banda, no sus condiciones regulatorias como norma vigente · comprobado: 2026-10-26

Partida: `0c72a045ef2369f439acfbaf7753a8e9a76ed1601db38baa3d670f7129063c15` · propuesta: `48f74bc13ccc176e8c5070cda3ce00fa2a557fcb5917445f2f022723aac73c44`

## AI-GSI-B4-T11-018

Decisión: pending_review · acción: revise.

Motivo: Aplicar el survey al contraste señal/capacidad y mantener canales, potencia, interferencia, densidad y solapamiento como conocimiento evaluado.

### Antes

¿Qué debe incluir un site survey?

- A. Solo intensidad máxima de señal, sin interferencia
- B. Únicamente cobertura sin estudiar densidad
- C. Canales, potencia, interferencias, densidad y solapamiento **(correcta)**
- D. Solo distancia al AP

Explicación: La planificación RF necesita observar cobertura y capacidad.

### Propuesta

En un aula llena, los clientes cercanos al AP reciben señal fuerte, pero el servicio WLAN se degrada. ¿Qué debe incluir el site survey además de la cobertura?

- A. Medir el RSSI máximo y darlo por prueba de capacidad suficiente para todos los clientes.
- B. Contar los AP instalados y suponer que aumentar su potencia resuelve la ocupación del canal.
- C. Analizar canales, potencia, interferencias, densidad, ocupación y solapamiento de celdas. **(correcta)**
- D. Medir distancias al AP y dar la cercanía por prueba de ausencia de interferencias.

Explicación: Una señal fuerte no demuestra capacidad ni calidad del medio compartido. El survey debe observar canales, potencias, interferencias, densidad y uso del aire, junto con cobertura y solapamiento. La planificación debe contrastarse con clientes, aplicaciones y carga representativos, sin deducir una causa única del síntoma.

- Error A: El RSSI informa de potencia recibida, no de tiempo de aire disponible, contención ni interferencias. Un valor alto puede coexistir con mal servicio.
- Error B: Más potencia o AP no garantizan más capacidad. Un diseño de canales y solapamiento inadecuado puede aumentar interferencia o contención.
- Error D: La cercanía no elimina emisiones de otros equipos ni saturación del medio. Deben medirse las condiciones RF y la carga.

- [Cisco: Wireless Site Survey FAQ](https://www.cisco.com/c/en/us/support/docs/wireless-mobility/wireless-lan-wlan/68666-wireless-site-survey-faq.html) · What are the steps to perform a site survey?; cambios para voz: cobertura y capacidad; fuentes de interferencia · versión: Guía publicada en 2007; principios de medida y planificación, sin recomendar sus herramientas históricas · comprobado: 2026-10-26
- [Cisco: Wireless RF Reference Guide](https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/technical-reference/wireless-rf-reference-guide.html) · Review of RF basics; co-channel y adjacent-channel interference; site survey y ocupación del medio · versión: Actualizado el 18-04-2024; principios RF, sin universalizar tablas de clientes o dominios regulatorios · comprobado: 2026-10-26

Partida: `ff8ed8e905e36902bb646af47293f90653498ea46f811839a48995c408bb60f3` · propuesta: `195d35503ce515a92c299416993e0ce610084fb7927ff6f6a74952706c25a289`

## AI-GSI-B4-T12-001

Decisión: pending_review · acción: revise.

Motivo: Aplicar identidad, dispositivo, contexto y mínimo privilegio a un acceso desde LAN; diferenciar autenticación, conectividad y autorización sin prohibir VPN o perímetros.

### Antes

¿Qué debe verificar una arquitectura Zero Trust además de identidad?

- A. Únicamente presencia de una VPN
- B. Solo pertenencia a la LAN
- C. Dispositivo, contexto y privilegios necesarios **(correcta)**
- D. Solo dirección privada

Explicación: La confianza no se concede implícitamente por ubicación.

### Propuesta

Un usuario presenta credenciales válidas desde la LAN corporativa. En un enfoque Zero Trust, ¿qué debe valorar la autorización del recurso además de su identidad?

- A. Conceder acceso amplio por la dirección interna, dando la ubicación por confianza suficiente.
- B. Conceder acceso amplio al entrar por VPN, dando el túnel por comprobación de todos los permisos.
- C. Evaluar dispositivo, contexto y permisos mínimos necesarios para el recurso solicitado. **(correcta)**
- D. Conceder acceso amplio por haber superado MFA, dando autenticación por autorización general.

Explicación: La identidad autenticada es una entrada de la decisión, no una autorización universal. Deben evaluarse estado del dispositivo, contexto y política de acceso al recurso con privilegios mínimos, revisando condiciones según riesgo. LAN, VPN o MFA pueden aportar controles, pero no conceden confianza implícita a todo acceso.

- Error A: La ubicación interna no demuestra por sí sola que usuario y dispositivo cumplan la política del recurso ni autoriza acceso amplio.
- Error B: Una VPN protege o facilita conectividad, pero no sustituye comprobar postura, contexto y permisos del recurso concreto.
- Error D: MFA refuerza la autenticación del usuario. No decide por sí mismo qué acciones o recursos deben autorizarse ni valida toda condición del dispositivo.

- [NIST SP 1800-35: Implementing a Zero Trust Architecture, Executive Summary](https://pages.nist.gov/zero-trust-architecture/VolumeA/ExecutiveSummary.html) · Executive Summary: evaluación continua de condiciones y solicitudes, riesgo e inexistencia de confianza automática en internos · versión: Documento final, junio de 2025; material complementario oficial · comprobado: 2026-10-26
- [NIST SP 1800-35: Implementing a Zero Trust Architecture, Architecture and Builds](https://pages.nist.gov/zero-trust-architecture/VolumeB/architecture.html) · Arquitectura de Enterprise 2, figura 13: IAM y política context-aware; postura del dispositivo desde inventario/MDM · versión: Documento final, junio de 2025; ejemplo de aplicación del principio, sin exigir esos productos · comprobado: 2026-10-26

Partida: `66c02d6aa80ddcbe5f251bd143ad8c11059affa7e18211be196de68a26d968a3` · propuesta: `ac7e2313497614630e02f8b560643a456377b4d8cb33ca1e9da78d7197390c1b`

## AI-GSI-B4-T12-002

Decisión: pending_review · acción: revise.

Motivo: Conservar capas complementarias de segmentación, identidad, filtrado, cifrado y detección; distinguir profundidad, redundancia y ocultación de direcciones.

### Antes

¿Qué controles combina defensa en profundidad de red?

- A. Solo un router caro
- B. Segmentación, identidad, filtrado, cifrado y detección **(correcta)**
- C. Solo ocultar direcciones
- D. Únicamente un antivirus sin gestión

Explicación: La protección requiere capas complementarias y respuesta.

### Propuesta

¿Qué enfoque representa defensa en profundidad para una red?

- A. Concentrar la protección en el cortafuegos perimetral como sustituto de controles internos.
- B. Combinar segmentación, identidad, filtrado, cifrado y detección con operación y respuesta. **(correcta)**
- C. Duplicar el mismo filtro perimetral y dar esa redundancia por cobertura de toda amenaza.
- D. Ocultar direcciones mediante NAT y tomar ese cambio por confidencialidad de los datos.

Explicación: La defensa en profundidad combina capas complementarias para prevenir, limitar, detectar y responder. Incluye personas, procesos y tecnología; el fallo o evasión de un control no debería agotar la protección. La redundancia de un producto o NAT no sustituyen esa combinación, que tampoco garantiza riesgo cero.

- Error A: Un perímetro puede ser una capa, pero no cubre por sí solo movimiento interno, credenciales comprometidas ni todos los puntos de entrada.
- Error C: Redundar un mismo filtro puede mejorar disponibilidad, pero no aporta necesariamente diversidad de controles frente a amenazas que ambos pasarían por alto.
- Error D: NAT modifica direccionamiento; no cifra por ese hecho el contenido ni equivale a una estrategia completa de control, detección y respuesta.

- [NIST CSRC Glossary: defense-in-depth](https://csrc.nist.gov/glossary/term/defense_in_depth) · Definitions: capacidades de personas, tecnología y operación en capas; contramedidas heterogéneas; fuentes SP 800-53 Rev.5 y NISTIR 8183 · versión: Glosario web consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `45a779a36d1d73a26737dd6b47c6a76fec0fe056b6e064fd3bb6b5bb9182d0f5` · propuesta: `fcb6220b3ca9430a37f703f8210b81eb840e5aefccf41d53ff068252e33eb82b`

## AI-GSI-B4-T12-012

Decisión: pending_review · acción: revise.

Motivo: Conservar gestión de políticas, claves, revocación y ciclo de vida y evitar confundir emisión, publicación o expiración con confianza completa; no centralizar por definición claves privadas de todos los titulares.

### Antes

¿Qué debe gestionar una PKI además de emitir certificados?

- A. Únicamente nombres de titulares
- B. Solo emisión inicial, sin políticas ni ciclo de vida
- C. Solo fecha de expedición, sin revocación
- D. Políticas, claves, revocación y ciclo de vida **(correcta)**

Explicación: La confianza necesita gestión continuada y comprobación de estado.

### Propuesta

¿Qué debe gestionar una PKI además de emitir inicialmente certificados?

- A. La publicación del certificado, dando su disponibilidad por prueba de vigencia futura.
- B. La fecha de caducidad, tomándola como sustituto de comprobar revocaciones anteriores.
- C. El nombre del titular, dando esa coincidencia por validación completa de la confianza.
- D. Políticas, protección de claves, renovación, revocación y estado durante el ciclo de vida. **(correcta)**

Explicación: La confianza requiere políticas y prácticas, protección de claves y gestión de renovación, revocación y estado, además de la emisión. El alcance se reparte entre actores de la PKI: no implica entregar a la CA todas las claves privadas de los usuarios. Una firma o fecha de caducidad no resuelve por sí sola toda validación.

- Error A: Publicar un certificado permite recuperarlo, pero no acredita que siga vigente, que no se haya revocado o que su uso cumpla la política.
- Error B: Un certificado puede revocarse antes de caducar, por ejemplo por compromiso de clave. Su periodo nominal de validez no sustituye gestionar y comprobar estado.
- Error C: El nombre no acredita por sí solo cadena, política, uso permitido ni estado. La validación de confianza tiene más condiciones.

- [IETF RFC 3647: Internet X.509 Public Key Infrastructure Certificate Policy and Certification Practices Framework](https://www.rfc-editor.org/info/rfc3647/) · §4.4 Certificate Life-Cycle Operational Requirements; §4.6 Technical Security Controls; §4.7 Certificate, CRL, and OCSP Profiles · versión: Noviembre de 2003, Informational; marco de políticas y prácticas, sin recomendar algoritmos históricos · comprobado: 2026-10-26
- [IETF RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile](https://www.rfc-editor.org/rfc/rfc5280.html) · §3.3 Revocation; §3.5 Management Protocols; §6 validación de rutas y CRL · versión: Mayo de 2008; perfil base, sin proponer parámetros criptográficos de su edición histórica · comprobado: 2026-10-26

Partida: `59a0f223f672d384516be6c69fe4bbff68f9499c82bd7c1f52dd77e2ce99f263` · propuesta: `54f618a0a4febe714ec2a1aba307738b04cc8e8f2ecfbb308203bf282903812d`

## AI-GSI-B4-T12-015

Decisión: pending_review · acción: revise.

Motivo: Conservar tráfico IP y modos transporte/túnel y compararlos con TLS, cifrado en reposo y seguridad de enlace, sin afirmar cifrado obligatorio de todos los paquetes.

### Antes

¿Qué protege IPsec?

- A. Solo HTML renderizado
- B. Solo documentos XML
- C. Únicamente correo almacenado
- D. Tráfico IP según su arquitectura y modo **(correcta)**

Explicación: IPsec opera sobre IP y contempla modos transporte y túnel.

### Propuesta

¿Qué ámbito de tráfico protege IPsec según sus políticas y modos de funcionamiento?

- A. Mensajes de aplicación mediante registros TLS propios de cada servicio.
- B. Archivos almacenados mediante cifrado del volumen donde permanecen.
- C. Tramas Ethernet mediante protección del enlace local entre vecinos.
- D. Tráfico IP seleccionado por política, en modo transporte o túnel. **(correcta)**

Explicación: IPsec aplica servicios de seguridad a tráfico IP seleccionado por políticas y asociaciones de seguridad, con modos transporte y túnel. Los servicios concretos dependen de mecanismos y configuración: no todo tráfico queda cifrado por instalar IPsec, ni se trata de cifrado de disco o protección Ethernet local.

- Error A: La protección de protocolos de aplicación mediante TLS pertenece a otra arquitectura. IPsec actúa sobre tráfico IP conforme a sus políticas.
- Error B: El cifrado de almacenamiento protege datos en reposo y no describe la arquitectura IPsec de protección de comunicaciones.
- Error C: La protección de tramas de un enlace Ethernet local corresponde a mecanismos de capa de enlace, como MACsec, no al ámbito IP de IPsec.

- [IETF RFC 4301: Security Architecture for the Internet Protocol](https://www.rfc-editor.org/rfc/rfc4301.html) · §3.1 What IPsec Does; §3.2 How IPsec Works; §4.1 Security Associations, modos transporte y túnel; §4.4.1 SPD · versión: Diciembre de 2005; arquitectura base, sin recomendar suites criptográficas históricas · comprobado: 2026-10-26

Partida: `c322e718ebf789b9929598768a4706454a88319f801e765eeb6c6db6bc09eda0` · propuesta: `66050c3d679d05cff5dd9b629d1f901712dc0b9eace8ed442eff3343fe53a16e`

## MAN-GSI-P14-001

Decisión: pending_review · acción: revise.

Motivo: Conservar el enunciado y la correcta ya precisos y hacer paralelos los distractores mediante notas próximas de teoría del Estado; completar explicaciones sin introducir un microcaso innecesario.

### Antes

Según el artículo 1 de la Constitución, España se constituye como:

- A. Un Estado social y democrático de Derecho. **(correcta)**
- B. Un Estado federal social y democrático.
- C. Una monarquía constitucional sin referencia al Estado de Derecho.
- D. Un Estado unitario y social de Derecho.

Explicación: El art. 1 CE define España como Estado social y democrático de Derecho.

### Propuesta

Según el artículo 1 de la Constitución, España se constituye como:

- A. Un Estado social y democrático de Derecho. **(correcta)**
- B. Un Estado democrático y federal de Derecho.
- C. Un Estado liberal y democrático de Derecho.
- D. Un Estado social y unitario de Derecho.

Explicación: El artículo 1.1 combina las notas social, democrática y de Derecho. Deben distinguirse de la forma política del artículo 1.3 y de la organización territorial: sustituir una de esas notas por federal, liberal o unitario no reproduce la definición preguntada.

- Error B: Introduce federal y omite social. No es la formulación del artículo 1.1; la organización territorial no sustituye las notas con que este define el Estado.
- Error C: Sustituye social por liberal. La definición expresa del artículo 1.1 es social y democrática de Derecho.
- Error D: Sustituye democrática por unitario. Aunque puedan estudiarse clasificaciones territoriales, el artículo 1.1 no utiliza ese término en la fórmula preguntada.

- [Constitución Española](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229) · Artículo 1.1: definición del Estado; contraste con 1.3 y artículo 2, sin sustituir términos del precepto · versión: Texto consolidado consultado el 26-10-2026; ficha BOE con última actualización publicada el 20-05-2026 · comprobado: 2026-10-26

Partida: `8dd4c7bdb876059cc26f787551593a5a1c2cd09e8e3a31efd5cb6fd5de2a54a8` · propuesta: `da1fdd742e9dbdc756e01c1364e354b9d2eebd8989d5b6f5b04ba497e9e4e01e`

## MAN-GSI-P14-003

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y cuatro alternativas ya adecuados y completar la diferencia entre titularidad de soberanía y funciones de órganos constitucionales.

### Antes

La soberanía nacional reside en:

- A. El Rey.
- B. El Gobierno.
- C. El pueblo español. **(correcta)**
- D. Las Cortes Generales.

Explicación: La CE atribuye la soberanía nacional al pueblo español.

### Propuesta

La soberanía nacional reside en:

- A. El Rey.
- B. El Gobierno.
- C. El pueblo español. **(correcta)**
- D. Las Cortes Generales.

Explicación: El artículo 1.2 atribuye la soberanía nacional al pueblo español y establece que de él emanan los poderes del Estado. Titularidad de la soberanía no equivale a la función de representar al pueblo, ejercer el Gobierno o desempeñar la jefatura del Estado.

- Error A: El Rey ejerce la jefatura del Estado conforme al artículo 56, pero el titular de la soberanía que identifica el artículo 1.2 es el pueblo español.
- Error B: El Gobierno dirige la política y ejerce la función ejecutiva en los términos del artículo 97. No es el titular de la soberanía nacional.
- Error D: Las Cortes representan al pueblo español según el artículo 66.1. Representación y ejercicio de funciones constitucionales no trasladan a ellas la titularidad de la soberanía.

- [Constitución Española](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229) · Artículo 1.2: titularidad de la soberanía; artículos 56.1, 66.1 y 97, órganos y funciones · versión: Texto consolidado consultado el 26-10-2026; ficha BOE con última actualización publicada el 20-05-2026 · comprobado: 2026-10-26

Partida: `32af80e782addbe5c80dff6128bfd50f55bdf48388d737d6021014b63372eab8` · propuesta: `80769fbe43f8a1a88c20d45e027ad2b2fe9d938d7db93d1e07fead1a3449c086`

## MAN-GSI-P14-004

Decisión: pending_review · acción: revise.

Motivo: Conservar la correcta y los distractores territorial y republicano, sustituyendo la combinación confusa constitucional presidencialista por una alternativa de monarquía ejecutiva claramente distinta del modelo parlamentario.

### Antes

La forma política del Estado español es:

- A. El Estado autonómico.
- B. La Monarquía parlamentaria. **(correcta)**
- C. La Monarquía constitucional presidencialista.
- D. La República parlamentaria.

Explicación: La forma política es la Monarquía parlamentaria.

### Propuesta

Según el artículo 1.3 CE, la forma política del Estado español es:

- A. El Estado autonómico.
- B. La Monarquía parlamentaria. **(correcta)**
- C. La Monarquía constitucional ejecutiva.
- D. La República parlamentaria.

Explicación: El artículo 1.3 establece la Monarquía parlamentaria. Se distingue la jefatura del Estado de la dirección del Gobierno y se evita confundir forma política con organización territorial. El artículo 97 atribuye al Gobierno la función ejecutiva, no un gobierno personal de la Corona.

- Error A: Estado autonómico describe la organización territorial; no es la respuesta que el artículo 1.3 establece para la forma política.
- Error C: La referencia a una monarquía ejecutiva atribuiría a la Corona un papel de gobierno que no describe la Monarquía parlamentaria del artículo 1.3. La función ejecutiva corresponde al Gobierno en el artículo 97.
- Error D: Comparte la referencia parlamentaria, pero sustituye la jefatura monárquica por una republicana y contradice el artículo 1.3.

- [Constitución Española](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229) · Artículo 1.3: Monarquía parlamentaria; artículos 56.1 y 97: jefatura del Estado y función ejecutiva · versión: Texto consolidado consultado el 26-10-2026; ficha BOE con última actualización publicada el 20-05-2026 · comprobado: 2026-10-26

Partida: `987c419590a9555120888b8fa526961f59253c1be0d0ea739046f2f8456f5d87` · propuesta: `c4ef4a5276dcc133b5329582401391f77be8de04a83687c23980b78a77b8ba99`

## MAN-GSI-P14-007

Decisión: pending_review · acción: revise.

Motivo: Conservar el enunciado y las cuatro alternativas ya precisos y sustituir el comentario sobre apuntes por fundamento constitucional y explicación individual; distinguir la extensión al amparo de otras vías de tutela.

### Antes

A efectos del recurso de amparo, la protección reforzada del artículo 53.2 alcanza:

- A. Solo a los derechos de los artículos 15 a 29, excluyendo el principio de igualdad del artículo 14 y toda referencia al artículo 30.2.
- B. A todos los derechos y deberes de los capítulos primero y segundo del Título I, incluidos los artículos 30 a 38 sin distinción.
- C. Al artículo 14, a los derechos de los artículos 15-29 y a la objeción de conciencia del artículo 30.2 en los términos constitucionales. **(correcta)**
- D. A todo el Título I y a los principios rectores, que pueden fundamentar directamente el amparo en idénticas condiciones.

Explicación: El V2.1 destaca art. 14 + arts. 15-29 y, para amparo, art. 30.2.

### Propuesta

A efectos del recurso de amparo, la protección reforzada del artículo 53.2 alcanza:

- A. Solo a los derechos de los artículos 15 a 29, excluyendo el principio de igualdad del artículo 14 y toda referencia al artículo 30.2.
- B. A todos los derechos y deberes de los capítulos primero y segundo del Título I, incluidos los artículos 30 a 38 sin distinción.
- C. Al artículo 14, a los derechos de los artículos 15-29 y a la objeción de conciencia del artículo 30.2 en los términos constitucionales. **(correcta)**
- D. A todo el Título I y a los principios rectores, que pueden fundamentar directamente el amparo en idénticas condiciones.

Explicación: Para el amparo, el artículo 53.2 comprende el artículo 14 y los derechos de la sección primera del capítulo segundo, artículos 15 a 29, y añade la objeción de conciencia del artículo 30.2. Esa extensión al amparo no equipara todas las vías de tutela ni incluye todo el título I.

- Error A: La enumeración excluye indebidamente la igualdad del artículo 14 y la extensión a la objeción de conciencia del artículo 30.2, ambas relevantes para el amparo.
- Error B: La protección constitucional de otros derechos y deberes no implica acceso directo al amparo del artículo 53.2. El conjunto de los artículos 30 a 38 no está incluido sin distinción.
- Error D: Los principios rectores del capítulo III tienen el régimen del artículo 53.3. No fundamentan directamente amparo en idénticas condiciones que los derechos incluidos en el artículo 53.2.

- [Constitución Española](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229) · Artículo 53.2; artículo 14; sección 1.ª del capítulo II del título I, artículos 15–29; objeción de conciencia del artículo 30.2 · versión: Texto consolidado consultado el 26-10-2026; ficha BOE con última actualización publicada el 20-05-2026 · comprobado: 2026-10-26

Partida: `d78f4bc2a05005e5df22b1129db51c9dbeae8a524b42ea5569128c800a320319` · propuesta: `8e5ca474619bd3f13954c1040085a15a403f5e1a5ca2a40b228ff2a6e8a53059`

## MAN-GSI-P14-008

Decisión: pending_review · acción: revise.

Motivo: Conservar el núcleo y la correcta, precisar desarrollo directo y retirar la formulación absoluta en todo caso; respaldar la excepción frente a cualquier mera afectación con el FJ 7 de la STC 173/1998.

### Antes

El desarrollo de los derechos fundamentales y libertades públicas de la Sección 1.ª se realiza, en los términos del artículo 81 CE, mediante:

- A. Orden ministerial.
- B. Ley orgánica. **(correcta)**
- C. Real decreto.
- D. Ley ordinaria en todo caso.

Explicación: El desarrollo de esos derechos se reserva a ley orgánica en los términos constitucionales.

### Propuesta

El desarrollo directo de los derechos fundamentales y libertades públicas de la Sección 1.ª se realiza, en los términos del artículo 81 CE, mediante:

- A. Orden ministerial.
- B. Ley orgánica. **(correcta)**
- C. Real decreto.
- D. Ley ordinaria.

Explicación: El artículo 81.1 reserva a ley orgánica el desarrollo de estos derechos y libertades. La reserva se interpreta de forma restrictiva para su desarrollo directo y aspectos esenciales, no para cualquier norma que incida en ellos. La aprobación orgánica exige mayoría absoluta del Congreso en votación final sobre el conjunto.

- Error A: Una orden ministerial es una disposición reglamentaria y no puede sustituir la ley orgánica en una materia reservada por el artículo 81.
- Error C: Un real decreto reglamentario no satisface la reserva de ley orgánica. Tampoco debe confundirse con una ley aprobada con las exigencias del artículo 81.2.
- Error D: La ley ordinaria puede regular aspectos no reservados, pero no sustituye a la orgánica en el desarrollo directo y esencial preguntado.

- [Constitución Española](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229) · Artículo 81.1–2: reserva y mayoría de la ley orgánica; artículo 82.1: materias excluidas de delegación legislativa · versión: Texto consolidado consultado el 26-10-2026; ficha BOE con última actualización publicada el 20-05-2026 · comprobado: 2026-10-26
- [Tribunal Constitucional: Sentencia 173/1998, de 23 de julio](https://www.boe.es/buscar/doc.php?id=BOE-T-1998-20050) · Fundamento jurídico 7: interpretación restrictiva de la reserva de ley orgánica, desarrollo directo y aspectos esenciales; se distingue de alegaciones y voto particular · versión: STC 173/1998; publicación oficial en BOE de 18-08-1998 · comprobado: 2026-10-26

Partida: `f19c58e226283c7739491ede7e6717e688cae566eeff61f5e55b058a8a67cb29` · propuesta: `12e54221c143b012f4c65ee235fc623ee658cfa3c401d0669e42b7f4c6d9fb66`

## MAN-GSI-P14-009

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y alternativas ya construidos, añadir localización precisa de cada distractor y advertir que la lista correcta no agota el artículo 18.4 ni sus límites.

### Antes

¿Qué derecho corresponde al artículo 18 CE?

- A. Honor, intimidad, propia imagen, inviolabilidad del domicilio y secreto de las comunicaciones. **(correcta)**
- B. Elegir libremente residencia y circular por el territorio nacional, así como entrar y salir de España en los términos legales.
- C. Obtener tutela efectiva de jueces y tribunales sin indefensión, con las garantías procesales reconocidas constitucionalmente.
- D. Ejercer el derecho de petición individual o colectiva por escrito, con los límites específicos previstos para determinados colectivos.

Explicación: El art. 18 agrupa esas garantías de la esfera privada y comunicaciones.

### Propuesta

¿Qué derecho corresponde al artículo 18 CE?

- A. Honor, intimidad, propia imagen, inviolabilidad del domicilio y secreto de las comunicaciones. **(correcta)**
- B. Elegir libremente residencia y circular por el territorio nacional, así como entrar y salir de España en los términos legales.
- C. Obtener tutela efectiva de jueces y tribunales sin indefensión, con las garantías procesales reconocidas constitucionalmente.
- D. Ejercer el derecho de petición individual o colectiva por escrito, con los límites específicos previstos para determinados colectivos.

Explicación: El artículo 18.1 reconoce honor, intimidad y propia imagen; los apartados 2 y 3 regulan domicilio y comunicaciones. El apartado 4 añade garantías frente al uso de la informática. La alternativa agrupa derechos de ese artículo sin pretender agotar todas sus reglas, límites y garantías.

- Error B: La residencia, circulación y entrada o salida de España se regulan en el artículo 19. Son derechos distintos de los agrupados en el artículo 18.
- Error C: La tutela judicial efectiva y las garantías procesales corresponden al artículo 24, no al artículo 18.
- Error D: El derecho de petición individual o colectiva por escrito se reconoce en el artículo 29, con su regla específica para miembros de cuerpos sujetos a disciplina militar.

- [Constitución Española](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229) · Artículo 18.1–4; contraste con artículos 19 (residencia y circulación), 24 (tutela judicial) y 29 (petición) · versión: Texto consolidado consultado el 26-10-2026; ficha BOE con última actualización publicada el 20-05-2026 · comprobado: 2026-10-26

Partida: `23e4971ef837b7a69f17b31a5414232d2398ca8a33312203e406539fe624f095` · propuesta: `e36bc31b244b02ab87ffba99b7b5e594dd211e740ac48e523dc87e2e5a124798`

## MAN-GSI-P14-010

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y cuatro alternativas ya adecuados y completar la ubicación y el régimen de los principios, sin equipararlos a ausencia de toda eficacia jurídica.

### Antes

Los artículos 39 a 52 de la Constitución contienen:

- A. Derechos fundamentales y libertades públicas.
- B. Derechos y deberes de los ciudadanos.
- C. Garantías y suspensión de derechos.
- D. Principios rectores de la política social y económica. **(correcta)**

Explicación: El Capítulo III del Título I contiene los principios rectores.

### Propuesta

Los artículos 39 a 52 de la Constitución contienen:

- A. Derechos fundamentales y libertades públicas.
- B. Derechos y deberes de los ciudadanos.
- C. Garantías y suspensión de derechos.
- D. Principios rectores de la política social y económica. **(correcta)**

Explicación: Los artículos 39 a 52 integran el capítulo III del título I, dedicado a los principios rectores de la política social y económica. El artículo 53.3 explica su eficacia sobre legislación, práctica judicial y poderes públicos y su alegación ordinaria conforme a las leyes de desarrollo.

- Error A: Derechos fundamentales y libertades públicas es la rúbrica de la sección primera del capítulo II, artículos 15 a 29, no del capítulo III.
- Error B: Derechos y deberes de los ciudadanos es la sección segunda del capítulo II, artículos 30 a 38, anterior al capítulo III.
- Error C: Garantías y suspensión de derechos se sitúan en los capítulos IV y V del título I, artículos 53 a 55, no en el tramo 39 a 52.

- [Constitución Española](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229) · Título I, capítulo III, artículos 39–52; artículo 53.3: eficacia de los principios rectores; contraste con capítulo II y capítulos IV–V · versión: Texto consolidado consultado el 26-10-2026; ficha BOE con última actualización publicada el 20-05-2026 · comprobado: 2026-10-26

Partida: `dbf8ae0ae319e0d8fc02ccaf7b887f4d37eee15f7ba3a8f4c22f9e7bc6b62b89` · propuesta: `1e257ab8031b583343fd124b8755af8b4586be3ebd8cedcbeda680c17f15cdae`
