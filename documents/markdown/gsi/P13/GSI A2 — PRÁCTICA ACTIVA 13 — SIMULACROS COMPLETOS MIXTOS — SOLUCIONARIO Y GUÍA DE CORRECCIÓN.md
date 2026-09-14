GSI A2 — PRÁCTICA ACTIVA 13

SIMULACROS COMPLETOS MIXTOS

**Solucionario y guía de corrección**

4 simulacros · 8 respuestas modelo · corrección oficial /50

El objetivo es aprender a elegir, estructurar, justificar y no contradecirse.

# Marco de corrección

**Corrección global:** 30 puntos por aplicación de conocimientos técnicos, 10 por capacidad de análisis, 5 por sistemática y 5 por expresión escrita. Las respuestas siguientes son modelos de cobertura, no textos que deban memorizarse literalmente.

| Dimensión | Qué se busca | Qué penaliza |
| --- | --- | --- |
| **Técnica /30** | Corrección de conceptos, arquitectura/proceso completo, datos, seguridad, operación, pruebas y continuidad según el caso. | Errores conceptuales graves, omisiones nucleares, tecnologías incompatibles con la propia solución. |
| **Análisis /10** | Alternativas, trade-offs, riesgos, priorización y decisiones justificadas por requisitos. | Recetas universales, moda tecnológica, no explicar por qué. |
| **Sistemática /5** | Orden, hilo común entre cinco preguntas, supuestos declarados, diagramas/esquemas útiles. | Contradicciones, repetir lo mismo, mezclar capas y fases. |
| **Expresión /5** | Terminología precisa, frases claras, siglas explicadas, cálculos con unidades y conclusión. | Ambigüedad, frases telegráficas incomprensibles, introducciones vacías. |

**Umbral de entrenamiento:** 25/50 es el mínimo de referencia, pero un simulacro debe considerarse “consolidado” cuando puedes superar 35/50 sin consultar apuntes y sin cometer contradicciones críticas.

## Escala orientativa de autocorrección

| Rango | Lectura |
| --- | --- |
| 45-50 | Respuesta muy sólida: completa, priorizada, coherente y con trade-offs claros. |
| 38-44 | Nivel fuerte: algún hueco menor, pero arquitectura y razonamiento maduros. |
| 30-37 | Aprobable con margen limitado: conceptos correctos, pero faltan profundidad o integración. |
| 25-29 | Aprobado frágil: cualquier error grave puede dejarlo por debajo. |
| <25 | Requiere reescritura estructural, no solo añadir detalles. |

Corrección — SIMULACRO 1 — Servicio público digital frente a modernización de infraestructura

## Opción A — Nueva plataforma de ayudas y subvenciones

**Mapa temático oculto:** Bloque I (administración electrónica, identificación/firma, protección de datos, ENS/ENI y servicios comunes); II.05-II.07, II.10, II.15-II.16; III.01-III.04, III.06-III.08, III.12-III.14; IV.03-IV.04/IV.06.

**Qué está buscando el corrector:** Se busca una solución de servicio público completa, no una decisión de framework. Debe existir continuidad lógica entre requisitos, arquitectura, datos/documentos, seguridad, accesibilidad, pruebas, migración y operación.

### Arquitectura mental antes de escribir

Ciudadanía/representante → portal accesible → identidad/firma → API/backend modular → workflow/expediente → BD + gestor documental → servicios comunes; transversal: seguridad, observabilidad, CI/CD, backup/DR.

### Pregunta 1 — Identifique y priorice los requisitos funcionales, no funcionales, restricciones y actores principales. Proponga cómo obtendría, especificaría y mantendría la trazabilidad de los requisitos, incluyendo los derivados del sistema actual.

Distinguir actores: ciudadanía, representante, tramitador, responsable/unidad, administración del sistema y sistemas externos. Requisitos funcionales: borrador, presentación, anexos, firma cuando proceda, registro/justificante, consulta de estado, subsanación, tramitación por estados, notificación e integración. NFR medibles: 99,9 %, p95 <2 s bajo carga definida, concurrencia, RTO 4 h/RPO 30 min, seguridad, accesibilidad, auditabilidad, escalabilidad, mantenibilidad y reversibilidad. Restricciones: servicios comunes, gestor documental corporativo, datos históricos y explotación interna. Elicitación con entrevistas/talleres, observación, análisis documental y del sistema actual, logs/datos, prototipos y mapa as-is/to-be. Separar requisito real de limitación heredada. SRS/backlog con criterios de aceptación y matriz necesidad→requisito→diseño→prueba→release.

### Pregunta 2 — Proponga la arquitectura lógica de la solución y justifique si utilizaría monolito modular, microservicios u otra combinación. Describa capas/componentes, integraciones, persistencia, gestión documental, flujo de expediente y mecanismos de escalado y disponibilidad.

Arquitectura por capas: front web responsive/accesible; API/backend; módulos de negocio; motor de workflow o gestión de estados; adaptadores a identidad/firma/registro/notificación y otras consultas; gestor documental externo; BD relacional para transacciones; caché/broker solo si resuelven requisitos; observabilidad transversal. No aceptar 'microservicios' como requisito: con 10 meses, equipo Java y dominio aún por estabilizar, un monolito modular desplegado en contenedores puede reducir complejidad y preservar límites claros; extraer servicios solo cuando haya escalado, ciclo de vida o aislamiento de fallo independiente. Balanceo/replicas stateless y escalado horizontal; BD con HA/backup/PITR según RPO/RTO. Contratos versionados e idempotencia en presentación/notificación para evitar dobles efectos.

### Pregunta 3 — Defina el modelo de seguridad y cumplimiento: identificación y firma, autorización, protección de datos, seguridad de aplicación, ENS/ENI cuando procedan, accesibilidad y evidencias de auditoría. Indique además qué controles deben integrarse desde el desarrollo.

Identidad/firma mediante servicios corporativos aplicables y autorización por roles/atributos; mínimo privilegio y segregación. TLS, gestión de secretos, validación server-side, parametrización, control de acceso, protección de sesión/tokens, rate limiting, logging sin exponer datos y seguridad de dependencias. Protección de datos desde diseño: finalidad, minimización, acceso, retención y trazabilidad. ENS basado en riesgo y ENI/NTI/interoperabilidad cuando proceda; expediente/documento con metadatos y evidencias. Accesibilidad desde requisitos: HTML semántico, teclado/foco, labels/errores, contraste, alternativas y pruebas automáticas+manuales; no dejarla para el final. Auditoría de acciones relevantes con identidad, fecha, acción y resultado, protegiendo logs. DevSecOps con SAST/SCA/secret scanning e infraestructura/configuración revisable.

