# Preparación del lote GSI-EDITORIAL-026

Fecha: **27-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico:

`55b84c44a31b518aee347afa92bec8a5b621283c8c009b31f4c58fbe0f8e44ad`

La [ficha antes/después](GSI_REVISION_LOTE_026.md) contiene las 20 propuestas y sus explicaciones. El [JSON](../content/question-reviews/lote-026.json) conserva instantáneas, hashes, motivos, fuentes y rúbrica del preparador. El [registro técnico](../logs/gsi-editorial-026-preparation.json) distingue preparación, revisión humana y aplicación. La aprobación del piloto no autoriza este lote.

## Alcance y decisiones individuales

Posiciones **501–520** de `review_order`: **cinco manuales B2-T02 y quince IA B2-T03**. Se cierra la parte pendiente de sistemas operativos de esta cola y se continúa con lenguajes de programación. No incluye oficiales. Se mantienen conceptos, IDs, claves, procedencia, campos de fuente histórica y dificultad orientativa. Las decisiones nuevas permanecen `pending_review`.

Se conservan íntegramente enunciado y alternativas de **AI-GSI-B2-T03-002 y 007** (AOT y composición). Hay **12 conceptuales y ocho aplicaciones**, justificadas por su contenido. Los microcasos precisan fallo de página recuperable, flujo con exceso de producción, alternancia en procesador lógico y retención de objetos alcanzables; se mantienen ejemplos de estilo imperativo, JIT/AOT y consulta SQL. No se impone una cuota por lote ni se cambian claves para ajustar patrones.

| ID | Banco | Modalidad | Motivo individual |
| --- | --- | --- | --- |
| MAN-GSI-P17-097 | manual | Conceptual | Conservar condición necesaria de Coffman y clave D; comparar con medidas de prevención de interbloqueo en lugar de conceptos ajenos. |
| MAN-GSI-P17-106 | manual | Aplicación | Conservar page fault y clave B; microcaso recuperable que resuelve el solapamiento potencial con accesos inválidos, sin reducir todos los fallos a disco o error fatal. |
| MAN-GSI-P17-112 | manual | Conceptual | Conservar driver de dispositivo y clave D; distinguirlo de firmware, planificador y optimizador, con límites de pilas y modo de ejecución. |
| MAN-GSI-P17-139 | manual | Conceptual | Conservar APFS y clave C; alternativas de nombres comparables y ExFAT como confusión real de intercambio, con versión y fecha de fuente. |
| MAN-GSI-P17-149 | manual | Conceptual | Conservar parcheo y ciclo de soporte y clave A; distractores sobre criterios insuficientes de gestión, sin prometer compatibilidad universal. |
| AI-GSI-B2-T03-003 | ai | Conceptual | Conservar lenguaje frente a implementación y clave B; afirmaciones comparables sobre traducción, bytecode y ejecución sin clasificación rígida. |
| AI-GSI-B2-T03-004 | ai | Conceptual | Conservar tipado dinámico y clave B; precisar objetos, operaciones y herramientas estáticas sin confundir dinámico con sin tipos. |
| AI-GSI-B2-T03-006 | ai | Aplicación | Conservar ejemplo imperativo y clave B; cuatro estilos próximos y explicación de coexistencia en lenguajes multiparadigma. |
| AI-GSI-B2-T03-010 | ai | Conceptual | Conservar inmutabilidad y razonamiento concurrente y clave D; separar menor coordinación, planificación y costes. |
| AI-GSI-B2-T03-015 | ai | Aplicación | Conservar backpressure y clave B; microcaso productor rápido/consumidor lento que compara regulación y soluciones parciales. |
| AI-GSI-B2-T03-016 | ai | Aplicación | Conservar concurrencia sin paralelismo y clave A; acotar procesador lógico para evitar ambigüedad de SMT en un núcleo físico. |
| AI-GSI-B2-T03-017 | ai | Aplicación | Conservar fugas lógicas con GC y clave B; microcaso de lista alcanzable que retiene objetos ya innecesarios, sin recetas de GC forzado. |
| AI-GSI-B2-T03-001 | ai | Aplicación | Conservar identificación JIT y clave C; eliminar duplicidad entre AOT y compilación exclusivamente previa, comparando técnicas de ejecución. |
| AI-GSI-B2-T03-002 | ai | Aplicación | Conservar literalmente enunciado y cuatro alternativas de AOT y clave D; completar explicaciones sin reescritura innecesaria. |
| AI-GSI-B2-T03-005 | ai | Conceptual | Conservar Java/.NET y clave C; delimitar respectivamente JVM/class y CIL para evitar alternativas también válidas por usar otro bytecode. |
| AI-GSI-B2-T03-007 | ai | Conceptual | Conservar literalmente enunciado y alternativas ya pertinentes y clave A; completar límites de la recomendación de composición frente a herencia profunda. |
| AI-GSI-B2-T03-008 | ai | Conceptual | Conservar objeto como estado y comportamiento y clave A; comparar objeto, clase, interfaz y esquema sin exigir mutabilidad o campos propios. |
| AI-GSI-B2-T03-009 | ai | Conceptual | Conservar función pura y clave D; alternativas con forma paralela que distinguen dependencia externa y efectos observables. |
| AI-GSI-B2-T03-011 | ai | Conceptual | Conservar orden superior y clave A; preguntar qué se deduce para evitar que pureza, recursión o pereza coexistentes sean respuestas alternativas. |
| AI-GSI-B2-T03-012 | ai | Aplicación | Conservar consulta declarativa y clave D; precisar rasgo y mecanismos próximos, sin negar extensiones procedimentales o imponer plan óptimo. |

