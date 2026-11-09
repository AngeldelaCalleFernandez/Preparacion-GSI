# Preparación del lote GSI-EDITORIAL-030

Preparado el **28-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico: `e858e9ae85a40d602f5380c9eaf4a727b7e84004238b5c9e22d0379c904db59d`.

La [ficha antes/después](GSI_REVISION_LOTE_030.md), el [JSON de propuestas](../content/question-reviews/lote-030.json) y el [registro técnico](../logs/gsi-editorial-030-preparation.json) conservan versiones, cambios, motivos, fuentes y hashes. La aprobación del piloto no autoriza este contenido.

## Alcance y decisiones individuales

Posiciones **581–600** de `review_order`: **20 IA**, catorce de **B2-T07** y seis de **B2-T08**. Se conservan concepto, ID, clave, procedencia original, campos históricos y dificultad orientativa. Las veinte decisiones nuevas son `pending_review`.

Se mantienen íntegros enunciados y alternativas de **AI-GSI-B2-T07-013**, **AI-GSI-B2-T08-002** y **AI-GSI-B2-T08-003**, sobre DaemonSet, red OSI y transporte. Se completa explicación y respaldo; `revise` identifica las nuevas versiones de feedback y fuentes, que requieren aceptación propia. No hay retiradas ni reemplazos.

Hay **13 conceptuales y siete aplicaciones**, sobre exposición canary, reintentos ante saturación, credenciales de construcción, monolito modular, readiness, aprendizaje de MAC y siguiente salto ARP. Estos casos aportan condiciones útiles; no se fuerza una cuota por lote a partir de la orientación global 70/30.

| ID | Modalidad | Motivo individual |
| --- | --- | --- |
| AI-GSI-B2-T07-013 | Conceptual | Conservar literalmente enunciado y alternativas ya bien delimitadas, con clave D; completar nodos elegibles, ciclo de vida y tres responsabilidades distintas. |
| AI-GSI-B2-T07-014 | Conceptual | Conservar identidad estable y clave D; comparar cuatro controladores reales sin el distractor largo de garantía universal. |
| AI-GSI-B2-T07-015 | Conceptual | Conservar acceso estable y clave B; acotar a ClusterIP con selector para no universalizar una IP virtual a headless o Services sin selector. |
| AI-GSI-B2-T07-017 | Conceptual | Conservar planificación frente a consumo y clave A; comparar responsabilidades próximas y explicar aplicación distinta de CPU y memoria. |
| AI-GSI-B2-T07-018 | Aplicación | Conservar canary y clave B; precisar exposición real y validación progresiva, sin afirmar que blue/green nunca admita porcentajes. |
| AI-GSI-B2-T07-019 | Conceptual | Conservar escala horizontal y clave C; distinguir objetivo de réplicas de ejecución efectiva, recursos verticales y nodos. |
| AI-GSI-B2-T07-020 | Aplicación | Conservar amplificación de carga y clave D; caso de clientes saturando un servicio y cuatro modelos causales, sin pistas de tres beneficios frente a un riesgo. |
| AI-GSI-B2-T07-003 | Aplicación | Conservar credenciales fuera de capas y clave C; microcaso de construcción con alternativas reales de ARG, capas, mounts y ENV. |
| AI-GSI-B2-T07-005 | Conceptual | Conservar kernel compartido y clave C; distinguir host del runtime de máquina física y no convertir el modelo usual en afirmación sobre todo sandbox. |
| AI-GSI-B2-T07-006 | Conceptual | Conservar capacidades cohesionadas y clave A; contrastar dominio con capas, funciones y tablas sin una receta universal de tamaño. |
| AI-GSI-B2-T07-007 | Aplicación | Conservar alternativa de monolito modular y clave B; concretar unidad de despliegue y límites deseados para evitar varias recomendaciones defendibles. |
| AI-GSI-B2-T07-008 | Conceptual | Conservar acoplamiento de esquema/despliegue y clave C; distinguir tablas compartidas de servidor físico común y evitar prescribir otra arquitectura a la aplicación. |
| AI-GSI-B2-T07-011 | Conceptual | Conservar unidad con contenedores y clave C; explicar red común, co-localización y montaje explícito de volúmenes sin afirmar que toda raíz sea compartida. |
| AI-GSI-B2-T07-016 | Aplicación | Conservar readiness y clave C; caso posterior al arranque, diferenciando disponibilidad de aplicación, nodo y reinicio y sin prometer bloqueo de todo tráfico. |
| AI-GSI-B2-T08-002 | Conceptual | Conservar literalmente enunciado y alternativas, con clave C; completar mapeo funcional de IP frente a modelo OSI y tres funciones de capas distintas. |
| AI-GSI-B2-T08-003 | Conceptual | Conservar literalmente pregunta y alternativas, con clave D; precisar puertos lógicos de TCP/UDP, su mapeo funcional y diferencia con conectores. |
| AI-GSI-B2-T08-004 | Conceptual | Conservar representación de cuatro capas y clave C; alternativas de un mismo modelo y mapeo explícitamente didáctico, retirando el exclusivamente de una opción. |
| AI-GSI-B2-T08-005 | Aplicación | Conservar asociación MAC/puerto y clave C; caso de aprendizaje que distingue MAC origen/destino, VLAN y puerto físico frente a puerto TCP. |
| AI-GSI-B2-T08-006 | Conceptual | Conservar dominios de difusión y clave B; distractores próximos de colisión, nombres y transporte, sin prometer aislamiento completo. |
| AI-GSI-B2-T08-007 | Aplicación | Conservar resolución IPv4/MAC local y clave C; microcaso del siguiente salto que evita buscar una MAC remota a través de routers. |

