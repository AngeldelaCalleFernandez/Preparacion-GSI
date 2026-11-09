# GSI-EDITORIAL-063 — revisión propuesta

Preparado: 2026-10-30. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `c08d46167b08746c1ec192a888b2e3c3caf2c9afb44cc270b2425843c7a93a6e`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P15-054

Decisión: pending_review · acción: revise.

Motivo: Conservar paquetes frente a motor de construcción y clave B; alternativas de capas próximas y explicación de la integración.

### Antes

¿Cuál es la relación correcta entre NuGet y MSBuild?

- A. Son dos nombres para la misma herramienta.
- B. NuGet gestiona paquetes; MSBuild ejecuta el proceso de construcción del proyecto. **(correcta)**
- C. NuGet aloja ASP.NET Core y MSBuild autentica usuarios.
- D. NuGet es un compilador JIT y MSBuild un ORM.

Explicación: NuGet gestiona paquetes; MSBuild ejecuta el proceso de construcción del proyecto. Separar gestión de dependencias y build evita una confusión frecuente.

### Propuesta

¿Cuál es la relación correcta entre NuGet y MSBuild?

- A. NuGet ejecuta los targets de construcción; MSBuild mantiene el catálogo de paquetes.
- B. NuGet gestiona paquetes; MSBuild orquesta la construcción definida por el proyecto. **(correcta)**
- C. NuGet compila C\# a código nativo; MSBuild ejecuta los métodos de los ensamblados.
- D. Ambos son interfaces equivalentes del mismo motor y producen el mismo tipo de artefacto.

Explicación: NuGet aporta formato y herramientas para crear, distribuir y consumir paquetes. MSBuild interpreta proyectos, propiedades y tareas para orquestar la construcción. Cooperan: la restauración puede integrarse en el proceso de build. Eso no convierte las herramientas en sinónimos ni hace de MSBuild el runtime que ejecuta la aplicación.

- Error A: Invierte las responsabilidades: los targets pertenecen al motor MSBuild; el catálogo y consumo de paquetes corresponden al ecosistema NuGet.
- Error C: NuGet no es el compilador de C\# y MSBuild no es el CLR que ejecuta los métodos; mezcla paquetes, compilación y runtime.
- Error D: Que colaboren o se invoquen desde la misma CLI no elimina sus funciones distintas ni iguala sus artefactos.

