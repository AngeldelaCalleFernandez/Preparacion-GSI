# Auditoría de la conversión a GSI A2

> **Aviso de estado:** este documento conserva auditorías y resultados históricos de distintas fases del proyecto. Para el estado vigente del saneamiento de fuentes y derechos de terceros, consulte [AUDITORIA_SANEAMIENTO_PREPARATIC.md](../AUDITORIA_SANEAMIENTO_PREPARATIC.md). Para el resultado técnico vigente, consulte [logs/gsi-suite.json](../logs/gsi-suite.json).

## Mezcla y feedback de test: 21 de septiembre de 2026

Entrenamiento permite seleccionar varios bloques y temas de bloques diferentes. La selección se reparte por turnos entre los grupos elegidos, siempre que tengan preguntas disponibles. El filtro mantiene compatibilidad con la selección anterior de un único bloque o tema y con origen, no vistas y últimos errores.

El final de cada test muestra respondidas, correctas, falladas, porcentaje de acierto y hasta cinco temas con más fallos. Expone el detalle de todas las falladas con respuesta elegida, correcta y explicación. Las falladas se incorporan automáticamente a Refuerzo y pueden repetirse inmediatamente mediante **Repetir solo las falladas**.

Se añadieron pruebas unitarias para filtros múltiples, reparto equilibrado y cálculo del resumen, además de un recorrido real en navegador que mezcla B1-T01 y B4-T16, provoca fallos en ambos temas, comprueba el feedback y abre un nuevo test solo con las falladas. La captura de revisión visual se genera en tmp/gsi/training-results.png.

## Nombre y licencia: 17 de septiembre de 2026

El nombre visible pasa a **Preparación GSI** en cabecera, títulos de navegación, temario, revisión editorial, guía y README. El propietario eligió expresamente uso gratuito y no comercial con atribución. Se crean `LICENSE` (licencia específica del proyecto) y `licencia.html`; la aplicación muestra el crédito a `AngeldelaCalleFernandez` y un enlace a las condiciones. Los derechos de documentos oficiales y materiales de terceros se conservan. El repositorio y su dirección de Pages siguen siendo los existentes.

Se modifican HTML, estilos, títulos del router y temario, documentación y la expectativa de título en el recorrido HTTP. El validador incluye los enlaces de la nueva página y solo admite el nombre histórico en sus URLs de atribución exactas. No se convierten documentos ni se cambia el banco de preguntas. Validación: 19088 controles de integridad, 83 unitarias, 288 regresiones y 75 comprobaciones HTTP; el resultado de la ejecución está en `logs/gsi-suite.json`.

## Estado vigente: 16 de septiembre de 2026

**Integración validada; publicación autorizada el 17 de septiembre de 2026.** Rama `gsi-only-final`. El commit que contiene este informe se identifica con `git log -1 --format=%H -- docs/FINAL_GSI_AUDIT.md`. El código validado está en `353d598` y la conservación de hashes en Windows en `8308d62`. GitHub Pages publica desde la raíz de esta rama; el estado de despliegue se consulta en las acciones del repositorio.

Programa: BOE-A-2025-26262, Anexo IX; **57 temas, distribución 10/16/15/16**. Se conservan los 57 apuntes completos y trazados del corpus aprobado internamente para publicación, los 50 documentos canónicos convertidos, ocho supuestos con solución y cuatro simulacros escritos. Esta aprobación interna no acredita permiso de titulares externos. El inventario, la raíz Drive, las migraciones y los originales históricos se detallan más abajo.

El propietario confirmó el 15 de septiembre: «los test estan revisados». Se registra esa declaración para los hashes exactos de las 803 preguntas generadas, sin atribuir al agente una revisión humana ni inventar el método utilizado. Se activan conservando su origen IA. Detalle en [GSI_REVISION_EDITORIAL.md](GSI_REVISION_EDITORIAL.md).

| Origen | Activas | Pendientes |
| --- | ---: | ---: |
| Curadas | 959 | 0 |
| Generadas, revisión confirmada por el propietario | 803 | 0 |
| Oficiales INAP | 202 | 0 |
| **Total** | **1964** | **0** |

Por bloque: **B1 252; B2 760; B3 479; B4 473**. Los 57 temas tienen al menos 20 preguntas activas; los borradores no validados siguen excluidos por el motor. La revisión de una versión no autoriza automáticamente versiones futuras.

### Exámenes oficiales incorporados