### Pregunta 4 — Plantee la estrategia de construcción, integración continua, pruebas, despliegue y transición a operación. Debe contemplar pruebas funcionales y no funcionales, datos de prueba, accesibilidad, seguridad, rendimiento, recuperación y rollback.

Pipeline: control de versiones→build reproducible→análisis estático/SAST/SCA→unitarias→integración/API→empaquetado/imagen→pruebas sistema→performance/security/accessibility→promoción del mismo artefacto. Datos sintéticos/anonimizados cuando sea viable; datasets versionados. Pruebas de software, datos migrados, procedimientos (backup/restore, cambio, certificados, DR) y aceptación. Carga/estrés/soak en campaña; accesibilidad automática+manual; DAST/pentest según riesgo. Despliegue rolling/blue-green/canary si arquitectura lo permite; migraciones de BD compatibles hacia delante/atrás o expand-contract. Health checks y observabilidad. Rollback ensayado; no asumir que revertir binario revierte esquema.

### Pregunta 5 — Proponga el plan de implantación y migración en 10 meses: metodología y gobierno, hitos, estrategia de sustitución, migración/reconciliación de datos, formación, gestión de riesgos y métricas de éxito postimplantación. Incluya cómo analizaría viabilidad/TCO y reversibilidad.

Gobierno híbrido: hitos/aceptación formal + construcción iterativa de 6-8 semanas. WBS/backlog, riesgos, dependencias, criterios de calidad y releases. Piloto funcional temprano y pruebas de integración. Migración: inventario, mapping, limpieza, cargas de ensayo, conteos/control totals, muestreo e integridad referencial; decidir histórico completo o acceso legado justificado. Sustitución por piloto/fases antes que big bang si riesgo alto. Plan de cutover, backup, go/no-go, rollback, comunicación y hypercare. Formación por perfiles y runbooks para explotación. Viabilidad/TCO: desarrollo, infraestructura/cloud, licencias, operación, soporte, salida de datos, skills y coste de cambio. Reversibilidad: estándares/contratos, datos exportables, IaC, artefactos y documentación. KPIs: éxito de presentación, tiempos, errores, disponibilidad, p95, incidencias, adopción y coste.

### Errores que bajan mucho la nota

* Dar por obligatorio microservicios/cloud sin análisis.
* Confundir firma con autenticación o creer que HTTPS resuelve seguridad de aplicación.
* Olvidar gestor documental/expediente, accesibilidad o trazabilidad.
* Proponer CI/CD sin pruebas de datos/procedimientos/recuperación.
* Prometer RPO/RTO solo con réplica sin backup probado.

### Detalles de respuesta alta

* Explicitar un 'mapa de responsabilidades' por componente y los flujos críticos de presentación/subsanación/notificación.
* Relacionar cada NFR con una prueba o SLI verificable.
* Defender una arquitectura más simple si satisface los requisitos, en lugar de usar moda tecnológica.

### Autocorrección específica

| Chequeo | Sí/No |
| --- | --- |
| He respondido exactamente a las cinco preguntas, sin convertir una de ellas en un tema genérico. |  |
| Mis decisiones de arquitectura, datos, seguridad y operación no se contradicen entre preguntas. |  |
| Cada tecnología o técnica nombrada tiene una razón vinculada al enunciado. |  |
| He distinguido hechos, supuestos y alternativas. |  |
| He incluido pruebas/evidencias de que la solución funcionaría, no solo diseño. |  |

## Opción B — Consolidación de dos CPD y treinta sedes

**Mapa temático oculto:** II.08, II.10, II.15; IV.01-IV.13, especialmente IV.03-IV.06, IV.09-IV.12.

**Qué está buscando el corrector:** Debe mostrarse pensamiento por dominios de fallo, no por número de dispositivos. La elección cloud/híbrida debe tratar responsabilidad, reversibilidad, coste y operación.

### Arquitectura mental antes de escribir

Sedes/Internet → WAN redundante → CPD A/B como dominios de fallo → compute/storage/BD → HA/DR; transversal: IAM/PAM, configuración, observabilidad, backup, capacity.

### Pregunta 1 — Realice un análisis de situación y riesgos, identificando dominios de fallo, puntos únicos, requisitos de disponibilidad/capacidad y criterios para comparar las alternativas on-premise, cloud e híbrida.

Inventariar servicios, dependencias, criticidad, cargas, crecimiento, capacidad de compute/storage/red, contratos, soporte y skills. Fallos actuales: CPD B no es necesariamente sitio DR operativo; MPLS único y posible canalización común; Internet único desde A; SAN/capacidad; configuración manual/CMDB pobre; backups bajo mismo dominio de identidad. Modelar riesgo activo→amenaza→vulnerabilidad→impacto→salvaguarda→residual. Criterios para alternativas: RPO/RTO, disponibilidad, latencia, cumplimiento, datos, escalabilidad, CAPEX/OPEX/TCO, skills, lock-in/salida, conectividad, responsabilidad compartida y capacidad de operar/failback.

### Pregunta 2 — Proponga la arquitectura objetivo de CPD, virtualización, almacenamiento, red LAN/WAN e Internet. Justifique redundancia, routing, segmentación, balanceo, multipath, capacidad y cómo evitaría una falsa redundancia.

Dos CPD como dominios de fallo con compute, alimentación, red y almacenamiento redundantes; capacidad N+1/evacuación. Storage dimensionado por IOPS/throughput/latencia y crecimiento, RAID/multipath/fabrics redundantes. LAN segmentada y L3 donde reduzca dominios de fallo. Sedes críticas con dos underlays físicamente diversos si es posible; SD-WAN/MPLS/Internet+VPN según SLA, no por nombre. Routing/failover probado. Internet redundante, DNS/balanceo y DMZ. Evitar falsa redundancia de dos contratos sobre la misma acometida. En nube/híbrido, conectar de forma redundante y asumir límites/egress/latencia.

### Pregunta 3 — Diseñe la estrategia de alta disponibilidad, backup y recuperación ante desastre. Relacione replicación, tipos de copia, inmutabilidad/aislamiento, RPO/RTO, conmutación y pruebas de restauración/failback.

HA local: cluster/balanceo/replicación para fallo de componente. DR: pérdida de sitio, con segundo CPD preparado y runbook. Para RPO 15 min, replicación o log shipping/PITR frecuente según datos; RTO 1-2 h exige capacidad disponible y automatización. Backup: completas/incrementales o estrategia equivalente, copias fuera del fallo común, credenciales separadas, inmutabilidad/offline según riesgo y restore tests. Réplica/snapshot/RAID no son backup. Definir orden de recuperación, DNS/routing, identidades/certificados, conmutación, validación y failback. Ensayos integrales periódicos miden RPO/RTO reales.

