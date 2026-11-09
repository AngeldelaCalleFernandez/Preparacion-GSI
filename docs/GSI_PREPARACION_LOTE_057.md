# Preparación editorial GSI-EDITORIAL-057

Preparado y fuentes comprobadas el **29-10-2026**. **20 propuestas pendientes de aprobación expresa; ninguna aceptada, aplicada, activada o retirada en este lote.**

Hash canónico: `962a9707d5b8551525a5b46ac1860874413025f64ed40a72d70d19a2e1605a3e`. Base activa: `e3e20ab879518c899806a70575eead28b3b35e6f`.

[Ficha antes/después](GSI_REVISION_LOTE_057.md), [propuestas JSON](../content/question-reviews/lote-057.json) y [registro de preparación](../logs/gsi-editorial-057-preparation.json).

## Alcance y criterio

Posiciones **1121–1140** de la cola: **20 IA**, trece B3-T07 y siete B3-T08. Pirámide, técnicas de prueba, cobertura, TDD, dobles, flakiness, suficiencia, privacidad, recuperación, migración, defectos, instalación, cambio, hypercare y deuda técnica. Ninguna manual u oficial.

Se mantienen conceptos, IDs, claves, dificultad orientativa, procedencia y fuentes históricas. Dos formulaciones completas se conservan: AI-GSI-B3-T07-008, AI-GSI-B3-T07-018. Las restantes precisan alcance o distractores. Veinte explicaciones correctas y sesenta justificaciones de distractores por sus IDs originales, referidas al contenido para cualquier orden de presentación.

**14 conceptuales y seis aplicaciones contextualizadas**: T07-007 (límites), 012 (flaky), 013 (suficiencia), 015 (privacidad), 017 (restauración) y T08-003 (ventana). El contexto fija valores, condiciones o alcance evaluables, sin transformar toda definición en supuesto ni imponer cuotas.

Se precisa qué mide cobertura, cómo preservar un contrato observable al refactorizar, por qué flakiness no identifica por sí sola la causa y cómo distinguir una evidencia de una garantía. La clasificación de cambios se delimita según modelo y autorización; la preautorización no borra condiciones o trazabilidad.

Las rúbricas son juicio del preparador, no aceptación del propietario, revisión independiente o dificultad calibrada. Las aceptaciones IA históricas conservan sus hashes anteriores y no aceptan estas versiones. Los estados heredados en after no activan las propuestas.

