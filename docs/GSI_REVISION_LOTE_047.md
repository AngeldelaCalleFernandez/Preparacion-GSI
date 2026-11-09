# GSI-EDITORIAL-047 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `097ddc6749510809f4c9f0feafcb9616dd3c0409b54ae9efb4663adc2cf8e497`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B2-T15-003

Decisión: pending_review · acción: revise.

Motivo: Conservar jerarquía y comparaciones por pares y clave C; cuatro enfoques próximos, eliminando precios, VAN y tareas de duración cero como distractores ajenos.

### Antes

¿Qué caracteriza a AHP?

- A. Calcular exclusivamente el VAN
- B. Solo ordenar precios de menor a mayor
- C. Jerarquía de criterios y comparaciones por pares **(correcta)**
- D. Usar tareas de duración cero

Explicación: AHP estructura criterios y permite examinar consistencia de comparaciones.

### Propuesta

¿Qué caracteriza a AHP?

- A. Obtener consenso mediante consultas sucesivas a expertos.
- B. Ordenar por distancia relativa a dos soluciones ideales.
- C. Estructurar criterios en una jerarquía y compararlos por pares. **(correcta)**
- D. Agregar datos brutos sin valorar preferencias o coherencia de juicios.

Explicación: AHP estructura el problema jerárquicamente y obtiene prioridades mediante comparaciones por pares de criterios y, según el diseño, alternativas. Permite examinar coherencia de los juicios, sin garantizar que sean objetivos o que exista una única decisión válida. El manual MCA distingue esa estructura de otras formas de agregación y analiza sus limitaciones.

- Error A: Una serie de consultas con realimentación no define el procedimiento AHP de comparación por pares en una jerarquía; pueden usarse expertos sin que las técnicas sean equivalentes.
- Error B: Las distancias a ideales no son la característica definitoria de AHP; se está describiendo otro enfoque de ordenación.
- Error D: AHP utiliza juicios relativos para derivar prioridades y examina su coherencia; no es una agregación de datos brutos sin preferencias.

- [DCLG/GOV.UK: Multi-criteria analysis — a manual](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/7612/1132618.pdf) · 4.7 modelos aditivos; 4.8 AHP; 5.6 escalas y funciones de valor; 6.2.14 sensibilidad; apéndice 5 AHP y consistencia, páginas impresas 127–130 · versión: Enero de 2009, ISBN 9781409810230; actualización de la edición de diciembre de 2000. PDF primario oficial, sin presentarlo como norma jurídica ni criterio único de elección · comprobado: 2026-10-28

Partida: `5228b27f222c16aeaec131558efb2fe5b5ee832b59dd40a377c74717ec93882a` · propuesta: `8125b2400b7613ab0dea413d2cea31fd8f197241bdb1c28e9936887b9eafe624`

## AI-GSI-B2-T15-007

Decisión: pending_review · acción: revise.

Motivo: Conservar idea de dos ideales y clave D; alternativas de agregación cercanas, sin edad de soluciones o tareas críticas.

### Antes

¿Qué idea guía TOPSIS?

- A. Eliminar todas las puntuaciones normalizadas
- B. Elegir siempre la alternativa más antigua
- C. Comparar únicamente tareas críticas
- D. Cercanía al ideal positivo y lejanía del negativo **(correcta)**

Explicación: TOPSIS valora distancias a soluciones ideales positivas y negativas.

### Propuesta

¿Qué idea guía TOPSIS?

- A. Sumar puntuaciones ponderadas sin distancias a ideales.
- B. Eliminar opciones dominadas sin calcular distancias a ideales.
- C. Minimizar distancia al ideal positivo sin considerar el ideal negativo.
- D. Ordenar por cercanía al ideal positivo y alejamiento del negativo. **(correcta)**

Explicación: TOPSIS construye referencias ideales positiva y negativa a partir de los criterios orientados y ponderados y considera distancias a ambas para ordenar por cercanía relativa. No basta mirar solo el ideal positivo. La clasificación depende de escalas, pesos y métrica; la idea no garantiza que una opción minimice y maximice por separado todas las distancias o sea superior bajo cualquier supuesto.

- Error A: Una suma aditiva es otro mecanismo de agregación y no recoge el rasgo de comparar distancias a dos ideales.
- Error B: La dominancia puede servir para descartar opciones, pero no es el criterio específico de cercanía relativa de TOPSIS.
- Error C: Ignorar el ideal negativo omite una de las dos referencias que utiliza TOPSIS para construir la medida de cercanía.

