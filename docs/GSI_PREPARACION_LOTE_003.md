# Preparación de GSI-EDITORIAL-003

Preparado y contrastado el 26 de octubre de 2026 sobre `e3e20ab879518c899806a70575eead28b3b35e6f`.

## Alcance y estado

Se preparan 20 preguntas IA, posiciones 41–60 de la cola inmutable `review_order`, todas incluidas entre las 128 incidencias IA originales. No repiten las del piloto ni las del lote 002. La [ficha antes/después](GSI_REVISION_LOTE_003.md) y la [propuesta JSON](../content/question-reviews/lote-003.json) reúnen la revisión individual, los motivos, las fuentes, los localizadores y los hashes.

Hash canónico: `d8fc3bac73b45bf032b9a1e8ff100150a85693098124876f8731ef578d216991`.

**Las 20 propuestas están pendientes: 0 aceptadas, 0 aplicadas y 0 retiradas en este lote.** La rúbrica es la evaluación del preparador, no una aceptación humana. Los valores de `after` describen el resultado propuesto; no activan versiones. Se mantienen IDs, claves, temas, dificultad orientativa y procedencia original. No se han creado recibos de aceptación de los lotes 002 o 003.

El piloto permanece aceptado y aplicado. El lote 002 mantiene íntegro su hash `b50edfbce2d3510a105aebb4304f1ef485e329686605d0e88c3e8201aedfcf1d` y sigue pendiente. El progreso conjunto es **20 revisadas, 40 propuestas pendientes y 1.742 decisiones pendientes en total**; 1.702 preguntas todavía no tienen propuesta de esta nueva revisión.

## Decisiones editoriales

Se conservan los enunciados que ya expresaban bien el concepto: incidente y brecha, selección de lenguaje, orden de ETL, definición de KPI y el microcaso de cliente/servidor. Las mejoras se concentran en distractores próximos y explicaciones individuales, sin cambiar claves para repartir letras.

La clasificación de preparación contiene 15 conceptuales y 5 aplicaciones: tabla de hechos, carga OLTP, roles cliente/servidor, selección de ruta y prueba de recuperación. La pregunta de copia auténtica utiliza una condición de cambio de formato para delimitar el concepto. Esta clasificación descriptiva no impone cuotas; la orientación aproximada 70/30 sigue siendo global y el banco completo aún no está clasificado. Todos los casos son hipotéticos.

Se precisan las siguientes excepciones y límites:

- Incidente, brecha y notificación son decisiones distintas; no hace falta exfiltración ni daño materializado para que exista una brecha.
- La firma de un documento se exige cuando corresponda según la norma aplicable; el art.26.3 contempla documentos sin firma, con origen identificado.
- Una copia auténtica puede cambiar de formato. La semejanza visual, la igualdad de bytes o la imagen de una firma no sustituyen competencia y garantías del proceso.
- La caracterización clásica de Inmon no se convierte en prohibición universal de corregir datos. Una tabla de hechos puede carecer de medidas numéricas.
- Las capas son responsabilidades lógicas; no se identifican automáticamente con máquinas. Cliente y servidor dependen de cada interacción.
- El caso de ruta compara prefijos utilizables en la tabla de reenvío y excluye reglas por políticas; no pretende resolver empates entre rutas al mismo prefijo.
- Una restauración probada acredita las condiciones ensayadas, no todos los escenarios posibles. La auditoría ENS se pregunta para categoría MEDIA; BÁSICA tiene un régimen de autoevaluación documentada.

## Fuentes contrastadas

Cada registro conserva título, URL, localizador, versión o edición y comprobación del 26-10-2026. Se han abierto las fuentes primarias finalmente utilizadas:

