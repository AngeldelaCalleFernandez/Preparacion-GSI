# Preparación editorial GSI-EDITORIAL-062

Preparado y fuentes comprobadas el **30-10-2026**. **20 propuestas pendientes de aprobación expresa. Cero aceptadas, aplicadas o retiradas en este lote.**

Hash canónico: `8ed2b1abdebb28e05424831b35356124be350c875313d0f230447e1051fdd2a1`. Base activa: `e3e20ab879518c899806a70575eead28b3b35e6f`.

[Ficha antes/después](GSI_REVISION_LOTE_062.md), [propuestas JSON](../content/question-reviews/lote-062.json) y [registro de preparación](../logs/gsi-editorial-062-preparation.json).

## Alcance y revisión individual

Posiciones **1221–1240** de la cola: veinte manuales B3-T11. Tipos valor/referencia, boxing, excepciones, delegados, genéricos, reflexión, GC, IL, asincronía, Task, LINQ, recursos, records, nulabilidad, patrones y restauración de paquetes. Se conservan conceptos, IDs, claves, dificultad orientativa, procedencia y fuentes históricas. Ninguna IA u oficial.

Se mantienen completas cuatro formulaciones: MAN-GSI-P15-033, MAN-GSI-P15-034, MAN-GSI-P15-047, MAN-GSI-P15-051. Se añaden veinte explicaciones correctas y sesenta justificaciones de distractores por contenido e ID original, utilizables con cualquier orden de presentación.

**14 conceptuales y seis aplicaciones**: P15-039 (referencias retenidas), 043 (interbloqueo UI), 044 (consulta diferida), 046 (filtro tras AsEnumerable), 050 (advertencia de nulabilidad) y 052 (inserción incompatible en colección genérica). Los contextos delimitan mecanismos reales; la proporción no impone cuotas a cada lote.

La semántica de tipos no se reduce a pila frente a heap; copiar campos de referencia no clona los objetos referenciados. async/await no crea paralelismo por defecto o un hilo dedicado. El caso de bloqueo requiere una continuación pendiente en el mismo hilo UI ocupado. IQueryable también es IEnumerable; AsEnumerable cambia operadores sin materializar por sí mismo. Se distingue traducción de filtros EF Core de evaluación cliente en la proyección superior.

record no garantiza inmutabilidad profunda, copia profunda o persistencia automática. Nulabilidad expresa contratos y advertencias estáticas: ! no valida o corrige null al ejecutar. using garantiza la invocación de Dispose en el flujo estructurado ordinario para el recurso adquirido no nulo, no el éxito de una implementación defectuosa ni el comportamiento ante terminación abrupta.

Las rúbricas expresan juicio del preparador, no aprobación del propietario, revisión humana independiente o calibración estadística. El estado activo heredado en after no aplica o activa las propuestas.

| ID | Clave | Tipo | Formulación | Motivo |
| --- | --- | --- | --- | --- |
| MAN-GSI-P15-033 | C | conceptual | Conservada | Conservar íntegra formulación y clave C; matizar copia superficial de campos de referencia y evitar el mito de la pila. |
| MAN-GSI-P15-034 | C | conceptual | Conservada | Conservar enunciado, alternativas y clave C; explicar copia y distinguir unboxing, conversión numérica y genéricos. |
| MAN-GSI-P15-035 | A | conceptual | Ajustada | Conservar modelo común de excepciones y clave A; comparar responsabilidades próximas de detección y recuperación. |
| MAN-GSI-P15-036 | B | conceptual | Ajustada | Conservar delegado y clave B; comparar evento, interfaz y árbol de expresión con definiciones plausibles. |
| MAN-GSI-P15-037 | A | conceptual | Ajustada | Conservar reutilización tipada y clave A; alternativas cercanas a object, dynamic y duplicación de sobrecargas. |
| MAN-GSI-P15-038 | A | conceptual | Ajustada | Conservar reflexión y clave A; diferenciar mecanismos próximos y revisar sus límites con AOT. |
| MAN-GSI-P15-039 | B | application | Ajustada | Conservar retención de objetos y clave B; caso acotado a referencias fuertes desde un diccionario estático alcanzable. |
| MAN-GSI-P15-040 | C | conceptual | Ajustada | Conservar IL frente a código máquina y clave C; precisar direcciones de conversión y límites de portabilidad. |
| MAN-GSI-P15-041 | A | conceptual | Ajustada | Conservar composición asíncrona y clave A; separar espera, planificación, paralelismo y propagación de errores. |
| MAN-GSI-P15-042 | D | conceptual | Ajustada | Conservar Task y clave D; evitar prometer finalización solo futura o equivalencia entre Task e hilo. |
| MAN-GSI-P15-043 | B | application | Ajustada | Conservar riesgo de sync-over-async y clave B; fijar el contexto UI y la continuación necesaria para justificar el interbloqueo. |
| MAN-GSI-P15-044 | C | application | Ajustada | Conservar ejecución diferida y clave C; caso acotado a List y Where con modificación anterior al recorrido. |
| MAN-GSI-P15-045 | B | conceptual | Ajustada | Conservar traducción por proveedor y clave B; delimitar EF Core relacional y tratamiento de expresiones no traducibles. |
| MAN-GSI-P15-046 | D | application | Ajustada | Conservar IEnumerable frente a IQueryable y clave D; comparar ubicación de un filtro después de AsEnumerable sin confundirlo con ToList. |
| MAN-GSI-P15-047 | B | conceptual | Conservada | Conservar íntegros enunciado, opciones y clave B; precisar llamada, flujo ordinario y objeto no nulo frente a garantías absolutas de cierre. |
| MAN-GSI-P15-049 | A | conceptual | Ajustada | Conservar modelado de datos e igualdad y clave A; distinguir clase/struct, copia superficial y persistencia. |
| MAN-GSI-P15-050 | C | application | Ajustada | Conservar análisis estático de nulabilidad y clave C; caso de advertencia que distingue anotación, comprobación y supresión. |
| MAN-GSI-P15-051 | C | conceptual | Conservada | Conservar formulación completa y clave C; separar patrones, genéricos, reflexión y LINQ. |
| MAN-GSI-P15-052 | B | application | Ajustada | Conservar seguridad de tipos y clave B; caso de API genérica que rechaza una inserción incompatible. |
| MAN-GSI-P15-053 | A | conceptual | Ajustada | Conservar restauración de dependencias y clave A; contrastar comandos reales sin afirmar descarga o ejecución obligatoria. |

