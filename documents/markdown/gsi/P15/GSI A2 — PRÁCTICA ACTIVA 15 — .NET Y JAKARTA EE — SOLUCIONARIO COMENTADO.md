GSI A2 - PRACTICA ACTIVA 15

**.NET + COMPARATIVA JAKARTA EE**

160 preguntas - 4 opciones - III.11 cierre + III.10 refuerzo

**SOLUCIONARIO COMENTADO**

# Como usar esta practica

Este solucionario no se limita a dar la letra: cada respuesta incluye la regla que conviene recordar y la confusion que evita.

Las respuestas A/B/C/D estan equilibradas: 40 de cada letra en el total y 5 de cada letra dentro de cada bloque de 20 preguntas.

Los datos dependientes de version se han contrastado con fuentes oficiales vigentes a 24/08/2026.

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

# Plantilla rapida de respuestas

| **1: A** | 2: B | 3: A | 4: D | 5: C | 6: B | 7: A | 8: B |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9: A | 10: A | 11: D | 12: B | 13: C | 14: B | 15: D | 16: C |
| 17: D | 18: C | 19: D | 20: C | **21: D** | 22: A | 23: D | 24: B |
| 25: C | 26: D | 27: D | 28: C | 29: D | 30: B | 31: A | 32: B |
| 33: C | 34: C | 35: A | 36: B | 37: A | 38: A | 39: B | 40: C |
| **41: A** | 42: D | 43: B | 44: C | 45: B | 46: D | 47: B | 48: D |
| 49: A | 50: C | 51: C | 52: B | 53: A | 54: B | 55: C | 56: A |
| 57: D | 58: A | 59: C | 60: D | **61: D** | 62: A | 63: D | 64: D |
| 65: C | 66: C | 67: B | 68: B | 69: A | 70: A | 71: D | 72: C |
| 73: B | 74: A | 75: C | 76: B | 77: B | 78: A | 79: D | 80: C |
| **81: B** | 82: A | 83: D | 84: C | 85: B | 86: A | 87: A | 88: C |
| 89: D | 90: C | 91: B | 92: D | 93: D | 94: C | 95: C | 96: B |
| 97: A | 98: A | 99: D | 100: B | **101: B** | 102: B | 103: D | 104: C |
| 105: C | 106: B | 107: B | 108: A | 109: D | 110: C | 111: B | 112: C |
| 113: C | 114: A | 115: D | 116: A | 117: A | 118: D | 119: D | 120: A |
| **121: A** | 122: D | 123: C | 124: B | 125: C | 126: D | 127: D | 128: B |
| 129: D | 130: A | 131: A | 132: B | 133: D | 134: C | 135: B | 136: A |
| 137: B | 138: A | 139: C | 140: C | **141: B** | 142: D | 143: A | 144: C |
| 145: A | 146: C | 147: D | 148: B | 149: B | 150: C | 151: D | 152: A |
| 153: C | 154: B | 155: D | 156: C | 157: A | 158: B | 159: A | 160: D |

**Control de equilibrio:** 40 A - 40 B - 40 C - 40 D; cada bloque de 20 contiene 5 respuestas de cada letra.

# 1. .NET moderno y arquitectura base

**1. A -** **.NET moderno (.NET 5 y posteriores, actualmente .NET 10 como LTS).** .NET moderno es la línea principal multiplataforma; .NET Framework queda principalmente para aplicaciones heredadas de Windows.

**2. B -** **.NET moderno es multiplataforma y es la línea principal de evolución; .NET Framework está ligado principalmente a Windows y a compatibilidad heredada.** La confusión entre .NET y .NET Framework es una trampa clásica: son implementaciones distintas y la evolución principal está en .NET moderno.

**3. A -** **.NET 10.** .NET 10 es LTS y Microsoft la mantiene soportada hasta noviembre de 2028.

**4. D -** **El CLR (Common Language Runtime).** El CLR ejecuta código administrado y aporta servicios como GC, manejo de excepciones, carga de tipos y compilación.

**5. C -** **Herramientas de compilación, plantillas y CLI de desarrollo.** El SDK está orientado al desarrollo; el runtime es el subconjunto necesario para ejecutar aplicaciones dependientes del framework.

**6. B -** **Para compilar, ejecutar, probar, publicar y gestionar proyectos .NET desde la CLI.** La CLI `dotnet` centraliza tareas del ciclo de desarrollo y publicación.

**7. A -** **La biblioteca base de tipos y APIs comunes que usan las aplicaciones .NET.** La Base Class Library aporta colecciones, E/S, redes, texto, concurrencia y muchas APIs fundamentales.

**8. B -** **Que el código se ejecuta bajo los servicios del runtime, como GC, sistema de tipos y manejo de excepciones.** Managed code describe la relación con el runtime, no los privilegios de la cuenta del proceso.