- RGPD, arts.4.12, 33 y 34; Ley 39/2015, arts.26 y 27; ENS, anexo I, arts.10, 14, 28 y 31 y anexo III, según la pregunta.
- SWI-Prolog Reference Manual, §2.1; Microsoft Azure, selección de lenguaje y separación de capas; Oracle, Data Warehouse y OLTP; IBM, orden ETL/ELT; Microsoft, esquema en estrella y hechos sin medidas.
- NIST SP 800-55v1, diciembre de 2024, §3.1.1, para documentar medidas: objetivos, fórmula, fuente, tiempos y responsables. Se usa como guía de medición, no como plantilla universal obligatoria para todos los KPI.
- RFC 9110, §3.3, para roles; RFC 1812, §5.2.4.3, para coincidencia del prefijo más largo.
- INTOSAI ISSAI 100, §§26–27 y 50–53, y CMS POA&M Handbook, para criterios, evidencia y gestión de acciones. Son fuentes conceptuales y de buenas prácticas; no se presentan como obligaciones jurídicas españolas.
- La página web de CISA explorada devolvió 403. Se comprobó la [guía conjunta completa publicada por FBI IC3](https://www.ic3.gov/CSA/2023/231019.pdf), versión 3.0 de octubre de 2023, p.5, que respalda probar disponibilidad e integridad de las copias en recuperación.

La ruta explorada `NIST.SP.800-34r1.pdf` devolvió 404 y no se incorporó a las propuestas. No se atribuyó a la NTI de Expediente el contenido de la NTI de Documento: la propuesta se respalda directamente en la Ley 39/2015. Estas comprobaciones y decisiones asistidas no sustituyen la revisión del propietario ni una calibración estadística.

## Métricas antes y después propuesto

Medidas del analizador 2.0.0 sobre las 20 preguntas del lote. La propuesta se evalúa en memoria; el banco activo no cambia.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 12 | 4 |
| Acierto al elegir primera alternativa de longitud máxima | 13/20 (65 %) | 5/20 (25 %) |
| Ratio 1,5–<2 entre correcta y distractor máximo | 2 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 16 | 0 |
| Feedback idéntico para acierto y error | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Distractores con agrupación de formulaciones absolutas | 20 | 0 |
| Preguntas con explicación individual de los tres distractores | 0 | 20 |

El 25 % de esta muestra no es calibración ni prueba de ausencia de toda pista. Se registran señales automáticas y se revisa su sentido; no se rellenan alternativas para igualar longitudes ni se cambian claves para alcanzar un porcentaje.

## Validación y cómo revisar

Se verifican la propuesta y sus 20 instantáneas frente al banco actual, contratos, referencias, cuatro opciones distintas, clave conservada, 60 explicaciones individuales y ficha reproducible. La simulación materializa exactamente 20 cambios IA en memoria y cero cambios manuales u oficiales. Las aceptaciones del piloto permanecen vinculadas al texto aprobado; la falta de aceptación del nuevo lote impide aplicarlo.

Resultados: 17 pruebas del circuito editorial, 25 archivos JSON y 21 esquemas, 1.964 preguntas con estructura válida y 19.251 controles de integridad correctos. Se validan también documentación, referencias internas y espacios del diff. El [registro de preparación](../logs/gsi-editorial-003-preparation.json) conserva hashes protegidos y resultados. No hay cambios de código ni de datos activos, por lo que no se repite la suite HTTP completa del piloto ni se presenta como prueba de estas versiones pendientes.

```powershell
.\.venv\Scripts\python.exe -B scripts/editorial_batches.py --batch content/question-reviews/lote-003.json --render docs/GSI_REVISION_LOTE_003.md
.\.venv\Scripts\python.exe -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -B scripts/validate_json.py
.\.venv\Scripts\python.exe -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -B scripts/validate_references.py
git diff --check
```

Para revisar, leer la ficha de cada ID, contrastar sus fuentes y comunicar aceptación o correcciones. La simulación es de solo lectura respecto a los bancos. El producto servido por HTTP continúa usando las versiones del piloto aplicado.

## Archivos y siguiente paso

Creados: `content/question-reviews/lote-003.json`, `docs/GSI_REVISION_LOTE_003.md`, este informe y `logs/gsi-editorial-003-preparation.json`.

Actualizados: `docs/GSI_MEJORA_TESTS.md` y el derivado `logs/gsi-editorial-progress.json`. Los archivos del lote 002 no se reescriben. Los tres bancos, los borradores IA y los documentos originales permanecen intactos.

No hay conversiones documentales nuevas ni pendientes de este hito. El lote no se aplica, activa, publica ni fusiona. El siguiente paso es la revisión humana de los lotes pendientes, identificando el hash concreto; cualquier modificación posterior invalida esa huella y requerirá una aprobación del contenido corregido.
