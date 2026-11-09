# GSI-EDITORIAL-020 — revisión propuesta

Preparado: 2026-10-27. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `2570edc7c1c3959fa68a957341f86ed7ef55843e26f344589e3b211078b0d7e2`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P17-038

Decisión: pending_review · acción: revise.

Motivo: Conservar elección de clúster HPC y clave B; precisar ejecución coordinada entre nodos y comparar infraestructuras reales en lugar de móvil, DNS e impresora.

### Antes

Para una simulación científica que escala bien entre nodos, ¿qué infraestructura es razonable valorar?

- A. Un único móvil sin aceleradores por definición.
- B. Un clúster HPC con interconexión adecuada y software paralelo. **(correcta)**
- C. Un servidor DNS como motor de cálculo.
- D. Una impresora de red con almacenamiento.

Explicación: HPC combina nodos, interconexión y middleware/software paralelo.

### Propuesta

Una simulación ya está paralelizada para ejecutar partes coordinadas en varios nodos. ¿Qué infraestructura encaja de forma más directa con ese diseño?

- A. Un servidor SMP de memoria compartida, sin distribución del cálculo entre nodos.
- B. Un clúster HPC con interconexión adecuada y software paralelo. **(correcta)**
- C. Un clúster de almacenamiento orientado a capacidad y acceso a archivos.
- D. Una granja transaccional dimensionada para peticiones independientes.

Explicación: El diseño ya distribuye trabajo coordinado entre nodos, por lo que un clúster HPC con comunicación y software paralelo adecuados encaja directamente. Importan red, memoria, balance de trabajo y relación entre cómputo y comunicación. No basta sumar CPU ni se garantiza escalado lineal de toda carga. Debe contrastarse el rendimiento real y las dependencias de la simulación, sin confundir infraestructura de archivos con ejecución del cálculo.

- Error A: El equipo SMP ofrece paralelismo interno y puede ser útil para otras versiones de la carga, pero no aprovecha directamente el diseño descrito de ejecución entre varios nodos.
- Error C: El almacenamiento puede apoyar la simulación, pero la orientación a archivos y capacidad no define por sí sola el entorno de cálculo paralelo coordinado.
- Error D: Atender peticiones independientes prioriza otro patrón de trabajo. No acredita la interconexión y coordinación que requiere una simulación distribuida.

