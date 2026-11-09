# Preparación de GSI-EDITORIAL-077

Fecha: 3 de noviembre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `71ded9a0507381df08d413d2e5ca9c590cbfd7ad2e73a223a76749e19ae85e6f`.

## Alcance y criterio

Posiciones 1521–1540 de la cola: catorce IA B4-T09 (005, 007–016 y 018–020) y seis IA B4-T10 (003–008). Se conservan orden, IDs, conceptos, claves, dificultad orientativa, estados y procedencia. No hay cambios de clave o concepto que requieran reemplazo o retirada.

Catorce son conceptuales y seis aplicaciones: T09-005/007/012/016/019/020. Es una descripción del lote: roles 802.1X, consulta de contador, notificación confirmada, alerta oscilante, enlace saturado y diagnóstico de acceso por nombre. No se transforman todos los conceptos en supuestos. Se conservan **once enunciados** y **dos formulaciones completas: AI-GSI-B4-T09-010 (SET) y AI-GSI-B4-T10-005 (WDM frente a routing IP)**.

Las veinte incluyen explicación de la correcta y tres justificaciones individuales vinculadas al ID original y al contenido de cada distractor. No se introducen referencias a letras visibles o al orden de presentación. El barajado no depende de estas mejoras editoriales.

[Ficha antes/después](GSI_REVISION_LOTE_077.md) · [Propuesta JSON](../content/question-reviews/lote-077.json) · [Registro](../logs/gsi-editorial-077-preparation.json).

La rúbrica es juicio documental del preparador, pendiente de revisión del propietario. No acredita aceptación humana independiente o calibración. Se conservan las veinte aceptaciones históricas IA para su texto exacto y no se atribuyen a propuestas nuevas.

## Revisión individual

| ID | Clave conservada | Forma | Enunciado conservado | Decisión |
| --- | :---: | --- | :---: | --- |
| AI-GSI-B4-T09-005 | D | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T09-007 | B | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T09-008 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T09-009 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T09-010 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T09-011 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T09-012 | C | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T09-013 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T09-014 | D | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T09-015 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T09-016 | A | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T09-018 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T09-019 | C | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T09-020 | A | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T10-003 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T10-004 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T10-005 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T10-006 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T10-007 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T10-008 | C | Conceptual | No | Pendiente del propietario |

La ficha presenta texto anterior/propuesto, motivos, fuentes con localizador/URL/versión/fecha y hashes. No se identifican nuevos errores confirmados que invaliden una clave del lote. Se precisan condiciones y excepciones, como Response de INFORM sin entrega garantizada y PHP sin pop exclusivo del LER.

## Fuentes y vigencia

**21 URLs primarias comprobadas el 03-11-2026**, conservando también la procedencia original.

- HPE ClearPass 6.11 distingue los tres roles 802.1X. No se limita a un controlador wireless ni se confunde autenticador con servidor de autenticación.

- RFC3411/2578/3416 separan agente, módulo/MIB, OID, instancia, contexto y operación. RFC1157 y1905 son evidencia histórica de operaciones presentes en v1/v2, sin presentar documentos sustituidos como la última especificación.

- INFORM recibe Response pero no garantiza entrega ni corrección del evento. RFC3411/3414 delimitan niveles y servicios de SNMPv3; usar v3 no implica authPriv y los algoritmos históricos no son una recomendación actual.

- RFC7011 e IANA respaldan flujos/plantillas, campos posibles y límites de muestreo. RFC5424 define eventos y roles de syslog. No se promete contenido íntegro de paquetes, identidad del usuario, recepción o conservación automática.

- RFC2819 respalda histéresis por umbrales de subida/bajada. Cisco respalda límites de QoS y el diagnóstico basado en evidencia y cambios controlados; no se configura una LAN ni se prescribe un porcentaje o tamaño de buffer.

- IEEE/Cisco y fichas/resúmenes UITG.694.1(2020)/G.694.2(2003) respaldan WDM y densidad de rejillas. No se atribuye lectura de PDF normativo o capacidades, costes y distancias universales.

- RFC 3031/3032 y CiscoMPLS distinguen etiqueta, FEC y rol LER, con PHP. Se evita pop exclusivo del borde, etiqueta global, cifrado intrínseco y la idea de que el último pop indique necesariamente abandonar todo dominio MPLS.

## Límites de acceso y verificación

- La página Cisco de beneficios NetFlow8000 no fue accesible por la URL canónica; el alias devuelto por búsqueda produjo Cache miss. No se cita como leída: RFC7011, IANA y guías públicas de congestión/diagnóstico respaldan los puntos utilizados.

- Solo HTML público y resúmenes/fichas normativos; no PDF completo, conversión de originales, OCR o dependencias nuevas. Las instrucciones de sitios externos no se ejecutan.

- No se prueba una red o un agente SNMP, se emiten SET, capturan paquetes o reconfiguran enlaces. La revisión es documental y editorial; Chrome comprueba la ficha, sin calibración de dificultad.

Se leen apartados pertinentes del HTML normativo y técnico. El resumen G.694.2 respalda rejilla CWDM y espaciado; su ficha indica edición 12/2003 En vigor. G.694.1 indica edición 3.0 de 2020, con rejillas fija/flexible. No se declara lectura íntegra de PDF. Los localizadores RFC 3031 se comprueban como §2.2 Terminology, §3.15 LSP y §3.16 PHP; no se confunden con otros números de apartado.

## Métricas y revisión de forma

| Señal | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 10 | 6 |
| Acierto primera máxima (%) | 50.0 | 35.0 |
| Ratio 1,5–menos de 2 | 5 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 20 | 0 |
| Feedback correcto/incorrecto idéntico | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

