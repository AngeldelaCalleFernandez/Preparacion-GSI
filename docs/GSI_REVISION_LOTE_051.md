# GSI-EDITORIAL-051 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `2704c84eb692c47958caa509fc1adbfc02e4cd8b42e498fa815033a47256429b`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P18-145

Decisión: pending_review · acción: revise.

Motivo: Conservar wiki como conocimiento colaborativo y clave C; microcaso de guías enlazadas con alternativas funcionales próximas, sin firewall o protocolo de voz.

### Antes

¿Qué papel tiene una wiki interna?

- A. Sustituir todas las bases de datos transaccionales.
- B. Actuar como firewall.
- C. Capturar y enlazar conocimiento colaborativo con historial y edición controlada. **(correcta)**
- D. Ser un protocolo de voz.

Explicación: Las wikis son útiles para conocimiento vivo, con necesidad de gobernanza y revisión.

### Propuesta

Un equipo quiere mantener guías internas enlazadas y revisadas por varios autores. ¿Qué función aporta una wiki?

- A. Ejecutar operaciones de negocio sobre registros sujetos a transacciones.
- B. Publicar avisos institucionales mediante un canal editorial centralizado.
- C. Mantener conocimiento enlazado, editable y con historial de revisiones. **(correcta)**
- D. Atender consultas en conversaciones sin una estructura común de páginas.

Explicación: Una wiki permite construir conocimiento mediante páginas enlazadas que varios autores revisan y actualizan, con historial y permisos según configuración. Ayuda a mantener guías vivas y explicar cambios, sin garantizar que todo contenido sea correcto o esté actualizado. MediaWiki ilustra documentación colaborativa, revisiones y derechos de edición. Hacer interna una wiki requiere configurar accesos: restringir lectura de páginas no protege automáticamente los archivos subidos. No sustituye por sí sola transacciones, publicación institucional o conversación inmediata.

- Error A: Los registros y transacciones resuelven otra responsabilidad. Pueden enlazarse desde una guía, pero no son la función principal de documentación colaborativa de la wiki.
- Error B: Un canal editorial de avisos puede informar al equipo, pero no aporta por sí solo la estructura de páginas enlazadas que los autores mantienen conjuntamente.
- Error D: La conversación facilita consultas; sin organizar y mantener páginas de referencia no cubre la función de conocimiento enlazado que se solicita.

