# GSI-EDITORIAL-058 — revisión propuesta

Preparado: 2026-10-29. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `28c8693ae81360a5f0b640b56220f4ac03da55c560b98a458101593e9488f0dc`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T08-009

Decisión: pending_review · acción: revise.

Motivo: Conservar ventaja/riesgo de big bang y claveC; distinguir tiempo de conmutación de duración total, sin prometer ausencia de toda coexistencia técnica.

### Antes

¿Qué ventaja y riesgo tiene la sustitución directa o big bang?

- A. Aprendizaje limitado sin cambiar producción nunca
- B. Doble operación permanente como ventaja principal
- C. Rapidez sin coexistencia, con riesgo elevado y rollback crítico **(correcta)**
- D. Ausencia de riesgo por definición

Explicación: La conmutación concentrada simplifica coexistencia, pero aumenta impacto potencial.

### Propuesta

¿Qué ventaja y riesgo tiene la sustitución directa o big bang?

- A. Aprendizaje en un ámbito piloto, con dudas sobre su representatividad.
- B. Comparación continuada de ambos sistemas, con coste de doble operación.
- C. Cambio concentrado sin coexistencia prolongada, con impacto amplio si falla. **(correcta)**
- D. Despliegue escalonado por módulos, con interfaces entre etapas.

Explicación: El big bang concentra la sustitución funcional para el ámbito previsto. Reduce la coexistencia prolongada, pero un fallo puede afectar a muchos usuarios a la vez y dificultar el retorno. Requiere preparar continuidad y reversión. Una implantación concentrada no garantiza que el proyecto completo dure menos ni que el rollback sea sencillo.

- Error A: El aprendizaje en un ámbito limitado caracteriza el piloto; no describe la sustitución concentrada de todo el ámbito previsto.
- Error B: Comparar mientras funcionan ambos sistemas describe la estrategia paralela y su coste adicional.
- Error D: Escalonar por módulos con interfaces temporales corresponde a sustitución por fases.

- [Microsoft Learn: Plan your solution deployment and release](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/implementation-strategy-define-strategy-deployment-release) · Big bang; Phased rollout; Parallel rollout: alcance, coexistencia, interfaces temporales, costes y riesgos · versión: Página de Dynamics365 actualizada 18-01-2024 según pie, leída el 29-10-2026. Ejemplo metodológico, sin afirmar duración o riesgo universales · comprobado: 2026-10-29

Partida: `a70b5420ea37a15ca3306ab400f22936455965a07570e762ed321f640aa7ee86` · propuesta: `0068a877ee937fbd754e06fe5f2c4f7294093d1a7dd5760749f2a91bc2a5c9a0`

## AI-GSI-B3-T08-010

Decisión: pending_review · acción: revise.

Motivo: Conservar coste del paralelismo y claveD; alternativas próximas entre estrategias y comparación con datos equivalentes.

### Antes

¿Qué coste caracteriza a una sustitución paralela?

- A. Ausencia de respaldo
- B. Eliminación de toda coexistencia
- C. Imposibilidad de comparar resultados
- D. Doble operación y necesidad de sincronización **(correcta)**

Explicación: El paralelismo facilita contraste, a costa de operación duplicada y coherencia.

### Propuesta

¿Qué coste caracteriza a una sustitución paralela?

- A. Coordinar interfaces entre módulos que se sustituyen en etapas sucesivas.
- B. Concentrar la incorporación de todos los usuarios en una única fecha.
- C. Seleccionar un grupo piloto que represente las condiciones de uso.
- D. Operar ambos sistemas y mantener coherentes sus datos comparables. **(correcta)**

Explicación: La sustitución paralela mantiene operativos el sistema anterior y el nuevo durante un período. Comparar resultados exige datos equivalentes y gestionar su sincronización, además del esfuerzo de operar dos sistemas. Deben controlarse efectos duplicados y un criterio de salida. La comparación no elimina la necesidad de pruebas ni demuestra por sí sola cuál de los resultados es correcto.

- Error A: Las interfaces entre módulos que cambian en etapas describen especialmente la sustitución por fases, no el coste característico de doble operación.
- Error B: Una fecha común para todos caracteriza el big bang; no explica operar ambos sistemas a la vez.
- Error C: Elegir un ámbito representativo es propio del piloto y no explica la sincronización de dos sistemas paralelos.

- [Microsoft Learn: Plan your solution deployment and release](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/implementation-strategy-define-strategy-deployment-release) · Big bang; Phased rollout; Parallel rollout: alcance, coexistencia, interfaces temporales, costes y riesgos · versión: Página de Dynamics365 actualizada 18-01-2024 según pie, leída el 29-10-2026. Ejemplo metodológico, sin afirmar duración o riesgo universales · comprobado: 2026-10-29
- [AWS Prescriptive Guidance: Pre-cutover stage](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/pre-cutover-stage.html) · Developing a cutover plan; Creating a cutover runbook: dependencias, duración, responsables, orden, ensayos y contingencias · versión: Ruta latest leída el 29-10-2026. Planificación orientativa, sin ejecutar infraestructura o exigir pasos de un proveedor en todo proyecto · comprobado: 2026-10-29

Partida: `47191dd3887eccb57d03e6a500221eeee835f981dad08c4f1993ab480c55045b` · propuesta: `0e05425e448cd2567b8729ddf77967e71f75ae8ec61be31da53bcbf4894722dc`

## AI-GSI-B3-T08-011

Decisión: pending_review · acción: revise.

Motivo: Conservar representatividad y escalado, claveA; caso de selección que distingue muestra fácil de evidencia pertinente.

### Antes

¿Qué debe vigilarse al elegir un piloto?

- A. Representatividad del ámbito y escalado posterior **(correcta)**
- B. Que nunca se evalúen usuarios
- C. Que no exista aprendizaje
- D. Que abarque obligatoriamente todo el sistema desde el inicio

Explicación: Un piloto limitado solo informa bien si representa riesgos y condiciones relevantes.

### Propuesta

Se sustituirá un servicio en varias sedes con usuarios y cargas diferentes. Antes se elige una sede piloto. ¿Qué debe guiar la selección y el uso de sus resultados?

- A. Representar condiciones relevantes y preparar cómo ampliar el despliegue. **(correcta)**
- B. Elegir el grupo con menor carga para inferir capacidad a escala completa.
- C. Limitarse a usuarios expertos para inferir facilidad de uso general.
- D. Igualar el volumen de operaciones para dar por representados los mismos riesgos.

