# Preparación editorial GSI-EDITORIAL-034

Fecha: **28-10-2026**. Estado: **20 propuestas pendientes de aprobación expresa, cero aceptadas/aplicadas/activadas/retiradas en este lote**.

Hash canónico vigente: `7fd400d2b9878cef2708b238ebbf5ccd62013de517c18f735413c0c59c5bc436`. Base de contenido activo: `e3e20ab879518c899806a70575eead28b3b35e6f`; se conserva la aplicación aprobada del piloto y no se restablece la versión auditada.

[Ficha antes/después](GSI_REVISION_LOTE_034.md), [propuestas JSON](../content/question-reviews/lote-034.json) y [registro de preparación](../logs/gsi-editorial-034-preparation.json).

## Alcance y criterio

Se preparan las posiciones **661–680** de la cola: veinte manuales **B2-T09**, IDs P18-052 a P18-071. Se revisan scripting, closures, callbacks, eventos, separación de presentación, transformación XML, DOM y controles de seguridad web. Los IDs, claves originales, dificultad orientativa, procedencia e índices documentales se conservan. No se modifican bancos publicados, oficiales o propuestas anteriores.

Se conservan íntegros enunciado y cuatro alternativas de **once preguntas**: MAN-GSI-P18-054, MAN-GSI-P18-056, MAN-GSI-P18-057, MAN-GSI-P18-059, MAN-GSI-P18-060, MAN-GSI-P18-062, MAN-GSI-P18-064, MAN-GSI-P18-066, MAN-GSI-P18-068, MAN-GSI-P18-069, MAN-GSI-P18-071. El feedback se completa con la explicación de la correcta y tres justificaciones individuales vinculadas a los IDs originales, usando contenido de las alternativas.

Son **14 conceptuales y seis de aplicación**: P18-055 (closure tras terminar la llamada exterior), P18-060 (mapeo XML ya contextualizado), P18-063 (texto literal en un div), P18-065 (CSRF con cookies), P18-067 (cookie sensible sin lectura por JavaScript) y P18-070 (credencial privada en bundle). El reparto surge de los conceptos y no de una cuota. Los casos fijan condiciones necesarias para evitar respuestas discutibles.

El estado heredado en el objeto futuro no activa una propuesta. La aceptación histórica o el recibo del piloto no autorizan este lote. La rúbrica registrada es juicio del preparador pendiente del propietario, no aceptación automática ni revisión humana independiente.

## Revisión individual