- [Cornell Virtual Workshop: Clusters](https://cvw.cac.cornell.edu/parallel/hpc/clusters) · Párrafos de definición, nodos, planificador e interconexiones: máquinas coordinadas como recurso y comunicación de tareas · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Cornell Virtual Workshop: High Performance Computing](https://cvw.cac.cornell.edu/parallel/hpc/high-performance-computing) · Definición inicial y distinción HPC/HTC; solo fundamentos y cómputo a gran escala, sin tomar cifras o noticias históricas como actuales · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [LLNL: Introduction to Parallel Computing Tutorial](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) · Parallel Computers, Distributed Memory / Message Passing, Granularity y Computation / Communication Ratio: nodos coordinados, comunicación y trabajo útil · versión: Versión 16-06-2026; solo fundamentos de apartados indicados; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `b67f1daa8102a5412c389f635106d09d9c787ae29d6c4dd0fe4a3edd43b5a64f` · propuesta: `387fbeadaa75baa9ec904a6cd8df9c4e5b38025c98868db61c36b3521036dea0`

## MAN-GSI-P17-039

Decisión: pending_review · acción: revise.

Motivo: Conservar caso bancario y clave B; cuatro familias reales y comparables, sin ausencia de CPU, bajo consumo ajeno o afirmaciones de exclusividad.

### Antes

Para un core bancario con enorme volumen transaccional, continuidad y E/S, ¿qué familia histórica de sistemas encaja mejor conceptualmente?

- A. Supercomputador orientado exclusivamente a simulación científica.
- B. Mainframe. **(correcta)**
- C. Microcontrolador de muy bajo consumo.
- D. Sistema de archivos distribuido sin CPU.

Explicación: El perfil transaccional y de continuidad es típico de mainframe.

### Propuesta

Para un core bancario con enorme volumen transaccional, continuidad y E/S, ¿qué familia histórica de sistemas encaja mejor conceptualmente?

- A. Supercomputador orientado a grandes simulaciones científicas paralelas.
- B. Mainframe orientado a transacciones, E/S y continuidad de servicio. **(correcta)**
- C. Estación de trabajo orientada a diseño gráfico interactivo local.
- D. Servidor de archivos orientado a almacenamiento compartido en red.

Explicación: El perfil transaccional de gran volumen, con E/S y continuidad, corresponde a la orientación histórica de los mainframes. Incluyen mecanismos para consolidar y aislar cargas y sostener operación continuada. Es una asociación conceptual de prioridades, no una prescripción de compra ni la afirmación de que solo esta familia pueda ejecutar un core bancario. Supercomputación, estaciones y almacenamiento priorizan otros tipos de trabajo.

- Error A: La simulación científica paralela caracteriza la orientación HPC. No es el perfil transaccional y de E/S que destaca el caso, aunque puedan coexistir familias de sistemas en una entidad.
- Error C: La interacción gráfica de un puesto local es otra prioridad. No identifica la plataforma central de gran volumen transaccional y continuidad descrita.
- Error D: Servir archivos es una función de almacenamiento. No equivale a ejecutar y aislar el conjunto de cargas transaccionales del core.

- [IBM: What is a mainframe?](https://www.ibm.com/think/topics/mainframe) · Mainframe, defined, párrafo inicial; How does a modern mainframe work?, Operating systems y Workload isolation and virtualization: transacciones, E/S, continuidad y aislamiento · versión: Publicación 08-04-2024, actualización 03-09-2026; solo fundamentos, sin adoptar cuotas de mercado, cifras de producto o garantías absolutas; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Cornell Virtual Workshop: High Performance Computing](https://cvw.cac.cornell.edu/parallel/hpc/high-performance-computing) · Definición inicial y distinción HPC/HTC; solo fundamentos y cómputo a gran escala, sin tomar cifras o noticias históricas como actuales · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `7036f02c5bd00a2dea4c6ab0a763339711d5caec8bc5f4556c0c00fd05e0e406` · propuesta: `c81fa9ec1ed778cc9bbfac895dc649a796f88380f7edc48b2f8709ba498e5827`

## MAN-GSI-P17-040

Decisión: pending_review · acción: revise.

Motivo: Conservar coste de coordinación y clave B; comparar estrategias próximas de granularidad, localidad y balanceo sin tres distractores mínimos y correcta desarrollada.

### Antes

¿Qué error de diseño puede degradar un algoritmo paralelo?

- A. Reducir contención.
- B. Crear demasiada sincronización y comunicación respecto al trabajo útil. **(correcta)**
- C. Aumentar localidad de datos.
- D. Equilibrar la carga entre trabajadores.

Explicación: El overhead de comunicación/sincronización puede anular el beneficio del paralelismo.

### Propuesta

¿Qué error de diseño puede degradar un algoritmo paralelo?

- A. Reagrupar tareas cuando coordinar cada unidad cuesta más que realizar su cálculo útil.
- B. Fragmentar el trabajo hasta que mensajes y barreras dominan sobre el cálculo útil. **(correcta)**
- C. Mejorar la distribución de datos para reducir accesos remotos frecuentes entre nodos.
- D. Repartir trabajo para reducir la espera que produce el trabajador más lento.

Explicación: Una granularidad demasiado fina puede dedicar más tiempo a mensajes, sincronización y gestión que al cálculo útil. El paralelismo solo compensa si el trabajo y su coordinación se organizan de manera adecuada. Agrupar tareas, mejorar localidad y equilibrar carga pueden reducir costes, respetando dependencias y corrección. No se deduce que toda comunicación o barrera sea innecesaria ni que más trabajadores mejoren siempre el resultado.

- Error A: Reagrupar trabajo puede amortizar un coste de coordinación excesivo. Es una respuesta posible al problema, no el error de fragmentación preguntado.
- Error C: Mejorar localidad puede reducir comunicaciones o accesos remotos. El error descrito en la correcta consiste en aumentar el coste relativo de coordinar el cálculo.
- Error D: Equilibrar carga reduce esperas por trabajadores descompensados. Debe medirse, pero no es el exceso de coordinación frente a trabajo útil que degrada el algoritmo.

- [LLNL: Introduction to Parallel Computing Tutorial](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) · Parallel Computers, Distributed Memory / Message Passing, Granularity y Computation / Communication Ratio: nodos coordinados, comunicación y trabajo útil · versión: Versión 16-06-2026; solo fundamentos de apartados indicados; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `8e6203989960d7c6cc2d10e5b6e997cc13790b1453bfdb166acfef4c1d63270e` · propuesta: `c209247cd38ce4db362269c54ab6f74a320aa70e10223b75a32cfbfbe0e0e835`

## MAN-GSI-P17-041

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y opciones; completar scale up/out/in y límites de redimensionado, sin garantizar ausencia o presencia de reinicio en todo diseño.

### Antes

¿Qué significa escalado vertical o scale up?

- A. Aumentar recursos de un nodo, por ejemplo CPU o RAM. **(correcta)**
- B. Añadir más nodos a la plataforma.
- C. Reducir el número de réplicas.
- D. Distribuir usuarios por DNS sin cambiar recursos.

Explicación: Scale up aumenta capacidad dentro de una máquina o instancia.

### Propuesta

¿Qué significa escalado vertical o scale up?

- A. Aumentar recursos de un nodo, por ejemplo CPU o RAM. **(correcta)**
- B. Añadir más nodos a la plataforma.
- C. Reducir el número de réplicas.
- D. Distribuir usuarios por DNS sin cambiar recursos.

Explicación: Scale up aumenta la capacidad de una máquina, instancia o recurso, por ejemplo con más CPU o RAM. Se distingue de añadir unidades en horizontal y de reducir capacidad o réplicas. Puede exigir cambio de tamaño, límites físicos o reinicio según el servicio, sin que ello sea una condición universal. Redistribuir tráfico sin modificar recursos no constituye por sí solo un aumento de capacidad.

- Error B: Añadir nodos o instancias es scale out, crecimiento horizontal. No aumenta los recursos de una unidad existente como define scale up.
- Error C: Reducir réplicas corresponde a scale in. No es el incremento vertical de capacidad preguntado.
- Error D: Cambiar reparto por DNS afecta al encaminamiento de usuarios. Si no cambian recursos, no describe por sí mismo escalado vertical.

- [Microsoft Learn: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Introducción y lista de escalado vertical/horizontal; Autoscaling components y Application design considerations: ajuste, instrumentación, límites y retirada segura · versión: Actualización 11-10-2026 indicada por la página; sin garantizar continuidad por el mero hecho de añadir instancias; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Design to scale out](https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/scale-out) · Design your application so that it can scale horizontally; Recommendations, Avoid instance stickiness e Identify bottlenecks: estado local, réplica y dependencias · versión: Actualización 23-09-2024; se usan criterios generales, no crecimiento lineal garantizado; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `d8ccd49e23f23eb3fb143e3b1541caf0ab4a9a640bfe00481fb6ab551e89cf54` · propuesta: `2f94478d8fb2fe6fe37e940c517ed86649451a20b1286a80f5d543b62a1c9332`

## MAN-GSI-P17-042

Decisión: pending_review · acción: revise.

Motivo: Conservar scale out y clave C; comparar cuatro movimientos de escalado en lugar de disco menor o desactivar balanceo.

### Antes

¿Qué significa escalado horizontal o scale out?

- A. Aumentar exclusivamente la frecuencia de una CPU.
- B. Mover la aplicación a un disco más pequeño.
- C. Añadir nodos o instancias para repartir la carga. **(correcta)**
- D. Desactivar balanceo.

Explicación: Scale out incrementa el número de unidades de cómputo.

### Propuesta

¿Qué significa escalado horizontal o scale out?

- A. Aumentar CPU y memoria de una instancia existente para darle más capacidad.
- B. Reducir CPU y memoria asignadas a una instancia que tiene capacidad sobrante.
- C. Ampliar el número de nodos o instancias que se reparten la carga. **(correcta)**
- D. Retirar réplicas cuando disminuye la demanda del servicio.

Explicación: Scale out añade unidades de cómputo para distribuir trabajo. Scale in las retira; scale up y scale down cambian la capacidad de una unidad. El aumento horizontal requiere que la aplicación pueda repartir trabajo y que sus dependencias acompañen. Añadir réplicas web no elimina un cuello de botella en base de datos ni garantiza multiplicar el rendimiento por el número de instancias.

- Error A: Aumentar recursos dentro de una instancia describe scale up, crecimiento vertical. No cambia el número de unidades.
- Error B: Reducir recursos de una instancia describe scale down. Disminuye capacidad vertical, no añade unidades.
- Error D: Retirar réplicas es scale in, reducción horizontal. Es la dirección contraria al scale out preguntado.

- [Microsoft Learn: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Introducción y lista de escalado vertical/horizontal; Autoscaling components y Application design considerations: ajuste, instrumentación, límites y retirada segura · versión: Actualización 11-10-2026 indicada por la página; sin garantizar continuidad por el mero hecho de añadir instancias; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Design to scale out](https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/scale-out) · Design your application so that it can scale horizontally; Recommendations, Avoid instance stickiness e Identify bottlenecks: estado local, réplica y dependencias · versión: Actualización 23-09-2024; se usan criterios generales, no crecimiento lineal garantizado; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `d0b7c24f0b77a320526592de776888175dae0a7eb4fd60ccee102b9eddfbf46c` · propuesta: `34a9a3b20055d4345b31aaeecd61a0b65888c3cd9d8a46c87d7babc296b842cb`

## MAN-GSI-P17-043

Decisión: pending_review · acción: revise.

Motivo: Conservar adaptación de capacidad y clave C; introducir crecimiento y reducción y evitar automatización o capacidad infinita como requisitos absolutos.

### Antes

¿Qué es elasticidad?

- A. Sinónimo exacto de alta disponibilidad.
- B. Copiar datos una vez al año.
- C. Capacidad de ajustar recursos a la demanda, idealmente de forma rápida o automática. **(correcta)**
- D. Usar siempre la máxima capacidad contratada.

Explicación: Un sistema puede escalar y, sin embargo, no ajustar recursos elásticamente.

### Propuesta

¿Qué es elasticidad?

- A. Mantener una reserva fija de recursos dimensionada para el máximo previsto.
- B. Aumentar capacidad de forma permanente para acompañar un crecimiento planificado.
- C. Ajustar recursos al subir o bajar la demanda, con rapidez y automatización cuando proceda. **(correcta)**
- D. Conmutar el servicio a una réplica sana cuando falla la instancia que lo atendía.

Explicación: Elasticidad es adaptar recursos a la demanda, tanto al crecer como al disminuir. La característica NIST de elasticidad rápida contempla aprovisionar y liberar capacidad, en algunos casos automáticamente. La automatización es habitual y útil, pero no se exige afirmar que todo ajuste sea instantáneo o automático. Una reserva fija, un crecimiento permanente y una conmutación resuelven necesidades relacionadas, sin definir por sí solos elasticidad.

- Error A: Una reserva fija puede atender picos o recuperación, pero mantiene capacidad sin adaptarla a cada variación de demanda. No caracteriza la elasticidad.
- Error B: El crecimiento planificado puede demostrar escalabilidad. Si la capacidad queda fijada y no se ajusta de vuelta con la demanda, no acredita comportamiento elástico.
- Error D: Conmutar a una réplica sana es un mecanismo de disponibilidad o recuperación. Puede coexistir con elasticidad, pero no describe adaptar recursos a la demanda.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Introducción y lista de escalado vertical/horizontal; Autoscaling components y Application design considerations: ajuste, instrumentación, límites y retirada segura · versión: Actualización 11-10-2026 indicada por la página; sin garantizar continuidad por el mero hecho de añadir instancias; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Business continuity, high availability, and disaster recovery](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery) · High availability, Fault tolerance, Scalability and elasticity; Disaster recovery plans, Backups y Testing and drills: objetivos, reservas de capacidad, recuperación y pruebas · versión: Actualización 01-06-2026; clasificación HA/DR según riesgos y carga, sin umbral universal de disponibilidad; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `40af2db6079c507251162094112e86c71e0dff7204ca05c9a77b970fcedae416` · propuesta: `0d9430b2af82347f8735224e8ca6db1f920c8db78795f509c5aff2cab9b9502e`

## MAN-GSI-P17-044

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción y clave D; comparar inversión, confusión vertical/horizontal y controles de continuidad en lugar de impresoras o apagar servicios.

### Antes

¿Qué diferencia hay entre escalabilidad y elasticidad?

- A. No existe diferencia.
- B. Elasticidad solo se aplica a impresoras.
- C. Escalabilidad implica obligatoriamente apagar servicios.
- D. Escalabilidad es poder crecer; elasticidad añade adaptación dinámica a la demanda. **(correcta)**

Explicación: Son conceptos próximos, pero no equivalentes.

### Propuesta

¿Qué diferencia hay entre escalabilidad y elasticidad?

- A. Escalabilidad adapta recursos a cada pico; elasticidad es capacidad fija de crecimiento.
- B. Escalabilidad se limita a añadir nodos; elasticidad se limita a aumentar la RAM de un nodo.
- C. Escalabilidad reduce fallos físicos; elasticidad conserva copias históricas recuperables.
- D. Escalabilidad permite variar capacidad; elasticidad la ajusta dinámicamente a la demanda. **(correcta)**

Explicación: Escalabilidad trata la capacidad de acomodar variaciones de carga mediante recursos y diseño; la elasticidad añade el ajuste de esos recursos a la demanda en el tiempo. Puede haber un sistema que crezca mediante una intervención planificada y conserve esa capacidad sin reducirla al caer la carga. Ninguno de los conceptos se restringe por definición a hardware físico, horizontalidad o RAM, ni sustituye disponibilidad y protección de datos.

- Error A: Intercambia los conceptos y presenta elasticidad como fija. El ajuste dinámico a la demanda es precisamente el rasgo elástico.
- Error B: Confunde los ejes: escalabilidad puede ser vertical u horizontal y la elasticidad no se limita a memoria de una máquina.
- Error C: Describe objetivos de disponibilidad y backup. No distingue capacidad de crecimiento y adaptación de recursos a la carga.

- [Microsoft Learn: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Introducción y lista de escalado vertical/horizontal; Autoscaling components y Application design considerations: ajuste, instrumentación, límites y retirada segura · versión: Actualización 11-10-2026 indicada por la página; sin garantizar continuidad por el mero hecho de añadir instancias; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Design to scale out](https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/scale-out) · Design your application so that it can scale horizontally; Recommendations, Avoid instance stickiness e Identify bottlenecks: estado local, réplica y dependencias · versión: Actualización 23-09-2024; se usan criterios generales, no crecimiento lineal garantizado; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `b5c0c3440ba7e3de0cce39289aa1b0389b87775eeab1d70d84678fec0ac6659c` · propuesta: `45c2a2a23a4b72afe938485d68eeec4f77d513eec1a75f724e96b3da656759d1`

## MAN-GSI-P17-045

Decisión: pending_review · acción: revise.

Motivo: Conservar objetivo HA y clave C; comparar funciones reales de backup, DR y elasticidad y explicar solapamientos sin cero fallos o sustitución de copias.

### Antes

¿Qué objetivo tiene la alta disponibilidad?

- A. Eliminar la necesidad de copias de seguridad.
- B. Garantizar que nunca exista ningún fallo físico.
- C. Reducir interrupciones mediante redundancia, detección y failover. **(correcta)**
- D. Maximizar exclusivamente capacidad de disco.

Explicación: HA busca continuidad de servicio, no sustituye backup ni DR.

### Propuesta

En el diseño operativo de un servicio, ¿qué objetivo caracteriza de forma más directa la alta disponibilidad?

- A. Conservar versiones históricas para restaurar datos tras un borrado accidental.
- B. Reconstruir una plataforma desde copias externas después de perder el centro principal.
- C. Reducir interrupciones ante fallos mediante redundancia, detección y conmutación. **(correcta)**
- D. Ajustar recursos al crecimiento y disminución de la demanda de procesamiento.

Explicación: La alta disponibilidad busca mantener el nivel de servicio requerido ante fallos, reduciendo interrupciones mediante diseño, detección, redundancia y conmutación cuando corresponda. El objetivo se fija por carga y necesidades, no por un porcentaje universal ni por impedir todo fallo físico. Backup y recuperación ante desastres aportan capacidades complementarias; qué riesgos cubre HA o DR depende también de la arquitectura y alcance considerados.

- Error A: Mantener puntos históricos recuperables describe backup. Sirve para recuperar datos, pero por sí solo no mantiene continuamente el servicio disponible.
- Error B: Describe una estrategia de recuperación ante desastre basada en reconstrucción. Complementa HA; el caso no describe el mecanismo cotidiano de mantener servicio ante fallos.
- Error D: Adaptar recursos a demanda describe elasticidad. Puede ayudar a disponibilidad bajo carga, pero no es el objetivo específico de continuidad ante fallos preguntado.

- [Microsoft Learn: Business continuity, high availability, and disaster recovery](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery) · High availability, Fault tolerance, Scalability and elasticity; Disaster recovery plans, Backups y Testing and drills: objetivos, reservas de capacidad, recuperación y pruebas · versión: Actualización 01-06-2026; clasificación HA/DR según riesgos y carga, sin umbral universal de disponibilidad; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Redundancy, replication, and backup](https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup) · Definiciones iniciales; Redundancy considerations; Replication: Redundancy for data y ejemplo de borrado replicado; Backup vs. replication · versión: Página primaria en línea; sin asumir que todo sistema de replicación carece de historial ni que una copia garantice recuperación; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Architecture strategies for designing for redundancy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy) · RE:05, Definitions y recomendaciones por capas: cómputo, datos, red y DNS; dominios de fallo y dependencias · versión: Actualización 09-09-2025; no se adopta promesa universal de cero interrupciones de los ejemplos activo/activo; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `e5cabd4ec9eeca338c62324cbed6c61e551786f7b28832a4e01a40e9298d8ab5` · propuesta: `af3e8917eb81a1376b20b2738245c328c3a5b2d7da4165d732be95da08ab019c`

