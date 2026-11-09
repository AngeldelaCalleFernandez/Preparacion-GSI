# GSI-EDITORIAL-087 — revisión propuesta

Preparado: 2026-11-04. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `512e30bd72ded1d429cf38c8364d39ffec44440b822f88f797c472e056c2adcc`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P19-114

Decisión: pending_review · acción: revise.

Motivo: Conservar compromiso de compresión y correctaD; distractores próximos de evaluación parcial sin absolutos o negación de toda compatibilidad.

### Antes

¿Qué compromiso suele existir al usar mayor compresión de vídeo?

- A. Reduce siempre el trabajo tanto del codificador como del decodificador y no introduce latencia adicional.
- B. Disminuye el bitrate sin afectar a calidad, complejidad ni compatibilidad entre terminales y plataformas.
- C. Elimina la negociación de codecs porque cualquier receptor puede decodificar de forma nativa todo formato comprimido.
- D. Puede reducir bitrate a costa de más complejidad/CPU, latencia potencial y requisitos de compatibilidad/licencia. **(correcta)**

Explicación: No existe codec “mejor” universalmente; la plataforma y terminales importan.

### Propuesta

Al elegir una codificación de vídeo con mayor compresión, ¿qué compromiso debe valorarse?

- A. Elegir el menor bitrate como criterio suficiente, sin contrastar pérdida de detalle o fluidez en el receptor.
- B. Usar la tasa de compresión para deducir soporte nativo, sin comprobar perfiles o aceleración del terminal.
- C. Medir solo el tiempo de codificación, dando por equivalentes consumo de red y calidad entre configuraciones.
- D. Puede reducir bitrate a costa de más complejidad/CPU, latencia potencial y requisitos de compatibilidad/licencia. **(correcta)**

Explicación: La compresión se valora junto con calidad, tasa de datos, procesamiento, retardo y compatibilidad. Lograr una representación más eficiente puede exigir más recursos o decisiones de configuración; reducir bitrate también puede sacrificar detalle. No existe una regla de mayor compresión que siempre aumente o reduzca CPU y latencia: influyen codec, contenido, perfiles y aceleración. Los requisitos de licencia se comprueban cuando procedan; aquí no se resuelve una obligación jurídica concreta.

- Error A: Una tasa baja no basta para aceptar el resultado; puede haberse conseguido perdiendo detalle o fluidez necesarios para la comunicación.
- Error B: Compresión y capacidad de decodificación no son equivalentes: el receptor necesita soporte del formato, perfil y parámetros utilizados.
- Error C: El tiempo de codificación es relevante, pero no describe por sí solo la tasa transmitida, la calidad o el coste de decodificación del receptor.

