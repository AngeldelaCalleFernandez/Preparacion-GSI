GSI A2 — PRÁCTICA ACTIVA 18

**HTML · XML · SCRIPTS · CONTENIDOS · BÚSQUEDA · SEO**

160 preguntas · 4 opciones · refuerzo directo de II.09 e II.16

**SOLUCIONARIO COMENTADO**

# Cómo usar esta práctica

Este solucionario fija la distinción técnica que debe quedar automatizada. Repite las preguntas falladas sin mirar la letra y clasifica el error: markup/XML, scripting/seguridad, documental/workflow, búsqueda/SEO o colaboración.

Base nuclear: GSI A2 — Bloque II — Apuntes completos V2.1 revisados. Contraste oficial: WHATWG HTML Living Standard; W3C XML/XSD/XPath; RFC 4287 Atom; RFC 9309 Robots Exclusion Protocol; Google Search Central para crawling/sitemaps/SEO.

## Distribución

| **Preguntas** | **Bloque** | **Función** |
| --- | --- | --- |
| 1–20 | SGML, HTML y semántica web | SGML, HTML, semántica, formularios, CSS y DOM. |
| 21–40 | XML, DTD, XSD y namespaces | XML bien formado/válido, DTD, XSD, namespaces y contratos. |
| 41–60 | XPath, XSLT, XHTML, JSON y lenguajes de script | XPath/XSLT/XHTML/JSON, scripts, eventos y asincronía. |
| 61–80 | Scripting web, DOM, seguridad y casos de integración | DOM, XSS/CSRF/CSP, cookies, validación, dependencias y casos. |
| 81–100 | Gestión documental, CMS/ECM, metadatos y ciclo de vida | DMS/CMS/ECM, metadatos, versionado, retención y gobierno. |
| 101–120 | Taxonomías, sindicación, workflow y BPM | Taxonomías, RSS/Atom, workflow, BPM/BPMN y métricas. |
| 121–140 | Búsqueda, indexación, robots, sitemaps y SEO | Crawling, índice invertido, precision/recall, robots.txt, sitemap y SEO. |
| 141–160 | Colaboración, redes sociales, seguridad y casos integradores | Colaboración, redes sociales, IAM, DLP, seguridad y ciclo integrado. |

## Fuentes oficiales de contraste

* WHATWG — HTML Living Standard
* W3C — XML 1.0 / XML Schema / XPath
* RFC 4287 — Atom Syndication Format
* RFC 9309 — Robots Exclusion Protocol
* Google Search Central — SEO, crawling y sitemaps

Control de actualidad: 25/08/2026. Se priorizan estándares y conceptos estables frente a productos o tendencias coyunturales.

# 1. SGML, HTML y semántica web

**1. A —** Los lenguajes de marcas describen estructura o significado; no son por ello lenguajes de programación.

**2. D —** SGML influyó en HTML y XML y se estudia como antecedente conceptual.

**3. C —** La recomendación XML 1.0 se presenta como subconjunto/restricción de SGML.

**4. C —** HTML tiene su propia sintaxis; XHTML es la variante basada en XML.

**5. B —** WHATWG distingue explícitamente la sintaxis HTML de la sintaxis XML.

**6. D —** El doctype moderno es simple y evita modos de compatibilidad heredados.

**7. D —** head contiene título, metadatos y referencias; body contiene el contenido representado.

**8. B —** main ayuda a expresar semántica de la región principal del documento.

**9. D —** La semántica ayuda a usuarios, tecnologías de apoyo y procesamiento, pero no sustituye calidad o CSS.

**10. B —** alt aporta equivalencia textual; su contenido depende de la función de la imagen.

**11. B —** Separar responsabilidades es una regla básica de arquitectura web.

**12. A —** CSS controla presentación y layout; no sustituye la estructura semántica HTML.

**13. C —** Responsive busca adaptación del layout y contenido sin depender de un dispositivo fijo.

**14. D —** La asociación label-control mejora accesibilidad y usabilidad.

