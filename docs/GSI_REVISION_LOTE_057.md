# GSI-EDITORIAL-057 — revisión propuesta

Preparado: 2026-10-29. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `962a9707d5b8551525a5b46ac1860874413025f64ed40a72d70d19a2e1605a3e`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T07-006

Decisión: pending_review · acción: revise.

Motivo: Conservar coste relativo de E2E y clave D; distinguir orientación, evidencia entre niveles y excepciones sin cuotas.

### Antes

¿Por qué la pirámide suele limitar el número de E2E respecto a unitarias?

- A. Las unitarias prueban por sí solas toda integración
- B. Las E2E nunca aportan valor
- C. Toda aplicación exige exactamente igual distribución
- D. Las E2E suelen ser más costosas y lentas **(correcta)**

Explicación: La estrategia equilibra coste y cobertura según contexto.

### Propuesta

¿Por qué la pirámide suele limitar el número de E2E respecto a unitarias?

- A. Las unitarias sustituyen comprobar los acuerdos entre componentes reales.
- B. Las pruebas E2E dejan de aportar evidencia cuando existen pruebas de bajo nivel.
- C. La misma proporción entre niveles se aplica sin analizar el producto o sus riesgos.
- D. Los flujos completos suelen costar más de ejecutar, diagnosticar y mantener. **(correcta)**

Explicación: La pirámide orienta a equilibrar evidencia y coste: probar flujos completos suele requerir más preparación y diagnóstico y puede ser más lento o frágil. No es una ley sobre todas las herramientas o productos. Las E2E siguen siendo útiles para riesgos que los niveles inferiores no cubren; la mezcla se adapta al contexto y a la fiabilidad real de la suite.

- Error A: Aislar unidades no comprueba por sí solo que los componentes reales acuerden formatos, protocolos o configuración.
- Error B: Las E2E aportan evidencia sobre recorridos completos y colaboración real; su coste no las vuelve inútiles.
- Error C: La proporción es una decisión contextual. Una cuota fija ignora costes, arquitectura y riesgos concretos.

