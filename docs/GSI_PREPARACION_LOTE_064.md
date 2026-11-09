# Preparación editorial GSI-EDITORIAL-064

Preparado y fuentes comprobadas el **30-10-2026**. **20 propuestas pendientes de aprobación expresa. Cero aceptadas, aplicadas o retiradas en este lote.**

Hash canónico: `b6cab5f8d7310a2fd10ded71f2e81c860ff66a6018d3dcb5d0bfd9437f2031bc`. Base activa: `e3e20ab879518c899806a70575eead28b3b35e6f`.

[Ficha antes/después](GSI_REVISION_LOTE_064.md), [propuestas JSON](../content/question-reviews/lote-064.json) y [registro de preparación](../logs/gsi-editorial-064-preparation.json).

## Alcance y revisión individual

Posiciones **1261–1280** de la cola: veinte manuales B3-T11. Archivos estáticos, errores HTTP, sondeos de salud, límites/caché, ADO.NET/ORM, contexto/conjuntos, consultas, seguimiento, migraciones, N+1, carga de relaciones, transacciones, SQL parametrizado, pooling y concurrencia. Se conservan conceptos, IDs, claves, dificultad orientativa, procedencia y fuentes históricas. Ninguna IA u oficial.

Se mantienen completas cinco formulaciones: MAN-GSI-P15-081, MAN-GSI-P15-083, MAN-GSI-P15-084, MAN-GSI-P15-094, MAN-GSI-P15-096. Se precisan las restantes con alternativas plausibles de mecanismos próximos. Se añaden veinte explicaciones correctas y sesenta justificaciones individuales por contenido e ID original de opción, compatibles con barajado.

**15 conceptuales y cinco aplicaciones**: P15-077 (archivo que requiere permiso), 087 (catálogo de lectura), 089 (consultas por relación), 092 (escrituras en una llamada) y 093 (unidad con dos guardados). La proporción no es una cuota por lote y se preserva el concepto original.

El caso077 fija UseStaticFiles antes de autorización: no se generaliza ese comportamiento a todo activo servido como endpoint. Health Checks expresan los checks definidos, sin acreditar todos los subsistemas o toda la lógica de negocio. Rate limiting y caché complementan controles de acceso; no convierten una respuesta privada en reutilizable para cualquier usuario.

ADO.NET, proveedor, mapeo ligero, ORM, DbContext y DbSet se distinguen por sus responsabilidades. DbSet es un acceso lógico, no necesariamente lista cargada o tabla física única. Se separan tracking, traducción, forma de carga, número de consultas y caché de resultados. AsNoTracking no asegura más velocidad en todos los casos o la desaparición de N+1. Include y split queries deben valorarse según volumen, viajes y consistencia.

SaveChanges se acota a proveedor compatible y configuración predeterminada. La atomicidad individual no agrupa por sí sola varios guardados, y WhenNeeded no exige siempre una transacción adicional. Una transacción de base no incorpora automáticamente servicios externos. SQL separa parámetros de valor e identificadores de esquema; pooling requiere liberar conexiones y no equivale a pooling de contextos. Un token de concurrencia detecta conflictos según su estrategia y no decide cómo resolverlos.

Las rúbricas expresan juicio del preparador, no aceptación del propietario, revisión humana independiente o calibración estadística. El estado activo heredado en after no aplica o activa la propuesta.