**15. A —** Los atributos complementan la información del elemento.

**16. A —** El DOM conecta documentos y APIs de programación.

**17. C —** WHATWG mantiene el HTML Living Standard.

**18. A —** Separar contenido/semántica y estilo favorece mantenimiento y accesibilidad.

**19. C —** La estructura semántica de tabla ayuda a interpretar relaciones entre datos.

**20. B —** La semántica debe estar en el documento, no inferirse solo por apariencia.

# 2. XML, DTD, XSD y namespaces

**21. D —** XML permite definir vocabularios y estructuras, no una lista fija de etiquetas de negocio.

**22. A —** Bien formado es requisito sintáctico; válido implica además conformidad con un esquema/DTD si se declara.

**23. D —** Validez añade conformidad estructural y de tipos según el mecanismo de validación.

**24. C —** Un documento XML bien formado tiene exactamente un elemento raíz.

**25. B —** El anidamiento correcto es una regla sintáctica esencial de XML.

**26. B —** Elemento y Elemento son nombres distintos en XML.

**27. A —** Los valores de atributos deben ir citados.

**28. D —** Las referencias de entidad permiten representar caracteres reservados.

**29. C —** DTD valida estructura, pero su sistema de tipos es más limitado que XSD.

**30. B —** XSD permite definir estructuras, tipos, cardinalidades y restricciones.

**31. A —** XSD fue diseñado para expresar restricciones más ricas que DTD.

**32. B —** Namespaces evitan colisiones al combinar vocabularios XML.

**33. D —** La identidad semántica se asocia al namespace URI, no al texto del prefijo.

**34. B —** Dos vocabularios pueden usar el mismo nombre local sin confundirse si pertenecen a namespaces distintos.

**35. C —** XSD describe estructura y restricciones de documentos XML concretos.

**36. A —** minOccurs y maxOccurs son ejemplos de cardinalidad.

**37. D —** Bien formado e inválido es una combinación perfectamente posible.

**38. A —** La interoperabilidad depende de contratos estables y evolución compatible.

**39. C —** La validación asegura conformidad estructural y de tipos del intercambio.

**40. C —** Namespaces y esquemas ayudan a evitar colisiones y ambigüedad contractual.

# 3. XPath, XSLT, XHTML, JSON y lenguajes de script

**41. B —** XPath es un lenguaje de selección/expresión sobre modelos XML.

**42. A —** XSLT transforma; XPath selecciona.

**43. B —** La separación selección/transformación es una distinción clásica de examen.

**44. B —** XHTML aplica reglas de documento XML bien formado al vocabulario HTML.

**45. C —** La sintaxis XML es estricta en cierre y anidamiento.

**46. D —** WHATWG separa claramente ambas sintaxis.

**47. A —** JSON es un formato de datos muy usado en APIs, distinto de XML.

**48. A —** La elección depende del contrato; XML destaca en documentos y vocabularios extensibles.

**49. B —** JSON suele ser cómodo para datos estructurados de APIs, aunque no es universalmente mejor.

**50. C —** “Script” describe uso/entorno, no impone necesariamente interpretación pura o tipado dinámico.

**51. C —** La similitud del nombre es una trampa clásica.

**52. A —** Los shells se usan ampliamente para automatización de sistemas Unix/Linux.

**53. D —** PowerShell es un shell/lenguaje de automatización moderno.

**54. C —** Compilado/interpretado no son categorías absolutas del lenguaje.

**55. D —** Las closures aparecen en JavaScript y otros lenguajes modernos.

**56. C —** Clicks, cambios, carga o mensajes generan eventos manejables.

**57. D —** Callbacks son un mecanismo clásico de asincronía/eventos.

**58. B —** Separar responsabilidades facilita evolución del sistema.

**59. D —** XSLT está diseñado para transformar árboles XML.

**60. A —** XSLT es una opción natural para transformación estructurada entre vocabularios XML.

# 4. Scripting web, DOM, seguridad y casos de integración

