# GSI-EDITORIAL-026 — revisión propuesta

Preparado: 2026-10-27. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `55b84c44a31b518aee347afa92bec8a5b621283c8c009b31f4c58fbe0f8e44ad`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P17-097

Decisión: pending_review · acción: revise.

Motivo: Conservar condición necesaria de Coffman y clave D; comparar con medidas de prevención de interbloqueo en lugar de conceptos ajenos.

### Antes

¿Cuál es una condición clásica necesaria para deadlock?

- A. Cifrado de memoria.
- B. Alta disponibilidad.
- C. Multitenencia cloud.
- D. Espera circular. **(correcta)**

Explicación: Las condiciones de Coffman incluyen exclusión mutua, retención y espera, no apropiación y espera circular.

### Propuesta

¿Cuál es una condición clásica necesaria para deadlock?

- A. Adquirir los recursos siguiendo un orden global.
- B. Liberar lo retenido antes de pedir otro recurso.
- C. Permitir retirar por fuerza los recursos retenidos.
- D. Formar un ciclo de dependencias de espera. **(correcta)**

Explicación: La espera circular es una de las cuatro condiciones necesarias del modelo clásico de interbloqueo, junto a exclusión mutua, retención y espera y no apropiación. Hay una cadena cerrada de tareas que esperan recursos retenidos por otras de la cadena. Las otras alternativas describen formas de romper condiciones de ese modelo. Una espera temporal aislada no demuestra interbloqueo ni la pregunta afirma que cualquier ciclo arbitrario baste en cualquier modelo de recursos.

- Error A: Un orden global coherente de adquisición evita ciclos de espera por esos recursos. Es una técnica de prevención, no una condición necesaria del interbloqueo.
- Error B: Liberar antes de volver a pedir rompe retención y espera. Reduce la posibilidad del interbloqueo clásico en vez de definir una de sus condiciones.
- Error C: Poder recuperar forzosamente recursos contradice la no apropiación. Debe distinguirse apropiación de recursos y simple cambio de tarea en la CPU.

- [Arpaci-Dusseau: OSTEP, Common Concurrency Problems](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-bugs.pdf) · 32.3 Deadlock Bugs, Conditions for Deadlock y Prevention, pp. 7–8: cuatro condiciones y orden de adquisición · versión: Capítulo de autores, versión 1.20; solo modelo clásico de interbloqueo de recursos, sin universalizar ejemplos o estadísticas históricas · comprobado: 2026-10-27

Partida: `039b23a0471e637912ced4c1d43973e286ed837ead04faf403e8f31f5e546c6a` · propuesta: `d8ec7a2d1d7179afa0c7fc2814d4e724ec85371c19a4583bf7ed82e0137284dc`

## MAN-GSI-P17-106

Decisión: pending_review · acción: revise.

Motivo: Conservar page fault y clave B; microcaso recuperable que resuelve el solapamiento potencial con accesos inválidos, sin reducir todos los fallos a disco o error fatal.

### Antes

¿Qué es un page fault?

- A. Un defecto físico detectado en un módulo de memoria RAM que obliga a sustituir el componente de hardware.
- B. Un evento cuando una página necesaria no está actualmente mapeada/residente de la forma requerida y el SO debe atenderlo. **(correcta)**
- C. La ausencia de un bloque en la caché del procesador, que se resuelve consultando un nivel inferior de la jerarquía.
- D. Un acceso a una dirección no válida o no permitida que provoca una excepción y puede finalizar el proceso.

Explicación: Muchos page faults son parte normal de la memoria virtual; algunos implican traer datos desde almacenamiento.

### Propuesta

Una página de una región válida no está residente. Su acceso provoca una excepción, el SO la atiende y el proceso continúa. ¿Qué describe ese page fault?

- A. La CPU corrige un error físico del módulo de RAM y reintenta el acceso.
- B. El SO atiende la ausencia de la página y permite reanudar el acceso válido. **(correcta)**
- C. La caché de datos trae una línea desde RAM sin intervención del SO.
- D. El SO rechaza una dirección inválida y finaliza el proceso por ese motivo.

Explicación: El caso describe un page fault recuperable: la página pertenece a una región válida pero no está residente, y el SO atiende la excepción, actualiza el estado de memoria y permite reintentar el acceso. Un fallo de página no equivale por sí solo a avería de RAM, cache miss o error fatal. También puede haber excepciones por accesos inválidos o protección; no se universaliza el resultado del caso ni se afirma que todo page fault necesite leer disco.

- Error A: El escenario no aporta evidencia de un defecto físico. El fallo de página es un mecanismo de memoria virtual que requiere atención del SO.
- Error C: Un cache miss de datos se atiende dentro de la jerarquía de memoria. No explica la excepción por página no residente atendida por el SO.
- Error D: Una dirección inválida puede provocar rechazo, pero el caso especifica una región válida y reanudación. Ese desenlace no describe este fallo recuperable.

