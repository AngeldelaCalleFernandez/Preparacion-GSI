# Preparación del lote GSI-EDITORIAL-028

Preparado el **28-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico: `b40fbb8e3973092929dd34f3586ed293f6720277411a15a7c97d34482ff55771`.

La [ficha antes/después](GSI_REVISION_LOTE_028.md), el [JSON de propuestas](../content/question-reviews/lote-028.json) y el [registro técnico](../logs/gsi-editorial-028-preparation.json) conservan contenido, motivos, fuentes y hashes. La aprobación del piloto no autoriza este lote.

## Alcance y decisiones individuales

Posiciones **541–560** de `review_order`: **20 IA**, dieciocho de **B2-T05** y dos de **B2-T06**. Se conservan conceptos, IDs, claves, procedencia original, campos históricos y dificultad orientativa. Las veinte decisiones son `pending_review`.

Se mantienen íntegros enunciados y alternativas de **AI-GSI-B2-T05-005**, **AI-GSI-B2-T05-015** y **AI-GSI-B2-T05-002**, sobre GRANT, durabilidad e independencia física. Sus nuevos feedback y referencias necesitan aceptación propia: se registran como `revise`. Hay **12 conceptuales y ocho aplicaciones**. Los contextos de grupos de ventas, clientes y pedidos, transferencia, confirmación, cambio de índices, lecturas concurrentes y timeout aportan condiciones para evaluar el concepto. La orientación 70/30 es global; no se fuerza una cuota por lote.

| ID | Modalidad | Motivo individual |
| --- | --- | --- |
| AI-GSI-B2-T05-005 | Conceptual | Conservar literalmente enunciado y alternativas, suficientes para distinguir concesión de privilegios; completar alcance y tres explicaciones sin alargar opciones. |
| AI-GSI-B2-T05-006 | Conceptual | Conservar definición y clave D; precisar minimalidad por inclusión frente a superclave y mínimo global de atributos. |
| AI-GSI-B2-T05-007 | Conceptual | Conservar integridad referencial y clave A; comparar restricciones cercanas y distinguir relación consultada de referencia exigida. |
| AI-GSI-B2-T05-008 | Aplicación | Conservar filtrado de agregados y clave A; microcaso de ventas y nivel de consulta explícito, sin el distractor absoluto WHERE exclusivamente. |
| AI-GSI-B2-T05-009 | Aplicación | Conservar LEFT JOIN y clave C; definir lados, condición ON y exclusión de huérfanos de la derecha para evitar que FULL sea también defendible. |
| AI-GSI-B2-T05-010 | Conceptual | Conservar multiplicidad y clave D; sustituir distractores ajenos por errores sobre duplicados y orden, sin promesa de rendimiento. |
| AI-GSI-B2-T05-011 | Conceptual | Conservar existencia de filas y clave C; discriminar cardinalidad, nulos y unicidad sin reducirlo a un detalle de implementación. |
| AI-GSI-B2-T05-012 | Conceptual | Conservar coste de escritura y clave C; acotar datos afectados y evitar afirmar mantenimiento idéntico en toda actualización. |
| AI-GSI-B2-T05-014 | Aplicación | Conservar transferencia, concepto y clave C; las cuatro propiedades ACID son alternativas plausibles y el alcance es una misma transacción. |
| AI-GSI-B2-T05-015 | Aplicación | Conservar literalmente enunciado y alternativas, que ya acotan fallos contemplados; completar condiciones reales de durabilidad y distractores. |
| AI-GSI-B2-T05-017 | Conceptual | Conservar Read Committed y clave A; comparar cuatro niveles reales y separar estándar mínimo de mapeos de motor. |
| AI-GSI-B2-T05-001 | Conceptual | Conservar nivel externo y clave A; preguntar por su descripción y eliminar la duplicación de interno/físico entre distractores. |
| AI-GSI-B2-T05-002 | Aplicación | Conservar literalmente el microcaso de índices y las cuatro alternativas; completar mapeos y diferencia con independencia lógica. |
| AI-GSI-B2-T05-013 | Conceptual | Conservar persistencia de resultados y clave B; comparar plan, vista ordinaria e índice y explicitar refresco dependiente del motor. |
| AI-GSI-B2-T05-016 | Aplicación | Conservar anomalía y clave A; ejemplo breve con otra transacción sin COMMIT y cuatro fenómenos de concurrencia próximos. |
| AI-GSI-B2-T05-018 | Aplicación | Conservar phantom y clave A; explicitar mismo predicado, inserción confirmada y ausencia de cambios en filas previas para distinguir anomalías. |
| AI-GSI-B2-T05-019 | Conceptual | Conservar acceso Java mediante drivers y clave A; precisar interfaces para que otras APIs Java de persistencia no sean otra respuesta defendible. |
| AI-GSI-B2-T05-020 | Conceptual | Conservar prevención de inyección y clave A; centrar la pregunta en separación dato/sintaxis para no negar otras defensas complementarias. |
| AI-GSI-B2-T06-001 | Aplicación | Conservar fallos parciales y latencia y clave C; microcaso de timeout que evalúa incertidumbre sin derivar conclusiones remotas falsas. |
| AI-GSI-B2-T06-003 | Conceptual | Conservar separación lógica y clave B; distractores sobre despliegue y réplicas, sin imponer servidores o procesos por capa. |

