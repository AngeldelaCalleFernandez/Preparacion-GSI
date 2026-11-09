# GSI-EDITORIAL-002 — revisión propuesta

Preparado: 2026-10-26. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `b50edfbce2d3510a105aebb4304f1ef485e329686605d0e88c3e8201aedfcf1d`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T08-019

Decisión: pending_review · acción: revise.

Motivo: Sustituir la promesa de eliminar riesgos por su reducción y distinguir preventivo, correctivo, adaptativo y perfectivo mediante un caso breve.

### Antes

¿Qué acción puede ser mantenimiento preventivo según el tema?

- A. Desactivar monitorización
- B. Esperar siempre a una caída
- C. Corregir solo tras una reclamación
- D. Eliminar riesgos mediante refactorización o actualización antes del fallo **(correcta)**

Explicación: El preventivo reduce probabilidad de problemas futuros.

### Propuesta

Una revisión detecta una ruta de código que podría provocar fallos futuros, aunque aún no se han manifestado en operación. ¿Qué actuación responde al objetivo del mantenimiento preventivo?

- A. Restablecer el servicio corrigiendo la causa de una caída ya registrada.
- B. Adaptar el programa para funcionar con un sistema operativo diferente.
- C. Optimizar el tiempo de respuesta para satisfacer una nueva meta de rendimiento.
- D. Modificar la ruta detectada para reducir la probabilidad de futuros fallos. **(correcta)**

Explicación: Actuar sobre el riesgo detectado antes de que produzca un fallo tiene finalidad preventiva. Deben verificarse la modificación y sus posibles regresiones; anticiparse no garantiza eliminar todo riesgo.

- Error A: Restablecer un servicio tras un fallo corresponde al mantenimiento correctivo, no a anticiparse a su manifestación.
- Error B: Cambiar el software por un nuevo entorno de ejecución tiene finalidad adaptativa, distinta de reducir el riesgo descrito.
- Error C: Mejorar el rendimiento para una nueva meta tiene finalidad perfectiva; no trata la ruta que amenaza con fallar.

- [NASA SWE-195: Software Maintenance Phase](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695530/SWE-195%2B-%2BSoftware%2BMaintenance%2BPhase) · §3 Guidance; Software Life Cycle Phases and Goals, 6. Maintenance (Corrective, Adaptive, Perfective and Preventive) · versión: SWEHB Ver D, asociado a NPR 7150.2D · comprobado: 2026-10-26

Partida: `3d321e971cee44c33e359e7f8149f7041db10f8961cf92b4719365bfb5f3cc3b` · propuesta: `8ae405b099a7c4c626d05f3dbc397b773c7f96b2d081c5886442598686031a9a`

## AI-GSI-B3-T08-020

Decisión: pending_review · acción: revise.

Motivo: Reemplazar distractores ajenos al mantenimiento por errores de organización, responsabilidad y control del ciclo de vida.

### Antes

¿Qué debe organizar un servicio de mantenimiento?

- A. Cambios sin versión
- B. Únicamente renovación del logo
- C. Solo un buzón sin responsables
- D. Backlog, prioridades, releases, niveles de soporte y obsolescencia **(correcta)**

Explicación: Mantener exige flujo de trabajo, soporte y gestión del ciclo de vida técnico.

### Propuesta

¿Qué organización cubre de forma coherente el mantenimiento de un servicio a lo largo de su vida operativa?

- A. Atender las peticiones por orden de llegada y fijar su versión después del despliegue.
- B. Agrupar las correcciones por versión y dejar la atención de incidencias sin responsable.
- C. Asignar responsables hasta la primera entrega y gestionar después los cambios como proyectos aislados.
- D. Priorizar solicitudes, planificar versiones y asignar soporte y gestión de obsolescencia. **(correcta)**

Explicación: El mantenimiento necesita un flujo de solicitudes priorizadas, versiones controladas y responsabilidades de soporte. La planificación también considera evolución, obsolescencia y retirada, con pruebas de los cambios.

- Error A: El orden de llegada no valora impacto ni urgencia; identificar la versión después del despliegue debilita el control de lo entregado.
- Error B: Planificar versiones no sustituye asignar responsables que reciban, analicen y sigan las incidencias.
- Error C: La necesidad de responsables y control de cambios continúa durante la operación; no termina con la primera entrega.

- [NASA SWE-075: Plan Operations, Maintenance, Retirement](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695456/SWE-075%2B-%2BPlan%2BOperations%2BMaintenance%2BRetirement) · §3 Guidance: Maintenance Planning; Retirement Planning; Minimum Contents of an Operations and Maintenance Plan; Assign Clear Responsibilities · versión: SWEHB Ver D, asociado a NPR 7150.2D · comprobado: 2026-10-26

Partida: `f7dfcaf84f7861d25fc63d4331283030a4a90376e51bb8044be9e808947cf897` · propuesta: `2d20baea12bf3ab3e13f5196c2c9d2d7836ddbaefe84cf7048e8da73e2bd8762`

## AI-GSI-B3-T09-010

Decisión: pending_review · acción: revise.

Motivo: Conservar la distinción problema/solución y evitar una frontera rígida de fases; acercar los distractores a errores de modelado.

### Antes

¿Qué distingue análisis OO y diseño OO?

- A. El diseño no considera componentes
- B. El análisis identifica dominio; el diseño concreta interfaces y decisiones técnicas **(correcta)**
- C. El análisis compila; el diseño borra
- D. Ambos son únicamente pruebas físicas

Explicación: Se pasa de conceptos y responsabilidades a una solución técnica.

### Propuesta

¿Qué diferencia de enfoque existe entre el análisis y el diseño orientados a objetos?

