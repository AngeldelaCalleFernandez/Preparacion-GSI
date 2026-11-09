# Preparación del lote GSI-EDITORIAL-019

Fecha: **27-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico:

`65a45a0830d84d9f0fbcf689861c64bb6fb6dad7d25e02cc6fe91877eb607330`

La [ficha antes/después](GSI_REVISION_LOTE_019.md) contiene las 20 preguntas y sus explicaciones. El [JSON](../content/question-reviews/lote-019.json) conserva versiones de partida, hashes, motivos, fuentes y rúbrica del preparador. El [registro técnico](../logs/gsi-editorial-019-preparation.json) distingue preparación y aceptación humana. La aceptación del piloto no autoriza este lote.

## Alcance y decisiones individuales

Posiciones **361–380** de `review_order`: **20 manuales de B2-T01**. No incluye IA ni oficiales. Todas conservan concepto, ID, clave, procedencia y dificultad orientativa.

**MAN-GSI-P17-017, 024, 025 y 029** mantienen literalmente enunciado y alternativas. Se registran como `revise` porque sus explicaciones y referencias cambian y necesitan aceptación propia. Hay **15 conceptuales y cinco aplicaciones**, sin imponer cuotas por lote.

| ID | Modalidad | Decisión propuesta y contraste individual |
| --- | --- | --- |
| MAN-GSI-P17-017 | Conceptual | Conservar enunciado y opciones; separar ISA y microarquitectura, sin ciclos o longitudes universales de RISC/CISC. |
| MAN-GSI-P17-019 | Aplicación | Más TB y peor respuesta: volumen, latencia y tasa son magnitudes distintas; no diagnosticar una causa sin medirla. |
| MAN-GSI-P17-020 | Aplicación | Mantener el caso matricial; evaluar carga real y aceleradores frente a decisiones basadas solo en pico, capacidad o núcleos. |
| MAN-GSI-P17-021 | Conceptual | SISD: cuatro combinaciones simétricas de flujos, sin pista añadida sobre MISD. |
| MAN-GSI-P17-022 | Conceptual | SIMD frente a las otras combinaciones; distinguir SPMD y admitir SIMD dentro de MIMD. |
| MAN-GSI-P17-023 | Conceptual | MIMD: flujos independientes, con el mismo programa o programas distintos; sustituir tarjeta de red por MISD. |
| MAN-GSI-P17-024 | Conceptual | Conservar enunciado y siglas; MISD poco habitual no significa inexistente. |
| MAN-GSI-P17-025 | Conceptual | Conservar enunciado y opciones; UMA/NUMA y ccNUMA, sin confundir distribución física con espacios privados. |
| MAN-GSI-P17-026 | Aplicación | Coste remoto medido en NUMA: probar localidad de hilos y datos, valorando intercalado, migración y contención. |
| MAN-GSI-P17-027 | Conceptual | Mainframe: transacciones, E/S, continuidad y aislamiento frente a otras orientaciones de plataforma. |
| MAN-GSI-P17-028 | Conceptual | Supercomputación para cálculo a gran escala; no exigir arquitectura única ni tareas exclusivamente científicas. |
| MAN-GSI-P17-029 | Conceptual | Conservar enunciado y opciones; nodos coordinados y reconocimiento de clústeres de almacenamiento como otra finalidad. |
| MAN-GSI-P17-030 | Conceptual | Clúster con objetivos de HPC, disponibilidad o balanceo; no exigir UMA ni ejecución idéntica en todos los nodos. |
| MAN-GSI-P17-031 | Conceptual | Grid y dominios autónomos; comparar clúster, cloud y SMP, sin limitarlo a recursos ociosos. |
| MAN-GSI-P17-032 | Conceptual | Asociar clúster/grid/cloud a rasgos distintivos y explicar que pueden combinarse. |
| MAN-GSI-P17-033 | Aplicación | Contador actualizado por lectura/suma/escritura: sincronización o atomicidad, distinta de localidad y balanceo. |
| MAN-GSI-P17-034 | Conceptual | Memoria distribuida clásica y espacios privados: mensajes frente a dirección coincidente, coherencia local o memoria compartida. |
| MAN-GSI-P17-035 | Conceptual | Amdahl para trabajo fijo: límite serial frente a escalado débil, NUMA y balanceo de carga. |
| MAN-GSI-P17-036 | Conceptual | FLOPS frente a transferencia, IOPS y MIPS; precisión, pico y medida, con matiz de ratings mainframe. |
| MAN-GSI-P17-037 | Aplicación | Comparar equipos con carga representativa repetida y condiciones documentadas, frente a picos, frecuencia o cargas distintas. |

