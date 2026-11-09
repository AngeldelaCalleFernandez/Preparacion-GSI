# Preparación de GSI-EDITORIAL-070

Fecha: 3 de noviembre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `491e816a8c49c0e0e7a961769a76990e21214a46973737ecac2bbe462733e112`.

## Alcance y criterio

Posiciones 1381–1400 de la cola: quince IA B3-T15 (005–011 y 013–020) y cinco IA B4-T01 (002–006). Se conservan IDs, conceptos, claves, dificultad orientativa, estados y procedencia. Catorce son conceptuales y seis aplicaciones: T15-006/015/018/020 y B4-T01-005/006. La distribución describe estas preguntas, sin imponer cuotas.

Se conserva íntegro el enunciado y las alternativas de B4-T01-002, sobre software de base. En el resto se precisan contextos y distractores próximos al concepto. Las veinte incluyen explicación de la correcta y tres justificaciones individuales asociadas a los IDs originales y al contenido, para funcionar con barajado.

[Ficha antes/después](GSI_REVISION_LOTE_070.md) · [Propuesta JSON](../content/question-reviews/lote-070.json) · [Registro](../logs/gsi-editorial-070-preparation.json).

La rúbrica marcada es juicio del preparador apoyado en fuentes, pendiente de tu revisión. No acredita aceptación humana independiente, dificultad calibrada o cierre editorial. Se conservan las veinte aceptaciones IA históricas vinculadas a su contenido original, sin extenderlas a las propuestas.

## Revisión individual

| ID | Clave conservada | Forma | Enunciado y alternativas íntegros | Decisión |
| --- | :---: | --- | :---: | --- |
| AI-GSI-B3-T15-005 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T15-006 | C | Aplicación | No | Pendiente del propietario |
| AI-GSI-B3-T15-007 | B | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T15-008 | B | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T15-009 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T15-010 | B | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T15-011 | B | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T15-013 | D | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T15-014 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T15-015 | D | Aplicación | No | Pendiente del propietario |
| AI-GSI-B3-T15-016 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T15-017 | C | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T15-018 | D | Aplicación | No | Pendiente del propietario |
| AI-GSI-B3-T15-019 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T15-020 | B | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T01-002 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T01-003 | C | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T01-004 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T01-005 | C | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T01-006 | C | Aplicación | No | Pendiente del propietario |

La ficha conserva los textos originales, motivos y cambios, fuentes con localizador/versión/fecha y hashes por versión. No se detectan nuevas claves incorrectas confirmadas o cambios de significado que requieran reemplazo o retirada. Los distractores ajenos de CAP son un defecto editorial que se propone corregir conservando clave y concepto.

## Fuentes y vigencia

**23 URLs primarias comprobadas el 03-11-2026**, conservando además las fuentes y fechas históricas de procedencia.

- Fuentes primarias con fechas reales de comprobación. Se mantienen documentos y procedencia originales, sin atribuir a su texto histórico validez de todas las afirmaciones o ejecutar sus instrucciones.

- Hadoop se fija a 3.4.2. HDFS, YARN y MapReduce cumplen funciones distintas; localidad es una preferencia condicionada y no elimina shuffle o red. NameNode gestiona metadatos y DataNodes bloques; se admiten HA y federación.

- Spark latest sirvió documentación 4.3.0; se registra lo observado sin inferir estado de lanzamiento. Persistencia en disco o mixta y otros orígenes impiden describirlo como RAM obligatoria o almacén HDFS único.

- CAP se contrasta con Perspectives de Gilbert/Lynch, 2012, no se atribuye al original de 2002. Se inspeccionan pp.2–3 del manuscrito de diez páginas y se registra hash de la copia pública. Consistencia atómica, respuesta eventual y partición de comunicación, distinta de sharding; la asincronía añade indistinguibilidad de demora y aislamiento.

- La pregunta CAP original conserva la clave B válida pero sus distractores sobre warehouse/lake son ajenos al concepto. Se propone corregirlos sin cambio de significado o clave; no se trata como una nueva clave incorrecta confirmada.

- Las familias NoSQL se contrastan por sus abstracciones centrales, no exclusividad para representar datos. Warehouse/lake difieren por organización y finalidad y ambos necesitan gobierno.

- MAE y RMSE son errores de regresión, no porcentajes universales o MSE sin raíz. Apriori/FP-Growth obtienen conjuntos frecuentes y permiten reglas posteriores, sin demostrar causalidad.

- El preprocesamiento aprendido también puede filtrar información de prueba sin usar etiquetas; separación y pipeline deben respetar las particiones. No se ejecutan modelos o se certifica ausencia de leakage por un único ejemplo.

- Claves de shards y patrones de consulta determinan concentración de carga; hash o más nodos no resuelven todo. Replicación puede requerir coordinación o presentar lag según esquema y no sustituye backup histórico independiente.

- Batch y streaming distinguen entrada acotada/flujo incremental; microbatch no implica esperar fin global ni latencia nula o exactly-once incondicional. No se despliega un broker o clúster.

- Runtime/bibliotecas son ejemplo de soporte ejecutable; baseline es referencia revisable bajo control de cambios, no riesgo cero. Bootup contempla carga directa del kernel: el supuesto fija cargador e initramfs y no impone una cadena universal.

- Twelve-Factor se usa para separar configuración variable y declarar dependencias, sin imponer un almacén universal de secretos. GSA y Canadá respaldan prácticas de cuentas y auditoría, no políticas obligatorias AGE ni un veto a emergencia controlada.

## Límites de acceso y de verificación

