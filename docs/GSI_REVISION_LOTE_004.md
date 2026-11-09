# GSI-EDITORIAL-004 — revisión propuesta

Preparado: 2026-10-26. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `2ae24b1ba96244feefd3de39ea500c7a7222563468b009e9b9dfea2936556b2b`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B2-T11-018

Decisión: pending_review · acción: revise.

Motivo: Sustituir distractores ajenos a seguridad por ámbitos reales de control lógico, de aplicación y de comunicaciones, delimitando el alcance físico.

### Antes

¿Qué área pertenece a una auditoría de seguridad física?

- A. Solo parámetros SQL
- B. Solo algoritmos de ordenación
- C. Pruebas de energía, climatización y acceso **(correcta)**
- D. Únicamente semántica XML

Explicación: La seguridad física incluye ambiente, energía, instalaciones, soportes y accesos con evidencias.

### Propuesta

¿Qué grupo de comprobaciones pertenece al ámbito de una auditoría de seguridad física de un centro de procesamiento de datos?

- A. Privilegios de cuentas, rotación de claves y trazas de autenticación en las aplicaciones.
- B. Validación de entradas, permisos SQL y tratamiento de errores de la base de datos.
- C. Suministro eléctrico, acondicionamiento ambiental y control de acceso a los locales. **(correcta)**
- D. Reglas del cortafuegos, segmentación lógica y filtrado de tráfico entre redes.

Explicación: La seguridad física examina las instalaciones y sus condiciones de acceso, energía y ambiente. La auditoría busca evidencias de las medidas aplicables y planifica sus comprobaciones para no introducir interrupciones no controladas.

- Error A: Cuentas, claves y autenticación son controles de acceso lógico; no sustituyen comprobar la entrada física a los locales.
- Error B: Entradas, permisos SQL y errores pertenecen a la seguridad de aplicación y datos, no al acondicionamiento o protección de las instalaciones.
- Error D: El filtrado y la segmentación tratan comunicaciones y separación lógica. Aunque los equipos estén en un local, esas comprobaciones no evalúan su seguridad física.

