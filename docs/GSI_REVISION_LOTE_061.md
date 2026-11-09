# GSI-EDITORIAL-061 — revisión propuesta

Preparado: 2026-10-30. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `0724983bc4ed58e438b5a7ddb532b76d29f6af8b9def7837a64a4fc98cd7bc4d`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P15-012

Decisión: pending_review · acción: revise.

Motivo: Conservar framework web y clave B; comparar capas próximas de .NET.

### Antes

¿Qué es ASP.NET Core dentro del ecosistema .NET?

- A. El sistema de paquetes de .NET.
- B. Un framework para aplicaciones y servicios web modernos. **(correcta)**
- C. El recolector de basura del CLR.
- D. Una versión de SQL Server.

Explicación: Un framework para aplicaciones y servicios web modernos. ASP.NET Core construye aplicaciones web, APIs, Razor Pages y otros servicios sobre .NET.

### Propuesta

¿Qué es ASP.NET Core dentro del ecosistema .NET?

- A. El entorno que ejecuta IL y proporciona servicios de memoria y excepciones.
- B. El framework que permite construir aplicaciones y servicios web sobre .NET. **(correcta)**
- C. Las bibliotecas base de tipos, colecciones y entrada/salida de propósito general.
- D. La herramienta que selecciona el SDK y coordina los comandos de desarrollo.

Explicación: ASP.NET Core aporta el marco web sobre .NET, con canalización HTTP y modelos para APIs y páginas. Utiliza servicios del runtime y bibliotecas base sin ser sinónimo de ellos ni del SDK. Las dependencias de una aplicación deben ser compatibles con su destino.

- Error A: Ejecutar código administrado y aportar GC y excepciones describe el runtime, sobre cuyos servicios se construye el marco web.
- Error C: Las bibliotecas base sirven para distintos tipos de aplicaciones; no identifican el framework de aplicaciones web.
- Error D: Seleccionar el SDK y ejecutar comandos corresponde a las herramientas de desarrollo, no define ASP.NET Core.

