# GSI A2 — BLOQUE II — Resumen maestro de repaso

Manual técnico depurado para GSI A2. Prioriza conceptos estables y comparaciones examinables; las referencias de versión se incluyen solo cuando evitan estudiar tecnología obsoleta.

**Estructura de cada tema:** núcleo de estudio → claves de test → enfoque de supuesto → actualización cuando sea necesaria → fuentes base. El BOE vigente prevalece sobre cualquier apunte o mapeo antiguo.

## II.01 — Ordenadores, supercomputación, arquitecturas escalables y cloud

### Núcleo de estudio

Estudia la evolución desde dispositivos móviles y sistemas personales hasta servidores, clústeres, supercomputadores y arquitecturas de altas prestaciones. Revisa CPU, memoria, buses, almacenamiento, GPU/aceleradores, paralelismo SIMD/MIMD, multiprocesamiento, clúster y conceptos de HPC. Escalabilidad vertical significa aumentar recursos de un nodo; horizontal, añadir nodos. En cloud distingue IaaS, PaaS y SaaS; despliegues público, privado, híbrido y multicloud; elasticidad, autoservicio, pago por uso, agrupación de recursos y acceso por red. Relaciona virtualización, contenedores, almacenamiento distribuido, balanceo, alta disponibilidad y regiones/zonas de disponibilidad. Para la AGE conviene conocer la idea de nube soberana y servicios cloud contratados con requisitos ENS, sin memorizar productos comerciales salvo ejemplos.

### Claves de test

Diferencia escalabilidad y elasticidad; alta disponibilidad y recuperación ante desastres; hipervisor tipo 1 y tipo 2; IaaS/PaaS/SaaS; cloud público/privado/híbrido. En arquitectura, CPU no es lo mismo que núcleo, hilo o socket. Preguntas frecuentes mezclan capacidad, rendimiento, disponibilidad y tolerancia a fallos.

### Enfoque para supuesto práctico

Ante un supuesto, justifica dimensionamiento, crecimiento, HA, zonas, RPO/RTO, cifrado, monitorización y coste. Evita elegir cloud “porque sí”: compara requisitos de datos, latencia, dependencia de proveedor, reversibilidad y ENS.

### Fuentes base del material

A1 052 + 053 + 054 + 055 y RELEASE de arquitectura física/cloud.

## II.02 — Sistemas operativos: fundamentos, Windows, Linux, Unix y móviles

### Núcleo de estudio

Un sistema operativo gestiona procesador, memoria, procesos/hilos, dispositivos, E/S, ficheros, usuarios y seguridad, ofreciendo abstracciones a aplicaciones. Domina núcleo, modo usuario/kernel, llamadas al sistema, planificación, concurrencia, sincronización, memoria virtual, paginación, sistemas de archivos y gestión de dispositivos. Windows emplea familias NT, servicios, registro, NTFS, Active Directory en entorno corporativo y PowerShell como herramienta de administración. Linux/Unix se apoyan en modelo multiusuario, permisos propietario-grupo-otros, procesos, señales, demonios/servicios, jerarquía de ficheros y shells. En móviles, Android se basa en kernel Linux con runtime y sandbox por aplicación; iOS usa arquitectura derivada de Darwin/XNU y un modelo de sandbox y firma estricta.

### Claves de test

Diferencia proceso/hilo; memoria física/virtual; paginación/segmentación; kernel monolítico/microkernel/híbrido; permisos Linux; NTFS/FAT; servicio/daemon; Android/iOS de SO de escritorio. No memorices comandos aislados sin entender su función.

### Enfoque para supuesto práctico

En supuesto define hardening, actualización, cuentas privilegiadas, logging, EDR, cifrado, copias, automatización, alta disponibilidad y política de soporte. Si eliges Windows o Linux, justifica por compatibilidad, operación, licencias y capacidades, no por preferencias.

### Fuentes base del material

A1 059 + 060 + 061 + 062.

## II.03 — Lenguajes y paradigmas actuales de programación

### Núcleo de estudio