**9. A -** **Puede ejecutarse en varios sistemas operativos compatibles, como Windows, Linux y macOS.** La portabilidad depende del runtime y de las APIs usadas, no del IDE.

**10. A -** **Gestionar paquetes y dependencias del ecosistema .NET.** NuGet es el gestor de paquetes; no debe confundirse con MSBuild, CLR o ASP.NET Core.

**11. D -** **Orquestar el proceso de compilación a partir de proyectos y objetivos de build.** MSBuild es el motor de construcción utilizado por los proyectos .NET.

**12. B -** **Un framework para aplicaciones y servicios web modernos.** ASP.NET Core construye aplicaciones web, APIs, Razor Pages y otros servicios sobre .NET.

**13. C -** **Que tenga instalado un runtime .NET compatible.** Una publicación dependiente del framework es más ligera, pero requiere un runtime compatible instalado.

**14. B -** **La aplicación incluye el runtime necesario y reduce la dependencia de una instalación global compatible.** Self-contained empaqueta el runtime para el destino; aumenta tamaño pero simplifica requisitos de ejecución.

**15. D -** **La LTS tiene una ventana de soporte más larga; la STS una ventana más corta.** LTS y STS describen políticas de soporte, no categorías funcionales de aplicaciones.

**16. C -** **El runtime correspondiente, no necesariamente el SDK completo.** Para ejecutar no suele hacer falta el SDK completo, salvo necesidades específicas de herramientas.

**17. D -** **ASP.NET Core.** ASP.NET Core es el framework web actual para APIs y aplicaciones HTTP.

**18. C -** **Para indicar el framework objetivo contra el que se compila el proyecto.** El TFM condiciona APIs disponibles, compatibilidad y resolución de dependencias.

**19. D -** **Una modalidad que compila anticipadamente a código nativo para ciertos escenarios y puede mejorar arranque y huella, con limitaciones de compatibilidad.** Native AOT es una opción de publicación, no un sustituto general del runtime en todos los escenarios.

**20. C -** **Debe partirse de los requisitos y del stack moderno soportado, evitando asumir que .NET Framework es la opción por defecto.** Arquitectura, soporte, plataforma de destino y librerías pesan más que la antigüedad de una tecnología.

# 2. CLR, IL, CTS, CLS, assemblies y gestión de recursos

**21. D -** **IL/CIL junto con metadatos dentro de assemblies.** El código fuente se compila normalmente a IL y metadatos; el runtime se encarga después de su ejecución.

**22. A -** **Convierte IL en código máquina cuando el código va a ejecutarse.** JIT significa Just-In-Time y forma parte del proceso de ejecución del código administrado.

**23. D -** **JIT compila durante la ejecución; AOT compila anticipadamente antes de ejecutar en el destino.** Ambos buscan código ejecutable, pero difieren en el momento y condiciones de compilación.

**24. B -** **Cómo se declaran, usan y gestionan los tipos en el entorno .NET para favorecer interoperabilidad entre lenguajes.** El Common Type System es la base común de tipos de los lenguajes que apuntan al runtime.

**25. C -** **Un subconjunto de reglas del sistema de tipos orientado a que APIs públicas sean interoperables entre lenguajes .NET.** CLS no es lo mismo que CTS: limita ciertas características para maximizar interoperabilidad pública.

**26. D -** **CLR es el runtime; CTS define el sistema común de tipos; CLS define reglas de interoperabilidad sobre un subconjunto del CTS.** Esta distinción es una de las trampas más frecuentes del tema III.11.

**27. D -** **Una unidad lógica de código y recursos con IL, metadatos y manifiesto, normalmente en DLL o EXE.** El assembly es una unidad fundamental de despliegue, versionado y carga de código .NET.

**28. C -** **Identidad del assembly, archivos, versión y referencias/dependencias relevantes.** El manifiesto describe el contenido e identidad del assembly.

**29. D -** **Para describir tipos, miembros, referencias y otra información que el runtime y herramientas pueden inspeccionar.** Los metadatos permiten carga, reflexión, interoperabilidad y tooling.

**30. B -** **Gestionar automáticamente la memoria de objetos administrados que ya no son alcanzables.** El GC gestiona memoria administrada, no sustituye la liberación determinista de recursos externos.

**31. A -** **Usar `using`/`await using` o llamar correctamente a `Dispose` según el caso.** IDisposable existe precisamente para liberar recursos de manera explícita y predecible.

**32. B -** **Porque su ejecución no es determinista y depende del GC.** Los finalizadores son una red de seguridad limitada, no un mecanismo de cierre puntual.

**33. C -** **Los tipos valor contienen su valor directamente según su semántica; las variables de tipo referencia contienen una referencia a un objeto.** La distinción influye en copia, nullabilidad, boxing y comportamiento de memoria.

