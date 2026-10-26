# Aplicación local de GSI-EDITORIAL-001

Fecha: 26 de octubre de 2026. Base técnica: `1a69132462c5ae608f29dc83d2b0ab17c6941f4c`.

## Autorización y alcance

El propietario aprobó editorialmente las 20 propuestas del hash `9ef7e9e1ebaf5ffb1aaed76f3213baac8779fc90a52f7d262f697ea9315f1d5b`, condicionadas a las comprobaciones finales. La [aceptación literal](../content/question-reviews/approvals/GSI-EDITORIAL-001.json) identifica al revisor, la fecha, la declaración y las decisiones por ID. El [historial aplicado](../data/gsi-editorial-revisions.json) conserva esa aprobación junto a la propuesta exacta, sin cambiar su hash para transformar estados de preparación en aceptaciones.

Se aplican **4 manuales y 16 IA**, con sus mismos IDs, procedencia y claves correctas. No se crean ni eliminan preguntas. Las 202 oficiales y las otras 1.742 manuales/IA se conservan; la comparación final de contenido y hashes se registra en el informe de validación del lote. Permanecen 1.964 preguntas activas y 1.742 decisiones pendientes de la nueva revisión.

## Comprobación de claves y fuentes

La comprobación de fuentes del agente es una verificación técnica de respaldo; no se presenta como revisión humana independiente ni calibración psicométrica. El respaldo y los localizadores se han contrastado con documentación primaria.

| ID | Clave conservada | Fundamento contrastado |
| --- | :---: | --- |
| `MAN-GSI-P15-075` | C | Model binding obtiene y convierte datos HTTP; routing, validación e inyección son responsabilidades diferentes. |
| `MAN-GSI-P17-095` | B | Los permisos del semáforo limitan accesos; no hay propiedad del hilo. Barrera y cola tienen funciones distintas. |
| `MAN-GSI-P16-155` | B | La compatibilidad depende de versiones y combinación/distribución; una licencia permisiva o propietaria no elimina obligaciones ajenas. |
| `MAN-GSI-P14-014` | D | El art.55.2 identifica 17.2, 18.2 y 18.3, intervención judicial, control parlamentario y ley orgánica; los distractores alteran derechos o garantías. |
| `AI-GSI-B2-T06-015` | B | RFC9110 compara efecto solicitado, permite respuestas distintas y registros separados, y clasifica DELETE como no seguro e idempotente. |
| `AI-GSI-B2-T06-012` | C | WS-Security incorpora seguridad a mensajes, firmas/cifrado y tokens; no define WSDL ni transacciones ni se limita a TLS. |
| `AI-GSI-B2-T10-019` | B | ENS anexo I categoriza por impacto; art.14 requiere análisis/tratamiento y proporcionalidad de medidas. |
| `AI-GSI-B2-T13-001` | C | ENS exige abastecimiento suficiente y Eaton respalda energía inmediata de UPS hasta el generador; regulación, doble fuente y conmutación no aportan reserva. |
| `AI-GSI-B2-T15-001` | D | LCSP139.1 exige ajuste a pliegos; en el supuesto obligatorio y sin variante admitida el precio no compensa incumplimiento. |
| `AI-GSI-B3-T01-002` | A | ISTQB2.1 diferencia actividades/relaciones temporales del ciclo y métodos/prácticas de desarrollo. |
| `AI-GSI-B3-T01-004` | C | ISTQB2.1/3.1 y PMI distinguen validación ejecutable tardía y coste de cambios; las revisiones estáticas pueden hacerse antes. |
| `AI-GSI-B3-T02-004` | A | PMI caracteriza el enfoque predictivo por alcance definido anticipadamente y control formal de cambios, con adaptación posible. |
| `AI-GSI-B3-T02-013` | C | Propietario, valoración, respuesta y disparadores se corroboran en NASA SPR7120.1D, glosario y seguimiento; planificación no acredita mitigación ejecutada. |
| `AI-GSI-B3-T03-005` | A | NASA Appendix C exige verificabilidad y prestaciones medibles; percentil y umbral con carga acordada permiten decidir aceptación. |
| `AI-GSI-B3-T03-017` | A | NASA distingue requisitos/interfaz/calidad/aceptación de diseño y operación; corroborado en SWE050 VerD3.3/3.5. |
| `AI-GSI-B3-T04-001` | A | IBM separa el modelo conceptual del dominio y relaciones de las decisiones físicas del motor. |
| `AI-GSI-B3-T04-020` | C | PostgreSQL5.12 divide una tabla lógica en partes físicas; no sustituye índices ni equivale a replicación o normalización. |
| `AI-GSI-B3-T06-007` | D | La entrega continua puede tener aprobación manual final; despliegue continuo automatiza publicación tras controles. |
| `AI-GSI-B3-T06-010` | C | Microsoft define IaC por modelo descriptivo y versionado para despliegue; inventario, manual y monitorización no lo sustituyen. |
| `AI-GSI-B3-T07-003` | D | ISTQB1.2.3 diferencia error humano, defecto y fallo; no todo defecto se manifiesta en todas las ejecuciones. |

### Notas de mantenimiento de referencias

