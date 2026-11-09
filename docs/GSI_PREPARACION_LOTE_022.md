# Preparación del lote GSI-EDITORIAL-022

Fecha: **27-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico:

`bd9206bdd1057b8968b6e21830e10ecb84a0ce258cee19693726ab8c86596475`

La [ficha antes/después](GSI_REVISION_LOTE_022.md) contiene las 20 preguntas. El [JSON](../content/question-reviews/lote-022.json) conserva instantáneas, hashes, motivos, referencias y rúbrica del preparador. El [registro técnico](../logs/gsi-editorial-022-preparation.json) distingue preparación y aceptación humana. La aprobación del piloto no autoriza este lote.

## Alcance y decisiones individuales

Posiciones **421–440** de `review_order`: **seis manuales B2-T01 y catorce B2-T02**. Se mantienen concepto, ID, clave, procedencia, campos de fuente histórica y dificultad orientativa. No incluye preguntas IA ni oficiales.

Se conservan literalmente enunciado y cuatro alternativas de **MAN-GSI-P17-086 y 090**. Su acción es `revise` porque se completan feedback y referencias; esa versión exige aceptación propia. Hay **15 conceptuales y cinco aplicaciones**, sin cuota impuesta por lote. Los microcasos de NUMA, failover, estado preparado, prioridades y carrera evalúan el mismo conocimiento con condiciones explícitas.

| ID | Modalidad | Motivo individual |
| --- | --- | --- |
| MAN-GSI-P17-016 | Conceptual | Conservar anchura y direccionamiento, clave B; acotar al ejemplo x86/x64 y distinguir límites efectivos, tipos y rendimiento. |
| MAN-GSI-P17-018 | Aplicación | Conservar microcaso NUMA y clave C; sustituir distractores ajenos por caché, paginación y acceso uniforme. |
| MAN-GSI-P17-046 | Conceptual | Conservar comparación HA/tolerancia y clave B; hacer explícitos alcance y solapamiento, sin una separación absoluta de etiquetas. |
| MAN-GSI-P17-050 | Conceptual | Conservar tipo 1 y clave D; comparar capas y matizar partición de gestión, sin confundir interfaz Windows con tipo 2. |
| MAN-GSI-P17-057 | Conceptual | Conservar balanceo y clave D; comparar escalado, replicación y observabilidad, sin distractores ajenos. |
| MAN-GSI-P17-058 | Aplicación | Conservar estrategia fiable de failover y clave A; contextualizar servicio con estado y distinguir requisitos completos de medios parciales. |
| MAN-GSI-P17-081 | Conceptual | Conservar función general y clave D; comparar responsabilidades de software reales y evitar firewall como único papel. |
| MAN-GSI-P17-082 | Conceptual | Conservar proceso y clave B; contrastar programa, hilo y CPU lógica, distinguiendo instancia activa de estado running. |
| MAN-GSI-P17-083 | Conceptual | Conservar hilo y clave C; precisar software, contexto propio y pila en espacio compartido. |
| MAN-GSI-P17-084 | Conceptual | Conservar comparación proceso/hilo y clave C; distinguir aislamiento por defecto, IPC y contexto propio. |
| MAN-GSI-P17-085 | Aplicación | Conservar estado ready y clave A; microcaso que distingue esperar CPU de esperar un evento. |
| MAN-GSI-P17-086 | Conceptual | Conservar literalmente enunciado y alternativas ya próximas al concepto; completar política frente a mecanismo y claves sin reescritura innecesaria. |
| MAN-GSI-P17-087 | Conceptual | Conservar FCFS y clave C; precisar cola y variante clásica, con políticas vecinas como distractores. |
| MAN-GSI-P17-088 | Conceptual | Conservar RR y clave A; matizar límite de turno y bloqueo anticipado, sin exigir consumir siempre todo el quantum. |
| MAN-GSI-P17-089 | Aplicación | Conservar riesgo de prioridades y clave B; microcaso de tarea preparada con contraste entre cuatro problemas de progreso. |
| MAN-GSI-P17-090 | Conceptual | Conservar literalmente formulación y comparación de cuatro políticas; completar supuestos, estimación y diferencia con la variante expropiativa. |
| MAN-GSI-P17-091 | Conceptual | Conservar cambio de contexto y clave B; separar cambio de modo, creación de proceso y traducción de memoria. |
| MAN-GSI-P17-092 | Conceptual | Conservar concurrencia/paralelismo y clave C; alternativas breves comparables, sin exigir distribución ni múltiples núcleos para toda concurrencia. |
| MAN-GSI-P17-093 | Aplicación | Conservar carrera y clave A; microcaso con intercalado explícito y sin suposiciones ocultas sobre atomicidad del lenguaje. |
| MAN-GSI-P17-094 | Conceptual | Conservar exclusión mutua y clave D; precisar capacidad tres para no confundir el distractor con un semáforo binario utilizable como exclusión. |