Dos exámenes interactivos de ingreso libre, convocatorias 2022 y 2024, con 100 preguntas evaluables, 90 minutos y penalización exacta de 1/3. Se conservan las letras, las plantillas definitivas y la respuesta modificada de 2024/12. Las ocho anuladas se sustituyen por las primeras cuatro reservas de cada examen; las quintas reservas solo entran en entrenamiento.

Se descargaron y convirtieron **12 PDF**, cuatro por convocatoria 2022/2024/2025, con MarkItDown normal y sin OCR. Los 12 originales se conservan localmente y sus hashes se verifican; no quedan conversiones oficiales pendientes. La plantilla 2025 consultada es provisional y queda fuera del banco activo. Cuestionarios, plantillas, supuestos y criterios están enlazados desde Examen. Los supuestos oficiales se consultan en PDF, sin soluciones inventadas. [Procedencia, procedimiento y límites](GSI_EXAMENES_OFICIALES.md).

### Cobertura actual por tema

| Tema | Activas | Pendientes |
| --- | ---: | ---: |
| B1-T01 | 25 | 0 |
| B1-T02 | 22 | 0 |
| B1-T03 | 24 | 0 |
| B1-T04 | 22 | 0 |
| B1-T05 | 26 | 0 |
| B1-T06 | 23 | 0 |
| B1-T07 | 24 | 0 |
| B1-T08 | 37 | 0 |
| B1-T09 | 23 | 0 |
| B1-T10 | 26 | 0 |
| B2-T01 | 84 | 0 |
| B2-T02 | 88 | 0 |
| B2-T03 | 22 | 0 |
| B2-T04 | 24 | 0 |
| B2-T05 | 24 | 0 |
| B2-T06 | 22 | 0 |
| B2-T07 | 21 | 0 |
| B2-T08 | 25 | 0 |
| B2-T09 | 84 | 0 |
| B2-T10 | 22 | 0 |
| B2-T11 | 23 | 0 |
| B2-T12 | 24 | 0 |
| B2-T13 | 26 | 0 |
| B2-T14 | 163 | 0 |
| B2-T15 | 24 | 0 |
| B2-T16 | 84 | 0 |
| B3-T01 | 26 | 0 |
| B3-T02 | 24 | 0 |
| B3-T03 | 22 | 0 |
| B3-T04 | 24 | 0 |
| B3-T05 | 24 | 0 |
| B3-T06 | 25 | 0 |
| B3-T07 | 22 | 0 |
| B3-T08 | 23 | 0 |
| B3-T09 | 24 | 0 |
| B3-T10 | 25 | 0 |
| B3-T11 | 143 | 0 |
| B3-T12 | 25 | 0 |
| B3-T13 | 24 | 0 |
| B3-T14 | 24 | 0 |
| B3-T15 | 24 | 0 |
| B4-T01 | 21 | 0 |
| B4-T02 | 22 | 0 |
| B4-T03 | 22 | 0 |
| B4-T04 | 23 | 0 |
| B4-T05 | 25 | 0 |
| B4-T06 | 24 | 0 |
| B4-T07 | 22 | 0 |
| B4-T08 | 21 | 0 |
| B4-T09 | 22 | 0 |
| B4-T10 | 25 | 0 |
| B4-T11 | 23 | 0 |
| B4-T12 | 27 | 0 |
| B4-T13 | 23 | 0 |
| B4-T14 | 47 | 0 |
| B4-T15 | 68 | 0 |
| B4-T16 | 58 | 0 |

### Validación de esta revisión

Comando: `.\.venv\Scripts\python.exe scripts/run_gsi_suite.py`.

| Comprobación | Resultado |
| --- | --- |
| Integridad y cobertura | 19077 controles, cero errores y cero bloqueos |
| JSON y esquemas | 19 archivos, 17 esquemas, cero errores |
| Referencias | 4 bloques, 57 temas, 33 documentos catalogados |
| Preguntas | 1964 con estructura válida |
| Unitarias | 83 aprobadas, cero fallidas |
| Regresión en navegador | 288 aprobadas, cero fallidas |
| Recorrido HTTP | 75 aprobadas, cero fallidas; cero errores de consola y rutas |
| Suite completa | Código 0; technical_pass y release_ready verdaderos |

Se ejercitan los 57 temas con respuesta real, los dos exámenes históricos, selección de reservas, puntuación, letras originales, recarga y plazo absoluto, progreso exportado/importado, exclusión de anuladas/provisionales, escritorio y móvil. Se inspeccionó visualmente la biblioteca móvil. Los resultados están en `logs/gsi-suite.json`, `logs/gsi-unit.json` y `logs/gsi-browser-smoke.json`.

