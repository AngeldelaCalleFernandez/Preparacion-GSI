# GSI-EDITORIAL-074 — revisión propuesta

Preparado: 2026-11-03. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `7e695db6b220072ba44c244927af82e8950140d4232a12dfaf0b982ee75d1e57`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T05-007

Decisión: pending_review · acción: revise.

Motivo: Conservar RAID1 y clave C; sustituir calificativos que delatan distractores por cuatro niveles RAID comparables.

### Antes

¿Qué nivel RAID se basa en espejo?

- A. RAID 0
- B. RAID 5 como espejo simple
- C. RAID 1 **(correcta)**
- D. JBOD como espejo obligatorio

Explicación: El espejo duplica datos; otros niveles usan distribución o paridad.

### Propuesta

¿Qué nivel RAID se basa en espejo?

- A. RAID0.
- B. RAID5.
- C. RAID1. **(correcta)**
- D. RAID6.

Explicación: RAID1 mantiene los mismos datos en miembros que actúan como espejo. La redundancia permite conservar una copia si falla un miembro, dentro de las condiciones del conjunto. No debe confundirse con distribución sin protección o con paridad. El espejo de datos vigentes no proporciona por sí mismo versiones anteriores a un borrado lógico.

- Error A: RAID0 distribuye en bandas sin mantener espejo o paridad redundante.
- Error B: RAID5 usa datos y paridad distribuida; no es un espejo simple.
- Error D: RAID6 utiliza doble paridad, no duplicación en espejo como principio del nivel1.

- [Red Hat: Managing RAID](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/managing_storage_devices/managing-raid) · §16.3 RAID levels and linear support: Level0, Level1, Level5, Level6 y Level10 · versión: Guía RHEL10, HTML comprobado 03-11-2026. Espejo, distribución y paridad; se explica RAID1+0 habitual sin generalizar número mínimo de discos a todos los layouts Linux MD. No se ejecutan comandos. · comprobado: 2026-11-03

Partida: `996bffe73d6f91f3e457c30ff643cbc3bd6fb65fe03d0323cfe8c69892ae346a` · propuesta: `54d697e725d79a5901d5e72f240b889f5fab6897692389227db8ebb7c1a6a415`

## AI-GSI-B4-T05-008

Decisión: pending_review · acción: revise.

Motivo: Conservar tolerancia de RAID6 y clave D; preguntar máximo bajo condiciones explícitas y usar cuatro cantidades plausibles.

### Antes

¿Cuántos fallos de disco tolera normalmente RAID 6?

- A. Uno
- B. Cualquier número
- C. Ninguno
- D. Dos **(correcta)**

Explicación: La doble paridad permite normalmente dos fallos; no protege de todo tipo de desastre.

### Propuesta

En un RAID6 convencional inicialmente sano, ¿cuál es el máximo de discos cuya pérdida completa puede tolerarse usando su doble paridad?

- A. 1
- B. 3
- C. 0
- D. 2 **(correcta)**

Explicación: La doble paridad de RAID6 permite reconstruir los datos ante la pérdida de hasta dos discos de un conjunto inicialmente sano, suponiendo que el resto de datos y componentes necesarios permanece utilizable. Es un límite de tolerancia de discos, no una garantía frente a toda corrupción, error humano o desastre.

- Error A: Un fallo está dentro de lo tolerable, pero no es el máximo de la doble paridad preguntado.
- Error B: La doble paridad no permite asegurar reconstrucción tras perder tres miembros completos.
- Error C: Cero negaría la redundancia que aporta la paridad de RAID6.

- [Red Hat: Managing RAID](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/managing_storage_devices/managing-raid) · §16.3 RAID levels and linear support: Level0, Level1, Level5, Level6 y Level10 · versión: Guía RHEL10, HTML comprobado 03-11-2026. Espejo, distribución y paridad; se explica RAID1+0 habitual sin generalizar número mínimo de discos a todos los layouts Linux MD. No se ejecutan comandos. · comprobado: 2026-11-03

Partida: `3699340ee4824b638dc513d5080e1a8fa56d9ba8d3b3d4b7796c426bce685797` · propuesta: `5b847104ec0571bcbf7f51b58b743744d1a65202e9c7e4d264c6285baab5472a`

## AI-GSI-B4-T05-009

Decisión: pending_review · acción: revise.

Motivo: Conservar RAID10 y clave A; precisar disposición habitual1+0 y contrastar orden inverso y paridad.

### Antes

¿Qué describe RAID 10?

- A. Distribución sobre espejos **(correcta)**
- B. Striping sin copia
- C. Solo paridad simple
- D. Un backup externo

Explicación: Combina espejos y distribución con coste de capacidad.

### Propuesta

En su disposición habitual RAID1+0, ¿qué describe RAID10?

- A. Distribución en bandas sobre conjuntos en espejo. **(correcta)**
- B. Espejado de conjuntos previamente distribuidos en bandas.
- C. Distribución de datos con una paridad simple distribuida.
- D. Distribución de datos con doble paridad distribuida.

Explicación: En la disposición habitual RAID1+0 se distribuyen datos sobre conjuntos que mantienen copias en espejo. Se distingue del orden inverso RAID0+1 y de los esquemas de paridad. La capacidad y tolerancia dependen del layout; no se asegura tolerar cualquier combinación de fallos ni se impone un mínimo de discos a todas las implementaciones llamadas RAID10.

- Error B: Describe el orden inverso, RAID0+1: espejar conjuntos que primero distribuyen los datos.
- Error C: La paridad simple distribuida caracteriza RAID5, no el espejo de RAID1+0.
- Error D: La doble paridad distribuida caracteriza RAID6, no la combinación de espejos y bandas.

- [Red Hat: Managing RAID](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/managing_storage_devices/managing-raid) · §16.3 RAID levels and linear support: Level0, Level1, Level5, Level6 y Level10 · versión: Guía RHEL10, HTML comprobado 03-11-2026. Espejo, distribución y paridad; se explica RAID1+0 habitual sin generalizar número mínimo de discos a todos los layouts Linux MD. No se ejecutan comandos. · comprobado: 2026-11-03

Partida: `3e9e78ac5b66038b48c381547ffcd0cb83ac454a84922e79c2acc78cce5e59eb` · propuesta: `057c43d73cd387f43ce6f6196436c0d4b8b5d2ac98ffb971c72561972e92cdb2`

## AI-GSI-B4-T05-010

Decisión: pending_review · acción: revise.

Motivo: Conservar borrado propagado y clave C; distinguir recuperación temporal de redundancia de disco, ruta y controladora.

### Antes

Un usuario borra un fichero y el cambio se aplica al RAID. ¿Qué protección falta para recuperar versiones anteriores?

- A. Un cable adicional
- B. Solo otra controladora
- C. Backup adecuado **(correcta)**
- D. Más striping sin redundancia

Explicación: RAID no protege frente a borrado lógico o daño propagado.

