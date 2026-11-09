# Preparación de GSI-EDITORIAL-004

Fecha: 26 de octubre de 2026. Base de trabajo: `e3e20ab879518c899806a70575eead28b3b35e6f`.

## Alcance y estado

Se preparan 20 preguntas IA, posiciones 61–80 de `review_order`, todas entre las 128 incidencias IA originales. No repiten IDs del piloto ni de los lotes 002 y 003. La [ficha antes/después](GSI_REVISION_LOTE_004.md) y la [propuesta JSON](../content/question-reviews/lote-004.json) contienen las instantáneas exactas, los motivos, las explicaciones y los hashes individuales.

Hash canónico: `2ae24b1ba96244feefd3de39ea500c7a7222563468b009e9b9dfea2936556b2b`.

**Estado de este lote: 20 propuestas pendientes, 0 aceptadas, 0 aplicadas y 0 retiradas.** La rúbrica es la evaluación del preparador; no acredita una revisión humana independiente. `after` describe una versión propuesta y no cambia el estado activo de la pregunta. Las aceptaciones históricas del banco y la aprobación del piloto se conservan sin atribuirlas a este contenido nuevo.

Se mantienen los IDs, las claves, el concepto, los temas, la dificultad orientativa y la procedencia. Los bancos siguen conteniendo 959 manuales, 803 IA y 202 oficiales; ninguna pregunta activa cambia en este hito.

## Criterio editorial aplicado

Se conservan los enunciados ya claros sobre IVR, EDT/WBS, revisión estática y formación. La respuesta correcta de la EDT se conserva literalmente, y el conjunto original de métricas Kanban también. Las mejoras distinguen conceptos próximos: seguridad física frente a controles lógicos, DTMF frente a ASR o síntesis, custodia frente a hash, alcance frente a cronograma, flujo frente a esfuerzo y calidad, y CMDB frente a inventario económico o repositorio.

Hay 14 preguntas conceptuales y 6 aplicaciones breves: capacidad de atención por franjas, prioridad de vulnerabilidades, requisito temporal de migración, reconciliación de códigos, revisión de una especificación y diagnóstico de componentes. Dos desarrollan microcasos que ya estaban bien planteados. La clasificación describe estas decisiones y no impone una cuota; la orientación 70/30 se mantiene para el banco completo, aún sin clasificación global terminada.

En la revisión de las listas de EDT, Kanban y XP se eliminaron explicaciones innecesarias dentro de distractores. Así se mantienen términos paralelos sin convertir la longitud de una lista en una pista ni rellenar la correcta para compensarla.

Excepciones y límites destacados:

- Se pregunta por **CVSS base**, que expresa severidad técnica intrínseca. El contexto y las métricas de amenaza y entorno son relevantes para priorizar; no se presenta toda puntuación CVSS como si ignorara necesariamente esos factores.
- La cadena de custodia registra trayectoria y control. Un hash aporta integridad, pero no acredita por sí solo responsables, transferencias o admisibilidad jurídica.
- El conjunto de métricas Kanban es útil, pero no se identifica con las cuatro mínimas de The Kanban Guide de mayo de 2025, que incluye edad del elemento. Los puntos de inicio y fin deben declararse.
- XP aporta prácticas técnicas que pueden convivir con Scrum o Kanban; no se afirma exclusividad.
- El requisito de migración se delimita como temporal y necesario para realizar el cambio, evitando confundirlo con una integración permanente.
- El coste lineal de acceso posicional en lista se refiere al peor caso y a una estructura sin índice auxiliar. Una lista doble puede recorrer desde el extremo cercano sin cambiar ese orden de coste.
- Una revisión estática no ejecuta el sistema ni garantiza ausencia de defectos. Un diagnóstico de memoria o almacenamiento tampoco descarta todos los fallos intermitentes.

## Fuentes y limitaciones de consulta

Cada propuesta incluye fuente primaria, URL, localizador, versión cuando se ha podido comprobar y fecha real de consulta. Los respaldos abarcan ENS, Twilio, AWS, FIRST, NIST IR 8387, PMI, NASA, Kanban University, The Kanban Guide, Agile Alliance, IIBA, IBM, Oracle Java SE, CDC, ISTQB y HP.

Las siguientes limitaciones se registran sin afirmar una lectura que no se realizó:

