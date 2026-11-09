# GSI-EDITORIAL-038 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `ad0e0da31b7af9ab98944b493ef534ebce5b1efd2156638c0977e0988673fe1c`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B2-T12-018

Decisión: pending_review · acción: revise.

Motivo: Mantener significado FCR y clave C; comparar métricas reales y declarar criterios operativos sin universalizar una ventana de fabricante.

### Antes

¿Qué mide FCR?

- A. Número de centralitas
- B. Tiempo medio de gestión
- C. Resolución en el primer contacto **(correcta)**
- D. Porcentaje de abandono exclusivamente

Explicación: FCR refleja resolución inicial; AHT mide duración media de gestión.

### Propuesta

¿Qué mide FCR?

- A. Contactos atendidos dentro del umbral de tiempo fijado.
- B. Tiempo medio empleado en atención y gestiones asociadas.
- C. Asuntos resueltos en el primer contacto según el criterio definido. **(correcta)**
- D. Llamadas abandonadas antes de ser atendidas por un agente.

Explicación: FCR refleja la resolución en el primer contacto. Hay que definir qué se considera resuelto, población y ventana de repetición para comparar tasas. No mide duración media, abandono o nivel de servicio; distintas organizaciones pueden operativizarlo de forma diferente.

- Error A: Describe nivel de servicio respecto a un umbral de espera, no si el asunto quedó resuelto al primer contacto.
- Error B: Describe tiempo medio de gestión o AHT, que mide duración y no resolución inicial.
- Error D: Describe abandono antes de atención; no permite identificar por sí solo asuntos resueltos en su primer contacto.