- [Mozilla MDN: Web video codec guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs) · Introducción; Factors affecting the encoded video; Choosing a video codec; recomendaciones de codificación externa: calidad,tamaño,complejidad y compatibilidad · versión: HTML comprobado04-11-2026. Documentación del ecosistema de navegador; se excluyen tablas de soporte, rankings, previsiones y dictámenes jurídicos sobre licencias. Mayor compresión no obliga siempre a mayorCPU o retardo: depende de implementación y configuración. · comprobado: 2026-11-04
- [IETF RFC7742: WebRTC Video Processing and Codec Requirements](https://www.rfc-editor.org/rfc/rfc7742.html) · §5 Mandatory-to-Implement Video Codec; §6.1 VP8 y §6.2 H.264, parámetros de codificación/recepción · versión: Marzo2016, HTML comprobado04-11-2026. Ejemplos de formatos y compatibilidad; implementar no es usar ambos en cada sesión. No se atribuyen cuotas universales de calidad,bitrate o ausencia de pérdidas. · comprobado: 2026-11-04

Partida: `afaa7ccfa1b3f2d01464835712ae6057ec734964bc33d202f17d54662671aeaa` · propuesta: `e876bb531e0c3ee1734b9072511e129255e360f4b9599cd97fc323eeaab5e2f3`

## MAN-GSI-P19-115

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa MCU y claveA; matizar MCU clásica de composición y variantes, sin atribuir mezcla a cualquier MCU.

### Antes

¿Qué es una MCU en videoconferencia?

- A. Una unidad multipunto que puede recibir, decodificar/mezclar/componer y volver a codificar medios. **(correcta)**
- B. Una SFU que reenvía selectivamente flujos codificados entre participantes sin decodificarlos ni componer una imagen común.
- C. Un servidor TURN que retransmite paquetes cuando no hay conectividad directa, sin mezclar o volver a codificar los medios.
- D. Una PBX que ofrece lógica y funciones de telefonía, pero no realiza necesariamente composición audiovisual multipunto.

Explicación: MCU centraliza composición y puede simplificar clientes a costa de recursos/latencia de servidor.

### Propuesta

¿Qué es una MCU en videoconferencia?

- A. Una unidad multipunto que puede recibir, decodificar/mezclar/componer y volver a codificar medios. **(correcta)**
- B. Una SFU que reenvía selectivamente flujos codificados entre participantes sin decodificarlos ni componer una imagen común.
- C. Un servidor TURN que retransmite paquetes cuando no hay conectividad directa, sin mezclar o volver a codificar los medios.
- D. Una PBX que ofrece lógica y funciones de telefonía, pero no realiza necesariamente composición audiovisual multipunto.

Explicación: En una MCU clásica de composición, el servidor recibe varios medios, los reconstruye, mezcla audio o compone vídeo y vuelve a codificar la salida. Esto puede simplificar el procesamiento del cliente a costa de recursos y retardo del servidor. MCU es una familia funcional más amplia: existen diseños de conmutación y otras variantes. El enunciado dice que puede realizar estas operaciones, sin convertir la mezcla en una obligación de cualquier equipo llamado MCU.

- Error B: Reenviar selectivamente flujos codificados sin crear una composición audiovisual caracteriza una SFU; no describe el procesamiento de una MCU clásica de mezcla.
- Error C: TURN proporciona un relay de paquetes para conectividad; no define la función de decodificar, componer y recodificar una conferencia multipunto.
- Error D: UnaPBX ofrece funciones de telefonía; puede integrarse con servicios de conferencia, pero esa etiqueta no define por sí sola composición audiovisual multipunto.

- [IETF RFC7667: RTP Topologies](https://www.rfc-editor.org/rfc/rfc7667.html) · §3.6.1 Media-Mixing Mixer; §3.7 Selective Forwarding Middlebox, especialmente distribución y composición en cliente · versión: Informational, noviembre2015, HTML comprobado04-11-2026. MCU clásica de composición frente a reenvío selectivoSFU/SFM; no todas lasMCU son mezcladores ni todo productoSFU excluye módulos adicionales. Coste,retardo y escala dependen del diseño. · comprobado: 2026-11-04
- [IETF RFC8656: Traversal Using Relays around NAT](https://www.rfc-editor.org/rfc/rfc8656.html) · Abstract y §1 Introduction: servidor intermediario, dirección relayed y relación con ICE · versión: Febrero2020, sustituyeRFC5766/6156, HTML comprobado04-11-2026. Relay útil por restricciones de conectividad o política/privacidad; no garantía universal de paso o cifrado extremo a extremo por usar elrelay. · comprobado: 2026-11-04
- [Twilio: What is a Private Branch Exchange?](https://www.twilio.com/docs/glossary/what-is-pbx-private-branch-exchange) · PBX Basics; Many Functions; IP-PBX: llamadas internas, entrantes/salientes y conmutación · versión: Glosario del proveedor, HTML comprobado el 04-11-2026. Función de telefonía, sin recomendar contratación ni universalizar que el acceso de datos y voz use una única línea física. · comprobado: 2026-11-04

Partida: `dfc8a252a136d45c8e979f2ab346a9e6389576a96a2543e0eca3bd1933a44bb4` · propuesta: `ba4ddf60cc40f1241f664ae8b55ca3881c8a8fc5929a317c872847e2b0101086`

## MAN-GSI-P19-116

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa SFU y claveC; desarrollar responsabilidad del cliente y coste de reenvío sin afirmar escala o retardo garantizados.

### Antes

¿Qué es una SFU?

- A. Una unidad multipunto que decodifica, compone y vuelve a codificar los vídeos para entregar una mezcla común.
- B. Un servidor que coordina la señalización y el establecimiento de sesiones, pero no reenvía los flujos multimedia.
- C. Una unidad de reenvío selectivo que distribuye streams/capas sin mezclar y recodificar todo como una MCU clásica. **(correcta)**
- D. Un relay TURN que transporta paquetes cuando los participantes no consiguen conectividad directa mediante ICE.

Explicación: SFU escala bien en muchas arquitecturas WebRTC y desplaza composición hacia clientes.

### Propuesta

¿Qué es una SFU?

- A. Una unidad multipunto que decodifica, compone y vuelve a codificar los vídeos para entregar una mezcla común.
- B. Un servidor que coordina la señalización y el establecimiento de sesiones, pero no reenvía los flujos multimedia.
- C. Una unidad de reenvío selectivo que distribuye streams/capas sin mezclar y recodificar todo como una MCU clásica. **(correcta)**
- D. Un relay TURN que transporta paquetes cuando los participantes no consiguen conectividad directa mediante ICE.

Explicación: Una SFU selecciona y reenvía flujos o partes compatibles de codificaciones escalables hacia cada receptor. En su función clásica no reconstruye todos los medios para producir una mezcla recodificada común. El cliente suele recibir, decodificar y disponer varios medios; cambian sus recursos y el tráfico descendente. Reenviar no es coste cero: hay selección, control y transporte, y un producto puede combinar funciones adicionales.

- Error A: Decodificar, componer y recodificar una salida corresponde a la función de MCU clásica de mezcla; es distinta del reenvío selectivo.
- Error B: La señalización coordina la sesión; una SFU interviene en la distribución de medios, además de los mecanismos de control que utilice.
- Error D: TURN resuelve relay de conectividad y no selecciona por definición qué fuentes o capas necesita cada participante de una conferencia.

- [IETF RFC7667: RTP Topologies](https://www.rfc-editor.org/rfc/rfc7667.html) · §3.6.1 Media-Mixing Mixer; §3.7 Selective Forwarding Middlebox, especialmente distribución y composición en cliente · versión: Informational, noviembre2015, HTML comprobado04-11-2026. MCU clásica de composición frente a reenvío selectivoSFU/SFM; no todas lasMCU son mezcladores ni todo productoSFU excluye módulos adicionales. Coste,retardo y escala dependen del diseño. · comprobado: 2026-11-04
- [IETF RFC8656: Traversal Using Relays around NAT](https://www.rfc-editor.org/rfc/rfc8656.html) · Abstract y §1 Introduction: servidor intermediario, dirección relayed y relación con ICE · versión: Febrero2020, sustituyeRFC5766/6156, HTML comprobado04-11-2026. Relay útil por restricciones de conectividad o política/privacidad; no garantía universal de paso o cifrado extremo a extremo por usar elrelay. · comprobado: 2026-11-04

Partida: `f99ff05d67e80a782dd525c60aa5ee66d6f1eab49499f9d12ce7f1a346ab64c9` · propuesta: `28cebd776d7c948e0bda66c04de3489982891a9bc0ff9cdcb15d6d7090a7cfae`

## MAN-GSI-P19-117

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación MCU/SFU y correctaA; precisar MCU de composición y sustituir acceso radio por confusión entre señalización, transcodificación y reenvío.

### Antes

¿Qué diferencia esencial hay entre MCU y SFU?

- A. MCU mezcla/transcodifica más en servidor; SFU reenvía selectivamente streams y deja más composición al cliente. **(correcta)**
- B. La MCU reenvía streams sin procesarlos, mientras la SFU decodifica y compone una única mezcla para los participantes.
- C. La SFU es un codec escalable y la MCU es el protocolo utilizado para negociar sus capas mediante señalización.
- D. La diferencia reside en el acceso radio: MCU requiere una red móvil y SFU se utiliza en conexiones fijas.

Explicación: La elección afecta CPU servidor, ancho de banda, terminales, layouts y escala.

### Propuesta

Al comparar una MCU clásica de composición con una SFU, ¿qué diferencia esencial hay?

- A. MCU mezcla/transcodifica más en servidor; SFU reenvía selectivamente streams y deja más composición al cliente. **(correcta)**
- B. La MCU reenvía streams sin procesarlos, mientras la SFU decodifica y compone una única mezcla para los participantes.
- C. La SFU es un codec escalable y la MCU es el protocolo utilizado para negociar sus capas mediante señalización.
- D. La MCU adapta solo la señalización; la SFU cambia el codec de cada flujo para ajustarlo al receptor.

Explicación: Comparando esas funciones clásicas, la MCU procesa y compone medios en servidor y la SFU selecciona qué flujos o capas reenvía para que el cliente los decodifique y presente. La decisión afecta procesamiento de ambos lados, ancho de banda, composiciones y escala. Es una distinción de arquitectura, no de acceso fijo o móvil. No impide combinar módulos de transcodificación, mezcla o reenvío en una solución real.

- Error B: Invierte los papeles de la comparación: la MCU de composición procesa la mezcla; la SFU clásica no entrega por definición una mezcla audiovisual única.
- Error C: SFU y MCU son funciones o componentes de conferencia; no son respectivamente un codec escalable y su protocolo de negociación de capas.
- Error D: La MCU de composición sí procesa medios; cambiar el codec por receptor exige transcodificación y no define el simple reenvío selectivo de una SFU.

- [IETF RFC7667: RTP Topologies](https://www.rfc-editor.org/rfc/rfc7667.html) · §3.6.1 Media-Mixing Mixer; §3.7 Selective Forwarding Middlebox, especialmente distribución y composición en cliente · versión: Informational, noviembre2015, HTML comprobado04-11-2026. MCU clásica de composición frente a reenvío selectivoSFU/SFM; no todas lasMCU son mezcladores ni todo productoSFU excluye módulos adicionales. Coste,retardo y escala dependen del diseño. · comprobado: 2026-11-04
- [IETF RFC6190: RTP Payload Format for Scalable Video Coding](https://www.rfc-editor.org/rfc/rfc6190.html) · §1 Introduction y §1.1.1 Overview: fidelidad espacial,temporal/calidad y dependencias de capas · versión: Mayo2011, HTML comprobado04-11-2026. Ejemplo primarioH.264/SVC para el concepto general; no se impone a toda codificación escalable su sintaxis, un únicoRTPstream o decodificación independiente de cada capa. · comprobado: 2026-11-04

Partida: `4b9e817c84b480680cf7c6685c83a463b3f6214df64f1f92fe5fbf8d4a15b22b` · propuesta: `e7686aca1341632de360d64b0c11cb12d0fce965ef144d2ff9ea533d77a654ba`

## MAN-GSI-P19-118

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa de simulcast y claveC; distinguir capas, transcodificación y FEC y explicar costes de emisor.

### Antes

¿Qué es simulcast en videoconferencia?

- A. Codificar un vídeo en capas dependientes para adaptar su calidad enviando o descartando capas del mismo flujo.
- B. Decodificar y volver a codificar un flujo para cambiar su codec, resolución o tasa de bits antes de reenviarlo.
- C. Enviar varias versiones simultáneas del mismo vídeo a distintas resoluciones/bitrates para selección adaptativa. **(correcta)**
- D. Añadir información redundante al flujo para recuperar determinadas pérdidas de paquetes sin solicitar retransmisión.

Explicación: Simulcast puede ayudar a SFU a seleccionar calidad adecuada por receptor.

### Propuesta

¿Qué es simulcast en videoconferencia?

- A. Codificar un vídeo en capas dependientes para adaptar su calidad enviando o descartando capas del mismo flujo.
- B. Decodificar y volver a codificar un flujo para cambiar su codec, resolución o tasa de bits antes de reenviarlo.
- C. Enviar varias versiones simultáneas del mismo vídeo a distintas resoluciones/bitrates para selección adaptativa. **(correcta)**
- D. Añadir información redundante al flujo para recuperar determinadas pérdidas de paquetes sin solicitar retransmisión.

Explicación: Simulcast transmite varias versiones codificadas de la misma fuente, por ejemplo con distinta resolución o tasa de datos. Una SFU puede escoger una versión apropiada para cada receptor sin transcodificarla en ese punto. No es lo mismo que crear capas dependientes dentro de una codificación escalable. Las versiones simultáneas consumen procesamiento y subida del emisor; la adaptación se diseña según recursos y negociación.

- Error A: La descripción de capas dependientes corresponde a codificación escalable como SVC; simulcast ofrece versiones codificadas diferentes de la fuente.
- Error B: Decodificar y recodificar para cambiar representación es transcodificar; no define el envío simultáneo de varias versiones desde la fuente.
- Error D: Añadir redundancia para recuperar información perdida corresponde a FEC; no describe la distribución de representaciones de distinta calidad.

- [IETF RFC8853: Using Simulcast in SDP and RTP Sessions](https://www.rfc-editor.org/rfc/rfc8853.html) · Abstract; §3.1 Reaching a Diverse Set of Receivers: versiones de una fuente, sampling/bitrate y coste de subida/procesamiento · versión: Enero2021, HTML comprobado04-11-2026. Versiones codificadas de la misma fuente para receptores heterogéneos; no una sesión para cada cámara ni adaptación sin coste. · comprobado: 2026-11-04
- [IETF RFC7667: RTP Topologies](https://www.rfc-editor.org/rfc/rfc7667.html) · §3.6.1 Media-Mixing Mixer; §3.7 Selective Forwarding Middlebox, especialmente distribución y composición en cliente · versión: Informational, noviembre2015, HTML comprobado04-11-2026. MCU clásica de composición frente a reenvío selectivoSFU/SFM; no todas lasMCU son mezcladores ni todo productoSFU excluye módulos adicionales. Coste,retardo y escala dependen del diseño. · comprobado: 2026-11-04
- [IETF RFC6190: RTP Payload Format for Scalable Video Coding](https://www.rfc-editor.org/rfc/rfc6190.html) · §1 Introduction y §1.1.1 Overview: fidelidad espacial,temporal/calidad y dependencias de capas · versión: Mayo2011, HTML comprobado04-11-2026. Ejemplo primarioH.264/SVC para el concepto general; no se impone a toda codificación escalable su sintaxis, un únicoRTPstream o decodificación independiente de cada capa. · comprobado: 2026-11-04
- [IETF RFC8854: WebRTC Forward Error Correction Requirements](https://www.rfc-editor.org/rfc/rfc8854.html) · §1 Introduction y §3 Types ofFEC: redundancia y recuperación de información · versión: Enero2021, HTML comprobado04-11-2026. Explica diferencia frente a capas,simulcast y recodificación; no se promete recuperar toda pérdida ni se prescriben tasas universales de redundancia. · comprobado: 2026-11-04

Partida: `2912b6479b879d8afa014842ebbe5e1007c96546e14583066efa4feed83e06f7` · propuesta: `52664762cc0e2589bfb6b42c6583569938710359baf5eafddf9c320483fb5204`

## MAN-GSI-P19-119

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completa SVC y claveC; explicar dependencias y dimensiones sin imponer sintaxis H.264 o un únicoRTP stream a toda escalabilidad.

### Antes

¿Qué es SVC conceptualmente?

- A. Envío simultáneo de varias codificaciones independientes del mismo vídeo con resoluciones o bitrates distintos.
- B. Decodificación y recodificación de un flujo para cambiar su codec, resolución o tasa de bits.
- C. Codificación escalable en capas que permite adaptar calidad/bitrate seleccionando capas del stream. **(correcta)**
- D. Adición de información redundante al flujo para recuperar determinadas pérdidas sin retransmisión.

Explicación: SVC y simulcast son técnicas distintas para adaptación de medios.

### Propuesta

¿Qué es SVC conceptualmente?

- A. Envío simultáneo de varias codificaciones independientes del mismo vídeo con resoluciones o bitrates distintos.
- B. Decodificación y recodificación de un flujo para cambiar su codec, resolución o tasa de bits.
- C. Codificación escalable en capas que permite adaptar calidad/bitrate seleccionando capas del stream. **(correcta)**
- D. Adición de información redundante al flujo para recuperar determinadas pérdidas sin retransmisión.

Explicación: SVC permite ofrecer distintos niveles de representación seleccionando componentes de una codificación escalable. En H.264/SVC pueden variar resolución, frecuencia de imágenes y calidad. Deben respetarse las dependencias: para decodificar un componente se necesitan aquellos de los que depende. No se presupone una única sesión RTP ni que toda capa pueda reproducirse sola. Simulcast utiliza versiones codificadas separadas de la fuente.

- Error A: Varias codificaciones independientes de la misma fuente describen simulcast; no la selección de componentes de una representación escalable con dependencias.
- Error B: Reconstruir y volver a codificar el flujo es transcodificación; seleccionar componentes compatibles de SVC no requiere por definición ese procesamiento completo.
- Error D: La redundancia para recuperar información perdida es FEC; las capas de escalabilidad permiten seleccionar representación y no equivalen a información de reparación.

- [IETF RFC6190: RTP Payload Format for Scalable Video Coding](https://www.rfc-editor.org/rfc/rfc6190.html) · §1 Introduction y §1.1.1 Overview: fidelidad espacial,temporal/calidad y dependencias de capas · versión: Mayo2011, HTML comprobado04-11-2026. Ejemplo primarioH.264/SVC para el concepto general; no se impone a toda codificación escalable su sintaxis, un únicoRTPstream o decodificación independiente de cada capa. · comprobado: 2026-11-04
- [IETF RFC8853: Using Simulcast in SDP and RTP Sessions](https://www.rfc-editor.org/rfc/rfc8853.html) · Abstract; §3.1 Reaching a Diverse Set of Receivers: versiones de una fuente, sampling/bitrate y coste de subida/procesamiento · versión: Enero2021, HTML comprobado04-11-2026. Versiones codificadas de la misma fuente para receptores heterogéneos; no una sesión para cada cámara ni adaptación sin coste. · comprobado: 2026-11-04
- [IETF RFC8854: WebRTC Forward Error Correction Requirements](https://www.rfc-editor.org/rfc/rfc8854.html) · §1 Introduction y §3 Types ofFEC: redundancia y recuperación de información · versión: Enero2021, HTML comprobado04-11-2026. Explica diferencia frente a capas,simulcast y recodificación; no se promete recuperar toda pérdida ni se prescriben tasas universales de redundancia. · comprobado: 2026-11-04

Partida: `71f8d9230f59eb8152206a32c11bb5ba0545513dd29dcf7fc1698674f7c96e1f` · propuesta: `9ef7a53507f50e7781954bda261080c75e19817762f3c1651d261ee7944e8342`

## MAN-GSI-P19-120

Decisión: pending_review · acción: revise.

Motivo: Conservar caso NAT y correctaB; sustituir distractores ajenos por STUN/SDP/SFU y matizar política ICE frente a orden obligatorio de intentos.

### Antes

Un navegador no logra conexión P2P porque ambos extremos están tras NAT restrictivo. ¿Qué recurso es el fallback típico?

- A. Un sitemap.
- B. Un servidor TURN como relay, coordinado normalmente mediante ICE. **(correcta)**
- C. Un S-CSCF como relay obligatorio de WebRTC.
- D. Un servidor NTP.

Explicación: ICE intenta rutas directas y TURN permite comunicación relayed cuando fallan.

### Propuesta

Un navegador no logra conexión P2P porque ambos extremos están tras NAT restrictivo. ¿Qué recurso es el fallback típico?

- A. Un servidor STUN para conocer el mapeo, sin relay de medios.
- B. Un servidor TURN como relay, coordinado normalmente mediante ICE. **(correcta)**
- C. Un intercambio SDP que repite los candidatos directos inviables.
- D. Una SFU que selecciona fuentes sin resolver la conectividad NAT.

Explicación: TURN proporciona una dirección de retransmisión en un servidor que intercambia paquetes con los extremos; ICE puede incluir y comprobar esos candidatos. Es el recurso típico cuando no se obtiene una ruta directa utilizable. El relay debe ser accesible y autorizado, y añade tránsito y consumo de recursos. ICE no está obligado a esperar que fallen todas las rutas directas: una política puede priorizar o exigir relay.

- Error A: STUN permite conocer un mapeo o realizar comprobaciones; si no existe ruta directa viable, no proporciona por sí solo un relay para los medios.
- Error C: Describir de nuevo las mismas direcciones no crea conectividad inexistente; se necesita una ruta viable, como el candidato de retransmisión autorizado.
- Error D: Seleccionar fuentes de conferencia no resuelve por sí solo restricciones NAT; una SFU puede necesitar mecanismos de conectividad adicionales, entre ellos TURN.

- [IETF RFC8656: Traversal Using Relays around NAT](https://www.rfc-editor.org/rfc/rfc8656.html) · Abstract y §1 Introduction: servidor intermediario, dirección relayed y relación con ICE · versión: Febrero2020, sustituyeRFC5766/6156, HTML comprobado04-11-2026. Relay útil por restricciones de conectividad o política/privacidad; no garantía universal de paso o cifrado extremo a extremo por usar elrelay. · comprobado: 2026-11-04
- [IETF RFC8445: Interactive Connectivity Establishment](https://www.rfc-editor.org/rfc/rfc8445.html) · §1 Introduction; §2 Overview of ICE, candidatos y comprobaciones de pares; §4 Terminology · versión: Julio2018, sustituyeRFC5245, HTML comprobado04-11-2026. ICE utilizaSTUN yTURN; se contrastan candidatos host/server-reflexive/relayed sin prometer conectividad bajo cualquier política de red. · comprobado: 2026-11-04
- [IETF RFC8489: Session Traversal Utilities for NAT](https://www.rfc-editor.org/rfc/rfc8489.html) · Abstract; §1 Introduction; §2 Overview of Operation, Binding y dirección reflejada · versión: Febrero2020, sustituyeRFC5389, HTML comprobado04-11-2026. Herramienta para mapeos, comprobaciones y mantenimiento; no solución completa por sí sola ni relay de medios básico. Dirección observada respecto del servidor, no siempreIP pública única. · comprobado: 2026-11-04
- [IETF RFC7667: RTP Topologies](https://www.rfc-editor.org/rfc/rfc7667.html) · §3.6.1 Media-Mixing Mixer; §3.7 Selective Forwarding Middlebox, especialmente distribución y composición en cliente · versión: Informational, noviembre2015, HTML comprobado04-11-2026. MCU clásica de composición frente a reenvío selectivoSFU/SFM; no todas lasMCU son mezcladores ni todo productoSFU excluye módulos adicionales. Coste,retardo y escala dependen del diseño. · comprobado: 2026-11-04

Partida: `52d37350d9b0135b79492dcc076dc7d48d04da5bef71b412a45eb8eded0e5879` · propuesta: `7262ea48c6681b3d200fd18ca95b4ab63604acf2c059159dd13a4c62986d64c0`

## MAN-GSI-P19-121

Decisión: pending_review · acción: revise.

Motivo: Conservar variables de dimensionamiento y correctaD; comparar estimaciones parciales próximas sin usar superficie física como distractor ajeno.

### Antes

¿Qué variables deben incluirse al dimensionar ancho de banda de videoconferencia?

- A. El número total de usuarios registrados, aunque no coincidan en sesiones simultáneas.
- B. La superficie del edificio y el número de salas, sin estimar flujos concurrentes.
- C. La resolución máxima de una cámara tomada aisladamente, sin bitrate ni simultaneidad.
- D. Bitrate por flujo, concurrencia real, direcciones subida/bajada, overhead, presentaciones y margen. **(correcta)**

Explicación: Dimensionar por sesiones simultáneas evita tanto infradimensionar como multiplicar por usuarios que nunca coinciden.

### Propuesta

¿Qué variables deben incluirse al dimensionar ancho de banda de videoconferencia?

- A. Multiplicar las cuentas registradas por un bitrate fijo, sin modelar las actividades concurrentes.
- B. Estimar la bajada según cámara y suponer que el perfil de subida es equivalente en cualquier reunión.
- C. Sumar los flujos de cámara, excluyendo audio, presentaciones y cabeceras de la estimación del acceso.
- D. Bitrate por flujo, concurrencia real, direcciones subida/bajada, overhead, presentaciones y margen. **(correcta)**

Explicación: El dimensionamiento modela actividades simultáneas y topología: flujos que se envían y reciben, bitrates previstos, contenido compartido y sobrecargas, con un margen justificado. Subida y bajada pueden ser distintas según disposición de vídeos y arquitectura. Las cuentas o cámaras instaladas no describen por sí solas el tráfico concurrente. La capacidad contratada debe contrastarse con medidas y objetivos, sin tomar un perfil comercial de una plataforma como cifra universal.

- Error A: El número de cuentas no determina cuántas actividades coinciden; un bitrate fijo sin escenario puede sobreestimar o infravalorar la demanda.
- Error B: Los flujos ascendentes y descendentes pueden diferir en número y calidad; conocer una dirección no justifica asumir el mismo tráfico en la otra.
- Error C: Audio, contenido compartido y cabeceras también consumen recursos; excluirlos sin verificar su peso deja incompleta la estimación del acceso.

- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04
- [Microsoft Learn: Use the Network planner for Teams](https://learn.microsoft.com/en-us/microsoftteams/network-planner) · Introducción; Build your plan; Create a report: ubicaciones,actividad/perfiles y capacidad de red · versión: HTML actualizado26-05-2026, comprobado04-11-2026. Respalda modelar uso y topología; no se ejecuta herramienta, crea plan externo o extrapolan porcentajes/personas de ejemplo. Los números de122/123 son datos del enunciado, no tasas prescritas porMicrosoft. · comprobado: 2026-11-04
- [IETF RFC7667: RTP Topologies](https://www.rfc-editor.org/rfc/rfc7667.html) · §3.6.1 Media-Mixing Mixer; §3.7 Selective Forwarding Middlebox, especialmente distribución y composición en cliente · versión: Informational, noviembre2015, HTML comprobado04-11-2026. MCU clásica de composición frente a reenvío selectivoSFU/SFM; no todas lasMCU son mezcladores ni todo productoSFU excluye módulos adicionales. Coste,retardo y escala dependen del diseño. · comprobado: 2026-11-04

Partida: `98adabc5b951faa530be7942b29a063c7a9259d0ef2c3edf6da58c15fc43ed94` · propuesta: `aecc7b62d1f8f4ff2a5944b8413ec754a1ae08aa9db4deaa98667f41d915b547`

## MAN-GSI-P19-122

Decisión: pending_review · acción: revise.

Motivo: Conservar cálculo completo20×3 y claveC; justificar errores de suma y factoresdiez, con comprobación aritmética reproducible.

### Antes

Si 20 salas simultáneas envían 3 Mb/s cada una hacia cloud, ¿qué subida agregada aproximada requieren antes de margen?

- A. 6 Mb/s.
- B. 23 Mb/s.
- C. 60 Mb/s. **(correcta)**
- D. 600 Mb/s.

Explicación: 20 × 3 Mb/s = 60 Mb/s de subida, antes de overhead y margen.

### Propuesta

Si 20 salas simultáneas envían 3 Mb/s cada una hacia cloud, ¿qué subida agregada aproximada requieren antes de margen?

- A. 6 Mb/s.
- B. 23 Mb/s.
- C. 60 Mb/s. **(correcta)**
- D. 600 Mb/s.

Explicación: Son veinte envíos simultáneos de3 Mb/s cada uno en la dirección de subida: veinte por tres da60 Mb/s. El dato es tasa agregada, no volumen de almacenamiento ni megabytes por segundo. Se mantiene el alcance antes de sobrecargas y margen del enunciado; no se duplica el resultado por existir también tráfico descendente, que debe dimensionarse aparte según sus flujos.

- Error A: Seis megabits por segundo es diez veces menor que la suma de veinte flujos de tres; omite un orden de magnitud en la agregación.
- Error B: Veintitrés resulta de sumar veinte y tres, pero se multiplican el número de flujos y la tasa de cada uno; sus unidades tienen papeles distintos.
- Error D: Seiscientos megabits por segundo es diez veces la tasa solicitada; no se justifica ese factor extra antes de margen o sobrecarga.

- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04
- [Microsoft Learn: Use the Network planner for Teams](https://learn.microsoft.com/en-us/microsoftteams/network-planner) · Introducción; Build your plan; Create a report: ubicaciones,actividad/perfiles y capacidad de red · versión: HTML actualizado26-05-2026, comprobado04-11-2026. Respalda modelar uso y topología; no se ejecuta herramienta, crea plan externo o extrapolan porcentajes/personas de ejemplo. Los números de122/123 son datos del enunciado, no tasas prescritas porMicrosoft. · comprobado: 2026-11-04

Partida: `7a5206be55a4c02f7fb8d7dc02265841318676ab4e4c26cd05d2d753d646fa93` · propuesta: `6a8f72eab589663b72b8406c7ef57e730414e71436668d762776529e62ef62eb`

## MAN-GSI-P19-123

Decisión: pending_review · acción: revise.

Motivo: Conservar cálculo completo de margen y claveA; distinguir porcentaje añadido sobre tráfico de porcentaje libre sobre capacidad final.

### Antes

Si a 60 Mb/s de tráfico estimado se añade un 30% de margen, ¿qué capacidad resulta aproximadamente?

- A. 78 Mb/s. **(correcta)**
- B. 63 Mb/s.
- C. 90 Mb/s.
- D. 180 Mb/s.

Explicación: 60 × 1,30 = 78 Mb/s.

### Propuesta

Si a 60 Mb/s de tráfico estimado se añade un 30% de margen, ¿qué capacidad resulta aproximadamente?

- A. 78 Mb/s. **(correcta)**
- B. 63 Mb/s.
- C. 90 Mb/s.
- D. 180 Mb/s.

Explicación: Añadir un treinta por ciento al tráfico base significa multiplicar60 Mb/s por1,30. El incremento es18 Mb/s y la capacidad resultante78 Mb/s. Es el margen dado en este ejercicio, no una recomendación universal de diseño. Es distinto de exigir treinta por ciento de capacidad final libre, que utilizaría otra base de cálculo. No se transforma un porcentaje en una cantidad fija de megabits por segundo.

- Error B: Sesenta y tres añade tres megabits por segundo; el treinta por ciento de sesenta son dieciocho, no tres.
- Error C: Noventa supone añadir treinta megabits por segundo, un cincuenta por ciento de la base; no el treinta por ciento indicado.
- Error D: Ciento ochenta equivale a triplicar la base; el aumento sería del doscientos por ciento, en vez del treinta por ciento solicitado.

- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04
- [Microsoft Learn: Use the Network planner for Teams](https://learn.microsoft.com/en-us/microsoftteams/network-planner) · Introducción; Build your plan; Create a report: ubicaciones,actividad/perfiles y capacidad de red · versión: HTML actualizado26-05-2026, comprobado04-11-2026. Respalda modelar uso y topología; no se ejecuta herramienta, crea plan externo o extrapolan porcentajes/personas de ejemplo. Los números de122/123 son datos del enunciado, no tasas prescritas porMicrosoft. · comprobado: 2026-11-04

Partida: `cd7d18eb4b1e8ef04b107916230bfb5d5f18a3a5e6dc86a4e1b85d5fa1c3ac95` · propuesta: `0db98dbb03e71bd0c1c75a60f4c1d4f51504711a73ef262322e996f04d2a2997`

## MAN-GSI-P19-125

Decisión: pending_review · acción: revise.

Motivo: Conservar definición completa de latencia y claveA; precisar puntos de medida, retardo de medios y asimetríaRTT.

### Antes

¿Qué es latencia extremo a extremo?

- A. El tiempo total que tarda la información desde captura/origen hasta presentación/destino a través de toda la cadena. **(correcta)**
- B. La variación estadística del intervalo de llegada entre paquetes sucesivos, sin considerar su retardo total de origen a destino.
- C. El tiempo de ida y vuelta de un mensaje y su respuesta, que equivale siempre al doble exacto de la latencia extremo a extremo.
- D. El tiempo necesario para serializar un paquete en un único enlace, excluyendo propagación, colas y procesamiento del resto de la cadena.

Explicación: Latencia incluye procesamiento, colas, transmisión y propagación.

### Propuesta

¿Qué es latencia extremo a extremo?

- A. El tiempo total que tarda la información desde captura/origen hasta presentación/destino a través de toda la cadena. **(correcta)**
- B. La variación estadística del intervalo de llegada entre paquetes sucesivos, sin considerar su retardo total de origen a destino.
- C. El tiempo de ida y vuelta de un mensaje y su respuesta, que equivale siempre al doble exacto de la latencia extremo a extremo.
- D. El tiempo necesario para serializar un paquete en un único enlace, excluyendo propagación, colas y procesamiento del resto de la cadena.

Explicación: En una comunicación audiovisual, la latencia extremo a extremo abarca el tiempo desde el origen o captura hasta la presentación: procesamiento, codificación, esperas de buffer, red y reproducción según los puntos elegidos. El retardo IP es solo una parte si se mide entre otros extremos. RTT cubre ida y vuelta y no se divide exactamente por dos sin suponer simetría y aclarar procesamiento; jitter describe variación, no todo ese tiempo.

- Error B: La variación de retardo caracteriza jitter o delay variation; no el tiempo total de un contenido desde origen hasta presentación.
- Error C: RTT suma ambos sentidos y posibles tiempos de respuesta; rutas y colas pueden ser asimétricas, así que no equivale siempre al doble exacto del retardo de ida.
- Error D: La serialización en un enlace aporta parte del tiempo; faltan propagación, colas, procesamiento y los demás tramos hasta los extremos definidos.

- [IETF RFC7679: A One-Way Delay Metric for IPPM](https://datatracker.ietf.org/doc/html/rfc7679) · §1.1 Motivation: retardo de ida,RTT y asimetría de rutas/colas · versión: STD81, enero2016, sustituye2679; HTML comprobado04-11-2026 en copia primariaIETFDatatracker tras429 deRFCEditor. MétricaIP, no medida completa de captura a presentación o reglaRTT/2; se complementa con cadena de medios y buffer. · comprobado: 2026-11-04
- [IETF RFC5481: Packet Delay Variation Applicability Statement](https://www.rfc-editor.org/rfc/rfc5481.html) · §1 Introduction y §1.2: delay variation,IPDV/PDV, retardo y umbral de pérdida · versión: Informational, marzo2009, HTML comprobado04-11-2026. Distingue familia de métricas, no una fórmula universal dejitter ni equivalencia exacta conRTT o intervalo bruto de recepción. · comprobado: 2026-11-04
- [IETF: RFC7005, RTCP XR Report Block for De-Jitter Buffer Metric Reporting](https://www.rfc-editor.org/rfc/rfc7005.html) · §3 De-Jitter Buffer Operation; §3.2 fixed y §3.3 adaptive: retención, reproducción y descartes · versión: Septiembre de 2013, HTML comprobado el 04-11-2026. Compromiso de variación/retardo; no corrige pérdidas físicas ni autoriza aumentar buffer sin límite. · comprobado: 2026-11-04
- [IETF RFC7667: RTP Topologies](https://www.rfc-editor.org/rfc/rfc7667.html) · §3.6.1 Media-Mixing Mixer; §3.7 Selective Forwarding Middlebox, especialmente distribución y composición en cliente · versión: Informational, noviembre2015, HTML comprobado04-11-2026. MCU clásica de composición frente a reenvío selectivoSFU/SFM; no todas lasMCU son mezcladores ni todo productoSFU excluye módulos adicionales. Coste,retardo y escala dependen del diseño. · comprobado: 2026-11-04

Partida: `784ae443032c6f2e450db2d29dc18d81c4dd07836f9c7ffe720738f22dc1d253` · propuesta: `ed14b5d5c3c82cc7ef9d82bd908f90b56be8991af788b77dfea25390d772cf2d`

## MAN-GSI-P19-126

Decisión: pending_review · acción: revise.

Motivo: Conservar jitter y correctaD; tres métricas cercanas de red con redacción paralela, sin resolución de vídeo o reserva ajenas.

### Antes

¿Qué es jitter?

- A. Ancho de banda reservado.
- B. Porcentaje de paquetes perdidos.
- C. Resolución de vídeo.
- D. Variación del retardo de llegada entre paquetes. **(correcta)**

Explicación: El jitter obliga a buffers y puede afectar audio/vídeo interactivo.

### Propuesta

¿Qué es jitter?

- A. Tiempo de tránsito entre el origen y el destino.
- B. Proporción de paquetes que no alcanza el receptor.
- C. Caudal útil recibido por unidad de tiempo.
- D. Variación del retardo de llegada entre paquetes. **(correcta)**

Explicación: En este contexto, jitter se refiere a variación del retardo de transferencia de paquetes. Es distinto del retardo total, de la pérdida y del caudal útil. Para medirlo deben fijarse definición, muestra y unidades: no todas las métricas de variación son idénticas y el jitter interarribo de RTP tiene cálculo específico. Unbuffer puede compensar parte de esa variación a cambio de espera antes de reproducir.

- Error A: El tiempo de tránsito de un paquete es retardo; puede ser elevado y estable sin que exista una gran variación entre paquetes.
- Error B: La proporción no recibida expresa pérdida según un criterio de medida; no cuantifica la variación de tiempos de transferencia.
- Error C: El caudal útil mide cantidad entregada por unidad de tiempo; no informa por sí solo de cuánto varía el retardo de los paquetes.

- [IETF RFC5481: Packet Delay Variation Applicability Statement](https://www.rfc-editor.org/rfc/rfc5481.html) · §1 Introduction y §1.2: delay variation,IPDV/PDV, retardo y umbral de pérdida · versión: Informational, marzo2009, HTML comprobado04-11-2026. Distingue familia de métricas, no una fórmula universal dejitter ni equivalencia exacta conRTT o intervalo bruto de recepción. · comprobado: 2026-11-04
- [W3C: Identifiers for WebRTC Statistics API](https://www.w3.org/TR/webrtc-stats/) · §1 Introduction; §8.4 RTCReceivedRtpStreamStats; §8.5 RTCInboundRtpStreamStats: packetsLost,jitter,frames,bytes y descarte de buffer · versión: Candidate Recommendation Draft25-09-2025, trabajo en curso, comprobado04-11-2026. Ejemplo primario de métricas y unidades, no norma final, soporte uniforme o API deMOS. Se distingue paquetes perdidos de descartados para reproducción. · comprobado: 2026-11-04
- [IETF: RFC7005, RTCP XR Report Block for De-Jitter Buffer Metric Reporting](https://www.rfc-editor.org/rfc/rfc7005.html) · §3 De-Jitter Buffer Operation; §3.2 fixed y §3.3 adaptive: retención, reproducción y descartes · versión: Septiembre de 2013, HTML comprobado el 04-11-2026. Compromiso de variación/retardo; no corrige pérdidas físicas ni autoriza aumentar buffer sin límite. · comprobado: 2026-11-04

Partida: `7221f923767cc9d565cc52e3722f0c2ff1c020bc5c18755a1bc068d9d5bb819a` · propuesta: `b28661e6ff4edb0cc8c61b74e300fde6846816e3e83212b9d65e5a54b62cbf65`

## MAN-GSI-P19-127

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado de packet loss y claveD; acortar correcta sin perder concepto y precisar umbral frente a descarte para reproducción.

### Antes

¿Qué es packet loss?

- A. Variación del tiempo de llegada de paquetes sucesivos aunque todos alcancen el destino.
- B. Tiempo empleado por un paquete para recorrer el trayecto entre origen y destino.
- C. Regulación deliberada del caudal de un flujo para ajustarlo a una política de red.
- D. Pérdida de paquetes durante el transporte, que puede degradar audio/vídeo y disparar mecanismos de recuperación/adaptación. **(correcta)**

Explicación: La pérdida es distinta de latencia y jitter aunque pueden aparecer juntas por congestión.

### Propuesta

¿Qué es packet loss?

- A. Variación del tiempo de llegada de paquetes sucesivos aunque todos alcancen el destino.
- B. Tiempo empleado por un paquete para recorrer el trayecto entre origen y destino.
- C. Regulación deliberada del caudal de un flujo para ajustarlo a una política de red.
- D. Paquetes enviados que no se reciben, con posible degradación de los medios. **(correcta)**

Explicación: Packet loss describe paquetes enviados que no se reciben conforme al criterio de medida. Debe fijarse cuánto se espera para declararlos perdidos; un paquete tardío para el playout también puede ser descartado aunque haya llegado. Pérdida, retardo y variación son dimensiones distintas. Los medios pueden usar recuperación, adaptación u ocultación, pero ninguna elimina por principio toda degradación o tiene coste nulo.

- Error A: Si todos llegan pero cambian sus tiempos relativos, se trata de variación de retardo; no de paquetes no recibidos según el criterio de pérdida.
- Error B: El tiempo de recorrido es retardo; un paquete puede llegar tarde sin que ese valor sea por sí solo un porcentaje de pérdida.
- Error C: Regular elcaudal para cumplir una política es un mecanismo de acondicionamiento; no es la definición de pérdida, aunque algunas políticas puedan descartar tráfico.

- [IETF RFC7680: A One-Way Loss Metric for IPPM](https://datatracker.ietf.org/doc/html/rfc7680) · §2.2–2.5: destino,umbralTmax y pérdida frente a retardo; §1.1 sensibilidad de aplicaciones · versión: STD82, enero2016, sustituye2680; apartados HTML comprobados04-11-2026. La pérdida medida necesita criterio temporal; llegada tarde para reproducción puede tener efecto equivalente sin ser el mismo contador quepaquetes no recibidos. · comprobado: 2026-11-04
- [W3C: Identifiers for WebRTC Statistics API](https://www.w3.org/TR/webrtc-stats/) · §1 Introduction; §8.4 RTCReceivedRtpStreamStats; §8.5 RTCInboundRtpStreamStats: packetsLost,jitter,frames,bytes y descarte de buffer · versión: Candidate Recommendation Draft25-09-2025, trabajo en curso, comprobado04-11-2026. Ejemplo primario de métricas y unidades, no norma final, soporte uniforme o API deMOS. Se distingue paquetes perdidos de descartados para reproducción. · comprobado: 2026-11-04
- [IETF RFC5481: Packet Delay Variation Applicability Statement](https://www.rfc-editor.org/rfc/rfc5481.html) · §1 Introduction y §1.2: delay variation,IPDV/PDV, retardo y umbral de pérdida · versión: Informational, marzo2009, HTML comprobado04-11-2026. Distingue familia de métricas, no una fórmula universal dejitter ni equivalencia exacta conRTT o intervalo bruto de recepción. · comprobado: 2026-11-04
- [IETF RFC8854: WebRTC Forward Error Correction Requirements](https://www.rfc-editor.org/rfc/rfc8854.html) · §1 Introduction y §3 Types ofFEC: redundancia y recuperación de información · versión: Enero2021, HTML comprobado04-11-2026. Explica diferencia frente a capas,simulcast y recodificación; no se promete recuperar toda pérdida ni se prescriben tasas universales de redundancia. · comprobado: 2026-11-04

Partida: `f5fe670cc6492937b85fc8b7de40400762e38d17564eac82a45413bd38f9bd90` · propuesta: `c8a461f46ca041251943c9370dbaf60e568c1fe188d3fad285fdcc5b6cd169bc`

## MAN-GSI-P19-128

Decisión: pending_review · acción: revise.

Motivo: Conservar compromiso de buffer/latencia y correctaD; microcaso de retención diferencia espera local, recuperación y recursos de red.

### Antes

¿Qué relación tiene el jitter buffer con la latencia?

- A. Aumentar el buffer reduce siempre a cero la latencia y el jitter, sin añadir espera antes de reproducir los paquetes recibidos.
- B. Reservar capacidad física adicional en el enlace cuando aumenta la variación, evitando congestión en cualquier salto de la red.
- C. Solicitar la retransmisión de todo paquete tardío hasta reconstruir el flujo, sin efecto sobre el retardo de una conversación interactiva.
- D. Más buffer puede tolerar mayor variación, pero incrementa el retardo de reproducción. **(correcta)**

Explicación: Existe un compromiso entre suavidad y retardo interactivo.

### Propuesta

La recepción de una llamada presenta variación de retardo. Se aumenta el tiempo de retención del jitter buffer. ¿Qué efecto cabe esperar?

- A. Reduce el tiempo de recorrido de los paquetes porque elimina la espera en los routers del trayecto.
- B. Recupera el contenido de paquetes no recibidos sin redundancia o nuevas transmisiones de la fuente.
- C. Sustituye el control de congestión porque reservar memoria equivale a reservar capacidad de red.
- D. Más buffer puede tolerar mayor variación, pero incrementa el retardo de reproducción. **(correcta)**

Explicación: Unjitterbuffer retiene paquetes para alimentar la reproducción con tiempos más regulares. Dar más tiempo de retención puede admitir paquetes con mayor variación, pero añade espera al retardo interactivo. No reduce las colas del trayecto, reserva ancho de banda o reconstruye datos que nunca llegaron. El ajuste puede ser adaptativo y debe considerar tardíos, descartes y retardo objetivo, sin aumentar elbuffer indefinidamente.

- Error A: La espera local de reproducción no elimina colas o propagación de la red; aumenta el tiempo retenido en el receptor en lugar de acelerar el trayecto.
- Error B: Retener paquetes permite esperar llegadas tardías, pero no crea el contenido de paquetes ausentes; recuperación u ocultación son funciones diferentes.
- Error C: Memoria en el receptor y capacidad de los enlaces son recursos distintos; elbuffer no reserva red ni sustituye el control de congestión.

- [IETF: RFC7005, RTCP XR Report Block for De-Jitter Buffer Metric Reporting](https://www.rfc-editor.org/rfc/rfc7005.html) · §3 De-Jitter Buffer Operation; §3.2 fixed y §3.3 adaptive: retención, reproducción y descartes · versión: Septiembre de 2013, HTML comprobado el 04-11-2026. Compromiso de variación/retardo; no corrige pérdidas físicas ni autoriza aumentar buffer sin límite. · comprobado: 2026-11-04
- [IETF RFC5481: Packet Delay Variation Applicability Statement](https://www.rfc-editor.org/rfc/rfc5481.html) · §1 Introduction y §1.2: delay variation,IPDV/PDV, retardo y umbral de pérdida · versión: Informational, marzo2009, HTML comprobado04-11-2026. Distingue familia de métricas, no una fórmula universal dejitter ni equivalencia exacta conRTT o intervalo bruto de recepción. · comprobado: 2026-11-04
- [W3C: Identifiers for WebRTC Statistics API](https://www.w3.org/TR/webrtc-stats/) · §1 Introduction; §8.4 RTCReceivedRtpStreamStats; §8.5 RTCInboundRtpStreamStats: packetsLost,jitter,frames,bytes y descarte de buffer · versión: Candidate Recommendation Draft25-09-2025, trabajo en curso, comprobado04-11-2026. Ejemplo primario de métricas y unidades, no norma final, soporte uniforme o API deMOS. Se distingue paquetes perdidos de descartados para reproducción. · comprobado: 2026-11-04

Partida: `98f7e9d9741a51e219a237c3a1d630a715ae5e2894d641cc3b59ee3eb08aff58` · propuesta: `f0d5eeb84bbe19e9b14ef46dcd28589bcd16fe3168d9054f89538dd0bcda308a`

## MAN-GSI-P19-130

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta completaDSCP y claveB; distinguir marca, política, reserva y cifrado, excluyendo descripción históricaCU de otros bits.

### Antes

¿Qué afirmación sobre DSCP es correcta?

- A. Una política de colas que asigna ancho de banda y prioridad efectiva al tráfico con independencia del marcado recibido.
- B. Es un marcado IP que puede expresar clase/tratamiento deseado, pero la red debe estar configurada para interpretarlo. **(correcta)**
- C. Un protocolo de reserva que instala estado en los nodos de la ruta para garantizar recursos extremo a extremo.
- D. Un campo de seguridad que cifra la cabecera IP e impide que equipos intermedios conozcan la clase del paquete.

Explicación: Marcado sin políticas de cola/condicionamiento no garantiza calidad.

### Propuesta

¿Qué afirmación sobre DSCP es correcta?

- A. Una política de colas que asigna ancho de banda y prioridad efectiva al tráfico con independencia del marcado recibido.
- B. Es un marcado IP que puede expresar clase/tratamiento deseado, pero la red debe estar configurada para interpretarlo. **(correcta)**
- C. Un protocolo de reserva que instala estado en los nodos de la ruta para garantizar recursos extremo a extremo.
- D. Un campo de seguridad que cifra la cabecera IP e impide que equipos intermedios conozcan la clase del paquete.

Explicación: DSCP es un marcado de la cabecera IP que permite seleccionar un comportamiento por salto según políticas del dominio. Para producir tratamiento diferenciado se necesitan clasificación, colas y acondicionamiento adecuados; marcar no reserva recursos o garantiza calidad extremo a extremo. Unlímite administrativo puede remarcar o interpretar el código según acuerdos. No es un campo de cifrado ni evita por sí mismo observar esa clase.

- Error A: La política y el planificador ejecutan tratamiento sobre los paquetes; DSCP es el código de marcado que pueden usar, no la política de colas en sí.
- Error C: La reserva de recursos con señalización por flujo es otro enfoque; DSCP no instala por sí mismo estado o garantías en todos los nodos de la ruta.
- Error D: DSCP señala tratamiento de tráfico, no cifra cabeceras ni oculta la clase a los equipos que deben interpretarla para reenviar.

- [IETF RFC2474: Definition of the DS Field in IPv4 and IPv6](https://www.rfc-editor.org/rfc/rfc2474.html) · Abstract y §3: DSCP seleccionaPHB, clasificación,políticas y remarcado entre dominios · versión: Diciembre1998, HTML comprobado04-11-2026. Seis bitsDSCP y política de tratamiento, sin reserva/cifrado o garantía extremo a extremo por marcar. Se excluye la descripción histórica de los otros dos bits como actualmente sin uso. · comprobado: 2026-11-04

Partida: `04828a1d0c049051ef279688f74f34f6651705a1d9a4397bd0a91164acf31b4f` · propuesta: `4ad36ed6eae43065496539737269669c3508537c945698b1a46880dafae0c9d3`

## MAN-GSI-P19-131

Decisión: pending_review · acción: revise.

Motivo: Conservar medidas de calidad y correctaC; precisar conjunto red/medios y reconocer utilidad parcial de CPU, sin etiquetarla como inútil. MOS depende de plataforma.

### Antes

¿Qué métricas son útiles para monitorizar calidad de una reunión?

- A. Utilización de CPU y memoria del servidor, sin correlacionarla con pérdida, retardo, bitrate o experiencia de los participantes.
- B. Número total de cuentas del directorio corporativo, aunque la mayoría no participe en la reunión monitorizada.
- C. Latencia/RTT, jitter, pérdida, bitrate, frame rate y métricas/MOS estimadas según plataforma. **(correcta)**
- D. Cantidad de paquetes transmitidos, sin secuencia, temporización, pérdida, variación ni datos sobre audio o vídeo recibido.

Explicación: La calidad debe observarse desde red y medios, no por una única señal.

### Propuesta

¿Qué conjunto combina medidas de red y medios para evaluar la calidad recibida en una reunión?

- A. CPU y memoria de los servidores, sin combinar sus valores con recepción de medios o calidad de la red.
- B. Bitrate y resolución seleccionados en configuración, sin medir pérdidas, retardo o reproducción real.
- C. Latencia/RTT, jitter, pérdida, bitrate, frame rate y métricas/MOS estimadas según plataforma. **(correcta)**
- D. Volumen y número de paquetes, sin ventanas temporales, pérdida, variación o datos de reproducción.

Explicación: Para evaluar calidad recibida se correlacionan red y medios: retardo oRTT bien identificados, variación, pérdida, tasa y reproducción, con observaciones de usuario cuando proceda. CPU, memoria o parámetros configurados ayudan al diagnóstico, pero no bastan por sí solos. Los indicadores de tipo MOS son estimaciones dependientes de producto y método; un contador de degradaciónNetwork MOS no es un juicio perceptivo directo ni un campo universal deWebRTC getStats.

- Error A: Los recursos del servidor ayudan a localizar problemas, pero faltan medidas de red y de medios efectivamente recibidos para cubrir el conjunto solicitado.
- Error B: Una configuración expresa objetivos, que pueden diferir del resultado por adaptación o fallos; es necesario observar recepción, retardo, pérdida y reproducción.
- Error D: Los totales sin referencia temporal o de calidad no describen tasa efectiva, jitter, pérdida o fluidez; no cubren la experiencia recibida.

- [W3C: Identifiers for WebRTC Statistics API](https://www.w3.org/TR/webrtc-stats/) · §1 Introduction; §8.4 RTCReceivedRtpStreamStats; §8.5 RTCInboundRtpStreamStats: packetsLost,jitter,frames,bytes y descarte de buffer · versión: Candidate Recommendation Draft25-09-2025, trabajo en curso, comprobado04-11-2026. Ejemplo primario de métricas y unidades, no norma final, soporte uniforme o API deMOS. Se distingue paquetes perdidos de descartados para reproducción. · comprobado: 2026-11-04
- [Microsoft Learn: Dimensions and measurements in Call Quality Dashboard](https://learn.microsoft.com/en-us/microsoftteams/dimensions-and-measures-available-in-call-quality-dashboard) · Measurements: Audio Degradation Avg y su alcance/ausencias; mediaRTP frente a streaming · versión: HTML comprobado04-11-2026. Ejemplo de degradaciónNetworkMOS según producto, no puntuación perceptiva universal o medida disponible enWebRTC/VDI/SATIN: esa métrica los excluye. No se universaliza el rango o algoritmos a toda plataforma. · comprobado: 2026-11-04
- [IETF RFC7679: A One-Way Delay Metric for IPPM](https://datatracker.ietf.org/doc/html/rfc7679) · §1.1 Motivation: retardo de ida,RTT y asimetría de rutas/colas · versión: STD81, enero2016, sustituye2679; HTML comprobado04-11-2026 en copia primariaIETFDatatracker tras429 deRFCEditor. MétricaIP, no medida completa de captura a presentación o reglaRTT/2; se complementa con cadena de medios y buffer. · comprobado: 2026-11-04
- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04

Partida: `e7867e9ec959a3e0636c9c3ae66f4ad7fc2caf2cda26ea5c1ad791e49ac4ac25` · propuesta: `7dbc2b6493ff865bfc2efd48c0d795b53d3063ed1c6146cf3bdd0f129bff5610`

## MAN-GSI-P19-132

Decisión: pending_review · acción: revise.

Motivo: Conservar comparación de accesos de sala fija y correctaA; revisión interna elimina distractores que también podían ser riesgos, pidiendo valoración y contrastando tres garantías infundadas.

### Antes

¿Qué riesgo tiene usar Wi-Fi congestionado para una sala fija crítica cuando hay cableado disponible?

- A. Variabilidad de medio compartido, interferencia y competencia por aire; cable suele ofrecer mayor previsibilidad. **(correcta)**
- B. El medio radio compartido reserva capacidad estable a cada sala y evita la competencia con otros dispositivos cercanos.
- C. Ethernet introduce más interferencia variable que Wi-Fi porque sus tramas recorren un medio físico dedicado.
- D. La selección automática de canal garantiza ancho de banda y latencia constantes aunque el espectro esté congestionado.

Explicación: Para salas fijas se suele preferir red cableada, manteniendo redundancia/diseño adecuado.

### Propuesta

Una sala fija crítica usa Wi-Fi congestionado y dispone de Ethernet viable. ¿Qué valoración permite comparar ambos accesos?

- A. Variabilidad de medio compartido, interferencia y competencia por aire; cable suele ofrecer mayor previsibilidad. **(correcta)**
- B. La tasa PHY anunciada representa capacidad útil reservada para cada sala, al margen de otras estaciones.
- C. Una señal intensa acredita capacidad suficiente, aunque otros equipos compitan por el mismo canal.
- D. El cambio automático de canal garantiza retardo y capacidad constantes ante cualquier carga.

Explicación: EnWi-Fi se comparten recursos radio y pueden coexistir contención, interferencias y retransmisiones. Para una sala fija crítica con cableado disponible, un acceso Ethernet adecuadamente diseñado suele dar mayor previsibilidad al evitar esa parte del trayecto radio compartido. También necesita capacidad, configuración y continuidad: cable no garantiza ausencia de congestión o fallos. La alternativa inalámbrica debe contrastarse bajo carga, sin deducir rendimiento solo de cobertura o tasa PHY.

- Error B: La tasa PHY no es caudal útil reservado; contendientes, sobrecargas y condiciones radio afectan lo que realmente recibe o envía la sala.
- Error C: Buena señal permite cobertura, pero no evita competencia por un medio compartido ni demuestra capacidad suficiente en la hora de máxima concurrencia.
- Error D: Seleccionar canal puede ayudar al diseño, pero no mantiene por sí solo capacidad o retardo constantes frente a interferencia y demanda variables.

- [Cisco: Wireless High Client Density Design Guide](https://www.cisco.com/c/en/us/td/docs/wireless/controller/technotes/8-7/b_wireless_high_client_density_design_guide.html) · Data Rates and Cell Size: SNR, sensibilidad y consumo de airtime; distribución de clientes · versión: Guía 8.7 histórica HTML comprobada el 04-11-2026. Cobertura y capacidad distintas; no se deduce una causa única de retransmisiones ni se universalizan cifras de sensibilidad o densidad. · comprobado: 2026-11-04
- [Microsoft Learn: Prepare your organization network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) · Network optimization: OptimizeWiFi; Bandwidth requirements: tráfico de audio/vídeo/presentación, subidas/bajadas y variabilidad · versión: HTML actualizado09-07-2026, comprobado04-11-2026. Ejemplo de planificación de medios interactivos, no bitrate universal, mínimo contractual o recomendación de omitir controles. Se excluyen instrucciones deVPN/IDS y cifras comerciales como reglas para toda plataforma. · comprobado: 2026-11-04

Partida: `4b7407e365fd3acdf2cee33bff698482ea22b1efd8727da1593efe15b67a8265` · propuesta: `a86ba47b27e366347d9e41c6434a35d8f7ffaaecc2e15c5e46fffe252184ecb2`

## MAN-GSI-P19-133

Decisión: pending_review · acción: revise.

Motivo: Conservar prioridad de inteligibilidad y correctaB; microcaso de voz con ruido/eco frente a intervenciones parciales de audio.

### Antes

¿Qué factor de sala suele ser más crítico para la inteligibilidad que aumentar resolución de cámara?

- A. Añadir más fondos animados.
- B. Buena captación de audio, acústica y cancelación de eco. **(correcta)**
- C. Aumentar brillo sin controlar reflejos.
- D. Usar un monitor más pequeño.

Explicación: Una reunión con audio deficiente resulta casi inutilizable aunque el vídeo sea nítido.

### Propuesta

En una sala, la imagen es nítida, pero los remotos oyen voz con ruido y eco. ¿Qué conjunto conviene revisar para mejorar la inteligibilidad?

- A. Solo la supresión digital de ruido, manteniendo captación y eco.
- B. Buena captación de audio, acústica y cancelación de eco. **(correcta)**
- C. La ganancia del micrófono como único ajuste ante ruido y eco.
- D. El bitrate de audio como sustituto de revisar captación y acústica.

Explicación: Cuando la voz se capta con ruido o se devuelve eco, la prioridad es revisar micrófonos, ubicación, niveles, acústica y control de eco. Esas funciones afectan directamente la inteligibilidad y la conversación; más resolución de cámara no recupera audio perdido o deformado. AEC puede mitigar retorno acústico, pero no sustituye por sí sola controlar reverberación y ruido o una captación correcta. Deben comprobarse el origen y el resultado del problema.

- Error A: La supresión puede mitigar ruido, pero tratarla como único control no revisa el retorno acústico o las condiciones de captación; no resuelve por sí sola todo el conjunto.
- Error C: Subir ganancia sin diagnóstico puede amplificar también ruido y retorno; no corrige por sí solo ubicación, reverberación o control de eco.
- Error D: El bitrate influye en representación y transporte, pero no sustituye controlar ruido, retorno acústico o captación; una reducción aislada puede además perder detalle de voz.

- [Microsoft Learn: Meeting room guidance for Teams](https://learn.microsoft.com/en-us/microsoftteams/rooms/room-planning-guidance) · Infrastructure: Acoustic wall/floor treatments y Lighting; Signature Teams Boardroom: Room Acoustics y Lighting · versión: HTML público comprobado04-11-2026 pese a aviso genérico de autorización. Se usan principios de captación,inteligibilidad,reverberación,iluminación equilibrada y evitar contraluz; no productos,dimensiones,número de paneles o exigencias comerciales como regla universal. · comprobado: 2026-11-04
- [IETF RFC7874: WebRTC Audio Codec and Processing Requirements](https://www.rfc-editor.org/rfc/rfc7874.html) · RFC7874 §5 Acoustic Echo Cancellation: control de eco,algoritmos y usos donde conviene desactivarlo; §3 codecs para contexto previo · versión: Mayo2016, consulta§3 de086 reutilizada y lectura adicional§5 el04-11-2026. Recomendación de control de eco, no algoritmo obligatorio o sustituto universal de tratamiento acústico. Sin cifras de nivel/ganancia prescritas para una sala. · comprobado: 2026-11-04

Partida: `3a04fe465db8ef2f19708aecdefae7c13aaab0347cc75e722bd99fba7b447e8a` · propuesta: `01d35288acf7a496dee007861462a61b9b656668a7b6721d18c17fd12dd455d0`

## MAN-GSI-P19-134

Decisión: pending_review · acción: revise.

Motivo: Conservar tratamiento acústico y correctaD; explicar absorción, ruido y aislamiento sin prometer que un material resuelve toda condición.

### Antes

¿Qué objetivo tiene el tratamiento acústico de una sala?

- A. Reservar más ancho de banda WAN para compensar físicamente reflexiones, ruido ambiental y geometría de la sala.
- B. Activar cancelación digital de eco y considerar innecesarios materiales, aislamiento y control del ruido de climatización.
- C. Elevar la ganancia de todos los micrófonos para captar más sonido, aunque aumenten ruido, realimentación y reverberación.
- D. Reducir reverberación/ruido y mejorar captación y reproducción de voz. **(correcta)**

Explicación: Materiales, geometría y ruido de HVAC afectan a la calidad de audio.

### Propuesta

¿Qué objetivo tiene el tratamiento acústico de una sala?

- A. Elevar la ganancia para que las reflexiones refuercen la voz captada.
- B. Confiar solo en AEC, sin revisar fuentes de ruido o superficies de sala.
- C. Aumentar reverberación con superficies duras para reforzar voces lejanas.
- D. Reducir reverberación/ruido y mejorar captación y reproducción de voz. **(correcta)**

Explicación: El acondicionamiento y control acústico buscan que la voz resulte inteligible, limitando reflexiones persistentes y ruido y favoreciendo captación y reproducción adecuadas. Materiales, geometría, ubicación y fuentes de ruido necesitan análisis. Absorber reverberación no equivale a aislar de todo ruido externo: pueden hacer falta medidas distintas. El procesamiento de eco complementa el diseño físico, sin convertirlo en innecesario.

- Error A: Más ganancia y reflexiones pueden reforzar ruido o persistencia y dificultar entender la voz; no son el objetivo del tratamiento de una sala de reunión.
- Error B: La cancelación de eco atiende un problema de señal; no sustituye siempre el control físico de reverberación, fuentes de ruido o captación.
- Error C: Prolongar reflexiones puede enmascarar sílabas y reducir inteligibilidad; el objetivo es una respuesta acústica adecuada, no máxima reverberación.

- [Microsoft Learn: Meeting room guidance for Teams](https://learn.microsoft.com/en-us/microsoftteams/rooms/room-planning-guidance) · Infrastructure: Acoustic wall/floor treatments y Lighting; Signature Teams Boardroom: Room Acoustics y Lighting · versión: HTML público comprobado04-11-2026 pese a aviso genérico de autorización. Se usan principios de captación,inteligibilidad,reverberación,iluminación equilibrada y evitar contraluz; no productos,dimensiones,número de paneles o exigencias comerciales como regla universal. · comprobado: 2026-11-04
- [IETF RFC7874: WebRTC Audio Codec and Processing Requirements](https://www.rfc-editor.org/rfc/rfc7874.html) · RFC7874 §5 Acoustic Echo Cancellation: control de eco,algoritmos y usos donde conviene desactivarlo; §3 codecs para contexto previo · versión: Mayo2016, consulta§3 de086 reutilizada y lectura adicional§5 el04-11-2026. Recomendación de control de eco, no algoritmo obligatorio o sustituto universal de tratamiento acústico. Sin cifras de nivel/ganancia prescritas para una sala. · comprobado: 2026-11-04

Partida: `5623081e1fdaf38f780a354257fd9dbdf0c31aa70b057538d152af27f50db5aa` · propuesta: `be5dd3883c6f3f35fea8f05bcf92007f3fbe591372c4c372ef5c0e30f8b2ac3e`

## MAN-GSI-P19-135

Decisión: pending_review · acción: revise.

Motivo: Conservar iluminación facial equilibrada y correctaC; tres enfoques de compensación parcial plausibles, sin oscuridad total o distractores ajenos.

### Antes

¿Cómo debería plantearse la iluminación para videoconferencia?

- A. Solo desde atrás del participante.
- B. Oscuridad total.
- C. Uniforme y preferentemente frontal/adecuada a rostros, evitando contraluces y extremos de exposición. **(correcta)**
- D. Depender exclusivamente de la compensación digital.

Explicación: La iluminación física influye en calidad de imagen y carga de compresión.

### Propuesta

¿Cómo debería plantearse la iluminación para videoconferencia?

- A. Colocar la luz dominante detrás del rostro y compensar la silueta aumentando solo exposición global.
- B. Iluminar principalmente las pantallas, dejando la captación de rostros al ajuste automático de cámara.
- C. Uniforme y preferentemente frontal/adecuada a rostros, evitando contraluces y extremos de exposición. **(correcta)**
- D. Confiar en el rango dinámico de la cámara para corregir cualquier contraluz sin acondicionar la sala.

Explicación: Conviene iluminar los rostros de forma equilibrada, con suficiente luz y evitando contrastes excesivos, deslumbramiento o siluetas por contraluz. Distribución, posiciones, persianas y ajustes deben comprobarse con la cámara usada. El procesamiento y el rango dinámico ayudan, pero no restauran necesariamente detalle que la captura haya saturado o dejado sin señal útil. No se exige un único esquema de focos o nivel universal de iluminación.

- Error A: Una fuente dominante detrás puede crear silueta o contraste excesivo; subir exposición global puede saturar el fondo sin resolver la captación del rostro.
- Error B: Ver bien las pantallas no garantiza que las caras estén bien iluminadas; el diseño debe atender también lo que capta la cámara.
- Error D: El rango dinámico tiene límites; el ajuste digital no garantiza corregir cualquier contraste físico ni sustituye acondicionar luces y ventanas.

- [Microsoft Learn: Meeting room guidance for Teams](https://learn.microsoft.com/en-us/microsoftteams/rooms/room-planning-guidance) · Infrastructure: Acoustic wall/floor treatments y Lighting; Signature Teams Boardroom: Room Acoustics y Lighting · versión: HTML público comprobado04-11-2026 pese a aviso genérico de autorización. Se usan principios de captación,inteligibilidad,reverberación,iluminación equilibrada y evitar contraluz; no productos,dimensiones,número de paneles o exigencias comerciales como regla universal. · comprobado: 2026-11-04
- [Mozilla MDN: Web video codec guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs) · Introducción; Factors affecting the encoded video; Choosing a video codec; recomendaciones de codificación externa: calidad,tamaño,complejidad y compatibilidad · versión: HTML comprobado04-11-2026. Documentación del ecosistema de navegador; se excluyen tablas de soporte, rankings, previsiones y dictámenes jurídicos sobre licencias. Mayor compresión no obliga siempre a mayorCPU o retardo: depende de implementación y configuración. · comprobado: 2026-11-04

Partida: `f867c4292253739bfebea120f5a5f9189a6f6c5738e46478bb336e67c87a7589` · propuesta: `6cd38f3bd098691b53f5204a3832584a83a9c3a05f9a423ea83beeefc7889628`
