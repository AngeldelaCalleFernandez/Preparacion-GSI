# GSI-EDITORIAL-050 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `d1f1868e0ddbe7223bd05b7fb0386a28eeb004b6c98375675b67600c2e75a299`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P18-125

Decisión: pending_review · acción: revise.

Motivo: Conservar cobertura de relevantes y clave A; microcaso con universo relevante conocido para distinguir recall, precision y fracción irrelevante.

### Antes

¿Qué es recall?

- A. La proporción de documentos relevantes que el sistema consigue recuperar. **(correcta)**
- B. La proporción de resultados devueltos que son relevantes.
- C. La latencia del buscador.
- D. El tamaño del índice.

Explicación: Recall mide cobertura de los relevantes disponibles.

### Propuesta

Un buscador devuelve 20 documentos, todos juzgados; 12 son relevantes. Se sabe que la colección contiene 40 relevantes para esa consulta. ¿Cuál es el recall?

- A. 12/40 = 0,30 **(correcta)**
- B. 12/20 = 0,60
- C. 8/20 = 0,40
- D. 20/40 = 0,50

Explicación: Recall mide la fracción de relevantes existentes que se recuperan: 12/40 = 0,30. Los cuarenta relevantes constituyen el denominador, no los veinte resultados devueltos. Precision sería 12/20 = 0,60; los otros ocho devueltos son irrelevantes y su fracción es 8/20 = 0,40. La cifra requiere una referencia de relevancia para esa consulta: observar solo lo devuelto no permite conocer por sí mismo cuántos relevantes faltan. Se evalúa este conjunto, sin atribuir la misma calidad a cualquier consulta.

- Error B: Divide relevantes recuperados entre todos los devueltos y calcula precision, no cobertura de los relevantes existentes.
- Error C: Expresa la fracción irrelevante de los resultados devueltos; no mide qué parte de los relevantes de la colección se ha recuperado.
- Error D: Relaciona todos los devueltos con el total relevante, mezclando conjuntos distintos; no define recall.

- [Elastic: Ranking evaluation](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval) · Introducción y requisitos de evaluación; Available evaluation metrics, Precision at K y Recall at K; juicios por consulta y muestra representativa · versión: Documentación REST viva consultada el 28-10-2026, sin edición cerrada visible. Se evalúan conjuntos con relevancia conocida; no se presupone tratamiento de resultados sin juzgar · comprobado: 2026-10-28

Partida: `62885db4b1a2e709a50d86fca391452283ce2d648b8487da4cfef2ca8e382e8f` · propuesta: `5db06b134588933ba2e5f9b2efbea314d4b49ed5b4bf4d223f8eaa0a1b45415f`

## MAN-GSI-P18-126

Decisión: pending_review · acción: revise.

Motivo: Conservar definición F1 y clave B; distractores de agregaciones y métrica cercanas, sin protocolo, cabecera o XSD ajenos.

### Antes

¿Qué es F1?

- A. Un protocolo de sindicación.
- B. La media armónica entre precision y recall. **(correcta)**
- C. Una cabecera HTTP.
- D. Un tipo de XSD.

Explicación: F1 equilibra ambas métricas en un único valor.

### Propuesta

¿Qué es F1?

- A. La media aritmética de precision y recall.
- B. La media armónica de precision y recall. **(correcta)**
- C. La media geométrica de precision y recall.
- D. La proporción de aciertos entre todos los casos.

Explicación: F1 es la media armónica de precision y recall, con igual peso relativo: 2PR/(P+R) cuando ese denominador es positivo. No es su media aritmética o geométrica ni accuracy. Si los valores difieren, la media armónica refleja el desequilibrio; no garantiza que ambas métricas sean altas. En casos degenerados deben explicitarse la convención y el ámbito de cálculo. Un promedio de F1 por clases tampoco tiene que coincidir con calcular un F1 global desde promedios de precision y recall.

- Error A: La media aritmética suma y divide entre dos; no aplica la combinación armónica de F1 y puede ocultar más un valor muy bajo.
- Error C: La media geométrica usa la raíz del producto para dos valores; no es la fórmula armónica de F1.
- Error D: Esa proporción describe accuracy en clasificación, no la combinación de precision y recall; además depende de cómo se defina el conjunto de casos.

- [scikit-learn: f1\_score](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.f1_score.html) · Definición de media armónica y fórmula 2TP/(2TP+FP+FN); zero\_division y Notes sobre clase ausente; average · versión: La documentación consultada indica versión 1.9.1. Se usa la definición, sin instalar la biblioteca; no se extrapola un promedio macro a un único F1 global · comprobado: 2026-10-28
- [Elastic: Ranking evaluation](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval) · Introducción y requisitos de evaluación; Available evaluation metrics, Precision at K y Recall at K; juicios por consulta y muestra representativa · versión: Documentación REST viva consultada el 28-10-2026, sin edición cerrada visible. Se evalúan conjuntos con relevancia conocida; no se presupone tratamiento de resultados sin juzgar · comprobado: 2026-10-28

Partida: `ff005672df65895e2e4644c13866d62245096256d257ba30fa2ac34622e64e43` · propuesta: `b5c33e5f40efde0fbd1c9431040ba995294ab596915459f17c6fdc3191fb7cf3`

## MAN-GSI-P18-127

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave D; distinguir segmentación de normalización y filtrado, sin equiparar token con palabra.

### Antes

¿Qué es tokenización?

- A. Reducir palabras a una raíz aproximada aplicando reglas mecánicas sobre prefijos o sufijos.
- B. Obtener formas léxicas normalizadas mediante análisis lingüístico y conocimiento de la lengua.
- C. Excluir términos muy frecuentes con escaso valor discriminante antes de construir el índice.
- D. Dividir texto en unidades útiles para análisis e indexación. **(correcta)**

Explicación: Los tokens son unidades sobre las que se construyen análisis y búsqueda.

### Propuesta

¿Qué es tokenización?

- A. Reducir palabras a una raíz aproximada aplicando reglas mecánicas sobre prefijos o sufijos.
- B. Obtener formas léxicas normalizadas mediante análisis lingüístico y conocimiento de la lengua.
- C. Excluir términos muy frecuentes con escaso valor discriminante antes de construir el índice.
- D. Dividir texto en unidades útiles para análisis e indexación. **(correcta)**

Explicación: Tokenizar transforma una secuencia de caracteres en unidades para análisis e indexación. Según reglas y lengua, pueden ser palabras, fragmentos, n-gramas u otras unidades; no siempre basta separar por espacios o eliminar signos. Un tokenizador puede registrar posiciones y desplazamientos útiles para búsqueda por frases o resaltado. Stemming, lematización y filtrado de términos frecuentes son transformaciones diferentes que pueden participar en el mismo análisis, sin ser sinónimos de segmentación.

- Error A: Reducir variantes a una raíz aproximada es stemming. Puede aplicarse a los tokens ya obtenidos, pero no define dividir el texto en unidades.
- Error B: Obtener lemas mediante conocimiento lingüístico es lematización; no es la operación de segmentar la secuencia de caracteres.
- Error C: Excluir términos frecuentes es filtrado de stop words. No equivale a identificar las unidades que después se conservan o filtran.