| ID | Clave | Tipo | Enunciado y opciones | Motivo |
| --- | --- | --- | --- | --- |
| MAN-GSI-P18-052 | A | Conceptual | Ajustados | Conservar scripting de shell y clave A; acotar interpretación nativa de Bash y comparar otros lenguajes realmente usados en automatización. |
| MAN-GSI-P18-053 | D | Conceptual | Ajustados | Conservar automatización administrativa PowerShell y clave D; quitar referencia a la pregunta anterior y precisar cmdlets/objetos sin exclusividad de plataforma. |
| MAN-GSI-P18-054 | C | Conceptual | Conservados | Conservar íntegros enunciado y alternativas, clave C; explicar bytecode/JIT y que runtime aislado no define toda ejecución interpretada. |
| MAN-GSI-P18-055 | D | Aplicación | Ajustados | Mantener closure y clave D; microcaso de acceso tras terminar la función exterior y distractores próximos de ámbito, currificación y generación. |
| MAN-GSI-P18-056 | C | Conceptual | Conservados | Conservar íntegra distinción evento/nodo/listener/callback y clave C; añadir eventos sintéticos y no inferir interacción real o asincronía universal. |
| MAN-GSI-P18-057 | D | Conceptual | Conservados | Conservar íntegros enunciado y alternativas próximas, clave D; explicar callbacks síncronos/asíncronos y no atribuirles hilos o concurrencia automática. |
| MAN-GSI-P18-058 | B | Conceptual | Ajustados | Conservar riesgo de acoplamiento y clave B; cuatro dependencias técnicas comparables, sin beneficios universales o distractores ajenos como XML válido. |
| MAN-GSI-P18-059 | D | Conceptual | Conservados | Conservar íntegros enunciado y alternativas, clave D; precisar métodos de salida y alcance de versión sin confundir transformación y conformidad. |
| MAN-GSI-P18-060 | A | Aplicación | Conservados | Conservar íntegro el caso ya bien construido y clave A; completar mapeo, pérdidas y comprobación de contratos sin presentar XSLT como opción exclusiva. |
| MAN-GSI-P18-061 | B | Conceptual | Ajustados | Mantener DOM accesible desde JavaScript y clave B; distractores próximos de fuente, representación virtual y CSSOM, con longitudes comparables. |
| MAN-GSI-P18-062 | B | Conceptual | Conservados | Conservar íntegra comparación de cuatro riesgos, clave B; explicar contexto y defensa en profundidad sin atribuir prevención total a CSP o HTTPS. |
| MAN-GSI-P18-063 | B | Aplicación | Ajustados | Mantener reducción de XSS por APIs seguras y clave B; fijar caso de texto literal y comparar sinks reales sin dar por seguro un filtro parcial. |
| MAN-GSI-P18-064 | D | Conceptual | Conservados | Conservar íntegra comparación XSS/clickjacking/SSRF/CSRF y clave D; completar credenciales ambientales e intención, sin exigir lectura de respuesta. |
| MAN-GSI-P18-065 | A | Aplicación | Ajustados | Mantener combinación de defensas CSRF y clave A; fijar autenticación por cookie y distinguir intención, transporte, CORS y semántica segura de GET. |
| MAN-GSI-P18-066 | D | Conceptual | Conservados | Conservar íntegra comparación CSP/CORS/SRI/Permissions Policy y clave D; distinguir aplicación de Report-Only y protección adicional de corrección de XSS. |
| MAN-GSI-P18-067 | C | Aplicación | Ajustados | Mantener atributos protectores de cookie y clave C; fijar ausencia de lectura legítima desde JavaScript y dejar SameSite condicionado al flujo. |
| MAN-GSI-P18-068 | D | Conceptual | Conservados | Conservar íntegra comparación formato/protocolo y clave D; completar representaciones distintas de HTML y no atribuir a HTTP solo el cifrado de HTTPS. |
| MAN-GSI-P18-069 | A | Conceptual | Conservados | Conservar íntegros enunciado y alternativas, clave A; separar semántica por petición, sesión de aplicación y estado de conexión sin asumir solo TCP. |
| MAN-GSI-P18-070 | C | Aplicación | Ajustados | Mantener exposición de secretos en cliente y clave C; microcaso de bundle con credencial privada, distinguiendo minificación, TLS, CORS e identificadores públicos. |
| MAN-GSI-P18-071 | C | Conceptual | Conservados | Conservar íntegra comparación de dependencia externa/API/módulo/CDN y clave C; precisar autoría frente a hosting, versiones y límites de integridad. |

## Fuentes y localizadores

**33 URLs primarias/documentales distintas**, comprobadas el **28-10-2026**, con apartados y versión en cada propuesta. Se distingue la documentación de sus responsables, el manual GNU distribuido por Debian, recomendaciones y borradores, y guías de práctica. La tabla agrupa páginas; la ficha mantiene la asociación por ID.

