# Preparación editorial GSI-EDITORIAL-060

Preparado y fuentes comprobadas el **29-10-2026**. **20 propuestas pendientes de aprobación expresa; ninguna aceptada, aplicada, activada o retirada en este lote.**

Hash canónico: `33a4ae1bcce047b262ccc5f88e1056d62128694340a02a6a693d2dee372d33b6`. Base activa: `e3e20ab879518c899806a70575eead28b3b35e6f`.

[Ficha antes/después](GSI_REVISION_LOTE_060.md), [propuestas JSON](../content/question-reviews/lote-060.json) y [registro de preparación](../logs/gsi-editorial-060-preparation.json).

## Alcance y criterio

Posiciones **1181–1200** de la cola: **veinte manuales**, seis B3-T10 y catorce B3-T11. Construcción Java, migración de namespace, CDI, especificación/implementación, Java SE, transacciones y fundamentos de .NET: web, pruebas, DI, soporte, runtime, SDK, CLI, bibliotecas, código administrado, portabilidad, paquetes y MSBuild. Ninguna IA u oficial.

Se conservan conceptos, IDs, claves, dificultad orientativa, procedencia y fuentes históricas. **Tres formulaciones completas se mantienen**: MAN-GSI-P15-139, MAN-GSI-P15-057, MAN-GSI-P15-002. P15-005 conserva las cuatro alternativas y precisa el contexto de publicación. Se añaden veinte explicaciones correctas y sesenta justificaciones individuales de distractores por sus IDs originales y contenido, utilizables con cualquier orden de presentación.

**14 conceptuales y seis aplicaciones contextualizadas**: P15-140 (transferencia), 017 (API HTTP), 072 (ciclos de vida), 005 (SDK/destino), 008 (código administrado) y 009 (portabilidad). Los casos fijan recursos, contratos o destino para resolver confusiones concretas. No se exige esta proporción a cada lote.

Se delimitan los cambios de Jakarta EE9 y se conserva el contraejemplo javax.sql de Java SE. Se distingue Jakarta Managed Beans de los beans de CDI. En .NET se separan evolución, soporte, SDK, host, runtime, bibliotecas y herramientas. La fecha explícita de soporte evita confundir LTS más reciente con única LTS soportada. JIT no se presenta como obligatorio para todo modo de ejecución, ni GC como liberación automática de cualquier recurso.

Las rúbricas son juicio del preparador, no aceptación del propietario, revisión independiente o dificultad calibrada. No se modifica ninguna aceptación IA histórica. Los estados heredados en after no activan las propuestas.

