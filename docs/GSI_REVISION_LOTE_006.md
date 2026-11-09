# GSI-EDITORIAL-006 — revisión propuesta

Preparado: 2026-10-26. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `9065eb3b901d847ac95da07b88cb5edbd9b25315b8fbeacb6ec3bc7aaeda800d`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T04-020

Decisión: pending_review · acción: revise.

Motivo: Conservar el gobierno de datos, retención, coste y fallos de la observabilidad, con distractores basados en centralización, acumulación y protección parcial.

### Antes

¿Qué riesgo debe gestionarse en la propia observabilidad?

- A. Ninguno por tratarse de herramientas de control
- B. Datos sensibles, retención, coste y puntos únicos de fallo **(correcta)**
- C. Únicamente resolución de los gráficos
- D. Solo disponibilidad del dashboard

Explicación: Monitorizar también requiere seguridad, disponibilidad y gobierno de costes.

### Propuesta

¿Qué debe incluir la gestión de riesgos de la propia infraestructura de observabilidad?

- A. Centralizarla en un nodo y dar su propia alarma por prueba de disponibilidad.
- B. Controlar datos sensibles, retención, coste y disponibilidad de la telemetría. **(correcta)**
- C. Registrar el máximo detalle y conservarlo sin límite para no perder evidencias.
- D. Proteger el dashboard, dando por cubiertos colectores y repositorios de datos.

Explicación: La observabilidad es otro servicio que necesita protección y continuidad. La telemetría puede revelar datos sensibles, acumular coste y fallar en colectores o almacenamiento; deben definirse accesos, retención y medidas frente a dependencias únicas, sin prescribir una arquitectura universal.

- Error A: Un nodo único puede convertirse en punto de fallo. Si la vigilancia depende del mismo nodo averiado, su propia alarma puede no llegar a emitirse.
- Error C: Más detalle y retención indefinida aumentan exposición y consumo. Debe conservarse lo necesario para el propósito operativo y las obligaciones aplicables.
- Error D: El dashboard es una parte de la cadena. Protegerlo no cubre ingestión, transporte, colectores, credenciales ni repositorios de telemetría.

