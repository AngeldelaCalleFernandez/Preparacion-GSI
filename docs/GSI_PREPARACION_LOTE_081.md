# Preparación de GSI-EDITORIAL-081

Fecha: 4 de noviembre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `f32c0921733db58f00b2cf06e204785347426ba4c0bb7a73baf8779801f3c319`.

## Alcance y criterio

Posiciones 1601–1620 de la cola: dos IA B4-T13 (019–020) y dieciocho manuales B4-T14, práctica 19 (006, 009–024 y 026; la lista exacta es la tabla). Se mantienen IDs, conceptos, claves, dificultad orientativa, estados y procedencia. No se requieren reemplazos o retiradas por cambio de clave o significado.

Catorce conceptuales y seis aplicaciones: AI019 y MAN009/012/018/020/023. Los casos tratan vida útil sin actualización, acceso5GS a IMS, centralita SIP sin IMS, inventario funcional, convergencia fijo-móvil y terminación de una llamada ya establecida. Distribución descriptiva, sin cuota impuesta. Se conservan **trece enunciados**; **MAN-GSI-P19-021 conserva además sus cuatro alternativas** porque distinguen correctamente SIP/RTP/SDP/RTCP. También se mantiene el texto correcto de019 y026.

Todas incorporan explicación correcta y tres justificaciones individuales por ID original y contenido, compatibles con barajado. No se cambia una clave para repartir letras ni se alargan métodos con relleno. La pregunta 015 se centra en comprender funciones P/I/S-CSCF; no presume qué interfaces pueden omitirse del estudio ni predice el examen.

[Ficha antes/después](GSI_REVISION_LOTE_081.md) · [Propuesta JSON](../content/question-reviews/lote-081.json) · [Registro](../logs/gsi-editorial-081-preparation.json).

La rúbrica es juicio documental del preparador y sigue pendiente del propietario. No acredita revisión humana independiente, funcionamiento de un despliegue o calibración. Las dos aceptaciones históricas IA conservan su alcance sobre textos anteriores y no aceptan estas versiones.

## Revisión individual

| ID | Banco | Clave conservada | Forma | Enunciado conservado |
| --- | --- | :---: | --- | :---: |
| AI-GSI-B4-T13-019 | ai | A | Aplicación | No |
| AI-GSI-B4-T13-020 | ai | C | Conceptual | Sí |
| MAN-GSI-P19-006 | manual | A | Conceptual | Sí |
| MAN-GSI-P19-009 | manual | D | Aplicación | No |
| MAN-GSI-P19-010 | manual | A | Conceptual | Sí |
| MAN-GSI-P19-011 | manual | D | Conceptual | Sí |
| MAN-GSI-P19-012 | manual | D | Aplicación | No |
| MAN-GSI-P19-013 | manual | A | Conceptual | Sí |
| MAN-GSI-P19-014 | manual | C | Conceptual | Sí |
| MAN-GSI-P19-015 | manual | C | Conceptual | No |
| MAN-GSI-P19-016 | manual | D | Conceptual | Sí |
| MAN-GSI-P19-017 | manual | C | Conceptual | Sí |
| MAN-GSI-P19-018 | manual | B | Aplicación | No |
| MAN-GSI-P19-019 | manual | D | Conceptual | No |
| MAN-GSI-P19-020 | manual | C | Aplicación | Sí |
| MAN-GSI-P19-021 | manual | B | Conceptual | Sí |
| MAN-GSI-P19-022 | manual | A | Conceptual | Sí |
| MAN-GSI-P19-023 | manual | C | Aplicación | No |
| MAN-GSI-P19-024 | manual | A | Conceptual | Sí |
| MAN-GSI-P19-026 | manual | A | Conceptual | Sí |

Las veinte decisiones son pending_review. No se identifican nuevos errores confirmados de clave. Se precisa el ámbito de IMS en 5GS, diferencia función/despliegue, rol de SDP, separación de control/medios y comportamiento de métodos SIP. La procedencia original se conserva literalmente.

## Fuentes y vigencia

**14 URLs primarias comprobadas el 04-11-2026: trece cuerpos HTML y un PDF con lectura seleccionada**.

- La revisión IoT trata software actualizable, verificación, identidad y soporte: ni segmentar corrige firmware ni una firma demuestra ausencia de fallos.

