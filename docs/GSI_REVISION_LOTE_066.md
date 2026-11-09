# GSI-EDITORIAL-066 — revisión propuesta

Preparado: 2026-10-30. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `540b92903e0202c73f22e093f70de2d6b32db160c1f90d0097b225589cd4644f`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P15-117

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta, alternativas y clave A; separar empaquetado, runtime incluido y compilación nativa.

### Antes

¿Qué es single-file publishing?

- A. Una opción de publicación que agrupa gran parte de los artefactos de la aplicación en un único archivo para facilitar distribución. **(correcta)**
- B. Una publicación autocontenida que incorpora el runtime y distribuye los ensamblados de la aplicación como archivos separados.
- C. Una compilación Native AOT que genera código nativo por adelantado y elimina la dependencia del JIT en ejecución.
- D. Un paquete NuGet que distribuye bibliotecas y metadatos para que otros proyectos los consuman durante la compilación.

Explicación: Una opción de publicación que agrupa gran parte de los artefactos de la aplicación en un único archivo para facilitar distribución. Single-file es una modalidad de empaquetado y no equivale necesariamente a Native AOT.

### Propuesta

¿Qué es single-file publishing?

- A. Una opción de publicación que agrupa gran parte de los artefactos de la aplicación en un único archivo para facilitar distribución. **(correcta)**
- B. Una publicación autocontenida que incorpora el runtime y distribuye los ensamblados de la aplicación como archivos separados.
- C. Una compilación Native AOT que genera código nativo por adelantado y elimina la dependencia del JIT en ejecución.
- D. Un paquete NuGet que distribuye bibliotecas y metadatos para que otros proyectos los consuman durante la compilación.

Explicación: Single-file agrupa artefactos para simplificar la distribución. Puede combinarse con publicación framework-dependent o self-contained y no significa por sí solo Native AOT. Algunos archivos pueden quedar fuera o requerir extracción según contenido y configuración; hay que revisar compatibilidad sin suponer que cualquier aplicación se reduce a un archivo sin excepciones.

- Error B: Incluir runtime y mantener ensamblados separados describe una modalidad self-contained sin ese empaquetado; no define single-file.
- Error C: Native AOT compila a código nativo al publicar. Es una decisión de compilación, distinta del agrupamiento de archivos que se pregunta.
- Error D: Un paquete NuGet distribuye componentes para que otros proyectos los consuman; no es la modalidad de despliegue single-file de una aplicación.

