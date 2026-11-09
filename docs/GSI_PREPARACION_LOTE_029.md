# Preparación del lote GSI-EDITORIAL-029

Preparado el **28-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico: `fcfce4ccdc35fdb5ccc399ad97fc93becee9e102fabc35ea06115da278086f52`.

La [ficha antes/después](GSI_REVISION_LOTE_029.md), el [JSON de propuestas](../content/question-reviews/lote-029.json) y el [registro técnico](../logs/gsi-editorial-029-preparation.json) conservan contenido, motivos, versiones y hashes. La aprobación del piloto solo acepta su contenido exacto; no autoriza este lote.

## Alcance y decisiones individuales

Posiciones **561–580** de `review_order`: **20 IA**, catorce de **B2-T06** y seis de **B2-T07**. Se conservan conceptos, IDs, claves correctas, campos históricos, procedencia y dificultad orientativa. Las veinte decisiones nuevas son `pending_review`.

Se conserva íntegro el enunciado y las cuatro alternativas de **AI-GSI-B2-T07-012**, sobre ReplicaSet: están bien delimitados frente a ConfigMap, Secret y Namespace. Se completa su feedback y evidencia. La acción `revise` de esta versión requiere aceptación propia. No hay retiradas ni reemplazos.

Hay **13 conceptuales y siete aplicaciones**, sobre clientes de distintos dispositivos, coordinador de proceso, cola durante indisponibilidad, cobro reentregado, sesión local, promoción de imágenes y vistas con retraso. Los casos aportan condiciones que discriminan el concepto. La orientación global 70/30 no es una cuota del lote.

| ID | Modalidad | Motivo individual |
| --- | --- | --- |
| AI-GSI-B2-T06-005 | Aplicación | Conservar caso multidispositivo y clave B; alternativas cercanas de contrato, esquema y duplicación, sin prometer desacoplamiento automático. |
| AI-GSI-B2-T06-006 | Aplicación | Conservar coordinador central y clave C; comparar patrones de interacción próximos sin confundir centralización lógica con instancia física única. |
| AI-GSI-B2-T06-007 | Conceptual | Conservar enunciado y clave A; reemplazar distractores ajenos por funciones de integración y separar control de proceso de transporte centralizado. |
| AI-GSI-B2-T06-008 | Conceptual | Conservar arquitectura independiente de tecnología y clave B; eliminar la confusión de SOAP como transporte y evitar prescribir ESB u orquestación. |
| AI-GSI-B2-T06-010 | Conceptual | Conservar contrato de servicio y clave D; fijar WSDL 1.1 y comparar esquema, mensaje y proceso con fuentes de versión exacta. |
| AI-GSI-B2-T06-013 | Conceptual | Conservar REST como estilo y clave C; comparar formato, protocolo y estilo, sin equiparar cualquier API HTTP/JSON con REST. |
| AI-GSI-B2-T06-016 | Conceptual | Conservar idempotencia no universal y clave D; distinguir parcialidad, formato y precondición sin presentar PATCH como seguro. |
| AI-GSI-B2-T06-017 | Aplicación | Conservar amortiguación de picos y clave B; precisar disponibilidad de la cola y límites de retención, sin prometer efecto exactamente una vez. |
| AI-GSI-B2-T06-018 | Aplicación | Conservar tratamiento idempotente/deduplicación y clave A; microcaso de cobro tras pérdida de confirmación que separa entrega y efecto. |
| AI-GSI-B2-T06-020 | Aplicación | Conservar sesión local y clave B; distractores sobre replicación y localización, explicando límites de afinidad sin prescribir una tecnología. |
| AI-GSI-B2-T06-009 | Conceptual | Conservar mediación ESB y clave B; comparar integración, contrato, artefactos y planificación, sin adoptar la valoración comercial de SOA sin bus. |
| AI-GSI-B2-T06-011 | Conceptual | Conservar mensajería XML y clave A; alternativas de WSDL, REST y esquema como conceptos próximos, con SOAP 1.2 identificado. |
| AI-GSI-B2-T06-014 | Conceptual | Conservar GET seguro/idempotente y clave D; incluir HEAD como distractor próximo y pedir expresamente contenido para que la respuesta sea única. |
| AI-GSI-B2-T06-019 | Conceptual | Conservar funciones de gateway y clave C; alternativas de infraestructura próximas, sin confundir catálogo con ejecución de políticas. |
| AI-GSI-B2-T07-001 | Conceptual | Conservar plantilla frente a instancia y clave C; precisar que la instancia puede estar detenida, con alternativas comparables y sin universalizar aislamiento de VM. |
| AI-GSI-B2-T07-002 | Conceptual | Conservar distribución de imágenes y clave A; comparar las funciones del mismo ciclo de contenedores y distinguir registry de repositorio. |
| AI-GSI-B2-T07-004 | Aplicación | Conservar promoción del artefacto y clave D; escenario de pipeline que distingue identidad de código y de imagen y permite configuración externa. |
| AI-GSI-B2-T07-009 | Aplicación | Conservar estados intermedios/compensación y clave B; caso con proyecciones retrasadas y compensaciones condicionadas, no obligatorias para toda consistencia eventual. |
| AI-GSI-B2-T07-010 | Conceptual | Conservar agente de nodo y clave B; comparar cuatro componentes reales sin distractores ajenos ni atribuir scheduling a kubelet. |
| AI-GSI-B2-T07-012 | Conceptual | Conservar literalmente enunciado y cuatro alternativas bien delimitadas; completar reconciliación, relación con Deployment y límites de disponibilidad sin cambiar clave D. |

