# GSI-EDITORIAL-073 — revisión propuesta

Preparado: 2026-11-03. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `7ce12a6e069cc4cbf2738b5ef4892af1d66797279d16a7f5213c1ce8dd305fbe`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T03-019

Decisión: pending_review · acción: revise.

Motivo: Conservar RPO bajo y clave A; microcaso que separa actualidad recuperable, velocidad de recuperación y retención.

### Antes

Un proceso tolera muy poca pérdida temporal de datos. ¿Qué exige estudiar?

- A. Frecuencia de copias, logs o replicación **(correcta)**
- B. Omitir pruebas de restore
- C. Reducir el número de usuarios por regla universal
- D. Solo aumentar el tamaño del monitor

Explicación: Un RPO bajo condiciona frecuencia y mecanismos de protección de datos.

### Propuesta

Un proceso admite perder, como máximo, los últimos quince minutos de datos tras un desastre. ¿Qué estudio responde más directamente a ese límite?

- A. Estudiar la frecuencia y validez de puntos recuperables mediante copias, logs o réplica. **(correcta)**
- B. Reservar cómputo y automatizar el arranque para reducir el tiempo de puesta en servicio.
- C. Ampliar el plazo de retención para conservar un historial de recuperación de más años.
- D. Acortar la detección de la caída para iniciar antes la coordinación de la recuperación.

Explicación: El requisito limita la pérdida temporal de datos: es un RPO. Deben estudiarse mecanismos que produzcan puntos recuperables suficientemente recientes y comprobar su validez. La frecuencia nominal de una tarea no garantiza el RPO si falla o deja datos incoherentes. Restaurar rápido corresponde al RTO; conservar más historia no implica disponer de un punto más reciente.

- Error B: Preparar capacidad y arranque ayuda al tiempo de recuperación, pero no determina la antigüedad del dato recuperable.
- Error C: Más retención conserva puntos durante más tiempo; no reduce por sí misma la separación temporal entre ellos.
- Error D: Detectar antes puede reducir la interrupción, sin hacer más reciente el último dato que puede recuperarse.

- [Microsoft: Architecture strategies for disaster recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) · Definitions: RPO/RTO; Design recovery-aware architecture; Prepare infrastructure and recovery procedures; Practice with regular drills; Automate recovery procedures safely · versión: Texto público comprobado 03-11-2026. Se usan objetivos, preparación, pruebas y automatización; no se adopta la generalización de pérdida cero por toda réplica síncrona ni se prescribe un simulacro en producción. · comprobado: 2026-11-03

Partida: `4e79e0e5987353d794e4d5aa648f5cc7132abcaaf17294937402f90b6e7b84f2` · propuesta: `fe4bd4757d7ad3b3f39067151ed38066d2fd311ca5d96ce9bbb0a45d2c8b4064`

## AI-GSI-B4-T03-020

Decisión: pending_review · acción: revise.

Motivo: Conservar preparación para RTO y clave C; caso que diferencia rapidez demostrable de frecuencia, retención y cantidad de copias.

### Antes

Un servicio necesita recuperarse rápidamente. ¿Qué ayuda a cumplir ese objetivo?

- A. Conservar contraseñas únicamente en memoria de una persona
- B. Solo una copia que nunca se restauró
- C. Capacidad preparada, automatización y runbooks ensayados **(correcta)**
- D. Documentación sin responsables

Explicación: Un RTO bajo exige preparación y pruebas de todo el proceso de recuperación.

### Propuesta

Un ensayo tarda dos horas en recuperar un servicio cuyo RTO es de treinta minutos. ¿Qué línea de trabajo aborda más directamente esa diferencia?

- A. Reducir la ventana entre puntos de copia, manteniendo la estrategia actual.
- B. Extender la conservación histórica para ampliar el conjunto de puntos elegibles.
- C. Preparar capacidad y automatización con procedimientos de recuperación ensayados. **(correcta)**
- D. Incrementar la cantidad de copias retenidas y la variedad de soportes utilizados.

Explicación: El caso plantea un RTO: reducir el tiempo hasta recuperar el servicio. Capacidad preparada, automatización controlada y procedimientos ensayados reducen improvisación y permiten medir el proceso completo. Deben incluir datos, accesos y dependencias. Tener más copias o hacerlas más frecuentes puede mejorar otras propiedades, pero no demuestra el tiempo real de retorno al servicio.

- Error A: Un intervalo menor puede mejorar el RPO; sin revisar el proceso no demuestra menor tiempo de recuperación.
- Error B: La retención amplía el historial disponible, no la velocidad con la que se restaura y valida la prestación.
- Error D: Diversificar soportes puede ser útil para protección, pero hay que medir su recuperación para justificar el RTO.

- [Microsoft: Architecture strategies for disaster recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) · Definitions: RPO/RTO; Design recovery-aware architecture; Prepare infrastructure and recovery procedures; Practice with regular drills; Automate recovery procedures safely · versión: Texto público comprobado 03-11-2026. Se usan objetivos, preparación, pruebas y automatización; no se adopta la generalización de pérdida cero por toda réplica síncrona ni se prescribe un simulacro en producción. · comprobado: 2026-11-03

Partida: `540a3a8e572b26ec8489dd57d02f54b441e6fb03262e90b7be742f86621b87bf` · propuesta: `84a5d4950f4bed7109099caa73d8da9c74084e9cfc35ddf21d43eba380403675`

## AI-GSI-B4-T04-002

Decisión: pending_review · acción: revise.

Motivo: Conservar baseline y clave A; contrastar referencia aprobada con propuesta, procedimiento y observación.

### Antes

¿Qué fija una baseline de configuración?

- A. Un estado aprobado de referencia **(correcta)**
- B. Un permiso universal
- C. Una previsión de ventas
- D. Una captura sin fecha

Explicación: La baseline permite comparar el estado real con el esperado.

### Propuesta

¿Qué fija una baseline de configuración?

- A. Una configuración revisada y aprobada que sirve como referencia. **(correcta)**
- B. Una propuesta de estado futuro aún pendiente de autorización.
- C. Una secuencia de tareas para implantar una modificación concreta.
- D. Una observación del estado real que todavía no ha sido aprobada.

