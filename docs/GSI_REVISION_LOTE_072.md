# GSI-EDITORIAL-072 — revisión propuesta

Preparado: 2026-11-03. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `d2cbe43a295fd0bcc61566450426b96539e47df2d8e0cd2ea300f10b48458e10`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T02-014

Decisión: pending_review · acción: revise.

Motivo: Conservar copia lógica y clave D; contrastar con copia física, log y réplica, acotando portabilidad y restauración granular.

### Antes

¿Qué característica tienen las copias lógicas?

- A. Garantizan RTO cero
- B. Copian siempre toda estructura física bit a bit
- C. Sustituyen cualquier log transaccional
- D. Exportan objetos o datos, útiles para portabilidad o recuperación granular **(correcta)**

Explicación: Físico y lógico ofrecen capacidades de recuperación distintas.

### Propuesta

¿Qué característica tienen las copias lógicas?

- A. Reproducen directamente la disposición física de los ficheros del motor en una imagen de almacenamiento.
- B. Registran exclusivamente la secuencia de cambios del log para rehacer operaciones sobre una base física.
- C. Mantienen una segunda instancia actualizada como réplica del estado de la primera.
- D. Representan objetos o datos lógicamente y pueden facilitar restauración granular o traslado compatible. **(correcta)**

Explicación: Una copia lógica representa objetos y datos mediante un formato que el motor puede interpretar para recrearlos. Puede facilitar seleccionar objetos o trasladar datos entre entornos compatibles, según formato y herramientas. No reproduce necesariamente el layout físico, no equivale a una réplica o log y no garantiza restauración instantánea o compatibilidad entre cualquier producto y versión.

- Error A: Describe una copia física o imagen de estructuras, no la representación lógica de objetos y datos.
- Error B: El log de cambios para recuperación es otro artefacto; una exportación lógica no sustituye por sí sola cualquier cadena de logs.
- Error C: Una instancia replicada mantiene estado de ejecución/datos, mientras una exportación es material de respaldo con su punto y alcance.

