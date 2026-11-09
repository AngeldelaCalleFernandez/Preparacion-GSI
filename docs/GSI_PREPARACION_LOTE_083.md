# Preparación de GSI-EDITORIAL-083

Fecha: 4 de noviembre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `5955c0a12125ef13a19b63d2998fa382151bf12d8c0d1f64a17692bbfbaf6cb6`.

## Alcance y decisiones

Posiciones 1641–1660 de la cola: veinte manuales de práctica 19, seis B4-T14 (005/007/008/025/033/035) y catorce B4-T15 (041–046/048–055). Se conservan IDs, conceptos y claves, dificultad orientativa, estado y procedencia. No hay sustituciones o retiradas por cambio de clave o significado.

Catorce conceptuales y seis aplicaciones: 005/025/033/044/048/055. Los casos permiten interpretar entrada SIP, respuesta 180, protección de dos planos, voz que conserva LTE, pequeños mensajes de muchos sensores y aprovisionamiento eSIM. Esta distribución describe el resultado; no constituye una cuota del lote. Se conservan **diez enunciados**, **trece textos de correcta** y **tres preguntas con sus cuatro alternativas completas**: 041 (2G), 046 (eMBB) y 054 (handover).

Cada propuesta contiene explicación de la correcta y justificación de sus tres distractores por ID original y contenido. El barajado no altera el sentido de esas explicaciones. Las letras correctas se mantienen; no se cambian para fabricar una distribución. Las cuatro alternativas confrontan funciones IMS, resultados SIP, planos protegidos o arquitecturas y escenarios próximos.

[Ficha antes/después](GSI_REVISION_LOTE_083.md) · [Propuesta JSON](../content/question-reviews/lote-083.json) · [Registro](../logs/gsi-editorial-083-preparation.json).

La rúbrica expresa revisión documental del preparador, pendiente de aceptación humana del propietario. No acredita calibración estadística ni revisión independiente. El lote no contiene IA y no modifica sus aceptaciones históricas.

## Revisión individual

| ID | Clave conservada | Forma | Enunciado conservado | Enunciado y opciones conservados |
| --- | :---: | --- | :---: | :---: |
| MAN-GSI-P19-005 | C | Aplicación | No | No |
| MAN-GSI-P19-007 | B | Conceptual | Sí | No |
| MAN-GSI-P19-008 | B | Conceptual | Sí | No |
| MAN-GSI-P19-025 | B | Aplicación | No | No |
| MAN-GSI-P19-033 | B | Aplicación | No | No |
| MAN-GSI-P19-035 | D | Conceptual | No | No |
| MAN-GSI-P19-041 | B | Conceptual | Sí | Sí |
| MAN-GSI-P19-042 | A | Conceptual | Sí | No |
| MAN-GSI-P19-043 | B | Conceptual | Sí | No |
| MAN-GSI-P19-044 | A | Aplicación | No | No |
| MAN-GSI-P19-045 | A | Conceptual | No | No |
| MAN-GSI-P19-046 | B | Conceptual | Sí | Sí |
| MAN-GSI-P19-048 | A | Aplicación | No | No |
| MAN-GSI-P19-049 | D | Conceptual | Sí | No |
| MAN-GSI-P19-050 | D | Conceptual | No | No |
| MAN-GSI-P19-051 | C | Conceptual | No | No |
| MAN-GSI-P19-052 | D | Conceptual | Sí | No |
| MAN-GSI-P19-053 | D | Conceptual | Sí | No |
| MAN-GSI-P19-054 | C | Conceptual | Sí | Sí |
| MAN-GSI-P19-055 | C | Aplicación | No | No |

Todas las decisiones siguen en pending_review. No se detectan nuevos errores confirmados de clave. Se aclaran posibles ambigüedades: 045 delimita NR/5GC al despliegue SA sin negar NSA con EPC; 051 sitúa al UE como extremo frente a RAN y núcleo; 053 sustituye el distractor sector, potencialmente solapado con celda, por emplazamiento físico. En 035 se define el alcance de ToIP usado por la pregunta sin atribuirlo a una terminología universal. En 054 continuidad es un objetivo, no promesa de interrupción cero.

## Fuentes y vigencia

**12 URLs primarias con comprobación real 04-11-2026: nueve HTML y tres PDF de lectura seleccionada.** Se reutilizan tres consultas pertinentes del mismo día (IMS, SRTP y ejemplo Microsoft de canales/medios); las otras nueve fuentes se consultan para este lote. En SIP se comprueban los apartados de familias y respuestas provisionales. Los localizadores y versiones acompañan a cada ítem. Toda procedencia original permanece literal.

- IMS: consulta seleccionada del mismo04-11 reutilizada de081, con PDF390p y renders existentes intactos; P/I/S-CSCF son funciones lógicas. El anexoY.0 conserva función HSS IMS aunque se integre con funciones de datos5G.