Cada versión incluye explicación de la correcta y tres justificaciones individuales de distractores, asociadas a sus IDs originales y referidas al contenido. No hay cambios de clave, retiradas o reemplazos. Los registros y aceptaciones históricos conservan su alcance anterior; no aceptan las nuevas versiones. Los borradores y el banco publicado no se regeneran.

## Fuentes y comprobación

Se abrieron **21 URLs primarias distintas el 28-10-2026**, con localizadores y versión o alcance registrados por pregunta. Se diferencia documentación de implementación, especificación y material docente original. Las fuentes no sustituyen revisión humana independiente.

| Fuente | Comprobación | Localizador y versión o alcance |
| --- | --- | --- |
| [PostgreSQL 18: GRANT](https://www.postgresql.org/docs/18/sql-grant.html) | 2026-10-28 | Description; GRANT on Database Objects: privilegios y variante de pertenencia a roles. PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores. |
| [Adrienne Watt: Database Design, second edition, Chapter 8 The Entity Relationship Data Model](https://opentextbc.ca/dbdesign01/chapter/chapter-8-entity-relationship-model/) | 2026-10-28 | Types of Keys, Candidate key: unicidad y necesidad de cada atributo; Primary key y Alternate key. Segunda edición; solo definición de candidata. No se adopta la restricción simplificada del apartado Foreign key a referencias a la primaria. |
| [PostgreSQL 18: 5.5 Constraints](https://www.postgresql.org/docs/18/ddl-constraints.html) | 2026-10-28 | 5.5.3 Unique Constraints; 5.5.4 Primary Keys; 5.5.5 Foreign Keys: referencias, claves únicas y tratamiento de nulos. PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores. |
| [PostgreSQL 18: 7.2 Table Expressions](https://www.postgresql.org/docs/18/queries-table-expressions.html) | 2026-10-28 | 7.2.1.1 Joined Tables, tipos y ejemplos; 7.2.2 WHERE; 7.2.3 GROUP BY y HAVING. PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores. |
| [PostgreSQL 18: 7.4 Combining Queries](https://www.postgresql.org/docs/18/queries-union.html) | 2026-10-28 | UNION y UNION ALL; compatibilidad de columnas, duplicados y ausencia de orden garantizado. PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores. |
| [PostgreSQL 18: 9.24 Subquery Expressions](https://www.postgresql.org/docs/18/functions-subquery.html) | 2026-10-28 | 9.24.1 EXISTS: al menos una fila frente a conjunto vacío y límites de evaluación de la subconsulta. PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores. |
| [PostgreSQL 18: 11.1 Introduction](https://www.postgresql.org/docs/18/indexes-intro.html) | 2026-10-28 | Búsqueda mediante índices, elección del plan y párrafo final sobre sincronización y coste de modificaciones. PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores. |
| [PostgreSQL 18: 3.4 Transactions](https://www.postgresql.org/docs/18/tutorial-transactions.html) | 2026-10-28 | Ejemplo de transferencia: todo o nada; persistencia tras confirmación; BEGIN, COMMIT y ROLLBACK. PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores. |
| [PostgreSQL 18: 28.1 Reliability](https://www.postgresql.org/docs/18/wal-reliability.html) | 2026-10-28 | Introducción y capas de caché: persistencia real dependiente de configuración y almacenamiento fiable. PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores. |
| [PostgreSQL 18: 13.2 Transaction Isolation](https://www.postgresql.org/docs/18/transaction-iso.html) | 2026-10-28 | Definiciones de dirty read, nonrepeatable read y phantom read; tabla 13.1 y párrafos sobre garantías mínimas y mapeo de niveles. PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores. |
| [University of Cape Town: Database Systems, Chapter 1](https://www.cs.uct.ac.za/mit_notes/database/htmls/chp01.html) | 2026-10-28 | ANSI/SPARC three-level architecture; The external schema; The conceptual schema; The internal schema; Logical data independence. Material docente primario de la universidad, sin versión visible. Para independencia física se usa The internal schema: cambio de almacenamiento sin cambiar conceptual/externo. Se excluye la frase contradictoria de Physical data independence que dice not transparent. |
| [PostgreSQL 18: 39.3 Materialized Views](https://www.postgresql.org/docs/18/rules-materializedviews.html) | 2026-10-28 | Introducción y ejemplo REFRESH MATERIALIZED VIEW: resultados persistidos, consulta y posible desactualización. PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores. |
| [Oracle Java SE 25: Package java.sql](https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/package-summary.html) | 2026-10-28 | Introducción, JDBC API y lista de interfaces Connection, Statement y PreparedStatement. Java SE 25; se usa la identidad de la API, sin adoptar la cronología histórica inconsistente del párrafo sobre Java SE 7. |
| [Microsoft ODBC API Reference: What Is ODBC?](https://learn.microsoft.com/en-us/sql/odbc/reference/what-is-odbc?view=sql-server-ver17) | 2026-10-28 | Definición inicial: API independiente del lenguaje y del SGBD, drivers y Driver Manager. Rama sql-server-ver17; solo identidad de la API. No se adoptan plataformas históricas del SDK como recomendaciones actuales. |
| [Jakarta Persistence 3.2](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) | 2026-10-28 | 1 Introduction y 2 Entities: persistencia y mapeo objeto/relacional de entidades Java. Versión 3.2, 10-04-2024; se distingue el nivel de abstracción de JDBC, sin negar que una implementación pueda usarlo. |
| [Microsoft: ADO.NET Overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview) | 2026-10-28 | Introducción y párrafos sobre proveedores .NET y clases System.Data. Documentación .NET Framework; solo identificación de familia de acceso, sin recomendar proveedores antiguos. |
| [OWASP: SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html) | 2026-10-28 | Defense Option 1: Prepared Statements (with Parameterized Queries); Allow-List Input Validation; Escaping All Dynamic Inputs; Least Privilege. Versión web consultada; parámetros para valores, lista permitida para estructura dinámica y controles complementarios. |
| [Oracle Java SE 25: PreparedStatement](https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/PreparedStatement.html) | 2026-10-28 | Descripción inicial y ejemplo con setInt/setString; métodos de enlace de valores a parámetros. Java SE 25; preparar SQL ya concatenado no equivale a enlazar los valores externos. |
| [AWS Builders Library: Challenges with distributed systems](https://builder.aws.com/content/3F08f7GPFiZMCgXD8gny6OjxR0Z/challenges-with-distributed-systems) | 2026-10-28 | Introducción: fallos parciales, comunicaciones, latencia y dificultad para conocer el estado remoto. URL final tras redirección de Builders Library; solo principios de distribución, sin adoptar arquitectura AWS. |
| [AWS Builders Library: Timeouts, retries, and backoff with jitter](https://builder.aws.com/content/3EumjoZascWd1oZiEgL8ORlv3qE/timeouts-retries-and-backoff-with-jitter) | 2026-10-28 | Introducción, timeouts y side effects: expirar la espera no demuestra ausencia de efectos; reintentos e idempotencia. URL final tras redirección; no se afirma que un timeout cancele necesariamente la ejecución remota. |
| [Microsoft Azure Architecture Center: N-tier architecture style](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier) | 2026-10-28 | Introducción: capas lógicas, responsabilidades y tiers físicos; párrafo que permite varias capas en el mismo tier. Alcance conceptual: separación lógica y despliegue son decisiones distintas, sin exigir tres máquinas o un proceso por capa. |

Matices cotejados por el preparador:

- Clave candidata: minimalidad por inclusión, no mínimo número global de atributos; la definición no se deduce solo de una muestra sin duplicados.
- FOREIGN KEY: no se restringe a claves primarias; se consideran claves únicas admisibles, nulos y referencias a la misma tabla. No se atribuye creación automática del índice hijo.
- HAVING actúa sobre grupos del mismo nivel; una consulta exterior puede aplicar WHERE a un total ya obtenido. Se explica semántica, no un plan físico obligado.
- LEFT JOIN: ON y lados explícitos; FULL conserva además huérfanos derechos. Conservar clientes no exige una sola fila por cliente.
- UNION ALL conserva multiplicidades internas y entre entradas; EXISTS comprueba filas, incluso si proyectan NULL. No se promete evaluación completa o ausencia universal de evaluación de expresiones.
- Índices: mantenimiento de cambios que les afectan y elección del plan por el motor. No se fuerza idéntico coste en toda escritura ni reordenación física universal.
- ACID: atomicidad de una misma transacción frente a durabilidad después de confirmar, bajo modelo de fallos y configuración. No se promete reversión de efectos externos ni inmunidad a todo desastre.
- Aislamiento: tabla de garantías mínimas SQL diferenciada de PostgreSQL, que mapea Read Uncommitted a Read Committed y evita fantasmas en Repeatable Read. Lectura sucia exige cambios ajenos sin confirmar; phantom describe cambios de conjunto por otra transacción confirmada.
- ANSI/SPARC: fuente docente de UCT para sus tres esquemas; se excluye expresamente la frase contradictoria not transparent en Physical data independence. The internal schema sí describe el cambio físico sin alterar conceptual/externo. No se presenta la fuente docente como texto normativo original.
- Vista materializada: resultados persistidos y refresco dependiente de motor; no se universaliza REFRESH de PostgreSQL o actualización inmediata.
- JDBC: interfaces java.sql concretas permiten discriminar ODBC, Jakarta Persistence y ADO.NET. JPA puede usar JDBC internamente; no se afirma exclusividad de Java para toda API basada en drivers.
- Inyección: separación de estructura y valores enlazados; validación, transporte y permisos son complementarios. Identificadores o palabras clave requieren estructura controlada o lista permitida.
- Distribución: timeout es incertidumbre, no prueba de servidor caído, operación ausente o cancelación. Capas lógicas no obligan a máquinas o procesos separados.

Límites de acceso y fuentes descartadas:

- La ruta R2DBC 1.0.0.RELEASE ensayada no devolvió contenido accesible y no se usa. Se eligió ADO.NET con documentación primaria pública para el distractor de familia de acceso.
- Jakarta Persistence sin extensión devolvió 404. La URL .html de la versión 3.2 abrió la especificación y se leyó 1 Introduction y 2 Entities.
- Builders Library redirige a AWS Builder Center: se registran las URLs finales de ambos artículos. Microsoft muestra un aviso genérico de autorización junto a contenido público legible; no se inició sesión ni se consultó contenido privado.
- Las URLs originales de Google Docs y los hashes de registros IA se conservan como procedencia. No se atribuye una nueva lectura privada o una aceptación humana a esas referencias históricas.

No se ejecutan conversiones ni se modifican documentos originales.

## Métricas antes y propuesta

Analizador 2.0.0 sobre las veinte preguntas, mediante simulación sin escritura en bancos.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 2 | 3 |
| Aciertos eligiendo la primera de longitud máxima | 2 | 4 |
| Ratio correcta/distractor máximo de 1,5–<2 | 0 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 13 | 0 |
| Feedback correcto e incorrecto idénticos | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 0 | 3 |
| Explicación individual de los tres distractores | 0 | 20 |

La primera de longitud máxima acierta **10 % antes y 20 % en la propuesta**. La primera de longitud mínima acierta **5/20 (25 %)**. Las métricas describen señales, no calidad pedagógica ni calibración. Se documentan las tres correctas únicas más largas y los empates en el registro; no se cambian claves ni se añade relleno para obtener porcentajes. No aparecen alertas graduales de longitud. La mejora principal completa trece feedback breves y sesenta explicaciones de errores, y diferencia los veinte feedback antes idénticos.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-028.json --render docs/GSI_REVISION_LOTE_028.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

Resultados ejecutados:

- Simulación CLI y ficha reproducible de veinte propuestas; bancos sin escritura.
- **17 pruebas editoriales**, **50 JSON**, **21 esquemas** y estructura de **1.964 preguntas** correctos.
- **19.251 controles de integridad**, cero errores técnicos; documentación y referencias correctas: 4 bloques, 57 temas y 37 Markdown del catálogo.
- **63 enlaces locales** comprobados entre ficha, informe y plan.
- Hash canónico e instantáneas correctos, 60 explicaciones de distractores, tres formulaciones conservadas y procedencia histórica intacta.
- Simulación: exactamente **20 IA**, cero manuales y cero oficiales modificadas. Todos los IDs y claves del banco se conservan.
- **125 archivos protegidos** idénticos al inicio, incluidas entregas previas, bancos, registros, doce archivos de borradores y evidencia IA. Oficiales idénticas byte a byte a HEAD y auditoría; manuales e IA iguales en contenido a HEAD y con sus bytes originales del inicio preservados.
- Aceptación vacía, recibo del piloto y revisión histórica IA rechazados para 028. El guard de regeneración rechaza sobrescribir el banco IA. No hay aceptaciones 002–028; el registro de aplicaciones contiene únicamente 001.
- Prefijo de cola completo y sin duplicados: **560 IDs**, veinte aceptados y 540 propuestos. Progreso reproducible; las 128 incidencias IA originales conservan quince aceptadas y 113 propuestas pendientes.
- Las 21 fuentes tienen fecha real de comprobación 28-10-2026. Los tres informes derivados mantienen contenido y fecha de ese mismo día respecto al inicio; frente a HEAD difieren exclusivamente en la fecha de validación.
- **Siete ejemplos SQL** correctos en una base SQLite efímera: referencia a UNIQUE con rechazo de huérfano, HAVING sobre total, LEFT JOIN con cliente sin pedidos y pedido huérfano excluido, duplicados con UNION/ALL, EXISTS con NULL y vacío, enlace de valor frente a concatenación y rollback de cargo parcial. Son ejemplos de semántica; no prueban MVCC de PostgreSQL, todos los niveles de aislamiento o durabilidad real ante fallos.
- `git diff --check` y espacios de los archivos nuevos correctos.

Las tres correctas únicas más largas corresponden a **T05-020** (56 frente a 54 caracteres del distractor máximo), **T06-001** (59 frente a 56) y **T06-003** (57 frente a 56). Son diferencias pequeñas entre opciones próximas: enlace de valores, incertidumbre remota y separación lógica. Se conservan las precisiones conceptuales y no se añade relleno; el registro conserva longitudes y justificación por ID.

Todos los validadores del proyecto ejecutados terminaron con código 0. Un primer comando auxiliar de creación del helper tuvo un error de comillas del analizador de PowerShell: Python no llegó a ejecutarse y no cambió datos. Se creó después un archivo Python explícito y la comprobación completa pasó. Las rutas de fuentes inaccesibles y alternativas se registran arriba. La revisión conceptual por ID es del preparador; las comprobaciones estructurales no acreditan aceptación humana ni calibración.

No cambian código ni bancos activos. No se repite la suite HTTP completa para propuestas inactivas ni se atribuye al lote la ejecución del piloto. Entrenamiento, Simulacros, estadísticas y Refuerzo mantienen su versión activa. Para revisar el lote, abrir la ficha y cotejar enunciado, opciones y explicaciones con sus fuentes antes de aprobar expresamente el hash.

## Entrega y continuidad

Creados: `content/question-reviews/lote-028.json`, `docs/GSI_REVISION_LOTE_028.md`, este informe y `logs/gsi-editorial-028-preparation.json`. Modificados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Se ejecuta el validador final y se cotejan sus informes derivados, ya fechados el 28-10-2026: cobertura, validación final y revisión histórica. Frente a HEAD solo difiere su fecha de validación; las propuestas no alteran cobertura activa.

Este lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 540 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, de las que **1.202** todavía no tienen propuesta. Los lotes 002–028 reúnen 113 incidencias IA originales, otras 109 IA y 318 manuales. Las 128 incidencias originales conservan 15 aceptadas/aplicadas en el piloto y 113 propuestas pendientes.

Sin conversiones documentales ni nuevas conversiones pendientes. Oficiales, originales y entregas anteriores protegidos. No se crea commit, publicación o fusión de contenido pendiente. El siguiente lote continúa la cola por bloque y tema. El cierre requiere decisión individual del propietario sobre los 1.762 IDs, versiones activas conformes y comprobaciones técnicas superadas. Revisión del preparador, aceptación humana y calibración estadística siguen siendo estados diferentes.