### Pregunta 4 — Defina la arquitectura de seguridad y operación: control de accesos, administración privilegiada, segmentación, cifrado, ENS, inventario/configuración, cambios, monitorización/observabilidad, SNMP/telemetría, logs y respuesta a incidentes.

IAM/MFA, PAM/bastión, cuentas nominativas, red de gestión, TLS/cifrado, mínimo privilegio, segmentación/DMZ/firewalls, EDR y SIEM. ENS: medidas en función de categoría/riesgo y responsabilidades. Inventario/CMDB con descubrimiento fiable; baseline y config-as-code. Cambios con RFC/impacto/prueba/rollback; versiones de configuración/IaC. NMS, SNMPv3, syslog, flows/telemetría, métricas/logs/trazas, SLI/SLO, alertas accionables y capacity planning. Gestión de incidentes y postmortem. Backups de configuración y certificados.

### Pregunta 5 — Proponga una migración por fases que respete la ventana máxima de 4 horas. Incluya pruebas, rollback, aceptación, formación, gobierno del cambio, capacidad y un método de comparación económica/TCO de las tres alternativas.

Migración por servicio/oleadas, piloto y coexistencia. Baseline de rendimiento, réplica/copia inicial, sincronización delta y ventanas; plan minuto a minuto y punto de no retorno. Pruebas: HA, fallo de enlaces, restore, DR, carga, seguridad y procedimientos. Rollback ensayado. Aceptación por SLO/RPO/RTO, defectos, documentación y runbooks. TCO a horizonte: hardware/amortización, energía/CPD, licencias, conectividad, personal, soporte, cloud compute/storage/egress, backup, DR y coste de salida. Formación y transferencia de conocimiento. Mantener 4 h como restricción de cutover, no como RTO universal.

### Errores que bajan mucho la nota

* Contar 'dos CPD' como DR sin demostrar independencia y capacidad.
* Confundir MPLS con cifrado o dos operadores con diversidad física.
* Dimensionar storage solo por TB y no por IOPS/latencia.
* Usar cloud como transferencia automática de responsabilidad.
* Olvidar failback y restauraciones reales.

### Autocorrección específica

| Chequeo | Sí/No |
| --- | --- |
| He respondido exactamente a las cinco preguntas, sin convertir una de ellas en un tema genérico. |  |
| Mis decisiones de arquitectura, datos, seguridad y operación no se contradicen entre preguntas. |  |
| Cada tecnología o técnica nombrada tiene una razón vinculada al enunciado. |  |
| He distinguido hechos, supuestos y alternativas. |  |
| He incluido pruebas/evidencias de que la solución funcionaría, no solo diseño. |  |

Corrección — SIMULACRO 2 — Sustitución de legado frente a incidente de ciberseguridad

## Opción A — Sustitución de un sistema de expedientes de veinte años

**Mapa temático oculto:** III.02-III.04, III.06-III.08, III.12-III.14; II.05, II.06, II.15.

**Qué está buscando el corrector:** Este caso premia ingeniería de sustitución del legado: derivar requisitos, sanear datos, separar OLTP/analítica y medir avance objetivamente.

### Arquitectura mental antes de escribir

Legado/as-is → requisitos y modelo objetivo → web/API → datos normalizados + analítica separada → migración piloto/fases → aceptación/retirada.

### Pregunta 1 — Explique cómo realizaría la derivación de requisitos desde el sistema existente y cómo distinguiría reglas de negocio válidas de limitaciones heredadas. Defina entregables, priorización, prototipos y trazabilidad.

Derivación mediante inventario de pantallas, informes, batches, reglas, roles, interfaces, datos y excepciones; entrevistas/observación de usuarios, logs, código y documentación; talleres as-is/to-be. Clasificar cada comportamiento como obligación legal/negocio, necesidad operativa o limitación/deuda heredada. Prototipos para procesos inciertos y accesibilidad. Catálogo de requisitos funcionales/NFR/migración, prioridades por valor-riesgo-obligación y criterios de aceptación. Matriz bidireccional requisito→regla/dato/interfaz→diseño→prueba. No copiar 480 pantallas uno-a-uno.

### Pregunta 2 — Proponga el rediseño de datos y de integración: modelo conceptual/lógico, normalización, integridad, concurrencia, índices, migración, reconciliación y sustitución de CSV por APIs o mensajería cuando proceda. Separe OLTP de necesidades analíticas.

Modelo conceptual desde dominio, luego lógico relacional con PK/FK, integridad y normalización; catálogos para códigos, eliminación de grupos repetidos/duplicados y restricciones universales en BD. Concurrencia: identificar transacciones críticas y riesgo de lost update; bloqueo/MVCC/control optimista según conflicto, transacciones cortas. Índices por consultas medidas. Migración con profiling, mapping, reglas, staging, limpieza, cargas repetibles, conteos/sumas/control totals, muestreo, integridad referencial y registro de excepciones. APIs versionadas para integraciones síncronas; mensajería si desacoplamiento/asíncrono aporta valor; idempotencia/reintentos. Analítica fuera del OLTP mediante réplica/ETL/warehouse para informes pesados.

### Pregunta 3 — Defina la arquitectura web y la estrategia de calidad: frontend/backend, identidad, seguridad, accesibilidad/usabilidad, internacionalización si fuese necesaria, pruebas de software, datos, procedimientos y rendimiento.

Web responsive con front semántico y backend por capas/módulos, APIs y autenticación/autorización central. Seguridad server-side, TLS, secretos, validación, acceso mínimo, logging y dependencias. Accesibilidad desde requisitos, no como parche: teclado, foco, labels, errores, contraste, reflow y revisión manual. Usabilidad con tareas/prototipos/pruebas de usuario. Estrategia de pruebas: unit/integración/sistema/aceptación; datos sintéticos o controlados; reconciliación de migración; performance p95/p99; seguridad; accesibilidad; compatibilidad; procedimientos de batch, backup/restore y cutover. Criterios de salida por riesgo.

### Pregunta 4 — Calcule CV, SV, CPI y SPI a partir de PV=420.000 €, EV=360.000 € y AC=450.000 €. Interprete el resultado y explique por qué '70 % de presupuesto consumido' no demuestra 70 % de avance. Proponga medidas de gestión sin ocultar el problema.

CV=EV-AC=360.000-450.000=-90.000 €: sobrecoste respecto al valor realizado. SV=EV-PV=360.000-420.000=-60.000 €: retraso en valor frente al plan. CPI=EV/AC=0,80: por cada euro gastado se obtiene 0,80 € de valor presupuestado. SPI=EV/PV≈0,857: avance por debajo del plan. Consumir 70 % del presupuesto no equivale a completar 70 % del alcance: el gasto es AC, no EV. Medidas: revisar WBS/criterios de EV, camino crítico y dependencias, causas, alcance/riesgos, reestimación transparente, priorización y plan de recuperación; no manipular baseline para 'arreglar' indicadores.