- [PostgreSQL: SQL Dump](https://www.postgresql.org/docs/18/backup-dump.html) · §25.1 SQL Dump; Restoring the Dump; formatos y control de restauración de objetos · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Copia lógica, no compatibilidad universal entre cualquier motor o versión; no se ejecutan comandos. · comprobado: 2026-11-03

Partida: `09413bd868466f681687280567758141fe298c40537f06c7dece9b683fdd2f7b` · propuesta: `38eb754c35e2010975a7e05be3a0abe767e84b33b79df7e5daa8da2259ecb2cf`

## AI-GSI-B4-T02-016

Decisión: pending_review · acción: revise.

Motivo: Conservar réplica distinta de backup y clave D; mantener microcaso y distinguir promoción, durabilidad e historia recuperable.

### Antes

Un borrado erróneo se propaga a la réplica. ¿Qué conclusión operativa es correcta?

- A. La replicación siempre evita errores lógicos
- B. La durabilidad garantiza recuperar cualquier versión histórica
- C. Ya no puede existir ninguna copia útil
- D. La réplica no sustituye una estrategia de backup **(correcta)**

Explicación: La réplica puede reproducir daño lógico; backups y retención aportan otros puntos de recuperación.

### Propuesta

Un borrado erróneo se propaga a la réplica. ¿Qué conclusión operativa es correcta?

- A. Que basta promover la réplica para volver a disponer del estado anterior al borrado ya propagado.
- B. Que la durabilidad de una transacción conserva automáticamente todas sus versiones históricas recuperables.
- C. Que una vez propagado el borrado ya no puede quedar ningún punto de recuperación independiente.
- D. Que la réplica no sustituye backups y retención con los que recuperar un estado anterior pertinente. **(correcta)**

Explicación: La réplica puede ejecutar el mismo borrado lógico que el primario; promoverla no recupera por sí solo el pasado. La estrategia debe conservar puntos y materiales de recuperación apropiados, con retención y pruebas de restauración. El resultado depende de qué copias o logs se mantengan y del objetivo; no se deduce que toda recuperación sea imposible ni que una réplica garantice historia recuperable.

- Error A: El supuesto indica que la réplica ya incorporó el borrado; cambiar su rol no deshace ese cambio.
- Error B: Durabilidad preserva cambios confirmados según las garantías del sistema, no cualquier versión pasada para cualquier recuperación.
- Error C: Pueden existir backups, logs o copias independientes adecuados; el estado de la réplica no informa por sí solo de su existencia o utilidad.

- [PostgreSQL: Log-Shipping Standby Servers](https://www.postgresql.org/docs/18/warm-standby.html) · §26.2.5 Streaming Replication; §26.2.8 Synchronous Replication y Planning for Performance · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Garantías según confirmación, estado de réplicas y dominios de fallo; sincronía no elimina cualquier pérdida o necesidad de recuperación. · comprobado: 2026-11-03
- [NCSC: Mitigating malware and ransomware attacks](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks) · Action1: Make regular backups; aislamiento, restauración y copias frente a sincronización inmediata · versión: Guía pública comprobada 03-11-2026. No se ejecuta un procedimiento sobre sistemas reales ni se recomienda una configuración universal del proyecto. · comprobado: 2026-11-03

Partida: `178e498ef4010bcbd0eb699f0937f18e8868ef7ba34f88f527c028ab3e370644` · propuesta: `50983492eed2ce896555974d35b4f35d223f546a9624f1c6cb4f39a3f3adac58`

## AI-GSI-B4-T02-017

Decisión: pending_review · acción: revise.

Motivo: Conservar menor pérdida potencial frente a espera y clave A; precisar condiciones de confirmación sin garantizar cero pérdida universal.

### Antes

¿Qué compromiso acompaña a replicación síncrona?

- A. Menor pérdida potencial a costa de latencia **(correcta)**
- B. Sustitución de todo DR
- C. Ausencia universal de latencia
- D. Datos siempre independientes sin coordinación

Explicación: La coordinación síncrona reduce exposición a pérdida, con costes de comunicación y espera.

### Propuesta

¿Qué compromiso acompaña a replicación síncrona?

- A. Confirmar copias antes de completar operaciones, reduciendo exposición a pérdida a costa de espera. **(correcta)**
- B. Confirmar localmente y enviar después los cambios sin depender del estado de las copias remotas.
- C. Conservar automáticamente versiones históricas como sustitución de toda copia de seguridad.
- D. Eliminar coordinación entre copias para que su distancia no influya en las confirmaciones.

Explicación: La sincronía hace depender la confirmación de condiciones sobre una o más réplicas. Puede reducir exposición a pérdida de cambios confirmados dentro del modelo de fallos previsto, a costa de comunicación y espera. Las garantías dependen de la política y de qué se confirme: recibir, escribir o aplicar no son idénticos. Tampoco elimina fallos comunes, necesidad de backups o diseño de recuperación.

- Error B: Confirmar sin esperar al estado remoto describe el comportamiento asíncrono, no el compromiso de coordinación síncrona preguntado.
- Error C: Replicar cambios no proporciona por sí solo retención de todas las versiones o recuperación ante borrados lógicos.
- Error D: La sincronía introduce coordinación y las comunicaciones pueden aumentar latencia o afectar disponibilidad.

- [PostgreSQL: Log-Shipping Standby Servers](https://www.postgresql.org/docs/18/warm-standby.html) · §26.2.5 Streaming Replication; §26.2.8 Synchronous Replication y Planning for Performance · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Garantías según confirmación, estado de réplicas y dominios de fallo; sincronía no elimina cualquier pérdida o necesidad de recuperación. · comprobado: 2026-11-03

Partida: `9d80692323676c02e1320803e68cfc20a9677028ae5ee7195f0929bdd3c05417` · propuesta: `de6927c6a545fc361e447348089577e7634ff84a84ec321223cdbc3a26d0b8dd`

## AI-GSI-B4-T02-018

Decisión: pending_review · acción: revise.

Motivo: Conservar lag asíncrono y clave D; distinguir confirmación, desfase, exposición a pérdida y objetivo de recuperación.

### Antes

¿Qué debe contemplarse en replicación asíncrona?

- A. Ausencia de monitorización
- B. Imposibilidad de pérdida bajo cualquier fallo
- C. Igualdad instantánea garantizada
- D. Retraso respecto al primario **(correcta)**

Explicación: El lag condiciona RPO y decisiones de conmutación.

### Propuesta

¿Qué debe contemplarse en replicación asíncrona?

- A. Que cada commit se confirme únicamente después de aplicarse en todas las réplicas remotas.
- B. Que disponer de una copia en otro nodo elimine la exposición a perder commits recientes.
- C. Que el desfase entre copia y primario sea el mismo dato que el tiempo objetivo de recuperar el servicio.
- D. Que la réplica vaya retrasada y una conmutación pueda omitir cambios aún no recibidos. **(correcta)**

Explicación: En un esquema asíncrono, el primario puede confirmar antes de que la réplica tenga los cambios. El desfase debe observarse al decidir conmutación y exposición a pérdida; no es necesariamente constante o nulo. RPO y RTO son objetivos distintos de datos y tiempo de recuperación, y una medida de lag no demuestra por sí sola toda la estrategia de continuidad.

- Error A: Esperar aplicación en todas las réplicas no es una exigencia del esquema asíncrono; confunde su confirmación con una política síncrona concreta.
- Error B: La copia puede no contener cambios recientemente confirmados si el primario falla antes de transferirlos.
- Error C: El desfase describe diferencia de estado o progreso; RTO es un objetivo de tiempo de recuperación del servicio, no ese mismo valor.

- [PostgreSQL: Log-Shipping Standby Servers](https://www.postgresql.org/docs/18/warm-standby.html) · §26.2.5 Streaming Replication; §26.2.8 Synchronous Replication y Planning for Performance · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Garantías según confirmación, estado de réplicas y dominios de fallo; sincronía no elimina cualquier pérdida o necesidad de recuperación. · comprobado: 2026-11-03

Partida: `d910cb417b0156b79362ec0d1dc402eee1418c165cbab4ddcda437774951d0d0` · propuesta: `077c854d84f48528767ecab5c6ce8ffefd571aa5bcc7e62f1489e2cc5a951a98`

## AI-GSI-B4-T02-020

Decisión: pending_review · acción: revise.

Motivo: Conservar compatibilidad, pruebas, ventana y contingencia y clave D; microcaso de salto mayor sin prometer downgrade inmediato.

### Antes

¿Qué preparación requiere un upgrade mayor del SGBD?

- A. Solo descargar la versión nueva
- B. Ignorar clientes y drivers
- C. Eliminar las copias anteriores antes de empezar
- D. Compatibilidad, pruebas, ventana y contingencia **(correcta)**

Explicación: La actualización puede afectar aplicaciones, datos y recuperación y necesita ensayo.

### Propuesta

Se prepara el salto a una versión mayor del SGBD que sirve varias aplicaciones. ¿Qué preparación es adecuada?

- A. Limitar la preparación a descargar el instalador y considerar compatibles los datos y clientes por defecto.
- B. Conservar el nombre del servicio y asumir que la nueva versión acepta cualquier extensión o formato anterior.
- C. Eliminar los materiales anteriores al comenzar para forzar que la aplicación termine usando la versión nueva.
- D. Ensayar compatibilidad y migración, acordar ventana y validar una contingencia y recuperación viables. **(correcta)**

Explicación: Una actualización mayor puede afectar formatos, extensiones, clientes y comportamiento de aplicaciones. Debe ensayarse el método compatible con las versiones, comprobar el servicio y planificar ventana y contingencia. Una comprobación técnica ayuda, pero no sustituye todas las pruebas de aplicación. Volver a la versión anterior no es siempre instantáneo o seguro tras escribir con la nueva; la recuperación debe estar diseñada y probada.

- Error A: Disponer del paquete no acredita compatibilidad o recuperación de datos, extensiones y aplicaciones.
- Error B: Conservar el endpoint no garantiza compatibilidad de protocolos, drivers, extensiones o formatos de almacenamiento.
- Error C: Destruir antes la alternativa y los materiales de recuperación quita opciones si la migración falla o produce un efecto no previsto.

- [PostgreSQL: Upgrading a PostgreSQL Cluster](https://www.postgresql.org/docs/18/upgrading.html) · §18.6: actualización mayor y métodos de dump, pg\_upgrade y replicación · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Compatibilidad y métodos dependen del motor/versiones; el anuncio de19 RC1 no se presenta como versión final. · comprobado: 2026-11-03
- [PostgreSQL: pg\_upgrade](https://www.postgresql.org/docs/18/pgupgrade.html) · Description; Usage; comprobación de compatibilidad y uso de ficheros antiguos según modo · versión: PostgreSQL18, edición fija comprobada 03-11-2026. La comprobación no prueba toda aplicación; no se promete downgrade o vuelta instantánea tras escrituras nuevas. · comprobado: 2026-11-03

Partida: `a6be1c28fa3ec97c2249ad8c1dfe71bd188d0a95e5f3b4d92ad291499c3ad677` · propuesta: `19397075db314a26916fc3ba6e2e6852b3ebbc391487153324dba6ffe80fd3bd`

## AI-GSI-B4-T03-001

Decisión: pending_review · acción: revise.

Motivo: Conservar predictivo y clave D; acotar a activo físico y distinguir previsión de calendario sin negar que se integre en prevención.

### Antes

Medir tendencias de degradación para anticipar una avería es mantenimiento…

- A. De urgencia tras fallo
- B. Correctivo
- C. Exclusivamente adaptativo
- D. Predictivo **(correcta)**

Explicación: El predictivo utiliza mediciones; el correctivo repara después del fallo.

### Propuesta

En un equipo físico se analizan mediciones y tendencias de degradación para prever una avería y anticipar la intervención. ¿Qué enfoque caracteriza el caso?

- A. Preventivo por calendario, sin usar el estado medido para decidir la intervención.
- B. Correctivo, porque se espera al fallo consumado antes de actuar.
- C. Adaptativo de software, porque se modifica el programa para un entorno distinto.
- D. Predictivo, al analizar tendencias para anticipar degradación y necesidad de intervención. **(correcta)**

Explicación: El análisis de condiciones y tendencias para anticipar el estado futuro caracteriza mantenimiento predictivo. No se reduce a esperar una avería o a una fecha fija. En una clasificación amplia puede considerarse parte de la prevención: lo que distingue el caso es que la decisión se apoya en datos de degradación y previsión, no en un calendario independiente del estado. No exige por definición una tecnología de IA concreta.

- Error A: La actuación descrita usa mediciones y tendencias; un calendario fijo independiente del estado no explica ese criterio de decisión.
- Error B: El caso intenta actuar antes del fallo, no reparar únicamente después de producirse.
- Error C: Adaptar software a un entorno nuevo no es el análisis de condición de un activo físico planteado.

- [IBM: What is predictive maintenance?](https://www.ibm.com/think/topics/predictive-maintenance) · Predictive maintenance, defined; datos operativos, condición y previsión de fallo · versión: Mesh Flinders/Ian Smalley, página actualizada 03-06-2026 y comprobada 03-11-2026. Concepto de mantenimiento físico; no se exige IA/IoT o un algoritmo a toda predicción. · comprobado: 2026-11-03
- [IBM: What is preventive maintenance?](https://www.ibm.com/think/topics/what-is-preventive-maintenance) · Types of preventive maintenance: Time-based; Condition-based; Predictive · versión: Texto público comprobado 03-11-2026. El predictivo puede integrarse en mantenimiento preventivo en sentido amplio; se distingue de calendario fijo, no se presentan clases universalmente excluyentes. · comprobado: 2026-11-03

Partida: `34e4180a77a8c9795624f79081985a6973e9a19079348d53629c1e696ebf7358` · propuesta: `deb9782381fc4d4868335803d22cc529b496bbc2936ac5189950971e38cc80e6`

## AI-GSI-B4-T03-002

Decisión: pending_review · acción: revise.

Motivo: Conservar preventivo y clave A; mantener caso de batería y aclarar que se actúa por calendario antes del fallo.

### Antes

Sustituir una batería conforme a un calendario preventivo es…

- A. Mantenimiento preventivo **(correcta)**
- B. Gestión de demanda exclusivamente
- C. Corrección tras avería obligatoriamente
- D. Análisis forense

Explicación: La prevención actúa antes del fallo mediante inspecciones y cambios programados.

### Propuesta

Una batería aún operativa se sustituye al vencer el intervalo previsto en el calendario de mantenimiento. ¿Cómo se clasifica esa actuación?

- A. Preventivo programado por tiempo. **(correcta)**
- B. Predictivo basado en tendencias.
- C. Correctivo posterior al fallo.
- D. Adaptativo por cambio de entorno.

Explicación: Cambiar una batería todavía operativa porque vence un intervalo planificado es mantenimiento preventivo por calendario. No hace falta que haya fallado ni que una tendencia medida active la decisión. Puede coexistir con otras estrategias; el supuesto identifica el motivo concreto de esta sustitución y no prescribe un intervalo real para un equipo.

- Error B: No se indica una predicción basada en tendencias como disparador; se actúa por la fecha planificada.
- Error C: La batería está operativa, por lo que no se describe reparación posterior a la avería.
- Error D: La tarea es sustitución programada de un componente físico, no adaptación de un programa a otro entorno.

- [IBM: What is preventive maintenance?](https://www.ibm.com/think/topics/what-is-preventive-maintenance) · Types of preventive maintenance: Time-based; Condition-based; Predictive · versión: Texto público comprobado 03-11-2026. El predictivo puede integrarse en mantenimiento preventivo en sentido amplio; se distingue de calendario fijo, no se presentan clases universalmente excluyentes. · comprobado: 2026-11-03

Partida: `e24f644481639c4b7317145a4283601c6b5ef113220d7063091f7c43fa4e0ef8` · propuesta: `21d7a116c676d539d5f7ba0c6887e4366086a062ee23cfa85a159806e3aa6c79`

## AI-GSI-B4-T03-003

Decisión: pending_review · acción: revise.

Motivo: Conservar recuperación inmediata y clave C; distinguir objetivos de incidente, problema, petición y cambio sin impedir trabajo simultáneo.

### Antes

¿Qué objetivo inmediato tiene gestionar un incidente?

- A. Cambiar todas las versiones
- B. Demostrar siempre primero la causa raíz completa
- C. Restaurar el servicio **(correcta)**
- D. Rediseñar toda la organización

Explicación: La gestión de problemas profundiza en causas y recurrencia; incidentes prioriza recuperación.

### Propuesta

¿Qué objetivo inmediato tiene gestionar un incidente?

- A. Demostrar de forma completa una causa única antes de permitir cualquier recuperación o mitigación.
- B. Atender una solicitud estándar de acceso, aunque no haya interrupción o degradación del servicio.
- C. Restaurar el servicio afectado y reducir el impacto de la interrupción o degradación. **(correcta)**
- D. Autorizar una nueva versión como objetivo principal, con independencia de que recupere el servicio.

Explicación: La gestión de incidentes prioriza recuperar el servicio y limitar su impacto. Una mitigación o workaround puede cumplir ese objetivo aunque la investigación de causas continúe mediante gestión de problemas. Eso no elimina registro, coordinación o validación de recuperación; evita confundir el fin inmediato con resolver antes y de forma definitiva todos los factores causales.

- Error A: El análisis causal puede ayudar a resolver, pero exigir una explicación completa antes de mitigar puede prolongar innecesariamente el impacto.
- Error B: Una petición estándar busca proporcionar algo solicitado por el usuario; no describe por sí misma la recuperación de una interrupción.
- Error D: Un cambio puede formar parte de la solución, pero autorizar versiones no es el objetivo principal de gestionar el incidente.

- [Atlassian: Incident Management Process](https://www.atlassian.com/incident-management/itsm) · Definición de incidente; Incident management workflow; Resolution and recovery · versión: Guía de práctica del fabricante comprobada 03-11-2026. No es lectura de una norma o manual ITIL de pago ni obliga a usar una herramienta concreta. · comprobado: 2026-11-03
- [Atlassian: Responding to an incident](https://www.atlassian.com/incident-management/handbook/incident-response) · Resolve: fin del impacto de negocio, transición a cleanup y postmortem · versión: Handbook del propio operador, texto comprobado 03-11-2026. Se usa objetivo y validación, no un flujo universal de diez pasos o plazo fijo de observación. · comprobado: 2026-11-03
- [Atlassian: Problem Management](https://www.atlassian.com/itsm/problem-management) · What is problem management?; relación con incidentes; causas y factores contribuyentes · versión: Guía de fabricante comprobada 03-11-2026. Un problema puede ser causa o causa potencial; no se exige conocer una única causa antes de iniciar investigación o restaurar servicio. · comprobado: 2026-11-03

Partida: `190a7868d4a9ac32c14fbbfd55985ec869684fe7bf6e048136b9d0c2f2ab82dc` · propuesta: `82bfbe1fef5758b9ebd9733aa54c86972e70a506806d3f0299bc03e4a496c3ad`

## AI-GSI-B4-T03-004

Decisión: pending_review · acción: revise.

Motivo: Conservar gestión de problemas y clave D; mantener caso recurrente, precisar causa potencial y no imponer una causa única ya demostrada.

### Antes

Incidencias recurrentes se recuperan con un reinicio, pero se desconoce su origen. ¿Qué proceso debe profundizar?

- A. Solo gestión de incidentes sin analizar recurrencia
- B. Gestión de peticiones estándar
- C. Gestión de accesos
- D. Gestión de problemas **(correcta)**

Explicación: El problema busca causa raíz y prevención de recurrencia.

### Propuesta

Incidencias recurrentes se recuperan con un reinicio, pero se desconoce su origen. ¿Qué proceso debe profundizar?

- A. Gestión de incidentes centrada en registrar y repetir la mitigación, sin investigar la recurrencia.
- B. Gestión de peticiones estándar orientada a proporcionar prestaciones solicitadas por los usuarios.
- C. Gestión de accesos orientada a conceder y retirar los permisos de identidades autorizadas.
- D. Gestión de problemas para investigar causas y factores y reducir la recurrencia o su impacto. **(correcta)**

Explicación: La gestión de problemas investiga causas y factores contribuyentes de incidentes y busca reducir su probabilidad e impacto. Puede partir de una causa potencial aún no conocida y convivir con la recuperación de cada incidente. Que reiniciar restaure temporalmente no demuestra haber eliminado el problema ni obliga a esperar una nueva caída para investigarlo.

- Error A: Registrar y restablecer cada incidente es útil, pero repetir la mitigación sin investigar deja sin tratar el objetivo de la recurrencia.
- Error B: Una petición de prestación no es la práctica cuyo objetivo central es investigar causas de incidentes repetidos.
- Error C: La causa podría relacionarse con acceso, pero aún no se sabe; gestionar permisos no sustituye el análisis del problema planteado.

- [Atlassian: Problem Management](https://www.atlassian.com/itsm/problem-management) · What is problem management?; relación con incidentes; causas y factores contribuyentes · versión: Guía de fabricante comprobada 03-11-2026. Un problema puede ser causa o causa potencial; no se exige conocer una única causa antes de iniciar investigación o restaurar servicio. · comprobado: 2026-11-03
- [Atlassian: Responding to an incident](https://www.atlassian.com/incident-management/handbook/incident-response) · Resolve: fin del impacto de negocio, transición a cleanup y postmortem · versión: Handbook del propio operador, texto comprobado 03-11-2026. Se usa objetivo y validación, no un flujo universal de diez pasos o plazo fijo de observación. · comprobado: 2026-11-03

Partida: `a37dc0e50a6f912f304b2e9bcd5b1bcdc5b5d9f97be9fdef31961d4f4f0b511a` · propuesta: `0ea7f2e82e20cd7ec47980d0fb54874e22583f91bf0945c3298a150785f3fec4`

## AI-GSI-B4-T03-005

Decisión: pending_review · acción: revise.

Motivo: Conservar petición estándar y clave B; alternativas de las otras prácticas ITSM sin confundir petición con un cambio o incidente obligatorio.

### Antes

¿Qué distingue una petición de servicio?

- A. Es necesariamente un desastre
- B. Es una demanda estándar **(correcta)**
- C. Equivale a cualquier vulnerabilidad
- D. Es siempre una interrupción no planificada

Explicación: Petición, incidente, problema y cambio tienen objetivos diferentes.

### Propuesta

¿Qué distingue una petición de servicio?

- A. Una interrupción o degradación no planificada que debe restaurarse con prioridad según impacto.
- B. Una solicitud formal de una prestación o información mediante un flujo habitual de atención. **(correcta)**
- C. Una investigación de causas potenciales de incidentes para reducir su repetición o impacto.
- D. Una modificación de un componente o servicio que debe evaluarse y autorizarse según su alcance.

Explicación: Una petición de servicio solicita algo que debe proporcionarse, como información, acceso o equipo, normalmente con un flujo definido y repetible. Se distingue por su finalidad de un incidente, investigación de problema o cambio. Satisfacer una petición puede requerir autorizaciones o un cambio controlado; eso no hace idénticas todas esas prácticas.

- Error A: Describe un incidente y su objetivo de recuperar, no la demanda de una prestación por el usuario.
- Error C: Investigar causas o causas potenciales corresponde a gestión de problemas.
- Error D: Describe el objeto de control de cambios; una petición puede dar lugar a uno, sin que ambas categorías sean equivalentes.

- [Atlassian: Service Request Management](https://www.atlassian.com/itsm/service-request-management) · What is service request management?; Service request management vs incident management · versión: Texto comprobado 03-11-2026. Solicitudes formales de acceso, información o equipos mediante flujo normalizado; no toda solicitud implica interrupción o desastre. · comprobado: 2026-11-03
- [Atlassian: Problem Management](https://www.atlassian.com/itsm/problem-management) · What is problem management?; relación con incidentes; causas y factores contribuyentes · versión: Guía de fabricante comprobada 03-11-2026. Un problema puede ser causa o causa potencial; no se exige conocer una única causa antes de iniciar investigación o restaurar servicio. · comprobado: 2026-11-03

Partida: `b076d73b677768bca6a24f1a42864c24ff53c58d97f4c21ff7e3ce40d47c8f89` · propuesta: `0a82c8b270b5062d6e6aac87cbaeac3e62596ba821c37cb17c0dd154cca39e31`

## AI-GSI-B4-T03-007

Decisión: pending_review · acción: revise.

Motivo: Conservar validación de recuperación y clave A; distinguir servicio recuperado de ticket cerrado y causa definitivamente eliminada.

### Antes

¿Qué debe comprobarse antes de cerrar un incidente resuelto?

- A. Validación de la recuperación **(correcta)**
- B. Solo que el técnico terminó su turno
- C. Borrado del diagnóstico
- D. Ausencia de mensajes nuevos durante un minuto como regla universal

Explicación: Resolver técnicamente debe confirmarse en términos del servicio.

### Propuesta

¿Qué debe comprobarse antes de cerrar un incidente resuelto?

- A. Que el servicio y las funciones afectadas se han recuperado conforme a criterios pertinentes. **(correcta)**
- B. Que la herramienta permite marcar el ticket como cerrado, aunque no se pruebe la función afectada.
- C. Que se conoce y elimina definitivamente toda causa antes de considerar restaurado el servicio.
- D. Que no aparezcan alertas durante un minuto, tomado como criterio suficiente para cualquier servicio.

Explicación: La recuperación debe confirmarse en términos del servicio y su impacto, no solo porque se ejecutó una acción técnica o cambió el estado del ticket. Las comprobaciones dependen de la función y los criterios acordados, con observación y confirmación de los afectados cuando proceda. Puede quedar trabajo de limpieza o análisis posterior sin mantener por ello una interrupción ya recuperada.

- Error B: Cambiar el estado de un registro no demuestra que la prestación afectada vuelva a funcionar.
- Error C: La investigación de problemas puede continuar tras restaurar el servicio; no toda causa debe estar eliminada para resolver el incidente.
- Error D: Un plazo arbitrario sin nuevas alertas no prueba la recuperación de todos los servicios y sus usos.

- [Atlassian: Responding to an incident](https://www.atlassian.com/incident-management/handbook/incident-response) · Resolve: fin del impacto de negocio, transición a cleanup y postmortem · versión: Handbook del propio operador, texto comprobado 03-11-2026. Se usa objetivo y validación, no un flujo universal de diez pasos o plazo fijo de observación. · comprobado: 2026-11-03
- [Atlassian: Incident Management Process](https://www.atlassian.com/incident-management/itsm) · Definición de incidente; Incident management workflow; Resolution and recovery · versión: Guía de práctica del fabricante comprobada 03-11-2026. No es lectura de una norma o manual ITIL de pago ni obliga a usar una herramienta concreta. · comprobado: 2026-11-03

Partida: `4692b2bebc826910726513608ccd076f23b03f7f1292de11a30553989d6f83c6` · propuesta: `68a037d234924a9bd7446066b19990f0bc2ac30fd15d32b59401ce61d30ce40a`

## AI-GSI-B4-T03-008

Decisión: pending_review · acción: revise.

Motivo: Conservar escalado funcional y clave B; alternativas sobre criterio, automatismo y prioridad sin categorías absurdas.

### Antes

Escalar una incidencia a especialistas con más conocimiento es escalado…

- A. Jerárquico exclusivamente
- B. Funcional **(correcta)**
- C. Documental
- D. Financiero

Explicación: El funcional busca capacidad técnica; el jerárquico autoridad y recursos.

### Propuesta

Escalar una incidencia a especialistas con más conocimiento es escalado…

- A. Jerárquico, porque el criterio que decide el destino es la autoridad organizativa.
- B. Funcional, porque se busca capacidad o conocimiento técnico pertinente. **(correcta)**
- C. Automático por falta de acuse dentro de un plazo, sin otro criterio de destino.
- D. Cambio de prioridad del ticket sin solicitar capacidad o intervención adicional.

Explicación: Cuando el motivo es obtener conocimiento o capacidad técnica adecuada se habla de escalado funcional. La escalada jerárquica se apoya en autoridad o nivel de decisión. Un mismo incidente puede combinar ambos y usar reglas automáticas; la pregunta clasifica el criterio descrito, no impone tipos excluyentes para toda la actuación.

- Error A: El enunciado no solicita autoridad o decisión por nivel jerárquico, sino especialización técnica.
- Error C: Una regla temporal podría automatizar el contacto, pero no es el motivo descrito; automatización y destino técnico no son conceptos equivalentes.
- Error D: Modificar una prioridad puede afectar la atención, pero por sí solo no aporta la especialización solicitada.

- [Atlassian: Escalation Policies for Incidents](https://www.atlassian.com/incident-management/on-call/escalation-policies) · Hierarchical escalation; Functional escalation; Automatic escalation · versión: Guía del fabricante comprobada 03-11-2026. Tipos combinables; se pregunta por el criterio de escalado y no por una clasificación mutuamente excluyente de todo el recorrido. · comprobado: 2026-11-03

Partida: `5f893fd7b7471e88371adc61f450f7cce72ded8428d51e1e70d9dba6b29c76c0` · propuesta: `cb9c7be6947e77676924d31f4a78d8d67ac3a0ad9900b262854d80b65731e182`

## AI-GSI-B4-T03-009

Decisión: pending_review · acción: revise.

Motivo: Conservar escalado jerárquico y clave D; contrastar autoridad con especialidad y activación automática sin excluir combinaciones.

### Antes

Solicitar autoridad y recursos para atender un incidente mayor es escalado…

- A. De almacenamiento
- B. Funcional exclusivamente
- C. Criptográfico
- D. Jerárquico **(correcta)**

Explicación: La escalada jerárquica moviliza decisión y recursos.

### Propuesta

Solicitar autoridad y recursos para atender un incidente mayor es escalado…

- A. Funcional, si el criterio fuera localizar a quien tenga el conocimiento técnico específico.
- B. Automático por vencer un tiempo de acuse, con independencia del nivel de decisión requerido.
- C. Reclasificación documental del ticket sin movilizar personas con poder de decisión.
- D. Jerárquico, al requerir nivel de decisión, autoridad y movilización de recursos. **(correcta)**

Explicación: El criterio de acudir a un nivel con autoridad para decidir y movilizar recursos caracteriza escalado jerárquico. Puede complementarse con especialistas y automatización, pero no se identifica solo por un temporizador o una modificación del registro. La función importa más que el mero número de personas que participan.

- Error A: Buscar especialización define el criterio funcional; aquí se pregunta por autoridad y recursos.
- Error B: Vencer un tiempo puede disparar un contacto, pero no define la naturaleza jerárquica de la decisión requerida.
- Error C: Editar o clasificar el ticket no proporciona por sí mismo la autoridad o los recursos necesarios.

- [Atlassian: Escalation Policies for Incidents](https://www.atlassian.com/incident-management/on-call/escalation-policies) · Hierarchical escalation; Functional escalation; Automatic escalation · versión: Guía del fabricante comprobada 03-11-2026. Tipos combinables; se pregunta por el criterio de escalado y no por una clasificación mutuamente excluyente de todo el recorrido. · comprobado: 2026-11-03

Partida: `f6f3ba85dc6e2608926cfde78403a3487fb348ff7129d7b91ea677e8c124c319` · propuesta: `e9aa391236dfca34fb2ccf53355bbe4c90e13a01dd1b4a681cdf579a8275a457`

## AI-GSI-B4-T03-010

Decisión: pending_review · acción: revise.

Motivo: Conservar revisión aprendible y clave D; distinguir propietario de mejoras de culpabilidad y añadir acciones verificables.

### Antes

¿Qué debe producir un postmortem útil?

- A. Solo una lista de culpables
- B. Borrado de evidencias
- C. Una promesa genérica sin acciones
- D. Cronología, impacto, causas y acciones con responsables **(correcta)**

Explicación: La revisión debe permitir aprendizaje y seguimiento de mejoras.

### Propuesta

¿Qué debe producir un postmortem útil?

- A. Una explicación centrada en atribuir culpa personal, dando por terminada la mejora al identificar al responsable.
- B. Una cronología que se archive sin concretar qué cambios se harán o cómo se comprobará su avance.
- C. Una promesa general de vigilar más, sin acciones, propietarios o criterios que permitan seguimiento.
- D. Evidencia de cronología e impacto, factores causales y acciones concretas con responsables de ejecutarlas. **(correcta)**

Explicación: Un postmortem útil documenta qué ocurrió, impacto, secuencia, factores contribuyentes y acciones de mejora que puedan seguirse. Asignar responsables de las acciones significa darles propietario y rendición de cuentas para completarlas, no buscar culpables del incidente. Debe compartirse lo pertinente y revisarse el progreso; redactar el documento no garantiza por sí solo evitar recurrencias.

- Error A: Centrarse en culpa puede ocultar condiciones del sistema y no produce necesariamente acciones útiles de prevención o mitigación.
- Error B: La cronología es evidencia importante, pero sin decisiones y seguimiento no cierra el aprendizaje de la revisión.
- Error C: Una intención sin trabajo concreto y propietario no permite verificar ejecución o eficacia de la mejora.

- [Google SRE: Postmortem Culture](https://sre.google/sre-book/postmortem-culture/) · Blameless postmortems; revisión de impacto, causas y plan de acciones · versión: Libro SRE, capítulo15, texto comprobado 03-11-2026. Aprendizaje y seguimiento, no búsqueda de culpables o garantía de ausencia de repetición. · comprobado: 2026-11-03
- [Google SRE: Example Postmortem](https://sre.google/sre-book/example-postmortem/) · AppendixD: impacto, cronología, causas y Action Items con propietarios · versión: Ejemplo de los propios autores comprobado 03-11-2026. Se usa estructura de evidencia y acciones; no se trasladan los datos del ejemplo a este proyecto. · comprobado: 2026-11-03

Partida: `d944ff2b1e62828647f84232ae1dd5ff684f949b19c6d53b5b17dfc0bb7c97c1` · propuesta: `97494f81fa7101c7f276d7862ebcba2b6c9b65d0c526c1616de54e7b43ddf0e9`

## AI-GSI-B4-T03-011

Decisión: pending_review · acción: revise.

Motivo: Conservar diferencial y clave C; microcaso de base mantenida que distingue límites de referencia sin confundir cambios con todas las versiones históricas.

### Antes

¿Qué copia recoge cambios desde la última completa?

- A. Incremental desde cualquier copia
- B. Clon sin cambios
- C. Diferencial **(correcta)**
- D. Completa siempre

Explicación: La diferencial acumula cambios respecto a la última completa.

### Propuesta

Se hace una completa el domingo. Sin cambiar esa base, las copias del lunes y martes guardan solo los datos modificados desde el domingo. ¿Qué tipo de copia son?

- A. Incremental referida al punto de respaldo del día inmediatamente anterior.
- B. Completa activa que vuelve a copiar todo el conjunto del origen.
- C. Diferencial respecto a la última completa que actúa como base. **(correcta)**
- D. Completa sintética que materializa todo el conjunto combinando copias previas.

Explicación: Una diferencial selecciona datos modificados desde su completa base. Por eso una modificación del lunes que no volvió a cambiar sigue incluida el martes si la base continúa siendo la del domingo. No significa conservar cada versión intermedia del dato. Una incremental referida a la copia del lunes seguiría otro límite; una completa contendría todo el conjunto, no solo lo modificado desde esa base.

- Error A: Usar el punto del día anterior como referencia identificaría la cadena incremental indicada, no la acumulación desde el domingo del supuesto.
- Error B: Una completa activa incluye todo el conjunto; el caso guarda solo datos modificados desde la base.
- Error D: Una completa sintética constituye un punto completo ensamblado, no únicamente el subconjunto de cambios acumulados descrito.

- [Microsoft: Differential backups](https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/differential-backups-sql-server?view=sql-server-ver17) · Introducción: differential base; excepción copy-only · versión: Vista SQL Server17.x, texto comprobado03-11-2026. Última completa base pertinente; una copia copy-only no reinicia esa base en este producto. · comprobado: 2026-11-03
- [AWS: Incremental, Differential and Other Backups](https://aws.amazon.com/compare/the-difference-between-incremental-differential-and-other-backups/) · Definiciones y ejemplos de completa, diferencial e incremental · versión: Guía primaria del proveedor comprobada03-11-2026. Se explicita la cadena del supuesto; no se universaliza una convención de software o se prescribe proveedor. · comprobado: 2026-11-03

Partida: `ede64b5114e352b7efbbbdcb8bf0319b7f023dfef4e259ee98c2e242a60dad5d` · propuesta: `1c523258bff9ac877109da51e7c0cfe4da1cc0d708d3c8c1abd431ad891b31ee`

## AI-GSI-B4-T03-012

Decisión: pending_review · acción: revise.

Motivo: Conservar incremental y clave C; explicitar cadena completa/incrementales y no suponer que cualquier producto reinicia referencia con cualquier tipo de copia.

### Antes

¿Qué copia recoge cambios desde la última copia de la cadena?

- A. Completa
- B. Diferencial
- C. Incremental **(correcta)**
- D. Archivo histórico por definición

Explicación: La incremental sigue el último punto de la cadena, sea completa o incremental.

### Propuesta

En una cadena con completa inicial y sucesivas copias de cambios, ¿cuál recoge lo cambiado desde el último punto respaldado de esa cadena?

- A. Una completa activa que copia todo el conjunto cada vez desde el origen.
- B. Una diferencial que acumula cambios desde la completa base aunque ya haya copias intermedias.
- C. Una incremental que usa como referencia el último punto respaldado de esa cadena. **(correcta)**
- D. Una completa sintética que reconstruye un punto completo a partir del material del repositorio.

Explicación: En la cadena descrita, la incremental recoge cambios respecto al punto anterior ya respaldado, sea la completa inicial o una incremental posterior. Para recuperar un punto puede requerirse la completa y los incrementos pertinentes, según formato y herramienta. No debe mezclarse esa referencia con la diferencial, que mantiene su completa base, ni generalizar nombres comerciales a toda implementación.

- Error A: La completa vuelve a cubrir todo el conjunto, no solo lo cambiado desde el punto anterior.
- Error B: La diferencial mantiene referencia a la completa base, en lugar de avanzar al último incremento de la cadena.
- Error D: La síntesis construye una completa con copias previas; no es el archivo de cambios del último intervalo preguntado.

- [Veeam: Forward Incremental Backup](https://helpcenter.veeam.com/docs/vbr/userguide/forward_incremental_backup.html) · Forward Incremental Backup, pasos1–3: completa inicial y cambios desde sesión completa/incremental anterior · versión: Guía Backup &amp; Replication13, página actualizada11-03-2026, build13.1.2.57 mostrado, comprobada03-11-2026. Ejemplo de cadena, sin generalizar toda política de bloques de todos los productos. · comprobado: 2026-11-03
- [AWS: Incremental, Differential and Other Backups](https://aws.amazon.com/compare/the-difference-between-incremental-differential-and-other-backups/) · Definiciones y ejemplos de completa, diferencial e incremental · versión: Guía primaria del proveedor comprobada03-11-2026. Se explicita la cadena del supuesto; no se universaliza una convención de software o se prescribe proveedor. · comprobado: 2026-11-03

Partida: `bd2506c3f65a1d283f79fa6244aea068d6fb7b378c2037a26d824b3e94c8968c` · propuesta: `8858aa19c0eba429450a95ccc2a9f85e8159cd011dfdde99691a2ca2a3c1eef9`

## AI-GSI-B4-T03-013

Decisión: pending_review · acción: revise.

Motivo: Conservar síntesis en repositorio y clave B; distinguirla de activa y diferencial sin prometer ausencia de lectura del origen durante toda la sesión.

### Antes

¿Qué caracteriza a una completa sintética?

- A. No contiene datos
- B. Se reconstruye en el repositorio combinando copias previas **(correcta)**
- C. Es solo una lista de nombres
- D. Relee obligatoriamente todo el origen

Explicación: La síntesis reduce lectura del origen usando material ya respaldado.

### Propuesta

¿Qué caracteriza a una completa sintética?

- A. Releer todo el origen en cada ejecución para producir una nueva copia completa activa.
- B. Construir un punto completo en el repositorio combinando material ya respaldado. **(correcta)**
- C. Guardar solo los cambios desde la completa base sin construir un conjunto completo.
- D. Mantener una réplica de ejecución actualizada en lugar de generar material de backup.

Explicación: La completa sintética ensambla un punto completo a partir de copias disponibles en el repositorio. Evita volver a leer íntegramente el origen para esa construcción, pero no implica cero E/S o que la sesión nunca lea el origen: puede obtener antes un nuevo incremental con cambios recientes. Necesita una cadena válida y almacenamiento fiable; no es una lista de nombres o una réplica de ejecución.

- Error A: Releer todo el origen caracteriza una completa activa, no la fase de síntesis a partir del repositorio.
- Error C: Guardar solo cambios desde una completa describe una diferencial, no materializar un punto completo sintético.
- Error D: La replicación atiende otra finalidad y no define el ensamblado de una copia completa en el repositorio.

- [Veeam: How Synthetic Full Backup Works](https://helpcenter.veeam.com/docs/vbr/userguide/synthetic_full_hiw_hv.html) · How Synthetic Full Backup Works, pasos1–3: incremental y construcción en repositorio · versión: Guía Backup &amp; Replication13, página actualizada20-03-2025, aplicable al build13.1.2.57 mostrado, comprobada03-11-2026. Síntesis no implica cero lecturas del origen durante toda la sesión. · comprobado: 2026-11-03
- [Veeam: Forward Incremental Backup](https://helpcenter.veeam.com/docs/vbr/userguide/forward_incremental_backup.html) · Forward Incremental Backup, pasos1–3: completa inicial y cambios desde sesión completa/incremental anterior · versión: Guía Backup &amp; Replication13, página actualizada11-03-2026, build13.1.2.57 mostrado, comprobada03-11-2026. Ejemplo de cadena, sin generalizar toda política de bloques de todos los productos. · comprobado: 2026-11-03

Partida: `223f0ca7213985f6d9b6074973e3697c76970a248b43239c539fb21e256c17fc` · propuesta: `3fe56ff2fc52a8ce2ed6f4d3296636c107c239472c300c91a37d01ba6629203f`

## AI-GSI-B4-T03-015

Decisión: pending_review · acción: revise.

Motivo: Conservar aislamiento de dominio administrativo y clave B; comparar riesgos reales de backup que requieren controles distintos.

### Antes

¿Qué riesgo reduce separar credenciales de backup?

- A. Cualquier error de programación
- B. Compromiso de copias desde el mismo dominio administrativo atacado **(correcta)**
- C. Toda pérdida física de forma absoluta
- D. La necesidad de retención

Explicación: Separar control y proteger borrado limita ataques contra repositorios de recuperación.

### Propuesta

¿Qué riesgo reduce separar credenciales de backup?

- A. La pérdida por una frecuencia de copia insuficiente para el objetivo de datos recuperables.
- B. Que un compromiso de producción permita alterar o destruir copias con las mismas credenciales. **(correcta)**
- C. La caducidad de puntos por una política de retención más corta que la necesidad de recuperación.
- D. La existencia de errores lógicos en los datos antes de que se incorporen al backup.

Explicación: Separar las identidades y credenciales que administran backup de las de producción limita el alcance de un compromiso de ese dominio. Debe acompañarse de permisos, protección de borrado y otros controles apropiados. No corrige por sí sola frecuencia, retención o contenido ya erróneo, ni garantiza invulnerabilidad si el atacante compromete también la administración del respaldo.

- Error A: La frecuencia determina qué puntos existen y su antigüedad; separar credenciales no cambia automáticamente ese intervalo.
- Error C: La retención determina qué puntos se conservan; es un riesgo distinto de compartir administración.
- Error D: Un backup puede contener un error lógico ya presente en origen; la separación de identidades no lo valida o corrige por sí misma.

- [NCSC: Ransomware-resistant backups](https://www.ncsc.gov.uk/collection/ransomware-resistant-backups/principles-for-ransomware-resistant-on-premises-backups) · Principle1: aislamiento y credenciales separadas; Principle3: protección frente a sobrescritura/borrado · versión: Guía pública del organismo comprobada 03-11-2026. Medidas según amenaza y configuración; no se adopta una garantía absoluta de protección por MFA o separación aislada. · comprobado: 2026-11-03
- [NCSC: Mitigating malware and ransomware attacks](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks) · Action1: Make regular backups; aislamiento, restauración y copias frente a sincronización inmediata · versión: Guía pública comprobada 03-11-2026. No se ejecuta un procedimiento sobre sistemas reales ni se recomienda una configuración universal del proyecto. · comprobado: 2026-11-03

Partida: `36fd87348ebc8941c6ab525407d5ef9e813dd19dc87ff90f79d42d00b29ace99` · propuesta: `2154457d4982816d415fc968938c576305133b55d68e8454094c3f5c23e5dcec`

## AI-GSI-B4-T03-016

Decisión: pending_review · acción: revise.

Motivo: Conservar protección limitada y clave B; distinguir offline de inmutable y de confidencialidad, RPO y prueba de restore.

### Antes

¿Qué aporta una copia offline o inmutable?

- A. RPO cero automático
- B. Protección frente a determinados ataques y modificaciones **(correcta)**
- C. Garantía de restauración sin probar
- D. Ausencia de necesidad de cifrado

Explicación: Inmutabilidad y aislamiento ayudan, pero no sustituyen verificación ni diseño de recuperación.

### Propuesta

¿Qué aporta una copia offline o inmutable?

- A. Actualizar automáticamente el punto recuperable hasta el instante del fallo, sin depender de frecuencia.
- B. Dificultar determinadas alteraciones o borrados según aislamiento y política de protección. **(correcta)**
- C. Acreditar por su mera existencia que toda la aplicación puede restaurarse sin ensayo.
- D. Mantener confidencial cualquier copia aunque no se protejan acceso, claves o contenido.

Explicación: El aislamiento offline dificulta acceso desde sistemas conectados; una política de inmutabilidad restringe modificaciones o borrados dentro de su alcance y vigencia. Son mecanismos diferentes y pueden complementarse. No garantizan RPO cero, confidencialidad, ausencia de errores en el contenido o restauración funcional: también hacen falta diseño, retención y comprobaciones de recuperación.

- Error A: La protección frente a cambios no genera puntos más recientes que los realmente capturados; el objetivo de pérdida de datos necesita frecuencia y diseño apropiados.
- Error C: Tener una copia protegida no demuestra que estén incluidos todos los componentes y dependencias ni que el procedimiento de recuperación funcione.
- Error D: Impedir sobrescritura no equivale a cifrar o restringir lectura; confidencialidad necesita sus controles específicos.

- [NCSC: Mitigating malware and ransomware attacks](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks) · Action1: Make regular backups; aislamiento, restauración y copias frente a sincronización inmediata · versión: Guía pública comprobada 03-11-2026. No se ejecuta un procedimiento sobre sistemas reales ni se recomienda una configuración universal del proyecto. · comprobado: 2026-11-03
- [Microsoft: Immutable storage for blob data](https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview) · WORM; time-based retention policies y legal hold; políticas en vigor · versión: Texto público comprobado 03-11-2026. Ejemplo de protección configurable frente a sobrescritura/borrado; inmutable no equivale a offline, confidencial o restaurable sin prueba. · comprobado: 2026-11-03

Partida: `d0b6ffaf66f2af1fbb072c5a445956b19e0fe635d055745e7367a6d1ca4fcbcf` · propuesta: `7e6311dd1aa8fad61bea2f48d4e449968bff37e626129727886e66892434352b`

## AI-GSI-B4-T03-018

Decisión: pending_review · acción: revise.

Motivo: Conservar diferencia de objetivos/retención y clave B; evitar equivalencias universales de formato, mutabilidad o plazos legales.

### Antes

¿Por qué backup y archivo histórico pueden tener políticas distintas?

- A. Porque son siempre idénticos
- B. Sus objetivos y retenciones pueden diferir **(correcta)**
- C. Porque backup prohíbe fechas
- D. Porque archivo nunca necesita integridad

Explicación: Recuperación operativa y conservación histórica responden a necesidades diferentes.

### Propuesta

¿Por qué backup y archivo histórico pueden tener políticas distintas?

- A. Porque el formato físico por sí solo determina los objetivos y plazos, sin atender a necesidades de uso.
- B. Porque recuperación operativa y conservación de referencia pueden requerir objetivos y retenciones diferentes. **(correcta)**
- C. Porque conservar versiones implica que backup y archivo tienen el mismo objetivo de tiempo de recuperación.
- D. Porque el archivo histórico puede omitir integridad y legibilidad al no usarse en la operación cotidiana.

Explicación: El backup se orienta a recuperar un estado operativo tras pérdida o fallo; el archivo atiende conservación y consulta de información de referencia según sus necesidades. Por eso pueden diferir selección, acceso, plazos y objetivos de recuperación. Ambos requieren integridad, legibilidad y gestión. No existe un plazo legal universal por la etiqueta ni se deduce que todo archivo sea inmutable o todo backup mutable.

- Error A: El formato influye en capacidades técnicas, pero los objetivos de negocio y conservación no se deducen de una extensión o soporte.
- Error C: Guardar versiones no fija por sí mismo un RTO común; cada finalidad necesita criterios y procedimientos apropiados.
- Error D: Conservar para referencia pierde valor si no puede verificarse o interpretarse el contenido; no elimina integridad o legibilidad.

- [AWS: What is Data Archiving?](https://aws.amazon.com/what-is/data-archiving/) · Data archiving vs. data backup: objetivos de referencia/conservación y recuperación · versión: Guía del proveedor comprobada03-11-2026. Solo se usa contraste de objetivos; no se adoptan como universales las frases que equiparan archivo a inmutable o backup a mutable. No se fijan plazos legales o precios. · comprobado: 2026-11-03
- [NCSC: Mitigating malware and ransomware attacks](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks) · Action1: Make regular backups; aislamiento, restauración y copias frente a sincronización inmediata · versión: Guía pública comprobada 03-11-2026. No se ejecuta un procedimiento sobre sistemas reales ni se recomienda una configuración universal del proyecto. · comprobado: 2026-11-03

Partida: `cc9d477198dc06c5fbd7f3d076f5f8db2cadea622ed1fe57e015952abc7556d6` · propuesta: `ab30ece99d88a306fae991cbffd511d855efd8c2fcc67916e37aca363393e786`