- SIP: nueva comprobación de §7.2/21.1 para1xx/180; TLS/SRTP y ejemplo Microsoft reutilizan comprobaciones pertinentes del04-11. Protección exige perfiles, claves, confianza y tramos; no es receta criptográfica actual.

- ToIP se delimita en el enunciado como solución corporativa; Cisco aporta un ejemplo funcional histórico, no una oposición universal normativa entre ToIP y VoIP.

- Ericsson: historia de participantes para GSM/GPRS/EDGE y UMTS/HSPA; white paper2022 para LTE/EPC, IMS/VoLTE, CSFB y SA/NSA. No se usan sus cifras, previsiones, garantías comerciales o frases que omiten el dominio3G de paquetes.

- TS38.300V18.8.0: páginas seleccionadas25–27/31/75/77–78/89–91; UE, NG-RAN,5GC, identidades y movilidad. Renders26/90 inspeccionados; no lectura íntegra, laboratorio radio ni afirmación de última edición.

- ITU-R M.2083-0 (09/2015): anexo§4 y figura2, impresas11–12/PDF13–14; escenarios eMBB/mMTC/URLLC y modularidad. Render14 inspeccionado. No son máximos simultáneos o garantizados por cualquier red.

- Nokia y comunicado histórico conjunto ETSI/3GPP: Release18 abre5G-Advanced dentro de5G; se excluyen cronologías futuras desactualizadas y toda fecha prometida de6G.

- Samsung Research: función de identidad/credenciales y perfil eSIM de consumo; sin atribuir v3.0 como última versión de2026 o restringir todos los factores de forma a una SIM soldada. Las fuentes GSMA inaccesibles no se citan como leídas.

Se conservan tres originales auxiliares con hashes; IMS procede de 081 y los otros dos se descargan para 083. No se atribuye lectura íntegra de las normas ni condición de última edición. Los seis renders registrados comprenden tres reutilizados de IMS y tres nuevos inspeccionados (NR 26/90 y M.2083 14). Las figuras permiten comprobar separación RAN/5GC, secuencia de handover y escenarios IMT-2020.

| Original auxiliar | Páginas | Páginas PDF leídas | SHA256 |
| --- | ---: | --- | --- |
| tmp/pdfs/gsi-editorial-081-etsi-123228-v181100.pdf | 390 | 28, 29, 50, 51, 52, 328 | `792b189a047efabb36696611c30605ab456ac6da9503fba740fdf7de46d1b439` |
| tmp/pdfs/gsi-editorial-083-etsi-138300-v180800.pdf | 274 | 1, 25, 26, 27, 31, 75, 77, 78, 89, 90, 91 | `ba5532ad3cf005b7d7267a1925b2f41160eb09d5d60eda78df223e4c53320711` |
| tmp/pdfs/gsi-editorial-083-itu-m2083-201509.pdf | 21 | 1, 13, 14 | `cd4e6f1b2dc7bfdc8f2efcefcd3aa3fa2f1739ff69d9e839b2cc12ef06d8d46a` |

## Límites de acceso y alcance

- 403 en candidatos3GPP Release18,5Goverview y portada/-; se emplean edición pública ETSI, Nokia participante y white paper de arquitectura, sin eludir esos bloqueos.

- 403 en páginas GSMA eSIM/how-it-works,portada,interoperabilidad y PDFSGP.21v2.6; otra ruta candidata eSIM-whitepaper no accesible. Se usa explicación primaria de Samsung sobre identidad y perfiles de consumo; no se atribuye lectura del PDFGSMA.

- La URL Cisco candidata what-is-ip-telephony no accesible; la guía histórica IP Telephony Overview sí aporta componentes de sistema. Ruta ETSI2g no accesible, reemplazada por historia técnica de participantes.

- El comunicado ETSI sin parámetro devolvió timeout; el enlace público indexado con parámetro sí se pudo leer. M.2083 falló dos veces por timeout del lector web; descarga pública del original terminada correctamente, junto con TS38.300, y lectura local seleccionada.

- No se han realizado llamadas, despliegues móviles, medidas de radio, verificación criptográfica ni calibración estadística. Se preparan propuestas; no se convierten originales a Markdown, no hay OCR ni dependencias nuevas.

La descarga pública de los dos PDF consultados para 083 termina correctamente. Los timeouts del lector web de UIT se distinguen de errores técnicos de la aplicación y de revisión de permisos. No hay nuevas conversiones documentales o conversiones pendientes, OCR, instalaciones o dependencias. Se conservan originales y borradores existentes.

## Métricas antes/después

| Señal | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 7 | 8 |
| Acierto primera máxima (%) | 35.0 | 40.0 |
| Ratio 1,5 a menos de 2 | 0 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 14 | 0 |
| Feedback correcto/incorrecto idéntico | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

