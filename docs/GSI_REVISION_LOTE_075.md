# GSI-EDITORIAL-075 — revisión propuesta

Preparado: 2026-11-03. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `6b2df8f4b25ebb1088a84fe8266dde8c1c9d85cde1195c6088b06cf6c0c76a13`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T06-010

Decisión: pending_review · acción: revise.

Motivo: Conservar movilidad para mantenimiento y clave B; cuatro actuaciones de continuidad/recuperación, sin prometer cero interrupción.

### Antes

La migración en vivo ayuda principalmente a…

- A. Garantizar continuidad ante pérdida regional por sí sola
- B. Mantenimiento y movilidad, sin equivaler a DR **(correcta)**
- C. Sustituir todo backup
- D. Recuperar cualquier borrado histórico

Explicación: La movilidad local no cubre todos los escenarios de desastre.

### Propuesta

La migración en vivo ayuda principalmente a…

- A. Reconstruir una versión histórica tras borrar datos en el sistema invitado.
- B. Mover VMs en ejecución para mantenimiento y redistribución de cargas. **(correcta)**
- C. Mantener copias recuperables fuera del dominio de fallo del centro.
- D. Restaurar una VM desde soportes de respaldo después de un desastre.

Explicación: La migración en vivo mueve una VM en ejecución entre hosts compatibles con poca interrupción. Facilita mantenimiento y movilidad, pero requiere recursos y conectividad disponibles y puede tener una pausa breve. No crea por sí misma un historial de datos o una estrategia de recuperación ante pérdida del sitio.

- Error A: Recuperar datos históricos exige conservar el punto anterior; mover el estado vigente no deshace un borrado.
- Error C: Disponer de copias fuera del dominio afectado es una decisión de protección/DR, no una consecuencia automática de migrar.
- Error D: Restaurar desde backup es distinto de trasladar la ejecución y el estado actual de una VM.