- `AI-GSI-B3-T02-013`: la URL aprobada de NASA S3001 devuelve **404**. La tabla 4-6 conserva contenido indexado; el concepto se corrobora además en [NASA Stennis SPR7120.1D](https://ssctdpub.ssc.nasa.gov/servlet/sm.web.Fetch/SPR%207120_1%20-%20Rev%20D%20-%20Final-Signature.pdf?did=71126&rhid=1000&type=released), glosario de propietario, valoración y seguimiento por disparadores. El documento declara caducidad en enero de 2027. El enlace original se conserva como parte de la propuesta aprobada; no se afirma que funcione.
- `AI-GSI-B3-T03-017`: el NPR7150.2 enlazado es histórico y está cancelado. El contenido conceptual de ERS se corrobora en [NASA SWE050 VerD](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695421/SWE-050%2B-%2BSoftware%2BRequirements), §§3.3 y3.5. No se presenta la edición histórica como normativa vigente.
- GNU devolvió timeout en lectura directa: se contrastó el contenido indexado de la misma página primaria, incluidos sus localizadores de compatibilidad, además de los textos MIT y Apache accesibles.

Las corroboraciones se documentan sin alterar el JSON aprobado. Las dos referencias históricas quedan señaladas para mantenimiento posterior con la trazabilidad correspondiente. El [registro de fuentes](../logs/gsi-editorial-001-source-verification.json) conserva el detalle.

## Verificación técnica

Suite completa previa y posterior: **código 0**. Resultado final: 101 pruebas unitarias, 289 comprobaciones de regresión, 82 comprobaciones funcionales en Chrome, 17 pruebas del circuito editorial, 8 del analizador y 5 de jerarquía. Se validan 23 archivos JSON contra 21 esquemas y 19.251 controles de integridad. Evidencia: [suite](../logs/gsi-suite.json) e [integridad de la aplicación](../logs/gsi-editorial-001-application.json).

La comprobación específica en Chrome ha respondido las 20 preguntas revisadas y verificado su feedback individual, letras mostradas, 20 intentos estadísticos y 20 registros de Refuerzo. También pasan los simulacros, la penalización, las estadísticas, el refuerzo, la persistencia, las copias, el móvil, el teclado y las rutas bajo una subcarpeta de GitHub Pages.

La primera suite posterior falló al esperar un estado vacío en accesibilidad después de compartir el contexto con la prueba nueva. Se aisló esa sesión en un contexto de navegador propio y la suite completa pasó. El [fallo inicial](../logs/gsi-editorial-001-initial-validation.json) se conserva; no se modificaron las preguntas para resolverlo.

La comparación de las 1.964 preguntas demuestra exactamente 20 cambios autorizados: 4 manuales y 16 IA. Las otras 1.944 son idénticas como registros; el archivo oficial completo también es idéntico byte a byte. Se conservan todos los IDs y claves. La exportación incorpora las 60 explicaciones de distractores y las referencias editoriales del lote.

Comandos de regeneración y prueba:

```powershell
.\.venv\Scripts\python.exe -B scripts/analyze_question_quality.py --write
.\.venv\Scripts\python.exe -B scripts/editorial_progress.py --write
.\.venv\Scripts\python.exe -B scripts/export_gsi_questions.py --force
.\.venv\Scripts\python.exe -B scripts/run_gsi_suite.py
```

## Métricas antes y después

Indicadores sobre cada banco completo; son señales de priorización, no calibración de dificultad ni acreditación pedagógica. Las métricas oficiales no cambian.

| Indicador | Manuales antes → después | IA antes → después |
| --- | ---: | ---: |
| Correcta única más larga | 465 → 463 | 365 → 357 |
| Acierto al elegir primera máxima (%) | 49.43 → 49.22 | 47.07 → 46.08 |
| Ratio de longitud 1,5–<2 | 199 → 198 | 99 → 98 |
| Ratio de longitud ≥2 | 5 → 5 | 30 → 15 |
| Feedback menor de 15 palabras | 730 → 727 | 705 → 691 |
| Alternativas duplicadas | 0 → 0 | 0 → 0 |
| Formulaciones absolutas | 0 → 0 | 99 → 97 |

## Entrega y siguiente paso

Este hito aplica exclusivamente el piloto aprobado y se entrega en un commit independiente de la infraestructura previa; no se publica ni se fusiona. El siguiente lote mantendrá conceptos precisos, distractores plausibles, explicaciones individualizadas y microcasos que aporten valor, con orientación global 70/30 y sin cuotas por lote.

No se han convertido documentos ni hay conversiones nuevas pendientes. Se conservan originales, borradores y aceptaciones históricas.

## Archivos de esta aplicación

Creados:

- `content/question-reviews/approvals/GSI-EDITORIAL-001.json`
- `content/question-reviews/history/9ef7e9e1ebaf5ffb1aaed76f3213baac8779fc90a52f7d262f697ea9315f1d5b/GSI_REVISION_PILOTO_001.md`
- `content/question-reviews/history/9ef7e9e1ebaf5ffb1aaed76f3213baac8779fc90a52f7d262f697ea9315f1d5b/lote-001.json`
- `docs/GSI_APLICACION_LOTE_001.md`
- `logs/gsi-editorial-001-application.json`
- `logs/gsi-editorial-001-initial-validation.json`
- `logs/gsi-editorial-001-source-verification.json`

Modificados:

- `README.md`
- `data/gsi-editorial-revisions.json`
- `data/questions-ai.json`
- `data/questions-manual.json`
- `docs/GSI_CALIDAD_PREGUNTAS.md`
- `docs/GSI_MEJORA_TESTS.md`
- `docs/GSI_PREGUNTAS_TEST_COMPLETAS_2026.md`
- `docs/GSI_REVISION_EDITORIAL.md`
- `docs/GSI_REVISION_PILOTO_001.md`
- `logs/gsi-browser-smoke.json`
- `logs/gsi-editorial-progress.json`
- `logs/gsi-question-quality.json`
- `logs/gsi-regression.json`
- `logs/gsi-suite.json`
- `logs/gsi-unit.json`
- `scripts/editorial_batches.py`
- `tests/gsi-smoke.mjs`
