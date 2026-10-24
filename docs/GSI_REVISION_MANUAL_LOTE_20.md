# Revisión humana de preguntas manuales · lote 20

Fecha de preparación: 24 de octubre de 2026.

## Alcance y estado

Este documento prepara las 20 candidatas siguientes a las incluidas en el lote 19 dentro de la cola editorial `correct-length-dominance`. Las decisiones permanecen pendientes y no se ha modificado ninguna pregunta de este lote.

Los 20 registros se contrastaron con el solucionario Markdown conservado de su práctica. En todos los casos, la letra correcta del banco coincide con la letra publicada en el solucionario.

Estado del lote: **20 decisiones pendientes de aprobación humana; cero cambios en los bancos**.

## Elementos preparados

| Orden | ID | Tema | Relación inicial | Evidencia de clave | Contraste propuesto |
| ---: | --- | --- | ---: | --- | --- |
| 1 | `MAN-GSI-P15-110` | B3-T11 | 2,28× | P15, pregunta 110, C | TLS frente a autorización, cifrado en reposo y omisión de certificados. |
| 2 | `MAN-GSI-P17-055` | B2-T01 | 2,28× | P17, pregunta 55, C | Infradimensionamiento frente a reserva, latencia y coste ficticios. |
| 3 | `MAN-GSI-P14-005` | B1-T01 | 2,28× | P14, pregunta 5, A | Artículo 9.3 frente a dignidad, libertad de empresa y autonomía territorial. |
| 4 | `MAN-GSI-P17-025` | B2-T01 | 2,27× | P17, pregunta 25, C | UMA/NUMA frente a latencia invertida o sincronización eliminada. |
| 5 | `MAN-GSI-P19-002` | B4-T14 | 2,27× | P19, pregunta 2, A | NGN frente a MAC, fibra y eliminación de QoS. |
| 6 | `MAN-GSI-P19-014` | B4-T14 | 2,27× | P19, pregunta 14, C | Desacoplamiento frente a dependencia del acceso, falta de políticas o movilidad. |
| 7 | `MAN-GSI-P14-116` | B1-T08 | 2,26× | P14, pregunta 116, B | Suplencia frente a delegación de firma, avocación y encomienda. |
| 8 | `MAN-GSI-P19-010` | B4-T14 | 2,26× | P19, pregunta 10, A | IMS/SIP frente a transporte de medios, sustitución o uso solo PBX. |
| 9 | `MAN-GSI-P14-077` | B1-T05 | 2,26× | P14, pregunta 77, A | Respuesta integral frente a enfoques penal, laboral o divulgativo aislados. |
| 10 | `MAN-GSI-P19-134` | B4-T16 | 2,26× | P19, pregunta 134, D | Tratamiento acústico frente a QoS, cancelación digital o ganancia. |
| 11 | `MAN-GSI-P15-094` | B3-T11 | 2,25× | P15, pregunta 94, C | SQL parametrizado frente a Base64, validación cliente o procedimiento inseguro. |
| 12 | `MAN-GSI-P16-127` | B2-T14 | 2,25× | P16, pregunta 127, C | Privacidad DRM frente a anonimato supuesto, desconexión o consentimiento implícito. |
| 13 | `MAN-GSI-P19-143` | B4-T14 | 2,24× | P19, pregunta 143, D | Continuidad UC frente a cuentas compartidas, identidades aisladas o PBX analógica. |
| 14 | `MAN-GSI-P18-023` | B2-T09 | 2,24× | P18, pregunta 23, D | Validez XML frente a mero buen formado, apertura o declaración sin conformidad. |
| 15 | `MAN-GSI-P14-140` | B1-T10 | 2,23× | P14, pregunta 140, B | Carpeta Ciudadana frente a base única, Red SARA y firma. |
| 16 | `MAN-GSI-P16-093` | B2-T14 | 2,23× | P16, pregunta 93, D | Coexistencia industrial/autor frente a desaparición, patentabilidad total o sustitución. |
| 17 | `MAN-GSI-P19-109` | B4-T16 | 2,23× | P19, pregunta 109, D | TURN frente a STUN, servidor de medios y SBC. |
| 18 | `MAN-GSI-P17-104` | B2-T02 | 2,23× | P17, pregunta 104, A | Segmentación frente a paginación, heap y bloques de disco. |
| 19 | `MAN-GSI-P18-099` | B2-T16 | 2,23× | P18, pregunta 99, D | Taxonomía frente a folksonomía, OCR y cifrado. |
| 20 | `MAN-GSI-P16-109` | B2-T14 | 2,23× | P16, pregunta 109, D | Marca frente a patente, copyright y secreto empresarial. |

## Propuestas concretas pendientes

Las respuestas correctas permanecen literalmente intactas. La aprobación del lote autorizaría únicamente los tres distractores enumerados en cada registro.

### 1. `MAN-GSI-P15-110` · conservar C

- A: Autorizar cada acción por el hecho de que el usuario establezca un canal cifrado, sin comprobar identidad, roles o recurso solicitado.
- B: Cifrar automáticamente datos almacenados, backups y secretos de la base de datos sin controles adicionales en reposo.
- D: Eliminar la validación de certificados porque el cifrado del canal garantiza por sí mismo la identidad del endpoint remoto.

