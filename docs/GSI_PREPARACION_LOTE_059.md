# Preparación editorial GSI-EDITORIAL-059

Preparado y fuentes comprobadas el **29-10-2026**. **20 propuestas pendientes de aprobación expresa; ninguna aceptada, aplicada, activada o retirada en este lote.**

Hash canónico: `ef78b3b7d18079f667694031ac94ef93dbede1dfc8814714a86c2d8d9943feb6`. Base activa: `e3e20ab879518c899806a70575eead28b3b35e6f`.

[Ficha antes/después](GSI_REVISION_LOTE_059.md), [propuestas JSON](../content/question-reviews/lote-059.json) y [registro de preparación](../logs/gsi-editorial-059-preparation.json).

## Alcance y criterio

Posiciones **1161–1180** de la cola: **seis IA B3-T09 y catorce manuales B3-T10**. Casos de uso, cinco patrones GoF y contratos de Jakarta EE: entidades, transacciones, REST, Java mínimo, perfiles, CDI, ORM, JPQL, seguridad, validación, Servlet, Faces, Data y runtimes. Ninguna oficial.

Se conservan conceptos, IDs, claves, dificultad orientativa, procedencia y fuentes históricas. **Ocho manuales conservan íntegros enunciado y alternativas**: MAN-GSI-P15-127, MAN-GSI-P15-128, MAN-GSI-P15-123, MAN-GSI-P15-124, MAN-GSI-P15-126, MAN-GSI-P15-129, MAN-GSI-P15-131, MAN-GSI-P15-132. Las cinco aplicaciones de patrones mantienen sus nombres de opción originales. Se añaden veinte explicaciones correctas y sesenta justificaciones individuales de distractores por ID original y contenido, utilizables con cualquier orden de presentación.

**14 conceptuales y seis aplicaciones contextualizadas**: Adapter, Facade, Strategy, Observer, Command y validación de un campo Integer. El contexto delimita contratos, responsabilidades o límites; no se transforma cada definición en un supuesto ni se imponen cuotas al siguiente lote.

Se distingue inserción reutilizada de extensión con condición opcional; fachada de transacción; petición de ejecución exactamente una vez; y API de implementación certificada. En Jakarta EE se precisa que la plataforma completa no es un tercer perfil normativo, que Java SE17 es un mínimo de especificación y que Min acepta null mientras NotNull lo rechaza.

Las rúbricas expresan juicio del preparador, no aceptación del propietario, revisión independiente o dificultad calibrada. Las seis aceptaciones IA históricas mantienen sus hashes y no aceptan las nuevas versiones. Los estados heredados en after no activan las propuestas.

