# GSI-EDITORIAL-030 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `e858e9ae85a40d602f5380c9eaf4a727b7e84004238b5c9e22d0379c904db59d`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B2-T07-013

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas ya bien delimitadas, con clave D; completar nodos elegibles, ciclo de vida y tres responsabilidades distintas.

### Antes

¿Qué recurso corresponde a un agente que debe ejecutarse por nodo seleccionado?

- A. Job único
- B. ConfigMap
- C. Service
- D. DaemonSet **(correcta)**

Explicación: DaemonSet despliega instancias en nodos seleccionados; Job representa trabajo finito.

### Propuesta

¿Qué recurso corresponde a un agente que debe ejecutarse por nodo seleccionado?

- A. Job único
- B. ConfigMap
- C. Service
- D. DaemonSet **(correcta)**

Explicación: DaemonSet mantiene un Pod en cada nodo elegible para la función del agente; al incorporar nodos elegibles se crean sus Pods y al retirarlos se ajusta el conjunto. Puede restringirse por selección o afinidad de nodo y está sujeto a las condiciones de planificación. No significa cualquier número global de réplicas ni trabajo que deba terminar una sola vez. El objetivo no garantiza ejecución instantánea en un nodo incapaz de alojarlo.

- Error A: Un Job representa trabajo finito y sigue sus terminaciones satisfactorias. No expresa mantener continuamente un agente en cada nodo seleccionado.
- Error B: ConfigMap proporciona configuración no confidencial. Puede ser consumido por el agente, pero no crea el conjunto de Pods por nodo.
- Error C: Service proporciona una abstracción de acceso de red. Puede exponer agentes existentes, pero no es el controlador que los despliega por nodo.