**61. B —** JavaScript puede manipular el DOM y responder a eventos.

**62. B —** XSS se previene con codificación/escape contextual, APIs seguras y políticas como CSP.

**63. B —** La regla es no interpretar datos no confiables como código/markup activo.

**64. D —** CSRF explota credenciales/sesión implícita del navegador.

**65. A —** Las acciones sensibles deben verificar intención/origen y no depender solo de cookies automáticas.

**66. D —** CSP reduce impacto de ciertas inyecciones y controla recursos, aunque no sustituye desarrollo seguro.

**67. C —** Los atributos de cookie reducen exposición a red, script y CSRF según contexto.

**68. D —** Formato y protocolo no deben confundirse.

**69. A —** Las aplicaciones pueden mantener estado mediante cookies, tokens o servidor aunque HTTP sea stateless.

**70. C —** Las credenciales y claves secretas deben mantenerse en componentes de confianza.

**71. C —** Las dependencias pueden introducir vulnerabilidades o cambios no controlados.

**72. A —** La cadena de suministro debe tratarse como parte de la superficie de ataque.

**73. C —** Fetch/promesas permiten coordinar E/S asíncrona.

**74. A —** Promesas permiten encadenar y manejar éxito/error de operaciones asíncronas.

**75. B —** async/await es azúcar sintáctico sobre mecanismos asíncronos.

**76. B —** El cliente puede manipularse; la validación autoritativa debe realizarse en servidor.

**77. D —** Sanitizar es distinto de validar o escapar y depende del contexto.

**78. A —** Los parsers deben configurarse de forma segura frente a XXE y otros abusos.

**79. C —** Semántica, teclado, alternativas textuales, contraste y mensajes claros forman parte del diseño accesible.

**80. D —** La solución diferencia interfaz web, scripting y contrato de intercambio XML.

# 5. Gestión documental, CMS/ECM, metadatos y ciclo de vida

**81. D —** DMS se centra en documentos y gobierno documental.

**82. B —** CMS se orienta a contenidos/publicación; puede solaparse con DMS, pero no es lo mismo.

**83. C —** Las fronteras comerciales se solapan, pero el foco funcional es distinto.

**84. C —** ECM agrupa capacidades de contenido, documentos y procesos.

**85. B —** Título, autor, fecha, expediente, tipo, clasificación, versión o retención son ejemplos.

**86. D —** Los metadatos son base de búsqueda y ciclo de vida.

**87. A —** Versionado ayuda a controlar cambios, pero no protege frente a todos los desastres del repositorio.

**88. C —** Son controles complementarios y no intercambiables.

**89. B —** Puede coexistir con coedición moderna según plataforma.

**90. A —** La retención debe responder a valor legal, administrativo, histórico y de negocio.

**91. A —** El hold prevalece temporalmente sobre reglas normales de disposición cuando procede.

**92. A —** La disposición forma parte del ciclo de vida y requiere autorización/trazabilidad.

**93. B —** OCR facilita explotación del contenido, pero puede cometer errores.

**94. D —** La clasificación facilita contexto, retención y acceso.

**95. A —** Los repositorios suelen contener información sensible y requieren control de acceso fino.

**96. C —** La calidad del repositorio depende también de metadatos y gobierno.

**97. D —** La gestión pública distingue documento individual de expediente como conjunto organizado.

**98. B —** Las plantillas favorecen consistencia y automatización.

**99. D —** Una taxonomía aporta vocabulario común y estructura de clasificación.

**100. C —** La centralización gobernada reduce duplicidad y pérdida de trazabilidad.

# 6. Taxonomías, sindicación, workflow y BPM

**101. B —** Las taxonomías ayudan a organizar y recuperar contenido.

**102. D —** La folksonomía aporta flexibilidad pero puede generar sinónimos/ambigüedad.

**103. D —** Ontología expresa semántica y relaciones más ricas que una taxonomía simple.

**104. B —** RSS y Atom son formatos clásicos de sindicación.

