# GSI A2 — BLOQUE III — Resumen maestro de repaso

Manual de desarrollo de sistemas para GSI A2. Está pensado para estudiar teoría y, a la vez, convertirla en decisiones justificadas en el segundo ejercicio.

**Estructura de cada tema:** núcleo de estudio → claves de test → enfoque de supuesto → actualización cuando sea necesaria → fuentes base. El BOE vigente prevalece sobre cualquier apunte o mapeo antiguo.

## III.01 — Ciclo de vida de sistemas y modelos de ciclo de vida

### Núcleo de estudio

El ciclo de vida estructura actividades desde necesidad y viabilidad hasta retirada: planificación, requisitos, análisis/diseño, construcción, pruebas, implantación, operación, mantenimiento y retirada, con variaciones según modelo. Cascada avanza por fases secuenciales y funciona mejor con requisitos estables; iterativo refina en ciclos; incremental entrega funcionalidad por partes; espiral añade gestión explícita del riesgo; prototipado reduce incertidumbre; enfoques ágiles entregan incrementos frecuentes y realimentación. DevOps extiende la colaboración hacia operación y automatización. Elige modelo según incertidumbre, criticidad, regulación, tamaño, dependencias y necesidad de entrega temprana.

### Claves de test

Iterativo no equivale a incremental; prototipo puede ser desechable o evolutivo; mantenimiento forma parte del ciclo de vida; ágil no elimina documentación ni arquitectura. Espiral está orientado a riesgos.

### Enfoque para supuesto práctico

En supuesto define fases, entregables, gates, pruebas y despliegues. Si hay requisitos inciertos, propone iteración/prototipos; si hay alta regulación, refuerza trazabilidad y documentación aun usando ágil.

### Fuentes base del material

A1 086. Correspondencia DIRECTA.

## III.02 — Gestión y planificación del desarrollo. Metodologías

### Núcleo de estudio

Planificar implica alcance, EDT/WBS, recursos, estimaciones, dependencias, calendario, riesgos, calidad, comunicaciones y seguimiento. Gantt visualiza tareas en el tiempo; PERT/CPM ayuda con dependencias y ruta crítica. En enfoques tradicionales se definen fases y entregables; Scrum organiza trabajo en producto/backlog, sprints y roles Product Owner, Scrum Master y Developers; Kanban visualiza flujo y limita WIP. La gestión ágil usa valor, feedback, priorización y métricas de flujo/velocidad con cautela. Metodologías de desarrollo deben conectarse con arquitectura, pruebas, configuración y despliegue. Métrica v3 puede estudiarse como referencia histórica de la Administración, pero el programa vigente ya no la cita expresamente.

### Claves de test

Ruta crítica, holgura, dependencia y hito son conceptos distintos. Scrum no tiene “jefe de proyecto” como rol oficial; sprint backlog deriva de product backlog; velocity no compara equipos. Kanban no prescribe sprints.

### Enfoque para supuesto práctico

En supuesto propone gobernanza, planificación por entregas, riesgos, responsables, control de cambios y métricas. Justifica metodología híbrida si regulación y contratación requieren hitos formales pero desarrollo necesita iteración.

### Actualización 2026

Actualización 2026: el BOE vigente habla de metodologías de desarrollo y ya no menciona Métrica de forma expresa.

### Fuentes base del material

A1 088 + 037 + 036. A1 095 Métrica v3 solo como apoyo histórico.

## III.03 — Determinación y especificación de requisitos

### Núcleo de estudio

Requisitos funcionales describen comportamientos; no funcionales imponen cualidades/restricciones como seguridad, rendimiento, disponibilidad, accesibilidad o mantenibilidad. Elicitación: entrevistas, talleres, observación, cuestionarios, análisis documental, sistemas existentes, prototipos, historias de usuario y casos de uso. Un buen requisito es necesario, claro, verificable, trazable, consistente y factible. La especificación SRS debe organizar alcance, actores, interfaces, reglas, datos, requisitos funcionales/no funcionales, restricciones y criterios de aceptación. La trazabilidad enlaza necesidad-requisito-diseño-prueba. Prototipos ayudan a validar UX y requisitos, pero no sustituyen el análisis.