- [Microsoft: Introduction to NuGet](https://learn.microsoft.com/en-us/nuget/what-is-nuget) · Introducción; flujo de paquetes entre autores, hosts y consumidores; formato nupkg · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: MSBuild](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=visualstudio) · Introducción; XML, Tasks y Targets; independencia de Visual Studio · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: dotnet build](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-build) · Description; Implicit restore; MSBuild; salidas y diferencia con publicación · versión: SDK6+ según cabecera, leído el 30-10-2026. Algunas salidas build pueden desplegarse en casos simples; no se afirma que sean siempre inutilizables o idénticas a publish. · comprobado: 2026-10-30

Partida: `8adaab5a0455c9aa272dc0874409582671c8f6b6f8969d9d0fdbd6037effb688` · propuesta: `ee0209bf21ca23fbb68fc622db965d0932e5df5719147d43a58e29891386ff80`

## MAN-GSI-P15-055

Decisión: pending_review · acción: revise.

Motivo: Conservar csproj y clave C; comparar archivos reales de proyecto, activos, runtime y lanzamiento.

### Antes

¿Qué contiene normalmente un archivo \`.csproj\` moderno?

- A. El almacén interno con todas las sesiones activas de Kestrel, serializadas para recuperarlas cuando se reinicia el servidor web.
- B. El código máquina definitivo producido por el compilador JIT para todos los entornos y arquitecturas de despliegue del proyecto.
- C. La definición del proyecto, TFM, propiedades y referencias, entre otros elementos de build. **(correcta)**
- D. Las credenciales personales de los usuarios, incorporadas al proyecto para que estén disponibles durante la compilación y publicación.

Explicación: La definición del proyecto, TFM, propiedades y referencias, entre otros elementos de build. El proyecto SDK-style se describe en XML y guía a MSBuild.

### Propuesta

¿Qué contiene normalmente un archivo \`.csproj\` moderno?

- A. Un JSON con la resolución de paquetes y activos necesarios para que pueda construirse el proyecto.
- B. Un JSON con el framework compartido y otras opciones que el host necesita para ejecutar la aplicación.
- C. Un XML con definición del proyecto, framework objetivo, propiedades y referencias de construcción. **(correcta)**
- D. Un JSON con perfiles y parámetros para iniciar la aplicación desde las herramientas de desarrollo.

Explicación: Un csproj SDK-style es XML en formato MSBuild y declara el proyecto mediante propiedades y elementos, con importaciones implícitas del SDK. Puede fijar el TFM y referencias sin enumerar a mano cada fuente. No es el archivo de activos de NuGet, la configuración del runtime o un perfil de lanzamiento.

- Error A: La resolución de activos se refleja en project.assets.json durante restore; no define el documento XML csproj.
- Error B: El runtimeconfig.json de una aplicación describe aspectos del runtime esperado; no sustituye la definición de construcción del proyecto.
- Error D: Los perfiles de lanzamiento, por ejemplo launchSettings.json, configuran el arranque de desarrollo; no son la estructura XML del proyecto.

- [Microsoft: Project SDK overview](https://learn.microsoft.com/en-us/dotnet/core/project-sdk/overview) · SDK-style; Project files; importaciones implícitas, propiedades y elementos · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: dotnet build](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-build) · Description; Implicit restore; MSBuild; salidas y diferencia con publicación · versión: SDK6+ según cabecera, leído el 30-10-2026. Algunas salidas build pueden desplegarse en casos simples; no se afirma que sean siempre inutilizables o idénticas a publish. · comprobado: 2026-10-30
- [Microsoft: dotnet run](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-run) · Description; perfiles de lanzamiento; --no-build y --no-restore · versión: SDK6+ según cabecera, leído el 30-10-2026. Se trata ejecución habitual de proyecto, sin trasladar novedades de aplicaciones basadas en archivos a todos los SDK. · comprobado: 2026-10-30

Partida: `28d6b8fda000c49128017a0bc348ec85d4c34dd0fa719fdf74d7cae1b6e8c6be` · propuesta: `b9e13b98f677533d5e46c8f9943a30134f1c5584eec9d2aa19b40bba3f3ddc2a`

## MAN-GSI-P15-056

Decisión: pending_review · acción: revise.

Motivo: Conservar build frente a publish y clave A; caso de preparación de una API web sin afirmar que toda salida build sea inutilizable.

### Antes

¿Qué diferencia práctica hay entre \`dotnet build\` y \`dotnet publish\`?

- A. \`build\` compila; \`publish\` prepara un conjunto desplegable con los artefactos necesarios según la modalidad elegida. **(correcta)**
- B. Instalar el sistema operativo de destino y configurar sus servicios antes de compilar el código fuente y resolver las referencias del proyecto.
- C. Ejecutar únicamente los tests con \`publish\`, mientras \`build\` carga los binarios resultantes en un repositorio público de Internet.
- D. Ser comandos exactamente equivalentes que producen siempre los mismos archivos, sin diferencias de finalidad, dependencias ni despliegue.

Explicación: \`build\` compila; \`publish\` prepara un conjunto desplegable con los artefactos necesarios según la modalidad elegida. Publicar añade decisiones de distribución que no forman parte de una compilación normal.

### Propuesta

Tras compilar una API web .NET, el equipo necesita preparar los artefactos para su despliegue. ¿Qué diferencia práctica hay entre dotnet build y dotnet publish?

- A. Build compila el proyecto; publish prepara los archivos distribuibles según el despliegue elegido. **(correcta)**
- B. Publish solo ejecuta pruebas; build crea por sí mismo el paquete final de despliegue del servidor.
- C. Publish transfiere los archivos al servidor; build los conserva únicamente en memoria del compilador.
- D. Los dos comandos tienen igual finalidad y producen el mismo conjunto de archivos en cualquier proyecto.

Explicación: Build construye el proyecto y sus dependencias; publish prepara en una carpeta el conjunto de despliegue según sus opciones, incluidos activos y configuración necesarios. Publish normalmente puede compilar y restaurar, salvo que se indiquen opciones como --no-build. Algunas salidas build son desplegables en casos simples; no se deduce equivalencia general. Preparar la carpeta tampoco significa enviarla automáticamente al servidor.

- Error B: Ejecutar tests corresponde a test y su runner; publish no se limita a pruebas ni build garantiza por sí mismo el conjunto de publicación de una aplicación web.
- Error C: Publish prepara archivos en una carpeta y build también escribe salidas; ninguno tiene la finalidad descrita de transferencia automática o salida solo en memoria.
- Error D: Web projects y modalidades de publicación pueden necesitar lógica y activos adicionales; los objetivos no son universalmente equivalentes.

- [Microsoft: dotnet build](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-build) · Description; Implicit restore; MSBuild; salidas y diferencia con publicación · versión: SDK6+ según cabecera, leído el 30-10-2026. Algunas salidas build pueden desplegarse en casos simples; no se afirma que sean siempre inutilizables o idénticas a publish. · comprobado: 2026-10-30
- [Microsoft: dotnet publish](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-publish) · Name; Description; carpeta preparada para despliegue; --no-build · versión: SDK6+ según cabecera, leído el 30-10-2026. Preparar archivos no equivale a enviarlos automáticamente a producción; compilación y restauración dependen de opciones y activos existentes. · comprobado: 2026-10-30

Partida: `994a88459f00eddb85617537904e22b3c424653b4ebd72d48365fb945b26e7b1` · propuesta: `4ddbb24abb4fab9172c8771237419590a6e595f48a2f79d0f0db82c44dd62a0d`

## MAN-GSI-P15-058

Decisión: pending_review · acción: revise.

Motivo: Conservar ejecución de desarrollo y clave A; comparar comandos reales y matizar las opciones de construcción.

### Antes

¿Qué hace habitualmente \`dotnet run\` durante desarrollo?

- A. Compila si es necesario y ejecuta el proyecto seleccionado. **(correcta)**
- B. Publica automáticamente en producción.
- C. Ejecuta únicamente migraciones de base de datos.
- D. Crea una imagen Docker obligatoriamente.

Explicación: Compila si es necesario y ejecuta el proyecto seleccionado. Es un atajo de desarrollo para iniciar un proyecto desde la CLI.

### Propuesta

¿Qué hace habitualmente \`dotnet run\` durante desarrollo?

- A. Construye lo necesario y ejecuta el proyecto de desarrollo seleccionado. **(correcta)**
- B. Construye el proyecto y deja sus salidas sin iniciar la aplicación.
- C. Prepara la carpeta de publicación y los activos para un entorno de destino.
- D. Descubre y ejecuta los casos de prueba con el runner del proyecto.

Explicación: En el uso habitual sobre un proyecto, dotnet run coordina la construcción necesaria y lo inicia, aplicando opciones o perfiles de lanzamiento. No es un despliegue remoto o una ejecución de tests. Las opciones cambian el trabajo: --no-build evita construir e implica --no-restore; deben existir salidas adecuadas. No es un comando de ejecución de binarios publicados para producción.

- Error B: Construir sin iniciar corresponde al objetivo habitual de build; omite la ejecución que caracteriza a run.
- Error C: Preparar el conjunto de publicación corresponde a publish, distinto del atajo de ejecución de desarrollo.
- Error D: Descubrir y ejecutar pruebas corresponde a test; run inicia el proyecto, no sustituye a su runner de pruebas.

- [Microsoft: dotnet run](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-run) · Description; perfiles de lanzamiento; --no-build y --no-restore · versión: SDK6+ según cabecera, leído el 30-10-2026. Se trata ejecución habitual de proyecto, sin trasladar novedades de aplicaciones basadas en archivos a todos los SDK. · comprobado: 2026-10-30
- [Microsoft: dotnet build](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-build) · Description; Implicit restore; MSBuild; salidas y diferencia con publicación · versión: SDK6+ según cabecera, leído el 30-10-2026. Algunas salidas build pueden desplegarse en casos simples; no se afirma que sean siempre inutilizables o idénticas a publish. · comprobado: 2026-10-30
- [Microsoft: dotnet publish](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-publish) · Name; Description; carpeta preparada para despliegue; --no-build · versión: SDK6+ según cabecera, leído el 30-10-2026. Preparar archivos no equivale a enviarlos automáticamente a producción; compilación y restauración dependen de opciones y activos existentes. · comprobado: 2026-10-30

Partida: `f6c5316e1c0d5803c3da6af70efcc5897e0ec89cd9c70e408df403d816b3a7c8` · propuesta: `5e32a2cb6e8cadd1b0ccf3df8ea6cbc0b191e1be05d7ef12e03fa89a58309d40`

## MAN-GSI-P15-059

Decisión: pending_review · acción: revise.

Motivo: Conservar diagnóstico de aplicaciones en ejecución y clave C; caso de latencia sin prometer reparación o certificación automática.

### Antes

¿Para qué sirven herramientas como \`dotnet-counters\` o \`dotnet-trace\`?

- A. Sustituir al sistema de control de versiones mediante la captura continua de todos los cambios efectuados en el código fuente del proyecto.
- B. Gestionar las zonas, registros y resoluciones DNS utilizadas por la aplicación mientras se ejecuta en cualquier entorno de alojamiento.
- C. Para diagnóstico y observación del comportamiento de aplicaciones .NET en ejecución. **(correcta)**
- D. Crear y migrar automáticamente esquemas de base de datos a partir de las métricas y trazas recogidas durante la ejecución del proceso.

Explicación: Para diagnóstico y observación del comportamiento de aplicaciones .NET en ejecución. El ecosistema incluye herramientas de diagnóstico de métricas, trazas y rendimiento.

### Propuesta

Un servicio .NET ya desplegado presenta latencia elevada. ¿Qué objetivo tienen dotnet-counters y dotnet-trace al investigar el proceso?

- A. Ejecutar casos de prueba y comprobar sus resultados frente a aserciones del código.
- B. Cambiar automáticamente la configuración del servicio para corregir las causas de la lentitud.
- C. Observar métricas y trazas del proceso para investigar su comportamiento y rendimiento. **(correcta)**
- D. Generar tráfico de prueba para medir la capacidad del servicio bajo una carga impuesta.

Explicación: dotnet-counters permite observar métricas publicadas por el proceso para una investigación inicial; dotnet-trace recopila trazas y eventos para analizarlos con más detalle. Ayudan a investigar el servicio durante su ejecución, con requisitos y costes propios. No prueban exhaustivamente la corrección, generan por sí mismos una prueba de carga o reparan automáticamente el problema observado.

- Error A: Los casos con aserciones corresponden a pruebas automatizadas; la observación de un proceso aporta otra clase de evidencia.
- Error B: Recoger información diagnóstica no modifica por sí mismo el código o configuración para resolver la causa.
- Error D: Imponer tráfico es función de una prueba de carga. Estas herramientas observan el proceso y pueden complementarla, sin ser sus generadores de tráfico.

- [Microsoft: dotnet-counters](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-counters) · Name; descripción; monitor y collect para métricas del proceso · versión: Página leída el 30-10-2026: versión3.0.47001+ según cabecera. Solo propósito diagnóstico; no se ejecuta dnx, instala o conecta una herramienta a procesos. · comprobado: 2026-10-30
- [Microsoft: dotnet-trace](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-trace) · Description; recopilación de trazas, EventPipe y análisis del proceso · versión: Página leída el 30-10-2026: versión9.0.661903+ según cabecera. No se generalizan capacidades o privilegios de collect-linux a todas las modalidades. · comprobado: 2026-10-30

Partida: `b08871400af3f3f7cbe4dc6e2cc0a65b3e9486ab4b47696027340835f69f0671` · propuesta: `23707d2b36b57fcc2c586b8c6bc5070d392de8049fc7c5d3e919c9b72a9a3890`

## MAN-GSI-P15-060

Decisión: pending_review · acción: revise.

Motivo: Conservar independencia del IDE y clave D; separar herramientas y requisitos de ejecución sin prometer portabilidad universal.

### Antes

¿Qué afirmación sobre Visual Studio, VS Code y Rider es correcta?

- A. VS Code sustituye al runtime de producción.
- B. Una aplicación compilada con Rider solo puede ejecutarse dentro de Rider.
- C. El CLR forma parte exclusivamente de Visual Studio.
- D. Son herramientas de desarrollo; la aplicación .NET no depende conceptualmente de un IDE concreto para ejecutarse. **(correcta)**

Explicación: Son herramientas de desarrollo; la aplicación .NET no depende conceptualmente de un IDE concreto para ejecutarse. IDE, SDK y runtime son capas distintas.

### Propuesta

¿Qué afirmación sobre Visual Studio, VS Code y Rider es correcta?

- A. El IDE elegido fija el runtime que debe hospedar cualquier publicación del proyecto.
- B. Cambiar de IDE obliga a migrar las APIs públicas a una implementación .NET diferente.
- C. El IDE debe permanecer instalado en producción para resolver las dependencias de la aplicación.
- D. Son herramientas de desarrollo; la ejecución requiere los componentes adecuados al despliegue. **(correcta)**

Explicación: Visual Studio, VS Code y Rider ayudan a desarrollar; no definen un runtime exclusivo necesario por haberlos usado. Una publicación dependiente del framework necesita un runtime compatible y una autocontenida puede incluirlo. Siguen siendo aplicables sistema y dependencias. SDK, IDE y runtime son capas distintas y deben verificarse según el trabajo de construcción o ejecución requerido.

- Error A: La selección del IDE no fija por sí sola la modalidad publicada o el runtime compatible del destino.
- Error B: Elegir otra herramienta de edición no exige por definición migrar las APIs o la plataforma de ejecución.
- Error C: El IDE no es el mecanismo general para resolver dependencias de una aplicación ya publicada en producción.

- [Microsoft: Install .NET on Windows](https://learn.microsoft.com/en-us/dotnet/core/install/windows) · SDK y runtimes: ejecución frente a desarrollo; runtime correspondiente · versión: Leída el 30-10-2026 para distinguir componentes; no se ejecutan instrucciones de instalación ni se generalizan requisitos de Windows. · comprobado: 2026-10-30
- [Microsoft: MSBuild](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=visualstudio) · Introducción; XML, Tasks y Targets; independencia de Visual Studio · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: dotnet publish](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-publish) · Name; Description; carpeta preparada para despliegue; --no-build · versión: SDK6+ según cabecera, leído el 30-10-2026. Preparar archivos no equivale a enviarlos automáticamente a producción; compilación y restauración dependen de opciones y activos existentes. · comprobado: 2026-10-30

Partida: `30a25758cdddd81bdb37753f2d7f827504e3294204a984c5642d306e5a55ada5` · propuesta: `81eb83e085f8b825c15fb80878c64cbbc3cc4eb80468ac2eedc199e0acc9e8f6`

## MAN-GSI-P15-061

Decisión: pending_review · acción: revise.

Motivo: Conservar pipeline y clave D; acortar definiciones de distractores próximos sin perder sus diferencias de responsabilidad.

### Antes

¿Qué es el pipeline de middleware de ASP.NET Core?

- A. La tabla de rutas que relaciona patrones y métodos HTTP con endpoints una vez que la petición atraviesa los componentes previos.
- B. El contenedor de dependencias que crea y resuelve servicios según su ciclo de vida, sin definir el flujo HTTP completo.
- C. El conjunto de hilos del servidor que ejecuta trabajo concurrente, independientemente del orden lógico de componentes por petición.
- D. Una secuencia de componentes que procesan la petición y la respuesta HTTP. **(correcta)**

Explicación: Una secuencia de componentes que procesan la petición y la respuesta HTTP. Cada middleware puede actuar, pasar al siguiente o cortar el pipeline según el caso.

### Propuesta

¿Qué es el pipeline de middleware de ASP.NET Core?

- A. Una tabla que relaciona patrones de URL con endpoints registrados.
- B. Un contenedor que crea servicios según sus ciclos de vida registrados.
- C. Un conjunto de hilos que permite ejecutar trabajo concurrente.
- D. Una secuencia de componentes que procesan la petición y la respuesta HTTP. **(correcta)**

Explicación: El pipeline encadena componentes que pueden hacer trabajo antes y después del siguiente, o cortar el recorrido sin llamarlo. El orden influye en lo que alcanza cada componente y en cómo vuelve la respuesta. Esa secuencia lógica no equivale a la tabla de rutas, al grafo de servicios DI o a la planificación de hilos. También puede contener ramas y endpoints terminales.

- Error A: Una tabla de coincidencias pertenece al routing; puede usarse dentro del pipeline, pero no define toda su secuencia de procesamiento.
- Error B: El contenedor DI registra y resuelve dependencias; puede proporcionar servicios al middleware, sin ser el flujo de cada petición.
- Error C: La concurrencia y planificación de hilos no especifican el orden lógico de los componentes que recorren una petición.

- [Microsoft: Middleware](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-10.0) · Introducción; secuencia de delegados, next y cortocircuito; orden y middleware automático de WebApplication · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Routing](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-10.0) · Introducción; Routing basics: coincidencia de petición y endpoint, valores y generación de URLs · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Dependency injection overview](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection/overview) · Introducción; The concept; IServiceCollection, IServiceProvider e inyección por constructor · versión: Ruta final tras redirección, leída el 30-10-2026. Registro/resolución de servicios distinto de pipeline HTTP. · comprobado: 2026-10-30

Partida: `e9675c367b4179bb36e7acf04a17823bf9f63b7bdfccc387c5ee74242b3f96b8` · propuesta: `8f29d0d067daa4c50140d7ee31f8b5c42a1fec4660aef7ec262c3c063c251c12`

## MAN-GSI-P15-062

Decisión: pending_review · acción: revise.

Motivo: Conservar contenedor DI y clave A; cuatro componentes reales con papeles próximos.

### Antes

¿Qué característica incorpora ASP.NET Core de forma nativa para componer servicios?

- A. Un contenedor de inyección de dependencias integrado. **(correcta)**
- B. Un lenguaje diferente de C\#.
- C. Un servidor Oracle embebido.
- D. Un sistema operativo propio.

Explicación: Un contenedor de inyección de dependencias integrado. La DI integrada permite registrar servicios y resolver dependencias con distintos ciclos de vida.

### Propuesta

¿Qué característica incorpora ASP.NET Core de forma nativa para componer servicios?

- A. Un contenedor integrado para registrar y resolver dependencias de servicios. **(correcta)**
- B. Un sistema de configuración para combinar valores de distintas fuentes.
- C. Una cadena de componentes para procesar peticiones y respuestas HTTP.
- D. Un sistema de rutas para asociar URLs y métodos HTTP con endpoints.

Explicación: ASP.NET Core incorpora un contenedor DI: se registran servicios y se resuelven dependencias, habitualmente mediante constructores, con sus ciclos de vida. Esto permite componer componentes sin que cada consumidor construya todo su grafo de dependencias. Configuración, middleware y routing pueden usar esos servicios, pero sus funciones no sustituyen registro y resolución.

- Error B: El sistema de configuración obtiene y combina valores; no construye ni resuelve por sí solo el grafo de servicios DI.
- Error C: La cadena de middleware determina procesamiento HTTP y no es la abstracción de registro/resolución de dependencias.
- Error D: El routing selecciona endpoints por la petición; no define el contenedor integrado que compone servicios.

- [Microsoft: Dependency injection overview](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection/overview) · Introducción; The concept; IServiceCollection, IServiceProvider e inyección por constructor · versión: Ruta final tras redirección, leída el 30-10-2026. Registro/resolución de servicios distinto de pipeline HTTP. · comprobado: 2026-10-30
- [Microsoft: Configuration](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-10.0) · Introducción; Default app configuration sources: prioridades y proveedores JSON, entorno y argumentos · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Middleware](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-10.0) · Introducción; secuencia de delegados, next y cortocircuito; orden y middleware automático de WebApplication · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Routing](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-10.0) · Introducción; Routing basics: coincidencia de petición y endpoint, valores y generación de URLs · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30

Partida: `c3421f2b5697f558f5b8a732ca2e01123ef4fd0b1099fb26abe2e77a12199e19` · propuesta: `5c8df48acc55362f69ea175c86734728f6d3f2d4125e738b01ee2849fadc4f66`

## MAN-GSI-P15-063

Decisión: pending_review · acción: revise.

Motivo: Conservar selección de endpoint y clave D; acortar distractores y precisar diferencias con binding, middleware y DNS.

### Antes

¿Qué función cumple el routing?

- A. Convertir valores de ruta, consulta y formulario en parámetros u objetos del método que ya ha sido seleccionado.
- B. Ejecutar componentes encadenados antes y después del endpoint para aplicar funciones transversales a la petición y respuesta.
- C. Resolver mediante DNS el nombre del servidor a una dirección IP antes de que la petición HTTP llegue a la aplicación.
- D. Relacionar una petición HTTP con el endpoint que debe atenderla. **(correcta)**

Explicación: Relacionar una petición HTTP con el endpoint que debe atenderla. Routing decide qué endpoint coincide con ruta, método y metadatos aplicables.

### Propuesta

¿Qué función cumple el routing?

- A. Convertir datos de ruta, formulario y query en parámetros de la acción.
- B. Encadenar componentes transversales de petición y respuesta HTTP.
- C. Resolver nombres DNS para localizar la dirección IP del servidor.
- D. Relacionar una petición HTTP con el endpoint que debe atenderla. **(correcta)**

Explicación: Routing compara la petición con los endpoints y sus criterios para seleccionar el que puede atenderla. Puede extraer valores de ruta y contribuir a generar URLs; no se limita a una tabla de nombres. Obtener y convertir además valores de consulta o formulario para la acción corresponde al model binding. Seleccionar un endpoint no implica que el usuario esté autorizado a ejecutarlo.

- Error A: La obtención y conversión conjunta de datos de entrada describe model binding. No debe confundirse extraer valores de ruta con todo ese proceso.
- Error B: Encadenar funciones transversales describe middleware. Routing es una responsabilidad que participa en ese procesamiento.
- Error C: DNS resuelve la dirección de red antes del procesamiento de la aplicación; no selecciona la acción o endpoint que atiende la petición recibida.

- [Microsoft: Routing](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-10.0) · Introducción; Routing basics: coincidencia de petición y endpoint, valores y generación de URLs · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Model binding](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/model-binding?view=aspnetcore-10.0) · What is model binding: obtención y conversión de valores de ruta, formulario y consulta · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Middleware](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-10.0) · Introducción; secuencia de delegados, next y cortocircuito; orden y middleware automático de WebApplication · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Authorization introduction](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/introduction?view=aspnetcore-10.0) · Introducción; roles, políticas y requisitos; autenticación distinta de permiso sobre el recurso · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30

Partida: `21f0ce4698a28dd98e5ea2fced578b9738f19c265051ede8958ca9f654846ce1` · propuesta: `2d04f4232293d2b065e69973e946af27c0580d6373fa6bfdfed589198984c68f`

## MAN-GSI-P15-064

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación de modelos de API y clave D; no equiparar Minimal a incapacidad para sistemas complejos.

### Antes

¿Qué afirmación distingue razonablemente Minimal APIs y MVC Controllers?

- A. Minimal APIs carecen de inyección de dependencias y requieren crear manualmente todos los servicios utilizados por cada endpoint.
- B. Los controllers reducen más la ceremonia porque no emplean clases, atributos, filtros ni convenciones de routing.
- C. Minimal APIs admiten peticiones GET, pero otros métodos HTTP requieren obligatoriamente un controller MVC.
- D. Ambos sirven para APIs; Minimal APIs reducen ceremonia en escenarios simples y controllers aportan una estructura más clásica y rica para aplicaciones complejas. **(correcta)**

Explicación: Ambos sirven para APIs; Minimal APIs reducen ceremonia en escenarios simples y controllers aportan una estructura más clásica y rica para aplicaciones complejas. No son tecnologías excluyentes por capacidad básica; la elección depende de estructura y requisitos.

### Propuesta

¿Qué afirmación distingue razonablemente Minimal APIs y MVC Controllers?

- A. Minimal APIs solo aceptan GET; los demás métodos HTTP requieren controllers.
- B. Controllers prescinden de clases y agrupan endpoints únicamente mediante lambdas.
- C. Solo controllers permiten DI y políticas de autorización en sus endpoints.
- D. Ambos crean APIs HTTP; difieren en organización de endpoints y convenciones disponibles. **(correcta)**

Explicación: Minimal APIs y controllers son modelos válidos para construir APIs HTTP sobre ASP.NET Core. Minimal APIs permiten definir endpoints con poca ceremonia, pero también admiten organización y escenarios complejos. Controllers agrupan acciones y ofrecen convenciones y características MVC. La elección depende de requisitos y funciones concretas, no de prohibir otros verbos HTTP, DI o autorización a Minimal APIs.

- Error A: Minimal APIs disponen de endpoints para distintos métodos HTTP; usar otro verbo no obliga por sí solo a introducir un controller.
- Error B: Los controllers son clases con acciones; describir únicamente lambdas corresponde a otra forma de declarar endpoints.
- Error C: Minimal APIs también admiten servicios y autorización; no son capacidades exclusivas de controllers.

- [Microsoft: APIs overview](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/apis?view=aspnetcore-10.0) · Minimal APIs; Controller-based APIs; capacidades compartidas y elección por requisitos · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Controllers and actions](https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/actions?view=aspnetcore-10.0) · What is a Controller; agrupación de acciones y coordinación de peticiones · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Authentication overview](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/?view=aspnetcore-10.0) · Introducción; identidad y esquemas; registrar autenticación no restringe automáticamente endpoints · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Dependency injection overview](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection/overview) · Introducción; The concept; IServiceCollection, IServiceProvider e inyección por constructor · versión: Ruta final tras redirección, leída el 30-10-2026. Registro/resolución de servicios distinto de pipeline HTTP. · comprobado: 2026-10-30

Partida: `e30225e4dbd7c04593169a2b05333b6bad24aefc5e510885d7553f0756ee2792` · propuesta: `8c04db48a5058c4acc1828b0afe4a813977a486374660a6b684c8c67f396d016`

## MAN-GSI-P15-065

Decisión: pending_review · acción: revise.

Motivo: Conservar servidor web y clave C; contrastar papeles próximos de alojamiento en lugar de compiladores o paquetes.

### Antes

¿Qué es Kestrel?

- A. El compilador Roslyn que transforma código fuente C\# y Visual Basic en ensamblados para el entorno .NET.
- B. El cliente y formato de paquetes NuGet utilizado para resolver, descargar y gestionar dependencias de proyectos.
- C. El servidor web multiplataforma utilizado por ASP.NET Core. **(correcta)**
- D. El ORM EF Core que traduce operaciones sobre entidades y consultas LINQ al proveedor de datos configurado.

Explicación: El servidor web multiplataforma utilizado por ASP.NET Core. Kestrel puede atender HTTP directamente y también operar detrás de un reverse proxy.

### Propuesta

¿Qué es Kestrel?

- A. El servidor web de Windows que hospeda aplicaciones mediante grupos de procesos.
- B. El proxy de borde que distribuye peticiones entre varias instancias de una aplicación.
- C. El servidor web multiplataforma utilizado para hospedar aplicaciones ASP.NET Core. **(correcta)**
- D. El componente que selecciona endpoints al comparar rutas y metadatos de las peticiones.

Explicación: Kestrel es el servidor web multiplataforma de ASP.NET Core y puede recibir HTTP directamente o usarse detrás de un proxy inverso. No es por definición IIS, el routing o un balanceador de borde. Puede hospedar una aplicación de proxy como YARP, pero eso no convierte a toda instancia de Kestrel en un proxy o impone ese despliegue.

- Error A: Describe un producto y alojamiento de Windows como IIS; Kestrel es otro servidor, con soporte multiplataforma.
- Error B: La distribución entre backends es un papel de proxy o balanceo; puede combinarse con Kestrel sin definir qué es el servidor.
- Error D: Comparar rutas y seleccionar el endpoint corresponde a routing, que se integra con la aplicación atendida por el servidor.

- [Microsoft: Kestrel](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel?view=aspnetcore-10.0) · Introducción; When to use Kestrel with a reverse proxy: ambos alojamientos admitidos · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Proxy servers and load balancers](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/proxy-load-balancer?view=aspnetcore-10.0) · Información original de petición; Forwarded Headers Middleware; proxies y redes de confianza · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Routing](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-10.0) · Introducción; Routing basics: coincidencia de petición y endpoint, valores y generación de URLs · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30

Partida: `51aa030c68558964399d49846f04638018ea0e9d0404188bac976e1a71300db8` · propuesta: `f5dc26be901f8f512cffb1e8dd152d4bf002bf86f77322d37e48ad17de9c5e96`

## MAN-GSI-P15-066

Decisión: pending_review · acción: revise.

Motivo: Conservar capacidades de borde y clave C; precisar opción de despliegue, HTTPS directo y cabeceras de proxies de confianza.

### Antes

¿Por qué se coloca a menudo ASP.NET Core detrás de un reverse proxy?

- A. Porque Kestrel no implementa HTTP ni puede aceptar conexiones directamente, por lo que requiere siempre otro servidor web.
- B. Porque el CLR solo permite ejecutar ASP.NET Core detrás de IIS y rechaza cualquier despliegue directo o multiplataforma.
- C. Para integrar terminación TLS, balanceo, políticas de borde u otras capacidades de infraestructura, según el despliegue. **(correcta)**
- D. Para que el proxy compile la aplicación y restaure paquetes antes de cada petición, funciones que Kestrel no realiza.

Explicación: Para integrar terminación TLS, balanceo, políticas de borde u otras capacidades de infraestructura, según el despliegue. Reverse proxy es una decisión de arquitectura, no una obligación absoluta para todos los escenarios.

### Propuesta

¿Por qué se coloca a menudo ASP.NET Core detrás de un reverse proxy?

- A. Permitir a Kestrel recibir HTTP, ya que no acepta conexiones directamente.
- B. Garantizar que el proxy valida todas las reglas de negocio de cada endpoint.
- C. Integrar TLS, balanceo y políticas de borde según las necesidades del despliegue. **(correcta)**
- D. Hacer compatible cualquier dependencia con el sistema donde se ejecuta la aplicación.

Explicación: Un proxy inverso puede integrar funciones de borde y facilitar balanceo o terminación TLS según la infraestructura. Kestrel también admite conexiones y HTTPS directamente, por lo que el proxy es una decisión de despliegue y no un requisito universal. Si se usan datos reenviados de la petición, hay que configurar su tratamiento y qué proxies son de confianza; no se sustituye la lógica de la aplicación.

- Error A: Kestrel puede atender HTTP directamente. La presencia de un proxy no suple una inexistente capacidad básica de recibir conexiones.
- Error B: Un proxy puede aplicar políticas, pero no garantiza validar todas las reglas de negocio del endpoint ni hace innecesario el control en la aplicación.
- Error D: Cambiar la ruta de entrada HTTP no adapta APIs o bibliotecas incompatibles con el sistema de destino.

- [Microsoft: Kestrel](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel?view=aspnetcore-10.0) · Introducción; When to use Kestrel with a reverse proxy: ambos alojamientos admitidos · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Proxy servers and load balancers](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/proxy-load-balancer?view=aspnetcore-10.0) · Información original de petición; Forwarded Headers Middleware; proxies y redes de confianza · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30

Partida: `6024687023b0c5a8a2633929e16a0a21e212760c84e32b6aa12f4947b669387c` · propuesta: `20f144f6df3728cf160060acece834cd9ef4907547d3a1029a1d925fea3166e5`

## MAN-GSI-P15-067

Decisión: pending_review · acción: revise.

Motivo: Conservar configuración agregada y clave B; caso ficticio y no secreto con proveedor y orden predeterminados explícitos.

### Antes

¿Qué finalidad tiene \`appsettings.json\`?

- A. Sustituir a la base de datos.
- B. Proporcionar configuración de aplicación que puede combinarse con otras fuentes y entornos. **(correcta)**
- C. Almacenar assemblies compilados.
- D. Contener únicamente contraseñas en texto claro.

Explicación: Proporcionar configuración de aplicación que puede combinarse con otras fuentes y entornos. El sistema de configuración agrega proveedores; los secretos sensibles no deben tratarse como configuración pública normal.

### Propuesta

Con WebApplication.CreateBuilder(args) predeterminado, appsettings.json define Modo=Basico y la variable de entorno Modo define Avanzado. Sin otras fuentes para esa clave, ¿qué papel tiene el JSON?

- A. El JSON fija Basico y ese valor no puede sobrescribirse una vez cargado.
- B. El JSON aporta configuración combinable; el entorno puede imponer Avanzado. **(correcta)**
- C. La lectura de Modo conserva ambos valores y devuelve una colección con los dos.
- D. La variable modifica el JSON y su nuevo contenido sustituye al del repositorio.

Explicación: appsettings.json aporta valores mediante el proveedor JSON y se combina con otras fuentes. Con los valores predeterminados de WebApplication.CreateBuilder, las variables de entorno de aplicación tienen prioridad sobre el JSON general: en el caso, Modo se lee como Avanzado. No se modifica el archivo ni se devuelve una colección de valores por esa coincidencia. Otros proveedores o cambios de orden pueden alterar la prioridad, de ahí el contexto explícito.

- Error A: El archivo no fija una prioridad absoluta; el proveedor de entorno posterior tiene precedencia en la configuración predeterminada indicada.
- Error C: Los proveedores resuelven el valor de una clave según prioridad; que dos la definan no convierte esa lectura en una colección.
- Error D: Sobrescribir el valor efectivo de configuración no escribe el JSON ni cambia los archivos del repositorio.

- [Microsoft: Configuration](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-10.0) · Introducción; Default app configuration sources: prioridades y proveedores JSON, entorno y argumentos · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Runtime environments](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-10.0) · Introducción; Environments; configuración y comportamiento por nombre de entorno · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30

Partida: `fd1f83c3ced303c4d1e2ccad1b8b19ff9cd8b9e18c852f709a4719343f3a3c92` · propuesta: `5db4ebd21b682b873051d1d9659f5413f6710af78544434b293c6928536a1902`

## MAN-GSI-P15-068

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado, alternativas y clave B; distinguir repositorio, logs, Base64 y almacén controlado de producción.

### Antes

¿Cuál es una práctica correcta con secretos de producción?

- A. Incluir los secretos en los mensajes de log para que el personal de soporte pueda recuperarlos sin acceder al almacén seguro del entorno.
- B. Mantenerlos fuera del código y de repositorios, usando almacenes de secretos o mecanismos seguros del entorno. **(correcta)**
- C. Guardarlos directamente en \`appsettings.json\` y confirmar ese archivo en Git para que todos los despliegues compartan los mismos valores.
- D. Codificarlos en Base64 y tratarlos como cifrados, aunque cualquier persona con acceso pueda recuperar de forma inmediata el texto original.

Explicación: Mantenerlos fuera del código y de repositorios, usando almacenes de secretos o mecanismos seguros del entorno. La gestión de secretos debe separar credenciales del artefacto y limitar su exposición.

### Propuesta

¿Cuál es una práctica correcta con secretos de producción?

- A. Incluir los secretos en los mensajes de log para que el personal de soporte pueda recuperarlos sin acceder al almacén seguro del entorno.
- B. Mantenerlos fuera del código y de repositorios, usando almacenes de secretos o mecanismos seguros del entorno. **(correcta)**
- C. Guardarlos directamente en \`appsettings.json\` y confirmar ese archivo en Git para que todos los despliegues compartan los mismos valores.
- D. Codificarlos en Base64 y tratarlos como cifrados, aunque cualquier persona con acceso pueda recuperar de forma inmediata el texto original.

Explicación: Los secretos de producción deben obtenerse mediante acceso controlado del entorno, fuera del código, repositorio y artefacto público. Importan permisos y exposición del mecanismo elegido, no solo cambiar el lugar del texto. Secret Manager de .NET es para desarrollo y no cifra sus valores; no es por sí mismo el almacén seguro de producción.

- Error A: Escribir un secreto en logs amplía su exposición y su persistencia; el log no sustituye un mecanismo de acceso controlado al secreto.
- Error C: Confirmarlo en Git distribuye el valor a quienes accedan al archivo o su historial, aunque se use después para configurar la aplicación.
- Error D: Base64 es codificación reversible, no cifrado ni control de acceso; no protege el valor frente a quien puede leerlo.

- [Microsoft: Safe storage of app secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-10.0) · Introducción: secretos fuera de código y artefacto; producción mediante acceso controlado; Secret Manager solo desarrollo · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Configuration](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-10.0) · Introducción; Default app configuration sources: prioridades y proveedores JSON, entorno y argumentos · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30

Partida: `03fead77ff7aa9d1e18072f054d16904ada259ab83f97521ab036f915f3de86e` · propuesta: `8baa68a411f092c30fdb15c4a8fd0487b8d33b56384f7a6e3d33aaad933ceca2`

## MAN-GSI-P15-069

Decisión: pending_review · acción: revise.

Motivo: Conservar configuración y comportamiento por entorno y clave A; separar contexto, herramientas, arquitectura y control de acceso.

### Antes

¿Para qué sirven los entornos Development, Staging y Production en ASP.NET Core?

- A. Para variar configuración y comportamiento según el contexto de ejecución. **(correcta)**
- B. Para definir el tipo de CPU.
- C. Para elegir el lenguaje de programación.
- D. Para reemplazar el control de versiones.

Explicación: Para variar configuración y comportamiento según el contexto de ejecución. El entorno puede condicionar configuración, páginas de error y servicios, pero no debe usarse como excusa para saltarse seguridad.

### Propuesta

¿Para qué sirven los entornos Development, Staging y Production en ASP.NET Core?

- A. Variar configuración y comportamiento según el contexto de ejecución. **(correcta)**
- B. Elegir el SDK que recompila el programa durante su inicio.
- C. Elegir la CPU y adaptar las dependencias nativas al iniciarse.
- D. Aplicar permisos y aislar secretos por el nombre del entorno.

Explicación: El nombre de entorno permite seleccionar configuración y comportamiento, como archivos específicos o funciones de diagnóstico. Development, Staging y Production son convenciones conocidas y pueden existir otros nombres. No selecciona por sí solo compilador o arquitectura y no constituye una frontera de permisos. Las diferencias deben implementarse mediante configuración y servicios apropiados.

- Error B: El SDK se usa para desarrollar o construir; nombrar el entorno de ejecución no transforma el binario con otro compilador al iniciarlo.
- Error C: La compatibilidad de CPU y dependencias no se resuelve con el nombre del entorno; son decisiones de construcción y despliegue.
- Error D: Pueden variar proveedores y valores, pero el nombre no crea aislamiento de permisos ni convierte un dato en secreto protegido.

- [Microsoft: Runtime environments](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-10.0) · Introducción; Environments; configuración y comportamiento por nombre de entorno · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Configuration](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-10.0) · Introducción; Default app configuration sources: prioridades y proveedores JSON, entorno y argumentos · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Install .NET on Windows](https://learn.microsoft.com/en-us/dotnet/core/install/windows) · SDK y runtimes: ejecución frente a desarrollo; runtime correspondiente · versión: Leída el 30-10-2026 para distinguir componentes; no se ejecutan instrucciones de instalación ni se generalizan requisitos de Windows. · comprobado: 2026-10-30

Partida: `d84c316d186d5bfaf4c08d872561900256b04cbafde27233e41fd3eab37af824` · propuesta: `57e6c86b247f7021fc23ebe7cfa2c955af6284728dc0d7b0780153a8b8a2ca3c`

## MAN-GSI-P15-070

Decisión: pending_review · acción: revise.

Motivo: Conservar autenticación antes de autorización y clave A; caso con endpoint seleccionado y política de usuario autenticado.

### Antes

En un pipeline típico con autenticación y autorización, ¿qué orden conceptual es correcto?

- A. Autenticar antes de autorizar, porque la autorización necesita una identidad establecida. **(correcta)**
- B. Autorizar antes de autenticar siempre.
- C. No importa el orden de middleware.
- D. Ejecutar autorización después de devolver la respuesta.

Explicación: Autenticar antes de autorizar, porque la autorización necesita una identidad establecida. Microsoft documenta el orden de middleware; autenticación precede a autorización cuando ambas se usan.

### Propuesta

En un pipeline configurado explícitamente, routing ya seleccionó un endpoint cuya política exige usuario autenticado. ¿Qué orden conceptual corresponde a los siguientes pasos?

- A. Autenticación → autorización → ejecución del endpoint. **(correcta)**
- B. Autorización → autenticación → ejecución del endpoint.
- C. Ejecución del endpoint → autenticación → autorización.
- D. Autenticación → ejecución del endpoint → autorización.

Explicación: En el pipeline explícito habitual, Authentication establece el principal y Authorization evalúa los requisitos del endpoint antes de ejecutarlo. El routing previo permite disponer de sus metadatos. Registrar autenticación no restringe por sí mismo todos los endpoints: importan sus políticas. Algunas configuraciones WebApplication añaden middleware automáticamente; el caso fija el orden explícito y una política que exige autenticación.

- Error B: Invierte el orden habitual y evalúa autorización antes de que el middleware de autenticación aporte el principal; no es el orden documentado para el caso.
- Error C: Ejecutar la acción antes de evaluar los controles permite que empiece su trabajo sin la decisión de acceso que debe precederla.
- Error D: Autenticar no basta: la política de autorización debe evaluarse antes de la ejecución, no después de que el endpoint produzca efectos.

- [Microsoft: Middleware](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-10.0) · Introducción; secuencia de delegados, next y cortocircuito; orden y middleware automático de WebApplication · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Authentication overview](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/?view=aspnetcore-10.0) · Introducción; identidad y esquemas; registrar autenticación no restringe automáticamente endpoints · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Authorization introduction](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/introduction?view=aspnetcore-10.0) · Introducción; roles, políticas y requisitos; autenticación distinta de permiso sobre el recurso · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30

Partida: `f482c5427f813847dda1eae30e935af533f71c35c25f0466ae19ee436ecab6a8` · propuesta: `27bad046d8ea8d2f06e911425156146e295e7c874f03cf1c6ed7424f00a88626`

## MAN-GSI-P15-071

Decisión: pending_review · acción: revise.

Motivo: Conservar identidad frente a permiso y clave D; pares de responsabilidades cercanas, sin equiparar usuario autenticado y acceso general.

### Antes

¿Qué diferencia hay entre autenticación y autorización?

- A. Autenticación decide permisos y autorización crea la contraseña.
- B. Son sinónimos exactos.
- C. Autorización ocurre únicamente en la base de datos.
- D. Autenticación determina quién es el usuario; autorización decide qué puede hacer. **(correcta)**

Explicación: Autenticación determina quién es el usuario; autorización decide qué puede hacer. Confundir identidad y permisos es una trampa recurrente.

### Propuesta

¿Qué diferencia hay entre autenticación y autorización?

- A. Autenticación decide los permisos; autorización verifica la identidad presentada.
- B. Autenticación valida entradas; autorización convierte los datos HTTP en parámetros.
- C. Autenticación cifra el transporte; autorización selecciona el endpoint por su ruta.
- D. Autenticación comprueba identidad; autorización decide el acceso al recurso solicitado. **(correcta)**

Explicación: La autenticación verifica identidad según el esquema configurado y puede aportar un principal. La autorización evalúa si se cumplen requisitos para una operación o recurso, por ejemplo roles, claims o reglas del recurso. Tener una identidad autenticada no concede cualquier permiso. Validación de entrada, binding, cifrado de transporte y routing son controles o mecanismos diferentes.

- Error A: Invierte las responsabilidades: comprobar identidad corresponde a autenticación y evaluar el acceso a autorización.
- Error B: Validación y model binding tratan los datos de entrada; no definen identidad o permisos.
- Error C: TLS protege el transporte y routing selecciona endpoints; ninguno equivale por sí mismo a los procesos de identidad y acceso.

- [Microsoft: Authentication overview](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/?view=aspnetcore-10.0) · Introducción; identidad y esquemas; registrar autenticación no restringe automáticamente endpoints · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Authorization introduction](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/introduction?view=aspnetcore-10.0) · Introducción; roles, políticas y requisitos; autenticación distinta de permiso sobre el recurso · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Model binding](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/model-binding?view=aspnetcore-10.0) · What is model binding: obtención y conversión de valores de ruta, formulario y consulta · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Model validation](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/validation?view=aspnetcore-10.0) · Model state; binding frente a validation; ModelState.IsValid; respuesta400 con ApiController · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Routing](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-10.0) · Introducción; Routing basics: coincidencia de petición y endpoint, valores y generación de URLs · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30

Partida: `330e4d68b689b52e5184a55ba3417c89697f92bf5d6483252a2d31e9d9bb4fbe` · propuesta: `8bcb43a0bea4852ce9389ac391bcff185b0872d68a01ab118cbc376a2016c880`

## MAN-GSI-P15-073

Decisión: pending_review · acción: revise.

Motivo: Conservar Scoped habitual y clave B; caso de resoluciones en petición sin pooling y con límites de concurrencia explícitos.

### Antes

En una aplicación web típica, ¿qué lifetime se usa habitualmente para \`DbContext\` cuando se registra con EF Core?

- A. Singleton obligatorio.
- B. Scoped, normalmente una instancia por ámbito/petición. **(correcta)**
- C. Static global compartido entre todas las peticiones.
- D. Transient obligatorio en cualquier caso.

Explicación: Scoped, normalmente una instancia por ámbito/petición. DbContext no está diseñado para uso concurrente compartido; el registro habitual es scoped.

### Propuesta

En una API HTTP, dos servicios resuelven el DbContext registrado con AddDbContext, sin cambiar su lifetime ni usar pooling. ¿Qué alcance habitual tienen dentro de una petición?

- A. Singleton: una instancia compartida por las peticiones del contenedor.
- B. Scoped: una instancia compartida dentro del ámbito de cada petición. **(correcta)**
- C. Transient: una instancia nueva por cada resolución dentro de la petición.
- D. Static: una instancia compartida por todos los contenedores de la máquina.

Explicación: AddDbContext registra el contexto como Scoped por defecto: los consumidores del mismo ámbito reutilizan la instancia y otra petición dispone de su propio ámbito. El caso excluye pooling, que puede reutilizar instancias entre usos. Scoped no hace thread-safe al contexto ni permite consultas paralelas sobre la misma instancia. Para trabajos con otros ámbitos o concurrencia deben diseñarse contextos y unidades de trabajo apropiados.

- Error A: Singleton compartiría una instancia entre peticiones del contenedor; no es el registro habitual indicado y no resuelve la falta de seguridad concurrente del contexto.
- Error C: Transient crea por resolución, mientras el comportamiento predeterminado de AddDbContext reutiliza dentro del mismo ámbito.
- Error D: Static no es un lifetime del contenedor DI ni el comportamiento registrado por AddDbContext; tampoco existe esa garantía de singleton universal por máquina.

- [Microsoft: DbContext lifetime and configuration](https://learn.microsoft.com/en-us/ef/core/dbcontext-configuration/) · The DbContext lifetime; AddDbContext en DI; Avoiding threading issues; Scoped por defecto · versión: Leída el 30-10-2026. Contexto por unidad de trabajo, no thread-safe. Caso de peticiones HTTP con AddDbContext sin pooling; Blazor y factories pueden requerir otro diseño. · comprobado: 2026-10-30
- [Microsoft: Dependency injection overview](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection/overview) · Introducción; The concept; IServiceCollection, IServiceProvider e inyección por constructor · versión: Ruta final tras redirección, leída el 30-10-2026. Registro/resolución de servicios distinto de pipeline HTTP. · comprobado: 2026-10-30
- [Microsoft: Advanced performance: DbContext pooling](https://learn.microsoft.com/en-us/ef/core/performance/advanced-performance-topics) · DbContext pooling; Managing state in pooled contexts; relación con ámbitos de petición · versión: Leída el 30-10-2026. Reutilización de contextos entre usos distinta de pooling de conexiones. No se ejecutan benchmarks, consultas o ejemplos de identificación de tenant. · comprobado: 2026-10-30

Partida: `de23048dfe37300721b8f4c87250515bd3df6c2db4cb0c6042789fd5c8a32d0b` · propuesta: `ada0a213c898912b67db977a62bdab679eec8cc0e899041aaf79b0ea74995b4a`

## MAN-GSI-P15-074

Decisión: pending_review · acción: revise.

Motivo: Conservar agrupación y coordinación HTTP y clave A; comparar componentes de la misma aplicación.

### Antes

¿Qué finalidad tiene un Controller en ASP.NET Core MVC/API?

- A. Agrupar acciones/endpoints y coordinar entrada HTTP con la lógica de aplicación. **(correcta)**
- B. Definir el esquema físico de la base de datos.
- C. Ejecutar el GC.
- D. Gestionar paquetes NuGet.

Explicación: Agrupar acciones/endpoints y coordinar entrada HTTP con la lógica de aplicación. Los controllers forman parte de la capa HTTP, no deberían absorber toda la lógica de negocio.

### Propuesta

¿Qué finalidad tiene un Controller en ASP.NET Core MVC/API?

- A. Agrupar acciones HTTP y coordinar sus entradas y resultados con la lógica de aplicación. **(correcta)**
- B. Encadenar componentes transversales para procesar todas las peticiones y respuestas.
- C. Crear y resolver servicios registrados según sus ciclos de vida en el contenedor.
- D. Seleccionar el endpoint que coincide con los patrones y metadatos de la petición.

Explicación: Un controller agrupa acciones que atienden peticiones y coordina datos de entrada, llamadas a servicios y resultados HTTP. Routing determina la acción seleccionada y otros componentes pueden realizar binding, validación o acceso. Agrupar acciones no obliga a concentrar en ellas todas las reglas de negocio; la coordinación HTTP y la lógica de aplicación mantienen responsabilidades distinguibles.

- Error B: Encadenar componentes transversales corresponde al middleware, que no define el agrupamiento de acciones del controller.
- Error C: Construir y resolver el grafo de servicios corresponde al contenedor DI; el controller puede consumir sus dependencias.
- Error D: La selección entre endpoints corresponde al routing; el controller define y organiza las acciones que pueden seleccionarse.

- [Microsoft: Controllers and actions](https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/actions?view=aspnetcore-10.0) · What is a Controller; agrupación de acciones y coordinación de peticiones · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Routing](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-10.0) · Introducción; Routing basics: coincidencia de petición y endpoint, valores y generación de URLs · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Dependency injection overview](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection/overview) · Introducción; The concept; IServiceCollection, IServiceProvider e inyección por constructor · versión: Ruta final tras redirección, leída el 30-10-2026. Registro/resolución de servicios distinto de pipeline HTTP. · comprobado: 2026-10-30
- [Microsoft: Middleware](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-10.0) · Introducción; secuencia de delegados, next y cortocircuito; orden y middleware automático de WebApplication · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30

Partida: `77af23805aa9a09987ff1c740ac2adf54e219eaed72f8a9340b6d187d8a45c21` · propuesta: `83ad1f4c28f5568790bf24026edfe3f24fddf3858969fbd3e7930bea9dacb628`

## MAN-GSI-P15-076

Decisión: pending_review · acción: revise.

Motivo: Conservar completa formulación y clave B; distinguir binding, validación, acceso y persistencia y acotar la respuesta automática.

### Antes

¿Qué papel cumple la validación de modelos?

- A. Obtener valores de ruta, query, formulario o cuerpo y asignarlos a parámetros y objetos del modelo de entrada.
- B. Comprobar reglas de entrada y detectar datos inválidos antes de procesarlos como válidos. **(correcta)**
- C. Comprobar la identidad y los permisos del usuario antes de permitir que ejecute una acción sobre un recurso.
- D. Aplicar claves, tipos, restricciones y reglas de integridad al guardar definitivamente los datos en la base.

Explicación: Comprobar reglas de entrada y detectar datos inválidos antes de procesarlos como válidos. Validación, autenticación y autorización son controles distintos y complementarios.

### Propuesta

¿Qué papel cumple la validación de modelos?

- A. Obtener valores de ruta, query, formulario o cuerpo y asignarlos a parámetros y objetos del modelo de entrada.
- B. Comprobar reglas de entrada y detectar datos inválidos antes de procesarlos como válidos. **(correcta)**
- C. Comprobar la identidad y los permisos del usuario antes de permitir que ejecute una acción sobre un recurso.
- D. Aplicar claves, tipos, restricciones y reglas de integridad al guardar definitivamente los datos en la base.

Explicación: La validación comprueba reglas del modelo de entrada y registra errores antes de tratar esos datos como válidos. ModelState puede contener tanto errores de binding como de validación, pero son fases distintas. Con ApiController y comportamiento predeterminado, un ModelState inválido genera una respuesta400 automática. Esto no demuestra permisos del usuario ni sustituye todas las reglas de negocio o restricciones de integridad de la persistencia.

- Error A: Obtener y convertir datos hacia parámetros u objetos describe model binding; validar comprueba si sus valores cumplen las reglas declaradas.
- Error C: Identidad y permisos corresponden a autenticación y autorización; validar un modelo no prueba que el usuario pueda ejecutar la operación.
- Error D: Las restricciones aplicadas al guardar protegen la integridad persistida y son otra capa; no equivalen a validar la entrada del modelo HTTP.

- [Microsoft: Model validation](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/validation?view=aspnetcore-10.0) · Model state; binding frente a validation; ModelState.IsValid; respuesta400 con ApiController · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Model binding](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/model-binding?view=aspnetcore-10.0) · What is model binding: obtención y conversión de valores de ruta, formulario y consulta · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Authentication overview](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/?view=aspnetcore-10.0) · Introducción; identidad y esquemas; registrar autenticación no restringe automáticamente endpoints · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30
- [Microsoft: Authorization introduction](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/introduction?view=aspnetcore-10.0) · Introducción; roles, políticas y requisitos; autenticación distinta de permiso sobre el recurso · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. · comprobado: 2026-10-30

Partida: `68ab1e856f5a7196167dd1614668db636a95a57a6cc52d79425802c2c8fbf1bd` · propuesta: `b54328c8f3ec99e837cd8dc59b8e6710eeca44c6ecd9f69beb0212c2b7e50e6a`
