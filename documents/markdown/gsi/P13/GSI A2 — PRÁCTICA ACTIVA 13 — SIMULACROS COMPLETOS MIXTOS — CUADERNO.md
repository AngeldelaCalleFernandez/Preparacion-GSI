GSI A2 — PRÁCTICA ACTIVA 13

SIMULACROS COMPLETOS MIXTOS

**Cuaderno de examen**

4 simulacros completos · 8 supuestos · elección A/B · 5 preguntas · 180 minutos

Nivel: segundo ejercicio · sin pistas temáticas

# Cómo usar este cuaderno

Cada simulacro reproduce la lógica del segundo ejercicio de ingreso libre: se presentan dos supuestos y debe elegirse uno. El entrenamiento se realiza con 5 preguntas y un tiempo máximo de 180 minutos. La corrección global se estructura en 30 puntos de aplicación de conocimientos técnicos, 10 de capacidad de análisis, 5 de sistemática y 5 de expresión escrita.

Este cuaderno elimina deliberadamente las “ruedas de apoyo”. En el enunciado no se indica qué bloque o tema debe utilizarse. Debes identificar por ti mismo los conocimientos necesarios, construir una arquitectura/propuesta común para las cinco respuestas y mantenerla coherente.

**Regla de simulación:** elige A o B. No contestes los dos. No abras el solucionario hasta terminar las cinco preguntas o agotar los 180 minutos.

## Método recomendado de 180 minutos

| Fase | Tiempo orientativo | Objetivo |
| --- | --- | --- |
| Lectura y elección | 10-15 min | Comparar ambos casos por dominio, riesgo y número de preguntas sólidas. |
| Esqueleto común | 10 min | 4-7 ideas por pregunta; requisitos, arquitectura y decisiones que no deben contradecirse. |
| Desarrollo | aprox. 28-30 min/pregunta | Responder exactamente a lo pedido: decisión → justificación → controles/pruebas. |
| Revisión | 10-15 min | Coherencia, omisiones, siglas, cálculos, términos y contradicciones. |

## Antes de empezar

* Subraya datos cuantitativos, restricciones, SLA/RPO/RTO, actores e integraciones.
* Distingue hechos del enunciado de tus propias asunciones.
* No “compres” tecnologías con siglas: cada componente debe resolver un requisito o riesgo.
* Si haces un cálculo, escribe fórmula, unidades, resultado e interpretación.
* Reserva espacio para seguridad, operación, pruebas y recuperación cuando sean relevantes.

SIMULACRO 1 — Servicio público digital frente a modernización de infraestructura

**Condiciones:** 180 minutos. Elija una sola opción (A o B). Responda sus 5 preguntas. La nota máxima del ejercicio es 50 puntos.

## Opción A — Nueva plataforma de ayudas y subvenciones

Un organismo estatal debe sustituir una aplicación de solicitud de ayudas que actualmente solo permite descargar un PDF y presentarlo por registro. El nuevo sistema atenderá a ciudadanía, representantes y personal tramitador. En campaña se esperan hasta 45.000 solicitudes diarias, con picos de 1.200 usuarios concurrentes. Cada expediente contendrá formularios, justificantes, documentos firmados, consultas a datos de otras Administraciones cuando exista habilitación, subsanaciones y notificaciones. El sistema deberá permitir guardar borradores, presentar una solicitud con justificante de registro, consultar el estado y tramitar internamente mediante un flujo con varios estados y unidades responsables.

La dirección tecnológica propone «microservicios en cloud» como requisito de partida, aunque el equipo actual mantiene con soltura aplicaciones Java empresariales y dispone de una plataforma corporativa de contenedores. El organismo ya utiliza servicios comunes de identificación/firma y dispone de un gestor documental corporativo. La base histórica contiene 7 millones de expedientes en un modelo relacional y debe conservarse la trazabilidad. El servicio se considera relevante: se desea una disponibilidad mensual del 99,9 %, p95 inferior a 2 segundos para operaciones ordinarias y recuperación ante desastre con RTO de 4 horas y RPO de 30 minutos. El portal será utilizado desde móvil y escritorio y debe ser accesible. Los datos incluyen información personal y documentos justificativos.