### Claves de test

Requisito no funcional no significa “opcional”; caso de uso ≠ historia de usuario; criterio de aceptación debe poder verificarse; trazabilidad bidireccional ayuda a impacto de cambios. ISO/IEC/IEEE 29148 es una referencia moderna de ingeniería de requisitos.

### Enfoque para supuesto práctico

En supuesto identifica actores y objetivos, lista requisitos prioritarios, NFR medibles, interfaces, datos y restricciones legales; añade matriz de trazabilidad y validación con usuarios.

### Fuentes base del material

A1 088 + 094 + 091 y material de análisis funcional.

## III.04 — Modelado de datos, modelo relacional, normalización y concurrencia

### Núcleo de estudio

Desde requisitos se construye modelo conceptual (entidades, atributos, relaciones), lógico (tablas, claves, restricciones) y físico (tipos, índices, particiones, almacenamiento). Normalización reduce redundancia y anomalías: 1FN elimina grupos repetitivos/valores no atómicos; 2FN elimina dependencias parciales respecto de clave compuesta; 3FN elimina dependencias transitivas de atributos no clave; BCNF endurece determinantes. En concurrencia domina ACID, bloqueos, MVCC, niveles de aislamiento y anomalías: lectura sucia, no repetible y fantasma. Deadlock se gestiona por prevención/detección/rollback. Diseña integridad de entidad, referencial y de dominio.

### Claves de test

Clave candidata ≠ primaria; índice no es una restricción de unicidad salvo configuración; normalizar no significa llevar siempre a forma máxima; serializable ofrece mayor aislamiento con coste. Optimista y pesimista son estrategias de concurrencia diferentes.

### Enfoque para supuesto práctico

En supuesto incluye diagrama conceptual, tablas/claves, índices y transacciones críticas; justifica aislamiento y consistencia según negocio. Si hay alta concurrencia, menciona locking/MVCC y estrategia de recuperación.

### Fuentes base del material

A1 063 + 064 + 089. Correspondencia muy directa.

## III.05 — TAD, estructuras de datos, ficheros, algoritmos e Inteligencia Artificial

### Núcleo de estudio

Tema complementario clave. Un tipo abstracto de datos define valores y operaciones independientemente de implementación. Estructuras: array/lista, pila LIFO, cola FIFO, lista enlazada, tabla hash, árbol, heap y grafo. Evalúa operaciones con complejidad Big-O: acceso, inserción, búsqueda. Búsqueda lineal O(n); binaria O(log n) exige datos ordenados. Ordenación: burbuja/selección/inserción típicamente O(n²); merge sort y heap sort O(n log n); quicksort promedio O(n log n). Ficheros: organización secuencial, indexada, directa/hash. IA: búsqueda y representación de conocimiento, aprendizaje automático supervisado/no supervisado/refuerzo, redes neuronales/deep learning, NLP, visión, sistemas generativos; diferencia entrenamiento e inferencia, modelo y algoritmo, precisión y sesgo.

### Claves de test

Pila LIFO y cola FIFO; árbol binario de búsqueda no garantiza equilibrio; hash puede colisionar; búsqueda binaria requiere orden. Big-O expresa crecimiento asintótico, no tiempo exacto. IA ≠ solo ML; deep learning es subconjunto de ML.

### Enfoque para supuesto práctico

En supuesto elige estructura/algoritmo por volumen y operaciones; para IA define objetivo, datos, calidad, métricas, explicabilidad, seguridad, privacidad, sesgo y supervisión humana. No propongas IA sin necesidad medible.

### Fuentes base del material

A1 070 + 071 + 076 como apoyo. Completar con estructuras/algoritmos e IA moderna. Tema COMPLEMENTAR.

## III.06 — Construcción, generación de código, despliegue, CI/CD, DevOps, documentación y formación