Cada propuesta incluye explicación de la correcta y tres errores concretos, asociados a los IDs originales y referidos al contenido para admitir barajado. La revisión conceptual por ID es del preparador. Las aceptaciones y hashes históricos IA permanecen vinculados a sus versiones anteriores; no se convierten en aceptación de las versiones propuestas. Los borradores, registros de evidencia y banco publicado permanecen intactos.

## Fuentes y fechas

Se abrieron **26 URLs primarias distintas el 28-10-2026**. Cada referencia tiene localizador, versión o alcance y fecha real. Se distinguen especificaciones, documentación de implementación y textos originales de sus autores.

| Fuente | Comprobación | Localizador y versión o alcance |
| --- | --- | --- |
| [Microsoft Azure Architecture Center: Best practices for RESTful web API design](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design) | 2026-10-28 | Introducción: platform independence y loose coupling; contratos y evolución de cliente/servicio. Solo desacoplamiento y contrato de interfaz; no se afirma compatibilidad automática de cualquier cambio o que toda API HTTP sea REST. |
| [Microsoft Azure Architecture Center: Saga distributed transactions pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/saga) | 2026-10-28 | Saga implementation approaches: Choreography y Orchestration; Issues and considerations: fallos e idempotencia. Se usa la distinción del control de proceso y las transacciones locales. No se traslada a toda transacción la simplificación de aislamiento ni se exige saga a toda SOA. |
| [IBM: What is an enterprise service bus (ESB)?](https://www.ibm.com/think/topics/esb) | 2026-10-28 | Introducción: mediación, transformación de modelos, encaminamiento y conversión de protocolos. Solo funciones del patrón de integración; no se adopta la valoración comercial de SOA sin ESB ni se afirma que el bus sea obligatorio. |
| [OASIS: Reference Model for Service Oriented Architecture 1.0](https://docs.oasis-open.org/soa-rm/v1.0/soa-rm.html) | 2026-10-28 | Abstract; 2.1 Service Oriented Architecture; 3.3.1 Service description; 3.3.2 Policies and contracts. OASIS Standard, 12-10-2006; modelo independiente de tecnologías concretas, no prescribe SOAP, HTTP o un ESB. |
| [W3C: SOAP Version 1.2 Part 1: Messaging Framework, second edition](https://www.w3.org/TR/soap12-part1/) | 2026-10-28 | Abstract; 1 Introduction; 4 SOAP Protocol Binding Framework; 5 SOAP Message Construct. W3C Recommendation, 27-04-2007; XML y marco de bindings, sin reducir SOAP a HTTP o confundirlo con SOA. |
| [W3C: Web Services Description Language (WSDL) 1.1](https://www.w3.org/TR/2001/NOTE-wsdl-20010315) | 2026-10-28 | Abstract; 2 Service Definition: Types, Messages, Port Types, Bindings, Ports y Services. W3C Note, 15-03-2001, versión 1.1; no se presenta como Recommendation. La ruta genérica /TR/wsdl/ mostró WSDL 2.0; se usa la URL fechada de 1.1 para el contexto clásico. |
| [Roy T. Fielding: Architectural Styles and the Design of Network-based Software Architectures, Chapter 5](https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) | 2026-10-28 | 5.1.2 Client-Server; 5.1.3 Stateless; 5.1.4 Cache; 5.1.5 Uniform Interface, cuatro restricciones; 5.1.6 Layered System. Tesis doctoral, 2000, capítulo original de REST; se distingue estilo, formato de representación y protocolo. |
| [IETF RFC 5789: PATCH Method for HTTP](https://www.rfc-editor.org/rfc/rfc5789.html) | 2026-10-28 | 2 The PATCH Method: documento de cambios, método no seguro ni idempotente en general, uso idempotente y peticiones condicionales. Standards Track, marzo de 2010; su referencia histórica RFC 2616 se complementa con RFC 9110 para propiedades HTTP. |
| [IETF RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) | 2026-10-28 | 9.2.1 Safe Methods; 9.2.2 Idempotent Methods; 9.3.1 GET; 9.3.2 HEAD; 9.3.3 POST; 9.3.4 PUT. STD 97, junio de 2022; seguridad semántica no equivale a cifrado ni a ausencia de efectos incidentales; idempotencia no exige respuesta idéntica. |
| [Microsoft Azure Architecture Center: Queue-Based Load Leveling pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling) | 2026-10-28 | Solution: cola como buffer y productores/consumidores asíncronos; Issues and considerations: capacidad, persistencia y ritmo de consumo. Patrón conceptual con límites de capacidad y retención; no garantiza escalabilidad infinita, consistencia fuerte o efecto exactamente una vez. |
| [Amazon SQS Developer Guide: at-least-once delivery](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html) | 2026-10-28 | Explicación inicial de copias redundantes y reentrega; recomendación de procesamiento idempotente. Colas estándar SQS, documentación latest; ejemplo primario de entrega al menos una vez, sin extender garantías de FIFO a todos los brokers. |
| [Microsoft ASP.NET Core: Session and state management](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/app-state?view=aspnetcore-10.0) | 2026-10-28 | Session state: proveedor en memoria, escenario de granja y sticky sessions; diferencia cookie de ID y estado en servidor. Rama solicitada aspnetcore-10.0; solo localización del estado y límites de afinidad. No se añaden backend, cachés externas ni framework al proyecto. |
| [Microsoft Azure Architecture Center: API gateways](https://learn.microsoft.com/en-us/azure/architecture/microservices/design/gateway) | 2026-10-28 | What is an API gateway?; Cross-cutting concerns: authentication, routing y client rate limiting. Funciones de frontera y políticas; un proxy puede implementar el papel de gateway y no se exige un producto específico o una única instancia física. |
| [Docker Docs: What is an image?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/) | 2026-10-28 | Definición inicial y principios: paquete de archivos y configuración, capas e inmutabilidad. Documentación conceptual; se distingue contenido de imagen de etiquetas que pueden apuntar a otra versión. |
| [Docker Docs: What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/) | 2026-10-28 | Definición inicial y Containers versus virtual machines: procesos aislados y kernel compartido. Se describe el modelo usual de contenedores de procesos; no se promete aislamiento idéntico a una VM ni ausencia de VM en Docker Desktop. |
| [Docker CLI reference: docker container run](https://docs.docker.com/reference/cli/docker/container/run/) | 2026-10-28 | Description: crear y ejecutar desde imagen; reiniciar contenedor parado y listar también contenedores detenidos. Referencia CLI web consultada; no se ejecutan comandos Docker o descargas de imágenes. Una instancia parada no se convierte en imagen. |
| [Docker Docs: What is a registry?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry/) | 2026-10-28 | Definición inicial; Registry vs. repository: almacenamiento, distribución y colecciones de imágenes. Solo conceptos; no se adoptan precios, planes o el catálogo comercial de servicios como recomendaciones actuales. |
| [AWS Well-Architected DevOps Guidance: Anti-patterns for continuous delivery](https://docs.aws.amazon.com/wellarchitected/latest/devops-guidance/anti-patterns-for-continuous-delivery.html) | 2026-10-28 | Building more than once: build once, deploy many y artefactos de repositorios de confianza. Documentación latest; solo identidad del artefacto y riesgo de reconstrucción por entorno, sin imponer microservicios u otras recomendaciones del artículo. |
| [Adam Wiggins: The Twelve-Factor App, V Build, release, run](https://12factor.net/build-release-run) | 2026-10-28 | Tres fases: build, release y run; composición de build y configuración del despliegue; identidad de releases. Última actualización declarada 2017; se usa separación de configuración, sin copiar herramientas históricas o imponer build a este sitio estático. |
| [Werner Vogels: Eventually Consistent - Revisited](https://www.allthingsdistributed.com/2008/12/eventually_consistent.html) | 2026-10-28 | Consistency—Client Side: weak consistency, inconsistency window y eventual consistency; variaciones read-your-writes y session consistency. Publicado en diciembre de 2008; texto primario del autor. Convergencia bajo condiciones del modelo, sin plazo universal o compensación obligatoria en toda réplica. |
| [Microsoft Azure Architecture Center: Compensating Transaction pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction) | 2026-10-28 | Context and problem; Solution: estados intermedios, cambios concurrentes y compensación según reglas del negocio. Solo manejo de pasos distribuidos y compensaciones cuando correspondan. No se adopta una preferencia universal por eventual frente a fuerte ni compensación como rollback físico exacto. |
| [Kubernetes: Kubernetes Components](https://kubernetes.io/docs/concepts/overview/components/) | 2026-10-28 | Control Plane Components: kube-apiserver, kube-scheduler y kube-controller-manager; Node Components: kubelet y runtime. Documentación web consultada; funciones básicas del clúster, sin deducir la versión instalada de un despliegue o imponer Docker como runtime. |
| [Kubernetes: ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/) | 2026-10-28 | Introducción; How a ReplicaSet works; When to use a ReplicaSet: selector, plantilla, réplicas y relación con Deployment. Documentación web consultada; reconciliación hacia el estado deseado, sin prometer disponibilidad instantánea ante falta de recursos o nodos. |
| [Kubernetes: ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/) | 2026-10-28 | Introducción y ConfigMaps and Pods: configuración no confidencial y separación respecto a imágenes. Documentación web consultada; no se atribuye secreto o cifrado a ConfigMap. |
| [Kubernetes: Secrets](https://kubernetes.io/docs/concepts/configuration/secret/) | 2026-10-28 | Introducción y caution: datos sensibles; controles de acceso y cifrado adicionales. Documentación web consultada; el objeto no garantiza por sí solo cifrado en reposo o acceso autorizado. |
| [Kubernetes: Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) | 2026-10-28 | Introducción; When to Use Multiple Namespaces; Not all objects are in a namespace. Documentación web consultada; ámbito de nombres y recursos, no aislamiento de seguridad completo o controlador de réplicas. |

Matices comprobados:

- APIs: contrato estable con compatibilidad gestionada; experiencias distintas no exigen clientes iguales ni dependencia de tablas o clases internas.
- Orquestación y coreografía clasifican el control del proceso. Un broker central no prueba orquestación y un coordinador lógico puede desplegarse con redundancia.
- SOA: OASIS separa el modelo de las tecnologías. SOAP es mensajería, no un transporte obligatorio; ESB y orquestación son decisiones posibles y distintas.
- WSDL: URL fechada 1.1, W3C Note de 2001; la ruta genérica sirve 2.0. Se distinguen contrato, tipos XSD, mensaje SOAP y proceso; no se inventa una categoría normativa para 1.1.
- REST: restricciones del capítulo original de Fielding, incluida interfaz uniforme e hipermedia. HTTP y JSON no bastan; stateless no prohíbe datos de negocio en servidor.
- HTTP: seguridad significa efecto de lectura solicitado, no TLS o ausencia de logs. Idempotencia no exige respuesta idéntica. HEAD también es seguro/idempotente, pero no devuelve contenido; ese requisito hace único GET.
- PATCH: documento de cambios, no reemplazo completo como definición; sin garantía general de idempotencia, con usos que pueden serlo. If-Match no convierte la modificación en lectura.
- Cola: disponibilidad, capacidad, persistencia y retención explícitas; desacoplamiento temporal no implica atomicidad distribuida, paralelismo o deduplicación.
- Al menos una vez: diferenciar reentrega y efecto de negocio. Identidad estable, deduplicación o idempotencia requieren coordinar registro y efecto ante fallos/concurrencia; no se acredita exactamente una vez con una marca aislada.
- Sesión: cookie de identificación no equivale a todos sus datos. Afinidad no replica el estado y no resuelve por sí sola fallo de la instancia.
- ESB y gateway: no se niega que un proxy implemente el papel de gateway. Se identifican mediación y frontera de políticas sin imponer productos o una instancia física única.
- Imagen y contenedor: plantilla frente a instancia con estado propio; una instancia parada sigue siendo contenedor. Kernel compartido en el modelo usual, sin negar virtualización subyacente en Docker Desktop.
- Registry: distribución y repositorios de imágenes, no ejecución, build o scheduling. No se adopta catálogo comercial, precios o instrucciones de publicación de la documentación.
- Build once: mismo artefacto y configuración externa; mismo commit no prueba misma imagen. No se omiten pruebas o validación del destino.
- Eventual: estados transitorios y recuperación; compensación solo cuando proceda, con reglas de negocio, distinta de rollback local o restauración física global.
- Kubernetes: agente kubelet frente a scheduler, API server y controller manager. ReplicaSet reconcilia un objetivo, normalmente gestionado por Deployment, sin garantía instantánea de réplicas listas. Secret y Namespace no acreditan por sí solos protección completa.

Límites de acceso y fuentes descartadas:

- La primera consulta de Namespaces y Gateway Routing devolvió una respuesta mínima de una línea. Al buscar/abrir de nuevo se obtuvo cuerpo público legible. No se usa una página vacía como evidencia de revisión.
- La ruta genérica /TR/wsdl/ mostró WSDL 2.0. Se abrió y usa la nota fechada de WSDL 1.1 para la pregunta de servicios clásicos.
- La página ASP.NET web-farm con query 10.0 mostró avisos de versión contradictorios. No se usa para fijar soporte: se leyó Session and state management para el párrafo de memoria local y granja.
- Microsoft muestra aviso genérico de autorización junto al cuerpo público legible. No se inició sesión ni se accedió a fuentes privadas. Google Cloud redirigió su artículo de promoción a docs.cloud.google.com; no se usa como prueba principal del principio build once: se leyó la guía primaria explícita de AWS.
- Las fuentes originales de Google Docs, sus localizadores y hashes IA se conservan como procedencia. No se atribuye lectura privada nueva, validación automática o nueva aceptación humana a esos datos.

La documentación se consulta como evidencia; sus instrucciones de crear cuentas, ejecutar comandos o publicar imágenes no se ejecutan. No se convierten documentos ni se modifica un original.

## Métricas antes y propuesta

Analizador 2.0.0 sobre las veinte preguntas, por simulación sin escritura en bancos.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 7 | 3 |
| Aciertos por primera alternativa de longitud máxima | 7 | 4 |
| Ratio correcta/distractor máximo de 1,5–<2 | 2 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 16 | 0 |
| Feedback correcto e incorrecto idénticos | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 1 | 5 |
| Explicaciones individuales de tres distractores | 0 | 20 |

La primera alternativa de longitud máxima pasa de **35 % a 20 %** de acierto; la primera de longitud mínima acierta **9/20 (45 %)** en la propuesta. Esta segunda señal descriptiva queda registrada para revisión: no se deduce que un porcentaje aislado acredite calidad, y no se cambian claves ni se rellenan alternativas para obtener cuotas. Se conservan términos convencionales y opciones breves cuando son suficientes.

Las tres correctas únicas más largas son **T06-010** (61 frente a 59 caracteres del distractor máximo), **T06-016** (61 frente a 59) y **T07-012** (ReplicaSet, 10 frente a 9). La precisión de contrato y uso idempotente explica las dos primeras; la última conserva la denominación del recurso. Son diferencias pequeñas, sin alertas de ratio. Las longitudes por opción y su revisión figuran en el registro.

Se completan dieciséis feedback breves y sesenta justificaciones individuales; se diferencian veinte feedback antes idénticos. Dos alertas graduales de longitud desaparecen por alternativas más próximas y comparables. Las señales no equivalen a aceptación humana, calidad demostrada o calibración estadística.

## Historial de la propuesta

La primera preparación tenía hash `4b34cc34f52e77412c86d10485a143b6a4f8bbca8bb88dd35f6f064447e5a0cd`. Antes de aprobación se simplificaron cinco formulaciones: ESB, SOAP, API Gateway, imagen/contenedor y promoción de imágenes. Se eliminaron redundancias y se conservaron conceptos y claves. No se alargaron distractores; el registro enlaza hashes de contenido por ID. El hash vigente es `fcfce4ccdc35fdb5ccc399ad97fc93becee9e102fabc35ea06115da278086f52`. Ninguna de las dos versiones está aceptada o aplicada.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-029.json --render docs/GSI_REVISION_LOTE_029.md
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

- Simulación CLI de veinte propuestas y reproducción exacta de la ficha; sin escritura en bancos activos.
- **17 pruebas editoriales**, **51 JSON**, **21 esquemas** y estructura de **1.964 preguntas** correctos.
- **19.251 controles de integridad**, cero errores técnicos; documentación y catálogo de referencias correctos: 4 bloques, 57 temas y 37 Markdown.
- **65 enlaces locales** comprobados entre ficha, informe y plan; no se limita esta verificación al catálogo de temas.
- Hash canónico vigente, veinte pares de hashes antes/después, sesenta justificaciones de distractores y procedencia original coherentes.
- La formulación completa de **AI-GSI-B2-T07-012** se conserva. Simulación: exactamente **20 IA**, cero manuales y cero oficiales modificadas; todos los IDs y claves del banco se conservan.
- **129 archivos protegidos** idénticos al inicio: bancos, registros, entregas anteriores, doce archivos de borradores y evidencia IA. Oficiales idénticas byte a byte a HEAD y auditoría; manuales e IA iguales en contenido a HEAD y con sus bytes iniciales preservados.
- Aceptación vacía, recibo del piloto y registro histórico IA rechazados para 029. El guard de regeneración rechaza sobrescribir el banco IA. No hay aceptaciones 002–029; el historial de aplicaciones conserva únicamente 001.
- Prefijo de cola completo y sin duplicados: **580 IDs**, veinte aceptados y 560 propuestos. Progreso reproducible. Las 128 incidencias IA originales mantienen quince aceptadas y 113 propuestas pendientes.
- Las 26 fuentes conservan fecha real de comprobación 28-10-2026. Las dificultades de acceso y de localizador se documentan arriba, sin atribuir revisión a páginas vacías.
- Reconstrucción de la primera propuesta y verificación de su hash canónico. El historial conserva las alternativas anteriores y posteriores de las cinco preguntas simplificadas y sus hashes individuales, sin cambiar significado o claves ni aprobar alguna versión.
- Los tres informes derivados mantienen contenido y fecha 28-10-2026 respecto al inicio; frente a HEAD solo cambia la fecha de validación. `git diff --check` y espacios de los archivos nuevos correctos.

No fallaron los validadores o comprobaciones locales ejecutados. No se ejecutó una suite HTTP nueva ni se desplegó infraestructura, un clúster o contenedores: las propuestas son inactivas y la aplicación mantiene sus bancos y código. La revisión conceptual descrita por ID es del preparador; las pruebas estructurales no sustituyen aprobación humana ni calibración.

No cambian código ni bancos activos. No se repite la suite HTTP completa para propuestas inactivas ni se atribuye al lote una ejecución anterior. Entrenamiento, Simulacros, estadísticas y Refuerzo mantienen sus versiones activas. Para revisar la entrega, abrir la ficha y comprobar cada pregunta contra sus fuentes antes de aprobar expresamente el hash.

## Entrega y continuidad

Creados: `content/question-reviews/lote-029.json`, `docs/GSI_REVISION_LOTE_029.md`, este informe y `logs/gsi-editorial-029-preparation.json`. Modificados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Se ejecuta el validador final y se cotejan los tres informes derivados de cobertura, validación final y revisión histórica, ya fechados el 28-10-2026. Frente a HEAD solo difiere su fecha de validación.

Este lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 560 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, con **1.182** todavía sin propuesta. Los lotes 002–029 reúnen 113 incidencias IA originales, otras 129 IA y 318 manuales. De las 128 incidencias originales, quince están aplicadas en el piloto y 113 tienen propuesta pendiente.

Sin conversiones documentales ni nuevas conversiones pendientes. Oficiales, originales y entregas anteriores protegidos. No se crea commit, publicación o fusión de contenido pendiente. El siguiente lote continúa la cola por bloque y tema. El cierre sigue requiriendo decisión individual del propietario para los 1.762 IDs, conformidad de las versiones activas y comprobaciones técnicas superadas. Preparación, aceptación humana y calibración son estados distintos.
