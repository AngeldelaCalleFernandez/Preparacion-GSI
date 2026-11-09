# GSI-EDITORIAL-062 — revisión propuesta

Preparado: 2026-10-30. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `8ed2b1abdebb28e05424831b35356124be350c875313d0f230447e1051fdd2a1`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P15-033

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y clave C; matizar copia superficial de campos de referencia y evitar el mito de la pila.

### Antes

¿Qué diferencia básica hay entre tipos valor y tipos referencia?

- A. Los tipos valor viven siempre en la pila y los tipos referencia siempre en el heap, con independencia del contexto donde se almacenen.
- B. Asignar un tipo valor comparte la misma instancia, mientras asignar una referencia copia automáticamente todo el objeto apuntado.
- C. Los tipos valor contienen su valor directamente según su semántica; las variables de tipo referencia contienen una referencia a un objeto. **(correcta)**
- D. Ambos tienen idéntica semántica de copia, nullabilidad y boxing; solo cambia la sintaxis utilizada para declararlos.

Explicación: Los tipos valor contienen su valor directamente según su semántica; las variables de tipo referencia contienen una referencia a un objeto. La distinción influye en copia, nullabilidad, boxing y comportamiento de memoria.

### Propuesta

¿Qué diferencia básica hay entre tipos valor y tipos referencia?

- A. Los tipos valor viven siempre en la pila y los tipos referencia siempre en el heap, con independencia del contexto donde se almacenen.
- B. Asignar un tipo valor comparte la misma instancia, mientras asignar una referencia copia automáticamente todo el objeto apuntado.
- C. Los tipos valor contienen su valor directamente según su semántica; las variables de tipo referencia contienen una referencia a un objeto. **(correcta)**
- D. Ambos tienen idéntica semántica de copia, nullabilidad y boxing; solo cambia la sintaxis utilizada para declararlos.

Explicación: La diferencia es semántica: una variable de tipo valor contiene el valor y una de referencia contiene una referencia al objeto. En una asignación ordinaria se copia el valor de la variable: el struct se copia, mientras dos referencias pueden apuntar al mismo objeto. Si el struct contiene campos de referencia, se copian esas referencias, no se clonan sus objetos. Esta distinción no fija pila frente a heap.

- Error A: El lugar de almacenamiento depende del contexto; un valor puede formar parte de un objeto o estar boxed. Pila frente a heap no define las categorías.
- Error B: Invierte las semánticas: asignar la referencia no clona el objeto y copiar un valor no comparte por sí mismo la misma instancia del struct.
- Error D: La categoría afecta a copia y conversiones, incluido boxing; no es solo una diferencia de sintaxis.

- [Microsoft: Value types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types) · Introducción; copia en asignación; campos de referencia dentro de structs · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Boxing and unboxing](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/boxing-and-unboxing) · Introducción; Boxing; ejemplo de copia de int123 y cambio posterior a456 · versión: Leída el 30-10-2026. Se separa semántica de copia de decisiones de almacenamiento y optimizaciones; el ejemplo de pila no define dónde vive siempre una variable. · comprobado: 2026-10-30

Partida: `da0f6f73e1f13ddc4d3efefc1b8d5607cfb44517d1404c30c55ebd669be0e5c7` · propuesta: `96be7b1c03c07ad21d4aa6118e51e95f079921edc8bac889e24c406e49f91c14`

## MAN-GSI-P15-034

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, alternativas y clave C; explicar copia y distinguir unboxing, conversión numérica y genéricos.

### Antes

¿Qué es boxing?