El proyecto debe entrar en producción en 10 meses. Habrá un proveedor externo de desarrollo, pero la explotación será asumida por el organismo. La dirección quiere entregas parciales cada 6-8 semanas y exige que la solución pueda evolucionar sin quedar cautiva de un proveedor o una plataforma concreta.

**Pregunta 1.** Identifique y priorice los requisitos funcionales, no funcionales, restricciones y actores principales. Proponga cómo obtendría, especificaría y mantendría la trazabilidad de los requisitos, incluyendo los derivados del sistema actual.

**Pregunta 2.** Proponga la arquitectura lógica de la solución y justifique si utilizaría monolito modular, microservicios u otra combinación. Describa capas/componentes, integraciones, persistencia, gestión documental, flujo de expediente y mecanismos de escalado y disponibilidad.

**Pregunta 3.** Defina el modelo de seguridad y cumplimiento: identificación y firma, autorización, protección de datos, seguridad de aplicación, ENS/ENI cuando procedan, accesibilidad y evidencias de auditoría. Indique además qué controles deben integrarse desde el desarrollo.

**Pregunta 4.** Plantee la estrategia de construcción, integración continua, pruebas, despliegue y transición a operación. Debe contemplar pruebas funcionales y no funcionales, datos de prueba, accesibilidad, seguridad, rendimiento, recuperación y rollback.

**Pregunta 5.** Proponga el plan de implantación y migración en 10 meses: metodología y gobierno, hitos, estrategia de sustitución, migración/reconciliación de datos, formación, gestión de riesgos y métricas de éxito postimplantación. Incluya cómo analizaría viabilidad/TCO y reversibilidad.

No se incluye mapa temático. Decide qué conocimientos son pertinentes y cuáles serían ruido.

## Opción B — Consolidación de dos CPD y treinta sedes

Un ministerio opera dos CPD principales a 12 km entre sí y 30 sedes territoriales. El CPD A aloja la mayoría de máquinas virtuales, las bases de datos y el almacenamiento SAN; el CPD B se usa casi exclusivamente para copias y algunos servicios secundarios. La red de sedes depende de un único operador MPLS. El portal público sale a Internet desde el CPD A. Existen varios firewalls y balanceadores, pero parte de su configuración se mantiene manualmente y no hay una CMDB fiable. En el último año se han producido dos incidencias graves: pérdida de conectividad por una obra que cortó fibra del operador y una saturación del almacenamiento que degradó las bases de datos.

La organización quiere una arquitectura con dos dominios de fallo reales, capacidad para mantener los servicios críticos ante pérdida de un CPD, doble conectividad de las sedes críticas y una operación más automatizada. Para el sistema de expedientes se fijan RTO 2 horas y RPO 15 minutos; para el portal público RTO 1 hora y RPO 30 minutos. El resto puede recuperarse en 24 horas. Los backups actuales son completos semanales e incrementales diarios, en un repositorio conectado al mismo directorio corporativo.

Se estudian tres opciones: ampliar ambos CPD propios, llevar parte de las cargas a nube pública o adoptar una solución híbrida. La decisión debe considerar coste total, dependencia de proveedor, capacidad interna, seguridad, reversibilidad y continuidad. El proyecto no puede interrumpir el servicio durante más de 4 horas en ninguna ventana planificada.

**Pregunta 1.** Realice un análisis de situación y riesgos, identificando dominios de fallo, puntos únicos, requisitos de disponibilidad/capacidad y criterios para comparar las alternativas on-premise, cloud e híbrida.

**Pregunta 2.** Proponga la arquitectura objetivo de CPD, virtualización, almacenamiento, red LAN/WAN e Internet. Justifique redundancia, routing, segmentación, balanceo, multipath, capacidad y cómo evitaría una falsa redundancia.

**Pregunta 3.** Diseñe la estrategia de alta disponibilidad, backup y recuperación ante desastre. Relacione replicación, tipos de copia, inmutabilidad/aislamiento, RPO/RTO, conmutación y pruebas de restauración/failback.

**Pregunta 4.** Defina la arquitectura de seguridad y operación: control de accesos, administración privilegiada, segmentación, cifrado, ENS, inventario/configuración, cambios, monitorización/observabilidad, SNMP/telemetría, logs y respuesta a incidentes.

**Pregunta 5.** Proponga una migración por fases que respete la ventana máxima de 4 horas. Incluya pruebas, rollback, aceptación, formación, gobierno del cambio, capacidad y un método de comparación económica/TCO de las tres alternativas.