**34. C -** **Convertir un tipo valor para tratarlo como `object` o una interfaz compatible, normalmente implicando una envoltura/objeto.** Boxing y unboxing son operaciones del sistema de tipos, no de despliegue.

**35. A -** **Un modelo estructurado y común de excepciones para código administrado.** El runtime ofrece infraestructura de excepciones, pero la aplicación sigue necesitando diseño y manejo adecuados.

**36. B -** **Un tipo seguro que representa referencias a métodos con una firma compatible.** Los delegados sustentan callbacks, eventos y muchos patrones funcionales.

**37. A -** **Permiten reutilización con seguridad de tipos evitando muchas conversiones y casts en tiempo de ejecución.** Los genéricos permiten código parametrizado por tipo con comprobaciones del compilador/runtime.

**38. A -** **Inspeccionar tipos, miembros y metadatos en tiempo de ejecución y, cuando procede, invocarlos dinámicamente.** Reflection usa precisamente los metadatos del runtime; debe emplearse con criterio por coste y compatibilidad AOT.

**39. B -** **No; mientras los objetos sigan alcanzables, el GC no puede considerarlos basura.** La memoria administrada puede sufrir fugas lógicas cuando se retienen referencias innecesarias.

**40. C -** **IL es independiente de una CPU concreta en un grado mayor; el runtime/JIT o AOT produce código adecuado para el destino.** La separación entre IL y código nativo facilita portabilidad y optimización por runtime.

# 3. C#, LINQ, asincronía, herramientas y paquetes

**41. A -** **Un modelo para componer operaciones asíncronas sin bloquear innecesariamente el hilo mientras se espera.** Asincronía y paralelismo no son sinónimos; `await` facilita esperas no bloqueantes.

**42. D -** **Una operación asíncrona que puede completarse en el futuro, con o sin resultado.** Task modela trabajo asíncrono; no implica por sí misma un hilo exclusivo.

**43. B -** **Bloqueos, pérdida de escalabilidad y, en ciertos contextos, interbloqueos.** El patrón sync-over-async puede bloquear hilos y romper el beneficio de la asincronía.

**44. C -** **Que la consulta no se evalúa hasta que se enumera o materializa.** Comprender cuándo se ejecuta una consulta evita efectos inesperados y trabajo repetido.

**45. B -** **El proveedor intenta traducir la expresión a una consulta del origen, por ejemplo SQL.** IQueryable permite que el proveedor procese el árbol de expresión y traduzca operaciones compatibles.

**46. D -** **`IEnumerable` opera sobre enumeración .NET; `IQueryable` puede representar una consulta que un proveedor traduzca a otro lenguaje/origen.** La diferencia es crucial para saber dónde se ejecuta el filtrado y qué puede traducirse.

**47. B -** **Garantiza la llamada a `Dispose` al salir del ámbito, incluso ante excepciones, según el patrón generado.** `using` expresa gestión determinista de recursos.

**48. D -** **`await` no significa que una operación sea paralela; permite suspender lógicamente el método hasta que la tarea finalice.** Asincronía optimiza especialmente esperas de E/S; para paralelismo CPU hay otras técnicas.

**49. A -** **Una forma concisa de modelar datos con semántica de igualdad por valor especialmente útil para modelos inmutables o DTOs.** Los records son una característica del lenguaje, no una tecnología de persistencia.

**50. C -** **Para expresar y analizar en compilación si una referencia puede ser nula, reduciendo errores de null.** Es una ayuda de análisis estático; no cambia por sí sola todas las garantías del runtime.

**51. C -** **Comprobar formas, tipos y propiedades de datos con patrones expresivos en `is` y `switch`.** El pattern matching mejora claridad al discriminar tipos y valores.

**52. B -** **Mantener información de tipos y reducir casts inseguros.** La seguridad de tipos es una de las razones centrales de los genéricos.

**53. A -** **Restaura las dependencias de paquetes necesarias para el proyecto.** Restore resuelve paquetes; en muchos comandos modernos se ejecuta implícitamente cuando hace falta.

**54. B -** **NuGet gestiona paquetes; MSBuild ejecuta el proceso de construcción del proyecto.** Separar gestión de dependencias y build evita una confusión frecuente.

**55. C -** **La definición del proyecto, TFM, propiedades y referencias, entre otros elementos de build.** El proyecto SDK-style se describe en XML y guía a MSBuild.

**56. A -** **`build` compila; `publish` prepara un conjunto desplegable con los artefactos necesarios según la modalidad elegida.** Publicar añade decisiones de distribución que no forman parte de una compilación normal.

**57. D -** **`dotnet test`.** `dotnet test` integra la ejecución de proyectos de prueba compatibles.

**58. A -** **Compila si es necesario y ejecuta el proyecto seleccionado.** Es un atajo de desarrollo para iniciar un proyecto desde la CLI.