### Núcleo de estudio

Construcción abarca entorno de desarrollo, gestión de dependencias, compilación/build, análisis estático, empaquetado y artefactos reproducibles. Control de versiones con Git: repositorio, commit, branch, merge/rebase, tags y estrategias de ramas; revisión mediante pull/merge requests. Integración continua ejecuta build y pruebas frecuentes; entrega continua mantiene artefactos desplegables; despliegue continuo automatiza producción bajo controles. Pipeline típico: checkout, dependencias, build, test, SAST/SCA, empaquetado, firma/SBOM, registro, despliegue y validación. DevOps integra cultura, automatización, medición y colaboración; IaC y configuración declarativa mejoran reproducibilidad. Documentación: arquitectura, APIs, operaciones, instalación, seguridad, usuario y runbooks; formación adaptada a usuarios y técnicos.

### Claves de test

CI ≠ CD; entrega continua ≠ despliegue continuo; repositorio de código ≠ repositorio de artefactos; rollback y roll-forward son estrategias distintas. DevOps no es una herramienta ni elimina separación de responsabilidades/control.

### Enfoque para supuesto práctico

En supuesto diseña pipeline con quality gates, entornos, secretos, aprobaciones, artefactos inmutables, blue-green/canary/rolling, observabilidad y rollback. Incluye plan de formación y documentación viva.

### Fuentes base del material

A1 097 + 102 y RELEASE CI/CD. Tema COMPLEMENTAR por dispersión de fuentes.

## III.07 — Pruebas: planificación, documentación y datos de prueba

### Núcleo de estudio

Proceso de pruebas: estrategia/plan, diseño de casos, preparación de entorno/datos, ejecución, registro de defectos, re-prueba/regresión e informe. Niveles: unitarias, integración, sistema y aceptación. Técnicas de caja negra: particiones de equivalencia, valores límite, tablas de decisión, transición de estados; caja blanca: cobertura de sentencias, ramas y caminos con límites prácticos. Tipos no funcionales: rendimiento/carga/estrés, seguridad, compatibilidad, usabilidad, recuperación, accesibilidad. Hardware y procedimientos también pueden requerir pruebas. Datos de prueba deben ser representativos, controlados y preferentemente sintéticos/anonimizados si proceden de producción.

### Claves de test

Verificación pregunta si construimos correctamente; validación si construimos lo correcto. Error/defecto/fallo no son sinónimos estrictos. Smoke test valida estabilidad básica; regresión comprueba que cambios no rompen lo existente. 100% cobertura no garantiza ausencia de defectos.

### Enfoque para supuesto práctico

En supuesto crea matriz requisito-prueba, niveles, entorno similar a producción, automatización, rendimiento, seguridad, UAT y criterios de aceptación/salida. Trata datos personales en pruebas de forma explícita.

### Fuentes base del material

A1 096. Correspondencia DIRECTA.

## III.08 — Instalación, cambio, sustitución, post-implementación y mantenimiento

### Núcleo de estudio

Estrategias de conversión: directa/big bang, paralela, piloto y por fases. Directa es rápida pero arriesgada; paralela reduce riesgo a costa de coste/duplicidad; piloto limita alcance; fases permiten aprendizaje progresivo. Recepción incluye validación contractual/técnica, inventario, documentación y aceptación. Instalación requiere plan, ventanas, backups, rollback, comunicaciones y soporte reforzado. Post-implementación evalúa objetivos, incidencias, rendimiento, adopción y beneficios. Mantenimiento: correctivo, adaptativo, perfectivo/evolutivo y preventivo; gestiona deuda técnica, parches, obsolescencia y fin de soporte.

### Claves de test

Migración no es solo copiar datos; requiere transformación, reconciliación y validación. Piloto ≠ prototipo. Mantenimiento adaptativo responde al entorno; correctivo a defectos. Rollback debe probarse antes del cambio.

### Enfoque para supuesto práctico

