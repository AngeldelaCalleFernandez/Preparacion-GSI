# GSI-EDITORIAL-049 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `451bf5bb1f2984accc3bc78f81fed94fdd6342154edf9f5976f07d9a678e3fce`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P18-105

Decisión: pending_review · acción: revise.

Motivo: Conservar formato Atom y clave A; abreviar distractores de RSS, AtomPub y microformato, eliminando la pista que declaraba que AtomPub no era el formato preguntado.

### Antes

¿Qué es Atom según RFC 4287?

- A. Un formato XML para feeds y entradas de contenido y metadatos. **(correcta)**
- B. El formato RSS 2.0, con su elemento raíz \`rss\` y canales que contienen elementos \`item\` para cada publicación.
- C. El protocolo AtomPub para crear y editar recursos web mediante HTTP, no el formato de feeds definido por RFC 4287.
- D. Un microformato incrustado únicamente en HTML para marcar entradas, sin constituir un vocabulario XML independiente.

Explicación: Atom es un formato XML estandarizado para sindicación web.

### Propuesta

¿Qué es Atom según RFC 4287?

- A. Un formato XML para feeds y entradas de contenido y metadatos. **(correcta)**
- B. Un formato RSS con canales y publicaciones identificadas como item.
- C. Un protocolo HTTP de publicación y edición de recursos web.
- D. Un microformato para incrustar entradas en el marcado HTML.

Explicación: RFC4287 define Atom como formato XML de sindicación de contenido y metadatos. Distingue documentos feed y entry: una entrada también puede aparecer como documento independiente. No define el protocolo de publicación AtomPub, que corresponde a RFC5023 y utiliza HTTP y representaciones Atom. RSS2.0 es otro formato de feed, con estructura propia; el uso de XML no hace intercambiables sus vocabularios ni convierte Atom en un microformato exclusivamente embebido en HTML.

- Error B: La raíz rss, channel e item corresponde a RSS2.0, no a la estructura atom:feed y atom:entry definida por RFC4287.
- Error C: AtomPub es un protocolo para publicar y editar recursos, definido en RFC5023. Puede usar representaciones Atom sin ser el formato de sindicación preguntado.
- Error D: Atom tiene vocabulario XML y documentos propios; no se limita a marcas incrustadas en páginas HTML.

- [IETF: RFC 4287, The Atom Syndication Format](https://www.rfc-editor.org/rfc/rfc4287.html) · Resumen; 1 Introduction; 2 Atom Documents; 4.1.1 atom:feed y 4.1.2 atom:entry: id, title, updated y condiciones de autor, contenido, enlaces y resumen · versión: RFC 4287, diciembre de 2005, publicación Standards Track. Se cita el formato, sin atribuir comprobación de estado posterior en datatracker · comprobado: 2026-10-28
- [IETF: RFC 5023, The Atom Publishing Protocol](https://www.rfc-editor.org/rfc/rfc5023.html) · Resumen; 1 Introduction; 4 Protocol Model; 5 Protocol Operations: publicación y edición de recursos web mediante HTTP y representaciones Atom · versión: RFC 5023, octubre de 2007, publicación Standards Track. Distinto del formato RFC4287; no se atribuye lectura de una actualización de estado posterior · comprobado: 2026-10-28
- [RSS Advisory Board: RSS 2.0 Specification](https://www.rssboard.org/rss-specification) · What is RSS?; estructura rss/channel; Elements of item: campos opcionales con al menos title o description; guid y pubDate opcionales · versión: RSS 2.0, revisión documental 2.0.11 publicada 30-03-2009; atributo version del formato sigue siendo 2.0. No se exige a todos los formatos la misma obligatoriedad de campos · comprobado: 2026-10-28

Partida: `80083e3808b3efac83f35ceee89504147d1734dc0c67b7a55f3f70314412738a` · propuesta: `027de61b6a7e9b1a5e808eb5af8a2115a6c262ba3a72ae04e0d47400fee0589c`

## MAN-GSI-P18-106

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación y clave A; matizar contrato técnico y estabilidad, sin inferir permisos legales o una única serialización.

### Antes

¿Qué diferencia conceptual hay entre feed y scraping?

- A. El feed es una interfaz estructurada publicada por el productor; scraping extrae contenido de páginas sin ese contrato específico. **(correcta)**
- B. El feed obtiene el HTML de una página y extrae fragmentos mediante selectores definidos por el consumidor.
- C. El scraping consume una interfaz estructurada y versionada que el productor publica para distribuir actualizaciones.
- D. La diferencia consiste en el formato: un feed utiliza XML y el scraping utiliza necesariamente JSON.

Explicación: La sindicación ofrece un canal explícito y estable para consumo.

### Propuesta

¿Qué diferencia conceptual hay entre feed y scraping?

- A. El feed es una interfaz estructurada publicada por el productor; scraping extrae contenido de páginas sin ese contrato específico. **(correcta)**
- B. El feed obtiene el HTML de una página y extrae fragmentos mediante selectores definidos por el consumidor.
- C. El scraping consume una interfaz estructurada y versionada que el productor publica para distribuir actualizaciones.
- D. La diferencia consiste en el formato: un feed utiliza XML y el scraping utiliza necesariamente JSON.

Explicación: En la distinción habitual, el feed publica datos estructurados destinados al consumo por clientes o agregadores; el scraping extrae información de la representación de páginas, por ejemplo mediante selectores. Ese contrato es una interfaz técnica explícita, no una garantía jurídica, inmutabilidad o disponibilidad eterna. Los feeds pueden evolucionar y no se limitan conceptualmente a XML; el scraping tampoco implica necesariamente JSON ni demuestra por sí solo permiso o prohibición de reutilización.

- Error B: Extraer fragmentos del HTML mediante selectores del consumidor describe el scraping planteado, no el consumo del feed explícitamente publicado.
- Error C: Una interfaz de actualizaciones publicada y estructurada describe el foco del feed, no la extracción de páginas sin ese contrato técnico.
- Error D: La diferencia no es XML frente a JSON. RSS y Atom usan XML, pero el formato por sí solo no caracteriza todo feed o técnica de scraping.

- [IETF: RFC 4287, The Atom Syndication Format](https://www.rfc-editor.org/rfc/rfc4287.html) · Resumen; 1 Introduction; 2 Atom Documents; 4.1.1 atom:feed y 4.1.2 atom:entry: id, title, updated y condiciones de autor, contenido, enlaces y resumen · versión: RFC 4287, diciembre de 2005, publicación Standards Track. Se cita el formato, sin atribuir comprobación de estado posterior en datatracker · comprobado: 2026-10-28
- [RSS Advisory Board: RSS 2.0 Specification](https://www.rssboard.org/rss-specification) · What is RSS?; estructura rss/channel; Elements of item: campos opcionales con al menos title o description; guid y pubDate opcionales · versión: RSS 2.0, revisión documental 2.0.11 publicada 30-03-2009; atributo version del formato sigue siendo 2.0. No se exige a todos los formatos la misma obligatoriedad de campos · comprobado: 2026-10-28
- [Google Search Central: In-depth guide to how Google Search works](https://developers.google.com/search/docs/fundamentals/how-search-works) · Introducing the three stages; Crawling: descubrimiento/descarga; Indexing: análisis y almacenamiento; Serving search results: consulta, recuperación y relevancia · versión: Documentación web primaria consultada28-10-2026, sin inventar número de edición. Describe Google como ejemplo; ni rastreo ni indexación garantizan inclusión o posición · comprobado: 2026-10-28
- [Scrapy: Scrapy at a glance](https://docs.scrapy.org/en/latest/intro/overview.html) · Definición inicial; Walk-through of an example spider y What just happened?: extracción con selectores CSS/XPath; What else?: fuentes HTML/XML y exportación en varios formatos · versión: La página latest muestra Scrapy2.19.0 en la documentación consultada28-10-2026. No se instala el framework ni se afirma que sirva solo para scraping: también puede consumir APIs o actuar como crawler general. · comprobado: 2026-10-28

Partida: `000fc1ab17159e21434a0882f0d63eb00ac1519ca906e8862e2b653c616d108c` · propuesta: `0e243a75072b2741994d1d1ae554ef582af1e597fe2897cedee12d9962dbcf74`

## MAN-GSI-P18-107

Decisión: pending_review · acción: revise.

Motivo: Conservar metadatos por entrada y clave C; alternativas cercanas a canal, transporte e índice, evitando exigir los mismos campos en RSS y Atom.

### Antes

¿Qué suele contener una entrada de feed?

- A. La tabla de páginas completa del proceso que publica el feed, incluidos sus marcos físicos y permisos de acceso a memoria.
- B. La lista exhaustiva de usuarios y permisos del sistema operativo que autoriza la lectura individual de cada elemento publicado.
- C. Identificador, título, enlace, fecha y contenido/resumen según formato. **(correcta)**
- D. La cadena de certificados TLS del servidor, que sustituye al identificador, la fecha y el contenido de cada entrada del canal.

Explicación: Los feeds describen novedades con metadatos estructurados.

### Propuesta

¿Qué datos suelen describir una entrada individual de un feed, según su formato?

- A. Metadatos del canal: título, editor y frecuencia de actualización.
- B. Cabeceras HTTP: estado, tipo de contenido y directivas de caché del servidor.
- C. Datos de la entrada: identificador, título, fecha y contenido o enlace. **(correcta)**
- D. Datos del índice: términos, documentos y frecuencias para resolver consultas.

Explicación: Una entrada describe una novedad individual mediante campos como identificador, título, fecha, enlaces y contenido o resumen, según el formato. No todos son obligatorios en todo feed: Atom exige id, title y updated y condiciona otros campos; RSS2.0 requiere al menos title o description y permite omitir, por ejemplo, guid o pubDate. Se distingue información de la entrada de metadatos globales del canal, cabeceras de transporte y estructuras del buscador.

- Error A: Título global, editor o política del canal describen el feed como conjunto; no son la caracterización de los datos propios de cada novedad preguntada.
- Error B: Las cabeceras HTTP describen la respuesta de transporte. Pueden acompañar al feed sin constituir los campos de cada entrada.
- Error D: Términos y listas de documentos forman estructuras de indexación; no son el contenido típico de una entrada de sindicación.

- [IETF: RFC 4287, The Atom Syndication Format](https://www.rfc-editor.org/rfc/rfc4287.html) · Resumen; 1 Introduction; 2 Atom Documents; 4.1.1 atom:feed y 4.1.2 atom:entry: id, title, updated y condiciones de autor, contenido, enlaces y resumen · versión: RFC 4287, diciembre de 2005, publicación Standards Track. Se cita el formato, sin atribuir comprobación de estado posterior en datatracker · comprobado: 2026-10-28
- [RSS Advisory Board: RSS 2.0 Specification](https://www.rssboard.org/rss-specification) · What is RSS?; estructura rss/channel; Elements of item: campos opcionales con al menos title o description; guid y pubDate opcionales · versión: RSS 2.0, revisión documental 2.0.11 publicada 30-03-2009; atributo version del formato sigue siendo 2.0. No se exige a todos los formatos la misma obligatoriedad de campos · comprobado: 2026-10-28
- [Elastic: How full-text search works](https://www.elastic.co/docs/solutions/search/full-text/how-full-text-works) · Text analysis; Inverted index creation: dictionary y posting lists, metadatos opcionales de frecuencia/posición; Relevance scoring; Full-text search query · versión: Documentación viva consultada28-10-2026, sin número de versión cerrado en esta página. Definición de índice invertido, sin imponer stemming, BM25 o posiciones a todo buscador · comprobado: 2026-10-28

Partida: `0205526c5c4b6cff45d4982fc78561d786fedc9949bced69fe25e0e530dc212a` · propuesta: `164dbda423278d63f69bae94af29e596bb1637afd514cdd81ce84fd31cb28895`

## MAN-GSI-P18-108

Decisión: pending_review · acción: revise.

Motivo: Conservar modelo de workflow y clave C; precisar definición en el enunciado para no confundir el modelo con ejecución o automatización general.

### Antes

¿Qué es un workflow?

- A. Una notación gráfica normalizada utilizada para representar procesos mediante eventos, actividades, gateways y flujos.
- B. Un componente que interpreta una definición de proceso, crea instancias y coordina la ejecución de sus tareas.
- C. Una definición de tareas, estados, participantes, reglas y transiciones de un proceso. **(correcta)**
- D. Un sistema que evalúa condiciones y tablas de decisión para obtener resultados, sin definir el ciclo completo del proceso.

Explicación: Workflow modela cómo avanza el trabajo y quién actúa.

### Propuesta

¿Qué describe la definición de un workflow?

- A. Una notación gráfica normalizada utilizada para representar procesos mediante eventos, actividades, gateways y flujos.
- B. Un componente que interpreta una definición de proceso, crea instancias y coordina la ejecución de sus tareas.
- C. Una definición de tareas, estados, participantes, reglas y transiciones de un proceso. **(correcta)**
- D. Un sistema que evalúa condiciones y tablas de decisión para obtener resultados, sin definir el ciclo completo del proceso.

Explicación: La definición de un workflow representa el proceso: actividades, reglas de progresión, participantes y estados o condiciones relevantes. El motor interpreta esa definición para crear y coordinar instancias, mientras una notación sirve para expresarla. WfMC distingue funciones de definición y ejecución. El modelo puede combinar trabajo humano y automático y apoyarse en un sistema de reglas, pero ni la notación, ni el motor, ni la evaluación aislada de decisiones son por sí mismos la definición del flujo.

- Error A: La notación es el lenguaje de representación. Un workflow puede expresarse con ella sin que lenguaje y definición concreta sean equivalentes.
- Error B: El motor ejecuta e instancia una definición; es el componente runtime, no el modelo de tareas, participantes y transiciones.
- Error D: Evaluar reglas o tablas puede resolver decisiones del flujo. Ese componente no define por sí solo su secuencia completa y responsabilidades.

- [WfMC: The Workflow Reference Model, archivo AIAI de la Universidad de Edimburgo](https://www.aiai.ed.ac.uk/project/wfmc/ARCHIVE/DOCS/refmodel/rmv1-16.html) · 2.1 workflow; 2.1.1 definición de proceso; 2.3 Process Definition, Workflow Enactment Service y Worklists; 3.3 estados; 3.4 Transition Conditions y Role; 3.8.1–2 monitorización, roles y auditoría · versión: TC00-1003, Issue1.1 de 29-11-1994 según cabecera, autor David Hollingsworth. Documento histórico primario archivado, no especificación actual de una API o producto · comprobado: 2026-10-28
- [OMG: Business Process Model and Notation 2.0.2](https://www.omg.org/spec/BPMN/2.0.2/PDF/) · 7.2–7.3 alcance y elementos; 10.3.3 Tasks, 10.3.4.1 Tasks with Human involvement y User Task, pp.164–166; 10.6 Gateways, pp.286–288; 10.5 eventos de escalada · versión: PDF versión2.0.2, cabecera diciembre2013, formal/2013-12-09. El catálogo OMG fecha la edición formal en enero2014; se distingue cabecera del PDF. Lectura textual, sin afirmar inspección de diagramas · comprobado: 2026-10-28
- [OMG: Decision Model and Notation](https://www.omg.org/dmn/) · Precise specification of business decisions and business rules; complementariedad con BPMN y CMMN; tablas y requisitos de decisiones · versión: Página de presentación del estándar consultada28-10-2026; no se atribuye lectura de una edición completa no abierta de DMN · comprobado: 2026-10-28

Partida: `c9bb7917b6ff534ae1cd8c093c041880592aeec803a012e43cf4eb9633c86c5e` · propuesta: `cc55f440eb864ed38d7c56a2658acf0e0786273d6f168f3907774f52c83792eb`

## MAN-GSI-P18-109

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave D; diferenciar estado, asignación y formulario del avance sujeto a reglas.

### Antes

¿Qué es una transición en workflow?

- A. La representación persistente de la situación actual del caso, sin incluir ninguna regla para abandonarla o avanzar.
- B. La asignación inicial de una tarea a un usuario o grupo, aunque el proceso permanezca en el mismo estado.
- C. La definición de campos y controles de un formulario utilizado para capturar datos durante una actividad.
- D. El paso de un estado o actividad a otro conforme a reglas/condiciones. **(correcta)**

Explicación: Las transiciones representan el flujo del proceso.

### Propuesta

¿Qué es una transición en workflow?

- A. La representación persistente de la situación actual del caso, sin incluir ninguna regla para abandonarla o avanzar.
- B. La asignación inicial de una tarea a un usuario o grupo, aunque el proceso permanezca en el mismo estado.
- C. La definición de campos y controles de un formulario utilizado para capturar datos durante una actividad.
- D. El paso de un estado o actividad a otro conforme a reglas/condiciones. **(correcta)**

Explicación: Una transición expresa el paso de un estado o actividad a otro conforme a las reglas y condiciones del proceso. Puede depender de un resultado, dato, evento o tiempo; no exige siempre una acción humana ni significa mover un archivo físicamente. El estado registra la situación, la asignación determina quién atiende el trabajo y el formulario recoge datos. Esos elementos pueden influir en una transición sin ser equivalentes al cambio de flujo.

- Error A: Persistir la situación describe el estado actual. La transición es el paso entre estados o actividades según las condiciones aplicables.
- Error B: Asignar trabajo a un actor puede ocurrir sin cambiar el estado del caso; por sí solo no define una transición del flujo.
- Error C: Los controles del formulario capturan información que podría satisfacer condiciones, pero no constituyen el paso del proceso.

- [WfMC: The Workflow Reference Model, archivo AIAI de la Universidad de Edimburgo](https://www.aiai.ed.ac.uk/project/wfmc/ARCHIVE/DOCS/refmodel/rmv1-16.html) · 2.1 workflow; 2.1.1 definición de proceso; 2.3 Process Definition, Workflow Enactment Service y Worklists; 3.3 estados; 3.4 Transition Conditions y Role; 3.8.1–2 monitorización, roles y auditoría · versión: TC00-1003, Issue1.1 de 29-11-1994 según cabecera, autor David Hollingsworth. Documento histórico primario archivado, no especificación actual de una API o producto · comprobado: 2026-10-28
- [OMG: Business Process Model and Notation 2.0.2](https://www.omg.org/spec/BPMN/2.0.2/PDF/) · 7.2–7.3 alcance y elementos; 10.3.3 Tasks, 10.3.4.1 Tasks with Human involvement y User Task, pp.164–166; 10.6 Gateways, pp.286–288; 10.5 eventos de escalada · versión: PDF versión2.0.2, cabecera diciembre2013, formal/2013-12-09. El catálogo OMG fecha la edición formal en enero2014; se distingue cabecera del PDF. Lectura textual, sin afirmar inspección de diagramas · comprobado: 2026-10-28

Partida: `4a63d68e3f232fa9c5d9adebf4be896a7c96239efd035bd8ae5bc7b239caaa4b` · propuesta: `3b89262c988bf9ee0356c7bafebfbad2583978ab1b58ac4f38ad3b67ff71cad5`

## MAN-GSI-P18-110

Decisión: pending_review · acción: revise.

Motivo: Conservar intervención humana y clave B; cuatro mecanismos del proceso en lugar de kernel, sitemap o namespace, delimitando tarea gestionada.

### Antes

¿Qué es una tarea humana en workflow?

- A. Una llamada privilegiada del kernel que detiene el workflow hasta que el sistema operativo libera los recursos solicitados por el proceso.
- B. Una actividad que requiere intervención/decisión de una persona o rol. **(correcta)**
- C. Un sitemap generado por el motor del proceso para enumerar todas las pantallas que puede visitar el participante durante la tramitación.
- D. Un namespace que agrupa actividades automáticas y determina qué documentos XML pueden utilizar las personas asignadas al flujo.

Explicación: Los workflows pueden combinar tareas humanas y automáticas.

### Propuesta

¿Qué caracteriza una tarea humana gestionada por un workflow?

- A. Una actividad automática que invoca un servicio y obtiene una decisión.
- B. Una actividad que asigna a una persona o rol una intervención o decisión. **(correcta)**
- C. Una actividad que evalúa reglas y devuelve un resultado sin intervención humana.
- D. Una actividad que espera un mensaje externo sin asignar trabajo a una persona.

Explicación: La tarea humana requiere que una persona actúe o decida; en un workflow gestionado se asigna a un actor o rol y su ciclo se sigue mediante software. BPMN distingue User Task, asistida y gestionada por la aplicación, de Manual Task fuera del control del motor. Invocar un servicio, evaluar reglas automáticamente o esperar un mensaje no incorpora por sí mismo una intervención humana, aunque forme parte del mismo proceso.

- Error A: La invocación automática ejecuta una operación técnica. Que el servicio devuelva una decisión no implica que una persona atienda una tarea.
- Error C: La evaluación sin intervención humana corresponde al automatismo indicado; las reglas no sustituyen la característica humana preguntada.
- Error D: Esperar un mensaje externo es un mecanismo de recepción. El mensaje podría originarse en una persona, pero la alternativa no asigna trabajo humano gestionado.

- [OMG: Business Process Model and Notation 2.0.2](https://www.omg.org/spec/BPMN/2.0.2/PDF/) · 7.2–7.3 alcance y elementos; 10.3.3 Tasks, 10.3.4.1 Tasks with Human involvement y User Task, pp.164–166; 10.6 Gateways, pp.286–288; 10.5 eventos de escalada · versión: PDF versión2.0.2, cabecera diciembre2013, formal/2013-12-09. El catálogo OMG fecha la edición formal en enero2014; se distingue cabecera del PDF. Lectura textual, sin afirmar inspección de diagramas · comprobado: 2026-10-28
- [WfMC: The Workflow Reference Model, archivo AIAI de la Universidad de Edimburgo](https://www.aiai.ed.ac.uk/project/wfmc/ARCHIVE/DOCS/refmodel/rmv1-16.html) · 2.1 workflow; 2.1.1 definición de proceso; 2.3 Process Definition, Workflow Enactment Service y Worklists; 3.3 estados; 3.4 Transition Conditions y Role; 3.8.1–2 monitorización, roles y auditoría · versión: TC00-1003, Issue1.1 de 29-11-1994 según cabecera, autor David Hollingsworth. Documento histórico primario archivado, no especificación actual de una API o producto · comprobado: 2026-10-28

Partida: `dcf15e257c0d25fac7762feafd64866919b15ccc3d2c3233c8b4bcc2c5933e28` · propuesta: `e972a4324310963160675e7587a0a3361b1b739ca83e5efa7f314984a61ffefa`

## MAN-GSI-P18-111

Decisión: pending_review · acción: revise.

Motivo: Conservar condición de escalada y clave B; precisar automática para distinguir reasignación manual y no equiparar vencimiento, reintento o evento BPMN.

### Antes

¿Qué es una escalada en workflow?

- A. Cambio manual de responsable de una tarea sin que exista un vencimiento o una regla automática.
- B. Una regla que deriva o eleva una tarea cuando se incumple un plazo o condición. **(correcta)**
- C. Delegación temporal de una tarea a otro actor manteniendo la responsabilidad original.
- D. Reejecución automática de una actividad fallida según una política de reintentos.

Explicación: Escaladas ayudan a controlar SLA y excepciones.

### Propuesta

¿Qué describe una escalada automática en un workflow?

- A. Cambio manual de responsable de una tarea sin que exista un vencimiento o una regla automática.
- B. Una regla que deriva o eleva una tarea cuando se incumple un plazo o condición. **(correcta)**
- C. Delegación temporal de una tarea a otro actor manteniendo la responsabilidad original.
- D. Reejecución automática de una actividad fallida según una política de reintentos.

Explicación: Una escalada automática aplica una regla para elevar la atención o derivar el trabajo cuando se cumple una condición, como un plazo incumplido. Puede notificar a un responsable, crear trabajo adicional o cambiar prioridad según el diseño; no implica necesariamente cancelar la actividad o sustituir al propietario. IBM distingue duración y escalada: poner un vencimiento no la activa por sí solo. El evento de escalada BPMN tampoco debe confundirse automáticamente con error o temporizador.

- Error A: Una reasignación manual sin disparador ni regla automática no describe la escalada automática preguntada, aunque una persona pueda elevar un asunto por otro procedimiento.
- Error C: Delegar temporalmente cambia quién realiza el trabajo bajo una responsabilidad; sin la condición de elevación no es la regla de escalada definida.
- Error D: Reintentar una actividad fallida vuelve a ejecutarla. Puede coexistir con escalado tras varios fallos, pero el reintento solo no es esa elevación.

- [IBM: Creating an escalation for your human task](https://www.ibm.com/docs/en/baw/24.0.x?topic=escalations-creating-escalation-your-human-task) · Definición inicial; About this task; activation state, expected task state, escalation period y notification type; nota: duración de la tarea no activa por sí sola una escalada · versión: IBM Business Automation Workflow24.0.x, configuración Advanced; texto primario indexado cotejado28-10-2026. HTTP directo devuelve403; no se presenta como lectura directa ni se usa el comentario interno de borrador como fecha de publicación · comprobado: 2026-10-28
- [OMG: Business Process Model and Notation 2.0.2](https://www.omg.org/spec/BPMN/2.0.2/PDF/) · 7.2–7.3 alcance y elementos; 10.3.3 Tasks, 10.3.4.1 Tasks with Human involvement y User Task, pp.164–166; 10.6 Gateways, pp.286–288; 10.5 eventos de escalada · versión: PDF versión2.0.2, cabecera diciembre2013, formal/2013-12-09. El catálogo OMG fecha la edición formal en enero2014; se distingue cabecera del PDF. Lectura textual, sin afirmar inspección de diagramas · comprobado: 2026-10-28

Partida: `b4e40b53f2a6679e8939f759506c35102645bf60fa6db4ed4d7ed3a6ab5913cb` · propuesta: `051a0f4a189ec3545f9d65196bea9307970bce22a5409a5cc5f2a27fe877bbb8`

## MAN-GSI-P18-112

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave C; explicar amplitud de BPM y diferencia con notación, motor y RPA sin excluir trabajo manual.

### Antes

¿Qué es BPM?

- A. La notación BPMN utilizada para representar gráficamente procesos, eventos, actividades, compuertas y flujos.
- B. Un producto concreto que ejecuta tareas y transiciones previamente modeladas, equivalente por sí solo a toda la gestión por procesos.
- C. La disciplina de gestionar procesos de extremo a extremo: modelar, ejecutar, medir y mejorar. **(correcta)**
- D. La automatización de acciones repetitivas sobre interfaces de usuario mediante robots, aunque no gobierne el proceso completo.

Explicación: BPM es un enfoque de gestión, más amplio que automatizar una secuencia.

### Propuesta

¿Qué es BPM?

- A. La notación BPMN utilizada para representar gráficamente procesos, eventos, actividades, compuertas y flujos.
- B. Un producto concreto que ejecuta tareas y transiciones previamente modeladas, equivalente por sí solo a toda la gestión por procesos.
- C. La disciplina de gestionar procesos de extremo a extremo: modelar, ejecutar, medir y mejorar. **(correcta)**
- D. La automatización de acciones repetitivas sobre interfaces de usuario mediante robots, aunque no gobierne el proceso completo.

Explicación: BPM es la disciplina de gestionar y mejorar procesos de extremo a extremo: comprenderlos, modelarlos, ejecutarlos, medirlos y revisar resultados. Puede incluir tareas humanas, automatización y cambios organizativos; no exige automatizar toda actividad. OMG destaca mejora continua e iterativa y también procesos manuales más repetibles. Una notación, un motor o robots RPA son herramientas o enfoques de apoyo, sin agotar por sí solos el gobierno del proceso.

- Error A: BPMN es una notación para modelar procesos; BPM incluye además ejecución, medición, responsabilidades y mejora.
- Error B: El motor ejecuta modelos, pero adquirirlo o usarlo no aporta por sí solo toda la disciplina de análisis y mejora de procesos.
- Error D: Automatizar acciones de interfaz mediante robots puede apoyar una actividad; sin visión y gobierno del proceso completo no define todo BPM.

- [OMG: Business Process Management Portal](https://www.omg.org/bpm/) · Introducción: mejora continua e iterativa de procesos, personas, automatización y procesos manuales; complementariedad con SOA; BPMM · versión: Página primaria informativa consultada28-10-2026, sin fecha editorial o versión cerrada indicada. No equivale a que comprar un motor garantice mejora de procesos · comprobado: 2026-10-28
- [OMG: Business Process Model and Notation 2.0.2](https://www.omg.org/spec/BPMN/2.0.2/PDF/) · 7.2–7.3 alcance y elementos; 10.3.3 Tasks, 10.3.4.1 Tasks with Human involvement y User Task, pp.164–166; 10.6 Gateways, pp.286–288; 10.5 eventos de escalada · versión: PDF versión2.0.2, cabecera diciembre2013, formal/2013-12-09. El catálogo OMG fecha la edición formal en enero2014; se distingue cabecera del PDF. Lectura textual, sin afirmar inspección de diagramas · comprobado: 2026-10-28
- [WfMC: The Workflow Reference Model, archivo AIAI de la Universidad de Edimburgo](https://www.aiai.ed.ac.uk/project/wfmc/ARCHIVE/DOCS/refmodel/rmv1-16.html) · 2.1 workflow; 2.1.1 definición de proceso; 2.3 Process Definition, Workflow Enactment Service y Worklists; 3.3 estados; 3.4 Transition Conditions y Role; 3.8.1–2 monitorización, roles y auditoría · versión: TC00-1003, Issue1.1 de 29-11-1994 según cabecera, autor David Hollingsworth. Documento histórico primario archivado, no especificación actual de una API o producto · comprobado: 2026-10-28

Partida: `cc8c891f8b3d01a0ee287b9f64d0bf01b66212d7312320d52bce28591d39efbd` · propuesta: `ed996a43e4017ed5467347a6313d18aa763ab25656489cfacb69b6297a9f237d`

## MAN-GSI-P18-113

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra pregunta y clave D; distinguir BPMN de BPEL, DMN y CMMN con fuentes de sus autores y reconocer complementariedad.

### Antes

¿Qué es BPMN?

- A. Un lenguaje ejecutable para describir la orquestación de servicios y el intercambio de mensajes de un proceso.
- B. Una notación para representar decisiones mediante requisitos, modelos de decisión y tablas de reglas.
- C. Una notación orientada a gestión de casos, hitos y tareas cuyo flujo no queda completamente predeterminado.
- D. Una notación estandarizada para modelar procesos con eventos, actividades, gateways y flujos. **(correcta)**

Explicación: BPMN aporta un lenguaje visual común para procesos.

### Propuesta

¿Qué es BPMN?

- A. Un lenguaje ejecutable para describir la orquestación de servicios y el intercambio de mensajes de un proceso.
- B. Una notación para representar decisiones mediante requisitos, modelos de decisión y tablas de reglas.
- C. Una notación orientada a gestión de casos, hitos y tareas cuyo flujo no queda completamente predeterminado.
- D. Una notación estandarizada para modelar procesos con eventos, actividades, gateways y flujos. **(correcta)**

Explicación: BPMN es la notación estandarizada de OMG para modelar procesos mediante eventos, actividades, gateways y flujos, entre otros elementos. Puede representar procesos y colaboraciones y establece semántica, sin que cualquier dibujo sea automáticamente ejecutable en cualquier motor. WS-BPEL describe comportamiento basado en servicios web, DMN modela decisiones y CMMN casos con evolución menos predeterminada. Pueden complementarse; no son simplemente nombres alternativos para la misma notación.

- Error A: La orquestación basada en servicios web corresponde al foco WS-BPEL descrito. BPMN aporta la notación de procesos preguntada y no se reduce a ese lenguaje.
- Error B: Requisitos de decisiones, tablas y reglas caracterizan DMN; una decisión puede participar en un proceso BPMN sin sustituir su notación.
- Error C: La gestión de casos adaptativos y tareas no totalmente secuenciadas corresponde al foco CMMN; complementa BPMN, pero no es su definición.

- [OMG: Business Process Model and Notation 2.0.2](https://www.omg.org/spec/BPMN/2.0.2/PDF/) · 7.2–7.3 alcance y elementos; 10.3.3 Tasks, 10.3.4.1 Tasks with Human involvement y User Task, pp.164–166; 10.6 Gateways, pp.286–288; 10.5 eventos de escalada · versión: PDF versión2.0.2, cabecera diciembre2013, formal/2013-12-09. El catálogo OMG fecha la edición formal en enero2014; se distingue cabecera del PDF. Lectura textual, sin afirmar inspección de diagramas · comprobado: 2026-10-28
- [OASIS: WS-BPEL2.0](https://docs.oasis-open.org/wsbpel/2.0/OS/wsbpel-v2.0-OS.html) · Resumen y 1 Introduction; procesos ejecutables y abstractos basados en interfaces de servicios web; coordinación de interacciones · versión: OASIS Standard de11-04-2007, versión2.0. Incluye procesos abstractos además de ejecutables; no se afirma que cualquier orquestación requiera BPEL · comprobado: 2026-10-28
- [OMG: Decision Model and Notation](https://www.omg.org/dmn/) · Precise specification of business decisions and business rules; complementariedad con BPMN y CMMN; tablas y requisitos de decisiones · versión: Página de presentación del estándar consultada28-10-2026; no se atribuye lectura de una edición completa no abierta de DMN · comprobado: 2026-10-28
- [OMG: Case Management Model and Notation](https://www.omg.org/cmmn/) · Definición y finalidad: casos, información viva y actividades en orden no totalmente predeterminado; complementariedad con BPMN · versión: Presentación oficial consultada28-10-2026, sin adjudicar a esta página una edición normativa cerrada o revisión del PDF no abierto · comprobado: 2026-10-28

Partida: `ba74a361ee3f535a88f926635464df163b104f7775701e6eaef5622a5ca66bb1` · propuesta: `bd0aee1129633a9a1befadac9bf6c5abde48733084d6e15dead87d08f50a1305`

## MAN-GSI-P18-114

Decisión: pending_review · acción: revise.

Motivo: Conservar función de gateway y clave A; cuatro elementos BPMN próximos, sin firewall, índice o sistema de archivos ajenos.

### Antes

¿Qué representa un gateway en BPMN?

- A. Una bifurcación, decisión o sincronización del flujo según su tipo. **(correcta)**
- B. Un firewall de red necesariamente.
- C. Un índice invertido.
- D. Un sistema de archivos.

Explicación: Los gateways controlan divergencia/convergencia del proceso.

### Propuesta

¿Qué representa un gateway en BPMN?

- A. El control de bifurcación o convergencia del flujo según el tipo de gateway. **(correcta)**
- B. Una actividad que ejecuta el trabajo necesario antes de continuar el flujo.
- C. Un evento que representa un suceso que afecta a la ejecución del proceso.
- D. Un objeto de datos que representa información usada o producida por tareas.

Explicación: Un gateway controla la divergencia o convergencia de flujos de secuencia. Según su tipo puede decidir rutas, abrir ramas o sincronizarlas; no todos los gateways eligen una sola salida ni todos sincronizan entradas. BPMN distingue ese control del trabajo de una actividad, del suceso representado por un evento y de los datos utilizados. El gateway no representa trabajo realizado ni impone por sí solo coste o duración operativa en el modelo.

- Error B: La actividad representa trabajo; el gateway controla cómo se separa o reúne el flujo, sin ejecutar ese trabajo por sí mismo.
- Error C: Un evento representa algo que ocurre y afecta al flujo. Aunque un gateway pueda basarse en eventos, ambos elementos tienen funciones distintas.
- Error D: El objeto de datos describe información usada o producida; no decide por sí mismo la divergencia o sincronización de flujos.

- [OMG: Business Process Model and Notation 2.0.2](https://www.omg.org/spec/BPMN/2.0.2/PDF/) · 7.2–7.3 alcance y elementos; 10.3.3 Tasks, 10.3.4.1 Tasks with Human involvement y User Task, pp.164–166; 10.6 Gateways, pp.286–288; 10.5 eventos de escalada · versión: PDF versión2.0.2, cabecera diciembre2013, formal/2013-12-09. El catálogo OMG fecha la edición formal en enero2014; se distingue cabecera del PDF. Lectura textual, sin afirmar inspección de diagramas · comprobado: 2026-10-28

Partida: `beec4ad99c3f68cfaac5684c1eab0e915db7d1c2cbd8f10eadde59fb19a1a9b5` · propuesta: `3bc1d076802b2fed7c66146a01bbc47e09bbb9f2c17278d2db132c6c69fe3608`

## MAN-GSI-P18-115

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación y clave B; reconocer solapamiento y evitar fronteras absolutas entre workflow y orquestación.

### Antes

¿Qué diferencia hay entre workflow y orquestación técnica?

- A. Ambos términos designan el mismo concepto y se diferencian únicamente por la herramienta utilizada para dibujar el proceso.
- B. Workflow puede incluir personas y reglas de negocio; orquestación coordina principalmente servicios/operaciones técnicas. **(correcta)**
- C. Workflow describe tareas humanas no automatizables, mientras la orquestación ejecuta cualquier regla de negocio de la organización.
- D. Orquestación se limita a documentos y expedientes, mientras workflow coordina exclusivamente servicios y APIs.

Explicación: Pueden solaparse, pero su foco típico es distinto.

### Propuesta

¿Qué diferencia hay entre workflow y orquestación técnica?

- A. Ambos términos designan el mismo concepto y se diferencian únicamente por la herramienta utilizada para dibujar el proceso.
- B. Workflow puede incluir personas y reglas de negocio; orquestación coordina principalmente servicios/operaciones técnicas. **(correcta)**
- C. Workflow describe tareas humanas no automatizables, mientras la orquestación ejecuta cualquier regla de negocio de la organización.
- D. Orquestación se limita a documentos y expedientes, mientras workflow coordina exclusivamente servicios y APIs.

Explicación: En la distinción de foco planteada, el workflow organiza trabajo y reglas, incluidas intervenciones humanas; una orquestación técnica coordina servicios u operaciones. Pueden solaparse: un workflow puede orquestar servicios y una orquestación puede implementar reglas de negocio o integrarse con tareas humanas. WfMC contempla usuarios y aplicaciones, y WS-BPEL ejemplifica coordinación por servicios web. No son categorías separadas por una frontera absoluta de herramienta, sector o formato.

- Error A: Compartir herramientas o representar secuencias no hace idénticos todos los usos: el foco humano/negocio frente a coordinación técnica ayuda a distinguirlos.
- Error C: Un workflow puede incluir automatismos y no solo tareas humanas; la orquestación tampoco ejecuta necesariamente toda regla de la organización.
- Error D: Invierte y restringe los focos: la orquestación puede coordinar servicios y el workflow no se limita exclusivamente a APIs.

- [WfMC: The Workflow Reference Model, archivo AIAI de la Universidad de Edimburgo](https://www.aiai.ed.ac.uk/project/wfmc/ARCHIVE/DOCS/refmodel/rmv1-16.html) · 2.1 workflow; 2.1.1 definición de proceso; 2.3 Process Definition, Workflow Enactment Service y Worklists; 3.3 estados; 3.4 Transition Conditions y Role; 3.8.1–2 monitorización, roles y auditoría · versión: TC00-1003, Issue1.1 de 29-11-1994 según cabecera, autor David Hollingsworth. Documento histórico primario archivado, no especificación actual de una API o producto · comprobado: 2026-10-28
- [OASIS: WS-BPEL2.0](https://docs.oasis-open.org/wsbpel/2.0/OS/wsbpel-v2.0-OS.html) · Resumen y 1 Introduction; procesos ejecutables y abstractos basados en interfaces de servicios web; coordinación de interacciones · versión: OASIS Standard de11-04-2007, versión2.0. Incluye procesos abstractos además de ejecutables; no se afirma que cualquier orquestación requiera BPEL · comprobado: 2026-10-28
- [OMG: Business Process Management Portal](https://www.omg.org/bpm/) · Introducción: mejora continua e iterativa de procesos, personas, automatización y procesos manuales; complementariedad con SOA; BPMM · versión: Página primaria informativa consultada28-10-2026, sin fecha editorial o versión cerrada indicada. No equivale a que comprar un motor garantice mejora de procesos · comprobado: 2026-10-28

Partida: `a5baecbab9606668f4e560f2cc49121bc8d7d46a55eba721e7e32c5b87df81be` · propuesta: `8769fcc5471837a53c0849ecab856d4512c194a48b79e7551fbbbd3352a700d2`

## MAN-GSI-P18-116

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de automatizar sin rediseño y clave D; microcaso de duplicidad y reglas erróneas, distinguiendo rapidez, calidad y observabilidad.

### Antes

¿Qué riesgo tiene automatizar un proceso defectuoso sin rediseñarlo?

- A. Garantizar una mejora automática.
- B. Eliminar cualquier necesidad de métricas.
- C. Hacer imposible la auditoría.
- D. Consolidar ineficiencias y errores a mayor velocidad. **(correcta)**

Explicación: BPM requiere analizar y mejorar, no solo digitalizar pasos existentes.

### Propuesta

Se automatiza sin revisar un trámite con duplicidad de tareas y reglas erróneas de derivación. ¿Qué riesgo sigue existiendo?

- A. La automatización valida las reglas por el hecho de ejecutarlas sin intervención.
- B. La mejora de rendimiento elimina la necesidad de medir errores de tramitación.
- C. La ejecución automática impide registrar cómo se han tomado las decisiones.
- D. Las reglas defectuosas pueden reproducir errores e ineficiencias a mayor velocidad. **(correcta)**

Explicación: Automatizar aplica repetidamente el proceso definido; si conserva duplicidades y reglas incorrectas puede extender más rápido esos errores e ineficiencias. Hace falta analizar el proceso y comprobar resultados, no solo reducir tiempo de ejecución. BPM trata la mejora continua, incluidas organización y tareas manuales. El riesgo no significa que todo automatismo falle o que auditar sea imposible: automatización, calidad del diseño, observabilidad y mejora son dimensiones relacionadas pero distintas.

- Error A: Ejecutar automáticamente no demuestra que una regla refleje el objetivo o requisito correcto; una regla errónea puede aplicarse de forma muy consistente.
- Error B: Procesar más rápido no mide corrección ni retrabajo. Deben observarse resultados y objetivos además de rendimiento.
- Error C: Un sistema automatizado puede registrar entradas, decisiones y transiciones. La ausencia de rediseño no hace técnicamente imposible su auditoría.

- [OMG: Business Process Management Portal](https://www.omg.org/bpm/) · Introducción: mejora continua e iterativa de procesos, personas, automatización y procesos manuales; complementariedad con SOA; BPMM · versión: Página primaria informativa consultada28-10-2026, sin fecha editorial o versión cerrada indicada. No equivale a que comprar un motor garantice mejora de procesos · comprobado: 2026-10-28
- [WfMC: The Workflow Reference Model, archivo AIAI de la Universidad de Edimburgo](https://www.aiai.ed.ac.uk/project/wfmc/ARCHIVE/DOCS/refmodel/rmv1-16.html) · 2.1 workflow; 2.1.1 definición de proceso; 2.3 Process Definition, Workflow Enactment Service y Worklists; 3.3 estados; 3.4 Transition Conditions y Role; 3.8.1–2 monitorización, roles y auditoría · versión: TC00-1003, Issue1.1 de 29-11-1994 según cabecera, autor David Hollingsworth. Documento histórico primario archivado, no especificación actual de una API o producto · comprobado: 2026-10-28

Partida: `861283ef3a9f557b475213a6759764aec4b46b3903658d0146dd7e88818ebe9f` · propuesta: `702112760aab5a3f17c2121e320ba2de247e8bf7c315715e64d0d3b1c5039f2d`

## MAN-GSI-P18-117

Decisión: pending_review · acción: revise.

Motivo: Conservar métricas de workflow y clave C; caso de expedientes con demoras pese a interfaz rápida, con distractores técnicos medibles y cercanos.

### Antes

¿Qué métrica ayuda a gestionar un workflow?

- A. Número de píxeles del logo.
- B. Frecuencia de CPU del navegador.
- C. Tiempo de ciclo, cola, SLA, tasa de rechazo/retrabajo o cuellos de botella. **(correcta)**
- D. Cantidad de etiquetas HTML sin contexto.

Explicación: Los procesos deben medirse para identificar demoras y calidad.

### Propuesta

Las pantallas cargan rápido, pero los expedientes tardan en terminar. ¿Qué medición ayuda a localizar demoras del workflow?

- A. El tiempo de renderizado del formulario en el navegador del usuario.
- B. El número de llamadas HTTP que realiza la pantalla de una tarea.
- C. El tiempo de ciclo y de espera por actividad y el cumplimiento de los plazos. **(correcta)**
- D. La latencia de la consulta que carga los datos iniciales del formulario.

Explicación: Para localizar demoras del proceso conviene medir tiempo de ciclo, esperas por actividad y cumplimiento de plazos con eventos fiables y criterios de inicio y fin definidos. Así se distingue trabajo activo de colas o esperas y se relaciona la demora con tramitación, no solo con carga técnica de una pantalla. El ejemplo Camunda compara tiempos de proceso y actividades con umbrales; WfMC contempla monitorización de estado y métricas. Una métrica por sí sola no prueba la causa del retraso.

- Error A: El renderizado ayuda a diagnosticar experiencia o rendimiento de la interfaz; no identifica por sí solo en qué actividad o cola se retrasa el expediente.
- Error B: Contar peticiones describe interacción técnica de la pantalla. Sin tiempos y contexto del proceso no mide la demora entre actividades.
- Error D: La latencia de una consulta puede contribuir al tiempo activo, pero no recoge por sí misma esperas, colas y cumplimiento del plazo global.

- [Felix Mueller/Camunda: KPI Monitoring with Camunda](https://camunda.com/blog/2016/08/kpi-monitoring-with-camunda/) · Introducción; Invoice Showcase; Process Definition KPI Overview; Process Instance KPI Overview: duración de proceso/actividad y comparación con umbrales · versión: Artículo primario de18-08-2016, ejemplo histórico de monitorización de tiempos. No es documentación actual de instalación ni exigencia de usar su plugin · comprobado: 2026-10-28
- [WfMC: The Workflow Reference Model, archivo AIAI de la Universidad de Edimburgo](https://www.aiai.ed.ac.uk/project/wfmc/ARCHIVE/DOCS/refmodel/rmv1-16.html) · 2.1 workflow; 2.1.1 definición de proceso; 2.3 Process Definition, Workflow Enactment Service y Worklists; 3.3 estados; 3.4 Transition Conditions y Role; 3.8.1–2 monitorización, roles y auditoría · versión: TC00-1003, Issue1.1 de 29-11-1994 según cabecera, autor David Hollingsworth. Documento histórico primario archivado, no especificación actual de una API o producto · comprobado: 2026-10-28

Partida: `72a951dc35dc22ed8d7995e8c68894b4b3f5241d3667c9c2274aa1ce8df6de73` · propuesta: `e2c05a846a49ffda89b1787a7f778573c575d6b525407d9085cfd6d10588ba26`

## MAN-GSI-P18-118

Decisión: pending_review · acción: revise.

Motivo: Conservar ventaja de bandeja por rol y clave A; microcaso de responsables que cambian, sin confundir asignación funcional y permisos.

### Antes

¿Qué ventaja aporta una bandeja de tareas por rol?

- A. Asignar trabajo según responsabilidad, prioridad y estado, con trazabilidad. **(correcta)**
- B. Mostrar la misma lista de trabajo a todos los usuarios sin considerar permisos, responsabilidad, prioridad o estado.
- C. Asignar permanentemente todas las tareas a una cuenta compartida para evitar cambios cuando varíe el equipo.
- D. Enviar avisos por correo sin registrar aceptación, reasignación, vencimiento ni resultado dentro del workflow.

Explicación: La gestión de tareas necesita identidad, permisos y seguimiento.

### Propuesta

Un equipo cambia de integrantes y necesita atender tareas según su función sin perder seguimiento. ¿Qué aporta una bandeja de tareas por rol?

- A. Asignar trabajo por responsabilidad, prioridad y estado, registrando su seguimiento. **(correcta)**
- B. Enviar el mismo listado sin filtrar responsabilidades y dejar la selección al equipo.
- C. Asignar a cuentas personales sin relacionarlas con la función que desempeñan.
- D. Reenviar avisos de tareas sin registrar aceptación, reasignación o resultado.

Explicación: La bandeja por rol relaciona el trabajo pendiente con responsabilidades y candidatos adecuados, permite priorizarlo según estado y registra su atención y cambios de asignación. WfMC distingue roles, participantes, worklists y el componente que gestiona su interacción con el motor. Cambiar de persona no exige perder la identidad del caso. El rol de asignación no sustituye por sí solo la autorización de acceso; ambas deben coordinarse con la política y el seguimiento.

- Error B: Un listado sin responsabilidad definida traslada al equipo la elección informal y no asegura asignación trazable conforme al rol requerido.
- Error C: Las cuentas individuales aportan identidad, pero sin relación con la función no gestionan la asignación por responsabilidad que se necesita.
- Error D: Un aviso puede complementar la bandeja, pero sin registrar aceptación y resultado no proporciona el seguimiento de trabajo del workflow.

- [WfMC: The Workflow Reference Model, archivo AIAI de la Universidad de Edimburgo](https://www.aiai.ed.ac.uk/project/wfmc/ARCHIVE/DOCS/refmodel/rmv1-16.html) · 2.1 workflow; 2.1.1 definición de proceso; 2.3 Process Definition, Workflow Enactment Service y Worklists; 3.3 estados; 3.4 Transition Conditions y Role; 3.8.1–2 monitorización, roles y auditoría · versión: TC00-1003, Issue1.1 de 29-11-1994 según cabecera, autor David Hollingsworth. Documento histórico primario archivado, no especificación actual de una API o producto · comprobado: 2026-10-28
- [OMG: Business Process Model and Notation 2.0.2](https://www.omg.org/spec/BPMN/2.0.2/PDF/) · 7.2–7.3 alcance y elementos; 10.3.3 Tasks, 10.3.4.1 Tasks with Human involvement y User Task, pp.164–166; 10.6 Gateways, pp.286–288; 10.5 eventos de escalada · versión: PDF versión2.0.2, cabecera diciembre2013, formal/2013-12-09. El catálogo OMG fecha la edición formal en enero2014; se distingue cabecera del PDF. Lectura textual, sin afirmar inspección de diagramas · comprobado: 2026-10-28

Partida: `148167dc904febdfea5bb5295d1442823e745dd3e93aedfa8914eb4158f06393` · propuesta: `71938419e3474aee31d08fab3163a1ff48257cb6a7a157134ab605361164cac8`

## MAN-GSI-P18-119

Decisión: pending_review · acción: revise.

Motivo: Conservar gobierno de versiones y clave C; microcaso de regla crítica con instancias abiertas, distinguiendo despliegue, coexistencia y migración evaluada.

### Antes

¿Qué debe ocurrir cuando cambia una regla de negocio en un workflow crítico?

- A. Modificarlo en producción sin registrar.
- B. Eliminar historiales.
- C. Versionar el proceso/reglas, evaluar instancias en curso y mantener trazabilidad del cambio. **(correcta)**
- D. Forzar todas las instancias a reiniciar sin análisis.

Explicación: El gobierno de versiones evita inconsistencias y permite auditoría.

### Propuesta

Cambia una regla de aprobación en un workflow crítico con instancias en curso. ¿Cómo debe gobernarse ese cambio?

- A. Desplegar la nueva regla suponiendo que todas las instancias pasan a ella.
- B. Mantener la versión anterior sin registrar qué regla se aplica a cada caso.
- C. Versionar reglas y proceso, evaluar los casos abiertos y trazar el cambio. **(correcta)**
- D. Cancelar y reiniciar cada caso abierto sin valorar su estado o efectos.

Explicación: El cambio debe versionarse y comprobarse, evaluando cómo afecta a instancias nuevas y en curso y conservando trazabilidad de las decisiones. No se presume que publicar una versión migre automáticamente las instancias existentes ni que reiniciar siempre sea seguro. Camunda8.8 permite coexistencia de versiones y migración con plan, mapeos y limitaciones; una migración técnicamente admitida puede seguir siendo semánticamente inadecuada. Es un ejemplo de motor, no una regla universal de funcionamiento de cualquier producto.

- Error A: Publicar una definición no garantiza que las instancias ya abiertas cambien de versión; hay que conocer el comportamiento del motor y decidir su tratamiento.
- Error B: Conservar una versión puede ser una decisión válida, pero omitir qué regla rige cada caso impide el control y la trazabilidad del cambio.
- Error D: Cancelar y reiniciar puede duplicar efectos o perder estado. Esa medida exige análisis y no es una política automática adecuada para todos los casos.

- [Camunda8: Versioning process definitions](https://docs.camunda.io/docs/8.8/components/best-practices/operations/versioning-process-definitions/) · Understanding versioning; Running versions in parallel; Migrating process instances to a new version; Things to consider before migration · versión: Documentación versionada8.8 consultada28-10-2026. Comportamiento de Camunda, ejemplo técnico sin imponerlo a todo motor de workflow · comprobado: 2026-10-28
- [Camunda8: Process instance migration](https://docs.camunda.io/docs/8.8/components/concepts/process-instance-migration/) · Definición; planes y mapeo de elementos activos; Limitations: instancias activas, mapeos, tipos, estado de espera y casos no detectados automáticamente · versión: Documentación versionada8.8 consultada28-10-2026; se evalúan limitaciones de migración, sin ejecutarla, instalar motor o cambiar procesos de esta aplicación · comprobado: 2026-10-28
- [WfMC: The Workflow Reference Model, archivo AIAI de la Universidad de Edimburgo](https://www.aiai.ed.ac.uk/project/wfmc/ARCHIVE/DOCS/refmodel/rmv1-16.html) · 2.1 workflow; 2.1.1 definición de proceso; 2.3 Process Definition, Workflow Enactment Service y Worklists; 3.3 estados; 3.4 Transition Conditions y Role; 3.8.1–2 monitorización, roles y auditoría · versión: TC00-1003, Issue1.1 de 29-11-1994 según cabecera, autor David Hollingsworth. Documento histórico primario archivado, no especificación actual de una API o producto · comprobado: 2026-10-28

Partida: `a7d1175bb94b66ffbd69a5e98c20333ae0597c19f0ccb3bf53808d9293348c54` · propuesta: `43cb42076054cfe2f116d1274e9fd311618fe30c703445cb415322746a34d3b3`

## MAN-GSI-P18-120

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso de ciclo documental y clave A; formular capacidades sin imponer productos distintos y alternativas con fallos concretos de secuencia o trazabilidad.

### Antes

Caso: un documento se crea, revisa, firma y publica. ¿Qué arquitectura funcional encaja?

- A. DMS/repositorio + workflow de revisión/aprobación + firma cuando proceda + CMS para publicación. **(correcta)**
- B. Publicar el archivo directamente en un CMS sin repositorio documental, revisión, firma o evidencia de aprobación previa.
- C. Modelar tareas en un motor de workflow sin conservar documentos, versiones, firmas ni canal de publicación resultante.
- D. Emitir un feed RSS como repositorio principal, esperando que la sindicación gestione revisión, firma y conservación del documento.

Explicación: Cada familia resuelve una parte del ciclo: documento, proceso, firma y publicación.

### Propuesta

Un documento debe conservar versiones, revisarse y aprobarse, firmarse cuando proceda y publicarse en la web. ¿Qué combinación funcional cubre ese ciclo?

- A. Repositorio con versiones, workflow de aprobación, firma cuando proceda y publicación web. **(correcta)**
- B. Repositorio con versiones y publicación directa, sin registrar la revisión ni aprobación.
- C. Workflow de aprobación y publicación, usando adjuntos sin una versión documental de referencia.
- D. Feed de novedades como historial documental, con firma posterior a la publicación definitiva.

Explicación: El ciclo descrito necesita capacidades de gestión documental, control de revisión y aprobación, firma cuando corresponda y publicación de la versión aprobada. Un DMS o repositorio cubre documentos y versiones; el workflow gobierna estados y responsables; la función de firma aporta su evidencia y un CMS publica contenido web. Pueden integrarse en un solo producto o varios: la respuesta identifica funciones, sin exigir cuatro aplicaciones separadas. Un feed distribuye novedades, pero no sustituye el expediente de aprobación o la conservación de la versión de referencia.

- Error B: Conservar versiones no sustituye la evidencia de revisión y aprobación previa requerida por el supuesto. Publicar directamente deja esa parte del ciclo sin control.
- Error C: Los adjuntos sin versión de referencia dificultan saber qué contenido se aprobó y publicó; el flujo por sí solo no resuelve ese gobierno documental.
- Error D: Un feed distribuye entradas de novedades, no es por sí mismo historial documental de aprobación y conservación. Firmar después no cumple la secuencia de firma previa cuando proceda.

- [Microsoft Support: Overview of document management in SharePoint](https://support.microsoft.com/en-au/sharepoint/libraries/overview-of-document-management-in-sharepoint) · Definición de ciclo documental; The elements of a document management system; The planning process: tipos, metadatos, flujos de revisión/aprobación, versiones y acceso · versión: Documentación histórica SharePoint2013/2016 indicada en cuerpo/cabecera, usada funcionalmente; no se recomienda producto ni se afirma soporte vigente · comprobado: 2026-10-28
- [Drupal User Guide: Drupal as a Content Management System](https://www.drupal.org/docs/user_guide/en/understanding-drupal.html) · 1.1, What is a Content Management System?: añadir, editar, publicar y retirar contenidos web · versión: Página actualizada14-04-2025, consultada28-10-2026. Ejemplo CMS; no se universaliza su arquitectura PHP/LAMP ni se excluye que un CMS integre funciones documentales · comprobado: 2026-10-28
- [WfMC: The Workflow Reference Model, archivo AIAI de la Universidad de Edimburgo](https://www.aiai.ed.ac.uk/project/wfmc/ARCHIVE/DOCS/refmodel/rmv1-16.html) · 2.1 workflow; 2.1.1 definición de proceso; 2.3 Process Definition, Workflow Enactment Service y Worklists; 3.3 estados; 3.4 Transition Conditions y Role; 3.8.1–2 monitorización, roles y auditoría · versión: TC00-1003, Issue1.1 de 29-11-1994 según cabecera, autor David Hollingsworth. Documento histórico primario archivado, no especificación actual de una API o producto · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo y contexto; VI.1 captura, VI.2 registro, VI.4 descripción, VI.5 acceso, VI.7 conservación; VIII procedimientos y X auditoría · versión: Resolución28-06-2012, texto inicial publicado26-07-2012; usada para funciones de gestión documental. Sus remisiones históricas no se presentan como normativa actual · comprobado: 2026-10-28
- [RSS Advisory Board: RSS 2.0 Specification](https://www.rssboard.org/rss-specification) · What is RSS?; estructura rss/channel; Elements of item: campos opcionales con al menos title o description; guid y pubDate opcionales · versión: RSS 2.0, revisión documental 2.0.11 publicada 30-03-2009; atributo version del formato sigue siendo 2.0. No se exige a todos los formatos la misma obligatoriedad de campos · comprobado: 2026-10-28

Partida: `1ebca7969be68d9b6552a70e59a9fdf5f7c00a6600315bb02925ec55794b8353` · propuesta: `39cf7565fd04136781e007e99e5e5f126f343e4048c1a387a5eaa861cfea0fe9`

## MAN-GSI-P18-121

Decisión: pending_review · acción: revise.

Motivo: Conservar descubrimiento/descarga y clave D; alternativas de fases cercanas en vez de permisos o cifrado ajenos.

### Antes

¿Qué hace un crawler, robot o spider?

- A. Calcula por sí solo todo el ranking final.
- B. Gestiona permisos del CMS.
- C. Cifra el contenido.
- D. Descubre y descarga recursos para que puedan analizarse e indexarse. **(correcta)**

Explicación: Crawling es la fase de descubrimiento/captura, distinta de indexación y ranking.

### Propuesta

¿Qué hace un crawler, robot o spider?

- A. Analiza los recursos y construye la estructura consultable del índice.
- B. Ordena los candidatos recuperados por relevancia para cada consulta.
- C. Interpreta una consulta y recupera candidatos de un índice ya construido.
- D. Descubre y descarga recursos para su posterior análisis e indexación. **(correcta)**

Explicación: El crawler descubre recursos y los descarga para que otras etapas puedan analizarlos e indexarlos. Puede partir de enlaces, recursos ya conocidos u otras fuentes de descubrimiento. Google distingue rastreo, indexación y servicio de resultados y advierte que no todo recurso pasa todas las etapas. Un crawler puede filtrar o procesar parcialmente, pero su función característica no es producir por sí solo el ranking final ni atender la consulta del usuario desde el índice.

- Error A: Analizar y construir estructuras consultables corresponde a indexación; utiliza lo capturado por rastreo sin ser su definición característica.
- Error B: Ordenar candidatos según relevancia es ranking para una consulta, una fase distinta del descubrimiento y descarga.
- Error C: Interpretar la consulta y recuperar candidatos usa el índice para responder; no es rastrear recursos de origen.

- [Google Search Central: In-depth guide to how Google Search works](https://developers.google.com/search/docs/fundamentals/how-search-works) · Introducing the three stages; Crawling: descubrimiento/descarga; Indexing: análisis y almacenamiento; Serving search results: consulta, recuperación y relevancia · versión: Documentación web primaria consultada28-10-2026, sin inventar número de edición. Describe Google como ejemplo; ni rastreo ni indexación garantizan inclusión o posición · comprobado: 2026-10-28
- [Elastic: How full-text search works](https://www.elastic.co/docs/solutions/search/full-text/how-full-text-works) · Text analysis; Inverted index creation: dictionary y posting lists, metadatos opcionales de frecuencia/posición; Relevance scoring; Full-text search query · versión: Documentación viva consultada28-10-2026, sin número de versión cerrado en esta página. Definición de índice invertido, sin imponer stemming, BM25 o posiciones a todo buscador · comprobado: 2026-10-28

Partida: `73258fd4a829966f160d9b223d10c992dbce58ceaf0c0bc3a102dfd6606c7796` · propuesta: `199001f9e2d31e172fbd4c188df41e58bf41e61affa91afbada2fd6926537be9`

## MAN-GSI-P18-122

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave C; precisar rastreo, índice y ranking sin garantías automáticas de inclusión.

### Antes

¿Qué es indexación en un buscador?

- A. Descubrir y descargar páginas y recursos siguiendo enlaces para incorporarlos posteriormente al sistema de búsqueda.
- B. Ordenar resultados candidatos mediante señales de relevancia, calidad o contexto después de recuperarlos del índice.
- C. Procesar y organizar contenido en estructuras que permitan recuperación eficiente. **(correcta)**
- D. Interpretar una consulta, buscar coincidencias y construir la respuesta que se presentará al usuario.

Explicación: La indexación transforma contenido en una representación consultable.

### Propuesta

¿Qué es indexación en un buscador?

- A. Descubrir y descargar páginas y recursos siguiendo enlaces para incorporarlos posteriormente al sistema de búsqueda.
- B. Ordenar resultados candidatos mediante señales de relevancia, calidad o contexto después de recuperarlos del índice.
- C. Procesar y organizar contenido en estructuras que permitan recuperación eficiente. **(correcta)**
- D. Interpretar una consulta, buscar coincidencias y construir la respuesta que se presentará al usuario.

Explicación: Indexar procesa y organiza el contenido en representaciones que permiten buscarlo: términos, metadatos y estructuras como índices invertidos, según el sistema. Es distinto de descubrir y descargar el recurso, ordenar candidatos o atender una consulta. Google separa esas etapas y Elastic muestra análisis, construcción de índice y recuperación. Que un recurso haya sido rastreado no garantiza que se indexe; que esté indexado tampoco asegura una posición o aparición concreta en resultados.

- Error A: Seguir enlaces y descargar recursos describe rastreo. Proporciona material para indexar, pero no define su transformación en estructuras consultables.
- Error B: Ordenar candidatos por señales de relevancia describe ranking, que opera al resolver la necesidad de información.
- Error D: Interpretar una consulta y construir la respuesta corresponde al servicio de búsqueda; utiliza el índice, en lugar de ser la indexación del contenido.

- [Google Search Central: In-depth guide to how Google Search works](https://developers.google.com/search/docs/fundamentals/how-search-works) · Introducing the three stages; Crawling: descubrimiento/descarga; Indexing: análisis y almacenamiento; Serving search results: consulta, recuperación y relevancia · versión: Documentación web primaria consultada28-10-2026, sin inventar número de edición. Describe Google como ejemplo; ni rastreo ni indexación garantizan inclusión o posición · comprobado: 2026-10-28
- [Elastic: How full-text search works](https://www.elastic.co/docs/solutions/search/full-text/how-full-text-works) · Text analysis; Inverted index creation: dictionary y posting lists, metadatos opcionales de frecuencia/posición; Relevance scoring; Full-text search query · versión: Documentación viva consultada28-10-2026, sin número de versión cerrado en esta página. Definición de índice invertido, sin imponer stemming, BM25 o posiciones a todo buscador · comprobado: 2026-10-28

Partida: `60322ad151de6515534891fbb97adecc6f1d73c8967af3cbdbaf6f3e2c214c2a` · propuesta: `02f6f71336f5197ab923e31ea3bf99717d1fbabb89607331b97a802795d7c58a`

## MAN-GSI-P18-123

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave C; distinguir índice directo, árbol y vectores, señalando que frecuencias o posiciones son opcionales.

### Antes

¿Qué es un índice invertido?

- A. Una estructura que parte de cada documento y enumera los términos, frecuencias o posiciones que contiene.
- B. Un árbol ordenado que facilita búsquedas por rango y acceso a valores de campos estructurados.
- C. Una estructura que asocia términos con los documentos o posiciones donde aparecen. **(correcta)**
- D. Una colección de vectores que aproxima similitud semántica entre consultas y documentos en un espacio numérico.

Explicación: El índice invertido es básico en recuperación de información textual.

### Propuesta

¿Qué es un índice invertido?

- A. Una estructura que parte de cada documento y enumera los términos, frecuencias o posiciones que contiene.
- B. Un árbol ordenado que facilita búsquedas por rango y acceso a valores de campos estructurados.
- C. Una estructura que asocia términos con los documentos o posiciones donde aparecen. **(correcta)**
- D. Una colección de vectores que aproxima similitud semántica entre consultas y documentos en un espacio numérico.

Explicación: El índice invertido parte de cada término o token y permite localizar los documentos que lo contienen mediante listas de postings; estas pueden añadir frecuencias o posiciones. Se invierte así la perspectiva documento→términos de un índice directo. Elastic describe diccionario y listas de documentos, con metadatos opcionales: no todo índice almacena posiciones ni se limita a un algoritmo de ranking. Árboles de campos y vectores semánticos pueden coexistir sin ser la misma estructura.

- Error A: Partir del documento para enumerar sus términos describe la orientación directa o forward index, inversa a término→documentos.
- Error B: Un árbol ordenado permite búsquedas y rangos sobre claves; no define la lista de documentos asociada a cada término de un índice invertido.
- Error D: Los vectores apoyan recuperación por similitud en un espacio numérico; no son por sí mismos el mapeo de términos a documentos y posiciones.

- [Elastic: How full-text search works](https://www.elastic.co/docs/solutions/search/full-text/how-full-text-works) · Text analysis; Inverted index creation: dictionary y posting lists, metadatos opcionales de frecuencia/posición; Relevance scoring; Full-text search query · versión: Documentación viva consultada28-10-2026, sin número de versión cerrado en esta página. Definición de índice invertido, sin imponer stemming, BM25 o posiciones a todo buscador · comprobado: 2026-10-28

Partida: `3fdd46f47f9ccef8f3ad302342fc820ab94e5d01b0409688dca84ad04f2b2839` · propuesta: `947f2f3f546fd04173d5e01211cf32e823d65729cc905275e95adc8e064c57a2`

## MAN-GSI-P18-124

Decisión: pending_review · acción: revise.

Motivo: Conservar concepto de precisión y clave D; cálculo contextualizado con todos los resultados juzgados para distinguir recall y fracción irrelevante.

### Antes

¿Qué es precision en recuperación de información?

- A. La proporción de relevantes existentes que fueron recuperados.
- B. El número total de documentos.
- C. La velocidad del crawler.
- D. La proporción de resultados recuperados que son relevantes. **(correcta)**

Explicación: Precision mide calidad de los resultados devueltos.

### Propuesta

Un buscador devuelve 20 documentos, todos evaluados: 15 son relevantes. En la colección existen 50 relevantes para esa consulta. ¿Cuál es la precision del resultado?

- A. 15/50 = 0,30
- B. 20/50 = 0,40
- C. 5/20 = 0,25
- D. 15/20 = 0,75 **(correcta)**

Explicación: Precision es la proporción de resultados recuperados que son relevantes: 15/20 = 0,75. Se juzgan los veinte resultados; los otros cinco son irrelevantes. El total de cincuenta relevantes de la colección sirve para recall: 15/50 = 0,30. Cambiar ese denominador confunde precisión con cobertura. La fracción de resultados irrelevantes es 5/20 = 0,25, complemento de precisión en este conjunto completamente juzgado. Estas cifras no miden velocidad ni garantizan la misma calidad para cualquier consulta.

- Error A: Dividir los quince relevantes recuperados entre los cincuenta relevantes existentes calcula recall o cobertura, no precision.
- Error B: Dividir todos los recuperados entre el total relevante mezcla cantidades distintas; no mide la proporción de aciertos entre resultados.
- Error C: Los cinco irrelevantes entre veinte resultados expresan la fracción de resultados incorrectos, complemento de precision en este conjunto juzgado.

- [Elastic: Ranking evaluation](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval) · Available evaluation metrics: Precision at K y Recall at K; necesidad de juicios de relevancia; denominador de resultados devueltos frente al total relevante · versión: Documentación REST viva consultada28-10-2026. Para el caso se juzgan todos los20 resultados y se calcula precisión sobre ese conjunto; no se presupone tratamiento de documentos sin etiquetar · comprobado: 2026-10-28

Partida: `fdcada97d06954b5d8bd55ee1cbdd189a99592050f0f074f5ef084a37fb277c2` · propuesta: `5ad16fdb653572e197a6dac75e2ca81186ecc1e3f349dbef62f6bcfc872715b3`
