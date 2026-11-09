# Preparación editorial GSI-EDITORIAL-061

Preparado y fuentes comprobadas el **30-10-2026**. **20 propuestas pendientes de aprobación expresa. Cero aceptadas, aplicadas o retiradas en este lote.**

Hash canónico: `0724983bc4ed58e438b5a7ddb532b76d29f6af8b9def7837a64a4fc98cd7bc4d`. Base activa: `e3e20ab879518c899806a70575eead28b3b35e6f`.

[Ficha antes/después](GSI_REVISION_LOTE_061.md), [propuestas JSON](../content/question-reviews/lote-061.json) y [registro](../logs/gsi-editorial-061-preparation.json).

## Alcance y revisión individual

Posiciones **1201–1220** de la cola: veinte manuales B3-T11. Framework web, publicación, soporte, runtime, TFM, compilación, CTS/CLS/CLR, ensamblados, metadatos y recursos. Se mantienen conceptos, IDs, claves, dificultad orientativa, procedencia y fuentes históricas. Ninguna IA u oficial.

Se conservan cuatro formulaciones completas: MAN-GSI-P15-014, MAN-GSI-P15-019, MAN-GSI-P15-024, MAN-GSI-P15-025. Se completan veinte explicaciones correctas y sesenta justificaciones individuales por contenido e ID original, compatibles con el barajado.

**14 conceptuales y seis aplicaciones**: P15-013 (destino dependiente del framework), 020 (dependencia y plataforma), 021 (salida del compilador), 028 (manifiesto), 030 (retención de referencias) y 031 (disposición). Se usa contexto para resolver una distinción, sin exigir cuotas por lote.

Se separan autocontenido, single-file, ReadyToRun y Native AOT; SDK, runtime, TFM y RID; CTS, CLS y ejecución. La política vigente consultada fija LTS de tres años y STS de dos y ambas reciben parches. Se evita reutilizar dieciocho meses históricos. Solo IDisposable no implica disposición asíncrona; using invoca Dispose incluso con excepción, sin prometer éxito de una implementación defectuosa de Dispose.

Las rúbricas son juicio del preparador, no aceptación del propietario ni revisión humana independiente. No se calibra dificultad. Un estado heredado en after no activa la propuesta.

| ID | Clave | Tipo | Formulación | Motivo |
| --- | --- | --- | --- | --- |
| MAN-GSI-P15-012 | B | conceptual | Ajustada | Conservar framework web y clave B; comparar capas próximas de .NET. |
| MAN-GSI-P15-013 | C | application | Ajustada | Conservar runtime compatible y clave C; microcaso de ejecución sin compilación. |
| MAN-GSI-P15-014 | B | conceptual | Conservada | Conservar íntegros enunciado, alternativas y clave B; separar autocontenido, archivo único y AOT. |
| MAN-GSI-P15-015 | D | conceptual | Ajustada | Conservar ventana de soporte y clave D; fechar la duración vigente y distinguir calidad y ciclo de vida. |
| MAN-GSI-P15-016 | C | conceptual | Ajustada | Conservar runtime frente a SDK y clave C; alternativas de componentes próximos. |
| MAN-GSI-P15-018 | C | conceptual | Ajustada | Conservar TFM y clave C; contrastar SDK, RID y configuración. |
| MAN-GSI-P15-019 | D | conceptual | Conservada | Conservar íntegros enunciado, opciones y clave D; delimitar AOT frente a R2R, JIT y empaquetado. |
| MAN-GSI-P15-020 | C | application | Ajustada | Conservar elección por requisitos y clave C; caso con dependencia incompatible que requiere resolver el límite. |
| MAN-GSI-P15-021 | D | application | Ajustada | Conservar IL/metadatos y clave D; acotar compilación tradicional previa a publicar. |
| MAN-GSI-P15-022 | A | conceptual | Ajustada | Conservar JIT y clave A; contrastar etapas próximas sin generalizar JIT a todo .NET. |
| MAN-GSI-P15-023 | D | conceptual | Ajustada | Conservar comparación temporal y clave D; explicar coexistencia de R2R y JIT. |
| MAN-GSI-P15-024 | B | conceptual | Conservada | Conservar íntegros enunciado, opciones y clave B; explicar CTS frente a CLS, runtime y bibliotecas. |
| MAN-GSI-P15-025 | C | conceptual | Conservada | Conservar íntegra pregunta y clave C; precisar superficie pública frente a implementación privada. |
| MAN-GSI-P15-026 | D | conceptual | Ajustada | Conservar relación CLR/CTS/CLS y clave D; permutaciones de funciones próximas. |
| MAN-GSI-P15-027 | D | conceptual | Ajustada | Conservar unidad lógica y clave D; acotar modelo administrado tradicional. |
| MAN-GSI-P15-028 | C | application | Ajustada | Conservar contenido del manifiesto y clave C; microcaso de inspección de identidad y dependencias. |
| MAN-GSI-P15-029 | D | conceptual | Ajustada | Conservar metadatos y clave D; alternativas próximas de IL, símbolos y configuración. |
| MAN-GSI-P15-030 | B | application | Ajustada | Conservar memoria administrada inalcanzable y clave B; caso de retención por referencias fuertes. |
| MAN-GSI-P15-031 | A | application | Ajustada | Conservar liberación determinista y clave A; precisar solo IDisposable sin cambiar el concepto. |
| MAN-GSI-P15-032 | B | conceptual | Ajustada | Conservar finalización no determinista y clave B; contrastar supuestos de sincronización y Dispose. |