No se incluye mapa temático. Decide qué conocimientos son pertinentes y cuáles serían ruido.

SIMULACRO 2 — Sustitución de legado frente a incidente de ciberseguridad

**Condiciones:** 180 minutos. Elija una sola opción (A o B). Responda sus 5 preguntas. La nota máxima del ejercicio es 50 puntos.

## Opción A — Sustitución de un sistema de expedientes de veinte años

Una agencia pública utiliza desde hace veinte años una aplicación cliente-servidor para gestionar expedientes internos. La aplicación tiene 480 pantallas, más de 300 informes, procesos batch nocturnos y numerosas reglas de negocio que no están documentadas. La base de datos contiene 22 millones de expedientes. Hay tablas con campos repetidos, códigos sin catálogo, duplicados y relaciones que solo existen en la lógica de la aplicación. Se intercambian ficheros CSV con otros cuatro sistemas. La interfaz no es accesible ni usable en dispositivos modernos.

La nueva solución será web y deberá exponer APIs para sustituir progresivamente los intercambios por fichero. Se desea mantener una base relacional para el núcleo transaccional, mejorar el modelo de datos y disponer de búsquedas e informes sin degradar el OLTP. La dirección exige una primera versión operativa en 12 meses, pero no acepta perder funcionalidad crítica ni datos históricos. Se permitirá una implantación piloto en dos unidades y coexistencia temporal.

A los seis meses de proyecto, el seguimiento económico muestra: PV = 420.000 €, EV = 360.000 € y AC = 450.000 €. El proveedor afirma que el proyecto está «al 70 %» porque ha consumido el 70 % del presupuesto previsto hasta ese momento. El comité solicita una evaluación objetiva del estado y un plan de recuperación.

**Pregunta 1.** Explique cómo realizaría la derivación de requisitos desde el sistema existente y cómo distinguiría reglas de negocio válidas de limitaciones heredadas. Defina entregables, priorización, prototipos y trazabilidad.

**Pregunta 2.** Proponga el rediseño de datos y de integración: modelo conceptual/lógico, normalización, integridad, concurrencia, índices, migración, reconciliación y sustitución de CSV por APIs o mensajería cuando proceda. Separe OLTP de necesidades analíticas.

**Pregunta 3.** Defina la arquitectura web y la estrategia de calidad: frontend/backend, identidad, seguridad, accesibilidad/usabilidad, internacionalización si fuese necesaria, pruebas de software, datos, procedimientos y rendimiento.

**Pregunta 4.** Calcule CV, SV, CPI y SPI a partir de PV=420.000 €, EV=360.000 € y AC=450.000 €. Interprete el resultado y explique por qué '70 % de presupuesto consumido' no demuestra 70 % de avance. Proponga medidas de gestión sin ocultar el problema.

**Pregunta 5.** Proponga la estrategia de implantación y sustitución: piloto, coexistencia, cutover, rollback, formación, soporte reforzado y evaluación postimplantación. Indique qué evidencias exigiría para aceptar la migración y retirar el legado.

No se incluye mapa temático. Decide qué conocimientos son pertinentes y cuáles serían ruido.

## Opción B — Robo de credenciales, exfiltración y ransomware

A las 06:40 el SOC detecta autenticaciones anómalas desde una VPN con la cuenta de un administrador. Veinte minutos después aparecen conexiones SMB inusuales entre servidores y varios endpoints comienzan a ejecutar procesos desconocidos. A las 07:25 usuarios informan de ficheros cifrados. El EDR ha aislado algunos equipos, pero dos servidores críticos no tienen agente actualizado. Los logs de VPN se conservan 30 días; los de algunos switches solo localmente. Existe SIEM, aunque varias fuentes no están integradas.

Los backups de servidores son diarios y los de base de datos permiten recuperación a puntos intermedios, pero la consola de backup usa credenciales del mismo directorio comprometido. Parte de las copias se replica a otro CPD, sin inmutabilidad. El responsable del servicio exige recuperar en menos de 6 horas, con pérdida máxima de 30 minutos para la base de datos principal. No se sabe todavía si hubo exfiltración de datos personales.

Una auditoría previa ya había advertido que las cuentas privilegiadas no tenían MFA y que la segmentación entre administración, servidores y usuarios era insuficiente. El plan de tratamiento no se había completado.