La primera pasada detectó IDs documentales con guion bajo, un validador limitado a la carpeta canónica y una expectativa de 21 documentos. Se normalizaron IDs con guiones, se incluyó la carpeta oficial y se comprobó el nuevo total de 33. La suite posterior pasó completa. Se fijaron finales de línea LF para las nuevas conversiones en `.gitattributes`, de modo que sus hashes se conserven también al clonar en Windows. Los duplicados exactos se identifican por enunciado y alternativas: dos preguntas oficiales con el mismo encabezado pero opciones distintas son ítems diferentes.

### Entrega y autorización de publicación

Creados: módulo `assets/js/official-exams.js`, catálogo y mapa oficiales, extracción conservada, 12 Markdown, log de conversiones, esquema e importador oficial, y esta documentación de uso. Modificados: bancos, registro editorial, fuentes, interfaz de examen/entrenamiento/refuerzo, validación de progreso, esquemas, validadores, pruebas, README y guía. La arquitectura sigue siendo estática, sin backend ni build.

Fase de integración, pruebas y documentación completada. El bloqueo anterior de publicación queda resuelto por autorización expresa del propietario el 17 de septiembre de 2026: confirmó que permite publicar los cambios pendientes, incluidas las auditorías derivadas de sus documentos privados, en el repositorio público. Esta autorización permite enviar el conjunto preparado y comprobar GitHub Pages tras el despliegue. Los PDF originales permanecen conservados localmente e ignorados por Git; la aplicación enlaza los documentos públicos del INAP.

Para probar: servir la raíz por HTTP y abrir **Examen → Exámenes oficiales INAP → 2022 o 2024 → Preparar este examen → Iniciar examen**. La guía explica también la consulta de PDF y el traslado de progreso entre dispositivos.

## Informe histórico: 15 de septiembre, anterior a la confirmación y a la importación oficial

**El resto del documento se conserva como historial. Sus cantidades, bloqueos y resultados corresponden a aquella revisión; el estado vigente es el descrito arriba.**

Fecha: **15 de septiembre de 2026**. Rama: `gsi-only-final`.

**Estado: aplicación publicada y utilizable; cierre editorial bloqueado.** Los 57 temas tienen apuntes completos y procedencia. Hay 959 preguntas activas, pero 40 temas no tienen ninguna activa y B1-T03 tiene 17. Las 803 preguntas generadas continúan pendientes. La publicación fue autorizada expresamente por el propietario; no equivale a declarar una versión estable ni una PR de cierre terminada.

Commit de referencia de la suite del 15 de septiembre: `7cc25aede8b67f88027244696296fd92af73e8a9`. El informe se guarda en un commit posterior para poder citar una revisión existente; el identificador del commit que contiene esta auditoría se obtiene con `git log -1 --format=%H -- docs/FINAL_GSI_AUDIT.md`.

