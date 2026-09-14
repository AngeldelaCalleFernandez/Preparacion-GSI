# GSI A2 — PRÁCTICA ACTIVA 03

## Solucionario razonado — Gestión y economía de proyectos

**Regla:** no memorices resultados aislados. En examen escribe fórmula → sustitución → resultado → interpretación. En supuestos, una decisión bien justificada vale más que una lista de técnicas sin conexión con requisitos.

# PARTE A — Planificación

1 — WBS vs cronograma

La WBS descompone el alcance/entregables en paquetes gestionables; no asigna necesariamente fechas. Ej.: paquete “API de notificaciones”. El cronograma deriva actividades como “diseñar contrato”, “implementar endpoint”, “pruebas de integración”, con duración y dependencias.

2 — Hitos

“Aprobación de diseño” y “Paso a producción” pueden ser hitos: eventos de duración 0. “Desarrollo API” es actividad con duración.

3 — Dependencias

a) FS; b) SS; c) FF; d) SF. Para GSI interesa reconocer la lógica, no memorizar ejemplos artificiales.

4 — Estimación vs compromiso

8–12 es una estimación con incertidumbre. Convertir el extremo optimista en compromiso elimina el rango sin evidencia. Comunicaría rango, supuestos, riesgos y, si procede, una estimación probabilística/tres puntos.

5 — Bottom-up

Suma bruta=12 días si fuera totalmente secuencial y sin solapes. Ventaja: detalle y trazabilidad. Riesgo: ignorar dependencias, recursos compartidos, esperas, integración, reservas e incertidumbre. La suma de esfuerzos no equivale automáticamente a duración de calendario.

6 — PoC/piloto

PoC: verificar técnicamente 20.000 documentos/h. Piloto: validar en pequeño con usuarios/proceso real. Una PoC responde “¿puede funcionar técnicamente?”; un piloto también prueba operación/adopción.

7 — Cambio

Analizar alcance, plazo, coste, calidad, seguridad, arquitectura, datos, pruebas, accesibilidad, contratos/proveedor, recursos, riesgos y operación. Decidir por autoridad definida; si se aprueba, actualizar baselines y documentación de forma controlada.

# PARTE B — PERT

8

te=(4+4×7+16)/6=48/6=**8 días**.

9

te=(2+20+8)/6=**5 días**.

10

te=(6+36+18)/6=**10 días**. Es mayor que M=9 porque el pesimista está más alejado.

11

A=(3+24+9)/6=**6**. B=(2+28+14)/6=44/6=**7,33**. B es mayor.

12

A=3; B=(3+20+9)/6=5,33; C=2. Secuencial: **10,33 días**.

13

Esc.1=(6+32+10)/6=**8**. Esc.2=(3+32+17)/6=**8,67**. La moda es igual, pero la asimetría/rango de escenarios cambia la media ponderada.

14

7=(4+24+P)/6 → 42=28+P → **P=14**.

15

Si empiezan juntas y no hay restricción, el bloque termina cuando acaba la más larga: **8 días**. Sumar 5+8 supondría secuencialidad.

# PARTE C — CPM

### Red 1: forward/backward

| Act. | ES | EF | LS | LF | Holgura |
| --- | --- | --- | --- | --- | --- |
| A | 0 | 3 | 0 | 3 | 0 |
| B | 0 | 4 | 1 | 5 | 1 |
| C | 3 | 8 | 4 | 9 | 1 |
| D | 3 | 5 | 3 | 5 | 0 |
| E | 5 | 9 | 5 | 9 | 0 |
| F | 9 | 12 | 9 | 12 | 0 |

16

ES/EF son los de la tabla. E debe esperar a B (EF4) y D (EF5), por eso ES(E)=5. F espera a C (8) y E (9), por eso ES(F)=9.

17

Duración mínima=**12 días**.

18

LS/LF según tabla, calculados hacia atrás desde 12.

19

Holguras: A0, B1, C1, D0, E0, F0.

20

Camino crítico: **A–D–E–F** = 3+2+4+3=12.

21