Tema complementario. Clasifica lenguajes por nivel de abstracción, tipado estático/dinámico y fuerte/débil, compilación/interpretación/JIT, gestión de memoria y paradigma. Paradigmas principales: imperativo/procedimental, orientado a objetos, funcional, lógico/declarativo, dirigido por eventos, concurrente/reactivo y scripting. Java y C# combinan OO con elementos funcionales y ejecución sobre máquina virtual/runtime; C/C++ se compilan a código nativo; Python y JavaScript son dinámicos y multiparadigma; SQL es declarativo. Conceptos transversales: tipos, alcance, paso de parámetros, excepciones, genéricos, closures, inmutabilidad, concurrencia, recolector de basura, módulos/paquetes y ecosistemas. No hace falta aprender sintaxis extensa: GSI pregunta características y comparaciones.

### Claves de test

Compilado no equivale siempre a nativo: Java/.NET compilan a bytecode/IL y usan JIT/AOT. Tipado dinámico no significa “sin tipos”. Funcional enfatiza funciones de primera clase e inmutabilidad; lógico expresa hechos/reglas; declarativo describe qué se quiere. Diferencia concurrencia de paralelismo.

### Enfoque para supuesto práctico

En supuesto selecciona lenguaje por ecosistema, mantenibilidad, competencias del equipo, rendimiento, seguridad, soporte, interoperabilidad y ciclo de vida. Evita justificar solo por popularidad.

### Fuentes base del material

Sin correspondencia A1 suficiente. Usar fuentes oficiales de Java, .NET, Python/ECMAScript y material docente de paradigmas. Tema COMPLEMENTAR.

## II.04 — Inteligencia de negocio, DSS/EIS, cuadros de mando, DW, OLTP y OLAP

### Núcleo de estudio

Business Intelligence transforma datos en información útil para decidir. Un Data Warehouse es orientado a temas, integrado, histórico y no volátil; suele alimentarse mediante ETL/ELT desde sistemas operacionales. Diferencia OLTP —muchas transacciones cortas, datos actuales y normalización— de OLAP —consultas analíticas, agregaciones, histórico y modelos dimensionales—. En modelado dimensional estudia tabla de hechos, dimensiones, medidas, estrella y copo de nieve. DSS apoya decisiones semiestructuradas; EIS facilita información agregada para dirección; un cuadro de mando presenta KPI y objetivos. Añade calidad, linaje, catálogo, metadatos y gobierno del dato como conceptos actuales.

### Claves de test

Hechos contienen medidas y claves hacia dimensiones; dimensión tiempo es habitual. ETL transforma antes de cargar; ELT puede transformar en destino. OLAP usa operaciones como slice, dice, drill-down, roll-up y pivot. No confundas Data Lake con Data Warehouse.

### Enfoque para supuesto práctico

En supuesto plantea fuentes, integración, calidad, modelo analítico, almacenamiento, BI, seguridad por roles, datos personales, actualización y KPI. Explica por qué separar cargas analíticas de OLTP.

### Fuentes base del material

A1 072 + 075 y materiales BI/DW del RELEASE.

## II.05 — ANSI/SPARC, SGBD relacionales, SQL e interoperabilidad

### Núcleo de estudio

La arquitectura ANSI/SPARC separa niveles externo, conceptual e interno para favorecer independencia lógica y física de los datos. Un SGBD proporciona definición, manipulación, control de concurrencia, transacciones, integridad, seguridad, recuperación y administración. En el modelo relacional, tablas representan relaciones; filas tuplas; columnas atributos; claves primarias identifican y claves foráneas relacionan. SQL incluye DDL, DML, DCL y control transaccional. Domina SELECT, JOIN, agregación, GROUP BY/HAVING, subconsultas, vistas, índices y transacciones ACID. Interoperabilidad: estándares SQL, ODBC/JDBC, formatos de intercambio, APIs y replicación/CDC según caso.

### Claves de test

ANSI/SPARC: externo=visiones, conceptual=modelo global, interno=almacenamiento. WHERE filtra antes de agrupar; HAVING después. INNER/LEFT/RIGHT/FULL JOIN no son equivalentes. Índice acelera lecturas pero añade coste de espacio y escritura. ACID: atomicidad, consistencia, aislamiento, durabilidad.