| ID | Clave | Tipo | Formulación | Motivo |
| --- | --- | --- | --- | --- |
| MAN-GSI-P15-077 | B | application | Ajustada | Conservar precaución de contenido público y clave B; caso acotado al middleware antes de autorización. |
| MAN-GSI-P15-078 | A | conceptual | Ajustada | Conservar posición del manejador y clave A; comparar mecanismos HTTP próximos y delimitar el alcance del manejo. |
| MAN-GSI-P15-079 | D | conceptual | Ajustada | Conservar sondeos de salud y clave D; distinguirlos de logs, métricas y trazas sin inferir cobertura no configurada. |
| MAN-GSI-P15-080 | C | conceptual | Ajustada | Conservar configuración y controles complementarios y clave C; comparar supuestos plausibles de reutilización y admisión. |
| MAN-GSI-P15-081 | B | conceptual | Conservada | Conservar enunciado, alternativas y clave B; explicar capas de acceso con ejemplos primarios sin imponer proveedores históricos. |
| MAN-GSI-P15-082 | A | conceptual | Ajustada | Conservar ORM y clave A; distinguir producto, APIs básicas, migraciones y metadatos del modelo. |
| MAN-GSI-P15-083 | D | conceptual | Conservada | Conservar formulación completa y clave D; explicar unidad de trabajo frente a conexión, conjunto y migración. |
| MAN-GSI-P15-084 | C | conceptual | Conservada | Conservar enunciado, alternativas y clave C; precisar consulta diferida y diferencia entre modelo y tabla física. |
| MAN-GSI-P15-085 | B | conceptual | Ajustada | Conservar consultas tipadas/traducción y clave B; acotar IQueryable y separar ejecución local, esquema y caché de resultados. |
| MAN-GSI-P15-086 | A | conceptual | Ajustada | Conservar seguimiento para persistencia y clave A; comparar mecanismos próximos de estado, esquema, concurrencia y auditoría. |
| MAN-GSI-P15-087 | A | application | Ajustada | Conservar no-tracking para lectura y clave A; caso que exige evitar registro de entidades, sin prometer más rapidez universal. |
| MAN-GSI-P15-088 | C | conceptual | Ajustada | Conservar evolución de esquema y clave C; distinguir migración, ingeniería inversa, backup y tracking. |
| MAN-GSI-P15-089 | D | application | Ajustada | Conservar N+1 y clave D; caso con relaciones no cargadas y consultas observadas, sin confundirlo con volumen o joins. |
| MAN-GSI-P15-090 | C | conceptual | Ajustada | Conservar planificación de carga y clave C; retirar la refutación explícita de un distractor y matizar joins y split queries. |
| MAN-GSI-P15-091 | B | conceptual | Ajustada | Conservar riesgo de E/S oculta y clave B; alternativas próximas de materialización, eager y caché, sin asumir lazy activo por defecto. |
| MAN-GSI-P15-092 | D | application | Ajustada | Conservar atomicidad de SaveChanges y clave D; caso con varias escrituras y defaults explícitos sin prometer una transacción adicional en todo caso. |
| MAN-GSI-P15-093 | D | application | Ajustada | Conservar límite explícito de unidad de negocio y clave D; caso de dos SaveChanges en una base compatible, sin afirmar coordinación universal de recursos. |
| MAN-GSI-P15-094 | C | conceptual | Conservada | Conservar formulación completa y clave C; separar parametrización de valores, interpolación arbitraria e identificadores de esquema. |
| MAN-GSI-P15-095 | C | conceptual | Ajustada | Conservar pooling lógico/físico y clave C; usar un proveedor concreto como respaldo sin generalizar sus defaults. |
| MAN-GSI-P15-096 | B | conceptual | Conservada | Conservar pregunta completa y clave B; distinguir concurrencia optimista, credenciales, aislamiento y caché, con alcance de rowversion preciso. |

## Fuentes y localizadores

**27 URLs primarias comprobadas el 30-10-2026**: Microsoft y README del proyecto Dapper. Se registran apartados y versión o alcance; se conserva la fuente histórica sin atribuirle comprobaciones nuevas no realizadas.

