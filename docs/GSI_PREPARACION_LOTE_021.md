# Preparación del lote GSI-EDITORIAL-021

Fecha: **27-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico:

`1087093d0b855d8f44d921e35805fe89f564136a786136cc7763603375e1d165`

La [ficha antes/después](GSI_REVISION_LOTE_021.md) contiene las 20 preguntas y explicaciones. El [JSON](../content/question-reviews/lote-021.json) conserva versiones de partida, hashes, motivos, fuentes y rúbrica del preparador. El [registro técnico](../logs/gsi-editorial-021-preparation.json) distingue preparación y aceptación humana. La aprobación del piloto no autoriza este lote.

## Alcance y decisiones individuales

Posiciones **401–420** de `review_order`: **20 manuales B2-T01**. No incluye IA ni oficiales. Se mantienen conceptos, IDs, claves, fuentes históricas, procedencia y dificultad orientativa.

**MAN-GSI-P17-077 y 080** conservan literalmente enunciado y alternativas. Se registran como `revise` porque las explicaciones y referencias cambian y requieren aceptación propia. Hay **17 conceptuales y tres aplicaciones**, sin imponer cuotas por lote.

| ID | Modalidad | Decisión propuesta y contraste individual |
| --- | --- | --- |
| MAN-GSI-P17-062 | Conceptual | Acceso amplio por red con mecanismos estándar y clientes heterogéneos; no exige Internet público o ausencia de autorización. |
| MAN-GSI-P17-063 | Conceptual | Pooling dinámico, multitenencia y aislamiento; ubicación a un nivel de abstracción no equivale a control del servidor exacto. |
| MAN-GSI-P17-064 | Conceptual | Medición, control y reporte según servicio; pago por uso típico no es tarifa obligatoria universal. |
| MAN-GSI-P17-065 | Conceptual | Elasticidad rápida: aprovisionar y liberar frente a crecimiento fijo, conmutación y copias. |
| MAN-GSI-P17-066 | Conceptual | IaaS y control de SO/aplicaciones frente a PaaS, SaaS y compra local; no exige una técnica de virtualización única. |
| MAN-GSI-P17-067 | Conceptual | Plataforma/runtime del proveedor frente a código, identidades y decisiones de negocio del cliente. |
| MAN-GSI-P17-068 | Conceptual | Aplicación SaaS frente a infraestructura, plataforma y licencia local; el cliente conserva decisiones y responsabilidades. |
| MAN-GSI-P17-069 | Conceptual | Pública por uso abierto al público general, frente a privada, comunitaria e híbrida; no define datos abiertos. |
| MAN-GSI-P17-070 | Conceptual | Privada por dedicación organizativa, con varios consumidores internos y alojamiento interno o externo. |
| MAN-GSI-P17-071 | Conceptual | Acotar escenario privada/pública y su integración, explicando que NIST admite otras composiciones híbridas. |
| MAN-GSI-P17-072 | Conceptual | Multicloud según pluralidad de proveedores, frente a híbrida, multirregión y varios productos de uno solo. |
| MAN-GSI-P17-073 | Conceptual | Región y zonas como niveles geográficos y de fallo; no universalizar edificio único o presencia de zonas en toda región. |
| MAN-GSI-P17-074 | Aplicación | Servicio que solo lee datos: permisos mínimos, alcance y separación de identidad respecto de administración. |
| MAN-GSI-P17-075 | Conceptual | Reparto variable según modelo y servicio; distinguir administración del SO/runtime y gobierno de datos/identidades. |
| MAN-GSI-P17-076 | Conceptual | Lock-in como dependencia costosa de cambiar, frente a conectividad, infrautilización e inconsistencia; valorar ventajas y riesgos. |
| MAN-GSI-P17-077 | Conceptual | Conservar pregunta y alternativas; TCO con horizonte, escenarios, alcance comparable y costes aplicables. |
| MAN-GSI-P17-078 | Conceptual | Automatización y cambio de tareas sin eliminar gobierno ni conservar literalmente todo el trabajo del CPD. |
| MAN-GSI-P17-079 | Aplicación | Picos y baja demanda: ajustar recursos con elasticidad y provisión bajo demanda, frente a reserva fija u observación sin ajuste. |
| MAN-GSI-P17-080 | Aplicación | Conservar caso y alternativas; salida definida, documentada y probada con proporcionalidad a riesgo y valor. |
| MAN-GSI-P17-008 | Conceptual | SSD frente a HDD y papel NVMe: ausencia de movimiento, colas y memoria no volátil, sin velocidad universal ni flash exclusiva. |

