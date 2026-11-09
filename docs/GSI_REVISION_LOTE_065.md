# GSI-EDITORIAL-065 — revisión propuesta

Preparado: 2026-10-30. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `833b9301b8b808de8cb3e16cdc3f18b68c4bd2eec9730a1be29191f0a5896fba`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P15-097

Decisión: pending_review · acción: revise.

Motivo: Conservar frontera servidor/cliente y clave A; acotar versión, predicado y decisión de ejecución para evitar generalizaciones.

### Antes

Si una expresión LINQ no puede traducirse al proveedor de EF Core en una parte esencial de la consulta, ¿qué debe hacer el desarrollador?

- A. Revisar la consulta y separar o reformular lo que deba ejecutarse en servidor o cliente de forma consciente. **(correcta)**
- B. Cambiar Kestrel por IIS para que el servidor web traduzca cualquier expresión LINQ y la convierta automáticamente en SQL válido.
- C. Suponer que siempre se ejecutará correctamente en el proveedor, aunque la operación carezca de traducción y afecte a una parte esencial.
- D. Desactivar el compilador de C\# para que EF Core interprete directamente el código fuente y decida en tiempo de ejecución dónde evaluarlo.

Explicación: Revisar la consulta y separar o reformular lo que deba ejecutarse en servidor o cliente de forma consciente. No todo C\# es traducible a SQL; hay que controlar la frontera entre consulta remota y ejecución en memoria.

### Propuesta

En EF Core3+ con un proveedor relacional, un Where de una consulta IQueryable usa un método propio no traducible y falla al ejecutarse. ¿Qué actuación corresponde?

- A. Reformular el filtro o decidir explícitamente qué parte ejecutar en cliente y con qué coste. **(correcta)**
- B. Activar AsNoTracking para que el predicado pase a ser traducible por el proveedor.
- C. Añadir ToList al final para que EF Core traduzca los métodos propios del predicado.
- D. Dejar el filtro intacto para que EF Core descargue las filas y lo evalúe sin intervención.

Explicación: Un predicado no traducible fuera de la proyección superior provoca una excepción en EF Core3+. Hay que reformularlo con operaciones compatibles o delimitar de forma consciente una evaluación cliente, valorando las filas transferidas y el coste. Cambiar a cliente antes de filtrar puede descargar demasiados datos; no es una solución de rendimiento automática.

- Error B: AsNoTracking modifica el seguimiento de entidades, no la capacidad del proveedor para traducir ese predicado.
- Error C: Materializar al final solicita la ejecución de la consulta; no enseña al proveedor a traducir un método desconocido del filtro.
- Error D: Ese cambio implícito a evaluación cliente no es el comportamiento de EF Core3+ para un predicado no traducible fuera de la proyección superior.