C tiene 1 día de holgura: un retraso de 1 día puede absorberse sin retrasar el proyecto. D tiene holgura 0: 1 día de retraso retrasa el proyecto si no se recupera en otra parte.

### Red 2

Duración=**13 días**. Existen dos caminos críticos: **A–B–D–F** y **A–C–E–F**, ambos 13.

22

Resultado anterior. D espera B y C; E depende de C; F espera D y E.

23

Puede haber varias cadenas con holgura 0. La gestión es más delicada: un retraso en cualquiera de ellas puede afectar la fecha final y hay menos margen para reasignar recursos.

24

Si B pasa de 6 a 4: A–B–D–F=2+4+3+2=11, mientras A–C–E–F=2+4+5+2=**13**. El camino crítico pasa a ser **A–C–E–F**. El camino crítico depende de duraciones/dependencias actuales, no es una etiqueta permanente.

# PARTE D — EVM

25

CV=80−90=**−10k**; SV=80−100=**−20k**; CPI=80/90=**0,89**; SPI=80/100=**0,80**. Sobrecoste relativo y retraso.

26

CV=220−210=**+10k**; SV=220−200=**+20k**; CPI=**1,05**; SPI=**1,10**. Favorable en coste y avance respecto a plan.

27

CV=300−360=**−60k**; SV=0; CPI=**0,83**; SPI=**1,00**. En línea con avance planificado, pero con coste desfavorable.

28

CV=320−280=**+40k**; SV=320−400=**−80k**; CPI=**1,14**; SPI=**0,80**. Sí: eficiencia de coste favorable, pero avance inferior al plan.

29

CPI 0,82: coste desfavorable. SPI 1,08: avance por encima del plan en términos de valor ganado.

30

EV es el valor presupuestado del trabajo realmente completado; AC es cuánto costó realmente ejecutarlo. Precisamente su comparación produce CV/CPI.

31

SV está expresado en unidades de valor/coste de la baseline, no en días. Un SV negativo indica retraso en valor, pero no convierte directamente a tiempo de calendario sin analizar cronograma.

32

Si se “mueve la meta” cada mes para igualar lo real, desaparece la referencia contra la que medir desviaciones. La baseline debe cambiar solo mediante control formal de cambios.

33

No es eternamente inmutable. Un cambio aprobado puede justificar rebaselining conforme al proceso de gobierno, dejando trazabilidad de qué cambió y por qué. Lo incorrecto es modificarla para ocultar desviaciones.

# PARTE E — Economía

34

Compra inicial de servidores: típicamente CAPEX; SaaS mensual, electricidad y soporte anual: típicamente OPEX según tratamiento contable; migración/formación/retirada forman parte del coste total aunque su clasificación contable concreta dependa del marco. TCO intenta capturar **todo el coste de ciclo de vida**, no solo adquisición.

35

A=25.000 + 4×8.000 + 5.000 + 3.000 = **65.000 €**. B=48×1.000 + 3.000 + 8.000 = **59.000 €**. B es 6.000 € menor en este TCO simple, pero la decisión debe considerar seguridad, operación, dependencia, disponibilidad, etc.

36

ROI=(110.000−80.000)/80.000×100=**37,5 %**.

37

100.000/25.000=**4 años**.

38

Tras 2 años se recuperan 70.000; faltan 30.000. Año 3 aporta 50.000; 30/50=0,6. Payback=**2,6 años** bajo la hipótesis uniforme.

39

VAN=-10.000 + 4.000/1,05 + 5.000/1,05² + 4.000/1,05³ ≈ **+1.800,02 €**. Positivo según tasa/supuestos.

40

A: VAN≈**1.384,10 €**. B: VAN≈**1.858,98 €**. A igual inversión inicial, B presenta mayor VAN al 6 % con esos flujos.

41

La TIR de [-100,+60,+60] ≈ **13,07 %**. Al superar una tasa exigida del 8 %, resultaría aceptable bajo este criterio aislado.

42

VAN y TIR responden a métricas distintas. Cautelas: proyectos de distinta escala pueden ordenar diferente; flujos no convencionales pueden generar varias TIR o ninguna interpretable; la tasa de reinversión implícita y restricciones presupuestarias importan. Por eso la TIR no debe usarse mecánicamente.