## MAN-GSI-P17-047

Decisión: pending_review · acción: revise.

Motivo: Conservar SPOF y clave B; microcaso de dos réplicas con un balanceador único para evaluar dependencias por capas.

### Antes

¿Qué es un punto único de fallo (SPOF)?

- A. Un componente redundante que nunca participa en servicio.
- B. Un componente cuyo fallo puede interrumpir por sí solo el servicio. **(correcta)**
- C. Un nodo de caché sin datos.
- D. Un requisito de licencia.

Explicación: Eliminar SPOF requiere redundancia y diseño de dependencias.

### Propuesta

Dos servidores web dependen de un único balanceador sin sustituto. Si este falla, ningún usuario puede acceder. ¿Cómo se interpreta ese diseño?

- A. La redundancia de servidores elimina el riesgo de caída del punto de entrada.
- B. El balanceador es una dependencia única cuyo fallo puede interrumpir el servicio. **(correcta)**
- C. Duplicar la RAM de cada servidor elimina el fallo común del balanceador.
- D. Repartir sesiones entre servidores permite acceder aunque el punto de entrada falle.

Explicación: Un punto único de fallo es una dependencia cuya caída puede interrumpir por sí sola el servicio en el alcance considerado. Tener dos servidores web no elimina la dependencia del único balanceador sin alternativa. La revisión debe seguir la ruta completa y sus dependencias, incluidas red, energía o datos. La mitigación debe aportar una alternativa funcional y comprobada, no solo duplicar componentes que no evitan ese fallo.

