# Preparación de GSI-EDITORIAL-082

Fecha: 4 de noviembre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `84b8e24994700d7b305c2dc4ff8f4c2a3d4d7df8b53ce2cc9d0ab6b59db1f1cf`.

## Alcance y criterio

Posiciones 1621–1640 de la cola: veinte manuales B4-T14, práctica 19 (027–032,034,036–040,141–144 y001–004). Se mantienen IDs, conceptos, claves, dificultad orientativa, estados y procedencia. No se requieren reemplazos o retiradas por cambio de clave o significado.

Catorce conceptuales y seis aplicaciones: 037/040/141–144. Cinco casos ya estaban presentes; el de métricas de voz concreta degradación en llamadas establecidas pese a caudal de descarga esperado. Distribución descriptiva, sin cuota impuesta. Se conservan **diecisiete enunciados**, **once textos de correcta** y **cuatro preguntas con sus alternativas completas**: 029,036,038 y144. Se completan explicaciones sin reescribir lo que ya diferencia conceptos próximos.

Las veinte incluyen explicación correcta y tres justificaciones por ID original y contenido, compatibles con barajado. En 143 se precisa identidad por persona para evitar confundir continuidad multidispositivo con cuentas colectivas. No se cambia una clave para distribuir letras ni se añade relleno para igualar longitudes.

[Ficha antes/después](GSI_REVISION_LOTE_082.md) · [Propuesta JSON](../content/question-reviews/lote-082.json) · [Registro](../logs/gsi-editorial-082-preparation.json).

La rúbrica recoge juicio documental del preparador y sigue pendiente del propietario. No acredita revisión humana independiente, laboratorio de voz o calibración estadística. El lote no incluye IA ni cambia aceptaciones históricas.

## Revisión individual

| ID | Clave conservada | Forma | Enunciado conservado | Enunciado y opciones conservados |
| --- | :---: | --- | :---: | :---: |
| MAN-GSI-P19-027 | A | Conceptual | Sí | No |
| MAN-GSI-P19-028 | C | Conceptual | No | No |
| MAN-GSI-P19-029 | B | Conceptual | Sí | Sí |
| MAN-GSI-P19-030 | C | Conceptual | Sí | No |
| MAN-GSI-P19-031 | D | Conceptual | Sí | No |
| MAN-GSI-P19-032 | C | Conceptual | Sí | No |
| MAN-GSI-P19-034 | A | Conceptual | Sí | No |
| MAN-GSI-P19-036 | D | Conceptual | Sí | Sí |
| MAN-GSI-P19-037 | B | Aplicación | No | No |
| MAN-GSI-P19-038 | C | Conceptual | Sí | Sí |
| MAN-GSI-P19-039 | D | Conceptual | Sí | No |
| MAN-GSI-P19-040 | D | Aplicación | Sí | No |
| MAN-GSI-P19-141 | D | Aplicación | Sí | No |
| MAN-GSI-P19-142 | B | Aplicación | Sí | No |
| MAN-GSI-P19-143 | D | Aplicación | No | No |
| MAN-GSI-P19-144 | C | Aplicación | Sí | Sí |
| MAN-GSI-P19-001 | B | Conceptual | Sí | No |
| MAN-GSI-P19-002 | A | Conceptual | Sí | No |
| MAN-GSI-P19-003 | B | Conceptual | Sí | No |
| MAN-GSI-P19-004 | A | Conceptual | Sí | No |

Todas las decisiones son pending_review. No se identifican nuevos errores confirmados de clave. Se matizan protección de señalización/medios, papel variable de SBC, QoS, buffer, diversidad de troncales e identidad individual entre dispositivos.

## Fuentes y vigencia

**14 URLs primarias con fecha real 04-11-2026: trece HTML y un PDF de lectura seleccionada reutilizado**. Seis consultas pertinentes del mismo día se reutilizan expresamente, incluidas SIP/SDP, NGN, QoS, resiliencia y la edición IMS. Las demás páginas se han abierto para este lote. La procedencia original de las manuales permanece literal.

- RTP no garantiza QoS y RTCP informa sobre participantes/calidad. RTCP es control asociado a medios, distinto de la señalización de establecimiento SIP.

