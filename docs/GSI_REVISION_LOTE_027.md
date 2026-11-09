# GSI-EDITORIAL-027 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `f883f0be1392f1a43cb42c1e569a3c22ddc647b9950e1111d118b4a84804c010`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B2-T03-014

Decisión: pending_review · acción: revise.

Motivo: Conservar modelo dirigido por eventos y clave D; distinguir señales, sondeo y compilación sin inferir paralelismo.

### Antes

Una interfaz ejecuta manejadores al recibir clics y respuestas asíncronas. ¿Qué modelo utiliza?

- A. Programación lógica de hechos exclusivamente
- B. Ejecución exclusivamente secuencial sin eventos
- C. Compilación anticipada como paradigma
- D. Dirigido por eventos **(correcta)**

Explicación: Callbacks y listeners responden a eventos; el modelo no determina por sí solo cómo se compila.

### Propuesta

Una interfaz ejecuta manejadores al recibir clics y respuestas asíncronas. ¿Qué modelo utiliza?

- A. Dirigido por una secuencia fija ajena a las señales recibidas.
- B. Dirigido por un sondeo continuo en lugar de manejadores registrados.
- C. Determinado por compilar antes de arrancar la aplicación.
- D. Dirigido por eventos que activan los manejadores registrados. **(correcta)**

Explicación: El flujo descrito está dirigido por eventos: se registran manejadores y el sistema los invoca al recibir las señales correspondientes. Clics y notificaciones de finalización pueden activar código distinto. Eso no determina si el programa fue compilado antes, interpretado o ejecutado con JIT, ni demuestra ejecución paralela de los manejadores. Se distingue la respuesta a señales del sondeo explícito del estado en un bucle.

- Error A: Una secuencia fija independiente de señales no explica la activación de distintos manejadores por clics o finalizaciones.
- Error B: El sondeo comprueba repetidamente un estado. El caso describe registro y recepción de señales, no ese mecanismo de comprobación.
- Error C: Compilar antes es una decisión de ejecución, compatible con distintos modelos de control. No identifica el modelo de respuesta descrito.

- [MDN: Introduction to events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events) · Introducción, An example: handling a click event y Using addEventListener(): registro y ejecución de manejadores · versión: Solo modelo de respuesta a eventos; no se deduce paralelismo ni técnica de compilación · comprobado: 2026-10-27

Partida: `7b7b7463850f29bd431be386a55e96eb85659c0ca6caef84ba21f650fafc6cc7` · propuesta: `803bfb35ebd3ca09cff42cfa63e634c3052f063ca68bbd83e0a869c0d81ab733`

## AI-GSI-B2-T03-018

Decisión: pending_review · acción: revise.

Motivo: Conservar ownership/borrowing y clave D; distractores de gestión de memoria próximos y límites explícitos de código seguro/unsafe.

### Antes

¿Qué mecanismo destaca en Rust para seguridad de memoria sin GC general?

- A. Exclusivamente listas de revocación
- B. Tipado dinámico obligatorio
- C. Ausencia de comprobaciones en compilación
- D. Ownership y borrowing **(correcta)**

Explicación: El modelo de propiedad y préstamos impone gran parte de las restricciones de seguridad en compilación.

### Propuesta

¿Qué mecanismo caracteriza la seguridad de memoria de Rust sin depender de un recolector trazador general?

- A. Gestionar cada valor mediante recuento de referencias en ejecución.
- B. Recorrer el heap para encontrar y liberar objetos no alcanzables.
- C. Dejar la validez de referencias a convenciones no comprobadas.
- D. Aplicar propiedad y préstamos con comprobaciones estáticas. **(correcta)**

Explicación: Rust utiliza reglas de ownership y borrowing para controlar propiedad, validez y usos de referencias, comprobadas en gran parte al compilar. No depende para ello de un recolector trazador general. Las garantías del código seguro requieren respetar también los contratos del código unsafe utilizado; unsafe no desactiva todas las comprobaciones. El modelo no demuestra corrección de toda la lógica ni convierte un mecanismo opcional de gestión en obligación para cada valor.

- Error A: El recuento de referencias puede ser útil para compartir propiedad, pero no define el mecanismo general de propiedad y préstamos del lenguaje.
- Error B: Describe recolección trazadora durante ejecución. No es la base característica que se pide para gestionar memoria en Rust.
- Error C: Las convenciones sin verificación no explican el control estático de propiedad y referencias. El compilador impone restricciones concretas.

