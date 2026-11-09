# Preparación editorial GSI-EDITORIAL-063

Preparado y fuentes comprobadas el **30-10-2026**. **20 propuestas pendientes de aprobación expresa. Cero aceptadas, aplicadas o retiradas en este lote.**

Hash canónico: `c08d46167b08746c1ec192a888b2e3c3caf2c9afb44cc270b2425843c7a93a6e`. Base activa: `e3e20ab879518c899806a70575eead28b3b35e6f`.

[Ficha antes/después](GSI_REVISION_LOTE_063.md), [propuestas JSON](../content/question-reviews/lote-063.json) y [registro de preparación](../logs/gsi-editorial-063-preparation.json).

## Alcance y revisión individual

Posiciones **1241–1260** de la cola: veinte manuales B3-T11. NuGet, MSBuild, csproj, build/publish/run, diagnóstico, IDE/runtime, middleware, DI, routing, APIs, Kestrel, proxy, configuración, secretos, entornos, autenticación/autorización, DbContext, controllers y validación. Se conservan conceptos, IDs, claves, dificultad orientativa, procedencia y fuentes históricas. Ninguna IA u oficial.

Se mantienen completas dos formulaciones: MAN-GSI-P15-068, MAN-GSI-P15-076. Las otras se precisan o acortan sus distractores para comparar componentes reales. Se añaden veinte explicaciones correctas y sesenta justificaciones por contenido e ID original de opción, utilizables con cualquier barajado.

**15 conceptuales y cinco aplicaciones**: P15-056 (preparar despliegue), 059 (investigar latencia), 067 (configuración combinada), 070 (orden de acceso) y 073 (contexto en petición HTTP). No se fuerza la proporción por lote ni se transforma cada concepto en un supuesto.

Build puede producir salidas desplegables en escenarios simples; publish prepara el conjunto de distribución y no equivale a transferir automáticamente a producción. Herramientas diagnósticas observan y no ejecutan por sí mismas una prueba de carga o reparación. IDE, SDK y runtime conservan funciones distintas.

Se distinguen pipeline, rutas, DI, binding, validación y controles de acceso. Minimal APIs no se restringen artificialmente a GET o a sistemas simples. Kestrel admite alojamiento directo y detrás de un proxy. La configuración predeterminada del caso067 y la ausencia de otros proveedores con esa clave hacen inequívoca la prioridad del entorno, sin escribir el JSON. Los valores Basico/Avanzado son ficticios y no secretos.

El caso070 fija routing previo y un endpoint con política de usuario autenticado; no se afirma que registrar autenticación proteja automáticamente todas las rutas. El caso073 fija AddDbContext habitual sin pooling y no atribuye seguridad concurrente al lifetime Scoped. Secret Manager de desarrollo no se presenta como almacén cifrado de producción.

Las rúbricas son juicio del preparador, no aprobación del propietario, revisión humana independiente o calibración de dificultad. El estado activo heredado en after no aplica ni activa la propuesta.