- Error A: La redundancia web cubre el fallo de una instancia, pero no el del balanceador único. Son capas distintas de dependencia.
- Error C: Más RAM puede aumentar capacidad de los servidores. No crea una vía alternativa para el acceso que pasa por el balanceador.
- Error D: Distribuir estado o sesiones puede ayudar a reemplazar servidores, pero no crea otro punto de entrada cuando el único balanceador cae.

- [Microsoft Learn: Redundancy, replication, and backup](https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup) · Definiciones iniciales; Redundancy considerations; Replication: Redundancy for data y ejemplo de borrado replicado; Backup vs. replication · versión: Página primaria en línea; sin asumir que todo sistema de replicación carece de historial ni que una copia garantice recuperación; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Architecture strategies for designing for redundancy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy) · RE:05, Definitions y recomendaciones por capas: cómputo, datos, red y DNS; dominios de fallo y dependencias · versión: Actualización 09-09-2025; no se adopta promesa universal de cero interrupciones de los ejemplos activo/activo; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [NIST SP 800-34 Rev. 1: Contingency Planning Guide for Federal Information Systems](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf) · Sección 5.1.6 Use of High Availability (HA) Processes, p. impresa 48 (PDF p. 62): redundancia, failover y puntos únicos de fallo; no se usa 99.999 % como umbral universal · versión: Rev. 1, mayo 2010; PDF enlazado por ficha oficial, que registra actualización 11-11-2010; solo conceptos y métodos, no obligaciones federales estadounidenses aplicadas a España; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `8dffafd7e0918befaa186c29c043e6bcaee023a82a6d27ad6885cdc6255e2f03` · propuesta: `dbb9a80a764df7afe72bc96a14b7524eead1be915d824aee8c57c3c1acb27fe9`

## MAN-GSI-P17-048

Decisión: pending_review · acción: revise.

Motivo: Conservar RTO y clave C; comparar punto, retención y tiempo medio con objetivo de recuperación y separar RTO de MTD.

### Antes

¿Qué mide RTO?

- A. La pérdida máxima de datos expresada temporalmente.
- B. La latencia de una consulta SQL.
- C. El tiempo objetivo para recuperar un servicio tras una interrupción. **(correcta)**
- D. El número de réplicas de un clúster.

Explicación: RTO es tiempo; RPO se refiere a pérdida de datos tolerable.

### Propuesta

¿Qué mide RTO?

- A. El punto anterior al incidente hasta el que se admite retroceder al recuperar datos.
- B. El periodo durante el que se conservan las copias antes de eliminarlas.
- C. El tiempo objetivo para restablecer el servicio después de una interrupción. **(correcta)**
- D. El tiempo medio observado para reparar fallos durante un periodo de operación.

Explicación: RTO expresa el objetivo temporal de recuperación del recurso o servicio tras la interrupción. Ayuda a elegir y probar la estrategia que cumple las necesidades del negocio. No es el tiempo de reparación observado ni la antigüedad de una copia. NIST distingue RTO del tiempo máximo tolerable del proceso: recuperar tecnología puede no agotar todo el trabajo necesario para restablecer la operación de negocio.

- Error A: Describe RPO, el punto de datos recuperable y la pérdida tolerada. No mide el plazo para restablecer el servicio.
- Error B: Describe retención de copias. La duración de almacenamiento de un backup no es el tiempo necesario u objetivo de recuperación.
- Error D: Una media de reparación es una medida observada, relacionada con MTTR. RTO es un objetivo acordado y no queda demostrado por una media histórica.

- [NIST SP 800-34 Rev. 1: Contingency Planning Guide for Federal Information Systems](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf) · Sección 3.2.1, p. impresa 17: Maximum Tolerable Downtime, Recovery Time Objective y Recovery Point Objective · versión: Rev. 1, mayo 2010; PDF enlazado por ficha oficial, que registra actualización 11-11-2010; solo conceptos y métodos, no obligaciones federales estadounidenses aplicadas a España; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Business continuity, high availability, and disaster recovery](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery) · High availability, Fault tolerance, Scalability and elasticity; Disaster recovery plans, Backups y Testing and drills: objetivos, reservas de capacidad, recuperación y pruebas · versión: Actualización 01-06-2026; clasificación HA/DR según riesgos y carga, sin umbral universal de disponibilidad; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [NIST CSRC: ficha SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) · Date Published, Document History y Download URL: mayo 2010, actualización 11-11-2010 y enlace al PDF de la revisión · versión: Ficha oficial de publicación consultada; no es una actualización técnica de 2026; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `e05d932c86f242992db36bcf4a631f268ce483b7e3a0692c2795c53230e9bc13` · propuesta: `f6d0da539605fea4ab08ccfbcfd05cfd632e65299b5de13a5fd4d7deb41fc834`

## MAN-GSI-P17-049

Decisión: pending_review · acción: revise.

Motivo: Conservar pérdida tolerable/punto RPO y clave B; caso de ventana de 15 minutos con cuatro interpretaciones temporales próximas.

### Antes

¿Qué mide RPO?

- A. El tiempo máximo de reparación física de una CPU.
- B. La pérdida máxima de datos tolerable, expresada normalmente como ventana temporal. **(correcta)**
- C. El número de hilos por núcleo.
- D. La disponibilidad mensual medida en porcentaje.

Explicación: RPO guía frecuencia/estrategia de replicación y copias.

### Propuesta

Se exige recuperar datos con un retroceso máximo de 15 minutos respecto al instante de un incidente. ¿Qué representa aquí el RPO?

- A. El plazo máximo para restablecer el servicio desde que comienza la interrupción.
- B. El punto de recuperación que admite perder hasta esos 15 minutos de cambios. **(correcta)**
- C. El periodo durante el que deben conservarse todas las copias antes de borrarlas.
- D. La duración media observada de las reparaciones realizadas en el servicio.

