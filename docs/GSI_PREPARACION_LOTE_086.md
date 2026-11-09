# Preparación de GSI-EDITORIAL-086

Fecha: 4 de noviembre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `7619aeaf466bd53e475220f028ce69aa8f91d5ffeb675bd7a3341bf315ac5d83`.

## Alcance y decisiones

Posiciones 1701–1720 de la cola: veinte manuales de práctica19, diez B4-T15 y diez B4-T16. Se conservan IDs, conceptos, claves, dificultad orientativa, estados y procedencia original. Estas propuestas no las consume la aplicación. No se modifican bancos publicados, preguntas oficiales o aceptaciones históricas.

Catorce conceptuales y seis aplicaciones: 100/145/146/148/080/147. Los casos ya presentes permiten evaluar parque mixto, respaldo de acceso, ámbito BYOD, postura exigida, dominio de fallo y pérdida de COBO. No se fuerzan nuevas situaciones o cuotas por lote.

Se conservan **catorce enunciados**, **dieciséis textos de correcta** y **nueve preguntas con sus alternativas completas**:146/047/075/076/101/103/105/107/112. Las otras mejoras sustituyen distractores ajenos o afirman funciones con más precisión. En104 se comparan cuatro pares de mecanismos cercanos; en113 los distractores son codecs de audio y se pregunta por implementación obligatoria, sin exigir usar Opus en toda llamada.

[Ficha antes/después](GSI_REVISION_LOTE_086.md) · [Propuesta JSON](../content/question-reviews/lote-086.json) · [Registro](../logs/gsi-editorial-086-preparation.json).

Las veinte incluyen explicación de la correcta y tres justificaciones individuales por contenido e ID original, compatibles con barajado. La rúbrica recoge juicio del preparador con fuentes; queda pendiente la revisión del propietario. No es certificación automática de calidad o revisión humana independiente. No hay cambios de concepto o clave que requieran reemplazar IDs.

## Revisión individual

| ID | Tema | Clave conservada | Forma | Enunciado y opciones conservados |
| --- | --- | :---: | --- | :---: |
| MAN-GSI-P19-100 | B4-T15 | D | Aplicación | No |
| MAN-GSI-P19-145 | B4-T15 | C | Aplicación | No |
| MAN-GSI-P19-146 | B4-T15 | D | Aplicación | Sí |
| MAN-GSI-P19-148 | B4-T15 | A | Aplicación | No |
| MAN-GSI-P19-047 | B4-T15 | C | Conceptual | Sí |
| MAN-GSI-P19-060 | B4-T15 | D | Conceptual | No |
| MAN-GSI-P19-075 | B4-T15 | A | Conceptual | Sí |
| MAN-GSI-P19-076 | B4-T15 | D | Conceptual | Sí |
| MAN-GSI-P19-080 | B4-T15 | B | Aplicación | No |
| MAN-GSI-P19-147 | B4-T15 | B | Aplicación | No |
| MAN-GSI-P19-101 | B4-T16 | C | Conceptual | Sí |
| MAN-GSI-P19-103 | B4-T16 | D | Conceptual | Sí |
| MAN-GSI-P19-104 | B4-T16 | C | Conceptual | No |
| MAN-GSI-P19-105 | B4-T16 | B | Conceptual | Sí |
| MAN-GSI-P19-106 | B4-T16 | A | Conceptual | No |
| MAN-GSI-P19-107 | B4-T16 | B | Conceptual | Sí |
| MAN-GSI-P19-110 | B4-T16 | D | Conceptual | No |
| MAN-GSI-P19-111 | B4-T16 | B | Conceptual | No |
| MAN-GSI-P19-112 | B4-T16 | B | Conceptual | Sí |
| MAN-GSI-P19-113 | B4-T16 | A | Conceptual | No |

## Ambigüedad confirmada en080

La versión activa pregunta qué riesgo evaluar en una sede con único acceso5G y marca B. A describe presumir independencia de dos perfiles; C, una prueba puntual sin estudiar indisponibilidad; D, confiar en slicing sin comprobar alternativa o dependencias. Las tres también describen riesgos defendibles de continuidad. El problema de respuesta única es semántico y pasa el control estructural.

La propuesta mantiene dependencia de cobertura/capacidad y dominio de fallo y conserva B. Pide una valoración de continuidad, mientras las otras conclusiones equiparan capacidad, número de perfiles o slice con independencia efectiva. Ficha y registro conservan alternativas y hashes que evidencian el problema y la compatibilidad conceptual.