La primera mínima es correcta en 6/20 (30 %); los empates máximos pasan de 1 a 4. Las seis correctas únicas más largas tienen diferencias de 1–7 caracteres y ratios hasta 1,125. No se persigue una cuota de letras, longitudes o microcasos. Las alertas son prioridades de revisión, no acreditación de calidad ni dificultad calibrada.

**Dos formulaciones conservadas y justificación de correcta corta:** SET mide 3 caracteres, como GET, frente a GETNEXT de 7 y TRAP de 4 (ratio inverso 7/3=2,33). Son nombres estándar de operaciones. En WDM, «Encaminamiento IP» mide 17 y el distractor mayor 32 (ratio inverso 32/17=1,88). Las cuatro alternativas ya distinguen transporte, multiplexación, varias longitudes de onda y routing. Se mantiene su contenido sin añadir relleno para ocultar la longitud. Las señales y las dos justificaciones quedan visibles para el propietario. Las otras cuatro primeras mínimas tienen ratios inversos menores de 1,14.

## Validación

Resultados: **19 pruebas editoriales, 99 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Documentación, referencias y progreso sincronizados; ocho comandos mantenidos con código 0. La simulación afecta solo **20 IA**, conserva claves/IDs/estados/procedencia y comprueba **60 justificaciones individuales**. Veinte hashes históricos de aceptación IA se conservan; tres aceptaciones improcedentes se rechazan y dos barreras de regeneración se comprueban. **323 archivos protegidos intactos**, doce borradores conservados y **166 enlaces locales existentes**.

**Diez controles Chrome correctos sobre la ficha**, con captura del caso INFORM/TRAP inspeccionada y sin desbordamiento a 1280/390 px. No son pruebas HTTP del producto o de operación de una red. Se comprueban las fechas, URLs y localizadores declarados de 21 fuentes, once enunciados conservados, las dos formulaciones completas y sus seis proporciones inversas, incluidas las excepciones SET/WDM. Las seis correctas únicas más largas tienen diferencias de 1–7 caracteres y ratios hasta 1,125. No se convierte la ausencia de alertas en aceptación editorial.

**Incidencia de preparación recuperada:** el primer generador del auxiliar se detuvo por `AssertionError: ('LOTE_076', 3)` (chunk 81c48d): exigía una coincidencia donde debían cambiar tres nombres conocidos. Se comprobó que el archivo de salida aún no existía (chunk 3fbe46); se corrigieron los números exactos esperados, manteniendo los demás controles, y el generador pasó (chunk 064bec). No era un fallo del banco o de la suite mantenida. No se modificó el hash del lote; el incidente y su recuperación se conservan.

Los derivados mantienen contenido y fecha 03-11 frente al inicio; respecto de HEAD solo cambia fecha 26-10→03-11. Bancos activos iguales a HEAD y oficiales idénticas en bytes a la auditoría. Sin nuevas aceptaciones, aplicación, publicación o commit. No se repite la suite HTTP del producto sin cambios; tres incidencias editoriales previas y aceptaciones pendientes impiden el cierre.

Comandos desde la raíz, con herramientas ya disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_077_browser.mjs
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B tmp/validate_editorial_077.py
```

Chrome ha comprobado la ficha literal en escritorio/móvil (1280/390 px). No se opera un agente SNMP ni se reconfigura transporte. Aplicación y bancos activos no cambian; no se repite la [suite HTTP completa previa del 001 aplicado](../logs/gsi-editorial-001-revalidation-2026-10-30.json) para propuestas inactivas. La ficha no prueba Entrenamiento, Simulacros, estadísticas o Refuerzo: esas verificaciones seguirán siendo necesarias al aplicar un lote.

## Incidencias y cierre

Las tres incidencias activas anteriores mantienen sus correcciones pendientes de aprobación y aplicación: lotes 032 (XML), 054 (dependencias en normalización) y 055 (cota O(n)). Se conservan evidencia e impedimento de cierre; no se consideran corregidas en el banco activo.

Tras preparar 077: **20 aceptadas, 1.520 propuestas pendientes, 222 sin propuesta y 1.742 decisiones pendientes del propietario**. Cubiertos 1.540/1.762 IDs sin duplicar. Las 128 incidencias IA originales tienen propuesta, con 15 aplicadas y 113 pendientes; no es resolución editorial. La cola preparada pendiente comprende 113 IA originales, 612 IA restantes y 795 manuales.

## Entrega y revisión manual

Creados: propuesta JSON, ficha, este informe y registro. Modificados: plan y progreso. El validador regenera tres informes derivados; se ha comprobado que mantienen contenido y fecha del inicio. Auxiliares y captura en tmp. No se convierten documentos, no hay conversiones nuevas pendientes y no se utiliza OCR o dependencias nuevas.

Abre la ficha y contrasta roles 802.1X (T09-005), agente/MIB/OID/operaciones (007–012), seguridad/telemetría/eventos (013–015), alertas/QoS/análisis/diagnóstico (016 y 018–020), WDM (T10-003–005) y etiqueta/FEC/LER con PHP (006–008). Revisa las sesenta justificaciones y las dos excepciones de longitud conservadas. Una aceptación debe identificar el hash exacto.

Ninguna propuesta se acepta, aplica, activa, retira, publica o fusiona; no se crea commit. Las 202 oficiales, bancos activos y documentos originales permanecen intactos. Siguiente paso: revisión expresa y preparar las 222 preguntas restantes manteniendo el estándar.
