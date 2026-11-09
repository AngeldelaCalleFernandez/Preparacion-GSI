# GSI-EDITORIAL-064 — revisión propuesta

Preparado: 2026-10-30. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `b6cab5f8d7310a2fd10ded71f2e81c860ff66a6018d3dcb5d0bfd9437f2031bc`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P15-077

Decisión: pending_review · acción: revise.

Motivo: Conservar precaución de contenido público y clave B; caso acotado al middleware antes de autorización.

### Antes

¿Qué precaución existe con los archivos estáticos?

- A. Kestrel cifra automáticamente cualquier archivo estático.
- B. Los archivos servidos como públicos no deben contener secretos ni material que requiera autorización sin un diseño específico. **(correcta)**
- C. El middleware de archivos estáticos aplica siempre las mismas políticas de autorización que un controller protegido.
- D. Los archivos estáticos nunca son accesibles desde Internet.

Explicación: Los archivos servidos como públicos no deben contener secretos ni material que requiera autorización sin un diseño específico. La posición del middleware y la naturaleza pública del contenido importan para la seguridad.

### Propuesta

Una aplicación usa UseStaticFiles antes de UseAuthorization y coloca en wwwroot un documento que debe requerir permiso de lectura. ¿Qué precaución corresponde?

- A. Activar HTTPS hace que el documento solo sea accesible a usuarios autenticados.
- B. El documento sigue siendo público y necesita un diseño específico para proteger su acceso. **(correcta)**
- C. Authorize en un controller protege también los ficheros de la misma carpeta pública.
- D. La ubicación dentro de wwwroot impide que el cliente solicite el documento directamente.

Explicación: En el caso indicado, UseStaticFiles atiende antes de la autorización y el fichero es públicamente accesible. HTTPS protege el transporte, no decide quién puede leerlo. Un contenido que requiere permiso debe servirse mediante un diseño de acceso apropiado, por ejemplo fuera de la raíz pública y con controles aplicables. No se generaliza este comportamiento a todo activo expuesto como endpoint con políticas.

- Error A: Cifrar el transporte no autentica al cliente ni aplica una política de acceso al fichero.
- Error C: La protección de una acción no se propaga por nombre o carpeta a un recurso atendido antes por el middleware estático.
- Error D: wwwroot es la raíz web habitual, no una ubicación que por sí misma oculte el archivo o exija autenticación.

- [Microsoft: Static files](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/static-files?view=aspnetcore-10.0) · Static file authorization: UseStaticFiles antes de UseAuthorization; diferencia con activos como endpoints · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30

Partida: `be8fc667b872963c3de66fed7d448d6c57a7635e3b7d054f6bd5bba8e65e359b` · propuesta: `a30583db453e24a54b9402e1fd1d8bd52d95d859080de139d53b6be65c6a31a1`

## MAN-GSI-P15-078

Decisión: pending_review · acción: revise.

Motivo: Conservar posición del manejador y clave A; comparar mecanismos HTTP próximos y delimitar el alcance del manejo.

### Antes

¿Qué middleware debe situarse normalmente al principio para capturar excepciones producidas por componentes posteriores?

- A. Un manejador global de excepciones configurado para el entorno. **(correcta)**
- B. Ninguno; las excepciones no se gestionan en ASP.NET Core.
- C. El middleware de autorización al final de la respuesta.
- D. El middleware de archivos estáticos únicamente.

Explicación: Un manejador global de excepciones configurado para el entorno. El handler global necesita envolver el resto del pipeline para capturar fallos posteriores.

### Propuesta

¿Qué middleware debe situarse normalmente al principio para capturar excepciones producidas por componentes posteriores?

- A. Un manejador de excepciones que envuelva los componentes posteriores y corresponda al entorno. **(correcta)**
- B. Un componente de páginas de estado que añada contenido a respuestas de error sin cuerpo.
- C. Un componente de autorización que evalúe políticas para el endpoint seleccionado.
- D. Un componente de routing que determine qué endpoint coincide con la petición.

Explicación: Un manejador global de excepciones debe situarse temprano para envolver el procesamiento que sigue y capturar excepciones no controladas de esa parte del pipeline. Debe configurarse según el entorno: los detalles de desarrollo no son una respuesta pública apropiada de producción. No equivale a tratar códigos de estado, seleccionar rutas o decidir permisos, ni a capturar cualquier fallo ajeno a ese recorrido.

- Error B: Las páginas de estado tratan respuestas como errores HTTP sin cuerpo; no sustituyen el manejo de excepciones no controladas del pipeline.
- Error C: La autorización decide acceso según políticas; no es el mecanismo general para capturar excepciones de componentes posteriores.
- Error D: Routing selecciona el destino de la petición, sin reemplazar el componente que envuelve y maneja fallos.

- [Microsoft: Handle errors](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/error-handling?view=aspnetcore-10.0) · Developer exception page; Exception Handler Middleware; ubicación temprana y entorno; status code pages · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30

Partida: `0fb623cda75b246ddc6399a5d0940fd63cace46bd9c5cbecece4325803fbd8c3` · propuesta: `1783cee675ae89c41ba138fe028d877a2afde5968f11912ea585953c4f5ab48f`

## MAN-GSI-P15-079

Decisión: pending_review · acción: revise.

Motivo: Conservar sondeos de salud y clave D; distinguirlos de logs, métricas y trazas sin inferir cobertura no configurada.

### Antes

¿Qué aportan los Health Checks?

- A. La eliminación de logs.
- B. La compilación AOT.
- C. Una copia de seguridad automática de la base de datos.
- D. Endpoints/sondeos para expresar el estado de salud de la aplicación y dependencias relevantes. **(correcta)**

Explicación: Endpoints/sondeos para expresar el estado de salud de la aplicación y dependencias relevantes. Son útiles para orquestadores, balanceadores y monitorización; deben diseñarse con cuidado para no filtrar datos sensibles.

### Propuesta

¿Qué aportan los Health Checks?

- A. Eventos estructurados para reconstruir el historial de operaciones ejecutadas.
- B. Medidas continuas de consumo, tasas y latencias publicadas por la aplicación.
- C. Recorridos correlacionados con operaciones y tiempos de una petición entre componentes.
- D. Sondeos que expresan el resultado de comprobaciones de salud configuradas. **(correcta)**

Explicación: Los Health Checks exponen resultados de sondeos configurados sobre la aplicación o dependencias relevantes. Pueden servir a monitorización, balanceadores u orquestadores, pero solo comprueban lo definido: un endpoint básico sin checks específicos no verifica por sí solo una base de datos. Salud, logs, métricas y trazas aportan evidencias complementarias; una respuesta saludable no certifica toda la lógica funcional.

- Error A: Registrar eventos e historial es la función de logs; un sondeo de salud devuelve el estado de las comprobaciones elegidas.
- Error B: Las métricas describen medidas y distribuciones; pueden alimentar comprobaciones, pero no son por sí mismas el contrato de un Health Check.
- Error C: Correlacionar operaciones de una petición describe tracing; no equivale a publicar el resultado de un sondeo de salud.

- [Microsoft: Health checks](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/health-checks?view=aspnetcore-10.0) · Introducción; Basic health probe; registro de checks; filtrado de liveness/readiness · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Microsoft: Observability with OpenTelemetry](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/observability-with-otel) · What is observability: logs, métricas y trazas distribuidas · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `ce98c768cb3d2b488c8dbdc6fecb35758d3ffea71731a97203b001a93a23b477` · propuesta: `777a90551da1fa9d16ee473d87ab6896a0825ca0a4ba08984f7691003f4d68b9`

## MAN-GSI-P15-080

Decisión: pending_review · acción: revise.

Motivo: Conservar configuración y controles complementarios y clave C; comparar supuestos plausibles de reutilización y admisión.

### Antes

¿Qué afirmación sobre rate limiting y caching es correcta?

- A. La caché hace innecesarios versionado, invalidación y consistencia porque cualquier respuesta almacenada sigue siendo correcta.
- B. El rate limiting sustituye autenticación, autorización y firewall al impedir por sí mismo todo abuso o acceso no permitido.
- C. Son capacidades de infraestructura/aplicación que deben configurarse según el comportamiento y riesgos del servicio; no sustituyen autenticación ni autorización. **(correcta)**
- D. Ambos pertenecen exclusivamente al ORM y solo pueden configurarse al consultar entidades mediante EF Core.