### Pregunta 5 — Proponga la estrategia de implantación y sustitución: piloto, coexistencia, cutover, rollback, formación, soporte reforzado y evaluación postimplantación. Indique qué evidencias exigiría para aceptar la migración y retirar el legado.

Elegir piloto en dos unidades + fases y coexistencia controlada; limitar doble captura mediante reglas de sistema maestro. Cutover: congelación, backup, carga delta, reconciliación, cambio de interfaces/DNS si aplica, smoke tests y go/no-go. Rollback con punto de no retorno y datos escritos durante ventana. Hypercare y soporte L1/L2/L3. Formación por perfiles. Evidencia de aceptación: cobertura de requisitos, migración completa/exacta, reglas, interfaces, rendimiento, seguridad, accesibilidad, procedimientos y defectos residuales acordados. Retirada: conservación legal, exportación, revocar accesos, cerrar integraciones y documentar.

### Errores que bajan mucho la nota

* Confundir AC con porcentaje físico de avance.
* Normalizar sin conectar con reglas de negocio o, al contrario, replicar el esquema defectuoso.
* Decir 'API REST' sin contratos/versionado/idempotencia.
* Probar solo software y olvidar datos/procedimientos.
* Hacer big bang pese a que el enunciado ofrece piloto/coexistencia.

### Detalles de respuesta alta

* En la respuesta EVM, escribir las cuatro fórmulas, signo e interpretación operativa.
* Separar explícitamente 'requisito real' de 'comportamiento legado'.
* Definir pruebas de reconciliación concretas, no solo 'validar datos'.

### Autocorrección específica

| Chequeo | Sí/No |
| --- | --- |
| He respondido exactamente a las cinco preguntas, sin convertir una de ellas en un tema genérico. |  |
| Mis decisiones de arquitectura, datos, seguridad y operación no se contradicen entre preguntas. |  |
| Cada tecnología o técnica nombrada tiene una razón vinculada al enunciado. |  |
| He distinguido hechos, supuestos y alternativas. |  |
| He incluido pruebas/evidencias de que la solución funcionaría, no solo diseño. |  |

## Opción B — Robo de credenciales, exfiltración y ransomware

**Mapa temático oculto:** II.10-II.13; I.07/I.09; IV.03-IV.04, IV.09, IV.12; III.07 para pruebas de procedimientos.

**Qué está buscando el corrector:** Se evalúa respuesta a incidente, forense y recuperación segura; recuperar rápido sin erradicar o preservar evidencia puede empeorar el incidente.

### Arquitectura mental antes de escribir

Detección → contención → preservación/adquisición → análisis → erradicación → recuperación limpia → mejora del riesgo/controles.

### Pregunta 1 — Organice las primeras dos horas del incidente: gobierno, clasificación, contención, comunicaciones y decisiones que permitan frenar el ataque sin destruir innecesariamente evidencia.

Declarar incidente mayor y canal de mando; registrar timeline; confirmar alcance inicial; preservar comunicaciones. Contener: aislar endpoints/servidores afectados, bloquear IoCs/cuentas/tokens y revisar VPN, cortar movimiento lateral, proteger backups. No apagar indiscriminadamente si destruye evidencia volátil: priorizar seguridad/contención y documentar decisiones. Activar responsables de servicio, seguridad, infraestructura, legal/protección de datos según hechos. Comunicar con cadencia y separar hechos de hipótesis. Congelar cambios no esenciales.

### Pregunta 2 — Describa la investigación técnica y forense: fuentes de evidencia, orden de adquisición, preservación, hashes/cadena de custodia y cómo determinaría vector inicial, movimiento lateral, persistencia y posible exfiltración.

Fuentes: VPN/IAM/AD, EDR, firewall/proxy/DNS, SIEM, servidores, SMB, tareas/servicios, correo, backups, switches/flows, endpoints y cloud si existe. Orden de volatilidad: memoria/procesos/conexiones cuando sea relevante antes de disco; imágenes forenses o adquisición proporcional. Hash para integridad, identificación de custodios y cadena de custodia. Construir timeline: primer acceso, privilegios, movimiento lateral, persistencia, cifrado y conexiones externas. Buscar volumen/destinos de egress y accesos a datos. Ausencia de log no demuestra ausencia de exfiltración.

### Pregunta 3 — Plantee la recuperación de los servicios y datos para intentar cumplir RTO 6 h/RPO 30 min. Explique cómo elegir un punto limpio y por qué réplica, snapshot o backup accesible con credenciales comprometidas no ofrecen las mismas garantías.

Antes de restaurar: erradicar vector/persistencia, rotar credenciales/secretos, validar entorno limpio. BD: usar logs/PITR para seleccionar punto anterior al daño dentro de RPO; verificar lag y consistencia. Backup diario puede no cumplir RPO 30 min sin logs. Réplica puede replicar cifrado/borrado; snapshot puede estar en mismo dominio; backup con credenciales comprometidas puede ser destruido. Recuperar por prioridad desde baseline confiable, validar datos y función, reabrir segmentos progresivamente. RTO real se mide hasta servicio validado, no hasta encender VM.

### Pregunta 4 — Rediseñe la arquitectura de seguridad tras el incidente: IAM/MFA/PAM, segmentación, administración, VPN/Zero Trust, EDR, SIEM/logs, gestión de vulnerabilidades, backup resistente a ransomware y controles ENS basados en riesgo.

MFA obligatoria en privilegiadas y acceso remoto; PAM/bastión/JIT cuando proceda, cuentas separadas y mínimo privilegio. Segmentar usuarios/servidores/administración/backup; NAC y controles interzona. VPN/Zero Trust con identidad, dispositivo y contexto; EDR/UEM actualizado y cobertura. SIEM con fuentes críticas, retención, sincronización temporal y casos de uso. Vulnerability/patch management. Backups con identidad separada, inmutabilidad/offline, MFA y restore tests. ENS: gestión basada en riesgo, líneas de defensa, vigilancia continua y responsabilidades. Logs protegidos y administración segura.

### Pregunta 5 — Explique cómo convertiría lo ocurrido en un programa de mejora: análisis de riesgos, auditoría y evidencias, RCA/postmortem, priorización del plan de tratamiento, métricas y pruebas periódicas. Incluya consideraciones de protección de datos sin inventar hechos no confirmados.