Cada propuesta incorpora explicación de la correcta y tres justificaciones individuales de distractores, vinculadas a los IDs originales y referidas al contenido. En las dos formulaciones conservadas, `revise` corresponde al nuevo feedback y respaldo: la nueva versión necesita aceptación propia. No se proponen cambios de clave, retiradas ni reemplazos.

Las quince IA conservan los hashes y declaraciones históricos de su fuente original como procedencia. Eso no acepta el nuevo texto: la propuesta y su contenido tienen hashes propios y permanecen pendientes. Se protegen borradores, registro de revisión, evidencia e historial; no se ejecuta regeneración del banco.

## Fuentes y alcance de la comprobación

Se incorporan **26 URLs primarias distintas**, todas abiertas realmente en web durante esta preparación el **27-10-2026**. Las referencias incluyen localizador, versión o alcance y fecha real de consulta. La comprobación del preparador no equivale a revisión humana independiente.

| Fuente primaria | Localizador y versión o alcance |
| --- | --- |
| [Arpaci-Dusseau: OSTEP, Common Concurrency Problems](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-bugs.pdf) | 32.3 Deadlock Bugs, Conditions for Deadlock y Prevention, pp. 7–8: cuatro condiciones y orden de adquisición. Capítulo de autores, versión 1.20; solo modelo clásico de interbloqueo de recursos, sin universalizar ejemplos o estadísticas históricas. |
| [Arpaci-Dusseau: OSTEP, Beyond Physical Memory: Mechanisms](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys.pdf) | 21.2 The Present Bit, pp. 3–4; 21.3 The Page Fault, pp. 4–5; 21.5 Page Fault Control Flow, pp. 6–7: acceso válido no residente, atención del SO y diferencia con TLB miss. Capítulo de autores, versión 1.10; modelo didáctico de paginación, sin afirmar que todo fallo exige disco o es fatal. |
| [Linux Kernel: Kernel level exception handling](https://docs.kernel.org/arch/x86/exception-tables.html) | Introducción y How does this work?: excepción page fault, dirección no accesible, ausencia de página o protección y tratamiento. Documento explicativo x86 con ejemplos históricos; solo distinción de causas y tratamiento, no código operativo, direcciones o API históricas. |
| [Microsoft: What is a driver?](https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/what-is-a-driver-) | Introducción, Expanding the definition y Software drivers: comunicación SO/dispositivo, pilas, filtros y controladores de software. Alcance de controlador de dispositivo; no se exige fabricante propio, ejecución exclusiva en kernel o acceso directo de cada driver a hardware. |
| [Linux Kernel: Firmware API, Introduction](https://docs.kernel.org/driver-api/firmware/introduction.html) | Introducción, lista de usos: firmware cargado a microcontroladores de dispositivos y datos para funcionamiento. Solo diferencia driver/firmware y posibilidad de carga; no se afirma que firmware sea inmutable o residente desde fabricación. |
| [Apple: File system formats available in Disk Utility on Mac](https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/mac) | File system formats; Apple File System (APFS): formato predeterminado en Mac modernos y distinción FAT/ExFAT. Guía consultada con selector macOS 27; sin exigir SSD, exclusividad de formato o reformateo de unidades existentes. |
| [AOSP: Android Security Bulletins](https://source.android.com/docs/security/bulletin/asb-overview) | Introducción y Sources: actualizaciones y correcciones de AOSP, kernel y fabricantes. Página consultada 27-10-2026; no se universaliza calendario, nivel de parche o plazo de soporte de un modelo a toda flota móvil. |
| [Google Pixel Help: Learn when you will get software updates on Google Pixel phones](https://support.google.com/pixelphone/answer/4457705?hl=en) | Introducción, About Pixel Drops y How long you will get Pixel updates: componentes, despliegue y duración según dispositivo. Solo ejemplo de seguimiento por fabricante/modelo; no se trasladan listas de dispositivos, fechas o número de años a otros móviles. |
| [Python: Glossary](https://docs.python.org/3.14/glossary.html) | Entradas bytecode e interpreted: compilación a representación intermedia y ejecución por intérprete. Documentación Python 3.14.10 leída; bytecode propio de implementación/versión, sin equiparar interpretado con ausencia de compilación o recomendar herramientas concretas. |
| [Oracle: Java Virtual Machine Specification, Chapter 2](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-2.html) | Introducción del capítulo y 2.1 The class File Format: máquina abstracta, formato class y libertad de implementación. Java SE 25; no se afirma obligatoriedad de JIT, algoritmo de GC concreto o portabilidad automática de dependencias nativas. |
| [Microsoft: Native AOT deployment](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) | Introducción: compilación IL a nativo al publicar y ausencia de compilador JIT durante ejecución de ese despliegue. Ejemplo Native AOT .NET; se usa el momento de compilación, sin prometer rendimiento universal, soporte de toda biblioteca o ausencia de runtime de apoyo. |
| [Python: Data model](https://docs.python.org/3.14/reference/datamodel.html) | 3.1 Objects, values and types: tipo de objetos, operaciones admitidas, valores y mutabilidad. Documentación Python 3.14.10; ejemplo de tipos asociados a objetos, sin afirmar que rebinding cambie el tipo del mismo objeto o que dinámico signifique sin tipos. |
| [Python: typing, Support for type hints](https://docs.python.org/3.14/library/typing.html) | Nota inicial: anotaciones no impuestas por runtime, uso por herramientas; Nominal vs structural subtyping, referencia a código dinámicamente tipado. Documentación Python 3.14.10; admite comprobación estática adicional, sin convertir anotaciones en conversión o validación obligatoria en ejecución. |
| [Microsoft: Functional programming vs. imperative programming](https://learn.microsoft.com/en-us/dotnet/standard/linq/functional-vs-imperative-programming) | Functional programming vs. imperative programming: pasos, estado y tabla de control de flujo. Comparación conceptual en LINQ to XML; se usan rasgos de estilo, sin clasificar rígidamente todo lenguaje OO como exclusivamente imperativo. |
| [Blackburn, Bos y Striegnitz: Learn Prolog Now!, 1.1 Some Simple Examples](https://lpn.swi-prolog.org/lpnpage.php?pageid=lpn-htmlse1&pagetype=html) | 1.1, introducción y Knowledge Base 1/2: hechos, reglas, consultas y base de conocimiento. Texto de los autores alojado en SWI-Prolog; solo fundamentos de programación lógica, sin adoptar sintaxis de respuestas, eficiencia o compatibilidad de ejemplos históricos. |
| [Oracle Java Tutorials: Immutable Objects](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html) | Immutable Objects: estado no modificable tras construcción y reducción de interferencia de hilos. Tutorial escrito para JDK 8; solo concepto de inmutabilidad, sin prometer paralelismo automático o coste de memoria nulo. |
| [Reactive Streams: asynchronous stream processing with non-blocking back pressure](https://www.reactive-streams.org/) | The Problem y Scope: fuente rápida, capacidad del destino y colas acotadas mediante backpressure. Página primaria de la iniciativa; no se atribuye mecanismo universal de transporte ni se confunde presión de retorno no bloqueante con detener un hilo. |
| [Oracle Java Tutorials: Processes and Threads](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html) | Introducción: concurrencia con un único contexto de ejecución y reparto temporal entre procesos/hilos. Tutorial escrito para JDK 8; caso acotado a un procesador lógico, sin negar SMT, paralelismo interno o actividad de otros dispositivos. |
| [Microsoft: Fundamentals of garbage collection](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals) | Memory allocation: raíces de la aplicación y grafo de objetos alcanzables; Fundamentals of memory: posible agotamiento. Ejemplo GC trazador CLR; no se adoptan tamaños, generaciones o detalles históricos del heap como regla de todo runtime ni se equipara GC con cierre de recursos externos. |
| [Microsoft: Managed execution process](https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process) | Compile to CIL; Compile CIL to native code; Compilation by the JIT compiler: representación intermedia y compilación durante ejecución. Solo ruta CLR/CIL/JIT como ejemplo, sin tratar NGen o verificación histórica como receta actual ni negar otras modalidades de .NET. |
| [C++ Core Guidelines: C.120](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#c120-use-class-hierarchies-to-represent-concepts-with-inherent-hierarchical-structure-only) | C.120, Reason: acoplamiento de herencia y preferencia por miembro/composición cuando expresa mejor la relación. Documento vivo, cabecera 14-06-2026; recomendación contextual, no prohibición de herencia ni garantía de desacoplamiento por usar cualquier composición. |
| [Oracle Java Tutorials: What Is an Object?](https://docs.oracle.com/javase/tutorial/java/concepts/object.html) | What Is an Object?: entidad software, estado, comportamiento y encapsulación. Tutorial escrito para JDK 8; modelo conceptual OO, sin exigir estado mutable propio o negar objetos sin campos declarados. |
| [Microsoft F#: Introduction to Functional Programming Concepts](https://learn.microsoft.com/en-us/dotnet/fsharp/tutorials/functional-programming-concepts) | Terminology, Purity y Pure functions: dependencia de argumentos y ausencia de efectos; ejemplos de global mutable y escritura de salida. Página de F#; concepto de pureza observacional, sin tratar toda programación funcional o toda función de orden superior como necesariamente pura. |
| [Microsoft: What is F#](https://learn.microsoft.com/en-us/dotnet/fsharp/what-is-fsharp) | Correctness with functions and pattern matching, párrafo final: funciones como valores, parámetros y resultados. Actualización 13-10-2022; solo primera clase, sin adoptar promesas comerciales de rendimiento o ausencia de errores. |
| [MDN: First-class function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function) | Returning a function, nota: higher-order cuando recibe o devuelve funciones. Documentación de Mozilla consultada; solo definición, sin deducir pureza, recursión o evaluación perezosa de la firma. |
| [PostgreSQL: EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html) | Description: plan generado por el planificador, elección de escaneos y algoritmos de unión. Versión visible PostgreSQL 18; solo ejemplo de planificación, sin ejecutar EXPLAIN ANALYZE, recomendar planes o prometer plan físicamente óptimo. |

Matices y decisiones de fuente:

- Todas las referencias incorporadas se abrieron realmente el 27-10-2026. Se usan fuentes primarias de autores, plataformas, proyectos y documentación oficial. No se atribuye revisión humana independiente ni aceptación del propietario.
- Coffman: modelo clásico de recursos y condiciones necesarias; no se confunde espera temporal, cambio de tarea en CPU o una técnica de prevención con interbloqueo.
- Page fault: el enunciado original podía solapar la descripción general con el acceso inválido de un distractor. Se delimita un fallo recuperable de región válida no residente, manteniendo concepto y clave. También existen causas de protección y accesos inválidos; no todo fallo requiere disco ni es error físico/fatal. La explicación de Linux x86 usa solo el concepto, sin adoptar código o direcciones históricas.
- Driver: se acota a dispositivo y participación en E/S. Existen filtros, pilas, drivers de usuario y controladores de software sin hardware; no se exige acceso directo, fabricante propio o modo kernel universal. El firmware puede cargarse y no se supone inmutable.
- APFS: la guía Apple consultada selecciona macOS 27 y declara el formato predeterminado. No se exige SSD ni se afirma uso exclusivo, obligación de reformateo o equivalencia entre formato de intercambio y principal.
- Actualizaciones: AOSP respalda correcciones y componentes; Pixel es ejemplo de seguimiento por fabricante/modelo. No se trasladan plazos, listas de dispositivos o calendarios de un proveedor a toda flota, ni se garantiza compatibilidad de toda app tras cualquier parche.
- Lenguaje/implementación: se distinguen semántica, representación intermedia, interpretación y compilación antes/durante ejecución. Python 3.14.10 y JVMS 25 son ramas explícitas. La ruta CLR/JIT no se toma como única opción .NET; Native AOT es contraste actual sin recomendar NGen histórico o afirmar que AOT elimina servicios de runtime.
- Tipado dinámico: los valores mantienen tipo y las operaciones se comprueban al ejecutar. Python admite herramientas estáticas adicionales; las anotaciones no fuerzan por sí solas conversión ni comprobación en el runtime. Reasignar un nombre no cambia el tipo del objeto anterior.
- Imperativo/declarativo: propiedades del fragmento, sin clasificación exclusiva de cada lenguaje. SQL ordinario describe resultados y el motor planifica; no se niegan extensiones procedimentales ni se promete plan físicamente óptimo. No se ejecuta SQL real.
- Inmutabilidad: reduce coordinación de mutaciones compartidas, sin garantizar paralelismo o coste cero. Referencia no reasignable no equivale a objeto inmutable. Los tutoriales Oracle se identifican como escritos para JDK 8 y se usan solo para conceptos.
- Backpressure: adaptación de envío a demanda/capacidad y límites de acumulación en flujos asíncronos. Presión de retorno no bloqueante no equivale a detener un hilo, reordenar eventos o ampliar búfer indefinidamente.
- Concurrencia: el microcaso explicita procesador lógico para no negar SMT por hablar de un núcleo físico. Intercalado y ejecución simultánea de tareas son propiedades diferentes; no se hacen afirmaciones sobre paralelismo interno de instrucciones u otros dispositivos.
- GC: retención lógica de objetos alcanzables, aun innecesarios para negocio. Forzar GC o compactar no borra referencias vivas; no se recomienda liberación manual de cada objeto gestionado o se generalizan detalles del heap .NET a todo recolector.
- Composición: recomendación contextual de C.120, no prohibición de herencia ni desacoplamiento garantizado. Objeto, clase e interfaz se distinguen sin exigir campos mutables propios. Orden superior no implica pureza, recursión o evaluación perezosa.
- Las formulaciones completas de AI-GSI-B2-T03-002 y 007 se conservan; su nuevo feedback y respaldo requieren aceptación de la nueva versión. Las aceptaciones históricas, el borrador IA y el registro original permanecen intactos. Esta preparación no ejecuta el compilador regenerador ni cambia contenido publicado.
- Refinamiento final: cabecera exacta OSTEP 21.5 Page Fault Control Flow y páginas impresas; respaldo de autores LPN para hechos/reglas de Prolog. En 006 se distingue estilo imperativo de pureza observacional: las asignaciones locales no prueban por sí solas un efecto externo. Se ajusta el distractor funcional a composición de expresiones y se conserva la clave B.

Límites externos y fuentes descartadas:

- Microsoft Page faults, ruta ensayada win32/memory/page-faults: inaccesible; se leyeron OSTEP de sus autores y explicación de Linux x86.
- Microsoft F# first-class-functions, ruta ensayada: inaccesible; se abrió What is F# y la nota de MDN que define función de orden superior.
- Python: el ancla ensayada is-python-an-interpreted-or-compiled-language no existe en Design FAQ. No se usa como localizador. Se usa Glossary, entradas bytecode e interpreted realmente leídas.
- Microsoft presenta aviso genérico de autorización junto al cuerpo público legible. No se inició sesión ni se accedió a documentación privada.
- No se consultan Google Docs privados como si su URL bastara de evidencia. Su procedencia histórica se conserva y las nuevas afirmaciones se respaldan con documentación primaria abierta.
- SWI-Prolog Getting started quickly se abrió, pero no contenía los términos facts/rules buscados. Para ese respaldo se leyó directamente el texto de los autores Learn Prolog Now! 1.1 alojado en SWI-Prolog; no se atribuye esa comprobación al quickstart.

El refinamiento final conserva el hash previo e identifica 106, 006 y 012: título y páginas de OSTEP, respaldo de programación lógica y distinción entre estilo imperativo y pureza observacional. No se ha ejecutado conversión ni modificado ningún documento original.

## Métricas antes y propuesta

Análisis 2.0.0 de las 20 preguntas en simulación, sin modificar bancos activos.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 8 | 5 |
| Aciertos por primera alternativa de longitud máxima | 8 | 5 |
| Ratio correcta/distractor máximo de 1,5–<2 | 3 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 7 | 0 |
| Feedback correcto e incorrecto idénticos | 15 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 1 | 1 |
| Explicación individual de tres distractores | 0 | 20 |

La heurística de primera alternativa de longitud máxima pasa de **8/20 (40 %) a 5/20 (25 %)**. La de longitud mínima acierta **2/20 (10 %)** en la propuesta. Cinco correctas siguen siendo únicas más largas, con extensión ajustada al concepto y distractores comparables. Se completan siete feedback breves y se distinguen quince explicaciones antes idénticas para acierto/error. Desaparecen las tres alertas graduales de longitud. Estas señales no acreditan calidad pedagógica, aceptación o calibración; no se ajusta longitud con relleno ni se redistribuyen claves.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-026.json --render docs/GSI_REVISION_LOTE_026.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

Resultados ejecutados, todos los validadores del proyecto con código 0:

- Simulación CLI de 20 propuestas y reproducción exacta de la ficha; cero escritura en bancos activos.
- **17 pruebas editoriales**, **48 JSON**, **21 esquemas** y estructura de **1.964 preguntas** correctos.
- **19.251 controles de integridad**, sin errores técnicos; documentación y catálogo de referencias correctos (4 bloques, 57 temas, 37 Markdown del catálogo).
- Comprobación adicional de **59 enlaces locales** de ficha, informe y plan.
- Hash canónico, hashes de cada antes/después, procedencia, campos históricos y **60 explicaciones de distractores** coherentes. Dos formulaciones completas conservadas: IA 002 y 007.
- Simulación: únicamente **cinco manuales y quince IA** modificadas; cero oficiales. Todos los IDs y claves del banco se conservan.
- **117 archivos protegidos** idénticos a la toma de partida, incluidos bancos, registros, entregas 001–025, doce archivos de borradores y evidencia IA. El banco oficial coincide byte a byte con HEAD y la auditoría; manual e IA coinciden en contenido con HEAD, respetando sus finales de línea existentes.
- El recibo vacío, el del piloto y el registro histórico de revisión IA se rechazan como autorización de 026. El guard de regeneración rechaza sobrescribir el banco IA. No hay aceptaciones 002–026 y el historial mantiene únicamente el lote 001 aplicado.
- Las aceptaciones históricas de las quince IA conservan sus hashes de registro originales. Ninguna pasa a ser aceptación del nuevo contenido.
- Cola sin duplicados: **520 IDs preparados**, 20 aceptados y 500 propuestos; progreso reproducible. No quedan IDs B2-T02 sin propuesta en la cola, lo que no acredita aceptación editorial del tema. Las 128 incidencias IA originales mantienen 15 aceptadas y 113 pendientes.
- Informes derivados regenerados sin cambios semánticos frente a esta preparación; respecto a HEAD conservan solo la fecha de validación ya existente del 27-10-2026. `git diff --check` y espacios de los archivos nuevos correctos.

Una aserción auxiliar buscaba «no se afirma» donde el feedback decía «ni se afirma». Se corrigió la aserción literal y pasó, sin cambiar preguntas ni hashes para acomodarlos a la comprobación. Una lectura inicial ensayó un nombre de compilador inexistente; se localizó y leyó `build_gsi_authored_questions.py`, sin ejecutarlo. Los límites externos de fuentes y sus alternativas se documentan arriba.

No cambian código ni bancos activos. No se repite la suite HTTP completa para propuestas inactivas, ni se atribuye al lote una nueva ejecución del piloto. Entrenamiento, Simulacros, estadísticas y Refuerzo siguen consumiendo las versiones activas. Para revisar este hito, abrir la ficha y contrastar las 20 alternativas correctas y sus distractores con las fuentes antes de aprobar expresamente el hash.

## Entrega y continuidad

Creados: `content/question-reviews/lote-026.json`, `docs/GSI_REVISION_LOTE_026.md`, este informe y `logs/gsi-editorial-026-preparation.json`. Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los informes derivados de cobertura, validación final y revisión histórica se regeneran contrastando su contenido y la fecha existente del 27-10-2026.

El lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 500 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, de las que **1.242** todavía no tienen propuesta. Los lotes 002–026 reúnen 113 incidencias IA originales, otras 69 IA y 318 manuales. Las 128 incidencias originales conservan 15 aplicadas y 113 propuestas pendientes; preparar no equivale a resolver editorialmente.

Sin conversiones documentales ni conversiones nuevas pendientes. Originales, oficiales y entregas anteriores permanecen protegidos. No se crea commit, publicación o fusión de propuestas pendientes. El siguiente lote continúa por bloque y tema. El cierre exige decisión individual del propietario sobre los 1.762 IDs y comprobación de versiones activas, distinguiendo preparación, aceptación humana y calibración todavía no realizada.