| Fuente | Localizador, versión y alcance | Fecha real |
| --- | --- | --- |
| [GNU Bash manual, publicado por Debian](https://manpages.debian.org/trixie/bash/bash.1.en.html) | NAME; DESCRIPTION; Shell Grammar; POSIX Mode: intérprete de comandos de tipo sh con extensiones. Manual GNU Bash 5.2, 19-09-2022, paquete Debian trixie 5.2.37-2+b10; publicación del distribuidor con copyright FSF. Respaldo leído tras fallar GNU y Savannah; no se presenta como última versión de Bash. | 2026-10-28 |
| [Microsoft: What is PowerShell?](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.5) | Command-line Shell; Scripting language: automatización, objetos .NET, Windows/Linux/macOS. Documentación PowerShell 7.5; lenguaje y plataforma, sin afirmar exclusividad de Windows o equivalencia de todos los shells. | 2026-10-28 |
| [MDN: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Introducción: lenguaje interpretado o compilado JIT, funciones de primera clase y hosts fuera del navegador. Documentación de Mozilla consultada; modos de implementación y usos, no clasificación absoluta por tipado. | 2026-10-28 |
| [Python: Glossary](https://docs.python.org/3/glossary.html#term-interpreted) | interpreted; bytecode; native code: compilación de bytecode y ejecución mediante intérprete. Documentación observada Python 3.15.2; definición y ejemplo de implementación, sin afirmar que todo lenguaje de script exija interpretación pura. | 2026-10-28 |
| [Microsoft: about_Pipelines](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_pipelines?view=powershell-7.5) | Long description; How pipelines work: operadores de pipeline y objetos entre comandos. Documentación PowerShell 7.5; distinción de objetos y texto, sin atribuir conversión automática de toda salida de programas externos a objetos estructurados. | 2026-10-28 |
| [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures) | Introducción; Lexical scoping; Closure; Practical closures: función y referencias al entorno léxico. Documentación de Mozilla sobre JavaScript; enlaces a variables, no una copia inmutable universal de sus valores. | 2026-10-28 |
| [MDN: Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) | Generator functions: function*, next y yield; ejecución suspendida y reanudación. Documentación de Mozilla consultada; distingue un generador del acceso a entorno léxico que define una closure. | 2026-10-28 |
| [Haskell 2010 Report: Standard Prelude](https://www.haskell.org/onlinereport/haskell2010/haskellch9.html) | Chapter 9 Standard Prelude, definición de curry y uncurry. Haskell 2010; ejemplo primario de conversión a aplicación por argumentos sucesivos, sin introducir Haskell ni trasladar su evaluación a JavaScript. | 2026-10-28 |
| [WHATWG: DOM Standard](https://dom.spec.whatwg.org/) | 2.1 Introduction to DOM Events; 2.2 Event; 2.7 EventTarget; 4 Nodes, Node tree y mutación; textContent. Living Standard consultado, cabecera 19-10-2026; evento, listener, nodo y contenido textual diferenciados. | 2026-10-28 |
| [MDN: Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) | Definición; Synchronous y Asynchronous callbacks, ejemplos de map y temporización. Glosario de Mozilla; callback no implica asincronía o evento del navegador. | 2026-10-28 |
| [Django: Design philosophies](https://docs.djangoproject.com/en/5.2/misc/design-philosophies/#template-system) | Overall, Loose coupling; Template system, Separate logic from presentation. Documentación Django 5.2; ejemplo primario de separación entre presentación y lógica, sin introducir Django o una arquitectura obligatoria en la aplicación. | 2026-10-28 |
| [W3C: XSLT 1.0](https://www.w3.org/TR/1999/REC-xslt-19991116) | 1 Introduction; 4 Expressions; 5 Template Rules; 7 Creating the Result Tree; 16 Output, XML/HTML/text. W3C Recommendation, 16-11-1999; versión fijada para conceptos compartidos y ejemplos, no última versión ni límite de versiones posteriores. | 2026-10-28 |
| [W3C: XSD 1.1, Structures](https://www.w3.org/TR/xmlschema11-1/) | Abstract; 2 Conceptual Framework; 3 Schema Components; schema-validity assessment. W3C Recommendation, 05-04-2012; conformidad con esquema frente a transformación, sin exigir motor XSD 1.1 en los ejemplos. | 2026-10-28 |
| [W3C: CSS Object Model](https://www.w3.org/TR/cssom-1/) | Abstract; CSSStyleSheet; CSSRule: APIs de estilos, distintas del árbol de nodos del documento. Working Draft, 26-08-2021; trabajo en curso, citado solo para la responsabilidad de esas APIs. | 2026-10-28 |
| [W3C: XPath 3.1](https://www.w3.org/TR/xpath-31/) | 1 Introduction; 3.3 Path Expressions; selección y valores en el modelo de datos. W3C Recommendation, 21-03-2017; finalidad del lenguaje, sin atribuir soporte 3.1 completo al motor XPath 1.0 de ejemplos. | 2026-10-28 |
| [React: Render and Commit](https://react.dev/learn/render-and-commit) | Step 2, React renders your components; Step 3, React commits changes to the DOM. Documentación observada v19.3; ejemplo de cálculo intermediario distinto del DOM. No se añade biblioteca ni se universaliza su implementación. | 2026-10-28 |
| [OWASP: Cross Site Scripting Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) | Introduction; Output Encoding por contexto; HTML Sanitization; Safe Sinks; Sole Reliance on CSP Headers. Cheat Sheet Series consultada el 28-10-2026; guía mantenida, no norma legal o prueba de seguridad exhaustiva. | 2026-10-28 |
| [OWASP: Cross-Site Request Forgery Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) | Introduction; Synchronizer Token Pattern; Signed Double-Submit; SameSite y Limitations; Origin/Referer verification. Cheat Sheet Series consultada; controles dependientes del flujo, sitio frente a origen y defensa en profundidad. | 2026-10-28 |
| [OWASP: SQL Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html) | Introduction; Primary Defenses: separación de datos y sentencias/consultas. Cheat Sheet Series consultada; solo distinción del mecanismo frente a XSS, sin ejecutar ataques a bases de datos. | 2026-10-28 |
| [OWASP: Clickjacking Defense](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) | Introduction, UI redress attacks; frame-ancestors y X-Frame-Options. Cheat Sheet Series consultada; distinción de interfaz engañosa frente a ejecución de script o petición forjada. | 2026-10-28 |
| [W3C: Content Security Policy Level 3](https://www.w3.org/TR/CSP3/) | Abstract; 3.1 Content-Security-Policy; 3.2 Report-Only; 3.3 meta; 6 Directives, script-src. Working Draft, 27-10-2026; estado explícito de trabajo en curso, solo controles básicos consolidados, sin garantizar cobertura universal o prevención total de XSS. | 2026-10-28 |
| [OWASP: Web Frontend Security](https://cheatsheetseries.owasp.org/cheatsheets/Web_Frontend_Security_Cheat_Sheet.html) | Use of textContent or innerText for text-only DOM updates; Never transmit secrets to the client; Choose encryption for the threat model. Cheat Sheet Series consultada; documento actual al que redirige AJAX Security; el usuario controla el cliente y TLS protege transporte, no secreto frente al destinatario. | 2026-10-28 |
| [OWASP: Server Side Request Forgery Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html) | Context; Overview of a SSRF common flow: solicitudes inducidas desde la aplicación servidora. Cheat Sheet Series consultada; mecanismo no limitado a HTTP, sin pruebas sobre redes internas o servicios reales. | 2026-10-28 |
| [MDN: Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie) | Attributes: Domain, HttpOnly, SameSite, Secure; cookie prefixes y ejemplos. Documentación de Mozilla consultada; HttpOnly no impide envío por fetch, Secure no oculta al usuario, SameSite según flujo y navegador. | 2026-10-28 |
| [MDN: Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) | Functional overview; Simple requests; Preflighted requests; Requests with credentials. Documentación de Mozilla; lectura entre orígenes y preflight según petición, no autenticación de clientes o protección universal CSRF. | 2026-10-28 |
| [IETF: RFC 9110, HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) | 1 Introduction; 3.3 Connections, semántica aislada por petición; 3.4 Messages; 9.2.1 Safe Methods. RFC 9110, STD 97, junio de 2022; stateless no prohíbe sesiones de aplicación o reutilización de conexiones. | 2026-10-28 |
| [W3C: Subresource Integrity](https://www.w3.org/TR/2016/REC-SRI-20160623/) | Abstract; 3 Integrity metadata y Response verification; 4 Verification of HTML document subresources. W3C Recommendation, 23-06-2016; versión estable específica para comparación por hash, no se confunde con WD SRI de 20-03-2026. | 2026-10-28 |
| [MDN: Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Permissions_Policy) | Concepts and usage; Relationship with the Permissions API; Allowlist: capacidades como cámara y geolocalización. Documentación de Mozilla consultada; disponibilidad limitada y experimental según ficha observada, sin prometer compatibilidad completa. | 2026-10-28 |
| [IETF: RFC 6265](https://www.rfc-editor.org/rfc/rfc6265.html) | Abstract; 4.1.2.5 Secure y 4.1.2.6 HttpOnly; 8 Security Considerations. RFC 6265, abril de 2011; mecanismo histórico de estado y atributos. No se atribuye SameSite a este RFC; ese atributo se respalda por MDN y OWASP. | 2026-10-28 |
| [WHATWG HTML: Introduction](https://html.spec.whatwg.org/multipage/introduction.html) | 1.3 Background; 1.5 Scope; 1.8 HTML vs XML syntax: lenguaje de marcado y representación documental. Living Standard consultado, cabecera 26-10-2026; HTML distinto del protocolo HTTP o de una hoja CSS. | 2026-10-28 |
| [IETF: RFC 6749](https://www.rfc-editor.org/rfc/rfc6749.html) | 2.1 Client Types, user-agent-based public client; 2.2 Client Identifier, identificador no secreto. RFC 6749, octubre de 2012; solo clasificación de cliente y confidencialidad. No se recomiendan flujos antiguos ni se implementa OAuth. | 2026-10-28 |
| [OWASP: Third Party JavaScript Management](https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html) | Introduction; Major risks, Risk 1 Loss of control over changes y Risk 2 Execution of arbitrary code; Third-party JavaScript Deployment Architectures; Security Defense Considerations. Cheat Sheet Series consultada; dependencia de proveedor y ejecución en página, sin equiparar todo recurso externo a código con idénticos privilegios. | 2026-10-28 |
| [OWASP: Vulnerable Dependency Management](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerable_Dependency_Management_Cheat_Sheet.html) | Introduction; Context; Remark about the detection; Remark about the security issue handling decision; Cases; Tools, Remediation and maintained backports. Cheat Sheet Series consultada; gestión del riesgo y versiones, no garantía de ausencia de vulnerabilidades por usar SRI o fijar versión. | 2026-10-28 |

Matices comprobados:

- Bash interpreta lenguaje de shell de tipo sh con extensiones; no toda shell Unix es Bash ni todo script Bash es portable a sh. El manual GNU se leyó en la publicación del paquete Debian con versión explícita.
- PowerShell es multiplataforma y su pipeline transporta objetos .NET; salida de programas externos puede ser texto. La elección de herramienta no se justifica solo por que todas automaticen.
- Interpretación y compilación pueden combinarse con bytecode/JIT; runtime por sí solo no clasifica una implementación. No se deduce ausencia de tipos ni exclusividad de navegador.
- Closure conserva entorno léxico, no necesariamente copia del valor. Callback puede ser síncrono y un listener es una función distinta del evento y del destino DOM. Eventos sintéticos no acreditan interacción real.
- Separar presentación y reglas complejas evita acoplarlas a la plantilla. Se admite lógica de presentación sencilla y no se introduce un framework o arquitectura adicional.
- XSLT construye resultados con métodos XML/HTML/text ya en 1.0. Validación y selección no realizan por sí solas el mapeo; el contrato de salida y posibles pérdidas deben comprobarse.
- DOM es un árbol e interfaces, distinto de fuente, CSSOM y representaciones de biblioteca. React se cita solo como ejemplo del cálculo previo a actualizar DOM.
- XSS, CSRF, inyección SQL, clickjacking y SSRF conservan mecanismos distintos. Las justificaciones no se limitan a decir que una opción es otra vulnerabilidad: explican contexto y error concreto.
- Para texto literal en un div, textContent evita interpretar marcado. La regla no se extrapola a script/style/URL o HTML enriquecido; eliminar script, limitar longitud o Base64 no sustituyen el tratamiento adecuado.
- CSRF con cookies exige comprobar intención/contexto según el flujo. SameSite compara sitios y no es equivalente a origen, ni protección universal aislada. CORS, Secure, HTTPS y validación de formato no sustituyen el control anti-CSRF.
- CSP aplicada y Report-Only son diferentes. CSP no sanea datos ni corrige por sí sola XSS; SRI compara metadatos de integridad y Permissions Policy controla capacidades, con soporte dependiente del navegador.
- Cookie sensible sin lectura legítima de JavaScript: Secure y HttpOnly, SameSite según el flujo y ámbito limitado. HttpOnly no impide enviar la cookie con fetch ni evita toda acción XSS; Secure no es secreto frente al destinatario.
- HTTP stateless describe semántica aislada de peticiones y no impide cookies, sesiones o conexiones reutilizadas. HTML es marcado y HTTP protocolo; no se reduce el transporte moderno siempre a TCP.
- La credencial privada en un bundle es inspeccionable por el destinatario pese a minificación o HTTPS. Se distinguen secretos de identificadores públicos; RFC 6749 solo respalda clientes públicos/identificador, no recomendaciones de flujos antiguos.
- Dependencia de terceros se determina por origen/mantenimiento, no solo por hosting. Una copia local sigue siendo ajena y un archivo propio en CDN no se convierte en biblioteca de terceros. SRI o versión fija no garantizan código sin vulnerabilidades.

Límites y notas de acceso:

- GNU What is Bash?, el manual completo y la portada fallaron por tiempo de espera; el fuente Texinfo en Savannah no fue accesible mediante el lector. No se cuenta ninguna de esas lecturas como respaldo correcto. Se leyó el manual GNU/FSF publicado por Debian trixie, con paquete y versión observados.
- POSIX Issue 8 sh devolvió 403 y no se usa como fuente verificada. No se infiere por ese fallo una regla sobre portabilidad de todas las extensiones Bash.
- El ancla ensayada is-python-an-interpreted-language no existe en la FAQ actual. Se sustituyó por el término interpreted del glosario, cuyo cuerpo explica bytecode y fue leído.
- AJAX Security redirige a Web Frontend Security; se siguió la redirección y se usa el documento actual con sus apartados de texto y secretos. No se atribuye cuerpo de contenido a la página de redirección.
- CSP3 se observó como Working Draft de 27-10-2026; CSSOM, Working Draft de 26-08-2021. Se registran como trabajo en curso. La URI general de SRI devuelve un WD de 20-03-2026; para el concepto de hash se leyó y fijó la recomendación de 23-06-2016, sin confundir versiones.
- Microsoft Learn muestra un aviso genérico de autorización pero devuelve el cuerpo de los apartados citados, que se leyó sin iniciar sesión. No se afirma acceso a contenido privado. Las versiones de documentación no describen necesariamente los motores instalados para los ejemplos.
- Los índices y procedencia Google Docs permanecen intactos, sin nueva lectura privada atribuida o revisión humana independiente. No hay conversiones documentales u OCR.
- La errata activa de P18-026 sigue pendiente en el lote 032. Preparar este lote no la resuelve ni autoriza su aplicación o el cierre editorial.

Las guías de seguridad respaldan conceptos y controles según contexto; no constituyen una auditoría de la aplicación o una garantía de prevención total. No se prueba una vulnerabilidad en servicios reales. Las referencias a Django, React y Haskell sirven para distinguir conceptos; no añaden dependencias o funcionalidades al producto.

## Métricas y pistas

Analizador 2.0.0 aplicado a la simulación de las veinte propuestas, sin escribir bancos.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 8 | 4 |
| Aciertos por primera alternativa de longitud máxima | 8 | 5 |
| Ratio correcta/distractor máximo 1,5–<2 | 4 | 0 |
| Ratio ≥2 | 1 | 0 |
| Feedback correcto menor de 15 palabras | 20 | 0 |
| Feedback correcto e incorrecto idénticos | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación inicial de absolutos en distractores | 0 | 0 |
| Empates de longitud máxima | 1 | 3 |
| Preguntas con los tres distractores explicados | 0 | 20 |

La primera alternativa máxima pasa de **40 % a 25 %** de acierto; la primera mínima acierta **7/20 (35 %)**. Seis de esas siete son formulaciones preservadas (P18-056, 057, 059, 060, 064 y 071); la otra es P18-067, cuya correcta tiene 64 caracteres frente a 65 del distractor mínimo. No se añaden palabras vacías ni se cambian claves para alterar indicadores.

Siguen siendo únicas más largas las correctas de **P18-053** (11 frente a 9 caracteres), **P18-054** (137 frente a 117), **P18-066** (118 frente a 113) y **P18-070** (79 frente a 77). P18-053 compara cuatro nombres de herramientas; P18-054 y 066 conservan su formulación bien diferenciada; P18-070 precisa exposición de credencial privada. Se documentan las longitudes y justificaciones por ID.

Se completan veinte feedback breves y sesenta explicaciones de distractores. Desaparecen cuatro señales graduales de longitud y una de ratio al menos dos. La distribución original permanece **A: 4, B: 4, C: 5, D: 7**; no mide letras visibles de sesiones barajadas. Las métricas, ausencia de alertas y ejemplos no sustituyen revisión conceptual, aceptación del propietario o calibración estadística.

## Historial y ficha

La preparación inicial tenía hash `95bf4d637294a091c353747f094cc4ca45d3050548620a4caf9e2f4771d334cd`. Se precisó únicamente el localizador de OWASP Third Party JavaScript Management de P18-071 con los encabezados actuales. No cambiaron enunciados, opciones, claves o feedback. El registro permite reconstruir el hash previo; el vigente es `7fd400d2b9878cef2708b238ebbf5ccd62013de517c18f735413c0c59c5bc436`. Ambas versiones siguen pendientes de aprobación.

Se usa `--literal-content`, incorporado en el lote 031. Las etiquetas como script se muestran literalmente; el texto de las preguntas no crea nodos activos. Se comprueban veinte apartados, cuarenta marcas de correcta entre antes y propuesta y todos los enlaces de fuentes. Se inspecciona una captura de P18-063 y la ficha no desborda horizontalmente a 390 px. El generador y sus pruebas se protegen por hash y no se modifican.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-034.json --render docs/GSI_REVISION_LOTE_034.md --literal-content
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

Resultados ejecutados el **28-10-2026**; todos los comandos de validación finalizaron con código de salida 0:

- CLI editorial: hash vigente comprobado, simulación de veinte manuales, cero cambios IA/oficiales y cero escrituras en bancos. Ficha literal reproducible.
- **19 pruebas editoriales mantenidas**, **56 JSON y 21 esquemas**, **1.964 preguntas** con estructura válida y **19.251 controles de integridad** correctos. Documentación sincronizada y referencias del catálogo de **4 bloques, 57 temas y 37 Markdown** válidas.
- **151 archivos protegidos** sin cambios: tres bancos, aceptaciones y aplicaciones históricas, entregas anteriores, doce archivos de borradores IA, evidencia, generador literal y sus pruebas. Oficiales idénticas byte a byte a HEAD y al hash auditado; bancos activos iguales a HEAD y a sus hashes iniciales de preparación.
- **77 enlaces locales** comprobados en la ficha, este informe y el plan; 33 fuentes con fecha real, versión y localizador. IDs y claves originales conservados, once enunciados con sus cuatro alternativas intactos y sesenta explicaciones individuales de distractores presentes. Procedencia e índices originales preservados.
- Rechazo de aceptación vacía, recibo del piloto o registro histórico IA como autorización del lote. Guardas de regeneración de bancos manual e IA verificadas. Ausencia de aceptaciones 002–034; el registro de aplicaciones solo contiene el lote 001.
- Hash inicial reconstruido y cambio exclusivo del localizador de P18-071 comprobado, sin alterar enunciados, opciones, claves o feedback durante ese refinamiento.
- **11 ejemplos Python/lxml**, **cuatro controles PowerShell** y **26 controles Chrome** correctos. Captura de P18-063 inspeccionada; marcado literal, ausencia de nodos activos y de desbordamiento horizontal a 390 px verificados. Sus límites de seguridad, versiones y entorno aislado se registran por separado.
- Tres informes derivados iguales en contenido y fecha respecto al inicio del lote; frente a HEAD solo cambia la fecha. `git diff --check` y comprobación de espacios finales de los cuatro archivos nuevos correctos. HEAD sigue en `e3e20ab879518c899806a70575eead28b3b35e6f`, sin nuevo commit.

Las lecturas fallidas de GNU, Savannah y POSIX y el ancla ausente de la FAQ de Python se registran sin atribuirles verificación correcta. El manual publicado por Debian y el glosario de Python aportan los respaldos efectivamente leídos. No fallaron los ejemplos o validadores ejecutados.

El mensaje técnico de cero bloqueos no acredita cierre editorial ni resuelve la errata activa P18-026 del lote 032. Esta requiere aprobación y aplicación de su corrección. Se distinguen revisión conceptual del preparador, aceptación del propietario, señales automáticas y calibración todavía no realizada.

Se ejecutan **11 ejemplos Python/lxml**, **cuatro controles de pipeline con PowerShell 7.6.5 instalado** y **26 controles aislados en Chrome**. Se distingue esa versión instalada de la documentación 7.5. Los ejemplos verifican bytecode, mapeo/validación XML, salida HTML/texto, closures, callbacks, eventos, DOM y texto literal. En Chrome, respuestas HTTPS simuladas por route.fulfill permiten observar CSP aplicada/Report-Only, lectura y envío de HttpOnly y SRI con bytes coincidentes/cambiados. Son ejemplos propios, con cookies ficticias y sin conexiones a servicios externos o credenciales reales.

No se prueba Bash instalado, JIT, toda función XSD 1.1/XPath 3.1/XSLT posterior, tokens CSRF o SameSite en flujos reales, autenticación de servicios, pentest o accesibilidad completa. No se repite la suite HTTP de Entrenamiento, Simulacros, estadísticas o Refuerzo: bancos y código de la aplicación no cambian. Las respuestas simuladas del ejemplo no se presentan como un recorrido HTTP del producto.

## Entrega y continuidad

Creados: `content/question-reviews/lote-034.json`, `docs/GSI_REVISION_LOTE_034.md`, este informe y `logs/gsi-editorial-034-preparation.json`. Modificados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los tres informes derivados de cobertura, validación final y revisión histórica se regeneran y cotejan con los ya fechados el 28-10-2026; frente a HEAD solo difiere su fecha de validación.

Acumulado: **20 aceptadas y 660 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, con **1.082** todavía sin propuesta. Los lotes 002–034 reúnen 113 incidencias IA originales, otras 162 IA y 385 manuales. De las 128 incidencias originales, quince están aceptadas/aplicadas y 113 tienen propuesta pendiente. Ningún recuento técnico acredita resolución de la errata activa P18-026 del lote 032.

Sin conversiones documentales u OCR ni nuevas conversiones pendientes. Oficiales, originales y entregas anteriores intactos. Sin nuevo commit, publicación, fusión o aplicación de contenido pendiente. Para revisar, cotejar cada pregunta y sus fuentes en la ficha antes/después antes de aprobar expresamente el hash vigente. El siguiente lote sigue por bloque y tema. El cierre requiere decisión individual del propietario sobre los 1.762 IDs, resolución de errores confirmados en versiones activas y comprobaciones técnicas/de cobertura superadas; la calibración sigue sin realizarse.