43

No es beneficio cero. Registrar el 40 % de reducción como KPI de servicio, tiempo medio, satisfacción, accesibilidad, errores u otros beneficios medibles. Solo monetizar si existe un método defendible; en AAPP se puede decidir multicriterio con beneficios no monetarios explícitos.

# PARTE F — Alternativas

44

A=8×0,35+9×0,25+6×0,20+8×0,20=**7,85**.

B=9×0,35+8×0,25+8×0,20+7×0,20=**8,15**.

C=7×0,35+10×0,25+5×0,20+9×0,20=**7,75**.

Ganaría B con esos pesos/escala, antes de comprobar restricciones y sensibilidad.

45

No. Un requisito obligatorio/eliminatorio no debe compensarse con puntuación. La alternativa debe descartarse o corregir el incumplimiento antes de compararla.

46

Hacer análisis de sensibilidad: variar pesos dentro de rangos razonables, revisar incertidumbre de puntuaciones, comprobar datos/evidencias y ver si cambia el ranking. Una diferencia pequeña puede ser frágil.

47

Delphi: rondas de expertos con feedback hacia consenso. AHP: jerarquía y comparaciones por pares con análisis de consistencia. Ponderación directa: asignar pesos explícitos y transparentes. Preferiría directa cuando hay pocos criterios, gobernanza clara y se valora explicabilidad sobre sofisticación.

# PARTE G — Mini-supuestos

48 — Modernización

Respuesta fuerte: gobierno e hitos predictivos donde sean necesarios + construcción iterativa; WBS por entregables; hitos de requisitos/arquitectura/piloto/aceptación; riesgos y dependencias; baseline de alcance/plazo/coste; backlog/sprints para ejecución; pruebas/CI; control formal de cambios; KPI de plazo, calidad, adopción y servicio.

49 — On-prem vs gestionado

Primero restricciones: ENS/RGPD, integración, disponibilidad, soberanía/ubicación si aplica, reversibilidad contractual. Después ponderables: TCO 3–5 años, escalabilidad, operación, soporte, time-to-service, competencias, lock-in. Normalizar puntuaciones y variar pesos en sensibilidad.

50 — Seguimiento

PV=500, EV=425, AC=470. CV=-45; SV=-75; CPI≈**0,90**; SPI=**0,85**. La afirmación es engañosa: gastar menos de PV no significa ir bien, porque también se ha producido menos valor de lo previsto y además el coste por valor ganado es desfavorable.

51 — Cambio seguridad

Registrar solicitud/obligación; analizar impacto legal/técnico en arquitectura, identidad, logs, pruebas, coste/plazo; evaluar riesgos; decidir por gobierno. Si se aprueba: requisitos, WBS/backlog, arquitectura, plan de pruebas, presupuesto/cronograma/baselines, contratos y documentación operativa pueden cambiar con trazabilidad.

52 — Beneficio intangible

Definir criterios separados y medibles: TCO, reducción de tiempo, accesibilidad, disponibilidad/resiliencia, satisfacción, riesgo, soporte. Fijar umbrales obligatorios y pesos antes de puntuar. No transformar accesibilidad o resiliencia en euros inventados; usar puntuación/métricas y sensibilidad.

# Patrón mental de examen

* **PERT:** O, M, P → fórmula → unidades.
* **CPM:** red → forward pass → duración → backward pass → holguras → crítico.
* **EVM:** copia PV/EV/AC → CV/SV → CPI/SPI → interpreta coste y avance por separado.
* **TCO:** incluye ciclo de vida y salida, no solo precio.
* **VAN:** descuenta flujos; positivo depende de tasa/supuestos.
* **TIR:** tasa que hace VAN=0; úsala junto a VAN y contexto.
* **Alternativas:** primero restricciones eliminatorias; después criterios/pesos; al final sensibilidad.

Soluciones construidas estrictamente sobre el alcance y fórmulas de III.02 e II.15 V2.1. Los beneficios no monetarios del sector público se mantienen como métricas explícitas salvo que exista una monetización defendible.
