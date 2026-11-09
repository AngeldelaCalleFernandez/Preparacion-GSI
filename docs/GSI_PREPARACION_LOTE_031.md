# Preparación del lote GSI-EDITORIAL-031

Preparado el **28-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico: `c903aafa3b17125effe750222ebb6dedc88731eb4c395bec3d1157deacbac4b6`.

La [ficha antes/después](GSI_REVISION_LOTE_031.md), el [JSON de propuestas](../content/question-reviews/lote-031.json) y el [registro técnico](../logs/gsi-editorial-031-preparation.json) conservan versiones, motivos, fuentes y hashes. La aceptación del piloto no autoriza este contenido.

## Alcance y decisiones individuales

Posiciones **601–620** de `review_order`: **13 IA de B2-T08** y **siete manuales de B2-T09**. Se conservan conceptos, IDs, claves, procedencia, campos históricos y dificultad orientativa. Las veinte decisiones son `pending_review`.

Se conservan íntegros enunciados y alternativas de **ocho preguntas**: AI-GSI-B2-T08-009, AI-GSI-B2-T08-013, AI-GSI-B2-T08-015, AI-GSI-B2-T08-008, AI-GSI-B2-T08-010, MAN-GSI-P18-003, MAN-GSI-P18-004 y MAN-GSI-P18-007. Ya delimitan cálculos, categorías o conceptos defendibles; se completan feedback y fuentes. `revise` identifica esas nuevas versiones, que requieren aceptación propia. No hay retiradas o reemplazos.

Hay **15 conceptuales y cinco aplicaciones**: NAT, MTU IPv6, análisis de un fragmento HTML/XML, doctype en text/html y región principal de una página. Los casos aportan condiciones para discriminar el concepto. La orientación global 70/30 no se convierte en cuota por lote.

| ID | Modalidad | Motivo individual |
| --- | --- | --- |
| AI-GSI-B2-T08-009 | Conceptual | Conservar literalmente pregunta y alternativas numéricas, con clave C; distinguir total y asignable y acotar excepciones de prefijos pequeños. |
| AI-GSI-B2-T08-011 | Conceptual | Conservar identificación RFC 1918 y clave A; cuatro prefijos comparables y distinción entre privado, compartido y documentación. |
| AI-GSI-B2-T08-012 | Aplicación | Conservar traducción frente a seguridad y clave A; caso de red con NAT que distingue funciones coexistentes sin negar efectos incidentales de topología. |
| AI-GSI-B2-T08-013 | Conceptual | Conservar íntegra la pregunta y sus cuatro categorías, con clave B; precisar capa IPv6 frente a posibles tramas de difusión del enlace. |
| AI-GSI-B2-T08-014 | Conceptual | Conservar clasificación link-local y clave A; cuatro prefijos reales sin sufijos de pista y distinguir clasificación /10 de formato de dirección. |
| AI-GSI-B2-T08-015 | Conceptual | Conservar enunciado y opciones, con clave D; explicar máximo de una aparición frente a número de grupos y representación canónica. |
| AI-GSI-B2-T08-016 | Conceptual | Conservar fiabilidad/orden de TCP y clave A; alternativas de garantías de transporte plausibles y alcance de flujo de bytes, no mensajes o cifrado. |
| AI-GSI-B2-T08-017 | Conceptual | Conservar DORA y clave C; comparar permutaciones de mensajes reales y acotar adquisición inicial frente a renovación. |
| AI-GSI-B2-T08-019 | Conceptual | Conservar BGP y clave B; cuatro protocolos de routing reales y matiz eBGP/iBGP, evitando describir OSPF como interdominio. |
| AI-GSI-B2-T08-020 | Aplicación | Conservar ausencia de fragmentación en routers y clave B; microcaso de MTU que distingue descarte/aviso de adaptación por el origen. |
| AI-GSI-B2-T08-001 | Conceptual | Conservar pares frente a capas adyacentes y clave B; cuatro combinaciones paralelas sin una correcta mucho más detallada. |
| AI-GSI-B2-T08-008 | Conceptual | Conservar íntegro cálculo y alternativas, con clave C; explicar total frente a asignables y tamaño de los prefijos vecinos. |
| AI-GSI-B2-T08-010 | Conceptual | Conservar íntegra máscara y opciones, con clave A; completar conversión binaria y errores de prefijos vecinos. |
| MAN-GSI-P18-002 | Conceptual | Conservar metalenguaje SGML y clave D; cuatro responsabilidades próximas de documentos web sin distractores largos o ajenos. |
| MAN-GSI-P18-003 | Conceptual | Conservar literalmente la relación y las cuatro alternativas bien comparables, con clave C; completar objetivos y alcance de XML 1.0. |
| MAN-GSI-P18-004 | Conceptual | Conservar enunciado y alternativas ya defendibles, con clave C; precisar las dos sintaxis de HTML y distinguir marcado, HTTP y scripts. |
| MAN-GSI-P18-005 | Aplicación | Conservar distinción HTML/XML y clave B; microcaso de br sin cierre que evalúa procesamiento, no solo una etiqueta de clasificación. |
| MAN-GSI-P18-006 | Aplicación | Conservar función de doctype y clave D; acotar text/html y separar compatibilidad de esquema, namespace y codificación. |
| MAN-GSI-P18-007 | Conceptual | Conservar íntegro enunciado y opciones, con clave D; aclarar metadatos frente a contenido y sus posibles efectos visibles. |
| MAN-GSI-P18-008 | Aplicación | Conservar semántica de main y clave B; caso de cabecera/menú/artículo con cuatro elementos plausibles y matiz de main ocultos. |