| ID | Clave original | Tipo | Formulación | Motivo |
| --- | --- | --- | --- | --- |
| AI-GSI-B3-T07-006 | D | Conceptual | Ajustada | Conservar coste relativo de E2E y clave D; distinguir orientación, evidencia entre niveles y excepciones sin cuotas. |
| AI-GSI-B3-T07-007 | B | Aplicación | Ajustada | Conservar valores límite y clave B; microcaso entero con extremos inclusivos explícitos. |
| AI-GSI-B3-T07-008 | A | Conceptual | Conservada | Conservar íntegra formulación y clave A; el contraste entre técnicas ya delimita el objetivo. Ampliar uso y límites. |
| AI-GSI-B3-T07-009 | C | Conceptual | Ajustada | Conservar alcance limitado de cobertura y clave C; precisar código medido e instrumentación, sin equiparar líneas con caminos o aserciones. |
| AI-GSI-B3-T07-010 | D | Conceptual | Ajustada | Conservar Red-Green-Refactor y clave D; permutaciones plausibles de las mismas fases y explicación del objetivo de cada una. |
| AI-GSI-B3-T07-011 | C | Conceptual | Ajustada | Conservar riesgo de acoplamiento y clave C; delimitar llamadas que no pertenecen al contrato para no condenar toda verificación de interacciones. |
| AI-GSI-B3-T07-012 | B | Aplicación | Ajustada | Conservar investigación de flaky tests y clave B; evitar atribuir la causa exclusivamente al código del test. |
| AI-GSI-B3-T07-013 | B | Aplicación | Ajustada | Conservar cobertura/riesgo residual y clave B; separar verde técnico de decisión de suficiencia o excepción. |
| AI-GSI-B3-T07-015 | D | Aplicación | Ajustada | Conservar datos sintéticos/anonimizados y clave D; caso que no necesita identidad, con límites jurídicos y técnicos explícitos. |
| AI-GSI-B3-T07-017 | A | Aplicación | Ajustada | Conservar evidencia de procedimiento ejecutable y clave A; microcaso de restauración con validación del resultado y alcance explícito. |
| AI-GSI-B3-T07-018 | B | Conceptual | Conservada | Conservar íntegra formulación y clave B; controles y distractores ya próximos al concepto. Precisar límites de agregados y corte comparable. |
| AI-GSI-B3-T07-019 | C | Conceptual | Ajustada | Conservar retest/confirmación frente a regresión y clave C; comparar objetivos próximos sin distractores de hardware ajenos. |
| AI-GSI-B3-T07-020 | C | Conceptual | Ajustada | Conservar impacto/urgencia y clave C; clasificaciones y métricas cercanas, sin equiparar prioridad con severidad. |
| AI-GSI-B3-T08-001 | D | Conceptual | Ajustada | Conservar repetibilidad/auditoría y clave D; distinguir instalación verificable de copia, arranque y repetición sin evidencia. |
| AI-GSI-B3-T08-002 | D | Conceptual | Ajustada | Conservar preparación de migración y clave D; relacionar mapeo/calidad/ensayo/reconciliación con recuperación sin prometer pérdida cero. |
| AI-GSI-B3-T08-003 | B | Aplicación | Ajustada | Conservar validación/rollback y clave B; microcaso de ventana nocturna para evaluar margen y decisión antes del agotamiento. |
| AI-GSI-B3-T08-004 | B | Conceptual | Ajustada | Conservar evaluación/autorización/ejecución/validación y clave B; explicitar cambio planificado no preautorizado y evitar una secuencia universal rígida. |
| AI-GSI-B3-T08-005 | B | Conceptual | Ajustada | Conservar cambios estándar preautorizados y clave B; distinguir elegibilidad, repetición, urgencia y ausencia de registro. |
| AI-GSI-B3-T08-006 | C | Conceptual | Ajustada | Conservar soporte reforzado inicial y clave C; precisar seguimiento y salida, sin plazo universal o abandono de soporte posterior. |
| AI-GSI-B3-T08-007 | A | Conceptual | Ajustada | Conservar coste/riesgo futuro y clave A; reconocer valor inmediato y gestión contextual sin convertir toda deuda en fallo funcional. |

## Fuentes y localizadores

**19 URLs primarias consultadas directamente el 29-10-2026.** Cuatro PDF finales se consultan textualmente: ISTQB v4.0.1, NIST SP800-34 Rev.1, NIST SP800-128 y guía PDPC traducida por AEPD. El respaldo normativo se distingue de las recomendaciones técnicas y de los ejemplos de proveedores. Las fechas históricas no se convierten en última edición o métricas actuales.