### 2. `MAN-GSI-P17-055` · conservar C

- A: Aumentar la disponibilidad indefinidamente porque utilizar menos recursos deja siempre más margen para absorber cualquier carga.
- B: Garantizar menor latencia al reducir capacidad, ya que las colas desaparecen cuando hay menos CPU, memoria o ancho de banda.
- D: Eliminar el coste operativo porque una plataforma pequeña no requiere monitorización, escalado ni atención a incidencias.

### 3. `MAN-GSI-P14-005` · conservar A

- B: La dignidad de la persona y el libre desarrollo de la personalidad como fundamento del orden político.
- C: La libertad de empresa en economía de mercado y la protección de su ejercicio por los poderes públicos.
- D: La autonomía de nacionalidades y regiones y la solidaridad entre ellas dentro de la unidad de España.

### 4. `MAN-GSI-P17-025` · conservar C

- A: En UMA cada procesador tiene memoria local con distinta latencia, mientras NUMA ofrece acceso uniforme a toda la memoria.
- B: NUMA elimina la sincronización y coherencia entre procesadores porque cada nodo trabaja siempre con datos completamente separados.
- D: UMA se aplica solo a almacenamiento persistente y NUMA únicamente a memoria RAM de un único procesador sin nodos.

### 5. `MAN-GSI-P19-002` · conservar A

- B: La ausencia de direcciones MAC en Ethernet, incorporándolas mediante una capa común para todos los servicios IP.
- C: La imposibilidad de transportar datos por fibra óptica, sustituyendo ese medio por enlaces radio en toda la red.
- D: La existencia de políticas de calidad, eliminándolas para que voz, vídeo y datos reciban siempre tratamiento idéntico.

### 6. `MAN-GSI-P19-014` · conservar C

- A: Vincular cada servicio a una tecnología de acceso concreta para que no pueda utilizarse desde otras redes o dispositivos.
- B: Eliminar autenticación, autorización y políticas porque separar acceso y servicio hace innecesario identificar al abonado.
- D: Impedir la movilidad entre accesos, manteniendo la sesión únicamente mientras el terminal permanezca en la red inicial.

### 7. `MAN-GSI-P14-116` · conservar B

- A: Delegar de forma permanente la firma de resoluciones y actos, manteniendo siempre al mismo titular en ejercicio ordinario.
- C: Atraer un órgano superior para sí el conocimiento de un asunto cuya resolución corresponde ordinariamente a un dependiente.
- D: Encargar a otro órgano o entidad actividades materiales o técnicas sin ceder los elementos sustantivos de la competencia.

### 8. `MAN-GSI-P19-010` · conservar A

- B: SIP transporta las muestras de audio y vídeo de IMS después del establecimiento, sustituyendo a RTP en el plano de medios.
- C: IMS elimina SIP y utiliza exclusivamente SNMP para registrar abonados, negociar sesiones y ejecutar servicios multimedia.
- D: SIP solo se utiliza en PBX empresariales y no forma parte de los perfiles o procedimientos normalizados por 3GPP para IMS.

### 9. `MAN-GSI-P14-077` · conservar A

- B: Exclusivamente penal, concentrada en tipificar delitos y penas sin medidas preventivas, derechos o asistencia social.
- C: Exclusivamente laboral, limitada a permisos y prestaciones relacionadas con el empleo y sin tutela judicial o institucional.
- D: Centrada solo en campañas de sensibilización, sin mecanismos de protección, asistencia, prevención o respuesta penal.

### 10. `MAN-GSI-P19-134` · conservar D

- A: Reservar más ancho de banda WAN para compensar físicamente reflexiones, ruido ambiental y geometría de la sala.
- B: Activar cancelación digital de eco y considerar innecesarios materiales, aislamiento y control del ruido de climatización.
- C: Elevar la ganancia de todos los micrófonos para captar más sonido, aunque aumenten ruido, realimentación y reverberación.

### 11. `MAN-GSI-P15-094` · conservar C

- A: Codificar la entrada en Base64 antes de concatenarla, suponiendo que la codificación impide que el motor la interprete como SQL.
- B: Validar únicamente en el cliente y construir después la consulta en el servidor con el texto ya aceptado por el navegador.
- D: Usar un procedimiento almacenado concatenando dentro de él la entrada, porque su ubicación en la base elimina automáticamente la inyección.

### 12. `MAN-GSI-P16-127` · conservar C

- A: La telemetría de licencia nunca constituye dato personal porque identifica dispositivos y no incluye necesariamente el nombre del usuario.
- B: Un DRM sin conexión carece siempre de impacto sobre privacidad, aunque registre localmente actividad, identificadores o patrones de uso.
- D: Aceptar la licencia equivale a consentir cualquier recogida y conservación de datos, sin requisitos de información o proporcionalidad.

### 13. `MAN-GSI-P19-143` · conservar D