La correcta única más larga sube 7→8 y el acierto de primera máxima 35→40%; no se presenta como mejora de todas las señales. Feedback breve pasa 14→0. Primera mínima correcta: 7/20, también contando empates. El mayor ratio inverso es 115/75 en 046, conservada íntegra: las expansiones inglesas y descripciones de escenarios tienen longitudes naturales diferentes. Se documenta esa señal sin atribuir ausencia total de pistas o alargar la correcta con relleno. Las ocho correctas únicas más largas difieren de su distractor mayor en 2–18 caracteres; el mayor ratio es 94/76 en 055. El registro contiene todas las longitudes y justificaciones. Superar umbrales no acredita calidad pedagógica; dificultad orientativa y calibración pendiente.

No hay revisiones posteriores al hash inicial de esta propuesta. Cualquier revisión futura deberá regenerar hashes y obtener su propia aceptación, incluso si solo cambia feedback o una fuente. Ninguna aceptación anterior autoriza este lote.

## Validación y archivos

Resultados: **19 pruebas editoriales, 105 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Ocho comandos finales con código 0. Documentación, referencias y progreso sincronizados. Simulación en memoria de **20 manuales**, sin cambios de ID, clave, estado o procedencia; **60 justificaciones individuales** comprobadas. Tres aceptaciones improcedentes rechazadas y dos barreras de regeneración verificadas. **347 archivos protegidos intactos**, doce borradores conservados y **178 enlaces locales existentes**.

**Diez comprobaciones Chrome correctas**, sin desbordamiento a 1280/390 px; captura de arquitectura SA inspeccionada. Diez enunciados, trece textos correctos y tres preguntas completas conservados. Doce referencias con métodos y fechas declarados; tres originales PDF con hash verificado y seis renders registrados, tres nuevos y tres reutilizados. Sin revisiones posteriores al hash inicial, fallos de la suite mantenida o reparaciones auxiliares. Las incidencias de acceso a fuentes se detallan por separado.

Derivados con contenido y fecha 04-11 iguales al inicio; frente a HEAD solo cambia fecha 26-10→04-11. Bancos activos iguales a HEAD y 202 oficiales idénticas en bytes a la auditoría. Sin nuevas aceptaciones, aplicación, publicación, fusión o commit. No se repite la suite HTTP del producto ni se validan redes reales, radio o llamadas. Tres incidencias anteriores y las decisiones pendientes mantienen abierto el cierre editorial.

Archivos creados: content/question-reviews/lote-083.json; docs/GSI_REVISION_LOTE_083.md; este informe; logs/gsi-editorial-083-preparation.json. Auxiliares de preparación, lectura, comprobación y ficha en tmp/. Se actualizan docs/GSI_MEJORA_TESTS.md y logs/gsi-editorial-progress.json; los validadores regeneran sus informes derivados. No se modifica código de la aplicación, bancos publicados, borradores IA o aceptaciones históricas. La simulación de aplicación solo existe en memoria.

Comandos de reproducción: `.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py`; `scripts/validate_json.py`, `scripts/validate_questions.py`, `scripts/validate_documentation.py`, `scripts/validate_references.py`, `scripts/editorial_progress.py` y `scripts/validate_gsi_final.py` con el mismo intérprete. Ficha: `& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_083_browser.mjs`. La verificación específica es tmp/validate_editorial_083.py; comprueba hash vigente, 347 archivos protegidos, 60 distractores, IDs/claves, fuentes, progreso y negativas de aceptación/regeneración. No reejecutar generadores que protegen salidas existentes.

Chrome ha comprobado la ficha literal a 1280 y 390 px, con solicitudes externas bloqueadas. No es un recorrido HTTP nuevo de Entrenamiento, Simulacros, estadísticas o Refuerzo. Sus pruebas del piloto aplicado siguen en [revalidación del 30-10](../logs/gsi-editorial-001-revalidation-2026-10-30.json); no se repiten llamadas, radio o prestaciones de redes reales para propuestas inactivas.

## Progreso y siguiente paso

20 aceptadas y aplicadas; **1640 propuestas pendientes**, **102 sin propuesta** y **1742 decisiones humanas pendientes**. Los lotes 002–083 cubren 113 incidencias IA originales, otras 674 IA y 853 manuales. Incluyendo el piloto, 1660 IDs tienen ficha; eso no equivale a 1660 decisiones del propietario.

Permanecen tres incidencias confirmadas en versiones activas anteriores: MAN-GSI-P18-026 (032), AI-GSI-B3-T04-004 (054) y AI-GSI-B3-T05-002 (055). Sus correcciones propuestas requieren aprobación y aplicación; no se declaran resueltas ni se alteran sin autorización. Impiden cerrar editorialmente el banco.

Siguiente fase: revisión del propietario de este hash y preparación del siguiente grupo de la cola, con la misma rúbrica y sin forzar microcasos. Aplicar, activar o publicar requiere aprobación expresa vinculada al contenido exacto. No se crea commit, publicación o fusión para propuestas pendientes.