- [OpenTelemetry: Handling sensitive data](https://opentelemetry.io/docs/security/handling-sensitive-data/) · Your responsibility; Sensitive data considerations; Data minimization; Protecting sensitive data · versión: Documentación web consultada el 26-10-2026 · comprobado: 2026-10-26
- [AWS Observability Best Practices: Amazon CloudWatch FAQ](https://aws-observability.github.io/observability-best-practices/faq/cloudwatch/) · How do I manage logs stored in Amazon CloudWatch Logs for cost optimization, compliance retention or for additional processing? · versión: Guía web consultada el 26-10-2026; ejemplo de retención y coste, sin trasladar sus límites a todos los productos · comprobado: 2026-10-26
- [OpenTelemetry: Scaling the Collector](https://opentelemetry.io/docs/collector/scaling/) · How to Scale; Scaling stateless collectors and using load balancers: disponibilidad, tolerancia a fallos y reparto de carga · versión: Documentación web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `4bbaaab55efc6dd191049fa71259156e9c262f9b61c75880d5f8b48125ff1e7f` · propuesta: `11f4a9ac8597ac57e3e7f5f7c7dbb05e9a3a14daf0bf6d0c4febeb23523e1879`

## AI-GSI-B4-T05-003

Decisión: pending_review · acción: revise.

Motivo: Conservar archivos como respuesta y delimitar interfaz de acceso frente a capacidades de una cabina multiprotocolo; comparar modelos de almacenamiento y base de datos.

### Antes

¿Qué abstracción expone un NAS?

- A. Bloques exclusivamente
- B. Únicamente puertos
- C. Solo procesos
- D. Ficheros **(correcta)**

Explicación: NAS sirve archivos; SAN expone bloques remotos.

### Propuesta

¿Qué abstracción ofrece al cliente el acceso de tipo NAS?

- A. LUN remotas sobre las que el cliente crea un sistema de archivos.
- B. Objetos identificados por clave y metadatos mediante una API.
- C. Filas y relaciones consultables mediante sentencias SQL.
- D. Archivos y directorios compartidos mediante protocolos como NFS o SMB. **(correcta)**

Explicación: El acceso NAS presenta archivos y directorios compartidos por red. El servidor de archivos gestiona su organización y ofrece operaciones sobre ellos; una misma cabina puede proporcionar también otros servicios, por lo que la distinción se refiere al acceso presentado al cliente.

- Error A: Presentar una LUN o dispositivo de bloques para que el host lo gestione corresponde al acceso de bloques, característico de una SAN, no al servicio NAS.
- Error B: Clave, metadatos y API describen almacenamiento de objetos. No equivalen a presentar un sistema de archivos compartido con NFS o SMB.
- Error C: Filas, relaciones y SQL son abstracciones de un SGBD. Este puede usar almacenamiento NAS por debajo, pero no define la interfaz NAS.

- [AWS: What is NAS?](https://aws.amazon.com/what-is/nas/) · What is the basic storage principle of NAS devices?; File formatting protocols; NAS vs. SAN · versión: Guía web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `6e5df14d1768a3101ade205a3ca44d2458dd2ca80d911c92d9e9572212fa1286` · propuesta: `a2f577ed7b1dcabe4b0a6a92835e23e72f8aac342347265b45508a2e90f9c179`

## AI-GSI-B4-T05-004

Decisión: pending_review · acción: revise.

Motivo: Conservar bloques remotos y contrastar con NAS, objetos y SGBD, evitando afirmar que toda SAN utiliza necesariamente Fibre Channel o una red física exclusiva.

### Antes

¿Qué abstracción expone una SAN?

- A. Solo documentos de usuario
- B. Bloques remotos **(correcta)**
- C. Únicamente objetos HTTP
- D. Exclusivamente mensajes

Explicación: El host utiliza almacenamiento de bloques a través de una red especializada o IP.

### Propuesta

¿Qué abstracción presenta al host el acceso a almacenamiento de una SAN?

- A. Archivos y directorios que el servidor comparte mediante NFS o SMB.
- B. Dispositivos remotos de bloques que el host utiliza como almacenamiento. **(correcta)**
- C. Objetos y metadatos que la aplicación recupera mediante claves y API.
- D. Tablas y relaciones que la aplicación consulta mediante sentencias SQL.

Explicación: La SAN proporciona acceso a nivel de bloques a dispositivos remotos. El host puede utilizarlos para sistemas de archivos o bases de datos; el servicio no es por ello una compartición de archivos. Puede emplear protocolos como Fibre Channel o iSCSI, sin estar limitado a un único medio.

- Error A: NFS y SMB presentan operaciones sobre archivos compartidos, propias del acceso NAS. Una SAN presenta bloques al host.
- Error C: La unidad de acceso descrita es un objeto por clave, no un dispositivo de bloques al que el sistema operativo dirige operaciones de entrada/salida.
- Error D: SQL y las tablas pertenecen a la interfaz del SGBD. Una base de datos puede residir sobre SAN, pero esa no es la abstracción expuesta por el almacenamiento.

- [AWS: What is a Storage Area Network (SAN)?](https://aws.amazon.com/what-is/san/) · What is a storage area network used for?; acceso a nivel de bloques y protocolos SAN · versión: Guía web consultada el 26-10-2026 · comprobado: 2026-10-26
- [AWS: What is NAS?](https://aws.amazon.com/what-is/nas/) · What is the basic storage principle of NAS devices?; File formatting protocols; NAS vs. SAN · versión: Guía web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `a2a4248c2fe43bc8e347dd63abe7639c87c3cdf08e2f36ca6dca3756276b8857` · propuesta: `052df291b28a3dc1a581baf84c967495db92227694962e45056c1452565a6137`

## AI-GSI-B4-T05-005

Decisión: pending_review · acción: revise.

Motivo: Conservar objeto, identificador, metadatos y API y comparar abstracciones próximas, sin prohibir pasarelas de archivos ni prometer semántica POSIX completa.

### Antes

¿Qué caracteriza almacenamiento de objetos?

- A. Disco local obligatorio
- B. Únicamente interfaz POSIX completa
- C. Objetos con metadatos accesibles mediante API **(correcta)**
- D. Solo memoria volátil

Explicación: El modelo objeto difiere de bloques y ficheros compartidos.

### Propuesta

¿Qué caracteriza el modelo de acceso de un almacenamiento de objetos?

- A. Bloques numerados que el host organiza en su propio sistema de archivos.
- B. Archivos en directorios sobre los que el cliente opera mediante NFS o SMB.
- C. Unidades con datos, identificador y metadatos, manipuladas mediante una API. **(correcta)**
- D. Filas organizadas en tablas que se consultan mediante un esquema relacional.

Explicación: El modelo de objetos accede a unidades de datos identificadas y asociadas a metadatos mediante operaciones de una API. Su interfaz no equivale a un disco de bloques ni exige todas las operaciones de un sistema POSIX; una pasarela puede ofrecer otra vista sin cambiar el modelo subyacente.

- Error A: Eso describe acceso a bloques y deja al host la organización superior. Una API de objetos no presenta por ello un disco numerado.
- Error B: NFS y SMB presentan un servicio de archivos con directorios. Una pasarela sobre objetos no hace que ambos modelos tengan las mismas operaciones o semántica.
- Error D: Las filas, tablas y esquema relacional son conceptos de un SGBD. El contenido de un objeto puede ser cualquier dato y no exige esa organización.

- [AWS: What is Object Storage?](https://aws.amazon.com/what-is/object-storage/) · How does object storage work?; Comparing object storage and file storage; metadatos e identificadores · versión: Guía web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `b6c621acfa1520c0aa095114e60912edeb1305380dbc5ee7c1dd38b942f1ddc3` · propuesta: `4dd97b42749bb65b50b6d4dadac572dadea0877ebc276bb5cd89c5182e9166f1`

## AI-GSI-B4-T05-019

Decisión: pending_review · acción: revise.

Motivo: Aplicar capacidad bruta, protección y reservas a un cálculo con cantidades no solapadas; distinguir capacidad física útil y espacio presupuestado para datos actuales.

### Antes

¿Qué debe descontarse al calcular capacidad útil?

- A. Solo la capacidad del disco más pequeño
- B. Nada: capacidad bruta equivale siempre a útil
- C. Únicamente el espacio del sistema operativo, sin reservas
- D. RAID, reservas, snapshots y crecimiento previsto **(correcta)**

Explicación: La capacidad disponible para cargas es menor que la suma nominal y requiere margen.

### Propuesta

Un pool tiene 100 TB brutos y quedan 80 TB tras RAID y reservas básicas. Se apartan además 10 TB para snapshots y 15 TB para crecimiento. Sin reducción de datos, ¿cuánto puede planificarse para los datos actuales?

- A. 75 TB.
- B. 65 TB.
- C. 70 TB.
- D. 55 TB. **(correcta)**

Explicación: Para datos actuales quedan 80 − 10 − 15 = 55 TB. RAID y reservas básicas ya están descontados en los 80 TB y no se restan otra vez. Las reservas adicionales no se solapan en el supuesto: el crecimiento es un margen de planificación, no una pérdida física causada por RAID.

- Error A: 75 TB resulta de restar snapshots y crecimiento a los 100 TB brutos. Omite los 20 TB ya destinados a protección y reservas básicas.
- Error B: 65 TB descuenta el crecimiento de los 80 TB, pero deja sin apartar los 10 TB de snapshots indicados.
- Error C: 70 TB descuenta snapshots de los 80 TB, pero permite ocupar con datos actuales el margen de 15 TB previsto para crecimiento.

- [Seagate: RAID Manager User Manual, RAID Levels](https://www.seagate.com/manuals/software/raid-manager/raid-levels/) · RAID Levels: diferencias en capacidad útil; Standard RAID levels, RAID 1, RAID 5 y RAID 6 · versión: Manual web consultado el 26-10-2026; no se universalizan mínimos de discos específicos del producto · comprobado: 2026-10-26
- [NetApp ONTAP: Manage the snapshot reserve](https://docs.netapp.com/us-en/ontap/pdfs/sidebar/Manage_the_snapshot_reserve.pdf) · Learn about managing the ONTAP snapshot reserve; When to increase the snapshot reserve; pp.1–2 · versión: ONTAP 9, PDF generado el 19-05-2026; ejemplo de reserva y consumo de snapshots · comprobado: 2026-10-26

Partida: `0a98733b98d93e4f715aa7e0c9e43273f2069f34b7842b03be222f8f4cce7e6e` · propuesta: `fc77ee37258fbe2da107fe577fced2e53ac9e7f12bb5b0276c88939792cb26b6`

## AI-GSI-B4-T06-001

Decisión: pending_review · acción: revise.

Motivo: Conservar el dimensionamiento físico completo e introducir simplificaciones reales de espacio o potencia; no trasladar valores de un servidor histórico a todos los CPD.

### Antes

¿Qué debe dimensionarse en un CPD además de servidores?

- A. Únicamente CPU nominal instalada
- B. Solo capacidad de discos, sin energía ni refrigeración
- C. Solo número de servidores
- D. Potencia, refrigeración, peso, espacio, puertos y crecimiento **(correcta)**

Explicación: El CPD tiene restricciones físicas y ambientales vinculadas a la carga.

### Propuesta

¿Qué conjunto de restricciones debe dimensionarse en un CPD además de la capacidad de cómputo y almacenamiento?

- A. Licencias, imágenes de despliegue y versiones, como sustituto del dimensionamiento físico.
- B. Unidades libres de rack, suponiendo que ocuparlas no cambia la demanda de energía o frío.
- C. Potencia nominal de las fuentes, suponiendo equivalentes espacio, carga y refrigeración.
- D. Potencia, refrigeración, carga mecánica, espacio, conectividad y margen de crecimiento. **(correcta)**

Explicación: El equipamiento consume energía, genera calor, ocupa espacio, añade peso y necesita conexiones. Estas restricciones deben evaluarse conjuntamente para la configuración y crecimiento previstos: disponer de unidades de rack libres no acredita energía, refrigeración ni capacidad mecánica suficientes.

- Error A: Licencias y versiones afectan a operación y costes, pero no sustituyen comprobar las condiciones físicas y ambientales del CPD.
- Error B: Los huecos de rack no garantizan capacidad eléctrica, térmica o mecánica. Añadir equipos puede agotar cualquiera de esos límites antes que el espacio.
- Error C: La potencia de las fuentes es un dato parcial, no una equivalencia entre energía, frío, peso, espacio y conectividad del centro.

- [Lenovo ThinkSystem SR950 Planning and Implementation Guide](https://lenovopress.com/lp0746.pdf) · Capítulo 4: §§4.1–4.3, pp.98–101, dimensiones, peso, energía, ambiente y racks; §4.7, p.107, energía; §4.9, p.112, refrigeración · versión: LP-0746-00, 31-01-2019; ejemplo histórico de planificación física, sin recomendar ese equipo ni sus umbrales · comprobado: 2026-10-26
- [Cisco, Panduit y Rockwell Automation: Physical Infrastructure for the Converged Plantwide Ethernet Architecture](https://www.cisco.com/c/en/us/td/docs/sanity/suman/CPwE-Physical-Infrastructure_Feb2023.html) · Capítulo 2: structured cabling, patch panels y horizontal; capítulo 4: Industrial Plant Network Backbone and Distribution Switching Overview; Scalability · versión: ENET-TD020B-EN-P, febrero de 2023; actualización web 07-04-2023 · comprobado: 2026-10-26

Partida: `f9ed9ac064a6704be5b1e4f5c2404fd631b7ca3397cb7cd0409ecd761c26eec6` · propuesta: `102bd4b578c27c542b9cd93fd9186725987023d189e39f2fdd2dca5115506a47`

## AI-GSI-B4-T06-007

Decisión: pending_review · acción: revise.

Motivo: Conservar los escenarios ambientales y compararlos con ámbitos reales de seguridad; respetar las condiciones de aplicación del ENS, especialmente mp.if.6.

### Antes

¿Qué riesgo físico debe incluirse además de incendio?

- A. Únicamente duplicados SQL
- B. Solo errores de sintaxis
- C. Exclusivamente fallos de traducción
- D. Agua, fallo de climatización y dependencia eléctrica **(correcta)**

Explicación: La protección ambiental abarca varios escenarios y procedimientos.

### Propuesta

¿Qué conjunto de riesgos físicos y ambientales debe contemplarse en un CPD además del incendio?

- A. Suplantación de usuarios, errores de autorización y exposición de sesiones.
- B. Corrupción lógica de datos, cambios de esquema y consultas bloqueadas.
- C. Vulnerabilidades de aplicaciones, dependencias obsoletas y entradas maliciosas.
- D. Incidentes por agua, fallo de climatización e interrupción del suministro eléctrico. **(correcta)**

Explicación: Agua, temperatura o humedad inadecuadas y fallos de energía pueden inutilizar equipos o instalaciones. Deben incorporarse al análisis de riesgos y a las medidas y procedimientos pertinentes. En el ENS, cada medida tiene su ámbito y nivel de aplicación; no se impone el mismo refuerzo a todos los sistemas.

- Error A: Son riesgos de identidad y control de acceso lógico. Deben tratarse, pero no describen amenazas físicas o ambientales a las instalaciones.
- Error B: Son problemas de datos y operación lógica del SGBD. Pueden causar indisponibilidad sin constituir los escenarios ambientales preguntados.
- Error C: Son riesgos de software y explotación lógica. No sustituyen considerar agua, climatización y suministro de energía.

- [Real Decreto 311/2022: Esquema Nacional de Seguridad](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · Anexo II: mp.if.3 acondicionamiento, mp.if.4 energía, mp.if.5 incendios y mp.if.6 agua; aplicación por categoría o nivel indicado en cada medida · versión: Texto consolidado consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `0c1e1faa19a03636cbc77ba06d54f97d8cc96d852c4ed459ce386f4063a0be54` · propuesta: `3d2fb0051a1daf8bada0634db9a755b899c60dacb44144d1a5b5ab1125cf4840`

## AI-GSI-B4-T06-017

Decisión: pending_review · acción: revise.

Motivo: Aplicar la pérdida de sitio a un dominio de fallo explícito y distinguir recuperación ante desastre de redundancia local; no afirmar que DR se limite a desastres físicos.

### Antes

¿Qué escenario aborda específicamente DR?

- A. Únicamente cambiar una contraseña
- B. Pérdida de sitio o dominio de fallo **(correcta)**
- C. Solo migración de una VM local
- D. Solo reinicio de un proceso sano

Explicación: La recuperación ante desastre requiere dependencias y capacidad en otro dominio apropiado.

### Propuesta

Una inundación deja inutilizable el CPD principal. Hay copias disponibles fuera de él. ¿Qué preparación responde a la recuperación ante esa pérdida de sitio?

- A. Automatizar el reinicio de servidores dentro del mismo CPD cuando fallen procesos.
- B. Preparar capacidad y dependencias recuperables en un dominio no afectado por el desastre. **(correcta)**
- C. Añadir nodos de cómputo en la misma sala, manteniendo energía y comunicaciones comunes.
- D. Duplicar discos en los racks afectados, tomando la redundancia local por recuperación del sitio.

Explicación: El plan debe poder recuperar el servicio fuera del dominio de fallo inutilizado, con capacidad, datos y dependencias disponibles. Las copias externas son necesarias para este supuesto, pero no bastan sin un entorno recuperable y procedimientos probados conforme a los objetivos de recuperación.

- Error A: Reiniciar procesos ayuda frente a fallos locales de software; no devuelve energía, equipos o instalaciones cuando el CPD está inutilizable.
- Error C: Los nodos comparten el sitio afectado y sus servicios físicos. Aumentar redundancia interna no elimina ese fallo común.
- Error D: La duplicación local protege frente a ciertos fallos de disco, pero las dos copias pueden quedar inaccesibles por el mismo desastre del CPD.

- [AWS Well-Architected Framework: REL13-BP02, Use defined recovery strategies to meet the recovery objectives](https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_planning_for_recovery_disaster_recovery.html) · Implementation guidance: pérdida de ubicación principal, dominios AZ/Región; pasos 3–5 recursos y tráfico; paso 6 failback y consistencia · versión: Guía web consultada el 26-10-2026; los ejemplos regionales se adaptan al dominio de fallo del supuesto · comprobado: 2026-10-26

Partida: `ddf6f110a6d9823dc1f25b766ae9fd7430240d1acf8264ee2d83c4c511f0265d` · propuesta: `e5f3f4f1431f60a1a2e6da913048cfe0bb0892402c22a47aa009ae16cf137cdd`

## AI-GSI-B4-T06-019

Decisión: pending_review · acción: revise.

Motivo: Conservar failback y distinguirlo de activación, promoción y copias; condicionar el retorno a la estrategia en lugar de imponer vuelta automática al sitio original.

### Antes

¿Qué debe ensayarse además de conmutar al sitio de recuperación?

- A. Únicamente apagado del sitio primario
- B. Failback **(correcta)**
- C. Solo legibilidad de una copia
- D. La pérdida definitiva del entorno original sin plan de retorno

Explicación: El retorno al entorno normal también tiene riesgos y dependencias.

### Propuesta

¿Qué operación debe planificarse y ensayarse además de la conmutación al sitio de recuperación?

- A. Detección y declaración del desastre, como etapa previa a iniciar la recuperación.
- B. El retorno controlado al entorno habitual, o failback, con datos coherentes. **(correcta)**
- C. Promoción de la réplica secundaria, como parte de la conmutación inicial.
- D. Creación de nuevas copias en el sitio secundario, como sustituto del retorno.

Explicación: Si la estrategia prevé volver al entorno habitual, el failback requiere preparar ese destino, sincronizar el estado actualizado y trasladar el servicio de forma controlada. Debe probarse para evitar pérdida de cambios o interrupciones; la vuelta no tiene por qué ser inmediata ni automática.

- Error A: Detectar y declarar el desastre permite activar la respuesta, pero no ensaya cómo regresar desde el sitio secundario al entorno previsto.
- Error C: Promover una réplica puede formar parte del failover inicial. No resuelve devolver datos y tráfico actualizados al destino de retorno.
- Error D: Crear copias en el secundario protege la operación durante la recuperación, pero no sustituye planificar sincronización y retorno cuando la estrategia los contempla.

- [AWS Well-Architected Framework: REL13-BP02, Use defined recovery strategies to meet the recovery objectives](https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_planning_for_recovery_disaster_recovery.html) · Implementation guidance: pérdida de ubicación principal, dominios AZ/Región; pasos 3–5 recursos y tráfico; paso 6 failback y consistencia · versión: Guía web consultada el 26-10-2026; los ejemplos regionales se adaptan al dominio de fallo del supuesto · comprobado: 2026-10-26

Partida: `06cd382c292d11ae8e4b1358d74cc182a8072dc93aa7031b4f181abff2f4a401` · propuesta: `0df06043bfac6aec440cc739f71eda66fbce6ca0953054cf3f0ed402f0d61b43`

## AI-GSI-B4-T06-020

Decisión: pending_review · acción: revise.

Motivo: Aplicar dependencias DR a un ensayo con datos y procesos recuperados pero acceso fallido; mantener DNS, redes, identidades, certificados y servicios externos como concepto.

### Antes

¿Qué dependencias debe incluir un plan DR además de datos?

- A. DNS, rutas, identidades, certificados y servicios externos **(correcta)**
- B. Únicamente nombres de servidores
- C. Solo discos
- D. Solo el manual impreso

Explicación: Recuperar datos sin las dependencias no restablece necesariamente el servicio.

### Propuesta

En un ensayo DR, la aplicación y su base de datos arrancan en el sitio alternativo, pero los usuarios no acceden por problemas de autenticación y resolución de nombres. ¿Qué debe abarcar el plan además de los datos?

- A. DNS, rutas, identidades, certificados y servicios externos necesarios para operar. **(correcta)**
- B. La copia de discos e imágenes, tomándola como prueba suficiente del acceso de usuarios.
- C. La nomenclatura de servidores y el inventario, dándolos por configuración operativa.
- D. El catálogo de backups y sus hashes, tomándolos como prueba del servicio restaurado.

Explicación: Recuperar procesos y datos no restaura automáticamente las dependencias de acceso y confianza. El plan debe prever nombres, conectividad, identidades, certificados y servicios necesarios, y probar una operación completa desde la perspectiva del usuario, no únicamente el arranque técnico.

- Error B: Los discos e imágenes no garantizan que DNS, autenticación o redes apunten al entorno recuperado ni que sus credenciales y certificados sean válidos.
- Error C: Nombres e inventario identifican recursos, pero no configuran rutas, resolutores, permisos ni relaciones de confianza necesarias para acceder.
- Error D: Los hashes y el catálogo comprueban aspectos de las copias. No demuestran que los usuarios puedan resolver el servicio, autenticarse y completar tareas.

- [AWS Managed Services: Disaster recovery planning](https://docs.aws.amazon.com/managedservices/latest/userguide/ams-disaster-recovery.html) · Warm standby: pasos DR, DNS y AD Dependencies; Maintenance: configuración, grupos de seguridad y certificados · versión: Guía web consultada el 26-10-2026; se citan dependencias, no sus tiempos de recuperación específicos · comprobado: 2026-10-26
- [Microsoft Azure Well-Architected: Develop a disaster recovery plan for multi-region deployments](https://learn.microsoft.com/en-us/azure/well-architected/design-guides/disaster-recovery) · Shared service dependencies can break your chain; proceso de recuperación, pasos 8–9; Secure DR environment and maintain compliance · versión: Guía web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `b5cc112cd8b47ea74110fc478ac628104206495f4d618a0c4800a18545b32c2d` · propuesta: `d1b2ded614cc40d48f52008ddf392f1279eb8169b0cf217d176710ae5f51ea7f`

## AI-GSI-B4-T07-002

Decisión: pending_review · acción: revise.

Motivo: Aplicar el rendimiento extremo a extremo a una medición TCP sin inventar una causa confirmada; diferenciar enlace nominal, sobrecarga y límites de equipos.

### Antes

¿Qué puede limitar rendimiento útil pese a gran capacidad física?

- A. Únicamente longitud del cable sin errores ni equipos
- B. Nada si el medio admite alta frecuencia
- C. Solo el ancho de banda nominal como garantía
- D. Errores, protocolos o equipos **(correcta)**

Explicación: El throughput depende de toda la cadena y sus sobrecargas.

### Propuesta

Un enlace negocia 1 Gbit/s, pero una prueba TCP entrega menos caudal útil a la aplicación. ¿Qué afirmación distingue correctamente velocidad nominal y rendimiento útil?

- A. El caudal de aplicación debe igualar 1 Gbit/s si el enlace ha negociado esa velocidad.
- B. La negociación a 1 Gbit/s descarta límites de procesamiento en los equipos de la ruta.
- C. Cabeceras y retransmisiones no reducen el caudal útil porque viajan por el mismo enlace.
- D. Errores, sobrecarga de protocolos y límites de los equipos pueden reducir el caudal útil. **(correcta)**

Explicación: La velocidad nominal no equivale a datos útiles entregados. Cabeceras, retransmisiones, ventanas, latencia y capacidad de los equipos influyen en el resultado TCP. Una medida menor no identifica por sí sola la causa: deben aislarse condiciones y cuellos de botella con mediciones.

- Error A: La velocidad negociada describe el enlace, no una garantía del caudal de datos de aplicación. También se transmiten cabeceras y puede haber otras limitaciones.
- Error B: Negociar la interfaz no prueba la capacidad de reenvío o procesamiento extremo a extremo, ni la de los hosts que generan y reciben el tráfico.
- Error C: Cabeceras y retransmisiones consumen capacidad sin añadir en la misma proporción datos nuevos de aplicación. Por eso importan al medir caudal útil.

- [IETF RFC 6349: Framework for TCP Throughput Testing](https://www.rfc-editor.org/rfc/rfc6349.html) · §3, criterios del equipo de prueba; §3.3.1 ventana; §4.1.1 sobrecargas de capas; §4.2 TCP Efficiency y retransmisiones · versión: Agosto de 2011, Informational; principios de medición, sin reutilizar requisitos históricos de hardware · comprobado: 2026-10-26

Partida: `aa8c1881868cac1f1ec4fcd261051482b7edc35171bc41072df7d169eabd702e` · propuesta: `a467f765778291453f1492284069130d5838e4a470cb99337c9b65d9987b37a9`

## AI-GSI-B4-T07-009

Decisión: pending_review · acción: revise.

Motivo: Conservar edificio/CPD y corto alcance como uso habitual, con alternativas del mismo ámbito de transporte óptico y sin prohibir monomodo en trayectos cortos.

### Antes

¿Dónde es frecuente utilizar multimodo?

- A. Siempre enlaces intercontinentales
- B. Exclusivamente telefonía analógica
- C. Solo alimentación eléctrica
- D. Edificios y CPD a distancias menores **(correcta)**

Explicación: La elección depende de alcance, ópticas y requisitos.

### Propuesta

¿En qué ámbito es habitual utilizar fibra multimodo con ópticas compatibles y alcance adecuado?

- A. Troncales submarinas que deben salvar miles de kilómetros entre estaciones.
- B. Enlaces metropolitanos largos elegidos por su alcance máximo entre sedes distantes.
- C. Enlaces de acceso que deben alcanzar decenas de kilómetros sin equipos intermedios.
- D. Conexiones de corto alcance dentro de edificios o centros de procesamiento de datos. **(correcta)**

Explicación: La multimodo es habitual en enlaces de corto alcance dentro de edificios y CPD. La distancia admisible depende de la fibra, ópticas y velocidad; no se fija una distancia universal. La monomodo también puede utilizarse en corto alcance y suele elegirse cuando se necesitan mayores distancias.

- Error A: Las troncales submarinas de gran distancia no son el uso típico de multimodo. Sus necesidades de alcance responden a otras soluciones ópticas y de transporte.
- Error B: Cuando domina el alcance metropolitano largo suele emplearse monomodo; llamar metropolitano al enlace no elimina los límites de fibra y ópticas.
- Error C: La multimodo habitual en redes de edificio no proporciona por sí misma esos alcances de decenas de kilómetros; deben seleccionarse medio y transceptores adecuados.

- [Cisco, Panduit y Rockwell Automation: Physical Infrastructure for the Converged Plantwide Ethernet Architecture](https://www.cisco.com/c/en/us/td/docs/sanity/suman/CPwE-Physical-Infrastructure_Feb2023.html) · Capítulo 4, Selecting Single-mode or Multimode Fiber: alcance, ópticas y compatibilidad · versión: ENET-TD020B-EN-P, febrero de 2023; actualización web 07-04-2023 · comprobado: 2026-10-26

Partida: `dd972481e404a0b46723ddf7f86a8baf602097ec348e93c548e32080699cdb9f` · propuesta: `a36330dd5ea7e1135b86e59a32d52b330de78925cd1005be3f4bc2744256e573`

## AI-GSI-B4-T07-011

Decisión: pending_review · acción: revise.

Motivo: Conservar longitudes de onda, presupuesto óptico y transceptores, añadiendo los dos límites de recepción; no exigir idénticas longitudes de onda en ópticas bidireccionales complementarias.

### Antes

¿Qué debe verificarse al diseñar un enlace óptico?

- A. Solo velocidad anunciada sin pérdidas ni compatibilidad óptica
- B. Solo capacidad nominal de los discos
- C. Longitud de onda, presupuesto óptico y transceptores **(correcta)**
- D. Únicamente direcciones IP de extremos

Explicación: Las condiciones ópticas deben ser compatibles con pérdidas y distancia.

### Propuesta

¿Qué debe verificarse al diseñar un enlace óptico para que sus extremos y trayecto sean compatibles?

- A. Coincidencia del conector, tomando su encaje físico como garantía de compatibilidad.
- B. Velocidad nominal de los módulos, tomando la distancia de catálogo como pérdida medida.
- C. Fibra, longitudes de onda y ópticas compatibles, pérdidas y límites de potencia recibida. **(correcta)**
- D. Mayor potencia de transmisión, tomándola como mejora aunque se exceda el límite del receptor.

Explicación: Hay que comprobar compatibilidad de fibra y transceptores, longitudes de onda de transmisión y recepción y presupuesto de pérdidas del trayecto. La potencia recibida debe quedar entre sensibilidad y máximo admisible. Un conector que encaja no garantiza compatibilidad, ni más potencia siempre mejora el enlace.

- Error A: El conector no determina tipo de fibra, longitud de onda, codificación ni límites ópticos. Dos módulos pueden encajar y ser incompatibles.
- Error B: La velocidad y el alcance nominal no miden pérdidas reales de conectores, empalmes y fibra, ni descartan sobrecarga del receptor en trayectos cortos.
- Error D: Superar la potencia admisible puede sobrecargar la recepción y provocar fallos. El diseño debe respetar tanto el límite inferior como el superior.

- [Cisco MDS 9000 Series Pluggable Transceivers Data Sheet](https://www.cisco.com/c/en/us/products/collateral/storage-networking/mds-9000-series-multilayer-switches/product_data_sheet09186a00801bc698.html) · Technical Specifications for Cisco 8-Gbps CWDM SFP Modules: tabla 65, longitudes de onda y potencias; notas de receiver overload y atenuación en trayectos cortos · versión: Actualizado el 05-06-2024; ejemplo de parámetros verificables, sin recomendar un módulo concreto · comprobado: 2026-10-26
- [Cisco, Panduit y Rockwell Automation: Physical Infrastructure for the Converged Plantwide Ethernet Architecture](https://www.cisco.com/c/en/us/td/docs/sanity/suman/CPwE-Physical-Infrastructure_Feb2023.html) · Capítulo 4, Selecting Single-mode or Multimode Fiber: alcance, ópticas y compatibilidad · versión: ENET-TD020B-EN-P, febrero de 2023; actualización web 07-04-2023 · comprobado: 2026-10-26

Partida: `11a71d03f5e17258f7988633201ed3bdec6e48e4272d8c07e711dc603545f4f0` · propuesta: `d7009a584e6d807edf93f658f544da0ab600268e9f7ea4ccd010de18d13b8c14`

## AI-GSI-B4-T07-013

Decisión: pending_review · acción: revise.

Motivo: Conservar órbita y distancia y exigir distinguir propagación de cola, serialización y procesamiento; no prometer una latencia comercial concreta por etiqueta GEO/LEO.

### Antes

¿Qué influye en latencia de propagación satelital?

- A. Únicamente potencia del receptor
- B. La órbita y las distancias del trayecto **(correcta)**
- C. Solo tamaño de la cola local
- D. La categoría del cable Ethernet interior como único factor

Explicación: La geometría del enlace condiciona propagación.

### Propuesta

¿Qué factor determina directamente la componente de propagación de la latencia en un trayecto satelital?

- A. El tiempo que el router mantiene los paquetes en cola antes de transmitirlos.
- B. La órbita y las distancias que recorre la señal entre estaciones y satélites. **(correcta)**
- C. El tamaño del paquete dividido por la tasa de transmisión del enlace de salida.
- D. El tiempo que tarda el terminal en procesar los datos después de recibirlos.

Explicación: La propagación depende de la distancia recorrida y de la velocidad de la señal. La órbita y la geometría del trayecto condicionan esa distancia; los saltos adicionales también cuentan. Colas, serialización y procesamiento pueden aumentar la latencia total, pero son componentes distintos.

- Error A: Esperar en una cola es retardo de encolado. Puede aumentar el RTT sin alterar la distancia de propagación del tramo satelital.
- Error C: Ese cociente representa tiempo de serialización o transmisión de un paquete, no el tiempo de viaje de la señal por el trayecto.
- Error D: El procesamiento ocurre en equipos antes o después del tránsito. Afecta al total, pero no es la componente de propagación física preguntada.

- [IETF RFC 2488: Enhancing TCP Over Satellite Channels using Standard Mechanisms](https://www.rfc-editor.org/rfc/rfc2488.html) · §2 Satellite Characteristics, pp.2–3: velocidad de la luz, altitud, geometría, saltos y distinción frente a otros componentes de RTT · versión: Enero de 1999; se usa la explicación física de propagación, no sus recomendaciones históricas de TCP · comprobado: 2026-10-26
- [ESA: Types of orbits](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits) · Geostationary orbit (GEO); Low Earth orbit (LEO): altitudes y geometría orbital · versión: 30-03-2020; edición web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `03e2b3fe60b9615153e7d6afc127894929a65a7f805938206ead9d0b37c850e0` · propuesta: `eb785134bcd03b228199700dce82af9ab77f153d9b7dfdee6d43d331d5a4a6d7`

## AI-GSI-B4-T07-014

Decisión: pending_review · acción: revise.

Motivo: Conservar visibilidad, obstáculos y Fresnel frente a otros parámetros de radio; utilizar la revisión vigente P.530-19 sin convertir un porcentaje de despeje en regla universal.

### Antes

¿Qué debe examinarse en enlaces de microondas?

- A. Solo tamaño del correo
- B. Únicamente versión del navegador
- C. Línea de vista, obstáculos y zona Fresnel **(correcta)**
- D. La clave primaria de la base de datos

Explicación: La propagación de radio requiere estudiar entorno y obstáculos.

### Propuesta

¿Qué debe examinarse en el trayecto de un enlace terrestre de microondas con visibilidad directa?

- A. Potencia de transmisión y ganancia de antenas, dándolas por garantía de superar obstáculos.
- B. Ancho de canal y cifrado, tomando su compatibilidad por despeje del trayecto.
- C. Perfil del terreno, obstáculos, línea de vista y despeje de la zona de Fresnel. **(correcta)**
- D. Sensibilidad y alcance de catálogo, tomándolos por sustituto del estudio del entorno.

Explicación: Deben estudiarse el perfil del trayecto, obstáculos y despeje relevante alrededor de la línea de vista. La zona de Fresnel puede verse afectada aunque los extremos se vean geométricamente. El diseño también considera propagación atmosférica y margen; no basta potencia o alcance de catálogo.

- Error A: Potencia y ganancia forman parte del presupuesto de enlace, pero no garantizan que un obstáculo o la difracción dejen de afectar a la señal.
- Error B: Ancho de canal y cifrado son parámetros del sistema, pero no describen la geometría ni el despeje alrededor del trayecto.
- Error D: El alcance de catálogo depende de condiciones. No sustituye conocer terreno, edificios, vegetación y despeje del enlace real.

- [UIT-R P.530: Datos de propagación y métodos de predicción para sistemas terrenales con visibilidad directa](https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.530-19-202509-I!!PDF-S.pdf) · Anexo: §1 Introducción, p.3; §2.2 Desvanecimiento por difracción, pp.5–9, obstáculos, perfil del trayecto y despeje de Fresnel · versión: P.530-19, septiembre de 2025; modificaciones formales en 2026, versión española publicada el 22-07-2026 · comprobado: 2026-10-26

Partida: `7b8160bac08136d90c689552f4481d7cd8c2f5c0b6dfb672b54728c61e496b7a` · propuesta: `ac5746cc60a8650b013865818d9e8b184efe32abd5ff39a8ae9b9df102221bdb`

## AI-GSI-B4-T07-015

Decisión: pending_review · acción: revise.

Motivo: Conservar el enunciado directo y el conjunto físico bien elegido, sustituyendo distractores ajenos al ámbito por grupos reales de funciones de red.

### Antes

¿Qué elementos pertenecen al cableado estructurado?

- A. Backbone, distribuidores, horizontal y patch panels **(correcta)**
- B. Únicamente software de oficina
- C. Solo cuentas de usuario
- D. Solo routers virtuales

Explicación: El cableado organiza físicamente enlaces y puntos de distribución.

### Propuesta

¿Qué elementos pertenecen al cableado estructurado?

- A. Backbone, distribuidores, cableado horizontal y paneles de parcheo. **(correcta)**
- B. VLAN, subredes, tablas de rutas y políticas de encaminamiento.
- C. DNS, DHCP, NTP y directorios de identidades del servicio.
- D. Sondeos SNMP, alertas, repositorios de logs y paneles de supervisión.

Explicación: El cableado estructurado organiza la infraestructura física en subsistemas, distribución y terminaciones que facilitan conexión, prueba y mantenimiento. Backbone, distribuidores, horizontal y paneles de parcheo pertenecen a esa infraestructura; servicios y segmentación lógica se apoyan en ella sin sustituirla.

- Error B: VLAN, subredes y rutas describen organización lógica y reenvío. No son los subsistemas físicos del cableado estructurado.
- Error C: Son servicios de nombres, configuración, tiempo e identidad que pueden utilizar la red, no los enlaces y terminaciones del cableado.
- Error D: Son mecanismos y componentes de observabilidad. Ayudan a operar la red, pero no forman el conjunto de subsistemas físicos preguntado.

- [Cisco, Panduit y Rockwell Automation: Physical Infrastructure for the Converged Plantwide Ethernet Architecture](https://www.cisco.com/c/en/us/td/docs/sanity/suman/CPwE-Physical-Infrastructure_Feb2023.html) · Capítulo 2: structured cabling, patch panels y horizontal; capítulo 4: Industrial Plant Network Backbone and Distribution Switching Overview; Scalability · versión: ENET-TD020B-EN-P, febrero de 2023; actualización web 07-04-2023 · comprobado: 2026-10-26

Partida: `5a1094598fc50e688ccad2f194c3f8b4b03ad1d868c4b07cd1a3a31b57e5cc1b` · propuesta: `bdd29dff242b697dc52cb0fb6fd9d04d34330a28d90892c02588930a772fa0e0`

## AI-GSI-B4-T07-018

Decisión: pending_review · acción: revise.

Motivo: Aplicar límite por puerto y presupuesto global a cantidades expresadas todas en la salida PSE, evitando confundir asignación, clase y consumo en el AP.

### Antes

¿Qué debe calcularse al alimentar varios AP mediante PoE?

- A. Solo el número de direcciones IP
- B. Únicamente los metros cuadrados
- C. Solo el número de VLAN
- D. Potencia por puerto y presupuesto total del switch **(correcta)**

Explicación: Tener puertos suficientes no garantiza potencia total suficiente.

### Propuesta

Cuatro AP necesitan cada uno una asignación de 20 W en la salida del switch para su modo previsto. El switch admite 30 W por puerto y dispone de 60 W totales para PoE. ¿Puede alimentarlos simultáneamente en ese modo?

- A. Sí: hay cuatro puertos y cada AP necesita menos de 30 W.
- B. Sí: los cuatro puertos suman 120 W nominales y sobran 40 W.
- C. No: cada AP debe reservar necesariamente los 30 W máximos del puerto.
- D. No: caben 20 W por puerto, pero 80 W totales superan los 60 W disponibles. **(correcta)**

Explicación: La asignación individual de 20 W no supera el límite de 30 W por puerto, pero las cuatro suman 80 W y exceden el presupuesto total de 60 W. Ambas condiciones deben cumplirse. El supuesto fija la potencia asignada en el switch, evitando confundirla con el consumo final del dispositivo.

- Error A: Cumplir el límite individual y disponer de puertos no garantiza potencia global suficiente. Aquí se requieren 80 W y hay 60 W.
- Error B: La suma de máximos por puerto no crea potencia disponible en la fuente. El presupuesto global indicado sigue siendo 60 W, no 120 W.
- Error C: El supuesto fija asignaciones de 20 W. No hay que sustituirlas por el máximo del puerto; la insuficiencia real resulta de 4 × 20 W frente a 60 W.

- [Cisco: PoE, powered device, and switch](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/infra/poe/poe-configuration-guide/g-poe/c-poe-and-switch.html) · How does the PoE-capable switch identify the power requirement of the powered device; PoE on a standalone switch; Power management with CDP/LLDP messages · versión: PoE Configuration Guide, actualizado el 15-09-2025 · comprobado: 2026-10-26

Partida: `e56855b645a5407eede64299e6bdddafc41ccba9f24702f189bcb658e572cc90` · propuesta: `fc746a437f37633a161b9eb932f5712b1acc26cb4315b2909e48668cafe6e760`

## AI-GSI-B4-T07-019

Decisión: pending_review · acción: revise.

Motivo: Conservar categoría y temperatura del mazo y precisar conductores, agrupamiento y ambiente, sin inventar un tamaño máximo ni temperatura universales.

### Antes

¿Qué aspecto térmico importa en un despliegue PoE?

- A. Únicamente velocidad lógica del puerto
- B. Categoría y temperatura del mazo de cables **(correcta)**
- C. Solo número de VLAN
- D. Solo direccionamiento IP de los terminales

Explicación: La alimentación añade condiciones eléctricas y térmicas al diseño del cableado.

### Propuesta

¿Qué comprobación térmica del cableado es relevante al desplegar PoE en mazos de varios cables?

- A. Usar la velocidad negociada como prueba de que el mazo soportará la corriente prevista.
- B. Contrastar tipo y categoría, conductores, tamaño del mazo y temperatura con sus límites. **(correcta)**
- C. Verificar la longitud del enlace, dándola por garantía de que no habrá calentamiento.
- D. Dar la certificación de datos del cable por garantía para cualquier carga de alimentación.

Explicación: La corriente genera calor y el agrupamiento puede dificultar disiparlo. Deben considerarse cable y conductores, tamaño del mazo, ambiente y temperatura admisible, además de pérdidas y límites de la instalación. La categoría ayuda a seleccionar, pero por sí sola no define todo el comportamiento térmico.

- Error A: La negociación de datos no verifica la elevación térmica que puede producir la corriente PoE en un mazo y ambiente concretos.
- Error C: La longitud influye en resistencia y pérdidas, pero no elimina calentamiento ni sustituye revisar corriente, agrupamiento y temperatura ambiente.
- Error D: Una certificación para prestaciones de datos no garantiza toda combinación de potencia, mazo y temperatura. Deben respetarse las condiciones de alimentación y de instalación aplicables.

- [Panduit: Power Over Ethernet with Panduit Copper Cabling](https://www.panduit.com/content/dam/panduit/en/landing-pages/NI-ENT-PoECopperCablesCOTB05.pdf) · Cable Standards and Power over Ethernet, p.2; PoE Temperature Rise Testing Results; The Importance of Cable Operating Temperature Rating, p.7 · versión: COTB05--SA-ENG, octubre de 2018; principios térmicos y ensayos, sin universalizar tablas de fabricante · comprobado: 2026-10-26

Partida: `de7eab50ff821ac55d6f4d08a84cbe7e1e04daae77b60627e778c5136180165f` · propuesta: `b6b8a5921636ccbae1a7af62ac874ab5d3ea818c6059229515b72df46d6cc345`

## AI-GSI-B4-T07-020

Decisión: pending_review · acción: revise.

Motivo: Aplicar los criterios originales de distancia, EMI, capacidad, PoE y coste a AP con necesidad de alimentación; evitar una preferencia universal por cobre o fibra.

### Antes

Para elegir cobre o fibra, ¿qué conjunto de criterios es adecuado?

- A. Siempre el menor precio inicial sin distancia ni EMI
- B. Elegir fibra sin considerar alimentación del terminal
- C. Únicamente la velocidad de un extremo
- D. Distancia, EMI, capacidad, PoE y coste **(correcta)**

Explicación: El medio responde a necesidades físicas y operativas concretas.

### Propuesta

Se comparan cobre y fibra para conectar AP con tramos largos y zonas con interferencias electromagnéticas. Algunos AP necesitan alimentación por el enlace. ¿Qué criterios deben combinarse?

- A. Precio inicial del cable, tomando la interfaz de los AP por garantía del resto del enlace.
- B. Alcance de la fibra, dando por resuelta con ella la alimentación eléctrica de los AP.
- C. Velocidad del puerto de salida, dando por compatibles ópticas, distancias y terminales.
- D. Distancia, EMI, caudal, alimentación local o PoE, compatibilidad y coste de la solución. **(correcta)**

Explicación: El medio debe cumplir alcance, caudal y condiciones ambientales, junto con interfaces, alimentación y coste completo. La fibra no conduce por sí sola la energía PoE: el terminal necesita una solución de alimentación adecuada. El cobre admite PoE bajo sus condiciones de canal, potencia y entorno.

- Error A: El cable más barato puede no cumplir alcance, ambiente o alimentación. Una interfaz de terminal no garantiza la viabilidad de todo el trayecto.
- Error B: La fibra transporta señal óptica, no la energía eléctrica PoE del par de cobre. Puede necesitarse alimentación local u otra solución en el extremo.
- Error C: La velocidad de un puerto no acredita alcance del medio, compatibilidad de ópticas ni potencia disponible para los terminales.

- [Cisco, Panduit y Rockwell Automation: Physical Infrastructure for the Converged Plantwide Ethernet Architecture](https://www.cisco.com/c/en/us/td/docs/sanity/suman/CPwE-Physical-Infrastructure_Feb2023.html) · Capítulo 2: M.I.C.E. Assessment, EMI y selección de medios; capítulo 3: Power over Ethernet; capítulo 4: Selecting Single-mode or Multimode Fiber · versión: ENET-TD020B-EN-P, febrero de 2023; se usan criterios de selección, no predicciones de estándares Wi-Fi · comprobado: 2026-10-26
- [Cisco: PoE, powered device, and switch](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/infra/poe/poe-configuration-guide/g-poe/c-poe-and-switch.html) · How does the PoE-capable switch identify the power requirement of the powered device; PoE on a standalone switch; Power management with CDP/LLDP messages · versión: PoE Configuration Guide, actualizado el 15-09-2025 · comprobado: 2026-10-26

Partida: `f4307b503899ebfb4933083353778b0d4f46e19be8fec84c5b3233f85a836821` · propuesta: `fdfb3f2345e8cb35c763670ec197ab0c22570cb18cd27722d2547a8df542e32c`

## AI-GSI-B4-T08-017

Decisión: pending_review · acción: revise.

Motivo: Conservar L2 y L3 y precisar funciones MAC/IP, VLAN y troncales, con errores cercanos al concepto y sin atribuir NAT o routing activo por etiqueta comercial.

### Antes

¿Qué función puede combinar un switch multicapa?

- A. Solo amplificación analógica
- B. Conmutación L2 y encaminamiento L3 **(correcta)**
- C. Solo traducción de documentos
- D. Exclusivamente almacenamiento

Explicación: Debe examinarse función y configuración, no solo nombre del equipo.

### Propuesta

En una LAN Ethernet/IP, ¿qué funciones puede combinar un switch multicapa con encaminamiento habilitado?

- A. Conmutación entre VLAN por MAC y encaminamiento por IP dentro de cada VLAN.
- B. Conmutación L2 por MAC y encaminamiento L3 entre redes IP. **(correcta)**
- C. Segmentación en VLAN que convierte cualquier enlace troncal en un router IP.
- D. Repetición de tramas a todos los puertos y traducción de direcciones por defecto.

Explicación: Puede conmutar tramas en capa 2 y encaminar paquetes entre redes en capa 3 según su configuración. Separar VLAN no crea por sí mismo comunicación IP entre ellas; se necesita encaminamiento y las políticas correspondientes. La etiqueta comercial del equipo no demuestra qué funciones están habilitadas.

- Error A: Invierte las funciones: la conmutación MAC opera dentro del dominio L2 y el encaminamiento IP permite tránsito entre redes, con nueva encapsulación L2 según el siguiente salto.
- Error C: Un enlace troncal transporta tráfico de varias VLAN, pero no las enruta por ese hecho. Hace falta una función L3 configurada.
- Error D: Un switch no actúa normalmente como repetidor a todos los puertos para cada trama, y NAT no es una consecuencia automática de ser multicapa.

- [Cisco: IP Multicast Routing Technology Overview](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9300/software/release/17-9/configuration_guide/ip_mcast_rtng/b_179_ip_mcast_rtng_9300_cg/ip_multicast_routing___technology_overview.html) · Cisco Express Forwarding, MFIB, and Layer 2 Forwarding: encaminamiento L3 y bridging L2 simultáneos; figura 6 · versión: Cisco IOS XE Cupertino 17.9.x, Catalyst 9300; ejemplo funcional, sin exigir esa plataforma · comprobado: 2026-10-26

Partida: `8403cfe3b974c6e8f0ea0d65236741ff36839c3667a1d8dd81de8de0baba7dea` · propuesta: `3f6c6fe57805f966c664d508f29f3efc2e19a6068ec1ae486db061476332cc80`
