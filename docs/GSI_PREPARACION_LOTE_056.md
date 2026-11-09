# Preparación editorial GSI-EDITORIAL-056

Preparado y fuentes comprobadas el **29-10-2026**. **20 propuestas pendientes de aprobación expresa; ninguna aceptada, aplicada, activada o retirada en este lote.**

Hash canónico: `ccc87faeae293c0979641482821402b62020f9667e0a5802aa6e7b59f1a95783`. Base activa: `e3e20ab879518c899806a70575eead28b3b35e6f`.

[Ficha antes/después](GSI_REVISION_LOTE_056.md), [propuestas JSON](../content/question-reviews/lote-056.json) y [registro de preparación](../logs/gsi-editorial-056-preparation.json).

## Alcance y criterio

Posiciones **1101–1120** de la cola: **20 IA**, diecisiete B3-T06 y tres B3-T07. Construcción, versiones, reproducibilidad, resúmenes, CI, artefactos, DevOps/DevSecOps, rollback, cadena de suministro, documentación, generación, migraciones, gates y fundamentos de pruebas. Ninguna manual u oficial.

Se mantienen conceptos, IDs, claves, dificultad orientativa, procedencia y fuentes históricas. Dos formulaciones completas se conservan: AI-GSI-B3-T06-018, AI-GSI-B3-T06-019. Las restantes precisan alcance o distractores. Veinte explicaciones correctas y sesenta justificaciones de distractores por sus IDs originales, referidas al contenido para cualquier orden de presentación.

**14 conceptuales y seis aplicaciones contextualizadas**: T06-003 (dependencias), 004 (checksum), 011 (rollback), 015 (regeneración), 016 (coexistencia) y T07-005 (integración). Los microcasos fijan entradas, referencia fiable, contratos o alcance. No se añaden situaciones decorativas ni se imponen cuotas.

Lockfile se distingue de reproducibilidad total; integridad de autenticidad y corrección; CI de publicar automáticamente; paquete de log/caché; rollback del binario de recuperación del dato. Docs-as-code no exige mismo repositorio ni ejecutar texto; los controles verdes acreditan su alcance, sin aceptación editorial automática.

Las rúbricas son juicio del preparador, no aceptación del propietario, revisión independiente o dificultad calibrada. Las aceptaciones IA históricas conservan sus hashes anteriores y no aceptan estas versiones. Los estados heredados en after no activan las propuestas.

| ID | Clave original | Tipo | Formulación | Motivo |
| --- | --- | --- | --- | --- |
| AI-GSI-B3-T06-001 | D | Conceptual | Ajustada | Conservar mantenibilidad y clave D; prácticas comparables y límites de modularidad/revisión/pruebas sin garantías automáticas. |
| AI-GSI-B3-T06-002 | D | Conceptual | Ajustada | Conservar trazabilidad/colaboración y clave D; distinguir registro de cambios, corrección y autorización de entrega. |
| AI-GSI-B3-T06-003 | C | Aplicación | Ajustada | Conservar dependencias fijadas y clave C; microcaso de resolución distinta para un mismo commit y límite de lockfile. |
| AI-GSI-B3-T06-004 | A | Aplicación | Ajustada | Conservar comprobación de contenido y clave A; microcaso con referencia fiable, sin equiparar integridad, autenticidad y calidad. |
| AI-GSI-B3-T06-005 | D | Conceptual | Ajustada | Conservar integración frecuente y clave D; diferenciar práctica de CI, uso de una herramienta y despliegue automático. |
| AI-GSI-B3-T06-006 | D | Conceptual | Ajustada | Conservar artefacto empaquetado/validado y clave D; precisar trazabilidad y alcance de validación sin prometer calidad universal. |
| AI-GSI-B3-T06-008 | B | Conceptual | Ajustada | Conservar colaboración desarrollo/operación y clave B; distinguir cultura, roles, herramientas y reparto de responsabilidad. |
| AI-GSI-B3-T06-009 | C | Conceptual | Ajustada | Conservar seguridad durante el flujo y clave C; actividades y tratamiento de resultados sin convertir herramientas en garantías. |
| AI-GSI-B3-T06-011 | A | Aplicación | Ajustada | Conservar incompatibilidad de migración y clave A; microcaso que separa rollback de binarios y recuperación del dato. |
| AI-GSI-B3-T06-012 | C | Conceptual | Ajustada | Conservar cadena de suministro y clave C; describir capacidades reales de modificación y límites de aislamiento/publicidad. |
| AI-GSI-B3-T06-013 | D | Conceptual | Ajustada | Conservar documentación trazable y clave D; distinguir flujo, ubicación física y revisión editorial. |
| AI-GSI-B3-T06-014 | D | Conceptual | Ajustada | Conservar coordinación de construcción y clave D; sustituir distractores ajenos por funciones de herramientas cercanas. |
| AI-GSI-B3-T06-015 | C | Aplicación | Ajustada | Conservar riesgo de edición sobrescrita y clave C; precisar opciones reales de extensión y límite de ignorar archivos. |
| AI-GSI-B3-T06-016 | A | Aplicación | Ajustada | Conservar migraciones compatibles y clave A; microcaso de coexistencia para distinguir expansión y retirada prematura. |
| AI-GSI-B3-T06-017 | D | Conceptual | Ajustada | Conservar control accionable según riesgo y clave D; distinguir medida, decisión y tratamiento de resultados. |
| AI-GSI-B3-T06-018 | B | Conceptual | Conservada | Conservar íntegra formulación y clave B; documentos y finalidad ya bien distinguidos. Ampliar estado e historial. |
| AI-GSI-B3-T06-019 | B | Conceptual | Conservada | Conservar íntegra formulación y clave B; contraste de documentación ya preciso. Ampliar verificación y mantenimiento del procedimiento. |
| AI-GSI-B3-T07-001 | A | Conceptual | Ajustada | Conservar evidencia de presencia y clave A; distractores de inferencias excesivas próximas a cobertura y equivalencia. |
| AI-GSI-B3-T07-002 | B | Conceptual | Ajustada | Conservar evolución de pruebas y clave B; principio tests wear out sin prohibir regresión ni declarar caducidad por uso. |
| AI-GSI-B3-T07-005 | D | Aplicación | Ajustada | Conservar interacción entre componentes y clave D; microcaso de contrato y alcance para distinguir niveles próximos. |