Cada pregunta tiene explicación de la correcta y justificaciones individuales de los tres distractores por sus IDs originales. Las explicaciones se refieren al contenido para funcionar con barajado. Ninguna clave cambia ni necesita reemplazo.

## Fuentes y alcance de comprobación

Las **12 URLs primarias distintas se abrieron**. Cada pregunta registra localizador, versión o alcance y fecha real **27-10-2026**. NIST 800-145 se reabrió y se cotejó su sección 2; Autoscaling conserva el contraste abierto del mismo día del lote 020. No se atribuye revisión humana independiente.

| Respaldo | Versión y apartados empleados |
| --- | --- |
| [NIST SP 800-145](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) | Septiembre 2011, errata 27-04-2012. Sección 2, pp. impresas 2–3: cinco características, nota de medición, tres modelos de servicio y cuatro de despliegue. |
| [Microsoft: responsabilidad compartida](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) | Actualización 24-08-2026. Introducción y Responsibility matrix, responsabilidades retenidas y capas del proveedor. Es guía de gobierno, sin modificar contratos o resolver obligaciones legales. |
| [Microsoft: Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) | Actualización 11-10-2026. Ajuste de recursos, métricas, límites y retirada segura de instancias. |
| [Google: multicloud](https://cloud.google.com/learn/what-is-multicloud) | Fecha textual Last updated: 10/09/2026, conservada sin reinterpretar formato. Párrafo inicial de varios proveedores y distinción de ejes con híbrida. |
| [AWS: regiones y zonas](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions-availability-zones.html) y [Azure: regiones](https://learn.microsoft.com/en-us/azure/reliability/regions-overview) | Introducción, Regions/Availability Zones y Understand Azure regions and geographies. Ejemplos de proveedores, sin recuentos actuales ni opciones universales. |
| [AWS IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) | Require workloads to use temporary credentials with IAM roles y Apply least-privilege permissions; alcance, condiciones y revisión de acceso. |
| [Microsoft: identidad y acceso](https://learn.microsoft.com/en-us/azure/well-architected/security/identity-access) | Determine all identities for authentication; Provide role-based authorization, Role assignment y Protect critical impact accounts. Identidad, rol, alcance y funciones administrativas separadas. |
| [GOV.UK: lock-in técnico](https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud) | Publicado 17-12-2019, actualizado 03-09-2026. Definición, Understand y Manage your technical lock-in: salida, formatos, exportación, estimación y pruebas. |
| [AWS: Detailed business case](https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/detailed-business-case.html) | Validate and refine the infrastructure and migration cost model y Refine the IT productivity and IT operations and support efficiency value model. Componentes y escenarios, sin adoptar porcentajes de ahorro. |
| [Kingston: SSD FAQ](https://www.kingston.com/en/ssd/ssd-faq) | What is an SSD?, How much faster is an SSD? y What is the difference?: mecanismos físicos y factores de rendimiento. Sin extrapolar cifras comerciales o uniformidad absoluta. |
| [NVM Express: NVMe Overview](https://nvmexpress.org/wp-content/uploads/NVMe_Overview.pdf) | Introduction, PDF p. 1, y NVMe Protocol Advantages, PDF p. 3. Documento histórico sin revisión o fecha impresa identificada, con referencias internas a 2016; solo fundamentos de memoria no volátil, PCIe/fabrics y colas. |

Matices preservados:

- **Características NIST.** Acceso amplio no es acceso anónimo ni Internet obligatorio. Pooling no concede acceso cruzado a datos y permite elegir ubicación a un nivel más alto. Medición apoya control y transparencia; la nota NIST presenta pago por uso como típico. Elasticidad contempla liberar recursos y automatización en algunos casos, sin capacidad física infinita.
- **Capas y responsabilidades.** IaaS no se reduce a una técnica de virtualización; PaaS opera plataforma y SaaS aplicación, con configuraciones, identidades y datos del cliente en el alcance correspondiente. Las matrices son ilustrativas y se revisan frente a cada servicio y acuerdo. No se atribuyen al proveedor las decisiones del negocio por administrar infraestructura.
- **Despliegue y proveedores.** Pública se define por ámbito de provisión, no por visibilidad de datos; privada por dedicación organizativa, no por ubicación local. La pregunta de híbrida se acota a privada/pública; NIST admite composiciones más amplias. Multicloud usa el eje de proveedores y no garantiza integración o salida transparente. No se adoptan equivalencias generales de conjuntos de la narrativa comercial de Google ni se presenta toda infraestructura on-premises como cloud.
- **Regiones e IAM.** Zona no equivale necesariamente a un edificio. No se presupone que toda región tenga zonas o pareja, ni que desplegar recursos multizona configure por sí mismo replicación o resiliencia. Mínimo privilegio incluye alcance y operaciones; la identidad de carga se distingue de administración. No se impone rol personalizado o granularidad idéntica a todo servicio.
- **Coste y reversibilidad.** TCO requiere horizonte y condiciones comparables; CapEx/OpEx no determina por sí solo el resultado. Lock-in puede ser aceptable si su valor y riesgo se evalúan, sin prometer eliminarlo totalmente. Se usa orientación técnica del gobierno británico, sin trasladar sus reglas de contratación a España ni valorar contratos, precios o inversiones reales.
- **Almacenamiento.** SSD describe el dispositivo y NVMe su interfaz/protocolo; NVMe no se limita conceptualmente a NAND ni exige SATA. Tiene colas y paralelismo. El rendimiento depende de carga, controlador, memoria y plataforma; no se copian máximos históricos, porcentajes de velocidad o garantías sobre duración y precios.

La apertura de Seagate devolvió un bucle de redirección y no se usa como respaldo leído; se emplean Kingston y NVM Express abiertos. Varias páginas Microsoft muestran advertencia genérica de autorización pero devolvieron cuerpo público legible; no se accedió a cuentas o material privado. También se abrió una página comercial de nube híbrida y se consultaron otras definiciones, pero la definición amplia de composición se respalda en NIST. Las frases comerciales de las fuentes sobre ahorro, seguridad o portabilidad universales no se convierten en hechos de las preguntas.

El cotejo final sustituyó una descripción aproximada del apartado IAM por sus títulos exactos **Provide role-based authorization** y **Role assignment**. El registro conserva el hash previo y el ID afectado. No cambiaron enunciados, alternativas, claves, explicaciones o versiones de partida en ese ajuste de localizador.

## Métricas antes y propuesta

Análisis 2.0.0 de las 20 preguntas, en simulación.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 11 | 5 |
| Acierto por primera alternativa de longitud máxima | 12/20 (60 %) | 7/20 (35 %) |
| Ratio correcta/distractor máximo de 1,5–<2 | 4 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 19 | 0 |
| Feedback correcto e incorrecto idénticos | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 1 | 3 |
| Explicación individual de tres distractores | 0 | 20 |

Como comprobación descriptiva adicional, la heurística de primera alternativa de longitud mínima acierta **7/20 (35 %)**. No se alteran claves ni se añade relleno para ajustar proporciones. La correcta sigue siendo única más larga en cinco preguntas; se mantiene la extensión necesaria para precisar contenidos. La ausencia de alertas del analizador no acredita calidad pedagógica, aceptación del propietario o calibración estadística.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-021.json --render docs/GSI_REVISION_LOTE_021.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

La simulación debe modificar exclusivamente las 20 manuales propuestas, sin escribir bancos activos. Se comprueban hashes, IDs, claves, procedencia, campos históricos de fuente, 60 explicaciones individuales y reproducción de ficha. Una aceptación ausente o el recibo del piloto no deben autorizar el lote.

No cambian código ni bancos activos. No se repite la suite HTTP completa para propuestas inactivas ni se atribuye al lote una nueva ejecución del piloto. Entrenamiento, Simulacros, estadísticas y Refuerzo siguen consumiendo las versiones activas. Para revisar este hito, abrir la ficha y contrastar cada alternativa y explicación con los apartados de sus fuentes antes de aprobar expresamente el hash.

Resultado: **17 pruebas editoriales superadas**, **43 JSON y 21 esquemas validados**, **1.964 estructuras de pregunta válidas** y **19.251 controles de integridad correctos**. Documentación sincronizada. El validador de referencias cubrió cuatro bloques, 57 temas y 37 Markdown del catálogo; una comprobación adicional verificó **49 enlaces locales** entre ficha, informe y plan. Estos controles no sustituyen la lectura de fuentes ni acreditan aceptación editorial nueva.

La simulación confirmó exactamente **20 cambios manuales**, cero IA y cero oficiales, sin escrituras activas. Se verificaron 60 explicaciones individuales, las dos formulaciones conservadas, IDs y claves de las 1.964 preguntas, procedencia, campos históricos de fuente y reproducción de ficha. Los **84 archivos protegidos** de bancos, base, aceptación y entregas anteriores conservan sus hashes. Las oficiales son idénticas byte a byte al commit actual y a la base auditada; manuales e IA mantienen el contenido del commit actual. Los tres informes derivados conservan contenido y fecha existentes al iniciar la preparación.

Se rechazaron una aceptación vacía y el recibo real del piloto frente al lote 021. No hay nuevas aceptaciones para los lotes 002–021 y el historial conserva un único lote aplicado. `git diff --check` y la comprobación de espacios finales de los cuatro artefactos nuevos fueron correctos. Todos los validadores del proyecto ejecutados para este lote terminaron con código 0. Una comprobación auxiliar buscaba literalmente «no exige» en IaaS, mientras el texto dice «ni exige que toda oferta»; se corrigió esa comprobación sin modificar la propuesta y después pasó. El registro conserva la incidencia, el refinamiento del localizador y los límites de fuentes descritos. El estado técnico histórico de las activas no se atribuye a nueva aceptación humana o calibración.

## Entrega y continuidad

Creados: `content/question-reviews/lote-021.json`, `docs/GSI_REVISION_LOTE_021.md`, este informe y `logs/gsi-editorial-021-preparation.json`. Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los informes derivados de cobertura, validación final y revisión histórica se regeneran contrastando contenido y fecha existentes de 27-10-2026.

El lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 400 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, de las que **1.342** aún no tienen propuesta. Los lotes 002–021 reúnen 113 incidencias IA originales, otras 54 IA y 233 manuales. Las 128 incidencias originales mantienen 15 aplicadas y 113 propuestas pendientes; preparar no equivale a resolver editorialmente.

Sin conversiones documentales ni nuevas conversiones pendientes en este hito. Originales, oficiales y entregas anteriores permanecen protegidos. No se crea commit, publicación o fusión de propuestas pendientes. El siguiente lote continuará por bloque y tema. El cierre exige decisión individual del propietario sobre los 1.762 IDs y comprobación de versiones activas, distinguiendo preparación, aceptación humana y calibración todavía no realizada.