- [Microsoft: Single-file deployment](https://learn.microsoft.com/en-us/dotnet/core/deploying/single-file/overview) · Introducción; publicación framework-dependent o self-contained; exclusión de archivos · versión: Texto público comprobado 30-10-2026. Se usa el concepto de empaquetado, sin adoptar ejemplos net6/Windows7 o defaults históricos como recomendación actual. · comprobado: 2026-10-30
- [Microsoft: Native AOT deployment](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; AOT-compatibility analyzers; Limitations of Native AOT deployment · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Introduction to NuGet](https://learn.microsoft.com/en-us/nuget/what-is-nuget) · Introducción: crear, distribuir y consumir paquetes .NET · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `575e73992b4e4b611c930786609e5b4e5a96701dbb38b6e3d436cb07736034c9` · propuesta: `49f827beeb014446fe669807cf4c0fc5bf6c374013b94d480b5cbd7f6dbdc843`

## MAN-GSI-P15-118

Decisión: pending_review · acción: revise.

Motivo: Conservar beneficios condicionados y compatibilidad AOT, clave D; reemplazar definiciones de otras modalidades por errores de adopción próximos.

### Antes

¿Qué consideración existe al usar Native AOT?

- A. Compilar métodos a código nativo durante la ejecución según se utilizan, conservando el runtime y sus capacidades dinámicas.
- B. Eliminar código y metadatos no alcanzables para reducir tamaño, sin convertir por ello toda la aplicación a código nativo.
- C. Incluir código precompilado para acelerar parte del arranque, manteniendo IL y soporte del runtime para completar la ejecución.
- D. Puede mejorar arranque y huella, pero ciertas técnicas dinámicas o librerías pueden requerir adaptación y pruebas de compatibilidad. **(correcta)**

Explicación: Puede mejorar arranque y huella, pero ciertas técnicas dinámicas o librerías pueden requerir adaptación y pruebas de compatibilidad. AOT cambia supuestos sobre generación dinámica/reflection; debe evaluarse según el stack.

### Propuesta

¿Qué consideración existe al usar Native AOT?

- A. Contar con el JIT para generar durante la ejecución los métodos nativos que falten.
- B. Mantener carga dinámica de ensamblados y generación de código sin restricciones nuevas.
- C. Distribuir el binario nativo a otros sistemas y arquitecturas sin volver a publicarlo.
- D. Valorar mejoras de arranque y memoria junto con compatibilidad de bibliotecas y técnicas dinámicas. **(correcta)**

Explicación: Native AOT compila a nativo al publicar y puede mejorar arranque y consumo de memoria. El resultado se dirige a una plataforma y tiene límites como carga dinámica y generación de código en ejecución; las bibliotecas y el uso de reflexión requieren análisis de compatibilidad. No significa que toda reflexión esté prohibida o que las mejoras sean idénticas en cualquier aplicación.

- Error A: Native AOT no usa el JIT al ejecutar para completar métodos faltantes. El código necesario debe poder resolverse en el modelo de publicación.
- Error B: Carga dinámica y generación de código son precisamente áreas con restricciones; no se conserva sin cambios toda la capacidad dinámica del runtime habitual.
- Error C: El binario se publica para un entorno objetivo; compilar a nativo no elimina requisitos de sistema y arquitectura.

- [Microsoft: Native AOT deployment](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; AOT-compatibility analyzers; Limitations of Native AOT deployment · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `059247339ee62268d4589f0082cb01130e6fabe3ded925de0ca7cb8fd8f96dad` · propuesta: `ce4c8cb67210c70872892266e33b4b1009a6daee2716a64f5af3db99e0bfdac6`

## MAN-GSI-P15-119

Decisión: pending_review · acción: revise.

Motivo: Conservar información reenviada y confianza, clave D; caso acotado a terminación TLS sin proponer aceptar cabeceras de cualquier origen.

### Antes

Si Kestrel está detrás de un reverse proxy, ¿qué información debe configurarse con cuidado?

- A. Aceptar cabeceras reenviadas de cualquier origen, porque el proxy siempre impide que un cliente las suplante.
- B. Configurar únicamente compresión de respuestas y caché de archivos estáticos para recuperar esquema, IP y host originales.
- C. Registrar en Kestrel los servidores DNS de cada cliente para que sustituyan la información aportada por el proxy inverso.
- D. Cabeceras reenviadas y confianza en proxies para reconstruir correctamente esquema, IP y host cuando proceda. **(correcta)**

Explicación: Cabeceras reenviadas y confianza en proxies para reconstruir correctamente esquema, IP y host cuando proceda. Confiar cabeceras de proxy sin limitar orígenes puede permitir suplantaciones.

### Propuesta

Un proxy conocido termina HTTPS y reenvía por HTTP a Kestrel. La aplicación necesita reconocer el esquema y origen originales de la petición. ¿Qué debe configurarse con cuidado?

- A. Aceptar las cabeceras reenviadas de quien conecte para conservar toda la información recibida.
- B. Forzar el esquema interno HTTP y tomar la IP del proxy como identidad de cada cliente.
- C. Deducir esquema y cliente con DNS inverso en lugar de procesar información reenviada.
- D. Procesar las cabeceras pertinentes y limitar la confianza a proxies y saltos configurados. **(correcta)**

Explicación: Al terminar TLS en el proxy y reenviar por HTTP, Kestrel puede ver esquema e IP distintos de los del cliente original. Deben procesarse las cabeceras pertinentes desde una cadena de proxies de confianza, con límites ajustados a la topología. No se debe aceptar cualquier cabecera enviada por un cliente; el host reenviado, cuando se use, también requiere controles apropiados.

- Error A: Un cliente puede enviar cabeceras con valores elegidos por él. La confianza debe acotarse al intermediario y al recorrido que realmente se controlan.
- Error B: Esos datos describen el salto interno, no necesariamente el esquema y origen originales que necesita la aplicación para redirecciones o políticas.
- Error C: Resolver un nombre no reconstruye de forma fiable el esquema de la petición ni la cadena de clientes y proxies.

- [Microsoft: Proxy servers and load balancers](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/proxy-load-balancer?view=aspnetcore-10.0) · Forwarded headers; proxies conocidos y uso de esquema, IP y host originales · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Microsoft: Unknown forwarded headers](https://learn.microsoft.com/en-us/aspnet/core/breaking-changes/8/forwarded-headers-unknown-proxies?view=aspnetcore-10.0) · Version introduced; New behavior; Recommended action: proxies de confianza · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30

Partida: `91f181ddab04c50535c3acf1c5a9c6d4de64f9c6d539bfd4d777c68b9d71ca26` · propuesta: `1d6b9fd4ce1cf9d80cab347088d15f383e49dafa8483a5b077242cdd7b75e772`

## MAN-GSI-P15-120

Decisión: pending_review · acción: revise.

Motivo: Conservar mínimo privilegio y clave A; contrastar estrategias reales de asignación de identidades y permisos.

### Antes

¿Qué principio de seguridad debe aplicarse a la identidad del proceso y credenciales de una aplicación?

- A. Mínimo privilegio: conceder solo permisos necesarios y separar responsabilidades. **(correcta)**
- B. Guardar permisos en el código fuente.
- C. Compartir una cuenta con otras aplicaciones para simplificar.
- D. Ejecutar siempre como administrador/root para evitar errores.

Explicación: Mínimo privilegio: conceder solo permisos necesarios y separar responsabilidades. El menor privilegio reduce el impacto de errores o compromisos.

### Propuesta

¿Qué principio de seguridad debe aplicarse a la identidad del proceso y credenciales de una aplicación?

- A. Usar una identidad específica con los permisos necesarios para sus tareas. **(correcta)**
- B. Compartir una cuenta entre aplicaciones con la suma de los permisos que necesitan.
- C. Conceder permisos amplios al proceso y limitar las operaciones desde el navegador.
- D. Dar permisos administrativos al proceso para evitar fallos al incorporar funciones.

Explicación: El mínimo privilegio limita los permisos de la identidad del proceso a lo necesario para su función. Separar identidades y responsabilidades evita que una aplicación herede permisos de otras y reduce el alcance de un compromiso. La interfaz del cliente no es un límite de seguridad para credenciales que utiliza el proceso del servidor.

- Error B: La cuenta compartida acumula facultades ajenas a una aplicación concreta y dificulta distinguir responsabilidades.
- Error C: El cliente puede modificarse u omitirse; no restringe los permisos efectivos con que el servidor accede a sus recursos.
- Error D: La comodidad operativa no justifica privilegios administrativos innecesarios para las tareas ordinarias del proceso.

- [NIST CSRC: least privilege](https://csrc.nist.gov/glossary/term/least_privilege) · Definiciones de mínimo privilegio para usuarios, procesos y entidades; fuentes CNSSI4009/NIST800-53 · versión: Glosario público comprobado 30-10-2026; definiciones y publicaciones de procedencia indicadas, sin convertir el glosario en norma aplicable al proyecto. · comprobado: 2026-10-30
- [OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) · Introduction; Enforce Least Privileges; Validate permissions on every request; Verify checks in the right location · versión: Documento del proyecto comprobado 30-10-2026; controles de servidor, no mera comprobación del cliente. · comprobado: 2026-10-30

Partida: `31add746470b400ff60173002d47c16ede883aa82bbc01a936fbe70a0ed8e746` · propuesta: `46d21346ea0ec56c99c2c1a152b124f9f1b689b4ef439db7604dbfa1bc2b926c`

## MAN-GSI-P15-141

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación de DI y clave B; sustituir parejas mezcladas por responsabilidades comparables de los dos ecosistemas.

### Antes

¿Qué pareja representa mecanismos de inyección de dependencias comparables conceptualmente en ambos stacks?

- A. EF Core y Jakarta REST.
- B. DI integrada de ASP.NET Core y CDI en Jakarta EE. **(correcta)**
- C. NuGet y Jakarta Security.
- D. Kestrel y JPQL.

Explicación: DI integrada de ASP.NET Core y CDI en Jakarta EE. Ambos stacks ofrecen contenedores/mecanismos de DI, aunque sus APIs y modelos concretos difieren.

### Propuesta

¿Qué pareja representa mecanismos de inyección de dependencias comparables conceptualmente en ambos stacks?

- A. EF Core y Jakarta Persistence.
- B. DI de ASP.NET Core y CDI. **(correcta)**
- C. ADO.NET y la API JDBC.
- D. NuGet y las dependencias Maven.

Explicación: La DI integrada de ASP.NET Core y CDI permiten proporcionar dependencias a componentes en lugar de hacer que construyan todas sus colaboraciones. Es una correspondencia conceptual; sus APIs, resolución y ciclos de vida no son intercambiables. La gestión de paquetes y las APIs de persistencia pertenecen a otras responsabilidades.

- Error A: Son tecnologías de persistencia objeto-relacional; no identifican los mecanismos generales de inyección de dependencias de ambos entornos.
- Error C: ADO.NET y JDBC permiten acceso a datos mediante conexiones y comandos. Eso no los convierte en contenedores DI.
- Error D: Resolver paquetes para construir un proyecto no equivale a suministrar instancias de colaboradores a un objeto en ejecución.

- [Microsoft: Dependency injection](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-10.0) · Introducción; Overview of dependency injection; contenedor y dependencias · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Jakarta Contexts and Dependency Injection](https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1.html) · §1 Architecture; §1.2.1 Relationship to Jakarta EE; inyección y ciclos de vida · versión: 4.1 Final, 07-03-2024; comprobada 30-10-2026, sin atribuir identidad de APIs/ciclos con DI de .NET. · comprobado: 2026-10-30
- [Microsoft: EF Core overview](https://learn.microsoft.com/en-us/ef/core/) · Introducción; O/RM; The model · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Jakarta Persistence](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · §1 Introduction; §3.11.11 SQL Queries y nota de parámetros posicionales; contratos de persistencia · versión: 3.2, 10-04-2024; comprobada 30-10-2026. Es especificación ORM y requiere implementación; SQL nativo no garantiza portabilidad entre motores. · comprobado: 2026-10-30
- [Microsoft: ADO.NET overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview) · Introducción: proveedores, comandos, resultados y distintos niveles de abstracción · versión: Ruta histórica de .NET Framework leída el 30-10-2026; solo conceptos de acceso a datos, sin imponer ensamblados o proveedores históricos. · comprobado: 2026-10-30
- [Oracle: java.sql](https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/package-summary.html) · Introducción; What the JDBC4.3 API Includes; conexión, comandos y drivers · versión: Java SE25, documentación comprobada 30-10-2026; capacidades concretas sujetas al driver. · comprobado: 2026-10-30
- [Microsoft: Introduction to NuGet](https://learn.microsoft.com/en-us/nuget/what-is-nuget) · Introducción: crear, distribuir y consumir paquetes .NET · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Apache Maven: Introduction](https://maven.apache.org/what-is-maven.html) · Introduction; Maven Objectives; Providing a uniform build system · versión: Página del proyecto comprobada 30-10-2026; no se atribuye versión instalada ni equivalencia uno a uno con NuGet. · comprobado: 2026-10-30

Partida: `081024a31ec3f1e170d3124307250a51be854a0162679f58a6452681d5afd4d7` · propuesta: `101cbe6ef9ff0e313d0e6464683e897a0058575688bf7de887419aadfe7c7f90`

## MAN-GSI-P15-142

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación ORM y clave D; precisar implementación frente a especificación y distinguir runtime, paquetes y acceso directo.

### Antes

¿Qué pareja representa tecnologías ORM comparables?

- A. CLR y CDI.
- B. NuGet y Maven.
- C. ASP.NET Core y Jakarta Servlet.
- D. EF Core y Jakarta Persistence. **(correcta)**

Explicación: EF Core y Jakarta Persistence. EF Core y Jakarta Persistence abstraen persistencia objeto-relacional sobre proveedores de datos.

### Propuesta

¿Qué pareja representa tecnologías ORM comparables?

- A. CLR y la máquina virtual Java.
- B. NuGet y las dependencias Maven.
- C. ADO.NET y la API JDBC.
- D. EF Core y Jakarta Persistence. **(correcta)**

Explicación: EF Core ofrece un ORM para .NET y Jakarta Persistence especifica gestión de persistencia y mapeo objeto-relacional para Java. La segunda necesita una implementación compatible, y no es un producto idéntico al primero. Comparar responsabilidades no garantiza que modelos, consultas o comportamiento de proveedores sean portables sin adaptación.

- Error A: CLR y JVM son entornos de ejecución; no son el mapeo entre un modelo de objetos y el almacenamiento relacional.
- Error B: NuGet y la gestión de dependencias Maven ayudan a obtener componentes del proyecto, no a persistir entidades mediante un modelo ORM.
- Error C: ADO.NET y JDBC son APIs de acceso a datos de menor nivel que el mapeo ORM que se pregunta.

- [Microsoft: EF Core overview](https://learn.microsoft.com/en-us/ef/core/) · Introducción; O/RM; The model · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Jakarta Persistence](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · §1 Introduction; §3.11.11 SQL Queries y nota de parámetros posicionales; contratos de persistencia · versión: 3.2, 10-04-2024; comprobada 30-10-2026. Es especificación ORM y requiere implementación; SQL nativo no garantiza portabilidad entre motores. · comprobado: 2026-10-30
- [Microsoft: ADO.NET overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview) · Introducción: proveedores, comandos, resultados y distintos niveles de abstracción · versión: Ruta histórica de .NET Framework leída el 30-10-2026; solo conceptos de acceso a datos, sin imponer ensamblados o proveedores históricos. · comprobado: 2026-10-30
- [Oracle: java.sql](https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/package-summary.html) · Introducción; What the JDBC4.3 API Includes; conexión, comandos y drivers · versión: Java SE25, documentación comprobada 30-10-2026; capacidades concretas sujetas al driver. · comprobado: 2026-10-30
- [Jakarta EE Platform](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · §2.4 Containers; §2.4.1 Container Requirements; §2.4.2 Jakarta EE Servers · versión: 11; HTML oficial enlazado desde la página de la plataforma, comprobado 30-10-2026. Un contenedor Jakarta no equivale al aislamiento de un contenedor de SO. · comprobado: 2026-10-30

Partida: `001f3003cdf3e94af75b52341451afa5e6c074cf3d7b18ceec52eb3da60f2d67` · propuesta: `335da7a69d746320c64bfe32be9f262e9c0eec464792747787952d2204818c92`

## MAN-GSI-P15-143

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación de API HTTP/REST y clave A; alternativas de responsabilidades próximas sin pista de longitud.

### Antes

¿Qué pareja representa frameworks/especificaciones para APIs REST?

- A. ASP.NET Core (controllers/Minimal APIs) y Jakarta REST. **(correcta)**
- B. NuGet y Jakarta Faces.
- C. MSBuild y CDI.
- D. ADO.NET y Jakarta Transactions.

Explicación: ASP.NET Core (controllers/Minimal APIs) y Jakarta REST. En ambos casos se construyen endpoints HTTP, aunque .NET es framework de implementación y Jakarta REST es especificación.

### Propuesta

¿Qué pareja representa frameworks/especificaciones para APIs REST?

- A. ASP.NET Core APIs y Jakarta REST. **(correcta)**
- B. ADO.NET y la API JDBC.
- C. EF Core y Jakarta Persistence.
- D. DI de ASP.NET Core y CDI.

Explicación: ASP.NET Core ofrece controllers y Minimal APIs para endpoints HTTP; Jakarta REST especifica APIs Java orientadas a servicios de estilo REST. Son tecnologías del mismo ámbito funcional con distinto carácter de producto y especificación. Exponer endpoints HTTP no garantiza por sí solo que todo el diseño respete las restricciones arquitectónicas REST.

- Error B: ADO.NET y JDBC se ocupan del acceso a datos; no definen el modelo de recursos y operaciones HTTP de la API.
- Error C: El ORM se ocupa de persistencia y mapeo. Puede estar detrás del servicio, pero no define sus endpoints REST.
- Error D: La DI compone colaboradores de la aplicación; no constituye por sí sola el modelo de APIs REST.

- [Microsoft: HTTP APIs overview](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/apis?view=aspnetcore-10.0) · Introducción: controller-based APIs y Minimal APIs; endpoints y routing · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Jakarta RESTful Web Services](https://jakarta.ee/specifications/restful-ws/4.0/jakarta-restful-ws-spec-4.0.html) · §1 Introduction; §3 Resources y métodos HTTP · versión: 4.0, 03-04-2024; comprobada 30-10-2026. Especificación de APIs Java para servicios REST, no implementación concreta. · comprobado: 2026-10-30
- [Microsoft: ADO.NET overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview) · Introducción: proveedores, comandos, resultados y distintos niveles de abstracción · versión: Ruta histórica de .NET Framework leída el 30-10-2026; solo conceptos de acceso a datos, sin imponer ensamblados o proveedores históricos. · comprobado: 2026-10-30
- [Oracle: java.sql](https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/package-summary.html) · Introducción; What the JDBC4.3 API Includes; conexión, comandos y drivers · versión: Java SE25, documentación comprobada 30-10-2026; capacidades concretas sujetas al driver. · comprobado: 2026-10-30
- [Microsoft: EF Core overview](https://learn.microsoft.com/en-us/ef/core/) · Introducción; O/RM; The model · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Jakarta Persistence](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · §1 Introduction; §3.11.11 SQL Queries y nota de parámetros posicionales; contratos de persistencia · versión: 3.2, 10-04-2024; comprobada 30-10-2026. Es especificación ORM y requiere implementación; SQL nativo no garantiza portabilidad entre motores. · comprobado: 2026-10-30
- [Microsoft: Dependency injection](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-10.0) · Introducción; Overview of dependency injection; contenedor y dependencias · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Jakarta Contexts and Dependency Injection](https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1.html) · §1 Architecture; §1.2.1 Relationship to Jakarta EE; inyección y ciclos de vida · versión: 4.1 Final, 07-03-2024; comprobada 30-10-2026, sin atribuir identidad de APIs/ciclos con DI de .NET. · comprobado: 2026-10-30

Partida: `b359443a64fe7bc9f576899bce2f6c4bb7847f73848020d5cd1dc3c6830ef74d` · propuesta: `e4be21bee49dcd49e03dd31bb2b26146f6be73f60ecff565f25de4988f8a00a0`

## MAN-GSI-P15-144

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, alternativas y clave C; completar distinción identidad/acceso e integración externa sin equiparar APIs.

### Antes

¿Qué afirmación compara correctamente la seguridad en ambos stacks?

- A. La separación entre autenticación y autorización existe en .NET, mientras Jakarta EE identifica usuarios sin aplicar permisos o roles.
- B. La integración con OAuth 2.0 y OpenID Connect corresponde a Jakarta EE, mientras ASP.NET Core exige identidades locales del servidor.
- C. Ambos distinguen autenticación y autorización y pueden integrarse con identidades externas; los mecanismos concretos son distintos. **(correcta)**
- D. Ambos implementan exactamente las mismas APIs, filtros y anotaciones de seguridad porque los conceptos comunes obligan al mismo mecanismo.

Explicación: Ambos distinguen autenticación y autorización y pueden integrarse con identidades externas; los mecanismos concretos son distintos. La separación conceptual de identidad y permisos es común a ambas plataformas.

### Propuesta

¿Qué afirmación compara correctamente la seguridad en ambos stacks?

- A. La separación entre autenticación y autorización existe en .NET, mientras Jakarta EE identifica usuarios sin aplicar permisos o roles.
- B. La integración con OAuth 2.0 y OpenID Connect corresponde a Jakarta EE, mientras ASP.NET Core exige identidades locales del servidor.
- C. Ambos distinguen autenticación y autorización y pueden integrarse con identidades externas; los mecanismos concretos son distintos. **(correcta)**
- D. Ambos implementan exactamente las mismas APIs, filtros y anotaciones de seguridad porque los conceptos comunes obligan al mismo mecanismo.

Explicación: En ambos entornos se diferencia establecer la identidad de decidir su acceso a un recurso. Pueden integrarse con identidades externas, por ejemplo mediante OpenID Connect con soporte y configuración adecuados. Compartir esos conceptos no iguala APIs, anotaciones o políticas; el acceso debe seguir evaluándose según los requisitos de cada aplicación.

- Error A: Jakarta EE también dispone de mecanismos para restringir recursos por roles o permisos. No se limita a identificar usuarios.
- Error B: ASP.NET Core admite esquemas e integración con proveedores externos; no exige que todas las identidades sean cuentas locales del servidor.
- Error D: Los conceptos comunes no obligan a las mismas interfaces ni al mismo procesamiento. Hay que configurar los mecanismos propios del entorno.

- [Microsoft: Authentication overview](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/?view=aspnetcore-10.0) · Introducción: identidad y acceso; esquemas y handlers; configurar autenticación no impone autorización · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Jakarta Security](https://jakarta.ee/specifications/security/4.0/jakarta-security-spec-4.0.html) · §1.1 Terminology; §1.2.1 Group-To-Role Mapping; §2.4.4 OpenID Connect Annotation · versión: 4.0 Final, 09-05-2024; comprobada 30-10-2026. El prefacio mantiene una referencia heredada a1.0; se usan encabezado4.0 y apartados concretos verificados. · comprobado: 2026-10-30
- [Jakarta EE Platform](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · §2.4 Containers; §2.4.1 Container Requirements; §2.4.2 Jakarta EE Servers · versión: 11; HTML oficial enlazado desde la página de la plataforma, comprobado 30-10-2026. Un contenedor Jakarta no equivale al aislamiento de un contenedor de SO. · comprobado: 2026-10-30

Partida: `ca6f38f17d99d9c37160adb706270627c3702126368230eed924113438fd8c5c` · propuesta: `7ec13e49eddcd381236efad6e8a3edf0a959abab12980d5b356c6dbbef02f519`

## MAN-GSI-P15-145

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación de hosting y clave A; separar servidor HTTP, runtime de plataforma y herramientas de construcción.

### Antes

¿Qué comparación de runtime web es más precisa?

- A. ASP.NET Core suele ejecutarse sobre Kestrel dentro del proceso .NET; Jakarta EE ejecuta componentes en un runtime/contenedor que implementa sus especificaciones. **(correcta)**
- B. ASP.NET Core se despliega dentro de un servidor Jakarta EE y Kestrel actúa como contenedor de servlets, CDI y Persistence.
- C. Ambos stacks requieren IIS como proceso anfitrión; los runtimes de .NET y Jakarta solo aportan bibliotecas de compilación.
- D. Ninguno necesita runtime en ejecución, porque Kestrel y las especificaciones Jakarta traducen directamente el fuente a código nativo.

Explicación: ASP.NET Core suele ejecutarse sobre Kestrel dentro del proceso .NET; Jakarta EE ejecuta componentes en un runtime/contenedor que implementa sus especificaciones. La topología de hosting difiere: Kestrel es servidor HTTP de ASP.NET Core; Jakarta usa un runtime de plataforma.

### Propuesta

¿Qué comparación de runtime web es más precisa?

- A. Kestrel sirve HTTP en ASP.NET Core; un runtime Jakarta implementa los servicios de sus especificaciones. **(correcta)**
- B. Kestrel es un proxy externo que interpreta C\#; Jakarta EE publica bytecode sin un runtime Java.
- C. Kestrel compila el proyecto antes de cada petición; el contenedor Jakarta resuelve solo dependencias de build.
- D. Ambos necesitan IIS para ejecutar componentes y usan sus runtimes únicamente durante la compilación.

Explicación: Kestrel es un servidor HTTP de ASP.NET Core, habitualmente alojado en el proceso de la aplicación. Los componentes Jakarta EE se ejecutan en un runtime o contenedor que implementa las especificaciones pertinentes y utiliza un entorno Java. No se afirma que todo hosting ASP.NET Core use Kestrel: existen otros modelos. Un contenedor Jakarta tampoco es por definición un contenedor de sistema operativo.

- Error B: Kestrel no es un intérprete de fuente C\# en un proxy externo. Jakarta EE requiere un entorno de ejecución Java, no basta distribuir bytecode sin él.
- Error C: Compilar el proyecto o resolver sus dependencias de construcción son tareas de herramientas de build; no definen la función de los servidores en ejecución.
- Error D: IIS es una opción de hosting, no una obligación común a ambas plataformas. Los entornos de ejecución aportan servicios mientras se ejecutan componentes.

- [Microsoft: Kestrel web server](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel?view=aspnetcore-10.0) · Introducción: servidor HTTP multiplataforma de ASP.NET Core; hosting. No se adoptan características marcadas .NET11. · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Jakarta EE Platform](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · §2.4 Containers; §2.4.1 Container Requirements; §2.4.2 Jakarta EE Servers · versión: 11; HTML oficial enlazado desde la página de la plataforma, comprobado 30-10-2026. Un contenedor Jakarta no equivale al aislamiento de un contenedor de SO. · comprobado: 2026-10-30

Partida: `7cfdf17bcee746aadd344f4613a8a82f4013d4738e837d6fa7f7504167a0709e` · propuesta: `486064465e5d9ed7fdbb02e786a6c913fa08efdccc35969bc08f39fedfd4260d`

## MAN-GSI-P15-146

Decisión: pending_review · acción: revise.

Motivo: Conservar separación paquetes/build/runtime y clave C; comparar asignaciones de funciones en forma paralela.

### Antes

¿Qué equivalencia de herramientas es más razonable?

- A. NuGet desempeña el papel de un servidor Jakarta EE porque aloja y ejecuta aplicaciones web empresariales.
- B. Kestrel equivale a Maven o Gradle porque compila proyectos y resuelve todas sus dependencias de build.
- C. NuGet gestiona paquetes .NET; Maven/Gradle gestionan dependencias/build en Java/Jakarta; MSBuild orquesta el build .NET. **(correcta)**
- D. EF Core equivale a Gradle porque ambos administran paquetes y orquestan las fases de compilación del proyecto.

Explicación: NuGet gestiona paquetes .NET; Maven/Gradle gestionan dependencias/build en Java/Jakarta; MSBuild orquesta el build .NET. Conviene separar gestor de paquetes/build de servidor/runtime.

### Propuesta

¿Qué equivalencia de herramientas es más razonable?

- A. NuGet orquesta el build .NET; MSBuild almacena paquetes; Maven y Gradle gestionan dependencias Java.
- B. NuGet distribuye paquetes; MSBuild atiende HTTP; Maven y Gradle ejecutan componentes Jakarta EE.
- C. NuGet gestiona paquetes; MSBuild orquesta el build .NET; Maven y Gradle construyen y resuelven dependencias Java. **(correcta)**
- D. NuGet ejecuta el runtime; MSBuild orquesta el build .NET; Maven y Gradle realizan el mapeo ORM.

Explicación: NuGet permite crear y consumir paquetes .NET. MSBuild coordina la construcción mediante proyectos y tareas. Maven y Gradle combinan construcción y gestión de dependencias en proyectos Java, entre otros usos de Gradle. Son responsabilidades relacionadas, sin una equivalencia exacta uno a uno entre cada herramienta; no deben confundirse con servidor HTTP, runtime u ORM.

- Error A: Intercambia los papeles principales de NuGet y MSBuild: paquetes y coordinación de construcción no son el mismo mecanismo.
- Error B: MSBuild no es el servidor HTTP y Maven/Gradle no son el runtime de componentes Jakarta; pueden lanzar tareas sin convertirse en esos servicios.
- Error D: NuGet no es el entorno que ejecuta la aplicación ni Maven/Gradle realizan el mapeo entre entidades y tablas por ser herramientas de build.

- [Microsoft: Introduction to NuGet](https://learn.microsoft.com/en-us/nuget/what-is-nuget) · Introducción: crear, distribuir y consumir paquetes .NET · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: MSBuild](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=visualstudio) · Introducción: motor de construcción y archivos de proyecto XML · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Apache Maven: Introduction](https://maven.apache.org/what-is-maven.html) · Introduction; Maven Objectives; Providing a uniform build system · versión: Página del proyecto comprobada 30-10-2026; no se atribuye versión instalada ni equivalencia uno a uno con NuGet. · comprobado: 2026-10-30
- [Gradle: Core Concepts](https://docs.gradle.org/current/userguide/gradle_basics.html) · Core concepts: proyectos, tareas, scripts y resolución de dependencias · versión: Manual mostrado como9.8.2, comprobado 30-10-2026; no se instala ni ejecuta Gradle. · comprobado: 2026-10-30

Partida: `7e6cdbb8f10912107977a8a5571d9613bf6d3e3dd01667e73467cc77343bc626` · propuesta: `f322e60f6947b7741579b923382cce3e58c59ed5dec053f29d6891b4dafe9545`

## MAN-GSI-P15-147

Decisión: pending_review · acción: revise.

Motivo: Conservar separación de lógica de negocio y clave D; comparar diseños con distintos acoplamientos reales.

### Antes

Un equipo quiere evitar acoplar lógica de negocio al framework web. ¿Qué diseño es válido en ambos stacks?

- A. Usar entidades ORM como única capa de negocio.
- B. Acceder a secretos directamente desde la UI.
- C. Poner toda la lógica en controllers o servlets por simplicidad.
- D. Separar capa HTTP/controladores de servicios de aplicación/dominio e inyectar dependencias. **(correcta)**

Explicación: Separar capa HTTP/controladores de servicios de aplicación/dominio e inyectar dependencias. La separación de responsabilidades mejora testabilidad y portabilidad conceptual.

### Propuesta

Un equipo quiere evitar acoplar lógica de negocio al framework web. ¿Qué diseño es válido en ambos stacks?

- A. Mover las reglas a un servicio que reciba directamente los objetos HTTP del framework.
- B. Acceder a la petición global desde el dominio para evitar pasar parámetros explícitos.
- C. Mantener las reglas en controllers o servlets y probarlas mediante peticiones HTTP.
- D. Separar HTTP de servicios de aplicación o dominio y proporcionar sus dependencias. **(correcta)**

Explicación: La separación deja a la capa HTTP la adaptación de peticiones y respuestas y mantiene las reglas en servicios con contratos apropiados. Inyectar colaboradores ayuda a probar y sustituir dependencias sin obligar a que el dominio conozca objetos del framework web. No exige una estructura empresarial compleja ni garantiza portabilidad automática de toda la aplicación.

- Error A: Cambiar el nombre o ubicación de una clase no elimina la dependencia si sus reglas siguen recibiendo tipos HTTP específicos del framework.
- Error B: Una petición global mantiene un acoplamiento implícito con el entorno web y dificulta controlar entradas y dependencias en pruebas.
- Error C: Probar vía HTTP puede ser útil, pero dejar allí las reglas no satisface el objetivo de desacoplarlas de controllers o servlets.

- [Microsoft: Architectural principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) · Separation of concerns; Dependency inversion; lógica de negocio separada de HTTP e infraestructura · versión: Texto HTML comprobado 30-10-2026; se usa separación de responsabilidades, no se prescribe una arquitectura empresarial o un número de capas al proyecto. · comprobado: 2026-10-30
- [Microsoft: Dependency injection](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-10.0) · Introducción; Overview of dependency injection; contenedor y dependencias · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Jakarta Contexts and Dependency Injection](https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1.html) · §1 Architecture; §1.2.1 Relationship to Jakarta EE; inyección y ciclos de vida · versión: 4.1 Final, 07-03-2024; comprobada 30-10-2026, sin atribuir identidad de APIs/ciclos con DI de .NET. · comprobado: 2026-10-30

Partida: `3a2c873827ef8cdf8a84baad8b029b395505ca2c1d312842441210f6ac2389fd` · propuesta: `b7ba7e0a0fd406acbf8c6102f6dfef93155ce1dc00fef3b5a8e20386e45cc6e3`

## MAN-GSI-P15-148

Decisión: pending_review · acción: revise.

Motivo: Conservar acceso directo justificado y clave B; evitar la falsa disyuntiva entre ORM y SQL, con decisión localizada y medida.

### Antes

Una API .NET necesita una consulta SQL muy específica, altamente optimizada y con control fino sobre comandos. ¿Qué opción puede ser razonable?

- A. Reescribir la API en Jakarta EE obligatoriamente.
- B. Usar ADO.NET o una técnica de acceso más directa para ese punto, sin obligar a abandonar EF Core en todo el sistema. **(correcta)**
- C. Usar ASP.NET Identity como ORM.
- D. Forzar siempre EF Core aunque no permita el control requerido.

Explicación: Usar ADO.NET o una técnica de acceso más directa para ese punto, sin obligar a abandonar EF Core en todo el sistema. Las arquitecturas pueden combinar niveles de abstracción donde exista una razón técnica medida.

### Propuesta

Una API .NET necesita una consulta SQL muy específica, altamente optimizada y con control fino sobre comandos. ¿Qué opción puede ser razonable?

- A. Cargar las tablas completas y componer la consulta específica en memoria para evitar comandos.
- B. Usar acceso más directo en ese punto, conservando el ORM donde siga siendo adecuado. **(correcta)**
- C. Ampliar el ciclo de vida del contexto para reutilizarlo entre peticiones concurrentes.
- D. Sustituir todo el acceso del sistema por SQL manual aunque no exista otra necesidad medida.

Explicación: Una necesidad concreta puede justificar ADO.NET u otra API de acceso directo sin abandonar EF Core en todo el sistema. También debe evaluarse si las APIs SQL del propio ORM resuelven el caso. La decisión requiere medir y mantener parametrización, recursos y límites transaccionales; no se deduce que el acceso directo sea siempre más rápido.

- Error A: Descargar tablas enteras evita parte de la traducción, pero no proporciona el control fino de comandos solicitado y puede aumentar transferencia y memoria.
- Error C: Compartir un contexto entre peticiones concurrentes no es la solución al control de una consulta particular y rompe sus condiciones habituales de uso.
- Error D: La justificación de un punto específico no demuestra que deba eliminarse el ORM de todos los demás casos.

- [Microsoft: ADO.NET overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview) · Introducción: proveedores, comandos, resultados y distintos niveles de abstracción · versión: Ruta histórica de .NET Framework leída el 30-10-2026; solo conceptos de acceso a datos, sin imponer ensamblados o proveedores históricos. · comprobado: 2026-10-30
- [Microsoft: SQL queries](https://learn.microsoft.com/en-us/ef/core/querying/sql-queries) · Introducción; Passing parameters: SQL específico y parámetros de valor · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Efficient querying](https://learn.microsoft.com/en-us/ef/core/performance/efficient-querying) · Project only properties you need; Beware of lazy loading: N+1; planificación de carga · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `a30438a3f4570fa60677063c4732787b65fb5989eadc82047f265b278ddda7bb` · propuesta: `16fe1fe67373eef7ae4af664bd233992df5f45780b0e6e28c6534de9c618be01`

## MAN-GSI-P15-149

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa y clave B; documentar SQL nativo en Persistence y convivencia con JDBC sin prometer portabilidad universal.

### Antes

Una aplicación Jakarta EE necesita una consulta muy específica que no encaja bien en el ORM. ¿Qué enfoque es razonable?

- A. Forzar la consulta a través de JPQL aunque el modelo no exprese adecuadamente la operación ni su rendimiento requerido.
- B. Usar acceso JDBC/SQL nativo de forma controlada en ese caso, manteniendo Jakarta Persistence donde aporte valor. **(correcta)**
- C. Modificar entidades y mappings hasta simular la consulta, evitando cualquier SQL específico aunque aumente complejidad.
- D. Migrar la aplicación a otra plataforma porque Jakarta Persistence no cubre por sí sola todas las consultas posibles.

Explicación: Usar acceso JDBC/SQL nativo de forma controlada en ese caso, manteniendo Jakarta Persistence donde aporte valor. La abstracción ORM no impide recurrir a mecanismos más directos cuando existe una necesidad justificada.

### Propuesta

Una aplicación Jakarta EE necesita una consulta muy específica que no encaja bien en el ORM. ¿Qué enfoque es razonable?

- A. Forzar la consulta a través de JPQL aunque el modelo no exprese adecuadamente la operación ni su rendimiento requerido.
- B. Usar acceso JDBC/SQL nativo de forma controlada en ese caso, manteniendo Jakarta Persistence donde aporte valor. **(correcta)**
- C. Modificar entidades y mappings hasta simular la consulta, evitando cualquier SQL específico aunque aumente complejidad.
- D. Migrar la aplicación a otra plataforma porque Jakarta Persistence no cubre por sí sola todas las consultas posibles.

Explicación: JDBC y las consultas SQL nativas permiten resolver necesidades específicas junto al ORM. Jakarta Persistence incluye consultas SQL nativas; no es obligatorio abandonar el modelo ni salir siempre del EntityManager para usarlas. Deben controlarse parámetros, recursos y transacciones. La consulta dependiente del motor puede reducir portabilidad y exige pruebas de la solución concreta.

- Error A: Forzar una consulta por una abstracción que no expresa el requisito no resuelve la limitación indicada. Debe evaluarse el mecanismo apropiado al punto concreto.
- Error C: Complicar el modelo solo para evitar SQL específico puede distorsionar responsabilidades sin satisfacer las necesidades de la consulta.
- Error D: Una limitación de la abstracción no obliga a migrar toda la plataforma; existen mecanismos de acceso más directos que pueden coexistir con ella.

- [Jakarta Persistence](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · §1 Introduction; §3.11.11 SQL Queries y nota de parámetros posicionales; contratos de persistencia · versión: 3.2, 10-04-2024; comprobada 30-10-2026. Es especificación ORM y requiere implementación; SQL nativo no garantiza portabilidad entre motores. · comprobado: 2026-10-30
- [Oracle: java.sql](https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/package-summary.html) · Introducción; What the JDBC4.3 API Includes; conexión, comandos y drivers · versión: Java SE25, documentación comprobada 30-10-2026; capacidades concretas sujetas al driver. · comprobado: 2026-10-30

Partida: `36aa73aff08ccc6620cb869621fcdabafa8d6f10b8c205443e1b9c35571bf553` · propuesta: `e79ef0e09f3036020e295639a3fd44de1149072b58c00d752829ad5ed6084499`

## MAN-GSI-P15-150

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave C; explicar dónde se aporta runtime y qué dependencias de plataforma siguen siendo necesarias.

### Antes

Para desplegar una API .NET en contenedores, ¿qué afirmación es correcta?

- A. Debe publicarse siempre como self-contained porque una imagen de contenedor no puede incluir ni compartir un runtime de .NET.
- B. Debe publicarse siempre como framework-dependent y obtener el runtime desde el host, nunca desde la imagen utilizada.
- C. Puede publicarse framework-dependent o self-contained según imagen/base y estrategia; el contenedor no obliga a una única modalidad. **(correcta)**
- D. El motor de contenedores sustituye al CLR y ejecuta directamente el IL, por lo que la modalidad de publicación deja de existir.

Explicación: Puede publicarse framework-dependent o self-contained según imagen/base y estrategia; el contenedor no obliga a una única modalidad. Contenedor y modalidad de publicación son decisiones relacionadas pero distintas.

### Propuesta

Para desplegar una API .NET en contenedores, ¿qué afirmación es correcta?

- A. Debe publicarse siempre como self-contained porque una imagen de contenedor no puede incluir ni compartir un runtime de .NET.
- B. Debe publicarse siempre como framework-dependent y obtener el runtime desde el host, nunca desde la imagen utilizada.
- C. Puede publicarse framework-dependent o self-contained según imagen/base y estrategia; el contenedor no obliga a una única modalidad. **(correcta)**
- D. El motor de contenedores sustituye al CLR y ejecuta directamente el IL, por lo que la modalidad de publicación deja de existir.

Explicación: La imagen y la modalidad de publicación son decisiones relacionadas, pero distintas. Una aplicación framework-dependent puede usar una imagen que incluya el runtime apropiado; una self-contained aporta su runtime y necesita las dependencias nativas adecuadas en la imagen. No se debe confundir el host del contenedor con los archivos disponibles dentro de él ni asumir compatibilidad con cualquier base.

- Error A: Una imagen puede incluir el runtime .NET. Contenerizar no impone publicar la aplicación como self-contained.
- Error B: Framework-dependent requiere un runtime compatible accesible dentro del entorno de la aplicación, que puede aportar la imagen; no se toma por defecto del host externo.
- Error D: El motor de contenedores no sustituye al runtime .NET ni interpreta por sí solo el IL; aislamiento y ejecución del código son responsabilidades diferentes.

- [Microsoft: Application publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/) · Publishing modes: framework-dependent frente a self-contained; runtime requerido o incluido · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: .NET container images](https://learn.microsoft.com/en-us/dotnet/core/docker/container-images) · Tagging scheme; Scenario-based images; aspnet/runtime frente a runtime-deps · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `c70d4c9f42a19b6a021cf01f6b57b451be21a69d6291180f8806dc02934c7ae9` · propuesta: `bd53dbd4675281d3d2e2645bca698a182a423494f2233c41713720edd25a379a`

## MAN-GSI-P15-151

Decisión: pending_review · acción: revise.

Motivo: Conservar evaluación de compatibilidad y clave D; contrastar comprobaciones parciales con el alcance real de una migración.

### Antes

Una organización migra una aplicación .NET Framework antigua a .NET moderno. ¿Qué debe auditar especialmente?

- A. Solo cambiar el número de versión del archivo y dar por terminada la migración.
- B. Mantener cualquier tecnología obsoleta aunque no tenga soporte.
- C. Eliminar todas las pruebas para acelerar.
- D. APIs y librerías heredadas, compatibilidad, modelo de hosting/configuración y dependencias específicas de Windows. **(correcta)**

Explicación: APIs y librerías heredadas, compatibilidad, modelo de hosting/configuración y dependencias específicas de Windows. Migrar no es un simple retargeting; hay que revisar dependencias y arquitectura.

### Propuesta

Una organización migra una aplicación .NET Framework antigua a .NET moderno. ¿Qué debe auditar especialmente?

- A. Cambiar el TFM y comprobar la compilación, sin revisar los caminos funcionales heredados.
- B. Actualizar los paquetes y mantener el hosting y la configuración anteriores sin evaluarlos.
- C. Preparar un host con runtime nuevo, considerando que eso acredita la portabilidad de las APIs.
- D. Evaluar APIs, bibliotecas, hosting, configuración y dependencias de Windows, y validar el resultado. **(correcta)**

Explicación: Migrar de .NET Framework requiere evaluar compatibilidad del código y sus dependencias, además del modelo de ejecución y configuración. Cambiar el destino o conseguir compilar no demuestra que las funciones se comporten igual. Las dependencias de Windows deben revisarse si condicionan el destino; .NET moderno no vuelve portátil por sí mismo toda tecnología heredada.

- Error A: Retargeting y compilación son pasos parciales. Pueden quedar cambios de comportamiento o tecnologías que necesiten adaptación y pruebas.
- Error B: Actualizar paquetes no verifica por sí solo el modelo de hosting o configuración de la aplicación migrada.
- Error C: Disponer de runtime compatible no demuestra que todas las APIs o bibliotecas heredadas tengan la misma disponibilidad y comportamiento.

- [Microsoft: Upgrade .NET apps](https://learn.microsoft.com/en-us/dotnet/core/porting/) · Introducción; evaluación de código, configuración, dependencias y validación · versión: Texto leído 30-10-2026 para evaluación de migración. Se excluye el apartado con STS18meses, incoherente con la política oficial actual comprobada en lote061; no se recomiendan herramientas de migración específicas. · comprobado: 2026-10-30

Partida: `e47d29f25a2bd66897f41cc31322d3e9d5252b93b0331936048df2de07ab27fb` · propuesta: `a9767c58d8f83d6e284d8d88cd46cc0b29fc087d50303b34e1e9b840799c9a89`

## MAN-GSI-P15-152

Decisión: pending_review · acción: revise.

Motivo: Conservar namespace y compatibilidad, clave A; acotar transición a JakartaEE9+ y excluir paquetes de JavaSE no migrados.

### Antes

Una organización migra de Java EE antiguo a Jakarta EE moderno. ¿Qué cambio suele requerir atención explícita?

- A. La transición de paquetes \`javax.\*\` a \`jakarta.\*\` y la compatibilidad de librerías/runtime. **(correcta)**
- B. Actualizar la versión de Java aunque las bibliotecas y el runtime ya sean compatibles con la versión utilizada.
- C. Sustituir Maven por Gradle, aun cuando el sistema de build existente admita las dependencias y plugins requeridos.
- D. Migrar el motor de base de datos aunque el proveedor y el dialecto actual sigan siendo compatibles con la aplicación.

Explicación: La transición de paquetes \`javax.\*\` a \`jakarta.\*\` y la compatibilidad de librerías/runtime. El namespace y la compatibilidad del ecosistema son puntos clave de migración.

### Propuesta

Al migrar una aplicación Java EE8 a Jakarta EE9 o posterior, ¿qué cambio de las APIs de plataforma debe revisarse explícitamente?

- A. Actualizar las APIs migradas a jakarta y comprobar compatibilidad de bibliotecas y runtime. **(correcta)**
- B. Renombrar cualquier paquete javax, incluido javax.sql, por el equivalente de nombre jakarta.
- C. Cambiar los imports del fuente sin revisar dependencias binarias o descriptores de despliegue.
- D. Conservar las referencias javax de las APIs migradas y cambiar solo el nombre del servidor.

Explicación: Jakarta EE9 introduce el cambio de namespace de las APIs de la plataforma y exige revisar código y dependencias compatibles. No es una sustitución global de todo javax: javax.sql pertenece a Java SE y se conserva. También deben revisarse descriptores y propiedades afectados. Jakarta EE8 aún utilizaba el namespace anterior; no basta asumir que cualquier edición Jakarta ya usa jakarta.

- Error B: Hay paquetes javax de Java SE que no cambian así, como javax.sql. Un reemplazo indiscriminado crea nombres de APIs inexistentes.
- Error C: Modificar imports no adapta por sí solo bibliotecas compiladas, nombres de propiedades o descriptores que también estén afectados.
- Error D: El cambio de namespace afecta referencias de APIs y compatibilidad del código y binarios; renombrar el servidor no lo resuelve.

- [Jakarta EE9: Compatibility and Migration](https://jakarta.ee/specifications/platform/9/jakarta-platform-spec-9.html) · §12.1.1 Backwards Compatibility; §12.1.1.1 javax to jakarta; §5.7.1.4 DataSource · versión: 9 Final, 06-11-2020, comprobada 30-10-2026. Fuente histórica pertinente al cambio de namespace, no descripción de toda la plataforma actual. · comprobado: 2026-10-30
- [Oracle: javax.sql](https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/javax/sql/package-summary.html) · Introducción: paquete de Java SE y DataSource · versión: Java SE25, comprobada 30-10-2026. Contraejemplo a sustituir indiscriminadamente todos los paquetes javax. · comprobado: 2026-10-30

Partida: `25e73d0daadc9f51dfb0451305edff5234076f281ee6ab535f1b85e23441eec4` · propuesta: `3d372e57daa97d5ba78bad999043be24be799219ed6e52de580fb6d46090b343`

## MAN-GSI-P15-153

Decisión: pending_review · acción: revise.

Motivo: Conservar diagnóstico y planificación de carga, clave C; distinguir número de consultas de pooling, tracking y contexto compartido.

### Antes

Si un ORM en cualquiera de los dos stacks genera N+1, ¿qué respuesta es la adecuada?

- A. Ignorar el problema porque los ORMs no generan consultas adicionales.
- B. Desactivar todos los logs de SQL.
- C. Revisar el patrón de carga/proyección y las consultas generadas; no culpar al lenguaje ni aumentar hardware sin medir. **(correcta)**
- D. Crear un contexto de persistencia singleton compartido globalmente.

Explicación: Revisar el patrón de carga/proyección y las consultas generadas; no culpar al lenguaje ni aumentar hardware sin medir. El problema es de patrón de acceso y debe diagnosticarse con observabilidad y consultas reales.

### Propuesta

Si un ORM en cualquiera de los dos stacks genera N+1, ¿qué respuesta es la adecuada?

- A. Aumentar el pool de conexiones para mantener el mismo patrón con más consultas simultáneas.
- B. Desactivar tracking para que las consultas de relaciones se agrupen automáticamente.
- C. Examinar las consultas emitidas y ajustar la carga o proyección de los datos necesarios. **(correcta)**
- D. Reutilizar un contexto de persistencia global para compartir entidades entre todas las peticiones.

Explicación: Un N+1 observado debe diagnosticarse por consultas y patrón de acceso. La proyección y las estrategias de carga permiten obtener los datos necesarios sin una consulta separada innecesaria por entidad. No hay una receta única: un join puede multiplicar filas y las consultas por lotes tienen costes distintos. El comportamiento concreto depende del ORM y proveedor.

- Error A: Más conexiones pueden cambiar concurrencia, pero no eliminan los viajes al origen que provoca el patrón de carga.
- Error B: Cambiar el seguimiento de entidades no agrupa por sí solo las consultas de relaciones; son decisiones diferentes.
- Error D: Un contexto global compartido no es una solución general de carga o caché y puede introducir problemas de concurrencia y estado.

- [Microsoft: Efficient querying](https://learn.microsoft.com/en-us/ef/core/performance/efficient-querying) · Project only properties you need; Beware of lazy loading: N+1; planificación de carga · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Hibernate ORM User Guide](https://docs.hibernate.org/orm/current/userguide/html_single/) · §12.1 Fetching basics; §12.2 direct fetching y entity queries; §12.10 FetchMode.SELECT; N+1 · versión: Manual current leído 30-10-2026; ejemplo de implementación ORM, sin atribuir sus optimizaciones a todos los proveedores de Jakarta Persistence. · comprobado: 2026-10-30

Partida: `8299d243b364c9eb1a13227504b24bda82e97a845d6e50e7dd1d47d46f3d1673` · propuesta: `77f7c67e6b5f9a9d02af20a98fce298f73de4260ebca50efd06b629d4b2aafc4`

## MAN-GSI-P15-154

Decisión: pending_review · acción: revise.

Motivo: Conservar defensa por capas y clave B; acotar endpoint autenticado y evitar imponer una secuencia universal de toda validación.

### Antes

En ambos stacks, ¿qué secuencia conceptual es correcta al proteger un endpoint?

- A. Proteger el canal con HTTPS y omitir autorización, validación y gestión de secretos porque el cifrado autentica cada operación.
- B. Autenticar identidad, aplicar autorización, validar entrada y ejecutar lógica con mínimo privilegio, además de proteger el canal y secretos. **(correcta)**
- C. Validar roles y datos únicamente en el cliente para reducir carga, confiando en que el usuario no altere sus peticiones.
- D. Comprobar solo que exista una identidad autenticada y ejecutar cualquier función con privilegios máximos para evitar errores de permisos.

Explicación: Autenticar identidad, aplicar autorización, validar entrada y ejecutar lógica con mínimo privilegio, además de proteger el canal y secretos. La seguridad eficaz es por capas; ningún control individual sustituye a los demás.

### Propuesta

Para un endpoint .NET o Jakarta que exige identidad autenticada y acceso autorizado, ¿qué conjunto de controles debe cubrir el servidor?

- A. Proteger el canal y autenticar al solicitante, confiando al cliente la comprobación de roles y datos.
- B. Validar identidad, permisos y entrada en servidor, con mínimo privilegio y protección de canal y secretos. **(correcta)**
- C. Comprobar roles y formato en el navegador y permitir que el servidor confíe en esas comprobaciones.
- D. Autenticar y validar la entrada, dando al proceso permisos amplios para evitar restricciones operativas.

Explicación: Un endpoint que requiere identidad y permiso necesita controles complementarios: autenticación, autorización y validación de entrada en servidor, con privilegios adecuados y protección del canal y credenciales. Ninguno sustituye a los demás. Es una relación de responsabilidades, no un orden invariable de todas las comprobaciones: algunas validaciones pueden hacerse antes según el diseño.

- Error A: El canal y la identidad no acreditan permiso ni validez de la operación. El cliente no es una frontera de confianza para esos controles.
- Error C: El usuario puede alterar u omitir las comprobaciones del navegador; el servidor debe aplicar las reglas que protegen sus recursos.
- Error D: Autenticar y validar entrada no justifica permisos innecesarios del proceso. Un fallo o compromiso tendría mayor alcance.

- [Microsoft: Authentication overview](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/?view=aspnetcore-10.0) · Introducción: identidad y acceso; esquemas y handlers; configurar autenticación no impone autorización · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Jakarta Security](https://jakarta.ee/specifications/security/4.0/jakarta-security-spec-4.0.html) · §1.1 Terminology; §1.2.1 Group-To-Role Mapping; §2.4.4 OpenID Connect Annotation · versión: 4.0 Final, 09-05-2024; comprobada 30-10-2026. El prefacio mantiene una referencia heredada a1.0; se usan encabezado4.0 y apartados concretos verificados. · comprobado: 2026-10-30
- [OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) · Introduction; Enforce Least Privileges; Validate permissions on every request; Verify checks in the right location · versión: Documento del proyecto comprobado 30-10-2026; controles de servidor, no mera comprobación del cliente. · comprobado: 2026-10-30
- [OWASP: REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html) · HTTPS; Access Control; Input validation; Sensitive information in HTTP requests · versión: Documento del proyecto comprobado 30-10-2026; controles complementarios y aplicación de políticas en servidor. · comprobado: 2026-10-30
- [NIST CSRC: least privilege](https://csrc.nist.gov/glossary/term/least_privilege) · Definiciones de mínimo privilegio para usuarios, procesos y entidades; fuentes CNSSI4009/NIST800-53 · versión: Glosario público comprobado 30-10-2026; definiciones y publicaciones de procedencia indicadas, sin convertir el glosario en norma aplicable al proyecto. · comprobado: 2026-10-30

Partida: `fa3ecf57d3b9a91e87f78c7bf6bcefc2843c752aad4fc281ef635d40aa016cbe` · propuesta: `25bdb8590be3ce9878230573569d3c287490034ed142177aef7fb1a00b9a4628`

## MAN-GSI-P15-155

Decisión: pending_review · acción: revise.

Motivo: Conservar unidad de negocio y clave D; caso limitado a una base transaccional y recursos participantes, sin exigir transacción explícita redundante.

### Antes

Un caso de negocio exige que actualizar un pedido y reservar inventario sea una única unidad coherente. ¿Qué diseño es más correcto?

- A. Ejecutar ambas operaciones desde el navegador y considerar que dos respuestas HTTP correctas constituyen una transacción atómica.
- B. Confirmar la actualización y la reserva por separado, confiando en reintentos manuales si la segunda operación falla tras la primera.
- C. Escribir primero un log de intención y omitir cualquier control transaccional o compensación, porque el registro garantiza consistencia por sí solo.
- D. Definir un límite transaccional en la capa de servicio usando EF Core/transacciones en .NET o Jakarta Transactions/Persistence en Jakarta EE según el stack. **(correcta)**

Explicación: Definir un límite transaccional en la capa de servicio usando EF Core/transacciones en .NET o Jakarta Transactions/Persistence en Jakarta EE según el stack. La transacción debe alinearse con la unidad de negocio y los recursos implicados.

### Propuesta

Actualizar un pedido y reservar inventario requiere dos escrituras en la misma base de datos transaccional: deben confirmarse ambas o ninguna. ¿Qué diseño corresponde en la capa de servicio?

- A. Enviar dos operaciones HTTP desde el navegador y tratar sus respuestas como una confirmación común.
- B. Guardar pedido y reserva por separado, considerando que el mismo contexto los hace atómicos.
- C. Registrar la intención antes de guardar por separado y dar por obtenida la atomicidad por ese log.
- D. Hacer que ambas escrituras participen en un mismo límite transaccional del servicio. **(correcta)**

Explicación: Las dos escrituras deben participar en la misma transacción que cubre la unidad de negocio y los recursos del caso. Puede lograrse con los mecanismos apropiados de EF Core o Jakarta Transactions/Persistence, según plataforma y configuración. En EF Core una sola llamada SaveChanges puede aportar la atomicidad necesaria; no se exige abrir otra transacción explícita en todo caso. Esto no incorpora por sí solo efectos externos arbitrarios.

- Error A: Dos respuestas HTTP no constituyen un commit común: una operación puede haberse confirmado y la otra fallar.
- Error B: Compartir contexto o servicio no asegura que confirmaciones separadas formen una transacción única. Hay que delimitarla de acuerdo con la operación.
- Error C: Un registro de intención aislado no revierte automáticamente una escritura ni hace atómicas confirmaciones independientes.

- [Microsoft: Using transactions](https://learn.microsoft.com/en-us/ef/core/saving/transactions) · Introducción; Default transaction behavior; Using transactions; recursos y proveedor · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Jakarta Transactions](https://jakarta.ee/specifications/transactions/2.0/jakarta-transactions-spec-2.0.html) · §1 Introduction; §2.3 JDBC; §3.7 Transactional Annotation · versión: 2.0 Final, 08-10-2020; comprobada 30-10-2026 y listada en JakartaEE11. Límites de recursos participantes, no atomicidad de efectos externos arbitrarios. · comprobado: 2026-10-30
- [Jakarta Persistence](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · §1 Introduction; §3.11.11 SQL Queries y nota de parámetros posicionales; contratos de persistencia · versión: 3.2, 10-04-2024; comprobada 30-10-2026. Es especificación ORM y requiere implementación; SQL nativo no garantiza portabilidad entre motores. · comprobado: 2026-10-30

Partida: `5504a747b249d1eaf504a322dc954cd0e552353a354ddfd6bfa685e7f63c60f5` · propuesta: `1dd900a747cddd60dc243fb7e6ff22b89be263b3e7bafbb6a84ba0589ba3a928`

## MAN-GSI-P15-156

Decisión: pending_review · acción: revise.

Motivo: Conservar alternativas y clave C; precisar que se buscan trazas, métricas y logs interoperables en ambos lenguajes.

### Antes

¿Qué tecnología permite una estrategia de observabilidad homogénea entre servicios .NET y Java/Jakarta modernos?

- A. Usar EventPipe para .NET y Java Flight Recorder para Java, manteniendo canales y modelos de datos separados.
- B. Exportar únicamente métricas de ambos stacks a Prometheus y mantener trazas y logs con instrumentaciones independientes.
- C. OpenTelemetry, mediante instrumentación y exportadores compatibles en ambos ecosistemas. **(correcta)**
- D. Centralizar los logs en un backend común sin unificar instrumentación, contexto de trazas ni métricas.

Explicación: OpenTelemetry, mediante instrumentación y exportadores compatibles en ambos ecosistemas. OpenTelemetry es multiplataforma y facilita trazas/métricas/logs con backend desacoplado.

### Propuesta

¿Qué tecnología facilita instrumentación y exportación interoperables de trazas, métricas y logs entre servicios .NET y Java/Jakarta?

- A. Usar EventPipe para .NET y Java Flight Recorder para Java, manteniendo canales y modelos de datos separados.
- B. Exportar únicamente métricas de ambos stacks a Prometheus y mantener trazas y logs con instrumentaciones independientes.
- C. OpenTelemetry, mediante instrumentación y exportadores compatibles en ambos ecosistemas. **(correcta)**
- D. Centralizar los logs en un backend común sin unificar instrumentación, contexto de trazas ni métricas.

Explicación: OpenTelemetry dispone de instrumentación y SDKs para .NET y Java que permiten generar y exportar telemetría con convenciones comunes y backend desacoplado. Deben elegirse componentes compatibles y propagar el contexto necesario; usar el nombre del estándar no configura automáticamente la correlación o todas las integraciones de una aplicación.

- Error A: EventPipe y JFR aportan diagnóstico de sus plataformas, pero mantener canales y modelos separados no establece la instrumentación interoperable común pedida.
- Error B: Compartir únicamente métricas no unifica el tratamiento de trazas y logs que la pregunta incluye en la estrategia de observabilidad.
- Error D: Almacenar logs juntos no unifica por sí solo instrumentación, contexto distribuido y otras señales.

- [OpenTelemetry: What is OpenTelemetry?](https://opentelemetry.io/docs/what-is-opentelemetry/) · What is OpenTelemetry; What is observability; Main OpenTelemetry components · versión: Documentación pública comprobada 30-10-2026; ecosistema independiente del backend y sin limitar a tres todas las señales disponibles. · comprobado: 2026-10-30
- [OpenTelemetry for .NET](https://opentelemetry.io/docs/languages/dotnet/) · Introducción; Status and Releases; Version support · versión: Documentación pública comprobada 30-10-2026; soporte según versión, instrumentación y exportadores; no se instala SDK. · comprobado: 2026-10-30
- [OpenTelemetry for Java](https://opentelemetry.io/docs/languages/java/) · Introducción; Status and Releases; instrumentación Java · versión: Documentación pública comprobada 30-10-2026; no se atribuyen a todo agente o integración las mismas capacidades. · comprobado: 2026-10-30

Partida: `27b67edb019d477db503df65deed4bad66bb1fd57ae73e973cefb42aa1a182fb` · propuesta: `ece57a70fcee100a80d2c6d6ddccc5ba6b8cb4e8966f3793eabc60d26e9c7fd6`
