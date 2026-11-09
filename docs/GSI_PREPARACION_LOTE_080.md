# Preparación de GSI-EDITORIAL-080

Fecha: 4 de noviembre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `5972a8be63c534c7bba2711bc737613c339ebfb0d0e796c595f0fc8c451e1f74`.

## Alcance y criterio

Posiciones 1581–1600 de la cola: cuatro IA B4-T12 (017–020) y dieciséis IA B4-T13 (001–007, 009–011 y 013–018). Se conservan IDs, conceptos, claves, dificultad orientativa, estados y procedencia. No se requieren reemplazos o retiradas por cambio de clave o significado.

Catorce conceptuales y seis aplicaciones: T12-018/019 y T13-003/007/015/018. Los casos concretan split tunneling, endpoint comprometido, dependencia DNS, pico de lecturas estáticas, autonomía edge y sensores de batería. Distribución descriptiva, sin cuota impuesta. Se mantienen **doce enunciados**, incluido el microcaso original del equipo comprometido, y las formulaciones correctas de protección del puesto, limitación NAT y TCP/QUIC/UDP. Se perfeccionan los distractores sin alargar nombres técnicos con relleno.

Las veinte incluyen explicación correcta y tres justificaciones por ID original y contenido, compatibles con barajado. No se cambia una clave para repartir letras. La arquitectura IoT se acota a un modelo con pasarela edge y consumo en una aplicación central desde la plataforma; no se impone como única arquitectura posible.

[Ficha antes/después](GSI_REVISION_LOTE_080.md) · [Propuesta JSON](../content/question-reviews/lote-080.json) · [Registro](../logs/gsi-editorial-080-preparation.json).

La rúbrica recoge el juicio documental del preparador, pendiente del propietario. No acredita revisión humana independiente, ensayos operativos o calibración. Las veinte aceptaciones históricas IA siguen vinculadas a sus contenidos anteriores y no aceptan estas versiones.

## Revisión individual

| ID | Clave conservada | Forma | Enunciado conservado | Decisión |
| --- | :---: | --- | :---: | --- |
| AI-GSI-B4-T12-017 | D | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T12-018 | B | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T12-019 | A | Aplicación | Sí | Pendiente del propietario |
| AI-GSI-B4-T12-020 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T13-001 | D | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T13-002 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T13-003 | D | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T13-004 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T13-005 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T13-006 | D | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T13-007 | C | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T13-009 | B | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T13-010 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T13-011 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T13-013 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T13-014 | D | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T13-015 | A | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T13-016 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T13-017 | D | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T13-018 | A | Aplicación | No | Pendiente del propietario |

No se identifica un nuevo error confirmado de clave. Se precisan ámbitos y excepciones: la VPN no sanea el endpoint, dual stack no es traducción, un IXP no concede tránsito universal, la caché no es autoridad completa y CoAP se limita al modelo base citado.

## Fuentes y vigencia

**22 URLs primarias con apartados HTML comprobados el 04-11-2026**, conservando la procedencia original.

- Se separa topología VPN de protocolo, autenticación de estado del endpoint y protección de canal de saneamiento. Parcheo/EDR/cifrado de disco/mínimo privilegio son complementarios.

- AS representa política de routing, IXP facilita interconexión y resiliencia requiere revisar dependencias y fallos comunes; dos enlaces no bastan si otros servicios siguen siendo únicos.

- Dual stack implementa ambas familias. NAT modifica transparencia y puede exigir mecanismos adicionales, sin convertirse en autenticación o política completa. DNS combina autoridad delegada y caché.

- HTTP/2 usa TCP; HTTP/3 mapea HTTP sobre QUIC y QUICv1 utiliza UDP. La relación entre capas evita atribuir a UDP la fiabilidad de flujos QUIC.

- Se acota un modelo funcional IoT con edge sin convertirlo en arquitectura universal. Operación offline depende de preparación, almacenamiento y TTL. MQTT pub/sub no excluye extensiones; CoAP se refiere a RFC7252 base.

- Las guías de proveedores respaldan mecanismos o criterios, sin recomendar contratación. Se excluyen promesas simplificadas de conectividad y se identifica la guía británica como orientación, no normativa AGE.

Localizadores contrastados: RFC 1930 §3, RFC 4213 §2, RFC 4864 §1/2.2/4.2, RFC 3022 §6, RFC 1034 §3.6/4.2/5.3, RFC 9113 §2, RFC 9114 resumen/§1.2/2, RFC 9000 §1.2, MQTT5 resumen/§1.2 y RFC 7252 §2.1/4. NCSC B5.b aporta dependencias y caminos/proveedores alternativos; no se traslada su marco británico como obligación AGE. La guía GDS pondera valor y costes de cambio, sin prohibir toda dependencia.

La documentación IoT Edge consultada se aplica a 1.6 e identifica límites de almacenamiento y TTL. Se utiliza como ejemplo de operación offline condicionada, sin exigir plataforma. El artículo del autor SUSE solo respalda criterios de conectividad: se excluyen sus garantías comerciales, su tabla simplificada y las generalizaciones sobre Ethernet.

## Límites de acceso y verificación

- El candidato NCSC device-security-guidance no fue accesible; Preventing Lateral Movement y documentación Microsoft ofrecen cuerpos pertinentes.

- Dos candidatos GSMA devolvieron403 y el visor HTML ITU Y.4218 no mostró texto legible. No se sortearon restricciones ni se atribuye lectura íntegra. Se usa el artículo del autor SUSE solo para criterios de selección, excluyendo su tabla y garantías comerciales.