En supuesto plantea plan de transición con dry-run, backup, freeze, sincronización, reconciliación, aceptación, rollback, hypercare y KPIs posteriores. Para legado, incluye convivencia e interfaces temporales.

### Fuentes base del material

A1 100 + 101 y materiales de migración/mantenimiento. Tema COMPLEMENTAR.

## III.09 — Análisis/diseño OO, Proceso Unificado, UML y patrones

### Núcleo de estudio

OO organiza software mediante objetos con estado y comportamiento. Conceptos: abstracción, encapsulación, herencia, polimorfismo, composición, interfaces, cohesión y acoplamiento. El Proceso Unificado es iterativo e incremental, dirigido por casos de uso y centrado en arquitectura; fases: inicio, elaboración, construcción y transición. UML es lenguaje de modelado, no metodología. Diagramas estructurales relevantes: clases, componentes, despliegue, paquetes; de comportamiento: casos de uso, actividad, estados, secuencia. Patrones GoF se agrupan en creacionales (Factory, Builder, Singleton...), estructurales (Adapter, Facade, Decorator...) y comportamiento (Strategy, Observer, Command...). Prioriza comprender intención y trade-offs.

### Claves de test

Herencia es relación “es-un”; composición “tiene-un”. UML no genera buen diseño por sí solo. Diagrama de secuencia muestra interacciones temporales; clases muestra estructura. Patrón ≠ framework ni algoritmo.

### Enfoque para supuesto práctico

En supuesto usa pocos diagramas pero informativos: contexto/casos de uso, componentes, despliegue, secuencia para integración. Aplica patrones solo si resuelven un problema explícito y justifica bajo acoplamiento/alta cohesión.

### Fuentes base del material

A1 089 + 090 + 092 + 093. Correspondencia DIRECTA.

## III.10 — Jakarta EE: arquitectura, componentes, herramientas, persistencia y seguridad

### Núcleo de estudio

Jakarta EE es la evolución abierta de Java EE para aplicaciones empresariales sobre Java. Arquitectura típica multicapa con web/API, servicios de negocio y persistencia gestionados por contenedor. Especificaciones relevantes: Servlet, RESTful Web Services, CDI, Persistence (JPA), Transactions, Validation, Security, Messaging, WebSocket, JSON-P/JSON-B y otras según perfil. Persistencia JPA mapea entidades a bases relacionales y usa contexto de persistencia/transacciones. CDI gestiona inyección y ciclo de vida. Seguridad integra autenticación/autorización con mecanismos del contenedor y aplicación. Servidores compatibles incluyen GlassFish, Payara, WildFly y Open Liberty, entre otros.

### Claves de test

Java EE y Jakarta EE cambian namespace de javax.\* a jakarta.\* desde Jakarta EE 9. Jakarta EE 11 es la plataforma final vigente en 2026 y requiere Java SE 17 o superior; añade Jakarta Data y elimina tecnologías antiguas del núcleo. JPA es especificación, Hibernate una implementación popular.

### Enfoque para supuesto práctico

En supuesto selecciona API REST, CDI, JPA, transacciones, seguridad, mensajería y despliegue; evita EJB pesado por inercia si no aporta valor. Separa estado, configura pools y observabilidad.

### Actualización 2026

Actualización 2026: Jakarta EE 11 es la versión final estable; Jakarta EE 12 está en desarrollo.

### Fuentes base del material

A1 067 + documentación oficial Jakarta EE.

## III.11 — .NET: modelo de programación, servicios, herramientas, persistencia y seguridad

### Núcleo de estudio

.NET es plataforma multiplataforma con runtime, bibliotecas, SDK y lenguajes como C#, F# y Visual Basic. CLR ejecuta código gestionado y ofrece GC, tipos, excepciones y JIT/AOT. ASP.NET Core desarrolla web/APIs; dependency injection y configuración están integradas. Entity Framework Core es ORM para persistencia; LINQ permite consultas integradas en lenguaje. Seguridad web se apoya en middleware de autenticación/autorización, Identity y protocolos estándares. Herramientas: .NET CLI, NuGet, Visual Studio/VS Code, testing y CI/CD. Diferencia .NET moderno de .NET Framework clásico ligado principalmente a Windows.