### Propuesta

Un usuario borra un fichero y el cambio se aplica al RAID. ¿Qué protección falta para recuperar versiones anteriores?

- A. Duplicar los caminos de acceso al mismo volumen mediante multipathing.
- B. Sustituir la paridad simple por doble paridad en el conjunto de discos.
- C. Mantener un backup recuperable de versiones anteriores al borrado. **(correcta)**
- D. Añadir una controladora redundante que sirva el mismo volumen actual.

Explicación: Si el borrado se aplica correctamente al volumen, la redundancia del RAID mantiene ese estado vigente. Recuperar el contenido previo requiere un punto anterior conservado y restaurable. Un backup adecuado responde a esa finalidad; más rutas, controladoras o paridad protegen otros fallos, sin aportar por sí solos historial del fichero.

- Error A: Multipathing ofrece rutas al mismo estado actual, no una versión anterior del contenido.
- Error B: La doble paridad amplía tolerancia a fallos de discos, pero no deshace una operación lógica válida.
- Error D: Otra controladora puede mantener acceso al volumen, incluido el borrado ya aplicado.

- [Red Hat: Managing RAID](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/managing_storage_devices/managing-raid) · §16.3 RAID levels and linear support: Level0, Level1, Level5, Level6 y Level10 · versión: Guía RHEL10, HTML comprobado 03-11-2026. Espejo, distribución y paridad; se explica RAID1+0 habitual sin generalizar número mínimo de discos a todos los layouts Linux MD. No se ejecutan comandos. · comprobado: 2026-11-03
- [NCSC: Mitigating malware and ransomware attacks](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks) · Action1: make regular backups; versiones previas, separación de copias y pruebas de restauración · versión: Guía pública comprobada de nuevo 03-11-2026. Separar protección de disco de recuperación tras daño lógico; no se afirma que cualquier copia nominal garantice recuperar el punto necesario. · comprobado: 2026-11-03
- [Red Hat: Overview of device mapper multipathing](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/configuring_device_mapper_multipath/overview-of-device-mapper-multipathing) · Redundancy; Improved Performance; §1.1 Active/Passive configuration with one RAID device · versión: Guía RHEL10, HTML comprobado 03-11-2026. Varias rutas al dispositivo, failover y reparto según configuración; no implica copias históricas, independencia de cabina o mejora garantizada. · comprobado: 2026-11-03

Partida: `e6f485064ae8619afb203a4915d7e9987c3ca6f6894a952a5cf9bc3d6133f1d7` · propuesta: `f49b0f12db35e8fd3ac8e583714f2a22fa49f527f511d63352acf8b47520f23e`

## AI-GSI-B4-T05-011

Decisión: pending_review · acción: revise.

Motivo: Conservar zoning y clave C; cuatro capas de control próximas sin confundir conectividad con permisos de volumen o fichero.

### Antes

¿Qué controla zoning en Fibre Channel?

- A. Orden de bloques de un archivo
- B. Política de retención de snapshots
- C. Visibilidad entre iniciadores y targets **(correcta)**
- D. Acceso a una LUN concreta dentro del host

Explicación: Zoning regula visibilidad en la fabric; LUN masking restringe volúmenes.

### Propuesta

¿Qué controla zoning en Fibre Channel?

- A. Qué LUN concretas presenta una cabina a los iniciadores de un host.
- B. Qué camino de E/S selecciona el host entre sus rutas disponibles.
- C. Qué puertos iniciadores y destinos pueden comunicarse en la fabric. **(correcta)**
- D. Qué permisos de fichero obtiene el usuario sobre un volumen montado.

Explicación: El zoning delimita conectividad y visibilidad entre puertos de la fabric FC. Permite que los extremos de una zona se comuniquen según la configuración del switch. Eso no decide por sí mismo qué LUN de un destino se presenta a un host ni sus permisos de fichero; esas restricciones corresponden a otras capas.

- Error A: Presentar o restringir LUN a iniciadores corresponde al mapeo/enmascaramiento de la cabina.
- Error B: Seleccionar caminos entre los disponibles corresponde a multipathing y su política.
- Error D: Los permisos sobre ficheros se aplican tras montar o acceder al sistema de archivos, no por zoning FC.