- Una consulta de RFC3022 falló con UnexpectedStatusCode; otra lectura posterior sí devolvió su cuerpo §6. RFC4864 respalda adicionalmente efectos sobre aplicaciones.

- Se leyeron apartados HTML públicos. No se abrieron PDF/DOCX, no hubo conversiones u OCR y no se realizaron ensayos operativos VPN, IoT o de protocolos.

Se registran cinco incidencias de acceso. La lectura posterior de RFC 3022 sí fue accesible; no se atribuyen cuerpos legibles a GSMA o al visor ITU. Los avisos de plantilla Microsoft no impidieron leer el contenido público. No se ejecutaron instrucciones o comandos externos de configuración.

## Métricas y forma

| Señal | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 12 | 4 |
| Acierto primera máxima (%) | 60.0 | 30.0 |
| Ratio 1,5–menos de 2 | 4 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 20 | 0 |
| Feedback correcto/incorrecto idéntico | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

Primera mínima correcta: 6/20 (30 %); empates máximos: 1→11. Las cuatro correctas únicas más largas difieren en 1–5 caracteres, con proporciones menores de 1,34. Las seis proporciones inversas registradas no superan 1,125: en NAT, 45 caracteres del distractor más largo frente a 40 de la correcta conservada. TCP y UDP conservan tres caracteres frente a SCTP/DCCP de cuatro; no se altera una sigla para igualar longitudes. Estas señales orientan la revisión y no certifican calidad pedagógica. Dificultad orientativa y calibración estadística no realizada.

## Validación

Resultados: **19 pruebas editoriales, 102 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Documentación, referencias y progreso sincronizados; ocho comandos con código 0. Simulación en memoria de **20 IA**, sin cambios de ID, clave, estado o procedencia. **60 justificaciones individuales** y veinte registros históricos IA comprobados, sin extender aceptaciones a texto nuevo. Tres aceptaciones improcedentes rechazadas y dos barreras de regeneración verificadas. **335 archivos protegidos intactos**, doce borradores conservados y **172 enlaces locales existentes**.

**Diez comprobaciones Chrome correctas** y captura de edge/offline inspeccionada, sin desbordamiento a 1280/390 px. Son controles de ficha, no pruebas HTTP del producto ni ensayos de VPN, CDN o IoT. Se verifican metadatos de 22 fuentes, doce enunciados conservados y cinco formulaciones correctas mantenidas. Sin revisiones posteriores al hash inicial o fallos de la suite mantenida. Dos reparaciones auxiliares: el generador esperaba una aparición donde había siete rutas conocidas y se detuvo antes de escribir el verificador; tras verificar la ausencia de salida, se corrigió el recuento y el reintento terminó con código 0. Después, el verificador detectó un límite descriptivo mal transcrito en este informe: la proporción inversa máxima es 45/40=1,125 para NAT, no menor de 1,12. Se corrigieron informe y comprobación al valor exacto, sin cambiar pregunta, hash o umbrales del analizador mantenido. Ambos fallos y su recuperación quedan registrados.

Derivados con contenido y fecha 04-11 iguales al inicio; frente a HEAD solo cambia fecha 26-10→04-11. Bancos activos iguales a HEAD y oficiales idénticas en bytes a la auditoría. Sin nuevas aceptaciones, aplicación, publicación, fusión o commit. La suite HTTP previa del producto se conserva sin atribuirla a propuestas inactivas. Tres incidencias anteriores y las aceptaciones pendientes mantienen abierto el cierre editorial.

Comandos desde la raíz:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_080_browser.mjs
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B tmp/validate_editorial_080.py
```

Chrome ha comprobado la ficha literal a 1280/390 px. No se repite la [suite HTTP del producto aplicada al lote 001](../logs/gsi-editorial-001-revalidation-2026-10-30.json): las propuestas siguen inactivas y no cambia la aplicación o sus bancos. Al aplicar contenido aprobado habrá que recorrer Entrenamiento, Simulacros, estadísticas y Refuerzo; la presentación de una ficha no verifica esas funciones.

## Incidencias y cierre

Siguen pendientes las correcciones propuestas de las tres incidencias activas anteriores: lote 032, XML; lote 054, preservación de dependencias al normalizar; lote 055, cota O(n). No están corregidas en el banco activo y mantienen abierto el cierre editorial.

Tras preparar 080: **20 aceptadas, 1.580 propuestas pendientes, 162 sin propuesta y 1.742 decisiones pendientes del propietario**. Cubiertos 1.600/1.762 IDs sin duplicar. Las 128 incidencias IA originales tienen propuesta: 15 aplicadas y 113 pendientes; no implica resolución editorial. La cola pendiente preparada comprende 113 IA originales, 672 IA restantes y 795 manuales.

## Entrega y cómo probar

Creados: propuesta JSON, ficha, informe y registro. Modificados: plan y progreso. El validador regenera tres informes derivados; se ha comprobado que mantienen contenido y fecha 04-11 del inicio. Auxiliares y captura en tmp. Sin documentos convertidos, conversiones nuevas pendientes, OCR o dependencias nuevas.

Abre la ficha y contrasta VPN/endpoint, routing/resolución, pila HTTP y arquitectura/protocolos IoT. Revisa cada justificación y sus fuentes con los límites declarados. La aprobación debe identificar el hash exacto.

Sin aceptar, aplicar, activar, retirar, publicar, fusionar o crear commit. Las 202 oficiales, bancos activos y documentos originales intactos. Siguiente paso: revisión del propietario y preparación de las 162 preguntas restantes con el mismo estándar.
