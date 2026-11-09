# GSI-EDITORIAL-060 — revisión propuesta

Preparado: 2026-10-29. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `33a4ae1bcce047b262ccc5f88e1056d62128694340a02a6a693d2dee372d33b6`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P15-135

Decisión: pending_review · acción: revise.

Motivo: Conservar construcción/dependencias y clave B; comparar capas próximas del ecosistema Java y matizar el posible lanzamiento mediante plugins.

### Antes

¿Qué función tienen Maven o Gradle en un proyecto Jakarta EE?

- A. Implementar Jakarta Persistence.
- B. Gestionar build y dependencias; no son el servidor/runtime Jakarta EE. **(correcta)**
- C. Ejecutar el contenedor web de Jakarta EE por definición.
- D. Sustituir a la JVM.

Explicación: Gestionar build y dependencias; no son el servidor/runtime Jakarta EE. Build tool y runtime son capas distintas, igual que NuGet/MSBuild no equivalen al CLR.

### Propuesta

¿Qué función tienen Maven o Gradle en un proyecto Jakarta EE?

- A. Proporcionar el contenedor que ejecuta las aplicaciones de Jakarta EE.
- B. Orquestar la construcción y resolver dependencias del proyecto Java. **(correcta)**
- C. Definir las reglas normativas de las APIs empresariales de Jakarta EE.
- D. Ejecutar bytecode y gestionar la memoria de la máquina virtual.

Explicación: Maven y Gradle automatizan construcción, pruebas y gestión de dependencias mediante sus modelos y plugins. Preparan artefactos que después usa un entorno de ejecución. Un plugin puede iniciar herramientas o un servidor, pero eso no convierte a la herramienta de build en la JVM o en una implementación de Jakarta EE.

- Error A: El contenedor realiza contratos de ejecución de la plataforma; producir o lanzar un artefacto con un plugin no es implementar ese contenedor.
- Error C: Los contratos normativos los fijan las especificaciones; las herramientas de construcción no los definen por gestionar dependencias.
- Error D: Ejecutar bytecode y gestionar memoria corresponde a la máquina virtual, no al propósito de Maven o Gradle.

