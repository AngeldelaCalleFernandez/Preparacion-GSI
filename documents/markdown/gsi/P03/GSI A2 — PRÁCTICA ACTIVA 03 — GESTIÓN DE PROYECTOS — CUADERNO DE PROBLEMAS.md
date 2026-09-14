# GSI A2 — PRÁCTICA ACTIVA 03

## Gestión y economía de proyectos: PERT, CPM, EVM, TCO, VAN y TIR

**Ámbito:** III.02 (gestión y planificación del desarrollo) + II.15 (alternativas, viabilidad, presupuestación y costes).

**Cómo usarlo:** intenta cada problema sin mirar el solucionario. En PERT/CPM dibuja la red. En EVM escribe primero PV, EV y AC. En evaluación económica indica la fórmula y unidades. En decisiones multicriterio separa siempre **restricciones obligatorias** de **criterios ponderables**.

# PARTE A — Planificación, WBS, dependencias e hitos

1 — WBS vs cronograma

Explica por qué una EDT/WBS no es un calendario. Da un ejemplo de paquete de trabajo y de actividad calendarizada derivada de él.

2 — Hitos

Un proyecto incluye “Aprobación de diseño”, “Desarrollo API” y “Paso a producción”. ¿Cuáles pueden modelarse como hitos y qué duración tienen en el modelo clásico?

3 — Tipos de dependencia

Asocia FS, SS, FF y SF con: a) pruebas empiezan cuando termina desarrollo; b) dos equipos pueden empezar documentación y desarrollo a la vez; c) migración no puede finalizar hasta que finalice la validación; d) un turno antiguo termina cuando comienza el nuevo.

4 — Estimación vs compromiso

Un técnico estima una tarea entre 8 y 12 días y dirección anuncia “estará en 8”. Explica el error conceptual y cómo comunicarías la incertidumbre.

5 — Bottom-up

Un módulo se descompone en análisis 2 d, desarrollo 6 d, pruebas 3 d y documentación 1 d. ¿Qué ventaja y qué riesgo tiene sumar estimaciones bottom-up sin considerar dependencias, reservas ni recursos?

6 — PoC o piloto

Se duda si una librería puede procesar 20.000 documentos/hora. Después se quiere validar el proceso con 30 usuarios reales. ¿Qué parte corresponde a PoC y cuál a piloto?

7 — Cambio de alcance

En mitad del proyecto se solicita añadir firma biométrica. Enumera qué impactos debes analizar antes de aprobar/rechazar el cambio.

# PARTE B — PERT: estimación de tres puntos

Usa, cuando se indique, te = (O + 4M + P) / 6.

8 — PERT básico

O=4, M=7, P=16 días. Calcula te.

9 — Estimación simétrica

O=2, M=5, P=8. Calcula te.

10 — Sesgo pesimista

O=6, M=9, P=18. Calcula te y compara con M.

11 — Comparar tareas

Tarea A: O=3,M=6,P=9. Tarea B: O=2,M=7,P=14. ¿Cuál tiene mayor te?

12 — Cadena secuencial

A: O=2,M=3,P=4. B: O=3,M=5,P=9. C: O=1,M=2,P=3. Si son estrictamente secuenciales, calcula la duración esperada de la cadena.

13 — Dos escenarios

Una tarea tiene M=8. Escenario 1 O=6,P=10; escenario 2 O=3,P=17. Calcula ambos te y explica por qué la misma moda no implica la misma estimación PERT.

14 — Despejar P

Se desea te=7, con O=4 y M=6. ¿Qué P haría compatible esa estimación?

15 — No sumar en paralelo

Dos tareas independientes de te=5 y te=8 pueden ejecutarse en paralelo y empiezan a la vez. ¿Cuál es la duración del bloque si no hay restricciones de recursos? Explica por qué no es 13.

# PARTE C — CPM, camino crítico y holguras

Para 16–21 usa esta red:

| Actividad | Duración | Predecesoras |
| --- | --- | --- |
| A | 3 | — |
| B | 4 | — |
| C | 5 | A |
| D | 2 | A |
| E | 4 | B, D |
| F | 3 | C, E |

16 — Forward pass

Calcula ES y EF de todas las actividades.

17 — Duración del proyecto

Calcula la duración mínima resultante.

18 — Backward pass

Calcula LS y LF.

19 — Holgura total

Calcula la holgura total de cada actividad.

20 — Camino crítico

Identifica el camino crítico.

21 — Retraso

Si C se retrasa 1 día, ¿retrasa necesariamente el proyecto? ¿Y si D se retrasa 1 día?

Para 22–24 usa:

| Actividad | Duración | Predecesoras |
| --- | --- | --- |
| A | 2 | — |
| B | 6 | A |
| C | 4 | A |
| D | 3 | B,C |
| E | 5 | C |
| F | 2 | D,E |

22 — Dos caminos críticos

Calcula duración y caminos críticos.

23 — Qué significa holgura cero

Explica por qué puede haber más de un camino crítico y qué implica para la gestión.

24 — Cambio del camino crítico

Si B reduce su duración de 6 a 4 días manteniendo todo lo demás, vuelve a identificar el camino crítico. Explica por qué el camino crítico puede cambiar durante el proyecto.

# PARTE D — EVM / Valor ganado

Fórmulas de tus apuntes: CV=EV−AC; SV=EV−PV; CPI=EV/AC; SPI=EV/PV.

25 — Proyecto retrasado y con sobrecoste

PV=100.000 €, EV=80.000 €, AC=90.000 €. Calcula CV, SV, CPI y SPI e interpreta.

26 — Adelantado y ligeramente eficiente

PV=200.000 €, EV=220.000 €, AC=210.000 €. Calcula e interpreta.

27 — En plazo pero con sobrecoste

PV=300.000 €, EV=300.000 €, AC=360.000 €. Calcula e interpreta.

28 — Bajo coste pero retrasado

PV=400.000 €, EV=320.000 €, AC=280.000 €. ¿Puede un proyecto estar “por debajo de coste” y a la vez retrasado? Demuéstralo.

29 — Interpretar sin calcular

Si CPI=0,82 y SPI=1,08, describe el estado del proyecto.

30 — EV no es gasto

Explica por qué EV no debe confundirse con AC.

31 — SV no son días

SV=-40.000 €. ¿Significa “40.000 días de retraso” o permite conocer directamente cuántos días? Explica.

32 — Línea base

¿Por qué EVM pierde sentido si se modifica continuamente la línea base para hacer coincidir el plan con el resultado real?

33 — Cambio aprobado

Un cambio de alcance es aprobado formalmente. ¿Debe la baseline permanecer eternamente inmutable? Explica el tratamiento correcto.

# PARTE E — CAPEX/OPEX, TCO, ROI, payback, VAN y TIR

34 — Clasificar costes

Clasifica conceptualmente: compra inicial de servidores, suscripción mensual SaaS, electricidad, formación de migración, soporte anual y retirada del sistema. Después explica por qué TCO incluye más que CAPEX+licencia inicial.

35 — TCO a 4 años

Alternativa A: inversión 25.000 €, operación 8.000 €/año, migración 5.000 €, salida 3.000 €.

Alternativa B: 1.000 €/mes durante 48 meses, migración 3.000 €, salida 8.000 €.

Calcula TCO simple de ambas, sin descuento.

36 — ROI

Usa ROI=(beneficios−costes)/costes×100. Coste total 80.000 €; beneficios cuantificados 110.000 €. Calcula ROI.

37 — Payback simple

Inversión inicial 100.000 € y ahorro anual constante de 25.000 €. Calcula payback simple.

38 — Payback con flujos desiguales

Inversión 100.000 €. Flujos: año 1=30.000; año 2=40.000; año 3=50.000. Calcula el payback simple suponiendo distribución uniforme dentro del año 3.