Actualizar análisis de riesgos y tratar hallazgos previos como evidencia de riesgo no resuelto. Auditoría: alcance/criterio/evidencia/hallazgo/remediación/seguimiento. RCA sobre causas técnicas y organizativas; postmortem con timeline, impacto y acciones responsables/plazo. Priorizar controles por reducción de riesgo, criticidad y dependencia: identidad/segmentación/backups/logging primero si son causas relevantes. Métricas: MFA/privilegios, cobertura EDR/logs, edad de vulnerabilidades, restore success, MTTD/MTTR con definición, ejercicios. Protección de datos: evaluar si existe brecha y su riesgo con el procedimiento aplicable; no afirmar exfiltración ni obligaciones concretas sin evidencia.

### Errores que bajan mucho la nota

* Reiniciar/restaurar todo inmediatamente sin contener ni erradicar.
* Decir que el hash 'crea' cadena de custodia.
* Suponer que réplica = backup.
* Afirmar que no hubo exfiltración porque no hay log.
* Plantear Zero Trust como un producto o una VPN concreta.

### Autocorrección específica

| Chequeo | Sí/No |
| --- | --- |
| He respondido exactamente a las cinco preguntas, sin convertir una de ellas en un tema genérico. |  |
| Mis decisiones de arquitectura, datos, seguridad y operación no se contradicen entre preguntas. |  |
| Cada tecnología o técnica nombrada tiene una razón vinculada al enunciado. |  |
| He distinguido hechos, supuestos y alternativas. |  |
| He incluido pruebas/evidencias de que la solución funcionaría, no solo diseño. |  |

Corrección — SIMULACRO 3 — Plataforma de datos frente a atención ciudadana omnicanal

## Opción A — Plataforma analítica para políticas públicas

**Mapa temático oculto:** II.04-II.05, II.10; III.04, III.05, III.13, III.15; IV.04-IV.05.

**Qué está buscando el corrector:** Debe elegirse arquitectura de datos por patrones y SLA. El cálculo de capacidad es simple, pero se valora explicar supuestos y gobierno.

### Arquitectura mental antes de escribir

Fuentes OLTP → ingestión/CDC/eventos → raw/curado → procesamiento batch/stream → warehouse/lake → BI/ML; transversal: catálogo, linaje, calidad, privacidad, coste.

### Pregunta 1 — Diseñe la arquitectura de ingestión, almacenamiento, procesamiento y consumo distinguiendo OLTP, warehouse/lake, OLAP, batch/streaming y, cuando proceda, tecnologías distribuidas. Justifique qué no usaría por moda.

Separar fuentes OLTP de plataforma analítica mediante extracción/CDC/eventos sin consultas pesadas directas. Zona de ingestión/raw para trazabilidad, transformación/curado, warehouse o modelo analítico para BI y capa de consumo. Batch para cierres diarios; streaming solo para casos que necesitan baja latencia. Hadoop/Spark/objeto pueden ser razonables si volumen/variedad/distribución lo justifican, pero no desplazar BD relacional para datos curados tabulares por moda. NoSQL solo si patrón de acceso/esquema/escala lo requiere. Orquestación, catálogo, calidad y observabilidad transversales.

### Pregunta 2 — Proponga el modelo de datos y gobierno para BI: hechos/dimensiones o enfoque equivalente, calidad, metadatos, catálogo, linaje, definición de KPI, acceso y retención. Explique cómo evitaría afectar a las fuentes transaccionales.

Para BI, modelo dimensional con hechos (medidas/eventos) y dimensiones/jerarquías cuando encaje; claves, dimensiones conformadas y granularidad definida. SCD si se necesita historia de atributos. KPI debe incluir fórmula, unidad, población, frecuencia, propietario y fuente. Catálogo/metadata/linaje desde fuente→transformación→dataset→dashboard. Reglas de calidad: completitud, exactitud, unicidad, validez, consistencia y frescura con umbrales. Acceso RBAC/ABAC por dominio, retención y ownership. Separar cómputo analítico de OLTP mediante ETL/ELT/replicas/CDC.

### Pregunta 3 — Con los datos del enunciado, calcule una estimación de capacidad para 90 días en la capa rápida: 180 GB/día, reducción del 45 % por compresión, factor 2 por redundancia y 30 % de margen. Explique qué aspectos reales podrían hacer variar la cifra.

Cálculo: 180 GB/día × 90 = 16.200 GB brutos. Tras reducción del 45 %, queda el 55 %: 16.200×0,55 = 8.910 GB. Redundancia efectiva factor 2: 17.820 GB. Margen 30 %: 17.820×1,30 = 23.166 GB, aproximadamente 23,2 TB decimales. En realidad variará por compresión por tipo de dato, metadatos/índices, formatos, particiones, small files, snapshots, replicación real, crecimiento, staging, temporales, retención y unidades TB/TiB.

### Pregunta 4 — Plantee un caso de detección de anomalías o clasificación: objetivo, preparación de datos, train/validation/test, métricas, riesgo de data leakage/sesgo, explicabilidad y paso a producción. Diferencie minería de datos de OLAP.

Ejemplo anomalías: definir evento anómalo y coste de falsos positivos/negativos. Preparar/limpiar datos y features; split train/validation/test temporal cuando corresponda; evitar leakage (información futura/test en entrenamiento). Elegir algoritmo según tarea y baseline; métricas precision/recall/F1 y matriz de confusión si desbalance, no solo accuracy. Evaluar sesgo por grupos relevantes, explicabilidad, drift y supervisión humana. Desplegar pipeline versionado, monitorizar datos/modelo y rollback. OLAP explora/agrega dimensiones y medidas; minería construye patrones/modelos predictivos/descriptivos.

### Pregunta 5 — Defina seguridad, privacidad, operación y proyecto: minimización/roles, cifrado, logs, calidad de pipelines, observabilidad, backups, continuidad, costes, pruebas, despliegue incremental y criterios para aceptar la plataforma.

Privacidad por finalidad/minimización, roles, pseudonimización cuando proceda, cifrado y segregación. Logging/auditoría sin exponer datos. Seguridad de pipelines/secretos. Operación: freshness, fallos de ingestión, lag, calidad, volumen, coste, capacidad, lineage y SLO de dashboards. Backups/replicación según criticidad y restauración probada. Proyecto incremental por dominios/indicadores, con pruebas de datos, performance y seguridad. Aceptación: reconciliación con fuentes, KPI validados por negocio, calidad mínima, latencia/frescura, costes y runbooks.

### Errores que bajan mucho la nota

* Proponer Hadoop/Spark/NoSQL solo porque hay 180 GB/día.
* Mezclar OLTP y dashboard pesado en la misma carga sin aislamiento.
* Calcular 45 % como tamaño restante en vez de reducción.
* Confundir OLAP con data mining.
* Usar accuracy como única métrica con clase rara.