| ID | Clave original | Tipo | Formulación | Motivo |
| --- | --- | --- | --- | --- |
| AI-GSI-B3-T09-015 | B | Conceptual | Ajustada | Conservar diferencia include/extend y claveB; precisar independencia del caso extendido y condición opcional, evitando confundir ambas relaciones con orden de ejecución. |
| AI-GSI-B3-T09-016 | C | Aplicación | Ajustada | Conservar Adapter y claveC, manteniendo las alternativas originales; microcaso que hace explícitos contrato esperado y componente existente. |
| AI-GSI-B3-T09-017 | C | Aplicación | Ajustada | Conservar Facade y claveC, con alternativas originales; microcaso de acceso unificado sin atribuir transacciones automáticas. |
| AI-GSI-B3-T09-018 | D | Aplicación | Ajustada | Conservar Strategy y claveD, con alternativas originales; caso de políticas que conserva contrato y distingue resultado de intercambiabilidad. |
| AI-GSI-B3-T09-019 | C | Aplicación | Ajustada | Conservar Observer y claveC, con alternativas originales; caso con altas/bajas que delimita la relación sin prometer garantías de mensajería. |
| AI-GSI-B3-T09-020 | C | Aplicación | Ajustada | Conservar Command y claveC, con alternativas originales; caso de solicitud diferida sin equiparar patrón con cola durable o deshacer universal. |
| MAN-GSI-P15-125 | C | Conceptual | Ajustada | Conservar EntityManager y claveC; reemplazar términos ajenos de.NET por interfaces próximas de Persistence y concretar las operaciones preguntadas. |
| MAN-GSI-P15-127 | D | Conceptual | Conservada | Conservar íntegra formulación y claveD; ampliar evidencia de demarcación/coordinación y explicar cada tecnología alternativa. |
| MAN-GSI-P15-128 | B | Conceptual | Conservada | Conservar íntegra formulación y claveB; completar responsabilidades y distinguir API REST de transporte HTTP o tecnologías complementarias. |
| MAN-GSI-P15-121 | A | Conceptual | Ajustada | Conservar mínimoJava SE 17 y claveA; uniformar alternativas y distinguir requisito de especificación de compatibilidad de un producto concreto. |
| MAN-GSI-P15-122 | D | Conceptual | Ajustada | Conservar los conjuntosCore/Web/Platform y claveD; precisar el enunciado para no llamar tercer perfil a la plataforma completa. |
| MAN-GSI-P15-123 | C | Conceptual | Conservada | Conservar íntegra formulación y claveC; distinguir dependencias en ejecución y build con distractores ya próximos y bien delimitados. |
| MAN-GSI-P15-124 | B | Conceptual | Conservada | Conservar íntegra formulación y claveB; explicar responsabilidades y distinguir especificación/proveedor sin cambiar el conceptoORM. |
| MAN-GSI-P15-126 | D | Conceptual | Conservada | Conservar íntegra formulación y claveD; distractores ya distinguen SQL,Criteria y metadatos de consulta. Precisar queJPQL no agota todas las consultas de Persistence. |
| MAN-GSI-P15-129 | D | Conceptual | Conservada | Conservar íntegra formulación y claveD; explicar integración y límites de seguridad, con tres distractores conceptualmente próximos. |
| MAN-GSI-P15-130 | A | Aplicación | Ajustada | Conservar finalidad de Jakarta Validation y claveA; microcaso conInteger y NotNull/Min que delimita nulabilidad, umbral e invocación de la validación. |
| MAN-GSI-P15-131 | A | Conceptual | Conservada | Conservar íntegra formulación y claveA; distinguir API web base, contenedor,REST, Faces y CDI con alternativas ya plausibles. |
| MAN-GSI-P15-132 | B | Conceptual | Conservada | Conservar íntegra formulación y claveB; completar el alcance de UI y explicar cada tecnología próxima sin convertirla en un supuesto artificial. |
| MAN-GSI-P15-133 | D | Conceptual | Ajustada | Conservar aporte deData 1.0 enEE11 y claveD; tres distractores de niveles próximos de acceso a datos en lugar de afirmaciones extremas. |
| MAN-GSI-P15-134 | C | Conceptual | Ajustada | Conservar distinción runtime/especificación y claveC; alternativas del ecosistemaJava y certificación acotada por versión,perfil yJDK sin presentar todoWildFly comoPlatform 11. |

## Fuentes y localizadores

**16 URLs primarias comprobadas el 29-10-2026.** Se usan especificaciones oficiales HTML de Eclipse Foundation, resultados de certificación por versión/perfil, documentación Apache y dos PDF textuales: UML2.5.1 y vista previa del libro GoF. Se releen los apartados pertinentes del PDF UML previamente descargado y se coteja su hash; no se modifica o convierte un original del proyecto. No se atribuye inspección visual de figuras o auditoría completa de los documentos.