- SRTP/SRTCP protegen medios y control asociado según perfil y claves. No convierten TLS SIP en cifrado de audio ni crean seguridad integral de una llamada.

- SBC es un término de despliegue con funciones variables. RFC 5853 expone requisitos y problemas de transparencia; no se supone que todo SBC intercepte todo medio o resuelva toda seguridad.

- QoS y admisión requieren capacidad y acuerdos. Se evita generalizar marcas EF, umbrales de latencia o continuidad automática ante cualquier fallo.

- Se conserva la edición IMS V18.11.0 Release 18 y sus páginas ya examinadas en 081, con el original, hash y renders verificados de nuevo. No se declara lectura íntegra o nueva descarga.

- Cuatro preguntas conservan íntegros sus enunciados y alternativas; la revisión completa sus explicaciones. Se mantiene identidad individual coherente entre dispositivos sin confundirla con credenciales colectivas.

Localizadores: RFC3550 §1/6, RFC5853 §2/3.1–3.3, RFC3711 §1/2/7, RFC7005 §3/3.2/3.3, RFC4594 §1.5.5/4.1, RFC2475 §1.1/2.5, RFC3261 y RFC8866 para control/descripción. Las páginas de Twilio/Cisco/Microsoft aportan funciones o ejemplos y no obligan a una marca.

El PDF reutilizado es TS 123 228 V18.11.0 (2026-01), Release 18: páginas PDF 28–29,50–52 y328, con figuras 4.0/Y.0-1; renders 29/51/328 inspeccionados en 081 y reutilizados, sin nueva captura o descarga. Original auxiliar: tmp/pdfs/gsi-editorial-081-etsi-123228-v181100.pdf, SHA256 `792b189a047efabb36696611c30605ab456ac6da9503fba740fdf7de46d1b439`. Se verifica su integridad; no se atribuye lectura de las 390 páginas o condición de última edición.

## Límites de acceso

- La URL candidata Microsoft direct-routing-high-availability no fue accesible. Plan Direct Routing sí aporta cuerpo sobre failover y separación SIP/TLS de medios/SRTP; CAF B5.b respalda dependencia y diversidad.

- Las páginas comerciales se usan como fuentes primarias de función o ejemplo, sin prescribir sus productos ni universalizar prestaciones, puertos, rutas o garantías.

- Se reutiliza la consulta PDF seleccionada de 081, conservada sin alterar. Sin nuevas conversiones, OCR, descargas PDF o despliegues de laboratorio. No se atribuyen nuevas capturas normativas a esta revisión.

Una incidencia de acceso candidata registrada, resuelta con fuentes pertinentes. No se introducen nuevos documentos convertidos, conversiones pendientes, OCR o dependencias. Se conserva el original normativo ya consultado y los originales del proyecto.

## Métricas y forma

| Señal | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 5 | 6 |
| Acierto primera máxima (%) | 25.0 | 30.0 |
| Ratio1,5–menos de2 | 1 | 0 |
| Ratio2 o superior | 0 | 0 |
| Feedback menor de15 palabras | 16 | 0 |
| Feedback correcto/incorrecto idéntico | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

La primera máxima pasa 25→30 % y la correcta única más larga 5→6. No se presenta como mejora de todas las señales. Primera mínima correcta: 10/20 (50 %); se registra cada caso. El mayor ratio inverso es 90/66, en 142, y la descripción SDP conservada tiene 115/88. Las seis únicas más largas difieren de su distractor máximo en 1–25 caracteres: el máximo 126/101 corresponde a 141, cuya correcta completa se conserva; las restantes corresponden a 032/040/143/144/004. El registro incluye dimensiones exactas y empates. Esas señales priorizan revisión, no certifican calidad ni se ocultan con relleno. La dificultad continúa orientativa y la calibración pendiente.

## Revisión interna de propuesta

Hash inicial `321cd7898aadbd8862a942c432778798028fb12fb756e9d31da9f4c781b0f7d6`. La primera revisión tipográfica añade dos espacios: «sobreIP» en feedback incorrecto B de 034 y «unaWAN» en feedback correcto de 144. Se guardan ambos ítems anteriores y el hash inicial para reconstruirlos. No cambian enunciados, opciones, claves, fuentes o decisiones y no existía aprobación de ninguna versión. El hash vigente es el indicado al inicio.

