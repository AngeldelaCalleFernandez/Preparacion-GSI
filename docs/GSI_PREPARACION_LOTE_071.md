# Preparación de GSI-EDITORIAL-071

Fecha: 3 de noviembre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `fe135f2bc1945ece12640cb37ec3ef558fe98151f19602d2614a0adf67639993`.

## Alcance y criterio

Posiciones 1401–1420 de la cola: once IA B4-T01 (007–009, 011, 013, 015–020) y nueve IA B4-T02 (001, 004–007, 009–010, 012–013). Se conservan IDs, conceptos, claves, dificultad orientativa, estados y procedencia. Catorce son conceptuales y seis aplicaciones: T01-011/013/016/020 y T02-004/009. Se describe su forma, sin imponer cuotas artificiales.

Se conservan completos enunciado y alternativas de T01-017 (sincronización de logs) y T02-001 (instancia y datos). Las demás reciben precisiones o distractores más cercanos al concepto. Todas incluyen explicación de la correcta y tres justificaciones individuales asociadas a los IDs originales y al contenido, para admitir barajado.

[Ficha antes/después](GSI_REVISION_LOTE_071.md) · [Propuesta JSON](../content/question-reviews/lote-071.json) · [Registro](../logs/gsi-editorial-071-preparation.json).

La rúbrica expresa juicio del preparador y respaldo documental, pendiente de tu revisión. No acredita aceptación humana independiente, dificultad calibrada o cierre editorial. Las veinte aceptaciones IA históricas se conservan vinculadas a sus versiones originales, sin extenderlas a las propuestas.

## Revisión individual

| ID | Clave conservada | Forma | Enunciado y alternativas íntegros | Decisión |
| --- | :---: | --- | :---: | --- |
| AI-GSI-B4-T01-007 | D | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T01-008 | C | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T01-009 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T01-011 | C | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T01-013 | D | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T01-015 | D | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T01-016 | A | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T01-017 | A | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T01-018 | B | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T01-019 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T01-020 | C | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T02-001 | A | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T02-004 | D | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T02-005 | B | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T02-006 | C | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T02-007 | C | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T02-009 | A | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T02-010 | C | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T02-012 | B | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T02-013 | D | Conceptual | No | Pendiente del propietario |

La ficha documenta antes/después, motivos, cambios, fuentes con URL/localizador/versión/fecha y hashes por versión. No se identifican nuevas claves incorrectas confirmadas ni cambios de significado que requieran reemplazo o retirada.

## Fuentes y vigencia

**25 URLs primarias con comprobación real del 03-11-2026**: 24 abiertas en esta revisión y la referencia GSA/PAM reutilizada del 070 con su misma fecha real. Se preservan también las fuentes y fechas históricas de procedencia.

- Fuentes primarias con comprobación real 03-11-2026. Se reutiliza del lote070 la referencia GSA/PAM con su misma fecha real; no se simula una nueva apertura. Las demás referencias de este lote se han abierto en esta revisión, incluidas las fuentes de Canadá que se precisan para cuentas de servicio.

- Linux man-pages respalda propietario/grupo/otros frente a operaciones rwx. Windows distingue DACL de SACL: autorización no equivale a auditoría o cifrado. Son modelos concretos, sin afirmar que agoten todo control del sistema.

- Las cuentas técnicas se restringen a función y permisos, con inventario, propietario y credenciales gestionadas cuando existan. Las fuentes de Canadá y GSA se usan como prácticas operativas, no obligaciones legales de la AGE.

- Servicio sano no equivale a proceso presente. SRE aporta observación de síntomas y pruebas de hipótesis; capacidad, errores de escritura, latencia y colas requieren contexto. No se fija umbral CPU universal ni se declara riesgo cero por cumplir hoy un SLO.

- SP800-40 Rev.4 se usa por su resumen público HTML, que incluye verificación de instalación; no se atribuye lectura del PDF completo. La estrategia Microsoft respalda grupos representativos y feedback, sin trasladar plazos o compatibilidad garantizada a cualquier sistema.

- OWASP recomienda sincronización y, donde no sea posible, estimar desfase o confianza. Se preservan marcas originales y se documentan conversiones; la proximidad temporal no demuestra causalidad.

- Idempotencia es una propiedad funcional buscada, no ejecutar los mismos cambios a ciegas ni ausencia de registros. La documentación DSC avisa sobre recursos sin set plenamente idempotente y sobre comprobación previa; no se instala DSC.

- Oracle19 sirve como ejemplo de instancia y datos con salvedad por motor. PostgreSQL18 se consulta en rutas de edición fija, sin convertir el anuncio de PostgreSQL19 RC1 en publicación final o cambiar la terminología de todos los SGBD.

- Los roles necesitan diseño y revisión efectiva; autenticación no es autorización y permisos de objeto no implican administración general. Cifrar una conexión no habilita todos los objetos ni fuerza por sí solo todo acceso a TLS.

- La memoria asignada al motor comparte capacidad física con SO y otras cargas; no se copia un porcentaje universal o una configuración real. Se distingue límite del motor de RAM instalada.

- El supuesto de deadlock explicita transacción abortada. Reintento completo y con política apropiada no garantiza éxito y no revierte efectos externos; no todo error debe reintentarse. AWS aporta la semántica de reintentos/idempotencia, no una obligación de usar su plataforma.

