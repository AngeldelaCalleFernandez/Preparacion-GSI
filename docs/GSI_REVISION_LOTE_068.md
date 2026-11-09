# GSI-EDITORIAL-068 — revisión propuesta

Preparado: 2026-11-03. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `3047b46824bc6a571834558d4bef851f2dd808e5ebabc3e5285e1ca4c1cc588e`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T12-018

Decisión: pending_review · acción: revise.

Motivo: Conservar formato JWT y clave C; comparar formato, esquema HTTP, protocolo y confidencialidad.

### Antes

¿Qué es JWT?

- A. Una base de datos
- B. Un protocolo completo de autenticación por sí solo
- C. Un formato de token **(correcta)**
- D. Un cifrado obligatorio de toda carga

Explicación: Un JWT no está cifrado por defecto y requiere validaciones adecuadas.

### Propuesta

¿Qué identifica mejor a JSON Web Token (JWT)?

- A. Un esquema HTTP que transmite cualquier credencial usando el prefijo Bearer.
- B. Un protocolo de autenticación que define todo el intercambio de inicio de sesión.
- C. Un formato compacto para representar y transmitir afirmaciones o claims. **(correcta)**
- D. Un cifrado que oculta obligatoriamente todo el contenido a quien recibe el token.

Explicación: JWT define una representación compacta de claims. Puede utilizar protección de firma/MAC o cifrado según el formato y contexto, pero no impone cifrado a todo token ni define por sí solo un protocolo de login. Para confiar en uno hacen falta validaciones de seguridad y del uso previsto; poder decodificarlo no basta.

- Error A: Bearer es un modo de presentar una credencial en HTTP y no determina que su formato sea JWT.
- Error B: Un protocolo como OIDC define interacciones y validaciones de autenticación; JWT es un formato que puede utilizarse dentro de él.
- Error D: Un JWT firmado puede contener claims legibles. La protección de integridad no equivale a ocultar el contenido mediante cifrado.

