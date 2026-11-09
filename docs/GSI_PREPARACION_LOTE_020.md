# Preparación del lote GSI-EDITORIAL-020

Fecha: **27-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico:

`2570edc7c1c3959fa68a957341f86ed7ef55843e26f344589e3b211078b0d7e2`

La [ficha antes/después](GSI_REVISION_LOTE_020.md) contiene las 20 preguntas y explicaciones. El [JSON](../content/question-reviews/lote-020.json) conserva versiones de partida, hashes, motivos, fuentes y rúbrica del preparador. El [registro técnico](../logs/gsi-editorial-020-preparation.json) distingue preparación de aceptación humana. La aprobación del piloto no autoriza aplicar este lote.

## Alcance y decisiones individuales

Posiciones **381–400** de `review_order`: **20 manuales de B2-T01**. No incluye IA ni oficiales. Se mantienen conceptos, IDs, claves, fuentes históricas, procedencia y dificultad orientativa.

**MAN-GSI-P17-041, 051 y 060** conservan literalmente enunciado y alternativas. Se registran como `revise` porque las explicaciones y referencias requieren aceptación propia. Hay **14 conceptuales y seis aplicaciones**, por su utilidad en cada concepto, sin cuota obligatoria por lote.

| ID | Modalidad | Decisión propuesta y contraste individual |
| --- | --- | --- |
| MAN-GSI-P17-038 | Aplicación | Simulación ya distribuida entre nodos: HPC coordinado frente a SMP, almacenamiento y granja transaccional. |
| MAN-GSI-P17-039 | Aplicación | Perfil bancario transaccional, continuidad y E/S: mainframe sin prescripción comercial o exclusividad. |
| MAN-GSI-P17-040 | Conceptual | Granularidad demasiado fina: coordinación frente a trabajo útil; comparar agrupación, localidad y balanceo. |
| MAN-GSI-P17-041 | Conceptual | Conservar enunciado y opciones; scale up y distinción respecto de añadir, retirar y redistribuir tráfico. |
| MAN-GSI-P17-042 | Conceptual | Scale out: aumentar número de unidades frente a up, down e in, sin rendimiento lineal garantizado. |
| MAN-GSI-P17-043 | Conceptual | Elasticidad: crecer y reducir con demanda; automatización frecuente, sin exigirla en cada ajuste. |
| MAN-GSI-P17-044 | Conceptual | Capacidad de escalar frente a adaptación dinámica, sin restringir vertical/horizontal a cada concepto. |
| MAN-GSI-P17-045 | Conceptual | Objetivo más directo de HA frente a backup, reconstrucción DR y elasticidad; reconocer alcance y riesgos. |
| MAN-GSI-P17-047 | Aplicación | Dos servidores con un balanceador único: identificar dependencia común aunque existan réplicas. |
| MAN-GSI-P17-048 | Conceptual | RTO objetivo de recuperación frente a RPO, retención y media de reparación; distinguir MTD. |
| MAN-GSI-P17-049 | Aplicación | Ventana de 15 minutos: punto o pérdida de cambios admisible, sin confundirlo con plazo de restauración. |
| MAN-GSI-P17-051 | Conceptual | Conservar enunciado y opciones; hosted/type 2 frente a bare metal, runtime de contenedores y extensión de CPU. |
| MAN-GSI-P17-052 | Conceptual | VM de sistema en marcha: hardware virtual, invitado y aplicaciones frente a host, contenedor e imagen; excluir JVM del alcance. |
| MAN-GSI-P17-053 | Conceptual | Kernel invitado frente a compartido en contenedores de procesos; admitir contenedores dentro de VM y otras formas de aislamiento. |
| MAN-GSI-P17-054 | Conceptual | Exceso permanente: coste e infrautilización, reconociendo reservas justificadas para picos o fallos. |
| MAN-GSI-P17-055 | Conceptual | Insuficiencia: saturación y colas; no atribuir a menos recursos una menor demanda entrante automática. |
| MAN-GSI-P17-056 | Aplicación | Sesión en RAM de una réplica: estado recuperable/compartido frente a afinidad, mismo código o copia de discos. |
| MAN-GSI-P17-059 | Aplicación | Borrado propagado a réplicas sanas: disponibilidad no conserva necesariamente el estado anterior recuperable. |
| MAN-GSI-P17-060 | Conceptual | Conservar enunciado y diseños; continuidad por capas, pruebas y objetivos, sin prometer eliminar todo riesgo. |
| MAN-GSI-P17-061 | Conceptual | Autoservicio NIST frente a SLA uniforme, hardware exclusivo y provisión manual; cuatro rasgos breves comparables. |

Cada pregunta incluye explicación de la correcta y tres justificaciones individuales asociadas a los IDs originales. Se refieren al contenido para funcionar con cualquier orden visible. Ninguna clave cambia ni necesita reemplazo.

## Fuentes y alcance de comprobación