**59. C -** **Para diagnóstico y observación del comportamiento de aplicaciones .NET en ejecución.** El ecosistema incluye herramientas de diagnóstico de métricas, trazas y rendimiento.

**60. D -** **Son herramientas de desarrollo; la aplicación .NET no depende conceptualmente de un IDE concreto para ejecutarse.** IDE, SDK y runtime son capas distintas.

# 4. ASP.NET Core: pipeline, DI, APIs y configuración

**61. D -** **Una secuencia de componentes que procesan la petición y la respuesta HTTP.** Cada middleware puede actuar, pasar al siguiente o cortar el pipeline según el caso.

**62. A -** **Un contenedor de inyección de dependencias integrado.** La DI integrada permite registrar servicios y resolver dependencias con distintos ciclos de vida.

**63. D -** **Relacionar una petición HTTP con el endpoint que debe atenderla.** Routing decide qué endpoint coincide con ruta, método y metadatos aplicables.

**64. D -** **Ambos sirven para APIs; Minimal APIs reducen ceremonia en escenarios simples y controllers aportan una estructura más clásica y rica para aplicaciones complejas.** No son tecnologías excluyentes por capacidad básica; la elección depende de estructura y requisitos.

**65. C -** **El servidor web multiplataforma utilizado por ASP.NET Core.** Kestrel puede atender HTTP directamente y también operar detrás de un reverse proxy.

**66. C -** **Para integrar terminación TLS, balanceo, políticas de borde u otras capacidades de infraestructura, según el despliegue.** Reverse proxy es una decisión de arquitectura, no una obligación absoluta para todos los escenarios.

**67. B -** **Proporcionar configuración de aplicación que puede combinarse con otras fuentes y entornos.** El sistema de configuración agrega proveedores; los secretos sensibles no deben tratarse como configuración pública normal.

**68. B -** **Mantenerlos fuera del código y de repositorios, usando almacenes de secretos o mecanismos seguros del entorno.** La gestión de secretos debe separar credenciales del artefacto y limitar su exposición.

**69. A -** **Para variar configuración y comportamiento según el contexto de ejecución.** El entorno puede condicionar configuración, páginas de error y servicios, pero no debe usarse como excusa para saltarse seguridad.

**70. A -** **Autenticar antes de autorizar, porque la autorización necesita una identidad establecida.** Microsoft documenta el orden de middleware; autenticación precede a autorización cuando ambas se usan.

**71. D -** **Autenticación determina quién es el usuario; autorización decide qué puede hacer.** Confundir identidad y permisos es una trampa recurrente.

**72. C -** **Transient, Scoped y Singleton.** Los lifetimes definen cuántas instancias se crean y cuánto viven.

**73. B -** **Scoped, normalmente una instancia por ámbito/petición.** DbContext no está diseñado para uso concurrente compartido; el registro habitual es scoped.

**74. A -** **Agrupar acciones/endpoints y coordinar entrada HTTP con la lógica de aplicación.** Los controllers forman parte de la capa HTTP, no deberían absorber toda la lógica de negocio.

**75. C -** **El proceso de obtener datos de la petición y construir/asignar parámetros u objetos del modelo de entrada.** Binding transforma fuentes HTTP en valores que las acciones/endpoints pueden usar.

**76. B -** **Comprobar reglas de entrada y detectar datos inválidos antes de procesarlos como válidos.** Validación, autenticación y autorización son controles distintos y complementarios.

**77. B -** **Los archivos servidos como públicos no deben contener secretos ni material que requiera autorización sin un diseño específico.** La posición del middleware y la naturaleza pública del contenido importan para la seguridad.

**78. A -** **Un manejador global de excepciones configurado para el entorno.** El handler global necesita envolver el resto del pipeline para capturar fallos posteriores.

**79. D -** **Endpoints/sondeos para expresar el estado de salud de la aplicación y dependencias relevantes.** Son útiles para orquestadores, balanceadores y monitorización; deben diseñarse con cuidado para no filtrar datos sensibles.

**80. C -** **Son capacidades de infraestructura/aplicación que deben configurarse según el comportamiento y riesgos del servicio; no sustituyen autenticación ni autorización.** Rendimiento, resiliencia y seguridad requieren controles distintos.

# 5. Datos: ADO.NET, EF Core, LINQ y rendimiento

**81. B -** **Un conjunto de APIs de acceso a datos de bajo nivel relativo, con conexiones, comandos, lectores y adaptadores/proveedores.** ADO.NET permite trabajar directamente con proveedores y comandos; EF Core se apoya en capas de acceso a datos pero ofrece un modelo ORM.

**82. A -** **Un ORM moderno para .NET que permite mapear entidades y consultar/persistir datos mediante un modelo de objetos.** EF Core es la opción ORM principal de Microsoft para .NET moderno.

