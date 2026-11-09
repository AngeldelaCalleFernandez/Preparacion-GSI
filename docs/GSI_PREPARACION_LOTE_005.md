# Preparación de GSI-EDITORIAL-005

Fecha: 26 de octubre de 2026. Base de trabajo: `e3e20ab879518c899806a70575eead28b3b35e6f`.

## Alcance y estado

Se preparan las posiciones 81–100 de `review_order`: 20 preguntas IA entre las 128 incidencias originales, sin repetir IDs de los lotes anteriores. La [ficha antes/después](GSI_REVISION_LOTE_005.md) y la [propuesta JSON](../content/question-reviews/lote-005.json) contienen las instantáneas, razones, fuentes, claves y hashes individuales.

Hash canónico: `5586497edf4f0c0f267c04fbdf70b80ffff8941d66690f1568d41e2f5fedc18c`.

**20 propuestas pendientes; 0 aceptadas, 0 aplicadas y 0 retiradas.** La rúbrica expresa la evaluación del asistente preparador; no acredita revisión humana independiente ni calibración. El estado descrito en `after` es el destino propuesto, sin modificar el banco activo. Las aceptaciones históricas y la aprobación del piloto no autorizan este contenido nuevo.

Se conservan IDs, claves, conceptos, temas, dificultad orientativa y procedencia original. Los bancos continúan con 959 manuales, 803 IA y 202 oficiales. Los lotes 002–004 y sus hashes permanecen intactos.

## Criterio editorial

Hay 14 preguntas conceptuales y 6 aplicaciones: aceptación de JWT por una API, cita ligada a hora local, agotamiento de inodos, PITR antes de un borrado, aceptación de una restauración y capacidad ante picos de campaña. La cita ya era un microcaso en origen. La clasificación describe decisiones editoriales, sin imponer cuotas al lote ni presentar como terminada la clasificación global 70/30.

Se conservan los enunciados directos adecuados y se sustituyen distractores ajenos al tema por errores cercanos al concepto. Cada correcta tiene su explicación y cada uno de los 60 distractores una justificación vinculada a su ID original. Las explicaciones mencionan el contenido de la alternativa, sin depender de letras visibles ni de la posición de presentación.

Al revisar la primera redacción se detectó una tendencia a dar a los distractores más aclaraciones que a la correcta. Se recortaron expresiones redundantes en SOLID, zonas horarias, UX, información operativa, DBA, PITR y autorización de cambios. No se alargaron las correctas para compensar ni se cambiaron las claves para modificar las métricas.

Precisiones individuales destacadas:

- SOLID guía decisiones de responsabilidades, cambios y dependencias; no exige una interfaz por clase ni garantiza corrección funcional.
- Las fases de UP tienen focos distintos, con iteraciones y disciplinas que pueden atravesar varias fases. Se evita convertirlo en una cascada rígida.
- El perfil del supuesto JWT exige emisor, audiencia y caducidad. No se afirma que todos los claims registrados sean obligatorios en cualquier JWT. Firma, algoritmo admitido y validación semántica son comprobaciones complementarias.
- La cita conserva una intención de hora civil en una zona. Si cambian reglas pueden necesitarse nuevos cálculos del instante; un offset fijo o la zona del navegador no representan esa intención.
- SQuaRE se distingue de gestión de servicios, seguridad organizativa y dirección de proyectos. Usabilidad conserva usuarios, objetivos y contexto especificados, sin reducir UX a estética ni usabilidad a rapidez.
- systemd ilustra cuentas, dependencias, arranque y observabilidad; no se impone su formato a cualquier plataforma. Un código cero o un proceso vivo no prueban por sí solos el resultado funcional.
- El caso de inodos se delimita a ext4 y orienta una comprobación, sin excluir cuotas, permisos u otras causas de fallo. No se universaliza el modelo de inodos.
- Los registros transaccionales/WAL se distinguen de logs de diagnóstico. Vigilar espacio no autoriza borrar archivos internos del SGBD.
- PITR por archivado continuo requiere copia base válida y secuencia de WAL necesaria, sin huecos. Ni `pg_dump` ni una réplica que ya aplicó el borrado sustituyen esa preparación.
- Prioridad de incidentes combina impacto y urgencia según política acordada; no se impone una matriz universal. Los cambios urgentes siguen requiriendo gestión del riesgo, con el cauce apropiado.
- La estrategia de copias equilibra copia y restauración. Recuperar archivos íntegros no demuestra que funcionen servicio y dependencias. El margen de capacidad debe contrastarse con demanda y pruebas, sin porcentaje universal.

## Fuentes y límites de consulta

Cada registro incorpora URL primaria, localizador, versión o fecha identificable y fecha real de comprobación. Se consultan Robert C. Martin, IBM, IETF, W3C WAI, ISO, NIST, documentación de systemd, kernel Linux, GNU, PostgreSQL, Atlassian, AWS y Google SRE.