Las **15 URLs primarias distintas se abrieron**. Las referencias completas, localizadores, versiones y fecha real **27-10-2026** constan por pregunta. Cornell, LLNL, IBM mainframe y NIST SP 800-145 reutilizan el contraste realizado el mismo día durante el lote 019; las nuevas fuentes se abrieron en esta preparación. No se declara revisión independiente del propietario.

| Respaldo | Versión y localizador empleado |
| --- | --- |
| [Cornell: Clusters](https://cvw.cac.cornell.edu/parallel/hpc/clusters) y [HPC](https://cvw.cac.cornell.edu/parallel/hpc/high-performance-computing) | Definición, nodos, interconexión y orientación de cálculo. No se adoptan cifras históricas como actuales. |
| [LLNL: Parallel Computing](https://hpc.llnl.gov/documentation/tutorials/introduction-parallel-computing-tutorial) | Versión 16-06-2026. Parallel Computers, Distributed Memory / Message Passing y Granularity: coordinación, comunicación y trabajo útil. |
| [IBM: Mainframe](https://www.ibm.com/think/topics/mainframe) | Publicado 08-04-2024, actualizado 03-09-2026. Definición, transacciones, E/S, continuidad y aislamiento. Sin cuotas de mercado o recomendación de compra. |
| [Microsoft: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) | Actualización 11-10-2026. Vertical/horizontal, instrumentación, decisiones, límites y retirada segura. |
| [Microsoft: Design to scale out](https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/scale-out) | Actualización 23-09-2024. Avoid instance stickiness e Identify bottlenecks: estado local, tráfico y dependencias. |
| [Microsoft: Continuidad, HA y DR](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery) | Actualización 01-06-2026. High availability, Fault tolerance, Scalability and elasticity, Backups y Testing and drills. |
| [Microsoft: Redundancia por capas](https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy) | Actualización 09-09-2025. RE:05, Definitions y recomendaciones de cómputo, datos, red y DNS. |
| [Microsoft: Réplicas y copias](https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup) | Definiciones, Redundancy considerations, Replication: Redundancy for data, ejemplo de borrado y Backup vs. replication. |
| [NIST SP 800-34 Rev. 1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf) y [ficha oficial](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) | Mayo 2010; ficha registra actualización 11-11-2010 y enlaza el PDF. 3.2.1, p. impresa 17: RTO/RPO/MTD; 3.4.1–2, pp. 20–21: backup; 3.5.1, pp. 27–28: pruebas; 5.1.6, p. 48, PDF 62: HA, SPOF y propagación de corrupción. |
| [Oracle VirtualBox: Introduction](https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/Introduction.html) | Guía rama 7.2. Components, Portability y Virtual Hardware: host/guest y hosted/type 2 frente a bare metal/type 1. |
| [Docker: What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/) | Containers versus virtual machines y Using VMs and containers together: procesos, kernel y contenedores dentro de VM. |
| [AWS PERF02-BP04](https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/perf_compute_hardware_configure_and_right_size_compute_resources.html) | Página latest sin versión documental indicada. Anti-patterns e Implementation guidance: perfil, exceso/insuficiencia, monitorización, pruebas y reevaluación. |
| [NIST SP 800-145](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) | Septiembre 2011, errata 27-04-2012. Sección 2, pp. impresas 2–3: cinco características, en particular autoservicio y elasticidad rápida. |

Matices y límites preservados:

- **Escalado.** Añadir unidades no elimina cuellos en datos o dependencias ni garantiza continuidad. Scale up puede implicar interrupción según el servicio, sin ser regla universal. Elasticidad crece y reduce; NIST contempla automatización en algunos casos. La apariencia de capacidad ilimitada no significa recursos infinitos.
- **Continuidad.** HA, DR y backup cubren riesgos complementarios y pueden solaparse según el diseño. No se adopta el ejemplo de 99,999 % de NIST 800-34 como umbral universal ni promesas generales de cero interrupciones de ejemplos activo/activo. Las obligaciones estadounidenses citadas en esa guía no se trasladan a España.
- **Objetivos y datos.** RTO es objetivo, no media observada; RPO es punto de datos recuperable, no duración de reparación. Retención y frecuencia de copias no acreditan automáticamente cumplimiento. Algunas soluciones de replicación incluyen historial/versionado; no se afirma que toda réplica lo prohíba. La copia debe ser íntegra, accesible y probada.
- **Virtualización.** Se pregunta VM de sistema, no VM de proceso como JVM. La comparación de contenedores se acota al aislamiento de procesos convencional. Su kernel anfitrión puede ser el de una VM; no se universaliza a microVM o aislamiento Hyper-V. No se prometen aislamiento absoluto, portabilidad universal o tamaño siempre menor.
- **Capacidad y sesiones.** Una reserva para picos o failover puede estar justificada; infrautilización aislada no prueba exceso. El estado externo también necesita consistencia, capacidad y disponibilidad. Copiar código o discos no recupera automáticamente una sesión guardada únicamente en RAM.

Las páginas Microsoft muestran una advertencia genérica sobre autorización, pero devolvieron el cuerpo público de los apartados utilizados; no se accedió a cuentas o contenido privado. Se usan principios, sin adoptar precios, versiones operativas, límites de producto o afirmaciones comerciales no necesarias. No se ejecutan instalaciones ni operaciones en servicios externos.

El cotejo final corrigió el localizador HA/SPOF a **5.1.6, p. impresa 48**, y precisó el alcance de la pregunta sobre HA. Otra revisión compactó los cuatro rasgos cloud y precisó scale out para evitar pistas inversas de longitud. El registro conserva los dos hashes previos y los IDs afectados. No cambiaron claves, versiones de partida o procedencia.

## Métricas antes y propuesta

Análisis 2.0.0 de las 20 preguntas, en simulación.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 13 | 3 |
| Acierto por primera alternativa de longitud máxima | 13/20 (65 %) | 3/20 (15 %) |
| Ratio correcta/distractor máximo de 1,5–<2 | 6 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 20 | 0 |
| Feedback correcto e incorrecto idénticos | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 2 | 2 |
| Explicación individual de tres distractores | 0 | 20 |

Como revisión adicional del lote se examinó también si la correcta resultaba llamativamente corta. Se precisaron scale out y los rasgos NIST, sin añadir relleno. La heurística de primera alternativa de longitud mínima acierta **6/20 (30 %)** en la propuesta. Se conserva la asimetría de la pregunta de hipervisor: la correcta define hosted de forma breve y los distractores delimitan otros componentes para evitar respuestas parcialmente defendibles. Es una justificación del preparador, no aceptación humana.

La correcta sigue siendo única más larga en tres preguntas. No se cambian claves ni se reparte artificialmente la respuesta por letras o longitudes. La ausencia de alertas del analizador no certifica calidad pedagógica ni calibración estadística.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-020.json --render docs/GSI_REVISION_LOTE_020.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

La simulación debe modificar exclusivamente las 20 manuales propuestas, sin escribir bancos activos. Se verifican hashes, claves, IDs, procedencia, campos históricos de fuente, 60 explicaciones individuales y reproducción de ficha. Una aceptación ausente o el recibo del piloto no deben autorizar este lote.

No cambian código ni bancos activos. No se repite la suite HTTP completa para propuestas inactivas ni se atribuye al lote una ejecución nueva del piloto. Entrenamiento, Simulacros, estadísticas y Refuerzo siguen consumiendo las versiones activas. Para revisar, abrir la ficha y contrastar cada alternativa y explicación con los localizadores indicados antes de una aprobación expresa por hash.

Resultado: **17 pruebas editoriales superadas**, **42 JSON y 21 esquemas validados**, **1.964 estructuras de pregunta válidas** y **19.251 controles de integridad correctos**. Documentación sincronizada. El validador de referencias cubrió cuatro bloques, 57 temas y 37 Markdown del catálogo; una comprobación adicional verificó **47 enlaces locales** de ficha, informe y plan. Los validadores no sustituyen la lectura de fuentes ni acreditan aceptación editorial nueva.

La simulación confirmó exactamente **20 cambios manuales**, cero IA y cero oficiales, sin escrituras activas. Se comprobaron 60 explicaciones individuales, las tres formulaciones conservadas, IDs y claves de las 1.964 preguntas, procedencia, campos históricos de fuente y reproducción de ficha. Los **80 archivos protegidos** de bancos, base, aceptación y entregas anteriores mantienen sus hashes. Las oficiales son idénticas byte a byte al commit actual y a la base auditada; manuales e IA conservan el contenido del commit actual. Los tres informes derivados mantienen contenido y fecha existentes al iniciar la preparación.

Se rechazaron una aceptación vacía y el recibo real del piloto frente al lote 020. No hay nuevas aceptaciones para los lotes 002–020 y el historial conserva un único lote aplicado. `git diff --check` y la comprobación de espacios finales de los cuatro artefactos nuevos fueron correctos. Todos los validadores del proyecto ejecutados para este lote terminaron con código 0. Las precisiones de localizadores y de longitud se conservan con sus hashes previos; no hubo fallos técnicos de validación ocultos ni se atribuye al estado técnico histórico aceptación humana o calibración.

## Entrega y continuidad

Creados: `content/question-reviews/lote-020.json`, `docs/GSI_REVISION_LOTE_020.md`, este informe y `logs/gsi-editorial-020-preparation.json`. Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los informes derivados de cobertura, validación final y revisión histórica se regeneran contrastando contenido y fecha existentes de 27-10-2026.

El lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 380 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, de las que **1.362** aún no tienen propuesta. Los lotes 002–020 reúnen 113 incidencias IA originales, otras 54 IA y 213 manuales. Las 128 incidencias originales mantienen 15 aplicadas y 113 propuestas pendientes; preparar no equivale a resolver editorialmente.

Sin conversiones documentales ni nuevas conversiones pendientes en este hito. Originales, oficiales y entregas anteriores permanecen protegidos. No se crea commit, publicación o fusión de propuestas pendientes. El siguiente lote seguirá por bloque y tema. El cierre exige decisión individual del propietario para los 1.762 IDs y comprobación de versiones activas, distinguiendo preparación, aceptación humana y calibración todavía no realizada.