Cada versión tiene explicación de la correcta y tres justificaciones concretas de errores, asociadas a los IDs originales de opción y referidas al contenido. La revisión conceptual por ID es del preparador. Las aceptaciones históricas IA y sus hashes no se trasladan a la nueva versión. Los borradores, su evidencia y el banco publicado permanecen intactos.

## Fuentes y fechas

Se abrieron **31 URLs primarias distintas el 28-10-2026**, con localizador, versión o alcance y fecha real. Se distinguen modelo normativo OSI, arquitectura TCP/IP, documentación de implementación y análisis de sus autores. No se presenta una correspondencia didáctica como identidad normativa entre protocolos.

| Fuente | Comprobación | Localizador y versión o alcance |
| --- | --- | --- |
| [Kubernetes: DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/) | 2026-10-28 | Introducción; Running Pods on select Nodes; How Daemon Pods are scheduled: un Pod por nodo elegible. Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor. |
| [Kubernetes: Jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/) | 2026-10-28 | Introducción: trabajo finito, terminaciones satisfactorias y límites de reintento. Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor. |
| [Kubernetes: ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/) | 2026-10-28 | Introducción y ConfigMaps and Pods: configuración no confidencial, no controlador de ejecución. Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor. |
| [Kubernetes: Service](https://kubernetes.io/docs/concepts/services-networking/service/) | 2026-10-28 | Introducción; Defining a Service; Service type; Headless Services: red, selector y endpoints. Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor. |
| [Kubernetes: StatefulSets](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/) | 2026-10-28 | Introducción; Using StatefulSets; Limitations; Pod Identity: identidad estable, ordinal y almacenamiento según configuración. Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor. |
| [Kubernetes: Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) | 2026-10-28 | Introducción y Strategy, Recreate Deployment y Rolling Update Deployment: réplicas intercambiables y sustitución. Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor. |
| [Kubernetes: ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/) | 2026-10-28 | How a ReplicaSet works; When to use a ReplicaSet: selector y número de réplicas, relación con Deployment. Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor. |
| [Docker Docs: What is an image?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/) | 2026-10-28 | Introducción y principios de capas e inmutabilidad. Se distingue retirar un archivo en una capa posterior de eliminarlo de las capas anteriores distribuidas. |
| [Kubernetes: Resource Management for Pods and Containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) | 2026-10-28 | Requests and limits; How Pods with resource requests are scheduled; How Kubernetes applies resource requests and limits: CPU y memoria. Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor. |
| [Google Cloud Deploy: Use a canary deployment strategy](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary) | 2026-10-28 | What is a canary deployment?; Why use a canary deployment strategy?; Phases of a canary deployment. Documentación web; principio de exposición parcial progresiva con tráfico real, sin ejecutar un despliegue o adoptar porcentajes del ejemplo como regla. |
| [Istio: Mirroring](https://istio.io/latest/docs/tasks/traffic-management/mirroring/) | 2026-10-28 | Mirroring traffic: duplicación fire and forget, respuestas descartadas y porcentaje de copia. Rama latest; distinción conceptual de shadowing y canary, sin ejecutar comandos ni asumir que el tráfico copiado carece de efectos. |
| [Kubernetes: Horizontal Pod Autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/) | 2026-10-28 | Introducción; How does a HorizontalPodAutoscaler work?: escala deseada del recurso objetivo según métricas y límites configurados. Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor. |
| [AWS Builders Library: Timeouts, retries, and backoff with jitter](https://builder.aws.com/content/3EumjoZascWd1oZiEgL8ORlv3qE/timeouts-retries-and-backoff-with-jitter) | 2026-10-28 | Introduction; Retries and backoff; Jitter: carga adicional, efectos repetidos y dispersión de intentos. URL final tras redirección de Builders Library; no se afirma que timeout implique cancelación o que reintentar siempre sea seguro. |
| [Microsoft Azure Architecture Center: Retry pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry) | 2026-10-28 | Solution; Issues and considerations: clasificación de fallos, espera, máximo de intentos e idempotencia. Solo recuperación frente a fallos transitorios; no es garantía de éxito ante fallo permanente. |
| [Microsoft Azure Architecture Center: Circuit Breaker pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker) | 2026-10-28 | Context and problem; Solution: suspensión de llamadas y relación con Retry. Circuit breaker no es una consecuencia automática de timeout o reintento; patrón de control adicional. |
| [Docker Docs: Build secrets](https://docs.docker.com/build/building/secrets/) | 2026-10-28 | Introducción; Secret mounts; SSH mounts: exposición temporal y límites de ARG/ENV. Documentación web de construcción; montar no impide que un comando copie el secreto a una capa o lo filtre por logs. |
| [Docker Docs: What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/) | 2026-10-28 | Containers versus virtual machines: proceso aislado, kernel compartido y contraste con sistema invitado. Modelo usual de contenedores de procesos; host del runtime puede ser una VM y compartir kernel no significa compartir memoria o red sin aislamiento. |
| [Microsoft Azure Architecture Center: Use domain analysis to model microservices](https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis) | 2026-10-28 | Introducción; Analyze the domain; Define bounded contexts: cohesión, capacidades y límites del modelo. No hay algoritmo mecánico ni obligación de un servicio por tabla, función o bounded context; no se impone microservicios al proyecto. |
| [Martin Fowler: Monolith First](https://martinfowler.com/bliki/MonolithFirst.html) | 2026-10-28 | Argumentos de complejidad operativa, dominio y fronteras; párrafos sobre modularidad y objeciones a monolith-first. Publicado 2015; análisis primario del autor, con evidencia limitada y posiciones no unánimes. No se presenta como ley universal o promesa de extracción sencilla. |
| [Microsoft Azure Architecture Center: Data considerations for microservices](https://learn.microsoft.com/en-us/azure/architecture/microservices/design/data-considerations) | 2026-10-28 | Introducción: cambio de esquema y coordinación; párrafo sobre compartir servidor físico; Challenges. Solo riesgo de acceso directo al esquema o tablas comunes; compartir servidor físico no implica necesariamente compartir el contrato de datos. |
| [Kubernetes: Pods](https://kubernetes.io/docs/concepts/workloads/pods/) | 2026-10-28 | Introducción; How Pods manage multiple containers; Pods and shared resources: red, almacenamiento y co-localización. Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor. |
| [Kubernetes: Liveness, Readiness, and Startup Probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/) | 2026-10-28 | Liveness probe; Startup probe; Readiness probe; When to use each probe: arranque, reinicio y tráfico de Service. Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor. |
| [ITU-T X.200 / ISO/IEC 7498-1: Basic Reference Model, The basic model](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I!!PDF-E&lang=e&type=items) | 2026-10-28 | 7.4 The Transport Layer, especialmente 7.4.2–7.4.4; 7.5 The Network Layer, 7.5.3.2 Network-addresses y 7.5.4.2 Routing and relaying. Recomendación X.200 de julio de 1994, PDF público enlazado por la ficha ITU, en vigor según su catálogo; modelo de referencia, no especificación de IP/TCP. |
| [IETF RFC 1122: Requirements for Internet Hosts — Communication Layers](https://www.rfc-editor.org/rfc/rfc1122.html) | 2026-10-28 | 1.1.3 Internet Protocol Suite: Application, Transport, Internet y Link; 2 Link Layer; 3 Internet Layer. STD 3, octubre de 1989; solo arquitectura y funciones básicas, sin adoptar todas sus prescripciones históricas como requisitos actuales. |
| [IETF RFC 9293: Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293.html) | 2026-10-28 | 3.1 Header Format: Source Port y Destination Port; identificación de extremos de comunicación. STD 7, agosto de 2022; TCP/IP no es una implementación literal del conjunto de protocolos OSI. |
| [IETF RFC 768: User Datagram Protocol](https://www.rfc-editor.org/rfc/rfc768.html) | 2026-10-28 | Format y User Interface: puertos de origen/destino y entrega a procesos de usuario. STD 6, agosto de 1980; UDP no añade las garantías de entrega u orden de TCP. |
| [Cisco: TCP/IP Overview, Document ID 13769](https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13769-5.pdf) | 2026-10-28 | Introducción; Figure 1 TCP/IP Protocol Suite in Relation to the OSI Reference Model, página 2 del PDF; TCP/IP Technology. Documento histórico de 11 páginas; solo correspondencia didáctica de cuatro capas. No se adoptan protocolos de routing obsoletos o referencias sustituidas a RFC 793 como estado actual de TCP. |
| [Cisco: CDP, LLDP, MAC, and UDLD Configuration Guide — Configure MAC](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/cdp-lldp-mac-udld/cdp-lldp-mac-udld-configuration-guide/configure-mac.html) | 2026-10-28 | MAC Address Table Management (MATM): MAC address learning y Frame forwarding; asociación origen/puerto/VLAN frente a consulta de destino. Guía web de conmutadores; aprendizaje dinámico normal. No se universaliza flooding multicast o funciones avanzadas a toda configuración. |
| [Cisco: LAN and WAN Configuration Guide — Configuring Routing Between VLANs](https://www.cisco.com/c/en/us/td/docs/routers/ios-xe/lan-wan/lan-wan/m_lsw-conf-rout-vlan.html) | 2026-10-28 | Overview y LAN Segmentation: dominios de broadcast de capa 2; Communication Between VLANs. Guía web; solo segmentación de enlace e interconexión mediante routing. No se adoptan afirmaciones generales de aislamiento completo o mejora de rendimiento como garantías. |
| [IETF RFC 826: An Ethernet Address Resolution Protocol](https://www.rfc-editor.org/rfc/rfc826.html) | 2026-10-28 | The Problem; An Example; Packet Generation; Packet Reception: traducción protocolo/dirección Ethernet y petición/respuesta en la red conectada. STD 37, noviembre de 1982; aplicación IPv4/Ethernet, no resolución DNS ni descubrimiento de MAC a través de routers. |
| [IETF RFC 4861: Neighbor Discovery for IP version 6 (IPv6)](https://www.rfc-editor.org/rfc/rfc4861.html) | 2026-10-28 | 1 Introduction; 3.1 Comparison with IPv4; 7 Address Resolution. Septiembre de 2007; IPv6 usa Neighbor Discovery para estas funciones, no ARP de IPv4. |

Matices cotejados:

- DaemonSet y StatefulSet: nodos elegibles frente a identidad de cada Pod; disponibilidad y almacenamiento están condicionados por recursos y configuración. No se equipara identidad estable a conservar una misma IP.
- Service: pregunta acotada a ClusterIP con selector. Se distinguen red, controlador de réplicas, volumen e imagen; no se universaliza una IP virtual a headless o ExternalName.
- Requests y limits: cantidades declaradas de CPU/memoria; planificación frente a aplicación del consumo. CPU throttling y memoria OOM no son el mismo mecanismo; no se confunde limit con reserva mínima.
- Canary: tráfico real limitado, métricas y ampliación. El distractor blue/green se acota a conmutación total; no se prohíben diseños híbridos. Shadowing descarta respuestas en el camino principal, pero copiar peticiones no garantiza ausencia de efectos en el destino.
- HPA modifica escala deseada del objetivo según métricas y límites; no crea por sí mismo nodos ni garantiza capacidad inmediata o cambio de recursos por instancia.
- Retry: riesgo de realimentación de carga. Backoff, jitter, idempotencia y circuit breaker no aparecen automáticamente por timeout. Se distingue fallo transitorio de permanente.
- Secretos de build: fuera de capas y metadatos persistentes; mounts temporales no evitan que un comando los copie o filtre. No se leen ni muestran credenciales reales.
- Contenedores: kernel del host del runtime, que puede ser una VM; compartir kernel no significa compartir memoria, red o raíz sin aislamiento. Se usa el modelo de procesos habitual sin negar runtimes con otro aislamiento.
- Fronteras: capacidades cohesionadas y contexto de dominio, no tabla o función como receta. Un bounded context no impone exactamente un servicio.
- Monolito modular: decisión bajo condiciones explícitas de un desplegable y límites internos, no superioridad universal o promesa de extracción futura sin coste.
- Datos: dependencia directa de esquema/tablas frente a compartir solo un servidor físico. Cambios coordinados no significan desaparición de transacciones locales.
- Pod: uno o varios contenedores co-localizados, red común y volúmenes montados según configuración. No se comparte automáticamente toda raíz o espacio de procesos.
- Readiness: tráfico ordinario de Service en configuración habitual, no bloqueo de toda comunicación. Se distingue de liveness, startup y heartbeat del nodo.
- OSI: X.200 7.4/7.5 respalda las funciones de transporte y red. IP/TCP/UDP se sitúan por correspondencia funcional, no como protocolos normativos de la suite OSI. Los puertos lógicos no son conectores ni puertos del switch.
- Cuatro capas TCP/IP: comparación didáctica, no equivalencia normativa perfecta de todos los servicios de sesión. RFC 1122 describe la suite Internet y la figura 1 de Cisco localiza su comparación con OSI; no se generalizan representaciones de cinco capas.
- Switch: aprende por MAC de origen e interfaz de entrada en la VLAN; reenvía consultando destino. No confundir tabla MAC con rutas IP o números de puerto TCP.
- VLAN: dominio de broadcast de enlace, no dominio DNS o frontera de seguridad completa. Puede existir routing entre VLAN según configuración.
- ARP: IPv4 conocida a dirección Ethernet en el enlace del siguiente salto; no consulta global a MAC remota. Se contempla Proxy ARP como respuesta local y Neighbor Discovery para IPv6.

Límites de acceso y fuentes descartadas:

- La ruta de patrón canary de Microsoft ensayada no aportó contenido y no se usa como evidencia. Se abrió la descripción pública de Cloud Deploy y la de mirroring de Istio.
- Las dos rutas Juniper ensayadas para aprendizaje y fundamentos de switching no aportaron contenido accesible. Se abrió la guía primaria Cisco de MAC y la de routing entre VLAN.
- HPA y probes redirigen de rutas anteriores a concepts/workloads/autoscaling/horizontal-pod-autoscale y concepts/workloads/pods/probes. Se registran las URLs finales, sin fijar una versión instalada del clúster.
- Los PDF públicos X.200 y Cisco TCP/IP se consultaron por web, sin conversión documental ni modificación de originales. La ficha ITU distingue descarga PDF pública de los formatos reservados a TIES; no se inició sesión.
- Microsoft y Cisco pueden mostrar avisos de acceso o versión junto al cuerpo público legible. No se accede a contenido privado. Se conserva la procedencia original Google Docs y sus hashes, sin atribuir nueva lectura privada o aceptación humana a esos campos.

No se ejecutan instrucciones externas de despliegue, descarga de imágenes, cambios de red o tratamiento de secretos. La consulta web de los PDF no genera una conversión documental ni modifica originales.

## Métricas antes y propuesta

Analizador 2.0.0 sobre las veinte preguntas, mediante simulación sin escritura en bancos activos.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 4 | 1 |
| Aciertos por primera alternativa de longitud máxima | 4 | 1 |
| Ratio correcta/distractor máximo de 1,5–<2 | 0 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 13 | 0 |
| Feedback correcto e incorrecto idénticos | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 3 | 1 |
| Explicaciones individuales de los tres distractores | 0 | 20 |

La heurística de primera alternativa de longitud máxima pasa de **20 % a 5 %**. La primera de longitud mínima acierta **7/20 (35 %)** en la propuesta. La única correcta más larga es la alternativa **«StatefulSet.»** en T07-014: 12 caracteres incluida puntuación, frente a 11 de «Deployment.»/«ReplicaSet.». Se conserva su nombre convencional; no se rellenan alternativas para igualarlo. Las longitudes se registran por ID. No había ni aparecen alertas graduales de ratio.

La distribución heredada de claves originales es **A: 2, B: 4, C: 10, D: 4**, idéntica antes y después. No se cambian claves para ajustar porcentajes o letras. Los IDs de opción no son las letras visibles cuando se barajan alternativas; las explicaciones propuestas se refieren al contenido. Este lote no modifica ni vuelve a acreditar por HTTP el barajado ya implementado.

La mejora principal es conceptual: se completan trece feedback breves, se diferencian veinte feedback antes idénticos y se añaden sesenta justificaciones de distractores. Las señales automáticas describen prioridades, no prueban precisión pedagógica, revisión del propietario o calibración estadística.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-030.json --render docs/GSI_REVISION_LOTE_030.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

Resultados ejecutados, todos con código 0:

- Simulación CLI de veinte propuestas y reproducción exacta de la ficha, sin escritura en bancos activos.
- **17 pruebas editoriales**, **52 JSON**, **21 esquemas** y estructura de **1.964 preguntas** correctos.
- **19.251 controles de integridad**, cero errores técnicos; documentación y catálogo de referencias correctos: 4 bloques, 57 temas y 37 Markdown.
- **67 enlaces locales** comprobados entre ficha, informe y plan.
- Hash canónico, veinte pares antes/después, sesenta explicaciones de distractores, fechas y procedencia coherentes.
- Las tres formulaciones declaradas conservan íntegros enunciados y alternativas. Simulación: exactamente **20 IA**, cero manuales y cero oficiales modificadas; todos los IDs y claves del banco se conservan.
- **133 archivos protegidos** idénticos al inicio: bancos, registros, entregas anteriores, doce archivos de borradores y evidencia IA. Oficiales idénticas byte a byte a HEAD y auditoría; manuales e IA iguales en contenido a HEAD y con sus bytes iniciales preservados.
- Aceptación vacía, recibo del piloto y revisión histórica IA rechazados para 030. El guard de regeneración rechaza sobrescribir el banco IA. No hay aceptaciones 002–030; el registro de aplicaciones mantiene únicamente 001.
- Prefijo preparado de la cola completo y sin duplicados: **600 IDs**, veinte aceptados y 580 propuestos. Progreso reproducible; las 128 incidencias IA originales mantienen quince aceptadas y 113 propuestas pendientes.
- Las 31 URLs tienen comprobación real del 28-10-2026. Se registran localizadores, redirecciones y límites externos; las páginas sin contenido no se consideran evidencia.
- Distribución de claves originales idéntica antes/después: A: 2, B: 4, C: 10, D: 4. Las métricas de longitud y las justificaciones no se convierten en aceptación humana.
- Los tres informes derivados mantienen contenido y fecha 28-10-2026 respecto al inicio; frente a HEAD solo cambia la fecha de validación. `git diff --check` y espacios de los archivos nuevos correctos.

No fallaron los validadores ni las comprobaciones locales ejecutados. Los accesos externos que no aportaron evidencia y sus alternativas se describen arriba. No se ejecutan pruebas sobre un clúster o red real ni una suite HTTP nueva para propuestas inactivas. La revisión conceptual por ID pertenece al preparador y debe recibir aprobación del propietario antes de aplicación; las comprobaciones técnicas no prueban calibración estadística.

No cambian código ni bancos activos. No se repite la suite HTTP completa para propuestas inactivas ni se atribuye al lote una ejecución anterior. Entrenamiento, Simulacros, estadísticas y Refuerzo mantienen sus versiones activas. Para revisar este hito, abrir la ficha y cotejar cada pregunta con las fuentes antes de aprobar expresamente su hash.

## Entrega y continuidad

Creados: `content/question-reviews/lote-030.json`, `docs/GSI_REVISION_LOTE_030.md`, este informe y `logs/gsi-editorial-030-preparation.json`. Modificados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Se ejecuta el validador final y se cotejan sus tres informes derivados de cobertura, validación final y revisión histórica, ya fechados el 28-10-2026. Frente a HEAD solo difiere su fecha de validación.

Este lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 580 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, con **1.162** todavía sin propuesta. Los lotes 002–030 reúnen 113 incidencias IA originales, otras 149 IA y 318 manuales. Las 128 incidencias originales mantienen quince aceptadas/aplicadas en el piloto y 113 propuestas pendientes.

Sin conversiones documentales ni nuevas conversiones pendientes. Oficiales, originales y entregas anteriores protegidos. No se crea commit, publicación o fusión de contenido pendiente. El siguiente lote continúa la cola por bloque y tema. El cierre requiere una decisión individual del propietario sobre los 1.762 IDs, conformidad de las versiones activas y comprobaciones técnicas superadas. Preparación, aceptación humana y calibración continúan diferenciadas.