- [Kubernetes: DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/) · Introducción; Running Pods on select Nodes; How Daemon Pods are scheduled: un Pod por nodo elegible · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28
- [Kubernetes: Jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/) · Introducción: trabajo finito, terminaciones satisfactorias y límites de reintento · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28
- [Kubernetes: ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/) · Introducción y ConfigMaps and Pods: configuración no confidencial, no controlador de ejecución · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28
- [Kubernetes: Service](https://kubernetes.io/docs/concepts/services-networking/service/) · Introducción; Defining a Service; Service type; Headless Services: red, selector y endpoints · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28

Partida: `e2df4281f8d700a536f6803483a3bfb62f1ac056b2ec649385dc79b48c2eba7e` · propuesta: `fdc499124d1e7408c5f77ada4a0e9f79a22572f87ae8748856ad31f2eba09ca3`

## AI-GSI-B2-T07-014

Decisión: pending_review · acción: revise.

Motivo: Conservar identidad estable y clave D; comparar cuatro controladores reales sin el distractor largo de garantía universal.

### Antes

¿Qué recurso facilita identidades estables para determinadas cargas con estado?

- A. Ingress
- B. ReplicaSet como garantía universal de identidad estable
- C. ConfigMap
- D. StatefulSet **(correcta)**

Explicación: StatefulSet incorpora patrones para cargas con estado e identidad estable.

### Propuesta

¿Qué recurso facilita identidades estables para determinadas cargas con estado?

- A. Deployment.
- B. DaemonSet.
- C. ReplicaSet.
- D. StatefulSet. **(correcta)**

Explicación: StatefulSet mantiene identidad estable y distinguible de sus Pods, útil para ciertas cargas con estado. Se apoya en ordinales, identidad de red y, cuando se configura, almacenamiento asociado. Estable no significa conservar siempre la misma IP del Pod ni proporcionar por sí solo replicación, consistencia o copias de seguridad de una base de datos. Los volúmenes y su retención dependen de las políticas y recursos configurados.

- Error A: Deployment gestiona normalmente réplicas intercambiables y sus actualizaciones. No aporta el contrato de identidad ordinal estable de StatefulSet.
- Error B: DaemonSet mantiene agentes por nodo elegible. Esa distribución no equivale a identidad estable para réplicas de una carga con estado.
- Error C: ReplicaSet reconcilia un número deseado de Pods según un selector. No proporciona por sí solo la identidad persistente distintiva preguntada.

- [Kubernetes: StatefulSets](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/) · Introducción; Using StatefulSets; Limitations; Pod Identity: identidad estable, ordinal y almacenamiento según configuración · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28
- [Kubernetes: Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) · Introducción y Strategy, Recreate Deployment y Rolling Update Deployment: réplicas intercambiables y sustitución · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28
- [Kubernetes: DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/) · Introducción; Running Pods on select Nodes; How Daemon Pods are scheduled: un Pod por nodo elegible · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28
- [Kubernetes: ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/) · How a ReplicaSet works; When to use a ReplicaSet: selector y número de réplicas, relación con Deployment · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28

Partida: `e56c43b148f61d6c118bf0ff4a852741cabb3777d70309de613a6be4fb427469` · propuesta: `58f0009631d1381f92b387254361676b3c6b7c4b57637cefac8281b120ca5193`

## AI-GSI-B2-T07-015

Decisión: pending_review · acción: revise.

Motivo: Conservar acceso estable y clave B; acotar a ClusterIP con selector para no universalizar una IP virtual a headless o Services sin selector.

### Antes

¿Qué ofrece un Service de Kubernetes?

- A. Una definición obligatoria de dominio de negocio
- B. Acceso de red estable a un conjunto de pods **(correcta)**
- C. Una imagen de contenedor
- D. Una contraseña cifrada de forma universal

Explicación: Service es una abstracción de red; no equivale al microservicio de negocio.

### Propuesta

¿Qué ofrece un Service de Kubernetes de tipo ClusterIP con selector de Pods?

- A. Un controlador del número deseado de réplicas de la carga.
- B. Un punto de acceso de red para los Pods seleccionados. **(correcta)**
- C. Un volumen persistente exclusivo para cada Pod de la carga.
- D. Una plantilla de archivos con las dependencias de ejecución.

Explicación: Un Service de tipo ClusterIP con selector ofrece una abstracción de acceso de red que se mantiene mientras cambian sus Pods de respaldo. El selector identifica los Pods correspondientes y los endpoints reflejan sus destinos. No crea por sí mismo las réplicas, almacenamiento o imágenes. Se fija este tipo y configuración porque hay Services sin selector y headless con otras características. Service es un recurso de red, no una definición del dominio de negocio.

- Error A: El objetivo de réplicas corresponde a controladores de cargas, como ReplicaSet o Deployment. Service no crea Pods para satisfacer ese número.
- Error C: El almacenamiento persistente se configura mediante recursos y volúmenes adecuados. Una abstracción de red no asigna por sí sola un volumen por Pod.
- Error D: La plantilla de archivos y dependencias describe una imagen de contenedor. Service permite acceso a cargas ejecutadas, no almacena su imagen.

- [Kubernetes: Service](https://kubernetes.io/docs/concepts/services-networking/service/) · Introducción; Defining a Service; Service type; Headless Services: red, selector y endpoints · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28
- [Kubernetes: ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/) · How a ReplicaSet works; When to use a ReplicaSet: selector y número de réplicas, relación con Deployment · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28
- [Docker Docs: What is an image?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/) · Introducción y principios de capas e inmutabilidad · versión: Se distingue retirar un archivo en una capa posterior de eliminarlo de las capas anteriores distribuidas · comprobado: 2026-10-28

Partida: `d9a6f18e7877eb9c6dad9310fbf55c1db1f6174a2cf3603648e1fb21707d557e` · propuesta: `3656083176188569a7e395555df383292ef0cc3693c773e8f3105fe5c178ffb6`

## AI-GSI-B2-T07-017

Decisión: pending_review · acción: revise.

Motivo: Conservar planificación frente a consumo y clave A; comparar responsabilidades próximas y explicar aplicación distinta de CPU y memoria.

### Antes

¿Qué diferencia requests y limits?

- A. Requests orientan planificación; limits restringen consumo según recurso **(correcta)**
- B. Requests reinician pods; limits crean namespaces
- C. Ambos son contraseñas
- D. Limits describen exclusivamente el número de réplicas

Explicación: Confundir planificación y límites puede causar infrautilización, throttling o agotamiento de memoria.

### Propuesta

En Kubernetes, ¿qué diferencia de función hay entre requests y limits de CPU y memoria de los contenedores?

- A. Requests: base para planificar; limits: límites de consumo. **(correcta)**
- B. Requests: máximo consumible; limits: mínimo reservado.
- C. Requests: cantidad de Pods; limits: cantidad de nodos.
- D. Requests: métricas medidas; limits: objetivos de autoscaling.

Explicación: Las requests de CPU y memoria intervienen en la planificación y asignación de recursos; los limits restringen el consumo según el recurso y el mecanismo del runtime. En Linux, CPU puede limitarse mediante throttling, mientras que exceder memoria puede activar la intervención del OOM y terminar un proceso. No son mecanismos idénticos ni un limit significa recurso reservado de antemano. El uso real puede diferir de la request.

- Error B: Invierte las responsabilidades. La request no es el techo general y el limit no es un mínimo reservado para planificar.
- Error C: Ambos campos se refieren aquí a cantidades de CPU o memoria. El número de Pods o nodos pertenece a otros objetivos de escala.
- Error D: Request y limit son valores declarados de recursos. No son lecturas de métricas ni los objetivos de un controlador de autoscaling.

- [Kubernetes: Resource Management for Pods and Containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) · Requests and limits; How Pods with resource requests are scheduled; How Kubernetes applies resource requests and limits: CPU y memoria · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28

Partida: `d439d0aebcd5e33e404387829c6785c9f3ee7dbc03b9500ad2286ba3f96c7e62` · propuesta: `349c408f3161d73315b9a50ce4fbdfe2d869601deab8f1eff84a2631d65762f7`

## AI-GSI-B2-T07-018

Decisión: pending_review · acción: revise.

Motivo: Conservar canary y clave B; precisar exposición real y validación progresiva, sin afirmar que blue/green nunca admita porcentajes.

### Antes

Una versión nueva recibe inicialmente una fracción del tráfico. ¿Qué estrategia es?

- A. Backup completo
- B. Canary **(correcta)**
- C. Recreate completo
- D. Blue/green con conmutación total inicial

Explicación: Canary expone gradualmente parte del tráfico; blue/green conmuta entre dos entornos.

### Propuesta

Una versión nueva atiende una fracción controlada de usuarios reales. Se observan métricas antes de ampliar esa exposición. ¿Qué estrategia describe?

- A. Blue/green con conmutación total.
- B. Canary con exposición gradual. **(correcta)**
- C. Recreate con parada previa.
- D. Shadowing de tráfico duplicado.

Explicación: Un canary expone una versión nueva a una parte controlada del tráfico real, observa su comportamiento y permite ampliar o detener la exposición. El caso incluye respuestas nuevas utilizadas por usuarios, no solo una copia para observar. Blue/green y canary pueden combinarse en diseños concretos; la alternativa especifica conmutación total, que no es la progresión descrita. Ninguna estrategia elimina la necesidad de métricas y criterios de recuperación.

- Error A: La alternativa cambia todo el tráfico en un paso. El caso limita inicialmente la exposición y decide ampliarla según el resultado.
- Error C: Recreate detiene la versión previa antes de crear la nueva en esa estrategia. No describe convivencia con una fracción de tráfico para evaluar la versión.
- Error D: El mirroring copia tráfico a la versión observada y descarta sus respuestas en el flujo principal. Aquí usuarios reales sí reciben respuestas nuevas.

- [Google Cloud Deploy: Use a canary deployment strategy](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary) · What is a canary deployment?; Why use a canary deployment strategy?; Phases of a canary deployment · versión: Documentación web; principio de exposición parcial progresiva con tráfico real, sin ejecutar un despliegue o adoptar porcentajes del ejemplo como regla · comprobado: 2026-10-28
- [Istio: Mirroring](https://istio.io/latest/docs/tasks/traffic-management/mirroring/) · Mirroring traffic: duplicación fire and forget, respuestas descartadas y porcentaje de copia · versión: Rama latest; distinción conceptual de shadowing y canary, sin ejecutar comandos ni asumir que el tráfico copiado carece de efectos · comprobado: 2026-10-28
- [Kubernetes: Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) · Introducción y Strategy, Recreate Deployment y Rolling Update Deployment: réplicas intercambiables y sustitución · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28

Partida: `3d8e5d4d683bdfd7851cafe0b7326080a12c5855026b21c10ec26fa869211a31` · propuesta: `6b5822253847f74e1521589c6a5f229d1fcf0baf33d656c9d7bc4cef62af93e7`

## AI-GSI-B2-T07-019

Decisión: pending_review · acción: revise.

Motivo: Conservar escala horizontal y clave C; distinguir objetivo de réplicas de ejecución efectiva, recursos verticales y nodos.

### Antes

¿Qué modifica principalmente el Horizontal Pod Autoscaler?

- A. El código fuente de la aplicación
- B. El tamaño de cada tabla SQL
- C. Número de réplicas según métricas **(correcta)**
- D. La identidad jurídica del servicio

Explicación: HPA ajusta réplicas; escalar nodos o recursos verticales son acciones diferentes.

### Propuesta

¿Qué modifica principalmente el Horizontal Pod Autoscaler?

- A. Las requests de CPU y memoria de cada contenedor.
- B. El número de nodos físicos disponibles en el clúster.
- C. El número deseado de réplicas del recurso objetivo. **(correcta)**
- D. La imagen y versión desplegada de la aplicación.

Explicación: HorizontalPodAutoscaler ajusta la escala deseada de una carga que admite el subrecurso scale, según métricas y configuración. Cambia cuántas réplicas se piden, no el código o los recursos verticales de cada instancia ni el número de nodos. Los controladores y el scheduler deben materializar ese objetivo. Métricas disponibles, límites mínimo/máximo, estabilización y capacidad condicionan el resultado; más réplicas no garantiza por sí solo más nodos.

- Error A: Modificar CPU o memoria por instancia es escalado vertical. No es la acción característica del HPA sobre el número de réplicas.
- Error B: La capacidad de nodos corresponde a otros mecanismos de escalado. El HPA puede pedir Pods que todavía no quepan sin crear él mismo esos nodos.
- Error D: Cambiar la versión o imagen es una operación de despliegue. El HPA ajusta escala, no actualiza el contenido del software.

- [Kubernetes: Horizontal Pod Autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/) · Introducción; How does a HorizontalPodAutoscaler work?: escala deseada del recurso objetivo según métricas y límites configurados · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28
- [Kubernetes: Resource Management for Pods and Containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) · Requests and limits; How Pods with resource requests are scheduled; How Kubernetes applies resource requests and limits: CPU y memoria · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28

Partida: `4c8762211a2d1af5880a97a4052884403aeb6f4d60a582103979b8924b28a1cf` · propuesta: `ecaf888cd508d782862f592f0bcf5caedec6c170f8356115170aa690d3ffdfd2`

## AI-GSI-B2-T07-020

Decisión: pending_review · acción: revise.

Motivo: Conservar amplificación de carga y clave D; caso de clientes saturando un servicio y cuatro modelos causales, sin pistas de tres beneficios frente a un riesgo.

### Antes

¿Qué riesgo tienen los reintentos ilimitados durante una caída?

- A. Garantizar recuperación instantánea
- B. Eliminar efectos duplicados siempre
- C. Sustituir la necesidad de timeouts
- D. Amplificar la carga y empeorarla **(correcta)**

Explicación: Los reintentos requieren límites, espera e idempotencia o deduplicación para no agravar el fallo.

### Propuesta

Muchos clientes reintentan sin límite y sin espera contra un servicio saturado. ¿Qué mecanismo puede agravar el fallo?

- A. Backoff automático: cada fallo espacia el siguiente intento.
- B. Deduplicación implícita: repetir el envío evita otro efecto.
- C. Cortocircuito implícito: el timeout suspende futuras llamadas.
- D. Realimentación de carga: los reintentos añaden peticiones. **(correcta)**

Explicación: Los reintentos generan peticiones adicionales. Si se repiten sin control contra un servicio saturado, pueden consumir más capacidad y retrasar su recuperación, especialmente si muchos clientes coinciden. Deben considerarse límites de intentos, espera y jitter, presupuesto de tiempo y seguridad de repetir efectos. Un timeout no demuestra que la operación remota no se ejecutó. Retry, backoff, deduplicación y circuit breaker son mecanismos distintos.

- Error A: La espera creciente requiere una política de backoff. No aparece automáticamente por el mero hecho de fallar o reintentar.
- Error B: Repetir el transporte puede repetir el efecto. Evitarlo requiere idempotencia o deduplicación según el contrato y su implementación.
- Error C: Un timeout limita una espera. Suspender nuevas llamadas por estado de fallo requiere una política como circuit breaker; no es una consecuencia implícita.

- [AWS Builders Library: Timeouts, retries, and backoff with jitter](https://builder.aws.com/content/3EumjoZascWd1oZiEgL8ORlv3qE/timeouts-retries-and-backoff-with-jitter) · Introduction; Retries and backoff; Jitter: carga adicional, efectos repetidos y dispersión de intentos · versión: URL final tras redirección de Builders Library; no se afirma que timeout implique cancelación o que reintentar siempre sea seguro · comprobado: 2026-10-28
- [Microsoft Azure Architecture Center: Retry pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry) · Solution; Issues and considerations: clasificación de fallos, espera, máximo de intentos e idempotencia · versión: Solo recuperación frente a fallos transitorios; no es garantía de éxito ante fallo permanente · comprobado: 2026-10-28
- [Microsoft Azure Architecture Center: Circuit Breaker pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker) · Context and problem; Solution: suspensión de llamadas y relación con Retry · versión: Circuit breaker no es una consecuencia automática de timeout o reintento; patrón de control adicional · comprobado: 2026-10-28

Partida: `1472ea543936e1e9800a0e3ae1f7e8e4134432df882993d869327a7ce5ff685d` · propuesta: `0525b3811e02d6bdce990708d920f3a113dbff56d12572f4b4053689c900113c`

## AI-GSI-B2-T07-003

Decisión: pending_review · acción: revise.

Motivo: Conservar credenciales fuera de capas y clave C; microcaso de construcción con alternativas reales de ARG, capas, mounts y ENV.

### Antes

¿Qué práctica reduce exposición de secretos en una imagen?

- A. Publicar secretos en etiquetas
- B. Incluir contraseñas y borrarlas en una capa posterior como garantía
- C. Mantener credenciales fuera de sus capas **(correcta)**
- D. Compartir la clave privada con el registry público

Explicación: Las imágenes y sus capas no deben contener secretos; eliminarlos después puede no retirar su exposición previa.

### Propuesta

Una construcción necesita una credencial para descargar una dependencia privada. ¿Qué práctica reduce su exposición en la imagen resultante?

- A. Pasarlas como build-arg y borrarlas tras construir.
- B. Copiarlas y eliminarlas en una instrucción posterior.
- C. Montarlas como secretos sin copiarlas a la imagen. **(correcta)**
- D. Guardarlas en una variable ENV del Dockerfile.

Explicación: Los montajes de secretos permiten exponer temporalmente credenciales al paso de construcción que las necesita sin incorporarlas deliberadamente al contenido de la imagen. Debe evitarse copiarlas, imprimirlas o persistirlas en sus salidas. Las capas anteriores pueden conservar un secreto aunque se elimine del sistema de archivos visible en otra capa. ARG y ENV no son mecanismos apropiados para proteger secretos de construcción.

- Error A: Build arguments no son un canal seguro para secretos. Borrar una variable o terminar el build no garantiza eliminar su exposición en artefactos o metadatos.
- Error B: Una capa posterior oculta o elimina el archivo de la vista final, pero no borra necesariamente el contenido de las capas anteriores distribuidas.
- Error D: ENV forma parte de la configuración de la imagen y puede conservar el valor. No debe usarse para introducir la credencial en el artefacto.

- [Docker Docs: Build secrets](https://docs.docker.com/build/building/secrets/) · Introducción; Secret mounts; SSH mounts: exposición temporal y límites de ARG/ENV · versión: Documentación web de construcción; montar no impide que un comando copie el secreto a una capa o lo filtre por logs · comprobado: 2026-10-28
- [Docker Docs: What is an image?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/) · Introducción y principios de capas e inmutabilidad · versión: Se distingue retirar un archivo en una capa posterior de eliminarlo de las capas anteriores distribuidas · comprobado: 2026-10-28

Partida: `cbc811a8b1d3273553b31d6e70ebac08ca931bf8564d5b6934c81d6d3bf499ad` · propuesta: `7e96309edd9ebc251664917970a103e63cdbac9962d4bf8bf64d632b23d96e69`

## AI-GSI-B2-T07-005

Decisión: pending_review · acción: revise.

Motivo: Conservar kernel compartido y clave C; distinguir host del runtime de máquina física y no convertir el modelo usual en afirmación sobre todo sandbox.

### Antes

¿Qué comparte habitualmente un contenedor con el host?

- A. Una dirección pública idéntica necesariamente
- B. Toda la memoria sin aislamiento obligatorio
- C. El kernel **(correcta)**
- D. Un sistema operativo invitado propio e independiente siempre

Explicación: El contenedor aísla procesos compartiendo kernel; una VM virtualiza hardware y dispone de SO invitado.

### Propuesta

En el modelo habitual de contenedores de procesos, ¿qué comparte el contenedor con el host del runtime?

- A. Una máquina virtual propia con un kernel invitado.
- B. Todo el espacio de memoria de los otros procesos.
- C. El kernel del sistema que ejecuta sus procesos. **(correcta)**
- D. El sistema de archivos raíz de los demás contenedores.

Explicación: En el modelo usual de contenedores de procesos, el kernel del host del runtime atiende sus procesos, mientras mecanismos del sistema operativo proporcionan aislamiento y control de recursos. Compartir kernel no implica compartir sin restricciones memoria, sistema de archivos o red. Ese host puede ser una máquina virtual, como sucede en ciertos entornos de escritorio; no tiene por qué ser el sistema físico que el usuario ve. Las garantías también dependen de la configuración y del runtime.

- Error A: Un kernel invitado propio es característico de la virtualización de máquinas. No define el contenedor de procesos del caso habitual.
- Error B: Compartir kernel no elimina el aislamiento de espacios de memoria. No implica acceso general al espacio de todos los demás procesos.
- Error D: Cada contenedor puede tener su propia vista de archivos. Compartir algún volumen explícito es una decisión distinta de compartir toda raíz.

- [Docker Docs: What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/) · Containers versus virtual machines: proceso aislado, kernel compartido y contraste con sistema invitado · versión: Modelo usual de contenedores de procesos; host del runtime puede ser una VM y compartir kernel no significa compartir memoria o red sin aislamiento · comprobado: 2026-10-28

Partida: `5dd98ce5de4446a5b47d7a8e691542bf724dd8d478c269637ba5d97f5c3e455d` · propuesta: `e3e59dbca824e715bec252b41e6a861cc8426224911fd222b98d29878bcd2894`

## AI-GSI-B2-T07-006

Decisión: pending_review · acción: revise.

Motivo: Conservar capacidades cohesionadas y clave A; contrastar dominio con capas, funciones y tablas sin una receta universal de tamaño.

### Antes

¿Qué frontera es apropiada para diseñar microservicios?

- A. Capacidades de negocio cohesionadas **(correcta)**
- B. Una capa técnica por servicio sin criterio de dominio
- C. Un servicio por cada función pequeña
- D. Una tabla por servicio obligatoriamente

Explicación: Las fronteras deben responder al dominio y permitir autonomía; fragmentar sin cohesión crea acoplamiento distribuido.

### Propuesta

Al delimitar microservicios, ¿qué criterio favorece responsabilidades cohesionadas y evolución autónoma?

- A. Capacidades de negocio con alta cohesión interna. **(correcta)**
- B. Capas técnicas separadas de presentación, lógica y datos.
- C. Funciones pequeñas que se puedan invocar por separado.
- D. Tablas individuales del esquema relacional existente.

Explicación: Las fronteras se analizan según capacidades de negocio, cohesión y responsabilidad sobre el modelo, buscando reducir dependencias y permitir evolución autónoma. No hay una regla mecánica que convierta cada función, tabla o capa en un servicio. Un bounded context ayuda a razonar sobre la validez de un modelo, pero no impone siempre una correspondencia de uno a uno con un microservicio. El diseño depende también de requisitos y capacidad operativa.

- Error B: Separar por capas técnicas puede obligar a coordinar varios servicios para cada cambio de negocio. No es por sí solo el criterio de cohesión del dominio.
- Error C: El tamaño de una función no establece una capacidad autónoma. Fragmentar operaciones relacionadas puede multiplicar llamadas y dependencias.
- Error D: Una tabla representa persistencia, no necesariamente una frontera del dominio. Un mismo modelo puede necesitar varias tablas bajo una responsabilidad coherente.

- [Microsoft Azure Architecture Center: Use domain analysis to model microservices](https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis) · Introducción; Analyze the domain; Define bounded contexts: cohesión, capacidades y límites del modelo · versión: No hay algoritmo mecánico ni obligación de un servicio por tabla, función o bounded context; no se impone microservicios al proyecto · comprobado: 2026-10-28

Partida: `9df587c3abd74936fe3875245ce8d926f4a12ad29dd513f548086c5e26bf33fc` · propuesta: `56716c3943a42b6eb8121c5cf905cd58ad4e337dc969560bb20b441d9f950c85`

## AI-GSI-B2-T07-007

Decisión: pending_review · acción: revise.

Motivo: Conservar alternativa de monolito modular y clave B; concretar unidad de despliegue y límites deseados para evitar varias recomendaciones defendibles.

### Antes

Un equipo pequeño tiene un dominio cambiante y no necesita escalado independiente. ¿Qué alternativa merece valoración?

- A. Microservicios obligatorios
- B. Monolito modular **(correcta)**
- C. Un clúster por cada clase
- D. Duplicar datos sin contratos

Explicación: El monolito modular puede reducir complejidad operativa cuando no hay beneficios claros de distribuir servicios.

### Propuesta

Un equipo pequeño, con dominio cambiante y sin necesidad actual de escalar servicios por separado, quiere una unidad de despliegue y límites internos claros. ¿Qué alternativa satisface ambas condiciones?

- A. Microservicios con despliegues independientes.
- B. Monolito modular con límites internos explícitos. **(correcta)**
- C. Monolito con dependencias globales entre sus partes.
- D. Servicios distribuidos desplegados siempre en conjunto.

Explicación: El monolito modular conserva una unidad de despliegue y establece límites internos entre responsabilidades o áreas del dominio. Puede reducir parte de la complejidad operativa distribuida mientras se aclaran las fronteras del negocio. Es una opción que debe valorarse bajo las condiciones del caso, no la mejor solución para todo sistema. La modularidad necesita disciplina y no garantiza extraer microservicios sin esfuerzo más adelante.

- Error A: Los despliegues independientes introducen una topología distribuida que el caso no necesita ahora. No mantienen una única unidad de despliegue como se pide.
- Error C: Una unidad de despliegue no basta: las dependencias globales erosionan los límites internos buscados. El caso quiere ambas propiedades.
- Error D: Distribuir componentes y desplegarlos siempre juntos mantiene coordinación operativa y añade comunicaciones remotas. No equivale a modularidad interna de un solo desplegable.

- [Martin Fowler: Monolith First](https://martinfowler.com/bliki/MonolithFirst.html) · Argumentos de complejidad operativa, dominio y fronteras; párrafos sobre modularidad y objeciones a monolith-first · versión: Publicado 2015; análisis primario del autor, con evidencia limitada y posiciones no unánimes. No se presenta como ley universal o promesa de extracción sencilla · comprobado: 2026-10-28
- [Microsoft Azure Architecture Center: Use domain analysis to model microservices](https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis) · Introducción; Analyze the domain; Define bounded contexts: cohesión, capacidades y límites del modelo · versión: No hay algoritmo mecánico ni obligación de un servicio por tabla, función o bounded context; no se impone microservicios al proyecto · comprobado: 2026-10-28

Partida: `79c77d781d9a8c9cc70619e619df64893699420c87fea12cc28ee370d8dd762c` · propuesta: `32a6167027683615d94426f59e57851ebe6d977209cbc22b128f0d0fdc7330e3`

## AI-GSI-B2-T07-008

Decisión: pending_review · acción: revise.

Motivo: Conservar acoplamiento de esquema/despliegue y clave C; distinguir tablas compartidas de servidor físico común y evitar prescribir otra arquitectura a la aplicación.

### Antes

¿Qué riesgo introduce que todos los servicios accedan directamente al mismo esquema de base de datos?

- A. Ausencia automática de transacciones
- B. Eliminación de coordinación de cambios
- C. Acoplamiento de esquemas y despliegues **(correcta)**
- D. Autonomía garantizada de cada servicio

Explicación: Compartir acceso directo acopla cambios; APIs, eventos y responsabilidad sobre datos ayudan a separar servicios.

### Propuesta

¿Qué riesgo introduce que todos los servicios accedan directamente al mismo esquema de base de datos?

- A. Pérdida de la capacidad de ejecutar transacciones locales.
- B. Desaparición de las dependencias entre los consumidores.
- C. Coordinación de cambios de esquema y de despliegues. **(correcta)**
- D. Sustitución del modelo de datos por un protocolo de red.

Explicación: Cuando varios servicios dependen directamente del mismo esquema o tablas, un cambio puede obligar a coordinar consumidores y despliegues. La base común se convierte en un contrato implícito. El riesgo no se deduce de compartir solo un servidor físico: pueden existir responsabilidades y esquemas separados sobre la misma infraestructura. APIs, eventos y propiedad explícita de datos ayudan a controlar contratos, pero también requieren diseño y gestión de cambios.

- Error A: Compartir esquema no elimina automáticamente las transacciones de la base de datos. El problema descrito es el alcance de las dependencias y de los cambios.
- Error B: El acceso directo común crea dependencias sobre estructuras compartidas. No las hace desaparecer.
- Error D: Un protocolo de comunicación no sustituye el significado y estructura de los datos persistidos. El acceso directo mantiene la dependencia del esquema.

- [Microsoft Azure Architecture Center: Data considerations for microservices](https://learn.microsoft.com/en-us/azure/architecture/microservices/design/data-considerations) · Introducción: cambio de esquema y coordinación; párrafo sobre compartir servidor físico; Challenges · versión: Solo riesgo de acceso directo al esquema o tablas comunes; compartir servidor físico no implica necesariamente compartir el contrato de datos · comprobado: 2026-10-28

Partida: `821888506216c2a5a039bf08348eac4f92dce27baca7cb5a0f197330b759003b` · propuesta: `d39b11455999d3044e8a165ee573f94a319c77bc6fd22c22a7364ac3be936b73`

## AI-GSI-B2-T07-011

Decisión: pending_review · acción: revise.

Motivo: Conservar unidad con contenedores y clave C; explicar red común, co-localización y montaje explícito de volúmenes sin afirmar que toda raíz sea compartida.

### Antes

¿Qué caracteriza a un Pod?

- A. Solo almacena contraseñas
- B. Es necesariamente un microservicio de negocio completo
- C. Puede contener uno o varios contenedores que comparten red y volúmenes **(correcta)**
- D. Es siempre idéntico a una imagen

Explicación: El Pod es la unidad de despliegue y no equivale necesariamente a un único contenedor.

### Propuesta

¿Qué caracteriza a un Pod?

- A. Un conjunto de contenedores distribuido entre varios nodos.
- B. Un conjunto de contenedores con red separada por cada uno.
- C. Uno o varios contenedores con red común y volúmenes del Pod. **(correcta)**
- D. Un conjunto de imágenes inmutables conservado en un registry.

Explicación: Un Pod agrupa uno o varios contenedores co-localizados y co-planificados, con contexto de red compartido y volúmenes definidos a nivel de Pod que cada contenedor monta según su configuración. No significa compartir automáticamente todo su sistema de archivos o espacio de procesos. Pod es una unidad de despliegue y ejecución; no equivale necesariamente a un contenedor, imagen o microservicio de negocio completo.

- Error A: Los contenedores del mismo Pod se planifican juntos en un nodo. Repartir réplicas por nodos requiere varios Pods.
- Error B: El contexto de red del Pod es compartido. No se define una IP de Pod independiente para cada contenedor dentro de él.
- Error D: Un registry conserva artefactos de imagen. El Pod describe instancias de ejecución, no un repositorio de paquetes inmutables.

- [Kubernetes: Pods](https://kubernetes.io/docs/concepts/workloads/pods/) · Introducción; How Pods manage multiple containers; Pods and shared resources: red, almacenamiento y co-localización · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28
- [Docker Docs: What is an image?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/) · Introducción y principios de capas e inmutabilidad · versión: Se distingue retirar un archivo en una capa posterior de eliminarlo de las capas anteriores distribuidas · comprobado: 2026-10-28

Partida: `ea3485e742eb306c1fa7e2aa7df042d0f660206ec4fbcd34de008cbd8969da40` · propuesta: `6ca15804e2765461e2e31d3f2de1ca326c9dd59eddb768d88a063fa1b7ec90bb`

## AI-GSI-B2-T07-016

Decisión: pending_review · acción: revise.

Motivo: Conservar readiness y clave C; caso posterior al arranque, diferenciando disponibilidad de aplicación, nodo y reinicio y sin prometer bloqueo de todo tráfico.

### Antes

¿Qué probe determina si un pod debe recibir tráfico?

- A. Ninguna, siempre recibe tráfico
- B. Startup exclusivamente
- C. Readiness **(correcta)**
- D. Liveness

Explicación: Readiness indica disponibilidad para tráfico; liveness detecta necesidad de reinicio y startup atiende el arranque.

### Propuesta

Una aplicación ya arrancada sigue viva, pero temporalmente no puede atender peticiones. En la configuración habitual, ¿qué comprobación permite retirarla del tráfico ordinario del Service sin reiniciarla por ese motivo?

- A. Sonda de arranque (startup).
- B. Heartbeat de disponibilidad del nodo.
- C. Sonda de preparación (readiness). **(correcta)**
- D. Sonda de vitalidad (liveness).

Explicación: Readiness indica si el contenedor está preparado para aceptar tráfico. Si falla, el Pod deja de figurar como destino listo para el tráfico ordinario del Service en la configuración habitual, sin que ese fallo de readiness ordene por sí mismo reiniciar el contenedor. No bloquea toda comunicación directa con la IP del Pod y existen opciones de publicación de endpoints no listos. Liveness atiende recuperación por reinicio y startup protege el arranque inicial.

- Error A: Startup determina si el contenedor terminó su arranque y puede retrasar otras sondas hasta entonces. El caso ya superó esa fase y necesita evaluar disponibilidad durante la ejecución.
- Error B: El heartbeat informa sobre el nodo, no sobre la aptitud de esta aplicación para atender peticiones. Un nodo disponible puede alojar una aplicación no preparada.
- Error D: Un fallo de liveness puede provocar reinicio según su configuración. El caso busca retirar temporalmente tráfico sin usar ese mecanismo de reinicio.

- [Kubernetes: Liveness, Readiness, and Startup Probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/) · Liveness probe; Startup probe; Readiness probe; When to use each probe: arranque, reinicio y tráfico de Service · versión: Documentación web consultada; funciones básicas de recursos y controladores, sin inferir versión instalada, disponibilidad instantánea o comportamiento de todo proveedor · comprobado: 2026-10-28

Partida: `1c8b7ee9a7142657ee0a8e6a8d519a74fa0b3e4ad5834bd2f72fcdfc4d3b5745` · propuesta: `7cda96288b12f1bfa147e3cd36024f86951e98c6ae2328b07330e1cf700ae9d0`

## AI-GSI-B2-T08-002

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas, con clave C; completar mapeo funcional de IP frente a modelo OSI y tres funciones de capas distintas.

### Antes

¿Qué capa OSI se ocupa del direccionamiento y encaminamiento IP?

- A. Presentación
- B. Física
- C. Red **(correcta)**
- D. Sesión

Explicación: La capa de red encamina paquetes; transporte añade comunicación extremo a extremo y puertos.

### Propuesta

¿Qué capa OSI se ocupa del direccionamiento y encaminamiento IP?

- A. Presentación
- B. Física
- C. Red **(correcta)**
- D. Sesión

Explicación: La función de direccionamiento lógico y encaminamiento se sitúa en la capa de red, nivel 3. Al relacionar protocolos TCP/IP con el modelo OSI, IP se ubica funcionalmente en ese nivel. OSI es un modelo de referencia, no una afirmación de que IP sea su protocolo normativo original. Las capas inferiores soportan su transporte por el enlace, mientras las superiores resuelven otras responsabilidades.

- Error A: Presentación trata la representación y sintaxis de la información intercambiada. No elige rutas IP entre redes.
- Error B: Física trata la transmisión de bits y las características del medio. No interpreta el direccionamiento lógico y las rutas de IP.
- Error D: Sesión organiza el diálogo y la sincronización entre entidades de niveles superiores. No es la capa que enruta datagramas IP.

- [ITU-T X.200 / ISO/IEC 7498-1: Basic Reference Model, The basic model](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I!!PDF-E&lang=e&type=items) · 7.4 The Transport Layer, especialmente 7.4.2–7.4.4; 7.5 The Network Layer, 7.5.3.2 Network-addresses y 7.5.4.2 Routing and relaying · versión: Recomendación X.200 de julio de 1994, PDF público enlazado por la ficha ITU, en vigor según su catálogo; modelo de referencia, no especificación de IP/TCP · comprobado: 2026-10-28
- [IETF RFC 1122: Requirements for Internet Hosts — Communication Layers](https://www.rfc-editor.org/rfc/rfc1122.html) · 1.1.3 Internet Protocol Suite: Application, Transport, Internet y Link; 2 Link Layer; 3 Internet Layer · versión: STD 3, octubre de 1989; solo arquitectura y funciones básicas, sin adoptar todas sus prescripciones históricas como requisitos actuales · comprobado: 2026-10-28

Partida: `c2b9bd84c8ebd724322a4f554c316ce28f484e7114713df48165553b0e4648a6` · propuesta: `d773d84a5cd5686b2a8c9172f952c53bf148b2eb42277247cd6384909c7d59c4`

## AI-GSI-B2-T08-003

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente pregunta y alternativas, con clave D; precisar puertos lógicos de TCP/UDP, su mapeo funcional y diferencia con conectores.

### Antes

¿Qué capa OSI utiliza puertos para comunicación extremo a extremo?

- A. Enlace
- B. Presentación
- C. Física
- D. Transporte **(correcta)**

Explicación: TCP y UDP pertenecen a transporte; enlace trabaja con tramas y física con señales.

### Propuesta

¿Qué capa OSI utiliza puertos para comunicación extremo a extremo?

- A. Enlace
- B. Presentación
- C. Física
- D. Transporte **(correcta)**

Explicación: La comunicación de transporte se sitúa en el nivel 4. En TCP y UDP los puertos identifican extremos para multiplexar y entregar datos a aplicaciones sobre direcciones de red. Es la correspondencia funcional habitual con OSI, cuyo texto normativo describe direcciones y entidades de transporte. Un puerto TCP o UDP es un identificador lógico; no es el conector físico de un equipo. UDP no aporta por ello las mismas garantías de entrega y orden que TCP.

- Error A: Enlace trabaja con transferencia de tramas en el enlace y direcciones de ese ámbito. Sus puertos de switch no son los números de puerto TCP/UDP.
- Error B: Presentación organiza la representación de datos. No realiza la multiplexación de aplicaciones mediante puertos de transporte.
- Error C: Física transmite bits por un medio. Un conector físico no equivale al identificador lógico de comunicación extremo a extremo preguntado.

- [ITU-T X.200 / ISO/IEC 7498-1: Basic Reference Model, The basic model](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I!!PDF-E&lang=e&type=items) · 7.4 The Transport Layer, especialmente 7.4.2–7.4.4; 7.5 The Network Layer, 7.5.3.2 Network-addresses y 7.5.4.2 Routing and relaying · versión: Recomendación X.200 de julio de 1994, PDF público enlazado por la ficha ITU, en vigor según su catálogo; modelo de referencia, no especificación de IP/TCP · comprobado: 2026-10-28
- [IETF RFC 9293: Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293.html) · 3.1 Header Format: Source Port y Destination Port; identificación de extremos de comunicación · versión: STD 7, agosto de 2022; TCP/IP no es una implementación literal del conjunto de protocolos OSI · comprobado: 2026-10-28
- [IETF RFC 768: User Datagram Protocol](https://www.rfc-editor.org/rfc/rfc768.html) · Format y User Interface: puertos de origen/destino y entrega a procesos de usuario · versión: STD 6, agosto de 1980; UDP no añade las garantías de entrega u orden de TCP · comprobado: 2026-10-28

Partida: `64732422b2a5c1d65e4006c327d602f44440473fdf3975068f1f3a7b1a74a5be` · propuesta: `f4f13b03c47e39a5064f41ed6fd1ae45b604ad70551950e0025300109c7b024f`

## AI-GSI-B2-T08-004

Decisión: pending_review · acción: revise.

Motivo: Conservar representación de cuatro capas y clave C; alternativas de un mismo modelo y mapeo explícitamente didáctico, retirando el exclusivamente de una opción.

### Antes

En la representación habitual de cuatro capas TCP/IP, ¿dónde se agrupan las funciones OSI 5 a 7?

- A. Transporte exclusivamente
- B. Acceso a red
- C. Aplicación **(correcta)**
- D. Internet

Explicación: TCP/IP agrupa varias funciones altas del modelo OSI en aplicación.

### Propuesta

En la representación habitual de cuatro capas TCP/IP, ¿dónde se agrupan las funciones OSI 5 a 7?

- A. Transporte.
- B. Acceso a red.
- C. Aplicación. **(correcta)**
- D. Internet.

Explicación: En el esquema didáctico habitual de cuatro capas, aplicación de TCP/IP agrupa funciones que el modelo OSI distribuye entre aplicación, presentación y sesión. La correspondencia es orientativa entre modelos diferentes, no una equivalencia exacta de cada servicio o protocolo. RFC 1122 caracteriza las cuatro capas de Internet, y la comparación de Cisco muestra su agrupación respecto a OSI. Hay representaciones de cinco capas que separan física y enlace.

- Error A: Transporte corresponde funcionalmente al nivel 4 de OSI. No es la agrupación de los niveles superiores 5 a 7 del esquema preguntado.
- Error B: Acceso a red reúne funciones inferiores de enlace y medio en esta representación de cuatro capas. No las funciones superiores de aplicación.
- Error D: Internet corresponde al direccionamiento y encaminamiento de datagramas. No agrupa por sí misma presentación, sesión y aplicación.

- [IETF RFC 1122: Requirements for Internet Hosts — Communication Layers](https://www.rfc-editor.org/rfc/rfc1122.html) · 1.1.3 Internet Protocol Suite: Application, Transport, Internet y Link; 2 Link Layer; 3 Internet Layer · versión: STD 3, octubre de 1989; solo arquitectura y funciones básicas, sin adoptar todas sus prescripciones históricas como requisitos actuales · comprobado: 2026-10-28
- [Cisco: TCP/IP Overview, Document ID 13769](https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13769-5.pdf) · Introducción; Figure 1 TCP/IP Protocol Suite in Relation to the OSI Reference Model, página 2 del PDF; TCP/IP Technology · versión: Documento histórico de 11 páginas; solo correspondencia didáctica de cuatro capas. No se adoptan protocolos de routing obsoletos o referencias sustituidas a RFC 793 como estado actual de TCP · comprobado: 2026-10-28

Partida: `ab904628f0397194f4089c19359909885b6f6c78be5931b6e1c3cfc72539595b` · propuesta: `4c98e1ebe6d3b235e4671126ec93b245757030183a2e50d82ae31f64719e1964`

## AI-GSI-B2-T08-005

Decisión: pending_review · acción: revise.

Motivo: Conservar asociación MAC/puerto y clave C; caso de aprendizaje que distingue MAC origen/destino, VLAN y puerto físico frente a puerto TCP.

### Antes

¿Qué aprende un switch Ethernet para reenviar tramas?

- A. Rutas BGP obligatoriamente
- B. Contraseñas de usuarios
- C. Asociaciones entre MAC y puerto **(correcta)**
- D. Claves privadas de TLS

Explicación: La conmutación de enlace utiliza asociaciones MAC-puerto; no exige funciones de encaminamiento interdominio.

### Propuesta

Un switch Ethernet recibe una trama por una interfaz. Con aprendizaje dinámico normal, ¿qué asociación aprende dentro de la VLAN de esa trama?

- A. La MAC de destino y el puerto por el que entró la trama.
- B. La IP de origen y el puerto por el que entró la trama.
- C. La MAC de origen y el puerto por el que entró la trama. **(correcta)**
- D. La MAC de origen y el puerto TCP de la trama recibida.

Explicación: En el aprendizaje dinámico normal, el switch asocia la MAC de origen con el puerto de entrada dentro de la VLAN correspondiente. Esa asociación permite localizar después el destino al recibir otra trama dirigida a esa MAC. Aprender a partir del origen y consultar para reenviar según el destino son pasos distintos. Un puerto de switch no es un número de puerto TCP y no se requieren rutas BGP para esta conmutación de enlace.

- Error A: La MAC de destino sirve para buscar por dónde reenviar. El puerto de entrada sitúa al emisor, por lo que no se aprende ese destino como si fuera el origen.
- Error B: La tabla MAC de conmutación se forma con direcciones de enlace. Una IP puede ser inspeccionada por otras funciones, pero no sustituye a la MAC en ese aprendizaje.
- Error D: El puerto TCP identifica un extremo de transporte. La tabla aprende el puerto de interfaz del switch por el que llegó la trama.

- [Cisco: CDP, LLDP, MAC, and UDLD Configuration Guide — Configure MAC](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/cdp-lldp-mac-udld/cdp-lldp-mac-udld-configuration-guide/configure-mac.html) · MAC Address Table Management (MATM): MAC address learning y Frame forwarding; asociación origen/puerto/VLAN frente a consulta de destino · versión: Guía web de conmutadores; aprendizaje dinámico normal. No se universaliza flooding multicast o funciones avanzadas a toda configuración · comprobado: 2026-10-28

Partida: `b092e73bc55ec0b1fa0edd734c2dc944a766ceac238322f5acd7d463bb37c104` · propuesta: `a0212c1aecc69f5956447990b5857af0fe8dac04b0f5667e4a85fd6ce9d54a84`

## AI-GSI-B2-T08-006

Decisión: pending_review · acción: revise.

Motivo: Conservar dominios de difusión y clave B; distractores próximos de colisión, nombres y transporte, sin prometer aislamiento completo.

### Antes

¿Qué separa lógicamente una VLAN?

- A. Algoritmos de compresión
- B. Dominios de broadcast **(correcta)**
- C. Versiones del navegador
- D. Todos los dominios DNS públicos

Explicación: Las VLAN segmentan dominios de difusión de enlace.

### Propuesta

¿Qué separa lógicamente una VLAN?

- A. Dominios de colisión de cada medio compartido.
- B. Dominios de difusión de la red de enlace. **(correcta)**
- C. Espacios de nombres DNS de los equipos.
- D. Rangos de puertos de transporte de los servicios.

Explicación: Una VLAN define un dominio lógico de difusión de capa 2 sobre la infraestructura conmutada. Las tramas de broadcast se distribuyen dentro de ese dominio y no se puentean de forma ordinaria a otra VLAN. La comunicación entre VLAN puede habilitarse mediante encaminamiento y sus políticas. Segmentación de enlace no equivale por sí sola a cifrado, autorización completa o aislamiento de toda comunicación entre usuarios.

- Error A: Los dominios de colisión y el funcionamiento del medio o puerto son un concepto diferente. En enlaces full-duplex no hay la contención clásica de un medio Ethernet compartido.
- Error C: DNS organiza nombres y su resolución. Una partición del espacio de nombres no define un dominio de broadcast Ethernet.
- Error D: Los puertos de transporte distinguen servicios o extremos lógicos. No establecen los límites de difusión de tramas de capa 2.

- [Cisco: LAN and WAN Configuration Guide — Configuring Routing Between VLANs](https://www.cisco.com/c/en/us/td/docs/routers/ios-xe/lan-wan/lan-wan/m_lsw-conf-rout-vlan.html) · Overview y LAN Segmentation: dominios de broadcast de capa 2; Communication Between VLANs · versión: Guía web; solo segmentación de enlace e interconexión mediante routing. No se adoptan afirmaciones generales de aislamiento completo o mejora de rendimiento como garantías · comprobado: 2026-10-28

Partida: `308744801ae061315a46b040fa77e03e08fa50d580247ac2c7997fe8691c31ea` · propuesta: `59dfa91c4ea64c58e7c16bed6e99709e66a2cb79386ffad6730e6fb0599f0a70`

## AI-GSI-B2-T08-007

Decisión: pending_review · acción: revise.

Motivo: Conservar resolución IPv4/MAC local y clave C; microcaso del siguiente salto que evita buscar una MAC remota a través de routers.

### Antes

¿Qué hace ARP en IPv4?

- A. Resolver nombres DNS globales
- B. Asignar puertos de aplicación
- C. Resolver una dirección IPv4 a MAC en el enlace local **(correcta)**
- D. Cruzar routers para hallar cualquier MAC remota

Explicación: ARP opera en el enlace local; no es DNS ni atraviesa routers.

### Propuesta

Un host Ethernet conoce la IPv4 del siguiente salto en su enlace, pero no su dirección de enlace. ¿Qué dato obtiene mediante ARP para poder enviarle la trama?

- A. La MAC del destino remoto consultando su router final.
- B. El nombre del siguiente salto mediante el DNS del dominio.
- C. La MAC correspondiente a esa IPv4 en el mismo enlace. **(correcta)**
- D. El puerto TCP en que acepta conexiones ese siguiente salto.

Explicación: En IPv4 sobre Ethernet, ARP obtiene la dirección de enlace correspondiente a una IPv4 del enlace conectado, mediante peticiones y respuestas y su información almacenada. Si el siguiente salto es un router local, se necesita la MAC de su interfaz en ese enlace, no la MAC del destino remoto al que encaminará después. La petición ARP no recorre routers como una consulta global. Proxy ARP puede responder localmente por otra dirección bajo configuración, y IPv6 usa Neighbor Discovery para estas funciones.

- Error A: Una resolución ARP local no consulta a los routers del recorrido para descubrir la MAC del destino final. En cada enlace se usa la dirección del siguiente salto apropiado.
- Error B: Resolver un nombre DNS y resolver una dirección de enlace son tareas distintas. ARP parte aquí de una IPv4 conocida.
- Error D: Los puertos TCP pertenecen a transporte. ARP resuelve una dirección de enlace, no el servicio que acepta una conexión.

- [IETF RFC 826: An Ethernet Address Resolution Protocol](https://www.rfc-editor.org/rfc/rfc826.html) · The Problem; An Example; Packet Generation; Packet Reception: traducción protocolo/dirección Ethernet y petición/respuesta en la red conectada · versión: STD 37, noviembre de 1982; aplicación IPv4/Ethernet, no resolución DNS ni descubrimiento de MAC a través de routers · comprobado: 2026-10-28
- [IETF RFC 1122: Requirements for Internet Hosts — Communication Layers](https://www.rfc-editor.org/rfc/rfc1122.html) · 1.1.3 Internet Protocol Suite: Application, Transport, Internet y Link; 2 Link Layer; 3 Internet Layer · versión: STD 3, octubre de 1989; solo arquitectura y funciones básicas, sin adoptar todas sus prescripciones históricas como requisitos actuales · comprobado: 2026-10-28
- [IETF RFC 4861: Neighbor Discovery for IP version 6 (IPv6)](https://www.rfc-editor.org/rfc/rfc4861.html) · 1 Introduction; 3.1 Comparison with IPv4; 7 Address Resolution · versión: Septiembre de 2007; IPv6 usa Neighbor Discovery para estas funciones, no ARP de IPv4 · comprobado: 2026-10-28

Partida: `34cde92a372112f12458dc08fdb768eac3091c03a3b411b24a68717eba63f7b6` · propuesta: `718050829083051cd67619a377302f57a03fa9ae1750725a36746961fe380841`