Es la **quinta incidencia confirmada activa**. Estado: correction_proposed_pending_owner_approval. No se corrige ni excluye la versión publicada fuera de la autorización del piloto. La propuesta no resuelve por sí sola el error activo ni permite cerrar editorialmente el banco.

## Fuentes, localizadores y vigencia

**33 URLs primarias comprobadas el04-11-2026: treinta HTML y tres PDF de lectura seleccionada.** Once HTML se consultan para086 y diecinueve se reutilizan del mismo día. Se reutilizan tres originales PDF; TS23.501 añade lectura de cuatro páginas y un render nuevo inspeccionado. Métodos, versiones y localizadores están en cada ítem y en el registro; se mantiene literal la procedencia original.

- 086 reutiliza consultas primarias del mismo04-11 de081–085, con método diferenciado. NIST,IMT yTS23.501 conservan originales y lectura seleccionada, sin declarar lectura íntegra o versión más reciente.

- TS23.501§5.9.6, PDF244–245, establece equivalencia DNN/APN; no§5.6.1 por sí solo. Se añaden cuatro páginas leídas141/177/244/245 y un render244 inspeccionado. Los apartados previos aclaran que slices pueden compartir recursos y DNN.

- URLLC es un escenario de fiabilidad/retardo, distinto de eMBB/mMTC; el resultado depende de toda la cadena. La evolución2G–5G incluye radio,núcleo,servicios y coexistencia, sin tasas comerciales o clasificación3G sin paquetes.

- Redundancia se verifica según objetivo, capacidad, dependencia común y prueba de conmutación/aplicación. Distinto operador puede aportar diversidad, sin convertirse en condición universal o demostración suficiente por contrato.

- BYOD protege ámbito laboral con información y medidas proporcionadas; UEM coordina controles por plataforma. Postura no se sustituye por MFA,VPN o inscripción. COBO no hace infalible el borrado remoto o instantánea toda revocación.

- RTP/RTCP separan medios e informes, sin garantizar QoS. SDP describe; oferta/respuesta negocia. SIP yH.323 requieren interworking en determinados diseños y compartir codec no elimina traducción de señalización.

- W3CWebRTC13-03-2025 yRFC8825 separan API y protocolos; señalización de aplicación no impuesta, multipunto opcional según diseño. ICE utiliza STUN y TURN, sin garantía de atravesar toda política de red.

- STUN básico informa mapeo/comprueba conectividad; TURN retransmite por conectividad o política/privacidad. Se usanRFC8489/8656, que sustituyen5389/5766. Usar relay no equivale a cifrado extremo a extremo.

- Opus y G.711 son de implementación obligatoria conformeRFC7874§3, sin exigir Opus en toda llamada. Los tres distractores son codecs de audio y se explican individualmente respecto al requisito, sin prohibir ofertas adicionales.

- 080 tiene ambigüedad activa confirmada: A,C,D también son riesgos o fallos de evaluación defendibles. Se conserva dependencia/dominio de fallo y claveB; la propuesta pide valoración de continuidad con una única conclusión defendible.

Originales auxiliares conservados:

- `tmp/pdfs/gsi-editorial-084-etsi-123501-v181200.pdf`: 723 páginas, SHA256 `2ef71f81a87c86967dc623741b5a3479338844661067a3bb13089fffe6fed2ac`. Lectura seleccionada/reutilizada: 1,10,34,42,43,44,45,47,48,53,141,177,244,245,251,252,253,254.
- `tmp/pdfs/gsi-editorial-085-nist-sp800124r2.pdf`: 61 páginas, SHA256 `4f6c85849df515c712c80957a1bb9563167a001fc97e13d1302410c169b55c8f`. Lectura seleccionada/reutilizada: 1,2,8,25,26,27,28,29,30,31,32,33,35,36,42,44,45,46,54,55,56.
- `tmp/pdfs/gsi-editorial-083-itu-m2083-201509.pdf`: 21 páginas, SHA256 `cd4e6f1b2dc7bfdc8f2efcefcd3aa3fa2f1739ff69d9e839b2cc12ef06d8d46a`. Lectura seleccionada/reutilizada: 1,13,14.

