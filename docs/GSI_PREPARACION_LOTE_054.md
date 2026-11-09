# Preparación editorial GSI-EDITORIAL-054

Preparado y fuentes comprobadas el **29-10-2026**. **20 propuestas pendientes de aprobación expresa; ninguna aceptada, aplicada, activada o retirada en este lote.**

Hash canónico: `6fe38eadb1b10b25e57a639122d14ac0d5743f49a31c093275297ae0ea28ccb5`. Base activa: `e3e20ab879518c899806a70575eead28b3b35e6f`.

[Ficha antes/después](GSI_REVISION_LOTE_054.md), [propuestas JSON](../content/question-reviews/lote-054.json) y [registro de preparación](../logs/gsi-editorial-054-preparation.json).

## Alcance y criterio

Posiciones **1061–1080** de la cola: **20 IA**, tres B3-T03 y diecisiete B3-T04. Selección del modelo de requisitos, disponibilidad y MFA; cardinalidades, normalización, restricciones, diseño físico, aislamiento, versiones, bloqueos e índices. Ninguna manual u oficial.

Se mantienen conceptos, IDs, claves, dificultad orientativa, procedencia y fuentes históricas. Una formulación completa se conserva: AI-GSI-B3-T04-007. Las restantes precisan alcance o distractores. Veinte explicaciones correctas y sesenta justificaciones de distractores por sus IDs originales, referidas al contenido para cualquier orden de presentación.

**14 conceptuales y seis aplicaciones contextualizadas**: T03-019 (medición de disponibilidad), T04-002 (Departamento/Empleado), 003 (Alumno/Curso), 005 (dominio numérico con NULL), 011 (contador compartido) y 012 (filas de un predicado). Los casos fijan condiciones relevantes y conservan el concepto. No se transforma artificialmente cada definición en un escenario ni se impone una cuota.

Se distinguen cualquier clave candidata de la primaria en 2FN; superclave y excepción de 3FN en BCNF; integridad por FK y participación obligatoria; 2PL y 2PC; versiones MVCC y ausencia universal de bloqueos. Los índices se eligen según operadores y carga, sin prometer rendimiento para toda consulta.

Las rúbricas son juicio del preparador, no aceptación del propietario, revisión independiente o dificultad calibrada. Las aceptaciones IA históricas conservan sus hashes anteriores y no aceptan estas versiones. Los estados heredados en after no activan las propuestas.