Una segunda revisión precisa RFC3261 §23 en la referencia individual de032, tras comprobar el cuerpo sobre S/MIME. Se conserva el ítem previo con hash `e4bef3eeb359458d345f54922f82069bc09b276bc9eb3484d62d69701df6a8ab`; solo cambia el localizador y su copia en procedencia editorial. Enunciado, alternativas, explicaciones, clave y decisión permanecen iguales. La cadena de ambos hashes se reconstruye en validación.

## Validación

Resultados: **19 pruebas editoriales, 104 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Documentación, referencias y progreso sincronizados; ocho comandos finales con código 0. Simulación en memoria limitada a **20 manuales**, sin cambios de ID, clave, estado o procedencia; **60 justificaciones individuales** comprobadas. Sin nuevas versiones IA en este lote; registros históricos y piloto intactos. Tres aceptaciones improcedentes rechazadas y dos barreras de regeneración verificadas. **343 archivos protegidos intactos**, doce borradores conservados y **176 enlaces locales existentes**.

**Diez comprobaciones Chrome correctas**, sin desbordamiento a 1280/390 px, y captura de WAN saturada inspeccionada. Diecisiete enunciados, once textos correctos y cuatro preguntas completas conservados. Catorce referencias con métodos y fechas declarados; PDF reutilizado con hash comprobado y tres renders existentes conservados. Ambos hashes anteriores reconstruidos exactamente: dos espacios de feedback y un localizador individual son los únicos cambios internos. Las pruebas se han ejecutado sobre la versión final; sin fallos de la suite mantenida o reparaciones auxiliares en este lote.

Derivados con contenido y fecha 04-11 iguales al inicio; frente a HEAD solo cambia fecha 26-10→04-11. Bancos activos iguales a HEAD y oficiales idénticas en bytes a la auditoría. Sin nuevas aceptaciones, aplicación, publicación, fusión o commit. No se repite la suite HTTP del producto ni se prueban llamadas, fallos operativos o QoS real. Tres incidencias anteriores y las decisiones pendientes mantienen abierto el cierre editorial.

Comandos desde la raíz:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_082_browser.mjs
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B tmp/validate_editorial_082.py
```

Chrome ha comprobado la ficha a 1280/390 px. No se repite la [suite HTTP aplicada al lote 001](../logs/gsi-editorial-001-revalidation-2026-10-30.json): propuestas inactivas y aplicación/bancos intactos. Al aplicar contenido aprobado habrá que comprobar Entrenamiento, Simulacros, estadísticas y Refuerzo; ficha y normativa no sustituyen el recorrido del producto.

## Incidencias y cierre

Siguen pendientes las tres incidencias activas anteriores: lote 032, XML; lote 054, dependencias en normalización; lote 055, cota O(n). Sus correcciones propuestas esperan aprobación/aplicación y no se consideran resueltas.

Tras preparar 082: **20 aceptadas, 1620 propuestas pendientes, 122 sin propuesta y 1742 decisiones pendientes del propietario**. Cubiertos 1640/1762 IDs sin duplicar. Las 128 incidencias IA originales tienen propuesta: 15 aplicadas y 113 pendientes; no acredita resolución editorial. La cola pendiente preparada comprende 113 IA originales, 674 IA restantes y 833 manuales.

## Entrega y cómo probar

Creados: propuesta JSON, ficha, informe y registro. Modificados: plan y progreso. El validador regenera tres informes derivados; se ha comprobado que mantienen contenido y fecha 04-11 del inicio. Auxiliares y captura de ficha en tmp; original normativo y renders reutilizados sin alterar. Sin conversiones documentales, nuevas descargas PDF, OCR o dependencias nuevas.

Abre la ficha y contrasta control/medios, frontera, QoS, convergencia y los seis casos. Revisa cada justificación, especialmente las cuatro preguntas conservadas y los límites de longitud declarados. La aprobación debe identificar el hash exacto.

Sin aceptar, aplicar, activar, retirar, publicar, fusionar o crear commit. Las 202 oficiales y los bancos activos intactos. Siguiente paso: revisión del propietario y preparación de las 122 preguntas restantes con el mismo estándar.