**83. D -** **Una unidad de trabajo/sesión con el modelo y la base de datos, responsable de consultas, tracking y persistencia.** DbContext coordina entidades y base de datos y debe tener un ciclo de vida bien controlado.

**84. C -** **Un punto de acceso a un conjunto de entidades de un tipo dentro del modelo de EF Core.** DbSet se utiliza para consultar y operar con entidades de un tipo.

**85. B -** **Expresar consultas con tipos .NET que el proveedor intenta traducir al origen de datos.** La traducción es potente pero no ilimitada; hay que comprender qué se ejecuta en el servidor.

**86. A -** **El seguimiento del estado y cambios de entidades para determinar qué debe persistirse.** El tracking facilita actualizaciones, pero tiene coste y no siempre se necesita en consultas de solo lectura.

**87. A -** **En consultas de solo lectura donde no se necesita que el contexto detecte cambios de las entidades.** No tracking puede reducir memoria y coste de seguimiento en escenarios de lectura.

**88. C -** **Un mecanismo para versionar y aplicar cambios del esquema derivados del modelo de datos.** Las migraciones ayudan a evolucionar el esquema; no sustituyen estrategia de backup, revisión ni despliegue controlado.

**89. D -** **Realizar una consulta inicial y después muchas consultas adicionales, por ejemplo una por cada elemento, generando sobrecoste.** N+1 puede aparecer con ORMs si se acceden relaciones de forma ineficiente.

**90. C -** **Diseñar la consulta para traer los datos necesarios de forma controlada, por ejemplo con proyección o carga eager adecuada.** No existe una única receta; la clave es controlar qué datos se cargan y cuántas consultas se generan.

**91. B -** **Puede ocultar consultas adicionales y favorecer N+1 o acceso inesperado a la base de datos.** La comodidad de carga diferida puede dificultar ver el coste real de E/S.

**92. D -** **Usa una transacción para que la llamada se aplique de forma atómica según las capacidades del proveedor.** EF Core protege una llamada a SaveChanges con transacción cuando es posible; operaciones más amplias pueden requerir control explícito.

**93. D -** **Cuando una unidad de negocio abarca varias operaciones/SaveChanges o recursos y se necesita delimitar la atomicidad de forma concreta.** Las transacciones explícitas deben responder a límites de negocio y compatibilidad del proveedor.

**94. C -** **Parametrizar correctamente valores y evitar concatenar entrada del usuario para reducir riesgo de inyección.** La parametrización es una defensa esencial; el ORM no protege una consulta que se construye inseguramente.

**95. C -** **Los proveedores de datos pueden reutilizar conexiones físicas mediante pools; abrir/cerrar lógicamente una conexión no implica siempre crear/destruir una conexión física.** El pool mejora eficiencia, pero el código debe seguir disponer conexiones/contextos correctamente.

**96. B -** **Para detectar conflictos cuando otro proceso modifica una fila entre lectura y actualización, según la estrategia elegida.** La concurrencia optimista necesita una señal, como rowversion u otra propiedad, para detectar cambios competidores.

**97. A -** **Revisar la consulta y separar o reformular lo que deba ejecutarse en servidor o cliente de forma consciente.** No todo C# es traducible a SQL; hay que controlar la frontera entre consulta remota y ejecución en memoria.

**98. A -** **Materializa los resultados en ese punto y ejecuta la consulta si era diferida.** Materializar marca una frontera importante: a partir de ahí se trabaja sobre datos ya obtenidos.

**99. D -** **Aplicar paginación en la consulta del origen, con orden estable y estrategia adecuada al caso.** La paginación debe reducir transferencia y trabajo en el origen; para grandes volúmenes puede valorarse keyset pagination.

**100. B -** **ADO.NET ofrece acceso más directo a proveedor/comandos; EF Core añade abstracción ORM, tracking y LINQ sobre un modelo de entidades.** Elegir nivel de abstracción depende del control, complejidad, rendimiento y mantenibilidad requeridos.

# 6. Seguridad, identidad, despliegue y observabilidad .NET

**101. B -** **La petición debe haberse autenticado o disponer de una identidad establecida de forma válida.** Autorización necesita saber qué principal/identidad se está evaluando.

**102. B -** **La cookie suele mantener una sesión web mediante cookie; un bearer token se envía como credencial en cada petición, común en APIs.** Ambos pueden ser seguros o inseguros según diseño; la diferencia principal está en el mecanismo de credencial y escenario.

**103. D -** **Una afirmación sobre una identidad, como identificador, rol, ámbito u otro atributo.** Los claims alimentan decisiones de autorización y contexto de identidad.

**104. C -** **Permiten centralizar requisitos y combinaciones de claims/roles de forma reutilizable y comprobable.** Policy-based authorization ayuda a expresar reglas complejas sin duplicar lógica.