| ID | Clave original | Tipo | Formulación | Motivo |
| --- | --- | --- | --- | --- |
| MAN-GSI-P15-135 | B | Conceptual | Ajustada | Conservar construcción/dependencias y clave B; comparar capas próximas del ecosistema Java y matizar el posible lanzamiento mediante plugins. |
| MAN-GSI-P15-136 | A | Conceptual | Ajustada | Conservar javax→jakarta y clave A; acotar Jakarta EE 9 y posteriores y añadir excepción Java SE verificable, sin sustitución indiscriminada. |
| MAN-GSI-P15-137 | B | Conceptual | Ajustada | Conservar CDI y clave B; distinguir la especificación retirada Jakarta Managed Beans de los CDI managed beans que siguen vigentes. |
| MAN-GSI-P15-138 | A | Conceptual | Ajustada | Conservar especificación/implementación y clave A; parejas de conceptos paralelas que separan contrato, producto, aplicación y build. |
| MAN-GSI-P15-139 | C | Conceptual | Conservada | Conservar íntegros enunciado y alternativas y clave C; completar relación de capas y versiones con un ejemplo normativo concreto. |
| MAN-GSI-P15-140 | C | Aplicación | Ajustada | Conservar coherencia de la unidad transaccional y clave C; microcaso con un recurso participante y dos escrituras, sin prometer atomicidad de efectos externos. |
| MAN-GSI-P15-017 | D | Aplicación | Ajustada | Conservar ASP.NET Core y clave D; requisitos de API HTTP y despliegue multiplataforma que distinguen líneas sin imponer un estilo único de API. |
| MAN-GSI-P15-057 | D | Conceptual | Conservada | Conservar íntegra formulación y alternativas y clave D; explicar los tres comandos próximos y el alcance de un resultado de test. |
| MAN-GSI-P15-072 | C | Aplicación | Ajustada | Conservar Transient/Scoped/Singleton y clave C; microcaso que evalúa su correspondencia con resolución, petición y contenedor. |
| MAN-GSI-P15-001 | A | Conceptual | Ajustada | Conservar .NET moderno y clave A; alternativas próximas de producto/contrato y fecha de soporte explícita en el respaldo, sin equiparar Framework con abandono. |
| MAN-GSI-P15-002 | B | Conceptual | Conservada | Conservar íntegra formulación y clave B; alternativas ya comparan ambas líneas. Añadir límites de portabilidad y soporte. |
| MAN-GSI-P15-003 | A | Conceptual | Ajustada | Conservar identificación de .NET 10 LTS y clave A; fecha exacta y criterio más reciente para no negar la coexistencia de otra LTS soportada. |
| MAN-GSI-P15-004 | D | Conceptual | Ajustada | Conservar CLR y clave D; opciones comparan capas y la explicación distingue servicios de runtime de una obligación universal de JIT. |
| MAN-GSI-P15-005 | C | Aplicación | Ajustada | Conservar diferencia SDK/destino y clave C, con las cuatro alternativas originales; caso de consola dependiente del framework que delimita requisitos y modo de publicación. |
| MAN-GSI-P15-006 | B | Conceptual | Ajustada | Conservar propósito de CLI y clave B; distinguir comandos del SDK, host de DLL, runtime, paquetes y alojamiento. |
| MAN-GSI-P15-007 | A | Conceptual | Ajustada | Conservar bibliotecas base y clave A; cuatro capas próximas con forma comparable y límite explícito de portabilidad de APIs. |
| MAN-GSI-P15-008 | B | Aplicación | Ajustada | Conservar servicios del runtime y clave B; caso de cuenta y recurso nativo que separa ejecución, permisos, memoria y liberación de recursos. |
| MAN-GSI-P15-009 | A | Aplicación | Ajustada | Conservar portabilidad condicionada de .NET y clave A; caso de API específica que distingue runtime multiplataforma, RID, publicación e IDE. |
| MAN-GSI-P15-010 | A | Conceptual | Ajustada | Conservar gestión de paquetes y clave A; distractores de capas vecinas con forma comparable y distinción entre repositorio, paquete y ejecución. |
| MAN-GSI-P15-011 | D | Conceptual | Ajustada | Conservar motor de construcción y clave D; tres responsabilidades reales del ecosistema frente a distractores extremos y precisión tareas/compilador. |

## Fuentes y localizadores

**23 URLs primarias comprobadas el 29-10-2026.** Se consultan especificaciones HTML de Jakarta, API de Oracle Java SE17, documentación Apache/Gradle y documentación y política oficial de Microsoft. Sin PDF, nuevas conversiones documentales o inspección de diagramas. Se registran versiones explícitas o visibles y fecha real; una ruta current no demuestra qué herramienta está instalada localmente.