- [IETF: JSON Web Token](https://www.rfc-editor.org/rfc/rfc7519.html) · Abstract; §2 Terminology; Appendix B Relationship of JWTs to SAML Assertions · versión: RFC7519, mayo2015; comprobada 30-10-2026; formato distinto de protocolo de autenticación o autorización. · comprobado: 2026-10-30
- [IETF: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725.html) · Abstract; §3 Best Practices: algoritmos y validación del contexto · versión: RFC8725,BCP225, febrero2020, comprobado03-11-2026. JWT puede firmarse o cifrarse; formato no equivale a autenticación completa. · comprobado: 2026-11-03

Partida: `548fa0027947663dc44b33908fb8ee7334eec3c224de579bfa8aff5ba861c160` · propuesta: `9ae70d85e29aa38ca0b8c1018e550100b2ac6393b3a3e7172920e7d50516305d`

## AI-GSI-B3-T12-007

Decisión: pending_review · acción: revise.

Motivo: Conservar presentación por zona y clave C; alternativas cercanas sobre locale, offset y UTC sin cambio del concepto.

### Antes

Al almacenar instantes en UTC, ¿qué debe seguir considerándose para mostrarlos al usuario?

- A. La supresión de formatos regionales
- B. Un offset fijo universal para todos los usuarios
- C. La zona horaria pertinente para su presentación **(correcta)**
- D. Solo el idioma, porque UTC elimina las zonas

Explicación: Almacenar en UTC no elimina la necesidad de interpretar y mostrar fechas según zona y contexto del usuario.

### Propuesta

Al almacenar instantes en UTC, ¿qué debe seguir considerándose para mostrarlos al usuario?

- A. El locale como sustituto de elegir la zona horaria para presentar el instante.
- B. El desplazamiento actual de la zona aplicado sin cambios a todo registro histórico.
- C. La zona pertinente y sus reglas para el instante que se quiere presentar. **(correcta)**
- D. La misma hora UTC como hora civil local de todos los usuarios y ubicaciones.

Explicación: La representación local necesita una zona horaria pertinente y las reglas aplicables al instante almacenado. UTC proporciona una referencia común de instantes, no una hora civil única para todos los usuarios. Idioma o locale pueden cambiar el formato, pero no sustituyen la elección de zona ni garantizan el desplazamiento histórico correcto.

- Error A: El locale define convenciones de formato; no identifica por sí solo la zona que debe utilizar una persona.
- Error B: Una zona regional puede cambiar de desplazamiento según la fecha. No basta trasladar el desplazamiento actual al pasado.
- Error D: El mismo instante puede tener horas civiles diferentes según la zona; almacenar UTC no hace coincidir esas presentaciones.

- [Ecma: Internationalization API](https://402.ecma-international.org/12.0/) · §6.5 IANA time zones; DateTimeFormat: opción timeZone y formato de instantes · versión: ECMA402, edición12, ECMAScript2025, comprobada 30-10-2026. Se usa edición publicada fija; el borrador principal ya se presenta como2027 y no se adopta como estándar final. · comprobado: 2026-10-30
- [IANA: tz theory and pragmatics](https://data.iana.org/time-zones/tzdb/theory.html) · Scope of the tz database; historia, reglas y cambios de hora civil · versión: Documento de tzdb leído 30-10-2026, sin atribuir una versión local de datos o precisión histórica universal anterior a1970. · comprobado: 2026-10-30

Partida: `a9cf1f4dcf1e5e130af975cf272e97139cc173d18ba0b994209a1cf2fb79fcb1` · propuesta: `c74dda08a63611967a35f8b113d1f8b939ece88ae686916e3ce907eb6c992b15`

## AI-GSI-B3-T13-001

Decisión: pending_review · acción: revise.

Motivo: Conservar calidad relativa a necesidades y clave B; distinguir evidencia parcial de evaluación del producto.

### Antes

¿Qué define la calidad de software en el tema?

- A. Cumplir exclusivamente el presupuesto del proyecto
- B. Satisfacer necesidades y requisitos bajo condiciones **(correcta)**
- C. Medir únicamente el número de defectos detectados durante desarrollo
- D. Maximizar rendimiento con independencia de las necesidades

Explicación: La calidad se evalúa respecto a necesidades y contexto, no a una propiedad aislada.

### Propuesta

¿Qué expresa mejor la calidad de un producto software en su contexto?

- A. Ajustar el coste del proyecto, aunque el producto no resuelva las necesidades previstas.
- B. Satisfacer las necesidades y requisitos pertinentes en las condiciones de uso definidas. **(correcta)**
- C. No encontrar defectos en las pruebas ejecutadas, sin considerar su alcance o contexto.
- D. Obtener el rendimiento máximo, aunque otras cualidades necesarias resulten insuficientes.

Explicación: La calidad se valora frente a necesidades, requisitos y condiciones de uso pertinentes. Coste, defectos o rendimiento aportan información parcial y no sustituyen ese marco. Una prueba sin fallos observados tampoco demuestra que se hayan satisfecho todas las necesidades del producto.

- Error A: Ajustarse a presupuesto es un resultado de gestión que no acredita adecuación del producto a lo que debe resolver.
- Error C: No observar defectos depende de pruebas y alcance; puede haber necesidades no evaluadas o problemas no detectados.
- Error D: Maximizar una propiedad aislada puede perjudicar otras que el contexto requiere. La calidad exige considerar el conjunto pertinente.

- [ISO: Product quality model](https://www.iso.org/standard/78176.html) · Abstract; General information: nueve características y uso para especificación, medidas y evaluación · versión: ISO/IEC25010:2023, edición2, noviembre2023. Ficha pública comprobada03-11-2026; no se afirma acceso al texto íntegro de pago. · comprobado: 2026-11-03
- [ASQ: Quality Assurance vs Quality Control](https://asq.org/quality-resources/quality-assurance-vs-control) · Differences between QA and QC; Quality Assurance; Quality Control · versión: Página pública comprobada03-11-2026; distinción habitual de orientación, sin reducir QA a una única tarea o excluir toda relación entre proceso y producto. · comprobado: 2026-11-03
- [NASA: Software Requirements](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695421/SWE-050%2B-%2BSoftware%2BRequirements) · §1.1 Notes y §3: requisitos claros, cuantitativos/medibles, verificables y trazables · versión: Handbook VerD; texto comprobado03-11-2026. Requisitos NASA como orientación conceptual, no obligación normativa del proyecto. · comprobado: 2026-11-03

Partida: `b2be239454f990754c643429501b1a2e63a0575ef0fa2fd7e9e0a8db02f0df87` · propuesta: `6f4862fbb89756fe05a19ed1dd5b9f4eaa003cf8628fe5f9a2891f7de2f88b6a`

## AI-GSI-B3-T13-002

Decisión: pending_review · acción: revise.

Motivo: Conservar aseguramiento frente a control y clave B; explicar orientación sin identificar QA con toda la calidad o QC solo con pruebas de carga.

### Antes

¿Qué diferencia QA y QC?

- A. Ambos son exclusivamente pruebas de carga
- B. QA se orienta al proceso preventivo; QC evalúa el producto **(correcta)**
- C. QA solo cuenta defectos; QC solo compra herramientas
- D. QC sustituye toda planificación

Explicación: Prevención en el proceso y evaluación del producto se complementan.

### Propuesta

¿Qué distinción habitual existe entre aseguramiento de calidad (QA) y control de calidad (QC)?

- A. QA inspecciona el producto final; QC diseña el proceso preventivo y asegura su cumplimiento.
- B. QA aporta confianza mediante el proceso; QC comprueba y controla la conformidad del producto. **(correcta)**
- C. QA se realiza al entregar; QC es una certificación que hace innecesarias las evaluaciones.
- D. QA consiste en pruebas automáticas; QC elimina las revisiones manuales del proceso.

Explicación: QA se orienta a proporcionar confianza con actividades planificadas y sistemáticas; QC se orienta a cumplir requisitos mediante controles y evaluación, incluida la inspección del producto. Proceso preventivo y evaluación se complementan. No son compartimentos sin relación ni dos nombres limitados a tipos de pruebas.

- Error A: Invierte la orientación habitual entre aseguramiento del proceso y controles del producto.
- Error C: QA no se limita al final y una certificación no elimina la necesidad de evidencia de conformidad.
- Error D: La distinción no depende de automatizar o revisar manualmente: esas técnicas pueden formar parte de distintas actividades de calidad.

- [ASQ: Quality Assurance vs Quality Control](https://asq.org/quality-resources/quality-assurance-vs-control) · Differences between QA and QC; Quality Assurance; Quality Control · versión: Página pública comprobada03-11-2026; distinción habitual de orientación, sin reducir QA a una única tarea o excluir toda relación entre proceso y producto. · comprobado: 2026-11-03

Partida: `be7b10e8c4c61155ae19a84caf366ab8c9a2cbb6a60c11f8196db7fd1838d26e` · propuesta: `9212d9a1e725d7353cca95ebf9bea8abaab8c1ea83116df44e210770d63b0bb6`

## AI-GSI-B3-T13-003

Decisión: pending_review · acción: revise.

Motivo: Conservar recuento y clave B; identificar la edición y el modelo directamente, sin remitir a apuntes como autoridad.

### Antes

¿Cuántas características de calidad de producto define ISO/IEC 25010:2023 en los apuntes?

- A. Doce
- B. Nueve **(correcta)**
- C. Ocho
- D. Cuatro

Explicación: La edición 2023 utiliza nueve características; debe distinguirse de la edición 2011.

### Propuesta

¿Cuántas características principales tiene el modelo de calidad de producto de ISO/IEC 25010:2023?

- A. Doce
- B. Nueve **(correcta)**
- C. Ocho
- D. Cuatro

Explicación: El modelo de calidad de producto de ISO/IEC 25010:2023 tiene nueve características principales. El total no es el de la edición 2011, que distinguía ocho características de producto y otro modelo de calidad en uso. Las subcaracterísticas no deben sumarse al total de características principales.

- Error A: Doce no es el número de características principales del modelo de producto de la edición 2023; no se debe mezclar el total con otras agrupaciones.
- Error C: Ocho es el total del modelo de producto de 2011, no el de la edición 2023 indicada.
- Error D: Cuatro no representa el conjunto completo de características principales de producto definido en esa edición.

- [ISO: Product quality model](https://www.iso.org/standard/78176.html) · Abstract; General information: nueve características y uso para especificación, medidas y evaluación · versión: ISO/IEC25010:2023, edición2, noviembre2023. Ficha pública comprobada03-11-2026; no se afirma acceso al texto íntegro de pago. · comprobado: 2026-11-03
- [ISO: Quality models, edición anterior](https://www.iso.org/standard/35733.html) · Abstract: ocho características de producto y cinco de calidad en uso; estado Withdrawn · versión: ISO/IEC25010:2011, edición1 retirada; ficha comprobada03-11-2026 como contraste histórico, no norma vigente. · comprobado: 2026-11-03
- [ISO/IEC25010:2023: muestra pública](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf) · Foreword p.iv (PDF4): Safety añadido, cambios de nombres; Introduction pp.vi–vii; Scope p.1 (PDF9) · versión: Texto primario ISO/IEC2023 en muestra pública del distribuidor iTeh,11 páginas. Comprobada y páginas pertinentes inspeccionadas03-11-2026; no acceso íntegro o eliminación de marca de agua. · comprobado: 2026-11-03

Partida: `5391376b8eb0906d22cf2cb439c99f370a7a7a754928d0cd1b4c70fc328eaa7a` · propuesta: `536f6f9d2e1c4c7cb1fc647b892a3bea41a64d7b7db3ad8e515de52fa2ea1924`

## AI-GSI-B3-T13-004

Decisión: pending_review · acción: revise.

Motivo: Conservar especificación, medida y evaluación y clave C; distinguir marco de propiedades de selección de herramienta o sello.

### Antes

¿Para qué sirve un modelo de calidad de producto?

- A. Elegir una herramienta sin requisitos de calidad
- B. Asegurar calidad automáticamente sin evaluar
- C. Especificar, medir y evaluar calidad durante el ciclo **(correcta)**
- D. Sustituir mediciones por una certificación declarada

Explicación: El modelo proporciona dimensiones para concretar requisitos y evaluación.

### Propuesta

¿Para qué sirve un modelo de calidad de producto?

- A. Seleccionar herramientas por sus funciones antes de identificar necesidades de calidad.
- B. Asignar una nota global al producto sin definir observaciones o criterios de evaluación.
- C. Organizar propiedades de calidad para concretar requisitos, medidas y evaluación. **(correcta)**
- D. Reemplazar el examen del producto por la declaración de que utiliza un modelo reconocido.

Explicación: Un modelo proporciona dimensiones comunes para definir qué calidad se requiere y cómo evaluar las propiedades pertinentes durante el ciclo de vida. Hace falta concretar medidas y criterios; usar el modelo no certifica por sí mismo un producto o una herramienta.

- Error A: Una herramienta no determina qué necesidades deben satisfacerse. El modelo ayuda a estructurar esas necesidades antes de elegir cómo comprobarlas.
- Error B: Una nota sin propiedades observables o criterios no constituye evaluación apoyada en el modelo.
- Error D: La declaración de uso de un modelo no sustituye evidencia del comportamiento o de las propiedades del producto.

- [ISO: Product quality model](https://www.iso.org/standard/78176.html) · Abstract; General information: nueve características y uso para especificación, medidas y evaluación · versión: ISO/IEC25010:2023, edición2, noviembre2023. Ficha pública comprobada03-11-2026; no se afirma acceso al texto íntegro de pago. · comprobado: 2026-11-03
- [ISO: Measurement process](https://www.iso.org/standard/71197.html) · Abstract: información necesaria, medidas, análisis, validez y mejora · versión: ISO/IEC/IEEE15939:2017; ficha publicada, confirmada2022 y en revisión con DIS anunciado. Comprobada03-11-2026; no se presenta el borrador como norma final. · comprobado: 2026-11-03

Partida: `94ca21429702ae0a3f0d9aae62067476772092557c6f12363080937f6135c794` · propuesta: `1673f486ac2bbbc45a1e8ba6070bb197ae48dc95b341e0d14b993e0a7ed4dcce`

## AI-GSI-B3-T13-005

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave A; precisar denominador y comparabilidad sin convertir densidad en valoración global.

### Antes

¿Cuál es una métrica de producto?

- A. Densidad de defectos **(correcta)**
- B. Tiempo de resolución del proceso de incidencias
- C. Tiempo de espera de una tarea en el flujo
- D. Frecuencia de despliegue

Explicación: Las métricas de producto describen propiedades o resultados del software.

### Propuesta

¿Cuál es una métrica de producto?

- A. Densidad de defectos **(correcta)**
- B. Tiempo de resolución del proceso de incidencias
- C. Tiempo de espera de una tarea en el flujo
- D. Frecuencia de despliegue

Explicación: La densidad relaciona defectos observados con una unidad de tamaño del producto, como KLOC o puntos de función según la definición elegida. Para comparar deben coincidir alcance y criterio de recuento. Es un indicador parcial: más defectos detectados puede reflejar mayor eficacia de búsqueda y no demuestra por sí solo peor calidad real.

- Error B: El tiempo de resolución describe el flujo de tratamiento de incidencias; no normaliza defectos por tamaño del producto.
- Error C: La espera de una tarea describe el funcionamiento del proceso de trabajo, no una propiedad del artefacto software.
- Error D: La frecuencia de despliegue describe la actividad de entrega, no la densidad de defectos de una versión.

- [NASA: Management and Technical Measurements](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695475/SWE-090%2B-%2BManagement%2Band%2BTechnical%2BMeasurements) · §3: Selecting and Standardizing Measures; Reporting and Analysis; definición, objetivos y baselines · versión: Handbook VerD, referencia histórica a NPR7150.2D; texto público comprobado03-11-2026. Se usa como guía conceptual, sin imponer requisitos NASA a este proyecto. · comprobado: 2026-11-03
- [NASA: Analysis of Measurement Data](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695480/SWE-093%2B-%2BAnalysis%2Bof%2BMeasurement%2BData) · §3 Guidance; §8 Objective Evidence; ejemplos de defect density y análisis de tendencias · versión: Handbook VerD, guía comprobada03-11-2026; no se adopta cada umbral o ejemplo ilustrativo como criterio universal de calidad. · comprobado: 2026-11-03

Partida: `393ab0be87ba8c8c0565efee077c84f845d6a3540601eb4e214afee419116be9` · propuesta: `0c6e260c1449006b28afd6882c50d2a992943fa3370b46d41d957ab148c26885`

## AI-GSI-B3-T13-006

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, alternativas y clave C; comparar métrica operacional y propiedades estáticas sin declararlas categorías excluyentes para todo uso.

### Antes

¿Cuál es una métrica de servicio?

- A. Tamaño estático de un módulo
- B. Complejidad ciclomática del código
- C. Latencia **(correcta)**
- D. Porcentaje de código duplicado

Explicación: Latencia, disponibilidad y tasa de error describen funcionamiento del servicio.

### Propuesta

¿Cuál es una métrica de servicio?

- A. Tamaño estático de un módulo
- B. Complejidad ciclomática del código
- C. Latencia **(correcta)**
- D. Porcentaje de código duplicado

Explicación: La latencia de un servicio expresa tiempo de atención o respuesta según el punto de medida definido. Debe interpretarse por población, carga y distribución, distinguiendo solicitudes con éxito y error cuando corresponda. Las medidas estáticas del código pueden ayudar al diagnóstico, pero no describen directamente la experiencia temporal observada en operación.

- Error A: El tamaño estático de un módulo describe un artefacto, no cuánto tarda el servicio en atender una solicitud.
- Error B: La complejidad ciclomática es una propiedad de la estructura de control; no mide directamente el tiempo de respuesta del servicio.
- Error D: La duplicación describe estructura o contenido repetido del código, no la latencia operativa.

- [Google SRE: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) · The Four Golden Signals: Latency; distribución de latencias, solicitudes con éxito y con error · versión: Libro SRE, capítulo6, texto público comprobado03-11-2026; no se fija un objetivo de servicio universal. · comprobado: 2026-11-03
- [NIST: Structured Testing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-235.pdf) · §2.2 p.10/PDF30; §2.3 p.11; §3.1 p.17; §4.1 p.23/PDF43; erratas iniciales · versión: SP500-235,1996, Watson/McCabe, Wallace editora. Consultado y páginas de definición y fórmula inspeccionadas03-11-2026. Métrica de estructura de control; no todo camino es factible ni una cifra acredita ausencia de defectos. · comprobado: 2026-11-03

Partida: `bda08652c064d01962871451d12c30ca2d05620bd1024727124d949fe360db59` · propuesta: `ef26cce0e8e487eb5f1abb926b0466bac6823a049e6683171c0ed96b506ee97f`

## AI-GSI-B3-T13-007

Decisión: pending_review · acción: revise.

Motivo: Conservar McCabe y clave C; precisar independencia lineal y límites de interpretación del grafo.

### Antes

¿Qué mide la complejidad ciclomática?

- A. Número de bytes comprimidos
- B. Tiempo exacto de CPU
- C. Caminos independientes del grafo de control **(correcta)**
- D. Número de usuarios

Explicación: McCabe aproxima complejidad estructural útil para pruebas y mantenimiento.

### Propuesta

¿Qué representa la complejidad ciclomática de un módulo en su grafo de flujo de control?

- A. El número de condiciones escritas, sin considerar el grafo ni decisiones compuestas.
- B. La cantidad total de recorridos posibles de ejecución, incluyendo repeticiones de bucles.
- C. La dimensión de una base de caminos linealmente independientes del grafo de control. **(correcta)**
- D. La cantidad de instrucciones del código fuente, con independencia de sus bifurcaciones.

Explicación: La complejidad ciclomática representa estructura de control mediante una base de caminos linealmente independientes. No cuenta todos los recorridos, que con bucles pueden ser ilimitados, ni equivale al tamaño del fuente. El valor del grafo no prueba por sí solo factibilidad de cada camino, cobertura completa o corrección funcional.

- Error A: Contar expresiones del texto sin su semántica puede omitir decisiones de cortocircuito o interpretar mal decisiones de varias salidas.
- Error B: Independencia lineal no es enumeración de todos los recorridos posibles; repetir un bucle no añade indefinidamente independencia estructural.
- Error D: Longitud de fuente y estructura de control son propiedades distintas; módulos del mismo tamaño pueden tener complejidad diferente.

- [NIST: Structured Testing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-235.pdf) · §2.2 p.10/PDF30; §2.3 p.11; §3.1 p.17; §4.1 p.23/PDF43; erratas iniciales · versión: SP500-235,1996, Watson/McCabe, Wallace editora. Consultado y páginas de definición y fórmula inspeccionadas03-11-2026. Métrica de estructura de control; no todo camino es factible ni una cifra acredita ausencia de defectos. · comprobado: 2026-11-03

Partida: `b9e10a9930837c4f8a696e5e9e2892eb04d7a3a44750276b8fe3337d84067fea` · propuesta: `672039985505933fad49a140df6bf8d9ef1f9fbf43583b8948598d66ab38f6e8`

## AI-GSI-B3-T13-008

Decisión: pending_review · acción: revise.

Motivo: Conservar cálculo 5+1 y clave D; acotar decisiones binarias en el grafo, no solo palabras if del fuente.

### Antes

Para un componente simple con cinco decisiones, ¿qué valor da decisiones + 1?

- A. 5
- B. 10
- C. 4
- D. 6 **(correcta)**

Explicación: La fórmula simplificada indicada produce seis caminos independientes.

### Propuesta

El grafo de flujo de un módulo conectado tiene cinco nodos de decisión binaria. Aplicando V(G)=decisiones+1, ¿qué valor se obtiene?

- A. 5
- B. 10
- C. 4
- D. 6 **(correcta)**

Explicación: Para un grafo de módulo conectado con cinco nodos de decisión binaria se obtiene V(G)=5+1=6. La unidad inicial corresponde al recorrido de base sin bifurcaciones; cada nodo de dos salidas añade una unidad. El supuesto cuenta decisiones del grafo, no presupone que cinco instrucciones del fuente impliquen cinco decisiones si hay cortocircuitos u otras salidas.

- Error A: Cinco cuenta las decisiones pero omite la unidad de base de la fórmula indicada.
- Error B: Diez duplica el número de decisiones; no aplica decisiones más una unidad.
- Error C: Cuatro resta una unidad en lugar de añadir la contribución de base.

- [NIST: Structured Testing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-235.pdf) · §2.2 p.10/PDF30; §2.3 p.11; §3.1 p.17; §4.1 p.23/PDF43; erratas iniciales · versión: SP500-235,1996, Watson/McCabe, Wallace editora. Consultado y páginas de definición y fórmula inspeccionadas03-11-2026. Métrica de estructura de control; no todo camino es factible ni una cifra acredita ausencia de defectos. · comprobado: 2026-11-03

Partida: `cb583cecfeb0fc6cff216079ed2bd6749c3d62ca4bb716ac0e6f7a9c11f8fcde` · propuesta: `9bdd70ebfa57cb039700dd696e14773e6704f1774a904af383d33feb40d76323`

## AI-GSI-B3-T13-009

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta, números, opciones y clave B; detallar sustitución y origen de los errores aritméticos.

### Antes

Con E=12, N=10 y P=1, ¿cuánto vale V(G)=E−N+2P?

- A. 3
- B. 4 **(correcta)**
- C. 2
- D. 24

Explicación: Sustituyendo: 12−10+2=4.

### Propuesta

Con E=12, N=10 y P=1, ¿cuánto vale V(G)=E−N+2P?

- A. 3
- B. 4 **(correcta)**
- C. 2
- D. 24

Explicación: Sustituyendo los datos en la fórmula dada:12−10+2×1=4. E cuenta aristas, N nodos y P los componentes del supuesto; aquí P=1, por lo que coincide con la fórmula de un módulo conectado E−N+2. El resultado es una medida estructural, no el número de líneas o el tiempo de CPU.

- Error A: Tres se obtendría al sumar solo P en vez de 2P; no respeta la fórmula del enunciado.
- Error C: Dos resulta de restar 12−10 sin añadir 2P, que en este supuesto aporta otras dos unidades.
- Error D: Veinticuatro duplica 12 e ignora la resta de nodos y la contribución de componentes; no es el cálculo solicitado.

- [NIST: Structured Testing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-235.pdf) · §2.2 p.10/PDF30; §2.3 p.11; §3.1 p.17; §4.1 p.23/PDF43; erratas iniciales · versión: SP500-235,1996, Watson/McCabe, Wallace editora. Consultado y páginas de definición y fórmula inspeccionadas03-11-2026. Métrica de estructura de control; no todo camino es factible ni una cifra acredita ausencia de defectos. · comprobado: 2026-11-03

Partida: `0eff56baf97ca0d75d569e5b00210e395f8f31f98582b8007407add541321892` · propuesta: `6889e5b7ceb9ffd47b91a1c514f4b678b1040d520d32ce2d05fe180612109cac`

## AI-GSI-B3-T13-010

Decisión: pending_review · acción: revise.

Motivo: Conservar limitación de una métrica única y clave B; distinguir evidencia de estructura, tamaño y comportamiento.

### Antes

¿Por qué no debe usarse McCabe como medida única de calidad?

- A. Porque sustituye todos los requisitos
- B. No cubre todas las dimensiones ni el contexto **(correcta)**
- C. Porque nunca aporta información
- D. Porque siempre vale uno

Explicación: Una métrica estructural no representa seguridad, utilidad ni toda la calidad.

### Propuesta

¿Por qué la complejidad ciclomática no basta como medida única de calidad?

- A. Un valor bajo demuestra que se han implementado todos los comportamientos requeridos.
- B. Describe estructura de control, pero no todas las cualidades y condiciones relevantes del producto. **(correcta)**
- C. Es equivalente al tamaño del fuente y no añade información cuando se conocen las líneas.
- D. Solo es interpretable después de medir tiempos de CPU y memoria en cada ejecución.

Explicación: McCabe aporta información sobre estructura de control, pero una evaluación de calidad necesita otras propiedades y el contexto de uso. Un valor bajo no acredita requisitos satisfechos, seguridad o utilidad. Tampoco es idéntico al tamaño del código o una medida temporal que exija ejecutar el programa.

- Error A: Una implementación sencilla puede omitir requisitos o tener defectos; menor complejidad no prueba corrección funcional.
- Error C: El tamaño no determina la misma estructura de bifurcaciones: NIST presenta su independencia conceptual.
- Error D: La métrica se deriva del grafo de control. CPU y memoria son observaciones de ejecución diferentes.

- [NIST: Structured Testing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-235.pdf) · §2.2 p.10/PDF30; §2.3 p.11; §3.1 p.17; §4.1 p.23/PDF43; erratas iniciales · versión: SP500-235,1996, Watson/McCabe, Wallace editora. Consultado y páginas de definición y fórmula inspeccionadas03-11-2026. Métrica de estructura de control; no todo camino es factible ni una cifra acredita ausencia de defectos. · comprobado: 2026-11-03
- [ISO: Product quality model](https://www.iso.org/standard/78176.html) · Abstract; General information: nueve características y uso para especificación, medidas y evaluación · versión: ISO/IEC25010:2023, edición2, noviembre2023. Ficha pública comprobada03-11-2026; no se afirma acceso al texto íntegro de pago. · comprobado: 2026-11-03
- [ISO: Measurement process](https://www.iso.org/standard/71197.html) · Abstract: información necesaria, medidas, análisis, validez y mejora · versión: ISO/IEC/IEEE15939:2017; ficha publicada, confirmada2022 y en revisión con DIS anunciado. Comprobada03-11-2026; no se presenta el borrador como norma final. · comprobado: 2026-11-03

Partida: `4d1cbe0050cd646dd7dd4701192b75292bb65f7c8a84e8cba7fdac9e6674a537` · propuesta: `3f08e04cc70d4fb38e3a4122b341ba08e644f67b1ba779c17acbc57b7d936214`

## AI-GSI-B3-T13-011

Decisión: pending_review · acción: revise.

Motivo: Conservar cualidades de mantenibilidad y clave A; contrastar decisiones de acoplamiento plausibles sin afirmar garantías automáticas.

### Antes

¿Qué favorece mantenibilidad?

- A. Modularidad, analizabilidad y testabilidad **(correcta)**
- B. Dependencias ocultas y responsabilidades dispersas
- C. Acoplamiento global
- D. Ausencia de documentación

Explicación: Estructura comprensible y comprobable facilita modificar con menor riesgo.

### Propuesta

¿Qué conjunto de propiedades favorece la mantenibilidad del software?

- A. Modularidad, estructura analizable y posibilidades de comprobar los cambios con pruebas. **(correcta)**
- B. Agrupar responsabilidades en una unidad grande para evitar interfaces entre módulos.
- C. Compartir estado global para que los componentes dependan de los mismos detalles.
- D. Mantener dependencias implícitas para reducir el número de contratos que hay que documentar.

Explicación: Separar responsabilidades y hacer explícitas las dependencias ayuda a comprender el efecto de un cambio y a comprobarlo. Modularidad, analizabilidad y testabilidad favorecen el mantenimiento, sin garantizar ausencia de defectos o justificar capas innecesarias. Una decisión de diseño debe valorarse en su contexto.

- Error B: Reducir interfaces concentrando responsabilidades puede aumentar lo que hay que comprender y modificar a la vez; no favorece por sí mismo mantenibilidad.
- Error C: Compartir detalles mediante estado global puede propagar los efectos de cambios entre componentes y dificultar pruebas aisladas.
- Error D: Ocultar dependencias no elimina el acoplamiento: dificulta identificar contratos y consecuencias de un cambio.

- [Microsoft: Architectural principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) · Separation of concerns; separación por responsabilidades, pruebas y mantenimiento · versión: Texto HTML comprobado03-11-2026. Se usan principios de acoplamiento y comprobabilidad, sin prescribir una arquitectura empresarial. · comprobado: 2026-11-03
- [NIST: Structured Testing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-235.pdf) · §2.2 p.10/PDF30; §2.3 p.11; §3.1 p.17; §4.1 p.23/PDF43; erratas iniciales · versión: SP500-235,1996, Watson/McCabe, Wallace editora. Consultado y páginas de definición y fórmula inspeccionadas03-11-2026. Métrica de estructura de control; no todo camino es factible ni una cifra acredita ausencia de defectos. · comprobado: 2026-11-03

Partida: `09c03043ed8f71a2524721d6efaae91405b8c085d9926eb98fa1846f755e70c2` · propuesta: `e911ab7ae29138f42fd983ced3ed041e9b17282944a3a3b71740b38173048e64`

## AI-GSI-B3-T13-012

Decisión: pending_review · acción: revise.

Motivo: Conservar integración de calidad y clave D; caso de equipo que necesita criterios comunes y evidencia, no simple uso de herramientas.

### Antes

¿Qué práctica integra calidad en el proceso?

- A. Omitir deuda técnica
- B. Esperar siempre a producción para comprobar
- C. Contar solo commits
- D. Revisiones y criterios de terminado **(correcta)**

Explicación: Reviews, automatización y Definition of Done hacen explícitos controles continuos.

### Propuesta

Un equipo quiere que sus incrementos incorporen calidad durante el trabajo y tengan un criterio común de terminado. ¿Qué práctica lo favorece?

- A. Reservar la evaluación para el final y considerar suficiente que el trabajo ya esté implementado.
- B. Dar por cumplida la calidad cuando mejora el número de commits o tareas cerradas.
- C. Delegar la definición de terminado en la herramienta de CI por el solo hecho de usarla.
- D. Integrar revisiones, comprobaciones y condiciones de terminado explícitas y compartidas. **(correcta)**

Explicación: Los controles deben formar parte del trabajo y de lo que se considera terminado. Una Definition of Done expresa medidas de calidad compartidas; revisiones y comprobaciones aportan evidencia de que se cumplen. La herramienta no define por sí sola esos requisitos y un criterio de aceptación particular no sustituye necesariamente todas las condiciones comunes del incremento.

- Error A: Una evaluación tardía puede descubrir problemas, pero no integra prevención y comprobación en el flujo de trabajo.
- Error B: Actividad o cierre de tareas no demuestran cumplimiento de los requisitos de calidad del producto.
- Error C: CI ejecuta las comprobaciones configuradas; no establece por sí misma qué calidad necesita el producto o cuándo está terminado.

- [Schwaber/Sutherland: Scrum Guide](https://scrumguides.org/scrum-guide.html) · Commitment: Definition of Done; Sprint Retrospective · versión: Noviembre2020, versión HTML comprobada03-11-2026. DoD como estado de calidad compartido; no equivale a cada criterio de aceptación particular. · comprobado: 2026-11-03
- [ASQ: Quality Assurance vs Quality Control](https://asq.org/quality-resources/quality-assurance-vs-control) · Differences between QA and QC; Quality Assurance; Quality Control · versión: Página pública comprobada03-11-2026; distinción habitual de orientación, sin reducir QA a una única tarea o excluir toda relación entre proceso y producto. · comprobado: 2026-11-03
- [NASA: Management and Technical Measurements](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695475/SWE-090%2B-%2BManagement%2Band%2BTechnical%2BMeasurements) · §3: Selecting and Standardizing Measures; Reporting and Analysis; definición, objetivos y baselines · versión: Handbook VerD, referencia histórica a NPR7150.2D; texto público comprobado03-11-2026. Se usa como guía conceptual, sin imponer requisitos NASA a este proyecto. · comprobado: 2026-11-03

Partida: `5f640ffb155d6febac40c888452d4792233943fc0bb504f08ef35df5c201fc78` · propuesta: `45dc8f5b87106f28d7f34abcdedea7f8d8926abdb5492a8ad7470cf49d099476`

## AI-GSI-B3-T13-014

Decisión: pending_review · acción: revise.

Motivo: Conservar ciclo de evaluación y mejora y clave A; distinguir medidas orientadas a necesidades de una nota o resultado decidido de antemano.

### Antes

¿Qué secuencia es coherente para evaluar calidad?

- A. Definir requisitos, seleccionar medidas, evaluar y mejorar **(correcta)**
- B. Elegir la nota final antes de probar
- C. Medir al azar y decidir después qué significaban los datos
- D. Aceptar antes de establecer criterios

Explicación: Las medidas deben responder a requisitos y objetivos definidos.

### Propuesta

¿Qué secuencia es coherente para evaluar y mejorar la calidad del software?

- A. Definir requisitos, seleccionar medidas pertinentes, evaluar resultados y orientar mejoras. **(correcta)**
- B. Medir primero lo disponible y fijar después objetivos que coincidan con los resultados.
- C. Declarar aceptable el producto y elegir después qué condiciones comprobar para justificarlo.
- D. Elegir una herramienta y utilizar su nota como criterio aunque no responda a los requisitos.

Explicación: Las necesidades y requisitos orientan la selección de medidas y criterios. La evaluación interpreta los resultados frente a ese marco y permite decidir mejoras y comprobar sus efectos. No basta obtener datos: deben aportar información pertinente, con definiciones y contexto que permitan una interpretación válida.

- Error B: Elegir objetivos después de ver los datos permite acomodarlos al resultado y pierde la referencia previa para evaluar.
- Error C: La aceptación necesita criterios y evidencia; declarar el resultado primero invierte la relación entre evaluación y decisión.
- Error D: Una herramienta puede ayudar a medir, pero su puntuación no sustituye requisitos ni demuestra que cubra las propiedades necesarias.

- [ISO: Measurement process](https://www.iso.org/standard/71197.html) · Abstract: información necesaria, medidas, análisis, validez y mejora · versión: ISO/IEC/IEEE15939:2017; ficha publicada, confirmada2022 y en revisión con DIS anunciado. Comprobada03-11-2026; no se presenta el borrador como norma final. · comprobado: 2026-11-03
- [NASA: Management and Technical Measurements](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695475/SWE-090%2B-%2BManagement%2Band%2BTechnical%2BMeasurements) · §3: Selecting and Standardizing Measures; Reporting and Analysis; definición, objetivos y baselines · versión: Handbook VerD, referencia histórica a NPR7150.2D; texto público comprobado03-11-2026. Se usa como guía conceptual, sin imponer requisitos NASA a este proyecto. · comprobado: 2026-11-03
- [NASA: Analysis of Measurement Data](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695480/SWE-093%2B-%2BAnalysis%2Bof%2BMeasurement%2BData) · §3 Guidance; §8 Objective Evidence; ejemplos de defect density y análisis de tendencias · versión: Handbook VerD, guía comprobada03-11-2026; no se adopta cada umbral o ejemplo ilustrativo como criterio universal de calidad. · comprobado: 2026-11-03

Partida: `68e73aa421001e6e2204152af6afd77a77fb013ef9a5f00ef63d0e07d0fbb030` · propuesta: `c8f70bb42fc24450ce0943a70b9dbc01cfee726592ca4f94e764787ef61b26b3`

## AI-GSI-B3-T13-015

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación de Safety en 2023 y clave B; usar nombres próximos de modelos de calidad y distinguir edición y nivel sin confundir Safety con Security.

### Antes

¿Cuál es una característica expresamente incluida en el modelo 2023 del tema?

- A. Tamaño del equipo
- B. Safety **(correcta)**
- C. Precio de adquisición
- D. Popularidad del framework

Explicación: Safety figura junto a funcionalidad, desempeño, compatibilidad y otras características del modelo.

### Propuesta

¿Cuál de estos nombres figura como característica principal del modelo de calidad de producto de ISO/IEC 25010:2023?

- A. Usability
- B. Safety **(correcta)**
- C. Portability
- D. Accessibility

Explicación: Safety figura como característica principal añadida al modelo de producto de ISO/IEC 25010:2023. El prólogo identifica además los cambios de Usability a Interaction capability y de Portability a Flexibility; Accessibility se divide en Inclusivity y User assistance. Se pregunta por el nombre y nivel de la edición 2023, no por la importancia de esas propiedades ni por un modelo histórico.

- Error A: Usability era el nombre de la característica en 2011; en 2023 se reemplaza por Interaction capability, según el prólogo.
- Error C: Portability era el nombre anterior; la característica pasa a denominarse Flexibility en 2023.
- Error D: Accessibility no es una característica principal de 2023: el prólogo describe su división en Inclusivity y User assistance.

- [ISO: Product quality model](https://www.iso.org/standard/78176.html) · Abstract; General information: nueve características y uso para especificación, medidas y evaluación · versión: ISO/IEC25010:2023, edición2, noviembre2023. Ficha pública comprobada03-11-2026; no se afirma acceso al texto íntegro de pago. · comprobado: 2026-11-03
- [ISO: Quality models, edición anterior](https://www.iso.org/standard/35733.html) · Abstract: ocho características de producto y cinco de calidad en uso; estado Withdrawn · versión: ISO/IEC25010:2011, edición1 retirada; ficha comprobada03-11-2026 como contraste histórico, no norma vigente. · comprobado: 2026-11-03
- [ISO/IEC25010:2023: muestra pública](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf) · Foreword p.iv (PDF4): Safety añadido, cambios de nombres; Introduction pp.vi–vii; Scope p.1 (PDF9) · versión: Texto primario ISO/IEC2023 en muestra pública del distribuidor iTeh,11 páginas. Comprobada y páginas pertinentes inspeccionadas03-11-2026; no acceso íntegro o eliminación de marca de agua. · comprobado: 2026-11-03

Partida: `f88348a1b3f9c6730a616df552edc98821db9cc40dfbf70008c0c329f97d449b` · propuesta: `f9c8808c64112fe7d65f4fd650ed7bf3302e730a2e888edbe476f3d6951a45d2`

## AI-GSI-B3-T13-016

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave B; precisar contexto y comparabilidad sin exigir una unidad física o periodo operativo a toda medida.

### Antes

¿Qué necesita una métrica para interpretarse correctamente?

- A. Un objetivo fijado después de conocer el resultado
- B. Definición, unidad, población, periodo y objetivo **(correcta)**
- C. Solo un valor sin unidad
- D. Una escala distinta en cada medición

Explicación: Sin contexto las comparaciones y decisiones pueden ser engañosas.

### Propuesta

¿Qué necesita una métrica para interpretarse correctamente?

- A. Un objetivo fijado después de conocer el resultado
- B. Definición, unidad, población, periodo y objetivo **(correcta)**
- C. Solo un valor sin unidad
- D. Una escala distinta en cada medición

Explicación: Una medida necesita una definición estable, su unidad o escala, el alcance o población, la referencia temporal o versión pertinente y el objetivo de la evaluación. La unidad puede ser adimensional y una medida estática puede referirse a una versión en lugar de a un intervalo de operación. Ese contexto permite interpretar el valor y comparar resultados de forma defendible.

- Error A: Ajustar el objetivo después de conocer el resultado puede sesgar la evaluación; conviene establecer antes qué información se necesita y cómo se juzgará.
- Error C: Un número aislado no permite saber qué se contó, sobre qué alcance o escala, ni qué significa para el objetivo.
- Error D: Cambiar de escala sin una conversión definida rompe la comparabilidad de las mediciones; la definición debe mantenerse o documentar el cambio.

- [NASA: Management and Technical Measurements](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695475/SWE-090%2B-%2BManagement%2Band%2BTechnical%2BMeasurements) · §3: Selecting and Standardizing Measures; Reporting and Analysis; definición, objetivos y baselines · versión: Handbook VerD, referencia histórica a NPR7150.2D; texto público comprobado03-11-2026. Se usa como guía conceptual, sin imponer requisitos NASA a este proyecto. · comprobado: 2026-11-03
- [NASA: Analysis of Measurement Data](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695480/SWE-093%2B-%2BAnalysis%2Bof%2BMeasurement%2BData) · §3 Guidance; §8 Objective Evidence; ejemplos de defect density y análisis de tendencias · versión: Handbook VerD, guía comprobada03-11-2026; no se adopta cada umbral o ejemplo ilustrativo como criterio universal de calidad. · comprobado: 2026-11-03
- [ISO: Measurement process](https://www.iso.org/standard/71197.html) · Abstract: información necesaria, medidas, análisis, validez y mejora · versión: ISO/IEC/IEEE15939:2017; ficha publicada, confirmada2022 y en revisión con DIS anunciado. Comprobada03-11-2026; no se presenta el borrador como norma final. · comprobado: 2026-11-03

Partida: `aeb89935af19969f97c5db598dc3f077eb6d08191b78617cbe7632b68f20a6cb` · propuesta: `eac384d3bf098b7c00081e1902fc6ddde62e363b41870aabe7b03348386efe9f`

## AI-GSI-B3-T13-017

Decisión: pending_review · acción: revise.

Motivo: Conservar límites de comparar productividad por líneas y clave B; microcaso de proyectos con lenguajes distintos, sin declarar inútil toda medida de tamaño.

### Antes

Comparar productividad de proyectos solo por líneas de código puede…

- A. Garantizar comparación justa entre lenguajes
- B. Inducir conclusiones erróneas por falta de contexto **(correcta)**
- C. Medir automáticamente valor funcional
- D. Sustituir evaluación de calidad

Explicación: Tamaño de código no representa por sí solo productividad ni valor.

### Propuesta

Se comparan dos proyectos con lenguajes y alcance distintos y se propone ordenar su productividad solo por líneas de código entregadas. ¿Qué valoración es correcta?

- A. Concluir que el proyecto con más líneas genera más valor funcional por persona.
- B. Revisar lenguaje, alcance y resultados antes de inferir productividad a partir del tamaño. **(correcta)**
- C. Considerar equivalentes los requisitos porque ambos proyectos publican líneas de código.
- D. Sustituir la evaluación de calidad por la comparación de volumen de código entregado.

Explicación: Las líneas describen tamaño según un criterio de recuento, no productividad funcional o valor por sí solas. Lenguajes, reutilización, generación y alcance pueden producir volúmenes distintos para resultados comparables. La productividad tiene varias dimensiones: el tamaño puede ser información útil si se define y contextualiza, pero no justifica por sí solo la clasificación propuesta.

- Error A: Más líneas pueden reflejar diferencias de lenguaje, diseño o alcance, sin demostrar más valor ni rendimiento por persona.
- Error C: Una misma unidad de recuento no acredita requisitos o resultados equivalentes entre proyectos.
- Error D: El volumen no evalúa por sí mismo corrección, mantenibilidad o adecuación a necesidades; no sustituye la evaluación de calidad.

- [Autores SPACE: Developer Productivity](https://www.microsoft.com/en-us/research/publication/the-space-of-developer-productivity-theres-more-to-it-than-you-think/) · Resumen de los autores: productividad multidimensional, no una sola métrica · versión: Forsgren et al., ACM Queue19(1), febrero2021. Registro primario de los autores en Microsoft Research leído03-11-2026; página ACM devolvió403 y no se atribuye lectura íntegra del artículo. · comprobado: 2026-11-03
- [NASA: Management and Technical Measurements](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695475/SWE-090%2B-%2BManagement%2Band%2BTechnical%2BMeasurements) · §3: Selecting and Standardizing Measures; Reporting and Analysis; definición, objetivos y baselines · versión: Handbook VerD, referencia histórica a NPR7150.2D; texto público comprobado03-11-2026. Se usa como guía conceptual, sin imponer requisitos NASA a este proyecto. · comprobado: 2026-11-03

Partida: `944698b5b67d7eaefc8c3048dec3ef3dcdf86c4abf422584456a0282a1456524` · propuesta: `a0ac8ec870ae75746614574a9209d3bb669a527317dac8eb84786825d1604ef1`

## AI-GSI-B3-T13-019

Decisión: pending_review · acción: revise.

Motivo: Conservar causa raíz y mejora y clave A; caso de defectos repetidos que exige seguimiento de acciones y evidencia, no solo una retrospectiva nominal.

### Antes

¿Qué actividad ayuda a cerrar el ciclo de mejora tras defectos repetidos?

- A. Análisis de causa raíz y acciones de mejora **(correcta)**
- B. Buscar solo culpables
- C. Repetir el mismo proceso sin cambios
- D. Eliminar métricas desfavorables

Explicación: RCA y retrospectivas buscan reducir recurrencia mediante cambios verificables.

### Propuesta

Un defecto reaparece tras varias reparaciones locales. ¿Qué actividad ayuda a cerrar el ciclo de mejora?

- A. Analizar causas y aplicar acciones correctivas, comprobando después si disminuye la recurrencia. **(correcta)**
- B. Atribuir cada incidente al último autor del cambio y cerrar el análisis al identificarlo.
- C. Repetir la reparación local sin revisar las condiciones que hacen reaparecer el defecto.
- D. Dejar de registrar los defectos repetidos para que no distorsionen el indicador del equipo.

Explicación: Tras reparar el efecto inmediato conviene investigar por qué el defecto reaparece, actuar sobre causas respaldadas por evidencia y verificar la eficacia de las acciones. El análisis puede revelar causas de producto o proceso; no equivale a buscar culpables ni garantiza eliminar toda recurrencia. Los datos deben permitir comprobar si el cambio funciona.

- Error B: Identificar quién modificó algo no explica por sí solo las condiciones que produjeron y permitieron repetir el defecto.
- Error C: La misma corrección local puede resolver un incidente sin reducir la causa de su recurrencia.
- Error D: Suprimir registros cambia la visibilidad del problema, no su frecuencia real, y dificulta evaluar las mejoras.

- [NASA: Software Non-Conformances](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695535/SWE-201%2B-%2BSoftware%2BNon-Conformances) · §3.3 Tracking and Analysis: Root Cause Identification; Systematic Monitoring; Verification and Retesting · versión: Handbook VerD, comprobado03-11-2026. Se usa el proceso y no se trasladan como hechos los casos históricos ilustrativos de la página. · comprobado: 2026-11-03
- [NASA: Analysis of Measurement Data](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695480/SWE-093%2B-%2BAnalysis%2Bof%2BMeasurement%2BData) · §3 Guidance; §8 Objective Evidence; ejemplos de defect density y análisis de tendencias · versión: Handbook VerD, guía comprobada03-11-2026; no se adopta cada umbral o ejemplo ilustrativo como criterio universal de calidad. · comprobado: 2026-11-03
- [Schwaber/Sutherland: Scrum Guide](https://scrumguides.org/scrum-guide.html) · Commitment: Definition of Done; Sprint Retrospective · versión: Noviembre2020, versión HTML comprobada03-11-2026. DoD como estado de calidad compartido; no equivale a cada criterio de aceptación particular. · comprobado: 2026-11-03

Partida: `afb891f88c0f7d643829c84592448c7e7e61d4c693b404c92e1653103e69a750` · propuesta: `f359ada879591b7c8af110b23d2acb3cd56f1231b486cdadeb36bdf4dc1aa2bf`

## AI-GSI-B3-T13-020

Decisión: pending_review · acción: revise.

Motivo: Conservar requisitos medibles y aceptación y clave B; caso de petición ambigua que requiere concreción, sin reducir toda calidad a rendimiento.

### Antes

¿Cómo debe concretarse calidad en un supuesto?

- A. Elegir un logo de certificación
- B. Requisitos no funcionales medibles y criterios de aceptación **(correcta)**
- C. Enumerar herramientas sin objetivos
- D. Solo afirmar que será de alta calidad

Explicación: Disponibilidad, errores, seguridad y mantenibilidad deben conectarse con medidas y aceptación.

### Propuesta

Para aceptar un servicio se pide que sea «rápido y fiable». ¿Cómo debe concretarse esa expectativa de calidad?

- A. Adoptar una herramienta de pruebas y considerar que su uso define la calidad requerida.
- B. Precisar requisitos de calidad medibles y criterios de aceptación bajo condiciones definidas. **(correcta)**
- C. Recoger tiempos y errores sin fijar población, carga ni condiciones para juzgar los resultados.
- D. Solicitar un sello del proveedor como sustituto de comprobar los requisitos del servicio.

Explicación: La expresión debe convertirse en requisitos verificables y criterios de aceptación acordados. Por ejemplo, una latencia requiere definir operación, población o carga y cómo se juzga la distribución; disponibilidad y errores necesitan alcance y referencia temporal. Las medidas se eligen según las necesidades. La calidad incluye también adecuación funcional y otras propiedades pertinentes, no solo rendimiento o requisitos llamados no funcionales.

- Error A: La herramienta ejecuta técnicas o comprobaciones, pero no decide qué comportamiento necesita el servicio ni qué resultados son aceptables.
- Error C: Sin condiciones y criterio previo los datos no permiten una decisión de aceptación reproducible; medir es necesario pero no suficiente.
- Error D: Una declaración o sello puede aportar información dentro de su alcance, pero no reemplaza la evidencia de los requisitos concretos del servicio.

- [NASA: Software Requirements](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695421/SWE-050%2B-%2BSoftware%2BRequirements) · §1.1 Notes y §3: requisitos claros, cuantitativos/medibles, verificables y trazables · versión: Handbook VerD; texto comprobado03-11-2026. Requisitos NASA como orientación conceptual, no obligación normativa del proyecto. · comprobado: 2026-11-03
- [ISO: Product quality model](https://www.iso.org/standard/78176.html) · Abstract; General information: nueve características y uso para especificación, medidas y evaluación · versión: ISO/IEC25010:2023, edición2, noviembre2023. Ficha pública comprobada03-11-2026; no se afirma acceso al texto íntegro de pago. · comprobado: 2026-11-03
- [ISO: Measurement process](https://www.iso.org/standard/71197.html) · Abstract: información necesaria, medidas, análisis, validez y mejora · versión: ISO/IEC/IEEE15939:2017; ficha publicada, confirmada2022 y en revisión con DIS anunciado. Comprobada03-11-2026; no se presenta el borrador como norma final. · comprobado: 2026-11-03

Partida: `59f9e29799f3ec3d685a44083ebe1858af336fd501589127dc02dea83eff24e4` · propuesta: `536c01ef2837f1b2fbffa700dbb95b652ff79b08672336eb2cde77f175a98fe7`