- [Arpaci-Dusseau: OSTEP, Beyond Physical Memory: Mechanisms](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys.pdf) · 21.2 The Present Bit, pp. 3–4; 21.3 The Page Fault, pp. 4–5; 21.5 Page Fault Control Flow, pp. 6–7: acceso válido no residente, atención del SO y diferencia con TLB miss · versión: Capítulo de autores, versión 1.10; modelo didáctico de paginación, sin afirmar que todo fallo exige disco o es fatal · comprobado: 2026-10-27
- [Linux Kernel: Kernel level exception handling](https://docs.kernel.org/arch/x86/exception-tables.html) · Introducción y How does this work?: excepción page fault, dirección no accesible, ausencia de página o protección y tratamiento · versión: Documento explicativo x86 con ejemplos históricos; solo distinción de causas y tratamiento, no código operativo, direcciones o API históricas · comprobado: 2026-10-27

Partida: `469bce08f88d3bd1a2fb008fe2f7a808ddc1bf34bfe78ffc52ce9f7fdd882bba` · propuesta: `2dc4c7137e09660677e8b471b355401782445fd1751aefcea7458707534f8038`

## MAN-GSI-P17-112

Decisión: pending_review · acción: revise.

Motivo: Conservar driver de dispositivo y clave D; distinguirlo de firmware, planificador y optimizador, con límites de pilas y modo de ejecución.

### Antes

¿Qué es un driver?

- A. Firmware grabado necesariamente en la placa del equipo que no puede actualizarse ni interactuar con componentes del sistema operativo.
- B. Una aplicación SaaS que administra dispositivos a través de Internet y reemplaza las interfaces locales ofrecidas por el fabricante.
- C. Un algoritmo de planificación que elige el siguiente proceso y controla cualquier periférico sin conocer sus registros ni protocolo.
- D. Software que permite al SO controlar un dispositivo concreto mediante una interfaz apropiada. **(correcta)**

Explicación: Driver y firmware no son sinónimos: el driver corre en el sistema y controla el dispositivo.

### Propuesta

En la gestión de E/S de un SO, ¿qué función caracteriza a un controlador de dispositivo?

- A. Ejecutar código en el microcontrolador del periférico para su operación interna.
- B. Seleccionar qué tarea obtiene CPU a partir de su estado y prioridad de ejecución.
- C. Decidir el plan de una consulta según el coste estimado de acceso a los datos.
- D. Permitir que el SO interactúe con el dispositivo mediante una interfaz adecuada. **(correcta)**

Explicación: Un controlador de dispositivo es software que participa en la comunicación y operaciones de E/S entre el SO y el dispositivo. Puede formar parte de una pila con otros controladores; un filtro no tiene por qué acceder directamente al hardware. Se distingue del firmware cargado o ejecutado en el dispositivo y de la planificación de CPU o consultas. No se exige que lo escriba el fabricante ni que todo controlador ejecute en modo kernel.

- Error A: Describe firmware que se ejecuta en el propio dispositivo. El driver puede ayudar a cargarlo, pero ambos componentes tienen responsabilidades distintas.
- Error B: Seleccionar tareas listas para CPU corresponde al planificador. No define la interfaz y tratamiento de E/S de un dispositivo.
- Error C: Elegir un plan de consulta corresponde al motor de base de datos. Usa servicios de E/S, pero no es por ello el controlador del dispositivo.

- [Microsoft: What is a driver?](https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/what-is-a-driver-) · Introducción, Expanding the definition y Software drivers: comunicación SO/dispositivo, pilas, filtros y controladores de software · versión: Alcance de controlador de dispositivo; no se exige fabricante propio, ejecución exclusiva en kernel o acceso directo de cada driver a hardware · comprobado: 2026-10-27
- [Linux Kernel: Firmware API, Introduction](https://docs.kernel.org/driver-api/firmware/introduction.html) · Introducción, lista de usos: firmware cargado a microcontroladores de dispositivos y datos para funcionamiento · versión: Solo diferencia driver/firmware y posibilidad de carga; no se afirma que firmware sea inmutable o residente desde fabricación · comprobado: 2026-10-27

Partida: `cb5bd5a3da3671d64eb81f1152076c88b1912fda3da1b8821a93ddbfd317346f` · propuesta: `d389dcb6ffc020911e0ae4a9806004dc6e4a5e55c382bc8bfa550270ef82a525`

## MAN-GSI-P17-139

Decisión: pending_review · acción: revise.

Motivo: Conservar APFS y clave C; alternativas de nombres comparables y ExFAT como confusión real de intercambio, con versión y fecha de fuente.

### Antes

¿Qué sistema de archivos moderno usa macOS principalmente?

- A. NTFS como formato nativo principal.
- B. ext4 como formato nativo principal.
- C. APFS. **(correcta)**
- D. FAT12 como formato moderno principal.

Explicación: APFS es el sistema de archivos moderno principal de Apple para macOS y otros dispositivos.

### Propuesta

Según la documentación de Apple consultada, ¿qué sistema de archivos es el predeterminado en los Mac actuales?

- A. NTFS.
- B. ext4.
- C. APFS. **(correcta)**
- D. ExFAT.

Explicación: Apple identifica APFS como sistema de archivos predeterminado de los Mac modernos en la guía consultada. Puede usarse en volúmenes de arranque y datos; estar optimizado para flash no significa exigir SSD. La respuesta identifica el formato principal, no afirma que macOS solo pueda utilizar ese formato o que deba reformatearse una unidad existente. Conviene distinguir el formato nativo habitual de los destinados a intercambio entre plataformas.

- Error A: NTFS no es el formato predeterminado que identifica Apple para los Mac. Que un formato pueda encontrarse en unidades externas no lo convierte en el principal.
- Error B: ext4 pertenece a otro entorno de sistemas de archivos y no es el predeterminado indicado por Apple. No se confunde compatibilidad de intercambio con formato principal.
- Error D: La guía presenta ExFAT como formato compatible con Windows para intercambio. No lo identifica como sistema predeterminado del Mac.

- [Apple: File system formats available in Disk Utility on Mac](https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/mac) · File system formats; Apple File System (APFS): formato predeterminado en Mac modernos y distinción FAT/ExFAT · versión: Guía consultada con selector macOS 27; sin exigir SSD, exclusividad de formato o reformateo de unidades existentes · comprobado: 2026-10-27

Partida: `90b8c39aca260304c8871c74d236e181d0e106f2cdd35d5e0529c091fb33d15c` · propuesta: `a1d494e54f33c791c75498ff6a43477e66cd4f27fcf93ffce43057c5bdeca11f`

## MAN-GSI-P17-149

Decisión: pending_review · acción: revise.

Motivo: Conservar parcheo y ciclo de soporte y clave A; distractores sobre criterios insuficientes de gestión, sin prometer compatibilidad universal.

### Antes

¿Por qué son importantes las actualizaciones del sistema móvil?

- A. Corrigen vulnerabilidades y mejoran seguridad/compatibilidad; la gestión debe controlar ciclo de soporte. **(correcta)**
- B. Porque borran siempre los datos.
- C. Porque sustituyen la necesidad de autenticación.
- D. Porque eliminan cualquier dependencia de aplicaciones.

Explicación: La capacidad de parcheo y ciclo de soporte es un criterio de gestión de flota.

### Propuesta

¿Por qué son importantes las actualizaciones del sistema móvil?

- A. Corregir vulnerabilidades y mantener compatibilidad dentro del soporte previsto. **(correcta)**
- B. Priorizar novedades de interfaz y diferir parches hasta renovar el equipo.
- C. Uniformar números de versión sin comprobar el nivel de parches instalado.
- D. Validar una actualización y omitir el seguimiento posterior del soporte.

Explicación: Las actualizaciones del sistema móvil distribuyen correcciones de seguridad y otros cambios que afectan a su funcionamiento y compatibilidad. La gestión de flota debe comprobar nivel de parche, disponibilidad y ciclo de soporte del fabricante y modelo, y validar el efecto en las aplicaciones. Un número de versión uniforme no prueba igual protección. No se presupone que cada actualización sea compatible con toda app ni que un plazo de soporte concreto se aplique a cualquier móvil.

- Error B: Las novedades visibles no sustituyen correcciones de vulnerabilidades. Aplazarlas hasta cambiar hardware puede prolongar una exposición evitable.
- Error C: La versión comercial no resume todos los parches o componentes. Deben comprobarse el nivel de actualización y el soporte efectivos.
- Error D: Una validación puntual no cubre vulnerabilidades futuras o fin de soporte. El seguimiento del ciclo de vida es continuo.

- [AOSP: Android Security Bulletins](https://source.android.com/docs/security/bulletin/asb-overview) · Introducción y Sources: actualizaciones y correcciones de AOSP, kernel y fabricantes · versión: Página consultada 27-10-2026; no se universaliza calendario, nivel de parche o plazo de soporte de un modelo a toda flota móvil · comprobado: 2026-10-27
- [Google Pixel Help: Learn when you will get software updates on Google Pixel phones](https://support.google.com/pixelphone/answer/4457705?hl=en) · Introducción, About Pixel Drops y How long you will get Pixel updates: componentes, despliegue y duración según dispositivo · versión: Solo ejemplo de seguimiento por fabricante/modelo; no se trasladan listas de dispositivos, fechas o número de años a otros móviles · comprobado: 2026-10-27

Partida: `48375e8515c2f575ce9380f1d7043f2b403424a92caf81c3005b6b4d35a32ffd` · propuesta: `e052814f06904fa43519dd6dea69c2a7a477e8fd6658c8bddfe44a3897fda8dd`

## AI-GSI-B2-T03-003

Decisión: pending_review · acción: revise.

Motivo: Conservar lenguaje frente a implementación y clave B; afirmaciones comparables sobre traducción, bytecode y ejecución sin clasificación rígida.

### Antes

¿Qué afirmación evita confundir lenguajes e implementaciones?

- A. Todo compilador genera necesariamente código máquina
- B. Un lenguaje puede disponer de implementaciones con distintas estrategias de ejecución **(correcta)**
- C. Usar bytecode excluye cualquier compilación posterior
- D. Cada lenguaje es por definición exclusivamente interpretado o exclusivamente nativo

Explicación: Compilación e interpretación no son categorías rígidas del lenguaje; pueden combinarse en una implementación.

### Propuesta

¿Qué afirmación evita confundir lenguajes e implementaciones?

- A. Compilar significa generar instrucciones nativas sin representación intermedia.
- B. Un lenguaje puede tener implementaciones con estrategias de ejecución distintas. **(correcta)**
- C. Usar bytecode hace incompatibles JIT y AOT con las implementaciones del lenguaje.
- D. Interpretar exige releer texto fuente y excluye ejecutar código intermedio.

Explicación: El lenguaje define construcciones y semántica, mientras una implementación decide cómo traducir y ejecutar programas respetándolas. Puede compilar a una representación intermedia, interpretarla o generar código nativo antes o durante la ejecución. JVM deja margen a sus implementaciones; CPython documenta compilación a bytecode y .NET ofrece rutas JIT y AOT. Por eso la etiqueta compilado o interpretado, sin precisar implementación y fase, puede simplificar en exceso.

- Error A: Compilar puede producir bytecode u otra representación. La generación directa de instrucciones nativas es una modalidad, no la definición completa de compilación.
- Error C: El código intermedio puede servir de entrada a compilación nativa posterior, anticipada o durante ejecución. Bytecode no excluye esas rutas.
- Error D: Un intérprete puede ejecutar una representación ya preparada. La interpretación no obliga a volver al texto fuente en cada paso.

- [Python: Glossary](https://docs.python.org/3.14/glossary.html) · Entradas bytecode e interpreted: compilación a representación intermedia y ejecución por intérprete · versión: Documentación Python 3.14.10 leída; bytecode propio de implementación/versión, sin equiparar interpretado con ausencia de compilación o recomendar herramientas concretas · comprobado: 2026-10-27
- [Oracle: Java Virtual Machine Specification, Chapter 2](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-2.html) · Introducción del capítulo y 2.1 The class File Format: máquina abstracta, formato class y libertad de implementación · versión: Java SE 25; no se afirma obligatoriedad de JIT, algoritmo de GC concreto o portabilidad automática de dependencias nativas · comprobado: 2026-10-27
- [Microsoft: Native AOT deployment](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción: compilación IL a nativo al publicar y ausencia de compilador JIT durante ejecución de ese despliegue · versión: Ejemplo Native AOT .NET; se usa el momento de compilación, sin prometer rendimiento universal, soporte de toda biblioteca o ausencia de runtime de apoyo · comprobado: 2026-10-27

Partida: `9c47df1b008564e1aff0fd2c63b3fa32bafe161332aec88e7408fd1ba9d1d008` · propuesta: `8a54cffb603410e39805dbd2f37e292ad12a6393bc17b5e4cacac0c540426648`

## AI-GSI-B2-T03-004

Decisión: pending_review · acción: revise.

Motivo: Conservar tipado dinámico y clave B; precisar objetos, operaciones y herramientas estáticas sin confundir dinámico con sin tipos.

### Antes

¿Qué significa tipado dinámico?

- A. Que no pueden producirse errores de tipo
- B. Que las comprobaciones de tipos se realizan principalmente en ejecución **(correcta)**
- C. Que el lenguaje carece de tipos
- D. Que todos los valores son cadenas

Explicación: Dinámico no significa sin tipos: cambia el momento y mecanismo de comprobación.

### Propuesta

¿Qué significa tipado dinámico?

- A. Que la compilación fija y verifica por completo los tipos de todas las operaciones.
- B. Que la compatibilidad de tipos de las operaciones se comprueba durante ejecución. **(correcta)**
- C. Que los valores pierden su tipo al asignarlos a nombres sin declaración previa.
- D. Que las anotaciones transforman automáticamente los valores al tipo indicado.

Explicación: El tipado dinámico comprueba en ejecución si los valores admiten las operaciones aplicadas. Los valores siguen teniendo tipos: en Python, el tipo de un objeto determina sus operaciones, y reasignar un nombre no cambia por ello el tipo del objeto anterior. Pueden utilizarse herramientas de análisis estático adicionales; eso no elimina el modelo dinámico. Las anotaciones de Python no fuerzan por sí mismas comprobaciones o conversiones en el runtime.

- Error A: Presenta una comprobación completa previa como definición del modelo. En tipado dinámico, la compatibilidad de operaciones depende de los valores encontrados al ejecutar.
- Error C: Ausencia de declaración de un nombre no implica ausencia de tipo en el valor. Confunde asociación de nombres y objetos con eliminación de tipos.
- Error D: Una anotación expresa información para herramientas o bibliotecas. En Python no convierte automáticamente un valor ni fuerza la validación del runtime.

- [Python: Data model](https://docs.python.org/3.14/reference/datamodel.html) · 3.1 Objects, values and types: tipo de objetos, operaciones admitidas, valores y mutabilidad · versión: Documentación Python 3.14.10; ejemplo de tipos asociados a objetos, sin afirmar que rebinding cambie el tipo del mismo objeto o que dinámico signifique sin tipos · comprobado: 2026-10-27
- [Python: typing, Support for type hints](https://docs.python.org/3.14/library/typing.html) · Nota inicial: anotaciones no impuestas por runtime, uso por herramientas; Nominal vs structural subtyping, referencia a código dinámicamente tipado · versión: Documentación Python 3.14.10; admite comprobación estática adicional, sin convertir anotaciones en conversión o validación obligatoria en ejecución · comprobado: 2026-10-27

Partida: `7ca3f985f2b0ea79e388937419016b1180e28fde99f191ed3eb6ae5d8828530b` · propuesta: `7be6d8c2e02cebdb76c41e79e35d9755032c3ef9c7f895ec941d47301601c9f0`

## AI-GSI-B2-T03-006

Decisión: pending_review · acción: revise.

Motivo: Conservar ejemplo imperativo y clave B; cuatro estilos próximos y explicación de coexistencia en lenguajes multiparadigma.

### Antes

Un algoritmo describe asignaciones, bucles y cambios de estado paso a paso. ¿Qué paradigma refleja?

- A. Funcional puro necesariamente
- B. Imperativo **(correcta)**
- C. Lógico basado exclusivamente en hechos
- D. Declarativo sin especificar pasos

Explicación: El paradigma imperativo expresa cómo modificar el estado mediante instrucciones.

### Propuesta

Un algoritmo describe asignaciones, bucles y cambios de estado paso a paso. ¿Qué paradigma refleja?

- A. Funcional, por composición de expresiones sin asignaciones.
- B. Imperativo, mediante instrucciones que actualizan el estado. **(correcta)**
- C. Lógico, mediante resolución de hechos y reglas declarados.
- D. Declarativo, mediante descripción del resultado sin detallar los pasos.

Explicación: La secuencia explícita de asignaciones, bucles y cambios de estado caracteriza el estilo imperativo: indica cómo avanzar hacia el resultado. Es un rasgo del fragmento descrito, no una clasificación exclusiva de todo el lenguaje. Un programa orientado a objetos puede contener código imperativo y un lenguaje multiparadigma admitir otros estilos. Se distingue la descripción de pasos y mutaciones de una formulación del resultado o de relaciones lógicas.

- Error A: El rasgo descrito es control explícito de pasos y mutaciones. Se evalúa el estilo del fragmento, no si una función completa podría carecer de efectos externos observables.
- Error C: La formulación lógica parte de hechos y reglas que un motor resuelve. No es la secuencia explícita de asignaciones y bucles descrita.
- Error D: Describir el resultado y delegar el procedimiento es el rasgo declarativo. El caso expone precisamente los pasos y cambios de estado.

- [Microsoft: Functional programming vs. imperative programming](https://learn.microsoft.com/en-us/dotnet/standard/linq/functional-vs-imperative-programming) · Functional programming vs. imperative programming: pasos, estado y tabla de control de flujo · versión: Comparación conceptual en LINQ to XML; se usan rasgos de estilo, sin clasificar rígidamente todo lenguaje OO como exclusivamente imperativo · comprobado: 2026-10-27
- [Blackburn, Bos y Striegnitz: Learn Prolog Now!, 1.1 Some Simple Examples](https://lpn.swi-prolog.org/lpnpage.php?pageid=lpn-htmlse1&pagetype=html) · 1.1, introducción y Knowledge Base 1/2: hechos, reglas, consultas y base de conocimiento · versión: Texto de los autores alojado en SWI-Prolog; solo fundamentos de programación lógica, sin adoptar sintaxis de respuestas, eficiencia o compatibilidad de ejemplos históricos · comprobado: 2026-10-27

Partida: `37daedb465c4e92ef4bec496429fd2111ecfa23954cf393e0660412432e75865` · propuesta: `52fcd73255dc23763e558f99351e4a4d83c1e5255377318a1cb3314520353bfe`

## AI-GSI-B2-T03-010

Decisión: pending_review · acción: revise.

Motivo: Conservar inmutabilidad y razonamiento concurrente y clave D; separar menor coordinación, planificación y costes.

### Antes

¿Por qué la inmutabilidad facilita el razonamiento concurrente?

- A. Convierte todos los algoritmos en constantes
- B. Garantiza que toda operación sea paralela
- C. Elimina cualquier coste de memoria
- D. Reduce los cambios de estado compartido que deben coordinarse **(correcta)**

Explicación: Reducir mutabilidad simplifica razonamiento y pruebas; no garantiza paralelismo ni elimina costes.

### Propuesta

¿Por qué la inmutabilidad facilita el razonamiento concurrente?

- A. Fija el orden de ejecución entre todos los hilos del programa.
- B. Convierte llamadas independientes en ejecución física simultánea.
- C. Evita asignar memoria cuando se crea cada nuevo valor de datos.
- D. Reduce cambios compartidos que necesitan coordinación entre tareas. **(correcta)**

Explicación: Si el estado compartido relevante no puede modificarse, desaparece parte de la coordinación necesaria para impedir interferencias entre lecturas y escrituras de ese estado. La inmutabilidad facilita el razonamiento y las pruebas, pero no programa tareas, impone un orden global ni garantiza paralelismo. También puede requerir crear nuevos valores. Debe distinguirse el objeto inmutable de una referencia no reasignable que apunta a un objeto todavía mutable.

- Error A: La ausencia de mutaciones no decide qué hilo ejecuta primero. El orden y las dependencias de tareas requieren mecanismos o diseño adicionales.
- Error B: Poder razonar con menos estado mutable no obliga al runtime a ejecutar simultáneamente. La disponibilidad de recursos y planificación sigue importando.
- Error C: Crear valores nuevos puede consumir memoria y trabajo de asignación. Inmutable no equivale a gratuito ni elimina el análisis de costes.

- [Oracle Java Tutorials: Immutable Objects](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html) · Immutable Objects: estado no modificable tras construcción y reducción de interferencia de hilos · versión: Tutorial escrito para JDK 8; solo concepto de inmutabilidad, sin prometer paralelismo automático o coste de memoria nulo · comprobado: 2026-10-27

Partida: `98781f208bcf8e102bfbeb6113a08226836f13a41dc0e0a15ab5968f31a95e71` · propuesta: `317ccd8977d14156ba67bcccacd4964cbc0aedca74f6956487e8b4c61da1374d`

## AI-GSI-B2-T03-015

Decisión: pending_review · acción: revise.

Motivo: Conservar backpressure y clave B; microcaso productor rápido/consumidor lento que compara regulación y soluciones parciales.

### Antes

En un flujo reactivo, ¿para qué sirve regular productores y consumidores mediante backpressure?

- A. Para impedir toda operación asíncrona
- B. Para evitar que el productor desborde la capacidad de consumo **(correcta)**
- C. Para convertir tipos dinámicos en estáticos
- D. Para cifrar automáticamente todos los eventos

Explicación: Backpressure regula el flujo entre producción y consumo, no el tipado ni el cifrado.

### Propuesta

Un productor de eventos envía más rápido de lo que consume el receptor y la cola crece. ¿Qué aporta regular el flujo mediante backpressure?

- A. Aumentar el búfer sin límite y posponer la coordinación del ritmo.
- B. Ajustar el envío a la demanda o capacidad comunicada por el consumidor. **(correcta)**
- C. Bloquear el hilo consumidor para que el productor termine primero.
- D. Reordenar los eventos por prioridad sin limitar la cantidad enviada.

Explicación: Backpressure coordina el flujo con la demanda o capacidad de consumo para que una fuente rápida no obligue al receptor a acumular datos sin límite. Reactive Streams exige presión de retorno no bloqueante en fronteras asíncronas. No significa detener un hilo por espera ni garantiza que un consumidor se vuelva más rápido. La estrategia concreta de adaptación, almacenamiento o tratamiento de exceso depende del sistema y del contrato del flujo.

- Error A: Un búfer ilimitado traslada el desfase de ritmo a consumo de memoria. No regula el intercambio según la capacidad del receptor.
- Error C: Bloquear al consumidor reduce su progreso y no comunica demanda útil. Backpressure no bloqueante permite coordinar sin esa espera de hilo.
- Error D: Priorizar puede decidir qué procesar antes, pero no limita por sí mismo el volumen admitido. No resuelve el desequilibrio sostenido de tasas.

- [Reactive Streams: asynchronous stream processing with non-blocking back pressure](https://www.reactive-streams.org/) · The Problem y Scope: fuente rápida, capacidad del destino y colas acotadas mediante backpressure · versión: Página primaria de la iniciativa; no se atribuye mecanismo universal de transporte ni se confunde presión de retorno no bloqueante con detener un hilo · comprobado: 2026-10-27

Partida: `ce302b0a9ed413fc5c0a373204de32d096d16185d689b947d9cbb832bf050a2f` · propuesta: `17b07351867861798c2312b34c8025580aa8464e9c034f187bf80db8dbfdfe88`

## AI-GSI-B2-T03-016

Decisión: pending_review · acción: revise.

Motivo: Conservar concurrencia sin paralelismo y clave A; acotar procesador lógico para evitar ambigüedad de SMT en un núcleo físico.

### Antes

Varias tareas progresan de forma solapada en un único núcleo. ¿Qué puede afirmarse?

- A. Existe concurrencia sin que necesariamente haya paralelismo **(correcta)**
- B. Existe siempre ejecución física simultánea de todas ellas
- C. No existe concurrencia si hay un solo núcleo
- D. Concurrencia y paralelismo son sinónimos exactos

Explicación: Concurrencia es progreso solapado; paralelismo implica ejecución realmente simultánea.

### Propuesta

Varias tareas alternan sus turnos y progresan de forma entrelazada en un único procesador lógico. ¿Qué distinción ilustra esta planificación?

- A. Concurrencia sin exigir ejecución simultánea de las tareas. **(correcta)**
- B. Paralelismo de tareas por el mero hecho de alternar sus turnos.
- C. Finalización completa de cada tarea antes de comenzar la siguiente.
- D. Necesidad de varios procesadores para permitir progreso entrelazado.

Explicación: La concurrencia permite progreso entrelazado de varias tareas. Un único contexto de ejecución puede alternarlas mediante planificación sin que sus instrucciones se ejecuten simultáneamente en ese contexto. Paralelismo de tareas exige simultaneidad efectiva. El caso se acota a un procesador lógico para no confundir número de núcleos físicos con SMT u otros recursos; tampoco niega trabajo paralelo en otros dispositivos.

- Error B: Alternar turnos cambia qué tarea ejecuta; no demuestra simultaneidad de sus instrucciones. Esa es la diferencia que el caso pretende distinguir.
- Error C: En el caso las tareas se intercalan antes de finalizar. Ejecutarlas completas una tras otra sería otra organización, sin ese progreso entrelazado.
- Error D: El reparto temporal de un solo contexto permite concurrencia. Varios procesadores pueden permitir paralelismo, pero no son requisito de entrelazado.

- [Oracle Java Tutorials: Processes and Threads](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html) · Introducción: concurrencia con un único contexto de ejecución y reparto temporal entre procesos/hilos · versión: Tutorial escrito para JDK 8; caso acotado a un procesador lógico, sin negar SMT, paralelismo interno o actividad de otros dispositivos · comprobado: 2026-10-27

Partida: `5a91c0b5c826bf56b9d72971f1792b8741387bee4f5b5e65b770209be6d1370f` · propuesta: `90100af4a66a882b4ce772e6c0147d221d6df42a6278ce571aed4fb19a064e03`

## AI-GSI-B2-T03-017

Decisión: pending_review · acción: revise.

Motivo: Conservar fugas lógicas con GC y clave B; microcaso de lista alcanzable que retiene objetos ya innecesarios, sin recetas de GC forzado.

### Antes

¿Qué riesgo puede persistir con recolector de basura?

- A. Necesidad universal de liberar manualmente cada objeto
- B. Fugas lógicas por referencias que siguen retenidas **(correcta)**
- C. Imposibilidad de agotar la memoria
- D. Desaparición de toda presión de memoria

Explicación: El GC reduce gestión manual, pero no elimina retenciones lógicas ni presión de memoria.

### Propuesta

Una aplicación con recolector trazador guarda en una lista todavía accesible objetos que ya no necesita. La memoria sigue creciendo. ¿Qué riesgo ilustra?

- A. Ausencia de liberación manual de cada objeto en la memoria gestionada.
- B. Retención de objetos que siguen siendo alcanzables mediante referencias. **(correcta)**
- C. Fragmentación que el GC resolvería eliminando objetos todavía alcanzables.
- D. Falta de un GC forzado que anule las referencias conservadas en la lista.

Explicación: Un recolector trazador conserva los objetos alcanzables desde raíces y referencias vivas. Si la aplicación mantiene en una lista accesible objetos que ya no necesita para su función, puede producir una retención lógica y crecer hasta agotar recursos. El recolector no conoce esa intención de negocio ni borra referencias válidas para adivinarla. Debe corregirse la política de retención; aumentar la frecuencia de GC no vuelve inalcanzables esos objetos.

- Error A: La gestión automática no exige liberar manualmente cada objeto gestionado. El problema del caso son las referencias que lo mantienen vivo.
- Error C: La compactación puede reorganizar memoria, pero no autoriza descartar un objeto alcanzable. Fragmentación y retención por referencias son problemas distintos.
- Error D: Forzar una colección no obliga a invalidar referencias de la aplicación. Mientras la lista siga alcanzable, sus elementos pueden seguir retenidos.

- [Microsoft: Fundamentals of garbage collection](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals) · Memory allocation: raíces de la aplicación y grafo de objetos alcanzables; Fundamentals of memory: posible agotamiento · versión: Ejemplo GC trazador CLR; no se adoptan tamaños, generaciones o detalles históricos del heap como regla de todo runtime ni se equipara GC con cierre de recursos externos · comprobado: 2026-10-27

Partida: `ba9bc9b530c0dd3e0c79ac1333325154dd6a8f8b2347332fbb00acf35c0d333e` · propuesta: `750aeb7051042232516f1cdf33b55acba3233d30d6a204c76f4524510c454bb3`

## AI-GSI-B2-T03-001

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación JIT y clave C; eliminar duplicidad entre AOT y compilación exclusivamente previa, comparando técnicas de ejecución.

### Antes

Un runtime compila partes del programa mientras se está ejecutando. ¿Qué técnica utiliza?

- A. Tipado estático como mecanismo de ejecución
- B. AOT
- C. JIT **(correcta)**
- D. Compilación nativa exclusivamente previa

Explicación: JIT compila durante la ejecución; AOT lo hace anticipadamente. Tipado y ejecución son dimensiones diferentes.

### Propuesta

Un runtime traduce partes del programa a código nativo mientras este se ejecuta. ¿Qué técnica utiliza?

- A. Enlazado estático de los módulos del programa.
- B. Compilación AOT anterior a la ejecución del programa.
- C. Compilación JIT durante la ejecución del programa. **(correcta)**
- D. Interpretación del código intermedio sin generar código nativo.

Explicación: JIT traduce a código nativo durante la ejecución, normalmente cuando se necesita una unidad de código. La ruta CLR documentada convierte CIL a instrucciones de la arquitectura de destino en ese momento. Se distingue de AOT por el momento de compilación, de interpretación por la traducción nativa y de enlazado por la tarea realizada. La pregunta no presupone que todo runtime deba usar JIT ni que deba recompilar cada llamada.

- Error A: Enlazar reúne o resuelve referencias entre componentes. No define la traducción a instrucciones nativas que ocurre mientras ejecuta el caso.
- Error B: AOT realiza la traducción anticipadamente. El escenario sitúa la generación nativa durante la ejecución y por eso corresponde a otra técnica.
- Error D: Interpretar ejecuta una representación sin esa generación nativa como paso descrito. El caso especifica compilación, no solo interpretación.

- [Microsoft: Managed execution process](https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process) · Compile to CIL; Compile CIL to native code; Compilation by the JIT compiler: representación intermedia y compilación durante ejecución · versión: Solo ruta CLR/CIL/JIT como ejemplo, sin tratar NGen o verificación histórica como receta actual ni negar otras modalidades de .NET · comprobado: 2026-10-27
- [Microsoft: Native AOT deployment](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción: compilación IL a nativo al publicar y ausencia de compilador JIT durante ejecución de ese despliegue · versión: Ejemplo Native AOT .NET; se usa el momento de compilación, sin prometer rendimiento universal, soporte de toda biblioteca o ausencia de runtime de apoyo · comprobado: 2026-10-27

Partida: `25f96b4debe0eab06859db073e139f660394c6cb6c69cd6213a7ea713cb7db00` · propuesta: `534a6473f13b7c9c0eed478bde36e64d3663d526edffa93421dc765aa818b639`

## AI-GSI-B2-T03-002

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y cuatro alternativas de AOT y clave D; completar explicaciones sin reescritura innecesaria.

### Antes

Un programa se transforma a código nativo antes de arrancar. ¿Qué término describe esa anticipación?

- A. JIT
- B. Interpretación pura
- C. Recolección de basura
- D. AOT **(correcta)**

Explicación: AOT compila antes de ejecutar; JIT lo hace durante la ejecución y el recolector gestiona memoria.

### Propuesta

Un programa se transforma a código nativo antes de arrancar. ¿Qué término describe esa anticipación?

- A. JIT
- B. Interpretación pura
- C. Recolección de basura
- D. AOT **(correcta)**

Explicación: AOT significa compilación anticipada: la traducción a código nativo del caso se realiza antes de ejecutar el programa. Native AOT de .NET es un ejemplo al publicar. El término describe el momento de traducción y no obliga a que cualquier dependencia desaparezca o a que el programa carezca de servicios de runtime. JIT, interpretación y recolección de basura atienden operaciones o momentos distintos.

- Error A: JIT sitúa la generación de código durante la ejecución. No describe la anticipación expresamente indicada en el escenario.
- Error B: La interpretación pura ejecuta una representación sin la traducción nativa previa indicada. No es el mecanismo descrito.
- Error C: La recolección de basura recupera memoria de objetos según el modelo del runtime. No identifica cuándo se compila a instrucciones nativas.

- [Microsoft: Native AOT deployment](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) · Introducción: compilación IL a nativo al publicar y ausencia de compilador JIT durante ejecución de ese despliegue · versión: Ejemplo Native AOT .NET; se usa el momento de compilación, sin prometer rendimiento universal, soporte de toda biblioteca o ausencia de runtime de apoyo · comprobado: 2026-10-27

Partida: `fe0b7349db462d577297d0c153ff4ecaa3794dc6495e09e0f5a15569a6249c1e` · propuesta: `0518693ad0c7984199473194962b7cf9527705a33814eb64030ef4ca9a384746`

## AI-GSI-B2-T03-005

Decisión: pending_review · acción: revise.

Motivo: Conservar Java/.NET y clave C; delimitar respectivamente JVM/class y CIL para evitar alternativas también válidas por usar otro bytecode.

### Antes

Una plataforma compila a una representación intermedia que luego ejecuta un runtime. ¿Qué ejemplos ofrece el tema?

- A. Prolog como requisito exclusivo de compilación nativa
- B. C con compilación nativa como único modelo
- C. Java y .NET **(correcta)**
- D. SQL como formato de código máquina

Explicación: Java y .NET utilizan bytecode o lenguaje intermedio; compilar no significa necesariamente producir directamente código máquina.

### Propuesta

¿Qué pareja se asocia habitualmente, respectivamente, al formato class de la JVM y al lenguaje intermedio CIL?

- A. .NET y Java.
- B. Java y C nativo.
- C. Java y .NET. **(correcta)**
- D. C nativo y .NET.

Explicación: La pareja habitual es Java con representación para JVM en formato class y .NET con CIL como lenguaje intermedio del entorno CLI/CLR. Es compilación aunque el resultado de esa etapa no sean instrucciones de una CPU concreta. La ejecución posterior puede implicar técnicas diferentes. La formulación precisa los dos formatos para no convertir otros lenguajes con bytecode o runtimes en distractores falsamente incorrectos.

- Error A: La pareja invierte los entornos solicitados. CIL se asocia a .NET, mientras la primera representación pedida es la de JVM para Java.
- Error B: Java encaja en el primer lugar, pero la compilación nativa de C no identifica CIL y .NET en el segundo. No completa la pareja solicitada.
- Error D: La segunda plataforma encaja, pero C compilado nativamente no es la pareja habitual del formato class de JVM. Falla el primer término.

- [Oracle: Java Virtual Machine Specification, Chapter 2](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-2.html) · Introducción del capítulo y 2.1 The class File Format: máquina abstracta, formato class y libertad de implementación · versión: Java SE 25; no se afirma obligatoriedad de JIT, algoritmo de GC concreto o portabilidad automática de dependencias nativas · comprobado: 2026-10-27
- [Microsoft: Managed execution process](https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process) · Compile to CIL; Compile CIL to native code; Compilation by the JIT compiler: representación intermedia y compilación durante ejecución · versión: Solo ruta CLR/CIL/JIT como ejemplo, sin tratar NGen o verificación histórica como receta actual ni negar otras modalidades de .NET · comprobado: 2026-10-27

Partida: `7200f4d2acfd227e2ed7df08a3ed2d83bda97fed0ea5f64ed40d760ffc2749ae` · propuesta: `bc2d2751ce8b3a1976110a324fb73d8d93d161e414b713f45e0117f14e081728`

## AI-GSI-B2-T03-007

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas ya pertinentes y clave A; completar límites de la recomendación de composición frente a herencia profunda.

### Antes

¿Qué decisión suele reducir el acoplamiento frente a jerarquías de herencia profundas?

- A. Favorecer composición con responsabilidades claras **(correcta)**
- B. Concentrar todas las responsabilidades en una clase base
- C. Añadir más niveles de herencia sin revisar interfaces
- D. Compartir todo el estado como público

Explicación: La composición y las interfaces claras pueden reducir dependencias; usar objetos no garantiza por sí solo buen diseño.

### Propuesta

¿Qué decisión suele reducir el acoplamiento frente a jerarquías de herencia profundas?

- A. Favorecer composición con responsabilidades claras **(correcta)**
- B. Concentrar todas las responsabilidades en una clase base
- C. Añadir más niveles de herencia sin revisar interfaces
- D. Compartir todo el estado como público

Explicación: La composición con responsabilidades e interfaces claras puede sustituir dependencias rígidas de una jerarquía profunda por colaboración entre componentes. No elimina automáticamente todo acoplamiento: importan contratos y responsabilidades. La herencia sigue siendo adecuada para relaciones de especialización que la justifiquen; no se prohíbe por principio. La recomendación evita ampliar una clase base o exponer estado como respuesta automática a cada necesidad de reutilización.

- Error B: Una base que concentra responsabilidades obliga a derivados a depender de decisiones ajenas. Reutilizar código así puede aumentar el acoplamiento y dificultar cambios.
- Error C: Añadir niveles sin revisar contratos acumula dependencia de la jerarquía. No atiende el problema de responsabilidades e interfaces.
- Error D: El estado público permite que otros componentes dependan de la representación interna. Debilita encapsulación y dificulta cambiar esa representación.

- [C++ Core Guidelines: C.120](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#c120-use-class-hierarchies-to-represent-concepts-with-inherent-hierarchical-structure-only) · C.120, Reason: acoplamiento de herencia y preferencia por miembro/composición cuando expresa mejor la relación · versión: Documento vivo, cabecera 14-06-2026; recomendación contextual, no prohibición de herencia ni garantía de desacoplamiento por usar cualquier composición · comprobado: 2026-10-27

Partida: `5ab43a0b6111a53ffea567e17c458571d281effde1f1d11cdc8ee8650f1b0111` · propuesta: `94e3360da73987bf5046b4a0175dcbba0659723ee2d483a84ef59beaf460ec1a`

## AI-GSI-B2-T03-008

Decisión: pending_review · acción: revise.

Motivo: Conservar objeto como estado y comportamiento y clave A; comparar objeto, clase, interfaz y esquema sin exigir mutabilidad o campos propios.

### Antes

¿Qué caracteriza a un objeto en el enfoque descrito?

- A. Combina estado y comportamiento **(correcta)**
- B. Equivale siempre a una tabla relacional
- C. Debe carecer de toda interfaz
- D. Es únicamente una instrucción de salto

Explicación: La orientación a objetos organiza estado y comportamiento; su calidad depende de responsabilidades e interfaces.

### Propuesta

En el modelo conceptual de orientación a objetos, ¿qué caracteriza a un objeto?

- A. Una entidad que integra estado y comportamiento relacionados. **(correcta)**
- B. Una plantilla que define los miembros de futuras instancias.
- C. Un contrato de operaciones que no representa una instancia.
- D. Un esquema relacional que define tablas y relaciones de datos.

Explicación: En el modelo conceptual OO, un objeto reúne estado y comportamiento relacionado y se distingue de la clase que describe sus instancias. La encapsulación permite controlar el acceso mediante operaciones. El estado puede ser inmutable o incluso no requerir campos propios declarados; los métodos pueden heredarse. No se identifica un objeto con el texto de su clase, una interfaz aislada o el esquema de una base de datos.

- Error B: La plantilla de miembros describe una clase o tipo, no la entidad concreta que constituye una instancia. Debe distinguirse definición e instanciación.
- Error C: Un contrato de operaciones describe una interfaz. Un objeto puede satisfacerla, pero el contrato por sí solo no es esa entidad de ejecución.
- Error D: Un esquema relacional describe estructura de almacenamiento y relaciones. Puede mapearse a objetos, pero no define por ello su estado y comportamiento OO.

- [Oracle Java Tutorials: What Is an Object?](https://docs.oracle.com/javase/tutorial/java/concepts/object.html) · What Is an Object?: entidad software, estado, comportamiento y encapsulación · versión: Tutorial escrito para JDK 8; modelo conceptual OO, sin exigir estado mutable propio o negar objetos sin campos declarados · comprobado: 2026-10-27

Partida: `582df32d621252701853a1658e55fd5f92ba3d84b38382d1844018580475a552` · propuesta: `794f3329a82e287e83c9784098f710a1b2b1bf8bc12decffe91e80e025575bd5`

## AI-GSI-B2-T03-009

Decisión: pending_review · acción: revise.

Motivo: Conservar función pura y clave D; alternativas con forma paralela que distinguen dependencia externa y efectos observables.

### Antes

¿Cuál de estas funciones es pura según la definición del tema?

- A. La que lee siempre una variable global mutable
- B. La que actualiza un contador externo compartido
- C. La que modifica un fichero en cada llamada
- D. La que depende solo de sus entradas y no produce efectos laterales observables **(correcta)**

Explicación: Una función pura depende solo de entradas y carece de efectos observables; leer estado mutable o modificar el exterior rompe esa propiedad.

### Propuesta

¿Qué comportamiento caracteriza a una función pura?

- A. Devuelve un valor calculado con una variable global mutable.
- B. Devuelve un valor y modifica un contador externo compartido.
- C. Devuelve un valor y escribe un registro en un archivo externo.
- D. Calcula el resultado solo con sus entradas, sin efectos observables. **(correcta)**

Explicación: Una función pura depende de sus entradas y produce el mismo resultado con las mismas entradas, sin efectos laterales observables. Depender de un global mutable puede cambiar el resultado sin cambiar argumentos; modificar un contador o escribir un archivo altera el exterior. La pureza es distinta de brevedad, recursión o uso de funciones como argumentos. Puede haber trabajo o asignaciones internas sin que eso constituya por sí solo un efecto observable en este modelo.

- Error A: El resultado depende de estado mutable no pasado como argumento. Otra parte del programa puede alterarlo y cambiar el resultado con las mismas entradas.
- Error B: Actualizar el contador modifica estado externo observable. Devolver también un resultado no elimina ese efecto lateral.
- Error C: Escribir en un archivo es una interacción externa observable. Aunque el valor devuelto fuera determinista, esa escritura impide la pureza descrita.

- [Microsoft F#: Introduction to Functional Programming Concepts](https://learn.microsoft.com/en-us/dotnet/fsharp/tutorials/functional-programming-concepts) · Terminology, Purity y Pure functions: dependencia de argumentos y ausencia de efectos; ejemplos de global mutable y escritura de salida · versión: Página de F#; concepto de pureza observacional, sin tratar toda programación funcional o toda función de orden superior como necesariamente pura · comprobado: 2026-10-27

Partida: `c1237b2f743d567818764ebb3b0d0bb2063d3db81e870f7565718ed32581393e` · propuesta: `5c8b7fbf8549f1249895c18888c2da92b18f4aabb68ca0fdcba6d03132b289b3`

## AI-GSI-B2-T03-011

Decisión: pending_review · acción: revise.

Motivo: Conservar orden superior y clave A; preguntar qué se deduce para evitar que pureza, recursión o pereza coexistentes sean respuestas alternativas.

### Antes

Una función recibe otra función como argumento. ¿Qué concepto ilustra?

- A. Función de orden superior **(correcta)**
- B. Ausencia de tipado
- C. Herencia múltiple obligatoria
- D. Compilación AOT necesariamente

Explicación: Las funciones de orden superior trabajan con funciones como valores; no dependen de una estrategia concreta de compilación.

### Propuesta

Una función recibe otra función como argumento. ¿Qué propiedad se deduce de ese dato?

- A. Función de orden superior. **(correcta)**
- B. Función recursiva.
- C. Función pura.
- D. Función de evaluación perezosa.

Explicación: Recibir otra función como argumento basta para clasificarla como función de orden superior; también lo sería si devolviera una función. Tratar funciones como valores de primera clase hace posible esa forma de uso. La firma no demuestra que se llame a sí misma, que carezca de efectos o que difiera evaluación. Esas propiedades pueden coexistir, pero necesitan evidencia adicional y no se deducen del dato indicado.

- Error B: Recursión significa que la función se invoca a sí misma directa o indirectamente. Recibir otra función no implica esa llamada recursiva.
- Error C: La pureza exige depender de entradas y no producir efectos observables. Aceptar una función como argumento no garantiza ninguna de esas condiciones.
- Error D: La evaluación perezosa difiere un cálculo hasta necesitarlo. Recibir una función no especifica cuándo se la evalúa o invoca.

- [Microsoft: What is F#](https://learn.microsoft.com/en-us/dotnet/fsharp/what-is-fsharp) · Correctness with functions and pattern matching, párrafo final: funciones como valores, parámetros y resultados · versión: Actualización 13-10-2022; solo primera clase, sin adoptar promesas comerciales de rendimiento o ausencia de errores · comprobado: 2026-10-27
- [MDN: First-class function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function) · Returning a function, nota: higher-order cuando recibe o devuelve funciones · versión: Documentación de Mozilla consultada; solo definición, sin deducir pureza, recursión o evaluación perezosa de la firma · comprobado: 2026-10-27

Partida: `3a5d9c06ddb8912dc296c912764fa927b9d07160f69a7abf071bc75a6448a81e` · propuesta: `4d0caef18e0c74a96f161de2cac11002e2df039af7800796ad7bad0fa3dea956`

## AI-GSI-B2-T03-012

Decisión: pending_review · acción: revise.

Motivo: Conservar consulta declarativa y clave D; precisar rasgo y mecanismos próximos, sin negar extensiones procedimentales o imponer plan óptimo.

### Antes

Una consulta SQL expresa el conjunto deseado y el optimizador elige el plan. ¿Qué rasgo ilustra?

- A. Programación basada exclusivamente en interrupciones
- B. Descripción imperativa de cada lectura física
- C. Gestión manual de memoria
- D. Programación declarativa **(correcta)**

Explicación: SQL describe principalmente qué resultado se busca y delega parte del cómo en el motor.

### Propuesta

Una consulta SELECT ordinaria indica el conjunto deseado y el optimizador elige el plan, sin prescribir cada lectura física. ¿Qué rasgo ilustra?

- A. Programación orientada a objetos.
- B. Programación imperativa paso a paso.
- C. Resolución de hechos y reglas explícitos de Prolog.
- D. Programación declarativa de consultas. **(correcta)**

Explicación: La consulta expresa el resultado deseado y deja al motor elegir un plan para obtenerlo, por ejemplo tipos de escaneo o algoritmos de unión. Ese es el rasgo declarativo del caso. No implica ausencia de ejecución, optimización o costes, ni que todo SQL o lenguaje declarativo carezca de construcciones procedimentales. Se distingue la consulta ordinaria descrita de un algoritmo físico prescrito y de reglas explícitas de otro lenguaje.

- Error A: El escenario no organiza entidades en objetos con estado y comportamiento. Describe una consulta y la elección de su plan por el motor.
- Error B: La formulación no prescribe cada lectura física o cambio de estado. Esa descripción paso a paso sería el rasgo imperativo que aquí se delega.
- Error C: El caso presenta una consulta SQL ordinaria, no un programa de hechos y reglas explícitos de Prolog. Ambos pueden ser declarativos sin ser el mismo mecanismo.

- [PostgreSQL: EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html) · Description: plan generado por el planificador, elección de escaneos y algoritmos de unión · versión: Versión visible PostgreSQL 18; solo ejemplo de planificación, sin ejecutar EXPLAIN ANALYZE, recomendar planes o prometer plan físicamente óptimo · comprobado: 2026-10-27
- [Microsoft: Functional programming vs. imperative programming](https://learn.microsoft.com/en-us/dotnet/standard/linq/functional-vs-imperative-programming) · Functional programming vs. imperative programming: pasos, estado y tabla de control de flujo · versión: Comparación conceptual en LINQ to XML; se usan rasgos de estilo, sin clasificar rígidamente todo lenguaje OO como exclusivamente imperativo · comprobado: 2026-10-27
- [Blackburn, Bos y Striegnitz: Learn Prolog Now!, 1.1 Some Simple Examples](https://lpn.swi-prolog.org/lpnpage.php?pageid=lpn-htmlse1&pagetype=html) · 1.1, introducción y Knowledge Base 1/2: hechos, reglas, consultas y base de conocimiento · versión: Texto de los autores alojado en SWI-Prolog; solo fundamentos de programación lógica, sin adoptar sintaxis de respuestas, eficiencia o compatibilidad de ejemplos históricos · comprobado: 2026-10-27

Partida: `ccda3755515673506e93a28d3bc16f8c458ad179cbb1e470294837dd6b71fb33` · propuesta: `93f24f8b8a14003f6704b1f9ac701fb2875840eea6ee0f5816da703eee13ccbe`