## Fuentes y localizadores

**19 URLs primarias leídas directamente el 29-10-2026.** Dos PDF finales se consultan textualmente: NIST SSDF v1.1 (febrero de 2022) e ISTQB v4.0.1 (15-09-2024). Se identifica la revisión de fuente del artículo conceptual Prisma. npm se cita en v11.21.1 Legacy, SonarQube en la página 2026.5 y AWS rollback como artículo de 2019 redirigido; las fechas y versiones no se convierten en recomendación de herramientas, última versión general o configuración local.

| Fuente | Localizadores y versión | Fecha real |
| --- | --- | --- |
| [Google Engineering Practices: What to look for in a code review](https://google.github.io/eng-practices/review/reviewer/looking-for.html) | Design; Functionality; Complexity; Tests; Documentation. Guía pública leída el 29-10-2026, sin número de edición indicado en el cuerpo. Complejidad comprensible y pruebas pertinentes, sin convertir una lista de prácticas en garantía de calidad | 2026-10-29 |
| [Pro Git: About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) | 1.1 About Version Control; cambios, comparación y recuperación; Centralized/Distributed Version Control Systems. Pro Git, segunda edición, capítulo público leído el 29-10-2026. Versionar no demuestra corrección ni elimina conflictos | 2026-10-29 |
| [npm: package-lock.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json/) | Description: árbol exacto de dependencias e inclusión del lockfile en control de versiones. Documentación CLI v11, selector 11.21.1 Legacy al consultar el 29-10-2026. Se cita como ejemplo de lockfile, no versión local o recomendación de instalar una versión antigua | 2026-10-29 |
| [Reproducible Builds: Definitions](https://reproducible-builds.org/docs/definition/) | When is a build reproducible?; Explanations: fuentes, entorno, instrucciones y artefactos idénticos bit a bit. Definición pública leída el 29-10-2026, sin versión numerada indicada. Lockfile es una entrada controlada, no garantía suficiente de reproducibilidad total | 2026-10-29 |
| [Reproducible Builds: Cryptographic checksums](https://reproducible-builds.org/docs/checksums/) | Comparación byte a byte; intercambio de resúmenes criptográficos y ejemplo de firma. Página pública leída el 29-10-2026, sin edición numerada. Se exige referencia fiable; comparar un resumen no ejecuta pruebas funcionales o revisión de licencias | 2026-10-29 |
| [DORA: Continuous integration](https://dora.dev/capabilities/continuous-integration/) | How to implement CI: integración frecuente en rama principal compartida, build y tests automáticos; resultados visibles y reparación. Texto público leído el 29-10-2026, sin edición numerada. Las cifras de investigación no se convierten en cuota obligatoria por organización; CI no implica publicación automática | 2026-10-29 |
| [Apache Maven: Introduction to the Build Lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html) | Build Lifecycle Basics; fases validate/compile/test/package/verify/install/deploy y plugins vinculados. Guía pública leída el 29-10-2026. Se usa Maven como ejemplo de coordinación; fases y verificaciones dependen del proyecto y no se ejecuta ningún comando de la guía | 2026-10-29 |
| [AWS: What is DevOps?](https://aws.amazon.com/devops/what-is-devops/) | DevOps Model Defined; How DevOps Works; Improved Collaboration; DevOps Cultural Philosophy. Definición y prácticas públicas leídas el 29-10-2026, sin edición numerada. Colaboración y responsabilidad compartida no requieren fusionar todos los roles ni usar productos AWS | 2026-10-29 |
| [NIST SP 800-218: Secure Software Development Framework](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) | §1.1 integración de seguridad durante SDLC; PO.4 criterios de comprobación; PS.2 integridad de releases; PW.7 revisión/análisis y PW.8 pruebas. SSDF v1.1, febrero de 2022, contrastado con ficha CSRC; PDF de 36 páginas leído textualmente el 29-10-2026. Versión explícita, sin afirmar que sea la última publicada o una obligación española universal | 2026-10-29 |
| [Sandeep Pokkunuri: Ensuring rollback safety during deployments](https://builder.aws.com/content/3F04j2yRAAMBuPSPs50xwXZqg01/ensuring-rollback-safety-during-deployments) | Introduction; Standalone vs. distributed software deployments; compatibilidad entre versiones y datos durante avance/reversión. Artículo de AWS Builders Library, publicado y modificado 05-12-2019 según cuerpo; URL original redirige a Builder Center, leído el 29-10-2026. Principios de compatibilidad, no guía específica de DDL | 2026-10-29 |
| [Prisma Data Guide: Using the expand and contract pattern for schema changes](https://www.prisma.io/dataguide/types/relational/expand-and-contract-pattern) | How to use: pasos 1–7, estructura paralela, datos, interfaz y retirada tras actualizar clientes; límites de rollback. Revisión de fuente 41ccbc7d5038f7b4391787911e24ad936598fab2 indicada por la página, leída el 29-10-2026. Se toma el patrón conceptual, sin instalar ORM o ejecutar migraciones de ejemplo | 2026-10-29 |
| [GitHub Actions: Secure use reference](https://docs.github.com/en/actions/reference/security/secure-use) | Writing workflows; Using third-party actions; Hardening for self-hosted runners: código no confiable, permisos y acceso a secretos. Documentación pública leída el 29-10-2026, URL final de la referencia de seguridad. No se configura un runner ni se consultan credenciales; usar acciones fijadas no elimina todo riesgo | 2026-10-29 |
| [Write the Docs: Docs as code](https://www.writethedocs.org/guide/docs-as-code/) | Docs as code: herramientas, control de versiones, revisión, pruebas y trabajo integrado con producto. Eric Holscher y comunidad Write the Docs; texto público leído el 29-10-2026, sin edición numerada. No exige el mismo repositorio ni convierte documentación en programa ejecutable | 2026-10-29 |
| [OpenAPI Generator: Customization](https://openapi-generator.tech/docs/customization/) | User-defined Templates; Ignore file format; Customizing the generator: control sobre sobrescritura y configuración. Documentación pública leída el 29-10-2026. Se cita disponibilidad de plantillas desde 5.0.0 sin inferir versión instalada. Las opciones de preservación requieren estrategia, pruebas y revisión; no se regenera un cliente real | 2026-10-29 |
| [SonarQube Server: Understanding quality gates](https://docs.sonarsource.com/sonarqube-server/quality-standards-administration/managing-quality-gates/introduction-to-quality-gates) | Introducción; condiciones por métrica/operador/umbral; política, código nuevo/general y resultado de gate. Página identifica SonarQube Server 2026.5 al consultar el 29-10-2026. Ejemplo de implementación, sin recomendar producto o imponer sus umbrales al banco de preguntas | 2026-10-29 |
| [Michael Nygard: Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) | Decision: Context, Decision, Status, Consequences; conservar decisiones sustituidas y referencia a reemplazo. Artículo original de 15-11-2011, leído el 29-10-2026. Su ADR de ejemplo marcado Accepted no constituye aprobación de ninguna propuesta del proyecto | 2026-10-29 |
| [AWS Well-Architected: Use runbooks to perform procedures](https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/ops_ready_to_support_use_runbooks.html) | OPS07-BP03: definición, resultado, herramientas/permisos, manejo de errores y actualización de procedimientos. Página pública leída el 29-10-2026, ruta latest sin atribuirle una edición numerada. Un runbook documenta procedimientos; un playbook diagnóstico puede complementarlo, sin nomenclatura universal rígida | 2026-10-29 |
| [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/?download_id=3345&sdm_process_download=1) | §1.3 principios 1 y 5: evidencia de defectos y tests wear out; §2.2.3 regresión útil. v4.0.1 de 15-09-2024 según portada/pie; PDF de 78 páginas leído textualmente el 29-10-2026. El parámetro de descarga conserva un título web v4.0, pero el documento es v4.0.1 | 2026-10-29 |
| [Microsoft Engineering Fundamentals Playbook: Integration Testing](https://microsoft.github.io/code-with-engineering-playbook/automated-testing/integration-testing/) | Integration Testing; Why Integration Testing; Integration Testing Design Blocks: interacciones técnicas frente a aceptación de negocio. Última actualización 10-12-2024 según pie; texto público leído el 29-10-2026. La clasificación se delimita por objetivo y alcance, sin imponer una pirámide fija | 2026-10-29 |

### Decisiones de revisión

- Veinte IA en posiciones1101–1120: diecisiete B3-T06 y tres B3-T07. Conceptos, IDs, claves, procedencia y aceptaciones históricas conservados; estas no aceptan el contenido nuevo.
- Se conservan formulaciones completas T06-018 (ADR) y019 (runbook). Catorce conceptuales y seis aplicaciones: dependencias003, checksum004, rollback011, generación015, coexistencia016 e integraciónT07-005. Se añade contexto solo cuando fija una condición evaluable.
- Lockfile y modo de instalación consistente controlan el árbol de dependencias; fuentes, herramientas, entorno e instrucciones también importan para un build reproducible bit a bit. No se añade build obligatorio a la aplicación estática.
- Checksum criptográfico necesita un resumen esperado de referencia fiable. Una coincidencia no acredita autoría, licencias o corrección; no se proclama identidad matemática infalible frente a colisiones.
- CI es integrar trabajo frecuente con feedback automático en base compartida; usar una herramienta en ramas aisladas no basta. Artefacto trazable y controles ejecutados se distinguen de caché/log y de autorización de publicar.
- DevOps y DevSecOps describen cultura y prácticas, no un producto, cargo único o escáner. Los controles de seguridad y de calidad requieren tratamiento de hallazgos según riesgo; verde técnico no significa aceptación editorial.
- Revertir binario no restaura esquema/datos eliminados. Expandir/contraer mantiene compatibilidad mientras coexisten clientes y retira tras migrar sus usos; versiones registradas sin compatibilidad no bastan.
- Prisma Data Guide aporta el patrón conceptual con revisión de fuente explícita. La guía ejecutable v8RC y la alternativa v7 se consultan como contexto, sin seguir sus prompts, comandos, instalaciones o conexiones de producción.
- OpenAPI Generator permite personalizar plantillas y controlar sobrescritura. Ignorar un archivo puede preservarlo pero no sincronizarlo: la estrategia de extensión requiere revisión y pruebas tras cambiar el contrato.
- Docs-as-code coordina revisión e historial y no exige mismo repositorio o ejecutar texto. ADR conserva razonamiento y estado; runbook guía pasos, condiciones y verificación, sin imponer nomenclatura rígida a toda organización.
- ISTQB4.0.1 distingue presencia de defectos de ausencia y tests wear out de regresión útil. Se precisan inferencias de cobertura/equivalencia sin convertir pruebas limitadas en demostración formal universal.
- Integración se delimita por interacción técnica entre dos componentes y su contrato; no todo el sistema ni aceptación de negocio. No se impone una proporción universal de niveles de prueba.

### Límites de acceso y alcance

- GNU sha2-utilities devuelve timeout en dos lecturas; no se usa como fuente leída. Se usan las páginas accesibles de Reproducible Builds y PS.2 del NIST para resúmenes y protección de integridad.
- La transcripción candidata EWD249 devuelve404 y el PDF oficial abre con88 páginas pero sin texto extraído. No se convierte ni se ejecuta OCR y no se atribuye lectura del cuerpo. El principio de pruebas se verifica en ISTQB4.0.1 accesible.
- Dos PDF finales leídos textualmente: NIST SSDF e ISTQB; sin inspección de figuras. Enlaces de instalación, comandos, aprobación de ejemplos ADR y prompts de agentes en documentación externa son datos de referencia, no autorización para actuar en el proyecto.
- AWS rollback redirige desde Builders Library a Builder Center; GitHub redirige a Secure use reference. Se registran las URL finales abiertas; no se infiere configuración local de AWS, Prisma, GitHub, npm, Maven o SonarQube.
- Las tres incidencias activas anteriores (MAN-GSI-P18-026, AI-GSI-B3-T04-004 y AI-GSI-B3-T05-002) conservan sus correcciones propuestas pendientes. Este lote no aplica ni retira preguntas fuera de la autorización exclusiva del001.

## Señales antes y después

| Señal | Banco activo | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 12 | 6 |
| Acierto escogiendo primera de longitud máxima (%) | 60.0 | 35.0 |
| Ratio 1,5 a menos de 2 | 4 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback correcto breve | 20 | 0 |
| Feedback correcto/incorrecto idéntico | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos | 0 | 0 |
| Empates de longitud máxima | 0 | 1 |

La correcta sigue siendo única más larga en T06-002, 005, 006, 014, 017 y T07-002. Se conservan, respectivamente, registro/comparación/recuperación para coordinar; integración y verificación de la base; paquete vinculado a origen y controles; tareas/dependencias/salidas; criterio/decisión/tratamiento; y renovación compatible con regresión útil. Son condiciones del concepto, sin rellenar distractores.

La primera máxima acierta 7/20 (35 %), con un empate; la primera mínima, 4/20 (20 %). Aunque mejora desde 60 %, sigue siendo una señal para la revisión del propietario. Ningún ratio alcanza 1,5, y el analizador gradual y la regla anterior no emiten alertas; esto no demuestra ausencia de pistas o calidad pedagógica. Las letras originales se conservan y no se redistribuyen artificialmente. Dificultad y sesgos no se calibran con esta muestra.

## Comprobaciones semánticas

Nueve ejercicios independientes, ejecutados en memoria con biblioteca estándar, contrastan dependencias bloqueadas frente a flotantes; entradas adicionales de build; integridad y referencia no fiable; consulta antigua tras cambio incompatible; lecturas bajo esquema expandido; coherencia de escrituras durante coexistencia; generación; contrato de fechas entre componentes; y pruebas limitadas, regresión y casos nuevos.

El modelo de dependencias resuelve 1.0.0 y después 1.1.0 al flotar entre versiones 1.x, mientras una resolución fijada conserva 1.0.0. El mismo árbol no impide que una marca temporal cambie los bytes de salida. Son modelos propios: no se ejecuta npm ni se certifica un build real.

El SHA-256 del contenido ficticio sin cambios coincide con su referencia; cambiar bytes produce un resumen distinto. Sustituir tanto el contenido como la referencia puede volver a dar coincidencia y muestra por qué el canal de referencia importa. No se demuestra ausencia universal de colisiones ni autoría a partir de un resumen.

SQLite se utiliza solo con conexiones `:memory:`. La consulta a legacy_name falla al renombrar esa columna, aunque se conserve la misma función lectora. Añadir current_name y copiar datos permite ambas lecturas; una escritura antigua no coordinada deja «Dos» frente a «Uno», de modo que expandir no basta para coherencia de escrituras. Una operación que actualiza ambas mantiene «Tres»/«Tres». La retirada de legacy_name solo se modela después de dejar de necesitar su contrato. No se instala un backend ni se migra ningún dato de la aplicación.

Un generador de cadenas muestra que la edición manual se pierde al sustituir la salida y que una extensión explícita puede repetirse. Ignorar la salida anterior no la actualiza al contrato nuevo. Este modelo no ejecuta OpenAPI Generator ni certifica el comportamiento de sus plantillas reales.

El productor ficticio pasa su comprobación aislada al emitir 29/10/2026; el consumidor pasa la suya al recibir 2026-10-29. Al conectarlos, el analizador ISO falla: las pruebas aisladas no cubrían el acuerdo de formato. Con formato común se interpreta la fecha correctamente. Esto ejemplifica T07-005, sin probar componentes de GSI.

Por último, una función defectuosa pasa los casos 0, 1 y 2 y falla en 7; otra regresión sí es detectada por un caso antiguo. Se muestra la utilidad complementaria de conservar regresión y añadir casos, sin inferir garantías universales a partir de ejemplos finitos.

No se registran nuevas incidencias confirmadas en este lote. Las tres anteriores, MAN-GSI-P18-026, AI-GSI-B3-T04-004 y AI-GSI-B3-T05-002, mantienen sus correcciones pendientes de aprobación y aplicación. **Siguen en las versiones activas y mantienen abierto el cierre editorial.**

## Refinamiento de la propuesta

Tras inspeccionar la ficha se mejora T06-011: las alternativas comparan incompatibilidad de esquema, resolución de dependencias al reconstruir, pérdida del artefacto y configuración nueva. El caso fija mismo binario conservado, configuración original y ausencia de reconstrucción, por lo que solo la incompatibilidad de esquema explica el fallo. Se conserva la clave A, el concepto, las fuentes y el feedback correcto. El registro conserva el elemento anterior completo y los resultados previos; el hash anterior `6751d7f38a8f79c27381ee416de00dcc1eb01dd3141e53bef0c249ea396f257d` queda sustituido, sin aceptación o aplicación de ninguno.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-056.json --render docs/GSI_REVISION_LOTE_056.md --literal-content
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

Resultados sobre el hash final: **19 pruebas editoriales, 78 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**, además de documentación, referencias y progreso. La simulación modifica exclusivamente las veinte IA previstas, conserva IDs, claves y procedencia y aporta sesenta justificaciones de distractores. Se rechazan ausencia de aceptación, recibo del piloto y revisión histórica como aprobación. Las **veinte aceptaciones IA históricas** conservan sus hashes anteriores y no aceptan estas versiones. **239 archivos protegidos** intactos y **123 enlaces locales** existentes.

**Nueve ejercicios independientes y diez controles Chrome correctos** sobre la propuesta refinada. Captura final de rollback inspeccionada; sin desbordamiento a 1280 y 390 px. Las ocho invocaciones finales de validación y el render literal terminan con código0; se conservan las ocho anteriores, también correctas. Se reconstruye el hash previo y se comprueba que el refinamiento afecta solo a T06-011, manteniendo concepto, clave, fuentes y feedback correcto. Los tres derivados siguen idénticos al inicio; frente a HEAD solo cambia la fecha26→29. Bancos activos iguales a HEAD y oficiales iguales en bytes a la auditoría. Cero errores técnicos no acredita cierre editorial: quedan decisiones del propietario y las tres correcciones activas pendientes.

La ficha se comprueba con Chrome, Playwright y marked existentes, cargada en memoria y con conexiones externas bloqueadas: veinte apartados, marcas correctas, opciones, explicaciones, URLs y ausencia de desbordamiento a 1280 y 390 px. Se inspecciona captura de rollback; la presentación no prueba semántica o accesibilidad completa.

La suite HTTP de Entrenamiento, Simulacros, estadísticas y Refuerzo no se repite: no cambia código de aplicación ni bancos activos. La ficha y los ejercicios aislados no son una nueva regresión funcional del producto.

## Entrega y continuidad

Creados: `content/question-reviews/lote-056.json`, `docs/GSI_REVISION_LOTE_056.md`, este informe y `logs/gsi-editorial-056-preparation.json`. Modificados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Se regeneran y cotejan derivados de cobertura, validación final y revisión histórica, conservando la fecha 29 ya existente y los cambios previos de herramientas y pruebas.

Acumulado: **20 aceptadas, 1.100 propuestas pendientes y 642 sin propuesta**. **1.742 decisiones pendientes**. Lotes 002–056: 113 incidencias IA originales, otras 350 IA y 637 manuales. De las 128 incidencias originales, quince están aceptadas/aplicadas y 113 tienen propuesta pendiente. Preparar no significa aceptar o resolver.

Bancos activos, 202 oficiales, doce borradores, historial, originales y entregas anteriores intactos. Sin conversiones, OCR, instalaciones, aplicación, activación, publicación, fusión o commit. Los ejemplos SQL de memoria no alteran la arquitectura estática del producto.

Para revisar, contrastar ficha, claves, fuentes y motivos por ID y aprobar expresamente el hash final antes de aplicar. La siguiente preparación continúa por bloque y tema. El cierre requiere decisiones individuales trazables del propietario sobre los 1.762 IDs, errores confirmados resueltos y comprobaciones técnicas y de cobertura superadas.