**105. C -** **Un sistema de pertenencia/gestión de usuarios y credenciales para aplicaciones ASP.NET Core, opcional según arquitectura.** Identity puede gestionar usuarios, contraseñas, tokens y roles, pero no es obligatorio para todas las soluciones.

**106. B -** **Delegar autorización para acceso a recursos mediante tokens y scopes.** OAuth 2.0 es un framework de autorización; para identidad/autenticación suele combinarse con OpenID Connect.

**107. B -** **Una capa de identidad/autenticación estandarizada, incluyendo ID Token y endpoints asociados.** OIDC permite autenticar al usuario sobre flujos OAuth compatibles.

**108. A -** **Para proteger criptográficamente datos de aplicación como cookies o tokens internos según el sistema de claves y propósito.** Data Protection es infraestructura criptográfica de aplicación; la gestión de claves importa especialmente en granjas y contenedores.

**109. D -** **Ataques CSRF que aprovechan credenciales enviadas automáticamente por el navegador.** Antiforgery no sustituye validación, XSS ni autorización; se centra en peticiones forjadas desde otro origen.

**110. C -** **Proteger la confidencialidad e integridad del tráfico en tránsito y autenticar el endpoint según la configuración de certificados.** TLS protege el canal; identidad, autorización y protección de datos en reposo son capas diferentes.

**111. B -** **Usar mecanismos de secretos/variables/gestores seguros y limitar permisos, evitando incorporarlos al repositorio.** Los secretos deben separarse del código y rotarse/protegerse según el entorno.

**112. C -** **Registrar eventos con campos y propiedades que facilitan búsqueda, correlación y análisis automatizado.** El logging estructurado mejora observabilidad, pero debe diseñarse para no filtrar secretos o datos personales.

**113. C -** **El estado de la aplicación y solo las dependencias relevantes para el tipo de sonda, sin exponer información sensible.** Liveness y readiness pueden requerir pruebas distintas; no conviene convertir health en un endpoint de diagnóstico público.

**114. A -** **Un estándar/ecosistema para instrumentar y exportar trazas, métricas y logs de forma interoperable.** OpenTelemetry facilita observabilidad distribuida y evita acoplar toda la instrumentación a un único proveedor.

**115. D -** **Empaquetar aplicación y dependencias de ejecución en una imagen reproducible y desplegable en entornos compatibles.** Los contenedores mejoran consistencia de despliegue, pero no resuelven por sí solos arquitectura o seguridad.

**116. A -** **Framework-dependent, porque reutiliza un runtime instalado en el destino.** Self-contained incluye runtime y suele aumentar tamaño, aunque puede simplificar operación.

**117. A -** **Una opción de publicación que agrupa gran parte de los artefactos de la aplicación en un único archivo para facilitar distribución.** Single-file es una modalidad de empaquetado y no equivale necesariamente a Native AOT.

**118. D -** **Puede mejorar arranque y huella, pero ciertas técnicas dinámicas o librerías pueden requerir adaptación y pruebas de compatibilidad.** AOT cambia supuestos sobre generación dinámica/reflection; debe evaluarse según el stack.

**119. D -** **Cabeceras reenviadas y confianza en proxies para reconstruir correctamente esquema, IP y host cuando proceda.** Confiar cabeceras de proxy sin limitar orígenes puede permitir suplantaciones.

**120. A -** **Mínimo privilegio: conceder solo permisos necesarios y separar responsabilidades.** El menor privilegio reduce el impacto de errores o compromisos.

# 7. Jakarta EE 11: plataforma, perfiles y servicios empresariales

**121. A -** **Java SE 17.** Jakarta EE 11 tiene Java 17 como mínimo y contempla el uso de Java 21 en su ecosistema.

**122. D -** **Core Profile, Web Profile y Platform.** Los perfiles agrupan conjuntos de especificaciones para distintos tipos de aplicación.

**123. C -** **Inyección de dependencias y gestión contextual del ciclo de vida de componentes.** CDI es el mecanismo moderno de DI/contextos en Jakarta EE.

**124. B -** **Jakarta Persistence.** Jakarta Persistence, heredera conceptual de JPA, define el modelo ORM de la plataforma.

**125. C -** **`EntityManager`.** EntityManager permite persistir, buscar, eliminar y consultar entidades dentro del contexto de persistencia.

**126. D -** **Un lenguaje de consulta orientado al modelo de entidades de Jakarta Persistence, no al esquema SQL físico directamente.** JPQL opera sobre entidades y atributos, aunque el proveedor normalmente termina generando SQL.

**127. D -** **Jakarta Transactions.** Transactions define APIs y semántica para límites transaccionales en la plataforma.

**128. B -** **Jakarta REST.** Jakarta REST proporciona anotaciones y APIs para exponer y consumir servicios REST.