Cada propuesta incluye explicación de la correcta y tres errores individualizados, asociados a los IDs originales y referidos al contenido para permitir barajado. La revisión conceptual es del preparador. Los hashes y aceptaciones históricos IA conservan su alcance anterior; las fuentes manuales conservan también índices nativos y procedencia del solucionario. No se modifica ningún banco activo, borrador o aceptación.

## Fuentes y fechas

Se consultaron **30 URLs primarias distintas el 28-10-2026**. Cada referencia tiene localizador, versión o alcance y fecha real. Se distingue RFC normativo o histórico, registro IANA, recomendación XML, fuente histórica de SGML y Living Standard de HTML.

| Fuente | Comprobación | Localizador y versión o alcance |
| --- | --- | --- |
| [IETF RFC 4632: Classless Inter-domain Routing (CIDR): The Internet Address Assignment and Aggregation Plan](https://www.rfc-editor.org/rfc/rfc4632.html) | 2026-10-28 | 3.1 IP Addressing y tabla de tamaños de bloques según longitud de prefijo. BCP 122, agosto de 2006; solo aritmética y notación de prefijos, sin trasladar políticas históricas de asignación a recomendaciones actuales. |
| [IETF RFC 3021: Using 31-Bit Prefixes on IPv4 Point-to-Point Links](https://www.rfc-editor.org/rfc/rfc3021.html) | 2026-10-28 | 2 y 2.1: las dos direcciones de /31 en enlaces punto a punto y excepción al descuento tradicional. Standards Track, diciembre de 2000; no se aplica la excepción /31 a la pregunta tradicional /27. |
| [IETF RFC 1918: Address Allocation for Private Internets](https://www.rfc-editor.org/rfc/rfc1918.html) | 2026-10-28 | 3 Private Address Space: 10/8, 172.16/12 y 192.168/16. BCP 5, febrero de 1996; reservado privado no equivale a protección, cifrado o una garantía de filtrado. |
| [IETF RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space](https://www.rfc-editor.org/rfc/rfc6598.html) | 2026-10-28 | 1 Introduction y 7 IANA Considerations: 100.64.0.0/10, distinto de RFC 1918. BCP 153, abril de 2012; espacio compartido para casos como CGN, no bloque privado RFC 1918. |
| [IETF RFC 5737: IPv4 Address Blocks Reserved for Documentation](https://www.rfc-editor.org/rfc/rfc5737.html) | 2026-10-28 | 3 Documentation Address Blocks: TEST-NET-1, 192.0.2.0/24. Enero de 2010; reservado para ejemplos, no rango privado de RFC 1918. |
| [IETF RFC 3022: Traditional IP Network Address Translator (Traditional NAT)](https://www.rfc-editor.org/rfc/rfc3022.html) | 2026-10-28 | 2 Overview: Basic NAT y NAPT; 6 Security Considerations. Enero de 2001; traducción de direcciones y puertos, sin inferir cifrado, autorización de usuario o reparación de aplicaciones. |
| [IETF RFC 4864: Local Network Protection for IPv6](https://www.rfc-editor.org/rfc/rfc4864.html) | 2026-10-28 | 2 Local Network Protection with IPv4: traducción, ocultación y filtrado son aspectos distintos; protección sin depender de NAT. Mayo de 2007; solo diferencia de funciones, sin afirmar que NAT carezca de efectos de topología o filtrado en productos concretos. |
| [IETF RFC 4291: IP Version 6 Addressing Architecture](https://www.rfc-editor.org/rfc/rfc4291.html) | 2026-10-28 | 2 tipos sin broadcast; 2.2 representación textual y uso único de ::; 2.4 prefijos; 2.5.6 link-local; 2.7 multicast. Febrero de 2006; clasificación FE80::/10 y formato link-local con bits reservados, sin equiparar clasificación del rango y longitud de subred. |
| [IANA: IPv6 Address Space](https://www.iana.org/assignments/ipv6-address-space) | 2026-10-28 | Tabla IPv6 Prefix / Allocation: 2000::/3, FC00::/7, FE80::/10 y FF00::/8. Registro con última actualización visible 23-10-2025, consultado el 28-10-2026; clasificación de bloques, no garantía de alcance de cada dirección. |
| [IETF RFC 5952: A Recommendation for IPv6 Address Text Representation](https://www.rfc-editor.org/rfc/rfc5952.html) | 2026-10-28 | 4.2 Zero Compression: uso de :: y recomendaciones para representación canónica. Agosto de 2010; se distingue sintaxis válida RFC 4291 de recomendaciones canónicas, incluida no comprimir un solo campo cero. |
| [IETF RFC 9293: Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293.html) | 2026-10-28 | 2.2 Key TCP Concepts y 3: flujo fiable ordenado de bytes, secuencias, confirmaciones y retransmisión. STD 7, agosto de 2022; no proporciona límites de mensajes, cifrado nativo, plazo garantizado o confirmación de procesamiento de negocio. |
| [IETF RFC 768: User Datagram Protocol](https://www.rfc-editor.org/rfc/rfc768.html) | 2026-10-28 | Introducción y Format: servicio de datagramas y garantías que no proporciona. STD 6, agosto de 1980; un protocolo superior puede añadir recuperación, sin atribuirla a UDP por sí mismo. |
| [IETF RFC 2131: Dynamic Host Configuration Protocol](https://www.rfc-editor.org/rfc/rfc2131.html) | 2026-10-28 | 3.1 Client-server interaction — allocating a network address, figura 3; 4.4 estados y renovación. Marzo de 1997; secuencia inicial habitual satisfactoria, no obligación de cuatro mensajes en renovación o INIT-REBOOT. |
| [IETF RFC 4271: A Border Gateway Protocol 4 (BGP-4)](https://www.rfc-editor.org/rfc/rfc4271.html) | 2026-10-28 | 1 Introduction; 3 Summary of Operation: inter-AS, peers internos/externos y atributos. Enero de 2006; BGP-4 con actualizaciones posteriores, solo finalidad y distinción eBGP/iBGP; no se afirma selección exclusiva por camino más corto. |
| [IETF RFC 2453: RIP Version 2](https://www.rfc-editor.org/rfc/rfc2453.html) | 2026-10-28 | 1 y 1.1: protocolo de encaminamiento interior basado en vector de distancias. STD 56, noviembre de 1998; no recomendación de RIP para un despliegue actual. |
| [IETF RFC 2328: OSPF Version 2](https://www.rfc-editor.org/rfc/rfc2328.html) | 2026-10-28 | 1 Introduction: protocolo interno de un sistema autónomo y áreas. STD 54, abril de 1998; solo clasificación de OSPFv2 como IGP. |
| [IETF RFC 1195: Use of OSI IS-IS for Routing in TCP/IP and Dual Environments](https://www.rfc-editor.org/rfc/rfc1195.html) | 2026-10-28 | 1 Introduction y 2: IS-IS integrado como protocolo interior y niveles. Diciembre de 1990; niveles/áreas internas no equivalen al rol inter-AS de BGP. |
| [IETF RFC 8200: Internet Protocol, Version 6 (IPv6) Specification](https://www.rfc-editor.org/rfc/rfc8200.html) | 2026-10-28 | 4.5 Fragment Header: solo origen; 5 Packet Size Issues: MTU y Packet Too Big. STD 86, julio de 2017; routers en tránsito no fragmentan paquetes IPv6. |
| [IETF RFC 4443: Internet Control Message Protocol (ICMPv6) for the Internet Protocol Version 6 (IPv6) Specification](https://www.rfc-editor.org/rfc/rfc4443.html) | 2026-10-28 | 2.4 reglas de mensajes de error y límites; 3.2 Packet Too Big Message. STD 89, marzo de 2006; descarte y notificación sujetos a las reglas de ICMPv6, sin prometer entrega de cada aviso. |
| [ITU-T X.200 / ISO/IEC 7498-1: Basic Reference Model, The basic model](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I!!PDF-E&lang=e&type=items) | 2026-10-28 | 5.2.1.5 (N)-service; 5.2.1.8 (N)-SAP; 5.2.1.9 (N)-protocol; 5.2.2 layering y cooperación entre pares. Julio de 1994, PDF público de la ficha ITU; relación entre entidades pares y acceso a servicios de capas adyacentes, no un conector físico. |
| [W3C HTML 4.01: On SGML and HTML](https://www.w3.org/TR/html401/intro/sgmltut.html) | 2026-10-28 | 3.1 Introduction to SGML: sistema para definir lenguajes de marcado y aplicaciones SGML. HTML 4.01, 24-12-1999; solo descripción histórica de SGML. No se traslada el procesamiento de HTML 4.01 a HTML moderno. |
| [W3C: Extensible Markup Language (XML) 1.0, fifth edition](https://www.w3.org/TR/REC-xml/) | 2026-10-28 | 1 Introduction: perfil/restricción de SGML; 1.1 objetivos; 1.2 fatal error; 2.1 Well-Formed XML Documents y 3 Logical Structures. W3C Recommendation, 26-11-2008; reglas de XML 1.0 y procesamiento normal tras error fatal, sin afirmar identidad de HTML y XML. |
| [W3C CSS 2.1: Introduction](https://www.w3.org/TR/CSS2/intro.html) | 2026-10-28 | 2.1 A brief CSS 2.1 tutorial for HTML y 2.2: reglas de presentación y relación con lenguajes de marcado. CSS 2.1, solo identidad de las hojas de estilo; no catálogo de funciones CSS modernas. |
| [IETF RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) | 2026-10-28 | 1 y 3: protocolo de aplicación, solicitudes y respuestas, distinto de un lenguaje de marcado. STD 97, junio de 2022; no se clasifica HTTP como capa de transporte OSI. |
| [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) | 2026-10-28 | 1.8 HTML vs XML syntax: lenguaje, dos sintaxis concretas y selección de análisis por tipo MIME. Living Standard consultado el 28-10-2026; no se infiere que todo HTML sea XML o que un doctype elija el parser. |
| [WHATWG HTML: The HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html) | 2026-10-28 | 13.1.1 The DOCTYPE; 13.1.2 Elements y Void elements, incluido br. Living Standard consultado el 28-10-2026; se distingue sintaxis HTML de la serialización XML. |
| [WHATWG HTML: Parsing HTML documents](https://html.spec.whatwg.org/multipage/parsing.html) | 2026-10-28 | 13.2 Parsing HTML documents; 13.2.6.4.1 The initial insertion mode: DOCTYPE y quirks/no-quirks. Living Standard consultado el 28-10-2026; recuperación de errores definida para HTML, no un validador XSD o regla aplicable al parser XML. |
| [WHATWG HTML: The document element and document metadata](https://html.spec.whatwg.org/multipage/semantics.html) | 2026-10-28 | 4.2.1 The head element; title, link y meta: colección de metadatos del documento. Living Standard consultado el 28-10-2026; que no sean contenido principal no significa que sus metadatos o recursos no produzcan efectos visibles. |
| [WHATWG HTML: Sections](https://html.spec.whatwg.org/multipage/sections.html) | 2026-10-28 | The body element; The article element; The nav element; The header element; The footer element. Living Standard consultado el 28-10-2026; responsabilidades de cuerpo y regiones semánticas, sin basarse en estilo visual. |
| [WHATWG HTML: Grouping content](https://html.spec.whatwg.org/multipage/grouping-content.html) | 2026-10-28 | The main element: contenido dominante, contenido específico del documento y máximo de un main sin hidden. Living Standard consultado el 28-10-2026; se distinguen contenido principal, contenedor de artículo y posibilidad de main ocultos. |

Matices cotejados:

- IPv4: diferenciar cantidad total, hosts tradicionales y máscara. /27 son 32 totales y 30 asignables; /26 son 64 totales; /25 corresponde a 255.255.255.128. No se resta dos indiscriminadamente a /31 o /32.
- RFC 1918: límites exactos frente a prefijo vecino, Shared Address Space y TEST-NET. No se usa la propiedad genérica is_private de una biblioteca como definición de pertenencia a RFC 1918.
- NAT: traducción y NAPT frente a cifrado, autorización y reparación de aplicaciones. Se permiten funciones coexistentes y efectos de ocultación sin atribuir protección general a traducir direcciones.
- IPv6: sin direcciones broadcast a nivel IP aunque la red de enlace tenga difusión. Unicast, anycast y multicast no se intercambian entre sí.
- Link-local: prefijo clasificador FE80::/10 y formato con bits reservados son conceptos distintos; FF00::/8 multicast, 2000::/3 global y FC00::/7 local único no son link-local.
- Compresión IPv6: como máximo una aparición de ::, no una por cada grupo cero. La forma canónica RFC 5952 añade reglas a la validez de RFC 4291.
- TCP: flujo ordenado de bytes y recuperación, no límites de mensajes, cifrado nativo, inmunidad al fallo o plazo garantizado. ACK de transporte no confirma procesamiento de negocio.
- DHCPv4: DORA inicial y satisfactorio, con selección de oferta antes de REQUEST y ACK posterior; no se aplica a toda renovación o arranque con concesión previa.
- BGP: rol inter-AS con sesiones eBGP e iBGP. RIP, OSPF e IS-IS son protocolos interiores; áreas o niveles no los convierten en el mecanismo interdominio de BGP.
- IPv6 y MTU: router en tránsito descarta y notifica Packet Too Big bajo reglas ICMPv6; no fragmenta ni reensambla en el siguiente salto. El origen adapta el tamaño.
- Modelo por capas: protocolo entre pares y acceso a servicios adyacentes según X.200 5.2; interfaz no significa en este contexto conector físico o dirección.
- SGML/XML: fuente histórica HTML 4.01 para el metalenguaje y XML 1.0 para su perfil restringido. No se presenta SGML como derivado de XML ni se impone a HTML moderno el procesamiento histórico de SGML.
- HTML moderno: semántica y sintaxis HTML/XML, tipo MIME para elegir procesamiento y recuperación de errores distinta. El caso br sin cierre no se usa para afirmar que toda cadena HTML falle en XML.
- Doctype: preámbulo para evitar quirks en text/html, no esquema, namespace, charset o selector de parser. No acredita conformidad del documento restante.
- Head y main: metadatos pueden causar efectos visibles; main es contenido dominante, con máximo de uno sin hidden. Article puede estar dentro de main y tiene responsabilidad diferente.
- IANA añade respaldo directo para los cuatro prefijos IPv6 comparados, incluido el rango local único de RFC 4193. La ficha usa --literal-content para preservar etiquetas y fragmentos como texto legible, sin cambiar datos de preguntas.

Límites y notas de ejecución:

- Todos los enlaces de respaldo usados entregaron cuerpo público legible. Se leyeron apartados concretos y se distingue una tabla de contenido de la explicación del apartado.
- La ficha ITU ofrece un PDF público distinto de formatos TIES reservados; se consultó el PDF sin iniciar sesión. No se ejecutó conversión documental ni OCR.
- Las páginas WHATWG son Living Standard: se registra la fecha real de consulta y el apartado, sin inventar una versión de navegador o un número de edición estable.
- La comprobación de disponibilidad local encontró que playwright no está instalado en la venv Python. Se utilizará, si es accesible, el runtime Node y Playwright ya incluidos en el entorno; no se instala una dependencia nueva en el proyecto.
- Una primera llamada de agrupación de lecturas fue rechazada por una expresión regular JavaScript mal escapada antes de ejecutar herramientas. Se corrigió y se repitió; no se modificaron datos por ese intento.
- Las fuentes originales Google Docs, sus índices nativos, procedencia y hashes de registro IA permanecen intactos. No se atribuye nueva lectura privada o aceptación humana a esos datos históricos.

No se ejecutan cambios en redes, servidores o configuración de seguridad a partir de la documentación. Las consultas web de PDF no son conversiones; los originales permanecen intactos.

## Ficha literal y compatibilidad

El generador [editorial_batches.py](../scripts/editorial_batches.py) añade **`--literal-content`**, un modo opcional que presenta etiquetas y fragmentos como texto en Markdown. Evita que las alternativas &lt;head&gt; o &lt;main&gt; se interpreten como estructura HTML y desaparezcan de la ficha. También protege marcado en los campos de texto y mantiene enlaces de fuentes y marcas de correcta. No modifica el JSON ni su hash.

El formato predeterminado permanece igual para reproducir entregas históricas. La CLI exige destino de renderizado al usar la opción y sigue rechazando sobrescribir una ficha distinta. Se amplía la [suite editorial](../tests/editorial_batch_tests.py) con dos comprobaciones del modo literal y su uso en CLI. No se incorporan dependencias al proyecto.

La ficha de este lote usa el modo literal. Se comprobó en Chrome con marked y Playwright ya incluidos en el entorno: once controles de DOMParser, modo estándares/quirks, contenido visible, veinte secciones, cuarenta marcas de correcta y enlaces de fuentes; sin peticiones externas. Se inspeccionó también una captura del bloque MAN-GSI-P18-007 con etiquetas visibles en antes/después. Estas comprobaciones no son la suite HTTP de la aplicación.

## Métricas antes y propuesta

Analizador 2.0.0 sobre las veinte preguntas por simulación.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 4 | 3 |
| Aciertos por primera alternativa de longitud máxima | 6 | 6 |
| Ratio correcta/distractor máximo de 1,5–<2 | 1 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 17 | 0 |
| Feedback correcto e incorrecto idénticos | 13 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 6 | 6 |
| Explicaciones individuales de los tres distractores | 0 | 20 |

La primera alternativa de longitud máxima mantiene **30 %** de acierto; la primera de longitud mínima acierta **4/20 (20 %)**. Las tres correctas únicas más largas son **T08-012** (59 frente a 58 caracteres del distractor máximo), **T08-014** (10 frente a 9, incluida puntuación) y **T08-016** (59 frente a 58). Se conserva la precisión conceptual y no se alargan distractores para igualarlas. Las longitudes y justificaciones se registran por ID.

La distribución de claves originales permanece **A: 5, B: 6, C: 5, D: 4**. No se cambian IDs o claves para ajustar porcentajes; las letras visibles al barajar son otro dato. Se completa feedback breve en diecisiete preguntas y se añaden sesenta errores concretos. Los trece pares de feedback antes idénticos se diferencian. La alerta gradual de longitud desaparece al hacer comparables las relaciones protocolo/interfaz. Las señales no acreditan aceptación, calidad pedagógica demostrada o calibración.

## Historial de propuesta

La primera preparación tenía hash `ee7cf13788458a4d404879a569197f738217b21758ce1dcec2f3fcd12c38cb33`. Se añadió el registro IANA al respaldo de AI-GSI-B2-T08-014 para distinguir los cuatro prefijos. No cambian sus textos, opciones o clave; sí las referencias y su hash de contenido. La ficha pasa además a modo literal, que no forma parte del hash de preguntas. El hash vigente es `c903aafa3b17125effe750222ebb6dedc88731eb4c395bec3d1157deacbac4b6`. Ambas versiones siguen sin aceptación o aplicación.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-031.json --render docs/GSI_REVISION_LOTE_031.md --literal-content
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

Resultados ejecutados:

- Simulación CLI de veinte propuestas y reproducción exacta de la ficha con `--literal-content`, sin escritura en bancos activos.
- **19 pruebas editoriales**, **53 JSON**, **21 esquemas** y estructura de **1.964 preguntas** correctos.
- **19.251 controles de integridad**, cero errores técnicos; documentación y referencias correctas: 4 bloques, 57 temas y 37 Markdown del catálogo.
- **72 enlaces locales** comprobados entre ficha, informe y plan.
- Hash canónico vigente, veinte pares antes/después, sesenta justificaciones de distractores y procedencia original coherentes.
- Las ocho formulaciones declaradas se conservan íntegras. Simulación: exactamente **13 IA y siete manuales**, cero oficiales modificadas; todos los IDs y claves del banco se conservan.
- **137 archivos protegidos** idénticos al inicio: bancos, registros, entregas anteriores, doce archivos de borradores y evidencia IA. Oficiales idénticas byte a byte a HEAD y auditoría; manuales e IA iguales en contenido a HEAD y con sus bytes iniciales preservados.
- Aceptación vacía, recibo del piloto y revisión histórica IA rechazados para 031. Los guards de regeneración rechazan sobrescribir tanto manuales como IA. No hay aceptaciones 002–031; el historial de aplicaciones conserva únicamente 001.
- Prefijo de cola completo y sin duplicados: **620 IDs**, veinte aceptados y 600 propuestos; progreso reproducible. Las 128 incidencias IA originales mantienen quince aceptadas y 113 propuestas pendientes.
- Treinta fuentes con comprobación real 28-10-2026; los localizadores, versiones y campos históricos se conservan con su alcance. El hash previo se reconstruye al retirar la referencia IANA añadida, comprobando que no cambian textos o claves durante ese refinamiento.
- **32 comparaciones** del formato predeterminado contra la implementación de HEAD: los 31 lotes y el piloto con su aceptación real. Todas idénticas. El modo literal conserva el hash del JSON, etiquetas visibles, marcas de correcta y enlaces; su CLI requiere un destino y sigue rechazando salidas diferentes existentes.
- **Siete ejemplos independientes con `ipaddress`**: /27 asignables, /26 total, máscara /25, pertenencia a los tres bloques explícitos de RFC 1918 y tres controles de sintaxis/compresión IPv6. No se usa `is_private` como sustituto de RFC 1918.
- **Once controles en Chrome aislado**, con marked y Playwright existentes: análisis de br en HTML/XML, XML con cierre válido, modo con/sin doctype y seis controles de legibilidad/estructura/enlaces de la ficha. Captura inspeccionada de MAN-GSI-P18-007 con etiquetas visibles. No se instala una dependencia ni se hacen peticiones externas.
- Los tres informes derivados mantienen contenido y fecha 28-10-2026 respecto al inicio; frente a HEAD solo cambia la fecha de validación. `git diff --check` y espacios de archivos nuevos correctos.

Todos los validadores y comprobaciones finales ejecutados terminaron con código 0. Se registra un primer intento de lectura agrupada rechazado por sintaxis de una expresión regular JavaScript antes de invocar herramientas; se corrigió sin cambios en datos. La venv Python no incluía Playwright y se usó el runtime Node ya disponible. No se ejecutó la suite HTTP completa de la aplicación, una red real o routers. Las comprobaciones de ejemplos y formato no sustituyen revisión conceptual del propietario ni calibración estadística.

No cambian el código de ejecución de la aplicación o sus bancos. No se repite la suite HTTP completa ni se presenta una ejecución del piloto como nueva. Entrenamiento, Simulacros, estadísticas y Refuerzo conservan sus versiones activas. Para revisar esta entrega, abrir la ficha y cotejar cada pregunta con sus fuentes antes de aprobar expresamente el hash.

## Entrega y continuidad

Creados: `content/question-reviews/lote-031.json`, `docs/GSI_REVISION_LOTE_031.md`, este informe y `logs/gsi-editorial-031-preparation.json`. Modificados: `scripts/editorial_batches.py`, `tests/editorial_batch_tests.py`, `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Se regeneran y cotejan los tres informes derivados de cobertura, validación final y revisión histórica, ya fechados el 28-10-2026. Frente a HEAD solo difiere su fecha de validación.

Este lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 600 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, con **1.142** todavía sin propuesta. Los lotes 002–031 reúnen 113 incidencias IA originales, otras 162 IA y 325 manuales. Las 128 incidencias originales mantienen quince aceptadas/aplicadas y 113 propuestas pendientes.

Sin conversiones documentales ni nuevas conversiones pendientes. Oficiales, originales y entregas anteriores protegidos. No se crea commit, publicación o fusión de propuestas pendientes. El siguiente lote continúa por bloque y tema. El cierre requiere decisión individual del propietario sobre los 1.762 IDs, versiones activas conformes y comprobaciones técnicas superadas, distinguiendo preparación, aceptación humana y calibración todavía no realizada.