- [Microsoft: Hyper-V virtual machine live migration](https://learn.microsoft.com/en-us/troubleshoot/windows-server/virtualization/hyper-v-virtual-machine-live-migration) · Introducción; limitaciones de compatibilidad, red, almacenamiento y estado · versión: Texto público comprobado 03-11-2026. Movimiento entre hosts con mínima interrupción, no garantía de cero pausa o recuperación ante pérdida regional. · comprobado: 2026-11-03
- [NIST CSRC: Cold site](https://csrc.nist.gov/glossary/term/cold_site) · Definitions: instalación física/eléctrica preparada para recibir equipo; atribución SP800-34Rev.1 · versión: Glosario HTML comprobado 03-11-2026. Se lee definición, no PDF completo; el objetivo RTO se fija por negocio y la preparación condiciona alcanzarlo. · comprobado: 2026-11-03
- [NIST CSRC: Hot site](https://csrc.nist.gov/glossary/term/hot_site) · Definitions: instalación externa operativa con hardware/software; atribución SP800-34Rev.1 · versión: Glosario HTML comprobado 03-11-2026. Hot no equivale por definición a estar sirviendo tráfico activo-activo o recuperación instantánea. · comprobado: 2026-11-03

Partida: `8ed18d30afa85f8cf8f7d7cf25869a1ee881e98ebe9e4e0ba7ddd2863d70dca6` · propuesta: `ab0a67547a4ce23d528ef144b67224443d48a62f48926ed75b2579183fa6a5dc`

## AI-GSI-B4-T06-011

Decisión: pending_review · acción: revise.

Motivo: Conservar eliminación de SPOF y clave C; precisar alcance y distinguir continuidad de retención o eliminación de mantenimiento.

### Antes

¿Qué busca eliminar un diseño HA?

- A. Cualquier dependencia de software
- B. Todos los costes
- C. Puntos únicos de fallo relevantes **(correcta)**
- D. Toda necesidad de mantenimiento

Explicación: HA requiere revisar compute, red, energía, storage y servicios auxiliares.

### Propuesta

¿Qué busca eliminar un diseño HA?

- A. Las dependencias funcionales entre componentes de la aplicación.
- B. Las políticas de retención de copias y recuperación de versiones.
- C. Los puntos únicos de fallo relevantes dentro del alcance del diseño. **(correcta)**
- D. Los procedimientos de mantenimiento y verificación de recuperación.

Explicación: La HA busca que fallos relevantes no interrumpan el servicio por depender de un único componente o camino sin alternativa. Exige analizar capas y dependencias, con capacidad suficiente para asumir el fallo. Redundancia no significa ausencia de todo riesgo, mantenimiento o necesidad de recuperar datos históricos.

- Error A: La aplicación puede seguir teniendo dependencias funcionales; el diseño debe reducir su impacto de fallo, no eliminar toda relación.
- Error B: La retención protege puntos de datos anteriores y sigue siendo necesaria aunque haya redundancia.
- Error D: Mantenimiento y comprobaciones permiten conservar la disponibilidad; no son lo que el diseño pretende suprimir.

- [Microsoft: Architecture strategies for designing for redundancy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy) · Redundancia por capas; introducción de deployment stamps; modelos active-active y active-passive · versión: HTML público comprobado 03-11-2026. Roles y capacidad de reserva; no se adopta la afirmación comercial de cero downtime automático o ausencia de problemas de consistencia. · comprobado: 2026-11-03

Partida: `3123ca76b42d583594fa78902bc94673a31d90a07482478943f3a7d3e32855ef` · propuesta: `c2c5529c0ff551b867e04abd09f2c125ce117a84a17cfca8cba53c4f7e5c7ad0`

## AI-GSI-B4-T06-012

Decisión: pending_review · acción: revise.

Motivo: Conservar reserva frente a servicio simultáneo y clave C; alternativas de roles, datos y ubicación.

### Antes

¿Qué distingue activo-pasivo de activo-activo?

- A. Ambos son sinónimos
- B. Activo-pasivo prohíbe failover
- C. Mantiene reserva frente a varios nodos sirviendo simultáneamente **(correcta)**
- D. Activo-activo carece de estado siempre

Explicación: Los modos difieren en uso de nodos y gestión de estado y conmutación.

### Propuesta

¿Qué distingue activo-pasivo de activo-activo?

- A. En activo-pasivo todos sirven tráfico; en activo-activo uno queda en reserva.
- B. En activo-pasivo se comparten datos; en activo-activo los datos son independientes.
- C. En activo-pasivo hay reserva; en activo-activo varios nodos sirven simultáneamente. **(correcta)**
- D. En activo-pasivo los nodos están juntos; en activo-activo están en regiones distintas.

Explicación: La distinción se refiere al papel de los destinos durante la operación: atender trabajo o mantenerse en reserva para asumirlo. No fija por sí sola ubicación, forma de almacenamiento o consistencia. En ambos modelos se deben diseñar capacidad, estado y conmutación; desplegar varias instancias no asegura continuidad sin esas condiciones.

- Error A: Invierte los papeles de servicio simultáneo y reserva.
- Error B: El modelo de datos es otra decisión de arquitectura; no define esos modos por compartir o independizar datos.
- Error D: La ubicación puede variar en ambos modelos; la geografía no es su criterio definitorio.

- [Microsoft: Architecture strategies for designing for redundancy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy) · Redundancia por capas; introducción de deployment stamps; modelos active-active y active-passive · versión: HTML público comprobado 03-11-2026. Roles y capacidad de reserva; no se adopta la afirmación comercial de cero downtime automático o ausencia de problemas de consistencia. · comprobado: 2026-11-03

Partida: `365aee68d809813bc1aabb4b1a3c3fa6cb454b3f8cfd10d49bfd0e326d99b411` · propuesta: `12a304b9b70e7feabcc73a5d8142e43f7040fa9abe55d93d196b1a72568f7ae5`

## AI-GSI-B4-T06-013

Decisión: pending_review · acción: revise.

Motivo: Conservar split-brain y clave C; microcaso de partición que distingue decisión de quorum de aislamiento efectivo.

### Antes

¿Qué problema combaten quorum y fencing?

- A. Duplicación de backups
- B. Fragmentación IP
- C. Split-brain **(correcta)**
- D. Latencia de consultas SQL

Explicación: Evitan que nodos incompatibles actúen simultáneamente como dueños del recurso.

### Propuesta

Un cluster pierde comunicación entre dos grupos y ambos intentan seguir escribiendo como dueños del mismo recurso. ¿Qué problema tratan de impedir quorum y fencing?

- A. Una acumulación de conexiones que supera el límite del balanceador.
- B. Una divergencia entre versiones de backup por distinta retención.
- C. Un split-brain con dos partes actuando como propietarias del recurso. **(correcta)**
- D. Una pérdida óptica que exige revisar conectores y presupuesto del enlace.

Explicación: Tras perder comunicación, dos partes podrían creerse autorizadas a controlar el mismo recurso y producir estados incompatibles: split-brain. El quorum ayuda a decidir qué parte puede continuar; el fencing impide que un nodo no autorizado siga accediendo al recurso. Son funciones complementarias y dependientes de una configuración adecuada.

- Error A: Limitar o repartir conexiones aborda carga, no la doble propiedad de un recurso tras una partición.
- Error B: La retención puede producir historiales diferentes, pero no es el conflicto de propietarios activos descrito.
- Error D: Una pérdida física puede causar incomunicación, pero no describe la consecuencia de doble control que se combate con quorum/fencing.

- [Red Hat: Configuring and managing high availability clusters](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html-single/configuring_and_managing_high_availability_clusters/index) · §1.2.1 Fencing; §1.2.2 Quorum: acceso a recursos, partición y split-brain · versión: Guía RHEL9, apartados HTML comprobados 03-11-2026. Quorum y fencing son complementarios; no se impone una fórmula simple de votos o mecanismo eléctrico a todo cluster. · comprobado: 2026-11-03

Partida: `3de745ada0b3f6106eb8737ff330b210b91a7f2149cfa407b7f2998f18a026d4` · propuesta: `9add076469c9e559011501550dd5fe81f0e660e2407cbc40fced9d3e74077468`

## AI-GSI-B4-T06-014

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y cuatro capas; presentar todas con igual notación para eliminar desequilibrio entre L7 y distractores explicados. Ampliar feedback y respaldo, clave B.

### Antes

Un balanceador decide por host y ruta HTTP. ¿En qué nivel opera esa decisión?

- A. L4 sin inspección de aplicación
- B. L7 **(correcta)**
- C. L2 exclusivamente
- D. L1

Explicación: L7 comprende información de aplicación; L4 decide principalmente por conexión, IP y puerto.

### Propuesta

Un balanceador decide por host y ruta HTTP. ¿En qué nivel opera esa decisión?

- A. L4.
- B. L7. **(correcta)**
- C. L2.
- D. L1.

Explicación: Decidir por host y ruta HTTP requiere interpretar información de aplicación, por lo que esa decisión corresponde a L7. Que el dispositivo también procese conexiones, IP o tramas no cambia el nivel de la regla HTTP preguntada.

- Error A: Una decisión limitada a información de transporte, IP y puerto no interpreta host/path HTTP.
- Error C: L2 trata enlace y tramas; no identifica la semántica de ruta y host de una petición HTTP.
- Error D: L1 trata transmisión física, no selección por contenido HTTP.

- [AWS: What is an Application Load Balancer?](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html) · Application Load Balancer overview: capa7 OSI y reglas según contenido de aplicación · versión: Texto público comprobado 03-11-2026. Se usa clasificación de la decisión HTTP, sin prescribir AWS ni extrapolar todos los comportamientos de su producto. · comprobado: 2026-11-03
- [Red Hat: Configuring and managing high availability clusters](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html-single/configuring_and_managing_high_availability_clusters/index) · §1.2.1 Fencing; §1.2.2 Quorum: acceso a recursos, partición y split-brain · versión: Guía RHEL9, apartados HTML comprobados 03-11-2026. Quorum y fencing son complementarios; no se impone una fórmula simple de votos o mecanismo eléctrico a todo cluster. · comprobado: 2026-11-03

Partida: `075f944c95ca02c2d594ad9ce7c0270aac425d8231702f503b142dfbba0e4d6f` · propuesta: `5ae60d965e26a8fa3de91658f17b13aa1014a104bf1c8143280261a5f0ac6bf3`

## AI-GSI-B4-T06-015

Decisión: pending_review · acción: revise.

Motivo: Conservar exclusión de destinos no sanos y clave A; acotar alternativas sanas y explicar límites/fail-open.

### Antes

¿Qué función cumplen health checks de balanceo?

- A. Retirar nodos no sanos del reparto **(correcta)**
- B. Actualizar automáticamente contratos
- C. Aumentar capacidad física sin límite
- D. Crear copias históricas

Explicación: El reparto debe excluir destinos que no pueden prestar servicio.

### Propuesta

En un balanceador con destinos alternativos sanos, ¿qué función cumplen los health checks del servicio?

- A. Detectar destinos que fallan la comprobación y apartarlos del reparto. **(correcta)**
- B. Seleccionar el algoritmo de distribución a partir del número de conexiones.
- C. Mantener cada sesión del cliente ligada al mismo destino del grupo.
- D. Establecer el peso estático asignado a cada servidor del grupo.

Explicación: Los health checks comprueban un criterio de salud para decidir qué destinos son aptos para recibir tráfico. Con alternativas sanas pueden apartarse los que incumplen ese criterio. No prueban toda la funcionalidad: importan ruta, umbrales y alcance de la comprobación. La política cuando todos fallan depende de la implementación; ALB, por ejemplo, puede operar fail-open.

- Error B: El algoritmo de reparto decide cómo distribuir entre candidatos; no sustituye comprobar si un destino cumple el criterio de salud.
- Error C: La afinidad o persistencia de sesión es otra función del balanceador.
- Error D: Un peso configurado influye en reparto, pero no indica por sí mismo salud del servidor.

- [AWS: Health checks for Application Load Balancer target groups](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html) · Introducción; health check settings; excepción fail-open cuando todos los destinos están unhealthy · versión: HTML público comprobado 03-11-2026. Se acota la pregunta a destinos alternativos sanos; una comprobación parcial no prueba toda función y hay políticas de último recurso por implementación. · comprobado: 2026-11-03
- [nginx: Using nginx as HTTP load balancer](https://nginx.org/en/docs/http/load_balancing.html) · Load balancing methods; Least connected; Least time; Session persistence; Weighted load balancing · versión: Documentación pública comprobada 03-11-2026. Contar conexiones no equivale a medir CPU o tiempo de respuesta; la selección puede ponderarse. No se ejecuta configuración. · comprobado: 2026-11-03

Partida: `b55832672019090d39846079d6418d17f38a8c6f0f258ba90a2b0f88072ac9f4` · propuesta: `ffcc937bfe43bff49f4134310b7a93753b1ce538f57b3db95fc03d07e60f4546`

## AI-GSI-B4-T06-016

Decisión: pending_review · acción: revise.

Motivo: Conservar least connections y clave A; caso de igual peso que diferencia recuento, turno, hash y tiempo.

### Antes

¿Qué algoritmo dirige tráfico considerando conexiones activas?

- A. Least connections **(correcta)**
- B. Selección estática de un único servidor
- C. Round-robin puro sin considerar conexiones
- D. Reparto exclusivamente por orden fijo de nodos

Explicación: El balanceo puede considerar carga de conexiones frente a reparto round-robin.

### Propuesta

Dos servidores sanos de igual peso tienen 2 y 20 conexiones activas. El balanceador asigna la siguiente al de 2 por ser el menor recuento. ¿Qué criterio aplica?

- A. Least connections. **(correcta)**
- B. Round-robin.
- C. Hash de dirección IP.
- D. Least response time.

Explicación: Least connections elige según las conexiones activas, con los pesos o criterios adicionales que establezca la implementación. En el caso ambos destinos tienen igual peso y el recuento favorece al de dos. No demuestra que ese servidor tenga menos CPU, menor latencia o más capacidad física; son métricas distintas.

- Error B: Round-robin alterna según turno; no selecciona por ser mínimo el recuento de conexiones.
- Error C: El hash de IP asigna a partir de una clave del cliente, no de ese mínimo de conexiones.
- Error D: El tiempo de respuesta es otro criterio; el caso explica la elección mediante conexiones activas, sin medir tiempos.

- [nginx: Using nginx as HTTP load balancer](https://nginx.org/en/docs/http/load_balancing.html) · Load balancing methods; Least connected; Least time; Session persistence; Weighted load balancing · versión: Documentación pública comprobada 03-11-2026. Contar conexiones no equivale a medir CPU o tiempo de respuesta; la selección puede ponderarse. No se ejecuta configuración. · comprobado: 2026-11-03

Partida: `b9d7bcabb7ef4473e257315b89a980f219fec70e624a7737060e90b631f3d0c2` · propuesta: `1ecb3e18d4e93b165cea4f66203d8dead686637051c81b1025b8071931eb83c5`

## AI-GSI-B4-T06-018

Decisión: pending_review · acción: revise.

Motivo: Conservar menor preparación de cold y clave A; diferenciar cold/warm/hot sin equiparar preparación con un RTO garantizado.

### Antes

¿Qué caracteriza a un sitio cold frente a hot?

- A. Menor preparación y normalmente mayor RTO **(correcta)**
- B. Recuperación instantánea garantizada
- C. Coste necesariamente mayor
- D. Máxima replicación preparada siempre

Explicación: La preparación del sitio condiciona tiempo de recuperación y coste.

### Propuesta

¿Qué caracteriza a un sitio cold frente a hot?

- A. Menor preparación operativa y más trabajo antes de recuperar el servicio. **(correcta)**
- B. Instalación externa plenamente operativa, equipada con hardware y software.
- C. Instalación acondicionada con parte de los equipos y comunicaciones preparados.
- D. Un objetivo de recuperación fijado únicamente por la cantidad de copias guardadas.

Explicación: Un sitio cold aporta infraestructura básica, pero necesita incorporar o preparar equipamiento y recuperar los sistemas. Frente a un hot listo para usarse suele requerir más trabajo y tiempo de recuperación. El RTO sigue siendo un objetivo de negocio: la solución debe demostrar que puede cumplirlo, no asignar un plazo universal por el nombre del sitio.

- Error B: Describe la preparación de un sitio hot, no la menor disponibilidad inicial de recursos de un cold.
- Error C: El equipamiento parcial caracteriza un warm; cold parte de una preparación menor.
- Error D: La cantidad de copias no define por sí sola ni la categoría de sitio ni el RTO exigido.

- [NIST CSRC: Cold site](https://csrc.nist.gov/glossary/term/cold_site) · Definitions: instalación física/eléctrica preparada para recibir equipo; atribución SP800-34Rev.1 · versión: Glosario HTML comprobado 03-11-2026. Se lee definición, no PDF completo; el objetivo RTO se fija por negocio y la preparación condiciona alcanzarlo. · comprobado: 2026-11-03
- [NIST CSRC: Hot site](https://csrc.nist.gov/glossary/term/hot_site) · Definitions: instalación externa operativa con hardware/software; atribución SP800-34Rev.1 · versión: Glosario HTML comprobado 03-11-2026. Hot no equivale por definición a estar sirviendo tráfico activo-activo o recuperación instantánea. · comprobado: 2026-11-03
- [NIST CSRC: Warm site](https://csrc.nist.gov/glossary/term/warm_site) · Definitions: espacio acondicionado parcialmente equipado; atribución SP800-34Rev.1 · versión: Glosario HTML comprobado 03-11-2026. Definición de preparación parcial; no se fija un tiempo o coste universal. · comprobado: 2026-11-03

Partida: `970dbc37f0d45110be63f5e981a5c65abff1a2c284f0d52f367b39fac2f354d1` · propuesta: `6d6c235d077ba033b7c242e97f530b8fe7d367d5adc9da97cebca1127b87f3f9`

## AI-GSI-B4-T07-003

Decisión: pending_review · acción: revise.

Motivo: Conservar parámetros de enlace y clave D; precisar magnitudes físicas y usar conjuntos de otras capas como distractores.

### Antes

¿Qué conjunto reúne parámetros relevantes de un enlace?

- A. Versiones del editor de texto
- B. Fuente tipográfica y tamaño del logo
- C. Número de formularios
- D. Atenuación, ruido, BER y latencia **(correcta)**

Explicación: Los parámetros físicos y de error condicionan transmisión.

### Propuesta

¿Qué conjunto describe magnitudes de calidad y transmisión de un enlace físico?

- A. Prefijo IP, máscara, gateway y DNS.
- B. MTU IP, ventana TCP, puerto y VLAN.
- C. Tipo MIME, código HTTP, URL y cookie.
- D. Atenuación, ruido, BER y latencia. **(correcta)**

Explicación: La atenuación caracteriza pérdida de señal, el ruido las perturbaciones, BER la proporción de bits erróneos y la latencia el retardo. Son magnitudes para valorar transmisión y comportamiento del enlace. La capacidad física no determina por sí sola el rendimiento útil: influyen errores, equipos y protocolos.

- Error A: Son parámetros de direccionamiento y resolución, no magnitudes de pérdida, error y retardo del medio.
- Error B: Mezcla configuración IP/TCP y VLAN; no es el conjunto de magnitudes de calidad física preguntado.
- Error C: Son elementos de representación y protocolo de aplicación, no propiedades del enlace físico.

- [Fluke Networks: Channel and Component Standards](https://www.flukenetworks.com/blog/cabling-chronicles/whats-difference-between-channel-and-component-standards) · Channel Standards; Component Standards; How Are They Tested? · versión: Artículo de 04-11-2020, HTML comprobado 03-11-2026. Prestaciones de conjunto frente a componentes; los valores y recomendaciones de ensayo dependen de aplicación/alcance y no sustituyen la norma contratada. · comprobado: 2026-11-03
- [FOA: Troubleshooting, Factors That Affect Network Performance](https://www.thefoa.org/tech/ref/testing/test/network-troubleshooting.html) · Párrafos iniciales: BER, pérdida, reflexión, ruido y rango de potencia de receptor · versión: Guía técnica pública comprobada 03-11-2026. Caso de autor para distinguir magnitudes; no se trasladan sus valores o recomendación de conectores como receta universal. · comprobado: 2026-11-03

Partida: `6070b898b7760d5a29f8a6bc72435d75e2a07a7f3e006cd55b4b9db1c99ca361` · propuesta: `0d3a730b92dd58cedeb540087c4b35b585b9917f143253262cb2552ed6dd2cff`

## AI-GSI-B4-T07-004

Decisión: pending_review · acción: revise.

Motivo: Conservar apantallamiento y clave D; distractores sobre pares, conexionado y prestaciones.

### Antes

¿Qué diferencia UTP de un par apantallado?

- A. Un protocolo IP diferente necesariamente
- B. La ausencia de conductores en ambos
- C. El uso obligatorio de luz en UTP
- D. La presencia de apantallamiento **(correcta)**

Explicación: Ambos son cobre trenzado con distinta protección frente a interferencias.

### Propuesta

¿Qué diferencia UTP de un par apantallado?

- A. El número de pares que utiliza una aplicación Ethernet concreta.
- B. La disposición cruzada o directa de un latiguillo de conexión.
- C. La categoría o clase del canal como única característica.
- D. La presencia de pantalla metálica en el cable o sus pares. **(correcta)**

Explicación: UTP designa pares trenzados sin pantalla; otras construcciones incorporan pantalla general, por par o ambas. La nomenclatura U/UTP, F/UTP o S/FTP ayuda a distinguirlo. Categoría, conexionado y aplicación son propiedades diferentes; un cable apantallado sigue necesitando instalación y conexiones adecuadas.

- Error A: La aplicación puede usar distintos pares, pero eso no define la presencia de pantalla.
- Error B: El orden de conexión de conductores no distingue cable apantallado de no apantallado.
- Error C: La categoría expresa prestaciones; no equivale por sí sola a una construcción con o sin pantalla.

- [Fluke Networks: Acronyms for balanced cables](https://www.flukenetworks.com/knowledge-base/applicationstandards-articles-copper/acronyms-balanced-cables) · Ejemplos U/UTP, F/UTP, S/FTP y SF/UTP · versión: Artículo de 28-01-2014, HTML comprobado 03-11-2026; cita anexo informativo de ISO/IEC11801:2010. Se usa nomenclatura, no se afirma lectura de la norma ni que sea su edición vigente. · comprobado: 2026-11-03
- [Fluke Networks: Channel and Component Standards](https://www.flukenetworks.com/blog/cabling-chronicles/whats-difference-between-channel-and-component-standards) · Channel Standards; Component Standards; How Are They Tested? · versión: Artículo de 04-11-2020, HTML comprobado 03-11-2026. Prestaciones de conjunto frente a componentes; los valores y recomendaciones de ensayo dependen de aplicación/alcance y no sustituyen la norma contratada. · comprobado: 2026-11-03

Partida: `b0f976a6b63f348bec677e230ef2603cb54994e5b118d170d8d137086c4bcc09` · propuesta: `3f57ec3c74f833f02e42c03b90be38eb9de6c52d81d2958a2e25710591ba9b1d`

## AI-GSI-B4-T07-005

Decisión: pending_review · acción: revise.

Motivo: Conservar compatibilidad de canal y clave A; microcaso de sustitución parcial que distingue componente y conjunto.

### Antes

¿Qué condición acompaña a elegir una categoría superior de cable?

- A. Conectores, instalación y certificación compatibles **(correcta)**
- B. Ausencia de necesidad de comprobar el canal
- C. Garantía de cualquier distancia
- D. Compatibilidad ilimitada con cualquier transceptor

Explicación: Las prestaciones del canal dependen del conjunto instalado.

### Propuesta

Se cambia solo el cable horizontal por Cat6A, conservando conexiones de otra categoría. ¿Qué debe verificarse para atribuir al canal las prestaciones previstas?

- A. Compatibilidad de componentes, instalación y certificación del canal. **(correcta)**
- B. Categoría de la bobina como acreditación de todos los conectores.
- C. Encendido del enlace como comprobación del margen y la diafonía.
- D. Velocidad configurada del puerto como prueba de pérdidas del canal.

Explicación: Las prestaciones del recorrido dependen del conjunto instalado: cable, conexiones, latiguillos, ejecución y alcance del ensayo. Una categoría impresa en un componente no certifica el canal completo. Debe acordarse si se ensaya enlace permanente o canal y emplear componentes compatibles; no basta con negociar conectividad o fijar una velocidad.

- Error B: La bobina identifica ese componente, no acredita la calidad o prestaciones de conectores y terminaciones.
- Error C: Tener enlace no mide todos los parámetros, como pérdidas o diafonía, exigidos para certificar.
- Error D: Configurar una velocidad no mide las pérdidas reales ni acredita el margen del cableado.

- [Fluke Networks: Channel and Component Standards](https://www.flukenetworks.com/blog/cabling-chronicles/whats-difference-between-channel-and-component-standards) · Channel Standards; Component Standards; How Are They Tested? · versión: Artículo de 04-11-2020, HTML comprobado 03-11-2026. Prestaciones de conjunto frente a componentes; los valores y recomendaciones de ensayo dependen de aplicación/alcance y no sustituyen la norma contratada. · comprobado: 2026-11-03
- [Fluke Networks: How to Test Patch Cords and Fiber Jumper Cables](https://www.flukenetworks.com/blog/cabling-chronicles/say-goodbye-weakest-links) · Channel Testing vs Permanent Link Testing: canal100m, enlace permanente90m y latiguillos10m en conjunto · versión: Artículo de 10-06-2021, HTML comprobado 03-11-2026. Modelo convencional, no límite universal de toda aplicación/temperatura/calibre; no se adoptan estadísticas comerciales de marcas o procedencias. · comprobado: 2026-11-03

Partida: `ffe45bbe1cffda180db12708cd19fd1ba6aba0ad1be4fa90685455ca50f46cfd` · propuesta: `6353dcf5f4fb5a74aaecb7273ce2e00abf33b6a56d007f9ec1a5bff2c5f717c4`

## AI-GSI-B4-T07-006

Decisión: pending_review · acción: revise.

Motivo: Conservar 90 m más latiguillos y clave D; hacer explícito el modelo 100 m y comparar repartos, sin límite universal.

### Antes

En el diseño típico indicado, ¿cómo se reparte el canal de cobre de 100 m?

- A. 50 m obligatorios de fibra y 50 m de cobre
- B. 100 m permanentes más cualquier longitud adicional
- C. Sin límite para latiguillos
- D. 90 m de enlace permanente más latiguillos **(correcta)**

Explicación: La referencia distingue enlace permanente y canal completo, según aplicación y estándar.

### Propuesta

En el modelo de referencia de canal horizontal de cobre de 100 m, ¿qué reparto corresponde al enlace permanente y al conjunto de latiguillos?

- A. 80 m de enlace permanente y20 m de latiguillos en conjunto.
- B. 100 m de enlace permanente y0 m de latiguillos en conjunto.
- C. 70 m de enlace permanente y30 m de latiguillos en conjunto.
- D. 90 m de enlace permanente y10 m de latiguillos en conjunto. **(correcta)**

Explicación: El modelo convencional de referencia reparte 100 m en hasta90 m de enlace permanente y 10 m combinados de latiguillos/equipamiento. Canal y enlace permanente no son el mismo alcance de medida. Aplicación, calibre, temperatura y cordones pueden exigir otros límites; la tolerancia de un instrumento no autoriza a ampliar la longitud diseñada.

- Error A: 80/20 no es el reparto convencional de referencia preguntado; una configuración distinta exigiría comprobar sus condiciones.
- Error B: Asigna los 100 m al tramo fijo y elimina el presupuesto de latiguillos del modelo.
- Error C: 70/30 tampoco corresponde al reparto 90/10 de referencia; no basta que ambos sumen 100 m.

- [Fluke Networks: How to Test Patch Cords and Fiber Jumper Cables](https://www.flukenetworks.com/blog/cabling-chronicles/say-goodbye-weakest-links) · Channel Testing vs Permanent Link Testing: canal100m, enlace permanente90m y latiguillos10m en conjunto · versión: Artículo de 10-06-2021, HTML comprobado 03-11-2026. Modelo convencional, no límite universal de toda aplicación/temperatura/calibre; no se adoptan estadísticas comerciales de marcas o procedencias. · comprobado: 2026-11-03
- [Fluke Networks: Channel and Component Standards](https://www.flukenetworks.com/blog/cabling-chronicles/whats-difference-between-channel-and-component-standards) · Channel Standards; Component Standards; How Are They Tested? · versión: Artículo de 04-11-2020, HTML comprobado 03-11-2026. Prestaciones de conjunto frente a componentes; los valores y recomendaciones de ensayo dependen de aplicación/alcance y no sustituyen la norma contratada. · comprobado: 2026-11-03

Partida: `88ddfa0b402af9361f71accc9278069dc57e286a860af83c96dca7ed724a031b` · propuesta: `07489b60a6e8680b98f2f91a79b35f55dafad03effad94964e2cb5af2f47645d`

## AI-GSI-B4-T07-007

Decisión: pending_review · acción: revise.

Motivo: Conservar conductor central y blindaje, clave A; alternativas de construcción reales y geometría precisa.

### Antes

¿Qué estructura caracteriza al coaxial?

- A. Conductor central y blindaje **(correcta)**
- B. Pares sin ningún blindaje en todos los casos
- C. Solo radio sin guía
- D. Núcleo óptico sin conductor

Explicación: El coaxial conserva usos en radiofrecuencia, acceso y vídeo.

### Propuesta

¿Qué estructura caracteriza al coaxial?

- A. Conductor central rodeado de dieléctrico y conductor exterior concéntrico. **(correcta)**
- B. Dos conductores aislados trenzados entre sí a lo largo del recorrido.
- C. Núcleo y revestimiento ópticos que guían luz por reflexión interna.
- D. Varios pares de cobre reunidos alrededor de un separador en la cubierta.

Explicación: El coaxial sitúa un conductor central y otro exterior alrededor de un dieléctrico, con ejes comunes. El conductor exterior puede actuar como pantalla y retorno. Se distingue de la geometría del par trenzado o de guiar luz en una fibra. Las dimensiones, impedancia y construcción concreta dependen de la aplicación.

- Error B: Describe un par trenzado, no la disposición concéntrica del coaxial.
- Error C: Describe guía óptica de luz, no dos conductores eléctricos separados por dieléctrico.
- Error D: Agrupar pares con separador es otra construcción de cable de cobre, no un conductor exterior concéntrico al central.

- [Belden: Precision Video Coax, RG59, 9141](https://www.belden.com/products/cable/video-cable/coaxial-video-cable/9141) · Descripción y construcción: conductor central, aislamiento de polietileno y pantalla trenzada · versión: Ficha pública comprobada 03-11-2026, estado Discontinued. Se usa como evidencia de construcción del fabricante, no recomendación de compra o producto actual. · comprobado: 2026-11-03
- [Fluke Networks: Acronyms for balanced cables](https://www.flukenetworks.com/knowledge-base/applicationstandards-articles-copper/acronyms-balanced-cables) · Ejemplos U/UTP, F/UTP, S/FTP y SF/UTP · versión: Artículo de 28-01-2014, HTML comprobado 03-11-2026; cita anexo informativo de ISO/IEC11801:2010. Se usa nomenclatura, no se afirma lectura de la norma ni que sea su edición vigente. · comprobado: 2026-11-03
- [FOA: Optical Fiber](https://www.thefoa.org/tech/ref/basic/fiber.html) · Fiber Types: Multimode/Singlemode; Singlemode Fiber; Bend Insensitive Fibers; tabla OM/OS · versión: Guía HTML comprobada 03-11-2026. Se usan tipos, pérdidas, propagación y límites mecánicos; no se adopta ancho de banda infinito ni se confunde diámetro de campo modal con diámetro geométrico exacto. · comprobado: 2026-11-03

Partida: `54794f283b2bed8bdcf5df0dc9409558d7d9c70b26b9876a8b25df3470537465` · propuesta: `82b5b75edce6cfdf1b55c959554e0665f4b9abc39624cfd36112683fed5ef4b5`

## AI-GSI-B4-T07-008

Decisión: pending_review · acción: revise.

Motivo: Conservar elección habitual monomodo y clave D; comparar cuatro fibras, con condiciones de aplicación y ópticas.

### Antes

¿Qué fibra se asocia habitualmente a mayores distancias?

- A. Multimodo como regla universal
- B. Coaxial
- C. UTP
- D. Monomodo **(correcta)**

Explicación: La monomodo tiene núcleo menor y permite mayores alcances en el contexto descrito.

### Propuesta

Para un diseño Ethernet de mayor alcance, con ópticas y presupuesto compatibles, ¿qué familia de fibra suele elegirse?

- A. Multimodo OM1.
- B. Multimodo OM3.
- C. Multimodo OM4.
- D. Monomodo OS2. **(correcta)**

Explicación: La monomodo suele elegirse para mayores alcances, con ópticas y presupuesto de enlace adecuados. Evita la dispersión entre múltiples modos propia de la multimodo, pero siguen existiendo atenuación y otros límites. La designación de fibra no garantiza por sí sola una distancia o velocidad; hay que comprobar transceptores y recorrido.

- Error A: OM1 es multimodo; no es la opción habitual de mayor alcance entre las familias planteadas.
- Error B: OM3 mejora la multimodo para ciertas aplicaciones, pero no la convierte en monomodo para enlaces largos.
- Error C: OM4 amplía prestaciones multimodo en aplicaciones compatibles; no elimina la diferencia modal o de alcance frente a monomodo.

- [FOA: Optical Fiber](https://www.thefoa.org/tech/ref/basic/fiber.html) · Fiber Types: Multimode/Singlemode; Singlemode Fiber; Bend Insensitive Fibers; tabla OM/OS · versión: Guía HTML comprobada 03-11-2026. Se usan tipos, pérdidas, propagación y límites mecánicos; no se adopta ancho de banda infinito ni se confunde diámetro de campo modal con diámetro geométrico exacto. · comprobado: 2026-11-03

Partida: `48a78884dd9c753b739727175c97f15a812f78b85ce4e264d36b26815c48fe28` · propuesta: `a84eed88b255b2ad64369b6487e914bff789dea4f0d89faf387a363e7bcf9b46`

## AI-GSI-B4-T07-010

Decisión: pending_review · acción: revise.

Motivo: Conservar inmunidad EMI y clave C; acotar señal óptica y explicar límites físicos y cables híbridos.

### Antes

¿Qué ventaja tiene la fibra frente a EMI?

- A. Alimentación PoE directa equivalente al cobre
- B. Ausencia de cualquier atenuación
- C. Inmunidad a interferencia electromagnética **(correcta)**
- D. Imposibilidad de daño mecánico

Explicación: La inmunidad electromagnética no elimina pérdidas ni cuidados físicos.

### Propuesta

Respecto a la señal guiada por una fibra óptica, ¿qué ventaja aporta frente al par de cobre en un entorno con EMI?

- A. Transportar alimentación PoE por la propia fibra de vidrio.
- B. Mantener potencia óptica de recepción sin pérdidas en el enlace.
- C. Evitar el acoplamiento de EMI sobre la señal óptica como en cobre. **(correcta)**
- D. Suprimir límites de curvatura al no usar conductores metálicos.

Explicación: La señal guiada por la fibra no sufre el acoplamiento electromagnético característico de conductores de cobre. Eso no elimina atenuación, reflexión, suciedad o daños por curvatura. Un cable puede incluir armadura o conductores metálicos; la ventaja se refiere a transmisión óptica y no convierte todo el conjunto en eléctricamente inerte.

- Error A: El vidrio no transporta PoE como el par de cobre; un cable híbrido necesita conductores eléctricos separados para alimentar.
- Error B: La inmunidad a EMI no evita pérdidas ópticas y sigue siendo necesario un presupuesto de potencia.
- Error D: La fibra puede dañarse o perder señal por curvatura, aunque no transporte eléctricamente la comunicación.

- [FOA: Fiber FAQs](https://www.thefoa.org/FiberFAQs.html) · Technology: Electromagnetic Interference; transmisión por vidrio y ejemplo OPGW · versión: Página indica Updated11/21; cuerpo público comprobado 03-11-2026. Se acota a la señal óptica; no se toma toda cubierta o armadura como necesariamente dieléctrica. · comprobado: 2026-11-03
- [FOA: Optical Fiber](https://www.thefoa.org/tech/ref/basic/fiber.html) · Fiber Types: Multimode/Singlemode; Singlemode Fiber; Bend Insensitive Fibers; tabla OM/OS · versión: Guía HTML comprobada 03-11-2026. Se usan tipos, pérdidas, propagación y límites mecánicos; no se adopta ancho de banda infinito ni se confunde diámetro de campo modal con diámetro geométrico exacto. · comprobado: 2026-11-03
- [FOA: Fiber Optic Cable](https://www.thefoa.org/tech/ref/basic/cable.html) · Introducción y Cable Types: protección, tensión, entorno y cubiertas · versión: Guía HTML comprobada 03-11-2026. El cable puede incluir elementos metálicos; la inmunidad de la señal óptica no elimina requisitos físicos o eléctricos de esos componentes. · comprobado: 2026-11-03

Partida: `fdf070904284f5ff009677cad547be64b27dac5464905b699eac7a2660c5b9ec` · propuesta: `6917eef515e311f76c91698eae25f63d053636825a6847986ed96c9f374be10a`

## AI-GSI-B4-T07-012

Decisión: pending_review · acción: revise.

Motivo: Conservar limpieza/protección mecánica y clave C; caso de reconexión sin ordenar una maniobra física real o atribuir una causa sin evidencia.

### Antes

¿Qué mantenimiento requiere especial cuidado en fibra?

- A. Engrasar el núcleo óptico
- B. Abrir el blindaje de cobre inexistente
- C. Limpieza de conectores y protección mecánica **(correcta)**
- D. Cambiar puertos TCP

Explicación: Suciedad o daños físicos pueden degradar un enlace óptico.

### Propuesta

Tras varias reconexiones de un latiguillo óptico aumentan las pérdidas, sin cambios de configuración. ¿Qué mantenimiento del medio debe priorizarse?

- A. Revisar asignación IP del equipo y tamaño de la ventana TCP.
- B. Modificar negociación Ethernet y tamaño máximo de trama.
- C. Inspeccionar y limpiar conexiones, comprobando curvaturas y daños. **(correcta)**
- D. Reajustar rutas de capa3 y distribución de VLANs del enlace.

Explicación: Un aumento de pérdidas tras manipular conexiones requiere revisar el medio óptico: suciedad, estado de conectores, curvaturas y daños son hipótesis pertinentes. Se inspecciona y limpia con los procedimientos y útiles adecuados antes de volver a medir. El síntoma no prueba una causa única; las comprobaciones deben respetar seguridad óptica y especificaciones del fabricante.

- Error A: IP y ventana TCP no reparan contaminación o daño que aumente la pérdida de potencia del trayecto óptico.
- Error B: Negociación y MTU no sustituyen comprobar el medio ante el aumento de pérdidas medido.
- Error D: Rutas y VLANs operan en otras capas; no corrigen la pérdida óptica causada por una conexión o curvatura.

- [FOA: Cleaning Fiber Optic Connections](https://www.thefoa.org/tech/cleaning.htm) · Inicio: contaminación, pérdidas/reflexión y cuidado al reconectar · versión: Guía técnica HTML comprobada 03-11-2026. Respalda inspección/limpieza; no se prescribe disolvente o procedimiento físico y no se observa una fibra activa. · comprobado: 2026-11-03
- [FOA: Optical Fiber](https://www.thefoa.org/tech/ref/basic/fiber.html) · Fiber Types: Multimode/Singlemode; Singlemode Fiber; Bend Insensitive Fibers; tabla OM/OS · versión: Guía HTML comprobada 03-11-2026. Se usan tipos, pérdidas, propagación y límites mecánicos; no se adopta ancho de banda infinito ni se confunde diámetro de campo modal con diámetro geométrico exacto. · comprobado: 2026-11-03
- [FOA: Fiber Optic Cable](https://www.thefoa.org/tech/ref/basic/cable.html) · Introducción y Cable Types: protección, tensión, entorno y cubiertas · versión: Guía HTML comprobada 03-11-2026. El cable puede incluir elementos metálicos; la inmunidad de la señal óptica no elimina requisitos físicos o eléctricos de esos componentes. · comprobado: 2026-11-03

Partida: `5d441f9c531e7d35b0e2718b27cf83fa2ef69deecd96d21711e26c91bf2f8126` · propuesta: `c809f74838deab86712b7c8d3b17e51264a4b1b779fca7d8308b9d68d8c4c02f`

## AI-GSI-B4-T07-016

Decisión: pending_review · acción: revise.

Motivo: Conservar etiquetado/documentación/certificación y clave B; caso de entrega incompleta con alternativas de comprobación reales.

### Antes

¿Qué debe acompañar a instalar un enlace estructurado?

- A. Ocultar el recorrido
- B. Etiquetado, documentación y certificación **(correcta)**
- C. Eliminar identificadores
- D. Solo comprobar que se enciende una luz

Explicación: Documentar y certificar permite mantener y comprobar la infraestructura.

### Propuesta

Un enlace nuevo tiene conectividad, pero se entrega sin IDs, planos o resultados de ensayo. ¿Qué falta para mantenerlo y verificar sus prestaciones?

- A. Un listado de direcciones IP y una comprobación de respuesta ICMP.
- B. Etiquetado, planos actualizados y resultados de certificación del enlace. **(correcta)**
- C. Un inventario de switches y sus contadores de paquetes por interfaz.
- D. Un acta de velocidad negociada y pruebas de acceso a las aplicaciones.

Explicación: Identificar cada enlace y mantener documentación coherente con sus resultados permite localizarlo, modificarlo y verificar sus prestaciones. La certificación debe corresponder al alcance y límites acordados, con el método adecuado. Una prueba de conectividad funcional es útil, pero no sustituye medir los parámetros del cableado ni relacionarlos con un enlace identificado.

- Error A: IP e ICMP muestran aspectos de conectividad lógica, no identificación del recorrido ni prestaciones físicas certificadas.
- Error C: Inventariar equipos y tráfico no documenta por sí mismo el enlace pasivo o sus resultados de ensayo.
- Error D: Negociar velocidad y acceder a una aplicación no mide todo el margen y los parámetros exigidos al cableado.

- [Fluke Networks: Document Cabling Certification](https://www.flukenetworks.com/blog/cabling-chronicles/your-burden-proof-lies-documentation) · Resultados y parámetros medidos; Give it a Label: correspondencia entre identificación y documentación · versión: HTML público comprobado 03-11-2026. Texto cita 606A como referencia histórica; se usa trazabilidad de resultados, no se afirma edición normativa vigente o necesidad de comprar su software. · comprobado: 2026-11-03
- [Fluke Networks: Channel and Component Standards](https://www.flukenetworks.com/blog/cabling-chronicles/whats-difference-between-channel-and-component-standards) · Channel Standards; Component Standards; How Are They Tested? · versión: Artículo de 04-11-2020, HTML comprobado 03-11-2026. Prestaciones de conjunto frente a componentes; los valores y recomendaciones de ensayo dependen de aplicación/alcance y no sustituyen la norma contratada. · comprobado: 2026-11-03

Partida: `43d929b542e77c2fd463c6e8be31674deb9a8c69d272a5361e9e9be44ff6961b` · propuesta: `927f94ea6689973a3fbd9a277bc5e33b21db32e9af152ed086a11bd201dcd3c9`

## AI-GSI-B4-T07-017

Decisión: pending_review · acción: revise.

Motivo: Conservar planificación de rutas/fibras y clave C; exigir tanto ampliación como menor dependencia de un recorrido único.

### Antes

¿Qué favorece crecimiento y redundancia del cableado?

- A. Ausencia de planos
- B. Ocupar siempre toda capacidad sin margen
- C. Rutas y fibras de reserva planificadas **(correcta)**
- D. Un único recorrido sin evaluar riesgo

Explicación: La reserva y diversidad facilitan ampliación y continuidad.

### Propuesta

¿Qué enfoque facilita ampliar el cableado y reduce la dependencia de un único recorrido físico?

- A. Reservar fibras adicionales dentro de un único recorrido compartido.
- B. Elegir puertos más rápidos manteniendo ocupados todos los conductos.
- C. Prever rutas alternativas y fibras de reserva en los tramos necesarios. **(correcta)**
- D. Ampliar el número de VLANs sobre el mismo conjunto físico de enlaces.

Explicación: Las fibras de reserva facilitan crecimiento o sustitución, y recorridos alternativos pueden reducir el impacto de un corte común. Debe comprobarse su diversidad real: dos rutas que comparten conducto, entrada o riesgo pueden fallar juntas. La reserva necesita planificación y documentación, no solo más capacidad lógica o velocidad nominal.

- Error A: Las fibras extra ayudan a ampliar o sustituir, pero el único recorrido mantiene el mismo punto común frente a un corte.
- Error B: Aumentar velocidad no proporciona espacio de ampliación o una ruta física alternativa.
- Error D: Crear VLANs divide lógicamente el tráfico, sin añadir fibras o diversidad física.

- [FOA: Fiber Optic Network Restoration](https://www.thefoa.org/tech/ref/restoration/rest.html) · Designing For Non-Stop Operation As Well As Restoration: rutas diversas, fibras de reserva y documentación · versión: Guía HTML comprobada 03-11-2026. Se evalúan fallos comunes reales; no se prometen tiempos instantáneos, costes o profundidades de obra universales. · comprobado: 2026-11-03

Partida: `df5916456e6713ca8ddbd02ab6c98816d61b248e225dec037bef170c352fbaa5` · propuesta: `d21079d76d15992750682dbec74d42f09a3ce6967a440ee15000b59ee2b53fee`

## AI-GSI-B4-T07-001

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas, correctos para distinguir magnitudes. Ampliar feedback y referencia, clave B.

### Antes

¿Qué expresa el decibelio?

- A. Una distancia fija
- B. Una relación logarítmica **(correcta)**
- C. Un número de paquetes
- D. Una frecuencia exclusivamente

Explicación: dB se usa para relaciones, no equivale a una unidad lineal de distancia o tráfico.

### Propuesta

¿Qué expresa el decibelio?

- A. Una distancia fija
- B. Una relación logarítmica **(correcta)**
- C. Un número de paquetes
- D. Una frecuencia exclusivamente

Explicación: El decibelio expresa un nivel logarítmico basado en una relación entre magnitudes comparables. Para interpretar un nivel hay que conocer la magnitud y referencia; dB no significa directamente metros, paquetes o hercios. La atenuación expresada en dB describe una relación de señal, no una longitud de cable fija.

- Error A: Una distancia fija se expresa en unidades de longitud, no es la definición del decibelio.
- Error C: Un número de paquetes es un recuento de tráfico; no expresa por sí mismo una relación logarítmica.
- Error D: La frecuencia se expresa en hercios; un nivel en dB puede depender de ella sin ser una frecuencia.

- [NIST: Guide to the SI, Chapter8](https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-8) · §8.7 Logarithmic quantities and units: level, neper, bel; decibelio y valor de referencia · versión: SP811, capítulo 8 HTML comprobado 03-11-2026. Se usa naturaleza logarítmica y referencia; no se declara lectura de IEC60027-3 o del PDF completo. · comprobado: 2026-11-03

Partida: `11be7170cfb117b7221500fa6378a920ccfb7939071f94c2bb64161fc7adc37a` · propuesta: `5e5463aff1fecacc966cec2157f156f4f77f118aeca938ca4f2a1c2ee17fdbea`

## AI-GSI-B4-T08-001

Decisión: pending_review · acción: revise.

Motivo: Conservar IEEE 802.3 y clave A; cuatro familias IEEE reales en lugar de lenguajes o gestión ajenos.

### Antes

¿A qué familia corresponde Ethernet?

- A. IEEE 802.3 **(correcta)**
- B. SNMPv3
- C. IEEE 802.11 exclusivamente
- D. VoiceXML

Explicación: Ethernet define funciones físicas y de enlace de LAN cableadas.

### Propuesta

¿A qué familia corresponde Ethernet?

- A. IEEE 802.3. **(correcta)**
- B. IEEE 802.1.
- C. IEEE 802.11.
- D. IEEE 802.15.

Explicación: IEEE 802.3 corresponde a Ethernet. La lista de grupos IEEE diferencia esta familia de protocolos LAN de capas superiores y de redes inalámbricas. Que otros estándares participen en una red Ethernet no los convierte en la familia que define Ethernet.

- Error B: IEEE 802.1 se ocupa de protocolos LAN de capas superiores; no es el grupo Ethernet802.3.
- Error C: IEEE 802.11 corresponde a Wireless LAN, no a la familia Ethernet preguntada.
- Error D: IEEE 802.15 se ocupa de redes inalámbricas especializadas; no es 802.3 Ethernet.

- [IEEE: 802.3 Ethernet Working Group](https://www.ieee802.org/3/) · Cabecera IEEE 802.3 Ethernet Working Group; acceso a estándares del grupo · versión: Página primaria del grupo comprobada 03-11-2026. Identificación de familia; no se atribuye lectura completa de normas o sus revisiones enlazadas. · comprobado: 2026-11-03
- [IEEE: 802 LMSC Working Groups](https://www.ieee802.org/) · Lista de grupos:802.1 Higher Layer LAN Protocols,802.3 Ethernet,802.11 Wireless LAN,802.15 Wireless Specialty Network · versión: Página actualizada28-07-2026, comprobada 03-11-2026. Se comparan familias, sin afirmar que una sola cubra toda la arquitectura de red. · comprobado: 2026-11-03

Partida: `54ce2044983c226bbb8075e0ce2c20ca7da891c224239ce674f9c770e3037449` · propuesta: `dae436bb62008dfd181df451262d3a03b2bffb40a53363ac6dddff36b786c5d5`