Explicación: El requisito limita cuánto puede retroceder el estado recuperado: hasta quince minutos de cambios respecto al incidente. Ese es el ámbito del RPO, distinto del tiempo para volver a prestar servicio. Copias, registros y replicación deben diseñarse y probarse para poder alcanzar ese punto con datos consistentes. Definir el objetivo no garantiza cumplirlo ni obliga a una única frecuencia o tecnología de copia.

- Error A: Describe RTO, el objetivo de tiempo de restablecimiento. El caso fija antigüedad o pérdida de datos tolerable, no duración de indisponibilidad.
- Error C: Describe retención, que determina cuánto se guardan las copias. No define por sí sola el punto recuperable más cercano al incidente.
- Error D: Describe una media de reparaciones. No determina cuántos cambios recientes pueden perderse ni el punto al que se recuperan los datos.

- [NIST SP 800-34 Rev. 1: Contingency Planning Guide for Federal Information Systems](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf) · Sección 3.2.1, p. impresa 17: RTO, RPO y MTD · versión: Rev. 1, mayo 2010; PDF enlazado por ficha oficial, que registra actualización 11-11-2010; solo conceptos y métodos, no obligaciones federales estadounidenses aplicadas a España; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Redundancy, replication, and backup](https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup) · Definiciones iniciales; Redundancy considerations; Replication: Redundancy for data y ejemplo de borrado replicado; Backup vs. replication · versión: Página primaria en línea; sin asumir que todo sistema de replicación carece de historial ni que una copia garantice recuperación; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Business continuity, high availability, and disaster recovery](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery) · High availability, Fault tolerance, Scalability and elasticity; Disaster recovery plans, Backups y Testing and drills: objetivos, reservas de capacidad, recuperación y pruebas · versión: Actualización 01-06-2026; clasificación HA/DR según riesgos y carga, sin umbral universal de disponibilidad; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `10d9cfe17477ed6014c5b05d73b322f86efd3d63ca44a2b8eddb35bcb48885e2` · propuesta: `ac4d4fd68f83130e2d2cf7dab264567ee8264bf31f97e80f7659fc63c1f8fb7b`

## MAN-GSI-P17-051

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y cuatro alternativas ya próximas; explicar capas, runtime y asistencia hardware sin clasificar todo sistema híbrido por una regla superficial.

### Antes

¿Qué es un hipervisor de tipo 2?

- A. Un hipervisor bare metal que se ejecuta directamente sobre el hardware, sin un sistema operativo anfitrión general.
- B. Un hipervisor que se ejecuta sobre un sistema operativo anfitrión. **(correcta)**
- C. Un runtime de contenedores que comparte el kernel del host y aísla procesos sin virtualizar hardware completo.
- D. Una extensión de CPU que facilita virtualización, pero no crea ni administra por sí sola máquinas virtuales.

Explicación: Tipo 2 usa servicios del SO host.

### Propuesta

¿Qué es un hipervisor de tipo 2?

- A. Un hipervisor bare metal que se ejecuta directamente sobre el hardware, sin un sistema operativo anfitrión general.
- B. Un hipervisor que se ejecuta sobre un sistema operativo anfitrión. **(correcta)**
- C. Un runtime de contenedores que comparte el kernel del host y aísla procesos sin virtualizar hardware completo.
- D. Una extensión de CPU que facilita virtualización, pero no crea ni administra por sí sola máquinas virtuales.

Explicación: Un hipervisor de tipo 2 o hosted utiliza un sistema operativo anfitrión ya instalado y sus servicios. La guía Oracle VirtualBox contrasta este modelo con bare metal o tipo 1. La distinción describe la organización de capas, no una garantía universal sobre rendimiento o seguridad. Un runtime de contenedores y una extensión de virtualización de CPU son componentes de otra naturaleza, aunque puedan participar en la misma plataforma.

- Error A: Describe el tipo 1 o bare metal en la clasificación convencional, no el modelo hosted sobre un sistema anfitrión.
- Error C: El runtime administra contenedores de procesos que comparten kernel. No es por esa función un hipervisor que presenta una máquina de sistema con kernel invitado.
- Error D: Una extensión de CPU aporta mecanismos que puede usar un hipervisor. No constituye por sí sola el software que crea y administra las VM.

- [Oracle VirtualBox User Guide: About Oracle VirtualBox](https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/Introduction.html) · Oracle VirtualBox Components y Features, Portability y Virtual Hardware: host, guest OS, VM y hosted/type 2 frente a bare metal/type 1 · versión: Guía rama 7.2 consultada; fundamentos, no recomendación de instalación ni compatibilidades o límites operativos; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Docker Docs: What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/) · Containers versus virtual machines y Using VMs and containers together: proceso aislado, kernel compartido y contenedores dentro de VM · versión: Documentación en línea; contenedores de procesos convencionales, sin universalizar a microVM o aislamiento Hyper-V; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `53cbfba41588fc6de43241341eccbfc52aaa86a673533f069c2affb1cfabc3f8` · propuesta: `6b4d7ee96b518779be81489a2e0ddd4751766cd457ed7bc707c745b853f74c51`

## MAN-GSI-P17-052

Decisión: pending_review · acción: revise.

Motivo: Conservar composición de VM y clave A; delimitar VM de sistema en ejecución, comparar invitado, anfitrión, contenedor e imagen sin ambigüedad de JVM.

### Antes

¿Qué incluye normalmente una máquina virtual?

- A. Hardware virtual, un sistema operativo invitado y sus aplicaciones. **(correcta)**
- B. Una imagen de datos ejecutada sin sistema operativo invitado ni hardware virtual.
- C. Un proceso aislado que comparte el kernel del host como definición general de máquina virtual.
- D. Una red VLAN sin recursos virtuales de cómputo ni sistema operativo.

Explicación: La VM presenta hardware virtual y ejecuta un SO invitado.

### Propuesta

¿Qué conjunto describe una VM de sistema en ejecución para alojar aplicaciones?

- A. Hardware virtual, un sistema operativo invitado y sus aplicaciones. **(correcta)**
- B. El sistema anfitrión y el hipervisor que administra todas las máquinas.
- C. Un proceso aislado que comparte el kernel anfitrión y empaqueta sus dependencias.
- D. Una imagen de disco con archivos, sin un entorno de ejecución en marcha.

Explicación: Una VM de sistema en ejecución presenta recursos hardware virtuales y ejecuta un sistema operativo invitado con sus aplicaciones. El hipervisor y el anfitrión proporcionan la plataforma de ejecución, pero no se confunden con el contenido de cada invitado. La imagen de disco es un artefacto que puede formar parte de una VM, no toda la máquina en marcha. El alcance excluye máquinas virtuales de proceso como una JVM.

- Error B: Describe capas anfitrionas que sostienen y administran VM. No el conjunto de hardware virtual, invitado y aplicaciones que corresponde a una VM de sistema.
- Error C: Describe un contenedor de procesos convencional. Su kernel compartido contrasta con el sistema operativo invitado de la VM descrita.
- Error D: Una imagen puede contener un sistema y sus archivos, pero por sí sola no es el entorno en ejecución con recursos virtuales que pide el enunciado.

- [Oracle VirtualBox User Guide: About Oracle VirtualBox](https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/Introduction.html) · Oracle VirtualBox Components y Features, Portability y Virtual Hardware: host, guest OS, VM y hosted/type 2 frente a bare metal/type 1 · versión: Guía rama 7.2 consultada; fundamentos, no recomendación de instalación ni compatibilidades o límites operativos; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Docker Docs: What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/) · Containers versus virtual machines y Using VMs and containers together: proceso aislado, kernel compartido y contenedores dentro de VM · versión: Documentación en línea; contenedores de procesos convencionales, sin universalizar a microVM o aislamiento Hyper-V; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `bea7171ec3dee283488af8defbff73c26cd96856c10f13bd8ae7fbe8df4822f2` · propuesta: `f41af6dd1dcaf8a02b9c0ba9950cf1e32648fc803ab428f94ab4e9760a1428a4`

