# GSI-EDITORIAL-053 — revisión propuesta

Preparado: 2026-10-29. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `e27b701abedf818d034c3c1681c10065256ac8c0672383f7c168f7b52e035700`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T02-009

Decisión: pending_review · acción: revise.

Motivo: Conservar control de WIP y clave C; alternativas cercanas de demanda, tamaño y dotación frente a trabajo iniciado/no terminado.

### Antes

¿Qué restricción utiliza Kanban para gestionar flujo?

- A. Una única entrega al final
- B. Número fijo obligatorio de Sprints anuales
- C. Límites de trabajo en curso **(correcta)**
- D. Prohibición de visualizar tareas

Explicación: Limitar WIP ayuda a gestionar el flujo y detectar acumulaciones.

### Propuesta

¿Qué restricción utiliza Kanban para gestionar flujo?

- A. Fijar el volumen total de peticiones que puede contener el backlog.
- B. Fijar una estimación en puntos igual para cada elemento de trabajo.
- C. Limitar la cantidad de elementos iniciados que aún no se han terminado. **(correcta)**
- D. Fijar el número de personas asignadas sin controlar los elementos activos.

Explicación: El control del trabajo en curso actúa sobre elementos ya iniciados y aún no terminados, no sobre todo el backlog o el tamaño estimado de cada elemento. Kanban pide hacer explícito cómo se controla ese WIP para favorecer un sistema pull: se inicia trabajo cuando hay capacidad. Las excepciones admisibles deben definirse. Un límite ayuda a gestionar acumulaciones, pero no garantiza por sí solo menor tiempo de ciclo si no se atienden bloqueos y flujo.

- Error A: Limitar peticiones pendientes controla demanda o tamaño del backlog, no necesariamente el número de elementos que ya están en proceso.
- Error B: Estimar el tamaño de cada elemento no limita cuántos se comienzan a la vez; son controles distintos.
- Error D: La dotación de personas influye en capacidad, pero fijarla sin controlar elementos activos no constituye un límite de WIP.