### Claves de test

IL/CIL no es código máquina final; CLR ≈ runtime administrado; NuGet gestiona paquetes; EF Core es ORM, no SGBD. .NET 10 es LTS vigente en 2026, mientras .NET 9 es STS. No confundir ASP.NET Core con IIS, aunque puedan integrarse.

### Enfoque para supuesto práctico

En supuesto plantea ASP.NET Core API/MVC, EF Core, DI, logging, configuración/secrets, Identity/OIDC, contenedores y pipeline. Justifica LTS para sistemas públicos de larga vida.

### Actualización 2026

Actualización 2026: .NET 10 LTS está soportado hasta noviembre de 2028.

### Fuentes base del material

A1 066 + documentación oficial Microsoft.

## III.12 — Aplicaciones web, servicios, interoperabilidad, seguridad, i18n y l10n

### Núcleo de estudio

Arquitectura web: navegador/cliente, servidor web/reverse proxy, aplicación/API, persistencia y servicios externos. Front-end usa HTML semántico, CSS responsive y JavaScript/TypeScript/frameworks; back-end expone lógica y datos. HTTP usa métodos, estados, cabeceras, caché y TLS; REST, SOAP y mensajería son opciones de integración. Seguridad: TLS, gestión de sesión/tokens, validación de entrada, codificación de salida, protección CSRF/XSS/SQLi, control de acceso, secretos, CSP y dependencias. OAuth 2.0 delega autorización y OpenID Connect añade identidad. Internacionalización (i18n) prepara software para múltiples idiomas/regiones; localización (l10n) adapta textos, formatos, moneda, zona horaria y contenido.

### Claves de test

GET debería ser seguro/idempotente; PUT suele ser idempotente, POST no necesariamente. CORS es política de navegador, no autenticación. JWT es formato de token, no protocolo de login. i18n ≠ l10n. SOAP puede usar WS-Security; REST suele apoyarse en HTTP/TLS y estándares de identidad.

### Enfoque para supuesto práctico

En supuesto define API contracts, gateway, auth, rate limit, validación, caché, CDN si procede, observabilidad y protección OWASP. Añade accesibilidad, responsive e internacionalización desde diseño.

### Fuentes base del material

A1 065 + 058 + 077 y RELEASE integración.

## III.13 — Calidad del software: modelos, métricas, normas y estándares

### Núcleo de estudio

Calidad debe definirse y medirse desde requisitos. ISO/IEC 25010:2023 actualiza el modelo de calidad de producto a nueve características: adecuación funcional, eficiencia de desempeño, compatibilidad, capacidad de interacción, fiabilidad, seguridad, mantenibilidad, flexibilidad y seguridad funcional/safety. Métricas pueden ser de producto (complejidad, defectos, cobertura), proceso (lead time, tasa de defectos, retrabajo) y servicio (disponibilidad, latencia, error rate), siempre vinculadas a objetivos. ISO 9001 aporta gestión de calidad organizativa; familia SQuaRE estructura evaluación de calidad de sistemas/software. Calidad interna, externa y en uso se relacionan pero no son idénticas.

### Claves de test

La edición ISO/IEC 25010:2011 tenía ocho características y quedó sustituida por la edición 2023. Cobertura de código no mide por sí sola calidad. Disponibilidad puede expresarse como tiempo disponible/tiempo total; fiabilidad no es solo rendimiento.

### Enfoque para supuesto práctico

En supuesto define atributos medibles: disponibilidad, p95 de respuesta, tasa de error, cobertura, vulnerabilidades, accesibilidad, mantenibilidad. Incluye quality gates y aceptación basada en SLA/SLO y pruebas.

### Actualización 2026

Actualización 2026: estudiar la edición ISO/IEC 25010:2023, no quedarse exclusivamente con el modelo 2011.

### Fuentes base del material