- [Elastic: Tokenizer reference](https://www.elastic.co/docs/reference/text-analysis/tokenizer-reference) · Definición de stream de caracteres a tokens; Word Oriented, Partial Word y Structured Text Tokenizers; posiciones y offsets · versión: Documentación viva consultada el 28-10-2026. Token no equivale necesariamente a palabra; no se instala Elasticsearch ni se impone un tokenizador a todo idioma · comprobado: 2026-10-28
- [Elastic: Stemmer token filter](https://www.elastic.co/docs/reference/text-analysis/analysis-stemmer-tokenfilter) · Definición de stemming algorítmico; ejemplo de Porter: foxes/jumping/quickly; variantes por lengua · versión: Documentación viva consultada el 28-10-2026; ejemplo funcional, sin asumir que todo stemmer carezca de diccionario o devuelva palabras válidas · comprobado: 2026-10-28
- [NLTK: nltk.stem.wordnet module](https://www.nltk.org/api/nltk.stem.wordnet.html) · WordNetLemmatizer; lemmatize y morphy; búsqueda de lemas, conservación de entrada no encontrada y parámetro pos · versión: Documentación NLTK 3.9.2, pie 01-10-2025; consultada el 28-10-2026. Ejemplo inglés y dependencia de categoría gramatical, no garantía universal de análisis contextual · comprobado: 2026-10-28

Partida: `2053fee212c2792714d61183b931cadd61d848dd784af5b7b40365be6d0dcdab` · propuesta: `fd135d479d4d85ad888d96f78362d405f381c2d44042bb7dc13d1101c89a2275`

## MAN-GSI-P18-128

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra distinción y clave C; matizar diccionarios, categoría gramatical y ausencia de superioridad universal.

### Antes

¿Qué diferencia hay entre stemming y lematización?

- A. Stemming consulta diccionarios para obtener el lema lingüístico, mientras lematización recorta sufijos mediante reglas mecánicas.
- B. Son dos nombres del mismo algoritmo y producen necesariamente la misma forma normalizada para cada término.
- C. Ambas reducen variantes; lematización busca formas léxicas más lingüísticas, mientras stemming suele aplicar reglas más mecánicas. **(correcta)**
- D. Ambos métodos traducen términos a otro idioma antes de incorporarlos al índice de recuperación.

Explicación: Son técnicas de normalización lingüística con distinta sofisticación.

### Propuesta

¿Qué diferencia hay entre stemming y lematización?

- A. Stemming consulta diccionarios para obtener el lema lingüístico, mientras lematización recorta sufijos mediante reglas mecánicas.
- B. Son dos nombres del mismo algoritmo y producen necesariamente la misma forma normalizada para cada término.
- C. Ambas reducen variantes; lematización busca formas léxicas más lingüísticas, mientras stemming suele aplicar reglas más mecánicas. **(correcta)**
- D. Ambos métodos traducen términos a otro idioma antes de incorporarlos al índice de recuperación.

Explicación: Ambas técnicas reducen variantes, pero la lematización busca lemas léxicos con información lingüística, mientras muchos stemmers aplican transformaciones más mecánicas y pueden producir formas que no sean palabras. Es una distinción habitual, no una frontera absoluta de implementación: KStem combina algoritmo y diccionario, y WordNetLemmatizer depende de léxico y categoría gramatical. Ninguna técnica garantiza por sí sola mejor recuperación, traducción o comprensión completa del contexto.

- Error A: Invierte el foco habitual: la reducción por reglas mecánicas caracteriza muchos stemmers, mientras la lematización busca formas léxicas. No significa que ningún stemmer use diccionario.
- Error B: No son el mismo algoritmo ni tienen que producir idéntica salida. Dependen de lengua, reglas, recursos y, en lematización, información gramatical.
- Error D: Normalizar variantes no implica traducir a otra lengua. La traducción puede ser otra fase, pero no define stemming o lematización.

- [Elastic: Stemmer token filter](https://www.elastic.co/docs/reference/text-analysis/analysis-stemmer-tokenfilter) · Definición de stemming algorítmico; ejemplo de Porter: foxes/jumping/quickly; variantes por lengua · versión: Documentación viva consultada el 28-10-2026; ejemplo funcional, sin asumir que todo stemmer carezca de diccionario o devuelva palabras válidas · comprobado: 2026-10-28
- [NLTK: nltk.stem.wordnet module](https://www.nltk.org/api/nltk.stem.wordnet.html) · WordNetLemmatizer; lemmatize y morphy; búsqueda de lemas, conservación de entrada no encontrada y parámetro pos · versión: Documentación NLTK 3.9.2, pie 01-10-2025; consultada el 28-10-2026. Ejemplo inglés y dependencia de categoría gramatical, no garantía universal de análisis contextual · comprobado: 2026-10-28
- [Elastic: KStem token filter](https://www.elastic.co/docs/reference/text-analysis/analysis-kstem-tokenfilter) · Definición: stemming algorítmico combinado con diccionario incorporado y menor agresividad que Porter · versión: Documentación viva consultada el 28-10-2026. Contraejemplo explícito a la afirmación de que ningún stemmer usa diccionarios · comprobado: 2026-10-28

Partida: `0e689c160f672c507de04a5d35581b3d464baeae05079b44ba504884a7c81120` · propuesta: `efed8db44e963d754edf82564c1e83622c22f32254541254445b1624910ff965`

## MAN-GSI-P18-129

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave C; explicar frecuencia, saturación y longitud sin reducir BM25 a TF-IDF idéntico o a embeddings.

### Antes

¿Qué es BM25 de forma conceptual?

- A. Función de ranking basada en representaciones densas y similitud semántica entre vectores.
- B. Método no supervisado que agrupa documentos por semejanza sin utilizar una consulta.
- C. Una función/familia de ranking textual basada en coincidencia de términos, frecuencias y longitud, entre otros factores. **(correcta)**
- D. Estrategia de rastreo que decide qué páginas debe descargar primero un buscador.

Explicación: BM25 es un ranking léxico clásico de recuperación de información.

### Propuesta

¿Qué es BM25 de forma conceptual?

- A. Función de ranking basada en representaciones densas y similitud semántica entre vectores.
- B. Método no supervisado que agrupa documentos por semejanza sin utilizar una consulta.
- C. Una función/familia de ranking textual basada en coincidencia de términos, frecuencias y longitud, entre otros factores. **(correcta)**
- D. Estrategia de rastreo que decide qué páginas debe descargar primero un buscador.

Explicación: BM25 es una familia de funciones de ranking léxico que puntúa coincidencias de términos de consulta con documentos. En su forma clásica combina peso relacionado con frecuencia documental, frecuencia del término con saturación y normalización de longitud, entre otros supuestos y variantes. No es un modelo de vectores densos, agrupamiento sin consulta o estrategia de rastreo. Sus parámetros y el análisis de términos influyen en resultados; una puntuación no demuestra relevancia semántica perfecta.

- Error A: La similitud entre representaciones densas corresponde al enfoque vectorial descrito. BM25 clásico se basa en evidencia léxica de términos y estadísticas del corpus.
- Error B: Agrupar sin consulta es clustering. BM25 puntúa documentos respecto de los términos de una consulta.
- Error D: Priorizar descargas es una estrategia de crawling; no es la función de relevancia que BM25 calcula sobre documentos indexados.

- [Shane Connelly/Elastic: Practical BM25, Part2](https://www.elastic.co/blog/practical-bm25-part-2-the-bm25-algorithm-and-its-variables) · The BM25 model: términos de consulta, IDF, frecuencia de término, saturación k1 y normalización de longitud b · versión: Artículo primario de 19-04-2018. Se lee explicación textual de componentes, sin atribuir inspección de imágenes con fórmulas ni imponer valores por defecto de un producto a todo BM25 · comprobado: 2026-10-28

Partida: `7d6a3d07008dc2bd96ffa0d46d33ba224e77f18bda3f998dd8b6b565f5b3cbb5` · propuesta: `dbb9af5bfda5a2254f34f8fd1db008fbf9f8aed1c4ac40db4a2e84bf2af58cef`

## MAN-GSI-P18-130

Decisión: pending_review · acción: revise.

Motivo: Conservar función REP y clave D; alternativas próximas a autorización, indexación y canonicalización.

### Antes

¿Qué función tiene robots.txt?

- A. Proteger datos sensibles como control de acceso.
- B. Impedir físicamente toda petición HTTP.
- C. Autenticar usuarios.
- D. Comunicar reglas de crawling a robots que implementan el Robots Exclusion Protocol. **(correcta)**

Explicación: RFC 9309 formaliza el protocolo; robots.txt no es una barrera de seguridad.

### Propuesta

Según RFC9309, ¿para qué sirve robots.txt?

- A. Definir permisos de acceso que el servidor exige a cada usuario.
- B. Ordenar que se excluyan del índice todas las rutas que figuren en el archivo.
- C. Declarar qué URL duplicada debe usarse como versión canónica.
- D. Comunicar reglas de rastreo a robots que implementan el protocolo. **(correcta)**

Explicación: Robots.txt publica reglas de acceso automatizado para crawlers que implementan el Robots Exclusion Protocol. RFC9309 especifica su sintaxis, interpretación y tratamiento de errores. No autentica usuarios ni autoriza peticiones en el servidor; un cliente puede ignorarlo. Tampoco equivale a noindex o a declarar una canónica: limitar rastreo no garantiza retirar del índice una URL que el buscador conozca por otras fuentes.

- Error A: Los permisos exigidos por el servidor pertenecen al control real de acceso. Robots.txt comunica reglas al cliente y no verifica la identidad del usuario.
- Error B: La exclusión del índice es distinta del rastreo; Google puede conocer e indexar una URL bloqueada sin su contenido.
- Error C: La canónica señala preferencia entre duplicados; no es la función de las reglas de rastreo de robots.txt.

- [IETF: RFC9309, Robots Exclusion Protocol](https://www.rfc-editor.org/rfc/rfc9309.html) · 1 Introduction; 2.1 sintaxis y 2.2 reglas; 3 Security Considerations: no sustituye seguridad y las rutas quedan públicamente expuestas · versión: RFC9309, Standards Track, septiembre de 2022. Reglas para robots que implementan el protocolo, no autenticación o garantía de exclusión del índice · comprobado: 2026-10-28
- [Google Search Central: How to specify a canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) · Introducción y fuerza de señales; Reasons to specify a canonical URL: consolidar señales y evitar rastreo duplicado; Best practices; link y cabecera HTTP canonical · versión: Documentación viva consultada el 28-10-2026; canonical es preferencia/señal, distinta de redirección, noindex o control de acceso. No se fuerza una selección universal por longitud de URL · comprobado: 2026-10-28

Partida: `b6f4164c357d996a1cdbf16bd387e019180f04e0963a5d8602401566d87a1655` · propuesta: `35bb4bdfc77055fdebb5373f7b3b32005f569169d7d03f79fe68fe84d8d1e279`

## MAN-GSI-P18-131

Decisión: pending_review · acción: revise.

Motivo: Conservar ausencia de autenticación/autorización y clave A; distractores sobre interpretaciones del protocolo, sin borrado físico ajeno.

### Antes

¿Por qué robots.txt no debe usarse para proteger información confidencial?

- A. Porque no es autenticación/autorización y un cliente puede ignorarlo o acceder directamente a la URL. **(correcta)**
- B. Porque aplica autorización en el servidor y rechaza con seguridad cualquier petición procedente de un crawler no permitido.
- C. Porque oculta la existencia de la ruta: las entradas declaradas no pueden ser leídas ni descubiertas por usuarios o buscadores.
- D. Porque elimina físicamente del servidor el recurso indicado y evita que un cliente acceda directamente mediante su URL.

Explicación: Los recursos sensibles deben protegerse con controles reales de acceso.

### Propuesta

¿Por qué robots.txt no debe usarse para proteger información confidencial?

- A. No comprueba identidad o permisos para servir el recurso al cliente. **(correcta)**
- B. Sus reglas se evalúan como permisos de usuario al servir el recurso.
- C. Hace privadas las rutas que el propietario enumera en el archivo.
- D. Los recursos quedan protegidos si el robot figura como no permitido.

Explicación: El protocolo depende de que el robot implemente y respete las reglas; no impide una solicitud directa ni comprueba credenciales o permisos. RFC9309 advierte que listar rutas las hace públicas y recomienda medidas de seguridad de la capa de aplicación para controlar su acceso. La confidencialidad exige controles apropiados en el servicio, no confiar en que una indicación al crawler o una URL poco conocida detengan a cualquier cliente.

- Error B: El servidor no convierte automáticamente esas reglas en autorización por usuario; esta debe implementarse mediante controles de acceso.
- Error C: El archivo declara las rutas públicamente y puede facilitar su descubrimiento, en lugar de ocultarlas.
- Error D: Una regla Disallow no bloquea técnicamente a un cliente que la ignore; conocer su agente o nombre no constituye una barrera de seguridad.

- [IETF: RFC9309, Robots Exclusion Protocol](https://www.rfc-editor.org/rfc/rfc9309.html) · 1 Introduction; 2.1 sintaxis y 2.2 reglas; 3 Security Considerations: no sustituye seguridad y las rutas quedan públicamente expuestas · versión: RFC9309, Standards Track, septiembre de 2022. Reglas para robots que implementan el protocolo, no autenticación o garantía de exclusión del índice · comprobado: 2026-10-28

Partida: `0ed47aabda236fd30c0c8430d4d93f2eecffa705cb02e436b30037b201504785` · propuesta: `0938ade25f0d523f86c7f068d05cc3ef3a1bfc55800a1491e74d7c33376416cb`

## MAN-GSI-P18-132

Decisión: pending_review · acción: revise.

Motivo: Conservar alternativas y clave B; precisar protocolo Sitemaps para no confundir su archivo con un mapa HTML de navegación.

### Antes

¿Qué es un sitemap?

- A. Un archivo robots.txt que expresa preferencias de rastreo mediante reglas para agentes, pero no enumera necesariamente todo el sitio.
- B. Un archivo que informa sobre URLs y puede facilitar su descubrimiento por buscadores. **(correcta)**
- C. La navegación visible que enlaza secciones para usuarios y buscadores, sin ser el archivo normalizado de URLs del sitio.
- D. Una declaración canonical que indica la versión preferida de una página entre alternativas, no un inventario de URLs.

Explicación: Los sitemaps ayudan al crawling; no garantizan indexación o ranking.

### Propuesta

Según el protocolo Sitemaps, ¿qué es un sitemap?

- A. Un archivo robots.txt que expresa preferencias de rastreo mediante reglas para agentes, pero no enumera necesariamente todo el sitio.
- B. Un archivo que informa sobre URLs y puede facilitar su descubrimiento por buscadores. **(correcta)**
- C. La navegación visible que enlaza secciones para usuarios y buscadores, sin ser el archivo normalizado de URLs del sitio.
- D. Una declaración canonical que indica la versión preferida de una página entre alternativas, no un inventario de URLs.

Explicación: En el protocolo Sitemaps, un archivo informa al buscador de URLs y puede añadir metadatos, facilitando descubrir recursos del sitio. El formato XML define urlset, entradas url y loc, con otros campos opcionales; existen también otros formatos admitidos. No sustituye navegación, canonicalización o reglas de robots.txt. Facilitar descubrimiento no obliga a rastrear, indexar o posicionar cada recurso: Google lo advierte expresamente.

- Error A: Robots.txt comunica reglas a agentes; no es el archivo del protocolo Sitemaps que enumera recursos para descubrimiento.
- Error C: La navegación visible puede ayudar a usuarios y robots, pero la alternativa no describe el archivo del protocolo Sitemaps delimitado por la pregunta.
- Error D: Una declaración canonical expresa preferencia entre versiones; no es por sí misma un inventario de URLs para descubrimiento.

- [Sitemaps.org: Sitemaps XML format](https://www.sitemaps.org/protocol.html) · Introducción; XML tag definitions: urlset, url y loc; Other Sitemap formats; Informing search engine crawlers · versión: Protocolo con namespace/schema 0.9 en el documento consultado. Sin fecha editorial inventada; se distingue archivo del protocolo de navegación HTML visible · comprobado: 2026-10-28
- [Google Search Central: Learn about sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) · Definición de sitemap; Do I need a sitemap?: ayuda al descubrimiento sin garantizar rastreo o indexación · versión: Guía web viva consultada el 28-10-2026; comportamiento de Google, sin prometer indexación por validez del XML o envío del archivo · comprobado: 2026-10-28

Partida: `5397962bd73ee9fdb2e9753354d33c6295fe9de01f040bae37f194c99fc2c001` · propuesta: `bf5ae1e6ebfaf523818d7028925b11e291593b85ca425ec203ccd065ceb971f9`

## MAN-GSI-P18-133

Decisión: pending_review · acción: revise.

Motivo: Conservar ausencia de garantía y clave B; microcaso de envío válido con tres confusiones próximas de rastreo, calidad y ranking.

### Antes

¿Un sitemap garantiza que una URL se indexe?

- A. Sí, siempre.
- B. No; facilita descubrimiento, pero el buscador decide rastreo/indexación según sus criterios. **(correcta)**
- C. Solo si la URL está bloqueada por autenticación.
- D. Sí, y además garantiza primera posición.

Explicación: Enviar una URL no obliga a indexarla ni posicionarla.

### Propuesta

Un portal envía a Google un sitemap XML válido con URLs accesibles. ¿Qué cabe concluir sobre su indexación?

- A. Las URLs descubiertas quedarán indexadas al completar el siguiente rastreo.
- B. Puede facilitar descubrimiento, sin garantizar rastreo ni indexación. **(correcta)**
- C. La validez del archivo acredita la calidad de cada página para el índice.
- D. Las URLs listadas tendrán preferencia de ranking sobre las que no figuran.

Explicación: Un sitemap válido ayuda a que Google descubra URLs y entienda información aportada sobre ellas, pero no garantiza que las rastree o indexe. La decisión depende de accesibilidad, contenido y otros criterios del buscador. La validez del XML no certifica la calidad o elegibilidad de todas las páginas ni compra una posición. Incluir una URL puede aportar una señal débil de canonicalización, distinta de garantizar indexación o prioridad de ranking.

- Error A: Descubrir o rastrear un recurso no obliga a incluirlo en el índice, ni existe la garantía temporal del siguiente rastreo indicada.
- Error C: El archivo puede ser válido y contener páginas no aptas o no seleccionadas para indexar; sintaxis y calidad del contenido son controles diferentes.
- Error D: Incluir una URL no garantiza una posición superior frente a páginas no listadas; el sitemap no es una orden de ranking.

- [Google Search Central: Learn about sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) · Definición de sitemap; Do I need a sitemap?: ayuda al descubrimiento sin garantizar rastreo o indexación · versión: Guía web viva consultada el 28-10-2026; comportamiento de Google, sin prometer indexación por validez del XML o envío del archivo · comprobado: 2026-10-28
- [Google Search Central: How to specify a canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) · Introducción y fuerza de señales; Reasons to specify a canonical URL: consolidar señales y evitar rastreo duplicado; Best practices; link y cabecera HTTP canonical · versión: Documentación viva consultada el 28-10-2026; canonical es preferencia/señal, distinta de redirección, noindex o control de acceso. No se fuerza una selección universal por longitud de URL · comprobado: 2026-10-28

Partida: `80e4a29983cc952700e52d7762a91d897d092cd0bddec5a2d3fa177f96818bfe` · propuesta: `e690eb2ab1013692512f67a20d1b11f7fbd9f9a33f90be4986a39dc56852f24e`

## MAN-GSI-P18-134

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave A; distinguir optimización orgánica de anuncios, sindicación y búsqueda interna.

### Antes

¿Qué es SEO?

- A. Prácticas para ayudar a buscadores a comprender, rastrear y presentar contenido útil a usuarios. **(correcta)**
- B. Contratar anuncios pagados para aparecer en posiciones patrocinadas, siendo la inversión publicitaria su requisito esencial.
- C. Publicar un feed RSS o Atom para distribuir novedades a suscriptores, sin intervenir en rastreo o presentación orgánica.
- D. Incorporar un buscador interno que consulte exclusivamente el contenido del propio sitio y no los índices de buscadores externos.

Explicación: SEO se centra en descubrimiento orgánico y calidad técnica/contenido.

### Propuesta

¿Qué es SEO?

- A. Prácticas para ayudar a buscadores a comprender, rastrear y presentar contenido útil a usuarios. **(correcta)**
- B. Contratar anuncios pagados para aparecer en posiciones patrocinadas, siendo la inversión publicitaria su requisito esencial.
- C. Publicar un feed RSS o Atom para distribuir novedades a suscriptores, sin intervenir en rastreo o presentación orgánica.
- D. Incorporar un buscador interno que consulte exclusivamente el contenido del propio sitio y no los índices de buscadores externos.

Explicación: SEO reúne prácticas para que buscadores entiendan y descubran contenido y para que usuarios encuentren resultados útiles en búsqueda orgánica. Abarca contenido y aspectos técnicos, sin garantizar primera posición ni equivaler a pagar anuncios. Google distingue mejorar presencia orgánica de publicidad de pago. Un feed o un buscador interno pueden complementar la experiencia del sitio, pero no definen por sí solos la optimización de su presencia en buscadores externos.

- Error B: Contratar anuncios pertenece al marketing de pago. SEO no exige inversión publicitaria para que una página aparezca orgánicamente.
- Error C: Un feed distribuye novedades. Puede apoyar descubrimiento o consumo, pero esa función aislada no define el conjunto de prácticas SEO.
- Error D: Un buscador interno recupera información del propio sitio; no equivale a optimizar cómo los buscadores externos descubren y presentan su contenido.

- [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) · Definición inicial; Help Google find your content; organización, títulos y enlaces; contenido útil y ausencia de garantía de primera posición · versión: Guía viva consultada el 28-10-2026; optimización orgánica distinta de contratar anuncios. No se presenta como certificación de accesibilidad · comprobado: 2026-10-28
- [Google Ads: What is search engine marketing?](https://business.google.com/uk/resources/articles/search-engine-marketing/) · Search engine marketing defined; What is SEO and SEM, and how do they differ?: uso actual de SEM para pago y mención de definiciones anteriores más amplias · versión: Artículo que indica agosto de 2026; consultado el 28-10-2026. Uso terminológico documentado, no definición normativa universal ni recomendación de gasto publicitario · comprobado: 2026-10-28

Partida: `bfc8302f67d3baf5a8350b76de2c4081aacc7e684eeb4d1244d96d799384a7a6` · propuesta: `9492a281923cceddcacfa7b6f594ed3b86815b31db41d585a77eb29e85f2854d`

## MAN-GSI-P18-135

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra distinción habitual y clave C; reconocer uso amplio de SEM y evitar definición rígida de toda la industria.

### Antes

¿Qué diferencia hay entre SEO y SEM?

- A. SEO designa exclusivamente publicidad pagada y SEM únicamente mejoras orgánicas de contenido y rastreo.
- B. SEO y SEM son sinónimos para cualquier acción que aumente tráfico, sin distinguir resultados orgánicos y campañas de pago.
- C. SEO se refiere a optimización orgánica; SEM suele asociarse a marketing de pago en buscadores. **(correcta)**
- D. SEM se limita a medir posiciones y clics del sitio, pero no incluye creación, segmentación o gestión de anuncios en buscadores.

Explicación: Es una distinción habitual en gestión de contenidos y marketing digital.

### Propuesta

¿Qué diferencia hay entre SEO y SEM?

- A. SEO designa exclusivamente publicidad pagada y SEM únicamente mejoras orgánicas de contenido y rastreo.
- B. SEO y SEM son sinónimos para cualquier acción que aumente tráfico, sin distinguir resultados orgánicos y campañas de pago.
- C. SEO se refiere a optimización orgánica; SEM suele asociarse a marketing de pago en buscadores. **(correcta)**
- D. SEM se limita a medir posiciones y clics del sitio, pero no incluye creación, segmentación o gestión de anuncios en buscadores.

Explicación: En el uso habitual señalado, SEO optimiza presencia orgánica y SEM se asocia a campañas de pago en buscadores. La terminología varía: SEM también ha designado un ámbito de marketing que incluye orgánico y pago. El artículo Google Ads consultado reconoce ambos usos y explica su enfoque de pago actual. Por eso no se afirma una definición universal excluyente; tampoco se reduce SEM a analítica ni se invierten SEO y publicidad.

- Error A: Invierte los términos en el uso preguntado: SEO se centra en optimización orgánica y el SEM de campañas de pago en publicidad.
- Error B: Buscar más tráfico no vuelve sinónimas las actividades. Hay que distinguir resultados orgánicos y campañas, incluso cuando SEM se emplea como paraguas amplio.
- Error D: El marketing de pago incluye crear, segmentar y gestionar anuncios; medir posiciones y clics es solo una actividad de análisis.

- [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) · Definición inicial; Help Google find your content; organización, títulos y enlaces; contenido útil y ausencia de garantía de primera posición · versión: Guía viva consultada el 28-10-2026; optimización orgánica distinta de contratar anuncios. No se presenta como certificación de accesibilidad · comprobado: 2026-10-28
- [Google Ads: What is search engine marketing?](https://business.google.com/uk/resources/articles/search-engine-marketing/) · Search engine marketing defined; What is SEO and SEM, and how do they differ?: uso actual de SEM para pago y mención de definiciones anteriores más amplias · versión: Artículo que indica agosto de 2026; consultado el 28-10-2026. Uso terminológico documentado, no definición normativa universal ni recomendación de gasto publicitario · comprobado: 2026-10-28

Partida: `e3946b9131894e9d4bee12f92e86d55a82780bd3e79464b3e9187b5601f549a8` · propuesta: `5c870bc27a8dac06f759f4200da87de142d0a85d3bd75a699b7d249f650fe8f6`

## MAN-GSI-P18-136

Decisión: pending_review · acción: revise.

Motivo: Conservar prácticas SEO/accesibilidad y clave B; comparar mejoras parciales con fallos concretos, sin equiparar SEO a conformidad WCAG.

### Antes

¿Qué factor técnico ayuda al SEO y accesibilidad?

- A. Ocultar contenido a usuarios y mostrar otro a robots.
- B. HTML semántico, títulos claros, enlaces rastreables, rendimiento y compatibilidad móvil. **(correcta)**
- C. Usar texto como imágenes sin alternativa.
- D. Bloquear todas las páginas en robots.txt.

Explicación: Buenas prácticas técnicas suelen mejorar experiencia y comprensión del contenido.

### Propuesta

¿Qué factor técnico ayuda al SEO y accesibilidad?

- A. Tiempos de carga bajos, enlaces sin href y encabezados elegidos solo por apariencia.
- B. HTML semántico, títulos claros, enlaces rastreables, rendimiento y compatibilidad móvil. **(correcta)**
- C. Diseño móvil y enlaces llamados «aquí» sin contexto que explique su destino.
- D. Palabras clave en metadatos y contenido principal como imágenes sin alternativa textual.

Explicación: Estructura semántica, títulos descriptivos, enlaces comprensibles y rastreables y una experiencia usable en distintos dispositivos favorecen comprensión y acceso. WAI recomienda marcado significativo, alternativas de imágenes y adaptación a la tecnología del usuario; Google añade buenas prácticas de descubrimiento y experiencia. Una carga rápida o diseño móvil aislados no corrigen enlaces sin contexto o contenido no accesible. El conjunto no demuestra por sí solo conformidad WCAG ni garantiza ranking.

- Error A: Mejorar carga es útil, pero los enlaces sin href pueden impedir rastreo y los encabezados solo visuales no comunican estructura semántica a tecnologías de apoyo.
- Error C: El diseño móvil ayuda, pero «aquí» sin contexto suficiente no identifica con claridad el destino del enlace.
- Error D: Metadatos y palabras clave no sustituyen alternativas para contenido informativo presentado como imagen; usuarios y herramientas necesitan una representación accesible.

- [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) · Definición inicial; Help Google find your content; organización, títulos y enlaces; contenido útil y ausencia de garantía de primera posición · versión: Guía viva consultada el 28-10-2026; optimización orgánica distinta de contratar anuncios. No se presenta como certificación de accesibilidad · comprobado: 2026-10-28
- [W3C WAI: Developing for Web Accessibility](https://www.w3.org/WAI/tips/developing/) · Include alternative text for images; Use mark-up to convey meaning and structure; Reflect reading order; Write code that adapts to the user’s technology · versión: Orientaciones prácticas WAI consultadas el 28-10-2026; no edición normativa cerrada ni evaluación de conformidad WCAG de esta aplicación · comprobado: 2026-10-28
- [Google Search Central: Understanding page experience](https://developers.google.com/search/docs/appearance/page-experience) · Self-assess your content’s page experience: Core Web Vitals, seguridad, visualización móvil y ausencia de interferencias; recursos · versión: Guía viva consultada el 28-10-2026. La experiencia es multidimensional; no garantiza ranking o accesibilidad por una única puntuación · comprobado: 2026-10-28

Partida: `cb79ef7dc40b20a261fdf1b58ceceac09abc1f2d542561bd6533efe7245095c4` · propuesta: `8a77fbfa291618f418dc0cd18e02f59b3c92443acf4bc71d2ed8682ebf78d913`

## MAN-GSI-P18-137

Decisión: pending_review · acción: revise.

Motivo: Conservar señal canonical y clave A; cuatro mecanismos cercanos de acceso/rastreo/indexación, sin namespace o licencia ajenos.

### Antes

¿Qué es una URL canonical?

- A. Una señal que ayuda a indicar la versión preferida entre URLs duplicadas o muy similares. **(correcta)**
- B. Una redirección obligatoria que siempre bloquea otras URLs.
- C. Un namespace XML.
- D. Una licencia de contenido.

Explicación: Canonical ayuda a consolidar señales de duplicados, pero no es un control de acceso.

### Propuesta

¿Qué expresa declarar una URL como canónica mediante rel=canonical?

- A. Una señal de preferencia entre URLs duplicadas o con contenido muy similar. **(correcta)**
- B. Una respuesta de redirección HTTP que lleva la navegación hacia una URL distinta.
- C. Una regla noindex que excluye una página de los resultados del buscador.
- D. Una regla de robots.txt que limita qué rutas puede rastrear un robot.

Explicación: La declaración de una URL canónica comunica la versión preferida de un contenido duplicado o muy similar, ayudando a consolidar señales. Puede expresarse mediante rel=canonical en un elemento link o en una cabecera HTTP, según el recurso. Google la trata como señal y también valora otras evidencias; no es una obligación que bloquee versiones alternativas. No redirige por sí sola al navegador, no equivale a noindex y no protege acceso confidencial.

- Error B: Una redirección cambia el destino de la petición y puede ser otra señal de canonicalización, pero no es la declaración rel=canonical descrita.
- Error C: Noindex comunica exclusión del índice; canonical expresa preferencia entre versiones y no impone esa exclusión de todas las alternativas.
- Error D: Robots.txt regula rastreo para clientes que lo respetan. No señala por sí mismo la versión preferida de duplicados.

- [Google Search Central: How to specify a canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) · Introducción y fuerza de señales; Reasons to specify a canonical URL: consolidar señales y evitar rastreo duplicado; Best practices; link y cabecera HTTP canonical · versión: Documentación viva consultada el 28-10-2026; canonical es preferencia/señal, distinta de redirección, noindex o control de acceso. No se fuerza una selección universal por longitud de URL · comprobado: 2026-10-28
- [IETF: RFC9309, Robots Exclusion Protocol](https://www.rfc-editor.org/rfc/rfc9309.html) · 1 Introduction; 2.1 sintaxis y 2.2 reglas; 3 Security Considerations: no sustituye seguridad y las rutas quedan públicamente expuestas · versión: RFC9309, Standards Track, septiembre de 2022. Reglas para robots que implementan el protocolo, no autenticación o garantía de exclusión del índice · comprobado: 2026-10-28

Partida: `1601ad974d3a7cef6ae6c9afcc09c062865f5195a093bdaab0e16797de7a9f8b` · propuesta: `72615590096ad81d3ec745c451027057740a08489824ef240fc13823d70e9090`

## MAN-GSI-P18-138

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de duplicación y clave B; microcaso de guía con URLs de campaña, sin prometer penalizaciones o elección obligatoria.

### Antes

¿Qué problema puede causar contenido duplicado?

- A. Multiplicar automáticamente la autoridad del sitio porque cada copia de una página aporta señales independientes al mismo contenido.
- B. Fragmentar señales, dificultar selección de versión preferida y generar rastreo innecesario. **(correcta)**
- C. Provocar siempre una penalización manual y la retirada completa de todas las versiones duplicadas de los resultados de búsqueda.
- D. Desaparecer por completo al declarar una URL canónica, ya que el buscador queda obligado a ignorar cualquier otra señal o versión.

Explicación: La canonicalización y arquitectura de URLs ayudan a gestionarlo.

### Propuesta

Un portal ofrece la misma guía en varias URLs de campaña sin señalar una preferida. ¿Qué problema puede causar?

- A. Cada variante aporta por separado toda su autoridad a la misma página.
- B. Pueden dispersarse señales y gastarse rastreo en versiones equivalentes. **(correcta)**
- C. Todas las variantes recibirán una penalización manual por duplicación.
- D. El buscador debe seleccionar como canónica la URL de menor longitud.

Explicación: Varias URLs equivalentes pueden fragmentar señales y métricas y consumir rastreo en duplicados en vez de contenido nuevo. Señalar coherentemente una versión preferida y organizar las URLs ayuda a consolidar información. Duplicación no implica por sí sola una penalización manual ni suma automática de autoridad de cada copia. La selección de canónica no depende obligatoriamente de escoger la URL más corta y puede basarse en varias señales.

- Error A: Publicar variantes no multiplica automáticamente toda la autoridad; gestionar la consolidación es precisamente uno de los objetivos de canonicalización.
- Error C: La duplicación por sí sola no acredita una infracción que provoque siempre penalización manual de todas las versiones.
- Error D: No existe la obligación descrita de escoger la dirección más corta; el buscador combina señales de equivalencia y preferencia.

- [Google Search Central: How to specify a canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) · Introducción y fuerza de señales; Reasons to specify a canonical URL: consolidar señales y evitar rastreo duplicado; Best practices; link y cabecera HTTP canonical · versión: Documentación viva consultada el 28-10-2026; canonical es preferencia/señal, distinta de redirección, noindex o control de acceso. No se fuerza una selección universal por longitud de URL · comprobado: 2026-10-28

Partida: `f734d103269f1e15bcb562d4508a99016938f1aa0168e726f0f34d7192d888e6` · propuesta: `698d9caa8c6a19d28fee918da3695a3b07d1f374de59f6eb4d6a7a71929d65aa`

## MAN-GSI-P18-139

Decisión: pending_review · acción: revise.

Motivo: Conservar analítica útil y clave A; microcaso de consultas reformuladas para separar rendimiento, visitas y calidad, sin tratar clic como verdad de relevancia.

### Antes

¿Qué información resulta útil para mejorar un buscador interno?

- A. Consultas sin resultados, reformulaciones, clics, filtros usados y feedback de relevancia. **(correcta)**
- B. El número de núcleos y memoria del servidor, sin relacionarlo con términos, intención, resultados o comportamiento de usuarios.
- C. Los colores, tipografías y tamaños de la interfaz, aunque no se mida qué consultas fallan ni qué resultados satisfacen la necesidad.
- D. Eliminar las consultas sin resultado y las reformulaciones para conservar únicamente interacciones que ya terminaron con un clic.

Explicación: La analítica de búsqueda revela vocabulario real y huecos de contenido.

### Propuesta

Los usuarios reformulan búsquedas y no encuentran documentación que ya existe. ¿Qué información ayuda a mejorar el buscador interno?

- A. Consultas sin resultados, reformulaciones, clics, filtros y relevancia evaluada. **(correcta)**
- B. El número total de visitas, sin distinguir consultas o resultados de búsqueda.
- C. La latencia media del servicio, sin relacionarla con las consultas realizadas.
- D. Los clics por página, sin conocer la consulta ni los resultados mostrados.

Explicación: Consultas sin resultados y reformulaciones revelan necesidades, vocabulario y posibles fallos; clics y uso de filtros aportan señales de interacción si se relacionan con la consulta y los resultados mostrados. Deben complementarse con juicios de relevancia y pruebas representativas. Un clic puede reflejar posición o curiosidad y no demuestra satisfacción por sí solo. La latencia y las visitas totales son útiles para otros análisis, pero no explican por sí mismas por qué no se encuentra un documento existente.

- Error B: Las visitas agregadas no identifican vocabulario de consulta, ausencia de resultados o relevancia de lo recuperado.
- Error C: La latencia mide rapidez. Una búsqueda puede ser rápida y devolver resultados poco útiles o no reconocer el término del usuario.
- Error D: Sin la consulta y la exposición de resultados no se sabe qué necesidad motivó el clic ni qué alternativas se ofrecieron; se pierde contexto para evaluar relevancia.

- [Microsoft: Collect telemetry data for search traffic analytics](https://learn.microsoft.com/en-us/previous-versions/azure/search/search-traffic-analytics) · Introducción; Identify relevant search data: consultas de usuario, clics y correlación con resultados; consultas sin resultados · versión: La URL actual redirige a previous-versions. Texto público leído el 28-10-2026; la propia página advierte que una interfaz y biblioteca citadas son obsoletas. Se usa el patrón de análisis, sin implantar Azure ni copiar código antiguo · comprobado: 2026-10-28
- [Elastic: Ranking evaluation](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval) · Introducción y requisitos de evaluación; Available evaluation metrics, Precision at K y Recall at K; juicios por consulta y muestra representativa · versión: Documentación REST viva consultada el 28-10-2026, sin edición cerrada visible. Se evalúan conjuntos con relevancia conocida; no se presupone tratamiento de resultados sin juzgar · comprobado: 2026-10-28

Partida: `082a42f505c35099ab1e275bb437f6eab7b4b94665b4e84a5fd7905578f6ee7e` · propuesta: `da4fc614cd7e793dc1a93bb54e0116eb744650b97e227cf8e151102179b06de1`

## MAN-GSI-P18-140

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso y clave D; mejora léxica evaluada frente a ranking exacto, duplicación y filtros, evitando CSS o robots como distractores ajenos.

### Antes

Un portal público tiene buen contenido pero el buscador no encuentra sinónimos ni tolera errores. ¿Qué mejora es más directa?

- A. Incrementar las reglas de presentación CSS para que cada sinónimo disponga de un estilo propio en la página de resultados del portal.
- B. Bloquear el rastreador interno mediante \`robots.txt\` para impedir que indexe variantes ortográficas o términos no presentes literalmente.
- C. Eliminar títulos, descripciones y demás metadatos para obligar al buscador a basarse exclusivamente en el texto visible de las páginas.
- D. Trabajar análisis lingüístico, sinónimos, corrección, facetas y evaluación de precision/recall. **(correcta)**

Explicación: La calidad de recuperación requiere índice, análisis y ranking adecuados.

### Propuesta

Un portal público tiene buen contenido pero el buscador no encuentra sinónimos ni tolera errores. ¿Qué mejora es más directa?

- A. Aumentar el peso de coincidencias exactas manteniendo el mismo vocabulario.
- B. Añadir copias de páginas al índice sin modificar el análisis de consultas.
- C. Añadir filtros por fecha y ordenar por actualidad sin revisar equivalencias léxicas.
- D. Añadir sinónimos y tolerancia a errores y evaluar precisión y cobertura. **(correcta)**

Explicación: La mejora directa es tratar vocabulario equivalente y errores de escritura en el análisis y resolución de consultas, mediante sinónimos de dominio y tolerancia controlada a errores. Son mecanismos distintos: una similitud ortográfica no prueba sinonimia. Deben probarse con consultas representativas y relevancia conocida, midiendo precisión y cobertura para detectar falsos positivos o pérdidas. Expandir sin límites puede perjudicar rendimiento o calidad; facetas y otros controles complementan, pero no sustituyen la corrección del problema léxico descrito.

- Error A: Reforzar coincidencias exactas no añade las equivalencias o variantes que faltan y puede acentuar la dependencia de la misma forma literal.
- Error B: Duplicar páginas no incorpora por sí mismo un vocabulario equivalente ni reglas de corrección; aumenta volumen sin resolver el análisis.
- Error C: Fecha y actualidad ordenan o filtran resultados ya recuperables; no hacen coincidir por sí solas términos sinónimos o mal escritos.

- [Elastic: Configure synonyms in Elasticsearch](https://www.elastic.co/docs/solutions/search/full-text/search-with-synonyms) · Definición y términos equivalentes; Synonym rule formats; test del analizador y comprobación de expansión de consultas · versión: Documentación viva consultada el 28-10-2026. Vocabulario de dominio y prueba de resultados, sin instalar motor o asumir equivalencia universal entre palabras · comprobado: 2026-10-28
- [Elastic: Fuzzy query](https://www.elastic.co/docs/reference/query-languages/query-dsl/query-dsl-fuzzy-query) · Definición de distancia de edición; cambios, inserción, borrado y transposición; expansiones, fuzziness y límites de rendimiento · versión: Documentación viva consultada el 28-10-2026; ejemplo de tolerancia a errores, no equivalente a descubrir sinónimos semánticos · comprobado: 2026-10-28
- [Elastic: Ranking evaluation](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval) · Introducción y requisitos de evaluación; Available evaluation metrics, Precision at K y Recall at K; juicios por consulta y muestra representativa · versión: Documentación REST viva consultada el 28-10-2026, sin edición cerrada visible. Se evalúan conjuntos con relevancia conocida; no se presupone tratamiento de resultados sin juzgar · comprobado: 2026-10-28

Partida: `1333d2d009f5a6ecf3aa8c511a8c2ccb2f724d1c3192d99874a5a31d68620a65` · propuesta: `579041d685469c5a68c2d0225bf307b309084d2849e3d01ce39769cc9e775f7b`

## MAN-GSI-P18-141

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave A; explicar foco de plataforma y solapamientos con BPM, repositorio e identidad.

### Antes

¿Qué es una herramienta de colaboración empresarial?

- A. Una plataforma que facilita coedición, comunicación, tareas, conocimiento o coordinación entre equipos. **(correcta)**
- B. Un motor BPM que ejecuta procesos formalizados mediante tareas, reglas y transiciones predefinidas.
- C. Un repositorio documental orientado al archivo, versionado y retención de documentos corporativos.
- D. Un directorio corporativo que centraliza identidades, grupos y credenciales para controlar el acceso.

Explicación: Colaboración incluye wikis, chat/canales, repositorios, videoconferencia y gestión de tareas.

### Propuesta

¿Qué es una herramienta de colaboración empresarial?

- A. Una plataforma que facilita coedición, comunicación, tareas, conocimiento o coordinación entre equipos. **(correcta)**
- B. Un motor BPM que ejecuta procesos formalizados mediante tareas, reglas y transiciones predefinidas.
- C. Un repositorio documental orientado al archivo, versionado y retención de documentos corporativos.
- D. Un directorio corporativo que centraliza identidades, grupos y credenciales para controlar el acceso.

Explicación: Una herramienta de colaboración empresarial facilita trabajo conjunto mediante comunicación, coedición, tareas, conocimiento compartido o coordinación, según capacidades. Puede integrar repositorios, flujos e identidad, pero no se reduce a uno de esos componentes. Microsoft365 ilustra espacios y recursos de equipo con correo, archivos, tareas y conversaciones. Las familias funcionales se solapan: un repositorio o motor puede participar en colaboración sin que su función aislada describa todo el enfoque de plataforma preguntado.

- Error B: El motor BPM gobierna procesos formalizados. Puede apoyar coordinación, pero ese foco específico no agota las capacidades generales de colaboración descritas.
- Error C: El repositorio controla documentos y conservación. Puede ser parte de la solución, sin definir por sí solo comunicación, tareas y trabajo conjunto del equipo.
- Error D: El directorio gestiona identidad y grupos para acceso; es un soporte posible, no la plataforma completa de colaboración.

- [Microsoft: A collaboration governance framework for Microsoft365](https://learn.microsoft.com/en-us/previous-versions/microsoft-365/solutions/collaboration-governance-overview?view=o365-worldwide) · What is collaboration governance?; recursos de grupos; best practices; acceso externo, cumplimiento y organización/ciclo de vida; políticas de retención · versión: Página archivada previous-versions, actualización indicada 27-07-2023. Patrón de gobierno y capacidades, sin afirmar actualidad de todas las licencias o que la fecha de una ilustración sea la de todo el artículo · comprobado: 2026-10-28
- [Microsoft Support: Document collaboration and co-authoring](https://support.microsoft.com/en-us/sharepoint/get-started-with-sharepoint/document-collaboration-and-co-authoring) · Definición inicial y What do I need to co-author a document?: edición simultánea, almacenamiento, aplicaciones, formato y permisos · versión: Página que mezcla referencias Microsoft365/OneDrive y cabecera SharePoint2016/2019. Se usa para concepto y requisitos de ese entorno, sin declarar vigencia de cada producto o versionado obligatorio en toda coedición · comprobado: 2026-10-28

Partida: `d74bdd65aaa82f0adb25cf4356ceb606c00f5bc8901debfd60f84428602b9abe` · propuesta: `485c3eca9df2266b7b3151b1424a7ab67919d716532abd2fbfa5b0d10c18290c`

## MAN-GSI-P18-142

Decisión: pending_review · acción: revise.

Motivo: Conservar alcance de gobierno y clave D; alternativas como políticas incompletas plausibles, manteniendo control específico de exportaciones.

### Antes

¿Qué debe gobernarse en espacios colaborativos?

- A. Mantener enlaces de invitado públicos y sin caducidad para que cualquier participante pueda incorporar nuevos miembros.
- B. Heredar permisos abiertos en todos los espacios y desactivar la clasificación para evitar diferencias entre equipos.
- C. Conservar todo indefinidamente mientras se elimina la auditoría, porque la retención completa sustituye al control de actividad.
- D. Identidad, permisos, invitados, clasificación, retención, exportación y ciclo de vida. **(correcta)**

Explicación: La colaboración multiplica copias y participantes, por lo que necesita gobierno.

### Propuesta

¿Qué debe gobernarse en espacios colaborativos?

- A. Miembros definidos al crear el espacio, sin revisar invitados al finalizar su uso.
- B. Acceso interno controlado, dejando enlaces externos y exportaciones fuera de la política.
- C. Mensajes conservados, sin asignar responsables ni fechas de revisión del espacio.
- D. Identidad, permisos, invitados, clasificación, retención, exportación y ciclo de vida. **(correcta)**

Explicación: El gobierno de espacios colaborativos abarca identidad, acceso e invitados, clasificación y conservación, exportación y ciclo de vida con responsables y revisión. Debe coordinar recursos relacionados y cambios de miembros, uso y cierre. El marco Microsoft365 ofrece un ejemplo y Purview muestra que buscar contenido y exportarlo son permisos diferentes. No se presupone una licencia o producto obligatorio para toda organización ni que conservar mensajes sustituya controlar accesos y operaciones.

- Error A: Definir miembros al inicio no controla cambios posteriores ni invitados cuando termina la finalidad del espacio.
- Error B: Dejar vínculos externos y exportaciones fuera de política permite vías de salida o acceso sin el gobierno requerido.
- Error C: Conservar mensajes puede ser necesario, pero sin responsables o revisión no gestiona finalidad, acceso y cierre del espacio.

- [Microsoft: A collaboration governance framework for Microsoft365](https://learn.microsoft.com/en-us/previous-versions/microsoft-365/solutions/collaboration-governance-overview?view=o365-worldwide) · What is collaboration governance?; recursos de grupos; best practices; acceso externo, cumplimiento y organización/ciclo de vida; políticas de retención · versión: Página archivada previous-versions, actualización indicada 27-07-2023. Patrón de gobierno y capacidades, sin afirmar actualidad de todas las licencias o que la fecha de una ilustración sea la de todo el artículo · comprobado: 2026-10-28
- [Microsoft Purview: Assign permissions in eDiscovery](https://learn.microsoft.com/en-us/purview/edisc-permissions) · eDiscovery roles and role groups; roles Compliance Search y Export: distinguir búsqueda de acciones de exportación · versión: Documentación viva consultada el 28-10-2026. Ejemplo de control de exportaciones en un producto, sin imponer eDiscovery a cualquier espacio colaborativo · comprobado: 2026-10-28
- [Microsoft: Manage sharing settings for SharePoint and OneDrive](https://learn.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off) · External sharing options; Anyone with the link; Advanced settings: expiración y permisos; diferencias con Specific people · versión: Página actualizada 30-06-2026, consultada el 28-10-2026. Reenvío de enlaces sin autenticación, sin confundirlos con vínculos que sí comprueban identidad · comprobado: 2026-10-28

Partida: `467c7f85dc59ffcd7dd9dccca6f7729ed27b2058d8027eb723f17b903fa1f8f5` · propuesta: `92ced0cefb3660d3f94254439f1e8b94556d6fc4c4bd341b33cb270059199c34`

## MAN-GSI-P18-143

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de reenvío y clave B; microcaso explícito de enlace sin autenticación, distinguiendo identidad, vínculo y copia.

### Antes

¿Qué riesgo existe con enlaces públicos de documentos?

- A. Garantizar el mínimo privilegio porque únicamente las personas expresamente autorizadas pueden conocer o reenviar la dirección pública.
- B. Pueden permitir acceso no controlado o reenvío fuera del ámbito previsto. **(correcta)**
- C. Sustituir la autenticación robusta mediante una URL que verifica por sí sola la identidad, el rol y el contexto del destinatario previsto.
- D. Impedir automáticamente la descarga, copia o redistribución del documento, aunque el receptor legítimo pueda visualizar todo su contenido.

Explicación: Los enlaces compartidos deben limitarse, caducar o requerir identidad según sensibilidad.

### Propuesta

Se comparte un documento con un enlace «cualquiera con el vínculo», sin exigir inicio de sesión. ¿Qué riesgo existe?

- A. El enlace comprueba el rol de la persona a la que se reenvía.
- B. El reenvío puede dar acceso fuera del grupo de destinatarios previsto. **(correcta)**
- C. El enlace garantiza que no se copie el contenido que permite visualizar.
- D. La revocación por usuario bloquea a quien no ha acreditado su identidad.

Explicación: Un vínculo de tipo cualquiera con el enlace puede funcionar sin autenticación y ser reenviado, de modo que acceder no demuestra pertenencia al grupo previsto. Su uso debe ajustarse a sensibilidad y política: pueden requerirse destinatarios identificados, caducidad o revocación del vínculo. Microsoft distingue enlaces Anyone de Specific people. Revocar o limitar el enlace no equivale a comprobar una identidad que nunca se exigió, y permitir visualizar no garantiza impedir copias del contenido.

- Error A: El supuesto no requiere iniciar sesión; poseer el vínculo no comprueba por sí solo el rol o pertenencia del receptor.
- Error C: La posibilidad de visualizar no implica una garantía técnica general de que no se copie lo visto.
- Error D: Sin identidad comprobada no se puede basar el control en reconocer individualmente a cada visitante; las reglas del vínculo y su revocación son mecanismos distintos.

- [Microsoft: Manage sharing settings for SharePoint and OneDrive](https://learn.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off) · External sharing options; Anyone with the link; Advanced settings: expiración y permisos; diferencias con Specific people · versión: Página actualizada 30-06-2026, consultada el 28-10-2026. Reenvío de enlaces sin autenticación, sin confundirlos con vínculos que sí comprueban identidad · comprobado: 2026-10-28

Partida: `e0f4d9f96355bc0f9368bd2dbb38044a3b969ea0bf3effd212e7eb129bf27871` · propuesta: `b66f116f404c8dccaa985cd54f795f47c1f615a787c3f47998ee6f6087229b3d`

## MAN-GSI-P18-144

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave D; matizar feedback original: versionado puede complementar coedición, sin ser requisito universal.

### Antes

¿Qué es coedición?

- A. Edición exclusiva mediante bloqueo del documento hasta que el usuario realiza el check-in.
- B. Creación de copias independientes que se consolidan manualmente al cerrar cada versión.
- C. Replicación periódica de un repositorio sin edición simultánea de su contenido.
- D. Edición concurrente de un contenido por varias personas con mecanismos de sincronización/conflicto. **(correcta)**

Explicación: La coedición moderna puede sustituir ciertos flujos de check-out, aunque necesita versionado.

### Propuesta

¿Qué es coedición?

- A. Edición exclusiva mediante bloqueo del documento hasta que el usuario realiza el check-in.
- B. Creación de copias independientes que se consolidan manualmente al cerrar cada versión.
- C. Replicación periódica de un repositorio sin edición simultánea de su contenido.
- D. Edición concurrente de un contenido por varias personas con mecanismos de sincronización/conflicto. **(correcta)**

Explicación: La coedición permite que varias personas editen un contenido compartido de manera concurrente, coordinando cambios y posibles conflictos. No equivale a bloquearlo en exclusiva, editar copias independientes para fusionarlas manualmente o replicar un repositorio. Puede integrarse con historial de versiones y recuperación, pero el versionado no es una condición lógica de toda implementación de coedición. En el ejemplo Microsoft hay requisitos concretos de almacenamiento, aplicación, formato y permisos; no se extrapolan a cualquier plataforma.

- Error A: El bloqueo hasta check-in reserva edición exclusiva y evita la concurrencia del mismo archivo; no describe coedición simultánea.
- Error B: Consolidar manualmente copias independientes es otro método de trabajo, sin sincronización concurrente del contenido compartido.
- Error C: Replicar periódicamente sincroniza repositorios o copias; sin edición simultánea de participantes no constituye la coedición preguntada.

- [Microsoft Support: Document collaboration and co-authoring](https://support.microsoft.com/en-us/sharepoint/get-started-with-sharepoint/document-collaboration-and-co-authoring) · Definición inicial y What do I need to co-author a document?: edición simultánea, almacenamiento, aplicaciones, formato y permisos · versión: Página que mezcla referencias Microsoft365/OneDrive y cabecera SharePoint2016/2019. Se usa para concepto y requisitos de ese entorno, sin declarar vigencia de cada producto o versionado obligatorio en toda coedición · comprobado: 2026-10-28

Partida: `701ee05f92d193a065a329fba2f13da03489b056e303b1a1607180de25329501` · propuesta: `38c04b26e1b0da9c6fa4c469a5e184c48cc2a52425ae01b2862ff8244cedf83c`
