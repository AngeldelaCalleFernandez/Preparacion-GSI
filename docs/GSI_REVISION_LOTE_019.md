# GSI-EDITORIAL-019 — revisión propuesta

Preparado: 2026-10-27. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `65a45a0830d84d9f0fbcf689861c64bb6fb6dad7d25e02cc6fe91877eb607330`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P17-017

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas ya defendibles; desarrollar separación ISA/microarquitectura y excepciones con ejemplos primarios, sin convertir etiquetas en reglas de ciclos.

### Antes

¿Qué afirmación es correcta sobre RISC y CISC como conceptos arquitectónicos?

- A. RISC utiliza únicamente instrucciones simples de longitud fija y garantiza que cada una termine en un ciclo en cualquier diseño.
- B. CISC exige microcódigo, impide segmentación y ejecuta directamente instrucciones complejas sin descomposición interna.
- C. Son categorías mutuamente excluyentes: un procesador moderno no puede exponer un repertorio y traducirlo a operaciones internas diferentes.
- D. Son enfoques de diseño del repertorio y ejecución de instrucciones; los procesadores modernos pueden combinar técnicas internas de ambos enfoques. **(correcta)**

Explicación: Son categorías de arquitectura de instrucciones, no de almacenamiento o red.

### Propuesta

¿Qué afirmación es correcta sobre RISC y CISC como conceptos arquitectónicos?

- A. RISC utiliza únicamente instrucciones simples de longitud fija y garantiza que cada una termine en un ciclo en cualquier diseño.
- B. CISC exige microcódigo, impide segmentación y ejecuta directamente instrucciones complejas sin descomposición interna.
- C. Son categorías mutuamente excluyentes: un procesador moderno no puede exponer un repertorio y traducirlo a operaciones internas diferentes.
- D. Son enfoques de diseño del repertorio y ejecución de instrucciones; los procesadores modernos pueden combinar técnicas internas de ambos enfoques. **(correcta)**

Explicación: RISC y CISC describen enfoques históricos del repertorio de instrucciones y su diseño, pero una ISA no determina por sí sola la microarquitectura. Un procesador puede traducir instrucciones visibles a microoperaciones internas y emplear segmentación o ejecución fuera de orden. El ejemplo Intel documenta esa traducción; el manual histórico RISC-V separa ISA e implementación y admite codificación comprimida. Las etiquetas no garantizan un ciclo por instrucción ni una técnica interna exclusiva.

- Error A: Convierte tendencias de diseño en garantías universales. Una ISA de familia RISC puede tener extensiones de distintas longitudes, y la duración de instrucciones depende de implementación, dependencias y memoria.
- Error B: CISC no impide segmentar ni descomponer instrucciones. El ejemplo IA-32/Intel 64 usa pipeline, decodificadores y microoperaciones, con microcódigo para ciertos casos.
- Error C: Confunde repertorio visible e implementación. Que las instrucciones de la ISA se traduzcan a otras operaciones internas es compatible con conservar su comportamiento arquitectónico.