## Fuentes y localizadores

**24 URLs primarias de Microsoft comprobadas el 30-10-2026**. Se registran rutas finales de las redirecciones, apartados y versión o alcance documental. La fuente histórica se conserva sin atribuirle una nueva comprobación que no se haya realizado.

| Fuente | Localizador | Versión o alcance |
| --- | --- | --- |
| [Microsoft: Value types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types) | Introducción; copia en asignación; campos de referencia dentro de structs | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Boxing and unboxing](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/boxing-and-unboxing) | Introducción; Boxing; ejemplo de copia de int123 y cambio posterior a456 | Leída el 30-10-2026. Se separa semántica de copia de decisiones de almacenamiento y optimizaciones; el ejemplo de pila no define dónde vive siempre una variable. |
| [Microsoft: Generic types and methods](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics) | Introducción; Generic collections: parámetros de tipo y error de agregar int a List<string> | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Handling and throwing exceptions](https://learn.microsoft.com/en-us/dotnet/standard/exceptions/) | Introducción; Exceptions; Exceptions vs traditional error-handling methods: System.Exception y modelo común | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/) | Introducción; firma y retorno compatibles; callbacks; Explore delegate characteristics | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Events](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/events/) | Introducción; Events overview: publisher/subscribers y papel de los delegados | Leída el 30-10-2026. Se usa la separación evento/delegado, no referencias históricas a mecanismos asíncronos de invocación ni una obligación de usar EventHandler en todo evento. |
| [Microsoft: Expression trees](https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/expression-trees/) | Introducción: operaciones como datos; inspección, traducción y relación con proveedores LINQ | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Reflection in .NET](https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/overview) | Introducción; System.Type y System.Reflection; inspección de tipos/miembros e invocación | Ruta final tras redirección de reflection/reflection, leída el 30-10-2026. La compatibilidad con recorte y Native AOT se contrasta con la fuente específica. |
| [Microsoft: Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) | Introducción; IL a nativo al publicar; destino; ausencia de JIT al ejecutar; limitaciones | Leída el 30-10-2026. Incluye servicios de runtime; no elimina GC ni garantiza compatibilidad de carga dinámica o reflexión. |
| [Microsoft: GC fundamentals](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals) | Memory release: raíces, grafo de referencias fuertes y objetos inalcanzables | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: using statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/using) | IDisposable; salida con excepción; await using; reescritura try/finally | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Managed execution](https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process) | Compile to CIL; Compile CIL to native code; Compilation by the JIT compiler | Leída el 30-10-2026. IL/metadatos y JIT tradicional; apartados históricos NGen y seguridad no describen todos los modos modernos. |
| [Microsoft: Asynchronous programming](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/) | Task asynchronous programming model; asincronía frente a paralelismo; esperar sin bloquear el hilo | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: await operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/await) | Introducción: suspensión del método, no del hilo; operación ya completada sin suspensión | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Task class](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=net-10.0) | Definition; Remarks; CompletedTask; IsCompleted, IsCanceled, IsFaulted | Vista net-10.0 leída el 30-10-2026. La página agrega variantes y aviso prerelease: se usa el contrato estable de Task, no se asume que toda Task sea un trabajo con hilo dedicado. |
| [Microsoft .NET Blog: Await, and UI, and deadlocks! Oh my!](https://devblogs.microsoft.com/dotnet/await-and-ui-and-deadlocks-oh-my/) | button1_Click con LoadStringAsync y s.Result; dependencia circular con retorno al hilo UI; alternativa await | Stephen Toub, 13-01-2011, leído el 30-10-2026. Explicación histórica del mecanismo de contexto UI, contrastada con await actual; no recomendación de instalar Async CTP ni regla de interbloqueo en todo contexto. |
| [Microsoft: Introduction to LINQ queries](https://learn.microsoft.com/en-us/dotnet/csharp/linq/get-started/introduction-to-linq-queries) | Three parts of a query; Query execution; Deferred; ToList/ToArray frente a enumeración | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: EF Core client vs server evaluation](https://learn.microsoft.com/en-us/ef/core/querying/client-eval) | Introducción; Unsupported client evaluation; Explicit client evaluation | Leída el 30-10-2026. EF Core3.0 y posteriores: proyección superior puede evaluarse parcialmente en cliente; un Where no traducible no se descarga silenciosamente para filtrar. |
| [Microsoft: IQueryable<T>](https://learn.microsoft.com/en-us/dotnet/api/system.linq.iqueryable-1?view=net-10.0) | Definition e interfaces heredadas; Remarks: Expression, Provider y traducción | Vista net-10.0 leída el 30-10-2026. IQueryable<T> también es IEnumerable<T>; el proveedor y los operadores elegidos determinan ejecución y traducción. |
| [Microsoft: Enumerable.AsEnumerable](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.asenumerable?view=net-10.0) | Definition; Remarks: mismo origen con tipo de compilación IEnumerable<T> y selección de operadores | Vista net-10.0 leída el 30-10-2026. Cambia resolución de operadores; no equivale a ToList, materialización inmediata o garantía de que toda la consulta anterior pase al cliente. |
| [Microsoft: Records](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record) | Introducción; Immutability; Value equality; shallow copy de with | Leída el 30-10-2026. record class es referencia y record struct valor; igualdad sintetizada no implica inmutabilidad profunda ni comparación recursiva de cualquier miembro. |
| [Microsoft: Nullable reference types](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/null-safety/nullable-reference-types) | Introducción; Null-state analysis; Override the warnings with !; Known pitfalls | Ruta final tras redirección de nullable-references, leída el 30-10-2026. Anotaciones y advertencias de compilación, no nuevo tipo de runtime ni chequeo automático por !. |
| [Microsoft: Pattern matching](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/patterns/pattern-matching) | Introducción; is, case y brazos switch; patrones de tipo, propiedades y valores | Ruta final tras redirección de functional/pattern-matching, leída el 30-10-2026. Se usan patrones consolidados, no novedades preview. |
| [Microsoft: dotnet restore](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-restore) | Name; Description; restauración implícita y --no-restore | Documentación aplicable SDK6+ leída el 30-10-2026. Resolver paquetes y usar caché no es compilar, probar, desplegar ni demostrar seguridad de dependencias. No se ejecuta restore. |

Veinticuatro URLs primarias de Microsoft comprobadas el 30-10-2026, con rutas finales tras redirecciones para reflexión, nulabilidad y patrones. Se conserva procedencia histórica.
Los tipos valor se distinguen por semántica, no por vivir siempre en pila; copiar un struct copia sus campos, incluidas referencias compartidas a objetos.
async/await no implica hilo dedicado o paralelismo. El caso de interbloqueo exige continuación en el hilo UI bloqueado, sin extender esa conclusión a todo Result o Wait.
LINQ distingue construcción y enumeración. IQueryable<T> hereda IEnumerable<T>; AsEnumerable no materializa por sí solo. EF Core3+ distingue traducción del filtro y evaluación cliente de la proyección superior.
record no exige inmutabilidad profunda, igualdad recursiva o persistencia automática. Nulabilidad es análisis estático; ! no comprueba ni corrige null durante ejecución.

Avisos genéricos de autorización en Learn junto a texto público accesible: sin login o evasión de controles. Los avisos prerelease de páginas API no acreditan adopción de funciones futuras.
El artículo UI de 2011 se usa para la dependencia circular concreta, contrastado con await actual; no se ejecutan ejemplos o herramientas Async CTP.
Get-Command dotnet no devuelve una instalación en PATH. Sin compilación de C#, pruebas de EF Core, conexión a bases de datos o medición de GC.
Sin nuevas dependencias, PDF, OCR o conversiones; no se ejecutan comandos de restauración, instalación o despliegue presentes en fuentes.

El artículo UI de Stephen Toub, de2011, respalda la dependencia circular concreta; su época y Async CTP no se convierten en requisitos actuales. Las páginas API agregan variantes y avisos prerelease, pero se usan contratos estables de la vista net-10.0. Los apartados históricos de ejecución administrada no se presentan como una descripción exhaustiva de .NET moderno.

## Señales automáticas

| Señal | Antes | Propuesta |
| --- | ---: | ---: |
| correct_unique_longest | 14 | 4 |
| first_longest_accuracy | 70.0 | 20.0 |
| length_ratio_1_5_to_2 | 6 | 0 |
| length_ratio_at_least_2 | 0 | 0 |
| short_correct_feedback | 0 | 0 |
| duplicate_options | 0 | 0 |
| absolute_wording_cluster | 0 | 0 |
| identical_feedback | 0 | 0 |

Primera alternativa de longitud mínima correcta: 8/20 (40 %). Cuatro correctas únicas más largas y ningún ratio de alerta en la propuesta. Las longitudes se documentan como señales; no acreditan calidad pedagógica ni se ajustan con relleno, cuotas o cambios de clave.

## Incidencias de preparación

Cuatro escrituras auxiliares no se ejecutaron por falta de capacidad del revisor automático y otra agotó el plazo. La herramienta indicó que no eran rechazos de seguridad. Las escrituras posteriores pasaron la revisión normal; no se cambió el modelo ni se eludió el control. Se comprobó primero el conjunto completo en memoria y su hash coincide con el guardado. No hubo aplicación al banco ni un hash guardado anterior que sustituir.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-062.json --render docs/GSI_REVISION_LOTE_062.md --literal-content
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

Resultados: **19 pruebas editoriales, 84 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**; documentación, referencias y progreso correctos. Las ocho invocaciones terminan con código0. Simulación limitada a veinte manuales, con IDs, claves, procedencia y sesenta justificaciones individuales conservados. Se rechazan tres aceptaciones improcedentes y se comprueban ambas barreras de regeneración. **263 archivos protegidos intactos** y **135 enlaces locales existentes**.

**Diez controles Chrome correctos sobre la ficha guardada**, captura del caso LINQ diferido inspeccionada y ausencia de desbordamiento a1280/390px. El hash coincide con la simulación previa en memoria. No se ejecuta C# o EF Core ni la suite HTTP completa del producto. Los tres derivados conservan contenido y fecha30 del inicio; frente aHEAD solo cambia la fecha26→30. Bancos activos iguales aHEAD y oficiales iguales en bytes a la auditoría. No hay errores técnicos, pero siguen pendientes decisiones del propietario y las tres correcciones editoriales activas anteriores.

La ficha guardada se verifica con Chrome, Playwright y marked existentes: veinte apartados, cuarenta marcas de respuesta correcta, opciones, explicaciones, URLs y ausencia de desbordamiento a1280/390px. Se ha inspeccionado captura del caso de ejecución diferida. La comprobación previa en memoria se distingue de la comprobación final sobre archivos guardados.

No se ejecuta C# o EF Core por ausencia de dotnet en PATH; no se instalan dependencias. La suite HTTP completa del producto no se repite en esta preparación, que no cambia aplicación o bancos activos. Los controles de ficha no acreditan nueva cobertura funcional de Entrenamiento, Simulacros, estadísticas o Refuerzo.

Tres errores confirmados anteriores siguen activos con correcciones propuestas pendientes de aprobación/aplicación: MAN-GSI-P18-026, AI-GSI-B3-T04-004 y AI-GSI-B3-T05-002. Mantienen abierto el cierre editorial. No se añade un error confirmado de clave en este lote.

## Entrega y continuidad

Creados: propuestas JSON, ficha antes/después, este informe y registro062. Modificados: plan y progreso. Los tres derivados se regeneran y se ha comprobado que conservan íntegro el contenido semántico y la fecha30 del inicio; frente aHEAD solo cambia la fecha26→30. Se preservan cambios previos de herramientas y pruebas.

Acumulado: **20 aceptadas, 1.220 propuestas pendientes y 522 sin propuesta; 1.742 decisiones pendientes**. Lotes002–062: 113 incidencias IA originales, otras396 IA y711 manuales. De las128 incidencias originales, quince aceptadas/aplicadas y113 con propuesta pendiente.

Bancos activos, 202 oficiales, doce borradores, historial y originales intactos. Sin conversiones, OCR, instalación, aceptación, aplicación, activación, publicación, fusión o commit. El trabajo continúa por la cola; aplicar requiere aprobación expresa del hash.