- [Genesys: Interactive Insights Universe Guide Supplement](https://enu.docs.genesys.com/Documentation/GI2/8.5.0/UNV/Supplement) · Predictive Routing: First Contact Resolution Result, Avg Handle Time, % Abandoned Waiting y % Accept Service Level · versión: Documentación histórica 8.5.0, producto EOL/EOS indicado en cabecera; solo conceptos de métricas, sin recomendar ese producto ni convertir su ventana FCR de siete días en regla universal · comprobado: 2026-10-28

Partida: `e53223cd8aa987dff4f80827afae70b1f6720375fee2ebfaf940aa6bc6637e25` · propuesta: `fbf6e9f5c15c130997ea413c72dabfe4a077efe7063364bb0983806c804c4b5a`

## AI-GSI-B2-T12-009

Decisión: pending_review · acción: revise.

Motivo: Mantener minimización en CRM público y clave C; microcaso de integración que distingue disponibilidad técnica y necesidad.

### Antes

¿Qué debe evitarse al construir un CRM público?

- A. Controlar calidad del dato
- B. Definir permisos y retención
- C. Copiar indiscriminadamente todos los datos disponibles **(correcta)**
- D. Conservar historial pertinente

Explicación: El CRM debe respetar finalidad y minimización, no convertirse en una copia universal de datos.

### Propuesta

Una administración integra registros de varios sistemas en su CRM de atención. ¿Qué decisión debe evitar?

- A. Seleccionar los datos necesarios para la finalidad de atención declarada.
- B. Vincular el historial pertinente con permisos y plazos de conservación.
- C. Copiar los registros disponibles sin justificar su necesidad para atender. **(correcta)**
- D. Revisar calidad, procedencia y acceso de los datos que vayan a integrarse.

Explicación: La disponibilidad técnica de un registro no justifica integrarlo en el CRM. Hay que vincular el tratamiento a finalidad, base jurídica y necesidad, con acceso, calidad y conservación adecuados. El historial pertinente puede ser útil sin convertir el CRM en una réplica indiscriminada.

- Error A: Seleccionar lo necesario para una finalidad válida es coherente con minimización, sin que esa selección dispense de comprobar licitud y demás obligaciones.
- Error B: Un historial pertinente puede mantenerse con acceso y conservación justificados; el problema no es conservar cualquier historial.
- Error D: Comprobar calidad, procedencia y permisos es una medida apropiada. No equivale a autorizar cualquier copia de datos.

- [BOE/DOUE: Reglamento (UE) 2016/679](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos 5.1(b), (c), (d), (e) y (f), 6, 24 y 32: finalidad, minimización, exactitud, conservación, seguridad y responsabilidad · versión: Publicación DOUE L 119 de 04-05-2016; texto español mostrado en BOE y correcciones enlazadas, artículos citados cotejados · comprobado: 2026-10-28

Partida: `ed939a72519ed4134ad4650a3d57f17b36103b65653b18c88043f00550fe4f1a` · propuesta: `82420608d473e298c9f97c31798ed97936ef34c0a60bbe1e26cf348bd2be4854`

## AI-GSI-B2-T12-019

Decisión: pending_review · acción: revise.

Motivo: Mantener riesgo de optimizar AHT aisladamente y clave C; microcaso de objetivo de duración, sin afirmar que toda reducción empeore el servicio.

### Antes

Reducir AHT de forma aislada puede…

- A. Sustituir métricas de calidad
- B. Eliminar abandonos necesariamente
- C. Empeorar resolución y satisfacción **(correcta)**
- D. Garantizar mejor servicio en todos los casos

Explicación: La eficiencia debe equilibrarse con calidad y resolución; atender más rápido no siempre resuelve mejor.

### Propuesta

Un centro fija como único objetivo cerrar antes las llamadas y reduce su AHT, sin medir resolución ni satisfacción. ¿Qué riesgo debe considerar?

- A. La duración más corta demuestra que se resuelven más asuntos al primer contacto.
- B. La reducción de tiempo permite dar por mejorada la satisfacción sin medirla.
- C. Las llamadas más cortas pueden dejar asuntos pendientes y generar reiteraciones. **(correcta)**
- D. La bajada del tiempo medio acredita que menos personas abandonan antes de atención.

Explicación: AHT mide duración de gestión, no resolución ni satisfacción. Presionar para cerrar antes puede dejar cuestiones sin resolver y provocar contactos repetidos. La reducción puede ser positiva si se mantiene calidad, pero ese resultado debe comprobarse con otras métricas.

- Error A: Una duración menor no prueba resolución inicial: se puede finalizar pronto un contacto que deje el asunto pendiente.
- Error B: La satisfacción es otra dimensión y necesita información propia; no se deduce de acortar el tiempo.
- Error D: El abandono ocurre antes de atención y depende de la experiencia de espera; AHT por sí solo no acredita que haya bajado.

- [Genesys: Interactive Insights Universe Guide Supplement](https://enu.docs.genesys.com/Documentation/GI2/8.5.0/UNV/Supplement) · Predictive Routing: First Contact Resolution Result, Avg Handle Time, % Abandoned Waiting y % Accept Service Level · versión: Documentación histórica 8.5.0, producto EOL/EOS indicado en cabecera; solo conceptos de métricas, sin recomendar ese producto ni convertir su ventana FCR de siete días en regla universal · comprobado: 2026-10-28

Partida: `1f76815fa1a17d594c96abc9d610b0a9f9ba6520794de101cbedbb246fa37454` · propuesta: `07d479c376e31e9b0db62dba9cb5964b5e6e61291b71b6d16a172ef5529910b7`

## AI-GSI-B2-T13-002

Decisión: pending_review · acción: revise.

Motivo: Mantener defensa en profundidad y clave A; comparar principios próximos, sin convertir una barrera individual en estrategia completa.

### Antes

¿Qué define defensa en profundidad?

- A. Combinar barreras y controles para evitar depender de uno solo **(correcta)**
- B. Eliminar controles internos tras instalar VPN
- C. Confiar exclusivamente en el cortafuegos
- D. Aplicar únicamente cifrado a copias

Explicación: La seguridad combina personas, procesos y controles en varias capas.

### Propuesta

¿Qué define defensa en profundidad?

- A. Combinar controles complementarios en varias capas de protección. **(correcta)**
- B. Conceder a cada identidad los permisos mínimos para sus tareas.
- C. Separar funciones sensibles entre personas con responsabilidades distintas.
- D. Priorizar el restablecimiento del servicio después de una interrupción.

Explicación: La defensa en profundidad coordina barreras en varias capas para reducir la dependencia de una sola. Integra personas, procesos y tecnología. Acumular productos iguales o mal coordinados no demuestra esa protección ni garantiza impedir todo ataque.

- Error B: Describe mínimo privilegio, que puede ser una de las medidas de una estrategia más amplia.
- Error C: Describe separación de funciones; es un control posible, no la definición de protección en varias capas.
- Error D: Describe una prioridad de recuperación o continuidad, distinta de combinar defensas en profundidad.

- [NIST CSRC: defense-in-depth](https://csrc.nist.gov/glossary/term/defense_in_depth) · Definitions: estrategia que integra personas, tecnología y operaciones, con barreras en múltiples capas · versión: Glosario público consultado; definición atribuida en la ficha a SP 800-53 Rev. 5 y otras fuentes, sin afirmar lectura completa de ellas · comprobado: 2026-10-28

Partida: `eea910976165eaada9690f7844d0e183324a1cad8fe2f4d7fcd8317774bd419b` · propuesta: `e9eed49cbe72dc333bfc9c9732472bdafc2c8fbf3970a176c8174600ae79d428`

## AI-GSI-B2-T13-003

Decisión: pending_review · acción: revise.

Motivo: Mantener principio Zero Trust y clave D; caso LAN que aplica el concepto, retirando «en el tema» y distractores caricaturescos.

### Antes

¿Qué principio resume Zero Trust en el tema?

- A. Bloquear absolutamente toda operación
- B. Confiar siempre en cualquier equipo de la LAN
- C. Comprar un único producto como garantía completa
- D. No confiar implícitamente por ubicación de red **(correcta)**

Explicación: Se verifica explícitamente, se limita privilegio y se asume posible compromiso.

### Propuesta

Un portátil corporativo conectado a la LAN solicita acceder a un recurso interno. ¿Qué criterio es coherente con Zero Trust?

- A. Autorizar el acceso porque el equipo usa una dirección privada de la LAN.
- B. Dar acceso a otros recursos tras haber validado una sesión anterior.
- C. Confiar en el equipo por ser propiedad de la organización y estar dentro.
- D. Evaluar el acceso sin conceder confianza implícita por estar en la LAN. **(correcta)**

Explicación: Zero Trust no concede confianza implícita por ubicación de red o propiedad del equipo. El acceso al recurso se evalúa con identidad, estado del dispositivo, contexto y política. Haber accedido antes o estar en la LAN no autoriza automáticamente otras sesiones o recursos.

- Error A: Una dirección privada describe localización o direccionamiento, no una garantía suficiente para autorizar el recurso.
- Error B: Una autorización anterior no equivale a permiso para recursos o sesiones distintos.
- Error C: La propiedad corporativa no elimina la necesidad de comprobar el acceso y el estado pertinente.

- [NIST SP 800-207: Zero Trust Architecture](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf) · Abstract; 2 Zero Trust Basics; 2.1 Tenets of Zero Trust: confianza, ubicación de red, propiedad, autenticación y autorización · versión: Agosto de 2020, publicación final; no se utiliza el borrador de 2019 que también devuelve el buscador · comprobado: 2026-10-28

Partida: `a0d0b9e5fc97a796880452abced42fa0bf781e93d296c8b699078f1d7e01b7bc` · propuesta: `312baa0f3a97803e16e2934815786830175b3392ab89c0398a298477ffc11fd0`

## AI-GSI-B2-T13-004

Decisión: pending_review · acción: revise.

Motivo: Mantener ataque a disponibilidad y clave A; tres categorías de amenaza próximas, sin identificar toda saturación con ataque.

### Antes

¿Qué ataque se centra en agotar capacidad o recursos?

- A. DoS/DDoS **(correcta)**
- B. Archivado
- C. Normalización
- D. Firma digital

Explicación: La denegación de servicio ataca disponibilidad mediante agotamiento u otros mecanismos.

### Propuesta

¿Qué ataque busca impedir que un servicio atienda solicitudes agotando deliberadamente su capacidad o recursos?

- A. Denegación de servicio (DoS/DDoS). **(correcta)**
- B. Suplantación para robar credenciales.
- C. Exfiltración de información privada.
- D. Alteración de registros del servicio.

Explicación: Agotar deliberadamente recursos para impedir atender solicitudes es una forma de denegación de servicio. DDoS añade procedencia distribuida. También existen otros mecanismos de DoS; una sobrecarga por demanda legítima no se convierte por ello en ataque.

- Error B: Obtener credenciales mediante suplantación busca engañar o acceder con una identidad, no define el agotamiento de capacidad descrito.
- Error C: Extraer datos afecta principalmente a confidencialidad; no es la finalidad de impedir que el servicio atienda.
- Error D: Modificar registros afecta a integridad; no describe el agotamiento de recursos del caso.

- [MITRE ATT&amp;CK: Endpoint Denial of Service, T1499](https://attack.mitre.org/techniques/T1499/) · Descripción de T1499 y subtipos de agotamiento de recursos del sistema y de aplicación · versión: Página de técnica consultada; clasificación conceptual, sin ejecutar pruebas o generar tráfico de ataque · comprobado: 2026-10-28
- [MITRE ATT&amp;CK: Network Denial of Service, T1498](https://attack.mitre.org/techniques/T1498/) · Descripción de T1498: denegación de servicio de red y procedencia distribuida · versión: Página de técnica consultada; la distribución no implica que toda sobrecarga sea un ataque · comprobado: 2026-10-28

Partida: `ae8e3a89cdbf1ba7fa4f056aeb185743d5d13af5870375bee62f6266eefc49d7` · propuesta: `ead965c4748ade08f6eaefcb552416f67d6f31c2710f0a1004285bcbe794956b`

## AI-GSI-B2-T13-005

Decisión: pending_review · acción: revise.

Motivo: Mantener extracción no autorizada y clave D; comparar modificación, respaldo, descubrimiento y salida de datos.

### Antes

¿Qué distingue la exfiltración?

- A. Actualización planificada de software
- B. Creación de una copia autorizada exclusivamente
- C. Confirmación de una transacción
- D. Extracción no autorizada de información **(correcta)**

Explicación: Exfiltrar implica sacar información sin autorización; no equivale a cualquier transferencia legítima.

### Propuesta

¿Qué distingue la exfiltración?

- A. Modificar sin autorización el contenido de registros existentes.
- B. Copiar datos a un respaldo previsto y autorizado por la política.
- C. Localizar dónde se guardan datos de interés dentro del sistema.
- D. Extraer información hacia un destino o medio no autorizado. **(correcta)**

Explicación: La exfiltración consiste en extraer información sin autorización, por distintos canales o medios. Puede servirse de funciones de transferencia legítimas; lo decisivo es el uso no autorizado, no que se utilice una tecnología concreta o que la salida sea por Internet.

- Error A: Alterar contenido es una acción contra integridad, aunque pueda coexistir con extracción de datos.
- Error B: Un respaldo autorizado y ajustado a su finalidad no es exfiltración por el mero hecho de copiar.
- Error C: Localizar información es descubrimiento o preparación; no demuestra que ya se haya extraído.

- [MITRE ATT&amp;CK: Exfiltration, TA0010](https://attack.mitre.org/tactics/TA0010/) · Descripción de la táctica y técnicas de extracción por distintos canales y medios · versión: Táctica TA0010 consultada; extracción no autorizada, sin limitarla a tráfico público de Internet · comprobado: 2026-10-28

Partida: `739a3398f8ce89d4a2756946a862521f5fa82f24bb26b69d8b47088fa321e174` · propuesta: `d4b59b2d7962839c1a888fd4528009e4b2a089bfed20f195aa90b53f12582fa2`

## AI-GSI-B2-T13-006

Decisión: pending_review · acción: revise.

Motivo: Mantener vulnerabilidad frente a exploit y clave B; pares de conceptos comparables, sin afirmar incidente por mera existencia.

### Antes

¿Qué diferencia vulnerabilidad y exploit?

- A. Ambos son siempre incidentes confirmados
- B. La vulnerabilidad es una debilidad; el exploit la aprovecha **(correcta)**
- C. El exploit es necesariamente un parche defensivo
- D. La vulnerabilidad es una herramienta de copia

Explicación: Debilidad, mecanismo de explotación e incidente son conceptos distintos.

### Propuesta

¿Qué diferencia vulnerabilidad y exploit?

- A. La vulnerabilidad es el código de ataque; el exploit es la debilidad del sistema.
- B. La vulnerabilidad es una debilidad; el exploit es un medio para aprovecharla. **(correcta)**
- C. La vulnerabilidad es la evidencia de un incidente; el exploit es la corrección.
- D. La vulnerabilidad es la consecuencia del daño; el exploit es su probabilidad.

Explicación: Una vulnerabilidad es una debilidad que puede aprovecharse. Un exploit es código o técnica que explota esa debilidad. Su existencia no demuestra que una organización concreta haya sufrido un incidente; tampoco equivale a un parche o a la valoración del daño.

- Error A: Intercambia debilidad y medio de explotación. La debilidad no es por definición el código que la aprovecha.
- Error C: Una debilidad puede existir sin incidente observado. La corrección o parche trata la debilidad, no define el exploit.
- Error D: Consecuencia y probabilidad son elementos de valoración del riesgo, distintos de debilidad y explotación.

- [NIST CSRC: vulnerability](https://csrc.nist.gov/glossary/term/vulnerability) · Definitions: debilidad explotable o desencadenable; entrada atribuida a SP 800-61r3/CNSSI 4009-2022 · versión: Glosario público consultado; se distingue posibilidad de explotación de incidente confirmado · comprobado: 2026-10-28
- [NIST SP 800-94: IDPS](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-94.pdf) · 2 Intrusion Detection and Prevention Principles, pp. 2-1 a 2-6; 3 IDPS Technologies; distinción IDS/IPS y métodos de detección · versión: Febrero de 2007; conceptos funcionales y de despliegue, sin trasladar referencias antiguas de respuesta como guía vigente · comprobado: 2026-10-28

Partida: `27138e20b52895718fc7a38b8d1c37f4de5ce0f33132854366df17dff131b8e1` · propuesta: `293f11b0d3762c9aa18411fac9eb6c498712b1eef9cc1aac1fcd479fd69a3b41`

## AI-GSI-B2-T13-007

Decisión: pending_review · acción: revise.

Motivo: Mantener diferencia funcional IDS/IPS y clave A; distractores sobre arquitectura, método y función, con límites explícitos.

### Antes

¿Qué diferencia IDS e IPS según su función básica?

- A. IDS detecta y alerta; IPS puede bloquear en línea **(correcta)**
- B. IPS es una firma electrónica
- C. Ambos son exclusivamente gestores de contraseñas
- D. IDS siempre bloquea y IPS solo archiva

Explicación: La capacidad de prevención en línea diferencia al IPS del detector básico.

### Propuesta

¿Qué diferencia IDS e IPS según su función básica?

- A. IDS detecta y alerta; un IPS puede impedir tráfico en línea. **(correcta)**
- B. IDS se limita al host; IPS se limita a dispositivos de red.
- C. IDS usa solo firmas; IPS usa solo detección de anomalías.
- D. IDS bloquea en línea; IPS se limita a detectar y alertar.

Explicación: La distinción funcional básica es detección y aviso frente a capacidad de prevención. Un IPS en línea puede bloquear tráfico conforme a su configuración. Arquitectura, métodos y productos pueden combinar capacidades; no se deduce que todo IPS bloquee siempre o carezca de alertas.

- Error B: Hay soluciones de red y de host; esa ubicación no define por sí sola la diferencia IDS/IPS.
- Error C: Firmas y anomalías son métodos de detección que no se reparten de forma exclusiva entre IDS e IPS.
- Error D: Invierte la distinción básica entre detector y capacidad de prevención en línea.

- [NIST SP 800-94: IDPS](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-94.pdf) · 2 Intrusion Detection and Prevention Principles, pp. 2-1 a 2-6; 3 IDPS Technologies; distinción IDS/IPS y métodos de detección · versión: Febrero de 2007; conceptos funcionales y de despliegue, sin trasladar referencias antiguas de respuesta como guía vigente · comprobado: 2026-10-28

Partida: `ae4834347be30a653a0b082063188ba4a8dd7b094b4fea3c007aaeec674d48ae` · propuesta: `d12e4d443e6facd2589403994b8faf23f5c675d7ce60c8a9e85aae2058e6a81f`

## AI-GSI-B2-T13-008

Decisión: pending_review · acción: revise.

Motivo: Mantener SIEM y clave A; cuatro categorías reales y aclaración de capacidades integradas.

### Antes

¿Qué herramienta centraliza y correlaciona logs?

- A. SIEM **(correcta)**
- B. SOAR como mera base de datos relacional
- C. SAI
- D. Compilador

Explicación: SIEM correlaciona eventos; SOAR orquesta y automatiza flujos de respuesta.

### Propuesta

¿Qué categoría de herramienta se centra en reunir y correlacionar registros de seguridad de distintas fuentes para detectar incidentes?

- A. SIEM. **(correcta)**
- B. SOAR.
- C. PAM.
- D. DLP.

Explicación: SIEM centraliza y analiza registros de distintas fuentes para correlacionar eventos y apoyar la detección e investigación. SOAR se centra en coordinar y automatizar flujos de respuesta. Una plataforma puede integrar ambas capacidades; la pregunta distingue la función principal descrita.

- Error B: SOAR se orienta a orquestación y automatización de respuesta, aunque pueda integrarse con SIEM.
- Error C: PAM controla acceso y uso de privilegios; no es la categoría centrada en correlacionar registros heterogéneos.
- Error D: DLP aplica políticas sobre datos sensibles; no define la función general de correlación de eventos de seguridad.

- [Microsoft Learn: Sentinel SIEM](https://learn.microsoft.com/en-us/azure/sentinel/overview) · Collect data at scale; Detect threats; analytics, normalización y combinación de alertas en incidentes · versión: Documentación pública consultada; ejemplo de SIEM con capacidades integradas, sin afirmar separación exclusiva SIEM/SOAR · comprobado: 2026-10-28
- [IBM: Security orchestration, automation and response](https://www.ibm.com/think/topics/security-orchestration-automation-response) · What is SOAR; Security orchestration; Security automation; playbooks y herramientas integradas · versión: Página primaria del fabricante consultada; descripción de función, no recomendación comercial o autorización para automatizar una respuesta real · comprobado: 2026-10-28
- [Microsoft Learn: Data Loss Prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp) · Introducción; políticas para identificar, monitorizar y proteger datos sensibles; canales y ubicaciones · versión: Documentación pública consultada; pese a banner genérico de autorización se leyó el cuerpo público, sin acceder a sesiones privadas · comprobado: 2026-10-28

Partida: `0508c5abcfceb692cc8cb409bbe2fd935c6ff59e24689261ef28bae6adbd3793` · propuesta: `293c260100d8bd12d143f8cc352f976d1feb2dbeb70e2a2ca7bde90df8cb0cbd`

## AI-GSI-B2-T13-010

Decisión: pending_review · acción: revise.

Motivo: Mantener análisis de dependencias y clave C; comparar SCA con SAST/DAST/IAST sin exclusividades artificiales de producto.

### Antes

¿Qué técnica analiza dependencias de software?

- A. DAST exclusivamente
- B. SAST exclusivamente
- C. SCA **(correcta)**
- D. DTMF

Explicación: SCA estudia componentes y dependencias; SAST analiza código y DAST la aplicación ejecutándose.

### Propuesta

¿Qué técnica se centra en identificar componentes y dependencias de terceros y contrastar sus versiones con vulnerabilidades conocidas?

- A. DAST.
- B. SAST.
- C. SCA. **(correcta)**
- D. IAST.

Explicación: SCA analiza composición de software, incluidos componentes y dependencias de terceros, y puede contrastar versiones con vulnerabilidades conocidas. SAST, DAST e IAST examinan otras perspectivas de la aplicación. Las herramientas pueden reunir varias técnicas; detectar una dependencia no prueba su explotabilidad en cada contexto.

- Error A: DAST evalúa el comportamiento de una aplicación en ejecución desde el exterior; no es el nombre de la técnica centrada en composición.
- Error B: SAST examina código o artefactos sin ejecutar la aplicación; no sustituye por definición el inventario y revisión de dependencias.
- Error D: IAST utiliza instrumentación y ejecución de la aplicación para observar su comportamiento; es una perspectiva diferente de SCA.

- [OWASP: Dependency-Check](https://owasp.org/www-project-dependency-check/) · Definición inicial y About: SCA, identificación de dependencias y vulnerabilidades públicas conocidas · versión: Página del proyecto consultada, redirige a /projects/dependency-check; no se instala ni recomienda ejecutar la herramienta · comprobado: 2026-10-28
- [OWASP: Source Code Analysis Tools](https://owasp.org/www-community/Source_Code_Analysis_Tools) · Introducción y nota sobre herramientas con varias capacidades: SAST, DAST y SCA · versión: Página comunitaria de OWASP consultada; análisis estático y límites de equiparar herramientas a una única técnica · comprobado: 2026-10-28
- [OWASP DevSecOps: Dynamic Application Security Testing](https://owasp.org/www-project-devsecops-guideline/latest/02b-Dynamic-Application-Security-Testing) · Dynamic Application Security Testing: evaluación de aplicación en ejecución desde su comportamiento externo · versión: Guía v0.2 en la URL consultada; descripción conceptual de DAST, sin ejecutar un escaneo o cargar payloads · comprobado: 2026-10-28
- [OWASP DevSecOps: Interactive Application Security Testing](https://owasp.github.io/DevSecOpsGuideline/2-Process/2-4-Test/2-4-1-Interactive-Application-Security-Testing/) · Introducción; How IAST differs from SAST and DAST: instrumentación de aplicación en ejecución · versión: Guía pública consultada; solo distinción de técnicas. No se adoptan porcentajes de falsos positivos o recomendaciones de compra de sus tablas · comprobado: 2026-10-28

Partida: `343f479d06c12affc300718533fec0fd1fcc2f6fc768e5a6569639150a2b0c36` · propuesta: `5759a99a84783680a757d055d6cb59f4312b2d170c6a77096962d6f302d40e67`

## AI-GSI-B2-T13-011

Decisión: pending_review · acción: revise.

Motivo: Mantener protección WAF y clave D; comparar controles próximos por su capa, sin prometer seguridad total.

### Antes

¿Qué protege específicamente un WAF?

- A. La alimentación eléctrica del CPD
- B. Todo fallo de lógica de negocio de forma garantizada
- C. La custodia física de soportes
- D. Aplicaciones HTTP frente a patrones de ataques de aplicación **(correcta)**

Explicación: El WAF filtra ataques de aplicación, pero no sustituye el desarrollo seguro.

### Propuesta

¿Qué protege específicamente un WAF?

- A. Las comunicaciones de red según direcciones y puertos de transporte.
- B. El canal de comunicación mediante un túnel cifrado entre extremos.
- C. Los procesos y archivos de equipos mediante controles del endpoint.
- D. Las solicitudes HTTP de una aplicación mediante reglas de filtrado. **(correcta)**

Explicación: Un WAF inspecciona solicitudes web y aplica reglas para permitirlas, contarlas o bloquearlas según el despliegue. Puede ayudar frente a patrones de ataque de aplicación, pero no corrige por sí mismo el código ni garantiza autorización o lógica de negocio correcta.

- Error A: El filtrado por direcciones y puertos caracteriza controles de red; no expresa la función específica de aplicación web del WAF.
- Error B: Un túnel cifrado protege un canal y no equivale a inspeccionar solicitudes web según reglas.
- Error C: Los controles de endpoint actúan sobre equipos y procesos; tienen un alcance distinto del filtrado HTTP de aplicación.

- [AWS: What is AWS WAF?](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html) · What is AWS WAF: inspección de solicitudes HTTP/HTTPS, reglas y acciones de permitir, bloquear o contar · versión: Documentación primaria del fabricante consultada; función de WAF según despliegue, no garantía contra toda lógica de negocio · comprobado: 2026-10-28
- [NIST SP 800-94: IDPS](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-94.pdf) · 2 Intrusion Detection and Prevention Principles, pp. 2-1 a 2-6; 3 IDPS Technologies; distinción IDS/IPS y métodos de detección · versión: Febrero de 2007; conceptos funcionales y de despliegue, sin trasladar referencias antiguas de respuesta como guía vigente · comprobado: 2026-10-28

Partida: `43a49659cd5acade6acb014e87a96d3db680849f1dec73f810ff1eb71c71705a` · propuesta: `2eee987f943ba53196642f4689b8144467aaf43a3e8b4b84baf8f443cdc63e31`

## AI-GSI-B2-T13-016

Decisión: pending_review · acción: revise.

Motivo: Conservar el caso existente de aislamiento, clave A; comparar actividades reales de respuesta usando revisión 3 vigente.

### Antes

Aislar un equipo comprometido para limitar propagación es…

- A. Contención **(correcta)**
- B. Certificación
- C. Lección aprendida exclusivamente
- D. Erradicación completa necesariamente

Explicación: Contener limita el daño; erradicar elimina causas y persistencia.

### Propuesta

Aislar un equipo comprometido para limitar la propagación del incidente es una actuación de…

- A. Contención del incidente para limitar su expansión. **(correcta)**
- B. Erradicación de las causas y persistencia del incidente.
- C. Recuperación del servicio y retorno a operación normal.
- D. Revisión de lecciones aprendidas para mejorar el proceso.

Explicación: Aislar el equipo para frenar propagación es contención. Puede ser necesario investigar y erradicar causas o persistencia y comprobar recuperación después. La medida limita expansión; no demuestra por sí sola que el equipo esté limpio ni que el incidente haya terminado.

- Error B: Erradicar requiere tratar causas, componentes maliciosos o persistencia; aislar la red no acredita haberlo hecho.
- Error C: Restaurar y validar operación es recuperación, distinta de separar el equipo para frenar el daño.
- Error D: La revisión posterior ayuda a mejorar, pero no es la actuación inmediata de aislamiento descrita.

- [NIST SP 800-61 Revision 3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf) · CSF RS.MI-01 y RS.MI-02, pp. 32–33 impresas: contención y erradicación · versión: Abril de 2025; sustituye revisión 2. No se impone un ciclo rígido de fases sin solapamiento · comprobado: 2026-10-28
- [NIST SP 800-61 Revision 3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf) · RC.RP-01 a RC.RP-06, p. 34 impresa: fuentes de restauración, integridad, causas, verificación y cierre por criterios · versión: Abril de 2025; retorno a operación y monitorización, distinto de restaurar disponibilidad sin más comprobaciones · comprobado: 2026-10-28

Partida: `b4c3be6d69ae743d8fcad8e05605ff94c00b4b0212cab62a22ea43d251f78b1a` · propuesta: `7e889622dd8968648ddc1402a51a831b16decdc7bf6cbb36fec22de61a9ad95d`

## AI-GSI-B2-T13-017

Decisión: pending_review · acción: revise.

Motivo: Mantener aceptación y seguimiento de recuperación, clave D; caso de retorno tras restauración sin equiparar disponibilidad y recuperación segura.

### Antes

¿Qué debe preceder a la vuelta normal tras una recuperación?

- A. Reutilizar necesariamente credenciales comprometidas
- B. Restaurar sin corregir la vulnerabilidad
- C. Destrucción inmediata de todos los registros
- D. Criterios de aceptación y monitorización de recaídas **(correcta)**

Explicación: La recuperación exige fuentes confiables, corrección y comprobación de funcionamiento seguro.

### Propuesta

Tras restaurar un sistema afectado por un incidente, ¿qué debe comprobarse antes de dar por normalizada su operación?

- A. Reabrir el servicio en cuanto responda al primer sondeo de disponibilidad.
- B. Tomar el fin de la copia de respaldo como prueba suficiente de recuperación.
- C. Finalizar la monitorización al aceptar la restauración inicial de los archivos.
- D. Verificar criterios de retorno seguro y mantener vigilancia tras restaurar. **(correcta)**

Explicación: El retorno debe comprobar integridad de fuentes y activos restaurados, corrección de causas pertinentes y funcionamiento seguro conforme a criterios. También requiere monitorización y decisión de cierre documentada. Que el servicio responda o termine una copia no demuestra todo ello.

- Error A: Responder a un sondeo confirma una condición de disponibilidad, no ausencia de compromiso o adecuación de la restauración.
- Error B: Terminar una copia no acredita integridad, funcionamiento ni tratamiento de la causa del incidente.
- Error C: Aceptar archivos restaurados no elimina la necesidad de observar el comportamiento y detectar problemas tras el retorno.

- [NIST SP 800-61 Revision 3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf) · RC.RP-01 a RC.RP-06, p. 34 impresa: fuentes de restauración, integridad, causas, verificación y cierre por criterios · versión: Abril de 2025; retorno a operación y monitorización, distinto de restaurar disponibilidad sin más comprobaciones · comprobado: 2026-10-28

Partida: `bbb4caa63ab7d1e5e4ed4db73c63c203c46e6cf6fde0a609eff207fe86d1b408` · propuesta: `1690eaac8405169e8d8181e0b84de455d0fc463d013062a0b348264b147d945d`

## AI-GSI-B2-T13-018

Decisión: pending_review · acción: revise.

Motivo: Mantener preservación forense y clave A; prácticas próximas de copia, metadatos y adquisición, con excepciones de datos vivos.

### Antes

¿Qué práctica es esencial en análisis forense?

- A. Preservar originales y trabajar sobre copias cuando sea posible **(correcta)**
- B. Editar siempre directamente el original
- C. Eliminar metadatos antes de adquirir
- D. Cambiar todos los relojes sin documentarlo

Explicación: La preservación limita alteraciones y mantiene trazabilidad de la evidencia.

### Propuesta

¿Qué práctica es esencial en análisis forense?

- A. Preservar originales y analizar copias verificadas cuando sea posible. **(correcta)**
- B. Analizar el soporte original para evitar generar copias adicionales.
- C. Normalizar las fechas antes de registrar sus valores y zona horaria de origen.
- D. Conservar los archivos extraídos y descartar la imagen y el registro de adquisición.

Explicación: La preservación y el trabajo sobre copias verificadas reducen alteraciones y permiten contrastar resultados. Deben documentarse adquisición, cambios inevitables y custodia. Capturas de sistemas vivos o datos volátiles pueden exigir decisiones específicas; no se afirma que toda adquisición sea idéntica o no modifique nada.

- Error B: Analizar directamente puede alterar datos o metadatos y dificultar repetir el examen; ahorrar copias no justifica perder preservación cuando es viable.
- Error C: Las fechas originales y su contexto deben registrarse antes de transformarlas para analizar; de otro modo se pierde información de referencia.
- Error D: Los archivos extraídos pueden omitir datos y metadatos. Descartar imagen y documentación perjudica trazabilidad y revisión del proceso.

- [NIST SP 800-86: Forensic Techniques into Incident Response](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf) · 3.1.2 Acquiring the Data, pp. 3-3 a 3-5; 4.2.1 Copying Files from Media, pp. 4-6 a 4-7; 4.2.2 Data File Integrity, pp. 4-7 a 4-8; 4.2.3 File Modification, Access, and Creation Times, p. 4-9 · versión: Agosto de 2006; preservación y trazabilidad, no asesoramiento jurídico o recomendación actual de MD5/SHA-1 citados históricamente · comprobado: 2026-10-28

Partida: `fd49c6681947b0d00e6ca4de7461b00f34b4e5554aaa3305279747e4a8c7720c` · propuesta: `7d60206f85dd721123fbb9c7f59b4aa2d5b1928a3751f5450560abca1e9dcf81`

## AI-GSI-B2-T13-019

Decisión: pending_review · acción: revise.

Motivo: Mantener integridad relativa de copia y clave C; microcaso con SHA-256 y límites de referencia/colisiones explícitos.

### Antes

¿Qué demuestra un hash coincidente de una copia forense respecto a la muestra?

- A. Quién creó necesariamente el archivo
- B. La licitud de toda adquisición
- C. Coincidencia e integridad respecto a esa muestra **(correcta)**
- D. La inexistencia de malware

Explicación: El hash verifica coincidencia; no sustituye autoría, autorización ni análisis.

### Propuesta

Una copia forense y su muestra de referencia fiable producen el mismo SHA-256. ¿Qué conclusión respalda esa comprobación?

- A. La identidad de la persona que creó el contenido adquirido.
- B. La autorización y licitud de la adquisición y de su uso posterior.
- C. Evidencia de integridad respecto a la muestra comparada. **(correcta)**
- D. La ausencia de contenido malicioso dentro de los datos adquiridos.

Explicación: Con un algoritmo adecuado y una referencia fiable, el hash coincidente respalda que la copia conserva el contenido comparado. Es una comprobación relativa, bajo supuestos criptográficos; no prueba autoría, licitud, ausencia de malware o custodia completa, ni igualdad matemática sin posibilidad de colisiones.

- Error A: El resumen se calcula a partir de bytes y no identifica por sí mismo a su creador.
- Error B: La autorización y el cumplimiento de requisitos de adquisición se acreditan por otros medios; no los decide el hash.
- Error D: Una copia íntegra puede contener el mismo malware que la muestra. Integridad de la copia no equivale a seguridad de su contenido.

- [NIST SP 800-86: Forensic Techniques into Incident Response](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf) · 3.1.2 Acquiring the Data, pp. 3-3 a 3-5; 4.2.1 Copying Files from Media, pp. 4-6 a 4-7; 4.2.2 Data File Integrity, pp. 4-7 a 4-8; 4.2.3 File Modification, Access, and Creation Times, p. 4-9 · versión: Agosto de 2006; preservación y trazabilidad, no asesoramiento jurídico o recomendación actual de MD5/SHA-1 citados históricamente · comprobado: 2026-10-28
- [RFC Editor: RFC 6234, Secure Hash Algorithms](https://www.rfc-editor.org/rfc/rfc6234) · 1 Overview of Contents: resumen, resistencia computacional y alta probabilidad de detectar cambios; 6 Computing the Message Digest · versión: Informational, mayo de 2011; conceptos y SHA-256 para el ejemplo. No se recomiendan SHA-1 o algoritmos antiguos por aparecer en el texto · comprobado: 2026-10-28

Partida: `ea179917fbb3909656b5d6dd5860ce13a940d4ef67e0463b0de4760668a2b5de` · propuesta: `e64e42534c1f70140e8d2bb91b8a11ddb832863d32f66a611ff4ed81adad007a`

## AI-GSI-B2-T13-009

Decisión: pending_review · acción: revise.

Motivo: Mantener SOAR y clave B; comparar categorías próximas sin negar funciones combinadas de plataformas.

### Antes

¿Qué herramienta se orienta a orquestar y automatizar respuesta?

- A. DNS
- B. SOAR **(correcta)**
- C. XSD
- D. RAID

Explicación: SOAR ejecuta flujos de respuesta; no es un formato XML ni un mecanismo de almacenamiento.

### Propuesta

¿Qué herramienta se orienta a orquestar y automatizar respuesta?

- A. SIEM.
- B. SOAR. **(correcta)**
- C. DLP.
- D. PAM.

Explicación: SOAR integra herramientas y coordina flujos de respuesta, con automatización de tareas y aprobaciones según el playbook y los permisos. Puede recibir alertas del SIEM. Automatizar no elimina la necesidad de criterios, supervisión y control de efectos de las acciones.

- Error A: SIEM se centra en recoger y analizar eventos para detección e investigación; puede integrarse con automatización, pero no es la categoría nombrada por esa función de orquestación.
- Error C: DLP se centra en políticas de datos sensibles y sus usos o salidas, no en la orquestación general de respuesta.
- Error D: PAM gestiona el uso de privilegios; puede participar en un flujo, pero no define su orquestación entre herramientas.

- [IBM: Security orchestration, automation and response](https://www.ibm.com/think/topics/security-orchestration-automation-response) · What is SOAR; Security orchestration; Security automation; playbooks y herramientas integradas · versión: Página primaria del fabricante consultada; descripción de función, no recomendación comercial o autorización para automatizar una respuesta real · comprobado: 2026-10-28
- [Microsoft Learn: Sentinel SIEM](https://learn.microsoft.com/en-us/azure/sentinel/overview) · Collect data at scale; Detect threats; analytics, normalización y combinación de alertas en incidentes · versión: Documentación pública consultada; ejemplo de SIEM con capacidades integradas, sin afirmar separación exclusiva SIEM/SOAR · comprobado: 2026-10-28
- [Microsoft Learn: Data Loss Prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp) · Introducción; políticas para identificar, monitorizar y proteger datos sensibles; canales y ubicaciones · versión: Documentación pública consultada; pese a banner genérico de autorización se leyó el cuerpo público, sin acceder a sesiones privadas · comprobado: 2026-10-28

Partida: `d5a3b6dd27832635fa5f818c56497b1b4ca19cc03de9da032b18e41240b446c0` · propuesta: `1b894f58b5dfcae782709156415d91fa66df04aaabf19a79ea79b2d5e321e8bb`

## AI-GSI-B2-T13-012

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación DLP y clave C: distractores ya pertinentes; alinear feedback con PAM/SOAR/SIEM en lugar de materias que no aparecen en las opciones.

### Antes

¿Qué capacidad se asocia a DLP?

- A. Administrar sesiones y credenciales privilegiadas como función de PAM
- B. Orquestar playbooks de respuesta como función de SOAR
- C. Detectar o controlar salida de datos sensibles **(correcta)**
- D. Correlacionar registros y generar alertas como función central de SIEM

Explicación: DLP aplica políticas sobre datos sensibles y su salida, no sobre alimentación ni resolución de nombres.

### Propuesta

¿Qué capacidad se asocia a DLP?

- A. Administrar sesiones y credenciales privilegiadas como función de PAM
- B. Orquestar playbooks de respuesta como función de SOAR
- C. Detectar o controlar salida de datos sensibles **(correcta)**
- D. Correlacionar registros y generar alertas como función central de SIEM

Explicación: DLP identifica datos sensibles y aplica políticas para detectar o controlar usos y salidas no autorizados. Su cobertura depende de canales, clasificación y configuración; no garantiza impedir cualquier fuga. Se distingue de PAM, SOAR y SIEM por la finalidad principal de sus controles, aunque puedan integrarse.

- Error A: PAM administra credenciales, sesiones y acceso privilegiado; no es la función principal de control de datos sensibles descrita.
- Error B: Orquestar playbooks de respuesta es función de SOAR; DLP puede aportar señales o acciones a esos flujos.
- Error D: SIEM correlaciona registros y produce señales de seguridad; no sustituye las políticas sobre contenido sensible de DLP.

- [Microsoft Learn: Data Loss Prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp) · Introducción; políticas para identificar, monitorizar y proteger datos sensibles; canales y ubicaciones · versión: Documentación pública consultada; pese a banner genérico de autorización se leyó el cuerpo público, sin acceder a sesiones privadas · comprobado: 2026-10-28
- [IBM: Security orchestration, automation and response](https://www.ibm.com/think/topics/security-orchestration-automation-response) · What is SOAR; Security orchestration; Security automation; playbooks y herramientas integradas · versión: Página primaria del fabricante consultada; descripción de función, no recomendación comercial o autorización para automatizar una respuesta real · comprobado: 2026-10-28
- [Microsoft Learn: Sentinel SIEM](https://learn.microsoft.com/en-us/azure/sentinel/overview) · Collect data at scale; Detect threats; analytics, normalización y combinación de alertas en incidentes · versión: Documentación pública consultada; ejemplo de SIEM con capacidades integradas, sin afirmar separación exclusiva SIEM/SOAR · comprobado: 2026-10-28

Partida: `7b2f84130734cf827c833c93b291de0aaeb3ba68cdf23a982d7736e80f5dc520` · propuesta: `c8264eb56fc750c53ed3b3e4b14a93794498751e2a6af920dfcfb0c854bf167a`

## AI-GSI-B2-T13-013

Decisión: pending_review · acción: revise.

Motivo: Mantener hash frente a cifrado y clave A; distinguir dificultad computacional, codificación y firma, sin afirmar imposibilidad absoluta de adivinar entradas.

### Antes

¿Qué propiedad caracteriza a un hash criptográfico frente al cifrado?

- A. Es una función unidireccional y no un mecanismo reversible de confidencialidad **(correcta)**
- B. Aporta por sí solo identidad del autor
- C. Requiere publicar la clave privada
- D. Permite recuperar siempre el mensaje original

Explicación: Hash sirve para integridad y derivaciones; no cifra ni identifica por sí solo al creador.

### Propuesta

¿Qué propiedad caracteriza a un hash criptográfico frente al cifrado?

- A. Produce un resumen sin una operación de descifrado que recupere el mensaje. **(correcta)**
- B. Produce texto cifrado que se recupera usando la clave complementaria.
- C. Produce una codificación reversible que no necesita una clave secreta.
- D. Produce una prueba de autoría mediante una clave privada del firmante.

Explicación: Un hash criptográfico produce un resumen y se diseña para dificultar computacionalmente hallar una preimagen. No es cifrado con operación de descifrado. Entradas previsibles pueden adivinarse y contrastarse; la unidireccionalidad no impide ese método ni convierte un hash sin clave en prueba de autoría.

- Error B: Describe recuperación de un mensaje cifrado mediante una clave. El hash no incluye esa operación inversa.
- Error C: Una codificación reversible, como Base64, permite reconstruir la entrada sin secreto y no tiene el objetivo de un hash criptográfico.
- Error D: La firma digital usa una clave privada y un esquema de verificación. Un resumen sin clave no acredita por sí solo quién creó el contenido.

- [RFC Editor: RFC 6234, Secure Hash Algorithms](https://www.rfc-editor.org/rfc/rfc6234) · 1 Overview of Contents: resumen, resistencia computacional y alta probabilidad de detectar cambios; 6 Computing the Message Digest · versión: Informational, mayo de 2011; conceptos y SHA-256 para el ejemplo. No se recomiendan SHA-1 o algoritmos antiguos por aparecer en el texto · comprobado: 2026-10-28
- [RFC Editor: RFC 2104, HMAC](https://www.rfc-editor.org/rfc/rfc2104) · 1 Introduction; 2 Definition of HMAC; 3 Keys; 6 Security: autenticación mediante hash y secreto compartido · versión: Febrero de 1997; construcción histórica vigente como concepto, no recomendación de MD5/SHA-1 ni norma actual de selección de claves · comprobado: 2026-10-28

Partida: `b24348501adbbd63c8b839daccda712ca0e44037486bd230eadd2eada02aeebe` · propuesta: `612fad83c9ddd82f63b95ae6188ed136286d43c684d0d76bb0da21e88cf2e855`

## AI-GSI-B2-T13-014

Decisión: pending_review · acción: revise.

Motivo: Mantener autenticación mediante hash y secreto compartido, clave B; cuatro mecanismos criptográficos reales, límites de confidencialidad y atribución claros.

### Antes

¿Qué mecanismo autentica integridad utilizando una clave compartida?

- A. Codificación Base64
- B. HMAC **(correcta)**
- C. Compresión ZIP
- D. Hash sin clave como prueba universal de autoría

Explicación: HMAC combina hash y clave compartida; una codificación o un hash sin clave no ofrece esa autenticación.

### Propuesta

¿Qué mecanismo usa una función hash y una clave compartida para autenticar la integridad de un mensaje?

- A. SHA-256 sin clave.
- B. HMAC-SHA-256. **(correcta)**
- C. AES-CBC sin MAC.
- D. Firma RSA-PSS.

Explicación: HMAC usa una función hash y una clave secreta compartida para generar y verificar una etiqueta de autenticación. Permite detectar modificaciones no autorizadas bajo los supuestos del esquema. No cifra el mensaje y no distingue ante un tercero cuál de los poseedores de la clave generó la etiqueta.

- Error A: Un hash sin clave puede recalcularse por cualquiera que cambie los datos; por sí solo no autentica frente a ese atacante.
- Error C: El cifrado CBC sin autenticación no proporciona por sí mismo una etiqueta de integridad y autenticidad del mensaje.
- Error D: RSA-PSS es un esquema de firma asimétrica, con clave privada de firma y pública de verificación, distinto de un secreto compartido.

- [RFC Editor: RFC 2104, HMAC](https://www.rfc-editor.org/rfc/rfc2104) · 1 Introduction; 2 Definition of HMAC; 3 Keys; 6 Security: autenticación mediante hash y secreto compartido · versión: Febrero de 1997; construcción histórica vigente como concepto, no recomendación de MD5/SHA-1 ni norma actual de selección de claves · comprobado: 2026-10-28
- [NIST: FIPS 198-1, HMAC](https://csrc.nist.gov/pubs/fips/198-1/final) · Abstract; Planning Note de 23-06-2025 y Document History: clave secreta compartida y traslado propuesto a SP 800-224 · versión: Julio de 2008; ficha consultada anuncia propuesta de retirada, sin presumirla consumada. SP 800-224 consultado figura como Initial Public Draft de junio de 2024 · comprobado: 2026-10-28
- [RFC Editor: RFC 4231, HMAC-SHA test vectors](https://www.rfc-editor.org/rfc/rfc4231) · 4.2 Test Case 1 y 4.3 Test Case 2: HMAC-SHA-256 · versión: Diciembre de 2005; vectores públicos para ejemplos con hashlib/hmac, sin generar o leer secretos reales · comprobado: 2026-10-28

Partida: `c9eed922d0bf06608a8c7bea1c82db5b041553b1cc0dff8a507c0b62d6f79e28` · propuesta: `ca16497b03a295e8632ea017940b4499579ed48f8a1e269493d9abc9a7149186`