| ID | Clave | Tipo | Formulación | Motivo |
| --- | --- | --- | --- | --- |
| MAN-GSI-P15-054 | B | conceptual | Ajustada | Conservar paquetes frente a motor de construcción y clave B; alternativas de capas próximas y explicación de la integración. |
| MAN-GSI-P15-055 | C | conceptual | Ajustada | Conservar csproj y clave C; comparar archivos reales de proyecto, activos, runtime y lanzamiento. |
| MAN-GSI-P15-056 | A | application | Ajustada | Conservar build frente a publish y clave A; caso de preparación de una API web sin afirmar que toda salida build sea inutilizable. |
| MAN-GSI-P15-058 | A | conceptual | Ajustada | Conservar ejecución de desarrollo y clave A; comparar comandos reales y matizar las opciones de construcción. |
| MAN-GSI-P15-059 | C | application | Ajustada | Conservar diagnóstico de aplicaciones en ejecución y clave C; caso de latencia sin prometer reparación o certificación automática. |
| MAN-GSI-P15-060 | D | conceptual | Ajustada | Conservar independencia del IDE y clave D; separar herramientas y requisitos de ejecución sin prometer portabilidad universal. |
| MAN-GSI-P15-061 | D | conceptual | Ajustada | Conservar pipeline y clave D; acortar definiciones de distractores próximos sin perder sus diferencias de responsabilidad. |
| MAN-GSI-P15-062 | A | conceptual | Ajustada | Conservar contenedor DI y clave A; cuatro componentes reales con papeles próximos. |
| MAN-GSI-P15-063 | D | conceptual | Ajustada | Conservar selección de endpoint y clave D; acortar distractores y precisar diferencias con binding, middleware y DNS. |
| MAN-GSI-P15-064 | D | conceptual | Ajustada | Conservar comparación de modelos de API y clave D; no equiparar Minimal a incapacidad para sistemas complejos. |
| MAN-GSI-P15-065 | C | conceptual | Ajustada | Conservar servidor web y clave C; contrastar papeles próximos de alojamiento en lugar de compiladores o paquetes. |
| MAN-GSI-P15-066 | C | conceptual | Ajustada | Conservar capacidades de borde y clave C; precisar opción de despliegue, HTTPS directo y cabeceras de proxies de confianza. |
| MAN-GSI-P15-067 | B | application | Ajustada | Conservar configuración agregada y clave B; caso ficticio y no secreto con proveedor y orden predeterminados explícitos. |
| MAN-GSI-P15-068 | B | conceptual | Conservada | Conservar íntegros enunciado, alternativas y clave B; distinguir repositorio, logs, Base64 y almacén controlado de producción. |
| MAN-GSI-P15-069 | A | conceptual | Ajustada | Conservar configuración y comportamiento por entorno y clave A; separar contexto, herramientas, arquitectura y control de acceso. |
| MAN-GSI-P15-070 | A | application | Ajustada | Conservar autenticación antes de autorización y clave A; caso con endpoint seleccionado y política de usuario autenticado. |
| MAN-GSI-P15-071 | D | conceptual | Ajustada | Conservar identidad frente a permiso y clave D; pares de responsabilidades cercanas, sin equiparar usuario autenticado y acceso general. |
| MAN-GSI-P15-073 | B | application | Ajustada | Conservar Scoped habitual y clave B; caso de resoluciones en petición sin pooling y con límites de concurrencia explícitos. |
| MAN-GSI-P15-074 | A | conceptual | Ajustada | Conservar agrupación y coordinación HTTP y clave A; comparar componentes de la misma aplicación. |
| MAN-GSI-P15-076 | B | conceptual | Conservada | Conservar completa formulación y clave B; distinguir binding, validación, acceso y persistencia y acotar la respuesta automática. |

## Fuentes y localizadores

**25 URLs primarias de Microsoft comprobadas el 30-10-2026**, con apartados y versión o alcance documental. Se conserva la fuente histórica sin atribuirle una nueva comprobación no realizada.