- [Microsoft: Client vs server evaluation](https://learn.microsoft.com/en-us/ef/core/querying/client-eval) · Introducción; Unsupported client evaluation; Explicit client evaluation · versión: EF Core3+; texto público comprobado el 30-10-2026. Se distingue predicado de proyección superior y decisión explícita de evaluación cliente. · comprobado: 2026-10-30

Partida: `c3140c75d7b56d442473071bf4108e2f616e0325a8d3080ecdf38b008f126802` · propuesta: `d9d3e918c10605cc345d964f891863b224f2375c64746623a4b525209222fe88`

## MAN-GSI-P15-098

Decisión: pending_review · acción: revise.

Motivo: Conservar materialización y clave A; caso de consulta diferida que separa ejecución, streaming y copia de objetos.

### Antes

¿Qué efecto suele tener \`ToList()\` sobre una consulta LINQ?

- A. Materializa los resultados en ese punto y ejecuta la consulta si era diferida. **(correcta)**
- B. Hace que la consulta deje de usar memoria.
- C. Activa una transacción distribuida.
- D. Convierte la consulta en una migración.

Explicación: Materializa los resultados en ese punto y ejecuta la consulta si era diferida. Materializar marca una frontera importante: a partir de ahí se trabaja sobre datos ya obtenidos.

### Propuesta

Una consulta LINQ diferida termina con ToList y después se recorre varias veces la lista resultante. ¿Qué efecto tiene ToList?

- A. Evalúa la consulta en ese punto y guarda los resultados obtenidos en una lista. **(correcta)**
- B. Conserva el plan diferido para consultar el origen cuando se recorra la lista.
- C. Mantiene un flujo que obtiene cada resultado del origen al acceder a la lista.
- D. Crea una copia profunda de cada objeto y de todas sus referencias relacionadas.

Explicación: ToList enumera la consulta y materializa sus resultados en una List en ese momento. Los recorridos posteriores de esa lista usan los elementos obtenidos, sin volver a ejecutar por ello la consulta original. La lista consume memoria; si contiene referencias a objetos, no se obtiene por ese hecho una copia profunda de sus grafos.

- Error B: La evaluación diferida deja de aplazarse al materializar. La lista contiene resultados, no un plan pendiente de ejecutar en cada recorrido.
- Error C: ToList almacena el conjunto obtenido; no conserva un flujo que lea del origen a medida que se consultan posiciones de la lista.
- Error D: Crear la lista no clona recursivamente sus objetos. Materialización y copia profunda son operaciones diferentes.

- [Microsoft: Enumerable.ToList](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.tolist?view=net-10.0) · Definition; Returns; Examples y Remarks: evaluación inmediata · versión: Vista net-10.0, comprobada el 30-10-2026. Se usa el contrato estable de materialización; no se presupone copia profunda de objetos. · comprobado: 2026-10-30
- [Microsoft: Client vs server evaluation](https://learn.microsoft.com/en-us/ef/core/querying/client-eval) · Introducción; Unsupported client evaluation; Explicit client evaluation · versión: EF Core3+; texto público comprobado el 30-10-2026. Se distingue predicado de proyección superior y decisión explícita de evaluación cliente. · comprobado: 2026-10-30

Partida: `5cc1f6ee71bafc18a87c4abd48d34eb09968033b0062978d6a208d973a2eddf6` · propuesta: `923f8059da07eb98271a100f0b4ee80c2e4d9d17bd8f5d13118441f3a01977d8`

## MAN-GSI-P15-099

Decisión: pending_review · acción: revise.

Motivo: Conservar paginación en origen y clave D; microcaso con empates y sin presentar keyset como solución universal.

### Antes

Para paginar grandes conjuntos de datos, ¿qué enfoque es mejor que cargar todo y recortar en memoria?

- A. Desactivar índices.
- B. Crear un DbContext global para toda la aplicación.
- C. Usar \`ToList()\` de toda la tabla y después \`Skip/Take\` en memoria.
- D. Aplicar paginación en la consulta del origen, con orden estable y estrategia adecuada al caso. **(correcta)**

Explicación: Aplicar paginación en la consulta del origen, con orden estable y estrategia adecuada al caso. La paginación debe reducir transferencia y trabajo en el origen; para grandes volúmenes puede valorarse keyset pagination.

### Propuesta

Una pantalla pagina una tabla grande cuyos registros pueden compartir fecha. Se quiere evitar cargarla entera y que los empates alteren el orden entre páginas. ¿Qué diseño corresponde?

- A. Materializar la tabla y ordenar y recortar la lista para obtener cada página.
- B. Aplicar Take antes de ordenar para limitar pronto el conjunto que se ordena.
- C. Ordenar solo por la fecha repetida y confiar en el orden físico de los empates.
- D. Paginar en el origen con un orden único, por ejemplo fecha y un ID único. **(correcta)**

Explicación: Paginar en la consulta del origen limita las filas transferidas. El orden debe ser totalmente único: añadir un ID único a la fecha resuelve los empates de ordenación. Offset y keyset tienen ventajas y costes distintos según la navegación; un orden único no evita por sí solo todos los efectos de modificaciones concurrentes.

- Error A: Materializar toda la tabla mantiene el coste de transferirla y almacenarla aunque la pantalla muestre pocas filas.
- Error B: Limitar antes de definir el orden global puede seleccionar otro subconjunto; ordenar después no recupera las filas descartadas.
- Error C: Una fecha repetida no determina la posición relativa de los empates. El origen relacional no garantiza un orden físico utilizable como desempate.

- [Microsoft: Pagination](https://learn.microsoft.com/en-us/ef/core/querying/pagination) · Warning: orden totalmente único; Offset pagination; Keyset pagination · versión: Texto comprobado el 30-10-2026. No se promete estabilidad ante toda modificación concurrente o superioridad universal de un método. · comprobado: 2026-10-30
- [Microsoft: Enumerable.ToList](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.tolist?view=net-10.0) · Definition; Returns; Examples y Remarks: evaluación inmediata · versión: Vista net-10.0, comprobada el 30-10-2026. Se usa el contrato estable de materialización; no se presupone copia profunda de objetos. · comprobado: 2026-10-30

Partida: `682940517b95a7ea586a0791ab5c5759615334a1a2832b3843358e486fe05503` · propuesta: `1c8138dd807ee8d47ded32f854594f5fdd0d96b8b0914ce1162a19e6ef219355`

## MAN-GSI-P15-100

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, alternativas y clave B; completar justificaciones de las capas de acceso sin imponer APIs históricas.

### Antes

¿Cuál es la diferencia conceptual más correcta entre ADO.NET y EF Core?

- A. ADO.NET es un ORM con tracking automático y LINQ sobre entidades, mientras EF Core expone únicamente comandos del proveedor.
- B. ADO.NET ofrece acceso más directo a proveedor/comandos; EF Core añade abstracción ORM, tracking y LINQ sobre un modelo de entidades. **(correcta)**
- C. EF Core reemplaza el motor de base de datos y almacena físicamente las tablas sin necesitar un proveedor o servidor subyacente.
- D. Ambos ofrecen exactamente el mismo nivel de abstracción; solo cambia el nombre de las clases utilizadas para abrir la conexión.

Explicación: ADO.NET ofrece acceso más directo a proveedor/comandos; EF Core añade abstracción ORM, tracking y LINQ sobre un modelo de entidades. Elegir nivel de abstracción depende del control, complejidad, rendimiento y mantenibilidad requeridos.

### Propuesta

¿Cuál es la diferencia conceptual más correcta entre ADO.NET y EF Core?

- A. ADO.NET es un ORM con tracking automático y LINQ sobre entidades, mientras EF Core expone únicamente comandos del proveedor.
- B. ADO.NET ofrece acceso más directo a proveedor/comandos; EF Core añade abstracción ORM, tracking y LINQ sobre un modelo de entidades. **(correcta)**
- C. EF Core reemplaza el motor de base de datos y almacena físicamente las tablas sin necesitar un proveedor o servidor subyacente.
- D. Ambos ofrecen exactamente el mismo nivel de abstracción; solo cambia el nombre de las clases utilizadas para abrir la conexión.

Explicación: ADO.NET permite trabajar con proveedores, conexiones, comandos y resultados. EF Core añade un modelo de entidades y capacidades ORM, como consultas LINQ y seguimiento cuando está habilitado. La elección del nivel de abstracción depende del caso; ninguna de esas APIs elimina la necesidad de un motor y un proveedor compatibles.

- Error A: El seguimiento de entidades y las consultas sobre un modelo corresponden al nivel ORM de EF Core. ADO.NET no es ese ORM con los papeles invertidos.
- Error C: Un ORM traduce y coordina acceso a un almacenamiento; no se convierte por ello en el motor que almacena físicamente las tablas.
- Error D: Las diferencias de modelo, consultas y seguimiento cambian la abstracción y el trabajo de la aplicación, no solo nombres de clases.

- [Microsoft: ADO.NET overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview) · Introducción: proveedores, comandos, resultados y distintos niveles de abstracción · versión: Ruta histórica de .NET Framework leída el 30-10-2026; solo conceptos de acceso a datos, sin imponer ensamblados o proveedores históricos. · comprobado: 2026-10-30
- [Microsoft: EF Core overview](https://learn.microsoft.com/en-us/ef/core/) · Introducción; O/RM; The model · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `55e91538681b3fd116958e838d86816cffb0df18346e086cc7f23ab577334ed3` · propuesta: `74cbfe623e3edcce8df8a43eb18cd35b5231b264a8df2875541fdd7ee6e767ba`

## MAN-GSI-P15-101

Decisión: pending_review · acción: revise.

Motivo: Conservar identidad válida previa y clave B; caso de política explícita que evita equiparar lectura de claims con validación.

### Antes

¿Qué debe ocurrir antes de aplicar una regla de autorización basada en identidad?

- A. Debe haberse publicado self-contained.
- B. La petición debe haberse autenticado o disponer de una identidad establecida de forma válida. **(correcta)**
- C. Debe haberse descargado un paquete NuGet.
- D. Debe haberse ejecutado una migración de EF Core.

Explicación: La petición debe haberse autenticado o disponer de una identidad establecida de forma válida. Autorización necesita saber qué principal/identidad se está evaluando.

### Propuesta

Una API recibe un JWT y aplica una política que exige usuario autenticado y un claim concreto. Antes de evaluar esa identidad contra la política, ¿qué debe ocurrir?

- A. Leer los claims del JWT y dar por válida la identidad si el contenido tiene el formato esperado.
- B. Validar la credencial y establecer el principal que se evaluará con los requisitos de la política. **(correcta)**
- C. Aceptar el claim remitido en la petición porque el canal HTTPS protege su integridad en tránsito.
- D. Dar por cumplida la política si aparece una cabecera Authorization con el esquema configurado.

Explicación: Para una política que exige usuario autenticado y un claim, primero debe establecerse un principal a partir de una credencial validada por el mecanismo apropiado. Después se evalúan sus requisitos. En JWT no basta decodificar: deben comprobarse firma, emisor, audiencia y vigencia. No se afirma que cualquier política de autorización exija autenticación; este caso la exige expresamente.

- Error A: Un contenido decodificable puede haber sido fabricado o no estar destinado a esa API; leer claims no sustituye validar la credencial.
- Error C: HTTPS protege el canal con el remitente, pero no convierte un atributo que este envía en una afirmación de identidad de confianza.
- Error D: La presencia de una cabecera o un nombre de esquema no acredita una autenticación válida ni el cumplimiento del claim requerido.

- [Microsoft: Configure JWT bearer authentication](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/configure-jwt-bearer-authentication?view=aspnetcore-10.0) · Implementing JWT bearer token authentication: firma, emisor, audiencia y expiración · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Microsoft: Policy-based authorization](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/policies?view=aspnetcore-10.0) · Introducción; requisitos, políticas con nombre y handlers; RequireAuthenticatedUser · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30

Partida: `bb0270f624d4fa76ad18b4b6d2db9d636e4deb95b454d52b17375df55b3e9dd9` · propuesta: `92529b15695de531329468eefe0068115da8723bf635092fa58f593f49a67865`

## MAN-GSI-P15-102

Decisión: pending_review · acción: revise.

Motivo: Conservar diferencia cookie/bearer y clave B; delimitar transporte, sin confundir sesión, formato y permisos.

### Antes

¿Qué diferencia general existe entre autenticación por cookie y bearer token?

- A. Bearer solo puede usarse en aplicaciones de escritorio.
- B. La cookie suele mantener una sesión web mediante cookie; un bearer token se envía como credencial en cada petición, común en APIs. **(correcta)**
- C. La cookie cifra automáticamente toda la base de datos y bearer no.
- D. Son exactamente el mismo mecanismo de transporte.

Explicación: La cookie suele mantener una sesión web mediante cookie; un bearer token se envía como credencial en cada petición, común en APIs. Ambos pueden ser seguros o inseguros según diseño; la diferencia principal está en el mecanismo de credencial y escenario.

### Propuesta

En su uso HTTP habitual, se compara una cookie de autenticación con un bearer token enviado en la cabecera Authorization. ¿Qué diferencia de presentación de la credencial es correcta?

- A. La cookie exige una sesión en memoria del servidor; el bearer exige que el token sea un JWT.
- B. El navegador puede adjuntar la cookie aplicable; el cliente presenta el bearer en Authorization. **(correcta)**
- C. La cookie concede permisos sobre recursos; el bearer se ocupa del cifrado del canal HTTP.
- D. El navegador adjunta ambos por la misma regla al coincidir dominio y ruta de la petición.

Explicación: En este uso, el navegador envía las cookies aplicables conforme a sus reglas y el cliente presenta el token con Authorization: Bearer. Una cookie de autenticación puede contener un ticket protegido sin exigir una sesión en memoria del servidor. Bearer describe el uso de la credencial, no impone formato JWT ni sustituye TLS o autorización.

- Error A: No es obligatoria una sesión almacenada en memoria para la autenticación por cookie, ni todo bearer tiene formato JWT.
- Error C: Ambas son formas de presentar credenciales. Los permisos se evalúan aparte y la protección del canal corresponde a TLS.
- Error D: Las reglas de envío automático de cookies no hacen que el navegador genere por esa misma razón una cabecera Authorization: Bearer.

- [Microsoft: Cookie authentication without Identity](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/cookie?view=aspnetcore-10.0) · Introducción; UseAuthentication/UseAuthorization; Create an authentication cookie y SignInAsync · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [IETF: Bearer token usage](https://www.rfc-editor.org/rfc/rfc6750.html) · Abstract; §2.1 Authorization Request Header Field · versión: RFC6750, octubre2012; comprobada 30-10-2026. El enunciado acota el transporte a Authorization: Bearer. · comprobado: 2026-10-30
- [Microsoft: Configure JWT bearer authentication](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/configure-jwt-bearer-authentication?view=aspnetcore-10.0) · Implementing JWT bearer token authentication: firma, emisor, audiencia y expiración · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30

Partida: `8850dbd8b73b209b8db99ca20c81580f726ee2ab0ae83781b0d61c89613e3abc` · propuesta: `a7c81471823d44fc2c0f82992f4450fbaab9c54d2340872468e0e0e98c92a47b`

## MAN-GSI-P15-103

Decisión: pending_review · acción: revise.

Motivo: Conservar definición de claim y clave D; comparar afirmación, credencial, requisito y contenedor.

### Antes

¿Qué es un claim en el modelo de identidad?

- A. Un tipo de middleware para archivos estáticos.
- B. Una tabla obligatoria de EF Core.
- C. Un assembly nativo.
- D. Una afirmación sobre una identidad, como identificador, rol, ámbito u otro atributo. **(correcta)**

Explicación: Una afirmación sobre una identidad, como identificador, rol, ámbito u otro atributo. Los claims alimentan decisiones de autorización y contexto de identidad.

### Propuesta

¿Qué es un claim en el modelo de identidad?

- A. Una credencial completa que permite demostrar por sí sola la identidad del solicitante.
- B. Un requisito de acceso que la política exige satisfacer para autorizar una operación.
- C. Un contenedor serializado que reúne todas las afirmaciones y su protección criptográfica.
- D. Una afirmación sobre un sujeto, como su identificador, rol u otro atributo. **(correcta)**

Explicación: Un claim es una afirmación de tipo y valor sobre un sujeto, con contexto como su emisor. Puede contribuir a decisiones de acceso según la política y la confianza en su origen. No es por sí solo una credencial validada ni un permiso universal; tampoco debe confundirse una afirmación con el token que puede contener varias.

- Error A: Una afirmación aislada no demuestra por sí sola quién la presenta o si procede de un emisor de confianza.
- Error B: El requisito expresa lo que la política exige; un claim es información que puede evaluarse para decidir si se cumple.
- Error C: Un token puede transportar varios claims y protección criptográfica; el contenedor no es una afirmación individual.

- [Microsoft: Claims-based authorization](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/claims?view=aspnetcore-10.0) · Introducción: afirmación de tipo/valor sobre un sujeto y evaluación de derechos · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [IETF: JSON Web Token](https://www.rfc-editor.org/rfc/rfc7519.html) · Abstract; §2 Terminology; Appendix B Relationship of JWTs to SAML Assertions · versión: RFC7519, mayo2015; comprobada 30-10-2026; formato distinto de protocolo de autenticación o autorización. · comprobado: 2026-10-30
- [Microsoft: Policy-based authorization](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/policies?view=aspnetcore-10.0) · Introducción; requisitos, políticas con nombre y handlers; RequireAuthenticatedUser · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30

Partida: `55c3725c9488c3a31fb5b2506805e5300051382f87d24d8a10d2efda0d0e451f` · propuesta: `e391534d5c5ca74f3ba5f84484fc4bcd6122a0e3aa12497127b3aaa1297e10e8`

## MAN-GSI-P15-104

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa y clave C; precisar reutilización de requisitos y separación de identidad y permiso.

### Antes

¿Qué ventaja tienen las políticas de autorización frente a dispersar comprobaciones manuales?

- A. Repetir comprobaciones de roles dentro de cada controlador para que cada endpoint mantenga una regla independiente.
- B. Ejecutar toda la autorización en el cliente y confiar en los claims recibidos sin evaluación en el servidor.
- C. Permiten centralizar requisitos y combinaciones de claims/roles de forma reutilizable y comprobable. **(correcta)**
- D. Considerar autorizado a cualquier usuario autenticado, aunque la operación requiera claims, roles o condiciones adicionales.

Explicación: Permiten centralizar requisitos y combinaciones de claims/roles de forma reutilizable y comprobable. Policy-based authorization ayuda a expresar reglas complejas sin duplicar lógica.

### Propuesta

¿Qué ventaja tienen las políticas de autorización frente a dispersar comprobaciones manuales?

- A. Repetir comprobaciones de roles dentro de cada controlador para que cada endpoint mantenga una regla independiente.
- B. Ejecutar toda la autorización en el cliente y confiar en los claims recibidos sin evaluación en el servidor.
- C. Permiten centralizar requisitos y combinaciones de claims/roles de forma reutilizable y comprobable. **(correcta)**
- D. Considerar autorizado a cualquier usuario autenticado, aunque la operación requiera claims, roles o condiciones adicionales.

Explicación: Las políticas reúnen requisitos reutilizables y handlers que los evalúan para un recurso. Ayudan a mantener y comprobar reglas comunes sin dispersarlas entre acciones. Autenticarse no concede automáticamente todos los permisos: la política decide las condiciones exigidas y debe evaluarse en un entorno de confianza.

- Error A: Repetir reglas independientes por controlador es precisamente una fuente de duplicación y divergencias que una política común ayuda a reducir.
- Error B: El cliente puede alterarse. Una decisión local o claims recibidos sin validación no sustituyen la evaluación de acceso confiable en el servidor.
- Error D: Una identidad autenticada aún puede carecer de los roles, claims u otras condiciones de acceso requeridos.

- [Microsoft: Policy-based authorization](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/policies?view=aspnetcore-10.0) · Introducción; requisitos, políticas con nombre y handlers; RequireAuthenticatedUser · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Microsoft: Claims-based authorization](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/claims?view=aspnetcore-10.0) · Introducción: afirmación de tipo/valor sobre un sujeto y evaluación de derechos · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30

Partida: `6087f1e811836fa780b327cf558a73e061048c7c3d4263473542e7d7a8a6e46a` · propuesta: `2e3753ab9160603e667f18722ca660c3f5f2991c2fad7cc18daa2e483be5c938`

## MAN-GSI-P15-105

Decisión: pending_review · acción: revise.

Motivo: Conservar gestión opcional de usuarios y clave C; equilibrar alternativas por nivel de responsabilidad.

### Antes

¿Qué es ASP.NET Core Identity?

- A. El entorno de ejecución de .NET que administra código, memoria y excepciones.
- B. El ORM de .NET utilizado para consultar y persistir entidades en bases de datos.
- C. Un sistema de pertenencia/gestión de usuarios y credenciales para aplicaciones ASP.NET Core, opcional según arquitectura. **(correcta)**
- D. Un protocolo de autorización delegada que permite obtener acceso limitado a recursos.

Explicación: Un sistema de pertenencia/gestión de usuarios y credenciales para aplicaciones ASP.NET Core, opcional según arquitectura. Identity puede gestionar usuarios, contraseñas, tokens y roles, pero no es obligatorio para todas las soluciones.

### Propuesta

¿Qué es ASP.NET Core Identity?

- A. El runtime que ejecuta código .NET y administra memoria y excepciones.
- B. El ORM que consulta y guarda entidades mediante un modelo de datos.
- C. Un sistema opcional para gestionar usuarios, credenciales y funciones de cuenta. **(correcta)**
- D. Un protocolo de autorización delegada para obtener acceso limitado a recursos.

Explicación: ASP.NET Core Identity aporta gestión de usuarios y funciones de cuenta, como contraseñas, perfiles, roles, claims y confirmaciones. Puede integrarse con proveedores externos. Es una opción de arquitectura: no toda aplicación ASP.NET Core necesita Identity ni la autenticación por cookie exige utilizarlo.

- Error A: Ejecutar código y administrar memoria es responsabilidad del runtime; no define el sistema de gestión de cuentas Identity.
- Error B: Consultar y persistir entidades es la función del ORM. Identity puede usar un almacén sin ser el ORM ni exigir un único proveedor.
- Error D: La autorización delegada es el objeto de OAuth. Un sistema de cuentas no se define por ser ese protocolo.

- [Microsoft: Introduction to Identity](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-10.0) · Introducción: usuarios, credenciales, perfiles, roles, claims y proveedores externos · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Microsoft: Cookie authentication without Identity](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/cookie?view=aspnetcore-10.0) · Introducción; UseAuthentication/UseAuthorization; Create an authentication cookie y SignInAsync · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Microsoft: EF Core overview](https://learn.microsoft.com/en-us/ef/core/) · Introducción; O/RM; The model · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [IETF: OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749.html) · §1 Introducción; §1.4 Access Token; §3.3 Access Token Scope · versión: RFC6749, octubre2012; comprobada 30-10-2026 junto a BCP240, sin recomendar flujos históricos por el solo hecho de figurar en el RFC. · comprobado: 2026-10-30

Partida: `b98c686c75105f6a4efcd0a2616a2af5ddb622fd145c691532ab8211b947ff2f` · propuesta: `da9ceabe066ba3da0a3d1e2d436fbb402d7ff5da10f6e7811c0cf2809b2f6580`

## MAN-GSI-P15-106

Decisión: pending_review · acción: revise.

Motivo: Conservar autorización delegada y clave B; distinguir protocolos y formato, sin recomendar flujos históricos inseguros.

### Antes

¿Cuál es el propósito principal de OAuth 2.0?

- A. Definir por sí solo la identidad del usuario como protocolo de autenticación completo.
- B. Delegar autorización para acceso a recursos mediante tokens y scopes. **(correcta)**
- C. Cifrar conexiones TLS.
- D. Gestionar paquetes NuGet.

Explicación: Delegar autorización para acceso a recursos mediante tokens y scopes. OAuth 2.0 es un framework de autorización; para identidad/autenticación suele combinarse con OpenID Connect.

### Propuesta

¿Cuál es el propósito principal de OAuth 2.0?

- A. Estandarizar la autenticación del usuario mediante un ID Token destinado al cliente.
- B. Conceder acceso limitado a recursos mediante autorización, tokens y ámbitos. **(correcta)**
- C. Representar afirmaciones en un formato compacto que pueda firmarse o cifrarse.
- D. Proteger el canal entre dos extremos mediante autenticación y cifrado en tránsito.

Explicación: OAuth2.0 define un marco de autorización para obtener acceso limitado a recursos, por cuenta del propietario o del propio cliente según el flujo. Los ámbitos expresan el alcance concedido. No constituye por sí solo una capa estandarizada de identidad del usuario; OpenID Connect añade esa función. Las recomendaciones de seguridad actuales también deben atender BCP240.

- Error A: El ID Token y la capa de autenticación del usuario son aportaciones de OpenID Connect; no definen el propósito de OAuth2.0 por sí solo.
- Error C: Representar claims de forma compacta describe el formato JWT, que no es el marco de concesión de acceso OAuth.
- Error D: Proteger el canal corresponde a TLS. OAuth necesita una protección de transporte adecuada sin reemplazarla.

- [IETF: OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749.html) · §1 Introducción; §1.4 Access Token; §3.3 Access Token Scope · versión: RFC6749, octubre2012; comprobada 30-10-2026 junto a BCP240, sin recomendar flujos históricos por el solo hecho de figurar en el RFC. · comprobado: 2026-10-30
- [IETF: OAuth 2.0 Security BCP](https://www.rfc-editor.org/rfc/rfc9700.html) · Abstract; actualización de recomendaciones de RFC6749/6750/6819 · versión: RFC9700, BCP240, enero2025; comprobada 30-10-2026; no se implementan ni prueban flujos OAuth. · comprobado: 2026-10-30
- [OpenID Foundation: OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) · §1 Introduction; §1.3 Overview; §2 ID Token; §5.3 UserInfo · versión: Core1.0, Final incorporando errata set2, 15-12-2023; comprobada 30-10-2026. No todos los endpoints son obligatorios en cualquier configuración. · comprobado: 2026-10-30
- [IETF: JSON Web Token](https://www.rfc-editor.org/rfc/rfc7519.html) · Abstract; §2 Terminology; Appendix B Relationship of JWTs to SAML Assertions · versión: RFC7519, mayo2015; comprobada 30-10-2026; formato distinto de protocolo de autenticación o autorización. · comprobado: 2026-10-30
- [IETF: TLS1.3](https://www.rfc-editor.org/rfc/rfc8446.html) · §1 Introduction: autenticación, confidencialidad e integridad; certificados o PSK · versión: RFC8446, agosto2018; comprobada 30-10-2026. La pregunta se acota al uso HTTPS con certificados. · comprobado: 2026-10-30

Partida: `82253b2e1f952bb9177205c82c0ce43755bf7b0611c7b11764c8e17a5a377083` · propuesta: `72d387e8cfa1e358c2841f14eb0bb92cf8897399ac0ce567cedef392c0060277`

## MAN-GSI-P15-107

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, alternativas y clave B; justificar cada tecnología y distinguir ID Token de credencial de acceso.

### Antes

¿Qué aporta OpenID Connect sobre OAuth 2.0?

- A. Un marco de autorización delegada que concede acceso limitado a recursos mediante access tokens y scopes.
- B. Una capa de identidad/autenticación estandarizada, incluyendo ID Token y endpoints asociados. **(correcta)**
- C. Un formato compacto para representar y firmar claims que puede utilizarse en distintos protocolos de identidad.
- D. Un protocolo de federación basado en aserciones XML intercambiadas entre proveedor de identidad y servicio.

Explicación: Una capa de identidad/autenticación estandarizada, incluyendo ID Token y endpoints asociados. OIDC permite autenticar al usuario sobre flujos OAuth compatibles.

### Propuesta

¿Qué aporta OpenID Connect sobre OAuth 2.0?

- A. Un marco de autorización delegada que concede acceso limitado a recursos mediante access tokens y scopes.
- B. Una capa de identidad/autenticación estandarizada, incluyendo ID Token y endpoints asociados. **(correcta)**
- C. Un formato compacto para representar y firmar claims que puede utilizarse en distintos protocolos de identidad.
- D. Un protocolo de federación basado en aserciones XML intercambiadas entre proveedor de identidad y servicio.

Explicación: OpenID Connect añade a OAuth2.0 una capa de autenticación del usuario. Su ID Token contiene afirmaciones sobre la autenticación y se destina al cliente correspondiente; no debe confundirse con un access token para acceder a una API. UserInfo permite obtener claims en los escenarios que lo utilizan. El formato JWT por sí solo no define este protocolo.

- Error A: El acceso limitado mediante access tokens y scopes es la función de OAuth sobre la que se construye la capa de identidad de OIDC.
- Error C: JWT define una representación de afirmaciones, no toda la interacción y validación de una autenticación OpenID Connect.
- Error D: Las aserciones XML describen el enfoque de SAML; no la extensión de identidad de OAuth que se pregunta.

- [OpenID Foundation: OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) · §1 Introduction; §1.3 Overview; §2 ID Token; §5.3 UserInfo · versión: Core1.0, Final incorporando errata set2, 15-12-2023; comprobada 30-10-2026. No todos los endpoints son obligatorios en cualquier configuración. · comprobado: 2026-10-30
- [IETF: OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749.html) · §1 Introducción; §1.4 Access Token; §3.3 Access Token Scope · versión: RFC6749, octubre2012; comprobada 30-10-2026 junto a BCP240, sin recomendar flujos históricos por el solo hecho de figurar en el RFC. · comprobado: 2026-10-30
- [IETF: JSON Web Token](https://www.rfc-editor.org/rfc/rfc7519.html) · Abstract; §2 Terminology; Appendix B Relationship of JWTs to SAML Assertions · versión: RFC7519, mayo2015; comprobada 30-10-2026; formato distinto de protocolo de autenticación o autorización. · comprobado: 2026-10-30

Partida: `b877752f570c6cc120f8de187b1b236578477db7451bad9a8473dec0e154e83b` · propuesta: `8a3de8a2df5e956a2232697f66b2e867706f04806ca5633fe908c942e2503cb8`

## MAN-GSI-P15-108

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave A; separar protección recuperable, hash, TLS y cifrado de almacenamiento.

### Antes

¿Para qué sirve ASP.NET Core Data Protection?

- A. Para proteger criptográficamente datos de aplicación como cookies o tokens internos según el sistema de claves y propósito. **(correcta)**
- B. Para almacenar contraseñas mediante un hash unidireccional de propósito general, sin utilizar un sistema de claves reversible.
- C. Para sustituir TLS y cifrar por sí solo todo el canal HTTP entre cliente, proxy y aplicación en cualquier despliegue.
- D. Para aplicar cifrado transparente a todas las tablas y copias de la base de datos sin configurar proveedor, claves ni almacenamiento.

Explicación: Para proteger criptográficamente datos de aplicación como cookies o tokens internos según el sistema de claves y propósito. Data Protection es infraestructura criptográfica de aplicación; la gestión de claves importa especialmente en granjas y contenedores.

### Propuesta

¿Para qué sirve ASP.NET Core Data Protection?

- A. Para proteger criptográficamente datos de aplicación como cookies o tokens internos según el sistema de claves y propósito. **(correcta)**
- B. Para almacenar contraseñas mediante un hash unidireccional de propósito general, sin utilizar un sistema de claves reversible.
- C. Para sustituir TLS y cifrar por sí solo todo el canal HTTP entre cliente, proxy y aplicación en cualquier despliegue.
- D. Para aplicar cifrado transparente a todas las tablas y copias de la base de datos sin configurar proveedor, claves ni almacenamiento.

Explicación: Data Protection protege datos de aplicación recuperables con confidencialidad, integridad y aislamiento de propósitos, y gestiona las claves usadas para protegerlos y recuperarlos. Cookies y tokens internos son usos característicos. La disponibilidad de las claves importa: perderlas puede impedir recuperar datos protegidos. No equivale a cifrar todo un canal o toda una base de datos.

- Error B: El hash de contraseñas permite comprobar un valor sin recuperarlo. Data Protection usa claves para proteger y recuperar datos de aplicación.
- Error C: TLS protege el transporte entre extremos; la protección de un valor de aplicación no sustituye ese canal.
- Error D: Aplicar protección a valores concretos no configura automáticamente cifrado transparente de tablas y copias de seguridad.

- [Microsoft: Data Protection overview](https://learn.microsoft.com/en-us/aspnet/core/security/data-protection/introduction?view=aspnetcore-10.0) · Introducción; Problem statement: autenticidad, confidencialidad y aislamiento de datos de aplicación · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Microsoft: Data Protection key management](https://learn.microsoft.com/en-us/aspnet/core/security/data-protection/implementation/key-management?view=aspnetcore-10.0) · Introducción; ciclo de vida de claves y Protect/Unprotect; pérdida de claves · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [IETF: TLS1.3](https://www.rfc-editor.org/rfc/rfc8446.html) · §1 Introduction: autenticación, confidencialidad e integridad; certificados o PSK · versión: RFC8446, agosto2018; comprobada 30-10-2026. La pregunta se acota al uso HTTPS con certificados. · comprobado: 2026-10-30

Partida: `f702ef2751917636978b848d1799b8558be1e1fd1563fea12d14fe666857a8d0` · propuesta: `2ef0654794e0e3a85ec740344b0d94b99d1be9c6ecdf4b21b262bc8fc1063777`

## MAN-GSI-P15-109

Decisión: pending_review · acción: revise.

Motivo: Conservar protección CSRF y clave D; abreviar alternativas sin perder la distinción entre amenazas próximas.

### Antes

¿Qué riesgo combate principalmente la protección antiforgery en aplicaciones web basadas en cookies?

- A. La inyección de instrucciones SQL producida al construir consultas con entrada no parametrizada dentro de ADO.NET.
- B. La ejecución de script inyectado en el origen de la aplicación, que requiere codificación y controles frente a XSS.
- C. Los intentos repetidos de adivinar credenciales, mitigados mediante límites, MFA y controles específicos de autenticación.
- D. Ataques CSRF que aprovechan credenciales enviadas automáticamente por el navegador. **(correcta)**

Explicación: Ataques CSRF que aprovechan credenciales enviadas automáticamente por el navegador. Antiforgery no sustituye validación, XSS ni autorización; se centra en peticiones forjadas desde otro origen.

### Propuesta

¿Qué riesgo combate principalmente la protección antiforgery en aplicaciones web basadas en cookies?

- A. La inserción de instrucciones SQL al concatenar entrada no parametrizada.
- B. La ejecución de scripts inyectados en el origen de la propia aplicación.
- C. Los intentos repetidos de adivinar las credenciales de inicio de sesión.
- D. Las peticiones forjadas que aprovechan credenciales automáticas del navegador. **(correcta)**

Explicación: Antiforgery combate CSRF: una petición inducida desde otro sitio puede aprovechar credenciales que el navegador adjunta al destino. La comprobación antiforgery añade una prueba que esa petición forjada no debe poder aportar. No sustituye la autorización, la protección frente a XSS o la parametrización SQL; las reglas de cookies y SameSite son controles complementarios.

- Error A: La inyección SQL altera la estructura de una consulta y requiere separación de valores y comandos; no es el ataque de petición entre sitios.
- Error B: Un script ejecutado en el origen de la aplicación es XSS y puede comprometer controles web; antiforgery no sustituye su prevención.
- Error C: Adivinar credenciales se trata con controles de autenticación y limitación de intentos; no define una petición CSRF.

- [Microsoft: Prevent CSRF](https://learn.microsoft.com/en-us/aspnet/core/security/anti-request-forgery?view=aspnetcore-10.0) · Introducción: credenciales automáticas del navegador y peticiones forjadas entre sitios · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30

Partida: `b2d4de185574778be378b29ae43b6629ac7b35447e17ffaa6d802495ff121604` · propuesta: `4817236c13c2198b71253d9c535540e99067732fdf84e5d61aed1e7867948020`

## MAN-GSI-P15-110

Decisión: pending_review · acción: revise.

Motivo: Conservar protección en tránsito y clave C; acotar HTTPS con certificados y diferenciar canal, permisos y reposo.

### Antes

¿Qué papel tiene HTTPS/TLS?

- A. Autorizar cada acción por el hecho de que el usuario establezca un canal cifrado, sin comprobar identidad, roles o recurso solicitado.
- B. Cifrar automáticamente datos almacenados, backups y secretos de la base de datos sin controles adicionales en reposo.
- C. Proteger la confidencialidad e integridad del tráfico en tránsito y autenticar el endpoint según la configuración de certificados. **(correcta)**
- D. Eliminar la validación de certificados porque el cifrado del canal garantiza por sí mismo la identidad del endpoint remoto.

Explicación: Proteger la confidencialidad e integridad del tráfico en tránsito y autenticar el endpoint según la configuración de certificados. TLS protege el canal; identidad, autorización y protección de datos en reposo son capas diferentes.

### Propuesta

En una conexión HTTPS que utiliza certificados para autenticar el servicio, ¿qué función cumple TLS junto con la validación correcta del certificado?

- A. Conceder acceso a las operaciones solicitadas al haber establecido un canal cifrado.
- B. Cifrar el contenido de tablas y copias al transmitirse las consultas mediante HTTPS.
- C. Proteger el tráfico en tránsito y verificar la identidad del servicio mediante su certificado. **(correcta)**
- D. Aceptar la identidad remota por el cifrado, sin comprobar el nombre esperado del servicio.

Explicación: HTTPS sobre TLS protege confidencialidad e integridad del tráfico entre sus extremos. En el uso con certificados indicado, debe validarse también la identidad esperada del servicio; cifrar con un interlocutor no basta si no es el destinatario de confianza. Esto no concede permisos al usuario ni cifra los datos almacenados o las copias.

- Error A: La protección del canal no decide si una identidad puede ejecutar una operación concreta; esa decisión requiere autorización.
- Error B: Proteger la transmisión no aplica por sí mismo cifrado de datos en reposo en tablas o backups.
- Error D: La identidad del servicio requiere validar el certificado y su correspondencia con el nombre esperado; cifrado sin esa comprobación no basta.

- [IETF: TLS1.3](https://www.rfc-editor.org/rfc/rfc8446.html) · §1 Introduction: autenticación, confidencialidad e integridad; certificados o PSK · versión: RFC8446, agosto2018; comprobada 30-10-2026. La pregunta se acota al uso HTTPS con certificados. · comprobado: 2026-10-30
- [IETF: Service Identity in TLS](https://www.rfc-editor.org/rfc/rfc9525.html) · Abstract; §6 Verifying Service Identity · versión: RFC9525, noviembre2023, sustituye RFC6125; comprobada 30-10-2026. · comprobado: 2026-10-30

Partida: `296809c9c7332c44a7f7d3dba91c950cabb132176147e9b8ee6f7e360c0a7197` · propuesta: `6b466da524c814b7b27c797f7ccab5c342e55592a66194fa0b53fed5ed5504d3`

## MAN-GSI-P15-111

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave B; aclarar límites de variables y almacenamiento de desarrollo sin acceder a secretos reales.

### Antes

¿Cuál es una práctica correcta para secretos como cadenas de conexión o claves API?

- A. Codificar el secreto en Base64 o hexadecimal y almacenarlo en el repositorio, ya que deja de aparecer como texto legible.
- B. Usar mecanismos de secretos/variables/gestores seguros y limitar permisos, evitando incorporarlos al repositorio. **(correcta)**
- C. Imprimirlo en logs restringidos durante el diagnóstico y confiar en que la política de acceso sustituya su rotación y minimización.
- D. Cifrarlo dentro del repositorio junto con la clave o mecanismo de descifrado necesario para que la aplicación pueda recuperarlo.

Explicación: Usar mecanismos de secretos/variables/gestores seguros y limitar permisos, evitando incorporarlos al repositorio. Los secretos deben separarse del código y rotarse/protegerse según el entorno.

### Propuesta

¿Cuál es una práctica correcta para secretos como cadenas de conexión o claves API?

- A. Codificar el secreto en Base64 o hexadecimal y almacenarlo en el repositorio, ya que deja de aparecer como texto legible.
- B. Usar mecanismos de secretos/variables/gestores seguros y limitar permisos, evitando incorporarlos al repositorio. **(correcta)**
- C. Imprimirlo en logs restringidos durante el diagnóstico y confiar en que la política de acceso sustituya su rotación y minimización.
- D. Cifrarlo dentro del repositorio junto con la clave o mecanismo de descifrado necesario para que la aplicación pueda recuperarlo.

Explicación: Los secretos deben separarse del código y obtenerse mediante mecanismos adecuados al entorno, con acceso limitado. Variables de entorno y User Secrets no implican cifrado ni seguridad automática: hay que considerar quién puede leerlos. Los logs tampoco son un almacén apropiado de credenciales. Codificar un secreto o guardar su clave junto a él no preserva esa separación.

- Error A: Base64 y hexadecimal son representaciones reversibles sin secreto adicional; no protegen una credencial incluida en el repositorio.
- Error C: Restringir un log no justifica copiar credenciales a él: añade otra ubicación y exposición del secreto.
- Error D: Si el repositorio contiene también el medio de descifrado, quien lo obtiene puede recuperar el secreto; el acceso no queda separado.

- [Microsoft: Safe storage of app secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-10.0) · Introducción; Work with environment variables: separación del código y límites de seguridad · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30

Partida: `f0fb5efe396d4b477fa589f3d26ee4a9d1d67dd49e7f456335bbdeb511bbb26e` · propuesta: `199a10577d8d5e6ad520c340fbf8597e66b613f251524f43d85561c7421197d0`

## MAN-GSI-P15-112

Decisión: pending_review · acción: revise.

Motivo: Conservar campos estructurados y clave C; comparar consecuencias plausibles de observabilidad sin prometer correlación o privacidad automáticas.

### Antes

¿Qué ventaja aporta el logging estructurado?

- A. Sustituir completamente las métricas porque cada evento estructurado permite calcular sin agregación cualquier indicador del sistema.
- B. Eliminar la necesidad de identificadores de correlación, ya que el formato de los campos relaciona automáticamente operaciones distribuidas.
- C. Registrar eventos con campos y propiedades que facilitan búsqueda, correlación y análisis automatizado. **(correcta)**
- D. Garantizar que nunca se registren datos sensibles, aunque la aplicación incluya contraseñas, tokens o información personal en las propiedades.

Explicación: Registrar eventos con campos y propiedades que facilitan búsqueda, correlación y análisis automatizado. El logging estructurado mejora observabilidad, pero debe diseñarse para no filtrar secretos o datos personales.

### Propuesta

¿Qué ventaja aporta el logging estructurado?

- A. Sustituir mediciones agregadas por texto libre que deba analizarse para extraer valores.
- B. Relacionar operaciones distribuidas sin transmitir contexto o identificadores entre ellas.
- C. Registrar eventos con campos consultables que facilitan análisis y correlación. **(correcta)**
- D. Evitar la exposición de secretos por el solo hecho de guardarlos como propiedades.

Explicación: El logging estructurado conserva valores como campos asociados al evento, lo que facilita consultas y análisis sin extraerlos de texto libre. Las plantillas con propiedades permiten a proveedores almacenar esos argumentos por separado. Correlacionar sigue requiriendo contexto o identificadores adecuados, y los campos pueden contener datos sensibles si no se controlan.

- Error A: Obligar a extraer valores de texto libre pierde la ventaja de los campos estructurados; tampoco hace innecesarias las métricas.
- Error B: El formato de un evento no transmite automáticamente la relación causal entre operaciones; se necesita contexto de correlación.
- Error D: Una propiedad puede revelar un secreto igual que el texto de un mensaje. Estructura no equivale a eliminación de datos sensibles.

- [Microsoft: Logging in C\# and .NET](https://learn.microsoft.com/en-us/dotnet/core/extensions/logging/overview) · Introducción; Log message template: argumentos como campos, no solo mensaje formateado · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [OpenTelemetry: What is OpenTelemetry?](https://opentelemetry.io/docs/what-is-opentelemetry/) · What is OpenTelemetry; What is observability; Main OpenTelemetry components · versión: Documentación pública comprobada 30-10-2026; ecosistema independiente del backend y sin limitar a tres todas las señales disponibles. · comprobado: 2026-10-30

Partida: `618c57b25b1cf1bb03cc991ee618b93cdabdaae2444599c9048cb4bfc9d849a5` · propuesta: `0557b72bed79eb9d6697c2ac59273ccac4ab3551091fd6ba9b5959f4f2ca64ce`

## MAN-GSI-P15-113

Decisión: pending_review · acción: revise.

Motivo: Conservar salud relevante por tipo de sonda y clave C; microcaso que separa dependencia imprescindible y reinicio del proceso.

### Antes

¿Qué debe comprobar un health check bien diseñado?

- A. Todas las contraseñas configuradas.
- B. El contenido completo de la base de datos.
- C. El estado de la aplicación y solo las dependencias relevantes para el tipo de sonda, sin exponer información sensible. **(correcta)**
- D. La versión de cada paquete de desarrollo al usuario anónimo.

Explicación: El estado de la aplicación y solo las dependencias relevantes para el tipo de sonda, sin exponer información sensible. Liveness y readiness pueden requerir pruebas distintas; no conviene convertir health en un endpoint de diagnóstico público.

### Propuesta

Una API necesita su base de datos para servir peticiones. Durante una caída temporal de la base, el proceso sigue respondiendo y no necesita reiniciarse. ¿Qué diseño de health checks distingue correctamente ambos estados?

- A. Consultar la versión del proceso en ambas sondas y considerar que acredita la dependencia.
- B. Incluir la base en ambas sondas para que un fallo de dependencia fuerce el reinicio.
- C. Comprobar disponibilidad para servir en readiness y vitalidad del proceso en liveness. **(correcta)**
- D. Comprobar solo el proceso en ambas sondas para mantener el servicio ante fallos de la base.

Explicación: Las comprobaciones deben responder al propósito de cada sonda. En el caso descrito, readiness debe reflejar que falta una dependencia imprescindible para servir; liveness debe valorar si el proceso requiere reinicio. Un fallo temporal externo no demuestra por sí mismo que reiniciar el proceso ayude. La respuesta pública debe limitarse al estado necesario y evitar datos de diagnóstico sensibles.

- Error A: Conocer la versión no prueba que esté disponible una dependencia necesaria para responder a peticiones.
- Error B: Usar indiscriminadamente una dependencia externa como vitalidad puede provocar reinicios que no arreglan su caída.
- Error D: Un proceso vivo puede no estar preparado para servir; ignorar la base contradice el requisito de disponibilidad del caso.

- [Microsoft: Health checks](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/health-checks?view=aspnetcore-10.0) · Basic health probe; Separate readiness and liveness probes; filtros de comprobaciones · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30

Partida: `51f35483bd51cd3975fba7c473209781491db83d7c9c5996d99c8a2f5fffe91f` · propuesta: `dcd7d942633db036b8f2f931bfb9664263c93fec1e249eca9422c5e9a864640c`

## MAN-GSI-P15-114

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, alternativas y clave A; distinguir instrumentación, exportación, almacenamiento y visualización.

### Antes

¿Qué aporta OpenTelemetry?

- A. Un estándar/ecosistema para instrumentar y exportar trazas, métricas y logs de forma interoperable. **(correcta)**
- B. Un backend de monitorización que almacena obligatoriamente todas las métricas y trazas de una organización.
- C. Un formato de paneles destinado a representar exclusivamente métricas recogidas por Prometheus.
- D. Un servicio de logging centralizado que reemplaza la instrumentación incluida en las aplicaciones.

Explicación: Un estándar/ecosistema para instrumentar y exportar trazas, métricas y logs de forma interoperable. OpenTelemetry facilita observabilidad distribuida y evita acoplar toda la instrumentación a un único proveedor.

### Propuesta

¿Qué aporta OpenTelemetry?

- A. Un estándar/ecosistema para instrumentar y exportar trazas, métricas y logs de forma interoperable. **(correcta)**
- B. Un backend de monitorización que almacena obligatoriamente todas las métricas y trazas de una organización.
- C. Un formato de paneles destinado a representar exclusivamente métricas recogidas por Prometheus.
- D. Un servicio de logging centralizado que reemplaza la instrumentación incluida en las aplicaciones.

Explicación: OpenTelemetry aporta especificaciones, APIs, SDKs e instrumentación para generar y exportar telemetría interoperable, incluidas trazas, métricas y logs. Puede usar distintos backends; el almacenamiento y la visualización no están impuestos por el ecosistema. Su Collector es un componente posible para recibir, procesar y exportar, no una obligación de alojar toda la monitorización en un proveedor.

- Error B: OpenTelemetry no es el backend que deba almacenar toda la telemetría. Permite enviarla a herramientas compatibles elegidas para ese propósito.
- Error C: No se limita a un formato de paneles o a métricas de Prometheus: cubre instrumentación y distintas señales y destinos.
- Error D: Un servicio central de logs es un destino o producto de observabilidad. No sustituye la necesidad de que se genere telemetría en los sistemas.

- [OpenTelemetry: What is OpenTelemetry?](https://opentelemetry.io/docs/what-is-opentelemetry/) · What is OpenTelemetry; What is observability; Main OpenTelemetry components · versión: Documentación pública comprobada 30-10-2026; ecosistema independiente del backend y sin limitar a tres todas las señales disponibles. · comprobado: 2026-10-30

Partida: `864cf940804f88413a00eac97f279f55756071a794e05a7939c2c6d21b4ab14b` · propuesta: `3d71b9f08d923f6bb52715d3441d9b93702c4d2c459f2836a24e24dbcaec2f99`

## MAN-GSI-P15-115

Decisión: pending_review · acción: revise.

Motivo: Conservar empaquetado compatible y clave D; evitar reproducibilidad absoluta y distinguir aislamiento, mantenimiento y arquitectura.

### Antes

¿Qué ventaja ofrece contenerizar una aplicación .NET?

- A. Eliminar la necesidad de aplicar parches al runtime.
- B. Hacer que la aplicación sea inmune a vulnerabilidades.
- C. Convertir automáticamente una aplicación monolítica en microservicios.
- D. Empaquetar aplicación y dependencias de ejecución en una imagen reproducible y desplegable en entornos compatibles. **(correcta)**

Explicación: Empaquetar aplicación y dependencias de ejecución en una imagen reproducible y desplegable en entornos compatibles. Los contenedores mejoran consistencia de despliegue, pero no resuelven por sí solos arquitectura o seguridad.

### Propuesta

¿Qué ventaja ofrece contenerizar una aplicación .NET?

- A. Aislar la aplicación con un kernel propio incluido en cada imagen de contenedor.
- B. Mantener el runtime protegido sin reconstruir imágenes al publicarse parches.
- C. Separar los módulos del monolito en servicios por el hecho de empaquetarlos.
- D. Distribuir aplicación y dependencias mediante una imagen para entornos compatibles. **(correcta)**

Explicación: Una imagen permite distribuir la aplicación con sus dependencias de ejecución y mantener un entorno de despliegue consistente en plataformas compatibles. Los contenedores comparten el kernel del entorno que los ejecuta; no incluyen cada uno una máquina virtual completa. Siguen requiriendo mantenimiento de la imagen y no cambian por sí solos los límites de la arquitectura.

- Error A: Un contenedor es un proceso aislado que comparte kernel; incluir un kernel propio por instancia describe otra abstracción, como una máquina virtual.
- Error B: Una imagen antigua no incorpora por sí sola parches posteriores. Hay que mantener y reconstruir o actualizar las imágenes desplegadas.
- Error C: Empaquetar no descompone automáticamente responsabilidades ni dependencias entre módulos para convertirlos en microservicios.

- [Microsoft: .NET and Docker](https://learn.microsoft.com/en-us/dotnet/core/docker/introduction) · Introducción; .NET images y actualización de imágenes al publicarse parches · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Docker: What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/) · Explanation; Containers versus virtual machines: procesos y kernel compartido · versión: Documentación pública comprobada 30-10-2026. Compatibilidad de host y plataforma; no garantía de builds idénticos byte a byte. · comprobado: 2026-10-30

Partida: `7cbdac05134044cae7bd20f6a489977d49d85f6100736e22e8dd11b05243371f` · propuesta: `c69768d5a989467110a84f80428d48393c19d35289f03b2289296db5891d8d97`

## MAN-GSI-P15-116

Decisión: pending_review · acción: revise.

Motivo: Conservar tamaño habitual por inclusión de runtime y clave A; comparar la misma aplicación con opciones equivalentes.

### Antes

¿Qué publicación suele producir artefactos más pequeños: framework-dependent o self-contained?

- A. Framework-dependent, porque reutiliza un runtime instalado en el destino. **(correcta)**
- B. Native AOT y framework-dependent son sinónimos.
- C. Self-contained siempre.
- D. Ambas pesan exactamente lo mismo.

Explicación: Framework-dependent, porque reutiliza un runtime instalado en el destino. Self-contained incluye runtime y suele aumentar tamaño, aunque puede simplificar operación.

### Propuesta

Para la misma aplicación y plataforma, con opciones equivalentes de compilación, sin diferencias de trimming o empaquetado, ¿qué publicación suele ocupar menos y por qué?

- A. Framework-dependent, al excluir el runtime que debe estar instalado en destino. **(correcta)**
- B. Self-contained, al excluir el runtime que pasa a proporcionar el sistema destino.
- C. Framework-dependent, al incluir solo código nativo sin bibliotecas de aplicación.
- D. Self-contained, al incluir el runtime en lugar de las dependencias de la aplicación.

Explicación: En una comparación equivalente, framework-dependent suele producir menos archivos o volumen porque no incluye el runtime .NET: el destino debe tener uno compatible. Self-contained lo incorpora junto con aplicación y dependencias. El tamaño concreto depende de otros parámetros, y esta distinción no implica por sí sola compilación nativa o eliminación de bibliotecas necesarias.

- Error B: Excluir el runtime y depender del instalado describe framework-dependent, no self-contained.
- Error C: Framework-dependent puede incluir código administrado y dependencias; no significa publicar únicamente código nativo sin bibliotecas.
- Error D: Self-contained incluye el runtime además del código y las dependencias necesarias; no sustituye estas últimas por aquel.

- [Microsoft: Application publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/) · Publishing modes: framework-dependent frente a self-contained; runtime requerido o incluido · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `71f61c1303a1a08847d80056f15a0fa3297bca043d86e921174d5eb5eccbe1f9` · propuesta: `94eea6c9d9b126932d986901f903f6ed1f896da410afba746ee3f3c5a7b8b49f`