- [The RISC-V Instruction Set Manual, Volume I: Base User-Level ISA](https://docs.riscv.org/reference/isa/original/_attachments/riscv-unprivileged.pdf) · Secciones 1 y 2.2, pp. impresas 1 y 4 (PDF pp. 3 y 6): separación de ISA y microarquitectura, longitud base y extensión comprimida; ejemplo histórico, no norma RISC-V actual · versión: Versión 1.0, 13-05-2011; UCB/EECS-2011-62; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Intel: Optimizing Earlier Generations of Intel 64 and IA-32 Processor Architectures, Throughput, and Latency](https://cdrdv2-public.intel.com/821614/356477-Optimization-Reference-Manual-V2-050.pdf) · Sección 2.1.1.1 y tabla 2-1, pp. 2-3–2-4: instrucciones IA-32/Intel 64 decodificadas a microoperaciones, pipeline y MSROM; ejemplo Sandy Bridge · versión: Documento 356477-050US, abril 2024; describe generaciones anteriores, sin presentarse como manual de CPU vigente; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `7b8430397b20d3771833b3d040ca732ce594f212ff77209e86aeb536f538632f` · propuesta: `f2813c7730f1ae37599e2afccf9db060b7a88556d0249887e071d8ec148449ee`

## MAN-GSI-P17-019

Decisión: pending_review · acción: revise.

Motivo: Conservar diferencia capacidad/rendimiento y clave D; microcaso de dos almacenamientos para distinguir volumen, tiempo y tasa sin diagnosticar una causa no medida.

### Antes

¿Por qué no debe confundirse capacidad con rendimiento?

- A. Porque son exactamente la misma métrica.
- B. Porque la capacidad solo existe en sistemas móviles.
- C. Porque el rendimiento solo depende del tamaño del disco.
- D. Un sistema puede almacenar o admitir mucho volumen y, sin embargo, responder lentamente bajo carga. **(correcta)**

Explicación: Capacidad, throughput y latencia deben evaluarse por separado.

### Propuesta

Un almacenamiento admite más terabytes que otro, pero responde más lentamente con una carga de acceso comparable. ¿Qué conclusión es coherente?

- A. La capacidad en terabytes equivale a la tasa de operaciones por segundo bajo carga.
- B. La capacidad nominal determina la latencia, con independencia del patrón de acceso.
- C. El espacio libre permite deducir el throughput sin medir las operaciones completadas.
- D. La capacidad mide volumen; latencia y throughput describen el rendimiento de la carga. **(correcta)**

Explicación: Admitir más volumen no implica responder antes ni completar más operaciones por segundo. La capacidad en TB describe cuánto puede almacenarse; la latencia expresa duración de respuesta y el throughput trabajo completado por tiempo. Deben medirse con una carga y condiciones comparables. El caso no indica la causa de la diferencia: no basta para atribuirla a disco, CPU, red o grado de ocupación.

- Error A: TB es una unidad de volumen y operaciones por segundo es una tasa. El número de TB no se transforma directamente en throughput.
- Error B: La latencia depende de la carga, patrón de acceso y recursos, entre otros factores. La capacidad nominal no fija el tiempo de cada petición.
- Error C: El espacio disponible informa de ocupación, no de operaciones completadas por tiempo. Puede afectar al comportamiento, pero no sustituye la medición.

- [Microsoft Learn: Load testing for serving endpoints](https://learn.microsoft.com/en-us/azure/databricks/machine-learning/model-serving/what-is-load-test) · Load testing concepts and definitions, filas Latency, Client concurrency, Endpoint concurrency y Requests per second (RPS); se usan definiciones, no proporcionalidad universal entre métricas · versión: Documentación en línea; contexto de endpoint, sin convertir configuración concreta de Databricks en requisito general; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [SPEC Open Systems Group Policies and Procedures](https://www.spec.org/osg/policy/) · Secciones 2.7.4–2.7.7: resultados comparables/reproducibles, condiciones documentadas, alcance y representatividad · versión: V2.22, 19-08-2024 indicada en Recent Revisions; fundamentos de medición, no reglas específicas de una ejecución SPEC propia; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [IBM Cloud Docs: Block Storage capacity and performance](https://cloud.ibm.com/docs/vpc?topic=vpc-capacity-performance) · Capacity; How I/O size affects performance; How concurrency and queue depth affect performance: volumen, IOPS, throughput y tamaño de operación; se usan relaciones, no límites comerciales concretos · versión: Documentación en línea sin versión documental indicada; sin recomendación de perfil ni extrapolar cifras de producto; consulta real 27-10-2026 · comprobado: 2026-10-27

Partida: `1619bc55572840bcb907997df6c8222b669d80dcbf425df6a5576eaba329e0dc` · propuesta: `193346659b5556be11d29b535feab712204fbf24b2348f7052802a1cbcb72528`

## MAN-GSI-P17-020

Decisión: pending_review · acción: revise.

Motivo: Conservar caso matricial y clave B; sustituir cinta, ausencia de SO y un hilo por errores reales de selección basados en pico, memoria o recuento de núcleos.

### Antes

Para una carga de IA con gran cantidad de operaciones matriciales paralelas, ¿qué decisión es más razonable evaluar?

- A. Sustituir toda la RAM por almacenamiento en cinta.
- B. Usar aceleradores como GPU, comparando coste, memoria, software y rendimiento real de la carga. **(correcta)**
- C. Eliminar el sistema operativo.
- D. Forzar un único hilo para maximizar paralelismo.

Explicación: La selección de aceleradores debe ligarse al perfil de cálculo y a su ecosistema.

### Propuesta

Para una carga de IA con gran cantidad de operaciones matriciales paralelas, ¿qué decisión es más razonable evaluar?

- A. Elegir la GPU con mayor pico teórico, aunque la matriz no quepa en su memoria.
- B. Medir aceleradores con la carga real, considerando memoria, transferencias, coste y software. **(correcta)**
- C. Comparar GPU por capacidad de memoria, prescindiendo del coste de mover los datos.
- D. Elegir por número de núcleos, suponiendo el mismo rendimiento por núcleo en toda carga.

Explicación: Una carga matricial paralela puede beneficiarse de aceleradores, pero la decisión requiere medir el trabajo real y la solución completa. Memoria disponible, movimientos de datos, bibliotecas, precisión numérica y costes condicionan el resultado. El pico de cálculo o un recuento de núcleos no sustituyen la medida. El enunciado propone evaluar alternativas, sin garantizar que una GPU concreta supere siempre a CPU u otro acelerador.

- Error A: El pico teórico no comprueba capacidad ni coste de procesar la matriz. Existen estrategias por bloques, pero hay que evaluar su memoria y transferencias antes de elegir por el pico.
- Error C: La capacidad es necesaria para organizar los datos, pero ignorar movimientos entre host y dispositivo puede ocultar el coste dominante. Memoria y rendimiento no son la misma medida.
- Error D: Los núcleos de arquitecturas distintas no son unidades de rendimiento equivalentes. El número no recoge instrucciones, precisión, ancho de banda o eficiencia de esta carga.

- [NVIDIA CUDA C++ Best Practices Guide](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html) · Secciones 2.2 Assess/Parallelize/Optimize/Deploy, 4.1.1 Creating the Profile y 4.1.3 Understanding Scaling: carga realista, fracción paralelizable y transferencias · versión: Versión 13.4 consultada; alcance CUDA, sin recomendar compra o garantizar mejora para toda carga; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [SPEC Open Systems Group Policies and Procedures](https://www.spec.org/osg/policy/) · Secciones 2.7.4–2.7.7: resultados comparables/reproducibles, condiciones documentadas, alcance y representatividad · versión: V2.22, 19-08-2024 indicada en Recent Revisions; fundamentos de medición, no reglas específicas de una ejecución SPEC propia; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `58aa03d5dc33c095ff3d1ea6eb79ade53ac270acfd6bb411b9e6183e1b1b203a` · propuesta: `007a8c782e2495a0eb90250db7e80c85401ac1c742169d237727d9c97b1d29e0`

## MAN-GSI-P17-021

Decisión: pending_review · acción: revise.

Motivo: Conservar definición SISD y clave C; cuatro combinaciones simétricas de los ejes de Flynn, retirando la pista de caso típico general de MISD.

### Antes

Según Flynn, ¿qué caracteriza a SISD?

- A. Una instrucción y múltiples flujos de datos.
- B. Múltiples instrucciones y múltiples datos.
- C. Un flujo de instrucciones y un flujo de datos. **(correcta)**
- D. Múltiples instrucciones sobre un único flujo de datos como caso típico general.

Explicación: SISD representa el modelo secuencial clásico.

### Propuesta

Según Flynn, ¿qué caracteriza a SISD?

- A. Un flujo de instrucciones y varios flujos de datos.
- B. Varios flujos de instrucciones y varios flujos de datos.
- C. Un flujo de instrucciones y un flujo de datos. **(correcta)**
- D. Varios flujos de instrucciones y un flujo de datos.

Explicación: SISD combina un flujo de instrucciones con uno de datos en la taxonomía de Flynn. La clasificación se refiere a esos dos ejes en el nivel considerado, no al número de programas instalados ni a que toda máquina moderna carezca de paralelismo interno. Una organización mayor puede contener componentes con distintas clasificaciones. El carácter secuencial del modelo clásico no impone por sí solo una instrucción terminada por ciclo.

- Error A: Un flujo de instrucciones aplicado a varios flujos de datos corresponde a SIMD. Cambia el eje de datos respecto de SISD.
- Error B: Varios flujos de ambos tipos corresponden a MIMD. No es la combinación single/single solicitada.
- Error D: Varios flujos de instrucciones sobre un único flujo de datos corresponden a MISD. Su rareza práctica no altera la definición.

- [Cornell Virtual Workshop: Taxonomy of Parallel Computers](https://cvw.cac.cornell.edu/parallel/hpc/taxonomy-parallel-computers) · Tabla Instruction Stream / Data Stream y párrafos SISD, SIMD, MISD, MIMD y SPMD; combinación de niveles y diferencia arquitectura/programa · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [LLNL: Introduction to Parallel Computing Tutorial](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) · Flynn's Classical Taxonomy, apartado Single Instruction, Single Data (SISD) · versión: Versión 16-06-2026 declarada; material docente de fundamentos, sin extrapolar ejemplos históricos o tendencias a todos los equipos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `30f01e7c6b7e2cb2daffe9bca838af4e5a616706a361e98251a55296826f1297` · propuesta: `a5dc0be67b5c4d3581c17f9897c711daac536fe402cc3f899e936a7f4e3b5943`

## MAN-GSI-P17-022

Decisión: pending_review · acción: revise.

Motivo: Conservar concepto SIMD y clave D; comparar las cuatro combinaciones reales y explicar SPMD frente a arquitectura sin igualar toda GPU a SIMD puro.

### Antes

Según Flynn, ¿qué caracteriza a SIMD?

- A. Un único dato controla múltiples sistemas operativos.
- B. Múltiples instrucciones actúan siempre sobre un único dato.
- C. No existe paralelismo de datos.
- D. Una misma instrucción actúa sobre múltiples datos. **(correcta)**

Explicación: SIMD es típico de procesamiento vectorial y muchas cargas GPU.

### Propuesta

Según Flynn, ¿qué caracteriza a SIMD?

- A. Varios flujos de instrucciones actúan sobre varios flujos de datos.
- B. Varios flujos de instrucciones actúan sobre un único flujo de datos.
- C. Un único flujo de instrucciones actúa sobre un único flujo de datos.
- D. Una misma instrucción actúa sobre múltiples datos. **(correcta)**

Explicación: SIMD aplica un mismo flujo de instrucciones a varios elementos de datos, como en operaciones vectoriales. No significa ejecutar varios programas independientes ni exige que el sistema completo sea SIMD. Un procesador MIMD puede incorporar unidades SIMD; ejecutar el mismo programa en procesos independientes es SPMD y no basta para clasificarlo como SIMD. Se mantiene el nivel de abstracción de la taxonomía.

- Error A: Describe MIMD: múltiples flujos de instrucciones y datos. La coincidencia ocasional de instrucciones no transforma sus flujos independientes en SIMD.
- Error B: Describe MISD: varios flujos de instrucciones y uno de datos. Es la combinación inversa de los ejes de SIMD.
- Error C: Describe SISD, con un solo flujo de cada tipo. No expresa la operación sobre múltiples datos de SIMD.

- [Cornell Virtual Workshop: Taxonomy of Parallel Computers](https://cvw.cac.cornell.edu/parallel/hpc/taxonomy-parallel-computers) · Tabla Instruction Stream / Data Stream y párrafos SISD, SIMD, MISD, MIMD y SPMD; combinación de niveles y diferencia arquitectura/programa · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [LLNL: Introduction to Parallel Computing Tutorial](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) · Flynn's Classical Taxonomy, Single Instruction, Multiple Data (SIMD); Parallel Programming Models, SPMD · versión: Versión 16-06-2026 declarada; material docente de fundamentos, sin extrapolar ejemplos históricos o tendencias a todos los equipos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `68b9d38d183ce8564955880f2bcbf9c31245dd89489c2fe0779ec7184da8a8aa` · propuesta: `46fe8a6f2d4795cccc91e7675fd1071e8a0fa476d25a09c8c2d6190731572ce0`

## MAN-GSI-P17-023

Decisión: pending_review · acción: revise.

Motivo: Conservar definición MIMD y clave A; sustituir tarjeta de red por MISD y mantener las cuatro combinaciones con redacción comparable.

### Antes

Según Flynn, ¿qué caracteriza a MIMD?

- A. Múltiples flujos de instrucciones operan sobre múltiples flujos de datos. **(correcta)**
- B. Una única instrucción sobre un único dato.
- C. Una instrucción sobre múltiples datos.
- D. Un modelo exclusivo de tarjetas de red.

Explicación: MIMD es común en multiprocesadores y sistemas distribuidos.

### Propuesta

Según Flynn, ¿qué caracteriza a MIMD?

- A. Múltiples flujos de instrucciones operan sobre múltiples flujos de datos. **(correcta)**
- B. Un único flujo de instrucciones opera sobre un único flujo de datos.
- C. Un único flujo de instrucciones opera sobre múltiples flujos de datos.
- D. Múltiples flujos de instrucciones operan sobre un único flujo de datos.

Explicación: MIMD permite flujos de instrucciones independientes sobre distintos flujos de datos. Es compatible con multiprocesadores, multinúcleos y nodos de un clúster, con las diferencias de memoria de cada diseño. Los procesadores pueden ejecutar el mismo programa con caminos distintos; no necesitan ejecutar siempre programas diferentes. Tampoco queda excluida la presencia de unidades SIMD dentro de cada nodo.

- Error B: La combinación de un flujo de instrucciones y uno de datos es SISD. No describe los dos ejes múltiples de MIMD.
- Error C: Un único flujo de instrucciones sobre varios datos es SIMD. MIMD permite independencia de los flujos de instrucciones.
- Error D: Varios flujos de instrucciones y uno de datos forman MISD. Cambia el eje de datos respecto de MIMD.

- [Cornell Virtual Workshop: Taxonomy of Parallel Computers](https://cvw.cac.cornell.edu/parallel/hpc/taxonomy-parallel-computers) · Tabla Instruction Stream / Data Stream y párrafos SISD, SIMD, MISD, MIMD y SPMD; combinación de niveles y diferencia arquitectura/programa · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [LLNL: Introduction to Parallel Computing Tutorial](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) · Flynn's Classical Taxonomy, Multiple Instruction, Multiple Data (MIMD) · versión: Versión 16-06-2026 declarada; material docente de fundamentos, sin extrapolar ejemplos históricos o tendencias a todos los equipos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `983a9f385aa8e04f7b0c82307ec25f104e55b1f67d15b06c6b5026770c310052` · propuesta: `3fa26a3501d6992f6085781edb3e061202d2367b4bd3c29097e70b4533b364e7`

## MAN-GSI-P17-024

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y cuatro siglas; explicar rareza sin convertirla en inexistencia ni afirmar un ejemplo discutible como único.

### Antes

¿Qué categoría de Flynn es poco habitual como arquitectura general de propósito común?

- A. SISD.
- B. MISD. **(correcta)**
- C. SIMD.
- D. MIMD.

Explicación: MISD aparece mucho menos como arquitectura general que SISD/SIMD/MIMD.

### Propuesta

¿Qué categoría de Flynn es poco habitual como arquitectura general de propósito común?

- A. SISD.
- B. MISD. **(correcta)**
- C. SIMD.
- D. MIMD.

Explicación: MISD es la combinación de varios flujos de instrucciones con uno de datos y es poco habitual como arquitectura general. Las fuentes docentes señalan ejemplos limitados o posibles, como filtros distintos sobre una señal, sin afirmar que sea imposible. SISD, SIMD y MIMD aparecen en modelos o niveles habituales de cómputo. La clasificación no debe confundirse con los nombres SPMD o MPMD de modelos de programación.

- Error A: SISD es el modelo clásico de un flujo de instrucciones y uno de datos. La pregunta busca la combinación especialmente poco habitual como arquitectura general.
- Error C: SIMD es habitual en procesamiento vectorial y en unidades de paralelismo de datos. No es la categoría rara preguntada.
- Error D: MIMD es común en multinúcleos y clústeres. Puede incluir componentes SIMD sin dejar de representar flujos independientes a otro nivel.

- [Cornell Virtual Workshop: Taxonomy of Parallel Computers](https://cvw.cac.cornell.edu/parallel/hpc/taxonomy-parallel-computers) · Tabla Instruction Stream / Data Stream y párrafos SISD, SIMD, MISD, MIMD y SPMD; combinación de niveles y diferencia arquitectura/programa · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [LLNL: Introduction to Parallel Computing Tutorial](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) · Flynn's Classical Taxonomy, Multiple Instruction, Single Data (MISD) · versión: Versión 16-06-2026 declarada; material docente de fundamentos, sin extrapolar ejemplos históricos o tendencias a todos los equipos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `5755b38cc36dfb54d909eddab7876149da3216e495669df14348e0dbb7f7e844` · propuesta: `6e097a793b10765725936aa2e79399f30fd1a544ee8bbe3417bf96c8b9fe73cb`

## MAN-GSI-P17-025

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas; precisar ccNUMA, localidad y límites de uniformidad sin confundir distribución física con modelo de mensajes.

### Antes

¿Qué diferencia esencial hay entre UMA y NUMA?

- A. En UMA cada procesador tiene memoria local con distinta latencia, mientras NUMA ofrece acceso uniforme a toda la memoria.
- B. NUMA elimina la sincronización y coherencia entre procesadores porque cada nodo trabaja siempre con datos completamente separados.
- C. En UMA el tiempo de acceso a memoria es aproximadamente uniforme; en NUMA depende de la localidad del nodo de memoria. **(correcta)**
- D. UMA se aplica solo a almacenamiento persistente y NUMA únicamente a memoria RAM de un único procesador sin nodos.

Explicación: La diferencia central es la topología/latencia de acceso a memoria.

### Propuesta

¿Qué diferencia esencial hay entre UMA y NUMA?

- A. En UMA cada procesador tiene memoria local con distinta latencia, mientras NUMA ofrece acceso uniforme a toda la memoria.
- B. NUMA elimina la sincronización y coherencia entre procesadores porque cada nodo trabaja siempre con datos completamente separados.
- C. En UMA el tiempo de acceso a memoria es aproximadamente uniforme; en NUMA depende de la localidad del nodo de memoria. **(correcta)**
- D. UMA se aplica solo a almacenamiento persistente y NUMA únicamente a memoria RAM de un único procesador sin nodos.

Explicación: UMA describe acceso a memoria aproximadamente uniforme en el nivel de comparación considerado; NUMA distingue costes según la proximidad entre CPU y memoria. En ccNUMA puede existir un espacio de memoria compartido y coherencia hardware pese a que la memoria esté distribuida físicamente entre nodos. La localidad no elimina sincronización ni obliga a que cada nodo tenga un socket, memoria y CPU propios. Cachés, contención y carga afectan a tiempos observados.

- Error A: Intercambia los conceptos: el acceso aproximadamente uniforme corresponde a UMA y la dependencia de la localidad a NUMA.
- Error B: NUMA no elimina compartir datos ni sincronizar. En ccNUMA varios procesadores pueden acceder al espacio compartido y el hardware mantiene coherencia, sin hacer atómicas las actualizaciones del programa.
- Error D: La distinción se refiere a organización y coste de acceso a memoria, no a separar disco persistente de RAM en un único procesador sin nodos.

- [Linux: What is NUMA?](https://docs.kernel.org/mm/numa.html) · Perspectiva hardware, ccNUMA, distancia entre celdas, asignación local y afinidad; nodos pueden carecer de CPU o memoria · versión: Documentación en línea, sin fijar versión de implementación ni asumir que todo nodo es un socket; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [LLNL: Introduction to Parallel Computing Tutorial](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) · Parallel Computer Memory Architectures, Shared Memory: UMA y NUMA; responsabilidad de sincronización · versión: Versión 16-06-2026 declarada; material docente de fundamentos, sin extrapolar ejemplos históricos o tendencias a todos los equipos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `c7c1370f5e008c87244a0d97043e52e1666cd1bd9b90db62ebaac1ecca0eb9d3` · propuesta: `a2726f35ebf3953ceba6e82704b3fad526f553350df0c5aef4827873f2b2e00e`

## MAN-GSI-P17-026

Decisión: pending_review · acción: revise.

Motivo: Conservar afinidad/localidad y clave D; microcaso de accesos remotos, con políticas reales y límites de afinidad e intercalado.

### Antes

¿Qué práctica favorece el rendimiento en NUMA?

- A. Mover aleatoriamente los datos entre nodos en cada acceso.
- B. Desactivar todas las cachés.
- C. Usar siempre un único proceso sin medir.
- D. Mantener hilos y datos con buena afinidad/localidad cuando sea posible. **(correcta)**

Explicación: Afinidad y localidad reducen accesos remotos costosos.

### Propuesta

En un sistema NUMA, unos hilos acceden repetidamente a datos situados en otro nodo y la medición muestra coste de acceso remoto. ¿Qué práctica conviene evaluar?

- A. Migrar los hilos de nodo en cada fase, conservando siempre los datos en el nodo inicial.
- B. Intercalar todas las páginas entre nodos sin distinguir qué hilos las usan con mayor frecuencia.
- C. Concentrar todos los hilos en un núcleo, sin comprobar contención ni capacidad disponible.
- D. Probar afinidad de hilos y datos con buena localidad, midiendo el efecto sobre la carga. **(correcta)**

Explicación: Si predominan accesos remotos a los mismos datos, colocar hilos y memoria cerca puede reducir ese coste en NUMA. La elección debe contrastarse con la carga: fijar afinidad sin considerar saturación, ancho de banda o memoria disponible también puede empeorar el resultado. No se requiere desactivar cachés ni se garantiza que una política de asignación sea óptima para todo patrón de acceso.

- Error A: Mover hilos conservando los datos puede alejarlos de la memoria que usan y añadir migraciones. No conserva de forma estable la localidad relevante del caso.
- Error B: Intercalar páginas puede ser útil para ciertas cargas o reparto de ancho de banda, pero aplicarlo sin conocer quién accede no trata específicamente los datos remotos concentrados del caso.
- Error C: La concentración puede reducir paralelismo y crear contención. Sin medir no se justifica como respuesta al problema de localidad NUMA.

- [Linux: What is NUMA?](https://docs.kernel.org/mm/numa.html) · Perspectiva hardware, ccNUMA, distancia entre celdas, asignación local y afinidad; nodos pueden carecer de CPU o memoria · versión: Documentación en línea, sin fijar versión de implementación ni asumir que todo nodo es un socket; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Ubuntu Server: CPU affinity, NUMA placement, and isolation](https://ubuntu.com/server/docs/explanation/performance/perf-tune-affinity-numa/) · Introducción y CPU and memory topology: localidad, políticas y necesidad de medir; fijaciones manuales pueden dejar núcleos ociosos o sobrecargar un nodo · versión: Documentación en línea, sin fijar versión de distribución; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `1d0c525b81f43175a6203ed3df040a18f35840be751f081e02e8941c0d7a1c60` · propuesta: `4f5f553a467a64f7a454ceccd7513dce4f09551962045360f2bd496348fec15b`

## MAN-GSI-P17-027

Decisión: pending_review · acción: revise.

Motivo: Conservar orientación mainframe y clave A; comparar HPC, estación gráfica y servidor de archivos en lugar de portátil o ausencia de virtualización.

### Antes

¿Qué caracteriza principalmente a un mainframe?

- A. Gran capacidad transaccional, E/S, disponibilidad y aislamiento de cargas. **(correcta)**
- B. Maximizar exclusivamente FLOPS científicos.
- C. Ser necesariamente un ordenador portátil.
- D. No admitir virtualización.

Explicación: Mainframe y supercomputador optimizan perfiles de carga distintos.

### Propuesta

¿Qué caracteriza principalmente a un mainframe?

- A. Gran capacidad transaccional, E/S, disponibilidad y aislamiento de cargas. **(correcta)**
- B. Cálculo científico intensivo optimizado para acelerar grandes simulaciones paralelas.
- C. Interacción gráfica local optimizada para diseño y visualización en un puesto de trabajo.
- D. Almacenamiento compartido optimizado para servir archivos a equipos conectados por red.

Explicación: Un mainframe se orienta a gran volumen transaccional y de E/S, operación continuada y aislamiento de cargas, con mecanismos de virtualización y fiabilidad. Esto describe su orientación general, no una tarea exclusiva ni una garantía de ausencia de fallos. Puede ejecutar cargas variadas y relacionarse con clústeres o aceleradores. Se distingue por ese conjunto de prioridades, no por el tamaño físico histórico o por maximizar solo FLOPS.

- Error B: Describe principalmente la orientación de supercomputación/HPC. Un mainframe puede realizar cálculo, pero el conjunto de transacciones, E/S y continuidad es lo que distingue la respuesta adecuada.
- Error C: Describe una estación de trabajo gráfica. Una interfaz gráfica no es el rasgo principal de una plataforma central transaccional.
- Error D: Describe el papel de un servidor de archivos o almacenamiento de red. Un mainframe puede servir datos, pero no se define únicamente por ese servicio.

- [IBM: What is a mainframe?](https://www.ibm.com/think/topics/mainframe) · Mainframe, defined, párrafo inicial; How does a modern mainframe work?, Operating systems y Workload isolation and virtualization: transacciones, E/S, continuidad y aislamiento · versión: Publicación 08-04-2024, actualización 03-09-2026; solo fundamentos, sin adoptar cuotas de mercado, cifras de producto o garantías absolutas; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Cornell Virtual Workshop: High Performance Computing](https://cvw.cac.cornell.edu/parallel/hpc/high-performance-computing) · Definición inicial y distinción HPC/HTC; solo fundamentos y cómputo a gran escala, sin tomar cifras o noticias históricas como actuales · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `d5ab2ffc41f88213a57af380f8b57c4c0dce82e5dbcab3c11f5dfc56ec19e4ec` · propuesta: `8ae9015745b13ec5c6ed78cbf745412f95f5aebc9a68a225f97fd0e8dfe53980`

## MAN-GSI-P17-028

Decisión: pending_review · acción: revise.

Motivo: Conservar finalidad de cálculo a gran escala y clave A; comparar orientaciones de plataformas reales sin exigir ciencia exclusiva ni arquitectura monoprocesador.

### Antes

¿Qué caracteriza principalmente a un supercomputador?

- A. Maximizar capacidad de cálculo para cargas científicas o técnicas de gran escala. **(correcta)**
- B. Servir únicamente páginas HTML estáticas.
- C. Ser siempre un servidor monoprocesador.
- D. Priorizar exclusivamente impresión de documentos.

Explicación: La supercomputación se orienta a cálculo intensivo y paralelismo masivo.

### Propuesta

¿Qué caracteriza principalmente a un supercomputador?

- A. Maximizar capacidad de cálculo para cargas científicas o técnicas de gran escala. **(correcta)**
- B. Priorizar transacciones y E/S con aislamiento de cargas para operación empresarial continuada.
- C. Priorizar respuesta gráfica e interacción de un usuario en aplicaciones locales de diseño.
- D. Priorizar capacidad de archivo y acceso a documentos compartidos a través de una red.

Explicación: La supercomputación busca resolver problemas de cálculo de gran escala, científicos o técnicos, mediante recursos y organización adecuados a esas cargas. Suele combinar paralelismo, memoria e interconexiones, y puede incluir aceleradores. No se define por un único número de procesadores ni por una tarea exclusivamente científica: también hay usos industriales y de IA. Una medida de LINPACK describe esa prueba, no todo su rendimiento.

- Error B: Es la orientación transaccional y de continuidad característica de un mainframe. Puede haber solapamientos de cargas, pero no define la prioridad de cálculo de supercomputación preguntada.
- Error C: Describe el foco de una estación de trabajo interactiva. El rendimiento gráfico local no equivale al cómputo coordinado de gran escala.
- Error D: Describe una prioridad de almacenamiento y servicio documental. Puede apoyar al supercomputador, pero no es el objetivo principal que lo caracteriza.

- [Cornell Virtual Workshop: High Performance Computing](https://cvw.cac.cornell.edu/parallel/hpc/high-performance-computing) · Definición inicial y distinción HPC/HTC; solo fundamentos y cómputo a gran escala, sin tomar cifras o noticias históricas como actuales · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [IBM: What is a mainframe?](https://www.ibm.com/think/topics/mainframe) · Mainframe, defined, párrafo inicial; How does a modern mainframe work?, Operating systems y Workload isolation and virtualization: transacciones, E/S, continuidad y aislamiento · versión: Publicación 08-04-2024, actualización 03-09-2026; solo fundamentos, sin adoptar cuotas de mercado, cifras de producto o garantías absolutas; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [TOP500: The Linpack Benchmark](https://top500.org/project/linpack/) · Párrafos de sistema lineal denso, alcance de la medida y Rmax/Rpeak; no se usa posición o cifra de un ranking · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `4802ad3afb83183a2a51daf2f6cb473c2de8d15b130887392cd75bc43219f839` · propuesta: `299a90f6d0812ae72c7f1e9b6989e9459f925d739f6c96bf056fa5fd38f375e5`

## MAN-GSI-P17-029

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas; completar nodo e interconexión y reconocer clústeres de almacenamiento, evitando negar su existencia.

### Antes

¿Qué es un clúster de computación?

- A. Un conjunto de nodos independientes conectados y coordinados para prestar capacidad conjunta. **(correcta)**
- B. Un único equipo multiprocesador cuyos núcleos comparten memoria y sistema operativo, sin nodos independientes conectados por red.
- C. Un balanceador que reparte peticiones entre destinos, aunque no coordine sus recursos ni convierta esos servidores en una capacidad conjunta.
- D. Un sistema de almacenamiento distribuido que replica bloques, considerado clúster de computación aunque no ejecute cargas coordinadas.

Explicación: El clúster coordina varios nodos mediante red y software.

### Propuesta

¿Qué es un clúster de computación?

- A. Un conjunto de nodos independientes conectados y coordinados para prestar capacidad conjunta. **(correcta)**
- B. Un único equipo multiprocesador cuyos núcleos comparten memoria y sistema operativo, sin nodos independientes conectados por red.
- C. Un balanceador que reparte peticiones entre destinos, aunque no coordine sus recursos ni convierta esos servidores en una capacidad conjunta.
- D. Un sistema de almacenamiento distribuido que replica bloques, considerado clúster de computación aunque no ejecute cargas coordinadas.

Explicación: Un clúster de computación coordina varios nodos conectados para ofrecer capacidad conjunta. Cada nodo puede tener procesadores, memoria y sistema operativo propios, y la interconexión permite comunicar tareas. No basta la existencia de un balanceador aislado para definir toda esa coordinación. Hay clústeres de almacenamiento y diseños mixtos: la distinción del enunciado se refiere al propósito de computación, sin negar esas otras clases.

- Error B: Describe una máquina multiprocesador de memoria compartida, no varios nodos independientes conectados como recurso conjunto. Un nodo del clúster sí puede tener esa organización interna.
- Error C: Un balanceador distribuye tráfico, pero el texto excluye coordinación de recursos como capacidad conjunta. Ese componente por sí solo no define el clúster de computación.
- Error D: Replica bloques para un objetivo de almacenamiento y excluye cargas de cómputo coordinadas. Puede ser un clúster de almacenamiento, pero el caso no lo convierte en clúster de computación.

- [Cornell Virtual Workshop: Clusters](https://cvw.cac.cornell.edu/parallel/hpc/clusters) · Párrafos de definición, nodos, planificador e interconexiones: máquinas coordinadas como recurso y comunicación de tareas · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [LLNL: Introduction to Parallel Computing Tutorial](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) · Overview, Parallel Computers; General Terminology, Node; Hybrid Distributed-Shared Memory · versión: Versión 16-06-2026 declarada; material docente de fundamentos, sin extrapolar ejemplos históricos o tendencias a todos los equipos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `0c11d4eb08592151964adae079c80acb3543ebc154bed5e159ec74708ac9afc9` · propuesta: `b45b2cc7a147f6887f1bcef0b0e7ba4bf0c84a75044f19b887fb606adb243443`

## MAN-GSI-P17-030

Decisión: pending_review · acción: revise.

Motivo: Conservar pluralidad de objetivos y clave C; comparar decisiones arquitectónicas cercanas sin reducir código fuente, reemplazar DNS o prometer ausencia automática de fallos.

### Antes

¿Qué objetivo puede perseguir un clúster?

- A. La reducción del tamaño del código fuente mediante compilación distribuida.
- B. La sustitución del servicio DNS por direccionamiento estático entre nodos.
- C. Alto rendimiento, alta disponibilidad, balanceo o una combinación. **(correcta)**
- D. La eliminación de puntos de fallo sin incorporar redundancia entre componentes.

Explicación: Los clústeres se diseñan según objetivo: HPC, HA, balanceo, etc.

### Propuesta

¿Qué objetivo puede perseguir un clúster?

- A. Priorizar cómputo científico implica usar los nodos como un equipo de memoria uniforme.
- B. Orientarlo a disponibilidad exige mantener todos los nodos ejecutando la misma tarea.
- C. Puede priorizar cálculo paralelo, continuidad de servicio, reparto de carga o combinaciones. **(correcta)**
- D. Repartir peticiones entre nodos convierte la interconexión en un recurso prescindible.

Explicación: Un clúster puede diseñarse para cálculo de alto rendimiento, disponibilidad o reparto de carga, y combinar objetivos. Cada objetivo exige mecanismos y mediciones específicos: paralelización y comunicación, detección y recuperación de fallos o distribución de peticiones. Conectar nodos no produce automáticamente esas propiedades ni elimina puntos de fallo o costes de comunicación. La arquitectura y el software determinan cómo se logran.

- Error A: El cálculo paralelo puede usar memoria distribuida y mensajes entre nodos. No exige convertir el conjunto en una máquina UMA.
- Error B: La alta disponibilidad admite diferentes configuraciones, como activo/pasivo o servicios repartidos. No obliga a ejecutar simultáneamente la misma tarea en todos los nodos.
- Error D: La distribución de peticiones sigue necesitando comunicaciones con nodos y, según diseño, coordinación. El reparto no elimina la infraestructura que las transporta.

- [IBM: What is cluster computing?](https://www.ibm.com/think/topics/cluster-computing) · Types of clusters: High-availability clusters, Load-balancing clusters y High-performance computing clusters; se usa clasificación funcional, no promesas universales ni definición restrictiva de grid · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Cornell Virtual Workshop: Clusters](https://cvw.cac.cornell.edu/parallel/hpc/clusters) · Párrafos de definición, nodos, planificador e interconexiones: máquinas coordinadas como recurso y comunicación de tareas · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [LLNL: Introduction to Parallel Computing Tutorial](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) · Parallel Computer Memory Architectures, Distributed Memory; Load Balancing · versión: Versión 16-06-2026 declarada; material docente de fundamentos, sin extrapolar ejemplos históricos o tendencias a todos los equipos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `85a7f09be0da1510b0801250e1246c86e566ddf62647e354f4b70a2478d3e9c7` · propuesta: `8af26912f5b49d96dcb920b55dc8a0a171ad158f7a9c95100380e553948bf672`

## MAN-GSI-P17-031

Decisión: pending_review · acción: revise.

Motivo: Conservar autonomía y coordinación grid y clave D; comparar clúster, cloud y SMP, sin restringir grid a equipos ociosos o a organizaciones geográficamente separadas.

### Antes

¿Qué distingue conceptualmente a grid computing?

- A. Es sinónimo exacto de una única máquina virtual.
- B. Obliga a que todos los nodos estén en la misma placa base.
- C. Es un sistema de permisos POSIX.
- D. Agrega recursos autónomos y potencialmente distribuidos entre distintos dominios para compartir capacidad. **(correcta)**

Explicación: Grid coordina recursos distribuidos y autónomos; no es lo mismo que cloud.

### Propuesta

¿Qué distingue conceptualmente a grid computing?

- A. Un clúster local con control central de nodos bajo una única política administrativa.
- B. Un servicio de recursos aprovisionables bajo demanda con elasticidad y uso medido.
- C. Un sistema SMP que ofrece memoria compartida a procesadores dentro de un equipo.
- D. Recursos autónomos de distintos dominios que se coordinan mediante reglas compartidas. **(correcta)**

Explicación: Grid se centra en compartir y coordinar recursos que conservan autonomía en diferentes dominios de control. El texto de Foster añade protocolos e interfaces generales y abiertos y un uso coordinado que aporte servicio. Los dominios pueden pertenecer a una o varias organizaciones: distancia física y recursos ociosos no son requisitos exclusivos. Puede integrar clústeres y relacionarse con cloud sin ser sinónimo de ellos.

- Error A: Describe un clúster gestionado bajo control central. Puede aportar recursos a un grid, pero por sí solo no expresa la autonomía de dominios que distingue el concepto.
- Error B: Describe características del modelo cloud según NIST. Grid no queda definido por ofrecer necesariamente autoservicio elástico y uso medido.
- Error C: Describe memoria compartida de un equipo multiprocesador. Es otra organización de recursos, distinta de coordinar dominios autónomos.

- [Ian Foster: What is the Grid? A Three Point Checklist](https://marketing.globuscs.info/production/strapi/uploads/What_Is_The_Grid_98bdb2b767.pdf) · A Grid Checklist, pp. 2–3: dominios de control autónomos, protocolos e interfaces generales abiertos y uso coordinado; listado de publicaciones Globus enlaza este original · versión: 20-07-2002; artículo primario fundacional, sin recomendar software histórico; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Cornell Virtual Workshop: Clusters](https://cvw.cac.cornell.edu/parallel/hpc/clusters) · Párrafos de definición, nodos, planificador e interconexiones: máquinas coordinadas como recurso y comunicación de tareas · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `1f93a085c8d98528331a91df83a5093572866675819603723c3f627af854ba65` · propuesta: `c111f4318588465a9c78bfbd59b12b342a2a0163dfe9dfce0d80907edc261821`

## MAN-GSI-P17-032

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción clúster/grid/cloud y clave A; comparar asociaciones parcialmente correctas, explicando que pueden combinarse sin ser sinónimos.

### Antes

¿Qué afirmación es correcta sobre clúster, grid y cloud?

- A. Son conceptos relacionados con computación distribuida/recursos, pero no son sinónimos. **(correcta)**
- B. Son tres nombres para el mismo producto.
- C. Cloud es siempre un clúster físico de un solo nodo.
- D. Grid implica necesariamente SaaS.

Explicación: Cada modelo resuelve organización y provisión de recursos de forma distinta.

### Propuesta

¿Qué asociación distingue mejor clúster, grid y cloud en su uso habitual?

- A. Clúster: nodos coordinados; grid: dominios autónomos; cloud: provisión elástica bajo demanda. **(correcta)**
- B. Clúster: provisión elástica; grid: nodos bajo control central; cloud: dominios autónomos.
- C. Clúster: dominios autónomos; grid: provisión elástica; cloud: nodos bajo control central.
- D. Clúster: provisión elástica; grid: dominios autónomos; cloud: nodos bajo control central.

Explicación: La asociación distingue organización de nodos coordinados, compartición entre dominios autónomos y modelo de provisión bajo demanda. No son categorías mutuamente excluyentes: un cloud puede apoyarse en clústeres y un grid puede incorporar recursos de otros modelos. La elasticidad por sí sola tampoco agota la definición NIST de cloud, que añade autoservicio, acceso por red, agrupación de recursos y servicio medido.

- Error B: Atribuye al grid el control central propio del ejemplo de clúster y al cloud la autonomía de dominios. La provisión elástica no define por sí sola todo clúster.
- Error C: Rota las características distintivas: autonomía de dominios corresponde al grid, provisión elástica al modelo cloud y nodos coordinados al clúster.
- Error D: La descripción de grid es adecuada, pero intercambia provisión cloud y organización de un clúster. Un soporte de nodos no basta para acreditar las características de servicio cloud.

- [Cornell Virtual Workshop: Clusters](https://cvw.cac.cornell.edu/parallel/hpc/clusters) · Párrafos de definición, nodos, planificador e interconexiones: máquinas coordinadas como recurso y comunicación de tareas · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Ian Foster: What is the Grid? A Three Point Checklist](https://marketing.globuscs.info/production/strapi/uploads/What_Is_The_Grid_98bdb2b767.pdf) · A Grid Checklist, pp. 2–3: dominios de control autónomos, protocolos e interfaces generales abiertos y uso coordinado; listado de publicaciones Globus enlaza este original · versión: 20-07-2002; artículo primario fundacional, sin recomendar software histórico; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) · Sección 2, pp. impresas 2–3: definición, cinco características esenciales, modelos de servicio y despliegue · versión: Septiembre 2011; errata editorial incorporada 27-04-2012; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `9abfc22aec5ad2db78d1f064fd76c2cede858822ae0d281f9c630d81e35cc233` · propuesta: `48f71665678ddfac23acd46f1c41fa93d1b093e2b05cfac983c7010c59258013`

## MAN-GSI-P17-033

Decisión: pending_review · acción: revise.

Motivo: Conservar necesidad de sincronización y clave D; microcaso de contador actualizado por lectura/suma/escritura, diferenciando corrección lógica y problemas de rendimiento.

### Antes

En memoria compartida, ¿qué problema exige mecanismos de sincronización?

- A. La imposibilidad absoluta de compartir datos.
- B. La ausencia de cualquier caché.
- C. El hecho de que cada proceso tenga su propio disco físico.
- D. Varias tareas pueden acceder y modificar estado compartido de forma concurrente. **(correcta)**

Explicación: Estado compartido introduce carreras y coherencia/sincronización.

### Propuesta

Dos tareas actualizan un contador compartido mediante lectura, suma y escritura sin coordinar la secuencia. Ambas pueden leer el mismo valor antes de escribir. ¿Qué problema debe resolverse?

- A. La latencia de accesos remotos a memoria situada en otro nodo NUMA.
- B. La contención de ancho de banda al leer grandes bloques de datos disjuntos.
- C. El desequilibrio de trabajo entre tareas que esperan al llegar a una barrera.
- D. La interferencia entre actualizaciones concurrentes de un mismo estado compartido. **(correcta)**

Explicación: Si dos tareas leen el mismo contador y después escriben cada una su incremento sin coordinar la operación completa, una actualización puede sobrescribir la otra. Hay un problema de concurrencia sobre estado compartido: se necesita exclusión, una operación atómica apropiada u otro diseño que garantice la actualización. La coherencia hardware no convierte la secuencia de lectura, suma y escritura en una operación indivisible. Las reglas concretas dependen del lenguaje y mecanismo utilizado.

- Error A: NUMA puede afectar al tiempo de acceso, pero acercar los datos no hace indivisible una actualización compuesta. No resuelve que dos tareas sobrescriban el incremento.
- Error B: La contención puede reducir throughput incluso sobre datos disjuntos. El caso describe conflicto lógico sobre el mismo estado, no solo saturación por lecturas.
- Error C: Una distribución desigual de trabajo causa esperas de rendimiento. No explica ni corrige la pérdida de una actualización sobre el contador.

- [LLNL: Introduction to Parallel Computing Tutorial](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) · Data Dependencies, Loop independent data dependence y How to Handle Data Dependencies; Shared Memory, responsabilidad de sincronización · versión: Versión 16-06-2026 declarada; material docente de fundamentos, sin extrapolar ejemplos históricos o tendencias a todos los equipos; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Linux: What is NUMA?](https://docs.kernel.org/mm/numa.html) · Perspectiva hardware, ccNUMA, distancia entre celdas, asignación local y afinidad; nodos pueden carecer de CPU o memoria · versión: Documentación en línea, sin fijar versión de implementación ni asumir que todo nodo es un socket; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `e14cb114b498fd553ed2ad8a13f66278dd510848a0d501591a9efa4e344f6a56` · propuesta: `a8bf983d07f7aa38013862e074049164cec30086c20b5d0a30a4f29d3c3b0085`

## MAN-GSI-P17-034

Decisión: pending_review · acción: revise.

Motivo: Conservar intercambio mediante comunicación y clave C; acotar el modelo clásico con espacios privados, frente a cargas compartidas, coherencia local y confusión de direcciones.

### Antes

En memoria distribuida, ¿cómo se intercambian típicamente datos entre nodos?

- A. Leyendo todos la misma dirección física de RAM local.
- B. Usando exclusivamente interrupciones de teclado.
- C. Mediante comunicación/mensajes a través de una interconexión. **(correcta)**
- D. Mediante el registro de Windows.

Explicación: Los nodos no comparten necesariamente un espacio físico de memoria.

### Propuesta

En el modelo clásico de memoria distribuida, con espacios privados por proceso, ¿cómo se intercambian típicamente datos entre nodos?

- A. Accediendo a un espacio común de memoria con cargas y almacenes ordinarios de CPU.
- B. Confiando en la coherencia de caché local para propagar cambios a todos los demás nodos.
- C. Mediante comunicación y mensajes a través de la interconexión entre los nodos. **(correcta)**
- D. Tratando direcciones virtuales iguales como referencia al mismo objeto remoto.

Explicación: En el modelo clásico de memoria distribuida, cada proceso trabaja con su espacio y comunica los datos que otros necesitan mediante operaciones de comunicación. MPI es un ejemplo habitual; una implementación puede optimizar el transporte según dónde estén los procesos. El modelo no se convierte en memoria compartida porque dos procesos usen el mismo valor de dirección virtual. También existen diseños híbridos y otras abstracciones sobre el hardware.

- Error A: Describe acceso ordinario a memoria compartida. El enunciado delimita espacios privados y comunicación entre nodos; una abstracción compartida adicional sería otro modelo.
- Error B: La coherencia local de un nodo no publica automáticamente sus datos privados en los otros nodos del sistema. Hace falta la comunicación que requiere el modelo.
- Error D: El mismo número de dirección en espacios privados puede designar objetos distintos. No identifica por sí solo memoria remota ni realiza la transferencia.

- [LLNL: Introduction to Parallel Computing Tutorial](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) · Parallel Computer Memory Architectures, Distributed Memory; Distributed Memory / Message Passing Model; Hybrid Model · versión: Versión 16-06-2026 declarada; material docente de fundamentos, sin extrapolar ejemplos históricos o tendencias a todos los equipos; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `50b2bdb48f4948527f55672a510d4e9dee52651447428750ff699de5d866d277` · propuesta: `1d5f51114d03db08fc07a113e7b86314aa074724a083bca3a6d976a55db7cc03`

## MAN-GSI-P17-035

Decisión: pending_review · acción: revise.

Motivo: Conservar límite serial y clave D; comparar escalado débil, localidad y balanceo como conceptos próximos, explicitando tamaño fijo y costes del modelo.

### Antes

¿Qué expresa la ley de Amdahl de forma cualitativa?

- A. El rendimiento siempre crece linealmente sin límite.
- B. Duplicar nodos reduce siempre el rendimiento a la mitad.
- C. La latencia de red desaparece con más procesadores.
- D. La parte no paralelizable limita el speedup máximo aunque se añadan más recursos. **(correcta)**

Explicación: El trabajo serial limita la aceleración total; por eso el escalado no es infinito.

### Propuesta

¿Qué expresa la ley de Amdahl de forma cualitativa?

- A. Al crecer el problema con los procesadores, puede mantenerse el tiempo de resolución.
- B. La distancia entre CPU y memoria determina la diferencia entre accesos locales y remotos.
- C. Repartir trabajo entre tareas reduce esperas debidas a una distribución desigual de carga.
- D. Para un problema fijo, la fracción no paralelizable limita la aceleración total. **(correcta)**

Explicación: La ley de Amdahl considera un trabajo de tamaño fijo y la fracción que puede acelerarse. Aunque esa parte se haga muy rápida, la fracción serial sigue consumiendo tiempo y limita el speedup total; el modelo ideal supone además costes simplificados. Comunicación, sincronización y desequilibrio pueden reducir la mejora real. Cambiar el tamaño del problema al añadir recursos corresponde a otra pregunta de escalado.

- Error A: Describe la idea de escalado débil o problema creciente, relacionada con Gustafson. No expresa la limitación serial del trabajo fijo de Amdahl.
- Error B: Describe localidad NUMA y costes de memoria. Es un factor de rendimiento, pero no la relación entre fracción serial y aceleración total que formula Amdahl.
- Error C: Describe balanceo de carga. Reducir esperas ayuda, pero no elimina el tiempo de una parte que sigue siendo serial.

- [LLNL: Introduction to Parallel Computing Tutorial](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) · Potential Benefits, Limits and Costs of Parallel Programming, Amdahl's Law; Scalability, strong/weak scaling · versión: Versión 16-06-2026 declarada; material docente de fundamentos, sin extrapolar ejemplos históricos o tendencias a todos los equipos; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [NVIDIA CUDA C++ Best Practices Guide](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html) · Secciones 2.2 Assess/Parallelize/Optimize/Deploy, 4.1.1 Creating the Profile y 4.1.3 Understanding Scaling: carga realista, fracción paralelizable y transferencias · versión: Versión 13.4 consultada; alcance CUDA, sin recomendar compra o garantizar mejora para toda carga; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `0e12efd9b12a92c91a1ae34e277f8b4048ea7ac49fc9104d43db8abe1b2489b3` · propuesta: `218f50548e2015532bd24156aa0356506e5867cc1b91599651bba801bdbd5f97`

## MAN-GSI-P17-036

Decisión: pending_review · acción: revise.

Motivo: Conservar FLOPS y clave B; comparar cuatro tasas técnicas reales y explicar precisión, carga y pico frente a medida sin equiparar rankings al rendimiento universal.

### Antes

¿Qué métrica se usa habitualmente para expresar capacidad de cálculo en HPC de coma flotante?

- A. RPO.
- B. FLOPS y sus múltiplos, interpretados siempre junto con la carga/benchmark. **(correcta)**
- C. Número de usuarios de Active Directory.
- D. TTL de DNS.

Explicación: FLOPS mide operaciones de coma flotante por segundo, aunque no sustituye benchmarks representativos.

### Propuesta

¿Qué métrica se usa habitualmente para expresar capacidad de cálculo en HPC de coma flotante?

- A. GB/s: volumen de datos transferido por segundo en una comunicación.
- B. FLOPS: operaciones de coma flotante por segundo en una carga especificada. **(correcta)**
- C. IOPS: operaciones de entrada/salida completadas por segundo en almacenamiento.
- D. MIPS: millones de instrucciones ejecutadas por segundo en un procesador.

Explicación: FLOPS expresa operaciones de coma flotante por segundo; sus múltiplos permiten informar de tasas de cálculo. Hay que precisar carga, precisión numérica y si se trata de pico teórico o rendimiento medido. TOP500 distingue Rpeak y Rmax para su prueba de sistemas lineales densos. Ninguna cifra aislada describe todas las cargas: ancho de banda, memoria y comunicación también condicionan el rendimiento de una aplicación.

- Error A: GB/s mide transferencia de datos, no operaciones aritméticas de coma flotante. Puede limitar una carga HPC, pero es una magnitud diferente.
- Error C: IOPS mide operaciones de E/S y depende de tamaño y patrón de acceso, entre otros factores. No es una tasa de cálculo de coma flotante.
- Error D: La acepción clásica de MIPS cuenta millones de instrucciones por segundo, con mezclas y trabajo por instrucción diferentes. En capacidad mainframe también se publican ratings relativos: tampoco son un recuento de operaciones de coma flotante de esta carga.

- [TOP500: The Linpack Benchmark](https://top500.org/project/linpack/) · Párrafos de sistema lineal denso, alcance de la medida y Rmax/Rpeak; no se usa posición o cifra de un ranking · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [SPEC Open Systems Group Policies and Procedures](https://www.spec.org/osg/policy/) · Secciones 2.7.4–2.7.7: resultados comparables/reproducibles, condiciones documentadas, alcance y representatividad · versión: V2.22, 19-08-2024 indicada en Recent Revisions; fundamentos de medición, no reglas específicas de una ejecución SPEC propia; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Jack Dongarra: Frequently Asked Questions on the Linpack Benchmark and Top500](https://netlib.org/utk/people/JackDongarra/faq-linpack.html) · Epígrafes What is a Mflop/s?, What is the theoretical peak performance? y How does the Linpack Benchmark performance relate to my application?: tasa, precisión y alcance · versión: FAQ histórica, fecha textual Last updated 5/8/2007 3:29 PM; solo definiciones, no lista actual ni reglas vigentes del benchmark; consulta real 27-10-2026 · comprobado: 2026-10-27
- [IBM Cloud Docs: Block Storage capacity and performance](https://cloud.ibm.com/docs/vpc?topic=vpc-capacity-performance) · Capacity; How I/O size affects performance; How concurrency and queue depth affect performance: volumen, IOPS, throughput y tamaño de operación; se usan relaciones, no límites comerciales concretos · versión: Documentación en línea sin versión documental indicada; sin recomendación de perfil ni extrapolar cifras de producto; consulta real 27-10-2026 · comprobado: 2026-10-27
- [IBM Z IntelliMagic Vision for z/OS: MIPS specification](https://www.ibm.com/docs/en/ibm-z-intellimagic/1.1.x?topic=step-mips-specification) · Párrafos iniciales: MIPS (Millions of Instructions Per Second), ratings LSPR/PCI y estimaciones de capacidad; no se equiparan índices relativos a recuentos directos de instrucciones · versión: Rama 1.1.x; contenido primario indexado consultado; apertura directa rechazada con HTTP 403, sin atribuir lectura directa exitosa ni versión operativa actual; consulta real 27-10-2026 · comprobado: 2026-10-27

Partida: `0264b1a5d3ddada473463c8007e472fcabd7e54aaea75ccf7431bc514db9dac3` · propuesta: `4195d8c1300d0bd16812d5f58fe471b715657fd6451759821b14e9e6a3f7fcbe`

## MAN-GSI-P17-037

Decisión: pending_review · acción: revise.

Motivo: Conservar reproducibilidad y representatividad y clave C; microcaso de comparación de equipos con cuatro planes de medición plausibles.

### Antes

¿Qué es un benchmark útil?

- A. Cualquier número de marketing sin metodología.
- B. Solo la frecuencia nominal de la CPU.
- C. Una prueba reproducible y representativa del tipo de carga que se quiere comparar. **(correcta)**
- D. Una prueba que cambia condiciones entre alternativas.

Explicación: La comparabilidad exige metodología y carga representativa.

### Propuesta

Se comparan dos equipos para ejecutar una aplicación. ¿Qué planteamiento de benchmark aporta una comparación útil?

- A. Comparar picos teóricos aunque procedan de operaciones y precisiones numéricas distintas.
- B. Usar la frecuencia nominal de CPU como sustituto de medir el tiempo de la aplicación.
- C. Repetir una carga representativa con condiciones y métricas documentadas y comparables. **(correcta)**
- D. Elegir para cada equipo una carga distinta que permita mostrar su mejor resultado.

Explicación: Un benchmark útil para esa decisión debe representar el trabajo que interesa y permitir reproducir e interpretar la comparación. Se documentan carga, tamaño, versiones, configuración, métricas y condiciones relevantes, con repeticiones que permitan valorar variabilidad. No se exige que cada componente de dos equipos sea idéntico, sino entender qué se compara. Un test sintético puede ser útil para su alcance, sin sustituir toda aplicación real.

- Error A: Cambiar operación o precisión puede cambiar el trabajo contado. Dos cifras de pico no acreditan el comportamiento de la aplicación ni constituyen una comparación homogénea.
- Error B: La frecuencia no incorpora instrucciones, memoria, paralelismo o software de la aplicación. No reemplaza medir su tiempo o throughput.
- Error D: Cambiar la carga entre equipos impide atribuir la diferencia al sistema para el mismo trabajo de interés. Mostrar el mejor caso propio no responde a la comparación solicitada.

- [SPEC Open Systems Group Policies and Procedures](https://www.spec.org/osg/policy/) · Secciones 2.7.4–2.7.7: resultados comparables/reproducibles, condiciones documentadas, alcance y representatividad · versión: V2.22, 19-08-2024 indicada en Recent Revisions; fundamentos de medición, no reglas específicas de una ejecución SPEC propia; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [NVIDIA CUDA C++ Best Practices Guide](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html) · Secciones 2.2 Assess/Parallelize/Optimize/Deploy, 4.1.1 Creating the Profile y 4.1.3 Understanding Scaling: carga realista, fracción paralelizable y transferencias · versión: Versión 13.4 consultada; alcance CUDA, sin recomendar compra o garantizar mejora para toda carga; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [TOP500: The Linpack Benchmark](https://top500.org/project/linpack/) · Párrafos de sistema lineal denso, alcance de la medida y Rmax/Rpeak; no se usa posición o cifra de un ranking · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `cd27bdeef7f191cc15eb92e98d1cca219fc1d3bf557d8badc71b942429149017` · propuesta: `442d28bf5210a886c527e4e3fed485dbbd77805ea9a804c92578ddca5e56d0e7`