Acceso público actual: [Preparación GSI](https://angeldelacallefernandez.github.io/Preparacion-GSI/) y [guía paso a paso](https://angeldelacallefernandez.github.io/Preparacion-GSI/docs/guia-de-estudio.html). GitHub Pages publica desde la raíz de `gsi-only-final`, con HTTPS y `.nojekyll`. El progreso sigue siendo local a cada navegador y se traslada mediante exportación/importación.

## Fuentes y documentos

Única raíz didáctica: [Drive aprobado internamente para lectura e inventario](https://drive.google.com/drive/folders/1bmBgrybIUDyT1owpnooU8Oq5FH4wLrp2). Esa aprobación interna no acredita permiso ni licencia de titulares externos. El inventario contiene 139 registros de la estructura principal y 2338 elementos auxiliares (1906 archivos y 432 carpetas). El recorrido auxiliar registró 436 carpetas, incluidas sus raíces, y cero errores de listado. Inventariar un archivo no significa que se haya leído su contenido; se consumieron 50 documentos nativos de la estructura principal y se consultaron seis muestras auxiliares de índices/apoyo. No se identificó un banco de preguntas oficiales importable en lo consultado.

Control externo: [BOE-A-2025-26262, Anexo IX](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262), consultado de nuevo el 15 de septiembre. Los títulos y el orden de los 57 temas se comparan automáticamente contra su XML conservado. Distribución: bloque I 10, II 16, III 15 y IV 16. Las discrepancias del mapa auxiliar y el anterior catálogo de 55 temas están registradas en `data/gsi-map-review.json`.

La revisión complementaria de Drive del 15 de septiembre está en [gsi-source-recheck-2026-09-15.json](../logs/gsi-source-recheck-2026-09-15.json). Incluye la nueva carpeta de vigilancia y sus cinco subcarpetas, un aviso sobre Kubernetes que confirma el ya catalogado, y tres candidatos auxiliares: dos documentos de preguntas abiertas y un PDF de cero bytes. No aportan preguntas de cuatro alternativas importables para cubrir los temas pendientes. No se reemplaza el inventario histórico ni se contabilizan estas consultas como conversiones.

| Fuente canónica | Documento | Revisión de origen |
| --- | --- | --- |
| SRC-GSI-B1-V21 | [GSI_A2 — BLOQUE I — APUNTES COMPLETOS V2.1 REVISADOS — ESTUDIO (10 temas)](https://docs.google.com/document/d/1G4Gpao0ou7tGmBQ1iTLtC2pWcljbIEezmsh5ZHFPXYg/edit) | 2026-08-24 |
| SRC-GSI-B1-REPASO | [GSI_A2 — BLOQUE I — RESUMEN MAESTRO DE REPASO (10 temas)](https://docs.google.com/document/d/1aa9J2Ilhwcn0K-Z_9yQ2QD12DCEbiSWaYZc3upXorWQ/edit) | 2026-08-21 |
| SRC-GSI-B2-V21 | [GSI_A2 — BLOQUE II — APUNTES COMPLETOS V2.1 REVISADOS — ESTUDIO (16 temas)](https://docs.google.com/document/d/12jkpwzH8m5VoljIVPRi_Ofvqr7I_VBpVNGV0wmHfOFk/edit) | 2026-08-21 |
| SRC-GSI-B2-REPASO | [GSI_A2 — BLOQUE II — RESUMEN MAESTRO DE REPASO (16 temas)](https://docs.google.com/document/d/1h7n4dFYafS_3VMuL55TnEuVKhqaTheUoL-thDFQSr9w/edit) | 2026-08-21 |
| SRC-GSI-B3-V21 | [GSI_A2 — BLOQUE III — APUNTES COMPLETOS V2.1 REVISADOS — ESTUDIO (15 temas)](https://docs.google.com/document/d/1eUTbZtV2Jj1Y8P_pjOP7Tk86chx1r9lPyLwuz3vBCec/edit) | 2026-08-21 |
| SRC-GSI-B3-REPASO | [GSI_A2 — BLOQUE III — RESUMEN MAESTRO DE REPASO (15 temas)](https://docs.google.com/document/d/1l0nl4fc451Tl3XB9XZ4LRLZGLZEJxUueQvaMZoF8gcA/edit) | 2026-08-21 |
| SRC-GSI-B4-V21 | [GSI_A2 — BLOQUE IV — APUNTES COMPLETOS V2.1 REVISADOS — ESTUDIO (16 temas)](https://docs.google.com/document/d/1FMunz530TBBQnal_ttMprrZVGQ19wLAFksnJgEpd1os/edit) | 2026-08-21 |
| SRC-GSI-B4-REPASO | [GSI_A2 — BLOQUE IV — RESUMEN MAESTRO DE REPASO (16 temas)](https://docs.google.com/document/d/1PRbZRedDj9j2D4jPlDODZUKkmbCqPWxMM4hhGhjcZIo/edit) | 2026-08-21 |

Se convirtieron **50 documentos**: ocho manuales/resúmenes, 38 cuadernos/solucionarios y cuatro guías. Se conservan nombres y estructura relativa. Los Google Docs originales permanecen en Drive; las capturas nativas JSON y el HTML estructural intermedio están en `documents/originals/gsi/`, fuera de Git. Se usó MarkItDown 0.1.7 sin plugins ni OCR. La exportación DOCX no estuvo disponible por el conector; se utilizó el contenido nativo con tablas y estilos de párrafo, sin inventar texto.

El registro conserva 99 intentos de conversión, incluidos reintentos. El último estado de los 50 documentos utilizados es convertido; ninguno de ellos queda pendiente de OCR. Las salidas diferentes existentes se rechazan para evitar sobrescrituras. Se comprueban los hashes de los 50 Markdown, de las 57 secciones de estudio completas y de sus HTML. No se afirma haber convertido los 1906 archivos auxiliares.

## Banco y cobertura

| Origen | Total | Activas | Pendientes |
| --- | ---: | ---: | ---: |
| Oficial identificable | 0 | 0 | 0 |
| Manual/curado del corpus | 959 | 959 | 0 |
| Generado a partir del corpus | 803 | 0 | 803 |
| **Total** | **1762** | **959** | **803** |

Se importaron 960 preguntas de los packs P14–P19 y se descartó una duplicada exacta, conservando ambos identificadores en el log. Las preguntas curadas conservan las claves de sus solucionarios; todas se cotejan automáticamente. La autoría generada tiene cuatro opciones distintas, una clave, explicación y sección íntegra de respaldo con SHA-256. No se presenta contenido generado ni curado como oficial.

| Bloque | Total | Activas | Pendientes |
| --- | ---: | ---: | ---: |
| B1 | 223 | 160 | 63 |
| B2 | 700 | 480 | 220 |
| B3 | 419 | 159 | 260 |
| B4 | 420 | 160 | 260 |

| Tema | Caracteres de apuntes | Fuente | Preguntas | Activas | Pendientes |
| --- | ---: | --- | ---: | ---: | ---: |
| [B1-T01](../content/topics/B1-T01.md) | 8459 | Sí | 22 | 22 | 0 |
| [B1-T02](../content/topics/B1-T02.md) | 4420 | Sí | 21 | 21 | 0 |
| [B1-T03](../content/topics/B1-T03.md) | 3011 | Sí | 20 | 17 | 3 |
| [B1-T04](../content/topics/B1-T04.md) | 5450 | Sí | 20 | 20 | 0 |
| [B1-T05](../content/topics/B1-T05.md) | 4010 | Sí | 23 | 23 | 0 |
| [B1-T06](../content/topics/B1-T06.md) | 4214 | Sí | 20 | 0 | 20 |
| [B1-T07](../content/topics/B1-T07.md) | 4801 | Sí | 20 | 0 | 20 |
| [B1-T08](../content/topics/B1-T08.md) | 17377 | Sí | 33 | 33 | 0 |
| [B1-T09](../content/topics/B1-T09.md) | 11258 | Sí | 20 | 0 | 20 |
| [B1-T10](../content/topics/B1-T10.md) | 10862 | Sí | 24 | 24 | 0 |
| [B2-T01](../content/topics/B2-T01.md) | 8495 | Sí | 80 | 80 | 0 |
| [B2-T02](../content/topics/B2-T02.md) | 6413 | Sí | 80 | 80 | 0 |
| [B2-T03](../content/topics/B2-T03.md) | 7239 | Sí | 20 | 0 | 20 |
| [B2-T04](../content/topics/B2-T04.md) | 6135 | Sí | 20 | 0 | 20 |
| [B2-T05](../content/topics/B2-T05.md) | 10372 | Sí | 20 | 0 | 20 |
| [B2-T06](../content/topics/B2-T06.md) | 6846 | Sí | 20 | 0 | 20 |
| [B2-T07](../content/topics/B2-T07.md) | 8204 | Sí | 20 | 0 | 20 |
| [B2-T08](../content/topics/B2-T08.md) | 6703 | Sí | 20 | 0 | 20 |
| [B2-T09](../content/topics/B2-T09.md) | 5679 | Sí | 80 | 80 | 0 |
| [B2-T10](../content/topics/B2-T10.md) | 5425 | Sí | 20 | 0 | 20 |
| [B2-T11](../content/topics/B2-T11.md) | 7154 | Sí | 20 | 0 | 20 |
| [B2-T12](../content/topics/B2-T12.md) | 6672 | Sí | 20 | 0 | 20 |
| [B2-T13](../content/topics/B2-T13.md) | 9389 | Sí | 20 | 0 | 20 |
| [B2-T14](../content/topics/B2-T14.md) | 6792 | Sí | 160 | 160 | 0 |
| [B2-T15](../content/topics/B2-T15.md) | 7423 | Sí | 20 | 0 | 20 |
| [B2-T16](../content/topics/B2-T16.md) | 13458 | Sí | 80 | 80 | 0 |
| [B3-T01](../content/topics/B3-T01.md) | 4159 | Sí | 20 | 0 | 20 |
| [B3-T02](../content/topics/B3-T02.md) | 4790 | Sí | 20 | 0 | 20 |
| [B3-T03](../content/topics/B3-T03.md) | 4088 | Sí | 20 | 0 | 20 |
| [B3-T04](../content/topics/B3-T04.md) | 4473 | Sí | 20 | 0 | 20 |
| [B3-T05](../content/topics/B3-T05.md) | 5196 | Sí | 20 | 0 | 20 |
| [B3-T06](../content/topics/B3-T06.md) | 4989 | Sí | 20 | 0 | 20 |
| [B3-T07](../content/topics/B3-T07.md) | 6007 | Sí | 20 | 0 | 20 |
| [B3-T08](../content/topics/B3-T08.md) | 3393 | Sí | 20 | 0 | 20 |
| [B3-T09](../content/topics/B3-T09.md) | 3950 | Sí | 20 | 0 | 20 |
| [B3-T10](../content/topics/B3-T10.md) | 4656 | Sí | 20 | 20 | 0 |
| [B3-T11](../content/topics/B3-T11.md) | 4459 | Sí | 139 | 139 | 0 |
| [B3-T12](../content/topics/B3-T12.md) | 4637 | Sí | 20 | 0 | 20 |
| [B3-T13](../content/topics/B3-T13.md) | 4254 | Sí | 20 | 0 | 20 |
| [B3-T14](../content/topics/B3-T14.md) | 4938 | Sí | 20 | 0 | 20 |
| [B3-T15](../content/topics/B3-T15.md) | 7459 | Sí | 20 | 0 | 20 |
| [B4-T01](../content/topics/B4-T01.md) | 5772 | Sí | 20 | 0 | 20 |
| [B4-T02](../content/topics/B4-T02.md) | 4898 | Sí | 20 | 0 | 20 |
| [B4-T03](../content/topics/B4-T03.md) | 4266 | Sí | 20 | 0 | 20 |
| [B4-T04](../content/topics/B4-T04.md) | 5167 | Sí | 20 | 0 | 20 |
| [B4-T05](../content/topics/B4-T05.md) | 4392 | Sí | 20 | 0 | 20 |
| [B4-T06](../content/topics/B4-T06.md) | 4096 | Sí | 20 | 0 | 20 |
| [B4-T07](../content/topics/B4-T07.md) | 3751 | Sí | 20 | 0 | 20 |
| [B4-T08](../content/topics/B4-T08.md) | 3587 | Sí | 20 | 0 | 20 |
| [B4-T09](../content/topics/B4-T09.md) | 3689 | Sí | 20 | 0 | 20 |
| [B4-T10](../content/topics/B4-T10.md) | 3191 | Sí | 20 | 0 | 20 |
| [B4-T11](../content/topics/B4-T11.md) | 3540 | Sí | 20 | 0 | 20 |
| [B4-T12](../content/topics/B4-T12.md) | 4868 | Sí | 20 | 0 | 20 |
| [B4-T13](../content/topics/B4-T13.md) | 3821 | Sí | 20 | 0 | 20 |
| [B4-T14](../content/topics/B4-T14.md) | 3576 | Sí | 44 | 44 | 0 |
| [B4-T15](../content/topics/B4-T15.md) | 3712 | Sí | 64 | 64 | 0 |
| [B4-T16](../content/topics/B4-T16.md) | 8436 | Sí | 52 | 52 | 0 |

Los 41 temas deficitarios alcanzan al menos 20 solo al contar sus borradores. **No se utilizan esos borradores para afirmar cobertura validada.** El reporte JSON distingue cantidades activas y pendientes, texto de estudio, fuente y `minimum_met`.

## Calidad editorial

Se revisó una muestra estratificada de 58 preguntas de los cuatro bloques: 41 generadas y 17 curadas, con identificadores en `data/gsi-editorial-reviews.json`. Se registraron 120 correcciones individualizadas de distractores, redundancias y formulaciones; entre ellas, dos preguntas redundantes del bloque I, una afirmación de Java/.NET que necesitaba apoyo explícito y una formulación sobre UTC.

Se revisaron los 13 pares candidatos de los dos detectores de similitud. Se conservan las distinciones SOA/REST/PATCH, evento/artefacto Scrum, producto/servicio, diferencial/incremental, SLI/SLO, NAS/SAN, FEC/LSP, OSPF/BGP, Wi-Fi 6/7, autenticación general/biométrica y HDFS/NameNode. La justificación por par está en `logs/gsi-semantic-review.json`. No quedan enunciados idénticos normalizados; la detección semántica sigue siendo heurística.

El control de vigencia de normativa y tecnología está en [GSI_VIGENCIA.md](GSI_VIGENCIA.md). Kubernetes 1.37 requería un aviso de publicación posterior a la revisión del manual; se añadió sin sobrescribir el original. La dificultad de las preguntas generadas es orientativa, no calibrada con resultados de opositores. Las comprobaciones automáticas de formato, clave y hash no equivalen a una revisión humana de todo el banco.

## Funcionalidad y persistencia

Primer ejercicio: selección de 100 preguntas elegibles, 90 minutos, +1 / −1/3 / 0, corrección con aciertos, errores, blancos y porcentajes. La selección distribuye por temas disponibles; no afirma una cuota oficial por bloque. No hay reservas ni transformación a la nota del tribunal. La cobertura incompleta del banco limita su representatividad actual.

Segundo ejercicio: cuatro simulacros y ocho supuestos A/B, cinco preguntas, 180 minutos, esquema, guardado y autocorrección con rúbrica 30/10/5/5. Ocho solucionarios trazados. Biblioteca de 42 entradas: 38 documentos locales y cuatro carpetas A1 etiquetadas como apoyo, no como simulacros GSI. La rúbrica es autoevaluación; no hay calificación automática del texto libre.

Entrenamiento por tema/bloque/mixto, errores y no vistas; refuerzo e historial GSI. El temporizador guarda plazos absolutos y resiste recargas. La práctica escrita conserva una sesión actual: se debe exportar antes de sustituirla.

Identidad única `OPP-GSI / SYL-GSI-2025`. Las claves lógicas `gsi.*` usan almacenamiento versionado `oposiciones.OPP-GSI.SYL-GSI-2025.*.v2`; la práctica usa `gsi.OPP-GSI.SYL-GSI-2025.written.v1`. No se copian claves TAI ni datos sin identidad GSI. Exportación/importación valida identidades, preguntas, referencias, opciones, sesiones, plazos y rúbrica; el reinicio afecta exclusivamente al progreso GSI. Se admite el estado nulo de una sesión borrada y se intenta revertir cualquier escritura parcial que falle.

## Exclusión del producto anterior

`archive/tai-before-gsi/` conserva datos, contenidos, pruebas, instrucciones y scripts de la aplicación anterior. `archive/gsi-migration-scripts/` conserva herramientas de migración de una sola ejecución. No se ejecutan desde sus ubicaciones archivadas. Los planes `PLAN_*`, los informes antiguos de fases/M0–M3, `data/protected-artifacts.json`, `data/conversion_report.json`, documentos anteriores y fuentes técnicas históricas permanecen como evidencia fuera del runtime.

La búsqueda global `rg -i "\bTAI\b|33 temas"` se registra con archivo, línea, texto y clasificación en `logs/gsi-legacy-review.json`: 406 líneas en la suite de referencia, 0 sin clasificar. Las coincidencias corresponden a historia conservada, pruebas de rechazo/aislamiento, controles de exclusión o nombres de rutas del repositorio. Los activos `index.html`, `review.html`, `assets/`, los 57 temas y sus HTML no contienen TAI ni marcadores TODO/FIXME. No se han borrado originales para limpiar búsquedas. El inventario no enumera archivos ignorados ni se escanea recursivamente su propio log; su última ejecución puede incluir nuevas líneas de documentación posteriores a la suite.

## Validación reproducible

Comando único: `python scripts/run_gsi_suite.py`. Requisitos y alternativa para Playwright en [README](../README.md). La suite ejecuta las pruebas actuales; los validadores archivados con programas congelados anteriores se conservan como historia, no se hacen pasar por pruebas de esta versión.

| Comprobación | Resultado |
| --- | --- |
| JSON contra esquemas | 18 archivos, 16 esquemas; 0 errores |
| Referencias | 4 bloques, 57 temas, 21 documentos del catálogo de fuentes; 0 errores |
| Integridad de preguntas | 1762 preguntas; 0 errores de estructura |
| Validador final | 16615 controles correctos en la suite de referencia; 0 errores técnicos; 1 bloqueo editorial; código 2 |
| Sintaxis JavaScript | 37 módulos/archivos comprobados; 0 errores |
| Unitarias GSI | 76 aprobadas; 0 fallidas |
| Regresión en navegador | 288 aprobadas; 0 fallidas |
| Recorrido funcional HTTP | 72 comprobaciones aprobadas; 0 fallidas; 0 errores de consola o rutas HTTP rotas |
| Suite completa | `technical_pass: true`, `release_ready: false`, código 2 |

| Regresión mantenida | Aprobadas | Fallidas |
| --- | ---: | ---: |
| phase4 | 9 | 0 |
| phase5 | 24 | 0 |
| phase6 | 64 | 0 |
| phase7 | 45 | 0 |
| phase7b2 | 50 | 0 |
| m2 | 35 | 0 |
| m3 | 61 | 0 |

Las unitarias verifican, entre otros casos, 50 aciertos + 30 errores + 20 blancos = 40 puntos, todo correcto = 100 y todo incorrecto = −100/3; exclusión de preguntas pendientes, inactivas, ficticias y de otra oposición; los 57 filtros; recuperación del progreso y rúbrica sin claves extra.

El recorrido se ejecutó con Chrome sin interfaz, bajo `/gsi-test/`, en escritorio 1365×900 y móvil 390×844. Abrió los 57 apuntes, probó los 57 filtros (17 temas con respuesta y 40 con indisponibilidad explícita), cuatro bloques, mixto, errores, no vistas, simulacro completo, corrección, estadísticas/refuerzo, expiración y recarga de los dos temporizadores, autoevaluación escrita, exportación/reinicio/importación, navegación por teclado y la vista editorial sin mutaciones. Se inspeccionaron capturas de escritorio y móvil. No equivale a ejecutar test de contenido en los 40 temas todavía bloqueados.

Tras corregir únicamente la documentación se volvió a comprobar la guía bajo una subruta HTTP: acceso desde Inicio, 12 pasos y sus anclas, comando local opcional, escritorio, móvil, estilos de impresión y vuelta a la aplicación; sin errores HTTP ni de consola. La versión Markdown y la HTML explican el mismo acceso público y traslado de progreso.

## Incidencias corregidas y límites

- Se corrigieron el catálogo antiguo de 55 temas, rótulos auxiliares imprecisos y referencias a la aplicación previa.
- Se unificaron las versiones de importación de módulos para evitar instancias distintas del adaptador de persistencia.
- Se sustituyó una comprobación textual de HTML que confundía texto legítimo con URLs peligrosas por el análisis estructural seguro existente.
- Se corrigieron restauración de sesiones borradas, referencias inválidas importadas, aceptación de puntuaciones extra, caducidad y cronología de sesiones.
- Las primeras regresiones fallaron por contratos congelados (33 temas, GSI inactivo y claves antiguas). Se adaptaron a los contratos GSI conservando pruebas de puntuación, aislamiento y seguridad. El log inicial se conserva en `logs/gsi-regression-initial.json`.
- Se corrigió una expectativa del recorrido que buscaba un número donde la interfaz muestra «No hay preguntas activas». El estado vacío se prueba sin introducir preguntas pendientes.
- La descarga DOCX y el lanzador de MarkItDown no fueron utilizables; se completaron las conversiones con contenido nativo y la API Python de MarkItDown, sin OCR.
- La revisión automática de permisos rechazó la activación masiva sin revisión humana independiente. Los 803 borradores permanecen inactivos y se ha dejado la decisión pendiente al propietario; no se ha simulado una autorización.
- GitHub Pages está publicado por autorización expresa del propietario, con el estado editorial pendiente visible. No se prepara una PR de cierre ni se declara versión estable mientras la suite no alcance código 0.
- Se corrigió la guía para comenzar por el acceso web desde cualquier dispositivo y explicar cómo trasladar progreso desde la copia local. El README vuelve a enumerar todas las herramientas necesarias para reproducir las pruebas.

## Archivos entregados y siguiente paso

Principales archivos creados: `scripts/validate_gsi_final.py`, `scripts/run_gsi_suite.py`, importadores/compiladores GSI, `assets/js/written-practice.js`, `assets/js/progress-backup.js`, `assets/js/training-engine.js`, `assets/js/editorial-review.js`, `review.html`, los manifiestos `data/gsi-*`, los tres tests `tests/gsi-*.mjs`, 50 conversiones, 57 Markdown/HTML y la documentación actual. Se modificaron `index.html`, estilos, módulos existentes, catálogos, fuentes, bancos, esquemas, pruebas de regresión y `AGENTS.md`. El detalle de Git se obtiene comparando con `a8e2471`.

Fase técnica completada: conversión, datos, aplicación, exámenes, refuerzo, documentación y publicación de la versión utilizable autorizada. **Fase de versión estable pendiente:** resolver la revisión editorial del lote, regenerar solo aceptaciones válidas, repetir la suite y preparar el cierre únicamente con código 0. No faltan documentos canónicos por convertir; la limitación pendiente es la cobertura validada del banco.

Comprobación adicional de conservación: los 20 scripts trasladados coinciden con su revisión anterior (normalizando finales de línea), sin pérdidas; cero coincidencias de los patrones de credenciales comprobados entre archivos versionados y no ignorados. Evidencia en `logs/gsi-preservation-check.json`. Se retiró una línea vacía sobrante al final de la copia histórica de instrucciones; el original permanece en el historial Git.