**Pregunta 1.** Organice las primeras dos horas del incidente: gobierno, clasificación, contención, comunicaciones y decisiones que permitan frenar el ataque sin destruir innecesariamente evidencia.

**Pregunta 2.** Describa la investigación técnica y forense: fuentes de evidencia, orden de adquisición, preservación, hashes/cadena de custodia y cómo determinaría vector inicial, movimiento lateral, persistencia y posible exfiltración.

**Pregunta 3.** Plantee la recuperación de los servicios y datos para intentar cumplir RTO 6 h/RPO 30 min. Explique cómo elegir un punto limpio y por qué réplica, snapshot o backup accesible con credenciales comprometidas no ofrecen las mismas garantías.

**Pregunta 4.** Rediseñe la arquitectura de seguridad tras el incidente: IAM/MFA/PAM, segmentación, administración, VPN/Zero Trust, EDR, SIEM/logs, gestión de vulnerabilidades, backup resistente a ransomware y controles ENS basados en riesgo.

**Pregunta 5.** Explique cómo convertiría lo ocurrido en un programa de mejora: análisis de riesgos, auditoría y evidencias, RCA/postmortem, priorización del plan de tratamiento, métricas y pruebas periódicas. Incluya consideraciones de protección de datos sin inventar hechos no confirmados.

No se incluye mapa temático. Decide qué conocimientos son pertinentes y cuáles serían ruido.

SIMULACRO 3 — Plataforma de datos frente a atención ciudadana omnicanal

**Condiciones:** 180 minutos. Elija una sola opción (A o B). Responda sus 5 preguntas. La nota máxima del ejercicio es 50 puntos.

## Opción A — Plataforma analítica para políticas públicas

Una secretaría de Estado quiere crear una plataforma de análisis para combinar datos de ocho sistemas transaccionales. Las fuentes incluyen bases relacionales, ficheros y eventos. Se generan aproximadamente 180 GB de datos brutos al día. Los analistas necesitan cuadros de mando diarios, análisis multidimensional, detección de anomalías y algunos modelos de clasificación. El dato transaccional original no debe verse degradado por las consultas analíticas.

La organización quiere conservar 90 días de datos en una capa de acceso rápido y varios años en una capa de menor coste. Para un cálculo preliminar, suponga que la compresión reduce el tamaño un 45 %, la capa rápida mantiene dos copias efectivas por redundancia y se desea un 30 % de margen de capacidad. La dirección ha oído hablar de Hadoop, Spark, NoSQL y lakehouse y pide «usar Big Data», aunque algunos conjuntos son claramente tabulares y relacionales.

Existen datos personales procedentes de varios organismos. Se exige catálogo, linaje, controles de acceso por perfil, calidad medible y trazabilidad de cada indicador hasta su fuente. Los cuadros de mando deben explicar la definición de cada KPI. Los modelos analíticos no tomarán decisiones automatizadas sobre derechos, pero pueden apoyar priorizaciones internas.

**Pregunta 1.** Diseñe la arquitectura de ingestión, almacenamiento, procesamiento y consumo distinguiendo OLTP, warehouse/lake, OLAP, batch/streaming y, cuando proceda, tecnologías distribuidas. Justifique qué no usaría por moda.

**Pregunta 2.** Proponga el modelo de datos y gobierno para BI: hechos/dimensiones o enfoque equivalente, calidad, metadatos, catálogo, linaje, definición de KPI, acceso y retención. Explique cómo evitaría afectar a las fuentes transaccionales.

**Pregunta 3.** Con los datos del enunciado, calcule una estimación de capacidad para 90 días en la capa rápida: 180 GB/día, reducción del 45 % por compresión, factor 2 por redundancia y 30 % de margen. Explique qué aspectos reales podrían hacer variar la cifra.

**Pregunta 4.** Plantee un caso de detección de anomalías o clasificación: objetivo, preparación de datos, train/validation/test, métricas, riesgo de data leakage/sesgo, explicabilidad y paso a producción. Diferencie minería de datos de OLAP.

**Pregunta 5.** Defina seguridad, privacidad, operación y proyecto: minimización/roles, cifrado, logs, calidad de pipelines, observabilidad, backups, continuidad, costes, pruebas, despliegue incremental y criterios para aceptar la plataforma.