A1 103 es la fuente actual correcta; no usar A1 050 de mapeos antiguos. ISO/IEC 25010:2023.

## III.14 — Accesibilidad, diseño universal, usabilidad, UX y Guía de comunicación digital

### Núcleo de estudio

Accesibilidad busca que productos/servicios puedan ser utilizados por personas con capacidades diversas; diseño universal intenta que sean utilizables por el mayor número desde el origen. Usabilidad se centra en efectividad, eficiencia y satisfacción en contexto; UX abarca percepción y experiencia global antes, durante y después. En AAPP, RD 1112/2018 regula accesibilidad de sitios web y apps móviles del sector público. La referencia técnica europea se articula mediante EN 301 549 y criterios WCAG; WCAG 2.2 es la recomendación W3C más reciente, aunque el cumplimiento jurídico debe verificarse contra la versión armonizada aplicable. Principios WCAG: perceptible, operable, comprensible y robusto (POUR). La Guía de comunicación digital de la AGE aborda diseño, contenidos, identidad y accesibilidad.

### Claves de test

Accesibilidad no es solo contraste ni discapacidad visual; AA es el nivel habitual de referencia en web pública. Texto alternativo depende de función de imagen; teclado, foco, estructura semántica, formularios y errores son críticos. UX ≠ estética.

### Enfoque para supuesto práctico

En supuesto incorpora accesibilidad como requisito y criterio de aceptación: auditoría automática + manual, teclado, lector de pantalla, responsive, lenguaje claro, declaración de accesibilidad y pruebas con usuarios.

### Actualización 2026

Actualización 2026: WCAG 2.2 es recomendación W3C; no afirmar automáticamente que toda su versión sea requisito jurídico sin revisar estándar armonizado aplicable.

### Fuentes base del material

A1 044 + 094 + 133, RD 1112/2018, EN 301 549 y WCAG.

## III.15 — Minería de datos, OLAP, Big Data, Hadoop y NoSQL

### Núcleo de estudio

Minería de datos descubre patrones útiles mediante preparación, modelado y evaluación. Tareas: clasificación, regresión, clustering, reglas de asociación, detección de anomalías y reducción de dimensión. Flujo CRISP-DM: comprensión del negocio, datos, preparación, modelado, evaluación y despliegue. Big Data se caracteriza por volumen, velocidad, variedad y otras “V”; arquitecturas distribuidas separan almacenamiento y cómputo. Hadoop clásico incluye HDFS y MapReduce, con ecosistema; hoy convive con motores como Spark. NoSQL: clave-valor, documental, columna ancha y grafos; priorizan escalabilidad/modelos flexibles con distintos compromisos de consistencia. OLAP sigue siendo clave para analítica multidimensional.

### Claves de test

NoSQL no significa “sin SQL” ni ausencia de esquema; CAP aplica bajo particiones de red y expresa trade-offs entre consistencia y disponibilidad. MapReduce ≠ base de datos. Clasificación es supervisada; clustering normalmente no supervisado.

### Enfoque para supuesto práctico

En supuesto empieza por caso de uso y volumen real; define ingesta, lake/warehouse, procesamiento batch/stream, calidad, catálogo, seguridad, retención, BI/ML y gobierno. Evita Hadoop si una solución relacional cubre el problema.

### Fuentes base del material

A1 075 + 071 y materiales Big Data/IA del RELEASE.

## Fuentes oficiales de actualización

* [Programa oficial GSI A2 — BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262)
* [Jakarta EE 11 — especificación oficial](https://jakarta.ee/specifications/platform/11/)
* [.NET — releases y soporte](https://learn.microsoft.com/en-us/dotnet/core/releases-and-support)
* [ISO/IEC 25010:2023 — ficha oficial](https://www.iso.org/standard/78176.html)
* [WCAG 2.2 — W3C](https://www.w3.org/TR/WCAG22/)

Edición de trabajo GSI A2. Los materiales del otro proyecto GSI\_B1 no se han utilizado como fuente.