- A: Compartir una misma cuenta entre portátil y móvil para conservar el número, evitando identidad individual, trazabilidad y políticas por usuario.
- B: Crear identidades y numeraciones independientes en cada terminal, sin federación de presencia, llamadas o directorio corporativo.
- C: Mantener una PBX analógica aislada para cada dispositivo y sede, sin clientes UC ni convergencia entre acceso fijo y móvil.

### 14. `MAN-GSI-P18-023` · conservar D

- A: Que utiliza etiquetas cerradas, un único elemento raíz y anidamiento correcto, aunque incumpla tipos o estructura del esquema declarado.
- B: Que cualquier navegador puede mostrarlo sin errores visuales, independientemente de su sintaxis y del vocabulario aplicable.
- C: Que declara un DTD o XSD, aunque el contenido no haya sido validado o contradiga las restricciones incluidas en él.

### 15. `MAN-GSI-P14-140` · conservar B

- A: Una base de datos nacional única que copia y reemplaza toda información y todos los sistemas de las distintas Administraciones.
- C: El nombre visible para ciudadanos de la red de comunicaciones Red SARA y de sus enlaces entre Administraciones.
- D: Un sistema dedicado exclusivamente a firmar documentos localmente, sin agregar información, trámites o comunicaciones personales.

### 16. `MAN-GSI-P16-093` · conservar D

- A: El copyright desaparece cuando existe una invención patentable, aunque la expresión original del programa siga protegida.
- B: Cada línea de código se convierte automáticamente en patente europea sin solicitud, examen ni requisitos de patentabilidad.
- C: Obtener protección industrial sustituye toda licencia de software y extingue las condiciones previamente concedidas por el titular.

### 17. `MAN-GSI-P19-109` · conservar D

- A: Informar al cliente de su dirección pública observada y ayudar a comprobar conectividad, sin retransmitir los medios como relay.
- B: Mezclar, componer y transcodificar todos los flujos de una reunión para entregar una salida audiovisual común a los participantes.
- C: Controlar y proteger la frontera SIP, normalizando señalización y aplicando políticas de interconexión entre dominios.

### 18. `MAN-GSI-P17-104` · conservar A

- B: Dividir memoria virtual y física en páginas y marcos de tamaño fijo que se relacionan mediante tablas de páginas.
- C: Reservar dinámicamente objetos en el heap sin estructura lógica visible ni asociación con código, datos o pila del programa.
- D: Organizar almacenamiento en bloques físicos de tamaño fijo utilizados por el sistema de archivos para ubicar contenido.

### 19. `MAN-GSI-P18-099` · conservar D

- A: Permitir que cada usuario asigne etiquetas libres sin vocabulario común ni relaciones jerárquicas previamente gobernadas.
- B: Reconocer caracteres de documentos escaneados para obtener texto indexable, sin crear categorías documentales controladas.
- C: Cifrar los ficheros del repositorio y administrar claves, sin definir clases, tipos o estructura para su recuperación.

### 20. `MAN-GSI-P16-109` · conservar D

- A: Una invención técnica definida por reivindicaciones y concedida tras cumplir requisitos de patentabilidad.
- B: La expresión original del código y otras obras, protegida por derechos de autor.
- C: Información empresarial valiosa y confidencial que no es generalmente conocida.

## Fuentes contrastadas

- P14: `documents/markdown/gsi/P14/GSI A2 — PRÁCTICA ACTIVA 14 — TEST BLOQUE I — SOLUCIONARIO COMENTADO.md`, preguntas 5, 77, 116 y 140.
- P15: `documents/markdown/gsi/P15/GSI A2 — PRÁCTICA ACTIVA 15 — .NET Y JAKARTA EE — SOLUCIONARIO COMENTADO.md`, preguntas 94 y 110.
- P16: `documents/markdown/gsi/P16/GSI A2 — PRÁCTICA ACTIVA 16 — LICENCIAS, PROTECCIÓN JURÍDICA Y DRM — SOLUCIONARIO COMENTADO.md`, preguntas 93, 109 y 127.
- P17: `documents/markdown/gsi/P17/GSI A2 — PRÁCTICA ACTIVA 17 — COMPUTADORES, CLOUD Y SISTEMAS OPERATIVOS — SOLUCIONARIO COMENTADO.md`, preguntas 25, 55 y 104.
- P18: `documents/markdown/gsi/P18/GSI A2 — PRÁCTICA ACTIVA 18 — HTML, XML, CONTENIDOS, BÚSQUEDA Y SEO — SOLUCIONARIO COMENTADO.md`, preguntas 23 y 99.
- P19: `documents/markdown/gsi/P19/GSI A2 — PRÁCTICA ACTIVA 19 — NGN, IMS, MOVILIDAD, UEM Y VIDEOCONFERENCIA — SOLUCIONARIO COMENTADO.md`, preguntas 2, 10, 14, 109, 134 y 143.

## Resultado de la preparación

- 20 de 20 IDs localizados en el banco manual.
- 20 de 20 claves coincidentes con sus solucionarios conservados.
- 20 decisiones editoriales pendientes de aprobación humana.
- Cero modificaciones en `data/questions-manual.json`, `data/questions-official.json` y `data/questions-ai.json`.

Este lote solo podrá aplicarse después de recibir aprobación expresa de sus textos concretos.