En TS23.501, cuatro páginas adicionales141/177/244/245 se leen para sesión,DNN,QFI y equivalenciaAPN. El render244 muestra §5.9.6 en impresa243 y su continuación se lee enPDF245. Se reutilizan los tres renders NIST28/45/56 y el render IMT14 del mismo día, ya inspeccionados; no se presentan como nuevas lecturas completas. No se crea o modifica unPDF ni se convierten documentos aMarkdown.

RGPD se cita en su publicación originalDOUE desdeBOE para principios generales, sin dictamen de un tratamiento real o revisión jurídica integral. RFC4123 tiene carácter informativo y advertencia históricaIESG: respalda distinción de funciones, sin receta actual de despliegue. Referencias normativas de otra fuente no se dan por leídas automáticamente.

## Límites e incidencias de preparación

- Un acceso al cuerpo de RFC 7874 devolvióUnexpectedStatusCode; no se eludió una restricción. Repetir la misma URL permitió leer§3 con Opus y G.711. La ruta sin extensión redirige ainfo, no es un documento diferente.

- Dos primeras consultas web combinadas devolvieron salida truncada y no se contaron como lectura. Se abrieron por separado apartados pertinentes y se leyó elPDF original local para DNN. Los resultados de búsqueda solo localizaron§5.9.6; la comprobación procede del originalV18.12.0.

- Poppler avisó de fuentesSymbol/ArialUnicode al renderizar el originalETSI, terminó con0 y produjo una página legible inspeccionada. No se modifica el original, no hayOCR, descarga nueva, conversión documental o dependencia instalada.

- RFCEditor devolvió429 paraRFC5764; se leyó la copia pública primaria delIETFDatatracker, sin insistir sobre ese servidor. Una búsqueda auxiliar usó el nombre inexistente make_validation_editorial_085.py, terminó con1 y se corrigió localizando make_validation_085.py. No es fallo de la suite mantenida ni rechazo de revisión de permisos.

- Sin pruebas reales de 5G/UEM/llamadas, mediciones de continuidad, transcodificación, auditoría jurídica aplicada, revisión humana independiente o calibración. La simulación de aplicación y la ficha no sustituyen pruebas de producto.

Dos incidencias de acceso a fuente quedan documentadas: fallo transitorioRFC7874 y429 enRFC5764, con lectura efectiva posterior o copia primariaIETF. Una búsqueda auxiliar con ruta errónea y advertencias de fuentes del render no son fallos de pruebas mantenidas. No hubo rechazo de permisos. La precisión de localizadorDNN se corrigió antes del hash inicial. Salidas web truncadas no acreditan lectura.

No hay conversiones nuevas o pendientes de este lote, OCR, instalaciones o dependencias nuevas. Originales, borradores y entregas anteriores permanecen protegidos. No se ejecutan acciones de gestión, revocación o borrado que aparezcan en la documentación consultada.

## Métricas antes/después

| Señal | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 10 | 6 |
| Acierto primera máxima (%) | 55.0 | 30.0 |
| Ratio 1,5 a menos de 2 | 2 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 14 | 0 |
| Feedback correcto/incorrecto idéntico | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

Primera máxima pasa55→30% y correcta única más larga10→6. El ratio1,5–menos de2 pasa2→0 y feedback breve14→0. Los cuatro empates de máxima propuestos están en100(B/C97),047(B/C112),060(A/B110) y075(B/D119); la correcta no es la primera máxima en ninguno. No se presume ausencia de pistas o calidad por superar umbrales.

Primera mínima correcta:5/20; incluyendo empates de mínima:6/20. El máximo ratio inverso es92/76 en111; no se añade relleno para igualar una definición suficiente. Las seis correctas únicas más largas difieren de su distractor máximo en9–27 caracteres; máximo134/107 en105, conservada completa. Cinco de esas seis preguntas conservan todos sus textos y se justifican por sus distinciones de función;147 mantiene la respuesta de incidente y sustituye respuestas parciales. Se registran dimensiones y razones individuales.

No se cambian claves para equilibrar letras, ni se afirma calibración estadística. El30% de primera máxima sigue por encima del azar teórico de cuatro alternativas. La orientación de dificultad continúa pendiente de calibración. No hay revisiones posteriores al hash inicial; cualquier revisión deberá regenerar hashes y obtener aceptación propia.

## Validación y entrega