Explicación: Un piloto aporta aprendizaje si el ámbito permite observar condiciones y riesgos relevantes: perfiles de usuario, procesos, datos e integraciones. El escalado debe planearse y validarse; un grupo fácil o pequeño no demuestra por sí solo capacidad o usabilidad para todos. Representatividad no significa incluir cada usuario ni sustituye pruebas específicas de carga.

- Error B: El éxito con baja carga no aporta evidencia suficiente sobre capacidad a escala completa.
- Error C: Solo expertos dejan fuera dificultades de otros perfiles y pueden sesgar las conclusiones de usabilidad.
- Error D: El mismo volumen puede corresponder a procesos, usuarios o integraciones diferentes; no demuestra igualdad de riesgos.

- [Microsoft Learn: Plan your solution deployment and release](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/implementation-strategy-define-strategy-deployment-release) · Big bang; Phased rollout; Parallel rollout: alcance, coexistencia, interfaces temporales, costes y riesgos · versión: Página de Dynamics365 actualizada 18-01-2024 según pie, leída el 29-10-2026. Ejemplo metodológico, sin afirmar duración o riesgo universales · comprobado: 2026-10-29
- [GOV.UK Service Manual: User research in beta](https://www.gov.uk/service-manual/user-research/user-research-in-beta) · How to do user research in beta; Who to research with; Typical user research activities · versión: Página pública leída el 29-10-2026, sin edición numerada indicada. Se usa diversidad pertinente y recorrido completo, sin convertir guía británica en obligación española · comprobado: 2026-10-29

Partida: `d5e28a7f28742872042df373895e90d123264b014d664cf26f1c89fad2fdac00` · propuesta: `fbae02c537e4701d0b99a1ac605d01fb7ac03a231ba17813e3a036444c8edb96`

## AI-GSI-B3-T08-012

Decisión: pending_review · acción: revise.

Motivo: Conservar coexistencia/interfaces y claveD; evitar afirmar que todo sistema por fases exige una tecnología concreta.

### Antes

¿Qué complejidad introduce sustituir por fases?

- A. Una única conmutación total obligatoria
- B. Imposibilidad de limitar impacto
- C. Ausencia absoluta de compatibilidad necesaria
- D. Interfaces temporales y coexistencia **(correcta)**

Explicación: La progresión reduce alcance de cada cambio, pero requiere convivencia temporal.

### Propuesta

¿Qué complejidad introduce sustituir por fases?

- A. Preparar una conmutación simultánea de todo el ámbito en una sola fecha.
- B. Duplicar cada operación en ambos sistemas durante todo el contraste.
- C. Seleccionar un ámbito reducido antes de decidir su ampliación al resto.
- D. Resolver interfaces y coherencia mientras conviven partes antiguas y nuevas. **(correcta)**

Explicación: Cuando se sustituyen módulos, unidades o sedes por fases, pueden coexistir partes antiguas y nuevas que siguen colaborando. Es necesario resolver compatibilidad, interfaces temporales y coherencia de datos. Se limita el alcance de cada paso, pero la convivencia y los sucesivos cambios añaden trabajo; no desaparece el riesgo.

- Error A: Una única conmutación simultánea de todo el ámbito describe big bang, no la complejidad de fases sucesivas.
- Error B: Duplicar cada operación para contrastar sistemas completos es propio del paralelo; no es obligatorio en todo despliegue por fases.
- Error C: Seleccionar primero un ámbito limitado describe un piloto; no explica la integración entre partes que conviven.

- [Microsoft Learn: Plan your solution deployment and release](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/implementation-strategy-define-strategy-deployment-release) · Big bang; Phased rollout; Parallel rollout: alcance, coexistencia, interfaces temporales, costes y riesgos · versión: Página de Dynamics365 actualizada 18-01-2024 según pie, leída el 29-10-2026. Ejemplo metodológico, sin afirmar duración o riesgo universales · comprobado: 2026-10-29

Partida: `52fa4c41ea62759394066de7ae3438d49e83b869cef4b1b6e7b9ad368bbaa460` · propuesta: `341ccd78c258ac2ace96d92ca4361582e9ee9bcb7970755e1a4844a71db7f4a1`

## AI-GSI-B3-T08-013

Decisión: pending_review · acción: revise.

Motivo: Conservar recepción más allá del ejecutable y claveB; hacer explícitos alcance pactado y evidencias, sin inventar obligaciones jurídicas generales.

### Antes

¿Qué debe incluir la recepción técnica además del software?

- A. Solo constancia de envío del ejecutable
- B. Documentación, licencias, formación y evidencias de pruebas **(correcta)**
- C. Una declaración del proveedor sin evidencias de aceptación
- D. Una demostración sin criterios contractuales

Explicación: La recepción comprueba entregables y condiciones contractuales con evidencia.

### Propuesta

Según los criterios contractuales aplicables, ¿qué debe comprobar y documentar la recepción técnica además de la entrega del software?

- A. El justificante de envío y el inventario, usados como prueba de conformidad.
- B. Los entregables y evidencias pactados: documentación, licencias, formación y pruebas. **(correcta)**
- C. La demostración del proveedor, usada en lugar de los criterios de aceptación.
- D. El acta de instalación, usada para dar por entregado el soporte contractual.

Explicación: La recepción técnica contrasta los entregables y evidencias con los criterios acordados. Además del software pueden incluirse documentación, licencias, formación y resultados de pruebas cuando lo exijan el contrato o el plan aplicable. Entregar, instalar o demostrar no acredita por sí solo conformidad de todo lo comprometido; la decisión debe quedar documentada.

- Error A: Envío e inventario acreditan aspectos de entrega, pero no verifican por sí solos el cumplimiento de los criterios pactados.
- Error C: Una demostración puede aportar evidencia, pero no sustituye criterios ni comprueba automáticamente todo su alcance.
- Error D: Instalación y soporte son compromisos distintos; un acta de instalación no demuestra haber entregado el soporte acordado.

- [NASA Software Engineering Handbook: SWE-034 Acceptance Criteria](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695413/SWE-034%2B-%2BAcceptance%2BCriteria) · Ver D, 3.1 definición; 3.3.1 alcance/documentación; 3.3.3 decisión; 3.3.5 criterios contractuales · versión: Handbook Ver D, requisito SWE-034/NPR7150.2D según página, leído el 29-10-2026. Referencia metodológica adaptada a criterios pactados; no norma de contratación española · comprobado: 2026-10-29

Partida: `0c7fd9baeb16d14280892597a50ed1e81cf0135348ac698d39a422a285b4167c` · propuesta: `4abba6878b53af06ed7b45c1ad84d990b98336741eb0f31669c144d2b3bf3c8a`

## AI-GSI-B3-T08-014

Decisión: pending_review · acción: revise.

Motivo: Conservar registro de defectos/condiciones y claveB; microcaso sin dar por autorizada una aceptación condicionada.

### Antes

Hay defectos pendientes en la recepción. ¿Qué debe quedar registrado?

- A. La afirmación de que todo defecto es irrelevante
- B. Lista de defectos y condiciones de aceptación pendientes **(correcta)**
- C. Borrado del historial
- D. Declaración de perfección sin evidencia

Explicación: La aceptación debe ser explícita respecto a incumplimientos y condiciones.

### Propuesta

En la recepción siguen abiertos defectos de distinta gravedad. ¿Qué registro permite fundamentar la decisión conforme a los criterios acordados?

- A. El número total de defectos, usado como único criterio para decidir la recepción.
- B. Los defectos, su impacto y la decisión con condiciones y pendientes acordados. **(correcta)**
- C. La fecha de entrega, usada para cerrar la recepción aunque falten comprobaciones.
- D. El éxito de la demostración, usado para dar por resueltas las incidencias abiertas.

Explicación: Los defectos pendientes deben quedar identificados con su impacto, tratamiento y condiciones de aceptación o rechazo según lo acordado. La decisión corresponde a quien esté autorizado y requiere evidencia. La aceptación condicionada solo procede si los criterios aplicables lo permiten; documentar un defecto no autoriza ignorarlo ni aceptar uno que impida cumplirlos.

- Error A: El número no refleja por sí solo gravedad, alcance o incumplimientos que puedan impedir la aceptación.
- Error C: Una fecha no acredita conformidad y no borra comprobaciones o condiciones pendientes.
- Error D: Una demostración satisfactoria no prueba que los defectos registrados se hayan corregido y verificado.

- [NASA Software Engineering Handbook: SWE-034 Acceptance Criteria](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695413/SWE-034%2B-%2BAcceptance%2BCriteria) · Ver D, 3.1 definición; 3.3.1 alcance/documentación; 3.3.3 decisión; 3.3.5 criterios contractuales · versión: Handbook Ver D, requisito SWE-034/NPR7150.2D según página, leído el 29-10-2026. Referencia metodológica adaptada a criterios pactados; no norma de contratación española · comprobado: 2026-10-29

Partida: `e7d554e1a6eb7fb9c94a2dd2ca1a9dce1c3901f4abb60d5dd125a38eadc23e1d` · propuesta: `c420bfcb4dcfe6c5aafa0d026df3456ebc108e95c68b102eefafc3ff34219c29`

## AI-GSI-B3-T08-015

Decisión: pending_review · acción: revise.

Motivo: Conservar operatividad de cutover y claveD; procedimiento concreto frente a artefactos parciales, sin receta universal.

### Antes

¿Qué hace operativo un plan de cutover?

- A. Un objetivo sin pasos
- B. Solo una fecha aproximada
- C. La ausencia de comunicación
- D. Secuencia temporal, responsables y decisión go/no-go **(correcta)**

Explicación: El plan coordina parada, migración, validación, arranque y decisiones.

### Propuesta

¿Qué hace operativo un plan de cutover?

- A. Un calendario que deja las dependencias para decidir durante el cambio.
- B. Un inventario que sustituye asignar tareas al identificar componentes.
- C. Un objetivo de servicio que reemplaza los criterios para decidir el retorno.
- D. Una secuencia que fija tiempos, responsables y criterios para continuar o revertir. **(correcta)**

Explicación: Un cutover operativo necesita tareas ordenadas con dependencias, duraciones y responsables, así como comprobaciones y criterios para continuar, detener o recuperar. Se ensaya y comunica antes del cambio. Un calendario o inventario ayuda, pero no basta como procedimiento. Los pasos concretos dependen del sistema y no siempre implican, por ejemplo, cambiar DNS.

- Error A: Los hitos no indican por sí solos cómo ejecutar, verificar o coordinar las tareas dependientes.
- Error B: Saber qué componentes existen no asigna quién hace cada paso ni cómo se coordinan.
- Error C: Un objetivo de disponibilidad no define cuándo decidir rollback o recuperación hacia delante.

- [AWS Prescriptive Guidance: Pre-cutover stage](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/pre-cutover-stage.html) · Developing a cutover plan; Creating a cutover runbook: dependencias, duración, responsables, orden, ensayos y contingencias · versión: Ruta latest leída el 29-10-2026. Planificación orientativa, sin ejecutar infraestructura o exigir pasos de un proveedor en todo proyecto · comprobado: 2026-10-29
- [AWS Prescriptive Guidance: Cutover stage](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/cutover-stage.html) · Rollback; Rollback during cutover or without new data; Rollback with the changed data: puntos de control, decisión y datos nuevos · versión: Ruta latest leída el 29-10-2026. Viabilidad de retorno depende de datos y condiciones; no siempre basta redirigir tráfico · comprobado: 2026-10-29

Partida: `ffc6d0480d0df2d5f5080d2f9ecf5a2fad9d38785f5c4ee477774a006eed88a8` · propuesta: `c23afc03c005fc57707ae2549cbddedc199964e988d151e374fa455ba97cd912`

## AI-GSI-B3-T08-016

Decisión: pending_review · acción: revise.

Motivo: Conservar viabilidad de revertir y claveA; caso de nuevas escrituras que evita equiparar rollback con restaurar binarios.

### Antes

¿Por qué definir un punto de no retorno?

- A. Para saber cuándo cambia la viabilidad de revertir **(correcta)**
- B. Para garantizar riesgo cero
- C. Para impedir cualquier decisión previa
- D. Para eliminar todas las validaciones

Explicación: La reversión tiene límites y dependencias que deben conocerse antes de ejecutar.

### Propuesta

Tras conmutar, el sistema nuevo empezará a aceptar escrituras que la copia del anterior no contiene. ¿Para qué definir antes un punto de no retorno en el plan?

- A. Reconocer desde qué cambios el retorno exige otras medidas o deja de ser viable. **(correcta)**
- B. Considerar que conservar el ejecutable anterior basta para recuperar todos los datos.
- C. Posponer los criterios de retorno hasta observar la primera incidencia en producción.
- D. Equiparar el fin de la copia de seguridad con el cierre de toda decisión de reversión.

Explicación: El punto de no retorno identifica un umbral operativo a partir del cual cambian la viabilidad, el coste o las medidas necesarias para volver atrás. Si el nuevo sistema recibe escrituras, restaurar una copia previa puede perderlas. Hay que prever reconciliación, retorno probado o recuperación hacia delante. No significa que cualquier recuperación sea físicamente imposible ni que antes exista riesgo cero.

- Error B: El binario anterior no contiene las escrituras nuevas ni garantiza compatibilidad con los datos actuales.
- Error C: Los criterios y la persona decisora deben prepararse antes; improvisarlos bajo incidencia reduce el margen de actuación.
- Error D: Terminar un backup no determina por sí solo todos los límites de reversión: importan datos posteriores, dependencias y tiempo.

- [AWS Prescriptive Guidance: Cutover stage](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/cutover-stage.html) · Rollback; Rollback during cutover or without new data; Rollback with the changed data: puntos de control, decisión y datos nuevos · versión: Ruta latest leída el 29-10-2026. Viabilidad de retorno depende de datos y condiciones; no siempre basta redirigir tráfico · comprobado: 2026-10-29
- [AWS Prescriptive Guidance: Pre-cutover stage](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/pre-cutover-stage.html) · Developing a cutover plan; Creating a cutover runbook: dependencias, duración, responsables, orden, ensayos y contingencias · versión: Ruta latest leída el 29-10-2026. Planificación orientativa, sin ejecutar infraestructura o exigir pasos de un proveedor en todo proyecto · comprobado: 2026-10-29

Partida: `9d70962c93638ed9ae029944fa58cdc3e5b1cbf454a32ddaa9f90634c50af827` · propuesta: `cc829c5d0d51826a2887e19b833a524bff9ba9acb04ee990ffe03b4e082edab2`

## AI-GSI-B3-T08-017

Decisión: pending_review · acción: revise.

Motivo: Conservar smoke tests y claveD; contexto de arranque y alcance breve, con tres comprobaciones técnicas próximas.

### Antes

Tras arrancar la nueva versión, ¿qué comprobación rápida forma parte del cutover?

- A. Supresión del backup
- B. Destrucción de logs
- C. Cierre automático sin validar
- D. Smoke tests **(correcta)**

Explicación: Los smoke tests comprueban funciones esenciales antes de aceptar la transición.

### Propuesta

Acaba de arrancar la nueva versión. Antes de continuar el cutover se requiere una comprobación breve de acceso y operaciones esenciales. ¿Cuál corresponde?

- A. Una campaña completa de carga para medir el límite de capacidad sostenida.
- B. Una auditoría de licencias para verificar condiciones de uso del software.
- C. Una regresión extensa para recorrer todos los escenarios catalogados.
- D. Una batería smoke para comprobar que responden los flujos esenciales. **(correcta)**

Explicación: Los smoke tests comprueban rápidamente rutas críticas y disponibilidad básica tras el arranque, antes de continuar el proceso previsto. Por ejemplo, acceso y una operación esencial con datos de prueba controlados. Son una puerta preliminar: superarla no equivale a aceptación completa, pruebas de carga o cobertura exhaustiva de regresión.

- Error A: Una campaña completa de carga estudia capacidad bajo esfuerzo, no la comprobación breve de funciones básicas solicitada.
- Error B: La revisión de licencias es pertinente en su ámbito, pero no comprueba que los flujos esenciales respondan tras el arranque.
- Error C: La regresión extensa aporta otro alcance de evidencia y no es la batería breve preliminar descrita.

- [Microsoft ISE Engineering Fundamentals Playbook: Smoke Testing](https://microsoft.github.io/code-with-engineering-playbook/automated-testing/smoke-testing/) · When To Use: Problem Addressed y ROI Tipping Point; Applicable to: comprobaciones breves de rutas críticas tras despliegue · versión: Actualización 17-08-2022 según pie, leída el 29-10-2026. Comprobación preliminar, sin equipararla a aceptación contractual o regresión exhaustiva · comprobado: 2026-10-29
- [AWS Prescriptive Guidance: Cutover stage](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/cutover-stage.html) · Rollback; Rollback during cutover or without new data; Rollback with the changed data: puntos de control, decisión y datos nuevos · versión: Ruta latest leída el 29-10-2026. Viabilidad de retorno depende de datos y condiciones; no siempre basta redirigir tráfico · comprobado: 2026-10-29

Partida: `78bf01b9c2a6e72a7560d93dc594f01554fcf371d81c72cbfe5e2caf48b8c67f` · propuesta: `e162bdc79af61deb281fba18a66749e1859b0e4b82c3c870e0fc341e9d54001a`

## AI-GSI-B3-T08-018

Decisión: pending_review · acción: revise.

Motivo: Conservar adopción/soporte y claveD; caso que separa éxito técnico de beneficios sin diagnosticar una causa única.

### Antes

La instalación funciona, pero usuarios no adoptan el servicio. ¿Qué revela?

- A. Que la implantación fue necesariamente un éxito completo
- B. Que la formación carece de relevancia
- C. Que no deben medirse beneficios
- D. La evaluación debe incluir adopción y soporte, no solo éxito técnico **(correcta)**

Explicación: El éxito operativo depende de uso, calidad, costes y beneficios reales.

### Propuesta

La nueva instalación supera las comprobaciones técnicas, pero apenas se utiliza el servicio. ¿Qué debe hacer la evaluación de la implantación?

- A. Dar por cumplidos los beneficios al comprobar que el servidor no registra errores.
- B. Atribuir la falta de uso a formación sin investigar otras causas posibles.
- C. Cerrar la evaluación al cumplir la fecha prevista de instalación técnica.
- D. Evaluar adopción, barreras de uso y soporte junto con los resultados técnicos. **(correcta)**

Explicación: La instalación correcta aporta evidencia técnica, pero no demuestra que se obtengan beneficios o que las personas puedan usar el servicio. Deben medirse adopción y resultados, investigar barreras y valorar soporte y formación. El bajo uso puede tener varias causas; no permite atribuir automáticamente el problema a una sola ni descartar el valor de la solución.

- Error A: Ausencia de errores de servidor no demuestra uso efectivo, satisfacción o beneficios para las personas.
- Error B: La formación es una hipótesis; también pueden influir accesibilidad, procesos, adecuación del servicio o soporte.
- Error C: Cumplir la fecha de instalación no demuestra que se logren los objetivos operativos de la implantación.

- [GOV.UK Service Manual: Measuring the benefits of your service](https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits) · Beta and live: monitor and evaluate your project; Iterate your models; uso, volúmenes, costes y datos de usuarios · versión: Página pública leída el 29-10-2026. Se contrasta resultado técnico con adopción y beneficios, sin diagnosticar una causa única del bajo uso · comprobado: 2026-10-29
- [GOV.UK Service Manual: User research in beta](https://www.gov.uk/service-manual/user-research/user-research-in-beta) · How to do user research in beta; Who to research with; Typical user research activities · versión: Página pública leída el 29-10-2026, sin edición numerada indicada. Se usa diversidad pertinente y recorrido completo, sin convertir guía británica en obligación española · comprobado: 2026-10-29

Partida: `49bc9f2b3b829398bfee9d9cc68121d5fc3c5f16c17f54a98f6e4abd31ead191` · propuesta: `0a65deddbba4b2bc8ca978dc17b10b47e29c6688781b0948b4d2d783ccbb9e38`

## AI-GSI-B3-T09-001

Decisión: pending_review · acción: revise.

Motivo: Conservar cohesión/acoplamiento y claveC; evaluar significado con distractores de diseño próximos, sin umbral métrico universal.

### Antes

¿Qué objetivos de diseño se asocian a OO?

- A. Baja cohesión y dependencia total
- B. Herencia profunda obligatoria
- C. Alta cohesión y bajo acoplamiento **(correcta)**
- D. Estado público universal

Explicación: Agrupar responsabilidades relacionadas y limitar dependencias favorece diseño mantenible.

### Propuesta

¿Qué objetivos de diseño se asocian a OO?

- A. Agrupar responsabilidades distintas y compartir entre clases sus detalles internos.
- B. Profundizar la herencia y usar el tamaño de la jerarquía como medida de calidad.
- C. Agrupar responsabilidades relacionadas y limitar dependencias entre clases. **(correcta)**
- D. Exponer el estado para que cualquier clase pueda modificarlo directamente.

Explicación: La cohesión alta reúne responsabilidades relacionadas; el acoplamiento bajo limita las dependencias y el conocimiento de detalles ajenos. Favorecen comprensión, cambios y mantenimiento. Son objetivos de diseño, no garantías automáticas ni obligación de eliminar toda relación, multiplicar clases o prohibir herencia.

- Error A: Mezclar responsabilidades reduce cohesión y compartir detalles internos aumenta la dependencia entre clases.
- Error B: Una jerarquía profunda puede aumentar complejidad; su tamaño no acredita buen diseño o cohesión.
- Error D: La modificación directa del estado expone decisiones internas y facilita dependencias que dificultan mantener invariantes.

- [Microsoft Learn: Code metrics, Class coupling](https://learn.microsoft.com/en-us/visualstudio/code-quality/code-metrics-class-coupling?view=visualstudio) · Introducción: cohesión y acoplamiento; Class Coupling Example; The Magic Number: límites contextuales · versión: Actualización 30-10-2025 según pie, cuerpo público leído el 29-10-2026 junto a aviso de autorización. Sin login, cuotas CBO universales o equivalencia entre cero dependencias y buen diseño · comprobado: 2026-10-29

Partida: `db6b2cc88216420d4ae6d37d9c20c18865e2a06cf5c5069b8c1a9613d7efce4a` · propuesta: `1f1fbbc75c29f7e0bda717f38e8e17037b8cd7c236b8c027363f16e9211f1c4b`

## AI-GSI-B3-T09-003

Decisión: pending_review · acción: revise.

Motivo: Conservar rasgos de UP y claveD; distinguir proceso, notación y producto RUP, sin atar la familia a un proveedor.

### Antes

¿Qué caracteriza al Proceso Unificado?

- A. Una librería de interfaces
- B. Exclusivamente cascada sin iteraciones
- C. Un lenguaje gráfico sin proceso
- D. Iterativo, dirigido por casos de uso y centrado en arquitectura y riesgos **(correcta)**

Explicación: UP organiza desarrollo con esas orientaciones; UML es lenguaje de modelado.

### Propuesta

¿Qué caracteriza al Proceso Unificado?

- A. Un proceso secuencial que reserva integración y riesgos para una fase final.
- B. Un proceso dirigido por pantallas que pospone definir la arquitectura hasta el cierre.
- C. Una notación de modelos que fija por sí misma la planificación del equipo.
- D. Un proceso iterativo, guiado por casos de uso, arquitectura y riesgos. **(correcta)**

Explicación: El Proceso Unificado organiza trabajo iterativo e incremental, con casos de uso como hilo de los requisitos funcionales y atención temprana a arquitectura y riesgos. RUP es una concreción configurable de esta familia. UML aporta lenguaje de modelado; no es por sí mismo el proceso. Estas orientaciones no obligan a usar una herramienta de IBM.

- Error A: Reservar integración y riesgos para el final contradice el aprendizaje y mitigación progresivos de las iteraciones.
- Error B: Las pantallas no sustituyen los casos de uso y posponer arquitectura contradice su papel temprano en el proceso.
- Error C: Una notación expresa modelos; no organiza por sí sola tareas, iteraciones y gestión de riesgos.

- [Davor Gornik, IBM Rational: Best Practices for Software Development Teams](https://public.dhe.ibm.com/software/rational/web/whitepapers/2003/rup_bestpractices.pdf) · What is the Rational Unified Process?, p.1; Develop Software Iteratively, Manage Requirements y Use Component-based Architectures, p.2; fases/iteraciones, p.3 · versión: TP026B Rev11/01 según portada, PDF de 21 páginas leído textualmente el 29-10-2026. RUP como concreción de UP; no exige herramientas IBM para cualquier Proceso Unificado · comprobado: 2026-10-29

Partida: `206815b2560067fcc314122d6ca500b5e25f54012fee0fb9a7c5d607ad6d5825` · propuesta: `d2dd2040f0fe30f8c05c3209c237c47f44c7872cd6d87ab78371ca44f3136773`

## AI-GSI-B3-T09-004

Decisión: pending_review · acción: revise.

Motivo: Conservar UML como lenguaje de modelado y claveD; evitar la afirmación falsa de que ningún modelo pueda ejecutarse.

### Antes

¿Qué es UML?

- A. Una metodología completa obligatoria
- B. Un lenguaje de programación ejecutable siempre
- C. Un gestor de proyectos
- D. Un lenguaje de modelado **(correcta)**

Explicación: UML expresa modelos; no prescribe por sí solo cómo gestionar todo el desarrollo.

### Propuesta

¿Qué es UML?

- A. Un proceso que prescribe las fases y los responsables del desarrollo.
- B. Un lenguaje de programación que sustituye cualquier implementación del sistema.
- C. Un formato de intercambio que sustituye la semántica de los modelos.
- D. Un lenguaje para expresar modelos estructurales y de comportamiento. **(correcta)**

Explicación: UML define conceptos, semántica y notaciones para modelar aspectos de sistemas y procesos. No prescribe por sí solo una metodología completa o la gestión del proyecto. Puede usarse con distintos procesos y herramientas; que existan modelos ejecutables o generación de código no convierte toda descripción UML en un programa ejecutable completo.

- Error A: Definir fases y responsabilidades corresponde a un proceso de desarrollo, no al papel de UML como lenguaje.
- Error B: Un modelo UML no sustituye automáticamente toda implementación; el alcance de ejecución depende del modelo y las herramientas.
- Error C: El intercambio de modelos no agota UML: el lenguaje define conceptos y semántica, no solo un formato de serialización.

- [OMG: Unified Modeling Language 2.5.1](https://www.omg.org/spec/UML/2.5.1/PDF) · 1 Scope, p.1; 9.5.3 Properties/AggregationKind, pp.111–112; 14.1/14.2.3 StateMachines, pp.305–307; 17.1.3 y17.8, pp.566/595–596; 19.1–19.4, pp.653–658 · versión: Formal/17-12-05, diciembre de2017 según índice oficial, PDF de796 páginas descargado y leído textualmente el29-10-2026. Numeración impresa; no se atribuye inspección visual de figuras ni conformidad de herramienta · comprobado: 2026-10-29
- [Davor Gornik, IBM Rational: Best Practices for Software Development Teams](https://public.dhe.ibm.com/software/rational/web/whitepapers/2003/rup_bestpractices.pdf) · What is the Rational Unified Process?, p.1; Develop Software Iteratively, Manage Requirements y Use Component-based Architectures, p.2; fases/iteraciones, p.3 · versión: TP026B Rev11/01 según portada, PDF de 21 páginas leído textualmente el 29-10-2026. RUP como concreción de UP; no exige herramientas IBM para cualquier Proceso Unificado · comprobado: 2026-10-29

Partida: `2c1646106128befc017a7ef3e37eb96d66992e138c2786a07909d0018eebdd49` · propuesta: `0698510f3a64688ea58e6dafb571b28d73f9b7ad93bfbadf36768b0ba8a54c73`

## AI-GSI-B3-T09-005

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado/opciones y claveA; precisar propiedad única simultánea, separación previa y límites del ciclo de vida según UML9.5.3.

### Antes

¿Qué relación implica un vínculo más fuerte de ciclo de vida entre todo y parte?

- A. Composición **(correcta)**
- B. Dependencia de uso puntual
- C. Agregación débil
- D. Asociación sin restricciones adicionales

Explicación: La composición liga fuertemente la parte al todo frente a agregación.

### Propuesta

¿Qué relación implica un vínculo más fuerte de ciclo de vida entre todo y parte?

- A. Composición **(correcta)**
- B. Dependencia de uso puntual
- C. Agregación débil
- D. Asociación sin restricciones adicionales

Explicación: La composición es la relación de agregación fuerte entre todo y parte. Una parte objeto pertenece como máximo a un compuesto a la vez; si se elimina el compuesto, se eliminan sus partes objeto todavía contenidas. Puede separarse una parte antes, cuando esté permitido. UML no impone que todo y partes se creen simultáneamente ni concreta cada detalle del ciclo de vida.

- Error B: Usar puntualmente otro elemento no establece responsabilidad del todo sobre la existencia de la parte.
- Error C: La agregación compartida no impone las restricciones de composición; UML deja su semántica precisa al ámbito y al modelador.
- Error D: Una asociación sin restricciones adicionales no establece por sí sola propiedad compuesta y eliminación de las partes contenidas.

- [OMG: Unified Modeling Language 2.5.1](https://www.omg.org/spec/UML/2.5.1/PDF) · 1 Scope, p.1; 9.5.3 Properties/AggregationKind, pp.111–112; 14.1/14.2.3 StateMachines, pp.305–307; 17.1.3 y17.8, pp.566/595–596; 19.1–19.4, pp.653–658 · versión: Formal/17-12-05, diciembre de2017 según índice oficial, PDF de796 páginas descargado y leído textualmente el29-10-2026. Numeración impresa; no se atribuye inspección visual de figuras ni conformidad de herramienta · comprobado: 2026-10-29

Partida: `47534789c8ea9984fd72309a79fd582fa6ac7a51745563faee33cbc0df131c6e` · propuesta: `e077d6ee5bbc2c5575d78cbe496c1aee167393cc0cf8c15c8af9ea356d84dad2`

## AI-GSI-B3-T09-006

Decisión: pending_review · acción: revise.

Motivo: Conservar elementos de secuencia y claveC; sustituir distractores ajenos por diagramas próximos y precisar orden parcial.

### Antes

¿Qué elementos son propios de un diagrama de secuencia?

- A. Sectores de disco
- B. Presupuestos y amortizaciones
- C. Líneas de vida, mensajes y activaciones **(correcta)**
- D. Claves de cifrado únicamente

Explicación: La secuencia representa interacciones y su orden temporal.

### Propuesta

¿Qué elementos son propios de un diagrama de secuencia?

- A. Clases, atributos y asociaciones estructurales entre sus tipos.
- B. Actividades, decisiones y flujos de control entre acciones.
- C. Líneas de vida, mensajes y especificaciones de ejecución. **(correcta)**
- D. Nodos, artefactos y relaciones de despliegue entre ellos.

Explicación: Un diagrama de secuencia muestra una interacción mediante líneas de vida y mensajes; puede incluir especificaciones de ejecución, habitualmente llamadas activaciones. Expresa restricciones de orden entre ocurrencias. No exige una escala temporal métrica, un reloj global ni una activación dibujada para cada línea de vida. Las otras alternativas describen otros aspectos del modelo.

- Error A: Las clases y asociaciones describen estructura de tipos, no el intercambio de mensajes de una interacción.
- Error B: Las actividades y flujos modelan acciones y control; no son los elementos característicos solicitados de secuencia.
- Error D: Nodos y artefactos desplegados describen arquitectura de ejecución, no mensajes entre participantes.

- [OMG: Unified Modeling Language 2.5.1](https://www.omg.org/spec/UML/2.5.1/PDF) · 1 Scope, p.1; 9.5.3 Properties/AggregationKind, pp.111–112; 14.1/14.2.3 StateMachines, pp.305–307; 17.1.3 y17.8, pp.566/595–596; 19.1–19.4, pp.653–658 · versión: Formal/17-12-05, diciembre de2017 según índice oficial, PDF de796 páginas descargado y leído textualmente el29-10-2026. Numeración impresa; no se atribuye inspección visual de figuras ni conformidad de herramienta · comprobado: 2026-10-29

Partida: `a968fdd863c4b1522d40481520d531fd2d864daa09391f95f74edff5cfecee59` · propuesta: `59b3e1b42a7fa5f06ef9172b7ab5c343ce0e3193ac6e9f46d26c187ef84794dd`

## AI-GSI-B3-T09-007

Decisión: pending_review · acción: revise.

Motivo: Conservar clasificación creacional de Builder y claveD; distinguir propósito, pasos de construcción, alcance y nivel arquitectónico sin inventar una cuarta familia GoF.

### Antes

¿A qué familia GoF pertenece Builder?

- A. Encaminamiento
- B. Comportamiento
- C. Estructural
- D. Creacional **(correcta)**

Explicación: Builder se clasifica entre patrones creacionales junto a Factory y Prototype.

### Propuesta

Según la clasificación por propósito de GoF, ¿cómo se clasifica Builder y por qué?

- A. Arquitectónico, porque divide el sistema en capas de despliegue.
- B. De comportamiento, porque define responsabilidades de comunicación.
- C. Estructural, porque adapta interfaces entre objetos existentes.
- D. Creacional, porque separa construcción y representación del objeto. **(correcta)**

Explicación: En GoF, Builder es creacional: separa el proceso de construir un objeto complejo de la representación que resulta. Su propósito es la creación, aunque implique pasos y objetos colaboradores. GoF distingue propósitos creacional, estructural y de comportamiento; el alcance clase/objeto es otro criterio. Una organización arquitectónica por capas pertenece a otro nivel de decisión.

- Error A: Dividir capas describe una decisión arquitectónica, no el propósito ni una cuarta familia por propósito de GoF para Builder.
- Error B: Coordinar responsabilidades de interacción caracteriza patrones de comportamiento; Builder se centra en construir el producto.
- Error C: Ajustar una interfaz a la esperada por el cliente describe Adapter, no el propósito de Builder.

- [Gamma, Helm, Johnson y Vlissides: Design Patterns, vista previa](https://api.pageplace.de/preview/DT0400.9780321700742_A23552527/preview-9780321700742_A23552527.pdf) · Listas iniciales Creational/Structural/Behavioral; índice, pp.viii–ix; 1.5 Organizing the Catalog, pp.9–10 · versión: Vista previa del libro Addison-Wesley, copyright1995, impresión37 de marzo2009 según créditos,42 páginas PDF leídas textualmente el29-10-2026. Clasificación por propósito, distinta de alcance clase/objeto · comprobado: 2026-10-29

Partida: `bba46cfbfed54780805d31779445776ec50573a30522ea7a8d9eff0861d1e2a5` · propuesta: `6cc566fc078b2ceb9b0edd550b67ea4684d64babef0fb93f3a541a5959bd8cad`

## AI-GSI-B3-T09-008

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y claveD; justificar individualmente los tres distractores con su propósito real.

### Antes

¿Cuál de los siguientes es un patrón estructural?

- A. Observer
- B. Command
- C. Strategy
- D. Adapter **(correcta)**

Explicación: Adapter ajusta interfaces y pertenece a los estructurales; los otros son de comportamiento.

### Propuesta

¿Cuál de los siguientes es un patrón estructural?

- A. Observer
- B. Command
- C. Strategy
- D. Adapter **(correcta)**

Explicación: Adapter es estructural: permite colaborar a elementos cuyas interfaces no encajan, presentando la que espera el cliente. Observer, Command y Strategy son de comportamiento. La clasificación por propósito no depende de que se implemente con clases u objetos ni de que un patrón use composición internamente.

- Error A: Observer propaga cambios a sus dependientes mediante notificaciones; su propósito es de comportamiento.
- Error B: Command encapsula una petición como objeto para tratar su ejecución; pertenece a comportamiento.
- Error C: Strategy encapsula algoritmos intercambiables para variar cómo se resuelve una tarea; es de comportamiento.

- [Gamma, Helm, Johnson y Vlissides: Design Patterns, vista previa](https://api.pageplace.de/preview/DT0400.9780321700742_A23552527/preview-9780321700742_A23552527.pdf) · Listas iniciales Creational/Structural/Behavioral; índice, pp.viii–ix; 1.5 Organizing the Catalog, pp.9–10 · versión: Vista previa del libro Addison-Wesley, copyright1995, impresión37 de marzo2009 según créditos,42 páginas PDF leídas textualmente el29-10-2026. Clasificación por propósito, distinta de alcance clase/objeto · comprobado: 2026-10-29
- [Gamma, Helm, Johnson y Vlissides, extracto editorial: Adapter](https://www.informit.com/articles/article.aspx?p=1398600) · Class, Object Structural: Adapter; Intent y Motivation: adaptar una interfaz a la esperada por el cliente · versión: Extracto del libro GoF publicado por InformIT/Addison-Wesley, consultado el29-10-2026. No se confunde Adapter con cualquier envoltorio o con cambio de algoritmo · comprobado: 2026-10-29

Partida: `f161c69bc7d6985eb40e801f7edf975bff7eb964b8de1acc254effec099e3e1a` · propuesta: `22126f047b8276b6f2503ceb9cc2d58912cf839bb21106453b63e239dfc8e852`

## AI-GSI-B3-T09-009

Decisión: pending_review · acción: revise.

Motivo: Conservar selección contextual y claveB; opciones comparan criterios de decisión sin prescribir arquitectura nueva para la aplicación.

### Antes

¿Qué criterio debe guiar la elección de un patrón arquitectónico?

- A. Usar una solución única para cualquier dominio
- B. El problema y sus necesidades **(correcta)**
- C. Aplicar todos los patrones para aumentar abstracción
- D. Elegir el patrón antes de analizar el problema

Explicación: Un patrón no es producto ni receta universal; debe justificarse.

### Propuesta

¿Qué criterio debe guiar la elección de un patrón arquitectónico?

- A. La popularidad del patrón, usada para decidir antes de delimitar el problema.
- B. El problema, sus requisitos y los compromisos de la solución. **(correcta)**
- C. El número de patrones combinados, usado como medida de calidad arquitectónica.
- D. La herramienta disponible, usada para fijar después las necesidades de negocio.

Explicación: La elección parte del problema y prioriza requisitos funcionales, atributos de calidad y restricciones. Deben evaluarse beneficios, costes y compromisos: un patrón útil en un contexto puede añadir complejidad innecesaria en otro. La disponibilidad de herramientas influye como restricción, pero no sustituye comprender las necesidades ni justifica acumular patrones.

- Error A: Popularidad no acredita que el patrón resuelva los riesgos y necesidades de este sistema.
- Error C: Combinar más patrones puede aumentar complejidad y no es por sí mismo un objetivo de calidad.
- Error D: La herramienta es un condicionante posible, pero no debe inventar o sustituir las necesidades que la arquitectura debe satisfacer.

- [Microsoft Azure Architecture Center: Architecture styles](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/) · Architecture styles as constraints; Consider challenges and benefits: problema, requisitos de calidad, restricciones y compromisos · versión: Página actualizada14-10-2025 según pie, leída el29-10-2026. Criterio general de selección, sin recomendar adoptar servicios o complejidad de Azure en GSI · comprobado: 2026-10-29

Partida: `fd291c95fd237853f62d3e76988d07b51ba784a2114c91d12b340a46e83d4663` · propuesta: `98830b4a33e85e860e56fadfd2b6059cd37bfe962548519e106bb08c5da17c49`

## AI-GSI-B3-T09-013

Decisión: pending_review · acción: revise.

Motivo: Conservar diagrama de estados para ciclo de vida y claveC; microcaso con entidad y eventos, sin exigir toda entidad tenga un único estado global.

### Antes

¿Qué diagrama muestra el ciclo de vida de una entidad?

- A. Clases exclusivamente
- B. Paquetes
- C. Estados **(correcta)**
- D. Despliegue

Explicación: El diagrama de estados modela situaciones y transiciones de un objeto.

### Propuesta

Un pedido puede estar en Borrador, Confirmado o Cancelado; se quiere modelar qué eventos y condiciones permiten cambiar entre esas situaciones. ¿Qué diagrama UML corresponde?

- A. Un diagrama de clases con sus atributos y asociaciones.
- B. Un diagrama de paquetes con sus dependencias de organización.
- C. Un diagrama de estados con transiciones por eventos y condiciones. **(correcta)**
- D. Un diagrama de despliegue con nodos y artefactos instalados.

Explicación: La máquina de estados permite modelar las situaciones de una entidad y las transiciones permitidas ante eventos, con guardas cuando proceda. Es adecuada para el ciclo de vida descrito. No fija por sí sola la arquitectura física, la estructura de clases ni la organización en paquetes; esos aspectos pueden complementarla.

- Error A: Las clases describen estructura y relaciones; una lista de atributos no especifica por sí sola las transiciones del ciclo de vida.
- Error B: Los paquetes organizan elementos del modelo y sus dependencias, no las situaciones y cambios de una entidad.
- Error D: El despliegue distribuye artefactos en nodos; no modela las transiciones del pedido.

- [OMG: Unified Modeling Language 2.5.1](https://www.omg.org/spec/UML/2.5.1/PDF) · 1 Scope, p.1; 9.5.3 Properties/AggregationKind, pp.111–112; 14.1/14.2.3 StateMachines, pp.305–307; 17.1.3 y17.8, pp.566/595–596; 19.1–19.4, pp.653–658 · versión: Formal/17-12-05, diciembre de2017 según índice oficial, PDF de796 páginas descargado y leído textualmente el29-10-2026. Numeración impresa; no se atribuye inspección visual de figuras ni conformidad de herramienta · comprobado: 2026-10-29

Partida: `128a884f7216bda281d14583b1ed6682e8ed48a10b52aaf086f5a44b3afbe34c` · propuesta: `7e92ce2b4c83f87d20dc414131396c588e89bb3d45e691d782079539ed491857`

## AI-GSI-B3-T09-014

Decisión: pending_review · acción: revise.

Motivo: Conservar nodos/artefactos y claveC; precisar nodos software y diferencia entre componentes y artefactos, con distractores UML próximos.

### Antes

¿Qué diagrama muestra nodos y artefactos desplegados?

- A. Casos de uso
- B. Estados
- C. Despliegue **(correcta)**
- D. Actividad exclusivamente

Explicación: Despliegue relaciona la solución con nodos y artefactos.

### Propuesta

¿Qué diagrama UML representa la asignación de artefactos a nodos que pueden ser dispositivos o entornos de ejecución?

- A. Un diagrama de casos de uso que relaciona actores con objetivos.
- B. Un diagrama de estados que muestra eventos y cambios de situación.
- C. Un diagrama de despliegue que asigna artefactos a nodos de ejecución. **(correcta)**
- D. Un diagrama de actividad que muestra acciones y flujos de control.

Explicación: El despliegue modela la arquitectura de ejecución y la asignación de artefactos a destinos como nodos. Los nodos pueden ser dispositivos o entornos de ejecución software, y pueden anidarse. Un artefacto puede manifestar elementos del modelo, como componentes; no se identifica automáticamente componente lógico con archivo desplegable ni nodo con máquina física.

- Error A: Los casos de uso describen objetivos de actores respecto del sistema, no la ubicación de artefactos en nodos.
- Error B: Los estados modelan situaciones y transiciones de comportamiento, no distribución de elementos desplegados.
- Error D: La actividad describe acciones y flujo; por sí sola no expresa la asignación de artefactos a destinos de ejecución.

- [OMG: Unified Modeling Language 2.5.1](https://www.omg.org/spec/UML/2.5.1/PDF) · 1 Scope, p.1; 9.5.3 Properties/AggregationKind, pp.111–112; 14.1/14.2.3 StateMachines, pp.305–307; 17.1.3 y17.8, pp.566/595–596; 19.1–19.4, pp.653–658 · versión: Formal/17-12-05, diciembre de2017 según índice oficial, PDF de796 páginas descargado y leído textualmente el29-10-2026. Numeración impresa; no se atribuye inspección visual de figuras ni conformidad de herramienta · comprobado: 2026-10-29

Partida: `5cda28c8fef27f474261febe771f667bb6f63bf6514ba115c79c06e811213426` · propuesta: `2f20306d4c6b1815a20a04b63f353094247f8e8272ca4a1f2fbdbf003e6fef8a`