| Fuente | Localizadores y versión | Comprobación |
| --- | --- | --- |
| [Apache Maven: Introduction](https://maven.apache.org/what-is-maven.html) | Introduction; Maven’s Objectives; Providing a uniform build system: POM y plugins. Documentación pública leída el 29-10-2026. Construcción y gestión del proyecto, sin instalar o ejecutar Maven | 2026-10-29 |
| [Gradle User Manual: The Java Plugin](https://docs.gradle.org/current/userguide/java_plugin.html) | Tasks, Lifecycle Tasks y Dependency management: compile Java, test y configuraciones de dependencias. Ruta current con versión 9.8.2 indicada en la página, leída el 29-10-2026. No acredita una instalación o versión local | 2026-10-29 |
| [Eclipse Foundation: Jakarta EE Platform 11](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) | 2.4.2 servidores y Java SE; 2.13 contratos; 2.24 y9.7 retirada de Jakarta Managed Beans; 5.24 inyección mediada por CDI; 12 compatibilidad. 11.0, 10-03-2025 según cabecera, HTML oficial leído el 29-10-2026. Se distingue especificación histórica de Managed Beans y beans gestionados por CDI | 2026-10-29 |
| [Eclipse Foundation: Jakarta EE Platform 9](https://jakarta.ee/specifications/platform/9/jakarta-platform-spec-9.html) | 12.1.1 Backwards Compatibility; 12.1.1.1 javax to jakarta Namespace; propiedades, descriptores y migración. 9 Final Release, 06-11-2020 según cabecera, HTML leído el 29-10-2026. Jakarta EE 8 mantuvo javax; el cambio se delimita a las APIs Jakarta renombradas | 2026-10-29 |
| [Oracle Java SE 17 API: javax.sql.DataSource](https://docs.oracle.com/en/java/javase/17/docs/api/java.sql/javax/sql/DataSource.html) | Cabecera: módulo java.sql, paquete javax.sql e interfaz DataSource. Documentación de Java SE 17 leída el 29-10-2026. Contraejemplo concreto a sustituir indiscriminadamente todo paquete javax | 2026-10-29 |
| [Eclipse Foundation: Jakarta Contexts and Dependency Injection 4.1](https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1.html) | 2.1 capacidades del contenedor; 5 inyección y resolución; 6 ámbitos/contextos; 7 ciclo de vida de instancias. 4.1 Final, 07-03-2024 según cabecera, HTML leído el 29-10-2026. No se enseña que hayan desaparecido los CDI managed beans | 2026-10-29 |
| [Eclipse Foundation: Jakarta Transactions 2.0](https://jakarta.ee/specifications/transactions/2.0/jakarta-transactions-spec-2.0.html) | 1 Introduction; 3.1 UserTransaction; 3.3 y3.4 recursos participantes; 3.7 Transactional y tratamiento del rollback. 2.0 Final Release, 08-10-2020 según cabecera, HTML leído el 29-10-2026. Unidad transaccional con recursos participantes; no toda excepción o efecto externo provoca rollback automático | 2026-10-29 |
| [Microsoft Learn: APIs overview, ASP.NET Core 10](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/apis?view=aspnetcore-10.0) | Introducción; Minimal APIs y Controller-based APIs como vías de construir APIs HTTP. Vista aspnetcore-10.0 leída el 29-10-2026. Ambas vías son válidas; no se enseña una obligación universal de Minimal APIs | 2026-10-29 |
| [Microsoft Learn: .NET vs .NET Framework for server apps](https://learn.microsoft.com/en-us/dotnet/standard/choosing-core-framework-server) | Introducción; Choose .NET; Choose .NET Framework: evolución, multiplataforma y compatibilidad heredada. Página pública leída el 29-10-2026; identifica .NET 10 como versión actual en su cuerpo. No se interpreta como fin de soporte de todo .NET Framework | 2026-10-29 |
| [Microsoft Learn: .NET glossary](https://learn.microsoft.com/en-us/dotnet/standard/glossary) | BCL; .NET; .NET implementation; .NET Standard; ASP.NET Core. Página pública leída el 29-10-2026. Bibliotecas, implementación, marco web y contrato de APIs son categorías distintas; no se infiere portabilidad universal de cada API | 2026-10-29 |
| [Microsoft Learn: dotnet test](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-test) | Name; Description; Choose a test runner: VSTest y Microsoft Testing Platform. Página pública leída el 29-10-2026. Selección de runner en SDK 10; las novedades de .NET 11 Preview se distinguen de la base estable y no se ejecutan comandos | 2026-10-29 |
| [Microsoft Learn: .NET CLI overview](https://learn.microsoft.com/en-us/dotnet/core/tools/) | Command structure; Driver; Command y comandos del SDK: build, run, test y publish. Documentación pública leída el 29-10-2026. Distingue ejecutar una DLL dependiente del framework de invocar comandos que requieren el SDK | 2026-10-29 |
| [Microsoft Learn: Service lifetimes](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection/service-lifetimes) | Transient; Scoped; Singleton: resolución, ámbito y contenedor; scopes implícitos/ explícitos. Página pública leída el 29-10-2026, localizada tras redirección del artículo general de DI. Por petición es el ámbito habitual en ASP.NET Core, no definición universal de scope | 2026-10-29 |
| [Microsoft: .NET and .NET Core Support Policy](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core) | Supported versions, Go-live releases y soporte LTS/STS; filas .NET 10, .NET 9 y.NET 8. Actualizada 25-10-2026 según página, consultada el 29-10-2026. .NET 10 LTS activa, fin 14-11-2028; .NET 8 también LTS soportada hasta 10-11-2026; .NET 11 RC no es versión estable publicada | 2026-10-29 |
| [Microsoft Learn: Platform compatibility analyzer](https://learn.microsoft.com/en-us/dotnet/standard/analyzers/platform-compat-analyzer) | Introducción; SupportedOSPlatform/UnsupportedOSPlatform; diagnósticos por llamadas a APIs específicas y alternativas. Página pública leída el 29-10-2026. La plataforma no abstrae todo el SO; un RID o publicación autocontenida no transforma APIs exclusivas en portables | 2026-10-29 |
| [Microsoft Learn: Common Language Runtime overview](https://learn.microsoft.com/en-us/dotnet/standard/clr) | Introducción; metadatos, carga, tipos, excepciones y memoria administrada. Página pública leída el 29-10-2026. Visión conceptual del CLR, complementada con Native AOT y recursos no administrados para no generalizar JIT o liberación automática de todo recurso | 2026-10-29 |
| [Microsoft Learn: Native AOT deployment overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) | Introducción; compilación al publicar, ausencia de JIT durante ejecución y destino concreto; bibliotecas de runtime incluidas. Página pública leída el 29-10-2026. Native AOT es un contrapunto a afirmar que todo .NET se interpreta o usa JIT; no se realiza publicación | 2026-10-29 |
| [Microsoft Learn: An introduction to NuGet](https://learn.microsoft.com/en-us/nuget/what-is-nuget) | Introducción y The flow of packages between creators, hosts, and consumers. Página pública leída el 29-10-2026. Formato/herramientas de paquetes públicos o privados; no runtime, motor de construcción o servidor web | 2026-10-29 |
| [Microsoft Learn: MSBuild](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=visualstudio) | Introducción; Tasks; Targets; dotnet build como interfaz sobre MSBuild. Página pública leída el 29-10-2026. Motor de construcción mediante proyectos, propiedades, elementos, tareas y objetivos; no exige Visual Studio | 2026-10-29 |
| [Microsoft Learn: Kestrel web server in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel?view=aspnetcore-10.0) | Introducción: servidor web multiplataforma de ASP.NET Core; solicitudes y conexiones HTTP. Vista aspnetcore-10.0 leída el 29-10-2026. Servidor HTTP distinto del CLR y de herramientas de paquetes o construcción | 2026-10-29 |
| [Microsoft Learn: .NET application publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/) | Publishing modes: self-contained y framework-dependent; Publishing basics y runtime identifier. Página pública leída el 29-10-2026. Necesidades del destino según modo y plataforma; SDK de desarrollo distinto de runtime y dependencias de ejecución | 2026-10-29 |
| [Microsoft Learn: What is managed code?](https://learn.microsoft.com/en-us/dotnet/standard/managed-code) | Definición y servicios de ejecución; Intermediate Language & execution. Página pública leída el 29-10-2026. Se usa definición y servicios; su exposición de IL/JIT se matiza con Native AOT y no se equipara código administrado a permisos elevados | 2026-10-29 |
| [Microsoft Learn: Cleaning up unmanaged resources](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/unmanaged) | Introducción; Dispose, SafeHandle y finalización no determinista. Página pública leída el 29-10-2026. El GC no conoce por sí solo cómo liberar cada recurso nativo; no se confunde memoria administrada con todo recurso del sistema | 2026-10-29 |

### Decisiones de revisión

- Posiciones1181–1200: veinte manuales, seis B3-T10 y catorce B3-T11. Se mantienen conceptos, IDs, claves, dificultad orientativa, procedencia y fuentes históricas. Ninguna IA u oficial.
- Se conservan íntegros enunciado y opciones de P15-139, P15-057 y P15-002. P15-005 conserva sus cuatro opciones y precisa el contexto de publicación.
- Catorce conceptuales y seis aplicaciones: P15-140 transacción,017 API,072 ciclos de vida,005 SDK/destino,008 código administrado y009 portabilidad. El contexto fija condiciones, no una cuota artificial para otros lotes.
- Maven/Gradle, especificación, contenedor/JVM y aplicación ocupan capas distintas. Poder lanzar un servidor mediante un plugin no convierte la herramienta de construcción en una implementación Jakarta EE.
- El namespace cambia en Jakarta EE 9, no en8; solo las APIs renombradas se trasladan a jakarta. Java SE conserva paquetes javax, como javax.sql. Se revisan también propiedades, descriptores y binarios.
- La antigua especificación Jakarta Managed Beans retirada enEE 11 no es el conjunto de CDI managed beans que permanece vigente. La inyección de jakarta.inject se media por CDI en la plataforma.
- La transacción del caso engloba dos escrituras del mismo recurso participante. No se promete rollback de cualquier excepción o atomicidad de correos/servicios externos no participantes.
- La política Microsoft actualizada 25-10-2026 respalda .NET 10 LTS activa yfin14-11-2028. .NET 8 también sigue soportada el 29-10-2026; la pregunta003 pide la LTS estable más reciente, no una LTS única. .NET 11 RC no se presenta como versión estable.
- Se distingue .NET moderno de Framework sin declarar que todo Framework esté abandonado. El escenario017 pide API HTTP y Windows/Linux; Minimal APIs ycontroladores siguen siendo opciones válidas dentro deASP.NET Core.
- Transient es por resolución; Scoped por ámbito, habitualmente petición web; Singleton por contenedor. Ni ámbito equivale siempre a petición niSingleton significa toda la máquina.
- SDK, runtime, modo framework-dependent yself-contained se separan. Dotnet como host de DLL no implica disponer de todos los comandos del SDK. Dotnet test puede usar VSTest o MTP según SDK yconfiguración.
- BCL, NuGet y MSBuild se distinguen por contrato. Las bibliotecas base no garantizan que toda API sea portable; una tarea de MSBuild puede llamar al compilador sin ser el runtime.
- Administrado no significa privilegios elevados, interpretación obligatoria o liberación automática de todos los recursos nativos. Se contrastan Native AOT y Dispose/SafeHandle para matizar las introducciones simplificadas del CLR.
- Portabilidad exige revisar APIs ydependencias. Ni elegir RID, ni incluirruntime, ni cambiarIDE traducen automáticamente una API exclusiva de Windows.
- Veintitrés URLs primarias consultadas el 29-10-2026. Especificaciones ydocumentación HTML; sin PDF, conversiones documentales, instalaciones oejecución de Java/.NET. No hay nuevas incidencias editoriales confirmadas que invaliden una clave; se conservan abiertas las tres anteriores.

### Límites de acceso y alcance

- Microsoft Learn muestra avisos de autorización junto al cuerpo público devuelto. Se consulta ese cuerpo sin iniciar sesión, leer credenciales o eludir controles.
- El enlace histórico del artículo DI redirige a overview y el detalle se consulta en service-lifetimes. Se conserva la URL final específica de las definiciones utilizadas.
- Las introducciones de CLR/código administrado simplifican JIT o memoria. Se complementan con documentación Native AOT y recursos no administrados, sin repetir como universales todas sus frases.
- Las rutas current de Gradle y documentación Microsoft pueden cambiar. Se registran fecha real y versión visible cuando existe; no se infiere un SDK, servidor o motor instalado localmente.
- La política de soporte se consulta en una fecha concreta; no se extrapolan fechas a nuevas versiones o distribución concreta. Soporte de producto y soporte de un sistema operativo/API son condiciones diferentes.
- No se instalan ni ejecutan .NET, Gradle, Maven o un servidor Jakarta. Los ejemplos didácticos locales no equivalen a una ejecución de esos productos o de sus TCKs, ni a una nueva suite HTTP de GSI.

Los localizadores principales son **Jakarta Platform9§12.1.1/12.1.1.1**, **Platform11§2.24/5.24/9.7**, **CDI4.1§2.1/5–7** y **Transactions2.0§3.1/3.7**. Se comprueba que `javax.sql.DataSource` pertenece al módulo `java.sql` de Java SE17. No se propone un cambio global de paquetes o se ejecuta una migración real.

La política .NET indica actualización **25-10-2026**. En la fecha comprobada, .NET10 es LTS activa con fin de soporte **14-11-2028**; .NET8 también es LTS soportada hasta **10-11-2026**. La pregunta003 pide la estable más reciente entre las opciones. .NET11 RC no se considera una versión estable publicada. No se traslada el estado de una versión o sus parches a cualquier producto o sistema operativo.

Las páginas introductorias de CLR/código administrado se contrastan con Native AOT y liberación de recursos nativos para evitar generalizaciones. Las novedades preview que aparecen en documentación de test/Kestrel no se incorporan como requisito estable. No se instala o ejecuta un SDK .NET, Java, Maven, Gradle o contenedor empresarial.

## Señales antes y después

| Señal | Banco activo | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 10 | 2 |
| Acierto escogiendo primera de longitud máxima (%) | 50.0 | 10.0 |
| Ratio 1,5 a menos de 2 | 3 | 0 |
| Ratio 2 o superior | 1 | 0 |
| Feedback correcto breve | 3 | 0 |
| Feedback correcto/incorrecto idéntico | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos | 0 | 0 |
| Empates de longitud máxima | 1 | 3 |

La correcta sigue siendo única más larga en P15-002 y003. La primera conserva íntegra una comparación ya bien construida de .NET moderno y Framework, que requiere expresar ambos lados; la segunda contiene el nombre .NET10 frente a versiones de un dígito. Se conserva el contenido sin rellenar distractores o cambiar claves para ajustar estadísticas.

La primera máxima acierta **2/20 (10 %)**, frente a **10/20 (50 %)**; hay tres empates de máxima. La primera mínima acierta **7/20 (35 %)** y sigue como señal descriptiva para revisión, en especial en nombres de tecnología y la distinción SDK/ejecución. Ningún ratio alcanza1,5 y no aparecen alertas del analizador; esto no acredita ausencia de pistas o calidad pedagógica. La distribución de claves es la original, sin cuotas ni calibración.

## Contrastes semánticos

Cinco modelos propios con biblioteca estándar y datos ficticios contrastan consecuencias y excepciones. No ejecutan APIs Jakarta/.NET, proveedores, un TCK o funciones de la aplicación GSI.

1. Una migración dirigida cambia javax.servlet yjavax.persistence a sus equivalentes jakarta, pero conserva javax.sql.DataSource yjava.lang.String. Una sustitución global modifica indebidamente el nombre de la API Java SE. El ejemplo no es un conversor de proyectos, descriptores o binarios.
2. En SQLite exclusivamente `:memory:`, una transferencia ficticia de25 sobre saldos100/0 termina75/25 si tiene éxito. Un fallo antes del abono revierte a100/0 dentro de una transacción; si se confirmó antes la resta en otra transacción, queda75/0. Demuestra el resultado parcial posible, no certifica JTA, propagación, rollback por excepción de Java o atomicidad entre recursos externos.
3. Un modelo de identidad de servicios produce objetos Transient distintos en dos resoluciones, Scoped iguales dentro de un scope y distintos entre scopes, y Singleton iguales entre scopes del mismo contenedor pero distintos entre dos contenedores. No prueba el contenedor de Microsoft, disposición, captura de dependencias o concurrencia.
4. Con las fechas de política consultadas, el cálculo para29-10-2026 encuentra dos LTS estables soportadas (8 y10) y elige10 por fecha de publicación más reciente. La entrada11 RC queda fuera del conjunto estable. No se predice el soporte en otra fecha ni se modela la inclusión del último día de servicio.
5. Un modelo de requisitos separa runtime instalado o incluido de compatibilidad de la API y dependencias nativas. Framework-dependent necesita runtime compatible; self-contained puede incluirlo, pero falla igualmente si la API solo admite Windows y el destino es Linux o falta una dependencia nativa. No se ejecuta una publicación real o se valida un RID concreto.

No se registran nuevos errores editoriales confirmados que invaliden una clave. MAN-GSI-P18-026, AI-GSI-B3-T04-004 y AI-GSI-B3-T05-002 mantienen sus correcciones propuestas pendientes de aprobación/aplicación. **Siguen en las versiones activas y mantienen abierto el cierre editorial.**

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-060.json --render docs/GSI_REVISION_LOTE_060.md --literal-content
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

Resultados: **19 pruebas editoriales, 82 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**, además de documentación, referencias y progreso. La simulación modifica únicamente las veinte manuales previstas. Se conservan IDs, claves, procedencia y sesenta justificaciones individuales de distractores. Se rechazan ausencia de aceptación, recibo del piloto y revisión histórica como aprobación. Ninguna aceptación IA se modifica. **255 archivos protegidos** intactos y **131 enlaces locales** existentes.

**Cinco modelos propios y diez controles Chrome correctos**. Captura de ciclos de vida inspeccionada, sin desbordamiento a1280 y390px. Las ocho invocaciones de validación y el render literal terminan con código0. Los tres derivados siguen idénticos al inicio; frente aHEAD solo cambia la fecha26→29. Bancos activos iguales aHEAD y oficiales iguales en bytes a la auditoría. Cero errores técnicos no acredita cierre editorial: faltan decisiones del propietario y las tres correcciones activas pendientes.

La ficha se verifica con Chrome, Playwright y marked existentes, cargada en memoria con conexiones externas bloqueadas: veinte apartados, marcas correctas, opciones, explicaciones, URLs y ausencia de desbordamiento a1280 y390px. Se inspecciona captura del caso de ciclos de vida. Presentación y modelos aislados no certifican toda la semántica, accesibilidad o ejecución de una implementación Java/.NET.

La suite HTTP de Entrenamiento, Simulacros, estadísticas y Refuerzo no se repite en esta preparación: no cambian código de aplicación ni bancos activos. La comprobación de ficha no es una nueva regresión funcional del producto.

## Entrega y continuidad

Creados: `content/question-reviews/lote-060.json`, `docs/GSI_REVISION_LOTE_060.md`, este informe y `logs/gsi-editorial-060-preparation.json`. Modificados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los derivados de cobertura, validación final y revisión histórica se regeneran y cotejan manteniendo su fecha29 y los cambios previos de herramientas y pruebas.

Acumulado: **20 aceptadas, 1.180 propuestas pendientes y 562 sin propuesta**. **1.742 decisiones pendientes**. Lotes002–060: 113 incidencias IA originales, otras396IA y671manuales. De las128incidencias originales, quince están aceptadas/aplicadas y113tienen propuesta pendiente. Preparar no significa aceptar o resolver.

Bancos activos, 202 oficiales, doce borradores, historial, originales y entregas anteriores intactos. Sin conversiones nuevas, OCR, instalaciones, aplicación, activación, publicación, fusión o commit.

Para revisar, contrastar ficha, claves, fuentes y motivos por ID y aprobar expresamente el hash final antes de aplicar. La siguiente preparación continúa por bloque y tema. El cierre exige decisiones individuales trazables del propietario sobre los1.762IDs, errores confirmados resueltos y comprobaciones técnicas y de cobertura superadas.