| ID | Clave original | Tipo | Formulación | Motivo |
| --- | --- | --- | --- | --- |
| AI-GSI-B3-T03-018 | A | Conceptual | Ajustada | Conservar selección por utilidad analítica y clave A; criterios de elección cercanos, sin convertir una notación en solución universal. |
| AI-GSI-B3-T03-019 | D | Aplicación | Ajustada | Conservar verificabilidad del 99,9 % y clave D; precisar cómputo y ventanas sin imponer una exclusión o periodo universal. |
| AI-GSI-B3-T03-020 | A | Conceptual | Ajustada | Conservar requisito verificable de MFA y clave A; distractores de autenticación y protección plausibles pero sin criterios, sin prometer seguridad absoluta. |
| AI-GSI-B3-T04-002 | C | Aplicación | Ajustada | Conservar FK en lado N y clave C; microcaso Departamento/Empleado para distinguir dirección, unicidad y participación sin añadir otro concepto principal. |
| AI-GSI-B3-T04-003 | B | Aplicación | Ajustada | Conservar tabla asociativa y clave B; microcaso Alumno/Curso con multiplicidad y semántica de claves explícitas. |
| AI-GSI-B3-T04-004 | B | Conceptual | Ajustada | Conservar reducción de redundancia/anomalías y clave B; corregir la generalización de preservación automática de dependencias sin alterar el concepto evaluado. |
| AI-GSI-B3-T04-005 | D | Aplicación | Ajustada | Conservar condición de dominio y clave D; microcaso que separa CHECK y nulidad con restricciones próximas. |
| AI-GSI-B3-T04-006 | D | Conceptual | Ajustada | Conservar integridad coherente entre accesos y clave D; delimitar reglas expresables en el gestor y complementar validación de aplicación. |
| AI-GSI-B3-T04-007 | C | Conceptual | Conservada | Conservar íntegra formulación y clave C: alternativas ya comparan análisis, concepto y mecanismo físico con precisión; ampliar límites de rendimiento. |
| AI-GSI-B3-T04-008 | A | Conceptual | Ajustada | Conservar dependencias parciales y clave A; precisar atributos no primos y todas las claves candidatas, con un ejemplo de apoyo sin cambiar la definición preguntada. |
| AI-GSI-B3-T04-009 | A | Conceptual | Ajustada | Conservar determinantes superclave y clave A; formulación formal con cierre y distractores de formas normales próximas. |
| AI-GSI-B3-T04-010 | C | Conceptual | Ajustada | Conservar medición y coherencia y clave C; analizar beneficios y costes sin simplificar desnormalización a duplicar o eliminar controles. |
| AI-GSI-B3-T04-011 | C | Aplicación | Ajustada | Conservar actualización perdida y clave C; microcaso aritmético explícito para distinguir escritura de valor calculado y actualización atómica. |
| AI-GSI-B3-T04-012 | C | Aplicación | Ajustada | Conservar fantasmas y clave C; precisar misma transacción, predicado repetido e inserciones confirmadas para evitar confundir consultas independientes. |
| AI-GSI-B3-T04-014 | A | Conceptual | Ajustada | Conservar multiversión/visibilidad y clave A; distinguirla de bloqueo exclusivo, última escritura y ejecución secuencial, sin prometer cero conflictos. |
| AI-GSI-B3-T04-015 | D | Conceptual | Ajustada | Conservar bloqueo pesimista y clave D; mecanismos reales de concurrencia como distractores, con alcance del acceso conflictivo explícito. |
| AI-GSI-B3-T04-016 | B | Conceptual | Ajustada | Conservar fases de 2PL y clave B; distinguir conceptos cercanos, incluido 2PC, sin afirmar ausencia de interbloqueos. |
| AI-GSI-B3-T04-017 | A | Conceptual | Ajustada | Conservar orden y transacciones cortas y clave A; contrastar errores plausibles de orden, interfaz y timeout, sin confundir reducción con garantía total. |
| AI-GSI-B3-T04-019 | D | Conceptual | Ajustada | Conservar árbol ordenado para rangos y clave D; aclarar navegación por clave escalar para no negar que otras estructuras puedan apoyar algunos rangos. |
| AI-GSI-B3-T04-013 | D | Conceptual | Ajustada | Conservar validación optimista y clave D; precisar coordinación atómica de comprobación/escritura y tratamiento del conflicto, sin imponer un solo algoritmo. |

## Fuentes y localizadores

**14 URLs primarias leídas directamente el 29-10-2026.** Los dos PDF de Database System Concepts, séptima edición, se consultan textualmente y se citan por número impreso de diapositiva, que difiere del índice de página del PDF. PostgreSQL se cita en su versión 18; no se supone un motor instalado. NASA y Google aportan criterios y ejemplos, sin convertirlos en obligaciones españolas. NIST SP 800-63B-4 es la edición final de julio de 2025.