Cada pregunta incluye explicación de la correcta y tres justificaciones individuales asociadas a los IDs originales de opción. El feedback se refiere a los contenidos y admite barajado. No hay cambios de clave, reemplazos o retiradas propuestos.

## Fuentes y límites

Las **23 URLs primarias distintas se abrieron**. Veintiuna se contrastaron en esta preparación; dos conservan el contraste directo del mismo día documentado en el lote 020 (Oracle VirtualBox 7.2 y Microsoft sobre continuidad). Cada referencia conserva URL, localizador, versión o alcance y fecha real **27-10-2026**. No se atribuye revisión humana independiente.

| Fuente primaria | Localizador y alcance |
| --- | --- |
| [Microsoft: x64 architecture](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/x64-architecture) | Introducción, Registers y Addressing modes: extensión x86, registros y direccionamiento. Página consultada; ejemplo x86/x64, sin generalizar anchos efectivos o ABI a toda arquitectura. |
| [Microsoft: Virtual Address Space (Programming Guide for 64-bit Windows)](https://learn.microsoft.com/en-us/windows/win32/winprog64/virtual-address-space) | Párrafos iniciales: espacio virtual, punteros de 64 bits y limitación opcional de asignaciones. Actualización 10-12-2020; ejemplo Windows, sin fijar límites actuales de RAM física. |
| [Microsoft: NUMA Architecture](https://learn.microsoft.com/en-us/windows/win32/procthread/numa-support) | Introducción, primeros cuatro párrafos: nodos, memoria próxima/remota y localidad de planificación/asignación. Solo fundamento de localidad; no se prescribe afinidad fija ni configuración de grupos o registro. |
| [AWS: Fault tolerance and fault isolation](https://docs.aws.amazon.com/whitepapers/latest/availability-and-beyond-improving-resilience/fault-tolerance-and-fault-isolation.html) | Primeros párrafos de Fault tolerance and fault isolation; Static stability: continuidad, capacidad redundante y alcance del fallo. Whitepaper latest consultado; no se adopta una separación terminológica universal HA/FT. |
| [Microsoft Learn: Business continuity, high availability, and disaster recovery](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery) | High availability, Fault tolerance, Scalability and elasticity; Disaster recovery plans, Backups y Testing and drills: objetivos, reservas de capacidad, recuperación y pruebas. Actualización 01-06-2026; clasificación HA/DR según riesgos y carga, sin umbral universal de disponibilidad; consulta real el 27-10-2026. |
| [Oracle VirtualBox User Guide: About Oracle VirtualBox](https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/Introduction.html) | Oracle VirtualBox Components y Features, Portability y Virtual Hardware: host, guest OS, VM y hosted/type 2 frente a bare metal/type 1. Guía rama 7.2 consultada; fundamentos, no recomendación de instalación ni compatibilidades o límites operativos; consulta real el 27-10-2026. |
| [Microsoft: Hyper-V Architecture](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/architecture) | Introducción; Root and child partitions; Glossary, Hypervisor: capa sobre hardware y partición de gestión. Actualización 21-01-2026; URL final tras redirección; no se equipara partición raíz con hipervisor alojado tipo 2. |
| [AWS: What is Elastic Load Balancing?](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html) | Introducción, Load balancer benefits y Related services: reparto de tráfico, health checks y distinción de Auto Scaling. Guía latest; ejemplo ELB, sin universalizar políticas, garantías o comportamiento cuando todos los destinos fallan. |
| [Microsoft: Architecture strategies for disaster recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) | RE:09; Define disaster thresholds; Design recovery-aware architecture; Prepare infrastructure and recovery procedures; Practice with regular drills: activación, estado, dependencias, pruebas y failback. Guía en línea; se aprovechan principios operativos, sin equiparar todo failover con desastre regional ni imponer retorno inmediato. |
| [Arpaci-Dusseau: OSTEP, Introduction to Operating Systems](https://pages.cs.wisc.edu/~remzi/OSTEP/intro.pdf) | Capítulo 2, introducción pp. 1–2 y 2.5 Design Goals, p. 11: gestión, abstracciones e interfaces. PDF de autores, versión 1.10 impresa; no se infiere fecha de publicación de copyright. |
| [Arpaci-Dusseau: OSTEP, The Abstraction: The Process](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | Capítulo 4: 4.1 The Abstraction: A Process, pp. 2–3; 4.4 Process States, pp. 5–7; separación de política/mecanismo p. 3. PDF de autores, versión 1.10 impresa; modelo didáctico simplificado. |
| [Microsoft: About Processes and Threads](https://learn.microsoft.com/en-us/windows/win32/procthread/about-processes-and-threads) | Primeros cuatro párrafos: recursos del proceso, hilo planificable, contexto propio, memoria compartida y multitarea. Actualización 14-07-2025; se usan fundamentos, sin generalizar detalles de UMS o fibras. |
| [Arpaci-Dusseau: OSTEP, Concurrency: An Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf) | Capítulo 26, introducción pp. 1–2 y 26.1 Why Use Threads?, pp. 2–3; 26.4, pp. 9–10: registros, pilas, dirección compartida e intercalado. PDF de autores, versión 1.10 impresa; pilas lógicamente propias dentro del mismo espacio de direcciones. |
| [Oracle: Processes and Threads](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html) | Introducción, Processes y Threads: concurrencia con un núcleo, aislamiento habitual e intercambio de recursos. Tutorial escrito para JDK 8, advertencia expresa de antigüedad; solo conceptos de ejecución, no recomendación de versión o API actual. |
| [Microsoft: Context Switches](https://learn.microsoft.com/en-us/windows/win32/procthread/context-switches) | Introducción y lista de pasos: guardar contexto, colas preparadas, restaurar y reanudar; tareas bloqueadas. Ejemplo de Windows, sin generalizar orden de colas a todo SO. |
| [Arpaci-Dusseau: OSTEP, Mechanism: Limited Direct Execution](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf) | Capítulo 6: 6.2 Problem #1: Restricted Operations, pp. 2–7; 6.3 Problem #2: Switching Between Processes, Saving and Restoring Context, pp. 7–10: trap, decisión y cambio de contexto. PDF de autores, versión 1.10; no toda entrada al núcleo cambia de tarea. |
| [Arpaci-Dusseau: OSTEP, Scheduling: Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf) | Capítulo 7: 7.1 Workload Assumptions, pp. 1–2; 7.3 FIFO, pp. 2–4; 7.4 SJF, pp. 4–5; 7.5 STCF, pp. 5–6; 7.7 Round Robin, pp. 7–8. PDF de autores, versión 1.10; modelos y supuestos explícitos, no política vigente de un SO concreto. |
| [Microsoft: Scheduling Priorities](https://learn.microsoft.com/en-us/windows/win32/procthread/scheduling-priorities) | Introducción, tres primeros párrafos y Priority Class: reparto por turnos entre iguales y riesgo de monopolio por prioridad alta. Ejemplo Windows; no se universalizan niveles numéricos, clases o política a otros SO. |
| [Arpaci-Dusseau: OSTEP, Scheduling: The Multi-Level Feedback Queue](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-mlfq.pdf) | Capítulo 8: final de 8.2 y 8.3 Attempt #2: The Priority Boost, pp. 5–7: inanición y compensación. PDF de autores, versión 1.10; boost periódico es un ejemplo, no idéntico a toda implementación de aging. |
| [Oracle: Starvation and Livelock](https://docs.oracle.com/javase/tutorial/essential/concurrency/starvelive.html) | Starvation y Livelock: falta de acceso regular frente a actividad reactiva sin progreso. Tutorial JDK 8, con advertencia de antigüedad; conceptos, sin utilizar disponibilidad de API o versión actual. |
| [Oracle: Thread Interference](https://docs.oracle.com/javase/tutorial/essential/concurrency/interfere.html) | Counter; descomposición de incremento en lectura/modificación/escritura y ejemplo de intercalado con actualización perdida. Tutorial JDK 8, con advertencia de antigüedad; no se deduce atomicidad de todas las instrucciones o lenguajes. |
| [Arpaci-Dusseau: OSTEP, Locks](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf) | Capítulo 28: 28.1 Locks: The Basic Idea y 28.2 Pthread Locks, pp. 1–2; 28.4 Evaluating Locks, p. 3: exclusión y equidad son propiedades distintas. PDF de autores, versión 1.10; no se generalizan reglas de recursión o desbloqueo a todas las API. |
| [Microsoft: Mutex Objects](https://learn.microsoft.com/en-us/windows/win32/sync/mutex-objects) | Primeros párrafos, propiedad por un hilo y coordinación; párrafo de ausencia de garantía FIFO; mutex entre procesos. Actualización 07-01-2021; solo exclusión y alcance, sin trasladar semántica recursiva de Windows a POSIX. |

Matices de revisión:

- **Arquitectura.** x86/x64 permite concretar registros y direccionamiento sin equiparar etiqueta con bits efectivos, tipo de todo dato o doble rendimiento. NUMA diferencia distancia de acceso, caché y paginación a disco; no se prescribe fijar afinidad sin medir.
- **Continuidad y virtualización.** HA y tolerancia a fallos son objetivos relacionados con alcance de fallos definido. Se evita una garantía universal o categorías excluyentes. Una partición de gestión no convierte por sí sola Hyper-V en tipo 2. El balanceador distribuye tráfico; no replica datos ni crea instancias por definición. No se generaliza el enrutamiento a destinos sanos a toda situación posible.
- **Failover.** Se evalúan criterios de activación, estado coherente o recuperable, dependencias, pruebas y operación posterior. El retorno se prepara si procede, sin exigir volver inmediatamente al origen que falla. La guía DR aporta principios operativos y no reduce todo failover a un desastre regional.
- **Procesos e hilos.** Instancia en ejecución no implica estado running permanente. Los hilos mantienen contexto y pila propios dentro del espacio virtual compartido. Los procesos pueden compartir memoria explícitamente; aislamiento habitual no significa prohibición de IPC.
- **Planificación.** Se distingue política de selección y mecanismo de contexto. Estados, FIFO, RR y SJF son modelos explícitos, sin atribuirlos literalmente a todo SO. RR puede terminar o bloquear antes del quantum. SJF tiene supuestos de disponibilidad y duración y se distingue de SRTF/STCF; no garantiza equidad o rendimiento óptimo para cualquier carga. Boost de MLFQ es un ejemplo de compensación, sin igualarlo a toda implementación de aging.
- **Concurrencia.** Entrar al núcleo no obliga a cambiar de tarea; disponer de hilos tampoco asegura paralelismo. El ejemplo de carrera especifica lectura y escritura separadas, sin atribuir atomicidad o ausencia de ella a todo lenguaje. Un mutex requiere protocolo respetado por los accesos incompatibles; no garantiza FIFO o ausencia de deadlock. El distractor contador permite tres accesos para evitar la ambigüedad con semáforos binarios.
- **Versiones de fuentes.** OSTEP utiliza PDFs de los autores con versión impresa 1.10 y localizadores por capítulo/página. No se deduce fecha de publicación de su copyright. Los tutoriales Oracle advierten que se escribieron para JDK 8; solo se usan fundamentos, sin recomendación de versión o disponibilidad actual de API. Las fuentes Microsoft describen ejemplos de Windows, no semánticas universales de todas las plataformas.

IBM PowerHA y POSIX `pthread_mutex_lock` devolvieron 403 y no se incorporan como fuentes leídas. Dos rutas AWS ensayadas no estaban accesibles; se usa la página exacta de tolerancia y aislamiento abierta. Algunas páginas Microsoft muestran un aviso genérico de autorización pero devolvieron cuerpo público legible; no se accedió a cuentas. Estas limitaciones no se presentan como éxitos HTTP.

El cotejo final corrigió el título exacto **Practice with regular drills** en la guía DR y separó las páginas de las secciones 6.2/6.3 de OSTEP. El registro conserva el hash anterior y los tres IDs afectados. No cambiaron enunciados, alternativas, claves, feedback o versiones de partida durante este refinamiento de localizadores.

## Métricas de la propuesta

Análisis 2.0.0 sobre las 20 preguntas, sin modificar bancos activos.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 12 | 6 |
| Aciertos al elegir la primera alternativa de longitud máxima | 12 | 7 |
| Ratio correcta/distractor máximo 1,5–<2 | 5 | 0 |
| Ratio ≥2 | 1 | 0 |
| Feedback correcto menor de 15 palabras | 14 | 0 |
| Feedback correcto e incorrecto idénticos | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 0 | 2 |
| Explicación individual de tres distractores | 0 | 20 |

La heurística de primera alternativa de longitud máxima pasa del **60 % al 35 %**; la de longitud mínima acierta **4/20 (20 %)** en la propuesta. Las seis respuestas únicas más largas conservan extensión necesaria y alternativas comparables. No se añade relleno ni se cambian claves para ajustar recuentos. No quedan alertas del analizador; esto no certifica calidad pedagógica, calibración o aprobación.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-022.json --render docs/GSI_REVISION_LOTE_022.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

Resultado: **17 pruebas editoriales superadas**, **44 JSON y 21 esquemas validados**, **1.964 estructuras de pregunta válidas** y **19.251 controles de integridad correctos**, sin errores técnicos. Documentación sincronizada. El validador de referencias cubrió cuatro bloques, 57 temas y 37 Markdown del catálogo; una comprobación adicional verificó **51 enlaces locales** entre ficha, informe y plan.

La simulación confirmó exactamente **20 cambios manuales**, cero IA y cero oficiales, sin escrituras activas. Se comprobaron 60 explicaciones individuales, las dos formulaciones conservadas, todos los IDs y claves, procedencia, campos históricos de fuente y reproducción de ficha. Los **88 archivos protegidos** de bancos, base, aceptación y entregas anteriores conservan sus hashes. Las oficiales son idénticas byte a byte al commit actual y a la base auditada; manuales e IA mantienen el contenido del commit actual. Los tres informes derivados conservan contenido y fecha existentes al iniciar esta preparación.

Se rechazaron una aceptación vacía y el recibo real del piloto frente al lote 022. No hay aceptaciones nuevas para 002–022 y el historial conserva un único lote aplicado. `git diff --check` y la comprobación de espacios finales de los cuatro artefactos nuevos fueron correctos. El cierre editorial completo continúa pendiente; cero errores técnicos no equivale a aprobar las preguntas.

Todos los validadores del proyecto ejecutados para el lote terminaron con código 0. El primer helper temporal de refinamiento omitió un argumento de simulación y falló con `TypeError` antes de escribir; se corrigió y pasó. El generador temporal del informe emitió advertencias por escapes de rutas PowerShell, aunque produjo las rutas correctas; se corrigieron sus literales para uso futuro. El registro conserva esas incidencias auxiliares y los límites externos de fuentes. No se alteró contenido pedagógico para satisfacer comprobaciones.

No cambian código ni bancos activos; no se repite la suite HTTP completa para propuestas inactivas. Entrenamiento, Simulacros, estadísticas y Refuerzo siguen consumiendo las versiones activas. Los resultados históricos del piloto no se presentan como ejecución nueva de este lote. Para revisar, leer la ficha y contrastar cada alternativa y explicación con sus fuentes antes de aprobar expresamente el hash.

## Entrega y continuidad

Creados: `content/question-reviews/lote-022.json`, `docs/GSI_REVISION_LOTE_022.md`, este informe y `logs/gsi-editorial-022-preparation.json`. Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los tres informes derivados de cobertura, validación final y revisión histórica se regeneran contrastando su contenido y fecha ya existentes del 27-10-2026.

El lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 420 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, de las que **1.322** aún no tienen propuesta. Los lotes 002–022 reúnen 113 incidencias IA originales, otras 54 IA y 253 manuales. Las 128 incidencias originales conservan 15 aplicadas y 113 propuestas pendientes; preparación no equivale a resolución editorial.

Sin conversiones documentales ni conversiones nuevas pendientes. Los originales, oficiales y entregas anteriores permanecen protegidos. No se crea commit, publicación o fusión de propuestas pendientes. El siguiente lote continúa por bloque y tema. El cierre exige decisión individual del propietario sobre los 1.762 IDs y comprobación de versiones activas; la calibración estadística continúa sin realizar.