- TS 23.228 V18.11.0 Release 18: lectura seleccionada de páginas impresas27–28/49–51/327 y figuras 4.0/Y.0-1. Se conserva el PDF original con SHA256 y se inspeccionan tres páginas renderizadas; no lectura completa ni versión más reciente atribuida.

- Se distinguen entrada del terminal, interrogación y servicio de sesión. La función I-CSCF admite control de borde adicional; funciones lógicas no equivalen necesariamente a máquinas separadas.

- El anexo Y respalda acceso IMS desde5GS. Se excluye la extrapolación a cualquier red 5G y a generaciones futuras no examinadas.

- SIP controla, SDP describe, RTP transporta y RTCP informa. La negociación requiere procedimientos como offer/answer; el formato SDP no negocia por sí solo.

- BYE se refiere a una sesión ya establecida, CANCEL a una solicitud pendiente y REGISTER a asociaciones de contactos. Las extensiones y otras situaciones de diálogo no se universalizan.

- NGN se usa como marco conceptual histórico; independencia del acceso y QoS no garantizan continuidad o recursos ilimitados. BOE delimita materia y no predice el contenido de los exámenes.

El PDF es TS 123 228 V18.11.0 (2026-01), Release 18, de 390 páginas. Se leen páginas PDF 28–29,50–52 y328, correspondientes a impresas27–28,49–51 y327. Se inspeccionan renders de PDF 29,51 y328, incluidas figuras 4.0/Y.0-1 y notas de borde. No se declara lectura de las 390 páginas ni condición de última edición. Copia original auxiliar: tmp/pdfs/gsi-editorial-081-etsi-123228-v181100.pdf, SHA256 `792b189a047efabb36696611c30605ab456ac6da9503fba740fdf7de46d1b439`. La copia y renders son auxiliares locales de investigación, fuera del producto publicado; la ficha conserva la URL oficial.

Localizadores contrastados: TS23.228 §4.0/4.1/4.6 y Y.0; RFC4457 §1/2.1; RFC3261 §1–3/9/10/11/13/15.1; RFC8866 §1/2/3.1; RFC3264 resumen/§1; RFC3550 §1/6; RFC2475 §1.1/2.5. El BOE, anexo IX IV.14, delimita materias y no jerarquiza preguntas futuras.

## Límites de acceso y verificación

- El candidato ETSI 19.8 y la URL candidata de tecnologías IMS de 3GPP no fueron accesibles. Se consulta la edición oficial 18.11 de ETSI y RFC 4457; no se atribuye lectura de esos candidatos.

- La ruta NIST identification no fue accesible; el enlace del catálogo conduce a identity, cuyo cuerpo sí se comprobó.

- La descarga inicial del PDF en el entorno restringido falló al resolver DNS. El reintento autorizado con acceso de red terminó correctamente; no fue rechazo de seguridad ni fallo de la suite.

- Las capturas solicitadas al lector web no proporcionaron imágenes visibles a través de esta herramienta. Se descargó el mismo PDF público y se renderizaron localmente páginas seleccionadas con Poppler; no se atribuye inspección visual a las capturas web sin imagen.

- No se convierten documentos a Markdown, no se usa OCR y no se modifica el original descargado ni los originales del proyecto. No se despliegan IMS, llamadas SIP o dispositivos IoT.

Cuatro incidencias de acceso a fuentes y una limitación del visor PDF registradas. El fallo de DNS local se recuperó mediante descarga autorizada con red y verificación del original; no fue rechazo de seguridad ni fallo de la suite. No se atribuye lectura a las URLs candidatas inaccesibles. No se abren otras especificaciones enlazadas como si se hubieran revisado íntegramente.

## Métricas y forma

| Señal | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 7 | 6 |
| Acierto primera máxima (%) | 35.0 | 35.0 |
| Ratio 1,5–menos de 2 | 4 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de15 palabras | 20 | 0 |
| Feedback correcto/incorrecto idéntico | 2 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