## MAN-GSI-P17-053

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción kernel invitado/compartido y clave D; acotar contenedores de procesos y reconocer VM como anfitrión para no universalizar a Hyper-V o microVM.

### Antes

¿Qué diferencia básica hay entre una VM y un contenedor?

- A. El contenedor siempre pesa más que una VM.
- B. La VM no puede tener red.
- C. El contenedor es un hipervisor de tipo 1.
- D. La VM suele incluir un SO invitado; el contenedor comparte el kernel del host. **(correcta)**

Explicación: Contenedores virtualizan a nivel de sistema operativo; VM a nivel de hardware.

### Propuesta

En virtualización de sistemas y contenedores de procesos convencionales, ¿qué diferencia básica es correcta?

- A. La VM comparte el kernel anfitrión; el contenedor arranca su propio kernel invitado.
- B. La VM empaqueta dependencias de aplicación; el contenedor administra hardware físico.
- C. La VM es un proceso sin sistema invitado; el contenedor es un hipervisor bare metal.
- D. La VM ejecuta un SO invitado; el contenedor de procesos comparte el kernel anfitrión. **(correcta)**

Explicación: La VM de sistema ejecuta un kernel invitado sobre recursos virtuales; el contenedor de procesos convencional comparte el kernel del entorno que lo aloja. Pueden combinarse: varios contenedores pueden ejecutarse dentro de una VM, compartiendo el kernel de ese invitado. No se afirma que todo producto llamado contenedor use idéntico aislamiento: existen soluciones basadas en microVM o Hyper-V. Tamaño y rendimiento deben medirse, no deducirse de una etiqueta.

- Error A: Invierte la distinción convencional. El invitado de una VM tiene su kernel y los contenedores de procesos comparten el del entorno anfitrión.
- Error B: Empaquetar dependencias puede ocurrir en ambos casos. El contenedor no se define como administrador del hardware físico, sino como entorno de procesos aislados.
- Error C: Niega el invitado de la VM de sistema y atribuye al contenedor el papel de hipervisor. Son niveles y funciones diferentes.

- [Oracle VirtualBox User Guide: About Oracle VirtualBox](https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/Introduction.html) · Oracle VirtualBox Components y Features, Portability y Virtual Hardware: host, guest OS, VM y hosted/type 2 frente a bare metal/type 1 · versión: Guía rama 7.2 consultada; fundamentos, no recomendación de instalación ni compatibilidades o límites operativos; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Docker Docs: What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/) · Containers versus virtual machines y Using VMs and containers together: proceso aislado, kernel compartido y contenedores dentro de VM · versión: Documentación en línea; contenedores de procesos convencionales, sin universalizar a microVM o aislamiento Hyper-V; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `1f3fc8cd7301af3cdb308ff530c412b02edff6eee7c9045678e81a90e3cd6306` · propuesta: `eab509df835d357c1bee24093d8a2199eb8f990fe6b78f9c59a781441ab3acf2`

## MAN-GSI-P17-054

Decisión: pending_review · acción: revise.

Motivo: Conservar coste/infrautilización y clave B; comparar riesgos reales y reconocer reservas de capacidad justificadas por picos o failover.

### Antes

¿Qué riesgo operativo tiene sobredimensionar de forma permanente?

- A. Reducir siempre el coste total.
- B. Aumentar coste e infrautilización sin aportar valor proporcional. **(correcta)**
- C. Eliminar la necesidad de monitorización.
- D. Impedir cualquier escalado futuro.

Explicación: Dimensionar debe basarse en demanda, picos y margen razonable.

### Propuesta

¿Qué riesgo operativo tiene sobredimensionar de forma permanente?

- A. Más tiempo en colas por insuficiencia de capacidad para la demanda observada.
- B. Mayor coste e infrautilización sin aportar valor proporcional a la carga. **(correcta)**
- C. Pérdida de actualizaciones por falta de sincronización sobre memoria compartida.
- D. Interrupción del servicio por depender de un componente sin alternativa funcional.

Explicación: Mantener recursos por encima de lo necesario sin una finalidad proporcional puede elevar costes y dejar capacidad ociosa. El dimensionamiento debe considerar carga, picos, crecimiento y reservas justificadas, por ejemplo para absorber fallos mientras se escala. Baja utilización aislada no demuestra por sí sola exceso injustificado: hay que relacionarla con objetivos de servicio. No se garantiza que reducir recursos sea siempre la decisión correcta.

- Error A: Describe una consecuencia típica de capacidad insuficiente o de otro cuello de botella. No es el riesgo directo del exceso permanente sin valor proporcional.
- Error C: Una actualización concurrente sin coordinación es un problema de corrección del programa. No se deriva de disponer de recursos excesivos.
- Error D: Describe un SPOF o dependencia sin alternativa. Tener capacidad sobrante no crea ni resuelve por sí mismo ese defecto de continuidad.

- [AWS Well-Architected: PERF02-BP04 Configure and right-size compute resources](https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/perf_compute_hardware_configure_and_right_size_compute_resources.html) · Common anti-patterns e Implementation guidance: sobredimensionado, infradimensionado, demanda y perfil CPU/memoria/red; pruebas y reevaluación · versión: Página latest consultada sin versión documental declarada; se usa principio de dimensionamiento, no precio o recomendación comercial; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Introducción y lista de escalado vertical/horizontal; Autoscaling components y Application design considerations: ajuste, instrumentación, límites y retirada segura · versión: Actualización 11-10-2026 indicada por la página; sin garantizar continuidad por el mero hecho de añadir instancias; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Business continuity, high availability, and disaster recovery](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery) · High availability, Fault tolerance, Scalability and elasticity; Disaster recovery plans, Backups y Testing and drills: objetivos, reservas de capacidad, recuperación y pruebas · versión: Actualización 01-06-2026; clasificación HA/DR según riesgos y carga, sin umbral universal de disponibilidad; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `6c56e94a322b06501689f947fd56e422898693c3f7f8c1548156a5e9e2fd401e` · propuesta: `3ae2373ea98eb65bc564800a6de6a0d4e4d106eeeb76dee036f15c9e5a8e740f`

## MAN-GSI-P17-055

Decisión: pending_review · acción: revise.

Motivo: Conservar consecuencias de infradimensionado y clave C; acortar tres distractores redundantes y comparar errores concretos sobre respuesta, margen y llegadas.

### Antes

¿Qué riesgo tiene infradimensionar una plataforma?

- A. Aumentar la disponibilidad indefinidamente porque utilizar menos recursos deja siempre más margen para absorber cualquier carga.
- B. Garantizar menor latencia al reducir capacidad, ya que las colas desaparecen cuando hay menos CPU, memoria o ancho de banda.
- C. Saturación, colas, latencia elevada y posible incumplimiento de servicio. **(correcta)**
- D. Eliminar el coste operativo porque una plataforma pequeña no requiere monitorización, escalado ni atención a incidencias.

Explicación: CPU, RAM, E/S, red o dependencias pueden convertirse en cuellos de botella.

### Propuesta

¿Qué riesgo tiene infradimensionar una plataforma?

