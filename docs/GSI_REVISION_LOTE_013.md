# GSI-EDITORIAL-013 — revisión propuesta

Preparado: 2026-10-27. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `8b5ca29cb40204af9211d3759c0423ee75c482f53115ea945939b48b67e2ac19`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B1-T06-004

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y opciones bien diferenciados; explicar papeles de ambas parejas sin describir la firma como cifrado reversible del hash.

### Antes

En el proceso conceptual de firma asimétrica, ¿qué clave utiliza el firmante para generar la firma?

- A. La clave privada del destinatario
- B. Su clave privada **(correcta)**
- C. Su clave pública
- D. La clave pública del destinatario

Explicación: La clave privada del firmante genera la firma; su clave pública permite verificarla.

### Propuesta

En el proceso conceptual de firma asimétrica, ¿qué clave utiliza el firmante para generar la firma?

- A. La clave privada del destinatario
- B. Su clave privada **(correcta)**
- C. Su clave pública
- D. La clave pública del destinatario

Explicación: La firma asimétrica se genera con la clave privada del firmante; la clave pública correspondiente sirve para verificarla. Las claves del destinatario pertenecen a otra pareja y no generan la firma atribuida al emisor. Esta separación no equivale a cifrar el documento para mantenerlo secreto ni implica compartir la clave privada con quien verifica.

- Error A: La clave privada del destinatario no es la del firmante que debe producir la firma. Además, no se entrega al emisor para que firme en su nombre.
- Error C: La clave pública del firmante se utiliza para verificar, no para generar la firma que requiere su clave privada. Su difusión no concede capacidad de firmar.
- Error D: La clave pública del destinatario puede intervenir en operaciones de cifrado dirigidas a él, pero no genera la firma del emisor. Se confunden sujeto y operación.

- [NIST FIPS 186-5, Digital Signature Standard](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf) · Sección 3 y secciones 3.2–3.3, páginas impresas 9 y 12–15: generación con clave privada del firmante y verificación con clave pública, bajo garantías de validación · versión: FIPS 186-5 final, 03-02-2023, consultado el 27-10-2026; nota oficial de posibles actualizaciones de 12-05-2025. Uso conceptual, no recomendación de parámetros · comprobado: 2026-10-27

Partida: `b485f5187e58498e3e16abb5a5f4fcd01b885afae91805dd61a4e48f47c090f9` · propuesta: `dd3c9fbf550d638074e06564b38db5098d479c30f2b872882057cd702fc4a4d8`

## AI-GSI-B1-T06-008

Decisión: pending_review · acción: revise.

Motivo: Conservar consulta de estado y clave D; precisar intercambio con respondedor para eliminar ambigüedad de «en línea», retirar formatos ajenos y explicar límites de good y frescura.

### Antes

Se necesita consultar en línea el estado de un certificado. ¿Qué mecanismo corresponde?

- A. ASiC
- B. PAdES
- C. CRL como fichero descargado
- D. OCSP **(correcta)**

Explicación: OCSP permite consultar el estado en línea; CRL es una lista de certificados revocados.

### Propuesta

Un validador necesita preguntar a un respondedor por el estado de un certificado concreto y recibir una respuesta firmada con estado good, revoked o unknown. ¿Qué mecanismo corresponde a esa consulta?

- A. Descargar una CRL completa del emisor.
- B. Enviar una CSR para solicitar la emisión de un certificado.
- C. Comprobar la firma del certificado de la autoridad certificadora.
- D. Solicitar el estado al respondedor mediante OCSP. **(correcta)**

Explicación: OCSP es el protocolo de consulta y respuesta de estado descrito en RFC 6960. El caso pide ese intercambio para un certificado concreto, no descargar una lista. Una CRL también puede obtenerse por Internet: estar en línea no basta para distinguirlos. La respuesta debe verificarse y ser pertinente y reciente; good no acredita por sí solo toda la validez o confianza del certificado.

- Error A: Una CRL es una lista firmada que puede descargarse en línea, pero no es el intercambio OCSP con los estados del caso. La distinción depende de la operación solicitada, no solo del canal de descarga.
- Error B: Una CSR solicita certificación de una clave e identidad. No consulta el estado de revocación de un certificado ya emitido.
- Error C: Verificar una firma de la CA participa en comprobaciones de confianza, pero no devuelve el estado individual good, revoked o unknown de la consulta descrita.

