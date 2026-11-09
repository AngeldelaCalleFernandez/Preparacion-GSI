# GSI-EDITORIAL-048 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `d7f4976c193e320cd0547564be3dcbf2827d3e025402d0eab9b4b580fafedaa5`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P18-084

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la formulación y clave C; explicar amplitud de ECM y solapamientos funcionales sin fronteras de producto exclusivas.

### Antes

¿Qué es ECM?

- A. Sistema centrado en captura, metadatos, versiones, permisos y ciclo de vida de documentos.
- B. Plataforma destinada a crear, organizar y publicar contenidos de un sitio web.
- C. Un concepto paraguas de gestión empresarial de contenidos que puede integrar DMS, workflow, records, colaboración y captura. **(correcta)**
- D. Disciplina y herramientas para modelar, ejecutar y mejorar procesos de negocio.

Explicación: ECM agrupa capacidades de contenido, documentos y procesos.

### Propuesta

¿Qué es ECM?

- A. Sistema centrado en captura, metadatos, versiones, permisos y ciclo de vida de documentos.
- B. Plataforma destinada a crear, organizar y publicar contenidos de un sitio web.
- C. Un concepto paraguas de gestión empresarial de contenidos que puede integrar DMS, workflow, records, colaboración y captura. **(correcta)**
- D. Disciplina y herramientas para modelar, ejecutar y mejorar procesos de negocio.

Explicación: ECM es el enfoque empresarial de gestión de contenidos durante su ciclo de vida mediante estrategias, métodos y herramientas. Puede integrar captura, documentos, colaboración, flujos y gestión de evidencias; no es solo el nombre de un repositorio o un producto. AIIM lo vincula a procesos organizativos. DMS, CMS y BPM tienen focos más específicos y pueden participar en una solución ECM sin ser sinónimos de todo el enfoque.

- Error A: La captura, las versiones y el ciclo documental describen el foco DMS. Son capacidades posibles de ECM, pero no agotan el concepto empresarial de contenidos.
- Error B: Crear y publicar contenido de un sitio es el foco CMS descrito; ECM abarca además otras clases de contenido y su gestión organizativa.
- Error D: Modelar y mejorar procesos es el foco BPM. Puede coordinarse con contenidos y documentos sin definir por sí solo ECM.