No se incluye mapa temático. Decide qué conocimientos son pertinentes y cuáles serían ruido.

## Opción B — Centro de atención ciudadana omnicanal

Un organismo quiere sustituir tres centros de atención separados por una plataforma común. Habrá 600 agentes distribuidos entre dos sedes y teletrabajo. Los canales serán teléfono, web, formulario, chat y correo, integrados con CRM. El sistema debe enrutar contactos por motivo, idioma y competencias, permitir autoservicio mediante IVR y conservar el contexto cuando un ciudadano cambia de canal. Para determinados trámites, el agente consultará sistemas corporativos.

En hora punta se prevén 240 llamadas simultáneas. Para dimensionamiento simplificado, suponga 64 kbit/s de payload de voz por llamada y un 25 % adicional por cabeceras/overhead; añada después un 30 % de margen de ingeniería. Considere el cálculo por sentido. La voz comparte enlaces WAN con otras aplicaciones. Las sedes disponen de dos operadores, pero algunos enlaces entran por la misma canalización del edificio.

La plataforma debe ser accesible en los canales digitales, registrar interacciones con políticas de retención y proteger datos personales. El teletrabajo requiere autenticación fuerte y dispositivos gestionados. La dirección desea KPIs de servicio y continuidad ante pérdida de una sede.

**Pregunta 1.** Proponga la arquitectura funcional omnicanal: CRM, distribución de contactos, IVR/VoiceXML, CTI, canales digitales, contexto de cliente, integraciones y responsabilidades entre componentes.

**Pregunta 2.** Calcule el ancho de banda de voz aproximado para 240 llamadas simultáneas con los supuestos dados, por sentido, antes y después del margen del 30 %. Explique por qué QoS y capacidad deben diseñarse conjuntamente.

**Pregunta 3.** Diseñe la red y continuidad para las dos sedes y teletrabajo: WAN, diversidad física, routing/failover, VLAN/segmentación, SBC, QoS, acceso remoto y operación ante pérdida de una sede.

**Pregunta 4.** Defina seguridad, privacidad y accesibilidad: IAM/MFA, dispositivos/UEM, cifrado, registros, permisos, separación de datos, canales accesibles y controles sobre grabación/retención cuando proceda.

**Pregunta 5.** Proponga un cuadro de mando y plan de operación: KPIs de contact center y calidad técnica, SLI/SLO/SLA, monitorización, incidentes, capacidad, pruebas de continuidad y estrategia de implantación/formación de agentes.

No se incluye mapa temático. Decide qué conocimientos son pertinentes y cuáles serían ruido.

SIMULACRO 4 — Modernización cloud-native frente a transformación integral de un procedimiento

**Condiciones:** 180 minutos. Elija una sola opción (A o B). Responda sus 5 preguntas. La nota máxima del ejercicio es 50 puntos.

## Opción A — Modernización de una aplicación Java a plataforma de contenedores

Una aplicación Java empresarial presta un servicio público de consulta y tramitación. Está desplegada como una aplicación monolítica de tres capas sobre cuatro servidores. Tiene 65 módulos, una base relacional de 4 TB y 25 integraciones REST/SOAP. Durante tres campañas al año la carga se multiplica por seis. El despliegue mensual requiere una parada de 45 minutos porque la aplicación y algunas migraciones de base de datos se actualizan de forma conjunta. La cobertura de pruebas es desigual y existen dependencias antiguas.

El organismo ya dispone de una plataforma Kubernetes corporativa, un registro de imágenes y herramientas CI/CD, pero el equipo de desarrollo tiene poca experiencia operando microservicios. La dirección quiere «pasar a microservicios para escalar», mientras explotación teme multiplicar componentes, alertas y puntos de fallo. Se exige RTO 2 horas, RPO 15 minutos y disponibilidad 99,95 % durante campañas. La aplicación maneja datos personales y debe mantener trazabilidad completa.

Se consideran tres vías: contenerizar el monolito con refactorización modular, extraer solo dominios con necesidades de escalado independientes o descomponer todo en microservicios. La migración debe ser progresiva y no puede comprometer la campaña siguiente, dentro de nueve meses.

