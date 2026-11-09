# Preparación editorial GSI-EDITORIAL-035

Fecha: **28-10-2026**. Estado: **20 propuestas pendientes de aprobación expresa, cero aceptadas, aplicadas, activadas o retiradas en este lote**.

Hash canónico vigente: `39f4239fcba0b46a15ad40453adc6f83921fa46131725728585cde3bd550d1f7`. Base activa: `e3e20ab879518c899806a70575eead28b3b35e6f`; no se restablece el repositorio ni se altera la aplicación aprobada del piloto.

[Ficha antes/después](GSI_REVISION_LOTE_035.md), [propuestas JSON](../content/question-reviews/lote-035.json) y [registro de preparación](../logs/gsi-editorial-035-preparation.json).

## Alcance y criterio

Se preparan las posiciones **681–700** de la cola: **trece manuales B2-T09 y siete IA B2-T10**. Se termina este tramo de tecnologías web y se inicia análisis de riesgos. La cola incluye preguntas manuales de ID anterior priorizadas después; no se cambia su orden previsto o su identidad. Oficiales, bancos publicados, borradores y entregas anteriores permanecen intactos.

Se conservan íntegros enunciado y cuatro alternativas de **ocho preguntas**: MAN-GSI-P18-072, MAN-GSI-P18-073, MAN-GSI-P18-074, MAN-GSI-P18-075, MAN-GSI-P18-077, MAN-GSI-P18-078, MAN-GSI-P18-079, MAN-GSI-P18-034. Las demás reciben precisiones de contexto o distractores próximos. Todas conservan concepto, ID, clave original, dificultad orientativa, procedencia y campos históricos de fuente. Se completa la explicación correcta y las tres justificaciones individuales bajo los IDs originales, con referencias al contenido.

Son **15 conceptuales y cinco de aplicación**: P18-076 (validación de un backend frente a controles del formulario), P18-078 (XML externo, caso existente), P18-080 (interfaz AAPP e intercambio), AI-B2-T10-001 (fallo conocido sin parche aplicado) y AI-B2-T10-006 (dependencias servicio/base de datos/almacenamiento). El contexto debe resolver una ambigüedad o exigir aplicar el concepto; no se impone una cuota por lote.

La propuesta conserva en el objeto futuro estados heredados, pero eso no cambia el banco publicado o activa contenido pendiente. Las aceptaciones IA históricas se preservan para su versión; no autorizan estas nuevas redacciones. La rúbrica es juicio del preparador, pendiente de revisión del propietario y sin atribuir revisión humana independiente.

## Revisión individual del preparador

