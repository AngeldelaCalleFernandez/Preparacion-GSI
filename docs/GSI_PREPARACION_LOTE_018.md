# Preparación del lote GSI-EDITORIAL-018

Fecha: **27-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico:

`e33f66f3ba1a78ad771036ca540e12d917a84a5b815108000d5a437c5ad630b2`

La [ficha antes/después](GSI_REVISION_LOTE_018.md) contiene las 20 preguntas y sus explicaciones. El [JSON](../content/question-reviews/lote-018.json) conserva versiones de partida, hashes, motivos, fuentes y rúbrica del preparador. El [registro técnico](../logs/gsi-editorial-018-preparation.json) distingue preparación y aceptación humana. La aceptación del piloto no autoriza este lote.

## Alcance y decisiones individuales

Posiciones **341–360** de `review_order`: **seis manuales B1-T10 y 14 manuales B2-T01**. No incluye IA ni oficiales. Se conserva el concepto, ID, clave y procedencia de cada pregunta.

**MAN-GSI-P14-125 y MAN-GSI-P17-002** mantienen literalmente enunciado y cuatro alternativas. Se registran como `revise` porque cambian explicaciones y referencias y necesitan aceptación propia. Hay **18 conceptuales y dos aplicaciones**: la orientación global 70/30 no se impone como cuota por lote.

| ID | Modalidad | Decisión propuesta y contraste individual |
| --- | --- | --- |
| MAN-GSI-P14-158 | Conceptual | CSAE frente a Conferencia y comisiones de empleo público y gobierno abierto; retirar feedback que no explicaba el concepto. |
| MAN-GSI-P14-160 | Conceptual | SARA, @firma e InSide: cuatro secuencias comparables con inversiones y aciertos parciales entre servicios próximos. |
| MAN-GSI-P14-123 | Conceptual | Conferencias Sectoriales multilaterales por materia frente a bilateral, comisión de apoyo y Presidentes. |
| MAN-GSI-P14-125 | Conceptual | Conservar enunciado y opciones; naturaleza técnica, dependencia y composición interadministrativa de CSAE. |
| MAN-GSI-P14-126 | Conceptual | Interoperabilidad y planes conjuntos: localizar estos últimos en el artículo 12.4.b del Reglamento. |
| MAN-GSI-P14-137 | Conceptual | Intermediación con base jurídica; sustituir publicación ilícita demasiado evidente por función real de datos abiertos. |
| MAN-GSI-P17-001 | Conceptual | CPU ejecuta instrucciones; comparar memoria, almacenamiento e interconexión como funciones reales. |
| MAN-GSI-P17-002 | Conceptual | Conservar enunciado y opciones; distinguir socket, núcleo y contexto hardware, recursos compartidos SMT y proceso software. |
| MAN-GSI-P17-003 | Conceptual | Jerarquía habitual: mismas cuatro piezas en todas las permutaciones, sin pista por longitud. |
| MAN-GSI-P17-004 | Aplicación | Bucle que reutiliza un dato y recorre un vector contiguo; localidad temporal/espacial frente a protección, traducción y coherencia. |
| MAN-GSI-P17-005 | Conceptual | L1 rápida, pequeña y próxima; comparar niveles habituales sin imponer capacidades o compartición universales. |
| MAN-GSI-P17-006 | Conceptual | MMU en sistema con memoria virtual: traducción y permisos frente a planificador, DMA y controlador DRAM. |
| MAN-GSI-P17-007 | Conceptual | Acotar memoria principal convencional DRAM; distinguir volatilidad de la propiedad general de acceso aleatorio. |
| MAN-GSI-P17-009 | Conceptual | GPU y paralelismo de datos; comparar dependencias, transferencias y divergencia entre cargas de cálculo. |
| MAN-GSI-P17-010 | Conceptual | FPGA: tejido lógico configurable tras fabricación frente a ASIC y ejecución de instrucciones CPU/GPU. |
| MAN-GSI-P17-011 | Conceptual | ASIC específico, con posible firmware y bloques programables; no afirmar inmutabilidad de todo comportamiento. |
| MAN-GSI-P17-012 | Aplicación | 3.000 peticiones completadas en 10 s: tasa de 300/s, sin deducir latencia individual, concurrencia o utilización. |
| MAN-GSI-P17-013 | Conceptual | Menor latencia con límites de extremo a extremo definidos; distinguir tasa, concurrencia y disponibilidad. |
| MAN-GSI-P17-014 | Conceptual | Bus/interconexión comunica componentes; distinguir ejecución, MMU y persistencia sin bus paralelo único universal. |
| MAN-GSI-P17-015 | Conceptual | DMA reduce copia continuada por CPU; comparar E/S programada, traducción e interrupción, conservando preparación y finalización. |