**105. A —** Atom es un formato XML estandarizado para sindicación web.

**106. A —** La sindicación ofrece un canal explícito y estable para consumo.

**107. C —** Los feeds describen novedades con metadatos estructurados.

**108. C —** Workflow modela cómo avanza el trabajo y quién actúa.

**109. D —** Las transiciones representan el flujo del proceso.

**110. B —** Los workflows pueden combinar tareas humanas y automáticas.

**111. B —** Escaladas ayudan a controlar SLA y excepciones.

**112. C —** BPM es un enfoque de gestión, más amplio que automatizar una secuencia.

**113. D —** BPMN aporta un lenguaje visual común para procesos.

**114. A —** Los gateways controlan divergencia/convergencia del proceso.

**115. B —** Pueden solaparse, pero su foco típico es distinto.

**116. D —** BPM requiere analizar y mejorar, no solo digitalizar pasos existentes.

**117. C —** Los procesos deben medirse para identificar demoras y calidad.

**118. A —** La gestión de tareas necesita identidad, permisos y seguimiento.

**119. C —** El gobierno de versiones evita inconsistencias y permite auditoría.

**120. A —** Cada familia resuelve una parte del ciclo: documento, proceso, firma y publicación.

# 7. Búsqueda, indexación, robots, sitemaps y SEO

**121. D —** Crawling es la fase de descubrimiento/captura, distinta de indexación y ranking.

**122. C —** La indexación transforma contenido en una representación consultable.

**123. C —** El índice invertido es básico en recuperación de información textual.

**124. D —** Precision mide calidad de los resultados devueltos.

**125. A —** Recall mide cobertura de los relevantes disponibles.

**126. B —** F1 equilibra ambas métricas en un único valor.

**127. D —** Los tokens son unidades sobre las que se construyen análisis y búsqueda.

**128. C —** Son técnicas de normalización lingüística con distinta sofisticación.

**129. C —** BM25 es un ranking léxico clásico de recuperación de información.

**130. D —** RFC 9309 formaliza el protocolo; robots.txt no es una barrera de seguridad.

**131. A —** Los recursos sensibles deben protegerse con controles reales de acceso.

**132. B —** Los sitemaps ayudan al crawling; no garantizan indexación o ranking.

**133. B —** Enviar una URL no obliga a indexarla ni posicionarla.

**134. A —** SEO se centra en descubrimiento orgánico y calidad técnica/contenido.

**135. C —** Es una distinción habitual en gestión de contenidos y marketing digital.

**136. B —** Buenas prácticas técnicas suelen mejorar experiencia y comprensión del contenido.

**137. A —** Canonical ayuda a consolidar señales de duplicados, pero no es un control de acceso.

**138. B —** La canonicalización y arquitectura de URLs ayudan a gestionarlo.

**139. A —** La analítica de búsqueda revela vocabulario real y huecos de contenido.

**140. D —** La calidad de recuperación requiere índice, análisis y ranking adecuados.

# 8. Colaboración, redes sociales, seguridad y casos integradores

**141. A —** Colaboración incluye wikis, chat/canales, repositorios, videoconferencia y gestión de tareas.

**142. D —** La colaboración multiplica copias y participantes, por lo que necesita gobierno.

**143. B —** Los enlaces compartidos deben limitarse, caducar o requerir identidad según sensibilidad.

**144. D —** La coedición moderna puede sustituir ciertos flujos de check-out, aunque necesita versionado.

**145. C —** Las wikis son útiles para conocimiento vivo, con necesidad de gobernanza y revisión.

**146. D —** Puede complementar canales formales, pero requiere política, moderación y retención.

**147. B —** Las redes sociales son canales de comunicación, no sustitutos automáticos del canal administrativo garantizado.

**148. A —** La moderación necesita criterios, roles y trazabilidad.

**149. D —** DLP puede complementar clasificación, permisos y monitorización.

**150. C —** La sensibilidad no reside solo en el cuerpo del documento.