- [Coleman y Vacanti: The Kanban Guide](https://kanbanguides.org/the-kanban-guide/2025.5/pdf/kanban-guide.v2025.5.en.pdf) · Definition of Kanban; Defining and Visualizing a Workflow; Actively Managing Items; Improving the Workflow; Flow Metrics, pp.2–4 · versión: Edición 2025.5, 01-05-2025. PDF primario leído textualmente el 28-10-2026. Control explícito del WIP con excepciones definidas; no impone Sprints. Se distingue esta guía mínima de Open Guide de julio 2025 y de convenciones distintas de otras guías · comprobado: 2026-10-28

Partida: `6c5140139adcae34556d804239cc7bb3cf24102bd3b3af1933d26e32d55c8954` · propuesta: `c067a6f971ee995ed5c3c445e78e9f915899f5778bba29d2144c38de087ed8d2`

## AI-GSI-B3-T02-010

Decisión: pending_review · acción: revise.

Motivo: Conservar ausencia de Sprints obligatorios y clave A; explicitar compatibilidad sin inferir ausencia de métricas o control.

### Antes

¿Qué afirmación sobre Kanban es correcta?

- A. No requiere Sprints **(correcta)**
- B. Exige siempre iteraciones Scrum
- C. Elimina mejora continua
- D. Prohíbe métricas de flujo

Explicación: Kanban visualiza y mejora flujo; no depende de Sprints obligatorios.

### Propuesta

¿Qué afirmación sobre Kanban es correcta?

- A. No requiere Sprints, aunque puede utilizarse junto con Scrum. **(correcta)**
- B. Exige cerrar todo trabajo al final de ciclos de idéntica duración.
- C. Permite iniciar trabajo sin atender a capacidad o control del WIP.
- D. Prioriza mantener ocupadas a las personas sobre mejorar el flujo de valor.

Explicación: Kanban define y visualiza el flujo, gestiona activamente sus elementos y mejora ese flujo; su definición mínima no exige Sprints. Puede complementar enfoques que sí los usan, como Scrum. La ausencia de esa obligación no elimina control de WIP, métricas, revisión o mejora. La guía admite mejorar cuando el contexto lo pide, sin esperar una reunión formal de cadencia fija. Se distingue no requerir Sprints de prohibirlos o de trabajar sin control.

- Error B: Los ciclos fijos con cierre de todo trabajo no son una exigencia general de Kanban; confunden una organización temporal concreta con su definición de flujo.
- Error C: Kanban requiere control explícito del trabajo iniciado/no terminado y atender a señales de capacidad, no iniciar de forma ilimitada.
- Error D: El objetivo es optimizar flujo de valor. La ocupación individual no demuestra que los elementos avancen o se terminen.

- [Coleman y Vacanti: The Kanban Guide](https://kanbanguides.org/the-kanban-guide/2025.5/pdf/kanban-guide.v2025.5.en.pdf) · Definition of Kanban; Defining and Visualizing a Workflow; Actively Managing Items; Improving the Workflow; Flow Metrics, pp.2–4 · versión: Edición 2025.5, 01-05-2025. PDF primario leído textualmente el 28-10-2026. Control explícito del WIP con excepciones definidas; no impone Sprints. Se distingue esta guía mínima de Open Guide de julio 2025 y de convenciones distintas de otras guías · comprobado: 2026-10-28
- [Schwaber y Sutherland: The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html) · Scrum Theory; Developers; Scrum Artifacts, Definition of Done; relación de calidad e Increment · versión: Edición noviembre 2020, HTML equivalente alPDF según la página; leído el 28-10-2026 durante la preparación consecutiva del052. DoD es compromiso del Increment; criterios específicos de aceptación no son un cuarto artefacto o sinónimo exacto de DoD · comprobado: 2026-10-28

Partida: `0058b7e95ee2d6955e1bc20b4715d220a9ad3223c7a6891c2609b95014b96adc` · propuesta: `ad0360e984227b24707897b80f3496d4e591a1bc5cf4067e5d3e03835a4ee12f`

## AI-GSI-B3-T02-014

Decisión: pending_review · acción: revise.

Motivo: Conservar planificación de calidad y clave C; delimitarScrum para no imponerDoD a cualquier ciclo y diferenciarla de aceptación específica.

### Antes

¿Cómo se planifica calidad en desarrollo según el tema?

- A. Esperando a que el usuario detecte todo
- B. Solo comprando una herramienta
- C. Con Definition of Done, estándares, revisiones y criterios de aceptación **(correcta)**
- D. Con una etiqueta de calidad sin evidencia

Explicación: La calidad necesita criterios y prácticas aplicados durante el trabajo.

### Propuesta

En un equipo Scrum, ¿qué enfoque permite planificar y comprobar la calidad del desarrollo?

- A. Aceptar lo que compile y aplazar la revisión de calidad hasta la entrega final.
- B. Aplicar criterios de aceptación sin acordar estándares comunes de producto.
- C. Acordar DoD, estándares, revisiones y criterios de aceptación verificables. **(correcta)**
- D. Medir actividad y dar por acreditada la calidad por el volumen de trabajo realizado.

Explicación: La calidad necesita criterios y prácticas durante el trabajo: estándares aplicables, revisión, pruebas y evidencia de aceptación. En Scrum, Definition of Done describe el estado de calidad del Increment y aporta un entendimiento común de terminado. Los criterios de aceptación concretan resultados de una historia o requisito, sin ser sinónimo exacto de DoD. Compilar o contar actividad no acredita esos resultados. Fuera de Scrum pueden utilizarse otras convenciones, manteniendo criterios y controles apropiados.

- Error A: Compilar detecta determinados problemas, pero no acredita comportamiento, seguridad u otros atributos; aplazar toda revisión pierde detección temprana.
- Error B: Los criterios específicos ayudan, pero sin estándares comunes y definición compartida de terminado no cubren toda la planificación de calidad planteada.
- Error D: Cantidad de actividad mide trabajo o esfuerzo, no cumplimiento de criterios ni calidad de los resultados obtenidos.

- [Schwaber y Sutherland: The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html) · Scrum Theory; Developers; Scrum Artifacts, Definition of Done; relación de calidad e Increment · versión: Edición noviembre 2020, HTML equivalente alPDF según la página; leído el 28-10-2026 durante la preparación consecutiva del052. DoD es compromiso del Increment; criterios específicos de aceptación no son un cuarto artefacto o sinónimo exacto de DoD · comprobado: 2026-10-28
- [ISTQB: CTFL Syllabus v4.0.1](https://istqb.org/?download_id=3345&sdm_process_download=1) · 1.4.4 trazabilidad, pp.20–21; 2.1.2 buenas prácticas de pruebas, pp.25–26; 5.1.3 criterios de entrada/salida, p.49 · versión: v4.0.1, 15-09-2024; PDF oficial leído textualmente el 28-10-2026. Se utiliza alcance de criterios, pruebas y evidencia sin prescribirScrum a cualquier ciclo ni afirmar que enlazar una prueba equivale a que pase · comprobado: 2026-10-28

Partida: `9a06d329d50dadfea042426b6253e3c642a6585e2dfa596312124a7ade2549d7` · propuesta: `6827d8648db4a9d10e13fa657c1346d71b38111f50a1c56e420fc44bbd03b990`

## AI-GSI-B3-T02-015

Decisión: pending_review · acción: revise.

Motivo: Conservar utilidad de redes PERT/CPM y clave D; distractores de EDT, valor ganado y responsabilidades, sin prometer fecha cierta o holgura cero universal.

### Antes

En una red de proyecto, ¿qué utilidad tienen PERT/CPM?

- A. Calcular hashes de artefactos
- B. Reemplazar la especificación funcional
- C. Definir únicamente permisos de usuario
- D. Analizar secuencias, dependencias y camino crítico **(correcta)**

Explicación: Estas técnicas conectan duraciones y dependencias para comprender el calendario.

### Propuesta

En una red de proyecto, ¿qué utilidad tienen PERT/CPM?

- A. Descomponer el alcance en entregables y paquetes de trabajo manejables.
- B. Comparar el valor ganado con coste real y valor planificado a una fecha.
- C. Asignar responsables y participantes a cada decisión y entregable.
- D. Analizar secuencias, dependencias y caminos que condicionan la fecha final. **(correcta)**

Explicación: PERT y CPM representan y analizan una red de actividades con dependencias y duraciones para comprender el calendario y los caminos que condicionan su final. PERT clásico incorpora estimaciones de duración bajo incertidumbre; ello no convierte la fecha en certeza. El camino conductor y las holguras deben comprobarse con la lógica, restricciones y calendarios del modelo. No se confunden con descomponer alcance, asignar responsabilidades o calcular rendimiento de valor ganado.

- Error A: Descomponer alcance y trabajo caracteriza la EDT/WBS. Es una base útil para planificar, pero no describe el análisis temporal de una red.
- Error B: Esa comparación pertenece al valor ganado y sus indicadores, no al análisis de secuencia y dependencias de PERT/CPM.
- Error C: Asignar responsabilidades organiza quién interviene; no calcula caminos, fechas o holguras de la red.

- [GAO: Schedule Assessment Guide](https://www.gao.gov/assets/690/687052.pdf) · The Critical Path Method y BestPractice6, camino válido/longest path; BestPractice3, Resources, Effort, and Duration, pp.49–50; restricciones, calendarios y recursos · versión: GAO-16-89G, diciembre 2015; versión accesible oficial de240 páginas leída textualmente el 28-10-2026. No se confunde holgura cero universal con camino conductor en cualquier calendario o restricción; duplicar recursos no garantiza reducir a la mitad la duración · comprobado: 2026-10-28
- [David T. Hulett/PMI: Project schedule risk analysis](https://www.pmi.org/learning/library/project-schedule-risk-analysis-simulation-4620) · What Is PERT?: lógica de red, incertidumbre y duración de actividades; camino con duraciones medias; límites de convergencia de caminos · versión: PM Network 14(2),43–47, febrero 2000, artículo del autor leído públicamente el 28-10-2026. No se equipara cálculo de red a certeza de fecha o probabilidad exacta en redes con varios caminos · comprobado: 2026-10-28

Partida: `6122281cee3631dbbb63a64de63509b93850d96a26903b58db5e1a925e05e71a` · propuesta: `0eb3ece5518292941c231d550950e128653a7ad175140aa906805cc5d23957f7`

## AI-GSI-B3-T02-016

Decisión: pending_review · acción: revise.

Motivo: Conservar EV=60/AC=50/PV=80 y clave D; cuatro combinaciones de coste/avance plausibles y longitud comparable, con cálculo independiente y límites de inferencia.

### Antes

Con EV=60, AC=50 y PV=80, ¿qué lectura combinada es correcta?

- A. Coste desfavorable y avance superior al plan
- B. Proyecto terminado
- C. Ambos indicadores necesariamente iguales a uno
- D. Coste favorable y avance inferior al plan **(correcta)**

Explicación: CPI=1,2 y SPI=0,75; coste y avance pueden mostrar señales diferentes.

### Propuesta

En el mismo corte de seguimiento y con unidades comparables, EV=60, AC=50 y PV=80. ¿Qué lectura combinada es correcta?

- A. Coste desfavorable y avance superior al previsto.
- B. Coste favorable y avance superior al previsto.
- C. Coste desfavorable y avance inferior al previsto.
- D. Coste favorable y avance inferior al previsto. **(correcta)**

Explicación: CPI=EV/AC=60/50=1,2: el valor presupuestado del trabajo realizado supera su coste real, señal favorable de eficiencia de coste a la fecha. SPI=EV/PV=60/80=0,75: se ha ganado menos valor que el planificado, señal desfavorable de avance. Equivalentemente, CV=+10 y SV=−20. Los datos deben corresponder al mismo corte y base. No prueban que el proyecto esté terminado, ahorro final ni un retraso de un 25 % medido en días.

- Error A: Invierte ambas lecturas: CPI es mayor que uno y favorable, mientras SPI es menor que uno y refleja avance inferior al plan.
- Error B: Interpreta bien el coste, pero no el avance: EV es menor que PV y SPI=0,75, por debajo de uno.
- Error C: Interpreta bien el avance inferior, pero no el coste: EV supera AC y CPI=1,2, por encima de uno.

- [NASA: PP&amp;C Glossary](https://www.nasa.gov/ocfo/ppc-corner/ppc-glossary/) · Actual Cost/ACWP; BCWP/EV; BCWS/PV; CPI; SPI; CV; SV; Effort y Duration · versión: Glosario público vivo consultado el 28-10-2026. Se explicita equivalencia de nomenclaturas tradicionales y EV/AC/PV; no se deduce fecha final o ahorro definitivo de los dos índices · comprobado: 2026-10-28

Partida: `34c1bca4b7169048810cbfc33a68f8af26ebe06e89e4d6a0247facd8fff479c3` · propuesta: `81400fe389b05dfb2fa90f160b8a3f11686d8be57840831931593755bfdb44a1`

## AI-GSI-B3-T02-017

Decisión: pending_review · acción: revise.

Motivo: Conservar impacto/trazabilidad en cambios ágiles y clave A; decisiones incompletas próximas frente a analizar y registrar, con controles proporcionales.

### Antes

En un backlog ágil, ¿qué sigue siendo necesario al introducir un cambio?

- A. Analizar impacto y mantener trazabilidad de la decisión **(correcta)**
- B. Omitir toda valoración por ser ágil
- C. Eliminar requisitos anteriores sin versión
- D. Cambiar producción sin revisar pruebas

Explicación: La priorización dinámica no elimina análisis de efectos ni control de versiones.

### Propuesta

En un backlog ágil, ¿qué sigue siendo necesario al introducir un cambio?

- A. Analizar impacto y mantener trazabilidad de la decisión y de los elementos afectados. **(correcta)**
- B. Repriorizar el backlog sin revisar dependencias porque ya refleja el orden de trabajo.
- C. Actualizar el requisito sustituyendo su versión previa sin conservar la decisión.
- D. Cambiar la implementación y posponer la revisión de pruebas hasta que haya incidencias.

Explicación: Un backlog permite adaptar prioridades, pero no hace desaparecer los efectos sobre requisitos, diseño, pruebas, coste o calendario. El cambio debe comprenderse, decidirse por quien corresponda y reflejarse en versiones y vínculos pertinentes. El rigor y los soportes se ajustan al contexto: no se exige crear un comité formal NASA en todo equipo ágil. Reordenar elementos o actualizar una herramienta no acredita por sí mismo que los impactos se hayan tratado.

- Error B: El orden del backlog no comprueba por sí solo dependencias o consecuencias sobre otros elementos y verificaciones.
- Error C: Sobrescribir sin conservar fundamento o versión dificulta reconstruir qué se decidió y a qué estado corresponde el producto.
- Error D: Esperar a incidencias deja sin evaluar pruebas afectadas antes de introducir el cambio y retrasa feedback necesario.

- [NASA Systems Engineering Handbook: 6.2 Requirements Management](https://www.nasa.gov/reference/6-2-requirements-management/) · Definitions; 6.2.1.2.2–4 gestión, trazabilidad y cambios; 6.2.1.2.5 Requirements Changes; 6.2.1.2.6 Capture Work Products · versión: Capítulo web público leído el 28-10-2026. Procedimientos y autoridadCCB propios del ejemploNASA; se aplica el principio de evaluar, decidir, versionar y comunicar, sin imponer su organización a cualquier equipo ágil · comprobado: 2026-10-28
- [NASA: SWE-052 Bidirectional Traceability](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695427/SWE-052%2B-%2BBidirectional%2BTraceability) · §1 requisito3.12.1; §2 Rationale, impacto y verificación; vínculos requisitos/diseño/código/pruebas y configuración · versión: SW Engineering Handbook Ver D, referenciaNPR 7150.2D; cuerpo público leído el 28-10-2026 durante la preparación del052. Aplicabilidad por clases propia de NASA, sin cobertura demostrada por el mero número de enlaces · comprobado: 2026-10-28

Partida: `b34dd079165d8f7efc20ec92c5ccd169164ac512a5549aa3c4a2fe0c507e7e8f` · propuesta: `f7eb35566570784a1ad36bc37d5c51b3e2d5863aa111f0f1e7b12082d9b81d48`

## AI-GSI-B3-T02-019

Decisión: pending_review · acción: revise.

Motivo: Conservar fases UP y clave B; secuencias comparables con mismos nombres, suprimir referencia a tabla y distinguir fase de disciplina.

### Antes

¿Qué secuencia corresponde a fases de UP en la tabla?

- A. Captura, Compresión, Cifrado y Borrado
- B. Inicio, Elaboración, Construcción y Transición **(correcta)**
- C. Planning, Daily, Review y Retrospective como fases UP
- D. Diseño, Publicación y Olvido

Explicación: UP es iterativo, orientado a arquitectura y riesgos, con esas fases.

### Propuesta

¿Qué secuencia corresponde a las cuatro fases habituales del Proceso Unificado (UP)?

- A. Inicio, Construcción, Elaboración y Transición.
- B. Inicio, Elaboración, Construcción y Transición. **(correcta)**
- C. Elaboración, Inicio, Transición y Construcción.
- D. Inicio, Elaboración, Transición y Construcción.

Explicación: Las cuatro fases habituales de UP son Inicio, Elaboración, Construcción y Transición. La documentación primaria de RUP, una concreción de esa familia, las identifica como Inception, Elaboration, Construction y Transition. Las fases pueden contener iteraciones y actividades de varias disciplinas; no significan hacer una única pasada de requisitos, luego todo diseño y finalmente pruebas. Las traducciones pueden variar, sin alterar el orden conceptual de fundamentar, estabilizar, construir y transferir.

- Error A: Sitúa Construcción antes de Elaboración y altera el orden de fases: la elaboración aborda arquitectura y riesgos que fundamentan la construcción.
- Error C: Intercambia Inicio/Elaboración y Transición/Construcción; no corresponde al ciclo de fases identificado.
- Error D: Sitúa Transición antes de Construcción. La transición trata la puesta a disposición y adopción del producto construido.

- [Davor Gornik/IBM Rational: Unified Process Best Practices](https://public.dhe.ibm.com/software/rational/web/whitepapers/2003/rup_bestpractices.pdf) · Process Overview; Two Dimensions; Phases and Iterations, p.3; Inception/Elaboration/Construction/Transition, pp.4–7 · versión: DocumentoTP026B, Rev 11/01 según portada; alojado en carpeta2003, que no se presenta como fecha de edición. PDF de21 páginas leído textualmente el 28-10-2026. RUP como concreción de UP, fases con iteraciones, distintas de disciplinas; sin recomendar herramientas históricas · comprobado: 2026-10-28

Partida: `04b38387feda52c2e24476a017de2ab6238b3a5038b6aa0deac8b839b1dfd8b3` · propuesta: `8665c207e0b881349ea46bcf225e7269fb47b8be959942762b9d0bde94a9598b`

## AI-GSI-B3-T02-020

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegro microcaso híbrido y clave D: alternativas ya contrastan etiqueta, congelación y eliminación de hitos; ampliar coordinación sin asesorar sobre un contrato real.

### Antes

Un contrato impone hitos formales y el producto evoluciona iterativamente. ¿Cómo se justifica un enfoque híbrido?

- A. Llamarlo híbrido sin definir responsabilidades ni controles
- B. Congelar todo el backlog sin posibilidad de aprendizaje
- C. Eliminar los hitos contractuales por trabajar en iteraciones
- D. Explicando gobierno predictivo y construcción adaptativa **(correcta)**

Explicación: El enfoque debe aclarar qué se controla formalmente y qué se adapta mediante ciclos.

### Propuesta

Un contrato impone hitos formales y el producto evoluciona iterativamente. ¿Cómo se justifica un enfoque híbrido?

- A. Llamarlo híbrido sin definir responsabilidades ni controles
- B. Congelar todo el backlog sin posibilidad de aprendizaje
- C. Eliminar los hitos contractuales por trabajar en iteraciones
- D. Explicando gobierno predictivo y construcción adaptativa **(correcta)**

Explicación: Un enfoque híbrido debe explicar qué decisiones, hitos y evidencias se gobiernan de forma predictiva y qué construcción o prioridades se adaptan con feedback. También necesita responsabilidades, coordinación y tratamiento de cambios entre ambos niveles. Iterar no elimina por sí solo los hitos que impone el supuesto, y cumplirlos no obliga a congelar todo aprendizaje. La guía GOV.UK ilustra gobierno compatible con entrega ágil; se utiliza como ejemplo, sin interpretar un contrato real o imponer un procedimiento británico.

- Error A: La etiqueta no explica cómo se coordinan decisiones, responsabilidades o evidencias entre el gobierno formal y las iteraciones.
- Error B: Congelar todo el backlog elimina la capacidad adaptativa que se pretende combinar, sin que el supuesto exija ese bloqueo general.
- Error C: La elección de prácticas iterativas no cancela por sí sola los hitos exigidos por el contrato del caso; hay que coordinar su cumplimiento y cambios.

- [GOV.UK: Governance principles for agile service delivery](https://www.gov.uk/service-manual/agile-delivery/governance-principles-for-agile-service-delivery) · Who is involved in governance; Do not slow down delivery; decisiones al nivel adecuado; Trust and verify · versión: Guía pública viva leída el 28-10-2026. Gobierno, costes, riesgo y calidad compatibles con mejora iterativa; ejemplo británico, sin interpretar o modificar un contrato real ni eliminar sus hitos por llamar ágil al trabajo · comprobado: 2026-10-28

Partida: `f33e0afc23b002cbf5fa6f4a5113e74e2cb36bf091e0d766bff8ba095d36ca44` · propuesta: `bca32abcbbb5344da04e57dfcb1b0be249fc40a7f2c25777d0e68d714a1fb0f7`

## AI-GSI-B3-T02-002

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción esfuerzo/duración y clave D; evitar regla lineal de personas o equivalencia con programación, con fuente de recursos y calendarios.

### Antes

¿Qué diferencia esfuerzo y duración en la planificación práctica?

- A. Son siempre idénticos
- B. El esfuerzo elimina cualquier dependencia
- C. La duración solo depende de líneas de código
- D. Deben estimarse considerando recursos y dependencias, sin tratarlos como un único dato **(correcta)**

Explicación: El plan relaciona trabajo, recursos y secuencia; una estimación aislada no define todo el calendario.

### Propuesta

¿Cómo deben relacionarse esfuerzo y duración al planificar un proyecto?

- A. Convertir cualquier esfuerzo en días dividiéndolo solo por el número de personas.
- B. Fijar la duración de cada actividad según el presupuesto, sin revisar precedencias.
- C. Estimar el esfuerzo de programación y usarlo como duración de todo el proyecto.
- D. Estimar trabajo y tiempo considerando disponibilidad, dependencias y coordinación. **(correcta)**

Explicación: El esfuerzo es cantidad de trabajo, expresable por ejemplo en horas-persona; la duración es el tiempo necesario para completar una actividad según calendario y condiciones. Se relacionan con disponibilidad, secuencia, productividad y coordinación, pero no son el mismo dato. Dividir esfuerzo entre personas solo sería una aproximación bajo supuestos adecuados de divisibilidad y dedicación. Añadir personas no garantiza reducir proporcionalmente la duración, y las esperas o dependencias pueden prolongar el calendario sin añadir igual esfuerzo.

- Error A: Esa división ignora dedicación, trabajo no paralelizable, coordinación y restricciones; no transforma de forma universal esfuerzo en duración.
- Error B: El presupuesto limita recursos, pero no sustituye analizar disponibilidad y relaciones de precedencia al estimar duración.
- Error C: El trabajo de programación es una parte posible. El calendario puede incluir otras actividades, esperas, pruebas y dependencias.

- [NASA: PP&amp;C Glossary](https://www.nasa.gov/ocfo/ppc-corner/ppc-glossary/) · Actual Cost/ACWP; BCWP/EV; BCWS/PV; CPI; SPI; CV; SV; Effort y Duration · versión: Glosario público vivo consultado el 28-10-2026. Se explicita equivalencia de nomenclaturas tradicionales y EV/AC/PV; no se deduce fecha final o ahorro definitivo de los dos índices · comprobado: 2026-10-28
- [GAO: Schedule Assessment Guide](https://www.gao.gov/assets/690/687052.pdf) · The Critical Path Method y BestPractice6, camino válido/longest path; BestPractice3, Resources, Effort, and Duration, pp.49–50; restricciones, calendarios y recursos · versión: GAO-16-89G, diciembre 2015; versión accesible oficial de240 páginas leída textualmente el 28-10-2026. No se confunde holgura cero universal con camino conductor en cualquier calendario o restricción; duplicar recursos no garantiza reducir a la mitad la duración · comprobado: 2026-10-28

Partida: `a106bb6c811227c999cd77686b7f2133013805c1f27b92c22ef963e6afbf5622` · propuesta: `76ba112976ea04996223307005f47efd2376f25a02d9e4b0187bcd680cd2bedb`

## AI-GSI-B3-T03-002

Decisión: pending_review · acción: revise.

Motivo: Conservar elicitación más allá de deseos y clave B; contrastar transcripción, solución prematura y manual sin análisis de contexto.

### Antes

¿Qué persigue la elicitación además de recoger deseos?

- A. Eliminar a los interesados del análisis
- B. Descubrir necesidades, conflictos, reglas y excepciones **(correcta)**
- C. Fijar una solución antes de conocer procesos
- D. Copiar literalmente toda petición sin analizar

Explicación: Elicitar requiere comprender y contrastar necesidades y restricciones.

### Propuesta

¿Qué persigue la elicitación además de recoger deseos?

- A. Transcribir peticiones y tratarlas como requisitos sin contrastar su fundamento.
- B. Descubrir necesidades, conflictos, reglas, restricciones y excepciones del dominio. **(correcta)**
- C. Fijar una solución técnica y ajustar después las necesidades a sus capacidades.
- D. Validar únicamente lo que ya figura en el manual sin investigar la práctica real.

Explicación: Elicitar implica comprender necesidades y contexto, descubrir reglas, restricciones, conflictos y excepciones y contrastarlos con los interesados. Las peticiones son entradas que requieren análisis, no requisitos aceptados automáticamente. Documentos, entrevistas, observación o prototipos aportan evidencias complementarias. La definición y validación deben conservar fundamentos y supuestos. La técnica apropiada depende de la incertidumbre: preguntar preferencias o copiar el manual no basta para entender por qué se realiza una tarea.

- Error A: Transcribir conserva lo declarado, pero sin contraste puede dejar necesidades implícitas, contradicciones y restricciones sin descubrir.
- Error C: Elegir la solución antes de comprender el problema puede sesgar los requisitos y excluir necesidades reales.
- Error D: El manual puede estar incompleto o diferir de la operación; limitarse a él impide investigar excepciones y prácticas no documentadas.

- [NASA Systems Engineering Handbook: 4.2 Technical Requirements Definition](https://www.nasa.gov/reference/4-2-technical-requirements-definition/) · 4.2.1.2.1 restricciones, interfaces y expectativas; 4.2.1.2.2–4 definición y validación; 4.2.1.2.7 decisiones y fundamentos · versión: Capítulo web público leído el 28-10-2026. Necesidades, restricciones, conflictos y validación se contrastan con interesados; no es simple transcripción de deseos ni selección prematura de tecnología · comprobado: 2026-10-28
- [GOV.UK: Contextual research and observation](https://www.gov.uk/service-manual/user-research/contextual-research-and-observation) · Definición; When to do contextual research; Design the visits y Do the research: actividad real, equipo/contexto y límites de observación · versión: Guía viva leída el 28-10-2026. Preguntar puede interrumpir la actividad, observar puede influir; la observación no sustituye todas las técnicas ni garantiza representatividad por una sola visita · comprobado: 2026-10-28
- [GOV.UK: How the discovery phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) · Define the problem; Understanding constraints: restricciones duras/blandas, contratos, tecnología heredada y procesos existentes; necesidades de usuario · versión: Actualización21-06-2021, leída el 28-10-2026. Distingue problema/necesidad de solución propuesta y limitaciones cambiables; no supone que todas las restricciones heredadas puedan eliminarse · comprobado: 2026-10-28

Partida: `7bfaf75ac2490bc97edee1fa9f54eb620c8560a58bf5cd97b6b617f30e79e5e7` · propuesta: `463cd0f003fe007b3bcbf685d1f11d238ac366c739665b824243180fa47997fb`

## AI-GSI-B3-T03-003

Decisión: pending_review · acción: revise.

Motivo: Conservar observación y clave D; precisar contraste directo para distinguirla inequívocamente de técnicas de elicitación también útiles.

### Antes

Para comprender tareas reales que difieren del manual, ¿qué técnica resulta especialmente útil?

- A. Cambiar el presupuesto
- B. Compilar el programa
- C. Elegir una tecnología por popularidad
- D. Observación de usuarios **(correcta)**

Explicación: La observación permite contrastar práctica real y documentación.

### Propuesta

Se sospecha que la práctica difiere del manual. ¿Qué técnica permite ver directamente cómo se realiza la tarea en su contexto?

- A. Revisar solo la descripción del procedimiento en el manual vigente.
- B. Enviar un cuestionario sobre cómo recuerdan realizar la tarea.
- C. Entrevistar por separado a responsables sobre el flujo previsto.
- D. Observar a usuarios realizando la tarea en su entorno habitual. **(correcta)**

Explicación: La observación contextual permite ver directamente qué hacen las personas, con sus herramientas, documentos, interrupciones y estrategias reales. Es especialmente pertinente para contrastar práctica y procedimiento documentado. Entrevistas y cuestionarios pueden explicar motivos y complementar la evidencia, pero recogen principalmente relatos. Observar también puede alterar el comportamiento y requiere un diseño adecuado; una visita no garantiza conocer todas las variantes ni sustituye el contraste con más participantes o fuentes.

- Error A: El manual describe el procedimiento previsto; releerlo no permite ver directamente cómo se ejecuta realmente.
- Error B: Un cuestionario recoge recuerdos o declaraciones. Puede ser útil, pero no observa la ejecución en su contexto.
- Error C: La entrevista aporta explicaciones, aunque la pregunta pide ver directamente la tarea real y no solo el flujo descrito por responsables.

- [GOV.UK: Contextual research and observation](https://www.gov.uk/service-manual/user-research/contextual-research-and-observation) · Definición; When to do contextual research; Design the visits y Do the research: actividad real, equipo/contexto y límites de observación · versión: Guía viva leída el 28-10-2026. Preguntar puede interrumpir la actividad, observar puede influir; la observación no sustituye todas las técnicas ni garantiza representatividad por una sola visita · comprobado: 2026-10-28

Partida: `64f4b083a6e47993439260c4ec68c8648a5b54942ac61a8aa184a89e93b3276b` · propuesta: `350c33b2143ccbbf3144f9eac5c18c6541c91aba0f4a3ac6572a3bec125b48a2`

## AI-GSI-B3-T03-004

Decisión: pending_review · acción: revise.

Motivo: Conservar taller y clave D; precisar contraste conjunto, con técnicas cercanas incompletas y límites reales de facilitación.

### Antes

Varios departamentos sostienen requisitos incompatibles. ¿Qué técnica puede facilitar su contraste?

- A. Implementar ambos sin evaluar consecuencias
- B. Ocultar el conflicto
- C. Elegir al azar una petición
- D. Taller conjunto con interesados **(correcta)**

Explicación: Los talleres permiten descubrir y negociar conflictos y reglas con participantes relevantes.

### Propuesta

Dos departamentos sostienen requisitos incompatibles. ¿Qué técnica facilita que contrasten conjuntamente sus necesidades y reglas?

- A. Entrevistas independientes sin poner en común las peticiones contradictorias.
- B. Un cuestionario de preferencias que cuente votos sin discutir las reglas.
- C. Una revisión documental sin participación de los departamentos afectados.
- D. Un taller conjunto facilitado para contrastar necesidades, reglas y conflictos. **(correcta)**

Explicación: Un taller con interesados permite poner en común peticiones incompatibles, explorar sus fundamentos y negociar reglas o alternativas con quienes se ven afectados. Debe facilitarse para que jerarquías o participantes dominantes no oculten perspectivas. Reunirse no garantiza consenso: los conflictos no resueltos necesitan responsable y decisión posterior. Las entrevistas y documentos pueden preparar el taller, pero no sustituyen el contraste conjunto que pide el caso.

- Error A: Las entrevistas separadas descubren perspectivas, pero si no se ponen en común no facilitan el contraste directo y negociación entre departamentos.
- Error B: Contar preferencias no aclara reglas, restricciones o razones de incompatibilidad; la decisión no equivale automáticamente a mayoría de votos.
- Error C: La documentación ayuda, pero sin los afectados no permite contrastar conjuntamente interpretaciones y consecuencias.

- [GOV.UK: Researching in small group workshops](https://www.gov.uk/service-manual/user-research/research-small-group-workshops) · When to do research; aportaciones compartidas y riesgos de dominancia/jerarquía; Design the workshop: comparar, consolidar y reflexionar · versión: Guía pública viva leída el 28-10-2026. Reunir interesados facilita contraste, sin garantizar acuerdo; no se generalizan tamaños o duraciones del ejemplo como obligación metodológica · comprobado: 2026-10-28
- [NASA Systems Engineering Handbook: 4.2 Technical Requirements Definition](https://www.nasa.gov/reference/4-2-technical-requirements-definition/) · 4.2.1.2.1 restricciones, interfaces y expectativas; 4.2.1.2.2–4 definición y validación; 4.2.1.2.7 decisiones y fundamentos · versión: Capítulo web público leído el 28-10-2026. Necesidades, restricciones, conflictos y validación se contrastan con interesados; no es simple transcripción de deseos ni selección prematura de tecnología · comprobado: 2026-10-28

Partida: `3d1bd6c072df15948f466d709c33f0fda53049c1e83247c7a27fa68881ff1887` · propuesta: `10e8574208ce642b30e39ae92e69856538bb486c3734c9fbe6e2841a2facd1fb`

## AI-GSI-B3-T03-006

Decisión: pending_review · acción: revise.

Motivo: Conservar diagnóstico de contradicción y clave B; cuatro propiedades de requisitos próximas en lugar de cifrado o compresión.

### Antes

Dos requisitos exigen comportamientos incompatibles en el mismo caso. ¿Qué calidad falta?

- A. Cifrado
- B. Consistencia **(correcta)**
- C. Compresión
- D. Portabilidad binaria

Explicación: La especificación debe resolver contradicciones para poder construirse y verificarse.

### Propuesta

Dos requisitos exigen comportamientos incompatibles en el mismo caso. ¿Qué calidad falta?

- A. Completitud.
- B. Consistencia. **(correcta)**
- C. Trazabilidad.
- D. Verificabilidad.

Explicación: La consistencia exige que los requisitos del conjunto no se contradigan para el mismo caso y condiciones. Si ordenan comportamientos incompatibles debe aclararse el alcance, negociar la regla o resolver la contradicción antes de baselinar. Cada requisito podría ser comprensible e incluso comprobable por separado, sin que ambos puedan cumplirse juntos. No basta añadir información, vínculos o pruebas si se mantiene la incompatibilidad semántica.

- Error A: La completitud se refiere a que no falte información o requisitos necesarios. Aquí se describen dos exigencias presentes que se contradicen.
- Error C: La trazabilidad identifica origen y relaciones. Tener enlaces correctos no hace compatibles las dos exigencias.
- Error D: Un requisito puede ser verificable por separado; el fallo explícito del caso es la contradicción del conjunto para las mismas condiciones.

- [NASA Systems Engineering Handbook: Appendix C, How to Write a Good Requirement](https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/) · C.4 Requirements Validation Checklist: Consistency, Traceability y Verifiability/Testability; Clarity y Completeness · versión: Apéndice web público leído el 28-10-2026. Verificación admite prueba, demostración, inspección o análisis; consistencia del conjunto es distinta de completitud, trazabilidad y factibilidad · comprobado: 2026-10-28
- [NASA Systems Engineering Handbook: 4.2 Technical Requirements Definition](https://www.nasa.gov/reference/4-2-technical-requirements-definition/) · 4.2.1.2.1 restricciones, interfaces y expectativas; 4.2.1.2.2–4 definición y validación; 4.2.1.2.7 decisiones y fundamentos · versión: Capítulo web público leído el 28-10-2026. Necesidades, restricciones, conflictos y validación se contrastan con interesados; no es simple transcripción de deseos ni selección prematura de tecnología · comprobado: 2026-10-28

Partida: `9b1182140a90e85086084404da383ccc279aebf571442a6f9085882cb0940264` · propuesta: `8f7137f81051f004584aee93eb843350a6d0227d5367e4562c87e315d0d035bb`

## AI-GSI-B3-T03-007

Decisión: pending_review · acción: revise.

Motivo: Conservar verificabilidad y clave C; ampliar métodos objetivos más allá de probar/observar y distinguir propiedades próximas.

### Antes

Un requisito no puede probarse ni observarse con ningún criterio. ¿Qué propiedad debe mejorarse?

- A. Longitud del título
- B. Número de anexos
- C. Verificabilidad **(correcta)**
- D. Popularidad

Explicación: La verificabilidad permite demostrar cumplimiento mediante criterios y evidencia.

### Propuesta

No se dispone de método o criterio objetivo para demostrar que un requisito se cumple. ¿Qué propiedad debe mejorarse?

- A. Factibilidad.
- B. Consistencia.
- C. Verificabilidad. **(correcta)**
- D. Trazabilidad.

Explicación: La verificabilidad permite demostrar cumplimiento con un método y criterios objetivos, mediante prueba, demostración, inspección o análisis según corresponda. No se reduce a ejecutar una prueba automatizada. Un enunciado como rápido o fácil suele necesitar contexto y umbral observable; otros requisitos pueden verificarse inspeccionando un artefacto. Ser técnicamente factible, no contradecir otros requisitos o tener origen identificado no aporta por sí solo esa evidencia de cumplimiento.

- Error A: La factibilidad trata si se puede realizar bajo restricciones. Que sea posible no define cómo demostrar que se ha cumplido.
- Error B: La consistencia evita contradicciones, pero un conjunto coherente puede contener términos que no permitan verificar resultados.
- Error D: La trazabilidad conecta fuentes y productos. Identificar relaciones no sustituye un método y criterio para demostrar cumplimiento.

- [NASA Systems Engineering Handbook: Appendix C, How to Write a Good Requirement](https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/) · C.4 Requirements Validation Checklist: Consistency, Traceability y Verifiability/Testability; Clarity y Completeness · versión: Apéndice web público leído el 28-10-2026. Verificación admite prueba, demostración, inspección o análisis; consistencia del conjunto es distinta de completitud, trazabilidad y factibilidad · comprobado: 2026-10-28

Partida: `1b69fc7e26d79c54e0bd3729ce9005b5a6fcfc8580cd351fc9f6f6e01160f7ff` · propuesta: `22f93dc9aee7ac1ec9a5bc5a78bc9c6c73b534453046719f1469a09a5c37486c`

## AI-GSI-B3-T03-008

Decisión: pending_review · acción: revise.

Motivo: Conservar forma habitual de historia y clave D; tripletas comparables de diseño, caso de uso y planificación, sin formato obligatorio universal.

### Antes

¿Qué elementos recoge la forma habitual de una historia de usuario?

- A. Solución técnica, framework y tablas obligatorias
- B. Actor, flujo de excepciones y postcondiciones exhaustivas como formato de historia
- C. Fecha, esfuerzo y coste sin objetivo del usuario
- D. Rol, capacidad y beneficio **(correcta)**

Explicación: La historia expresa quién quiere qué y para qué, completándose con criterios de aceptación.

### Propuesta

¿Qué elementos recoge la forma habitual de una historia de usuario?

- A. Componente, interfaz y tecnología.
- B. Actor, flujo y postcondiciones.
- C. Fecha, esfuerzo y coste.
- D. Rol, capacidad y beneficio. **(correcta)**

Explicación: La forma habitual expresa quién necesita qué capacidad y para qué beneficio: como un rol, quiero una capacidad, para lograr un objetivo. Es una ayuda para conversar y comprender valor, no una plantilla única que garantice calidad. Se completa con detalles y criterios de aceptación cuando corresponda. Un caso de uso puede desarrollar actores, flujos y postcondiciones; estimaciones y decisiones técnicas son otra información y no sustituyen la necesidad y finalidad del usuario.

- Error A: Describe elementos o decisiones de solución técnica; no recoge necesariamente quién necesita qué y para qué.
- Error B: Esos elementos son propios del desarrollo de un caso de uso; no son la tríada habitual de la historia de usuario preguntada.
- Error C: Son datos de planificación y estimación. No expresan por sí mismos rol, capacidad solicitada o beneficio.

- [GOV.UK: Writing user stories](https://www.gov.uk/service-manual/agile-delivery/writing-user-stories) · How to write a user story: What to include, The right format, Focus on the goal y Acceptance criteria · versión: Página actualizada23-05-2016, leída el 28-10-2026. Plantilla habitual, no formato único obligatorio universal; criterios concretan resultados verificables y no equivalen solo a prioridad, estimación o asignación · comprobado: 2026-10-28

Partida: `92d24ff7d9023b118d3602aed0c77de9e5a7a9a8411be05e52791dcf07e3ee55` · propuesta: `acbb43e96ec70586a5ec7affafae1dade0dd6329f86870e2020341a1b1a299ad`

## AI-GSI-B3-T03-010

Decisión: pending_review · acción: revise.

Motivo: Conservar falta de aceptación explícita y clave C; datos reales de una historia como distractores en lugar de organigrama o lenguaje obligatorio.

### Antes

Una historia está redactada pero no precisa cuándo se acepta. ¿Qué falta incorporar?

- A. Un organigrama completo
- B. Un índice físico de base de datos
- C. Criterios de aceptación **(correcta)**
- D. Una versión obligatoria de lenguaje

Explicación: Los criterios concretan condiciones verificables que complementan la historia.

### Propuesta

Una historia está redactada pero no precisa cuándo se acepta. ¿Qué falta incorporar?

- A. Una prioridad que ordene la historia respecto a las restantes.
- B. Una estimación del esfuerzo necesario para implementarla.
- C. Criterios de aceptación que concreten resultados verificables. **(correcta)**
- D. Un responsable al que asignar el trabajo de implementación.

Explicación: Los criterios de aceptación concretan las condiciones o resultados que permitirán decidir si la historia satisface la necesidad. Deben poder contrastarse mediante evidencia y acordarse con el contexto suficiente. No equivalen a su prioridad, esfuerzo estimado o persona asignada. Pueden redactarse de distintas formas; no es obligatorio un único formato como Given/When/Then. También deben respetarse estándares y definición compartida de terminado que correspondan al producto.

- Error A: La prioridad decide qué abordar antes, pero no define qué resultados permiten aceptar esta historia.
- Error B: El esfuerzo estima trabajo necesario; no acredita cuándo se ha satisfecho la necesidad.
- Error D: Asignar responsabilidad organiza el trabajo, pero no concreta condiciones verificables de aceptación.

- [GOV.UK: Writing user stories](https://www.gov.uk/service-manual/agile-delivery/writing-user-stories) · How to write a user story: What to include, The right format, Focus on the goal y Acceptance criteria · versión: Página actualizada23-05-2016, leída el 28-10-2026. Plantilla habitual, no formato único obligatorio universal; criterios concretan resultados verificables y no equivalen solo a prioridad, estimación o asignación · comprobado: 2026-10-28
- [Schwaber y Sutherland: The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html) · Scrum Theory; Developers; Scrum Artifacts, Definition of Done; relación de calidad e Increment · versión: Edición noviembre 2020, HTML equivalente alPDF según la página; leído el 28-10-2026 durante la preparación consecutiva del052. DoD es compromiso del Increment; criterios específicos de aceptación no son un cuarto artefacto o sinónimo exacto de DoD · comprobado: 2026-10-28
- [ISTQB: CTFL Syllabus v4.0.1](https://istqb.org/?download_id=3345&sdm_process_download=1) · 1.4.4 trazabilidad, pp.20–21; 2.1.2 buenas prácticas de pruebas, pp.25–26; 5.1.3 criterios de entrada/salida, p.49 · versión: v4.0.1, 15-09-2024; PDF oficial leído textualmente el 28-10-2026. Se utiliza alcance de criterios, pruebas y evidencia sin prescribirScrum a cualquier ciclo ni afirmar que enlazar una prueba equivale a que pase · comprobado: 2026-10-28

Partida: `d7690ccfc85dddefd2042845cc916f251e5dc753afb5ec4c85648afa26b5f086` · propuesta: `726315b67d6472281e094ce95239fbd6fbd3bf407263ffb543b4f182512a533f`

## AI-GSI-B3-T03-012

Decisión: pending_review · acción: revise.

Motivo: Conservar impacto/cobertura bidireccional y clave A; límites reales de historial, vínculo parcial y conteo, sin garantía de cero defectos.

### Antes

¿Qué permite la trazabilidad bidireccional?

- A. Relacionar cambios con componentes y pruebas y comprobar cobertura **(correcta)**
- B. Eliminar la especificación
- C. Evitar toda revisión de cambios
- D. Garantizar que no existan defectos

Explicación: La trazabilidad conecta necesidad y entrega en ambos sentidos para analizar impacto.

### Propuesta

¿Qué permite la trazabilidad bidireccional?

- A. Relacionar requisitos, componentes y pruebas para revisar impacto y cobertura. **(correcta)**
- B. Registrar autores y fechas sin enlazar necesidades con productos o verificaciones.
- C. Relacionar requisitos solo con diseño sin poder recorrer vínculos desde las pruebas.
- D. Medir cobertura por el número de enlaces sin revisar su significado o resultados.

Explicación: La trazabilidad bidireccional permite recorrer relaciones desde necesidades y requisitos hacia productos y verificaciones, y desde estos hacia su fundamento. Apoya localizar impactos, revisar asignaciones y evaluar cobertura. Los vínculos deben ser correctos, mantenerse y corresponder a versiones y resultados pertinentes: una matriz con muchos enlaces no demuestra que las pruebas sean suficientes o que hayan pasado. Se busca información utilizable para decidir, sin imponer una herramienta o burocracia específica.

- Error B: Autoría y fechas aportan historial, pero no representan las relaciones de necesidad, producto y verificación que se quieren recorrer.
- Error C: Un vínculo parcial en un solo sentido limita identificar desde pruebas o componentes su requisito y origen; no cubre la bidireccionalidad planteada.
- Error D: Contar enlaces sin comprobarlos no demuestra cobertura semántica ni resultados de verificación; puede ocultar relaciones erróneas o ausencias.

- [NASA Systems Engineering Handbook: 6.2 Requirements Management](https://www.nasa.gov/reference/6-2-requirements-management/) · Definitions; 6.2.1.2.2–4 gestión, trazabilidad y cambios; 6.2.1.2.5 Requirements Changes; 6.2.1.2.6 Capture Work Products · versión: Capítulo web público leído el 28-10-2026. Procedimientos y autoridadCCB propios del ejemploNASA; se aplica el principio de evaluar, decidir, versionar y comunicar, sin imponer su organización a cualquier equipo ágil · comprobado: 2026-10-28
- [NASA: SWE-052 Bidirectional Traceability](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695427/SWE-052%2B-%2BBidirectional%2BTraceability) · §1 requisito3.12.1; §2 Rationale, impacto y verificación; vínculos requisitos/diseño/código/pruebas y configuración · versión: SW Engineering Handbook Ver D, referenciaNPR 7150.2D; cuerpo público leído el 28-10-2026 durante la preparación del052. Aplicabilidad por clases propia de NASA, sin cobertura demostrada por el mero número de enlaces · comprobado: 2026-10-28
- [ISTQB: CTFL Syllabus v4.0.1](https://istqb.org/?download_id=3345&sdm_process_download=1) · 1.4.4 trazabilidad, pp.20–21; 2.1.2 buenas prácticas de pruebas, pp.25–26; 5.1.3 criterios de entrada/salida, p.49 · versión: v4.0.1, 15-09-2024; PDF oficial leído textualmente el 28-10-2026. Se utiliza alcance de criterios, pruebas y evidencia sin prescribirScrum a cualquier ciclo ni afirmar que enlazar una prueba equivale a que pase · comprobado: 2026-10-28

Partida: `719e14614202d7054645f99c007ae7dfb1ed3472dc9714f2e661fb4c8037c3fa` · propuesta: `98f163693598a2b65dc6a3dd95fcde1d5f67dbf6aee1d2a0f07c38b708fb28b5`

## AI-GSI-B3-T03-013

Decisión: pending_review · acción: revise.

Motivo: Conservar secuencia controlada y clave A; permutaciones plausibles del mismo trabajo y alcance ordinario, con excepciones documentadas sin rigidizar iteración.

### Antes

¿Qué secuencia es apropiada para gestionar un cambio de requisitos?

- A. Registrar, analizar impacto, decidir, versionar y comunicar **(correcta)**
- B. Implementar y borrar la versión previa sin registro
- C. Aceptar siempre sin analizar
- D. Esperar a producción para informar

Explicación: La gestión conserva decisión, coherencia y trazabilidad de los cambios.

### Propuesta

En el tratamiento ordinario de un cambio de requisitos, ¿qué secuencia mantiene el control de la decisión?

- A. Registrar, analizar impacto, decidir, versionar y comunicar. **(correcta)**
- B. Registrar, implementar, analizar impacto, decidir y comunicar.
- C. Registrar, decidir, publicar, analizar impacto y versionar.
- D. Versionar, comunicar, implementar y analizar impacto al cierre.

Explicación: El tratamiento ordinario registra el cambio y su motivo, analiza efectos antes de decidir e implementar, conserva versiones y actualiza vínculos y comunicaciones. El análisis puede motivar rechazar, modificar o aplazar la petición, no solo aceptarla. Las actividades pueden realimentarse y el procedimiento ajustarse al contexto; no se impone una pasada rígida. Las excepciones o urgencias requieren el control previsto, no convertir la implementación previa al análisis en práctica normal.

- Error B: Implementa antes de analizar y decidir; asume un compromiso sin comprender efectos o disponer de la decisión correspondiente.
- Error C: Decide y publica antes del análisis. Registrar la petición no sustituye valorar consecuencias para autorizar el cambio.
- Error D: Aplaza el análisis hasta el cierre, cuando ya se ha comunicado e implementado; pierde su función de fundamentar la decisión previa.

- [NASA Systems Engineering Handbook: 6.2 Requirements Management](https://www.nasa.gov/reference/6-2-requirements-management/) · Definitions; 6.2.1.2.2–4 gestión, trazabilidad y cambios; 6.2.1.2.5 Requirements Changes; 6.2.1.2.6 Capture Work Products · versión: Capítulo web público leído el 28-10-2026. Procedimientos y autoridadCCB propios del ejemploNASA; se aplica el principio de evaluar, decidir, versionar y comunicar, sin imponer su organización a cualquier equipo ágil · comprobado: 2026-10-28

Partida: `99cab8808138e97f1ceea89c5914f2894a2523c27346297180b8f0e4a0e337c8` · propuesta: `9077cc01a1817d2f1b6e63ee4f65dde1f720fedf497630a960bf4f04b3034011`

## AI-GSI-B3-T03-014

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra distinción y clave A: distractores ya expresan errores próximos de copiar, descartar y confundir tecnología con necesidad; precisar restricciones legítimas.

### Antes

Al derivar requisitos de un legado, ¿qué distinción es esencial?

- A. Necesidad real frente a limitación heredada **(correcta)**
- B. Comportamiento actual como requisito obligatorio sin analizarlo
- C. Toda función poco usada como prescindible sin contraste
- D. Toda limitación técnica como necesidad de negocio

Explicación: Copiar todos los comportamientos puede perpetuar errores y deuda; hay que comprender su finalidad.

### Propuesta

Al derivar requisitos de un legado, ¿qué distinción es esencial?

- A. Necesidad real frente a limitación heredada **(correcta)**
- B. Comportamiento actual como requisito obligatorio sin analizarlo
- C. Toda función poco usada como prescindible sin contraste
- D. Toda limitación técnica como necesidad de negocio

Explicación: Derivar requisitos del legado exige averiguar qué necesidad o regla explica cada comportamiento y qué parte es una limitación de la solución existente. Copiar sin análisis puede perpetuar restricciones innecesarias, pero tampoco permite ignorar restricciones legales, operativas o de interoperabilidad que sigan vigentes. Discovery distingue restricciones duras y procesos modificables; el análisis y contraste con interesados deciden qué conservar, cambiar o retirar. Uso infrecuente no equivale automáticamente a falta de valor.

- Error B: Que el sistema lo haga hoy no demuestra que deba hacerlo el reemplazo. Hay que contrastar finalidad, condiciones y restricciones que siguen aplicando.
- Error C: Una función poco usada puede responder a una excepción crítica o una obligación; debe analizarse con evidencia e interesados antes de descartarla.
- Error D: Una limitación de implementación puede ser relevante como restricción, pero no se convierte por ello en necesidad de negocio; hay que distinguir ambas.

- [GOV.UK: How the discovery phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) · Define the problem; Understanding constraints: restricciones duras/blandas, contratos, tecnología heredada y procesos existentes; necesidades de usuario · versión: Actualización21-06-2021, leída el 28-10-2026. Distingue problema/necesidad de solución propuesta y limitaciones cambiables; no supone que todas las restricciones heredadas puedan eliminarse · comprobado: 2026-10-28
- [NASA Systems Engineering Handbook: 4.2 Technical Requirements Definition](https://www.nasa.gov/reference/4-2-technical-requirements-definition/) · 4.2.1.2.1 restricciones, interfaces y expectativas; 4.2.1.2.2–4 definición y validación; 4.2.1.2.7 decisiones y fundamentos · versión: Capítulo web público leído el 28-10-2026. Necesidades, restricciones, conflictos y validación se contrastan con interesados; no es simple transcripción de deseos ni selección prematura de tecnología · comprobado: 2026-10-28

Partida: `2a8cd04f61dcfb8a694da9a02f50dd9317c9e12f56b7950124f08f985945c455` · propuesta: `3cddeb69ef79bbd4347a61dae22c351e472434dc95afb4d5f264785864c5f607`

## AI-GSI-B3-T03-015

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación actual/objetivo y clave D; análisis parciales próximos frente a contraste explícito, sin imponerGate4 a todo proyecto.

### Antes

¿Qué aporta un análisis as-is/to-be?

- A. Copiar automáticamente todos los defectos
- B. Eliminar toda regla de negocio
- C. Prescindir de usuarios
- D. Contrastar situación actual y objetivo de transformación **(correcta)**

Explicación: Comparar presente y objetivo ayuda a distinguir necesidades, restricciones y cambios deseados.

### Propuesta

¿Qué aporta un análisis as-is/to-be?

- A. Inventariar infraestructura sin describir procesos ni operación objetivo.
- B. Estimar duraciones sin explicitar diferencias entre modos de operación.
- C. Describir la operación objetivo sin contrastarla con la situación actual.
- D. Contrastar situación actual y objetivo para identificar diferencias y cambios. **(correcta)**

Explicación: As-is describe la situación actual y to-be la situación objetivo. Contrastarlas hace visibles diferencias de procesos, reglas, datos, roles o sistemas y ayuda a plantear cambios y transición. No obliga a copiar el legado ni justifica eliminar todas sus reglas. La documentación británica Gate4 ilustra ambos modelos operativos; se usa esa distinción, sin exigir el proceso completo o un entregable formal idéntico en cualquier proyecto. El objetivo y las diferencias deben validarse con los afectados.

- Error A: Un inventario técnico puede alimentar el análisis, pero sin situación operativa y objetivo no muestra por sí solo la transformación.
- Error B: Las duraciones ayudan a planificar, pero no explican qué cambia entre la situación actual y la deseada.
- Error C: El to-be aislado expresa intención; falta la comparación que identifica diferencias y condiciones de transición desde el estado actual.

- [GOV.UK/NISTA: Gate4 Review, Readiness for Service](https://www.gov.uk/government/publications/gate-review-4-readiness-for-service/gate-4-review-readiness-for-service) · Project Documentation: Operating Model (TO BE and AS IS), Business Requirements Document; contexto de Tailoring the Gate Review · versión: Edición web actualizada20-08-2026, leída el 28-10-2026. Se cita la distinción situación actual/operación objetivo; no se impone Gate4, TOM formal o proceso británico a todo proyecto · comprobado: 2026-10-28
- [GOV.UK: How the discovery phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) · Define the problem; Understanding constraints: restricciones duras/blandas, contratos, tecnología heredada y procesos existentes; necesidades de usuario · versión: Actualización21-06-2021, leída el 28-10-2026. Distingue problema/necesidad de solución propuesta y limitaciones cambiables; no supone que todas las restricciones heredadas puedan eliminarse · comprobado: 2026-10-28

Partida: `00888ce9d124e27238e09fa8fe5449eaa2ecbf892c0ebe1eda5eef430d6257d4` · propuesta: `f3fa859b5073ca36187c5cae4e5ae5fa8a6ff39140a4e4cd0c96f6a11555a710`