Cada propuesta incluye explicación de la correcta y justificación de los tres distractores por sus IDs originales. Las explicaciones se refieren al contenido, sin depender de letras visibles ni de su posición. Ningún cambio de clave requiere reemplazo en este lote.

## Fuentes y límites de comprobación

Hay **23 URLs primarias distintas**. Se abrieron **17**; seis fichas CTT se contrastaron mediante contenido primario indexado con acceso directo rechazado. Las referencias completas y sus localizadores constan en cada pregunta del JSON. La fecha real es **27-10-2026**; se reutiliza el contraste de servicios ya realizado ese mismo día para el lote 017, conservando el método y sus límites.

| Respaldo | Versión y localizador empleado |
| --- | --- |
| [Ley 40/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) | Consolidación informativa actualizada el 02-08-2024: artículos 146, 147, 152 y 153 y disposición adicional novena. |
| [Reglamento de la Conferencia](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-22239) | Resolución 20-10-2025, BOE 03-11-2025: anexo, artículos 5, 6, 11, 12 y 12 bis. Los planes conjuntos constan en 12.4.b. |
| [ENI](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331) y [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) | Consolidaciones informativas actualizadas el 06-11-2024: ENI 13/21; LPAC 16.4 y 28.2–3. |
| [VALIDe: Validar Firma](https://valide.redsara.es/valide/ejecutarValidarFirma/exec.html) y [AutoFirma](https://firmaelectronica.gob.es/descargas) | Páginas funcionales abiertas: uso de @firma y cliente local. No se envían archivos ni se operan formularios. |
| CTT SARA, @firma, InSide, PID, SIR y Autentica | Resúmenes y descripciones primarios indexados consultados el mismo día para lote 017; apertura directa rechazada. No se declara disponibilidad operativa comprobada ni acceso autenticado. |
| [IBM microprocessor](https://www.ibm.com/think/topics/microprocessor) | Componentes y ciclo: control, ejecución, registros temporales, caché y buses. |
| [Topología Linux](https://docs.kernel.org/admin-guide/cputopology.html) y [Intel Appendix A](https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/best-practices/sysadmin-guidance-transient-execution-side-channel.html) | Atributos package/core/thread; documento Intel ID 660242, actualizado 26-05-2020, solo fundamentos de núcleo y SMT. |
| [Arm Memory Model and Memory Protection](https://documentation-service.arm.com/static/64c783b138511951cb7a2575) | Versión 1.1, 107565_0101_01_en, Issue 01, 19-07-2023; 2.7.1–2.7.3, pp. impresas 23–24: localidad, jerarquía y coherencia. |
| [Conceptos de memoria Linux](https://docs.kernel.org/admin-guide/mm/concepts.html) y [DMA](https://docs.kernel.org/core-api/dma-api-howto.html) | Documentación en línea: Virtual Memory, Page Tables y CPU and DMA addresses. Sin fijar versión de implementación. |
| [Kingston Glossary](https://www.kingston.com/en/memory/kingston-glossary) | RAM, SDRAM, EEPROM y SSD: memoria de trabajo, volatilidad predominante y contraste con persistencia. |
| [CUDA Best Practices](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html) | Versión 13.4 consultada, 4.1.3, 5 y 13.1: paralelismo, transferencias y divergencia. |
| [AMD UG1393](https://docs.amd.com/r/2023.2-English/ug1393-vitis-application-acceleration/Working-with-Alveo-Accelerator-Cards) | 2023.2 English, 13-12-2023, Working with Alveo Accelerator Cards, What is an FPGA. |
| [Intel Technology Journal Q4 2001](https://www.intel.com/content/dam/www/public/us/en/documents/research/2001-vol05-iss-4-intel-technology-journal.pdf) | Digital Movie Creator, Hardware Architecture, pp. impresas 4–5, PDF 52–53: ASIC específico y microcontrolador con firmware. |
| [Microsoft Learn: load testing](https://learn.microsoft.com/en-us/azure/databricks/machine-learning/model-serving/what-is-load-test) | Tabla Load testing concepts and definitions: latencia, RPS y concurrencia; sin extrapolar proporciones universales. |

Se mantienen estos límites conceptuales y documentales:

- **Cooperación y servicios.** No se extrapolan adscripciones de cargos del Reglamento de 2025 a 2026. Preparar planes no equivale a sustituir el Pleno. Intermediación respeta habilitación, finalidad, oposición y excepciones: no exige consentimiento universal ni publica consultas individuales.
- **Topología y memoria.** SMT comparte recursos y no garantiza duplicar rendimiento ni dos hilos por núcleo. La jerarquía es habitual, no una ordenación universal de todo producto. DRAM se acota expresamente. El documento Arm de perfil M no se usa para afirmar presencia de MMU; Linux respalda memoria virtual y permisos.
- **Aceleradores.** CUDA aporta un ejemplo técnico, sin atribuir su organización a toda GPU. FPGA no garantiza acelerar cualquier función. Un ASIC puede contener firmware y procesadores: se evita afirmar que todo comportamiento es inmutable. Las fuentes AMD e Intel históricas se usan para fundamentos, sin recomendar productos o herramientas actuales.
- **Métricas y DMA.** No se deduce latencia individual del inverso de una tasa con concurrencia. Menor latencia requiere límites de medida comparables. DMA sigue necesitando preparación, mapeos y finalización; interrupción e IOMMU pueden acompañarlo, sin ser la transferencia misma.

Un PDF educativo de Micron y otro enlace Arm devolvieron 404; Crucial no fue accesible y un enlace de inversores Micron redirigió a portada. Samsung devolvió navegación y aviso de página no disponible pese al texto indexado. No se usan como fuentes leídas. Para RAM se emplea Kingston abierto y para localidad el documento Arm 1.1 abierto. No se adopta una afirmación imprecisa sobre permanencia de registros de otra página general de IBM. Tampoco se utiliza la descripción particular de L2 del ejemplo Intel ni sus recomendaciones de seguridad como orientación actual.

Se completó el respaldo de distractores con SIR, AutoFirma, Autentica y artículos de órganos próximos. El registro conserva el hash previo del borrador y los IDs afectados; no cambiaron enunciados, alternativas, claves o versiones de partida por ese refinamiento.

## Métricas antes y propuesta

Análisis 2.0.0 sobre las 20 preguntas, en simulación.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 16 | 5 |
| Acierto por primera alternativa de longitud máxima | 16/20 (80 %) | 6/20 (30 %) |
| Ratio correcta/distractor máximo de 1,5–<2 | 6 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 16 | 0 |
| Feedback correcto e incorrecto idénticos | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 0 | 4 |
| Explicación individual de tres distractores | 0 | 20 |

La correcta sigue siendo única más larga en cinco preguntas y la heurística de primera longitud máxima acierta seis. Se conservan las formulaciones justificadas sin rellenar distractores ni cambiar claves para repartir letras. No hay alertas resultantes del analizador, pero esto no certifica calidad pedagógica, aceptación del propietario ni calibración estadística.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-018.json --render docs/GSI_REVISION_LOTE_018.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

La simulación debe modificar exclusivamente las 20 manuales propuestas, sin escribir bancos activos. Se verifican hashes, claves, IDs, procedencia, campos históricos de fuente, 60 explicaciones individuales y reproducción de la ficha. El recibo del piloto o una aceptación ausente no deben autorizar este lote.

No cambia código ni contenido activo. No se repite la suite HTTP completa para propuestas inactivas ni se presenta la ejecución del piloto como nueva. Entrenamiento, Simulacros, estadísticas y Refuerzo siguen consumiendo las versiones activas. Para revisar este hito, abrir la ficha, contrastar las explicaciones con los localizadores y aprobar expresamente su hash solo si procede.

Resultado: **17 pruebas editoriales superadas**, **40 JSON y 21 esquemas validados**, **1.964 estructuras de pregunta válidas** y **19.251 controles de integridad correctos**. Documentación sincronizada. El validador de referencias cubrió cuatro bloques, 57 temas y 37 Markdown de catálogo; una comprobación adicional verificó **43 enlaces locales** entre ficha, informe y plan. Estos validadores no certifican accesibilidad HTTP de todas las fuentes ni aceptación editorial nueva.

La simulación confirmó exactamente **20 cambios manuales**, cero IA y cero oficiales, sin escrituras activas. Se verificaron las 60 explicaciones de distractores, las dos formulaciones conservadas, los IDs y claves de las 1.964 preguntas, la procedencia, los campos históricos de fuente y la reproducción de la ficha. Los **72 archivos protegidos** de bancos, base, aceptación y entregas anteriores mantienen sus hashes. Las oficiales son idénticas byte a byte al commit actual y a la base auditada; manuales e IA conservan el contenido del commit actual. Los tres informes derivados mantienen contenido y fecha existentes al iniciar la preparación.

Se rechazaron una aceptación vacía y el recibo real del piloto para este lote. No hay aceptaciones de los lotes 002–018 y el historial conserva un único lote aplicado. `git diff --check` y la comprobación de espacios finales de los cuatro artefactos nuevos fueron correctos. No se confunde el estado técnico histórico de preguntas activas con la nueva revisión editorial pendiente.

Incidencias registradas: la creación inicial no se ejecutó porque falló la revisión automática por límite de uso. Se verificó que no había archivos nuevos; una consulta posterior confirmó uso disponible y el reintento mediante el mismo control fue correcto. El primer validador final terminó con `OSError [Errno 22]` al escribir el informe de revisión histórica; los tres informes conservaron su contenido y el reintento superó todos los controles. Una comprobación auxiliar distinguía mayúscula inicial en una permutación de memoria: se corrigió la comparación, sin cambiar preguntas. Los límites externos de fuentes descritos arriba permanecen documentados. No quedan fallos técnicos reproducidos al cerrar este hito; no se atribuye a ello aceptación humana ni calibración.

## Entrega y continuidad

Creados: `content/question-reviews/lote-018.json`, `docs/GSI_REVISION_LOTE_018.md`, este informe y `logs/gsi-editorial-018-preparation.json`. Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los informes derivados de cobertura, validación final y revisión histórica se regeneran contrastando su contenido y fecha existentes de 27-10-2026.

El lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 340 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, de las que **1.402** aún no tienen propuesta. Los lotes 002–018 reúnen 113 incidencias IA originales, otras 54 IA y 173 manuales. Las 128 incidencias originales mantienen 15 aplicadas y 113 propuestas pendientes; preparar no equivale a resolver editorialmente.

Sin conversiones documentales ni nuevas conversiones pendientes en este hito. Originales documentales, oficiales y entregas anteriores permanecen protegidos. No se crea commit, publicación o fusión de propuestas pendientes. El siguiente lote continuará por bloque y tema. El cierre exige decisión individual del propietario para los 1.762 IDs y comprobación de las versiones activas, distinguiendo preparación, aceptación humana y calibración todavía no realizada.