- Plan estimado y ejecución instrumentada son distintos; EXPLAIN ANALYZE puede ejecutar cambios. Solo se lee documentación. Índices pueden ayudar pero añaden espacio y mantenimiento, sin afirmar que todo UPDATE cambie físicamente todos los índices.

## Límites de acceso y de verificación

- La primera página Ansible consultada devolvió429. El concepto de idempotencia se corroboró en documentación primaria DSC y el artículo de autor AWS; no se atribuye lectura de la página bloqueada.

- La página DSC2.0 de introducción no explicitaba el término buscado; no se usa como evidencia específica de idempotencia. Se utiliza el documento de operación set de DSC3.0 con su alcance declarado.

- Learn y CSRC muestran avisos de autorización o de marco junto al texto público. Se utiliza el contenido público sin iniciar sesión o eludir controles. La portada PostgreSQL Database Roles era un índice: se abrió además el apartado21.1 y los atributos21.2.

- Sin consultas, comandos de permisos, simulaciones de deadlock, despliegue de parches, pruebas de carga o acceso a sistemas reales. Chrome comprueba la ficha, no semántica de todos los motores o salud del producto. No se leen secretos ni se instalan dependencias.

La ficha NIST se consulta en HTML y las demás fuentes son texto web; no se descarga ni convierte ningún documento original o PDF en este lote. Los documentos y ejemplos externos son evidencia, no autorizaciones para ejecutar sus comandos o modificar un sistema.

## Métricas

| Señal en estas 20 preguntas | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 12 | 3 |
| Acierto primera máxima (%) | 60.0 | 15.0 |
| Ratio 1,5–menos de 2 | 4 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 20 | 0 |
| Feedback correcto/incorrecto idéntico | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

La primera mínima es correcta en 7/20 (35 %); hay tres empates máximos. Las tres correctas únicas más largas y los empates se examinan por concepto y forma, sin rellenar opciones o modificar claves para perseguir un indicador. Las señales no acreditan calidad pedagógica ni dificultad calibrada.

## Validación

Resultados: **19 pruebas editoriales, 93 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Documentación, referencias y progreso sincronizados; ocho invocaciones con código 0. Simulación limitada a **20 IA**, con claves, IDs, procedencia y estados conservados y **60 explicaciones individuales de distractores**. Veinte hashes históricos de procedencia IA preservados sin aceptar textos nuevos. Tres aceptaciones improcedentes rechazadas y dos barreras de regeneración comprobadas. **299 archivos protegidos intactos** y **154 enlaces locales existentes**.

**Diez controles Chrome correctos sobre la ficha final**, con captura del caso de deadlock inspeccionada y sin desbordamiento a 1280/390 px. Se verifican la referencia reutilizada y sus fechas reales. No se ejecutan consultas, permisos, servicios, parches, deadlocks o pruebas de carga ni se repite la suite HTTP del producto sin cambios. Los derivados mantienen contenido y fecha 03-11 del inicio; respecto de HEAD solo cambia la fecha 26-10→03-11. Bancos activos iguales a HEAD y oficiales iguales en bytes a la auditoría. Las tres incidencias anteriores y aceptaciones pendientes mantienen abierto el cierre editorial.

Comandos desde la raíz, con las dependencias Chrome/Playwright/marked ya disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_071_browser.mjs
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B tmp/validate_editorial_071.py
```

Chrome ha comprobado la ficha literal a 1280/390 px, sin ejecutar cambios de permisos, consultas, deadlocks, parches o pruebas de carga. Aplicación y bancos permanecen sin cambios; no se repite la [suite HTTP completa previa del 001 aplicado](../logs/gsi-editorial-001-revalidation-2026-10-30.json) para estas propuestas inactivas. Las comprobaciones técnicas no aceptan los textos ni validan estadísticamente su dificultad.

## Incidencias y cierre

Se conservan las tres incidencias activas anteriores: lotes 032 (XML), 054 (dependencias en normalización) y 055 (cota O(n)). Sus correcciones están propuestas, pendientes de aprobación y aplicación; se mantiene evidencia e impedimento de cierre. Ninguna se declara corregida en el banco activo.

Tras preparar 071: **20 aceptadas, 1.400 propuestas pendientes, 342 sin propuesta y 1.742 decisiones pendientes del propietario**. Se cubren 1.420/1.762 IDs sin duplicar. Las 128 incidencias IA originales mantienen propuesta: 15 aplicadas y 113 pendientes; no equivale a resolución editorial. La cola pendiente preparada comprende 113 IA originales, 492 IA restantes y 795 manuales.

## Entrega y revisión manual

Creados: JSON propuesto, ficha, este informe y registro. Modificados: plan y progreso. El validador regenera tres informes derivados; se ha comprobado que mantienen resultados y fecha del inicio. Auxiliares y captura quedan en tmp. No hay conversiones documentales nuevas o pendientes, OCR o dependencias nuevas.

Abre la ficha y compara proceso/servicio (T01-011), almacenamiento (013), anillos (016), CPU/SLO (020), asignación de memoria (T02-004) y tratamiento de deadlock (009), junto con cada distractor. La aprobación debe identificar el hash exacto del lote; las aceptaciones históricas o del 001 no lo autorizan.

Ninguna propuesta se acepta, aplica, activa, retira, publica o fusiona y no se crea commit. Las 202 oficiales, los bancos activos y los documentos originales se preservan. Siguiente paso: revisión expresa y preparación de las 342 preguntas restantes con el estándar acordado.