- [The Rust Programming Language: What Is Ownership?](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html) · Introducción y Ownership Rules: propiedad y reglas verificadas por el compilador · versión: Rust Book, capítulo 4; no se adopta una promesa universal de rendimiento o ausencia de todo error · comprobado: 2026-10-27
- [The Rust Programming Language: References and Borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html) · Referencias, restricciones de préstamos y Dangling References: validez y control de alias · versión: Rust Book, capítulo 4; mecanismo de referencias seguras, sin afirmar que cualquier puntero crudo esté comprobado igual · comprobado: 2026-10-27
- [The Rust Programming Language: Unsafe Rust](https://doc.rust-lang.org/book/ch20-01-unsafe-rust.html) · Introducción y Performing Unsafe Superpowers: obligaciones de operaciones unsafe y comprobaciones que siguen activas · versión: Rust Book, capítulo 20; unsafe no desactiva todo el borrow checker y sus contratos siguen siendo responsabilidad del programador · comprobado: 2026-10-27
- [The Rust Programming Language: Rc<T>, the Reference-Counted Smart Pointer](https://doc.rust-lang.org/book/ch15-04-rc.html) · Introducción: propiedad compartida habilitada explícitamente y recuento de referencias · versión: Rust Book, capítulo 15; ejemplo Rc de un solo hilo, sin generalizarlo a cualquier valor o al mecanismo de concurrencia de Arc · comprobado: 2026-10-28

Partida: `5e5a333ecb8635af4d5a870aa1594105d4ea59fef0826071acd448d529147699` · propuesta: `121c74946d85fe6cc2d8bd0323839032e9af7d086d7d916daa65db44c81ffd3e`

## AI-GSI-B2-T03-019

Decisión: pending_review · acción: revise.

Motivo: Conservar asociación TypeScript/tipos/JavaScript y clave B; comparar límites reales del sistema de tipos, transformación y runtime.

### Antes

¿Qué asociación de lenguaje y rasgo es correcta?

- A. Python: ausencia de tipos
- B. TypeScript: tipos estáticos graduales y transpilación a JavaScript **(correcta)**
- C. SQL: lenguaje exclusivamente imperativo de bajo nivel
- D. Go: imposibilidad de concurrencia

Explicación: TypeScript añade un sistema de tipos sobre JavaScript; las otras asociaciones contradicen las características del tema.

### Propuesta

¿Qué descripción corresponde al papel habitual de TypeScript respecto de JavaScript?

- A. Un runtime propio que realiza íntegramente el tipado dinámico de JavaScript.
- B. Comprobación estática configurable y transformación del código a JavaScript. **(correcta)**
- C. Validación de datos externos forzada por las anotaciones en cada ejecución.
- D. Eliminación de errores lógicos si el compilador acepta el programa completo.

Explicación: TypeScript incorpora comprobación estática sobre JavaScript y herramientas que transforman su sintaxis específica para ejecutarla como JavaScript. La exigencia de las comprobaciones es configurable y admite migración gradual. Las anotaciones de tipo se eliminan y no validan por sí mismas datos externos en ejecución. Superar la comprobación no garantiza ausencia de errores lógicos; deben mantenerse validaciones y pruebas apropiadas.

- Error A: TypeScript no se define como un motor de ejecución alternativo que sustituya el comportamiento dinámico de JavaScript. Su aportación principal aquí es estática.
- Error C: Un tipo anotado no comprueba automáticamente una respuesta de red o un archivo. Esos datos necesitan validación en ejecución cuando proceda.
- Error D: Un programa puede ser aceptado por el sistema de tipos y seguir calculando un resultado incorrecto. Tipado y corrección lógica son objetivos distintos.

- [TypeScript Handbook: The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html) · Static type-checking; tsc, the TypeScript compiler; Erased Types; Strictness · versión: Capítulo actualizado 27-10-2026 y releído 28-10-2026; sin fijar versión de compilador por la navegación. Anotaciones no son validadores de datos en ejecución · comprobado: 2026-10-28

Partida: `772371f2853f490bd37d8909ebf6eff6630049dc7533ae41467b95ffcf5592be` · propuesta: `aaa77e8f4c2a985418bda03803c4774060790f02b8d087f97514c6accf1b45c7`

## AI-GSI-B2-T04-001

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente microcaso y cuatro alternativas ya pertinentes y clave A; completar significado, comparabilidad y responsabilidad del indicador.

### Antes

Dos cuadros muestran valores distintos del mismo indicador por usar definiciones diferentes. ¿Qué problema debe resolverse primero?

- A. Gobierno y definición coherente de los datos y métricas **(correcta)**
- B. Promediar ambas cifras sin analizar su significado
- C. Actualizar el dashboard sin armonizar definiciones
- D. Cambiar únicamente la herramienta de visualización

Explicación: BI necesita integración, calidad y significado coherente; la visualización no corrige esas discrepancias.

### Propuesta

Dos cuadros muestran valores distintos del mismo indicador por usar definiciones diferentes. ¿Qué problema debe resolverse primero?

- A. Gobierno y definición coherente de los datos y métricas **(correcta)**
- B. Promediar ambas cifras sin analizar su significado
- C. Actualizar el dashboard sin armonizar definiciones
- D. Cambiar únicamente la herramienta de visualización

Explicación: Aplicado al caso, primero se acuerdan significado, fórmula y alcance del indicador, con sus responsables y metadatos. Solo después puede verificarse si ambas cifras son comparables o corresponden a medidas distintas. Un glosario y reglas comunes ayudan a distinguir nombres iguales de conceptos iguales. Cambiar gráficos o actualizar datos no resuelve una diferencia semántica, y promediar valores no comparables oculta el problema.

- Error B: Promediar no reconcilia definiciones distintas. El resultado puede mezclar magnitudes que no representan el mismo indicador.
- Error C: Refrescar puede incorporar datos más recientes, pero conserva la discrepancia si siguen aplicándose reglas de cálculo diferentes.
- Error D: La herramienta puede mostrar mejor la información, pero no decide por sí sola qué significa la métrica o qué población incluye.

- [Microsoft Purview: Understand business glossary features in the classic governance portal](https://learn.microsoft.com/en-us/purview/legacy/concept-business-glossary) · Párrafos iniciales: términos, definiciones y contextos; Glossary vs classification vs sensitivity labels · versión: Documentación del portal clásico; solo vocabulario y significado, sin recomendar su interfaz o inferir que nombres iguales prueben equivalencia de métricas · comprobado: 2026-10-27
- [GOV.UK: The Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) · Introduction; Data quality dimensions, Consistency: adecuación a finalidad, metadatos y coherencia · versión: Solo principios de calidad y contexto, sin trasladar obligaciones de gestión británicas al organismo español · comprobado: 2026-10-27

Partida: `ccb2df7a69deee687a880c99416f82198ba946c47c11fa0e0d0c523f141e9b07` · propuesta: `44719ffd9cb8cf7f0df3e9196a319f2b64892389aefc2df8d8927285752d3101`

## AI-GSI-B2-T04-002

Decisión: pending_review · acción: revise.

Motivo: Conservar DSS y clave C; pedir denominación general para no negar que EIS pueda ser un DSS orientado a datos.

### Antes

¿Qué sistema apoya decisiones semiestructuradas mediante datos, modelos y análisis?

- A. EIS exclusivamente orientado a resúmenes ejecutivos
- B. Área de staging
- C. DSS **(correcta)**
- D. Sistema de registro OLTP por definición

Explicación: DSS proporciona soporte analítico a decisiones; EIS está orientado a información agregada para dirección.

### Propuesta

¿Qué denominación general se aplica al soporte interactivo de decisiones semiestructuradas mediante datos, modelos y análisis?

- A. EIS: información orientada a la dirección ejecutiva.
- B. ETL: extracción, transformación y carga de datos.
- C. DSS: sistema interactivo de apoyo a decisiones. **(correcta)**
- D. OLTP: registro de transacciones operativas.

Explicación: DSS es la denominación general del soporte interactivo de decisiones mediante datos, modelos y análisis, especialmente útil cuando parte del problema requiere juicio. Apoya al decisor y no lo sustituye necesariamente. EIS se centra en información ejecutiva y puede formar parte de la familia DSS; las etiquetas no son compartimentos incompatibles. El enunciado pregunta por la categoría general, no por una orientación ejecutiva específica.

- Error A: EIS delimita un foco ejecutivo dentro del soporte a dirección. No es la denominación general de la familia solicitada.
- Error B: ETL prepara e integra datos que pueden alimentar análisis. No designa el sistema interactivo de apoyo a decisiones.
- Error D: OLTP registra y procesa operaciones del negocio. Esas operaciones pueden aportar datos, pero no definen el soporte analítico del caso.

- [D. J. Power: Decision Support Systems Glossary](https://www.dssresources.com/dssbook/glossary.pdf) · Decision Support Systems (DSS), pp. 256–257; Executive Information Systems, p. 258: soporte interactivo y juicio del decisor · versión: Actualización indicada 16-12-2000; taxonomía clásica, sin adoptar catálogos de herramientas, navegadores o arquitectura comercial de esa época · comprobado: 2026-10-27
- [D. J. Power: A Brief History of Decision Support Systems](https://dssresources.com/history/dsshistory.html) · III, origen de EIS e indicadores para gestores; IV.2 Data-driven DSS: EIS como ejemplo de DSS orientado a datos · versión: Versión 4.1; clasificación y relación de familias, sin usar recuentos históricos o promesas de productos como capacidades actuales · comprobado: 2026-10-27

Partida: `d232f36ca4237ab8e27514573a8a2a1705295cdd208f8ea99dd181c97ba3afb6` · propuesta: `5391abc12bc4c691172bafc74298cb5fe5aeaf4ffcc5f8a30d1dedf4fd0b0e57`

## AI-GSI-B2-T04-003

Decisión: pending_review · acción: revise.

Motivo: Conservar caso de información para alta dirección y clave A; alternativas de componentes próximos sin presentar EIS y DSS como familias excluyentes.

### Antes

La alta dirección necesita tendencias, excepciones e indicadores agregados. ¿Qué sistema encaja especialmente?

- A. EIS **(correcta)**
- B. Área de carga temporal sin explotación
- C. Registro transaccional de detalle exclusivamente
- D. Cola de impresión

Explicación: EIS se orienta a información ejecutiva agregada; staging y registro operativo tienen otras finalidades.

### Propuesta

La alta dirección necesita consultar tendencias, excepciones e indicadores agregados. En la taxonomía clásica, ¿qué sistema se orienta especialmente a esa finalidad?

- A. EIS: información orientada a la dirección. **(correcta)**
- B. TPS: registro de operaciones de negocio.
- C. ETL: preparación de datos para su carga.
- D. ODS: integración de datos operativos recientes.

Explicación: En la taxonomía clásica, EIS identifica sistemas orientados a información ejecutiva, como tendencias e indicadores para la dirección. Puede usar datos de un ODS o DW y pertenecer a los DSS orientados a datos. El foco del caso es la información que consulta la dirección, no la captura o preparación que la hace posible. La etiqueta no impide funciones adicionales de análisis.

- Error B: Registrar operaciones es una finalidad transaccional. Puede generar datos del informe, pero no identifica la capa ejecutiva solicitada.
- Error C: ETL obtiene y prepara datos para otros componentes. No es la finalidad de consulta ejecutiva descrita.
- Error D: Un ODS integra información operacional reciente. Puede ser una fuente, pero su función no es definir el sistema ejecutivo.

- [D. J. Power: A Brief History of Decision Support Systems](https://dssresources.com/history/dsshistory.html) · III, origen de EIS e indicadores para gestores; IV.2 Data-driven DSS: EIS como ejemplo de DSS orientado a datos · versión: Versión 4.1; clasificación y relación de familias, sin usar recuentos históricos o promesas de productos como capacidades actuales · comprobado: 2026-10-27

Partida: `98629a0adffd61b3eec928df3efe7a83a40dbd5bba7b39852e77a394cd5fc229` · propuesta: `fb852bb1def6e2b77fcd9a0a553a9e24c5b8217a79eb7234e0711c9f12f60e4c`

## AI-GSI-B2-T04-004

Decisión: pending_review · acción: revise.

Motivo: Conservar vínculo estratégico del CMI y clave B; comparar métricas aisladas, criterio financiero y presentación sin sustituir el marco por visualización.

### Antes

¿Qué distingue al Cuadro de Mando Integral de una colección arbitraria de métricas?

- A. Exige mostrar únicamente cifras financieras
- B. Vincula indicadores, objetivos y estrategia desde varias perspectivas **(correcta)**
- C. Prescinde de objetivos para evitar sesgos
- D. Es necesariamente una base de datos transaccional

Explicación: El CMI relaciona perspectivas y objetivos estratégicos; no es una simple acumulación de cifras.

### Propuesta

¿Qué distingue al Cuadro de Mando Integral de una colección arbitraria de métricas?

- A. Acumular indicadores operativos sin relacionarlos con objetivos estratégicos.
- B. Relacionar objetivos e indicadores con la estrategia desde varias perspectivas. **(correcta)**
- C. Ordenar áreas por presupuesto ejecutado como único criterio de evaluación.
- D. Cambiar gráficos del informe sin definir sus relaciones con la estrategia.

Explicación: El Cuadro de Mando Integral vincula estrategia, objetivos, medidas, metas e iniciativas y equilibra perspectivas del desempeño. La selección de indicadores se justifica por lo que la organización busca lograr, con adaptación al contexto. No es una colección de cifras ni se limita al gasto o al resultado financiero. Un mapa de relaciones estratégicas ayuda a razonar y comunicar; por sí solo no demuestra causalidad empírica.

- Error A: Acumular medidas sin relación con objetivos no explica su contribución a la estrategia. El vínculo es parte central del CMI.
- Error C: Un criterio financiero aislado deja fuera otras perspectivas relevantes. Ejecutar presupuesto no prueba por sí solo cumplir objetivos estratégicos.
- Error D: La presentación visual puede ayudar, pero cambiar gráficos no establece objetivos, metas o vínculos estratégicos.

- [Balanced Scorecard Institute: Balanced Scorecard Basics](https://balancedscorecard.org/bsc-basics-overview/) · What Is a Balanced Scorecard?; What Are Balanced Scorecard Perspectives?; What Are Strategic Objectives?; What Is a Strategy Map? · versión: Descripción primaria del instituto que aplica el marco; relación estrategia/objetivos/indicadores, sin atribuir prueba empírica automática a un mapa causal · comprobado: 2026-10-27

Partida: `3bc111fcadc6d4f3add18aa05bea43d6cf3339603b8c79ddff76a037844933b6` · propuesta: `a106f8908a34d8120dfbc2d37ba76c1f978f72127909eee866bafdf3952acd78`

## AI-GSI-B2-T04-007

Decisión: pending_review · acción: revise.

Motivo: Conservar top-down y clave A; distinguir secuencia de entrega de planificación corporativa, sin caricaturizar bottom-up como islas independientes.

### Antes

¿Qué secuencia corresponde al enfoque top-down descrito?

- A. DW corporativo y después datamarts **(correcta)**
- B. Datamarts conformados y después integración progresiva
- C. Dashboards sin almacén ni definiciones
- D. Eliminar el histórico antes de integrar

Explicación: Top-down parte del almacén corporativo; bottom-up integra progresivamente datamarts conformados.

### Propuesta

En la comparación clásica con la entrega dimensional incremental por procesos, ¿qué secuencia se asocia al enfoque top-down de DW corporativo?

- A. Integrar un DW corporativo y derivar después data marts dependientes. **(correcta)**
- B. Entregar modelos por procesos con dimensiones conformadas reutilizadas.
- C. Crear data marts inconexos y tratarlos como integración corporativa.
- D. Publicar informes finales antes de armonizar datos y sus definiciones.

Explicación: En la comparación clásica, el enfoque top-down corporativo integra primero el almacén empresarial y deriva data marts para necesidades particulares. Se distingue de la entrega dimensional incremental por procesos con dimensiones conformadas. Esta última también tiene una visión corporativa desde la planificación: bottom-up de entrega no significa improvisar islas sin integración. La pregunta no prescribe cuál enfoque resulta mejor para cualquier organización.

- Error B: Describe la entrega incremental por procesos del enfoque dimensional. Puede estar planificada a escala corporativa, pero no es la secuencia corporate-first preguntada.
- Error C: La falta de conformidad no constituye integración. Tampoco representa correctamente el enfoque incremental de Kimball.
- Error D: Publicar antes de armonizar no define el enfoque top-down. Los informes no sustituyen el modelo y las reglas comunes que necesitan.

- [AWS Whitepaper: Modern Data Architecture Rationales on AWS](https://docs.aws.amazon.com/whitepapers/latest/modern-data-architecture-rationales-on-aws/modern-data-architecture-rationales-on-aws.html) · Introduction, Inmon approach y diagrama Top-down EDW approach: integración corporativa previa y data marts derivados · versión: Whitepaper latest consultado; patrón conceptual, sin adoptar listado de ventajas o inconvenientes como ley universal ni recomendar infraestructura AWS · comprobado: 2026-10-27
- [Kimball Group: Enterprise Data Warehouse Bus Architecture](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/kimball-data-warehouse-bus-architecture/) · Párrafos sobre procesos, dimensiones conformadas y matriz: perspectiva corporativa e implantación incremental · versión: Referencia a The Data Warehouse Toolkit, tercera edición, 2013; bottom-up de entrega no implica falta de planificación corporativa · comprobado: 2026-10-27

Partida: `fb8a08fda7f9af5e08a623761062efa0f3558ed595647d138fad0bd9ee1cc839` · propuesta: `b49c65db0bd8f32d397cafe4af5a5b37e0fa6df17be9b17a5c739d375eb99247`

## AI-GSI-B2-T04-010

Decisión: pending_review · acción: revise.

Motivo: Conservar función de staging y clave C; distinguir recepción/preparación, histórico, semántica y presentación, sin imponer una retención universal.

### Antes

¿Qué función cumple el área de staging?

- A. Sustitución de todo el DW histórico
- B. Definición de permisos legales por sí sola
- C. Recepción y preparación temporal de datos **(correcta)**
- D. Presentación ejecutiva definitiva de KPI

Explicación: Staging es una zona temporal de preparación, no la capa final de explotación.

### Propuesta

¿Qué función cumple el área de staging?

- A. Conservar la historia analítica definitiva para su explotación habitual.
- B. Representar los objetivos y KPI que se publican para la dirección.
- C. Recibir y preparar temporalmente datos antes de su explotación final. **(correcta)**
- D. Servir de contrato semántico de las medidas consultadas por usuarios.

Explicación: Staging es la zona de recepción y preparación de datos dentro del proceso de integración. Facilita inspección, limpieza y transformaciones antes de entregar datos a la capa de explotación correspondiente. Temporal describe su función, no un plazo universal de borrado. No equivale al almacén histórico ni al modelo semántico o cuadro ejecutivo; esas capas pueden depender de su trabajo sin confundirse con él.

- Error A: El histórico de explotación conserva datos para análisis. La preparación intermedia no sustituye esa finalidad.
- Error B: Los objetivos y KPI pertenecen al consumo y gobierno del rendimiento. No describen la recepción técnica de datos.
- Error D: Un contrato semántico define cómo interpretar medidas. Puede usar datos preparados, pero es una responsabilidad distinta de staging.

- [IBM: What is ETL (Extract, Transform, Load)?](https://www.ibm.com/think/topics/etl) · What is a staging area? y Transformation: zona temporal de recepción, inspección y preparación · versión: Solo función de la zona, sin imponer duración universal, tecnología, política de borrado o arquitectura de todo pipeline · comprobado: 2026-10-27
- [Kimball Group: Technical DW/BI System Architecture](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/technical-dw-bi-system-architecture/) · Backroom ETL system; Front room presentation area; Metadata: separación de preparación, explotación y metadatos · versión: Arquitectura del grupo; no se confunde staging con la capa de consulta final ni se obliga a usar un producto · comprobado: 2026-10-27

Partida: `6f89924e446a6d31b323a20dcea2fb78cced092fe4de68b2859a6eeac1a4b60d` · propuesta: `c28acb48e277c1b3e847cdf7b4d18377d1edcfd8872fb8648ec18fc554bbd5ff`

## AI-GSI-B2-T04-013

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas ya bien delimitadas y clave D; completar unidad de observación y diferencia con refresco/dimensionalidad.

### Antes

Antes de diseñar una tabla de hechos, ¿qué define su grano?

- A. La cantidad de filas permitidas por página de informe
- B. El número de dimensiones visibles simultáneamente
- C. La frecuencia con que se refresca el dashboard
- D. Qué representa exactamente cada fila **(correcta)**

Explicación: El grano fija la unidad de observación y condiciona medidas y relaciones con dimensiones.

### Propuesta

Antes de diseñar una tabla de hechos, ¿qué define su grano?

- A. La cantidad de filas permitidas por página de informe
- B. El número de dimensiones visibles simultáneamente
- C. La frecuencia con que se refresca el dashboard
- D. Qué representa exactamente cada fila **(correcta)**

Explicación: El grano declara qué representa una fila de la tabla de hechos y fija la unidad de observación a la que deben corresponder sus medidas y dimensiones. Puede ser, por ejemplo, una línea de venta o una instantánea de producto por día; no tiene que ser siempre una transacción individual. Se declara antes de seleccionar medidas y claves. No equivale a cantidad de filas visibles, número de dimensiones o frecuencia de refresco.

- Error A: La paginación del informe determina cuántas filas se muestran por pantalla o página. No define qué representa cada fila almacenada.
- Error B: Contar dimensiones no establece su nivel de detalle ni el evento o instantánea representados. La dimensionalidad no basta para declarar el grano.
- Error C: El refresco indica cuándo se actualizan datos o una vista. Una misma unidad de observación puede cargarse con frecuencias distintas.

- [Ralph Kimball: Fact Tables](https://www.kimballgroup.com/2008/11/fact-tables/) · Stay True to the Grain y Three Kinds of Fact Tables: definición de lo que representa una fila y tipos de hechos · versión: Publicado 05-11-2008; no se equipara grano con lista de claves, número de columnas o política universal de agregación de toda medida · comprobado: 2026-10-27

Partida: `129d509d64393c9da5090a14086c519bd4790432286dc6ff252b4a53662ace1f` · propuesta: `b4014677f9d713bd3cc8d382a60f3444f8aca153344800afe69b8576ba7da685`

## AI-GSI-B2-T04-015

Decisión: pending_review · acción: revise.

Motivo: Conservar normalización dimensional y clave B; alternativas de cambios de modelo próximos y ausencia de promesa universal de rendimiento.

### Antes

¿Qué distingue un esquema de copo de nieve del de estrella?

- A. Prohibición de dimensiones temporales
- B. Dimensiones más normalizadas **(correcta)**
- C. Ausencia de tabla de hechos por definición
- D. Uso exclusivo de datos no estructurados

Explicación: La estrella suele desnormalizar dimensiones; el copo de nieve las normaliza más.

### Propuesta

¿Qué distingue un esquema de copo de nieve del de estrella?

- A. Aumentar la agregación temporal de los hechos sin cambiar dimensiones.
- B. Distribuir una dimensión entre tablas normalizadas relacionadas. **(correcta)**
- C. Eliminar las claves que vinculan hechos con dimensiones de análisis.
- D. Reemplazar las dimensiones por campos de texto dentro de cada hecho.

Explicación: En un copo de nieve, la estructura de una dimensión se reparte en tablas relacionadas más normalizadas; por ejemplo, producto, subcategoría y categoría. En una estrella se suele presentar esa información dimensional más desnormalizada. La distinción es estructural: no impone cambiar el grano de los hechos ni eliminar sus relaciones. Tampoco garantiza por sí sola mejor rendimiento, que depende del motor, consultas y datos.

- Error A: Cambiar el nivel temporal de un hecho modifica agregación o grano. No define la normalización de sus dimensiones.
- Error C: El copo conserva relaciones para analizar hechos por dimensiones. Quitar las claves no es la diferencia con estrella.
- Error D: Copiar atributos de dimensión a cada hecho desnormaliza y mezcla responsabilidades. No representa la normalización dimensional del copo.

- [Microsoft: Understand star schema and the importance for Power BI](https://learn.microsoft.com/en-us/power-bi/guidance/star-schema) · Normalization vs. denormalization y Snowflake dimensions: entidad dimensional distribuida en tablas normalizadas relacionadas · versión: Actualización 30-12-2024; solo diferencia estructural, sin prometer rendimiento universal de estrella o copo · comprobado: 2026-10-27

Partida: `2edff9f9fd66880ae9ad46aa44aaccf3341311e662c22396d6e3ffa596eb395a` · propuesta: `b9274f8749c997af9ffe4ac7e38ca72f7c93250ab201ddcdbc413063289e5c14`

## AI-GSI-B2-T04-017

Decisión: pending_review · acción: revise.

Motivo: Conservar paso mensual/anual y clave B; alternativas OLAP comparables y medida monetaria sumable para evitar agregaciones ambiguas.

### Antes

Un informe pasa de ventas mensuales a un total anual. ¿Qué operación OLAP describe?

- A. Cambio de contraseña
- B. Roll-up **(correcta)**
- C. Pivot sin agregación
- D. Drill-down

Explicación: Roll-up agrega hacia un nivel superior; drill-down profundiza en detalle.

### Propuesta

Un informe suma importes de ventas mensuales para mostrar el total anual de la misma jerarquía temporal. ¿Qué operación OLAP describe?

- A. Slice.
- B. Roll-up. **(correcta)**
- C. Pivot.
- D. Drill-down.

Explicación: Roll-up agrega hacia un nivel superior de una jerarquía. En el caso se pasa de importes mensuales al total anual sumable. La operación depende de que la medida admita esa agregación; no se afirma que promedios o porcentajes se sumen del mismo modo.

- Error A: Slice selecciona un valor o subconjunto de una dimensión. No describe subir del nivel mensual al anual.
- Error C: Pivot cambia la orientación de ejes. El caso cambia el nivel temporal de agregación.
- Error D: Drill-down profundiza hacia más detalle. Es el sentido opuesto al paso descrito.

- [IBM: What is OLAP?](https://www.ibm.com/think/topics/olap) · Drill-down; Roll up; Slice and dice; Pivot: detalle, agregación, selección y orientación · versión: Solo operaciones conceptuales; no se adoptan afirmaciones comerciales de rendimiento, superioridad de MOLAP o descripción física de todo cubo · comprobado: 2026-10-27

Partida: `f6e1d0be4ff704a12656a00b4392badb48d9a7b79bcff51602ebd69d679f4d60` · propuesta: `0996cd351685b9b9dc1296792fbd6c8cd7f0ccf3a0a8d2c0dd633ffa89125c8e`

## AI-GSI-B2-T04-018

Decisión: pending_review · acción: revise.

Motivo: Conservar navegación anual/mensual y clave D; distinguir detalle, filtrado y orientación sin prometer reconstrucción de datos no disponibles.

### Antes

Un analista pasa del total anual al detalle mensual. ¿Qué operación realiza?

- A. Normalización de claves
- B. Carga ETL
- C. Roll-up
- D. Drill-down **(correcta)**

Explicación: Drill-down incrementa el detalle; roll-up realiza la agregación inversa.

### Propuesta

Un analista pasa del total anual a sus meses dentro de la misma jerarquía temporal y con la misma medida. ¿Qué operación realiza?

- A. Pivot.
- B. Slice.
- C. Roll-up.
- D. Drill-down. **(correcta)**

Explicación: Drill-down navega hacia un nivel de mayor detalle dentro de una jerarquía. El paso del total anual a sus meses mantiene el análisis temporal y desglosa su resultado. Se necesita que los datos o la estructura permitan ese detalle: desglosar no inventa valores ausentes ni implica cambiar el criterio de medida. La función MDX documentada es un ejemplo de navegación a miembros de niveles inferiores.

- Error A: Pivot reorienta ejes de una vista. No identifica el cambio de nivel anual a mensual descrito.
- Error B: Slice selecciona una porción del análisis. Filtrar un año no equivale por sí solo a mostrar sus meses.
- Error C: Roll-up agrega hacia niveles superiores. El caso realiza el recorrido hacia más detalle.

- [Microsoft Analysis Services: DrilldownLevel (MDX)](https://learn.microsoft.com/en-us/sql/mdx/drilldownlevel-mdx?view=sql-server-ver17) · Introducción y Remarks: navegación a miembros de un nivel inferior dentro de jerarquía · versión: Rama documental sql-server-ver17, actualización 07-11-2025; ejemplo de jerarquía, sin ejecutar MDX o copiar requisitos del motor a toda herramienta OLAP · comprobado: 2026-10-28

Partida: `f75b8d343e0a5e5bfd976eef6c6e9c72512bb81a0617e4bfe8ddd7158f954481` · propuesta: `d4133c0892d69e48bb25fa333db4f89bced64e1a70719f39356f4353fbd51546`

## AI-GSI-B2-T04-019

Decisión: pending_review · acción: revise.

Motivo: Conservar reorientación OLAP y clave C; explicitar filtros y niveles constantes para separar pivot de agregación, detalle y selección.

### Antes

Un usuario cambia la orientación de los ejes del análisis. ¿Qué operación OLAP realiza?

- A. Staging
- B. Commit transaccional
- C. Pivot **(correcta)**
- D. Revocación

Explicación: Pivot reorienta ejes; no equivale a cargar datos ni confirmar transacciones.

### Propuesta

Un usuario intercambia productos y regiones entre filas y columnas, manteniendo filtros y niveles de detalle. ¿Qué operación OLAP realiza?

- A. Drill-down.
- B. Roll-up.
- C. Pivot. **(correcta)**
- D. Slice.

Explicación: Pivot reorienta los ejes de la vista. Aquí se intercambia qué dimensión ocupa filas o columnas manteniendo filtros y niveles. No se está pidiendo más detalle ni un total de nivel superior. La operación reorganiza la presentación del mismo análisis; no valida por sí sola su contenido.

- Error A: Drill-down cambia el nivel de detalle. El caso mantiene los niveles de ambas dimensiones.
- Error B: Roll-up agrega hacia un nivel superior. No es el intercambio de filas y columnas descrito.
- Error D: Slice selecciona una porción por dimensión. El caso conserva los filtros existentes.

- [IBM: What is OLAP?](https://www.ibm.com/think/topics/olap) · Drill-down; Roll up; Slice and dice; Pivot: detalle, agregación, selección y orientación · versión: Solo operaciones conceptuales; no se adoptan afirmaciones comerciales de rendimiento, superioridad de MOLAP o descripción física de todo cubo · comprobado: 2026-10-27

Partida: `19df808bec0f3ed499f51ec75a1d6f2bf72efb47dc87b81550fd5da4a6f11fdf` · propuesta: `1f4d24840172b6a214a61c41900b0bef47ca5b345f3917fc5f7c61ae4c72ffae`

## AI-GSI-B2-T04-006

Decisión: pending_review · acción: revise.

Motivo: Conservar data mart y clave C; preguntar por alcance para que un posible cubo OLAP no resulte una segunda respuesta por implementación.

### Antes

Un área dispone de un almacén analítico especializado por materia. ¿Qué concepto corresponde?

- A. Cubo OLAP como sinónimo obligatorio de cualquier almacén por área
- B. Sistema OLTP de transacciones operativas
- C. Data Mart **(correcta)**
- D. Data Warehouse corporativo completo

Explicación: El Data Mart es un subconjunto especializado por área o materia; no equivale necesariamente al DW corporativo completo.

### Propuesta

¿Qué concepto designa el alcance de un almacén analítico especializado por área o materia, con independencia de su implementación física?

- A. Cubo OLAP: organización multidimensional para analizar datos.
- B. OLTP: procesamiento de transacciones operativas del negocio.
- C. Data mart: almacén analítico especializado por área o materia. **(correcta)**
- D. DW corporativo completo: alcance integrado de toda la entidad.

Explicación: Data mart identifica un ámbito analítico limitado a un área, proceso o materia. Puede alimentarse de un DW u otras fuentes y representarse mediante tablas u otras estructuras: no exige una base física separada ni un cubo concreto. El enunciado pregunta por el alcance organizativo o temático, no por la técnica de representación. Un DW corporativo completo tiene cobertura más amplia.

- Error A: Un cubo describe organización multidimensional. Puede formar parte de la solución, pero no define por sí solo su alcance por área.
- Error B: OLTP describe tratamiento operativo de transacciones. No es la denominación del almacén analítico especializado.
- Error D: La cobertura corporativa completa es más amplia que el área o materia indicada. Confunde ámbito parcial y conjunto empresarial.

- [IBM: What Is a Data Mart?](https://www.ibm.com/think/topics/data-mart) · What is a data mart?; Data mart versus data warehouse versus data lake: alcance de área y fuentes posibles · versión: Solo alcance organizativo/temático; no se exige un DW corporativo previo o base física separada a todo data mart · comprobado: 2026-10-27

Partida: `df1796ec1c88078e84c129d942c463e95cb4dd9a02f13a6168c0b410d40f78e0` · propuesta: `b3d6e356896969896a70a56d2b879102a0176656bd3812176be6e971da4aff35`

## AI-GSI-B2-T04-009

Decisión: pending_review · acción: revise.

Motivo: Conservar patrón ELT y clave D; precisar destino y transformación principal sin negar controles o preprocesado previos.

### Antes

Una plataforma carga datos y realiza después la transformación principal. ¿Qué patrón utiliza?

- A. OLTP como sinónimo de integración
- B. ETL por definición estricta
- C. MOLAP como orden de integración
- D. ELT **(correcta)**

Explicación: ELT altera el orden de transformación y carga; OLAP y OLTP describen tipos de explotación.

### Propuesta

Una plataforma carga los datos extraídos en el almacén de destino y allí realiza la transformación principal. ¿Qué patrón utiliza?

- A. OLTP, como procesamiento de transacciones operativas.
- B. ETL, con transformación principal antes de la carga final.
- C. MOLAP, como forma de explotación multidimensional.
- D. ELT, con transformación principal en el destino de carga. **(correcta)**

Explicación: ELT extrae y carga en el destino antes de realizar allí la transformación principal. La ubicación del procesamiento es la diferencia relevante frente al ETL con transformación previa. Puede haber comprobaciones o preparación antes de cargar; eso no invalida el patrón descrito. No se deduce que los datos en bruto sean ya adecuados para cualquier usuario o que desaparezcan reglas de calidad y gobierno.

- Error A: OLTP clasifica una finalidad operativa, no el orden de carga y transformación de este pipeline analítico.
- Error B: La alternativa sitúa la transformación principal antes de la carga final. El caso la realiza después, en el destino.
- Error C: MOLAP describe una modalidad de análisis multidimensional. No identifica la secuencia de integración preguntada.

- [Microsoft Azure Architecture Center: Extract, transform, and load (ETL)](https://learn.microsoft.com/en-us/azure/architecture/data-guide/relational-data/etl) · Extract, transform, load process y Extract, load, transform (ELT): transformación en el almacén de destino · versión: Documentación conceptual consultada; se distingue ubicación de transformación principal y orden lógico, sin negar preprocesado o controles previos de calidad · comprobado: 2026-10-27

Partida: `3e6a44798269f35a9d11fa8e11347ac99aa436db854c4e9cf0b08ede0e8f5e2b` · propuesta: `f59c44adad19c4aafaefc5d6da44d5c273bde21fd4a20ea2b2fc990873528b6b`

## AI-GSI-B2-T04-011

Decisión: pending_review · acción: revise.

Motivo: Conservar necesidad de procedencia/transformaciones y clave B; comparar capacidades cercanas de gobierno sin convertir linaje en garantía de calidad.

### Antes

Se necesita rastrear de qué sistema procede una cifra y qué transformaciones sufrió. ¿Qué capacidad permite hacerlo?

- A. Pivot exclusivamente
- B. Linaje del dato **(correcta)**
- C. Desnormalización exclusivamente
- D. Volatilidad del dato

Explicación: El linaje documenta procedencia y transformaciones; girar ejes o cambiar el modelo no aporta esa trazabilidad por sí solo.

### Propuesta

Se necesita rastrear de qué sistema procede una cifra y qué transformaciones sufrió. ¿Qué capacidad permite hacerlo?

- A. Glosario de términos y definiciones de negocio.
- B. Linaje del dato y sus transformaciones. **(correcta)**
- C. Clasificación de la sensibilidad de los datos.
- D. Perfilado de calidad de los valores almacenados.

Explicación: El linaje documenta de dónde procede el dato, por qué sistemas pasa y qué transformaciones llevan a la cifra consultada. Permite investigar su recorrido e impactos de cambios. Se distingue del significado del indicador, su clasificación o los controles de valores. La utilidad depende de la cobertura y vigencia de los metadatos; disponer de un diagrama no garantiza exactitud ni trazabilidad completa de cualquier sistema.

- Error A: El glosario explica significado y contexto de los términos. No reconstruye por sí solo el recorrido y las transformaciones.
- Error C: Clasificar sensibilidad informa del tratamiento y protección necesarios. No identifica toda la cadena que produjo una cifra.
- Error D: Perfilar valores ayuda a detectar distribuciones o anomalías. Ese examen no registra por sí solo el origen y las transformaciones.

- [Microsoft Purview: Data lineage in classic Data Catalog](https://learn.microsoft.com/en-us/purview/data-gov-classic-lineage) · Use cases y Lineage experience in the classic Data Catalog: origen, movimiento, transformación y metadatos · versión: Portal clásico; solo concepto de trazabilidad, sin garantizar cobertura completa, exactitud del dato o capacidades actuales de cualquier conector · comprobado: 2026-10-27

Partida: `c05b1e30c41027ba092248f06689badaa8fd7209f137dba10681d75bac82c8d9` · propuesta: `7c9212f7e944d366932fc8664903b5fecf00c8a178efdbe14f37d04e770ccb8e`

## AI-GSI-B2-T04-012

Decisión: pending_review · acción: revise.

Motivo: Conservar ODS frente a DW histórico y clave B; orientación y profundidad habitual sin latencia, retención o modelo físico universales.

### Antes

¿Qué caracteriza al ODS frente al DW histórico?

- A. Conservación obligatoria de toda la historia sin actualización
- B. Datos operacionales integrados recientes y menor profundidad histórica habitualmente **(correcta)**
- C. Ausencia de integración entre fuentes
- D. Almacenamiento exclusivo de imágenes

Explicación: El ODS se orienta a datos operacionales recientes, generalmente más normalizados que un modelo dimensional.

### Propuesta

¿Qué caracteriza al ODS frente al DW histórico?

- A. Conservar por diseño toda la historia sin modificar registros.
- B. Integrar datos operativos recientes con actualización frecuente. **(correcta)**
- C. Mantener cada fuente aislada sin conciliación entre sus datos.
- D. Presentar solo indicadores históricos agregados para dirección.

Explicación: En la arquitectura clásica, un ODS integra datos operativos recientes para necesidades actuales, con actualización y menor profundidad histórica habitual que un DW orientado a análisis temporal. La diferencia es de finalidad y tratamiento, no un número universal de días. Un ODS puede alimentar otros almacenes y un DW puede recibir cargas muy frecuentes: esas posibilidades no borran la distinción de orientación.

- Error A: La conservación histórica completa e inmutable no es el rasgo distintivo de un ODS. Su foco es la información operacional actual.
- Error C: El ODS concilia información operativa. Aislar fuentes sin integración contradice esa finalidad.
- Error D: Los indicadores ejecutivos son una capa de consumo. No definen la integración operacional reciente propia del ODS.

- [Oracle Database: Introduction to Data Warehousing Concepts](https://docs.oracle.com/en/database/oracle/oracle-database/18/dwhsg/introduction-data-warehouse-concepts.html) · 1.1, párrafo Operational data stores: operaciones diarias, datos recientes y menor historia; contraste con DW histórico · versión: Oracle Database 18c; solo distinción conceptual clásica, sin imponer retención de un día, una latencia fija o ausencia de actualizaciones en todo DW · comprobado: 2026-10-27

Partida: `cee85bcab8e1abde27f43088167799779847ed97e63aae57e6a015640131ad92` · propuesta: `768b370e42ce6b9d341b6d7909233306eadfceac54cb431debd6fbfd184be5ac`

## AI-GSI-B2-T05-003

Decisión: pending_review · acción: revise.

Motivo: Conservar nivel conceptual y clave A; comparar alcance global, autorizaciones, físico y vistas sin equiparar nivel con schema de un motor.

### Antes

¿Qué nivel contiene la descripción lógica global de entidades y restricciones?

- A. Conceptual **(correcta)**
- B. De bloques físicos
- C. Interno
- D. Externo

Explicación: El esquema conceptual expresa el modelo global, independiente de su almacenamiento concreto.

### Propuesta

¿Qué nivel contiene la descripción lógica global de entidades, relaciones y restricciones, independiente del almacenamiento concreto?

- A. Esquema conceptual global de la base de datos. **(correcta)**
- B. Catálogo de concesiones y pertenencia a roles.
- C. Organización interna de archivos y páginas físicas.
- D. Esquemas externos correspondientes a vistas de usuarios.

Explicación: El nivel conceptual representa la estructura lógica global: entidades, relaciones y restricciones, con independencia de detalles de almacenamiento. Las perspectivas externas representan necesidades de usuarios, mientras la organización de archivos y páginas es física. No debe confundirse esta descripción con el objeto llamado schema en un producto SQL concreto ni con su catálogo de autorizaciones. El concepto global se mantiene aunque distintas exposiciones separen fases o niveles de diseño con nombres diferentes.

- Error B: Las concesiones y roles describen autorizaciones. Son relevantes para seguridad, pero no sustituyen el modelo global de entidades y restricciones.
- Error C: Los archivos y páginas son estructuras de almacenamiento físico. La pregunta pide la visión lógica global, independiente de esa realización.
- Error D: Las vistas externas representan perspectivas de usuarios o aplicaciones. Pueden ser parciales y no son el esquema global solicitado.

- [Adrienne Watt: Database Design, second edition, Chapter 5 Data Modelling](https://opentextbc.ca/dbdesign01/chapter/chapter-5-data-modelling/) · Conceptual models; Data Abstraction Layer; Schemas: visión global, entidades, relaciones y restricciones · versión: Segunda edición; el texto distingue también modelo físico. Se usa la descripción conceptual global sin equiparar sus fases de diseño a un esquema SQL concreto · comprobado: 2026-10-27

Partida: `4d79de9dfc201999d9602accfdcd816e32cb7b628ae73a0b5deb67acfae8ccce` · propuesta: `717d25f9ec7cc6f722a306eae6a44a3e81cf59b942e050d5397641cb15314547`

## AI-GSI-B2-T05-004

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente cuatro sentencias y enunciado bien construido y clave B; distinguir finalidad y alcance sin universalizar commit o efectos externos.

### Antes

¿Qué sentencia pertenece al control transaccional?

- A. GRANT
- B. ROLLBACK **(correcta)**
- C. SELECT
- D. CREATE TABLE

Explicación: ROLLBACK deshace operaciones según su alcance; las otras sentencias consultan, definen o gestionan permisos.

### Propuesta

¿Qué sentencia pertenece al control transaccional?

- A. GRANT
- B. ROLLBACK **(correcta)**
- C. SELECT
- D. CREATE TABLE

Explicación: ROLLBACK es una sentencia de control transaccional: en el alcance documentado aborta la transacción actual y descarta sus cambios no confirmados. GRANT gestiona privilegios, SELECT consulta y CREATE TABLE define estructura. Esa clasificación de finalidad no implica que las otras sentencias no puedan participar en una transacción. Tampoco significa deshacer cualquier cambio ya confirmado o efecto externo al control del motor.

- Error A: GRANT concede privilegios o pertenencia a roles. Su finalidad es autorización, aunque el motor pueda tratarla transaccionalmente.
- Error C: SELECT recupera filas o resultados de consulta. No es la orden para abortar la transacción actual.
- Error D: CREATE TABLE define una tabla. Es una operación de definición, con reglas transaccionales que dependen del motor.

- [PostgreSQL 18: ROLLBACK](https://www.postgresql.org/docs/18/sql-rollback.html) · Description y Notes: abortar transacción actual, alcance y uso fuera de bloque · versión: PostgreSQL 18; identificación de control transaccional, sin afirmar que cualquier cambio confirmado o recurso externo pueda deshacerse · comprobado: 2026-10-27
- [PostgreSQL 18: GRANT](https://www.postgresql.org/docs/18/sql-grant.html) · Título y Synopsis: concesión de privilegios y roles · versión: PostgreSQL 18; clasificación de finalidad, sin concluir que GRANT no pueda ejecutarse dentro de una transacción · comprobado: 2026-10-27
- [PostgreSQL 18: SELECT](https://www.postgresql.org/docs/18/sql-select.html) · Título y Synopsis: recuperación de filas de tablas o vistas · versión: PostgreSQL 18; finalidad de consulta, no afirmación de que todas sus variantes carezcan de bloqueos o efectos en funciones · comprobado: 2026-10-27
- [PostgreSQL 18: CREATE TABLE](https://www.postgresql.org/docs/18/sql-createtable.html) · Título y Synopsis: definición de una tabla nueva · versión: PostgreSQL 18; finalidad DDL, sin generalizar reglas de commit implícito de otros motores · comprobado: 2026-10-27

Partida: `15dc7dab6cce39012ea835f704712e99ae126650abdb9efcf672e65f5ad3c42c` · propuesta: `e8d4694d93269f0a66a8878667c5dbb4cd3a0ca6f7bbda43a3e0263c5dde366a`
