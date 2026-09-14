GSI A2 - PRACTICA ACTIVA 15

**.NET + COMPARATIVA JAKARTA EE**

160 preguntas - 4 opciones - III.11 cierre + III.10 refuerzo

**CUADERNO DE TRABAJO**

# Como usar esta practica

Objetivo: cerrar III.11 (.NET) como hueco de practica activa y convertir III.10 (Jakarta EE) en entrenamiento dedicado mediante un bloque especifico y comparativo.

Base nuclear: GSI A2 - Bloque III - Apuntes completos V2.1 revisados. Se conserva su terminologia y se corrigen referencias antiguas de los materiales 2023/legacy cuando chocan con el stack vigente.

Control de actualidad: las preguntas de version usan .NET 10 LTS y Jakarta EE 11, verificados en fuentes oficiales a 24/08/2026.

Metodo: responde sin consultar apuntes. Marca cada fallo como concepto, capa confundida, sigla/tecnologia, arquitectura o exceso de confianza. Repite a 48-72 h solo las falladas y dudosas.

## Distribucion

| **Bloque** | **Preguntas** | **Funcion** |
| --- | --- | --- |
| 1. .NET moderno y arquitectura base | 1-20 | Fundamentos de plataforma |
| 2. CLR, IL, CTS, CLS, assemblies y gestión de recursos | 21-40 | Runtime y sistema de tipos |
| 3. C#, LINQ, asincronía, herramientas y paquetes | 41-60 | Lenguaje, consultas y tooling |
| 4. ASP.NET Core: pipeline, DI, APIs y configuración | 61-80 | Web/API y composicion |
| 5. Datos: ADO.NET, EF Core, LINQ y rendimiento | 81-100 | Persistencia y rendimiento |
| 6. Seguridad, identidad, despliegue y observabilidad .NET | 101-120 | Seguridad y operacion |
| 7. Jakarta EE 11: plataforma, perfiles y servicios empresariales | 121-140 | Cobertura dedicada Jakarta EE |
| 8. Comparativa .NET / Jakarta EE y casos de arquitectura | 141-160 | Transferencia entre stacks y casos |