## Fuentes y límites

**23 URLs primarias de Microsoft comprobadas el 30-10-2026**, con localizadores y versiones o alcance documental registrados. Se conservan fuentes originales.

| Fuente | Localizador | Versión o alcance |
| --- | --- | --- |
| [Microsoft: .NET glossary](https://learn.microsoft.com/en-us/dotnet/standard/glossary) | ASP.NET Core; BCL; assembly; AOT y JIT | Leída el 30-10-2026. Definiciones de capas; referencias históricas CoreRT/.NET Native no se convierten en recomendaciones actuales. |
| [Microsoft: CLR overview](https://learn.microsoft.com/en-us/dotnet/standard/clr) | Introducción: entorno de ejecución, metadatos y servicios del código administrado | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: global.json](https://learn.microsoft.com/en-us/dotnet/core/tools/global-json) | Introducción; selección de SDK independiente del framework objetivo; sdk.version | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/) | Publishing modes; Publishing basics: framework-dependent, self-contained, TFM y RID | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Install .NET on Windows](https://learn.microsoft.com/en-us/dotnet/core/install/windows) | SDK y runtimes: ejecución frente a desarrollo; runtime correspondiente | Leída el 30-10-2026 para distinguir componentes; no se ejecutan instrucciones de instalación ni se generalizan requisitos de Windows. |
| [Microsoft: Single-file](https://learn.microsoft.com/en-us/dotnet/core/deploying/single-file/overview) | Introducción: empaquetado disponible framework-dependent y self-contained | Leída el 30-10-2026. Solo distinción de empaquetado; ejemplos antiguos y defaults variables no se adoptan como regla actual universal. |
| [Microsoft: Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) | Introducción; IL a nativo al publicar; destino; ausencia de JIT al ejecutar; limitaciones | Leída el 30-10-2026. Incluye servicios de runtime; no elimina GC ni garantiza compatibilidad de carga dinámica o reflexión. |
| [Microsoft: Support policy](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core) | What releases qualify for servicing; Supported versions; Release types | Actualizada 25-10-2026, comprobada 30-10-2026: LTS tres años y STS dos; ambas con parches durante soporte y obligación de mantener parches vigentes. |
| [Microsoft: Target frameworks](https://learn.microsoft.com/en-us/dotnet/standard/frameworks) | Introducción; Latest versions; OS-specific TFMs | Leída el 30-10-2026. net10.0 estable; TFM no es versión exacta del SDK, RID o configuración Release. |
| [Microsoft: RID catalog](https://learn.microsoft.com/en-us/dotnet/core/rid-catalog) | Introducción; RuntimeIdentifier; linux-x64, win-x64 y activos específicos de plataforma | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: ReadyToRun](https://learn.microsoft.com/en-us/dotnet/core/deploying/ready-to-run) | Introducción; Impact of using the ReadyToRun feature: IL, nativo y reducción de trabajo JIT | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: .NET vs .NET Framework](https://learn.microsoft.com/en-us/dotnet/standard/choosing-core-framework-server) | Introducción; Choose .NET; Choose .NET Framework: multiplataforma y dependencias heredadas | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Managed execution](https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process) | Compile to CIL; Compile CIL to native code; Compilation by the JIT compiler | Leída el 30-10-2026. IL/metadatos y JIT tradicional; apartados históricos NGen y seguridad no describen todos los modos modernos. |
| [Microsoft: Common type system](https://learn.microsoft.com/en-us/dotnet/standard/base-types/common-type-system) | Introducción; Types in .NET: declaración, uso, gestión e integración entre lenguajes | Leída el 30-10-2026. Definición y categorías; no se trasladan restricciones históricas de constructores de estructuras a C# actual. |
| [Microsoft: Language independence](https://learn.microsoft.com/en-us/dotnet/standard/language-independence-and-language-independent-components) | Introducción; CLS compliance rules: interfaz pública, implementación privada y ejemplo UInt16 | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Assemblies](https://learn.microsoft.com/en-us/dotnet/standard/assembly/) | Introducción y propiedades: unidad lógica de tipos/recursos; despliegue y versionado | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Assembly manifest](https://learn.microsoft.com/en-us/dotnet/standard/assembly/manifest) | Funciones; Assembly manifest contents: identidad, archivos y referencias | Leída el 30-10-2026. No se generalizan políticas históricas de carga/versionado de Framework al host moderno. |
| [Microsoft: Metadata](https://learn.microsoft.com/en-us/dotnet/standard/metadata-and-self-describing-components) | Introducción; tipos y miembros; Metadata and the PE File Structure | Leída el 30-10-2026. Metadatos frente a IL y símbolos; el modelo histórico de permisos del artículo no se presenta como vigente. |
| [Microsoft: GC fundamentals](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals) | Memory release: raíces, grafo de referencias fuertes y objetos inalcanzables | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Unmanaged resources](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/unmanaged) | Introducción; Dispose y SafeHandle; el GC no libera por sí solo cada recurso externo | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: using statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/using) | IDisposable; salida con excepción; await using; reescritura try/finally | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: DisposeAsync](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-disposeasync) | Introducción; IAsyncDisposable/DisposeAsync frente a IDisposable; Using async disposable | Texto público consultado el 30-10-2026; sin instalación ni ejecución de .NET. |
| [Microsoft: Finalizers](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/finalizers) | Momento no controlable; terminación según implementación; Explicit release of resources | Leída el 30-10-2026. .NET5+ no ejecuta finalizadores como parte de la terminación; sin experimentos temporales con GC. |

Veintitrés fuentes primarias abiertas y comprobadas el 30-10-2026. Se conservan fuente y procedencia históricas y se añaden localizadores.
Se distinguen compilación, empaquetado, inclusión del runtime y destino. R2R conserva IL y posible JIT; Native AOT no elimina los servicios de runtime.
La política actualizada el 25-10-2026 fija LTS de tres años y STS de dos; no se reutilizan dieciocho meses históricos.
NGen, permisos CAS y restricciones antiguas de estructuras no se enseñan como panorama moderno. Se usan los conceptos delimitados de las fuentes.
La precisión sobre IDisposable y await using elimina una posible ambigüedad; la expresión histórica según el caso no se declara error confirmado de clave.

Learn presenta avisos genéricos de autorización pero muestra el texto público utilizado; sin login ni evasión de controles.
El overview ASP.NET Core solicitado con vista10 mostró avisos de versión inconsistentes: se contrastó su definición con el glosario y no se incorpora esa ruta como fuente de versión vigente.
Get-Command dotnet no devuelve instalación en PATH. Sin instalar SDK, compilar C#, publicar AOT o medir GC.
Sin PDF, OCR, conversiones o cambios de originales. No se ejecutan instrucciones de instalación de las fuentes.

No hay ejecución real de C#, AOT o GC: dotnet no se encuentra en PATH. No se instalan herramientas. Las fuentes históricas se acotan para no generalizar NGen, permisos antiguos o restricciones de estructuras a .NET moderno.

## Señales automáticas

| Señal | Antes | Propuesta |
| --- | ---: | ---: |
| correct_unique_longest | 10 | 8 |
| first_longest_accuracy | 50.0 | 40.0 |
| length_ratio_1_5_to_2 | 6 | 0 |
| length_ratio_at_least_2 | 0 | 0 |
| short_correct_feedback | 0 | 0 |
| duplicate_options | 0 | 0 |
| absolute_wording_cluster | 0 | 0 |
| identical_feedback | 0 | 0 |

Primera alternativa de longitud mínima correcta: 8/20 (40 %). Ocho correctas únicas más largas, sin ratios de alerta. Son señales descriptivas, no evidencia automática de calidad. Se documentan sin relleno, reordenar claves o cuotas artificiales.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-061.json --render docs/GSI_REVISION_LOTE_061.md --literal-content
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

Resultados: **19 pruebas editoriales, 83 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**; documentación, referencias y progreso correctos. Las ocho invocaciones terminan con código0. Simulación limitada a veinte manuales, manteniendo IDs, claves, procedencia y sesenta distractores individualizados. Tres intentos de aprobación improcedente rechazados y dos barreras de regeneración verificadas. **259 archivos protegidos intactos** y **133 enlaces locales existentes**.

**Diez controles Chrome correctos**, captura del caso IDisposable inspeccionada, sin desbordamiento a1280/390px. No se ejecuta C# ni la suite HTTP completa del producto en esta preparación. Los tres derivados solo cambian de fecha29→30; frente aHEAD,26→30. Bancos activos iguales aHEAD y oficiales iguales en bytes a la auditoría. Cero errores técnicos no supone cierre editorial: siguen pendientes las decisiones del propietario y tres correcciones activas anteriores.

La ficha se comprueba con Chrome, Playwright y marked existentes, en memoria y con conexiones externas bloqueadas: veinte apartados, opciones, correctas, sesenta distractores, URLs y anchuras1280/390px. Se ha inspeccionado captura del caso IDisposable. No es una prueba HTTP del producto. La suite funcional completa no se repite porque no cambian código de aplicación o bancos activos; no se afirma nueva cobertura de Entrenamiento, Simulacros, estadísticas o Refuerzo.

Tres errores editoriales confirmados anteriores siguen activos y con corrección propuesta pendiente: MAN-GSI-P18-026, AI-GSI-B3-T04-004 y AI-GSI-B3-T05-002. Impiden cerrar la revisión editorial hasta resolverlos. No se registra otro error confirmado de clave en este lote.

## Entrega y continuidad

Creados: propuestas JSON, ficha antes/después, este informe y registro de preparación061. Modificados: plan y progreso. Los tres derivados se regeneran: comprobar cambio exclusivo de fecha29→30 respecto al inicio y26→30 frente aHEAD. Los lotes anteriores conservan sus fechas y bytes.

Acumulado: **20 aceptadas, 1.200 propuestas pendientes, 542 sin propuesta y 1.742 decisiones pendientes**. Lotes002–061: 113 incidencias IA originales, otras396 IA y691 manuales. De las128 incidencias originales, quince aceptadas/aplicadas y113 con propuesta pendiente.

Bancos activos, 202 oficiales, doce borradores, historial y documentos originales intactos. Sin conversiones, instalaciones, aceptación, aplicación, activación, publicación, fusión o commit. Continúa la cola por bloque y tema; cada aplicación exige aprobación expresa de su hash.