- A. Mejor tiempo de respuesta por el mero hecho de reducir recursos disponibles.
- B. Mayor margen para picos porque la capacidad se mantiene cerca del mínimo.
- C. Saturación, colas, latencia elevada y posible incumplimiento de servicio. **(correcta)**
- D. Menor necesidad de gestionar colas porque reducir recursos reduce las llegadas.

Explicación: Si la demanda supera la capacidad efectiva, pueden aparecer saturación, colas y tiempos de respuesta elevados, con riesgo de incumplir objetivos de servicio. El límite puede estar en CPU, memoria, E/S, red o dependencias, por lo que no basta ampliar cualquier componente. La pérdida o rechazo de peticiones también es posible según el diseño. El análisis debe identificar el cuello real y medir con carga representativa.

- Error A: Menos recursos no produce por sí mismo mejor respuesta. Si faltan para la demanda, puede aumentar espera o reducir trabajo completado.
- Error B: Trabajar cerca del límite deja menos reserva para picos o fallos. El mínimo de recursos no implica más capacidad de absorción.
- Error D: La demanda entrante no disminuye automáticamente por reducir capacidad. Control de admisión o límites explícitos pueden cambiar lo admitido, pero son mecanismos adicionales.

- [AWS Well-Architected: PERF02-BP04 Configure and right-size compute resources](https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/perf_compute_hardware_configure_and_right_size_compute_resources.html) · Common anti-patterns e Implementation guidance: sobredimensionado, infradimensionado, demanda y perfil CPU/memoria/red; pruebas y reevaluación · versión: Página latest consultada sin versión documental declarada; se usa principio de dimensionamiento, no precio o recomendación comercial; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Design to scale out](https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/scale-out) · Design your application so that it can scale horizontally; Recommendations, Avoid instance stickiness e Identify bottlenecks: estado local, réplica y dependencias · versión: Actualización 23-09-2024; se usan criterios generales, no crecimiento lineal garantizado; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Introducción y lista de escalado vertical/horizontal; Autoscaling components y Application design considerations: ajuste, instrumentación, límites y retirada segura · versión: Actualización 11-10-2026 indicada por la página; sin garantizar continuidad por el mero hecho de añadir instancias; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `44ca3cbfe8f7e5be7d77d48c0f1ecaf1d943d20862e1fdbaa80bae82b67df9fa` · propuesta: `3cedb4fcba7c48f11098d76b410870cc3ae5bd847331f5c8cc40347c8ba7c7e7`

## MAN-GSI-P17-056

Decisión: pending_review · acción: revise.

Motivo: Conservar desacoplamiento del estado local y clave D; microcaso de réplicas y sesiones, distinguiendo afinidad, código y disco de gestión del estado.

### Antes

Para escalar horizontalmente una aplicación web, ¿qué propiedad suele ayudar?

- A. Guardar toda sesión solo en el primer servidor.
- B. Usar una dirección IP distinta por usuario sin balanceador.
- C. Desactivar persistencia de datos.
- D. Evitar estado exclusivo en memoria local de una única instancia o externalizarlo. **(correcta)**

Explicación: El estado local rígido dificulta repartir usuarios entre réplicas.

### Propuesta

Dos réplicas web deben poder atender al mismo usuario y sustituirse. Su sesión solo está en la RAM de la primera instancia. ¿Qué propiedad facilita repartir y reemplazar las réplicas?

- A. Confiar en afinidad al primer servidor como única protección de la sesión.
- B. Publicar el mismo código en las réplicas sin cambiar dónde se guarda la sesión.
- C. Duplicar los discos de los servidores sin coordinar las sesiones mantenidas en RAM.
- D. Evitar estado exclusivo en memoria local de una instancia o externalizarlo. **(correcta)**

Explicación: Si el estado de sesión solo existe en una instancia, dirigir la siguiente petición a otra o perder esa instancia puede impedir continuar. Eliminar esa dependencia o usar un mecanismo de estado compartido o recuperable facilita repartir y reemplazar réplicas. La afinidad puede servir a ciertos diseños, pero como única solución conserva la dependencia. El almacén externo y sus dependencias también necesitan disponibilidad, consistencia y capacidad adecuadas.

- Error A: La afinidad mantiene al usuario en su servidor, pero no recupera el estado cuando ese servidor se pierde. Como único mecanismo conserva la dependencia que el caso quiere reducir.
- Error B: Código igual no significa estado igual. La memoria de sesión sigue en una instancia si no se cambia su gestión.
- Error C: Copiar discos no replica por sí solo objetos de sesión que únicamente están en memoria. La protección debe actuar sobre el estado y su recuperación, no sobre un soporte ajeno.

- [Microsoft Learn: Design to scale out](https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/scale-out) · Design your application so that it can scale horizontally; Recommendations, Avoid instance stickiness e Identify bottlenecks: estado local, réplica y dependencias · versión: Actualización 23-09-2024; se usan criterios generales, no crecimiento lineal garantizado; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Redundancy, replication, and backup](https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup) · Definiciones iniciales; Redundancy considerations; Replication: Redundancy for data y ejemplo de borrado replicado; Backup vs. replication · versión: Página primaria en línea; sin asumir que todo sistema de replicación carece de historial ni que una copia garantice recuperación; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Architecture strategies for designing for redundancy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy) · RE:05, Definitions y recomendaciones por capas: cómputo, datos, red y DNS; dominios de fallo y dependencias · versión: Actualización 09-09-2025; no se adopta promesa universal de cero interrupciones de los ejemplos activo/activo; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `38fcbe3506fce1eb8d3d4477675055dd22eb406ed8aa8d81ab6d139f38231f8c` · propuesta: `41c7e80038dc033ec1dbea7972a498bb4738135252573e9cccc888498b48dd85`

## MAN-GSI-P17-059

Decisión: pending_review · acción: revise.

Motivo: Conservar complementariedad backup/HA y clave A; microcaso de borrado propagado que distingue disponibilidad y estado histórico sin negar versionado en toda replicación.

### Antes

¿Qué afirmación es correcta sobre backup y alta disponibilidad?

- A. Son controles distintos: HA reduce caída; backup permite recuperar datos/estado perdido. **(correcta)**
- B. Un clúster HA elimina cualquier necesidad de backup.
- C. Backup garantiza continuidad sin tiempo de recuperación.
- D. Ambos son exactamente el mismo mecanismo.

Explicación: Replicación/HA puede propagar errores; backup ofrece puntos de recuperación.

### Propuesta

Un borrado accidental se propaga a todas las réplicas, que siguen respondiendo correctamente. ¿Qué afirmación explica por qué HA y backup son controles distintos?

- A. HA protege continuidad; una copia anterior recuperable puede restaurar datos previos al borrado. **(correcta)**
- B. Conmutar a una réplica sincronizada revierte por sí solo las operaciones de borrado erróneas.
- C. Duplicar capacidad de CPU equivale a conservar versiones históricas de los datos.
- D. Comprobar que las réplicas responden permite reconstruir los registros borrados.

Explicación: Las réplicas pueden seguir disponibles y haber aplicado el mismo borrado. HA mantiene continuidad ante ciertos fallos; una copia o punto anterior protegido permite recuperar un estado previo si es íntegro, accesible y adecuado al objetivo. Replicación e historial no son equivalentes, aunque algunos sistemas combinen réplicas, versionado y recuperación temporal. Deben probarse restauración, consistencia, pérdida de datos y tiempo de recuperación.