- [MediaWiki: Collaboration and documentation platform](https://www.mediawiki.org/wiki/MediaWiki) · Presentación: collect and organise knowledge y disponibilidad para personas; plataforma colaborativa de documentación · versión: Página del proyecto consultada el 28-10-2026, sin atribuir una versión de software instalada o evaluación de producto · comprobado: 2026-10-28
- [MediaWiki: Help:History](https://www.mediawiki.org/wiki/Help:History) · Summary; comparación de revisiones; Linking to a particular version of a page; acceso restringido a revisiones eliminadas · versión: Ayuda pública leída el 28-10-2026; pie identifica oldid8524540. El historial depende de permisos y conservación, no garantiza exactitud del contenido · comprobado: 2026-10-28
- [MediaWiki: Manual:User rights](https://www.mediawiki.org/wiki/Manual:User_rights) · Grupos y permisos de lectura/edición; User rights, nota de read y acceso directo a ficheros subidos · versión: Manual vivo consultado el 28-10-2026. Los permisos de páginas no protegen automáticamente los archivos subidos; ejemplo funcional, sin configurar una wiki · comprobado: 2026-10-28

Partida: `3f4f66c3576e1e3e659fb79ad9223337693245da5d6214641d42922270cbae72` · propuesta: `284e7fb029314e78a9b424dbbddc81385871dd8b107a3bb4143d9ff567a2fbc9`

## MAN-GSI-P18-146

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave D; reconocer solapamientos sin confundir red social corporativa con portal, wiki o chat.

### Antes

¿Qué es una red social corporativa?

- A. Portal interno orientado a publicar información corporativa estructurada de forma principalmente unidireccional.
- B. Repositorio colaborativo de páginas enlazadas que conserva historial y permite edición compartida.
- C. Herramienta de mensajería en tiempo real centrada en conversaciones directas, grupos y canales.
- D. Un entorno de interacción y difusión social dentro de una organización o comunidad controlada. **(correcta)**

Explicación: Puede complementar canales formales, pero requiere política, moderación y retención.

### Propuesta

¿Qué es una red social corporativa?

- A. Portal interno orientado a publicar información corporativa estructurada de forma principalmente unidireccional.
- B. Repositorio colaborativo de páginas enlazadas que conserva historial y permite edición compartida.
- C. Herramienta de mensajería en tiempo real centrada en conversaciones directas, grupos y canales.
- D. Un entorno de interacción y difusión social dentro de una organización o comunidad controlada. **(correcta)**

Explicación: Una red social corporativa facilita interacción, difusión, comunidades y relaciones dentro de una organización o comunidad gobernada. Puede compartir noticias, preguntas y conocimiento y complementar canales formales. Viva Engage ejemplifica el foco en comunidades y conversaciones; una plataforma puede integrar wiki, portal y chat. Se distingue el foco funcional sin afirmar que esas familias sean incompatibles o que toda red corporativa deba ser pública en Internet.

- Error A: El portal de publicación principalmente unidireccional tiene un foco editorial distinto; puede incluir funciones sociales sin definir por sí solo la red de interacción preguntada.
- Error B: Las páginas enlazadas con edición e historial describen el foco wiki; pueden integrarse en colaboración, pero no agotan la interacción social.
- Error C: La mensajería inmediata prioriza conversación directa o por canales. Puede coexistir con la red corporativa, cuyo alcance de comunidades y difusión es más amplio.

- [Microsoft: Introducing Viva Engage](https://learn.microsoft.com/en-us/viva/engage/overview) · Introducción; How is Viva Engage different from Viva Connections?: comunidades, conversaciones y conocimiento en la organización · versión: Página actualizada 30-09-2026, consultada el 28-10-2026. Ejemplo de red corporativa, sin imponer producto o frontera excluyente frente a chat/wiki/portal · comprobado: 2026-10-28
- [MediaWiki: Collaboration and documentation platform](https://www.mediawiki.org/wiki/MediaWiki) · Presentación: collect and organise knowledge y disponibilidad para personas; plataforma colaborativa de documentación · versión: Página del proyecto consultada el 28-10-2026, sin atribuir una versión de software instalada o evaluación de producto · comprobado: 2026-10-28

Partida: `0c86793faba8f9309f5837f9ccc0f81fee382f682a8fd9e2d33758e051259e2b` · propuesta: `f87aae6b305e1feac45ef044236e7fd04fb57e8bb6c3704487f60cab3ee3ad0e`

## MAN-GSI-P18-147

Decisión: pending_review · acción: revise.

Motivo: Conservar red social como apoyo y clave B; microcaso de solicitudes formales con registro, identificación y notificación como confusiones cercanas.

### Antes

¿Qué precaución debe tener una Administración al usar redes sociales públicas?

- A. Publicar datos personales para facilitar atención.
- B. No convertirlas en único canal para trámites o información que requiera garantías formales. **(correcta)**
- C. Usar cuentas sin control institucional.
- D. Eliminar alternativas accesibles.

Explicación: Las redes sociales son canales de comunicación, no sustitutos automáticos del canal administrativo garantizado.

### Propuesta

Una Administración quiere usar una red social pública como único canal para solicitudes que exigen presentación formal. ¿Qué precaución debe tomar?

- A. Tratar todo mensaje privado enviado a la cuenta oficial como asiento registral.
- B. Mantener los canales y garantías exigibles del trámite, usando la red como apoyo. **(correcta)**
- C. Exigir a todo interesado una cuenta en la red como identificación administrativa.
- D. Dar por notificado a cada seguidor que haya podido ver una publicación.

Explicación: Una red pública puede comunicar o ayudar, pero no sustituye automáticamente los canales y garantías exigidos para presentar solicitudes, identificar al interesado o notificar. Debe remitirse a los medios legalmente habilitados y conservar asistencia y accesibilidad según el caso. LPAC regula registro, presentación y notificaciones; su artículo14 también establece sujetos obligados a medios electrónicos. No se afirma que cualquier interesado pueda elegir papel para cualquier trámite, ni que seguir una cuenta equivalga a identificarse y recibir una notificación formal.

- Error A: Enviar un mensaje a una cuenta oficial no acredita por sí mismo el asiento y garantías del registro administrativo. Debe usarse el medio habilitado para la presentación exigida.
- Error C: Una cuenta de una plataforma social no se convierte por decisión informal en el mecanismo general de identificación administrativa previsto legalmente.
- Error D: La posibilidad de ver una publicación no acredita los requisitos de una notificación al interesado; seguir la cuenta no equivale a esa recepción formal.

- [BOE: Ley39/2015, LPAC](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) · 12–14 asistencia, derechos y sujetos obligados; 16.1 y16.4 registro/presentación; 41 y43 requisitos de notificación electrónica · versión: Consolidado informativo consultado, actualización global publicada 06-11-2024. No se confunde elección de medios con ausencia de obligaciones del artículo14 · comprobado: 2026-10-28

Partida: `afd1d95b973bd56ccf959b00a710306fc1f7b4abfb421600273ad5dbde0b95f1` · propuesta: `934cb8f18d60513a31de2a724806f1ce359bd3001a34beedee5d232fa9d811eb`

## MAN-GSI-P18-148

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave A; distinguir automatismo, acceso y auditoría de gobierno moderador, sin imponer revisión humana universal.

### Antes

¿Qué es moderación?

- A. Aplicación de reglas para gestionar contenido, abuso, spam y convivencia en espacios de participación. **(correcta)**
- B. Clasificación automática de contenido mediante reglas o modelos, sin intervención ni decisión de gobierno.
- C. Control de acceso que determina qué usuarios pueden publicar, leer o administrar cada espacio.
- D. Registro de auditoría que conserva eventos y acciones para permitir trazabilidad y revisión posterior.

Explicación: La moderación necesita criterios, roles y trazabilidad.

### Propuesta

¿Qué es moderación?

- A. Aplicación de reglas para gestionar contenido, abuso, spam y convivencia en espacios de participación. **(correcta)**
- B. Clasificación automática de contenido mediante reglas o modelos, sin intervención ni decisión de gobierno.
- C. Control de acceso que determina qué usuarios pueden publicar, leer o administrar cada espacio.
- D. Registro de auditoría que conserva eventos y acciones para permitir trazabilidad y revisión posterior.

Explicación: Moderar es aplicar reglas y decisiones de gobierno para gestionar participación, contenido, spam y abuso, con criterios y responsables. Puede combinar automatismos, avisos y revisión humana; no exige revisar manualmente cada mensaje. Microsoft muestra reglas de palabras clave, roles y acciones de moderación con información de actor y fecha. Clasificación automática, permisos y registros pueden apoyar el proceso, pero no constituyen por separado toda la política y actuación moderadora.

- Error B: Clasificar automáticamente puede detectar contenido para revisar; sin criterios y decisiones de gobierno no define por sí solo toda la moderación.
- Error C: El acceso determina quién puede participar o administrar. Moderar además gestiona lo publicado y la convivencia conforme a reglas.
- Error D: La auditoría conserva evidencia de acciones; ayuda a revisarlas, pero registrar no equivale a decidir y aplicar medidas sobre participación o contenido.

- [Microsoft: Advanced moderation, keyword monitoring for Viva Engage admins](https://learn.microsoft.com/en-us/viva/engage/lmc-keyword-monitoring-howto-for-admin-audience) · Who can use this feature; Use keyword monitoring: reglas y revisión, acciones de silenciar/cerrar/eliminar/descartar, actor y fecha; salvaguardas · versión: Página actualizada 20-05-2026 según pie, consultada el 28-10-2026. Ejemplo de moderación con reglas y roles; no exige decisión humana para toda operación automática · comprobado: 2026-10-28

Partida: `97dd944ac31c5f44dcb5ab832bd0fac8107cf12507fbc00a83d96f807927853d` · propuesta: `9c1402ce4f9f0bfb9575c10aeb04c266b727702e17004595e39da1a91e79dadd`

## MAN-GSI-P18-149

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave D; distinguir DLP de derechos, retención y cifrado con límites de cobertura.

### Antes

¿Qué es DLP en gestión de contenidos?

- A. Controles de gestión de derechos que restringen reproducción, copia o apertura de un contenido protegido.
- B. Reglas de conservación que determinan cuánto tiempo se mantiene un documento y cuál será su disposición final.
- C. Cifrado de repositorios para proteger la confidencialidad de la información almacenada frente a accesos directos.
- D. Controles para detectar o restringir salida/uso inadecuado de información sensible. **(correcta)**

Explicación: DLP puede complementar clasificación, permisos y monitorización.

### Propuesta

¿Qué es DLP en gestión de contenidos?

- A. Controles de gestión de derechos que restringen reproducción, copia o apertura de un contenido protegido.
- B. Reglas de conservación que determinan cuánto tiempo se mantiene un documento y cuál será su disposición final.
- C. Cifrado de repositorios para proteger la confidencialidad de la información almacenada frente a accesos directos.
- D. Controles para detectar o restringir salida/uso inadecuado de información sensible. **(correcta)**

Explicación: DLP reúne controles para identificar información sensible y detectar o limitar su uso o compartición inadecuados. Puede observar datos en reposo, en uso o en tránsito y actuar con aviso, bloqueo u otras medidas según política. Complementa clasificación, permisos, cifrado y gestión de derechos; no garantiza impedir toda fuga. Purview ejemplifica reglas que necesitan planificación, pruebas y ajuste para equilibrar protección y actividad legítima.

- Error A: La gestión de derechos restringe usos de contenido protegido; puede complementar DLP, pero no define todo el control de detección y prevención de compartición inadecuada.
- Error B: La retención gobierna plazos y destino del documento. No equivale a detectar o restringir usos o salidas indebidas.
- Error C: Cifrar en reposo protege frente a ciertos accesos directos. No resuelve por sí solo qué hace con los datos un usuario autorizado o cómo los comparte.

- [Microsoft Purview: Learn about data loss prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp) · Definición; Protective actions of DLP policies; datos en reposo/uso/movimiento; planificación, prueba, ajuste y políticas · versión: Documentación viva consultada el 28-10-2026. DLP no es garantía de cero fugas ni equivalente a cifrado, DRM o retención; sin desplegar políticas · comprobado: 2026-10-28

Partida: `2fbf5857b6589edb4556c6d4d1292f96e256372185e1cf00ffb6d707a6c97ad6` · propuesta: `1ab4e381bda8628d082d9ccb49aefb79ad75d27950483e8621241809377c8bc9`

## MAN-GSI-P18-150

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra pregunta y clave C; respaldar sensibilidad con ENSmp.info.5 y compatibilizar limpieza para destinatario con metadatos internos de gestión.

### Antes

¿Por qué los metadatos también requieren protección?

- A. Los metadatos quedan fuera de la protección porque describen el recurso y no forman parte de su contenido principal.
- B. El cifrado del contenido convierte automáticamente en anónimos los nombres, fechas, autores y relaciones expuestos.
- C. Pueden revelar información sensible sobre personas, expedientes, clasificación o contexto aunque el contenido esté protegido. **(correcta)**
- D. Eliminar el título basta para impedir que otros campos permitan identificar personas, expedientes o contexto sensible.

Explicación: La sensibilidad no reside solo en el cuerpo del documento.

### Propuesta

¿Por qué los metadatos también requieren protección?

- A. Los metadatos quedan fuera de la protección porque describen el recurso y no forman parte de su contenido principal.
- B. El cifrado del contenido convierte automáticamente en anónimos los nombres, fechas, autores y relaciones expuestos.
- C. Pueden revelar información sensible sobre personas, expedientes, clasificación o contexto aunque el contenido esté protegido. **(correcta)**
- D. Eliminar el título basta para impedir que otros campos permitan identificar personas, expedientes o contexto sensible.

Explicación: Nombre, autor, fechas, relaciones, comentarios y otros metadatos pueden revelar identidad, asunto o contexto sensible aunque el cuerpo esté protegido. Su exposición necesita analizar destinatario, finalidad y permisos. El ENS contempla limpiar información adicional no pertinente para el receptor, especialmente al difundir documentos. Esto no autoriza borrar indiscriminadamente metadatos de gestión del repositorio: la NTI exige conservar los necesarios vinculados al documento. Se coordinan preservación interna y minimización de lo que se comunica.

- Error A: Describir un recurso no excluye sensibilidad o necesidad de protección; el contexto y las relaciones también pueden revelar información.
- Error B: Cifrar el cuerpo no anonimiza automáticamente campos que siguen accesibles; los metadatos deben incluirse en el análisis de exposición.
- Error D: Otros campos, combinados o por separado, pueden identificar personas o contexto. Eliminar solo el título no garantiza impedirlo.

- [BOE: Real Decreto311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · 20 mínimo privilegio; anexoII op.acc, op.exp.6 código dañino, op.exp.8 registros y op.mon monitorización; mp.info.5 limpieza de metadatos; mp.info.6 copias; op.cont.1–4 continuidad · versión: Consolidación informativa, actualización global publicada 06-11-2024. Aplicación/refuerzos según nivel o categoría; op.cont.1 medio/alto, op.cont.2–4 alto; mp.info.6 R1 medio/alto yR2 alto · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 tratamiento continuo del ciclo y contexto; VI procesos, conservación/transferencia/disposición; VII metadatos vinculados; VIII procedimientos y X auditoría · versión: Resolución28-06-2012, texto inicial publicado26-07-2012. Sus remisiones a normas históricas no se presentan como vigentes; se contrastan con LPAC39/2015 y ENS311/2022 · comprobado: 2026-10-28

Partida: `fa3c168fc7ff4a8a0ec6c996ca1607096244e9105590e1d8317a5007e3e0e38b` · propuesta: `0a22eac43dd058275c28a41a254be86e4a0d2e1a3e05196e72b3d7d8893fdcc6`

## MAN-GSI-P18-151

Decisión: pending_review · acción: revise.

Motivo: Conservar reducción de malware y clave D; tres controles cercanos como distractores, sin garantías jurídicas o sustitución de permisos.

### Antes

¿Qué función tiene el antivirus/sandbox de ficheros en un repositorio?

- A. Sustituir permisos.
- B. Garantizar que todo documento es jurídicamente válido.
- C. Crear metadatos automáticamente sin error.
- D. Reducir riesgo de almacenar o distribuir archivos maliciosos mediante análisis y aislamiento. **(correcta)**

Explicación: El control de malware es una capa de seguridad, no reemplaza IAM ni gobierno.

### Propuesta

¿Qué función tiene el antivirus/sandbox de ficheros en un repositorio?

- A. Detectar información sensible y decidir si puede compartirse con externos.
- B. Verificar la firma del documento y la identidad de quien lo suscribe.
- C. Calcular la conservación conforme a la serie documental que se le asigna.
- D. Analizar archivos y aislar su ejecución para reducir el riesgo de malware. **(correcta)**

Explicación: El análisis antimalware busca indicios de contenido malicioso; una sandbox permite observar comportamiento en un entorno aislado y controlado. Son capas de reducción de riesgo y pueden fallar por amenazas desconocidas o evasión; no garantizan inocuidad, validez jurídica o ausencia de errores de metadatos. OWASP recomienda combinar validación, permisos, almacenamiento adecuado y análisis, sin confiar en una única técnica. El repositorio conserva además sus obligaciones de identidad y gobierno documental.

- Error A: Identificar información sensible y restringir su difusión es el foco DLP descrito, distinto de detectar comportamiento o contenido malicioso.
- Error B: Comprobar firma e identidad atiende autenticidad e integridad bajo sus condiciones; no equivale al análisis de malware del archivo.
- Error C: Asignar conservación depende de clasificación y política documental; un análisis antimalware no calcula por sí mismo ese destino.

- [OWASP: File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) · Introduction; File Upload Protection; File Content Validation; User Permissions: antivirus/sandbox y defensa en profundidad · versión: Guía viva consultada el 28-10-2026. Ninguna técnica basta por sí sola; no se ejecuta análisis, suben muestras o instalan herramientas · comprobado: 2026-10-28
- [BOE: Real Decreto311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · 20 mínimo privilegio; anexoII op.acc, op.exp.6 código dañino, op.exp.8 registros y op.mon monitorización; mp.info.5 limpieza de metadatos; mp.info.6 copias; op.cont.1–4 continuidad · versión: Consolidación informativa, actualización global publicada 06-11-2024. Aplicación/refuerzos según nivel o categoría; op.cont.1 medio/alto, op.cont.2–4 alto; mp.info.6 R1 medio/alto yR2 alto · comprobado: 2026-10-28
- [Microsoft Purview: Learn about data loss prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp) · Definición; Protective actions of DLP policies; datos en reposo/uso/movimiento; planificación, prueba, ajuste y políticas · versión: Documentación viva consultada el 28-10-2026. DLP no es garantía de cero fugas ni equivalente a cifrado, DRM o retención; sin desplegar políticas · comprobado: 2026-10-28

Partida: `93a6a57d0a1d9174db54e142ef7f66d3315cff396d1ea5aaa1f23aa46ffc42ea` · propuesta: `a2a42ce01d6bb38fe7074efe6b2287e1ee5a0c2a1ee202cb3169a4b6bd422314`

## MAN-GSI-P18-152

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra política y clave A; diferenciar gobierno externo de federación, roles y DLP.

### Antes

¿Qué es una política de invitados?

- A. Reglas sobre quién puede invitar externos, a qué espacios, durante cuánto tiempo y con qué permisos. **(correcta)**
- B. Un mecanismo de federación que permite autenticar identidades externas mediante un proveedor de confianza.
- C. Un modelo de roles que agrupa permisos funcionales y los asigna a usuarios internos o externos.
- D. Una regla DLP que detecta información sensible e impide compartirla fuera de ubicaciones autorizadas.

Explicación: El acceso externo debe ser explícito, mínimo y revisado.

### Propuesta

¿Qué es una política de invitados?

- A. Reglas sobre quién puede invitar externos, a qué espacios, durante cuánto tiempo y con qué permisos. **(correcta)**
- B. Un mecanismo de federación que permite autenticar identidades externas mediante un proveedor de confianza.
- C. Un modelo de roles que agrupa permisos funcionales y los asigna a usuarios internos o externos.
- D. Una regla DLP que detecta información sensible e impide compartirla fuera de ubicaciones autorizadas.

Explicación: Una política de invitados define quién puede incorporar personas externas, a qué recursos acceden, durante cuánto tiempo y bajo qué revisión y permisos. Debe coordinar identidad, configuración de organización y espacio y finalización de necesidad. Entra y SharePoint ilustran restricciones de invitación, alcance y expiración. Federar identidad o asignar roles son mecanismos que ayudan a ejecutarla, sin sustituir la decisión de gobierno sobre acceso externo.

- Error B: La federación permite confiar en otro proveedor para autenticar; no decide por sí misma quién invita, finalidad, duración o recursos autorizados.
- Error C: Un modelo de roles agrupa permisos. La política de invitados también gobierna incorporación, alcance, vigencia y revisión del acceso externo.
- Error D: DLP puede restringir datos compartidos, pero no define por sí sola todo el ciclo de alta y baja de invitados.

- [Microsoft Entra: Configure external collaboration settings](https://learn.microsoft.com/en-us/entra/external-id/external-collaboration-settings-configure) · Alcance workforce tenants; quién invita, acceso de invitados, restricciones de dominios y relación con configuración entre tenants · versión: Documentación viva consultada el 28-10-2026; ejemplo B2B con reglas específicas, sin universalizar valores por defecto de toda organización · comprobado: 2026-10-28
- [Microsoft: Manage sharing settings for SharePoint and OneDrive](https://learn.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off) · External sharing options; límites de organización/sitio; invitaciones, expiración de invitados y enlaces, permisos · versión: Página actualizada 30-06-2026, consultada el 28-10-2026. Ejemplo de política externa y revisión, distinto de autenticar por federación o definir roles aislados · comprobado: 2026-10-28
- [Microsoft Purview: Learn about data loss prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp) · Definición; Protective actions of DLP policies; datos en reposo/uso/movimiento; planificación, prueba, ajuste y políticas · versión: Documentación viva consultada el 28-10-2026. DLP no es garantía de cero fugas ni equivalente a cifrado, DRM o retención; sin desplegar políticas · comprobado: 2026-10-28

Partida: `686b89ed3d7a0404e908933e22402650950ddcfa306ce27ac02b59bf936982ff` · propuesta: `c3e4d5b174a14efeed06937dbbb416db6846152fb889c036357df500749e4cfa`

## MAN-GSI-P18-153

Decisión: pending_review · acción: revise.

Motivo: Conservar coordinaciónIAM y clave A; alternativas de integración parcial y confusión autenticación/autorización.

### Antes

¿Qué ventaja aporta integrar IAM con DMS/CMS/colaboración?

- A. Centralizar identidad, grupos, SSO, bajas y aplicación coherente de permisos. **(correcta)**
- B. Suprimir la autorización sobre contenidos porque una identidad autenticada debe recibir siempre acceso completo a todos los repositorios.
- C. Publicar todas las carpetas para evitar sincronizar grupos y roles entre el proveedor de identidad y las herramientas de colaboración.
- D. Sustituir el DMS, el CMS y las plataformas colaborativas por el directorio de identidades, que almacenaría también todos sus documentos.

Explicación: La identidad central facilita altas/bajas y mínimo privilegio.

### Propuesta

¿Qué ventaja aporta integrar IAM con DMS/CMS/colaboración?

- A. Coordinar identidades, grupos, SSO, bajas y asignaciones coherentes de acceso. **(correcta)**
- B. Mantener cuentas locales en cada aplicación y revisar sus bajas solo por separado.
- C. Dar acceso a todo contenido tras autenticar al usuario una vez en el SSO.
- D. Sincronizar nombres dejando permisos y sesiones fuera del ciclo de vida.

Explicación: Integrar IAM coordina identidad, grupos, autenticación y ciclo de vida para aplicar accesos coherentes a las herramientas. El aprovisionamiento puede mantener y retirar identidades y roles; SSO permite entrar en aplicaciones asignadas sin repetir credenciales. Autenticarse no concede por sí mismo todos los permisos sobre contenido. Se requieren mapeos, autorización y revisión en cada integración; las bajas y sesiones deben tratarse según las capacidades de los sistemas, sin presumir efecto instantáneo universal.

- Error B: Gestionar cuentas y bajas aisladas mantiene la dispersión que la integración busca reducir y dificulta coherencia entre herramientas.
- Error C: SSO acredita identidad para aplicaciones asignadas; no otorga autorización ilimitada a todos los repositorios o documentos.
- Error D: Sin coordinar permisos y ciclo de acceso se centraliza un dato de identidad, pero no el gobierno de altas, cambios y bajas descrito.

- [Microsoft Entra: What is app provisioning?](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/user-provisioning) · Creación, mantenimiento y retirada de identidades/roles; automatización de deprovisioning; sincronización de grupos y asignaciones; mapeos · versión: Documentación viva consultada el 28-10-2026. Integración requiere configuración y aplicaciones compatibles; no implica autorización ilimitada o bajas instantáneas universales · comprobado: 2026-10-28
- [Microsoft Entra: What is single sign-on?](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on) · Definición; aplicaciones asignadas; beneficios y How SSO works; opciones y límites de integración · versión: Página actualizada 23-06-2026, consultada el 28-10-2026. Autenticar una vez no concede por sí solo acceso a todo contenido · comprobado: 2026-10-28
- [Microsoft Graph: Permissions overview](https://learn.microsoft.com/en-us/graph/permissions-overview) · Permisos delegados y de aplicación; Best practices: mínimos necesarios y granularidad por operación · versión: Documentación viva consultada el 28-10-2026. Automatizar no elimina autorización o auditoría; no se asignan permisos o consentimientos · comprobado: 2026-10-28

Partida: `97e68fc281427932cbd79b72b2fef783a292b4cc1acbe529657ef3851c751c4d` · propuesta: `c2539d0153df647908de4f269067ac3eb2bbfa0fd7acd3480fc8a6c0b4058c64`

## MAN-GSI-P18-154

Decisión: pending_review · acción: revise.

Motivo: Conservar baja con acceso/contenido y clave C; microcaso de empleado propietario de recursos, sin borrado indiscriminado ni cesión de identidad.

### Antes

¿Qué debe ocurrir cuando un empleado deja la organización?

- A. Mantener su cuenta activa indefinidamente.
- B. Borrar automáticamente toda información corporativa.
- C. Revocar acceso, revisar propiedad/transferencia de contenidos y conservar lo necesario según política. **(correcta)**
- D. Compartir su contraseña con el sustituto.

Explicación: El offboarding forma parte del ciclo de vida de identidad y contenidos.

### Propuesta

Un empleado que es propietario de espacios y documentos deja la organización. ¿Qué debe incluir su baja?

- A. Desactivar su cuenta y dejar sin revisar contenidos y propiedad de los recursos.
- B. Eliminar cuenta y documentos antes de comprobar retención o responsabilidades.
- C. Revocar accesos, revisar propiedad y transferencias y conservar según política. **(correcta)**
- D. Entregar al sustituto la cuenta existente después de cambiarle el nombre.

Explicación: La baja requiere retirar acceso y revisar sesiones y permisos en los sistemas pertinentes, resolver propiedad y continuidad del contenido y conservar lo que corresponda según política y obligaciones. No exige borrar de inmediato toda información del empleado ni transferir sus credenciales. Microsoft distingue bloqueo, conservación de datos, acceso autorizado a contenidos y posterior eliminación de cuenta o licencia. Los plazos concretos de un producto no sustituyen el calendario de conservación aplicable.

- Error A: Retirar acceso es necesario, pero dejar sin revisar propiedad y contenido puede interrumpir trabajo o perder información que deba preservarse.
- Error B: Eliminar antes de revisar requisitos puede destruir contenido que deba conservarse o transferirse bajo control.
- Error D: Renombrar y entregar la cuenta personal confunde identidades y atribución; la continuidad debe resolverse con accesos propios autorizados y transferencia de recursos.

- [Microsoft365: Remove a former employee and secure data](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee?view=o365-worldwide) · Before you begin; Solution: impedir inicio, conservar datos requeridos, delegar acceso y planificar eliminación de cuenta/licencia · versión: Documentación consultada el 28-10-2026; ejemplo de baja y continuidad de contenidos, sin convertir plazos de producto en periodos legales universales o transferir credenciales personales · comprobado: 2026-10-28
- [Microsoft Entra: What is app provisioning?](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/user-provisioning) · Creación, mantenimiento y retirada de identidades/roles; automatización de deprovisioning; sincronización de grupos y asignaciones; mapeos · versión: Documentación viva consultada el 28-10-2026. Integración requiere configuración y aplicaciones compatibles; no implica autorización ilimitada o bajas instantáneas universales · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 tratamiento continuo del ciclo y contexto; VI procesos, conservación/transferencia/disposición; VII metadatos vinculados; VIII procedimientos y X auditoría · versión: Resolución28-06-2012, texto inicial publicado26-07-2012. Sus remisiones a normas históricas no se presentan como vigentes; se contrastan con LPAC39/2015 y ENS311/2022 · comprobado: 2026-10-28

Partida: `6330428d77e38e2f4199dc63053b0c7c90568cf76f007705d2d61cb7a9a31ed5` · propuesta: `5d1d264f1b76e6486f0ebab03c62002edfb1103caa62c1f730fa2cca006c9849`

## MAN-GSI-P18-155

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegro riesgo condicionado y clave B; reconocer chats gobernados y distinguir historial visible de conservación de cumplimiento.

### Antes

¿Qué riesgo tiene usar chats como repositorio único de decisiones?

- A. El historial del chat aplica automáticamente clasificación, calendario de conservación y bloqueo legal a cada mensaje.
- B. Dificulta conservación, búsqueda, contexto, gobierno y trazabilidad si no existe política/archivo adecuado. **(correcta)**
- C. Las conversaciones mantienen un registro estable aunque usuarios, administradores o políticas eliminen mensajes y adjuntos.
- D. La búsqueda textual del chat sustituye por sí sola al control de versiones, los metadatos y el gobierno de un repositorio.

Explicación: El canal de conversación no debe sustituir sin diseño a los repositorios oficiales.

### Propuesta

¿Qué riesgo tiene usar chats como repositorio único de decisiones?

- A. El historial del chat aplica automáticamente clasificación, calendario de conservación y bloqueo legal a cada mensaje.
- B. Dificulta conservación, búsqueda, contexto, gobierno y trazabilidad si no existe política/archivo adecuado. **(correcta)**
- C. Las conversaciones mantienen un registro estable aunque usuarios, administradores o políticas eliminen mensajes y adjuntos.
- D. La búsqueda textual del chat sustituye por sí sola al control de versiones, los metadatos y el gobierno de un repositorio.

Explicación: Usar conversación como única referencia de decisiones sin política y archivo adecuados puede perder contexto, dificultar recuperación y dejar conservación y trazabilidad sin gobierno. No significa que todo chat sea incapaz de conservar evidencia: Teams puede aplicar retención y preservar mensajes editados o borrados mediante mecanismos de cumplimiento. Lo visible en la aplicación no refleja necesariamente todo lo conservado. Deben diseñarse clasificación, responsabilidades, acceso y conservación según el valor de la información, sin confiar solo en el historial visible.

- Error A: El historial no aplica automáticamente a cada mensaje todas las reglas de clasificación, conservación y hold sin el diseño y configuración correspondientes.
- Error C: La estabilidad depende de políticas y controles. Borrado o cambios pueden afectar lo visible, mientras la preservación de cumplimiento requiere condiciones concretas.
- Error D: Buscar texto no aporta por sí solo control de versiones, metadatos, responsabilidades o conservación; debe integrarse en el gobierno del contenido.

- [Microsoft Purview: Learn about retention for Teams](https://learn.microsoft.com/en-us/purview/retention-policies-teams) · Retención y eliminación de chats/canales; preservación bajo hold; diferencia entre visibilidad en cliente y conservación; tratamiento de adjuntos · versión: Documentación viva consultada el 28-10-2026. Puede existir chat gobernado y conservación de mensajes borrados; no se equipara lo visible a archivo completo ni se garantizan plazos para toda plataforma · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 tratamiento continuo del ciclo y contexto; VI procesos, conservación/transferencia/disposición; VII metadatos vinculados; VIII procedimientos y X auditoría · versión: Resolución28-06-2012, texto inicial publicado26-07-2012. Sus remisiones a normas históricas no se presentan como vigentes; se contrastan con LPAC39/2015 y ENS311/2022 · comprobado: 2026-10-28

Partida: `592a601c8e6ef61d0c2a32b0f2de4bff0b6b6d7f0721789fcd54141f7ee9d61f` · propuesta: `8c24e805dc2260171cfdb5f2d992f5edbfd50c030302531d24cc01a79c3c5fd3`

## MAN-GSI-P18-156

Decisión: pending_review · acción: revise.

Motivo: Conservar integración extremo a extremo y clave C; aclarar gobierno desde captura, evitando interpretar retención como fase que solo empieza tras publicar.

### Antes

¿Qué arquitectura integra mejor gestión de contenidos extremo a extremo?

- A. Recibir archivos en un CMS y publicarlos directamente, sin metadatos comunes, permisos, workflow ni reglas de conservación.
- B. Mantener repositorios aislados para captura, edición y publicación, cada uno con identidades y clasificaciones incompatibles.
- C. Captura/creación -&gt; metadatos/DMS -&gt; workflow -&gt; publicación CMS -&gt; sindicación/indexación -&gt; retención/disposición. **(correcta)**
- D. Registrar decisiones y versiones únicamente en un chat, indexarlo con un buscador y tratarlo como archivo oficial permanente.

Explicación: El ciclo combina varias familias funcionales con IAM, seguridad y auditoría transversales.

### Propuesta

¿Qué enfoque funcional integra mejor la gestión de contenidos de extremo a extremo?

- A. Publicar desde un CMS y revisar después metadatos, permisos y conservación.
- B. Separar captura, edición y publicación con identidades y categorías incompatibles.
- C. Integrar captura, repositorio, workflow, publicación y búsqueda con gobierno transversal. **(correcta)**
- D. Usar la búsqueda del chat como único archivo de decisiones y versiones de referencia.

Explicación: La integración funcional conecta captura y creación con metadatos y repositorio, revisión y publicación, descubrimiento y destino documental, con identidad, seguridad y auditoría transversales. No es una cadena rígida que obligue a publicar todo documento ni a empezar la retención al final: la política se diseña y aplica desde la captura y según eventos y finalidad. NTIV.2 exige tratamiento continuo del ciclo. Varias capacidades pueden estar en un producto o varios, con interfaces y responsabilidades coherentes.

- Error A: Aplicar permisos y conservación solo después de publicar deja sin gobierno fases en que el contenido ya puede ser sensible o requerir control.
- Error B: La separación física puede ser válida, pero identidades y categorías incompatibles impiden el gobierno coherente del ciclo planteado.
- Error D: La búsqueda conversacional puede ayudar, pero por sí sola no define la gestión documental de referencia, versiones y destino de todo el ciclo.

- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 tratamiento continuo del ciclo y contexto; VI procesos, conservación/transferencia/disposición; VII metadatos vinculados; VIII procedimientos y X auditoría · versión: Resolución28-06-2012, texto inicial publicado26-07-2012. Sus remisiones a normas históricas no se presentan como vigentes; se contrastan con LPAC39/2015 y ENS311/2022 · comprobado: 2026-10-28
- [Microsoft Support: Overview of document management in SharePoint](https://support.microsoft.com/en-au/sharepoint/libraries/overview-of-document-management-in-sharepoint) · Definición de ciclo; The elements of a document management system; The planning process: roles, metadatos, versiones, workflows, publicación y conservación · versión: Documentación histórica SharePoint2013/2016, usada funcionalmente; no se recomienda producto o se afirma soporte actual · comprobado: 2026-10-28
- [Drupal User Guide: Drupal as a Content Management System](https://www.drupal.org/docs/user_guide/en/understanding-drupal.html) · 1.1, What is a Content Management System?: añadir, editar, publicar y retirar contenido web · versión: Página actualizada14-04-2025, consultada el 28-10-2026. Ejemplo de capacidad editorial, sin exigir esa arquitectura a todo CMS o aplicaciones separadas por función · comprobado: 2026-10-28
- [BOE: Real Decreto311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · 20 mínimo privilegio; anexoII op.acc, op.exp.6 código dañino, op.exp.8 registros y op.mon monitorización; mp.info.5 limpieza de metadatos; mp.info.6 copias; op.cont.1–4 continuidad · versión: Consolidación informativa, actualización global publicada 06-11-2024. Aplicación/refuerzos según nivel o categoría; op.cont.1 medio/alto, op.cont.2–4 alto; mp.info.6 R1 medio/alto yR2 alto · comprobado: 2026-10-28

Partida: `b6f24bb0bffb8be65ea8282a979e1e5587422b8a065a846b50bf760f2221bacb` · propuesta: `7fec94ad8b52d62a8a137790ebdfd1a3bc336d7fe799faf8f75df44d4bf9c449`

## MAN-GSI-P18-157

Decisión: pending_review · acción: revise.

Motivo: Conservar integración controlada y clave B; errores cercanos de interfaz, contrato y autorización en vez de conversión o eliminación del versionado.

### Antes

¿Qué papel tiene una API en una plataforma documental moderna?

- A. Sustituir identidad y auditoría.
- B. Permitir integración controlada con otros sistemas para consultar, crear o actualizar contenido según permisos. **(correcta)**
- C. Convertir automáticamente cualquier documento en HTML válido.
- D. Eliminar el versionado.

Explicación: Las APIs desacoplan consumidores y permiten automatización, pero deben gobernarse.

### Propuesta

¿Qué papel tiene una API en una plataforma documental moderna?

- A. Sustituir el formato del repositorio por una interfaz visual común para los usuarios.
- B. Permitir consultas y cambios controlados desde otros sistemas según sus permisos. **(correcta)**
- C. Garantizar compatibilidad de todos los clientes aunque cambien contratos y versiones.
- D. Delegar al consumidor la autorización sin comprobarla al ejecutar cada operación.

Explicación: Una API ofrece operaciones programáticas para integrar consumidores con la plataforma: consultar, crear o actualizar contenido conforme al contrato y permisos concedidos. Microsoft Graph ilustra recursos documentales y permisos granulares. Deben gobernarse autenticación, autorización, versiones, trazabilidad y límites; automatizar una llamada no elimina esos controles. La interfaz no garantiza compatibilidad eterna ni convierte automáticamente documentos a HTML o sustituye la presentación visual del usuario.

- Error A: Una API es un contrato de interacción programática; no es por sí misma una interfaz visual ni exige reemplazar el formato interno del repositorio.
- Error C: La compatibilidad depende de contratos, versiones y cambios gestionados. Exponer API no hace compatibles todos los clientes bajo cualquier modificación.
- Error D: El servicio debe comprobar autorización adecuada para las operaciones; confiar solo en la decisión del consumidor deja el control sin garantía del proveedor.

- [Microsoft Graph: Working with files](https://learn.microsoft.com/en-us/graph/api/resources/onedrive?view=graph-rest-1.0) · Drive/DriveItem; acceso a bibliotecas documentales y escenarios de operaciones sobre archivos; Commonly accessed resources · versión: Documentación API v1.0 consultada el 28-10-2026. Interfaz de integración, sin ejecutar solicitudes o copiar URLs de descarga de sus ejemplos · comprobado: 2026-10-28
- [Microsoft Graph: Permissions overview](https://learn.microsoft.com/en-us/graph/permissions-overview) · Permisos delegados y de aplicación; Best practices: mínimos necesarios y granularidad por operación · versión: Documentación viva consultada el 28-10-2026. Automatizar no elimina autorización o auditoría; no se asignan permisos o consentimientos · comprobado: 2026-10-28

Partida: `eef0da2962044d422b257da3d6a05be42c007bf856876a4b568e23829e73edf0` · propuesta: `98018e47c3549bceb99e0c338897b19f8f87631d270ab6db926304a5dcf1e85d`

## MAN-GSI-P18-158

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra continuidad y clave B; diferenciar disponibilidad, copias, reversibilidad y procedimientos sin universalizar refuerzosENS.

### Antes

¿Qué práctica mejora continuidad de una plataforma de contenidos?

- A. Confiar exclusivamente en el versionado de documentos, aunque la plataforma, su configuración o todas sus copias fallen a la vez.
- B. Backups probados, alta disponibilidad según criticidad, exportación/reversibilidad y recuperación documentada. **(correcta)**
- C. Crear copias periódicas sin probar restauraciones, porque la existencia del archivo de backup demuestra por sí sola que puede recuperarse.
- D. Depender de un único administrador sin documentación, procedimientos ni transferencia de conocimiento para resolver cualquier interrupción.

Explicación: Continuidad requiere protección de datos, servicio y capacidad de salida.

### Propuesta

¿Qué práctica mejora continuidad de una plataforma de contenidos?

- A. Confiar exclusivamente en el versionado de documentos, aunque la plataforma, su configuración o todas sus copias fallen a la vez.
- B. Backups probados, alta disponibilidad según criticidad, exportación/reversibilidad y recuperación documentada. **(correcta)**
- C. Crear copias periódicas sin probar restauraciones, porque la existencia del archivo de backup demuestra por sí sola que puede recuperarse.
- D. Depender de un único administrador sin documentación, procedimientos ni transferencia de conocimiento para resolver cualquier interrupción.

Explicación: La continuidad combina datos recuperables, servicio disponible según criticidad y procedimientos conocidos y probados. La alta disponibilidad no sustituye copias, ni el historial garantiza recuperar el repositorio completo. La salida o reversibilidad necesita formatos, metadatos y procedimientos de transferencia utilizables, además de una copia. ENS gradúa medidas y refuerzos por nivel: no exige el mismo plan formal a todo sistema; la recomendación de probar recuperación no se presenta como obligación idéntica para todas las categorías.

- Error A: El historial puede perderse con el repositorio o no incluir configuración y otros componentes; no cubre por sí solo la continuidad completa.
- Error C: Que exista un archivo de copia no demuestra que sea completo, accesible y restaurable ni que cumpla el tiempo de recuperación requerido.
- Error D: La dependencia de una persona sin procedimientos o transferencia añade un punto de fallo organizativo y dificulta recuperar el servicio.

- [BOE: Real Decreto311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · 20 mínimo privilegio; anexoII op.acc, op.exp.6 código dañino, op.exp.8 registros y op.mon monitorización; mp.info.5 limpieza de metadatos; mp.info.6 copias; op.cont.1–4 continuidad · versión: Consolidación informativa, actualización global publicada 06-11-2024. Aplicación/refuerzos según nivel o categoría; op.cont.1 medio/alto, op.cont.2–4 alto; mp.info.6 R1 medio/alto yR2 alto · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 tratamiento continuo del ciclo y contexto; VI procesos, conservación/transferencia/disposición; VII metadatos vinculados; VIII procedimientos y X auditoría · versión: Resolución28-06-2012, texto inicial publicado26-07-2012. Sus remisiones a normas históricas no se presentan como vigentes; se contrastan con LPAC39/2015 y ENS311/2022 · comprobado: 2026-10-28

Partida: `02298594a5b59a9e353957e3de5cc584851f76009ab7f069e18db5ca4489583b` · propuesta: `9cd9a906939785fbb63c0009151eed62ca71ed7692a2f28adcc20157620c1b12`

## MAN-GSI-P18-159

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso transversal y clave C; estrategias parciales plausibles con fallos concretos de índice, API y compartición.

### Antes

Caso: portal público con DMS, CMS, buscador y colaboración. ¿Qué control transversal es imprescindible?

- A. Compartir una única cuenta entre todos los usuarios para simplificar altas y bajas, aunque se pierdan atribución y mínimo privilegio.
- B. Eliminar los registros de actividad para mejorar el rendimiento, aun cuando resulte imposible investigar accesos o cambios no autorizados.
- C. IAM/mínimo privilegio, auditoría, clasificación, retención, seguridad de ficheros y monitorización. **(correcta)**
- D. Publicar por defecto cualquier documento interno para que el buscador lo indexe, sin clasificación previa ni control sobre información sensible.

Explicación: La seguridad debe atravesar repositorio, publicación, búsqueda y colaboración.

### Propuesta

Caso: portal público con DMS, CMS, buscador y colaboración. ¿Qué control transversal es imprescindible?

- A. Proteger el repositorio y dejar al buscador mostrar metadatos sin filtrar acceso.
- B. Controlar el CMS y permitir que las APIs acepten cualquier identidad declarada.
- C. Aplicar IAM, auditoría, clasificación, retención y seguridad en todas las capas. **(correcta)**
- D. Auditar publicación y dejar exportaciones y enlaces compartidos fuera del seguimiento.

Explicación: El portal debe coordinar identidad y mínimo privilegio, trazas, clasificación y conservación y controles de seguridad a través de repositorio, publicación, APIs, búsqueda y colaboración. Las medidas concretas se ajustan a riesgo, nivel y política. Una copia de metadatos en el índice o una exportación puede revelar información aunque el documento original esté protegido. El gobierno transversal no equivale a publicar todo para que se encuentre ni a eliminar trazas por rendimiento.

- Error A: El índice y los metadatos también pueden ser sensibles; el buscador debe respetar el modelo de acceso pertinente.
- Error B: La identidad declarada por un consumidor no basta para autorizar operaciones; APIs y CMS deben coordinar controles.
- Error D: Exportar y compartir son vías relevantes de acceso y salida. Excluirlas puede dejar sin trazabilidad parte del ciclo.

- [BOE: Real Decreto311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · 20 mínimo privilegio; anexoII op.acc, op.exp.6 código dañino, op.exp.8 registros y op.mon monitorización; mp.info.5 limpieza de metadatos; mp.info.6 copias; op.cont.1–4 continuidad · versión: Consolidación informativa, actualización global publicada 06-11-2024. Aplicación/refuerzos según nivel o categoría; op.cont.1 medio/alto, op.cont.2–4 alto; mp.info.6 R1 medio/alto yR2 alto · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 tratamiento continuo del ciclo y contexto; VI procesos, conservación/transferencia/disposición; VII metadatos vinculados; VIII procedimientos y X auditoría · versión: Resolución28-06-2012, texto inicial publicado26-07-2012. Sus remisiones a normas históricas no se presentan como vigentes; se contrastan con LPAC39/2015 y ENS311/2022 · comprobado: 2026-10-28
- [Microsoft Graph: Permissions overview](https://learn.microsoft.com/en-us/graph/permissions-overview) · Permisos delegados y de aplicación; Best practices: mínimos necesarios y granularidad por operación · versión: Documentación viva consultada el 28-10-2026. Automatizar no elimina autorización o auditoría; no se asignan permisos o consentimientos · comprobado: 2026-10-28

Partida: `408c48be12474ea06d97387a10a914d1803b59708fc1f8f79f2887a884686f3d` · propuesta: `4127f14d1fe31cb8e612008f896698d9e9c7231417a3bf18594f871acd19470e`

## MAN-GSI-P18-160

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso integrador y clave A; capacidades coordinadas frente a enfoques parciales, sin imponer un producto o una gran arquitectura.

### Antes

Caso final II.16: un organismo quiere mejorar publicación y conocimiento interno. ¿Qué enfoque es más completo?

- A. Gobernar ciclo de vida documental, workflow, CMS, sindicación, buscador/SEO, colaboración, accesos, retención y métricas. **(correcta)**
- B. Adquirir un CMS y publicar directamente, sin definir workflow, metadatos, responsables, conservación ni métricas de uso.
- C. Implantar un buscador interno sobre repositorios inconexos, sin mejorar clasificación, permisos o calidad del contenido.
- D. Trasladar todo a una red social corporativa y tratar conversaciones y adjuntos como repositorio oficial permanente.

Explicación: La solución integra contenidos, procesos, descubrimiento, colaboración y gobierno.

### Propuesta

Un organismo quiere mejorar publicación y conocimiento interno. ¿Qué enfoque integra mejor esas necesidades?

- A. Integrar ciclo documental, publicación, descubrimiento, colaboración y gobierno con métricas. **(correcta)**
- B. Priorizar publicación y analítica, dejando el archivo y los permisos a cada unidad.
- C. Priorizar búsqueda transversal con vocabularios y accesos inconexos por repositorio.
- D. Usar conversaciones y adjuntos como archivo permanente sin modelar su ciclo documental.

Explicación: Mejorar publicación y conocimiento interno requiere coordinar ciclo documental y metadatos, procesos de revisión, publicación, descubrimiento y colaboración con responsabilidades, accesos, conservación y evaluación. No basta adquirir una familia de herramientas si las otras capacidades quedan inconexas. La combinación debe ajustarse a necesidades y medirse; puede implantarse de forma gradual e integrarse en uno o varios productos. No significa que todos los documentos se publiquen o que toda mejora exija una arquitectura empresarial compleja.

- Error B: Mejorar publicación no resuelve por sí solo coherencia de archivo, permisos y conservación si se dejan a cada unidad sin coordinación.
- Error C: La búsqueda puede exponer y recuperar contenidos, pero no corrige por sí sola vocabularios o accesos incompatibles en origen.
- Error D: Las conversaciones pueden aportar conocimiento, pero tratarlas como archivo permanente sin ciclo y políticas deja sin resolver clasificación, conservación y trazabilidad.

- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 tratamiento continuo del ciclo y contexto; VI procesos, conservación/transferencia/disposición; VII metadatos vinculados; VIII procedimientos y X auditoría · versión: Resolución28-06-2012, texto inicial publicado26-07-2012. Sus remisiones a normas históricas no se presentan como vigentes; se contrastan con LPAC39/2015 y ENS311/2022 · comprobado: 2026-10-28
- [Microsoft Support: Overview of document management in SharePoint](https://support.microsoft.com/en-au/sharepoint/libraries/overview-of-document-management-in-sharepoint) · Definición de ciclo; The elements of a document management system; The planning process: roles, metadatos, versiones, workflows, publicación y conservación · versión: Documentación histórica SharePoint2013/2016, usada funcionalmente; no se recomienda producto o se afirma soporte actual · comprobado: 2026-10-28
- [Drupal User Guide: Drupal as a Content Management System](https://www.drupal.org/docs/user_guide/en/understanding-drupal.html) · 1.1, What is a Content Management System?: añadir, editar, publicar y retirar contenido web · versión: Página actualizada14-04-2025, consultada el 28-10-2026. Ejemplo de capacidad editorial, sin exigir esa arquitectura a todo CMS o aplicaciones separadas por función · comprobado: 2026-10-28
- [Microsoft: Introducing Viva Engage](https://learn.microsoft.com/en-us/viva/engage/overview) · Introducción; How is Viva Engage different from Viva Connections?: comunidades, conversaciones y conocimiento en la organización · versión: Página actualizada 30-09-2026, consultada el 28-10-2026. Ejemplo de red corporativa, sin imponer producto o frontera excluyente frente a chat/wiki/portal · comprobado: 2026-10-28
- [BOE: Real Decreto311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · 20 mínimo privilegio; anexoII op.acc, op.exp.6 código dañino, op.exp.8 registros y op.mon monitorización; mp.info.5 limpieza de metadatos; mp.info.6 copias; op.cont.1–4 continuidad · versión: Consolidación informativa, actualización global publicada 06-11-2024. Aplicación/refuerzos según nivel o categoría; op.cont.1 medio/alto, op.cont.2–4 alto; mp.info.6 R1 medio/alto yR2 alto · comprobado: 2026-10-28

Partida: `a93851d1321c5fc11e7377b3961549120fedd62d6e282475ddc1916e41d66f44` · propuesta: `32ff9f77adcd2cc73fa38be626e84f36431ff8cfddc207303a07d649aa2b5be8`

## MAN-GSI-P18-087

Decisión: pending_review · acción: revise.

Motivo: Conservar revisión y trazabilidad y clave A; mantener posición real de cola aunque ID087 sea anterior, con controles documentales próximos.

### Antes

¿Qué es versionado documental?

- A. Conservar distintas revisiones/evolución de un documento con identificación y trazabilidad. **(correcta)**
- B. Un sinónimo de backup completo del repositorio.
- C. Un protocolo web.
- D. Una clasificación SEO.

Explicación: Versionado ayuda a controlar cambios, pero no protege frente a todos los desastres del repositorio.

### Propuesta

¿Qué es versionado documental?

- A. Guardar revisiones identificadas del documento y la trazabilidad de sus cambios. **(correcta)**
- B. Clasificar documentos por su serie sin registrar sus revisiones de contenido.
- C. Replicar el último estado del repositorio para mantener una copia disponible.
- D. Definir plazos de conservación sin distinguir sucesivas revisiones del documento.

Explicación: El versionado conserva e identifica revisiones del documento y permite seguir cambios, compararlos o restaurar una versión cuando la configuración lo permite. Puede incluir cambios de propiedades, autoría y comentarios. No es igual a clasificar, replicar el último estado o definir retención. El historial tiene límites, permisos y políticas y puede perderse con el repositorio; complementa la recuperación técnica, sin sustituir una estrategia de copias y continuidad.

- Error B: La serie aporta clasificación y reglas de gestión; no registra por sí misma cómo evoluciona el contenido entre revisiones.
- Error C: Mantener una réplica del estado actual no conserva necesariamente las revisiones anteriores ni su trazabilidad.
- Error D: La retención define cuánto conservar y con qué destino; no equivale a identificar y mantener cada revisión del documento.

- [Microsoft Support: How versioning works in lists and libraries](https://support.microsoft.com/en-us/sharepoint/lists/documents-and-library/how-versioning-works-in-lists-and-libraries) · Track history of a version; restauración de versión anterior; límites, eliminación y permisos; configuración de versiones · versión: Documentación viva consultada el 28-10-2026. Historial y restauración sujetos a configuración, no backup completo o protección frente a toda pérdida del repositorio · comprobado: 2026-10-28
- [BOE: Real Decreto311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · 20 mínimo privilegio; anexoII op.acc, op.exp.6 código dañino, op.exp.8 registros y op.mon monitorización; mp.info.5 limpieza de metadatos; mp.info.6 copias; op.cont.1–4 continuidad · versión: Consolidación informativa, actualización global publicada 06-11-2024. Aplicación/refuerzos según nivel o categoría; op.cont.1 medio/alto, op.cont.2–4 alto; mp.info.6 R1 medio/alto yR2 alto · comprobado: 2026-10-28

Partida: `fe07af1842de8ca877ad297327a8f58fa6bdff9e8189675114009f4d02e6120e` · propuesta: `7b4e319f80f1e508427289e887b5bec36832b37c0a1ac316b8968a4279284b3d`

## AI-GSI-B3-T01-003

Decisión: pending_review · acción: revise.

Motivo: Conservar repetición/solapamiento y clave A; errores próximos de ciclos parciales en vez de desaparición de fases o retirada.

### Antes

En un modelo iterativo, ¿qué ocurre con análisis, diseño y pruebas?

- A. Se repiten o solapan según el ciclo **(correcta)**
- B. Se ejecutan una sola vez obligatoriamente
- C. Desaparecen todas
- D. Solo se realizan tras retirar el sistema

Explicación: La iteración reorganiza actividades del ciclo, no las elimina.

### Propuesta

En un modelo iterativo, ¿qué ocurre con análisis, diseño y pruebas?

- A. Se revisitan o solapan según objetivos y resultados de cada iteración. **(correcta)**
- B. El análisis se cierra en la primera y solo se repite la codificación.
- C. El diseño se fija al inicio y las pruebas se reservan para el final.
- D. Cada iteración añade código sin revisar requisitos, diseño ni pruebas.

Explicación: En el enfoque iterativo se revisitan actividades de análisis, diseño y prueba conforme a objetivos y aprendizaje del ciclo. No significa repetir siempre todo con igual intensidad ni eliminar planificación y control. ISTQB explica cómo el ciclo afecta al trabajo de pruebas y cómo iteraciones e incrementos requieren feedback y regresión. Iteración no equivale necesariamente a un despliegue productivo por ciclo o a una secuencia de codificación aislada de requisitos y verificación.

- Error B: Cerrar definitivamente análisis y repetir solo código no describe la revisión de objetivos y resultados propia del enfoque planteado.
- Error C: Reservar todas las pruebas para el final y fijar diseño sin revisión omite la realimentación dentro de las iteraciones.
- Error D: Añadir código sin revisar requisitos, diseño o pruebas reduce la iteración a construcción y no incorpora su evaluación y aprendizaje.

- [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/?download_id=3345&sdm_process_download=1) · 2.1 modelos de SDLC; 2.1.1 efecto sobre pruebas e iteraciones; 2.1.2 correspondencia desarrollo/prueba y diseño temprano; 2.2.1 niveles de prueba, pp.25–29 · versión: Syllabus v4.0.1 de15-09-2024, errata de v4.0. PDF oficial leído textualmente, sin atribuir inspección de diagramas o conversión local · comprobado: 2026-10-28

Partida: `3a3d01d0798a2e1654ad4e8f7ce2f700137bc8562a4f9bed036935a72fb6e562` · propuesta: `b7b4be431795259c6340ce51607f26898efe4386c064ee6196100d180f0a22ee`

## AI-GSI-B3-T01-005

Decisión: pending_review · acción: revise.

Motivo: Conservar correspondencia del modeloV y clave B; sustituir distractores de prototipos ajenos por relaciones del ciclo y pruebas.

### Antes

¿Qué relación enfatiza el modelo en V?

- A. El desechable impide contrastar requisitos
- B. Especificación y diseño con niveles de verificación y validación **(correcta)**
- C. El evolutivo se elimina obligatoriamente tras cada prueba
- D. El desechable debe convertirse siempre en producción

Explicación: El modelo en V facilita trazabilidad entre lo especificado y las pruebas correspondientes.

### Propuesta

¿Qué relación enfatiza el modelo en V?

- A. Objetivos de iteraciones y funciones incorporadas a cada incremento.
- B. Especificación y diseño con sus niveles de verificación y validación. **(correcta)**
- C. Evolución de prototipos y decisiones para convertirlos en producto.
- D. Construcción completa del código y pruebas planificadas solo después.

Explicación: El modelo enV enfatiza la correspondencia entre productos de especificación y diseño y actividades o niveles de verificación y validación. La planificación y diseño de pruebas se relacionan con la fase de desarrollo correspondiente, sin esperar a disponer de todo el código; pueden realizarse revisiones estáticas tempranas. El mapeo concreto depende de la variante y contexto. Trazar esos vínculos no garantiza ausencia de defectos ni prohíbe aplicar realimentación o combinar prácticas iterativas.

- Error A: Relacionar objetivos y funciones de cada incremento describe planificación iterativa/incremental, no el vínculo específico entre definición y niveles de prueba del modelo enV.
- Error C: Decidir evolución de prototipos es otra decisión de ciclo; no expresa la correspondencia entre especificación/diseño y verificación/validación.
- Error D: Planificar pruebas solo después de completar código contradice la preparación temprana vinculada a productos de desarrollo.

- [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/?download_id=3345&sdm_process_download=1) · 2.1 modelos de SDLC; 2.1.1 efecto sobre pruebas e iteraciones; 2.1.2 correspondencia desarrollo/prueba y diseño temprano; 2.2.1 niveles de prueba, pp.25–29 · versión: Syllabus v4.0.1 de15-09-2024, errata de v4.0. PDF oficial leído textualmente, sin atribuir inspección de diagramas o conversión local · comprobado: 2026-10-28

Partida: `1e08743555847f2fd2e8994945d521c945738234b0122a0d94836dd2be14df92` · propuesta: `16e23f23f74614d66a36dee6a318a03a6ce36d36fe609408af96dac3df0ab0f5`

## AI-GSI-B3-T01-006

Decisión: pending_review · acción: revise.

Motivo: Conservar desechable frente a evolutivo y clave C; microcaso que separa aprendizaje, código y preparación productiva.

### Antes

¿Qué distingue un prototipo desechable de uno evolutivo?

- A. El desechable no puede validar dudas
- B. El evolutivo prohíbe cualquier revisión
- C. El desechable sirve para aprender y no se conserva como base del producto **(correcta)**
- D. Todo prototipo es necesariamente producción definitiva

Explicación: Los prototipos pueden descartarse tras reducir incertidumbre o evolucionar bajo controles de calidad.

### Propuesta

Un equipo crea un prototipo para aclarar interacción y requisitos; su código no cumple los estándares del producto. Si es desechable, ¿qué destino corresponde?

- A. Integrarlo directamente en producción porque ya permitió aclarar requisitos.
- B. Conservarlo como arquitectura definitiva y limitar cambios a la interfaz.
- C. Aprovechar lo aprendido y descartarlo como base del código del producto. **(correcta)**
- D. Descartar también los requisitos aprendidos y rehacer el análisis sin usarlos.

Explicación: Un prototipo desechable reduce incertidumbre y permite aprender sobre requisitos, interacción o una alternativa técnica; su código no se conserva como base del producto entregable. Sí se aprovechan conocimiento y decisiones obtenidos. El prototipo evolutivo tiene otro propósito de desarrollo y necesita controles para evolucionar adecuadamente; tampoco se convierte automáticamente en producción por existir. El glosarioSEBoK recoge esa distinción y conserva las referencias bibliográficas originales.

- Error A: Aclarar requisitos no demuestra que el código cumpla arquitectura, seguridad o calidad de producción; el supuesto lo define como desechable.
- Error B: Conservarlo como arquitectura definitiva y evolucionarlo contradice el destino desechable planteado, además de ignorar las carencias de calidad indicadas.
- Error D: Descartar código no exige perder lo aprendido; requisitos aclarados y decisiones son resultados útiles de la exploración.

- [SEBoK: Prototype, glossary](https://sebokwiki.org/wiki/Prototype_%28glossary%29) · Definiciones de prototipo software2–3: demostración/aprendizaje, código descartado salvo prototipos evolutivos; bibliografía Forsberg etal.2005 yFairley2009 · versión: Glosario SEBoK consultado mediante texto primario indexado el28-10-2026; la lectura HTTP directa devuelve timeout. El sitio identifica SEBoK2.14 de18-05-2026; no se atribuye lectura de los libros citados o de una página no recibida directamente · comprobado: 2026-10-28
- [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/?download_id=3345&sdm_process_download=1) · 2.1 modelos de SDLC; 2.1.1 efecto sobre pruebas e iteraciones; 2.1.2 correspondencia desarrollo/prueba y diseño temprano; 2.2.1 niveles de prueba, pp.25–29 · versión: Syllabus v4.0.1 de15-09-2024, errata de v4.0. PDF oficial leído textualmente, sin atribuir inspección de diagramas o conversión local · comprobado: 2026-10-28

Partida: `a4beee7840910f87999670e504663b65afe4fc6c9b124fd0b51dc7526280e25c` · propuesta: `e8b40ad013afca56b60b70afab2143ebebd2243198821c9013994bed3e5ed0f8`