Cada pregunta tiene una explicación de la correcta y tres justificaciones individuales asociadas a los IDs originales. Se refieren al contenido para funcionar al barajar. Ninguna clave se modifica ni necesita reemplazo en este lote.

## Fuentes y límites de comprobación

Hay **19 URLs primarias distintas**: **18 abiertas** y una consulta de contenido primario indexado con apertura directa rechazada. Las referencias por pregunta incluyen localizador, versión o alcance y fecha real **27-10-2026**. La referencia Microsoft Learn conserva el contraste abierto realizado ese mismo día para el lote 018.

| Respaldo | Versión y localizador empleado |
| --- | --- |
| [LLNL: Parallel Computing](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) | Versión 16-06-2026. Flynn, memoria compartida/distribuida e híbrida, dependencias, Amdahl, escalado y balanceo. |
| [Cornell: taxonomía](https://cvw.cac.cornell.edu/parallel/hpc/taxonomy-parallel-computers) | Tabla de dos ejes, SISD/SIMD/MISD/MIMD y diferencia con SPMD. |
| [Cornell: clústeres](https://cvw.cac.cornell.edu/parallel/hpc/clusters) y [HPC](https://cvw.cac.cornell.edu/parallel/hpc/high-performance-computing) | Nodos, recurso conjunto, interconexiones y alcance HPC/HTC. No se adoptan cifras o ejemplos históricos como noticias actuales. |
| [Linux NUMA](https://docs.kernel.org/mm/numa.html) y [Ubuntu: afinidad](https://ubuntu.com/server/docs/explanation/performance/perf-tune-affinity-numa/) | Perspectiva hardware/software, ccNUMA, localidad y asignación; medir antes de restringir colocación. Sin fijar versión de implementación. |
| [Manual histórico RISC-V](https://docs.riscv.org/reference/isa/original/_attachments/riscv-unprivileged.pdf) | V1.0, 13-05-2011, UCB/EECS-2011-62. Secciones 1 y 2.2, pp. impresas 1 y 4, PDF 3 y 6. Contraejemplo de ISA e implementación y longitud comprimida. |
| [Intel: generaciones anteriores](https://cdrdv2-public.intel.com/821614/356477-Optimization-Reference-Manual-V2-050.pdf) | 356477-050US, abril 2024. 2.1.1.1 y tabla 2-1, pp. 2-3–2-4: pipeline y decodificación IA-32/Intel 64 a microoperaciones. |
| [CUDA Best Practices](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html) | V13.4 consultada. 2.2, 4.1.1 y 4.1.3: perfiles, carga real, fracción paralelizable y transferencias. |
| [IBM: mainframe](https://www.ibm.com/think/topics/mainframe) | Publicado 08-04-2024, actualizado 03-09-2026. Definición inicial, E/S, sistemas operativos y aislamiento/virtualización. |
| [IBM: tipos de clúster](https://www.ibm.com/think/topics/cluster-computing) | Types of clusters: disponibilidad, balanceo y HPC. Solo clasificación funcional, sin garantías universales. |
| [Ian Foster: Grid](https://marketing.globuscs.info/production/strapi/uploads/What_Is_The_Grid_98bdb2b767.pdf) | Artículo primario 20-07-2002, enlazado por catálogo Globus. A Grid Checklist, pp. 2–3. |
| [NIST SP 800-145](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) | Septiembre 2011, errata editorial 27-04-2012. Sección 2, pp. 2–3: definición, características y modelos cloud. |
| [TOP500: LINPACK](https://top500.org/project/linpack/) y [FAQ de Dongarra](https://netlib.org/utk/people/JackDongarra/faq-linpack.html) | Alcance de sistema denso y Rmax/Rpeak. FAQ histórica: What is a Mflop/s?, pico y relación con aplicación; fecha literal 5/8/2007, sin inferir reglas o rankings actuales. |
| [SPEC OSG](https://www.spec.org/osg/policy/) | V2.22, 19-08-2024. 2.7.4–2.7.7: comparabilidad, reproducibilidad, documentación y representatividad. |
| [IBM Cloud: capacidad y rendimiento](https://cloud.ibm.com/docs/vpc?topic=vpc-capacity-performance) | Capacity, How I/O size affects performance y concurrency/queue depth. Magnitudes y relaciones, sin recomendar perfiles o extrapolar límites comerciales. |
| [IBM Z: MIPS specification](https://www.ibm.com/docs/en/ibm-z-intellimagic/1.1.x?topic=step-mips-specification) | Rama 1.1.x, párrafos sobre MIPS, ratings LSPR/PCI y estimación. Contenido primario indexado; apertura directa HTTP 403. No se atribuye lectura directa o versión operativa actual. |
| [Microsoft Learn: métricas](https://learn.microsoft.com/en-us/azure/databricks/machine-learning/model-serving/what-is-load-test) | Tabla Load testing concepts and definitions. Se reutiliza consulta real abierta del 27-10-2026; no se adopta proporcionalidad universal entre tasa y latencia. |

Límites conceptuales preservados:

- **ISA y taxonomía.** Los documentos históricos dan contraejemplos verificables, no se presentan como especificaciones actuales. ISA no determina cada técnica interna. Flynn se aplica al nivel considerado; SISD no impone una instrucción terminada por ciclo, MISD raro no es inexistente y ejecutar un mismo programa en varios procesos no basta para afirmar SIMD.
- **Memoria y sincronización.** ccNUMA puede compartir espacio y mantener coherencia, sin hacer atómica una actualización del programa. Un nodo no equivale necesariamente a socket con CPU y memoria propios. Afinidad manual e intercalado se evalúan según carga; no se prescribe una política universal. El caso de contador no atribuye resultados garantizados a un lenguaje con carrera de datos: explica la necesidad de coordinación.
- **Plataformas y distribución.** Mainframe, supercomputación, clúster, grid y cloud se distinguen por orientación u organización y pueden combinarse. No se afirma que grid use solo recursos ociosos o exija organizaciones geográficamente separadas. Hay clústeres de almacenamiento y diseños mixtos; un balanceador aislado no acredita coordinación completa.
- **Medición.** Amdahl conserva tamaño fijo y reconoce costes simplificados. FLOPS requiere precisión, carga y distinción pico/medida. MIPS tiene una acepción clásica de tasa de instrucciones y también ratings de capacidad mainframe: ninguna equivale a FLOPS. Un benchmark sintético puede ser útil para su alcance y no representa automáticamente cualquier aplicación. No se recomiendan compras ni productos.

La introducción HTML de RISC-V no fue accesible y un PDF Intel V1-050 excedió el límite de tamaño de la herramienta. Se usaron el PDF histórico RISC-V y el Intel V2-050 abiertos con sus versiones exactas. Se abrió además una copia universitaria del artículo Grid: no se cuenta como respaldo independiente del original enlazado por Globus. Documentación histórica Red Hat mostró límites de productos concretos y no se usó como política actual. Tampoco se adoptan pasajes generales imprecisos de LLNL sobre CPU/sockets, garantías de disponibilidad o escalado de IBM, ni cuotas de mercado.

En el cotejo final se corrigió la paginación impresa de RISC-V 2.2 y se añadió respaldo específico de magnitudes y MIPS, con su límite HTTP 403. El registro conserva el hash previo y los tres IDs afectados. No cambiaron enunciados, alternativas, claves o versiones de partida; se ampliaron referencias y la explicación individual de MIPS.

## Métricas antes y propuesta

Análisis 2.0.0 sobre las 20 preguntas en simulación.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 14 | 8 |
| Acierto por primera alternativa de longitud máxima | 14/20 (70 %) | 8/20 (40 %) |
| Ratio correcta/distractor máximo de 1,5–<2 | 9 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 20 | 0 |
| Feedback correcto e incorrecto idénticos | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 1 | 2 |
| Explicación individual de tres distractores | 0 | 20 |

La correcta sigue siendo única más larga en ocho preguntas. Las formulaciones se conservan cuando su extensión responde al contenido; no se rellenan distractores ni se cambian claves para ajustar letras o una métrica. La ausencia de alertas graduales no acredita calidad pedagógica, aceptación del propietario ni calibración estadística.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-019.json --render docs/GSI_REVISION_LOTE_019.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

La simulación debe modificar exactamente las 20 manuales propuestas, sin escrituras activas. Se verifican hashes, claves, IDs, procedencia, campos históricos de fuente, 60 explicaciones individuales y reproducción de la ficha. Una aceptación ausente o el recibo del piloto no deben autorizar el lote.

No cambian código ni bancos activos. No se repite la suite HTTP completa para propuestas inactivas ni se atribuye al lote una ejecución nueva del piloto. Entrenamiento, Simulacros, estadísticas y Refuerzo siguen consumiendo las versiones activas. Para revisar el hito, abrir la ficha y contrastar alternativas y explicaciones con sus localizadores, incluido el método indexado de la fuente MIPS.

Resultado: **17 pruebas editoriales superadas**, **41 JSON y 21 esquemas validados**, **1.964 estructuras de pregunta válidas** y **19.251 controles de integridad correctos**. Documentación sincronizada. El validador de referencias cubrió cuatro bloques, 57 temas y 37 Markdown del catálogo; la comprobación adicional verificó **45 enlaces locales** entre ficha, informe y plan. No acredita acceso HTTP a todas las fuentes ni aceptación editorial nueva.

La simulación confirmó exactamente **20 cambios manuales**, cero IA y cero oficiales, sin escrituras activas. Se comprobaron las 60 explicaciones individuales, las cuatro formulaciones conservadas, IDs y claves de las 1.964 preguntas, procedencia, campos históricos de fuente y reproducción de ficha. Los **76 archivos protegidos** de bancos, base, aceptación y entregas anteriores mantienen sus hashes. Las oficiales son idénticas byte a byte al commit actual y a la base auditada; manuales e IA conservan el contenido del commit actual. Los tres informes derivados mantienen contenido y fecha existentes al iniciar la preparación.

Se rechazaron una aceptación vacía y el recibo real del piloto frente al lote 019. No hay aceptaciones de los lotes 002–019 y el historial conserva un único lote aplicado. `git diff --check` y la comprobación de espacios finales de los cuatro artefactos nuevos fueron correctos. Todos los validadores del proyecto ejecutados para este lote terminaron con código 0. Los fallos de acceso y límites de fuentes descritos arriba se conservan como tales; no se convierten en éxitos de lectura directa. El estado técnico histórico de las preguntas activas no acredita su nueva revisión editorial ni calibración.

## Entrega y continuidad

Creados: `content/question-reviews/lote-019.json`, `docs/GSI_REVISION_LOTE_019.md`, este informe y `logs/gsi-editorial-019-preparation.json`. Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los informes derivados de cobertura, validación final y revisión histórica se regeneran contrastando contenido y fecha existentes de 27-10-2026.

El lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 360 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, de las que **1.382** aún no tienen propuesta. Los lotes 002–019 reúnen 113 incidencias IA originales, otras 54 IA y 193 manuales. Las 128 incidencias originales mantienen 15 aplicadas y 113 propuestas pendientes; preparar no equivale a resolver editorialmente.

Sin conversiones documentales ni nuevas conversiones pendientes en este hito. Originales, oficiales y entregas anteriores permanecen protegidos. No se crea commit, publicación o fusión de propuestas pendientes. El siguiente lote continuará por bloque y tema. El cierre exige decisión individual del propietario sobre los 1.762 IDs y comprobación de versiones activas, distinguiendo preparación, aceptación humana y calibración todavía no realizada.