- [scikit-criteria: documentación oficial de skcriteria.agg.topsis](https://scikit-criteria.quatrope.org/en/latest/api/agg/topsis.html) · TOPSIS: cercanía al ideal positivo y alejamiento del negativo; supuestos de criterios monótonos, compensación y métrica · versión: Documentación 0.10.0.dev0 leída el 28-10-2026, identificada como desarrollo, no versión estable instalada. Solo respaldo conceptual de la técnica; no se instala ni usa el paquete · comprobado: 2026-10-28
- [DCLG/GOV.UK: Multi-criteria analysis — a manual](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/7612/1132618.pdf) · 4.7 modelos aditivos; 4.8 AHP; 5.6 escalas y funciones de valor; 6.2.14 sensibilidad; apéndice 5 AHP y consistencia, páginas impresas 127–130 · versión: Enero de 2009, ISBN 9781409810230; actualización de la edición de diciembre de 2000. PDF primario oficial, sin presentarlo como norma jurídica ni criterio único de elección · comprobado: 2026-10-28

Partida: `17ffb8953a7b8a1e5158710f00dc76a4500fda19c25b52d360b594210099378a` · propuesta: `d584ae680f872187fabfc83644458416cdaf114a32625f1a749a5a4575acd0f9`

## AI-GSI-B2-T15-008

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso de sensibilidad y clave D; separar fragilidad de error técnico y de imposibilidad de decidir.

### Antes

Pequeños cambios razonables de pesos invierten la alternativa ganadora. ¿Qué revela?

- A. Ausencia de incertidumbre
- B. Error obligatorio de todas las fórmulas
- C. Robustez absoluta
- D. Fragilidad de la decisión **(correcta)**

Explicación: El análisis de sensibilidad muestra dependencia de supuestos; debe comunicarse esa fragilidad.

### Propuesta

Pequeños cambios razonables de pesos invierten la alternativa ganadora. ¿Qué revela?

- A. Que los pesos dejan de influir una vez calculadas las puntuaciones.
- B. Que se ha demostrado un error aritmético en el cálculo del modelo.
- C. Que la ganadora mantiene su posición ante los cambios estudiados.
- D. Que la clasificación es sensible a los pesos y la decisión poco robusta. **(correcta)**

Explicación: Si variaciones razonables y pequeñas de pesos cambian la ganadora, la preferencia es sensible a esos supuestos y la decisión resulta poco robusta en el rango analizado. Debe comunicarse y revisar pesos, datos y diferencias relevantes. El cambio no demuestra por sí mismo un error de fórmula ni que ninguna alternativa pueda justificarse; el análisis revela dependencia de preferencias.

- Error A: La inversión observada muestra precisamente que los pesos siguen influyendo en el resultado.
- Error B: Un resultado sensible puede ser matemáticamente correcto; hay que revisar el modelo sin inferir un error obligatorio solo porque cambie la ganadora.
- Error C: La ganadora no conserva posición en el supuesto; eso contradice la estabilidad afirmada por esta alternativa.

- [DCLG/GOV.UK: Multi-criteria analysis — a manual](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/7612/1132618.pdf) · 4.7 modelos aditivos; 4.8 AHP; 5.6 escalas y funciones de valor; 6.2.14 sensibilidad; apéndice 5 AHP y consistencia, páginas impresas 127–130 · versión: Enero de 2009, ISBN 9781409810230; actualización de la edición de diciembre de 2000. PDF primario oficial, sin presentarlo como norma jurídica ni criterio único de elección · comprobado: 2026-10-28

Partida: `061ca18bf2eb010ad9ab5bebe9df14ec826edbcbf5fe9c375ce015803e6c03e3` · propuesta: `24dc15b82edd41bb0c1e60ff84eac67529c31ae93fe6e8523fb4fb05d696993d`

## AI-GSI-B2-T15-009

Decisión: pending_review · acción: revise.

Motivo: Conservar diferencia piloto/PoC técnica y clave A; cuatro fases o alcances de prueba plausibles, sin convertir nomenclatura NASA en regla universal.

### Antes

¿Qué distingue un piloto de una prueba de concepto técnica?

- A. Valida además operación y usuarios a pequeña escala **(correcta)**
- B. Elimina la necesidad de soporte
- C. Es siempre producción definitiva
- D. No utiliza usuarios ni procesos

Explicación: La PoC comprueba incertidumbres técnicas; el piloto incorpora operación y uso limitado.

### Propuesta

En la distinción entre una PoC técnica y un piloto de servicio, ¿qué añade este último?

- A. Evalúa operación, usuarios y procesos reales en un alcance limitado. **(correcta)**
- B. Se limita a demostrar una parte técnica en un entorno de pruebas.
- C. Sustituye la prueba limitada por el despliegue general definitivo.
- D. Describe el concepto de servicio sin ensayar su funcionamiento.

Explicación: En la distinción planteada, una PoC técnica reduce incertidumbre sobre un concepto o mecanismo; un piloto ensaya servicio y uso operativo con usuarios limitados. NASA documenta esa diferencia en su ciclo de proyectos IT. Las etiquetas pueden variar entre organizaciones: no se afirma que toda PoC excluya participación de usuarios ni que un piloto permita prescindir de soporte o controles.

- Error B: Demostrar una parte técnica aislada es más propio de la PoC descrita; no incorpora la comprobación operativa limitada que distingue al piloto preguntado.
- Error C: El despliegue general definitivo no es el ensayo limitado de un piloto, aunque el piloto pueda estar en un entorno productivo acotado.
- Error D: Definir un concepto sin ensayo no verifica su uso real ni la operación del piloto.

- [NASA: NPR 7120.7A, Chapter 5](https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_7120_007A_&page_name=Chapter5) · 5.1, apartados b.1 PoC, b.2 prototipo y c piloto: entorno de prueba, incertidumbre técnica, usuarios limitados y operación · versión: NASA IT Program and Project Management Requirements, Updated with Change 2; efectiva 17-08-2020, expiración mostrada 17-08-2030. Requisitos de NASA usados como ejemplo de distinción, sin imponer ATO NASA al proyecto GSI · comprobado: 2026-10-28

Partida: `f4b0bedab45dfde10bdb8aa05683ed9508a765fa8a0ffd7e66975023733807bb` · propuesta: `afaa10eb279251c677671733d76c49004dd637a591d47103325ac48b6a518433`

## AI-GSI-B2-T15-010

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la identificación de TCO y clave D; explicar por qué precio, TIR y valor ganado son métricas distintas.

### Antes

¿Qué concepto incluye compra, operación, formación, migración y retirada?

- A. Precio de compra exclusivamente
- B. TIR
- C. Valor ganado
- D. TCO **(correcta)**

Explicación: El coste total considera el ciclo de vida, no solo la adquisición inicial.

### Propuesta

¿Qué concepto incluye compra, operación, formación, migración y retirada?

- A. Precio de compra exclusivamente
- B. TIR
- C. Valor ganado
- D. TCO **(correcta)**

Explicación: TCO, Total Cost of Ownership, considera costes pertinentes durante un ciclo de vida y horizonte definidos: adquisición, implantación, operación, formación, mantenimiento, migración y retirada o salida. Deben evitarse dobles cómputos y hacerse explícitos los supuestos. No es el precio inicial, una tasa de rentabilidad ni una medida de trabajo ejecutado. OSOR incluye expresamente soporte, evolución y costes de salida.

- Error A: El precio de compra solo cubre una parte del ciclo de vida y omite operación, formación, transición o retirada.
- Error B: La TIR es una tasa que anula el VAN de los flujos considerados, no una suma de costes durante el ciclo de vida.
- Error C: El valor ganado mide trabajo realizado valorado al presupuesto; no es el conjunto de costes de adquisición y uso.

- [Comisión Europea, OSOR: Public procurement of open source software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Quality and vendor criteria: total cost of ownership, support, upgrades and exit costs; Buyer checklist: needs, resources, vendor neutrality, exit and long-term support · versión: Guía web de contratación y planificación consultada el 28-10-2026; criterios de gestión, sin convertirlos en cláusulas legales universales o mandato de elegir una licencia · comprobado: 2026-10-28
- [NIST: Capital Investment Analysis](https://www.nist.gov/el/applied-economics-office/manufacturing/capital-investment-analysis) · Methods for Investment Analysis: discounting, present value, net present value, internal rate of return y payback period; remisión a NIST 200-5 secciones 2.1, 2.3–2.5 y 3.3 · versión: Guía web primaria consultada el 28-10-2026; referencias de métricas, sin recomendar una inversión ni atribuir lectura al PDF HB135 que devolvió timeout · comprobado: 2026-10-28
- [NASA: PP&amp;C Glossary](https://www.nasa.gov/ocfo/ppc-corner/ppc-glossary/) · Cost Performance Index; Cost Variance; Schedule Performance Index; Milestone; Critical Path (Deterministic) y Critical Path Method · versión: Glosario web de planificación/control consultado el 28-10-2026, sin versión documental cerrada indicada; BCWP=EV, ACWP=AC y BCWS=PV en los cocientes citados · comprobado: 2026-10-28

Partida: `ae71af8a73fdd6a187b4fc68a2a9a5752a3b6a3ef449b76c0c5faf039d6c7771` · propuesta: `4b1ca1436dfbc7f8a012fa9b6eb88589b07fb29d98edfe6e9d58fdf9726d0c94`

## AI-GSI-B2-T15-012

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la definición de payback y clave C; distinguir plazo, importe, holgura y tasa, incluyendo variantes simple/descontada.

### Antes

¿Qué mide el payback?

- A. Coste real acumulado exclusivamente
- B. Holgura de una actividad
- C. Tiempo de recuperación de la inversión **(correcta)**
- D. Tasa que hace VAN cero

Explicación: Payback mide un plazo; TIR mide una tasa y VAN un valor descontado.

### Propuesta

¿Qué mide el payback?

- A. Coste real acumulado exclusivamente
- B. Holgura de una actividad
- C. Tiempo de recuperación de la inversión **(correcta)**
- D. Tasa que hace VAN cero

Explicación: El payback expresa el plazo necesario para recuperar la inversión mediante los flujos definidos. El simple no descuenta; una variante descontada aplica valor actual a los flujos. Ambos son plazos, no una tasa o un importe. Recuperar inicialmente no acredita por sí solo rentabilidad total del ciclo ni resuelve qué sucede con flujos posteriores.

- Error A: El coste acumulado es un importe; no expresa por sí solo cuándo los flujos recuperan la inversión.
- Error B: La holgura se refiere a flexibilidad temporal de actividades de una red, no al plazo económico de recuperación.
- Error D: La tasa que hace VAN cero es TIR; payback mide tiempo y puede calcularse con o sin descuento según la variante.

- [NIST: Capital Investment Analysis](https://www.nist.gov/el/applied-economics-office/manufacturing/capital-investment-analysis) · Methods for Investment Analysis: discounting, present value, net present value, internal rate of return y payback period; remisión a NIST 200-5 secciones 2.1, 2.3–2.5 y 3.3 · versión: Guía web primaria consultada el 28-10-2026; referencias de métricas, sin recomendar una inversión ni atribuir lectura al PDF HB135 que devolvió timeout · comprobado: 2026-10-28
- [NASA: PP&amp;C Glossary](https://www.nasa.gov/ocfo/ppc-corner/ppc-glossary/) · Cost Performance Index; Cost Variance; Schedule Performance Index; Milestone; Critical Path (Deterministic) y Critical Path Method · versión: Glosario web de planificación/control consultado el 28-10-2026, sin versión documental cerrada indicada; BCWP=EV, ACWP=AC y BCWS=PV en los cocientes citados · comprobado: 2026-10-28

Partida: `70d6c207524a7d9a3d1e75494749f0ff4da0f5b52bbb7447766ccb03ee6cdc9e` · propuesta: `f94316af6695baa1eb28728fb945bc795ffdcfb2728145abdf8a0cbacb33e287`

## AI-GSI-B2-T15-013

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la definición de TIR y clave A; delimitar existencia y unicidad sin confundirla con duración o payback.

### Antes

¿Qué define la TIR?

- A. La tasa que hace cero el VAN **(correcta)**
- B. La duración del camino crítico
- C. La suma bruta de todos los gastos
- D. El tiempo exacto de recuperación sin descuento

Explicación: La TIR se interpreta como tasa bajo los supuestos y limitaciones del flujo considerado.

### Propuesta

¿Qué define la TIR?

- A. La tasa que hace cero el VAN **(correcta)**
- B. La duración del camino crítico
- C. La suma bruta de todos los gastos
- D. El tiempo exacto de recuperación sin descuento

Explicación: Una TIR, cuando existe para los flujos considerados, es una tasa de descuento que hace cero el VAN. No es un plazo ni una suma bruta de costes. La ecuación depende de los flujos y puede no ofrecer una solución útil única; identificar una TIR no demuestra por sí solo que un proyecto sea la mejor elección o que toda inversión tenga una tasa positiva.

- Error B: El camino crítico determina una duración de planificación; no es una tasa de descuento de flujos.
- Error C: Sumar gastos sin descontar no busca una raíz de VAN cero ni define una tasa de rentabilidad.
- Error D: Ese plazo corresponde a recuperación simple; la TIR expresa una tasa y no el tiempo de recuperación.

- [NIST: Capital Investment Analysis](https://www.nist.gov/el/applied-economics-office/manufacturing/capital-investment-analysis) · Methods for Investment Analysis: discounting, present value, net present value, internal rate of return y payback period; remisión a NIST 200-5 secciones 2.1, 2.3–2.5 y 3.3 · versión: Guía web primaria consultada el 28-10-2026; referencias de métricas, sin recomendar una inversión ni atribuir lectura al PDF HB135 que devolvió timeout · comprobado: 2026-10-28
- [NASA: PP&amp;C Glossary](https://www.nasa.gov/ocfo/ppc-corner/ppc-glossary/) · Cost Performance Index; Cost Variance; Schedule Performance Index; Milestone; Critical Path (Deterministic) y Critical Path Method · versión: Glosario web de planificación/control consultado el 28-10-2026, sin versión documental cerrada indicada; BCWP=EV, ACWP=AC y BCWS=PV en los cocientes citados · comprobado: 2026-10-28

Partida: `852b6041088d2079603f61422ae77d93b94a3b13f092467c73ec85b700e53b62` · propuesta: `a0fd2395fe3de3df1b3ad2f001283963e3fc8d5713d777ab6e34e17dd8643334`

## AI-GSI-B2-T15-016

Decisión: pending_review · acción: revise.

Motivo: Conservar hito de duración cero y clave D; expresar las cuatro alternativas en horas para evitar que solo la correcta tenga forma breve.

### Antes

¿Qué duración tiene un hito en la planificación clásica?

- A. Siempre un día
- B. La de la actividad más larga
- C. La de toda la fase precedente
- D. Cero **(correcta)**

Explicación: El hito señala un evento; no es una actividad con duración.

### Propuesta

¿Cuántas horas de duración se asignan a un hito en el cronograma clásico?

- A. 24 horas
- B. 1 hora
- C. 8 horas
- D. 0 horas **(correcta)**

Explicación: Un hito representa un evento significativo del cronograma y tiene duración cero en el modelo clásico. Puede señalar la terminación de una fase o una aprobación, pero no absorbe la duración del trabajo que permite alcanzarlo. Preparar el entregable o celebrar la revisión requiere actividades que se planifican por separado.

- Error A: La duración de un día no es una propiedad del hito; puede ser un valor de una actividad o un ajuste de herramienta, pero el evento clásico no dura.
- Error B: Una hora de trabajo o revisión debe planificarse como actividad; no es la duración del hito que marca un evento.
- Error C: Ocho horas pueden representar una jornada de trabajo, pero no la duración del evento que señala su inicio o fin.

- [NASA: PP&amp;C Glossary](https://www.nasa.gov/ocfo/ppc-corner/ppc-glossary/) · Cost Performance Index; Cost Variance; Schedule Performance Index; Milestone; Critical Path (Deterministic) y Critical Path Method · versión: Glosario web de planificación/control consultado el 28-10-2026, sin versión documental cerrada indicada; BCWP=EV, ACWP=AC y BCWS=PV en los cocientes citados · comprobado: 2026-10-28

Partida: `f9c4b53211748ecf40626c2a841bc6d096d542ed4977717815bff59307e5c28e` · propuesta: `16b62b48b6710d7dffb45b479e9a2fbf42d28030eb8db2355a6bd2fe667bc3c5`

## AI-GSI-B2-T15-018

Decisión: pending_review · acción: revise.

Motivo: Conservar cálculo CPI, EV/AC y clave D; cuatro combinaciones próximas de número e interpretación, sin mezclar eficiencia con plazo.

### Antes

Con EV=80 y AC=100, ¿cuál es el CPI?

- A. 1,25, favorable en coste
- B. 20, favorable en plazo
- C. −20, que es el CPI
- D. 0,8, desfavorable en coste **(correcta)**

Explicación: CPI=EV/AC=0,8; el valor negativo de EV−AC corresponde a CV, no a CPI.

### Propuesta

Con EV=80 y AC=100, ¿cuál es el CPI?

- A. 1,25: eficiencia favorable en coste.
- B. 0,8: eficiencia favorable en coste.
- C. −0,2: índice de eficiencia en coste.
- D. 0,8: eficiencia desfavorable en coste. **(correcta)**

Explicación: CPI = EV/AC = 80/100 = 0,8. Por cada unidad de coste real se obtiene 0,8 de valor presupuestado del trabajo realizado; un índice inferior a uno indica desempeño desfavorable en coste. Es adimensional. La desviación de coste sería CV = EV−AC = −20, que es otro indicador y no sustituye el cociente.

- Error A: Se ha invertido el cociente: AC/EV = 1,25 no es CPI, por lo que tampoco se deduce una eficiencia favorable del dato correcto.
- Error B: El número es correcto, pero la interpretación no: CPI inferior a uno indica que el coste real supera al valor ganado.
- Error C: −0,2 puede obtenerse al normalizar una diferencia por AC, pero CPI es EV/AC y vale 0,8; una desviación relativa no es ese índice.

- [NASA: PP&amp;C Glossary](https://www.nasa.gov/ocfo/ppc-corner/ppc-glossary/) · Cost Performance Index; Cost Variance; Schedule Performance Index; Milestone; Critical Path (Deterministic) y Critical Path Method · versión: Glosario web de planificación/control consultado el 28-10-2026, sin versión documental cerrada indicada; BCWP=EV, ACWP=AC y BCWS=PV en los cocientes citados · comprobado: 2026-10-28

Partida: `acaa3e880a25548a5953b79a7b4e2e13cb8483af3a8cd2e380ffc067a8a98396` · propuesta: `db12aac2f3f851feae7291155445689477196dd997e720aac796ebbad7f88d4e`

## AI-GSI-B2-T15-004

Decisión: pending_review · acción: revise.

Motivo: Conservar normalización de coste/latencia y clave A; delimitar agregación con pesos adimensionales sin imponer una única fórmula de normalización.

### Antes

Se comparan coste en euros y latencia en milisegundos. ¿Qué operación resulta necesaria para combinar puntuaciones?

- A. Normalización de escalas **(correcta)**
- B. Sumar directamente euros y milisegundos
- C. Eliminar todos los criterios técnicos
- D. Convertir ambos valores en nombres

Explicación: La normalización hace comparables escalas y debe respetar si se maximiza o minimiza cada criterio.

### Propuesta

Se quieren sumar puntuaciones de coste en euros y latencia en milisegundos con pesos adimensionales. ¿Qué debe hacerse antes?

- A. Transformar los valores en puntuaciones comparables y orientadas. **(correcta)**
- B. Sumar directamente los valores monetarios y temporales observados.
- C. Cambiar el nombre de la unidad sin transformar los valores medidos.
- D. Igualar los pesos manteniendo las magnitudes originales sin escala común.

Explicación: Para combinar con pesos adimensionales puntuaciones de coste y latencia hay que construir escalas comparables, coherentes con preferencias y con el sentido de mejorar cada criterio. Normalizar o transformar a funciones de valor no consiste en sumar euros con milisegundos ni en cambiar etiquetas. La elección de rangos y escala influye en el significado de los pesos y debe documentarse.

- Error B: La suma directa mezcla dimensiones y no expresa una puntuación de valor coherente por el simple hecho de ser numérica.
- Error C: Renombrar una unidad no elimina su dimensión ni adapta el valor a una escala común de preferencia.
- Error D: Pesos iguales no corrigen por sí solos unidades y rangos distintos; deben definirse puntuaciones y compensaciones coherentes.

- [DCLG/GOV.UK: Multi-criteria analysis — a manual](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/7612/1132618.pdf) · 4.7 modelos aditivos; 4.8 AHP; 5.6 escalas y funciones de valor; 6.2.14 sensibilidad; apéndice 5 AHP y consistencia, páginas impresas 127–130 · versión: Enero de 2009, ISBN 9781409810230; actualización de la edición de diciembre de 2000. PDF primario oficial, sin presentarlo como norma jurídica ni criterio único de elección · comprobado: 2026-10-28

Partida: `d9ae2cd4cfa7364415c7d076f4837d0485595d2a062c36be1cb8a2d5371aa5bd` · propuesta: `fb8d5adfd3fe74dc868908910de1b6b3bf14c0aabf39b124614a0f415565830b`

## AI-GSI-B2-T15-005

Decisión: pending_review · acción: revise.

Motivo: Conservar umbral de saciedad y clave D; microcaso de latencia separa saturación, indiferencia global y requisito eliminatorio.

### Antes

¿Qué expresa un umbral de saciedad?

- A. Que un requisito legal puede ignorarse
- B. Que toda alternativa es inviable
- C. Que todo criterio debe crecer sin límite
- D. Que mejoras adicionales pueden dejar de aportar valor **(correcta)**

Explicación: La utilidad puede saturarse: más rendimiento por encima de cierto punto no siempre mejora la decisión.

### Propuesta

Una función asigna utilidad máxima a toda latencia de 100 ms o menos: bajar de 80 a 60 ms no añade puntos. ¿Qué expresa?

- A. Se ha fijado un umbral eliminatorio que invalida mejoras posteriores.
- B. La latencia deja de importar para todas las alternativas evaluadas.
- C. Cada reducción adicional debe aumentar linealmente la puntuación.
- D. Se ha modelado saciedad: mejorar más ya no añade utilidad en ese criterio. **(correcta)**

Explicación: La regla define una zona de saturación: alcanzado un nivel suficiente, una mejora física adicional no incrementa la utilidad asignada al criterio. NIST ilustra funciones de deseabilidad que permanecen en uno tras alcanzar un objetivo suficiente. No se extrapola su agregación geométrica a toda suma ponderada ni se confunde saciedad con incumplir un requisito eliminatorio.

- Error A: La regla no excluye soluciones por mejorar más; las mantiene en máxima utilidad. Un filtro eliminatorio tiene otra función.
- Error B: El criterio puede diferenciar alternativas fuera de la zona de saturación; no se declara irrelevante en todos sus valores.
- Error C: Se ha definido precisamente una meseta de utilidad; rendimiento físico y puntuación no tienen por qué crecer de forma lineal indefinida.

- [NIST/SEMATECH: e-Handbook, The desirability approach](https://itl.nist.gov/div898/handbook/pri/section5/pri5322.htm) · 5.5.3.2.2: funciones para maximizar y minimizar una respuesta; valor 1 tras alcanzar un objetivo suficiente T · versión: Manual web consultado el 28-10-2026, sin versión cerrada mostrada; ejemplo de función con saturación, no equivalencia general entre agregación geométrica del manual y suma ponderada · comprobado: 2026-10-28
- [DCLG/GOV.UK: Multi-criteria analysis — a manual](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/7612/1132618.pdf) · 4.7 modelos aditivos; 4.8 AHP; 5.6 escalas y funciones de valor; 6.2.14 sensibilidad; apéndice 5 AHP y consistencia, páginas impresas 127–130 · versión: Enero de 2009, ISBN 9781409810230; actualización de la edición de diciembre de 2000. PDF primario oficial, sin presentarlo como norma jurídica ni criterio único de elección · comprobado: 2026-10-28

Partida: `428ce6c57dd5800cf772755351f481f553576e6c47429480289cb4424585a0f2` · propuesta: `9b2f013b72ae06776eedc3b7218e42f29e37fd6e5409ebaf2fe1cf55310b5872`

## AI-GSI-B2-T15-006

Decisión: pending_review · acción: revise.

Motivo: Conservar limitación compensatoria y clave A; distractores sobre normalización de pesos, filtros e invariancia, sin afirmaciones ajenas al método.

### Antes

¿Qué limitación tiene una suma ponderada lineal?

- A. Es compensatoria entre puntuaciones **(correcta)**
- B. Garantiza una decisión independiente de supuestos
- C. No admite pesos
- D. Solo puede usar criterios con idéntico nombre

Explicación: Un resultado alto en un criterio puede compensar otro bajo; las restricciones eliminatorias se tratan aparte.

### Propuesta

¿Qué limitación tiene una suma ponderada lineal?

- A. Una puntuación alta puede compensar otra baja al sumar contribuciones. **(correcta)**
- B. La suma impide intercambios entre criterios si los pesos suman uno.
- C. La puntuación global detecta por sí sola requisitos eliminatorios incumplidos.
- D. El resultado permanece invariable aunque cambien escalas y pesos.

Explicación: La suma ponderada lineal es compensatoria: una contribución alta puede contrarrestar otra baja, según pesos y escalas. Los requisitos eliminatorios deben comprobarse de forma expresa, antes o fuera de esa compensación según el modelo. La utilidad del modelo también depende de hipótesis como independencia de preferencias; sumar a uno los pesos no valida automáticamente su adecuación.

- Error B: Normalizar la suma de pesos no elimina compensaciones: cada contribución sigue entrando en la suma global.
- Error C: Una puntuación global alta no garantiza cumplir cada requisito obligatorio si no se ha modelado un filtro o restricción pertinente.
- Error D: Pesos y escalas influyen en las contribuciones; el resultado no es independiente de esos supuestos.

- [DCLG/GOV.UK: Multi-criteria analysis — a manual](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/7612/1132618.pdf) · 4.7 modelos aditivos; 4.8 AHP; 5.6 escalas y funciones de valor; 6.2.14 sensibilidad; apéndice 5 AHP y consistencia, páginas impresas 127–130 · versión: Enero de 2009, ISBN 9781409810230; actualización de la edición de diciembre de 2000. PDF primario oficial, sin presentarlo como norma jurídica ni criterio único de elección · comprobado: 2026-10-28

Partida: `cf0e30284430b1ef6d930b063e7b7e8874bdb4187fd29851176afadfb7629f5a` · propuesta: `5316cf0c1115ac1384908dd2db74899569777487e40a1c8e83705130ff43ba85`

## AI-GSI-B2-T15-011

Decisión: pending_review · acción: revise.

Motivo: Conservar asociación inversión/gasto operativo y clave B; precisar capitalización y marco aplicable, sin etiquetar toda compra o suscripción automáticamente.

### Antes

¿Qué asociación es correcta, según el tratamiento contable aplicable?

- A. CAPEX: solo incidencias; OPEX: solo licencias perpetuas
- B. CAPEX: inversión; OPEX: gasto operativo **(correcta)**
- C. OPEX es siempre beneficio neto
- D. Ambos equivalen únicamente a precio de compra

Explicación: CAPEX y OPEX distinguen categorías contables; el TCO integra costes a lo largo del uso.

### Propuesta

¿Qué asociación es correcta, según el tratamiento contable aplicable?

- A. CAPEX: gasto de explotación; OPEX: inversión capitalizable.
- B. CAPEX: inversión capitalizable; OPEX: gasto de operación. **(correcta)**
- C. CAPEX: coste total del ciclo; OPEX: beneficio neto obtenido.
- D. CAPEX: pago inicial; OPEX: cualquier pago posterior, por su fecha.

Explicación: En el uso general planteado, CAPEX se refiere a inversión capitalizable y OPEX a gasto de operación. La clasificación concreta depende del marco contable y de la naturaleza del desembolso, no solo de la fecha o del nombre comercial. El PGC, como ejemplo, exige criterios para reconocer programas como activo y excluye capitalizar mantenimiento de la aplicación. No se aplica ese plan indistintamente a cualquier entidad ni se confunde inversión con beneficio.

- Error A: La asociación está invertida: no define CAPEX como gasto de explotación y OPEX como inversión capitalizable.
- Error C: TCO es coste de ciclo de vida y beneficio neto es otra magnitud; no son los significados de CAPEX/OPEX.
- Error D: El orden de pago no decide por sí solo reconocimiento de activo o gasto; debe atenderse a naturaleza y criterios aplicables.

- [SAP: What is Capex?](https://www.sap.com/resources/what-is-capex) · What counts as a capital expenditure; Capex vs. Opex: activos a largo plazo frente a operación; clasificación contable · versión: Artículo primario explicativo del fabricante, consultado el 28-10-2026; no se inventa fecha de publicación ni sustituye el tratamiento contable aplicable · comprobado: 2026-10-28
- [BOE: Real Decreto 1514/2007, Plan General de Contabilidad](https://www.boe.es/buscar/act.php?id=BOE-A-2007-19884) · Marco Conceptual: elementos y reconocimiento de activos/gastos; NRV 5.1 reconocimiento de intangibles; NRV 6.e programas y mantenimiento · versión: Consolidado informativo consultado, última actualización global publicada 21-12-2024. Ejemplo de criterios contables, sin declarar aplicable ese plan a toda entidad o compra · comprobado: 2026-10-28

Partida: `c472abdadc41919546f2942655a08ecf2f83f5fada33b645f03329314b4369fa` · propuesta: `e2d26e765e49bcb51639e2436d9a53a3ce139b6c3b7709735c35706b05eec0bb`

## AI-GSI-B2-T15-014

Decisión: pending_review · acción: revise.

Motivo: Conservar fórmula PERT y clave A con resultado de cinco días; usar O=2, M=4, P=12 para distinguir ponderación y media simple sin cambiar el concepto evaluado.

### Antes

Con O=2, M=5 y P=8 días, ¿qué estimación PERT clásica resulta?

- A. 5 días **(correcta)**
- B. 15 días
- C. 6 días
- D. 8 días

Explicación: La fórmula es (O + 4M + P)/6: (2 + 20 + 8)/6 = 5.

### Propuesta

Con O=2, M=4 y P=12 días, ¿qué duración esperada estima la fórmula PERT clásica?

- A. 5 días **(correcta)**
- B. 18 días
- C. 6 días
- D. 12 días

Explicación: La estimación PERT clásica es (O+4M+P)/6. Con 2, 4 y 12 días: (2+16+12)/6 = 30/6 = 5 días. La ponderación da más peso a la estimación más probable, por lo que no equivale aquí a la media simple. Es una estimación bajo el modelo, no una fecha garantizada de terminación ni la duración de todo el proyecto.

- Error B: 18 es la suma sin ponderación 2+4+12; falta multiplicar por cuatro el valor más probable y dividir entre seis.
- Error C: 6 es la media simple (2+4+12)/3, que no aplica la ponderación PERT clásica preguntada.
- Error D: 12 es la estimación pesimista; no es el promedio ponderado de los tres valores.

- [ICAR/NAARM: Project Management Techniques, 105th FoCARS](https://naarm.org.in/focarsrepository/files/4.%20Project%20Management%20Techniques.pdf) · Página impresa 10, paso 4: Expected Time = (Optimistic + 4 x Most Likely + Pessimistic)/6; página 11, paso 5: camino crítico y holgura · versión: Material primario del curso 105th Foundation Course for Agricultural Research Service; sin fecha editorial visible inventada. Página 10 corresponde a índice PDF 11 · comprobado: 2026-10-28

Partida: `4de58e7b810a0ebe792297b399930832d08120db58f5a3eceab06404475f4f81` · propuesta: `e4f872293cc28d58e10889d74a926fdfe421dd5cd4da5549cf25cdcad09d45d6`

## AI-GSI-B2-T15-017

Decisión: pending_review · acción: revise.

Motivo: Conservar efecto de retrasar una crítica y clave B; precisar CPM clásico y ausencia de compensación, con cuatro efectos próximos.

### Antes

Sin recuperar tiempo por otras medidas, retrasar una actividad crítica implica…

- A. Eliminar una dependencia automáticamente
- B. Retrasar el proyecto en el modelo considerado **(correcta)**
- C. Reducir necesariamente el coste
- D. Consumir siempre holgura positiva sin efecto final

Explicación: El camino crítico determina la duración y sus actividades tienen holgura total cero en el modelo clásico.

### Propuesta

En una red CPM clásica sin restricciones externas ni medidas compensatorias, una actividad crítica se retrasa. ¿Qué ocurre?

- A. Consumir holgura positiva sin modificar la terminación del proyecto.
- B. Retrasar la terminación prevista del proyecto en ese modelo. **(correcta)**
- C. Acortar automáticamente la duración de las actividades sucesoras.
- D. Transferir la criticidad a otra ruta que absorbe por sí sola el retraso.

Explicación: En la red CPM clásica descrita, una actividad crítica determina la terminación y no tiene holgura total que absorba el retraso. Sin medidas compensatorias o cambios de modelo, su retraso desplaza la fecha final. En cronogramas reales pueden intervenir restricciones, calendarios o recursos; no se extiende sin matices la regla de holgura cero a cualquier uso comercial de la palabra crítico.

- Error A: Una actividad con holgura positiva aprovechable para no afectar el final no es la crítica descrita en este modelo.
- Error C: El retraso no reduce por sí solo la duración restante de sucesoras; recuperar tiempo exige una acción o hipótesis distinta.
- Error D: Que existan otras rutas no hace que absorban el retraso de la que determina el final; sin compensación el proyecto se desplaza.

- [NASA: PP&amp;C Glossary](https://www.nasa.gov/ocfo/ppc-corner/ppc-glossary/) · Cost Performance Index; Cost Variance; Schedule Performance Index; Milestone; Critical Path (Deterministic) y Critical Path Method · versión: Glosario web de planificación/control consultado el 28-10-2026, sin versión documental cerrada indicada; BCWP=EV, ACWP=AC y BCWS=PV en los cocientes citados · comprobado: 2026-10-28
- [ICAR/NAARM: Project Management Techniques, 105th FoCARS](https://naarm.org.in/focarsrepository/files/4.%20Project%20Management%20Techniques.pdf) · Página impresa 10, paso 4: Expected Time = (Optimistic + 4 x Most Likely + Pessimistic)/6; página 11, paso 5: camino crítico y holgura · versión: Material primario del curso 105th Foundation Course for Agricultural Research Service; sin fecha editorial visible inventada. Página 10 corresponde a índice PDF 11 · comprobado: 2026-10-28

Partida: `261d5376920908ddda9d6c7252ba3738593095eb8ab482a7491a8ce3a1bdc129` · propuesta: `eacfae1658605ff578ff443b5828ff6a4e78d108778cba1720b434bfc14b9f7c`

## AI-GSI-B2-T15-019

Decisión: pending_review · acción: revise.

Motivo: Conservar SPI=0,75 y clave C; diferenciar valor de avance, coste y tiempo sin porcentajes de plazo inferidos automáticamente.

### Antes

Con EV=90 y PV=120, ¿qué indica SPI=0,75?

- A. Finalización del proyecto
- B. Ausencia de necesidad de línea base
- C. Avance inferior al plan en valor **(correcta)**
- D. Ahorro de coste necesariamente

Explicación: SPI=EV/PV; menos de uno indica avance inferior al valor planificado, sin describir por sí solo coste real.

### Propuesta

Con EV=90 y PV=120, ¿qué indica SPI=0,75?

- A. El proyecto ahorra el 25 % de los costes reales previstos.
- B. Ha transcurrido exactamente el 75 % del tiempo de calendario.
- C. El valor del trabajo realizado es inferior al valor planificado. **(correcta)**
- D. La fecha final se retrasará exactamente un 25 % sobre lo previsto.

Explicación: SPI = EV/PV = 90/120 = 0,75. A la fecha de corte se ha ganado menos valor presupuestado de trabajo del que se había planificado; el indicador es desfavorable en avance respecto del plan. No mide coste real, días transcurridos ni convierte directamente la diferencia en un porcentaje exacto de retraso final. La interpretación requiere una línea base y datos consistentes.

- Error A: No se proporciona AC; con EV y PV no se deduce ahorro de coste real ni CPI.
- Error B: SPI relaciona valores de trabajo, no la fracción del calendario consumida; puede haber perfiles de trabajo no uniformes.
- Error D: Un índice de 0,75 no pronostica por sí solo un retraso final exacto de 25 %; requiere analizar cronograma y trabajo restante.

- [NASA: PP&amp;C Glossary](https://www.nasa.gov/ocfo/ppc-corner/ppc-glossary/) · Cost Performance Index; Cost Variance; Schedule Performance Index; Milestone; Critical Path (Deterministic) y Critical Path Method · versión: Glosario web de planificación/control consultado el 28-10-2026, sin versión documental cerrada indicada; BCWP=EV, ACWP=AC y BCWS=PV en los cocientes citados · comprobado: 2026-10-28

Partida: `c9ed79ec09aad69c672548610d0b538b72b059c1ecab7ded04dfecb5db12e65b` · propuesta: `ecfd2d705ecacb37289a5589d774a138a3dd3893763175b30a6d384a92021a34`

## AI-GSI-B2-T15-020

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la definición de scope creep y clave B; distinguir crecimiento no gobernado de cambios controlados.

### Antes

¿Qué caracteriza al scope creep?

- A. La definición inicial de la EDT
- B. Crecimiento no controlado del alcance **(correcta)**
- C. Una reserva de contingencia identificada
- D. Toda modificación aprobada y documentada

Explicación: Los cambios relevantes deben evaluar impactos y obtener aprobación; el crecimiento sin control deteriora las líneas base.

### Propuesta

¿Qué caracteriza al scope creep?

- A. La definición inicial de la EDT
- B. Crecimiento no controlado del alcance **(correcta)**
- C. Una reserva de contingencia identificada
- D. Toda modificación aprobada y documentada

Explicación: Scope creep es expansión no controlada del alcance, sin la evaluación y ajustes pertinentes de tiempo, coste o recursos. Puede acumularse mediante pequeñas adiciones. No toda modificación es scope creep: un cambio solicitado, evaluado y aprobado puede formar parte de una gestión adecuada, tanto en enfoques predictivos como adaptativos. El objetivo no es prohibir aprender o cambiar, sino gobernar impactos y decisiones.

- Error A: La EDT define y descompone el alcance acordado; su creación no es por sí misma crecimiento no controlado.
- Error C: Identificar una reserva de contingencia es planificación de incertidumbre; no equivale a introducir entregables fuera del control.
- Error D: Un cambio aprobado y documentado no es por ese solo hecho scope creep; debe examinarse cómo se han evaluado y gestionado sus impactos.

- [Douglas J. Orlando/PMI: Scope and stakeholder management](https://www.pmi.org/learning/library/stakeholder-management-pain-points-perils-prosperity-5955) · Criticality of Understanding Customer Needs: scope creep; definición citada del PMI Lexicon 2012 y distinción de cambios gestionados · versión: Ponencia PMI Global Congress North America, 29-10-2013; fuente primaria de gestión, sin presentarla como edición actual completa del PMBOK · comprobado: 2026-10-28

Partida: `fccf85361eb5cd43f2fc6a605892f5c79fb3e7707094ab3d1f1e9577b6eb4e0f` · propuesta: `aec27ff43dbd17a90d8a5c6906a3a96b7c13b763cd30f545037a07201d4ba039`

## MAN-GSI-P18-081

Decisión: pending_review · acción: revise.

Motivo: Conservar foco DMS/ciclo documental y clave D; cuatro descripciones cercanas y comparables, reconociendo solapamiento con gestión de evidencias y plataformas amplias.

### Antes

¿Qué es un DMS o gestor documental?

- A. Sistema orientado a administrar contenido web, plantillas y publicación de páginas en un sitio.
- B. Plataforma que integra procesos, colaboración y contenidos empresariales de múltiples tipos.
- C. Sistema que conserva documentos como evidencia y aplica calendarios formales de retención y disposición.
- D. Un sistema que gestiona documentos y su ciclo de vida: captura, metadatos, versiones, permisos, búsqueda, retención y disposición. **(correcta)**

Explicación: DMS se centra en documentos y gobierno documental.

### Propuesta

¿Qué descripción expresa mejor el enfoque general de un DMS o gestor documental?

- A. Administrar contenido web, plantillas y publicación de páginas de un sitio.
- B. Integrar procesos, colaboración y contenidos empresariales de varios tipos.
- C. Gestionar evidencias con calendarios formales de retención y disposición.
- D. Gestionar documentos en su ciclo: captura, metadatos, versiones y acceso. **(correcta)**

Explicación: El foco general de un DMS es gestionar documentos durante su ciclo de vida, con captura, clasificación o metadatos, versiones, acceso y recuperación, y políticas de conservación o disposición cuando correspondan. Las categorías comerciales se solapan: una plataforma amplia puede reunir DMS, publicación web y gestión de evidencias. El foco de records management de una alternativa es más específico que la definición general preguntada.

- Error A: Describe principalmente publicación y contenidos web, el foco habitual de un CMS; puede integrarse con gestión documental sin definir todo el DMS.
- Error B: Describe una plataforma empresarial de contenidos más amplia; puede incluir DMS, pero no concreta su núcleo documental.
- Error C: El control de evidencias y calendarios formales prioriza records management. Puede solaparse con DMS, pero es una especialización frente al ciclo documental general preguntado.

- [Microsoft Support: Overview of document management in SharePoint](https://support.microsoft.com/en-au/sharepoint/libraries/overview-of-document-management-in-sharepoint) · Definición de ciclo documental; The elements of a document management system; The planning process: metadatos, acceso, versiones, flujos y retención · versión: Documentación histórica SharePoint 2013/2016 según su propio cuerpo y cabecera. Se usa para conceptos funcionales, no como recomendación de producto o afirmación de soporte vigente · comprobado: 2026-10-28
- [Drupal User Guide: Drupal as a Content Management System](https://www.drupal.org/docs/user_guide/en/understanding-drupal.html) · 1.1, What is a Content Management System?; foco en añadir, publicar, editar y retirar contenido web; distinción respecto de HTML estático · versión: Página actualizada 14-04-2025; guía actual de Drupal 11 consultada el 28-10-2026. El foco editorial no impide solapamiento con gestión de documentos o activos · comprobado: 2026-10-28

Partida: `5253727b3a62efaf4591327593bbc529a519ab224795aa8f8e3d8b9e56351313` · propuesta: `c8790a465ac0ebc8f691e64ad644ecd031d98f6818b3ca42f2c0760ce0ca7878`

## MAN-GSI-P18-082

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la definición CMS y clave B; explicar diferencias de foco sin imponer fronteras exclusivas entre productos.

### Antes

¿Qué es un CMS?

- A. Un sistema de gestión documental centrado en expedientes, versiones, clasificación, conservación y recuperación de documentos.
- B. Un sistema de gestión de contenidos orientado a creación, edición y publicación de contenidos, páginas y recursos. **(correcta)**
- C. Un sistema de gestión de activos digitales especializado en catalogar y distribuir imágenes, audio, vídeo y otros medios.
- D. Una herramienta que genera archivos HTML en una fase de construcción a partir de plantillas y contenido fuente.

Explicación: CMS se orienta a contenidos/publicación; puede solaparse con DMS, pero no es lo mismo.

### Propuesta

¿Qué es un CMS?

- A. Un sistema de gestión documental centrado en expedientes, versiones, clasificación, conservación y recuperación de documentos.
- B. Un sistema de gestión de contenidos orientado a creación, edición y publicación de contenidos, páginas y recursos. **(correcta)**
- C. Un sistema de gestión de activos digitales especializado en catalogar y distribuir imágenes, audio, vídeo y otros medios.
- D. Una herramienta que genera archivos HTML en una fase de construcción a partir de plantillas y contenido fuente.

Explicación: Un CMS permite crear, editar, organizar y publicar contenido; en el contexto web abarca páginas y recursos y los procesos editoriales asociados. Drupal describe ese foco y ofrece un ejemplo, sin agotar todas las arquitecturas CMS. Puede compartir permisos, versiones o flujos con un DMS y gestionar recursos multimedia, pero no se define solo por almacenar documentos o generar archivos HTML.

- Error A: Prioriza documentos, expedientes y conservación, el foco documental de la alternativa; no es la definición más general de gestión editorial de contenidos preguntada.
- Error C: La gestión especializada de activos multimedia es más estrecha que el concepto de CMS, aunque puedan integrarse ambas capacidades.
- Error D: Un generador estático produce archivos como parte de un proceso técnico; puede integrarse con un CMS, pero esa función aislada no define el sistema de gestión de contenidos.

- [Drupal User Guide: Drupal as a Content Management System](https://www.drupal.org/docs/user_guide/en/understanding-drupal.html) · 1.1, What is a Content Management System?; foco en añadir, publicar, editar y retirar contenido web; distinción respecto de HTML estático · versión: Página actualizada 14-04-2025; guía actual de Drupal 11 consultada el 28-10-2026. El foco editorial no impide solapamiento con gestión de documentos o activos · comprobado: 2026-10-28
- [Microsoft Support: Overview of document management in SharePoint](https://support.microsoft.com/en-au/sharepoint/libraries/overview-of-document-management-in-sharepoint) · Definición de ciclo documental; The elements of a document management system; The planning process: metadatos, acceso, versiones, flujos y retención · versión: Documentación histórica SharePoint 2013/2016 según su propio cuerpo y cabecera. Se usa para conceptos funcionales, no como recomendación de producto o afirmación de soporte vigente · comprobado: 2026-10-28

Partida: `c9abce3cb2a538bc48195c1dbcb796401ee059193be7951719f9d0165115c7b2` · propuesta: `dd0635ba13e8bc22d42ce4e63719765a9676d37a966c6f168cdb60d5b0cbaed3`

## MAN-GSI-P18-083

Decisión: pending_review · acción: revise.

Motivo: Conservar diferencia de foco DMS/CMS y clave C; distractores próximos a inversión de conceptos, solapamiento y soporte, evitando exclusiones por formato.

### Antes

¿Qué diferencia principal hay entre DMS y CMS?

- A. Ser sistemas siempre equivalentes, con el mismo modelo, funciones y ciclo de vida, aunque se orienten a necesidades de gestión diferentes.
- B. Limitar el DMS exclusivamente a imágenes y el CMS exclusivamente a PDF, sin que ninguno admita otros formatos o tipos de contenido.
- C. DMS prioriza documentos/ciclo de vida; CMS prioriza contenidos y publicación/experiencia. **(correcta)**
- D. Impedir que un CMS gestione permisos, flujos, versiones o publicación segmentada por usuarios, roles, canales y audiencias.

Explicación: Las fronteras comerciales se solapan, pero el foco funcional es distinto.

### Propuesta

En la distinción funcional habitual, ¿qué diferencia principal hay entre DMS y CMS?

- A. DMS prioriza publicación web y CMS prioriza custodia de documentos.
- B. DMS y CMS tienen el mismo foco, por compartir permisos y versiones.
- C. DMS prioriza el ciclo documental; CMS, contenidos y publicación. **(correcta)**
- D. DMS requiere documentos en papel y CMS admite solo documentos digitales.

Explicación: La distinción funcional habitual es el foco: ciclo de documentos y su control en DMS frente a creación y publicación de contenidos en CMS. No son fronteras excluyentes entre marcas o productos; ambos pueden incorporar metadatos, permisos, versiones y flujos, y una plataforma puede integrar las dos funciones. Que una función exista en uno no demuestra que esté prohibida en el otro.

- Error A: Invierte los focos de la distinción preguntada: publicación web corresponde al énfasis CMS y ciclo documental al DMS.
- Error B: Compartir capacidades no hace idénticos los objetivos o el foco de ambas categorías.
- Error D: Un DMS puede gestionar documentos digitales; soporte en papel frente a digital no define la diferencia con CMS.

- [Microsoft Support: Overview of document management in SharePoint](https://support.microsoft.com/en-au/sharepoint/libraries/overview-of-document-management-in-sharepoint) · Definición de ciclo documental; The elements of a document management system; The planning process: metadatos, acceso, versiones, flujos y retención · versión: Documentación histórica SharePoint 2013/2016 según su propio cuerpo y cabecera. Se usa para conceptos funcionales, no como recomendación de producto o afirmación de soporte vigente · comprobado: 2026-10-28
- [Drupal User Guide: Drupal as a Content Management System](https://www.drupal.org/docs/user_guide/en/understanding-drupal.html) · 1.1, What is a Content Management System?; foco en añadir, publicar, editar y retirar contenido web; distinción respecto de HTML estático · versión: Página actualizada 14-04-2025; guía actual de Drupal 11 consultada el 28-10-2026. El foco editorial no impide solapamiento con gestión de documentos o activos · comprobado: 2026-10-28

Partida: `9856dafba13eafc6278a670a07d061fb7c72e36b1187d2b5248968a0c9e193d9` · propuesta: `c660f35221ae2328c984c8f56fc5e9d555f9f2227ea46ab7980d40124f225a7f`