| Fuente | Localizadores y versión | Fecha real |
| --- | --- | --- |
| [Martin Fowler: Test Pyramid](https://martinfowler.com/bliki/TestPyramid.html) | Equilibrio entre pruebas de bajo nivel y de flujo completo; costes, fragilidad y excepciones en nota 2. Artículo de 01-05-2012 leído el 29-10-2026. Orientación contextual, sin cuota universal o afirmación de que toda E2E sea lenta | 2026-10-29 |
| [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/?download_id=3345&sdm_process_download=1) | 4.2.2 valores límite; 4.2.3 tablas de decisión; 2.2.3 confirmación/regresión; 5.1.3 criterios de salida; 5.5 severidad y prioridad. v4.0.1 de 15-09-2024, PDF de 78 páginas leído textualmente el 29-10-2026. Se conservan técnicas y distinciones del temario; no se atribuye calibración o acreditación al lote | 2026-10-29 |
| [Martin Fowler: Test Coverage](https://martinfowler.com/bliki/TestCoverage.html) | Cobertura como detector de partes no ejercitadas; límites de porcentaje y calidad de aserciones. Artículo de 17-04-2012 leído el 29-10-2026. No se adoptan sus porcentajes de ejemplo como umbral del proyecto | 2026-10-29 |
| [Martin Fowler: Test Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html) | Tres pasos: prueba, implementación y refactorización; Red-Green-Refactor; lista de casos y revisiones. Actualización de 11-12-2023 sobre entrada original de 2005, leída el 29-10-2026. Técnica de desarrollo, no sustituto de toda la estrategia de pruebas | 2026-10-29 |
| [Andrew Trenk: Testing on the Toilet, Don’t Overuse Mocks](https://testing.googleblog.com/2013/05/testing-on-toilet-dont-overuse-mocks.html) | Problemas de legibilidad, mantenimiento y fidelidad; expectativas que filtran detalles de implementación. Google Testing Blog, 28-05-2013, leído el 29-10-2026. No prohíbe dobles ni verificar interacciones que pertenezcan al contrato | 2026-10-29 |
| [John Micco: Flaky Tests at Google and How We Mitigate Them](https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html) | Definición de resultados alternos con el mismo código; causas de concurrencia, comportamiento no determinista, terceros e infraestructura. Google Testing Blog, 27-05-2016, leído el 29-10-2026. Las tasas observadas entonces no se presentan como métricas actuales; la causa puede estar en prueba, entorno o producto | 2026-10-29 |
| [BOE: Reglamento (UE) 2016/679](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) | Considerando 26: identificabilidad y anonimato; artículo 4.5: seudonimización; artículo 5.1.c: minimización; análisis y correcciones vinculadas. Texto original DOUE L119 de 04-05-2016 en BOE, leído el 29-10-2026; se consultan las correcciones de 2018 y 2021. La seudonimización no se equipara a anonimato ni toda generación sintética a ausencia de riesgo | 2026-10-29 |
| [BOE: Corrección de errores del RGPD de 2018](https://www.boe.es/buscar/doc.php?id=DOUE-L-2018-80845) | Texto de corrección vinculado en análisis del RGPD; contraste del respaldo normativo de anonimato/seudonimización. DOUE L127 de 23-05-2018, pp.3–7; página oficial consultada el 29-10-2026. No se usa como definición alternativa de anonimización | 2026-10-29 |
| [BOE: Corrección de errores del RGPD de 2021](https://www.boe.es/buscar/doc.php?id=DOUE-L-2021-80264) | Texto de corrección vinculado en análisis del RGPD; contraste del respaldo normativo de anonimato/seudonimización. DOUE L74 de 04-03-2021, pp.35–38; página oficial consultada el 29-10-2026. No se interpreta como una autorización para copiar datos a pruebas | 2026-10-29 |
| [PDPC Singapur, traducción AEPD: Guía básica de anonimización](https://www.aepd.es/documento/guia-basica-anonimizacion.pdf) | Caso E, p.16: datos sintéticos para desarrollo/pruebas y supuestos; pasos 1–5: identificadores, técnicas y riesgo de reidentificación/divulgación. Edición española de octubre de 2022 según portada, PDF de 72 páginas leído textualmente el 29-10-2026. Autoría PDPC y traducción/prólogo AEPD; guía técnica, no norma española autónoma | 2026-10-29 |
| [NIST SP 800-34 Rev.1: Contingency Planning Guide](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf) | 3.5 y 3.5.1 TT&E/Testing: objetivos, comprobación de recuperación y documentación; 3.6 mantenimiento del plan. Revisión 1, mayo de 2010, PDF de 149 páginas en esta URL, leído textualmente el 29-10-2026. Referencia metodológica histórica, sin imponer requisitos federales estadounidenses al proyecto | 2026-10-29 |
| [AWS DMS: Data validation](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html) | Introducción y limitaciones: comparación de filas origen/destino, discrepancias, consumo y cambios concurrentes. Guía pública en ruta latest leída el 29-10-2026, sin inferir edición o instalación local. Es ejemplo de contraste; no todo conteo o total demuestra exactitud de registros | 2026-10-29 |
| [UK Government: The Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) | Data lifecycle; Data quality dimensions: completeness, uniqueness, consistency, validity y accuracy. Publicado el 03-12-2020 según página, leído el 29-10-2026. Completitud y exactitud son distintas; marco de ejemplo, no obligación española inferida | 2026-10-29 |
| [NIST SP 800-128: Security-Focused Configuration Management](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-128.pdf) | 3.2 configuración de línea base; 3.3.2 solicitud, impacto, pruebas, aprobación, implementación y verificación; 3.3.3 análisis de impacto. Agosto de 2011 con actualizaciones hasta 10-10-2019 según portada, PDF de 99 páginas leído textualmente el 29-10-2026. Se usa el proceso y evidencia, sin exigir un CAB para cada cambio | 2026-10-29 |
| [AWS Prescriptive Guidance: Pre-cutover stage](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/pre-cutover-stage.html) | Developing a cutover plan; Creating a cutover runbook: dependencias, pruebas, responsables, duraciones y tiempo de rollback. Página pública en ruta latest leída el 29-10-2026. Ejemplo de planificación; no se migra infraestructura o configura AWS | 2026-10-29 |
| [AWS Prescriptive Guidance: Cutover stage](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/cutover-stage.html) | Rollback: checkpoints, criterios, decisor, datos nuevos y pruebas de restauración en entornos inferiores. Página pública en ruta latest leída el 29-10-2026. La recuperación debe contemplar datos y tiempo; no basta cambiar binarios o redirigir tráfico en cualquier caso | 2026-10-29 |
| [Atlassian: Types of change management for ITSM teams](https://www.atlassian.com/itsm/change-management/types) | Standard changes: bajo riesgo, repetición, proceso documentado y preaprobado; contraste con normal/emergency. Página pública leída el 29-10-2026, sin edición numerada indicada. La preautorización requiere elegibilidad y modelo; no elimina registro, validación o controles | 2026-10-29 |
| [Microsoft Learn: Plan your support operations](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/transition-to-support-operations) | Hypercare: recursos reforzados tras go-live, criterios de salida, expectativas, documentación y transición a soporte. Página pública de guía Dynamics365 leída el 29-10-2026. El cuerpo se obtiene junto a un aviso de autorización; no se inicia sesión ni se intenta eludir acceso. No se fija duración universal | 2026-10-29 |
| [Ward Cunningham: The WyCash Portfolio Management System](https://c2.com/doc/oopsla92.html) | Párrafos sobre consolidación, primera entrega como deuda y coste posterior como interés. Experience Report OOPSLA92, texto fechado 26-03-1992, leído el 29-10-2026. Metáfora de coste técnico, no categoría contable o porcentaje financiero literal | 2026-10-29 |

### Decisiones de revisión

- Veinte IA en posiciones1121–1140: trece B3-T07 y siete B3-T08. Conceptos, IDs, claves, procedencia y aceptaciones históricas conservados; las aceptaciones previas no aceptan el contenido nuevo.
- Se conservan formulaciones completas T07-008 y018. Catorce conceptuales y seis aplicaciones: límites007, flaky012, suficiencia013, privacidad015, recuperación017 y ventanaT08-003. Se añaden casos cuando fijan condiciones útiles, sin cuota impuesta.
- La pirámide es contextual: las E2E suelen costar más, pero hay excepciones y no sustitución total entre niveles. No se fijan porcentajes universales o se presentan cifras de Google2016 como actuales.
- Cobertura de líneas se refiere al código ejecutable medido. No acredita ramas, caminos, aserciones o suficiencia. TDD diferencia fallo por nueva funcionalidad de entorno averiado; su ciclo no sustituye la estrategia completa.
- Mocks se delimita a detalles internos ajenos al contrato. Un protocolo de interacciones sí puede ser requisito; el abuso no significa prohibir dobles.
- Flaky se trata como problema que investigar sin atribuir por defecto causa al código de prueba. Prueba, entorno y producto pueden intervenir; reintentar hasta verde o cuarentena sin seguimiento no corrige la causa.
- Para datos personales se contrastan RGPD en BOE y sus correcciones vinculadas, más guía técnica PDPC traducida por AEPD. Seudonimización no es anonimato; datos sintéticos no se declaran automáticamente libres de identificación. No se tratan datos personales reales.
- Conteos y totales no demuestran exactitud de cada registro. Se requiere reconciliar correspondencias, reglas y excepciones con un corte comparable; el ejemplo DMS no implica instalar un servicio.
- Confirmación y regresión se distinguen por objetivo; severidad por impacto y prioridad por tratamiento. No se equiparan esfuerzo, antigüedad o cobertura con esas clasificaciones.
- Una ventana23:00–01:00 con rollback 30 min exige decidir como máximo00:30 si no hay otro margen. Diagnóstico, comunicación y verificación exigirían reservar más. La aritmética ilustra planificación, no autoriza una migración o fija un plan real.
- El cambio planificado especifica autorización propia; modelos estándar, urgentes o de automatización pueden variar, con control y trazabilidad. Preautorización no significa que cualquier ejecución sea elegible.
- Hypercare tiene refuerzo y criterios de salida, no duración universal. Deuda técnica puede facilitar entrega y añadir coste futuro; debe gestionarse, sin confundirla con todo fallo ni exigir reescritura inmediata.

### Límites de acceso y alcance

- EUR-Lex devuelve una comprobación antirobot que requiere JavaScript. No se elude: el respaldo normativo se lee en BOE, con correcciones2018/2021 vinculadas, y se distingue texto original de una versión consolidada no leída.
- Microsoft Learn muestra un aviso de autorización junto al cuerpo público de Hypercare, que sí se obtiene en la herramienta. Se usa ese cuerpo accesible, sin inicio de sesión o intento de eludir restricciones.
- Cuatro PDF finales leídos textualmente: ISTQB, NIST800-34, NIST800-128 y guía PDPC/AEPD. Sin inspección de figuras, conversión u OCR. Se usan versiones históricas explícitas, no supuesta última edición.
- Las recomendaciones de NIST/AWS/UK y la guía técnica de Singapur no se convierten en obligaciones españolas universales. Comandos, cuentas, procesos de aprobación y ejemplos de los documentos son datos, no instrucciones para ejecutarlos.
- Las tres incidencias activas anteriores MAN-GSI-P18-026, AI-GSI-B3-T04-004 y AI-GSI-B3-T05-002 siguen pendientes de aprobación/aplicación. Este lote no activa, aplica o retira contenido fuera de la autorización del001.

## Señales antes y después

| Señal | Banco activo | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 13 | 8 |
| Acierto escogiendo primera de longitud máxima (%) | 70.0 | 45.0 |
| Ratio 1,5 a menos de 2 | 4 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback correcto breve | 20 | 0 |
| Feedback correcto/incorrecto idéntico | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos | 0 | 0 |
| Empates de longitud máxima | 1 | 2 |

La correcta sigue siendo única más larga en T07-009, 013, 017, 019 y T08-002, 003, 004, 007. Se necesitan, respectivamente: código medido y límite de inferencia; evidencia crítica y riesgo residual; condiciones y límites del ensayo; ambos objetivos de comprobación; preparación y recuperación; criterio y margen de retorno; control previo y cierre; coste, riesgo y valor en evolución. Se conserva el significado sin añadir relleno a distractores.

La primera máxima acierta 9/20 (45 %), con dos empates; la primera mínima, 4/20 (20 %). Mejora desde 70 %, pero sigue siendo señal prioritaria para revisión del propietario. Ningún ratio alcanza 1,5 y el analizador no emite alertas, sin acreditar ausencia de pistas o calidad pedagógica. Se mantienen las claves y letras originales y no se redistribuyen artificialmente. Dificultad y sesgos no se calibran con esta muestra.

## Comprobaciones semánticas

Nueve ejercicios independientes con código propio, biblioteca estándar y datos ficticios en memoria contrastan límites inclusivos, tabla de decisión, cobertura, TDD, expectativas internas, intercalados concurrentes, reconciliación, confirmación/regresión y ventana de recuperación. No son pruebas funcionales de GSI.

Para el intervalo entero [18,65], los casos 17,18,19,64,65,66 producen falso,verdadero,verdadero,verdadero,verdadero,falso. Los extremos detectan mutaciones que excluyen18 o65; el valor interior35 no detecta esas dos mutaciones. Una tabla ficticia de dos condiciones enumera cuatro combinaciones y hace visible una regla omitida.

Una función deliberadamente defectuosa de una línea, cuyo contrato es valor absoluto, obtiene 100 % de líneas ejecutables medidas con entrada2 y aun falla con−1. Se usa traza local de esa función, no cobertura de la aplicación. Una enumeración separada muestra que dos decisiones binarias permiten cuatro combinaciones: ejercitar dos no equivale a todas. No se confunden cobertura, aserciones y exhaustividad.

El incremento ficticio duplicar3 pasa de rojo (3) a verde (6); la reorganización n+n→2n conserva el resultado, por igualdad algebraica y casos muestreados. Otro ejemplo conserva resultado5 al pasar de llamadas add individuales a add_all, pero cambia una expectativa interna accidental. No se deduce que toda verificación de interacciones sea indebida.

Con el mismo código de contador, una secuencia serial da2 y una intercalada da1. Un test que espera2 alternaría según la planificación: es una causa posible en el producto, no un diagnóstico de la suite GSI. Se usan intercalados explícitos, sin lanzar hilos o pruebas aleatorias.

Dos conjuntos ficticios tienen dos filas, claves únicas1/2 y total30; intercambiar importes10/20 entre sus IDs mantiene todos esos agregados y cambia ambos registros. La reconciliación por ID detecta las diferencias. Otra pareja de funciones muestra que confirmar una corrección en0 puede pasar mientras un caso anterior en1 detecta una regresión.

La ventana 23:00–01:00 tiene 120 minutos. Restar rollback 30 min deja decisión límite 00:30 sin ningún otro margen; decidir 00:50 acabaría 01:20. Reservar 10 min adicionales desplaza el límite a 00:20. Se asume una ventana civil sin cambio de desfase; el cálculo no programa una migración real ni garantiza duraciones operativas.

La pregunta de privacidad se contrasta con considerando26, artículos4.5/5.1.c y correcciones vinculadas del RGPD en BOE, más guía técnica PDPC/AEPD. No se presenta el texto original como una consolidación de EUR-Lex no accesible. No se generan fixtures de personas, se anonimiza un conjunto real o se certifica cumplimiento mediante un ejemplo.

No se registran nuevas incidencias confirmadas en este lote. Las tres anteriores, MAN-GSI-P18-026, AI-GSI-B3-T04-004 y AI-GSI-B3-T05-002, mantienen correcciones pendientes de aprobación/aplicación. **Siguen en las versiones activas y mantienen abierto el cierre editorial.**

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-057.json --render docs/GSI_REVISION_LOTE_057.md --literal-content
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py --write
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
git diff --check
```

Resultados: **19 pruebas editoriales, 79 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**, además de documentación, referencias y progreso. La simulación modifica exclusivamente las veinte IA previstas, conserva IDs, claves y procedencia y aporta sesenta justificaciones de distractores. Se rechazan ausencia de aceptación, recibo del piloto y revisión histórica como aprobación. Las **veinte aceptaciones IA históricas** conservan sus hashes anteriores y no aceptan estas versiones. **243 archivos protegidos** intactos y **125 enlaces locales** existentes.

**Nueve ejercicios independientes y diez controles Chrome correctos**. Captura de ventana inspeccionada; sin desbordamiento a 1280 y 390 px. Las ocho invocaciones de validación y el render literal terminan con código 0. Los tres derivados siguen idénticos al inicio; frente a HEAD solo cambia la fecha 26→29. Bancos activos iguales a HEAD y oficiales iguales en bytes a la auditoría. Cero errores técnicos no acredita cierre editorial: quedan decisiones del propietario y las tres correcciones activas pendientes.

La ficha se comprueba con Chrome, Playwright y marked existentes, cargada en memoria con conexiones externas bloqueadas: veinte apartados, marcas correctas, opciones, explicaciones, URLs y ausencia de desbordamiento a 1280 y 390 px. Se inspecciona captura de ventana de migración; la presentación no prueba semántica o accesibilidad completa.

La suite HTTP de Entrenamiento, Simulacros, estadísticas y Refuerzo no se repite: no cambia código de aplicación ni bancos activos. Ficha y ejercicios aislados no son una nueva regresión funcional del producto.

## Entrega y continuidad

Creados: `content/question-reviews/lote-057.json`, `docs/GSI_REVISION_LOTE_057.md`, este informe y `logs/gsi-editorial-057-preparation.json`. Modificados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los derivados de cobertura, validación final y revisión histórica se regeneran y cotejan conservando la fecha 29 y los cambios previos de herramientas y pruebas.

Acumulado: **20 aceptadas, 1.120 propuestas pendientes y 622 sin propuesta**. **1.742 decisiones pendientes**. Lotes 002–057: 113 incidencias IA originales, otras 370 IA y 637 manuales. De las 128 incidencias originales, quince están aceptadas/aplicadas y 113 tienen propuesta pendiente. Preparar no significa aceptar o resolver.

Bancos activos, 202 oficiales, doce borradores, historial, originales y entregas anteriores intactos. Sin conversiones, OCR, instalaciones, aplicación, activación, publicación, fusión o commit.

Para revisar, contrastar ficha, claves, fuentes y motivos por ID y aprobar expresamente el hash final antes de aplicar. La siguiente preparación continúa por bloque y tema. El cierre requiere decisiones individuales trazables del propietario sobre los 1.762 IDs, errores confirmados resueltos y comprobaciones técnicas y de cobertura superadas.