- [AIIM: Enterprise Content Management](https://www.aiim.org/Resources/Glossary/Enterprise-Content-Management) · Definición de ECM: estrategias, métodos y herramientas; captura, gestión, almacenamiento, conservación y entrega de contenido en procesos organizativos · versión: Glosario web primario consultado 28-10-2026, sin edición o fecha de actualización cerrada visible; enfoque funcional, no fronteras excluyentes de productos · comprobado: 2026-10-28
- [Microsoft Support: Overview of document management in SharePoint](https://support.microsoft.com/en-au/sharepoint/libraries/overview-of-document-management-in-sharepoint) · The elements of a document management system; The planning process: tipos de contenido, plantillas, metadatos, versiones, acceso y ciclo de vida · versión: Documentación histórica SharePoint 2013/2016 según cabecera/cuerpo, usada para conceptos funcionales; no se afirma soporte actual ni se recomienda ese producto · comprobado: 2026-10-28

Partida: `34ab58b9f36155c104558595fd369f99d6ec1ebb0a7a2f6023fcd0a27bb6dd08` · propuesta: `c1ab30ad51dc3332c034b196a7358cf992e6e1e3efd2d2ae651980f48f223a7a`

## MAN-GSI-P18-085

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la definición y clave B; reconocer nombre y permisos como posibles metadatos parciales y no como categorías totalmente ajenas.

### Antes

¿Qué son metadatos documentales?

- A. El contenido binario íntegro del documento almacenado en el repositorio.
- B. Datos que describen contenido, contexto, estructura, estado o gestión de un documento. **(correcta)**
- C. El nombre del fichero, sin información adicional sobre contexto o gestión.
- D. Los permisos del sistema operativo aplicados al archivo, sin otros datos descriptivos.

Explicación: Título, autor, fecha, expediente, tipo, clasificación, versión o retención son ejemplos.

### Propuesta

¿Qué son metadatos documentales?

- A. El contenido binario íntegro del documento almacenado en el repositorio.
- B. Datos que describen contenido, contexto, estructura, estado o gestión de un documento. **(correcta)**
- C. El nombre del fichero, sin información adicional sobre contexto o gestión.
- D. Los permisos del sistema operativo aplicados al archivo, sin otros datos descriptivos.

Explicación: Los metadatos documentales describen y contextualizan el documento y su gestión: autor, fechas, tipo, relaciones, versión o condiciones de conservación, entre otros. El ENI distingue metadato en general de metadato de gestión de documentos, que permite identificar, autenticar y contextualizar durante el tiempo. Nombre de archivo y datos de permisos pueden ser metadatos, pero tomarlos aisladamente no define el conjunto; tampoco equivalen al contenido binario completo.

- Error A: El contenido binario es el objeto descrito, no la definición de información que lo identifica y contextualiza. Que un archivo incluya metadatos embebidos no hace equivalentes ambos conceptos.
- Error C: Un nombre puede aportar metadatos, pero limitar la definición a él excluye contexto, relaciones y gestión documental.
- Error D: Los datos de permisos pueden describir condiciones de acceso; esa dimensión aislada no cubre los demás metadatos documentales.

- [BOE: Real Decreto 4/2010, ENI](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331) · Anexo, glosario: Metadato; Metadato de gestión de documentos; Política de gestión de documentos electrónicos; Repositorio electrónico · versión: Consolidación informativa consultada; actualización global publicada 06-11-2024. El glosario se distingue de remisiones históricas en otras partes del texto · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo de vida y contexto; VI.1 captura, VI.3 clasificación, VI.4 descripción, VI.5 acceso, VI.6 calificación, VI.7 conservación, VI.8 transferencia, VI.9 destrucción; VII metadatos; X supervisión y auditoría · versión: Resolución de 28-06-2012, texto inicial publicado 26-07-2012. Sus remisiones históricas a Ley 30/1992 y RD 3/2010 se contrastan con LPAC 39/2015 y ENS 311/2022; no se presentan como normativa actual · comprobado: 2026-10-28

Partida: `b9aad987ebe52fb99d695476f97319988fbecb2c744bf81d3dd6e5832eae78f4` · propuesta: `d6084d8ac871397d3ed4976c2644eaa64e17dee89134b08999c69b590e628bcc`

## MAN-GSI-P18-086

Decisión: pending_review · acción: revise.

Motivo: Conservar utilidad del modelo de metadatos y clave D; microcaso de unidades con categorías incompatibles, sin prometer automatización infalible.

### Antes

¿Qué ventaja aporta un modelo de metadatos bien gobernado?

- A. Sustituir permisos y control de acceso, porque una clasificación correcta impide técnicamente toda consulta no autorizada.
- B. Reemplazar backups y recuperación, dado que los metadatos permiten reconstruir automáticamente el contenido perdido.
- C. Impedir cualquier cambio o nueva versión del documento, convirtiendo todos los repositorios en archivos inmutables.
- D. Facilita clasificación, búsqueda, automatización y aplicación de políticas coherentes. **(correcta)**

Explicación: Los metadatos son base de búsqueda y ciclo de vida.

### Propuesta

Dos unidades usan nombres distintos para las mismas series y campos con significados incompatibles. ¿Qué ventaja aporta un modelo de metadatos bien gobernado?

- A. Cada unidad conserva sus categorías locales y el buscador corrige las diferencias.
- B. Una política común de copias determina por sí sola la serie de cada documento.
- C. Una plantilla visual uniforme permite prescindir del significado de los campos.
- D. Campos y vocabularios comunes mejoran clasificación, búsqueda y reglas de gestión. **(correcta)**

Explicación: Un modelo gobernado define significado, responsabilidades, vocabularios y controles de calidad de los metadatos. Aplicado correctamente, permite que clasificación, búsqueda y reglas de ciclo de vida interpreten los datos de forma coherente entre unidades. No garantiza por sí solo datos correctos ni sustituye acceso, copias o revisión: necesita implantación, mantenimiento y supervisión. La NTI exige gestionar metadatos vinculados a documentos y adecuados a necesidades de gestión.

- Error A: Un buscador puede ayudar, pero mantener categorías con significados incompatibles no establece un modelo común ni asegura que las políticas interpreten lo mismo.
- Error B: Las copias protegen recuperación técnica; no asignan el significado de una serie ni resuelven discrepancias entre campos documentales.
- Error C: Igualar la apariencia de las plantillas no define semántica ni controles de los campos; el mismo rótulo puede seguir significando cosas distintas.

- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo de vida y contexto; VI.1 captura, VI.3 clasificación, VI.4 descripción, VI.5 acceso, VI.6 calificación, VI.7 conservación, VI.8 transferencia, VI.9 destrucción; VII metadatos; X supervisión y auditoría · versión: Resolución de 28-06-2012, texto inicial publicado 26-07-2012. Sus remisiones históricas a Ley 30/1992 y RD 3/2010 se contrastan con LPAC 39/2015 y ENS 311/2022; no se presentan como normativa actual · comprobado: 2026-10-28
- [BOE: Real Decreto 4/2010, ENI](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331) · Anexo, glosario: Metadato; Metadato de gestión de documentos; Política de gestión de documentos electrónicos; Repositorio electrónico · versión: Consolidación informativa consultada; actualización global publicada 06-11-2024. El glosario se distingue de remisiones históricas en otras partes del texto · comprobado: 2026-10-28

Partida: `b7332cf5fb4cea20f4bd37aaae0beb28a332a434965a66f8382f2998c1d3b76e` · propuesta: `a268852e65eec65e7f36fcd2a0d2acb222c33c40f4828a63f53c5db50093143e`

## MAN-GSI-P18-088

Decisión: pending_review · acción: revise.

Motivo: Conservar complementariedad versionado/backup y clave C; caso de pérdida del repositorio y su historial, reconociendo recuperación parcial por versiones.

### Antes

¿Qué diferencia hay entre versionado y backup?

- A. No existe diferencia.
- B. Backup solo guarda metadatos.
- C. Versionado conserva revisiones lógicas; backup permite recuperar el sistema/datos ante pérdida o corrupción más amplia. **(correcta)**
- D. Versionado protege automáticamente frente a ransomware del repositorio.

Explicación: Son controles complementarios y no intercambiables.

### Propuesta

Se pierden un repositorio y su historial de versiones. Hay que recuperarlos desde copias adecuadas. ¿Qué diferencia entre versionado y backup explica esa necesidad?

- A. El historial basta, pues cada revisión es una copia recuperable fuera del repositorio.
- B. Las copias sustituyen el historial y permiten comparar cualquier revisión lógica.
- C. El historial guarda revisiones; las copias recuperan pérdidas de alcance más amplio. **(correcta)**
- D. El historial bloquea el borrado del repositorio y evita necesitar una restauración.

Explicación: El versionado conserva revisiones lógicas y puede recuperar una anterior si sigue disponible. Un backup adecuado permite restaurar datos o sistemas ante una pérdida que afecte también al historial del repositorio. Son controles complementarios: las revisiones dependen de ubicación, límites y permisos; las copias, de alcance, conservación y procedimientos de restauración. El ENS contempla copias para recuperar pérdidas, con refuerzos según categoría; no toda copia sirve para cualquier escenario.

- Error A: No se ha indicado una copia fuera del repositorio. Si se pierden documento e historial, sus revisiones internas no constituyen por sí solas una fuente externa de restauración.
- Error B: Las copias recuperan estados según frecuencia y alcance; no aseguran la comparación de cada revisión lógica ni sustituyen todas las funciones del historial.
- Error D: Conservar versiones no implica bloquear una pérdida o borrado del repositorio; siguen siendo necesarias medidas de recuperación adecuadas.

- [Microsoft Support: How versioning works in lists and libraries](https://support.microsoft.com/en-us/sharepoint/lists/documents-and-library/how-versioning-works-in-lists-and-libraries) · Version history y recuperación de versiones; límites y eliminación de versiones antiguas; interacción con checkout y permisos · versión: Documentación web de SharePoint consultada 28-10-2026, sin fijar límites comerciales de almacenamiento o versión. Historial condicionado por configuración y permisos · comprobado: 2026-10-28
- [BOE: Real Decreto 311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · 20 mínimo privilegio; anexo II op.acc.2 requisitos de acceso y mp.info.6 copias de seguridad; disposición derogatoria única, RD 3/2010 · versión: Consolidación informativa, actualización global publicada 06-11-2024. En mp.info.6, base para todos los niveles, R1 medio/alto y R2 alto; no se universalizan refuerzos de categorías superiores · comprobado: 2026-10-28

Partida: `00a2e4e9b6c5f1eeab80a41c19432a66ff6814dfb68bbb7066b908a752c4bef8` · propuesta: `b72ba508f418083c337bbd88d92eb644af23db957689cb1da1e3a49b1270ad18`

## MAN-GSI-P18-089

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra pregunta y clave B; corregir matiz del feedback: en SharePoint no hay checkout exclusivo y coautoría simultánea del mismo archivo.

### Antes

¿Qué es check-out/check-in?

- A. Un control optimista que permite ediciones paralelas y detecta conflictos al guardar mediante versión o ETag.
- B. Un mecanismo para reservar/editar y reincorporar un documento controlando concurrencia/versiones. **(correcta)**
- C. Un bloqueo administrativo permanente que impide nuevas versiones y conserva el documento únicamente para consulta.
- D. Una operación de fusión que combina cambios de dos ramas documentales después de resolver sus diferencias.

Explicación: Puede coexistir con coedición moderna según plataforma.

### Propuesta

¿Qué es check-out/check-in?

- A. Un control optimista que permite ediciones paralelas y detecta conflictos al guardar mediante versión o ETag.
- B. Un mecanismo para reservar/editar y reincorporar un documento controlando concurrencia/versiones. **(correcta)**
- C. Un bloqueo administrativo permanente que impide nuevas versiones y conserva el documento únicamente para consulta.
- D. Una operación de fusión que combina cambios de dos ramas documentales después de resolver sus diferencias.

Explicación: Check-out reserva un documento para editarlo bajo el control de concurrencia previsto; check-in lo reincorpora y permite que los cambios estén disponibles conforme a las reglas de publicación y versiones. En SharePoint, el checkout exclusivo impide la coautoría simultánea del mismo archivo hasta reincorporarlo. Una plataforma puede ofrecer ambos modos, pero no significa que actúen a la vez sobre un archivo reservado. No es una fusión de ramas ni un bloqueo permanente de consulta.

- Error A: El control optimista permite trabajar en paralelo y comprobar conflictos al guardar; no describe la reserva exclusiva seguida de reincorporación del checkout planteado.
- Error C: La reserva de edición termina con el check-in u otra operación autorizada; no convierte el documento permanentemente en solo lectura.
- Error D: Una fusión combina cambios de ramas; checkout/check-in controla reserva y reincorporación sin implicar una fusión de ese tipo.

- [Microsoft Support: Open or check out a SharePoint-based file from within an Office app](https://support.microsoft.com/en-us/office/collab-files/open-or-check-out-a-sharepoint-based-file-from-within-an-office-app) · Diferencia entre abrir para coautoría y checkout; edición exclusiva hasta check-in; incompatibilidad con coautoría simultánea del mismo archivo · versión: Documentación de SharePoint/Office consultada 28-10-2026; comportamiento de esa plataforma, sin fecha editorial inventada ni extrapolación a todo DMS · comprobado: 2026-10-28
- [Microsoft Support: How versioning works in lists and libraries](https://support.microsoft.com/en-us/sharepoint/lists/documents-and-library/how-versioning-works-in-lists-and-libraries) · Version history y recuperación de versiones; límites y eliminación de versiones antiguas; interacción con checkout y permisos · versión: Documentación web de SharePoint consultada 28-10-2026, sin fijar límites comerciales de almacenamiento o versión. Historial condicionado por configuración y permisos · comprobado: 2026-10-28

Partida: `c423d856854779203e5c836e799f674ac17c42cf9742c0272d2d8d95880b462c` · propuesta: `80171e6fa2c888dc8a4847009f7abba18863ee0a8e2142342fffadffa4d6b51a`

## MAN-GSI-P18-090

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra distinción política/hold/backup/disposición y clave A; precisar eventos, autorización y excepciones a eliminación.

### Antes

¿Qué es una política de retención?

- A. Una regla que define cuánto tiempo conservar información y cuándo transferir, archivar o eliminar según requisitos. **(correcta)**
- B. Suspender temporalmente la eliminación ordinaria para preservar información relacionada con una obligación o procedimiento.
- C. Definir frecuencia, alcance, copias y restauración para proteger información frente a pérdida o corrupción técnica.
- D. Ejecutar al final del periodo la eliminación, transferencia o conservación permanente prevista para una serie.

Explicación: La retención debe responder a valor legal, administrativo, histórico y de negocio.

### Propuesta

¿Qué es una política de retención?

- A. Una regla que define cuánto tiempo conservar información y cuándo transferir, archivar o eliminar según requisitos. **(correcta)**
- B. Suspender temporalmente la eliminación ordinaria para preservar información relacionada con una obligación o procedimiento.
- C. Definir frecuencia, alcance, copias y restauración para proteger información frente a pérdida o corrupción técnica.
- D. Ejecutar al final del periodo la eliminación, transferencia o conservación permanente prevista para una serie.

Explicación: Una política de retención establece periodos, condiciones y destino documental según requisitos y valoración. Debe precisar el evento de inicio y las reglas aplicables, no limitarse a una fecha de borrado. Puede prever eliminación autorizada, transferencia o conservación; un bloqueo de conservación puede impedir ejecutar la eliminación ordinaria. La NTI distingue calificación, conservación, transferencia y destrucción, y la LPAC exige autorización para eliminar según normativa aplicable.

- Error B: La suspensión para preservar información ante una obligación o procedimiento es un hold; puede afectar a la ejecución del calendario, pero no define la política ordinaria completa.
- Error C: La frecuencia y restauración de copias responde a recuperación técnica. Puede requerir retención de backups, pero no sustituye la política de ciclo documental preguntada.
- Error D: Ejecutar el destino final aplica una decisión de disposición; la política establece anticipadamente criterios, periodos y condiciones.

- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo de vida y contexto; VI.1 captura, VI.3 clasificación, VI.4 descripción, VI.5 acceso, VI.6 calificación, VI.7 conservación, VI.8 transferencia, VI.9 destrucción; VII metadatos; X supervisión y auditoría · versión: Resolución de 28-06-2012, texto inicial publicado 26-07-2012. Sus remisiones históricas a Ley 30/1992 y RD 3/2010 se contrastan con LPAC 39/2015 y ENS 311/2022; no se presentan como normativa actual · comprobado: 2026-10-28
- [BOE: Ley 39/2015, LPAC](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) · 17 archivo y eliminación autorizada; 26 emisión y validez documental; 70.1–4 expediente, índice y exclusiones; derogatoria única 2.a y final cuarta, remisiones a Ley 30/1992 · versión: Consolidación informativa consultada, actualización global publicada 06-11-2024; se distingue fecha global de la redacción concreta de cada artículo · comprobado: 2026-10-28
- [Microsoft Learn: Learn about retention for Microsoft Purview](https://learn.microsoft.com/en-us/purview/retention) · Retención y eliminación; diferencia entre políticas/etiquetas de retención y eDiscovery holds; liberación del hold y condiciones de eliminación restantes · versión: Documentación viva consultada 28-10-2026; ejemplo técnico de Microsoft Purview, no definición de un régimen jurídico español universal. Se evita universalizar prioridad del plazo más largo ante las excepciones documentadas · comprobado: 2026-10-28

Partida: `e0d300e145b75c90c11c9fe14aaf729fc6eb11444a9c22f3db22b77c6c88491f` · propuesta: `0ccf4bebd5a210f343b7b40f37232e3296ffb7619b3449d1c7bb7e24dc00586f`

## MAN-GSI-P18-091

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave A; diferenciar alcance temporal/objetivo y liberación del hold de eliminación automática.

### Antes

¿Qué es un legal hold o bloqueo de conservación?

- A. Una suspensión de eliminación normal para preservar información relevante ante una obligación o procedimiento. **(correcta)**
- B. El calendario ordinario que asigna periodos de retención y una disposición final a cada serie documental.
- C. La ejecución controlada de eliminación, transferencia o conservación permanente al concluir la retención.
- D. La declaración de un documento como record para restringir cambios y someterlo a reglas de gestión documental.

Explicación: El hold prevalece temporalmente sobre reglas normales de disposición cuando procede.

### Propuesta

¿Qué es un legal hold o bloqueo de conservación?

- A. Una suspensión de eliminación normal para preservar información relevante ante una obligación o procedimiento. **(correcta)**
- B. El calendario ordinario que asigna periodos de retención y una disposición final a cada serie documental.
- C. La ejecución controlada de eliminación, transferencia o conservación permanente al concluir la retención.
- D. La declaración de un documento como record para restringir cambios y someterlo a reglas de gestión documental.

Explicación: Un legal hold preserva información relevante suspendiendo su eliminación ordinaria mientras exista la obligación o procedimiento que lo justifica. Su alcance debe definirse; no congela necesariamente toda la organización ni equivale a retención ilimitada de todo documento. Microsoft Purview distingue el hold de eDiscovery de las políticas ordinarias de retención. Liberarlo no obliga a borrar de inmediato: pueden subsistir otras condiciones de conservación. Es un ejemplo técnico, sujeto al marco jurídico aplicable.

- Error B: El calendario fija periodos y destinos ordinarios; el hold responde a una necesidad específica de preservación que puede impedir ejecutar ese destino.
- Error C: La disposición ejecuta el destino autorizado. El hold impide la eliminación ordinaria de la información afectada mientras deba preservarse.
- Error D: Declarar un documento como record puede restringir cambios y someterlo a políticas, pero no constituye por sí mismo un hold para un procedimiento concreto.

- [Microsoft Learn: Learn about retention for Microsoft Purview](https://learn.microsoft.com/en-us/purview/retention) · Retención y eliminación; diferencia entre políticas/etiquetas de retención y eDiscovery holds; liberación del hold y condiciones de eliminación restantes · versión: Documentación viva consultada 28-10-2026; ejemplo técnico de Microsoft Purview, no definición de un régimen jurídico español universal. Se evita universalizar prioridad del plazo más largo ante las excepciones documentadas · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo de vida y contexto; VI.1 captura, VI.3 clasificación, VI.4 descripción, VI.5 acceso, VI.6 calificación, VI.7 conservación, VI.8 transferencia, VI.9 destrucción; VII metadatos; X supervisión y auditoría · versión: Resolución de 28-06-2012, texto inicial publicado 26-07-2012. Sus remisiones históricas a Ley 30/1992 y RD 3/2010 se contrastan con LPAC 39/2015 y ENS 311/2022; no se presentan como normativa actual · comprobado: 2026-10-28

Partida: `823b4181d0a37b7f7c8fcd53683a53f4bdb65adec2487a931749b2cb0f72131b` · propuesta: `bc0427cd022a01a84e66b3155562415690b9a36770cb3fd1e9a61a8335bf0725`

## MAN-GSI-P18-092

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y clave A; distinguir destino final, descripción, clasificación y acceso, con ámbito de fuentes explícito.

### Antes

¿Qué significa disposición documental?

- A. La acción final controlada sobre documentos al terminar su retención: eliminación, transferencia o conservación permanente según política. **(correcta)**
- B. La clasificación inicial de los documentos en series y cuadros para organizar su gestión desde la creación.
- C. La descripción de documentos mediante metadatos que facilitan su identificación, búsqueda y recuperación.
- D. La aplicación de permisos y restricciones para determinar quién puede consultar o modificar cada documento.

Explicación: La disposición forma parte del ciclo de vida y requiere autorización/trazabilidad.

### Propuesta

¿Qué significa disposición documental?

- A. La acción final controlada sobre documentos al terminar su retención: eliminación, transferencia o conservación permanente según política. **(correcta)**
- B. La clasificación inicial de los documentos en series y cuadros para organizar su gestión desde la creación.
- C. La descripción de documentos mediante metadatos que facilitan su identificación, búsqueda y recuperación.
- D. La aplicación de permisos y restricciones para determinar quién puede consultar o modificar cada documento.

Explicación: La disposición ejecuta de forma controlada el destino previsto al finalizar la conservación correspondiente: eliminación autorizada, transferencia o conservación permanente, según valoración y política. No significa borrar siempre ni tratar igual todas las series. Deben comprobarse restricciones de conservación y documentarse las decisiones. NARA ilustra el significado amplio en su ámbito estadounidense; para la Administración española, la NTI y el artículo 17 LPAC aportan los requisitos aplicables, sin trasladar autoridades estadounidenses.

- Error B: La clasificación identifica la serie o categoría desde la incorporación; informa el ciclo de vida, pero no es la ejecución del destino final.
- Error C: La descripción permite identificar y recuperar mediante metadatos; se utiliza durante el ciclo sin equivaler a la disposición.
- Error D: Los permisos regulan acceso y modificación. Pueden condicionar quién ejecuta una disposición, pero no son esa acción final.

- [NARA: Records Basics](https://www.archives.gov/records-mgmt/scheduling/basics) · Other Common Terms: Disposal, Disposition, Records lifecycle y Records series; disposición incluye transferencia y destino de registros temporales/permanentes · versión: Página revisada 28-07-2025 según pie, consultada 28-10-2026. Terminología de administración federal estadounidense; no se exige autorización NARA a documentos españoles · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo de vida y contexto; VI.1 captura, VI.3 clasificación, VI.4 descripción, VI.5 acceso, VI.6 calificación, VI.7 conservación, VI.8 transferencia, VI.9 destrucción; VII metadatos; X supervisión y auditoría · versión: Resolución de 28-06-2012, texto inicial publicado 26-07-2012. Sus remisiones históricas a Ley 30/1992 y RD 3/2010 se contrastan con LPAC 39/2015 y ENS 311/2022; no se presentan como normativa actual · comprobado: 2026-10-28
- [BOE: Ley 39/2015, LPAC](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) · 17 archivo y eliminación autorizada; 26 emisión y validez documental; 70.1–4 expediente, índice y exclusiones; derogatoria única 2.a y final cuarta, remisiones a Ley 30/1992 · versión: Consolidación informativa consultada, actualización global publicada 06-11-2024; se distingue fecha global de la redacción concreta de cada artículo · comprobado: 2026-10-28

Partida: `94e92ea82c6de739795325ed6edfb94a1a83c352ed5b67a16aa9103ba7f31382` · propuesta: `4a8e5c97001296f7c98939cfc9b56259bbc8b3972cc0d33d8994d7566b20197f`

## MAN-GSI-P18-093

Decisión: pending_review · acción: revise.

Motivo: Conservar beneficio del OCR y clave B; microcaso de PDF escaneado sin texto indexable, separando reconocimiento, autenticidad y clasificación.

### Antes

¿Qué ventaja aporta OCR en gestión documental?

- A. Garantizar la validez jurídica de cualquier documento.
- B. Extraer texto de imágenes/documentos escaneados para búsqueda y procesamiento, con revisión según calidad. **(correcta)**
- C. Sustituir metadatos y firma.
- D. Cifrar el repositorio.

Explicación: OCR facilita explotación del contenido, pero puede cometer errores.

### Propuesta

Un archivo contiene PDF escaneados como imágenes, sin texto indexable. ¿Qué aporta aplicar OCR para facilitar su búsqueda?

- A. Validar la autenticidad del escaneo sin comprobar su procedencia.
- B. Obtener texto indexable y revisable, pues puede contener errores. **(correcta)**
- C. Asignar la serie y el plazo de retención a partir del formato PDF.
- D. Reconstruir con fidelidad garantizada las tablas y el diseño original.

Explicación: OCR reconoce caracteres de una imagen y produce texto que puede indexarse y procesarse. En escaneos su utilidad depende de resolución, ruido, orientación, segmentación y otros factores; deben revisarse los errores según el uso y riesgo. No acredita autenticidad jurídica ni asigna por sí mismo una serie o retención. Tesseract documenta preprocesado y limitaciones, incluidas tablas; obtener texto no garantiza reconstruir exactamente toda la maquetación.

- Error A: El reconocimiento de caracteres no verifica por sí solo origen, integridad o autenticidad del documento; esos controles requieren evidencias adicionales.
- Error C: El formato PDF no determina función o serie documental. Asignar retención exige contexto, clasificación y reglas, aunque el texto reconocido pueda ayudar.
- Error D: El OCR puede perder estructura o interpretar mal tablas; no garantiza reproducir fielmente toda la presentación original.

- [Tesseract OCR: Improving the quality of the output](https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html) · Image processing: rescaling, binarisation, noise removal y rotation/deskewing; page segmentation; limitaciones de reconocimiento de tablas · versión: Documentación oficial viva consultada 28-10-2026, sin versión cerrada declarada en esta página. Lectura conceptual; no se ejecuta OCR, instala software o convierte documentos · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo de vida y contexto; VI.1 captura, VI.3 clasificación, VI.4 descripción, VI.5 acceso, VI.6 calificación, VI.7 conservación, VI.8 transferencia, VI.9 destrucción; VII metadatos; X supervisión y auditoría · versión: Resolución de 28-06-2012, texto inicial publicado 26-07-2012. Sus remisiones históricas a Ley 30/1992 y RD 3/2010 se contrastan con LPAC 39/2015 y ENS 311/2022; no se presentan como normativa actual · comprobado: 2026-10-28
- [BOE: Ley 39/2015, LPAC](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) · 17 archivo y eliminación autorizada; 26 emisión y validez documental; 70.1–4 expediente, índice y exclusiones; derogatoria única 2.a y final cuarta, remisiones a Ley 30/1992 · versión: Consolidación informativa consultada, actualización global publicada 06-11-2024; se distingue fecha global de la redacción concreta de cada artículo · comprobado: 2026-10-28

Partida: `1e6c069f25976ed92fe6a0c2d0f3d16bedaa988ead6b803f316401824deebc2e` · propuesta: `72961140759d7847881e947d0f198d82d9b2f58e4be3e43b8f46287dae63a876`

## MAN-GSI-P18-094

Decisión: pending_review · acción: revise.

Motivo: Conservar asignación controlada y clave D; delimitar cuadro aprobado para distinguir clasificación de orden, formato y etiquetado personal.

### Antes

¿Qué es clasificación documental?

- A. Ordenar los ficheros únicamente por tamaño, sin considerar su función, serie, contexto de creación ni reglas de conservación.
- B. Convertir todos los documentos a un formato único para que la extensión resultante sustituya a cualquier criterio archivístico.
- C. Eliminar los permisos del repositorio para que la ausencia de restricciones determine automáticamente la categoría de cada documento.
- D. Asignar documentos a categorías/series/tipos según una estructura controlada. **(correcta)**

Explicación: La clasificación facilita contexto, retención y acceso.

### Propuesta

En un DMS con un cuadro de clasificación aprobado, ¿qué operación realiza la clasificación documental?

- A. Ordenar los resultados por fecha sin asignar una categoría documental.
- B. Convertir los documentos a PDF sin relacionarlos con una serie.
- C. Asignar etiquetas personales sin vincularlas al cuadro aprobado.
- D. Asignar documentos a categorías o series del cuadro de clasificación. **(correcta)**

Explicación: En el contexto planteado, clasificar es asignar documentos a categorías o series del cuadro controlado, atendiendo a las funciones y actividades que les dan contexto. La NTI contempla clasificación funcional y formación de expedientes. Ordenar resultados por fecha, convertir un formato o añadir etiquetas personales son operaciones distintas. Una misma solución puede combinarlas, pero no reemplazan la asignación al cuadro de clasificación.

- Error A: La ordenación cronológica cambia el orden de presentación; no asigna categoría o serie en el cuadro aprobado.
- Error B: Convertir el formato puede apoyar conservación o intercambio, pero no identifica la función o serie documental.
- Error C: Las etiquetas personales pueden ayudar a recuperar contenido, pero sin vinculación al cuadro no realizan la clasificación controlada preguntada.

- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo de vida y contexto; VI.1 captura, VI.3 clasificación, VI.4 descripción, VI.5 acceso, VI.6 calificación, VI.7 conservación, VI.8 transferencia, VI.9 destrucción; VII metadatos; X supervisión y auditoría · versión: Resolución de 28-06-2012, texto inicial publicado 26-07-2012. Sus remisiones históricas a Ley 30/1992 y RD 3/2010 se contrastan con LPAC 39/2015 y ENS 311/2022; no se presentan como normativa actual · comprobado: 2026-10-28
- [BOE: Real Decreto 4/2010, ENI](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331) · Anexo, glosario: Metadato; Metadato de gestión de documentos; Política de gestión de documentos electrónicos; Repositorio electrónico · versión: Consolidación informativa consultada; actualización global publicada 06-11-2024. El glosario se distingue de remisiones históricas en otras partes del texto · comprobado: 2026-10-28

Partida: `b094107e29712de82436d2c926083bd49db3cc9686e0fd536c05e970941e9273` · propuesta: `5a5bd5a173bc9689c5cd25fe91cae3afa0ad1a073a7f1299203e0a3ad16ac69e`

## MAN-GSI-P18-095

Decisión: pending_review · acción: revise.

Motivo: Conservar alcance de gobierno y clave A; distractores como configuraciones incompletas plausibles, sin cuentas compartidas o acceso global evidentemente impropios.

### Antes

¿Qué debe gobernarse en permisos de un repositorio documental?

- A. Roles, mínimo privilegio, herencias, acceso externo, información sensible y trazabilidad. **(correcta)**
- B. Conceder acceso global para facilitar las búsquedas, aunque cada usuario pueda consultar documentos ajenos a sus funciones y necesidad.
- C. Utilizar una sola cuenta compartida para todo el personal, de modo que los cambios conserven una identidad común y simplifiquen la administración.
- D. Desactivar la auditoría para reducir almacenamiento, aunque ya no pueda conocerse quién consultó, modificó o compartió información sensible.

Explicación: Los repositorios suelen contener información sensible y requieren control de acceso fino.

### Propuesta

¿Qué debe gobernarse en permisos de un repositorio documental?

- A. Roles, mínimo privilegio, herencias, acceso externo, sensibilidad y trazabilidad. **(correcta)**
- B. Permisos por carpeta heredados, sin revisar las excepciones de acceso externo.
- C. Acceso al entrar en la unidad, sin revisarlo al cambiar de función o puesto.
- D. Permisos de lectura internos, dejando las modificaciones fuera de la revisión.

Explicación: Los permisos requieren gobernar roles y necesidades de acceso, mínimo privilegio, herencias y excepciones, compartición externa, sensibilidad y trazabilidad. No basta configurar una carpeta una vez: deben revisarse los accesos y sus cambios conforme a responsabilidades. El ENS establece mínimo privilegio y requisitos de acceso, y la NTI prevé control de acceso y trazas. La concreción depende de categoría y política; no se imponen todos los refuerzos ENS a cualquier sistema.

- Error B: La herencia simplifica gestión, pero ignorar excepciones de compartición externa deja accesos potencialmente incompatibles con la política.
- Error C: Cambiar de puesto puede cambiar la necesidad de acceso. Mantener sin revisión permisos iniciales no asegura mínimo privilegio.
- Error D: Es necesario controlar también quién modifica, elimina o comparte según funciones; revisar solo lectura deja operaciones relevantes fuera del gobierno.

- [BOE: Real Decreto 311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · 20 mínimo privilegio; anexo II op.acc.2 requisitos de acceso y mp.info.6 copias de seguridad; disposición derogatoria única, RD 3/2010 · versión: Consolidación informativa, actualización global publicada 06-11-2024. En mp.info.6, base para todos los niveles, R1 medio/alto y R2 alto; no se universalizan refuerzos de categorías superiores · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo de vida y contexto; VI.1 captura, VI.3 clasificación, VI.4 descripción, VI.5 acceso, VI.6 calificación, VI.7 conservación, VI.8 transferencia, VI.9 destrucción; VII metadatos; X supervisión y auditoría · versión: Resolución de 28-06-2012, texto inicial publicado 26-07-2012. Sus remisiones históricas a Ley 30/1992 y RD 3/2010 se contrastan con LPAC 39/2015 y ENS 311/2022; no se presentan como normativa actual · comprobado: 2026-10-28

Partida: `01432790e6b523f95f7a4c79a416aeb6cbfb77687cfd03327aca1bb2d782df9f` · propuesta: `b579a03526fa6abc8735ed69b8e4a15691f568b30cdcd850ff3041e42c5a723d`

## MAN-GSI-P18-096

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de metadatos no fiables y clave C; microcaso con contenido íntegro y serie/fechas erróneas, sin confundir integridad binaria y semántica.

### Antes

¿Qué riesgo tiene guardar documentos sin metadatos fiables?

- A. Mejorar la precisión de búsqueda porque la ausencia de campos descriptivos obliga al motor a inferir siempre el significado correcto del texto.
- B. Eliminar automáticamente duplicados, ya que dos documentos sin metadatos se reconocen como equivalentes aunque su contenido sea diferente.
- C. Dificulta búsqueda, clasificación, retención, trazabilidad y automatización. **(correcta)**
- D. Garantizar el cumplimiento normativo al impedir que existan fechas, categorías o responsables que condicionen las reglas de conservación.

Explicación: La calidad del repositorio depende también de metadatos y gobierno.

### Propuesta

Los archivos siguen íntegros, pero sus series y fechas de gestión se han importado con errores. ¿Qué riesgo documental persiste?

- A. Los backups corrigen el significado de la serie cuando se restaura el archivo.
- B. El texto íntegro permite deducir sin revisión la fecha que inicia toda retención.
- C. Se comprometen búsqueda, clasificación, retención, trazabilidad y automatización. **(correcta)**
- D. Los permisos compensan las fechas y categorías erróneas en las reglas de gestión.

Explicación: Aunque el archivo conserve sus bits, metadatos no fiables pueden impedir identificarlo correctamente, recuperar su contexto, aplicar la serie y calcular la retención desde el evento adecuado. También afectan trazabilidad y automatización. Restaurar una copia de los mismos datos erróneos no corrige su significado; texto completo y permisos no sustituyen todo el contexto documental. La NTI exige vinculación, integridad y disponibilidad de metadatos y gestión conforme a las necesidades documentales.

- Error A: Una restauración recupera el estado copiado; si ya contenía una serie incorrecta, no la corrige semánticamente por el hecho de restaurar.
- Error B: El evento que inicia el cómputo puede depender de tramitación o cierre, y no estar deducible del texto. Se requieren datos y reglas fiables.
- Error D: Los permisos controlan acceso; no convierten una fecha o categoría errónea en un dato correcto para la retención o clasificación.

- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo de vida y contexto; VI.1 captura, VI.3 clasificación, VI.4 descripción, VI.5 acceso, VI.6 calificación, VI.7 conservación, VI.8 transferencia, VI.9 destrucción; VII metadatos; X supervisión y auditoría · versión: Resolución de 28-06-2012, texto inicial publicado 26-07-2012. Sus remisiones históricas a Ley 30/1992 y RD 3/2010 se contrastan con LPAC 39/2015 y ENS 311/2022; no se presentan como normativa actual · comprobado: 2026-10-28
- [BOE: Real Decreto 4/2010, ENI](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331) · Anexo, glosario: Metadato; Metadato de gestión de documentos; Política de gestión de documentos electrónicos; Repositorio electrónico · versión: Consolidación informativa consultada; actualización global publicada 06-11-2024. El glosario se distingue de remisiones históricas en otras partes del texto · comprobado: 2026-10-28

Partida: `e4ff2c99a7c5d3c01f0cbb82f6d28b544af766c0271d635c6d2306ae3cbf5776` · propuesta: `a5d7b0d36ea93cd3068be22753a4218a7d65200f57709c77811aaf44c03878d7`

## MAN-GSI-P18-097

Decisión: pending_review · acción: revise.

Motivo: Conservar documento frente a expediente y clave D; microcaso de escritos, informes y resolución ordenados, precisando índice en remisión y exclusiones legales.

### Antes

¿Qué diferencia hay entre documento y expediente electrónico en contexto administrativo?

- A. Un documento individual siempre contiene el procedimiento completo, mientras el expediente representa una única página o fichero.
- B. El expediente es una serie documental general que agrupa todos los procedimientos del mismo tipo sin distinguir cada tramitación.
- C. Ambos son nombres del repositorio electrónico que almacena archivos, no objetos con estructura, metadatos y funciones diferentes.
- D. El expediente agrupa documentos y actuaciones relacionados con un procedimiento, con estructura y metadatos propios. **(correcta)**

Explicación: La gestión pública distingue documento individual de expediente como conjunto organizado.

### Propuesta

Un organismo reúne ordenadamente los escritos, informes y resolución de un procedimiento y prepara su índice para remitirlo. ¿Qué distingue ese expediente de un documento individual?

- A. Cada escrito es un expediente completo por estar firmado electrónicamente.
- B. El conjunto es una serie que reúne todas las tramitaciones del mismo tipo.
- C. El repositorio que los almacena constituye por sí mismo el expediente.
- D. El expediente reúne documentos y actuaciones ordenados del procedimiento. **(correcta)**

Explicación: El expediente administrativo reúne ordenadamente documentos y actuaciones que sirven de antecedente y fundamento a la resolución, junto con las diligencias para ejecutarla. No es un documento individual, una serie de todos los procedimientos de un tipo ni todo el repositorio. El artículo 70 LPAC regula su forma electrónica y agregación ordenada, con índice numerado al remitirlo y las exclusiones del apartado 4. Un mismo documento puede pertenecer a distintos expedientes; el índice autenticado protege su integridad en la remisión prevista.

- Error A: Firmar un escrito no lo convierte en el conjunto organizado de antecedentes, actuaciones y diligencias del procedimiento.
- Error B: La serie agrupa documentos vinculados a una función o tipo de actividad; el expediente planteado corresponde a una tramitación concreta.
- Error C: El repositorio puede alojar muchos expedientes y documentos; la mera ubicación común no define su estructura y relación procedimental.

- [BOE: Ley 39/2015, LPAC](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) · 17 archivo y eliminación autorizada; 26 emisión y validez documental; 70.1–4 expediente, índice y exclusiones; derogatoria única 2.a y final cuarta, remisiones a Ley 30/1992 · versión: Consolidación informativa consultada, actualización global publicada 06-11-2024; se distingue fecha global de la redacción concreta de cada artículo · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo de vida y contexto; VI.1 captura, VI.3 clasificación, VI.4 descripción, VI.5 acceso, VI.6 calificación, VI.7 conservación, VI.8 transferencia, VI.9 destrucción; VII metadatos; X supervisión y auditoría · versión: Resolución de 28-06-2012, texto inicial publicado 26-07-2012. Sus remisiones históricas a Ley 30/1992 y RD 3/2010 se contrastan con LPAC 39/2015 y ENS 311/2022; no se presentan como normativa actual · comprobado: 2026-10-28
- [NARA: Records Basics](https://www.archives.gov/records-mgmt/scheduling/basics) · Other Common Terms: Disposal, Disposition, Records lifecycle y Records series; disposición incluye transferencia y destino de registros temporales/permanentes · versión: Página revisada 28-07-2025 según pie, consultada 28-10-2026. Terminología de administración federal estadounidense; no se exige autorización NARA a documentos españoles · comprobado: 2026-10-28

Partida: `0a19366d38c468db85428266f9c583beaf1d685f960e9d59ffc6646cae913951` · propuesta: `ef691696ee2866fcde472d6ad525f7c673c818c4e6c88592e1731c1ab67124eb`

## MAN-GSI-P18-098

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra pregunta y clave B; justificar cercanía y diferencias de plantilla, tipo, estilo y workflow.

### Antes

¿Qué es una plantilla documental?

- A. Una definición de tipo documental que establece metadatos obligatorios, reglas y comportamiento de una clase de documentos.
- B. Un patrón reutilizable que estandariza estructura, campos y presentación de documentos. **(correcta)**
- C. Un workflow que encadena tareas, decisiones y responsables para tramitar un documento durante su ciclo de vida.
- D. Una hoja de estilos que controla la presentación visual sin aportar por sí misma la estructura reutilizable del documento.

Explicación: Las plantillas favorecen consistencia y automatización.

### Propuesta

¿Qué es una plantilla documental?

- A. Una definición de tipo documental que establece metadatos obligatorios, reglas y comportamiento de una clase de documentos.
- B. Un patrón reutilizable que estandariza estructura, campos y presentación de documentos. **(correcta)**
- C. Un workflow que encadena tareas, decisiones y responsables para tramitar un documento durante su ciclo de vida.
- D. Una hoja de estilos que controla la presentación visual sin aportar por sí misma la estructura reutilizable del documento.

Explicación: Una plantilla es un patrón reutilizable de estructura, campos y presentación desde el que se crean documentos consistentes. Puede incluir estilos, texto inicial y controles de contenido. Microsoft Word ilustra la creación de copias a partir de una plantilla; no se modifica necesariamente el patrón al rellenar cada documento. Un tipo documental puede asociar plantillas, metadatos o flujos, pero no se reduce a la plantilla, ni esta es por sí sola un workflow o una hoja de estilos aislada.

- Error A: El tipo documental define propiedades y comportamiento de una clase; puede asociar una plantilla, pero esa definición de tipo no es el patrón reutilizable en sí.
- Error C: El flujo asigna tareas, decisiones y responsables. Puede usar documentos creados con plantilla sin constituir su estructura reutilizable.
- Error D: Una hoja de estilos aislada regula presentación. La plantilla preguntada incorpora además estructura y campos reutilizables, aunque pueda incluir estilos.

- [Microsoft Support: Save a Word document as a template](https://support.microsoft.com/en-us/word/save-a-word-document-as-a-template) · Plantilla como punto de partida que abre copia; diseño, estilos, márgenes, texto y controles de contenido reutilizables · versión: Artículo para versiones de Word indicadas en la página, incluidas Microsoft 365 y Word 2024; consultado 28-10-2026. Concepto de plantilla, sin generalizar interfaz a todas las plataformas · comprobado: 2026-10-28
- [Microsoft Support: Overview of document management in SharePoint](https://support.microsoft.com/en-au/sharepoint/libraries/overview-of-document-management-in-sharepoint) · The elements of a document management system; The planning process: tipos de contenido, plantillas, metadatos, versiones, acceso y ciclo de vida · versión: Documentación histórica SharePoint 2013/2016 según cabecera/cuerpo, usada para conceptos funcionales; no se afirma soporte actual ni se recomienda ese producto · comprobado: 2026-10-28

Partida: `3dec540fbf35f2717912e50b5818de679564fa95829fe3bbb27daeaee91de9f1` · propuesta: `27b4252b6802b34d49529df69f98b69aa445ac63f9b73f0645703ef4e318fdd9`

## MAN-GSI-P18-099

Decisión: pending_review · acción: revise.

Motivo: Conservar función de taxonomía documental y clave D; alternativas próximas a etiquetado, plantilla y esquema, sin OCR o cifrado ajenos.

### Antes

¿Qué función cumple una taxonomía de tipos documentales en un DMS?

- A. Permitir que cada usuario asigne etiquetas libres sin vocabulario común ni relaciones jerárquicas previamente gobernadas.
- B. Reconocer caracteres de documentos escaneados para obtener texto indexable, sin crear categorías documentales controladas.
- C. Cifrar los ficheros del repositorio y administrar claves, sin definir clases, tipos o estructura para su recuperación.
- D. Organizar categorías controladas para clasificación y recuperación. **(correcta)**

Explicación: Una taxonomía aporta vocabulario común y estructura de clasificación.

### Propuesta

¿Qué función cumple una taxonomía de tipos documentales en un DMS?

- A. Agregar etiquetas libres sin un esquema común de categorías.
- B. Definir el diseño reutilizable con el que se redacta un documento.
- C. Validar campos y cardinalidades sin asignar tipos documentales.
- D. Clasificar y recuperar documentos mediante categorías controladas. **(correcta)**

Explicación: Una taxonomía de tipos documentales aporta categorías controladas y relaciones organizadas para clasificar y recuperar documentos con un vocabulario común. Puede ser jerárquica o facetada y apoyar otras reglas, pero no las ejecuta todas por sí sola. SKOS permite representar conceptos, etiquetas y relaciones en esquemas como taxonomías o tesauros, cuyas capacidades pueden solaparse; la NTI aporta el contexto de clasificación documental.

- Error A: El etiquetado libre puede aportar términos útiles, pero sin esquema común no define la taxonomía controlada de tipos que se pregunta.
- Error B: El diseño reutilizable corresponde a una plantilla; no establece por sí mismo categorías y relaciones para clasificar el repositorio.
- Error C: Un esquema de campos puede validar estructura y cardinalidades; esa validación sin asignación de tipos no realiza la función clasificatoria de la taxonomía.

- [W3C: SKOS Simple Knowledge Organization System Primer](https://www.w3.org/TR/2009/NOTE-skos-primer-20090818/) · Resumen e introducción: taxonomías, tesauros y otros esquemas; 2.1 conceptos; 2.2 etiquetas; 2.3.1 jerarquías y 2.3.2 asociaciones; 2.5 esquemas · versión: W3C Working Group Note de 18-08-2009, no Recommendation. Aviso de mantenimiento de enlaces de 30-10-2023 no equivale a nueva edición; no se imponen fronteras mutuamente excluyentes entre esquemas · comprobado: 2026-10-28
- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo de vida y contexto; VI.1 captura, VI.3 clasificación, VI.4 descripción, VI.5 acceso, VI.6 calificación, VI.7 conservación, VI.8 transferencia, VI.9 destrucción; VII metadatos; X supervisión y auditoría · versión: Resolución de 28-06-2012, texto inicial publicado 26-07-2012. Sus remisiones históricas a Ley 30/1992 y RD 3/2010 se contrastan con LPAC 39/2015 y ENS 311/2022; no se presentan como normativa actual · comprobado: 2026-10-28

Partida: `c30828635b62d0172082fc02a62beef0fed13e33cf98d338345a626f3e1d0b46` · propuesta: `ed06ced3f9ad9503ce7c3ca1fde6e35ca198f6c8c0038bf085c05c44426008a8`

## MAN-GSI-P18-100

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso existente y clave C; enfrentar enfoques de coordinación plausibles sin prometer que centralizar elimina automáticamente toda copia.

### Antes

Un organismo quiere evitar que cada unidad guarde copias locales sin control. ¿Qué enfoque es más adecuado?

- A. Compartir una carpeta sin permisos ni auditoría.
- B. Enviar siempre adjuntos por correo como sistema maestro.
- C. Repositorio corporativo con metadatos, permisos, versionado, búsqueda, retención y reglas claras de trabajo. **(correcta)**
- D. Eliminar el versionado para evitar complejidad.

Explicación: La centralización gobernada reduce duplicidad y pérdida de trazabilidad.

### Propuesta

Un organismo quiere evitar que cada unidad guarde copias locales sin control. ¿Qué enfoque es más adecuado?

- A. Una carpeta común con archivos adjuntos y reglas propias en cada unidad.
- B. Copias por correo como referencia y conciliación periódica de sus diferencias.
- C. Repositorio con metadatos, acceso, versiones, búsqueda, retención y reglas comunes. **(correcta)**
- D. Repositorio con versiones, manteniendo las copias locales como referencia de trabajo.

Explicación: El repositorio corporativo gobernado ofrece una referencia documental común con metadatos, permisos, versiones, recuperación y ciclo de vida, apoyada en reglas de trabajo y responsabilidades. Reduce duplicidad descontrolada y pérdida de trazabilidad si las unidades lo usan y se supervisa. No basta instalar un producto o prohibir toda copia legítima: pueden existir copias autorizadas, sincronización o trabajo sin conexión sujetos a reglas coherentes. La NTI exige política, procedimientos y supervisión además de herramientas.

- Error A: Compartir una ubicación sin reglas comunes no resuelve que las unidades creen y mantengan referencias documentales incompatibles.
- Error B: Conciliar adjuntos a posteriori conserva fuentes divergentes y dificulta identificar la versión de referencia; no es el enfoque de gobierno más adecuado planteado.
- Error D: Añadir versiones al servidor no resuelve que las unidades sigan tratando copias locales no controladas como referencia principal.

- [BOE: NTI de Política de gestión de documentos electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048) · V.2 ciclo de vida y contexto; VI.1 captura, VI.3 clasificación, VI.4 descripción, VI.5 acceso, VI.6 calificación, VI.7 conservación, VI.8 transferencia, VI.9 destrucción; VII metadatos; X supervisión y auditoría · versión: Resolución de 28-06-2012, texto inicial publicado 26-07-2012. Sus remisiones históricas a Ley 30/1992 y RD 3/2010 se contrastan con LPAC 39/2015 y ENS 311/2022; no se presentan como normativa actual · comprobado: 2026-10-28
- [Microsoft Support: Overview of document management in SharePoint](https://support.microsoft.com/en-au/sharepoint/libraries/overview-of-document-management-in-sharepoint) · The elements of a document management system; The planning process: tipos de contenido, plantillas, metadatos, versiones, acceso y ciclo de vida · versión: Documentación histórica SharePoint 2013/2016 según cabecera/cuerpo, usada para conceptos funcionales; no se afirma soporte actual ni se recomienda ese producto · comprobado: 2026-10-28
- [BOE: Real Decreto 4/2010, ENI](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331) · Anexo, glosario: Metadato; Metadato de gestión de documentos; Política de gestión de documentos electrónicos; Repositorio electrónico · versión: Consolidación informativa consultada; actualización global publicada 06-11-2024. El glosario se distingue de remisiones históricas en otras partes del texto · comprobado: 2026-10-28

Partida: `cf5cfebe149fc09ddf29ca34459d8c751be12eec9a02d939af5d432f3276e0e0` · propuesta: `27b892f1dee3c3c81b0f5807bd8db7b363485589f65379a3777b57f4e75eb64b`

## MAN-GSI-P18-101

Decisión: pending_review · acción: revise.

Motivo: Conservar concepto taxonomía y clave B; sustituir definición de tesauro solapada por diccionario sin categorías, evitando dos respuestas defendibles.

### Antes

¿Qué es una taxonomía?

- A. Un modelo formal que define conceptos, propiedades, restricciones y relaciones de un dominio de conocimiento.
- B. Una clasificación controlada de conceptos/categorías, a menudo jerárquica o facetada. **(correcta)**
- C. Un vocabulario controlado con términos preferentes, sinónimos y relaciones asociativas o de mayor y menor amplitud.
- D. Una clasificación creada colaborativamente por usuarios mediante etiquetas libres, sin estructura central obligatoria.

Explicación: Las taxonomías ayudan a organizar y recuperar contenido.

### Propuesta

¿Qué es una taxonomía?

- A. Un modelo formal de conceptos, propiedades y restricciones de un dominio.
- B. Una clasificación controlada de conceptos/categorías, a menudo jerárquica o facetada. **(correcta)**
- C. Un diccionario de equivalencias léxicas sin estructura de categorías.
- D. Un etiquetado libre y social sin un esquema central de categorías impuesto.

Explicación: Una taxonomía organiza conceptos o categorías mediante una clasificación controlada, con frecuencia jerárquica o facetada, para ordenar y recuperar información. Puede compartir etiquetas, sinónimos o relaciones con un tesauro y formar parte de una ontología; las categorías no son mutuamente excluyentes en toda implementación. La diferencia aquí es su función clasificatoria frente a un diccionario sin categorías, un etiquetado libre o un modelo formal más amplio de propiedades y restricciones.

- Error A: La formalización de conceptos, propiedades y restricciones caracteriza el modelo ontológico descrito. Puede incluir una taxonomía, pero no es la definición específica de clasificación controlada preguntada.
- Error C: Un repertorio de equivalencias léxicas sin organización de categorías no aporta la estructura clasificatoria de una taxonomía. Esto no significa que una taxonomía no pueda tener sinónimos.
- Error D: El etiquetado libre social corresponde a folksonomía. Una taxonomía se caracteriza aquí por control y organización común de categorías, aunque pueda incorporar aportaciones de usuarios.

- [W3C: SKOS Simple Knowledge Organization System Primer](https://www.w3.org/TR/2009/NOTE-skos-primer-20090818/) · Resumen e introducción: taxonomías, tesauros y otros esquemas; 2.1 conceptos; 2.2 etiquetas; 2.3.1 jerarquías y 2.3.2 asociaciones; 2.5 esquemas · versión: W3C Working Group Note de 18-08-2009, no Recommendation. Aviso de mantenimiento de enlaces de 30-10-2023 no equivale a nueva edición; no se imponen fronteras mutuamente excluyentes entre esquemas · comprobado: 2026-10-28
- [W3C: OWL 2 Web Ontology Language Document Overview, Second Edition](https://www.w3.org/TR/2012/REC-owl2-overview-20121211/) · 1 Introduction: vocabularios formalizados y relaciones entre términos de un dominio; 2.1 Ontologies; 2.2 Syntaxes; 2.3 Semantics · versión: W3C Recommendation, segunda edición 11-12-2012; el overview es informativo/no normativo. Ejemplo de ontologías formales, sin exigir OWL o razonamiento automático a toda ontología · comprobado: 2026-10-28
- [Thomas Vander Wal: Folksonomy](https://vanderwal.net/folksonomy.html) · Definition: etiquetado libre personal/social de objetos de información para recuperación con vocabulario del usuario; alcance del contexto compartido · versión: Página del autor de 02-02-2007; acuñación del término 24-07-2004, que no se confunde con fecha de publicación de la página · comprobado: 2026-10-28

Partida: `58e1e37cb912bff211cef2003690e80107736f8509f3eba48d6da273d903c9cc` · propuesta: `2dd2d235d7f172f32b7a7f5453c7872ab9f907492ddd4aba7b37b77bb2154960`

## MAN-GSI-P18-102

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave D; explicar origen participativo, variación léxica y posibilidad de gobierno posterior sin imponer estructura central.

### Antes

¿Qué es una folksonomía?

- A. Una taxonomía jerárquica administrada centralmente, con términos autorizados y relaciones padre-hijo obligatorias.
- B. Una ontología formal que define clases, propiedades, restricciones y relaciones semánticas mediante axiomas verificables.
- C. Un esquema documental que fija elementos, tipos y cardinalidades válidos para comprobar la estructura de cada contenido.
- D. Un sistema de etiquetado libre generado por usuarios sin un vocabulario completamente controlado. **(correcta)**

Explicación: La folksonomía aporta flexibilidad pero puede generar sinónimos/ambigüedad.

### Propuesta

¿Qué es una folksonomía?

- A. Una taxonomía jerárquica administrada centralmente, con términos autorizados y relaciones padre-hijo obligatorias.
- B. Una ontología formal que define clases, propiedades, restricciones y relaciones semánticas mediante axiomas verificables.
- C. Un esquema documental que fija elementos, tipos y cardinalidades válidos para comprobar la estructura de cada contenido.
- D. Un sistema de etiquetado libre generado por usuarios sin un vocabulario completamente controlado. **(correcta)**

Explicación: Una folksonomía surge de etiquetas libres que usuarios asignan a objetos de información para organizarlos y recuperarlos, especialmente en un contexto compartido. Refleja su vocabulario y puede producir sinónimos, ambigüedad o grafías distintas. No exige una jerarquía central previa ni axiomas formales. Puede recibir moderación o relacionarse después con vocabularios controlados; ese posible gobierno posterior no borra el origen participativo del etiquetado descrito por Vander Wal.

- Error A: Una jerarquía con términos autorizados y relaciones obligatorias impuestas centralmente describe la taxonomía controlada de la alternativa, no el etiquetado libre de origen.
- Error B: Una ontología formal aporta clases, relaciones o axiomas; la agregación de etiquetas de usuarios no incorpora automáticamente esa semántica formal.
- Error C: Un esquema documental valida estructura y cardinalidades. La folksonomía organiza mediante etiquetas, sin definir por ello la validez estructural del contenido.

- [Thomas Vander Wal: Folksonomy](https://vanderwal.net/folksonomy.html) · Definition: etiquetado libre personal/social de objetos de información para recuperación con vocabulario del usuario; alcance del contexto compartido · versión: Página del autor de 02-02-2007; acuñación del término 24-07-2004, que no se confunde con fecha de publicación de la página · comprobado: 2026-10-28
- [W3C: SKOS Simple Knowledge Organization System Primer](https://www.w3.org/TR/2009/NOTE-skos-primer-20090818/) · Resumen e introducción: taxonomías, tesauros y otros esquemas; 2.1 conceptos; 2.2 etiquetas; 2.3.1 jerarquías y 2.3.2 asociaciones; 2.5 esquemas · versión: W3C Working Group Note de 18-08-2009, no Recommendation. Aviso de mantenimiento de enlaces de 30-10-2023 no equivale a nueva edición; no se imponen fronteras mutuamente excluyentes entre esquemas · comprobado: 2026-10-28

Partida: `21b677c8e4bb582a663f1618ee5dc6a83847639cab974d27e615606efd5af885` · propuesta: `0b38195a6ed3ed8ea5f1089ec4b4cab07a4ce075df42beadd223aaf2cef91bc2`

## MAN-GSI-P18-103

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra definición y clave D; diferencias de alcance sin afirmar que toda ontología usa OWL o impone razonamiento automático.

### Antes

¿Qué es una ontología?

- A. Una clasificación jerárquica que organiza conceptos en categorías y subcategorías mediante relaciones padre-hijo.
- B. Un vocabulario controlado que recoge términos preferentes, sinónimos y relaciones de mayor o menor amplitud.
- C. Un conjunto de campos y reglas que normaliza la descripción de recursos para facilitar intercambio y recuperación.
- D. Un modelo más formal de conceptos, propiedades y relaciones dentro de un dominio. **(correcta)**

Explicación: Ontología expresa semántica y relaciones más ricas que una taxonomía simple.

### Propuesta

¿Qué es una ontología?

- A. Una clasificación jerárquica que organiza conceptos en categorías y subcategorías mediante relaciones padre-hijo.
- B. Un vocabulario controlado que recoge términos preferentes, sinónimos y relaciones de mayor o menor amplitud.
- C. Un conjunto de campos y reglas que normaliza la descripción de recursos para facilitar intercambio y recuperación.
- D. Un modelo más formal de conceptos, propiedades y relaciones dentro de un dominio. **(correcta)**

Explicación: Una ontología modela formalmente conceptos de un dominio y sus propiedades y relaciones, permitiendo expresar semántica más rica que una jerarquía simple de categorías. OWL 2 es un lenguaje para construir ontologías formales, no el único modo de expresarlas. Una ontología puede incluir clasificaciones, vocabularios y elementos descriptivos; el contraste es de alcance y formalización, no una prohibición de compartir estructuras con taxonomías o tesauros.

- Error A: Una jerarquía de categorías describe una taxonomía simple; puede ser parte de una ontología, pero por sí sola no recoge el modelo más amplio de propiedades y relaciones preguntado.
- Error B: El vocabulario con términos preferentes, equivalencias y amplitud describe el foco de un tesauro. Puede integrarse con una ontología, pero no define toda su formalización del dominio.
- Error C: Normalizar campos descriptivos mediante un esquema de metadatos ayuda al intercambio. No implica por sí mismo formalizar los conceptos y sus relaciones de dominio como una ontología.

- [W3C: OWL 2 Web Ontology Language Document Overview, Second Edition](https://www.w3.org/TR/2012/REC-owl2-overview-20121211/) · 1 Introduction: vocabularios formalizados y relaciones entre términos de un dominio; 2.1 Ontologies; 2.2 Syntaxes; 2.3 Semantics · versión: W3C Recommendation, segunda edición 11-12-2012; el overview es informativo/no normativo. Ejemplo de ontologías formales, sin exigir OWL o razonamiento automático a toda ontología · comprobado: 2026-10-28
- [W3C: SKOS Simple Knowledge Organization System Primer](https://www.w3.org/TR/2009/NOTE-skos-primer-20090818/) · Resumen e introducción: taxonomías, tesauros y otros esquemas; 2.1 conceptos; 2.2 etiquetas; 2.3.1 jerarquías y 2.3.2 asociaciones; 2.5 esquemas · versión: W3C Working Group Note de 18-08-2009, no Recommendation. Aviso de mantenimiento de enlaces de 30-10-2023 no equivale a nueva edición; no se imponen fronteras mutuamente excluyentes entre esquemas · comprobado: 2026-10-28
- [BOE: Real Decreto 4/2010, ENI](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331) · Anexo, glosario: Metadato; Metadato de gestión de documentos; Política de gestión de documentos electrónicos; Repositorio electrónico · versión: Consolidación informativa consultada; actualización global publicada 06-11-2024. El glosario se distingue de remisiones históricas en otras partes del texto · comprobado: 2026-10-28

Partida: `7eda46c798b68d62f2e5fc6cabe5e49a185231cdc87b33a4fe239ea1d57c87aa` · propuesta: `ed86ab01b1721a715b1c7b2eb8a54fabfb158cf14848b0744bfe6d2c9679462a`

## MAN-GSI-P18-104

Decisión: pending_review · acción: revise.

Motivo: Conservar sindicación de contenidos y clave B; precisar mediante feeds y cuatro mecanismos próximos, sin garantía de push o actualidad instantánea.

### Antes

¿Qué es sindicación de contenidos?

- A. Copiar páginas de terceros mediante scraping sin acuerdo ni formato estable y presentar ese contenido como un canal oficial del publicador.
- B. Publicar un feed estructurado para que terceros o clientes se suscriban y agreguen novedades. **(correcta)**
- C. Enviar exclusivamente mensajes de correo a una lista cerrada, sin ofrecer un formato estructurado que los clientes puedan consultar o agregar.
- D. Cifrar el repositorio completo para que los clientes descubran automáticamente las novedades sin recibir metadatos ni elementos publicados.

Explicación: RSS y Atom son formatos clásicos de sindicación.

### Propuesta

¿Qué caracteriza la sindicación de contenidos mediante feeds?

- A. Extraer páginas HTML sin un canal de novedades publicado.
- B. Ofrecer un feed estructurado para suscribir y agregar novedades. **(correcta)**
- C. Enviar boletines por correo sin un canal estructurado consultable.
- D. Replicar un sitio para recuperación sin distribuir novedades por feed.

Explicación: La sindicación mediante feeds publica información estructurada que clientes o agregadores pueden consultar para recibir y reunir novedades. RSS y Atom son formatos XML de referencia con metadatos del canal y elementos o entradas. No exige copiar el sitio completo ni descubrir novedades por scraping. El formato no garantiza entrega push, actualización en tiempo real o permiso para cualquier reutilización; el cliente debe obtener y procesar el canal según su funcionamiento y condiciones.

- Error A: Extraer HTML sin canal publicado es scraping en el supuesto descrito; no utiliza un feed estructurado proporcionado para la sindicación.
- Error C: Un boletín de correo puede distribuir noticias, pero la alternativa excluye el canal estructurado consultable que define la sindicación mediante feeds preguntada.
- Error D: Replicar para recuperación preserva una copia del sitio. Sin distribución de entradas mediante un feed, no realiza el mecanismo de sindicación planteado.

- [RSS Advisory Board: RSS 2.0 Specification](https://www.rssboard.org/rss-specification) · What is RSS?: sindicación web en XML; Required channel elements y elementos item; estructura rss/channel · versión: RSS 2.0, revisión 2.0.11 publicada 30-03-2009; el atributo version del formato sigue siendo 2.0. No garantiza entrega push o tiempo real · comprobado: 2026-10-28
- [IETF: RFC 4287, The Atom Syndication Format](https://www.rfc-editor.org/rfc/rfc4287.html) · 1 Introduction; 2 Atom Documents: formato XML para información y metadatos; documentos feed con entradas · versión: RFC 4287, diciembre de 2005, publicación Standards Track. Referencia al formato, sin atribuir comprobación de estado posterior en datatracker ni entrega inmediata · comprobado: 2026-10-28

Partida: `9bc12c033e73bfa6e449b005ecc7641112507a44e1a910fdecb2ea627b808769` · propuesta: `f7efb6588498fd357fb4d2513d78f494fb7f397a72e17c0bf11233c5a76fbdf3`