### Enfoque para supuesto práctico

En supuesto diseña esquema, claves, índices, particionado, HA/replicación, backup, cifrado, auditoría y conexión. Justifica motor relacional frente a NoSQL en función de consistencia, consultas y modelo de datos.

### Fuentes base del material

A1 063 + 064. Correspondencia DIRECTA.

## II.06 — Cliente-servidor, multicapas, multidispositivo y servicios web

### Núcleo de estudio

Cliente-servidor separa consumidores y proveedores de servicios. En 2 capas el cliente suele hablar directamente con datos/servidor; en 3 o n capas se separan presentación, lógica de negocio y persistencia, mejorando mantenibilidad, escalabilidad y seguridad. Multidispositivo exige interfaces adaptativas, APIs y desacoplamiento. SOA organiza capacidades como servicios con contratos y bajo acoplamiento. Servicios web clásicos usan SOAP, WSDL y XML; REST es un estilo arquitectónico sobre recursos, HTTP, interfaz uniforme y ausencia de estado. También existen mensajería y eventos para integración asíncrona. Conceptos clave: API Gateway, balanceador, caché, sesión, idempotencia, versionado y contratos.

### Claves de test

SOAP es protocolo; REST es estilo. HTTP es stateless aunque una aplicación pueda mantener sesión externamente. 3 capas lógicas no implica tres servidores físicos. Escalado horizontal exige minimizar estado local. Distingue sincronía de asincronía.

### Enfoque para supuesto práctico

En supuesto dibuja capas y flujos, define APIs, autenticación/autorización, errores, versionado, observabilidad, HA y contratos. Justifica síncrono REST/SOAP frente a asíncrono por eventos/colas.

### Fuentes base del material

A1 058 SOA + 065 web y RELEASE de arquitectura lógica.

## II.07 — Contenedores y microservicios: arquitectura, despliegue, monitorización y escalado

### Núcleo de estudio

Un contenedor empaqueta aplicación y dependencias compartiendo el kernel del host; una VM virtualiza hardware y ejecuta un SO invitado completo. Imágenes inmutables se instancian como contenedores; OCI estandariza formatos/runtime. Microservicios dividen el sistema en servicios pequeños, autónomos y desplegables de forma independiente, normalmente alineados con capacidades de negocio. Beneficios: despliegue independiente, escalado selectivo y autonomía; costes: complejidad distribuida, red, observabilidad, consistencia y operación. Kubernetes orquesta pods, deployments, services, config/secrets, namespaces, scheduling, autoescalado y recuperación. Añade service mesh como opción, health checks, rolling updates, logs/métricas/trazas y autoscaling.

### Claves de test

Contenedor ≠ VM; pod ≠ contenedor; Service de Kubernetes ≠ microservicio de negocio. ReplicaSet mantiene réplicas; Deployment gestiona despliegues declarativos. Stateless facilita escalado; estado persistente requiere almacenamiento y diseño específico. No uses “microservicios” como sinónimo de “muchas APIs”.

### Enfoque para supuesto práctico

En supuesto valora si microservicios están justificados. Incluye registro de imágenes, CI/CD, escaneo, secretos, redes, observabilidad, límites de recursos, HA, persistencia, backup y estrategia de despliegue. Kubernetes está en versiones 1.36/1.35/1.34 soportadas en 2026, pero el examen debe centrarse en conceptos, no en una versión concreta.

### Actualización 2026

Actualización 2026: Kubernetes mantiene las ramas 1.36, 1.35 y 1.34; estudiar objetos y arquitectura estable, no números de parche.

### Fuentes base del material

A1 065 + 097 + 100 + 132 y RELEASE Microservicios.

## II.08 — TCP/IP y modelo OSI: capas, protocolos, direccionamiento y encaminamiento

### Núcleo de estudio