- [NetApp: FC and FCoE zoning with ONTAP systems](https://docs.netapp.com/us-en/ontap/san-config/fibre-channel-fcoe-zoning-concept.html) · Definición de zona y comunicación entre puertos; World Wide Name-based zoning · versión: ONTAP9, página fechada 31-03-2025, cuerpo HTML comprobado 03-11-2026. Se distingue zona de acceso a LUN; no se impone a todos los productos el requisito específico WWPN de ONTAP. · comprobado: 2026-11-03
- [NetApp: ONTAP SAN igroups](https://docs.netapp.com/us-en/ontap/san-admin/igroups-concept.html) · Introducción: mapear LUN a grupos de iniciadores; Example of how igroups give LUN access · versión: ONTAP9, página fechada 28-04-2026, cuerpo público comprobado 03-11-2026. Ejemplo de restricción de acceso a LUN; no se generalizan límites de pertenencia específicos a toda cabina. · comprobado: 2026-11-03
- [Red Hat: Overview of device mapper multipathing](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/configuring_device_mapper_multipath/overview-of-device-mapper-multipathing) · Redundancy; Improved Performance; §1.1 Active/Passive configuration with one RAID device · versión: Guía RHEL10, HTML comprobado 03-11-2026. Varias rutas al dispositivo, failover y reparto según configuración; no implica copias históricas, independencia de cabina o mejora garantizada. · comprobado: 2026-11-03

Partida: `db7b9db4faea62b6353f897ba926f6473438b61357064d630e657f765a4879da` · propuesta: `6f4478d23d212efb5b1c50e7f400b400789500f89bcfeff1fa80fda659d2a04e`

## AI-GSI-B4-T05-012

Decisión: pending_review · acción: revise.

Motivo: Conservar LUN masking y clave A; microcaso que distingue acceso a destino de presentación de volúmenes.

### Antes

¿Qué limita LUN masking?

- A. Volúmenes accesibles a hosts **(correcta)**
- B. Orden de rutas del multipath
- C. Visibilidad de pares iniciador-target en la fabric
- D. Velocidad negociada de Fibre Channel

Explicación: El enmascaramiento delimita acceso a LUN, distinto del zoning de red.

### Propuesta

Dos hosts pueden comunicarse con el mismo puerto destino FC, pero deben ver LUN distintas. ¿Qué control de la cabina restringe los volúmenes accesibles a cada host?

- A. Mapeo y enmascaramiento de LUN por iniciador. **(correcta)**
- B. Política de selección de caminos del multipath.
- C. Zoning que mantiene a ambos con el mismo destino.
- D. Negociación de velocidad del enlace Fibre Channel.

Explicación: El mapeo o enmascaramiento de LUN en la cabina relaciona volúmenes con los iniciadores autorizados a verlos. Dos hosts pueden llegar al mismo puerto destino y tener acceso a conjuntos distintos de LUN. Se complementa con zoning; ni elegir ruta ni negociar velocidad identifica los volúmenes que debe recibir cada host.

- Error B: La política de caminos elige cómo alcanzar una LUN disponible; no decide qué LUN se presenta al iniciador.
- Error C: Mantener conectividad al mismo destino no diferencia por sí mismo las LUN accesibles dentro de él.
- Error D: La velocidad afecta al enlace y su capacidad, no a la autorización de un volumen por host.

- [NetApp: ONTAP SAN igroups](https://docs.netapp.com/us-en/ontap/san-admin/igroups-concept.html) · Introducción: mapear LUN a grupos de iniciadores; Example of how igroups give LUN access · versión: ONTAP9, página fechada 28-04-2026, cuerpo público comprobado 03-11-2026. Ejemplo de restricción de acceso a LUN; no se generalizan límites de pertenencia específicos a toda cabina. · comprobado: 2026-11-03
- [NetApp: FC and FCoE zoning with ONTAP systems](https://docs.netapp.com/us-en/ontap/san-config/fibre-channel-fcoe-zoning-concept.html) · Definición de zona y comunicación entre puertos; World Wide Name-based zoning · versión: ONTAP9, página fechada 31-03-2025, cuerpo HTML comprobado 03-11-2026. Se distingue zona de acceso a LUN; no se impone a todos los productos el requisito específico WWPN de ONTAP. · comprobado: 2026-11-03
- [Red Hat: Overview of device mapper multipathing](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/configuring_device_mapper_multipath/overview-of-device-mapper-multipathing) · Redundancy; Improved Performance; §1.1 Active/Passive configuration with one RAID device · versión: Guía RHEL10, HTML comprobado 03-11-2026. Varias rutas al dispositivo, failover y reparto según configuración; no implica copias históricas, independencia de cabina o mejora garantizada. · comprobado: 2026-11-03

Partida: `db03ad47aa99c51324fb180b6e9e30cff75d803490a0e1b5fccce03fdcb356fb` · propuesta: `0ddbb1a17d01b4f65cd3a9fc4e46241193892fc659dd202692c586a277e7681d`

## AI-GSI-B4-T05-013

Decisión: pending_review · acción: revise.

Motivo: Conservar multipathing y clave A; distractores de capas SAN reales, sin atribuir independencia de datos a rutas.

### Antes

¿Qué aporta multipathing?

- A. Caminos alternativos con failover o balanceo según la pila **(correcta)**
- B. Copias históricas independientes
- C. Eliminación de errores lógicos
- D. Cifrado obligatorio de todos los datos

Explicación: Multipath reduce dependencia de una ruta física, no sustituye backup.

### Propuesta

¿Qué aporta multipathing?

- A. Rutas alternativas de E/S con failover y reparto según la configuración. **(correcta)**
- B. Una réplica de datos en cada ruta para recuperar versiones pasadas.
- C. Un control de qué LUN se presenta a cada iniciador del host.
- D. Una partición de fabric que delimita qué puertos pueden comunicarse.

Explicación: Multipathing gestiona varios caminos de E/S hacia un dispositivo. Puede usar caminos alternativos tras un fallo y distribuir carga según soporte y política. Los caminos no son copias históricas del dato; varios pueden seguir dependiendo de la misma cabina. Debe comprobarse qué fallos son realmente independientes en el diseño.

- Error B: Duplicar rutas no crea versiones de los datos ni un backup independiente.
- Error C: Controlar qué LUN recibe un iniciador corresponde al mapeo/enmascaramiento.
- Error D: Delimitar conectividad entre puertos de la fabric corresponde al zoning.

- [Red Hat: Overview of device mapper multipathing](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/configuring_device_mapper_multipath/overview-of-device-mapper-multipathing) · Redundancy; Improved Performance; §1.1 Active/Passive configuration with one RAID device · versión: Guía RHEL10, HTML comprobado 03-11-2026. Varias rutas al dispositivo, failover y reparto según configuración; no implica copias históricas, independencia de cabina o mejora garantizada. · comprobado: 2026-11-03
- [NetApp: ONTAP SAN igroups](https://docs.netapp.com/us-en/ontap/san-admin/igroups-concept.html) · Introducción: mapear LUN a grupos de iniciadores; Example of how igroups give LUN access · versión: ONTAP9, página fechada 28-04-2026, cuerpo público comprobado 03-11-2026. Ejemplo de restricción de acceso a LUN; no se generalizan límites de pertenencia específicos a toda cabina. · comprobado: 2026-11-03
- [NetApp: FC and FCoE zoning with ONTAP systems](https://docs.netapp.com/us-en/ontap/san-config/fibre-channel-fcoe-zoning-concept.html) · Definición de zona y comunicación entre puertos; World Wide Name-based zoning · versión: ONTAP9, página fechada 31-03-2025, cuerpo HTML comprobado 03-11-2026. Se distingue zona de acceso a LUN; no se impone a todos los productos el requisito específico WWPN de ONTAP. · comprobado: 2026-11-03

Partida: `46a1c57f3569953e3b7dc4ba1659373c18cfdd281622a6dba8d63559d6c89c81` · propuesta: `1fa74b1815594b84b5a129d5f9177a2c14c0c905d155cc3e24582b06e74184ba`

## AI-GSI-B4-T05-014

Decisión: pending_review · acción: revise.

Motivo: Conservar SCSI sobre TCP y clave B; sustituir protocolos ajenos por alternativas de almacenamiento reales.

### Antes

¿Qué transporta iSCSI?

- A. Consultas DNS
- B. Comandos SCSI sobre TCP/IP **(correcta)**
- C. Audio DTMF
- D. Ficheros mediante SMTP

Explicación: iSCSI proporciona acceso de bloques sobre redes IP.

### Propuesta

¿Qué transporta iSCSI?

- A. Comandos NVMe sobre TCP/IP.
- B. Comandos SCSI sobre TCP/IP. **(correcta)**
- C. Operaciones NFS de acceso a ficheros.
- D. Operaciones SMB de acceso a ficheros.

Explicación: El iSCSI base transporta comandos y datos SCSI mediante conexiones TCP sobre redes IP. Proporciona al host una interfaz de almacenamiento de bloques, sobre la que puede existir un sistema de archivos. No debe confundirse con compartir ficheros por NFS/SMB ni con transportar comandos NVMe sobre TCP.

- Error A: NVMe/TCP pertenece a otra familia de comandos y transporte, aunque también utilice TCP.
- Error C: NFS ofrece operaciones de sistema de archivos remoto; no es el transporte SCSI preguntado.
- Error D: SMB permite acceso compartido a archivos y otros recursos; no define iSCSI.

- [IETF: Internet Small Computer System Interface (iSCSI) Protocol, Consolidated](https://www.rfc-editor.org/rfc/rfc7143.html) · Abstract; §2.2 Definitions: iSCSI Device e iSCSI Layer, conexiones TCP de la sesión · versión: RFC7143, abril2014, Proposed Standard; HTML y ficha RFC Editor comprobados 03-11-2026. Se usa el transporte base SCSI sobre TCP, sin convertirlo en acceso a ficheros o confundir extensiones de transporte. · comprobado: 2026-11-03
- [IETF: Network File System Version4 Minor Version1 Protocol](https://www.rfc-editor.org/rfc/rfc8881.html) · §1.5 NFSv4 Goals; §1.6 NFSv4.1 Goals; §1.7 General Definitions, Client; §2.2 RPC and XDR · versión: RFC8881, agosto2020, Proposed Standard; HTML y ficha comprobados 03-11-2026. Acceso a sistema de archivos remoto; no se afirma que todas las variantes NFS tengan idéntica seguridad o transporte. · comprobado: 2026-11-03
- [Microsoft: What is SMB File Sharing for Windows and Windows Server?](https://learn.microsoft.com/en-us/windows-server/storage/file-server/file-server-smb-overview) · Introducción; SMB components: cliente y servidor; lectura/escritura remota de ficheros · versión: Texto público comprobado 03-11-2026. Se usa función de compartición, sin reducir todo SMB a esa única aplicación ni adoptar afirmaciones históricas de soporte SQL de la página. · comprobado: 2026-11-03
- [NVM Express: NVMe over PCIe Transport Specification](https://nvmexpress.org/specification/nvme-over-pcie-transport-specification/) · What is the NVMe over PCIe Transport specification?; lista Transport Specifications: PCIe, RDMA y TCP · versión: HTML introductorio comprobado de nuevo 03-11-2026; lista de 04-08-2026 incluye NVMe/TCP1.3. Se usa distinción de familias/transporte, sin afirmar lectura completa de sus PDF enlazados. · comprobado: 2026-11-03

Partida: `a43d0e6c3b06ef03dc5786010111bf578420158a10d0a8a99f0bf4713c569f89` · propuesta: `c79192a32787ea2fea3f6e8f5e9f44bed0e1d1c5dbbb02d626e2dd18a1b8db5d`

## AI-GSI-B4-T05-015

Decisión: pending_review · acción: revise.

Motivo: Conservar NFS/SMB y clave B; pares de almacenamiento que exigen distinguir nivel de acceso.

### Antes

¿Qué par de protocolos se asocia a ficheros compartidos?

- A. SIP y RTP
- B. NFS y SMB **(correcta)**
- C. ARP y ICMP
- D. BGP y OSPF

Explicación: NFS/SMB sirven archivos; los otros pares atienden voz o red.

### Propuesta

¿Qué par de protocolos se asocia a ficheros compartidos?

- A. FC e iSCSI.
- B. NFS y SMB. **(correcta)**
- C. iSCSI y NFS.
- D. SMB y FC.

Explicación: NFS y SMB permiten acceso a ficheros compartidos. En los otros pares aparece al menos un protocolo que presenta almacenamiento mediante comandos de bloques. Que todo viaje por una red IP no elimina la diferencia entre pedir operaciones sobre archivos y exponer un dispositivo de bloques al host.

- Error A: FC e iSCSI se asocian aquí a la SAN de bloques, no al par de compartición de archivos.
- Error C: NFS sí se asocia a ficheros; iSCSI transporta SCSI y presenta acceso de bloques.
- Error D: SMB sí comparte ficheros; Fibre Channel corresponde aquí a la fabric de almacenamiento, no a otro protocolo de archivos.

- [IETF: Network File System Version4 Minor Version1 Protocol](https://www.rfc-editor.org/rfc/rfc8881.html) · §1.5 NFSv4 Goals; §1.6 NFSv4.1 Goals; §1.7 General Definitions, Client; §2.2 RPC and XDR · versión: RFC8881, agosto2020, Proposed Standard; HTML y ficha comprobados 03-11-2026. Acceso a sistema de archivos remoto; no se afirma que todas las variantes NFS tengan idéntica seguridad o transporte. · comprobado: 2026-11-03
- [Microsoft: What is SMB File Sharing for Windows and Windows Server?](https://learn.microsoft.com/en-us/windows-server/storage/file-server/file-server-smb-overview) · Introducción; SMB components: cliente y servidor; lectura/escritura remota de ficheros · versión: Texto público comprobado 03-11-2026. Se usa función de compartición, sin reducir todo SMB a esa única aplicación ni adoptar afirmaciones históricas de soporte SQL de la página. · comprobado: 2026-11-03
- [IETF: Internet Small Computer System Interface (iSCSI) Protocol, Consolidated](https://www.rfc-editor.org/rfc/rfc7143.html) · Abstract; §2.2 Definitions: iSCSI Device e iSCSI Layer, conexiones TCP de la sesión · versión: RFC7143, abril2014, Proposed Standard; HTML y ficha RFC Editor comprobados 03-11-2026. Se usa el transporte base SCSI sobre TCP, sin convertirlo en acceso a ficheros o confundir extensiones de transporte. · comprobado: 2026-11-03
- [NetApp: FC and FCoE zoning with ONTAP systems](https://docs.netapp.com/us-en/ontap/san-config/fibre-channel-fcoe-zoning-concept.html) · Definición de zona y comunicación entre puertos; World Wide Name-based zoning · versión: ONTAP9, página fechada 31-03-2025, cuerpo HTML comprobado 03-11-2026. Se distingue zona de acceso a LUN; no se impone a todos los productos el requisito específico WWPN de ONTAP. · comprobado: 2026-11-03

Partida: `2b862a5aefebed7aa908a250ce66291130c4c1b8a87ba306b56788341dc6b886` · propuesta: `61b0e7da25eec5dd0f747988dbde544c319473bfe1931bb9d832b30f11a082aa`

## AI-GSI-B4-T05-016

Decisión: pending_review · acción: revise.

Motivo: Conservar agotamiento físico por thin provisioning y clave B; microcaso que separa límites lógicos y recursos disponibles.

### Antes

¿Qué riesgo requiere vigilar thin provisioning?

- A. Eliminación automática de todos los snapshots
- B. Agotar capacidad física aunque haya capacidad lógica asignada **(correcta)**
- C. Imposibilidad de sobreaprovisionar
- D. Ausencia de crecimiento

Explicación: El aprovisionamiento fino exige seguimiento del pool físico.

### Propuesta

Un pool de 10 TB presenta varios volúmenes thin cuya capacidad lógica suma 30 TB. ¿Qué riesgo de capacidad exige vigilar el crecimiento de las escrituras?

- A. Que la capacidad lógica muestre solamente los bloques físicos ya ocupados.
- B. Que las escrituras agoten el pool físico antes del límite lógico asignado. **(correcta)**
- C. Que crear el volumen reserve de inmediato todo su tamaño lógico en discos.
- D. Que asignar un volumen aumente la capacidad física disponible del pool.

Explicación: Thin provisioning permite asignar capacidad lógica que se materializa físicamente al usarla. Si la demanda real de varios volúmenes crece, el pool puede agotarse aunque sus tamaños lógicos todavía admitan más datos. Deben vigilarse consumo, crecimiento y margen. La reacción exacta al agotamiento depende de la plataforma y su configuración.

- Error A: El tamaño lógico presentado no tiene por qué coincidir con los bloques físicos ya usados.
- Error C: Reservar físicamente desde el principio todo el tamaño describe el contraste con aprovisionamiento grueso, no el riesgo del fino.
- Error D: Crear capacidad lógica no añade discos o capacidad física al pool.

- [Red Hat: Configuring and managing logical volumes](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/8/html/system_design_guide/configuring_and_managing_logical_volumes) · §67.9.1 Overview of thin provisioning: sobreaprovisionamiento, vigilancia y agotamiento físico · versión: Guía RHEL8, cuerpo HTML comprobado 03-11-2026. Capacidad lógica frente a asignación física; no se generaliza la reacción exacta al agotamiento a cualquier sistema ni se ejecuta LVM. · comprobado: 2026-11-03

Partida: `aa358b592cbd9475aacb81d12c2fbb4310acfe0c1f5a7d9383623030f2e35b3a` · propuesta: `d0cb68740596a85a6adb234722b1cae9ea539c7f3d1e917c9f77bcecaa994d75`

## AI-GSI-B4-T05-017

Decisión: pending_review · acción: revise.

Motivo: Conservar dependencia posible del snapshot y clave C; alternativas de protección sin universalizar toda implementación.

### Antes

¿Por qué un snapshot puede no ser una copia independiente?

- A. Porque es necesariamente un PDF
- B. Porque nunca contiene un punto temporal
- C. Puede depender del mismo almacenamiento de origen **(correcta)**
- D. Porque siempre reside en cinta externa

Explicación: El punto lógico puede compartir el mismo dominio de fallo.

### Propuesta

¿Por qué un snapshot puede no ser una copia independiente?

- A. Porque representa una réplica completa alojada en otro sistema.
- B. Porque su creación exporta todos los bloques a un soporte externo.
- C. Porque puede compartir bloques y dominio de fallo con el origen. **(correcta)**
- D. Porque delega la retención en una copia desconectada de la cabina.

Explicación: Un snapshot conserva un punto lógico, pero su implementación puede reutilizar bloques o depender del mismo soporte que el origen. Si falla ese dominio común, ambos pueden quedar inaccesibles. La consistencia del punto y su independencia son propiedades distintas. Un producto puede copiar o replicar snapshots fuera; hay que comprobarlo, no deducirlo del nombre.

- Error A: Una réplica completa en otro sistema sería otra propiedad; no se obtiene necesariamente al crear un snapshot local.
- Error B: Crear un punto lógico no exige exportar todos los bloques a un soporte independiente.
- Error D: Retención y desconexión externa requieren una protección concreta; no definen por sí solas un snapshot.

- [Microsoft: Using checkpoints to revert virtual machines to a previous state](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/checkpoints) · Introducción: Standard/Production Checkpoints; Deleting checkpoints: .avhdx y .vhdx en la misma ubicación · versión: Texto público comprobado 03-11-2026. Ejemplo de estado/datos dependientes; se distingue consistencia de independencia y no se afirma que todo snapshot de cualquier producto sea igual o carezca de uso en backup. · comprobado: 2026-11-03
- [Red Hat: Configuring and managing logical volumes](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/8/html/system_design_guide/configuring_and_managing_logical_volumes) · §67.9.1 Overview of thin provisioning: sobreaprovisionamiento, vigilancia y agotamiento físico · versión: Guía RHEL8, cuerpo HTML comprobado 03-11-2026. Capacidad lógica frente a asignación física; no se generaliza la reacción exacta al agotamiento a cualquier sistema ni se ejecuta LVM. · comprobado: 2026-11-03

Partida: `2e212fa3d92203e53e5b2b5e38f5ff0e6edcbaf4ec161ef9f7af72ec76cb4ca6` · propuesta: `3d345055c436a64266941caec48cb9a31551634a70e22c9e08dabd44fd8bceeb`

## AI-GSI-B4-T05-018

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y opciones, ya precisos y con distractores próximos. Ampliar feedback y respaldo, clave D.

### Antes

¿Qué diferencia IOPS y throughput?

- A. Volumen transferido por segundo frente a operaciones por segundo
- B. Tiempo por operación frente a capacidad útil del volumen
- C. Número de operaciones simultáneas frente a tiempo de respuesta
- D. Operaciones por segundo frente a volumen transferido por segundo **(correcta)**

Explicación: El tamaño de bloque relaciona operaciones y volumen, sin hacerlos equivalentes.

### Propuesta

¿Qué diferencia IOPS y throughput?

- A. Volumen transferido por segundo frente a operaciones por segundo
- B. Tiempo por operación frente a capacidad útil del volumen
- C. Número de operaciones simultáneas frente a tiempo de respuesta
- D. Operaciones por segundo frente a volumen transferido por segundo **(correcta)**

Explicación: IOPS cuenta operaciones de entrada/salida por segundo; throughput expresa volumen transferido por unidad de tiempo. Con un tamaño de operación conocido y un punto de medición coherente pueden relacionarse, pero no son la misma magnitud. Dividir o agrupar operaciones y alcanzar otro límite del recorrido puede alterar los valores observados.

- Error A: Invierte el orden: volumen por segundo es throughput y operaciones por segundo es IOPS.
- Error B: Tiempo por operación es latencia y capacidad útil es espacio; no son las magnitudes preguntadas.
- Error C: Operaciones simultáneas describen concurrencia y tiempo de respuesta describe latencia, no IOPS frente a throughput.

- [AWS: Amazon EBS I/O characteristics and monitoring](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-io-characteristics.html) · IOPS; Volume queue length and latency; I/O size and volume throughput limits · versión: Guía EBS HTML comprobada 03-11-2026. Operaciones frente a volumen por tiempo y efecto de tamaño/agregación; límites y ejemplos comerciales no se presentan como cifras de todo almacenamiento. · comprobado: 2026-11-03

Partida: `388fb7d8f2deec0265dade061040b4b7864286fbbb7e2babc90839d4059c02c2` · propuesta: `44ccd4ba883035656ecf85ddbc71ced9b1c98884be02eb8ca2a6a633f1bd0102`

## AI-GSI-B4-T05-020

Decisión: pending_review · acción: revise.

Motivo: Conservar protección de gestión y clave B; contrastar plano de datos, identidades y cifrado con administración controlada.

### Antes

¿Qué control protege la gestión del almacenamiento?

- A. Contraseñas públicas
- B. Segmentación, acceso administrativo controlado y monitorización **(correcta)**
- C. Acceso irrestricto desde cualquier red
- D. Desactivar alertas de capacidad

Explicación: La seguridad incluye administración, red, datos y vigilancia de salud.

### Propuesta

¿Qué control protege la gestión del almacenamiento?

- A. Confiar en zoning de datos para autorizar la consola administrativa.
- B. Separar la red de gestión, limitar administradores y vigilar eventos. **(correcta)**
- C. Usar una cuenta compartida de cabina para simplificar todas las tareas.
- D. Equiparar cifrado de volúmenes con control de la red de gestión.

Explicación: La administración del almacenamiento necesita limitar desde dónde se gestiona, quién puede actuar y cómo se siguen las actuaciones y el estado. Segmentación, identidades y permisos controlados, y vigilancia se complementan. El zoning de la SAN o el cifrado de datos resuelven otros aspectos y no sustituyen esos controles de gestión.

- Error A: El zoning limita conectividad de datos FC; no autoriza por sí mismo acceso a la interfaz administrativa de la cabina.
- Error C: Una cuenta compartida amplia dificulta atribuir acciones y limitar permisos por función.
- Error D: Cifrar datos no controla qué redes o identidades alcanzan la administración del sistema.

- [NIST: Security Guidelines for Storage Infrastructure](https://csrc.nist.gov/pubs/sp/800/209/final) · Abstract: autenticación/autorización, control de configuración, aislamiento y protección/restauración de datos · versión: SP800-209, octubre2020; ficha y resumen HTML comprobados 03-11-2026. Se usa el alcance expreso del resumen; no se atribuye lectura íntegra del PDF ni obligación jurídica del proyecto. · comprobado: 2026-11-03
- [GSA: Privileged Identity Playbook](https://www.idmanagement.gov/playbooks/pam/) · Executive Summary; Privileged Identity Management; AppendixC, Least Privilege AC-6 · versión: Versión 1.2 de 29-12-2022, HTML comprobado de nuevo 03-11-2026. Identidades administrativas, mínimo privilegio y seguimiento; no se convierte en obligación de la AGE ni se consultan credenciales reales. · comprobado: 2026-11-03

Partida: `0e15f3adc7ce2e7c355974c18475cae951af7f8e16e4920e2aca4635df798b23` · propuesta: `1573b1eec8ab6a8aa94c70f522e6602cde9feb993d786e8189a61e074ed35ef8`

## AI-GSI-B4-T06-002

Decisión: pending_review · acción: revise.

Motivo: Conservar N+1 y clave A; caso de capacidad mínima y reserva que distingue redundancia modular de dos sistemas.

### Antes

¿Qué significa redundancia N+1?

- A. Añadir un componente a la capacidad necesaria **(correcta)**
- B. No tener reserva
- C. Duplicar siempre toda la capacidad completa
- D. Tres sitios geográficos obligatorios

Explicación: N+1 añade una unidad; 2N duplica la capacidad en la parte diseñada.

### Propuesta

Un conjunto de SAI necesita tres módulos iguales para sostener la carga y dispone de cuatro operativos. ¿Qué esquema de redundancia de módulos describe?

- A. N+1. **(correcta)**
- B. N.
- C. 2N.
- D. 2(N+1).

Explicación: Si N módulos iguales bastan para sostener la carga, disponer de uno adicional describe N+1. En este caso N vale 3 y hay 4 módulos. Es redundancia en la parte modular considerada; no demuestra duplicación completa de cadenas, independencia de controladores o certificación de disponibilidad de todo el CPD.

- Error B: N sería disponer solo de los tres módulos necesarios, sin la reserva descrita.
- Error C: Con N igual a 3, duplicar la capacidad necesaria requeriría dos conjuntos equivalentes, no añadir un único módulo.
- Error D: Duplicar dos conjuntos N+1 es distinto de disponer de un solo conjunto de cuatro módulos.

- [Schneider Electric: What is a modular UPS?](https://www.se.com/ca/en/faqs/FAQ000244353/) · Power module: N+1 redundancy y módulo adicional que permite mantener la carga · versión: FAQ publicada 07-10-2022, modificada 07-10-2026, comprobada 03-11-2026. Se usa definición de reserva modular, no tiempos comerciales de reparación, instrucciones de manipulación eléctrica o garantía de disponibilidad del CPD. · comprobado: 2026-11-03
- [Schneider Electric: Design considerations for deployment of UPS systems in data centers](https://blog.se.com/datacenter/2020/07/20/design-considerations-deployment-ups-systems-in-data-centers/) · Designing for UPS reliability and availability: dos sistemas capaces de soportar la carga crítica · versión: Artículo de 20-07-2020, HTML comprobado03-11-2026. Se usa contraste 2N/N+1; no se universalizan tiempos de autonomía, costes o afirmaciones de mercado. · comprobado: 2026-11-03

Partida: `7e6ccd8087b406499a6595f9c7766d9b62c63c9cf89e5999a2a2be1838f6ccf8` · propuesta: `1071a60e9a8474ecfe69140cd05b1978796d42e42e605462b018e3f18b2050b5`

## AI-GSI-B4-T06-003

Decisión: pending_review · acción: revise.

Motivo: Conservar 2N y clave D; contrastar N, N+1 y N+2 sin prometer independencia de toda la instalación.

### Antes

¿Qué significa 2N en la parte diseñada?

- A. Tener dos usuarios administradores
- B. Duplicar solo etiquetas
- C. Añadir siempre solo un componente
- D. Duplicar la capacidad necesaria completa **(correcta)**

Explicación: 2N y N+1 describen redundancias distintas según la topología.

### Propuesta

¿Qué significa 2N en la parte diseñada?

- A. Un sistema dimensionado para la carga sin reserva adicional.
- B. Un conjunto con un módulo más de los necesarios para la carga.
- C. Un conjunto con dos módulos más de los necesarios para la carga.
- D. Dos sistemas dimensionados cada uno para toda la carga necesaria. **(correcta)**

Explicación: En el modelo 2N se duplica la capacidad necesaria: cada sistema puede atender la carga de referencia en la parte diseñada. No equivale a añadir uno o dos módulos a un único conjunto. La disponibilidad real exige analizar componentes comunes, distribución y condiciones de mantenimiento; la etiqueta no certifica por sí sola toda la instalación.

- Error A: Describe N, la capacidad necesaria sin duplicación.
- Error B: Añadir un módulo al mínimo corresponde a N+1, no a dos sistemas completos.
- Error C: Añadir dos módulos corresponde a N+2; no expresa duplicación de dos sistemas de capacidad N.

- [Schneider Electric: Design considerations for deployment of UPS systems in data centers](https://blog.se.com/datacenter/2020/07/20/design-considerations-deployment-ups-systems-in-data-centers/) · Designing for UPS reliability and availability: dos sistemas capaces de soportar la carga crítica · versión: Artículo de 20-07-2020, HTML comprobado03-11-2026. Se usa contraste 2N/N+1; no se universalizan tiempos de autonomía, costes o afirmaciones de mercado. · comprobado: 2026-11-03
- [Schneider Electric: What is a modular UPS?](https://www.se.com/ca/en/faqs/FAQ000244353/) · Power module: N+1 redundancy y módulo adicional que permite mantener la carga · versión: FAQ publicada 07-10-2022, modificada 07-10-2026, comprobada 03-11-2026. Se usa definición de reserva modular, no tiempos comerciales de reparación, instrucciones de manipulación eléctrica o garantía de disponibilidad del CPD. · comprobado: 2026-11-03

Partida: `492108041d635cd1dc6c98ac142a5d4c0b6a72ccc6b1a158b2cf144a53769c1e` · propuesta: `0d4b73a60fbbc0949a7d464cd81e73700f2616320cb3dd5af51d93a7b343efb6`

## AI-GSI-B4-T06-004

Decisión: pending_review · acción: revise.

Motivo: Conservar PUE y clave A; distractores de cocientes energéticos próximos y precisión de límites de medida.

### Antes

¿Qué mide PUE?

- A. Energía total del CPD dividida por energía TI **(correcta)**
- B. Porcentaje de disponibilidad
- C. Latencia de almacenamiento
- D. Número de incidentes al mes

Explicación: PUE mide sobrecarga energética, no fiabilidad o calidad del servicio.

### Propuesta

¿Qué mide PUE?

- A. Energía total del CPD dividida por energía TI. **(correcta)**
- B. Energía TI dividida por energía total del CPD.
- C. Energía no TI dividida por energía total del CPD.
- D. Energía no TI dividida por energía TI.

Explicación: PUE es el cociente entre la energía total del centro y la de sus equipos TI. Deben emplearse unidades, periodo y límites de medición coherentes. Incluye la energía TI en el numerador: el cociente de energía auxiliar respecto a TI es PUE menos 1. No mide directamente disponibilidad, trabajo útil o impacto ambiental total.

- Error B: Es la inversa del PUE, no la definición del indicador preguntado.
- Error C: Es la fracción auxiliar sobre el total, no total dividido por TI.
- Error D: Es la energía auxiliar por unidad TI; omite la contribución TI incluida en el numerador del PUE.

- [The Green Grid: TGG Glossary, Power Usage Effectiveness](https://www.thegreengrid.org/resources/glossary?combine=pue) · Entradas Power Usage Effectiveness y PUE: energía total/energía de equipos TI, ejemplo2.0 · versión: Glosario que el organismo identifica como legacy, HTML comprobado03-11-2026. Fórmula contrastada con explicación actual de Google; no se afirma lectura completa de ISO/IEC30134-2 o de whitepapers enlazados. · comprobado: 2026-11-03
- [Google Data Centers: Power usage effectiveness](https://datacenters.google/efficiency/) · Google comprehensive approach to measuring PUE; nota1: ejemplo PUE2.0 y energía auxiliar · versión: Página pública comprobada 03-11-2026. Se usa ejemplo del ratio y alcance de medición, no cifras de flota como objetivo de este proyecto o equivalencia con calidad, disponibilidad o huella total. · comprobado: 2026-11-03

Partida: `57328e76585f9ddb70b4c30cefa85374d2c7183584105bb40a18520a13721387` · propuesta: `086e36b4c129a692f21ef345aa2fa1fbf9d346dbd1aed10010b137d666eec555`

## AI-GSI-B4-T06-005

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros el cálculo y sus cuatro alternativas, que reflejan operaciones erróneas plausibles. Añadir explicación individual y condiciones de medición, clave A.

### Antes

Con 150 unidades de energía total y 100 de TI, ¿qué PUE resulta?

- A. 1,5 **(correcta)**
- B. 250
- C. 0,67
- D. 50

Explicación: PUE=150/100=1,5.

### Propuesta

Con 150 unidades de energía total y 100 de TI, ¿qué PUE resulta?

- A. 1,5 **(correcta)**
- B. 250
- C. 0,67
- D. 50

Explicación: Tomando ambas energías en las mismas unidades, periodo y límites de medición, el cociente es 150/100=1,5. Es adimensional: por cada unidad de energía TI hay 1,5 de energía total y 0,5 de energía auxiliar. El resultado no significa 150 por ciento de disponibilidad ni una medida directa de trabajo informático útil.

- Error B: 250 resulta de sumar 150 y 100, pero la energía TI ya forma parte de la total y PUE es un cociente.
- Error C: 0,67 aproxima 100/150: se ha invertido numerador y denominador.
- Error D: 50 es la diferencia entre energía total y TI, una cantidad auxiliar en unidades de energía, no el ratio.

- [The Green Grid: TGG Glossary, Power Usage Effectiveness](https://www.thegreengrid.org/resources/glossary?combine=pue) · Entradas Power Usage Effectiveness y PUE: energía total/energía de equipos TI, ejemplo2.0 · versión: Glosario que el organismo identifica como legacy, HTML comprobado03-11-2026. Fórmula contrastada con explicación actual de Google; no se afirma lectura completa de ISO/IEC30134-2 o de whitepapers enlazados. · comprobado: 2026-11-03
- [Google Data Centers: Power usage effectiveness](https://datacenters.google/efficiency/) · Google comprehensive approach to measuring PUE; nota1: ejemplo PUE2.0 y energía auxiliar · versión: Página pública comprobada 03-11-2026. Se usa ejemplo del ratio y alcance de medición, no cifras de flota como objetivo de este proyecto o equivalencia con calidad, disponibilidad o huella total. · comprobado: 2026-11-03

Partida: `5348783095199b05124966595aed304499a2fff3a5c7e308aee1216eddedb249` · propuesta: `5559b394eb151c5b2ad9c3772ea04ed74c8f6bcb3a220bcd9dbaf3d8efa99aec`

## AI-GSI-B4-T06-006

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas, ya comparables y diferenciados por función. Ampliar explicación y respaldo, clave D.

### Antes

¿Qué utilidad tienen pasillos fríos y calientes con contención?

- A. Duplicar la cadena de alimentación eléctrica hasta cada servidor
- B. Añadir por sí mismos un equipo de climatización redundante N+1
- C. Medir la energía TI consumida sin incluir refrigeración
- D. Mejorar gestión del flujo de aire y eficiencia térmica **(correcta)**

Explicación: La disposición favorece refrigeración eficiente sin mezclar aire innecesariamente.

### Propuesta

¿Qué utilidad tienen pasillos fríos y calientes con contención?

- A. Duplicar la cadena de alimentación eléctrica hasta cada servidor
- B. Añadir por sí mismos un equipo de climatización redundante N+1
- C. Medir la energía TI consumida sin incluir refrigeración
- D. Mejorar gestión del flujo de aire y eficiencia térmica **(correcta)**

Explicación: Los pasillos y su contención reducen la mezcla entre aire frío de suministro y aire caliente expulsado por los equipos. Mejoran el recorrido del aire y pueden reducir el esfuerzo de refrigeración. No añaden por sí solos capacidad redundante, alimentación eléctrica o instrumentación de energía; el ahorro depende del diseño y operación concretos.

- Error A: Duplicar alimentación es una decisión de la cadena eléctrica, no una consecuencia de contener flujos de aire.
- Error B: La contención no instala otro equipo de climatización ni acredita reserva N+1.
- Error C: Medir energía TI exige instrumentación y límites de medida; el pasillo no realiza esa medición.

- [ENERGY STAR: Optimize Airflow and HVAC](https://www.energystar.gov/products/data_center_equipment/optimize-airflow-hvac) · Air Flow Management: hot aisle/cold aisle layout y Utilize containment/enclosures · versión: Guía institucional HTML comprobada 03-11-2026. Separar aire de suministro y escape; no se promete un porcentaje de ahorro universal ni se prescribe obra física sin estudio. · comprobado: 2026-11-03

Partida: `6f8e218358f207b8ce78868088c6a61c577750411956ad1dbdd6982e9b374110` · propuesta: `0f30367e603913ee35708e6a6aa62b70c207ecf621d8a9205dde78155651970c`

## AI-GSI-B4-T06-008

Decisión: pending_review · acción: revise.

Motivo: Conservar concentración de impacto y clave C; microcaso de host común y afirmaciones técnicas comparables.

### Antes

¿Qué riesgo introduce consolidar muchas VMs en un host?

- A. Eliminación de dependencia de storage
- B. Capacidad física infinita
- C. Concentración del impacto si falla o se satura **(correcta)**
- D. Ausencia de necesidad de reservas

Explicación: Consolidar mejora utilización, pero aumenta cargas afectadas por un fallo común.

### Propuesta

Doce VMs comparten un host físico. ¿Qué afirmación refleja el riesgo de esa consolidación?

- A. Sus fallos quedan independientes por separar los sistemas invitados.
- B. El disco virtual de cada VM elimina dependencias de una cabina común.
- C. Un fallo o saturación del host puede afectar a varias cargas a la vez. **(correcta)**
- D. La migración en vivo convierte las VMs en copias de recuperación externa.

Explicación: Las VMs comparten componentes físicos y recursos del host. Concentrarlas puede ampliar el conjunto afectado por un fallo o saturación común. El aislamiento de los invitados no elimina esa dependencia; reservas, distribución y capacidad de evacuación requieren diseño y verificación. Una migración planificada tampoco equivale a recuperación externa ante cualquier desastre.

- Error A: Separar invitados no proporciona hosts físicos independientes frente al fallo del anfitrión compartido.
- Error B: Los discos virtuales pueden depender de la misma cabina; la abstracción no elimina ese dominio común.
- Error D: Mover una VM en ejecución es distinto de disponer de una copia recuperable e independiente fuera del dominio afectado.

- [Microsoft: Hyper-V maximum scale limits in Windows Server](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/maximum-scale-limits?pivots=windows-server-2022) · Maximums for Failover Cluster with Hyper-V hosts: capacidad suficiente para todas las VMs · versión: Vista Windows Server2022, página actualizada 17-10-2025, HTML comprobado03-11-2026. Se usa exigencia de planificación, no un máximo nominal como evidencia de dimensionamiento adecuado. · comprobado: 2026-11-03
- [Microsoft: Detecting bottlenecks in a virtualized environment](https://learn.microsoft.com/en-us/windows-server/administration/performance-tuning/role/hyper-v-server/detecting-virtualized-environment-bottlenecks) · Processor, Memory, Network y Storage bottlenecks; estado de host y VMs · versión: Texto público comprobado03-11-2026. Recursos compartidos y diagnóstico; porcentajes o umbrales de ejemplo no se usan como reglas universales ni se ejecutan acciones sobre hosts. · comprobado: 2026-11-03
- [OpenStack Nova: Server Groups](https://docs.openstack.org/nova/latest/user/server-groups.html) · Introducción; políticas affinity, anti-affinity y soft-anti-affinity; nota sobre availability zones y HA · versión: Documentación latest servida nova34.1.0.dev119, página fechada 02-11-2023, comprobada 03-11-2026. No se presenta esa versión de desarrollo como release estable. Separar hosts no asegura todos los dominios de fallo o HA. · comprobado: 2026-11-03

Partida: `d84684820fcccabc3a185e7cc395926e09a1ef2be0751deed57150265e875065` · propuesta: `a3456c036fa051a1cf42acc59fc0b6731129ab29fdd1941da7c004eea1b08a25`

## AI-GSI-B4-T06-009

Decisión: pending_review · acción: revise.

Motivo: Conservar anti-affinity y clave B; distinguir ubicación de consumo y arranque, con límite entre reglas duras y preferentes.

### Antes

¿Qué medida reduce concentración de réplicas en un mismo host?

- A. Compresión de logs
- B. Anti-affinity **(correcta)**
- C. Eliminar monitorización
- D. Un único datastore sin alternativa como garantía

Explicación: Separar cargas relacionadas entre dominios de fallo favorece disponibilidad.

### Propuesta

¿Qué medida reduce concentración de réplicas en un mismo host?

- A. Una regla de afinidad para agrupar las réplicas.
- B. Una regla de anti-afinidad entre las réplicas. **(correcta)**
- C. Una prioridad de arranque dentro del mismo host.
- D. Una cuota de CPU para limitar cada réplica.

Explicación: La anti-afinidad expresa que las réplicas deben o deberían ubicarse separadas, según si la regla es obligatoria o preferente. Ayuda a evitar un host común, pero requiere capacidad y un ámbito de colocación adecuados. No garantiza separar cabinas, racks o centros ni proporciona alta disponibilidad completa por sí sola.

- Error A: La afinidad busca proximidad o agrupación; no la separación solicitada.
- Error C: El orden de arranque dentro de un host no distribuye réplicas entre anfitriones.
- Error D: Una cuota limita consumo, pero no determina el host en el que se sitúa cada réplica.

- [OpenStack Nova: Server Groups](https://docs.openstack.org/nova/latest/user/server-groups.html) · Introducción; políticas affinity, anti-affinity y soft-anti-affinity; nota sobre availability zones y HA · versión: Documentación latest servida nova34.1.0.dev119, página fechada 02-11-2023, comprobada 03-11-2026. No se presenta esa versión de desarrollo como release estable. Separar hosts no asegura todos los dominios de fallo o HA. · comprobado: 2026-11-03

Partida: `5261bd97e8f549445ae91054d31216972694862da29a197053491d03bd10c5c3` · propuesta: `86cc454915847b19f843324699c8338c6b84f22cf5b497fc352789176b7563cc`