Explicación: Son capacidades de infraestructura/aplicación que deben configurarse según el comportamiento y riesgos del servicio; no sustituyen autenticación ni autorización. Rendimiento, resiliencia y seguridad requieren controles distintos.

### Propuesta

¿Qué afirmación sobre rate limiting y caching es correcta?

- A. Una respuesta válida para un usuario puede reutilizarse para cualquier otro sin variar su clave.
- B. Limitar la frecuencia de un cliente le concede permiso para ejecutar los endpoints solicitados.
- C. Sus políticas de uso y reutilización complementan los controles de identidad y acceso. **(correcta)**
- D. Al mejorar rendimiento, ambas hacen innecesario revisar límites, expiración y consistencia.

Explicación: Rate limiting controla admisión o frecuencia según sus políticas; caching reutiliza datos o respuestas según validez y claves. Deben ajustarse al servicio y no prueban identidad o permiso del solicitante. La caché requiere considerar variación, expiración e invalidación y no compartir sin más contenido privado. Las distintas modalidades tienen reglas propias; por ejemplo, la política predeterminada de output caching excluye respuestas a peticiones autenticadas.

- Error A: Que una respuesta sea válida para un usuario no acredita que pueda compartirse con otro; importan contenido, variación y reglas de acceso.
- Error B: Un límite de frecuencia no autentica al cliente ni le otorga permisos sobre el recurso.
- Error D: Rendimiento no elimina caducidad, consistencia o límites de uso; precisamente sus políticas necesitan esas decisiones.