- [Microsoft: .NET glossary](https://learn.microsoft.com/en-us/dotnet/standard/glossary) · ASP.NET Core; BCL; assembly; AOT y JIT · versión: Leída el 30-10-2026. Definiciones de capas; referencias históricas CoreRT/.NET Native no se convierten en recomendaciones actuales. · comprobado: 2026-10-30
- [Microsoft: CLR overview](https://learn.microsoft.com/en-us/dotnet/standard/clr) · Introducción: entorno de ejecución, metadatos y servicios del código administrado · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: global.json](https://learn.microsoft.com/en-us/dotnet/core/tools/global-json) · Introducción; selección de SDK independiente del framework objetivo; sdk.version · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `808386dcd9ea8599ef001d538ff783e8a42d128ac391b4f25e7a52edd62e3b09` · propuesta: `cffcaa85e851bef49058c7884fd99c4d0f308faf2b9f990a265fcd73af57d03a`

## MAN-GSI-P15-013

Decisión: pending_review · acción: revise.

Motivo: Conservar runtime compatible y clave C; microcaso de ejecución sin compilación.

### Antes

En una publicación framework-dependent, ¿qué se espera normalmente del entorno de destino?

- A. Que use obligatoriamente IIS.
- B. Que el ejecutable incluya siempre todo el sistema operativo.
- C. Que tenga instalado un runtime .NET compatible. **(correcta)**
- D. Que no exista ningún runtime .NET.

Explicación: Que tenga instalado un runtime .NET compatible. Una publicación dependiente del framework es más ligera, pero requiere un runtime compatible instalado.

### Propuesta

Se entrega una aplicación de consola framework-dependent a un servidor donde solo se ejecutará. ¿Qué requisito de .NET debe comprobarse?

- A. Instalar el SDK usado al compilar aunque no haya que volver a construir.
- B. Preparar solo bibliotecas del sistema porque el runtime ya va incluido.
- C. Disponer de un runtime .NET compatible con la aplicación publicada. **(correcta)**
- D. Recompilar en el servidor para convertir la publicación en autocontenida.

Explicación: Framework-dependent requiere un runtime que pueda ejecutar la aplicación en el destino; no distribuye ese runtime como una publicación autocontenida. El SDK no es necesario para la ejecución ordinaria. También se comprueban sistema y dependencias nativas; no basta con cualquier versión instalada de .NET.

- Error A: El SDK es para desarrollar y compilar; exigirlo por ser el usado en origen confunde herramientas y requisitos de ejecución.
- Error B: Incluir el runtime caracteriza self-contained; las bibliotecas del sistema no lo sustituyen en esta publicación.
- Error D: Una publicación dependiente funciona con un runtime compatible; no exige recompilar en destino o cambiar de modalidad.

- [Microsoft: Publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/) · Publishing modes; Publishing basics: framework-dependent, self-contained, TFM y RID · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Install .NET on Windows](https://learn.microsoft.com/en-us/dotnet/core/install/windows) · SDK y runtimes: ejecución frente a desarrollo; runtime correspondiente · versión: Leída el 30-10-2026 para distinguir componentes; no se ejecutan instrucciones de instalación ni se generalizan requisitos de Windows. · comprobado: 2026-10-30

Partida: `180e6dd4932bd2683450b4eba0c0ff1ddafc0e3493d3b59ad1e42ce6429307e9` · propuesta: `e03a03dd8dd7e3fde64be9687ae488685182626fb81c0f92090e60f009596156`

## MAN-GSI-P15-014

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado, alternativas y clave B; separar autocontenido, archivo único y AOT.

### Antes

En una publicación self-contained, ¿qué ventaja principal se obtiene?

- A. La aplicación depende de que exista un runtime global compatible y distribuye principalmente sus propios binarios.
- B. La aplicación incluye el runtime necesario y reduce la dependencia de una instalación global compatible. **(correcta)**
- C. Los ensamblados y otros artefactos se agrupan para facilitar la distribución en un único archivo ejecutable.
- D. El código se compila anticipadamente a nativo y reduce la dependencia de JIT, con posibles límites de compatibilidad.

Explicación: La aplicación incluye el runtime necesario y reduce la dependencia de una instalación global compatible. Self-contained empaqueta el runtime para el destino; aumenta tamaño pero simplifica requisitos de ejecución.

### Propuesta

En una publicación self-contained, ¿qué ventaja principal se obtiene?

- A. La aplicación depende de que exista un runtime global compatible y distribuye principalmente sus propios binarios.
- B. La aplicación incluye el runtime necesario y reduce la dependencia de una instalación global compatible. **(correcta)**
- C. Los ensamblados y otros artefactos se agrupan para facilitar la distribución en un único archivo ejecutable.
- D. El código se compila anticipadamente a nativo y reduce la dependencia de JIT, con posibles límites de compatibilidad.

Explicación: Self-contained incluye el runtime para el destino elegido y evita depender de su instalación global. Debe mantenerse actualizado ese runtime incluido. No convierte APIs exclusivas en portables ni elimina otras dependencias nativas. Agrupar archivos y compilar anticipadamente son decisiones distintas.

- Error A: Depender de un runtime global describe framework-dependent; no es la ventaja de incluirlo en self-contained.
- Error C: Agrupar artefactos describe single-file, disponible con distintas modalidades; no define self-contained.
- Error D: Compilar anticipadamente a nativo describe AOT. Incluir el runtime no implica por sí mismo esa compilación.

- [Microsoft: Publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/) · Publishing modes; Publishing basics: framework-dependent, self-contained, TFM y RID · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Single-file](https://learn.microsoft.com/en-us/dotnet/core/deploying/single-file/overview) · Introducción: empaquetado disponible framework-dependent y self-contained · versión: Leída el 30-10-2026. Solo distinción de empaquetado; ejemplos antiguos y defaults variables no se adoptan como regla actual universal. · comprobado: 2026-10-30
- [Microsoft: Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; IL a nativo al publicar; destino; ausencia de JIT al ejecutar; limitaciones · versión: Leída el 30-10-2026. Incluye servicios de runtime; no elimina GC ni garantiza compatibilidad de carga dinámica o reflexión. · comprobado: 2026-10-30

Partida: `aa32021438585799aadfc933749269ebebefad73d0e2383592a3cff3f0e4d62f` · propuesta: `efe511f176dd414d61b157952a925c0906c24667e41e505752982faae106f275`

## MAN-GSI-P15-015

Decisión: pending_review · acción: revise.

Motivo: Conservar ventana de soporte y clave D; fechar la duración vigente y distinguir calidad y ciclo de vida.

### Antes

¿Qué diferencia conceptual hay entre una versión LTS y una STS de .NET?

- A. La LTS solo sirve para escritorio.
- B. La STS siempre es más segura que la LTS.
- C. La STS no recibe actualizaciones de seguridad.
- D. La LTS tiene una ventana de soporte más larga; la STS una ventana más corta. **(correcta)**

Explicación: La LTS tiene una ventana de soporte más larga; la STS una ventana más corta. LTS y STS describen políticas de soporte, no categorías funcionales de aplicaciones.

### Propuesta

¿Qué diferencia conceptual hay entre una versión LTS y una STS de .NET?

- A. La LTS destina sus APIs a escritorio y la STS las destina a servidores.
- B. La STS ofrece más garantías de seguridad y la LTS recibe menos parches.
- C. La LTS recibe parches de seguridad y la STS solo correcciones funcionales.
- D. La LTS dispone de un periodo de soporte más largo que la STS. **(correcta)**

Explicación: LTS y STS identifican duraciones de soporte, no tipos de aplicación ni niveles de calidad. La política comprobada el 30-10-2026 establece tres años para LTS y dos para STS. Ambas reciben parches durante soporte y deben mantenerse actualizadas; la duración debe comprobarse al decidir una versión.

- Error A: El tipo de soporte no reserva APIs para escritorio o servidor: son dimensiones distintas.
- Error B: La política declara igual calidad de las versiones; la ventana más corta no otorga mayor seguridad por categoría.
- Error C: STS también recibe soporte y parches de seguridad mientras está soportada.

- [Microsoft: Support policy](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core) · What releases qualify for servicing; Supported versions; Release types · versión: Actualizada 25-10-2026, comprobada 30-10-2026: LTS tres años y STS dos; ambas con parches durante soporte y obligación de mantener parches vigentes. · comprobado: 2026-10-30

Partida: `72f47c471e2e976272f8fdd95fe57a305f65199fff6ae133481c13e506152ec1` · propuesta: `5d410444ded6264f394c2b8bc343e44c510b30af5151a21f5ef4473f6784265c`

## MAN-GSI-P15-016

Decisión: pending_review · acción: revise.

Motivo: Conservar runtime frente a SDK y clave C; alternativas de componentes próximos.

### Antes

Si un servidor solo debe ejecutar una aplicación .NET y no compilarla, ¿qué instalación suele ser suficiente si la publicación es framework-dependent?

- A. El código fuente del proyecto.
- B. MSBuild instalado de forma independiente siempre.
- C. El runtime correspondiente, no necesariamente el SDK completo. **(correcta)**
- D. Visual Studio Enterprise.

Explicación: El runtime correspondiente, no necesariamente el SDK completo. Para ejecutar no suele hacer falta el SDK completo, salvo necesidades específicas de herramientas.

### Propuesta

Si un servidor solo debe ejecutar una aplicación .NET y no compilarla, ¿qué instalación suele ser suficiente si la publicación es framework-dependent?

- A. El SDK completo con compiladores y herramientas de construcción.
- B. El entorno de desarrollo usado para crear y depurar la aplicación.
- C. El runtime apropiado para la aplicación y la plataforma de destino. **(correcta)**
- D. El paquete de referencias para comprobar las APIs al compilar.

Explicación: Para ejecutar framework-dependent suele bastar el runtime correspondiente a la aplicación y al destino. Una aplicación web puede necesitar el runtime de ASP.NET Core y siguen existiendo requisitos del sistema. El SDK aporta herramientas de desarrollo que no son requisito general para ejecutar una publicación.

- Error A: El SDK puede incluir runtimes, pero sus compiladores y herramientas no son necesarios por el mero hecho de ejecutar.
- Error B: El IDE ayuda a desarrollar; instalar el mismo editor no satisface por sí solo los requisitos de ejecución del servidor.
- Error D: Los ensamblados de referencia permiten compilar contra APIs; no son por sí solos el runtime que las implementa y ejecuta.

- [Microsoft: Install .NET on Windows](https://learn.microsoft.com/en-us/dotnet/core/install/windows) · SDK y runtimes: ejecución frente a desarrollo; runtime correspondiente · versión: Leída el 30-10-2026 para distinguir componentes; no se ejecutan instrucciones de instalación ni se generalizan requisitos de Windows. · comprobado: 2026-10-30
- [Microsoft: Publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/) · Publishing modes; Publishing basics: framework-dependent, self-contained, TFM y RID · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `b967fee3674b72f005a242d727ce4fb062cdf74edeb9c5b129c78e82afb0df5a` · propuesta: `be63dde8a4b326f8b10f5d7e0ed79e3da21071b066ca5b468be91e4f22e636ca`

## MAN-GSI-P15-018

Decisión: pending_review · acción: revise.

Motivo: Conservar TFM y clave C; contrastar SDK, RID y configuración.

### Antes

¿Para qué se utiliza un Target Framework Moniker como \`net10.0\` en un proyecto?

- A. Para definir el nombre de la base de datos.
- B. Para seleccionar el servidor DNS.
- C. Para indicar el framework objetivo contra el que se compila el proyecto. **(correcta)**
- D. Para fijar la versión de Git.

Explicación: Para indicar el framework objetivo contra el que se compila el proyecto. El TFM condiciona APIs disponibles, compatibilidad y resolución de dependencias.

### Propuesta

¿Para qué se utiliza un Target Framework Moniker como \`net10.0\` en un proyecto?

- A. Para seleccionar la versión del SDK usada por los comandos de desarrollo.
- B. Para determinar el sistema y la arquitectura de los activos nativos del destino.
- C. Para indicar el framework objetivo y las APIs disponibles al compilar el proyecto. **(correcta)**
- D. Para elegir la configuración de construcción y optimización Debug o Release.

Explicación: Un TFM como net10.0 identifica el framework objetivo y condiciona las APIs disponibles al compilar y la compatibilidad de dependencias. No fija la versión exacta del SDK o el sistema y CPU del destino. SDK, RID y configuración de construcción son ejes distintos.

- Error A: global.json permite seleccionar un SDK; el framework objetivo no equivale a esa versión de herramientas.
- Error B: El RID identifica destinos como linux-x64 y activos específicos. net10.0 no es un RID.
- Error D: Debug y Release son configuraciones; el TFM puede mantenerse en ambas y no las selecciona.

- [Microsoft: Target frameworks](https://learn.microsoft.com/en-us/dotnet/standard/frameworks) · Introducción; Latest versions; OS-specific TFMs · versión: Leída el 30-10-2026. net10.0 estable; TFM no es versión exacta del SDK, RID o configuración Release. · comprobado: 2026-10-30
- [Microsoft: global.json](https://learn.microsoft.com/en-us/dotnet/core/tools/global-json) · Introducción; selección de SDK independiente del framework objetivo; sdk.version · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: RID catalog](https://learn.microsoft.com/en-us/dotnet/core/rid-catalog) · Introducción; RuntimeIdentifier; linux-x64, win-x64 y activos específicos de plataforma · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/) · Publishing modes; Publishing basics: framework-dependent, self-contained, TFM y RID · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `0cb7773c5172ddbc7d5276d8af836b9c4c6b57c91acb71529562d7e19fac0ec8` · propuesta: `f4dd54618dc81a22e144be4538fa842378a3f612cc41a4eebf7ed5d749bc7165`

## MAN-GSI-P15-019

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado, opciones y clave D; delimitar AOT frente a R2R, JIT y empaquetado.

### Antes

¿Qué describe mejor Native AOT en .NET?

- A. Una publicación ReadyToRun que incorpora código precompilado junto con IL y mantiene el runtime para completar la ejecución.
- B. La compilación JIT de métodos durante la ejecución según se invocan y de acuerdo con el entorno donde corre la aplicación.
- C. El empaquetado de artefactos administrados en un archivo de distribución, sin implicar compilación nativa anticipada.
- D. Una modalidad que compila anticipadamente a código nativo para ciertos escenarios y puede mejorar arranque y huella, con limitaciones de compatibilidad. **(correcta)**

Explicación: Una modalidad que compila anticipadamente a código nativo para ciertos escenarios y puede mejorar arranque y huella, con limitaciones de compatibilidad. Native AOT es una opción de publicación, no un sustituto general del runtime en todos los escenarios.

### Propuesta

¿Qué describe mejor Native AOT en .NET?

- A. Una publicación ReadyToRun que incorpora código precompilado junto con IL y mantiene el runtime para completar la ejecución.
- B. La compilación JIT de métodos durante la ejecución según se invocan y de acuerdo con el entorno donde corre la aplicación.
- C. El empaquetado de artefactos administrados en un archivo de distribución, sin implicar compilación nativa anticipada.
- D. Una modalidad que compila anticipadamente a código nativo para ciertos escenarios y puede mejorar arranque y huella, con limitaciones de compatibilidad. **(correcta)**

Explicación: Native AOT compila IL a nativo al publicar para un entorno concreto y no usa JIT al ejecutar. Puede favorecer arranque y huella, pero exige revisar reflexión, carga dinámica y compatibilidad. Incluye servicios de runtime necesarios, como gestión de memoria; no elimina todos los componentes de ejecución de .NET.

- Error A: ReadyToRun conserva IL y código precompilado y puede usar JIT; no equivale a Native AOT sin JIT al ejecutar.
- Error B: Compilar bajo demanda durante la ejecución es JIT, frente a la compilación anticipada preguntada.
- Error C: Single-file es empaquetado; un archivo único no demuestra compilación anticipada a nativo.

- [Microsoft: Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; IL a nativo al publicar; destino; ausencia de JIT al ejecutar; limitaciones · versión: Leída el 30-10-2026. Incluye servicios de runtime; no elimina GC ni garantiza compatibilidad de carga dinámica o reflexión. · comprobado: 2026-10-30
- [Microsoft: ReadyToRun](https://learn.microsoft.com/en-us/dotnet/core/deploying/ready-to-run) · Introducción; Impact of using the ReadyToRun feature: IL, nativo y reducción de trabajo JIT · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Single-file](https://learn.microsoft.com/en-us/dotnet/core/deploying/single-file/overview) · Introducción: empaquetado disponible framework-dependent y self-contained · versión: Leída el 30-10-2026. Solo distinción de empaquetado; ejemplos antiguos y defaults variables no se adoptan como regla actual universal. · comprobado: 2026-10-30

Partida: `8863ee1ede7b3713e0f2ee696462e1761623b3e26c8d51227d183bb642be22d0` · propuesta: `83f4b511e0a44ae3a458b2f5a14190495e556ca084f16bd865ee063023b98a54`

## MAN-GSI-P15-020

Decisión: pending_review · acción: revise.

Motivo: Conservar elección por requisitos y clave C; caso con dependencia incompatible que requiere resolver el límite.

### Antes

¿Qué afirmación es correcta al elegir tecnología .NET para un sistema nuevo?

- A. Elegir siempre .NET Framework por su mayor antigüedad, aunque el sistema nuevo necesite plataformas o capacidades modernas no soportadas.
- B. Determinar el runtime de producción exclusivamente a partir del IDE usado por el equipo, con independencia del destino del despliegue.
- C. Debe partirse de los requisitos y del stack moderno soportado, evitando asumir que .NET Framework es la opción por defecto. **(correcta)**
- D. Derivar toda la arquitectura del lenguaje escogido, porque las necesidades funcionales y operativas no alteran las decisiones de plataforma.

Explicación: Debe partirse de los requisitos y del stack moderno soportado, evitando asumir que .NET Framework es la opción por defecto. Arquitectura, soporte, plataforma de destino y librerías pesan más que la antigüedad de una tecnología.

### Propuesta

Una API nueva debe funcionar en Windows y Linux, pero una dependencia propuesta solo admite Windows. ¿Qué criterio guía la elección de tecnología .NET?

- A. Elegir .NET Framework por antigüedad y posponer la revisión de la dependencia.
- B. Elegir el IDE del equipo y dar por determinada la compatibilidad del destino.
- C. Evaluar requisitos y dependencias para elegir una plataforma soportada compatible. **(correcta)**
- D. Publicar como self-contained y dar por resuelta la limitación de la dependencia.

Explicación: La elección parte de requisitos, destinos, soporte y compatibilidad de bibliotecas. Para una API nueva en Windows y Linux, .NET moderno es la base general, pero la dependencia exclusiva exige sustituirse, aislarse o revisar el diseño antes de cumplir el requisito. Incluir el runtime no adapta una API exclusiva ni el IDE determina la plataforma de producción.

- Error A: La antigüedad no acredita compatibilidad con Linux; posponer la revisión deja abierto un requisito explícito.
- Error B: El IDE no cambia los sistemas admitidos por una biblioteca ni decide por sí mismo el runtime de producción.
- Error D: Self-contained incluye el runtime del destino, pero no reescribe una dependencia exclusiva para hacerla portable.

- [Microsoft: .NET vs .NET Framework](https://learn.microsoft.com/en-us/dotnet/standard/choosing-core-framework-server) · Introducción; Choose .NET; Choose .NET Framework: multiplataforma y dependencias heredadas · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/) · Publishing modes; Publishing basics: framework-dependent, self-contained, TFM y RID · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `a61f3414e3b80dc7bc06f614709e1024d5fb395c546a8e90a87e6ec5d8e3faf0` · propuesta: `be89832cbd947832fc31dfcb74ba5b10ea0c741984893221516629156d0cb918`

## MAN-GSI-P15-021

Decisión: pending_review · acción: revise.

Motivo: Conservar IL/metadatos y clave D; acotar compilación tradicional previa a publicar.

### Antes

¿Qué suele generar el compilador de C\# antes de la ejecución tradicional en el CLR?

- A. Código máquina nativo para la CPU de destino, sin compilación posterior por parte del runtime.
- B. Bytecode de la JVM almacenado en clases Java para ejecutarlo en una máquina virtual externa.
- C. Una imagen de contenedor completa generada directamente por el compilador de C\#.
- D. IL/CIL junto con metadatos dentro de assemblies. **(correcta)**

Explicación: IL/CIL junto con metadatos dentro de assemblies. El código fuente se compila normalmente a IL y metadatos; el runtime se encarga después de su ejecución.

### Propuesta

Se compila una biblioteca C\# para ejecución tradicional en el CLR, antes de publicar con Native AOT o ReadyToRun. ¿Qué contiene normalmente su salida administrada?

- A. Código máquina final para el destino, propio de una publicación Native AOT.
- B. Código precompilado e IL del artefacto publicado con ReadyToRun habilitado.
- C. Un paquete de distribución que incorpora bibliotecas y el runtime de destino.
- D. IL/CIL y metadatos dentro del ensamblado administrado generado. **(correcta)**

Explicación: En la compilación administrada tradicional, el compilador produce CIL y metadatos de tipos y miembros dentro del ensamblado. Con JIT se genera después código máquina según se necesita. Native AOT, ReadyToRun y empaquetado son procesos de publicación distintos de esta salida previa a publicar.

- Error A: El código nativo final anticipado corresponde al proceso Native AOT que el caso excluye, no a esta salida administrada tradicional.
- Error B: ReadyToRun agrega código precompilado al publicar con esa configuración; no es la salida requerida en el caso.
- Error C: Distribuir un runtime es una decisión de publicación autocontenida; no define la salida del compilador de C\# preguntada.

- [Microsoft: Managed execution](https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process) · Compile to CIL; Compile CIL to native code; Compilation by the JIT compiler · versión: Leída el 30-10-2026. IL/metadatos y JIT tradicional; apartados históricos NGen y seguridad no describen todos los modos modernos. · comprobado: 2026-10-30
- [Microsoft: Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; IL a nativo al publicar; destino; ausencia de JIT al ejecutar; limitaciones · versión: Leída el 30-10-2026. Incluye servicios de runtime; no elimina GC ni garantiza compatibilidad de carga dinámica o reflexión. · comprobado: 2026-10-30
- [Microsoft: ReadyToRun](https://learn.microsoft.com/en-us/dotnet/core/deploying/ready-to-run) · Introducción; Impact of using the ReadyToRun feature: IL, nativo y reducción de trabajo JIT · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/) · Publishing modes; Publishing basics: framework-dependent, self-contained, TFM y RID · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `8f1c60849ee92932a2d59d179a99e2b157cfaf0827dacfbb63fb654024c277d5` · propuesta: `75e2a48e7e71b5911c45fd84d2d056729cb862f7ccbb1f0b3ed38555c2144cd8`

## MAN-GSI-P15-022

Decisión: pending_review · acción: revise.

Motivo: Conservar JIT y clave A; contrastar etapas próximas sin generalizar JIT a todo .NET.

### Antes

¿Qué hace la compilación JIT?

- A. Convierte IL en código máquina cuando el código va a ejecutarse. **(correcta)**
- B. Convierte SQL en C\#.
- C. Genera archivos de configuración.
- D. Descarga paquetes de NuGet.

Explicación: Convierte IL en código máquina cuando el código va a ejecutarse. JIT significa Just-In-Time y forma parte del proceso de ejecución del código administrado.

### Propuesta

¿Qué hace la compilación JIT?

- A. Transforma IL en código máquina bajo demanda durante la ejecución. **(correcta)**
- B. Transforma código fuente en IL y metadatos al construir el ensamblado.
- C. Transforma IL en código nativo al publicar antes de ejecutar en destino.
- D. Agrupa ensamblados y dependencias en un archivo para su distribución.

Explicación: El JIT convierte IL en código nativo durante la ejecución, normalmente conforme se requiere código de métodos. El código generado se puede reutilizar; no se interpreta cada instrucción ni se compila necesariamente en cada llamada. Native AOT evita el JIT al ejecutar.

- Error B: Fuente a IL y metadatos corresponde al compilador de lenguaje en la construcción, no a la función del JIT.
- Error C: La conversión anticipada al publicar describe Native AOT; cambia el momento frente al JIT.
- Error D: Agrupar archivos es empaquetado y no generación de código máquina bajo demanda.

- [Microsoft: Managed execution](https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process) · Compile to CIL; Compile CIL to native code; Compilation by the JIT compiler · versión: Leída el 30-10-2026. IL/metadatos y JIT tradicional; apartados históricos NGen y seguridad no describen todos los modos modernos. · comprobado: 2026-10-30
- [Microsoft: Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; IL a nativo al publicar; destino; ausencia de JIT al ejecutar; limitaciones · versión: Leída el 30-10-2026. Incluye servicios de runtime; no elimina GC ni garantiza compatibilidad de carga dinámica o reflexión. · comprobado: 2026-10-30
- [Microsoft: Single-file](https://learn.microsoft.com/en-us/dotnet/core/deploying/single-file/overview) · Introducción: empaquetado disponible framework-dependent y self-contained · versión: Leída el 30-10-2026. Solo distinción de empaquetado; ejemplos antiguos y defaults variables no se adoptan como regla actual universal. · comprobado: 2026-10-30

Partida: `85e37c8df18854b7e343f9ca66573850a6190bea3061203c648a48d959a15413` · propuesta: `8009683a95dc35203932546500375d8a842c8f87b82f30b2828ffd16190c2bca`

## MAN-GSI-P15-023

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación temporal y clave D; explicar coexistencia de R2R y JIT.

### Antes

¿Qué diferencia fundamental existe entre JIT y AOT?

- A. Interpretar AOT el código durante cada ejecución, mientras JIT distribuye binarios nativos producidos antes de llegar al destino.
- B. Ser dos nombres del mismo mecanismo de compilación y realizar siempre el trabajo en el mismo momento y con idéntica información del entorno.
- C. Aplicarse JIT únicamente a Java y AOT únicamente a .NET, sin que otros runtimes o lenguajes puedan emplear estrategias semejantes.
- D. JIT compila durante la ejecución; AOT compila anticipadamente antes de ejecutar en el destino. **(correcta)**

Explicación: JIT compila durante la ejecución; AOT compila anticipadamente antes de ejecutar en el destino. Ambos buscan código ejecutable, pero difieren en el momento y condiciones de compilación.

### Propuesta

¿Qué diferencia fundamental existe entre JIT y AOT?

- A. JIT compila antes del despliegue y AOT lo hace al invocar los métodos.
- B. JIT genera IL desde fuente y AOT genera metadatos desde los tipos.
- C. JIT solo se usa en Java y AOT solo se emplea en aplicaciones .NET.
- D. JIT compila al ejecutar y AOT lo hace anticipadamente a la ejecución. **(correcta)**

Explicación: JIT y AOT se distinguen por el momento de generación de código nativo: durante la ejecución o antes de ella. No son exclusivos de un lenguaje. Pueden coexistir técnicas, como ReadyToRun con código precompilado y uso posterior de JIT; no todo AOT tiene las propiedades de Native AOT.

- Error A: Invierte la relación temporal: la anticipación corresponde a AOT y la compilación durante ejecución a JIT.
- Error B: Confunde compilación de lenguaje y descripciones de tipos con la diferencia temporal entre JIT y AOT.
- Error C: Son estrategias generales de compilación, no categorías reservadas respectivamente a Java y .NET.

- [Microsoft: Managed execution](https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process) · Compile to CIL; Compile CIL to native code; Compilation by the JIT compiler · versión: Leída el 30-10-2026. IL/metadatos y JIT tradicional; apartados históricos NGen y seguridad no describen todos los modos modernos. · comprobado: 2026-10-30
- [Microsoft: Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; IL a nativo al publicar; destino; ausencia de JIT al ejecutar; limitaciones · versión: Leída el 30-10-2026. Incluye servicios de runtime; no elimina GC ni garantiza compatibilidad de carga dinámica o reflexión. · comprobado: 2026-10-30
- [Microsoft: ReadyToRun](https://learn.microsoft.com/en-us/dotnet/core/deploying/ready-to-run) · Introducción; Impact of using the ReadyToRun feature: IL, nativo y reducción de trabajo JIT · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: .NET glossary](https://learn.microsoft.com/en-us/dotnet/standard/glossary) · ASP.NET Core; BCL; assembly; AOT y JIT · versión: Leída el 30-10-2026. Definiciones de capas; referencias históricas CoreRT/.NET Native no se convierten en recomendaciones actuales. · comprobado: 2026-10-30

Partida: `d12b89cdc516aa7b9c8b5be364ab3f6944f992eb38053cf618af41c2e795c699` · propuesta: `ee5f3bc5d66bcad07f083ea9282926b4dc321504bc956a75a632d9104accbf43`

## MAN-GSI-P15-024

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado, opciones y clave B; explicar CTS frente a CLS, runtime y bibliotecas.

### Antes

¿Qué define principalmente el CTS?

- A. El subconjunto de reglas que los lenguajes deben respetar para exponer APIs consumibles desde otros lenguajes .NET.
- B. Cómo se declaran, usan y gestionan los tipos en el entorno .NET para favorecer interoperabilidad entre lenguajes. **(correcta)**
- C. El entorno de ejecución que carga y ejecuta código administrado, gestiona memoria y aplica servicios de tiempo de ejecución.
- D. El conjunto de bibliotecas base que aporta colecciones, entrada/salida, redes y otras APIs comunes a .NET.

Explicación: Cómo se declaran, usan y gestionan los tipos en el entorno .NET para favorecer interoperabilidad entre lenguajes. El Common Type System es la base común de tipos de los lenguajes que apuntan al runtime.

### Propuesta

¿Qué define principalmente el CTS?

- A. El subconjunto de reglas que los lenguajes deben respetar para exponer APIs consumibles desde otros lenguajes .NET.
- B. Cómo se declaran, usan y gestionan los tipos en el entorno .NET para favorecer interoperabilidad entre lenguajes. **(correcta)**
- C. El entorno de ejecución que carga y ejecuta código administrado, gestiona memoria y aplica servicios de tiempo de ejecución.
- D. El conjunto de bibliotecas base que aporta colecciones, entrada/salida, redes y otras APIs comunes a .NET.

Explicación: El CTS define declaración, uso y gestión común de tipos y permite compartir categorías y reglas entre lenguajes. No es el motor de ejecución ni un conjunto de APIs de aplicación. Que un tipo esté admitido por CTS no implica que sus características cumplan las restricciones de interoperabilidad del CLS.

- Error A: El subconjunto de reglas para interfaces interoperables describe CLS; CTS es el sistema de tipos más amplio.
- Error C: Carga, ejecución y memoria son responsabilidades del runtime, no la definición del CTS.
- Error D: Colecciones, redes y entrada/salida son APIs de bibliotecas base; no equivalen al sistema de tipos.

- [Microsoft: Common type system](https://learn.microsoft.com/en-us/dotnet/standard/base-types/common-type-system) · Introducción; Types in .NET: declaración, uso, gestión e integración entre lenguajes · versión: Leída el 30-10-2026. Definición y categorías; no se trasladan restricciones históricas de constructores de estructuras a C\# actual. · comprobado: 2026-10-30
- [Microsoft: Language independence](https://learn.microsoft.com/en-us/dotnet/standard/language-independence-and-language-independent-components) · Introducción; CLS compliance rules: interfaz pública, implementación privada y ejemplo UInt16 · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: CLR overview](https://learn.microsoft.com/en-us/dotnet/standard/clr) · Introducción: entorno de ejecución, metadatos y servicios del código administrado · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: .NET glossary](https://learn.microsoft.com/en-us/dotnet/standard/glossary) · ASP.NET Core; BCL; assembly; AOT y JIT · versión: Leída el 30-10-2026. Definiciones de capas; referencias históricas CoreRT/.NET Native no se convierten en recomendaciones actuales. · comprobado: 2026-10-30

Partida: `a61518a766a82e2d3e4d3ea01afa09dd637b253273f5d376b390377c36cb4f62` · propuesta: `f46dc6870a7963844a42f2f8b5b3d58c313a86db5e571e8de5d9b248da1af0d6`

## MAN-GSI-P15-025

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra pregunta y clave C; precisar superficie pública frente a implementación privada.

### Antes

¿Qué es el CLS?

- A. El sistema común que define cómo se declaran, utilizan y gestionan los tipos dentro del entorno .NET.
- B. El entorno de ejecución que carga código administrado, gestiona memoria, excepciones y compilación JIT.
- C. Un subconjunto de reglas del sistema de tipos orientado a que APIs públicas sean interoperables entre lenguajes .NET. **(correcta)**
- D. El conjunto de bibliotecas base que ofrece colecciones, entrada/salida, redes y otras APIs comunes.

Explicación: Un subconjunto de reglas del sistema de tipos orientado a que APIs públicas sean interoperables entre lenguajes .NET. CLS no es lo mismo que CTS: limita ciertas características para maximizar interoperabilidad pública.

### Propuesta

¿Qué es el CLS?

- A. El sistema común que define cómo se declaran, utilizan y gestionan los tipos dentro del entorno .NET.
- B. El entorno de ejecución que carga código administrado, gestiona memoria, excepciones y compilación JIT.
- C. Un subconjunto de reglas del sistema de tipos orientado a que APIs públicas sean interoperables entre lenguajes .NET. **(correcta)**
- D. El conjunto de bibliotecas base que ofrece colecciones, entrada/salida, redes y otras APIs comunes.

Explicación: CLS establece reglas sobre el sistema de tipos para exponer interfaces consumibles desde lenguajes que lo admiten. La conformidad afecta a la superficie pública, incluidos miembros protegidos pertinentes, sin exigir las mismas restricciones a la implementación privada. Exponer UInt16 difiere de utilizarlo internamente. No todo programa .NET debe declarar conformidad CLS.

- Error A: La declaración, uso y gestión general de tipos corresponde a CTS; CLS selecciona reglas de interoperabilidad de interfaces.
- Error B: Ejecutar código, gestionar memoria y compilar con JIT corresponde al runtime, no al CLS.
- Error D: Las bibliotecas base ofrecen APIs; CLS regula características de las interfaces, no es ese conjunto de bibliotecas.

- [Microsoft: Language independence](https://learn.microsoft.com/en-us/dotnet/standard/language-independence-and-language-independent-components) · Introducción; CLS compliance rules: interfaz pública, implementación privada y ejemplo UInt16 · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Common type system](https://learn.microsoft.com/en-us/dotnet/standard/base-types/common-type-system) · Introducción; Types in .NET: declaración, uso, gestión e integración entre lenguajes · versión: Leída el 30-10-2026. Definición y categorías; no se trasladan restricciones históricas de constructores de estructuras a C\# actual. · comprobado: 2026-10-30
- [Microsoft: CLR overview](https://learn.microsoft.com/en-us/dotnet/standard/clr) · Introducción: entorno de ejecución, metadatos y servicios del código administrado · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: .NET glossary](https://learn.microsoft.com/en-us/dotnet/standard/glossary) · ASP.NET Core; BCL; assembly; AOT y JIT · versión: Leída el 30-10-2026. Definiciones de capas; referencias históricas CoreRT/.NET Native no se convierten en recomendaciones actuales. · comprobado: 2026-10-30

Partida: `5c4fa81e939f3e7a5af1a59132506ebcbe57d46fb625ac35ab1931dbb16bd70f` · propuesta: `9929257442615cc820941da37610db2e514167dc2de7ec7a994bd2117c8dd6c3`

## MAN-GSI-P15-026

Decisión: pending_review · acción: revise.

Motivo: Conservar relación CLR/CTS/CLS y clave D; permutaciones de funciones próximas.

### Antes

¿Cuál es la relación correcta entre CLR, CTS y CLS?

- A. Son nombres equivalentes para el entorno de ejecución y cada término comprende exactamente los mismos tipos, servicios y reglas.
- B. CTS ejecuta directamente el código administrado, mientras CLR se limita a establecer los nombres permitidos para los tipos públicos.
- C. CLR y CTS son gestores de paquetes que resuelven dependencias, y CLS es el servidor web encargado de alojar las aplicaciones.
- D. CLR es el runtime; CTS define el sistema común de tipos; CLS define reglas de interoperabilidad sobre un subconjunto del CTS. **(correcta)**

Explicación: CLR es el runtime; CTS define el sistema común de tipos; CLS define reglas de interoperabilidad sobre un subconjunto del CTS. Esta distinción es una de las trampas más frecuentes del tema III.11.

### Propuesta

¿Cuál es la relación correcta entre CLR, CTS y CLS?

- A. CLR define los tipos; CTS fija reglas públicas; CLS ejecuta el código.
- B. CLR ejecuta el código; CTS fija reglas públicas; CLS define todos los tipos.
- C. CLR fija reglas públicas; CTS ejecuta el código; CLS define todos los tipos.
- D. CLR ejecuta el código; CTS define tipos; CLS fija reglas de interoperabilidad. **(correcta)**

Explicación: CLR aporta entorno y servicios de ejecución; CTS define el sistema común de tipos; CLS restringe características de interfaces públicas para interoperar entre lenguajes compatibles. Las funciones se relacionan y no son intercambiables. JIT es un servicio del modo tradicional, no la definición de CTS o CLS ni requisito de Native AOT.

- Error A: Intercambia las tres funciones: CLS no ejecuta código y CLR no sustituye al sistema de tipos CTS.
- Error B: Mantiene CLR, pero invierte CTS y CLS: sistema general frente a reglas de interfaz.
- Error C: Atribuye ejecución al CTS y reglas públicas al CLR, además de ampliar CLS al sistema completo de tipos.

- [Microsoft: CLR overview](https://learn.microsoft.com/en-us/dotnet/standard/clr) · Introducción: entorno de ejecución, metadatos y servicios del código administrado · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Common type system](https://learn.microsoft.com/en-us/dotnet/standard/base-types/common-type-system) · Introducción; Types in .NET: declaración, uso, gestión e integración entre lenguajes · versión: Leída el 30-10-2026. Definición y categorías; no se trasladan restricciones históricas de constructores de estructuras a C\# actual. · comprobado: 2026-10-30
- [Microsoft: Language independence](https://learn.microsoft.com/en-us/dotnet/standard/language-independence-and-language-independent-components) · Introducción; CLS compliance rules: interfaz pública, implementación privada y ejemplo UInt16 · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; IL a nativo al publicar; destino; ausencia de JIT al ejecutar; limitaciones · versión: Leída el 30-10-2026. Incluye servicios de runtime; no elimina GC ni garantiza compatibilidad de carga dinámica o reflexión. · comprobado: 2026-10-30

Partida: `e16bbb3248fe440ad77009fd55753fbed7245ad1f33de69ed3a579940eded3e9` · propuesta: `fdd83f18ed83e16458d1db7b5e5eda321556facc220e8032c1500e0c49882e34`

## MAN-GSI-P15-027

Decisión: pending_review · acción: revise.

Motivo: Conservar unidad lógica y clave D; acotar modelo administrado tradicional.

### Antes

¿Qué es un assembly en .NET?

- A. Un paquete NuGet que agrupa uno o varios artefactos, dependencias y metadatos para su distribución mediante repositorios.
- B. El proceso del sistema operativo que aloja el CLR y ejecuta una o varias unidades de código cargadas en memoria.
- C. El proyecto fuente con archivos C\#, configuración de compilación y referencias, antes de producir sus salidas binarias.
- D. Una unidad lógica de código y recursos con IL, metadatos y manifiesto, normalmente en DLL o EXE. **(correcta)**

Explicación: Una unidad lógica de código y recursos con IL, metadatos y manifiesto, normalmente en DLL o EXE. El assembly es una unidad fundamental de despliegue, versionado y carga de código .NET.

### Propuesta

En el modelo administrado tradicional de .NET, ¿qué es un assembly?

- A. Un paquete de distribución que agrupa artefactos y declara sus dependencias.
- B. Un proceso del sistema que aloja la ejecución y los ensamblados cargados.
- C. Un proyecto de fuentes y referencias antes de producir el binario administrado.
- D. Una unidad lógica de código y recursos con IL, metadatos y manifiesto. **(correcta)**

Explicación: Un assembly administrado agrupa tipos, código y recursos como unidad lógica de carga, despliegue y versionado, descrita por metadatos y manifiesto. En el contexto tradicional preguntado incluye IL y suele ser DLL o EXE. Ni toda DLL es un assembly .NET ni el proceso, proyecto o paquete que lo aloja constituye esa misma unidad.

- Error A: Un paquete puede distribuir varios ensamblados y otros activos; el contenedor de distribución no equivale al assembly.
- Error B: El proceso puede alojar el runtime y cargar varios ensamblados, pero no es una de esas unidades de código.
- Error C: El proyecto contiene entradas y configuración de construcción; el assembly es un artefacto administrado resultante.

- [Microsoft: Assemblies](https://learn.microsoft.com/en-us/dotnet/standard/assembly/) · Introducción y propiedades: unidad lógica de tipos/recursos; despliegue y versionado · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Assembly manifest](https://learn.microsoft.com/en-us/dotnet/standard/assembly/manifest) · Funciones; Assembly manifest contents: identidad, archivos y referencias · versión: Leída el 30-10-2026. No se generalizan políticas históricas de carga/versionado de Framework al host moderno. · comprobado: 2026-10-30
- [Microsoft: Managed execution](https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process) · Compile to CIL; Compile CIL to native code; Compilation by the JIT compiler · versión: Leída el 30-10-2026. IL/metadatos y JIT tradicional; apartados históricos NGen y seguridad no describen todos los modos modernos. · comprobado: 2026-10-30

Partida: `83653ebfcaa6dabf82cf21e534ef55d59604c9645b1497fa09c7a4eb8a2d9ca9` · propuesta: `5e009204cb45a7c3a8b2eae792141f425a47a6d25ba80fefe7f3fc10640983b0`

## MAN-GSI-P15-028

Decisión: pending_review · acción: revise.

Motivo: Conservar contenido del manifiesto y clave C; microcaso de inspección de identidad y dependencias.

### Antes

¿Qué información se asocia al manifiesto de un assembly?

- A. Reglas de firewall del sistema operativo.
- B. Únicamente contraseñas de usuarios.
- C. Identidad del assembly, archivos, versión y referencias/dependencias relevantes. **(correcta)**
- D. Consultas SQL precalculadas.

Explicación: Identidad del assembly, archivos, versión y referencias/dependencias relevantes. El manifiesto describe el contenido e identidad del assembly.

### Propuesta

Una herramienta inspecciona el manifiesto de una DLL administrada para identificarla y conocer sus dependencias declaradas. ¿Qué información espera encontrar?

- A. Las instrucciones IL que realizan las operaciones de cada método.
- B. Los símbolos que relacionan instrucciones con líneas del código fuente.
- C. La identidad del assembly y sus referencias a otros ensamblados. **(correcta)**
- D. El código nativo generado para los métodos durante la ejecución.

Explicación: El manifiesto contiene nombre, versión, cultura y, si procede, información de nombre seguro, además de archivos y referencias. Describe la identidad y dependencias de la unidad. Identidad o nombre seguro no significan autenticidad garantizada; tampoco deben generalizarse las políticas históricas de carga de Framework al host moderno.

- Error A: Las instrucciones IL implementan métodos; no son la información descriptiva de identidad y referencias buscada.
- Error B: Los símbolos de depuración relacionan ejecución y fuente; no sustituyen el manifiesto de identidad y referencias.
- Error D: El código generado por JIT realiza operaciones en memoria; no es el manifiesto del archivo administrado.

- [Microsoft: Assembly manifest](https://learn.microsoft.com/en-us/dotnet/standard/assembly/manifest) · Funciones; Assembly manifest contents: identidad, archivos y referencias · versión: Leída el 30-10-2026. No se generalizan políticas históricas de carga/versionado de Framework al host moderno. · comprobado: 2026-10-30
- [Microsoft: Metadata](https://learn.microsoft.com/en-us/dotnet/standard/metadata-and-self-describing-components) · Introducción; tipos y miembros; Metadata and the PE File Structure · versión: Leída el 30-10-2026. Metadatos frente a IL y símbolos; el modelo histórico de permisos del artículo no se presenta como vigente. · comprobado: 2026-10-30
- [Microsoft: Managed execution](https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process) · Compile to CIL; Compile CIL to native code; Compilation by the JIT compiler · versión: Leída el 30-10-2026. IL/metadatos y JIT tradicional; apartados históricos NGen y seguridad no describen todos los modos modernos. · comprobado: 2026-10-30

Partida: `57249a1fc8c958207e8e3730e92afe1d554b8cdcc8f6a8838b17ec9a289d2518` · propuesta: `38e0e0c8330c795ef41e628a550fe08cafdfdc55773679e0d84e01256998162f`

## MAN-GSI-P15-029

Decisión: pending_review · acción: revise.

Motivo: Conservar metadatos y clave D; alternativas próximas de IL, símbolos y configuración.

### Antes

¿Para qué sirven los metadatos incluidos en un assembly?

- A. Las instrucciones IL que implementan los métodos y que la máquina virtual compila o interpreta durante la ejecución.
- B. Los símbolos PDB que relacionan binarios con archivos y líneas de código fuente para facilitar depuración y diagnóstico.
- C. Los valores de configuración del entorno y secretos de despliegue, incorporados obligatoriamente dentro de cada assembly.
- D. Para describir tipos, miembros, referencias y otra información que el runtime y herramientas pueden inspeccionar. **(correcta)**

Explicación: Para describir tipos, miembros, referencias y otra información que el runtime y herramientas pueden inspeccionar. Los metadatos permiten carga, reflexión, interoperabilidad y tooling.

### Propuesta

¿Para qué sirven los metadatos incluidos en un assembly?

- A. Para ejecutar las instrucciones IL que implementan operaciones de los métodos.
- B. Para relacionar direcciones ejecutadas con líneas del fuente mediante símbolos.
- C. Para almacenar los valores de configuración propios del entorno de despliegue.
- D. Para describir tipos, miembros y referencias inspeccionables por runtime y herramientas. **(correcta)**

Explicación: Los metadatos describen declarativamente tipos, miembros, atributos y referencias para que runtime y herramientas conozcan la estructura del componente. No son el cuerpo IL, los símbolos o la configuración de despliegue. La inspección concreta por reflexión puede estar limitada por recorte o Native AOT y requiere revisar ese modo de publicación.

- Error A: IL expresa operaciones ejecutables; la descripción de un método en metadatos no ejecuta su cuerpo.
- Error B: La correspondencia con líneas se apoya en símbolos de depuración; no define el propósito de los metadatos del assembly.
- Error C: La configuración del entorno es otra responsabilidad, distinta de describir tipos y referencias.

- [Microsoft: Metadata](https://learn.microsoft.com/en-us/dotnet/standard/metadata-and-self-describing-components) · Introducción; tipos y miembros; Metadata and the PE File Structure · versión: Leída el 30-10-2026. Metadatos frente a IL y símbolos; el modelo histórico de permisos del artículo no se presenta como vigente. · comprobado: 2026-10-30
- [Microsoft: Assembly manifest](https://learn.microsoft.com/en-us/dotnet/standard/assembly/manifest) · Funciones; Assembly manifest contents: identidad, archivos y referencias · versión: Leída el 30-10-2026. No se generalizan políticas históricas de carga/versionado de Framework al host moderno. · comprobado: 2026-10-30
- [Microsoft: Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; IL a nativo al publicar; destino; ausencia de JIT al ejecutar; limitaciones · versión: Leída el 30-10-2026. Incluye servicios de runtime; no elimina GC ni garantiza compatibilidad de carga dinámica o reflexión. · comprobado: 2026-10-30

Partida: `262f551b7263e17c3f0c7d317046f5c0871518d2804c891be45f88b70fe6c1fe` · propuesta: `ccec839cae8f0016f137b22a8a80c71fbfaf870b1cefe34a316e92260aa3c1ab`

## MAN-GSI-P15-030

Decisión: pending_review · acción: revise.

Motivo: Conservar memoria administrada inalcanzable y clave B; caso de retención por referencias fuertes.

### Antes

¿Qué responsabilidad principal tiene el Garbage Collector?

- A. Liberar recursos no administrados aunque sigan referenciados.
- B. Gestionar automáticamente la memoria de objetos administrados que ya no son alcanzables. **(correcta)**
- C. Eliminar archivos temporales del sistema operativo.
- D. Cerrar de forma determinista cualquier socket en el instante exacto deseado.

Explicación: Gestionar automáticamente la memoria de objetos administrados que ya no son alcanzables. El GC gestiona memoria administrada, no sustituye la liberación determinista de recursos externos.

### Propuesta

Una colección en un campo estático alcanzable conserva referencias fuertes a objetos que ya no se usan en el negocio. ¿Qué criterio aplica el Garbage Collector?

- A. Recuperará esos objetos al detectar que el negocio ya no los necesita.
- B. Podrá recuperar memoria de objetos que dejen de ser alcanzables desde las raíces. **(correcta)**
- C. Vaciará la colección estática para eliminar referencias y después recuperar memoria.
- D. Llamará a Dispose sobre los objetos almacenados cuando termine su vida útil.

Explicación: El GC identifica objetos alcanzables desde raíces mediante referencias. Una colección estática alcanzable con referencias fuertes puede retener objetos aunque ya no sean útiles al negocio. Al dejar de ser alcanzables podrán ser candidatos a recuperación, sin fijar un instante. El GC no vacía colecciones por criterio funcional ni sustituye la disposición explícita de recursos.

- Error A: El GC no conoce la utilidad de negocio; una referencia fuerte alcanzable mantiene al objeto aunque ya no se necesite funcionalmente.
- Error C: El GC no decide quitar elementos de la colección de la aplicación para alterar sus referencias.
- Error D: No se deduce un plazo de Dispose del GC; la liberación determinista necesita un contrato y una llamada o patrón apropiado.

- [Microsoft: GC fundamentals](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals) · Memory release: raíces, grafo de referencias fuertes y objetos inalcanzables · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Unmanaged resources](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/unmanaged) · Introducción; Dispose y SafeHandle; el GC no libera por sí solo cada recurso externo · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `85eb462681661eb2f5c6b32bc209227d64f6d2112fe594e62f202238b5a0329d` · propuesta: `ae8bace5978ced0ac39b2fb0607d0f38ff74f54dfb8a030e306c49be08562073`

## MAN-GSI-P15-031

Decisión: pending_review · acción: revise.

Motivo: Conservar liberación determinista y clave A; precisar solo IDisposable sin cambiar el concepto.

### Antes

Para liberar de forma determinista un recurso que implementa \`IDisposable\`, ¿qué patrón es el más apropiado?

- A. Usar \`using\`/\`await using\` o llamar correctamente a \`Dispose\` según el caso. **(correcta)**
- B. Reiniciar el proceso.
- C. Esperar siempre a que actúe el GC.
- D. Forzar \`GC.Collect()\` después de cada operación.

Explicación: Usar \`using\`/\`await using\` o llamar correctamente a \`Dispose\` según el caso. IDisposable existe precisamente para liberar recursos de manera explícita y predecible.

### Propuesta

Un recurso implementa solo IDisposable, sin patrón de liberación asíncrona. Debe liberarse al salir de un bloque, incluso con excepción. ¿Qué patrón corresponde?

- A. Encerrar su uso en using o en try/finally que llame a Dispose. **(correcta)**
- B. Añadir un finalizador y esperar su ejecución al salir del bloque.
- C. Invocar GC.Collect para sustituir la llamada explícita a Dispose.
- D. Usar await using aunque no exista contrato o patrón de liberación asíncrona.

Explicación: En este contrato síncrono, using invoca Dispose al abandonar su bloque, incluso con excepción, mediante una estructura equivalente a try/finally. Puede escribirse ese patrón explícitamente. await using necesita disposición asíncrona compatible, normalmente IAsyncDisposable/DisposeAsync; solo IDisposable no la aporta. Dispose libera recursos según su contrato, sin destruir inmediatamente la memoria del objeto.

- Error B: El finalizador no se ejecuta determinísticamente al salir del bloque; no garantiza el cierre en el punto requerido.
- Error C: Forzar una colección no sustituye Dispose ni garantiza liberar inmediatamente un recurso externo y puede perjudicar el rendimiento.
- Error D: Añadir await a using no aporta un patrón asíncrono; sin él no es la disposición válida de este objeto.

- [Microsoft: using statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/using) · IDisposable; salida con excepción; await using; reescritura try/finally · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: DisposeAsync](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-disposeasync) · Introducción; IAsyncDisposable/DisposeAsync frente a IDisposable; Using async disposable · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Finalizers](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/finalizers) · Momento no controlable; terminación según implementación; Explicit release of resources · versión: Leída el 30-10-2026. .NET5+ no ejecuta finalizadores como parte de la terminación; sin experimentos temporales con GC. · comprobado: 2026-10-30
- [Microsoft: Unmanaged resources](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/unmanaged) · Introducción; Dispose y SafeHandle; el GC no libera por sí solo cada recurso externo · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `ce62ccb97552517083768a1fee04187fa2e66b0b7dc29524bceee109f43c7bd3` · propuesta: `2ff2df7b98409df701543a47fc2ea37c808dd293e4bab02382c9afeea23e73c1`

## MAN-GSI-P15-032

Decisión: pending_review · acción: revise.

Motivo: Conservar finalización no determinista y clave B; contrastar supuestos de sincronización y Dispose.

### Antes

¿Por qué no debe confiarse en un finalizador para cerrar inmediatamente un recurso externo?

- A. Porque los finalizadores se ejecutan antes que el constructor.
- B. Porque su ejecución no es determinista y depende del GC. **(correcta)**
- C. Porque sustituyen a \`Dispose\` en todos los casos.
- D. Porque solo funcionan en Linux.

Explicación: Porque su ejecución no es determinista y depende del GC. Los finalizadores son una red de seguridad limitada, no un mecanismo de cierre puntual.

### Propuesta

¿Por qué no debe confiarse en un finalizador para cerrar inmediatamente un recurso externo?

- A. Porque el GC ejecuta el finalizador al terminar la última llamada de negocio.
- B. Porque el momento de finalización no es determinista ni garantiza el cierre inmediato. **(correcta)**
- C. Porque declarar un finalizador hace innecesario implementar o invocar Dispose.
- D. Porque GC.Collect garantiza que el recurso ya está cerrado al retornar.

Explicación: El programa no controla cuándo se ejecuta un finalizador y no puede usarlo para garantizar cierre inmediato. El comportamiento al terminar depende de la implementación: .NET5 y posteriores no ejecutan finalizadores como parte de la terminación. Para liberar cuando corresponde se usa Dispose o el contrato asíncrono adecuado; SafeHandle permite encapsular ciertos recursos nativos.

- Error A: La última operación de negocio no determina cuándo deja de ser alcanzable el objeto ni cuándo se finaliza.
- Error C: La finalización es una salvaguarda limitada; no elimina la necesidad de una vía explícita de liberación determinista.
- Error D: Una colección forzada no garantiza por sí sola que haya terminado toda finalización ni sustituye la disposición explícita.

- [Microsoft: Finalizers](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/finalizers) · Momento no controlable; terminación según implementación; Explicit release of resources · versión: Leída el 30-10-2026. .NET5+ no ejecuta finalizadores como parte de la terminación; sin experimentos temporales con GC. · comprobado: 2026-10-30
- [Microsoft: Unmanaged resources](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/unmanaged) · Introducción; Dispose y SafeHandle; el GC no libera por sí solo cada recurso externo · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: using statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/using) · IDisposable; salida con excepción; await using; reescritura try/finally · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `adb579d82e44a6cfd37da82a0701f69974b876017c3f2b482bc591f7dc5a3869` · propuesta: `9a9425ccc7242479e52e15dad060ba2fbdd3042eeacb9b6d9491902554b33a0a`