OSI tiene siete capas: física, enlace, red, transporte, sesión, presentación y aplicación. TCP/IP se suele representar con acceso a red, Internet, transporte y aplicación. En IP estudia IPv4/IPv6, CIDR, subredes, gateway, NAT, ICMP y encaminamiento. TCP proporciona conexión, fiabilidad, control de flujo/congestión y puertos; UDP ofrece datagramas sin garantía y menor sobrecarga. Protocolos habituales: ARP/NDP, DHCP, DNS, HTTP(S), SMTP, IMAP, SSH, SNMP, NTP. Routing: estático y dinámico; conceptos de IGP/EGP, métricas y tablas; OSPF como IGP de estado de enlace y BGP como protocolo interdominio.

### Claves de test

Memoriza PDU y función por capa, puertos más habituales y diferencias TCP/UDP; IPv4 32 bits, IPv6 128; CIDR y máscara; switch opera principalmente en L2 y router en L3. DNS no “convierte Internet”, resuelve nombres; DHCP asigna configuración de red.

### Enfoque para supuesto práctico

En supuesto representa VLAN/subredes, direccionamiento, redundancia, routing, firewall, DNS/DHCP, balanceo y monitorización. Calcula rangos CIDR cuando sea necesario y justifica separación de zonas.

### Fuentes base del material

A1 109 + 111 + 115 y redes A1.

## II.09 — SGML, HTML, XML y lenguajes de script

### Núcleo de estudio

SGML es metalenguaje histórico del que deriva HTML; XML define una sintaxis extensible para datos estructurados. HTML describe estructura y semántica de documentos web; CSS se encarga de presentación; JavaScript proporciona comportamiento en cliente y también puede ejecutarse en servidor. En XML estudia documento bien formado y válido, namespaces, XSD, XPath y transformaciones XSLT a nivel conceptual. JSON no aparece en el título del BOE pero es un formato actual de intercambio que conviene contrastar con XML. Los lenguajes de script suelen priorizar automatización y ejecución rápida sobre un ciclo clásico de compilación.

### Claves de test

HTML no es XML salvo XHTML; XML no trae etiquetas predefinidas; XSD define estructura/tipos; XPath selecciona nodos; XSLT transforma. JavaScript ≠ Java. Distingue lenguaje de marcas de lenguaje de programación.

### Enfoque para supuesto práctico

En supuesto usa HTML semántico, CSS responsive, JavaScript/TypeScript cuando proceda, APIs con JSON/XML según integración y validación de esquemas. Añade accesibilidad y seguridad contra XSS/CSRF/inyección.

### Fuentes base del material

A1 077. Correspondencia DIRECTA.

## II.10 — Análisis y gestión de riesgos de sistemas de información

### Núcleo de estudio

Riesgo combina probabilidad y consecuencia de que una amenaza explote una vulnerabilidad sobre un activo. Proceso: contexto, inventario/valoración de activos, amenazas, vulnerabilidades, salvaguardas, estimación de impacto/probabilidad, evaluación, tratamiento y aceptación del riesgo residual. Opciones: evitar, reducir, transferir/compartir o aceptar. En España, MAGERIT es una metodología de referencia de la Administración y PILAR una herramienta asociada; ENS exige gestión de riesgos proporcionada. ISO/IEC 27005 aporta marco internacional. Diferencia análisis cualitativo y cuantitativo; identifica propietario del riesgo y del activo.

### Claves de test

Amenaza no es vulnerabilidad; riesgo inherente es previo a controles, residual tras controles. Un control puede reducir probabilidad, impacto o ambos. RPO/RTO pertenecen a continuidad y ayudan a valorar impacto, no son medidas de probabilidad.

### Enfoque para supuesto práctico

En supuesto haz una tabla corta activo-amenaza-vulnerabilidad-impacto-medida-riesgo residual. Vincula controles con ENS y continuidad, prioriza por riesgo y justifica aceptación por responsable competente.

### Fuentes base del material

A1 047 y material ENS/MAGERIT.

## II.11 — Auditoría informática, ENS, protección de datos y seguridad física

### Núcleo de estudio