**Fuentes de contraste 2026:** [Microsoft .NET releases/support](https://learn.microsoft.com/en-us/dotnet/core/releases-and-support) | [CLR](https://learn.microsoft.com/en-us/dotnet/standard/clr) | [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/) | [EF Core](https://learn.microsoft.com/en-us/ef/core/) | [Jakarta EE 11](https://jakarta.ee/specifications/platform/11/)

# 1. .NET moderno y arquitectura base

**1.** En el ecosistema actual de Microsoft, ¿qué implementación es la principal para nuevo desarrollo multiplataforma?

**A.** .NET moderno (.NET 5 y posteriores, actualmente .NET 10 como LTS).

**B.** .NET Framework 4.x como única opción recomendada para nuevos proyectos.

**C.** Silverlight.

**D.** ASP clásico.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**2.** ¿Cuál es la diferencia más importante entre .NET moderno y .NET Framework?

**A.** .NET moderno solo sirve para aplicaciones móviles.

**B.** .NET moderno es multiplataforma y es la línea principal de evolución; .NET Framework está ligado principalmente a Windows y a compatibilidad heredada.

**C.** No existe diferencia técnica ni de ciclo de vida.

**D.** .NET Framework es más reciente que .NET moderno.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**3.** A fecha de 2026, ¿qué versión se considera LTS activa y de referencia en los apuntes V2.1?

**A.** .NET 10.

**B.** .NET 7.

**C.** .NET 6.

**D.** .NET Framework 4.8.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**4.** ¿Qué componente proporciona el entorno de ejecución administrado en .NET?

**A.** Kestrel.

**B.** NuGet.

**C.** MSBuild.

**D.** El CLR (Common Language Runtime).

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**5.** ¿Qué incluye normalmente el SDK de .NET que no es necesario en una máquina que solo ejecuta una aplicación publicada adecuadamente?

**A.** El servidor DNS.

**B.** El protocolo HTTP.

**C.** Herramientas de compilación, plantillas y CLI de desarrollo.

**D.** El sistema operativo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**6.** ¿Para qué sirve principalmente el comando `dotnet`?

**A.** Para sustituir al CLR durante la ejecución.

**B.** Para compilar, ejecutar, probar, publicar y gestionar proyectos .NET desde la CLI.

**C.** Para actuar como base de datos relacional.

**D.** Para reemplazar a Git.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**7.** ¿Qué representa la BCL en .NET?

**A.** La biblioteca base de tipos y APIs comunes que usan las aplicaciones .NET.

**B.** Un servidor web incluido en Windows exclusivamente.

**C.** Un formato de bytecode distinto de IL.

**D.** Un gestor de paquetes externo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**8.** ¿Qué significa que una aplicación .NET ejecute código administrado?

**A.** Que todo el código se interpreta línea a línea.

**B.** Que el código se ejecuta bajo los servicios del runtime, como GC, sistema de tipos y manejo de excepciones.

**C.** Que el código se ejecuta únicamente con privilegios de administrador.

**D.** Que no puede acceder a recursos del sistema operativo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**9.** ¿Qué afirmación sobre la portabilidad de .NET moderno es correcta?

**A.** Puede ejecutarse en varios sistemas operativos compatibles, como Windows, Linux y macOS.

**B.** Solo puede ejecutarse dentro de IIS.

**C.** Solo puede ejecutarse en Windows Server.

**D.** Es portable únicamente si se utiliza Visual Studio.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**10.** ¿Cuál es la función principal de NuGet?

**A.** Gestionar paquetes y dependencias del ecosistema .NET.

**B.** Servir peticiones HTTP.

**C.** Administrar usuarios de ASP.NET Core.

**D.** Compilar IL a código máquina durante la ejecución.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**11.** ¿Cuál es la función principal de MSBuild?

**A.** Gestionar autenticación y autorización.

**B.** Alojar aplicaciones web en producción.

**C.** Ser el ORM oficial de .NET.

**D.** Orquestar el proceso de compilación a partir de proyectos y objetivos de build.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**12.** ¿Qué es ASP.NET Core dentro del ecosistema .NET?

**A.** El sistema de paquetes de .NET.

**B.** Un framework para aplicaciones y servicios web modernos.

**C.** El recolector de basura del CLR.

**D.** Una versión de SQL Server.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**13.** En una publicación framework-dependent, ¿qué se espera normalmente del entorno de destino?

**A.** Que use obligatoriamente IIS.

**B.** Que el ejecutable incluya siempre todo el sistema operativo.

**C.** Que tenga instalado un runtime .NET compatible.

**D.** Que no exista ningún runtime .NET.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**14.** En una publicación self-contained, ¿qué ventaja principal se obtiene?

**A.** NuGet deja de utilizarse.

**B.** La aplicación incluye el runtime necesario y reduce la dependencia de una instalación global compatible.

**C.** No necesita sistema operativo.

**D.** El código deja de ser administrado.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**15.** ¿Qué diferencia conceptual hay entre una versión LTS y una STS de .NET?

**A.** La LTS solo sirve para escritorio.

**B.** La STS siempre es más segura que la LTS.

**C.** La STS no recibe actualizaciones de seguridad.

**D.** La LTS tiene una ventana de soporte más larga; la STS una ventana más corta.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**16.** Si un servidor solo debe ejecutar una aplicación .NET y no compilarla, ¿qué instalación suele ser suficiente si la publicación es framework-dependent?

**A.** El código fuente del proyecto.

**B.** MSBuild instalado de forma independiente siempre.

**C.** El runtime correspondiente, no necesariamente el SDK completo.

**D.** Visual Studio Enterprise.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**17.** Para una API HTTP nueva en .NET, ¿qué tecnología encaja mejor como base general?

**A.** ASP clásico.

**B.** Windows Forms.

**C.** WCF como única opción obligatoria.

**D.** ASP.NET Core.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**18.** ¿Para qué se utiliza un Target Framework Moniker como `net10.0` en un proyecto?

**A.** Para definir el nombre de la base de datos.

**B.** Para seleccionar el servidor DNS.

**C.** Para indicar el framework objetivo contra el que se compila el proyecto.

**D.** Para fijar la versión de Git.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**19.** ¿Qué describe mejor Native AOT en .NET?

**A.** Una característica exclusiva de .NET Framework 2.0.

**B.** Un modo de NuGet para descargar paquetes sin red.

**C.** Un intérprete de C# que elimina la compilación.

**D.** Una modalidad que compila anticipadamente a código nativo para ciertos escenarios y puede mejorar arranque y huella, con limitaciones de compatibilidad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**20.** ¿Qué afirmación es correcta al elegir tecnología .NET para un sistema nuevo?

**A.** Debe elegirse siempre .NET Framework por tener más años.

**B.** La elección del IDE determina el runtime de producción.

**C.** Debe partirse de los requisitos y del stack moderno soportado, evitando asumir que .NET Framework es la opción por defecto.

**D.** El lenguaje determina por sí solo toda la arquitectura.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 2. CLR, IL, CTS, CLS, assemblies y gestión de recursos

**21.** ¿Qué suele generar el compilador de C# antes de la ejecución tradicional en el CLR?

**A.** HTML.

**B.** Código SQL.

**C.** Bytecode de la JVM.

**D.** IL/CIL junto con metadatos dentro de assemblies.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**22.** ¿Qué hace la compilación JIT?

**A.** Convierte IL en código máquina cuando el código va a ejecutarse.

**B.** Convierte SQL en C#.

**C.** Genera archivos de configuración.

**D.** Descarga paquetes de NuGet.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**23.** ¿Qué diferencia fundamental existe entre JIT y AOT?

**A.** AOT interpreta el código y JIT nunca compila.

**B.** Son dos nombres del mismo mecanismo.

**C.** JIT solo sirve para Java y AOT solo para .NET.

**D.** JIT compila durante la ejecución; AOT compila anticipadamente antes de ejecutar en el destino.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**24.** ¿Qué define principalmente el CTS?

**A.** El protocolo de Kestrel.

**B.** Cómo se declaran, usan y gestionan los tipos en el entorno .NET para favorecer interoperabilidad entre lenguajes.

**C.** Las reglas de estilo de C#.

**D.** Los comandos de NuGet.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**25.** ¿Qué es el CLS?

**A.** El compilador JIT.

**B.** La biblioteca de acceso a datos.

**C.** Un subconjunto de reglas del sistema de tipos orientado a que APIs públicas sean interoperables entre lenguajes .NET.

**D.** El recolector de basura.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**26.** ¿Cuál es la relación correcta entre CLR, CTS y CLS?

**A.** Son tres nombres equivalentes.

**B.** CTS ejecuta el código y CLR solo define nombres de tipos.

**C.** CLR y CTS son gestores de paquetes y CLS es un servidor web.

**D.** CLR es el runtime; CTS define el sistema común de tipos; CLS define reglas de interoperabilidad sobre un subconjunto del CTS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**27.** ¿Qué es un assembly en .NET?

**A.** Una tabla de base de datos.

**B.** Un paquete Docker.

**C.** Un archivo de configuración de Kestrel.

**D.** Una unidad lógica de código y recursos con IL, metadatos y manifiesto, normalmente en DLL o EXE.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**28.** ¿Qué información se asocia al manifiesto de un assembly?

**A.** Reglas de firewall del sistema operativo.

**B.** Únicamente contraseñas de usuarios.

**C.** Identidad del assembly, archivos, versión y referencias/dependencias relevantes.

**D.** Consultas SQL precalculadas.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**29.** ¿Para qué sirven los metadatos incluidos en un assembly?

**A.** Para almacenar únicamente logs de ejecución.

**B.** Para cifrar automáticamente todos los datos.

**C.** Para sustituir completamente al código IL.

**D.** Para describir tipos, miembros, referencias y otra información que el runtime y herramientas pueden inspeccionar.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**30.** ¿Qué responsabilidad principal tiene el Garbage Collector?

**A.** Liberar recursos no administrados aunque sigan referenciados.

**B.** Gestionar automáticamente la memoria de objetos administrados que ya no son alcanzables.

**C.** Eliminar archivos temporales del sistema operativo.

**D.** Cerrar de forma determinista cualquier socket en el instante exacto deseado.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**31.** Para liberar de forma determinista un recurso que implementa `IDisposable`, ¿qué patrón es el más apropiado?

**A.** Usar `using`/`await using` o llamar correctamente a `Dispose` según el caso.

**B.** Reiniciar el proceso.

**C.** Esperar siempre a que actúe el GC.

**D.** Forzar `GC.Collect()` después de cada operación.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**32.** ¿Por qué no debe confiarse en un finalizador para cerrar inmediatamente un recurso externo?

**A.** Porque los finalizadores se ejecutan antes que el constructor.

**B.** Porque su ejecución no es determinista y depende del GC.

**C.** Porque sustituyen a `Dispose` en todos los casos.

**D.** Porque solo funcionan en Linux.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**33.** ¿Qué diferencia básica hay entre tipos valor y tipos referencia?

**A.** Los tipos referencia nunca se gestionan por el GC.

**B.** No existe diferencia en asignación ni semántica.

**C.** Los tipos valor contienen su valor directamente según su semántica; las variables de tipo referencia contienen una referencia a un objeto.

**D.** Los tipos valor solo existen en C++.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**34.** ¿Qué es boxing?

**A.** Comprimir un assembly.

**B.** Convertir IL en SQL.

**C.** Convertir un tipo valor para tratarlo como `object` o una interfaz compatible, normalmente implicando una envoltura/objeto.

**D.** Crear un contenedor Docker.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**35.** ¿Qué aporta el CLR respecto al manejo de excepciones?

**A.** Un modelo estructurado y común de excepciones para código administrado.

**B.** La garantía de que nunca se produce una excepción.

**C.** La conversión automática de cualquier error en código HTTP 200.

**D.** El reemplazo de todas las validaciones de entrada.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**36.** ¿Qué es un delegado en C#/.NET?

**A.** Un servidor de aplicaciones.

**B.** Un tipo seguro que representa referencias a métodos con una firma compatible.

**C.** Un proceso del sistema operativo.

**D.** Un paquete NuGet.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**37.** ¿Qué ventaja aportan los genéricos?

**A.** Permiten reutilización con seguridad de tipos evitando muchas conversiones y casts en tiempo de ejecución.

**B.** Obligan a usar `object` para todo.

**C.** Eliminan por completo la compilación.

**D.** Solo funcionan en colecciones de strings.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**38.** ¿Qué permite la reflexión?

**A.** Inspeccionar tipos, miembros y metadatos en tiempo de ejecución y, cuando procede, invocarlos dinámicamente.

**B.** Desactivar el sistema de tipos.

**C.** Evitar todos los metadatos.

**D.** Transformar automáticamente una base de datos SQL en NoSQL.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**39.** Si una aplicación mantiene referencias a objetos que ya no necesita, ¿el GC garantiza que no exista consumo excesivo de memoria?

**A.** No, porque .NET no tiene GC.

**B.** No; mientras los objetos sigan alcanzables, el GC no puede considerarlos basura.

**C.** Sí; el GC elimina cualquier objeto que lleve más de un minuto creado.

**D.** Sí; el GC identifica la intención del programador.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**40.** ¿Qué afirmación sobre IL y código máquina es correcta?

**A.** El CLR ejecuta C# fuente directamente sin etapa intermedia.

**B.** IL es siempre el código máquina final x86.

**C.** IL es independiente de una CPU concreta en un grado mayor; el runtime/JIT o AOT produce código adecuado para el destino.

**D.** IL solo se usa en archivos de texto.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 3. C#, LINQ, asincronía, herramientas y paquetes

**41.** ¿Qué expresa principalmente `async`/`await` en C#?

**A.** Un modelo para componer operaciones asíncronas sin bloquear innecesariamente el hilo mientras se espera.

**B.** Que se crea un proceso independiente.

**C.** Que el código se ejecutará siempre en varios núcleos en paralelo.

**D.** Que se desactiva el manejo de excepciones.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**42.** ¿Qué representa normalmente `Task` o `Task<T>`?

**A.** Un assembly.

**B.** Un hilo físico dedicado obligatorio.

**C.** Una transacción SQL.

**D.** Una operación asíncrona que puede completarse en el futuro, con o sin resultado.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**43.** ¿Qué problema puede causar abusar de `.Result` o `.Wait()` sobre operaciones asíncronas?

**A.** Que la base de datos pierda índices.

**B.** Bloqueos, pérdida de escalabilidad y, en ciertos contextos, interbloqueos.

**C.** Que el compilador convierta el proyecto en Java.

**D.** Que NuGet elimine paquetes.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**44.** ¿Qué significa ejecución diferida en muchas consultas LINQ?

**A.** Que la consulta se ejecuta dos veces obligatoriamente.

**B.** Que la consulta siempre se ejecuta al compilar.

**C.** Que la consulta no se evalúa hasta que se enumera o materializa.

**D.** Que LINQ solo funciona con bases de datos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**45.** Cuando se usa LINQ sobre `IQueryable` de EF Core, ¿qué ocurre normalmente?

**A.** El CLR delega la consulta en NuGet.

**B.** El proveedor intenta traducir la expresión a una consulta del origen, por ejemplo SQL.

**C.** LINQ se convierte en JavaScript.

**D.** Todo se descarga siempre a memoria antes de filtrar.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**46.** ¿Qué diferencia general hay entre `IEnumerable<T>` e `IQueryable<T>` en acceso a datos?

**A.** `IEnumerable` solo admite SQL y `IQueryable` solo archivos.

**B.** Son tipos idénticos.

**C.** `IQueryable` obliga a cargar toda la tabla antes de filtrar.

**D.** `IEnumerable` opera sobre enumeración .NET; `IQueryable` puede representar una consulta que un proveedor traduzca a otro lenguaje/origen.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**47.** ¿Qué aporta una instrucción `using` sobre un objeto `IDisposable`?

**A.** Convierte el objeto en estático.

**B.** Garantiza la llamada a `Dispose` al salir del ámbito, incluso ante excepciones, según el patrón generado.

**C.** Crea un nuevo proceso.

**D.** Hace que el objeto nunca se recoja por GC.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**48.** ¿Cuál de estas afirmaciones es correcta?

**A.** `await` desactiva el scheduler.

**B.** `await` solo funciona con CPU-bound.

**C.** `await` obliga a crear un hilo por petición.

**D.** `await` no significa que una operación sea paralela; permite suspender lógicamente el método hasta que la tarea finalice.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**49.** ¿Qué característica definen principalmente los `record` de C#?

**A.** Una forma concisa de modelar datos con semántica de igualdad por valor especialmente útil para modelos inmutables o DTOs.

**B.** Un sustituto del CLR.

**C.** Un archivo de logging.

**D.** Un tipo exclusivo para acceder a SQL Server.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**50.** ¿Para qué sirven las nullable reference types?

**A.** Para permitir que cualquier tipo valor sea siempre null sin `?`.

**B.** Para cifrar referencias.

**C.** Para expresar y analizar en compilación si una referencia puede ser nula, reduciendo errores de null.

**D.** Para desactivar todas las advertencias del compilador.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**51.** ¿Qué permite el pattern matching moderno de C#?

**A.** Gestionar paquetes NuGet.

**B.** Compilar a JVM.

**C.** Comprobar formas, tipos y propiedades de datos con patrones expresivos en `is` y `switch`.

**D.** Ejecutar consultas SQL sin proveedor.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**52.** ¿Cuál es una ventaja de los genéricos en APIs y colecciones?

**A.** Eliminar la necesidad de compilar.

**B.** Mantener información de tipos y reducir casts inseguros.

**C.** Convertir todos los tipos a string.

**D.** Obligar a serializar todos los valores.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**53.** ¿Qué hace `dotnet restore`?

**A.** Restaura las dependencias de paquetes necesarias para el proyecto.

**B.** Ejecuta las pruebas unitarias.

**C.** Publica la aplicación en producción.

**D.** Repara el sistema operativo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**54.** ¿Cuál es la relación correcta entre NuGet y MSBuild?

**A.** Son dos nombres para la misma herramienta.

**B.** NuGet gestiona paquetes; MSBuild ejecuta el proceso de construcción del proyecto.

**C.** NuGet aloja ASP.NET Core y MSBuild autentica usuarios.

**D.** NuGet es un compilador JIT y MSBuild un ORM.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**55.** ¿Qué contiene normalmente un archivo `.csproj` moderno?

**A.** El almacenamiento de sesiones de Kestrel.

**B.** El código máquina generado por el JIT.

**C.** La definición del proyecto, TFM, propiedades y referencias, entre otros elementos de build.

**D.** Las credenciales de todos los usuarios.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**56.** ¿Qué diferencia práctica hay entre `dotnet build` y `dotnet publish`?

**A.** `build` compila; `publish` prepara un conjunto desplegable con los artefactos necesarios según la modalidad elegida.

**B.** `build` instala el sistema operativo de destino.

**C.** `publish` solo ejecuta tests y `build` sube a Internet.

**D.** Son exactamente equivalentes.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**57.** ¿Qué comando está orientado específicamente a ejecutar la suite de pruebas de un proyecto?

**A.** `dotnet nuget push`.

**B.** `dotnet pack`.

**C.** `dotnet clean`.

**D.** `dotnet test`.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**58.** ¿Qué hace habitualmente `dotnet run` durante desarrollo?

**A.** Compila si es necesario y ejecuta el proyecto seleccionado.

**B.** Publica automáticamente en producción.

**C.** Ejecuta únicamente migraciones de base de datos.

**D.** Crea una imagen Docker obligatoriamente.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**59.** ¿Para qué sirven herramientas como `dotnet-counters` o `dotnet-trace`?

**A.** Para sustituir al control de versiones.

**B.** Para gestionar DNS.

**C.** Para diagnóstico y observación del comportamiento de aplicaciones .NET en ejecución.

**D.** Para crear esquemas de base de datos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**60.** ¿Qué afirmación sobre Visual Studio, VS Code y Rider es correcta?

**A.** VS Code sustituye al runtime de producción.

**B.** Una aplicación compilada con Rider solo puede ejecutarse dentro de Rider.

**C.** El CLR forma parte exclusivamente de Visual Studio.

**D.** Son herramientas de desarrollo; la aplicación .NET no depende conceptualmente de un IDE concreto para ejecutarse.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 4. ASP.NET Core: pipeline, DI, APIs y configuración

**61.** ¿Qué es el pipeline de middleware de ASP.NET Core?

**A.** Un gestor de paquetes.

**B.** Una tabla de base de datos.

**C.** Un compilador alternativo de C#.

**D.** Una secuencia de componentes que procesan la petición y la respuesta HTTP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**62.** ¿Qué característica incorpora ASP.NET Core de forma nativa para componer servicios?

**A.** Un contenedor de inyección de dependencias integrado.

**B.** Un lenguaje diferente de C#.

**C.** Un servidor Oracle embebido.

**D.** Un sistema operativo propio.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**63.** ¿Qué función cumple el routing?

**A.** Descargar paquetes NuGet.

**B.** Compilar assemblies.

**C.** Gestionar el GC.

**D.** Relacionar una petición HTTP con el endpoint que debe atenderla.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**64.** ¿Qué afirmación distingue razonablemente Minimal APIs y MVC Controllers?

**A.** Minimal APIs no pueden devolver HTTP.

**B.** MVC Controllers no admiten inyección de dependencias.

**C.** Solo Minimal APIs funcionan en .NET moderno.

**D.** Ambos sirven para APIs; Minimal APIs reducen ceremonia en escenarios simples y controllers aportan una estructura más clásica y rica para aplicaciones complejas.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**65.** ¿Qué es Kestrel?

**A.** El compilador de C#.

**B.** El gestor de paquetes.

**C.** El servidor web multiplataforma utilizado por ASP.NET Core.

**D.** El ORM de .NET.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**66.** ¿Por qué se coloca a menudo ASP.NET Core detrás de un reverse proxy?

**A.** Porque ASP.NET Core solo funciona con Apache.

**B.** Porque Kestrel no soporta HTTP.

**C.** Para integrar terminación TLS, balanceo, políticas de borde u otras capacidades de infraestructura, según el despliegue.

**D.** Porque el CLR exige IIS.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**67.** ¿Qué finalidad tiene `appsettings.json`?

**A.** Sustituir a la base de datos.

**B.** Proporcionar configuración de aplicación que puede combinarse con otras fuentes y entornos.

**C.** Almacenar assemblies compilados.

**D.** Contener únicamente contraseñas en texto claro.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**68.** ¿Cuál es una práctica correcta con secretos de producción?

**A.** Incluirlos en mensajes de log para facilitar soporte.

**B.** Mantenerlos fuera del código y de repositorios, usando almacenes de secretos o mecanismos seguros del entorno.

**C.** Guardarlos en `appsettings.json` y subirlos a Git.

**D.** Codificarlos en Base64 y considerarlos cifrados.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**69.** ¿Para qué sirven los entornos Development, Staging y Production en ASP.NET Core?

**A.** Para variar configuración y comportamiento según el contexto de ejecución.

**B.** Para definir el tipo de CPU.

**C.** Para elegir el lenguaje de programación.

**D.** Para reemplazar el control de versiones.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**70.** En un pipeline típico con autenticación y autorización, ¿qué orden conceptual es correcto?

**A.** Autenticar antes de autorizar, porque la autorización necesita una identidad establecida.

**B.** Autorizar antes de autenticar siempre.

**C.** No importa el orden de middleware.

**D.** Ejecutar autorización después de devolver la respuesta.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**71.** ¿Qué diferencia hay entre autenticación y autorización?

**A.** Autenticación decide permisos y autorización crea la contraseña.

**B.** Son sinónimos exactos.

**C.** Autorización ocurre únicamente en la base de datos.

**D.** Autenticación determina quién es el usuario; autorización decide qué puede hacer.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**72.** ¿Qué ciclos de vida ofrece típicamente el contenedor DI de ASP.NET Core?

**A.** GET, POST y DELETE.

**B.** Read, Write y Execute.

**C.** Transient, Scoped y Singleton.

**D.** Local, Remote y Hybrid.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**73.** En una aplicación web típica, ¿qué lifetime se usa habitualmente para `DbContext` cuando se registra con EF Core?

**A.** Singleton obligatorio.

**B.** Scoped, normalmente una instancia por ámbito/petición.

**C.** Static global compartido entre todas las peticiones.

**D.** Transient obligatorio en cualquier caso.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**74.** ¿Qué finalidad tiene un Controller en ASP.NET Core MVC/API?

**A.** Agrupar acciones/endpoints y coordinar entrada HTTP con la lógica de aplicación.

**B.** Definir el esquema físico de la base de datos.

**C.** Ejecutar el GC.

**D.** Gestionar paquetes NuGet.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**75.** ¿Qué es model binding?

**A.** La creación de índices SQL.

**B.** La compilación de C# a IL.

**C.** El proceso de obtener datos de la petición y construir/asignar parámetros u objetos del modelo de entrada.

**D.** La autenticación del usuario.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**76.** ¿Qué papel cumple la validación de modelos?

**A.** Cifrar la base de datos.

**B.** Comprobar reglas de entrada y detectar datos inválidos antes de procesarlos como válidos.

**C.** Sustituir a la autorización.

**D.** Compilar el proyecto.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**77.** ¿Qué precaución existe con los archivos estáticos?

**A.** Kestrel cifra automáticamente cualquier archivo estático.

**B.** Los archivos servidos como públicos no deben contener secretos ni material que requiera autorización sin un diseño específico.

**C.** El middleware de archivos estáticos aplica siempre las mismas políticas de autorización que un controller protegido.

**D.** Los archivos estáticos nunca son accesibles desde Internet.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**78.** ¿Qué middleware debe situarse normalmente al principio para capturar excepciones producidas por componentes posteriores?

**A.** Un manejador global de excepciones configurado para el entorno.

**B.** Ninguno; las excepciones no se gestionan en ASP.NET Core.

**C.** El middleware de autorización al final de la respuesta.

**D.** El middleware de archivos estáticos únicamente.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**79.** ¿Qué aportan los Health Checks?

**A.** La eliminación de logs.

**B.** La compilación AOT.

**C.** Una copia de seguridad automática de la base de datos.

**D.** Endpoints/sondeos para expresar el estado de salud de la aplicación y dependencias relevantes.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**80.** ¿Qué afirmación sobre rate limiting y caching es correcta?

**A.** El caching hace innecesaria la consistencia de datos.

**B.** El rate limiting sustituye siempre al firewall y a la autenticación.

**C.** Son capacidades de infraestructura/aplicación que deben configurarse según el comportamiento y riesgos del servicio; no sustituyen autenticación ni autorización.

**D.** Ambos son funciones exclusivas de EF Core.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 5. Datos: ADO.NET, EF Core, LINQ y rendimiento

**81.** ¿Qué describe mejor ADO.NET?

**A.** El servidor web de ASP.NET Core.

**B.** Un conjunto de APIs de acceso a datos de bajo nivel relativo, con conexiones, comandos, lectores y adaptadores/proveedores.

**C.** El ORM de alto nivel obligatorio de .NET.

**D.** El sistema de autenticación de .NET.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**82.** ¿Qué es Entity Framework Core?

**A.** Un ORM moderno para .NET que permite mapear entidades y consultar/persistir datos mediante un modelo de objetos.

**B.** Una implementación de OAuth 2.0.

**C.** Un gestor de paquetes.

**D.** Un reemplazo del CLR.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**83.** ¿Qué representa normalmente `DbContext`?

**A.** Un servidor HTTP.

**B.** Una caché distribuida obligatoria.

**C.** Un assembly de sistema.

**D.** Una unidad de trabajo/sesión con el modelo y la base de datos, responsable de consultas, tracking y persistencia.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**84.** ¿Qué representa `DbSet<TEntity>`?

**A.** Un middleware de autenticación.

**B.** Un paquete NuGet comprimido.

**C.** Un punto de acceso a un conjunto de entidades de un tipo dentro del modelo de EF Core.

**D.** Una conexión TCP.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**85.** ¿Qué ventaja aporta usar LINQ con EF Core?

**A.** Garantizar que cualquier método C# se traduzca a SQL.

**B.** Expresar consultas con tipos .NET que el proveedor intenta traducir al origen de datos.

**C.** Eliminar siempre la necesidad de índices.

**D.** Evitar cualquier acceso a la red.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**86.** ¿Qué es el change tracking de EF Core?

**A.** El seguimiento del estado y cambios de entidades para determinar qué debe persistirse.

**B.** Un sistema de control de versiones Git.

**C.** Un log de Kestrel.

**D.** Una auditoría de seguridad automática completa.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**87.** ¿Cuándo es especialmente útil `AsNoTracking()`?

**A.** En consultas de solo lectura donde no se necesita que el contexto detecte cambios de las entidades.

**B.** Cuando se va a modificar y guardar cada entidad necesariamente.

**C.** Para iniciar una transacción distribuida.

**D.** Para desactivar la seguridad SQL.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**88.** ¿Qué son las migraciones de EF Core?

**A.** Un sistema para migrar .NET a Java.

**B.** Un reemplazo de las pruebas de integración.

**C.** Un mecanismo para versionar y aplicar cambios del esquema derivados del modelo de datos.

**D.** Una copia de seguridad completa de la base de datos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**89.** ¿Qué problema describe el patrón N+1 en acceso a datos?

**A.** Crear N índices automáticamente.

**B.** Ejecutar exactamente N consultas en paralelo de forma óptima.

**C.** Guardar N entidades en una sola transacción.

**D.** Realizar una consulta inicial y después muchas consultas adicionales, por ejemplo una por cada elemento, generando sobrecoste.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**90.** ¿Qué técnica puede ayudar a evitar un N+1 cuando realmente se necesitan relaciones asociadas?

**A.** Añadir `ToString()` a cada entidad.

**B.** Crear un DbContext singleton global.

**C.** Diseñar la consulta para traer los datos necesarios de forma controlada, por ejemplo con proyección o carga eager adecuada.

**D.** Desactivar todos los índices.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**91.** ¿Qué riesgo tiene activar lazy loading sin analizar el patrón de acceso?

**A.** Impide completamente consultar relaciones.

**B.** Puede ocultar consultas adicionales y favorecer N+1 o acceso inesperado a la base de datos.

**C.** Deshabilita todas las transacciones.

**D.** Convierte EF Core en ADO.NET puro.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**92.** Cuando `SaveChanges` ejecuta varias modificaciones en una sola llamada y el proveedor admite transacciones, ¿qué comportamiento ofrece normalmente EF Core?

**A.** Crea una transacción distribuida obligatoria.

**B.** Nunca usa transacciones.

**C.** Hace un commit por propiedad individual.

**D.** Usa una transacción para que la llamada se aplique de forma atómica según las capacidades del proveedor.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**93.** ¿Cuándo puede ser necesario controlar una transacción explícitamente?

**A.** Siempre, incluso para cualquier SELECT.

**B.** Nunca, porque las transacciones no existen en EF Core.

**C.** Solo si se usa Kestrel.

**D.** Cuando una unidad de negocio abarca varias operaciones/SaveChanges o recursos y se necesita delimitar la atomicidad de forma concreta.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**94.** ¿Qué precaución debe tomarse al ejecutar SQL sin procesar?

**A.** Concatenar siempre strings para mayor velocidad.

**B.** Desactivar validación y permisos.

**C.** Parametrizar correctamente valores y evitar concatenar entrada del usuario para reducir riesgo de inyección.

**D.** Usar Base64 como sustituto de parametrización.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**95.** ¿Qué afirmación sobre connection pooling es correcta?

**A.** Cada `Open` crea obligatoriamente una conexión física nueva sin reutilización.

**B.** EF Core no puede usar pooling de conexiones.

**C.** Los proveedores de datos pueden reutilizar conexiones físicas mediante pools; abrir/cerrar lógicamente una conexión no implica siempre crear/destruir una conexión física.

**D.** El pooling elimina la necesidad de cerrar conexiones.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**96.** ¿Para qué sirve un token de concurrencia en EF Core?

**A.** Para autenticar al usuario HTTP.

**B.** Para detectar conflictos cuando otro proceso modifica una fila entre lectura y actualización, según la estrategia elegida.

**C.** Para cifrar paquetes NuGet.

**D.** Para compilar consultas LINQ.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**97.** Si una expresión LINQ no puede traducirse al proveedor de EF Core en una parte esencial de la consulta, ¿qué debe hacer el desarrollador?

**A.** Revisar la consulta y separar o reformular lo que deba ejecutarse en servidor o cliente de forma consciente.

**B.** Cambiar Kestrel por IIS.

**C.** Suponer que siempre se ejecutará correctamente en SQL.

**D.** Desactivar el compilador.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**98.** ¿Qué efecto suele tener `ToList()` sobre una consulta LINQ?

**A.** Materializa los resultados en ese punto y ejecuta la consulta si era diferida.

**B.** Hace que la consulta deje de usar memoria.

**C.** Activa una transacción distribuida.

**D.** Convierte la consulta en una migración.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**99.** Para paginar grandes conjuntos de datos, ¿qué enfoque es mejor que cargar todo y recortar en memoria?

**A.** Desactivar índices.

**B.** Crear un DbContext global para toda la aplicación.

**C.** Usar `ToList()` de toda la tabla y después `Skip/Take` en memoria.

**D.** Aplicar paginación en la consulta del origen, con orden estable y estrategia adecuada al caso.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**100.** ¿Cuál es la diferencia conceptual más correcta entre ADO.NET y EF Core?

**A.** ADO.NET solo sirve para archivos de texto.

**B.** ADO.NET ofrece acceso más directo a proveedor/comandos; EF Core añade abstracción ORM, tracking y LINQ sobre un modelo de entidades.

**C.** EF Core sustituye al motor de base de datos.

**D.** ADO.NET es un lenguaje y EF Core un sistema operativo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 6. Seguridad, identidad, despliegue y observabilidad .NET

**101.** ¿Qué debe ocurrir antes de aplicar una regla de autorización basada en identidad?

**A.** Debe haberse publicado self-contained.

**B.** La petición debe haberse autenticado o disponer de una identidad establecida de forma válida.

**C.** Debe haberse descargado un paquete NuGet.

**D.** Debe haberse ejecutado una migración de EF Core.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**102.** ¿Qué diferencia general existe entre autenticación por cookie y bearer token?

**A.** Bearer solo puede usarse en aplicaciones de escritorio.

**B.** La cookie suele mantener una sesión web mediante cookie; un bearer token se envía como credencial en cada petición, común en APIs.

**C.** La cookie cifra automáticamente toda la base de datos y bearer no.

**D.** Son exactamente el mismo mecanismo de transporte.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**103.** ¿Qué es un claim en el modelo de identidad?

**A.** Un tipo de middleware para archivos estáticos.

**B.** Una tabla obligatoria de EF Core.

**C.** Un assembly nativo.

**D.** Una afirmación sobre una identidad, como identificador, rol, ámbito u otro atributo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**104.** ¿Qué ventaja tienen las políticas de autorización frente a dispersar comprobaciones manuales?

**A.** Impiden usar roles.

**B.** Sustituyen a HTTPS.

**C.** Permiten centralizar requisitos y combinaciones de claims/roles de forma reutilizable y comprobable.

**D.** Eliminan la necesidad de autenticar.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**105.** ¿Qué es ASP.NET Core Identity?

**A.** El CLR.

**B.** El ORM EF Core.

**C.** Un sistema de pertenencia/gestión de usuarios y credenciales para aplicaciones ASP.NET Core, opcional según arquitectura.

**D.** El protocolo OAuth 2.0.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**106.** ¿Cuál es el propósito principal de OAuth 2.0?

**A.** Definir por sí solo la identidad del usuario como protocolo de autenticación completo.

**B.** Delegar autorización para acceso a recursos mediante tokens y scopes.

**C.** Cifrar conexiones TLS.

**D.** Gestionar paquetes NuGet.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**107.** ¿Qué aporta OpenID Connect sobre OAuth 2.0?

**A.** Un compilador AOT.

**B.** Una capa de identidad/autenticación estandarizada, incluyendo ID Token y endpoints asociados.

**C.** Un formato de assembly.

**D.** Un ORM para .NET.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**108.** ¿Para qué sirve ASP.NET Core Data Protection?

**A.** Para proteger criptográficamente datos de aplicación como cookies o tokens internos según el sistema de claves y propósito.

**B.** Para generar contraseñas de usuarios automáticamente.

**C.** Para reemplazar TLS.

**D.** Para cifrar toda base de datos sin configuración.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**109.** ¿Qué riesgo combate principalmente la protección antiforgery en aplicaciones web basadas en cookies?

**A.** Ataques de fuerza bruta sobre SSH.

**B.** Fugas de memoria del GC.

**C.** Inyección SQL en consultas ADO.NET.

**D.** Ataques CSRF que aprovechan credenciales enviadas automáticamente por el navegador.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**110.** ¿Qué papel tiene HTTPS/TLS?

**A.** Autorizar automáticamente cada acción del usuario.

**B.** Cifrar datos almacenados en la base de datos por defecto.

**C.** Proteger la confidencialidad e integridad del tráfico en tránsito y autenticar el endpoint según la configuración de certificados.

**D.** Eliminar la necesidad de validar certificados.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**111.** ¿Cuál es una práctica correcta para secretos como cadenas de conexión o claves API?

**A.** Imprimirlos en logs de diagnóstico.

**B.** Usar mecanismos de secretos/variables/gestores seguros y limitar permisos, evitando incorporarlos al repositorio.

**C.** Codificarlos en hexadecimal y subirlos a Git.

**D.** Guardar los secretos en comentarios del código.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**112.** ¿Qué ventaja aporta el logging estructurado?

**A.** Sustituir las métricas.

**B.** Eliminar la necesidad de IDs de correlación.

**C.** Registrar eventos con campos y propiedades que facilitan búsqueda, correlación y análisis automatizado.

**D.** Garantizar que nunca se almacenen datos sensibles.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**113.** ¿Qué debe comprobar un health check bien diseñado?

**A.** Todas las contraseñas configuradas.

**B.** El contenido completo de la base de datos.

**C.** El estado de la aplicación y solo las dependencias relevantes para el tipo de sonda, sin exponer información sensible.

**D.** La versión de cada paquete de desarrollo al usuario anónimo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**114.** ¿Qué aporta OpenTelemetry?

**A.** Un estándar/ecosistema para instrumentar y exportar trazas, métricas y logs de forma interoperable.

**B.** Un sistema operativo.

**C.** Un gestor de paquetes.

**D.** Un ORM.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**115.** ¿Qué ventaja ofrece contenerizar una aplicación .NET?

**A.** Eliminar la necesidad de aplicar parches al runtime.

**B.** Hacer que la aplicación sea inmune a vulnerabilidades.

**C.** Convertir automáticamente una aplicación monolítica en microservicios.

**D.** Empaquetar aplicación y dependencias de ejecución en una imagen reproducible y desplegable en entornos compatibles.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**116.** ¿Qué publicación suele producir artefactos más pequeños: framework-dependent o self-contained?

**A.** Framework-dependent, porque reutiliza un runtime instalado en el destino.

**B.** Native AOT y framework-dependent son sinónimos.

**C.** Self-contained siempre.

**D.** Ambas pesan exactamente lo mismo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**117.** ¿Qué es single-file publishing?

**A.** Una opción de publicación que agrupa gran parte de los artefactos de la aplicación en un único archivo para facilitar distribución.

**B.** Un tipo de base de datos.

**C.** Un reemplazo de NuGet.

**D.** Un protocolo de autenticación.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**118.** ¿Qué consideración existe al usar Native AOT?

**A.** Obliga a usar Windows.

**B.** Elimina la necesidad de pruebas.

**C.** Hace que reflection sea siempre ilimitada.

**D.** Puede mejorar arranque y huella, pero ciertas técnicas dinámicas o librerías pueden requerir adaptación y pruebas de compatibilidad.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**119.** Si Kestrel está detrás de un reverse proxy, ¿qué información debe configurarse con cuidado?

**A.** El código IL de los assemblies.

**B.** La configuración del GC del navegador.

**C.** Los paquetes NuGet del cliente.

**D.** Cabeceras reenviadas y confianza en proxies para reconstruir correctamente esquema, IP y host cuando proceda.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**120.** ¿Qué principio de seguridad debe aplicarse a la identidad del proceso y credenciales de una aplicación?

**A.** Mínimo privilegio: conceder solo permisos necesarios y separar responsabilidades.

**B.** Guardar permisos en el código fuente.

**C.** Compartir una cuenta con otras aplicaciones para simplificar.

**D.** Ejecutar siempre como administrador/root para evitar errores.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 7. Jakarta EE 11: plataforma, perfiles y servicios empresariales

**Nota de actualidad:** este bloque usa Jakarta EE 11 y Java SE 17+ como referencia, no material Java EE antiguo.

**121.** ¿Qué versión mínima de Java SE requiere Jakarta EE 11?

**A.** Java SE 17.

**B.** Java SE 11 obligatoriamente.

**C.** Java SE 8.

**D.** Java SE 6.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**122.** ¿Qué perfiles forman la estructura de Jakarta EE 11?

**A.** Servlet, JDBC y JVM como únicos perfiles.

**B.** Desktop, Mobile y Cloud.

**C.** Basic, Pro y Enterprise.

**D.** Core Profile, Web Profile y Platform.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**123.** ¿Qué función cumple CDI?

**A.** Compilación de bytecode.

**B.** Mapeo objeto-relacional.

**C.** Inyección de dependencias y gestión contextual del ciclo de vida de componentes.

**D.** Gestión de paquetes Maven.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**124.** ¿Qué especificación se ocupa del mapeo objeto-relacional en Jakarta EE?

**A.** Jakarta Validation.

**B.** Jakarta Persistence.

**C.** Jakarta REST.

**D.** Jakarta Mail.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**125.** ¿Qué objeto es central en Jakarta Persistence para gestionar entidades?

**A.** `HttpContext`.

**B.** `NuGetClient`.

**C.** `EntityManager`.

**D.** `DbContext`.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**126.** ¿Qué es JPQL?

**A.** El lenguaje de configuración de Maven.

**B.** El compilador de Java.

**C.** Un servidor de aplicaciones.

**D.** Un lenguaje de consulta orientado al modelo de entidades de Jakarta Persistence, no al esquema SQL físico directamente.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**127.** ¿Qué especificación coordina transacciones empresariales en Jakarta EE?

**A.** Jakarta Servlet.

**B.** Jakarta JSON Binding.

**C.** Jakarta Faces.

**D.** Jakarta Transactions.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**128.** ¿Qué especificación se usa para servicios RESTful en Jakarta EE?

**A.** Jakarta Persistence.

**B.** Jakarta REST.

**C.** Jakarta Mail.

**D.** Jakarta Batch.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**129.** ¿Qué ofrece Jakarta Security?

**A.** Un motor SQL.

**B.** Un compilador JIT.

**C.** Un gestor de dependencias.

**D.** APIs y mecanismos estandarizados de autenticación/autorización integrados con la plataforma.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**130.** ¿Qué finalidad tiene Jakarta Validation?

**A.** Declarar y comprobar restricciones de validación sobre datos/beans.

**B.** Gestionar transacciones distribuidas.

**C.** Administrar paquetes.

**D.** Servir archivos estáticos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**131.** ¿Qué es Jakarta Servlet?

**A.** La especificación base para componentes web que procesan peticiones/respuestas HTTP en el contenedor web.

**B.** Un gestor de paquetes.

**C.** Un ORM.

**D.** Un protocolo de autenticación.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**132.** ¿Qué es Jakarta Faces?

**A.** El reemplazo de CDI.

**B.** Un framework de componentes de interfaz web del lado servidor incluido en el ámbito de Jakarta EE.

**C.** Un servidor de aplicaciones.

**D.** Un sistema de colas.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**133.** ¿Qué incorpora Jakarta Data 1.0 en Jakarta EE 11?

**A.** Un servidor de base de datos incluido.

**B.** Un compilador nativo obligatorio.

**C.** Un lenguaje nuevo que sustituye Java.

**D.** Una especificación para facilitar acceso a datos mediante repositorios y abstracciones estandarizadas.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**134.** ¿Cuál de estos es un runtime/servidor compatible con Jakarta EE, según versiones y certificación correspondientes?

**A.** NuGet.

**B.** Kestrel como implementación de Jakarta EE.

**C.** WildFly, Payara, GlassFish u Open Liberty, entre otros.

**D.** MSBuild.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**135.** ¿Qué función tienen Maven o Gradle en un proyecto Jakarta EE?

**A.** Implementar Jakarta Persistence.

**B.** Gestionar build y dependencias; no son el servidor/runtime Jakarta EE.

**C.** Ejecutar el contenedor web de Jakarta EE por definición.

**D.** Sustituir a la JVM.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**136.** ¿Qué cambio de namespace es característico al migrar de Java EE antiguo a Jakarta EE moderno?

**A.** De `javax.\*` a `jakarta.\*` para las APIs transferidas a Jakarta.

**B.** De `java.\*` a `dotnet.\*`.

**C.** No cambió ningún paquete.

**D.** De `jakarta.\*` a `javax.\*`.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**137.** En Jakarta EE moderno, ¿qué tecnología se prefiere para inyección y componentes gestionados frente al antiguo enfoque de Managed Beans?

**A.** Jakarta Mail.

**B.** CDI.

**C.** JDBC exclusivamente.

**D.** Servlet Filters como contenedor DI.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**138.** ¿Cuál es la diferencia entre una especificación Jakarta EE y una implementación?

**A.** La especificación define contratos/semántica; una implementación concreta proporciona el runtime que los ejecuta.

**B.** Son exactamente el mismo producto.

**C.** Una implementación no necesita cumplir ninguna especificación.

**D.** La especificación es un IDE y la implementación un lenguaje.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**139.** ¿Qué relación hay entre Java SE y Jakarta EE?

**A.** Jakarta EE 11 significa Java SE 11.

**B.** Java SE es un perfil de Jakarta EE.

**C.** Jakarta EE se construye sobre Java SE y añade especificaciones empresariales; no son versiones equivalentes.

**D.** Jakarta EE sustituye completamente a la JVM.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**140.** En un servicio empresarial Jakarta EE, ¿por qué es importante definir correctamente el límite transaccional?

**A.** Para que Maven descargue dependencias.

**B.** Para seleccionar el perfil Core.

**C.** Para asegurar que las operaciones que forman una unidad de negocio confirmen o reviertan de forma coherente.

**D.** Para activar el GC.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# 8. Comparativa .NET / Jakarta EE y casos de arquitectura

En estas preguntas importa identificar capas equivalentes sin asumir que las plataformas son identicas.

**141.** ¿Qué pareja representa mecanismos de inyección de dependencias comparables conceptualmente en ambos stacks?

**A.** EF Core y Jakarta REST.

**B.** DI integrada de ASP.NET Core y CDI en Jakarta EE.

**C.** NuGet y Jakarta Security.

**D.** Kestrel y JPQL.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**142.** ¿Qué pareja representa tecnologías ORM comparables?

**A.** CLR y CDI.

**B.** NuGet y Maven.

**C.** ASP.NET Core y Jakarta Servlet.

**D.** EF Core y Jakarta Persistence.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**143.** ¿Qué pareja representa frameworks/especificaciones para APIs REST?

**A.** ASP.NET Core (controllers/Minimal APIs) y Jakarta REST.

**B.** NuGet y Jakarta Faces.

**C.** MSBuild y CDI.

**D.** ADO.NET y Jakarta Transactions.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**144.** ¿Qué afirmación compara correctamente la seguridad en ambos stacks?

**A.** Solo .NET tiene autorización.

**B.** Solo Jakarta EE admite OAuth/OIDC.

**C.** Ambos distinguen autenticación y autorización y pueden integrarse con identidades externas; los mecanismos concretos son distintos.

**D.** En ambos autenticación y autorización son sinónimos.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**145.** ¿Qué comparación de runtime web es más precisa?

**A.** ASP.NET Core suele ejecutarse sobre Kestrel dentro del proceso .NET; Jakarta EE ejecuta componentes en un runtime/contenedor que implementa sus especificaciones.

**B.** Kestrel implementa Jakarta EE y WildFly implementa ASP.NET Core.

**C.** Ambos requieren IIS obligatoriamente.

**D.** Ninguno necesita un runtime.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**146.** ¿Qué equivalencia de herramientas es más razonable?

**A.** NuGet es el equivalente de WildFly.

**B.** Kestrel equivale a Maven.

**C.** NuGet gestiona paquetes .NET; Maven/Gradle gestionan dependencias/build en Java/Jakarta; MSBuild orquesta el build .NET.

**D.** EF Core equivale a Gradle.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**147.** Un equipo quiere evitar acoplar lógica de negocio al framework web. ¿Qué diseño es válido en ambos stacks?

**A.** Usar entidades ORM como única capa de negocio.

**B.** Acceder a secretos directamente desde la UI.

**C.** Poner toda la lógica en controllers o servlets por simplicidad.

**D.** Separar capa HTTP/controladores de servicios de aplicación/dominio e inyectar dependencias.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**148.** Una API .NET necesita una consulta SQL muy específica, altamente optimizada y con control fino sobre comandos. ¿Qué opción puede ser razonable?

**A.** Reescribir la API en Jakarta EE obligatoriamente.

**B.** Usar ADO.NET o una técnica de acceso más directa para ese punto, sin obligar a abandonar EF Core en todo el sistema.

**C.** Usar ASP.NET Identity como ORM.

**D.** Forzar siempre EF Core aunque no permita el control requerido.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**149.** Una aplicación Jakarta EE necesita una consulta muy específica que no encaja bien en el ORM. ¿Qué enfoque es razonable?

**A.** Usar CDI para ejecutar SQL sin driver.

**B.** Usar acceso JDBC/SQL nativo de forma controlada en ese caso, manteniendo Jakarta Persistence donde aporte valor.

**C.** Cambiar necesariamente a .NET.

**D.** Desactivar transacciones.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**150.** Para desplegar una API .NET en contenedores, ¿qué afirmación es correcta?

**A.** Debe compilarse necesariamente como .NET Framework.

**B.** Docker sustituye al CLR.

**C.** Puede publicarse framework-dependent o self-contained según imagen/base y estrategia; el contenedor no obliga a una única modalidad.

**D.** No puede usar Kestrel.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**151.** Una organización migra una aplicación .NET Framework antigua a .NET moderno. ¿Qué debe auditar especialmente?

**A.** Solo cambiar el número de versión del archivo y dar por terminada la migración.

**B.** Mantener cualquier tecnología obsoleta aunque no tenga soporte.

**C.** Eliminar todas las pruebas para acelerar.

**D.** APIs y librerías heredadas, compatibilidad, modelo de hosting/configuración y dependencias específicas de Windows.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**152.** Una organización migra de Java EE antiguo a Jakarta EE moderno. ¿Qué cambio suele requerir atención explícita?

**A.** La transición de paquetes `javax.\*` a `jakarta.\*` y la compatibilidad de librerías/runtime.

**B.** Sustituir Maven por NuGet.

**C.** Cambiar C# por JavaScript.

**D.** Eliminar la JVM.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**153.** Si un ORM en cualquiera de los dos stacks genera N+1, ¿qué respuesta es la adecuada?

**A.** Ignorar el problema porque los ORMs no generan consultas adicionales.

**B.** Desactivar todos los logs de SQL.

**C.** Revisar el patrón de carga/proyección y las consultas generadas; no culpar al lenguaje ni aumentar hardware sin medir.

**D.** Crear un contexto de persistencia singleton compartido globalmente.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**154.** En ambos stacks, ¿qué secuencia conceptual es correcta al proteger un endpoint?

**A.** Validar solo en cliente.

**B.** Autenticar identidad, aplicar autorización, validar entrada y ejecutar lógica con mínimo privilegio, además de proteger el canal y secretos.

**C.** Autorizar sin identidad y después autenticar.

**D.** Confiar en que HTTPS sustituye todas las comprobaciones.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**155.** Un caso de negocio exige que actualizar un pedido y reservar inventario sea una única unidad coherente. ¿Qué diseño es más correcto?

**A.** Usar logs como sustituto de transacción.

**B.** Hacer cada operación sin relación y esperar que nunca falle.

**C.** Mover la lógica al frontend.

**D.** Definir un límite transaccional en la capa de servicio usando EF Core/transacciones en .NET o Jakarta Transactions/Persistence en Jakarta EE según el stack.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**156.** ¿Qué tecnología permite una estrategia de observabilidad homogénea entre servicios .NET y Java/Jakarta modernos?

**A.** MSBuild.

**B.** NuGet exclusivamente.

**C.** OpenTelemetry, mediante instrumentación y exportadores compatibles en ambos ecosistemas.

**D.** Jakarta Faces.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**157.** ¿Qué afirmación distingue mejor especificación e implementación al comparar stacks?

**A.** Jakarta EE está organizado fuertemente como conjunto de especificaciones con múltiples implementaciones; .NET es una plataforma/producto con frameworks de Microsoft y ecosistema asociado.

**B.** .NET es una especificación Jakarta.

**C.** Jakarta EE es un único servidor propietario.

**D.** No hay ninguna diferencia de modelo.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**158.** Si el objetivo es portabilidad entre proveedores de runtime Jakarta EE, ¿qué práctica ayuda?

**A.** Compilar contra una versión diferente en cada despliegue sin pruebas.

**B.** Priorizar APIs estándar de Jakarta y aislar extensiones específicas del proveedor cuando sean necesarias.

**C.** Evitar especificaciones estándar.

**D.** Usar únicamente APIs internas no documentadas del servidor.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**159.** ¿Qué afirmación sobre OAuth 2.0 y OpenID Connect es correcta para ambos stacks?

**A.** OAuth 2.0 se centra en autorización delegada y OIDC añade identidad/autenticación; ambos pueden integrarse tanto en .NET como en Jakarta/Java.

**B.** OAuth 2.0 es un ORM y OIDC un servidor web.

**C.** OIDC sustituye a TLS.

**D.** Solo existen en ASP.NET Core.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

**160.** Una arquitectura requiere API, persistencia, identidad, transacciones, observabilidad y despliegue en contenedores. ¿Qué enfoque es correcto?

**A.** Evitar revisar versiones porque la plataforma nunca cambia.

**B.** Elegir solo el lenguaje y suponer que resuelve automáticamente todas las capas.

**C.** Usar el ORM como servidor web y el gestor de paquetes como sistema de identidad.

**D.** Elegir componentes coherentes del stack, separar responsabilidades y verificar soporte/versiones: ASP.NET Core + EF Core + seguridad .NET o Jakarta REST/CDI/Persistence/Transactions/Security en un runtime compatible.

Respuesta: \_\_\_\_ Seguridad: alta / media / baja

# Registro de errores

Usa una fila por error que merezca repeticion. Si fallas por una confusion de capas, escribe la pareja correcta (por ejemplo, NuGet != MSBuild; CLR != CTS != CLS; OAuth 2.0 != OIDC).

| **N.** | **Tema** | **Tipo de error** | **Regla correcta** | **Revision** |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

**Objetivo de dominio: >= 85% global y >= 80% en cada bloque antes de dar PA15 por consolidada.**