| Fuente | Localizador | Versión o alcance |
| --- | --- | --- |
| [Microsoft: Static files](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/static-files?view=aspnetcore-10.0) | Static file authorization: UseStaticFiles antes de UseAuthorization; diferencia con activos como endpoints | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. |
| [Microsoft: Handle errors](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/error-handling?view=aspnetcore-10.0) | Developer exception page; Exception Handler Middleware; ubicación temprana y entorno; status code pages | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. |
| [Microsoft: Health checks](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/health-checks?view=aspnetcore-10.0) | Introducción; Basic health probe; registro de checks; filtrado de liveness/readiness | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. |
| [Microsoft: Observability with OpenTelemetry](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/observability-with-otel) | What is observability: logs, métricas y trazas distribuidas | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Rate limiting](https://learn.microsoft.com/en-us/aspnet/core/performance/rate-limit?view=aspnetcore-10.0) | Introducción; Why use rate limiting; políticas y pruebas de comportamiento | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. |
| [Microsoft: Caching overview](https://learn.microsoft.com/en-us/aspnet/core/performance/caching/overview?view=aspnetcore-10.0) | Introducción; caché de datos, respuestas y salida; distintas modalidades | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. |
| [Microsoft: Output caching](https://learn.microsoft.com/en-us/aspnet/core/performance/caching/output?view=aspnetcore-10.0) | Default output caching policy; políticas, expiración y variación; peticiones autenticadas | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. |
| [Microsoft: ADO.NET overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview) | Introducción; proveedores, conexión, comandos, resultados y manipulación de datos | Leída el 30-10-2026. Ruta histórica de .NET Framework usada para conceptos de ADO.NET; no se presentan DLL o proveedores de aquella plataforma como requisito universal moderno. |
| [Microsoft: EF Core overview](https://learn.microsoft.com/en-us/ef/core/) | Introducción; O/RM; The model y relación entre entidades y contexto | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [DapperLib: Dapper README](https://github.com/DapperLib/Dapper) | Features: extensiones de DbConnection y API ligera para ejecutar SQL y mapear resultados; Limitations | README público de la rama por defecto leído el 30-10-2026, sin atribuir una versión de paquete instalada o ejecutar código. |
| [Microsoft: Migrations overview](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/) | Introducción; snapshot del modelo, archivos de migración e historial aplicado | Leída el 30-10-2026. Versionar cambios de esquema no equivale a backup o garantía de no perder datos con cualquier modificación. |
| [Microsoft: DbContext configuration](https://learn.microsoft.com/en-us/ef/core/dbcontext-configuration/) | The DbContext lifetime; unidad de trabajo, consultas, tracking y SaveChanges; concurrencia | Leída el 30-10-2026. La unidad de trabajo no equivale por sí sola a una transacción abierta durante todo el contexto o a una única conexión física permanente. |
| [Microsoft: DbSet<TEntity>](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1?view=efcore-10.0) | Definition; Remarks; consultar entidades y registrar operaciones para SaveChanges | Vista efcore-10.0 leída el 30-10-2026; la página agrega variantes históricas y aviso prerelease. Se usa el contrato estable, sin asumir que un DbSet es una lista cargada o siempre una sola tabla física. |
| [Microsoft: Change tracking](https://learn.microsoft.com/en-us/ef/core/change-tracking/) | Introducción; How to track entities; Entity states; relación con SaveChanges | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Using transactions](https://learn.microsoft.com/en-us/ef/core/saving/transactions) | Default transaction behavior; Controlling automatic transactions; Using transactions; proveedor y ejecución | Leída el 30-10-2026. Atomicidad de una llamada con proveedor compatible y configuración predeterminada; WhenNeeded no exige crear siempre una transacción adicional. No se promete atomicidad de efectos externos. |
| [Microsoft: Entity types and mapping](https://learn.microsoft.com/en-us/ef/core/modeling/entity-types) | Table mapping; View mapping; relación entre tipos, DbSet y estructuras del modelo | Leída el 30-10-2026. El punto de acceso a un tipo no implica una lista materializada o la universalidad de una tabla física única. |
| [Microsoft: Querying data](https://learn.microsoft.com/en-us/ef/core/querying/) | Introducción: consultas LINQ con tipos .NET sobre contexto y entidades | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Client vs server evaluation](https://learn.microsoft.com/en-us/ef/core/querying/client-eval) | Introducción; Unsupported client evaluation; evaluación parcial de proyección superior | Leída el 30-10-2026. EF Core3+ rechaza expresiones no traducibles fuera de la proyección superior, salvo cambio explícito a evaluación cliente. |
| [Microsoft: Advanced performance topics](https://learn.microsoft.com/en-us/ef/core/performance/advanced-performance-topics) | Connection pooling considerations; diferencia entre pooling de conexiones y DbContext | Leída el 30-10-2026. Se usan contratos de reutilización y driver; no benchmarks, recomendaciones de valores concretos o ejemplos de acceso a tenant. |
| [Microsoft: Tracking vs no-tracking](https://learn.microsoft.com/en-us/ef/core/querying/tracking) | Tracking queries; No-tracking queries; Identity resolution y proyecciones | Leída el 30-10-2026. No tracking no garantiza más velocidad en todo caso ni resuelve por sí solo N+1, transacciones o concurrencia. |
| [Microsoft: Handling concurrency conflicts](https://learn.microsoft.com/en-us/ef/core/saving/concurrency) | Optimistic concurrency; comparación del token original en UPDATE/DELETE; DbUpdateConcurrencyException y resolución | Leída el 30-10-2026. Rowversion es específico de SQL Server; también existen tokens gestionados por aplicación. No se interpreta como credencial, aislamiento o resolución automática de conflictos. |
| [Microsoft: Eager loading](https://learn.microsoft.com/en-us/ef/core/querying/related-data/eager) | Eager loading; Include/ThenInclude; precauciones al cargar colecciones relacionadas | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Efficient querying](https://learn.microsoft.com/en-us/ef/core/performance/efficient-querying) | Project only properties you need; Avoid cartesian explosion; Beware of lazy loading: N+1 | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Lazy loading](https://learn.microsoft.com/en-us/ef/core/querying/related-data/lazy) | Lazy loading with proxies; carga al acceder a navegación; advertencia N+1; ILazyLoader | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Single vs split queries](https://learn.microsoft.com/en-us/ef/core/querying/single-split-queries) | Cartesian explosion; Split queries; costes y consistencia de consultas divididas | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: SQL queries](https://learn.microsoft.com/en-us/ef/core/querying/sql-queries) | Passing parameters; Dynamic SQL and parameters; valores frente a identificadores de esquema | Leída el 30-10-2026. FromSql7+ y FromSqlInterpolated frente a FromSqlRaw; no toda interpolación de string es parametrización ni un identificador de columna es un parámetro de valor. |
| [Microsoft: SQL Server connection pooling](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/sql-server-connection-pooling) | Introducción; Open, Close y Dispose; Add connections; devolución de conexiones compatibles al pool | Leída el 30-10-2026. Fuente concreta SQL Server/SqlClient para mostrar un proveedor con pooling. No se generalizan valores por defecto o configuración a todos los proveedores. |

Veintisiete fuentes primarias comprobadas el 30-10-2026: documentación de Microsoft y README del proyecto Dapper. Se conservan fuentes y procedencia históricas.
StaticFiles se acota al middleware antes de autorización; no se generaliza a activos expuestos como endpoints con políticas. Los Health Checks solo expresan comprobaciones configuradas, no corrección funcional completa.
ADO.NET, proveedor, micro-ORM, ORM, DbContext y DbSet se separan por responsabilidad. DbSet no equivale a lista materializada o tabla física única.
Tracking, estrategias de carga y número de consultas son ejes distintos. No tracking no garantiza más rapidez universal o ausencia de N+1; Include y proyección deben valorarse junto a consultas divididas y volumen.
SaveChanges protege la llamada según proveedor/configuración, no cualquier unidad de negocio externa. Una transacción explícita tampoco incorpora por sí sola correos o servicios remotos.
SQL parametriza valores, no toda parte del esquema. Pooling de conexiones es responsabilidad del driver y no elimina Dispose. Token de concurrencia detecta cambios según su estrategia y requiere resolución de la aplicación.

Páginas públicas Learn con avisos de autorización y algunas vistas ASP.NETCore con avisos de moniker inconsistentes: se documentan versión solicitada y apartados leídos, sin login ni evasión o adopción de preview.
How Queries Work advierte que parte del artículo está desactualizada. Se leyó como contexto y se excluye de referencias finales; se usa Querying Data junto con Client vs Server Evaluation.
Las rutas históricas de ADO.NET se usan para conceptos y un proveedor concreto, sin imponer ensamblados, plataformas o defaults de .NET Framework al entorno moderno.
Sin dotnet en PATH durante esta revisión: no se instala SDK, EF Core o proveedor ni se ejecuta ASP.NET Core, Dapper o SQL. No hay conexión a base de datos, prueba de ataque, lectura de secretos, PDF, OCR o conversión de originales.

How Queries Work se consultó como contexto, pero advierte desactualización y se excluye de las referencias. Querying Data y Client vs Server Evaluation respaldan la descripción final. Las páginas ASP.NET Core con avisos de moniker inconsistentes se usan en los apartados indicados, sin afirmar que todo el texto quede aislado estrictamente a una versión. ADO.NET histórico y SqlClient respaldan conceptos y un proveedor concreto, sin extender sus defaults a todos los drivers.

## Señales automáticas

| Señal | Antes | Propuesta |
| --- | ---: | ---: |
| correct_unique_longest | 12 | 6 |
| first_longest_accuracy | 60.0 | 30.0 |
| length_ratio_1_5_to_2 | 5 | 0 |
| length_ratio_at_least_2 | 0 | 0 |
| short_correct_feedback | 0 | 0 |
| duplicate_options | 0 | 0 |
| absolute_wording_cluster | 0 | 0 |
| identical_feedback | 0 | 0 |

Primera alternativa de longitud mínima correcta: 6/20 (30 %). Seis correctas únicas más largas y un empate de longitud máxima; no quedan ratios de alerta. Estas señales no acreditan por sí solas calidad pedagógica. Se conservan claves y contenidos precisos, sin relleno o cuotas para mejorar métricas.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-064.json --render docs/GSI_REVISION_LOTE_064.md --literal-content
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

Resultados: **19 pruebas editoriales, 86 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**; documentación, referencias y progreso correctos. Las ocho invocaciones terminan con código0. La simulación cambia únicamente veinte manuales, conservando IDs, claves, procedencia y sesenta justificaciones individuales de distractores. Se rechazan tres aceptaciones improcedentes y se comprueban las dos barreras de regeneración. **271 archivos protegidos intactos** y **139 enlaces locales existentes**.

**Diez controles Chrome correctos sobre la ficha guardada**, captura del caso N+1 inspeccionada y sin desbordamiento a1280/390px. No se ejecuta .NET, Dapper o SQL ni se repite la suite HTTP completa del producto. Los tres derivados conservan contenido y fecha30 del inicio; frente aHEAD solo cambia la fecha26→30. Bancos activos iguales aHEAD y oficiales iguales en bytes a la auditoría. Los resultados técnicos no resuelven las decisiones pendientes del propietario o las tres correcciones editoriales activas anteriores.

La ficha se comprueba con Chrome, Playwright y marked existentes, en memoria y sin conexiones externas: veinte apartados, cuarenta marcas correctas, alternativas, explicaciones, URLs y ausencia de desbordamiento a1280/390px. Se ha inspeccionado captura del caso de N+1.

No se ejecuta .NET o SQL ni se conectan bases, servicios o procesos de producción. No se leen secretos o datos reales ni se instalan herramientas. La suite HTTP completa del producto no se repite: aplicación y bancos activos no cambian. La presentación de la ficha no acredita nueva cobertura funcional de Entrenamiento, Simulacros, estadísticas o Refuerzo.

Tres incidencias confirmadas anteriores siguen activas con correcciones propuestas pendientes de aprobación/aplicación: MAN-GSI-P18-026, AI-GSI-B3-T04-004 y AI-GSI-B3-T05-002. Mantienen abierto el cierre editorial. No se añade otro error confirmado de clave en este lote.

## Entrega y continuidad

Creados: propuestas JSON, ficha antes/después, este informe y registro064. Modificados: plan y progreso. Los tres derivados se regeneran y se ha comprobado que mantienen contenido semántico y fecha30 del inicio; frente aHEAD solo cambia la fecha26→30. Se preservan cambios previos de herramientas y pruebas.

Acumulado: **20 aceptadas, 1.260 propuestas pendientes y 482 sin propuesta; 1.742 decisiones pendientes**. Lotes002–064: 113 incidencias IA originales, otras396 IA y751 manuales. De las128 incidencias originales, quince aceptadas/aplicadas y113 con propuesta pendiente.

Bancos activos, 202 oficiales, doce borradores, historial y documentos originales intactos. Sin conversiones, OCR, instalación, aceptación, aplicación, activación, publicación, fusión o commit. Continúa la cola por bloque/tema; aplicar requiere aprobación expresa del hash.
