# GSI-EDITORIAL-069 — revisión propuesta

Preparado: 2026-11-03. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `be68822c78fc5aecae532de97ed5da81eefcc2118fd5a6ec573fe30c063802d8`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T14-002

Decisión: pending_review · acción: revise.

Motivo: Conservar POUR y clave B; distractores próximos que confunden el nivel de principio con pautas reales.

### Antes

¿Qué conjunto corresponde a POUR?

- A. Privado, opcional, uniforme y rápido
- B. Perceptible, operable, comprensible y robusto **(correcta)**
- C. Público, ordenado, único y revisado
- D. Planificado, original, urgente y rentable

Explicación: POUR agrupa los principios de accesibilidad WCAG.

### Propuesta

En WCAG 2.2, ¿qué conjunto identifica los cuatro principios resumidos como POUR?

- A. Perceptible, operable, comprensible y adaptable.
- B. Perceptible, operable, comprensible y robusto. **(correcta)**
- C. Perceptible, compatible, comprensible y robusto.
- D. Distinguible, operable, predecible y robusto.

Explicación: POUR nombra los cuatro principios: percibir la información, operar la interfaz, comprenderla y permitir su interpretación fiable por agentes de usuario y tecnologías de apoyo. Adaptable, distinguible, predecible y compatible describen pautas dentro de esa organización, no reemplazos de los cuatro principios.

- Error A: Adaptable es una pauta del principio perceptible; no sustituye robusto como cuarto principio.
- Error C: Compatible es una pauta de robusto; sustituir operable por ella pierde el principio que cubre la interacción.
- Error D: Distinguible y predecible son pautas de perceptible y comprensible respectivamente, no los nombres de esos principios.

