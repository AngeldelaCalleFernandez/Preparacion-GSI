# GSI-EDITORIAL-059 — revisión propuesta

Preparado: 2026-10-29. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `ef78b3b7d18079f667694031ac94ef93dbede1dfc8814714a86c2d8d9943feb6`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T09-015

Decisión: pending_review · acción: revise.

Motivo: Conservar diferencia include/extend y claveB; precisar independencia del caso extendido y condición opcional, evitando confundir ambas relaciones con orden de ejecución.

### Antes

¿Qué diferencia include y extend en casos de uso?

- A. Include es siempre opcional; extend siempre obligatorio
- B. Include reutiliza comportamiento obligatorio común; extend añade comportamiento condicional **(correcta)**
- C. No tienen relación con casos de uso
- D. Ambos son claves de base de datos

Explicación: La distinción afecta a reutilización y extensión del comportamiento del caso base.

### Propuesta

¿Qué diferencia include y extend en casos de uso?

- A. Include añade una extensión al caso completo; extend extrae la parte común requerida.
- B. Include inserta comportamiento incluido; extend añade una extensión en puntos definidos. **(correcta)**
- C. Include especializa al caso general; extend conecta al actor con su objetivo funcional.
- D. Include y extend fijan dos órdenes equivalentes de ejecutar los mismos casos de uso.

Explicación: Include inserta el comportamiento de otro caso para reutilizarlo; el caso incluyente depende de esa parte para describirse completamente. Extend añade comportamiento en puntos de extensión de un caso base que tiene sentido por sí mismo. La condición de extend puede omitirse: entonces la extensión se ejecuta al alcanzar el punto. No se debe reducir la diferencia a que extend sea siempre opcional y condicionado explícitamente.

- Error A: Invierte los papeles: extraer e incluir comportamiento común corresponde a include, mientras extend añade comportamiento al caso base.
- Error C: La especialización corresponde a generalización y la relación actor/objetivo no define extend.
- Error D: Son relaciones con semántica distinta, no dos notaciones equivalentes de un orden temporal.