**Pregunta 1.** Compare críticamente las tres alternativas de arquitectura y seleccione una estrategia razonada. Use criterios de acoplamiento, escalado, consistencia, despliegue, operación, habilidades, riesgo y reversibilidad.

**Pregunta 2.** Diseñe la arquitectura de ejecución en contenedores: ingress/API, servicios, configuración/secretos, health checks, escalado, persistencia, red, observabilidad y alta disponibilidad. Explique qué aporta Kubernetes y qué problemas no resuelve por sí solo.

**Pregunta 3.** Defina la estrategia de datos e integraciones durante la modernización: transacciones, compatibilidad de esquemas, versionado de APIs, idempotencia, mensajería cuando proceda y patrones para migrar sin big bang.

**Pregunta 4.** Diseñe un pipeline DevSecOps y estrategia de pruebas/despliegue que reduzca la parada: artefactos reproducibles, SBOM/dependencias, SAST/SCA, tests, imágenes, IaC, canary/blue-green/rolling, migraciones de BD y rollback.

**Pregunta 5.** Proponga el plan de nueve meses: hitos y criterios go/no-go antes de campaña, capacidad/carga, RPO/RTO, seguridad, costes/TCO, formación del equipo, métricas de operación y evaluación postimplantación.

No se incluye mapa temático. Decide qué conocimientos son pertinentes y cuáles serían ruido.

## Opción B — Digitalización del procedimiento de inspecciones y autorizaciones

Una Administración gestiona autorizaciones e inspecciones mediante expedientes en papel, hojas de cálculo y correos. El procedimiento implica solicitud ciudadana, aportes de documentación, revisión administrativa, asignación de inspector, visita, acta, subsanación, resolución y notificación. Hay 120 inspectores que trabajan en movilidad; algunas zonas tienen conectividad deficiente. Los inspectores necesitan consultar expedientes, recoger datos y adjuntar fotografías, manteniendo trazabilidad. La ciudadanía debe poder iniciar y consultar el trámite por web.

Se quiere implantar expediente y documento electrónico, firma cuando corresponda, notificación, gestión de flujo, integración con servicios comunes y un repositorio documental. Parte de la información podría publicarse como datos abiertos agregados, pero los expedientes contienen datos personales. La aplicación móvil deberá permitir trabajo temporalmente offline y sincronización posterior sin producir duplicados o sobrescrituras silenciosas.

La organización tiene 14 meses para implantar el nuevo modelo. No existe todavía un catálogo completo de procedimientos ni reglas homogéneas entre unidades. El proyecto incluye cambio organizativo, formación y abandono progresivo del papel.

**Pregunta 1.** Modele el procedimiento objetivo y sus requisitos. Identifique actores, estados del expediente, documentos, reglas, excepciones, requisitos no funcionales y cómo realizaría la elicitación y homogeneización entre unidades.

**Pregunta 2.** Proponga la arquitectura de administración electrónica: portal, backend, workflow, gestor documental, identidad/firma, notificación, integraciones y expediente/documento electrónico. Explique dónde aplicaría interoperabilidad y trazabilidad.

**Pregunta 3.** Diseñe la solución móvil para inspectores: modelo online/offline, almacenamiento local, sincronización, conflictos, identidad, UEM/MDM, cifrado, borrado remoto, conectividad y protección del material capturado.

**Pregunta 4.** Defina el modelo de datos, seguridad, protección de datos, ENS/ENI y accesibilidad. Incluya control de concurrencia para evitar actualizaciones perdidas, auditoría, retención y criterios para publicar únicamente datos abiertos adecuados.

**Pregunta 5.** Proponga un plan de 14 meses: gobierno y metodología, piloto, migración de expedientes activos, pruebas de datos/procedimientos/accesibilidad, formación, soporte, métricas de adopción y estrategia de retirada del papel y herramientas dispersas.

No se incluye mapa temático. Decide qué conocimientos son pertinentes y cuáles serían ruido.

# Registro de simulacros

| Simulacro | Elegí | Tiempo | Técnica /30 | Análisis /10 | Sistemática /5 | Expresión /5 | Total /50 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 |  |  |  |  |  |  |  |
| 2 |  |  |  |  |  |  |  |
| 3 |  |  |  |  |  |  |  |  |
| 4 |  |  |  |  |  |  |  |  |

## Cuaderno de errores

| Error | Tipo | Por qué ocurrió | Regla que incorporo |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