| ID | Banco | Clave | Tipo | Enunciado y opciones | Motivo |
| --- | --- | --- | --- | --- | --- |
| MAN-GSI-P18-072 | manual | A | Conceptual | Conservados | Conservar íntegra comparación de prácticas de suministro y clave A; distinguir versión fija de abandono de actualizaciones y HTTPS/SRI de revisión de contenido. |
| MAN-GSI-P18-073 | manual | C | Conceptual | Conservados | Conservar íntegra comparación petición síncrona/temporizador/asíncrona/navegación, clave C; precisar trabajo de CPU y estado HTTP sin promesa de fluidez universal. |
| MAN-GSI-P18-074 | manual | A | Conceptual | Conservados | Conservar íntegros enunciado y alternativas, clave A; completar estados, executor y handlers para evitar confundir resultado futuro con hilo o plazo. |
| MAN-GSI-P18-075 | manual | B | Conceptual | Conservados | Conservar íntegra distinción async/await y clave B; completar propagación de error, suspensión de continuación y trabajo síncrono. |
| MAN-GSI-P18-076 | manual | B | Aplicación | Ajustados | Mantener validación cliente/servidor y clave B; caso de controles de formulario eludibles frente a validación de entrada y autorización. |
| MAN-GSI-P18-077 | manual | D | Conceptual | Conservados | Conservar íntegra comparación sanitizar/validar/escapar/normalizar, clave D; fijar contexto y evitar un filtro universal o librería nueva en el producto. |
| MAN-GSI-P18-078 | manual | A | Aplicación | Conservados | Conservar íntegro caso de XML externo y clave A; precisar versión, entidades y límites sin atribuir a XSD, extensión o no_network protección total. |
| MAN-GSI-P18-079 | manual | C | Conceptual | Conservados | Conservar íntegra comparación accesibilidad/responsive/SEO/identidad, clave C; completar robustez y no convertir un control aislado en certificación. |
| MAN-GSI-P18-080 | manual | D | Aplicación | Ajustados | Mantener caso de interfaz AAPP e integración y clave D; comparar soluciones parciales plausibles, retirando distractores manifiestamente ajenos o inseguros. |
| MAN-GSI-P18-001 | manual | A | Conceptual | Ajustados | Mantener lenguaje de marcas y clave A; distractores próximos de instrucción, transformación y codificación sin afirmar que una notación de marcado nunca pueda programar. |
| MAN-GSI-P18-009 | manual | D | Conceptual | Ajustados | Mantener ventaja de semántica HTML y clave D; comparar significado con estilo, análisis y ranking, con matiz de landmarks según contexto. |
| MAN-GSI-P18-022 | manual | A | Conceptual | Ajustados | Mantener buena formación sintáctica y clave A; cuatro criterios distintos y precisión sobre DTD/XSD frente a reglas de negocio o recuperación HTML. |
| MAN-GSI-P18-034 | manual | B | Conceptual | Conservados | Conservar íntegros enunciado y alternativas cercanas, clave B; explicar nombre expandido frente a validación, referencias y XPath. |
| AI-GSI-B2-T10-001 | ai | D | Aplicación | Ajustados | Mantener vulnerabilidad y clave D; precisar fallo conocido con parche no instalado, sin inferir explotación o valorar riesgo por la sola ausencia de actualización. |
| AI-GSI-B2-T10-002 | ai | D | Conceptual | Ajustados | Mantener distinción impacto/probabilidad y clave D; cuatro pares paralelos y escalas no limitadas a euros ni a una fórmula universal. |
| AI-GSI-B2-T10-003 | ai | C | Conceptual | Ajustados | Mantener residual tras salvaguardas y clave C; distinguir inherente, objetivo y aceptado, con eficacia y estado real frente a mera enumeración de controles. |
| AI-GSI-B2-T10-004 | ai | B | Conceptual | Ajustados | Mantener reducción de probabilidad/impacto y clave B; comparar efecto real con autoridad, objetivo y transferencia automática de responsabilidad. |
| AI-GSI-B2-T10-005 | ai | B | Conceptual | Ajustados | Mantener preparación del análisis y clave B; distinguir marco y responsables de soluciones, aceptación prematura o inventario aislado. |
| AI-GSI-B2-T10-006 | ai | B | Aplicación | Ajustados | Mantener dependencia entre activos y clave B; microcaso de servicio/base de datos/almacenamiento que distingue propagación de inventario o identidad de valor. |
| AI-GSI-B2-T10-007 | ai | B | Conceptual | Ajustados | Mantener aprobación por responsable competente y clave B; autoridad formal y límites, sin atribuir a todo proveedor/auditor o herramienta una decisión de gobierno. |

## Fuentes y localizadores

**29 URLs primarias distintas**, comprobadas el **28-10-2026**. La ficha asocia cada referencia con su ID, apartado y versión. MAGERIT usa páginas impresas, distintas del índice cero del PDF. La tabla agrupa URLs; una misma página o libro respalda apartados distintos en las propuestas individuales.