- [OMG: Unified Modeling Language 2.5.1](https://www.omg.org/spec/UML/2.5.1/PDF) · 18.1.3.2 Extends y18.1.3.3 Includes, pp.640–641 impresas;18.1.4 notación, p.642 · versión: Formal/2017-12-05, diciembre 2017, PDF 796 páginas ya descargado de OMG y apartados leídos textualmente el 29-10-2026. Sin inspección visual de figuras · comprobado: 2026-10-29

Partida: `9b1fe86eb8bcebac0f9f27b5b72dd095ad9f68dd2faabb02f23425b05dc4787f` · propuesta: `c5023a8886da122da919e6917e081a2ee73d7a8f3ded3465bfbbe2aef62e0189`

## AI-GSI-B3-T09-016

Decisión: pending_review · acción: revise.

Motivo: Conservar Adapter y claveC, manteniendo las alternativas originales; microcaso que hace explícitos contrato esperado y componente existente.

### Antes

Se requiere compatibilizar una interfaz existente con otra esperada. ¿Qué patrón corresponde?

- A. Observer
- B. Command
- C. Adapter **(correcta)**
- D. State

Explicación: Adapter resuelve incompatibilidad de interfaces.

### Propuesta

Un cliente invoca cobrarEuros(importeDecimal), pero el componente reutilizado ofrece cobrarCentimos(entero). Se necesita conservar ambos contratos mediante una capa de conversión y delegación. ¿Qué patrón corresponde?

- A. Observer
- B. Command
- C. Adapter **(correcta)**
- D. State

Explicación: Adapter presenta la interfaz esperada por el cliente y delega en el componente existente, realizando las conversiones necesarias. El objetivo es compatibilizar interfaces. En el caso se adapta cobrarEuros a cobrarCentimos; no se pide notificar cambios, representar una petición diferida o variar comportamiento según estado. La conversión debe respetar las reglas monetarias del contrato.

- Error A: Observer organiza suscriptores y notificaciones de cambios; no resuelve por sí mismo la incompatibilidad de firmas y unidades.
- Error B: Command encapsula una petición como objeto; ese no es el propósito principal de adaptar la interfaz del componente.
- Error D: State permite variar comportamiento según el estado interno del contexto; aquí se mantiene la operación y cambia su interfaz.

- [Gamma, Helm, Johnson y Vlissides: Design Patterns, vista previa](https://api.pageplace.de/preview/DT0400.9780321700742_A23552527/preview-9780321700742_A23552527.pdf) · Listas iniciales de propósitos: Adapter, Facade, Strategy, Observer y Command; catálogo 1.4 e índice de patrones · versión: Libro Addison-Wesley, copyright 1995, impresión 37 de marzo 2009 según créditos; vista previa 42 páginas consultada textualmente el 29-10-2026. No se atribuye disponibilidad de los capítulos completos · comprobado: 2026-10-29
- [GoF, extracto editorial: Adapter](https://www.informit.com/articles/article.aspx?p=1398600) · Class, Object Structural: Adapter; Intent y Motivation: convertir la interfaz existente en la esperada por el cliente · versión: Extracto de los autores publicado por InformIT/Addison-Wesley, leído el 29-10-2026. Adaptar interfaz no equivale a cualquier envoltorio · comprobado: 2026-10-29

Partida: `7c84397d9b62aadd7eb2624fce46bd62209fc6db8eed4f7354526fdcf573c5c5` · propuesta: `94125468ce6b8c295b14aa6c8270c244b415bad0ec0a0c77fa08fb06fa4c7ce5`

## AI-GSI-B3-T09-017

Decisión: pending_review · acción: revise.

Motivo: Conservar Facade y claveC, con alternativas originales; microcaso de acceso unificado sin atribuir transacciones automáticas.

### Antes

Se busca ofrecer una interfaz sencilla a un subsistema complejo. ¿Qué patrón corresponde?

- A. Prototype
- B. Strategy
- C. Facade **(correcta)**
- D. Observer

Explicación: Facade simplifica acceso; Adapter compatibiliza interfaces existentes.

### Propuesta

La operación reservarViaje ofrece al cliente una entrada sencilla y coordina las interfaces de inventario, cobro y emisión de billetes. Se quiere ocultar esa complejidad de uso. ¿Qué patrón corresponde?

- A. Prototype
- B. Strategy
- C. Facade **(correcta)**
- D. Observer

Explicación: Facade ofrece una entrada de mayor nivel que coordina el acceso a interfaces de un subsistema. En el caso simplifica el uso de inventario, cobro y emisión sin exigir que el cliente conozca cada llamada. No garantiza por sí sola atomicidad, deshacer operaciones o aislamiento: esas propiedades requieren mecanismos adicionales.

- Error A: Prototype crea objetos copiando un prototipo; no ofrece el acceso unificado al subsistema que se solicita.
- Error B: Strategy permite elegir algoritmos intercambiables; el objetivo planteado es simplificar el acceso a varios servicios.
- Error D: Observer notifica cambios a interesados; no define la interfaz de mayor nivel para utilizar el subsistema.

- [Gamma, Helm, Johnson y Vlissides: Design Patterns, vista previa](https://api.pageplace.de/preview/DT0400.9780321700742_A23552527/preview-9780321700742_A23552527.pdf) · Listas iniciales de propósitos: Adapter, Facade, Strategy, Observer y Command; catálogo 1.4 e índice de patrones · versión: Libro Addison-Wesley, copyright 1995, impresión 37 de marzo 2009 según créditos; vista previa 42 páginas consultada textualmente el 29-10-2026. No se atribuye disponibilidad de los capítulos completos · comprobado: 2026-10-29

Partida: `94c83f02bb9e661274dcda158f9ef1e7693e4dc75f31dbc1f5a0851726e57c96` · propuesta: `1e334bdbde1bf0cc39861a7da610a7733a372391d0c1721c42bf342c85bf2f4b`

## AI-GSI-B3-T09-018

Decisión: pending_review · acción: revise.

Motivo: Conservar Strategy y claveD, con alternativas originales; caso de políticas que conserva contrato y distingue resultado de intercambiabilidad.

### Antes

Se necesita intercambiar algoritmos sin cambiar su consumidor. ¿Qué patrón encaja?

- A. Facade
- B. Singleton
- C. Composite
- D. Strategy **(correcta)**

Explicación: Strategy encapsula alternativas de algoritmo intercambiables.

### Propuesta

Un calculador de envío debe usar políticas estándar o urgente mediante el mismo contrato calcular(peso), sin modificar el consumidor al sustituir el algoritmo. ¿Qué patrón encaja?

- A. Facade
- B. Singleton
- C. Composite
- D. Strategy **(correcta)**

Explicación: Strategy encapsula algoritmos alternativos bajo un contrato común para que el consumidor delegue sin depender de sus detalles. Se cambia la estrategia de cálculo manteniendo el código del consumidor. Las políticas deben respetar ese contrato; intercambiable no significa que produzcan el mismo importe. No requiere que la selección se haga siempre dinámicamente.

- Error A: Facade simplifica el acceso a un subsistema; no se centra en elegir entre algoritmos que realizan la misma tarea.
- Error B: Singleton limita instancias y proporciona un acceso controlado; no organiza una familia de cálculos intercambiables.
- Error C: Composite representa jerarquías parte/todo con tratamiento uniforme; no es el mecanismo de selección de algoritmos descrito.

- [Gamma, Helm, Johnson y Vlissides: Design Patterns, vista previa](https://api.pageplace.de/preview/DT0400.9780321700742_A23552527/preview-9780321700742_A23552527.pdf) · Listas iniciales de propósitos: Adapter, Facade, Strategy, Observer y Command; catálogo 1.4 e índice de patrones · versión: Libro Addison-Wesley, copyright 1995, impresión 37 de marzo 2009 según créditos; vista previa 42 páginas consultada textualmente el 29-10-2026. No se atribuye disponibilidad de los capítulos completos · comprobado: 2026-10-29

Partida: `3a4c909f5fc2f3d373a8a0552b6eff06a4590ed8614eae31179426207f73072e` · propuesta: `399fa152afe2c676931bdee789f3b32dcef585df52da18df9ca7052452f2ab3e`

## AI-GSI-B3-T09-019

Decisión: pending_review · acción: revise.

Motivo: Conservar Observer y claveC, con alternativas originales; caso con altas/bajas que delimita la relación sin prometer garantías de mensajería.

### Antes

Varios objetos deben recibir avisos cuando cambia otro. ¿Qué patrón corresponde?

- A. Adapter
- B. Builder
- C. Observer **(correcta)**
- D. Prototype

Explicación: Observer organiza notificación a interesados en cambios.

### Propuesta

Varios paneles se suscriben a un modelo y deben actualizarse cuando cambia. Pueden añadirse o retirarse sin que el modelo conozca sus clases concretas. ¿Qué patrón corresponde?

- A. Adapter
- B. Builder
- C. Observer **(correcta)**
- D. Prototype

Explicación: Observer mantiene una relación entre un sujeto y varios interesados que reciben notificaciones cuando cambia. Los paneles pueden suscribirse o darse de baja sin que el sujeto dependa de sus clases concretas. El patrón no impone por sí solo entrega distribuida fiable, ejecución asíncrona u orden de actualización; esos contratos deben definirse aparte.

- Error A: Adapter ajusta una interfaz a la esperada por un cliente; no modela por sí solo la suscripción de varios interesados a cambios.
- Error B: Builder separa construcción y representación de un objeto complejo; no organiza avisos a suscriptores.
- Error D: Prototype crea objetos por copia de una instancia modelo; no establece la relación de notificación.

- [Gamma, Helm, Johnson y Vlissides: Design Patterns, vista previa](https://api.pageplace.de/preview/DT0400.9780321700742_A23552527/preview-9780321700742_A23552527.pdf) · Listas iniciales de propósitos: Adapter, Facade, Strategy, Observer y Command; catálogo 1.4 e índice de patrones · versión: Libro Addison-Wesley, copyright 1995, impresión 37 de marzo 2009 según créditos; vista previa 42 páginas consultada textualmente el 29-10-2026. No se atribuye disponibilidad de los capítulos completos · comprobado: 2026-10-29

Partida: `4aacdf3edd94c163131a589dd9ca425b273b065fe15a09bf18ebe46d3f99c126` · propuesta: `9170d5eb931dc81116a4efa1efd779cc09e459e22a763e5cf5eb30b6d085e649`

## AI-GSI-B3-T09-020

Decisión: pending_review · acción: revise.

Motivo: Conservar Command y claveC, con alternativas originales; caso de solicitud diferida sin equiparar patrón con cola durable o deshacer universal.

### Antes

Se quiere encapsular una solicitud como objeto. ¿Qué patrón corresponde?

- A. Flyweight
- B. State
- C. Command **(correcta)**
- D. Bridge

Explicación: Command representa solicitudes; State cambia comportamiento según estado.

### Propuesta

Un editor guarda la operación cambiarTitulo junto con el nuevo texto en un objeto que se pondrá en una cola para ejecutarlo después. ¿Qué patrón representa esa solicitud?

- A. Flyweight
- B. State
- C. Command **(correcta)**
- D. Bridge

Explicación: Command encapsula una solicitud, con su operación y datos necesarios, en un objeto que otro elemento puede ejecutar. Así se separan la petición y el momento de ejecución y se facilita encolarla o registrarla. El patrón no garantiza almacenamiento duradero, ejecución exactamente una vez o reversibilidad de cualquier acción; esas capacidades se diseñan explícitamente.

- Error A: Flyweight comparte objetos o estado común para reducir coste; no representa solicitudes para ejecutarlas posteriormente.
- Error B: State modifica el comportamiento de un contexto según su estado; no encapsula la petición y sus parámetros como unidad de ejecución.
- Error D: Bridge separa una abstracción de su implementación para que varíen; no tiene como propósito representar una petición encolable.

- [Gamma, Helm, Johnson y Vlissides: Design Patterns, vista previa](https://api.pageplace.de/preview/DT0400.9780321700742_A23552527/preview-9780321700742_A23552527.pdf) · Listas iniciales de propósitos: Adapter, Facade, Strategy, Observer y Command; catálogo 1.4 e índice de patrones · versión: Libro Addison-Wesley, copyright 1995, impresión 37 de marzo 2009 según créditos; vista previa 42 páginas consultada textualmente el 29-10-2026. No se atribuye disponibilidad de los capítulos completos · comprobado: 2026-10-29

Partida: `817ad8146e95ed0e25d1afad09febdf892986478ebc20552a01beeecdab0d276` · propuesta: `f36aaa767d62767b24319ae698937789761fd4d9131e40707e906cb08d2e005d`

## MAN-GSI-P15-125

Decisión: pending_review · acción: revise.

Motivo: Conservar EntityManager y claveC; reemplazar términos ajenos de.NET por interfaces próximas de Persistence y concretar las operaciones preguntadas.

### Antes

¿Qué objeto es central en Jakarta Persistence para gestionar entidades?

- A. \`HttpContext\`.
- B. \`NuGetClient\`.
- C. \`EntityManager\`. **(correcta)**
- D. \`DbContext\`.

Explicación: \`EntityManager\`. EntityManager permite persistir, buscar, eliminar y consultar entidades dentro del contexto de persistencia.

### Propuesta

¿Qué interfaz de Jakarta Persistence ofrece persist, find y remove para interactuar con las entidades de un contexto de persistencia?

- A. \`EntityManagerFactory\`.
- B. \`CriteriaBuilder\`.
- C. \`EntityManager\`. **(correcta)**
- D. \`EntityTransaction\`.

Explicación: EntityManager es la interfaz con la que se interactúa con un contexto de persistencia: ofrece persist, find, remove y consultas sobre entidades. La sincronización con la base de datos está sujeta al contexto y a las reglas transaccionales. No se debe confundir la gestión del ciclo de vida con crear gestores, construir consultas o delimitar una transacción local.

- Error A: EntityManagerFactory crea o proporciona EntityManager y configura su entorno; no es la interfaz que ofrece las operaciones de ciclo de vida preguntadas.
- Error B: CriteriaBuilder construye expresiones y consultas de la Criteria API; no sustituye las operaciones de EntityManager sobre su contexto.
- Error D: EntityTransaction controla límites de una transacción de recurso local; no es el gestor general del contexto de entidades.

- [Eclipse Foundation: Jakarta Persistence 3.2](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · 3.1–3.2 EntityManager/contexto;4 y4.1 JPQL;6.1 Criteria;7.3 EntityManagerFactory; B.1/B.2 interfaces;11 metadatos ORM · versión: Versión 3.2 final en HTML oficial, leída el 29-10-2026. Se distingue API, proveedor y esquema abstracto de entidades del esquema SQL físico · comprobado: 2026-10-29

Partida: `26c91231f7547f46450d1d0f8b00ecd5f7bb038d47e4a39be16e42f2b7507adc` · propuesta: `333d8f8cedac16e56c01210c998089a2788b1436904afcf95220dbfc75618899`

## MAN-GSI-P15-127

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y claveD; ampliar evidencia de demarcación/coordinación y explicar cada tecnología alternativa.

### Antes

¿Qué especificación coordina transacciones empresariales en Jakarta EE?

- A. Jakarta Servlet.
- B. Jakarta JSON Binding.
- C. Jakarta Faces.
- D. Jakarta Transactions. **(correcta)**

Explicación: Jakarta Transactions. Transactions define APIs y semántica para límites transaccionales en la plataforma.

### Propuesta

¿Qué especificación coordina transacciones empresariales en Jakarta EE?

- A. Jakarta Servlet.
- B. Jakarta JSON Binding.
- C. Jakarta Faces.
- D. Jakarta Transactions. **(correcta)**

Explicación: Jakarta Transactions define interfaces y semántica para delimitar y coordinar transacciones en la plataforma, con integración del contenedor y recursos participantes. Incluye demarcación programática mediante UserTransaction y la anotación Transactional. No basta una llamada de negocio para garantizar una transacción distribuida: importa la configuración y el soporte de los recursos.

- Error A: Jakarta Servlet se ocupa de componentes web y peticiones/respuestas; no define la API general de coordinación transaccional.
- Error B: Jakarta JSON Binding transforma representaciones Java y JSON; no establece límites o coordinación de transacciones.
- Error C: Jakarta Faces define componentes y ciclo de vida de interfaz de usuario web; no es la especificación transaccional.

- [Eclipse Foundation: Jakarta Transactions 2.0](https://jakarta.ee/specifications/transactions/2.0/jakarta-transactions-spec-2.0.html) · 1 Introduction;3 Jakarta Transactions API;3.1 UserTransaction;3.7 Transactional · versión: 2.0 Final Release,08-10-2020 según cabecera, HTML leído el 29-10-2026. Es la versión referenciada en Jakarta EE 11; no se inventa una edición 2.1 · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta EE Platform 11](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · 2.24 cambios/minimum Java SE 17;6 requisitos de tecnologías;6.30 Data 1.0;9 Profiles;9.7 requisitos de la plataforma completa · versión: Especificación final11.0, HTML oficial leído el 29-10-2026. La plataforma completa se distingue de Core Profile y Web Profile; los requisitos de implementación no garantizan que cualquier binario funcione con cualquier JDK · comprobado: 2026-10-29

Partida: `f54bed2294df2b45fa630deb04129a9d0112524d2e0eae5b70133041be902a41` · propuesta: `ee34890707f43d3dcb19b433830e3eeee9a99848f4ef6f023dd3c534481f7ce1`

## MAN-GSI-P15-128

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y claveB; completar responsabilidades y distinguir API REST de transporte HTTP o tecnologías complementarias.

### Antes

¿Qué especificación se usa para servicios RESTful en Jakarta EE?

- A. Jakarta Persistence.
- B. Jakarta REST. **(correcta)**
- C. Jakarta Mail.
- D. Jakarta Batch.

Explicación: Jakarta REST. Jakarta REST proporciona anotaciones y APIs para exponer y consumir servicios REST.

### Propuesta

¿Qué especificación se usa para servicios RESTful en Jakarta EE?

- A. Jakarta Persistence.
- B. Jakarta REST. **(correcta)**
- C. Jakarta Mail.
- D. Jakarta Batch.

Explicación: Jakarta RESTful Web Services, también conocida como Jakarta REST, define APIs y anotaciones para recursos y servicios REST, además de una API cliente. Se apoya en el transporte HTTP ofrecido por el entorno y no define una pila HTTP nueva. Puede integrarse con otras tecnologías de la plataforma sin confundirse con persistencia, correo o procesamiento por lotes.

- Error A: Jakarta Persistence gestiona entidades y mapeo objeto-relacional; no define los recursos y APIs de servicios REST.
- Error C: Jakarta Mail trata servicios de correo; no es la especificación de recursos REST.
- Error D: Jakarta Batch organiza trabajos y pasos de procesamiento por lotes; no define la API REST solicitada.

- [Eclipse Foundation: Jakarta RESTful Web Services 4.0](https://jakarta.ee/specifications/restful-ws/4.0/jakarta-restful-ws-spec-4.0.html) · 1 Introduction;1.2 Goals;3 Resources;5 Client API;2.3 Publication · versión: 4.0.0 Final Release,03-04-2024 según metadatos, HTML oficial leído el 29-10-2026 y cotejado con índice4.0. El apartado1.1 conserva una referencia residual a3.2; no se usa para cambiar la versión del documento · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta EE Platform 11](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · 2.24 cambios/minimum Java SE 17;6 requisitos de tecnologías;6.30 Data 1.0;9 Profiles;9.7 requisitos de la plataforma completa · versión: Especificación final11.0, HTML oficial leído el 29-10-2026. La plataforma completa se distingue de Core Profile y Web Profile; los requisitos de implementación no garantizan que cualquier binario funcione con cualquier JDK · comprobado: 2026-10-29

Partida: `7e5b73d69d7229e5546609e3e09af8a87f62a6c47f29ba43930fdb9efd642915` · propuesta: `22e0872f65138632e074f25ed5ce63426320470e33236bbf407847df620e92c1`

## MAN-GSI-P15-121

Decisión: pending_review · acción: revise.

Motivo: Conservar mínimo Java SE 17 y claveA; uniformar alternativas y distinguir requisito de especificación de compatibilidad de un producto concreto.

### Antes

¿Qué versión mínima de Java SE requiere Jakarta EE 11?

- A. Java SE 17. **(correcta)**
- B. Java SE 11 obligatoriamente.
- C. Java SE 8.
- D. Java SE 6.

Explicación: Java SE 17. Jakarta EE 11 tiene Java 17 como mínimo y contempla el uso de Java 21 en su ecosistema.

### Propuesta

¿Qué versión mínima de Java SE requiere Jakarta EE 11?

- A. Java SE 17. **(correcta)**
- B. Java SE 11.
- C. Java SE 8.
- D. Java SE 21.

Explicación: Jakarta EE 11 eleva el mínimo de Java SE a 17 y elimina el soporte de Java SE 11 en esta edición. La especificación contempla 17 y versiones posteriores y sus requisitos de compatibilidad mencionan 17 y 21. El mínimo normativo no obliga a que cualquier distribución concreta del servidor funcione en todos esos JDK: debe verificarse su versión y certificación.

- Error B: Java SE 11 corresponde al mínimo de Jakarta EE 10; Jakarta EE 11 lo eleva a 17.
- Error C: Java SE 8 queda por debajo del mínimo de Jakarta EE 11 y ya no era el mínimo de Jakarta EE 10.
- Error D: Java SE 21 puede ser el requisito de una distribución concreta, pero no es el mínimo de la especificación Jakarta EE 11.

- [Eclipse Foundation: Jakarta EE Platform 11](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · 2.24 cambios/minimum Java SE 17;6 requisitos de tecnologías;6.30 Data 1.0;9 Profiles;9.7 requisitos de la plataforma completa · versión: Especificación final11.0, HTML oficial leído el 29-10-2026. La plataforma completa se distingue de Core Profile y Web Profile; los requisitos de implementación no garantizan que cualquier binario funcione con cualquier JDK · comprobado: 2026-10-29

Partida: `84531e25d00fc606e277596fb131795b4d974271b1209a067b0b21585d7b1232` · propuesta: `ae4933c65a4802f4fc0cc735d61e217b37aa44879a22401ba4a5a225d4bf9dfc`

## MAN-GSI-P15-122

Decisión: pending_review · acción: revise.

Motivo: Conservar Core Profile, Web Profile, Platform y clave D; distinguir perfiles y plataforma completa con distractores que usan especificaciones reales próximas.

### Antes

¿Qué perfiles forman la estructura de Jakarta EE 11?

- A. Servlet, JDBC y JVM como únicos perfiles.
- B. Desktop, Mobile y Cloud.
- C. Basic, Pro y Enterprise.
- D. Core Profile, Web Profile y Platform. **(correcta)**

Explicación: Core Profile, Web Profile y Platform. Los perfiles agrupan conjuntos de especificaciones para distintos tipos de aplicación.

### Propuesta

¿Qué conjunto identifica los dos perfiles normativos y la plataforma completa de Jakarta EE 11?

- A. Core Profile, Web Profile y Servlet.
- B. Core Profile, Platform y Persistence.
- C. Web Profile, Servlet y Persistence.
- D. Core Profile, Web Profile y Platform. **(correcta)**

Explicación: Jakarta EE 11 distingue las especificaciones Core Profile y Web Profile de la plataforma completa, Platform. Los perfiles reúnen subconjuntos normativos de tecnologías para determinados ámbitos; no son ediciones comerciales. Platform no debe presentarse como un tercer perfil definido por el capítulo de perfiles: es la especificación de la plataforma completa.

- Error A: Incluye los dos perfiles, pero Servlet es una especificación individual y no identifica la plataforma completa.
- Error B: Persistence es una especificación de persistencia, no sustituye al Web Profile que falta en esa terna.
- Error C: Servlet y Persistence son especificaciones individuales; esa terna no identifica Core Profile y la plataforma completa.

- [Eclipse Foundation: Jakarta EE Platform 11](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · 2.24 cambios/minimum Java SE 17;6 requisitos de tecnologías;6.30 Data 1.0;9 Profiles;9.7 requisitos de la plataforma completa · versión: Especificación final11.0, HTML oficial leído el 29-10-2026. La plataforma completa se distingue de Core Profile y Web Profile; los requisitos de implementación no garantizan que cualquier binario funcione con cualquier JDK · comprobado: 2026-10-29

Partida: `7b8ec0bf4d3da83ea414dddea2c0094f0b7161ebb2d56c488a1ca856750be05c` · propuesta: `da292953e9050ab146bab7a8992822be4c2d8cba038efe2471e52ee8498a9c64`

## MAN-GSI-P15-123

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y claveC; distinguir dependencias en ejecución y build con distractores ya próximos y bien delimitados.

### Antes

¿Qué función cumple CDI?

- A. Persistencia de entidades y relaciones mediante un contexto que las mapea al modelo almacenado en una base de datos.
- B. Creación de servicios REST a partir de recursos, anotaciones, negociación de contenido y clientes HTTP.
- C. Inyección de dependencias y gestión contextual del ciclo de vida de componentes. **(correcta)**
- D. Gestión de dependencias y ciclo de build de proyectos Java mediante un modelo declarativo y plugins.

Explicación: Inyección de dependencias y gestión contextual del ciclo de vida de componentes. CDI es el mecanismo moderno de DI/contextos en Jakarta EE.

### Propuesta

¿Qué función cumple CDI?

- A. Persistencia de entidades y relaciones mediante un contexto que las mapea al modelo almacenado en una base de datos.
- B. Creación de servicios REST a partir de recursos, anotaciones, negociación de contenido y clientes HTTP.
- C. Inyección de dependencias y gestión contextual del ciclo de vida de componentes. **(correcta)**
- D. Gestión de dependencias y ciclo de build de proyectos Java mediante un modelo declarativo y plugins.

Explicación: CDI proporciona inyección de dependencias y gestión contextual de instancias, con resolución por tipos y cualificadores y ciclos de vida asociados a ámbitos. Los componentes pueden colaborar sin construir directamente todas sus dependencias. No es el gestor de dependencias del build ni la API de persistencia o de recursos REST; estas tecnologías pueden integrarse con CDI.

- Error A: El contexto de persistencia y el mapeo de entidades corresponden a Jakarta Persistence, no al cometido principal de CDI.
- Error B: Recursos y anotaciones para servicios REST corresponden a Jakarta REST; usar CDI en esos recursos no identifica ambas especificaciones.
- Error D: El modelo declarativo de build y sus plugins describe una herramienta como Maven; CDI resuelve dependencias de componentes en su entorno de ejecución.

- [Eclipse Foundation: Jakarta Contexts and Dependency Injection 4.1](https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1.html) · 2.1 funcionalidades del contenedor;5 Dependency injection and lookup;6 Scopes and contexts;7 Lifecycle of contextual instances · versión: Versión 4.1, HTML oficial leído el 29-10-2026. DI y contextos de componentes distintos de dependencias del build, ORM o API REST · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Persistence 3.2](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · 3.1–3.2 EntityManager/contexto;4 y4.1 JPQL;6.1 Criteria;7.3 EntityManagerFactory; B.1/B.2 interfaces;11 metadatos ORM · versión: Versión 3.2 final en HTML oficial, leída el 29-10-2026. Se distingue API, proveedor y esquema abstracto de entidades del esquema SQL físico · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta RESTful Web Services 4.0](https://jakarta.ee/specifications/restful-ws/4.0/jakarta-restful-ws-spec-4.0.html) · 1 Introduction;1.2 Goals;3 Resources;5 Client API;2.3 Publication · versión: 4.0.0 Final Release,03-04-2024 según metadatos, HTML oficial leído el 29-10-2026 y cotejado con índice4.0. El apartado1.1 conserva una referencia residual a3.2; no se usa para cambiar la versión del documento · comprobado: 2026-10-29
- [Apache Maven: Introduction](https://maven.apache.org/what-is-maven.html) · Introduction; Maven’s Objectives; Providing a uniform build system: POM y plugins · versión: Documentación pública leída el 29-10-2026, sin adoptar una versión o instalar herramientas. Dependencias del build distintas de inyección en ejecución · comprobado: 2026-10-29

Partida: `bb7a833f731fd1f790cb79c7fff3d80465d6b5f58c00c60c522eec7ff213eb3d` · propuesta: `883a9a2567b46d3858664d4b21e7f3b5cdc21788aa6925af8b486776e6ee96e7`

## MAN-GSI-P15-124

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y claveB; explicar responsabilidades y distinguir especificación/proveedor sin cambiar el concepto ORM.

### Antes

¿Qué especificación se ocupa del mapeo objeto-relacional en Jakarta EE?

- A. Jakarta Validation.
- B. Jakarta Persistence. **(correcta)**
- C. Jakarta REST.
- D. Jakarta Mail.

Explicación: Jakarta Persistence. Jakarta Persistence, heredera conceptual de JPA, define el modelo ORM de la plataforma.

### Propuesta

¿Qué especificación se ocupa del mapeo objeto-relacional en Jakarta EE?

- A. Jakarta Validation.
- B. Jakarta Persistence. **(correcta)**
- C. Jakarta REST.
- D. Jakarta Mail.

Explicación: Jakarta Persistence define persistencia de entidades Java, relaciones y metadatos de mapeo objeto-relacional, además del contexto y APIs para operar sobre ellas. Especificación e implementación son diferentes: un proveedor implementa sus contratos y traduce operaciones al almacenamiento. No debe confundirse con validar restricciones, exponer recursos HTTP o enviar correo.

- Error A: Jakarta Validation declara y comprueba restricciones sobre objetos o parámetros; no define el mapeo ORM.
- Error C: Jakarta REST define APIs para servicios REST; no administra por sí misma el contexto o mapeo de entidades.
- Error D: Jakarta Mail trata correo; no es la especificación de persistencia objeto-relacional.

- [Eclipse Foundation: Jakarta Persistence 3.2](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · 3.1–3.2 EntityManager/contexto;4 y4.1 JPQL;6.1 Criteria;7.3 EntityManagerFactory; B.1/B.2 interfaces;11 metadatos ORM · versión: Versión 3.2 final en HTML oficial, leída el 29-10-2026. Se distingue API, proveedor y esquema abstracto de entidades del esquema SQL físico · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Validation 3.1](https://jakarta.ee/specifications/bean-validation/3.1/jakarta-validation-spec-3.1.html) · 3.1 Constraint annotation;5 Constraint declaration and validation process;6.1 Validator API;8.2 NotNull;8.5 Min · versión: Versión 3.1, HTML oficial leído el 29-10-2026. Integer soportado por Min; null válido para Min y no para NotNull. Anotar no dispara validación en cada asignación · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta RESTful Web Services 4.0](https://jakarta.ee/specifications/restful-ws/4.0/jakarta-restful-ws-spec-4.0.html) · 1 Introduction;1.2 Goals;3 Resources;5 Client API;2.3 Publication · versión: 4.0.0 Final Release,03-04-2024 según metadatos, HTML oficial leído el 29-10-2026 y cotejado con índice4.0. El apartado1.1 conserva una referencia residual a3.2; no se usa para cambiar la versión del documento · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta EE Platform 11](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · 2.24 cambios/minimum Java SE 17;6 requisitos de tecnologías;6.30 Data 1.0;9 Profiles;9.7 requisitos de la plataforma completa · versión: Especificación final11.0, HTML oficial leído el 29-10-2026. La plataforma completa se distingue de Core Profile y Web Profile; los requisitos de implementación no garantizan que cualquier binario funcione con cualquier JDK · comprobado: 2026-10-29

Partida: `54e45357751962b6b36100c55b9a95ee9f2317af8d2e48e0f8effd6bb86d02e4` · propuesta: `e87ea69da616b392c88bb4d00aae26171c0da5c724c9ced9c1f656704426f240`

## MAN-GSI-P15-126

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y claveD; distractores ya distinguen SQL, Criteria y metadatos de consulta. Precisar que JPQL no agota todas las consultas de Persistence.

### Antes

¿Qué es JPQL?

- A. Un lenguaje relacional que consulta directamente tablas, columnas y funciones del esquema físico de la base de datos.
- B. Una API programática y tipada para construir consultas de entidades mediante objetos y expresiones en lugar de texto.
- C. Una declaración con nombre que almacena una consulta predefinida en metadatos para reutilizarla desde la aplicación.
- D. Un lenguaje de consulta orientado al modelo de entidades de Jakarta Persistence, no al esquema SQL físico directamente. **(correcta)**

Explicación: Un lenguaje de consulta orientado al modelo de entidades de Jakarta Persistence, no al esquema SQL físico directamente. JPQL opera sobre entidades y atributos, aunque el proveedor normalmente termina generando SQL.

### Propuesta

¿Qué es JPQL?

- A. Un lenguaje relacional que consulta directamente tablas, columnas y funciones del esquema físico de la base de datos.
- B. Una API programática y tipada para construir consultas de entidades mediante objetos y expresiones en lugar de texto.
- C. Una declaración con nombre que almacena una consulta predefinida en metadatos para reutilizarla desde la aplicación.
- D. Un lenguaje de consulta orientado al modelo de entidades de Jakarta Persistence, no al esquema SQL físico directamente. **(correcta)**

Explicación: JPQL es el lenguaje textual de consultas sobre entidades, su estado persistente y relaciones. Usa el esquema abstracto del modelo, no directamente nombres de tablas y columnas físicas. El proveedor puede traducirlo a SQL. Criteria es una API programática distinta; una consulta con nombre es una forma de declarar y reutilizar una consulta, no otro significado de JPQL. Persistence también admite consultas nativas separadamente.

- Error A: Consultar directamente tablas y columnas físicas describe SQL nativo, no el dominio abstracto de entidades de JPQL.
- Error B: Construir consultas mediante objetos y expresiones describe Criteria API; no es el lenguaje textual JPQL.
- Error C: La declaración con nombre organiza una consulta reutilizable y puede contener JPQL; no define el lenguaje en sí.

- [Eclipse Foundation: Jakarta Persistence 3.2](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · 3.1–3.2 EntityManager/contexto;4 y4.1 JPQL;6.1 Criteria;7.3 EntityManagerFactory; B.1/B.2 interfaces;11 metadatos ORM · versión: Versión 3.2 final en HTML oficial, leída el 29-10-2026. Se distingue API, proveedor y esquema abstracto de entidades del esquema SQL físico · comprobado: 2026-10-29

Partida: `0b073b84cca878f303572911ca55ac825abfcef8ab4413f743f1e8367f3f127f` · propuesta: `03b4b1c8fe3b2b0336927b9eac58d9864c06fd37db177bec2ae2066b38c8204f`

## MAN-GSI-P15-129

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y claveD; explicar integración y límites de seguridad, con tres distractores conceptualmente próximos.

### Antes

¿Qué ofrece Jakarta Security?

- A. La API de persistencia que mapea entidades Java a tablas y gestiona su ciclo de vida dentro de un contexto.
- B. El modelo de inyección de dependencias y contextos que administra beans, scopes, productores e interceptores.
- C. La API utilizada para crear servicios REST mediante recursos, anotaciones, negociación de contenido y clientes HTTP.
- D. APIs y mecanismos estandarizados de autenticación/autorización integrados con la plataforma. **(correcta)**

Explicación: APIs y mecanismos estandarizados de autenticación/autorización integrados con la plataforma. Security forma parte de la capa de seguridad de Jakarta EE; no debe confundirse con TLS o con el servidor concreto.

### Propuesta

¿Qué ofrece Jakarta Security?

- A. La API de persistencia que mapea entidades Java a tablas y gestiona su ciclo de vida dentro de un contexto.
- B. El modelo de inyección de dependencias y contextos que administra beans, scopes, productores e interceptores.
- C. La API utilizada para crear servicios REST mediante recursos, anotaciones, negociación de contenido y clientes HTTP.
- D. APIs y mecanismos estandarizados de autenticación/autorización integrados con la plataforma. **(correcta)**

Explicación: Jakarta Security estandariza mecanismos de autenticación, almacenes de identidad y acceso programático a información de seguridad e inspección de roles y acceso mediante SecurityContext. Se integra con el modelo del contenedor y con otras especificaciones de seguridad. No equivale aTLS, a un servidor concreto ni a una garantía automática de que todos los recursos estén correctamente protegidos.

- Error A: El ciclo de vida y mapeo de entidades es responsabilidad de Jakarta Persistence, no el propósito de Jakarta Security.
- Error B: La administración contextual e inyección de beans corresponde a CDI; Security puede usar beans sin convertirse en la especificación de CDI.
- Error C: Recursos, negociación de contenido y cliente HTTP para servicios REST corresponden a Jakarta REST, aunque esos servicios puedan protegerse con seguridad de plataforma.

- [Eclipse Foundation: Jakarta Security 4.0](https://jakarta.ee/specifications/security/4.0/jakarta-security-spec-4.0.html) · 2 HTTP Authentication Mechanism;3 Identity Store;4 Security Context, especialmente4.1–4.4 · versión: 4.0 Final,09-05-2024 según metadatos, HTML oficial leído el 29-10-2026. Se integra con seguridad del contenedor; no sustituye TLS ni todos los controles de una aplicación · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Contexts and Dependency Injection 4.1](https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1.html) · 2.1 funcionalidades del contenedor;5 Dependency injection and lookup;6 Scopes and contexts;7 Lifecycle of contextual instances · versión: Versión 4.1, HTML oficial leído el 29-10-2026. DI y contextos de componentes distintos de dependencias del build, ORM o API REST · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Persistence 3.2](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · 3.1–3.2 EntityManager/contexto;4 y4.1 JPQL;6.1 Criteria;7.3 EntityManagerFactory; B.1/B.2 interfaces;11 metadatos ORM · versión: Versión 3.2 final en HTML oficial, leída el 29-10-2026. Se distingue API, proveedor y esquema abstracto de entidades del esquema SQL físico · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta RESTful Web Services 4.0](https://jakarta.ee/specifications/restful-ws/4.0/jakarta-restful-ws-spec-4.0.html) · 1 Introduction;1.2 Goals;3 Resources;5 Client API;2.3 Publication · versión: 4.0.0 Final Release,03-04-2024 según metadatos, HTML oficial leído el 29-10-2026 y cotejado con índice4.0. El apartado1.1 conserva una referencia residual a3.2; no se usa para cambiar la versión del documento · comprobado: 2026-10-29

Partida: `7d7a9ddac9c77bfa1661edd48fdc578383651f711689cd34b4c2b5cdd136a4a1` · propuesta: `c8a9aae86eff287b1e9f186b5d1cda329861fbe150e99dedd34f81b060830570`

## MAN-GSI-P15-130

Decisión: pending_review · acción: revise.

Motivo: Conservar finalidad de Jakarta Validation y claveA; microcaso con Integer y NotNull/Min que delimita nulabilidad, umbral e invocación de la validación.

### Antes

¿Qué finalidad tiene Jakarta Validation?

- A. Declarar y comprobar restricciones de validación sobre datos/beans. **(correcta)**
- B. Gestionar transacciones distribuidas.
- C. Administrar paquetes.
- D. Servir archivos estáticos.

Explicación: Declarar y comprobar restricciones de validación sobre datos/beans. Validation facilita reglas declarativas como límites, formatos y nulabilidad.

### Propuesta

Un bean declara @NotNull y @Min(18) en un campo Integer edad. Se pide comprobar esas restricciones antes de procesarlo. ¿Qué papel cumple Jakarta Validation?

- A. Declarar restricciones en objetos y comprobarlas mediante la API de validación. **(correcta)**
- B. Mapear atributos a columnas para gestionar el estado persistente de las entidades.
- C. Resolver dependencias por tipo y cualificador dentro de un contexto de ejecución.
- D. Delimitar transacciones para confirmar o revertir el acceso a recursos compartidos.

Explicación: Jakarta Validation permite declarar restricciones y comprobarlas mediante Validator o una integración que dispare la validación. En el ejemplo, NotNull rechaza null y Min(18) exige al menos 18 para Integer no nulo. Min por sí sola considera válido null. Las anotaciones no validan automáticamente cada asignación ni sustituyen mapeo ORM, inyección o transacciones.

- Error B: Mapear campos a columnas gestiona persistencia; no comprueba por sí solo las restricciones de bean descritas.
- Error C: Resolver dependencias y ámbitos es el cometido de CDI, no la validación de valores con NotNull y Min.
- Error D: Delimitar transacciones decide confirmación o reversión de trabajo; no define las restricciones declarativas sobre el campo.

- [Eclipse Foundation: Jakarta Validation 3.1](https://jakarta.ee/specifications/bean-validation/3.1/jakarta-validation-spec-3.1.html) · 3.1 Constraint annotation;5 Constraint declaration and validation process;6.1 Validator API;8.2 NotNull;8.5 Min · versión: Versión 3.1, HTML oficial leído el 29-10-2026. Integer soportado por Min; null válido para Min y no para NotNull. Anotar no dispara validación en cada asignación · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Persistence 3.2](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · 3.1–3.2 EntityManager/contexto;4 y4.1 JPQL;6.1 Criteria;7.3 EntityManagerFactory; B.1/B.2 interfaces;11 metadatos ORM · versión: Versión 3.2 final en HTML oficial, leída el 29-10-2026. Se distingue API, proveedor y esquema abstracto de entidades del esquema SQL físico · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Contexts and Dependency Injection 4.1](https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1.html) · 2.1 funcionalidades del contenedor;5 Dependency injection and lookup;6 Scopes and contexts;7 Lifecycle of contextual instances · versión: Versión 4.1, HTML oficial leído el 29-10-2026. DI y contextos de componentes distintos de dependencias del build, ORM o API REST · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Transactions 2.0](https://jakarta.ee/specifications/transactions/2.0/jakarta-transactions-spec-2.0.html) · 1 Introduction;3 Jakarta Transactions API;3.1 UserTransaction;3.7 Transactional · versión: 2.0 Final Release,08-10-2020 según cabecera, HTML leído el 29-10-2026. Es la versión referenciada en Jakarta EE 11; no se inventa una edición 2.1 · comprobado: 2026-10-29

Partida: `ae0846243c420a055d876e6774d74910b9ff8b6fddf6c00a0bcfdef35fa79d72` · propuesta: `fc33c8f64fef73bd0154af546ed191d7ee208059ec9aebf46029280ddd39df02`

## MAN-GSI-P15-131

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y claveA; distinguir API web base, contenedor, REST, Faces y CDI con alternativas ya plausibles.

### Antes

¿Qué es Jakarta Servlet?

- A. La especificación base para componentes web que procesan peticiones/respuestas HTTP en el contenedor web. **(correcta)**
- B. La especificación para construir servicios REST mediante recursos, anotaciones, negociación de contenido y clientes HTTP.
- C. El framework de componentes de interfaz web de servidor que gestiona vistas, componentes y ciclo de vida de la página.
- D. El estándar CDI para inyectar dependencias y gestionar beans, ámbitos, productores e interceptores dentro del contenedor.

Explicación: La especificación base para componentes web que procesan peticiones/respuestas HTTP en el contenedor web. Servlet sigue siendo una pieza fundamental del stack web Jakarta.

### Propuesta

¿Qué es Jakarta Servlet?

- A. La especificación base para componentes web que procesan peticiones/respuestas HTTP en el contenedor web. **(correcta)**
- B. La especificación para construir servicios REST mediante recursos, anotaciones, negociación de contenido y clientes HTTP.
- C. El framework de componentes de interfaz web de servidor que gestiona vistas, componentes y ciclo de vida de la página.
- D. El estándar CDI para inyectar dependencias y gestionar beans, ámbitos, productores e interceptores dentro del contenedor.

Explicación: Jakarta Servlet define componentes web gestionados por un contenedor y los contratos de petición, respuesta y ciclo de vida. Http Servlet especializa ese modelo para HTTP. La API no es por sí misma un servidor concreto. REST y Faces pueden apoyarse en el entorno Servlet, pero añaden modelos de recursos o interfaz de usuario diferentes;CDI cubre dependencias y contextos.

- Error B: Recursos y cliente de servicios REST describen Jakarta REST, un modelo de API distinto aunque pueda ejecutarse en un contenedor Servlet.
- Error C: Componentes UI, vistas y ciclo de vida de página describen Jakarta Faces, no la API base Servlet.
- Error D: Inyección y gestión contextual de beans describen CDI; no definen el contrato de petición/respuesta Servlet.

- [Eclipse Foundation: Jakarta Servlet 6.1](https://jakarta.ee/specifications/servlet/6.1/jakarta-servlet-spec-6.1.html) · 1.1 What is a Servlet?;1.2 What is a Servlet Container?;2.3.3 Request Handling · versión: Versión 6.1, HTML oficial leído el 29-10-2026. Se distingue la API de componentes web del producto contenedor y de la certificación de una plataforma/perfil · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta RESTful Web Services 4.0](https://jakarta.ee/specifications/restful-ws/4.0/jakarta-restful-ws-spec-4.0.html) · 1 Introduction;1.2 Goals;3 Resources;5 Client API;2.3 Publication · versión: 4.0.0 Final Release,03-04-2024 según metadatos, HTML oficial leído el 29-10-2026 y cotejado con índice4.0. El apartado1.1 conserva una referencia residual a3.2; no se usa para cambiar la versión del documento · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Faces 4.1](https://jakarta.ee/specifications/faces/4.1/jakarta-faces-4.1.html) · 1 Overview;2 Request Processing Lifecycle;3 User Interface Component Model · versión: 4.1 Final,07-05-2024 según cabecera, HTML oficial leído el 29-10-2026. Componentes UI y ciclo de vida en servidor, con posibles interacciones del cliente · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Contexts and Dependency Injection 4.1](https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1.html) · 2.1 funcionalidades del contenedor;5 Dependency injection and lookup;6 Scopes and contexts;7 Lifecycle of contextual instances · versión: Versión 4.1, HTML oficial leído el 29-10-2026. DI y contextos de componentes distintos de dependencias del build, ORM o API REST · comprobado: 2026-10-29

Partida: `a7dd82ee2fd6c1f0f2622e728f3ff4380d02bd0aadd6d7dc7a02cbf576b66712` · propuesta: `b8db2f475928969c2687c0ea76fb61a9a7f805a59bccfb00294e5cf6195f77af`

## MAN-GSI-P15-132

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y claveB; completar el alcance de UI y explicar cada tecnología próxima sin convertirla en un supuesto artificial.

### Antes

¿Qué es Jakarta Faces?

- A. El modelo de inyección de dependencias y gestión contextual de componentes mediante beans, scopes e interceptores.
- B. Un framework de componentes de interfaz web del lado servidor incluido en el ámbito de Jakarta EE. **(correcta)**
- C. La especificación base de componentes web que reciben peticiones HTTP y producen respuestas dentro del contenedor.
- D. La API de persistencia que relaciona entidades Java con tablas y administra su ciclo de vida en un contexto.

Explicación: Un framework de componentes de interfaz web del lado servidor incluido en el ámbito de Jakarta EE. Faces es una tecnología de UI; no es el mecanismo de DI ni el runtime.

### Propuesta

¿Qué es Jakarta Faces?

- A. El modelo de inyección de dependencias y gestión contextual de componentes mediante beans, scopes e interceptores.
- B. Un framework de componentes de interfaz web del lado servidor incluido en el ámbito de Jakarta EE. **(correcta)**
- C. La especificación base de componentes web que reciben peticiones HTTP y producen respuestas dentro del contenedor.
- D. La API de persistencia que relaciona entidades Java con tablas y administra su ciclo de vida en un contexto.

Explicación: Jakarta Faces es un framework de interfaz de usuario para aplicaciones web Java basado en componentes y un ciclo de procesamiento en servidor. Maneja vistas, eventos y estado de UI y puede integrar validación y llamadas del cliente. No es el mecanismo general deDI, la API base de peticiones Servlet ni la especificación de persistencia.

- Error A: Beans, ámbitos e inyección contextual corresponden a CDI; Faces puede integrarse con CDI sin ser la misma especificación.
- Error C: El contrato base de componentes que reciben peticiones y producen respuestas corresponde a Servlet; Faces agrega un modelo de UI y su ciclo.
- Error D: El mapeo y ciclo de vida de entidades en un contexto corresponden a Persistence, no al framework UI.

- [Eclipse Foundation: Jakarta Faces 4.1](https://jakarta.ee/specifications/faces/4.1/jakarta-faces-4.1.html) · 1 Overview;2 Request Processing Lifecycle;3 User Interface Component Model · versión: 4.1 Final,07-05-2024 según cabecera, HTML oficial leído el 29-10-2026. Componentes UI y ciclo de vida en servidor, con posibles interacciones del cliente · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Contexts and Dependency Injection 4.1](https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1.html) · 2.1 funcionalidades del contenedor;5 Dependency injection and lookup;6 Scopes and contexts;7 Lifecycle of contextual instances · versión: Versión 4.1, HTML oficial leído el 29-10-2026. DI y contextos de componentes distintos de dependencias del build, ORM o API REST · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Servlet 6.1](https://jakarta.ee/specifications/servlet/6.1/jakarta-servlet-spec-6.1.html) · 1.1 What is a Servlet?;1.2 What is a Servlet Container?;2.3.3 Request Handling · versión: Versión 6.1, HTML oficial leído el 29-10-2026. Se distingue la API de componentes web del producto contenedor y de la certificación de una plataforma/perfil · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Persistence 3.2](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · 3.1–3.2 EntityManager/contexto;4 y4.1 JPQL;6.1 Criteria;7.3 EntityManagerFactory; B.1/B.2 interfaces;11 metadatos ORM · versión: Versión 3.2 final en HTML oficial, leída el 29-10-2026. Se distingue API, proveedor y esquema abstracto de entidades del esquema SQL físico · comprobado: 2026-10-29

Partida: `aee02ad07514ef824f1a64bc76ae1fe1198212a6be1f1c63a994e62949920581` · propuesta: `e6bfa2397ca7e5830cb078159cc62fb525957531193e7776cb204557504f38ac`

## MAN-GSI-P15-133

Decisión: pending_review · acción: revise.

Motivo: Conservar aporte deData 1.0 enEE11 y claveD; tres distractores de niveles próximos de acceso a datos en lugar de afirmaciones extremas.

### Antes

¿Qué incorpora Jakarta Data 1.0 en Jakarta EE 11?

- A. Un motor de base de datos integrado obligatoriamente en todo runtime Jakarta EE 11 para almacenar repositorios.
- B. Una sustitución completa de Jakarta Persistence que elimina entidades, contexto de persistencia y consultas existentes.
- C. Un dialecto SQL nuevo y exclusivo que las aplicaciones deben utilizar en lugar de repositorios o abstracciones Java.
- D. Una especificación para facilitar acceso a datos mediante repositorios y abstracciones estandarizadas. **(correcta)**

Explicación: Una especificación para facilitar acceso a datos mediante repositorios y abstracciones estandarizadas. Jakarta Data entra en Jakarta EE 11 como nueva especificación para patrones de acceso a datos.

### Propuesta

¿Qué incorpora Jakarta Data 1.0 en Jakarta EE 11?

- A. Una API de bajo nivel que envía SQL y recorre filas y columnas de resultados.
- B. Un modelo ORM que mapea entidades y administra su contexto de persistencia.
- C. Una API de expresiones que construye consultas programáticamente sobre entidades.
- D. Repositorios y abstracciones estandarizadas para facilitar el acceso a datos. **(correcta)**

Explicación: Jakarta Data 1.0 incorpora un modelo de repositorios para simplificar acceso a datos, con operaciones y consultas declaradas a través de interfaces y otras abstracciones. Jakarta EE 11 la añade a la plataforma completa. No obliga a un motor de base de datos concreto, no elimina Persistence ni convierte todos los accesos en SQL escrito por el cliente. Sus integraciones y capacidades dependen del contrato aplicable.

- Error A: Enviar SQL y recorrer filas describe un acceso de nivel JDBC; no es la abstracción de repositorios que aporta Jakarta Data.
- Error B: Entidades, mapeo ORM y contexto describen Jakarta Persistence, que Data puede complementar en lugar de sustituir.
- Error C: Construir consultas mediante expresiones corresponde a Criteria API de Persistence; no identifica el modelo de repositorios de Jakarta Data.

- [Eclipse Foundation: Jakarta Data 1.0](https://jakarta.ee/specifications/data/1.0/jakarta-data-1.0.html) · 1 Introduction/1.1 Goals;2.1 Repositories in Jakarta Data;4 Repository Interfaces;7 Integration · versión: Versión 1.0, HTML oficial leído el 29-10-2026, contrastado con Platform 11§6.30. Repositorios para acceso a datos; no motor de base de datos o sustitución de Persistence · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta EE Platform 11](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · 2.24 cambios/minimum Java SE 17;6 requisitos de tecnologías;6.30 Data 1.0;9 Profiles;9.7 requisitos de la plataforma completa · versión: Especificación final11.0, HTML oficial leído el 29-10-2026. La plataforma completa se distingue de Core Profile y Web Profile; los requisitos de implementación no garantizan que cualquier binario funcione con cualquier JDK · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Persistence 3.2](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · 3.1–3.2 EntityManager/contexto;4 y4.1 JPQL;6.1 Criteria;7.3 EntityManagerFactory; B.1/B.2 interfaces;11 metadatos ORM · versión: Versión 3.2 final en HTML oficial, leída el 29-10-2026. Se distingue API, proveedor y esquema abstracto de entidades del esquema SQL físico · comprobado: 2026-10-29

Partida: `335d60efbee75d11c8701cffcc2698cc3c9de4c6e9f5961fc07b8374ba58e99f` · propuesta: `03b5803b3aa873bd0bd31832127674407618f339f2ed065add8ee5f00b9cc69f`

## MAN-GSI-P15-134

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción runtime/especificación y claveC; alternativas del ecosistema Java y certificación acotada por versión, perfil y JDK sin presentar todoWildFly como Platform 11.

### Antes

¿Cuál de estos es un runtime/servidor compatible con Jakarta EE, según versiones y certificación correspondientes?

- A. NuGet.
- B. Kestrel como implementación de Jakarta EE.
- C. WildFly, Payara, GlassFish u Open Liberty, entre otros. **(correcta)**
- D. MSBuild.

Explicación: WildFly, Payara, GlassFish u Open Liberty, entre otros. No debe confundirse la especificación Jakarta EE con sus implementaciones/runtime.

### Propuesta

¿Qué grupo reúne familias de servidores con implementaciones compatibles con Jakarta EE, según la versión y el perfil certificados?

- A. Apache Tomcat, Eclipse Jetty, Netty y Undertow.
- B. Spring Framework, Hibernate ORM, EclipseLink y Jersey.
- C. WildFly, Payara, Eclipse GlassFish y Open Liberty. **(correcta)**
- D. Maven, Gradle, Apache Ant y herramientas del JDK.

Explicación: Estas familias de servidores cuentan con resultados publicados de compatibilidad Jakarta EE para versiones y perfiles concretos. Debe comprobarse la fila de certificación y su JDK; el nombre comercial no certifica todas las versiones. Por ejemplo, el catálogo distingue WildFly en Platform 10 y Core Profile 11, sin extrapolar automáticamente a Platform 11. Se distingue un runtime de una biblioteca, un contenedor Servlet aislado o herramientas de construcción.

- Error A: La lista reúne infraestructura HTTP o Servlet; ofrecer HTTP/Servlet no acredita por sí mismo compatibilidad con un perfil o plataforma Jakarta EE completos.
- Error B: Son frameworks o implementaciones de tecnologías parciales; la lista no identifica por sí sola servidores certificados de la plataforma o sus perfiles.
- Error D: Son herramientas para construir o trabajar con Java; no constituyen por sí mismas un runtime certificado Jakarta EE.

- [Eclipse Foundation: resultados de compatibilidad Jakarta EE 10](https://jakarta.ee/compatibility/certification/10/) · Jakarta EE 10 Platform Compatible Products y Web Profile: filas de WildFly, Payara, Eclipse GlassFish y Open Liberty, con versiones y Java asociados · versión: Catálogo público consultado el 29-10-2026. Evidencia por producto/versión/perfil, no certificación de todas sus versiones o configuraciones · comprobado: 2026-10-29
- [Eclipse Foundation: resultados de compatibilidad Jakarta EE 11](https://jakarta.ee/compatibility/certification/11/) · Platform, Web Profile y Core Profile Compatible Products: distinción de ámbitos y filas de implementaciones · versión: Catálogo público consultado el 29-10-2026. WildFly figura en Core Profile 11; no se extrapola automáticamente a Platform 11. Marcas comerciales del catálogo pueden diferir de nombres históricos · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta Servlet 6.1](https://jakarta.ee/specifications/servlet/6.1/jakarta-servlet-spec-6.1.html) · 1.1 What is a Servlet?;1.2 What is a Servlet Container?;2.3.3 Request Handling · versión: Versión 6.1, HTML oficial leído el 29-10-2026. Se distingue la API de componentes web del producto contenedor y de la certificación de una plataforma/perfil · comprobado: 2026-10-29
- [Apache Maven: Introduction](https://maven.apache.org/what-is-maven.html) · Introduction; Maven’s Objectives; Providing a uniform build system: POM y plugins · versión: Documentación pública leída el 29-10-2026, sin adoptar una versión o instalar herramientas. Dependencias del build distintas de inyección en ejecución · comprobado: 2026-10-29

Partida: `e914c9bc5385053768f7e7e8c567914744d2d19d751d49dca7847c14fa592e3f` · propuesta: `1631288d3bc8051288870c50ed1fc983fa3d6610e2ffe50153a23e1f9b37dfa2`