**129. D -** **APIs y mecanismos estandarizados de autenticación/autorización integrados con la plataforma.** Security forma parte de la capa de seguridad de Jakarta EE; no debe confundirse con TLS o con el servidor concreto.

**130. A -** **Declarar y comprobar restricciones de validación sobre datos/beans.** Validation facilita reglas declarativas como límites, formatos y nulabilidad.

**131. A -** **La especificación base para componentes web que procesan peticiones/respuestas HTTP en el contenedor web.** Servlet sigue siendo una pieza fundamental del stack web Jakarta.

**132. B -** **Un framework de componentes de interfaz web del lado servidor incluido en el ámbito de Jakarta EE.** Faces es una tecnología de UI; no es el mecanismo de DI ni el runtime.

**133. D -** **Una especificación para facilitar acceso a datos mediante repositorios y abstracciones estandarizadas.** Jakarta Data entra en Jakarta EE 11 como nueva especificación para patrones de acceso a datos.

**134. C -** **WildFly, Payara, GlassFish u Open Liberty, entre otros.** No debe confundirse la especificación Jakarta EE con sus implementaciones/runtime.

**135. B -** **Gestionar build y dependencias; no son el servidor/runtime Jakarta EE.** Build tool y runtime son capas distintas, igual que NuGet/MSBuild no equivalen al CLR.

**136. A -** **De `javax.\*` a `jakarta.\*` para las APIs transferidas a Jakarta.** La transición de namespace es uno de los impactos de migración más visibles.

**137. B -** **CDI.** CDI es la base moderna para DI y contextos; conviene evitar material antiguo que presente Managed Beans como mecanismo general actual.

**138. A -** **La especificación define contratos/semántica; una implementación concreta proporciona el runtime que los ejecuta.** Esta distinción explica por qué existen varios runtimes compatibles con la misma plataforma.

**139. C -** **Jakarta EE se construye sobre Java SE y añade especificaciones empresariales; no son versiones equivalentes.** La numeración de Jakarta EE no debe interpretarse como versión de Java SE.

**140. C -** **Para asegurar que las operaciones que forman una unidad de negocio confirmen o reviertan de forma coherente.** Transacción es una propiedad de consistencia de la unidad de trabajo, no del proceso de build.

# 8. Comparativa .NET / Jakarta EE y casos de arquitectura

**141. B -** **DI integrada de ASP.NET Core y CDI en Jakarta EE.** Ambos stacks ofrecen contenedores/mecanismos de DI, aunque sus APIs y modelos concretos difieren.

**142. D -** **EF Core y Jakarta Persistence.** EF Core y Jakarta Persistence abstraen persistencia objeto-relacional sobre proveedores de datos.

**143. A -** **ASP.NET Core (controllers/Minimal APIs) y Jakarta REST.** En ambos casos se construyen endpoints HTTP, aunque .NET es framework de implementación y Jakarta REST es especificación.

**144. C -** **Ambos distinguen autenticación y autorización y pueden integrarse con identidades externas; los mecanismos concretos son distintos.** La separación conceptual de identidad y permisos es común a ambas plataformas.

**145. A -** **ASP.NET Core suele ejecutarse sobre Kestrel dentro del proceso .NET; Jakarta EE ejecuta componentes en un runtime/contenedor que implementa sus especificaciones.** La topología de hosting difiere: Kestrel es servidor HTTP de ASP.NET Core; Jakarta usa un runtime de plataforma.

**146. C -** **NuGet gestiona paquetes .NET; Maven/Gradle gestionan dependencias/build en Java/Jakarta; MSBuild orquesta el build .NET.** Conviene separar gestor de paquetes/build de servidor/runtime.

**147. D -** **Separar capa HTTP/controladores de servicios de aplicación/dominio e inyectar dependencias.** La separación de responsabilidades mejora testabilidad y portabilidad conceptual.

**148. B -** **Usar ADO.NET o una técnica de acceso más directa para ese punto, sin obligar a abandonar EF Core en todo el sistema.** Las arquitecturas pueden combinar niveles de abstracción donde exista una razón técnica medida.

**149. B -** **Usar acceso JDBC/SQL nativo de forma controlada en ese caso, manteniendo Jakarta Persistence donde aporte valor.** La abstracción ORM no impide recurrir a mecanismos más directos cuando existe una necesidad justificada.

**150. C -** **Puede publicarse framework-dependent o self-contained según imagen/base y estrategia; el contenedor no obliga a una única modalidad.** Contenedor y modalidad de publicación son decisiones relacionadas pero distintas.

**151. D -** **APIs y librerías heredadas, compatibilidad, modelo de hosting/configuración y dependencias específicas de Windows.** Migrar no es un simple retargeting; hay que revisar dependencias y arquitectura.

**152. A -** **La transición de paquetes `javax.\*` a `jakarta.\*` y la compatibilidad de librerías/runtime.** El namespace y la compatibilidad del ecosistema son puntos clave de migración.