- A. El análisis elige tecnologías de persistencia; el diseño determina las reglas del dominio.
- B. El análisis modela el problema; el diseño concreta objetos e interfaces para realizar la solución. **(correcta)**
- C. El análisis define tablas físicas; el diseño convierte esas tablas en necesidades del negocio.
- D. El análisis comprueba el código ejecutable; el diseño valida los resultados de las pruebas.

Explicación: El análisis expresa propiedades y comportamiento requeridos; el diseño los realiza mediante objetos, responsabilidades e interfaces de una solución implementable. La transición puede ser iterativa y refinar modelos compartidos.

- Error A: Elegir tecnologías de persistencia es una decisión de solución; las reglas del dominio se comprenden en el análisis, por lo que se invierten los enfoques.
- Error C: Las tablas físicas son decisiones de implementación; el diseño no consiste en deducir necesidades a partir de ellas.
- Error D: Comprobar ejecuciones y resultados de pruebas pertenece a verificación y validación; no define la relación entre análisis y diseño.

- [Doug Lea: Object-Oriented System Development, capítulo 15](https://gee.cs.oswego.edu/dl/oosdw3/ch15.html) · From Analysis to Design: introducción y Continuity · versión: Edición web del autor · comprobado: 2026-10-26

Partida: `ba36f6a9edb2a9baf9b2966b049aad1a7948823556bbc7e15ae04f015b2d85e8` · propuesta: `d72d4c00b1fa4e82e0f90da18d4ab736ab41610d104f6d2466ad887870d58f18`

## AI-GSI-B3-T09-011

Decisión: pending_review · acción: revise.

Motivo: Contrastar el hito de Elaboración con resultados plausibles de las otras fases del mismo proceso.

### Antes

¿Qué resultado destaca en Elaboración de UP?

- A. Arquitectura base ejecutable y tratamiento de riesgos significativos **(correcta)**
- B. Solo retirada del sistema
- C. Cierre de todas las cuentas
- D. Exclusivamente formación final

Explicación: Elaboración establece base arquitectónica y reduce riesgos relevantes.

### Propuesta

En el Proceso Unificado clásico, ¿qué resultado caracteriza el cierre de Elaboración?

- A. Una arquitectura base ejecutable que permite evaluar los riesgos técnicos significativos. **(correcta)**
- B. Una visión del alcance y un caso de negocio inicial que justifican comenzar el proyecto.
- C. Una versión funcional completa preparada para su aceptación y despliegue a los usuarios.
- D. Una versión desplegada con usuarios formados y tareas de transición completadas.

Explicación: Elaboración establece y demuestra la base arquitectónica y reduce los riesgos significativos antes de intensificar Construcción. No exige completar toda la funcionalidad ni haber desplegado el producto final.

- Error B: La visión y la justificación inicial del proyecto son resultados propios de Inicio; no demuestran todavía una arquitectura ejecutable.
- Error C: Completar el producto hacia una versión operativa corresponde a Construcción; Elaboración se centra en arquitectura y riesgos.
- Error D: Despliegue y formación de usuarios son objetivos de Transición, posteriores al hito arquitectónico.

- [IBM Redbooks: The IBM Rational Unified Process for System z](https://www.redbooks.ibm.com/redbooks/pdfs/sg247362.pdf) · §2.4.2 Elaboration Phase, pp.21–22; §4.3.3 Lifecycle architecture milestone, p.43 · versión: SG24-7362-00, julio de 2007; descripción del RUP clásico · comprobado: 2026-10-26

Partida: `61bb8cecff9c992296a7cbffae1c00aaf9dffa420d350a7d4d40964b41934eb6` · propuesta: `157b7a90a7afa5150e3743cd50b03c687cc04ebadb9534d9bc9e0847592dd19b`

## AI-GSI-B3-T13-018

Decisión: pending_review · acción: revise.

Motivo: Evaluar la interpretación de una métrica con datos mínimos y sustituir garantías absolutas por inferencias tentadoras pero no justificadas.

### Antes

Una alta frecuencia de despliegue permite concluir…

- A. Ausencia garantizada de vulnerabilidades
- B. Solo parte del comportamiento de entrega; no calidad funcional o seguridad completa **(correcta)**
- C. Satisfacción automática del usuario
- D. Cumplimiento de todos los requisitos

Explicación: Las métricas de entrega orientan, pero no sustituyen evaluar producto y seguridad.

### Propuesta

Un equipo pasa de un despliegue diario a diez, sin medir defectos, incidentes ni satisfacción. ¿Qué conclusión permite ese dato por sí mismo?

- A. Ha aumentado la estabilidad, porque se publican cambios en producción con más frecuencia.
- B. Ha aumentado la frecuencia de entrega, pero falta evidencia sobre la calidad del producto. **(correcta)**
- C. Ha disminuido la tasa de fallos, porque cada despliegue suele contener cambios menores.
- D. Ha mejorado la satisfacción, porque el usuario recibe versiones con mayor regularidad.

Explicación: La frecuencia mide cuántos despliegues se realizan, no la calidad funcional ni la seguridad completa del producto. Para valorar otros resultados hacen falta medidas adicionales y su contexto.

- Error A: La frecuencia no mide estabilidad; esta requiere observar fallos, intervenciones y recuperación, entre otros indicadores.
- Error C: No se conoce el tamaño ni el resultado de los cambios. Más despliegues no demuestra una menor proporción de fallos.
- Error D: Recibir más versiones no prueba satisfacción: no se han medido utilidad, experiencia ni respuesta de los usuarios.

- [DORA: Software delivery performance metrics](https://dora.dev/guides/dora-metrics/) · Throughput: Deployment frequency; Instability: Change fail rate; Key insights · versión: Guía web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `191e84f04e7be47461932f5adc9832ef4881d0ffd3aa905187c14c6aa8aee2ec` · propuesta: `9cd892a2d454db3008db73d28f026da382fa92646c6ed6c839a418caf518a025`

## AI-GSI-B3-T14-015

Decisión: pending_review · acción: revise.

Motivo: Precisar la definición y su excepción sobre ayudas técnicas; distinguirla de ajustes razonables sin excluirlos.

### Antes

¿Qué persigue el diseño universal?

- A. Prohibir tecnologías de apoyo
- B. Diseñar solo para un perfil ideal
- C. Eliminar toda flexibilidad
- D. Uso por el mayor número posible de personas, con ajustes cuando sean necesarios **(correcta)**

Explicación: El diseño universal busca amplitud de uso sin excluir ajustes individuales.

### Propuesta

¿Qué expresa el diseño universal según el artículo 2 de la Convención sobre los derechos de las personas con discapacidad?

- A. Adaptar individualmente un producto cuando una persona acredita una necesidad concreta.
- B. Ofrecer una versión especializada separada para cada grupo de personas con discapacidad.
- C. Aplicar una interfaz uniforme que prescinda de ayudas técnicas para conservar la simplicidad.
- D. Diseñar para el uso más amplio posible sin adaptación especializada, admitiendo ayudas técnicas. **(correcta)**

Explicación: El diseño universal busca el uso por todas las personas en la mayor medida posible desde la concepción. No excluye ayudas técnicas necesarias ni sustituye los ajustes razonables que procedan.

- Error A: La adaptación requerida en un caso particular describe un ajuste razonable; el diseño universal actúa de forma general desde la concepción.
- Error B: Crear versiones especializadas separadas no define el diseño universal, que intenta ampliar el uso de la solución común.
- Error C: Uniformidad visual no equivale a uso universal; la Convención permite ayudas técnicas cuando sean necesarias.

- [Convención sobre los derechos de las personas con discapacidad](https://www.boe.es/buscar/doc.php?id=BOE-A-2008-6963) · Artículo 2: definiciones de diseño universal y ajustes razonables · versión: Instrumento de ratificación publicado en BOE de 21-04-2008 · comprobado: 2026-10-26

Partida: `fabf430f93d7ae2e475f93c30651eb339f6e6ed71c5f1af8e0d63d9410a0f182` · propuesta: `06fc55f1f3ea3aa1393c1cbf7a047b1093664865dc5065a000de3a0f2898db8a`

## AI-GSI-B3-T15-012

Decisión: pending_review · acción: revise.

Motivo: Reemplazar opciones absurdas por capacidades reales de operación, rendimiento y recuperación, diferenciándolas del gobierno.

### Antes

¿Qué necesita el gobierno de una plataforma masiva?

- A. Ausencia de retención
- B. Catálogo, linaje, calidad, privacidad y responsables **(correcta)**
- C. Copias sin dueño
- D. Solo capacidad de discos

Explicación: La gestión de datos es un requisito arquitectónico y operativo.

### Propuesta

¿Qué conjunto de capacidades corresponde al gobierno de datos de una plataforma de procesamiento masivo?

- A. Planificación de capacidad, reparto de particiones y balanceo de carga entre nodos.
- B. Catálogo y linaje, reglas de calidad y protección, y responsables definidos para los datos. **(correcta)**
- C. Diseño de consultas, elección de índices y ajuste de memoria para el motor de ejecución.
- D. Programación de copias, rotación de soportes y restauración de volúmenes de almacenamiento.

Explicación: Gobernar datos requiere conocer su significado y procedencia, asignar responsables y establecer reglas de calidad y acceso. La infraestructura y las copias son complementarias, pero no cubren esas funciones.

- Error A: Capacidad, particionado y balanceo pertenecen a la operación de la plataforma; no definen significado, responsabilidad ni uso permitido de los datos.
- Error C: Optimizar consultas e índices trata rendimiento; no sustituye el catálogo, el linaje o las políticas de gobierno.
- Error D: Las copias permiten recuperación, pero no establecen por sí mismas calidad, significado ni responsabilidades sobre los datos.

- [IBM: What is data governance?](https://www.ibm.com/think/topics/data-governance) · Data governance frameworks: Program goals, roles and duties; Data governance tools; Data visibility and control · versión: Artículo web consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `26b71c6de58b5e7d0c556cfe70cf072468cab57e9398e3a3cff4aebb8d043904` · propuesta: `743cdf3791d18c7c399777475d89ebd77c77e3027acda9d960db885588123557`

## AI-GSI-B4-T02-008

Decisión: pending_review · acción: revise.

Motivo: Pasar de causas genéricas a una espera concreta por bloqueo, sin afirmar que todo bloqueo indica un interbloqueo ni que añadir índices lo resuelva.

### Antes

Bloqueos prolongados pueden indicar…

- A. Transacciones amplias, consultas lentas o índices insuficientes **(correcta)**
- B. Necesariamente fallo eléctrico
- C. Siempre un ataque externo
- D. Ausencia de concurrencia

Explicación: El diagnóstico debe examinar consultas y alcance transaccional.

### Propuesta

En PostgreSQL, una sesión mantiene una transacción abierta tras actualizar una fila. Otra sesión espera al intentar modificarla. ¿Qué diagnóstico encaja mejor con la espera?

- A. La primera transacción conserva un bloqueo incompatible hasta su finalización. **(correcta)**
- B. El optimizador de la segunda sesión ha descartado el índice de la clave primaria.
- C. El autovacuum exige confirmar todas las transacciones antes de ejecutar una actualización.
- D. El aislamiento impide que dos sesiones mantengan transacciones abiertas simultáneamente.

Explicación: Una actualización adquiere bloqueos de fila que pueden hacer esperar a otra actualización incompatible. Normalmente se conservan hasta terminar la transacción; conviene revisar sesiones bloqueadoras y duración transaccional.

- Error B: La elección de índice puede afectar a la duración de una consulta, pero no explica por sí misma la espera por la fila que otra transacción ha actualizado.
- Error C: Autovacuum no impone esa confirmación global para actualizar; la espera descrita encaja con bloqueos incompatibles entre transacciones.
- Error D: PostgreSQL admite transacciones concurrentes. El aislamiento no obliga a cerrar una sesión antes de que otra abra su transacción.

- [PostgreSQL: Explicit Locking](https://www.postgresql.org/docs/18/explicit-locking.html) · §13.3.1 Table-Level Locks; §13.3.2 Row-Level Locks; §13.3.4 Deadlocks · versión: PostgreSQL 18 · comprobado: 2026-10-26

Partida: `70b033dbd7727c6c19d14b3debe71bba26be05fe22af4ccd0c8bafa85bf6040b` · propuesta: `8f8617a6c6aee62f399480061941273cd19bc8f50bcb45a78858d4ef81132687`

## AI-GSI-B4-T02-011

Decisión: pending_review · acción: revise.

Motivo: Contextualizar el efecto de las estadísticas sin garantizar un plan óptimo ni confundir estimaciones con resultados de la consulta.

### Antes

¿Qué efecto pueden tener estadísticas obsoletas?

- A. Estimaciones de cardinalidad inadecuadas para el optimizador **(correcta)**
- B. Garantizar el mejor plan
- C. Impedir toda conexión siempre
- D. Eliminar necesidad de índices

Explicación: El optimizador necesita información representativa para estimar costes.

### Propuesta

Tras cambiar mucho la distribución de una tabla PostgreSQL, las estadísticas no se actualizan. Un filtro devuelve muchas más filas de las estimadas. ¿Qué efecto explica mejor este desajuste?

- A. El optimizador puede elegir un plan costoso al estimar mal la selectividad del filtro. **(correcta)**
- B. El motor debe cambiar las filas que cumplen el filtro para ajustarlas a su estimación.
- C. El motor pierde la posibilidad de usar los índices hasta reconstruir físicamente la tabla.
- D. El optimizador deja de comparar costes y ejecuta las operaciones en el orden del texto SQL.

Explicación: Las estadísticas ayudan a estimar cardinalidades y costes. Si no representan la distribución actual, pueden inducir un plan inadecuado; ANALYZE las actualiza, aunque las estimaciones siguen siendo aproximadas.

- Error B: Las estimaciones guían el plan, pero no cambian la semántica del filtro ni qué filas deben devolverse.
- Error C: Las estadísticas obsoletas no invalidan los índices ni obligan a reconstruir la tabla para utilizarlos.
- Error D: El optimizador continúa comparando planes con su modelo de costes; el problema es la información de entrada, no la desaparición de la optimización.

- [PostgreSQL: Statistics Used by the Planner](https://www.postgresql.org/docs/18/planner-stats.html) · §14.2.1 Single-Column Statistics: estimaciones y actualización mediante ANALYZE · versión: PostgreSQL 18 · comprobado: 2026-10-26

Partida: `69bedb5c5e745717925c82737d316f447caee96100001c7c44c962b73fb35767` · propuesta: `b0d5a025a9f2daae4031f00c7eca0bba426e7bc7799a1b04addf814783c91636`

## AI-GSI-B4-T02-019

Decisión: pending_review · acción: revise.

Motivo: Precisar el dominio de fallo y la propagación de borrados para distinguir réplica local, recuperación histórica y recuperación ante desastres.

### Antes

Dos réplicas locales protegen por sí solas frente a…

- A. Algunos fallos locales, sin cubrir necesariamente pérdida del sitio **(correcta)**
- B. Todo error administrativo
- C. Toda corrupción propagada
- D. Cualquier desastre regional

Explicación: HA local y DR entre dominios de fallo responden a escenarios distintos.

### Propuesta

Una base de datos replica en dos servidores del mismo centro y propaga también los borrados. ¿Qué protección aporta esa disposición por sí sola?

- A. Redundancia ante algunos fallos de servidor, con riesgo común si se pierde el centro. **(correcta)**
- B. Recuperación de borrados lógicos, al conservar cada réplica una historia independiente.
- C. Continuidad ante la pérdida del centro, al existir una copia adicional de cada dato.
- D. Aislamiento de la corrupción lógica, al aplicar ambas copias los mismos cambios.

Explicación: Las réplicas locales pueden tolerar fallos de componentes, pero comparten el centro como dominio de fallo. Propagar cambios tampoco equivale a conservar puntos de recuperación frente a borrados o corrupción.

- Error B: El supuesto indica que los borrados se propagan; no se ha descrito historial ni copia que permita recuperar el estado anterior.
- Error C: Dos servidores del mismo centro pueden quedar afectados por la misma pérdida del sitio. El número de copias no crea separación geográfica.
- Error D: Aplicar los mismos cambios puede propagar corrupción lógica; no la aísla automáticamente.

- [Microsoft Azure: Redundancy, replication, and backup](https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup) · Redundancy: Local redundancy, Zone redundancy y Geo-redundancy; Replication and backup · versión: Documentación web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `594e5fafbb4e5a0984c9ac0d9efec5de311f0d19728bb0f0f16be25c5de707c8` · propuesta: `b71f5e8c829fc8dc4d72c3ed20176e8b89fa14d5238bc4a90ba0303909889d4d`

## AI-GSI-B4-T04-001

Decisión: pending_review · acción: revise.

Motivo: Conservar el certificado como ejemplo de CI y evaluar el criterio de control frente a inventario económico, repositorio y monitorización.

### Antes

¿Qué puede ser un elemento de configuración de un servicio?

- A. Un certificado o un servicio externo controlado **(correcta)**
- B. Solo un servidor físico
- C. Solo código fuente
- D. Únicamente periféricos

Explicación: Un CI puede ser físico, lógico o documental si se controla para prestar el servicio.

### Propuesta

¿Qué criterio permite gestionar un certificado digital como elemento de configuración de un servicio?

- A. Identificarlo y controlar sus atributos, relaciones y cambios durante su ciclo de vida. **(correcta)**
- B. Registrar su coste de adquisición y amortizarlo junto con los equipos que lo utilizan.
- C. Conservar una copia del archivo en el mismo repositorio que la documentación del servicio.
- D. Medir su frecuencia de uso y mostrarla junto a los indicadores de rendimiento del servicio.

Explicación: Un elemento de configuración es una unidad identificable sometida a control de configuración. Puede ser lógico o documental: el certificado puede gestionarse por su vigencia, uso y relaciones con el servicio.

- Error B: El registro económico corresponde a gestión de activos; no demuestra control de los atributos y cambios de configuración.
- Error C: Guardar una copia no establece identificación, relaciones ni control de cambios; un repositorio es una herramienta, no el criterio de un CI.
- Error D: La monitorización de uso aporta información operativa, pero no equivale a someter el elemento a control de configuración.

- [NIST SP 800-128: Guide for Security-Focused Configuration Management of Information Systems](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-128.pdf) · §2.1.1 Configuration Management Concepts, pp.4–5; §2.3.5 Configuration Items, p.10; §3.1.2 Planning at the System Level, Create or Update System Component Inventory, pp.24–26 · versión: Agosto de 2011, actualización de 10-10-2019 · comprobado: 2026-10-26

Partida: `834078b7a3d0e58bf8ad1242fcd288d51d163cca3dbdfb1961ba8d5bfe128815` · propuesta: `4fda6c1e48c9a7f1e1ee5bc09db1286d8f6c4e8de334b5d8523da7014e588827`

## AI-GSI-B4-T04-008

Decisión: pending_review · acción: revise.

Motivo: Contrastar herramientas complementarias y evitar equiparar un commit o una etiqueta con el estado operativo del servicio.

### Antes

¿Qué diferencia control de versiones y configuración?

- A. Configuración solo describe nombres de ramas
- B. Versiones registra cambios de artefactos; configuración gobierna estado y relaciones del servicio **(correcta)**
- C. Son idénticos siempre
- D. Versiones reemplaza inventario y relaciones

Explicación: Ambos se complementan para reproducir y comprender un estado operativo.

### Propuesta

¿Qué relación existe entre el control de versiones y la gestión de configuración de un servicio?

- A. Las etiquetas de versión determinan qué dependencias están activas en cada entorno operativo.
- B. Las versiones conservan cambios de artefactos; la configuración controla el estado y sus relaciones. **(correcta)**
- C. La configuración sustituye el historial de cambios por un inventario de los equipos instalados.
- D. El historial del repositorio demuestra qué artefactos están desplegados en producción.

Explicación: El control de versiones conserva estados y cambios de archivos. La gestión de configuración determina y controla la composición del sistema, sus relaciones y cambios; requiere conocer además qué está realmente desplegado.

- Error A: Una etiqueta identifica un estado del repositorio; no descubre ni garantiza qué dependencias están activas en un entorno.
- Error C: La gestión de configuración necesita controlar cambios y puede apoyarse en versiones; no se reduce a un inventario de equipos.
- Error D: El historial acredita estados del repositorio, pero hace falta información de despliegue para afirmar cuál está en producción.

- [NIST SP 800-128: Guide for Security-Focused Configuration Management of Information Systems](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-128.pdf) · §2.1.1 Configuration Management Concepts, pp.4–5; §2.3.5 Configuration Items, p.10; §3.1.2 Planning at the System Level, Create or Update System Component Inventory, pp.24–26 · versión: Agosto de 2011, actualización de 10-10-2019 · comprobado: 2026-10-26
- [Pro Git: About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) · §1.1 Getting Started — About Version Control · versión: Pro Git, segunda edición, edición web · comprobado: 2026-10-26

Partida: `816dfb30e5b2e75ff532531c435944608e22f61822abe9e9aa11f15da9a9b243` · propuesta: `e168a8e5f7c9201f3bbd60e0ebd6c01d601b17a2bb7163c15b5d0d718a2f1dab`

## AI-GSI-B4-T09-006

Decisión: pending_review · acción: revise.

Motivo: Usar un caso donde identidad y conformidad discrepan para evaluar qué aporta NAC, sin confundirlo con DNS o DHCP.

### Antes

¿Qué añade NAC además de identidad?

- A. Solo resolución DNS
- B. Postura o cumplimiento y políticas de acceso **(correcta)**
- C. Únicamente compresión
- D. Un reloj de pared

Explicación: NAC puede considerar estado del dispositivo y aplicar políticas.

### Propuesta

Un portátil acredita la identidad del usuario, pero incumple la política corporativa de protección antimalware. ¿Qué puede añadir NAC a la decisión de acceso?

- A. La resolución del nombre del equipo para localizarlo en el directorio corporativo.
- B. La evaluación de su postura y la restricción de acceso según el incumplimiento detectado. **(correcta)**
- C. La asignación de una dirección IP como prueba suficiente de que el equipo es conforme.
- D. La validación de las credenciales como sustituto de comprobar el estado del dispositivo.

Explicación: NAC puede combinar identidad y postura del dispositivo para aplicar políticas de admisión. Según la política, un equipo no conforme puede bloquearse o recibir acceso restringido para remediación.

- Error A: Resolver un nombre identifica una dirección o recurso, pero no evalúa el cumplimiento de la protección antimalware.
- Error C: Obtener una dirección IP no acredita que el dispositivo cumpla la política de seguridad.
- Error D: La identidad ya está acreditada en el supuesto; autenticar al usuario no sustituye comprobar el estado del portátil.

- [Cisco: What is network access control (NAC)?](https://www.cisco.com/site/us/en/learn/topics/security/what-is-network-access-control-nac.html) · What is network access control; Security posture check; How does NAC work? · versión: Guía web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `d060d76a44c436db5b30f164b3253dd366a85c716255b942f89c83a3f756a563` · propuesta: `d8bb98b2b44fbacd9628cade4c1a83e795835205cdb3a1e5cbc8db2a3469fb2a`

## AI-GSI-B4-T13-008

Decisión: pending_review · acción: revise.

Motivo: Mantener la distinción infraestructura/servicio y formular distractores sobre capas y funciones, no afirmaciones absurdas.

### Antes

¿Qué distingue Internet de la Web?

- A. Son exactamente lo mismo
- B. Internet solo sirve HTML
- C. La Web sustituye BGP
- D. Internet soporta varios servicios, de los que la Web es uno **(correcta)**

Explicación: Correo, DNS, SSH y otros servicios usan la infraestructura de Internet.

### Propuesta

¿Qué relación describe correctamente Internet y la World Wide Web?

- A. Internet organiza los recursos enlazados; la Web encamina sus paquetes entre redes IP.
- B. Internet identifica los recursos mediante URI; la Web aporta la conectividad entre redes.
- C. Internet y Web designan la misma infraestructura observada desde usuarios y operadores.
- D. Internet interconecta redes; la Web ofrece recursos enlazados como un servicio sobre ellas. **(correcta)**

Explicación: Internet aporta interconexión mediante la familia TCP/IP. La Web es un espacio de recursos identificados por URI y enlazados; otros servicios, como el correo, pueden utilizar Internet sin ser la Web.

- Error A: La organización de recursos enlazados corresponde a la Web; el encaminamiento de paquetes pertenece a la infraestructura de red.
- Error B: Se intercambian las funciones: las URI identifican recursos de la Web, mientras Internet proporciona interconexión.
- Error C: Son conceptos distintos y relacionados; cambiar el punto de vista no convierte todos los servicios de Internet en Web.

- [W3C Help: Web and Internet](https://www.w3.org/help/) · What is the difference between the web and the internet? · versión: FAQ web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `f08e6d93f434bd8892b1c38c57a5b7a948199f6f191627de58c6af5c74852d75` · propuesta: `35df8a3af521f2d1bc320c40fd35ae2f33a6a1fe40991f4be6edd71e911554d2`

## AI-GSI-B4-T13-012

Decisión: pending_review · acción: revise.

Motivo: Precisar la capa de bloqueo y las excepciones QPACK/aplicación; enfrentar confusiones sobre orden, fiabilidad y congestión.

### Antes

¿Qué reduce HTTP/3 frente a pérdidas a nivel TCP entre streams?

- A. Toda congestión de red
- B. Cualquier fallo de aplicación
- C. Bloqueo entre streams, sin eliminar congestión ni pérdidas físicas **(correcta)**
- D. Toda latencia de propagación

Explicación: La mejora de multiplexación no suprime las limitaciones físicas ni todos los bloqueos.

### Propuesta

Frente a HTTP/2 sobre una conexión TCP, ¿qué mejora aporta HTTP/3 cuando se pierden datos de un stream, sin considerar dependencias de aplicación o compresión de cabeceras?

- A. Permite entregar los bytes de ese stream sin respetar su orden de envío.
- B. Sustituye la recuperación de pérdidas por la entrega no fiable de cada stream.
- C. Evita que el orden de transporte de ese stream bloquee la entrega de los otros. **(correcta)**
- D. Asigna a cada stream una conexión con control de congestión independiente.

Explicación: QUIC conserva entrega fiable y ordenada dentro de cada stream, sin exigir orden entre streams. Así reduce el bloqueo de cabecera de TCP entre ellos; persisten límites de congestión y posibles dependencias superiores.

- Error A: La entrega de bytes dentro de un stream sigue siendo ordenada; la independencia se refiere a streams diferentes.
- Error B: HTTP/3 utiliza streams fiables de QUIC. Las pérdidas se recuperan, no se acepta omitir esos datos como regla general.
- Error D: Los streams de una conexión QUIC comparten control de congestión; no se crea una conexión independiente para cada uno.

- [IETF RFC 9114: HTTP/3](https://www.rfc-editor.org/rfc/rfc9114.html) · §1.1 Prior Versions of HTTP; §1.2 Delegation to QUIC; §4.2.1 Field Compression · versión: RFC 9114, junio de 2022 · comprobado: 2026-10-26
- [IETF RFC 9000: QUIC](https://www.rfc-editor.org/rfc/rfc9000.html) · §2 Streams; §2.2 Sending and Receiving Data; §4 Flow Control · versión: RFC 9000, mayo de 2021 · comprobado: 2026-10-26

Partida: `587750e511514175ad1993109bb409d7dfb90cd3d68b8ffc8bec55b7a72614b4` · propuesta: `c08570aa52db315e75fbd13c39f0b4b815fe46fb5f1f25b07e72d9ca321bb987`

## AI-GSI-B1-T03-001

Decisión: pending_review · acción: revise.

Motivo: Sustituir la remisión a apuntes por el artículo exacto y comparar plazos y puntos de inicio plausibles.

### Antes

¿Durante qué plazo pueden presentarse mociones de censura alternativas según los apuntes?

- A. En cualquier momento posterior a la investidura del candidato
- B. Solo en las primeras 48 horas después de aprobarse la censura
- C. Durante los cinco días posteriores a la votación
- D. En los dos primeros días **(correcta)**

Explicación: Las alternativas se presentan en los primeros dos días; la votación de la moción exige esperar cinco días.

### Propuesta

Según el artículo 113.3 de la Constitución Española, ¿cuándo pueden presentarse mociones de censura alternativas en el Congreso?

- A. Durante los cinco días siguientes a la votación de la moción inicial.
- B. En los dos últimos días del plazo de cinco días desde su presentación.
- C. En cualquier momento antes de la votación de la moción inicialmente presentada.
- D. En los dos primeros días del plazo de cinco días desde su presentación. **(correcta)**

Explicación: El artículo 113.3 permite alternativas en los dos primeros días del plazo contado desde la presentación. Los cinco días corresponden a la espera mínima para votar, no al plazo completo para alternativas.

- Error A: El plazo parte de la presentación, no de la votación; después de votar no se abre ese plazo de alternativas.
- Error B: La Constitución señala los dos primeros días, no los dos últimos del plazo.
- Error C: La posibilidad de presentar alternativas está limitada a los dos primeros días; no se extiende hasta cualquier momento previo a la votación.

- [Constitución Española](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229#a113) · Artículo 113.3: plazo de votación y mociones alternativas · versión: Texto consolidado consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `030b54b1fa4cf062a264bc2d9cea9fb2b2629f1eb4f2fb15f86e7507357f9e62` · propuesta: `71cf4c28e406494de927aa328ea7fb98d91991998eeb1ec2e74ee2bd60cbf115`

## AI-GSI-B1-T06-011

Decisión: pending_review · acción: revise.

Motivo: Conservar el concepto de clave pública del titular con un campo verificable y distractores próximos de la infraestructura de firma.

### Antes

¿Cuál de los siguientes datos forma parte de un certificado X.509 según los apuntes?

- A. El PIN personal en claro
- B. La clave privada exportada del titular
- C. El contenido de todos los documentos firmados
- D. La clave pública del titular **(correcta)**

Explicación: X.509 incluye clave pública, emisor, titular, validez y firma del emisor, entre otros campos; no publica secretos del titular.

### Propuesta

En un certificado X.509, ¿qué material del sujeto figura en el campo subjectPublicKeyInfo?

- A. Su clave privada y el algoritmo que permite utilizarla para generar firmas.
- B. La firma de la autoridad emisora y el algoritmo empleado para emitirla.
- C. El resumen de los documentos firmados y el identificador de su algoritmo.
- D. Su clave pública y el identificador del algoritmo al que pertenece. **(correcta)**

Explicación: subjectPublicKeyInfo contiene la clave pública del sujeto y su identificador de algoritmo. La clave privada se mantiene separada; la firma del certificado ocupa otros campos de su estructura.

- Error A: El certificado no distribuye la clave privada del sujeto; publicarla permitiría suplantarlo y no corresponde a subjectPublicKeyInfo.
- Error B: La firma de la autoridad emisora autentica el certificado, pero se codifica en los campos de firma, no en el de clave pública del sujeto.
- Error C: El certificado vincula identidad y clave pública; no almacena los resúmenes de todos los documentos que el titular firme.

- [IETF RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile](https://www.rfc-editor.org/rfc/rfc5280.html) · §4.1 Basic Certificate Fields; §4.1.2.7 Subject Public Key Info · versión: RFC 5280, mayo de 2008; estructura del certificado · comprobado: 2026-10-26

Partida: `6a8d999fd0e31eaa0dd02336db2ad54e9f1025289fc8bef69f28272dcabc3cad` · propuesta: `d5affed47c7a98c2f3fe9d801b1864f4b3d894fc39c2f2e7f7a42e7e235ca380`

## AI-GSI-B1-T07-008

Decisión: pending_review · acción: revise.

Motivo: Delimitar la función pública y el fundamento normativo, sin afirmar que toda actividad de una Administración tenga idéntica base.

### Antes

En una Administración, ¿qué bases son frecuentes según los apuntes?

- A. Publicación previa del dato como única base universal
- B. Decisión exclusiva del administrador de sistemas
- C. Obligación legal y misión de interés público o ejercicio de poderes públicos **(correcta)**
- D. Aceptación tácita de cualquier aviso web

Explicación: La base debe corresponder al tratamiento y al marco jurídico; una configuración técnica o un aviso no la sustituye.

### Propuesta

Para tratamientos necesarios por una obligación legal o por competencias públicas atribuidas normativamente, ¿qué bases del artículo 6 RGPD resultan pertinentes?

- A. El consentimiento presunto al acceder a la sede y el contrato con el proveedor tecnológico.
- B. El interés legítimo de la autoridad al ejercer sus funciones y la ausencia de oposición.
- C. La obligación legal y la misión de interés público o el ejercicio de poderes públicos. **(correcta)**
- D. La publicación previa de los datos y la aceptación de las condiciones del portal institucional.

Explicación: Son las bases de los arts.6.1.c) y e), con fundamento normativo conforme al art.6.3. La base concreta depende del tratamiento; pertenecer a una Administración no basta para justificarlo.

- Error A: Acceder a una sede no presume consentimiento válido; el contrato tecnológico tampoco determina la base del tratamiento de los ciudadanos.
- Error B: El art.6.1.f) no se aplica a autoridades públicas al ejercer sus funciones; la falta de oposición no crea una base de licitud.
- Error D: Que los datos sean públicos o se acepten condiciones del portal no sustituye una base del art.6 para el tratamiento descrito.

- [Reglamento (UE) 2016/679 (RGPD)](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículo 6.1.c), 6.1.e), último párrafo de 6.1 y 6.3 · versión: Reglamento de 27-04-2016, preceptos consultados el 26-10-2026 · comprobado: 2026-10-26

Partida: `a35f5774de1f316997f30b7fd2aad3c0e728a71570b96e0e8683961e7415fa9b` · propuesta: `bc16ae4c125350f1ac5d824802377aa6eada2c9a5efc56c4e40c1bf0d8be6919`

## AI-GSI-B1-T07-013

Decisión: pending_review · acción: revise.

Motivo: Exigir forma, vínculo y contenido del encargo, diferenciándolo de documentos parciales que no lo sustituyen.

### Antes

¿Qué exige la relación entre responsable y encargado según los apuntes?

- A. Suprimir toda instrucción del responsable
- B. Un instrumento contractual o jurídico con el contenido exigido **(correcta)**
- C. Transferir al proveedor todos los fines del tratamiento
- D. Solo una promesa verbal de confidencialidad

Explicación: El encargo debe formalizar las obligaciones exigidas; alojar los datos no sustituye esa relación jurídica.

### Propuesta

¿Cómo debe formalizarse el tratamiento de datos personales que un encargado realiza por cuenta de un responsable, conforme al artículo 28 RGPD?

- A. Con un compromiso escrito de confidencialidad que sustituya las instrucciones y el resto del encargo.
- B. Con un contrato u otro acto jurídico vinculante, escrito y con el contenido exigido para el encargo. **(correcta)**
- C. Con una comunicación de la identidad del proveedor a los interesados que sustituya el acuerdo de encargo.
- D. Con las condiciones del alojamiento contratado, sin regular las obligaciones sobre el tratamiento de datos.

Explicación: El encargo requiere contrato u otro acto jurídico vinculante con el contenido del art.28.3 y forma escrita, también electrónica. Debe concretar tratamiento, instrucciones y obligaciones; no basta contratar alojamiento.

- Error A: La confidencialidad es una obligación del encargo, pero no sustituye su objeto, instrucciones, seguridad y demás contenido requerido.
- Error C: Informar sobre el proveedor no reemplaza el instrumento que vincula a responsable y encargado y establece sus obligaciones.
- Error D: Las condiciones de alojamiento solo bastarían si incorporasen el contenido exigido; excluir las obligaciones sobre datos deja el encargo sin regular adecuadamente.

- [CEPD: Directrices 07/2020 sobre responsable y encargado](https://www.edpb.europa.eu/system/files/2023-10/edpb_guidelines_202007_controllerprocessor_final_es.pdf) · Parte II, §1.2 Forma del contrato u otro acto jurídico, párrafos 100–103; §1.3 Contenido · versión: Versión 2.0, adoptada el 07-07-2021; traducción española · comprobado: 2026-10-26
- [Reglamento (UE) 2016/679 (RGPD)](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículo 28.3 y 28.9 · versión: Reglamento de 27-04-2016, preceptos consultados el 26-10-2026 · comprobado: 2026-10-26

Partida: `5a676cecb84b60b3c0c071642da48a14a4c0f75ff1a092f366f2f78c0baebc87` · propuesta: `6ed4a1c20fdbf6e46030ab66b766568279e767fefb8f98a21c2679fd87b2cc1e`

## AI-GSI-B1-T07-017

Decisión: pending_review · acción: revise.

Motivo: Precisar riesgo para derechos y libertades y momento previo; distinguir EIPD, licitud y gestión de incidentes.

### Antes

¿Cuándo debe plantearse una EIPD según los apuntes?

- A. Cuando el tratamiento probablemente entrañe alto riesgo **(correcta)**
- B. Solo por usar una base de datos relacional
- C. Solo cuando ya exista una sanción
- D. En sustitución automática de cualquier análisis ENS

Explicación: La EIPD responde al riesgo del tratamiento para las personas y no sustituye el análisis de seguridad ENS.

### Propuesta

¿Qué criterio general del artículo 35.1 RGPD obliga a realizar una evaluación de impacto relativa a la protección de datos antes del tratamiento?

- A. Que sea probable un alto riesgo para los derechos y libertades por su naturaleza, alcance, contexto o fines. **(correcta)**
- B. Que el tratamiento use una tecnología nueva, aunque no sea probable un alto riesgo para las personas.
- C. Que el tratamiento carezca de una base jurídica y se necesite la evaluación para suplir esa carencia.
- D. Que exista un incidente previo, pues la evaluación se exige como respuesta a una vulneración confirmada.

Explicación: La EIPD se exige ante un probable alto riesgo para las personas y se realiza antes del tratamiento. La tecnología utilizada influye en el análisis, pero no sustituye el criterio de riesgo.

- Error B: El uso de tecnología nueva es relevante, pero el criterio general no hace obligatoria la EIPD por novedad aislada del riesgo.
- Error C: Una EIPD no proporciona una base de licitud inexistente; evalúa impactos y medidas de un tratamiento que debe tener su propio fundamento jurídico.
- Error D: La evaluación es preventiva: no hay que esperar a un incidente o sanción para valorar un alto riesgo probable.

- [AEPD: Evaluación de impacto en protección de datos](https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/10-evaluacion-de-impacto) · ¿En qué supuestos es necesario realizar una EIPD?; remisión al art.35 RGPD · versión: FAQ web consultada el 26-10-2026 · comprobado: 2026-10-26
- [Reglamento (UE) 2016/679 (RGPD)](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículo 35.1, 35.3 y 35.10 · versión: Reglamento de 27-04-2016, preceptos consultados el 26-10-2026 · comprobado: 2026-10-26

Partida: `0e25f917ade244b0ecbc46a74b829223ea0de396a5d8be5d9307699251f52014` · propuesta: `379dbca5c5322edb4dfd4e724ab97b779cd7b51c536bf453fa661a7e6b6f4ac3`