### Autocorrección específica

| Chequeo | Sí/No |
| --- | --- |
| He respondido exactamente a las cinco preguntas, sin convertir una de ellas en un tema genérico. |  |
| Mis decisiones de arquitectura, datos, seguridad y operación no se contradicen entre preguntas. |  |
| Cada tecnología o técnica nombrada tiene una razón vinculada al enunciado. |  |
| He distinguido hechos, supuestos y alternativas. |  |
| He incluido pruebas/evidencias de que la solución funcionaría, no solo diseño. |  |

## Opción B — Centro de atención ciudadana omnicanal

**Mapa temático oculto:** II.12; IV.08-IV.16; I.07; III.12/III.14.

**Qué está buscando el corrector:** Debe integrarse tecnología de contact center con red/voz, seguridad, accesibilidad, métricas y continuidad. El cálculo prueba que el candidato sabe dimensionar sin olvidar overhead/margen.

### Arquitectura mental antes de escribir

Canales → ACD/IVR/CTI → CRM/agente → sistemas corporativos; debajo: SIP/RTP/SBC + WAN/QoS; transversal: IAM, UEM, accesibilidad, KPIs, continuidad.

### Pregunta 1 — Proponga la arquitectura funcional omnicanal: CRM, distribución de contactos, IVR/VoiceXML, CTI, canales digitales, contexto de cliente, integraciones y responsabilidades entre componentes.

Componentes: canales→plataforma de contacto/ACD→cola/enrutamiento por skills/idioma/prioridad→agente; CRM como contexto/historial; CTI integra telefonía y escritorio; IVR recoge opciones y puede usar DTMF/ASR/TTS según diseño; VoiceXML como tecnología de diálogo/voz donde aplique. Integración con sistemas corporativos mediante APIs controladas. Omnicanal conserva identidad/contexto entre canales; no es simplemente tener muchos canales separados. Recording/transcripción si se requiere con gobierno. APIs/eventos para desacoplar, trazabilidad de interacción y fallback.

### Pregunta 2 — Calcule el ancho de banda de voz aproximado para 240 llamadas simultáneas con los supuestos dados, por sentido, antes y después del margen del 30 %. Explique por qué QoS y capacidad deben diseñarse conjuntamente.

Payload: 240×64 kbit/s = 15.360 kbit/s = 15,36 Mbit/s por sentido. Con 25 % overhead: 15,36×1,25 = 19,20 Mbit/s por sentido. Con 30 % margen: 19,20×1,30 = 24,96 Mbit/s, aproximadamente 25 Mbit/s por sentido solo para esa voz según supuestos. Debe añadirse señalización y resto de servicios. QoS clasifica/prioriza en congestión pero no crea ancho de banda; dimensionar capacidad, shaping/colas y medir latencia/jitter/pérdida extremo a extremo.

### Pregunta 3 — Diseñe la red y continuidad para las dos sedes y teletrabajo: WAN, diversidad física, routing/failover, VLAN/segmentación, SBC, QoS, acceso remoto y operación ante pérdida de una sede.

Dos underlays/operadores con rutas físicas realmente diversas; la misma canalización sigue siendo fallo común. Routing/failover o SD-WAN si aporta selección por SLA. VLAN voz y segmentación de agentes/gestión; SBC en frontera SIP/medios; TLS/SRTP cuando aplique. QoS coherente LAN-WAN. Sedes con capacidad de operar si una cae: reparto de agentes, servicios redundantes/cloud/on-prem según arquitectura, DNS/routing. Teletrabajo con acceso remoto fuerte, UEM, postura y segmentación. Monitorizar MOS/jitter/perdida, trunks, SBC, enlaces y colas.

### Pregunta 4 — Defina seguridad, privacidad y accesibilidad: IAM/MFA, dispositivos/UEM, cifrado, registros, permisos, separación de datos, canales accesibles y controles sobre grabación/retención cuando proceda.

IAM/SSO/MFA, mínimo privilegio, perfiles de supervisor/agente/admin; dispositivos gestionados y cifrados, EDR/UEM, borrado remoto según propiedad. TLS y protección de medios según plataforma. Retención/grabación solo según finalidad/política, acceso restringido y auditoría. Canales digitales accesibles: semántica, teclado, foco, formularios claros, alternativas; IVR con opciones comprensibles y mecanismos alternativos. Datos personales minimizados y contexto visible solo al rol necesario. Logs protegidos.

### Pregunta 5 — Proponga un cuadro de mando y plan de operación: KPIs de contact center y calidad técnica, SLI/SLO/SLA, monitorización, incidentes, capacidad, pruebas de continuidad y estrategia de implantación/formación de agentes.

KPIs: nivel de servicio, tiempo de espera, abandono, AHT con cautela, resolución en primer contacto, transferencias/recontacto, satisfacción y calidad; por canal. Técnicos: disponibilidad, error, latencia, jitter/pérdida, ocupación de trunks, CPU/capacidad. Definir SLI/SLO/SLA y no optimizar un KPI aislado (AHT bajo puede empeorar resolución). Operación con NMS/APM/logs, incidentes/escalado, capacity forecast. Pruebas de carga y conmutación de sede/operador. Implantación piloto por colas/canales, formación práctica y hypercare.

### Errores que bajan mucho la nota

* Olvidar que VoiceXML/IVR es solo una parte del contact center.
* Sumar mal ancho de banda o olvidar que se pide por sentido.
* Creer que QoS sustituye capacidad.
* Dos carriers por la misma canalización ≠ diversidad real.
* Optimizar AHT sin contexto de calidad.

### Autocorrección específica

| Chequeo | Sí/No |
| --- | --- |
| He respondido exactamente a las cinco preguntas, sin convertir una de ellas en un tema genérico. |  |
| Mis decisiones de arquitectura, datos, seguridad y operación no se contradicen entre preguntas. |  |
| Cada tecnología o técnica nombrada tiene una razón vinculada al enunciado. |  |
| He distinguido hechos, supuestos y alternativas. |  |
| He incluido pruebas/evidencias de que la solución funcionaría, no solo diseño. |  |

Corrección — SIMULACRO 4 — Modernización cloud-native frente a transformación integral de un procedimiento

## Opción A — Modernización de una aplicación Java a plataforma de contenedores

**Mapa temático oculto:** II.06-II.07, II.10, II.15; III.01-III.04, III.06-III.08, III.10, III.12-III.13; IV.03-IV.06.

**Qué está buscando el corrector:** Se busca criterio arquitectónico: contenerizar y modularizar puede ser mejor que descomponer todo. Kubernetes no corrige mal diseño, datos acoplados ni falta de operación.

