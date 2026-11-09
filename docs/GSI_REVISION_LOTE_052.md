# GSI-EDITORIAL-052 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `c54420a106b7d06f98e198e72bf7863a07454c83de2e43a4a959e479d64edf4f`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T01-008

Decisión: pending_review · acción: revise.

Motivo: Conservar capacidad añadida y clave C; sustituir retirada/auditoría por distinciones cercanas y reconocer coexistencia de iteración e incremento.

### Antes

Una entrega incorpora una capacidad nueva útil. ¿Qué característica predomina?

- A. Auditoría financiera
- B. Retirada
- C. Incremental **(correcta)**
- D. Solo refinamiento sin ampliar capacidad

Explicación: Incrementar añade capacidades; iterar revisa o mejora una solución.

### Propuesta

Una entrega incorpora una capacidad nueva útil. ¿Qué característica predomina?

- A. Correctiva: restablece el comportamiento previsto tras una anomalía.
- B. Adaptativa: ajusta el producto a cambios de su entorno de uso.
- C. Incremental: añade una capacidad útil a las ya disponibles. **(correcta)**
- D. Refinamiento: mejora una capacidad sin ampliar lo que permite hacer.

Explicación: Lo incremental destaca la incorporación de capacidad útil al producto. La entrega se suma a lo que ya podía hacerse; no es simplemente corregir una anomalía o mejorar la misma solución. Un proceso puede ser incremental e iterativo a la vez: añadir capacidad no impide revisar diseño o comportamiento en ciclos. El enunciado pregunta qué característica predomina, sin imponer un modelo exclusivo, una tecnología o un despliegue por cada ciclo.

- Error A: La corrección restaura un comportamiento esperado. El supuesto destaca capacidad nueva útil, sin señalar una anomalía que se esté reparando.
- Error B: La adaptación responde a cambios del entorno. No se describe tal cambio y la ampliación de capacidad es el rasgo explícito de la entrega.
- Error D: Refinar puede mejorar una capacidad existente; aquí se incorpora una nueva, por lo que el rasgo destacado es incremental.