- [Martin Fowler: Test Pyramid](https://martinfowler.com/bliki/TestPyramid.html) · Equilibrio entre pruebas de bajo nivel y de flujo completo; costes, fragilidad y excepciones en nota 2 · versión: Artículo de 01-05-2012 leído el 29-10-2026. Orientación contextual, sin cuota universal o afirmación de que toda E2E sea lenta · comprobado: 2026-10-29

Partida: `8aa03678e9e2707906e2b38456263c46d7ce99d25b708045b9272759d6a4c83f` · propuesta: `a96504a8cff1c9c77942db4270783c22b53bec1eaf2273824a10109b196d941c`

## AI-GSI-B3-T07-007

Decisión: pending_review · acción: revise.

Motivo: Conservar valores límite y clave B; microcaso entero con extremos inclusivos explícitos.

### Antes

Probar valores próximos al mínimo y máximo permitido utiliza…

- A. Cobertura de sentencias
- B. Análisis de valores límite **(correcta)**
- C. Análisis de licencias
- D. Ordenación de logs

Explicación: Los límites son puntos donde suelen concentrarse errores de validación.

### Propuesta

Un campo admite enteros de 18 a 65, ambos incluidos. Se prueban 17, 18, 19, 64, 65 y 66. ¿Qué técnica centra estos casos en las fronteras?

- A. Partición de equivalencia con un representante interior de cada clase.
- B. Análisis de valores límite con vecinos de ambos extremos. **(correcta)**
- C. Pruebas de transición entre estados del flujo de trabajo.
- D. Tabla de decisión para combinaciones de varias condiciones.

Explicación: Se ejercitan las fronteras 18 y 65 y sus vecinos inmediatos, adecuados para detectar errores de inclusión o desplazamiento del intervalo. Es análisis de valores límite sobre un dominio ordenado. Elegir un representante interior por clase, modelar estados o combinar condiciones tiene otros objetivos.

- Error A: Un representante interior no describe concentrar los casos en cada frontera y sus vecinos.
- Error C: El ejemplo no recorre estados y eventos; cambia el valor de una entrada ordenada.
- Error D: No se combinan condiciones independientes para decidir acciones; se examinan fronteras numéricas.

- [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/?download_id=3345&sdm_process_download=1) · 4.2.2 valores límite; 4.2.3 tablas de decisión; 2.2.3 confirmación/regresión; 5.1.3 criterios de salida; 5.5 severidad y prioridad · versión: v4.0.1 de 15-09-2024, PDF de 78 páginas leído textualmente el 29-10-2026. Se conservan técnicas y distinciones del temario; no se atribuye calibración o acreditación al lote · comprobado: 2026-10-29

Partida: `e4b3dd344d1ce8e10553547f582550385d46b9fedb82dd7ea109b58b9a254fc7` · propuesta: `ad237f638a2e8790428da16daa17bb29132c439ef39536cd28d54394cce70b4f`

## AI-GSI-B3-T07-008

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y clave A; el contraste entre técnicas ya delimita el objetivo. Ampliar uso y límites.

### Antes

Para combinaciones de condiciones y acciones, ¿qué técnica resulta apropiada?

- A. Tabla de decisión **(correcta)**
- B. Partición de equivalencia sin modelar combinaciones de reglas
- C. Cobertura de sentencias basada en la estructura interna del código
- D. Análisis de valores límite para una única variable numérica

Explicación: Las tablas organizan reglas y combinaciones con sus resultados esperados.

### Propuesta

Para combinaciones de condiciones y acciones, ¿qué técnica resulta apropiada?

- A. Tabla de decisión **(correcta)**
- B. Partición de equivalencia sin modelar combinaciones de reglas
- C. Cobertura de sentencias basada en la estructura interna del código
- D. Análisis de valores límite para una única variable numérica

Explicación: Una tabla de decisión relaciona combinaciones de condiciones con acciones esperadas. Permite revisar reglas factibles y detectar combinaciones omitidas o contradictorias. No mide por sí misma la ejecución interna del programa.

- Error B: Elegir representantes sin modelar combinaciones no documenta la interacción entre reglas.
- Error C: La cobertura de sentencias mira estructura ejecutada, no reglas de condiciones y acciones.
- Error D: Explorar extremos de una variable no modela las combinaciones planteadas.

- [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/?download_id=3345&sdm_process_download=1) · 4.2.2 valores límite; 4.2.3 tablas de decisión; 2.2.3 confirmación/regresión; 5.1.3 criterios de salida; 5.5 severidad y prioridad · versión: v4.0.1 de 15-09-2024, PDF de 78 páginas leído textualmente el 29-10-2026. Se conservan técnicas y distinciones del temario; no se atribuye calibración o acreditación al lote · comprobado: 2026-10-29

Partida: `d4ea2c7cb54f68481012825da3c622f42acdf2d02c33357b941e96c9e1bdd500` · propuesta: `49e205cc2022f21aed5fc03559b12fdc8668e050fc1c5d9d3105025a82110ab1`

## AI-GSI-B3-T07-009

Decisión: pending_review · acción: revise.

Motivo: Conservar alcance limitado de cobertura y clave C; precisar código medido e instrumentación, sin equiparar líneas con caminos o aserciones.

### Antes

Alcanzar 100 % de cobertura de líneas significa…

- A. Ausencia garantizada de errores
- B. Cobertura de todos los caminos
- C. Que se ejecutaron esas líneas, no que falten defectos **(correcta)**
- D. Satisfacción automática de usuarios

Explicación: Cobertura de ejecución no demuestra corrección de aserciones ni exhaustividad de escenarios.

### Propuesta

En el código instrumentado incluido en la medición, ¿qué permite concluir un 100 % de cobertura de líneas?

- A. Se han recorrido todas las combinaciones de condiciones del programa.
- B. Se han comprobado todos los caminos posibles en cualquier número de iteraciones.
- C. Se ejecutaron las líneas ejecutables medidas, sin demostrar que el resultado sea correcto. **(correcta)**
- D. Las aserciones verifican completamente los requisitos asociados a cada línea.

Explicación: El porcentaje se refiere a líneas ejecutables incluidas en la medición que fueron ejercitadas. No prueba que haya aserciones adecuadas, que se hayan recorrido ramas y caminos, o que el resultado cumpla los requisitos. Exclusiones e instrumentación afectan al denominador. Una línea puede contener varias decisiones o comportamientos que una sola ejecución no distingue.

- Error A: Ejecutar líneas no exige haber ejercitado cada combinación lógica de sus condiciones.
- Error B: Los bucles y decisiones pueden generar muchos caminos aunque todas las líneas se hayan alcanzado.
- Error D: La cobertura de ejecución no evalúa la calidad ni la existencia de las aserciones sobre requisitos.

- [Martin Fowler: Test Coverage](https://martinfowler.com/bliki/TestCoverage.html) · Cobertura como detector de partes no ejercitadas; límites de porcentaje y calidad de aserciones · versión: Artículo de 17-04-2012 leído el 29-10-2026. No se adoptan sus porcentajes de ejemplo como umbral del proyecto · comprobado: 2026-10-29

Partida: `b655925e97feee80b1ce51c9b3c3300925b73c6100e46cce552d90bb8b324b0a` · propuesta: `4b580b7692cf4c8ea2de81d4eab39418edd0d9e1bde84e03b4ab4bfc7160bcae`

## AI-GSI-B3-T07-010

Decisión: pending_review · acción: revise.

Motivo: Conservar Red-Green-Refactor y clave D; permutaciones plausibles de las mismas fases y explicación del objetivo de cada una.

### Antes

¿Qué secuencia corresponde a TDD?

- A. Deploy, Delete, Forget
- B. Design, Release, Retire
- C. Read, Encrypt, Archive
- D. Red, Green, Refactor **(correcta)**

Explicación: TDD empieza por un test que falla, implementa lo necesario y refactoriza.

### Propuesta

¿Qué secuencia corresponde a TDD?

- A. Green → Red → Refactor.
- B. Refactor → Green → Red.
- C. Red → Refactor → Green.
- D. Red → Green → Refactor. **(correcta)**

Explicación: El ciclo habitual comienza con una prueba que falla por la funcionalidad pendiente, implementa lo necesario para que pase y refactoriza manteniendo el comportamiento comprobado. Antes se elige el caso que guiará el siguiente incremento. Un fallo de instalación no cumple por sí mismo el propósito de la fase roja. TDD no sustituye todos los niveles o tipos de prueba.

- Error A: Empezar por una implementación verde antes del nuevo caso no describe el ciclo test-first que se pregunta.
- Error B: Refactorizar antes de obtener la evidencia del nuevo comportamiento no es el orden del ciclo habitual.
- Error C: La fase verde precede a reorganizar el código preservando comportamiento; no se omite hacer pasar el nuevo caso.

- [Martin Fowler: Test Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html) · Tres pasos: prueba, implementación y refactorización; Red-Green-Refactor; lista de casos y revisiones · versión: Actualización de 11-12-2023 sobre entrada original de 2005, leída el 29-10-2026. Técnica de desarrollo, no sustituto de toda la estrategia de pruebas · comprobado: 2026-10-29

Partida: `4e160894c0d8412041d1538cb41adc59bf0d78c9b95a48e827d0906366b5cb15` · propuesta: `9d0300cfab976dcd115505654a2c7997b27c5aaa9588d31ccffc64ef2e2cd6f1`

## AI-GSI-B3-T07-011

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de acoplamiento y clave C; delimitar llamadas que no pertenecen al contrato para no condenar toda verificación de interacciones.

### Antes

¿Qué riesgo tiene abusar de mocks?

- A. Garantizar independencia de diseño siempre
- B. Probar automáticamente la integración real
- C. Acoplar las pruebas a detalles de implementación **(correcta)**
- D. Eliminar todo mantenimiento

Explicación: Los dobles ayudan a aislar, pero demasiado detalle simulado vuelve frágiles los tests.

### Propuesta

¿Qué efecto en mantenimiento puede provocar verificar con mocks secuencias internas que no forman parte del contrato observable?

- A. Reducir cambios de pruebas cuando se reorganiza el interior sin cambiar el contrato.
- B. Comprobar la integración real del colaborador mediante una simulación aislada.
- C. Obligar a modificar pruebas tras refactorizaciones que conservan el comportamiento. **(correcta)**
- D. Convertir el orden interno de llamadas en un requisito funcional acordado con usuarios.

Explicación: Si las expectativas fijan llamadas internas ajenas al contrato, una refactorización compatible puede romper el test aunque el resultado observable no cambie. Esto acopla la prueba a la implementación y aumenta mantenimiento. Los dobles siguen siendo útiles para aislar dependencias; verificar una interacción que sí pertenece al contrato puede ser pertinente. El riesgo es fijar detalles accidentales, no el mero uso de mocks.

- Error A: El acoplamiento a llamadas accidentales tiende a exigir más cambios de pruebas, no a protegerlas de reorganizaciones internas.
- Error B: La simulación no demuestra que el colaborador real mantenga el mismo comportamiento o protocolo.
- Error D: Una expectativa del test no convierte por sí sola un detalle en requisito acordado del producto.

- [Andrew Trenk: Testing on the Toilet, Don’t Overuse Mocks](https://testing.googleblog.com/2013/05/testing-on-toilet-dont-overuse-mocks.html) · Problemas de legibilidad, mantenimiento y fidelidad; expectativas que filtran detalles de implementación · versión: Google Testing Blog, 28-05-2013, leído el 29-10-2026. No prohíbe dobles ni verificar interacciones que pertenezcan al contrato · comprobado: 2026-10-29

Partida: `619d4fa846e98de8411159f3f9a9b6bd862b9434cfb23bfb2033a2c59f107a31` · propuesta: `7352af88761e0112c9995993062aae936e901a18164e388659212f4eed6f4070`

## AI-GSI-B3-T07-012

Decisión: pending_review · acción: revise.

Motivo: Conservar investigación de flaky tests y clave B; evitar atribuir la causa exclusivamente al código del test.

### Antes

Una prueba falla intermitentemente sin cambios relevantes. ¿Cómo debe tratarse?

- A. Como resultado que se ignora siempre
- B. Como defecto del sistema de pruebas que debe investigarse **(correcta)**
- C. Como autorización para borrar la suite
- D. Como prueba fiable por definición

Explicación: Los flaky tests degradan confianza y requieren diagnóstico.

### Propuesta

Con el mismo commit, una prueba alterna éxito y fallo sin un cambio relevante conocido. ¿Cómo debe tratarse?

- A. Repetirla hasta obtener verde y cerrar el fallo sin conservar los resultados anteriores.
- B. Investigar fuentes de no determinismo en la prueba, el entorno y el producto. **(correcta)**
- C. Retirarla sin registrar qué riesgo o comportamiento quedará sin comprobación.
- D. Clasificarla como fiable por el número de veces que termina pasando.

Explicación: La alternancia exige diagnóstico, no asumir que el primer verde resuelve el problema. Se conservan evidencias y se investigan tiempos, datos compartidos, orden, infraestructura y concurrencia del producto. Una cuarentena temporal puede requerir responsable y seguimiento; no equivale a corregir la causa ni demuestra que el producto esté libre de defectos.

- Error A: Reintentar hasta verde puede ocultar un fallo real y pierde información sobre la alternancia.
- Error C: Retirar sin seguimiento deja un riesgo sin gestionar; el tratamiento debe ser explícito.
- Error D: Una frecuencia alta de éxito no elimina la falta de fiabilidad o su causa.

- [John Micco: Flaky Tests at Google and How We Mitigate Them](https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html) · Definición de resultados alternos con el mismo código; causas de concurrencia, comportamiento no determinista, terceros e infraestructura · versión: Google Testing Blog, 27-05-2016, leído el 29-10-2026. Las tasas observadas entonces no se presentan como métricas actuales; la causa puede estar en prueba, entorno o producto · comprobado: 2026-10-29

Partida: `f9847a414184751017cf93f6ed981a59b8e38d3a788ffaa8c415043a24e71a6c` · propuesta: `03d27c9b4b7d80d71f8519bbbaa29accb839c457ec7dd25c08972d9ded60cee2`

## AI-GSI-B3-T07-013

Decisión: pending_review · acción: revise.

Motivo: Conservar cobertura/riesgo residual y clave B; separar verde técnico de decisión de suficiencia o excepción.

### Antes

Todos los tests pasan, pero faltan escenarios críticos. ¿Puede considerarse suficiente el resultado?

- A. Sí, el porcentaje de éxito basta siempre
- B. No, debe valorarse cobertura y riesgo residual **(correcta)**
- C. Sí, si hay muchas líneas de código
- D. Sí, si se ejecutaron rápido

Explicación: El éxito de casos existentes no cubre los casos ausentes.

### Propuesta

Pasan todos los casos ejecutados, pero falta un escenario identificado como crítico. ¿Basta ese verde por sí solo para declarar suficientes las pruebas?

- A. Sí; el porcentaje de éxito sustituye comprobar qué riesgos ejercitan los casos.
- B. No; faltan evidencias críticas y una decisión explícita sobre el riesgo residual. **(correcta)**
- C. Sí; la rapidez de la ejecución compensa los escenarios que no se incluyeron.
- D. Sí; repetir los mismos casos aumenta la cobertura de los escenarios ausentes.

Explicación: Un resultado verde no aporta evidencia sobre escenarios ausentes. Deben revisarse alcance, criterios de salida y riesgo residual; cualquier excepción requiere decisión documentada de quien corresponda. No se deduce suficiencia solo de la tasa de éxito.

- Error A: La tasa describe casos ejecutados, no el alcance de los omitidos.
- Error C: Ejecutar rápido no comprueba el escenario crítico ausente.
- Error D: Repetir casos no crea evidencia sobre entradas o flujos que no ejercitan.

- [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/?download_id=3345&sdm_process_download=1) · 4.2.2 valores límite; 4.2.3 tablas de decisión; 2.2.3 confirmación/regresión; 5.1.3 criterios de salida; 5.5 severidad y prioridad · versión: v4.0.1 de 15-09-2024, PDF de 78 páginas leído textualmente el 29-10-2026. Se conservan técnicas y distinciones del temario; no se atribuye calibración o acreditación al lote · comprobado: 2026-10-29
- [Martin Fowler: Test Coverage](https://martinfowler.com/bliki/TestCoverage.html) · Cobertura como detector de partes no ejercitadas; límites de porcentaje y calidad de aserciones · versión: Artículo de 17-04-2012 leído el 29-10-2026. No se adoptan sus porcentajes de ejemplo como umbral del proyecto · comprobado: 2026-10-29

Partida: `e18c11f5519de202f183107f7865bd648c1e5115109d9a5bfcd755b78ecd3a61` · propuesta: `295a1b10031bc9a9c2f70e74efb7cf7f80b3d80191b202e9ea4d3bafd3797fc1`

## AI-GSI-B3-T07-015

Decisión: pending_review · acción: revise.

Motivo: Conservar datos sintéticos/anonimizados y clave D; caso que no necesita identidad, con límites jurídicos y técnicos explícitos.

### Antes

¿Qué opción reduce riesgo al preparar datos de prueba personales?

- A. Copiar producción sin controles
- B. Suponer que seudonimizar elimina toda protección
- C. Publicar identificadores reales en fixtures
- D. Datos sintéticos o anonimizados cuando sea viable **(correcta)**

Explicación: La seudonimización puede conservar carácter personal; los datos requieren controles y versión.

### Propuesta

Un entorno de pruebas no necesita identificar personas reales. ¿Qué medida reduce la exposición de datos al preparar sus fixtures?

- A. Copiar una muestra de producción conservando sus identificadores para mantener realismo.
- B. Seudonimizar y considerar por ese solo hecho que el conjunto ya no es personal.
- C. Eliminar nombres y conservar combinaciones únicas de atributos sin evaluar identificación.
- D. Usar datos sintéticos o anónimos adecuados y comprobar riesgos de identificación. **(correcta)**

Explicación: Si no se necesita identificar personas, deben preferirse datos adecuados que reduzcan esa exposición. Los sintéticos o anonimizados requieren comprobar utilidad y riesgo de identificación; una etiqueta no garantiza anonimato. La seudonimización puede mantener carácter personal y exige controles. El RGPD distingue anonimato de atribución con información adicional y exige limitar datos a lo necesario para la finalidad.

- Error A: La muestra conserva identificadores y exposición que el objetivo de la prueba no necesita.
- Error B: Separar información adicional no convierte automáticamente los datos en anónimos.
- Error C: Sin nombres aún puede identificarse por combinaciones indirectas; hay que valorar ese riesgo.

- [BOE: Reglamento (UE) 2016/679](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Considerando 26: identificabilidad y anonimato; artículo 4.5: seudonimización; artículo 5.1.c: minimización; análisis y correcciones vinculadas · versión: Texto original DOUE L119 de 04-05-2016 en BOE, leído el 29-10-2026; se consultan las correcciones de 2018 y 2021. La seudonimización no se equipara a anonimato ni toda generación sintética a ausencia de riesgo · comprobado: 2026-10-29
- [BOE: Corrección de errores del RGPD de 2018](https://www.boe.es/buscar/doc.php?id=DOUE-L-2018-80845) · Texto de corrección vinculado en análisis del RGPD; contraste del respaldo normativo de anonimato/seudonimización · versión: DOUE L127 de 23-05-2018, pp.3–7; página oficial consultada el 29-10-2026. No se usa como definición alternativa de anonimización · comprobado: 2026-10-29
- [BOE: Corrección de errores del RGPD de 2021](https://www.boe.es/buscar/doc.php?id=DOUE-L-2021-80264) · Texto de corrección vinculado en análisis del RGPD; contraste del respaldo normativo de anonimato/seudonimización · versión: DOUE L74 de 04-03-2021, pp.35–38; página oficial consultada el 29-10-2026. No se interpreta como una autorización para copiar datos a pruebas · comprobado: 2026-10-29
- [PDPC Singapur, traducción AEPD: Guía básica de anonimización](https://www.aepd.es/documento/guia-basica-anonimizacion.pdf) · Caso E, p.16: datos sintéticos para desarrollo/pruebas y supuestos; pasos 1–5: identificadores, técnicas y riesgo de reidentificación/divulgación · versión: Edición española de octubre de 2022 según portada, PDF de 72 páginas leído textualmente el 29-10-2026. Autoría PDPC y traducción/prólogo AEPD; guía técnica, no norma española autónoma · comprobado: 2026-10-29

Partida: `c611a02dcd846898a5989debb6eb2581d70f402dc27cf3ea24502ed7dd899d64` · propuesta: `4487fafc43abacbbfb9104556de85342f4b44e44ec6b2f03e2a9a921754104e0`

## AI-GSI-B3-T07-017

Decisión: pending_review · acción: revise.

Motivo: Conservar evidencia de procedimiento ejecutable y clave A; microcaso de restauración con validación del resultado y alcance explícito.

### Antes

¿Qué demuestra probar un procedimiento de recuperación?

- A. Que el runbook puede ejecutarse en condiciones definidas **(correcta)**
- B. Que escribirlo ya garantizaba recuperación
- C. Que nunca habrá desastres
- D. Que ya no se necesitan copias

Explicación: La ejecución aporta evidencia que un documento sin probar no proporciona.

### Propuesta

Se ensaya restaurar una copia en un entorno representativo y se comprueba la integridad del resultado. ¿Qué evidencia aporta ese ensayo?

- A. Recuperación ejecutable en las condiciones y con los límites del ensayo realizado. **(correcta)**
- B. Validez de cualquier copia futura aunque cambien su contenido o formato.
- C. Cumplimiento del objetivo de recuperación de otro servicio que no se ensayó.
- D. Ausencia de necesidad de revisar el procedimiento tras cambios de permisos.

Explicación: Ejecutar una restauración y comprobar su resultado aporta evidencia sobre el procedimiento, los medios y las condiciones ensayadas. Se documentan resultados y se corrigen carencias. No garantiza todas las copias o incidentes futuros: cambios en datos, permisos o infraestructura pueden exigir nuevos ensayos y mantenimiento del plan.

- Error B: Una copia futura puede tener problemas que este ensayo no comprueba; su formato o contenido pueden cambiar.
- Error C: El objetivo de otro servicio requiere su propia evidencia y condiciones, no se acredita por este ensayo.
- Error D: Los permisos afectan a ejecución y acceso; cambiarlos puede invalidar pasos que antes funcionaban.

- [NIST SP 800-34 Rev.1: Contingency Planning Guide](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf) · 3.5 y 3.5.1 TT&amp;E/Testing: objetivos, comprobación de recuperación y documentación; 3.6 mantenimiento del plan · versión: Revisión 1, mayo de 2010, PDF de 149 páginas en esta URL, leído textualmente el 29-10-2026. Referencia metodológica histórica, sin imponer requisitos federales estadounidenses al proyecto · comprobado: 2026-10-29

Partida: `652df4930e62c7caef1e7ac2c7465ee0cf220d153888c604161d18242499fc31` · propuesta: `40085e2fd8432683165baa0fae552e79256da7c795df8785698c39d168bb7303`

## AI-GSI-B3-T07-018

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y clave B; controles y distractores ya próximos al concepto. Precisar límites de agregados y corte comparable.

### Antes

¿Qué controles ayudan a verificar una migración de datos?

- A. Dar por válidos los datos si terminó la importación
- B. Conteos, totales de control, claves y reconciliación **(correcta)**
- C. Comparar únicamente el tamaño físico de los ficheros
- D. Solo comprobar que exista la tabla destino

Explicación: La migración debe comprobar completitud, integridad y transformaciones.

### Propuesta

¿Qué controles ayudan a verificar una migración de datos?

- A. Dar por válidos los datos si terminó la importación
- B. Conteos, totales de control, claves y reconciliación **(correcta)**
- C. Comparar únicamente el tamaño físico de los ficheros
- D. Solo comprobar que exista la tabla destino

Explicación: Conteos, totales, claves y reconciliación aportan controles complementarios. Igualar conteos o sumas no prueba por sí solo que cada registro sea correcto: puede haber valores intercambiados o transformaciones erróneas que mantengan esos agregados. Se contrastan correspondencias, reglas y excepciones según el alcance de la migración y un corte comparable.

- Error A: Terminar la importación informa del proceso, sin demostrar exactitud y completitud del resultado.
- Error C: El tamaño físico depende del formato y no prueba correspondencia de registros o valores.
- Error D: Que exista la tabla no comprueba sus filas, claves o transformaciones.

- [AWS DMS: Data validation](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html) · Introducción y limitaciones: comparación de filas origen/destino, discrepancias, consumo y cambios concurrentes · versión: Guía pública en ruta latest leída el 29-10-2026, sin inferir edición o instalación local. Es ejemplo de contraste; no todo conteo o total demuestra exactitud de registros · comprobado: 2026-10-29
- [UK Government: The Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) · Data lifecycle; Data quality dimensions: completeness, uniqueness, consistency, validity y accuracy · versión: Publicado el 03-12-2020 según página, leído el 29-10-2026. Completitud y exactitud son distintas; marco de ejemplo, no obligación española inferida · comprobado: 2026-10-29

Partida: `e1ea5ba70e62ff3861d27b63e3f92619e10b7c6cf1a891d8fde694e0ce76a2e3` · propuesta: `03ad5264b21c1418e58becb73c9e1caed29e604a8a967cc0ec3e5e0b6a80fd86`

## AI-GSI-B3-T07-019

Decisión: pending_review · acción: revise.

Motivo: Conservar retest/confirmación frente a regresión y clave C; comparar objetivos próximos sin distractores de hardware ajenos.

### Antes

¿Qué diferencia retest y regresión?

- A. Son siempre la misma actividad
- B. Regresión solo prueba hardware
- C. Retest confirma el defecto corregido; regresión busca efectos sobre lo existente **(correcta)**
- D. Retest elimina necesidad de resultado esperado

Explicación: Ambas comprobaciones se complementan tras un cambio.

### Propuesta

Tras corregir un defecto, ¿qué distingue las pruebas de confirmación —retest— de las de regresión?

- A. Confirmación busca efectos colaterales; regresión comprueba el defecto concreto.
- B. Confirmación es revisión sin ejecución; regresión es aceptación de negocio.
- C. Confirmación verifica la corrección concreta; regresión busca efectos adversos del cambio. **(correcta)**
- D. Confirmación mide líneas ejecutadas; regresión decide la prioridad del defecto.

Explicación: La confirmación comprueba la corrección del defecto tratado; la regresión busca consecuencias adversas del cambio. Se complementan. Su alcance se elige según impacto; no son garantía universal ni equivalen a priorización o cobertura.

- Error A: Invierte los objetivos de ambas actividades.
- Error B: Confunde las actividades con revisión estática y aceptación de negocio.
- Error D: Cobertura y priorización no definen confirmación ni regresión.

- [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/?download_id=3345&sdm_process_download=1) · 4.2.2 valores límite; 4.2.3 tablas de decisión; 2.2.3 confirmación/regresión; 5.1.3 criterios de salida; 5.5 severidad y prioridad · versión: v4.0.1 de 15-09-2024, PDF de 78 páginas leído textualmente el 29-10-2026. Se conservan técnicas y distinciones del temario; no se atribuye calibración o acreditación al lote · comprobado: 2026-10-29

Partida: `cf321e70a0e7690141be570daedb4b2c046a79de027c41f44e2e08b420bed682` · propuesta: `d8e27b898cca6f9d997795b93401bdec773de394788478da7915d92f66fe565f`

## AI-GSI-B3-T07-020

Decisión: pending_review · acción: revise.

Motivo: Conservar impacto/urgencia y clave C; clasificaciones y métricas cercanas, sin equiparar prioridad con severidad.

### Antes

¿Qué diferencia severidad y prioridad de un defecto?

- A. Ambas son tamaño del archivo
- B. Severidad es quién lo registra
- C. Severidad es impacto; prioridad es urgencia de resolución **(correcta)**
- D. Prioridad mide solo antigüedad

Explicación: Impacto y urgencia pueden diferir según contexto y planificación.

### Propuesta

¿Qué diferencia severidad y prioridad de un defecto?

- A. Severidad expresa urgencia de reparación; prioridad expresa grado de impacto.
- B. Severidad cuenta las líneas del parche; prioridad cuenta los casos de prueba.
- C. Severidad expresa impacto; prioridad orienta urgencia u orden de resolución. **(correcta)**
- D. Severidad mide antigüedad; prioridad mide esfuerzo técnico estimado del arreglo.

Explicación: Severidad valora impacto; prioridad guía qué resolver antes. Se relacionan, pero contexto y compromisos pueden producir órdenes distintos. Antigüedad, tamaño del parche y esfuerzo son otros datos de gestión.

- Error A: Intercambia impacto y prioridad de resolución.
- Error B: El tamaño del parche y el número de casos no son esas clasificaciones.
- Error D: Antigüedad y esfuerzo no definen impacto ni prioridad.

- [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/?download_id=3345&sdm_process_download=1) · 4.2.2 valores límite; 4.2.3 tablas de decisión; 2.2.3 confirmación/regresión; 5.1.3 criterios de salida; 5.5 severidad y prioridad · versión: v4.0.1 de 15-09-2024, PDF de 78 páginas leído textualmente el 29-10-2026. Se conservan técnicas y distinciones del temario; no se atribuye calibración o acreditación al lote · comprobado: 2026-10-29

Partida: `488bfe0998c7e2eaae710ac2e045b11457ecb85318516f0fbf63b4f7204f8fb1` · propuesta: `5e82795551b6e96b008cf237ebdb52362ec16d715238c395702f6febbbaf1e8a`

## AI-GSI-B3-T08-001

Decisión: pending_review · acción: revise.

Motivo: Conservar repetibilidad/auditoría y clave D; distinguir instalación verificable de copia, arranque y repetición sin evidencia.

### Antes

¿Qué caracteriza una instalación controlada?

- A. Solo copiar el ejecutable
- B. Pasos improvisados sin registro
- C. Omitir integraciones y certificados
- D. Configuración y validación repetibles y auditables **(correcta)**

Explicación: Instalar incluye entorno, datos, integraciones, secretos y observabilidad.

### Propuesta

¿Qué caracteriza una instalación controlada?

- A. Copiar el ejecutable y dar por validado el entorno si el proceso arranca.
- B. Repetir comandos sin registrar versiones, parámetros o resultados.
- C. Comprobar archivos presentes sin verificar configuración o integraciones necesarias.
- D. Aplicar pasos y configuración controlados, registrar versión y validar resultados. **(correcta)**

Explicación: Una instalación controlada identifica entradas, entorno y configuración, aplica un procedimiento repetible y conserva evidencia de validación. Arrancar el proceso no prueba que dependencias, integraciones o permisos sean adecuados. Configuración controlada no significa publicar secretos en el repositorio: credenciales y parámetros sensibles necesitan su mecanismo protegido. El detalle y la evidencia se ajustan al riesgo del sistema.

- Error A: El arranque es una comprobación parcial; puede haber fallos de integración o configuración que no aparezcan al iniciar.
- Error B: Sin entradas y resultados identificados no se sabe qué se repitió ni cómo contrastarlo o auditarlo.
- Error C: La presencia física no demuestra que el servicio pueda cumplir sus funciones en ese entorno.

- [NIST SP 800-128: Security-Focused Configuration Management](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-128.pdf) · 3.2 configuración de línea base; 3.3.2 solicitud, impacto, pruebas, aprobación, implementación y verificación; 3.3.3 análisis de impacto · versión: Agosto de 2011 con actualizaciones hasta 10-10-2019 según portada, PDF de 99 páginas leído textualmente el 29-10-2026. Se usa el proceso y evidencia, sin exigir un CAB para cada cambio · comprobado: 2026-10-29

Partida: `72de3b54488a129fb06814356b901e3402cd0302f849f966fd95b7a0cc5da333` · propuesta: `4e80ef43b60baa306ca3b34010532a0c57024c916086e7f643e5eb54e3be68a9`

## AI-GSI-B3-T08-002

Decisión: pending_review · acción: revise.

Motivo: Conservar preparación de migración y clave D; relacionar mapeo/calidad/ensayo/reconciliación con recuperación sin prometer pérdida cero.

### Antes

¿Qué debe preceder a migrar datos a producción?

- A. Suponer compatibilidad por compartir formato
- B. Eliminar el origen antes de validar
- C. Omitir inventario
- D. Mapeo, limpieza, pruebas y reconciliación **(correcta)**

Explicación: La preparación reduce pérdidas e incoherencias durante la transición.

### Propuesta

Antes de migrar datos a producción, ¿qué preparación permite contrastar correspondencia, calidad y capacidad de recuperación?

- A. Considerar equivalentes los datos de igual formato sin revisar su significado o reglas.
- B. Reservar las comprobaciones para después de retirar el origen y sus copias.
- C. Validar que exista el esquema destino sin ensayar la transformación de registros.
- D. Definir mapeos, tratar calidad, ensayar la migración y acordar reconciliación y recuperación. **(correcta)**

Explicación: Preparar la migración exige saber qué se mueve, cómo se transforma y cómo se comprobará. Se identifican reglas, calidad, dependencias, ensayos, criterios de reconciliación y recuperación antes del cambio real. El mismo formato puede representar unidades o significados diferentes. La limpieza debe ser trazable y responder a reglas; no autoriza eliminar datos arbitrariamente.

- Error A: Formato igual no prueba correspondencia semántica o cumplimiento de reglas de destino.
- Error B: Retirar medios de recuperación antes de validar aumenta el riesgo y dificulta corregir pérdidas.
- Error C: Un esquema existente no prueba mapeo, calidad o completitud de las filas migradas.

- [AWS Prescriptive Guidance: Pre-cutover stage](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/pre-cutover-stage.html) · Developing a cutover plan; Creating a cutover runbook: dependencias, pruebas, responsables, duraciones y tiempo de rollback · versión: Página pública en ruta latest leída el 29-10-2026. Ejemplo de planificación; no se migra infraestructura o configura AWS · comprobado: 2026-10-29
- [UK Government: The Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) · Data lifecycle; Data quality dimensions: completeness, uniqueness, consistency, validity y accuracy · versión: Publicado el 03-12-2020 según página, leído el 29-10-2026. Completitud y exactitud son distintas; marco de ejemplo, no obligación española inferida · comprobado: 2026-10-29

Partida: `9cd41d31365a61709d4dd96bba464b44b372accbe7d26c7f47b880925cd721a6` · propuesta: `4e269a88d4a22cc4c42712ce0577b06a9564fcb33a35184a91881d94128c1984`

## AI-GSI-B3-T08-003

Decisión: pending_review · acción: revise.

Motivo: Conservar validación/rollback y clave B; microcaso de ventana nocturna para evaluar margen y decisión antes del agotamiento.

### Antes

¿Qué debe definirse alrededor de una ventana de migración?

- A. Ausencia de responsables
- B. Validación y rollback **(correcta)**
- C. Solo la hora de inicio
- D. Borrado inmediato de todas las copias

Explicación: La ventana debe permitir decidir y recuperar ante fallos.

### Propuesta

Una migración tiene ventana de 23:00 a 01:00 y el rollback requiere 30 minutos. ¿Qué debe quedar definido antes de empezar para no agotar el tiempo de recuperación?

- A. Fijar el inicio y dejar abierta la duración de validación durante la ventana.
- B. Fijar criterios de validación y un límite para decidir retorno con margen suficiente. **(correcta)**
- C. Empezar a validar al cerrar la ventana y decidir después si se necesita volver.
- D. Medir el tiempo de rollback por primera vez cuando haya fallado la migración.

Explicación: La ventana necesita criterios, responsables y puntos de decisión que dejen tiempo de recuperación. Con fin a la 01:00 y rollback de 30 minutos, sin otro margen, decidir después de las 00:30 ya no permitiría terminar dentro de esa ventana. Si hay diagnóstico, comunicación o verificación adicional hay que reservar más. Deben contemplarse también datos nuevos y condiciones del retorno, no solo su duración.

- Error A: Sin acotar validación y decisión puede agotarse el tiempo necesario para retornar.
- Error C: Esperar a cerrar la ventana impide usarla para una recuperación de 30 minutos.
- Error D: Conocer la duración tras el fallo llega tarde para presupuestarla y fijar un punto de decisión previo.

- [AWS Prescriptive Guidance: Pre-cutover stage](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/pre-cutover-stage.html) · Developing a cutover plan; Creating a cutover runbook: dependencias, pruebas, responsables, duraciones y tiempo de rollback · versión: Página pública en ruta latest leída el 29-10-2026. Ejemplo de planificación; no se migra infraestructura o configura AWS · comprobado: 2026-10-29
- [AWS Prescriptive Guidance: Cutover stage](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/cutover-stage.html) · Rollback: checkpoints, criterios, decisor, datos nuevos y pruebas de restauración en entornos inferiores · versión: Página pública en ruta latest leída el 29-10-2026. La recuperación debe contemplar datos y tiempo; no basta cambiar binarios o redirigir tráfico en cualquier caso · comprobado: 2026-10-29

Partida: `0c09e78e463eab50374b12aa86fbe7391ed092d1134e037d1041c8ba05928d96` · propuesta: `98de1819e986b8ec4c9ddbb33a98abc15760ce610eab514d81ee1bb19827fa33`

## AI-GSI-B3-T08-004

Decisión: pending_review · acción: revise.

Motivo: Conservar evaluación/autorización/ejecución/validación y clave B; explicitar cambio planificado no preautorizado y evitar una secuencia universal rígida.

### Antes

¿Qué secuencia corresponde a gestión de cambio?

- A. Ejecutar primero y olvidar el registro
- B. Evaluar impacto, aprobar, planificar, ejecutar y validar **(correcta)**
- C. Aprobar sin conocer riesgo
- D. Cerrar antes de comprobar

Explicación: El cambio sigue controles proporcionales y termina con validación y cierre.

### Propuesta

En un cambio planificado que requiere autorización específica, ¿qué secuencia conserva control previo y cierre con evidencia?

- A. Ejecutar → medir impacto → solicitar autorización → registrar el cierre.
- B. Evaluar y planificar → autorizar → ejecutar → validar y registrar el cierre. **(correcta)**
- C. Autorizar → ejecutar → definir alcance y riesgos → validar resultados.
- D. Evaluar → cerrar la solicitud → ejecutar → documentar desviaciones.

Explicación: Para el cambio planificado que requiere autorización específica se evalúan impacto y plan, se obtiene la decisión correspondiente, se ejecuta y se valida antes del cierre. La profundidad, autoridad y pasos concretos dependen del modelo. Una urgencia o un cambio preautorizado puede tener otro tratamiento, manteniendo controles y trazabilidad; no se exige un comité para toda modificación.

- Error A: La evaluación y autorización llegan después de ejecutar, por lo que no controlan previamente el cambio del caso.
- Error C: Definir alcance y riesgo después de ejecutar impide basar en ellos la autorización.
- Error D: Cerrar antes de la ejecución y validación deja el cierre sin evidencia del resultado.

- [NIST SP 800-128: Security-Focused Configuration Management](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-128.pdf) · 3.2 configuración de línea base; 3.3.2 solicitud, impacto, pruebas, aprobación, implementación y verificación; 3.3.3 análisis de impacto · versión: Agosto de 2011 con actualizaciones hasta 10-10-2019 según portada, PDF de 99 páginas leído textualmente el 29-10-2026. Se usa el proceso y evidencia, sin exigir un CAB para cada cambio · comprobado: 2026-10-29

Partida: `2482d3354414e32a71a309978df898726f971cfdee4ffd079f5234e2eb9b3a6f` · propuesta: `56b11221492489ef1b241a1e3aff31ac139662da8d947f6a002c0803471ecf2a`

## AI-GSI-B3-T08-005

Decisión: pending_review · acción: revise.

Motivo: Conservar cambios estándar preautorizados y clave B; distinguir elegibilidad, repetición, urgencia y ausencia de registro.

### Antes

¿Qué puede agilizar cambios repetibles de bajo riesgo bajo un modelo definido?

- A. Suprimir toda trazabilidad
- B. Cambios estándar preautorizados **(correcta)**
- C. Declarar todos los cambios urgentes
- D. Omitir criterios de aceptación

Explicación: La preautorización se encuadra en un procedimiento; no elimina controles.

### Propuesta

¿Qué puede agilizar cambios repetibles de bajo riesgo bajo un modelo definido?

- A. Cambios normales con autorización retrospectiva por defecto.
- B. Cambios estándar conforme a un modelo previamente autorizado. **(correcta)**
- C. Cambios de emergencia declarados para evitar comprobar elegibilidad.
- D. Cambios fuera del registro porque el mismo trabajo ya se realizó antes.

Explicación: Un cambio estándar es repetible, de bajo riesgo y se realiza mediante un proceso documentado y aprobado de antemano. Cada ejecución debe cumplir las condiciones del modelo y conservar el control y registro correspondientes. Haber repetido una tarea no la convierte automáticamente en estándar; cambiar su alcance o riesgo puede requerir otra evaluación.

- Error A: Autorizar retrospectivamente por defecto no equivale a un modelo estándar aprobado antes de ejecutar.
- Error C: La emergencia responde a urgencia real y tratamiento definido, no a evitar condiciones de elegibilidad.
- Error D: La repetición no elimina trazabilidad ni demuestra que exista una preautorización válida.

- [Atlassian: Types of change management for ITSM teams](https://www.atlassian.com/itsm/change-management/types) · Standard changes: bajo riesgo, repetición, proceso documentado y preaprobado; contraste con normal/emergency · versión: Página pública leída el 29-10-2026, sin edición numerada indicada. La preautorización requiere elegibilidad y modelo; no elimina registro, validación o controles · comprobado: 2026-10-29

Partida: `a27248373615785d09218063c898a697e2b653663f108baebda5dda31121342f` · propuesta: `0a486f66eaa8d62d85baff6034c93e0b3eec894ebc4e641c3a9dbe723c2f6c72`

## AI-GSI-B3-T08-006

Decisión: pending_review · acción: revise.

Motivo: Conservar soporte reforzado inicial y clave C; precisar seguimiento y salida, sin plazo universal o abandono de soporte posterior.

### Antes

¿Qué describe hypercare después de implantar?

- A. Solo compra de licencias
- B. Retirada inmediata del soporte
- C. Soporte reforzado y seguimiento inicial **(correcta)**
- D. Congelación eterna del producto

Explicación: El soporte reforzado ayuda a estabilizar y atender incidencias de adopción.

### Propuesta

¿Qué describe hypercare después de implantar?

- A. Soporte ordinario sin refuerzo específico desde el primer día de uso del sistema.
- B. Congelación de la operación hasta que no quede ninguna incidencia pendiente.
- C. Refuerzo inicial de soporte y seguimiento con criterios de salida. **(correcta)**
- D. Seguimiento limitado al cierre administrativo sin atender la operación inicial.

Explicación: Hypercare es un periodo inicial tras la puesta en servicio con atención y recursos reforzados para estabilizar operación y adopción. Se definen responsables, seguimiento y criterios para pasar al soporte ordinario. No tiene una duración universal ni sustituye el soporte posterior. La transición necesita evidencia de que el servicio y el equipo de soporte están preparados.

- Error A: El caso de hypercare incorpora refuerzo inicial; pasar directamente a soporte ordinario no describe ese periodo.
- Error B: El refuerzo acompaña la operación y trata incidencias; no exige paralizar el servicio hasta una ausencia absoluta.
- Error D: Cerrar documentación sin atender operación y usuarios no cumple el propósito del soporte reforzado.

- [Microsoft Learn: Plan your support operations](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/transition-to-support-operations) · Hypercare: recursos reforzados tras go-live, criterios de salida, expectativas, documentación y transición a soporte · versión: Página pública de guía Dynamics365 leída el 29-10-2026. El cuerpo se obtiene junto a un aviso de autorización; no se inicia sesión ni se intenta eludir acceso. No se fija duración universal · comprobado: 2026-10-29

Partida: `9ac2c08649c6ca27f7463e6587f680412ef1256dca69289f4763f60a7e18796d` · propuesta: `1d4eb88194793b9879cda566890b0e2ee1b50c51045c7be9827a0e72ed616e6d`

## AI-GSI-B3-T08-007

Decisión: pending_review · acción: revise.

Motivo: Conservar coste/riesgo futuro y clave A; reconocer valor inmediato y gestión contextual sin convertir toda deuda en fallo funcional.

### Antes

¿Cómo debe tratarse la deuda técnica?

- A. Como riesgo y coste futuro a gestionar **(correcta)**
- B. Como una garantía de mayor calidad
- C. Como sustituto de la planificación
- D. Como algo que desaparece al desplegar

Explicación: La deuda puede aumentar costes de cambio y mantenimiento.

### Propuesta

¿Qué enfoque aplica la metáfora de deuda técnica a la evolución de un sistema?

- A. Identificar su coste y riesgo de evolución y priorizar su tratamiento con el valor del cambio. **(correcta)**
- B. Valorarla solo por los defectos visibles, sin considerar el coste de modificar el sistema.
- C. Tratarla como una categoría contable que no influye en esfuerzo técnico futuro.
- D. Dar por amortizado su coste cuando la versión que la contiene llega a producción.

Explicación: La metáfora de deuda técnica hace visible que una solución puede facilitar una entrega y añadir coste posterior de comprensión o cambio. Debe identificarse y gestionarse con sus riesgos y valor, sin confundirla con todo defecto o con una obligación de reescribirlo todo de inmediato. Desplegar no elimina por sí mismo las dificultades acumuladas. La deuda no es necesariamente una categoría separada de mantenimiento.

- Error B: Puede haber coste de evolución aun sin fallos visibles para el usuario; contar defectos no basta.
- Error C: La metáfora se refiere a consecuencias técnicas de diseño e implementación, no solo a un asiento contable.
- Error D: Poner en producción la solución no elimina el coste que sus decisiones puedan imponer después.

- [Ward Cunningham: The WyCash Portfolio Management System](https://c2.com/doc/oopsla92.html) · Párrafos sobre consolidación, primera entrega como deuda y coste posterior como interés · versión: Experience Report OOPSLA92, texto fechado 26-03-1992, leído el 29-10-2026. Metáfora de coste técnico, no categoría contable o porcentaje financiero literal · comprobado: 2026-10-29

Partida: `f4574ce22fad3084a1b99da71647f483e4c0b7341758aeb7a8c705db1a952e3e` · propuesta: `77f601c58fcc4fe1bad7d0097c95a01ef7d98e6d482b4a0011488df3fe1a8ef0`