39 — VAN

Inversión inicial 10.000 €. Flujos: 4.000, 5.000 y 4.000 € al final de los años 1–3. Tasa 5 %. Calcula VAN con VAN=-I0+Σ CFt/(1+r)^t.

40 — Comparar dos VAN

Tasa 6 %. Ambas alternativas requieren 20.000 € iniciales. A genera 8.000 €/año durante 3 años. B genera 4.000, 9.000 y 12.000 €. ¿Cuál tiene mayor VAN?

41 — TIR sencilla

Proyecto: -100 al inicio, +60 al año 1 y +60 al año 2. Estima la TIR (puedes usar calculadora/hoja de cálculo) y compárala con una tasa exigida del 8 %.

42 — TIR vs VAN

Explica por qué no debes afirmar “la TIR siempre elige mejor que el VAN”. Indica al menos dos cautelas conceptuales.

43 — Beneficio público no monetario

Una plataforma reduce el tiempo de espera ciudadano un 40 % pero no genera ingresos. ¿Debe considerarse “beneficio cero”? Explica cómo incorporarlo sin inventar euros.

# PARTE F — Alternativas, ponderación y sensibilidad

44 — Matriz ponderada

Pesos: funcionalidad 35 %, seguridad 25 %, TCO 20 %, soporte 20 %. Puntuaciones 0–10:

| Alt. | Func. | Seg. | TCO | Soporte |
| --- | --- | --- | --- | --- |
| A | 8 | 9 | 6 | 8 |
| B | 9 | 8 | 8 | 7 |
| C | 7 | 10 | 5 | 9 |

Calcula puntuación ponderada.

45 — Requisito eliminatorio

La alternativa mejor puntuada incumple un requisito legal obligatorio. ¿Puede “compensarlo” con mejor precio y funcionalidad?

46 — Sensibilidad

La diferencia entre dos alternativas es de 0,15 puntos sobre 10. ¿Qué harías antes de declarar una ganadora definitiva?

47 — Delphi, AHP y ponderación directa

Distingue conceptualmente las tres técnicas y explica cuándo preferirías una ponderación directa sencilla.

# PARTE G — Mini-supuestos integradores

48 — Modernización de aplicación

Debes sustituir una aplicación heredada en 9 meses. Define una respuesta breve que incluya: enfoque predictivo/ágil/híbrido, WBS/hitos, riesgos, baseline, control de cambios y criterios de éxito.

49 — On-premise vs servicio gestionado

Compara dos alternativas para una plataforma pública. Propón criterios obligatorios y ponderables, horizonte TCO y análisis de sensibilidad. No hace falta elegir tecnología concreta.

50 — Seguimiento mensual

Un proyecto informa PV=500k, EV=425k, AC=470k. El proveedor afirma “vamos bien porque hemos gastado menos de 500k”. Evalúa la afirmación.

51 — Nueva exigencia de seguridad

A mitad del desarrollo aparece una nueva obligación que requiere MFA y auditoría adicional. Describe el proceso de análisis/decisión y qué baselines/documentos podrían actualizarse si se aprueba.

52 — Decisión pública con beneficio intangible

Dos alternativas tienen TCO parecido. A reduce 20 % los tiempos internos; B mejora accesibilidad, resiliencia y satisfacción. Diseña una matriz de decisión que no convierta arbitrariamente todo en euros.

# Registro de progreso

| Bloque | Intento 1 | Intento 2 | Errores recurrentes |
| --- | --- | --- | --- |
| A Planificación |  |  |  |
| B PERT |  |  |  |
| C CPM |  |  |  |
| D EVM |  |  |  |
| E Economía |  |  |  |
| F Alternativas |  |  |  |
| G Supuestos |  |  |  |

Fuente de estudio: GSI A2 V2.1 — III.02 e II.15. Se mantienen las fórmulas y alcance de esos apuntes; no se incorporan como materia nuclear fórmulas avanzadas de EVM no presentes en ellos.