- [RFC 6960: Online Certificate Status Protocol](https://www.rfc-editor.org/rfc/rfc6960.html) · Secciones 2.1–2.2, 2.4 y 3.2: consulta, estados good/revoked/unknown, tiempos y condiciones de aceptación de respuesta firmada; good no equivale a validación completa del certificado · versión: RFC de junio de 2013, consultado 27-10-2026; ficha RFC Editor indica actualizaciones 8954 y 9654 sobre Nonce. No se prescribe aquí uso de Nonce ni configuración del protocolo · comprobado: 2026-10-27
- [RFC 5280: X.509, certificados y listas de revocación](https://www.rfc-editor.org/rfc/rfc5280.html) · Secciones 4.1.1.3, 4.1.2.4–7 y 5.1.2.6: vínculo sujeto/clave pública, emisor distinto, vigencia y lista; sección 6.1.3.a: firma, periodo y revocación en validación de camino · versión: RFC de mayo de 2008; texto base consultado 27-10-2026 y ficha RFC Editor contrastada, con actualizaciones posteriores. Se usan estructura y conceptos, no un perfil de despliegue completo · comprobado: 2026-10-27
- [RFC 2986: PKCS #10, Certification Request Syntax Specification](https://www.rfc-editor.org/rfc/rfc2986.html) · Secciones 1 y 4: solicitud de certificación con nombre, clave pública y atributos; distinta de un certificado emitido o una respuesta de estado · versión: RFC informativo de noviembre de 2000, PKCS #10 v1.7; texto publicado consultado el 27-10-2026 · comprobado: 2026-10-27

Partida: `f8e332af069af237406f6474c4cecd9b32ad1ed73cf6a9c23037578a72207f6b` · propuesta: `8c9ea73ac8e6e9c4f26d3b0d0511ab98dc558218eb410fd7991cde2a1be96e1f`

## AI-GSI-B1-T06-009

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación de CRL y clave B; comparar cuatro objetos próximos de PKI en lugar de Wallet y JIT, explicando firma, entradas y finalidad.

### Antes

¿Cómo se denomina una lista de certificados revocados?

- A. OCSP
- B. CRL **(correcta)**
- C. EUDI Wallet
- D. JIT

Explicación: CRL identifica la lista de revocación; OCSP es el protocolo de consulta de estado.

### Propuesta

En una PKI X.509, ¿qué objeto corresponde a una lista firmada de certificados revocados, identificados por sus números de serie?

- A. Una respuesta de estado individual OCSP.
- B. Una lista de revocación de certificados, CRL. **(correcta)**
- C. Una solicitud de certificación de clave, CSR.
- D. Un certificado de clave pública de la CA.

Explicación: Una CRL es la lista de revocación del perfil X.509. Las entradas identifican certificados mediante números de serie y contienen datos de revocación; la lista tiene firma y datos temporales que deben comprobarse. No es una respuesta OCSP, una solicitud de emisión ni el certificado de la propia autoridad. Consultarla no dispensa del resto de validación.

- Error A: OCSP expresa estado de los certificados consultados mediante respuestas, no es el objeto CRL que enumera las entradas de una lista de revocación.
- Error C: Una CSR contiene una petición de certificación, no una relación de certificados revocados. Se utiliza en emisión, no como publicación de estado.
- Error D: El certificado de la CA vincula una clave pública con su sujeto y permite comprobar firmas según la cadena. No sustituye la lista con números de serie revocados.

- [RFC 5280: X.509, certificados y listas de revocación](https://www.rfc-editor.org/rfc/rfc5280.html) · Secciones 4.1.1.3, 4.1.2.4–7 y 5.1.2.6: vínculo sujeto/clave pública, emisor distinto, vigencia y lista; sección 6.1.3.a: firma, periodo y revocación en validación de camino · versión: RFC de mayo de 2008; texto base consultado 27-10-2026 y ficha RFC Editor contrastada, con actualizaciones posteriores. Se usan estructura y conceptos, no un perfil de despliegue completo · comprobado: 2026-10-27
- [RFC 6960: Online Certificate Status Protocol](https://www.rfc-editor.org/rfc/rfc6960.html) · Secciones 2.1–2.2, 2.4 y 3.2: consulta, estados good/revoked/unknown, tiempos y condiciones de aceptación de respuesta firmada; good no equivale a validación completa del certificado · versión: RFC de junio de 2013, consultado 27-10-2026; ficha RFC Editor indica actualizaciones 8954 y 9654 sobre Nonce. No se prescribe aquí uso de Nonce ni configuración del protocolo · comprobado: 2026-10-27
- [RFC 2986: PKCS #10, Certification Request Syntax Specification](https://www.rfc-editor.org/rfc/rfc2986.html) · Secciones 1 y 4: solicitud de certificación con nombre, clave pública y atributos; distinta de un certificado emitido o una respuesta de estado · versión: RFC informativo de noviembre de 2000, PKCS #10 v1.7; texto publicado consultado el 27-10-2026 · comprobado: 2026-10-27

Partida: `f9ac4c73491f6cfdade922f20182e310651f334d21394ee4232cf50701d652b4` · propuesta: `5b5b5469249911d9f78657fc7b6823d0a7e3043d260c3aa179deb6bc56c3aa20`

## AI-GSI-B1-T06-016

Decisión: pending_review · acción: revise.

Motivo: Conservar evidencia temporal y clave C; sustituir representación y permisos ajenos por confusiones próximas con firma, cifrado y fecha original, manteniendo distinción entre sello común y cualificado.

### Antes

¿Qué aporta específicamente un sello de tiempo?

- A. Autorización de acceso a cualquier expediente
- B. Confidencialidad automática del documento
- C. Vinculación de datos con un instante y evidencia temporal **(correcta)**
- D. Nombramiento de un representante legal

Explicación: El sellado de tiempo aporta evidencia temporal; no sustituye permisos, representación ni cifrado.

### Propuesta

¿Qué aporta específicamente un sello de tiempo?

- A. Identificar al firmante y acreditar su consentimiento sobre el contenido del documento.
- B. Ocultar el contenido del documento mediante un cifrado que depende de la fecha y hora.
- C. Vincular datos con un instante y aportar evidencia de que esos datos existían entonces. **(correcta)**
- D. Acreditar la fecha exacta en que se creó originalmente el documento, aunque se selle después.

Explicación: El artículo 3.33 eIDAS vincula datos con un instante y prueba su existencia en él. RFC 3161 describe esa evidencia temporal mediante una autoridad de sellado y una huella. No demuestra por sí sola cuándo se creó originalmente el documento, quién manifestó voluntad de firmarlo o que su contenido esté cifrado. La presunción de exactitud temporal del artículo 41.2 corresponde al sello cualificado.

- Error A: Confunde evidencia de tiempo con la vinculación al firmante y su acto de firma. El token temporal no demuestra por sí solo consentimiento de esa persona sobre el contenido.
- Error B: Sellar temporalmente no es cifrar para ocultar. La evidencia temporal puede acompañar datos que sigan siendo legibles.
- Error D: Que los datos existan al sellarse no identifica su primera creación. Un documento creado antes puede sellarse después sin que el token acredite la fecha original.

- [Reglamento (UE) 910/2014, identificación electrónica y servicios de confianza](https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-81822) · Artículos 3.9–12, 3.24–25, 3.33 y 3.38; 25.1–2, 26 y 41.1–2: firma, cualificada, creador jurídico y sello, sello de tiempo, certificado de sitio web, efectos y requisitos. Contraste con reforma 2024/1183 en referencia separada · versión: Publicación DOUE de 28-08-2014 reproducida en BOE, consultada el 27-10-2026; URL de publicación, no consolidación. Se usan los preceptos señalados, sin trasladar apartados suprimidos · comprobado: 2026-10-27
- [Reglamento (UE) 2024/1183, reforma del marco europeo de identidad digital](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80608) · Artículo 1, puntos 3, 24, 28, 35, 36, 41 y 42: definiciones, artículo 26, gestión cualificada remota, sellos y tiempo; se mantiene la equivalencia del artículo 25.2 y se distinguen apartados eliminados · versión: Publicación DOUE de 30-04-2024 reproducida en BOE; entrada en vigor 20-05-2024; consulta 27-10-2026. No se declara lectura integral de consolidación EUR-Lex · comprobado: 2026-10-27
- [RFC 3161: Time-Stamp Protocol](https://www.rfc-editor.org/rfc/rfc3161.html) · Secciones 1 y 2.1: prueba de existencia antes de un tiempo, fuente fiable y sellado de huella; no certificación de la fecha original de creación del documento · versión: RFC de agosto de 2001, consultado 27-10-2026; ficha RFC Editor indica actualización 5816 de ESSCertIDv2. Uso conceptual, no selección de algoritmo · comprobado: 2026-10-27

Partida: `070c78bba0a4d2e66909c6df6724cc28d31b15a5f31998bdad4322ca7b249d59` · propuesta: `539321499b618004dea0a708b687ed41743b65f58b6eece12ea82e6cc427d6c0`

## AI-GSI-B1-T06-017

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta de PDF y clave A; presentar cuatro nombres reales sin etiquetas erróneas que revelen la respuesta, y distinguir formato, contenedor y categoría jurídica.

### Antes

Se requiere una firma integrada en un documento PDF. ¿Qué familia de formatos corresponde?

- A. PAdES **(correcta)**
- B. ASiC como algoritmo de hash
- C. XAdES
- D. CAdES como formato XML

Explicación: PAdES corresponde a PDF; XAdES a XML, CAdES a CMS y ASiC a contenedores.

### Propuesta

Se requiere una firma integrada en un documento PDF. ¿Qué familia de formatos corresponde?

- A. PAdES. **(correcta)**
- B. ASiC.
- C. XAdES.
- D. CAdES.

Explicación: PAdES es la familia que se apoya en los mecanismos de firma de PDF. XAdES parte de XML y CAdES de CMS; ASiC es un contenedor que asocia objetos y firmas o evidencias de tiempo. Que un PDF pueda transportarse en un contenedor no cambia qué familia integra la firma en su estructura. El formato tampoco determina por sí solo que la firma sea cualificada.

- Error B: ASiC agrupa objetos y firmas o evidencias en un contenedor basado en ZIP. Puede contener un PDF, pero no es por ello la familia de firma integrada en la estructura PDF.
- Error C: XAdES se construye sobre firma XML. No es la familia que el enunciado pide para integración en PDF.
- Error D: CAdES se basa en CMS, no es un formato XML. PAdES utiliza elementos de CMS/CAdES en PDF, pero la familia específica solicitada es PAdES.

- [ETSI EN 319 142-1: PAdES baseline signatures](https://www.etsi.org/deliver/etsi_en/319100_319199/31914201/01.02.01_60/en_31914201v010201p.pdf) · Sección 1, página 6: base PDF; sección 4.1; sección 6.3, tabla 1 y requisitos de material de validación y document-time-stamp, páginas 18–22: niveles B-LT/B-LTA · versión: V1.2.1, 2024-01, versión publicada consultada 27-10-2026; directorio oficial y programa de trabajo contrastados: V1.3.0 de 2026-08 en aprobación, no presentada como publicación final · comprobado: 2026-10-27
- [ETSI EN 319 132-1: XAdES baseline signatures](https://www.etsi.org/deliver/etsi_en/319100_319199/31913201/01.03.01_60/en_31913201v010301p.pdf) · Sección 1, página 8: firma sobre XML y propiedades calificadoras; sección 4: sintaxis · versión: V1.3.1, 2024-07; PDF publicado y directorio oficial consultados el 27-10-2026 · comprobado: 2026-10-27
- [ETSI EN 319 122-1: CAdES baseline signatures](https://www.etsi.org/deliver/etsi_en/319100_319199/31912201/01.03.01_60/en_31912201v010301p.pdf) · Sección 1, página 8: base CMS y atributos; sección 4: sintaxis general · versión: V1.3.1, 2023-06; PDF publicado y directorio oficial consultados el 27-10-2026 · comprobado: 2026-10-27
- [ETSI EN 319 162-1: Associated Signature Containers](https://www.etsi.org/deliver/etsi_en/319100_319199/31916201/01.01.01_60/en_31916201v010101p.pdf) · Sección 1, página 7: contenedor basado en ZIP que asocia objetos y firmas separadas o evidencias de tiempo; soporta CAdES y XAdES, sin ser un algoritmo de hash · versión: V1.1.1, 2016-04; PDF publicado y directorio oficial consultados el 27-10-2026 · comprobado: 2026-10-27

Partida: `a6c2810bee93bdce361ff08775cc37dc57e3bd4199680dddfee188897511d68b` · propuesta: `f90139d9bd59c486e73d7ac7c0636c3d91a7e46be2a23158e348c251469be8b5`

## AI-GSI-B1-T06-005

Decisión: pending_review · acción: revise.

Motivo: Conservar necesidad de confianza y vigencia además de integridad matemática y clave A; aplicar al certificado adjunto con errores plausibles de aceptación, sin hash reversible ni cesión de clave privada.

### Antes

¿Qué debe comprobarse además de la integridad matemática de una firma basada en certificado?

- A. La vigencia y confianza del certificado **(correcta)**
- B. Que el hash pueda descifrarse para recuperar el documento
- C. Que el documento esté cifrado obligatoriamente
- D. Que el receptor conozca la clave privada

Explicación: La validación incluye la confianza y vigencia del certificado; no basta con comprobar la operación criptográfica.

### Propuesta

Un validador comprueba matemáticamente una firma con la clave del certificado adjunto. Aún no ha examinado si confía en ese certificado. ¿Qué comprobación falta para aceptarlo según la política aplicable?

- A. Validar cadena hasta un ancla aceptada, periodo de validez y estado del certificado. **(correcta)**
- B. Aceptar el certificado porque la firma verifica con la clave pública que contiene.
- C. Añadir al emisor como ancla de confianza por el solo hecho de aparecer en la firma.
- D. Dar por confiable el certificado porque su nombre coincide con el indicado como firmante.

Explicación: La verificación matemática no establece por sí sola confianza en el certificado. Debe examinarse la cadena hasta un ancla aceptada, su periodo de validez y estado en el tiempo pertinente, además de los demás requisitos de la política. Un certificado adjunto no se convierte automáticamente en confiable. Para una firma histórica importan las evidencias y el instante de validación, no una comparación aislada con la fecha de hoy.

- Error B: Verificar con la clave contenida en un certificado adjunto solo prueba la operación respecto de esa clave. No acredita que se confíe en el emisor ni que el certificado sea aceptable.
- Error C: Aceptar cualquier emisor incluido como nueva ancla eliminaría el control de confianza. El ancla se determina por la política y fuentes aceptadas, no por la mera presencia en el envío.
- Error D: Coincidir nombres declarados no valida la cadena, vigencia o revocación. Una identidad escrita no sustituye las garantías que permiten confiar en su vínculo con la clave.

- [RFC 5280: X.509, certificados y listas de revocación](https://www.rfc-editor.org/rfc/rfc5280.html) · Secciones 4.1.1.3, 4.1.2.4–7 y 5.1.2.6: vínculo sujeto/clave pública, emisor distinto, vigencia y lista; sección 6.1.3.a: firma, periodo y revocación en validación de camino · versión: RFC de mayo de 2008; texto base consultado 27-10-2026 y ficha RFC Editor contrastada, con actualizaciones posteriores. Se usan estructura y conceptos, no un perfil de despliegue completo · comprobado: 2026-10-27
- [RFC 6960: Online Certificate Status Protocol](https://www.rfc-editor.org/rfc/rfc6960.html) · Secciones 2.1–2.2, 2.4 y 3.2: consulta, estados good/revoked/unknown, tiempos y condiciones de aceptación de respuesta firmada; good no equivale a validación completa del certificado · versión: RFC de junio de 2013, consultado 27-10-2026; ficha RFC Editor indica actualizaciones 8954 y 9654 sobre Nonce. No se prescribe aquí uso de Nonce ni configuración del protocolo · comprobado: 2026-10-27
- [NIST FIPS 186-5, Digital Signature Standard](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf) · Sección 3 y secciones 3.2–3.3, páginas impresas 9 y 12–15: generación con clave privada del firmante y verificación con clave pública, bajo garantías de validación · versión: FIPS 186-5 final, 03-02-2023, consultado el 27-10-2026; nota oficial de posibles actualizaciones de 12-05-2025. Uso conceptual, no recomendación de parámetros · comprobado: 2026-10-27

Partida: `7cac4030b733b3da7658076166a7bca38a0f02ea2a86297debab9564ff1aa8ce` · propuesta: `e3a316f0c93665071623ddb128295962eea88f088c9a4961f4a8f684441f769d`

## AI-GSI-B1-T06-006

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y opciones; completar diferencia entre categoría jurídica y mecanismo técnico sin reducir toda firma electrónica a cualificada ni negar matices de una imagen usada para firmar.

### Antes

¿Qué relación describe correctamente firma electrónica y firma digital?

- A. La primera es un concepto jurídico; la segunda es un mecanismo técnico **(correcta)**
- B. La firma digital es exclusivamente una imagen de una rúbrica
- C. Firma electrónica y sello de tiempo tienen la misma finalidad
- D. La firma electrónica exige siempre certificado cualificado

Explicación: La firma digital es una técnica; la firma electrónica se define por el marco jurídico, con categorías y requisitos.

### Propuesta

¿Qué relación describe correctamente firma electrónica y firma digital?

- A. La primera es un concepto jurídico; la segunda es un mecanismo técnico **(correcta)**
- B. La firma digital es exclusivamente una imagen de una rúbrica
- C. Firma electrónica y sello de tiempo tienen la misma finalidad
- D. La firma electrónica exige siempre certificado cualificado

Explicación: Firma electrónica es un concepto jurídico definido por eIDAS, con categorías y requisitos. Firma digital designa el mecanismo técnico criptográfico de generación y verificación. No son sinónimos exactos de imagen de rúbrica, sello de tiempo o firma cualificada: una técnica puede usarse en una firma electrónica sin que su nombre acredite por sí solo todos los requisitos de una categoría jurídica.

- Error B: Una imagen escaneada no es el mecanismo criptográfico de firma digital que permite comprobar integridad y vinculación mediante claves. Su eventual uso como dato de firma electrónica no la convierte en ese mecanismo técnico.
- Error C: El sello de tiempo aporta evidencia de existencia de datos en un instante. No tiene la misma finalidad específica que la firma del firmante sobre datos.
- Error D: eIDAS distingue firma electrónica, avanzada y cualificada. Exigir siempre certificado cualificado trasladaría a toda firma un requisito de una categoría concreta.

- [Reglamento (UE) 910/2014, identificación electrónica y servicios de confianza](https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-81822) · Artículos 3.9–12, 3.24–25, 3.33 y 3.38; 25.1–2, 26 y 41.1–2: firma, cualificada, creador jurídico y sello, sello de tiempo, certificado de sitio web, efectos y requisitos. Contraste con reforma 2024/1183 en referencia separada · versión: Publicación DOUE de 28-08-2014 reproducida en BOE, consultada el 27-10-2026; URL de publicación, no consolidación. Se usan los preceptos señalados, sin trasladar apartados suprimidos · comprobado: 2026-10-27
- [Reglamento (UE) 2024/1183, reforma del marco europeo de identidad digital](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80608) · Artículo 1, puntos 3, 24, 28, 35, 36, 41 y 42: definiciones, artículo 26, gestión cualificada remota, sellos y tiempo; se mantiene la equivalencia del artículo 25.2 y se distinguen apartados eliminados · versión: Publicación DOUE de 30-04-2024 reproducida en BOE; entrada en vigor 20-05-2024; consulta 27-10-2026. No se declara lectura integral de consolidación EUR-Lex · comprobado: 2026-10-27
- [NIST FIPS 186-5, Digital Signature Standard](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf) · Sección 3 y secciones 3.2–3.3, páginas impresas 9 y 12–15: generación con clave privada del firmante y verificación con clave pública, bajo garantías de validación · versión: FIPS 186-5 final, 03-02-2023, consultado el 27-10-2026; nota oficial de posibles actualizaciones de 12-05-2025. Uso conceptual, no recomendación de parámetros · comprobado: 2026-10-27

Partida: `256615f8fd936607f5d318680dc35cb5de735342018249e81067e7dc8fbb1cab` · propuesta: `d76d4b083405080b938ae3339a5e9fa0452e2062ed17c87597191a7f98625dc6`

## AI-GSI-B1-T06-007

Decisión: pending_review · acción: revise.

Motivo: Conservar vínculo identidad/clave pública y clave D; comparar elementos próximos de sujeto, emisor, secreto y almacén, acotando certificado de usuario para evitar la coincidencia en uno autofirmado de CA.

### Antes

¿Qué vinculación establece un certificado de clave pública?

- A. Una clave privada con su publicación en Internet
- B. Una identidad con la contraseña del usuario
- C. Una dirección IP con la confidencialidad de todos sus mensajes
- D. Una identidad con una clave pública **(correcta)**

Explicación: El certificado vincula identidad y clave pública, firmado por una entidad de confianza; no publica la clave privada.

### Propuesta

En un certificado X.509 de usuario emitido por una CA distinta del titular, ¿qué vinculación certifica la firma del emisor?

- A. La identidad del emisor con la clave pública de firma de la propia CA.
- B. La identidad del titular con una clave privada almacenada dentro del certificado.
- C. La identidad del titular con la contraseña que activa el uso de su clave privada.
- D. La identidad del sujeto certificado con la clave pública incluida en el certificado. **(correcta)**

Explicación: La firma del emisor certifica el vínculo entre el sujeto y la clave pública incluida, conforme a RFC 5280. El certificado distingue emisor y sujeto; la clave privada y el secreto de activación no se publican como esa clave. La identidad certificada sigue las reglas del perfil y puede usar nombres alternativos; no implica necesariamente el nombre civil de una persona física.

- Error A: En el certificado de usuario descrito, emisor y titular son distintos. La clave pública incluida se asocia al sujeto de ese certificado, no es por ese hecho la clave de firma de la CA.
- Error B: El campo SubjectPublicKeyInfo contiene clave pública, no privada. Un almacén que agrupe certificado y clave privada no convierte la clave privada en contenido del certificado público.
- Error C: Una contraseña o PIN puede proteger el uso de la clave privada, pero no es la clave pública certificada ni el objeto del vínculo sujeto/clave que firma la CA.

- [RFC 5280: X.509, certificados y listas de revocación](https://www.rfc-editor.org/rfc/rfc5280.html) · Secciones 4.1.1.3, 4.1.2.4–7 y 5.1.2.6: vínculo sujeto/clave pública, emisor distinto, vigencia y lista; sección 6.1.3.a: firma, periodo y revocación en validación de camino · versión: RFC de mayo de 2008; texto base consultado 27-10-2026 y ficha RFC Editor contrastada, con actualizaciones posteriores. Se usan estructura y conceptos, no un perfil de despliegue completo · comprobado: 2026-10-27

Partida: `dc424737a40a72c67dc97f97bf189565d849d90e0bfaca82eb2c40fdeba1a93d` · propuesta: `003b512b58db42b27aaf9c350a914d0e4788a5a97811a70e11652a679390aa44`

## AI-GSI-B1-T06-010

Decisión: pending_review · acción: revise.

Motivo: Conservar revocación distinta de caducidad y clave A; precisar uso actual y comparar errores de fecha, firma del emisor y conservación de copia con longitud y ámbito próximos.

### Antes

Un certificado todavía no ha caducado. ¿Qué comprobación sigue siendo necesaria?

- A. Comprobar si ha sido revocado **(correcta)**
- B. Publicar su clave privada
- C. Suponer que conserva automáticamente toda su confianza
- D. Convertir su certificado en hash reversible

Explicación: Caducidad y revocación son causas diferentes; estar dentro del periodo de validez no descarta revocación.

### Propuesta

Se pretende usar ahora un certificado cuyo periodo notBefore–notAfter incluye la fecha actual. ¿Qué comprobación de estado sigue siendo necesaria pese a que aún no haya caducado?

- A. Comprobar revocación con información de estado válida y temporalmente pertinente. **(correcta)**
- B. Darlo por no revocado porque la fecha actual está dentro de su periodo de validez.
- C. Darlo por no revocado porque su firma puede verificarse con la clave del emisor.
- D. Darlo por no revocado porque se ha guardado una copia íntegra del certificado original.

Explicación: Estar dentro del periodo de validez no descarta revocación. Para el uso actual del caso se necesita información de estado válida y pertinente, mediante los mecanismos admitidos por la política, además de las demás comprobaciones. Una respuesta OCSP requiere verificación de firma, autoridad y tiempos; un estado unknown no equivale a good. El caso no juzga automáticamente una firma histórica por el estado actual.

- Error B: Las fechas delimitan un periodo, pero un certificado puede revocarse antes de notAfter. No permiten deducir que conserva estado aceptable.
- Error C: La firma del emisor puede seguir verificándose aunque el certificado se haya revocado después de emitirse. Integridad del certificado y estado son comprobaciones distintas.
- Error D: Conservar una copia sin alteraciones no impide una revocación posterior. La copia no sustituye la información de estado temporalmente pertinente.

- [RFC 5280: X.509, certificados y listas de revocación](https://www.rfc-editor.org/rfc/rfc5280.html) · Secciones 4.1.1.3, 4.1.2.4–7 y 5.1.2.6: vínculo sujeto/clave pública, emisor distinto, vigencia y lista; sección 6.1.3.a: firma, periodo y revocación en validación de camino · versión: RFC de mayo de 2008; texto base consultado 27-10-2026 y ficha RFC Editor contrastada, con actualizaciones posteriores. Se usan estructura y conceptos, no un perfil de despliegue completo · comprobado: 2026-10-27
- [RFC 6960: Online Certificate Status Protocol](https://www.rfc-editor.org/rfc/rfc6960.html) · Secciones 2.1–2.2, 2.4 y 3.2: consulta, estados good/revoked/unknown, tiempos y condiciones de aceptación de respuesta firmada; good no equivale a validación completa del certificado · versión: RFC de junio de 2013, consultado 27-10-2026; ficha RFC Editor indica actualizaciones 8954 y 9654 sobre Nonce. No se prescribe aquí uso de Nonce ni configuración del protocolo · comprobado: 2026-10-27

Partida: `d5e08a0c4aac173049d92757a77357de2d35f1aa623a547806fd12a644e006cb` · propuesta: `d2abe1a9cd9cf3a596991f8fb559c2e8722edad2e504caff91a827c6fe1f7876`

## AI-GSI-B1-T06-012

Decisión: pending_review · acción: revise.

Motivo: Conservar combinación de firma cualificada y clave A; comparar las cuatro combinaciones de certificado y dispositivo sin formatos, contraseñas compartidas o caducidad como distractores ajenos.

### Antes

¿Qué combinación define una firma electrónica cualificada?

- A. Firma avanzada, certificado cualificado y dispositivo cualificado **(correcta)**
- B. Cualquier firma digital con certificado caducado
- C. Documento PDF y sello de tiempo, sin certificado
- D. Firma avanzada y cualquier contraseña compartida

Explicación: La cualificada exige los tres elementos indicados; el formato del documento no sustituye esos requisitos.

### Propuesta

¿Qué combinación define una firma electrónica cualificada?

- A. Firma avanzada, certificado cualificado y dispositivo cualificado de creación de firma. **(correcta)**
- B. Firma avanzada, certificado cualificado y dispositivo no cualificado de creación de firma.
- C. Firma avanzada, certificado no cualificado y dispositivo cualificado de creación de firma.
- D. Firma avanzada, certificado no cualificado y dispositivo no cualificado de creación de firma.

Explicación: El artículo 3.12 define la firma cualificada como avanzada, creada mediante dispositivo cualificado y basada en certificado cualificado de firma. Las cuatro opciones mantienen avanzada y comparan los otros dos requisitos: ambos deben cumplirse. La gestión remota de un dispositivo cualificado puede ser posible bajo sus condiciones; no se exige por esta definición que el firmante tenga una tarjeta física local.

- Error B: Tener certificado cualificado no suple el dispositivo cualificado de creación que exige la definición. Avanzada con certificado cualificado no acredita por sí sola firma cualificada.
- Error C: Un dispositivo cualificado no transforma un certificado no cualificado en cualificado. Falta uno de los requisitos acumulativos del artículo 3.12.
- Error D: La condición de avanzada no basta para ser cualificada. Esta combinación omite tanto certificado cualificado como dispositivo cualificado de creación.

- [Reglamento (UE) 910/2014, identificación electrónica y servicios de confianza](https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-81822) · Artículos 3.9–12, 3.24–25, 3.33 y 3.38; 25.1–2, 26 y 41.1–2: firma, cualificada, creador jurídico y sello, sello de tiempo, certificado de sitio web, efectos y requisitos. Contraste con reforma 2024/1183 en referencia separada · versión: Publicación DOUE de 28-08-2014 reproducida en BOE, consultada el 27-10-2026; URL de publicación, no consolidación. Se usan los preceptos señalados, sin trasladar apartados suprimidos · comprobado: 2026-10-27
- [Reglamento (UE) 2024/1183, reforma del marco europeo de identidad digital](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80608) · Artículo 1, puntos 3, 24, 28, 35, 36, 41 y 42: definiciones, artículo 26, gestión cualificada remota, sellos y tiempo; se mantiene la equivalencia del artículo 25.2 y se distinguen apartados eliminados · versión: Publicación DOUE de 30-04-2024 reproducida en BOE; entrada en vigor 20-05-2024; consulta 27-10-2026. No se declara lectura integral de consolidación EUR-Lex · comprobado: 2026-10-27

Partida: `21734546dd65a5ecb62ad673235244b88c01c91caa67dada2d90569c814c6aec` · propuesta: `1939b860d5dd97c268148d98dad34b14a0d8d69b164e8da55fbea4cd03f2f18d`

## AI-GSI-B1-T06-013

Decisión: pending_review · acción: revise.

Motivo: Conservar detección de alteraciones de avanzada y clave D; contrastar requisitos de cualificada, atribución y confidencialidad, sin publicar claves privadas ni prometer inmutabilidad.

### Antes

¿Qué característica corresponde a la firma avanzada?

- A. Exigir que la clave privada sea pública
- B. Prescindir de toda vinculación con el firmante
- C. Impedir técnicamente cualquier lectura del documento
- D. Permitir detectar alteraciones posteriores en los datos firmados **(correcta)**

Explicación: La firma avanzada vincula e identifica al firmante y permite detectar modificaciones; no equivale a cifrado confidencial.

### Propuesta

¿Qué característica corresponde a la firma avanzada?

- A. Exigir en todos los casos certificado cualificado y dispositivo cualificado de creación de firma.
- B. Permitir atribuirla a un firmante distinto sin cambiar la identidad que acredita sobre los datos.
- C. Garantizar que solo el firmante pueda leer el contenido, aunque no exista cifrado adicional.
- D. Permitir detectar modificaciones posteriores en los datos con los que está vinculada la firma. **(correcta)**

Explicación: El artículo 26.1.d exige vinculación a los datos que haga detectables sus modificaciones posteriores. Es un requisito de firma avanzada junto a vínculo único, identificación y control de los datos de creación en los términos del precepto. Detectar una alteración no es impedir toda modificación ni ocultar el contenido. Certificado y dispositivo cualificados pertenecen a la definición adicional de cualificada.

- Error A: Traslada a toda avanzada los requisitos específicos de cualificada. El artículo 26 no exige por esa sola categoría ambos elementos cualificados.
- Error B: La firma avanzada debe vincularse de manera única al firmante y permitir identificarlo. Sustituirlo sin cambiar la identidad acreditada contradice esa vinculación, no la caracteriza.
- Error C: Confunde protección de integridad y vinculación con confidencialidad. La firma no hace ilegible el contenido por sí sola; ocultarlo requiere medidas adicionales.

- [Reglamento (UE) 910/2014, identificación electrónica y servicios de confianza](https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-81822) · Artículos 3.9–12, 3.24–25, 3.33 y 3.38; 25.1–2, 26 y 41.1–2: firma, cualificada, creador jurídico y sello, sello de tiempo, certificado de sitio web, efectos y requisitos. Contraste con reforma 2024/1183 en referencia separada · versión: Publicación DOUE de 28-08-2014 reproducida en BOE, consultada el 27-10-2026; URL de publicación, no consolidación. Se usan los preceptos señalados, sin trasladar apartados suprimidos · comprobado: 2026-10-27
- [Reglamento (UE) 2024/1183, reforma del marco europeo de identidad digital](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80608) · Artículo 1, puntos 3, 24, 28, 35, 36, 41 y 42: definiciones, artículo 26, gestión cualificada remota, sellos y tiempo; se mantiene la equivalencia del artículo 25.2 y se distinguen apartados eliminados · versión: Publicación DOUE de 30-04-2024 reproducida en BOE; entrada en vigor 20-05-2024; consulta 27-10-2026. No se declara lectura integral de consolidación EUR-Lex · comprobado: 2026-10-27
- [NIST FIPS 186-5, Digital Signature Standard](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf) · Sección 3 y secciones 3.2–3.3, páginas impresas 9 y 12–15: generación con clave privada del firmante y verificación con clave pública, bajo garantías de validación · versión: FIPS 186-5 final, 03-02-2023, consultado el 27-10-2026; nota oficial de posibles actualizaciones de 12-05-2025. Uso conceptual, no recomendación de parámetros · comprobado: 2026-10-27

Partida: `db6a52b809748a8486b036966c7463a691f8ee97faaa7e5beb04c150b5c2bb5f` · propuesta: `d944edf45154721d45e9dbd7b5ee853a470991db9d87af156b80ef3985f4c9d5`

## AI-GSI-B1-T06-014

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y opciones; distinguir equivalencia, admisibilidad de otras firmas y veracidad del contenido, sin no repudio absoluto.

### Antes

¿Qué efecto jurídico atribuye eIDAS a la firma electrónica cualificada, en sus términos?

- A. Efecto jurídico idéntico al de cualquier firma simple sin requisitos adicionales
- B. Equivalencia con una firma manuscrita solo si interviene un notario
- C. Presunción absoluta de veracidad del contenido firmado
- D. Equivalencia con la firma manuscrita **(correcta)**

Explicación: La equivalencia con la manuscrita no convierte en indiscutible el contenido ni altera su naturaleza jurídica.

### Propuesta

¿Qué efecto jurídico atribuye eIDAS a la firma electrónica cualificada, en sus términos?

- A. Efecto jurídico idéntico al de cualquier firma simple sin requisitos adicionales
- B. Equivalencia con una firma manuscrita solo si interviene un notario
- C. Presunción absoluta de veracidad del contenido firmado
- D. Equivalencia con la firma manuscrita **(correcta)**

Explicación: El artículo 25.2 atribuye a la firma cualificada efecto jurídico equivalente al de la manuscrita. No exige intervención notarial adicional para esa equivalencia ni declara verdadero e indiscutible todo lo firmado. El apartado 1 impide negar efectos o prueba a otras firmas por el mero hecho de no ser cualificadas, sin equiparar automáticamente todos sus requisitos y efectos.

- Error A: No ser cualificada no permite negar por ese solo motivo efectos o admisibilidad a otra firma, pero eso no hace idénticos sus requisitos y efectos jurídicos. La equivalencia específica con manuscrita se atribuye a la cualificada.
- Error B: El artículo 25.2 no condiciona su equivalencia a intervención notarial. Los requisitos de firma cualificada son distintos de una exigencia adicional de notario.
- Error C: Firmar no convierte en absolutamente verdadero el contenido ni elimina la posibilidad de controversia. Se confunde efecto de firma con veracidad material del documento.

- [Reglamento (UE) 910/2014, identificación electrónica y servicios de confianza](https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-81822) · Artículos 3.9–12, 3.24–25, 3.33 y 3.38; 25.1–2, 26 y 41.1–2: firma, cualificada, creador jurídico y sello, sello de tiempo, certificado de sitio web, efectos y requisitos. Contraste con reforma 2024/1183 en referencia separada · versión: Publicación DOUE de 28-08-2014 reproducida en BOE, consultada el 27-10-2026; URL de publicación, no consolidación. Se usan los preceptos señalados, sin trasladar apartados suprimidos · comprobado: 2026-10-27
- [Reglamento (UE) 2024/1183, reforma del marco europeo de identidad digital](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80608) · Artículo 1, puntos 3, 24, 28, 35, 36, 41 y 42: definiciones, artículo 26, gestión cualificada remota, sellos y tiempo; se mantiene la equivalencia del artículo 25.2 y se distinguen apartados eliminados · versión: Publicación DOUE de 30-04-2024 reproducida en BOE; entrada en vigor 20-05-2024; consulta 27-10-2026. No se declara lectura integral de consolidación EUR-Lex · comprobado: 2026-10-27

Partida: `0f87aec362e51cba4f05fcfda9e36a335ae914ba087e11ca8a926ebd76036c97` · propuesta: `dbedad4973602a685863acdd14fe0ae072c5f6e70db692b8a09fcae505e93006`

## AI-GSI-B1-T06-015

Decisión: pending_review · acción: revise.

Motivo: Conservar finalidad de sello electrónico y clave B; precisar creador jurídico y comparar instrumentos reales, sin negar el posible uso válido de firma de representante en otros contextos.

### Antes

Una persona jurídica necesita acreditar el origen y la integridad de unos datos. ¿Qué instrumento se asocia a esa finalidad?

- A. Firma manuscrita escaneada del destinatario
- B. Sello electrónico **(correcta)**
- C. Lista de revocación
- D. Registro de contraseñas

Explicación: El sello electrónico se asocia típicamente a personas jurídicas y al origen e integridad de los datos.

### Propuesta

Una persona jurídica quiere crear, como entidad, un instrumento para acreditar origen e integridad de datos, sin plantearlo como firma de una persona física representante. ¿Qué instrumento eIDAS corresponde a esa finalidad?

- A. Firma electrónica de una persona física que actúa como representante de la entidad.
- B. Sello electrónico creado por la persona jurídica para acreditar origen e integridad. **(correcta)**
- C. Sello de tiempo electrónico que acredita existencia de datos en un instante determinado.
- D. Certificado de autenticación de sitio web que vincula el sitio con su titular.

Explicación: Los artículos 3.24–25 definen como creador de un sello a la persona jurídica y vinculan el sello con origen e integridad. La firma tiene firmante persona física; el caso pide el instrumento creado por la entidad. Esto no niega que una firma cualificada de representante autorizado pueda resultar aceptable en determinados contextos: se distingue la figura y su creador, no se proclama exclusividad general.

- Error A: Es una actuación de una persona física representante. Puede tener efectos válidos en su contexto, pero no es el instrumento cuyo creador es la propia persona jurídica que describe el caso.
- Error C: El sello temporal aporta evidencia de existencia en un instante. No identifica por esa finalidad al creador jurídico ni sustituye el sello de origen e integridad pedido.
- Error D: Un certificado de sitio web autentica ese sitio y lo vincula con su titular. No es el instrumento creado por la entidad para sellar el conjunto de datos del caso.

- [Reglamento (UE) 910/2014, identificación electrónica y servicios de confianza](https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-81822) · Artículos 3.9–12, 3.24–25, 3.33 y 3.38; 25.1–2, 26 y 41.1–2: firma, cualificada, creador jurídico y sello, sello de tiempo, certificado de sitio web, efectos y requisitos. Contraste con reforma 2024/1183 en referencia separada · versión: Publicación DOUE de 28-08-2014 reproducida en BOE, consultada el 27-10-2026; URL de publicación, no consolidación. Se usan los preceptos señalados, sin trasladar apartados suprimidos · comprobado: 2026-10-27
- [Reglamento (UE) 2024/1183, reforma del marco europeo de identidad digital](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80608) · Artículo 1, puntos 3, 24, 28, 35, 36, 41 y 42: definiciones, artículo 26, gestión cualificada remota, sellos y tiempo; se mantiene la equivalencia del artículo 25.2 y se distinguen apartados eliminados · versión: Publicación DOUE de 30-04-2024 reproducida en BOE; entrada en vigor 20-05-2024; consulta 27-10-2026. No se declara lectura integral de consolidación EUR-Lex · comprobado: 2026-10-27

Partida: `a8d66defcfc9895f176d484181ba2402f6b876396f261b658e91ce8c00d59f65` · propuesta: `28019ad0ebccc3489e644b55e2a569a47227e07835fbb09863026f338bfb478e`

## AI-GSI-B1-T06-018

Decisión: pending_review · acción: revise.

Motivo: Conservar asociación XAdES/XML y clave A; comparar intercambios plausibles entre cuatro familias reales y explicar contenedor frente a documento transportado.

### Antes

¿Qué asociación entre formato y base técnica es correcta?

- A. XAdES y XML **(correcta)**
- B. CAdES y formato de imagen JPEG
- C. ASiC y lista de revocación
- D. PAdES y XML exclusivamente

Explicación: XAdES es la familia de firmas XML; las otras asociaciones confunden formatos, contenedores y servicios de estado.

### Propuesta

¿Qué asociación entre formato y base técnica es correcta?

- A. XAdES y firmas XML. **(correcta)**
- B. CAdES y firmas XML.
- C. ASiC y firma integrada en PDF.
- D. PAdES y contenedor genérico ZIP.

Explicación: XAdES se construye sobre firma XML. CAdES parte de CMS, PAdES de mecanismos de firma de PDF y ASiC es un contenedor basado en ZIP que asocia objetos y firmas o evidencias. Que estas familias puedan combinarse o transportar distintos documentos no hace intercambiables sus bases. La pregunta identifica la asociación técnica correcta, no el tipo de documento que pueda ir dentro de un contenedor.

- Error B: CAdES tiene base CMS, no firma XML como definición de su familia. La familia sobre XML es XAdES.
- Error C: ASiC es un contenedor que puede incluir un PDF entre sus objetos, pero no es la familia de firma integrada en su estructura. Esa identificación corresponde a PAdES.
- Error D: PAdES se apoya en firma PDF, no define el contenedor genérico ZIP. El contenedor asociado a esa descripción es ASiC.

- [ETSI EN 319 132-1: XAdES baseline signatures](https://www.etsi.org/deliver/etsi_en/319100_319199/31913201/01.03.01_60/en_31913201v010301p.pdf) · Sección 1, página 8: firma sobre XML y propiedades calificadoras; sección 4: sintaxis · versión: V1.3.1, 2024-07; PDF publicado y directorio oficial consultados el 27-10-2026 · comprobado: 2026-10-27
- [ETSI EN 319 122-1: CAdES baseline signatures](https://www.etsi.org/deliver/etsi_en/319100_319199/31912201/01.03.01_60/en_31912201v010301p.pdf) · Sección 1, página 8: base CMS y atributos; sección 4: sintaxis general · versión: V1.3.1, 2023-06; PDF publicado y directorio oficial consultados el 27-10-2026 · comprobado: 2026-10-27
- [ETSI EN 319 162-1: Associated Signature Containers](https://www.etsi.org/deliver/etsi_en/319100_319199/31916201/01.01.01_60/en_31916201v010101p.pdf) · Sección 1, página 7: contenedor basado en ZIP que asocia objetos y firmas separadas o evidencias de tiempo; soporta CAdES y XAdES, sin ser un algoritmo de hash · versión: V1.1.1, 2016-04; PDF publicado y directorio oficial consultados el 27-10-2026 · comprobado: 2026-10-27
- [ETSI EN 319 142-1: PAdES baseline signatures](https://www.etsi.org/deliver/etsi_en/319100_319199/31914201/01.02.01_60/en_31914201v010201p.pdf) · Sección 1, página 6: base PDF; sección 4.1; sección 6.3, tabla 1 y requisitos de material de validación y document-time-stamp, páginas 18–22: niveles B-LT/B-LTA · versión: V1.2.1, 2024-01, versión publicada consultada 27-10-2026; directorio oficial y programa de trabajo contrastados: V1.3.0 de 2026-08 en aprobación, no presentada como publicación final · comprobado: 2026-10-27

Partida: `e5ae8a65d563a0611a43c013d4ab1e0690657b4e52d2321e8a4af1f10f3deeba` · propuesta: `6c7cc0d881d86e52bf25a8be8de5de7dde44510dd2028c349c6beee1e5a54697`

## AI-GSI-B1-T06-019

Decisión: pending_review · acción: revise.

Motivo: Conservar validación futura como propósito de firma longeva y clave D; contextualizar archivo y caducidad con alternativas próximas de conservación insuficiente, evitando publicación de secretos.

### Antes

¿Cuál es el propósito de preservar evidencias en una firma longeva?

- A. Garantizar que ningún formato documental cambie jamás
- B. Mantener publicada la clave privada indefinidamente
- C. Eliminar toda necesidad de comprobar certificados
- D. Poder validar la firma en el futuro **(correcta)**

Explicación: La longevidad consiste en conservar evidencias de validación; no en eliminar las comprobaciones ni publicar secretos.

### Propuesta

Un archivo conservará durante años documentos firmados, más allá de la caducidad del certificado. ¿Para qué guarda certificados, información de estado y evidencias temporales de la firma?

- A. Para declarar inmutable cualquier formato documental y evitar toda gestión de conservación.
- B. Para aceptar cualquier firma futura aunque falten pruebas sobre el estado del certificado.
- C. Para sustituir la validación del certificado por la mera conservación de su clave pública.
- D. Para poder validar la firma en el futuro respecto del instante pertinente y las evidencias disponibles. **(correcta)**

Explicación: Preservar material de validación y pruebas temporales permite evaluar la firma después, respecto del instante y política pertinentes. PAdES contempla material de certificados y estado y evidencias temporales en sus niveles de larga duración. No garantiza validez eterna: pueden ser necesarias nuevas evidencias y protección continuada. La caducidad actual de un certificado no basta por sí sola para decidir sobre una firma histórica.

- Error A: La conservación de evidencias no promete que los formatos o algoritmos nunca cambien ni elimina gestionar su preservación. Su fin es mantener capacidad de validación.
- Error B: Guardar material útil no autoriza aceptar cualquier firma sin pruebas pertinentes. La validación futura depende precisamente de evidencias suficientes y verificables.
- Error C: La clave pública sola no conserva el estado, cadena y pruebas temporales necesarios. Permite una operación criptográfica, pero no sustituye el resto de validación.

- [ETSI EN 319 142-1: PAdES baseline signatures](https://www.etsi.org/deliver/etsi_en/319100_319199/31914201/01.02.01_60/en_31914201v010201p.pdf) · Sección 1, página 6: base PDF; sección 4.1; sección 6.3, tabla 1 y requisitos de material de validación y document-time-stamp, páginas 18–22: niveles B-LT/B-LTA · versión: V1.2.1, 2024-01, versión publicada consultada 27-10-2026; directorio oficial y programa de trabajo contrastados: V1.3.0 de 2026-08 en aprobación, no presentada como publicación final · comprobado: 2026-10-27
- [RFC 3161: Time-Stamp Protocol](https://www.rfc-editor.org/rfc/rfc3161.html) · Secciones 1 y 2.1: prueba de existencia antes de un tiempo, fuente fiable y sellado de huella; no certificación de la fecha original de creación del documento · versión: RFC de agosto de 2001, consultado 27-10-2026; ficha RFC Editor indica actualización 5816 de ESSCertIDv2. Uso conceptual, no selección de algoritmo · comprobado: 2026-10-27
- [RFC 5280: X.509, certificados y listas de revocación](https://www.rfc-editor.org/rfc/rfc5280.html) · Secciones 4.1.1.3, 4.1.2.4–7 y 5.1.2.6: vínculo sujeto/clave pública, emisor distinto, vigencia y lista; sección 6.1.3.a: firma, periodo y revocación en validación de camino · versión: RFC de mayo de 2008; texto base consultado 27-10-2026 y ficha RFC Editor contrastada, con actualizaciones posteriores. Se usan estructura y conceptos, no un perfil de despliegue completo · comprobado: 2026-10-27

Partida: `886e744d19e75ff280576f6ac243e796ac20a1d2f0f4c930dfc0dd191e4df6d9` · propuesta: `52eef979ae80228c31dea0a978cb84b4926501246ab87d1aa209083900eee6b3`

## AI-GSI-B1-T06-020

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción entre soporte, certificados, PIN y claves, opciones y clave A; aplicar a reconocimiento de tarjeta y activación sin equipararlos a validación o firma automática.

### Antes

Al estudiar DNIe, ¿qué distinción es necesaria?

- A. Soporte, certificados, PIN y claves cumplen funciones diferentes **(correcta)**
- B. El soporte físico sustituye toda validación del certificado
- C. Toda identificación con DNIe equivale a firmar cualquier documento abierto
- D. El PIN es la clave pública publicada en el certificado

Explicación: Los apuntes distinguen soporte, credenciales y operaciones: la autenticación y la firma no son intercambiables.

### Propuesta

Al usar la tarjeta física del DNIe, un equipo reconoce el chip y el titular introduce su PIN. ¿Qué distinción debe mantener la aplicación al autenticar o firmar un documento?

- A. Soporte, certificados, PIN y claves cumplen funciones diferentes **(correcta)**
- B. El soporte físico sustituye toda validación del certificado
- C. Toda identificación con DNIe equivale a firmar cualquier documento abierto
- D. El PIN es la clave pública publicada en el certificado

Explicación: Tarjeta y chip son el soporte; los certificados vinculan identidad y claves públicas, las claves privadas realizan operaciones y el PIN protege y activa su uso. No son elementos intercambiables. Reconocer el chip o aceptar el PIN no valida automáticamente el certificado ni firma cualquier documento abierto. La aplicación debe distinguir la operación de autenticación del acto de firma; el caso se refiere a la tarjeta, no a toda modalidad de DNI digital móvil.

- Error B: El soporte físico no garantiza por sí mismo el estado y confianza del certificado en el momento pertinente. Deben realizarse las comprobaciones correspondientes al uso.
- Error C: Una autenticación acredita el acceso según su contexto, no firma automáticamente cada documento abierto. La firma exige la operación y vinculación al contenido que procedan.
- Error D: El PIN es un secreto de acceso o activación, no la clave pública incluida en un certificado. Publicar la clave pública no significa divulgar ese secreto.

- [Policía Nacional: Seguridad del DNIe](https://www.dnie.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1010) · Preguntas 9 y 10: claves privadas generadas y usadas dentro de la tarjeta, PIN personal para proteger y activar su uso; no se usa el apartado legal antiguo de la página · versión: Página técnica consultada el 27-10-2026, pie v.20260505; no se toma como texto legal vigente su referencia a Ley 59/2003 · comprobado: 2026-10-27
- [Policía Nacional: Ejemplo de uso del DNIe](https://www.dnie.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1079) · Apartados de autenticación y «Firma de Trámites Administrativos con DNI», pasos 4–10: verificar formulario, acto de firma, PIN y comprobación de firma y certificado como operaciones distintas · versión: Página técnica consultada el 27-10-2026; se usa la distinción funcional, no se prescribe un flujo actual concreto de una sede · comprobado: 2026-10-27
- [Real Decreto 255/2025, por el que se regula el Documento Nacional de Identidad](https://www.boe.es/buscar/act.php?id=BOE-A-2025-6601) · Artículos 11.2–4 y 12: certificados y dispositivo, contenido físico y chip; artículo 13: versión digital diferenciada, sin equipararla al uso de tarjeta del caso · versión: Consolidación informativa BOE, texto inicial publicado 02-04-2025, consultado el 27-10-2026 · comprobado: 2026-10-27
- [Ley 39/2015, del Procedimiento Administrativo Común](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) · Artículos 9, 10.4–5 y 11: identidad y firma, admisión condicionada de identificación como firma y actos que la requieren · versión: Consolidación informativa BOE consultada el 27-10-2026; última actualización publicada el 06-11-2024 · comprobado: 2026-10-27
- [RFC 5280: X.509, certificados y listas de revocación](https://www.rfc-editor.org/rfc/rfc5280.html) · Secciones 4.1.1.3, 4.1.2.4–7 y 5.1.2.6: vínculo sujeto/clave pública, emisor distinto, vigencia y lista; sección 6.1.3.a: firma, periodo y revocación en validación de camino · versión: RFC de mayo de 2008; texto base consultado 27-10-2026 y ficha RFC Editor contrastada, con actualizaciones posteriores. Se usan estructura y conceptos, no un perfil de despliegue completo · comprobado: 2026-10-27

Partida: `345a231bb0c21372ac24cc7170ef21f4bd8a693cb1907fc6f9febb3b422ff1c1` · propuesta: `ac0495db31ed3db3e38ebeab5af485f700bb552ba729f75172fa2522587e94b7`

## AI-GSI-B1-T07-001

Decisión: pending_review · acción: revise.

Motivo: Conservar seudonimización y clave A; explicitar necesidad de información adicional, separación y protección exigidas por artículo 4.5 y campos legibles para distinguirla de anonimización, agregación y cifrado completo.

### Antes

Un fichero sustituye nombres por códigos, pero conserva una tabla para reidentificar a las personas. ¿Qué técnica describe?

- A. Seudonimización **(correcta)**
- B. Supresión irreversible
- C. Anonimización efectiva
- D. Agregación necesariamente anónima

Explicación: Si se puede reidentificar mediante información adicional, los datos siguen siendo personales.

### Propuesta

Un fichero sustituye nombres por códigos aleatorios y mantiene otros campos legibles. Los registros solo pueden atribuirse a personas con una tabla guardada aparte y protegida con medidas técnicas y organizativas. ¿Qué técnica describe?

- A. Seudonimización mediante códigos. **(correcta)**
- B. Agregación de datos en estadísticas.
- C. Anonimización efectiva de registros.
- D. Cifrado íntegro del fichero original.

Explicación: El artículo 4.5 RGPD describe seudonimización cuando la atribución necesita información adicional conservada por separado y protegida. La tabla permite esa atribución: no se ha producido anonimización efectiva y los datos siguen siendo personales. Mantener otros campos legibles tampoco equivale a cifrar el fichero completo. La medida reduce riesgos, pero no excluye por sí sola el RGPD.

- Error B: El caso conserva registros individuales con códigos, no resume valores de un grupo en estadísticas. Además, agregar no garantiza automáticamente anonimato en cualquier contexto.
- Error C: La información adicional conservada permite atribuir los registros. Una sustitución de nombres no es anonimización efectiva si subsiste esa posibilidad de identificación.
- Error D: Solo se sustituyen identificadores y el resto permanece legible. No se describe el cifrado íntegro del fichero, sino la separación de información de atribución mediante códigos.

- [Reglamento (UE) 2016/679, protección de datos personales (RGPD)](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Considerando 26; artículos 4.1, 4.5 y 32.1.a: identificabilidad, información adicional separada y protegida y seudonimización como medida, sin exclusión automática del Reglamento · versión: Publicación DOUE de 04-05-2016 reproducida en BOE, consultada el 27-10-2026; URL de publicación, no consolidación · comprobado: 2026-10-27

Partida: `0ef334a1d66faafc0f424e051a20c02bdc1221e0ee57dd9e2786061bd1fdb26b` · propuesta: `e0eac379cb217910f37bfd897a5f6061cb53b9ac7cd9bfa6cceb4c439b0a9696`

## AI-GSI-B1-T07-005

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso y cuatro principios plausibles; explicar el rasgo demostrable de responsabilidad proactiva y el contenido de cada principio alternativo.

### Antes

Una entidad aplica medidas de protección y conserva pruebas de su cumplimiento. ¿Qué principio refleja?

- A. Exactitud de los datos
- B. Limitación del plazo de conservación
- C. Responsabilidad proactiva **(correcta)**
- D. Limitación de la finalidad

Explicación: La responsabilidad proactiva exige cumplir y poder demostrarlo; no basta con una declaración genérica.

### Propuesta

Una entidad aplica medidas de protección y conserva pruebas de su cumplimiento. ¿Qué principio refleja?

- A. Exactitud de los datos
- B. Limitación del plazo de conservación
- C. Responsabilidad proactiva **(correcta)**
- D. Limitación de la finalidad

Explicación: El artículo 5.2 obliga al responsable a cumplir los principios y ser capaz de demostrarlo: responsabilidad proactiva. Aplicar medidas y conservar evidencia de su cumplimiento encaja en esa doble dimensión. Exactitud, conservación limitada y finalidad son principios que también deben cumplirse, pero el rasgo específico del enunciado es poder acreditar el cumplimiento, no uno de esos objetos concretos.

- Error A: Exactitud se refiere a datos exactos y actualizados y a rectificar o suprimir los inexactos. El supuesto destaca evidencia de cumplimiento general, no la calidad de un dato concreto.
- Error B: La limitación de conservación exige no identificar durante más tiempo del necesario, con las salvedades legales. No define la capacidad general de demostrar cumplimiento de todos los principios.
- Error D: La finalidad exige fines determinados, explícitos y legítimos y regula usos ulteriores. Es distinta de la obligación transversal de cumplir y poder demostrarlo que se describe.

- [Reglamento (UE) 2016/679, protección de datos personales (RGPD)](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículo 5.1.b, d y e y 5.2: finalidad, exactitud, conservación y responsabilidad proactiva · versión: Publicación DOUE de 04-05-2016 reproducida en BOE, consultada el 27-10-2026; URL de publicación, no consolidación · comprobado: 2026-10-27

Partida: `064f04dfd82e88816ac7e8c6f09df7c4edad53dc622bea223b3b53d4bfac605b` · propuesta: `0c66988be4d25634584fb33caa5c626cbff3935cc60440d151a47ccd5cb8d9db`

## AI-GSI-B1-T07-009

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta y opciones; fundamentar salud y matizar contactos e identificadores sin convertir datos ordinarios en datos libres de protección o ignorar inferencias de contexto.

### Antes

¿Cuál es un ejemplo de categoría especial de datos?

- A. Número de teléfono de atención
- B. Datos de salud **(correcta)**
- C. Dirección de contacto ordinaria
- D. Identificador de una solicitud ordinaria

Explicación: Los datos de salud están entre las categorías especiales sujetas a un régimen reforzado.

### Propuesta

¿Cuál es un ejemplo de categoría especial de datos?

- A. Número de teléfono de atención
- B. Datos de salud **(correcta)**
- C. Dirección de contacto ordinaria
- D. Identificador de una solicitud ordinaria

Explicación: El artículo 9.1 incluye datos relativos a la salud entre las categorías especiales; el 4.15 comprende salud física o mental y servicios que revelen información sobre ese estado. Los contactos e identificadores ordinarios descritos pueden ser datos personales si permiten identificar, pero no son por ese solo contenido una categoría especial. El contexto puede cambiar lo que revelan; no se deduce que queden fuera de protección.

- Error A: Un teléfono de atención, por sí solo y sin información adicional de salud u otra categoría especial, no es el ejemplo descrito en el artículo 9. No se afirma que todo teléfono sea siempre ajeno al RGPD.
- Error C: Una dirección de contacto ordinaria puede identificar a una persona, pero el enunciado no aporta que revele una categoría especial. Datos personales y categorías especiales no son conjuntos idénticos.
- Error D: El identificador ordinario puede ser dato personal si permite atribuir la solicitud, pero no revela necesariamente por ese solo contenido una categoría del artículo 9.

- [Reglamento (UE) 2016/679, protección de datos personales (RGPD)](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos 4.1 y 4.15, 9.1–2: datos personales, salud y categorías especiales; distinguir contenido ordinario del descrito como salud · versión: Publicación DOUE de 04-05-2016 reproducida en BOE, consultada el 27-10-2026; URL de publicación, no consolidación · comprobado: 2026-10-27

Partida: `d81cc18c999521613bfe9c14b1697cc4e70bbe28afb1fd702a8cafe9056dee43` · propuesta: `f9c273737814439d88e15fada3f50cd5260ef06e1a8c3c6872636b31ef657f7f`

## AI-GSI-B1-T07-010

Decisión: pending_review · acción: revise.

Motivo: Conservar prohibición con excepciones y clave A; comparar errores cercanos sobre base general, consentimiento y publicación, incorporando precisión del considerando 51 sin autorizar tratamientos concretos.

### Antes

¿Cómo debe valorarse el tratamiento de categorías especiales?

- A. Partiendo de una prohibición general con excepciones tasadas **(correcta)**
- B. Aplicando únicamente las reglas de datos abiertos
- C. Suponiendo que cualquier consentimiento permite cualquier tratamiento
- D. Excluyéndolo siempre de toda protección por ser especializado

Explicación: Las categorías especiales requieren examinar las excepciones aplicables, no una autorización genérica.

### Propuesta

¿Cómo debe valorarse el tratamiento de categorías especiales?

- A. Partir de la prohibición general y comprobar excepción del artículo 9 y base de licitud aplicable. **(correcta)**
- B. Aplicar una base del artículo 6 y dar por dispensada cualquier condición adicional del artículo 9.
- C. Considerar suficiente un consentimiento tácito para cualquier finalidad que use datos especiales.
- D. Tratar cualquier dato publicado en Internet como libre de las restricciones de categorías especiales.

Explicación: El artículo 9 parte de una prohibición y enumera circunstancias que permiten levantarla, sin eliminar los principios generales y la licitud del artículo 6, como aclara el considerando 51. El consentimiento, cuando sea la excepción utilizada, debe cumplir sus requisitos y ser explícito en el supuesto del 9.2.a. La publicación en Internet por terceros no equivale a que el interesado haya hecho los datos manifiestamente públicos.

- Error B: La licitud general no dispensa automáticamente la prohibición y condiciones del artículo 9. Deben examinarse ambas capas y las restantes obligaciones aplicables.
- Error C: El artículo 9.2.a exige consentimiento explícito para los fines especificados y admite límites legales. Uno tácito e indiferente a cualquier finalidad no reúne ese requisito.
- Error D: La excepción del 9.2.e se refiere a datos manifiestamente públicos por el interesado. No abarca cualquier publicación por cualquier persona ni elimina todas las condiciones del tratamiento.

- [Reglamento (UE) 2016/679, protección de datos personales (RGPD)](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Considerando 51; artículos 5, 6, 9.1 y 9.2.a y e: prohibición, excepciones, consentimiento explícito y datos manifiestamente públicos por el interesado · versión: Publicación DOUE de 04-05-2016 reproducida en BOE, consultada el 27-10-2026; URL de publicación, no consolidación · comprobado: 2026-10-27

Partida: `92096b133c31dc6cd04c91d3161250a4563773d41b52469a0bcdef04b42fad63` · propuesta: `ab0814e8ed97715e72f937c698460859c7f70e6f9aaefb1f50bf9018d236e779`