- Error B: Si el borrado ya se replicó, cambiar de instancia no deshace esa operación. Hace falta un punto o mecanismo de recuperación que conserve el estado anterior.
- Error C: La capacidad de cómputo no conserva historia de los datos. Recursos redundantes y protección de versiones cumplen funciones diferentes.
- Error D: Responder a comprobaciones de salud acredita una condición de servicio, no la conservación de registros anteriores. Un dato borrado puede faltar en todas las réplicas sanas.

- [Microsoft Learn: Redundancy, replication, and backup](https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup) · Definiciones iniciales; Redundancy considerations; Replication: Redundancy for data y ejemplo de borrado replicado; Backup vs. replication · versión: Página primaria en línea; sin asumir que todo sistema de replicación carece de historial ni que una copia garantice recuperación; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Business continuity, high availability, and disaster recovery](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery) · High availability, Fault tolerance, Scalability and elasticity; Disaster recovery plans, Backups y Testing and drills: objetivos, reservas de capacidad, recuperación y pruebas · versión: Actualización 01-06-2026; clasificación HA/DR según riesgos y carga, sin umbral universal de disponibilidad; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [NIST SP 800-34 Rev. 1: Contingency Planning Guide for Federal Information Systems](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf) · Secciones 3.4.1–3.4.2, pp. impresas 20–21, y 3.5.1, p. 27; sección 5.1.6, p. 48: backup, pruebas y corrupción que puede propagarse por HA · versión: Rev. 1, mayo 2010; PDF enlazado por ficha oficial, que registra actualización 11-11-2010; solo conceptos y métodos, no obligaciones federales estadounidenses aplicadas a España; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `35b1ee25eee51c68049ce26f19ece3646d83a62e80c87cf4f0ef7b407fa253ed` · propuesta: `7f124aeda8f4b481913688c8ea70125f3e65b0d064ec6d132b28212ae5f6d1aa`

## MAN-GSI-P17-060

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y cuatro diseños ya comparables; desarrollar capas, pruebas y objetivos sin prometer riesgo cero.

### Antes

En una plataforma crítica, ¿qué diseño es más completo?

- A. Redundancia sin SPOF, monitorización, failover probado, backups y plan de recuperación ante desastres. **(correcta)**
- B. Duplicar CPU y memoria dentro del mismo servidor, aunque alimentación, placa, almacenamiento y ubicación sigan siendo puntos únicos.
- C. Generar backups periódicos sin probar restauración, tiempos, integridad o disponibilidad de una copia ante el desastre previsto.
- D. Desplegar dos instancias activas sin monitorización, procedimiento de failover, protección de datos ni plan de recuperación.

Explicación: La continuidad requiere capas: HA, protección de datos y DR.

### Propuesta

En una plataforma crítica, ¿qué diseño es más completo?

- A. Redundancia sin SPOF, monitorización, failover probado, backups y plan de recuperación ante desastres. **(correcta)**
- B. Duplicar CPU y memoria dentro del mismo servidor, aunque alimentación, placa, almacenamiento y ubicación sigan siendo puntos únicos.
- C. Generar backups periódicos sin probar restauración, tiempos, integridad o disponibilidad de una copia ante el desastre previsto.
- D. Desplegar dos instancias activas sin monitorización, procedimiento de failover, protección de datos ni plan de recuperación.

Explicación: La continuidad combina reducción de dependencias únicas, monitorización, conmutación comprobada, protección de datos y recuperación ante desastres. Las capas cubren riesgos distintos y deben responder a objetivos RTO/RPO y al análisis de impacto. Duplicar CPU o desplegar otra instancia no basta si permanecen fallos comunes o faltan procedimientos. La formulación es una dirección de diseño, no una prueba de que sea posible eliminar absolutamente todo riesgo.

- Error B: Aumenta recursos dentro de un servidor, pero mantiene dependencias compartidas de placa, energía, almacenamiento o ubicación. No cubre por sí solo el fallo de esas dependencias.
- Error C: La existencia de copias no acredita restauración. Deben comprobarse integridad, acceso ante el desastre y tiempos compatibles con los objetivos.
- Error D: Dos instancias sin detección, conmutación o protección de datos no definen una estrategia completa de continuidad. El software y los procedimientos son parte de la capacidad real.

- [NIST SP 800-34 Rev. 1: Contingency Planning Guide for Federal Information Systems](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf) · Secciones 3.2.1, p. 17; 3.3–3.4, pp. 19–21; 3.5.1, pp. 27–28: impacto, controles, estrategias y prueba · versión: Rev. 1, mayo 2010; PDF enlazado por ficha oficial, que registra actualización 11-11-2010; solo conceptos y métodos, no obligaciones federales estadounidenses aplicadas a España; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Business continuity, high availability, and disaster recovery](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery) · High availability, Fault tolerance, Scalability and elasticity; Disaster recovery plans, Backups y Testing and drills: objetivos, reservas de capacidad, recuperación y pruebas · versión: Actualización 01-06-2026; clasificación HA/DR según riesgos y carga, sin umbral universal de disponibilidad; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Microsoft Learn: Architecture strategies for designing for redundancy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy) · RE:05, Definitions y recomendaciones por capas: cómputo, datos, red y DNS; dominios de fallo y dependencias · versión: Actualización 09-09-2025; no se adopta promesa universal de cero interrupciones de los ejemplos activo/activo; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `7e17f251b4f424bea731549dc863bdcb84a3032b7918ecc63e6f0d427d1580e4` · propuesta: `c8e9af9bab53d3421d21bc4963dafe9356a071f0fbef71c47516ec13b6c876cd`

## MAN-GSI-P17-061

Decisión: pending_review · acción: revise.

Motivo: Conservar característica NIST y clave D; comparar SLA, dedicación y gestión manual como confusiones reales, sin marca obligatoria o centro único.

### Antes

Según NIST SP 800-145, ¿cuál es una característica esencial de cloud computing?

- A. Uso obligatorio de una marca concreta.
- B. Un único centro de datos físico.
- C. Ausencia total de medición de consumo.
- D. Autoservicio bajo demanda. **(correcta)**

Explicación: NIST define cinco características esenciales, entre ellas on-demand self-service.

### Propuesta

Según NIST SP 800-145, ¿cuál es una característica esencial de cloud computing?

- A. Un SLA uniforme para todos los servicios.
- B. Hardware dedicado exclusivo por usuario.
- C. Aprovisionamiento manual por solicitud.
- D. Autoservicio de recursos bajo demanda. **(correcta)**

Explicación: La sección 2 de NIST SP 800-145 incluye autoservicio bajo demanda: el consumidor puede aprovisionar capacidades sin interacción humana con el proveedor para cada solicitud. Las otras características esenciales son acceso amplio por red, agrupación de recursos, elasticidad rápida y servicio medido. No exige una marca, un mismo SLA, un único centro de datos ni ausencia general de políticas o controles para consumir recursos.

- Error A: El nivel contractual de servicio puede variar entre proveedores, servicios y necesidades. Un SLA idéntico no integra la lista de cinco características esenciales NIST.
- Error B: Hardware dedicado exclusivo para un único consumidor no es exigencia universal. El modelo contempla agrupación de recursos y diferentes modelos de despliegue.
- Error C: Exigir intervención humana del proveedor por cada solicitud contradice el autoservicio definido. Puede haber políticas y límites, sin convertir cada aprovisionamiento en gestión manual.

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `6e821961f1452ead34b23e23a6356c7c4cf42fc370012ae34f46ff3fbd52b095` · propuesta: `3df33d5ebf346203f793ece96a88ca01b4909c5e78a25c76bed1256293a7e115`