- A. Extraer un tipo valor desde \`object\` mediante una conversión explícita y compatible.
- B. Ampliar implícitamente un tipo numérico a otro sin crear un objeto envoltorio.
- C. Convertir un tipo valor para tratarlo como \`object\` o una interfaz compatible, normalmente implicando una envoltura/objeto. **(correcta)**
- D. Usar un parámetro genérico para operar con tipos valor sin convertirlos necesariamente a \`object\`.

Explicación: Convertir un tipo valor para tratarlo como \`object\` o una interfaz compatible, normalmente implicando una envoltura/objeto. Boxing y unboxing son operaciones del sistema de tipos, no de despliegue.

### Propuesta

¿Qué es boxing?

- A. Extraer un tipo valor desde \`object\` mediante una conversión explícita y compatible.
- B. Ampliar implícitamente un tipo numérico a otro sin crear un objeto envoltorio.
- C. Convertir un tipo valor para tratarlo como \`object\` o una interfaz compatible, normalmente implicando una envoltura/objeto. **(correcta)**
- D. Usar un parámetro genérico para operar con tipos valor sin convertirlos necesariamente a \`object\`.

Explicación: Boxing convierte un valor para tratarlo como object o una interfaz implementada. En el caso ordinario de un int, se crea un objeto que contiene una copia del valor; modificar después la variable original no cambia esa copia. No es una conversión numérica ni unboxing. Usar genéricos no implica convertir cada valor a object y puede evitar esas conversiones.

- Error A: Extraer el valor compatible de un objeto boxed es unboxing, la operación inversa a la preguntada.
- Error B: Una conversión numérica cambia la representación o el tipo numérico; no equivale a envolver un valor como objeto.
- Error D: Operar mediante un parámetro de tipo es programación genérica y puede evitar boxing; no define la conversión a object.

- [Microsoft: Boxing and unboxing](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/boxing-and-unboxing) · Introducción; Boxing; ejemplo de copia de int123 y cambio posterior a456 · versión: Leída el 30-10-2026. Se separa semántica de copia de decisiones de almacenamiento y optimizaciones; el ejemplo de pila no define dónde vive siempre una variable. · comprobado: 2026-10-30
- [Microsoft: Generic types and methods](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics) · Introducción; Generic collections: parámetros de tipo y error de agregar int a List&lt;string&gt; · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `4a40d47d8c3cad302b223d88009a05fba446c61f62ee629aa1b15f954d71ff31` · propuesta: `7df0b1f070253379f1928eb8690f05d7213160b98574a94f186364c657ece0f3`

## MAN-GSI-P15-035

Decisión: pending_review · acción: revise.

Motivo: Conservar modelo común de excepciones y clave A; comparar responsabilidades próximas de detección y recuperación.

### Antes

¿Qué aporta el CLR respecto al manejo de excepciones?

- A. Un modelo estructurado y común de excepciones para código administrado. **(correcta)**
- B. La garantía de que nunca se produce una excepción.
- C. La conversión automática de cualquier error en código HTTP 200.
- D. El reemplazo de todas las validaciones de entrada.

Explicación: Un modelo estructurado y común de excepciones para código administrado. El runtime ofrece infraestructura de excepciones, pero la aplicación sigue necesitando diseño y manejo adecuados.

### Propuesta

¿Qué aporta el CLR respecto al manejo de excepciones?

- A. Un modelo común de propagación y tratamiento de excepciones en código administrado. **(correcta)**
- B. Un mecanismo que reintenta una operación fallida antes de entregarla al manejador.
- C. Un sistema que revierte los cambios anteriores al detectar una excepción en ejecución.
- D. Un análisis que valida las entradas externas antes de que las procese la aplicación.

Explicación: El runtime proporciona un modelo estructurado de excepciones, basado en objetos derivados de System.Exception, que distintos lenguajes .NET pueden utilizar con su propia sintaxis. La aplicación debe decidir qué errores maneja y cómo se recupera. Notificar una excepción no garantiza reintento, rollback o validez de entradas.

- Error B: Reintentar requiere una política de recuperación y valorar sus efectos; no es la garantía general del modelo de excepciones.
- Error C: Propagar una excepción no revierte automáticamente operaciones o efectos externos ya realizados; hacen falta contratos específicos.
- Error D: Validar datos externos es responsabilidad de la aplicación; la infraestructura de excepciones no la sustituye.

- [Microsoft: Handling and throwing exceptions](https://learn.microsoft.com/en-us/dotnet/standard/exceptions/) · Introducción; Exceptions; Exceptions vs traditional error-handling methods: System.Exception y modelo común · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `7ca5bae4da1ec18e0489d03411f5e9f069c7a1e770d25d56c9184d6903fee0cd` · propuesta: `94a9b71b7a44bea07a66efb01a47dbdb53923d47b8a522bfe742b850927fafcf`

## MAN-GSI-P15-036

Decisión: pending_review · acción: revise.

Motivo: Conservar delegado y clave B; comparar evento, interfaz y árbol de expresión con definiciones plausibles.

### Antes

¿Qué es un delegado en C\#/.NET?

- A. Un evento que controla desde fuera qué suscriptores pueden invocar directamente la operación publicada por otro objeto.
- B. Un tipo seguro que representa referencias a métodos con una firma compatible. **(correcta)**
- C. Una interfaz que obliga a todas las clases implementadoras a proporcionar exactamente el mismo cuerpo para un método.
- D. Un árbol de expresión que representa operaciones como datos para inspeccionarlas o traducirlas, sin ser la referencia invocable en sí.

Explicación: Un tipo seguro que representa referencias a métodos con una firma compatible. Los delegados sustentan callbacks, eventos y muchos patrones funcionales.

### Propuesta

¿Qué es un delegado en C\#/.NET?

- A. Un miembro de notificación que permite suscripción y cuya emisión controla el publicador.
- B. Un tipo seguro que representa referencias invocables a métodos de firma compatible. **(correcta)**
- C. Un contrato de miembros que las clases o estructuras implementan para ofrecer operaciones.
- D. Una estructura que representa operaciones como datos para inspeccionarlas o traducirlas.

Explicación: Un delegado es un tipo que permite referirse a métodos e invocarlos con parámetros y retorno compatibles; no exige identidad textual de firmas en todos los casos, pues existen reglas de compatibilidad y varianza. Puede usarse para callbacks y como base de eventos. Un árbol de expresión representa código como datos y puede transformarse en ejecución, pero no es el mismo contrato de referencia invocable.

- Error A: La notificación con suscripción y emisión controlada corresponde a un evento, que utiliza un tipo delegado sin ser sinónimo de él.
- Error C: Un contrato de miembros describe una interfaz. Un delegado representa una operación invocable con firma compatible.
- Error D: La representación de operaciones como nodos corresponde a un árbol de expresión; no es por sí misma una instancia de delegado.

- [Microsoft: Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/) · Introducción; firma y retorno compatibles; callbacks; Explore delegate characteristics · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Events](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/events/) · Introducción; Events overview: publisher/subscribers y papel de los delegados · versión: Leída el 30-10-2026. Se usa la separación evento/delegado, no referencias históricas a mecanismos asíncronos de invocación ni una obligación de usar EventHandler en todo evento. · comprobado: 2026-10-30
- [Microsoft: Expression trees](https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/expression-trees/) · Introducción: operaciones como datos; inspección, traducción y relación con proveedores LINQ · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `eb19bce0c2212931018579dfbd4a8126e9248fad96d80c80d25db367fe56e81d` · propuesta: `d9c6399ea7910e5908b8c916d7300cf190101a93d3cb064d359f51d67dfee64f`

## MAN-GSI-P15-037

Decisión: pending_review · acción: revise.

Motivo: Conservar reutilización tipada y clave A; alternativas cercanas a object, dynamic y duplicación de sobrecargas.

### Antes

¿Qué ventaja aportan los genéricos?

- A. Permiten reutilización con seguridad de tipos evitando muchas conversiones y casts en tiempo de ejecución. **(correcta)**
- B. Obligan a convertir cada valor a \`object\` y recuperar después su tipo mediante casts comprobados solo en ejecución.
- C. Exigen copiar manualmente el mismo código fuente para cada tipo, ya que el compilador no acepta parámetros de tipo.
- D. Eliminan toda información de tipo y no permiten restricciones sobre constructores, interfaces o clases base admitidas.

Explicación: Permiten reutilización con seguridad de tipos evitando muchas conversiones y casts en tiempo de ejecución. Los genéricos permiten código parametrizado por tipo con comprobaciones del compilador/runtime.

### Propuesta

¿Qué ventaja aportan los genéricos?

- A. Reutilizar código con parámetros de tipo y evitar muchas conversiones comprobadas al ejecutar. **(correcta)**
- B. Reutilizar mediante object y recuperar el tipo con conversiones al consumir cada resultado.
- C. Resolver los tipos y miembros mediante enlace dinámico pospuesto hasta ejecutar cada llamada.
- D. Crear una sobrecarga distinta por tipo y mantener por separado cada implementación repetida.

Explicación: Los genéricos parametrizan tipos o métodos manteniendo información y comprobaciones de tipos. Evitan numerosas conversiones desde object y permiten reutilización sin duplicar cada implementación. No eliminan toda conversión o boxing en cualquier uso ni todas las excepciones posibles: la ventaja depende del contrato y de cómo se emplea.

- Error B: Una API basada en object puede reutilizar código, pero obliga a recuperar tipos mediante conversiones y pierde parte de las comprobaciones estáticas buscadas.
- Error C: Posponer resolución de miembros describe enlace dinámico; los genéricos conservan contratos de tipos en vez de sustituirlos por esa estrategia.
- Error D: Duplicar sobrecargas por tipo puede resolver casos concretos, pero no es la reutilización mediante parámetros de tipo que aportan los genéricos.

- [Microsoft: Generic types and methods](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics) · Introducción; Generic collections: parámetros de tipo y error de agregar int a List&lt;string&gt; · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Boxing and unboxing](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/boxing-and-unboxing) · Introducción; Boxing; ejemplo de copia de int123 y cambio posterior a456 · versión: Leída el 30-10-2026. Se separa semántica de copia de decisiones de almacenamiento y optimizaciones; el ejemplo de pila no define dónde vive siempre una variable. · comprobado: 2026-10-30

Partida: `a3f2494946c81548a454550f6d9080ddf95e7124253701e6bf4cabcc79741ad3` · propuesta: `fce10b978ad015aaf7ef2fc235c9c2faed67256111d81db2565d429adc314707`

## MAN-GSI-P15-038

Decisión: pending_review · acción: revise.

Motivo: Conservar reflexión y clave A; diferenciar mecanismos próximos y revisar sus límites con AOT.

### Antes

¿Qué permite la reflexión?

- A. Inspeccionar tipos, miembros y metadatos en tiempo de ejecución y, cuando procede, invocarlos dinámicamente. **(correcta)**
- B. Desactivar el sistema de tipos.
- C. Evitar todos los metadatos.
- D. Transformar automáticamente una base de datos SQL en NoSQL.

Explicación: Inspeccionar tipos, miembros y metadatos en tiempo de ejecución y, cuando procede, invocarlos dinámicamente. Reflection usa precisamente los metadatos del runtime; debe emplearse con criterio por coste y compatibilidad AOT.

### Propuesta

¿Qué permite la reflexión?

- A. Inspeccionar tipos y miembros en ejecución y, cuando procede, invocarlos dinámicamente. **(correcta)**
- B. Representar una expresión como nodos de datos para examinarla o traducirla a otra forma.
- C. Parametrizar una implementación por tipos y comprobar su contrato durante la compilación.
- D. Conservar una referencia tipada a un método para invocarlo con una firma compatible.

Explicación: System.Type y System.Reflection permiten examinar ensamblados, tipos, miembros y atributos y, donde es compatible, crear instancias o invocar miembros. La reflexión utiliza metadatos; no desactiva las reglas de tipos ni hace accesible cualquier operación. Recorte y Native AOT pueden limitar información o mecanismos disponibles, por lo que debe revisarse el modo de publicación.

- Error B: Un árbol de expresión modela código como datos. Eso no equivale a inspeccionar los metadatos de tipos y miembros cargados.
- Error C: Parametrizar por tipos corresponde a genéricos; no requiere por sí mismo inspección dinámica de metadatos.
- Error D: Una referencia invocable de firma compatible describe un delegado, distinto de descubrir e inspeccionar miembros mediante reflexión.

- [Microsoft: Reflection in .NET](https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/overview) · Introducción; System.Type y System.Reflection; inspección de tipos/miembros e invocación · versión: Ruta final tras redirección de reflection/reflection, leída el 30-10-2026. La compatibilidad con recorte y Native AOT se contrasta con la fuente específica. · comprobado: 2026-10-30
- [Microsoft: Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; IL a nativo al publicar; destino; ausencia de JIT al ejecutar; limitaciones · versión: Leída el 30-10-2026. Incluye servicios de runtime; no elimina GC ni garantiza compatibilidad de carga dinámica o reflexión. · comprobado: 2026-10-30
- [Microsoft: Expression trees](https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/expression-trees/) · Introducción: operaciones como datos; inspección, traducción y relación con proveedores LINQ · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Generic types and methods](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics) · Introducción; Generic collections: parámetros de tipo y error de agregar int a List&lt;string&gt; · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/) · Introducción; firma y retorno compatibles; callbacks; Explore delegate characteristics · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `33c577745806c952350980466d131c7bbc8f6481508691c226f45a7e5af7e8bd` · propuesta: `b5c2e01419b9924b07585ec9faa361149e2b1a7d4d6fec4f580c8cb35c58f23c`

## MAN-GSI-P15-039

Decisión: pending_review · acción: revise.

Motivo: Conservar retención de objetos y clave B; caso acotado a referencias fuertes desde un diccionario estático alcanzable.

### Antes

Si una aplicación mantiene referencias a objetos que ya no necesita, ¿el GC garantiza que no exista consumo excesivo de memoria?

- A. No, porque .NET no tiene GC.
- B. No; mientras los objetos sigan alcanzables, el GC no puede considerarlos basura. **(correcta)**
- C. Sí; el GC elimina cualquier objeto que lleve más de un minuto creado.
- D. Sí; el GC identifica la intención del programador.

Explicación: No; mientras los objetos sigan alcanzables, el GC no puede considerarlos basura. La memoria administrada puede sufrir fugas lógicas cuando se retienen referencias innecesarias.

### Propuesta

Un diccionario estático alcanzable conserva referencias fuertes a objetos que el negocio ya no necesita. ¿Garantiza el GC que esa retención no produzca consumo excesivo?

- A. Sí; el GC detecta que no vuelven a usarse y elimina las entradas retenidas.
- B. No; sus referencias fuertes alcanzables impiden considerarlos basura. **(correcta)**
- C. Sí; una colección forzada recupera también los objetos aún referenciados.
- D. No; antes debe invocarse Dispose para que cualquier objeto sea recolectable.

Explicación: El GC calcula alcanzabilidad desde raíces, no utilidad de negocio. Un diccionario estático alcanzable que mantiene referencias fuertes puede retener objetos innecesarios y producir crecimiento de memoria. Quitar referencias puede hacerlos candidatos a recolección, sin prometer recuperación inmediata. Dispose gestiona recursos según su contrato; no es una condición universal para recolectar objetos.

- Error A: El GC no decide eliminar entradas por predecir su uso futuro; mientras exista un camino de referencias fuertes, el objeto sigue alcanzable.
- Error C: Forzar una colección no convierte en basura a objetos que siguen alcanzables mediante referencias fuertes.
- Error D: Muchos objetos no implementan IDisposable. Invocarlo no es el requisito general de alcanzabilidad para que el GC recupere memoria.

- [Microsoft: GC fundamentals](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals) · Memory release: raíces, grafo de referencias fuertes y objetos inalcanzables · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: using statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/using) · IDisposable; salida con excepción; await using; reescritura try/finally · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `2044867047a3d26ddd0a6112a93b5ccf03b112506a7aaddb2f3246af885c67fa` · propuesta: `55874e8ed65bbef892ab02c8f75ad70ae6e0ff33527ece08d5f4502d248d57c7`

## MAN-GSI-P15-040

Decisión: pending_review · acción: revise.

Motivo: Conservar IL frente a código máquina y clave C; precisar direcciones de conversión y límites de portabilidad.

### Antes

¿Qué afirmación sobre IL y código máquina es correcta?

- A. Ejecutar el CLR directamente el texto fuente C\# sin compilarlo a una representación intermedia ni producir instrucciones para la CPU.
- B. Ser IL siempre código máquina final x86, aunque el ensamblado vaya a ejecutarse en una arquitectura o runtime diferente.
- C. IL es independiente de una CPU concreta en un grado mayor; el runtime/JIT o AOT produce código adecuado para el destino. **(correcta)**
- D. Utilizarse IL solo en archivos de texto para documentar instrucciones, sin formar parte de ensamblados ni intervenir en su ejecución.

Explicación: IL es independiente de una CPU concreta en un grado mayor; el runtime/JIT o AOT produce código adecuado para el destino. La separación entre IL y código nativo facilita portabilidad y optimización por runtime.

### Propuesta

¿Qué afirmación sobre IL y código máquina es correcta?

- A. IL contiene las instrucciones nativas de la CPU elegida al compilar el código fuente.
- B. JIT convierte código máquina en IL para que luego lo interprete el CLR en cada llamada.
- C. IL es una representación intermedia; JIT o AOT generan código nativo para el destino. **(correcta)**
- D. Disponer de IL garantiza ejecutar cualquier biblioteca sin revisar sistema o dependencias.

Explicación: CIL es un conjunto de instrucciones intermedio que no equivale al código máquina de una CPU concreta. JIT lo transforma durante ejecución y AOT antes de ella, según el modelo. Esto facilita separar compilación de lenguaje y destino, pero no garantiza portabilidad de APIs o dependencias nativas específicas. Native AOT produce un artefacto para un entorno concreto.

- Error A: Confunde representación intermedia con instrucciones finales de CPU; generar IL no significa producir ya código x86 o ARM nativo.
- Error B: Invierte la conversión y añade interpretación obligatoria: JIT genera nativo desde IL, no IL desde nativo para interpretarlo después.
- Error D: Una dependencia nativa o una API de un sistema puede impedir ejecutar el componente en otro destino aunque exista IL.

- [Microsoft: Managed execution](https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process) · Compile to CIL; Compile CIL to native code; Compilation by the JIT compiler · versión: Leída el 30-10-2026. IL/metadatos y JIT tradicional; apartados históricos NGen y seguridad no describen todos los modos modernos. · comprobado: 2026-10-30
- [Microsoft: Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción; IL a nativo al publicar; destino; ausencia de JIT al ejecutar; limitaciones · versión: Leída el 30-10-2026. Incluye servicios de runtime; no elimina GC ni garantiza compatibilidad de carga dinámica o reflexión. · comprobado: 2026-10-30

Partida: `8047df8abc4ec3a1df6a21767c2b656a6570735d5dbec063f796a94c69d7d470` · propuesta: `206a93b4fba9369795b24276242e46fbeb59c763ddbaa5c297e8da3d82ccc1d1`

## MAN-GSI-P15-041

Decisión: pending_review · acción: revise.

Motivo: Conservar composición asíncrona y clave A; separar espera, planificación, paralelismo y propagación de errores.

### Antes

¿Qué expresa principalmente \`async\`/\`await\` en C\#?

- A. Un modelo para componer operaciones asíncronas sin bloquear innecesariamente el hilo mientras se espera. **(correcta)**
- B. Que se crea un proceso independiente.
- C. Que el código se ejecutará siempre en varios núcleos en paralelo.
- D. Que se desactiva el manejo de excepciones.

Explicación: Un modelo para componer operaciones asíncronas sin bloquear innecesariamente el hilo mientras se espera. Asincronía y paralelismo no son sinónimos; \`await\` facilita esperas no bloqueantes.

### Propuesta

¿Qué expresa principalmente \`async\`/\`await\` en C\#?

- A. Componer operaciones asíncronas y esperar su finalización sin bloquear el hilo por esa espera. **(correcta)**
- B. Reservar un hilo del sistema para cada operación hasta que complete su entrada o salida.
- C. Repartir las operaciones del método entre núcleos para ejecutarlas en paralelo por defecto.
- D. Capturar las excepciones de cada operación y sustituirlas por el valor predeterminado del resultado.

Explicación: async/await permite expresar una composición asíncrona con flujo legible. Si la operación esperada no ha terminado, await puede suspender el método y devolver control sin bloquear ese hilo por la espera. Si ya terminó, puede continuar sin suspender. No crea automáticamente paralelismo o un hilo exclusivo y las excepciones siguen debiendo manejarse.

- Error B: Una operación asíncrona no necesita por definición un hilo reservado mientras espera entrada o salida.
- Error C: Asincronía y paralelismo son dimensiones distintas; el modificador async no distribuye automáticamente todo el método entre núcleos.
- Error D: await permite observar y propagar errores de la operación; no los transforma automáticamente en resultados predeterminados.

- [Microsoft: Asynchronous programming](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/) · Task asynchronous programming model; asincronía frente a paralelismo; esperar sin bloquear el hilo · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: await operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/await) · Introducción: suspensión del método, no del hilo; operación ya completada sin suspensión · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Task class](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=net-10.0) · Definition; Remarks; CompletedTask; IsCompleted, IsCanceled, IsFaulted · versión: Vista net-10.0 leída el 30-10-2026. La página agrega variantes y aviso prerelease: se usa el contrato estable de Task, no se asume que toda Task sea un trabajo con hilo dedicado. · comprobado: 2026-10-30

Partida: `caa7a86bf842a74f434bebf1a726efab2e8dbebae95fe463114e86c4207c04cf` · propuesta: `352014787761372379f39691f3d8a50af2dcad2a39e1fbf412a572df96cfaadd`

## MAN-GSI-P15-042

Decisión: pending_review · acción: revise.

Motivo: Conservar Task y clave D; evitar prometer finalización solo futura o equivalencia entre Task e hilo.

### Antes

¿Qué representa normalmente \`Task\` o \`Task&lt;T&gt;\`?

- A. Un ensamblado compilado que agrupa tipos y recursos y que se carga como una unidad independiente en el runtime de .NET.
- B. Un hilo físico reservado por el sistema operativo hasta que termina la operación, aunque esta permanezca esperando entrada o salida.
- C. Una transacción de base de datos que confirma automáticamente todos los cambios cuando concluye cualquier método que devuelve un valor.
- D. Una operación asíncrona que puede completarse en el futuro, con o sin resultado. **(correcta)**

Explicación: Una operación asíncrona que puede completarse en el futuro, con o sin resultado. Task modela trabajo asíncrono; no implica por sí misma un hilo exclusivo.

### Propuesta

¿Qué representa normalmente \`Task\` o \`Task&lt;T&gt;\`?

- A. Una referencia invocable al método que inicia el trabajo, con parámetros y retorno compatibles.
- B. Un hilo del sistema reservado hasta que la operación termine, incluso mientras espera entrada o salida.
- C. Una señal de petición de cancelación que el trabajo debe consultar para decidir si se detiene.
- D. Una representación de la finalización de una operación, con o sin resultado según su tipo. **(correcta)**

Explicación: Task representa una operación y su finalización; Task&lt;T&gt; permite además obtener un resultado T. Puede estar pendiente o ya completada, y terminar con éxito, cancelación o error. No implica un hilo exclusivo ni que el trabajo haya empezado necesariamente al construir cualquier Task. La petición de cancelación y el método invocable son otros contratos.

- Error A: Referirse a un método para invocarlo describe un delegado; no el estado de finalización representado por Task.
- Error B: La abstracción de tarea no equivale a un hilo físico reservado; por ejemplo, una tarea ya completada tampoco requiere esperar en uno.
- Error C: Una petición cooperativa de cancelación se expresa con un contrato como CancellationToken; no define la operación y su finalización.

- [Microsoft: Task class](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=net-10.0) · Definition; Remarks; CompletedTask; IsCompleted, IsCanceled, IsFaulted · versión: Vista net-10.0 leída el 30-10-2026. La página agrega variantes y aviso prerelease: se usa el contrato estable de Task, no se asume que toda Task sea un trabajo con hilo dedicado. · comprobado: 2026-10-30
- [Microsoft: await operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/await) · Introducción: suspensión del método, no del hilo; operación ya completada sin suspensión · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/) · Introducción; firma y retorno compatibles; callbacks; Explore delegate characteristics · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `aa344a295ff67ede595dc9cc5085a6f7efc2f5726826771a75d96ea65ce27e22` · propuesta: `1789fb253569b7cb935676dbd0707a40a0b0eea64262ece2ebde5b16e6beb314`

## MAN-GSI-P15-043

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de sync-over-async y clave B; fijar el contexto UI y la continuación necesaria para justificar el interbloqueo.

### Antes

¿Qué problema puede causar abusar de \`.Result\` o \`.Wait()\` sobre operaciones asíncronas?

- A. Que la base de datos pierda índices.
- B. Bloqueos, pérdida de escalabilidad y, en ciertos contextos, interbloqueos. **(correcta)**
- C. Que el compilador convierta el proyecto en Java.
- D. Que NuGet elimine paquetes.

Explicación: Bloqueos, pérdida de escalabilidad y, en ciertos contextos, interbloqueos. El patrón sync-over-async puede bloquear hilos y romper el beneficio de la asincronía.

### Propuesta

En el hilo de una interfaz de un solo hilo se accede a Result de una tarea incompleta. Para completarse, esta necesita una continuación publicada en ese mismo contexto UI. ¿Qué puede ocurrir?

- A. La continuación cambia de hilo por efecto de Result y permite completar sin bloquear la interfaz.
- B. Puede producirse interbloqueo: el hilo espera la tarea y esta necesita volver a ese mismo hilo. **(correcta)**
- C. La espera convierte la tarea en cancelada y libera la continuación sin intervención de la aplicación.
- D. Result devuelve un valor provisional mientras la continuación termina en el hilo de interfaz.

Explicación: En este contexto existe una dependencia circular: Result bloquea el hilo UI hasta que termina la tarea, pero la tarea necesita ejecutar una continuación en ese hilo ocupado. await permite devolver control para que avance el bucle de mensajes. No toda espera síncrona produce interbloqueo: aquí importan tarea incompleta y contexto capturado. En otros entornos bloquear puede igualmente reducir capacidad de atender trabajo.

- Error A: Result no libera el hilo ni reubica por sí mismo la continuación capturada; mantiene la espera síncrona.
- Error C: Bloquear con Result no cancela automáticamente la tarea ni elimina la dependencia de su continuación.
- Error D: Result espera un resultado terminado o propaga un error; no entrega un valor provisional para evitar el bloqueo.

- [Microsoft .NET Blog: Await, and UI, and deadlocks\! Oh my\!](https://devblogs.microsoft.com/dotnet/await-and-ui-and-deadlocks-oh-my/) · button1\_Click con LoadStringAsync y s.Result; dependencia circular con retorno al hilo UI; alternativa await · versión: Stephen Toub, 13-01-2011, leído el 30-10-2026. Explicación histórica del mecanismo de contexto UI, contrastada con await actual; no recomendación de instalar Async CTP ni regla de interbloqueo en todo contexto. · comprobado: 2026-10-30
- [Microsoft: await operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/await) · Introducción: suspensión del método, no del hilo; operación ya completada sin suspensión · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Task class](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=net-10.0) · Definition; Remarks; CompletedTask; IsCompleted, IsCanceled, IsFaulted · versión: Vista net-10.0 leída el 30-10-2026. La página agrega variantes y aviso prerelease: se usa el contrato estable de Task, no se asume que toda Task sea un trabajo con hilo dedicado. · comprobado: 2026-10-30

Partida: `014d5102024e8ddc43a2ce5d82efc7de7994ad105c4d4fd05548f57508d783ed` · propuesta: `b843af60855f204e1fb96f2be00a829f074bb5d03ccba0f6db28aa0f518ac7a3`

## MAN-GSI-P15-044

Decisión: pending_review · acción: revise.

Motivo: Conservar ejecución diferida y clave C; caso acotado a List y Where con modificación anterior al recorrido.

### Antes

¿Qué significa ejecución diferida en muchas consultas LINQ?

- A. Que la consulta se ejecuta dos veces obligatoriamente.
- B. Que la consulta siempre se ejecuta al compilar.
- C. Que la consulta no se evalúa hasta que se enumera o materializa. **(correcta)**
- D. Que LINQ solo funciona con bases de datos.

Explicación: Que la consulta no se evalúa hasta que se enumera o materializa. Comprender cuándo se ejecuta una consulta evita efectos inesperados y trabajo repetido.

### Propuesta

Con LINQ to Objects se ejecuta: var datos = new List&lt;int&gt; \{ 1, 2 \}; var q = datos.Where(x =&gt; x &gt; 1); datos.Add(3); Sin otros cambios, ¿cuándo se aplica el filtro y qué obtiene al enumerar q?

- A. Al definir q se filtra y se conserva una copia del resultado con el elemento 2.
- B. Al agregar 3 se vuelve a ejecutar el filtro y se actualiza un resultado almacenado en q.
- C. Al enumerar q se aplica el filtro y se observan los elementos 2 y 3 presentes entonces. **(correcta)**
- D. Al definir q se abre un enumerador que queda invalidado por cualquier cambio posterior.

Explicación: Where sobre esta lista define una consulta diferida: el filtro se aplica cuando se enumera. Como se agrega 3 antes de empezar esa enumeración, aparecen 2 y 3. Crear la consulta no materializa una copia ni mantiene un resultado incremental actualizado. Modificar una List mientras se recorre su enumerador es otro caso; aquí la modificación ocurre antes. ToList o ToArray materializan al llamarse.

- Error A: Confunde construir la consulta con materializar una instantánea; no se ha llamado a ToList o ToArray.
- Error B: Agregar a la lista no recorre automáticamente la consulta ni actualiza una caché de resultados mantenida por q.
- Error D: Definir Where no inicia ese recorrido; no hay un enumerador en curso invalidado por la modificación previa a enumerar.

- [Microsoft: Introduction to LINQ queries](https://learn.microsoft.com/en-us/dotnet/csharp/linq/get-started/introduction-to-linq-queries) · Three parts of a query; Query execution; Deferred; ToList/ToArray frente a enumeración · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `09d248a9b8737735328e9d431329452c951371098a68fc57ab47f7586e09b36f` · propuesta: `08cad8c43a5344905431942602fcab51fc794e58566bc5025a5ce31b248c7d3d`

## MAN-GSI-P15-045

Decisión: pending_review · acción: revise.

Motivo: Conservar traducción por proveedor y clave B; delimitar EF Core relacional y tratamiento de expresiones no traducibles.

### Antes

Cuando se usa LINQ sobre \`IQueryable\` de EF Core, ¿qué ocurre normalmente?

- A. El CLR delega la consulta en NuGet.
- B. El proveedor intenta traducir la expresión a una consulta del origen, por ejemplo SQL. **(correcta)**
- C. LINQ se convierte en JavaScript.
- D. Todo se descarga siempre a memoria antes de filtrar.

Explicación: El proveedor intenta traducir la expresión a una consulta del origen, por ejemplo SQL. IQueryable permite que el proveedor procese el árbol de expresión y traduzca operaciones compatibles.

### Propuesta

Al componer LINQ sobre IQueryable con un proveedor relacional de EF Core, ¿qué papel tiene normalmente el proveedor?

- A. Los operadores ejecutan sus delegados en cliente antes de que el proveedor reciba el filtro.
- B. El proveedor procesa el árbol de expresión e intenta traducir operaciones compatibles al origen. **(correcta)**
- C. El proveedor conserva los predicados como datos, sin ejecutarlos al enumerar la consulta.
- D. La consulta se materializa al construir cada Where y sus resultados se guardan en el contexto.

Explicación: Con IQueryable y un proveedor relacional de EF Core, la expresión representa la consulta y se traducen las operaciones compatibles, normalmente a SQL al ejecutarla. No toda función de C\# es traducible. En EF Core3+ un filtro no traducible fuera de la proyección superior provoca un error en vez de descargar todo silenciosamente; esa proyección sí admite evaluación parcial en cliente.

- Error A: Describe ejecución local con delegados, no la representación que el proveedor puede inspeccionar y traducir antes de ejecutar.
- Error C: Representar predicados no significa omitirlos: al ejecutar, el proveedor debe darles significado según su soporte o informar de incompatibilidad.
- Error D: Componer Where no materializa por sí solo el resultado ni hace de la consulta una caché del contexto.

- [Microsoft: EF Core client vs server evaluation](https://learn.microsoft.com/en-us/ef/core/querying/client-eval) · Introducción; Unsupported client evaluation; Explicit client evaluation · versión: Leída el 30-10-2026. EF Core3.0 y posteriores: proyección superior puede evaluarse parcialmente en cliente; un Where no traducible no se descarga silenciosamente para filtrar. · comprobado: 2026-10-30
- [Microsoft: IQueryable&lt;T&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.linq.iqueryable-1?view=net-10.0) · Definition e interfaces heredadas; Remarks: Expression, Provider y traducción · versión: Vista net-10.0 leída el 30-10-2026. IQueryable&lt;T&gt; también es IEnumerable&lt;T&gt;; el proveedor y los operadores elegidos determinan ejecución y traducción. · comprobado: 2026-10-30
- [Microsoft: Expression trees](https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/expression-trees/) · Introducción: operaciones como datos; inspección, traducción y relación con proveedores LINQ · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Introduction to LINQ queries](https://learn.microsoft.com/en-us/dotnet/csharp/linq/get-started/introduction-to-linq-queries) · Three parts of a query; Query execution; Deferred; ToList/ToArray frente a enumeración · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `43eec3c8111bdf6992b551f825b2bc9a352220910aed2bbcd601194c4cfd33f9` · propuesta: `166c3a2fe63a42afc4a2cd3b624159afb6ee655a14417c37943d8aeb008d95a6`

## MAN-GSI-P15-046

Decisión: pending_review · acción: revise.

Motivo: Conservar IEnumerable frente a IQueryable y clave D; comparar ubicación de un filtro después de AsEnumerable sin confundirlo con ToList.

### Antes

¿Qué diferencia general hay entre \`IEnumerable&lt;T&gt;\` e \`IQueryable&lt;T&gt;\` en acceso a datos?

- A. \`IEnumerable&lt;T&gt;\` siempre se traduce a SQL en el servidor, mientras \`IQueryable&lt;T&gt;\` solo puede recorrer objetos ya cargados.
- B. Ambos ejecutan necesariamente la consulta en memoria y ningún proveedor puede inspeccionar o traducir sus expresiones.
- C. \`IQueryable&lt;T&gt;\` obliga a recuperar toda la fuente antes de filtrar, por lo que nunca puede delegar operaciones en el origen.
- D. \`IEnumerable\` opera sobre enumeración .NET; \`IQueryable\` puede representar una consulta que un proveedor traduzca a otro lenguaje/origen. **(correcta)**

Explicación: \`IEnumerable\` opera sobre enumeración .NET; \`IQueryable\` puede representar una consulta que un proveedor traduzca a otro lenguaje/origen. La diferencia es crucial para saber dónde se ejecuta el filtrado y qué puede traducirse.

### Propuesta

Una consulta relacional de EF Core se compone como consulta.Where(p =&gt; p.Activo), o como consulta.AsEnumerable().Where(p =&gt; p.Activo). Al enumerar ambas, ¿qué diferencia importa?

- A. AsEnumerable materializa la fuente al llamarse y conserva una copia antes del segundo Where.
- B. Ambos Where entregan el mismo árbol al proveedor porque el objeto de origen sigue siendo el mismo.
- C. El segundo Where no puede consultar datos remotos porque IEnumerable exige una lista ya cargada.
- D. El segundo Where filtra mediante enumeración local; el primero puede traducirse al origen. **(correcta)**

Explicación: IQueryable&lt;T&gt; representa expresiones que procesa su proveedor y también implementa IEnumerable&lt;T&gt;. AsEnumerable conserva el origen, pero cambia el tipo de compilación y selecciona operadores Enumerable: el Where posterior usa su predicado en cliente al enumerar. No materializa de inmediato ni transforma en local las operaciones anteriores de la consulta. Debe valorarse cuántos datos llegan antes del filtro local.

- Error A: AsEnumerable no es ToList: no recorre o almacena por sí mismo todos los elementos cuando se llama.
- Error B: La resolución de operadores cambia con el tipo de compilación; conservar el mismo origen no convierte el segundo predicado en la expresión Queryable original.
- Error C: IEnumerable permite enumeración diferida y un origen remoto puede producir sus elementos; no obliga a tener previamente una lista materializada.

- [Microsoft: IQueryable&lt;T&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.linq.iqueryable-1?view=net-10.0) · Definition e interfaces heredadas; Remarks: Expression, Provider y traducción · versión: Vista net-10.0 leída el 30-10-2026. IQueryable&lt;T&gt; también es IEnumerable&lt;T&gt;; el proveedor y los operadores elegidos determinan ejecución y traducción. · comprobado: 2026-10-30
- [Microsoft: Enumerable.AsEnumerable](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.asenumerable?view=net-10.0) · Definition; Remarks: mismo origen con tipo de compilación IEnumerable&lt;T&gt; y selección de operadores · versión: Vista net-10.0 leída el 30-10-2026. Cambia resolución de operadores; no equivale a ToList, materialización inmediata o garantía de que toda la consulta anterior pase al cliente. · comprobado: 2026-10-30
- [Microsoft: EF Core client vs server evaluation](https://learn.microsoft.com/en-us/ef/core/querying/client-eval) · Introducción; Unsupported client evaluation; Explicit client evaluation · versión: Leída el 30-10-2026. EF Core3.0 y posteriores: proyección superior puede evaluarse parcialmente en cliente; un Where no traducible no se descarga silenciosamente para filtrar. · comprobado: 2026-10-30
- [Microsoft: Introduction to LINQ queries](https://learn.microsoft.com/en-us/dotnet/csharp/linq/get-started/introduction-to-linq-queries) · Three parts of a query; Query execution; Deferred; ToList/ToArray frente a enumeración · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `cb98df636ac749fc575a2f8954c38b4da0b98c99385ce3b91bef19ab8a1844c1` · propuesta: `6ec67d4535625cc5618becec18429ea93b416de710ec4c4869838e85329a756e`

## MAN-GSI-P15-047

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado, opciones y clave B; precisar llamada, flujo ordinario y objeto no nulo frente a garantías absolutas de cierre.

### Antes

¿Qué aporta una instrucción \`using\` sobre un objeto \`IDisposable\`?

- A. Añadir automáticamente un finalizador al tipo para que el runtime libere el recurso cuando decida ejecutar la recolección.
- B. Garantiza la llamada a \`Dispose\` al salir del ámbito, incluso ante excepciones, según el patrón generado. **(correcta)**
- C. Forzar una recolección de basura al final del bloque y mantener el objeto fuera del alcance durante el resto del proceso.
- D. Llamar a \`Dispose\` únicamente cuando el bloque termina normalmente, omitiéndolo si una instrucción produce una excepción.

Explicación: Garantiza la llamada a \`Dispose\` al salir del ámbito, incluso ante excepciones, según el patrón generado. \`using\` expresa gestión determinista de recursos.

### Propuesta

¿Qué aporta una instrucción \`using\` sobre un objeto \`IDisposable\`?

- A. Añadir automáticamente un finalizador al tipo para que el runtime libere el recurso cuando decida ejecutar la recolección.
- B. Garantiza la llamada a \`Dispose\` al salir del ámbito, incluso ante excepciones, según el patrón generado. **(correcta)**
- C. Forzar una recolección de basura al final del bloque y mantener el objeto fuera del alcance durante el resto del proceso.
- D. Llamar a \`Dispose\` únicamente cuando el bloque termina normalmente, omitiéndolo si una instrucción produce una excepción.

Explicación: Para un recurso adquirido no nulo, using genera una disposición equivalente a try/finally: invoca Dispose al abandonar su ámbito, también por una excepción o return dentro del flujo ordinario. No fuerza GC ni garantiza que una implementación defectuosa de Dispose libere correctamente todo recurso. Tampoco es garantía frente a terminación abrupta del proceso; la memoria del objeto sigue su gestión habitual.

- Error A: using no añade un finalizador al tipo; expresa una llamada de disposición al salir del ámbito.
- Error C: No se introduce una llamada a GC.Collect ni se reserva el objeto fuera de alcance durante el resto del proceso.
- Error D: El patrón con finally permite llamar a Dispose también al salir por excepción; no se limita a terminación normal.

- [Microsoft: using statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/using) · IDisposable; salida con excepción; await using; reescritura try/finally · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: GC fundamentals](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals) · Memory release: raíces, grafo de referencias fuertes y objetos inalcanzables · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `d613e98904ba648b30c2fde34b2c4dc5d3a12c2e2fa31e8e1bc93627d9238da9` · propuesta: `c82db0e199d1f093f5d4c17759d1fff437bf8af2e80a7f9e8c1835b2da7ea901`

## MAN-GSI-P15-049

Decisión: pending_review · acción: revise.

Motivo: Conservar modelado de datos e igualdad y clave A; distinguir clase/struct, copia superficial y persistencia.

### Antes

¿Qué característica definen principalmente los \`record\` de C\#?

- A. Una forma concisa de modelar datos con semántica de igualdad por valor especialmente útil para modelos inmutables o DTOs. **(correcta)**
- B. Una entidad que EF Core almacena y sigue automáticamente por el mero hecho de declararla como \`record\` en el lenguaje.
- C. Un tipo valor que siempre se aloja en la pila y no puede declarar miembros mutables ni utilizar herencia entre records.
- D. Una estructura binaria para escribir eventos secuenciales en disco, equivalente a un formato de logging del runtime.

Explicación: Una forma concisa de modelar datos con semántica de igualdad por valor especialmente útil para modelos inmutables o DTOs. Los records son una característica del lenguaje, no una tecnología de persistencia.

### Propuesta

¿Qué aporta principalmente el modificador record de C\# al modelar datos?

- A. Sintetizar comportamiento para modelar datos, incluida igualdad por valor de sus miembros. **(correcta)**
- B. Aplicar igualdad por identidad de objeto a sus instancias aunque almacenen los mismos datos.
- C. Imponer inmutabilidad profunda de los datos y de cada objeto referenciado por sus propiedades.
- D. Registrar el tipo como entidad persistente y construir el seguimiento de cambios del proveedor.

Explicación: record añade comportamiento sintetizado para tipos centrados en datos, incluida igualdad por valor según sus miembros. Puede declararse como record class, de referencia, o record struct, de valor. No obliga a inmutabilidad profunda: miembros mutables y objetos referenciados requieren atención, y with hace una copia superficial. La igualdad de cada miembro sigue su contrato; no significa comparación profunda automática ni persistencia.

- Error B: La igualdad sintetizada de records no se limita a identidad de referencia; dos instancias distintas pueden ser iguales por sus datos.
- Error C: Un record puede declarar miembros mutables y conservar referencias a objetos mutables; init tampoco crea inmutabilidad profunda.
- Error D: Ser record es una característica del lenguaje; persistencia y seguimiento dependen del modelo y configuración del proveedor, no de ese modificador por sí solo.

- [Microsoft: Records](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record) · Introducción; Immutability; Value equality; shallow copy de with · versión: Leída el 30-10-2026. record class es referencia y record struct valor; igualdad sintetizada no implica inmutabilidad profunda ni comparación recursiva de cualquier miembro. · comprobado: 2026-10-30

Partida: `91791388e8864690250c29a6d255acb028582dd6e98c197c8524905e4f56a390` · propuesta: `412f057e2b954a3ba150ee189032e47ff9f99d4a59e8cabd38976b2dc6590537`

## MAN-GSI-P15-050

Decisión: pending_review · acción: revise.

Motivo: Conservar análisis estático de nulabilidad y clave C; caso de advertencia que distingue anotación, comprobación y supresión.

### Antes

¿Para qué sirven las nullable reference types?

- A. Para permitir que cualquier tipo valor sea siempre null sin \`?\`.
- B. Para cifrar referencias.
- C. Para expresar y analizar en compilación si una referencia puede ser nula, reduciendo errores de null. **(correcta)**
- D. Para desactivar todas las advertencias del compilador.

Explicación: Para expresar y analizar en compilación si una referencia puede ser nula, reduciendo errores de null. Es una ayuda de análisis estático; no cambia por sí sola todas las garantías del runtime.

### Propuesta

Con nullable habilitado, una operación devuelve string? y el compilador advierte al usar su propiedad Length sin comprobar null. ¿Qué aporta esta característica?

- A. Convertir las referencias anulables en valores Nullable&lt;T&gt; comprobados por el runtime.
- B. Insertar una comprobación en ejecución que sustituye null por una instancia predeterminada.
- C. Expresar la posible nulidad y analizar su uso en compilación para emitir advertencias. **(correcta)**
- D. Hacer que el operador \! compruebe la referencia y rechace null antes de usar el objeto.

Explicación: La anotación string? expresa intención de nulidad y el análisis de flujo comprueba usos para generar advertencias de compilación. No crea un tipo de runtime distinto ni impide por sí solo que llegue null. Debe comprobarse el valor cuando corresponda. El operador \! informa al análisis, pero no comprueba, transforma o sustituye null en ejecución; ignorar advertencias puede seguir causando NullReferenceException.

- Error A: Nullable&lt;T&gt; es el mecanismo para tipos valor anulables. Las anotaciones de referencias no convierten string? en un envoltorio de ese tipo.
- Error B: El análisis no inserta una sustitución automática por una instancia predeterminada; esa política necesita código explícito.
- Error D: El operador de supresión \! no realiza una comprobación en ejecución; afirma algo al análisis y puede ocultar una advertencia sin resolver el problema.

- [Microsoft: Nullable reference types](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/null-safety/nullable-reference-types) · Introducción; Null-state analysis; Override the warnings with \!; Known pitfalls · versión: Ruta final tras redirección de nullable-references, leída el 30-10-2026. Anotaciones y advertencias de compilación, no nuevo tipo de runtime ni chequeo automático por \!. · comprobado: 2026-10-30
- [Microsoft: Handling and throwing exceptions](https://learn.microsoft.com/en-us/dotnet/standard/exceptions/) · Introducción; Exceptions; Exceptions vs traditional error-handling methods: System.Exception y modelo común · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `7377af9a0264196604ed40d029b72cb4265260fd2d6e254ee22cf6561723fcf3` · propuesta: `159edfb1d25d614fbdd93f09dbefb7fd6e7abd5870b798addff17b3750d2a4e4`

## MAN-GSI-P15-051

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave C; separar patrones, genéricos, reflexión y LINQ.

### Antes

¿Qué permite el pattern matching moderno de C\#?

- A. Parametrizar clases y métodos por tipos comprobados por el compilador para reutilizar código sin conversiones repetidas.
- B. Inspeccionar tipos, miembros y atributos en ejecución mediante metadatos, sin expresarlos como patrones en \`is\` o \`switch\`.
- C. Comprobar formas, tipos y propiedades de datos con patrones expresivos en \`is\` y \`switch\`. **(correcta)**
- D. Componer consultas sobre secuencias mediante operadores LINQ, con independencia de que se discriminen formas o tipos.

Explicación: Comprobar formas, tipos y propiedades de datos con patrones expresivos en \`is\` y \`switch\`. El pattern matching mejora claridad al discriminar tipos y valores.

### Propuesta

¿Qué permite el pattern matching moderno de C\#?

- A. Parametrizar clases y métodos por tipos comprobados por el compilador para reutilizar código sin conversiones repetidas.
- B. Inspeccionar tipos, miembros y atributos en ejecución mediante metadatos, sin expresarlos como patrones en \`is\` o \`switch\`.
- C. Comprobar formas, tipos y propiedades de datos con patrones expresivos en \`is\` y \`switch\`. **(correcta)**
- D. Componer consultas sobre secuencias mediante operadores LINQ, con independencia de que se discriminen formas o tipos.

Explicación: Los patrones prueban un valor evaluado frente a tipos, constantes o formas y propiedades, en is o switch. Permiten extraer información y usar un tipo más preciso en la rama coincidente. No equivalen a reflexión general, parametrización genérica o consulta de secuencias. Un patrón de propiedades no coincide con null; las ramas y su orden deben cubrir los casos relevantes.

- Error A: Parametrizar clases y métodos describe genéricos, no comprobar un valor mediante patrones.
- Error B: Inspeccionar metadatos mediante reflexión es un mecanismo distinto de los patrones expresados en is o switch.
- Error D: Componer consultas de secuencias corresponde a LINQ; puede utilizar patrones en sus expresiones, pero no define el mecanismo de pattern matching.

- [Microsoft: Pattern matching](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/patterns/pattern-matching) · Introducción; is, case y brazos switch; patrones de tipo, propiedades y valores · versión: Ruta final tras redirección de functional/pattern-matching, leída el 30-10-2026. Se usan patrones consolidados, no novedades preview. · comprobado: 2026-10-30
- [Microsoft: Generic types and methods](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics) · Introducción; Generic collections: parámetros de tipo y error de agregar int a List&lt;string&gt; · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30
- [Microsoft: Reflection in .NET](https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/overview) · Introducción; System.Type y System.Reflection; inspección de tipos/miembros e invocación · versión: Ruta final tras redirección de reflection/reflection, leída el 30-10-2026. La compatibilidad con recorte y Native AOT se contrasta con la fuente específica. · comprobado: 2026-10-30
- [Microsoft: Introduction to LINQ queries](https://learn.microsoft.com/en-us/dotnet/csharp/linq/get-started/introduction-to-linq-queries) · Three parts of a query; Query execution; Deferred; ToList/ToArray frente a enumeración · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `47b37791caba2e814bd30947d25898e8b8340c1865da93daa5c3169a7352a489` · propuesta: `c30daa29b2ee8bed1a7862ca7bb1bfce46899afdfc224f6aa6e9a2c95e3eb491`

## MAN-GSI-P15-052

Decisión: pending_review · acción: revise.

Motivo: Conservar seguridad de tipos y clave B; caso de API genérica que rechaza una inserción incompatible.

### Antes

¿Cuál es una ventaja de los genéricos en APIs y colecciones?

- A. Eliminar la necesidad de compilar.
- B. Mantener información de tipos y reducir casts inseguros. **(correcta)**
- C. Convertir todos los tipos a string.
- D. Obligar a serializar todos los valores.

Explicación: Mantener información de tipos y reducir casts inseguros. La seguridad de tipos es una de las razones centrales de los genéricos.

### Propuesta

Una API recibe List&lt;int&gt; y se intenta ejecutar numeros.Add("7"). ¿Qué ventaja de los genéricos ilustra el contrato de esa colección?

- A. Admitir la cadena y convertirla automáticamente a int al agregarla a la lista.
- B. Comprobar el tipo al compilar y rechazar ese argumento incompatible con int. **(correcta)**
- C. Guardar cualquier argumento como object y exigir un cast al leer cada elemento.
- D. Posponer la comprobación del argumento hasta que se enumere la lista por primera vez.

Explicación: List&lt;int&gt; declara un contrato cuyo Add recibe un int. Pasar la cadena "7" no lo satisface y produce un error de compilación; la conversión de texto a número debe decidirse explícitamente. El parámetro de tipo mantiene esa comprobación sin una colección basada en object ni casts para recuperar el tipo de cada elemento. No elimina toda excepción posible de la aplicación.

- Error A: No existe conversión implícita general de string a int al llamar a Add; analizar o convertir texto requiere una operación apropiada.
- Error C: Describe el contrato de una colección basada en object, no Add de List&lt;int&gt; con su tipo concreto.
- Error D: La incompatibilidad del argumento se detecta al compilar la llamada; no se aplaza hasta recorrer la lista.

- [Microsoft: Generic types and methods](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics) · Introducción; Generic collections: parámetros de tipo y error de agregar int a List&lt;string&gt; · versión: Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. · comprobado: 2026-10-30

Partida: `5184b563ba574df43fd50b534b7b653a228a3e07e92519c6ad56d9aa86b27dc0` · propuesta: `a79a90cf641caff3f192ed69b74099ea2068b5de245ae53ccdda85e9bbde5934`

## MAN-GSI-P15-053

Decisión: pending_review · acción: revise.

Motivo: Conservar restauración de dependencias y clave A; contrastar comandos reales sin afirmar descarga o ejecución obligatoria.

### Antes

¿Qué hace \`dotnet restore\`?

- A. Restaura las dependencias de paquetes necesarias para el proyecto. **(correcta)**
- B. Ejecuta las pruebas unitarias.
- C. Publica la aplicación en producción.
- D. Repara el sistema operativo.

Explicación: Restaura las dependencias de paquetes necesarias para el proyecto. Restore resuelve paquetes; en muchos comandos modernos se ejecuta implícitamente cuando hace falta.

### Propuesta

¿Qué hace \`dotnet restore\`?

- A. Resuelve y restaura los paquetes y herramientas de dependencia que requiere el proyecto. **(correcta)**
- B. Compila los archivos fuente y genera los ensamblados de salida de la aplicación.
- C. Descubre las pruebas del proyecto y ejecuta sus casos con el runner configurado.
- D. Genera los artefactos de publicación para distribuir y ejecutar en un entorno de destino.

Explicación: dotnet restore resuelve dependencias de paquetes y herramientas y prepara los activos necesarios a partir de caché y orígenes configurados, descargando cuando hace falta. No es compilación, ejecución de pruebas o publicación. Otros comandos pueden restaurar implícitamente y --no-restore permite evitar ese paso cuando ya está resuelto. Restaurar no acredita por sí solo seguridad o calidad de las dependencias.

- Error B: Compilar fuentes y producir ensamblados corresponde a build; que build pueda restaurar implícitamente no convierte restore en compilación.
- Error C: Ejecutar pruebas corresponde a test y su runner. Restaurar sus dependencias no equivale a descubrir y ejecutar casos.
- Error D: Preparar artefactos distribuibles corresponde a publish, que puede usar una restauración implícita, pero realiza otro trabajo.

- [Microsoft: dotnet restore](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-restore) · Name; Description; restauración implícita y --no-restore · versión: Documentación aplicable SDK6+ leída el 30-10-2026. Resolver paquetes y usar caché no es compilar, probar, desplegar ni demostrar seguridad de dependencias. No se ejecuta restore. · comprobado: 2026-10-30

Partida: `5ae3e10e7fa0752b346b8426edb46aed8d7537059c1a1679c57d651fdba58583` · propuesta: `7b75fea3acc9c1c499cbc3ad6b8374b422454933b7bc440b4ac071eced8fbc2a`