- **Caso de uso, `AI-GSI-B3-T03-009`:** el contenido primario indexado de IBM DOORS Next 7.1.0 expone la tabla 1 y sus apartados de flujos, precondiciones y postcondiciones. La apertura directa devolvió 403. La propuesta y su localizador se contrastaron con ese contenido, no con una lectura directa íntegra.
- **Priorización, `AI-GSI-B3-T03-011`:** el PDF primario IIBA *Analyze To Determine What Is Valuable — Insight* supera el límite de lectura web de la herramienta, con 22.093.559 bytes. Se contrastó el apartado indexado *Backlog Management*, p.5, que identifica cumplimiento y prerrequisitos. El artículo primario abierto *MoSCoW or Bust!* aporta la diferencia entre prioridad y secuencia. No se inventa un número de versión del PDF.
- **Hardware:** HP Support devolvió 403. Se utiliza el manual primario abierto de HP, quinta edición de marzo de 2014, pp.143–144. Es un ejemplo histórico del diagnóstico de componentes, no una recomendación de herramienta actual ni instrucciones de intervención sobre el equipo del usuario.
- **Configuración:** NIST SP 800-128 dio timeout en esta consulta. Se eligió la página actual y abierta NASA SWE-081. La versión antigua de SWE-187 explorada no se cita como vigente.
- La descarga antigua de IREB encontrada redirigía a un recurso no accesible y no se utiliza como respaldo. Tampoco se depende del sitio XP que dio timeout: se usa la guía primaria de Agile Alliance abierta.

La revisión humana deberá incluir los localizadores y la vigencia de las fuentes. Las dos consultas parciales quedan identificadas en el [registro de preparación](../logs/gsi-editorial-004-preparation.json). Las guías de fabricantes y organismos extranjeros apoyan conceptos; no se convierten en obligaciones jurídicas españolas.

## Métricas del lote

Análisis 2.0.0 sobre estas 20 preguntas. La propuesta se analiza en memoria, sin actualizar el banco activo.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 14 | 3 |
| Acierto al escoger la primera alternativa de longitud máxima | 14/20 (70 %) | 3/20 (15 %) |
| Ratio 1,5–<2 entre correcta y distractor máximo | 5 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 19 | 0 |
| Feedback idéntico para acierto y error | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de formulaciones absolutas en distractores | 20 | 0 |
| Preguntas con explicación individual de los tres distractores | 0 | 20 |

Estas señales no acreditan calidad pedagógica ni dificultad calibrada. El 15 % no es un objetivo conseguido por redistribuir claves ni una prueba estadística; se mantienen las claves originales y la correcta puede tener cualquier posición relativa de longitud. El barajado usa IDs estables y letras visibles por sesión.

## Validaciones y reproducción

La simulación valida las 20 instantáneas contra el banco actual y produce exactamente 20 cambios IA en memoria, cero manuales y cero oficiales. Se comprueban esquemas, hashes, cuatro opciones distintas, claves, 60 explicaciones y ficha reproducible. Se verifica que no existe aceptación de los lotes 002–004 y que la falta de aprobación impide aplicar el lote nuevo.

Resultados: **17 pruebas editoriales, 26 archivos JSON y 21 esquemas, 1.964 preguntas estructuralmente válidas y 19.251 controles de integridad correctos**. También se validan documentación, referencias internas y espacios del diff. El registro recoge los hashes protegidos de los bancos, el piloto y los artefactos de los lotes 002 y 003.

No hay cambios de código ni datos activos; no se repite la suite HTTP completa del piloto ni se la presenta como ejecución sobre versiones aún no aceptadas. Las rutas y comportamientos activos siguen siendo los del producto validado al aplicar el lote 001.

```powershell
.\.venv\Scripts\python.exe -B scripts/editorial_batches.py --batch content/question-reviews/lote-004.json --render docs/GSI_REVISION_LOTE_004.md
.\.venv\Scripts\python.exe -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -B scripts/validate_json.py
.\.venv\Scripts\python.exe -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -B scripts/validate_references.py
git diff --check
```

Para revisar, abrir la ficha y contrastar cada alternativa con la fuente correspondiente. La simulación no escribe en los bancos. El producto servido por HTTP continúa utilizando las versiones activas del piloto; las propuestas pendientes no se incorporan a Entrenamiento ni Simulacros.

## Archivos, progreso y siguiente paso

Creados: `content/question-reviews/lote-004.json`, `docs/GSI_REVISION_LOTE_004.md`, este informe y `logs/gsi-editorial-004-preparation.json`.

Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los artefactos de los lotes 002 y 003 se conservan sin cambios.

El progreso conjunto es **20 decisiones aceptadas y 60 propuestas pendientes**, con 1.742 preguntas pendientes de aceptación en total; 1.682 todavía no tienen propuesta de esta revisión. No hay conversiones nuevas ni conversiones pendientes de este hito; los documentos originales y los borradores IA permanecen intactos.

Ninguna propuesta nueva se aplica, activa, publica ni fusiona. El siguiente paso es la revisión del propietario, indicando el lote y su hash exacto. Cualquier corrección posterior deberá regenerar hashes antes de obtener aceptación.