La auditoría obtiene evidencia objetiva para evaluar controles, cumplimiento, eficacia y riesgos. Fases: planificación y alcance, criterios, trabajo de campo/evidencias, hallazgos, conclusiones, informe y seguimiento. Principios: independencia, competencia, evidencia suficiente y trazabilidad. Técnicas: entrevistas, revisión documental/configuración, muestreo, análisis de logs, pruebas de controles y herramientas automatizadas. Para ENS estudia auditoría regular y extraordinaria y conformidad según categoría; para protección de datos, responsabilidad proactiva, contratos, EIPD, registros, seguridad y derechos. Seguridad física: acceso a CPD, perímetro, energía, climatización, incendio, agua, inventario y continuidad.

### Claves de test

Auditoría no es pentest, aunque puede usar sus resultados. Evidencia debe ser pertinente y verificable. No confundir evaluación de conformidad ENS con certificación ISO 27001. ISO 19011 aporta directrices generales de auditoría; ISO 27001 se centra en SGSI.

### Enfoque para supuesto práctico

En supuesto define alcance, criterios, pruebas, evidencias y plan de remediación. Separa no conformidad, observación y riesgo; prioriza por criticidad y exige seguimiento.

### Fuentes base del material

A1 038 + 047 + 048, RGPD/LOPDGDD y ENS.

## II.12 — Atención a clientes y usuarios: contact center, CRM, multicanal, IVR y VoiceXML

### Núcleo de estudio

Un CRM centraliza información e interacciones para gestionar relaciones con usuarios/clientes; puede incluir gestión de casos, campañas, conocimiento e indicadores. Contact center integra voz, correo, chat, formularios, mensajería y otros canales; omnicanal busca continuidad entre canales, frente a multicanal donde pueden estar aislados. Componentes: ACD para distribución de llamadas, CTI para integrar telefonía-informática, IVR para interacción por voz/teclado, grabación, workforce management y analítica. VoiceXML es un lenguaje XML para aplicaciones de diálogo de voz. En sector público añade accesibilidad, identificación, protección de datos y trazabilidad.

### Claves de test

Call center es más limitado que contact center; multicanal no implica omnicanal; IVR no es reconocimiento de voz necesariamente; CRM no es solo una agenda de contactos.

### Enfoque para supuesto práctico

En supuesto diseña canales, enrutamiento, identificación, CRM, base de conocimiento, SLA, registro, grabación justificada, privacidad, accesibilidad y continuidad. Incluye métricas: tiempo de respuesta, abandono, resolución en primer contacto y satisfacción.

### Fuentes base del material

A1 072 + 077 y material de servicios/atención.

## II.13 — Seguridad física y lógica, ciberseguridad, incidentes e informática forense

### Núcleo de estudio

Seguridad busca confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad. Defensa en profundidad: gobierno, IAM/MFA, mínimo privilegio, segmentación, firewalls, EDR, hardening, parcheo, cifrado, copias, SIEM, gestión de vulnerabilidades y formación. Gestión de incidentes: preparación, detección/análisis, contención, erradicación, recuperación y lecciones aprendidas. En AGE son relevantes ENS y capacidades CCN-CERT; INCIBE es referencia nacional para ciudadanía y empresas. Forense digital exige preservar evidencias, cadena de custodia, adquisición, hash, análisis y documentación. Distingue vulnerabilidad, exploit, amenaza, incidente y brecha de datos.

### Claves de test

Hash aporta integridad, no confidencialidad. Cifrado simétrico usa misma clave; asimétrico par pública/privada. MFA combina factores distintos. Backup no sustituye a alta disponibilidad ni EDR. Contención inmediata puede ser más importante que erradicación prematura.

### Enfoque para supuesto práctico

En supuesto combina prevención, detección y respuesta; define SOC/SIEM, logging, retención, playbooks, aislamiento, comunicación, notificación RGPD si procede, recuperación y postmortem. Para forense evita alterar evidencia.

### Fuentes base del material

A1 125 + 126 + 127, ENS y CCN-CERT.

## II.14 — Software libre/propietario, licencias, protección jurídica y DRM

### Núcleo de estudio

Software libre se define por libertades de uso, estudio, modificación y redistribución; “libre” no significa necesariamente gratuito. Open source usa criterios de licencia compatibles. Licencias copyleft como GPL exigen determinadas condiciones de redistribución; permisivas como MIT, BSD o Apache permiten reutilización con obligaciones más ligeras. Software propietario restringe acceso/modificación según licencia. En España la protección jurídica del software se integra en la propiedad intelectual: programas se protegen como obras, con derechos de explotación y límites específicos. DRM agrupa medidas tecnológicas para controlar uso/acceso de contenidos; diferencia DRM de licenciamiento y de cifrado general.