- La ruta antigua W3C `International/timezones/` devolvió 404. Se utiliza la nota abierta *Working with Time and Timezones*, de 26 de julio de 2025, §§3.3.2 y 4.2.2. Se identifica como **Group Draft Note**, sin presentarla como Recomendación W3C.
- Las aperturas de ISO OBP para 9241-11 y 9241-210 no expusieron el contenido sin JavaScript. El respaldo final es la vista primaria abierta ISO 9241-115:2024: §3.3.1 contexto, §3.4.3 usabilidad y §3.4.4 UX. No se afirma lectura íntegra de normas de pago.
- GNU `df` dio timeout en apertura directa. Se contrastó su contenido primario indexado, §14.1, `-i / --inodes`, y se abrió la documentación primaria de ext4 sobre las tablas de inodos. Esta consulta parcial queda identificada en el registro.
- NIST SP 800-128 dio timeout en la ruta `SpecialPublications`. La ruta primaria `Legacy` abrió el PDF con actualizaciones de 2019; se comprobaron §§3.3.2 y 3.3.3, pp.36–39.
- Las antiguas rutas PostgreSQL 18 para *Disk Full Failure* devolvieron 404. El apartado vigente se comprobó en `diskusage.html`, §27.6.2.
- RUP de 2007 y NIST SP 800-123 de 2008 se usan como respaldo de principios conceptuales, con antigüedad explícita. No se recomiendan mecanismos de seguridad obsoletos ni se presentan como obligaciones españolas.
- Los manuales web de systemd consultados indican versión 262; no se presume esa versión instalada en el equipo del usuario. Los ejemplos de reserva de Google tampoco se convierten en un margen obligatorio universal.

El [registro de preparación](../logs/gsi-editorial-005-preparation.json) recoge estos límites. La revisión del propietario debe contrastar también las fuentes y sus localizadores.

## Métricas antes y propuesta

Análisis 2.0.0 sobre las 20 preguntas. Simulación en memoria, sin escribir en los bancos.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 11 | 6 |
| Acierto al escoger primera alternativa de longitud máxima | 12/20 (60 %) | 7/20 (35 %) |
| Ratio 1,5–<2 entre correcta y distractor máximo | 5 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 20 | 0 |
| Feedback idéntico para acierto y error | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de formulaciones absolutas en distractores | 19 | 0 |
| Preguntas con explicación de los tres distractores | 0 | 20 |

Estas señales sirven para revisar. El 35 % no acredita calidad pedagógica ni dificultad calibrada; las claves originales permanecen intactas y la longitud puede coincidir o diferir entre respuestas sin que eso determine su validez.

## Validación y reproducción

La simulación debe producir exactamente 20 cambios IA y cero cambios manuales u oficiales, preservando todos los IDs y claves. Se comprueban esquema, hashes de partida y destino, cuatro opciones distintas, 60 explicaciones, fuentes completas, ficha reproducible, ausencia de aprobación y conservación byte a byte de los archivos protegidos.

Resultado: **17 pruebas editoriales, 27 JSON contra 21 esquemas, 1.964 preguntas estructuralmente válidas y 19.251 controles de integridad correctos**, además de documentación y referencias internas. Los archivos protegidos conservan sus hashes de antes de preparar el lote.

La primera comprobación adicional contra los blobs de Git falló al comparar bytes porque el checkout conserva CRLF y Git almacena LF. Se corrigió la comparación con Git para normalizar finales de línea únicamente en memoria; la comprobación byte a byte entre inicio y final del hito se mantiene separada. No se reescribieron los bancos para resolver esa diferencia.

Comandos:

```powershell
.\.venv\Scripts\python.exe -B scripts/editorial_batches.py --batch content/question-reviews/lote-005.json --render docs/GSI_REVISION_LOTE_005.md
.\.venv\Scripts\python.exe -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -B scripts/validate_json.py
.\.venv\Scripts\python.exe -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -B scripts/validate_references.py
git diff --check
```

No hay cambios de código ni datos activos. La suite HTTP completa del piloto conserva su evidencia; no se presenta como una ejecución sobre versiones pendientes de aprobación. Para revisar este lote, abrir la ficha, comparar antes/después y contrastar cada alternativa con su fuente. La simulación no incorpora propuestas a Entrenamiento ni Simulacros.

## Archivos y progreso

Creados: `content/question-reviews/lote-005.json`, `docs/GSI_REVISION_LOTE_005.md`, este informe y `logs/gsi-editorial-005-preparation.json`.

Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los bancos, originales, borradores IA, revisiones históricas y artefactos de los lotes anteriores se conservan. No se han convertido documentos ni aparecen conversiones pendientes en este hito.

El progreso conjunto es **20 decisiones aceptadas y 80 propuestas pendientes**, con 1.742 decisiones pendientes de aceptación en total; 1.662 todavía no tienen propuesta de esta revisión. Los lotes 002–005 quedan pendientes de revisión y aprobación por hash. Ninguna propuesta nueva se aplica, activa, publica ni fusiona.