Resultados finales: **19 pruebas editoriales,108 JSON,21 esquemas,1.964 preguntas y19.251 controles de integridad correctos**. Ocho comandos finales con código0; documentación, referencias y progreso sincronizados. **El primer control de progreso devolvió1** porque el informe no incluía086; se conserva la salida inicial y se ejecutó scripts/editorial_progress.py --write (bc7994,código0). El control repetido y la integridad final pasan. Sin fallo de pruebas editoriales o cambios para eludir validadores.

Simulación en memoria: **20 manuales**,0IA y0oficiales. IDs, claves, estados y procedencia conservados; **60 justificaciones individuales** comprobadas,3 aceptaciones improcedentes rechazadas y2 barreras de regeneración verificadas. **359 archivos protegidos intactos**,12 borradores conservados y **186 enlaces locales existentes**. Catorce enunciados,dieciséis textos correctos y nueve preguntas completas conservados.

**Diez comprobaciones Chrome correctas**, sin desbordamiento a1280/390px; captura de continuidad080 inspeccionada.33 referencias con métodos y fechas explícitos;3 originalesPDF con hashes comprobados,4 renders reutilizados y1nuevo inspeccionado. Se registran advertencias de render, acceso a fuentes, búsqueda auxiliar errónea y actualización del progreso. Sin revisión posterior al hash inicial. El verificador auxiliar falló por consultar status, propiedad inexistente; se corrigió para comprobar is_active y validation_status del esquema real. No se cambiaron preguntas o pruebas mantenidas; fallo y reparación conservados.

Derivados iguales en contenido y fecha04-11 al inicio; frente aHEAD solo cambia fecha26-10→04-11. Bancos activos iguales aHEAD y202oficiales idénticas en bytes a la auditoría. Sin nuevas aceptaciones, aplicación, retirada, publicación, fusión o commit. No se repite recorridoHTTP de producto o laboratorio de movilidad/videoconferencia. **Cinco incidencias editoriales confirmadas activas**, incluida080, mantienen abierto el cierre junto con las1742decisiones humanas pendientes. Un resultado técnico correcto no acredita por sí solo respuesta única o calidad pedagógica.

Archivos creados: content/question-reviews/lote-086.json; docs/GSI_REVISION_LOTE_086.md; este informe; logs/gsi-editorial-086-preparation.json. Auxiliares de edición, preparación, comprobación, lectura y ficha en tmp/. Modificados: docs/GSI_MEJORA_TESTS.md y logs/gsi-editorial-progress.json; los validadores regeneran sus informes derivados. Sin cambios de lógica de aplicación, bancos, borradoresIA o aceptaciones históricas. La aplicación del lote se simula solo en memoria.

Para reproducir: `.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py`; con el mismo intérprete, scripts/validate_json.py, scripts/validate_questions.py, scripts/validate_documentation.py, scripts/validate_references.py, scripts/editorial_progress.py y scripts/validate_gsi_final.py. Ficha: `& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_086_browser.mjs`. Comprobación específica: tmp/validate_editorial_086.py. No reejecutar generadores que protegen salidas existentes.

Chrome ha comprobado la ficha literal a1280/390px con conexiones externas bloqueadas. No es nuevo recorridoHTTP de Entrenamiento, Simulacros, estadísticas o Refuerzo; la evidencia de producto del piloto está en [revalidación del30-10](../logs/gsi-editorial-001-revalidation-2026-10-30.json). Se distingue validación técnica de contenido inactivo, contraste documental y calidad editorial pendiente.

## Progreso y siguiente fase

20 aceptadas y aplicadas; **1700 propuestas pendientes**, **42 sin propuesta**, **1742 decisiones humanas pendientes**. Lotes002–086:113 incidenciasIA originales, otras674IA y913manuales. Incluido el piloto,1720IDs tienen ficha; tener propuesta no equivale a aprobación o resolución activa.

Las cinco incidencias activas confirmadas son MAN-GSI-P18-026(032), AI-GSI-B3-T04-004(054), AI-GSI-B3-T05-002(055), MAN-GSI-P19-098(085) y MAN-GSI-P19-080(086). Sus correcciones pendientes impiden el cierre editorial.

Siguiente fase: revisión del propietario de este hash y preparación de las siguientes preguntas de la cola con la misma rúbrica. Aplicar, retirar versiones activas o publicar requiere autorización del contenido y alcance exactos. No se crea commit, publicación o fusión de estas propuestas pendientes.