La primera máxima permanece en 35 %: no se modifica texto preciso solo para mejorar esa señal. Seis correctas únicas más largas tienen diferencias de 1–5 caracteres y proporciones menores de 1,15; REGISTER conserva ocho caracteres frente a OPTIONS de siete. Primera mínima correcta: 4/20 (20 %); sus proporciones inversas no superan 111/92, de la pregunta 021 conservada. Incluyendo empates hay seis mínimas correctas: BYE tiene tres caracteres frente a REGISTER de ocho, ratio 8/3, justificado por los nombres reales de métodos. Se documentan estos extremos, sin ocultarlos con relleno ni presentar ausencia de alertas como certificación pedagógica. Dificultad orientativa y calibración no realizada.

## Validación

Resultados: **19 pruebas editoriales, 103 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Documentación, referencias y progreso sincronizados; ocho comandos con código 0. Simulación en memoria de **18 manuales y dos IA**, conservando IDs, claves, estados y procedencia. **60 justificaciones individuales**, dos hashes históricos IA preservados sin extender su aceptación, tres aceptaciones improcedentes rechazadas y dos barreras de regeneración verificadas. **339 archivos protegidos intactos**, doce borradores conservados y **174 enlaces locales existentes**.

**Diez comprobaciones Chrome correctas**, sin desbordamiento a 1280/390 px, y captura de BYE/CANCEL inspeccionada. Trece enunciados y una pregunta con todas sus alternativas conservados; catorce referencias primarias con métodos y fechas declarados. PDF original con hash comprobado y tres renders inspeccionados. El único fallo recuperado de esta preparación fue de resolución DNS al obtener la fuente, con reintento autorizado correcto. Sin fallos de la suite mantenida o reparaciones del verificador y sin cambios del contenido posteriores al hash inicial.

Derivados con contenido y fecha 04-11 iguales al inicio; frente a HEAD solo cambia fecha 26-10→04-11. Bancos activos iguales a HEAD y oficiales idénticas en bytes a la auditoría. Sin nuevas aceptaciones, aplicación, publicación, fusión o commit. No se repite la suite HTTP del producto ni se prueban despliegues IMS/SIP/IoT; Chrome verifica presentación y la normativa respalda conceptos. Tres incidencias anteriores y las decisiones pendientes mantienen abierto el cierre editorial.

Comandos desde la raíz:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_081_browser.mjs
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B tmp/validate_editorial_081.py
```

Chrome ha comprobado la ficha literal a 1280/390 px. No se repite la [suite HTTP previa aplicada al lote 001](../logs/gsi-editorial-001-revalidation-2026-10-30.json): propuestas inactivas y aplicación/bancos intactos. Al aplicar contenido aprobado habrá que comprobar Entrenamiento, Simulacros, estadísticas y Refuerzo; ni la ficha ni la lectura normativa sustituyen ese recorrido.

## Incidencias y cierre

Siguen pendientes las correcciones propuestas de las tres incidencias activas anteriores: lote 032, XML; lote 054, preservación de dependencias al normalizar; lote 055, cota O(n). No están corregidas en el banco activo y mantienen abierto el cierre editorial.

Tras preparar 081: **20 aceptadas, 1600 propuestas pendientes, 142 sin propuesta y 1742 decisiones pendientes del propietario**. Cubiertos 1620/1762 IDs sin duplicar. Las 128 incidencias IA originales tienen propuesta: 15 aplicadas y 113 pendientes; no acredita resolución editorial. La cola pendiente preparada comprende 113 IA originales, 674 IA restantes y 813 manuales.

## Entrega y cómo probar

Creados: propuesta JSON, ficha, informe y registro. Modificados: plan y progreso. El validador regenera tres informes derivados; se ha comprobado que mantienen contenido y fecha 04-11 del inicio. Auxiliares, original normativo y capturas en tmp. Sin conversiones documentales a Markdown, OCR o dependencias nuevas; documentos originales del proyecto intactos y ninguna conversión nueva pendiente.

Abre la ficha y contrasta IoT, funciones IMS, independencia del acceso y protocolos de sesión/medios. Revisa cada una de las sesenta justificaciones y sus fuentes. La aprobación debe identificar el hash exacto.

Sin aceptar, aplicar, activar, retirar, publicar, fusionar o crear commit. Las 202 oficiales y bancos activos intactos. Siguiente paso: revisión del propietario y preparación de las 142 preguntas restantes con el mismo estándar.