- [Real Decreto 311/2022: Esquema Nacional de Seguridad](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · Artículo 18; anexo II, mp.if.1–mp.if.4: acceso, acondicionamiento y energía · versión: Texto consolidado consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `1f297e669ed0e984ee4c2a825a518afa186e29654eb3c972f65db701641d9b31` · propuesta: `99753ef8b8c9c0cc8e14b815e0968e9a8bb0c8c83c68471165627847c50ce984`

## AI-GSI-B2-T12-011

Decisión: pending_review · acción: revise.

Motivo: Conservar la pregunta precisa y diferenciar DTMF, ASR y síntesis de voz con distractores próximos al funcionamiento de un IVR.

### Antes

¿Puede un IVR funcionar sin reconocimiento de voz?

- A. Solo si no presenta opciones
- B. No, ASR es obligatorio siempre
- C. Sí, mediante tonos DTMF **(correcta)**
- D. Solo si no existe telefonía

Explicación: IVR puede recoger teclas DTMF; no equivale a ASR.

### Propuesta

¿Puede un IVR funcionar sin reconocimiento de voz?

- A. Sí, usando síntesis de voz para interpretar las pulsaciones del usuario.
- B. No, los tonos de las teclas necesitan reconocimiento del habla para interpretarse.
- C. Sí, puede recoger las pulsaciones del teclado telefónico mediante DTMF. **(correcta)**
- D. No, una respuesta de audio exige reconocer el habla antes de ofrecer el menú.

Explicación: Un IVR puede presentar un menú y recoger opciones mediante DTMF sin transcribir el habla. El reconocimiento automático del habla es otro modo de entrada; la síntesis o reproducción de audio sirve para la salida.

- Error A: La síntesis de voz genera audio a partir de texto; no interpreta pulsaciones. La entrada por teclado se recoge mediante DTMF.
- Error B: DTMF representa pulsaciones y no necesita reconocimiento del habla; confundir ambas entradas hace parecer obligatorio un componente que no lo es.
- Error D: Reproducir o sintetizar un menú no requiere reconocer previamente la voz del llamante. Entrada y salida son funciones diferentes.

- [Twilio: TwiML Voice, Gather](https://www.twilio.com/docs/voice/twiml/gather) · input: dtmf, speech y dtmf speech; numDigits; Gather User Input via Keypad · versión: Documentación web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `b3fb1406420d1b3c70a717af046e991953c2cfe0fb9d13009e18bfb9bc2426ac` · propuesta: `47ecb404e14e18e4f7093f1dbbe23d6a275ab37651ddda5b985f3e4c2d22868a`

## AI-GSI-B2-T12-020

Decisión: pending_review · acción: revise.

Motivo: Aplicar el dimensionamiento a una variación temporal concreta sin exigir una fórmula ni confundir capacidad telefónica instalada con personal disponible.

### Antes

¿Qué debe incluir el dimensionamiento además del promedio de llamadas?

- A. Solo el promedio diario ignorando picos y ausencias
- B. Patrones por franja, duración, objetivo de servicio y pausas o ausencias **(correcta)**
- C. Únicamente el número de extensiones disponibles
- D. Solo dividir llamadas totales entre agentes

Explicación: Carga variable, disponibilidad efectiva y objetivos de espera condicionan la capacidad necesaria.

### Propuesta

Un centro recibe el mismo total diario de llamadas, pero ahora concentra más en una franja de mañana. ¿Qué información debe añadirse al promedio diario para dimensionar la atención?

- A. El total mensual y la duración media diaria, repartiendo la carga de forma uniforme.
- B. Volumen por franja, duración de gestión, objetivo de servicio y disponibilidad efectiva de agentes. **(correcta)**
- C. El máximo de llamadas de la jornada y el número nominal de agentes, prescindiendo de sus pausas.
- D. El número de extensiones instaladas y la capacidad de grabación, tomándolos como capacidad de atención.

Explicación: La necesidad de agentes depende de la carga y su distribución temporal, de la duración de gestión y del objetivo de espera o servicio. Pausas y ausencias reducen disponibilidad; el promedio diario puede ocultar saturación en los picos.

- Error A: El mismo total puede distribuirse de formas muy distintas. Suponer uniformidad borra el pico que debe atenderse.
- Error C: El pico importa, pero la plantilla nominal no equivale a agentes disponibles. También influyen duración de las llamadas, pausas y objetivo de servicio.
- Error D: Extensiones y almacenamiento son recursos técnicos, pero no determinan cuántos agentes pueden resolver llamadas en cada intervalo.

- [AWS: Review capacity plan output in Amazon Connect](https://docs.aws.amazon.com/connect/latest/adminguide/capacity-planning-review-output.html) · Forecasting Inputs; Scheduling plan data: interval, volume, average handle time, headcount, shrinkage y service level goal · versión: Documentación web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `ca6a616d9d728816c390beda52f2d1c707e81cd2d23b19ac135272807a00e232` · propuesta: `b65a7e9d070162bbf679221b5d8c261a215d47ae5ff525eede9a0cfb88505485`

## AI-GSI-B2-T13-015

Decisión: pending_review · acción: revise.

Motivo: Precisar que se compara CVSS base e introducir contexto que hace insuficiente ordenar por puntuación, antigüedad o facilidad de cierre.

### Antes

Al priorizar vulnerabilidades, ¿qué debe añadirse a la puntuación CVSS?

- A. Solo la facilidad de instalar el parche
- B. Criticidad, exposición y explotación real en el contexto **(correcta)**
- C. Solo la puntuación CVSS sin exposición del activo
- D. Únicamente el orden de publicación del aviso

Explicación: La prioridad depende del riesgo contextual; una puntuación aislada no determina toda la decisión.

### Propuesta

Dos vulnerabilidades tienen igual puntuación base CVSS. Una afecta a un servicio crítico expuesto y presenta explotación conocida; la otra está en un entorno aislado. ¿Qué enfoque permite priorizarlas?

- A. Ordenarlas por la facilidad de instalar sus parches para maximizar el número de cierres.
- B. Añadir criticidad del activo, exposición, controles y evidencia de explotación al análisis. **(correcta)**
- C. Asignarles la misma prioridad porque la puntuación base ya resume el riesgo del entorno.
- D. Ordenarlas por la fecha del aviso para atender primero la vulnerabilidad publicada más recientemente.

Explicación: La puntuación base CVSS expresa severidad técnica intrínseca, no todo el riesgo del entorno. Priorizar requiere información de amenaza y contexto, como exposición, explotación y consecuencias para el activo, sin ignorar los controles existentes.

- Error A: La facilidad del parche condiciona la ejecución, pero maximizar cierres puede dejar sin tratar un riesgo mucho mayor en un servicio crítico.
- Error C: La puntuación base no incorpora por sí sola las condiciones de amenaza y entorno descritas; igual severidad base no implica igual prioridad.
- Error D: La novedad del aviso no mide exposición, impacto ni explotación efectiva y no sustituye una priorización por riesgo.

- [FIRST: CVSS v4.0 User Guide](https://www.first.org/cvss/v4.0/user-guide) · CVSS Base Score (CVSS-B) Measures Severity, not Risk · versión: CVSS 4.0, guía web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `2722789b0b4d9f3b5a89bddf9abeea2ddc9c22c596c896e036982ad6a257afb0` · propuesta: `b4ba98861c9cc7b4dccc3438ceae20030cf9045bc0390743000889e26c2eef6e`

## AI-GSI-B2-T13-020

Decisión: pending_review · acción: revise.

Motivo: Conservar trayectoria y control como concepto y distinguirlos de integridad, reproducibilidad del análisis e interpretación pericial, sin prometer admisibilidad jurídica automática.

### Antes

¿Qué documenta la cadena de custodia?

- A. Recogida, responsables, transferencias, almacenamiento y acceso a la evidencia **(correcta)**
- B. Solo el hash, sin responsables ni transferencias
- C. Solo la lista de herramientas, sin fechas ni accesos
- D. Únicamente la interpretación final del analista

Explicación: La custodia acredita trayectoria y control; complementa, pero no se confunde con, los hashes.

### Propuesta

¿Qué documenta la cadena de custodia de una evidencia digital, además de comprobar su integridad mediante hashes?

- A. Su origen y recogida, responsables, accesos, transferencias y condiciones de conservación. **(correcta)**
- B. La secuencia de hashes del archivo, dando esa coincidencia por registro de todos sus custodios.
- C. Las herramientas y versiones del análisis, dando su configuración por historial de transferencias.
- D. Las conclusiones del perito sobre el contenido, dando ese dictamen por trazabilidad de la recogida.

Explicación: La custodia registra el recorrido y control de la evidencia: origen, responsables, manipulación, transferencias y conservación. Los hashes ayudan a comprobar integridad, pero no identifican por sí solos quién la tuvo ni qué hizo con ella.

- Error B: Coincidir en un hash no identifica custodios, accesos o transferencias; la integridad del contenido no reemplaza la documentación de su trayectoria.
- Error C: Registrar herramientas permite reproducir análisis, pero no demuestra la secuencia de posesión y conservación de la evidencia.
- Error D: El dictamen interpreta contenido; no sustituye registrar cómo se recogió, quién lo custodió y qué transferencias se produjeron.

- [NIST IR 8387: Digital Evidence Preservation, Considerations for Evidence Handlers](https://nvlpubs.nist.gov/nistpubs/ir/2022/NIST.IR.8387.pdf) · §2.2 Physical Media and Device Storage Considerations; §3.2(1) Chain of Custody y §3.2(9) Technologies to Assist with Digital Evidence Management · versión: Septiembre de 2022 · comprobado: 2026-10-26

Partida: `a0867cd47f80491a7e086f41633a4e0da6db18e4def9b8ac6fc20ebc2260281f` · propuesta: `212071cc4867af2ec1aa3ee557376c5de587d1041c246e05ef239a7ee203148c`

## AI-GSI-B2-T15-015

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y correcta ya adecuados y comparar la EDT con estructuras próximas de tiempo, costes y organización. Concentrar las listas de distractores en conceptos paralelos, evitando longitud añadida por explicaciones dentro de las alternativas.

### Antes

¿Qué representa la EDT/WBS?

- A. Desglose del alcance en paquetes de trabajo gestionables **(correcta)**
- B. Necesariamente un cronograma con fechas
- C. Solo el presupuesto de licencias
- D. Exclusivamente el organigrama de personal

Explicación: La EDT estructura entregables y trabajo; sirve para estimar y asignar, pero no equivale a Gantt.

### Propuesta

¿Qué representa la EDT/WBS?

- A. Desglose del alcance en paquetes de trabajo gestionables. **(correcta)**
- B. Secuencia de actividades con dependencias y fechas.
- C. Desglose de costes en partidas y fuentes de financiación.
- D. Jerarquía de equipos y puestos por unidades organizativas.

Explicación: La EDT descompone jerárquicamente el alcance, orientado a entregables, hasta paquetes gestionables. Sirve de base para estimar y planificar, pero no es el cronograma, la estructura contable ni el organigrama de responsables.

- Error B: La secuencia, dependencias y fechas describen el cronograma. Este puede derivarse de la EDT, pero responde a cómo y cuándo ejecutar el trabajo.
- Error C: La estructura de costes organiza el presupuesto; no define por sí misma todos los entregables y el trabajo incluido en el alcance.
- Error D: El organigrama describe quién participa y su dependencia organizativa, no la descomposición del alcance que debe producirse.

- [PMI: What Is a Work Breakdown Structure (WBS)?](https://www.pmi.org/blog/work-breakdown-structure) · The work breakdown structure at a glance; Build it from deliverables, not activities; What separates a good WBS from a messy one · versión: Artículo web consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `6c628b41663fb62552fc8e38c6ad9bf58c013d858cb101efb4eaaa19568575e7` · propuesta: `13589bef2bc3c3d52980ccd7dbd1428c42d1239e1b12ad4bfa198b9b69c4e966`

## AI-GSI-B3-T01-001

Decisión: pending_review · acción: revise.

Motivo: Evitar identificar ciclo de vida con desarrollo o contrato; mantener retirada como final e incluir el cierre sin imponer fases universales idénticas.

### Antes

¿Hasta qué etapa se extiende el ciclo de vida de un sistema?

- A. Hasta su retirada **(correcta)**
- B. Solo hasta compilar el primer programa
- C. Solo hasta aprobar requisitos
- D. Solo hasta la primera entrega

Explicación: El ciclo de vida incluye operación, mantenimiento y retirada, además del desarrollo.

### Propuesta

¿Hasta qué etapa se extiende el ciclo de vida completo de un sistema, más allá de su desarrollo inicial?

- A. Hasta su retirada y cierre controlado. **(correcta)**
- B. Hasta la aprobación de su especificación.
- C. Hasta su primera aceptación en producción.
- D. Hasta la finalización de la garantía del proveedor.

Explicación: El ciclo completo incluye operación y mantenimiento y alcanza la retirada, con las actividades de cierre que correspondan. La primera entrega, aceptación o garantía contractual no marca necesariamente el fin de uso ni del ciclo del sistema.

- Error B: Aprobar la especificación es un hito temprano; faltan construcción, puesta en servicio y vida operativa.
- Error C: Aceptar la primera versión inicia o habilita operación, pero no elimina mantenimiento ni retirada posterior.
- Error D: La garantía es una condición contractual; el sistema puede seguir operando y necesitando soporte después de su vencimiento.

- [NASA Systems Engineering Handbook: Program/Project Life Cycle](https://www.nasa.gov/reference/3-0-nasa-program-project-life-cycle/) · §3.8 Project Phase E: Operations and Sustainment; §3.9 Project Phase F: Closeout · versión: Edición web del SEH consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `7a995e75f14a3ef2ef1938f2d00f4b836e695611c7048b4fbee01a4f844383e8` · propuesta: `f5ff363e22480f4d19abaeca00d075000de8438e09a02ae2cbf9355f8981dd30`

## AI-GSI-B3-T02-011

Decisión: pending_review · acción: revise.

Motivo: Conservar el conjunto original y precisar que son métricas útiles, sin atribuirle la lista mínima de la guía 2025, que también incluye edad del elemento. Concentrar las listas de distractores en conceptos paralelos, evitando longitud añadida por explicaciones dentro de las alternativas.

### Antes

¿Qué conjunto de métricas se asocia a Kanban?

- A. Lead time, cycle time, throughput y WIP **(correcta)**
- B. Únicamente gasto de licencias
- C. Solo tamaño de ejecutables
- D. Solo líneas de código

Explicación: Las métricas de flujo describen tiempo, trabajo en curso y entregas.

### Propuesta

¿Qué conjunto aporta métricas de flujo útiles en un sistema Kanban?

- A. Lead time, cycle time, throughput y WIP. **(correcta)**
- B. Velocidad, puntos, esfuerzo y capacidad de sprint.
- C. Uso de CPU, latencia, memoria y ancho de banda.
- D. Cobertura, defectos, complejidad y fallos.

Explicación: Lead time y cycle time miden tiempos entre puntos definidos; throughput cuenta entregas por intervalo y WIP, trabajo iniciado sin terminar. La guía Kanban de 2025 incluye además la edad del trabajo en curso entre sus métricas mínimas.

- Error B: Son medidas de planificación o avance de iteraciones y esfuerzo; no constituyen el conjunto de tiempos, entregas y trabajo en curso preguntado.
- Error C: Son métricas de recursos y rendimiento técnico. No miden directamente el flujo de elementos de trabajo del servicio.
- Error D: Son métricas de prueba y calidad del software. Pueden ser útiles, pero no sustituyen medir el flujo de trabajo Kanban.

- [Kanban University: The Kanban Method Glossary](https://kanban.university/glossary/) · Capability; Metrics: lead time, delivery rate/throughput y levels of WIP · versión: Glosario web consultado el 26-10-2026 · comprobado: 2026-10-26
- [The Kanban Guide](https://kanbanguides.org/the-kanban-guide/2025.5/) · Flow Metrics: WIP, Throughput, Work Item Age y Cycle Time; límites de la Definition of Workflow · versión: Mayo de 2025 · comprobado: 2026-10-26

Partida: `6b83cb10636421decdec9ee3ff68bdbdcacfdf1299ecfd23f805c4d3a840ca17` · propuesta: `97288ec6eede0268e921aec2284c3042896dc6c2678d4c01de9816d5c3260d89`

## AI-GSI-B3-T02-012

Decisión: pending_review · acción: revise.

Motivo: Reemplazar opciones absurdas por conjuntos reconocibles de otros enfoques, sin afirmar incompatibilidad entre XP, Scrum o Kanban. Concentrar las listas de distractores en conceptos paralelos, evitando longitud añadida por explicaciones dentro de las alternativas.

### Antes

¿Qué conjunto reúne prácticas de XP?

- A. Solo aprobación final sin feedback
- B. Exclusivamente modelado de red
- C. Eliminar pruebas para acelerar
- D. TDD, programación en pareja, refactorización e integración continua **(correcta)**

Explicación: XP aporta prácticas de ingeniería y feedback frecuente.

### Propuesta

¿Qué conjunto reúne prácticas de ingeniería características de Extreme Programming (XP)?

- A. Sprint Planning, Sprint Review, Product Owner y Scrum Master.
- B. Control de WIP, clases de servicio y diagrama de flujo acumulado.
- C. Diseño inicial completo, fases cerradas e integración al final.
- D. TDD, programación en pareja, refactorización e integración continua. **(correcta)**

Explicación: XP combina prácticas de ingeniería que acortan la realimentación: pruebas antes del código, colaboración en pareja, mejora del diseño e integración frecuente. Pueden combinarse con otras formas de gestión; no son exclusivas de equipos que se llamen XP.

- Error A: Los roles y eventos citados pertenecen a Scrum; no son el conjunto de prácticas técnicas de XP preguntado.
- Error B: El control de trabajo en curso y las políticas de flujo se asocian a Kanban; no identifican las prácticas técnicas características de XP.
- Error C: Concentrar integración al final y fijar fases contradice la integración frecuente y la adaptación del diseño que busca XP.

- [Agile Alliance: Extreme Programming (XP)](https://agilealliance.org/glossary/xp/) · Practices: Pair Programming, Continuous Integration, Test-First Programming y Incremental Design/Refactoring · versión: Guía web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `f7fec0a941addee72a18799aaaf55bfc26ff4c5f25f8e7bf907d9751c146dde9` · propuesta: `ebea3acf1d95863572c3e46ca7bbbba34ec5163c41b54303800b505bcac0252e`

## AI-GSI-B3-T02-018

Decisión: pending_review · acción: revise.

Motivo: Conservar el alcance amplio del control de configuración, ligarlo a la reproducción de una versión y distinguirlo de un único artefacto o fecha.

### Antes

¿Qué elementos abarca el control de configuración de proyecto?

- A. Requisitos, código, documentación, infraestructura y releases **(correcta)**
- B. Solo la rama principal, sin identificar artefactos
- C. Únicamente ejecutables, omitiendo esquemas y documentación
- D. Solo código fuente, excluyendo configuración

Explicación: La configuración incluye los elementos necesarios para identificar y reproducir una versión.

### Propuesta

¿Qué alcance debe tener la identificación de elementos de configuración para poder reproducir una versión del proyecto?

- A. Requisitos, código, datos, documentación, herramientas y configuraciones de entorno pertinentes. **(correcta)**
- B. El último estado de la rama principal, tomando ese estado por descripción completa de lo entregado.
- C. Los ejecutables de cada entrega, dando por independientes las versiones de esquemas y bibliotecas.
- D. Los documentos de aprobación, utilizando sus fechas para inferir las versiones de todos los componentes.

Explicación: Reproducir una versión exige identificar los elementos relevantes y las versiones que la componen, incluidos datos, herramientas, documentación y configuración. Una rama, un ejecutable o una fecha no expresa por sí solo toda esa composición.

- Error B: La rama puede avanzar y no registra necesariamente datos, entornos o dependencias externas de una entrega concreta.
- Error C: Esquemas, bibliotecas y otros elementos pueden condicionar el ejecutable y su comportamiento; deben identificarse las versiones pertinentes.
- Error D: La fecha de aprobación no determina de forma inequívoca qué revisión de cada componente integró la versión.

- [NASA SWE-081: Identify Software CM Items](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695461/SWE-081%2B-%2BIdentify%2BSoftware%2BCM%2BItems) · §1 Requirements y notas; §3.2 Configuration Identification Process; §3.3 Items to Be Controlled · versión: SWEHB Ver D, asociado a NPR 7150.2D · comprobado: 2026-10-26

Partida: `35de5d8db430db3b71831154c783188cb1f1d8cb73737003a96893379eeb3b0d` · propuesta: `1ff8f0690790942e7d0401148223e1154e2743bcbfd38d98ceda324eb85defbf`

## AI-GSI-B3-T03-001

Decisión: pending_review · acción: revise.

Motivo: Conservar el microcaso original y explicitar temporalidad para distinguir migración puntual de integración de datos permanente.

### Antes

Un proyecto exige trasladar y reconciliar datos del sistema anterior. ¿Qué tipo de requisito debe contemplarse?

- A. Exclusivamente publicidad
- B. Transición o migración **(correcta)**
- C. Solo funcionalidad nueva sin legado
- D. Solo apariencia visual

Explicación: La transición tiene necesidades propias, distintas del funcionamiento estable del producto.

### Propuesta

Antes de poner en marcha el nuevo sistema, un proyecto debe trasladar y reconciliar una sola vez los datos del anterior. Esa capacidad deja de ser necesaria al completar el cambio. ¿Qué tipo de requisito es?

- A. Un requisito de negocio que expresa el beneficio estratégico perseguido.
- B. Un requisito de transición o migración entre el estado actual y el futuro. **(correcta)**
- C. Un requisito funcional de la operación ordinaria y permanente del producto.
- D. Un requisito de calidad sobre el rendimiento habitual del sistema en producción.

Explicación: Es una capacidad temporal necesaria para pasar de la solución anterior a la nueva. Los requisitos de transición incluyen conversión y migración de datos y se distinguen de las capacidades y cualidades de operación estable.

- Error A: El beneficio estratégico explica por qué se promueve el cambio; no clasifica la capacidad temporal de convertir y trasladar datos.
- Error C: El supuesto dice que la capacidad cesa tras completar el cambio, por lo que no es una función permanente de operación.
- Error D: No se está fijando una cualidad de rendimiento del producto estable, sino una necesidad temporal para realizar la transición.

- [IIBA: The Business Analysis Standard, Understanding Requirements and Designs](https://www.iiba.org/knowledgehub/the-business-analysis-standard/4-implementing-business-analysis/4-4-understanding-requirements-and-designs/) · §4.4.2.3 Solution Requirements; §4.4.2.4 Transition Requirements · versión: Edición web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `2c4923aa5c531a1e9db7080dc756d54102a30a08344638f521609a126905bc4d` · propuesta: `4315e23b0131f0016e112063102493503b1cdd725ec1ad38332a88f65eef9902`

## AI-GSI-B3-T03-009

Decisión: pending_review · acción: revise.

Motivo: Precisar el contenido de una especificación de caso de uso y separar comportamiento, planificación y diseño interno sin exigir una plantilla rígida.

### Antes

¿Qué añade un caso de uso desarrollado?

- A. Solo una decisión de infraestructura
- B. Precondiciones, flujos alternativos, excepciones y postcondiciones **(correcta)**
- C. Únicamente la prioridad del backlog
- D. Solo un rol y un beneficio sin flujos

Explicación: El caso de uso detalla interacción y condiciones, más allá de una historia breve.

### Propuesta

¿Qué añade una especificación desarrollada de caso de uso a la identificación del actor y su objetivo?

- A. La prioridad de negocio, la estimación del esfuerzo y la fecha de la próxima entrega.
- B. Precondiciones, interacción principal, alternativas, excepciones y resultados o postcondiciones. **(correcta)**
- C. Las tablas físicas, los índices y las consultas elegidas para implementar el almacenamiento.
- D. La asignación de desarrolladores, las tareas técnicas y el reparto de horas de programación.

Explicación: El caso de uso detalla comportamiento observable, condiciones e interacción, incluidos caminos alternativos y resultados. El nivel de detalle se adapta al objetivo; no es obligatorio repetir condiciones triviales ni describir decisiones internas de implementación.

- Error A: Prioridad, estimación y fecha son información de planificación; no describen cómo interactúan actor y sistema ni sus alternativas.
- Error C: Tablas e índices son decisiones de diseño físico, no los flujos y condiciones que especifica un caso de uso desarrollado.
- Error D: La asignación de tareas y personas pertenece a planificación y ejecución del desarrollo; no especifica el comportamiento desde el objetivo del actor.

- [IBM DOORS Next: Use case specification outline](https://www.ibm.com/docs/en/engineering-lifecycle-management-suite/doors-next/7.1.0?topic=cases-use-case-specification-outline) · Table 1: Flow of events, Basic flow, Alternative flows, Preconditions y Post conditions · versión: 7.1.0; contenido primario indexado contrastado el 26-10-2026 · comprobado: 2026-10-26

Partida: `932c9dfb0d674d0feb06dcb5ad1726a7af157c9be9aaaf8b117f70c7c07443d2` · propuesta: `6ef45a5586ce8837ec7c5443185fd2d247f33e6043c5dc988026d00a6d8a8de6`

## AI-GSI-B3-T03-011

Decisión: pending_review · acción: revise.

Motivo: Mantener dependencias y obligaciones legales como restricciones, distinguiendo prioridad de valor y secuencia de ejecución.

### Antes

Al priorizar, ¿qué debe considerarse además del valor esperado?

- A. Únicamente el coste de programación
- B. Dependencias y obligaciones legales **(correcta)**
- C. La preferencia del último interesado consultado
- D. Solo el orden en que llegaron las peticiones

Explicación: La prioridad debe integrar restricciones y dependencias, no solo una puntuación de valor.

### Propuesta

Al priorizar requisitos para una entrega, ¿qué debe considerarse además del valor esperado?

- A. El esfuerzo de programación como criterio que sustituya cualquier restricción de entrega.
- B. Las dependencias entre requisitos y las obligaciones normativas que condicionen su entrega. **(correcta)**
- C. La preferencia de quien solicita el último cambio como criterio estable de precedencia.
- D. La antigüedad de cada petición como sustituto de comprobar su viabilidad y restricciones.

Explicación: El valor no elimina restricciones: un requisito puede necesitar otro previo o responder a una obligación con plazo. Conviene distinguir importancia y secuencia viable y hacer explícitos dependencias, cumplimiento, riesgo y urgencia.

- Error A: El esfuerzo importa, pero no permite ignorar requisitos previos ni obligaciones que deben satisfacerse para entregar.
- Error C: La última petición no representa por sí sola valor, urgencia ni cumplimiento; hace falta una decisión con criterios compartidos.
- Error D: El orden de llegada no identifica requisitos previos, plazos normativos ni cambios de valor o viabilidad.

- [IIBA: Analyze To Determine What Is Valuable — Insight](https://www.iiba.org/contentassets/e0c3e1bdcc624d90ba58ec7a45e0db1d/analyze-to-determine-what-is-valuable-insight.pdf) · Backlog Management, p.5: Compliance, Prerequisites y Additional attributes · versión: Edición indexada consultada el 26-10-2026; sin número de versión comprobado · comprobado: 2026-10-26
- [IIBA: MoSCoW or Bust! Myths About Prioritization](https://www.iiba.org/business-analysis-blogs/moscow-or-bust-myths-about-prioritization/) · Prioritization vs. Sequencing; Filters, Not Buckets · versión: Artículo web consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `e6c2109398bd0742882e0f2728d11c6bff02b4f746446f9ca9ab2bb4c39c305d` · propuesta: `9dda249790e16855919ef5ebc4b160cd39d069ccebf577b32f890a881de4c29a`

## AI-GSI-B3-T03-016

Decisión: pending_review · acción: revise.

Motivo: Usar un microcaso con recuentos iguales y códigos distintos para evaluar reconciliación semántica, sin confiar solo en éxito técnico o conteos.

### Antes

¿Qué debe documentarse para migrar datos entre sistemas?

- A. Únicamente una fecha de migración
- B. Solo el esquema destino sin correspondencias
- C. Una copia sin verificar conteos ni reglas
- D. Reglas de correspondencia y requisitos de reconciliación **(correcta)**

Explicación: La migración necesita mapear datos y comprobar que el resultado mantiene coherencia.

### Propuesta

Origen y destino tienen el mismo número de registros tras una migración, pero los códigos de estado siguen catálogos distintos. ¿Qué debe documentarse para verificar que la migración conserva su significado?

- A. La fecha de corte y el número total de filas, considerándolos prueba suficiente de equivalencia.
- B. El esquema físico de destino, dejando que sus restricciones sustituyan la correspondencia semántica.
- C. El resultado sin errores de la herramienta de copia, dando por correcta la interpretación de los códigos.
- D. Las correspondencias y transformaciones, y criterios de reconciliación de datos y reglas de negocio. **(correcta)**

Explicación: La migración necesita definir qué significa cada valor y cómo se transforma, y comprobar el resultado con criterios de reconciliación. Igualar recuentos no detecta por sí solo códigos mal traducidos, relaciones rotas o importes incoherentes.

- Error A: Un recuento igual no demuestra correspondencia de contenido; los mismos registros pueden haber recibido estados o valores incorrectos.
- Error B: El esquema puede aceptar códigos válidos que representen otro significado. Hay que definir la correspondencia entre catálogos.
- Error C: Que la herramienta termine no acredita el significado del resultado. Las comprobaciones deben cubrir datos transformados y reglas acordadas.

- [AWS DMS: Specifying table selection and transformations rules using JSON](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.SelectionTransformation.html) · Selection rules and actions; Transformation rules and actions · versión: Documentación web consultada el 26-10-2026 · comprobado: 2026-10-26
- [AWS DMS data validation](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html) · Introducción: comparación de filas origen/destino y notificación de diferencias; Limitations · versión: Documentación web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `7f2498707c937ea89e0430c9696fbfb9d1e770de39b57a0411bb6c3c22f935f9` · propuesta: `dde70f1bcede6f8986a3329a9b7d78aaabd676336a7bcf50fc1a2ebd1ae98566`

## AI-GSI-B3-T05-006

Decisión: pending_review · acción: revise.

Motivo: Concretar ausencia de índice auxiliar y peor caso; contrastar listas, arrays y búsqueda binaria sin afirmar que toda operación sobre lista sea lineal.

### Antes

¿Qué limita a una lista enlazada para acceder por posición?

- A. Debe recorrer enlaces, con coste O(n) **(correcta)**
- B. Carece de inserciones
- C. Solo admite un elemento
- D. Siempre necesita ordenar todos los nodos

Explicación: La inserción local puede ser eficiente con una referencia; el acceso posicional requiere recorrido.

### Propuesta

En una lista enlazada sin índice auxiliar, ¿qué limita el acceso a un elemento por su posición?

- A. Hay que seguir enlaces hasta la posición; el recorrido tiene coste O(n) en el peor caso. **(correcta)**
- B. La posición permite calcular directamente la dirección del nodo, con coste O(1).
- C. Ordenar los nodos permite aplicar búsqueda binaria y garantiza acceso por índice O(log n).
- D. La inserción local debe copiar todos los nodos, y ese desplazamiento es el coste del acceso.

Explicación: Los nodos se localizan recorriendo enlaces, no calculando una dirección contigua a partir del índice. Por eso el acceso puede ser lineal; una lista doble puede empezar por el extremo más cercano sin cambiar ese peor orden de coste.

- Error B: Calcular una dirección a partir del índice caracteriza el acceso directo de una estructura contigua como un array; la lista no ofrece esa correspondencia.
- Error C: Ordenar valores no crea acceso directo al nodo intermedio. La búsqueda binaria no proporciona esa garantía de coste en una lista sin índice auxiliar.
- Error D: Una inserción local con referencia adecuada puede cambiar pocos enlaces. Copiar todos los nodos no es la causa del coste de acceder por posición.

- [Oracle Java SE: LinkedList](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/LinkedList.html) · Descripción de clase: recorrido desde un extremo en operaciones indexadas; get(int) · versión: Java SE 25; el recorrido enlazado fundamenta el coste lineal indicado · comprobado: 2026-10-26

Partida: `b04b979c215ef021c963c172439333757964f2ae3891cfc6978fba4ae63f7c72` · propuesta: `30c650d77d84af32e7f11a356245f3262292c33ec232459956557fd989547e06`

## AI-GSI-B3-T06-020

Decisión: pending_review · acción: revise.

Motivo: Conservar el objetivo de competencia, adopción y dudas, distinguiendo resultados de aprendizaje de asistencia, recursos y satisfacción.

### Antes

¿Qué debe medirse en formación además de asistencia?

- A. Competencia, adopción y dudas recurrentes **(correcta)**
- B. Únicamente tamaño de los manuales
- C. Solo duración de los descansos
- D. Solo número de diapositivas

Explicación: La capacitación busca capacidad de uso y operación, no solo presencia.

### Propuesta

¿Qué debe medirse en una formación de usuarios además de la asistencia?

- A. Competencia adquirida, aplicación en el trabajo y dificultades que requieren refuerzo. **(correcta)**
- B. Horas impartidas, número de sesiones y porcentaje de plazas que se han ocupado.
- C. Cantidad de materiales entregados, tamaño del manual y número de ejemplos presentados.
- D. Satisfacción al terminar la sesión, tomándola como demostración de competencia y uso posterior.

Explicación: La asistencia describe participación, no lo aprendido ni su aplicación. Conviene evaluar competencias y transferencia al trabajo, con seguimiento de dificultades; satisfacción, recursos y duración complementan esa evaluación, pero no la sustituyen.

- Error B: Son medidas de actividad y cobertura de la formación; no demuestran que las personas sepan realizar las tareas.
- Error C: Describen materiales y exposición al contenido, pero no acreditan comprensión ni uso correcto en el puesto.
- Error D: La satisfacción recoge una percepción. No demuestra por sí misma adquisición de habilidades ni transferencia posterior al trabajo.

- [CDC: Evaluate Training, Measuring Effectiveness](https://www.cdc.gov/training-development/php/about/evaluate-training-measuring-effectiveness.html) · What to evaluate: Evaluate learning y Evaluate learning transfer; Delayed evaluation or follow-up · versión: 28-10-2024; consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `3c9a6b00120d5cef5d9e07804f69959944628492076af7635f1d2f581b1e5a46` · propuesta: `6c55d5a3f81a42d7327c2e23febd44baf939a8ffe6f0af8e3c16f84bec471267`

## AI-GSI-B3-T07-004

Decisión: pending_review · acción: revise.

Motivo: Conservar el microcaso claro y distinguir defectos de especificación, medidas dinámicas y garantías imposibles de ausencia de defectos.

### Antes

Una revisión comprueba una especificación sin ejecutar código. ¿Qué puede aportar?

- A. Solo un resultado de rendimiento
- B. Únicamente pruebas de carga
- C. Nada relacionado con calidad
- D. Verificación estática **(correcta)**

Explicación: Las revisiones estáticas pueden detectar defectos en productos de trabajo.

### Propuesta

Una revisión comprueba una especificación sin ejecutar código. ¿Qué puede aportar?

- A. Una medida del tiempo de respuesta obtenido por el sistema bajo carga.
- B. Una confirmación de las salidas que produce una versión ejecutable concreta.
- C. Una garantía de que el producto terminado no contendrá defectos funcionales.
- D. Verificación estática que detecte ambigüedades, contradicciones u omisiones. **(correcta)**

Explicación: La revisión puede encontrar defectos directamente en un producto de trabajo sin ejecutarlo. Forma parte de las pruebas estáticas y complementa las dinámicas; no demuestra por sí sola comportamiento en ejecución ni ausencia de todos los defectos.

- Error A: El tiempo de respuesta bajo carga requiere ejecución y medición del sistema; no se obtiene revisando la especificación.
- Error B: Confirmar salidas de una versión ejecutable exige una prueba dinámica o evidencia de ella; la revisión descrita no ejecuta esa versión.
- Error C: Ninguna revisión de la especificación garantiza ausencia de defectos en el producto final. Su alcance es detectar problemas en lo revisado.

- [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf) · §3.1 Static Testing Basics; §§3.1.1–3.1.3: productos revisables y diferencia con pruebas dinámicas · versión: CTFL 4.0.1, 15-09-2024 · comprobado: 2026-10-26

Partida: `7b887843793b5fb510c125abf676b01cbb29f47f9e15fc23df47b367a1e4e10c` · propuesta: `abe16d232b37f3bcf4998845b9009dcbb44763dc5fec4f6102434a27715d7f04`

## AI-GSI-B3-T07-014

Decisión: pending_review · acción: revise.

Motivo: Conservar precondiciones, datos, pasos y esperado, añadiendo contexto y evitando confundir evidencia de ejecución con diseño del caso.

### Antes

¿Qué necesita un caso de prueba reproducible?

- A. Precondiciones, datos, pasos y resultado esperado **(correcta)**
- B. Una captura sin contexto
- C. Solo un título
- D. Solo la fecha de ejecución

Explicación: El caso debe permitir repetir y contrastar la comprobación.

### Propuesta

¿Qué información permite repetir un caso de prueba y contrastar su resultado de forma consistente?

- A. Precondiciones y entorno pertinente, datos, acciones y resultados esperados verificables. **(correcta)**
- B. Título, requisito relacionado y prioridad, dejando datos y comprobación a elección de cada ejecutor.
- C. Captura de una ejecución anterior y fecha, utilizando su apariencia como instrucciones de repetición.
- D. Versión probada y estado aprobado, conservando el resultado observado como sustituto del esperado.

Explicación: Un caso reproducible fija el estado inicial y contexto relevante, entradas, acciones y criterio esperado. Registrar el resultado real permite compararlo, pero no debe convertirse después en la definición de lo que se esperaba.

- Error B: Título y trazabilidad identifican el objetivo, pero elegir datos y criterio de forma distinta puede cambiar la prueba y su interpretación.
- Error C: Una captura no suele describir estado inicial, entradas ni pasos; una fecha no suple esa información para repetir.
- Error D: Versión y resultado anterior son útiles, pero no definen el criterio de aceptación. Copiar lo observado como esperado puede consolidar un defecto.

- [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf) · §1.4.3 Testware; §4.5.3 Acceptance Test-driven Development; §5.4 Configuration Management · versión: CTFL 4.0.1, 15-09-2024 · comprobado: 2026-10-26

Partida: `b9767d75b54e2cdb573a06d4b85771ca33576d0b349760bb4309aff8d0a50a16` · propuesta: `6a0b8186acbf19e4ba7a00bd56e0f3787a6e428806eb0b6b274ad2976f7ef500`

## AI-GSI-B3-T07-016

Decisión: pending_review · acción: revise.

Motivo: Situar el diagnóstico antes de la aplicación para distinguir prueba de componentes y prueba funcional, sin afirmar cobertura completa por un test de hardware.

### Antes

¿Qué ejemplo corresponde a pruebas de hardware?

- A. Solo revisar gramática de un manual
- B. Únicamente comprobar un formulario
- C. Verificar memoria, almacenamiento y comportamiento ante fallos **(correcta)**
- D. Solo probar una función aritmética

Explicación: El alcance incluye dispositivos, redundancia y rendimiento físico.

### Propuesta

Un equipo falla de forma intermitente antes de cargar la aplicación. ¿Qué comprobación evalúa más directamente sus componentes de hardware?

- A. Repetir el caso de negocio de la aplicación y comparar el texto del mensaje de error.
- B. Revisar el esquema de la base de datos y la coherencia de sus reglas de validación.
- C. Ejecutar diagnósticos de memoria y almacenamiento y registrar los errores detectados. **(correcta)**
- D. Comparar capturas de la interfaz entre versiones y revisar cambios de configuración visual.

Explicación: Los diagnósticos de componentes ejercitan memoria o almacenamiento para detectar problemas físicos o de funcionamiento. Pueden ejecutarse fuera del sistema operativo; pasar una prueba no descarta todos los fallos intermitentes ni de otros componentes.

- Error A: El caso de negocio comprueba comportamiento de la aplicación y puede no ejecutarse si el fallo aparece antes de cargarla.
- Error B: El esquema y las validaciones son elementos lógicos del software; no ejercitan directamente los componentes físicos del equipo.
- Error D: Las capturas y la configuración visual permiten comparar interfaz, pero no constituyen diagnósticos de memoria o almacenamiento.

- [HP Z220, Z420, Z620 and Z820 Workstations: Maintenance and Service Guide](https://h10032.www1.hp.com/ctg/Manual/c04205252.pdf) · Chapter 4, Hardware diagnostic tests, pp.143–144: Start-Up Test, Run-In Test y Memory Test · versión: Quinta edición, marzo de 2014; ejemplo histórico del principio de diagnóstico de componentes · comprobado: 2026-10-26

Partida: `58879067fac5d21a64e15f1a323720370818b973cfeab66d1dae03ef4aa5ac84` · propuesta: `cc7b48fd6b5aefbfedd6f9393628a9c7a4171bba32c49e5bc590cffcf8f3c30b`

## AI-GSI-B3-T08-008

Decisión: pending_review · acción: revise.

Motivo: Conservar configuración, versiones, relaciones y estado; comparar con gestión económica, observabilidad y repositorio para evitar equipararlos a una CMDB.

### Antes

¿Qué debe relacionar una CMDB útil?

- A. Solo nombres de equipos sin relaciones
- B. Únicamente compras históricas sin estado actual
- C. Solo versiones del código, excluyendo infraestructura
- D. Elementos de configuración, versiones, relaciones y estado **(correcta)**

Explicación: La configuración debe reflejar relaciones y cambios reales, no un inventario estático obsoleto.

### Propuesta

¿Qué debe relacionar una CMDB útil para comprender el estado de un servicio y el impacto de sus cambios?

- A. Compras, proveedores y amortizaciones, tomando el historial económico como estado operativo.
- B. Métricas de rendimiento y eventos, utilizando sus series temporales como inventario de dependencias.
- C. Ramas, commits y autores del repositorio, deduciendo de ellos todos los recursos desplegados.
- D. Elementos de configuración, versiones o atributos relevantes, relaciones y estado operativo. **(correcta)**

Explicación: La CMDB identifica los elementos de configuración y cómo se relacionan, junto con atributos y estado pertinentes. Mantenerlos actualizados permite analizar dependencias e impactos; no basta un inventario económico, un repositorio de código o una serie de métricas.

- Error A: El historial económico describe adquisición y coste, pero no determina qué elementos están en servicio ni sus dependencias actuales.
- Error B: Las métricas muestran comportamiento y eventos; por sí solas no representan de forma explícita la composición y relaciones del servicio.
- Error C: El repositorio conserva versiones de artefactos. No descubre por sí mismo qué infraestructura existe ni qué versiones están desplegadas.

- [AWS: What Is a CMDB?](https://aws.amazon.com/what-is/cmdb/) · Dependency and relationship mapping; Versioned change history; What data can a CMDB contain? · versión: Artículo web consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `33fe1851bb626eeea48461f7c21a113f0e77f65e2451a6cf35f5b86834f60257` · propuesta: `729a2bbfb5c3f05465b62bfd426b4f7de7011c72b3b90da7f3c5a5072619100c`