- [ISTQB: CTFL Syllabus v4.0.1](https://istqb.org/?download_id=3345&sdm_process_download=1) · 1.4.4 trazabilidad (p.20); 2.1 y2.1.1 modelos/ciclos (p.25); 2.1.4 DevOps (pp.26–27); 5.1.3 criterios de entrada/salida (p.49) · versión: v4.0.1, 15-09-2024. PDF oficial leído textualmente el 28-10-2026, sin atribuir inspección de figuras. Las convenciones de pruebas no convierten Definition of Ready en evento o compromiso obligatorio de Scrum · comprobado: 2026-10-28
- [Schwaber y Sutherland: The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html) · Scrum Definition y Theory; Scrum Team, Developers, Product Owner y Scrum Master; Scrum Events; Scrum Artifacts y sus compromisos; End Note · versión: Edición noviembre de 2020, versión HTML declarada equivalente al PDF; consultada 28-10-2026. Responsabilidades, eventos, artefactos y compromisos son categorías distintas; refinamiento no es evento formal ni Definition of Ready un compromiso obligatorio del marco · comprobado: 2026-10-28

Partida: `b4ae9c498edbeea96651fcb759c3110ea1ba5fa774f7bf9cb54aada78a9b84f2` · propuesta: `204ef5e7c581234037ef8a142a27f5104f2be822e7e43c91a0de62fe9221835f`

## AI-GSI-B3-T01-009

Decisión: pending_review · acción: revise.

Motivo: Conservar refinamiento iterativo y clave C; precisar ausencia de nuevas funciones en el caso para que incremento no sea una segunda interpretación.

### Antes

El equipo refina una solución existente en ciclos sucesivos. ¿Qué característica predomina?

- A. Retirada definitiva
- B. Exclusivamente secuencial irreversible
- C. Iterativa **(correcta)**
- D. Conservación pasiva

Explicación: Iterar revisa y mejora; no exige añadir una funcionalidad distinta en cada ciclo.

### Propuesta

Un equipo refina una solución en ciclos sucesivos a partir del feedback, sin añadir funciones nuevas. ¿Qué característica predomina?

- A. Incremental: añade una funcionalidad distinta en cada ciclo descrito.
- B. Secuencial: cierra cada actividad y evita volver sobre sus resultados.
- C. Iterativa: revisa la solución a partir de lo aprendido en cada ciclo. **(correcta)**
- D. Correctiva: restaura únicamente un comportamiento que ya se exigía.

Explicación: Revisar una solución en ciclos a partir de resultados y aprendizaje caracteriza la iteración. No exige ampliar la funcionalidad en cada vuelta ni equivale a corregir exclusivamente defectos. Puede revisitar requisitos, diseño y pruebas con distinta intensidad. La iteración puede combinarse con incrementos, pero el supuesto excluye funciones nuevas para centrar la distinción en el refinamiento de una solución existente.

- Error A: En el caso no se añade una función distinta; el rasgo explícito es revisar la solución existente. Incremento e iteración pueden combinarse en otros casos.
- Error B: Cerrar sin revisitar contradice el refinamiento por ciclos planteado; no describe el aprendizaje iterativo.
- Error D: El refinamiento no se limita a restaurar un comportamiento exigido que falla: puede mejorar decisiones y solución sin que exista un defecto previo.

- [ISTQB: CTFL Syllabus v4.0.1](https://istqb.org/?download_id=3345&sdm_process_download=1) · 1.4.4 trazabilidad (p.20); 2.1 y2.1.1 modelos/ciclos (p.25); 2.1.4 DevOps (pp.26–27); 5.1.3 criterios de entrada/salida (p.49) · versión: v4.0.1, 15-09-2024. PDF oficial leído textualmente el 28-10-2026, sin atribuir inspección de figuras. Las convenciones de pruebas no convierten Definition of Ready en evento o compromiso obligatorio de Scrum · comprobado: 2026-10-28
- [Schwaber y Sutherland: The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html) · Scrum Definition y Theory; Scrum Team, Developers, Product Owner y Scrum Master; Scrum Events; Scrum Artifacts y sus compromisos; End Note · versión: Edición noviembre de 2020, versión HTML declarada equivalente al PDF; consultada 28-10-2026. Responsabilidades, eventos, artefactos y compromisos son categorías distintas; refinamiento no es evento formal ni Definition of Ready un compromiso obligatorio del marco · comprobado: 2026-10-28

Partida: `31d5f798e05c4a39ecb8a8980448b29bc4ffa32fe9e8bee7f7189c0ac0501655` · propuesta: `a208d313a46b305337155a71068a71c3535595eedbd16684739f8530d71ea2d0`

## AI-GSI-B3-T01-010

Decisión: pending_review · acción: revise.

Motivo: Conservar dirección por riesgos y clave C; comparar criterios reales de planificación y avance, sin pantallas o eliminación de documentación.

### Antes

¿Qué guía principalmente el modelo en espiral?

- A. La secuencia fija de fases sin reevaluar riesgos
- B. La entrega de pantallas como único criterio
- C. Identificación y resolución de riesgos **(correcta)**
- D. La reducción de documentación sin validación

Explicación: La espiral organiza ciclos alrededor de objetivos, riesgos, desarrollo y planificación posterior.

### Propuesta

¿Qué guía principalmente el modelo en espiral?

- A. El cumplimiento de fechas fijas que determina el esfuerzo de cada ciclo.
- B. El cierre secuencial de fases que determina cuándo validar la solución.
- C. La identificación y resolución de riesgos que orienta cada ciclo. **(correcta)**
- D. El número de funciones entregadas que determina por sí solo el avance.

Explicación: La espiral organiza compromisos y actividades según riesgos y objetivos. En cada ciclo se examinan alternativas, restricciones, riesgos y resultados antes de acordar cómo seguir. El esfuerzo de exploración debe ser proporcionado al riesgo: puede incluir prototipos, modelos o simulaciones y no exige usar siempre la misma técnica. El calendario y los incrementos pueden intervenir, pero no sustituyen ese criterio rector ni convierten la espiral en una secuencia rígida.

- Error A: Las fechas ayudan a planificar, pero no son el criterio que define el esfuerzo y decisiones de la espiral; debe considerarse el riesgo.
- Error B: Una secuencia fija con validación aplazada no expresa la revisión de riesgos y compromisos en cada ciclo.
- Error D: Entregar funciones puede ser un resultado, pero contarlas no demuestra que se hayan identificado o reducido los riesgos relevantes.

- [Barry Boehm, edición Wilfred J. Hansen: Spiral Development](https://www.sei.cmu.edu/documents/5439/2000_003_001_13655.pdf) · Resumen; §2.1 compatibilidad de requisitos, planes, arquitectura, diseño y componentes, pp.6–8; §2.2 Spiral Invariant2, pp.9–10; §2.3 esfuerzo guiado por riesgo, p.11; técnicas de exploración · versión: CMU/SEI-2000-SR-008, julio de 2000. PDF leído textualmente, no solo índice; no exige prototipar todo riesgo ni prescribe un modelo único para cualquier proyecto · comprobado: 2026-10-28

Partida: `8ad778016b0884287223e8912477565b7c7c49a527a07686d44a2ff3d8cee302` · propuesta: `bfd23b40cc68db2a8313d6f52baf17a7db74912b77a47c92cd27928662e1cba7`

## AI-GSI-B3-T01-012

Decisión: pending_review · acción: revise.

Motivo: Conservar controles continuos y clave C; estrategias parciales plausibles frente a integración de calidad y seguridad, sin prescribir publicación automática.

### Antes

En un flujo continuo de cambios, ¿qué sigue siendo necesario?

- A. Aprobar todos los cambios sin evidencia
- B. Omitir pruebas por ser frecuentes
- C. Controles de calidad y seguridad **(correcta)**
- D. Eliminar operación del ciclo

Explicación: La frecuencia de entrega no sustituye la verificación ni la gestión operativa.

### Propuesta

En un flujo continuo de cambios, ¿qué sigue siendo necesario?

- A. Aceptar cada cambio por su frecuencia y revisar calidad al cerrar el proyecto.
- B. Conservar pruebas funcionales y dejar la seguridad fuera del flujo habitual.
- C. Mantener controles de calidad y seguridad integrados en el flujo de cambios. **(correcta)**
- D. Vigilar disponibilidad y considerar suficiente esa métrica para aceptar cambios.

Explicación: Entregar con frecuencia requiere comprobar calidad y seguridad y obtener evidencia útil para decidir. Automatizar integración y pruebas facilita feedback rápido, pero no garantiza cobertura completa ni elimina revisiones, operación o pruebas manuales pertinentes. SSDF propone criterios de seguridad y evidencias dentro del ciclo. Entrega continua significa poder liberar con seguridad bajo demanda; no obliga a publicar automáticamente cualquier cambio ni a rebajar controles para aumentar frecuencia.

- Error A: La frecuencia no prueba calidad. Aplazar toda revisión acumula riesgo y pierde el feedback necesario para mantener cambios desplegables.
- Error B: Las pruebas funcionales no cubren por sí solas los requisitos y riesgos de seguridad; estos deben incorporarse al proceso.
- Error D: La disponibilidad es relevante, pero un servicio disponible puede tener errores funcionales o vulnerabilidades; no basta como criterio único de aceptación.

- [NIST: Secure Software Development Framework v1.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · Introducción y tabla1: PO.4, definir/usar criterios de seguridad; PO.4.1 yPO.4.2 evidencias; integración de prácticas en cualquier SDLC · versión: NIST SP800-218, versión1.1 final de febrero de 2022; ficha CSRC y PDF leídos el 28-10-2026. Recomendación de seguridad, no obligación jurídica general española ni garantía de ausencia de vulnerabilidades · comprobado: 2026-10-28
- [DORA: Continuous delivery](https://dora.dev/capabilities/continuous-delivery/) · Definición; preguntas de capacidad de entrega; distinción delivery/deployment; Implementing continuous delivery: pruebas, seguridad, integración y feedback · versión: Documentación viva consultada 28-10-2026. Preparar para liberar bajo demanda no equivale a desplegar automáticamente todo cambio; no se instala una cadena CI/CD · comprobado: 2026-10-28
- [ISTQB: CTFL Syllabus v4.0.1](https://istqb.org/?download_id=3345&sdm_process_download=1) · 1.4.4 trazabilidad (p.20); 2.1 y2.1.1 modelos/ciclos (p.25); 2.1.4 DevOps (pp.26–27); 5.1.3 criterios de entrada/salida (p.49) · versión: v4.0.1, 15-09-2024. PDF oficial leído textualmente el 28-10-2026, sin atribuir inspección de figuras. Las convenciones de pruebas no convierten Definition of Ready en evento o compromiso obligatorio de Scrum · comprobado: 2026-10-28

Partida: `fb606297c79b1144c512eec41d9d861907a2b2016c30661ebe2effbf61a5dbc9` · propuesta: `fb4dd12a37208b715abc8d57bad669f9c089950cac2529f44e1fa9975ba9484b`

## AI-GSI-B3-T01-013

Decisión: pending_review · acción: revise.

Motivo: Conservar retirada con dependencias y datos y clave D; microcaso de API y expedientes para evaluar transición, no el simple apagado.

### Antes

Al retirar un servicio integrado, ¿qué debe planificarse además de apagarlo?

- A. Eliminar todos los datos sin examinar conservación
- B. Mantener indefinidamente todas las cuentas activas
- C. Solo quitar el acceso directo del escritorio
- D. Cerrar integraciones y migrar o conservar datos según necesidades **(correcta)**

Explicación: La retirada es un proceso con dependencias, información y obligaciones de conservación.

### Propuesta

Se retira un servicio que alimenta otras aplicaciones por API y conserva expedientes. Además del apagado, ¿qué debe prepararse?

- A. Cerrar el acceso web y mantener sin revisar consumidores y datos del servicio.
- B. Migrar la base de datos y dejar activas sus integraciones hasta otra decisión.
- C. Avisar del apagado y eliminar los datos al mismo tiempo que el proceso servidor.
- D. Planificar dependencias, transición y destino de los datos antes del cierre. **(correcta)**

Explicación: Retirar un servicio integrado implica decidir cómo se atenderán las necesidades, qué consumidores deben cambiar y qué datos se migrarán, conservarán o eliminarán de forma controlada. Requiere responsables, comunicación y cierre de dependencias, no solo apagar un proceso. El ejemplo GOV.UK contempla usuarios de APIs y protección de información. Sus reglas concretas son británicas; aquí se aplica el principio de transición y la política u obligación que corresponda al contexto.

- Error A: Cerrar la web no trata consumidores de API, procesos dependientes o datos que siguen necesitando protección y gestión.
- Error B: Migrar datos es una parte posible; dejar integraciones residuales sin una decisión de cierre conserva accesos y dependencias sin gobierno.
- Error C: Informar no justifica destruir datos automáticamente; antes deben revisarse conservación, migración y responsabilidades.

- [GOV.UK Service Manual: Retiring your service](https://www.gov.uk/service-manual/agile-delivery/retiring-your-service) · Consider user needs; Telling your users, APIs; Make a plan to redirect traffic; Protecting information · versión: Página actualizada 26-08-2025, consultada 28-10-2026. Orientación británica utilizada como ejemplo de transición, no normativa española ni plazo universal de conservación o redirección · comprobado: 2026-10-28
- [OWASP: Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) · §2.7.3 Revocation; §2.7.4 Expiration; §2.6 Auditing y§2.11 Metadata: ciclo y decisiones sobre secretos innecesarios · versión: Guía viva consultada 28-10-2026. Revocar en el proveedor es distinto de eliminar una referencia local. No se leen valores de credenciales ni se ejecutan rotaciones/revocaciones reales · comprobado: 2026-10-28

Partida: `1775aca2178900de775ffae8d8e48b6eb997af329af25d41d4eeece9e671fcc3` · propuesta: `572ba2ac9ea4bb3f8fc5562c28930126df2c3f709844c27ec5b52a63c610e495`

## AI-GSI-B3-T01-014

Decisión: pending_review · acción: revise.

Motivo: Conservar revocación segura y clave C; distinguir invalidez real, borrado local, rotación y custodia, sin solicitar o manejar credenciales.

### Antes

¿Qué acción sobre credenciales forma parte de una retirada segura?

- A. Publicarlos para documentar el sistema
- B. Compartirlos con cualquier proveedor futuro
- C. Revocar secretos y cuentas que dejen de ser necesarios **(correcta)**
- D. Conservarlos activos por defecto sin revisión

Explicación: La retirada debe cerrar vías de acceso residuales y documentar las decisiones.

### Propuesta

Al retirar una integración, ¿qué tratamiento cierra los accesos de sus credenciales ya innecesarias?

- A. Borrar las referencias locales manteniendo las credenciales válidas en el proveedor.
- B. Rotarlas y dejar habilitadas las cuentas y permisos de la integración retirada.
- C. Revocar secretos y cuentas que ya no sean necesarios para ningún uso autorizado. **(correcta)**
- D. Guardar su valor en una copia cifrada sin cambiar su validez en el proveedor.

Explicación: Cerrar accesos residuales exige invalidar credenciales y cuentas innecesarias en el sistema que las acepta, con comprobación y registro de la decisión. Borrar una referencia local no revoca una clave que siga válida en el proveedor. Si una identidad o secreto es compartido con otro uso legítimo, deben resolverlo sus responsables antes de una revocación que lo interrumpa. Conservar evidencia del cierre no requiere copiar el valor del secreto a informes o logs.

- Error A: La eliminación local no cambia lo que acepta el proveedor: una copia de la credencial podría seguir autenticándose.
- Error B: Rotar cambia el secreto, pero mantener habilitada una identidad sin finalidad conserva acceso residual; no completa el cierre planteado.
- Error D: Cifrar una copia protege ese soporte, pero no invalida la credencial frente al servicio que todavía la reconoce.

- [OWASP: Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) · §2.7.3 Revocation; §2.7.4 Expiration; §2.6 Auditing y§2.11 Metadata: ciclo y decisiones sobre secretos innecesarios · versión: Guía viva consultada 28-10-2026. Revocar en el proveedor es distinto de eliminar una referencia local. No se leen valores de credenciales ni se ejecutan rotaciones/revocaciones reales · comprobado: 2026-10-28

Partida: `878142d31e536c4a7b114565c20016b1766c5164821a16e23093949d19f96516` · propuesta: `4275264c16a005fc3d99e416cd78471c5c3f5cfd1be6b42bda13cf04f7338d2c`

## AI-GSI-B3-T01-015

Decisión: pending_review · acción: revise.

Motivo: Conservar transición verificable y clave B; diferenciar evidencia de fecha, porcentaje y esfuerzo; no convertir todo modelo en gates rígidos.

### Antes

¿Qué permiten los criterios de paso entre etapas?

- A. Eliminar toda gestión de cambios
- B. Comprobar que existen entradas, salidas y evidencias suficientes para avanzar **(correcta)**
- C. Garantizar éxito sin pruebas
- D. Sustituir todos los requisitos por fechas

Explicación: Los criterios de transición hacen verificable el avance, más allá de nombrar fases.

### Propuesta

¿Qué permiten los criterios de paso entre etapas?

- A. Avanzar al llegar la fecha prevista aunque no se hayan revisado los resultados.
- B. Comprobar entradas, salidas y evidencia frente a criterios acordados de transición. **(correcta)**
- C. Avanzar con el porcentaje declarado por el responsable sin un criterio verificable.
- D. Sustituir la evaluación de resultados por el número de horas consumidas en la etapa.

Explicación: Los criterios de paso hacen explícitas las condiciones para comenzar o cerrar actividades y decidir la transición con evidencia. Permiten revisar productos, recursos, resultados y riesgos pendientes frente a lo acordado. No son una garantía de éxito ni exigen el mismo esquema de fases para todo ciclo. Si se acepta una excepción, debe documentarse su alcance y riesgo por quien corresponda; cumplir una fecha o consumir esfuerzo no demuestra que los resultados necesarios existan.

- Error A: La fecha controla calendario; no acredita condiciones de entrada o salida y puede coincidir con resultados aún insuficientes.
- Error C: Una declaración de porcentaje sin criterios comunes no permite comprobar productos, cobertura o condiciones de avance.
- Error D: El esfuerzo invertido mide recursos consumidos. No demuestra por sí solo resultados aceptables o riesgos tratados.

- [ISTQB: CTFL Syllabus v4.0.1](https://istqb.org/?download_id=3345&sdm_process_download=1) · 1.4.4 trazabilidad (p.20); 2.1 y2.1.1 modelos/ciclos (p.25); 2.1.4 DevOps (pp.26–27); 5.1.3 criterios de entrada/salida (p.49) · versión: v4.0.1, 15-09-2024. PDF oficial leído textualmente el 28-10-2026, sin atribuir inspección de figuras. Las convenciones de pruebas no convierten Definition of Ready en evento o compromiso obligatorio de Scrum · comprobado: 2026-10-28
- [NIST: Secure Software Development Framework v1.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · Introducción y tabla1: PO.4, definir/usar criterios de seguridad; PO.4.1 yPO.4.2 evidencias; integración de prácticas en cualquier SDLC · versión: NIST SP800-218, versión1.1 final de febrero de 2022; ficha CSRC y PDF leídos el 28-10-2026. Recomendación de seguridad, no obligación jurídica general española ni garantía de ausencia de vulnerabilidades · comprobado: 2026-10-28

Partida: `c912a1635d0aa1dd632d5433a7a68577eabfbe96c4d4a078d0a05044d32465fe` · propuesta: `482a7b2f874f039821bb1c1919f00d76d3f323e731d412024d8ca4a233d23c79`

## AI-GSI-B3-T01-016

Decisión: pending_review · acción: revise.

Motivo: Conservar justificación de alternativas y clave A; entregables de etapas próximas como distractores, con fuente pública de viabilidad sin atribuirle una fase MÉTRICA exacta.

### Antes

¿Qué salida se espera de una actividad de viabilidad?

- A. Justificación de alternativas **(correcta)**
- B. Solo código compilado
- C. La destrucción de datos
- D. Un registro de incidencias de producción como único resultado

Explicación: La viabilidad fundamenta la decisión; otros artefactos corresponden a etapas diferentes.

### Propuesta

¿Qué salida se espera de una actividad de viabilidad?

- A. Una comparación justificada de alternativas, restricciones, costes y riesgos. **(correcta)**
- B. Una especificación detallada de todos los componentes listos para programar.
- C. Un procedimiento de despliegue definitivo con toda la configuración productiva.
- D. Un informe final de aceptación de una solución ya implantada en operación.

Explicación: La viabilidad fundamenta si conviene continuar y qué alternativas merecen considerarse según necesidad, restricciones, beneficios, costes y riesgos. Puede recomendar seguir, reformular o no construir. No exige que todo el diseño, despliegue y aceptación estén terminados. GOV.UK discovery ilustra la decisión de avanzar con comprensión del problema y coste/beneficio; no se equipara exactamente a un proceso de otra metodología ni impone sus plazos a cualquier proyecto.

- Error B: El diseño detallado puede producirse después; la viabilidad compara posibilidades y condicionantes antes de comprometer la solución completa.
- Error C: El despliegue definitivo concreta una solución elegida. Exigirlo como resultado inicial confunde fundamentar la decisión con preparar toda su implantación.
- Error D: La aceptación final requiere una solución implantada o evaluada bajo sus criterios; no es el producto característico de estudiar alternativas.

- [GOV.UK Service Manual: How the discovery phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) · Introducción; Define the problem; What to find out; How you know discovery is finished: necesidad, restricciones, alternativas, viabilidad y coste/beneficio · versión: Página actualizada 21-06-2021, consultada 28-10-2026. Discovery ilustra fundamentación previa; no se equipara exactamente a una actividad normativa de MÉTRICA ni se generalizan sus plazos · comprobado: 2026-10-28

Partida: `5f593c8d9d984452c8bf8201a487619e3dbbe5a5350dbac9539a1366999e8a7f` · propuesta: `156d1864dff29a92e110b2357cf01a7ac2adbdd811300b570c36b46bb46986e2`

## AI-GSI-B3-T01-017

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y clave B: tres distractores de entregables próximos ya distinguen bien transición; ampliar explicación de reversión, datos y dependencias.

### Antes

¿Qué debe acompañar al despliegue como control de transición?

- A. Un informe de viabilidad sin procedimiento de transición
- B. Plan de implantación y reversión **(correcta)**
- C. Únicamente la aprobación de requisitos de la fase de análisis
- D. El diseño de arquitectura sin criterios de recuperación

Explicación: Implantar exige preparar transición y recuperación ante problemas.

### Propuesta

¿Qué debe acompañar al despliegue como control de transición?

- A. Un informe de viabilidad sin procedimiento de transición
- B. Plan de implantación y reversión **(correcta)**
- C. Únicamente la aprobación de requisitos de la fase de análisis
- D. El diseño de arquitectura sin criterios de recuperación

Explicación: La transición al entorno de uso requiere preparar implantación y recuperación si los resultados no son aceptables. Deben conocerse responsables, pasos, comprobaciones y condiciones para detener o revertir, según el riesgo. La reversión puede requerir tratar datos y dependencias: recuperar una versión binaria no garantiza deshacer toda migración. DORA respalda despliegues reproducibles y pruebas; SRE muestra evaluación y rollback. No se impone una técnica como canary o blue/green a cualquier aplicación.

- Error A: La viabilidad justifica una decisión anterior; sin procedimiento no prepara la transición operativa ni la recuperación ante fallos.
- Error C: La aprobación de requisitos aporta una base, pero no define la ejecución de la implantación, sus comprobaciones o reversión.
- Error D: El diseño describe la solución; sin criterios y procedimientos de recuperación no resuelve el control de transición preguntado.

- [DORA: Deployment automation](https://dora.dev/capabilities/deployment-automation/) · Entradas del proceso; despliegue, configuración y smoke test; How to implement deployment automation: mismos paquetes, configuración y estado reproducible; pitfalls · versión: Documentación viva consultada 28-10-2026. Automatizar un proceso frágil no acredita su corrección; ejemplos de herramientas no son requisitos para esta aplicación · comprobado: 2026-10-28
- [Google: The Site Reliability Workbook, Canarying Releases](https://sre.google/workbook/canarying-releases/) · Capítulo16: exposición gradual, evaluación y rollback; contraste despliegue global/canario; Other Deployment Strategies, blue/green · versión: Libro de 2018, capítulo público consultado 28-10-2026. Caso de servicios de Google, sin imponer canary o blue/green ni prometer reversión automática de cualquier cambio de datos · comprobado: 2026-10-28

Partida: `b46ac7ba8d22423be850b4ad802e8be617e4cd48bcc3eeb760ae84fdcd1210e1` · propuesta: `1bd571ce1ede59a50375500dc62d052f984b18f6edf1823dca085d91c1cda73b`

## AI-GSI-B3-T01-018

Decisión: pending_review · acción: revise.

Motivo: Conservar impacto/cobertura y clave C; microcaso de requisito modificado con vínculos reales, sin afirmar que un enlace por sí mismo demuestre cumplimiento.

### Antes

¿Para qué sirve enlazar necesidad, requisito, diseño, implementación, prueba y versión?

- A. Eliminar toda documentación
- B. Sustituir pruebas por nombres de archivos
- C. Analizar impacto y demostrar cobertura **(correcta)**
- D. Garantizar que nunca cambiarán requisitos

Explicación: La trazabilidad permite seguir una necesidad hasta su evidencia y entrega.

### Propuesta

Cambia un requisito. ¿Para qué ayuda enlazarlo con necesidad, diseño, código, pruebas y versión desplegada?

- A. Determinar quién escribió más archivos y usarlo como medida de valor funcional.
- B. Sustituir las pruebas afectadas por una lista de documentos con nombres similares.
- C. Localizar efectos del cambio y comprobar qué requisitos cubren las verificaciones. **(correcta)**
- D. Congelar los requisitos enlazados para que no puedan volver a modificarse.

Explicación: La trazabilidad enlaza elementos relacionados y ayuda a recorrer el impacto de un cambio y revisar la cobertura prevista o demostrada por verificaciones. Debe mantenerse y referirse a versiones y resultados: un enlace a una prueba no demuestra que esta exista, sea suficiente o haya pasado. NASA ilustra vínculos bidireccionales entre requisitos, diseño, código y verificación; sus clases de aplicación son propias de ese organismo. Los enlaces apoyan evaluación y cambios, no inmovilidad del requisito.

- Error A: La autoría o cantidad de archivos no indica qué necesidad satisface un cambio ni qué pruebas o componentes deben revisarse.
- Error B: Coincidir nombres no acredita relación semántica ni resultados de prueba; la trazabilidad debe representar vínculos reales y no sustituye ejecutar verificaciones.
- Error D: Trazar permite gestionar cambios con conocimiento de su efecto. No convierte los requisitos en inmodificables.

- [NASA: SWE-052 Bidirectional Traceability](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695427/SWE-052%2B-%2BBidirectional%2BTraceability) · §1 requisito3.12.1 e historial; §2 Rationale, Enables Impact Analysis; §8 Objective Evidence: vínculos requisitos/diseño/código/verificación y configuración · versión: SW Engineering Handbook VerD, referencia NPR7150.2D. Página pública leída 28-10-2026; aplicabilidad por clases propia de NASA, sin convertirla en requisito universal o certificar cobertura por solo existir enlaces · comprobado: 2026-10-28
- [ISTQB: CTFL Syllabus v4.0.1](https://istqb.org/?download_id=3345&sdm_process_download=1) · 1.4.4 trazabilidad (p.20); 2.1 y2.1.1 modelos/ciclos (p.25); 2.1.4 DevOps (pp.26–27); 5.1.3 criterios de entrada/salida (p.49) · versión: v4.0.1, 15-09-2024. PDF oficial leído textualmente el 28-10-2026, sin atribuir inspección de figuras. Las convenciones de pruebas no convierten Definition of Ready en evento o compromiso obligatorio de Scrum · comprobado: 2026-10-28

Partida: `c33d219521d0326e51cdb4dda61825fdb9bdbc0b890de710be3782ba6dc9ea69` · propuesta: `f1136551bc17bb7f970d84794d80ce693736d894d10629b00a263784ad25f049`

## AI-GSI-B3-T01-019

Decisión: pending_review · acción: revise.

Motivo: Conservar espiral/prototipos frente a riesgo técnico y clave D; sustituir referencia a tabla por incertidumbre de rendimiento explícita y decisiones cercanas.

### Antes

Con riesgo técnico elevado, ¿qué enfoque resulta razonable según la tabla del tema?

- A. Una cascada rígida sin validación intermedia como única opción
- B. Retirada inmediata de cualquier alternativa
- C. Ignorar incertidumbres hasta producción
- D. Espiral y prototipos técnicos **(correcta)**

Explicación: Explorar riesgos de forma explícita ayuda a decidir antes de comprometer toda la solución.

### Propuesta

No se sabe si una tecnología alcanzará el rendimiento necesario y aún no se ha comprometido toda la solución. ¿Qué enfoque resulta razonable?

- A. Completar toda la solución antes de contrastar la capacidad de la tecnología.
- B. Priorizar el número de funciones entregadas sin explorar la restricción técnica.
- C. Fijar el diseño detallado y tratar el rendimiento al finalizar la construcción.
- D. Guiar ciclos por riesgos y usar prototipos técnicos para contrastar alternativas. **(correcta)**

Explicación: Con incertidumbre técnica decisiva conviene obtener evidencia antes de comprometer toda la solución. La espiral orienta ciclos y esfuerzo por riesgo; prototipos, simulaciones o pruebas de concepto pueden contrastar rendimiento y alternativas. No demuestra que una única metodología sea obligatoria ni que cada riesgo deba resolverse con un prototipo. La exploración tiene coste y debe tener objetivos y criterios de decisión, sin dar por productivo el código de prueba.

- Error A: Completar antes de contrastar expone una inversión mayor al riesgo técnico que ya se conoce como decisivo.
- Error B: Entregar más funciones no demuestra que la restricción técnica se pueda cumplir; falta explorar el riesgo que condiciona la solución.
- Error C: Congelar diseño y aplazar rendimiento puede fijar compromisos inviables antes de contar con evidencia de la tecnología.

- [Barry Boehm, edición Wilfred J. Hansen: Spiral Development](https://www.sei.cmu.edu/documents/5439/2000_003_001_13655.pdf) · Resumen; §2.1 compatibilidad de requisitos, planes, arquitectura, diseño y componentes, pp.6–8; §2.2 Spiral Invariant2, pp.9–10; §2.3 esfuerzo guiado por riesgo, p.11; técnicas de exploración · versión: CMU/SEI-2000-SR-008, julio de 2000. PDF leído textualmente, no solo índice; no exige prototipar todo riesgo ni prescribe un modelo único para cualquier proyecto · comprobado: 2026-10-28

Partida: `712668b709554583e61c2597cbf396fab31ec31bccceddeac4f6ee3729a35792` · propuesta: `821dea207d953e7410f840837e027b6c5f9e02df0f94a39061703dcbcb6de11b`

## AI-GSI-B3-T01-020

Decisión: pending_review · acción: revise.

Motivo: Conservar deuda y gobernanza en CI/CD y clave C; microcaso con integración, pruebas y trazabilidad presentes para aislar el riesgo sin inventar una incompatibilidad de la automatización.

### Antes

En un producto evolutivo con CI/CD, ¿qué riesgo conviene vigilar?

- A. Imposibilidad de automatizar pruebas
- B. Prohibición de entregas frecuentes
- C. Deuda técnica y gobernanza **(correcta)**
- D. Ausencia necesaria de operación

Explicación: La entrega continua requiere cuidar calidad acumulada y gobierno de cambios.

### Propuesta

Un producto con CI/CD integra cambios trazables y supera sus pruebas automáticas, pero acumula atajos de diseño y excepciones sin responsable. ¿Qué riesgo destaca?

- A. Falta de comprobaciones por no ejecutar ninguna prueba automática del cambio.
- B. Falta de trazabilidad por desconocer qué cambios se publican en cada versión.
- C. Acumulación de deuda técnica y debilidad en el gobierno de los cambios. **(correcta)**
- D. Falta de integración por no combinar cambios en un producto que pueda probarse.

Explicación: Los atajos de diseño pueden encarecer evolución y mantenimiento aunque las pruebas actuales pasen; si las excepciones no tienen responsable, también falla su gobierno. CI/CD facilita integración, evidencia y entrega, pero no elimina por sí solo deuda arquitectónica o decisiones pendientes. La deuda puede ser deliberada si se conoce su coste y plan de gestión: no equivale a todo defecto ni es consecuencia inevitable de entregar con frecuencia. El caso identifica este riesgo concreto, sin afirmar que no existan otros.

- Error A: El caso indica que se ejecutan pruebas automáticas. Su resultado no descarta deuda, pero no permite diagnosticar ausencia de toda comprobación.
- Error B: Se declara que los cambios publicados son trazables; el problema descrito es el coste de atajos y las excepciones sin responsable.
- Error D: Los cambios se integran y prueban en el producto. Ese dato no resuelve diseño o gobierno, pero contradice la ausencia de integración propuesta.

- [SEI: Managing Technical Debt with Data-Driven Analysis](https://www.sei.cmu.edu/projects/managing-technical-debt-with-data-driven-analysis/) · Technical Debt: A Compounding Problem; diseño y arquitectura, coste de evolución; Our Solution: Measure It and Manage It · versión: Proyecto creado septiembre de 2017 y actualizado febrero de 2022 según cabecera. Leído 28-10-2026; la deuda puede gestionarse como inversión, no es consecuencia inevitable de CI/CD ni equivale a cualquier defecto · comprobado: 2026-10-28
- [DORA: Continuous delivery](https://dora.dev/capabilities/continuous-delivery/) · Definición; preguntas de capacidad de entrega; distinción delivery/deployment; Implementing continuous delivery: pruebas, seguridad, integración y feedback · versión: Documentación viva consultada 28-10-2026. Preparar para liberar bajo demanda no equivale a desplegar automáticamente todo cambio; no se instala una cadena CI/CD · comprobado: 2026-10-28
- [NIST: Secure Software Development Framework v1.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · Introducción y tabla1: PO.4, definir/usar criterios de seguridad; PO.4.1 yPO.4.2 evidencias; integración de prácticas en cualquier SDLC · versión: NIST SP800-218, versión1.1 final de febrero de 2022; ficha CSRC y PDF leídos el 28-10-2026. Recomendación de seguridad, no obligación jurídica general española ni garantía de ausencia de vulnerabilidades · comprobado: 2026-10-28

Partida: `2bcb421cd3d4e1fb0c910247bf69b3966735997442513ce062b863d45a025208` · propuesta: `c963ac6063215d4d45fe77c4c34b70e4a6ffeb411b262172257289140f8ffa73`

## AI-GSI-B3-T01-007

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de arquitectura/calidad y clave B; contrastar aprendizaje, verificabilidad y evolución sin prometer mantenibilidad por el solo prototipado.

### Antes

¿Qué riesgo existe al convertir directamente un prototipo exploratorio en producción?

- A. Eliminar toda deuda técnica
- B. Arrastrar insuficiencias de arquitectura y calidad **(correcta)**
- C. Evitar automáticamente requisitos de seguridad
- D. Garantizar mantenibilidad superior

Explicación: Un prototipo puede priorizar aprendizaje sobre robustez y requiere evaluación antes de convertirse en producto.

### Propuesta

¿Qué riesgo existe al convertir directamente un prototipo exploratorio en producción?

- A. Que validar la interfaz invalide los requisitos aprendidos durante la exploración.
- B. Que se arrastren carencias de arquitectura y calidad no evaluadas para producción. **(correcta)**
- C. Que las pruebas posteriores ya no puedan aplicarse al código que se ha explorado.
- D. Que el diseño deba congelarse para conservar el conocimiento obtenido con la demo.

Explicación: Un prototipo exploratorio busca aprendizaje y puede no haber sido diseñado o verificado para las exigencias productivas. Convertirlo directamente puede trasladar carencias de arquitectura, seguridad y mantenibilidad; debe evaluarse la adecuación del código y decidir qué conservar o rehacer. Esto no invalida lo aprendido ni impide mejorar, probar o revisar después. Los atajos requieren gestión: que una demo funcione no acredita todos los atributos de calidad del producto.

- Error A: Validar una interfaz puede aclarar requisitos y conservar conocimiento útil; no invalida automáticamente lo aprendido.
- Error C: El código puede someterse a pruebas posteriores. El riesgo es usarlo sin evaluación suficiente, no una imposibilidad de verificarlo por haber sido prototipo.
- Error D: Conservar conocimiento no exige congelar diseño; puede requerir cambiar arquitectura o reconstruir código para las necesidades productivas.

- [Barry Boehm, edición Wilfred J. Hansen: Spiral Development](https://www.sei.cmu.edu/documents/5439/2000_003_001_13655.pdf) · Resumen; §2.1 compatibilidad de requisitos, planes, arquitectura, diseño y componentes, pp.6–8; §2.2 Spiral Invariant2, pp.9–10; §2.3 esfuerzo guiado por riesgo, p.11; técnicas de exploración · versión: CMU/SEI-2000-SR-008, julio de 2000. PDF leído textualmente, no solo índice; no exige prototipar todo riesgo ni prescribe un modelo único para cualquier proyecto · comprobado: 2026-10-28
- [SEI: Managing Technical Debt with Data-Driven Analysis](https://www.sei.cmu.edu/projects/managing-technical-debt-with-data-driven-analysis/) · Technical Debt: A Compounding Problem; diseño y arquitectura, coste de evolución; Our Solution: Measure It and Manage It · versión: Proyecto creado septiembre de 2017 y actualizado febrero de 2022 según cabecera. Leído 28-10-2026; la deuda puede gestionarse como inversión, no es consecuencia inevitable de CI/CD ni equivale a cualquier defecto · comprobado: 2026-10-28
- [NIST: Secure Software Development Framework v1.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · Introducción y tabla1: PO.4, definir/usar criterios de seguridad; PO.4.1 yPO.4.2 evidencias; integración de prácticas en cualquier SDLC · versión: NIST SP800-218, versión1.1 final de febrero de 2022; ficha CSRC y PDF leídos el 28-10-2026. Recomendación de seguridad, no obligación jurídica general española ni garantía de ausencia de vulnerabilidades · comprobado: 2026-10-28

Partida: `58c0c2b5d5e760fe55c004f889900d623b53bca73eff6f1e98b487ae73ce7ea8` · propuesta: `4aab7f41290cbcf638f48728d661873bb680bb0b8770f0c20f66e2123b06e0c1`

## AI-GSI-B3-T01-011

Decisión: pending_review · acción: revise.

Motivo: Conservar ciclos, feedback y automatización y clave A; distinguir Agile y DevOps sin atribuir al manifiesto una herramienta o suprimir documentación.

### Antes

¿Qué aportan Agile y DevOps al ciclo de vida según el tema?

- A. Ciclos más cortos, feedback y automatización **(correcta)**
- B. Supresión de mantenimiento
- C. Ausencia de requisitos
- D. Prohibición de documentación

Explicación: Estos enfoques cambian la frecuencia y coordinación de actividades, conservando controles de calidad y seguridad.

### Propuesta

¿Qué aportación al ciclo de vida caracteriza a Agile y DevOps?

- A. Acortar ciclos de feedback y coordinar trabajo con automatización pertinente. **(correcta)**
- B. Concentrar pruebas al final para que cada especialidad trabaje de forma aislada.
- C. Mantener la aprobación inicial sin revisar prioridades durante la evolución.
- D. Separar desarrollo y operación mediante entregas sin información de retorno.

Explicación: Agile favorece entrega frecuente, aprendizaje y adaptación; DevOps añade colaboración entre desarrollo, pruebas y operación, apoyada por prácticas de automatización. Comparten orientación a feedback y mejora, pero no son sinónimos ni eliminan el ciclo de vida o los controles. El manifiesto no prescribe una plataforma CI/CD; la automatización se concreta mediante prácticas apropiadas. Documentar, mantener y tratar calidad y seguridad sigue siendo necesario según contexto.

- Error B: Aplazar pruebas y aislar especialidades retrasa feedback; contradice la coordinación y aprendizaje que se están evaluando.
- Error C: Conservar una aprobación sin revisar prioridades no incorpora cambios y aprendizaje durante el ciclo.
- Error D: Entregar sin retorno entre desarrollo y operación debilita la colaboración y el feedback característicos de DevOps.

- [Manifesto for Agile Software Development: Principles](https://agilemanifesto.org/principles.html) · Entrega temprana/frecuente; cambios de requisitos; software funcionando como medida de progreso; excelencia técnica, diseño y reflexión · versión: Principios del manifiesto de 2001, consultados 28-10-2026. No eliminan planificación, documentación, seguridad o mantenimiento; no se exige que todo ciclo implique despliegue productivo · comprobado: 2026-10-28
- [DORA: Continuous delivery](https://dora.dev/capabilities/continuous-delivery/) · Definición; preguntas de capacidad de entrega; distinción delivery/deployment; Implementing continuous delivery: pruebas, seguridad, integración y feedback · versión: Documentación viva consultada 28-10-2026. Preparar para liberar bajo demanda no equivale a desplegar automáticamente todo cambio; no se instala una cadena CI/CD · comprobado: 2026-10-28
- [ISTQB: CTFL Syllabus v4.0.1](https://istqb.org/?download_id=3345&sdm_process_download=1) · 1.4.4 trazabilidad (p.20); 2.1 y2.1.1 modelos/ciclos (p.25); 2.1.4 DevOps (pp.26–27); 5.1.3 criterios de entrada/salida (p.49) · versión: v4.0.1, 15-09-2024. PDF oficial leído textualmente el 28-10-2026, sin atribuir inspección de figuras. Las convenciones de pruebas no convierten Definition of Ready en evento o compromiso obligatorio de Scrum · comprobado: 2026-10-28

Partida: `fc5ae8f7283cc3efea41c08c3d06ca34232ac8cd87b0245f0998e334b4dc6c65` · propuesta: `3964276e5ef1e9f31049dce90e10aa2456fa954e530db03c5ec932f91f37a0ef`

## AI-GSI-B3-T02-001

Decisión: pending_review · acción: revise.

Motivo: Conservar evidencia verificable y clave B; explicitar utilidad auxiliar de horas/porcentajes cuando tienen definición, evitando descartarlos por completo.

### Antes

¿Qué evidencia es mejor para controlar progreso de desarrollo?

- A. Porcentajes declarados sin criterio común
- B. Entregables verificables frente a porcentajes subjetivos **(correcta)**
- C. Horas consumidas como equivalencia automática de valor
- D. Tareas abiertas contadas como terminadas

Explicación: El seguimiento debe observar resultados y criterios, no solo declaraciones.

### Propuesta

¿Qué evidencia es mejor para controlar progreso de desarrollo?

- A. El porcentaje que declara cada equipo sin una definición compartida de terminado.
- B. Los entregables comprobados frente a criterios de aceptación y resultados observables. **(correcta)**
- C. Las horas imputadas al proyecto tomadas como proporción directa de valor entregado.
- D. La cantidad de tareas iniciadas presentada como cantidad de resultados terminados.

Explicación: Controlar progreso requiere observar resultados y compararlos con criterios acordados, diferenciando trabajo iniciado, esfuerzo y entregables terminados. Los porcentajes u horas pueden servir como datos auxiliares si se define qué significan; no equivalen automáticamente a valor o cumplimiento. El manifiesto destaca software funcionando y Scrum aporta transparencia y Definition of Done. También deben considerarse riesgos y resultados no funcionales, sin reducir toda gestión a una sola métrica o a una demo.

- Error A: Sin definición común el mismo porcentaje puede significar cosas distintas y no permite verificar finalización o aceptación.
- Error C: El esfuerzo consumido no demuestra que exista valor entregado; puede incluir retrabajo, aprendizaje o tareas aún incompletas.
- Error D: Comenzar tareas no acredita terminarlas. Confundir estados oculta trabajo en curso y dificulta conocer resultados reales.

- [Manifesto for Agile Software Development: Principles](https://agilemanifesto.org/principles.html) · Entrega temprana/frecuente; cambios de requisitos; software funcionando como medida de progreso; excelencia técnica, diseño y reflexión · versión: Principios del manifiesto de 2001, consultados 28-10-2026. No eliminan planificación, documentación, seguridad o mantenimiento; no se exige que todo ciclo implique despliegue productivo · comprobado: 2026-10-28
- [Schwaber y Sutherland: The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html) · Scrum Definition y Theory; Scrum Team, Developers, Product Owner y Scrum Master; Scrum Events; Scrum Artifacts y sus compromisos; End Note · versión: Edición noviembre de 2020, versión HTML declarada equivalente al PDF; consultada 28-10-2026. Responsabilidades, eventos, artefactos y compromisos son categorías distintas; refinamiento no es evento formal ni Definition of Ready un compromiso obligatorio del marco · comprobado: 2026-10-28

Partida: `303058ba17de017845ac0e539b852d208804c7e6bc407c600debdfb1b226dab9` · propuesta: `07f68e222659dfdce959671b2ca100c6674696b5b5f5f20bce698430004ff1bb`

## AI-GSI-B3-T02-003

Decisión: pending_review · acción: revise.

Motivo: Conservar backlog evolutivo y planificación progresiva y clave C; decisiones de planificación próximas con límites de adaptación y objetivos.

### Antes

¿Qué caracteriza la planificación adaptativa descrita?

- A. Alcance necesariamente inmutable
- B. Prohibición de gestionar cambios
- C. Evolución priorizada del backlog y planificación progresiva **(correcta)**
- D. Ausencia de toda planificación

Explicación: La adaptación incorpora cambios y feedback manteniendo planificación.

### Propuesta

¿Qué caracteriza la planificación adaptativa del desarrollo?

- A. Mantener el alcance inicial y absorber lo aprendido sin cambiar el orden del trabajo.
- B. Reabrir toda decisión desde cero en cada ciclo sin conservar un objetivo de producto.
- C. Reordenar el backlog con feedback y concretar progresivamente el trabajo previsto. **(correcta)**
- D. Detallar todo el trabajo al inicio y usar las revisiones solo para confirmar fechas.

Explicación: Planificar adaptativamente conserva objetivos y decisiones, pero incorpora aprendizaje para ordenar prioridades y concretar trabajo conforme hay información suficiente. No es ausencia de planificación ni autorización para cambiar arbitrariamente. Scrum ilustra un backlog emergente y ordenado, junto a metas de producto y Sprint. Dentro de un Sprint, ajustar alcance no debe poner en peligro su objetivo. Es un ejemplo del enfoque, sin afirmar que todo modelo adaptativo deba adoptar Scrum.

- Error A: Mantener siempre el orden y alcance iniciales ignora cambios de valor o conocimiento que justifican replanificar.
- Error B: Adaptar no exige reiniciar todas las decisiones o abandonar objetivos; se aprovecha evidencia y se mantiene dirección.
- Error D: Detallar todo y limitar revisión a fechas no incorpora aprendizaje al contenido y prioridad del trabajo.

- [Schwaber y Sutherland: The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html) · Scrum Definition y Theory; Scrum Team, Developers, Product Owner y Scrum Master; Scrum Events; Scrum Artifacts y sus compromisos; End Note · versión: Edición noviembre de 2020, versión HTML declarada equivalente al PDF; consultada 28-10-2026. Responsabilidades, eventos, artefactos y compromisos son categorías distintas; refinamiento no es evento formal ni Definition of Ready un compromiso obligatorio del marco · comprobado: 2026-10-28
- [Manifesto for Agile Software Development: Principles](https://agilemanifesto.org/principles.html) · Entrega temprana/frecuente; cambios de requisitos; software funcionando como medida de progreso; excelencia técnica, diseño y reflexión · versión: Principios del manifiesto de 2001, consultados 28-10-2026. No eliminan planificación, documentación, seguridad o mantenimiento; no se exige que todo ciclo implique despliegue productivo · comprobado: 2026-10-28

Partida: `1953b1fcb570f383927811504c0c682c6b5998ee2039e3bf40789b6c00666878` · propuesta: `1dc06b714bc05c84f26117299d8da6e9cefe41f3bc1ae886b416284c53c8f625`

## AI-GSI-B3-T02-005

Decisión: pending_review · acción: revise.

Motivo: Conservar tres responsabilidades Scrum y clave D; tripletas próximas con una sustitución identificable en lugar de profesiones o programas ajenos.

### Antes

¿Qué conjunto corresponde a las responsabilidades de Scrum?

- A. Comité de red y operador de impresión
- B. Analista, compilador y navegador
- C. Director de CPD, notario y registrador
- D. Product Owner, Scrum Master y Developers **(correcta)**

Explicación: Scrum distingue esas responsabilidades sin imponer una arquitectura o lenguaje.

### Propuesta

Según Scrum Guide 2020, ¿qué conjunto recoge sus tres responsabilidades específicas?

- A. Project Manager, Scrum Master y Developers.
- B. Product Owner, jefe de proyecto y Developers.
- C. Product Owner, Scrum Master y comité de dirección.
- D. Product Owner, Scrum Master y Developers. **(correcta)**

Explicación: La guía de 2020 define tres responsabilidades específicas dentro del Scrum Team: Product Owner, Scrum Master y Developers. Un proyecto puede contar con otras funciones organizativas, pero no sustituyen esas responsabilidades del marco. Developers no se limita a una especialidad de programación: las habilidades dependen del trabajo necesario para el incremento. Se evita confundir colaboración de interesados o gestión organizativa con una responsabilidad Scrum adicional.

- Error A: Project Manager sustituye aquí a Product Owner; ese cargo no es una de las tres responsabilidades definidas por Scrum.
- Error B: Un jefe de proyecto no sustituye la responsabilidad Scrum Master en la definición del marco.
- Error C: Un comité puede intervenir como interesado, pero no sustituye a Developers; Product Owner es una persona, no un comité.

- [Schwaber y Sutherland: The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html) · Scrum Definition y Theory; Scrum Team, Developers, Product Owner y Scrum Master; Scrum Events; Scrum Artifacts y sus compromisos; End Note · versión: Edición noviembre de 2020, versión HTML declarada equivalente al PDF; consultada 28-10-2026. Responsabilidades, eventos, artefactos y compromisos son categorías distintas; refinamiento no es evento formal ni Definition of Ready un compromiso obligatorio del marco · comprobado: 2026-10-28

Partida: `69e1fc5bbd7d9578154acafd2bd6ba2cd2e746db2a22fafe775ed162c38b9b5f` · propuesta: `e323876566a9f6ed3e6395122422bb08ff83be60d7fd36d34d35989778de802c`

## AI-GSI-B3-T02-006

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación de evento y clave C; distractores de conceptos Scrum cercanos, sin cambiar la pregunta a evaluar solo la finalidad de la retrospectiva.

### Antes

¿Cuál es un evento de Scrum?

- A. Compilación nativa
- B. Auditoría ENS trimestral
- C. Sprint Retrospective **(correcta)**
- D. Daily Deployment obligatorio

Explicación: Los eventos incluyen Planning, Daily, Review y Retrospective dentro del Sprint.

### Propuesta

¿Cuál es un evento de Scrum?

- A. Product Goal.
- B. Product Backlog refinement.
- C. Sprint Retrospective. **(correcta)**
- D. Definition of Done.

Explicación: Sprint Retrospective es un evento formal de inspección y mejora de la calidad y eficacia del trabajo. Scrum distingue eventos de actividades, artefactos y compromisos. Refinar el Product Backlog es una actividad continua necesaria, pero no un evento formal adicional. Product Goal y Definition of Done son compromisos ligados a artefactos. La distinción no impide organizar reuniones de refinamiento cuando resulten útiles.

- Error A: Product Goal es el compromiso asociado al Product Backlog; orienta el producto y no es un evento formal.
- Error B: El refinamiento es una actividad continua. Puede organizarse en reuniones, pero Scrum no lo define como uno de sus eventos formales.
- Error D: Definition of Done es el compromiso de calidad asociado al Increment; describe un estado, no un evento.

- [Schwaber y Sutherland: The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html) · Scrum Definition y Theory; Scrum Team, Developers, Product Owner y Scrum Master; Scrum Events; Scrum Artifacts y sus compromisos; End Note · versión: Edición noviembre de 2020, versión HTML declarada equivalente al PDF; consultada 28-10-2026. Responsabilidades, eventos, artefactos y compromisos son categorías distintas; refinamiento no es evento formal ni Definition of Ready un compromiso obligatorio del marco · comprobado: 2026-10-28

Partida: `214d94ec4334218b0f6b46681e93f28aa082c9eea44f64dac66830620e92cce7` · propuesta: `b9cfc90dcd5bdede4dc87cd7fa0706dcb8ebed44f2196a1addd3065a748f82c3`

## AI-GSI-B3-T02-007

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación de artefacto y clave D; distractores cercanos de evento, compromiso y responsabilidad, sin introducir una Definition of Ready obligatoria.

### Antes

¿Cuál es un artefacto de Scrum?

- A. Imagen de disco forense
- B. Diagrama de cableado obligatorio
- C. Acta notarial
- D. Increment **(correcta)**

Explicación: Product Backlog, Sprint Backlog e Increment son artefactos del marco.

### Propuesta

¿Cuál es un artefacto de Scrum?

- A. Sprint Review.
- B. Product Goal.
- C. Scrum Master.
- D. Increment. **(correcta)**

Explicación: Increment es uno de los tres artefactos formales, junto con Product Backlog y Sprint Backlog. Es un resultado usable, aditivo y verificado conforme a Definition of Done. La guía distingue artefactos de eventos, responsabilidades y compromisos asociados. Puede haber varios incrementos dentro del Sprint y liberar valor antes de la Review; esta no debe tratarse como una barrera obligatoria de publicación.

- Error A: Sprint Review es un evento para inspeccionar resultados y adaptar, no uno de los tres artefactos.
- Error B: Product Goal es el compromiso del Product Backlog; no constituye un cuarto artefacto formal.
- Error C: Scrum Master es una responsabilidad específica del Scrum Team, no un producto de trabajo o artefacto.

- [Schwaber y Sutherland: The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html) · Scrum Definition y Theory; Scrum Team, Developers, Product Owner y Scrum Master; Scrum Events; Scrum Artifacts y sus compromisos; End Note · versión: Edición noviembre de 2020, versión HTML declarada equivalente al PDF; consultada 28-10-2026. Responsabilidades, eventos, artefactos y compromisos son categorías distintas; refinamiento no es evento formal ni Definition of Ready un compromiso obligatorio del marco · comprobado: 2026-10-28

Partida: `2d02734da99158449061ba817daf4ef23bd7182e3a9bc94958873ed1cea2863c` · propuesta: `a321127622102c17e929277f31d43e38891c4d20b6a10f84ee65de067f4a9fe0`

## AI-GSI-B3-T02-008

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y clave B: los tres distractores ya son prescripciones tecnológicas plausibles; justificar longitud de la negación necesaria sin rellenar alternativas.

### Antes

Adoptar Scrum exige utilizar…

- A. Una plataforma de gestión determinada
- B. Ningún lenguaje o arquitectura concretos por prescripción del marco **(correcta)**
- C. Una arquitectura de microservicios obligatoria
- D. Un lenguaje orientado a objetos concreto

Explicación: Scrum organiza trabajo y producto; no prescribe tecnología.

### Propuesta

Adoptar Scrum exige utilizar…

- A. Una plataforma de gestión determinada
- B. Ningún lenguaje o arquitectura concretos por prescripción del marco **(correcta)**
- C. Una arquitectura de microservicios obligatoria
- D. Un lenguaje orientado a objetos concreto

Explicación: Scrum define un marco de responsabilidades, eventos, artefactos y reglas de interacción, no un catálogo obligatorio de herramientas, lenguajes o estilos arquitectónicos. Las decisiones técnicas deben adecuarse al producto y cumplir los estándares aplicables. Que una organización exija una plataforma o tecnología por otras razones no convierte esa exigencia en prescripción de Scrum. Su carácter incompleto permite incorporar prácticas apropiadas sin eliminar los elementos del marco.

- Error A: Puede elegirse o exigirse una plataforma por decisión organizativa, pero Scrum no prescribe un producto de gestión determinado.
- Error C: Microservicios es una elección de arquitectura que debe justificarse según necesidades; no es condición de adopción del marco.
- Error D: Scrum no impone un lenguaje concreto ni exige que sea orientado a objetos; el dominio y las necesidades guían esa elección.

- [Schwaber y Sutherland: The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html) · Scrum Definition y Theory; Scrum Team, Developers, Product Owner y Scrum Master; Scrum Events; Scrum Artifacts y sus compromisos; End Note · versión: Edición noviembre de 2020, versión HTML declarada equivalente al PDF; consultada 28-10-2026. Responsabilidades, eventos, artefactos y compromisos son categorías distintas; refinamiento no es evento formal ni Definition of Ready un compromiso obligatorio del marco · comprobado: 2026-10-28

Partida: `574488517faca01b624d011d58afae0f715ee91b96ac1c9cf41ba85bf28db199` · propuesta: `c6d3b968b8211d9124691f3a4041bd689b7000c490cfad438ad3bc33f7051b98`