| Fuente | Localizadores y versión | Comprobación |
| --- | --- | --- |
| [OMG: Unified Modeling Language 2.5.1](https://www.omg.org/spec/UML/2.5.1/PDF) | 18.1.3.2 Extends y18.1.3.3 Includes, pp.640–641 impresas;18.1.4 notación, p.642. Formal/2017-12-05, diciembre 2017, PDF 796 páginas ya descargado de OMG y apartados leídos textualmente el 29-10-2026. Sin inspección visual de figuras | 2026-10-29 |
| [Gamma, Helm, Johnson y Vlissides: Design Patterns, vista previa](https://api.pageplace.de/preview/DT0400.9780321700742_A23552527/preview-9780321700742_A23552527.pdf) | Listas iniciales de propósitos: Adapter, Facade, Strategy, Observer y Command; catálogo 1.4 e índice de patrones. Libro Addison-Wesley, copyright 1995, impresión 37 de marzo 2009 según créditos; vista previa 42 páginas consultada textualmente el 29-10-2026. No se atribuye disponibilidad de los capítulos completos | 2026-10-29 |
| [GoF, extracto editorial: Adapter](https://www.informit.com/articles/article.aspx?p=1398600) | Class, Object Structural: Adapter; Intent y Motivation: convertir la interfaz existente en la esperada por el cliente. Extracto de los autores publicado por InformIT/Addison-Wesley, leído el 29-10-2026. Adaptar interfaz no equivale a cualquier envoltorio | 2026-10-29 |
| [Eclipse Foundation: Jakarta Persistence 3.2](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) | 3.1–3.2 EntityManager/contexto;4 y4.1 JPQL;6.1 Criteria;7.3 EntityManagerFactory; B.1/B.2 interfaces;11 metadatos ORM. Versión 3.2 final en HTML oficial, leída el 29-10-2026. Se distingue API, proveedor y esquema abstracto de entidades del esquema SQL físico | 2026-10-29 |
| [Eclipse Foundation: Jakarta Transactions 2.0](https://jakarta.ee/specifications/transactions/2.0/jakarta-transactions-spec-2.0.html) | 1 Introduction;3 Jakarta Transactions API;3.1 UserTransaction;3.7 Transactional. 2.0 Final Release,08-10-2020 según cabecera, HTML leído el 29-10-2026. Es la versión referenciada en Jakarta EE 11; no se inventa una edición 2.1 | 2026-10-29 |
| [Eclipse Foundation: Jakarta EE Platform 11](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) | 2.24 cambios/minimum Java SE 17;6 requisitos de tecnologías;6.30 Data 1.0;9 Profiles;9.7 requisitos de la plataforma completa. Especificación final11.0, HTML oficial leído el 29-10-2026. La plataforma completa se distingue de Core Profile y Web Profile; los requisitos de implementación no garantizan que cualquier binario funcione con cualquier JDK | 2026-10-29 |
| [Eclipse Foundation: Jakarta RESTful Web Services 4.0](https://jakarta.ee/specifications/restful-ws/4.0/jakarta-restful-ws-spec-4.0.html) | 1 Introduction;1.2 Goals;3 Resources;5 Client API;2.3 Publication. 4.0.0 Final Release,03-04-2024 según metadatos, HTML oficial leído el 29-10-2026 y cotejado con índice4.0. El apartado1.1 conserva una referencia residual a3.2; no se usa para cambiar la versión del documento | 2026-10-29 |
| [Eclipse Foundation: Jakarta Contexts and Dependency Injection 4.1](https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1.html) | 2.1 funcionalidades del contenedor;5 Dependency injection and lookup;6 Scopes and contexts;7 Lifecycle of contextual instances. Versión 4.1, HTML oficial leído el 29-10-2026. DI y contextos de componentes distintos de dependencias del build, ORM o API REST | 2026-10-29 |
| [Apache Maven: Introduction](https://maven.apache.org/what-is-maven.html) | Introduction; Maven’s Objectives; Providing a uniform build system: POM y plugins. Documentación pública leída el 29-10-2026, sin adoptar una versión o instalar herramientas. Dependencias del build distintas de inyección en ejecución | 2026-10-29 |
| [Eclipse Foundation: Jakarta Validation 3.1](https://jakarta.ee/specifications/bean-validation/3.1/jakarta-validation-spec-3.1.html) | 3.1 Constraint annotation;5 Constraint declaration and validation process;6.1 Validator API;8.2 NotNull;8.5 Min. Versión 3.1, HTML oficial leído el 29-10-2026. Integer soportado por Min; null válido para Min y no para NotNull. Anotar no dispara validación en cada asignación | 2026-10-29 |
| [Eclipse Foundation: Jakarta Security 4.0](https://jakarta.ee/specifications/security/4.0/jakarta-security-spec-4.0.html) | 2 HTTP Authentication Mechanism;3 Identity Store;4 Security Context, especialmente4.1–4.4. 4.0 Final,09-05-2024 según metadatos, HTML oficial leído el 29-10-2026. Se integra con seguridad del contenedor; no sustituye TLS ni todos los controles de una aplicación | 2026-10-29 |
| [Eclipse Foundation: Jakarta Servlet 6.1](https://jakarta.ee/specifications/servlet/6.1/jakarta-servlet-spec-6.1.html) | 1.1 What is a Servlet?;1.2 What is a Servlet Container?;2.3.3 Request Handling. Versión 6.1, HTML oficial leído el 29-10-2026. Se distingue la API de componentes web del producto contenedor y de la certificación de una plataforma/perfil | 2026-10-29 |
| [Eclipse Foundation: Jakarta Faces 4.1](https://jakarta.ee/specifications/faces/4.1/jakarta-faces-4.1.html) | 1 Overview;2 Request Processing Lifecycle;3 User Interface Component Model. 4.1 Final,07-05-2024 según cabecera, HTML oficial leído el 29-10-2026. Componentes UI y ciclo de vida en servidor, con posibles interacciones del cliente | 2026-10-29 |
| [Eclipse Foundation: Jakarta Data 1.0](https://jakarta.ee/specifications/data/1.0/jakarta-data-1.0.html) | 1 Introduction/1.1 Goals;2.1 Repositories in Jakarta Data;4 Repository Interfaces;7 Integration. Versión 1.0, HTML oficial leído el 29-10-2026, contrastado con Platform 11§6.30. Repositorios para acceso a datos; no motor de base de datos o sustitución de Persistence | 2026-10-29 |
| [Eclipse Foundation: resultados de compatibilidad Jakarta EE 10](https://jakarta.ee/compatibility/certification/10/) | Jakarta EE 10 Platform Compatible Products y Web Profile: filas de WildFly, Payara, Eclipse GlassFish y Open Liberty, con versiones y Java asociados. Catálogo público consultado el 29-10-2026. Evidencia por producto/versión/perfil, no certificación de todas sus versiones o configuraciones | 2026-10-29 |
| [Eclipse Foundation: resultados de compatibilidad Jakarta EE 11](https://jakarta.ee/compatibility/certification/11/) | Platform, Web Profile y Core Profile Compatible Products: distinción de ámbitos y filas de implementaciones. Catálogo público consultado el 29-10-2026. WildFly figura en Core Profile 11; no se extrapola automáticamente a Platform 11. Marcas comerciales del catálogo pueden diferir de nombres históricos | 2026-10-29 |

### Decisiones de revisión

- Posiciones1161–1180 de la cola: seis IA de B3-T09 y catorce manuales de B3-T10. Conceptos,IDs,claves y fuentes históricas preservados; sin modificar los bancos activos.
- Ocho manuales conservan íntegros enunciado y opciones: P15-127,128,123,124,126,129,131 y132. Las cinco aplicaciones de patrones conservan sus cuatro nombres originales como alternativas.
- Catorce conceptuales y seis aplicaciones: cinco patrones y validación de Integer. El contexto concreta el contrato o riesgo evaluado; no se imponen cuotas a otros lotes.
- Include inserta comportamiento reutilizado; extend actúa en puntos definidos y su condición puede omitirse. No se identifica automáticamente extensión con una guarda explícita o relación de orden temporal.
- Adapter compatibiliza interfaces; Facade simplifica acceso sin garantizar transacción; Strategy cambia algoritmo bajo contrato; Observer no implica garantías de mensajería; Command no garantiza persistencia,exactamente una vez o reversibilidad.
- EntityManager,EntityManagerFactory,CriteriaBuilder yEntityTransaction tienen responsabilidades distintas. JPQL usa el esquema de entidades; Criteria y consultas con nombre son ejes diferentes.
- Jakarta EE 11 exigeJava SE 17 como mínimo. Un servidor concreto puede requerir otroJDK según su distribución; no se convierte el mínimo de especificación en compatibilidad universal de binarios.
- El enunciado deP15-122 distingue expresamente dos perfiles y plataforma completa: Core Profile,Web Profile yPlatform. No se enseña quePlatform sea un tercer perfil normativo.
- CDI gestiona dependencias de componentes y contextos; Maven gestiona construcción/dependencias del proyecto. REST,Servlet,Faces,Persistence,Security,Transactions yValidation se distinguen por contrato sin negar sus integraciones.
- NotNull y Min(18) sobreInteger no significan validación en cada asignación. Min acepta null; se necesitaNotNull para rechazarlo. Se distingue metadato e invocación por API o integración.
- Data 1.0 aparece enPlatform 11§6.30 como acceso mediante repositorios y no sustituyePersistence. Los distractores contrastanJDBC,ORM yCriteria con el nivel de repositorios.
- Se consultan resultados de certificación10 y11 por producto,versión,perfil yJava. WildFlyCore Profile 11 no se presenta comoPlatform 11. Las denominaciones actuales dePayara pueden incluirAzul; se preserva la familia histórica.
- Dieciséis URLs primarias comprobadas el29-10-2026: especificacionesHTML,catálogos de certificación,documentaciónApache y dosPDF textuales (UML796 páginas yvista previaGoF42). Se leen apartados pertinentes,sin inspección de figuras o certificación de implementaciones locales.
- No se identifican nuevos errores editoriales confirmados que invaliden una clave. Se precisan formulaciones generales y excepciones; las tres incidencias activas anteriores mantienen abierto el cierre editorial.

### Límites de acceso y alcance

- UML2.5.1 se consulta desde el PDF público ya descargado en la preparación058; se comprueba suhash y se leen de nuevo18.1.3.2/18.1.3.3. No se descarga ni convierte ningún original del proyecto,ni se usaOCR.
- La vista previaGoF permite leer listas,índice ypropósitos,pero no capítulos completos de todos los patrones. No se afirma inspección visual de tablas o diagramas.
- El HTML oficial deREST4.0 conserva una mención residual a3.2 en§1.1; metadatos4.0.0,URL y página deversión4.0 concuerdan. Se documenta ese defecto de la fuente y se usa el contenido pertinente sin atribuir una versión falsa.
- Las páginas de certificación son un catálogo consultado en fecha concreta. No se prueba cada descarga,servidor,ediciónJDK oconfiguración,ni se atribuye certificación a todas las versiones de un nombre comercial.
- No se instalaJava,Maven,servidor Jakarta EE  o proveedor de persistencia/validación. Los ejemplos didácticos propios no equivalen a ejecutar un TCK,una API Jakarta real o la suiteHTTP deGSI.

Los localizadores normativos principales son **UML18.1.3.2/18.1.3.3**, pp.640–641 impresas; **Platform11§2.24,6.30,9 y9.7**; **Persistence3.2§3.1–3.2,4.1,6.1 y7.3**; **CDI4.1§2.1,5,6 y7**; **Validation3.1§6.1,8.2 y8.5**; **Data1.0§1,2.1,4 y7**. Los resultados de compatibilidad se separan para Jakarta EE10 y11: una certificación Core Profile11 no se convierte en una certificación Platform11.

La página REST4.0 tiene una referencia residual a3.2 en§1.1, aunque URL, cabecera4.0.0, metadatos y página de publicación4.0 concuerdan. Se registra la inconsistencia de la fuente; no se altera el contenido del proyecto para reproducirla. Los índices de especificaciones se usaron para localizar documentos, sin confundir ratificación de una versión con compatibilidad de toda edición de un producto.

## Señales antes y después

| Señal | Banco activo | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 6 | 3 |
| Acierto escogiendo primera de longitud máxima (%) | 30.0 | 20.0 |
| Ratio 1,5 a menos de 2 | 2 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback correcto breve | 9 | 0 |
| Feedback correcto/incorrecto idéntico | 6 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos | 0 | 0 |
| Empates de longitud máxima | 4 | 6 |

La correcta sigue siendo única más larga en AI-GSI-B3-T09-015 y MAN-GSI-P15-124/126. Se justifica por distinguir relaciones de casos de uso, conservar el nombre oficial Jakarta Persistence y mantener la definición precisa de JPQL ya bien construida. Las diferencias son pequeñas y no se añaden palabras de relleno.

La primera máxima acierta4/20 (20 %), frente a6/20 (30 %), con seis empates de máxima. **La primera mínima acierta8/20 (40 %)**: permanece como señal para revisión del propietario, especialmente en formulaciones conservadas y nombres propios de patrones/APIs. No se alargan nombres ni se degradan distractores para ajustar una frecuencia. Los casos Validator/CDI/Servlet/Faces conservan contenido suficiente para su propósito, y longitud similar no prueba ausencia de pistas.

Ningún ratio alcanza1,5 y el analizador no emite alertas. Esto no acredita calidad pedagógica o calibración estadística. Se conservan letras y claves originales, sin redistribución artificial; la dificultad sigue siendo orientativa.

## Contrastes semánticos

Siete modelos propios con datos ficticios y biblioteca estándar contrastan consecuencias y excepciones. **No ejecutan Java, proveedores Jakarta EE, un TCK o las funciones de GSI**.

1. Una extensión con punto alcanzado se ejecuta si su condición está ausente o es verdadera; no si es falsa. Si no se alcanza el punto tampoco se ejecuta. La inserción de una parte común se modela separadamente, sin pretender simular todas las rutas y puntos de un caso UML.
2. Un adaptador ficticio convierte 0 €, 12,34 € y 19,99 € en 0, 1.234 y 1.999 céntimos y delega en la interfaz anterior. Bajo el contrato didáctico de céntimos exactos rechaza12,345, sin truncarlo silenciosamente. Una aplicación real debe fijar sus reglas de redondeo; el patrón no las decide.
3. La fachada reservarViaje coordina inventario,cobro,billete con una entrada. Si falla el cobro en el modelo, permanece la reserva y no se emite billete: la interfaz simplificada no aporta por sí misma atomicidad. Todo es estado en memoria; no se hace una reserva o cobro real.
4. El mismo consumidor calcula con dos estrategias: para pesos1/5, la tarifa estándar ficticia da600/1000 céntimos y la urgente1150/1750. El contrato se mantiene y los resultados pueden ser diferentes. No son precios reales.
5. Dos observadores reciben el estado1; tras retirar alpha, solo beta recibe2. No se extraen garantías de entrega distribuida, orden universal o asincronía de un ejemplo síncrono.
6. Un comando captura el título Primero antes de que cambie una variable externa a Después. La petición diferida escribe Primero. Ejecutar explícitamente el mismo comando dos veces aumenta el contador a2: Command no impone exactamente una vez ni persistencia o deshacer automático.
7. Sobre valores null,17,18,19, la conjunción de NotNull yMin(18) produce falso,falso,verdadero,verdadero. Min sola admite null; NotNull lo rechaza. Es un modelo de esos valores, no ejecución de anotaciones Java o validación automática de cada asignación.

No hay nuevos errores editoriales confirmados que invaliden una clave en este lote. Las tres incidencias anteriores, MAN-GSI-P18-026, AI-GSI-B3-T04-004 y AI-GSI-B3-T05-002, mantienen correcciones propuestas pendientes de aprobación/aplicación. **Siguen en las versiones activas y mantienen abierto el cierre editorial.**

**Refinamiento previo a entrega:** el primer control Chrome falla por un espacio doble en una explicación que el navegador colapsa. La inspección confirma coincidencia al normalizar espacios. Se corrige el contenido, se separan palabras técnicas y se mantienen comparaciones literales estrictas. P15-122 mejora además sus distractores con especificaciones reales próximas. El hash previo `26a2d53fb3f93be25600c507b563167424fdf3a425f498fff7021a7a40169dc5` y sus veinte registros se conservan en `proposal_revisions` para reconstrucción; ninguna de las versiones está aceptada o aplicada. Se repiten las comprobaciones sobre el hash final.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-059.json --render docs/GSI_REVISION_LOTE_059.md --literal-content
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py --write
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
git diff --check
```

Resultados finales: **19 pruebas editoriales, 81 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**, además de documentación, referencias y progreso. La simulación modifica únicamente las catorce manuales y seis IA previstas. Se conservan IDs, claves, procedencia y sesenta justificaciones individuales de distractores. Se rechazan ausencia de aceptación, recibo del piloto y revisión histórica como aprobación. Las **seis aceptaciones IA históricas** mantienen sus hashes. **251 archivos protegidos** intactos y **129 enlaces locales** existentes.

**Siete modelos didácticos completos repetidos sobre el hash final y diez controles Chrome correctos**. El primer falloChrome se conserva junto con su diagnóstico, refinamiento y hash previo; no se debilita la comparación literal. Captura de validación inspeccionada, sin desbordamiento a1280 y390px. Las ocho invocaciones finales y el render literal terminan con código0. Los tres derivados siguen idénticos al inicio; frente aHEAD solo cambia la fecha26→29. Bancos activos iguales aHEAD y oficiales iguales en bytes a la auditoría. Cero errores técnicos finales no acredita cierre editorial: faltan decisiones del propietario y las tres correcciones activas pendientes.

La ficha se verifica con Chrome, Playwright y marked existentes, cargada en memoria con conexiones externas bloqueadas: veinte apartados, marcas correctas, opciones, explicaciones, URLs y ausencia de desbordamiento a1280 y390px. Se inspecciona captura de la pregunta de validación. Presentación y modelos aislados no demuestran semántica completa, accesibilidad o ejecución de una API Jakarta real.

La suite HTTP de Entrenamiento, Simulacros, estadísticas y Refuerzo no se repite en esta preparación: no cambian aplicación ni bancos activos. No se presenta el chequeo de ficha como nueva regresión funcional del producto.

## Entrega y continuidad

Creados: `content/question-reviews/lote-059.json`, `docs/GSI_REVISION_LOTE_059.md`, este informe y `logs/gsi-editorial-059-preparation.json`. Modificados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los derivados de cobertura, validación final y revisión histórica se regeneran y cotejan conservando su fecha29 y los cambios previos de herramientas y pruebas.

Acumulado: **20 aceptadas, 1.160 propuestas pendientes y 582 sin propuesta**. **1.742 decisiones pendientes**. Lotes002–059: 113 incidencias IA originales, otras396IA y651manuales. De las128incidencias originales, quince están aceptadas/aplicadas y113tienen propuesta pendiente. Preparar no significa aceptar o resolver.

Bancos activos, 202 oficiales, doce borradores, historial, originales y entregas anteriores intactos. Sin conversiones documentales nuevas, OCR, instalaciones, aplicación, activación, publicación, fusión o commit.

Para revisar, contrastar ficha, claves, fuentes y motivos por ID y aprobar expresamente el hash final antes de aplicar. La siguiente preparación continúa por bloque y tema. El cierre exige decisiones individuales trazables del propietario sobre los1.762IDs, errores confirmados resueltos y comprobaciones técnicas y de cobertura superadas.