**151. D —** El control de malware es una capa de seguridad, no reemplaza IAM ni gobierno.

**152. A —** El acceso externo debe ser explícito, mínimo y revisado.

**153. A —** La identidad central facilita altas/bajas y mínimo privilegio.

**154. C —** El offboarding forma parte del ciclo de vida de identidad y contenidos.

**155. B —** El canal de conversación no debe sustituir sin diseño a los repositorios oficiales.

**156. C —** El ciclo combina varias familias funcionales con IAM, seguridad y auditoría transversales.

**157. B —** Las APIs desacoplan consumidores y permiten automatización, pero deben gobernarse.

**158. B —** Continuidad requiere protección de datos, servicio y capacidad de salida.

**159. C —** La seguridad debe atravesar repositorio, publicación, búsqueda y colaboración.

**160. A —** La solución integra contenidos, procesos, descubrimiento, colaboración y gobierno.

# Mapa mental de alto rendimiento

* SGML = metalenguaje histórico. HTML = marcado web con sintaxis propia. XHTML = vocabulario HTML bajo sintaxis XML.
* XML bien formado ≠ XML válido. DTD ≠ XSD. Namespace URI identifica vocabulario; el prefijo es local.
* XPath selecciona/navega; XSLT transforma. XML ≠ JSON y la elección depende del contrato.
* HTML estructura, CSS presenta, JavaScript programa comportamiento. DOM conecta documento y scripts.
* JavaScript ≠ Java. Script ≠ necesariamente “sin tipos” o “solo interpretado”.
* XSS ≠ CSRF. Validación cliente ≠ validación servidor. CSP y cookies seguras son capas complementarias.
* DMS ≠ CMS. ECM es paraguas. Versionado ≠ backup. Metadatos, clasificación y retención gobiernan ciclo documental.
* Taxonomía ≠ folksonomía ≠ ontología. Feed ≠ scraping. Atom es XML; RSS/Atom sirven para sindicación.
* Workflow ≠ BPM. BPMN modela procesos; automatizar sin rediseñar puede automatizar ineficiencias.
* Crawler ≠ indexador ≠ ranking. Precision ≠ recall. Índice invertido = término -> documentos.
* robots.txt ≠ seguridad. Sitemap ayuda a descubrimiento, no garantiza indexación. SEO ≠ SEM.
* Colaboración requiere IAM, invitados, clasificación, retención, DLP, auditoría y offboarding.

# Trampas que deben quedar eliminadas

* HTML ≠ XML.
* XML bien formado ≠ válido.
* DTD ≠ XSD.
* Namespace ≠ prefijo.
* XPath ≠ XSLT.
* JavaScript ≠ Java.
* JSON ≠ XML.
* HTML ≠ HTTP.
* XSS ≠ CSRF.
* Validación cliente ≠ seguridad servidor.
* DMS ≠ CMS.
* Versionado ≠ backup.
* Taxonomía ≠ folksonomía.
* RSS/Atom ≠ scraping.
* Workflow ≠ BPM.
* Crawler ≠ ranking.
* Precision ≠ recall.
* robots.txt ≠ control de acceso.
* Sitemap ≠ garantía de indexación.
* SEO ≠ SEM.
* Chat ≠ repositorio documental oficial por defecto.

# Checklist de decisión en supuesto

* 1) Separa interfaz web, contrato de datos y automatización.
* 2) Define vocabularios/esquemas/versionado para XML e integraciones.
* 3) Aplica seguridad web: entradas, XSS/CSRF, cookies, secretos y dependencias.
* 4) Diseña repositorio documental con metadatos, permisos, versionado, retención y backup.
* 5) Modela workflow/BPM con roles, SLA, excepciones y métricas.
* 6) Diseña búsqueda: crawling/captura, índice, ranking, precision/recall y analítica.
* 7) Publicación: CMS, sitemap, SEO, sindicación y accesibilidad.
* 8) Colaboración: invitados, clasificación, DLP, auditoría, ciclo de vida y salida.