- [Apache Maven: Introduction](https://maven.apache.org/what-is-maven.html) · Introduction; Maven’s Objectives; Providing a uniform build system: POM y plugins · versión: Documentación pública leída el 29-10-2026. Construcción y gestión del proyecto, sin instalar o ejecutar Maven · comprobado: 2026-10-29
- [Gradle User Manual: The Java Plugin](https://docs.gradle.org/current/userguide/java_plugin.html) · Tasks, Lifecycle Tasks y Dependency management: compile Java, test y configuraciones de dependencias · versión: Ruta current con versión 9.8.2 indicada en la página, leída el 29-10-2026. No acredita una instalación o versión local · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta EE Platform 11](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · 2.4.2 servidores y Java SE; 2.13 contratos; 2.24 y9.7 retirada de Jakarta Managed Beans; 5.24 inyección mediada por CDI; 12 compatibilidad · versión: 11.0, 10-03-2025 según cabecera, HTML oficial leído el 29-10-2026. Se distingue especificación histórica de Managed Beans y beans gestionados por CDI · comprobado: 2026-10-29

Partida: `ffbc547a93382a3423cc5973f6247e1518cc97c49dae1ac030861b2550715c8f` · propuesta: `d19edcdc9118625bdbcac0126e8073a8982aebf93df421d0b9cb01ba7ee82c25`

## MAN-GSI-P15-136

Decisión: pending_review · acción: revise.

Motivo: Conservar javax→jakarta y clave A; acotar Jakarta EE 9 y posteriores y añadir excepción Java SE verificable, sin sustitución indiscriminada.

### Antes

¿Qué cambio de namespace es característico al migrar de Java EE antiguo a Jakarta EE moderno?

- A. De \`javax.\*\` a \`jakarta.\*\` para las APIs transferidas a Jakarta. **(correcta)**
- B. De \`java.\*\` a \`jakarta.\*\` para todas las clases de la biblioteca estándar incluidas en Java SE y en la JVM.
- C. De \`jakarta.\*\` a \`javax.\*\`, recuperando los nombres anteriores en las versiones modernas posteriores a la transferencia.
- D. De \`javax.\*\` a \`dotnet.\*\` para mantener interoperabilidad binaria directa entre componentes Jakarta y ensamblados .NET.

Explicación: De \`javax.\*\` a \`jakarta.\*\` para las APIs transferidas a Jakarta. La transición de namespace es uno de los impactos de migración más visibles.

### Propuesta

Al migrar de Java EE 8 o Jakarta EE 8 a Jakarta EE 9 o posterior, ¿qué criterio describe correctamente el cambio de namespace?

- A. Usar jakarta.\* para las APIs Jakarta renombradas y conservar los paquetes de Java SE. **(correcta)**
- B. Usar jakarta.\* para cualquier paquete javax.\*, incluidos los pertenecientes a Java SE.
- C. Mantener javax.\* para las APIs Jakarta renombradas cambiando solo su versión de dependencia.
- D. Cambiar solo imports sin revisar descriptores, propiedades o compatibilidad de binarios.

Explicación: El cambio de namespace se produce en Jakarta EE 9 para las APIs transferidas y renombradas de la plataforma; Jakarta EE 8 aún conservaba javax. No es una sustitución de todos los paquetes de Java SE: javax.sql.DataSource sigue siendo una API de Java SE. La migración también puede afectar propiedades, descriptores y dependencias; no garantiza compatibilidad binaria con versiones anteriores.

- Error B: No todo javax pertenece a Jakarta EE; javax.sql.DataSource es un contraejemplo que se conserva en Java SE.
- Error C: Cambiar solo la versión de una dependencia no renombra referencias del código a una API cuya identidad de paquete cambió.
- Error D: La migración puede afectar más que imports y rompe compatibilidad de código/binarios para las APIs renombradas; hay que revisar sus otros contratos.

- [Eclipse Foundation: Jakarta EE Platform 9](https://jakarta.ee/specifications/platform/9/jakarta-platform-spec-9.html) · 12.1.1 Backwards Compatibility; 12.1.1.1 javax to jakarta Namespace; propiedades, descriptores y migración · versión: 9 Final Release, 06-11-2020 según cabecera, HTML leído el 29-10-2026. Jakarta EE 8 mantuvo javax; el cambio se delimita a las APIs Jakarta renombradas · comprobado: 2026-10-29
- [Oracle Java SE 17 API: javax.sql.DataSource](https://docs.oracle.com/en/java/javase/17/docs/api/java.sql/javax/sql/DataSource.html) · Cabecera: módulo java.sql, paquete javax.sql e interfaz DataSource · versión: Documentación de Java SE 17 leída el 29-10-2026. Contraejemplo concreto a sustituir indiscriminadamente todo paquete javax · comprobado: 2026-10-29

Partida: `e4f5648eb5aa0820019648cd75cabe77c55059249ed9472d618e6887ffcc22f5` · propuesta: `d277af7763ca31968eb494ba9ce23eeebbbc1bd1e3eb961c712ae6a4ab62dbc8`

## MAN-GSI-P15-137

Decisión: pending_review · acción: revise.

Motivo: Conservar CDI y clave B; distinguir la especificación retirada Jakarta Managed Beans de los CDI managed beans que siguen vigentes.

### Antes

En Jakarta EE moderno, ¿qué tecnología se prefiere para inyección y componentes gestionados frente al antiguo enfoque de Managed Beans?

- A. Jakarta Mail.
- B. CDI. **(correcta)**
- C. JDBC exclusivamente.
- D. Servlet Filters como contenedor DI.

Explicación: CDI. CDI es la base moderna para DI y contextos; conviene evitar material antiguo que presente Managed Beans como mecanismo general actual.

### Propuesta

En Jakarta EE 11, ¿qué tecnología proporciona el modelo de inyección y componentes contextuales frente a la antigua especificación Jakarta Managed Beans?

- A. Jakarta Persistence.
- B. CDI. **(correcta)**
- C. Jakarta Transactions.
- D. Jakarta REST.

Explicación: CDI aporta inyección de dependencias, resolución por tipos/cualificadores y gestión contextual de instancias. Jakarta EE 11 retira la antigua especificación Jakarta Managed Beans, pero mantiene el modelo de beans gestionados por CDI. Retirar aquella especificación no significa eliminar todos los objetos llamados managed beans ni sustituir CDI por una API de otra responsabilidad.

- Error A: Persistence se centra en entidades, contexto de persistencia y mapeo; no sustituye el modelo general de inyección contextual de CDI.
- Error C: Transactions delimita y coordina unidades transaccionales; puede integrarse con CDI sin convertirse en su modelo de dependencias.
- Error D: REST define recursos y APIs de servicios HTTP; puede utilizar CDI, pero no es la especificación general de inyección y contextos.

- [Eclipse Foundation: Jakarta Contexts and Dependency Injection 4.1](https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1.html) · 2.1 capacidades del contenedor; 5 inyección y resolución; 6 ámbitos/contextos; 7 ciclo de vida de instancias · versión: 4.1 Final, 07-03-2024 según cabecera, HTML leído el 29-10-2026. No se enseña que hayan desaparecido los CDI managed beans · comprobado: 2026-10-29
- [Eclipse Foundation: Jakarta EE Platform 11](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · 2.4.2 servidores y Java SE; 2.13 contratos; 2.24 y9.7 retirada de Jakarta Managed Beans; 5.24 inyección mediada por CDI; 12 compatibilidad · versión: 11.0, 10-03-2025 según cabecera, HTML oficial leído el 29-10-2026. Se distingue especificación histórica de Managed Beans y beans gestionados por CDI · comprobado: 2026-10-29

Partida: `41399fed09d40cb469be095541f0135e45b5257069b64c64d502af091f1c14ae` · propuesta: `b57e20d936cf2261bbb769b8af129616ba34dcb22b5bf6ec6b062757fc96400c`

## MAN-GSI-P15-138

Decisión: pending_review · acción: revise.

Motivo: Conservar especificación/implementación y clave A; parejas de conceptos paralelas que separan contrato, producto, aplicación y build.

### Antes

¿Cuál es la diferencia entre una especificación Jakarta EE y una implementación?

- A. La especificación define contratos/semántica; una implementación concreta proporciona el runtime que los ejecuta. **(correcta)**
- B. Son exactamente el mismo producto.
- C. Una implementación no necesita cumplir ninguna especificación.
- D. La especificación es un IDE y la implementación un lenguaje.

Explicación: La especificación define contratos/semántica; una implementación concreta proporciona el runtime que los ejecuta. Esta distinción explica por qué existen varios runtimes compatibles con la misma plataforma.

### Propuesta

¿Qué pareja distingue una especificación Jakarta EE y una implementación, respectivamente?

- A. Contratos normativos / software concreto que los implementa. **(correcta)**
- B. Software del servidor / reglas normativas de sus APIs.
- C. Plantillas del IDE / código de negocio de una aplicación.
- D. Versiones de dependencias / tareas de construcción del proyecto.

Explicación: Una especificación define contratos, semántica y requisitos de conformidad; una implementación aporta el software que realiza esos contratos. Puede haber varios productos compatibles. La compatibilidad se verifica para una versión y ámbito concretos, no por compartir nombre con la especificación. El IDE, el código de negocio y las herramientas de construcción son otras capas.

- Error B: Invierte las categorías: el documento normativo no es el servidor instalado y el producto implementa, no reemplaza, sus contratos normativos.
- Error C: El entorno de edición y la lógica de negocio no distinguen especificación de plataforma e implementación de sus servicios.
- Error D: Dependencias y tareas corresponden a construcción del proyecto, no a la distinción entre contrato normativo y realización.

- [Eclipse Foundation: Jakarta EE Platform 11](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · 2.4.2 servidores y Java SE; 2.13 contratos; 2.24 y9.7 retirada de Jakarta Managed Beans; 5.24 inyección mediada por CDI; 12 compatibilidad · versión: 11.0, 10-03-2025 según cabecera, HTML oficial leído el 29-10-2026. Se distingue especificación histórica de Managed Beans y beans gestionados por CDI · comprobado: 2026-10-29

Partida: `36334afe742677c9e7ba835fc1d55862dfc4c110a9d718f997d41ef80f8203f4` · propuesta: `6154019d651ea2865131c3bf75d16cc0dd75dfa990b3a6c0fb5d8e5dad8bea86`

## MAN-GSI-P15-139

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas y clave C; completar relación de capas y versiones con un ejemplo normativo concreto.

### Antes

¿Qué relación hay entre Java SE y Jakarta EE?

- A. El número de Jakarta EE determina la versión de Java SE: Jakarta EE 11 solo puede significar Java SE 11.
- B. Java SE es un perfil reducido definido dentro de Jakarta EE y no puede utilizarse independientemente de un servidor empresarial.
- C. Jakarta EE se construye sobre Java SE y añade especificaciones empresariales; no son versiones equivalentes. **(correcta)**
- D. Jakarta EE sustituye la JVM por un runtime propio incompatible con clases, bibliotecas y herramientas de la plataforma Java SE.

Explicación: Jakarta EE se construye sobre Java SE y añade especificaciones empresariales; no son versiones equivalentes. La numeración de Jakarta EE no debe interpretarse como versión de Java SE.

### Propuesta

¿Qué relación hay entre Java SE y Jakarta EE?

- A. El número de Jakarta EE determina la versión de Java SE: Jakarta EE 11 solo puede significar Java SE 11.
- B. Java SE es un perfil reducido definido dentro de Jakarta EE y no puede utilizarse independientemente de un servidor empresarial.
- C. Jakarta EE se construye sobre Java SE y añade especificaciones empresariales; no son versiones equivalentes. **(correcta)**
- D. Jakarta EE sustituye la JVM por un runtime propio incompatible con clases, bibliotecas y herramientas de la plataforma Java SE.

Explicación: Java SE proporciona la base de ejecución y bibliotecas sobre la que Jakarta EE define servicios y contratos adicionales para aplicaciones empresariales. Son líneas de versión diferentes. Por ejemplo, Jakarta EE 11 requiere Java SE 17 como mínimo; la igualdad de números no es una regla. Un producto concreto debe verificarse con su JDK y su certificación.

- Error A: La numeración no determina una equivalencia: Jakarta EE 11 no significa Java SE 11; la edición 11 fija mínimo Java SE 17.
- Error B: Java SE es una plataforma utilizable por sí misma, no un perfil de Jakarta EE que requiera un servidor empresarial.
- Error D: Jakarta EE se apoya en tecnología Java SE; no reemplaza la JVM por un entorno que sea por definición incompatible con ella.

- [Eclipse Foundation: Jakarta EE Platform 11](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · 2.4.2 servidores y Java SE; 2.13 contratos; 2.24 y9.7 retirada de Jakarta Managed Beans; 5.24 inyección mediada por CDI; 12 compatibilidad · versión: 11.0, 10-03-2025 según cabecera, HTML oficial leído el 29-10-2026. Se distingue especificación histórica de Managed Beans y beans gestionados por CDI · comprobado: 2026-10-29

Partida: `4d7244f11c6e5eb98add56729e6dc6765d43c6f0f4e62ba585a2cb8710cda60b` · propuesta: `d4a50957b58d8711e7c17eac99e9d96e62fef4ae14d6945e2fff49d00dd1a249`

## MAN-GSI-P15-140

Decisión: pending_review · acción: revise.

Motivo: Conservar coherencia de la unidad transaccional y clave C; microcaso con un recurso participante y dos escrituras, sin prometer atomicidad de efectos externos.

### Antes

En un servicio empresarial Jakarta EE, ¿por qué es importante definir correctamente el límite transaccional?

- A. Mantener una sola transacción durante toda la sesión del usuario para incluir cualquier operación que realice después.
- B. Confirmar cada sentencia de persistencia por separado aunque varias formen conjuntamente una única operación de negocio.
- C. Para asegurar que las operaciones que forman una unidad de negocio confirmen o reviertan de forma coherente. **(correcta)**
- D. Definir la transacción solo durante compilación y despliegue porque el contenedor no puede gestionarla en ejecución.

Explicación: Para asegurar que las operaciones que forman una unidad de negocio confirmen o reviertan de forma coherente. Transacción es una propiedad de consistencia de la unidad de trabajo, no del proceso de build.

### Propuesta

Un servicio resta saldo de una cuenta y lo abona en otra dentro del mismo recurso transaccional. Las dos escrituras forman una transferencia. ¿Para qué definir correctamente su límite transaccional?

- A. Confirmar la resta antes de iniciar una nueva transacción para el abono.
- B. Mantener abierta la transacción hasta que termine toda la sesión del usuario.
- C. Confirmar o revertir conjuntamente las escrituras de la unidad de negocio. **(correcta)**
- D. Aplicar la transacción a la consulta inicial y dejar las escrituras fuera.

Explicación: El límite debe abarcar las escrituras que integran la unidad de negocio para que el recurso transaccional participante las confirme o revierta conjuntamente. Deben aplicarse las reglas de propagación y rollback del contrato; no toda excepción provoca rollback por defecto. Tampoco se incluyen automáticamente correos o llamadas externas que no participan en la transacción.

- Error A: Confirmar la resta de forma independiente permite que un fallo del abono deje un resultado parcial de la transferencia.
- Error B: La sesión del usuario puede contener varias unidades y esperas; prolongar la transacción así no define correctamente esta unidad y puede retener recursos.
- Error D: Si las escrituras quedan fuera, la transacción de la consulta no asegura su confirmación o reversión conjunta.

- [Eclipse Foundation: Jakarta Transactions 2.0](https://jakarta.ee/specifications/transactions/2.0/jakarta-transactions-spec-2.0.html) · 1 Introduction; 3.1 UserTransaction; 3.3 y3.4 recursos participantes; 3.7 Transactional y tratamiento del rollback · versión: 2.0 Final Release, 08-10-2020 según cabecera, HTML leído el 29-10-2026. Unidad transaccional con recursos participantes; no toda excepción o efecto externo provoca rollback automático · comprobado: 2026-10-29

Partida: `1c4a1db97fb43ba0ad7d711638aad1fdc30cffeb1e859b790214770fe8bb3e13` · propuesta: `0db0cad96e51ce98ac95e28e5f6af4025ad6b6cd588f7336c9f519afc8432e8d`

## MAN-GSI-P15-017

Decisión: pending_review · acción: revise.

Motivo: Conservar ASP.NET Core y clave D; requisitos de API HTTP y despliegue multiplataforma que distinguen líneas sin imponer un estilo único de API.

### Antes

Para una API HTTP nueva en .NET, ¿qué tecnología encaja mejor como base general?

- A. ASP clásico.
- B. Windows Forms.
- C. WCF como única opción obligatoria.
- D. ASP.NET Core. **(correcta)**

Explicación: ASP.NET Core. ASP.NET Core es el framework web actual para APIs y aplicaciones HTTP.

### Propuesta

Un proyecto nuevo usa .NET moderno y debe ofrecer una API HTTP en Windows y Linux. ¿Qué framework web encaja como base general?

- A. ASP.NET Web API 2.
- B. ASP.NET Web Forms.
- C. WCF de .NET Framework.
- D. ASP.NET Core. **(correcta)**

Explicación: ASP.NET Core ofrece el marco web de .NET moderno para construir APIs HTTP y admite despliegue en sistemas compatibles como Windows y Linux. Tanto Minimal APIs como controladores son opciones válidas según el diseño. Las tecnologías citadas de .NET Framework pertenecen a otra línea de plataforma; no se debe trasladar su configuración a ASP.NET Core como si fueran el mismo producto.

- Error A: ASP.NET Web API 2 corresponde al entorno ASP.NET de .NET Framework, no a la base multiplataforma de .NET moderno solicitada.
- Error B: Web Forms es un modelo de páginas del ASP.NET de .NET Framework; no es el marco pedido para esta API en Windows y Linux.
- Error C: WCF de .NET Framework no es la base web multiplataforma de ASP.NET Core; tener soporte de servicios no identifica el framework solicitado.

- [Microsoft Learn: APIs overview, ASP.NET Core 10](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/apis?view=aspnetcore-10.0) · Introducción; Minimal APIs y Controller-based APIs como vías de construir APIs HTTP · versión: Vista aspnetcore-10.0 leída el 29-10-2026. Ambas vías son válidas; no se enseña una obligación universal de Minimal APIs · comprobado: 2026-10-29
- [Microsoft Learn: .NET vs .NET Framework for server apps](https://learn.microsoft.com/en-us/dotnet/standard/choosing-core-framework-server) · Introducción; Choose .NET; Choose .NET Framework: evolución, multiplataforma y compatibilidad heredada · versión: Página pública leída el 29-10-2026; identifica .NET 10 como versión actual en su cuerpo. No se interpreta como fin de soporte de todo .NET Framework · comprobado: 2026-10-29
- [Microsoft Learn: .NET glossary](https://learn.microsoft.com/en-us/dotnet/standard/glossary) · BCL; .NET; .NET implementation; .NET Standard; ASP.NET Core · versión: Página pública leída el 29-10-2026. Bibliotecas, implementación, marco web y contrato de APIs son categorías distintas; no se infiere portabilidad universal de cada API · comprobado: 2026-10-29

Partida: `c9de8a4e6330faddbb84eab62a88d8bfb3d2ae9e41aebf383f3704d81ced654a` · propuesta: `86a8832ac2528bf7c20c7e7fc2e05c49938368cf91bf66cd44758b42163c8b56`

## MAN-GSI-P15-057

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y alternativas y clave D; explicar los tres comandos próximos y el alcance de un resultado de test.

### Antes

¿Qué comando está orientado específicamente a ejecutar la suite de pruebas de un proyecto?

- A. \`dotnet nuget push\`.
- B. \`dotnet pack\`.
- C. \`dotnet clean\`.
- D. \`dotnet test\`. **(correcta)**

Explicación: \`dotnet test\`. \`dotnet test\` integra la ejecución de proyectos de prueba compatibles.

### Propuesta

¿Qué comando está orientado específicamente a ejecutar la suite de pruebas de un proyecto?

- A. \`dotnet nuget push\`.
- B. \`dotnet pack\`.
- C. \`dotnet clean\`.
- D. \`dotnet test\`. **(correcta)**

Explicación: dotnet test es el comando de pruebas: coordina la construcción necesaria y ejecuta pruebas con un runner compatible. En el SDK 10 puede usarse VSTest o Microsoft Testing Platform según configuración y soporte; los detalles y opciones dependen del runner. Un verde solo informa de las pruebas efectivamente descubiertas y ejecutadas, no de escenarios ausentes o calidad editorial.

- Error A: dotnet nuget push envía un paquete a un origen de paquetes; no es el comando para ejecutar la suite de pruebas.
- Error B: dotnet pack genera paquetes para distribución; empaquetar no equivale a ejecutar los tests.
- Error C: dotnet clean limpia salidas de construcción; no descubre y ejecuta la suite.

- [Microsoft Learn: dotnet test](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-test) · Name; Description; Choose a test runner: VSTest y Microsoft Testing Platform · versión: Página pública leída el 29-10-2026. Selección de runner en SDK 10; las novedades de .NET 11 Preview se distinguen de la base estable y no se ejecutan comandos · comprobado: 2026-10-29
- [Microsoft Learn: .NET CLI overview](https://learn.microsoft.com/en-us/dotnet/core/tools/) · Command structure; Driver; Command y comandos del SDK: build, run, test y publish · versión: Documentación pública leída el 29-10-2026. Distingue ejecutar una DLL dependiente del framework de invocar comandos que requieren el SDK · comprobado: 2026-10-29

Partida: `484976073295caa6ec81257ae0f20d30843ebe65eb940e061f148f24fca5c38a` · propuesta: `79c9f8109c10d787c86eb69b631f8ec697b3d53384b5b9a093c7528da5f57bad`

## MAN-GSI-P15-072

Decisión: pending_review · acción: revise.

Motivo: Conservar Transient/Scoped/Singleton y clave C; microcaso que evalúa su correspondencia con resolución, petición y contenedor.

### Antes

¿Qué ciclos de vida ofrece típicamente el contenedor DI de ASP.NET Core?

- A. GET, POST y DELETE.
- B. Read, Write y Execute.
- C. Transient, Scoped y Singleton. **(correcta)**
- D. Local, Remote y Hybrid.

Explicación: Transient, Scoped y Singleton. Los lifetimes definen cuántas instancias se crean y cuánto viven.

### Propuesta

En una API ASP.NET Core, X necesita instancia nueva por resolución, Y una compartida dentro de cada petición y Z una durante la vida del contenedor. ¿Qué asignación de ciclos de vida corresponde?

- A. X: Scoped; Y: Transient; Z: Singleton.
- B. X: Singleton; Y: Scoped; Z: Transient.
- C. X: Transient; Y: Scoped; Z: Singleton. **(correcta)**
- D. X: Transient; Y: Singleton; Z: Scoped.

Explicación: Transient crea una instancia por resolución; Scoped reutiliza una dentro de un ámbito; Singleton mantiene una por contenedor. En una API ASP.NET Core el ámbito habitual es la petición, como indica el caso. También pueden crearse scopes explícitos. Singleton no significa una instancia universal por máquina ni hace seguro compartir un servicio Scoped sin respetar su ámbito.

- Error A: Intercambia las dos primeras duraciones: X necesita instancia por resolución y Y compartir una dentro de la petición.
- Error B: Asigna a X la vida del contenedor y a Z una instancia por resolución, al revés de sus requisitos.
- Error D: Mantiene X, pero intercambia Y y Z: compartir Y entre peticiones y limitar Z a un scope no cumple el caso.

- [Microsoft Learn: Service lifetimes](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection/service-lifetimes) · Transient; Scoped; Singleton: resolución, ámbito y contenedor; scopes implícitos/ explícitos · versión: Página pública leída el 29-10-2026, localizada tras redirección del artículo general de DI. Por petición es el ámbito habitual en ASP.NET Core, no definición universal de scope · comprobado: 2026-10-29

Partida: `173d0e8afe7eafcb4c03ea8447b2547d8af51587a9315d769e250048b7ecad7a` · propuesta: `4277937c6c355af91ef4bc2fa8e307e435a568fa83d7150a65c8104d153c1e26`

## MAN-GSI-P15-001

Decisión: pending_review · acción: revise.

Motivo: Conservar .NET moderno y clave A; alternativas próximas de producto/contrato y fecha de soporte explícita en el respaldo, sin equiparar Framework con abandono.

### Antes

En el ecosistema actual de Microsoft, ¿qué implementación es la principal para nuevo desarrollo multiplataforma?

- A. .NET moderno (.NET 5 y posteriores, actualmente .NET 10 como LTS). **(correcta)**
- B. .NET Framework 4.x como única opción recomendada para nuevos proyectos.
- C. Silverlight.
- D. ASP clásico.

Explicación: .NET moderno (.NET 5 y posteriores, actualmente .NET 10 como LTS). .NET moderno es la línea principal multiplataforma; .NET Framework queda principalmente para aplicaciones heredadas de Windows.

### Propuesta

En el ecosistema Microsoft, ¿qué línea es la principal para nuevo desarrollo de aplicaciones de servidor multiplataforma?

- A. .NET moderno. **(correcta)**
- B. .NET Framework.
- C. .NET Core 3.1.
- D. .NET Standard.

Explicación: La línea .NET moderna, sucesora de .NET Core y denominada .NET 5 y posteriores, concentra la evolución principal para nuevo servidor multiplataforma. A la fecha comprobada, .NET 10 es LTS activa. .NET Framework sigue teniendo soporte y usos de compatibilidad en Windows; no se deduce que todo sistema existente deba migrarse de inmediato ni que cada biblioteca o interfaz de .NET sea portable.

- Error B: .NET Framework conserva compatibilidad de aplicaciones Windows, pero no es la línea principal solicitada para servidor nuevo multiplataforma.
- Error C: .NET Core 3.1 pertenece a la evolución anterior y está fuera de soporte; no representa una base vigente para el nuevo desarrollo planteado.
- Error D: .NET Standard es un contrato de APIs, no una implementación ejecutable del runtime.

- [Microsoft Learn: .NET vs .NET Framework for server apps](https://learn.microsoft.com/en-us/dotnet/standard/choosing-core-framework-server) · Introducción; Choose .NET; Choose .NET Framework: evolución, multiplataforma y compatibilidad heredada · versión: Página pública leída el 29-10-2026; identifica .NET 10 como versión actual en su cuerpo. No se interpreta como fin de soporte de todo .NET Framework · comprobado: 2026-10-29
- [Microsoft: .NET and .NET Core Support Policy](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core) · Supported versions, Go-live releases y soporte LTS/STS; filas .NET 10, .NET 9 y.NET 8 · versión: Actualizada 25-10-2026 según página, consultada el 29-10-2026. .NET 10 LTS activa, fin 14-11-2028; .NET 8 también LTS soportada hasta 10-11-2026; .NET 11 RC no es versión estable publicada · comprobado: 2026-10-29
- [Microsoft Learn: .NET glossary](https://learn.microsoft.com/en-us/dotnet/standard/glossary) · BCL; .NET; .NET implementation; .NET Standard; ASP.NET Core · versión: Página pública leída el 29-10-2026. Bibliotecas, implementación, marco web y contrato de APIs son categorías distintas; no se infiere portabilidad universal de cada API · comprobado: 2026-10-29

Partida: `07a8677352f7b98969ff12dc7125c01684ea0b504e835a11fa1ff134882b84ea` · propuesta: `80ee16ae751d98dcde29f8800e19b2a3a8642efb546be777828c49c3902aa868`

## MAN-GSI-P15-002

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y clave B; alternativas ya comparan ambas líneas. Añadir límites de portabilidad y soporte.

### Antes

¿Cuál es la diferencia más importante entre .NET moderno y .NET Framework?

- A. .NET Framework es la línea multiplataforma actual, mientras .NET moderno se conserva para aplicaciones Windows heredadas.
- B. .NET moderno es multiplataforma y es la línea principal de evolución; .NET Framework está ligado principalmente a Windows y a compatibilidad heredada. **(correcta)**
- C. Ambos nombres corresponden al mismo producto y comparten idénticas plataformas, bibliotecas y política de evolución.
- D. .NET moderno está limitado a Windows y .NET Framework es la variante orientada a Linux, macOS y contenedores.

Explicación: .NET moderno es multiplataforma y es la línea principal de evolución; .NET Framework está ligado principalmente a Windows y a compatibilidad heredada. La confusión entre .NET y .NET Framework es una trampa clásica: son implementaciones distintas y la evolución principal está en .NET moderno.

### Propuesta

¿Cuál es la diferencia más importante entre .NET moderno y .NET Framework?

- A. .NET Framework es la línea multiplataforma actual, mientras .NET moderno se conserva para aplicaciones Windows heredadas.
- B. .NET moderno es multiplataforma y es la línea principal de evolución; .NET Framework está ligado principalmente a Windows y a compatibilidad heredada. **(correcta)**
- C. Ambos nombres corresponden al mismo producto y comparten idénticas plataformas, bibliotecas y política de evolución.
- D. .NET moderno está limitado a Windows y .NET Framework es la variante orientada a Linux, macOS y contenedores.

Explicación: .NET moderno es la línea de evolución principal y admite varios sistemas operativos; .NET Framework se orienta a Windows y a la compatibilidad de aplicaciones existentes. Son implementaciones distintas con APIs y modelos que pueden solaparse. Esto no implica que cualquier aplicación .NET moderna sea portable sin revisar su UI, dependencias y APIs del sistema, ni que Framework haya perdido todo soporte.

- Error A: Invierte los papeles: la línea moderna es la de evolución multiplataforma, mientras Framework permanece ligada a Windows.
- Error C: Compartir conceptos o algunas APIs no convierte ambas líneas en el mismo producto ni iguala su compatibilidad y evolución.
- Error D: También invierte plataformas: .NET moderno admite Linux y macOS además de Windows; Framework no es la variante general para esos sistemas.

- [Microsoft Learn: .NET vs .NET Framework for server apps](https://learn.microsoft.com/en-us/dotnet/standard/choosing-core-framework-server) · Introducción; Choose .NET; Choose .NET Framework: evolución, multiplataforma y compatibilidad heredada · versión: Página pública leída el 29-10-2026; identifica .NET 10 como versión actual en su cuerpo. No se interpreta como fin de soporte de todo .NET Framework · comprobado: 2026-10-29
- [Microsoft Learn: Platform compatibility analyzer](https://learn.microsoft.com/en-us/dotnet/standard/analyzers/platform-compat-analyzer) · Introducción; SupportedOSPlatform/UnsupportedOSPlatform; diagnósticos por llamadas a APIs específicas y alternativas · versión: Página pública leída el 29-10-2026. La plataforma no abstrae todo el SO; un RID o publicación autocontenida no transforma APIs exclusivas en portables · comprobado: 2026-10-29

Partida: `831118fde0075d8812836c0d54b8f10e0a365504805a8d475aec67d1a18ebe35` · propuesta: `0638f58fa0c12d202bac231d4b0263ae2078ebdcf20f545910c34788d5ae452b`

## MAN-GSI-P15-003

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación de .NET 10 LTS y clave A; fecha exacta y criterio más reciente para no negar la coexistencia de otra LTS soportada.

### Antes

A fecha de 2026, ¿qué versión se considera LTS activa y de referencia en los apuntes V2.1?

- A. .NET 10. **(correcta)**
- B. .NET 7.
- C. .NET 6.
- D. .NET Framework 4.8.

Explicación: .NET 10. .NET 10 es LTS y Microsoft la mantiene soportada hasta noviembre de 2028.

### Propuesta

A 29 de octubre de 2026, ¿cuál de estas versiones es la LTS estable más reciente de la línea .NET moderna ya publicada?

- A. .NET 10. **(correcta)**
- B. .NET 9.
- C. .NET 8.
- D. .NET 7.

Explicación: A 29-10-2026, la versión estable LTS más reciente entre las opciones es .NET 10, publicada el 11-11-2025 y con soporte hasta 14-11-2028 según la política consultada. .NET 8 también es LTS y sigue soportada hasta 10-11-2026, pero es anterior. Las versiones preliminares de .NET 11 no cuentan como versión estable publicada. La fecha evita convertir este dato en una afirmación atemporal.

- Error B: .NET 9 es STS, no LTS, en la tabla de soporte consultada; tampoco es más reciente que .NET 10.
- Error C: .NET 8 sí es LTS soportada en esa fecha, pero no la LTS estable más reciente entre estas opciones.
- Error D: .NET 7 es una versión anterior STS y fuera de soporte; no cumple el criterio preguntado.

- [Microsoft: .NET and .NET Core Support Policy](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core) · Supported versions, Go-live releases y soporte LTS/STS; filas .NET 10, .NET 9 y.NET 8 · versión: Actualizada 25-10-2026 según página, consultada el 29-10-2026. .NET 10 LTS activa, fin 14-11-2028; .NET 8 también LTS soportada hasta 10-11-2026; .NET 11 RC no es versión estable publicada · comprobado: 2026-10-29

Partida: `e6b4ba8a57cfc0faa891005523577e6fe71f82aae70b84aa8834c9ce828fc0b8` · propuesta: `36f0609de618aa91d0381ee881f67ebb73918bc46cf21d660eb47ac9995e3d55`

## MAN-GSI-P15-004

Decisión: pending_review · acción: revise.

Motivo: Conservar CLR y clave D; opciones comparan capas y la explicación distingue servicios de runtime de una obligación universal de JIT.

### Antes

¿Qué componente proporciona el entorno de ejecución administrado en .NET?

- A. Kestrel.
- B. NuGet.
- C. MSBuild.
- D. El CLR (Common Language Runtime). **(correcta)**

Explicación: El CLR (Common Language Runtime). El CLR ejecuta código administrado y aporta servicios como GC, manejo de excepciones, carga de tipos y compilación.

### Propuesta

¿Qué componente proporciona el entorno de ejecución administrado en .NET?

- A. Kestrel, como servidor que atiende conexiones HTTP.
- B. NuGet, como sistema de distribución de paquetes.
- C. MSBuild, como motor de objetivos y tareas de construcción.
- D. CLR, como entorno de ejecución del código administrado. **(correcta)**

Explicación: El CLR es el entorno conceptual que ejecuta código administrado y ofrece servicios como carga y sistema de tipos, excepciones y gestión de memoria. En .NET moderno existen implementaciones y modos de ejecución diferentes. No se debe afirmar que toda aplicación usa JIT: Native AOT compila antes y publica con los componentes de runtime necesarios. Kestrel, NuGet y MSBuild tienen otras responsabilidades.

- Error A: Kestrel se ocupa de atender HTTP dentro del alojamiento web; no es el motor general de ejecución administrada.
- Error B: NuGet distribuye y resuelve paquetes; no proporciona por ese papel el entorno que ejecuta el código administrado.
- Error C: MSBuild organiza la construcción mediante proyectos y tareas; no es el runtime del programa ya construido.

- [Microsoft Learn: Common Language Runtime overview](https://learn.microsoft.com/en-us/dotnet/standard/clr) · Introducción; metadatos, carga, tipos, excepciones y memoria administrada · versión: Página pública leída el 29-10-2026. Visión conceptual del CLR, complementada con Native AOT y recursos no administrados para no generalizar JIT o liberación automática de todo recurso · comprobado: 2026-10-29
- [Microsoft Learn: Native AOT deployment overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; compilación al publicar, ausencia de JIT durante ejecución y destino concreto; bibliotecas de runtime incluidas · versión: Página pública leída el 29-10-2026. Native AOT es un contrapunto a afirmar que todo .NET se interpreta o usa JIT; no se realiza publicación · comprobado: 2026-10-29
- [Microsoft Learn: An introduction to NuGet](https://learn.microsoft.com/en-us/nuget/what-is-nuget) · Introducción y The flow of packages between creators, hosts, and consumers · versión: Página pública leída el 29-10-2026. Formato/herramientas de paquetes públicos o privados; no runtime, motor de construcción o servidor web · comprobado: 2026-10-29
- [Microsoft Learn: MSBuild](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=visualstudio) · Introducción; Tasks; Targets; dotnet build como interfaz sobre MSBuild · versión: Página pública leída el 29-10-2026. Motor de construcción mediante proyectos, propiedades, elementos, tareas y objetivos; no exige Visual Studio · comprobado: 2026-10-29
- [Microsoft Learn: Kestrel web server in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel?view=aspnetcore-10.0) · Introducción: servidor web multiplataforma de ASP.NET Core; solicitudes y conexiones HTTP · versión: Vista aspnetcore-10.0 leída el 29-10-2026. Servidor HTTP distinto del CLR y de herramientas de paquetes o construcción · comprobado: 2026-10-29

Partida: `d72454bcf1a77c3469f318ee49bed733a6ee5613b0899945934d2af4906ead02` · propuesta: `8d0067d0748f07ce2d910928702f1136a7ea8d27b16ea79093434c3183e919d3`

## MAN-GSI-P15-005

Decisión: pending_review · acción: revise.

Motivo: Conservar diferencia SDK/destino y clave C, con las cuatro alternativas originales; caso de consola dependiente del framework que delimita requisitos y modo de publicación.

### Antes

¿Qué incluye normalmente el SDK de .NET que no es necesario en una máquina que solo ejecuta una aplicación publicada adecuadamente?

- A. El runtime y las bibliotecas de ejecución que necesita una aplicación publicada como dependiente del framework.
- B. Los componentes de alojamiento de ASP.NET Core requeridos para servir una aplicación web en el entorno elegido.
- C. Herramientas de compilación, plantillas y CLI de desarrollo. **(correcta)**
- D. Los archivos de configuración y dependencias publicados junto a la aplicación para que el host pueda iniciarla.

Explicación: Herramientas de compilación, plantillas y CLI de desarrollo. El SDK está orientado al desarrollo; el runtime es el subconjunto necesario para ejecutar aplicaciones dependientes del framework.

### Propuesta

Una consola .NET se publica como dependiente del framework. ¿Qué componente del SDK corresponde al desarrollo, en vez de ser un requisito para ejecutarla en un destino preparado?

- A. El runtime y las bibliotecas de ejecución que necesita una aplicación publicada como dependiente del framework.
- B. Los componentes de alojamiento de ASP.NET Core requeridos para servir una aplicación web en el entorno elegido.
- C. Herramientas de compilación, plantillas y CLI de desarrollo. **(correcta)**
- D. Los archivos de configuración y dependencias publicados junto a la aplicación para que el host pueda iniciarla.

Explicación: Las herramientas para compilar, plantillas y comandos de desarrollo pertenecen al SDK. Para limitarse a ejecutar un artefacto publicado no hace falta instalar ese SDK. En una publicación dependiente del framework sí hacen falta un runtime compatible y los demás requisitos de ejecución; una publicación autocontenida incluye su runtime. La ausencia de SDK no elimina dependencias del sistema o de la aplicación.

- Error A: El runtime compatible sí es requisito de una aplicación publicada como dependiente del framework, aunque el SDK no lo sea.
- Error B: El alojamiento web que corresponda es una dependencia de ejecución en aplicaciones ASP.NET Core; no son las herramientas de desarrollo preguntadas.
- Error D: La configuración y las dependencias publicadas forman parte de la ejecución; no equivalen a plantillas y herramientas para desarrollar.

- [Microsoft Learn: .NET application publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/) · Publishing modes: self-contained y framework-dependent; Publishing basics y runtime identifier · versión: Página pública leída el 29-10-2026. Necesidades del destino según modo y plataforma; SDK de desarrollo distinto de runtime y dependencias de ejecución · comprobado: 2026-10-29
- [Microsoft Learn: .NET CLI overview](https://learn.microsoft.com/en-us/dotnet/core/tools/) · Command structure; Driver; Command y comandos del SDK: build, run, test y publish · versión: Documentación pública leída el 29-10-2026. Distingue ejecutar una DLL dependiente del framework de invocar comandos que requieren el SDK · comprobado: 2026-10-29

Partida: `025f53066646e31d5de912fc5b78d80afca7ac37752f1305ad755cc90823a6b0` · propuesta: `5af5de855463304f606bd112ca5cac2369fbbe672090f30c594268b4858d7e91`

## MAN-GSI-P15-006

Decisión: pending_review · acción: revise.

Motivo: Conservar propósito de CLI y clave B; distinguir comandos del SDK, host de DLL, runtime, paquetes y alojamiento.

### Antes

¿Para qué sirve principalmente el comando \`dotnet\`?

- A. Para sustituir al CLR durante la ejecución.
- B. Para compilar, ejecutar, probar, publicar y gestionar proyectos .NET desde la CLI. **(correcta)**
- C. Para actuar como base de datos relacional.
- D. Para reemplazar a Git.

Explicación: Para compilar, ejecutar, probar, publicar y gestionar proyectos .NET desde la CLI. La CLI \`dotnet\` centraliza tareas del ciclo de desarrollo y publicación.

### Propuesta

¿Para qué sirve principalmente el comando \`dotnet\`?

- A. Proporcionar el motor que ejecuta IL y realiza la recolección de basura.
- B. Ofrecer comandos para construir, probar, publicar y ejecutar aplicaciones. **(correcta)**
- C. Sustituir la construcción del proyecto mediante la distribución de paquetes.
- D. Proporcionar el servidor HTTP y el sistema de rutas de la aplicación web.

Explicación: dotnet es el controlador de la CLI: con el SDK permite crear, construir, probar y publicar proyectos, entre otras tareas. También puede iniciar una aplicación dependiente del framework indicando su DLL. Esta segunda función no convierte al controlador en el CLR. Tener solo el runtime no aporta los comandos de desarrollo del SDK ni un servidor web configurado.

- Error A: Los servicios de ejecución administrada los aporta el runtime; dotnet puede iniciarlo, pero no lo sustituye por ser el controlador CLI.
- Error C: Restaurar paquetes es una tarea posible, pero distribuir dependencias no reemplaza los objetivos de construcción.
- Error D: El servidor y las rutas pertenecen al alojamiento y al framework web; no son por sí solos el papel del controlador dotnet.

- [Microsoft Learn: .NET CLI overview](https://learn.microsoft.com/en-us/dotnet/core/tools/) · Command structure; Driver; Command y comandos del SDK: build, run, test y publish · versión: Documentación pública leída el 29-10-2026. Distingue ejecutar una DLL dependiente del framework de invocar comandos que requieren el SDK · comprobado: 2026-10-29
- [Microsoft Learn: Common Language Runtime overview](https://learn.microsoft.com/en-us/dotnet/standard/clr) · Introducción; metadatos, carga, tipos, excepciones y memoria administrada · versión: Página pública leída el 29-10-2026. Visión conceptual del CLR, complementada con Native AOT y recursos no administrados para no generalizar JIT o liberación automática de todo recurso · comprobado: 2026-10-29
- [Microsoft Learn: MSBuild](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=visualstudio) · Introducción; Tasks; Targets; dotnet build como interfaz sobre MSBuild · versión: Página pública leída el 29-10-2026. Motor de construcción mediante proyectos, propiedades, elementos, tareas y objetivos; no exige Visual Studio · comprobado: 2026-10-29

Partida: `63d4e0498ce927272facd0d5877d28f9e0b869c71a021322cf749f5a9854674e` · propuesta: `89d098936b2ff17eca170efcb95bb4b2eb7aa6e3c15b541e1e3c71153bc7a412`

## MAN-GSI-P15-007

Decisión: pending_review · acción: revise.

Motivo: Conservar bibliotecas base y clave A; cuatro capas próximas con forma comparable y límite explícito de portabilidad de APIs.

### Antes

¿Qué representa la BCL en .NET?

- A. La biblioteca base de tipos y APIs comunes que usan las aplicaciones .NET. **(correcta)**
- B. Un servidor web incluido en Windows exclusivamente.
- C. Un formato de bytecode distinto de IL.
- D. Un gestor de paquetes externo.

Explicación: La biblioteca base de tipos y APIs comunes que usan las aplicaciones .NET. La Base Class Library aporta colecciones, E/S, redes, texto, concurrencia y muchas APIs fundamentales.

### Propuesta

¿Qué representa la BCL en .NET?

- A. Bibliotecas base de tipos y APIs comunes para las aplicaciones .NET. **(correcta)**
- B. Un entorno que carga tipos y ejecuta código con servicios de memoria.
- C. Un motor que procesa proyectos, objetivos y tareas de construcción.
- D. Un sistema que distribuye paquetes con sus versiones y dependencias.

Explicación: La BCL es el conjunto de bibliotecas base de propósito general sobre el que se apoyan aplicaciones y frameworks de mayor nivel. Incluye tipos y APIs comunes, especialmente de los espacios System.\*. Es distinta del runtime que ejecuta código, del motor de construcción y de la distribución de paquetes. Estar en una biblioteca base no hace a cada API compatible con cualquier sistema operativo.

- Error B: La carga y ejecución con servicios de memoria describe el runtime; la BCL aporta bibliotecas y contratos de API.
- Error C: Proyectos, tareas y objetivos describen el motor de construcción, como MSBuild; no las bibliotecas base de ejecución.
- Error D: Versiones y distribución de paquetes corresponden a un sistema como NuGet, no a la definición de BCL.

- [Microsoft Learn: .NET glossary](https://learn.microsoft.com/en-us/dotnet/standard/glossary) · BCL; .NET; .NET implementation; .NET Standard; ASP.NET Core · versión: Página pública leída el 29-10-2026. Bibliotecas, implementación, marco web y contrato de APIs son categorías distintas; no se infiere portabilidad universal de cada API · comprobado: 2026-10-29
- [Microsoft Learn: Common Language Runtime overview](https://learn.microsoft.com/en-us/dotnet/standard/clr) · Introducción; metadatos, carga, tipos, excepciones y memoria administrada · versión: Página pública leída el 29-10-2026. Visión conceptual del CLR, complementada con Native AOT y recursos no administrados para no generalizar JIT o liberación automática de todo recurso · comprobado: 2026-10-29
- [Microsoft Learn: MSBuild](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=visualstudio) · Introducción; Tasks; Targets; dotnet build como interfaz sobre MSBuild · versión: Página pública leída el 29-10-2026. Motor de construcción mediante proyectos, propiedades, elementos, tareas y objetivos; no exige Visual Studio · comprobado: 2026-10-29
- [Microsoft Learn: An introduction to NuGet](https://learn.microsoft.com/en-us/nuget/what-is-nuget) · Introducción y The flow of packages between creators, hosts, and consumers · versión: Página pública leída el 29-10-2026. Formato/herramientas de paquetes públicos o privados; no runtime, motor de construcción o servidor web · comprobado: 2026-10-29
- [Microsoft Learn: Platform compatibility analyzer](https://learn.microsoft.com/en-us/dotnet/standard/analyzers/platform-compat-analyzer) · Introducción; SupportedOSPlatform/UnsupportedOSPlatform; diagnósticos por llamadas a APIs específicas y alternativas · versión: Página pública leída el 29-10-2026. La plataforma no abstrae todo el SO; un RID o publicación autocontenida no transforma APIs exclusivas en portables · comprobado: 2026-10-29

Partida: `ab1e55c967e470bcc6e368e1bc37fb0b985368f58a195e29a5ce17c34abf185a` · propuesta: `c9c00f71898e5eecd2c2930e8d6550978638739ce9a56a0f1a2857b993858f4f`

## MAN-GSI-P15-008

Decisión: pending_review · acción: revise.

Motivo: Conservar servicios del runtime y clave B; caso de cuenta y recurso nativo que separa ejecución, permisos, memoria y liberación de recursos.

### Antes

¿Qué significa que una aplicación .NET ejecute código administrado?

- A. Que todo el código se interpreta línea a línea.
- B. Que el código se ejecuta bajo los servicios del runtime, como GC, sistema de tipos y manejo de excepciones. **(correcta)**
- C. Que el código se ejecuta únicamente con privilegios de administrador.
- D. Que no puede acceder a recursos del sistema operativo.

Explicación: Que el código se ejecuta bajo los servicios del runtime, como GC, sistema de tipos y manejo de excepciones. Managed code describe la relación con el runtime, no los privilegios de la cuenta del proceso.

### Propuesta

Un servicio .NET usa una cuenta sin privilegios elevados y accede a un recurso nativo. ¿Qué expresa que su código sea administrado?

- A. Que el recolector cierra todo recurso nativo al terminar cada llamada.
- B. Que el runtime aporta tipos, excepciones y GC, sin elevar los permisos. **(correcta)**
- C. Que el programa obtiene acceso a recursos del SO sin permisos de la cuenta.
- D. Que sus métodos no llegan a compilarse a código máquina durante su ciclo.

Explicación: Administrado describe la relación del código con servicios de ejecución del runtime, no los privilegios de la cuenta. Puede usar recursos del sistema sujetos a permisos y también interoperar con código nativo. El GC gestiona memoria administrada, pero no libera por sí solo cada recurso nativo: hay contratos como Dispose/SafeHandle. El código puede ejecutarse como código máquina obtenido por JIT o AOT.

- Error A: Seguir la vida de un objeto no implica conocer cómo cerrar su recurso nativo ni hacerlo al final de cada llamada.
- Error C: Los servicios del runtime no conceden acceso que el sistema operativo o la cuenta no autoricen.
- Error D: Administrado no significa interpretado sin código máquina; existen JIT y compilación anticipada, según el modo de ejecución.

- [Microsoft Learn: What is managed code?](https://learn.microsoft.com/en-us/dotnet/standard/managed-code) · Definición y servicios de ejecución; Intermediate Language &amp; execution · versión: Página pública leída el 29-10-2026. Se usa definición y servicios; su exposición de IL/JIT se matiza con Native AOT y no se equipara código administrado a permisos elevados · comprobado: 2026-10-29
- [Microsoft Learn: Common Language Runtime overview](https://learn.microsoft.com/en-us/dotnet/standard/clr) · Introducción; metadatos, carga, tipos, excepciones y memoria administrada · versión: Página pública leída el 29-10-2026. Visión conceptual del CLR, complementada con Native AOT y recursos no administrados para no generalizar JIT o liberación automática de todo recurso · comprobado: 2026-10-29
- [Microsoft Learn: Native AOT deployment overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; compilación al publicar, ausencia de JIT durante ejecución y destino concreto; bibliotecas de runtime incluidas · versión: Página pública leída el 29-10-2026. Native AOT es un contrapunto a afirmar que todo .NET se interpreta o usa JIT; no se realiza publicación · comprobado: 2026-10-29
- [Microsoft Learn: Cleaning up unmanaged resources](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/unmanaged) · Introducción; Dispose, SafeHandle y finalización no determinista · versión: Página pública leída el 29-10-2026. El GC no conoce por sí solo cómo liberar cada recurso nativo; no se confunde memoria administrada con todo recurso del sistema · comprobado: 2026-10-29

Partida: `36a70b52f74209ef43cfafb4dc0293d66937d224ea32f33c9cd6cbf197f3ea59` · propuesta: `66d01556968a200a643956770b78d1d82a7474c5c377f188ede9a5b53eddbef5`

## MAN-GSI-P15-009

Decisión: pending_review · acción: revise.

Motivo: Conservar portabilidad condicionada de .NET y clave A; caso de API específica que distingue runtime multiplataforma, RID, publicación e IDE.

### Antes

¿Qué afirmación sobre la portabilidad de .NET moderno es correcta?

- A. Puede ejecutarse en varios sistemas operativos compatibles, como Windows, Linux y macOS. **(correcta)**
- B. Su ejecución multiplataforma depende de alojarse dentro de IIS.
- C. El runtime moderno está disponible únicamente para Windows Server.
- D. La portabilidad exige compilar el proyecto con Visual Studio.

Explicación: Puede ejecutarse en varios sistemas operativos compatibles, como Windows, Linux y macOS. La portabilidad depende del runtime y de las APIs usadas, no del IDE.

### Propuesta

Una aplicación .NET moderna depende de una API documentada como exclusiva de Windows y debe desplegarse en Linux. ¿Qué exige su portabilidad?

- A. Revisar APIs y dependencias compatibles con el sistema operativo de destino. **(correcta)**
- B. Publicar autocontenida la aplicación para convertir las APIs Windows en portables.
- C. Cambiar de Visual Studio a otro IDE para que las llamadas se adapten a Linux.
- D. Seleccionar un RID Linux para sustituir automáticamente las APIs incompatibles.

Explicación: .NET moderno permite ejecutar en sistemas compatibles, pero no abstrae cualquier API o dependencia específica del sistema operativo. Deben revisarse y, cuando proceda, sustituirse o aislarse las llamadas no compatibles. Un RID elige un destino y una publicación autocontenida incorpora el runtime; ninguna de esas opciones convierte por sí sola una API exclusiva de Windows en una API para Linux.

- Error B: Incluir el runtime no reescribe APIs o bibliotecas que dependan de Windows; la compatibilidad del código debe revisarse.
- Error C: El IDE no cambia el contrato de las APIs ni aporta una traducción automática de llamadas del sistema operativo.
- Error D: El identificador de runtime orienta la publicación al destino; no es una capa de compatibilidad que sustituya APIs no soportadas.

- [Microsoft Learn: Platform compatibility analyzer](https://learn.microsoft.com/en-us/dotnet/standard/analyzers/platform-compat-analyzer) · Introducción; SupportedOSPlatform/UnsupportedOSPlatform; diagnósticos por llamadas a APIs específicas y alternativas · versión: Página pública leída el 29-10-2026. La plataforma no abstrae todo el SO; un RID o publicación autocontenida no transforma APIs exclusivas en portables · comprobado: 2026-10-29
- [Microsoft Learn: .NET application publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/) · Publishing modes: self-contained y framework-dependent; Publishing basics y runtime identifier · versión: Página pública leída el 29-10-2026. Necesidades del destino según modo y plataforma; SDK de desarrollo distinto de runtime y dependencias de ejecución · comprobado: 2026-10-29
- [Microsoft Learn: .NET vs .NET Framework for server apps](https://learn.microsoft.com/en-us/dotnet/standard/choosing-core-framework-server) · Introducción; Choose .NET; Choose .NET Framework: evolución, multiplataforma y compatibilidad heredada · versión: Página pública leída el 29-10-2026; identifica .NET 10 como versión actual en su cuerpo. No se interpreta como fin de soporte de todo .NET Framework · comprobado: 2026-10-29

Partida: `089de0c8f860ba4e9113d95ec33c3144326fe21082107168d8361c6493837ff5` · propuesta: `e1b780020013cbd63dcbc575923826de52ba9c61b27f63e71bdea8ef3ec06f28`

## MAN-GSI-P15-010

Decisión: pending_review · acción: revise.

Motivo: Conservar gestión de paquetes y clave A; distractores de capas vecinas con forma comparable y distinción entre repositorio, paquete y ejecución.

### Antes

¿Cuál es la función principal de NuGet?

- A. Gestionar paquetes y dependencias del ecosistema .NET. **(correcta)**
- B. Servir peticiones HTTP.
- C. Administrar usuarios de ASP.NET Core.
- D. Compilar IL a código máquina durante la ejecución.

Explicación: Gestionar paquetes y dependencias del ecosistema .NET. NuGet es el gestor de paquetes; no debe confundirse con MSBuild, CLR o ASP.NET Core.

### Propuesta

¿Cuál es la función principal de NuGet?

- A. Gestionar paquetes y dependencias para compartir y consumir código .NET. **(correcta)**
- B. Ejecutar código administrado y ofrecer tipos, excepciones y gestión de memoria.
- C. Construir artefactos mediante proyectos, objetivos y tareas de compilación.
- D. Atender conexiones HTTP y ejecutar la canalización del servidor web.

Explicación: NuGet define el formato y las herramientas para crear, publicar, alojar y consumir paquetes del ecosistema .NET. Permite utilizar orígenes públicos o privados y gestionar dependencias y versiones. Un paquete puede contener bibliotecas y otros recursos; compartirlo no lo convierte en el runtime, el motor de construcción o el servidor HTTP que lo utilizará.

- Error B: Los servicios de ejecución administrada son responsabilidad del runtime, no del mecanismo de paquetes.
- Error C: La construcción mediante proyectos y objetivos corresponde a un motor como MSBuild; NuGet puede integrarse en el proceso sin sustituirlo.
- Error D: Atender HTTP y su canalización corresponde al servidor/framework web; distribuir un paquete que contenga esos componentes no es servir las peticiones.

- [Microsoft Learn: An introduction to NuGet](https://learn.microsoft.com/en-us/nuget/what-is-nuget) · Introducción y The flow of packages between creators, hosts, and consumers · versión: Página pública leída el 29-10-2026. Formato/herramientas de paquetes públicos o privados; no runtime, motor de construcción o servidor web · comprobado: 2026-10-29
- [Microsoft Learn: Common Language Runtime overview](https://learn.microsoft.com/en-us/dotnet/standard/clr) · Introducción; metadatos, carga, tipos, excepciones y memoria administrada · versión: Página pública leída el 29-10-2026. Visión conceptual del CLR, complementada con Native AOT y recursos no administrados para no generalizar JIT o liberación automática de todo recurso · comprobado: 2026-10-29
- [Microsoft Learn: MSBuild](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=visualstudio) · Introducción; Tasks; Targets; dotnet build como interfaz sobre MSBuild · versión: Página pública leída el 29-10-2026. Motor de construcción mediante proyectos, propiedades, elementos, tareas y objetivos; no exige Visual Studio · comprobado: 2026-10-29
- [Microsoft Learn: APIs overview, ASP.NET Core 10](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/apis?view=aspnetcore-10.0) · Introducción; Minimal APIs y Controller-based APIs como vías de construir APIs HTTP · versión: Vista aspnetcore-10.0 leída el 29-10-2026. Ambas vías son válidas; no se enseña una obligación universal de Minimal APIs · comprobado: 2026-10-29

Partida: `419555f4aabf5e609051a39d2a58eabeae44164dbbe4d9ea6b1810c197fe7713` · propuesta: `be841ede857161823d113a23a5ea7dff6eac077ac9bfe3844c1ae5ccb4458910`

## MAN-GSI-P15-011

Decisión: pending_review · acción: revise.

Motivo: Conservar motor de construcción y clave D; tres responsabilidades reales del ecosistema frente a distractores extremos y precisión tareas/compilador.

### Antes

¿Cuál es la función principal de MSBuild?

- A. Gestionar la autenticación y autorización de los usuarios, emitir sus tokens y decidir a qué recursos puede acceder cada identidad.
- B. Alojar directamente aplicaciones web en producción, aceptar las conexiones HTTP y mantener sus procesos disponibles como servidor.
- C. Ser el ORM oficial de .NET y traducir las consultas de objetos a SQL sin utilizar proyectos, objetivos ni tareas de compilación.
- D. Orquestar el proceso de compilación a partir de proyectos y objetivos de build. **(correcta)**

Explicación: Orquestar el proceso de compilación a partir de proyectos y objetivos de build. MSBuild es el motor de construcción utilizado por los proyectos .NET.

### Propuesta

¿Cuál es la función principal de MSBuild?

- A. Resolver y distribuir paquetes para añadir bibliotecas y dependencias.
- B. Ejecutar la aplicación y proporcionar tipos, excepciones y memoria administrada.
- C. Atender conexiones HTTP y enrutar las peticiones entre componentes web.
- D. Orquestar la construcción mediante proyectos, objetivos y tareas. **(correcta)**

Explicación: MSBuild es el motor de construcción que procesa proyectos, sus propiedades y elementos y ejecuta objetivos compuestos por tareas. dotnet build lo utiliza para los proyectos .NET pertinentes; Visual Studio también lo integra, pero no es requisito tener el IDE. Una tarea puede invocar un compilador u otra herramienta: MSBuild no es por sí mismo el runtime, un ORM o un servidor web.

- Error A: Resolver y distribuir paquetes describe el papel de NuGet; la restauración puede integrarse con el build sin identificar ambas herramientas.
- Error B: Tipos, excepciones y memoria durante la ejecución son servicios del runtime; el motor de construcción prepara artefactos.
- Error C: Las conexiones y el enrutamiento web corresponden al alojamiento/framework, no al propósito de los objetivos de MSBuild.

- [Microsoft Learn: MSBuild](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=visualstudio) · Introducción; Tasks; Targets; dotnet build como interfaz sobre MSBuild · versión: Página pública leída el 29-10-2026. Motor de construcción mediante proyectos, propiedades, elementos, tareas y objetivos; no exige Visual Studio · comprobado: 2026-10-29
- [Microsoft Learn: An introduction to NuGet](https://learn.microsoft.com/en-us/nuget/what-is-nuget) · Introducción y The flow of packages between creators, hosts, and consumers · versión: Página pública leída el 29-10-2026. Formato/herramientas de paquetes públicos o privados; no runtime, motor de construcción o servidor web · comprobado: 2026-10-29
- [Microsoft Learn: Common Language Runtime overview](https://learn.microsoft.com/en-us/dotnet/standard/clr) · Introducción; metadatos, carga, tipos, excepciones y memoria administrada · versión: Página pública leída el 29-10-2026. Visión conceptual del CLR, complementada con Native AOT y recursos no administrados para no generalizar JIT o liberación automática de todo recurso · comprobado: 2026-10-29
- [Microsoft Learn: APIs overview, ASP.NET Core 10](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/apis?view=aspnetcore-10.0) · Introducción; Minimal APIs y Controller-based APIs como vías de construir APIs HTTP · versión: Vista aspnetcore-10.0 leída el 29-10-2026. Ambas vías son válidas; no se enseña una obligación universal de Minimal APIs · comprobado: 2026-10-29

Partida: `423eb51a473b79dd43cce373342c5155f02ee04cc29dedd88d8a641600d415e4` · propuesta: `053bfe5d2a22e5b0959fe25a55234c50a42dab7bda43222aee2c3a31798b0f32`