- [Microsoft: Rate limiting](https://learn.microsoft.com/en-us/aspnet/core/performance/rate-limit?view=aspnetcore-10.0) · Introducción; Why use rate limiting; políticas y pruebas de comportamiento · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Microsoft: Caching overview](https://learn.microsoft.com/en-us/aspnet/core/performance/caching/overview?view=aspnetcore-10.0) · Introducción; caché de datos, respuestas y salida; distintas modalidades · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Microsoft: Output caching](https://learn.microsoft.com/en-us/aspnet/core/performance/caching/output?view=aspnetcore-10.0) · Default output caching policy; políticas, expiración y variación; peticiones autenticadas · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30

Partida: `cf1a78a2238884fbc3f823b592f0ea12f5a22832a31de026c0f0d2f8d64d04b4` · propuesta: `5704627d50bd18fdf401cc611d4f8ba7bfd44ebe2a898805d0cc059694a3db53`

## MAN-GSI-P15-081

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, alternativas y clave B; explicar capas de acceso con ejemplos primarios sin imponer proveedores históricos.

### Antes

¿Qué describe mejor ADO.NET?

- A. Un ORM que mapea entidades, mantiene seguimiento de cambios y traduce consultas LINQ a operaciones del proveedor.
- B. Un conjunto de APIs de acceso a datos de bajo nivel relativo, con conexiones, comandos, lectores y adaptadores/proveedores. **(correcta)**
- C. Un micro-ORM que extiende conexiones para mapear resultados de SQL con una abstracción ligera y escaso tracking.
- D. Una implementación específica del proveedor que traduce comandos genéricos al protocolo de una base de datos concreta.

Explicación: Un conjunto de APIs de acceso a datos de bajo nivel relativo, con conexiones, comandos, lectores y adaptadores/proveedores. ADO.NET permite trabajar directamente con proveedores y comandos; EF Core se apoya en capas de acceso a datos pero ofrece un modelo ORM.

### Propuesta

¿Qué describe mejor ADO.NET?

- A. Un ORM que mapea entidades, mantiene seguimiento de cambios y traduce consultas LINQ a operaciones del proveedor.
- B. Un conjunto de APIs de acceso a datos de bajo nivel relativo, con conexiones, comandos, lectores y adaptadores/proveedores. **(correcta)**
- C. Un micro-ORM que extiende conexiones para mapear resultados de SQL con una abstracción ligera y escaso tracking.
- D. Una implementación específica del proveedor que traduce comandos genéricos al protocolo de una base de datos concreta.

Explicación: ADO.NET ofrece componentes de acceso a datos como conexiones, comandos, lectores y adaptadores, implementados mediante proveedores. Permite trabajar de forma más directa con comandos y resultados que un ORM. EF Core añade modelo y comportamiento ORM; una biblioteca ligera como Dapper añade mapeo sobre conexiones, y un proveedor realiza la comunicación específica. No deben confundirse el conjunto de APIs y una implementación concreta.

- Error A: Mapeo de entidades, tracking y consultas LINQ describen el nivel de un ORM como EF Core, no el conjunto básico de componentes ADO.NET.
- Error C: El mapeo ligero de resultados mediante extensiones corresponde a una abstracción adicional como Dapper, no define toda la API ADO.NET.
- Error D: El proveedor específico forma parte del mecanismo de acceso, pero no equivale al conjunto de APIs comunes y sus componentes.

- [Microsoft: ADO.NET overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview) · Introducción; proveedores, conexión, comandos, resultados y manipulación de datos · versión: Leída el 30-10-2026. Ruta histórica de .NET Framework usada para conceptos de ADO.NET; no se presentan DLL o proveedores de aquella plataforma como requisito universal moderno. · comprobado: 2026-10-30
- [Microsoft: EF Core overview](https://learn.microsoft.com/en-us/ef/core/) · Introducción; O/RM; The model y relación entre entidades y contexto · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [DapperLib: Dapper README](https://github.com/DapperLib/Dapper) · Features: extensiones de DbConnection y API ligera para ejecutar SQL y mapear resultados; Limitations · versión: README público de la rama por defecto leído el 30-10-2026, sin atribuir una versión de paquete instalada o ejecutar código. · comprobado: 2026-10-30

Partida: `367ca6abeaa9ffc94945c757a63cc72595ae787042330007de14646ae4294d1d` · propuesta: `675d5e464595a77d5b02277b1f6915d6966357c8ae2687ae322da7f257068de5`

## MAN-GSI-P15-082

Decisión: pending_review · acción: revise.

Motivo: Conservar ORM y clave A; distinguir producto, APIs básicas, migraciones y metadatos del modelo.

### Antes

¿Qué es Entity Framework Core?

- A. Un ORM moderno para .NET que permite mapear entidades y consultar/persistir datos mediante un modelo de objetos. **(correcta)**
- B. La capa de acceso que expone conexiones, comandos y lectores para ejecutar SQL mediante un proveedor de datos .NET.
- C. El gestor que restaura, publica y versiona paquetes y dependencias utilizados por proyectos del ecosistema .NET.
- D. El entorno de ejecución que carga código administrado, aplica compilación JIT y gestiona memoria y excepciones.

Explicación: Un ORM moderno para .NET que permite mapear entidades y consultar/persistir datos mediante un modelo de objetos. EF Core es la opción ORM principal de Microsoft para .NET moderno.

### Propuesta

¿Qué es Entity Framework Core?

- A. Un ORM que permite consultar y persistir entidades .NET mediante un modelo de objetos. **(correcta)**
- B. Una API de conexiones, comandos y lectores para acceder directamente al proveedor de datos.
- C. Un generador de operaciones versionadas para llevar el esquema entre revisiones del modelo.
- D. Un conjunto de metadatos que asocia tipos y propiedades con estructuras de almacenamiento.

Explicación: EF Core es una tecnología ORM que permite trabajar con un modelo de entidades y contexto para consultar y guardar datos. Incluye capacidades que utilizan metadatos, seguimiento y proveedores; no se reduce a un comando de migración o al mapeo declarado. La abstracción no elimina la necesidad de conocer consultas, transacciones, índices y compatibilidad del proveedor.

- Error B: Conexiones, comandos y lectores describen componentes del nivel ADO.NET, no el modelo completo de un ORM.
- Error C: Generar y aplicar cambios versionados de esquema es la función de migraciones, una capacidad relacionada pero no la definición de EF Core.
- Error D: El mapeo es parte del modelo que usa el ORM; solo declarar esos metadatos no describe sus consultas y persistencia.

- [Microsoft: EF Core overview](https://learn.microsoft.com/en-us/ef/core/) · Introducción; O/RM; The model y relación entre entidades y contexto · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: ADO.NET overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview) · Introducción; proveedores, conexión, comandos, resultados y manipulación de datos · versión: Leída el 30-10-2026. Ruta histórica de .NET Framework usada para conceptos de ADO.NET; no se presentan DLL o proveedores de aquella plataforma como requisito universal moderno. · comprobado: 2026-10-30
- [Microsoft: Migrations overview](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/) · Introducción; snapshot del modelo, archivos de migración e historial aplicado · versión: Leída el 30-10-2026. Versionar cambios de esquema no equivale a backup o garantía de no perder datos con cualquier modificación. · comprobado: 2026-10-30

Partida: `71aacebaf35de9a49c818003637b6e737796e9d787e8c6f2ea18f0c0bbd94553` · propuesta: `d34516795c66347c53848f2c31e93dbc4efde8b0d699f669daabefbff4627d6e`

## MAN-GSI-P15-083

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave D; explicar unidad de trabajo frente a conexión, conjunto y migración.

### Antes

¿Qué representa normalmente \`DbContext\`?

- A. Una conexión física o lógica con el proveedor de base de datos utilizada para enviar comandos y recibir resultados.
- B. Una colección asociada a un tipo de entidad desde la que se construyen consultas y se agregan o eliminan instancias.
- C. Una operación versionada que describe cambios de esquema y permite aplicarlos o revertirlos en la base de datos.
- D. Una unidad de trabajo/sesión con el modelo y la base de datos, responsable de consultas, tracking y persistencia. **(correcta)**

Explicación: Una unidad de trabajo/sesión con el modelo y la base de datos, responsable de consultas, tracking y persistencia. DbContext coordina entidades y base de datos y debe tener un ciclo de vida bien controlado.

### Propuesta

¿Qué representa normalmente \`DbContext\`?

- A. Una conexión física o lógica con el proveedor de base de datos utilizada para enviar comandos y recibir resultados.
- B. Una colección asociada a un tipo de entidad desde la que se construyen consultas y se agregan o eliminan instancias.
- C. Una operación versionada que describe cambios de esquema y permite aplicarlos o revertirlos en la base de datos.
- D. Una unidad de trabajo/sesión con el modelo y la base de datos, responsable de consultas, tracking y persistencia. **(correcta)**

Explicación: DbContext coordina una unidad de trabajo con el modelo: permite consultas, seguimiento de entidades y persistencia mediante SaveChanges. No es una sola conexión o un DbSet de un tipo. Su ciclo de vida y uso concurrente deben controlarse, y que exista el contexto no significa que haya una transacción abierta para toda su duración. El comportamiento de tracking puede cambiarse por consulta o configuración.

- Error A: La conexión es un recurso de comunicación con el proveedor; no reúne por sí misma modelo, tracking y coordinación de entidades del contexto.
- Error B: El punto de acceso asociado a un tipo es DbSet; un contexto puede trabajar con varios tipos dentro de la misma unidad.
- Error C: Versionar cambios de esquema describe una migración; no es la sesión de trabajo con consultas y entidades.

- [Microsoft: DbContext configuration](https://learn.microsoft.com/en-us/ef/core/dbcontext-configuration/) · The DbContext lifetime; unidad de trabajo, consultas, tracking y SaveChanges; concurrencia · versión: Leída el 30-10-2026. La unidad de trabajo no equivale por sí sola a una transacción abierta durante todo el contexto o a una única conexión física permanente. · comprobado: 2026-10-30
- [Microsoft: DbSet&lt;TEntity&gt;](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1?view=efcore-10.0) · Definition; Remarks; consultar entidades y registrar operaciones para SaveChanges · versión: Vista efcore-10.0 leída el 30-10-2026; la página agrega variantes históricas y aviso prerelease. Se usa el contrato estable, sin asumir que un DbSet es una lista cargada o siempre una sola tabla física. · comprobado: 2026-10-30
- [Microsoft: Change tracking](https://learn.microsoft.com/en-us/ef/core/change-tracking/) · Introducción; How to track entities; Entity states; relación con SaveChanges · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Migrations overview](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/) · Introducción; snapshot del modelo, archivos de migración e historial aplicado · versión: Leída el 30-10-2026. Versionar cambios de esquema no equivale a backup o garantía de no perder datos con cualquier modificación. · comprobado: 2026-10-30
- [Microsoft: Using transactions](https://learn.microsoft.com/en-us/ef/core/saving/transactions) · Default transaction behavior; Controlling automatic transactions; Using transactions; proveedor y ejecución · versión: Leída el 30-10-2026. Atomicidad de una llamada con proveedor compatible y configuración predeterminada; WhenNeeded no exige crear siempre una transacción adicional. No se promete atomicidad de efectos externos. · comprobado: 2026-10-30

Partida: `a0aeba201c8f6b96a2ea58d915ba16905d93bb9cd0d1f7be05faf9e26de6304c` · propuesta: `b99fc92b1ee167dfdbd00a2a00854a0986855c550b16d620ad46cbdf93ebe88f`

## MAN-GSI-P15-084

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, alternativas y clave C; precisar consulta diferida y diferencia entre modelo y tabla física.

### Antes

¿Qué representa \`DbSet&lt;TEntity&gt;\`?

- A. La instancia que coordina todo el contexto, seguimiento de cambios y unidad de trabajo entre distintos tipos de entidad.
- B. El conjunto de metadatos que configura tablas, columnas, claves y relaciones del modelo mediante convenciones o reglas.
- C. Un punto de acceso a un conjunto de entidades de un tipo dentro del modelo de EF Core. **(correcta)**
- D. Un objeto de migración que describe operaciones para llevar el esquema de la base de datos de una versión a otra.

Explicación: Un punto de acceso a un conjunto de entidades de un tipo dentro del modelo de EF Core. DbSet se utiliza para consultar y operar con entidades de un tipo.

### Propuesta

¿Qué representa \`DbSet&lt;TEntity&gt;\`?

- A. La instancia que coordina todo el contexto, seguimiento de cambios y unidad de trabajo entre distintos tipos de entidad.
- B. El conjunto de metadatos que configura tablas, columnas, claves y relaciones del modelo mediante convenciones o reglas.
- C. Un punto de acceso a un conjunto de entidades de un tipo dentro del modelo de EF Core. **(correcta)**
- D. Un objeto de migración que describe operaciones para llevar el esquema de la base de datos de una versión a otra.

Explicación: DbSet&lt;TEntity&gt; proporciona acceso a entidades de un tipo dentro del modelo y permite componer consultas y registrar operaciones de estado cuando corresponda. No es por sí mismo una lista materializada ni garantiza una correspondencia simple con una tabla física. El contexto coordina el conjunto de la unidad de trabajo y SaveChanges realiza la persistencia de las operaciones registradas según el modelo.

- Error A: Coordinar distintos tipos y todo el seguimiento corresponde a DbContext, no a un único DbSet&lt;TEntity&gt;.
- Error B: Tablas, columnas, claves y relaciones pertenecen a los metadatos/configuración del modelo; el DbSet es un punto de acceso a entidades.
- Error D: Las operaciones de evolución del esquema se expresan mediante migraciones, no mediante la definición del DbSet.

- [Microsoft: DbSet&lt;TEntity&gt;](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1?view=efcore-10.0) · Definition; Remarks; consultar entidades y registrar operaciones para SaveChanges · versión: Vista efcore-10.0 leída el 30-10-2026; la página agrega variantes históricas y aviso prerelease. Se usa el contrato estable, sin asumir que un DbSet es una lista cargada o siempre una sola tabla física. · comprobado: 2026-10-30
- [Microsoft: DbContext configuration](https://learn.microsoft.com/en-us/ef/core/dbcontext-configuration/) · The DbContext lifetime; unidad de trabajo, consultas, tracking y SaveChanges; concurrencia · versión: Leída el 30-10-2026. La unidad de trabajo no equivale por sí sola a una transacción abierta durante todo el contexto o a una única conexión física permanente. · comprobado: 2026-10-30
- [Microsoft: EF Core overview](https://learn.microsoft.com/en-us/ef/core/) · Introducción; O/RM; The model y relación entre entidades y contexto · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Migrations overview](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/) · Introducción; snapshot del modelo, archivos de migración e historial aplicado · versión: Leída el 30-10-2026. Versionar cambios de esquema no equivale a backup o garantía de no perder datos con cualquier modificación. · comprobado: 2026-10-30
- [Microsoft: Entity types and mapping](https://learn.microsoft.com/en-us/ef/core/modeling/entity-types) · Table mapping; View mapping; relación entre tipos, DbSet y estructuras del modelo · versión: Leída el 30-10-2026. El punto de acceso a un tipo no implica una lista materializada o la universalidad de una tabla física única. · comprobado: 2026-10-30

Partida: `43c3c1c9fa0fe48011fd1e5689ce77c864518e2cd0347f7fb46f543200dc190e` · propuesta: `85e930d2918a4940823c5cf4c88a67bae72bf044a330c862bae3f3a039fe67d8`

## MAN-GSI-P15-085

Decisión: pending_review · acción: revise.

Motivo: Conservar consultas tipadas/traducción y clave B; acotar IQueryable y separar ejecución local, esquema y caché de resultados.

### Antes

¿Qué ventaja aporta usar LINQ con EF Core?

- A. Garantizar que cualquier método C\# se traduzca a SQL.
- B. Expresar consultas con tipos .NET que el proveedor intenta traducir al origen de datos. **(correcta)**
- C. Eliminar siempre la necesidad de índices.
- D. Evitar cualquier acceso a la red.

Explicación: Expresar consultas con tipos .NET que el proveedor intenta traducir al origen de datos. La traducción es potente pero no ilimitada; hay que comprender qué se ejecuta en el servidor.

### Propuesta

Al componer consultas IQueryable de EF Core con un proveedor relacional, ¿qué aporta LINQ como forma de expresar la consulta?

- A. Ejecutar los predicados como delegados locales después de descargar toda la fuente.
- B. Expresar consultas tipadas y traducir al origen las operaciones compatibles con el proveedor. **(correcta)**
- C. Versionar el esquema cada vez que cambia la expresión utilizada para consultar los datos.
- D. Reutilizar resultados entre contextos por conservar una expresión de consulta idéntica.

Explicación: LINQ permite expresar consultas con tipos .NET que EF Core representa para su proveedor y que pueden traducirse al lenguaje del origen, por ejemplo SQL. La traducción tiene límites y depende del proveedor y expresión. En EF Core3+ no se descarga todo silenciosamente para resolver un filtro no traducible; la proyección superior tiene reglas de evaluación cliente distintas. Una representación de consulta reutilizable no equivale a una caché de sus resultados.

- Error A: Ese recorrido describe filtrado local sobre elementos ya recuperados; no es la traducción que caracteriza a la consulta IQueryable del caso.
- Error C: Cambiar una consulta no implica cambiar el modelo de almacenamiento ni generar una migración de esquema.
- Error D: Reutilizar procesamiento o forma de consulta no garantiza reutilizar filas anteriores entre contextos sin volver al origen.

- [Microsoft: Querying data](https://learn.microsoft.com/en-us/ef/core/querying/) · Introducción: consultas LINQ con tipos .NET sobre contexto y entidades · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Client vs server evaluation](https://learn.microsoft.com/en-us/ef/core/querying/client-eval) · Introducción; Unsupported client evaluation; evaluación parcial de proyección superior · versión: Leída el 30-10-2026. EF Core3+ rechaza expresiones no traducibles fuera de la proyección superior, salvo cambio explícito a evaluación cliente. · comprobado: 2026-10-30
- [Microsoft: Advanced performance topics](https://learn.microsoft.com/en-us/ef/core/performance/advanced-performance-topics) · Connection pooling considerations; diferencia entre pooling de conexiones y DbContext · versión: Leída el 30-10-2026. Se usan contratos de reutilización y driver; no benchmarks, recomendaciones de valores concretos o ejemplos de acceso a tenant. · comprobado: 2026-10-30
- [Microsoft: Migrations overview](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/) · Introducción; snapshot del modelo, archivos de migración e historial aplicado · versión: Leída el 30-10-2026. Versionar cambios de esquema no equivale a backup o garantía de no perder datos con cualquier modificación. · comprobado: 2026-10-30

Partida: `13630adbe3db2f37351d647ae2046a92d73ca1b90efcb823238d3aff3b86da6c` · propuesta: `8ba4686a825652419683adff3d74b701e5ef0a55c9cd377396984930092ec9ea`

## MAN-GSI-P15-086

Decisión: pending_review · acción: revise.

Motivo: Conservar seguimiento para persistencia y clave A; comparar mecanismos próximos de estado, esquema, concurrencia y auditoría.

### Antes

¿Qué es el change tracking de EF Core?

- A. El seguimiento del estado y cambios de entidades para determinar qué debe persistirse. **(correcta)**
- B. Un sistema de control de versiones Git.
- C. Un log de Kestrel.
- D. Una auditoría de seguridad automática completa.

Explicación: El seguimiento del estado y cambios de entidades para determinar qué debe persistirse. El tracking facilita actualizaciones, pero tiene coste y no siempre se necesita en consultas de solo lectura.

### Propuesta

¿Qué es el change tracking de EF Core?

- A. Mantener el estado y los cambios de entidades para decidir qué persistir al guardar. **(correcta)**
- B. Versionar el esquema entre las revisiones del modelo mediante operaciones de migración.
- C. Comparar un token con su valor original para detectar cambios de otros escritores.
- D. Registrar un historial duradero de todos los cambios aplicados para una auditoría completa.

Explicación: El change tracker mantiene entidades y sus estados, como Added, Modified o Deleted, y permite determinar operaciones cuando se llama a SaveChanges. Su función y coste difieren de versionar esquemas, comprobar concurrencia o conservar un historial de auditoría. El seguimiento puede ser innecesario para determinadas consultas de lectura y no es un log durable de todo lo ocurrido en la base.

- Error B: Versionar cambios de esquema corresponde a migraciones; el tracking se refiere al estado de instancias de entidades durante la unidad de trabajo.
- Error C: El token de concurrencia ayuda a detectar cambios competidores al actualizar o borrar; no define el mecanismo general de seguimiento de estados.
- Error D: El tracker no constituye por sí solo una auditoría histórica completa y persistente de todas las operaciones de la base de datos.

- [Microsoft: Change tracking](https://learn.microsoft.com/en-us/ef/core/change-tracking/) · Introducción; How to track entities; Entity states; relación con SaveChanges · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Tracking vs no-tracking](https://learn.microsoft.com/en-us/ef/core/querying/tracking) · Tracking queries; No-tracking queries; Identity resolution y proyecciones · versión: Leída el 30-10-2026. No tracking no garantiza más velocidad en todo caso ni resuelve por sí solo N+1, transacciones o concurrencia. · comprobado: 2026-10-30
- [Microsoft: Migrations overview](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/) · Introducción; snapshot del modelo, archivos de migración e historial aplicado · versión: Leída el 30-10-2026. Versionar cambios de esquema no equivale a backup o garantía de no perder datos con cualquier modificación. · comprobado: 2026-10-30
- [Microsoft: Handling concurrency conflicts](https://learn.microsoft.com/en-us/ef/core/saving/concurrency) · Optimistic concurrency; comparación del token original en UPDATE/DELETE; DbUpdateConcurrencyException y resolución · versión: Leída el 30-10-2026. Rowversion es específico de SQL Server; también existen tokens gestionados por aplicación. No se interpreta como credencial, aislamiento o resolución automática de conflictos. · comprobado: 2026-10-30

Partida: `625137efeb0058a223e146e21613fc819ba6435e3a556255fda9a0cb98822d3c` · propuesta: `d017065e9f7321e779fcd6a70dd1742aa522499e4dba588bd27612b8a85df15b`

## MAN-GSI-P15-087

Decisión: pending_review · acción: revise.

Motivo: Conservar no-tracking para lectura y clave A; caso que exige evitar registro de entidades, sin prometer más rapidez universal.

### Antes

¿Cuándo es especialmente útil \`AsNoTracking()\`?

- A. En consultas de solo lectura donde no se necesita que el contexto detecte cambios de las entidades. **(correcta)**
- B. Cuando se va a modificar y guardar cada entidad necesariamente.
- C. Para iniciar una transacción distribuida.
- D. Para desactivar la seguridad SQL.

Explicación: En consultas de solo lectura donde no se necesita que el contexto detecte cambios de las entidades. No tracking puede reducir memoria y coste de seguimiento en escenarios de lectura.

### Propuesta

Una pantalla consulta entidades para mostrar un catálogo y no modificará sus datos. Se quiere evitar que el contexto registre esas entidades para detectar cambios. ¿Cuándo resulta útil AsNoTracking?

- A. Usar AsNoTracking para no registrar esas entidades en el tracker del contexto. **(correcta)**
- B. Usar AsTracking para conservar estados y detectar cambios antes de responder.
- C. Usar Include para que cargar relaciones desactive el seguimiento de entidades.
- D. Abrir una transacción explícita para que el contexto deje de seguir los resultados.

Explicación: AsNoTracking evita registrar las entidades de esa consulta en el tracker del contexto y es apropiado cuando solo se muestran datos sin guardar sus cambios mediante ese seguimiento. Puede reducir costes, pero no garantiza mayor velocidad en todo caso: importan duplicación e identidad de instancias. No reduce por sí solo columnas o número de consultas ni impide adjuntar entidades después de forma explícita.

- Error B: AsTracking pide precisamente el seguimiento que el caso no necesita; no es la opción para evitar registrar los resultados.
- Error C: Include controla carga de relaciones y no convierte por sí mismo una consulta en no-tracking.
- Error D: Una transacción delimita operaciones de base de datos; no desactiva automáticamente el tracker del contexto.

- [Microsoft: Tracking vs no-tracking](https://learn.microsoft.com/en-us/ef/core/querying/tracking) · Tracking queries; No-tracking queries; Identity resolution y proyecciones · versión: Leída el 30-10-2026. No tracking no garantiza más velocidad en todo caso ni resuelve por sí solo N+1, transacciones o concurrencia. · comprobado: 2026-10-30
- [Microsoft: Eager loading](https://learn.microsoft.com/en-us/ef/core/querying/related-data/eager) · Eager loading; Include/ThenInclude; precauciones al cargar colecciones relacionadas · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Using transactions](https://learn.microsoft.com/en-us/ef/core/saving/transactions) · Default transaction behavior; Controlling automatic transactions; Using transactions; proveedor y ejecución · versión: Leída el 30-10-2026. Atomicidad de una llamada con proveedor compatible y configuración predeterminada; WhenNeeded no exige crear siempre una transacción adicional. No se promete atomicidad de efectos externos. · comprobado: 2026-10-30

Partida: `bca60fe264fc57677fa55708b832e51b8b0ce1def6cae90cb50acbca5ec5d40d` · propuesta: `5862c9a3e86cb963bdbc1c5858a8087ead54f69915aceaa1d899f012302d9992`

## MAN-GSI-P15-088

Decisión: pending_review · acción: revise.

Motivo: Conservar evolución de esquema y clave C; distinguir migración, ingeniería inversa, backup y tracking.

### Antes

¿Qué son las migraciones de EF Core?

- A. Un sistema para migrar .NET a Java.
- B. Un reemplazo de las pruebas de integración.
- C. Un mecanismo para versionar y aplicar cambios del esquema derivados del modelo de datos. **(correcta)**
- D. Una copia de seguridad completa de la base de datos.

Explicación: Un mecanismo para versionar y aplicar cambios del esquema derivados del modelo de datos. Las migraciones ayudan a evolucionar el esquema; no sustituyen estrategia de backup, revisión ni despliegue controlado.

### Propuesta

¿Qué son las migraciones de EF Core?

- A. Generar clases y metadatos iniciales a partir de una base de datos ya existente.
- B. Guardar una copia recuperable de todos los datos y archivos de la base de producción.
- C. Versionar y aplicar cambios del esquema derivados de la evolución del modelo de datos. **(correcta)**
- D. Detectar el estado de las entidades para generar escrituras durante cada SaveChanges.

Explicación: Las migraciones describen evolución versionada del esquema. EF Core compara el modelo con su snapshot anterior para generar operaciones y registra cuáles se han aplicado. No equivale a reconstruir el modelo desde una base existente, hacer un backup o guardar cambios de instancias. Los cambios deben revisarse; el mecanismo no garantiza conservar datos ante cualquier operación destructiva o cambio manual del esquema.

- Error A: Generar un modelo desde una base existente es ingeniería inversa o scaffolding; es una función distinta de versionar la evolución del esquema.
- Error B: Una copia recuperable de datos y archivos es un backup. Una migración no contiene por definición ese respaldo completo.
- Error D: Detectar estados para escrituras corresponde a change tracking y SaveChanges, no a versionar el esquema.

- [Microsoft: Migrations overview](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/) · Introducción; snapshot del modelo, archivos de migración e historial aplicado · versión: Leída el 30-10-2026. Versionar cambios de esquema no equivale a backup o garantía de no perder datos con cualquier modificación. · comprobado: 2026-10-30
- [Microsoft: EF Core overview](https://learn.microsoft.com/en-us/ef/core/) · Introducción; O/RM; The model y relación entre entidades y contexto · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Change tracking](https://learn.microsoft.com/en-us/ef/core/change-tracking/) · Introducción; How to track entities; Entity states; relación con SaveChanges · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `6467dd84a7a7ba202d459fd076464d51863726f3fe9b6a47e7a24cd6d0ada9a4` · propuesta: `7df0e648e286c25e8b8e09c7481a0daeffb700a46d5b4df5f79b4fd687452024`

## MAN-GSI-P15-089

Decisión: pending_review · acción: revise.

Motivo: Conservar N+1 y clave D; caso con relaciones no cargadas y consultas observadas, sin confundirlo con volumen o joins.

### Antes

¿Qué problema describe el patrón N+1 en acceso a datos?

- A. Crear automáticamente N índices nuevos por cada entidad consultada para acelerar el acceso, aunque no se analicen las columnas utilizadas.
- B. Ejecutar exactamente N consultas en paralelo como estrategia óptima, sin consultas iniciales ni dependencia del número de elementos recuperados.
- C. Guardar N entidades mediante una sola transacción, evitando cualquier consulta adicional y reduciendo siempre el coste de acceso a datos.
- D. Realizar una consulta inicial y después muchas consultas adicionales, por ejemplo una por cada elemento, generando sobrecoste. **(correcta)**

Explicación: Realizar una consulta inicial y después muchas consultas adicionales, por ejemplo una por cada elemento, generando sobrecoste. N+1 puede aparecer con ORMs si se acceden relaciones de forma ineficiente.

### Propuesta

Con lazy loading habilitado, se consultan doce categorías y luego se accede a sus productos aún no cargados. Sin caché ni reintentos, el registro muestra una consulta inicial y doce de relaciones. ¿Qué problema describe?

- A. Una carga por lotes que obtiene las relaciones con una sola consulta adicional.
- B. Un join que repite columnas de las categorías dentro de una consulta única.
- C. Una proyección que devuelve columnas innecesarias sin consultas adicionales.
- D. Una consulta inicial y otra por categoría al cargar sus relaciones: un N+1. **(correcta)**

Explicación: El recorrido ejecuta una consulta para las categorías y otras doce para sus productos: trece accesos en el caso descrito. El coste crece con el número de categorías y sus viajes adicionales al origen, no solo con las filas de una consulta. Es el patrón N+1 típico de acceder a relaciones bajo demanda. Puede evitarse planificando los datos necesarios; no se deduce que cualquier acceso lazy produzca siempre exactamente ese número.

- Error A: Una consulta adicional para el conjunto no coincide con las doce consultas de relación observadas en el caso.
- Error B: Un join puede duplicar datos y tener otros costes, pero no explica las consultas separadas por categoría registradas aquí.
- Error C: Recuperar demasiadas columnas es otro problema de eficiencia; no explica los viajes adicionales por relaciones.

- [Microsoft: Efficient querying](https://learn.microsoft.com/en-us/ef/core/performance/efficient-querying) · Project only properties you need; Avoid cartesian explosion; Beware of lazy loading: N+1 · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Lazy loading](https://learn.microsoft.com/en-us/ef/core/querying/related-data/lazy) · Lazy loading with proxies; carga al acceder a navegación; advertencia N+1; ILazyLoader · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Single vs split queries](https://learn.microsoft.com/en-us/ef/core/querying/single-split-queries) · Cartesian explosion; Split queries; costes y consistencia de consultas divididas · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `0222acb90e6ef290a128782d246c9b58ddd4a3b84b17cc8d5d989906cde2d8b5` · propuesta: `308ad70fbc5bbf425512c68c84e4748f2986cede68c3ca2d9b1e872aaa430b10`

## MAN-GSI-P15-090

Decisión: pending_review · acción: revise.

Motivo: Conservar planificación de carga y clave C; retirar la refutación explícita de un distractor y matizar joins y split queries.

### Antes

¿Qué técnica puede ayudar a evitar un N+1 cuando realmente se necesitan relaciones asociadas?

- A. Recorrer las entidades y cargar cada relación bajo demanda, confiando en que el proveedor agrupe después las consultas.
- B. Desactivar el seguimiento del contexto, aunque esta opción reduzca coste de tracking pero no el número de consultas emitidas.
- C. Diseñar la consulta para traer los datos necesarios de forma controlada, por ejemplo con proyección o carga eager adecuada. **(correcta)**
- D. Compartir un único DbContext global para reutilizar entidades y relaciones entre todas las peticiones concurrentes.

Explicación: Diseñar la consulta para traer los datos necesarios de forma controlada, por ejemplo con proyección o carga eager adecuada. No existe una única receta; la clave es controlar qué datos se cargan y cuántas consultas se generan.

### Propuesta

Si se necesitan relaciones asociadas, ¿qué técnica permite abordar un N+1 de forma controlada?

- A. Acceder a cada navegación bajo demanda y confiar en que el proveedor agrupe sus consultas.
- B. Desactivar tracking para que todas las relaciones se lean mediante una consulta única.
- C. Planificar datos y relaciones necesarios mediante proyección o carga anticipada adecuada. **(correcta)**
- D. Compartir un DbContext global entre peticiones para reutilizar sus entidades cargadas.

Explicación: La estrategia debe controlar los datos y relaciones solicitados y las consultas emitidas. Una proyección o carga eager adecuada puede evitar el recorrido por entidad del N+1. Esto no significa traer todas las relaciones siempre o forzar una única SQL: los joins pueden multiplicar datos y las consultas divididas tienen sus propios costes y garantías de consistencia. Debe comprobarse el comportamiento real del proveedor.

- Error A: La carga bajo demanda puede provocar una consulta por entidad; no existe esa agrupación automática general que elimine el patrón.
- Error B: No-tracking cambia el seguimiento, no convierte por sí mismo las cargas de relaciones en una sola consulta.
- Error D: Compartir un contexto entre peticiones concurrentes rompe su uso previsto y no es una estrategia segura de caché o carga de relaciones.

- [Microsoft: Efficient querying](https://learn.microsoft.com/en-us/ef/core/performance/efficient-querying) · Project only properties you need; Avoid cartesian explosion; Beware of lazy loading: N+1 · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Eager loading](https://learn.microsoft.com/en-us/ef/core/querying/related-data/eager) · Eager loading; Include/ThenInclude; precauciones al cargar colecciones relacionadas · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Single vs split queries](https://learn.microsoft.com/en-us/ef/core/querying/single-split-queries) · Cartesian explosion; Split queries; costes y consistencia de consultas divididas · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Tracking vs no-tracking](https://learn.microsoft.com/en-us/ef/core/querying/tracking) · Tracking queries; No-tracking queries; Identity resolution y proyecciones · versión: Leída el 30-10-2026. No tracking no garantiza más velocidad en todo caso ni resuelve por sí solo N+1, transacciones o concurrencia. · comprobado: 2026-10-30
- [Microsoft: DbContext configuration](https://learn.microsoft.com/en-us/ef/core/dbcontext-configuration/) · The DbContext lifetime; unidad de trabajo, consultas, tracking y SaveChanges; concurrencia · versión: Leída el 30-10-2026. La unidad de trabajo no equivale por sí sola a una transacción abierta durante todo el contexto o a una única conexión física permanente. · comprobado: 2026-10-30

Partida: `2e067f4a9690af27d015fa093ed43ebfd557299356e9061e90dd29d4ed03ece6` · propuesta: `c1f85e208b21deda0736caff72c4f0abc79c837bca3b031a886fb89da53df1dd`

## MAN-GSI-P15-091

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de E/S oculta y clave B; alternativas próximas de materialización, eager y caché, sin asumir lazy activo por defecto.

### Antes

¿Qué riesgo tiene activar lazy loading sin analizar el patrón de acceso?

- A. Impedir por completo consultar relaciones porque las propiedades de navegación dejan de estar disponibles durante toda la vida del contexto.
- B. Puede ocultar consultas adicionales y favorecer N+1 o acceso inesperado a la base de datos. **(correcta)**
- C. Deshabilitar todas las transacciones de EF Core, incluidas las iniciadas expresamente antes de acceder a una propiedad relacionada.
- D. Convertir las consultas de EF Core en llamadas ADO.NET sin seguimiento, parámetros ni traducción de expresiones al lenguaje del proveedor.

Explicación: Puede ocultar consultas adicionales y favorecer N+1 o acceso inesperado a la base de datos. La comodidad de carga diferida puede dificultar ver el coste real de E/S.

### Propuesta

¿Qué riesgo tiene activar lazy loading sin analizar el patrón de acceso?

- A. Solo aplaza la materialización inicial y no puede provocar SQL al acceder a una navegación.
- B. Puede ocultar consultas adicionales y producir E/S inesperada al acceder a relaciones. **(correcta)**
- C. Precarga todas las relaciones cuando se crea el contexto para evitar viajes posteriores.
- D. Mantiene una caché global de resultados compartida automáticamente entre todos los contextos.

Explicación: Lazy loading puede cargar una relación cuando se accede a su navegación, de modo que una operación que parece local genere E/S. Al recorrer entidades puede favorecer N+1 si sus relaciones no están ya disponibles. Requiere habilitación o mecanismos como proxies o ILazyLoader; no es la conducta universal de toda aplicación EF Core. No equivale a eager loading ni a una caché compartida entre contextos.

- Error A: Cargar una navegación bajo demanda puede emitir SQL después de la consulta inicial; no se limita a aplazar una materialización sin nuevos accesos.
- Error C: Precargar relaciones corresponde a una estrategia de carga anticipada, no a la carga lazy al acceder.
- Error D: Lazy loading no proporciona por sí mismo una caché universal de resultados entre contextos independientes.

- [Microsoft: Lazy loading](https://learn.microsoft.com/en-us/ef/core/querying/related-data/lazy) · Lazy loading with proxies; carga al acceder a navegación; advertencia N+1; ILazyLoader · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Efficient querying](https://learn.microsoft.com/en-us/ef/core/performance/efficient-querying) · Project only properties you need; Avoid cartesian explosion; Beware of lazy loading: N+1 · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Eager loading](https://learn.microsoft.com/en-us/ef/core/querying/related-data/eager) · Eager loading; Include/ThenInclude; precauciones al cargar colecciones relacionadas · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Advanced performance topics](https://learn.microsoft.com/en-us/ef/core/performance/advanced-performance-topics) · Connection pooling considerations; diferencia entre pooling de conexiones y DbContext · versión: Leída el 30-10-2026. Se usan contratos de reutilización y driver; no benchmarks, recomendaciones de valores concretos o ejemplos de acceso a tenant. · comprobado: 2026-10-30

Partida: `16dfbd37db9e0660863e4e11f785bc477f621690f695ca4da5c872cb14259e4a` · propuesta: `28462f4664d1390fa15ca2f6d4fe60beefee91f0be9e1eb4ca3ccb5987ee0e6a`

## MAN-GSI-P15-092

Decisión: pending_review · acción: revise.

Motivo: Conservar atomicidad de SaveChanges y clave D; caso con varias escrituras y defaults explícitos sin prometer una transacción adicional en todo caso.

### Antes

Cuando \`SaveChanges\` ejecuta varias modificaciones en una sola llamada y el proveedor admite transacciones, ¿qué comportamiento ofrece normalmente EF Core?

- A. Inicia obligatoriamente una transacción distribuida que coordina cualquier servicio externo, cola o base de datos afectada.
- B. Nunca utiliza transacciones y puede dejar aplicadas solo algunas modificaciones aunque el proveedor admita atomicidad.
- C. Confirma por separado cada propiedad modificada, de modo que una misma entidad puede quedar parcialmente actualizada.
- D. Usa una transacción para que la llamada se aplique de forma atómica según las capacidades del proveedor. **(correcta)**

Explicación: Usa una transacción para que la llamada se aplique de forma atómica según las capacidades del proveedor. EF Core protege una llamada a SaveChanges con transacción cuando es posible; operaciones más amplias pueden requerir control explícito.

### Propuesta

Se crea un pedido y se actualizan existencias con varias escrituras en una sola llamada a SaveChanges. Con configuración predeterminada, sin transacción externa y proveedor compatible, ¿qué comportamiento se espera?

- A. Confirmar por separado cada entidad modificada antes de pasar a la siguiente.
- B. Conservar una transacción automática abierta durante toda la vida del contexto.
- C. Aplicar las escrituras sin atomicidad porque no se ha abierto una transacción manual.
- D. Aplicar atómicamente la llamada mediante la transacción necesaria del proveedor. **(correcta)**

Explicación: Con proveedor compatible y configuración predeterminada, EF Core protege los cambios de una llamada a SaveChanges mediante una transacción cuando corresponde. Si falla una de esas escrituras, no se conserva un resultado parcial de esa llamada en la base. WhenNeeded no obliga a abrir una transacción adicional si ya basta la del proveedor. Esto no extiende automáticamente el límite a otras llamadas o efectos externos.

- Error A: El límite predeterminado es la llamada, no un commit independiente por entidad que deje una parte aplicada tras fallar otra.
- Error B: Que el contexto siga vivo no mantiene por defecto una transacción que agrupe todos sus guardados futuros.
- Error C: No abrirla manualmente no elimina el comportamiento transaccional predeterminado con un proveedor que lo admite.

- [Microsoft: Using transactions](https://learn.microsoft.com/en-us/ef/core/saving/transactions) · Default transaction behavior; Controlling automatic transactions; Using transactions; proveedor y ejecución · versión: Leída el 30-10-2026. Atomicidad de una llamada con proveedor compatible y configuración predeterminada; WhenNeeded no exige crear siempre una transacción adicional. No se promete atomicidad de efectos externos. · comprobado: 2026-10-30
- [Microsoft: DbContext configuration](https://learn.microsoft.com/en-us/ef/core/dbcontext-configuration/) · The DbContext lifetime; unidad de trabajo, consultas, tracking y SaveChanges; concurrencia · versión: Leída el 30-10-2026. La unidad de trabajo no equivale por sí sola a una transacción abierta durante todo el contexto o a una única conexión física permanente. · comprobado: 2026-10-30

Partida: `0fb7560b7a48ab37e46d13bc1080c7385a0187bc52d9fdbedf6ceb884705da09` · propuesta: `aab273ae70ceaffe4566e0179d71f294eb80a6eab231696c522dc8f91efb0e71`

## MAN-GSI-P15-093

Decisión: pending_review · acción: revise.

Motivo: Conservar límite explícito de unidad de negocio y clave D; caso de dos SaveChanges en una base compatible, sin afirmar coordinación universal de recursos.

### Antes

¿Cuándo puede ser necesario controlar una transacción explícitamente?

- A. Para toda consulta de lectura, creando siempre una transacción manual aunque el proveedor y el límite de negocio no lo requieran.
- B. Nunca, porque cada llamada a \`SaveChanges\` coordina automáticamente cualquier operación y recurso externo de la unidad de negocio.
- C. Cuando se utiliza Kestrel, ya que el servidor HTTP es quien abre y confirma las transacciones de persistencia de cada petición.
- D. Cuando una unidad de negocio abarca varias operaciones/SaveChanges o recursos y se necesita delimitar la atomicidad de forma concreta. **(correcta)**

Explicación: Cuando una unidad de negocio abarca varias operaciones/SaveChanges o recursos y se necesita delimitar la atomicidad de forma concreta. Las transacciones explícitas deben responder a límites de negocio y compatibilidad del proveedor.

### Propuesta

Una unidad de negocio necesita que dos llamadas a SaveChanges sobre la misma base se conserven juntas o se reviertan juntas si falla la segunda. ¿Qué puede requerir su límite de atomicidad?

- A. Confirmar la primera operación en una transacción y abrir otra independiente para la segunda.
- B. Confiar en que la atomicidad individual de cada SaveChanges agrupa por sí sola los dos.
- C. Reutilizar el mismo DbContext para que todos sus guardados formen una transacción única.
- D. Delimitar una transacción compatible que abarque los guardados y confirmar al completarlos. **(correcta)**

Explicación: Si la unidad requiere que dos guardados se apliquen o reviertan juntos, el límite debe abarcar ambos con una transacción compatible y confirmación final. La atomicidad de cada llamada por separado no garantiza la del conjunto y compartir contexto tampoco lo hace. Hay que respetar proveedor y estrategias de reintento. Una transacción de base de datos no incorpora por sí misma correos o servicios remotos no participantes.

- Error A: Dos transacciones confirmadas de forma independiente permiten que la primera permanezca aunque falle la segunda.
- Error B: Cada llamada puede ser atómica individualmente y aun así dejar un resultado parcial de la unidad de negocio que las engloba.
- Error C: El contexto coordina entidades, pero su ciclo de vida no implica una única transacción para todas las llamadas.

- [Microsoft: Using transactions](https://learn.microsoft.com/en-us/ef/core/saving/transactions) · Default transaction behavior; Controlling automatic transactions; Using transactions; proveedor y ejecución · versión: Leída el 30-10-2026. Atomicidad de una llamada con proveedor compatible y configuración predeterminada; WhenNeeded no exige crear siempre una transacción adicional. No se promete atomicidad de efectos externos. · comprobado: 2026-10-30
- [Microsoft: DbContext configuration](https://learn.microsoft.com/en-us/ef/core/dbcontext-configuration/) · The DbContext lifetime; unidad de trabajo, consultas, tracking y SaveChanges; concurrencia · versión: Leída el 30-10-2026. La unidad de trabajo no equivale por sí sola a una transacción abierta durante todo el contexto o a una única conexión física permanente. · comprobado: 2026-10-30

Partida: `4fe2add9958b886dc862426f9d1b0610ae6b649d73ab5735f4f797ff948657b5` · propuesta: `bdf3c38200126282f888b3d47d799b81a2691e10bb00620e41acdd7376840d3c`

## MAN-GSI-P15-094

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave C; separar parametrización de valores, interpolación arbitraria e identificadores de esquema.

### Antes

¿Qué precaución debe tomarse al ejecutar SQL sin procesar?

- A. Codificar la entrada en Base64 antes de concatenarla, suponiendo que la codificación impide que el motor la interprete como SQL.
- B. Validar únicamente en el cliente y construir después la consulta en el servidor con el texto ya aceptado por el navegador.
- C. Parametrizar correctamente valores y evitar concatenar entrada del usuario para reducir riesgo de inyección. **(correcta)**
- D. Usar un procedimiento almacenado concatenando dentro de él la entrada, porque su ubicación en la base elimina automáticamente la inyección.

Explicación: Parametrizar correctamente valores y evitar concatenar entrada del usuario para reducir riesgo de inyección. La parametrización es una defensa esencial; el ORM no protege una consulta que se construye inseguramente.

### Propuesta

¿Qué precaución debe tomarse al ejecutar SQL sin procesar?

- A. Codificar la entrada en Base64 antes de concatenarla, suponiendo que la codificación impide que el motor la interprete como SQL.
- B. Validar únicamente en el cliente y construir después la consulta en el servidor con el texto ya aceptado por el navegador.
- C. Parametrizar correctamente valores y evitar concatenar entrada del usuario para reducir riesgo de inyección. **(correcta)**
- D. Usar un procedimiento almacenado concatenando dentro de él la entrada, porque su ubicación en la base elimina automáticamente la inyección.

Explicación: Parametrizar valores mantiene los datos separados de la estructura del comando SQL. Debe usarse una API y un enlace de parámetros correctos; insertar valores en un string arbitrario no se vuelve seguro por usar interpolación o un ORM. Los nombres de columna u otras partes del esquema no son parámetros de valor: necesitan diseño y validación específicos. Un procedimiento con SQL dinámico inseguro también puede ser vulnerable.

- Error A: Base64 cambia la representación, pero no convierte un dato concatenado en un parámetro ni protege la estructura del comando.
- Error B: El cliente puede omitirse o manipularse. Su validación no vuelve segura la concatenación del valor recibido por el servidor.
- Error D: La ubicación del código en un procedimiento no elimina una concatenación insegura dentro del SQL dinámico.

- [Microsoft: SQL queries](https://learn.microsoft.com/en-us/ef/core/querying/sql-queries) · Passing parameters; Dynamic SQL and parameters; valores frente a identificadores de esquema · versión: Leída el 30-10-2026. FromSql7+ y FromSqlInterpolated frente a FromSqlRaw; no toda interpolación de string es parametrización ni un identificador de columna es un parámetro de valor. · comprobado: 2026-10-30
- [Microsoft: ADO.NET overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview) · Introducción; proveedores, conexión, comandos, resultados y manipulación de datos · versión: Leída el 30-10-2026. Ruta histórica de .NET Framework usada para conceptos de ADO.NET; no se presentan DLL o proveedores de aquella plataforma como requisito universal moderno. · comprobado: 2026-10-30

Partida: `d2db9d75e6b654938df1f862fb26e9281a47ed306e42854b9697ebe98fa34441` · propuesta: `831f11690490f307d968bcbdcda45a718da7441139ff840ddd9874819c2171b0`

## MAN-GSI-P15-095

Decisión: pending_review · acción: revise.

Motivo: Conservar pooling lógico/físico y clave C; usar un proveedor concreto como respaldo sin generalizar sus defaults.

### Antes

¿Qué afirmación sobre connection pooling es correcta?

- A. Crear obligatoriamente una conexión física nueva en cada llamada a \`Open\`, aunque exista en el pool otra conexión compatible disponible.
- B. Impedir que EF Core utilice el pooling proporcionado por el proveedor, porque su seguimiento de entidades exige conexiones físicas exclusivas.
- C. Los proveedores de datos pueden reutilizar conexiones físicas mediante pools; abrir/cerrar lógicamente una conexión no implica siempre crear/destruir una conexión física. **(correcta)**
- D. Hacer innecesario cerrar o liberar las conexiones lógicas, ya que el pool recupera automáticamente cualquier recurso aún utilizado.

Explicación: Los proveedores de datos pueden reutilizar conexiones físicas mediante pools; abrir/cerrar lógicamente una conexión no implica siempre crear/destruir una conexión física. El pool mejora eficiencia, pero el código debe seguir disponer conexiones/contextos correctamente.

### Propuesta

¿Qué afirmación sobre connection pooling es correcta?

- A. Cada apertura lógica exige otra conexión física aunque exista una compatible disponible.
- B. Se reutiliza el DbContext y su tracker en lugar de mantener conexiones del proveedor.
- C. Un proveedor puede reutilizar conexiones físicas al abrir y cerrar conexiones lógicas. **(correcta)**
- D. El pool conserva resultados de consultas para no volver a ejecutarlas contra el origen.

Explicación: Con pooling habilitado, un proveedor como SqlClient puede entregar una conexión física compatible ya disponible al abrir una conexión lógica. Close o Dispose normalmente la devuelven al pool para otro uso, sin garantizar que una conexión inválida se conserve o que siempre haya una reutilizable. El código sigue debiendo liberarla correctamente. Pool de conexiones, pool de DbContext y caché de resultados son mecanismos distintos.

- Error A: Si hay una conexión compatible utilizable en el pool, no es obligatorio crear otra física para cada apertura lógica.
- Error B: Reutilizar instancias de contexto es DbContext pooling; el pool de conexiones opera en otra capa, gestionada por el driver.
- Error D: Reutilizar un canal de conexión no almacena por sí mismo los resultados de cada consulta ni evita volver a ejecutarla.

- [Microsoft: SQL Server connection pooling](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/sql-server-connection-pooling) · Introducción; Open, Close y Dispose; Add connections; devolución de conexiones compatibles al pool · versión: Leída el 30-10-2026. Fuente concreta SQL Server/SqlClient para mostrar un proveedor con pooling. No se generalizan valores por defecto o configuración a todos los proveedores. · comprobado: 2026-10-30
- [Microsoft: Advanced performance topics](https://learn.microsoft.com/en-us/ef/core/performance/advanced-performance-topics) · Connection pooling considerations; diferencia entre pooling de conexiones y DbContext · versión: Leída el 30-10-2026. Se usan contratos de reutilización y driver; no benchmarks, recomendaciones de valores concretos o ejemplos de acceso a tenant. · comprobado: 2026-10-30

Partida: `6b685801fab575bafa017d2f46a2dd983ba1dcd2d4ffe369ffb2ba8ef86ef544` · propuesta: `b632b53fc95d6c45a8c8c81b990d1706282c6633c2b95b23f56f41f605a78881`

## MAN-GSI-P15-096

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa y clave B; distinguir concurrencia optimista, credenciales, aislamiento y caché, con alcance de rowversion preciso.

### Antes

¿Para qué sirve un token de concurrencia en EF Core?

- A. Una credencial emitida para autenticar al usuario y transportar sus claims durante una petición HTTP.
- B. Para detectar conflictos cuando otro proceso modifica una fila entre lectura y actualización, según la estrategia elegida. **(correcta)**
- C. Un nivel de aislamiento de transacción que determina qué cambios concurrentes resultan visibles entre operaciones.
- D. Un identificador empleado para reutilizar el plan o el resultado de una consulta LINQ ya ejecutada.

Explicación: Para detectar conflictos cuando otro proceso modifica una fila entre lectura y actualización, según la estrategia elegida. La concurrencia optimista necesita una señal, como rowversion u otra propiedad, para detectar cambios competidores.

### Propuesta

¿Para qué sirve un token de concurrencia en EF Core?

- A. Una credencial emitida para autenticar al usuario y transportar sus claims durante una petición HTTP.
- B. Para detectar conflictos cuando otro proceso modifica una fila entre lectura y actualización, según la estrategia elegida. **(correcta)**
- C. Un nivel de aislamiento de transacción que determina qué cambios concurrentes resultan visibles entre operaciones.
- D. Un identificador empleado para reutilizar el plan o el resultado de una consulta LINQ ya ejecutada.

Explicación: Un token de concurrencia permite comparar el valor original leído con el que hay al actualizar o borrar y detectar cambios competidores según la estrategia configurada. Un conflicto puede producir DbUpdateConcurrencyException y requiere una decisión de la aplicación; el token no resuelve automáticamente cómo conservar o combinar datos. Rowversion es una opción de SQL Server y otros casos pueden gestionar el token en la aplicación.

- Error A: Una credencial de identidad o claims pertenece a autenticación; no es el valor usado para detectar una modificación competidora de la fila.
- Error C: El aislamiento regula visibilidad y coordinación transaccional; no define por sí mismo la propiedad comparada como token optimista.
- Error D: Una clave de caché de consulta persigue reutilización de procesamiento o resultados, no detectar cambios de la fila desde su lectura.

- [Microsoft: Handling concurrency conflicts](https://learn.microsoft.com/en-us/ef/core/saving/concurrency) · Optimistic concurrency; comparación del token original en UPDATE/DELETE; DbUpdateConcurrencyException y resolución · versión: Leída el 30-10-2026. Rowversion es específico de SQL Server; también existen tokens gestionados por aplicación. No se interpreta como credencial, aislamiento o resolución automática de conflictos. · comprobado: 2026-10-30
- [Microsoft: Using transactions](https://learn.microsoft.com/en-us/ef/core/saving/transactions) · Default transaction behavior; Controlling automatic transactions; Using transactions; proveedor y ejecución · versión: Leída el 30-10-2026. Atomicidad de una llamada con proveedor compatible y configuración predeterminada; WhenNeeded no exige crear siempre una transacción adicional. No se promete atomicidad de efectos externos. · comprobado: 2026-10-30
- [Microsoft: Advanced performance topics](https://learn.microsoft.com/en-us/ef/core/performance/advanced-performance-topics) · Connection pooling considerations; diferencia entre pooling de conexiones y DbContext · versión: Leída el 30-10-2026. Se usan contratos de reutilización y driver; no benchmarks, recomendaciones de valores concretos o ejemplos de acceso a tenant. · comprobado: 2026-10-30

Partida: `16f2b99346e2614fcb8932419d474ee3bc11026591caa0781eb68c18e09ec866` · propuesta: `7ebe030af162a340f6589ac41c0d057d768453033fbbccdad78fd4e55f460078`