### Arquitectura mental antes de escribir

Monolito modular/servicios selectivos → contenedores/K8s → datos e integraciones versionadas → pipeline DevSecOps → observabilidad/HA/DR → migración por estrangulamiento.

### Pregunta 1 — Compare críticamente las tres alternativas de arquitectura y seleccione una estrategia razonada. Use criterios de acoplamiento, escalado, consistencia, despliegue, operación, habilidades, riesgo y reversibilidad.

Comparar: (1) monolito contenerizado/modular: menor riesgo y esfuerzo, despliegue más uniforme, escalado del conjunto; no da independencia fina. (2) extracción selectiva: conserva núcleo y separa dominios con picos/ciclo de vida distinto; equilibrio de complejidad. (3) microservicios completos: independencia y escalado por servicio, pero red distribuida, observabilidad, consistencia, contratos, datos, DevOps y skills más costosos. Con nueve meses y campaña cercana, escogería modularizar/contenizar y extraer solo 'hotspots' demostrados, usando strangler/anti-corruption adapters cuando proceda. Decisión revisable basada en métricas.

### Pregunta 2 — Diseñe la arquitectura de ejecución en contenedores: ingress/API, servicios, configuración/secretos, health checks, escalado, persistencia, red, observabilidad y alta disponibilidad. Explique qué aporta Kubernetes y qué problemas no resuelve por sí solo.

Ingress/reverse proxy/API gateway según necesidad, deployments/services, réplicas, autoscaling con límites, readiness/liveness/startup checks, config externa y secrets gestionados. Imágenes inmutables en registry. Resource requests/limits, anti-affinity y distribución por nodos/zonas. Network policies/segmentación y TLS. Observabilidad: métricas/logs/trazas y correlation IDs. Persistencia: BD externa/gestionada con HA, volúmenes persistentes solo si workload lo requiere. Kubernetes orquesta contenedores y resiliencia de pods/nodos, pero no garantiza HA de BD, backup, seguridad de app, calidad, consistencia ni DR.

### Pregunta 3 — Defina la estrategia de datos e integraciones durante la modernización: transacciones, compatibilidad de esquemas, versionado de APIs, idempotencia, mensajería cuando proceda y patrones para migrar sin big bang.

Mantener BD relacional al principio y ownership de datos explícito. Transacciones locales; evitar transacciones distribuidas si se extraen servicios. Para separación progresiva: API/adapter, outbox/CDC/eventos cuando se necesite consistencia eventual, saga solo si proceso lo justifica. APIs versionadas y compatibilidad hacia atrás; idempotency keys y reintentos con backoff/circuit breaker. Esquemas con expand-contract para despliegues progresivos; no hacer migration incompatible antes de que todos los pods sean compatibles. SOAP legado encapsulado en adaptadores.

### Pregunta 4 — Diseñe un pipeline DevSecOps y estrategia de pruebas/despliegue que reduzca la parada: artefactos reproducibles, SBOM/dependencias, SAST/SCA, tests, imágenes, IaC, canary/blue-green/rolling, migraciones de BD y rollback.

Pipeline: commit/PR→build reproducible→unitarias→static/SAST/SCA/secret scan→SBOM→package→imagen→image scan/firma/provenance según política→deploy test→integración/contract/e2e/performance/security→promoción. IaC/config-as-code revisado. Artefacto inmutable. Estrategias rolling/canary/blue-green según estado/coste. Feature flags para desacoplar release/activación. BD con migraciones versionadas compatibles. Rollback probado y opción roll-forward; observabilidad y criterios automáticos/manuales de abortar canary. Supply chain como infraestructura crítica.

### Pregunta 5 — Proponga el plan de nueve meses: hitos y criterios go/no-go antes de campaña, capacidad/carga, RPO/RTO, seguridad, costes/TCO, formación del equipo, métricas de operación y evaluación postimplantación.

Meses 1-2: baseline, deuda/dependencias, pruebas críticas, observabilidad y arquitectura. 3-4: contenerizar/modularizar, pipeline y entorno no productivo. 5-6: piloto/extracción hotspot y pruebas de carga/HA/restore. 7: preproducción con datos representativos y DR. 8: rehearsal/cutover y freeze de cambios de riesgo. 9: campaña con hypercare. Go/no-go por SLO, capacidad 6×, defectos, RTO/RPO probados y rollback. TCO incluye plataforma, licencias, nodos, operación 24x7, tooling/skills y coste de complejidad. Formación SRE/DevOps/K8s. Métricas: deployment frequency/change failure, p95, errores, saturación, MTTR y coste, sin convertirlas en fin.

### Errores que bajan mucho la nota

* 'Microservicios porque escalan' sin evaluar complejidad.
* Kubernetes = DR/backup/seguridad automática.
* Una BD por servicio desde el primer día sin plan de datos.
* Rolling deployment con migración de BD incompatible.
* Autoscaling como sustituto de capacity planning.

### Autocorrección específica

| Chequeo | Sí/No |
| --- | --- |
| He respondido exactamente a las cinco preguntas, sin convertir una de ellas en un tema genérico. |  |
| Mis decisiones de arquitectura, datos, seguridad y operación no se contradicen entre preguntas. |  |
| Cada tecnología o técnica nombrada tiene una razón vinculada al enunciado. |  |
| He distinguido hechos, supuestos y alternativas. |  |
| He incluido pruebas/evidencias de que la solución funcionaría, no solo diseño. |  |

## Opción B — Digitalización del procedimiento de inspecciones y autorizaciones

**Mapa temático oculto:** I.05-I.10; II.05-II.06, II.10, II.16; III.01-III.04, III.06-III.08, III.12-III.14; IV.12, IV.15.

**Qué está buscando el corrector:** Debe integrarse procedimiento administrativo, documento/expediente, movilidad offline, concurrencia, privacidad/accesibilidad y cambio organizativo.

### Arquitectura mental antes de escribir

Ciudadanía + inspector móvil → portal/app → backend/workflow → expediente/documentos → servicios comunes; offline sync con control de conflictos; transversal: ENS/ENI, privacidad, UEM, accesibilidad.

### Pregunta 1 — Modele el procedimiento objetivo y sus requisitos. Identifique actores, estados del expediente, documentos, reglas, excepciones, requisitos no funcionales y cómo realizaría la elicitación y homogeneización entre unidades.

Elicitación con unidades, inspectores, ciudadanía y responsables; observación de trabajo de campo; inventario de formularios/documentos/correos/hojas; mapa as-is/to-be y talleres para homogeneizar. Estados ejemplo: borrador/registrado/en revisión/asignado/en inspección/requerido-subsanación/propuesta/resuelto/notificado/cerrado, adaptados a norma real. Reglas/SLAs/excepciones y roles. NFR: disponibilidad, offline, seguridad, RPO/RTO, accesibilidad, rendimiento, auditabilidad, conservación. Requisitos verificables y trazabilidad proceso→requisito→workflow→prueba. No digitalizar todas las excepciones históricas sin decidir si son válidas.