- La página específica YARN de Hadoop3.4.2 devolvió UnexpectedStatusCode. Sus roles y la ejecución se corroboraron con el tutorial MapReduce3.4.2 y HDFS; no se atribuye lectura completa a esa página bloqueada.

- Se consultó un espejo CSF Tools de AC-6 durante la búsqueda, pero no se usa como respaldo: las referencias finales de cuentas son textos primarios GSA y Gobierno de Canadá.

- La portada de Structured Streaming solo enlaza apartados; se consultó el capítulo API using Datasets and DataFrames para el contenido. La documentación Redis incluye ejemplos/metadatos extensos, usados solo para la operación de clave-valor pertinente.

- Learn muestra un aviso de autorización junto al cuerpo público; se utiliza ese texto sin login o evasión. Sin lectura de secretos, instalación de dependencias, comandos de administración sobre sistemas reales o ejecución de modelos.

El PDF público de CAP se conserva como copia auxiliar de investigación con su URL, SHA-256 y diez páginas en el registro. Se extraen las páginas pertinentes y se inspeccionan sus renderizados completos (2 y 3); no se atribuye lectura íntegra a otras ediciones. Es lectura de una fuente pública, no conversión de documentos originales del proyecto. No se usa OCR, se instala software o se ejecutan instrucciones de la fuente.

## Métricas

| Señal en estas 20 preguntas | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 7 | 3 |
| Acierto primera máxima (%) | 35.0 | 20.0 |
| Ratio 1,5–menos de 2 | 3 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 20 | 0 |
| Feedback correcto/incorrecto idéntico | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

La primera mínima es correcta en 6/20 (30 %); hay cuatro empates máximos. Las tres correctas únicas más largas y los empates se revisan por concepto, forma y alcance. Son señales descriptivas, sin rellenar alternativas, cambiar claves o imponer patrones de letras. No acreditan calidad pedagógica ni calibración.

## Validación

Resultados: **19 pruebas editoriales, 92 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Documentación, referencias y progreso sincronizados; ocho invocaciones de validación con código 0. Simulación limitada a **20 IA**, con claves, IDs, procedencia y estados conservados y **60 explicaciones individuales de distractores**. Veinte hashes de procedencia IA histórica preservados sin aceptar textos nuevos. Tres aceptaciones improcedentes rechazadas y dos barreras de regeneración comprobadas. **295 archivos protegidos intactos** y **152 enlaces locales existentes**.

**Diez controles Chrome correctos sobre la ficha final**, con captura del caso de fuga por escalado inspeccionada y sin desbordamiento a 1280/390 px. Copia PDF CAP y dos renderizados comprobados. No se ejecutan modelos, clústeres, arranques o fallos de red ni se repite la suite HTTP del producto sin cambios. Los derivados mantienen contenido y fecha 03-11 del inicio; respecto de HEAD solo cambia la fecha 26-10→03-11. Bancos activos iguales a HEAD y oficiales iguales en bytes a la auditoría. Las tres incidencias anteriores y aceptaciones pendientes mantienen abierto el cierre editorial.

El primer intento de regenerar progreso falló con OSError [Errno 22] al escribir el informe. Se comprobó que el JSON anterior seguía íntegro y el reintento ordinario terminó con código 0, actualizando las 1.380 propuestas. La incidencia queda registrada; el contenido y hash del lote no cambiaron.

Comandos desde la raíz; Chrome utiliza Playwright/marked ya disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_070_browser.mjs
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B tmp/validate_editorial_070.py
```

Chrome ha comprobado la ficha literal a 1280/390 px, no el rendimiento o funcionamiento de un sistema Hadoop/Spark, un algoritmo de minería, un clúster replicado o un arranque Linux. No se modifica la aplicación y no se repite la [suite HTTP completa anterior del 001 aplicado](../logs/gsi-editorial-001-revalidation-2026-10-30.json) para estas propuestas inactivas. La validación técnica no se presenta como aceptación editorial o estadística.

## Incidencias y cierre

Permanecen las tres incidencias activas de lotes 032 (XML), 054 (dependencias en normalización) y 055 (cota O(n)), con correcciones propuestas pendientes de aprobación/aplicación. Se conserva evidencia y el impedimento de cierre. Ninguna se da por corregida en el banco activo.

Tras preparar 070: **20 aceptadas, 1.380 propuestas pendientes, 362 sin propuesta y 1.742 decisiones pendientes del propietario**. Se cubren 1.400/1.762 IDs sin duplicar. Las 128 incidencias IA originales conservan propuesta: 15 aplicadas y 113 pendientes; no equivale a resolución editorial. La cola pendiente preparada comprende 113 IA originales, 472 IA restantes y 795 manuales.

## Entrega y revisión manual

Creados: JSON propuesto, ficha, este informe y registro. Modificados: plan y progreso. El validador regenera tres informes derivados; se ha comprobado que mantienen contenido y fecha del inicio. Auxiliares, copia pública PDF, renderizados y captura quedan en tmp. No se convierten documentos originales ni hay conversiones nuevas pendientes; no se añaden dependencias.

Abre la ficha y compara CAP (010), fuga por escalado (015), hot spots (018), batch/streaming (020) y los casos de configuración y cuentas de B4-T01-005/006. La aprobación debe identificar el hash exacto; las aceptaciones históricas o del 001 no autorizan este lote.

Ninguna propuesta se acepta, aplica, activa, retira, publica o fusiona y no se crea commit. Las 202 oficiales, los bancos activos y los documentos originales se preservan. Siguiente paso: revisión expresa y preparación de las 362 preguntas restantes con el estándar acordado.