**153. C -** **Revisar el patrón de carga/proyección y las consultas generadas; no culpar al lenguaje ni aumentar hardware sin medir.** El problema es de patrón de acceso y debe diagnosticarse con observabilidad y consultas reales.

**154. B -** **Autenticar identidad, aplicar autorización, validar entrada y ejecutar lógica con mínimo privilegio, además de proteger el canal y secretos.** La seguridad eficaz es por capas; ningún control individual sustituye a los demás.

**155. D -** **Definir un límite transaccional en la capa de servicio usando EF Core/transacciones en .NET o Jakarta Transactions/Persistence en Jakarta EE según el stack.** La transacción debe alinearse con la unidad de negocio y los recursos implicados.

**156. C -** **OpenTelemetry, mediante instrumentación y exportadores compatibles en ambos ecosistemas.** OpenTelemetry es multiplataforma y facilita trazas/métricas/logs con backend desacoplado.

**157. A -** **Jakarta EE está organizado fuertemente como conjunto de especificaciones con múltiples implementaciones; .NET es una plataforma/producto con frameworks de Microsoft y ecosistema asociado.** Entender el modelo de estandarización evita equiparar erróneamente Jakarta EE con un producto concreto.

**158. B -** **Priorizar APIs estándar de Jakarta y aislar extensiones específicas del proveedor cuando sean necesarias.** La portabilidad mejora cuando se separan dependencias propietarias de la lógica estándar.

**159. A -** **OAuth 2.0 se centra en autorización delegada y OIDC añade identidad/autenticación; ambos pueden integrarse tanto en .NET como en Jakarta/Java.** Los protocolos son independientes del lenguaje y se integran mediante librerías y servidores de identidad.

**160. D -** **Elegir componentes coherentes del stack, separar responsabilidades y verificar soporte/versiones: ASP.NET Core + EF Core + seguridad .NET o Jakarta REST/CDI/Persistence/Transactions/Security en un runtime compatible.** El examen busca reconocer capas y equivalencias sin confundir lenguaje, runtime, framework, build, persistencia y seguridad.

# Mapa de equivalencias .NET / Jakarta EE

| **Capa** | **Ecosistema .NET** | **Ecosistema Jakarta EE** |
| --- | --- | --- |
| Runtime/plataforma | CLR + .NET | Java SE + runtime Jakarta EE compatible |
| DI | DI integrada de ASP.NET Core | CDI |
| Web/API | ASP.NET Core Controllers / Minimal APIs | Jakarta REST + Servlet |
| Persistencia ORM | EF Core | Jakarta Persistence |
| Acceso directo | ADO.NET/proveedor | JDBC |
| Transacciones | ADO.NET/EF Core + APIs del proveedor | Jakarta Transactions |
| Seguridad | Authentication/Authorization/Identity | Jakarta Security + integraciones de identidad |
| Build/paquetes | dotnet + MSBuild + NuGet | Maven o Gradle |
| Hosting | Kestrel; opcional reverse proxy | Runtime/servidor como WildFly, Payara, GlassFish u Open Liberty |
| Observabilidad | Logging/metrics/traces; OpenTelemetry | Logging/metrics/traces; OpenTelemetry |

# Trampas que deben quedar eliminadas

- CLR != CTS != CLS.

- .NET moderno != .NET Framework.

- NuGet != MSBuild != dotnet CLI.

- ASP.NET Core != Kestrel: el primero es framework web; el segundo, servidor HTTP.

- ADO.NET != EF Core.

- LINQ != SQL y async/await != paralelismo.

- Autenticacion != autorizacion; OAuth 2.0 != OpenID Connect.

- Jakarta EE 11 != Java SE 11.

- Jakarta Persistence != JDBC; CDI != runtime; Maven/Gradle != servidor Jakarta.

- Especificacion Jakarta EE != implementacion concreta.

# Fuentes oficiales verificadas

[Microsoft - Releases and support for .NET](https://learn.microsoft.com/en-us/dotnet/core/releases-and-support)

[Microsoft - CLR overview](https://learn.microsoft.com/en-us/dotnet/standard/clr)

[Microsoft - ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/)

[Microsoft - ASP.NET Core authentication](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/?view=aspnetcore-10.0)

[Microsoft - EF Core](https://learn.microsoft.com/en-us/ef/core/)

[Jakarta EE 11 Platform](https://jakarta.ee/specifications/platform/11/)

[Jakarta EE 11 release](https://jakarta.ee/release/11/)

**Base interna:** [GSI\_A2 - BLOQUE III - APUNTES COMPLETOS V2.1 REVISADOS - ESTUDIO](https://docs.google.com/document/d/1eUTbZtV2Jj1Y8P_pjOP7Tk86chx1r9lPyLwuz3vBCec/edit)