| Fuente | Localizador, versión y alcance | Fecha real |
| --- | --- | --- |
| [OWASP: Vulnerable Dependency Management](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerable_Dependency_Management_Cheat_Sheet.html) | Introduction; Context; Remark about the detection; Cases; Tools, Remediation and maintained backports. Cheat Sheet Series consultada; gestión de versiones y vulnerabilidades según contexto, no garantía de riesgo cero. | 2026-10-28 |
| [OWASP: Third Party JavaScript Management](https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html) | Major risks; Security Defense Considerations, Subresource Integrity y Keeping JavaScript libraries updated. Cheat Sheet Series consultada; procedencia, cambios y privilegios, sin atribuir revisión de seguridad a la mera entrega por HTTPS. | 2026-10-28 |
| [W3C: Subresource Integrity](https://www.w3.org/TR/2016/REC-SRI-20160623/) | Abstract; 3 Integrity metadata y verificación de respuesta; 4 verificación de subrecursos HTML. W3C Recommendation, 23-06-2016; versión estable concreta para cotejo por hash, no auditoría de seguridad del contenido. | 2026-10-28 |
| [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) | Making a request; Handling the response; Checking response status: fetch, promesas y errores HTTP. Documentación de Mozilla; fetch no rechaza automáticamente por un estado HTTP 404. | 2026-10-28 |
| [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) | Description; estados pending/fulfilled/rejected; encadenamiento y orden de handlers. Documentación de Mozilla; una promesa puede estar ya resuelta, su executor es síncrono y los handlers se planifican como jobs. | 2026-10-28 |
| [MDN: JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) | Job queue and event loop; run-to-completion; jobs y tareas asíncronas. Documentación de Mozilla; coordinación asíncrona distinta de paralelismo garantizado. | 2026-10-28 |
| [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | Description; promesa devuelta, suspensión en await y manejo de rechazo. Documentación de Mozilla; async no crea por definición hilos ni vuelve no bloqueante cualquier trabajo de CPU. | 2026-10-28 |
| [MDN: await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) | Description; conversión a promesa, rechazo y suspensión del contexto de ejecución. Documentación de Mozilla; pausa de la continuación, no bloqueo síncrono del hilo ni descarte automático de errores. | 2026-10-28 |
| [OWASP: Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) | Introduction; validación sintáctica/semántica; Common mistakes, Client-only checks y fronteras de confianza. Cheat Sheet Series consultada; validación autoritativa al recibir datos, distinta de autorización o escape de salida. | 2026-10-28 |
| [OWASP: Cross Site Scripting Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) | Output Encoding por contexto; HTML Sanitization; Safe Sinks; límites de filtros y CSP aislada. Cheat Sheet Series consultada; sanitización para contenido permitido y codificación contextual no son operaciones intercambiables. | 2026-10-28 |
| [Unicode: UAX 15, Unicode Normalization Forms](https://www.unicode.org/reports/tr15/) | 1 Introduction; Normalization Forms: equivalencia y formas normalizadas. Versión observada Unicode 18.0.0, revisión 58, 12-08-2026; solo diferencia conceptual de normalización frente a saneamiento, sin asumir esa versión en motores instalados. | 2026-10-28 |
| [OWASP: XML External Entity Prevention](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html) | Introduction; General Guidance; controles específicos de parser; External resources for transformations and validation. Cheat Sheet Series consultada; configuración según biblioteca/versión, entidades, red/recursos y límites de procesamiento; XSD no sustituye controles del parser. | 2026-10-28 |
| [W3C: XML 1.0, Fifth Edition](https://www.w3.org/TR/REC-xml/) | 1.1 Origin and Goals; 2.1 Well-Formed XML Documents; 2.4 Character Data and Markup; 4.3.3 Character Encoding. W3C Recommendation, 26-11-2008; buena formación sintáctica frente a validez DTD, evaluación XSD y significado de negocio. | 2026-10-28 |
| [W3C: XSD 1.1, Structures](https://www.w3.org/TR/xmlschema11-1/) | Abstract; 2 Conceptual Framework; 3 Schema Components; schema-validity assessment. W3C Recommendation, 05-04-2012; restricciones de instancia respecto al esquema aplicable, sin garantizar semántica de negocio o configuración segura del parser. | 2026-10-28 |
| [W3C WAI: Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/) | What is Web Accessibility; Making the Web Accessible; Evaluating Accessibility. Introducción WAI consultada; acceso por personas con discapacidades y diversidad de capacidades, no solo adaptación visual a pantallas. | 2026-10-28 |
| [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/) | WCAG 2 Layers of Guidance; principios 1 Perceivable, 2 Operable, 3 Understandable y 4 Robust. W3C Recommendation, 12-12-2024; estándar técnico citado como tal, no se deduce por esta cita la versión legal exigible a toda AAPP. | 2026-10-28 |
| [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) | Introducción, límites de las prácticas SEO y comprensión/rastreo del contenido. Documentación primaria del buscador consultada; no hay garantía automática de primera posición por usar elementos semánticos. | 2026-10-28 |
| [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) | 1.3 Background; 1.5 Scope; 1.8 HTML vs XML syntax. Living Standard consultado; cabecera 26-10-2026, significado documental y sintaxis frente a procesamiento o estilo. | 2026-10-28 |
| [W3C: Namespaces in XML 1.0](https://www.w3.org/TR/xml-names/) | 1 Motivation and Summary; 2.1 Basic Concepts; 3 Declaring Namespaces; 4 y 5 Qualified Names. Third Edition, W3C Recommendation, 08-12-2009; nombre expandido por URI y nombre local; prefijo local, sin descarga de esquema obligatoria. | 2026-10-28 |
| [W3C HTML 4.01: On SGML and HTML](https://www.w3.org/TR/html401/intro/sgmltut.html) | 3.1 Introduction to SGML; 3.2 SGML constructs used in HTML. HTML 4.01, 24-12-1999; definición y relación histórica del marcado, no parser del HTML moderno. | 2026-10-28 |
| [W3C: XSLT 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) | 1 Introduction; 5 Template Rules; 7 Creating the Result Tree. W3C Recommendation, 16-11-1999; función de transformación para distinguirla de marcado o codificación; no última versión. | 2026-10-28 |
| [WHATWG HTML: Semantics](https://html.spec.whatwg.org/multipage/dom.html#semantics-2) | 3.2.1 Semantics: significado de elementos/atributos y representación de contenido. Living Standard consultado; significado no equivalente a aspecto fijo o garantía de ranking. | 2026-10-28 |
| [WHATWG HTML: Sections](https://html.spec.whatwg.org/multipage/sections.html) | 4.3 Sections: article, nav y footer; significado y contextos de uso. Living Standard consultado; no se asigna el mismo rol de landmark a todo footer en cualquier contexto. | 2026-10-28 |
| [W3C WAI APG: Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) | Introduction; HTML Sectioning Elements; General Principles of Landmark Design; Landmark Roles. Guía APG consultada; estructura y navegación accesible, no certificación global de accesibilidad. | 2026-10-28 |
| [W3C CSS 2.1: Introduction](https://www.w3.org/TR/CSS2/intro.html) | 2.1 y 2.2 tutoriales HTML/XML; 2.3 Processing model: reglas de presentación. CSS 2.1; solo distinción de presentación respecto a semántica y análisis, no catálogo completo de CSS moderno. | 2026-10-28 |
| [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) | 4.1.2 Aceptación del riesgo, p. 49; 4.2.1 Roles y funciones, pp. 55–57; 4.2.5 Decisión de tratamiento, pp. 58–59. Octubre de 2012, NIPO 630-12-171-8; páginas impresas del libro. Método conceptual, sin usar sus referencias ENS antiguas como normativa vigente. | 2026-10-28 |
| [NIST SP 800-30 Revision 1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf) | 2.3.1 Risk Models; 3.1 Prepare for the Assessment, tareas 1-1 a 1-5; 3.2 tareas 2-3 Vulnerabilities, 2-4 Likelihood y 2-5 Impact; apéndices F/G/H. Septiembre de 2012; guía de valoración de riesgos de información, sin convertir escalas o modelos de ejemplo en medición empírica del banco. | 2026-10-28 |
| [NIST SP 800-39](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf) | 3.1 Framing Risk, supuestos, restricciones y autoridad; 3.3 Responding to Risk; Appendix H Risk Response Strategies. Marzo de 2011; gobernanza y decisiones dentro de tolerancias y restricciones legales. No asigna automáticamente un cargo español por nombre. | 2026-10-28 |
| [BOE: Real Decreto 311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) | Artículos 7, 11, 12, 13 y 14; anexo II, op.pl.1 Análisis de riesgos. Texto consolidado consultado, última actualización publicada 06-11-2024. Para efectos jurídicos se distinguen publicación oficial y consolidación informativa; no impone MAGERIT como única metodología. | 2026-10-28 |

Matices cotejados:

- Suministro: inventario y versión controlada requieren seguimiento; fijar versión no significa congelar sin actualización. HTTPS o SRI no acreditan que el código haya sido revisado o carezca de vulnerabilidades.
- Asincronía permite coordinar E/S sin espera de red síncrona; no garantiza que trabajo de CPU no bloquee. fetch cumple su promesa ante muchos estados HTTP de error, que deben comprobarse.
- Promise puede estar ya cumplida o rechazada. Executor síncrono y handlers en jobs no implican hilo nuevo, plazo o evento DOM global. async/await suspende una continuación y no descarta rechazos.
- Validación del cliente mejora la interacción, pero el backend descrito decide qué acepta. Validar no autoriza. El caso no propone añadir servidor a esta aplicación estática.
- Sanitización, validación, escape y normalización tienen funciones distintas. El destino determina el saneamiento; no se construye un filtro universal ni se añade una biblioteca al producto.
- XML externo exige configurar parser y accesos según versión. Una prueba con resolutores propios sin red no demuestra seguridad completa; XSD puede evaluar después del procesamiento de entidades y no lo configura por sí solo.
- Accesibilidad incluye percepción, operación, comprensión y robustez; no equivale solo a responsive, SEO o identidad visual. WCAG se cita como estándar técnico sin deducir automáticamente su incorporación jurídica en cada AAPP.
- Interfaz HTML y contrato XML cubren necesidades diferentes. Esquemas y namespaces no certifican accesibilidad, seguridad del parser o semántica del negocio.
- Marcado expresa anotaciones y no se identifica con instrucciones nativas, transformación o codificación. No se afirma que una notación de marcado nunca pueda describir programas.
- Semántica HTML apoya estructura y herramientas sin sustituir CSS, seleccionar parser XML o garantizar ranking. El rol de footer depende del contexto y una etiqueta aislada no acredita accesibilidad.
- Buena formación es sintaxis. La validez DTD y la evaluación XSD son comprobaciones respecto a declaraciones/esquemas; una referencia no basta para satisfacerlos. Namespaces identifican nombres expandidos, no validan estructuras.
- El servidor del microcaso tiene un fallo conocido, no solo una actualización cualquiera pendiente. Vulnerabilidad, amenaza, impacto y riesgo residual son categorías diferentes; no se deduce incidente o nivel de riesgo sin contexto.
- Impacto y posibilidad de ocurrencia se distinguen de costes, inventarios o plazos. Escalas y modelos deben declararse y no se usa una fórmula numérica universal como calibración real.
- Residual incorpora eficacia de salvaguardas; objetivo, inherente y aceptado no son sinónimos. Implantar una medida no prueba eficacia ni transfiere autoridad a proveedor, producto o auditor.
- El contexto, alcance, criterios y responsables guían la valoración. Dependencias conectan daños en soportes con consecuencias de servicios, sin imponer valores idénticos o daño automático en toda arquitectura.
- MAGERIT 2012 se usa para método; ENS se comprueba por separado en BOE consolidado con última actualización publicada 06-11-2024. No se toma el ENS antiguo citado en el libro como vigente ni se presenta MAGERIT como metodología única obligatoria.
- La aceptación formal del riesgo no permite incumplir requisitos legales o límites de autoridad. La pregunta no asigna a un cargo español una función por mera analogía con guías NIST estadounidenses.

Límites de acceso y alcance:

- Los PDF de MAGERIT y NIST se consultaron directamente en sus publicaciones oficiales mediante el lector web. No se descargaron a originales, convirtieron a Markdown o sometieron a OCR. Las páginas indicadas de MAGERIT son las impresas, distintas del índice cero de captura.
- Las fichas HTML de NIST muestran un aviso genérico de marco no autorizado; el respaldo de apartados internos procede de los PDF públicos leídos, no de ese aviso o de una autenticación privada.
- La fecha de comprobación es 28-10-2026; no se confunde con fechas de publicación de guías, WCAG o consolidación del BOE. La versión observada de Unicode no se atribuye a los motores instalados para ejemplos.
- El texto consolidado BOE tiene función informativa; se distingue de la publicación oficial. No se extrapola una política particular de un ministerio para asignar a todos los sistemas el mismo responsable de aceptación.
- Se conservan registros de procedencia y aceptaciones IA históricas sin convertirlos en nueva aceptación de contenido. No se atribuye nueva lectura privada de documentos Google Docs ni revisión humana independiente.
- La errata activa P18-026 del lote 032 sigue pendiente de aprobación/aplicación. Este lote conserva su registro y no permite declarar cierre editorial.

La preparación distingue metodología, guía y norma: MAGERIT es el método de octubre de 2012; NIST 800-30 r1, septiembre de 2012; NIST 800-39, marzo de 2011. ENS se coteja separadamente con el BOE consolidado actualizado el 06-11-2024. No se traslada al ENS vigente una referencia legal antigua de MAGERIT ni se asigna a un cargo español una función por analogía con NIST. La aceptación debe respetar competencia, límites y obligaciones.

## Métricas y pistas de construcción

Analizador 2.0.0 sobre las veinte preguntas, en simulación sin escritura de bancos.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 7 | 5 |
| Aciertos por primera alternativa de longitud máxima | 7 | 5 |
| Ratio correcta/distractor máximo 1,5–<2 | 3 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 16 | 0 |
| Feedback correcto e incorrecto idénticos | 7 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación inicial de absolutos en distractores | 0 | 0 |
| Empates de longitud máxima | 1 | 1 |
| Preguntas con los tres distractores explicados | 0 | 20 |

La primera alternativa máxima pasa de **35 % a 25 %** de acierto; la primera mínima acierta **5/20 (25 %)**. Se conserva la distribución de claves originales **A: 5, B: 7, C: 3, D: 5**; no mide letras visibles de sesiones barajadas. Los indicadores no acreditan calidad pedagógica, aceptación o calibración.

Las correctas únicas más largas son **P18-077** (111 frente a 103 caracteres), **P18-079** (125 frente a 111), **P18-080** (96 frente a 94), **P18-009** (80 frente a 74) y **AI-B2-T10-001** (48 frente a 47). Las dos primeras conservan su construcción completa con mecanismos o conceptos próximos; en las otras tres la diferencia responde a la definición o a condiciones pertinentes. Se registran longitudes y justificaciones por ID, sin añadir relleno o cambiar claves.

Se completan los dieciséis feedback breves y se separan siete feedback idénticos de sus explicaciones de error. Las veinte versiones propuestas tienen sesenta justificaciones individuales. Desaparecen tres señales graduales de longitud; una ausencia de alertas sigue sin ser una aprobación editorial.

## Historial y legibilidad

La primera preparación tenía hash `829f5e750da1e1d009d1593fb848345b606e0bc698468f18b1100b943e64790a` y nueve correctas únicas más largas. Se acortaron cuatro formulaciones redundantes: P18-001 y AI-B2-T10-003, 006 y 007, manteniendo significado y claves. No se cambiaron distractores, enunciados, fuentes o feedback en ese refinamiento. El registro conserva los contenidos previos y permite reconstruir el hash. El vigente es `39f4239fcba0b46a15ad40453adc6f83921fa46131725728585cde3bd550d1f7`; ambas versiones siguen sin aceptación o aplicación.

La ficha usa `--literal-content`, incorporado en el lote 031. El generador y sus pruebas se protegen por hash y no se modifican. Se comprueban veinte apartados, cuarenta marcas de correcta entre antes y propuesta, enlaces de fuente y ausencia de nodos de formulario creados por el texto. Se inspecciona una captura de AI-B2-T10-003 y se comprueba que la ficha no desborda a 390 px.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-035.json --render docs/GSI_REVISION_LOTE_035.md --literal-content
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

Resultados ejecutados el **28-10-2026**; todos los comandos de validación finales terminaron con código de salida 0:

- CLI editorial: hash vigente correcto, simulación de trece manuales y siete IA, cero cambios oficiales y cero escrituras en bancos. Ficha literal reproducible.
- **19 pruebas editoriales mantenidas**, **57 JSON y 21 esquemas**, **1.964 preguntas** con estructura válida y **19.251 controles de integridad** correctos. Documentación sincronizada y catálogo de **4 bloques, 57 temas y 37 Markdown** con referencias válidas.
- **155 archivos protegidos** sin cambios, incluidos bancos, recibos y registro de aplicaciones, entregas anteriores, doce archivos de borradores IA, evidencia, formateador literal y sus pruebas. Oficiales idénticas byte a byte a HEAD y al hash auditado; los tres bancos activos conservan contenido de HEAD y hashes de inicio de preparación.
- **79 enlaces locales** comprobados en la ficha, este informe y el plan. IDs y claves conservados, ocho enunciados con sus cuatro alternativas intactos y sesenta justificaciones individuales presentes. Referencias con versión, localizador y fecha real: 29 URLs distintas.
- Procedencia, índices y campos históricos de fuente preservados. Las huellas de registro originales de las siete IA coinciden con sus revisiones históricas; esas revisiones no se consideran aceptación de la nueva redacción.
- Aceptación vacía, recibo del piloto y registro histórico IA rechazados como autorización de este lote. Guardas de regeneración manual e IA correctas; no hay aceptaciones 002–035 y el registro de aplicaciones solo contiene el lote 001.
- Hash inicial reconstruido; el refinamiento acorta solo el texto de cuatro alternativas correctas y conserva sus IDs y claves, todos los distractores, enunciados, fuentes y feedback. Concepto preservado según revisión individual del preparador, todavía pendiente del propietario.
- **14 ejemplos Python/lxml y 20 controles aislados Chrome** correctos. Se confirma salida 0 del proceso Chrome mediante su identificador de sesión; no se reinicia por una observación parcial. Captura de AI-B2-T10-003 inspeccionada y ficha sin desbordamiento horizontal a 390 px.
- Tres informes derivados iguales en fecha y contenido respecto al inicio; frente a HEAD solo cambia la fecha de validación. `git diff --check` y revisión de espacios finales de los cuatro archivos nuevos correctos. HEAD permanece en `e3e20ab879518c899806a70575eead28b3b35e6f`, sin nuevo commit.

El incidente de revisión automática por límite de uso quedó resuelto antes de estas ejecuciones. No se atribuye éxito a la acción que no llegó a ejecutarse. Los detalles del incidente, motores, ejemplos, límites y cotejos se conservan en el registro.

El mensaje técnico de cero bloqueos no acredita cierre editorial ni resuelve la errata activa P18-026 del lote 032. Se mantiene pendiente su aprobación y aplicación. Se distinguen preparación conceptual, aceptación del propietario, señales automáticas y calibración todavía no realizada.

Los **14 ejemplos Python/lxml** usan cadenas propias, entidades con URNs controladas y un resolutor que devuelve solo texto ficticio. No acceden a archivos o redes; muestran buena formación/validez, nombres expandidos, resolución y carga de DTD separadas y diferencia entre normalización y saneamiento. El motor observado usa lxml 6.1.1.0 y unicodedata 15.0.0, distinto de la fuente Unicode 18. No acreditan seguridad general del parser o compatibilidad completa con XSD 1.1/Unicode 18.

Los **20 controles Chrome** observan executor/handlers de promesas, await y rechazo, fetch con 404/fallo y respuesta retenida, controles de formulario modificables, landmarks y ficha. Las respuestas HTTPS se simulan mediante route.fulfill y no salen a servicios externos. La petición pendiente se confirma antes de comprobar interacción; después se libera y se espera su finalización. No se prueba un backend real, un saneador general o conformidad completa de accesibilidad. Las siete preguntas de riesgos se revisan conceptualmente por fuentes y juicio del preparador; esos ejemplos no prueban aceptación o valoración real.

No se repite la suite HTTP de Entrenamiento, Simulacros, estadísticas o Refuerzo, puesto que bancos activos y código de aplicación no cambian. Los ejemplos aislados no se presentan como un nuevo recorrido del producto.

Una acción inicial para crear los scripts de ejemplo no se ejecutó: la revisión automática no pudo completarse por límite de uso de la cuenta, sin calificar la acción como insegura. Al recuperar acceso se comprobó que esos archivos no existían y se retomó su creación y ejecución mediante el mismo circuito de herramientas. Los resultados finales corresponden a las ejecuciones posteriores correctas; el incidente no se cuenta como una prueba ejecutada.

## Entrega y continuidad

Creados: `content/question-reviews/lote-035.json`, `docs/GSI_REVISION_LOTE_035.md`, este informe y `logs/gsi-editorial-035-preparation.json`. Modificados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los tres informes derivados de cobertura, validación final y revisión histórica se regeneran y cotejan con los ya fechados el 28-10-2026; frente a HEAD solo difiere la fecha de validación.

Acumulado: **20 aceptadas y 680 propuestas pendientes**, con **1.742 decisiones pendientes de aceptación**, de las cuales **1.062** todavía sin propuesta. Los lotes 002–035 reúnen 113 incidencias IA originales, otras 169 IA y 398 manuales. Las 128 incidencias originales conservan quince aceptadas/aplicadas y 113 propuestas pendientes; no se confunde propuesta con resolución.

Sin conversiones documentales, OCR o nuevas conversiones pendientes; los PDF se leyeron en sus fuentes, sin crear conversiones locales. Oficiales, originales y entregas anteriores intactos. Sin nuevo commit, publicación, fusión o aplicación. La errata activa P18-026 del lote 032 sigue pendiente de aprobación y corrección aplicada.

Para revisar, cotejar cada ID en la ficha y sus fuentes antes de aprobar expresamente el hash vigente. El siguiente lote sigue por bloque y tema. El cierre exige decisión individual del propietario sobre los 1.762 IDs, resolución de errores confirmados en versiones activas y comprobaciones técnicas/de cobertura superadas. Preparación, aceptación humana y calibración todavía no realizada se mantienen diferenciadas.