| Fuente | Localizadores y versión | Fecha real |
| --- | --- | --- |
| [NASA Systems Engineering Handbook: 4.3 Logical Decomposition](https://www.nasa.gov/reference/4-3-logical-decomposition/) | 4.3.1.2.1 modelos y objetivos; 4.3.1.2.2 análisis funcional, relaciones, comportamientos y restricciones; contraste iterativo con interesados. Capítulo web público leído el 29-10-2026. Ejemplo de análisis orientado a necesidades y preguntas, sin imponer el proceso NASA ni atribuirle una taxonomía UML normativa | 2026-10-29 |
| [NASA: Appendix C, How to Write a Good Requirement](https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/) | C.4 Performance, Correctness y Verifiability/Testability: criterios, precisión y verificación por prueba, demostración, inspección o análisis. Página actualizada 26-07-2023 según pie, leída el 29-10-2026. Verificabilidad no equivale a seguridad perfecta ni a que toda comprobación deba automatizarse | 2026-10-29 |
| [Google: The Site Reliability Workbook, Implementing SLOs](https://sre.google/workbook/implementing-slos/) | What to Measure, SLI specification/implementation; Choosing an Appropriate Time Window: ventana móvil/calendario, numerador, denominador y objetivo. Libro de 2018, texto público leído el 29-10-2026. Se definen reglas de cómputo y exclusiones por adelantado; ni excluir mantenimiento ni un periodo concreto son reglas universales | 2026-10-29 |
| [NIST SP 800-63B-4: Authentication and Authenticator Management](https://pages.nist.gov/800-63-4/sp800-63b.html) | Introduction; §2 Authentication Assurance Levels y AAL2; dos factores distintos y tipos de autenticadores. Revisión 4 final de 31-07-2025, fecha contrastada con ficha CSRC; HTML leído el 29-10-2026. El ejemplo de perfiles privilegiados no se convierte en obligación legal española universal; MFA no garantiza ausencia de phishing o de todo riesgo | 2026-10-29 |
| [PostgreSQL 18: 5.5 Constraints](https://www.postgresql.org/docs/18/ddl-constraints.html) | 5.5.1 CHECK y NULL; 5.5.2 NOT NULL; 5.5.3 UNIQUE; 5.5.4 PK; 5.5.5 FK, ejemplos products/orders/order_items y asociación N:M. Documentación de versión 18 leída el 29-10-2026; ejemplo de SGBD, sin inferir instalación local. FK no exige por sí sola que cada padre tenga un hijo; CHECK verdadero o desconocido admite NULL si no hay otra restricción | 2026-10-29 |
| [Silberschatz, Korth y Sudarshan: Database System Concepts, Normalization](https://db-book.com/slides-dir/PDF-dir/ch7.pdf) | 7.23–7.28: BCNF, descomposición y dependencias; 7.65–7.73: 3FN, reunión sin pérdida y preservación; 7.90 Denormalization for Performance. Diapositivas de los autores, 7.ª edición, PDF de 93 páginas leído textualmente el 29-10-2026. Se usan números de diapositiva impresos, distintos del índice físico del PDF; alcanzar BCNF no garantiza preservar todas las dependencias | 2026-10-29 |
| [PostgreSQL 18: 13.2 Transaction Isolation](https://www.postgresql.org/docs/18/transaction-iso.html) | Definiciones dirty read, nonrepeatable read, phantom read; 13.2.1 Read Committed y actualizaciones; 13.2.2–3 snapshots y serialización. Documentación de versión 18 leída el 29-10-2026. Se distinguen fenómenos del estándar y comportamiento concreto de PostgreSQL; MVCC no elimina toda anomalía o necesidad de reintento | 2026-10-29 |
| [PostgreSQL 18: 11.2 Index Types](https://www.postgresql.org/docs/18/indexes-types.html) | 11.2.1 B-tree: igualdad, rangos y orden; 11.2.2 hash: igualdad; familias GIN/GiST/BRIN y sus operadores. Documentación de versión 18 leída el 29-10-2026. B-tree/B+tree es la familia ordenada del concepto; no se promete que cualquier rango use índice o sea siempre más rápido que escanear | 2026-10-29 |
| [PostgreSQL 18: 5.12 Table Partitioning](https://www.postgresql.org/docs/18/ddl-partitioning.html) | 5.12.1 Overview: una tabla lógica en piezas físicas; 5.12.2 particiones y decisiones de almacenamiento; beneficios según patrón de uso. Documentación de versión 18 leída el 29-10-2026. Particionar no altera por sí mismo el concepto de entidad ni sustituye todos los índices o la evaluación del diseño | 2026-10-29 |
| [PostgreSQL 18: 14.1 Using EXPLAIN](https://www.postgresql.org/docs/18/using-explain.html) | Introducción; EXPLAIN Basics, costes y planes; EXPLAIN ANALYZE y Caveats: medición y ejecución real de consultas. Documentación de versión 18 leída el 29-10-2026. Los costes estimados no son directamente milisegundos ni garantía de rendimiento; no se ejecutan consultas de los ejemplos ni se instala un SGBD | 2026-10-29 |
| [UT Austin, A. Mitra: The Process of Normalization](https://www.cs.utexas.edu/~mitra/csSpring2012/cs327/lectures/normal.html) | Functional Dependencies: dependencia plena/parcial; Second Normal Form: 1FN y ningún atributo no primo dependiente de parte de una clave candidata. Notas docentes primarias del curso CS327, primavera de 2012 según ruta; cuerpo público leído el 29-10-2026. Se utiliza la definición explícita de 2FN, sin atribuir una nueva edición al documento histórico | 2026-10-29 |
| [Silberschatz, Korth y Sudarshan: Database System Concepts, Concurrency Control](https://www.db-book.com/slides-dir/PDF-dir/ch18.pdf) | 18.9–18.13: 2PL básico, estricto y conversiones; 18.22–18.24: prevención de deadlock; 18.48–18.50: validación optimista; 18.54: multiversión. Diapositivas de los autores, 7.ª edición, PDF de 90 páginas leído textualmente el 29-10-2026. Números impresos de diapositiva; 2PL es control por bloqueos, distinto de 2PC, y no elimina por sí solo interbloqueos | 2026-10-29 |
| [PostgreSQL 18: 13.1 Concurrency Control, Introduction](https://www.postgresql.org/docs/18/mvcc-intro.html) | Modelo multiversión, instantáneas, lecturas/escrituras y coexistencia de bloqueos explícitos. Documentación de versión 18 leída el 29-10-2026. La regla de visibilidad depende del aislamiento y la implementación; no se universaliza ausencia de bloqueos entre cualquier par de operaciones | 2026-10-29 |
| [PostgreSQL 18: 13.3 Explicit Locking](https://www.postgresql.org/docs/18/explicit-locking.html) | 13.3.2 bloqueo de filas; 13.3.4 deadlocks: orden consistente, transacciones abiertas, víctima y reintentos. Documentación de versión 18 leída el 29-10-2026. Bloqueos pesimistas pueden producir espera/interbloqueo; reducir riesgo no acredita cero deadlocks o autoriza repetir efectos externos sin control | 2026-10-29 |

### Decisiones de revisión

- Veinte IA en posiciones 1061–1080: tres B3-T03 y diecisiete B3-T04. Conceptos, IDs, claves, procedencia y aceptaciones históricas conservados; estas no aprueban contenido nuevo.
- Una formulación completa conservada: T04-007, diseño físico. Catorce conceptuales y seis aplicaciones: disponibilidad T03-019, relación 1:N T04-002, N:M 003, dominio CHECK 005, actualización perdida 011 y fantasmas 012. Los microcasos fijan cardinalidad, nulidad o secuencia concurrente; no se añade contexto decorativo a cada definición.
- Se elige modelo por la cuestión que permite analizar; las representaciones y nivel de detalle se contrastan con interesados. El ejemplo NASA se usa por su propósito analítico, sin imponer su proceso o atribuirle una taxonomía UML normativa.
- Disponibilidad requiere periodo, base y reglas de cómputo previas. Una ventana de mantenimiento no queda excluida por definición universal; las métricas por tiempo y por peticiones no son intercambiables.
- NIST SP800-63B-4 final de 31-07-2025 y HTML permiten distinguir factores. MFA para perfiles definidos es ejemplo verificable, no garantía de phishing cero ni obligación española universal inferida.
- 1:N lleva FK al lado N, sin UNIQUE que impida varios hijos del mismo padre. La obligatoriedad del hijo y que cada padre tenga hijos son restricciones diferentes. En N:M, la clave del par o de ocurrencias responde a la semántica.
- CHECK rechaza falso, no necesariamente NULL. El ejemplo permite nulos y requiere no negatividad cuando hay valor; NOT NULL es otra condición. Una restricción de fila no garantiza cualquier regla entre tablas.
- Se confirma generalización falsa en el feedback activo de T04-004 sobre preservación automática de dependencias. BCNF puede ser sin pérdida y no preservadora de dependencias; la corrección está propuesta y pendiente, con clave B válida. No se aplica fuera de la autorización del001.
- 2FN afecta atributos no primos y partes propias de cualquier clave candidata, no solo la primaria elegida. BCNF exige superclave para cada dependencia funcional no trivial del cierre; la excepción por dependiente primo es de3FN.
- Diseño físico, índices y particiones se distinguen de concepto lógico. Desnormalización exige medición y coherencia: puede ahorrar reuniones a cambio de almacenamiento y actualizaciones, sin beneficio universal.
- El contador se lee en100 y se escriben110/120 calculados desde esa lectura; la suma acumulativa sería130. Se distingue ese patrón de una operación aritmética atómica que el gestor puede coordinar correctamente.
- Fantasmas se precisa como mismo predicado repetido en una transacción con nuevas filas confirmadas. Se separan lectura sucia, cambio de valor en fila y ciclo de espera; el estándar y el comportamiento particular del motor no se igualan.
- MVCC elige versiones visibles y puede coexistir con bloqueos/conflictos. Pesimista reserva el acceso antes; optimista valida después, con comprobación y escritura coordinadas. No se promete ausencia absoluta de bloqueos en una técnica.
- 2PL separa adquisición/liberación, no preparación/commit distribuido de2PC. Garantiza serialización por conflictos bajo sus condiciones, pero no libertad de deadlock; versiones estrictas añaden reglas.
- Orden consistente y transacciones cortas reducen riesgo de deadlock. Timeout no demuestra un ciclo; los abortos/reintentos necesitan considerar toda la transacción y posibles efectos externos.
- B-tree/B+tree se pregunta como navegación ordenada de claves escalares. Hash se contrasta con igualdad en PostgreSQL18; no se niega que otras estructuras puedan ayudar a consultas de rango mediante otras estrategias.

### Límites de acceso y alcance

- El PDF ch7 de db-book con www devuelve timeout en dos lecturas. El mismo documento primario sin www, URL también indexada públicamente, se lee directamente. No se usa el fallo como evidencia de su contenido.
- El PDF docente UIC2025 no es accesible mediante la herramienta y el IIT2016 devuelve timeout. La definición de2FN se verifica en las notas primarias HTML accesibles de UT Austin2012; no se atribuye lectura a los PDF fallidos.
- PostgreSQL se consulta en rutas explícitas de versión18; no se deduce versión instalada local ni se instala servidor. Las diferencias de motor y nivel de aislamiento se declaran.
- PDF leídos textualmente; sin inspección de figuras, conversión, OCR o instalación. Ejemplos SQL, configuración, autenticación y monitorización son documentación; no se ejecutan sobre servicios o datos reales.
- El error activo MAN-GSI-P18-026 del032 y la generalización de AI-GSI-B3-T04-004 impiden cierre editorial hasta resolución aprobada. Los bancos activos se mantienen dentro de la autorización exclusiva del001.

## Señales antes y después

| Señal | Banco activo | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 9 | 3 |
| Acierto escogiendo primera de longitud máxima (%) | 45.0 | 20.0 |
| Ratio 1,5 a menos de 2 | 3 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback correcto breve | 19 | 0 |
| Feedback correcto/incorrecto idéntico | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos | 0 | 0 |
| Empates de longitud máxima | 1 | 3 |

La correcta es única más larga en T04-003, T04-011 y T04-013. La tabla asociativa necesita expresar referencias y asociaciones; actualización perdida es el término preciso; el control optimista debe incluir validación coordinada antes de aceptar la escritura. No se añade relleno a las alternativas. Ningún ratio alcanza 1,5, sin que ello pruebe calidad pedagógica o ausencia de otras pistas.

La primera de longitud máxima acierta 4/20 (20 %), con tres empates; la primera mínima, 7/20 (35 %). Son señales descriptivas de una muestra pequeña, sin calibración estadística. Se mantienen letras y orden originales, sin redistribuir claves artificialmente. La regla anterior y el analizador gradual no emiten alertas en la propuesta: esto no sustituye la revisión individual y aceptación del propietario.

## Comprobaciones semánticas e incidencia confirmada

Ocho comprobaciones independientes verifican ejemplos de dependencias y claves, pérdida de preservación en BCNF, CHECK/NULL, FK 1:N, tabla N:M, contador, validación optimista y fases 2PL con posible interbloqueo. Las restricciones se prueban exclusivamente en SQLite de la biblioteca estándar y memoria; no se instala un backend ni se certifica PostgreSQL. Los demás casos son modelos matemáticos o secuenciales, sin afirmar una prueba de concurrencia real.

**AI-GSI-B3-T04-004 contiene una generalización incorrecta en el feedback activo:** «Normalizar preserva dependencias e integridad; rendimiento requiere evaluar patrones de uso.». Normalizar a BCNF puede perder la preservación de dependencias para su comprobación local. La propuesta conserva el concepto de reducir redundancia y anomalías y la clave B, pero distingue reunión sin pérdida, preservación y la síntesis a 3FN bajo dependencias funcionales.

Contraejemplo comprobado: R(A,B,C), F={AB→C, C→B}, claves AB y AC. Descomponer en CB y AC produce componentes BCNF y reunión sin pérdida porque C determina CB. Las dependencias proyectadas no implican AB→C. Dos tablas locales válidas con (C,B)={(1,9),(2,9)} y (A,C)={(7,1),(7,2)} producen una reunión que viola AB→C. Esto demuestra que las restricciones locales ya no bastan para mantener la dependencia, aunque la descomposición de relaciones originales válidas sea sin pérdida.

En T04-011 ambas transacciones leen 100: se escribe 110 y después 120, calculado desde la lectura antigua, sin validar conflicto. El resultado es 120 frente a 130 al acumular ambos incrementos. La clave C sigue siendo actualización perdida. No se confunde con una operación atómica de incremento. La validación optimista se modela suponiendo compare-and-set atómico; no basta comprobar una versión y escribir después sin coordinación.

La corrección de T04-004 queda pendiente de aprobación y aplicación, igual que la errata MAN-GSI-P18-026 del lote 032. **Las dos incidencias permanecen en las versiones activas y bloquean el cierre editorial.** Se conservan intactas porque la autorización de aplicación se limita al lote 001; registrarlas no equivale a corregirlas en producción.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-054.json --render docs/GSI_REVISION_LOTE_054.md --literal-content
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

Resultados: **19 pruebas editoriales, 76 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**, además de documentación, referencias y progreso. La simulación modifica exclusivamente las veinte IA previstas; conserva IDs, claves y procedencia y aporta sesenta justificaciones de distractores. Se rechazan ausencia de aceptación, recibo del piloto y revisión histórica como aprobación. Las **veinte aceptaciones IA históricas** conservan sus hashes anteriores y no aceptan estas versiones. **231 archivos protegidos** intactos y **118 enlaces locales** existentes.

**Ocho comprobaciones semánticas independientes y diez controles Chrome correctos**. Captura de normalización inspeccionada y sin desbordamiento a 1280 y 390 px. Las ocho invocaciones de validación y el render literal terminan con código 0. Los tres derivados permanecen idénticos al inicio de esta preparación; frente a HEAD solo cambia la fecha 26→29. Bancos activos iguales a HEAD y oficiales iguales en bytes a la auditoría. Cero errores técnicos no acredita cierre editorial: quedan decisiones del propietario y las correcciones activas de P18-026 y T04-004.

La ficha se comprueba con Chrome, Playwright y marked existentes, cargada en memoria y con conexiones externas bloqueadas: veinte apartados, marcas correctas, opciones, explicaciones, URLs y ausencia de desbordamiento a 1280 y 390 px. La captura de normalización permite inspeccionar la presentación; no prueba por sí misma la semántica o accesibilidad completa.

La suite HTTP de Entrenamiento, Simulacros, estadísticas y Refuerzo no se repite: no cambia código de aplicación ni bancos activos. Las comprobaciones de la ficha y de ejemplos aislados no se presentan como una nueva regresión funcional del producto.

## Entrega y continuidad

Creados: `content/question-reviews/lote-054.json`, `docs/GSI_REVISION_LOTE_054.md`, este informe y `logs/gsi-editorial-054-preparation.json`. Modificados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los derivados de cobertura, validación final y revisión histórica se regeneran y cotejan; conservan la fecha 29 ya existente. Se preservan cambios previos de herramientas y pruebas.

Acumulado: **20 aceptadas, 1.060 propuestas pendientes y 682 sin propuesta**. **1.742 decisiones pendientes**. Lotes 002–054: 113 incidencias IA originales, otras 310 IA y 637 manuales. De las 128 incidencias originales, quince están aceptadas/aplicadas y 113 tienen propuesta pendiente. Preparar no significa aceptar o resolver.

Bancos activos, 202 oficiales, doce borradores, historial, originales y entregas anteriores intactos. Sin conversiones, OCR, instalaciones, aplicación, activación, publicación, fusión o commit.

Para revisar, contrastar ficha, claves, fuentes y motivos por ID y aprobar expresamente el hash final antes de aplicar. La siguiente preparación continúa por bloque y tema. El cierre requiere decisiones individuales trazables del propietario sobre los 1.762 IDs, errores confirmados resueltos y comprobaciones técnicas y de cobertura superadas.