### Claves de test

GPL y LGPL no son equivalentes; Apache 2.0 incluye cláusulas de patente; dominio público ≠ software libre con copyright; freeware ≠ open source. La licencia es una autorización jurídica, no el código en sí.

### Enfoque para supuesto práctico

En supuesto incluye inventario de componentes, SBOM, compatibilidad de licencias, obligaciones de publicación/atribución, soporte, seguridad de dependencias, coste total y reversibilidad.

### Fuentes base del material

A1 069 + 043.

## II.15 — Evaluación de alternativas, viabilidad, planificación, presupuestación y costes

### Núcleo de estudio

Una decisión TIC debe evaluar viabilidad técnica, económica, operativa, jurídica, organizativa y temporal. Compara alternativas con criterios ponderados y análisis de riesgos. Costes: inversión y operación, directos/indirectos, licencias, infraestructura, personal, migración, formación, soporte, seguridad y salida. TCO estima coste total de propiedad; ROI relaciona beneficio y coste; VAN actualiza flujos; TIR es la tasa que hace VAN cero; payback mide plazo de recuperación. En planificación usa EDT/WBS, dependencias, hitos, ruta crítica, Gantt y PERT; estima recursos y contingencia. En contratación pública añade lotes, solvencia, criterios y reversibilidad cuando proceda.

### Claves de test

Coste hundido no debe condicionar decisión futura; menor precio ≠ menor TCO; VAN positivo puede indicar conveniencia con la tasa usada; ruta crítica tiene holgura total cero en el modelo clásico. Diferencia presupuesto base, reserva y coste real.

### Enfoque para supuesto práctico

En supuesto presenta una matriz de alternativas, supuestos, costes CAPEX/OPEX, riesgos, cronograma y recomendación. Justifica make/buy/cloud/on-prem y evita cifras sin explicar hipótesis.

### Fuentes base del material

A1 040 + 041 + 036 + 099 y materiales de costes/viabilidad.

## II.16 — Gestión documental y contenidos, workflow, búsqueda, SEO y colaboración

### Núcleo de estudio

Un gestor documental controla documentos, metadatos, versiones, permisos, clasificación, búsqueda, retención y ciclo de vida; en AAPP debe relacionarse con documento/expediente electrónico, ENI, archivo y firma. Un CMS gestiona publicación de contenidos web y plantillas. Workflow/BPM automatiza tareas y estados; BPMN es una notación habitual de procesos. Sindicación usa feeds como RSS/Atom. Motores de búsqueda emplean rastreadores/robots/spiders, indexación y ranking; robots.txt orienta rastreo pero no es control de seguridad. SEO mejora descubrimiento mediante contenido, estructura, metadatos, rendimiento y enlaces. Herramientas colaborativas añaden coedición, repositorios, chat, wiki y control de acceso.

### Claves de test

CMS ≠ gestor documental; workflow ≠ BPM completo; robots.txt no impide acceso; SEO orgánico ≠ publicidad SEM. En expediente público importan metadatos, integridad, conservación y trazabilidad.

### Enfoque para supuesto práctico

En supuesto separa CMS público, gestor documental/archivo y motor de workflow; integra INSIDE/archivo si aplica, SSO, permisos, versionado, búsqueda, auditoría, conservación y accesibilidad.

### Fuentes base del material

A1 104 + 105 y RELEASE de gestores documentales/BPM.

## Fuentes oficiales de actualización

* [Programa oficial GSI A2 — BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262)
* [Kubernetes — releases soportadas](https://kubernetes.io/releases/)
* [MAGERIT / Administración electrónica](https://administracionelectronica.gob.es/)
* [CCN-CERT / ENS](https://www.ccn-cert.cni.es/)

Edición de trabajo GSI A2. Los materiales del otro proyecto GSI\_B1 no se han utilizado como fuente.