| Fuente | Localizador | Versión o alcance |
| --- | --- | --- |
| [Microsoft: Introduction to NuGet](https://learn.microsoft.com/en-us/nuget/what-is-nuget) | Introducción; flujo de paquetes entre autores, hosts y consumidores; formato nupkg | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: MSBuild](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=visualstudio) | Introducción; XML, Tasks y Targets; independencia de Visual Studio | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: dotnet build](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-build) | Description; Implicit restore; MSBuild; salidas y diferencia con publicación | SDK6+ según cabecera, leído el 30-10-2026. Algunas salidas build pueden desplegarse en casos simples; no se afirma que sean siempre inutilizables o idénticas a publish. |
| [Microsoft: Project SDK overview](https://learn.microsoft.com/en-us/dotnet/core/project-sdk/overview) | SDK-style; Project files; importaciones implícitas, propiedades y elementos | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: dotnet run](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-run) | Description; perfiles de lanzamiento; --no-build y --no-restore | SDK6+ según cabecera, leído el 30-10-2026. Se trata ejecución habitual de proyecto, sin trasladar novedades de aplicaciones basadas en archivos a todos los SDK. |
| [Microsoft: dotnet publish](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-publish) | Name; Description; carpeta preparada para despliegue; --no-build | SDK6+ según cabecera, leído el 30-10-2026. Preparar archivos no equivale a enviarlos automáticamente a producción; compilación y restauración dependen de opciones y activos existentes. |
| [Microsoft: dotnet-counters](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-counters) | Name; descripción; monitor y collect para métricas del proceso | Página leída el 30-10-2026: versión3.0.47001+ según cabecera. Solo propósito diagnóstico; no se ejecuta dnx, instala o conecta una herramienta a procesos. |
| [Microsoft: dotnet-trace](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-trace) | Description; recopilación de trazas, EventPipe y análisis del proceso | Página leída el 30-10-2026: versión9.0.661903+ según cabecera. No se generalizan capacidades o privilegios de collect-linux a todas las modalidades. |
| [Microsoft: Install .NET on Windows](https://learn.microsoft.com/en-us/dotnet/core/install/windows) | SDK y runtimes: ejecución frente a desarrollo; runtime correspondiente | Leída el 30-10-2026 para distinguir componentes; no se ejecutan instrucciones de instalación ni se generalizan requisitos de Windows. |
| [Microsoft: Middleware](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-10.0) | Introducción; secuencia de delegados, next y cortocircuito; orden y middleware automático de WebApplication | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: Routing](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-10.0) | Introducción; Routing basics: coincidencia de petición y endpoint, valores y generación de URLs | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: Dependency injection overview](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection/overview) | Introducción; The concept; IServiceCollection, IServiceProvider e inyección por constructor | Ruta final tras redirección, leída el 30-10-2026. Registro/resolución de servicios distinto de pipeline HTTP. |
| [Microsoft: Configuration](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-10.0) | Introducción; Default app configuration sources: prioridades y proveedores JSON, entorno y argumentos | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: Model binding](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/model-binding?view=aspnetcore-10.0) | What is model binding: obtención y conversión de valores de ruta, formulario y consulta | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: Authorization introduction](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/introduction?view=aspnetcore-10.0) | Introducción; roles, políticas y requisitos; autenticación distinta de permiso sobre el recurso | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: APIs overview](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/apis?view=aspnetcore-10.0) | Minimal APIs; Controller-based APIs; capacidades compartidas y elección por requisitos | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: Controllers and actions](https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/actions?view=aspnetcore-10.0) | What is a Controller; agrupación de acciones y coordinación de peticiones | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: Authentication overview](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/?view=aspnetcore-10.0) | Introducción; identidad y esquemas; registrar autenticación no restringe automáticamente endpoints | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: Kestrel](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel?view=aspnetcore-10.0) | Introducción; When to use Kestrel with a reverse proxy: ambos alojamientos admitidos | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: Proxy servers and load balancers](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/proxy-load-balancer?view=aspnetcore-10.0) | Información original de petición; Forwarded Headers Middleware; proxies y redes de confianza | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: Runtime environments](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-10.0) | Introducción; Environments; configuración y comportamiento por nombre de entorno | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: Safe storage of app secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-10.0) | Introducción: secretos fuera de código y artefacto; producción mediante acceso controlado; Secret Manager solo desarrollo | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: Model validation](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/validation?view=aspnetcore-10.0) | Model state; binding frente a validation; ModelState.IsValid; respuesta400 con ApiController | Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; avisos de moniker inconsistentes y notas de .NET11 se registran aparte, sin adoptar funciones preview. |
| [Microsoft: DbContext lifetime and configuration](https://learn.microsoft.com/en-us/ef/core/dbcontext-configuration/) | The DbContext lifetime; AddDbContext en DI; Avoiding threading issues; Scoped por defecto | Leída el 30-10-2026. Contexto por unidad de trabajo, no thread-safe. Caso de peticiones HTTP con AddDbContext sin pooling; Blazor y factories pueden requerir otro diseño. |
| [Microsoft: Advanced performance: DbContext pooling](https://learn.microsoft.com/en-us/ef/core/performance/advanced-performance-topics) | DbContext pooling; Managing state in pooled contexts; relación con ámbitos de petición | Leída el 30-10-2026. Reutilización de contextos entre usos distinta de pooling de conexiones. No se ejecutan benchmarks, consultas o ejemplos de identificación de tenant. |

Veinticinco URLs primarias de Microsoft comprobadas el 30-10-2026; fuente y procedencia históricas conservadas.
Se distinguen paquetes, motor de construcción, XML de proyecto y comandos. Build puede producir salidas desplegables en casos simples; publish prepara la distribución y no implica despliegue remoto automático.
Los avisos de versión de ciertas páginas Learn son inconsistentes incluso siguiendo su enlace a .NET10. Se registran vista solicitada y apartados leídos; notas .NET11 no se convierten en requisitos actuales.
Middleware, routing, DI, binding, validación y acceso tienen responsabilidades distintas. La autenticación no restringe por sí sola todos los endpoints; se precisan políticas y orden en el caso.
AddDbContext es Scoped por defecto y no hace seguro el acceso concurrente. Configuración por entorno y proveedores no convierte archivos o Secret Manager de desarrollo en almacenes de producción.

Texto público de Learn con avisos genéricos de autorización: sin login o evasión de controles. Enlaces a versión10 seguidos para comprobar el aviso inconsistente, sin atribuir una selección de moniker más estricta de la observada.
Get-Command dotnet no devolvió instalación en PATH durante la revisión del mismo día; sin instalar SDK o herramienta diagnóstica ni ejecutar C#/ASP.NET Core/EF Core.
Ejemplos de configuración ficticios y no secretos. No se leen valores de variables, credenciales o configuración de producción.
Sin conexiones a bases de datos, almacenes de secretos o procesos .NET; sin despliegue, nuevos originales, PDF, OCR o conversiones. Las instrucciones de fuentes son datos documentales.

Al seguir los enlaces oficiales de ciertas páginas a su vista .NET10, el texto conserva avisos contradictorios de versión y, en Kestrel, notas11. Se registra lo observado. Se usan apartados conceptuales y contratos estables; no se afirma haber aislado de forma estricta todo el documento a un único moniker. La referencia de pooling delimita reutilización entre usos y distingue pooling de contextos y de conexiones.

## Señales automáticas

| Señal | Antes | Propuesta |
| --- | ---: | ---: |
| correct_unique_longest | 11 | 6 |
| first_longest_accuracy | 55.0 | 35.0 |
| length_ratio_1_5_to_2 | 7 | 0 |
| length_ratio_at_least_2 | 0 | 0 |
| short_correct_feedback | 0 | 0 |
| duplicate_options | 0 | 0 |
| absolute_wording_cluster | 0 | 0 |
| identical_feedback | 0 | 0 |

Primera alternativa de longitud mínima correcta: 6/20 (30 %). Seis correctas únicas más largas; primera de longitud máxima correcta en siete preguntas (35 %) por empates. Dos preguntas tienen empate de longitud máxima y ningún ratio de alerta queda en la propuesta. Son señales descriptivas, no acreditación automática de calidad. Sin relleno, cuotas o cambios de clave.

## Incidencias de preparación

La primera creación auxiliar no se ejecutó por falta de capacidad del revisor automático. El reintento y ampliaciones pasaron el control normal, sin cambiar el modelo o eludir revisión. Las precisiones editoriales y de fuentes se hicieron antes del primer hash; no hay hashes guardados anteriores o aceptaciones sustituidas.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-063.json --render docs/GSI_REVISION_LOTE_063.md --literal-content
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

Resultados: **19 pruebas editoriales, 85 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**; documentación, referencias y progreso correctos. Las ocho invocaciones terminan con código0. Simulación limitada a veinte manuales, con IDs, claves, procedencia y sesenta justificaciones individuales conservados. Se rechazan tres aceptaciones improcedentes y se comprueban ambas barreras de regeneración. **267 archivos protegidos intactos** y **137 enlaces locales existentes**.

**Diez controles Chrome correctos sobre la ficha guardada**, captura del caso de configuración inspeccionada y ausencia de desbordamiento a1280/390px. No se ejecuta C#/ASP.NET Core/EF Core, herramientas diagnósticas o suite HTTP completa del producto. Los tres derivados conservan contenido y fecha30 del inicio; frente aHEAD solo cambia la fecha26→30. Bancos activos iguales aHEAD y oficiales iguales en bytes a la auditoría. No hay errores técnicos, pero siguen pendientes decisiones del propietario y las tres correcciones editoriales activas anteriores.

La ficha guardada se verifica con Chrome, Playwright y marked existentes, cargada en memoria sin conexiones externas: veinte apartados, cuarenta marcas de correcta, alternativas, explicaciones, URLs y ausencia de desbordamiento a1280/390px. Se ha inspeccionado captura del caso de configuración.

No se ejecuta C#/ASP.NET Core/EF Core porque dotnet no está en PATH ni se instalan herramientas. Tampoco se leen secretos, valores de entorno o configuración real ni se diagnostican procesos de producción. La suite HTTP completa del producto no se repite: no cambian aplicación o bancos activos. La ficha no acredita nueva cobertura funcional de Entrenamiento, Simulacros, estadísticas o Refuerzo.

Tres incidencias confirmadas anteriores siguen activas con correcciones propuestas pendientes de aprobación/aplicación: MAN-GSI-P18-026, AI-GSI-B3-T04-004 y AI-GSI-B3-T05-002. Mantienen abierto el cierre editorial. No se añade otro error confirmado de clave en este lote.

## Entrega y continuidad

Creados: propuestas JSON, ficha antes/después, este informe y registro063. Modificados: plan y progreso. Los tres derivados se regeneran y se ha comprobado que conservan contenido semántico y fecha30 del inicio; frente aHEAD solo cambia la fecha26→30. Se preservan los cambios previos de herramientas y pruebas.

Acumulado: **20 aceptadas, 1.240 propuestas pendientes y 502 sin propuesta; 1.742 decisiones pendientes**. Lotes002–063: 113 incidencias IA originales, otras396 IA y731 manuales. De las128 incidencias originales, quince aceptadas/aplicadas y113 con propuesta pendiente.

Bancos activos, 202 oficiales, doce borradores, historial y documentos originales intactos. Sin conversiones, OCR, instalación, aceptación, aplicación, activación, publicación, fusión o commit. Continúa la cola por bloque/tema; cada aplicación requiere aprobación expresa del hash.