Explicación: La baseline documenta una configuración revisada y aprobada en un momento dado. Sirve de referencia para comparar el estado real y controlar cambios posteriores. Puede revisarse mediante el procedimiento de cambios: no es una fotografía intocable ni cualquier captura obtenida de un servidor.

- Error B: Una intención pendiente no constituye todavía la referencia aprobada.
- Error C: Un procedimiento describe cómo actuar; no fija por sí mismo el estado de configuración acordado.
- Error D: Descubrir el estado existente no implica que haya sido revisado y aceptado como referencia.

- [NIST CSRC: Baseline configuration](https://csrc.nist.gov/glossary/term/baseline_configuration) · Definitions: conjunto de especificaciones revisado y acordado, base para cambios futuros; atribución a SP800-128 · versión: Glosario HTML comprobado 03-11-2026. Se lee la definición pública y sus atribuciones; no se declara lectura íntegra de los PDF enlazados ni una obligación normativa de la AGE. · comprobado: 2026-11-03

Partida: `210c6de911565a33845a659ceb2c98618b183dea6aa425f0e96f17dc09083a03` · propuesta: `49ca950360f06f541cbd96714f30fee320a1a0cf18a19890dafe2c8abeb1614d`

## AI-GSI-B4-T04-003

Decisión: pending_review · acción: revise.

Motivo: Conservar el microcaso de deriva y clave A; distractores de gestión del estado próximos al concepto.

### Antes

Una modificación manual aleja un servidor de su configuración aprobada. ¿Qué fenómeno describe?

- A. Configuration drift **(correcta)**
- B. Balanceo de carga
- C. Compresión
- D. Copia diferencial

Explicación: La deriva aparece cuando el estado real se separa del esperado.

### Propuesta

Una modificación manual aleja un servidor de su configuración aprobada. ¿Qué fenómeno describe?

- A. Deriva de configuración respecto a la referencia aprobada. **(correcta)**
- B. Establecimiento de una nueva baseline formalmente aprobada.
- C. Despliegue controlado de la versión autorizada del sistema.
- D. Reversión planificada al último estado aprobado del servidor.

Explicación: La deriva es la separación entre el estado real y el esperado o aprobado. El cambio manual descrito introduce esa diferencia; no crea por sí solo una nueva baseline. Detectarla permite investigar y decidir si se revierte o se tramita una referencia nueva. La detección no autoriza automáticamente ninguna de esas acciones.

- Error B: El caso dice que se aleja de la referencia, sin una nueva aprobación que la sustituya.
- Error C: Un despliegue de la configuración autorizada buscaría el estado esperado, no la desviación descrita.
- Error D: La reversión devuelve al estado de referencia; aquí se produce el alejamiento.

- [Microsoft: Administer your Azure cloud estate](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/manage/administer) · Manage configuration drift: contraste entre configuración prevista y entorno real; Store desired and last-known-good configurations · versión: Texto público comprobado 03-11-2026. Deriva como diferencia de estado; detectar no equivale a autorizar o corregir automáticamente todo cambio. · comprobado: 2026-11-03
- [NIST CSRC: Baseline configuration](https://csrc.nist.gov/glossary/term/baseline_configuration) · Definitions: conjunto de especificaciones revisado y acordado, base para cambios futuros; atribución a SP800-128 · versión: Glosario HTML comprobado 03-11-2026. Se lee la definición pública y sus atribuciones; no se declara lectura íntegra de los PDF enlazados ni una obligación normativa de la AGE. · comprobado: 2026-11-03

Partida: `a960038817a0c8e633c59c318146ea65b5153b3a9cc74d77d2b5c06ce1fc8db7` · propuesta: `e9f5447c0f7bc1eea3b02993d60735f115964723391a77c14d9d20d2c6449980`

## AI-GSI-B4-T04-004

Decisión: pending_review · acción: revise.

Motivo: Conservar fiabilidad frente a volumen y clave B; formular un criterio operativo, sin elevar un inventario pequeño a preferencia universal.

### Antes

¿Qué es preferible a una CMDB extensa pero desactualizada?

- A. Una lista aún mayor sin contrastar
- B. Un inventario más pequeño y fiable con relaciones útiles **(correcta)**
- C. Eliminar toda información de configuración
- D. Copiar datos sin responsables

Explicación: La fiabilidad de la información importa más que el volumen nominal.

### Propuesta

Al acotar la información de configuración que se mantiene, ¿qué criterio mejora su utilidad frente a acumular registros desactualizados?

- A. Priorizar cobertura nominal, aunque no se contrasten atributos.
- B. Priorizar datos fiables y relaciones pertinentes al servicio. **(correcta)**
- C. Priorizar detalle histórico, aunque no se mantenga el estado actual.
- D. Priorizar valoración contable, aunque no se modelen dependencias.

Explicación: La información de configuración debe servir para decisiones operativas. Un alcance manejable, con datos contrastados, relaciones útiles y responsables de actualización, puede aportar más que una colección extensa y obsoleta. Acotar no significa ignorar elementos críticos: el alcance debe responder a los servicios y usos que se pretende apoyar.

- Error A: Contar registros no demuestra que sus atributos permitan analizar impactos reales.
- Error C: El historial puede ser valioso, pero no sustituye conocer la configuración y las relaciones vigentes.
- Error D: El valor contable apoya gestión de activos, pero no reemplaza dependencias necesarias para gestionar configuración.

- [Atlassian: What is a configuration management database?](https://www.atlassian.com/itsm/it-asset-management/cmdb) · What is a CMDB?; The challenges of CMDBs: Relevancy y Accuracy · versión: Guía pública de fabricante comprobada 03-11-2026. Alcance útil, propietario, actualización y relaciones; no se universaliza su ejemplo de qué periféricos deben inventariarse o su estadística comercial. · comprobado: 2026-11-03

Partida: `6fd617aa4a8d2f228a5d9ae5fbb315e360c899f94df44385f66e2e24e62010d3` · propuesta: `c931885078fdb531da59e6a8cc6e95aeae8ca4acf7163d338d734954454b332a`

## AI-GSI-B4-T04-005

Decisión: pending_review · acción: revise.

Motivo: Conservar trazabilidad de emergencia y clave D; microcaso sobre controles que persisten pese a acelerar el flujo.

### Antes

¿Qué exige un cambio de emergencia pese a acelerar controles?

- A. Aceptación automática de cualquier impacto
- B. Supresión de responsables
- C. Ausencia de documentación permanente
- D. Trazabilidad y revisión posterior **(correcta)**

Explicación: Urgencia no elimina control ni aprendizaje posterior.

### Propuesta

Para restaurar un servicio se autoriza un cambio de emergencia por un cauce acelerado. ¿Qué control debe conservarse?

- A. Clasificarlo como estándar por urgencia, sin evaluar su repetibilidad.
- B. Aplazar todo registro hasta que aparezca otro incidente relacionado.
- C. Tomar la autorización urgente como sustituto de validar el resultado.
- D. Registrar decisiones y resultado, con revisión posterior proporcional. **(correcta)**

Explicación: La emergencia puede acelerar evaluación y autorización, pero mantiene responsabilidad y trazabilidad. Registrar lo decidido y ejecutado, validar el resultado y revisar después permite comprobar efectos y aprender. La urgencia no convierte el cambio en estándar preautorizado. El detalle del flujo y de quién autoriza depende del modelo de la organización.

- Error A: Estándar supone un proceso repetible y preaprobado; la urgencia no acredita esas condiciones.
- Error B: Esperar a otro incidente deja la actuación sin evidencia precisamente cuando debe poder reconstruirse.
- Error C: Autorizar ejecutar y verificar el resultado cumplen funciones diferentes; una autorización no prueba que el servicio se recuperó.

- [Atlassian: Types of change management for ITSM teams](https://www.atlassian.com/itsm/change-management/types) · Standard changes; Normal changes; Emergency changes; How should you categorize changes? · versión: Texto público comprobado 03-11-2026. Riesgo, preautorización y urgencia; son prácticas de un proveedor, no lectura de manual ITIL de pago. Un parche no es necesariamente siempre emergencia. · comprobado: 2026-11-03
- [Atlassian: ITSM use case: Change management normal change](https://confluence.atlassian.com/proforma/itsm-use-case-change-management-normal-change-1087521416.html) · The process, pasos6–8; revisión posterior para cambios normales, mayores y de emergencia; Unique Feature/Advantages · versión: Ejemplo ProForma modificado 10-06-2024, comprobado 03-11-2026. Respalda registro y revisión posterior; no obliga a usar ese producto, sus formularios, actores o estados de workflow. · comprobado: 2026-11-03

Partida: `7aff308dcec9fa9f2ccf5f20d8b39de328a402b5a0f7505187999e2afe7c2bfa` · propuesta: `70e07bad3b598e72949440915723fcf4ce1cf505aceed66a1679e420dc563d45`

## AI-GSI-B4-T04-007

Decisión: pending_review · acción: revise.

Motivo: Conservar CAB proporcional y clave D; acotar asesoramiento y autoridad sin imponer reunión o actor universal.

### Antes

¿Qué describe correctamente el papel del CAB?

- A. Un sistema de archivos
- B. Una reunión obligatoria para cualquier cambio trivial
- C. Un algoritmo de routing
- D. Un mecanismo de asesoramiento o decisión según el modelo **(correcta)**

Explicación: El gobierno debe ser proporcional y no exige una reunión CAB para toda acción.

### Propuesta

¿Qué describe correctamente el papel del CAB?

- A. Un ejecutor técnico que realiza cada modificación sobre los sistemas.
- B. Una autorización colegiada que debe reunirse para cada cambio estándar.
- C. Un equipo centrado en resolver incidentes, al margen de los cambios.
- D. Un órgano de asesoramiento y evaluación, con autoridad según el modelo. **(correcta)**

Explicación: El CAB aporta perspectivas para evaluar impacto, riesgo y preparación de cambios. Puede intervenir en decisiones según la autoridad que tenga asignada, pero no debe confundirse con quien ejecuta toda tarea. El gobierno puede usar preautorización, revisión por pares o automatización para cambios de menor riesgo, sin reunión CAB por cada actuación.

- Error A: Evaluar y asesorar no equivale a ejecutar personalmente todas las modificaciones.
- Error B: Los cambios estándar tienen un proceso preautorizado; no requieren por definición una nueva reunión para cada instancia.
- Error C: La resolución de incidentes puede motivar cambios, pero no define la función del CAB en su gobierno.

- [Atlassian: Why companies need a change advisory board](https://www.atlassian.com/itsm/change-management/change-advisory-board) · What is a change advisory board?; What does the change advisory board do? · versión: Texto público comprobado 03-11-2026. Asesoramiento, evaluación y funciones de decisión en el modelo descrito; no se impone autoridad única o reunión para cada cambio. · comprobado: 2026-11-03
- [Atlassian: IT Change Management Best Practices](https://www.atlassian.com/itsm/change-management/best-practices) · §4 Make your CAB more strategic: riesgo, revisión por pares y automatización en cambios menos arriesgados · versión: Guía pública comprobada 03-11-2026. Proporcionalidad del gobierno; ejemplos y porcentajes comerciales no se convierten en requisitos generales. · comprobado: 2026-11-03
- [Atlassian: Types of change management for ITSM teams](https://www.atlassian.com/itsm/change-management/types) · Standard changes; Normal changes; Emergency changes; How should you categorize changes? · versión: Texto público comprobado 03-11-2026. Riesgo, preautorización y urgencia; son prácticas de un proveedor, no lectura de manual ITIL de pago. Un parche no es necesariamente siempre emergencia. · comprobado: 2026-11-03

Partida: `3502af75a3195f9de62cdc56a38bf5f610bd864e37c17b014bba6faf8d7d01da` · propuesta: `bdbf04fbf2a97f08c8c1c92657ccd0c1128a5f0d585470164e266eb97d4e96fe`

## AI-GSI-B4-T04-009

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación de puntos de entrega y clave A; hacer explícito el contexto y separar identificación de certificación o despliegue.

### Antes

¿Para qué sirven tags o releases en el contexto descrito?

- A. Identificar puntos desplegables **(correcta)**
- B. Garantizar ausencia de defectos
- C. Asignar direcciones IP
- D. Eliminar requisitos

Explicación: Identificar una versión ayuda a trazabilidad sin validar por sí mismo su calidad.

### Propuesta

En el versionado de artefactos destinados al despliegue, ¿qué aportan tags y releases?

- A. Identificar revisiones y entregas para poder trazarlas. **(correcta)**
- B. Verificar compatibilidad funcional por el nombre de versión.
- C. Sincronizar el estado desplegado con el punto etiquetado.
- D. Autorizar la promoción por el mero hecho de etiquetar.

Explicación: Los tags marcan puntos del historial y las releases pueden asociar entregas, notas y artefactos a esos puntos. Ayudan a identificar qué versión se propone distribuir o desplegar. El nombre no demuestra pruebas, autorización o despliegue efectivo; la trazabilidad exige relacionar la revisión con el artefacto y el entorno correspondiente.

- Error B: Asignar un nombre no ejecuta pruebas de compatibilidad ni acredita su resultado.
- Error C: Crear una referencia no modifica automáticamente lo que está ejecutándose en un entorno.
- Error D: Una etiqueta no sustituye los criterios y autorizaciones para promover una versión.

- [Pro Git: Git Basics, Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) · §2.6 Tagging: puntos de historial; Annotated Tags y Lightweight Tags · versión: Libro Pro Git, segunda edición web comprobada 03-11-2026. Una etiqueta identifica una revisión; no certifica pruebas, aprobación, despliegue o inmutabilidad frente a un cambio autorizado de referencia. · comprobado: 2026-11-03
- [GitHub: About releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) · About releases: versiones empaquetables, notas, binarios y relación con Git tags · versión: Documentación pública comprobada 03-11-2026. Ejemplo de entregas basado en tags; tag y release pueden tener fechas diferentes y no demuestran que producción ejecute esa versión. · comprobado: 2026-11-03

Partida: `71497c7a274fc1b4630abf427d522f38d8998b95471f561169080e13fb8f05a1` · propuesta: `cf41f06bef398539fad0de04228974a053b0751acff8c7fab7d839c453ab4892`

## AI-GSI-B4-T04-010

Decisión: pending_review · acción: revise.

Motivo: Conservar estado frente a pasos y clave B; distinguir el enfoque de formato, idempotencia y automatización.

### Antes

¿Qué distingue automatización declarativa e imperativa?

- A. Ambas son tipos de memoria
- B. Declarativa expresa estado objetivo; imperativa expresa pasos **(correcta)**
- C. Imperativa no puede automatizar
- D. Declarativa carece de estado

Explicación: La diferencia es cómo se expresa la intención de configuración.

### Propuesta

¿Qué distingue automatización declarativa e imperativa?

- A. Declarativa detalla operaciones; imperativa define el estado.
- B. Declarativa indica estado objetivo; imperativa expresa operaciones. **(correcta)**
- C. Declarativa presupone idempotencia; imperativa impide obtenerla.
- D. Declarativa obliga a usar YAML; imperativa obliga a usar JSON.

Explicación: La distinción está en cómo se expresa la intención: estado que se desea frente a operaciones que se deben realizar. Una herramienta declarativa delega el cómo en recursos o controladores. Ambos enfoques pueden automatizarse; ni el formato de archivo ni la etiqueta del enfoque bastan para demostrar idempotencia, seguridad o corrección.

- Error A: Invierte los papeles: las operaciones explícitas caracterizan la expresión imperativa.
- Error C: La idempotencia es una propiedad del comportamiento; puede diseñarse en operaciones imperativas y no se acredita por el nombre del enfoque.
- Error D: YAML y JSON son formatos de representación; no determinan por sí solos si la gestión es declarativa o imperativa.

- [Microsoft: DSC configuration documents](https://learn.microsoft.com/en-us/powershell/dsc/concepts/configuration-documents/overview?view=dsc-3.0) · Introducción: describir qué estado se desea; recursos que implementan cómo; Getting, Testing y Enforcing a configuration · versión: Vista DSC3.0, texto público comprobado 03-11-2026. Estado frente a operaciones; un formato YAML/JSON o la etiqueta declarativa no garantizan por sí solos corrección, idempotencia o seguridad. · comprobado: 2026-11-03
- [Kubernetes: Kubernetes Object Management](https://kubernetes.io/docs/concepts/overview/working-with-objects/object-management/) · Management techniques; Imperative commands; Imperative object configuration; Declarative object configuration · versión: Página pública comprobada 03-11-2026, última modificación indicada 08-01-2022. Se usa el contraste entre operaciones explícitas y estado, sin inferir la versión de servidor desplegada del menú de navegación. · comprobado: 2026-11-03

Partida: `fc8c9ade0c0054130d3bb9e3ed72af3411766a8bd42f187c998472bd2d821d49` · propuesta: `bd221b8f2fc4ec5494e9f70934939c00202844bf2b4822541460f2a61102eeca`

## AI-GSI-B4-T04-011

Decisión: pending_review · acción: revise.

Motivo: Conservar manejo de errores y mínimo privilegio, clave C; distractores sobre decisiones operativas reales sin ejecutar scripts.

### Antes

¿Qué requisito debe incorporar un script operativo seguro?

- A. Ausencia de logs
- B. Ejecución administrativa universal
- C. Manejo de errores y límites de privilegio **(correcta)**
- D. Credenciales incrustadas

Explicación: La automatización necesita controles y observabilidad, además de ejecutar pasos.

### Propuesta

¿Qué requisito debe incorporar un script operativo seguro?

- A. Reintentar cualquier fallo hasta obtener una ejecución satisfactoria.
- B. Conceder una cuenta global para evitar diferencias entre entornos.
- C. Tratar fallos explícitamente y usar privilegios ajustados a la tarea. **(correcta)**
- D. Incluir credenciales en el archivo para reproducir todas las ejecuciones.

Explicación: Un script operativo necesita detectar y tratar fallos, comunicar su resultado y limitar los permisos a lo necesario. El tratamiento depende del error; puede detener, recuperar o reintentar de forma acotada. Ocultar el fallo o ejecutar con privilegio global no vuelve segura una automatización. Las credenciales deben gestionarse fuera del código y protegerse según el entorno.

- Error A: Un reintento indiscriminado puede repetir efectos, agravar la carga o no resolver un fallo permanente.
- Error B: Una cuenta global amplía el impacto de un error; no sustituye identificar permisos y dependencias de cada tarea.
- Error D: Incrustar credenciales facilita su exposición y dificulta rotarlas; reproducibilidad no exige guardar secretos en el script.

- [Microsoft: about\_Try\_Catch\_Finally](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_try_catch_finally?view=powershell-7.5) · Short/Long description; uso de catch para responder a errores y finally para liberar recursos · versión: Vista PowerShell7.5 comprobada 03-11-2026. El ejemplo trata errores terminantes; no se afirma que try/catch atrape todo error sin configurar tratamiento o que ignorarlo produzca éxito. · comprobado: 2026-11-03
- [GSA: Privileged Identity Playbook](https://www.idmanagement.gov/playbooks/pam/) · Privileged Identity Management; AppendixC, Least Privilege AC-6: procesos y niveles de privilegio necesarios · versión: Versión1.2 de29-12-2022, texto HTML comprobado de nuevo 03-11-2026. Mínimo privilegio también en procesos; no se atribuye lectura del PDF NIST ni vigencia jurídica en la AGE. · comprobado: 2026-11-03

Partida: `f79d0b3eb81c18f851162270a5fdc81baf83f80a40fc6809d5cfc293746a364a` · propuesta: `ecd77505975744d3961d9d6a054b190b8d86403764840524653dd40041915a6e`

## AI-GSI-B4-T04-012

Decisión: pending_review · acción: revise.

Motivo: Conservar indicador medido y clave A; distractores SLO, SLA y presupuesto de error de la misma familia conceptual.

### Antes

¿Qué es un SLI?

- A. Un indicador medido del servicio **(correcta)**
- B. Una lista de servidores
- C. Un objetivo sin medida
- D. Un compromiso contractual con penalización siempre

Explicación: SLI mide; SLO fija objetivo y SLA formaliza compromiso.

### Propuesta

¿Qué es un SLI?

- A. Una medida cuantitativa del nivel de servicio proporcionado. **(correcta)**
- B. Un umbral deseado sobre esa medida en una ventana definida.
- C. Un acuerdo que fija condiciones y consecuencias del servicio.
- D. Un presupuesto de incumplimiento derivado del objetivo.

Explicación: Un SLI mide un aspecto del servicio prestado, como una proporción de solicitudes satisfactorias o una latencia agregada. Debe definirse cómo se calcula. Se distingue del valor objetivo, del acuerdo sobre el servicio y del margen de error permitido.

- Error B: El valor que se quiere alcanzar corresponde al SLO, no al indicador observado.
- Error C: Las condiciones y consecuencias pactadas corresponden al SLA.
- Error D: El presupuesto de error deriva de un objetivo; no es el indicador con el que se observa el servicio.

- [Google SRE: Service Level Objectives](https://sre.google/sre-book/service-level-objectives/) · Capítulo4: Indicators; Objectives; Agreements · versión: Libro SRE, texto público comprobado 03-11-2026. SLI medido, SLO objetivo y SLA acuerdo con consecuencias; estas no tienen que ser monetarias. No se afirma que todo SLO sea secreto o necesariamente interno. · comprobado: 2026-11-03

Partida: `caaa268b8647fdfaedd378bf0b2b5d82eb01593d9186ebd436236f373cf12afc` · propuesta: `e679c85a9357dae79d978a3032fb993a221e5019bcedcea6aa85bea913ff88cb`

## AI-GSI-B4-T04-013

Decisión: pending_review · acción: revise.

Motivo: Conservar objetivo del servicio y clave A; evitar que interno sea condición universal de SLO.

### Antes

¿Qué es un SLO?

- A. Un objetivo operativo o interno del servicio **(correcta)**
- B. Una copia del sistema
- C. Un dato observado sin objetivo
- D. Un incidente abierto

Explicación: SLO expresa el nivel deseado sobre indicadores definidos.

### Propuesta

¿Qué es un SLO?

- A. Un valor o rango objetivo definido sobre un indicador del servicio. **(correcta)**
- B. Una medida observada, agregada durante un periodo concreto.
- C. Un acuerdo con consecuencias pactadas al incumplir el servicio.
- D. Un margen de incumplimiento calculado a partir de un objetivo.

Explicación: Un SLO fija el valor o rango que se pretende alcanzar sobre un SLI, con las condiciones de medición pertinentes. Puede guiar decisiones operativas y publicarse; no se define por mantenerse exclusivamente interno. Medida, objetivo, acuerdo y presupuesto de error desempeñan papeles distintos.

- Error B: Describe un SLI observado, sin indicar el nivel que se desea conseguir.
- Error C: Añadir consecuencias pactadas caracteriza el acuerdo de servicio o SLA.
- Error D: El margen tolerado es un presupuesto derivado del objetivo, no su definición.

- [Google SRE: Service Level Objectives](https://sre.google/sre-book/service-level-objectives/) · Capítulo4: Indicators; Objectives; Agreements · versión: Libro SRE, texto público comprobado 03-11-2026. SLI medido, SLO objetivo y SLA acuerdo con consecuencias; estas no tienen que ser monetarias. No se afirma que todo SLO sea secreto o necesariamente interno. · comprobado: 2026-11-03

Partida: `f50f4e18d9630ec749c4e95bf4b85c5a39245a4e7edc9b5584f0aaa4024ee5ce` · propuesta: `614ec8570d7795cc3252766393435eb1ef3945f508adfcf5e847f04508bf4997`

## AI-GSI-B4-T04-014

Decisión: pending_review · acción: revise.

Motivo: Conservar acuerdo con consecuencias y clave A; distractores próximos sin exigir penalización monetaria universal.

### Antes

¿Qué distingue un SLA?

- A. Compromiso formal con condiciones y consecuencias definidas **(correcta)**
- B. Solo una métrica instantánea
- C. Un fichero de configuración
- D. Un objetivo interno sin compromiso siempre

Explicación: SLA formaliza servicio; no equivale al indicador que se mide.

### Propuesta

¿Qué distingue un SLA?

- A. Un acuerdo de servicio con condiciones y consecuencias definidas. **(correcta)**
- B. Una medida cuantitativa obtenida observando el servicio.
- C. Un valor objetivo elegido para un indicador del servicio.
- D. Un margen de error operativo derivado de un objetivo.

Explicación: El SLA formaliza un acuerdo sobre el servicio y las consecuencias previstas. Estas pueden adoptar formas distintas de una penalización económica. El indicador permite medir y el objetivo permite evaluar el nivel; ninguno constituye por sí mismo el acuerdo.

- Error B: Una medida es un SLI; no expresa por sí sola lo pactado entre las partes.
- Error C: Un objetivo es un SLO y puede existir sin las consecuencias de un SLA.
- Error D: El presupuesto de error orienta la gestión del objetivo, pero no sustituye las condiciones del acuerdo.

- [Google SRE: Service Level Objectives](https://sre.google/sre-book/service-level-objectives/) · Capítulo4: Indicators; Objectives; Agreements · versión: Libro SRE, texto público comprobado 03-11-2026. SLI medido, SLO objetivo y SLA acuerdo con consecuencias; estas no tienen que ser monetarias. No se afirma que todo SLO sea secreto o necesariamente interno. · comprobado: 2026-11-03

Partida: `38d020e74c8ef3b020fe552a7d51393cb47f647fc8468c760c5f930db840f4b1` · propuesta: `bf91ae3127410b021871248f1154f9f1029bf0594b9acdfc8eb9991390dc9bf8`

## AI-GSI-B4-T04-015

Decisión: pending_review · acción: revise.

Motivo: Conservar alerta accionable y clave C; caso orientado al usuario sin descartar toda alerta preventiva o métrica interna.

### Antes

¿Qué alerta suele ser más accionable?

- A. Toda métrica por debajo del máximo
- B. Cada línea de log sin filtrar
- C. La vinculada a impacto del usuario y una respuesta definida **(correcta)**
- D. Cualquier fluctuación interna sin contexto

Explicación: Alertar sobre síntomas y objetivos reduce ruido y orienta actuación.

### Propuesta

Se diseña el aviso de guardia para un servicio que falla al confirmar trámites. ¿Qué señal, con su respuesta, se vincula mejor al impacto observado?

- A. CPU media del clúster al sesenta por ciento, con instrucción de ampliar instancias.
- B. Volumen total de logs mayor que ayer, con instrucción de rotar los archivos.
- C. Fallos sostenidos al confirmar trámites, con responsable y respuesta ensayada. **(correcta)**
- D. Variación de latencia de caché dentro de su rango, con revisión del subsistema.

Explicación: El aviso elegido vincula un síntoma relevante para usuarios con un criterio y una respuesta preparada. Eso facilita actuar. Una métrica interna puede aportar diagnóstico o advertir un riesgo, pero necesita contexto; una fluctuación o un porcentaje aislado no justifican por sí solos interrumpir a la guardia.

- Error A: El porcentaje no demuestra por sí mismo saturación o una acción necesaria; debe interpretarse en su contexto.
- Error B: Más tráfico puede producir más logs sin un fallo; hay que distinguir volumen, gravedad y señal útil.
- Error D: Una variación dentro del objetivo y sin degradación descrita no demuestra una necesidad de intervención inmediata.

- [Google SRE: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) · Capítulo6: Why Monitor?; Symptoms Versus Causes; Black-Box Versus White-Box; The Four Golden Signals, Saturation · versión: Libro SRE, texto público comprobado 03-11-2026. Señal accionable e impacto, latencia y recursos; no se adopta un umbral universal de CPU o se descartan todas las alertas preventivas. · comprobado: 2026-11-03

Partida: `55c5db1a717c1d5597332d0bd8348447ee9e79bbe7e4e9cfeb0b07608b3e1b55` · propuesta: `508eb943906982fdda9fcc9f42a51e937fa7e0b4628dbf6202e26d05f74da081`

## AI-GSI-B4-T04-016

Decisión: pending_review · acción: revise.

Motivo: Conservar caso de CPU baja y clave C; investigar recursos y esperas sin diagnosticar automáticamente un disco concreto.

### Antes

Un sistema lento usa poca CPU. ¿Qué debe investigarse?

- A. Cambiar obligatoriamente procesador
- B. Concluir que no hay degradación
- C. Almacenamiento, esperas y dependencias además de CPU **(correcta)**
- D. Ignorar latencia

Explicación: La CPU no resume toda la cadena de servicio.

### Propuesta

Un sistema lento usa poca CPU. ¿Qué debe investigarse?

- A. Priorizar ampliar CPU, tomando la lentitud como prueba de falta de cómputo.
- B. Dar por descartada la degradación al estar baja la utilización media de CPU.
- C. Medir E/S, esperas y dependencias, además de desglosar la utilización de CPU. **(correcta)**
- D. Aumentar el timeout para considerar resuelta la causa de la demora observada.

Explicación: Una media baja de CPU no explica toda la latencia. Conviene desglosar la carga y examinar almacenamiento, esperas y dependencias antes de atribuir la causa o ampliar recursos. Una dependencia lenta puede mantener al proceso esperando. Medir permite contrastar hipótesis; encontrar correlación no demuestra por sí solo causalidad.

- Error A: La lentitud no prueba falta de capacidad de CPU; ampliar cómputo puede dejar intacto el cuello de botella.
- Error B: La utilización media no acredita que usuarios o dependencias estén funcionando con la latencia requerida.
- Error D: Cambiar el timeout altera cuánto se espera antes de fallar, pero no elimina la causa de la demora.

- [Google SRE: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) · Capítulo6: Why Monitor?; Symptoms Versus Causes; Black-Box Versus White-Box; The Four Golden Signals, Saturation · versión: Libro SRE, texto público comprobado 03-11-2026. Señal accionable e impacto, latencia y recursos; no se adopta un umbral universal de CPU o se descartan todas las alertas preventivas. · comprobado: 2026-11-03
- [Google SRE: Handling Overload](https://sre.google/sre-book/handling-overload/) · Capítulo21: The Pitfalls of Queries per Second, recursos y casos que exigen considerarlos por separado · versión: Libro SRE, texto público comprobado 03-11-2026. CPU es útil en muchos casos, no en todos; ni QPS ni media de CPU describen toda limitación de capacidad. · comprobado: 2026-11-03

Partida: `38d2e61911af355ae283dc54d30d4333396b7a4a55564c3f923a361cf4a4e8b2` · propuesta: `f6afbc315bbd6c6da1cc016785730bbd2aecee98cfd812a4014424b745d44bc4`

## AI-GSI-B4-T04-017

Decisión: pending_review · acción: revise.

Motivo: Conservar crecimiento de colas y clave C; explicitar tasas y ausencia de descarte para evitar una ley incondicional por porcentaje de uso.

### Antes

¿Qué suele suceder con colas al acercarse a saturación?

- A. Se convierten en backups
- B. Garantizan latencia constante
- C. Crecen **(correcta)**
- D. Desaparecen por definición

Explicación: Las colas aportan señales de saturación y deben correlacionarse con demanda.

### Propuesta

La tasa media de llegada supera de forma sostenida la de servicio, sin descartes ni más capacidad. ¿Qué tendencia tiene la cola mientras admita nuevas peticiones?

- A. Disminuye por el hecho de aceptar trabajo nuevo.
- B. Se estabiliza por sí sola al aumentar la espera.
- C. Acumula trabajo y aumenta el tiempo de espera. **(correcta)**
- D. Vacía el trabajo pendiente al llegar a saturación.

Explicación: Si entran más peticiones de las que se terminan, el trabajo pendiente crece mientras haya espacio para admitirlo. La espera aumenta. Las colas finitas pueden llegar a rechazar o expirar trabajo, y el control de admisión o más capacidad pueden cambiar la evolución. Por eso se explicitan las condiciones, sin afirmar crecimiento infinito para cualquier sistema.

- Error A: Aceptar más trabajo sin capacidad de salida suficiente aumenta el pendiente, no lo reduce.
- Error B: Esperar más no eleva por sí mismo la tasa de servicio hasta compensar las llegadas.
- Error D: Saturarse no vacía la cola; sin descartes o capacidad adicional persiste el trabajo pendiente.

- [Microsoft: Queue-Based Load Leveling pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling) · Problems and considerations: tasa media del productor mayor que la del consumidor; crecimiento de cola, latencia y límites · versión: Texto público comprobado 03-11-2026. Se explicitan condiciones del balance entrada/salida; colas limitadas pueden rechazar o expirar trabajo, por lo que no se promete crecimiento infinito. · comprobado: 2026-11-03

Partida: `8038b8465ee3420f826c77bef9cf1cd7f287a6716d1a4580342bb3ef01be54a9` · propuesta: `e9009939bb54499756c304178f77b3524de1369c087b6bd0414c904abc95a445`

## AI-GSI-B4-T04-019

Decisión: pending_review · acción: revise.

Motivo: Conservar complementariedad de capacidad y autoscaling, clave C; reemplazar sí/no evidentes por afirmaciones técnicas plausibles.

### Antes

Autoscaling sustituye por completo la planificación de capacidad…

- A. Sí, crea recursos infinitos
- B. Sí, elimina dependencias externas
- C. No, necesita límites y previsión de recursos **(correcta)**
- D. Sí, garantiza coste cero

Explicación: El ajuste automático opera dentro de restricciones y no elimina planificación.

### Propuesta

¿Qué afirmación describe la relación entre autoscaling y planificación de capacidad?

- A. El máximo de instancias elegido ya demuestra que podrá atenderse el pico.
- B. Las dependencias heredan automáticamente la capacidad de cómputo añadida.
- C. Se complementan: deben preverse límites, dependencias y tiempo de provisión. **(correcta)**
- D. Un umbral de CPU permite omitir previsiones sobre demanda y costes.

Explicación: El autoscaling ajusta recursos según reglas o señales, dentro de límites y con un tiempo de provisión. La planificación prevé demanda, margen, costes y capacidad de dependencias. Configurar un máximo no demuestra capacidad suficiente ni que bases de datos o cuotas crezcan a la vez. Las pruebas permiten comprobar el efecto sobre el servicio.

- Error A: El máximo es un límite configurado, no evidencia de que el conjunto soporte el pico.
- Error B: Cada dependencia tiene sus propios límites y mecanismos; ampliar instancias no amplía todo el recorrido automáticamente.
- Error D: CPU puede ser una señal útil, pero no sustituye previsiones de demanda, otros recursos o costes.

- [Microsoft: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) · Autoscaling components; Considerations for using autoscaling: máximo, cuotas, dependencias, tiempo de provisión, headroom y pruebas · versión: Texto público comprobado 03-11-2026. Ajuste condicionado por límites y carga, no capacidad infinita, coste cero o garantía de SLO por un máximo configurado. · comprobado: 2026-11-03
- [Microsoft: Queue-Based Load Leveling pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling) · Problems and considerations: tasa media del productor mayor que la del consumidor; crecimiento de cola, latencia y límites · versión: Texto público comprobado 03-11-2026. Se explicitan condiciones del balance entrada/salida; colas limitadas pueden rechazar o expirar trabajo, por lo que no se promete crecimiento infinito. · comprobado: 2026-11-03

Partida: `38cab6837cd1a68a5f78c8026545b3632e34a5ffcec9b46b07e9fa99099cca42` · propuesta: `ba281f07226604f616d2f15c73b201f373ef5f75e61049a7cbe287bcefebd995`

## AI-GSI-B4-T05-001

Decisión: pending_review · acción: revise.

Motivo: Conservar NVMe y clave C; distractores de almacenamiento y transporte local explícito para no excluir NVMe sobre fabrics.

### Antes

¿Qué tecnología usa PCIe y colas adaptadas a memoria no volátil?

- A. VoiceXML
- B. DTMF
- C. NVMe **(correcta)**
- D. SMTP

Explicación: NVMe reduce limitaciones de acceso a almacenamiento de baja latencia.

### Propuesta

¿Qué interfaz de almacenamiento está diseñada para memoria no volátil, con múltiples colas y transporte local sobre PCIe?

- A. AHCI sobre SATA.
- B. SCSI sobre SAS.
- C. NVMe sobre PCIe. **(correcta)**
- D. USB Mass Storage.

Explicación: NVMe fue diseñado para almacenamiento no volátil y utiliza colas de envío y finalización que permiten paralelismo. En el transporte local preguntado opera sobre PCIe. Existen también transportes NVMe sobre fabrics; por ello no se afirma que todo NVMe use un bus PCIe local. La interfaz no garantiza una latencia concreta para cualquier carga.

- Error A: AHCI está asociado a controladoras SATA; no es la interfaz NVMe sobre PCIe descrita.
- Error B: SAS transporta comandos SCSI; puede usar SSD, pero no identifica el protocolo NVMe preguntado.
- Error D: USB Mass Storage es otra clase de acceso a dispositivos de almacenamiento, no NVMe sobre PCIe.

- [NVM Express: NVMe over PCIe Transport Specification](https://nvmexpress.org/specification/nvme-over-pcie-transport-specification/) · What is the NVMe over PCIe Transport specification?; distinción de transportes PCIe, RDMA y TCP · versión: Página introductoria del organismo comprobada 03-11-2026. Lista revisión PCIe1.4 ratificada 31-07-2026 y Base2.4; se lee HTML, no el texto íntegro de esas especificaciones enlazadas. · comprobado: 2026-11-03
- [NVM Express: Base NVM Express, Part One](https://nvmexpress.org/base-nvm-express-part-one/) · Base NVM Express Architectural Overview: interfaz PCIe; colas de Submission/Completion y operaciones paralelas · versión: Explicación de Murali Rajagopal alojada por NVM Express, comprobada 03-11-2026. Arquitectura básica; cifras de dispositivos citadas son históricas y no se presentan como límites actuales de todo controlador. · comprobado: 2026-11-03

Partida: `70ee6350714f06643094a8362f2b0da182ec2477366a9cb1aba70547ba1f55f3` · propuesta: `486ef7f9ad2ddc5a8e25a4dc6c5efe7d98edad8537f2d7ea74ad99b8b7a7cb42`

## AI-GSI-B4-T05-002

Decisión: pending_review · acción: revise.

Motivo: Conservar utilidad económica y aislamiento de cinta, clave C; alternativas de cargas de almacenamiento sin precios o garantías universales.

### Antes

¿Por qué la cinta mantiene utilidad en copia o archivo?

- A. Obligación de permanecer siempre conectada
- B. Ausencia de necesidad de restaurar
- C. Coste y posibilidad de aislamiento **(correcta)**
- D. Latencia siempre menor que RAM

Explicación: La cinta puede aportar capacidad y separación, con compromisos de acceso.

### Propuesta

¿Por qué la cinta mantiene utilidad en copia o archivo?

- A. Acceso aleatorio de baja latencia para transacciones interactivas.
- B. Disponibilidad inmediata en línea sin montar o localizar un volumen.
- C. Retención de gran volumen con coste favorable y aislamiento físico. **(correcta)**
- D. Actualización frecuente in situ para cargas de escritura aleatoria.

Explicación: La cinta puede ser adecuada para grandes volúmenes retenidos durante mucho tiempo y permitir aislamiento al retirar los volúmenes del entorno de producción. Hay compromisos de acceso, localización, montaje y recuperación. Su conveniencia depende del coste total y de los objetivos; una cinta en una biblioteca conectada no está necesariamente aislada.

- Error A: El acceso aleatorio de baja latencia caracteriza otras necesidades; no es la ventaja principal de la cinta para retención.
- Error B: Retirar y aislar volúmenes exige recuperarlos y montarlos cuando se necesiten; no garantiza acceso inmediato en línea.
- Error D: La actualización aleatoria frecuente no es la ventaja por la que se elige cinta para copia o archivo.

- [IBM: Choosing retention to tape or tiering to tape](https://www.ibm.com/docs/en/storage-protect/8.2.1?topic=storage-choosing-retention-tape-tiering-tape) · Introducción; Copying retention sets to tape; Tiering retention set data to tape · versión: IBM Storage Protect8.2.1, texto público comprobado 03-11-2026. Retención y posible aislamiento al retirar volúmenes; no todo uso de cinta está offline ni su coste total es siempre menor. · comprobado: 2026-11-03

Partida: `f0edd029d19eebe047610a6cc862c72f2e41a4ae2ba0e3e92a1b81f65f968768` · propuesta: `818318981acf03a36c95473c6bb2833c3d3945820a78df7fc5621282cefc864f`

## AI-GSI-B4-T05-006

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y cuatro opciones: pregunta precisa con distractores del mismo concepto. Ampliar explicaciones y respaldo, clave C.

### Antes

¿Qué nivel RAID aporta striping sin redundancia?

- A. RAID 1
- B. RAID 5
- C. RAID 0 **(correcta)**
- D. RAID 6

Explicación: RAID 0 distribuye datos, pero no tolera fallos mediante redundancia.

### Propuesta

¿Qué nivel RAID aporta striping sin redundancia?

- A. RAID 1
- B. RAID 5
- C. RAID 0 **(correcta)**
- D. RAID 6

Explicación: RAID 0 reparte datos en bandas entre sus miembros sin mantener espejo o paridad que permita reconstruirlos por redundancia. Se conserva la formulación porque identifica de forma precisa esa propiedad y compara niveles RAID reales. No debe atribuirse tolerancia a fallos al conjunto por el mero hecho de usar varios discos.

- Error A: RAID 1 mantiene copias en espejo; aporta redundancia y no es el striping sin protección preguntado.
- Error B: RAID 5 distribuye datos y paridad, por lo que incluye redundancia.
- Error D: RAID 6 añade protección con doble paridad; tampoco es un reparto sin redundancia.

- [Red Hat: Managing RAID](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/managing_storage_devices/managing-raid) · §16.3 RAID levels and linear support: Level0, Level1, Level5 y Level6 · versión: Guía RHEL10 comprobada 03-11-2026. Striping, espejo y paridad; no se ejecutan comandos destructivos o se generalizan sus recomendaciones de rendimiento a todo equipo. · comprobado: 2026-11-03

Partida: `dc6dd9f3339882567e87732ae6def4ae656c334f1fde5fa41d3b0df6b581b04b` · propuesta: `a0a3ad7118da24a30061e243dced3379efefcbf58ba67ad687f0f3870120fda4`