### Pregunta 2 — Proponga la arquitectura de administración electrónica: portal, backend, workflow, gestor documental, identidad/firma, notificación, integraciones y expediente/documento electrónico. Explique dónde aplicaría interoperabilidad y trazabilidad.

Portal ciudadano accesible; backend de expediente; motor workflow/BPM; gestor documental con metadatos/versiones; identidad/firma/registro/notificación y servicios comunes cuando procedan; APIs de integración; BD transaccional; auditoría. Documento/expediente electrónico gestionan contenido, metadatos, integridad y ciclo. ENI/NTI para interoperabilidad en el ámbito aplicable, ENS para seguridad y leyes de procedimiento/sector público como marco. Usar estándares/contratos y servicios comunes evita duplicar capacidades. Firma solo en actos/documentos que la requieran, no como sustituto de autenticación general.

### Pregunta 3 — Diseñe la solución móvil para inspectores: modelo online/offline, almacenamiento local, sincronización, conflictos, identidad, UEM/MDM, cifrado, borrado remoto, conectividad y protección del material capturado.

Aplicación/PWA o móvil gestionado según capacidades; caché/BD local cifrada con subconjunto mínimo de expedientes asignados. Cola local de operaciones con identificador único/idempotencia; sincronización al recuperar red. Version/timestamp/ETag para control optimista y detección de conflicto; no last-write-wins silencioso en datos críticos. Estrategia de merge o resolución por usuario/supervisor. Tokens/credenciales protegidos y expiración; no guardar secretos en texto. UEM/MDM: enrolment, certificados, compliance, cifrado, apps, bloqueo/borrado, acceso condicional. Fotos con metadatos mínimos necesarios y subida segura; borrado local tras confirmación según política.

### Pregunta 4 — Defina el modelo de datos, seguridad, protección de datos, ENS/ENI y accesibilidad. Incluya control de concurrencia para evitar actualizaciones perdidas, auditoría, retención y criterios para publicar únicamente datos abiertos adecuados.

Modelo relacional de expediente, persona/interesado, representación si aplica, documentos, inspección, actuaciones, estados/transiciones y auditoría; PK/FK y normalización. Concurrencia con transacciones cortas/MVCC/control optimista; evitar lost update. Seguridad: RBAC/ABAC, MFA privilegiado, TLS, cifrado de dispositivo, logs, segregación y mínimo privilegio. Protección de datos: finalidad/minimización/retención; acceso a expedientes por necesidad. ENS/ENI según alcance. Accesibilidad web y app pública desde requisitos/pruebas. Datos abiertos: solo conjuntos con base/criterio de reutilización, agregados/anonimizados adecuadamente y sin publicar datos personales por defecto; catálogo/licencia/metadatos cuando proceda.

### Pregunta 5 — Proponga un plan de 14 meses: gobierno y metodología, piloto, migración de expedientes activos, pruebas de datos/procedimientos/accesibilidad, formación, soporte, métricas de adopción y estrategia de retirada del papel y herramientas dispersas.

Gobierno híbrido con entregas incrementales y hitos formales. Meses iniciales: catálogo/proceso común y prototipos; construir MVP/piloto con una unidad/territorio; migrar expedientes activos con mapping/reconciliación y acceso controlado al histórico; expandir por oleadas. Pruebas: workflow/reglas, datos, offline/conflictos, dispositivos, seguridad, accesibilidad, backup/restore y procedimientos de campo. Formación por inspectores/tramitadores/soporte, sandbox y formadores. Hypercare y métricas: trámites digitales, tiempo de ciclo, errores/retrabajo, sincronizaciones conflictivas, incidencias, accesibilidad y satisfacción. Retirada progresiva del papel/hojas tras criterios de aceptación, conservación y plan de contingencia.

### Errores que bajan mucho la nota

* Tratar el expediente electrónico como una carpeta de PDFs.
* Sincronizar offline con 'última escritura gana' sin detectar conflictos.
* Usar firma en cada interacción por defecto.
* Publicar 'open data' sin analizar datos personales/finalidad.
* Olvidar cambio organizativo y homogeneización de reglas.

### Autocorrección específica

| Chequeo | Sí/No |
| --- | --- |
| He respondido exactamente a las cinco preguntas, sin convertir una de ellas en un tema genérico. |  |
| Mis decisiones de arquitectura, datos, seguridad y operación no se contradicen entre preguntas. |  |
| Cada tecnología o técnica nombrada tiene una razón vinculada al enunciado. |  |
| He distinguido hechos, supuestos y alternativas. |  |
| He incluido pruebas/evidencias de que la solución funcionaría, no solo diseño. |  |

# Contradicciones críticas que debes eliminar

* **Réplica, snapshot o RAID = backup.** No: tienen objetivos y dominios de fallo diferentes.
* **HA = DR.** Alta disponibilidad local no cubre necesariamente pérdida de sitio.
* **VLAN = firewall.** Segmenta broadcast, pero la frontera de seguridad requiere política/control.
* **MPLS = cifrado.** MPLS no cifra por sí mismo.
* **Cloud = responsabilidad transferida.** Cambia el reparto de responsabilidades; no elimina gobierno, seguridad, backup o salida.
* **Kubernetes = microservicios/DR/seguridad.** Es orquestación; no repara arquitectura ni datos.
* **HTTPS = aplicación segura.** TLS protege transporte, no autorización, inyección o lógica.
* **Firma = autenticación general.** Son funciones distintas.
* **Consumir presupuesto = avance.** AC no es EV.
* **Accesibilidad se prueba al final.** Debe estar en requisitos, diseño, construcción y pruebas.
* **OLAP = data mining.** Uno explora/agrega; el otro busca patrones/modelos.
* **NoSQL/Big Data por volumen o moda.** Se justifican por patrón, escala, consistencia y coste.
* **Buena señal Wi-Fi = buena capacidad.** Medio compartido: importan interferencia, aire, clientes y uplink.
* **QoS crea ancho de banda.** Prioriza bajo congestión; no aumenta capacidad física.
* **Rollback de aplicación siempre es trivial.** Esquema de BD, eventos o efectos externos pueden impedir volver atrás.

## Regla de cierre

En cada respuesta intenta dejar una cadena causal visible: **requisito/riesgo → decisión → mecanismo → prueba/evidencia → operación/recuperación.** Esa cadena vale más que una lista larga de nombres.