- [W3C: WCAG 2.2](https://www.w3.org/TR/2024/REC-WCAG22-20241212/) · §0.2 principios; §3.2.3–3.2.4 consistencia; §5.2.1–5.2.5 conformidad · versión: Recommendation 12-12-2024, edición fija comprobada 03-11-2026. No se confunde con borrador ni se afirma que WCAG 2.2 sea automáticamente la norma jurídica armonizada aplicable a todo servicio. · comprobado: 2026-11-03
- [W3C: WCAG 2.2 Errata](https://www.w3.org/WAI/WCAG22/errata/) · Errata since Current Publication; advertencia sobre correcciones sustantivas propuestas · versión: Página con fecha de modificación 01-10-2026, comprobada 03-11-2026. Erratas editoriales de 2025/2026 registradas; propuestas sustantivas no son normativas hasta nueva Recommendation. · comprobado: 2026-11-03

Partida: `6eeebc601f10e89037d501a2581f42faf5dafa3e215eacdc1eec300c387b13d9` · propuesta: `7b0e399f0e5cff48bc4b58c4d8977657727f3c9b59b11df0555cbe48d7459d03`

## AI-GSI-B3-T14-003

Decisión: pending_review · acción: revise.

Motivo: Conservar niveles y clave D; explicar acumulación y alcance sin identificar nivel con tipo de usuario.

### Antes

¿Qué representan A, AA y AAA?

- A. Perfiles profesionales
- B. Velocidades de conexión
- C. Tipos de cifrado
- D. Niveles de conformidad **(correcta)**

Explicación: Los niveles agrupan exigencias de conformidad, no capacidades de hardware.

### Propuesta

¿Qué representan A, AA y AAA en WCAG 2.2?

- A. Categorías de discapacidad a las que se asigna una versión distinta de cada página.
- B. Etapas de desarrollo que permiten aplazar la accesibilidad hasta la última entrega.
- C. Prioridades que cada equipo puede asignar de nuevo según sus preferencias.
- D. Niveles de conformidad que acumulan los criterios de éxito de los niveles anteriores. **(correcta)**

Explicación: A, AA y AAA organizan niveles de conformidad de WCAG. AA incluye los criterios de A y AA; AAA añade los de AAA. No representan perfiles de personas o fases del proyecto. Declarar conformidad requiere además respetar las demás condiciones aplicables a páginas y procesos completos, no solo elegir una etiqueta.

- Error A: Los niveles no separan versiones por discapacidad; cada uno reúne criterios de éxito para distintas necesidades.
- Error B: La conformidad no es una secuencia de hitos que permita dejar barreras sin evaluar hasta el final.
- Error C: Los niveles de los criterios están definidos por WCAG; no se reasignan discrecionalmente en cada proyecto.

- [W3C: WCAG 2.2](https://www.w3.org/TR/2024/REC-WCAG22-20241212/) · §0.2 principios; §3.2.3–3.2.4 consistencia; §5.2.1–5.2.5 conformidad · versión: Recommendation 12-12-2024, edición fija comprobada 03-11-2026. No se confunde con borrador ni se afirma que WCAG 2.2 sea automáticamente la norma jurídica armonizada aplicable a todo servicio. · comprobado: 2026-11-03

Partida: `16e5adeea9780e5e1b2588330f95e5c2a9d6d4346c8c44a92417b0cb5f99e53e` · propuesta: `0cb614a51c8cf81603cf2f1b53910dfafb9480e2a05e0bba32513c00e1c3ce54`

## AI-GSI-B3-T14-004

Decisión: pending_review · acción: revise.

Motivo: Conservar operación por teclado y clave C; acotar el caso a controles de formulario y explicar la excepción por trayectoria.

### Antes

Una interfaz solo puede usarse con ratón. ¿Qué práctica falta?

- A. Duplicar los controles sin operarlos por teclado
- B. Sustituir botones por elementos sin semántica
- C. Operación completa mediante teclado **(correcta)**
- D. Añadir atajos solo para usuarios de ratón

Explicación: La navegación por teclado permite interacción a personas que no usan dispositivos apuntadores.

### Propuesta

Un formulario permite seleccionar campos y enviar datos únicamente con ratón. ¿Qué práctica falta para esas funciones?

- A. Añadir instrucciones de dónde pulsar con el ratón, sin cambiar el manejo de los controles.
- B. Mostrar nombres accesibles en los controles, manteniendo la activación ligada al puntero.
- C. Permitir recorrer y operar las funciones del formulario mediante interfaz de teclado. **(correcta)**
- D. Aumentar las zonas pulsables y su contraste, conservando la interacción solo con ratón.

Explicación: Las funciones de este formulario deben poder operarse mediante interfaz de teclado, sin depender del ratón. Etiquetas, contraste y tamaño pueden ayudar a otras necesidades, pero no aportan esa operación por sí solos. El criterio 2.1.1 contempla una excepción para entrada que depende de la trayectoria del movimiento, como dibujo a mano alzada; seleccionar campos y enviar este formulario no son ese caso.

- Error A: Explicar una acción con ratón no proporciona una alternativa operable para quien usa teclado o tecnologías que lo emulan.
- Error B: Un nombre accesible identifica el control, pero también debe poder recibir interacción y activarse con teclado.
- Error D: Mejorar visibilidad o superficie de pulsación no habilita navegación y operación mediante teclado.

- [W3C: Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) · SC 2.1.1; Success Criterion e Intent · versión: Understanding de WCAG 2.2, texto informativo primario comprobado 03-11-2026; explica el criterio, no crea por sí mismo un requisito normativo distinto. · comprobado: 2026-11-03
- [W3C: WCAG 2.2](https://www.w3.org/TR/2024/REC-WCAG22-20241212/) · §0.2 principios; §3.2.3–3.2.4 consistencia; §5.2.1–5.2.5 conformidad · versión: Recommendation 12-12-2024, edición fija comprobada 03-11-2026. No se confunde con borrador ni se afirma que WCAG 2.2 sea automáticamente la norma jurídica armonizada aplicable a todo servicio. · comprobado: 2026-11-03

Partida: `aa79cacd33f0652385440298e53d636ccc83699bfd3312e45850e0279fece8f7` · propuesta: `ed039c29e162d175cd09de7c12a4e17dbd1372b36719a232192916bd2f7dfe5f`

## AI-GSI-B3-T14-005

Decisión: pending_review · acción: revise.

Motivo: Conservar foco visible y clave A; diferenciar indicador, hover y ocultación mínima AA frente a mejorada AAA.

### Antes

El foco desaparece visualmente al tabular. ¿Qué debe corregirse?

- A. Hacerlo visible y evitar que quede oculto **(correcta)**
- B. Eliminar el orden de tabulación
- C. Mostrar foco solo al usar ratón
- D. Desactivar el foco para evitar cambios visuales

Explicación: El usuario necesita saber qué control está activo al navegar.

### Propuesta

Al tabular por una página no se ve qué control tiene el foco. ¿Qué corrección aborda el problema?

- A. Mostrar un indicador de foco al tabular y evitar que el contenido lo oculte por completo. **(correcta)**
- B. Aplicar el estilo de foco solo al pasar el puntero, manteniéndolo ausente al tabular.
- C. Conservar el foco invisible y destacar el control solo después de activarlo con Enter.
- D. Llevar el foco al inicio de la página cada vez que se pulse Tab para facilitar orientación.

Explicación: El indicador visible permite localizar el punto de interacción antes de activar un control. Debe distinguirse de hover o selección. WCAG 2.4.7 trata su visibilidad; 2.4.11 exige en AA que el componente con foco no quede totalmente oculto por contenido creado por el autor, con las condiciones del criterio. La ausencia de cualquier ocultación es el requisito mejorado AAA, no el mínimo AA.

- Error B: El estado del puntero no informa del foco al navegar por teclado; hover y foco responden a mecanismos distintos.
- Error C: Destacar tras activar llega demasiado tarde para decidir qué control se va a utilizar.
- Error D: Reiniciar el recorrido en cada Tab impide avanzar de forma útil por los controles y no resuelve el indicador ausente.

- [W3C: Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) · SC 2.4.7; Success Criterion e Intent · versión: Understanding de WCAG 2.2, texto informativo primario comprobado 03-11-2026; explica el criterio, no crea por sí mismo un requisito normativo distinto. · comprobado: 2026-11-03
- [W3C: Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) · SC 2.4.11; Success Criterion e Intent · versión: Understanding de WCAG 2.2, texto informativo primario comprobado 03-11-2026; explica el criterio, no crea por sí mismo un requisito normativo distinto. · comprobado: 2026-11-03
- [W3C: WCAG 2.2](https://www.w3.org/TR/2024/REC-WCAG22-20241212/) · §0.2 principios; §3.2.3–3.2.4 consistencia; §5.2.1–5.2.5 conformidad · versión: Recommendation 12-12-2024, edición fija comprobada 03-11-2026. No se confunde con borrador ni se afirma que WCAG 2.2 sea automáticamente la norma jurídica armonizada aplicable a todo servicio. · comprobado: 2026-11-03

Partida: `174d6d671a06833664710aa58680b9287e52fe81cf5b513d44a78a735db12934` · propuesta: `a483ce5de6fdb2e6dad3c8884c83339e141c7a105ff4721c1a618b5815ebf1c5`

## AI-GSI-B3-T14-006

Decisión: pending_review · acción: revise.

Motivo: Conservar información no dependiente del color y clave B; ligar identificación textual con el error detectado, no con un cambio de tono.

### Antes

Un error se indica únicamente en rojo. ¿Qué mejora corresponde?

- A. Mostrar el error solo al pasar el ratón
- B. Añadir identificación textual comprensible **(correcta)**
- C. Cambiar a otro color como única señal
- D. Eliminar el mensaje al recibir foco

Explicación: No debe dependerse solo del color para transmitir información.

### Propuesta

Un formulario detecta un error de entrada y marca el campo solo en rojo, sin explicar el fallo. ¿Qué mejora corresponde?

- A. Intensificar el rojo del borde, manteniéndolo como única indicación de lo que ha fallado.
- B. Identificar el campo y describir el error mediante texto comprensible asociado a él. **(correcta)**
- C. Cambiar el rojo por otro color de mayor contraste, sin añadir una descripción del error.
- D. Dejar la explicación del fallo en un cambio de color que aparece al pasar el puntero.

Explicación: El color puede reforzar una indicación, pero el significado no debe depender de distinguirlo. Si se detecta automáticamente un error de entrada, debe identificarse el campo y describirse el error en texto. Una descripción asociada y accesible permite comprender qué ha ocurrido; no basta cambiar tono o contraste del borde.

- Error A: Un rojo más intenso no explica el fallo y sigue requiriendo distinguir el color para reconocerlo.
- Error C: El contraste puede mejorar la percepción, pero otro color como señal única no describe el error.
- Error D: Depender del puntero y de un cambio de color conserva barreras de acceso y no aporta la identificación textual solicitada.

- [W3C: Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) · SC 1.4.1; Success Criterion e Intent · versión: Understanding de WCAG 2.2, texto informativo primario comprobado 03-11-2026; explica el criterio, no crea por sí mismo un requisito normativo distinto. · comprobado: 2026-11-03
- [W3C: Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html) · SC 3.3.1; Success Criterion e Intent · versión: Understanding de WCAG 2.2, texto informativo primario comprobado 03-11-2026; explica el criterio, no crea por sí mismo un requisito normativo distinto. · comprobado: 2026-11-03

Partida: `df8864e62cf5221c24c11c0232cc0b74e2c2f881ae385c30cc76019965b4e293` · propuesta: `aab4e0cbabb869f02699c4e9efe7275a5af7f11126ab8819e37c7969586faf6b`

## AI-GSI-B3-T14-007

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación y ayuda del campo y clave A; acotar errores a los detectados y distinguir etiqueta de ejemplo o nombre técnico.

### Antes

¿Qué debe asociarse a un campo de formulario?

- A. Etiqueta y errores comprensibles **(correcta)**
- B. Una abreviatura interna sin explicación
- C. Una posición visual sin nombre accesible
- D. Solo un placeholder que desaparece sin etiqueta

Explicación: Los controles necesitan identificación y ayuda accesibles.

### Propuesta

¿Qué información debe vincularse a un campo de entrada de un formulario accesible?

- A. Una etiqueta que identifique el propósito y mensajes comprensibles si se detectan errores. **(correcta)**
- B. Un nombre interno del modelo de datos que se conserve aunque no se explique al usuario.
- C. Un ejemplo como placeholder que sustituya toda identificación persistente del campo.
- D. Una posición fija en la pantalla que permita deducir el significado sin etiqueta o nombre.

Explicación: El usuario necesita identificar el propósito del control y entender los errores de entrada que se detecten. La etiqueta debe estar correctamente asociada al campo y los mensajes deben poder relacionarse con el problema. Un placeholder puede aportar un ejemplo, pero no sustituye toda identificación del control ni las instrucciones pertinentes.

- Error B: Un identificador técnico puede ser estable y aun así no comunicar qué información se espera del usuario.
- Error C: El ejemplo que desaparece al escribir no sustituye una etiqueta e instrucciones adecuadas; su función es distinta.
- Error D: La posición visual no proporciona por sí sola un nombre accesible ni una identificación comprensible en otros modos de presentación.

- [W3C: Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html) · SC 3.3.2; Success Criterion e Intent · versión: Understanding de WCAG 2.2, texto informativo primario comprobado 03-11-2026; explica el criterio, no crea por sí mismo un requisito normativo distinto. · comprobado: 2026-11-03
- [W3C: Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/) · Overview; Associating labels explicitly/implicitly; nombre y propósito de controles · versión: Tutorial WAI informativo comprobado 03-11-2026. Se conserva la distinción entre etiqueta, instrucciones y nombre accesible. · comprobado: 2026-11-03
- [W3C: Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html) · SC 3.3.1; Success Criterion e Intent · versión: Understanding de WCAG 2.2, texto informativo primario comprobado 03-11-2026; explica el criterio, no crea por sí mismo un requisito normativo distinto. · comprobado: 2026-11-03

Partida: `a421f81808e41f514b0fb3eb51e9f8ffb1d853482d3f3de173eae317542954fd` · propuesta: `67fd727c46bf6426809dbf1529203f0be4951efe84f019c66c6ccee2909ec117`

## AI-GSI-B3-T14-008

Decisión: pending_review · acción: revise.

Motivo: Conservar ampliación sin pérdida y clave D; caso de formulario con contenido recortado y distinción entre zoom y reflow.

### Antes

¿Qué práctica favorece uso con ampliación?

- A. Exigir resolución única
- B. Ocultar textos al ampliar
- C. Fijar todo en píxeles e impedir zoom
- D. Reflow y zoom sin pérdida de función **(correcta)**

Explicación: El contenido debe adaptarse a ampliación y espacio disponible.

### Propuesta

Al ampliar un formulario, parte del texto y de los controles queda recortada y no puede usarse. ¿Qué práctica aborda esta barrera?

- A. Mantener el diseño fijo y reducir el texto para que vuelva a caber al ampliar.
- B. Ocultar indicaciones secundarias al aumentar el tamaño, aunque sean necesarias para completar la tarea.
- C. Desactivar el zoom del navegador y ofrecer una captura estática del formulario.
- D. Permitir ampliar y redistribuir contenido conservando información y funciones. **(correcta)**

Explicación: Ampliación y reflow permiten leer e interactuar sin perder contenido o funciones. WCAG 1.4.4 trata texto ampliable hasta el 200 %, con sus excepciones; 1.4.10 trata redistribución a dimensiones de referencia y admite contenidos que necesitan disposición bidimensional para su uso o significado. Son criterios distintos: superar una prueba de zoom no demuestra por sí solo todo reflow.

- Error A: Reducir el texto para anular la ampliación frustra la necesidad de lectura y no resuelve la adaptación del contenido.
- Error B: Ocultar información necesaria hace que ampliar provoque pérdida de contenido o capacidad de completar la tarea.
- Error C: Impedir zoom y ofrecer una imagen no conserva la interacción ni la ampliación del texto del formulario.

- [W3C: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) · SC 1.4.10; Success Criterion e Intent · versión: Understanding de WCAG 2.2, texto informativo primario comprobado 03-11-2026; explica el criterio, no crea por sí mismo un requisito normativo distinto. · comprobado: 2026-11-03
- [W3C: Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) · SC 1.4.4; Success Criterion e Intent · versión: Understanding de WCAG 2.2, texto informativo primario comprobado 03-11-2026; explica el criterio, no crea por sí mismo un requisito normativo distinto. · comprobado: 2026-11-03

Partida: `30f10f1d0d7b67401dcc826704d917dbd51ec5819505c273f78281b973f84c28` · propuesta: `923f472ffb20370f93f641511a1e96f6046222ccd5bb4fb14d7b11a6cfde1561`

## AI-GSI-B3-T14-011

Decisión: pending_review · acción: revise.

Motivo: Conservar investigación basada en evidencia y clave C; distinguir hipótesis internas, transferencia de diseños y perfiles ficticios.

### Antes

¿Qué reduce el riesgo de diseñar sobre necesidades supuestas?

- A. Copiar una web sin analizar tareas
- B. Elegir solo preferencias del diseñador
- C. Investigar y probar con usuarios reales **(correcta)**
- D. Inventar un usuario promedio como verdad

Explicación: La investigación aporta evidencia sobre necesidades, contextos y dificultades.

### Propuesta

¿Qué reduce el riesgo de diseñar un servicio sobre necesidades meramente supuestas?

- A. Tomar las preferencias del equipo como necesidades demostradas del conjunto de usuarios.
- B. Copiar los flujos de otro servicio y asumir que sus usuarios tienen las mismas tareas.
- C. Investigar necesidades y contrastar las propuestas con usuarios reales o probables. **(correcta)**
- D. Crear un perfil medio imaginado y utilizarlo como sustituto de observar diferencias.

Explicación: La investigación aporta evidencia de tareas, contexto y barreras; las pruebas con usuarios permiten contrastar cómo funcionan las propuestas. Deben incluirse perfiles y necesidades diversos, también de personas con discapacidad y de quienes prestan apoyo. La opinión del equipo puede formular hipótesis útiles, pero necesita contraste y no demuestra por sí sola una necesidad.

- Error A: Una preferencia interna puede iniciar una hipótesis; no acredita que represente las tareas o dificultades de los usuarios.
- Error B: Otro servicio puede sugerir patrones, pero su contexto y necesidades no se transfieren automáticamente.
- Error D: Un perfil inventado puede ocultar diferencias importantes y no sustituye datos o investigación con personas.

- [GOV.UK: Learning about users and their needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs) · How to research; Who to research with; Validating/Share your user needs · versión: Service Manual, texto comprobado 03-11-2026. Guía de método, no mandato jurídico de la AGE ni obligación de producir todos los entregables posibles. · comprobado: 2026-11-03
- [W3C: Accessibility, Usability, and Inclusion](https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/) · Distinctions and Overlaps; Accessibility and Usability; combinación de evaluación técnica y participación · versión: Texto WAI comprobado 03-11-2026. Conceptos relacionados con objetivos específicos; no se opone accesibilidad a investigación con personas con discapacidad. · comprobado: 2026-11-03

Partida: `31fa7926651678718749dfadde684fe2605798b120a6dc191351dd3323d695a9` · propuesta: `e0412343fa23cbc80d5f17f81a631a150719790f11b4055d191b02179a8e9d41`

## AI-GSI-B3-T14-012

Decisión: pending_review · acción: revise.

Motivo: Conservar claridad, consistencia y accesibilidad AGE y clave C; respaldo institucional y técnico sin inventar una guía visual o versión obligatoria.

### Antes

¿Qué principio debe guiar comunicación digital de la AGE?

- A. Cambios de identidad entre páginas
- B. Lenguaje deliberadamente ambiguo
- C. Claridad, consistencia y accesibilidad **(correcta)**
- D. Priorizar decoración sobre información

Explicación: La comunicación debe facilitar comprensión y uso coherente de servicios.

### Propuesta

¿Qué principio debe guiar la comunicación digital de un servicio de la AGE?

- A. Cambiar los nombres y patrones de navegación entre páginas para reforzar su originalidad.
- B. Mantener lenguaje administrativo ambiguo para que cada lector deduzca su propio significado.
- C. Comunicar con claridad, patrones consistentes y condiciones de acceso para distintas capacidades. **(correcta)**
- D. Priorizar la composición visual aunque dificulte localizar y comprender la información necesaria.

Explicación: La comunicación digital pública debe ayudar a encontrar, comprender y utilizar la información. Claridad, consistencia y accesibilidad favorecen ese fin: un mismo propósito debe reconocerse de manera coherente y poder percibirse y operarse con distintas capacidades. La identidad gráfica o una apariencia uniforme no sustituyen comprensión y uso efectivo.

- Error A: Cambios arbitrarios en nombres y patrones obligan a reaprender el servicio y dificultan orientarse entre páginas.
- Error B: La ambigüedad deliberada dificulta comprender qué se pide y qué consecuencias tiene una acción; no favorece información utilizable.
- Error D: La composición visual debe apoyar la tarea. Si impide localizar o comprender información necesaria, no cumple ese objetivo de comunicación.

- [Portal de Transparencia: Derecho a Entender](https://transparencia.gob.es/derechos/Derecho_Entender) · Derecho a Entender; información clara, comprensible y utilizable; lenguaje claro · versión: Página institucional de la AGE comprobada 03-11-2026. No se traslada su resumen de RD 707/2026 a plazos o exigencias no examinados de esa norma. · comprobado: 2026-11-03
- [BOE: RD 1112/2018](https://www.boe.es/buscar/act.php?id=BOE-A-2018-12699) · Arts. 2–5 ámbito y requisitos; arts. 10–12 comunicaciones; art. 15.1–2 declaración y enlaces · versión: Texto consolidado informativo, última actualización indicada 12-08-2019, comprobado 03-11-2026. Se registran las notas de STC 100/2019; se usan obligaciones del ámbito aplicable y no se generalizan procedimientos a toda entidad. · comprobado: 2026-11-03
- [W3C: WCAG 2.2](https://www.w3.org/TR/2024/REC-WCAG22-20241212/) · §0.2 principios; §3.2.3–3.2.4 consistencia; §5.2.1–5.2.5 conformidad · versión: Recommendation 12-12-2024, edición fija comprobada 03-11-2026. No se confunde con borrador ni se afirma que WCAG 2.2 sea automáticamente la norma jurídica armonizada aplicable a todo servicio. · comprobado: 2026-11-03

Partida: `0e254697aeda90b08de451393e8163844146f21a4f9e9489914b7145caaabba5` · propuesta: `9e72d31f1cd770e973732a6577d666217e4334a07f18150b9ab3f9cb8437dcb7`

## AI-GSI-B3-T14-013

Decisión: pending_review · acción: revise.

Motivo: Conservar límite de automatización y clave C; caso de informe sin errores que requiere evidencia complementaria, sin afirmar que el sitio necesariamente incumple.

### Antes

¿Qué limitación tienen las herramientas automáticas de accesibilidad?

- A. Garantizan conformidad completa por sí solas
- B. Sustituyen toda prueba de teclado
- C. Detectan solo parte de los problemas **(correcta)**
- D. Validan siempre el significado de cada texto alternativo

Explicación: La evaluación requiere revisión manual y pruebas pertinentes además de automatización.

### Propuesta

Un análisis automático de accesibilidad no detecta errores. ¿Qué conclusión de evaluación es adecuada?

- A. Declarar conformidad completa porque no se han encontrado incumplimientos automáticos.
- B. Sustituir la operación real por comprobar que el informe enumera etiquetas HTML.
- C. Complementar el análisis con revisión experta y pruebas pertinentes de interacción y contenido. **(correcta)**
- D. Dar por evaluado el significado de todo texto alternativo a partir de su mera existencia.

Explicación: Las herramientas automatizan una parte de la evaluación y pueden producir resultados incompletos o inexactos. Un informe sin errores no acredita que todas las barreras se hayan buscado. Hay que contrastar criterios que requieren juicio y uso real: por ejemplo, orden y operación del teclado o adecuación de una alternativa textual. Las pruebas pertinentes y su alcance deben documentarse.

- Error A: La ausencia de hallazgos de una herramienta no prueba que se cumplan los criterios que no puede evaluar ni todos los casos de uso.
- Error B: Enumerar elementos o atributos no demuestra que una persona pueda completar la interacción o comprender el contenido.
- Error D: La existencia de un atributo no asegura que su contenido sustituya correctamente la información o función de la imagen.

- [W3C: Selecting Web Accessibility Evaluation Tools](https://www.w3.org/WAI/test-evaluate/tools/selecting/) · What Evaluation Tools Can Do and Can Not Do; transcripción: intervención manual y posibles resultados inexactos · versión: Guía WAI informativa comprobada 03-11-2026. Ningún resultado automático aislado acredita conformidad completa. · comprobado: 2026-11-03
- [W3C: Accessibility, Usability, and Inclusion](https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/) · Distinctions and Overlaps; Accessibility and Usability; combinación de evaluación técnica y participación · versión: Texto WAI comprobado 03-11-2026. Conceptos relacionados con objetivos específicos; no se opone accesibilidad a investigación con personas con discapacidad. · comprobado: 2026-11-03

Partida: `2d6c5755d85290f97f7a9947cdae4cb95995f85d0badaa607fce7ec01e77c489` · propuesta: `7dfd75fc10dcfb656c56760a2b319071a7cc7a23f03b33601023fe09f1204c36`

## AI-GSI-B3-T14-014

Decisión: pending_review · acción: revise.

Motivo: Conservar declaración y comunicación y clave C; acotar al RD 1112/2018 y registrar alcance legal, sin extender procedimientos fuera de su ámbito.

### Antes

¿Qué debe acompañar la gestión de accesibilidad en servicios públicos?

- A. Una afirmación sin evaluación
- B. Solo un icono decorativo
- C. Declaración y mecanismos de comunicación según el marco aplicable **(correcta)**
- D. Una prohibición de comunicar errores

Explicación: La accesibilidad se gestiona con información, feedback, corrección y seguimiento.

### Propuesta

En un sitio web del sector público incluido en el ámbito del RD 1112/2018, ¿qué debe acompañar la gestión de accesibilidad?

- A. Un sello del proveedor que sustituya la información sobre barreras y canales de comunicación.
- B. Un buzón general como sustituto de toda declaración y de los mecanismos previstos para accesibilidad.
- C. Una declaración accesible y actualizada, con los mecanismos de comunicación y reclamación previstos. **(correcta)**
- D. Un informe técnico interno que evite publicar el estado de accesibilidad y cómo comunicar problemas.

Explicación: Para los sitios incluidos en el RD 1112/2018 se exige una declaración detallada, clara y accesible, actualizada al menos anualmente o tras la revisión pertinente. Debe explicar contenido no accesible e incorporar los enlaces y descripción de los mecanismos previstos. La declaración informa de la situación y facilita comunicación y seguimiento; publicarla no acredita por sí solo que todo el contenido sea conforme.

- Error A: Un sello no reemplaza la declaración ni los canales previstos y no informa necesariamente de barreras concretas.
- Error B: Un contacto general no sustituye por sí solo la información de la declaración o la tramitación que corresponda a cada comunicación.
- Error D: La evidencia interna ayuda a gestionar mejoras, pero no cumple la obligación de poner a disposición la declaración y los mecanismos aplicables.

- [BOE: RD 1112/2018](https://www.boe.es/buscar/act.php?id=BOE-A-2018-12699) · Arts. 2–5 ámbito y requisitos; arts. 10–12 comunicaciones; art. 15.1–2 declaración y enlaces · versión: Texto consolidado informativo, última actualización indicada 12-08-2019, comprobado 03-11-2026. Se registran las notas de STC 100/2019; se usan obligaciones del ámbito aplicable y no se generalizan procedimientos a toda entidad. · comprobado: 2026-11-03

Partida: `51b0ee51245f85b7f6e60b5f7e472d6d41fe9cf86439f4b63c1ba0e4cdc954ab` · propuesta: `17006921ce0b203a60fa7a0768ccb86149dd18eaa2ef697094f6c2a1873ce809`

## AI-GSI-B3-T14-016

Decisión: pending_review · acción: revise.

Motivo: Conservar diseño universal y clave D; contrastar flexibilidad y tolerancia con decisiones que privilegian un único perfil.

### Antes

¿Cuál es un principio práctico de diseño universal?

- A. Un único modo rígido para todos
- B. Mensajes imperceptibles
- C. Exigir el máximo esfuerzo físico
- D. Tolerancia a errores y múltiples modos de interacción **(correcta)**

Explicación: Flexibilidad e información perceptible ayudan a distintas capacidades y contextos.

### Propuesta

¿Qué decisión refleja principios prácticos de diseño universal?

- A. Exigir una única forma de interacción, aunque existan capacidades y preferencias distintas.
- B. Transmitir información esencial por una sola modalidad aunque parte de los usuarios no la perciba.
- C. Optimizar la rapidez de expertos a costa de aumentar esfuerzo y consecuencias de errores involuntarios.
- D. Ofrecer flexibilidad de interacción y reducir las consecuencias de acciones accidentales. **(correcta)**

Explicación: El diseño universal busca una utilización amplia y contempla flexibilidad, información perceptible y tolerancia al error. Dar opciones de uso y reducir consecuencias adversas de acciones accidentales ayuda a capacidades y contextos diversos. No exige interacción idéntica para todos ni garantiza eliminar la necesidad de apoyos o ajustes específicos.

- Error A: Un único modo rígido puede excluir a personas que necesitan otro método; la flexibilidad permite alternativas útiles.
- Error B: Una sola modalidad no alcanza a quien no puede percibirla; información esencial debe poder comunicarse de formas adecuadas.
- Error C: Aumentar esfuerzo y penalizar errores involuntarios contradice bajo esfuerzo y tolerancia al error, aunque un experto pueda actuar más rápido.

- [NC State: Principles of Universal Design](https://design.ncsu.edu/research/center-for-universal-design/) · The Principles of Universal Design: principios 2 Flexibility in Use, 4 Perceptible Information, 5 Tolerance for Error y 6 Low Physical Effort · versión: Versión 2.0 de 01-04-1997, texto HTML primario comprobado 03-11-2026. Principios de diseño, sin garantizar uso idéntico o prescindir de apoyos necesarios. · comprobado: 2026-11-03
- [W3C: Accessibility, Usability, and Inclusion](https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/) · Distinctions and Overlaps; Accessibility and Usability; combinación de evaluación técnica y participación · versión: Texto WAI comprobado 03-11-2026. Conceptos relacionados con objetivos específicos; no se opone accesibilidad a investigación con personas con discapacidad. · comprobado: 2026-11-03

Partida: `d5f6bad4ba7ec44228998ab6db95d804360f4f1f32eee951c2216b37ff169400` · propuesta: `9a282ff259721096e5a187c3b0b1d97a6f828ecf2a0e74d8fd66599df2587159`

## AI-GSI-B3-T14-017

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y alternativas completos y clave C; explicar medida de eficacia y límites de la muestra y el protocolo.

### Antes

¿Qué métrica resulta útil en una prueba de usabilidad?

- A. Número de componentes de la biblioteca
- B. Tamaño del código JavaScript
- C. Tasa de éxito al completar tareas **(correcta)**
- D. Cantidad de estilos definidos

Explicación: Éxito, tiempo y errores aportan evidencia de uso real.

### Propuesta

¿Qué métrica resulta útil en una prueba de usabilidad?

- A. Número de componentes de la biblioteca
- B. Tamaño del código JavaScript
- C. Tasa de éxito al completar tareas **(correcta)**
- D. Cantidad de estilos definidos

Explicación: La tasa de éxito registra qué proporción de tareas se completa según una definición previa de éxito. Deben concretarse tarea, participantes, condiciones y uso de ayuda. Junto con tiempo, errores y satisfacción aporta evidencia de usabilidad; un porcentaje aislado no representa toda la experiencia ni demuestra accesibilidad para perfiles que no se han evaluado.

- Error A: El número de componentes describe una decisión de implementación; no indica si los participantes logran sus objetivos.
- Error B: El tamaño del JavaScript puede influir en rendimiento, pero no mide directamente que una tarea se complete con éxito.
- Error D: La cantidad de estilos caracteriza el código de presentación, no el resultado de las tareas observadas.

- [GOV.UK: Measuring the success of your service](https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service) · Measuring transactions; Measuring an end-to-end journey or non-transactional website: task completion rates y tiempos · versión: Service Manual, texto comprobado 03-11-2026. La medida de éxito de tareas requiere definir tarea, participantes y qué cuenta como éxito; no certifica por sí sola toda usabilidad. · comprobado: 2026-11-03
- [W3C: Accessibility, Usability, and Inclusion](https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/) · Distinctions and Overlaps; Accessibility and Usability; combinación de evaluación técnica y participación · versión: Texto WAI comprobado 03-11-2026. Conceptos relacionados con objetivos específicos; no se opone accesibilidad a investigación con personas con discapacidad. · comprobado: 2026-11-03

Partida: `d89844a3057c4982d74e7a64b5b4e4b75ca8cfa0b2531aa01def694ad490d3c7` · propuesta: `5d9bcda531c3012b17c08390f2244fd9985b2984cc916f246866a714db4ab936`

## AI-GSI-B3-T14-018

Decisión: pending_review · acción: revise.

Motivo: Conservar relación sin equivalencia automática y clave B; evitar oposición artificial entre normas técnicas y participación.

### Antes

¿Qué relación existe entre usabilidad y accesibilidad?

- A. Son sinónimos exactos
- B. Ninguna garantiza automáticamente la otra **(correcta)**
- C. Accesibilidad solo significa rapidez
- D. Usabilidad excluye a personas con discapacidad

Explicación: Se relacionan, pero exigen evaluación específica de sus objetivos.

### Propuesta

¿Qué relación existe entre usabilidad y accesibilidad?

- A. Son propiedades idénticas: una prueba de rapidez con usuarios basta para declarar ambas.
- B. Se relacionan, pero el resultado en una no acredita automáticamente la otra. **(correcta)**
- C. La conformidad técnica permite omitir la experiencia de personas con discapacidad.
- D. La usabilidad solo debe evaluarse con personas sin discapacidad para evitar solapamientos.

Explicación: Accesibilidad y usabilidad se solapan y conviene trabajarlas conjuntamente, pero no son intercambiables. La usabilidad atiende eficacia, eficiencia y satisfacción en contexto; la accesibilidad pone el foco en barreras para personas con discapacidad. Una prueba con perfiles limitados o una comprobación técnica no demuestra por sí sola ambos objetivos. Combinar criterios técnicos y participación pertinente refuerza la evaluación.

- Error A: Rapidez en unas tareas y participantes no cubre todas las necesidades de uso ni todos los requisitos de accesibilidad.
- Error C: Cumplir criterios técnicos no elimina el valor de comprobar el uso efectivo; puede haber necesidades no cubiertas por una evaluación limitada.
- Error D: Las personas con discapacidad forman parte de los usuarios. Excluirlas deja sin observar necesidades relevantes y no separa correctamente los conceptos.

- [W3C: Accessibility, Usability, and Inclusion](https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/) · Distinctions and Overlaps; Accessibility and Usability; combinación de evaluación técnica y participación · versión: Texto WAI comprobado 03-11-2026. Conceptos relacionados con objetivos específicos; no se opone accesibilidad a investigación con personas con discapacidad. · comprobado: 2026-11-03
- [W3C: Selecting Web Accessibility Evaluation Tools](https://www.w3.org/WAI/test-evaluate/tools/selecting/) · What Evaluation Tools Can Do and Can Not Do; transcripción: intervención manual y posibles resultados inexactos · versión: Guía WAI informativa comprobada 03-11-2026. Ningún resultado automático aislado acredita conformidad completa. · comprobado: 2026-11-03

Partida: `830c99f2fe6efbcd4d04f1eeee06dc6fa867035db53caef4716121957df637c1` · propuesta: `e6f4264516ec28b773a601e591731ed2c68f588fde26d9fffac6b395fe397e84`

## AI-GSI-B3-T14-019

Decisión: pending_review · acción: revise.

Motivo: Conservar función instrumental de personas y journey maps y clave B; precisar sustento en evidencia y distinguir hipótesis de hallazgo.

### Antes

¿Qué papel tienen personas y journey maps?

- A. Entregables obligatorios en todo caso
- B. Herramientas para comprender experiencia, según su utilidad **(correcta)**
- C. Sustitutos de toda evidencia
- D. Pruebas automáticas de conformidad

Explicación: Se utilizan para resolver dudas y apoyar decisiones, no como fin en sí mismas.

### Propuesta

¿Qué papel tienen las personas y los mapas de experiencia o journey maps en diseño de servicios?

- A. Sustituir la investigación por perfiles hipotéticos y diagramas que el equipo considere representativos.
- B. Sintetizar perfiles y recorridos basados en evidencia cuando ayuden a comprender necesidades y decidir. **(correcta)**
- C. Acreditar conformidad WCAG por representar en un diagrama las etapas de un recorrido.
- D. Constituir entregables necesarios en todo proyecto aunque no respondan a ninguna duda de diseño.

Explicación: Las personas sintetizan grupos y necesidades y los mapas representan recorridos y puntos de dificultad. Su valor depende de la evidencia que los sostiene y de la pregunta que ayudan a resolver. Son medios para compartir conocimiento y orientar decisiones; no sustituyen investigar, no certifican conformidad y no son un fin obligatorio de cualquier proceso.

- Error A: Un perfil hipotético puede explicitar supuestos pendientes, pero no debe presentarse como evidencia de usuarios reales.
- Error C: Un recorrido diagramado no verifica los criterios de éxito WCAG o la operación efectiva de cada pantalla.
- Error D: La herramienta debe elegirse por su utilidad para el problema; completar entregables sin propósito no demuestra comprensión.

- [GOV.UK: Learning about users and their needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs) · How to research; Who to research with; Validating/Share your user needs · versión: Service Manual, texto comprobado 03-11-2026. Guía de método, no mandato jurídico de la AGE ni obligación de producir todos los entregables posibles. · comprobado: 2026-11-03

Partida: `d45a1570879bc951a3db1f9b4b92c03165f6b3fb3a7b4b8799fed4ba383dd18e` · propuesta: `2e9950a1bc875e2c0878233bf6d8fbf2fdb6a03a60d8b3a72bd8654a6e3ff335`

## AI-GSI-B3-T14-020

Decisión: pending_review · acción: revise.

Motivo: Conservar acumulación de criterios A y AA y clave D; distinguir ese requisito de toda la conformidad y registrar alternativa conforme sin ocultar condiciones.

### Antes

¿Qué exige conformidad AA respecto a criterios aplicables?

- A. Cumplir únicamente AAA
- B. Tener cualquier herramienta sin errores
- C. Cumplir algunos de A y algunos de AA
- D. Satisfacer los de A y AA **(correcta)**

Explicación: AA incorpora los requisitos aplicables de ambos niveles; no es una selección parcial.

### Propuesta

Respecto a los criterios de éxito de WCAG 2.2, ¿qué exige el nivel de conformidad AA?

- A. Cumplir los criterios AA, dejando los de A fuera porque pertenecen a un nivel anterior.
- B. Alcanzar un porcentaje alto de criterios A y AA, compensando incumplimientos entre ellos.
- C. Cumplir algunos criterios AAA para compensar cualquier criterio A o AA no satisfecho.
- D. Satisfacer todos los criterios de éxito aplicables de los niveles A y AA. **(correcta)**

Explicación: Respecto a criterios de éxito, AA acumula los de A y AA: no es una media ni una selección compensable. La conformidad completa exige además páginas y procesos completos, usos de tecnología compatibles con accesibilidad y no interferencia, según WCAG. La norma contempla una versión alternativa conforme bajo sus condiciones; un informe automático sin hallazgos no equivale a esa alternativa ni prueba todos los requisitos.

- Error A: Los criterios A siguen siendo necesarios al evaluar el nivel AA; no quedan sustituidos por los de AA.
- Error B: No existe compensación por porcentaje: un criterio aplicable incumplido no queda satisfecho por acertar otros.
- Error C: Cumplir un criterio AAA puede mejorar el contenido, pero no compensa incumplimientos de A o AA.

- [W3C: WCAG 2.2](https://www.w3.org/TR/2024/REC-WCAG22-20241212/) · §0.2 principios; §3.2.3–3.2.4 consistencia; §5.2.1–5.2.5 conformidad · versión: Recommendation 12-12-2024, edición fija comprobada 03-11-2026. No se confunde con borrador ni se afirma que WCAG 2.2 sea automáticamente la norma jurídica armonizada aplicable a todo servicio. · comprobado: 2026-11-03
- [W3C: WCAG 2.2 Errata](https://www.w3.org/WAI/WCAG22/errata/) · Errata since Current Publication; advertencia sobre correcciones sustantivas propuestas · versión: Página con fecha de modificación 01-10-2026, comprobada 03-11-2026. Erratas editoriales de 2025/2026 registradas; propuestas sustantivas no son normativas hasta nueva Recommendation. · comprobado: 2026-11-03

Partida: `d9e3aec4decf40940a15d6d318896fb4ea761a836d91331fa708f246fbb7b50f` · propuesta: `d4aa0fda30a4181d4a410e28d13dc63de2333faee7d27c91f3929fb653306fdf`

## AI-GSI-B3-T15-001

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación y cuatro distractores próximos con clave A; precisar similitud y evaluación sin equiparar agrupación con clasificación supervisada.

### Antes

¿Qué tarea busca agrupar casos según similitud sin una clase objetivo preasignada?

- A. Clustering **(correcta)**
- B. Extracción de reglas de asociación
- C. Regresión de una variable numérica
- D. Clasificación supervisada

Explicación: Clustering descubre agrupaciones; clasificación asigna clases según un modelo aprendido.

### Propuesta

¿Qué tarea busca agrupar casos según similitud sin una clase objetivo preasignada?

- A. Clustering **(correcta)**
- B. Extracción de reglas de asociación
- C. Regresión de una variable numérica
- D. Clasificación supervisada

Explicación: Clustering agrupa observaciones por una noción de similitud sin aprender una clase objetivo preasignada a cada caso. El resultado depende de representación, escala, criterio y algoritmo, y necesita evaluación: no demuestra por sí mismo grupos naturales únicos. Clasificación y regresión supervisadas aprenden un objetivo a partir de ejemplos etiquetados; asociación busca relaciones de coaparición.

- Error B: Las reglas de asociación expresan relaciones de coaparición entre elementos; no son la tarea de repartir casos en grupos por similitud.
- Error C: La regresión supervisada estima un objetivo numérico a partir de ejemplos; el enunciado no proporciona ese objetivo.
- Error D: La clasificación supervisada aprende clases de ejemplos etiquetados; aquí no hay una clase objetivo preasignada.

- [scikit-learn: Clustering](https://scikit-learn.org/stable/modules/clustering.html) · §2.3: agrupación de datos sin etiquetas; variantes y criterios de similitud · versión: Documentación estable servida como 1.9.1, comprobada 03-11-2026. Se contrasta la tarea, sin instalar la biblioteca ni ejecutar algoritmos. · comprobado: 2026-11-03
- [Oracle: Machine Learning Overview](https://docs.oracle.com/en/database/oracle/machine-learning/oml4sql/21/mlsql/introduction-machine-learning.html) · What Is Machine Learning?; Define Your Business Problem; What Do You Want to Do? · versión: OML for SQL 21, edición fija comprobada 03-11-2026. Se usan patrones/modelos y tareas analíticas, no afirmaciones promocionales o médicas de la página. · comprobado: 2026-11-03

Partida: `fa300b9fec214b4ec70e03df15b722ed29ab7080e90f2dd136cf0ab23ae7f63c` · propuesta: `fa8185f8bcba98711859d0ed04cf1615c750af451f048e1c7f827fcaac70428d`

## AI-GSI-B3-T15-002

Decisión: pending_review · acción: revise.

Motivo: Conservar comprensión y preparación previas como fundamento y clave C; nombrar CRISP-DM y permitir iteración en vez de un orden rígido.

### Antes

¿Qué debe preceder al modelado en el proceso descrito?

- A. Eliminar toda evaluación
- B. Desplegar antes de conocer el objetivo
- C. Comprender negocio y datos y prepararlos **(correcta)**
- D. Elegir el resultado esperado sin datos

Explicación: El proceso conecta necesidad, datos, preparación, modelo y evaluación.

### Propuesta

En un proceso basado en CRISP-DM, ¿qué trabajo fundamenta la selección y el ajuste de modelos?

- A. Elegir la técnica por su popularidad y tomar su indicador interno como definición del éxito.
- B. Fijar el despliegue definitivo antes de estudiar calidad, alcance y disponibilidad de los datos.
- C. Comprender el objetivo del negocio y los datos, y preparar un conjunto adecuado para modelar. **(correcta)**
- D. Sustituir la comprensión del problema por obtener un modelo y definir su utilidad a posteriori.

Explicación: El problema y los criterios de éxito orientan qué datos se necesitan, cómo valorar su calidad y qué preparación realizar. Esa base permite seleccionar técnicas y evaluar si un modelo resuelve la necesidad. En un proceso basado en CRISP-DM las fases se relacionan y puede ser necesario volver a comprender o preparar datos; no es una cascada de pasos irreversibles.

- Error A: Una técnica popular y su métrica no determinan el objetivo del negocio o la adecuación de los datos.
- Error B: Una decisión de despliegue sin examinar datos y alcance no aporta la base necesaria para construir un modelo útil.
- Error D: Obtener primero un resultado y decidir después qué problema pretendía resolver invierte la relación entre necesidad, datos y evaluación.

- [Oracle: Process Overview](https://docs.oracle.com/en/database/oracle/machine-learning/oml4sql/21/mlsql/process-overview.html) · Define Business Goals; Understand Data; Prepare Data; Develop Models; Evaluate; Deploy · versión: OML for SQL 21, edición fija del sitio comprobada 03-11-2026. Flujo basado en CRISP-DM; preparación y modelado pueden requerir iteraciones, no cascada irreversible. · comprobado: 2026-11-03

Partida: `910d9087ab28b572f4fdc977b43fe1a1a95f25ac16c955c2b9840bda105540ce` · propuesta: `2bbc4664a3301840c6208af7d47449f111dc6a321205b4e07ad0a29529111724`

## AI-GSI-B3-T15-003

Decisión: pending_review · acción: revise.

Motivo: Conservar diferencia de finalidad y clave D; distracciones sobre clasificación, OLTP y causalidad, sin tratar ambas técnicas como excluyentes.

### Antes

¿Qué distingue OLAP de minería de datos?

- A. Son siempre idénticos
- B. OLAP solo registra transacciones
- C. Minería significa exclusivamente dibujar cubos
- D. OLAP explora dimensiones y agregaciones; minería busca patrones o modelos **(correcta)**

Explicación: Las técnicas se complementan con finalidades analíticas distintas.

### Propuesta

¿Qué distingue el análisis OLAP de la minería de datos?

- A. OLAP aprende clases a partir de ejemplos; minería organiza consultas por jerarquías de dimensiones.
- B. OLAP registra operaciones transaccionales; minería sustituye la necesidad de evaluar los patrones obtenidos.
- C. OLAP demuestra causas al agregar medidas; minería se limita a presentar los mismos totales en gráficos.
- D. OLAP explora dimensiones y agregaciones; minería busca patrones, relaciones o modelos en los datos. **(correcta)**

Explicación: OLAP facilita consultar medidas según dimensiones, niveles y agregaciones; la minería busca patrones o construye modelos, con tareas como agrupación y predicción. Son enfoques complementarios: una agregación no demuestra causalidad ni equivale a entrenar un modelo. No es necesario precalcular todas las agregaciones posibles, y un patrón descubierto necesita evaluación.

- Error A: Invierte finalidades: aprender clases es una tarea de modelado supervisado; consultar jerarquías y medidas caracteriza el análisis multidimensional.
- Error B: Confunde OLAP con la operación transaccional propia de OLTP. La minería tampoco elimina la validación de resultados.
- Error C: Agregar medidas no identifica causas por sí solo; la minería incluye más tareas que representar totales.

- [Microsoft: Aggregations and Aggregation Designs](https://learn.microsoft.com/en-us/analysis-services/multidimensional-models-olap-logical-cube-objects/aggregations-and-aggregation-designs?view=sql-analysis-services-2025) · In this article: dimensiones, medidas, cubos, jerarquías y agregaciones; Designing Aggregations · versión: Texto público actualizado 05-02-2024, vista sql-analysis-services-2025 comprobada 03-11-2026. No exige precalcular todas las agregaciones ni prescribe una instalación concreta. · comprobado: 2026-11-03
- [Oracle: Machine Learning Overview](https://docs.oracle.com/en/database/oracle/machine-learning/oml4sql/21/mlsql/introduction-machine-learning.html) · What Is Machine Learning?; Define Your Business Problem; What Do You Want to Do? · versión: OML for SQL 21, edición fija comprobada 03-11-2026. Se usan patrones/modelos y tareas analíticas, no afirmaciones promocionales o médicas de la página. · comprobado: 2026-11-03

Partida: `dab995bc39bcd5c3a18b769c235cd0cfdc90819f8d678cd4001d5f184a91f12d` · propuesta: `b814a76f219ab134b77bbd3ed5075813ba8c44b145e2090be0a9ef32d47422dd`

## AI-GSI-B3-T15-004

Decisión: pending_review · acción: revise.

Motivo: Conservar justificación por necesidad y valor de distribución y clave C; caso de decisión de migración, sin prescribir nube, proveedor o adquisición.

### Antes

¿Qué justifica una arquitectura Big Data?

- A. Usar siempre el mayor número de herramientas
- B. Evitar bases convencionales por principio
- C. Necesidades de volumen, velocidad o variedad y valor de distribuir **(correcta)**
- D. Elegir por moda

Explicación: La distribución debe aportar beneficios frente a alternativas más simples.

### Propuesta

Un equipo propone migrar su análisis de datos a una arquitectura Big Data. ¿Qué evaluación debe fundamentar esa decisión?

- A. Migrar porque el nombre Big Data identifica una plataforma más moderna que la base actual.
- B. Distribuir de entrada todas las cargas aunque una solución convencional cumpla sus objetivos.
- C. Contrastar volumen, ritmo y variedad con las capacidades actuales y el beneficio de distribuir. **(correcta)**
- D. Elegir más herramientas de procesamiento y definir después qué necesidad justificaba cada una.

Explicación: La decisión debe partir de las cargas, requisitos y capacidades disponibles: volumen, velocidad o variedad pueden hacer insuficiente el enfoque actual y justificar escalado o procesamiento distribuido. Deben compararse beneficios, coste y complejidad frente a alternativas más simples. No hay un volumen fijo que obligue a todas las organizaciones ni una garantía de mejora por usar más herramientas.

- Error A: La modernidad de una etiqueta no demuestra que la arquitectura responda mejor a la carga o necesidad del servicio.
- Error B: Distribuir introduce coordinación y complejidad; hace falta justificar qué aporta cuando una opción más simple ya satisface los requisitos.
- Error D: Acumular herramientas antes de concretar las necesidades no permite evaluar el beneficio de la arquitectura elegida.

- [Microsoft: Big Data Architectures](https://learn.microsoft.com/en-us/azure/architecture/databases/guide/big-data-architectures) · Introducción; Consider big data architectures; Lambda architecture y Kappa architecture: latencia y complejidad · versión: Guía de arquitectura comprobada 03-11-2026. Umbral relativo a capacidades y cargas; no un volumen fijo universal o recomendación de adquirir un producto. · comprobado: 2026-11-03

Partida: `080e5f793b07d5e1a23c07d9fcdd503f17d0c1841dc5bfa6cccbf343312ec64e` · propuesta: `68b7520136dead5462db702e4864fcc37ca4fd120815dd7f96b3567d4b395a4f`
